"""Compile, enrich, validate, and emit src/data/v6/v6EncyclopediaAndVisuals.js for
CHINESE CULTURE EXPLORER V6.0.

When scripts/v6_external_packs/ (all 6 V6_Pack*.js files) is staged, parses and
deeply enriches 100% of all 6 packs; otherwise falls back to built-in v6_builders.

Usage: uv run python scripts/build_v6_foundation.py
"""

from __future__ import annotations

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(".")
sys.path.insert(0, str(ROOT / "scripts"))

from v6_builders.enrich_v6_packs import build_all_from_external_packs, sanitize_text_recursive  # noqa: E402
from v6_builders.pack_brands_liushu import build_pack_brands_liushu  # noqa: E402
from v6_builders.pack_cosmo_lit import build_pack_cosmo_lit  # noqa: E402
from v6_builders.pack_quiz_192 import build_pack_quiz_192  # noqa: E402
from v6_builders.pack_trade_csc import build_pack_trade_csc  # noqa: E402

OUT_PATH = ROOT / "src" / "data" / "v6" / "v6EncyclopediaAndVisuals.js"
DEFAULT_STAGED_DIR = ROOT / "scripts" / "v6_external_packs"
FALLBACK_RASTER = "assets/images/museum/forbidden-city-imperial-axis-gate.jpg"

REQUIRED_EXTERNAL_FILES = [
    "V6_Pack1_HonoredBrands100_CraftDiagrams.js",
    "V6_Pack2_Liushu300_FalseFriends30.js",
    "V6_Pack3_Wuxing60Herbs_SolarArchitecture.js",
    "V6_Pack4_LiteratureVisualMaps_HSK40.js",
    "V6_Pack5_TradeDocs10_Incoterms_CBAM40.js",
    "V6_Pack6_VisualQuizArena_192.js",
]


def ensure_verified_img(path_str: str) -> str:
    clean = str(path_str or "").lstrip("/")
    if clean and (ROOT / clean).is_file():
        return clean
    return FALLBACK_RASTER


def sanitize_image_refs(obj):
    if isinstance(obj, dict):
        for k, v in list(obj.items()):
            if k in ("imagePath", "image", "vnImg", "chinaImg") and isinstance(v, str):
                obj[k] = ensure_verified_img(v)
            else:
                sanitize_image_refs(v)
    elif isinstance(obj, list):
        for item in obj:
            sanitize_image_refs(item)


