"""Wire verified V8.0 Wikimedia Commons image paths into all JS data bundles.

Replaces only entries present in src/data/imageProvenanceV8.json whose local file
exists on disk (> 5 KB), using exact JSON splicing for V5/V6/V7 bundles and
targeted string replacements for Editorial Pack, V3 HERO_MAP, and Batch 2026.

Usage: uv run python scripts/wire_v8_authentic_images.py
"""

from __future__ import annotations

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))
import v8_image_targets as T  # noqa: E402

PROVENANCE_PATH = ROOT / "src" / "data" / "imageProvenanceV8.json"


def load_verified_map() -> dict[str, str]:
    if not PROVENANCE_PATH.is_file():
        return {}
    prov = json.loads(PROVENANCE_PATH.read_text(encoding="utf-8"))
    verified: dict[str, str] = {}
    for eid, meta in prov.items():
        if not isinstance(meta, dict):
            continue
        rel = str(meta.get("targetFile") or "").strip().lstrip("/")
        fp = ROOT / rel
        if rel and fp.is_file() and fp.stat().st_size > 5000:
            verified[eid] = rel
    return verified


def patch_json_bundle(path: pathlib.Path, marker: str, mutator) -> int:
    txt = path.read_text(encoding="utf-8")
    idx = txt.find(marker)
    if idx < 0:
        raise RuntimeError(f"Marker '{marker}' not found in {path}")
    start_pos = idx + len(marker)
    decoder = json.JSONDecoder()
    obj, end_pos = decoder.raw_decode(txt, start_pos)
    changes = mutator(obj)
    if changes > 0:
        dumped = json.dumps(obj, ensure_ascii=False, indent=2)
        new_txt = txt[:start_pos] + dumped + txt[end_pos:]
        path.write_text(new_txt, encoding="utf-8")
    return changes


def mutate_v5(obj: dict, vmap: dict[str, str]) -> int:
    changed = 0
    for k, entry in (obj.get("brandEnrich") or {}).items():
        if k in vmap and isinstance(entry, dict) and entry.get("imagePath") != vmap[k]:
            entry["imagePath"] = vmap[k]
            changed += 1
    for k, entry in (obj.get("giEnrich") or {}).items():
        if k in vmap and isinstance(entry, dict) and entry.get("imagePath") != vmap[k]:
            entry["imagePath"] = vmap[k]
            changed += 1
    for k, entry in (obj.get("lessonEnrich") or {}).items():
        if k in vmap and isinstance(entry, dict) and entry.get("imagePath") != vmap[k]:
            entry["imagePath"] = vmap[k]
            changed += 1
    for entry in obj.get("module7Lessons") or []:
        eid = entry.get("id")
        if eid in vmap and entry.get("imagePath") != vmap[eid]:
            entry["imagePath"] = vmap[eid]
            changed += 1
    return changed


def mutate_v6(obj: dict, vmap: dict[str, str]) -> int:
    changed = 0
    bc = obj.get("CCE_V6_BRANDS_CRAFT") or {}
    for arr_key in ("brandsAdditional40", "brandsAdditional36", "giAdditional18"):
        for item in bc.get(arr_key) or []:
            eid = item.get("id")
            if eid in vmap and item.get("imagePath") != vmap[eid]:
                item["imagePath"] = vmap[eid]
                changed += 1

    cos = obj.get("CCE_V6_COSMOLOGY_VISUAL") or {}
    for item in cos.get("culinaryHerbs48") or []:
        eid = item.get("id")
        if eid in vmap and item.get("imagePath") != vmap[eid]:
            item["imagePath"] = vmap[eid]
            changed += 1

    tr = obj.get("CCE_V6_TRADE_AND_CSC") or {}
    for arr_key in ("extraSupplyCases16", "cscUniversities24Atlas"):
        for item in tr.get(arr_key) or []:
            eid = item.get("id")
            if eid in vmap and item.get("imagePath") != vmap[eid]:
                item["imagePath"] = vmap[eid]
                changed += 1

    for item in tr.get("sinoVietWonders10") or []:
        wid = str(item.get("id") or "")
        ch_key = f"{wid}-ch"
        if ch_key in vmap and item.get("chinaImg") != vmap[ch_key]:
            item["chinaImg"] = vmap[ch_key]
            changed += 1
    return changed


def mutate_v7(obj: dict, vmap: dict[str, str]) -> int:
    changed = 0
    for arr_key in (
        "brandsAdditional20",
        "giAdditional12",
        "lessons18",
        "herbs12",
        "extraSupplyCases10",
        "cscUniversities12",
        "heritageExpeditions16",
    ):
        for item in obj.get(arr_key) or []:
            eid = item.get("id")
            if eid in vmap and item.get("imagePath") != vmap[eid]:
                item["imagePath"] = vmap[eid]
                changed += 1

    for item in obj.get("sinoVietWonders6") or []:
        wid = str(item.get("id") or "")
        ch_key = f"{wid}-ch"
        if ch_key in vmap and item.get("chinaImg") != vmap[ch_key]:
            item["chinaImg"] = vmap[ch_key]
            changed += 1
    return changed


