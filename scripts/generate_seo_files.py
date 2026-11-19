"""
Generate clean SEO sitemap.xml, robots.txt, and static per-route Open Graph HTML shells
(<route>/index.html) for Chinese Culture Explorer and Sino-Viet & Global Trade Nexus.

Pre-rendering per-route <head> metadata ensures social link crawlers (Zalo, Facebook
Messenger, Discord, Telegram, Slack, X) display the exact article/province/painting/artifact
title, summary, and thumbnail image for every shared URL instead of falling back to the
homepage image.

Usage: uv run python scripts/generate_seo_files.py [https://custom-origin.netlify.app]
"""

from __future__ import annotations

import html
import pathlib
import re
import shutil
import struct
import sys
from datetime import date

IS_GLOBAL_TRADE = pathlib.Path("src/data/globalTradeHubData.js").exists()
DEFAULT_ORIGIN = (
    "https://sino-viet-global-trade.netlify.app"
    if IS_GLOBAL_TRADE
    else "https://chinese-culture-explorer.netlify.app"
)
BASE_URL = (sys.argv[1] if len(sys.argv) > 1 else DEFAULT_ORIGIN).rstrip("/")
SITE_BRAND = (
    "SINO–VIET & GLOBAL TRADE NEXUS"
    if IS_GLOBAL_TRADE
    else "CHINESE CULTURE EXPLORER"
)
TODAY = date.today().isoformat()
DEFAULT_RASTER_OG = "assets/images/museum/forbidden-city-imperial-axis-gate.jpg"

CATEGORY_RASTER_FALLBACKS = {
    "history": "assets/images/articles/hero-tang-dynasty.jpg",
    "philosophy": "assets/images/articles/hero-hundred-schools.jpg",
    "cosmology": "assets/images/articles/hero-iching.jpg",
    "traditional": "assets/images/articles/hero-tea-culture.jpg",
    "culture": "assets/images/articles/hero-tea-culture.jpg",
    "art": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "paintings": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "museum": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "architecture": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "regions": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "sino-vietnam": "assets/images/articles/hero-sino-vietnam.jpg",
    "business": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "logistics": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "education": "assets/images/articles/hero-academy-shuyuan.jpg",
    "contemporary": "assets/images/articles/hero-contemporary-china.jpg",
    "science": "assets/images/articles/hero-four-inventions.jpg",
    "language": "assets/images/articles/hero-hanviet-false-friends.jpg",
}

