// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Unified 10-Scene 3D Studio Hub
// Coordinates all 10 WebGL Studios via CCE_WEBGL_MGR (Strict 1 Active Context)
// ============================================================================

(function () {
  "use strict";

  var activeStudio = "relics"; // default sub-studio in Museum Hub
  var cinemaOpen = false;
  var cinemaTheme = "dark"; // dark | wood | xuan

  var STUDIOS = [
    { id: "relics", vi: "4 Bảo vật 3D", en: "4 National Relics" },
    { id: "tiantan", vi: "Thiên Đàn 3D", en: "Temple of Heaven" },
    { id: "dougong", vi: "Đấu Củng 4 Tầng", en: "Dougong 4-Tier Joinery" },
    { id: "vernacular", vi: "Thổ Lâu / Tứ Hợp Viện / Huy Phái", en: "Vernacular Cutaways" },
    { id: "logistics", vi: "Tơ Lụa ↔ Trung–Âu 3D", en: "Silk Road ↔ EU–China 3D" },
    { id: "hydraulic", vi: "Đô Giang Yển 3D", en: "Dujiangyan Hydraulics" },
    { id: "armillary", vi: "Hồn Thiên Nghi & Âm Dương Ngũ Hành", en: "Armillary & Wuxing Disk" },
    { id: "chimes", vi: "Biên Chung / Trịnh Hòa / Binh Mã Dũng", en: "Chime Bells & Treasure Ship" },
    { id: "v6heritage", vi: "8 Studio Di sản (#11–#18)", en: "8 Heritage Studios (#11–#18)" },
    { id: "v7masterpieces", vi: "6 Kiệt Tác 3D (#19–#24)", en: "6 3D Masterpieces (#19–#24)" },
    { id: "v8studios", vi: "4 Studio Đương Đại (#25–#28)", en: "4 New Studios (#25–#28)" }
  ];

  function renderUnifiedStudio(enM, uiLang) {
    var inner = "";
    if (activeStudio === "dougong" && window.CCE_3D_DOUGONG) {
      inner = window.CCE_3D_DOUGONG.renderPanel(enM);
    } else if (activeStudio === "vernacular" && window.CCE_3D_VERNACULAR) {
      inner = window.CCE_3D_VERNACULAR.renderPanel(enM);
    } else if (activeStudio === "logistics" && window.CCE_3D_LOGISTICS) {
      inner = window.CCE_3D_LOGISTICS.renderPanel(enM);
    } else if (activeStudio === "hydraulic" && window.CCE_3D_HYDRAULIC) {
      inner = window.CCE_3D_HYDRAULIC.renderPanel(enM);
    } else if (activeStudio === "armillary" && window.CCE_3D_ARMILLARY) {
      inner = window.CCE_3D_ARMILLARY.renderPanel(enM);
    } else if (activeStudio === "chimes" && window.CCE_3D_ARTIFACTS_EXTRA) {
      inner = window.CCE_3D_ARTIFACTS_EXTRA.renderPanel(enM);
    } else if (activeStudio === "v6heritage" && window.CCE_3D_V6_HERITAGE) {
      inner = window.CCE_3D_V6_HERITAGE.renderPanel(enM);
    } else if (activeStudio === "v7masterpieces" && window.CCE_3D_V7_MASTERPIECES) {
      inner = window.CCE_3D_V7_MASTERPIECES.renderPanel(enM);
    } else if (activeStudio === "v8studios" && window.CCE_3D_V8_STUDIOS) {
      inner = window.CCE_3D_V8_STUDIOS.renderPanel(enM);
    } else {
      var baseHtml = (window.CCE_ARTIFACTS_3D ? window.CCE_ARTIFACTS_3D.renderSection(enM, uiLang) : "") +
        renderLauncherBar(enM);
      if (!cinemaOpen) return baseHtml;
      return (
        '<div class="v9-cinema-overlay" role="dialog" aria-modal="true">' +
        '  <div class="v9-cinema-frame" style="padding:1rem;background:' + (cinemaTheme === "wood" ? "#261B12" : (cinemaTheme === "xuan" ? "#EFE9DC" : "#141311")) + ';color:' + (cinemaTheme === "xuan" ? "#1A1918" : "#F3EFE6") + ';overflow:auto;">' +
        '    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">' +
        '      <strong class="v9-kicker" style="margin:0;color:#E5A93C;">' + (enM ? "INTERACTIVE 3D HERITAGE MODELS" : "KHÔNG GIAN MÔ HÌNH 3D TƯƠNG TÁC") + '</strong>' +
        '      <button type="button" class="v9-btn v9-btn-sm is-primary" data-s3d-act="toggle-cinema">' + (enM ? "Exit fullscreen (Esc)" : "Thoát toàn màn hình (Esc)") + '</button>' +
        '    </div>' +
        baseHtml +
        '  </div>' +
        '</div>'
      );
    }

    var bodyHtml = (
      '<section class="card mt-2 mb-2 ' + (cinemaOpen ? "v9-cinema-overlay" : "") + '" id="museum-3d-studio-section" style="padding:1.2rem 1.35rem;border-top:3px solid var(--imperial-red);">' +
      (cinemaOpen ? '<div class="v9-cinema-frame" style="padding:1rem;background:' + (cinemaTheme === "wood" ? "#261B12" : (cinemaTheme === "xuan" ? "#EFE9DC" : "#141311")) + ';color:' + (cinemaTheme === "xuan" ? "#1A1918" : "#F3EFE6") + ';overflow:auto;">' : '') +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;">' +
      '    <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "INTERACTIVE 3D HERITAGE MODELS · 二十八大三维数字实验室" : "KHÔNG GIAN MÔ HÌNH 3D TƯƠNG TÁC · 二十八大三维数字实验室") + '</div>' +
      '    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">' +
      '      <button type="button" class="v9-btn v9-btn-sm is-primary" data-s3d-act="toggle-cinema">' + (cinemaOpen ? (enM ? "Exit fullscreen (Esc)" : "Thoát toàn màn hình (Esc)") : (enM ? "⤢ Fullscreen view" : "⤢ Xem toàn màn hình")) + '</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-s3d-act="open-china-map">' + (enM ? "Open 34-Province 3D Map →" : "Mở bản đồ 3D 34 tỉnh →") + '</button>' +
      '    </div>' +
      '  </div>' +
      renderLauncherPills() +
      '  <div style="margin-top:0.9rem;">' + inner + '</div>' +
      (cinemaOpen ? '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-top:10px;padding-top:8px;border-top:1px solid rgba(229,169,60,0.22);"><div><button type="button" class="v9-btn v9-btn-sm" data-s3d-act="step-studio" data-dir="-1">← Studio</button> <button type="button" class="v9-btn v9-btn-sm" data-s3d-act="step-studio" data-dir="1">Studio →</button></div><div style="display:flex;gap:6px;"><button type="button" class="v9-btn v9-btn-sm" data-s3d-act="cinema-theme" data-val="dark">Dark Inkstone</button><button type="button" class="v9-btn v9-btn-sm" data-s3d-act="cinema-theme" data-val="wood">Huanghuali</button><button type="button" class="v9-btn v9-btn-sm" data-s3d-act="cinema-theme" data-val="xuan">Xuan Paper</button></div></div></div>' : '') +
      '</section>'
    );
    return bodyHtml;
  }

  function renderLauncherPills() {
    var enM = (window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
    return (
      '<div class="filter-bar" role="tablist" aria-label="3D Studio Selector">' +
      STUDIOS.map(function (st) {
        return '<button type="button" class="filter-pill ' + (activeStudio === st.id ? "active" : "") + '" data-s3d-act="pick" data-val="' + st.id + '" style="font-size:0.75rem;">' + (enM ? st.en : st.vi) + '</button>';
      }).join("") +
      '</div>'
    );
  }

  function renderLauncherBar(enM) {
    return (
      '<div class="card mb-2" id="cce-10scene-3d-launcher" style="padding:0.9rem 1.1rem;border-left:4px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.55rem;">' +
      '    <strong style="font-size:0.88rem;">' + (enM ? "Switch across interactive 3D architecture, hydraulics & heritage models:" : "Chuyển nhanh giữa các mô hình kiến trúc, thủy lợi và cổ vật 3D:") + '</strong>' +
      '    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">' +
      '      <button type="button" class="v9-btn v9-btn-sm is-primary" data-s3d-act="toggle-cinema">' + (cinemaOpen ? (enM ? "Exit fullscreen (Esc)" : "Thoát toàn màn hình (Esc)") : (enM ? "⤢ Fullscreen view" : "⤢ Xem toàn màn hình")) + '</button>' +
      '      <button type="button" class="btn btn-ghost btn-sm" data-s3d-act="open-china-map">' + (enM ? "3D 34-Province Map →" : "Bản đồ 3D 34 Tỉnh →") + '</button>' +
      '    </div>' +
      '  </div>' +
      renderLauncherPills() +
      '</div>'
    );
  }

  function initAllMounted() {
    if (window.CCE_CHINA_3D_MAP) window.CCE_CHINA_3D_MAP.initMountedCanvasIfAny();
    if (window.CCE_3D_DOUGONG) window.CCE_3D_DOUGONG.initMountedCanvasIfAny();
    if (window.CCE_3D_VERNACULAR) window.CCE_3D_VERNACULAR.initMountedCanvasIfAny();
    if (window.CCE_3D_LOGISTICS) window.CCE_3D_LOGISTICS.initMountedCanvasIfAny();
    if (window.CCE_3D_HYDRAULIC) window.CCE_3D_HYDRAULIC.initMountedCanvasIfAny();
    if (window.CCE_3D_ARMILLARY) window.CCE_3D_ARMILLARY.initMountedCanvasIfAny();
    if (window.CCE_3D_ARTIFACTS_EXTRA) window.CCE_3D_ARTIFACTS_EXTRA.initMountedCanvasIfAny();
    if (window.CCE_3D_V6_HERITAGE) window.CCE_3D_V6_HERITAGE.initMountedCanvasIfAny();
    if (window.CCE_3D_V7_MASTERPIECES) window.CCE_3D_V7_MASTERPIECES.initMountedCanvasIfAny();
    if (window.CCE_3D_V8_STUDIOS) window.CCE_3D_V8_STUDIOS.initMountedCanvasIfAny();
  }

  function hasAny3dCanvasInDom() {
    return Boolean(
      document.querySelector("[data-fc3d-mount]") ||
      document.getElementById("cce-artifact-3d-canvas") ||
      document.getElementById("cce-china-3d-canvas") ||
      document.getElementById("cce-3d-dougong-canvas") ||
      document.getElementById("cce-3d-vernacular-canvas") ||
      document.getElementById("cce-3d-logistics-canvas") ||
      document.getElementById("cce-3d-hydraulic-canvas") ||
      document.getElementById("cce-3d-armillary-canvas") ||
      document.getElementById("cce-3d-extra-canvas") ||
      document.getElementById("cce-3d-v6-heritage-canvas") ||
      document.getElementById("cce-3d-v7-masterpieces-canvas") ||
      document.getElementById("cce-3d-v8-studios-canvas")
    );
  }

  function bind() {
    if (window._cceS3dBound || typeof document === "undefined") return;
    window._cceS3dBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-s3d-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-s3d-act");
      if (act === "pick") {
        activeStudio = el.getAttribute("data-val") || "relics";
        if (activeStudio === "tiantan" && window.CCE_ARTIFACTS_3D) {
          if (!window.CCE_ARTIFACTS_3D.isTiantanOpen()) window.CCE_ARTIFACTS_3D.toggleTiantan();
        } else if (activeStudio === "relics" && window.CCE_ARTIFACTS_3D && window.CCE_ARTIFACTS_3D.isTiantanOpen()) {
          window.CCE_ARTIFACTS_3D.toggleTiantan();
        }
        var loadProm = window.CCE_LAZY ? Promise.all([
          window.CCE_LAZY.ensureBundle("3d-pack"),
          window.CCE_LAZY.ensureBundle("3d-studio-ext-pack")
        ]) : Promise.resolve();
        loadProm.then(function () {
          if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
        });
      } else if (act === "toggle-cinema") {
        cinemaOpen = !cinemaOpen;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "cinema-theme") {
        cinemaTheme = el.getAttribute("data-val") || "dark";
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "step-studio") {
        var dir = parseInt(el.getAttribute("data-dir") || "1", 10);
        var curI = STUDIOS.findIndex(function (s) { return s.id === activeStudio; });
        var nextI = (curI + dir + STUDIOS.length) % STUDIOS.length;
        activeStudio = STUDIOS[nextI].id;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "open-china-map") {
        if (window.CCE_CHINA_3D_MAP) window.CCE_CHINA_3D_MAP.set3DMode(true);
        var mapBtn = document.querySelector('[data-action="nav"][data-page="regions"]');
        if (mapBtn) mapBtn.click();
      }
    });
  }
  bind();

  window.CCE_3D_HUB = {
    getStudio: function () { return activeStudio; },
    setStudio: function (id) { activeStudio = id || "relics"; },
    isCinemaOpen: function () { return Boolean(cinemaOpen); },
    closeCinema: function () {
      if (cinemaOpen) {
        cinemaOpen = false;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    },
    renderUnifiedStudio: renderUnifiedStudio,
    renderLauncherBar: renderLauncherBar,
    initAllMounted: initAllMounted,
    hasAny3dCanvasInDom: hasAny3dCanvasInDom
  };
})();
