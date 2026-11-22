"""Build src/data/v7/v7CompleteEncyclopedia.js from the 6 modular V7 pack builders & external Gemini Web packs."""

from __future__ import annotations

import json
import pathlib
import re
from typing import Any

from v7_builders.pack_utils import (
    NON_CLINICAL_EN,
    NON_CLINICAL_VI,
    ROOT,
    UniqueImageAllocator,
    core_zh_key,
    ensure_verified_img,
    sanitize_recursive,
)
from v7_builders.pack1_course_lessons import build_pack1
from v7_builders.pack2_brands_gi_3d_pigments import build_pack2
from v7_builders.pack3_language_script import build_pack3
from v7_builders.pack4_cosmo_lit_hsk import build_pack4
from v7_builders.pack5_trade_csc_tourism import build_pack5
from v7_builders.pack6_quiz_benchmarks import build_pack6

OUT_FILE = ROOT / "src" / "data" / "v7" / "v7CompleteEncyclopedia.js"


def _collect_existing_brand_keys() -> set[str]:
    v5a = (ROOT / "src/data/v5/laozihaoBrandsV5.js").read_text(encoding="utf-8")
    v5b = (ROOT / "src/data/v5/laozihaoBrandsExpandedV5.js").read_text(encoding="utf-8").split("giAppellations12")[0]
    seen: set[str] = set()
    for blk in (v5a, v5b):
        for m in re.finditer(r'id\s*:\s*"([^"]+)".*?zh\s*:\s*"([^"]+)"', blk, re.S):
            if not m.group(1).startswith(("all", "tcm", "culinary", "tea", "craft")):
                seen.add(core_zh_key(m.group(2)))
    v6_txt = (ROOT / "src/data/v6/v6EncyclopediaAndVisuals.js").read_text(encoding="utf-8")
    idx = v6_txt.index("var BUNDLES = ") + len("var BUNDLES = ")
    b6, _ = json.JSONDecoder().raw_decode(v6_txt, idx)
    for b in b6["CCE_V6_BRANDS_CRAFT"]["brandsAdditional40"] + b6["CCE_V6_BRANDS_CRAFT"]["brandsAdditional36"]:
        seen.add(core_zh_key(b["zh"]))
    return seen


def _collect_existing_quiz_ids() -> set[str]:
    ids: set[str] = set()
    il = (ROOT / "src/components/interactiveLabs2026.js").read_text(encoding="utf-8")
    m_base = re.search(r"const QUIZ_ARENA_QUESTIONS = \[(.*?)\n  \];", il, re.S)
    if m_base:
        ids.update(re.findall(r'id:\s*"([^"]+)"', m_base.group(1)))
    q3 = (ROOT / "src/data/v3/quizArenaBank2026.js").read_text(encoding="utf-8")
    ids.update(re.findall(r"q\('([^']+)'", q3))
    q4 = (ROOT / "src/data/v4/quizArenaV4.js").read_text(encoding="utf-8")
    ids.update(re.findall(r'id:\s*"([^"]+)"', q4))
    q5 = (ROOT / "src/data/v5/quizMasteryV5.js").read_text(encoding="utf-8")
    ids.update(re.findall(r'id:\s*"([^"]+)"', q5))
    v6_txt = (ROOT / "src/data/v6/v6EncyclopediaAndVisuals.js").read_text(encoding="utf-8")
    idx = v6_txt.index("var BUNDLES = ") + len("var BUNDLES = ")
    b6, _ = json.JSONDecoder().raw_decode(v6_txt, idx)
    for q in b6["CCE_V6_QUIZ"]:
        ids.add(str(q.get("id", "")))
    return ids


def _verify_all_asset_strings(payload: Any) -> list[str]:
    missing: list[str] = []
    img_rx = re.compile(r"^assets/images/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg)$")
    vid_rx = re.compile(r"^assets/videos/[a-zA-Z0-9_./-]+\.mp4$")

    def walk(x: Any) -> None:
        if isinstance(x, str):
            if img_rx.match(x) or vid_rx.match(x):
                if not (ROOT / x).is_file():
                    missing.append(x)
        elif isinstance(x, list):
            for it in x:
                walk(it)
        elif isinstance(x, dict):
            for v in x.values():
                walk(v)

    walk(payload)
    return sorted(set(missing))


