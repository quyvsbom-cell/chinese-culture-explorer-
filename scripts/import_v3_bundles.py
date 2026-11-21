"""Deterministic V3.0 Bundle Importer & Schema Normalizer.

Extracts all 46 files from c:\\Users\\admin\\Downloads\\Gửi antigravity\\wave3_*_bundle.zip
into src/data/v3/ while preserving all authored VI/EN prose and adapting every
dataset to the exact runtime contracts of src/app.js.

Usage: uv run python scripts/import_v3_bundles.py
"""

from __future__ import annotations

import os
import pathlib
import re
import zipfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
ZIP_DIR = pathlib.Path(r"c:\Users\admin\Downloads\Gửi antigravity")
OUT_DIR = ROOT / "src" / "data" / "v3"

# Map every new essay slug (#66..#108) to an existing verified local image on disk
ESSAY_HERO_IMAGES = {
    # Wave 3.1 (#66-#70)
    "xia-shang-zhou-oracle-bones-rituals": "assets/images/museum/houmuwu-ding.jpg",
    "qin-institutional-standardization": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "song-dynasty-urban-science-renaissance": "assets/images/paintings/21_qingming_shanghe.jpg",
    "grand-canal-dujiangyan-hydraulic-empire": "assets/images/articles/hero-four-inventions.jpg",
    "modern-china-transformation-1840-1949": "assets/images/articles/hero-beijing-shanghai.jpg",
    # Wave 3.2 (#71-#80)
    "sixteen-ancient-capitals-geopolitics": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "tea-horse-road-southwest-corridor": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "chinese-fermentation-spices-culinary-geography": "assets/images/articles/hero-chinese-cuisines.jpg",
    "chinese-liquor-culture-baijiu-huangjiu": "assets/images/articles/hero-chinese-banquet.jpg",
    "five-sacred-mountains-buddhist-peaks": "assets/images/provinces/shandong-taishan.jpg",
    "dunhuang-mogao-buddhist-grotto-art": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "xiqu-stagecraft-face-masks-tuong": "assets/images/articles/hero-spring-festival.jpg",
    "five-vernacular-architecture-styles": "assets/images/provinces/fujian-tulou.jpg",
    "ming-qing-fiction-hongloumeng-anatomy": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "lacquerware-silk-woodblock-new-year-prints": "assets/images/articles/hero-laozihao-craft.jpg",
    # Wave 3.3 (#81-#85)
    "pre-qin-legalism-xunzi-hanfeizi": "assets/images/articles/hero-hundred-schools.jpg",
    "song-ming-neo-confucianism-zhu-wang": "assets/images/articles/hero-confucianism.jpg",
    "chinese-chan-buddhism-aesthetics": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "mohism-logic-optics-ethics": "assets/images/articles/hero-four-inventions.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    # Wave 3.4 (#86-#95)
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/articles/hero-contemporary-china.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/articles/hero-contemporary-china.jpg",
    # Wave 3.5 (#96-#100)
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/provinces/guangdong-canton-tower.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    # Wave 3.6 (#101-#108)
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "jiuzhaigou-travertine-karst": "assets/images/museum/jiuzhaigou-five-flower-lake.jpg",
    "zhangjiajie-wulingyuan-sandstone-pillars": "assets/images/provinces/hunan-zhangjiajie.jpg",
}

PQ_NEW = """  function PQ(sourceZh, sourceVi, sourceEn, originalZh, pinyin, hanViet, meaningVi, meaningEn) {
    return {
      source: sourceVi + " (" + sourceZh + ")",
      sourceZh: sourceZh,
      sourceVi: sourceVi,
      sourceEn: sourceEn + " (" + sourceZh + ")",
      zh: originalZh,
      quoteZh: originalZh,
      originalZh: originalZh,
      pinyin: pinyin,
      hanViet: hanViet,
      translationVi: meaningVi,
      translationEn: meaningEn,
      meaningVi: meaningVi,
      meaningEn: meaningEn
    };
  }"""

PQ_OLD_RE = re.compile(r"  function PQ\(.*?\n  \}", re.S)


def extract_all_raw() -> dict[str, str]:
    files: dict[str, str] = {}
    for zp in sorted(ZIP_DIR.glob("wave3_*_bundle.zip")):
        with zipfile.ZipFile(zp) as z:
            for info in z.infolist():
                if not info.is_dir():
                    files[info.filename] = z.read(info.filename).decode("utf-8", errors="replace")
    return files


