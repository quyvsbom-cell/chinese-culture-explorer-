// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Category Icon-Rail + 6-Card Discovery Grid
// ============================================================================
(function () {
  "use strict";

  var activeCat = "all";

  var CATEGORIES = [
    { id: "all", vi: "Tất cả", en: "All", svg: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>' },
    { id: "provinces", vi: "34 tỉnh thành", en: "34 provinces", svg: '<path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10z"/><circle cx="12" cy="11" r="2"/>' },
    { id: "dynasties", vi: "14 triều đại", en: "14 dynasties", svg: '<path d="M3 10h18M5 10v9M9 10v9M15 10v9M19 10v9M2 20h20M4 10l8-6 8 6"/>' },
    { id: "paintings", vi: "Quốc họa", en: "Paintings", svg: '<rect x="3" y="4" width="18" height="14" rx="1"/><path d="M7 14l3.5-4 3 3 2.5-2.5L19 14"/>' },
    { id: "studios3d", vi: "Mô hình 3D", en: "3D studio", svg: '<path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/><path d="M12 12l8-4.5M12 12v9M12 12L4 7.5"/>' },
    { id: "laozihao", vi: "Lão tự hào", en: "Honored brands", svg: '<path d="M4 9l2-5h12l2 5"/><path d="M5 9v10h14V9"/><path d="M9 19v-5h6v5"/>' },
    { id: "transit240h", vi: "Quá cảnh 240h", en: "240h transit", svg: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>' },
    { id: "literature", vi: "Văn học", en: "Literature", svg: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v17H6.5A2.5 2.5 0 0 0 4 22V5.5z"/>' },
    { id: "sinoviet", vi: "Việt – Trung", en: "Sino-Vietnam", svg: '<circle cx="9" cy="12" r="5"/><circle cx="15" cy="12" r="5"/>' },
    { id: "greentrade", vi: "Thương mại xanh", en: "Green trade", svg: '<path d="M3 17h18l-2-7H5l-2 7z"/><path d="M8 10V6h8v4"/>' }
  ];

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function imgStr(v) {
    if (!v) return "";
    if (typeof v === "string") return v;
    if (typeof v === "object") return v.src || v.url || v.imageUrl || "";
    return "";
  }

  function svgIcon(inner) {
    return '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + "</svg>";
  }

  function getSafeImg(src, excludeSet) {
    if (!src) return "";
    if (excludeSet && excludeSet.has(src)) return "";
    return src;
  }

  function collectCards(cat, enM) {
    var exclude = new Set([
      "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
      "assets/images/great-wall-ink.jpg",
      "assets/images/jiangshan-ruci-duojiao.jpg"
    ]);
    var items = [];
    var paintings = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    var museum = (window.CCE_MUSEUM && window.CCE_MUSEUM.artifacts) || [];
    var provinces = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    var articles = window.CCE_ARTICLES || [];
    var v8 = window.CCE_V8_DATA || {};
    var v7 = window.CCE_V7_ENCYCLOPEDIA || {};

    function push(card) {
      if (!card || !card.img || exclude.has(card.img)) return;
      exclude.add(card.img);
      items.push(card);
    }

    if (cat === "all" || cat === "paintings") {
      paintings.slice(0, 6).forEach(function (pt, idx) {
        push({
          kicker: enM ? "Master Painting · RTL Scroll" : "Quốc Họa · Trường Quyển",
          title: enM ? (pt.titleEn || pt.titleVi) : pt.titleVi,
          zh: pt.titleZh,
          img: pt.image,
          ratio: idx === 0 ? "cinema" : "editorial",
          action: "open-painting",
          id: pt.id
        });
      });
    }

    if (cat === "all" || cat === "provinces" || cat === "transit240h") {
      provinces.slice(0, 8).forEach(function (pr, idx) {
        var pImg = imgStr(pr.heroImage) || imgStr(pr.imagePath) || (pr.heritageAndLandmarks && pr.heritageAndLandmarks[0] && imgStr(pr.heritageAndLandmarks[0].imageUrl));
        push({
          kicker: (pr.regionLabelVi || (enM ? "Provincial dossier" : "Địa phương Trung Hoa")),
          title: enM ? (pr.nameEn || pr.nameVi) : pr.nameVi,
          zh: pr.nameZh || pr.hanzi || "",
          img: pImg || "",
          ratio: idx === 0 && cat !== "all" ? "cinema" : "editorial",
          action: "open-province",
          id: pr.id
        });
      });
      (v7.heritageExpeditions16 || []).slice(0, 6).forEach(function (ex) {
        push({
          kicker: enM ? "Heritage route 240h" : "Hành trình 240 giờ",
          title: enM ? (ex.titleEn || ex.titleVi) : ex.titleVi,
          zh: ex.zh || "",
          img: imgStr(ex.imagePath),
          ratio: "editorial",
          action: "nav-page",
          page: "regions"
        });
      });
    }

    if (cat === "all" || cat === "dynasties") {
      museum.filter(function (a) { return a.imageUrl; }).slice(0, 8).forEach(function (a, idx) {
        push({
          kicker: enM ? (a.periodLabelEn || a.periodLabel || "Museum Relic") : (a.periodLabel || "Bảo Vật"),
          title: enM ? (a.nameEn || a.nameVi) : a.nameVi,
          zh: a.nameZh,
          img: a.imageUrl,
          ratio: idx === 1 ? "portrait" : "editorial",
          action: "open-artifact",
          id: a.id
        });
      });
    }

    if (cat === "literature" || cat === "all") {
      (v8.modernAuthors16 || []).slice(0, 6).forEach(function (au) {
        push({
          kicker: enM ? "Modern Writer" : "Văn Hào 1918–2026",
          title: enM ? (au.nameEn || au.nameVi) : au.nameVi,
          zh: au.zh || "",
          img: au.imagePath || "",
          ratio: "portrait",
          action: "nav-page",
          page: "library"
        });
      });
    }

    if (cat === "studios3d" || cat === "all") {
      var webgl3dCards = [
        {
          id: "relics",
          kicker: enM ? "WebGL 3D · 6 Scenes" : "Mô hình 3D · WebGL Tương tác",
          title: enM ? "Sanxingdui Sacred Bronze Tree & Relics 3D" : "Bảo vật Quốc bảo Tam Tinh Đôi & Đỉnh Hậu Mẫu Mậu 3D",
          zh: "三维国宝文物互动馆",
          img: "assets/images/museum/sanxingdui-bronze-tree.jpg"
        },
        {
          id: "tiantan",
          kicker: enM ? "WebGL 3D · Temple of Heaven" : "Mô hình 3D · Thiên Đàn Bắc Kinh",
          title: enM ? "Hall of Prayer for Good Harvests 3D" : "Kỳ Niên Điện Thiên Đàn — Tam trùng diêm 3D",
          zh: "天坛祈年殿三维结构",
          img: "assets/images/museum/taihe-dian.jpg"
        },
        {
          id: "dougong",
          kicker: enM ? "WebGL 3D · Yingzao Fashi" : "Mô hình 3D · Đấu củng Doanh tạo pháp thức",
          title: enM ? "Interlocking Timber Dougong Brackets" : "Khớp mộng Đấu củng — Đỉnh cao kiến trúc gỗ",
          zh: "营造法式斗拱榫卯",
          img: "assets/images/museum/yongle-great-bell.jpg"
        },
        {
          id: "hydraulic",
          kicker: enM ? "WebGL 3D · Ancient Engineering" : "Mô hình 3D · Thủy lợi Đô Giang Yển",
          title: enM ? "Dujiangyan Fish-Mouth Weir Simulator" : "Công trình thủy lợi Ngư Chủy Đô Giang Yển 3D",
          zh: "都江堰鱼嘴分水工程",
          img: "assets/images/museum/liangzhu-yucong.jpg"
        },
        {
          id: "armillary",
          kicker: enM ? "WebGL 3D · Astronomy" : "Mô hình 3D · Hỗn thiên nghi Trương Hành",
          title: enM ? "Equatorial Armillary Sphere Observatory" : "Hỗn thiên nghi Quan tinh đài Cổ đại 3D",
          zh: "张衡浑天仪三维天象",
          img: "assets/images/museum/han-shipan.jpg"
        },
        {
          id: "logistics",
          kicker: enM ? "WebGL 3D · Trade Corridors" : "Mô hình 3D · Hành lang Hàng hải & Tơ lụa",
          title: enM ? "Maritime Silk Road & Beibu Gulf 3D" : "Tuyến đường tơ lụa trên biển & Vịnh Bắc Bộ 3D",
          zh: "海陆丝路三维走廊",
          img: "assets/images/museum/zheng-he-chart.jpg"
        }
      ];
      webgl3dCards.forEach(function (u) {
        push({
          id: u.id,
          kicker: u.kicker,
          title: u.title,
          zh: u.zh,
          img: u.img,
          ratio: "editorial",
          action: "open-3d-studio",
          studio: u.id
        });
      });
    }

    if (cat === "laozihao") {
      (v8.operaAndPieces24 || []).slice(0, 6).forEach(function (op) {
        push({
          kicker: enM ? "Heritage Brand & Craft" : "Thương Hiệu & Di Sản",
          title: enM ? (op.titleEn || op.titleVi) : op.titleVi,
          zh: op.zh || "",
          img: op.imagePath || "",
          ratio: "editorial",
          action: "nav-page",
          page: "business"
        });
      });
    }

    if (cat === "sinoviet" || cat === "all") {
      (v7.sinoVietWonders6 || []).slice(0, 6).forEach(function (w) {
        push({
          kicker: enM ? "Sino–Vietnamese Bridge" : "Đối Chiếu Việt – Trung",
          title: enM ? (w.titleEn || w.titleVi) : w.titleVi,
          zh: w.zh || "",
          img: w.chinaImg || w.vnImg || "",
          ratio: "editorial",
          action: "nav-page",
          page: "sino-vietnam"
        });
      });
    }

    if (cat === "greentrade") {
      (v7.extraSupplyCases10 || []).slice(0, 6).forEach(function (c) {
        push({
          kicker: enM ? "Green Supply Corridor" : "Chuỗi Cung Ứng Xanh",
          title: enM ? (c.titleEn || c.titleVi) : c.titleVi,
          zh: c.zh || "",
          img: c.imagePath || "",
          ratio: "editorial",
          action: "nav-page",
          page: "business"
        });
      });
    }

    if (items.length < 6) {
      articles.forEach(function (art) {
        if (items.length >= 6) return;
        var aImg = imgStr(art.heroImage);
        if (aImg && getSafeImg(aImg, exclude)) {
          push({
            kicker: enM ? (art.categoryLabelEn || art.categoryLabel || "Monograph") : (art.categoryLabel || "Chuyên luận"),
            title: enM ? (art.titleEn || art.titleVi) : art.titleVi,
            zh: art.titleZh || "",
            img: aImg,
            ratio: "editorial",
            action: "open-article",
            id: art.id
          });
        }
      });
    }

    return items.slice(0, 6);
  }

  function renderContinueBanner(enM) {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    var readMap = Safe ? Safe.getJSON("cce_v9_read_progress", {}) : {};
    var plan = Safe ? Safe.getJSON("cce_v9_trip_plan", null) : null;
    var stopCount = 0;
    if (plan && Array.isArray(plan.days)) {
      plan.days.forEach(function (d) { stopCount += (d.stops || []).length; });
    }
    var latestArt = null;
    var bestTime = 0;
    Object.keys(readMap || {}).forEach(function (k) {
      var rec = readMap[k];
      if (rec && rec.updatedAt > bestTime && rec.scrollRatio > 0.05) {
        bestTime = rec.updatedAt;
        latestArt = { id: k, pct: Math.round(rec.scrollRatio * 100) };
      }
    });
    if (!latestArt && stopCount === 0) return "";
    var artObj = latestArt ? (window.CCE_ARTICLES || []).find(function (a) { return a.id === latestArt.id; }) : null;
    return (
      '<div class="v9-continue-strip">' +
      '  <div>' +
      (artObj
        ? '<strong>' + (enM ? "Continue Reading: " : "Đọc tiếp bài đang dở: ") + '</strong><button type="button" class="v9-btn v9-btn-sm" data-v9-open-art="' + esc(artObj.id) + '">' + esc(enM ? (artObj.titleEn || artObj.titleVi) : artObj.titleVi) + ' (' + latestArt.pct + '%)</button>'
        : '<strong>' + (enM ? "Active Cultural Field Plan" : "Lịch trình Du khảo Đang Mở") + '</strong>') +
      '  </div>' +
      '  <button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-home-act="open-trip">' +
      (enM ? "Itinerary Drawer (" + stopCount + " stops)" : "Sổ tay Lịch trình (" + stopCount + " điểm)") +
      '  </button>' +
      '</div>'
    );
  }

  function renderBentoHTML(enM) {
    var cards = collectCards(activeCat, enM);
    return cards.map(function (c, idx) {
      var isLead = idx === 0;
      var plateCls = isLead ? "v9-plate-cinema" : (c.ratio === "portrait" ? "v9-plate-portrait" : "v9-plate-editorial");
      var actionAttrs = c.action === "open-painting"
        ? 'data-action="open-painting-detail" data-id="' + esc(c.id) + '"'
        : c.action === "open-artifact"
        ? 'data-action="open-artifact" data-id="' + esc(c.id) + '"'
        : c.action === "open-3d-studio"
        ? 'data-action="open-3d-studio" data-id="' + esc(c.studio || c.id) + '"'
        : c.action === "open-province"
        ? 'data-action="nav" data-page="regions"'
        : c.action === "open-article"
        ? 'data-action="open-article" data-id="' + esc(c.id) + '"'
        : 'data-action="nav" data-page="' + esc(c.page || "explore") + '"';

      return (
        '<button type="button" class="v9-bento-card ' + (isLead ? "is-lead" : "") + '" ' + actionAttrs + '>' +
        '  <div class="' + plateCls + ' v9-lqip-box">' +
        '    <img loading="' + (isLead ? "eager" : "lazy") + '" decoding="async" src="' + esc(c.img) + '" alt="' + esc(c.title) + '" />' +
        '  </div>' +
        '  <div class="v9-bento-body">' +
        '    <span class="v9-bento-meta">' + esc(c.kicker) + '</span>' +
        '    <h3 class="v9-bento-title">' + esc(c.title) + '</h3>' +
        (c.zh ? '<span class="hanzi" style="font-size:0.84rem;color:var(--v9-ink-secondary);">' + esc(c.zh) + '</span>' : '') +
        '  </div>' +
        '</button>'
      );
    }).join("");
  }

  function renderSection(enM) {
    return (
      '<section class="v9-section-block" id="v9-home-discovery" aria-label="' + (enM ? "Curated Visual Discovery" : "Khám phá Thị giác Chọn lọc") + '">' +
      '  <div class="container">' +
      '    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:12px;margin-bottom:16px;">' +
      '      <div>' +
      '        <div class="v9-kicker">' + (enM ? "CURATED BY THEME" : "CHỌN LỌC THEO CHỦ ĐỀ") + '</div>' +
      '        <h2 class="v9-lead-heading">' + (enM ? "Explore Chinese civilization by theme" : "Khám phá văn hóa Trung Hoa qua từng mảng đề tài") + '</h2>' +
      '      </div>' +
      '      <button type="button" class="v9-btn v9-btn-sm" data-v9-home-act="open-trip">' + (enM ? "240h trip planner" : "Lập lịch trình 240h") + '</button>' +
      '    </div>' +
      renderContinueBanner(enM) +
      '    <nav class="v9-sticky-rail" aria-label="' + (enM ? "Theme Category Rail" : "Thanh lọc nhanh theo chủ đề") + '">' +
      '      <div role="tablist" class="v9-rail-track">' +
      CATEGORIES.map(function (c) {
        var sel = activeCat === c.id;
        return (
          '<button type="button" role="tab" aria-selected="' + (sel ? "true" : "false") + '" class="v9-rail-item ' + (sel ? "is-active" : "") + '" data-v9-rail="' + c.id + '">' +
          svgIcon(c.svg) +
          '<span>' + esc(enM ? c.en : c.vi) + '</span>' +
          '</button>'
        );
      }).join("") +
      '      </div>' +
      '    </nav>' +
      '    <div id="v9-home-bento-slot" class="v9-bento-grid" role="tabpanel" aria-live="polite">' +
      renderBentoHTML(enM) +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function mount(enM) {
    var root = document.getElementById("v9-home-discovery");
    if (!root) return;
    if (root.dataset.v9Bound === "1") return;
    root.dataset.v9Bound = "1";

    root.addEventListener("click", function (e) {
      var railBtn = e.target && e.target.closest ? e.target.closest("[data-v9-rail]") : null;
      if (railBtn) {
        activeCat = railBtn.getAttribute("data-v9-rail") || "all";
        root.querySelectorAll("[data-v9-rail]").forEach(function (b) {
          var on = b.getAttribute("data-v9-rail") === activeCat;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-selected", on ? "true" : "false");
        });
        var slot = document.getElementById("v9-home-bento-slot");
        if (slot) {
          slot.innerHTML = renderBentoHTML(enM);
          if (window.CCE_V9_LOADER) window.CCE_V9_LOADER.hydrateImages(slot);
        }
        return;
      }

      var openTripBtn = e.target && e.target.closest ? e.target.closest('[data-v9-home-act="open-trip"]') : null;
      if (openTripBtn && window.CCE_V9_TRIP_PLANNER) {
        window.CCE_V9_TRIP_PLANNER.openDrawer(enM);
        return;
      }

      var resumeBtn = e.target && e.target.closest ? e.target.closest("[data-v9-open-art]") : null;
      if (resumeBtn) {
        var artId = resumeBtn.getAttribute("data-v9-open-art");
        if (artId && window.location) {
          window.location.hash = "article=" + encodeURIComponent(artId);
        }
      }
    });
  }

  window.CCE_V9_HOME = {
    renderSection: renderSection,
    mount: mount,
    filterByCategory: function (cat, enM) {
      activeCat = cat || "all";
      var slot = document.getElementById("v9-home-bento-slot");
      if (slot) slot.innerHTML = renderBentoHTML(Boolean(enM));
    }
  };
})();
