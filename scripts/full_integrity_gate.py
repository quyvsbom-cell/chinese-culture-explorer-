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

    # Gate 10: PWA Cache Parity (cce-v7.0) & Zero Dev Jargon in UI Strings
    g10_issues: list[str] = []
    sw_txt = (ROOT / "sw.js").read_text(encoding="utf-8") if (ROOT / "sw.js").is_file() else ""
    if 'CACHE_VERSION = "cce-v7.0"' not in sw_txt:
        g10_issues.append('sw.js CACHE_VERSION is not "cce-v7.0"')
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
            if actual_c != exp_c:
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
    print(f"[Gate 14] V7 All-Dataset Counts, 120 Brands & 600-MCQ / 150-Visual-ID Parity: {'PASS' if not g14_issues else 'FAIL'}")
    failures.extend(g14_issues[:10])

    if failures:
        print("\nGATE FAILURES:")
        for f in failures:
            print(" -", f)
        return 1
    print("\nALL 14 INTEGRITY GATES PASSED CLEANLY.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