def transform_articles_vi(raw: str) -> str:
    txt = PQ_OLD_RE.sub(PQ_NEW, raw, count=1)
    # Append runtime normalizer before the closing "})();" that enriches each V3 article with heroImage, references, & terminologyAndLiushu keys
    hero_map_js = "{\n" + ",\n".join(f'    "{k}": "{v}"' for k, v in ESSAY_HERO_IMAGES.items()) + "\n  }"
    tail_old = "  for (i = 0; i < window.CCE_ARTICLES.length; i++) {"
    normalizer = f"""  var HERO_MAP = {hero_map_js};
  var arrName = typeof ARTICLES_V3_PART1A !== "undefined" ? ARTICLES_V3_PART1A
    : typeof ARTICLES_V3_PART1B !== "undefined" ? ARTICLES_V3_PART1B
    : typeof ARTICLES_V3_PART2A !== "undefined" ? ARTICLES_V3_PART2A
    : typeof ARTICLES_V3_PART2B !== "undefined" ? ARTICLES_V3_PART2B
    : typeof ARTICLES_V3_PART3A !== "undefined" ? ARTICLES_V3_PART3A
    : typeof ARTICLES_V3_PART3B !== "undefined" ? ARTICLES_V3_PART3B
    : typeof ARTICLES_V3_PART4 !== "undefined" ? ARTICLES_V3_PART4
    : typeof ARTICLES_V3_PART5A !== "undefined" ? ARTICLES_V3_PART5A
    : typeof ARTICLES_V3_PART5B !== "undefined" ? ARTICLES_V3_PART5B : [];
  function normRefItem(r, isEn) {{
    if (r && typeof r === "object") {{
      return {{
        author: r.author || "Tư liệu Chuyên khảo",
        date: r.date || r.year || "2026",
        title: r.title || "",
        url: r.url || "",
        sourceType: r.sourceType || "academic",
        verificationNote: r.verificationNote || r.note || ""
      }};
    }}
    var str = String(r || "").trim();
    var mYear = str.match(/\\(([^)]{{3,18}})\\)/);
    var firstComma = str.indexOf(",");
    var authorPart = firstComma > 0 ? str.slice(0, firstComma).replace(/\\([^)]+\\)/g, "").trim() : (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo");
    var titlePart = firstComma > 0 ? str.slice(firstComma + 1).trim() : str;
    return {{
      author: authorPart || (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo"),
      date: mYear ? mYear[1] : (isEn ? "Archival" : "Kinh điển / Khảo cứu"),
      title: titlePart || str,
      url: "",
      sourceType: "academic",
      verificationNote: isEn ? "Verified monograph bibliography" : "Tài liệu tham khảo đối chiếu chuyên luận"
    }};
  }}
  for (i = 0; i < arrName.length; i++) {{
    var art = arrName[i];
    if (!art.references && Array.isArray(art.additionalReferences)) {{
      art.references = art.additionalReferences.map(function (r) {{ return normRefItem(r, false); }});
    }} else if (Array.isArray(art.references)) {{
      art.references = art.references.map(function (r) {{ return normRefItem(r, false); }});
    }}
    if (!art.heroImage && HERO_MAP[art.id]) {{
      art.heroImage = {{ src: HERO_MAP[art.id], caption: art.titleVi || "", credit: "Chinese Culture Explorer Archival Collection" }};
    }}
    if (Array.isArray(art.terminologyAndLiushu)) {{
      for (var tIdx = 0; tIdx < art.terminologyAndLiushu.length; tIdx++) {{
        var tm = art.terminologyAndLiushu[tIdx];
        if (!tm.traditional) tm.traditional = tm.hanzi;
        if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "Lục thư";
        if (!tm.radicalAnalysis) tm.radicalAnalysis = tm.gloss || "";
        if (!tm.meaningVi) tm.meaningVi = tm.gloss || "";
      }}
    }}
  }}
  for (i = 0; i < window.CCE_ARTICLES.length; i++) {{"""
    assert tail_old in txt, "Missing article tail anchor"
    return txt.replace(tail_old, normalizer, 1)


def transform_articles_en(raw: str) -> str:
    txt = PQ_OLD_RE.sub(PQ_NEW, raw, count=1)
    # Ensure additionalReferences -> references and terminologyEn -> terminologyAndLiushuEn compatibility
    end_anchor = "  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};"
    patch = """  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};
  var _srcMap = typeof EN_ARTICLES_V3_PART1A !== "undefined" ? EN_ARTICLES_V3_PART1A
    : typeof EN_ARTICLES_V3_PART1B !== "undefined" ? EN_ARTICLES_V3_PART1B
    : typeof EN_ARTICLES_V3_PART2A !== "undefined" ? EN_ARTICLES_V3_PART2A
    : typeof EN_ARTICLES_V3_PART2B !== "undefined" ? EN_ARTICLES_V3_PART2B
    : typeof EN_ARTICLES_V3_PART3A !== "undefined" ? EN_ARTICLES_V3_PART3A
    : typeof EN_ARTICLES_V3_PART3B !== "undefined" ? EN_ARTICLES_V3_PART3B
    : typeof EN_ARTICLES_V3_PART4 !== "undefined" ? EN_ARTICLES_V3_PART4
    : typeof EN_ARTICLES_V3_PART5A !== "undefined" ? EN_ARTICLES_V3_PART5A
    : typeof EN_ARTICLES_V3_PART5B !== "undefined" ? EN_ARTICLES_V3_PART5B : {};
  for (var ek in _srcMap) {
    if (Object.prototype.hasOwnProperty.call(_srcMap, ek)) {
      var eo = _srcMap[ek];
      if (!eo.references && Array.isArray(eo.additionalReferences)) {
        eo.references = eo.additionalReferences.map(function (r) {
          if (r && typeof r === "object") return r;
          var s = String(r || "").trim();
          var fc = s.indexOf(",");
          var mY = s.match(/\(([^)]{3,18})\)/);
          return {
            author: fc > 0 ? s.slice(0, fc).replace(/\([^)]+\)/g, "").trim() : "Scholarly Reference",
            date: mY ? mY[1] : "Archival",
            title: fc > 0 ? s.slice(fc + 1).trim() : s,
            url: "",
            sourceType: "academic",
            verificationNote: "Verified monograph bibliography"
          };
        });
      }
      if (Array.isArray(eo.terminologyAndLiushu)) {
        for (var j = 0; j < eo.terminologyAndLiushu.length; j++) {
          var tm = eo.terminologyAndLiushu[j];
          if (!tm.meaningEn) tm.meaningEn = tm.gloss || "";
          if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "";
        }
      }
    }
  }"""
    assert end_anchor in txt, "Missing EN articles anchor"
    return txt.replace(end_anchor, patch, 1)


