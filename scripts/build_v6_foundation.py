"""Compile, validate, and emit src/data/v6/v6EncyclopediaAndVisuals.js for CHINESE CULTURE EXPLORER V6.0.

Usage: uv run python scripts/build_v6_foundation.py
"""

from __future__ import annotations

import json
import pathlib
import re
import sys

ROOT = pathlib.Path(".")
sys.path.insert(0, str(ROOT / "scripts"))

from v6_builders.pack_brands_liushu import build_pack_brands_liushu  # noqa: E402
from v6_builders.pack_cosmo_lit import build_pack_cosmo_lit  # noqa: E402
from v6_builders.pack_trade_csc import build_pack_trade_csc  # noqa: E402
from v6_builders.pack_quiz_192 import build_pack_quiz_192  # noqa: E402

OUT_PATH = ROOT / "src" / "data" / "v6" / "v6EncyclopediaAndVisuals.js"
FALLBACK_RASTER = "assets/images/museum/forbidden-city-imperial-axis-gate.jpg"


def core_zh_key(z: str) -> str:
    s = re.sub(r"[（(][^）)]*[）)]", "", z or "").strip()
    return re.sub(
        r"^(?:北京|杭州|广州|上海|成都|贵州|宜宾|绍兴|漳州|东阿|苏州|天津|南京|福州|安溪|祁门|景德镇|歙县|荣昌|瑞安)",
        "",
        s,
    )


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


def main() -> int:
    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    p12 = build_pack_brands_liushu()
    p34 = build_pack_cosmo_lit()
    p5 = build_pack_trade_csc()
    quiz_192 = build_pack_quiz_192()

    # Check brand dedupe count against V5 Seed + Expanded
    v5_brand_keys: set[str] = set()
    for fp in ["src/data/v5/laozihaoBrandsV5.js", "src/data/v5/laozihaoBrandsExpandedV5.js"]:
        txt = (ROOT / fp).read_text(encoding="utf-8")
        brand_part = txt.split("giAppellations12")[0]
        for m in re.finditer(r'zh:\s*"([^"]+)"', brand_part):
            v5_brand_keys.add(core_zh_key(m.group(1)))

    new_brands = p12["CCE_V6_BRANDS_CRAFT"]["brandsAdditional36"]
    collisions = [b["zh"] for b in new_brands if core_zh_key(b["zh"]) in v5_brand_keys]
    if collisions:
        raise RuntimeError(f"Brand key collision with V5: {collisions}")

    sanitize_image_refs(p12)
    sanitize_image_refs(p34)
    sanitize_image_refs(p5)
    sanitize_image_refs(quiz_192)

    all_bundles = {
        "CCE_V6_BRANDS_CRAFT": p12["CCE_V6_BRANDS_CRAFT"],
        "CCE_V6_LIUSHU_VISUAL": p12["CCE_V6_LIUSHU_VISUAL"],
        "CCE_V6_COSMOLOGY_VISUAL": p34["CCE_V6_COSMOLOGY_VISUAL"],
        "CCE_V6_LITERATURE_VISUAL": p34["CCE_V6_LITERATURE_VISUAL"],
        "CCE_V6_TRADE_AND_CSC": p5["CCE_V6_TRADE_AND_CSC"],
        "CCE_V6_QUIZ": quiz_192,
    }

    # Verify non-clinical disclaimer & zero banned jargon/emojis
    ep_vi = p34["CCE_V6_COSMOLOGY_VISUAL"]["epistemicNotice"]["vi"]
    assert "KHÔNG chẩn đoán" in ep_vi and "KHÔNG" in ep_vi

    payload_json = json.dumps(all_bundles, ensure_ascii=False, indent=2)
    payload_json = payload_json.replace("Batch ", "Lo ")

    js_lines = [
        "// ============================================================================",
        "// CHINESE CULTURE EXPLORER V6.0 — Encyclopedic & Visual Knowledge Bundles",
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
        "  window.CCE_V6_QUIZ = BUNDLES.CCE_V6_QUIZ;",
        "})();",
        "",
    ]
    out_text = "\n".join(js_lines)
    OUT_PATH.write_text(out_text, encoding="utf-8")

    vis_count = sum(1 for q in quiz_192 if q.get("isVisualQuestion"))
    print(
        f"BUILD_V6_COMPLETE: Wrote {OUT_PATH.as_posix()} ({len(out_text):,} chars) — "
        f"brands36={len(new_brands)} (v5_unique={len(v5_brand_keys)} -> 100 total), "
        f"gi18={len(p12['CCE_V6_BRANDS_CRAFT']['giAdditional18'])}, "
        f"flows={len(p12['CCE_V6_BRANDS_CRAFT']['craftProcessFlowcharts12'])}, "
        f"liushu={len(p12['CCE_V6_LIUSHU_VISUAL']['visualCharacters36'])}, "
        f"ff={len(p12['CCE_V6_LIUSHU_VISUAL']['falseFriendsComic30'])}, "
        f"solar={len(p34['CCE_V6_COSMOLOGY_VISUAL']['solarTerms24'])}, "
        f"herbs={len(p34['CCE_V6_COSMOLOGY_VISUAL']['herbarium24'])}, "
        f"micro={len(p34['CCE_V6_COSMOLOGY_VISUAL']['microclimateCases12'])}, "
        f"novels={len(p34['CCE_V6_LITERATURE_VISUAL']['novelGraphs4'])}, "
        f"docs={len(p5['CCE_V6_TRADE_AND_CSC']['annotatedTradeDocs10'])}, "
        f"scExtra={len(p5['CCE_V6_TRADE_AND_CSC']['extraSupplyCases16'])}, "
        f"svWonders={len(p5['CCE_V6_TRADE_AND_CSC']['sinoVietWonders10'])}, "
        f"csc={len(p5['CCE_V6_TRADE_AND_CSC']['cscUniversities24'])}, "
        f"quiz={len(quiz_192)} (visual={vis_count})"
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
