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
import zipfile

DEFAULT_CANDIDATES = [
    pathlib.Path(r"C:/Users/admin/.gemini/antigravity/brain/563fc13b-fb97-4891-9990-9294dff2c297/.user_uploaded/media_1795306779162_c451c11a.zip"),
    pathlib.Path(r"C:\Users\admin\Downloads\V5_All_6_Packs.zip"),
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


def sanitize_js(raw: str) -> str:
    raw = EMOJI_RE.sub("", raw)
    return re.sub(r"\bseamlessly\b", "directly", raw, flags=re.I)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", default="")
    args = parser.parse_args()

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    src_path = None
    if args.source:
        c = pathlib.Path(args.source)
        if c.exists():
            src_path = c
    else:
        for c in DEFAULT_CANDIDATES:
            if c.exists():
                src_path = c
                break

    if not src_path:
        print("[import_v5_bundles] Drop folder or archive not present yet; built-in V5 Laozihao & Course modules ready.")
        return 0

    count = 0
    if src_path.is_file() and src_path.suffix.lower() == ".zip":
        with zipfile.ZipFile(src_path, "r") as zf:
            for info in sorted(zf.infolist(), key=lambda x: x.filename):
                if info.is_dir() or not info.filename.lower().endswith(".js"):
                    continue
                base_name = pathlib.PurePosixPath(info.filename).name
                target_name = V5_MAPPING.get(base_name, f"imported_{pathlib.Path(base_name).stem}.js")
                raw = sanitize_js(zf.read(info.filename).decode("utf-8-sig", errors="replace"))
                target = OUT_DIR / target_name
                target.write_text(raw, encoding="utf-8")
                print(f"Imported V5 zip entry {base_name} -> {target.as_posix()} ({len(raw)} chars)")
                count += 1
    else:
        for fp in sorted(src_path.glob("*.js")):
            target_name = V5_MAPPING.get(fp.name, f"imported_{fp.stem}.js")
            raw = sanitize_js(fp.read_text(encoding="utf-8-sig"))
            target = OUT_DIR / target_name
            target.write_text(raw, encoding="utf-8")
            print(f"Imported V5 pack {fp.name} -> {target.as_posix()} ({len(raw)} chars)")
            count += 1

    print(f"IMPORT_V5_COMPLETE: {count} files imported from {src_path}.")
    import enrich_v5_deep_detail
    return enrich_v5_deep_detail.main()


if __name__ == "__main__":
    raise SystemExit(main())