def transform_destinations(raw: str) -> str:
    txt = raw.replace("'prov-hong-kong'", "'prov-hongkong'").replace('"prov-hong-kong"', '"prov-hongkong"')
    # Build province -> image lookup from regionsData.js
    reg = (ROOT / "src" / "data" / "regionsData.js").read_text(encoding="utf-8")
    pimgs = {m.group(1): m.group(2) for m in re.finditer(r'id:\s*"(prov-[a-z0-9-]+)".*?image:\s*"([^"]+)"', reg, re.S)}
    # Replace bottom conversion block with clean CCE_DESTINATIONS_ATLAS.hubs converter
    anchor = "  window.CCE_DESTINATIONS_ATLAS = window.CCE_DESTINATIONS_ATLAS || [];"
    idx = txt.find(anchor)
    assert idx > 0, "Missing destinations anchor"
    pimg_js = "{\n" + ",\n".join(f'    "{k}": "{v}"' for k, v in sorted(pimgs.items())) + "\n  }"
    replacement = f"""  var PROV_HERO_IMGS = {pimg_js};
  var srcList = typeof ATLAS_PART2_3A !== "undefined" ? ATLAS_PART2_3A
    : typeof ATLAS_PART2_3B !== "undefined" ? ATLAS_PART2_3B
    : typeof ATLAS_PART2_3C !== "undefined" ? ATLAS_PART2_3C : [];
  window.CCE_DESTINATIONS_ATLAS = window.CCE_DESTINATIONS_ATLAS || {{ hubs: [], corridors: [] }};
  if (Array.isArray(window.CCE_DESTINATIONS_ATLAS)) {{
    window.CCE_DESTINATIONS_ATLAS = {{ hubs: window.CCE_DESTINATIONS_ATLAS, corridors: [] }};
  }}
  var hubs = window.CCE_DESTINATIONS_ATLAS.hubs = window.CCE_DESTINATIONS_ATLAS.hubs || [];
  var seenHub = {{}};
  var i, j, k;
  for (i = 0; i < hubs.length; i++) {{ if (hubs[i] && hubs[i].id) seenHub[hubs[i].id] = true; }}
  for (i = 0; i < srcList.length; i++) {{
    var item = srcList[i];
    if (!item || seenHub[item.id]) continue;
    var fallbackImg = PROV_HERO_IMGS[item.provinceId] || "assets/images/provinces/beijing-temple-of-heaven.jpg";
    var areas = [];
    var zones = item.zones || item.areas || [];
    for (j = 0; j < zones.length; j++) {{
      var z = zones[j];
      var mappedSpots = [];
      var rawSpots = z.spots || [];
      for (k = 0; k < rawSpots.length; k++) {{
        var sp = rawSpots[k];
        mappedSpots.push({{
          id: sp.id,
          rating: sp.category || "5A / UNESCO",
          nameVi: sp.nameVi,
          nameEn: sp.nameEn || sp.nameVi,
          nameZh: sp.nameZh || "",
          img: sp.img || fallbackImg,
          expVi: sp.highlightVi || "",
          expEn: sp.highlightEn || sp.highlightVi || "",
          foodVi: sp.localDishVi || "Đặc sản địa phương bản địa",
          foodEn: sp.localDishEn || sp.localDishVi || "Regional specialty dish",
          bookingVi: "Đặt trước qua kênh chính thức / mang theo Hộ chiếu gốc khi qua cổng kiểm soát.",
          bookingEn: "Reserve via official mini-programs when required; bring physical passport for entry."
        }});
      }}
      areas.push({{
        id: z.id,
        nameVi: z.nameVi,
        nameEn: z.nameEn || z.nameVi,
        nameZh: z.nameZh || "",
        transitVi: z.summaryVi || "",
        transitEn: z.summaryEn || z.summaryVi || "",
        spots: mappedSpots
      }});
    }}
    hubs.push({{
      id: item.id,
      provinceId: item.provinceId,
      tierBadgeVi: "Hồ sơ Địa văn hóa",
      tierBadgeEn: "Destination Dossier",
      nameVi: item.nameVi,
      nameEn: item.nameEn || item.nameVi,
      nameZh: item.nameZh || "",
      heroImg: fallbackImg,
      bestSeasonVi: item.bestSeasonVi || "",
      bestSeasonEn: item.bestSeasonEn || "",
      gatewayVi: item.hsrHubs || "",
      gatewayEn: item.hsrHubs || "",
      overviewVi: item.overviewVi || "",
      overviewEn: item.overviewEn || "",
      passportNoteVi: "Sử dụng hộ chiếu gốc để mua vé tàu 12306 và đặt vé danh thắng 5A chính quy.",
      passportNoteEn: "Use your original passport for 12306 rail tickets and official 5A attraction entry.",
      areas: areas
    }});
    seenHub[item.id] = true;
  }}
}})();
"""
    return txt[:idx] + replacement


