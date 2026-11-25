"""Fetch subject-exact open-licensed Wikimedia Commons photos for V8.0.

Usage:
  uv run python scripts/fetch_v8_authentic_images.py --groups brands
  uv run python scripts/fetch_v8_authentic_images.py --all --contact-sheets
"""

from __future__ import annotations

import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
import hashlib
import json
import pathlib
import re
import subprocess
import sys
import threading
import time
import urllib.error
import urllib.parse
import urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
import v8_image_targets as T  # noqa: E402

PROVENANCE_PATH = ROOT / "src" / "data" / "imageProvenanceV8.json"
CONTACT_DIR = pathlib.Path(
    r"C:\Users\admin\.gemini\antigravity\brain\563fc13b-fb97-4891-9990-9294dff2c297\scratch\contact_sheets_v8"
)
HEADERS = {
    "User-Agent": "ChineseCultureExplorerV8/1.0 (https://chinese-culture-explorer.netlify.app; educational-heritage)"
}

ALLOWED_LICENSES = ("cc0", "pd", "public domain", "cc by", "cc-by", "gfdl", "fal", "free")
BAD_TITLE_TOKENS = (
    "locator",
    "location_map",
    "map_of",
    "flag_of",
    "coat_of_arms",
    "diagram",
    "chart",
    "signature",
    "route_map",
    "blank_map",
    "行政区划",
    "地图",
    "logo",
    "mhnt.bot",
    "herbarium",
    "pelliot",
    "station_",
    "_station",
    "platform_",
    "纪念碑",
    "banijay",
    "tuenti",
    "japanhomes",
    "schriesheim",
    "wehweck",
    "pewter",
    "elementary",
    "primary_school",
    "rhythm_banerjee",
    "australian",
    "印章",
    "_map",
    "campus_map",
    "bus_route",
    "shuttle_bus",
    "traffic_signal",
    "toilet",
    "98th_foot",
    "welsh_giant",
    "lotus_europa",
    "meitei",
    "museo_egizio",
    "usammc",
    "gims0",
    "radishes",
    "bodo_tribal",
    "ferrocarril",
    "arne_jacobsen",
    "zhao_mengfu",
    "jiang_ziya",
    "zhu_yizun",
    "zheng_chenggong",
    "hudiedao",
    "rostock",
    "ton_nu",
    "dong_phaya",
    "hampton_by_hilton",
    "comb,_china",
    "hospital_of_guangzhou",
    "cookies_for_sale",
    "wedding2",
    "crater",
    "location_of",
    "miss_universe",
    "dendrocopos",
    "carabus",
    "mutillidae",
    "us_navy",
    "air_dc",
    "sandage",
    "solow",
    "gell-mann",
    "migrantmother",
    "leaguecup",
    "belrupt",
    "grand_duke",
    "osaka_university",
    "audi_q5",
    "exit_281",
    "bill_laimbeer",
    "bruse.jpg",
    "sliced_sausages",
    "barcelona",
    "al-muqtader",
    "mabubas",
    "yantra_river",
    "osugi",
    "e-1_vorne",
    "longspur",
    "mucuna_macrocarpa",
    "james_gunn",
    "waterhouse",
    "oshawa",
    "saint-hilaire",
    "ucr_university",
    "fang",
    "miyamaki",
    "peißnitzhaus",
    "friedrich-wilhelm",
    "sundance",
    "magnolia_flower",
    "herculaneum",
    "palm_house",
    "情人石",
    "lanxi",
)


def http_get_json(url: str) -> dict:
    for attempt in range(4):
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=14) as resp:
                return json.loads(resp.read().decode("utf-8"))
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 502, 503, 504) and attempt < 3:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise
    return {}


def download_bytes(url: str) -> bytes:
    for attempt in range(3):
        req = urllib.request.Request(url, headers=HEADERS)
        try:
            with urllib.request.urlopen(req, timeout=18) as resp:
                return resp.read()
        except urllib.error.HTTPError as exc:
            if exc.code in (429, 502, 503, 504) and attempt < 2:
                time.sleep(1.5 * (attempt + 1))
                continue
            raise
    return b""


