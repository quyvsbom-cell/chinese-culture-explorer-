"""Unified v11.0 Semantic Image Fixer for Destinations, Interactive Hubs, V3 HERO_MAP, and 294 Monographs.

Fixes:
1. Eliminates mismatched prov_items/anhui|beijing|chongqing|fujian|gansu dish/portrait fallbacks
   inside travelUXHub.js, v3Wave5Modules.js, and v4KnowledgeHub.js while preserving zero
   intra-file path and MD5 duplicates (Gate 15).
2. Refines V3 HERO_MAP xiqu-stagecraft-face-masks-tuong -> opera/op-16.jpg across all 9 V3 files.
3. Semantically remaps all 186 monographs (#109-#294) inside cceV10Monographs294Bundle.js,
   re-emits cceV10MonographsShard1..4.js, and populates verified, topic-accurate heroImage
   objects for ALL stubs (#1-#294) inside cceV10SearchManifest.js.
"""

from __future__ import annotations

import hashlib
import json
import pathlib
import re
import subprocess
from collections import defaultdict

ROOT = pathlib.Path(".")

# ----------------------------------------------------------------------------
# Load asset MD5s
# ----------------------------------------------------------------------------
DISK_MD5: dict[str, str] = {}
for fp in sorted((ROOT / "assets" / "images").rglob("*")):
    if fp.is_file() and fp.suffix.lower() in (".jpg", ".jpeg", ".png", ".webp"):
        rel = fp.relative_to(ROOT).as_posix()
        DISK_MD5[rel] = hashlib.md5(fp.read_bytes()).hexdigest()


def ensure_exists(path: str) -> str:
    if not (ROOT / path).is_file():
        raise FileNotFoundError(f"Missing asset on disk: {path}")
    return path


# ----------------------------------------------------------------------------
# Part A: Clean up travelUXHub.js, v3Wave5Modules.js, v4KnowledgeHub.js (Gate 15 safe)
# ----------------------------------------------------------------------------
def replace_unique_tokens(rel_file: str, replacements: list[tuple[str, str]]) -> None:
    p = ROOT / rel_file
    txt = p.read_text(encoding="utf-8")
    for old, new in replacements:
        ensure_exists(new)
        if old in txt:
            txt = txt.replace(old, new, 1)
        elif new not in txt:
            raise RuntimeError(f"Expected {old} not found in {rel_file}")
    # Verify intra-file path & MD5 uniqueness (stripping onerror)
    stripped = re.sub(r'onerror\s*=\s*(?:"[^"]*"|\'[^\']*\')', "", txt)
    imgs = re.findall(r'assets/images/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)', stripped)
    seen_paths: set[str] = set()
    seen_hashes: dict[str, str] = {}
    for im in imgs:
        if im in seen_paths:
            raise RuntimeError(f"Gate 15 path duplicate in {rel_file}: {im}")
        seen_paths.add(im)
        h = DISK_MD5.get(im)
        if not h:
            raise RuntimeError(f"Missing image in {rel_file}: {im}")
        if h in seen_hashes:
            raise RuntimeError(f"Gate 15 MD5 duplicate in {rel_file}: {im} == {seen_hashes[h]}")
        seen_hashes[h] = im
    p.write_text(txt, encoding="utf-8")
    print(f"[CleanHub] {rel_file}: {len(imgs)} unique images & MD5s verified.")


def clean_interactive_hubs() -> None:
    replace_unique_tokens("src/components/travelUXHub.js", [
        ("assets/images/prov_items/anhui/d0.jpg", "assets/images/lessons/v5-m6-l5.jpg"),  # Quanzhou Kaiyuan / Fujian Heritage
        ("assets/images/prov_items/anhui/d1.jpg", "assets/images/editorial_v8/field-rail-transit.jpg"),  # Driver HSR Card
    ])

    replace_unique_tokens("src/components/v3Wave5Modules.js", [
        ("assets/images/prov_items/anhui/d0.jpg", "assets/images/editorial_v8/china-trade-dialogue.jpg"),
        ("assets/images/prov_items/anhui/d1.jpg", "assets/images/editorial_v8/b2b-inspection-qc.jpg"),
    ])

    # In v4KnowledgeHub.js, swap all misplaced anhui/beijing/chongqing/fujian/gansu fallbacks with
    # genuine domain-matched unused images in that file!
    v4_p = ROOT / "src/components/v4KnowledgeHub.js"
    v4_txt = v4_p.read_text(encoding="utf-8")
    v4_map = [
        # PHRASE_POOL / OPERA_SCRIPT_RELICS
        ('"assets/images/prov_items/anhui/d0.jpg"', '"assets/images/editorial_v8/field-rail-transit.jpg"'),
        ('"assets/images/prov_items/anhui/d1.jpg"', '"assets/images/opera/op-01.jpg"'),
        ('"assets/images/prov_items/anhui/d2.jpg"', '"assets/images/opera/op-08.jpg"'),
        ('"assets/images/prov_items/anhui/d3.jpg"', '"assets/images/opera/inst-01.jpg"'),
        # TCM_POOL & TCM fallback
        ('"assets/images/prov_items/anhui/d4.jpg"', '"assets/images/herbs/herb-astragalus.jpg"'),
        # STUDY_POOL
        ('"assets/images/prov_items/anhui/f0.jpg"', '"assets/images/universities/csc-01.jpg"'),
        ('"assets/images/prov_items/anhui/f1.jpg"', '"assets/images/universities/csc-02.jpg"'),
        # POLITICS_POOL
        ('"assets/images/prov_items/anhui/f2.jpg"', '"assets/images/urban/urban-08.jpg"'),
        ('"assets/images/prov_items/anhui/f3.jpg"', '"assets/images/urban/urban-06.jpg"'),
        ('"assets/images/prov_items/anhui/h0.jpg"', '"assets/images/urban/urban-11.jpg"'),
        # PROVINCE_COVER_MAP (missing ones that used anhui/h* and beijing/d*)
        ('"assets/images/prov_items/anhui/h1.jpg"', '"assets/images/museum/forbidden-city-autumn-ginkgo-moat.jpg"'),
        ('"assets/images/prov_items/anhui/h2.jpg"', '"assets/images/prov_items/shanghai/h0.jpg"'),
        ('"assets/images/prov_items/anhui/h3.jpg"', '"assets/images/prov_items/guangdong/h0.jpg"'),
        ('"assets/images/prov_items/anhui/h4.jpg"', '"assets/images/prov_items/sichuan/h0.jpg"'),
        ('"assets/images/prov_items/beijing/d0.jpg"', '"assets/images/prov_items/jiangsu/h0.jpg"'),
        ('"assets/images/prov_items/beijing/d1.jpg"', '"assets/images/expeditions/v7-exp-05.jpg"'),
        ('"assets/images/prov_items/beijing/d2.jpg"', '"assets/images/editorial_v8/guozijian-imperial-academy.jpg"'),
        # pairImgs (Wenyan <-> Baihua)
        ('"assets/images/prov_items/beijing/d3.jpg"', '"assets/images/museum/shiji-woodblock.jpg"' if (ROOT / "assets/images/museum/shiji-woodblock.jpg").is_file() else '"assets/images/museum/song-printed-shiji.jpg"'),
        ('"assets/images/prov_items/beijing/d4.jpg"', '"assets/images/museum/kuaixue-shiqing-tie.jpg"' if (ROOT / "assets/images/museum/kuaixue-shiqing-tie.jpg").is_file() else '"assets/images/museum/yongle-dadian.jpg"'),
        ('"assets/images/prov_items/beijing/f0.jpg"', '"assets/images/literature/lit-mod-01.jpg"'),
        ('"assets/images/prov_items/beijing/f1.jpg"', '"assets/images/literature/lit-mod-06.jpg"'),
        ('"assets/images/prov_items/beijing/f2.jpg"', '"assets/images/figures/confucius.jpg"'),
        ('"assets/images/prov_items/beijing/f3.jpg"', '"assets/images/figures/sima-qian.jpg"'),
        # canonImgs & novelIdiomImgs
        ('"assets/images/prov_items/beijing/h5.jpg"', '"assets/images/literature/lit-mod-03.jpg"'),
        ('"assets/images/prov_items/chongqing/d0.jpg"', '"assets/images/literature/lit-mod-04.jpg"'),
        ('"assets/images/prov_items/chongqing/d1.jpg"', '"assets/images/literature/lit-mod-07.jpg"'),
        ('"assets/images/prov_items/chongqing/d2.jpg"', '"assets/images/literature/lit-mod-05.jpg"'),
        ('"assets/images/prov_items/chongqing/d3.jpg"', '"assets/images/literature/lit-mod-08.jpg"'),
        ('"assets/images/prov_items/chongqing/d4.jpg"', '"assets/images/literature/lit-mod-09.jpg"'),
        ('"assets/images/prov_items/chongqing/f0.jpg"', '"assets/images/literature/lit-mod-14.jpg"'),
        ('"assets/images/prov_items/chongqing/f1.jpg"', '"assets/images/literature/lit-mod-16.jpg"'),
        ('"assets/images/prov_items/chongqing/f2.jpg"', '"assets/images/figures/cao-xueqin.jpg"'),
        ('"assets/images/prov_items/chongqing/h0.jpg"', '"assets/images/editorial_v8/envoy-poetry-scroll.jpg"'),
        ('"assets/images/prov_items/chongqing/h1.jpg"', '"assets/images/literature/lit-mod-10.jpg"'),
        ('"assets/images/prov_items/chongqing/h2.jpg"', '"assets/images/herbs/v7-herb-49.jpg"'),
        ('"assets/images/prov_items/chongqing/h3.jpg"', '"assets/images/editorial_v8/dunhuang-star-chart.jpg"'),
        ('"assets/images/prov_items/chongqing/h4.jpg"', '"assets/images/editorial_v8/ancient-observatory-armillary.jpg"'),
        ('"assets/images/prov_items/fujian/d0.jpg"', '"assets/images/articles_v8/daoism-wudang-palace.jpg"'),
        ('"assets/images/prov_items/fujian/d1.jpg"', '"assets/images/herbs/v7-herb-51.jpg"'),
        ('"assets/images/prov_items/fujian/d2.jpg"', '"assets/images/herbs/v7-herb-55.jpg"'),
        ('"assets/images/prov_items/fujian/d3.jpg"', '"assets/images/urban/urban-07.jpg"'),
        ('"assets/images/prov_items/fujian/d4.jpg"', '"assets/images/urban/urban-13.jpg"'),
        ('"assets/images/prov_items/fujian/f0.jpg"', '"assets/images/urban/urban-12.jpg"'),
        ('"assets/images/prov_items/fujian/f1.jpg"', '"assets/images/urban/urban-10.jpg"'),
        ('"assets/images/prov_items/fujian/f2.jpg"', '"assets/images/editorial_v8/chinese-banquet-table.jpg"'),
        ('"assets/images/prov_items/fujian/f3.jpg"', '"assets/images/gis/gi-eu-01.jpg"'),
        ('"assets/images/prov_items/fujian/h0.jpg"', '"assets/images/gis/gi-eu-11.jpg"'),
        ('"assets/images/prov_items/fujian/h1.jpg"', '"assets/images/expeditions/v7-exp-04.jpg"'),
        ('"assets/images/prov_items/fujian/h2.jpg"', '"assets/images/expeditions/v7-exp-08.jpg"'),
        ('"assets/images/prov_items/fujian/h3.jpg"', '"assets/images/lessons/v7-m9-l6.jpg"'),
        ('"assets/images/prov_items/fujian/h4.jpg"', '"assets/images/lessons/v5-m6-l6.jpg"'),
        ('"assets/images/prov_items/gansu/d0.jpg"', '"assets/images/museum/daming-hunyitu.jpg"'),
    ]
    for old_q, new_q in v4_map:
        rel_n = new_q.strip('"')
        ensure_exists(rel_n)
        if old_q not in v4_txt:
            raise RuntimeError(f"Expected {old_q} not found in v4KnowledgeHub.js")
        v4_txt = v4_txt.replace(old_q, new_q, 1)

    stripped_v4 = re.sub(r'onerror\s*=\s*(?:"[^"]*"|\'[^\']*\')', "", v4_txt)
    v4_imgs = re.findall(r'assets/images/[A-Za-z0-9_./-]+\.(?:jpg|jpeg|png|webp)', stripped_v4)
    seen_p: dict[str, int] = {}
    seen_h: dict[str, str] = {}
    for idx, im in enumerate(v4_imgs):
        if im in seen_p:
            raise RuntimeError(f"Gate 15 path duplicate in v4KnowledgeHub.js: {im}")
        seen_p[im] = idx
        h = DISK_MD5.get(im)
        if not h:
            raise RuntimeError(f"Missing image in v4KnowledgeHub.js: {im}")
        if h in seen_h:
            raise RuntimeError(f"Gate 15 MD5 duplicate in v4KnowledgeHub.js: {im} == {seen_h[h]}")
        seen_h[h] = im
    v4_p.write_text(v4_txt, encoding="utf-8")
    print(f"[CleanHub] src/components/v4KnowledgeHub.js: {len(v4_imgs)} unique images & MD5s verified.")


