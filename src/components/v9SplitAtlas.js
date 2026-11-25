// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Airbnb 50/50 Split Atlas & Japan-Guide Matrix
// Spec 5: 34-Province Two-Way Sync + 12-Month Climate/HSR + <=3 Compare Tray
// ============================================================================
(function () {
  "use strict";

  var atlasTab = "provinces"; // provinces | expeditions
  var quickFilter = "all"; // all | north | east | south | southwest | northwest | northeast | vn-gateway | transit-240h
  var activeProvinceId = "";
  var compareType = "province"; // province | csc
  var compareIds = [];

  var PROVINCE_COORDS = {
    "prov-beijing": { x: 542, y: 185, hsrBj: "0h", hsrSh: "4.5h", hsrNn: "10.5h", budget: "420–850", months: [2, 2, 4, 5, 5, 3, 2, 3, 5, 5, 4, 2], t240: true, region: "north" },
    "prov-tianjin": { x: 562, y: 198, hsrBj: "0.5h", hsrSh: "4.1h", hsrNn: "10.8h", budget: "320–620", months: [2, 2, 4, 5, 5, 3, 3, 3, 5, 5, 3, 2], t240: true, region: "north" },
    "prov-hebei": { x: 530, y: 215, hsrBj: "1.2h", hsrSh: "4.8h", hsrNn: "9.8h", budget: "280–520", months: [2, 2, 4, 5, 5, 4, 3, 3, 5, 5, 3, 2], t240: true, region: "north" },
    "prov-shanxi": { x: 486, y: 228, hsrBj: "2.3h", hsrSh: "6.4h", hsrNn: "10.5h", budget: "260–500", months: [2, 2, 3, 5, 5, 4, 4, 4, 5, 5, 3, 2], t240: true, region: "north" },
    "prov-inner-mongolia": { x: 472, y: 148, hsrBj: "2.2h", hsrSh: "7.8h", hsrNn: null, budget: "300–580", months: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 1, 1], t240: false, region: "north" },
    "prov-liaoning": { x: 618, y: 160, hsrBj: "2.8h", hsrSh: "7.2h", hsrNn: null, budget: "290–550", months: [2, 2, 3, 4, 5, 5, 4, 4, 5, 5, 2, 2], t240: true, region: "northeast" },
    "prov-jilin": { x: 648, y: 122, hsrBj: "4.2h", hsrSh: "8.8h", hsrNn: null, budget: "280–540", months: [4, 3, 2, 3, 4, 5, 5, 5, 4, 3, 3, 4], t240: false, region: "northeast" },
    "prov-heilongjiang": { x: 656, y: 74, hsrBj: "4.8h", hsrSh: "9.6h", hsrNn: null, budget: "290–560", months: [5, 4, 2, 3, 4, 5, 5, 5, 4, 2, 3, 5], t240: true, region: "northeast" },
    "prov-shanghai": { x: 604, y: 304, hsrBj: "4.5h", hsrSh: "0h", hsrNn: "9.2h", budget: "450–920", months: [2, 3, 4, 5, 5, 3, 3, 3, 4, 5, 5, 3], t240: true, region: "east" },
    "prov-jiangsu": { x: 576, y: 290, hsrBj: "3.7h", hsrSh: "0.9h", hsrNn: "8.9h", budget: "340–680", months: [2, 2, 4, 5, 5, 3, 3, 3, 5, 5, 4, 2], t240: true, region: "east" },
    "prov-zhejiang": { x: 586, y: 332, hsrBj: "4.6h", hsrSh: "0.8h", hsrNn: "8.5h", budget: "340–690", months: [2, 2, 4, 5, 5, 3, 2, 3, 4, 5, 5, 3], t240: true, region: "east" },
    "prov-anhui": { x: 542, y: 308, hsrBj: "3.8h", hsrSh: "2.1h", hsrNn: "8.1h", budget: "280–540", months: [2, 3, 4, 5, 5, 3, 3, 3, 5, 5, 4, 2], t240: true, region: "east" },
    "prov-fujian": { x: 566, y: 378, hsrBj: "7.8h", hsrSh: "4.2h", hsrNn: "6.4h", budget: "310–620", months: [3, 3, 4, 5, 4, 3, 3, 3, 4, 5, 5, 4], t240: true, region: "east" },
    "prov-jiangxi": { x: 526, y: 356, hsrBj: "5.8h", hsrSh: "2.8h", hsrNn: "6.1h", budget: "270–520", months: [2, 3, 4, 5, 5, 3, 3, 3, 4, 5, 4, 3], t240: true, region: "east" },
    "prov-shandong": { x: 562, y: 238, hsrBj: "1.6h", hsrSh: "3.1h", hsrNn: "9.8h", budget: "300–580", months: [2, 2, 4, 5, 5, 4, 4, 4, 5, 5, 3, 2], t240: true, region: "east" },
    "prov-henan": { x: 506, y: 274, hsrBj: "2.3h", hsrSh: "3.8h", hsrNn: "7.9h", budget: "270–530", months: [2, 2, 4, 5, 5, 3, 3, 3, 5, 5, 4, 2], t240: true, region: "north" },
    "prov-hubei": { x: 496, y: 318, hsrBj: "4.1h", hsrSh: "3.8h", hsrNn: "6.2h", budget: "290–560", months: [2, 3, 5, 5, 4, 3, 2, 2, 4, 5, 4, 3], t240: true, region: "south" },
    "prov-hunan": { x: 484, y: 364, hsrBj: "5.4h", hsrSh: "4.3h", hsrNn: "4.2h", budget: "280–550", months: [2, 2, 4, 5, 4, 3, 3, 3, 4, 5, 5, 3], t240: true, region: "south" },
    "prov-guangdong": { x: 504, y: 416, hsrBj: "7.8h", hsrSh: "6.6h", hsrNn: "3.1h", budget: "350–720", months: [4, 4, 4, 4, 3, 3, 3, 3, 4, 5, 5, 5], t240: true, region: "south" },
    "prov-guangxi": { x: 446, y: 414, hsrBj: "9.5h", hsrSh: "8.8h", hsrNn: "0h", budget: "250–490", months: [3, 3, 4, 5, 5, 3, 3, 3, 5, 5, 5, 4], t240: true, region: "south" },
    "prov-hainan": { x: 454, y: 468, hsrBj: null, hsrSh: null, hsrNn: null, budget: "340–690", months: [5, 5, 5, 4, 3, 2, 2, 2, 3, 4, 5, 5], t240: true, region: "south" },
    "prov-chongqing": { x: 416, y: 344, hsrBj: "6.8h", hsrSh: "6.9h", hsrNn: "4.8h", budget: "300–590", months: [3, 3, 5, 5, 4, 3, 2, 2, 4, 5, 4, 3], t240: true, region: "southwest" },
    "prov-sichuan": { x: 374, y: 332, hsrBj: "7.5h", hsrSh: "8.2h", hsrNn: "5.6h", budget: "310–620", months: [2, 3, 5, 5, 5, 4, 3, 3, 5, 5, 4, 2], t240: true, region: "southwest" },
    "prov-guizhou": { x: 424, y: 382, hsrBj: "8.1h", hsrSh: "7.4h", hsrNn: "2.3h", budget: "260–510", months: [2, 3, 4, 5, 5, 4, 4, 4, 5, 4, 3, 2], t240: true, region: "southwest" },
    "prov-yunnan": { x: 356, y: 404, hsrBj: "10.6h", hsrSh: "10.2h", hsrNn: "4.1h", budget: "270–560", months: [4, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 4], t240: true, region: "southwest" },
    "prov-tibet": { x: 244, y: 338, hsrBj: null, hsrSh: null, hsrNn: null, budget: "450–890", months: [1, 1, 3, 4, 5, 5, 4, 4, 5, 5, 3, 1], t240: false, region: "southwest" },
    "prov-shaanxi": { x: 446, y: 268, hsrBj: "4.2h", hsrSh: "5.6h", hsrNn: "8.4h", budget: "290–570", months: [2, 2, 4, 5, 5, 3, 3, 3, 5, 5, 4, 2], t240: true, region: "northwest" },
    "prov-gansu": { x: 368, y: 242, hsrBj: "6.8h", hsrSh: "8.2h", hsrNn: null, budget: "270–530", months: [1, 2, 3, 4, 5, 5, 4, 4, 5, 4, 2, 1], t240: false, region: "northwest" },
    "prov-qinghai": { x: 312, y: 266, hsrBj: "8.1h", hsrSh: "9.4h", hsrNn: null, budget: "280–550", months: [1, 1, 2, 3, 4, 5, 5, 5, 4, 3, 1, 1], t240: false, region: "northwest" },
    "prov-ningxia": { x: 416, y: 222, hsrBj: "5.8h", hsrSh: "7.8h", hsrNn: null, budget: "260–490", months: [1, 2, 3, 4, 5, 5, 4, 4, 5, 4, 2, 1], t240: false, region: "northwest" },
    "prov-xinjiang": { x: 186, y: 174, hsrBj: null, hsrSh: null, hsrNn: null, budget: "380–760", months: [1, 1, 3, 4, 5, 5, 5, 5, 5, 4, 2, 1], t240: false, region: "northwest" },
    "prov-hongkong": { x: 518, y: 438, hsrBj: "8.2h", hsrSh: "7.2h", hsrNn: "3.4h", budget: "680–1350", months: [4, 4, 4, 4, 3, 2, 2, 2, 3, 5, 5, 5], t240: true, region: "south" },
    "prov-macau": { x: 494, y: 444, hsrBj: "8.8h", hsrSh: "7.8h", hsrNn: "3.8h", budget: "590–1180", months: [4, 4, 4, 4, 3, 2, 2, 2, 3, 5, 5, 5], t240: true, region: "south" },
    "prov-taiwan": { x: 612, y: 392, hsrBj: null, hsrSh: null, hsrNn: null, budget: "480–950", months: [3, 4, 5, 5, 4, 3, 3, 3, 4, 5, 5, 4], t240: false, region: "east" }
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function loadCompareState() {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    var saved = Safe ? Safe.getJSON("cce_v9_compare_ids", null) : null;
    if (saved && Array.isArray(saved.ids)) {
      compareType = saved.type === "csc" ? "csc" : "province";
      compareIds = saved.ids.slice(0, 3);
    }
  }

  function saveCompareState() {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    if (Safe) Safe.setJSON("cce_v9_compare_ids", { type: compareType, ids: compareIds });
  }

  function getFilteredProvinces() {
    var list = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    return list.filter(function (pr) {
      var meta = PROVINCE_COORDS[pr.id] || { region: "east", hsrNn: null, t240: true };
      if (quickFilter === "all") return true;
      if (quickFilter === "vn-gateway") return meta.hsrNn && parseFloat(meta.hsrNn) <= 5.5;
      if (quickFilter === "transit-240h") return Boolean(meta.t240);
      return meta.region === quickFilter;
    });
  }

  function renderSeasonStrip(months) {
    var arr = Array.isArray(months) && months.length === 12 ? months : [3, 3, 4, 5, 5, 3, 3, 3, 4, 5, 4, 3];
    return (
      '<div class="v9-season-strip-12" aria-label="12-Month Climate Matrix">' +
      arr.map(function (score, idx) {
        var cls = score >= 5 ? "is-ideal" : (score === 4 ? "is-peak" : "");
        return '<span class="v9-season-cell ' + cls + '" title="T' + (idx + 1) + ': ' + score + '/5">T' + (idx + 1) + "</span>";
      }).join("") +
      "</div>"
    );
  }

  function renderSvgMap(provinces, enM) {
    var points = provinces.map(function (pr) {
      var c = PROVINCE_COORDS[pr.id] || { x: 480, y: 300, hsrNn: null, budget: "300–550" };
      var active = activeProvinceId === pr.id;
      var inCompare = compareType === "province" && compareIds.indexOf(pr.id) !== -1;
      var fill = active ? "#9E2A2B" : (inCompare ? "#2D5A4C" : "#A6844E");
      var r = active ? 10 : 7;
      var label = (pr.nameZh || pr.hanzi || "").slice(0, 3);
      return (
        '<g class="v9-svg-prov" data-v9-map-prov="' + esc(pr.id) + '" style="cursor:pointer;">' +
        '  <circle cx="' + c.x + '" cy="' + c.y + '" r="' + r + '" fill="' + fill + '" stroke="#FAF7F2" stroke-width="2"></circle>' +
        '  <text x="' + (c.x + 10) + '" y="' + (c.y + 4) + '" font-size="11" font-family="Noto Serif SC, sans-serif" fill="currentColor">' + esc(label) + "</text>" +
        "</g>"
      );
    }).join("");

    return (
      '<svg viewBox="100 40 620 460" role="img" aria-label="' + (enM ? "34 Provinces Interactive Atlas & 12306 HSR Links" : "Bản đồ 34 Tỉnh Thành & Trục Cao tốc 12306") + '" style="display:block;width:100%;height:auto;">' +
      '  <path d="M185,174 L368,242 L446,268 L506,274 L542,185 L604,304 L586,332 L504,416 L446,414 L356,404 L416,344 L446,268" fill="none" stroke="rgba(45,90,76,0.34)" stroke-width="2" stroke-dasharray="5 4"></path>' +
      '  <path d="M542,185 L506,274 L496,318 L484,364 L504,416 L518,438" fill="none" stroke="rgba(158,42,43,0.4)" stroke-width="2"></path>' +
      '  <path d="M446,414 L356,404" fill="none" stroke="#2D5A4C" stroke-width="2.5"></path>' +
      points +
      "</svg>"
    );
  }

  function renderRightCards(enM) {
    if (atlasTab === "expeditions") {
      var exps = (window.CCE_V7_ENCYCLOPEDIA && window.CCE_V7_ENCYCLOPEDIA.heritageExpeditions16) || [];
      return (
        '<div class="v9-atlas-cards-grid">' +
        exps.map(function (ex) {
          var title = enM ? (ex.titleEn || ex.titleVi) : ex.titleVi;
          var note = enM ? (ex.highlightsEn || ex.summaryEn || ex.summaryVi || "") : (ex.highlightsVi || ex.summaryVi || "");
          return (
            '<article class="v9-atlas-card">' +
            (ex.imagePath ? '<div class="v9-plate-editorial v9-lqip-box"><img loading="lazy" decoding="async" src="' + esc(ex.imagePath) + '" alt="' + esc(title) + '" /></div>' : "") +
            '  <div style="padding:12px 14px;display:flex;flex-direction:column;gap:6px;flex:1;">' +
            '    <div style="font-size:0.74rem;color:var(--v9-accent-jade);font-weight:700;">' + (enM ? "HERITAGE EXPEDITION · " : "HÀNH TRÌNH DI SẢN · ") + esc(ex.duration || "5–7 Days") + "</div>" +
            '    <h3 style="margin:0;font-family:var(--font-editorial,serif);font-size:1.05rem;">' + esc(title) + "</h3>" +
            '    <p style="margin:0;font-size:0.82rem;color:var(--v9-ink-secondary);">' + esc(String(note).slice(0, 115)) + "</p>" +
            '    <div style="margin-top:auto;padding-top:8px;">' +
            '      <button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-add-stop="' + esc(ex.id) + '" data-v9-stop-kind="expedition" data-v9-stop-vi="' + esc(ex.titleVi) + '" data-v9-stop-en="' + esc(ex.titleEn || ex.titleVi) + '" data-v9-stop-zh="' + esc(ex.zh || ex.titleVi) + '">+ ' + (enM ? "Add to Itinerary" : "Thêm vào lịch trình") + "</button>" +
            "    </div>" +
            "  </div>" +
            "</article>"
          );
        }).join("") +
        "</div>"
      );
    }

    var provs = getFilteredProvinces();
    return (
      '<div class="v9-atlas-cards-grid">' +
      provs.map(function (pr) {
        var meta = PROVINCE_COORDS[pr.id] || { hsrBj: "-", hsrSh: "-", hsrNn: "-", budget: "300–550", months: null, t240: true };
        var img = pr.heroImage || pr.imagePath || (pr.heritageAndLandmarks && pr.heritageAndLandmarks[0] && pr.heritageAndLandmarks[0].imageUrl) || "";
        var title = enM ? (pr.nameEn || pr.nameVi) : pr.nameVi;
        var cap = (pr.identity && (enM ? (pr.identity.capitalCityEn || pr.identity.capitalCity) : pr.identity.capitalCity)) || pr.capital || "";
        var isSel = activeProvinceId === pr.id;
        var isCmp = compareType === "province" && compareIds.indexOf(pr.id) !== -1;

        return (
          '<article class="v9-atlas-card ' + (isSel ? "is-synced" : "") + '" data-v9-prov-card="' + esc(pr.id) + '" tabindex="0">' +
          (img ? '<div class="v9-plate-editorial v9-lqip-box"><img loading="lazy" decoding="async" src="' + esc(img) + '" alt="' + esc(title) + '" /></div>' : "") +
          '  <div style="padding:12px 14px;display:flex;flex-direction:column;gap:4px;flex:1;">' +
          '    <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">' +
          '      <span style="font-size:0.75rem;color:var(--v9-accent-seal);font-weight:700;">' + esc(cap) + (meta.t240 ? " · 240h OK" : "") + "</span>" +
          '      <span style="font-size:0.74rem;letter-spacing:1px;color:var(--v9-accent-jade);" title="Must-see tier">' + (meta.t240 ? "●●●" : "●●○") + "</span>" +
          "    </div>" +
          '    <h3 style="margin:0;font-family:var(--font-editorial,serif);font-size:1.08rem;">' + esc(title) + ' <small class="zh-text">' + esc(pr.nameZh || pr.hanzi || "") + "</small></h3>" +
          renderSeasonStrip(meta.months) +
          '    <div style="display:flex;justify-content:space-between;font-size:0.76rem;color:var(--v9-ink-secondary);padding:4px 0;border-top:1px solid var(--v9-border-hairline);">' +
          '      <span><strong>' + (enM ? "Budget:" : "Chi phí:") + "</strong> " + esc(meta.budget) + " CNY/n</span>" +
          '      <span><strong>HSR Nam Ninh:</strong> ' + esc(meta.hsrNn || (enM ? "Flight/Rail" : "Bay/Nối tuyến")) + "</span>" +
          "    </div>" +
          '    <div style="display:flex;gap:6px;margin-top:auto;padding-top:8px;flex-wrap:wrap;">' +
          '      <button type="button" class="v9-btn v9-btn-sm ' + (isCmp ? "is-primary" : "") + '" data-v9-compare="province" data-v9-cmp-id="' + esc(pr.id) + '" aria-pressed="' + (isCmp ? "true" : "false") + '">' + (isCmp ? (enM ? "Selected" : "Đã chọn") : (enM ? "+ Compare" : "+ So sánh")) + "</button>" +
          '      <button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-add-stop="' + esc(pr.id) + '" data-v9-stop-kind="province" data-v9-stop-vi="' + esc(pr.nameVi) + '" data-v9-stop-en="' + esc(pr.nameEn || pr.nameVi) + '" data-v9-stop-zh="' + esc(pr.nameZh || pr.hanzi || pr.nameVi) + '">+ ' + (enM ? "Itinerary" : "Lịch trình") + "</button>" +
          "    </div>" +
          "  </div>" +
          "</article>"
        );
      }).join("") +
      "</div>"
    );
  }

  function renderSection(enM) {
    loadCompareState();
    var filtered = getFilteredProvinces();
    var filters = [
      { id: "all", vi: "Tất cả (34)", en: "All (34)" },
      { id: "vn-gateway", vi: "Gần VN <=5h HSR", en: "<=5h from Nanning" },
      { id: "transit-240h", vi: "Quá cảnh 240h", en: "240h Visa-Free" },
      { id: "east", vi: "Hoa Đông", en: "East China" },
      { id: "south", vi: "Hoa Nam", en: "South China" },
      { id: "southwest", vi: "Tây Nam", en: "Southwest" },
      { id: "north", vi: "Hoa Bắc", en: "North China" },
      { id: "northwest", vi: "Tây Bắc", en: "Northwest" }
    ];

    return (
      '<section class="v9-section-block" id="v9-split-atlas-section" aria-label="' + (enM ? "Airbnb Split-Screen Atlas" : "Bản đồ Chia Đôi 50/50 & Ma trận Du lịch") + '">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:12px;">' +
      '    <div>' +
      '      <div class="v9-kicker">' + (enM ? "PROVINCIAL ATLAS & SEASONAL MATRIX" : "ĐỊA VĂN HÓA VÀ HÀNH TRÌNH THỰC ĐỊA") + "</div>" +
      '      <h2 class="v9-lead-heading">' + (enM ? "34 provincial divisions, seasonal calendar and high-speed rail" : "Bản đồ 34 tỉnh thành, mùa du lịch và kết nối đường sắt cao tốc") + "</h2>" +
      '    </div>' +
      '    <div style="display:flex;gap:6px;" role="tablist">' +
      '      <button type="button" role="tab" aria-selected="' + (atlasTab === "provinces") + '" class="v9-btn v9-btn-sm ' + (atlasTab === "provinces" ? "is-primary" : "") + '" data-v9-atlas-tab="provinces">' + (enM ? "34 Provinces" : "34 Tỉnh Thành") + "</button>" +
      '      <button type="button" role="tab" aria-selected="' + (atlasTab === "expeditions") + '" class="v9-btn v9-btn-sm ' + (atlasTab === "expeditions" ? "is-primary" : "") + '" data-v9-atlas-tab="expeditions">' + (enM ? "16 Heritage Routes" : "16 Hành Trình Di Sản") + "</button>" +
      "    </div>" +
      "  </div>" +
      '  <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;">' +
      filters.map(function (f) {
        var on = quickFilter === f.id;
        return '<button type="button" class="v9-btn v9-btn-sm ' + (on ? "is-jade" : "") + '" data-v9-atlas-filter="' + f.id + '">' + esc(enM ? f.en : f.vi) + "</button>";
      }).join("") +
      "  </div>" +
      '  <div class="v9-split-atlas">' +
      '    <div class="v9-split-map-sticky" id="v9-atlas-map-pane">' +
      renderSvgMap(filtered, enM) +
      '      <div id="v9-map-hover-readout" style="margin-top:8px;padding:8px 10px;border-top:1px solid var(--v9-border-hairline);font-size:0.82rem;color:var(--v9-ink-secondary);">' +
      (enM ? "Hover any province card or tap a node on the map for instant two-way sync." : "Rê chuột vào thẻ bên phải hoặc chạm vào điểm trên bản đồ để đồng bộ tức thì 2 chiều.") +
      "      </div>" +
      "    </div>" +
      '    <div id="v9-atlas-cards-pane">' +
      renderRightCards(enM) +
      "    </div>" +
      "  </div>" +
      "</section>"
    );
  }

  function syncTray(visible, enM) {
    var existing = document.getElementById("v9-compare-tray");
    if (existing) existing.remove();
    if (!visible || !compareIds.length) return;
    var provs = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    var labels = compareIds.map(function (id) {
      var found = provs.find(function (p) { return p.id === id; });
      return found ? (enM ? (found.nameEn || found.nameVi) : found.nameVi) : id;
    });
    var bar = document.createElement("div");
    bar.id = "v9-compare-tray";
    bar.className = "v9-compare-tray";
    bar.innerHTML =
      '<div style="font-size:0.84rem;min-width:0;overflow:hidden;text-overflow:ellipsis;"><strong>' + (enM ? "Compare (" + compareIds.length + "/3): " : "So sánh (" + compareIds.length + "/3): ") + "</strong><span>" + esc(labels.join(", ")) + "</span></div>" +
      '<div style="display:flex;gap:6px;flex-shrink:0;">' +
      '  <button type="button" class="v9-btn v9-btn-sm is-primary" data-v9-open-compare="1">' + (enM ? "Open Comparison Table" : "So sánh song song") + "</button>" +
      '  <button type="button" class="v9-btn v9-btn-sm" data-v9-clear-compare="1">' + (enM ? "Clear" : "Bỏ chọn") + "</button>" +
      "</div>";
    document.body.appendChild(bar);
    bar.addEventListener("click", function (e) {
      if (e.target && e.target.closest && e.target.closest("[data-v9-clear-compare]")) {
        compareIds = [];
        saveCompareState();
        syncTray(false, enM);
        mount(enM);
      } else if (e.target && e.target.closest && e.target.closest("[data-v9-open-compare]")) {
        openCompareModal(enM);
      }
    });
  }

  function openCompareModal(enM) {
    var old = document.getElementById("v9-compare-modal");
    if (old) old.remove();
    var provs = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    var rows = compareIds.map(function (id) { return provs.find(function (p) { return p.id === id; }); }).filter(Boolean);
    if (!rows.length) return;

    var dlg = document.createElement("div");
    dlg.id = "v9-compare-modal";
    dlg.className = "v9-trip-drawer-backdrop";
    dlg.style.justifyContent = "center";
    dlg.style.alignItems = "center";
    dlg.innerHTML =
      '<div role="dialog" aria-modal="true" style="width:min(880px,94vw);max-height:84vh;overflow:auto;background:var(--v9-bg-canvas);color:var(--v9-ink-primary);border:1px solid var(--v9-ink-primary);padding:20px;border-radius:4px;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">' +
      '    <h3 style="margin:0;font-family:var(--font-editorial,serif);">' + (enM ? "Side-by-Side Destination Comparison" : "Bảng So Sánh Song Song Điểm Đến") + "</h3>" +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" id="v9-close-cmp">×</button>' +
      "  </div>" +
      '  <div class="v9-table-scroll"><table style="width:100%;border-collapse:collapse;font-size:0.86rem;">' +
      "    <thead><tr><th style=\"text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);\">Tiêu chí</th>" + rows.map(function (r) { return '<th style="text-align:left;padding:8px;border-bottom:1px solid var(--v9-border-hairline);">' + esc(enM ? (r.nameEn || r.nameVi) : r.nameVi) + " (" + esc(r.nameZh || r.hanzi || "") + ")</th>"; }).join("") + "</tr></thead>" +
      "    <tbody>" +
      '      <tr><td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Thủ phủ</td>' + rows.map(function (r) { return '<td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">' + esc((r.identity && r.identity.capitalCity) || r.capital || "-") + "</td>"; }).join("") + "</tr>" +
      '      <tr><td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">Ngân sách/ngày</td>' + rows.map(function (r) { var m = PROVINCE_COORDS[r.id] || {}; return '<td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">' + esc((m.budget || "300–550") + " CNY") + "</td>"; }).join("") + "</tr>" +
      '      <tr><td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">HSR từ Nam Ninh</td>' + rows.map(function (r) { var m = PROVINCE_COORDS[r.id] || {}; return '<td style="padding:8px;border-bottom:1px solid var(--v9-border-hairline);">' + esc(m.hsrNn || "Nối tuyến") + "</td>"; }).join("") + "</tr>" +
      '      <tr><td style="padding:8px;">Quá cảnh 240h</td>' + rows.map(function (r) { var m = PROVINCE_COORDS[r.id] || {}; return '<td style="padding:8px;">' + (m.t240 ? "Có hỗ trợ" : "Cần visa") + "</td>"; }).join("") + "</tr>" +
      "    </tbody></table></div>" +
      "</div>";
    document.body.appendChild(dlg);
    document.getElementById("v9-close-cmp").addEventListener("click", function () { dlg.remove(); });
  }

  function highlightProvince(pid, enM, scrollCard) {
    activeProvinceId = pid || "";
    var mapPane = document.getElementById("v9-atlas-map-pane");
    var readout = document.getElementById("v9-map-hover-readout");
    if (mapPane) {
      mapPane.querySelectorAll("[data-v9-map-prov]").forEach(function (g) {
        var on = g.getAttribute("data-v9-map-prov") === activeProvinceId;
        var circ = g.querySelector("circle");
        if (circ) {
          circ.setAttribute("r", on ? "10" : "7");
          circ.setAttribute("fill", on ? "#9E2A2B" : "#A6844E");
        }
      });
    }
    var pr = ((window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || []).find(function (x) { return x.id === pid; });
    if (readout && pr) {
      var m = PROVINCE_COORDS[pid] || {};
      readout.innerHTML = "<strong>" + esc(enM ? (pr.nameEn || pr.nameVi) : pr.nameVi) + " (" + esc(pr.nameZh || pr.hanzi || "") + ")</strong> · Budget " + esc(m.budget || "320–600") + " CNY/day · HSR Nanning: " + esc(m.hsrNn || "Relay");
    }
    if (scrollCard && pid) {
      var card = document.querySelector('[data-v9-prov-card="' + pid + '"]');
      if (card) {
        document.querySelectorAll(".v9-atlas-card.is-synced").forEach(function (c) { c.classList.remove("is-synced"); });
        card.classList.add("is-synced");
        card.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    }
  }

  function mount(enM) {
    loadCompareState();
    syncTray(true, enM);
    var root = document.getElementById("v9-split-atlas-section");
    if (!root || root.dataset.v9Bound === "1") return;
    root.dataset.v9Bound = "1";

    root.addEventListener("mouseover", function (e) {
      var card = e.target && e.target.closest ? e.target.closest("[data-v9-prov-card]") : null;
      if (card) highlightProvince(card.getAttribute("data-v9-prov-card"), enM, false);
    });

    root.addEventListener("click", function (e) {
      var mapNode = e.target && e.target.closest ? e.target.closest("[data-v9-map-prov]") : null;
      if (mapNode) {
        highlightProvince(mapNode.getAttribute("data-v9-map-prov"), enM, true);
        return;
      }
      var tabBtn = e.target && e.target.closest ? e.target.closest("[data-v9-atlas-tab]") : null;
      if (tabBtn) {
        atlasTab = tabBtn.getAttribute("data-v9-atlas-tab") || "provinces";
        root.outerHTML = renderSection(enM);
        mount(enM);
        return;
      }
      var fBtn = e.target && e.target.closest ? e.target.closest("[data-v9-atlas-filter]") : null;
      if (fBtn) {
        quickFilter = fBtn.getAttribute("data-v9-atlas-filter") || "all";
        root.outerHTML = renderSection(enM);
        mount(enM);
        return;
      }
      var cmpBtn = e.target && e.target.closest ? e.target.closest("[data-v9-compare]") : null;
      if (cmpBtn) {
        var cid = cmpBtn.getAttribute("data-v9-cmp-id");
        compareType = cmpBtn.getAttribute("data-v9-compare") || "province";
        var idx = compareIds.indexOf(cid);
        if (idx >= 0) compareIds.splice(idx, 1);
        else if (compareIds.length < 3) compareIds.push(cid);
        saveCompareState();
        syncTray(true, enM);
        var cpane = document.getElementById("v9-atlas-cards-pane");
        if (cpane) {
          cpane.innerHTML = renderRightCards(enM);
          if (window.CCE_V9_LOADER) window.CCE_V9_LOADER.hydrateImages(cpane);
        }
        return;
      }
      var addBtn = e.target && e.target.closest ? e.target.closest("[data-v9-add-stop]") : null;
      if (addBtn && window.CCE_V9_TRIP_PLANNER) {
        window.CCE_V9_TRIP_PLANNER.addStop({
          id: addBtn.getAttribute("data-v9-add-stop"),
          kind: addBtn.getAttribute("data-v9-stop-kind") || "province",
          nameVi: addBtn.getAttribute("data-v9-stop-vi"),
          nameEn: addBtn.getAttribute("data-v9-stop-en"),
          nameZh: addBtn.getAttribute("data-v9-stop-zh")
        }, enM);
      }
    });
  }

  window.CCE_V9_ATLAS = {
    PROVINCE_COORDS: PROVINCE_COORDS,
    renderSection: renderSection,
    mount: mount,
    syncTray: syncTray,
    highlightProvince: highlightProvince
  };
})();
