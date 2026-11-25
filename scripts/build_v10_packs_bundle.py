# -*- coding: utf-8 -*-
"""Build unified src/data/v10/v10PacksData.js bundle from V10_All_12_Independent_Packs.zip.

Validates JSON/JS syntax, checks zero Vietnamese diacritics inside *En/*en fields,
and verifies zero banned AI-ese / MUJI / completion-certificate strings.
"""
from __future__ import annotations

import json
import pathlib
import re
import subprocess
import sys
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
ZIP_PATH = pathlib.Path(
    r"C:\Users\admin\.gemini\antigravity\brain\563fc13b-fb97-4891-9990-9294dff2c297\.user_uploaded\media_1795601986936_814f6d39.zip"
)
OUT_PATH = ROOT / "src" / "data" / "v10" / "v10PacksData.js"

VN_DIAC = re.compile(r"[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]", re.I)
AI_BANNED = [
    ("không chỉ", re.compile(r"\bkhông chỉ\b", re.I)),
    ("không đơn thuần", re.compile(r"\bkhông đơn thuần\b", re.I)),
    ("bản giao hưởng", re.compile(r"\bbản giao hưởng\b", re.I)),
    ("minh chứng sống động", re.compile(r"\bminh chứng sống động\b", re.I)),
    ("bức tranh toàn cảnh", re.compile(r"\bbức tranh toàn cảnh\b", re.I)),
    ("nền tảng vững chắc", re.compile(r"\bnền tảng vững chắc\b", re.I)),
    ("sợi chỉ đỏ", re.compile(r"\bsợi chỉ đỏ\b", re.I)),
    ("kết tinh tinh hoa", re.compile(r"\bkết tinh tinh hoa\b", re.I)),
    ("vai trò then chốt", re.compile(r"\bvai trò then chốt\b", re.I)),
    ("đóng vai trò như", re.compile(r"\bđóng vai trò như\b", re.I)),
    ("một cách sâu sắc", re.compile(r"\bmột cách sâu sắc\b", re.I)),
    ("hành trình khám phá", re.compile(r"\bhành trình khám phá\b", re.I)),
    ("kho tàng vô giá", re.compile(r"\bkho tàng vô giá\b", re.I)),
    ("testament to", re.compile(r"\btestament to\b", re.I)),
    ("not merely", re.compile(r"\bnot merely\b", re.I)),
    ("underscores", re.compile(r"\bunderscores\b", re.I)),
    ("interplay", re.compile(r"\binterplay\b", re.I)),
    ("cornerstone", re.compile(r"\bcornerstone\b", re.I)),
    ("beacon of", re.compile(r"\bbeacon of\b", re.I)),
    ("rich heritage", re.compile(r"\brich heritage\b", re.I)),
    ("muji", re.compile(r"\bmuji\b", re.I)),
    ("certificate", re.compile(r"chứng chỉ hoàn thành|claim certificate|completion certificate", re.I)),
]


def load_js_global(js_code: str, global_name: str):
    script = (
        "const fs=require('fs'),vm=require('vm');"
        "const code=fs.readFileSync(0,'utf8');"
        "const sb={window:{}};sb.globalThis=sb.window;"
        "vm.createContext(sb);vm.runInContext(code,sb);"
        f"console.log(JSON.stringify(sb.window.{global_name}||null));"
    )
    res = subprocess.run(["node", "-e", script], input=js_code, capture_output=True, text=True, encoding="utf-8")
    if res.returncode != 0:
        raise RuntimeError(f"Failed evaluating JS global {global_name}: {res.stderr}")
    return json.loads(res.stdout)


def check_en_diacritics(obj, path: str, issues: list[str]):
    if isinstance(obj, dict):
        for k, v in obj.items():
            nxt = f"{path}.{k}"
            if isinstance(v, str) and (k.endswith("En") or k == "en"):
                if VN_DIAC.search(v):
                    issues.append(f"VN diacritic in {nxt}: {v[:70]}")
            else:
                check_en_diacritics(v, nxt, issues)
    elif isinstance(obj, list):
        for idx, v in enumerate(obj):
            check_en_diacritics(v, f"{path}[{idx}]", issues)


def main() -> int:
    if not ZIP_PATH.is_file():
        print(f"Missing zip: {ZIP_PATH}", file=sys.stderr)
        return 1

    z = zipfile.ZipFile(ZIP_PATH)
    data = {
        "hero": json.loads(z.read("V10_Pack01_Hero.json").decode("utf-8")),
        "scrolls6": json.loads(z.read("V10_Pack02_Scrolls.json").decode("utf-8")),
        "classicalTexts": load_js_global(z.read("V10_Pack04_ClassicalTexts.js").decode("utf-8"), "CCE_V10_PACK04_CLASSICAL_TEXTS"),
        "falseFriends": load_js_global(z.read("V10_Pack05_FalseFriends.js").decode("utf-8"), "CCE_V10_PACK05_FALSE_FRIENDS"),
        "hanNom12": json.loads(z.read("V10_Pack06_HanNom.json").decode("utf-8")),
        "cities16": json.loads(z.read("V10_Pack07_Cities16.json").decode("utf-8")),
        "hsk79": load_js_global(z.read("V10_Pack08_HSK79.js").decode("utf-8"), "CCE_V10_PACK08_HSK79"),
        "tradeCases": load_js_global(z.read("V10_Pack09_TradeCases.js").decode("utf-8"), "CCE_V10_PACK09_TRADE_CASES"),
        "artifactsPigments": json.loads(z.read("V10_Pack11_ArtifactsPigments.json").decode("utf-8")),
        "almanac": json.loads(z.read("V10_Pack13_Almanac.json").decode("utf-8")),
        "zoomStage15": json.loads(z.read("V10_Pack15_ZoomStage.json").decode("utf-8")),
        "syncTimeline18": json.loads(z.read("V10_Pack16_SyncTimeline.json").decode("utf-8")),
    }

    en_issues: list[str] = []
    check_en_diacritics(data, "CCE_V10_DATA", en_issues)
    if en_issues:
        print("EN PARITY ISSUES:", en_issues[:10], file=sys.stderr)
        return 1

    serialized = json.dumps(data, ensure_ascii=False, indent=2)
    for lbl, rx in AI_BANNED:
        if rx.search(serialized):
            print(f"BANNED TOKEN '{lbl}' in generated bundle!", file=sys.stderr)
            return 1

    OUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    header = (
        "// ============================================================================\n"
        "// CHINESE CULTURE EXPLORER — Unified Scholarly & Visual Packs Bundle\n"
        "// Generated cleanly from V10_All_12_Independent_Packs.zip\n"
        "// ============================================================================\n"
        "(function () {\n"
        '  "use strict";\n'
        "  var DATA = "
    )
    footer = (
        ";\n\n"
        "  window.CCE_V10_DATA = DATA;\n"
        "  window.CCE_V10_PACK04_CLASSICAL_TEXTS = DATA.classicalTexts;\n"
        "  window.CCE_V10_PACK05_FALSE_FRIENDS = DATA.falseFriends;\n"
        "  window.CCE_V10_PACK08_HSK79 = DATA.hsk79;\n"
        "  window.CCE_V10_PACK09_TRADE_CASES = DATA.tradeCases;\n"
        "})();\n"
    )
    OUT_PATH.write_text(header + serialized + footer, encoding="utf-8")
    print(f"Wrote {OUT_PATH.relative_to(ROOT).as_posix()} ({OUT_PATH.stat().st_size} bytes), 0 EN/De-AI issues.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
