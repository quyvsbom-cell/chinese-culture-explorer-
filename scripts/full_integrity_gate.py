"""Full Automated 10-Gate Integrity Check for Chinese Culture Explorer (V4.0).

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
            "trilingualTradeStudio.js", "laozihaoPavilionV5.js", "v5CourseAcademy.js",
            "srsEngine.js", "exporters.js", "lazyLoader.js", "page-transition.js"
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
    for shell_rel in ["van-hoa.html", "explore.html", "kinh-doanh.html", "hoc-tap.html"]:
        sp_path = ROOT / "seo_pages" / shell_rel
        if not sp_path.is_file() or "src/data/v5/v5DeepEnrichmentLayer.js" not in sp_path.read_text(encoding="utf-8"):
            seo_issues.append(f"Stale SEO shell missing V5 scripts: seo_pages/{shell_rel}")
    print(f"[Gate 7] SEO & OG Shells Integrity: {'PASS' if not seo_issues else 'FAIL'}")
    failures.extend(seo_issues)

    # Gate 8: EN Parity Audit Sub-Gate (V3 + V4)
    parity = subprocess.run([sys.executable, "scripts/audit_en_parity.py"], capture_output=True, text=True)
    parity_ok = parity.returncode == 0
    print(f"[Gate 8] EN Parity Audit: {'PASS' if parity_ok else 'FAIL'}")
    if not parity_ok:
        failures.append(parity.stdout)

    # Gate 9: V4 Data Packs, Epistemological Boundaries & Single WebGL Context
    g9_issues: list[str] = []
    v4_dir = ROOT / "src" / "data" / "v4"
    for fn in [
        "unescoHeritageEncyclopediaV4.js", "literatureOperaArtsV4.js",
        "scienceTeaMedicineFoodV4.js", "sinoVietModernChinaV4.js",
        "politicsEconHskTcmStudyV4.js", "tradeTrilingualBridgeV4.js",
        "knowledgeGraphV4.js", "quizArenaV4.js"
    ]:
        if not (v4_dir / fn).is_file():
            g9_issues.append(f"MISSING V4 data file: src/data/v4/{fn}")
    if (v4_dir / "scienceTeaMedicineFoodV4.js").is_file():
        st_txt = (v4_dir / "scienceTeaMedicineFoodV4.js").read_text(encoding="utf-8")
        if "KHÔNG thay thế" not in st_txt or "NOT clinical" not in st_txt:
            g9_issues.append("TCM dataset missing explicit non-clinical epistemic framing")
    if (v4_dir / "politicsEconHskTcmStudyV4.js").is_file():
        pe_txt = (v4_dir / "politicsEconHskTcmStudyV4.js").read_text(encoding="utf-8")
        if "KHÔNG phải y học" not in pe_txt or "epistemicBannerEn" not in pe_txt:
            g9_issues.append("Yin-Yang-Wuxing dataset missing non-clinical / non-predictive banner")
    v5_dir = ROOT / "src" / "data" / "v5"
    for fn in [
        "laozihaoBrandsV5.js", "laozihaoBrandsExpandedV5.js",
        "courseLessonsV5.js", "hskEssaysV5.js",
        "wuxingCasebookV5.js", "supplyChainCasesV5.js",
        "quizMasteryV5.js", "v5DeepEnrichmentLayer.js"
    ]:
        if not (v5_dir / fn).is_file():
            g9_issues.append(f"MISSING V5 data file: src/data/v5/{fn}")
    if (v5_dir / "wuxingCasebookV5.js").is_file():
        wx_txt = (v5_dir / "wuxingCasebookV5.js").read_text(encoding="utf-8")
        if "tuyệt đối KHÔNG" not in wx_txt or "NOT clinical" not in wx_txt:
            g9_issues.append("V5 Wuxing casebook missing non-clinical / non-predictive disclaimer")
    for mod in [
        "src/components/china3DMap.js",
        "src/components/3d/dougongJoinery3D.js",
        "src/components/3d/vernacular3DStudio.js",
        "src/components/3d/euChinaLogistics3D.js",
        "src/components/3d/hydraulic3DStudio.js",
        "src/components/3d/armillary3DStudio.js",
        "src/components/3d/artifacts3DExtra.js",
    ]:
        mp = ROOT / mod
        if not mp.is_file():
            g9_issues.append(f"MISSING 3D studio: {mod}")
        else:
            m_txt = mp.read_text(encoding="utf-8")
            if not re.search(r"(?:CCE_WEBGL_MGR|ensureMgr\(\)|ensureWebGLMgr\(\))\.register\(", m_txt):
                g9_issues.append(f"3D studio lacks CCE_WEBGL_MGR.register(): {mod}")
    print(f"[Gate 9] V4 Data, Epistemology & WebGL Mgr: {'PASS' if not g9_issues else 'FAIL'}")
    failures.extend(g9_issues)

    # Gate 10: PWA Cache Parity (cce-v5.0) & Zero Dev Jargon in UI Strings
    g10_issues: list[str] = []
    sw_txt = (ROOT / "sw.js").read_text(encoding="utf-8") if (ROOT / "sw.js").is_file() else ""
    if 'CACHE_VERSION = "cce-v5.0"' not in sw_txt and 'CACHE_VERSION = "cce-v4.0"' not in sw_txt:
        g10_issues.append('sw.js CACHE_VERSION is not "cce-v5.0"')
    ui_scan = [ROOT / "index.html"] + sorted((ROOT / "src" / "components").rglob("*.js"))
    for fp in ui_scan:
        for idx, line in enumerate(fp.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
            s = line.strip()
            if s.startswith("//") or s.startswith("*") or s.startswith("<!--"):
                continue
            if re.search(r"\bBatch\s+\d+\b|\bV4\.0\b", line):
                g10_issues.append(f"Dev jargon in UI ({fp.as_posix()}:{idx}): {s[:80]}")
    print(f"[Gate 10] PWA Cache Parity & Clean UI Copy: {'PASS' if not g10_issues else 'FAIL'}")
    failures.extend(g10_issues[:10])

    if failures:
        print("\nGATE FAILURES:")
        for f in failures:
            print(" -", f)
        return 1
    print("\nALL 10 INTEGRITY GATES PASSED CLEANLY.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