# ----------------------------------------------------------------------------
# Part B: Upgrade V3 HERO_MAP across all 9 Part*.js files
# ----------------------------------------------------------------------------
def upgrade_v3_hero_maps() -> None:
    target = '"xiqu-stagecraft-face-masks-tuong": "assets/images/articles/hero-spring-festival.jpg"'
    repl = '"xiqu-stagecraft-face-masks-tuong": "assets/images/opera/op-16.jpg"'
    ensure_exists("assets/images/opera/op-16.jpg")
    updated = 0
    for p in sorted((ROOT / "src/data/v3").glob("articlesExpansionV3_Part*.js")):
        txt = p.read_text(encoding="utf-8")
        if target in txt:
            txt = txt.replace(target, repl)
            p.write_text(txt, encoding="utf-8")
            updated += 1
    # Verify Gate 15 & Gate 16 on HERO_MAP in Part1a.js
    p1a_txt = (ROOT / "src/data/v3/articlesExpansionV3_Part1a.js").read_text(encoding="utf-8")
    hm_imgs = re.findall(r'"[^"]+"\s*:\s*"(assets/images/[^"]+)"', p1a_txt.split("HERO_MAP", 1)[1].split("};", 1)[0])
    assert len(hm_imgs) == 43
    assert len({DISK_MD5[x] for x in hm_imgs}) == 43
    assert not any(x.startswith(("assets/images/prov_items/", "assets/images/provinces/")) for x in hm_imgs)
    print(f"[V3 HERO_MAP] Updated {updated} files cleanly; 43 unique MD5s & Gate 16 clean.")