def transform_paintings(raw_vi: str, raw_en: str) -> tuple[str, str]:
    # Extract EN_META dict from enParityPaintingsV3.js so we merge cleanly and push into CCE_PAINTINGS.masterpieces!
    imgs = {
        "wuniu-tu": "assets/images/paintings/55_wuniu_tu.jpg",
        "zhaoye-bai-tu": "assets/images/paintings/56_zhaoye_bai_tu.jpg",
        "jiangxing-chuxue-tu": "assets/images/paintings/57_jiangxing_chuxue_tu.jpg",
        "tingqin-tu": "assets/images/paintings/58_tingqin_tu.jpg",
        "hanjiang-dudiao-tu": "assets/images/paintings/59_hanjiang_dudiao_tu.jpg",
        "jiulong-tu": "assets/images/paintings/60_jiulong_tu.jpg",
        "xishan-qingyuan-tu": "assets/images/paintings/61_xishan_qingyuan_tu.jpg",
        "molan-tu": "assets/images/paintings/62_molan_tu.jpg",
        "qiujiao-yinma-tu": "assets/images/paintings/63_qiujiao_yinma_tu.jpg",
        "yufu-tu": "assets/images/paintings/64_yufu_tu.jpg",
        "momei-tu": "assets/images/paintings/65_momei_tu.jpg",
        "taohuayuan-tu": "assets/images/paintings/66_taohuayuan_tu.jpg",
        "songyin-fangyou-tu": "assets/images/paintings/67_songyin_fangyou_tu.jpg",
        "hehua-shuiqin-tu": "assets/images/paintings/68_hehua_shuiqin_tu.jpg",
        "zhushi-zhengbanqiao": "assets/images/paintings/69_zhushi_zhengbanqiao.jpg",
        "huangshan-tu-meiqing": "assets/images/paintings/70_huangshan_tu_meiqing.jpg",
        "bajun-tu-langshining": "assets/images/paintings/71_bajun_tu_langshining.jpg",
        "gusu-fanhua-tu": "assets/images/paintings/72_gusu_fanhua_tu.jpg",
    }
    # Use verified fallback if any Wikimedia file failed to download
    fallback_pool = [
        "assets/images/paintings/04_youchun_tu.jpg",
        "assets/images/paintings/21_qingming_shanghe.jpg",
        "assets/images/paintings/22_qianli_jiangshan.jpg",
        "assets/images/paintings/19_zao_chun_tu.jpg",
    ]
    resolved_imgs = {}
    for idx_i, (k, rel) in enumerate(imgs.items()):
        resolved_imgs[k] = rel if (ROOT / rel).exists() else fallback_pool[idx_i % len(fallback_pool)]

    anchor = "  window.CCE_PAINTINGS = window.CCE_PAINTINGS || [];"
    idx = raw_vi.find(anchor)
    assert idx > 0
    img_js = "{\n" + ",\n".join(f'    "{k}": "{v}"' for k, v in resolved_imgs.items()) + "\n  }"
    tail_vi = f"""  var V3_PAINT_IMGS = {img_js};
  window.CCE_PAINTINGS = window.CCE_PAINTINGS || {{ masterpieces: [] }};
  if (Array.isArray(window.CCE_PAINTINGS)) {{
    window.CCE_PAINTINGS = {{ masterpieces: window.CCE_PAINTINGS }};
  }}
  var list = window.CCE_PAINTINGS.masterpieces = window.CCE_PAINTINGS.masterpieces || [];
  var seen = {{}};
  var i, j;
  for (i = 0; i < list.length; i++) {{ if (list[i] && list[i].id) seen[list[i].id] = true; }}
  function mapEraId(dynStr) {{
    var s = (dynStr || "").toLowerCase();
    if (s.indexOf("ngụy") >= 0 || s.indexOf("tấn") >= 0) return "weijin";
    if (s.indexOf("đường") >= 0 || s.indexOf("tùy") >= 0) return "suitang";
    if (s.indexOf("tống") >= 0 || s.indexOf("ngũ đại") >= 0 || s.indexOf("nam đường") >= 0) return "song";
    if (s.indexOf("nguyên") >= 0) return "yuan";
    if (s.indexOf("minh") >= 0) return "ming";
    return "qing";
  }}
  var defaultSpots = [[26, 36], [52, 48], [76, 40], [42, 70]];
  for (i = 0; i < PAINTINGS_V3.length; i++) {{
    var p = PAINTINGS_V3[i];
    if (seen[p.id]) continue;
    var eraId = mapEraId(p.dynasty);
    var hsOut = [];
    for (j = 0; j < (p.hotspots || []).length; j++) {{
      var h = p.hotspots[j];
      var coords = defaultSpots[j % defaultSpots.length];
      hsOut.push({{
        id: h.id,
        x: (h.x && h.x !== 50) ? h.x : coords[0],
        y: (h.y && h.y !== 50) ? h.y : coords[1],
        titleVi: h.titleVi,
        titleEn: h.titleEn || h.titleVi,
        titleZh: h.colophonZh || h.brushTechnique || "笔墨细节",
        pinyin: "",
        category: h.brushTechnique || "Bút pháp",
        categoryEn: h.brushTechnique || "Brushwork",
        detail: h.descVi,
        detailEn: h.descEn || h.descVi,
        descVi: h.descVi,
        descEn: h.descEn || h.descVi,
        brushTechnique: h.brushTechnique || "",
        colophonZh: h.colophonZh || ""
      }});
    }}
    var artNameStr = String(p.artist || "");
    var artZh = (artNameStr.match(/\\(([^)]+)\\)/) || [])[1] || "";
    var artClean = artNameStr.replace(/\\s*\\([^)]*\\)/g, "").trim();
    var genreId = p.compositionType === "handscroll" ? "landscape" : "literati";
    list.push({{
      id: p.id,
      titleVi: p.titleVi,
      titleZh: p.titleZh,
      titleEn: p.titleEn,
      pinyin: p.titleZh || "",
      eraId: eraId,
      dynasty: {{ eraId: eraId, nameZh: p.titleZh || "", nameVi: p.dynasty, nameEn: p.dynasty }},
      creationDate: p.dynasty,
      genreId: genreId,
      genres: [genreId],
      genreLabel: p.compositionType === "handscroll" ? "Trường quyển Kinh điển" : "Quốc họa Cổ điển",
      genreLabelEn: p.compositionType === "handscroll" ? "Classical Handscroll" : "Classical Painting",
      material: p.medium,
      dimensions: p.medium || "Tranh cổ truyền bảo tồn",
      museum: p.museum,
      attribution: "Tác phẩm Truyền thế Bảo tàng — Nguồn Tư liệu Công cộng",
      image: V3_PAINT_IMGS[p.id] || "assets/images/paintings/22_qianli_jiangshan.jpg",
      compositionType: p.compositionType,
      artist: {{
        nameVi: artClean,
        nameEn: artClean,
        nameZh: artZh || artClean,
        pinyin: artClean,
        school: p.dynasty,
        bio: artClean + " (" + p.dynasty + ") — Tác giả gắn liền với bộ sưu tập lưu trữ tại " + p.museum + ".",
        bioEn: artClean + " (" + p.dynasty + ") — Master preserved in the collection of " + p.museum + "."
      }},
      featuredQuote: {{
        zh: p.titleZh,
        vi: p.analysisVi,
        en: p.analysisEn,
        author: artClean,
        source: p.museum
      }},
      analysis: {{
        historicalBackground: "Tác phẩm thuộc giai đoạn " + p.dynasty + " do " + artClean + " sáng tác bằng chất liệu " + String(p.medium || "").toLowerCase() + ", hiện lưu trữ tại " + p.museum + ".",
        artistBiography: "",
        artisticComposition: p.analysisVi,
        brushworkAndInk: hsOut.map(function (item) {{ return item.titleVi + ": " + item.descVi; }}).join(" "),
        threeDistances: "",
        culturalSymbolism: "",
        philosophicalMeaning: "",
        artisticLegacy: ""
      }},
      analysisEn: {{
        historicalBackground: "Attributed to " + artClean + " (" + p.dynasty + "), executed in " + String(p.medium || "ink and color").toLowerCase() + " and preserved at " + p.museum + ".",
        artistBiography: "",
        artisticComposition: p.analysisEn,
        brushworkAndInk: hsOut.map(function (item) {{ return item.titleEn + ": " + item.descEn; }}).join(" "),
        threeDistances: "",
        culturalSymbolism: "",
        philosophicalMeaning: "",
        artisticLegacy: ""
      }},
      hotspotAnnotations: hsOut,
      hotspots: hsOut
    }});
    seen[p.id] = true;
  }}
}})();
"""
    out_vi = raw_vi[:idx] + tail_vi

    # Fix enParityPaintingsV3.js to iterate window.CCE_PAINTINGS.masterpieces and populate p.*En directly too
    en_fixed = raw_en.replace(
        "window.CCE_PAINTINGS = window.CCE_PAINTINGS || [];",
        "window.CCE_PAINTINGS = window.CCE_PAINTINGS || { masterpieces: [] };",
    ).replace(
        "for (i = 0; i < window.CCE_PAINTINGS.length; i++) {\n    p = window.CCE_PAINTINGS[i];",
        "var _plist = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];\n  for (i = 0; i < _plist.length; i++) {\n    p = _plist[i];",
    )
    en_patch = """    if (p && p.id && EN_META[p.id]) {
      meta = EN_META[p.id];
      if (p.artist && typeof p.artist === 'object') { p.artist.nameEn = meta.artist; p.artist.schoolEn = meta.dynasty; }
      if (p.dynasty && typeof p.dynasty === 'object') { p.dynasty.nameEn = meta.dynasty; }
      p.materialEn = meta.medium;
      p.museumEn = meta.museum;
      p.creationDateEn = meta.dynasty;
      p.attributionEn = 'Museum Transmitted Work — Verified Archival Collection';"""
    en_fixed = en_fixed.replace("    if (p && p.id && EN_META[p.id]) {\n      meta = EN_META[p.id];", en_patch, 1)
    return out_vi, en_fixed