STATIC_SECTION_META = {
    "/": (
        f"{SITE_BRAND} – " + ("中越经贸与全球供应链研究平台" if IS_GLOBAL_TRADE else "中国文化探索"),
        "Khám phá văn minh Trung Hoa, nghiên cứu thương mại – hải quan – logistics Việt–Trung và bảo tàng văn hiến số Đông Á.",
        DEFAULT_RASTER_OG,
        "1.0",
        "weekly",
    ),
    "/explore": (
        f"65 Chuyên luận & Mục lục Tri thức | {SITE_BRAND}",
        "Hệ thống 65 chuyên luận nghiên cứu lịch sử, triết học, kinh tế, thương mại Việt – Trung và văn hóa Đông Á.",
        "assets/images/articles/hero-hundred-schools.jpg",
        "0.9",
        "weekly",
    ),
    "/kham-pha": (
        f"65 Chuyên luận & Mục lục Tri thức | {SITE_BRAND}",
        "Hệ thống 65 chuyên luận nghiên cứu lịch sử, triết học, kinh tế, thương mại Việt – Trung và văn hóa Đông Á.",
        "assets/images/articles/hero-hundred-schools.jpg",
        "0.8",
        "weekly",
    ),
    "/lich-su": (
        f"Lịch sử & Triều đại Trung Hoa | {SITE_BRAND}",
        "Khảo cứu 11 giai đoạn lịch sử, sử liệu khảo cổ và tiến trình thể chế từ Hạ – Thương – Chu đến đương đại.",
        "assets/images/articles/hero-tang-dynasty.jpg",
        "0.8",
        "monthly",
    ),
    "/triet-hoc": (
        f"Triết học, Bách Gia & Cổ điển | {SITE_BRAND}",
        "Đối chiếu 12 trường phái tư tưởng Nho – Đạo – Pháp – Mặc – Thiền và vũ trụ luận cổ điển.",
        "assets/images/articles/hero-confucianism.jpg",
        "0.8",
        "monthly",
    ),
    "/van-hoa": (
        f"Văn hóa Cổ truyền, Trà đạo & Kiến trúc | {SITE_BRAND}",
        "Khám phá ẩm thực bát đại thái hệ, trà đạo lục đại trà hệ, hán phục, lễ tiết và kiến trúc gỗ Đấu Củng.",
        "assets/images/articles/hero-tea-culture.jpg",
        "0.8",
        "monthly",
    ),
    "/quoc-hoa": (
        f"54 Kiệt tác Quốc họa & Giám định Zoom | {SITE_BRAND}",
        "Bảo tàng trực tuyến 54 kiệt tác hội họa cổ điển Trung Hoa với chú giải bút pháp, thủy mặc và tam viễn.",
        "assets/images/paintings/01_luoshenfu_tu.jpg",
        "0.9",
        "weekly",
    ),
    "/bao-tang": (
        f"Bảo tàng Số Bảo vật Quốc gia | {SITE_BRAND}",
        "Chiêm ngưỡng thanh đồng đỉnh, gốm Quan – Chu Đậu, cổ tịch Vĩnh Lạc Đại Điển và di sản Tử Cấm Thành.",
        "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
        "0.9",
        "weekly",
    ),
    "/tinh-thanh": (
        f"34 Tỉnh/Thành & 16 Đô thị Lịch sử Trung Hoa | {SITE_BRAND}",
        "Hồ sơ địa văn hóa, kinh tế, ẩm thực và kết nối logistics của 34 đơn vị hành chính cấp tỉnh Trung Quốc.",
        "assets/images/provinces/sichuan-jiuzhaigou.jpg",
        "0.9",
        "weekly",
    ),
    "/trung-viet": (
        f"Giao lưu & Thương mại Việt – Trung | {SITE_BRAND}",
        "Đối chiếu dữ liệu GACC vs GDVC, hành lang biên mậu, âm Hán–Việt và hợp tác văn hiến Việt – Trung.",
        "assets/images/articles/hero-sino-vietnam.jpg",
        "0.85",
        "weekly",
    ),
    "/kinh-doanh": (
        f"Hải quan, Xuất xứ C/O & Đàm phán B2B | {SITE_BRAND}",
        "Phân tích ACFTA 3.0, C/O Form E vs Form RCEP, quy tắc HS GRI 1–6, EVFTA, CBAM và văn hóa đàm phán B2B.",
        "assets/images/articles/hero-supply-chain-rcep.jpg",
        "0.85",
        "weekly",
    ),
    "/hai-quan-chinh-sach": (
        f"Hải quan, Chính sách Xuất xứ ACFTA 3.0 & RCEP | {SITE_BRAND}",
        "Ma trận quyết định C/O Form E vs RCEP, phân loại HS GRI 1–6 trên VNACCS/VCIS, EVFTA CBAM & tuân thủ Hoa Kỳ.",
        "assets/images/articles/hero-consular-field-guide.jpg",
        "0.9",
        "weekly",
    ),
    "/logistics": (
        f"Vận tải Đa phương thức, Cước phí & Logistics | {SITE_BRAND}",
        "Tối ưu hóa cước biển FCL/LCL, Demurrage & Detention (D&D), Chargeable Weight hàng không 1:6000 và đường sắt SMGS.",
        "assets/images/articles/hero-supply-chain-rcep.jpg",
        "0.9",
        "weekly",
    ),
    "/nghe-nghiep-du-hoc": (
        f"Nghề nghiệp XNK & Học bổng CSC 2026/2027 | {SITE_BRAND}",
        "6 tầng năng lực ngành Kinh doanh Quốc tế & Cẩm nang Học bổng Chính phủ Trung Quốc CSC 2026–2027 (quy định CSCA).",
        "assets/images/articles/hero-academy-shuyuan.jpg",
        "0.9",
        "weekly",
    ),
    "/thu-vien": (
        f"Thư viện Cổ tịch Tứ Khố & Văn bản Pháp quy | {SITE_BRAND}",
        "Tra cứu cổ tịch Hán văn nguyên bản, sử liệu khảo cổ và nguồn đối chứng thương mại quốc tế.",
        "assets/images/museum/yongle-dadian.jpg",
        "0.8",
        "monthly",
    ),
    "/hoc-tap": (
        f"Từ điển Lục thư, Lộ trình Học tập & Phản biện | {SITE_BRAND}",
        "Học chữ Hán qua Lục thư, so sánh âm Hán–Việt, 6 lộ trình học thuật và thẻ phản biện cấu trúc.",
        "assets/images/articles/hero-calligraphy-five-scripts.jpg",
        "0.8",
        "weekly",
    ),
    "/van-hien-bao-tang": (
        f"Văn hiến, Quốc họa & Bảo tàng Số | {SITE_BRAND}",
        "Cổng truy cập thống nhất kho 65 chuyên luận văn hiến, 54 kiệt tác quốc họa và 37 bảo vật quốc gia.",
        "assets/images/museum/forbidden-city-jingshan-panorama.webp",
        "0.8",
        "weekly",
    ),
    "/goc-nhin-so-tu": (
        f"Góc nhìn Nhà sáng lập, Phản biện & Từ điển | {SITE_BRAND}",
        "Diễn đàn góc nhìn phân tích của Lê Hưng Thịnh, Thẻ Phản biện Cấu trúc và Sổ cái Đính chính Công khai.",
        "assets/images/articles/hero-b2b-negotiation-table.jpg",
        "0.8",
        "weekly",
    ),
    "/gioi-thieu": (
        f"Về Dự án & Tâm thư Sáng lập viên Lê Hưng Thịnh | {SITE_BRAND}",
        "Sứ mệnh dự án, phương pháp luận khảo chứng nguồn gốc và thông điệp từ người sáng lập Lê Hưng Thịnh (黎兴盛).",
        "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg",
        "0.7",
        "monthly",
    ),
    "/phap-ly": (
        f"Pháp lý, Bản quyền & Chuẩn mực Trích dẫn | {SITE_BRAND}",
        "Chính sách bản quyền, trích dẫn học thuật APA/BibTeX và quy ước liêm chính tư liệu.",
        DEFAULT_RASTER_OG,
        "0.4",
        "yearly",
    ),
}


