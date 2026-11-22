"""
Import Gemini Web V6 Bundles (V6_Pack1..V6_Pack6) from a directory or .zip archive
into src/data/v6/ and rebuild the V6 visual/encyclopedic composite bundle.

Usage: uv run python scripts/import_v6_bundles.py [path_to_zip_or_dir]
"""

from __future__ import annotations

import pathlib
import sys
import zipfile

ROOT = pathlib.Path(".")
DEST_DIR = ROOT / "src" / "data" / "v6"

EXPECTED_PACKS = [
    "V6_Pack1_HonoredBrands100_CraftDiagrams.js",
    "V6_Pack2_Liushu300_FalseFriends30.js",
    "V6_Pack3_Wuxing60Herbs_SolarArchitecture.js",
    "V6_Pack4_LiteratureVisualMaps_HSK40.js",
    "V6_Pack5_TradeDocs10_Incoterms_CBAM40.js",
    "V6_Pack6_VisualQuizArena_192.js",
]


def import_from_source(src_path: pathlib.Path) -> int:
    DEST_DIR.mkdir(parents=True, exist_ok=True)
    imported = 0

    if src_path.is_file() and src_path.suffix.lower() == ".zip":
        with zipfile.ZipFile(src_path, "r") as zf:
            for member in zf.namelist():
                base = pathlib.Path(member).name
                if base in EXPECTED_PACKS or (base.startswith("V6_") and base.endswith(".js")):
                    data = zf.read(member).decode("utf-8")
                    (DEST_DIR / base).write_text(data, encoding="utf-8")
                    imported += 1
                    print(f"Imported from zip: src/data/v6/{base} ({len(data):,} chars)")
    elif src_path.is_dir():
        for fp in sorted(src_path.rglob("*.js")):
            if fp.name in EXPECTED_PACKS or fp.name.startswith("V6_"):
                data = fp.read_text(encoding="utf-8")
                (DEST_DIR / fp.name).write_text(data, encoding="utf-8")
                imported += 1
                print(f"Imported from dir: src/data/v6/{fp.name} ({len(data):,} chars)")
    else:
        print(f"No V6 bundle source found at {src_path}")
        return 0

    return imported


def main() -> int:
    if len(sys.argv) > 1:
        src = pathlib.Path(sys.argv[1])
        count = import_from_source(src)
        print(f"IMPORT_V6_COMPLETE: {count} bundle(s) staged into {DEST_DIR.as_posix()}")
    else:
        print("No external V6 source specified; regenerating built-in V6 foundation layer...")

    import build_v6_foundation
    return build_v6_foundation.main()


if __name__ == "__main__":
    raise SystemExit(main())