# ----------------------------------------------------------------------------
# Part C: Semantic Monograph Image Matcher for #109-#294 & All 294 Search Manifest Stubs
# ----------------------------------------------------------------------------
EXACT_MONO_OVERRIDES: dict[str, tuple[str, str, str]] = {
    # Key essays #106, #109-#125, #270-#294 and any tricky subjects explicitly verified:
    "temple-of-heaven-tiantan-cosmology-3d": (
        "assets/images/articles_v8/tiantan-hall-prayer.jpg",
        "Điện Kỳ Niên tại Thiên Đàn Bắc Kinh — kiến trúc mộc không đinh ba tầng mái lưu ly xanh biểu trưng Thiên Viên Địa Phương",
        "Hall of Prayer for Good Harvests at Beijing's Temple of Heaven with triple cobalt-blue glazed eaves",
    ),
    "tang-code-imperial-law-hong-duc": (
        "assets/images/museum/yongle-dadian.jpg",
        "Thư tịch cổ bản khắc gỗ điển chế pháp luật Đông Á — đối chiếu Đường Luật Sơ Nghị và Quốc Triều Hình Luật",
        "Classical East Asian woodblock codex illustrating the lineage from Tang Code to Vietnamese Hong Duc Law",
    ),
    "china-travel-esim-vpn-roaming-photography-drone-regulations-guide": (
        "assets/images/articles_v8/digital-payments-qr.jpg",
        "Hạ tầng kết nối số, thanh toán QR và quy chuẩn thực địa cho du khách tại Trung Quốc",
        "Digital connectivity, mobile payment QR workflows, and compliance standards in contemporary China",
    ),
    "china-overnight-sleeper-trains-luggage-storage-left-luggage-guide": (
        "assets/images/editorial_v8/field-rail-transit.jpg",
        "Hệ thống tàu hỏa và đường sắt cao tốc đêm phục vụ liên vận đường dài tại Trung Quốc",
        "Chinese sleeper rail and high-speed intercity rail station transit infrastructure",
    ),
    "pho-hien-hung-yen-chinese-merchant-guilds-seventeenth-century-trade": (
        "assets/images/editorial_v8/maritime-canton-guild.jpg",
        "Kiến trúc hội quán thương nhân Hải thương Đông Á thế kỷ XVII–XIX kết nối Phố Hiến và Quảng Đông",
        "East Asian maritime merchant guild hall architecture linking Phố Hiến port trade and coastal China",
    ),
    "bat-trang-jingdezhen-ceramics-kiln-glaze-comparative-heritage": (
        "assets/images/editorial_v8/jingdezhen-imperial-kiln.jpg",
        "Lò gốm sứ cổ truyền Cảnh Đức Trấn — đối sánh kỹ nghệ xương cao lanh và men lam với Gốm Bát Tràng",
        "Imperial porcelain kiln craft at Jingdezhen compared alongside Vietnam's Bát Tràng ceramic tradition",
    ),
    "shandong-lu-cuisine-confucius-mansion-banquet-kongfu-cai-culinary": (
        "assets/images/prov_items/shandong/d0.jpg",
        "Tinh hoa ẩm thực Lỗ Thái Sơn Đông và quy chuẩn yến tiệc Khổng Phủ gia truyền",
        "Shandong Lu culinary heritage and Confucius Mansion banquet dish craftsmanship",
    ),
    "yunnan-puerh-tea-ancient-tea-horse-road-fermentation-heritage": (
        "assets/images/articles_v8/tea-horse-caravan.jpg",
        "Tuyến Trà Mã Cổ Đạo Vân Nam và di sản bánh trà Phổ Nhĩ lên men trên hành lang Tây Nam",
        "Yunnan Ancient Tea-Horse Road heritage and fermented Pu'erh tea mountain forests",
    ),
    "miao-ethnic-silver-ornaments-guizhou-batik-indigo-craft-heritage": (
        "assets/images/ethnic/ethnic-04.jpg",
        "Trang phục bạc chạm khắc và nghệ thuật nhuộm chàm sáp ong truyền thống của dân tộc Miêu tại Quý Châu",
        "Traditional Miao ethnic silverwork and indigo batik dress in Guizhou highlands",
    ),
    "four-sacred-buddhist-mountains-wutai-emei-putuo-jiuhua-pilgrimage": (
        "assets/images/prov_items/shanxi/h2.jpg",
        "Quần thể chùa cổ Ngũ Đài Sơn — một trong Tứ Đại Danh Sơn Phật giáo Trung Quốc",
        "Mount Wutai monastic complex, anchoring China's Four Sacred Buddhist Mountains",
    ),
    "shaolin-monastery-dengfeng-unesco-2010-chan-martial-heritage": (
        "assets/images/expeditions/v7-exp-11.jpg",
        "Chùa Thiếu Lâm và Rừng Tháp Đăng Phong dưới chân Tung Sơn (Di sản Thế giới UNESCO 2010)",
        "Shaolin Monastery courtyard and Forest of Steles at Mount Song, Dengfeng",
    ),
    "ancient-chinese-coinage-banliang-wuzhu-jiaozi-paper-money-song": (
        "assets/images/museum/jiaozi-plate.jpg" if (ROOT / "assets/images/museum/jiaozi-plate.jpg").is_file() else "assets/images/museum/zheng-he-chart.jpg",
        "Hiện vật tiền tệ lịch sử và kỹ thuật đúc kim loại / in bản khắc tiền giấy cổ đại Trung Hoa",
        "Historical Chinese monetary plate and cast-coinage archival heritage",
    ),
    "macau-historic-centre-unesco-2005-maritime-canton-galleon-trade": (
        "assets/images/provinces/macau-ruins-st-paul.jpg",
        "Di tích Thánh Paul tại Khu Lịch sử Ma Cao (UNESCO 2005) trên tuyến hải thương Quảng Đông – Lĩnh Nam",
        "Ruins of St. Paul's anchor Macau's Historic Centre UNESCO maritime crossroads",
    ),
    "zhaozhou-anji-bridge-605ce-li-chun-open-spandrel-stone-arch": (
        "assets/images/prov_items/hebei/h3.jpg",
        "Cầu đá Triệu Châu (An Tế Kiều, 605 SCN) tại Hà Bắc — kiệt tác cầu vòm rỗng vai sớm nhất thế giới",
        "Anji (Zhaozhou) open-spandrel stone arch bridge in Hebei, engineered by Li Chun in 605 CE",
    ),
    "nine-chapters-mathematical-art-jiuzhang-suanshu-zu-chongzhi-pi": (
        "assets/images/museum/tiangong-kaiwu.jpg",
        "Thư tịch toán học và khoa học kỹ thuật cổ điển Trung Hoa — dòng mạch Cửu Chương Toán Thuật",
        "Classical Chinese mathematical and engineering woodblock treatise tradition",
    ),
    "four-great-classical-novels-sanguo-shuihu-xiyou-honglou-structure": (
        "assets/images/articles/hero-classical-books-scrolls.jpg",
        "Thư khố tiểu thuyết chương hồi và ấn bản mộc bản Tứ Đại Danh Tác Minh – Thanh",
        "Woodblock editions and bound volumes preserving the Four Great Classical Novels",
    ),
    "fujian-zhejiang-wooden-arch-lounge-bridges-langqiao-unesco-craft": (
        "assets/images/editorial_v8/chaozhou-guangji-bridge.jpg",
        "Cầu cổ mái che và kết cấu dầm gỗ Mân – Chiết (UNESCO Di sản Phi vật thể)",
        "Covered wooden arch lounge bridge craftsmanship across Fujian and Zhejiang",
    ),
    "wudang-mountains-ancient-building-complex-unesco-1994-taoist-architecture": (
        "assets/images/articles_v8/daoism-wudang-palace.jpg",
        "Quần thể cung quán Đạo giáo trên đỉnh núi Võ Đang, Hồ Bắc (UNESCO 1994)",
        "Imperial Daoist palace architecture atop the Wudang Mountains in Hubei",
    ),
    "china-cultural-shopping-markets-shipping-liquids-tea-customs": (
        "assets/images/supply/v7-sc-01.jpg",
        "Quy trình khai báo hải quan, đóng gói đặc sản và vận chuyển hàng hóa biên giới Trung – Việt",
        "Cross-border customs clearance and cultural goods shipping compliance corridor",
    ),
    "china-scenic-area-tickets-cable-cars-shuttle-buses-guide": (
        "assets/images/provinces/hunan-zhangjiajie.jpg",
        "Hệ thống cáp treo và xe trung chuyển tại khu danh thắng 5A Thiên Tử Sơn – Vũ Lăng Nguyên",
        "Cableway and scenic shuttle transit across China's 5A mountain heritage parks",
    ),
    "thanh-lieu-woodblock-carving-village-sino-vietnamese-printing": (
        "assets/images/editorial_v8/qieyun-guangyun-philology.jpg",
        "Kỹ nghệ khắc ván mộc bản in chữ Hán–Nôm làng Thanh Liễu (Hải Dương) trong dòng chảy thư tịch Đông Á",
        "East Asian woodblock carving and philological printing heritage connecting China and Vietnam",
    ),
    "guzheng-dan-tranh-silk-bamboo-east-asian-zither-comparison": (
        "assets/images/editorial_v8/guqin-zither-instrument.jpg",
        "Nhạc khí dây gảy cung đình và văn nhân Đông Á — đối chiếu Cổ Tranh và Đàn Tranh 16 dây",
        "Traditional Chinese bridged zither acoustics compared with Vietnam's Đàn Tranh",
    ),
    "shaoxing-huangjiu-rice-wine-nu-er-hong-fermentation-heritage": (
        "assets/images/brands/guyuelongshan.jpg",
        "Chum gốm ủ men Hoàng tửu Cổ Việt Long Sơn tại Thiệu Hưng, Chiết Giang",
        "Shaoxing Huangjiu ceramic aging jars from historic Guyuelongshan brewers",
    ),
    "chaoshan-beef-hotpot-marinated-goose-lingnan-culinary-craft": (
        "assets/images/prov_items/guangdong/d1.jpg",
        "Tinh hoa ẩm thực Triều Sán và Quảng Đông với kỹ nghệ cắt thịt và gia vị bản địa",
        "Chaoshan and Lingnan culinary precision in traditional southern Chinese dining",
    ),
    "bai-ethnic-three-course-tea-dali-erhai-courtyard-heritage": (
        "assets/images/ethnic/ethnic-07.jpg",
        "Văn hóa dân tộc Bạch bên hồ Nhĩ Hải Đại Lý — cái nôi Trà Tam Đạo và kiến trúc Tam Phường Nhất Chiếu Bích",
        "Bai ethnic cultural landscape beside Erhai Lake in Dali, Yunnan",
    ),
    "qiang-ethnic-stone-watchtowers-diaolou-sichuan-heritage": (
        "assets/images/ethnic/ethnic-18.jpg",
        "Thôn trại Đảo Bình và điêu lâu xếp đá chống chấn động của dân tộc Khương tại Tứ Xuyên",
        "Taoping Qiang stone watchtowers and fortified courtyard architecture in Sichuan",
    ),
    "chinese-huiguan-guild-halls-merchant-networks-domestic-diaspora": (
        "assets/images/editorial_v8/shanxi-courtyard-guild.jpg",
        "Hội quán thương nhân và đại viện thương bang Minh – Thanh tại Trung Nguyên và Hoa Nam",
        "Historic Chinese merchant guildhall courtyard and regional chamber network",
    ),
    "shanxi-piaohao-rishengchang-pingyao-early-chinese-banking": (
        "assets/images/editorial_v8/rishengchang-draft-bank.jpg",
        "Phiếu hiệu Nhật Thăng Xương (Bình Dao, 1823) — tiền thân ngân hàng hối phiếu đầu tiên của Trung Hoa",
        "Rishengchang Draft Bank in Pingyao Ancient City, cradle of Shanxi Piaohao finance",
    ),
    "chinese-ancient-waterwheels-longguche-curved-plow-agrotech": (
        "assets/images/lessons/v5-m1-l3.jpg",
        "Công trình thủy lợi cổ đại và kỹ nghệ dẫn thủy nhập điền truyền thống lưu vực Trường Giang",
        "Ancient Chinese hydraulic diversion engineering and agrarian water management",
    ),
    "guo-shoujing-gaocheng-observatory-1276-shoushi-gnomon": (
        "assets/images/editorial_v8/ancient-observatory-armillary.jpg",
        "Khí cụ thiên văn đúc đồng và truyền thống đo nhật quỹ từ Đài Quan Tinh Cáo Thành đời Nguyên",
        "Imperial brass astronomical instruments rooted in Guo Shoujing's 1276 observatory heritage",
    ),
    "tianjin-clay-figurine-zhang-foshan-shiwan-ceramics": (
        "assets/images/museum/tang-sancai-camel.jpg",
        "Nghệ thuật điêu khắc tượng gốm men màu truyền thống — từ Đường Tam Thái đến Nê Nhân Trương và Thạch Loan",
        "Glazed ceramic sculptural craftsmanship linking classic kiln figurines to Folk Zhang & Shiwan wares",
    ),
    "taijiquan-chen-yang-schools-unesco-2020-yin-yang-philosophy": (
        "assets/images/articles/hero-yinyang.jpg",
        "Nguyên lý Thái Cực – Âm Dương vận động trong di sản Thái Cực Quyền (UNESCO 2020)",
        "Yin-Yang cosmological balance underlying UNESCO-listed Taijiquan martial philosophy",
    ),
    "shen-bao-shanghai-modern-press-dianshizhai-pictorial": (
        "assets/images/provinces/shanghai-bund-skyline.jpg",
        "Không gian đô thị Thượng Hải — trung tâm báo chí Thân Báo và thạch ấn Điểm Thạch Trai Họa Báo",
        "Modern Shanghai publishing hub where Shen Bao and Dianshizhai Pictorial shaped public discourse",
    ),
    "ming-qing-woodblock-book-illustration-huizhou-jianning": (
        "assets/images/museum/song-printed-shiji.jpg",
        "Trang in khắc mộc bản Minh – Thanh nối tiếp chuẩn mực bản khắc cổ Trung Hoa",
        "Imperial-era woodblock page craftsmanship anchored in Song–Ming printing lineage",
    ),
    "lingnan-qilou-arcade-architecture-guangzhou-haikou-heritage": (
        "assets/images/prov_items/guangdong/h2.jpg",
        "Phố cổ mái hiên Kỵ Lâu (Qilou) giao thoa kiến trúc Đông – Tây tại Lĩnh Nam",
        "Lingnan Qilou arcade shophouses blending southern colonnades and Cantonese facades",
    ),
    "huizhou-architecture-xidi-hongcun-unesco-matouqiang": (
        "assets/images/expeditions/v7-exp-05.jpg",
        "Tường Mã Đầu tường trắng ngói đen tại làng cổ Tây Đệ – Hoành Thôn Huy Châu (UNESCO 2000)",
        "Whitewashed horse-head gables in UNESCO-listed Xidi and Hongcun Huizhou villages",
    ),
    "china-family-elderly-solo-travel-safety-health-packing-guide": (
        "assets/images/editorial_v8/transit-240h-airport.jpg",
        "Thủ tục cửa khẩu sân bay và hậu cần di chuyển an toàn cho gia đình tại Trung Quốc",
        "Airport transit facilitation and practical family travel logistics in China",
    ),
    "china-domestic-flights-airport-transfers-luggage-guide-vietnamese": (
        "assets/images/urban/urban-11.jpg",
        "Nhà ga hàng không quốc tế Bắc Kinh Đại Hưng — đầu mối trung chuyển bay nội địa trọng điểm",
        "Beijing Daxing International Airport terminal serving domestic Chinese flight connections",
    ),
    "nguyen-du-truyen-kieu-qingxin-cairen-jin-yun-qiao-comparative": (
        "assets/images/museum/kuaixue-shiqing-tie.jpg" if (ROOT / "assets/images/museum/kuaixue-shiqing-tie.jpg").is_file() else "assets/images/editorial_v8/envoy-poetry-scroll.jpg",
        "Văn bản Hán – Nôm và mạch đối chiếu văn học Đông Á từ Kim Vân Kiều Truyện đến Truyện Kiều",
        "Sino-Vietnamese literary scroll tradition connecting Qingxin Cairen and Nguyen Du",
    ),
    "lanzhou-hand-pulled-noodles-xian-biangbiang-wheat-belt-cuisine": (
        "assets/images/prov_items/shaanxi/d1.jpg",
        "Mì kéo tay thủ công và phong vị ẩm thực vành đai lúa mì Tây Bắc (Cam Túc – Thiểm Tây)",
        "Northwestern Chinese wheat-belt hand-pulled noodles and bold chili-oil aromatics",
    ),
    "west-lake-longjing-green-tea-huangshan-maofeng-pan-firing": (
        "assets/images/gis/gi-eu-01.jpg",
        "Búp trà xanh Tây Hồ Long Tỉnh sao chảo phẳng dẹt — chỉ dẫn địa lý Hàng Châu",
        "Pan-fired West Lake Longjing green tea leaves with distinctive flat-blade aroma",
    ),
    "hakka-walled-villages-fujian-tulou-culture-migration-history": (
        "assets/images/provinces/fujian-tulou.jpg",
        "Quần thể Thổ Lâu Phúc Kiến — kiến trúc đất nện hình tròn cộng cư của người Khách Gia",
        "Circular rammed-earth Hakka Tulou fortress compounds in Fujian valleys",
    ),
    "dong-ethnic-drum-towers-grand-song-unesco-2009-guizhou": (
        "assets/images/ethnic/ethnic-09.jpg",
        "Tháp trống Cổ Lâu mộng gỗ không đinh của dân tộc Đồng tại Quý Châu",
        "Interlocking timber Dong ethnic Drum Tower housing Grand Song choirs in Guizhou",
    ),
    "sichuan-opera-bian-lian-face-changing-cantonese-opera-unesco": (
        "assets/images/opera/op-16.jpg",
        "Nghệ thuật Biến Diện (Thay mặt nạ) đặc trưng của Xuyên Kịch Tứ Xuyên",
        "Sichuan Opera Bian Lian mask-changing theatrical artistry",
    ),
    "zhang-heng-seismoscope-132ce-armillary-sphere-han-science": (
        "assets/images/museum/han-shipan.jpg",
        "Khí cụ thiên văn – địa động học thời Hán và mạch sáng chế Hậu Phong Địa Động Nghi của Trương Hành",
        "Han dynasty cosmological and precision bronze mechanism tradition",
    ),
    "cai-lun-papermaking-woodblock-printing-bookbinding-evolution": (
        "assets/images/gis/gi-eu-09.jpg",
        "Kỹ nghệ tráng bột tạo giấy thủ công Tuyên Thành kế thừa phương pháp Thái Luân đời Hán",
        "Traditional Xuan papermaking craft descending from Cai Lun's Han-era invention",
    ),
    "wuyi-rock-tea-tieguanyin-oolong-gongfu-cha-ceremony": (
        "assets/images/gis/gi-eu-11.jpg",
        "Vùng trà núi đá Vũ Di Nham Trà (Đại Hồng Bào) tại Phúc Kiến",
        "Wuyi Mountain cliff tea leaves producing roasted Da Hong Pao oolong",
    ),
    "peking-roast-duck-quanjude-imperial-banquet-history": (
        "assets/images/prov_items/beijing/d0.jpg",
        "Vịt quay Bắc Kinh da giòn vàng ruộm — tinh hoa ẩm thực kinh kỳ Toàn Tụ Đức",
        "Crisp golden-lacquered Peking Roast Duck from historic Beijing banquet kitchens",
    ),
    "tibet-barkhor-circuit-lhasa-monasteries-cultural-etiquette": (
        "assets/images/provinces/tibet-potala-palace.jpg",
        "Cung Potala và không gian hành hương Lhasa trên cao nguyên Tây Tạng",
        "Potala Palace overlooking Lhasa's Barkhor sacred pilgrimage circuit in Tibet",
    ),
    "dai-water-splashing-songkran-yi-torch-festival-yunnan": (
        "assets/images/ethnic/ethnic-08.jpg",
        "Lễ hội và bản sắc văn hóa dân tộc Thái tại Tây Song Bản Nạp, Vân Nam",
        "Dai ethnic festive water-celebration heritage in Xishuangbanna, Yunnan",
    ),
    "chengdu-teahouse-culture-beijing-hutong-siheyuan-urban-life": (
        "assets/images/academic/chengdu-jinli.jpg",
        "Không gian trà quán và phố cổ Thành Đô nếp nhà Ba Thục",
        "Historic Chengdu teahouse lane and vibrant Sichuan urban courtyards",
    ),
    "ancient-chinese-cast-iron-blast-furnace-steelmaking-history": (
        "assets/images/museum/houmuwu-ding.jpg",
        "Kỹ nghệ luyện kim và đúc đồng – gang nhiệt độ cao cổ đại Trung Hoa",
        "Monumental ancient Chinese metallurgy and high-temperature casting heritage",
    ),
    "modern-chinese-ink-painting-qi-baishi-xu-beihong-lin-fengmian": (
        "assets/images/paintings/51_lushan_tu_daqian.jpg",
        "Bút pháp thủy mặc cận đại đột phá bố cục không gian truyền thống",
        "Twentieth-century Chinese ink masterwork expanding traditional landscape composition",
    ),
    "china-museum-reservation-wechat-miniprogram-etiquette-guide": (
        "assets/images/lessons/v7-m10-l6.jpg",
        "Bảo tàng Quốc gia Trung Quốc tại quảng trường Thiên An Môn — quy trình đặt vé bằng hộ chiếu",
        "National Museum of China facade where passport reservation slots are checked",
    ),
    "china-high-speed-rail-12306-luggage-seat-classes-guide": (
        "assets/images/lessons/v7-m9-l2.jpg",
        "Đoàn tàu cao tốc Phục Hưng CR400 vận hành trên mạng lưới đường sắt 12306",
        "Fuxing CR400 bullet train on China's 12306 high-speed rail network",
    ),
    "chu-dau-porcelain-ming-ban-maritime-ceramic-route": (
        "assets/images/museum/chu-dau-ceramic.jpg",
        "Bình gốm hoa lam Chu Đậu thế kỷ XV — minh chứng vàng son của Con đường Gốm sứ trên biển",
        "Fifteenth-century Vietnamese Chu Dau blue-and-white export porcelain",
    ),
    "chinese-baijiu-solid-state-fermentation-qu-heritage": (
        "assets/images/gis/gi-eu-10.jpg",
        "Thị trấn Mao Đài bên sông Xích Thủy (Quý Châu) — thánh địa lên men thể rắn Bạch Tửu",
        "Maotai Town along the Chishui River, heartland of solid-state baijiu fermentation",
    ),
    "mongolian-morin-khuur-urtiin-duu-grassland-heritage": (
        "assets/images/ethnic/ethnic-11.jpg",
        "Văn hóa thảo nguyên Nội Mông với đàn Mã Đầu Cầm và Trường Điệu Urtiin Duu",
        "Mongolian steppe cultural life celebrating Morin Khuur horsehead fiddle and long song",
    ),
    "uyghur-twelve-muqam-unesco-turpan-silk-road-oasis": (
        "assets/images/ethnic/ethnic-02.jpg",
        "Hệ thống ốc đảo Thổ Lỗ Phồn bên kênh Karez — cái nôi Thập nhị Mộc Tạp Mỗ trên Con đường Tơ lụa",
        "Turpan oasis and Karez waterways sustaining Uyghur Twelve Muqam Silk Road music",
    ),
    "weifang-kites-zigong-lantern-festival-craftsmanship": (
        "assets/images/editorial_v8/folk-syncretism-temple.jpg",
        "Lễ hội đèn lồng truyền thống và mỹ nghệ giấy trúc dân gian Trung Hoa",
        "Vibrant lantern craft and festive folk artistry across Chinese seasonal celebrations",
    ),
    "luopan-magnetic-compass-zheng-he-star-navigation": (
        "assets/images/museum/zheng-he-chart.jpg",
        "Hải đồ Trịnh Hòa và thuật định hướng la bàn hàng hải trên Đại Tây Dương – Ấn Độ Dương",
        "Zheng He nautical navigation scroll mapping magnetic compass and star bearings",
    ),
    "wujing-zongyao-gunpowder-rocketry-early-pyrotechnics": (
        "assets/images/museum/shiji-woodblock.jpg" if (ROOT / "assets/images/museum/shiji-woodblock.jpg").is_file() else "assets/images/editorial_v8/qieyun-guangyun-philology.jpg",
        "Văn hiến quân sự cổ đại — tiền thân công thức hỏa dược trong Võ Kinh Tổng Yếu (1044)",
        "Classical military-technological woodblock compendium lineage of Wujing Zongyao",
    ),
    "peking-opera-jingju-unesco-2010-lianpu-roles": (
        "assets/images/lessons/v8-m11-l2.jpg",
        "Phục trang và nghệ thuật vẽ mặt Kiểm Phổ (Sinh–Đán–Tịnh–Sửu) của Kinh Kịch Bắc Kinh",
        "Peking Opera Lianpu facial painting and embroidered court costume staging",
    ),
    "kunqu-opera-unesco-2001-water-sleeves-elegance": (
        "assets/images/lessons/v8-m11-l1.jpg",
        "Di sản Côn Khúc Giang Nam — 'Bách hí chi tổ' với thủy tụ mềm mại và làn điệu Thủy Ma Điều",
        "Kunqu opera water-sleeve choreography, UNESCO Intangible Cultural Heritage",
    ),
    "yingzao-fashi-song-dynasty-timber-dougong-brackets": (
        "assets/images/editorial_v8/timber-dougong-brackets.jpg",
        "Hệ mộng đấu củng đa tầng theo quy chuẩn mô-đun Tài–Phân trong Doanh Tạo Pháp Thức (1103)",
        "Multi-tiered interlocking wooden dougong bracket architecture from Yingzao Fashi",
    ),
    "imperial-gardens-summer-palace-chengde-mountain-resort": (
        "assets/images/academic/qing-summer-palace.jpg",
        "Di Hòa Viên bên hồ Côn Minh Bắc Kinh — tuyệt tác ngự uyển phong thủy triều Thanh",
        "Beijing's Summer Palace uniting Kunming Lake hydrology and imperial garden pavilions",
    ),
    "china-cross-border-rail-bus-hanoi-nanning-kunming-logistics": (
        "assets/images/lessons/v7-m10-l3.jpg",
        "Cửa khẩu quốc tế Hữu Nghị Quan kết nối hành lang đường bộ – đường sắt Hà Nội – Nam Ninh",
        "Friendship Pass (Youyiguan) border gate anchoring Vietnam–China rail and bus links",
    ),
    "china-digital-apps-alipay-wechat-didi-amap-meituan-guide": (
        "assets/images/articles/hero-contemporary-china.jpg",
        "Hệ sinh thái đô thị số và thanh toán Alipay – WeChat – Amap trong đời sống Trung Quốc",
        "Super-app urban infrastructure powering cashless transit and bookings across China",
    ),
    "confucian-temples-qufu-kongmiao-van-mieu-quoc-tu-giam": (
        "assets/images/lessons/v5-m6-l6.jpg",
        "Văn Miếu – Quốc Tử Giám Hà Nội trong trục đối sánh kiến trúc Nho học Đông Á cùng Khổng Miếu Khúc Phụ",
        "Hanoi's Temple of Literature paired with Qufu Kongmiao in East Asian Confucian heritage",
    ),
    "jingdezhen-imperial-kilns-blue-and-white-famille-rose-porcelain": (
        "assets/images/gis/gi-eu-02.jpg",
        "Sứ thanh hoa Cảnh Đức Trấn vẽ lam cô-ban dưới men trong dòng chảy Ngự Diêu Nguyên – Minh – Thanh",
        "Yuan–Ming Jingdezhen underglaze cobalt blue-and-white imperial porcelain craft",
    ),
    "chinese-jade-civilization-hongshan-liangzhu-bi-cong": (
        "assets/images/museum/liangzhu-yucong.jpg",
        "Ngọc Tông Vương văn hóa Lương Chử — biểu tượng giao cảm Thiên Địa trong văn minh ngọc khí",
        "Carved Liangzhu jade cong ritual cylinder representing China's 5,000-year jade civilization",
    ),
    "tang-qianling-zhaoling-imperial-mausoleums-shaanxi": (
        "assets/images/academic/tang-sancai-camel.jpg",
        "Hiện vật gốm Đường Tam Thái từ quần thể lăng tẩm Thịnh Đường vùng Quan Trung",
        "Tang dynasty Sancai glazed figurine echoing the imperial mausoleum arts of Shaanxi",
    ),
    "chinese-pipa-erhu-silk-road-musical-dialogue": (
        "assets/images/opera/inst-04.jpg",
        "Đàn Tỳ Bà bốn dây hình quả lê du nhập qua Con đường Tơ lụa và bản địa hóa tại Trung Hoa",
        "Four-stringed Pipa lute transformed through Silk Road musical exchange",
    ),
    "yayue-court-music-vietnamese-nha-nhac-hue": (
        "assets/images/lessons/v8-m11-l4.jpg",
        "Biên chung bát âm — nền tảng Nhã nhạc cung đình Trung Hoa đối chiếu Nhã nhạc Huế",
        "Ancient ceremonial Bianzhong bronze chime bells underlying East Asian court music",
    ),
    "erlitou-culture-bronze-age-early-state-formation": (
        "assets/images/museum/daxiguan-ding.jpg",
        "Đỉnh đồng thanh đồng thời sơ kỳ nhà nước — mạch tiếp nối từ Nhị Lý Đầu đến Tây Chu",
        "Archaic Chinese ritual bronze casting heralding early Bronze Age state formation",
    ),
    "beijing-central-axis-unesco-2024-kaogongji": (
        "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
        "Trục Trung tâm Bắc Kinh dài 7,8 km (UNESCO 2024) đi xuyên Ngọ Môn – Cố Cung",
        "Axial symmetry along Beijing's 7.8 km UNESCO Central Axis through the Meridian Gate",
    ),
    "great-wall-engineering-passes-jiayuguan-shanhaiguan": (
        "assets/images/lessons/v7-m9-l1.jpg",
        "Gia Dục Quan — 'Thiên hạ đệ nhất hùng quan' ở cực Tây Vạn Lý Trường Thành thời Minh",
        "Jiayuguan Fortress guarding the western terminus of the Ming Great Wall",
    ),
    "qingming-shanghe": (
        "assets/images/paintings/21_qingming_shanghe.jpg",
        "Thanh Minh Thượng Hà Đồ",
        "Along the River During the Qingming Festival",
    ),
}