def _dedupe_cross_version_images(
    p1: dict[str, Any],
    p2: dict[str, Any],
    p4: dict[str, Any],
    p5: dict[str, Any],
    p6: dict[str, Any],
) -> None:
    """Guarantee ZERO duplicate image paths and ZERO duplicate MD5 hashes across V5+V6+V7 merged collections."""
    v5_data: dict[str, Any] = {}
    v5_path = ROOT / "src" / "data" / "v5" / "v5DeepEnrichmentLayer.js"
    if v5_path.is_file():
        v5_txt = v5_path.read_text(encoding="utf-8")
        v5_data, _ = json.JSONDecoder().raw_decode(v5_txt, v5_txt.index("var DATA = ") + len("var DATA = "))

    v6_txt = (ROOT / "src" / "data" / "v6" / "v6EncyclopediaAndVisuals.js").read_text(encoding="utf-8")
    b6, _ = json.JSONDecoder().raw_decode(v6_txt, v6_txt.index("var BUNDLES = ") + len("var BUNDLES = "))

    md5 = UniqueImageAllocator.md5_of
    claim = UniqueImageAllocator.claim
    prov_cands = UniqueImageAllocator.prov_item_candidates

    # 1. Combined 120 Honored Brands (V5 + V6 + V7)
    used_brands: set[str] = {
        md5(obj["imagePath"])
        for obj in (v5_data.get("brandEnrich") or {}).values()
        if isinstance(obj, dict) and obj.get("imagePath")
    }
    for b in b6["CCE_V6_BRANDS_CRAFT"]["brandsAdditional40"] + b6["CCE_V6_BRANDS_CRAFT"]["brandsAdditional36"]:
        if b.get("imagePath"):
            used_brands.add(md5(b["imagePath"]))
    for b in p2["brandsAdditional20"]:
        pid = b.get("provinceId", "beijing")
        cat = b.get("cat", "craft")
        groups = ("d", "f", "h") if cat == "culinary" else ("h", "d", "f")
        prefs = [b.get("imagePath", "")] + prov_cands(pid, groups)
        b["imagePath"] = claim(used_brands, prefs, ("prov_items", "provinces", "museum", "articles", "academic"), allow_svg=False)

    # 2. Combined 42 Geographical Indications (V5 + V6 + V7)
    used_gi: set[str] = {
        md5(obj["imagePath"])
        for obj in (v5_data.get("giEnrich") or {}).values()
        if isinstance(obj, dict) and obj.get("imagePath")
    }
    for g in b6["CCE_V6_BRANDS_CRAFT"]["giAdditional18"]:
        if g.get("imagePath"):
            used_gi.add(md5(g["imagePath"]))
    for g in p2["giAdditional12"]:
        pid = g.get("provinceId", "guangdong")
        prefs = [g.get("imagePath", "")] + prov_cands(pid, ("f", "d", "h"))
        g["imagePath"] = claim(used_gi, prefs, ("prov_items", "provinces", "articles", "museum"), allow_svg=False)

    # 3. Combined 10 Modules + 60 Lessons
    used_lessons: set[str] = {
        md5(p)
        for p in [
            "assets/images/provinces/sichuan-jiuzhaigou.jpg",
            "assets/images/academic/qin-terracotta.jpg",
            "assets/images/articles/hero-confucianism.jpg",
            "assets/images/articles/hero-laozihao-craft.jpg",
            "assets/images/museum/taihe-dian.jpg",
            "assets/images/articles/hero-keju-examinations.jpg",
            "assets/images/articles/hero-silk-road.jpg",
            "assets/images/provinces/gansu-dunhuang-mogao.jpg",
            "assets/images/articles/hero-supply-chain-rcep.jpg",
            "assets/images/great-wall-ink.jpg",
            "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
        ]
    }
    for m in p1["modulesMeta3"]:
        m["img"] = claim(used_lessons, [m.get("img", "")], ("museum", "provinces", "articles"), allow_svg=False)
    for obj in (v5_data.get("lessonEnrich") or {}).values():
        if isinstance(obj, dict) and obj.get("imagePath"):
            used_lessons.add(md5(obj["imagePath"]))
    for m7 in v5_data.get("module7Lessons") or []:
        if isinstance(m7, dict) and m7.get("imagePath"):
            used_lessons.add(md5(m7["imagePath"]))
    for ls in p1["lessons18"]:
        ls["imagePath"] = claim(used_lessons, [ls.get("imagePath", "")], ("prov_items", "provinces", "museum", "articles", "academic", "paintings"), allow_svg=False)

    # 4. Combined 60 Herbs (V6 + V7)
    used_herbs = {md5(h["image"]) for h in b6["CCE_V6_COSMOLOGY_VISUAL"]["culinaryHerbs48"] if h.get("image")}
    for h in p4["herbs12"]:
        h["image"] = claim(used_herbs, [h.get("image", "")], ("prov_items", "provinces", "articles", "museum"), allow_svg=False)

    # 5. Combined 20 Cosmo Cases (V6 12 + V7 8)
    used_cosmo = {md5(c["imagePath"]) for c in b6["CCE_V6_COSMOLOGY_VISUAL"]["cosmoCasebookAdditional12V6"] if c.get("imagePath")}
    for c in p4["cosmoCases8"]:
        c["image"] = claim(used_cosmo, [c.get("image", "")], ("provinces", "museum", "academic", "articles", "prov_items"), allow_svg=False)

    # 6. Combined 36 Poem-Paintings (V6 24 + V7 12)
    used_poems = {md5(pm["image"]) for pm in b6["CCE_V6_LITERATURE_VISUAL"]["poemPaintingPairs24"] if pm.get("image")}
    for pm in p4["poemPaintings12"]:
        pm["image"] = claim(used_poems, [pm.get("image", "")], ("paintings",), allow_svg=False)

    # 7. Combined 26 Supply Chain Cases (V6 16 + V7 10)
    used_supply = {md5(sc["imagePath"]) for sc in b6["CCE_V6_TRADE_AND_CSC"]["extraSupplyCases16"] if sc.get("imagePath")}
    for sc in p5["extraSupplyCases10"]:
        sc["imagePath"] = claim(used_supply, [sc.get("imagePath", "")], ("provinces", "prov_items", "articles", "editorial", "museum"), allow_svg=True)

    # 8. Combined 16 Sino-Viet Wonders (32 vnImg + chinaImg)
    used_wonders: set[str] = set()
    for w in b6["CCE_V6_TRADE_AND_CSC"]["sinoVietWonders10"]:
        if w.get("vnImg"):
            used_wonders.add(md5(w["vnImg"]))
        if w.get("chinaImg"):
            used_wonders.add(md5(w["chinaImg"]))
    for w in p5["sinoVietWonders6"]:
        w["vnImg"] = claim(used_wonders, [w.get("vnImg", "")], ("academic", "museum", "articles", "prov_items"), allow_svg=True)
        w["chinaImg"] = claim(used_wonders, [w.get("chinaImg", "")], ("provinces", "museum", "academic", "prov_items"), allow_svg=False)

    # 9. Combined 36 CSC Universities (V6 24 + V7 12)
    used_csc = {md5(u["imagePath"]) for u in b6["CCE_V6_TRADE_AND_CSC"]["cscUniversities24Atlas"] if u.get("imagePath")}
    for u in p5["cscUniversities12"]:
        pid = u.get("provinceId", "prov-beijing")
        prefs = [u.get("imagePath", "")] + prov_cands(pid, ("h", "d", "f"))
        u["imagePath"] = claim(used_csc, prefs, ("prov_items", "provinces", "academic", "articles"), allow_svg=False)

    # 10. Combined 150 Visual Quiz Questions (V6 120 + V7 30)
    used_quiz = {md5(q["imagePath"]) for q in b6["CCE_V6_QUIZ"] if q.get("isVisualQuestion") and q.get("imagePath")}
    for q in p6["quiz100"]:
        if q.get("isVisualQuestion"):
            q["imagePath"] = claim(used_quiz, [q.get("imagePath", "")], ("paintings", "museum", "provinces", "prov_items", "articles", "academic"), allow_svg=True)

    # 11. V7 Expeditions (16) & YouTube Posters (12)
    used_exp: set[str] = set()
    for ex in p5["heritageExpeditions16"]:
        ex["imagePath"] = claim(used_exp, [ex.get("imagePath", "")], ("provinces", "prov_items", "museum", "articles"), allow_svg=False)
    used_yt: set[str] = set()
    for yt in p6["youtubeVideos12"]:
        yt["posterImage"] = claim(used_yt, [yt.get("posterImage", "")], ("provinces", "museum", "articles", "paintings"), allow_svg=False)


