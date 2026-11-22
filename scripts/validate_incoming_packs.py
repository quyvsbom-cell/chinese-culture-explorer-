"""Pre-flight validator for incoming Gemini Web packs (scripts/v7_external_packs or CLI path).

Checks:
1. Parses each .js / .json pack cleanly via pack_utils._extract_object_literal (no empty {} parses).
2. Fails on disallowed UI emojis, banned slop terms, missing local image paths, or AI boilerplate templates.
3. Reports strict Vietnamese diacritics leaking inside *En fields or raw version tags ('V7.0', 'V8.0').

Usage:
  uv run python scripts/validate_incoming_packs.py
  uv run python scripts/validate_incoming_packs.py "c:\\Users\\admin\\Downloads\\V7_All_6_Packs"
"""

from __future__ import annotations

import pathlib
import re
import sys
import tempfile
import zipfile
from typing import Any

ROOT = pathlib.Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT / "scripts"))

from de_ai_lint_gate import ALLOWED_NON_EMOJI_SYMBOLS, BANNED_TERMS  # noqa: E402
from v7_builders.pack_utils import EXT_DIR, _extract_object_literal, sanitize_text  # noqa: E402

BOILERPLATE_RX = re.compile(
    r"Mẹo quan sát ảnh \[|Mở đề trực diện|Benchmark Tập Đoàn|bức họa paint-",
    re.IGNORECASE,
)
VERSION_TAG_RX = re.compile(r"\bV[678]\.0\b", re.IGNORECASE)
VI_STRICT_RX = re.compile(
    r"[ăâđêôơưĂÂĐÊÔƠƯắằẳẵặấầẩẫậếềểễệốồổỗộớờởỡợứừửữựảẩẳẻểỉỏổởủửỷạặậẹệịọộợụựỵỹẫẵễỗỡữ]"
)
EN_IGNORE_KEYS = {"hanVietEn", "vietnameseNameEn", "vnCounterpartEn", "ruleNameEn"}
LOCAL_IMG_RX = re.compile(r'assets/images/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg)')


def _find_emojis(txt: str) -> list[str]:
    bad: list[str] = []
    for ch in txt:
        cp = ord(ch)
        if cp >= 0x1F300 and not (
            0x2E80 <= cp <= 0x9FFF
            or 0xF900 <= cp <= 0xFAFF
            or 0xFE30 <= cp <= 0xFE4F
            or 0xFF00 <= cp <= 0xFFEF
            or 0x20000 <= cp <= 0x323AF
        ):
            bad.append(ch)
        elif 0x2600 <= cp <= 0x27BF and ch not in ALLOWED_NON_EMOJI_SYMBOLS:
            bad.append(ch)
    return sorted(set(bad))


def _scan_object(obj: Any, trail: str, vi_en_warnings: list[str], auto_fix_notes: list[str]) -> None:
    if isinstance(obj, dict):
        for k, v in obj.items():
            nxt = f"{trail}.{k}"
            if isinstance(v, str):
                if k.endswith("En") and k not in EN_IGNORE_KEYS and VI_STRICT_RX.search(v):
                    vi_en_warnings.append(f"{nxt}: {v[:75]}")
                if VERSION_TAG_RX.search(v) and sanitize_text(v) != v:
                    auto_fix_notes.append(f"{nxt}: '{v[:60]}' (will be stripped by sanitize_text)")
            elif isinstance(v, list):
                for idx, item in enumerate(v):
                    if k.endswith("En") and k not in EN_IGNORE_KEYS and isinstance(item, str) and VI_STRICT_RX.search(item):
                        vi_en_warnings.append(f"{nxt}[{idx}]: {item[:75]}")
                    else:
                        _scan_object(item, f"{nxt}[{idx}]", vi_en_warnings, auto_fix_notes)
            else:
                _scan_object(v, nxt, vi_en_warnings, auto_fix_notes)
    elif isinstance(obj, list):
        for idx, item in enumerate(obj):
            _scan_object(item, f"{trail}[{idx}]", vi_en_warnings, auto_fix_notes)


def validate_directory(pack_dir: pathlib.Path) -> tuple[bool, list[str], list[str]]:
    files = sorted(list(pack_dir.glob("*.js")) + list(pack_dir.glob("*.json")))
    if not files:
        print("0 external pack files staged; ready for Gemini Web packs.")
        print("PACK_VALIDATOR_STATUS: PASS")
        return True, [], []

    errors: list[str] = []
    warnings: list[str] = []

    for fp in files:
        raw = fp.read_text(encoding="utf-8", errors="replace")
        parsed = _extract_object_literal(raw)
        if not parsed:
            errors.append(f"{fp.name}: failed to parse JS/JSON payload (returned empty dict)")
            continue

        emojis = _find_emojis(raw)
        if emojis:
            errors.append(f"{fp.name}: contains UI emoji characters {emojis[:8]}")

        low = raw.lower()
        for term in BANNED_TERMS:
            if term == "kim quy":
                if re.search(r"(?<!luyện )\bkim quy\b", low):
                    errors.append(f"{fp.name}: banned term '{term}'")
            elif term in low:
                errors.append(f"{fp.name}: banned term '{term}'")

        bp_hits = BOILERPLATE_RX.findall(raw)
        if bp_hits:
            errors.append(f"{fp.name}: AI boilerplate phrases found: {sorted(set(bp_hits))}")

        for img_rel in sorted(set(LOCAL_IMG_RX.findall(raw))):
            if not (ROOT / img_rel).is_file():
                errors.append(f"{fp.name}: missing image asset '{img_rel}'")

        vi_en_leaks: list[str] = []
        sanitizable: list[str] = []
        _scan_object(parsed, fp.name, vi_en_leaks, sanitizable)
        for lk in vi_en_leaks:
            warnings.append(f"VI diacritic in EN field ({lk})")
        for sf in sanitizable:
            warnings.append(f"Version tag auto-sanitized ({sf})")

        item_summary = ", ".join(f"{k}={len(v)}" for k, v in parsed.items() if isinstance(v, (list, dict)))
        print(f"  [PARSED] {fp.name}: {item_summary}")

    return len(errors) == 0, errors, warnings


def main() -> int:
    arg_path: pathlib.Path | None = None
    args = [a for a in sys.argv[1:] if a != "--dir"]
    if args:
        arg_path = pathlib.Path(args[0])

    if arg_path and arg_path.is_file() and arg_path.suffix.lower() == ".zip":
        with tempfile.TemporaryDirectory() as tmpdir:
            with zipfile.ZipFile(arg_path, "r") as zf:
                zf.extractall(tmpdir)
            ok, errors, warnings = validate_directory(pathlib.Path(tmpdir))
    else:
        target = arg_path if arg_path else EXT_DIR
        target.mkdir(parents=True, exist_ok=True)
        print(f"=== VALIDATING INCOMING PACKS IN {target.as_posix()} ===")
        ok, errors, warnings = validate_directory(target)

    if warnings:
        print(f"Warnings ({len(warnings)}):")
        for w in warnings[:15]:
            print("  -", w)
    if errors:
        print(f"Errors ({len(errors)}):")
        for e in errors[:20]:
            print("  -", e)
        print("PACK_VALIDATOR_STATUS: FAIL")
        return 1

    print("PACK_VALIDATOR_STATUS: PASS")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
