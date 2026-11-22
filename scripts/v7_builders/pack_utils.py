"""Shared helpers, verified local asset resolvers, sanitizer, and Gemini Web pack loader."""

from __future__ import annotations

import json
import pathlib
import re
from typing import Any

ROOT = pathlib.Path(__file__).resolve().parent.parent.parent
EXT_DIR = ROOT / "scripts" / "v7_external_packs"

NON_CLINICAL_VI = "Thông tin ẩm thực vùng miền & sử liệu khoa học thuần túy — KHÔNG chẩn đoán hay thay thế tư vấn y tế."
NON_CLINICAL_EN = "Regional culinary heritage & history of science reference only — NOT clinical diagnosis or medical advice."

BRAND_PREFIX_RX = re.compile(
    r"^(北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|宜宾|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳)"
)

PROVINCE_IMAGES: dict[str, str] = {
    "beijing": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "shanghai": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "tianjin": "assets/images/provinces/tianjin-eye.jpg",
    "chongqing": "assets/images/provinces/chongqing-hongyadong.jpg",
    "zhejiang": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "jiangsu": "assets/images/provinces/jiangsu-suzhou-garden.jpg",
    "anhui": "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "fujian": "assets/images/provinces/fujian-tulou.jpg",
    "jiangxi": "assets/images/provinces/jiangxi-wuyuan-village.jpg",
    "shandong": "assets/images/provinces/shandong-taishan.jpg",
    "henan": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "hubei": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "hunan": "assets/images/provinces/hunan-zhangjiajie.jpg",
    "guangdong": "assets/images/provinces/guangdong-canton-tower.jpg",
    "guangxi": "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "sichuan": "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "yunnan": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "shaanxi": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "shanxi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "gansu": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "jilin": "assets/images/provinces/jilin-changbai-tianchi.jpg",
    "heilongjiang": "assets/images/provinces/heilongjiang-saint-sophia.jpg",
    "tibet": "assets/images/provinces/tibet-potala-palace.jpg",
    "xinjiang": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "guizhou": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "hainan": "assets/images/provinces/hainan-sanya-guanyin.jpg",
    "hebei": "assets/images/provinces/hebei-chengde-resort.jpg",
    "liaoning": "assets/images/provinces/liaoning-mukden-palace.jpg",
}

VISUAL_QUIZ_TAG_MAP: dict[str, str] = {
    "terracotta": "assets/images/museum/terracotta-general.jpg",
    "qianli_jiangshan": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "taihe_dian": "assets/images/museum/taihe-dian.jpg",
    "suzhou_garden": "assets/images/academic/suzhou-garden.jpg",
    "fujian_tulou": "assets/images/provinces/fujian-tulou.jpg",
    "temple_of_heaven": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "lantingji_xu": "assets/images/museum/lantingji-xu.jpg",
    "qingming_scroll": "assets/images/paintings/21_qingming_shanghe.jpg",
    "houmuwu_ding": "assets/images/museum/houmuwu-ding.jpg",
    "tang_sancai": "assets/images/museum/tang-sancai-camel.jpg",
    "jiuzhaigou": "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "guilin_karst": "assets/images/academic/guilin-li-river.jpg",
    "west_lake": "assets/images/academic/west-lake-hangzhou.jpg",
    "huangshan": "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
    "shanghai_bund": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "van_mieu": "assets/images/academic/van-mieu-hanoi.jpg",
    "dougong": "assets/images/articles/hero-traditional-arch.jpg",
    "guqin": "assets/images/museum/guqin-jiuxiao-huanpei.jpg",
    "zheng_he": "assets/images/museum/zheng-he-chart.jpg",
    "hongcun": "assets/images/provinces/anhui-hongcun-moonpond.jpg",
    "canton_tower": "assets/images/provinces/guangdong-canton-tower.jpg",
    "song_ceramics": "assets/images/museum/ru-yao-tianqing.jpg",
    "sunzi_slips": "assets/images/academic/sunzi-bamboo-slips.jpg",
    "dunhuang_star": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "acupuncture_bronze": "assets/images/museum/acupuncture-bronze.jpg",
    "yongle_dadian": "assets/images/museum/yongle-dadian.jpg",
    "luoshenfu": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "calligraphy_five_scripts": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "b2b_negotiation": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "six_teas": "assets/images/articles/hero-six-teas-gongfu.jpg",
    "blue_white_porcelain": "assets/images/museum/xuande-blue-white-meiping.jpg",
    "longquan_celadon": "assets/images/museum/longquan-celadon-vase.jpg",
    "jun_yao": "assets/images/museum/jun-yao-bowl.jpg",
    "duanyan_inkstone": "assets/images/museum/zhaoqing-duanyan-inkstone.jpg",
    "forbidden_axis": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
}

ALLOWED_SLOP_REPLACEMENTS = [
    (re.compile(r"\bhưng suy\b", re.I), "thịnh suy"),
    (re.compile(r"\bBatch\s+(\d+)\b", re.I), r"Đợt \1"),
    (re.compile(r"\bV4\.0\b", re.I), "phiên bản trước"),
    (re.compile(r"kiến hưng", re.I), "kiến thiết thịnh vượng"),
    (re.compile(r"#(?:6366f1|8b5cf6|a855f7|7c3aed|ec4899)", re.I), "#8C2318"),
]


def ensure_verified_img(rel_path: str, fallback: str = "assets/images/museum/taihe-dian.jpg") -> str:
    """Return a disk-verified relative asset path."""
    cleaned = str(rel_path or "").strip().lstrip("/")
    if cleaned and (ROOT / cleaned).is_file():
        return cleaned
    assert (ROOT / fallback).is_file(), f"Missing fallback asset: {fallback}"
    return fallback


