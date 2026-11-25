// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Google Arts & Culture Visual Discovery Engine
// Spec 3: 10 Mineral Pigments + 7 Macro Historical Eras + Deep-Zoom 3.2x Loupe
// ============================================================================
(function () {
  "use strict";

  var activePigment = "all";
  var activeEra = "all";
  var loupeState = { open: false, src: "", title: "", meta: "", zoom: 2.4, rx: 0.5, ry: 0.5, returnFocus: null };

  var PIGMENTS = [
    { id: "cinnabar", hex: "#8C2318", vi: "Chu Sa (朱砂)", en: "Cinnabar" },
    { id: "azurite", hex: "#1D4E6E", vi: "Thạch Thanh (石青)", en: "Azurite Blue" },
    { id: "malachite", hex: "#1F6E5C", vi: "Thạch Lục (石绿)", en: "Malachite Green" },
    { id: "gamboge", hex: "#C89232", vi: "Đằng Hoàng (藤黄)", en: "Gamboge Silk" },
    { id: "ink", hex: "#1D1B18", vi: "Tùng Yên Mặc (松烟墨)", en: "Pine Soot Ink" },
    { id: "xuan", hex: "#EDE7DA", vi: "Bạch Tuyên (白宣)", en: "Xuan Paper" },
    { id: "cobalt", hex: "#2A4B7C", vi: "Thanh Hoa (青花)", en: "Cobalt Blue" },
    { id: "plum", hex: "#5A2D46", vi: "Quân Tử (钧紫)", en: "Jun Purple" },
    { id: "gold", hex: "#A88940", vi: "Kim Điệp (金箔)", en: "Imperial Gold" },
    { id: "celadon", hex: "#6F8E7B", vi: "Thanh Từ (青瓷)", en: "Song Celadon" }
  ];

  var ERAS = [
    { id: "all", vi: "7 Đại Kỷ Nguyên", en: "All 7 Eras" },
    { id: "shang-zhou", vi: "Thương – Chu (1600–256 TCN)", en: "Shang – Zhou" },
    { id: "qin-han", vi: "Tần – Hán (221 TCN–220)", en: "Qin – Han" },
    { id: "tang-song", vi: "Đường – Tống (618–1279)", en: "Tang – Song" },
    { id: "yuan-ming-qing", vi: "Nguyên – Minh – Thanh", en: "Yuan – Ming – Qing" },
    { id: "republican", vi: "Cận Đại (1912–1949)", en: "Modern Early" },
    { id: "reform", vi: "Đổi Mới (1950–2015)", en: "Reform Era" },
    { id: "digital-green", vi: "Số & Xanh (2016–2026)", en: "Digital & Green" }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function inferEra(dynastyStr) {
    var d = String(dynastyStr || "").toLowerCase();
    if (/thương|shang|chu|zhou|ân khư|sanxingdui|tam tinh đôi/.test(d)) return "shang-zhou";
    if (/tần|qin|hán|han|ngụy|tấn|wei|jin/.test(d)) return "qin-han";
    if (/đường|tang|ngũ đại|five|tống|song|tùy|sui/.test(d)) return "tang-song";
    if (/nguyên|yuan|minh|ming|thanh|qing/.test(d)) return "yuan-ming-qing";
    if (/191|192|193|194|dân quốc|republic|ngũ tứ/.test(d)) return "republican";
    if (/195|196|197|198|199|200|2010|hiện đại|modern/.test(d)) return "reform";
    if (/2016|202|xanh|green|digital/.test(d)) return "digital-green";
    return "tang-song";
  }

  function inferPigments(text) {
    var t = String(text || "").toLowerCase();
    var hits = [];
    if (/chu sa|triện|seal|cố cung|đồng|bronze|chu|thương|red|đỏ/.test(t)) hits.push("cinnabar");
    if (/thạch thanh|thiên lý|azurite|thanh lục|lam|xanh biếc/.test(t)) hits.push("azurite");
    if (/thạch lục|lục|rừng|tre|trúc|malachite|ngọc/.test(t)) hits.push("malachite");
    if (/lụa|silk|vàng|hoàng|thanh minh|phú xuân|hàn hi tải/.test(t)) hits.push("gamboge");
    if (/mặc|thủy mặc|ink|thư pháp|calligraphy|bìa|đá|inkstone|tống/.test(t)) hits.push("ink");
    if (/giấy|tuyên|xuan|bạch|đức hóa|white|trắng/.test(t)) hits.push("xuan");
    if (/thanh hoa|cobalt|sứ|gốm|porcelain|cảnh đức|ceramic/.test(t)) hits.push("cobalt");
    if (/quân|jun|tím|plum|mận|mẫu đơn/.test(t)) hits.push("plum");
    if (/kim|gold|điện thái hòa|biên chung|chime|vàng ròng/.test(t)) hits.push("gold");
    if (/thanh từ|celadon|nhữ diêu|ru ware|long tuyền|ly trần/.test(t)) hits.push("celadon");
    if (!hits.length) hits.push("ink", "xuan");
    return hits.slice(0, 3);
  }

  function buildCatalog(pageId, enM) {
    var catalog = [];
    var paintings = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    var museum = (window.CCE_MUSEUM && window.CCE_MUSEUM.artifacts) || [];
    var masks = (window.CCE_V8_DATA && window.CCE_V8_DATA.masks12) || [];

    if (pageId === "paintings") {
      paintings.forEach(function (pt) {
        if (!pt.image) return;
        var dyn = pt.dynasty ? (pt.dynasty.nameEn || pt.dynasty.nameVi || "") : "";
        var blob = [pt.id, pt.titleVi, pt.titleEn, pt.medium, pt.genre, dyn].join(" ");
        catalog.push({
          kind: "painting",
          id: pt.id,
          title: enM ? (pt.titleEn || pt.titleVi) : pt.titleVi,
          zh: pt.titleZh,
          sub: (pt.artist ? (enM ? (pt.artist.nameEn || pt.artist.nameVi) : pt.artist.nameVi) : "") + " · " + dyn,
          src: pt.image,
          pigments: inferPigments(blob),
          era: inferEra(dyn),
          actionAttr: 'data-action="open-painting-detail" data-id="' + esc(pt.id) + '"'
        });
      });
    } else {
      museum.forEach(function (a) {
        if (!a.imageUrl) return;
        var per = a.periodLabelEn || a.periodLabel || "";
        var blob = [a.id, a.nameVi, a.nameEn, a.category, a.medium, per, a.collection].join(" ");
        catalog.push({
          kind: "artifact",
          id: a.id,
          title: enM ? (a.nameEn || a.nameVi) : a.nameVi,
          zh: a.nameZh,
          sub: (enM ? (a.collectionEn || a.collection || "") : (a.collection || "")) + " · " + per,
          src: a.imageUrl,
          pigments: inferPigments(blob),
          era: inferEra(per),
          actionAttr: 'data-action="open-artifact" data-id="' + esc(a.id) + '"'
        });
      });
      masks.forEach(function (m) {
        if (!m.imagePath) return;
        catalog.push({
          kind: "mask",
          id: m.id,
          title: enM ? (m.titleEn || m.titleVi) : m.titleVi,
          zh: m.zh || m.hanzi || "",
          sub: enM ? "Peking Opera Facial Pigment" : "Liên Phổ Kinh Kịch · Sắc tố sân khấu",
          src: m.imagePath,
          pigments: inferPigments([m.titleVi, m.titleEn, m.symbolismVi, m.colorName].join(" ")),
          era: "yuan-ming-qing",
          actionAttr: 'data-action="nav" data-page="traditional"'
        });
      });
    }
    return catalog;
  }

  function renderCardsHTML(catalog, enM) {
    var filtered = catalog.filter(function (it) {
      var okPig = activePigment === "all" || it.pigments.indexOf(activePigment) !== -1;
      var okEra = activeEra === "all" || it.era === activeEra;
      return okPig && okEra;
    });
    if (!filtered.length) {
      return '<p style="grid-column:1/-1;padding:18px;color:#CCC5B8;">' + (enM ? "No works match both selected pigment and era. Reset filters to inspect full hall." : "Chưa có tác phẩm trùng đồng thời cả sắc tố và kỷ nguyên này — hãy chọn lại 'Tất cả'.") + "</p>";
    }
    return filtered.slice(0, 9).map(function (it) {
      var isPortrait = it.kind === "mask";
      return (
        '<article class="v9-exhibit-card">' +
        '  <div class="' + (isPortrait ? "v9-plate-portrait" : "v9-plate-editorial") + ' v9-lqip-box">' +
        '    <img loading="lazy" decoding="async" src="' + esc(it.src) + '" alt="' + esc(it.title) + '" />' +
        '  </div>' +
        '  <div class="v9-exhibit-placard">' +
        '    <div style="font-size:0.74rem;color:#E5A93C;font-family:var(--font-mono,monospace);">' + esc(it.zh) + "</div>" +
        '    <h4 style="margin:0;font-family:var(--font-editorial,serif);font-size:1.05rem;color:#F3EFE6;">' + esc(it.title) + "</h4>" +
        '    <div style="font-size:0.78rem;color:#CCC5B8;">' + esc(it.sub) + "</div>" +
        '    <div style="display:flex;gap:8px;margin-top:auto;padding-top:8px;flex-wrap:wrap;">' +
        '      <button type="button" class="v9-btn v9-btn-sm" ' + it.actionAttr + '>' + (enM ? "Wall Dossier" : "Hồ sơ chi tiết") + "</button>" +
        '      <button type="button" class="v9-btn v9-btn-sm is-primary" data-v9-loupe-src="' + esc(it.src) + '" data-v9-loupe-title="' + esc(it.title) + '" data-v9-loupe-meta="' + esc(it.sub) + '">' + (enM ? "3.2x Loupe" : "Soi Kính Lúp 3.2x") + "</button>" +
        '    </div>' +
        '  </div>' +
        '</article>'
      );
    }).join("");
  }

  function renderSection(pageId, enM) {
    var catalog = buildCatalog(pageId, enM);
    var activeP = PIGMENTS.find(function (p) { return p.id === activePigment; });
    return (
      '<section class="v9-exhibition-dark" id="v9-visual-discovery-panel" data-v9-page="' + esc(pageId) + '" aria-label="' + (enM ? "Google Arts & Culture Visual Discovery" : "Khám phá theo Sắc tố Khoáng vật và Kỷ nguyên") + '">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;">' +
      '    <div>' +
      '      <div class="v9-kicker" style="color:#E5A93C;">' + (enM ? "MINERAL PIGMENTS & HISTORICAL ERAS" : "PHÒNG TRƯNG BÀY TỐI · SẮC TỐ KHOÁNG VẬT VÀ NIÊN BIỂU") + "</div>" +
      '      <h2 style="margin:0;font-family:var(--font-editorial,serif);font-size:1.55rem;color:#F3EFE6;">' + (enM ? "Explore paintings and relics by mineral pigment" : "Tìm hiểu quốc họa và bảo vật qua mười sắc tố khoáng vật") + "</h2>" +
      '    </div>' +
      '    <button type="button" class="v9-btn v9-btn-sm" data-v9-pigment="all" data-v9-era="all">' + (enM ? "Reset (" + catalog.length + " works)" : "Xem tất cả (" + catalog.length + " tác phẩm)") + "</button>" +
      '  </div>' +
      '  <div class="v9-pigment-bar" role="toolbar" aria-label="' + (enM ? "Mineral Pigments" : "Bảng màu khoáng vật") + '">' +
      '    <span style="font-size:0.8rem;color:#CCC5B8;min-width:120px;">' + (activeP ? (enM ? activeP.en : activeP.vi) : (enM ? "All 10 Pigments" : "10 Sắc tố khoáng")) + ":</span>" +
      PIGMENTS.map(function (p) {
        var on = activePigment === p.id;
        return '<button type="button" class="v9-pigment-dot ' + (on ? "is-active" : "") + '" style="--pigment-hex:' + p.hex + ';" data-v9-pigment="' + p.id + '" title="' + esc(enM ? p.en : p.vi) + '" aria-label="' + esc(enM ? p.en : p.vi) + '" aria-pressed="' + (on ? "true" : "false") + '"></button>';
      }).join("") +
      '  </div>' +
      '  <div class="v9-era-scrubber" role="tablist" aria-label="' + (enM ? "7 Macro Historical Eras" : "Trục 7 đại kỷ nguyên") + '">' +
      ERAS.map(function (er) {
        var on = activeEra === er.id;
        return '<button type="button" role="tab" aria-selected="' + (on ? "true" : "false") + '" class="v9-btn v9-btn-sm ' + (on ? "is-primary" : "") + '" data-v9-era="' + er.id + '">' + esc(enM ? er.en : er.vi) + "</button>";
      }).join("") +
      '  </div>' +
      '  <div id="v9-discovery-grid-slot" class="v9-discovery-grid">' +
      renderCardsHTML(catalog, enM) +
      '  </div>' +
      '</section>'
    );
  }

  function renderLoupeModal(enM) {
    var existing = document.getElementById("v9-loupe-modal");
    if (existing) existing.remove();
    if (!loupeState.open) return;

    var wrap = document.createElement("div");
    wrap.id = "v9-loupe-modal";
    wrap.className = "v9-loupe-overlay";
    wrap.setAttribute("role", "dialog");
    wrap.setAttribute("aria-modal", "true");
    wrap.setAttribute("aria-label", loupeState.title);
    wrap.innerHTML =
      '<div style="width:min(1080px,94vw);display:flex;justify-content:space-between;align-items:center;gap:12px;margin-bottom:10px;flex-wrap:wrap;">' +
      '  <div><strong style="font-size:1.15rem;font-family:var(--font-editorial,serif);">' + esc(loupeState.title) + '</strong> <span style="font-size:0.8rem;color:#CCC5B8;margin-left:8px;">' + esc(loupeState.meta) + "</span></div>" +
      '  <div style="display:flex;gap:6px;align-items:center;">' +
      '    <button type="button" class="v9-btn v9-btn-sm" data-loupe-zoom="1.6">1.6x</button>' +
      '    <button type="button" class="v9-btn v9-btn-sm" data-loupe-zoom="2.4">2.4x</button>' +
      '    <button type="button" class="v9-btn v9-btn-sm" data-loupe-zoom="3.2">3.2x</button>' +
      '    <button type="button" class="v9-btn v9-btn-sm is-primary" data-loupe-close="1">' + (enM ? "Close ×" : "Đóng ×") + "</button>" +
      "  </div>" +
      "</div>" +
      '<div class="v9-loupe-stage" id="v9-loupe-stage">' +
      '  <img id="v9-loupe-img" src="' + esc(loupeState.src) + '" alt="' + esc(loupeState.title) + '" />' +
      '  <div id="v9-loupe-lens" class="v9-loupe-lens" style="background-image:url(\'' + esc(loupeState.src) + '\');"></div>' +
      '  <div class="v9-loupe-minimap" aria-hidden="true">' +
      '    <img src="' + esc(loupeState.src) + '" alt="" style="width:100%;height:100%;object-fit:cover;opacity:0.65;" />' +
      '    <div id="v9-loupe-minimap-box" style="position:absolute;border:1.5px solid #E5A93C;width:44px;height:28px;left:40%;top:35%;"></div>' +
      "  </div>" +
      "</div>" +
      '<p style="font-size:0.8rem;color:#CCC5B8;margin-top:8px;">' + (enM ? "Move pointer or touch across artwork to inspect fine brushwork and seal details at up to 3.2x magnification." : "Di chuyển chuột hoặc chạm ngón tay qua bề mặt tác phẩm để soi nét bút, lạc khoản và men sứ ở độ phóng đại tới 3.2x.") + "</p>";

    document.body.appendChild(wrap);
    updateLensVisual();

    var stage = document.getElementById("v9-loupe-stage");
    var track = function (clientX, clientY) {
      var rect = stage.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      loupeState.rx = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      loupeState.ry = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      updateLensVisual();
    };
    stage.addEventListener("mousemove", function (e) { track(e.clientX, e.clientY); });
    stage.addEventListener("touchmove", function (e) {
      if (e.touches && e.touches[0]) track(e.touches[0].clientX, e.touches[0].clientY);
    }, { passive: true });

    wrap.addEventListener("click", function (e) {
      var zBtn = e.target && e.target.closest ? e.target.closest("[data-loupe-zoom]") : null;
      if (zBtn) {
        loupeState.zoom = parseFloat(zBtn.getAttribute("data-loupe-zoom")) || 2.4;
        updateLensVisual();
        return;
      }
      if (e.target && e.target.closest && e.target.closest("[data-loupe-close]")) {
        closeLoupe();
      }
    });
  }

  function updateLensVisual() {
    var stage = document.getElementById("v9-loupe-stage");
    var lens = document.getElementById("v9-loupe-lens");
    var box = document.getElementById("v9-loupe-minimap-box");
    if (!stage || !lens) return;
    var rect = stage.getBoundingClientRect();
    var lw = 210;
    var lh = 210;
    lens.style.left = Math.max(8, Math.min(rect.width - lw - 8, loupeState.rx * rect.width - lw / 2)) + "px";
    lens.style.top = Math.max(8, Math.min(rect.height - lh - 8, loupeState.ry * rect.height - lh / 2)) + "px";
    lens.style.backgroundSize = Math.round(rect.width * loupeState.zoom) + "px " + Math.round(rect.height * loupeState.zoom) + "px";
    lens.style.backgroundPosition = (loupeState.rx * 100).toFixed(1) + "% " + (loupeState.ry * 100).toFixed(1) + "%";
    if (box) {
      box.style.left = Math.max(2, Math.min(116, loupeState.rx * 120)) + "px";
      box.style.top = Math.max(2, Math.min(60, loupeState.ry * 64)) + "px";
    }
  }

  function closeLoupe() {
    loupeState.open = false;
    var m = document.getElementById("v9-loupe-modal");
    if (m) m.remove();
    if (loupeState.returnFocus && typeof loupeState.returnFocus.focus === "function") {
      try { loupeState.returnFocus.focus(); } catch (e) {}
    }
  }

  function mount(pageId, enM) {
    var root = document.getElementById("v9-visual-discovery-panel");
    if (!root || root.dataset.v9Bound === "1") return;
    root.dataset.v9Bound = "1";

    root.addEventListener("click", function (e) {
      var pb = e.target && e.target.closest ? e.target.closest("[data-v9-pigment]") : null;
      var eb = e.target && e.target.closest ? e.target.closest("[data-v9-era]") : null;
      var lb = e.target && e.target.closest ? e.target.closest("[data-v9-loupe-src]") : null;

      if (pb || eb) {
        if (pb) activePigment = pb.getAttribute("data-v9-pigment") || "all";
        if (eb) activeEra = eb.getAttribute("data-v9-era") || "all";
        root.querySelectorAll("[data-v9-pigment]").forEach(function (btn) {
          if (!btn.classList.contains("v9-pigment-dot")) return;
          var on = btn.getAttribute("data-v9-pigment") === activePigment;
          btn.classList.toggle("is-active", on);
          btn.setAttribute("aria-pressed", on ? "true" : "false");
        });
        root.querySelectorAll("[data-v9-era]").forEach(function (btn) {
          var on = btn.getAttribute("data-v9-era") === activeEra;
          btn.classList.toggle("is-primary", on);
          btn.setAttribute("aria-selected", on ? "true" : "false");
        });
        var grid = document.getElementById("v9-discovery-grid-slot");
        if (grid) {
          grid.innerHTML = renderCardsHTML(buildCatalog(pageId, enM), enM);
          if (window.CCE_V9_LOADER) window.CCE_V9_LOADER.hydrateImages(grid);
        }
        return;
      }

      if (lb) {
        loupeState = {
          open: true,
          src: lb.getAttribute("data-v9-loupe-src") || "",
          title: lb.getAttribute("data-v9-loupe-title") || "",
          meta: lb.getAttribute("data-v9-loupe-meta") || "",
          zoom: 2.4,
          rx: 0.5,
          ry: 0.5,
          returnFocus: lb
        };
        renderLoupeModal(enM);
      }
    });
  }

  window.CCE_V9_DISCOVERY = {
    PIGMENTS: PIGMENTS,
    ERAS: ERAS,
    renderSection: renderSection,
    mount: mount,
    closeLoupe: closeLoupe,
    isLoupeOpen: function () { return Boolean(loupeState.open); }
  };
})();