def patch_editorial_pack(vmap: dict[str, str]) -> int:
    fp = ROOT / "src" / "data" / "editorialMediaPack2026.js"
    txt = fp.read_text(encoding="utf-8")
    changed = 0
    for eid, _zh, _rel, _q in T.EDITORIAL_TARGETS:
        if eid not in vmap:
            continue
        pat = re.compile(
            r'("id"\s*:\s*"' + re.escape(eid) + r'"\s*,\s*"src"\s*:\s*")([^"]+)(")'
        )
        new_txt, cnt = pat.subn(lambda m: m.group(1) + vmap[eid] + m.group(3), txt, count=1)
        if cnt > 0 and new_txt != txt:
            txt = new_txt
            changed += cnt
    if changed:
        fp.write_text(txt, encoding="utf-8")
    return changed


def patch_v3_hero_maps(vmap: dict[str, str]) -> int:
    total = 0
    files = sorted((ROOT / "src" / "data" / "v3").glob("articlesExpansionV3*.js"))
    for fp in files:
        txt = fp.read_text(encoding="utf-8")
        changed = 0
        for tid, hkey in T.V3_HERO_SLUG_TO_KEY.items():
            if tid not in vmap:
                continue
            pat = re.compile(r'("' + re.escape(hkey) + r'"\s*:\s*")([^"]+)(")')
            new_txt, cnt = pat.subn(lambda m: m.group(1) + vmap[tid] + m.group(3), txt, count=1)
            if cnt > 0 and new_txt != txt:
                txt = new_txt
                changed += cnt
        if changed:
            fp.write_text(txt, encoding="utf-8")
            total += changed
    return total


def patch_batch2026_articles(vmap: dict[str, str]) -> int:
    fp = ROOT / "src" / "data" / "articlesExpansionBatch2026.js"
    txt = fp.read_text(encoding="utf-8")
    changed = 0
    for tid, aid in T.BATCH26_ID_TO_TARGET_KEY.items():
        if tid not in vmap:
            continue
        pat = re.compile(
            r'(id:\s*"' + re.escape(aid) + r'".*?heroImage:\s*\{\s*src:\s*")([^"]+)(")',
            re.S,
        )
        new_txt, cnt = pat.subn(lambda m: m.group(1) + vmap[tid] + m.group(3), txt, count=1)
        if cnt > 0 and new_txt != txt:
            txt = new_txt
            changed += cnt
    if changed:
        fp.write_text(txt, encoding="utf-8")
    return changed


def patch_history_sync_v3(vmap: dict[str, str]) -> int:
    fp = ROOT / "src" / "data" / "v3" / "historySyncV3.js"
    txt = fp.read_text(encoding="utf-8")
    changed = 0
    for tid, fid in T.HISTORY_FIG_KEY_TO_ID.items():
        if tid not in vmap:
            continue
        pat = re.compile(r"(id:\s*'" + re.escape(fid) + r"'\s*,\s*image:\s*')([^']+)(')")
        new_txt, cnt = pat.subn(lambda m: m.group(1) + vmap[tid] + m.group(3), txt, count=1)
        if cnt > 0 and new_txt != txt:
            txt = new_txt
            changed += cnt
    if changed:
        fp.write_text(txt, encoding="utf-8")
    return changed


def main() -> int:
    vmap = load_verified_map()
    print(f"Loaded {len(vmap)} verified V8 images on disk.")
    if not vmap:
        print("Nothing to wire.")
        return 1

    c_v5 = patch_json_bundle(ROOT / "src" / "data" / "v5" / "v5DeepEnrichmentLayer.js", "var DATA = ", lambda o: mutate_v5(o, vmap))
    c_v6 = patch_json_bundle(ROOT / "src" / "data" / "v6" / "v6EncyclopediaAndVisuals.js", "var BUNDLES = ", lambda o: mutate_v6(o, vmap))
    c_v7 = patch_json_bundle(ROOT / "src" / "data" / "v7" / "v7CompleteEncyclopedia.js", "var V7_DATA = ", lambda o: mutate_v7(o, vmap))
    c_ed = patch_editorial_pack(vmap)
    c_v3 = patch_v3_hero_maps(vmap)
    c_b26 = patch_batch2026_articles(vmap)
    c_hs = patch_history_sync_v3(vmap)
    print(f"Wired: V5={c_v5}, V6={c_v6}, V7={c_v7}, Editorial={c_ed}, V3_HERO_MAP(across 9 files)={c_v3}, Batch2026={c_b26}, HistoryFigures={c_hs}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