# Semantic keyword table with STRICT regex word/token boundaries (NO naked "tra" substring!)
SEMANTIC_RULES: list[tuple[re.Pattern[str], list[tuple[str, str, str]]]] = [
    # 1. Rail / HSR / Trains / Transport
    (
        re.compile(r"\b(rail|train|sleeper|hsr|12306|subway|metro|high-speed|cross-border-rail|freight)\b|tàu hỏa|giường nằm|đường sắt|cao tốc", re.I),
        [
            ("assets/images/lessons/v7-m9-l2.jpg", "Đoàn tàu cao tốc Trung Quốc phục vụ hành lang liên tỉnh hiện đại", "Chinese high-speed railway express rolling stock"),
            ("assets/images/editorial_v8/field-rail-transit.jpg", "Không gian ga đường sắt phục vụ hành khách liên vận đường dài", "Intercity Chinese rail transit concourse"),
            ("assets/images/lessons/v5-m7-l1.jpg", "Tuyến đường sắt vận tải liên vận Á – Âu", "Eurasian rail freight and corridor rolling stock"),
            ("assets/images/editorial_v8/field-subway-signage.jpg", "Biển chỉ dẫn song ngữ tại hệ thống tàu điện ngầm đô thị Trung Quốc", "Bilingual Chinese urban metro wayfinding signage"),
            ("assets/images/urban/urban-08.jpg", "Nhà ga đường sắt cao tốc Hùng An – hạ tầng giao thông xanh thế hệ mới", "Modern Xiong'an high-speed rail hub architecture"),
        ],
    ),
    # 2. Digital / eSIM / Apps / Flights / Airports / Travel Logistics / Visa
    (
        re.compile(r"\b(esim|vpn|roaming|drone|alipay|wechat|didi|flight|airport|visa|hotel|ticket|museum-reservation|calendar|elderly|solo-travel|digital-survival)\b|hành trình thực địa|đặt vé|cẩm nang bay|ứng dụng số|hậu cần", re.I),
        [
            ("assets/images/articles_v8/digital-payments-qr.jpg", "Hệ sinh thái thanh toán QR và kết nối số trong đời sống Trung Quốc", "Digital payments and mobile connectivity ecosystem in China"),
            ("assets/images/editorial_v8/transit-240h-airport.jpg", "Cửa khẩu hàng không quốc tế phục vụ chính sách quá cảnh miễn thị thực 240 giờ", "Chinese international airport hub supporting 240-hour visa-free transit"),
            ("assets/images/urban/urban-11.jpg", "Nhà ga sân bay quốc tế Đại Hưng Bắc Kinh", "Beijing Daxing International Airport radial terminal"),
            ("assets/images/urban/urban-12.jpg", "Cảng hàng không quốc tế Thiên Phủ Thành Đô", "Chengdu Tianfu International Airport transit hub"),
            ("assets/images/lessons/v7-m10-l6.jpg", "Quảng trường và không gian bảo tàng quốc gia phục vụ tham quan văn hóa", "National cultural plaza and museum visitor concourse"),
            ("assets/images/articles/hero-consular-field-guide.jpg", "Hồ sơ hướng dẫn thủ tục nhập cảnh, hộ chiếu và di chuyển thực địa", "Travel visa, passport registration, and field compliance guide"),
        ],
    ),
    # 3. Tea / Puerh / Longjing / Wuyi / Teahouse
    (
        re.compile(r"\b(tea|puerh|puer|longjing|oolong|tieguanyin|wuyi|maofeng|chabaixi|gongfu-cha|yum-cha|teahouse)\b|trà\b|trà quán|danh trà|chè", re.I),
        [
            ("assets/images/articles_v8/tea-horse-caravan.jpg", "Tuyến Trà Mã Cổ Đạo miền núi Tây Nam Trung Quốc", "Ancient Tea-Horse Road mountain corridor in southwest China"),
            ("assets/images/gis/gi-eu-01.jpg", "Lá trà xanh Tây Hồ Long Tỉnh sao chảo thủ công tại Hàng Châu", "West Lake Longjing green tea hand-fired leaves"),
            ("assets/images/gis/gi-eu-11.jpg", "Vùng chè núi đá Vũ Di Nham Trà Đại Hồng Bào tại Phúc Kiến", "Wuyi Mountain Da Hong Pao cliff tea cultivar"),
            ("assets/images/lessons/v7-m9-l4.jpg", "Đồi chè bậc thang Vũ Di Sơn – cái nôi văn hóa trà Phúc Kiến", "Terraced tea plantations across Wuyishan slopes"),
            ("assets/images/editorial_v8/luyu-tea-classic.jpg", "Trà cụ gốm sứ trong tinh thần Trà Kinh của Lục Vũ", "Classical gongfu tea vessels honoring Lu Yu's Cha Jing"),
            ("assets/images/articles/hero-six-teas-gongfu.jpg", "Sáu dòng trà cơ bản (Lục Đại Trà Loại) và trà cụ Công Phu", "China's Six Tea Categories arranged for gongfu preparation"),
            ("assets/images/editorial_v8/tea-chabaixi-whisking.jpg", "Nghệ thuật điểm trà bọt trắng (Trà Bách Hý) thời Tống", "Song dynasty whisked tea foam art (Cha Bai Xi)"),
        ],
    ),
    # 4. Ceramics / Porcelain / Kilns / Jade
    (
        re.compile(r"\b(ceramic|porcelain|kiln|celadon|zisha|chu-dau|bat-trang|jingdezhen|jade|liangzhu|hongshan|cloisonne|lacquer|clay)\b|gốm|sứ|ngọc|ấm tử sa|sơn mài|ngự diêu", re.I),
        [
            ("assets/images/editorial_v8/jingdezhen-imperial-kiln.jpg", "Lò nung sứ cổ truyền Cảnh Đức Trấn, Giang Tây", "Jingdezhen imperial porcelain kiln site in Jiangxi"),
            ("assets/images/museum/david-vases.jpg", "Cặp bình Thanh Hoa Vân Long đời Nguyên (1351) chế tác tại Cảnh Đức Trấn", "1351 Yuan blue-and-white David Vases fired in Jingdezhen"),
            ("assets/images/museum/ru-yao-tianqing.jpg", "Bát gốm Nhữ Diêu men Thanh Thiên thời Bắc Tống", "Northern Song Ru ware sky-blue celadon porcelain"),
            ("assets/images/museum/longquan-celadon-vase.jpg", "Bình men ngọc Long Tuyền tai phượng thời Nam Tống", "Southern Song Longquan celadon mallet vase"),
            ("assets/images/museum/chu-dau-ceramic.jpg", "Bình gốm hoa lam xuất khẩu Chu Đậu thế kỷ XV", "Fifteenth-century Chu Dau blue-and-white maritime ceramic"),
            ("assets/images/museum/liangzhu-yucong.jpg", "Ngọc Tông văn hóa Lương Chử chạm khắc Thần Nhân Thú Diện", "Carved Neolithic Liangzhu jade cong ritual prism"),
            ("assets/images/urban/urban-15.jpg", "Không gian gốm đương đại Đào Khê Xuyên tại Cảnh Đức Trấn", "Taoxichuan Ceramic Art District in Jingdezhen"),
            ("assets/images/gis/gi-v6-06.jpg", "Sứ trắng Đức Hóa (Bạch Từ) Phúc Kiến tinh xảo", "Blanc de Chine white porcelain from Dehua kilns, Fujian"),
        ],
    ),
    # 5. Bridges / Architecture / Pagodas / Gardens / Axis / Palace / Sacred Mountains / Caves
    (
        re.compile(r"\b(bridge|zhaozhou|langqiao|architecture|pagoda|tulou|qilou|huizhou|dougong|yingzao|garden|palace|axis|wudang|shaolin|grotto|yungang|longmen|maijishan|dazu|tombs|qianling|sacred|danxia|panda|jiuzhaigou|zhangjiajie|diaolou|pritzker|shikumen|libraries|temples)\b|cầu\b|kiến trúc|tháp|chùa|lăng|hang đá|thạch quật|núi|trục trung tâm|ngự uyển", re.I),
        [
            ("assets/images/editorial_v8/timber-dougong-brackets.jpg", "Hệ mộng Đấu Củng chịu lực và giảm chấn trong kiến trúc gỗ cổ truyền", "Interlocking timber dougong bracket system"),
            ("assets/images/articles_v8/daoism-wudang-palace.jpg", "Kiến trúc cung quán Đạo giáo trên dãy núi Võ Đang, Hồ Bắc", "Wudang Mountain cliffside Taoist temple complex"),
            ("assets/images/editorial_v8/chaozhou-guangji-bridge.jpg", "Cầu cổ mái đình nhiều nhịp truyền thống Hoa Nam", "Historic Chinese covered multi-pavilion bridge architecture"),
            ("assets/images/expeditions/v7-exp-05.jpg", "Kiến trúc tường Mã Đầu trắng đen đặc trưng vùng Huy Châu (Tây Đệ – Hoành Thôn)", "Huizhou whitewashed gables in ancient Xidi and Hongcun"),
            ("assets/images/expeditions/v7-exp-07.jpg", "Tháp gỗ Thích Ca Huyện Ứng (1056) cao nhất còn nguyên vẹn thế giới", "Yingxian Wooden Pagoda (1056), Liao timber-frame landmark"),
            ("assets/images/expeditions/v7-exp-04.jpg", "Tượng Phật đá Lạc Sơn tạc bên vách núi Tứ Xuyên", "Monumental Leshan Giant Buddha cliff sculpture in Sichuan"),
            ("assets/images/expeditions/v7-exp-12.jpg", "Tượng khắc đá Đại Túc (UNESCO) tại Trùng Khánh", "Dazu Rock Carvings Buddhist grotto sculptures"),
            ("assets/images/articles_v8/chan-aesthetics-grotto.jpg", "Nghệ thuật điêu khắc Phật giáo trong hang đá cổ đại Trung Hoa", "Buddhist grotto cave sculpture heritage"),
            ("assets/images/provinces/henan-longmen-grottoes.jpg", "Quần thể hang đá Long Môn bên sông Y, Lạc Dương", "Longmen Grottoes monumental cliff statues near Luoyang"),
            ("assets/images/academic/suzhou-garden.jpg", "Viên lâm cổ điển Tô Châu kết hợp giả sơn, thủy đình và cửa sổ hoa văn", "Classical Suzhou scholar garden rockery and courtyard pond"),
            ("assets/images/academic/ming-forbidden-city.jpg", "Quần thể Cố Cung Bắc Kinh thời Minh – Thanh", "Imperial Forbidden City courtyard complex in Beijing"),
            ("assets/images/urban/urban-02.jpg", "Bảo tàng Ninh Ba do kiến trúc sư Vương Thụ thiết kế bằng kỹ thuật tường Ngõa Bàn", "Ningbo History Museum's recycled tile-wall facade by Wang Shu"),
            ("assets/images/urban/urban-03.jpg", "Nhà hát lớn Cáp Nhĩ Tân theo mỹ học Sơn Thủy kiến trúc đương đại", "Harbin Grand Theatre fluid modern architectural curves"),
        ],
    ),
    # 6. Opera / Music / Zither / Instruments / Cinema / Gaming / Folklore / Dance / Shadow Puppet
    (
        re.compile(r"\b(opera|kunqu|peking-opera|jingju|guqin|guzheng|pipa|erhu|yayue|nha-nhac|music|cinema|donghua|xiangsheng|shadow-puppet|lion-dragon|kite|lantern|festival|mid-autumn|dragon-boat|rites|hairpin|embroidery|brocade|dragon-robe|weiqi|xiangqi)\b|kinh kịch|côn khúc|xuyên kịch|nhạc khí|đàn|tỳ bà|nhị hồ|nhã nhạc|múa lân|tết|lễ hội|thêu|cờ vây|cờ tướng", re.I),
        [
            ("assets/images/lessons/v8-m11-l2.jpg", "Nghệ thuật hóa trang và diễn xướng Kinh Kịch Bắc Kinh (UNESCO)", "Peking Opera stagecraft and stylized face painting"),
            ("assets/images/lessons/v8-m11-l1.jpg", "Thủy tụ và làn điệu Côn Khúc Giang Nam", "Kunqu Opera lyrical stage movement"),
            ("assets/images/opera/op-16.jpg", "Kỹ nghệ Biến Diện (Thay mặt nạ nhanh) của Xuyên Kịch Tứ Xuyên", "Sichuan Opera Bian Lian face-changing mastery"),
            ("assets/images/editorial_v8/guqin-zither-instrument.jpg", "Cổ cầm thất huyền và nghệ thuật âm nhạc văn nhân Đông Á", "Seven-string Guqin zither scholarly musical heritage"),
            ("assets/images/opera/inst-04.jpg", "Đàn Tỳ Bà truyền thống — cầu nối âm nhạc Tây Vực và Trung Nguyên", "Traditional Chinese Pipa four-string pear-shaped lute"),
            ("assets/images/lessons/v8-m11-l4.jpg", "Bộ chuông đồng Biên chung cổ đại nền tảng Nhã nhạc cung đình", "Ancient ritual bronze Bianzhong bell chime set"),
            ("assets/images/articles/hero-silk-embroidery-hanfu.jpg", "Trang phục thêu dệt truyền thống và hoa văn tơ lụa Đông Á", "Imperial silk brocade, embroidery, and traditional attire patterns"),
            ("assets/images/articles/hero-spring-festival.jpg", "Không khí lễ hội truyền thống, đèn lồng và nghệ thuật trình diễn dân gian", "Festive Chinese lantern celebration and traditional cultural rites"),
        ],
    ),
    # 7. Science / Astronomy / Cartography / Printing / Dictionaries / Math / Papermaking / Compass / Inventions
    (
        re.compile(r"\b(astronomy|observatory|seismoscope|su-song|clock|cartography|map|printing|woodblock|encyclopedia|shuowen|qieyun|dialect|shen-bao|press|waterwheel|agrotech|gunpowder|luopan|compass|math|jiuzhang)\b|thiên văn|đài quan tinh|bản đồ|mộc bản|in khắc|từ điển|thủy vận|toán thuật|nông thư|bưu chính|dịch trạm", re.I),
        [
            ("assets/images/editorial_v8/ancient-observatory-armillary.jpg", "Hỗn thiên nghi đồng cổ đại dùng quan trắc hoàng đạo và lịch pháp", "Traditional brass armillary sphere at the Ancient Observatory"),
            ("assets/images/editorial_v8/dunhuang-star-chart.jpg", "Bản đồ tinh tú Đôn Hoàng thời Đường — tư liệu thiên văn học cổ nhất còn nguyên vẹn", "Dunhuang Star Chart manuscript mapping northern skies"),
            ("assets/images/museum/han-shipan.jpg", "Thức bàn địa bàn vũ trụ thời Hán — khí cụ định hướng thiên văn sơ kỳ", "Han dynasty Shipan cosmological astrolabe disk"),
            ("assets/images/museum/daming-hunyitu.jpg", "Bản đồ cổ Đại Minh Hỗn Nhất Đồ khổ lớn triều Minh", "Da Ming Hun Yi Tu monumental Ming dynasty world map"),
            ("assets/images/museum/yongle-dadian.jpg", "Trang đại tùng thư Vĩnh Lạc Đại Điển chép tay quy chuẩn chữ Khải", "Yongle Encyclopedia imperial manuscript codex volume"),
            ("assets/images/museum/song-printed-shiji.jpg", "Bản khắc mộc bản Sử Ký đời Tống rõ nét mực", "Song dynasty woodblock-printed Shiji historical text"),
            ("assets/images/museum/tiangong-kaiwu.jpg", "Bách khoa kỹ thuật Thiên Công Khai Vật (1637) của Tống Ứng Tinh", "Tiangong Kaiwu 1637 encyclopedia of Chinese science and crafts"),
            ("assets/images/editorial_v8/qieyun-guangyun-philology.jpg", "Văn bản vận thư Thiết Vận – Quảng Vận phục dựng âm vận Hán ngữ trung cổ", "Qieyun and Guangyun phonological rime dictionary heritage"),
        ],
    ),
    # 8. Calligraphy / Painting / Aesthetics / Poetry / Literature / Classics / Philology
    (
        re.compile(r"\b(calligraphy|wild-cursive|stele|seal-carving|zhuanke|painting|shanshui|ink-painting|poetics|tang-poetry|shijing|chuci|novel|fiction|chuanqi|zaju|wenxin|chengyu|couplet|aesthetic|fable|tales|truyen-kieu|inscriptions|envoy-poetry)\b|thư pháp|cuồng thảo|triện khắc|quốc họa|thủy mặc|thi ca|kinh thi|sở từ|tạp kịch|câu đối|thành ngữ|hoành phi", re.I),
        [
            ("assets/images/articles/hero-calligraphy-five-scripts.jpg", "Ngũ thể thư pháp Trung Hoa (Triện – Lệ – Khải – Hành – Thảo) trên giấy tuyên", "Five classical scripts of Chinese calligraphy on Xuan paper"),
            ("assets/images/museum/lantingji-xu.jpg", "Lan Đình Tập Tự của Vương Hy Chi — đệ nhất hành thư thiên hạ", "Lantingji Xu calligraphy masterwork by Wang Xizhi"),
            ("assets/images/museum/jizhi-wengao-yan-zhenqing.jpg", "Tế Điệt Văn Cảo của Nhan Chân Khanh thời Đường", "Yan Zhenqing's Draft of a Requiem calligraphy treasure"),
            ("assets/images/paintings/22_qianli_jiangshan.jpg", "Trường quyển Thiên Lý Giang Sơn Đồ sắc khoáng thanh lục thời Bắc Tống", "Wang Ximeng's blue-and-green landscape scroll Qianli Jiangshan Tu"),
            ("assets/images/paintings/32_fuchun_shanju.jpg", "Trường quyển thủy mặc Phú Xuân Sơn Cư Đồ của Hoàng Công Vọng", "Huang Gongwang's Dwelling in the Fuchun Mountains ink scroll"),
            ("assets/images/editorial_v8/envoy-poetry-scroll.jpg", "Tập thơ đi sứ Hán văn nối nhịp văn hiến Việt – Trung", "Classical Sino-Vietnamese diplomatic envoy poetry scroll"),
            ("assets/images/editorial_v8/guqin-scholar-studio.jpg", "Không gian thư phòng Cầm Kỳ Thi Họa của văn nhân cổ điển", "Classical scholar studio uniting music, calligraphy, and painting"),
            ("assets/images/literature/lit-mod-01.jpg", "Ấn bản tạp chí Tân Thanh Niên và làn sóng văn học hiện đại đầu thế kỷ XX", "May Fourth New Youth and modern Chinese literary awakening"),
        ],
    ),
    # 9. Silk Road / Ethnic / Minorities / Frontier (Dongba, Thangka, Dai, Dong, Qiang, Miao, Tibet, Northwest)
    (
        re.compile(r"\b(ethnic|naxi|dongba|thangka|tibetan|miao|dong|qiang|bai|uyghur|mongolian|silk-road|karez|zheng-he|gansu|qinghai|xinjiang|lijiang|dali)\b|dân tộc|tây tạng|duy ngô nhĩ|mông cổ|nạp tây|đồng\b|miêu\b|tơ lụa|tây bắc", re.I),
        [
            ("assets/images/expeditions/v7-exp-02.jpg", "Hồ Nguyệt Nha Tuyền và đụn cát Đôn Hoàng trên Con đường Tơ lụa Hà Tây", "Crescent Lake oasis along Dunhuang's Hexi Silk Road"),
            ("assets/images/ethnic/ethnic-06.jpg", "Cổ thành Lệ Giang — trung tâm chữ viết tượng hình Đông Ba của người Nạp Tây", "Naxi Dongba heritage and stone canals in Lijiang Old Town"),
            ("assets/images/ethnic/ethnic-15.jpg", "Ruộng bậc thang Hồng Hà của người Hà Nhì – Di sản Thế giới UNESCO", "UNESCO Hani rice terraces sculpted along Honghe ridges"),
            ("assets/images/academic/lhasa-potala.jpg", "Cung điện Potala tại Lhasa, Tây Tạng", "Historic Potala Palace complex in Lhasa, Tibet"),
            ("assets/images/expeditions/v7-exp-09.jpg", "Tam Tháp Sùng Thánh Tự soi bóng núi Thương Sơn tại Đại Lý", "Dali Three Pagodas beneath Cangshan mountain peaks"),
            ("assets/images/ethnic/ethnic-02.jpg", "Hệ thống kênh thủy lợi ngầm Karez Tân Cương", "Karez subterranean oasis irrigation channels in Turpan"),
        ],
    ),
    # 10. Business / Banks / Trade / Maritime / Ports / Guilds / Coins / Supply Chain / RCEP / GACC / OEM
    (
        re.compile(r"\b(trade|bank|piaohao|huiguan|guild|canton|quanzhou|maritime|hoi-an|b2b|rcep|acfta|gacc|cietac|globalization|supply|customs|coinage|silver|shopping)\b|thương nhân|hội quán|phiếu hiệu|thương cảng|hải quan|hợp đồng|tiền tệ|kinh tế đêm|bảo tàng văn sáng", re.I),
        [
            ("assets/images/editorial_v8/maritime-canton-guild.jpg", "Thương cảng và kiến trúc hội quán Lĩnh Nam trên tuyến hải thương Đông Á", "Canton and maritime merchant guild architecture"),
            ("assets/images/editorial_v8/rishengchang-draft-bank.jpg", "Phiếu hiệu Nhật Thăng Xương (1823) ở Bình Dao", "Historic Rishengchang draft bank vault and ledger hall"),
            ("assets/images/lessons/v5-m6-l5.jpg", "Cảng cổ Tuyền Châu thời Tống – Nguyên (Di sản Thế giới UNESCO 2021)", "Quanzhou Kaiyuan twin pagodas of the medieval maritime emporium"),
            ("assets/images/lessons/v7-m9-l6.jpg", "Chùa Cầu Hội An — dấu ấn giao thương Nhật – Hoa – Việt thế kỷ XVII", "Hoi An Japanese Covered Bridge symbolizing East Asian maritime trade"),
            ("assets/images/supply/v6-sc-35.jpg", "Hành lang vận tải container hàng hải và chứng từ xuất nhập khẩu", "Maritime container shipping and trade documentation corridor"),
            ("assets/images/articles/hero-b2b-negotiation-table.jpg", "Không gian đàm phán thương mại và đối chiếu hợp đồng song ngữ B2B", "Bilingual B2B commercial negotiation and contract review setting"),
        ],
    ),
    # 11. Cuisine / Food / Wine / Noodles / Duck / Soy Sauce / Vinegar / Bencao / Medicine
    (
        re.compile(r"\b(cuisine|roast-duck|yum-cha|dim-sum|noodle|dumpling|tofu|vinegar|baijiu|huangjiu|bencao|medicine|tcm|hotpot|banquet)\b|ẩm thực|vịt quay|hoàng tửu|bạch tửu|mì\b|đậu phụ|bản thảo|dược", re.I),
        [
            ("assets/images/articles/hero-chinese-cuisines.jpg", "Tinh hoa Bát Đại Thái Hệ ẩm thực truyền thống Trung Hoa", "Eight Great Culinary Traditions of Chinese gastronomy"),
            ("assets/images/editorial_v8/eight-cuisines-sichuan.jpg", "Gia vị cay nồng và sắc hương trong nghệ thuật chế biến món Trung Hoa", "Aromatic spices and regional technique in Chinese cuisine"),
            ("assets/images/editorial_v8/chinese-banquet-table.jpg", "Bàn tiệc truyền thống với nghi thức trà lễ và ẩm thực cung đình – dân gian", "Traditional Chinese festive banquet table spread"),
            ("assets/images/museum/acupuncture-bronze.jpg", "Tượng đồng kinh lạc Đông y thời Bắc Tống đối chiếu Bản Thảo Cương Mục", "Northern Song bronze acupuncture figure in Chinese medical history"),
            ("assets/images/herbs/v7-herb-51.jpg", "Vị thuốc và nguyên liệu dược thiện cổ truyền Đông Á", "Classical East Asian medicinal herbs and culinary wellness"),
        ],
    ),
    # 12. History / Law / Philosophy / Confucianism / Xuanxue / Buddhism / Sinosphere / May Fourth
    (
        re.compile(r"\b(dynasty|tang|song|ming|qing|han|qin|shang|zhou|yuan|liao|jin|wei-jin|xuanxue|buddh|tiantai|huayan|confucian|qianjia|zizhi|shiji|may-fourth|republican|sinosphere|legal|law|code|neolithic|erlitou|xuanzang|liu-xie|gongsun)\b|lịch sử|triều|luật|tông phái|phật giáo|huyền học|nho học|văn hóa chữ hán|ngũ tứ|sử học|cận đại", re.I),
        [
            ("assets/images/museum/song-printed-shiji.jpg", "Trang in sử liệu cổ điển — mạch truyền thừa chính sử và pháp chế Đông Á", "Classical historical woodblock printing supporting dynastic historiography"),
            ("assets/images/articles/hero-hundred-schools.jpg", "Bách Gia Chư Tử và cuộc tranh biện triết học cổ điển tại Học cung Tắc Hạ", "Hundred Schools of Thought philosophical debate at Jixia Academy"),
            ("assets/images/articles/hero-academy-shuyuan.jpg", "Không gian Thư viện cổ điển nơi tụ hội học giả và bản khắc kinh điển", "Classical Shuyuan academy hall preserving Confucian-Buddhist dialogue"),
            ("assets/images/academic/tang-sancai-camel.jpg", "Lạc đà Đường Tam Thái — biểu trưng giao lưu văn minh Á–Âu thời Thịnh Đường", "Tang dynasty glazed Sancai Bactrian camel of the Silk Road"),
            ("assets/images/museum/chenghua-cup.jpg", "Hiện vật bảo tàng gốm sứ kinh điển thời Minh", "Imperial Ming dynasty ceramic heirloom"),
            ("assets/images/articles/hero-tang-dynasty.jpg", "Kiến trúc Thịnh Đường và kinh đô Trường An đa văn hóa", "Tang dynasty cosmopolitan urban and architectural heritage"),
            ("assets/images/academic/qin-terracotta.jpg", "Đội quân đất nung Tần Thủy Hoàng tại Tây An, Thiểm Tây", "Qin Terracotta Warriors army excavated near Xi'an"),
            ("assets/images/lessons/v5-m7-l6.jpg", "Bộ đại tùng thư Tứ Khố Toàn Thư lưu trữ cổ tịch tại Văn Uyên Các", "Siku Quanshu imperial manuscript volumes in stitched silk bindings"),
        ],
    ),
]