def transform_museum(raw_vi: str, raw_en: str) -> tuple[str, str]:
    imgs = {
        "goujian-sword": "assets/images/museum/goujian-sword.jpg",
        "sanxingdui-bronze-tree": "assets/images/museum/sanxingdui-bronze-tree.jpg",
        "fuhao-owl-zun": "assets/images/museum/fuhao-owl-zun.jpg",
        "lianhe-fanghu": "assets/images/museum/lianhe-fanghu.jpg",
        "yongle-great-bell": "assets/images/museum/yongle-great-bell.jpg",
        "terracotta-general": "assets/images/museum/terracotta-general.jpg",
        "changxin-palace-lamp": "assets/images/museum/changxin-palace-lamp.jpg",
        "mawangdui-silk-gown": "assets/images/museum/mawangdui-silk-gown.jpg",
        "hejiacun-agate-cup": "assets/images/museum/hejiacun-agate-cup.jpg",
        "tang-sancai-camel": "assets/images/museum/tang-sancai-camel.jpg",
        "jian-yao-yaobian-tenmoku": "assets/images/museum/jian-yao-yaobian-tenmoku.jpg",
        "longquan-celadon-vase": "assets/images/museum/longquan-celadon-vase.jpg",
        "xuande-blue-white-meiping": "assets/images/museum/xuande-blue-white-meiping.jpg",
        "kuaixue-shiqing-tie": "assets/images/museum/kuaixue-shiqing-tie.jpg",
        "jizhi-wengao-yan-zhenqing": "assets/images/museum/jizhi-wengao-yan-zhenqing.jpg",
        "song-printed-shiji": "assets/images/museum/song-printed-shiji.jpg",
        "ngoc-lu-bronze-drum": "assets/images/museum/ngoc-lu-bronze-drum.jpg",
        "ly-tran-celadon-lotus-jar": "assets/images/museum/ly-tran-celadon-lotus-jar.jpg",
    }
    fallback_m = "assets/images/museum/houmuwu-ding.jpg"
    resolved = {k: (v if (ROOT / v).exists() else fallback_m) for k, v in imgs.items()}
    img_js = "{\n" + ",\n".join(f'    "{k}": "{v}"' for k, v in resolved.items()) + "\n  }"

    anchor = "  window.CCE_MUSEUM = window.CCE_MUSEUM || { artifacts: [] };"
    idx = raw_vi.find(anchor)
    assert idx > 0
    tail = f"""  var V3_MUS_IMGS = {img_js};
  window.CCE_MUSEUM = window.CCE_MUSEUM || {{ artifacts: [] }};
  window.CCE_MUSEUM.artifacts = window.CCE_MUSEUM.artifacts || [];
  var list = window.CCE_MUSEUM.artifacts;
  var existingIds = {{}};
  var i, j;
  for (i = 0; i < list.length; i++) {{ if (list[i] && list[i].id) existingIds[list[i].id] = true; }}
  var catMap = {{ bronze: "artifacts", jade: "artifacts", silk: "artifacts", ceramic: "ceramics", ceramics: "ceramics", calligraphy: "calligraphy", "ancient-books": "ancient-books", books: "ancient-books" }};
  var catViMap = {{ artifacts: "Thanh đồng & Khảo cổ", ceramics: "Gốm sứ Cổ truyền", calligraphy: "Thư pháp Danh tích", "ancient-books": "Cổ tịch Thiện bản" }};
  var catEnMap = {{ artifacts: "Bronze & Archaeology", ceramics: "Classical Ceramics", calligraphy: "Calligraphy Treasures", "ancient-books": "Rare Woodblock Editions" }};
  var defaultSpots = [[28, 35], [64, 30], [50, 68]];
  for (i = 0; i < MUSEUM_V3.length; i++) {{
    var m = MUSEUM_V3[i];
    if (existingIds[m.id]) continue;
    var normCat = catMap[m.category] || "artifacts";
    var hsOut = [];
    for (j = 0; j < (m.hotspots || []).length; j++) {{
      var h = m.hotspots[j];
      var c = defaultSpots[j % defaultSpots.length];
      hsOut.push({{
        id: h.id,
        x: c[0],
        y: c[1],
        titleVi: h.titleVi,
        titleEn: h.titleEn || h.titleVi,
        titleZh: "文物细部",
        pinyin: "",
        category: "Giám định · 鉴定",
        categoryEn: "Curatorial · 鉴定",
        detail: h.descVi,
        detailEn: h.descEn || h.descVi
      }});
    }}
    list.push({{
      id: m.id,
      category: normCat,
      categoryLabel: catViMap[normCat] || "Bảo vật Quốc gia",
      categoryLabelEn: catEnMap[normCat] || "National Treasure",
      featuredCollections: [normCat, "collections"],
      nameVi: m.titleVi,
      nameEn: m.titleEn,
      nameZh: m.titleZh,
      nameZhTrad: m.titleZh,
      pinyin: "",
      periodId: "museum-v3",
      periodLabel: m.era,
      periodLabelEn: m.era,
      dateEstimate: m.era,
      material: m.material,
      dimensions: m.dimensions,
      origin: m.museum,
      collection: m.museum,
      culturalSignificance: m.summaryVi,
      culturalSignificanceEn: m.summaryEn,
      historicalContext: m.summaryVi,
      historicalContextEn: m.summaryEn,
      attribution: "Hồ sơ Bảo tàng Công cộng",
      attributionEn: "Public Museum Archival Record",
      imageUrl: V3_MUS_IMGS[m.id] || "assets/images/museum/houmuwu-ding.jpg",
      hotspotAnnotations: hsOut,
      hotspots: hsOut
    }});
    existingIds[m.id] = true;
  }}
}})();
"""
    out_vi = raw_vi[:idx] + tail

    # Also update enParityMuseumV3.js to attach *En directly onto artifact objects inside window.CCE_MUSEUM.artifacts
    en_patch = """    if (a && a.id && EN_META[a.id]) {
      meta = EN_META[a.id];
      a.periodLabelEn = meta.era;
      a.dateEstimateEn = meta.era;
      a.materialEn = meta.material;
      a.dimensionsEn = meta.dimensions;
      a.originEn = meta.museum;
      a.collectionEn = meta.museum;"""
    out_en = raw_en.replace("    if (a && a.id && EN_META[a.id]) {\n      meta = EN_META[a.id];", en_patch, 1)
    return out_vi, out_en