def is_raster_exists(rel_path: str | None) -> bool:
    if not rel_path:
        return False
    clean = rel_path.strip().lstrip("/")
    if clean.lower().endswith(".svg"):
        return False
    return pathlib.Path(clean).is_file()


def clean_text(raw: str, max_len: int = 160) -> str:
    txt = re.sub(r"<[^>]+>", " ", str(raw or ""))
    txt = txt.replace('\\"', '"').replace("\\'", "'").replace("\\n", " ")
    txt = re.sub(r"\*{1,2}([^*]+?)\*{1,2}", r"\1", txt)
    txt = re.sub(r"\s+", " ", txt).strip()
    if len(txt) > max_len:
        txt = txt[: max_len - 1].rstrip(" ,;.") + "…"
    return txt


def unescape_js_str(s: str) -> str:
    return (
        s.replace('\\"', '"')
        .replace("\\'", "'")
        .replace("\\n", " ")
        .replace("\\t", " ")
    )


def extract_field(block: str, field_names: list[str]) -> str:
    for fname in field_names:
        m = re.search(
            rf'(?m)(?:^|[,{{\s])"?{re.escape(fname)}"?\s*:\s*\n?\s*"((?:[^"\\]|\\.)*)"',
            block,
        )
        if m:
            return unescape_js_str(m.group(1))
    return ""