def build_v7() -> pathlib.Path:
    p1 = build_pack1()
    p2 = build_pack2()
    p3 = build_pack3()
    p4 = build_pack4()
    p5 = build_pack5()
    p6 = build_pack6()

    _dedupe_cross_version_images(p1, p2, p4, p5, p6)

    # Check brand coreZhKey uniqueness
    existing_brand_keys = _collect_existing_brand_keys()
    for b in p2["brandsAdditional20"]:
        ck = core_zh_key(b["zh"])
        assert ck not in existing_brand_keys, f"Brand collision detected: {b['zh']} -> {ck}"
        existing_brand_keys.add(ck)

    # Check quiz uniqueness
    existing_qids = _collect_existing_quiz_ids()
    for q in p6["quiz100"]:
        qid = q["id"]
        assert qid not in existing_qids, f"Quiz ID collision detected: {qid}"
        existing_qids.add(qid)
        if q.get("isVisualQuestion"):
            q["imagePath"] = ensure_verified_img(q["imagePath"])

    encyclopedia: dict[str, Any] = sanitize_recursive({
        "version": "7.0.0",
        "epistemicDisclaimerVi": NON_CLINICAL_VI,
        "epistemicDisclaimerEn": NON_CLINICAL_EN,
        "modulesMeta3": p1["modulesMeta3"],
        "lessons18": p1["lessons18"],
        "brandsAdditional20": p2["brandsAdditional20"],
        "giAdditional12": p2["giAdditional12"],
        "craftProcessFlowcharts6": p2["craftProcessFlowcharts6"],
        "museumStudios3d6": p2["museumStudios3d6"],
        "traditionalPigments8": p2["traditionalPigments8"],
        "liushu30": p3["liushu30"],
        "liushu50": p3["liushu50"],
        "falseFriends15": p3["falseFriends15"],
        "simpTrad15": p3["simpTrad15"],
        "measureWords15": p3["measureWords15"],
        "chengyu14": p3["chengyu14"],
        "herbs12": p4["herbs12"],
        "microclimates6": p4["microclimates6"],
        "cosmoCases8": p4["cosmoCases8"],
        "novelGraphs2": p4["novelGraphs2"],
        "poemPaintings12": p4["poemPaintings12"],
        "wenyanTokens16": p4["wenyanTokens16"],
        "hskPassages20": p4["hskPassages20"],
        "hskEssays16": p4["hskEssays16"],
        "tangVietPoems9": p4["tangVietPoems9"],
        "b2bTerms50": p5["b2bTerms50"],
        "annotatedTradeDocs5": p5["annotatedTradeDocs5"],
        "extraSupplyCases10": p5["extraSupplyCases10"],
        "sinoVietWonders6": p5["sinoVietWonders6"],
        "cscUniversities12": p5["cscUniversities12"],
        "cscInterviews12": p5["cscInterviews12"],
        "hsrCorridors8": p5["hsrCorridors8"],
        "heritageExpeditions16": p5["heritageExpeditions16"],
        "digitalTravelConcierge8": p5["digitalTravelConcierge8"],
        "globalPlatformBenchmarks6": p6["globalPlatformBenchmarks6"],
        "youtubeVideos12": p6["youtubeVideos12"],
        "quiz100": p6["quiz100"],
    })

    missing_assets = _verify_all_asset_strings(encyclopedia)
    assert not missing_assets, f"Missing V7 local assets on disk: {missing_assets}"

    raw_json = json.dumps(encyclopedia, ensure_ascii=False, indent=2)

    js = f"""// ============================================================================
// CHINESE CULTURE EXPLORER V7.0 — COMPLETE ENCYCLOPEDIA, TOURISM & QUIZ BUNDLE
// Auto-generated by scripts/build_v7_complete.py (0 emojis, verified local assets)
// Non-Clinical Guardrail: {NON_CLINICAL_VI} ({NON_CLINICAL_EN})
// ============================================================================
(function () {{
  "use strict";

  var V7_DATA = {raw_json};

  function pushUnique(target, items, keyFn) {{
    if (!Array.isArray(target) || !Array.isArray(items)) return;
    var seen = Object.create(null);
    target.forEach(function (x) {{
      var k = keyFn(x);
      if (k) seen[k] = true;
    }});
    items.forEach(function (item) {{
      var k = keyFn(item);
      if (!k || !seen[k]) {{
        if (k) seen[k] = true;
        target.push(item);
      }}
    }});
  }}

  // Expose V7 public globals
  window.CCE_V7_ENCYCLOPEDIA = V7_DATA;
  window.CCE_V7_COURSE_ADDON = {{
    modulesMeta3: V7_DATA.modulesMeta3,
    lessons18: V7_DATA.lessons18
  }};
  window.CCE_V7_QUIZ = V7_DATA.quiz100;

  // Self-merge seamlessly into V5 Courses -> 10 Modules / 60 Sequential Lessons
  if (window.CCE_V5_COURSE_LESSONS && Array.isArray(window.CCE_V5_COURSE_LESSONS.lessons36)) {{
    pushUnique(window.CCE_V5_COURSE_LESSONS.lessons36, V7_DATA.lessons18, function (x) {{ return x && x.id; }});
  }}

  // Self-merge into V6 Honored Brands -> 120 Unique Brands, 42 GIs, 18 Craft Flows
  if (window.CCE_V6_BRANDS_CRAFT) {{
    var bc = window.CCE_V6_BRANDS_CRAFT;
    pushUnique(bc.brandsAdditional40, V7_DATA.brandsAdditional20, function (x) {{ return x && x.zh; }});
    pushUnique(bc.giAdditional18, V7_DATA.giAdditional12, function (x) {{ return x && x.id; }});
    pushUnique(bc.craftProcessFlowcharts12, V7_DATA.craftProcessFlowcharts6, function (x) {{ return x && x.id; }});
  }}

  // Self-merge into V6 Linguistic Studio -> 150 Liushu, 45 False Friends, 65 Simp-Trad, 55 MW, 50 Chengyu
  if (window.CCE_V6_LIUSHU_VISUAL) {{
    var lv = window.CCE_V6_LIUSHU_VISUAL;
    pushUnique(lv.visualCharacters100, V7_DATA.liushu50, function (x) {{ return x && x.zh; }});
    pushUnique(lv.falseFriendsComic30, V7_DATA.falseFriends15, function (x) {{ return x && x.zh; }});
    pushUnique(lv.simpTradAsymmetry50, V7_DATA.simpTrad15, function (x) {{ return x && x.simp; }});
    pushUnique(lv.measureWordsVisual40, V7_DATA.measureWords15, function (x) {{ return x && x.zh; }});
    pushUnique(lv.chengyuOrigins36, V7_DATA.chengyu14, function (x) {{ return x && x.zh; }});
  }}

  // Self-merge into V6 Cosmology -> 60 Herbs, 18 Microclimates, 36 Cosmology Cases
  if (window.CCE_V6_COSMOLOGY_VISUAL) {{
    var cv = window.CCE_V6_COSMOLOGY_VISUAL;
    pushUnique(cv.culinaryHerbs48, V7_DATA.herbs12, function (x) {{ return x && x.id; }});
    pushUnique(cv.microclimateCases12, V7_DATA.microclimates6, function (x) {{ return x && x.id; }});
    pushUnique(cv.cosmoCasebookAdditional12V6, V7_DATA.cosmoCases8, function (x) {{ return x && x.id; }});
  }}

  // Self-merge into V6 Literature & HSK -> 6 Novel Graphs, 36 Poems, 46 Wenyan, 60 HSK, 46 Essays, 24 Tang-Viet
  if (window.CCE_V6_LITERATURE_VISUAL) {{
    var lit = window.CCE_V6_LITERATURE_VISUAL;
    pushUnique(lit.novelGraphs4, V7_DATA.novelGraphs2, function (x) {{ return x && x.id; }});
    pushUnique(lit.poemPaintingPairs24, V7_DATA.poemPaintings12, function (x) {{ return x && x.id; }});
    pushUnique(lit.wenyanSyntaxTokens30, V7_DATA.wenyanTokens16, function (x) {{ return x && x.tokenZh; }});
    pushUnique(lit.hskPassages40, V7_DATA.hskPassages20, function (x) {{ return x && x.id; }});
    pushUnique(lit.hskEssayFrames30_Additional15, V7_DATA.hskEssays16, function (x) {{ return x && x.id; }});
    pushUnique(lit.hanVietPoetryComparison15, V7_DATA.tangVietPoems9, function (x) {{ return x && x.id; }});
  }}

  // Self-merge into V6 Trade & CSC -> 300 B2B Terms, 15 Docs, 50 Cases, 16 Sino-Viet, 36 CSC, 16 HSR
  if (window.CCE_V6_TRADE_AND_CSC) {{
    var tc = window.CCE_V6_TRADE_AND_CSC;
    pushUnique(tc.b2bTerms150, V7_DATA.b2bTerms50, function (x) {{ return x && x.id; }});
    pushUnique(tc.annotatedTradeDocs10, V7_DATA.annotatedTradeDocs5, function (x) {{ return x && x.id; }});
    pushUnique(tc.extraSupplyCases16, V7_DATA.extraSupplyCases10, function (x) {{ return x && x.id; }});
    pushUnique(tc.sinoVietWonders10, V7_DATA.sinoVietWonders6, function (x) {{ return x && x.id; }});
    pushUnique(tc.cscUniversities24Atlas, V7_DATA.cscUniversities12, function (x) {{ return x && x.id; }});
    pushUnique(tc.cscInterviewQuestions24, V7_DATA.cscInterviews12, function (x) {{ return x && x.id; }});
    pushUnique(tc.hsrCorridors8x8, V7_DATA.hsrCorridors8, function (x) {{ return x && (x.from + "|" + x.to); }});
  }}

  // Ensure every Visual ID item carries concise VI/EN inspection notes
  if (Array.isArray(window.CCE_V6_QUIZ)) {{
    window.CCE_V6_QUIZ.forEach(function (q) {{
      if (!q || !q.isVisualQuestion) return;
      if (!q.visualInspectionGuideVi && q.explainVi) {{
        q.visualInspectionGuideVi = q.explainVi;
      }}
      if (!q.visualInspectionGuideEn) {{
        q.visualInspectionGuideEn = q.explainEn || ("Observe structural details and period characteristics of " + (q.topicEn || q.hanzi || "this item") + ".");
      }}
    }});
  }}
}})();
"""
    OUT_FILE.parent.mkdir(parents=True, exist_ok=True)
    OUT_FILE.write_text(js, encoding="utf-8")
    print(f"BUILT {OUT_FILE.relative_to(ROOT).as_posix()} ({len(js):,} chars)")
    print("  18 new lessons -> total 60 | 20 brands -> 120 | 12 GIs -> 42 | 6 craft flows -> 18")
    print("  50 Liushu -> 150 | 15 FF -> 45 | 15 ST -> 65 | 15 MW -> 55 | 14 Chengyu -> 50")
    print("  12 Herbs -> 60 | 6 Microclimates -> 18 | 8 Cosmo -> 36 | 2 Graphs -> 6 | 12 Poems -> 36")
    print("  50 B2B -> 300 | 5 Docs -> 15 | 10 Cases -> 50 | 6 SV -> 16 | 12 CSC -> 36 | 8 HSR -> 16")
    print("  16 Heritage Expeditions | 8 Concierge 240h | 8 Pigments | 6 Benchmarks | 12 YouTube Videos | 100 Quiz (30 Visual ID)")
    return OUT_FILE


if __name__ == "__main__":
    build_v7()