def load_existing_hashes() -> tuple[set[str], set[str]]:
    md5s: set[str] = set()
    shas: set[str] = set()
    for fp in (ROOT / "assets" / "images").rglob("*"):
        if fp.is_file() and "/contact_sheets" not in fp.as_posix():
            data = fp.read_bytes()
            md5s.add(hashlib.md5(data).hexdigest())
            shas.add(hashlib.sha256(data).hexdigest())
    return md5s, shas


def license_ok(extmeta: dict) -> tuple[bool, str]:
    lic = str((extmeta.get("LicenseShortName") or {}).get("value") or "").strip()
    low = lic.lower()
    if not low:
        return True, "Commons"
    return any(tok in low for tok in ALLOWED_LICENSES), lic


def title_acceptable(title: str) -> bool:
    low = title.lower().replace(" ", "_")
    if any(bad in low for bad in BAD_TITLE_TOKENS):
        return False
    if re.search(r"(?:^|[_\-])map(?:[_\-\.]|$)", low):
        return False
    return True


def expand_queries(queries: list[str]) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()
    for q in queries:
        qs = q.strip()
        if qs and qs not in seen:
            out.append(qs)
            seen.add(qs)
        if qs.isascii():
            words = [w for w in qs.split() if len(w) > 2]
            if len(words) >= 4:
                short3 = " ".join(words[:3])
                if short3 not in seen:
                    out.append(short3)
                    seen.add(short3)
                short2 = " ".join(words[:2])
                if len(words[0]) > 3 and short2 not in seen:
                    out.append(short2)
                    seen.add(short2)
    return out


def search_commons(queries: list[str], used_titles: set[str]) -> dict | None:
    for q in expand_queries(queries):
        params = urllib.parse.urlencode(
            {
                "action": "query",
                "generator": "search",
                "gsrnamespace": "6",
                "gsrsearch": f"filetype:bitmap {q}",
                "gsrlimit": "10",
                "prop": "imageinfo",
                "iiprop": "url|size|mime|extmetadata",
                "iiurlwidth": "1100",
                "format": "json",
            }
        )
        url = f"https://commons.wikimedia.org/w/api.php?{params}"
        try:
            data = http_get_json(url)
        except Exception as exc:
            print(f"    [WARN] API query error '{q}': {exc}")
            time.sleep(0.8)
            continue

        pages = list((data.get("query") or {}).get("pages", {}).values())
        pages.sort(key=lambda pg: pg.get("index", 999))
        for pg in pages:
            title = pg.get("title", "")
            if not title or title in used_titles or not title_acceptable(title):
                continue
            ii = (pg.get("imageinfo") or [{}])[0]
            mime = ii.get("mime", "")
            if mime not in ("image/jpeg", "image/png"):
                continue
            w = int(ii.get("width") or 0)
            h = int(ii.get("height") or 0)
            if w < 500 or h < 320:
                continue
            ratio = w / float(h)
            if ratio < 0.42 or ratio > 2.8:
                continue
            ext = ii.get("extmetadata") or {}
            ok_lic, lic_name = license_ok(ext)
            if not ok_lic:
                continue
            dl_url = ii.get("thumburl") or ii.get("url")
            if not dl_url:
                continue
            artist = re.sub(r"<[^>]+>", "", str((ext.get("Artist") or {}).get("value") or "Wikimedia Contributor")).strip()
            return {
                "title": title,
                "commonsUrl": ii.get("descriptionurl") or f"https://commons.wikimedia.org/wiki/{urllib.parse.quote(title.replace(' ', '_'))}",
                "dlUrl": dl_url,
                "width": w,
                "height": h,
                "license": lic_name,
                "author": artist[:100],
                "query": q,
            }
        time.sleep(0.18)
    return None


