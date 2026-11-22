"""Stage Gemini Web V7 packs (6 packs or 12 split A/B packs) cleanly outside src/ and rebuild V7 bundle.

Usage:
  uv run python scripts/import_v7_bundles.py
  uv run python scripts/import_v7_bundles.py "C:\\Users\\admin\\Downloads\\V7_All_6_Packs"
"""

from __future__ import annotations

import pathlib
import shutil
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
STAGING_DIR = ROOT / "scripts" / "v7_external_packs"
DEFAULT_SRC = pathlib.Path(r"C:\Users\admin\Downloads\V7_All_6_Packs")

EXPECTED_PATTERNS = [
    "V7_Pack1.js", "V7_Pack2.js", "V7_Pack3.js",
    "V7_Pack4.js", "V7_Pack5.js", "V7_Pack6.js",
    "V7_Pack1A.js", "V7_Pack1B.js", "V7_Pack2A.js", "V7_Pack2B.js",
    "V7_Pack3A.js", "V7_Pack3B.js", "V7_Pack4A.js", "V7_Pack4B.js",
    "V7_Pack5A.js", "V7_Pack5B.js", "V7_Pack6A.js", "V7_Pack6B.js",
]


def main() -> int:
    src_dir = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    staged_count = 0

    if src_dir.is_dir():
        for fn in EXPECTED_PATTERNS:
            src_fp = src_dir / fn
            if src_fp.is_file():
                shutil.copy2(src_fp, STAGING_DIR / fn)
                staged_count += 1
        print(f"Staged {staged_count} external Gemini Web pack file(s) from {src_dir} -> {STAGING_DIR}")
    else:
        print(f"External folder not found ({src_dir}); building with existing staged packs + V7 builders.")

    build_res = subprocess.run([sys.executable, str(ROOT / "scripts" / "build_v7_complete.py")], check=False)
    return build_res.returncode


if __name__ == "__main__":
    raise SystemExit(main())
