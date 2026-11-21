"""Full Automated 8-Gate Integrity Check for Chinese Culture Explorer (V3.0+).

Usage: uv run python scripts/full_integrity_gate.py
"""

from __future__ import annotations

import hashlib
import pathlib
import re
import subprocess
import sys

ROOT = pathlib.Path(".")
sys.path.insert(0, str(ROOT / "scripts"))
import de_ai_lint_gate as lint  # noqa: E402


def check_js_delimiters(files: list[pathlib.Path]) -> list[str]:
    issues: list[str] = []
    for fp in files:
        txt = fp.read_text(encoding="utf-8", errors="ignore")
        # Quick heuristic delimiter balance skipping quotes/regex/comments carefully is non-trivial,
        # so check obvious unclosed braces via state machine
        state = "code"
        esc = False
        in_cc = False
        last_sig = ""
        pairs = {"(": ")", "{": "}", "[": "]"}
        closing = {")": "(", "}": "{", "]": "["}
        stack: list[str] = []
        i = 0
        n = len(txt)
        while i < n:
            ch = txt[i]
            nxt = txt[i + 1] if i + 1 < n else ""
            if state == "line_comment":
                if ch == "\n":
                    state = "code"
            elif state == "block_comment":
                if ch == "*" and nxt == "/":
                    state = "code"
                    i += 1
            elif state == "regex":
                if esc:
                    esc = False
                elif ch == "\\":
                    esc = True
                elif ch == "[":
                    in_cc = True
                elif ch == "]" and in_cc:
                    in_cc = False
                elif ch == "/" and not in_cc:
                    state = "code"
                    last_sig = ")"
            elif state in ("sq", "dq", "bt"):
                if esc:
                    esc = False
                elif ch == "\\":
                    esc = True
                elif (state == "sq" and ch == "'") or (state == "dq" and ch == '"') or (state == "bt" and ch == "`"):
                    state = "code"
                    last_sig = ")"
            else:
                if ch == "/" and nxt == "/":
                    state = "line_comment"
                    i += 1
                elif ch == "/" and nxt == "*":
                    state = "block_comment"
                    i += 1
                elif ch == "/" and (last_sig in ("", "(", "=", ",", ":", "!", "&", "|", "?", ";", "[", "{", "\n")):
                    state = "regex"
                    in_cc = False
                elif ch == "'":
                    state = "sq"
                elif ch == '"':
                    state = "dq"
                elif ch == "`":
                    state = "bt"
                elif ch in pairs:
                    stack.append(ch)
                    last_sig = ch
                elif ch in closing:
                    if not stack or stack[-1] != closing[ch]:
                        issues.append(f"DELIMITER MISMATCH {fp.as_posix()} near offset {i} got {ch}")
                        break
                    stack.pop()
                    last_sig = ch
                elif not ch.isspace():
                    last_sig = ch
            i += 1
        if stack and not issues:
            issues.append(f"UNCLOSED DELIMITER {fp.as_posix()} left={stack[-3:]}")
    return issues