def normalize_to_jpeg(files: list[pathlib.Path], max_px: int = 1200) -> None:
    if not files:
        return
    arr = ",".join(f'"{str(p)}"' for p in files)
    ps = f"""
Add-Type -AssemblyName System.Drawing
$files = @({arr})
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {{ $_.MimeType -eq "image/jpeg" }} | Select-Object -First 1
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 84L)
foreach ($f in $files) {{
  try {{
    $img = [System.Drawing.Image]::FromFile($f)
    $w = $img.Width; $h = $img.Height
    $scale = 1.0
    if ([Math]::Max($w, $h) -gt {max_px}) {{ $scale = {max_px} / [double][Math]::Max($w, $h) }}
    $nw = [int][Math]::Max(1, [Math]::Round($w * $scale))
    $nh = [int][Math]::Max(1, [Math]::Round($h * $scale))
    $isJpg = ($img.RawFormat.Guid -eq [System.Drawing.Imaging.ImageFormat]::Jpeg.Guid)
    if (-not $isJpg -or $scale -lt 1.0) {{
      $bmp = New-Object System.Drawing.Bitmap $nw, $nh
      $g = [System.Drawing.Graphics]::FromImage($bmp)
      $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
      $g.DrawImage($img, 0, 0, $nw, $nh)
      $g.Dispose(); $img.Dispose()
      $tmp = "$f.tmp.jpg"
      $bmp.Save($tmp, $enc, $ep)
      $bmp.Dispose()
      Move-Item $tmp $f -Force
    }} else {{
      $img.Dispose()
    }}
  }} catch {{
    Write-Host "Normalize skip $f : $_"
  }}
}}
"""
    subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=False)


def render_contact_sheets(provenance: dict, items: list[tuple[str, str, str, list[str]]], prefix: str) -> None:
    CONTACT_DIR.mkdir(parents=True, exist_ok=True)
    valid = [(eid, zh, rel) for eid, zh, rel, _ in items if (ROOT / rel).is_file()]
    if not valid:
        return
    for chunk_idx in range(0, len(valid), 12):
        chunk = valid[chunk_idx:chunk_idx + 12]
        out_jpg = CONTACT_DIR / f"sheet_{prefix}_{(chunk_idx // 12) + 1:02d}.jpg"
        entries_ps = []
        for eid, zh, rel in chunk:
            fpath = str(ROOT / rel).replace('"', '""')
            label = f"{eid} | {rel.split('/')[-1]}".replace('"', '""')
            entries_ps.append(f'@{{path="{fpath}";label="{label}"}}')
        arr_ps = ",".join(entries_ps)
        ps = f"""
Add-Type -AssemblyName System.Drawing
$items = @({arr_ps})
$cols = 4; $rows = [Math]::Ceiling($items.Count / 4.0)
$cw = 320; $ch = 240; $pad = 12; $th = 28
$W = $cols * ($cw + $pad) + $pad
$H = [int]($rows * ($ch + $th + $pad) + $pad)
$bmp = New-Object System.Drawing.Bitmap $W, $H
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.Clear([System.Drawing.Color]::FromArgb(251, 249, 244))
$font = New-Object System.Drawing.Font("Consolas", 10, [System.Drawing.FontStyle]::Bold)
$brush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::FromArgb(29, 27, 24))
$pen = New-Object System.Drawing.Pen([System.Drawing.Color]::FromArgb(220, 212, 198), 1)
for ($i = 0; $i -lt $items.Count; $i++) {{
  $c = $i % $cols; $r = [int][Math]::Floor($i / $cols)
  $x = $pad + $c * ($cw + $pad); $y = $pad + $r * ($ch + $th + $pad)
  try {{
    $src = [System.Drawing.Image]::FromFile($items[$i].path)
    $g.DrawImage($src, $x, $y, $cw, $ch)
    $src.Dispose()
  }} catch {{}}
  $g.DrawRectangle($pen, $x, $y, $cw, $ch)
  $g.DrawString($items[$i].label, $font, $brush, $x + 2, $y + $ch + 5)
}}
$enc = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object {{ $_.MimeType -eq "image/jpeg" }} | Select-Object -First 1
$ep = New-Object System.Drawing.Imaging.EncoderParameters 1
$ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, 82L)
$bmp.Save("{str(out_jpg)}", $enc, $ep)
$font.Dispose(); $brush.Dispose(); $pen.Dispose(); $g.Dispose(); $bmp.Dispose()
"""
        subprocess.run(["powershell", "-NoProfile", "-Command", ps], check=False)


