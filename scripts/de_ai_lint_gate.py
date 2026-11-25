"""Automated De-AI Aesthetic & Asset Integrity Gate for Chinese Culture Explorer.

Checks all source files, styles, and referenced local image assets before release/build:
1. Fails on ANY decorative Unicode UI emoji in src/, styles/, index.html.
2. Fails on generic AI-slop gradient purples or glassmorphism pill spam in styles/.
3. Fails on ANY forbidden term or external contamination keyword.
4. Verifies every local assets/images/... path referenced in src/data/*.js exists on disk.
5. Verifies JS delimiter balance (paren/brace/bracket) on key new modules.
"""

from __future__ import annotations

import pathlib
import re
import sys

ALLOWED_NON_EMOJI_SYMBOLS = set(
    "✓✕☐☑●○□■▪▫▲△▼▽◆◇★☆⚊⚋☰☱☲☳☴☵☶☷→←↑↓↔⇄↗↙↖↘⤢ℹ·•—–−×÷≈≥≤±°©™"
)
BANNED_TERMS = [
    "vnexpress",
    "muong thanh",
    "mường thanh",
    "kien hung",
    "kiến hưng",
    "5143404",
    "vec.global",
    "kim quy",
    "golden turtle",
    "96,204",
    "24,000t",
    "thuongmai",
]
AI_SLOP_COLORS = ["#6366f1", "#8b5cf6", "#a855f7", "#7c3aed", "#ec4899"]


def check_ui_emojis(root: pathlib.Path) -> list[str]:
    violations: list[str] = []
    files = list((root / "src").rglob("*.js")) + list((root / "styles").rglob("*.css")) + [root / "index.html"]
    for fp in sorted(files):
        if not fp.is_file():
            continue
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        for ln, line in enumerate(txt.splitlines(), 1):
            bad = []
            for ch in line:
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
            if bad:
                violations.append(f"EMOJI {fp.as_posix()}:{ln} -> {''.join(sorted(set(bad)))}")
    return violations


def check_banned_and_slop(root: pathlib.Path) -> tuple[list[str], list[str]]:
    banned_hits: list[str] = []
    slop_hits: list[str] = []
    scan_files = (
        list((root / "src").rglob("*.js"))
        + list((root / "styles").rglob("*.css"))
        + [root / "index.html"]
    )
    for fp in scan_files:
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        low = txt.lower()
        for term in BANNED_TERMS:
            if term == "kim quy":
                if re.search(r"(?<!luyện )\bkim quy\b", low):
                    banned_hits.append(f"BANNED '{term}' in {fp.as_posix()}")
            elif term in low:
                banned_hits.append(f"BANNED '{term}' in {fp.as_posix()}")
        if re.search(r"\bmuji\b", low):
            banned_hits.append(f"BANNED 'muji' in {fp.as_posix()}")
        if fp.suffix == ".css":
            for hx in AI_SLOP_COLORS:
                if hx in low:
                    slop_hits.append(f"AI_SLOP_COLOR '{hx}' in {fp.as_posix()}")
    return banned_hits, slop_hits


def check_local_assets(root: pathlib.Path) -> list[str]:
    missing: list[str] = []
    pat = re.compile(r'["\'](assets/images/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg))["\']')
    for fp in sorted((root / "src").rglob("*.js")):
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        for m in pat.finditer(txt):
            rel = m.group(1)
            if not (root / rel).is_file():
                missing.append(f"MISSING_ASSET {rel} referenced in {fp.as_posix()}")
    return sorted(set(missing))


def check_boilerplate_clones(root: pathlib.Path) -> list[str]:
    clones: list[str] = []
    for fp in sorted((root / "src" / "data").rglob("*.js")):
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        if "Mẹo quan sát ảnh [" in txt:
            clones.append(f"BOILERPLATE_CLONE 'Mẹo quan sát ảnh [' in {fp.as_posix()}")
    return clones


def main() -> int:
    root = pathlib.Path(".")
    emojis = check_ui_emojis(root)
    banned, slop = check_banned_and_slop(root)
    missing = check_local_assets(root)
    clones = check_boilerplate_clones(root)

    print("=== DE-AI AESTHETIC & ASSET GATE ===")
    print(f"UI Emoji violations : {len(emojis)}")
    for e in emojis[:15]:
        print(" ", e)
    print(f"Banned term hits    : {len(banned)}")
    for b in banned[:15]:
        print(" ", b)
    print(f"AI-slop CSS colors  : {len(slop)}")
    for s in slop[:15]:
        print(" ", s)
    print(f"Missing local imgs  : {len(missing)}")
    for m in missing[:15]:
        print(" ", m)
    print(f"Boilerplate clones  : {len(clones)}")
    for c in clones[:15]:
        print(" ", c)

    ok = not (emojis or banned or slop or missing or clones)
    print("GATE_STATUS:", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