def main() -> int:
    failures: list[str] = []

    # Gate 1: Zero UI Emojis
    emojis = lint.check_ui_emojis(ROOT)
    print(f"[Gate 1] Zero UI Emojis: {'PASS' if not emojis else f'FAIL ({len(emojis)})'}")
    failures.extend(emojis[:10])

    # Gate 2: Zero Banned Terms & AI-Slop CSS Colors
    banned, slop = lint.check_banned_and_slop(ROOT)
    print(f"[Gate 2] Clean Branding & Palette: {'PASS' if not (banned or slop) else 'FAIL'}")
    failures.extend(banned[:10] + slop[:10])

    # Gate 3: Key Module Delimiter Integrity
    js_files = [
        p for p in sorted((ROOT / "src").rglob("*.js"))
        if "vendor" not in p.parts
    ]
    # Note: regex literals inside JS can contain unbalanced quotes/parens; run exact brace/paren check on V3/core files
    v3_components = [
        p for p in js_files
        if p.name in {
            "v3WaveModules.js", "artifacts3DStudio.js", "galleryReaderV3.js",
            "hanziStrokePad.js", "learningLabV3.js", "v3Wave5Modules.js",
            "pentatonicStudio.js", "presentationMode.js", "localQaEngine.js",
            "civilizationAtlas.js", "china3DMap.js", "dougongJoinery3D.js",
            "vernacular3DStudio.js", "euChinaLogistics3D.js", "hydraulic3DStudio.js",
            "armillary3DStudio.js", "artifacts3DExtra.js", "studioHub3D.js",
            "v4UXEnhancements.js", "travelUXHub.js", "v4KnowledgeHub.js",
            "trilingualTradeStudio.js",
            "srsEngine.js", "exporters.js", "lazyLoader.js"
        }
    ]
    delim_issues = check_js_delimiters(v3_components)
    print(f"[Gate 3] JS Module Delimiter Sanity ({len(v3_components)} modules): {'PASS' if not delim_issues else 'FAIL'}")
    failures.extend(delim_issues)

    # Gate 4: Zero Missing Local Image / Interactive Assets
    missing_assets = lint.check_local_assets(ROOT)
    if not (ROOT / "assets" / "interactive" / "tiantan-3d-heritage.html").is_file():
        missing_assets.append("MISSING assets/interactive/tiantan-3d-heritage.html")
    print(f"[Gate 4] Local Assets Verification: {'PASS' if not missing_assets else f'FAIL ({len(missing_assets)})'}")
    failures.extend(missing_assets[:10])

    # Gate 5: lazyLoader.js & index.html Script Paths Exist on Disk
    missing_scripts: list[str] = []
    idx_txt = (ROOT / "index.html").read_text(encoding="utf-8")
    for m in re.finditer(r'<script\s+src="([^"]+)"', idx_txt):
        sp = m.group(1).lstrip("/")
        if not (ROOT / sp).is_file():
            missing_scripts.append(f"MISSING index.html script: {sp}")
    lazy_txt = (ROOT / "src" / "core" / "lazyLoader.js").read_text(encoding="utf-8")
    b_block = re.search(r"var BUNDLES\s*=\s*\{(.*?)\n  \};", lazy_txt, re.S)
    if b_block:
        for m in re.finditer(r'"(src/[^"]+\.js)"', b_block.group(1)):
            if not (ROOT / m.group(1)).is_file():
                missing_scripts.append(f"MISSING lazyLoader path: {m.group(1)}")
    print(f"[Gate 5] Script & Bundle Paths Exist: {'PASS' if not missing_scripts else 'FAIL'}")
    failures.extend(missing_scripts)

    # Gate 6: Brand Identity Untouched Check
    brand_ok = (ROOT / "src" / "data" / "brandIdentityData.js").is_file()
    git_brand = subprocess.run(
        ["git", "diff", "--name-only", "src/data/brandIdentityData.js"],
        capture_output=True, text=True
    )
    if git_brand.stdout.strip():
        brand_ok = False
        failures.append("brandIdentityData.js was modified!")
    print(f"[Gate 6] Brand Identity Protection: {'PASS' if brand_ok else 'FAIL'}")

    # Gate 7: SEO Sitemap, Robots & Clean OG Metadata
    seo_issues: list[str] = []
    if not (ROOT / "sitemap.xml").is_file() or not (ROOT / "robots.txt").is_file():
        seo_issues.append("Missing sitemap.xml or robots.txt")
    sample_og = [
        ROOT / "seo_pages" / "explore.html",
        ROOT / "seo_pages" / "chuyen-luan" / "forbidden-city-3d-dissection.html",
    ]
    for sp in sample_og:
        if not sp.is_file():
            seo_issues.append(f"Missing OG shell: {sp.as_posix()}")
        else:
            st = sp.read_text(encoding="utf-8")
            if "**" in re.search(r"<title>(.*?)</title>", st).group(1):
                seo_issues.append(f"Raw markdown in <title>: {sp.as_posix()}")
    print(f"[Gate 7] SEO & OG Shells Integrity: {'PASS' if not seo_issues else 'FAIL'}")
    failures.extend(seo_issues)

    # Gate 8: EN Parity Audit Sub-Gate
    parity = subprocess.run([sys.executable, "scripts/audit_en_parity.py"], capture_output=True, text=True)
    parity_ok = parity.returncode == 0
    print(f"[Gate 8] EN Parity Audit: {'PASS' if parity_ok else 'FAIL'}")
    if not parity_ok:
        failures.append(parity.stdout)

    if failures:
        print("\nGATE FAILURES:")
        for f in failures:
            print(" -", f)
        return 1
    print("\nALL 8 INTEGRITY GATES PASSED CLEANLY.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