def load_editorial_image_maps() -> tuple[dict[str, str], dict[str, list[str]]]:
    """Return (image_id -> raster_src, article_id -> [candidate_image_ids])."""
    img_map: dict[str, str] = {}
    art_ed_map: dict[str, list[str]] = {}
    ed_files = [
        "src/data/editorialMediaData.js",
        "src/data/articlesMonographsPart1.js",
        "src/data/articlesMonographsPart2.js",
    ]
    for rel in ed_files:
        p = pathlib.Path(rel)
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        # Extract "img-...": { ... src: "..." }
        img_matches = list(re.finditer(r'"(img-[^"]+)"\s*:\s*\{', txt))
        for i, m in enumerate(img_matches):
            end = img_matches[i + 1].start() if i + 1 < len(img_matches) else len(txt)
            seg = txt[m.start() : min(end, m.start() + 2600)]
            ms = re.search(r'src\s*:\s*"([^"]+)"', seg)
            if ms and is_raster_exists(ms.group(1)):
                img_map[m.group(1)] = ms.group(1)

        # Extract articleEditorial "id": { articleId: "id", heroImageId: "...", ... galleryImageIds: [...] }
        ed_matches = list(
            re.finditer(
                r'"([a-z0-9-]+)"\s*:\s*\{\s*\r?\n\s*articleId\s*:\s*"([^"]+)"',
                txt,
            )
        )
        for i, m in enumerate(ed_matches):
            end = ed_matches[i + 1].start() if i + 1 < len(ed_matches) else len(txt)
            seg = txt[m.start() : min(end, m.start() + 3600)]
            cands: list[str] = []
            mh = re.search(r'heroImageId\s*:\s*"([^"]+)"', seg)
            if mh:
                cands.append(mh.group(1))
            mg = re.search(r"galleryImageIds\s*:\s*\[([^\]]+)\]", seg)
            if mg:
                cands.extend(re.findall(r'"([^"]+)"', mg.group(1)))
            if cands:
                art_ed_map[m.group(2)] = cands
    return img_map, art_ed_map


def parse_articles(
    img_map: dict[str, str], art_ed_map: dict[str, list[str]]
) -> list[dict[str, str]]:
    article_files = [
        "src/app.js",
        "src/data/articlesData.js",
        "src/data/compendiaArticles.js",
        "src/data/articlesMonographsPart1.js",
        "src/data/articlesMonographsPart2.js",
        "src/data/articlesExpansionBatch2026.js",
        "src/data/globalTradeHubData.js",
    ]
    results: list[dict[str, str]] = []
    seen: set[str] = set()
    id_pat = re.compile(
        r'(?m)^\s{2,8}id:\s*"([^"]+)"\s*,\s*(?=\r?\n\s{2,8}(?:number|category|categoryLabel|templateType|slug):)'
    )
    for rel in article_files:
        p = pathlib.Path(rel)
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        matches = list(id_pat.finditer(txt))
        for i, m in enumerate(matches):
            aid = m.group(1)
            if aid in seen:
                continue
            seen.add(aid)
            end = matches[i + 1].start() if i + 1 < len(matches) else len(txt)
            block = txt[m.start() : min(end, m.start() + 9000)]

            title_vi = extract_field(block, ["titleVi", "titleEn", "title"])
            desc_raw = extract_field(block, ["abstract", "introduction", "standfirst"])
            cat = extract_field(block, ["category"])

            # Find image: heroImage.src inside block -> articleEditorial -> category fallback -> default
            hero_src = ""
            mh = re.search(
                r'heroImage\s*:\s*\{[^}]*?src\s*:\s*"([^"]+)"', block, re.S
            )
            if mh and is_raster_exists(mh.group(1)):
                hero_src = mh.group(1)

            if not hero_src and aid in art_ed_map:
                for iid in art_ed_map[aid]:
                    cand = img_map.get(iid, "")
                    if is_raster_exists(cand):
                        hero_src = cand
                        break

            if not hero_src:
                cat_cand = CATEGORY_RASTER_FALLBACKS.get(cat, "")
                if is_raster_exists(cat_cand):
                    hero_src = cat_cand

            if not is_raster_exists(hero_src):
                hero_src = DEFAULT_RASTER_OG

            results.append(
                {
                    "id": aid,
                    "title": f"{clean_text(title_vi or aid, 110)} – {SITE_BRAND}",
                    "description": clean_text(
                        desc_raw or title_vi or f"Chuyên luận nghiên cứu tại {SITE_BRAND}.",
                        158,
                    ),
                    "image": hero_src,
                }
            )
    return results