def choose_monograph_image(art: dict, idx: int, usage_counts: dict[str, int]) -> tuple[str, str, str]:
    aid = str(art.get("id", ""))
    if aid in EXACT_MONO_OVERRIDES:
        src, c_vi, c_en = EXACT_MONO_OVERRIDES[aid]
        ensure_exists(src)
        usage_counts[src] += 1
        return src, c_vi, c_en

    blob = " ".join([
        aid,
        str(art.get("titleEn", "")),
        str(art.get("titleVi", "")),
        str(art.get("category", "")),
    ])

    for rx, choices in SEMANTIC_RULES:
        if rx.search(blob):
            # Prefer least-used choice among matching candidates for maximum visual diversity!
            ranked = sorted(range(len(choices)), key=lambda ci: (usage_counts[choices[ci][0]], (idx + ci) % len(choices)))
            pick = choices[ranked[0]]
            src, c_vi, c_en = pick
            ensure_exists(src)
            usage_counts[src] += 1
            return src, c_vi, c_en

    # Safe fallback across general cultural plates (never tea/food unless culinary!)
    fallback = [
        ("assets/images/museum/forbidden-city-imperial-axis-gate.jpg", "Ngọ Môn Cố Cung Bắc Kinh — biểu trưng kiến trúc cung đình Đông Á", "Meridian Gate of Beijing's Forbidden City"),
        ("assets/images/articles/hero-academy-shuyuan.jpg", "Thư viện cổ điển và truyền thống học thuật Hán văn Đông Á", "Classical Chinese academy and archival scholarship"),
        ("assets/images/museum/song-printed-shiji.jpg", "Bản khắc gỗ thư tịch cổ điển trong kho tàng văn hiến", "Classical East Asian woodblock print edition"),
        ("assets/images/editorial_v8/guqin-scholar-studio.jpg", "Không gian thư phòng văn nhân Trung Hoa cổ điển", "Traditional Chinese literati study space"),
    ]
    ranked = sorted(range(len(fallback)), key=lambda ci: (usage_counts[fallback[ci][0]], idx + ci))
    src, c_vi, c_en = fallback[ranked[0]]
    ensure_exists(src)
    usage_counts[src] += 1
    return src, c_vi, c_en


