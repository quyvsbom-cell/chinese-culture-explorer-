// ============================================================================
// CHINESE CULTURE EXPLORER — On-Demand Contextual Knowledge Drawer
// Keeps pages uncluttered while surfacing cross-links, terms & quick notes
// ============================================================================
(function () {
  "use strict";

  var drawerOpen = false;
  var activeContext = { pageId: "home", enM: false, artId: "", title: "" };
  var contextPayload = null;
  var bound = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  var ROUTE_CAT_MAP = {
    explore: ["history", "philosophy", "sino-vietnam"],
    history: ["history", "sino-vietnam", "traditional"],
    philosophy: ["philosophy", "metaphysics", "literature"],
    traditional: ["customs", "cuisine", "attire", "traditional", "arts", "ich-heritage"],
    paintings: ["arts", "ceramics-jade", "literature"],
    museum: ["ceramics-jade", "traditional", "arts", "history"],
    regions: ["regions", "sino-vietnam", "contemporary"],
    "sino-vietnam": ["sino-vietnam", "business", "history"],
    business: ["business", "sino-vietnam", "contemporary"],
    library: ["literature", "philosophy", "history", "business"],
    learning: ["education", "sino-vietnam", "philosophy"],
    article: ["history", "philosophy", "sino-vietnam"]
  };

  function renderDrawerHtml() {
    if (!drawerOpen || !contextPayload) return "";
    var enM = Boolean(activeContext.enM);
    var pageId = activeContext.pageId || "home";
    var articles = contextPayload.articles || [];
    var getTermById = contextPayload.getTermById;
    var activeArt = pageId === "article"
      ? articles.find(function (a) { return a.id === activeContext.artId; })
      : null;

    var bridgeHtml = "";
    if (window.CCE_V5_ACADEMY && typeof window.CCE_V5_ACADEMY.renderNextStepBridge === "function") {
      var bridgePage = pageId === "article" && activeArt ? activeArt.category : pageId;
      bridgeHtml = window.CCE_V5_ACADEMY.renderNextStepBridge(bridgePage, enM);
    }

    var relatedArts = [];
    if (activeArt) {
      relatedArts = articles.filter(function (a) {
        return a.id !== activeArt.id && a.category === activeArt.category;
      }).slice(0, 4);
    }
    if (!relatedArts.length) {
      var cats = ROUTE_CAT_MAP[pageId] || ["history", "philosophy", "sino-vietnam"];
      relatedArts = articles.filter(function (a) {
        return (!activeArt || a.id !== activeArt.id) && cats.indexOf(a.category) >= 0;
      }).slice(0, 4);
    }

    var termsHtml = "";
    if (activeArt && Array.isArray(activeArt.terminologyIds) && activeArt.terminologyIds.length && typeof getTermById === "function") {
      termsHtml =
        '<div class="v10-drawer-card">' +
        '  <div class="editorial-kicker" style="margin:0;">' + (enM ? "Core Terminology" : "Thuật ngữ trọng tâm") + " (" + activeArt.terminologyIds.length + ")</div>" +
        '  <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-top:0.35rem;">' +
        activeArt.terminologyIds.slice(0, 14).map(function (tid) {
          var t = getTermById(tid);
          if (!t) return "";
          return (
            '<button type="button" class="term-chip" data-action="open-term" data-id="' + esc(t.id) + '" data-v10-drawer-close="1">' +
            '<span class="hanzi">' + esc(t.hanzi) + '</span> <span class="pinyin">' + esc(t.pinyin) + "</span> — " +
            esc(enM ? (t.english || t.vietnamese) : String(t.vietnamese || "").split("(")[0].trim()) +
            "</button>"
          );
        }).join("") +
        "  </div>" +
        "</div>";
    }

    var relatedArtsHtml = relatedArts.length
      ? '<div class="v10-drawer-card">' +
        '  <div class="editorial-kicker" style="margin:0;">' + (enM ? "Suggested Related Essays" : "Chuyên luận liên quan") + "</div>" +
        relatedArts.map(function (ra) {
          var t = enM ? (ra.titleEn || ra.titleVi) : ra.titleVi;
          return (
            '<button type="button" class="hero-autocomplete-item" style="margin-top:0.4rem;text-align:left;border:1px solid var(--hairline);" data-action="open-article" data-id="' + esc(ra.id) + '" data-v10-drawer-close="1">' +
            '  <div><strong style="display:block;font-size:0.88rem;">' + esc(t) + '</strong><span style="font-size:0.75rem;color:var(--text-muted);">' + esc(ra.titleZh || "") + " · " + esc(ra.readMinutes || 8) + (enM ? " min" : " phút") + "</span></div>" +
            '  <span style="font-size:0.8rem;">→</span>' +
            "</button>"
          );
        }).join("") +
        "</div>"
      : "";

    var noteHtml = activeArt
      ? '<div class="v10-drawer-card">' +
        '  <div class="editorial-kicker" style="margin:0;">' + (enM ? "Quick Study Note" : "Ghi chú nhanh") + "</div>" +
        '  <form data-action="add-note-form" style="display:flex;flex-direction:column;gap:0.45rem;margin-top:0.35rem;">' +
        '    <input required name="title" class="form-input" style="font-size:0.82rem;" value="' + esc((enM ? "Note: " : "Ghi chú: ") + String(activeArt.titleVi || "").slice(0, 48)) + '" />' +
        '    <input type="hidden" name="category" value="' + esc(activeArt.categoryLabel || "Văn hóa Trung Hoa") + '" />' +
        '    <input type="hidden" name="method" value="Feynman Technique" />' +
        '    <textarea required name="content" rows="2" class="form-textarea" style="font-size:0.82rem;" placeholder="' + esc(enM ? "Summarize key points in your own words..." : "Tóm tắt ý chính bằng lời của bạn...") + '"></textarea>' +
        '    <button type="submit" class="btn btn-primary btn-sm">' + (enM ? "Save Note" : "Lưu ghi chú") + "</button>" +
        "  </form>" +
        "</div>"
      : "";

    return (
      '<div class="v10-context-drawer-backdrop v9-no-print" id="v10-context-drawer-backdrop">' +
      '  <aside class="v10-context-drawer" role="dialog" aria-modal="true" aria-label="' + esc(enM ? "Contextual Knowledge Drawer" : "Ngăn tra cứu liên kết tri thức") + '">' +
      '    <div class="v10-drawer-head">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="margin:0;">' + (enM ? "KNOWLEDGE LINKS" : "MẠNG LƯỚI TRI THỨC") + "</div>" +
      '        <strong style="font-size:1rem;">' + (enM ? "Contextual References & Next Steps" : "Tư liệu liên kết và bước tiếp theo") + "</strong>" +
      "      </div>" +
      '      <button type="button" class="v10-step-btn" style="min-height:36px;padding:0.3rem 0.7rem;" data-v10-drawer-close="1" aria-label="' + esc(enM ? "Close drawer" : "Đóng ngăn tra cứu") + '">✕ ' + (enM ? "Close" : "Đóng") + "</button>" +
      "    </div>" +
      '    <div class="v10-drawer-body">' +
      termsHtml +
      relatedArtsHtml +
      (bridgeHtml ? '<div class="v10-drawer-card">' + bridgeHtml + "</div>" : "") +
      noteHtml +
      '<div class="v10-drawer-card">' +
      '  <div class="editorial-kicker" style="margin:0;">' + (enM ? "READER FEEDBACK" : "GÓP Ý BỔ SUNG") + "</div>" +
      '  <p style="font-size:0.8rem;color:var(--text-muted);margin:0.35rem 0 0.55rem;">' +
           esc(enM ? "Spot a typo, mismatched photo, or layout issue? Send a quick note for this entry." : "Phát hiện lỗi chính tả, ảnh chưa khớp hoặc điểm cần cải thiện? Gửi góp ý nhanh cho mục đang xem.") +
      "  </p>" +
      '  <button type="button" class="btn btn-secondary btn-sm" style="width:100%;" data-v10-feedback-open="1" data-v10-feedback-cat="content_errata" data-v10-feedback-entity="' +
           esc((activeArt && (activeArt.titleVi || activeArt.id)) || activeContext.pageId || "general") +
           '" data-v10-drawer-close="1">' +
           (enM ? "Send Feedback / Report Issue" : "Đóng góp ý kiến / Báo lỗi mục này") +
      "  </button>" +
      "</div>" +
      "    </div>" +
      "  </aside>" +
      "</div>"
    );
  }

  function syncMount() {
    var host = document.getElementById("v10-context-drawer-host");
    if (host) {
      host.innerHTML = renderDrawerHtml();
      return;
    }
    var old = document.getElementById("v10-context-drawer-backdrop");
    if (old) old.remove();
    if (drawerOpen) {
      var wrap = document.createElement("div");
      wrap.id = "v10-context-drawer-host";
      wrap.innerHTML = renderDrawerHtml();
      document.body.appendChild(wrap);
    }
  }

  function open(pageId) {
    activeContext.pageId = pageId || activeContext.pageId || "home";
    drawerOpen = true;
    syncMount();
  }

  function close() {
    if (!drawerOpen) return;
    drawerOpen = false;
    syncMount();
  }

  function isOpen() {
    return drawerOpen;
  }

  function bindEvents() {
    if (bound || typeof document === "undefined") return;
    bound = true;

    document.addEventListener("click", function (e) {
      var backdrop = document.getElementById("v10-context-drawer-backdrop");
      if (backdrop && e.target === backdrop) {
        close();
        return;
      }
      var closeBtn = e.target && e.target.closest ? e.target.closest("[data-v10-drawer-close]") : null;
      if (closeBtn) {
        close();
      }
    });
  }

  function renderHost(pageId, enM, payload) {
    bindEvents();
    activeContext.pageId = pageId || "home";
    activeContext.enM = Boolean(enM);
    activeContext.artId = payload && payload.activeArticleId ? payload.activeArticleId : "";
    contextPayload = payload || {};
    return '<div id="v10-context-drawer-host">' + renderDrawerHtml() + "</div>";
  }

  window.CCE_V10_DRAWER = {
    open: open,
    close: close,
    isOpen: isOpen,
    renderHost: renderHost
  };
})();