def parse_provinces() -> list[dict[str, str]]:
    p = pathlib.Path("src/data/regionsData.js")
    if not p.exists():
        return []
    txt = p.read_text(encoding="utf-8")
    results: list[dict[str, str]] = []
    seen: set[str] = set()
    matches = list(re.finditer(r'id\s*:\s*"(prov-[a-z-]+)"', txt))
    for i, m in enumerate(matches):
        pid = m.group(1)
        if pid in seen:
            continue
        seen.add(pid)
        end = matches[i + 1].start() if i + 1 < len(matches) else len(txt)
        seg = txt[m.start() : min(end, m.start() + 2500)]
        name_vi = extract_field(seg, ["nameVi"]) or pid
        name_zh = extract_field(seg, ["nameZh"])
        desc = extract_field(seg, ["highlights", "economy"]) or f"Hồ sơ địa văn hóa {name_vi}."
        img = extract_field(seg, ["image"])
        if not is_raster_exists(img):
            img = "assets/images/provinces/beijing-temple-of-heaven.jpg"
        title_zh_part = f" ({name_zh})" if name_zh else ""
        results.append(
            {
                "id": pid,
                "title": f"{clean_text(name_vi, 70)}{title_zh_part} – 34 Tỉnh/Thành | {SITE_BRAND}",
                "description": clean_text(desc, 158),
                "image": img,
            }
        )
    return results


def parse_paintings() -> list[dict[str, str]]:
    p = pathlib.Path("src/data/paintingsData.js")
    if not p.exists():
        return []
    txt = p.read_text(encoding="utf-8")
    results: list[dict[str, str]] = []
    seen: set[str] = set()
    matches = list(
        re.finditer(
            r'"id"\s*:\s*"([^"]+)"\s*,\s*\r?\n\s*"titleZh"\s*:', txt
        )
    )
    for i, m in enumerate(matches):
        ptid = m.group(1)
        if ptid in seen:
            continue
        seen.add(ptid)
        end = matches[i + 1].start() if i + 1 < len(matches) else len(txt)
        seg = txt[m.start() : min(end, m.start() + 6500)]
        title_vi = extract_field(seg, ["titleVi", "titleEn"]) or ptid
        title_zh = extract_field(seg, ["titleZh"])
        desc = (
            extract_field(
                seg,
                ["artisticLegacy", "historicalBackground", "philosophicalMeaning", "significance"],
            )
            or f"Kiệt tác quốc họa {title_vi}."
        )
        img = extract_field(seg, ["imageUrl", "image", "src"])
        if not is_raster_exists(img):
            img = "assets/images/paintings/01_luoshenfu_tu.jpg"
        zh_part = f" ({title_zh})" if title_zh else ""
        results.append(
            {
                "id": ptid,
                "title": f"{clean_text(title_vi, 75)}{zh_part} – Quốc họa | {SITE_BRAND}",
                "description": clean_text(desc, 158),
                "image": img,
            }
        )
    return results