def main(pack_dir: pathlib.Path | None = None) -> int:
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    candidate = pack_dir or DEFAULT_STAGED_DIR
    use_external = candidate.is_dir() and all((candidate / f).is_file() for f in REQUIRED_EXTERNAL_FILES)

    if use_external:
        all_bundles = build_all_from_external_packs(candidate)
    else:
        p12 = build_pack_brands_liushu()
        p34 = build_pack_cosmo_lit()
        p5 = build_pack_trade_csc()
        quiz_192 = build_pack_quiz_192()
        all_bundles = sanitize_text_recursive({
            "CCE_V6_BRANDS_CRAFT": p12["CCE_V6_BRANDS_CRAFT"],
            "CCE_V6_LIUSHU_VISUAL": p12["CCE_V6_LIUSHU_VISUAL"],
            "CCE_V6_COSMOLOGY_VISUAL": p34["CCE_V6_COSMOLOGY_VISUAL"],
            "CCE_V6_LITERATURE_VISUAL": p34["CCE_V6_LITERATURE_VISUAL"],
            "CCE_V6_TRADE_AND_CSC": p5["CCE_V6_TRADE_AND_CSC"],
            "CCE_V6_QUIZ": quiz_192,
        })

    sanitize_image_refs(all_bundles)

    ep = all_bundles["CCE_V6_COSMOLOGY_VISUAL"]["epistemicNotice"]
    assert "KHÔNG chẩn đoán" in ep["vi"] and "NOT clinical" in ep["en"]

    payload_json = json.dumps(all_bundles, ensure_ascii=False, indent=2)
    payload_json = re.sub(r"\bBatch\s+(\d+)\b", r"Đợt \1", payload_json)

    # Verify every assets/images/... string emitted exists on disk
    for m in re.finditer(r'["\'](assets/images/[a-zA-Z0-9_./-]+\.(?:jpg|jpeg|png|webp|svg))["\']', payload_json):
        if not (ROOT / m.group(1)).is_file():
            raise RuntimeError(f"Broken image asset emitted in V6 bundle: {m.group(1)}")

    js_lines = [
        "// ============================================================================",
        "// CHINESE CULTURE EXPLORER V6.0 — Complete Encyclopedic & Visual Bundles",
        "// Auto-generated deterministically by scripts/build_v6_foundation.py",
        "// Strictly non-clinical & non-predictive on all Cosmology / Herbal archives",
        "// ============================================================================",
        "",
        "(function () {",
        '  "use strict";',
        "",
        f"  var BUNDLES = {payload_json};",
        "",
        "  window.CCE_V6_BRANDS_CRAFT = BUNDLES.CCE_V6_BRANDS_CRAFT;",
        "  window.CCE_V6_LIUSHU_VISUAL = BUNDLES.CCE_V6_LIUSHU_VISUAL;",
        "  window.CCE_V6_COSMOLOGY_VISUAL = BUNDLES.CCE_V6_COSMOLOGY_VISUAL;",
        "  window.CCE_V6_LITERATURE_VISUAL = BUNDLES.CCE_V6_LITERATURE_VISUAL;",
        "  window.CCE_V6_TRADE_AND_CSC = BUNDLES.CCE_V6_TRADE_AND_CSC;",
        "  window.CCE_V6_TRADE_VISUAL = BUNDLES.CCE_V6_TRADE_AND_CSC;",
        "  window.CCE_V6_QUIZ = BUNDLES.CCE_V6_QUIZ;",
        "})();",
        "",
    ]
    out_text = "\n".join(js_lines)
    OUT_PATH.write_text(out_text, encoding="utf-8")

    b = all_bundles["CCE_V6_BRANDS_CRAFT"]
    ls = all_bundles["CCE_V6_LIUSHU_VISUAL"]
    cs = all_bundles["CCE_V6_COSMOLOGY_VISUAL"]
    lt = all_bundles["CCE_V6_LITERATURE_VISUAL"]
    tr = all_bundles["CCE_V6_TRADE_AND_CSC"]
    qz = all_bundles["CCE_V6_QUIZ"]
    vis_cnt = sum(1 for q in qz if q.get("isVisualQuestion"))
    print(
        f"BUILD_V6_COMPLETE ({'EXTERNAL_6_PACKS' if use_external else 'BUILT_IN'}): "
        f"Wrote {OUT_PATH.as_posix()} ({len(out_text):,} chars) — "
        f"brands40={len(b.get('brandsAdditional40', b.get('brandsAdditional36', [])))}, "
        f"brands36={len(b['brandsAdditional36'])}, gi18={len(b['giAdditional18'])}, "
        f"cmp10={len(b.get('lzhDualComparePairs10', []))}, "
        f"liushu={len(ls.get('visualCharacters100', ls.get('visualCharacters36', [])))}, "
        f"st50={len(ls.get('simpTradAsymmetry50', []))}, mw40={len(ls.get('measureWordsVisual40', []))}, "
        f"cy36={len(ls.get('chengyuOrigins36', []))}, herbs={len(cs.get('culinaryHerbs48', cs.get('herbarium24', [])))}, "
        f"const28={len(cs.get('constellationsCulture28', []))}, "
        f"hsk40={len(lt.get('hskPassages40', []))}, poems={len(lt.get('poemPaintingPairs24', lt.get('poemPaintingPairs12', [])))}, "
        f"b2b150={len(tr.get('b2bTerms150', []))}, quiz={len(qz)} (visual={vis_cnt})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