def main() -> int:
    parser = argparse.ArgumentParser(description="Fetch V8.0 subject-exact Wikimedia Commons images.")
    parser.add_argument("--groups", nargs="+", default=[], help=f"Groups: {', '.join(T.GROUPS.keys())}")
    parser.add_argument("--all", action="store_true", help="Fetch all 10 curated groups")
    parser.add_argument("--limit", type=int, default=0, help="Optional limit per group for quick test")
    parser.add_argument("--workers", type=int, default=1, help="Concurrent worker threads (default: 1 to avoid 429)")
    parser.add_argument("--contact-sheets", action="store_true", help="Render 12-tile JPEG contact sheets")
    args = parser.parse_args()

    selected = list(T.GROUPS.keys()) if args.all else (args.groups or ["brands", "csc", "gis"])
    prov: dict = {}
    if PROVENANCE_PATH.is_file():
        try:
            prov = json.loads(PROVENANCE_PATH.read_text(encoding="utf-8"))
        except Exception:
            prov = {}

    md5s, shas = load_existing_hashes()
    used_titles: set[str] = {str(v.get("commonsTitle")) for v in prov.values() if isinstance(v, dict) and v.get("commonsTitle")}
    lock = threading.Lock()

    total_ok = 0
    total_miss = []

    def process_one(gname: str, eid: str, zh: str, rel: str, queries: list[str]):
        dest = ROOT / rel
        dest.parent.mkdir(parents=True, exist_ok=True)
        if dest.is_file() and dest.stat().st_size > 6000 and eid in prov:
            return ("skip", eid, zh, rel, None, None)

        with lock:
            snapshot_titles = set(used_titles)
        hit = search_commons(queries, snapshot_titles)
        if not hit:
            return ("miss", eid, zh, rel, queries, None)

        try:
            raw = download_bytes(hit["dlUrl"])
        except Exception as exc:
            return ("err", eid, zh, rel, exc, None)

        if len(raw) < 6000:
            return ("small", eid, zh, rel, len(raw), None)

        sha = hashlib.sha256(raw).hexdigest()
        md5 = hashlib.md5(raw).hexdigest()
        with lock:
            if sha in shas or md5 in md5s or hit["title"] in used_titles:
                used_titles.add(hit["title"])
                return ("dup", eid, zh, rel, hit["title"], None)
            dest.write_bytes(raw)
            shas.add(sha)
            md5s.add(md5)
            used_titles.add(hit["title"])
            prov[eid] = {
                "targetFile": rel,
                "zh": zh,
                "group": gname,
                "commonsTitle": hit["title"],
                "commonsUrl": hit["commonsUrl"],
                "license": hit["license"],
                "author": hit["author"],
                "origDimensions": [hit["width"], hit["height"]],
                "queryUsed": hit["query"],
                "md5": md5,
            }
        return ("ok", eid, zh, rel, hit["title"], len(raw))

    for gname in selected:
        if gname not in T.GROUPS:
            print(f"[SKIP] Unknown group {gname}", flush=True)
            continue
        targets = T.GROUPS[gname]
        if args.limit > 0:
            targets = targets[:args.limit]
        print(f"\n=== GROUP {gname.upper()} ({len(targets)} targets) ===", flush=True)
        batch_new: list[pathlib.Path] = []
        new_ids: list[str] = []

        with ThreadPoolExecutor(max_workers=max(1, args.workers)) as pool:
            futs = [pool.submit(process_one, gname, eid, zh, rel, qs) for eid, zh, rel, qs in targets]
            for fut in as_completed(futs):
                status, eid, zh, rel, info, size_b = fut.result()
                if status == "skip":
                    total_ok += 1
                elif status == "ok":
                    total_ok += 1
                    batch_new.append(ROOT / rel)
                    new_ids.append(eid)
                    print(f"  [OK] {eid} -> {rel} <- {info} ({size_b // 1024} KB)", flush=True)
                else:
                    print(f"  [{status.upper()}] {eid} ({zh}): {info}", flush=True)
                    total_miss.append((gname, eid, zh))

        if batch_new:
            normalize_to_jpeg(batch_new, max_px=1200)
            for eid_n, fp_n in zip(new_ids, batch_new):
                if fp_n.is_file() and eid_n in prov:
                    prov[eid_n]["md5"] = hashlib.md5(fp_n.read_bytes()).hexdigest()
                    prov[eid_n]["bytes"] = fp_n.stat().st_size

        PROVENANCE_PATH.parent.mkdir(parents=True, exist_ok=True)
        PROVENANCE_PATH.write_text(json.dumps(prov, ensure_ascii=False, indent=2), encoding="utf-8")

        if args.contact_sheets:
            render_contact_sheets(prov, targets, gname)

    print(f"\nDONE: resolved_or_existing={total_ok}, misses={len(total_miss)}", flush=True)
    for m in total_miss:
        print("  MISSING:", m, flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
