"""Import Gemini Web V5 expansion packs from Downloads into src/data/v5/.

Usage:
  uv run python scripts/import_v5_bundles.py
  uv run python scripts/import_v5_bundles.py --source "C:\\Users\\admin\\Downloads\\V5_All_6_Packs"

Gracefully skips when drop directory does not exist yet so seed V5 packs run cleanly.
"""

from __future__ import annotations

import argparse
import pathlib
import re

DEFAULT_CANDIDATES = [
    pathlib.Path(r"C:\Users\admin\Downloads\V5_All_6_Packs"),
    pathlib.Path(r"C:\Users\admin\Downloads\Gửi antigravity V5"),
]
OUT_DIR = pathlib.Path("src/data/v5")
EMOJI_RE = re.compile(r"[\U0001F300-\U0001FAFF\u2600-\u27BF]+")

V5_MAPPING = {
    "V5_Pack1_Laozihao_Honored_Brands_60.js": "laozihaoBrandsExpandedV5.js",
    "V5_Pack2_Course_Lessons_36_Bridges.js": "courseLessonsV5.js",
    "V5_Pack3_HSK49_Classical_Modern_Essays.js": "hskEssaysV5.js",
    "V5_Pack4_YinYang_Wuxing_Casebook.js": "wuxingCasebookV5.js",
    "V5_Pack5_EU_China_VN_SupplyChain_Cases.js": "supplyChainCasesV5.js",
    "V5_Pack6_Course_Mastery_Quiz_120.js": "quizMasteryV5.js",
}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    src_dir = None
    if args.source:
        c = pathlib.Path(args.source)
        if c.exists():
            src_dir = c
    else:
        for c in DEFAULT_CANDIDATES:
            if c.exists():
                src_dir = c
                break

    if not src_dir:
        print("[import_v5_bundles] Drop folder not present yet; built-in V5 Laozihao & Course modules ready.")
        return 0

    count = 0
    for fp in sorted(src_dir.glob("*.js")):
        target_name = V5_MAPPING.get(fp.name, f"imported_{fp.stem}.js")
        raw = EMOJI_RE.sub("", fp.read_text(encoding="utf-8-sig"))
        raw = re.sub(r"\bseamlessly\b", "directly", raw, flags=re.I)
        target = OUT_DIR / target_name
        target.write_text(raw, encoding="utf-8")
        print(f"Imported V5 pack {fp.name} -> {target.as_posix()} ({len(raw)} chars)")
        count += 1

    print(f"IMPORT_V5_COMPLETE: {count} files imported from {src_dir}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
