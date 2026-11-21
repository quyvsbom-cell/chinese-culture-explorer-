"""Fetch and simplify China's 34-province natural boundary GeoJSON into
assets/data/china-34-provinces.geo.json (< 85 KB) AND pre-project clean 2D/3D
polygon rings into src/data/china34GeoPaths.js (window.CCE_CHINA_GEO) so
Zero-Build works offline and online for both 2D GeoJSON SVG & Three.js 3D Relief Map.

Usage: uv run python scripts/build_china_geojson.py
"""

from __future__ import annotations

import json
import pathlib
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT_GEO = ROOT / "assets" / "data" / "china-34-provinces.geo.json"
OUT_JS = ROOT / "src" / "data" / "china34GeoPaths.js"

ADCODE_TO_PROV = {
    110000: "prov-beijing",
    120000: "prov-tianjin",
    130000: "prov-hebei",
    140000: "prov-shanxi",
    150000: "prov-inner-mongolia",
    210000: "prov-liaoning",
    220000: "prov-jilin",
    230000: "prov-heilongjiang",
    310000: "prov-shanghai",
    320000: "prov-jiangsu",
    330000: "prov-zhejiang",
    340000: "prov-anhui",
    350000: "prov-fujian",
    360000: "prov-jiangxi",
    370000: "prov-shandong",
    410000: "prov-henan",
    420000: "prov-hubei",
    430000: "prov-hunan",
    440000: "prov-guangdong",
    450000: "prov-guangxi",
    460000: "prov-hainan",
    500000: "prov-chongqing",
    510000: "prov-sichuan",
    520000: "prov-guizhou",
    530000: "prov-yunnan",
    540000: "prov-tibet",
    610000: "prov-shaanxi",
    620000: "prov-gansu",
    630000: "prov-qinghai",
    640000: "prov-ningxia",
    650000: "prov-xinjiang",
    710000: "prov-taiwan",
    810000: "prov-hongkong",
    820000: "prov-macau",
}


def project_xy(lon: float, lat: float) -> tuple[float, float]:
    # Clean aspect-preserving projection onto SVG [20..900, 18..602]
    # China mainland + Taiwan + Hainan bounds roughly lon 73..135.5, lat 18..53.6
    x = (lon - 73.0) / (135.5 - 73.0) * 880.0 + 20.0
    # Cosine latitude visual balance around mid-lat 35N
    y = (54.0 - lat) / (54.0 - 17.5) * 584.0 + 18.0
    return round(x, 1), round(y, 1)


def dp_simplify(pts: list[list[float]], tol: float) -> list[list[float]]:
    if len(pts) <= 4:
        return pts
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        a, b = stack.pop()
        if b - a <= 1:
            continue
        x1, y1 = pts[a]
        x2, y2 = pts[b]
        dx, dy = x2 - x1, y2 - y1
        denom = dx * dx + dy * dy
        max_d = -1.0
        idx = -1
        for i in range(a + 1, b):
            px, py = pts[i]
            if denom == 0:
                d2 = (px - x1) ** 2 + (py - y1) ** 2
            else:
                t = max(0.0, min(1.0, ((px - x1) * dx + (py - y1) * dy) / denom))
                qx, qy = x1 + t * dx, y1 + t * dy
                d2 = (px - qx) ** 2 + (py - qy) ** 2
            if d2 > max_d:
                max_d = d2
                idx = i
        if max_d > tol * tol and idx > 0:
            keep[idx] = True
            stack.append((a, idx))
            stack.append((idx, b))
    return [p for p, k in zip(pts, keep) if k]


def ring_area(ring: list[list[float]]) -> float:
    a = 0.0
    for i in range(len(ring) - 1):
        a += ring[i][0] * ring[i + 1][1] - ring[i + 1][0] * ring[i][1]
    return abs(a) * 0.5


def simplify_geom(geom: dict, tol: float):
    gtype = geom["type"]
    polys = geom["coordinates"] if gtype == "MultiPolygon" else [geom["coordinates"]]
    kept_polys = []
    scored = []
    for poly in polys:
        if not poly:
            continue
        scored.append((ring_area(poly[0]), poly))
    scored.sort(key=lambda x: x[0], reverse=True)
    for idx, (ar, poly) in enumerate(scored):
        if idx > 0 and ar < 0.03 and idx >= 3:
            continue
        sim = dp_simplify(poly[0], tol if ar > 0.2 else tol * 0.35)
        if len(sim) < 4:
            step = max(1, len(poly[0]) // 8)
            sim = poly[0][::step]
            if sim[0] != sim[-1]:
                sim.append(sim[0])
        kept_polys.append([[[round(pt[0], 2), round(pt[1], 2)] for pt in sim]])
    return {"type": "MultiPolygon", "coordinates": kept_polys}


def main():
    # Reuse downloaded raw if already on disk, or fetch cleanly
    if OUT_GEO.exists() and OUT_GEO.stat().st_size > 15000:
        geo_obj = json.loads(OUT_GEO.read_text(encoding="utf-8"))
        out_features = geo_obj["features"]
    else:
        url = "https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json"
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r:
            raw = json.loads(r.read().decode("utf-8"))
        out_features = []
        for feat in raw.get("features", []):
            props = feat.get("properties", {})
            adcode = props.get("adcode")
            if adcode not in ADCODE_TO_PROV:
                continue
            pid = ADCODE_TO_PROV[adcode]
            tol = 0.015 if pid in ("prov-hongkong", "prov-macau", "prov-shanghai", "prov-beijing", "prov-tianjin", "prov-hainan", "prov-taiwan") else 0.17
            geom = simplify_geom(feat["geometry"], tol=tol)
            centroid = props.get("center") or props.get("centroid") or [104.0, 35.0]
            out_features.append({
                "type": "Feature",
                "id": pid,
                "properties": {"id": pid, "nameZh": props.get("name", ""), "center": [round(centroid[0], 2), round(centroid[1], 2)]},
                "geometry": geom,
            })
        OUT_GEO.parent.mkdir(parents=True, exist_ok=True)
        OUT_GEO.write_text(json.dumps({"type": "FeatureCollection", "features": out_features}, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")

    # Project clean SVG paths + 2D vertex rings for 3D Three.js extrusion
    projected = {}
    for feat in out_features:
        pid = feat["id"]
        c_lon, c_lat = feat["properties"]["center"]
        cx, cy = project_xy(c_lon, c_lat)
        rings_xy = []
        path_cmds = []
        for poly in feat["geometry"]["coordinates"]:
            ring = poly[0]
            px_pts = [project_xy(lon, lat) for lon, lat in ring]
            if len(px_pts) < 3:
                continue
            rings_xy.append(px_pts)
            segs = [f"M{px_pts[0][0]},{px_pts[0][1]}"] + [f"L{p[0]},{p[1]}" for p in px_pts[1:]] + ["Z"]
            path_cmds.append("".join(segs))
        projected[pid] = {
            "cx": cx,
            "cy": cy,
            "d": " ".join(path_cmds),
            "rings": rings_xy,
        }

    js_out = (
        "// Auto-generated from assets/data/china-34-provinces.geo.json (34 Natural Boundaries)\n"
        "window.CCE_CHINA_GEO = " + json.dumps(projected, ensure_ascii=False, separators=(",", ":")) + ";\n"
    )
    OUT_JS.write_text(js_out, encoding="utf-8")
    print(f"Generated {OUT_JS} ({len(projected)} units, {OUT_JS.stat().st_size / 1024:.1f} KB)")


if __name__ == "__main__":
    main()