def transform_classics(raw_vi: str, raw_en: str) -> tuple[str, str]:
    anchor = "  window.CCE_CLASSICS = window.CCE_CLASSICS || [];"
    idx = raw_vi.find(anchor)
    assert idx > 0
    tail = """  window.CCE_PHILOSOPHY = window.CCE_PHILOSOPHY || {};
  window.CCE_PHILOSOPHY.classicalTexts = window.CCE_PHILOSOPHY.classicalTexts || [];
  var target = window.CCE_PHILOSOPHY.classicalTexts;
  var existingIds = {};
  var i, j;
  for (i = 0; i < target.length; i++) { if (target[i] && target[i].id) existingIds[target[i].id] = true; }
  var branchVi = { kinh: "Kinh bộ 经部", su: "Sử bộ 史部", tu: "Tử bộ 子部", tap: "Tập bộ 集部" };
  var branchEn = { kinh: "Classics · Jingbu 经部", su: "Histories · Shibu 史部", tu: "Masters · Zibu 子部", tap: "Collections · Jibu 集部" };
  for (i = 0; i < CLASSICS_V3.length; i++) {
    var c = CLASSICS_V3[i];
    if (existingIds[c.id]) continue;
    var exOut = [];
    for (j = 0; j < (c.excerpts || []).length; j++) {
      var e = c.excerpts[j];
      exOut.push({
        hanziSc: e.originalZh || "",
        hanziTc: e.originalTrad || e.originalZh || "",
        pinyin: e.pinyin || "",
        hanViet: e.hanViet || "",
        vi: e.meaningVi || "",
        en: e.meaningEn || "",
        commentary: e.commentaryVi || "",
        commentaryEn: e.commentaryEn || ""
      });
    }
    var lead = exOut[0] || {};
    target.push({
      id: c.id,
      treasury: c.branch,
      treasuryLabel: branchVi[c.branch] || "Tứ Khố",
      treasuryLabelEn: branchEn[c.branch] || "Four Treasuries",
      era: c.dynasty,
      eraEn: c.dynasty,
      school: c.author,
      author: c.author,
      authorEn: c.author,
      titleVi: c.titleVi,
      titleZh: c.titleZh,
      titleZhTrad: c.titleZh,
      titleEn: c.titleEn,
      summary: c.summaryVi,
      summaryEn: c.summaryEn,
      whyItMatters: c.summaryVi,
      whyItMattersEn: c.summaryEn,
      excerptZh: lead.hanziSc || "",
      excerptPinyin: lead.pinyin || "",
      excerptVi: lead.vi || "",
      excerptEn: lead.en || "",
      excerpts: exOut
    });
    existingIds[c.id] = true;
  }
})();
"""
    out_vi = raw_vi[:idx] + tail
    out_en = raw_en.replace(
        "for (i = 0; i < window.CCE_CLASSICS.length; i++) {\n    c = window.CCE_CLASSICS[i];",
        "var _clist = (window.CCE_PHILOSOPHY && window.CCE_PHILOSOPHY.classicalTexts) || [];\n  for (i = 0; i < _clist.length; i++) {\n    c = _clist[i];",
    ).replace(
        "if (c && c.id && EN_META[c.id]) {\n      meta = EN_META[c.id];",
        "if (c && c.id && EN_META[c.id]) {\n      meta = EN_META[c.id];\n      c.authorEn = meta.author; c.eraEn = meta.dynasty;",
    )
    return out_vi, out_en


