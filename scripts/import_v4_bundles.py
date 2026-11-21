"""Import Gemini Web V4 bundles safely from Downloads into src/data/v4/.

Usage: uv run python scripts/import_v4_bundles.py [--source "C:\\Users\\admin\\Downloads\\Gửi antigravity V4"]
Gracefully handles missing/empty drop directory so seed packs remain intact.
"""

from __future__ import annotations

import argparse
import json
import pathlib
import re
import sys

ROOT = pathlib.Path(".")
DEFAULT_DROP_DIR = pathlib.Path(r"C:\Users\admin\Downloads\Gửi antigravity V4")
OUT_DIR = ROOT / "src" / "data" / "v4"
EMOJI_RE = re.compile(r"[\U0001F300-\U0001FAFF\u2600-\u27BF]+")


def clean_str(val: str) -> str:
    return EMOJI_RE.sub("", val).strip()


def sanitize_obj(obj):
    if isinstance(obj, str):
        return clean_str(obj)
    if isinstance(obj, list):
        return [sanitize_obj(x) for x in obj]
    if isinstance(obj, dict):
        return {k: sanitize_obj(v) for k, v in obj.items()}
    return obj


def import_json_file(fp: pathlib.Path, dry_run: bool = False) -> tuple[int, str]:
    raw = json.loads(fp.read_text(encoding="utf-8-sig"))
    items = raw if isinstance(raw, list) else raw.get("items", [raw])
    seen: set[str] = set()
    clean_items = []
    for idx, it in enumerate(items):
        if not isinstance(it, dict):
            continue
        it = sanitize_obj(it)
        iid = str(it.get("id") or f"{fp.stem}-{idx + 1}")
        if iid in seen:
            continue
        seen.add(iid)
        it["id"] = iid
        clean_items.append(it)

    target = OUT_DIR / f"imported_{re.sub(r'[^a-zA-Z0-9_-]', '_', fp.stem)}.js"
    if not dry_run and clean_items:
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        payload = json.dumps(clean_items, ensure_ascii=False, indent=2)
        js = (
            "// Auto-imported from Gemini Web V4 bundle drop\n"
            "(function () {\n"
            "  'use strict';\n"
            "  window.CCE_V4_IMPORTED = window.CCE_V4_IMPORTED || {};\n"
            f"  window.CCE_V4_IMPORTED[{json.dumps(fp.stem)}] = {payload};\n"
            "})();\n"
        )
        target.write_text(js, encoding="utf-8")
    return len(clean_items), target.as_posix()


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default=str(DEFAULT_DROP_DIR))
    parser.add_argument("--dry-run", action="store_true")
    args = parser.parse_args()

    src_dir = pathlib.Path(args.source)
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    if not src_dir.exists():
        print(f"[import_v4_bundles] Drop folder not found ({src_dir}); 0 external files imported (seed packs ready).")
        return 0

    json_files = sorted(src_dir.glob("*.json"))
    if not json_files:
        print(f"[import_v4_bundles] Drop folder empty ({src_dir}); 0 external files imported.")
        return 0

    total = 0
    for fp in json_files:
        cnt, out_path = import_json_file(fp, dry_run=args.dry_run)
        total += cnt
        print(f"Imported {cnt} deduplicated records from {fp.name} -> {out_path}")
    print(f"IMPORT_V4_COMPLETE: {total} items processed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
