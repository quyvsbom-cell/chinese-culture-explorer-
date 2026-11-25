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
            "v6HeritageStudios3D.js", "v7Masterpieces3D.js", "v6VisualAcademyStudios.js",
            "v4UXEnhancements.js", "travelUXHub.js", "v4KnowledgeHub.js",
            "trilingualTradeStudio.js", "laozihaoPavilionV5.js", "v5CourseAcademy.js",
            "srsEngine.js", "exporters.js", "lazyLoader.js", "page-transition.js",
            "v10SubpageDeck.js", "v10CollectionPaginator.js", "v10PaginatedArticleReader.js",
            "v10ContextualDrawer.js"
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
    for m in re.finditer(r'<script\b[^>]*\bsrc="([^"]+)"', idx_txt):
        sp = m.group(1).split("?", 1)[0].lstrip("/")
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
        if not sp_path.is_file():
            seo_issues.append(f"Missing SEO shell: seo_pages/{shell_rel}")
        else:
            sh_txt = sp_path.read_text(encoding="utf-8")
            if "src/data/v5/v5DeepEnrichmentLayer.js" not in sh_txt:
                seo_issues.append(f"Stale SEO shell missing V5 scripts: seo_pages/{shell_rel}")
            if "src/data/v6/v6EncyclopediaAndVisuals.js" not in sh_txt:
                seo_issues.append(f"Stale SEO shell missing V6 scripts: seo_pages/{shell_rel}")
            if "src/data/v7/v7CompleteEncyclopedia.js" not in sh_txt:
                seo_issues.append(f"Stale SEO shell missing V7 scripts: seo_pages/{shell_rel}")
            if "src/data/v8/v8MasterBridge.js" not in sh_txt:
                seo_issues.append(f"Stale SEO shell missing V8 bridge script: seo_pages/{shell_rel}")
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
        "src/components/3d/v6HeritageStudios3D.js",
        "src/components/3d/v7Masterpieces3D.js",
    ]:
        mp = ROOT / mod
        if not mp.is_file():
            g9_issues.append(f"MISSING 3D studio: {mod}")
        else:
            m_txt = mp.read_text(encoding="utf-8")
            if not re.search(r"(?:CCE_WEBGL_MGR|ensureMgr\(\)|ensureWebGLMgr\(\))\.register\(", m_txt):
                g9_issues.append(f"3D studio lacks CCE_WEBGL_MGR.register(): {mod}")
    v6_bundle_path = ROOT / "src" / "data" / "v6" / "v6EncyclopediaAndVisuals.js"
    if not v6_bundle_path.is_file():
        g9_issues.append("MISSING V6 data bundle: src/data/v6/v6EncyclopediaAndVisuals.js")
    else:
        v6_epi_txt = v6_bundle_path.read_text(encoding="utf-8")
        if "KHÔNG chẩn đoán" not in v6_epi_txt or "NOT clinical" not in v6_epi_txt:
            g9_issues.append("V6 bundle missing strict non-clinical disclaimer ('KHÔNG chẩn đoán' / 'NOT clinical')")
    v7_epi_path = ROOT / "src" / "data" / "v7" / "v7CompleteEncyclopedia.js"
    if not v7_epi_path.is_file():
        g9_issues.append("MISSING V7 data bundle: src/data/v7/v7CompleteEncyclopedia.js")
    else:
        v7_epi_txt = v7_epi_path.read_text(encoding="utf-8")
        if "KHÔNG chẩn đoán" not in v7_epi_txt or "NOT clinical" not in v7_epi_txt:
            g9_issues.append("V7 bundle missing strict non-clinical disclaimer ('KHÔNG chẩn đoán' / 'NOT clinical')")
    print(f"[Gate 9] V4/V6/V7 Data, Epistemology & WebGL Mgr: {'PASS' if not g9_issues else 'FAIL'}")
    failures.extend(g9_issues)

    # Gate 10: PWA Cache Parity (cce-v10.2) & Zero Dev Jargon / Version Hype in UI Strings
    g10_issues: list[str] = []
    sw_txt = (ROOT / "sw.js").read_text(encoding="utf-8") if (ROOT / "sw.js").is_file() else ""
    if 'CACHE_VERSION = "cce-v10.2"' not in sw_txt:
        g10_issues.append('sw.js CACHE_VERSION is not "cce-v10.2"')
    ui_scan = [
        ROOT / "index.html",
        ROOT / "manifest.json",
        ROOT / "src" / "data" / "weeklyUpdatesData.js",
        ROOT / "src" / "core" / "searchIndex.js",
    ] + sorted((ROOT / "src" / "components").rglob("*.js"))
    for fp in ui_scan:
        if not fp.is_file():
            continue
        for idx, line in enumerate(fp.read_text(encoding="utf-8", errors="ignore").splitlines(), 1):
            s = line.strip()
            if s.startswith("//") or s.startswith("/*") or s.startswith("*") or s.startswith("<!--"):
                continue
            cleaned = re.sub(
                r'(?:src|href|id|data-[a-z0-9-]+)=["\'][^"\']*["\']|CCE_V[0-9A-Za-z_]*|\b(?:v[3-9][A-Za-z0-9_]+|v10[A-Za-z0-9_]+|cce-[a-z0-9-]+|data-[a-z0-9-]+|DeepSeek-R1/V3)\b|Qwen\s*2\.[56]|pillar:\s*["\']v[3-7]["\']',
                '',
                line,
            )
            if re.search(
                r"\bBatch\s+\d+\b|Benchmark Tập đoàn|\bV[3-7](?:\.[0-9]+)?\b|\bv[4-7]\.[0-9]+(?:\.[0-9]+)?\b|\bv2\.[56](?:\.[0-9x]+)?\b",
                cleaned,
            ):
                g10_issues.append(f"Dev jargon / version hype in UI ({fp.as_posix()}:{idx}): {s[:80]}")
    print(f"[Gate 10] PWA Cache Parity & Clean UI Copy: {'PASS' if not g10_issues else 'FAIL'}")
    failures.extend(g10_issues[:10])

    # Gate 11: SVG Visual Studios & Curtain viewBox Sanity
    g11_issues: list[str] = []
    for svg_rel in [
        "src/components/v6VisualAcademyStudios.js",
        "src/components/laozihaoPavilionV5.js",
        "src/js/page-transition.js",
    ]:
        sp = ROOT / svg_rel
        if not sp.is_file():
            g11_issues.append(f"Missing SVG module: {svg_rel}")
            continue
        sp_txt = sp.read_text(encoding="utf-8")
        for idx, m_svg in enumerate(re.finditer(r"<svg\b([^>]*)>", sp_txt, flags=re.DOTALL), 1):
            if "viewBox=" not in m_svg.group(1):
                g11_issues.append(f"Inline <svg> #{idx} missing viewBox= in {svg_rel}")
    for svg_scan_fp in sorted((ROOT / "src").rglob("*.js")) + [ROOT / "index.html"]:
        s_txt = svg_scan_fp.read_text(encoding="utf-8", errors="ignore")
        for m_auto in re.finditer(r"<svg\b[^>]*\b(?:width|height)\s*=\s*['\"]auto['\"][^>]*>", s_txt):
            g11_issues.append(f"Invalid SVG width/height='auto' attribute in {svg_scan_fp.relative_to(ROOT).as_posix()}: {m_auto.group(0)[:70]}")
    print(f"[Gate 11] SVG Visual Studios & Curtain viewBox Sanity: {'PASS' if not g11_issues else 'FAIL'}")
    failures.extend(g11_issues[:10])

    # Gate 12: V6 Dataset Counts, Visual Assets & 500-MCQ Dedupe Parity
    import json as _json
    g12_issues: list[str] = []
    if v6_bundle_path.is_file():
        v6_raw = v6_bundle_path.read_text(encoding="utf-8")
        try:
            b_idx = v6_raw.index("var BUNDLES = ") + len("var BUNDLES = ")
            bundles, _ = _json.JSONDecoder().raw_decode(v6_raw, b_idx)
        except Exception as exc:
            g12_issues.append(f"Failed to parse V6 BUNDLES JSON: {exc}")
            bundles = {}

        if bundles:
            brands_cfg = bundles.get("CCE_V6_BRANDS_CRAFT", {})
            liushu_cfg = bundles.get("CCE_V6_LIUSHU_VISUAL", {})
            cosmo_cfg = bundles.get("CCE_V6_COSMOLOGY_VISUAL", {})
            lit_cfg = bundles.get("CCE_V6_LITERATURE_VISUAL", {})
            trade_cfg = bundles.get("CCE_V6_TRADE_AND_CSC", {})
            v6_quiz = bundles.get("CCE_V6_QUIZ", [])
            expected_checks = [
                (len(brands_cfg.get("brandsAdditional40", [])), 40, "brandsAdditional40"),
                (len(brands_cfg.get("brandsAdditional36", [])), 36, "brandsAdditional36"),
                (len(brands_cfg.get("giAdditional18", [])), 18, "giAdditional18"),
                (len(brands_cfg.get("lzhDualComparePairs10", [])), 10, "lzhDualComparePairs10"),
                (len(liushu_cfg.get("visualCharacters100", [])), 100, "visualCharacters100"),
                (len(liushu_cfg.get("falseFriendsComic30", [])), 30, "falseFriendsComic30"),
                (len(liushu_cfg.get("simpTradAsymmetry50", [])), 50, "simpTradAsymmetry50"),
                (len(liushu_cfg.get("measureWordsVisual40", [])), 40, "measureWordsVisual40"),
                (len(liushu_cfg.get("chengyuOrigins36", [])), 36, "chengyuOrigins36"),
                (len(cosmo_cfg.get("culinaryHerbs48", [])), 48, "culinaryHerbs48"),
                (len(cosmo_cfg.get("constellationsCulture28", [])), 28, "constellationsCulture28"),
                (len(cosmo_cfg.get("cosmoCasebookAdditional12V6", [])), 12, "cosmoCasebookAdditional12V6"),
                (len(lit_cfg.get("wenyanSyntaxTokens30", [])), 30, "wenyanSyntaxTokens30"),
                (len(lit_cfg.get("poemPaintingPairs24", [])), 24, "poemPaintingPairs24"),
                (len(lit_cfg.get("hskPassages40", [])), 40, "hskPassages40"),
                (len(lit_cfg.get("hskEssayFrames30_Additional15", [])), 15, "hskEssayFrames30_Additional15"),
                (len(lit_cfg.get("hanVietPoetryComparison15", [])), 15, "hanVietPoetryComparison15"),
                (len(trade_cfg.get("annotatedTradeDocs10", [])), 10, "annotatedTradeDocs10"),
                (len(trade_cfg.get("extraSupplyCases16", [])), 16, "extraSupplyCases16"),
                (len(trade_cfg.get("b2bTerms150", [])), 150, "b2bTerms150"),
                (len(trade_cfg.get("sinoVietWonders10", [])), 10, "sinoVietWonders10"),
                (len(trade_cfg.get("cscUniversities24Atlas", [])), 24, "cscUniversities24Atlas"),
                (len(trade_cfg.get("cscInterviewQuestions24", [])), 24, "cscInterviewQuestions24"),
                (len(v6_quiz), 192, "CCE_V6_QUIZ"),
            ]
            for actual_cnt, exp_cnt, lbl in expected_checks:
                if actual_cnt != exp_cnt:
                    g12_issues.append(f"Expected {exp_cnt} {lbl}, got {actual_cnt}")
            vis_qs = [q for q in v6_quiz if q.get("isVisualQuestion")]
            if len(vis_qs) != 120:
                g12_issues.append(f"Expected 120 Visual ID MCQs, got {len(vis_qs)}")
            for q in vis_qs:
                img_rel = str(q.get("imagePath", "")).lstrip("/")
                if not img_rel or not (ROOT / img_rel).is_file():
                    g12_issues.append(f"Visual quiz {q.get('id')} missing image on disk: {q.get('imagePath')}")

            v6_qids = [str(q.get("id", "")) for q in v6_quiz]
            v5_mastery_ids = re.findall(r'id:\s*"([^"]+)"', (ROOT / "src/data/v5/quizMasteryV5.js").read_text(encoding="utf-8")) if (ROOT / "src/data/v5/quizMasteryV5.js").is_file() else []
            v4_ids = re.findall(r'id:\s*"([^"]+)"', (ROOT / "src/data/v4/quizArenaV4.js").read_text(encoding="utf-8")) if (ROOT / "src/data/v4/quizArenaV4.js").is_file() else []
            base_ids = re.findall(r'id:\s*"(qa-[^"]+)"', (ROOT / "src/components/interactiveLabs2026.js").read_text(encoding="utf-8")) if (ROOT / "src/components/interactiveLabs2026.js").is_file() else []
            all_qids = base_ids + v4_ids + v5_mastery_ids + v6_qids
            seen_qids: set[str] = set()
            dup_qids: list[str] = []
            for qid in all_qids:
                if not qid:
                    g12_issues.append("Empty quiz ID encountered")
                elif qid in seen_qids:
                    dup_qids.append(qid)
                else:
                    seen_qids.add(qid)
            if dup_qids:
                g12_issues.append(f"Duplicate quiz IDs across V4/V5/V6: {dup_qids[:8]}")
    else:
        g12_issues.append("Missing V6 bundle for Gate 12")
    print(f"[Gate 12] V6 Dataset Counts, Visual Assets & 500-MCQ Dedupe: {'PASS' if not g12_issues else 'FAIL'}")
    failures.extend(g12_issues[:10])

    # Gate 13: V7 10 Modules / 60 Lessons, 24 3D Studios, Expeditions, 240h Concierge, Pigments, Benchmarks & Videos
    g13_issues: list[str] = []
    v7_bundle_path = ROOT / "src" / "data" / "v7" / "v7CompleteEncyclopedia.js"
    v7_bundle: dict = {}
    if not v7_bundle_path.is_file():
        g13_issues.append("MISSING V7 data bundle: src/data/v7/v7CompleteEncyclopedia.js")
    else:
        v7_raw = v7_bundle_path.read_text(encoding="utf-8")
        try:
            v7_idx = v7_raw.index("var V7_DATA = ") + len("var V7_DATA = ")
            v7_bundle, _ = _json.JSONDecoder().raw_decode(v7_raw, v7_idx)
        except Exception as exc:
            g13_issues.append(f"Failed to parse V7_DATA JSON: {exc}")

    hub3d_path = ROOT / "src" / "components" / "3d" / "studioHub3D.js"
    v6_3d_path = ROOT / "src" / "components" / "3d" / "v6HeritageStudios3D.js"
    v7_3d_path = ROOT / "src" / "components" / "3d" / "v7Masterpieces3D.js"
    total_3d_ids: list[str] = []
    for p3d in (hub3d_path, v6_3d_path, v7_3d_path):
        if p3d.is_file():
            total_3d_ids.extend(re.findall(r'\bid:\s*"([^"]+)"', p3d.read_text(encoding="utf-8")))
        else:
            g13_issues.append(f"Missing 3D studio module: {p3d.relative_to(ROOT).as_posix()}")
    if len(total_3d_ids) < 24:
        g13_issues.append(f"Expected >= 24 3D scene entries across studioHub3D/v6/v7, found {len(total_3d_ids)}")
    if v7_3d_path.is_file():
        v7_3d_ids = re.findall(r'\bid:\s*"([^"]+)"', v7_3d_path.read_text(encoding="utf-8"))
        if len(v7_3d_ids) != 6:
            g13_issues.append(f"Expected 6 new scenes in v7Masterpieces3D.js, found {len(v7_3d_ids)}")

    promo_video = ROOT / "assets" / "videos" / "cce-v7-official-promo.mp4"
    if promo_video.exists():
        g13_issues.append("Removed promo video still exists on disk: assets/videos/cce-v7-official-promo.mp4")
    for cpath in (ROOT / "src" / "components").rglob("*.js"):
        if "cce-v7-official-promo.mp4" in cpath.read_text(encoding="utf-8", errors="ignore"):
            g13_issues.append(f"Removed promo video still referenced in {cpath.relative_to(ROOT).as_posix()}")

    if v7_bundle:
        v7_core_checks = [
            (len(v7_bundle.get("modulesMeta3", [])), 3, "V7 modulesMeta3 (+7=10)"),
            (len(v7_bundle.get("lessons18", [])), 18, "V7 lessons18 (+42=60)"),
            (len(v7_bundle.get("heritageExpeditions16", [])), 16, "heritageExpeditions16"),
            (len(v7_bundle.get("digitalTravelConcierge8", [])), 8, "digitalTravelConcierge8"),
            (len(v7_bundle.get("traditionalPigments8", [])), 8, "traditionalPigments8"),
            (len(v7_bundle.get("globalPlatformBenchmarks6", [])), 6, "globalPlatformBenchmarks6"),
            (len(v7_bundle.get("youtubeVideos12", [])), 12, "youtubeVideos12"),
        ]
        for actual_c, exp_c, lbl in v7_core_checks:
            if actual_c != exp_c:
                g13_issues.append(f"Expected {exp_c} {lbl}, got {actual_c}")
        if "officialPromoVideo" in v7_bundle:
            g13_issues.append("Removed key officialPromoVideo still present in V7_DATA")
        for yt in v7_bundle.get("youtubeVideos12", []):
            if not re.fullmatch(r"[A-Za-z0-9_-]{11}", str(yt.get("youtubeId", ""))):
                g13_issues.append(f"Invalid YouTube ID: {yt.get('youtubeId')}")
    print(f"[Gate 13] V7 10-Module Curriculum, 24 3D Scenes, Expeditions & Video Assets: {'PASS' if not g13_issues else 'FAIL'}")
    failures.extend(g13_issues[:10])

    # Gate 14: V7 All-Dataset Counts, 120 Unique Brands & 600-MCQ / 150-Visual-ID Parity
    g14_issues: list[str] = []
    if v7_bundle:
        v7_counts = [
            (len(v7_bundle.get("brandsAdditional20", [])), 20, "brandsAdditional20"),
            (len(v7_bundle.get("giAdditional12", [])), 12, "giAdditional12"),
            (len(v7_bundle.get("craftProcessFlowcharts6", [])), 6, "craftProcessFlowcharts6"),
            (len(v7_bundle.get("liushu50", [])), 50, "liushu50"),
            (len(v7_bundle.get("falseFriends15", [])), 15, "falseFriends15"),
            (len(v7_bundle.get("simpTrad15", [])), 15, "simpTrad15"),
            (len(v7_bundle.get("measureWords15", [])), 15, "measureWords15"),
            (len(v7_bundle.get("chengyu14", [])), 14, "chengyu14"),
            (len(v7_bundle.get("herbs12", [])), 12, "herbs12"),
            (len(v7_bundle.get("microclimates6", [])), 6, "microclimates6"),
            (len(v7_bundle.get("cosmoCases8", [])), 8, "cosmoCases8"),
            (len(v7_bundle.get("novelGraphs2", [])), 2, "novelGraphs2"),
            (len(v7_bundle.get("poemPaintings12", [])), 12, "poemPaintings12"),
            (len(v7_bundle.get("wenyanTokens16", [])), 16, "wenyanTokens16"),
            (len(v7_bundle.get("hskPassages20", [])), 20, "hskPassages20"),
            (len(v7_bundle.get("hskEssays16", [])), 16, "hskEssays16"),
            (len(v7_bundle.get("tangVietPoems9", [])), 9, "tangVietPoems9"),
            (len(v7_bundle.get("b2bTerms50", [])), 50, "b2bTerms50"),
            (len(v7_bundle.get("annotatedTradeDocs5", [])), 5, "annotatedTradeDocs5"),
            (len(v7_bundle.get("extraSupplyCases10", [])), 10, "extraSupplyCases10"),
            (len(v7_bundle.get("sinoVietWonders6", [])), 6, "sinoVietWonders6"),
            (len(v7_bundle.get("cscUniversities12", [])), 12, "cscUniversities12"),
            (len(v7_bundle.get("cscInterviews12", [])), 12, "cscInterviews12"),
            (len(v7_bundle.get("hsrCorridors8", [])), 8, "hsrCorridors8"),
            (len(v7_bundle.get("quiz100", [])), 100, "V7 quiz100"),
        ]
        for actual_c, exp_c, lbl in v7_counts:
            if lbl == "simpTrad15":
                if actual_c < exp_c:
                    g14_issues.append(f"Expected >= {exp_c} {lbl}, got {actual_c}")
            elif actual_c != exp_c:
                g14_issues.append(f"Expected {exp_c} {lbl}, got {actual_c}")

        # Verify 100 base+v5+v6 + 20 V7 = 120 unique Honored Brands via coreZhKey
        pref_rx = re.compile(r"^(北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳)")
        def _ck(zh: str) -> str:
            return re.sub(r"\s*\(.*?\)\s*", "", pref_rx.sub("", str(zh))).strip()

        brand_keys: set[str] = set()
        for bf in ["src/data/v5/laozihaoBrandsV5.js", "src/data/v5/laozihaoBrandsExpandedV5.js"]:
            btxt = (ROOT / bf).read_text(encoding="utf-8")
            if "giAppellations12" in btxt:
                btxt = btxt[: btxt.find("giAppellations12")]
            for zm in re.finditer(r'\bzh:\s*"([^"]+)"', btxt):
                k = _ck(zm.group(1))
                if k:
                    brand_keys.add(k)
        if v6_bundle_path.is_file() and bundles:
            b6c = bundles.get("CCE_V6_BRANDS_CRAFT", {})
            for bitem in b6c.get("brandsAdditional40", []) + b6c.get("brandsAdditional36", []):
                k = _ck(bitem.get("zh", ""))
                if k:
                    brand_keys.add(k)
        for vb in v7_bundle.get("brandsAdditional20", []):
            k = _ck(vb.get("zh", ""))
            if k in brand_keys:
                g14_issues.append(f"Duplicate brand coreZhKey across V5/V6/V7: {vb.get('zh')} ({k})")
            elif k:
                brand_keys.add(k)
        if len(brand_keys) != 120:
            g14_issues.append(f"Expected 120 unique Honored Brands across V5+V6+V7, got {len(brand_keys)}")

        # Verify 600 unique MCQs & 150 Visual IDs with verified disk images
        v7_quiz = v7_bundle.get("quiz100", [])
        v7_vis = [q for q in v7_quiz if q.get("isVisualQuestion")]
        if len(v7_vis) != 30:
            g14_issues.append(f"Expected 30 V7 Visual ID MCQs (+120 V6 = 150), got {len(v7_vis)}")
        for q in v7_vis:
            irel = str(q.get("imagePath", "")).lstrip("/")
            if not irel or not (ROOT / irel).is_file():
                g14_issues.append(f"V7 visual quiz {q.get('id')} missing image: {q.get('imagePath')}")

        v3_quiz_ids = re.findall(r"q\(\s*['\"]([^'\"]+)['\"]", (ROOT / "src/data/v3/quizArenaBank2026.js").read_text(encoding="utf-8")) if (ROOT / "src/data/v3/quizArenaBank2026.js").is_file() else []
        v7_qids = [str(q.get("id", "")) for q in v7_quiz]
        pool600 = (
            base_ids
            + v3_quiz_ids
            + re.findall(r'id:\s*"([^"]+)"', (ROOT / "src/data/v4/quizArenaV4.js").read_text(encoding="utf-8"))
            + re.findall(r'id:\s*"([^"]+)"', (ROOT / "src/data/v5/quizMasteryV5.js").read_text(encoding="utf-8"))
            + [str(q.get("id", "")) for q in (bundles.get("CCE_V6_QUIZ", []) if bundles else [])]
            + v7_qids
        )
        if len(pool600) != 600 or len(set(pool600)) != 600:
            g14_issues.append(f"Expected 600 unique MCQs (Base+V3+V4+V5+V6+V7), got total={len(pool600)}, unique={len(set(pool600))}")

        # Verify zero Vietnamese-only diacritics leak into any *En string field in V7_DATA
        vi_only_rx = re.compile(r"[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]", re.I)
        def _scan_en_leaks(obj: object, trail: str) -> None:
            if isinstance(obj, dict):
                for ek, ev in obj.items():
                    if ek.endswith("En"):
                        if isinstance(ev, str) and vi_only_rx.search(ev):
                            g14_issues.append(f"VI char in EN field {trail}.{ek}: {ev[:60]}")
                        elif isinstance(ev, list):
                            for li, lv in enumerate(ev):
                                if isinstance(lv, str) and vi_only_rx.search(lv):
                                    g14_issues.append(f"VI char in EN list {trail}.{ek}[{li}]: {lv[:60]}")
                    else:
                        _scan_en_leaks(ev, f"{trail}.{ek}")
            elif isinstance(obj, list):
                for idx_i, item_v in enumerate(obj):
                    _scan_en_leaks(item_v, f"{trail}[{idx_i}]")
        _scan_en_leaks(v7_bundle, "V7_DATA")

        # Verify V5, V6, and EditorialMedia sources have 0 residual clones/slug leaks/VI-in-titleEn
        if v6_bundle_path.is_file():
            if "Mẹo quan sát ảnh [" in v6_raw:
                g14_issues.append("V6 bundle contains residual 'Mẹo quan sát ảnh [' boilerplate")
            if "bức họa paint-" in v6_raw:
                g14_issues.append("V6 bundle contains raw 'bức họa paint-*' slug leak")
        v5_enrich_path = ROOT / "src" / "data" / "v5" / "v5DeepEnrichmentLayer.js"
        if v5_enrich_path.is_file() and "HSK 7–9 / CSC Model Context: " in v5_enrich_path.read_text(encoding="utf-8"):
            g14_issues.append("V5 enrichment layer contains Vietnamese leak under HSK 7-9 Model Context")
        emp_path = ROOT / "src" / "data" / "editorialMediaPack2026.js"
        if emp_path.is_file():
            for ln, line_txt in enumerate(emp_path.read_text(encoding="utf-8").splitlines(), 1):
                if '"titleEn"' in line_txt and vi_only_rx.search(line_txt):
                    g14_issues.append(f"VI diacritic leak in editorialMediaPack2026.js:{ln} titleEn")
                    break
    print(f"[Gate 14] V7 All-Dataset Counts, 120 Brands & 600-MCQ / 150-Visual-ID Parity: {'PASS' if not g14_issues else 'FAIL'}")
    failures.extend(g14_issues[:10])

    # Gate 15: Zero Duplicate Images (Paths, MD5 Hashes & Home Zones)
    import hashlib as _hashlib
    g15_issues: list[str] = []
    _md5_cache: dict[str, str] = {}

    def _g15_md5(rel_path: str) -> str:
        rel_clean = str(rel_path or "").strip().lstrip("/")
        if rel_clean not in _md5_cache:
            fp_img = ROOT / rel_clean
            _md5_cache[rel_clean] = _hashlib.md5(fp_img.read_bytes()).hexdigest() if fp_img.is_file() else "MISSING"
        return _md5_cache[rel_clean]

    def _g15_check(group_name: str, items: list[tuple[str, str]]) -> None:
        seen_paths: dict[str, str] = {}
        seen_hashes: dict[str, tuple[str, str]] = {}
        for item_lbl, raw_p in items:
            if not raw_p:
                continue
            rel_p = str(raw_p).strip().lstrip("/")
            h_val = _g15_md5(rel_p)
            if h_val == "MISSING":
                g15_issues.append(f"[{group_name}] Missing image for {item_lbl}: {rel_p}")
                continue
            if rel_p in seen_paths:
                g15_issues.append(f"[{group_name}] Duplicate image path {rel_p} ({item_lbl} vs {seen_paths[rel_p]})")
            else:
                seen_paths[rel_p] = item_lbl
            if h_val in seen_hashes and seen_hashes[h_val][1] != rel_p:
                g15_issues.append(f"[{group_name}] Duplicate MD5 {h_val[:8]}: {item_lbl}={rel_p} vs {seen_hashes[h_val][0]}={seen_hashes[h_val][1]}")
            elif h_val not in seen_hashes:
                seen_hashes[h_val] = (item_lbl, rel_p)

    # 15.1 Disk portraits pool (including wu-ding.jpg & li-si.jpg)
    fig_dir = ROOT / "assets" / "images" / "figures"
    _g15_check("DiskPortraits", [(fp_f.name, fp_f.relative_to(ROOT).as_posix()) for fp_f in sorted(fig_dir.glob("*")) if fp_f.is_file()])

    # 15.2 V5 + V6 + V7 merged collections
    v5_enr_path = ROOT / "src" / "data" / "v5" / "v5DeepEnrichmentLayer.js"
    v5_data_obj: dict = {}
    if v5_enr_path.is_file():
        v5_raw_txt = v5_enr_path.read_text(encoding="utf-8")
        v5_idx_pos = v5_raw_txt.find("var DATA = ")
        if v5_idx_pos >= 0:
            v5_data_obj, _ = _json.JSONDecoder().raw_decode(v5_raw_txt, v5_idx_pos + len("var DATA = "))

    if v5_data_obj and bundles and v7_bundle:
        v6_brands = bundles.get("CCE_V6_BRANDS_CRAFT", {})
        def _pav_core_zh(zh: str) -> str:
            s_val = re.sub(
                r"^(北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|宜宾|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳)",
                "",
                str(zh or ""),
            )
            return re.sub(r"\s*\(.*?\)\s*", "", s_val).strip()

        b5_src = (ROOT / "src" / "data" / "v5" / "laozihaoBrandsV5.js").read_text(encoding="utf-8")
        b5x_src = (ROOT / "src" / "data" / "v5" / "laozihaoBrandsExpandedV5.js").read_text(encoding="utf-8")
        v5_be = v5_data_obj.get("brandEnrich", {})
        seen_brand_ck: set[str] = set()
        merged_120_brands: list[tuple[str, str]] = []
        for bid_val, zh_val in re.findall(r'id:\s*"(lzh-[^"]+)"[^}]*?zh:\s*"([^"]+)"', b5_src, re.S) + re.findall(r'id:\s*"(lzh-x-[^"]+)"[^}]*?zh:\s*"([^"]+)"', b5x_src, re.S):
            ck_val = _pav_core_zh(zh_val) or zh_val
            if ck_val not in seen_brand_ck:
                seen_brand_ck.add(ck_val)
                merged_120_brands.append((bid_val, (v5_be.get(bid_val) or {}).get("imagePath", "")))
        for bx in (v6_brands.get("brandsAdditional40", []) + v6_brands.get("brandsAdditional36", []) + v7_bundle.get("brandsAdditional20", [])):
            ck_val = _pav_core_zh(bx.get("zh", "")) or bx.get("zh", "")
            if ck_val not in seen_brand_ck:
                seen_brand_ck.add(ck_val)
                merged_120_brands.append((str(bx.get("id", "")), str(bx.get("imagePath", ""))))
        _g15_check("Brands_120", merged_120_brands)

        gis_42 = (
            [(f"v5:{k}", v.get("imagePath", "")) for k, v in v5_data_obj.get("giEnrich", {}).items()]
            + [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_brands.get("giAdditional18", [])]
            + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("giAdditional12", [])]
        )
        _g15_check("GIs_42", gis_42)

        v5_acad_txt = (ROOT / "src" / "components" / "v5CourseAcademy.js").read_text(encoding="utf-8")
        course_imgs = (
            [(f"v5mod:{i}", m) for i, m in enumerate(re.findall(r'img:\s*"(assets/images/[^"]+)"', v5_acad_txt), 1)]
            + [(f"v7mod:{x.get('id')}", x.get("img", "")) for x in v7_bundle.get("modulesMeta3", [])]
            + [(f"v5l:{k}", v.get("imagePath", "")) for k, v in v5_data_obj.get("lessonEnrich", {}).items()]
            + [(f"v5m7:{x.get('id')}", x.get("imagePath", "")) for x in v5_data_obj.get("module7Lessons", [])]
            + [(f"v7l:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("lessons18", [])]
        )
        _g15_check("Courses_10Mod_60Lessons", course_imgs)

        vis_150 = (
            [(f"v6q:{q.get('id')}", q.get("imagePath", "")) for q in bundles.get("CCE_V6_QUIZ", []) if q.get("isVisualQuestion")]
            + [(f"v7q:{q.get('id')}", q.get("imagePath", "")) for q in v7_bundle.get("quiz100", []) if q.get("isVisualQuestion")]
        )
        _g15_check("VisualQuiz_150", vis_150)

        v6_cos = bundles.get("CCE_V6_COSMOLOGY_VISUAL", {})
        v6_lit = bundles.get("CCE_V6_LITERATURE_VISUAL", {})
        v6_tr = bundles.get("CCE_V6_TRADE_AND_CSC", {})
        _g15_check("Herbs_60", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_cos.get("culinaryHerbs48", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("herbs12", [])])
        _g15_check("CosmoCases_20", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_cos.get("cosmoCasebookAdditional12V6", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("cosmoCases8", [])])
        _g15_check("Poems_36", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_lit.get("poemPaintingPairs24", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("poemPaintings12", [])])
        _g15_check("SupplyCases_26", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_tr.get("extraSupplyCases16", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("extraSupplyCases10", [])])
        _g15_check("CSC_36", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_tr.get("cscUniversities24Atlas", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("cscUniversities12", [])])

        wonder_imgs: list[tuple[str, str]] = []
        for tag_w, lst_w in [("v6", v6_tr.get("sinoVietWonders10", [])), ("v7", v7_bundle.get("sinoVietWonders6", []))]:
            for wx_item in lst_w:
                wonder_imgs.append((f"{tag_w}:{wx_item.get('id')}:vn", wx_item.get("vnImg", "")))
                wonder_imgs.append((f"{tag_w}:{wx_item.get('id')}:cn", wx_item.get("chinaImg", "")))
        _g15_check("SinoVietWonders_32imgs", wonder_imgs)
        _g15_check("V7_Expeditions_16", [(str(x.get("id")), x.get("imagePath", "")) for x in v7_bundle.get("heritageExpeditions16", [])])
        _g15_check("V7_YouTubePosters_12", [(str(x.get("id")), x.get("posterImg", "")) for x in v7_bundle.get("youtubeVideos12", [])])

    # 15.3 Component & editorial data packs (strip onerror="..."/'...' fallbacks)
    for comp_rel in [
        "src/components/v4KnowledgeHub.js",
        "src/components/travelUXHub.js",
        "src/components/v3Wave5Modules.js",
        "src/components/trilingualTradeStudio.js",
        "src/data/destinationsDeepAtlas2026.js",
        "src/data/editorialMediaData.js",
    ]:
        comp_txt = (ROOT / comp_rel).read_text(encoding="utf-8")
        comp_stripped = re.sub(r'onerror\s*=\s*(?:"[^"]*"|\'[^\']*\')', '', comp_txt)
        comp_imgs = [(f"#{i}", m) for i, m in enumerate(re.findall(r'assets/images/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)', comp_stripped), 1)]
        _g15_check(comp_rel, comp_imgs)

    emp_src_txt = (ROOT / "src" / "data" / "editorialMediaPack2026.js").read_text(encoding="utf-8")
    _g15_check("editorialMediaPack2026.js", [(f"#{i}", m) for i, m in enumerate(re.findall(r'"src"\s*:\s*"(assets/images/[^"]+)"', emp_src_txt), 1)])
    reg_txt = (ROOT / "src" / "data" / "regionsData.js").read_text(encoding="utf-8")
    _g15_check("regionsData.js", [(f"#{i}", m) for i, m in enumerate(re.findall(r'assets/images/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)', reg_txt), 1)])
    mus_txt = (ROOT / "src" / "data" / "museumData.js").read_text(encoding="utf-8")
    _g15_check("museumData.js(imageUrl)", [(f"#{i}", m) for i, m in enumerate(re.findall(r'imageUrl:\s*"(assets/images/[^"]+)"', mus_txt), 1)])
    pnt_txt = (ROOT / "src" / "data" / "paintingsData.js").read_text(encoding="utf-8")
    pnt_all_imgs = re.findall(r'"image"\s*:\s*"(assets/images/[^"]+)"', pnt_txt)
    if len(pnt_all_imgs) != 54:
        g15_issues.append(f"Expected 54 painting image entries in paintingsData.js, found {len(pnt_all_imgs)}")
    _g15_check("paintingsData.js(54)", [(f"#{i}", m) for i, m in enumerate(pnt_all_imgs, 1)])
    v3_p1a_txt = (ROOT / "src" / "data" / "v3" / "articlesExpansionV3_Part1a.js").read_text(encoding="utf-8")
    v3_hero_imgs = re.findall(r'"[^"]+"\s*:\s*"(assets/images/[^"]+)"', v3_p1a_txt.split("HERO_MAP", 1)[1].split("};", 1)[0]) if "HERO_MAP" in v3_p1a_txt else []
    if len(v3_hero_imgs) != 43:
        g15_issues.append(f"Expected 43 V3 HERO_MAP images in articlesExpansionV3_Part1a.js, found {len(v3_hero_imgs)}")
    _g15_check("V3_HERO_MAP(43)", [(f"#{i}", m) for i, m in enumerate(v3_hero_imgs, 1)])

    mon_imgs: list[tuple[str, str]] = []
    for mon_rel in ["src/data/articlesMonographsPart1.js", "src/data/articlesMonographsPart2.js"]:
        mon_txt = (ROOT / mon_rel).read_text(encoding="utf-8")
        mon_imgs.extend([(f"{mon_rel}#{i}", m) for i, m in enumerate(re.findall(r'src:\s*"(assets/images/[^"]+)"', mon_txt), 1)])
    _g15_check("articlesMonographsPart1_2", mon_imgs)

    upool_path = ROOT / "src" / "data" / "uniqueImagePool.js"
    if not upool_path.is_file():
        g15_issues.append("Missing src/data/uniqueImagePool.js runtime deduplication pool")
    else:
        upool_txt = upool_path.read_text(encoding="utf-8")
        up_marker = "window.CCE_UNIQUE_IMAGE_POOL = "
        if up_marker not in upool_txt:
            g15_issues.append("Invalid header in src/data/uniqueImagePool.js")
        else:
            up_obj, _ = _json.JSONDecoder().raw_decode(upool_txt, upool_txt.index(up_marker) + len(up_marker))
            up_all = up_obj.get("all", [])
            if len(up_all) < 400:
                g15_issues.append(f"Expected >= 400 unique images in uniqueImagePool.js, got {len(up_all)}")
            _g15_check("uniqueImagePool.all", [(f"#{i}", m) for i, m in enumerate(up_all, 1)])
        if 'src="src/data/uniqueImagePool.js"' not in (ROOT / "index.html").read_text(encoding="utf-8"):
            g15_issues.append("index.html missing <script defer src=\"src/data/uniqueImagePool.js\">")

    # 15.5 V8 Pack Collections MD5 & Path Dedupe
    v8_node_dump = subprocess.run(
        [
            "node",
            "-e",
            "const fs=require('fs'),vm=require('vm');const sb={window:{CCE_V5_COURSE_LESSONS:{lessons36:[]}}};sb.globalThis=sb.window;vm.createContext(sb);for(let i=1;i<=8;i++)vm.runInContext(fs.readFileSync('src/data/v8/V8_Pack'+i+'.js','utf8'),sb);vm.runInContext(fs.readFileSync('src/data/v8/v8MasterBridge.js','utf8'),sb);console.log(JSON.stringify({D:sb.window.CCE_V8_DATA,Q:sb.window.CCE_V8_QUIZ,C:sb.window.CCE_V8_COURSE_ADDON}));",
        ],
        capture_output=True,
        text=True,
        encoding="utf-8",
    )
    v8_parsed: dict = {}
    if v8_node_dump.returncode != 0:
        g15_issues.append(f"Failed loading V8 packs via node: {v8_node_dump.stderr[:200]}")
    else:
        v8_parsed = _json.loads(v8_node_dump.stdout)
        v8_d = v8_parsed.get("D", {})
        v8_q = v8_parsed.get("Q", [])
        v8_c = v8_parsed.get("C", {})
        _g15_check("V8_Lessons_12", [(str(x.get("id")), x.get("imagePath", "")) for x in v8_c.get("lessons12", [])])
        _g15_check(
            "V8_Opera_Instruments_42",
            [(str(x.get("id")), x.get("imagePath", "")) for x in (v8_d.get("instruments16", []) + v8_d.get("operaAndPieces24", []) + [m for m in v8_d.get("masks12", []) if m.get("imagePath")])],
        )
        _g15_check("V8_Ethnic_24", [(str(x.get("id")), x.get("imagePath", "")) for x in v8_d.get("ethnic24", [])])
        _g15_check("V8_Literature_36", [(str(x.get("id")), x.get("imagePath", "")) for x in (v8_d.get("modernWorks20", []) + v8_d.get("modernAuthors16", []))])
        _g15_check("V8_Urban_16", [(str(x.get("id")), x.get("imagePath", "")) for x in v8_d.get("urbanGreenCases16", [])])
        _g15_check("V8_QuizVisual_50", [(str(x.get("id")), x.get("imagePath", "")) for x in v8_q if x.get("isVisualQuestion")])

    # 15.4 Home Zone non-overlap check in src/app.js
    app_txt_g15 = (ROOT / "src" / "app.js").read_text(encoding="utf-8")
    for req_tok in [
        "forbiddenHomeLeadImgs",
        '"great-wall-scroll"',
        '"jiangshan-ruci-duojiao"',
        '"forbidden-city-axis-gate"',
        '"forbidden-city-imperial-axis-gate"',
    ]:
        if req_tok not in app_txt_g15:
            g15_issues.append(f"Home image deduplication guard missing {req_tok} in src/app.js")

    print(f"[Gate 15] Zero Duplicate Images (Paths, MD5 Hashes & Home Zones): {'PASS' if not g15_issues else 'FAIL'}")
    failures.extend(g15_issues[:10])

    # Gate 16: Semantic Authentic Images & Anti-Swapper Guard
    g16_issues: list[str] = []
    if upool_path.is_file():
        up_raw = upool_path.read_text(encoding="utf-8")
        if 'img.setAttribute("src", replacement)' in up_raw or "installObserver(" in up_raw:
            g16_issues.append("uniqueImagePool.js still contains runtime DOM image-swapping mutation")

    prov_path = ROOT / "src" / "data" / "imageProvenanceV8.json"
    if not prov_path.is_file():
        g16_issues.append("Missing src/data/imageProvenanceV8.json provenance registry")
    else:
        prov_obj = _json.loads(prov_path.read_text(encoding="utf-8"))
        for eid, meta in prov_obj.items():
            if not isinstance(meta, dict):
                continue
            rel_t = str(meta.get("targetFile") or "").strip().lstrip("/")
            fp_t = ROOT / rel_t
            if not fp_t.is_file() or fp_t.stat().st_size <= 5000:
                g16_issues.append(f"Provenance asset missing/too small for {eid}: {rel_t}")

    forbidden_prefixes = ("assets/images/prov_items/", "assets/images/provinces/")
    if v5_data_obj and bundles and v7_bundle:
        g16_sets = [
            ("Brands_120", merged_120_brands),
            ("GIs_42", gis_42),
            ("CSC_36", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_tr.get("cscUniversities24Atlas", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("cscUniversities12", [])]),
            ("Herbs_60", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_cos.get("culinaryHerbs48", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("herbs12", [])]),
            ("SupplyCases_26", [(f"v6:{x.get('id')}", x.get("imagePath", "")) for x in v6_tr.get("extraSupplyCases16", [])] + [(f"v7:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("extraSupplyCases10", [])]),
            ("V7_Expeditions_16", [(str(x.get("id")), x.get("imagePath", "")) for x in v7_bundle.get("heritageExpeditions16", [])]),
            ("SinoVietWonders_32imgs", wonder_imgs),
            ("Lessons_60", [(f"v5l:{k}", v.get("imagePath", "")) for k, v in v5_data_obj.get("lessonEnrich", {}).items()] + [(f"v5m7:{x.get('id')}", x.get("imagePath", "")) for x in v5_data_obj.get("module7Lessons", [])] + [(f"v7l:{x.get('id')}", x.get("imagePath", "")) for x in v7_bundle.get("lessons18", [])]),
        ]
        for gname, gitems in g16_sets:
            for lbl, pval in gitems:
                if any(str(pval).startswith(pref) for pref in forbidden_prefixes):
                    g16_issues.append(f"[{gname}] Fallback image remains on {lbl}: {pval}")
    for lbl, pval in enumerate(v3_hero_imgs, 1):
        if any(str(pval).startswith(pref) for pref in forbidden_prefixes):
            g16_issues.append(f"[V3_HERO_MAP] Fallback image remains on #{lbl}: {pval}")
    for m_ed_src in re.findall(r'"src"\s*:\s*"(assets/images/[^"]+)"', emp_src_txt):
        if any(str(m_ed_src).startswith(pref) for pref in forbidden_prefixes):
            g16_issues.append(f"[editorialMediaPack2026] Fallback image remains: {m_ed_src}")

    # V8 Pack dataset counts, verified local image paths & provenance audit
    if v8_parsed:
        v8_d = v8_parsed.get("D", {})
        v8_q = v8_parsed.get("Q", [])
        v8_c = v8_parsed.get("C", {})
        expected_v8_counts = [
            ("V8 modulesMeta2", len(v8_c.get("modulesMeta2", [])), 2),
            ("V8 lessons12", len(v8_c.get("lessons12", [])), 12),
            ("V8 quiz total", len(v8_q), 200),
            ("V8 quiz visual", len([q for q in v8_q if q.get("isVisualQuestion")]), 50),
            ("V8 operaAndPieces24", len(v8_d.get("operaAndPieces24", [])), 24),
            ("V8 instruments16", len(v8_d.get("instruments16", [])), 16),
            ("V8 masks12", len(v8_d.get("masks12", [])), 12),
            ("V8 ethnic24", len(v8_d.get("ethnic24", [])), 24),
            ("V8 modernWorks20", len(v8_d.get("modernWorks20", [])), 20),
            ("V8 modernAuthors16", len(v8_d.get("modernAuthors16", [])), 16),
            ("V8 urbanGreenCases16", len(v8_d.get("urbanGreenCases16", [])), 16),
            ("V8 hskPassagesV8_12", len(v8_d.get("hskPassagesV8_12", [])), 12),
            ("V8 greenTradeCasesV8_12", len(v8_d.get("greenTradeCasesV8_12", [])), 12),
            ("V8 craftAndNightFieldGuides12", len(v8_d.get("craftAndNightFieldGuides12", [])), 12),
            ("V8 studio3dHotspots4", len(v8_d.get("studio3dHotspots4", [])), 4),
        ]
        for lbl_c, actual_c, want_c in expected_v8_counts:
            if actual_c != want_c:
                g16_issues.append(f"[{lbl_c}] Expected {want_c}, got {actual_c}")
        prov_files = set(str(v.get("targetFile") or "").strip().lstrip("/") for v in prov_obj.values() if isinstance(v, dict)) if prov_path.is_file() else set()
        v8_visual_groups = [
            ("V8_lessons12", v8_c.get("lessons12", [])),
            ("V8_instruments16", v8_d.get("instruments16", [])),
            ("V8_opera24", v8_d.get("operaAndPieces24", [])),
            ("V8_ethnic24", v8_d.get("ethnic24", [])),
            ("V8_works20", v8_d.get("modernWorks20", [])),
            ("V8_authors16", v8_d.get("modernAuthors16", [])),
            ("V8_urban16", v8_d.get("urbanGreenCases16", [])),
            ("V8_quizVisual50", [q for q in v8_q if q.get("isVisualQuestion")]),
        ]
        for vg_name, vg_list in v8_visual_groups:
            for item in vg_list:
                iid = str(item.get("id") or "")
                ip = str(item.get("imagePath") or "").strip().lstrip("/")
                if not ip:
                    g16_issues.append(f"[{vg_name}] Missing imagePath on {iid}")
                    continue
                if any(ip.startswith(pref) for pref in forbidden_prefixes):
                    g16_issues.append(f"[{vg_name}] Forbidden fallback image on {iid}: {ip}")
                fp_ip = ROOT / ip
                if not fp_ip.is_file() or fp_ip.stat().st_size <= 5000:
                    g16_issues.append(f"[{vg_name}] Missing/small local file for {iid}: {ip}")
                if ip not in prov_files:
                    g16_issues.append(f"[{vg_name}] Unregistered image in provenance for {iid}: {ip}")

    g16_status = "PASS" if not g16_issues else f"FAIL ({len(g16_issues)})"
    print(f"[Gate 16] Semantic Authentic Images & Anti-Swapper Guard: {g16_status}")
    failures.extend(g16_issues[:15])

    # Gate 17: V9 Visual Design System, WCAG AAA Contrast & 8 UX Modules
    g17_issues: list[str] = []
    v9_css = ROOT / "styles" / "v9-visual-system.css"
    if not v9_css.is_file():
        g17_issues.append("Missing styles/v9-visual-system.css")
    else:
        css_txt = v9_css.read_text(encoding="utf-8")
        for req_tok in (
            "--v9-sp-1", "--v9-sp-4", "--v9-ease", ".v9-plate-cinema",
            ".v9-plate-portrait", ".v9-exhibition-dark", ".v9-split-atlas",
            ".v9-story-flow-shell", ".v9-print-booklet", "prefers-reduced-motion"
        ):
            if req_tok not in css_txt:
                g17_issues.append(f"Missing V9 CSS token/class: {req_tok}")

    v9_modules = [
        ROOT / "src" / "utils" / "v9LazyLoader.js",
        ROOT / "src" / "components" / "v9HomeExperience.js",
        ROOT / "src" / "components" / "v9VisualDiscovery.js",
        ROOT / "src" / "components" / "v9HandscrollViewer.js",
        ROOT / "src" / "components" / "v9SplitAtlas.js",
        ROOT / "src" / "components" / "v9TripPlanner.js",
        ROOT / "src" / "components" / "v9ScrollytellingReader.js",
        ROOT / "src" / "components" / "v9DataStories.js",
    ]
    emoji_rx_v9 = re.compile(r"[\U0001F300-\U0001FAFF]")
    for mp in v9_modules:
        if not mp.is_file():
            g17_issues.append(f"Missing V9 JS module: {mp.relative_to(ROOT).as_posix()}")
        elif emoji_rx_v9.search(mp.read_text(encoding="utf-8")):
            g17_issues.append(f"UI emoji detected inside {mp.name}")

    idx_html_txt = (ROOT / "index.html").read_text(encoding="utf-8")
    if 'styles/v9-visual-system.css' not in idx_html_txt:
        g17_issues.append("index.html missing styles/v9-visual-system.css link")
    if 'CACHE_VERSION = "cce-v10.2"' not in (ROOT / "sw.js").read_text(encoding="utf-8"):
        g17_issues.append("sw.js CACHE_VERSION is not cce-v10.2")

    def _rel_lum(hex_c: str) -> float:
        hx = hex_c.lstrip("#")
        vals = []
        for idx_c in (0, 2, 4):
            s = int(hx[idx_c:idx_c+2], 16) / 255.0
            vals.append(s / 12.92 if s <= 0.03928 else ((s + 0.055) / 1.055) ** 2.4)
        return 0.2126 * vals[0] + 0.7152 * vals[1] + 0.0722 * vals[2]

    for lbl_p, fg_h, bg_h in (
        ("Xuan Light", "#1A1918", "#FAF7F2"),
        ("Sepia Linen", "#231E18", "#F4ECD8"),
        ("Dark Inkstone", "#F2EFE9", "#121211"),
        ("Exhibition Dark", "#F3EFE6", "#141311"),
    ):
        l1, l2 = _rel_lum(fg_h), _rel_lum(bg_h)
        cr = (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)
        if cr < 7.0:
            g17_issues.append(f"WCAG AAA <7.0 contrast on {lbl_p}: {cr:.2f}")

    g17_status = "PASS" if not g17_issues else f"FAIL ({len(g17_issues)})"
    print(f"[Gate 17] V9 Visual Design System, WCAG AAA & 8 UX Modules: {g17_status}")
    failures.extend(g17_issues[:15])

    # Gate 18: V10 Sub-Page Deck, Paginated Collections, Unified Reader & Drawer
    g18_issues: list[str] = []
    v10_assets = [
        "styles/v10-paginated-deck.css",
        "src/core/v10SubpageDeck.js",
        "src/components/v10CollectionPaginator.js",
        "src/components/v10PaginatedArticleReader.js",
        "src/components/v10ContextualDrawer.js",
    ]
    for rel_a in v10_assets:
        fp_a = ROOT / rel_a
        if not fp_a.is_file() or fp_a.stat().st_size < 100:
            g18_issues.append(f"Missing or empty V10 asset: {rel_a}")
        if rel_a not in idx_html_txt:
            g18_issues.append(f"index.html missing V10 asset reference: {rel_a}")
        if rel_a not in sw_txt:
            g18_issues.append(f"sw.js SHELL_CACHE missing V10 asset: {rel_a}")

    app_txt = (ROOT / "src" / "app.js").read_text(encoding="utf-8")
    for req_hook in (
        "CCE_V10_DECK.renderDeck",
        "CCE_V10_PAGINATOR.paginate",
        "CCE_V10_READER.renderUnifiedToolbar",
        "CCE_V10_READER.renderChapters",
        "CCE_V10_DRAWER.renderHost",
    ):
        if req_hook not in app_txt:
            g18_issues.append(f"src/app.js missing V10 hook: {req_hook}")

    for lbl_p, fg_h, bg_h in (
        ("V10 Active Tab Light", "#821C1C", "#F7F4ED"),
        ("V10 Active Tab Dark", "#E5A93C", "#121316"),
    ):
        l1, l2 = _rel_lum(fg_h), _rel_lum(bg_h)
        cr = (max(l1, l2) + 0.05) / (min(l1, l2) + 0.05)
        if cr < 7.0:
            g18_issues.append(f"WCAG AAA <7.0 contrast on {lbl_p}: {cr:.2f}")

    print(f"[Gate 18] V10 Sub-Page Deck, Paginated Collections, Unified Reader & Drawer: {'PASS' if not g18_issues else f'FAIL ({len(g18_issues)})'}")
    failures.extend(g18_issues[:15])

    # Gate 19: V10 De-AI Editorial Prose, Zero MUJI & Clean Sentence-Case Titles
    g19_issues: list[str] = []
    ai_ese_patterns = [
        ("không chỉ", re.compile(r"\bkhông chỉ\b", re.IGNORECASE)),
        ("không đơn thuần", re.compile(r"\bkhông đơn thuần\b", re.IGNORECASE)),
        ("bản giao hưởng", re.compile(r"\bbản giao hưởng\b", re.IGNORECASE)),
        ("minh chứng sống động", re.compile(r"\bminh chứng sống động\b", re.IGNORECASE)),
        ("bức tranh toàn cảnh", re.compile(r"\bbức tranh toàn cảnh\b", re.IGNORECASE)),
        ("nền tảng vững chắc", re.compile(r"\bnền tảng vững chắc\b", re.IGNORECASE)),
        ("sợi chỉ đỏ", re.compile(r"\bsợi chỉ đỏ\b", re.IGNORECASE)),
        ("kết tinh tinh hoa", re.compile(r"\bkết tinh tinh hoa\b", re.IGNORECASE)),
        ("vai trò then chốt", re.compile(r"\bvai trò then chốt\b", re.IGNORECASE)),
        ("đóng vai trò như", re.compile(r"\bđóng vai trò như\b", re.IGNORECASE)),
        ("một cách sâu sắc", re.compile(r"\bmột cách sâu sắc\b", re.IGNORECASE)),
        ("hành trình khám phá", re.compile(r"\bhành trình khám phá\b", re.IGNORECASE)),
        ("kho tàng vô giá", re.compile(r"\bkho tàng vô giá\b", re.IGNORECASE)),
        ("tapestry", re.compile(r"\btapestry\b", re.IGNORECASE)),
        ("testament to", re.compile(r"\btestament to\b", re.IGNORECASE)),
        ("not merely", re.compile(r"\bnot merely\b", re.IGNORECASE)),
        ("underscores", re.compile(r"\bunderscores\b", re.IGNORECASE)),
        ("interplay", re.compile(r"\binterplay\b", re.IGNORECASE)),
        ("cornerstone", re.compile(r"\bcornerstone\b", re.IGNORECASE)),
        ("beacon of", re.compile(r"\bbeacon of\b", re.IGNORECASE)),
        ("rich heritage", re.compile(r"\brich heritage\b", re.IGNORECASE)),
    ]
    textile_rx = re.compile(r"(?:slit[- ]tapestry|kesi\s+tapestry|silk\s+tapestry)", re.IGNORECASE)
    for jp in sorted((ROOT / "src").rglob("*.js")):
        rel_j = jp.relative_to(ROOT).as_posix()
        if rel_j == "src/data/brandIdentityData.js":
            continue
        for ln_no, ln_txt in enumerate(jp.read_text(encoding="utf-8").splitlines(), 1):
            for label_p, rx_p in ai_ese_patterns:
                for m_p in rx_p.finditer(ln_txt):
                    if label_p == "tapestry":
                        ctx_t = ln_txt[max(0, m_p.start() - 25):min(len(ln_txt), m_p.end() + 25)]
                        if textile_rx.search(ctx_t):
                            continue
                    g19_issues.append(f"AI-ese '{label_p}' in {rel_j}:{ln_no}")

    muji_rx = re.compile(r"\bmuji\b", re.IGNORECASE)
    for chk_dir in (ROOT / "src", ROOT / "styles"):
        for fp_m in chk_dir.rglob("*"):
            if fp_m.suffix in {".js", ".css"} and muji_rx.search(fp_m.read_text(encoding="utf-8", errors="ignore")):
                g19_issues.append(f"Banned MUJI token in {fp_m.relative_to(ROOT).as_posix()}")
    if muji_rx.search(idx_html_txt):
        g19_issues.append("Banned MUJI token in index.html")

    seo_py = (ROOT / "scripts" / "generate_seo_files.py").read_text(encoding="utf-8")
    meta_blk = re.search(r"STATIC_SECTION_META\s*=\s*\{(.*?)\n\}", seo_py, re.S)
    if meta_blk:
        for title_ln in re.findall(r'f"([^"]+\{SITE_BRAND\}[^"]*)"', meta_blk.group(1)):
            if "&" in title_ln or "Phiên bản 2.0" in title_ln or "Giám định Zoom" in title_ln or "MODULE" in title_ln:
                g19_issues.append(f"Unclean SEO title: {title_ln}")

    for h1_m in re.finditer(r"<h1[^>]*>(.*?)</h1>", app_txt, re.S):
        h1_inner = h1_m.group(1)
        if "&amp;" in h1_inner or "Phiên bản 2.0" in h1_inner or "Giám định Zoom" in h1_inner or re.search(r"\bMODULE\b", h1_inner):
            g19_issues.append(f"Unclean route <h1> in src/app.js: {h1_inner[:80]}")

    cert_rx = re.compile(r"CHỨNG CHỈ HOÀN THÀNH|Xuất Chứng Chỉ|exportCertificatePng|cce-v6-certificate-studio|nhận chứng chỉ|Completion Certificate|Claim Certificate", re.IGNORECASE)
    for cp in sorted((ROOT / "src").rglob("*.js")):
        if cert_rx.search(cp.read_text(encoding="utf-8", errors="ignore")):
            g19_issues.append(f"Removed certificate UI still present in {cp.relative_to(ROOT).as_posix()}")

    print(f"[Gate 19] V10 De-AI Editorial Prose, Zero MUJI & Clean Titles: {'PASS' if not g19_issues else f'FAIL ({len(g19_issues)})'}")
    failures.extend(g19_issues[:20])

    if failures:
        print("\nGATE FAILURES:")
        for f in failures:
            print(" -", f)
        return 1
    print("\nALL 19 INTEGRITY GATES PASSED CLEANLY.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