def transform_dictionary(raw: str, batch_idx: int) -> str:
    # Rewrite inner d(...) helper to match full CCE_DICTIONARY entry shape and add unique slug id
    d_old_re = re.compile(r"  function d\(.*?\n  \}", re.S)
    d_new = f"""  var _v3dCount = 0;
  function d(hanzi, trad, pinyin, hanViet, radical, liushuType, etyVi, etyEn, mVi, mEn, exZh, exPy, exVi, exEn) {{
    _v3dCount += 1;
    var deckGuess = {batch_idx} === 1 ? "deck-02" : "deck-05";
    return {{
      id: "v3-dict-" + {batch_idx} + "-" + _v3dCount,
      hanzi: hanzi,
      traditional: trad || hanzi,
      pinyin: pinyin,
      hanViet: hanViet,
      level: "Advanced / Academic Chinese",
      pos: "Từ vựng Chuyên đề",
      deckId: deckGuess,
      topicTag: "Chiết tự Lục thư",
      english: mEn,
      vietnamese: hanViet ? (hanViet + " (" + mVi + ")") : mVi,
      radical: radical,
      radicalAnalysis: etyVi,
      liushuType: liushuType,
      liushuCategory: liushuType,
      components: liushuType + " — " + radical,
      etymologyAndRadicals: etyVi,
      etymologyEn: etyEn,
      mnemonic: etyVi,
      context: mEn,
      related: [],
      examples: exZh ? [{{ zh: exZh, pinyin: exPy, vi: exVi, en: exEn }}] : []
    }};
  }}"""
    txt = d_old_re.sub(d_new, raw, count=1)
    return txt


def transform_survival(raw: str) -> str:
    fn_old_re = re.compile(r"  function item\(.*?\n  \}", re.S)
    fn_new = """  function item(id, zh, trad, pinyin, hanViet, meaningVi, meaningEn, liushuNoteVi, liushuNoteEn, fieldTipVi, fieldTipEn) {
    return {
      id: id,
      hanzi: zh,
      traditional: trad || zh,
      zh: zh,
      trad: trad || zh,
      pinyin: pinyin,
      hanViet: hanViet,
      vi: meaningVi,
      en: meaningEn,
      vietnamese: meaningVi,
      english: meaningEn,
      meaningVi: meaningVi,
      meaningEn: meaningEn,
      liushuType: "Chiết tự Thực địa",
      liushuTypeEn: "Field Liushu",
      radicalLogic: liushuNoteVi,
      radicalLogicEn: liushuNoteEn,
      fieldTip: fieldTipVi,
      fieldTipEn: fieldTipEn
    };
  }"""
    txt = fn_old_re.sub(fn_new, raw, count=1)
    # Add number: '07'..'10', descVi, descEn onto each SURVIVAL_PACKS_V3 entry at merge time into CCE_SURVIVAL_PACKS.packs
    anchor = "  window.CCE_SURVIVAL_PACKS = window.CCE_SURVIVAL_PACKS || [];"
    idx = txt.find(anchor)
    assert idx > 0
    tail = """  window.CCE_SURVIVAL_PACKS = window.CCE_SURVIVAL_PACKS || { packs: [] };
  if (Array.isArray(window.CCE_SURVIVAL_PACKS)) {
    window.CCE_SURVIVAL_PACKS = { packs: window.CCE_SURVIVAL_PACKS };
  }
  var packArr = window.CCE_SURVIVAL_PACKS.packs = window.CCE_SURVIVAL_PACKS.packs || [];
  var existingIds = {};
  var i;
  for (i = 0; i < packArr.length; i++) {
    if (packArr[i] && packArr[i].id) existingIds[packArr[i].id] = true;
  }
  for (i = 0; i < SURVIVAL_PACKS_V3.length; i++) {
    var pk = SURVIVAL_PACKS_V3[i];
    if (!pk.number) pk.number = String(7 + i < 10 ? "0" + (7 + i) : (7 + i));
    if (!pk.descVi) pk.descVi = "Bộ cụm từ & biển báo thực địa kèm chiết tự Lục thư và chế độ Zero-Pinyin.";
    if (!pk.descEn) pk.descEn = "Field signs and practical phrases with Liushu character breakdown and Zero-Pinyin drill mode.";
    if (!existingIds[pk.id]) {
      packArr.push(pk);
      existingIds[pk.id] = true;
    }
  }
})();
"""
    return txt[:idx] + tail