def parse_artifacts() -> list[dict[str, str]]:
    files = ["src/data/museumData.js", "src/data/museumExpansionBatch2026.js"]
    override_imgs = {
        "chu-dau-blue-white-ceramic": "assets/images/museum/chu-dau-ceramic.jpg",
        "jinshi-doctoral-stele": "assets/images/museum/jinshi-stele.jpg",
    }
    results: list[dict[str, str]] = []
    seen: set[str] = set()
    art_pat = re.compile(
        r'(?m)^\s{4,8}id:\s*"([^"]+)"\s*,\s*(?=\r?\n\s{4,8}category:)'
    )
    for rel in files:
        p = pathlib.Path(rel)
        if not p.exists():
            continue
        txt = p.read_text(encoding="utf-8")
        matches = list(art_pat.finditer(txt))
        for i, m in enumerate(matches):
            afid = m.group(1)
            if afid in seen:
                continue
            seen.add(afid)
            end = matches[i + 1].start() if i + 1 < len(matches) else len(txt)
            seg = txt[m.start() : min(end, m.start() + 3500)]
            name_vi = extract_field(seg, ["nameVi", "nameEn"]) or afid
            desc = extract_field(seg, ["culturalSignificance", "historicalContext"]) or f"Bảo vật số {name_vi}."
            img = override_imgs.get(afid) or extract_field(seg, ["imageUrl", "src"])
            if not is_raster_exists(img):
                img = DEFAULT_RASTER_OG
            results.append(
                {
                    "id": afid,
                    "title": f"{clean_text(name_vi, 85)} – Bảo tàng Số | {SITE_BRAND}",
                    "description": clean_text(desc, 158),
                    "image": img,
                }
            )
    return results


def get_image_info(rel_path: str) -> tuple[int, int, str]:
    """Read pixel width, height, and MIME type from JPEG/PNG/WebP headers cleanly."""
    p = pathlib.Path(rel_path.strip().lstrip("/"))
    ext = p.suffix.lower()
    mime = "image/webp" if ext == ".webp" else ("image/png" if ext == ".png" else "image/jpeg")
    if not p.is_file():
        return (1200, 780, mime)
    try:
        data = p.read_bytes()
        if ext == ".png" and len(data) >= 24 and data[:8] == b"\x89PNG\r\n\x1a\n":
            w, h = struct.unpack(">II", data[16:24])
            return (w, h, mime)
        if ext in (".jpg", ".jpeg") and len(data) > 4 and data[:2] == b"\xff\xd8":
            i = 2
            while i < len(data) - 9:
                if data[i] != 0xFF:
                    i += 1
                    continue
                marker = data[i + 1]
                if marker in (0xC0, 0xC1, 0xC2, 0xC3):
                    h, w = struct.unpack(">HH", data[i + 5 : i + 9])
                    return (w, h, mime)
                if marker in (0xD8, 0xD9, 0x01) or (0xD0 <= marker <= 0xD7):
                    i += 2
                else:
                    seg_len = struct.unpack(">H", data[i + 2 : i + 4])[0]
                    i += 2 + seg_len
        if ext == ".webp" and len(data) >= 30 and data[:4] == b"RIFF" and data[8:12] == b"WEBP":
            chunk = data[12:16]
            if chunk == b"VP8X":
                w = 1 + int.from_bytes(data[24:27], "little")
                h = 1 + int.from_bytes(data[27:30], "little")
                return (w, h, mime)
    except Exception:
        pass
    return (1200, 780, mime)