def resolve_prov_item_img(prov_id: str, group_prefix: str = "h", seed_idx: int = 0) -> str:
    """Resolve a curated province sub-item photo from assets/images/prov_items/<slug>/."""
    slug = str(prov_id or "").replace("prov-", "").strip().lower()
    pdir = ROOT / "assets" / "images" / "prov_items" / slug
    if pdir.is_dir():
        grouped = sorted(
            f for f in pdir.iterdir()
            if f.is_file() and f.name.lower().startswith(group_prefix.lower())
        )
        pool = grouped or sorted(f for f in pdir.iterdir() if f.is_file())
        if pool:
            pick = pool[abs(int(seed_idx)) % len(pool)]
            return pick.relative_to(ROOT).as_posix()
    return ensure_verified_img(PROVINCE_IMAGES.get(slug, "assets/images/museum/taihe-dian.jpg"))


def core_zh_key(zh: str) -> str:
    """Match runtime coreZhKey prefix normalization from laozihaoPavilionV5.js."""
    return BRAND_PREFIX_RX.sub("", str(zh or "")).strip()


def sanitize_text(val: str) -> str:
    """Strip disallowed Unicode emojis and banned de-AI/slop terms cleanly."""
    chars: list[str] = []
    for ch in val:
        cp = ord(ch)
        if cp >= 0x1F300 or (0x2600 <= cp <= 0x27BF):
            continue
        chars.append(ch)
    out = "".join(chars)
    for rx, rep in ALLOWED_SLOP_REPLACEMENTS:
        out = rx.sub(rep, out)
    return out.strip()


def sanitize_recursive(obj: Any) -> Any:
    """Recursively sanitize dicts, lists, and strings."""
    if isinstance(obj, str):
        return sanitize_text(obj)
    if isinstance(obj, list):
        return [sanitize_recursive(x) for x in obj]
    if isinstance(obj, dict):
        return {k: sanitize_recursive(v) for k, v in obj.items()}
    return obj


def merge_unique_by_key(base_list: list[dict[str, Any]], ext_list: list[dict[str, Any]], key: str = "id") -> list[dict[str, Any]]:
    """Prefer enriched/external records when IDs match while preserving order and uniqueness."""
    if not ext_list:
        return base_list
    ext_map = {str(x.get(key)): x for x in ext_list if isinstance(x, dict) and x.get(key)}
    merged: list[dict[str, Any]] = []
    used: set[str] = set()
    for item in base_list:
        ik = str(item.get(key, ""))
        if ik in ext_map:
            combined = dict(item)
            combined.update(ext_map[ik])
            merged.append(combined)
            used.add(ik)
        else:
            merged.append(item)
            if ik:
                used.add(ik)
    for item in ext_list:
        ik = str(item.get(key, "")) if isinstance(item, dict) else ""
        if ik and ik not in used:
            merged.append(item)
            used.add(ik)
    return merged


def _strip_js_comments_outside_strings(js: str) -> str:
    """Remove // and /* */ comments cleanly without touching https:// or quotes."""
    out: list[str] = []
    i = 0
    n = len(js)
    state = "code"
    esc = False
    while i < n:
        ch = js[i]
        nxt = js[i + 1] if i + 1 < n else ""
        if state == "line":
            if ch == "\n":
                state = "code"
                out.append(ch)
        elif state == "block":
            if ch == "*" and nxt == "/":
                state = "code"
                i += 1
        elif state in ("sq", "dq"):
            out.append(ch)
            if esc:
                esc = False
            elif ch == "\\":
                esc = True
            elif (state == "sq" and ch == "'") or (state == "dq" and ch == '"'):
                state = "code"
        else:
            if ch == "/" and nxt == "/":
                state = "line"
                i += 1
            elif ch == "/" and nxt == "*":
                state = "block"
                i += 1
            elif ch == '"':
                state = "dq"
                out.append(ch)
            elif ch == "'":
                state = "sq"
                out.append(ch)
            else:
                out.append(ch)
        i += 1
    return "".join(out)


def _extract_object_literal(raw_js: str) -> dict[str, Any]:
    """Safely parse JSON or JS object assignment exported by Gemini Web."""
    clean = _strip_js_comments_outside_strings(raw_js)
    start = clean.find("{")
    end = clean.rfind("}")
    if start == -1 or end <= start:
        return {}
    body = clean[start : end + 1]
    # Remove trailing commas before } or ]
    body = re.sub(r",(\s*[}\]])", r"\1", body)
    # Try straight JSON first
    try:
        parsed = json.loads(body)
        return parsed if isinstance(parsed, dict) else {}
    except Exception:
        pass
    # Quote unquoted keys safely outside strings
    fixed = re.sub(r'([{\[,]\s*)([A-Za-z_][A-Za-z0-9_]*)(\s*:)', r'\1"\2"\3', body)
    try:
        parsed = json.loads(fixed)
        return parsed if isinstance(parsed, dict) else {}
    except Exception:
        return {}


def load_external_pack(pack_num: int) -> dict[str, Any]:
    """Load unified V7_Pack{n}.js or combine V7_Pack{n}A.js + V7_Pack{n}B.js from staging."""
    merged: dict[str, Any] = {}
    for fn in [f"V7_Pack{pack_num}.js", f"V7_Pack{pack_num}A.js", f"V7_Pack{pack_num}B.js"]:
        fp = EXT_DIR / fn
        if not fp.is_file():
            continue
        parsed = _extract_object_literal(fp.read_text(encoding="utf-8", errors="ignore"))
        for k, v in parsed.items():
            if isinstance(v, list) and isinstance(merged.get(k), list):
                merged[k].extend(v)
            elif isinstance(v, dict) and isinstance(merged.get(k), dict):
                merged[k].update(v)
            else:
                merged[k] = v
    return sanitize_recursive(merged)
