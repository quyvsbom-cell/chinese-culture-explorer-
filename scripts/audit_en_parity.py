"""EN Parity Auditor for Chinese Culture Explorer.

Checks English localization coverage across core datasets and V3 expansion bundles.
Usage: uv run python scripts/audit_en_parity.py
"""

from __future__ import annotations

import pathlib
import re
import sys


def main() -> int:
    root = pathlib.Path(".")
    v3 = root / "src" / "data" / "v3"
    data = root / "src" / "data"

    # 1. Articles EN parity: articlesExpansionV3_* IDs vs enParityArticlesV3_* IDs
    v3_art_ids: set[str] = set()
    for p in sorted(v3.glob("articlesExpansionV3*.js")):
        txt = p.read_text(encoding="utf-8", errors="ignore")
        v3_art_ids.update(re.findall(r"id:\s*'([a-z0-9-]+)'", txt))

    v3_art_en_ids: set[str] = set()
    for p in sorted(v3.glob("enParityArticlesV3*.js")):
        txt = p.read_text(encoding="utf-8", errors="ignore")
        v3_art_en_ids.update(re.findall(r"^\s*'([a-z0-9-]+)'\s*:\s*\{", txt, re.M))
        v3_art_en_ids.update(re.findall(r'^\s*"([a-z0-9-]+)"\s*:\s*\{', txt, re.M))

    missing_art_en = sorted(v3_art_ids - v3_art_en_ids)

    # 2. Core Articles EN parity
    core_art_en_txt = (data / "articlesEnData.js").read_text(encoding="utf-8", errors="ignore")
    core_en_count = len(re.findall(r'^\s*"([a-z0-9-]+)"\s*:\s*\{', core_art_en_txt, re.M))

    # 3. Comprehension V3 VI vs EN
    comp_vi = sum(
        len(re.findall(r"mcqs:\s*\[", p.read_text(encoding="utf-8")))
        for p in sorted(v3.glob("articleComprehensionV3_*.js"))
    )
    comp_en = sum(
        len(re.findall(r"mcqs:\s*\[", p.read_text(encoding="utf-8")))
        for p in sorted(v3.glob("enParityComprehensionV3_*.js"))
    )

    # 4. Concept pairs EN fields check
    pairs_txt = "\n".join(
        p.read_text(encoding="utf-8") for p in sorted(v3.glob("conceptPairs2026_*.js"))
    )
    pair_ids = len(re.findall(r"id:\s*'pair-", pairs_txt))
    pair_en_defs = len(re.findall(r"originalDefEn\s*:", pairs_txt))

    # 5. Quiz Arena V3 EN check
    quiz_txt = (v3 / "quizArenaBank2026.js").read_text(encoding="utf-8")
    quiz_vi = len(re.findall(r"questionVi\s*:", quiz_txt))
    quiz_en = len(re.findall(r"questionEn\s*:", quiz_txt))

    # 6. False Friends EN warning check
    ff_txt = (v3 / "falseFriendsV3.js").read_text(encoding="utf-8")
    ff_vi = len(re.findall(r"warningVi\s*:", ff_txt))
    ff_en = len(re.findall(r"warningEn\s*:", ff_txt))

    # 7. V4 Knowledge & Trilingual Trade Packs Parity Check
    v4 = root / "src" / "data" / "v4"
    v4_required = [
        "unescoHeritageEncyclopediaV4.js",
        "literatureOperaArtsV4.js",
        "scienceTeaMedicineFoodV4.js",
        "sinoVietModernChinaV4.js",
        "politicsEconHskTcmStudyV4.js",
        "tradeTrilingualBridgeV4.js",
        "knowledgeGraphV4.js",
        "quizArenaV4.js",
    ]
    missing_v4_files = [f for f in v4_required if not (v4 / f).is_file()]

    q4_txt = (v4 / "quizArenaV4.js").read_text(encoding="utf-8") if (v4 / "quizArenaV4.js").is_file() else ""
    q4_m_rows = len(re.findall(r'^\s*M\("v4q-\d+"', q4_txt, re.M))
    q4_loop_m = re.search(r"for\s*\(\s*var\s+i\s*=\s*0\s*;\s*i\s*<\s*(\d+)\s*;", q4_txt)
    q4_loop_count = int(q4_loop_m.group(1)) if q4_loop_m else 0
    q4_total = q4_m_rows + q4_loop_count
    q4_has_en_sig = "questionEn: qEn" in q4_txt and "optionsEn: optsEn" in q4_txt

    tr_txt = (v4 / "tradeTrilingualBridgeV4.js").read_text(encoding="utf-8") if (v4 / "tradeTrilingualBridgeV4.js").is_file() else ""
    raw_block_m = re.search(r"var RAW_TERMS\s*=\s*\[(.*?)\n  \];", tr_txt, re.S)
    raw_block = raw_block_m.group(1) if raw_block_m else ""
    tr_raw_rows = len(re.findall(r'^\s*\["[a-z]+",\s*"[^"]+",\s*"[^"]+"', raw_block, re.M))

    disc_txt = (v4 / "politicsEconHskTcmStudyV4.js").read_text(encoding="utf-8") if (v4 / "politicsEconHskTcmStudyV4.js").is_file() else ""
    disc_en_ok = "epistemicBannerEn:" in disc_txt and "studyAbroad" in disc_txt

    print(f"Core articles EN pack: {core_en_count}")
    print(f"V3 articles VI={len(v3_art_ids)} | EN={len(v3_art_en_ids)} | missing={len(missing_art_en)}")
    if missing_art_en:
        print("  Missing V3 EN articles:", missing_art_en[:10])
    print(f"Comprehension packs VI={comp_vi} | EN={comp_en}")
    print(f"Concept pairs VI={pair_ids} | EN={pair_en_defs}")
    print(f"Quiz Arena V3 VI={quiz_vi} | EN={quiz_en}")
    print(f"False Friends VI={ff_vi} | EN={ff_en}")
    print(f"V4 pack files missing={len(missing_v4_files)} | V4 Quiz={q4_total} (EN={q4_has_en_sig}) | Trilingual Terms={tr_raw_rows} | Disc EN={disc_en_ok}")

    ok = (
        len(missing_art_en) == 0
        and comp_vi == comp_en
        and pair_ids == pair_en_defs
        and quiz_vi == quiz_en
        and ff_vi == ff_en
        and len(missing_v4_files) == 0
        and q4_total >= 90
        and q4_has_en_sig
        and tr_raw_rows >= 100
        and disc_en_ok
    )
    print("EN_PARITY_AUDIT:", "PASS" if ok else "FAIL")
    return 0 if ok else 1


if __name__ == "__main__":
    raise SystemExit(main())