def render_route_html(
    template: str, route_path: str, title: str, description: str, rel_image: str
) -> str:
    clean_route = "/" if route_path == "/" else "/" + route_path.strip("/")
    page_url = f"{BASE_URL}{clean_route}"
    img_url = f"{BASE_URL}/{rel_image.strip().lstrip('/')}"
    w, h, mime = get_image_info(rel_image)
    og_type = "article" if clean_route.startswith("/chuyen-luan/") else "website"

    e_title = html.escape(title, quote=True)
    e_desc = html.escape(description, quote=True)
    e_url = html.escape(page_url, quote=True)
    e_img = html.escape(img_url, quote=True)

    out = template
    out = re.sub(r"<title>.*?</title>", f"<title>{e_title}</title>", out, count=1, flags=re.S)
    out = re.sub(
        r'<meta\s+name="description"\s+content="[^"]*"\s*/?>',
        f'<meta name="description" content="{e_desc}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<link\s+rel="canonical"\s+id="cce-canonical"\s+href="[^"]*"\s*/?>',
        f'<link rel="canonical" id="cce-canonical" href="{e_url}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:url"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:url" content="{e_url}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:title"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:title" content="{e_title}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:description"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:description" content="{e_desc}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:type"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:type" content="{og_type}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image" content="{e_img}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image:secure_url"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image:secure_url" content="{e_img}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image:type"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image:type" content="{mime}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image:width"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image:width" content="{w}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image:height"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image:height" content="{h}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+property="og:image:alt"\s+content="[^"]*"\s*/?>',
        f'<meta property="og:image:alt" content="{e_title}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+name="twitter:title"\s+content="[^"]*"\s*/?>',
        f'<meta name="twitter:title" content="{e_title}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+name="twitter:description"\s+content="[^"]*"\s*/?>',
        f'<meta name="twitter:description" content="{e_desc}" />',
        out,
        count=1,
    )
    out = re.sub(
        r'<meta\s+name="twitter:image"\s+content="[^"]*"\s*/?>',
        f'<meta name="twitter:image" content="{e_img}" />',
        out,
        count=1,
    )
    return out


