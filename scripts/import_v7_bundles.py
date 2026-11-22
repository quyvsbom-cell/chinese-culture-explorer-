"""Stage Gemini Web V7 packs (directory or .zip archive) safely into scripts/v7_external_packs/,
validate incoming schemas/prose, rebuild V7 + SEO assets, and verify all quality gates.

Usage:
  uv run python scripts/import_v7_bundles.py
  uv run python scripts/import_v7_bundles.py "C:\\Users\\admin\\Downloads\\V7_All_6_Packs"
  uv run python scripts/import_v7_bundles.py "C:\\Users\\admin\\Downloads\\V7_All_6_Packs.zip"
"""

from __future__ import annotations

import pathlib
import shutil
import subprocess
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
STAGING_DIR = ROOT / "scripts" / "v7_external_packs"
DEFAULT_SRC = pathlib.Path(r"C:\Users\admin\Downloads\V7_All_6_Packs")

EXPECTED_PATTERNS = {
    "V7_Pack1.js", "V7_Pack2.js", "V7_Pack3.js",
    "V7_Pack4.js", "V7_Pack5.js", "V7_Pack6.js",
    "V7_Pack1A.js", "V7_Pack1B.js", "V7_Pack2A.js", "V7_Pack2B.js",
    "V7_Pack3A.js", "V7_Pack3B.js", "V7_Pack4A.js", "V7_Pack4B.js",
    "V7_Pack5A.js", "V7_Pack5B.js", "V7_Pack6A.js", "V7_Pack6B.js",
}


def stage_external_packs(src_path: pathlib.Path) -> int:
    STAGING_DIR.mkdir(parents=True, exist_ok=True)
    staged_count = 0

    if src_path.is_file() and src_path.suffix.lower() == ".zip":
        with zipfile.ZipFile(src_path, "r") as zf:
            for member in zf.namelist():
                base = pathlib.Path(member).name
                if base in EXPECTED_PATTERNS or (base.startswith("V7_Pack") and base.endswith(".js")):
                    data = zf.read(member).decode("utf-8")
                    (STAGING_DIR / base).write_text(data, encoding="utf-8")
                    staged_count += 1
        print(f"Staged {staged_count} external Gemini Web pack file(s) from zip {src_path} -> {STAGING_DIR}")
    elif src_path.is_dir():
        for src_fp in sorted(src_path.rglob("V7_Pack*.js")):
            if src_fp.name in EXPECTED_PATTERNS or src_fp.name.startswith("V7_Pack"):
                shutil.copy2(src_fp, STAGING_DIR / src_fp.name)
                staged_count += 1
        print(f"Staged {staged_count} external Gemini Web pack file(s) from {src_path} -> {STAGING_DIR}")
    else:
        print(f"External folder/zip not found ({src_path}); building with existing staged packs + V7 builders.")

    return staged_count


def main() -> int:
    src_path = pathlib.Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SRC
    stage_external_packs(src_path)

    pipeline = [
        ("validate_incoming_packs.py", [sys.executable, str(ROOT / "scripts" / "validate_incoming_packs.py")]),
        ("build_v7_complete.py", [sys.executable, str(ROOT / "scripts" / "build_v7_complete.py")]),
        ("generate_seo_files.py", [sys.executable, str(ROOT / "scripts" / "generate_seo_files.py")]),
        ("full_integrity_gate.py", [sys.executable, str(ROOT / "scripts" / "full_integrity_gate.py")]),
        ("de_ai_lint_gate.py", [sys.executable, str(ROOT / "scripts" / "de_ai_lint_gate.py")]),
    ]

    for step_name, cmd in pipeline:
        print(f"\n>>> Running {step_name} ...")
        res = subprocess.run(cmd, cwd=ROOT, check=False)
        if res.returncode != 0:
            print(f"ABORTED at {step_name} (exit={res.returncode})")
            return res.returncode

    print("\nIMPORT_AND_VERIFY_V7_COMPLETE: All steps passed cleanly.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