def load_all_canonical_hero_images() -> dict[str, dict]:
    """Run Node VM to extract authentic hero images from editorialMediaData, editorialMediaPack2026,
    articlesMonographsPart1/2, articlesExpansionBatch2026, compendiaArticles, and articlesExpansionV3_Part1a..5b."""
    probe_js = r"""
const fs = require("fs");
const vm = require("vm");
const sb = {
  window: {}, console,
  setTimeout: () => 0, clearTimeout: () => {},
  document: { addEventListener(){}, getElementById(){ return null; }, querySelectorAll(){ return []; } },
  CCE_ARTICLES: [], CCE_ARTICLES_EN: {}, CCE_COMPENDIA_ARTICLES: [],
  CCE_SEARCH: { markDirty: () => {} },
};
sb.window = sb; sb.globalThis = sb;
vm.createContext(sb);

[
  "src/data/editorialMediaData.js",
  "src/data/editorialMediaPack2026.js",
  "src/data/articlesData.js",
  "src/data/compendiaData.js",
  "src/data/compendiaArticles.js",
  "src/data/articlesMonographsPart1.js",
  "src/data/articlesMonographsPart2.js",
  "src/data/articlesExpansionBatch2026.js",
  "src/data/v3/articlesExpansionV3_Part1a.js",
  "src/data/v3/articlesExpansionV3_Part1b.js",
  "src/data/v3/articlesExpansionV3_Part2a.js",
  "src/data/v3/articlesExpansionV3_Part2b.js",
  "src/data/v3/articlesExpansionV3_Part3a.js",
  "src/data/v3/articlesExpansionV3_Part3b.js",
  "src/data/v3/articlesExpansionV3_Part4.js",
  "src/data/v3/articlesExpansionV3_Part5a.js",
  "src/data/v3/articlesExpansionV3_Part5b.js",
].forEach(f => {
  if (fs.existsSync(f)) vm.runInContext(fs.readFileSync(f, "utf8"), sb, { filename: f });
});

const out = {};
const em = sb.CCE_EDITORIAL_MEDIA || {};
const emImgs = em.images || {};
const emArts = em.articleEditorial || {};
for (const a of (sb.CCE_ARTICLES || []).concat(sb.CCE_COMPENDIA_ARTICLES || [])) {
  if (!a || !a.id) continue;
  let hi = null;
  const ed = emArts[a.id];
  if (ed && (ed.thumbnailConfig || ed.heroImageId)) {
    const imgObj = emImgs[(ed.thumbnailConfig && ed.thumbnailConfig.imageId) || ed.heroImageId];
    if (imgObj && imgObj.src) {
      hi = { src: imgObj.src, caption: imgObj.caption || imgObj.titleVi || a.titleVi || "" };
    }
  }
  if (!hi && a.heroImage) {
    hi = typeof a.heroImage === "string"
      ? { src: a.heroImage, caption: a.titleVi || "" }
      : { src: a.heroImage.src, caption: a.heroImage.caption || a.heroImage.captionVi || a.titleVi || "" };
  }
  if (hi && hi.src) out[a.id] = hi;
}
process.stdout.write(JSON.stringify(out));
"""
    res = subprocess.run(["node", "-"], input=probe_js, text=True, capture_output=True, encoding="utf-8", check=True)
    return json.loads(res.stdout)