def main() -> None:
    root_index = pathlib.Path("index.html")
    if not root_index.exists():
        raise SystemExit("Must run from repository root containing index.html")
    template_html = root_index.read_text(encoding="utf-8")

    img_map, art_ed_map = load_editorial_image_maps()
    articles = parse_articles(img_map, art_ed_map)
    provinces = parse_provinces()
    paintings = parse_paintings()
    artifacts = parse_artifacts()

    # Build static section route list appropriate for current repository
    active_sections = []
    global_trade_only = {"/hai-quan-chinh-sach", "/logistics", "/nghe-nghiep-du-hoc", "/van-hien-bao-tang", "/goc-nhin-so-tu"}
    for path, (title, desc, img, prio, freq) in STATIC_SECTION_META.items():
        if not IS_GLOBAL_TRADE and path in global_trade_only:
            continue
        sec_img = img if is_raster_exists(img) else DEFAULT_RASTER_OG
        active_sections.append((path, title, desc, sec_img, prio, freq))

    # Remove legacy root-level route directories so Netlify serves flat rewrites at HTTP 200 without 301 trailing-slash redirects
    legacy_root_dirs = [
        "chuyen-luan", "tinh-thanh", "quoc-hoa", "bao-tang",
        "explore", "kham-pha", "lich-su", "triet-hoc", "van-hoa",
        "trung-viet", "kinh-doanh", "thu-vien", "hoc-tap", "gioi-thieu",
        "phap-ly", "van-hien-bao-tang", "goc-nhin-so-tu",
        "hai-quan-chinh-sach", "logistics", "nghe-nghiep-du-hoc",
    ]
    for dname in legacy_root_dirs:
        dp = pathlib.Path(dname)
        if dp.is_dir():
            shutil.rmtree(dp, ignore_errors=True)

    seo_root = pathlib.Path("seo_pages")
    if seo_root.is_dir():
        shutil.rmtree(seo_root, ignore_errors=True)
    seo_root.mkdir(parents=True, exist_ok=True)

    # Collect routes for sitemap & flat static HTML generation under seo_pages/
    sitemap_urls: list[tuple[str, str, str]] = []
    static_shells_written = 0

    for path, title, desc, sec_img, prio, freq in active_sections:
        sitemap_urls.append((path, freq, prio))
        if path == "/":
            continue
        target_file = seo_root / f"{path.lstrip('/')}.html"
        target_file.parent.mkdir(parents=True, exist_ok=True)
        target_file.write_text(
            render_route_html(template_html, path, title, desc, sec_img),
            encoding="utf-8",
        )
        static_shells_written += 1

    route_groups = [
        ("chuyen-luan", articles, "monthly", "0.85"),
        ("tinh-thanh", provinces, "monthly", "0.75"),
        ("quoc-hoa", paintings, "monthly", "0.75"),
        ("bao-tang", artifacts, "monthly", "0.75"),
    ]
    for prefix, items, freq, prio in route_groups:
        for item in items:
            rpath = f"/{prefix}/{item['id']}"
            sitemap_urls.append((rpath, freq, prio))
            target_file = seo_root / prefix / f"{item['id']}.html"
            target_file.parent.mkdir(parents=True, exist_ok=True)
            target_file.write_text(
                render_route_html(
                    template_html,
                    rpath,
                    item["title"],
                    item["description"],
                    item["image"],
                ),
                encoding="utf-8",
            )
            static_shells_written += 1

    lines = [
        '<?xml version="1.0" encoding="UTF-8"?>',
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ]
    for path, freq, prio in sitemap_urls:
        lines.extend(
            [
                "  <url>",
                f"    <loc>{BASE_URL}{path}</loc>",
                f"    <lastmod>{TODAY}</lastmod>",
                f"    <changefreq>{freq}</changefreq>",
                f"    <priority>{prio}</priority>",
                "  </url>",
            ]
        )
    lines.append("</urlset>")
    pathlib.Path("sitemap.xml").write_text("\n".join(lines) + "\n", encoding="utf-8")

    robots = "\n".join(
        [
            "User-agent: *",
            "Allow: /",
            "Disallow: /netlify/",
            "Disallow: /scripts/",
            "Disallow: /data/",
            "",
            f"Sitemap: {BASE_URL}/sitemap.xml",
            "",
        ]
    )
    pathlib.Path("robots.txt").write_text(robots, encoding="utf-8")

    # Generate authoritative _redirects manifest at publish root so Netlify rewrites
    # clean paths directly (HTTP 200 OK, zero trailing-slash 301 redirect, and before /* SPA fallback).
    redirect_lines = [
        "# Auto-generated by scripts/generate_seo_files.py -- do not hand-edit.",
        "/netlify/*  /404  404!",
        "/scripts/*  /404  404!",
        "/scratch/*  /404  404!",
        "/Website/*  /404  404!",
        "/backups/*  /404  404!",
        "/data/*  /404  404!",
        "/server.py  /404  404!",
        "/package.json  /404  404!",
        "/index.html  /  301!",
    ]
    for path, _freq, _prio in sitemap_urls:
        if path == "/":
            continue
        clean_path = path.rstrip("/")
        seo_target = f"/seo_pages{clean_path}.html"
        redirect_lines.append(f"{clean_path}  {seo_target}  200")
        redirect_lines.append(f"{clean_path}/  {seo_target}  200")
    redirect_lines.append("/*  /index.html  200")
    pathlib.Path("_redirects").write_text("\n".join(redirect_lines) + "\n", encoding="utf-8")

    print(
        f"Generated sitemap.xml ({len(sitemap_urls)} URLs), robots.txt, _redirects ({len(redirect_lines) - 1} rules), and {static_shells_written} static OG route HTML shells "
        f"({len(articles)} essays, {len(provinces)} provinces, {len(paintings)} paintings, {len(artifacts)} artifacts) for {BASE_URL}"
    )


if __name__ == "__main__":
    main()