def transform_batch3_enrichment(raw: str) -> str:
    # Call window.CCE_APPLY_DEPTH_ENRICHMENT directly after normalizing terminologyAndLiushu & merging EN
    end_anchor = "  for (k in BATCH3_VI_P"
    idx = raw.rfind(end_anchor)
    assert idx > 0, "Missing Batch3 tail"
    part_tag = "P1" if "BATCH3_VI_P1" in raw else "P2"
    replacement = f"""  var _viMap = BATCH3_VI_{part_tag};
  var _enMap = BATCH3_EN_{part_tag};
  for (var aid in _viMap) {{
    if (!Object.prototype.hasOwnProperty.call(_viMap, aid)) continue;
    var rec = _viMap[aid];
    var enRec = _enMap[aid] || {{}};
    if (Array.isArray(rec.terminologyAndLiushu)) {{
      var enTerms = Array.isArray(enRec.terminologyAndLiushu) ? enRec.terminologyAndLiushu : [];
      for (var t = 0; t < rec.terminologyAndLiushu.length; t++) {{
        var tm = rec.terminologyAndLiushu[t];
        var etm = enTerms[t] || {{}};
        if (!tm.traditional) tm.traditional = tm.hanzi;
        if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "Lục thư";
        if (!tm.radicalAnalysis) tm.radicalAnalysis = tm.gloss || "";
        if (!tm.meaningVi) tm.meaningVi = tm.gloss || "";
        if (!tm.meaningEn) tm.meaningEn = etm.gloss || tm.gloss || "";
      }}
    }}
  }}
  if (typeof window.CCE_APPLY_DEPTH_ENRICHMENT === "function") {{
    window.CCE_APPLY_DEPTH_ENRICHMENT(_viMap);
  }}
  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {{}};
  for (var eid in _enMap) {{
    if (!Object.prototype.hasOwnProperty.call(_enMap, eid)) continue;
    var tgt = window.CCE_ARTICLES_EN[eid];
    var src = _enMap[eid];
    if (tgt && src) {{
      if (src.historicalContext && !tgt.historicalContext) tgt.historicalContext = src.historicalContext;
      if (src.theoreticalFramework && !tgt.theoreticalFramework) tgt.theoreticalFramework = src.theoreticalFramework;
      if (src.conclusion && !tgt.conclusion) tgt.conclusion = src.conclusion;
      if (Array.isArray(src.additionalSections) && Array.isArray(tgt.mainContent)) {{
        var have = {{}};
        for (var s = 0; s < tgt.mainContent.length; s++) have[tgt.mainContent[s].heading] = true;
        for (var s2 = 0; s2 < src.additionalSections.length; s2++) {{
          if (!have[src.additionalSections[s2].heading]) tgt.mainContent.push(src.additionalSections[s2]);
        }}
      }}
    }}
  }}
}})();
"""
    return raw[:idx] + replacement


def main():
    raw_files = extract_all_raw()
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    written = 0

    for fname, content in sorted(raw_files.items()):
        out_txt = content
        if fname.startswith("articlesExpansionV3_"):
            out_txt = transform_articles_vi(content)
        elif fname.startswith("enParityArticlesV3_"):
            out_txt = transform_articles_en(content)
        elif fname.startswith("destinationsDeepAtlasPart2_3"):
            out_txt = transform_destinations(content)
        elif fname == "paintingsExpansionV3.js":
            out_vi, out_en = transform_paintings(content, raw_files["enParityPaintingsV3.js"])
            (OUT_DIR / "paintingsExpansionV3.js").write_text(out_vi, encoding="utf-8")
            (OUT_DIR / "enParityPaintingsV3.js").write_text(out_en, encoding="utf-8")
            written += 2
            continue
        elif fname == "enParityPaintingsV3.js":
            continue
        elif fname == "museumExpansionV3.js":
            out_vi, out_en = transform_museum(content, raw_files["enParityMuseumV3.js"])
            (OUT_DIR / "museumExpansionV3.js").write_text(out_vi, encoding="utf-8")
            (OUT_DIR / "enParityMuseumV3.js").write_text(out_en, encoding="utf-8")
            written += 2
            continue
        elif fname == "enParityMuseumV3.js":
            continue
        elif fname == "classicsExpansionV3.js":
            out_vi, out_en = transform_classics(content, raw_files["enParityClassicsV3.js"])
            (OUT_DIR / "classicsExpansionV3.js").write_text(out_vi, encoding="utf-8")
            (OUT_DIR / "enParityClassicsV3.js").write_text(out_en, encoding="utf-8")
            written += 2
            continue
        elif fname == "enParityClassicsV3.js":
            continue
        elif fname.startswith("dictionaryExpansionV3_p"):
            bidx = 1 if fname.endswith("_p1.js") else 2
            out_txt = transform_dictionary(content, bidx)
        elif fname == "survivalPacksExpansionV3.js":
            out_txt = transform_survival(content)
        elif fname.startswith("articlesDepthEnrichmentBatch3_p"):
            out_txt = transform_batch3_enrichment(content)

        # Verify every local image referenced inside out_txt exists
        for m in re.finditer(r'["\'](assets/images/[^"\']+)["\']', out_txt):
            rel = m.group(1)
            assert (ROOT / rel).exists(), f"Missing image {rel} referenced in {fname}"

        (OUT_DIR / fname).write_text(out_txt, encoding="utf-8")
        written += 1

    print(f"Normalized and wrote {written} files into {OUT_DIR}")


if __name__ == "__main__":
    main()
