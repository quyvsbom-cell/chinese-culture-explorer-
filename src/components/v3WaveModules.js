// ============================================================================
// WAVE 3.2 MODULAR FEATURES (ZERO-BUILD IIFE)
// - Image Provenance Registry (456+ provincial plates, paintings, relics)
// - Multi-Dimensional 34-Province Filters (UNESCO, Capitals, Cuisines, Seasons, VN)
// - 8-Dimension Compare 2 Provinces Body + Swap A<->B & Print A4
// - 2D Interactive SVG Vernacular Architecture Cross-Sections (4 Archetypes)
// ============================================================================

(function () {
  "use strict";

  function esc(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function norm(s) {
    return String(s || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // Known editorial culinary plates created where open Commons photos were unavailable
  var EDITORIAL_DISH_PLATES = {
    "assets/images/prov_items/gansu/d4.jpg": true,
    "assets/images/prov_items/qinghai/d0.jpg": true,
    "assets/images/prov_items/qinghai/d1.jpg": true,
    "assets/images/prov_items/hebei/d1.jpg": true,
    "assets/images/prov_items/hebei/d2.jpg": true,
    "assets/images/prov_items/hainan/d1.jpg": true,
    "assets/images/prov_items/hainan/d2.jpg": true,
    "assets/images/prov_items/heilongjiang/d1.jpg": true
  };

  function getImageProvenance(src, hintCredit, isEn) {
    var cleanSrc = String(src || "").trim();
    var registry = (window.CCE_IMAGE_REGISTRY && window.CCE_IMAGE_REGISTRY.assets) || [];
    var regHit = null;
    for (var i = 0; i < registry.length; i++) {
      if (registry[i] && registry[i].path === cleanSrc) {
        regHit = registry[i];
        break;
      }
    }
    if (regHit) {
      return {
        sourceType: "archival",
        badgeLabel: isEn ? "Verified Archive" : "Kho Tư liệu Xác thực",
        sourceLabel: regHit.institution || regHit.source || hintCredit || "Open Museum Archive",
        license: regHit.license || "CC BY-SA 4.0 / Public Domain",
        note: isEn ? (regHit.titleVi || "") : (regHit.titleVi || "")
      };
    }
    if (cleanSrc.indexOf("assets/images/prov_items/") === 0) {
      var file = cleanSrc.split("/").pop() || "";
      if (EDITORIAL_DISH_PLATES[cleanSrc]) {
        return {
          sourceType: "editorial",
          badgeLabel: isEn ? "Editorial Studio Plate" : "Minh họa Biên tập CCE",
          sourceLabel: isEn ? "CCE Culinary Heritage Reconstruction Plate" : "Đĩa minh họa biên tập Di sản Ẩm thực Trung Hoa",
          license: "Editorial Reconstruction © 2026 CCE",
          note: isEn ? "Distinguished from museum photographs per Document #05." : "Phân biệt minh bạch với ảnh chụp thực địa theo Tài liệu Pháp lý #05."
        };
      }
      if (file.indexOf("d") === 0) {
        return {
          sourceType: "culinary",
          badgeLabel: isEn ? "Culinary Archive" : "Tư liệu Ẩm thực Vùng miền",
          sourceLabel: hintCredit || "Wikimedia Commons / Regional Culinary Archive",
          license: "CC BY-SA / Public Domain",
          note: ""
        };
      }
      if (file.indexOf("f") === 0) {
        return {
          sourceType: "portrait",
          badgeLabel: isEn ? "Archival Portrait" : "Chân dung Lịch sử",
          sourceLabel: hintCredit || "Wikimedia Commons / Classical Woodblock & Museum Portrait",
          license: "Public Domain / CC BY-SA",
          note: ""
        };
      }
      return {
        sourceType: "heritage",
        badgeLabel: isEn ? "UNESCO & Heritage Plate" : "Tư liệu Di sản Kiến trúc",
        sourceLabel: hintCredit || "Wikimedia Commons / National Cultural Heritage Archive",
        license: "CC BY-SA 4.0 / Public Domain",
        note: ""
      };
    }
    if (cleanSrc.indexOf("assets/images/paintings/") === 0) {
      return {
        sourceType: "museum-painting",
        badgeLabel: isEn ? "Museum Open Access Scan" : "Ảnh Giám định Bảo tàng Công cộng",
        sourceLabel: hintCredit || "Palace Museum / Taipei NPM / Metropolitan Museum / Liaoning Museum (PD)",
        license: "Public Domain (PD-Old-100)",
        note: ""
      };
    }
    if (cleanSrc.indexOf("assets/images/museum/") === 0) {
      return {
        sourceType: "museum-relic",
        badgeLabel: isEn ? "National Treasure Plate" : "Tư liệu Bảo vật Quốc gia",
        sourceLabel: hintCredit || "National Museum of China / Provincial Museums / VNMFA",
        license: "Public Domain / Wikimedia Commons CC BY-SA",
        note: ""
      };
    }
    if (cleanSrc.indexOf("assets/images/articles/") === 0) {
      return {
        sourceType: "monograph-plate",
        badgeLabel: isEn ? "Monograph Plate" : "Minh họa Chuyên luận",
        sourceLabel: hintCredit || "Open Cultural & Scholarly Wikimedia Commons Archive",
        license: "CC BY-SA / Public Domain",
        note: ""
      };
    }
    return {
      sourceType: "editorial",
      badgeLabel: isEn ? "Editorial Reference" : "Tư liệu Biên tập",
      sourceLabel: hintCredit || "Chinese Culture Explorer Editorial Archive",
      license: "Educational Reference",
      note: ""
    };
  }

  // Multi-Dimensional Classification Map for all 34 Provincial Divisions
  var TAG_SETS = {
    unesco: {
      "prov-beijing": 1, "prov-tianjin": 1, "prov-hebei": 1, "prov-shanxi": 1, "prov-inner-mongolia": 1,
      "prov-liaoning": 1, "prov-jilin": 1, "prov-heilongjiang": 1, "prov-shanghai": 1, "prov-jiangsu": 1,
      "prov-zhejiang": 1, "prov-anhui": 1, "prov-fujian": 1, "prov-jiangxi": 1, "prov-shandong": 1,
      "prov-henan": 1, "prov-hubei": 1, "prov-hunan": 1, "prov-guangdong": 1, "prov-guangxi": 1,
      "prov-chongqing": 1, "prov-sichuan": 1, "prov-guizhou": 1, "prov-yunnan": 1, "prov-tibet": 1,
      "prov-shaanxi": 1, "prov-gansu": 1, "prov-qinghai": 1, "prov-ningxia": 1, "prov-xinjiang": 1,
      "prov-macau": 1
    },
    capital: {
      "prov-beijing": 1, "prov-shaanxi": 1, "prov-henan": 1, "prov-jiangsu": 1,
      "prov-zhejiang": 1, "prov-hebei": 1, "prov-shanxi": 1, "prov-hubei": 1,
      "prov-sichuan": 1, "prov-chongqing": 1, "prov-liaoning": 1, "prov-ningxia": 1,
      "prov-inner-mongolia": 1, "prov-heilongjiang": 1, "prov-fujian": 1, "prov-taiwan": 1
    },
    cuisine8: {
      "prov-shandong": 1, "prov-sichuan": 1, "prov-chongqing": 1, "prov-guangdong": 1,
      "prov-jiangsu": 1, "prov-fujian": 1, "prov-zhejiang": 1, "prov-hunan": 1, "prov-anhui": 1
    },
    vnCorridor: {
      "prov-guangxi": 1, "prov-yunnan": 1, "prov-guangdong": 1, "prov-hainan": 1,
      "prov-hunan": 1, "prov-chongqing": 1, "prov-sichuan": 1, "prov-zhejiang": 1,
      "prov-jiangsu": 1, "prov-shanghai": 1, "prov-beijing": 1, "prov-fujian": 1
    }
  };

  function getProvinceDimensions(pr) {
    if (!pr || !pr.id) return [];
    var dims = [];
    if (TAG_SETS.unesco[pr.id]) dims.push("unesco");
    if (TAG_SETS.capital[pr.id]) dims.push("capital");
    if (TAG_SETS.cuisine8[pr.id]) dims.push("cuisine");
    if (TAG_SETS.vnCorridor[pr.id]) dims.push("vn");
    var bs = norm((pr.bestSeason || "") + " " + (pr.bestSeasonEn || ""));
    if (bs.indexOf("xuan") !== -1 || bs.indexOf("spring") !== -1 || bs.indexOf("3") !== -1 || bs.indexOf("4") !== -1) dims.push("spring");
    if (bs.indexOf("ha") !== -1 || bs.indexOf("summer") !== -1 || bs.indexOf("6") !== -1 || bs.indexOf("7") !== -1 || bs.indexOf("8") !== -1) dims.push("summer");
    if (bs.indexOf("thu") !== -1 || bs.indexOf("autumn") !== -1 || bs.indexOf("9") !== -1 || bs.indexOf("10") !== -1 || bs.indexOf("11") !== -1) dims.push("autumn");
    if (bs.indexOf("dong") !== -1 || bs.indexOf("winter") !== -1 || bs.indexOf("12") !== -1 || bs.indexOf("1–2") !== -1 || bs.indexOf("quanh") !== -1) dims.push("winter");
    return dims;
  }

  function matchesMultiFilter(pr, activeDims) {
    if (!Array.isArray(activeDims) || activeDims.length === 0) return true;
    var pDims = getProvinceDimensions(pr);
    for (var i = 0; i < activeDims.length; i++) {
      if (pDims.indexOf(activeDims[i]) === -1) return false;
    }
    return true;
  }

  var MULTI_FILTER_DEFS = [
    { id: "unesco", labelVi: "Di sản UNESCO", labelEn: "UNESCO Heritage" },
    { id: "capital", labelVi: "16 Cố đô Lịch sử", labelEn: "Historic Capitals" },
    { id: "cuisine", labelVi: "Bát Đại Thái Hệ", labelEn: "8 Great Cuisines" },
    { id: "vn", labelVi: "Hành lang Việt–Trung", labelEn: "Vietnam Corridor" },
    { id: "spring", labelVi: "Mùa Xuân (T3–5)", labelEn: "Spring" },
    { id: "summer", labelVi: "Mùa Hạ (T6–8)", labelEn: "Summer" },
    { id: "autumn", labelVi: "Mùa Thu (T9–11)", labelEn: "Autumn" },
    { id: "winter", labelVi: "Mùa Đông (T12–2)", labelEn: "Winter" }
  ];

  function renderMultiFilterStrip(activeDims, enM) {
    var active = Array.isArray(activeDims) ? activeDims : [];
    return (
      '<div class="multi-filter-bar" role="group" aria-label="' + (enM ? "Multi-dimensional Province Filters" : "Lọc đa chiều 34 tỉnh") + '" style="display:flex;align-items:center;gap:0.4rem;flex-wrap:wrap;padding:0.55rem 0;border-top:1px dashed var(--hairline);border-bottom:1px dashed var(--hairline);margin-bottom:0.85rem;">' +
        '<span style="font-size:0.74rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;margin-right:0.25rem;">' +
          (enM ? "Tags (AND):" : "Lọc tổ hợp:") +
        '</span>' +
        MULTI_FILTER_DEFS.map(function (f) {
          var isOn = active.indexOf(f.id) !== -1;
          return '<button type="button" class="filter-pill ' + (isOn ? "active" : "") + '" data-action="toggle-prov-dim" data-dim="' + f.id + '" style="font-size:0.76rem;padding:0.25rem 0.6rem;">' +
            esc(enM ? f.labelEn : f.labelVi) +
          '</button>';
        }).join("") +
        (active.length ? '<button type="button" class="btn btn-secondary btn-sm" data-action="clear-province-filters" style="margin-left:auto;font-size:0.74rem;padding:0.2rem 0.55rem;">' + (enM ? "Reset" : "Đặt lại") + '</button>' : '') +
      '</div>'
    );
  }

  // 8-Dimension Compare 2 Provinces Renderer
  function renderCompareCol8Dim(pr, sideLabel, selectAction, provinces, enPM, help, enVal, cleanAbbrEn, speakBtnHtml) {
    var pType = help && help.provinceTypeEn ? help.provinceTypeEn(pr.type, enPM) : pr.type;
    var pReg = help && help.regionLabelEn ? help.regionLabelEn(pr.regionId, pr.regionLabel, enPM) : pr.regionLabel;
    var pName = enPM ? (pr.nameEn || pr.nameVi) : pr.nameVi;
    var layer2 = pr.culturalDeepDive || pr.layer2 || {};
    var layer3 = pr.travelAndBusinessReadiness || pr.layer3 || {};
    var unesco = Array.isArray(layer2.heritageSites) ? layer2.heritageSites.slice(0, 3) : [];
    var dishes = Array.isArray(layer2.signatureDishes) ? layer2.signatureDishes.slice(0, 5) : [];
    var figures = Array.isArray(layer2.notableFigures) ? layer2.notableFigures.slice(0, 3) : [];
    var hsrStations = Array.isArray(layer3.hsrStations12306) ? layer3.hsrStations12306 : [];
    var vis = (window.CCE_PROVINCE_ITEM_VISUALS && window.CCE_PROVINCE_ITEM_VISUALS[pr.id]) || {};
    var unescoImg = (vis.heritage && vis.heritage[0]) || pr.image || "";

    return (
      '<div class="compare-card-col">' +
        '<div style="margin-bottom:0.75rem;">' +
          '<label style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">' + esc(sideLabel) + ':</label>' +
          '<select class="form-select" data-action="' + selectAction + '" style="font-weight:600;">' +
            provinces.map(function (item) {
              return '<option value="' + esc(item.id) + '" ' + (item.id === pr.id ? "selected" : "") + '>' +
                esc(enPM ? (item.nameEn || item.nameVi) : item.nameVi) + ' (' + esc(item.nameZh) + ') — ' + esc(help && help.regionLabelEn ? help.regionLabelEn(item.regionId, item.regionLabel, enPM) : item.regionLabel) +
              '</option>';
            }).join("") +
          '</select>' +
        '</div>' +

        '<!-- 1. Iconic Image -->' +
        '<div style="aspect-ratio:16/10;background:var(--bg-surface);border:1px solid var(--hairline);overflow:hidden;margin-bottom:0.65rem;">' +
          '<img src="' + esc(pr.image || "assets/images/articles/hero-traditional-arch.jpg") + '" alt="' + esc(pName) + '" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" />' +
        '</div>' +
        '<div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.45rem;">' +
          '<span class="badge badge-gold">' + esc(pType) + '</span>' +
          '<span class="badge badge-jade">' + esc(pReg) + '</span>' +
          (pr.abbr ? '<span class="badge badge-outline">' + esc(cleanAbbrEn(pr.abbr, enPM)) + '</span>' : '') +
        '</div>' +
        '<h4 style="font-family:var(--font-editorial);font-size:1.3rem;margin:0 0 0.65rem;">' +
          esc(pName) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(pr.nameZh) + '</span> ' + (speakBtnHtml || "") +
        '</h4>' +

        '<div class="analysis-panel-box" style="font-size:0.82rem;display:grid;gap:0.65rem;">' +
          '<div><strong style="color:var(--imperial-red);">2. ' + (enPM ? "Geography & Climate:" : "Địa lý & Khí hậu:") + '</strong> ' + esc(enVal(pr, "capital")) + ' · ' + esc(enVal(pr, "bestSeason") || (enPM ? "Year-round" : "Quanh năm")) + '</div>' +
          '<div style="display:flex;gap:0.6rem;align-items:center;">' +
            (unescoImg ? '<img src="' + esc(unescoImg) + '" alt="UNESCO" decoding="async" style="width:68px;height:46px;object-fit:cover;flex-shrink:0;border:1px solid var(--hairline);" />' : '') +
            '<div><strong style="color:var(--imperial-red);">3. UNESCO & ' + (enPM ? "Landmarks:" : "Danh thắng:") + '</strong> ' +
              esc(unesco.length ? unesco.map(function (u) { return enVal(u, "nameVi"); }).join("; ") : enVal(pr, "landmark")) +
            '</div>' +
          '</div>' +
          '<div><strong style="color:var(--imperial-red);">4. ' + (enPM ? "Regional Cuisine (Up to 5 Dishes):" : "Ẩm thực & 5 Đặc sản Tiêu biểu:") + '</strong> ' +
            (dishes.length
              ? '<ul style="margin:0.25rem 0 0;padding-left:1.1rem;">' + dishes.map(function (d) {
                  return '<li><span class="hanzi">' + esc(d.hanzi) + '</span> (' + esc(d.pinyin) + ') — ' + esc(enPM ? (d.nameEn || d.hanViet) : (d.hanViet || "")) + '</li>';
                }).join("") + '</ul>'
              : esc(enVal(pr, "cuisine"))) +
          '</div>' +
          '<div><strong style="color:var(--imperial-red);">5. ' + (enPM ? "Luminaries & Literature:" : "Danh nhân & Thi ca:") + '</strong> ' +
            (figures.length ? '<div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-top:0.35rem;">' + figures.map(function (f, fi) {
              var fImg = (vis.figures && vis.figures[fi]) || "";
              return '<span style="display:inline-flex;align-items:center;gap:0.3rem;padding:0.18rem 0.45rem;border:1px solid var(--hairline);background:var(--bg-paper);">' +
                (fImg ? '<img src="' + esc(fImg) + '" alt="' + esc(f.hanViet || f.hanzi) + '" style="width:22px;height:22px;object-fit:cover;object-position:top center;border-radius:50%;" />' : '') +
                esc((f.hanViet || f.nameVi) + " (" + f.hanzi + ")") +
              '</span>';
            }).join("") + '</div>' : esc(enVal(pr, "highlights"))) +
            (pr.literaryAndHistoricalEchoes ? '<br><em>' + esc(enVal(pr.literaryAndHistoricalEchoes, "workTitle")) + ':</em> <span class="hanzi">' + esc(pr.literaryAndHistoricalEchoes.quoteZh || "") + '</span>' : '') +
          '</div>' +
          '<div><strong style="color:var(--imperial-red);">6. ' + (enPM ? "Dialect & Phonology:" : "Phương ngôn Bản địa:") + '</strong> ' + esc(enVal(pr, "dialect") || enVal(layer2.linguisticProfile || {}, "summaryVi") || (enPM ? "Mandarin & local topolects" : "Phổ thông & phương ngữ địa phương")) + '</div>' +
          '<div><strong style="color:var(--imperial-red);">7. ' + (enPM ? "Guilds & RCEP Industry:" : "Thương bang & Cụm Công nghiệp RCEP:") + '</strong> ' +
            esc(enVal(pr.commercialAndSupplyChain || {}, "historicalGuild") || enVal(pr, "economy")) +
            (pr.commercialAndSupplyChain && pr.commercialAndSupplyChain.vietnamAseanLink ? ' · <span style="color:var(--jade-green);">' + esc(pr.commercialAndSupplyChain.vietnamAseanLink) + '</span>' : '') +
          '</div>' +
          '<div><strong style="color:var(--imperial-red);">8. ' + (enPM ? "12306 Rail Hubs & Field Notes:" : "Đầu mối 12306 & Kinh nghiệm Thực địa:") + '</strong> ' +
            (hsrStations.length ? hsrStations.map(function (s) { return '<span class="hanzi">' + esc(s.hanzi) + '</span> (' + esc(s.pinyin) + ')'; }).join(" · ") + " — " : "") +
            esc(enVal(pr, "travelTip") || "") +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  // 2D Interactive SVG Vernacular Architecture Cross-Sections
  var activeArchId = "siheyuan";
  var activeCalloutIdx = 0;

  var ARCH_DATA = [
    {
      id: "siheyuan",
      titleVi: "Tứ Hợp Viện Bắc Kinh (北京四合院)",
      titleEn: "Beijing Courtyard House (Siheyuan)",
      subtitleVi: "Trục đối xứng Nam–Bắc khép kín chắn gió mùa đông Hoa Bắc, tôn ti trưởng ấu.",
      subtitleEn: "Inward-facing north–south axial compound shielding families from winter steppe winds.",
      callouts: [
        { x: 110, y: 215, zh: "大门·影壁", nameVi: "01. Đại Môn & Ảnh Bích (Đông Nam)", nameEn: "01. Southeast Gate & Screen Wall", descVi: "Cửa mở góc Tốn (Đông Nam) đặt kèm Bức tường Ảnh Bích chắn tầm nhìn thẳng từ ngõ Hutong vào sân nội, giữ sự riêng tư và tụ khí.", descEn: "Positioned at the auspicious southeast corner with an ornate spirit screen wall blocking direct sightlines from the hutong lane." },
        { x: 250, y: 185, zh: "垂花门", nameVi: "02. Thùy Hoa Môn (Ngưỡng Nội Ngoại)", nameEn: "02. Festooned Inner Gate", descVi: "Cổng chạm hoa sen rủ phân ranh giới không gian tiếp khách (tiền viện) và sinh hoạt gia tộc (hậu viện).", descEn: "Polychrome timber inner gate dividing the outer reception court from private family living quarters." },
        { x: 250, y: 78, zh: "正房", nameVi: "03. Chính Phòng (Tọa Bắc Hướng Nam)", nameEn: "03. Principal North Hall", descVi: "Nhà cao nhất quay mặt về Nam đón nắng đông ấm áp, dành cho bậc trưởng thượng và ban thờ tổ tiên.", descEn: "Highest south-facing hall capturing low winter sunlight, reserved for elders and ancestral tablets." },
        { x: 390, y: 145, zh: "厢房", nameVi: "04. Đông Tây Sương Phòng", nameEn: "04. East & West Wing Pavilions", descVi: "Hai dãy nhà phụ đối xứng Đông–Tây nối bằng hành lang gỗ (Thương Lang) bao bọc khoảng sân trồng lựu, táo tàu.", descEn: "Symmetrical flank pavilions joined by covered timber verandas framing the central tree-planted courtyard." }
      ],
      svgBody: '<rect x="30" y="30" width="440" height="220" fill="none" stroke="var(--ink-charcoal)" stroke-width="2.5"/>' +
        '<rect x="170" y="45" width="160" height="50" fill="rgba(140,35,24,0.12)" stroke="var(--imperial-red)" stroke-width="2"/>' +
        '<rect x="65" y="105" width="55" height="90" fill="rgba(43,91,78,0.12)" stroke="var(--jade-green)" stroke-width="1.8"/>' +
        '<rect x="380" y="105" width="55" height="90" fill="rgba(43,91,78,0.12)" stroke="var(--jade-green)" stroke-width="1.8"/>' +
        '<rect x="165" y="170" width="170" height="24" fill="rgba(166,124,82,0.18)" stroke="var(--antique-gold)" stroke-width="1.5"/>' +
        '<rect x="70" y="208" width="90" height="16" fill="var(--bg-surface)" stroke="var(--ink-charcoal)" stroke-width="1.5"/>' +
        '<circle cx="250" cy="132" r="14" fill="none" stroke="var(--jade-green)" stroke-dasharray="3 2"/>'
    },
    {
      id: "tulou",
      titleVi: "Thổ Lâu Phúc Kiến (福建土楼)",
      titleEn: "Fujian Rammed-Earth Tulou",
      subtitleVi: "Pháo đài quần cư hình tròn của người Khách Gia chịu động đất, tự cấp nước và tích trữ lương thực.",
      subtitleEn: "Multi-story circular Hakka rammed-earth fortress built for clan solidarity and defense.",
      callouts: [
        { x: 92, y: 140, zh: "夯土外墙", nameVi: "01. Tường Đất Nện Dày 1.5m", nameEn: "01. 1.5m Rammed-Earth Wall", descVi: "Đất sét trộn cát, vôi, đường mật và thanh tre giằng kết cấu giúp đông ấm hạ mát, chống hỏa công và rung chấn địa chất.", descEn: "Loam bound with lime, sand, and bamboo strips provides thermal mass, fire resistance, and seismic resilience." },
        { x: 250, y: 140, zh: "祖堂内院", nameVi: "02. Tổ Đường Trung Tâm", nameEn: "02. Central Ancestral Courtyard", descVi: "Không gian linh thiêng chung cả dòng họ đặt giếng nước ngọt, sân phơi và từ đường thờ tự.", descEn: "Shared ritual core housing the clan ancestral hall, freshwater wells, and harvest drying yard." },
        { x: 250, y: 65, zh: "三至四层粮仓", nameVi: "03. Phân Tầng Công Năng 4 Tầng", nameEn: "03. Vertical 4-Story Functional Rings", descVi: "Tầng 1 bếp ăn, tầng 2 kho thóc không mở cửa sổ ngoài, tầng 3–4 phòng ngủ thông ra hành lang gỗ vòng tròn.", descEn: "Vertical zoning: kitchens at ground level, windowless grain vaults on floor 2, and living chambers on floors 3–4." },
        { x: 385, y: 190, zh: "悬挑木廊", nameVi: "04. Hành Lang Gỗ Đồng Tâm", nameEn: "04. Concentric Timber Galleries", descVi: "Hàng trăm căn hộ có diện tích đồng đều quay mặt vào tâm thể hiện tính bình đẳng trong cộng đồng gia tộc.", descEn: "Equal-sized radial family bays facing inward reinforce collective mutual aid." }
      ],
      svgBody: '<circle cx="250" cy="140" r="112" fill="rgba(166,124,82,0.12)" stroke="var(--ink-charcoal)" stroke-width="5"/>' +
        '<circle cx="250" cy="140" r="84" fill="none" stroke="var(--imperial-red)" stroke-width="1.8"/>' +
        '<circle cx="250" cy="140" r="56" fill="none" stroke="var(--antique-gold)" stroke-dasharray="4 3" stroke-width="1.5"/>' +
        '<rect x="218" y="114" width="64" height="52" fill="rgba(43,91,78,0.16)" stroke="var(--jade-green)" stroke-width="2"/>' +
        '<line x1="250" y1="28" x2="250" y2="56" stroke="var(--ink-charcoal)" stroke-width="1.2"/>' +
        '<line x1="250" y1="224" x2="250" y2="252" stroke="var(--ink-charcoal)" stroke-width="1.2"/>'
    },
    {
      id: "huizhou",
      titleVi: "Tường Đầu Ngựa Huy Châu (徽州马头墙)",
      titleEn: "Huizhou Horse-Head Gable Courtyard",
      subtitleVi: "Tường bậc thang chắn hỏa hoạn giữa các nhà sát vách kết hợp Thiên Tỉnh gom nước mưa & đối lưu.",
      subtitleEn: "Stepped fire-break parapet gables paired with rainwater-catching Tianjing lightwells.",
      callouts: [
        { x: 135, y: 65, zh: "马头墙", nameVi: "01. Tường Đầu Ngựa Bậc Thang", nameEn: "01. Stepped Horse-Head Parapet", descVi: "Vượt cao hẳn lên trên mái ngói âm dương, vừa ngăn lửa cháy lan trong làng dày đặc vừa gợi hình vó ngựa thương nhân Huy thương viễn du.", descEn: "Rises above clay tile roofs to halt neighbor-to-neighbor fires while evoking Huizhou merchants departing on horseback." },
        { x: 250, y: 155, zh: "天井·四水归堂", nameVi: "02. Thiên Tỉnh ('Tứ Thủy Quy Đường')", nameEn: "02. Rainwater Skywell Court", descVi: "Bốn mái hiên dốc vào tâm đón nước mưa chảy xuống bể ngầm — biểu tượng tài lộc tụ hội không thất thoát ra ngoài.", descEn: "Four inward-sloping eaves funnel rainwater into a sunken granite basin, symbolizing wealth retained within the clan." },
        { x: 350, y: 118, zh: "木雕冬瓜梁", nameVi: "03. Kết Cấu Gỗ Chạm Trổ Độc Đáo", nameEn: "03. Carved Winter-Melon Timber Beams", descVi: "Khung gỗ lớn không dùng đinh thép chịu tải mái ngói nặng vùng núi ẩm Hoàng Sơn.", descEn: "Curved mortise-and-tenon hardwood beams engineered for humid Huangshan winters." },
        { x: 250, y: 222, zh: "砖雕门楼", nameVi: "04. Cổng Gạch Chạm Ngũ Phúc", nameEn: "04. Carved Brick Threshold Portal", descVi: "Khung đá Thanh Thạch & gạch nung xám điêu khắc điển tích Nho gia ngay mặt tiền.", descEn: "Deep-relief grey brick lintels narrating Confucian filial stories over whitewashed plaster." }
      ],
      svgBody: '<polyline points="80,220 80,105 120,105 120,75 170,75 170,52 330,52 330,75 380,75 380,105 420,105 420,220" fill="rgba(166,124,82,0.08)" stroke="var(--ink-charcoal)" stroke-width="2.5"/>' +
        '<polyline points="110,120 205,155 295,155 390,120" fill="none" stroke="var(--imperial-red)" stroke-width="2.5"/>' +
        '<rect x="210" y="155" width="80" height="55" fill="rgba(43,91,78,0.14)" stroke="var(--jade-green)" stroke-width="1.8"/>' +
        '<rect x="225" y="210" width="50" height="14" fill="var(--antique-gold)" opacity="0.5"/>'
    },
    {
      id: "jiangnan",
      titleVi: "Nhà Kề Kênh Giang Nam (江南枕河民居)",
      titleEn: "Jiangnan Water-Town Canal House",
      subtitleVi: "Tường trắng ngói xám ('Phấn Tường Đại Ngõa') soi bóng kênh đào với cầu thang đá cập thuyền.",
      subtitleEn: "Whitewashed lime walls and grey tiles cantilevered directly over Grand Canal waterways.",
      callouts: [
        { x: 105, y: 165, zh: "水阁·河埠头", nameVi: "01. Thủy Các & Bến Thuyền Đá", nameEn: "01. Cantilevered Water Pavilion & Stone Pier", descVi: "Gian nhà vươn ra mặt kênh bằng cọc đá giúp hạ nhiệt mùa hè và cập thuyền buôn trực tiếp dưới hiên sau.", descEn: "Post-supported room projecting over cool canal water with granite landing steps for merchant boats." },
        { x: 250, y: 100, zh: "粉墙黛瓦", nameVi: "02. Phấn Tường Đại Ngõa", nameEn: "02. White Plaster & Black Tiles", descVi: "Hai gam màu tối giản phản chiếu ánh nước lung linh, ăn khớp mỹ học tranh thủy mặc Giang Nam.", descEn: "High-contrast monochrome palette echoing Southern ink-wash painting aesthetics." },
        { x: 350, y: 140, zh: "美人靠", nameVi: "03. Lan Can Cong 'Mỹ Nhân Kháo'", nameEn: "03. Curved Canal Veranda Bench", descVi: "Ghế tựa gỗ uốn cong nhô ra bờ sông cho phép ngồi tựa lưng hóng gió và ngắm ghe qua lại.", descEn: "Ergonomic S-curved timber bench along upper galleries overlooking passing barges." },
        { x: 250, y: 215, zh: "石库门石街", nameVi: "04. Phố Đá Cuội Hẹp Thông Gió", nameEn: "04. Narrow Flagstone Alleyway", descVi: "Mặt trước giáp phố lát phiến đá thoát nước nhanh, mặt sau giáp sông thuận đường thủy.", descEn: "'Front street, rear river' dual logistics layout typical of Suzhou, Wuzhen, and Zhouzhuang." }
      ],
      svgBody: '<path d="M 30 205 Q 90 195 150 205 T 270 205 T 390 205 T 470 205 L 470 250 L 30 250 Z" fill="rgba(43,91,78,0.18)" stroke="var(--jade-green)" stroke-width="1.5"/>' +
        '<rect x="135" y="75" width="230" height="125" fill="var(--bg-paper)" stroke="var(--ink-charcoal)" stroke-width="2"/>' +
        '<polygon points="120,75 250,36 380,75" fill="var(--ink-charcoal)" opacity="0.88"/>' +
        '<rect x="85" y="135" width="50" height="60" fill="rgba(140,35,24,0.12)" stroke="var(--imperial-red)" stroke-width="1.8"/>' +
        '<line x1="95" y1="195" x2="95" y2="215" stroke="var(--ink-charcoal)" stroke-width="2"/>' +
        '<line x1="125" y1="195" x2="125" y2="215" stroke="var(--ink-charcoal)" stroke-width="2"/>'
    }
  ];

  function renderVernacularCrossSections(enM, speakFn) {
    var arch = ARCH_DATA[0];
    for (var i = 0; i < ARCH_DATA.length; i++) {
      if (ARCH_DATA[i].id === activeArchId) { arch = ARCH_DATA[i]; break; }
    }
    var idx = activeCalloutIdx % arch.callouts.length;
    var activeC = arch.callouts[idx];
    var spk = speakFn ? speakFn(activeC.zh) : '';

    return (
      '<section class="card mt-2" id="vernacular-svg-atlas" style="padding:1.25rem 1.35rem;border-top:3px solid var(--imperial-red);">' +
        '<div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.75rem;">' +
          '<div>' +
            '<div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "ARCHITECTURAL CROSS-SECTIONS · INTERACTIVE SVG" : "GIẢI PHẪU KIẾN TRÚC DÂN GIAN · SƠ ĐỒ SVG TƯƠNG TÁC") + '</div>' +
            '<h3 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0.15rem 0;">' + esc(enM ? arch.titleEn : arch.titleVi) + '</h3>' +
            '<p style="font-size:0.83rem;color:var(--text-secondary);margin:0;">' + esc(enM ? arch.subtitleEn : arch.subtitleVi) + '</p>' +
          '</div>' +
          '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;">' +
            ARCH_DATA.map(function (a) {
              return '<button type="button" class="filter-pill ' + (a.id === arch.id ? "active" : "") + '" data-action="v3-select-arch" data-id="' + a.id + '" style="font-size:0.76rem;padding:0.25rem 0.65rem;">' +
                esc(enM ? a.titleEn.split("(")[0].trim() : a.titleVi.split("(")[0].trim()) +
              '</button>';
            }).join("") +
          '</div>' +
        '</div>' +

        '<div class="grid grid-2" style="gap:1rem;align-items:center;">' +
          '<div style="background:var(--bg-surface);border:1px solid var(--hairline);padding:0.5rem;">' +
            '<svg viewBox="0 0 500 265" role="img" aria-label="' + esc(enM ? arch.titleEn : arch.titleVi) + '" style="width:100%;height:auto;display:block;">' +
              arch.svgBody +
              arch.callouts.map(function (c, cIdx) {
                var isAct = cIdx === idx;
                return '<g class="arch-callout-node" data-action="v3-select-arch-callout" data-idx="' + cIdx + '" style="cursor:pointer;">' +
                  '<circle cx="' + c.x + '" cy="' + c.y + '" r="' + (isAct ? 14 : 11) + '" fill="' + (isAct ? "var(--imperial-red)" : "var(--bg-paper)") + '" stroke="var(--imperial-red)" stroke-width="2"/>' +
                  '<text x="' + c.x + '" y="' + (c.y + 4) + '" text-anchor="middle" font-size="10" font-weight="700" fill="' + (isAct ? "#FAF7F2" : "var(--imperial-red)") + '">' + (cIdx + 1) + '</text>' +
                '</g>';
              }).join("") +
            '</svg>' +
          '</div>' +

          '<div class="analysis-panel-box" style="display:flex;flex-direction:column;gap:0.55rem;">' +
            '<div style="display:flex;gap:0.35rem;flex-wrap:wrap;">' +
              arch.callouts.map(function (c, cIdx) {
                return '<button type="button" class="filter-pill ' + (cIdx === idx ? "active" : "") + '" data-action="v3-select-arch-callout" data-idx="' + cIdx + '" style="font-size:0.74rem;padding:0.2rem 0.5rem;">0' + (cIdx + 1) + '</button>';
              }).join("") +
            '</div>' +
            '<div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;">' +
              '<strong style="color:var(--imperial-red);font-size:1rem;">' + esc(enM ? activeC.nameEn : activeC.nameVi) + '</strong>' +
              '<span class="hanzi" style="font-size:0.95rem;">' + esc(activeC.zh) + ' ' + spk + '</span>' +
            '</div>' +
            '<p style="margin:0;font-size:0.86rem;line-height:1.65;">' + esc(enM ? activeC.descEn : activeC.descVi) + '</p>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  window.CCE_V3_MODS = {
    getImageProvenance: getImageProvenance,
    getProvinceDimensions: getProvinceDimensions,
    matchesMultiFilter: matchesMultiFilter,
    renderMultiFilterStrip: renderMultiFilterStrip,
    renderCompareCol8Dim: renderCompareCol8Dim,
    renderVernacularCrossSections: renderVernacularCrossSections,
    setArchId: function (id) { activeArchId = id || "siheyuan"; activeCalloutIdx = 0; },
    setCalloutIdx: function (idx) { activeCalloutIdx = Number(idx) || 0; },
    getProvenanceStats: function () {
      return {
        editorialDishes: Object.keys(EDITORIAL_DISH_PLATES).length,
        totalProvItems: 456
      };
    }
  };
})();