def upgrade_all_monographs() -> None:
    bun_path = ROOT / "src/data/cce_v10_upgrade/cceV10Monographs294Bundle.js"
    bun_txt = bun_path.read_text(encoding="utf-8")
    m_new = re.search(r"var NEW_MONOGRAPHS = (\[.*?\]);\s*var LIVE108_PATCHES", bun_txt, re.S)
    m_patches = re.search(r"var LIVE108_PATCHES = (\{.*?\});\s*var CONSOLIDATION_REPORT", bun_txt, re.S)
    m_rep = re.search(r"var CONSOLIDATION_REPORT = (\{.*?\});", bun_txt, re.S)
    if not (m_new and m_patches and m_rep):
        raise RuntimeError("Could not parse cceV10Monographs294Bundle.js arrays")

    prefix = bun_txt[: m_new.start()]
    suffix = bun_txt[m_rep.end() :]
    new_monos = json.loads(m_new.group(1))
    live_patches_raw = m_patches.group(1)
    report_raw = m_rep.group(1)

    usage_counts: dict[str, int] = defaultdict(int)
    for idx, art in enumerate(new_monos):
        src, cap_vi, cap_en = choose_monograph_image(art, idx, usage_counts)
        hi = art.get("heroImage")
        if not isinstance(hi, dict):
            hi = {}
        hi["src"] = src
        hi["caption"] = cap_vi
        hi["captionVi"] = cap_vi
        hi["captionEn"] = cap_en
        art["heroImage"] = hi

    # Rewrite cceV10Monographs294Bundle.js preserving exact wrapper & LIVE108_PATCHES
    new_bun_txt = (
        f"{prefix}var NEW_MONOGRAPHS = {json.dumps(new_monos, ensure_ascii=False)};\n"
        f"  var LIVE108_PATCHES = {live_patches_raw};\n"
        f"  var CONSOLIDATION_REPORT = {report_raw};{suffix}"
    )
    bun_path.write_text(new_bun_txt, encoding="utf-8")

    # Re-emit 4 synchronized shards cleanly
    shard_count = 4
    shard_size = max(1, (len(new_monos) + shard_count - 1) // shard_count)
    shard_idx_by_id: dict[str, int] = {}
    for shard_num in range(1, shard_count + 1):
        chunk = new_monos[(shard_num - 1) * shard_size : shard_num * shard_size]
        for a in chunk:
            if a.get("id"):
                shard_idx_by_id[a["id"]] = shard_num
        shard_js = (
            f"/* CCE v10.4 Monograph Shard {shard_num}/{shard_count} ({len(chunk)} Essays, Pure ES5 IIFE) */\n"
            "(function () {\n"
            '  "use strict";\n'
            f"  var SHARD_MONOS = {json.dumps(chunk, ensure_ascii=False)};\n"
            "  window.CCE_ARTICLES = Array.isArray(window.CCE_ARTICLES) ? window.CCE_ARTICLES : [];\n"
            "  var idxById = {};\n"
            "  for (var i = 0; i < window.CCE_ARTICLES.length; i++) {\n"
            "    var cur = window.CCE_ARTICLES[i];\n"
            "    if (cur && cur.id && !Object.prototype.hasOwnProperty.call(idxById, cur.id)) idxById[cur.id] = i;\n"
            "  }\n"
            "  for (var j = 0; j < SHARD_MONOS.length; j++) {\n"
            "    var art = SHARD_MONOS[j];\n"
            "    if (!art || !art.id) continue;\n"
            "    if (Object.prototype.hasOwnProperty.call(idxById, art.id)) {\n"
            "      window.CCE_ARTICLES[idxById[art.id]] = art;\n"
            "    } else {\n"
            "      idxById[art.id] = window.CCE_ARTICLES.length;\n"
            "      window.CCE_ARTICLES.push(art);\n"
            "    }\n"
            "  }\n"
            "  if (window.CCE_SEARCH && typeof window.CCE_SEARCH.markDirty === 'function') window.CCE_SEARCH.markDirty();\n"
            "})();\n"
        )
        (ROOT / f"src/data/cce_v10_upgrade/cceV10MonographsShard{shard_num}.js").write_text(shard_js, encoding="utf-8")

    # Sync cceV10SearchManifest.js so ALL 271 stubs have verified semantic heroImage!
    man_path = ROOT / "src/data/cce_v10_upgrade/cceV10SearchManifest.js"
    man_txt = man_path.read_text(encoding="utf-8")
    m_stubs = re.search(r"var STUBS = (\[[\s\S]*?\]);", man_txt)
    if not m_stubs:
        raise RuntimeError("Could not parse STUBS in cceV10SearchManifest.js")
    stubs = json.loads(m_stubs.group(1))
    mono_by_id = {a["id"]: a for a in new_monos if a.get("id")}
    canonical_heroes = load_all_canonical_hero_images()

    fixed_null = 0
    for st in stubs:
        sid = st.get("id")
        if sid in mono_by_id:
            hi = mono_by_id[sid].get("heroImage") or {}
            st["heroImage"] = {"src": hi.get("src"), "caption": hi.get("caption", "")}
        elif sid in EXACT_MONO_OVERRIDES:
            src, cap_vi, _ = EXACT_MONO_OVERRIDES[sid]
            ensure_exists(src)
            st["heroImage"] = {"src": src, "caption": cap_vi}
            fixed_null += 1
        elif sid in canonical_heroes:
            ch = canonical_heroes[sid]
            if (ROOT / str(ch["src"])).is_file():
                st["heroImage"] = {"src": ch["src"], "caption": ch.get("caption", st.get("titleVi", ""))}
                fixed_null += 1

    new_man_txt = man_txt[: m_stubs.start()] + f"var STUBS = {json.dumps(stubs, ensure_ascii=False)};" + man_txt[m_stubs.end() :]
    man_path.write_text(new_man_txt, encoding="utf-8")

    top_reused = sorted(usage_counts.items(), key=lambda kv: -kv[1])[:8]
    null_left = sum(1 for st in stubs if not (st.get("heroImage") and st["heroImage"].get("src")))
    print(f"[Monographs] Upgraded {len(new_monos)} full monographs + {len(stubs)} manifest stubs ({fixed_null} v23 stubs hydrated, null_left={null_left}).")
    print(f"[Monographs] Max reuse count across 186 monographs: {top_reused}")


if __name__ == "__main__":
    clean_interactive_hubs()
    upgrade_v3_hero_maps()
    upgrade_all_monographs()
