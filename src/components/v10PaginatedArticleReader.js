// ============================================================================
// CHINESE CULTURE EXPLORER — Paginated Monograph Chapter Reader & 1-Bar UI
// Replaces stacked article toolbars + splits essays into 3-5 clean chapters
// ============================================================================
(function () {
  "use strict";

  var chapByArt = Object.create(null);
  var modeByArt = Object.create(null);
  var activeChaptersByArt = Object.create(null);
  var bound = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getSavedReadMode() {
    var Safe = window.CCE_V9_LOADER && window.CCE_V9_LOADER.SafeStorage;
    var m = Safe ? Safe.getJSON("cce_v9_read_mode", "academic") : "academic";
    return (m === "zen" || m === "storyflow" || m === "academic") ? m : "academic";
  }

  function getViewState(artId) {
    if (!modeByArt[artId]) {
      try {
        var params = new URLSearchParams(window.location.search || "");
        modeByArt[artId] = params.get("view") === "full" ? "full" : "paged";
        var ch = parseInt(params.get("chap"), 10);
        if (Number.isFinite(ch) && ch >= 1) chapByArt[artId] = ch - 1;
      } catch (e) {
        modeByArt[artId] = "paged";
      }
    }
    return {
      viewMode: modeByArt[artId] || "paged",
      chapterIdx: Number(chapByArt[artId] || 0)
    };
  }

  function refreshArticleView(artId, scrollTop) {
    if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
    else if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    if (scrollTop) {
      requestAnimationFrame(function () {
        var bar = document.getElementById("v9-reader-modebar");
        if (bar) {
          var y = Math.max(0, window.scrollY + bar.getBoundingClientRect().top - 72);
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      });
    }
  }

  function setViewMode(artId, mode) {
    if (!artId) return;
    modeByArt[artId] = mode === "full" ? "full" : "paged";
    try {
      if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        var u = new URL(window.location.href);
        if (modeByArt[artId] === "full") u.searchParams.set("view", "full");
        else u.searchParams.delete("view");
        window.history.replaceState(null, "", u.pathname + u.search + u.hash);
      }
    } catch (e) {}
    refreshArticleView(artId, false);
  }

  function setChapter(artId, idx) {
    var list = activeChaptersByArt[artId] || [];
    var clamped = Math.max(0, Math.min(Math.max(0, list.length - 1), Number(idx || 0)));
    chapByArt[artId] = clamped;
    modeByArt[artId] = "paged";
    if (window.CCE_COOKIES && typeof window.CCE_COOKIES.setResume === "function") {
      var prevR = window.CCE_COOKIES.getResume && window.CCE_COOKIES.getResume();
      var artTitle = (prevR && prevR.id === artId && prevR.title && prevR.title !== artId) ? prevR.title : "";
      if (!artTitle && window.CCE_ARTICLES && Array.isArray(window.CCE_ARTICLES.articles)) {
        for (var ai = 0; ai < window.CCE_ARTICLES.articles.length; ai++) {
          if (window.CCE_ARTICLES.articles[ai].id === artId) {
            artTitle = window.CCE_ARTICLES.articles[ai].titleVi || window.CCE_ARTICLES.articles[ai].titleEn || "";
            break;
          }
        }
      }
      window.CCE_COOKIES.setResume({ kind: "article", id: artId, title: artTitle || artId, chap: clamped + 1 });
    }
    try {
      if (window.location.protocol === "http:" || window.location.protocol === "https:") {
        var u = new URL(window.location.href);
        u.searchParams.set("chap", String(clamped + 1));
        u.searchParams.delete("view");
        window.history.replaceState(null, "", u.pathname + u.search + u.hash);
      }
    } catch (e) {}
    refreshArticleView(artId, true);
  }

  function jumpToSection(artId, secId) {
    if (!secId) return false;
    var list = activeChaptersByArt[artId] || [];
    for (var i = 0; i < list.length; i++) {
      if (list[i].secIds && list[i].secIds.indexOf(secId) >= 0) {
        if (modeByArt[artId] === "paged" && chapByArt[artId] !== i) {
          chapByArt[artId] = i;
          refreshArticleView(artId, false);
        }
        setTimeout(function () {
          var el = document.getElementById(secId);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
        return true;
      }
    }
    return false;
  }

  function bindEvents() {
    if (bound || typeof document === "undefined") return;
    bound = true;

    document.addEventListener("click", function (e) {
      var viewBtn = e.target && e.target.closest ? e.target.closest("[data-v10-art-view]") : null;
      if (viewBtn) {
        var bar = document.getElementById("v9-reader-modebar");
        var aid = viewBtn.getAttribute("data-art-id") || (bar && bar.getAttribute("data-art-id")) || "";
        setViewMode(aid, viewBtn.getAttribute("data-v10-art-view"));
        return;
      }

      var chapBtn = e.target && e.target.closest ? e.target.closest("[data-v10-chap-idx]") : null;
      if (chapBtn && !chapBtn.disabled) {
        var bar2 = document.getElementById("v9-reader-modebar");
        var aid2 = chapBtn.getAttribute("data-art-id") || (bar2 && bar2.getAttribute("data-art-id")) || "";
        setChapter(aid2, chapBtn.getAttribute("data-v10-chap-idx"));
        return;
      }

      var drawerBtn = e.target && e.target.closest ? e.target.closest("[data-v10-open-drawer]") : null;
      if (drawerBtn && window.CCE_V10_DRAWER && typeof window.CCE_V10_DRAWER.open === "function") {
        window.CCE_V10_DRAWER.open(drawerBtn.getAttribute("data-v10-open-drawer"));
      }
    });
  }

  function renderUnifiedToolbar(o) {
    bindEvents();
    var enM = Boolean(o.enM);
    var art = o.art || {};
    var st = getViewState(art.id);
    var rMode = getSavedReadMode();
    var termCnt = (art.terminologyIds || []).length;

    return (
      '<div id="v9-reader-modebar" class="v10-unified-reader-bar v9-no-print" data-art-id="' + esc(art.id) + '">' +
      '  <div class="v10-reader-bar-group" role="tablist" aria-label="' + esc(enM ? "Reading layout mode" : "Chế độ đọc chuyên luận") + '">' +
      '    <button type="button" role="tab" aria-selected="' + (rMode === "academic") + '" class="v9-btn v9-btn-sm ' + (rMode === "academic" ? "is-primary" : "") + '" data-v9-rmode="academic">' + (enM ? "3-col view" : "Bố cục 3 cột") + "</button>" +
      '    <button type="button" role="tab" aria-selected="' + (rMode === "zen") + '" class="v9-btn v9-btn-sm ' + (rMode === "zen" ? "is-primary" : "") + '" data-v9-rmode="zen">' + (enM ? "Focused 65ch" : "Tập trung 65ch") + "</button>" +
      '    <button type="button" role="tab" aria-selected="' + (rMode === "storyflow") + '" class="v9-btn v9-btn-sm ' + (rMode === "storyflow" ? "is-primary" : "") + '" data-v9-rmode="storyflow">' + (enM ? "Story flow" : "Ghim hình") + "</button>" +
      "  </div>" +
      '  <div class="v10-reader-bar-group">' +
      '    <button type="button" class="v9-btn v9-btn-sm ' + (st.viewMode === "paged" ? "is-primary" : "") + '" data-v10-art-view="paged" data-art-id="' + esc(art.id) + '">' + (enM ? "Chapters" : "Đọc theo chương") + "</button>" +
      '    <button type="button" class="v9-btn v9-btn-sm ' + (st.viewMode === "full" ? "is-primary" : "") + '" data-v10-art-view="full" data-art-id="' + esc(art.id) + '">' + (enM ? "Full / A4" : "Toàn văn / A4") + "</button>" +
      '    <button type="button" class="v9-btn v9-btn-sm ' + (o.isAcademic ? "is-primary" : "") + '" data-action="toggle-scholar-mode">' + (enM ? "Scholar view" : "Khảo cứu Hán văn") + "</button>" +
      '    <button type="button" class="v9-btn v9-btn-sm is-jade" data-v9-audio-toggle="1">' + (enM ? "Listen" : "Nghe đọc") + "</button>" +
      "  </div>" +
      '  <div class="v10-reader-bar-group">' +
      '    <div class="toolbar-font-stepper" aria-label="' + esc(enM ? "Text size" : "Cỡ chữ") + '">' +
           ["sm", "md", "lg", "xl"].map(function (sz) {
             return '<button type="button" class="font-step-btn ' + (o.fontSize === sz ? "active" : "") + '" data-action="set-font-size" data-size="' + sz + '">' + sz.toUpperCase() + "</button>";
           }).join("") +
      "    </div>" +
      '    <button type="button" class="btn ' + (o.completed ? "btn-jade" : "btn-primary") + ' btn-sm toolbar-btn" data-action="toggle-complete-article" data-id="' + esc(art.id) + '">' +
           (o.completed ? (enM ? "Read" : "Đã đọc") : (enM ? "Mark read" : "Đánh dấu đọc")) + "</button>" +
      '    <button type="button" class="btn btn-secondary btn-sm toolbar-btn" data-action="toggle-bookmark" data-type="article" data-id="' + esc(art.id) + '" data-title="' + esc(o.title) + '">' +
           (o.bookmarked ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save" : "Lưu bài")) + "</button>" +
      '    <button type="button" class="v10-drawer-trigger-btn" data-v10-open-drawer="article">' +
           (enM ? "Links & terms (" + termCnt + ")" : "Liên kết & thuật ngữ (" + termCnt + ")") + "</button>" +
      '    <details class="academic-tools-dropdown">' +
      '      <summary class="btn btn-secondary btn-sm toolbar-btn" aria-haspopup="menu">' + (enM ? "More" : "Công cụ") + "</summary>" +
      '      <div class="academic-tools-menu" role="menu">' +
      '        <button type="button" class="menu-item" data-action="open-vocab-capture-manual" data-id="' + esc(art.id) + '"><span>' + (enM ? "Save term and note" : "Lưu từ và ghi chú") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="toggle-article-mobile-context"><span>' + (enM ? "Study notebook drawer" : "Sổ tay thuật ngữ bài viết") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="copy-citation-text" data-fmt="APA" data-text="' + esc(o.apaText || "") + '"><span>' + (enM ? "Copy APA 7th citation" : "Sao chép trích dẫn APA 7th") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="copy-citation-text" data-fmt="BibTeX" data-text="' + esc(o.bibtexText || "") + '"><span>' + (enM ? "Copy BibTeX citation" : "Sao chép trích dẫn BibTeX") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="open-slide-mode" data-id="' + esc(art.id) + '"><span>' + (enM ? "Slide presentation" : "Trình chiếu slide") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="print-dossier"><span>' + (enM ? "Print A4 dossier" : "In hồ sơ A4") + "</span></button>" +
      '        <button type="button" class="menu-item" data-action="share-article" data-id="' + esc(art.id) + '"><span>' + (enM ? "Share article" : "Chia sẻ chuyên luận") + "</span></button>" +
      "      </div>" +
      "    </details>" +
      "  </div>" +
      "</div>"
    );
  }

  function renderChapters(artId, enM, chapters) {
    bindEvents();
    var validChapters = (chapters || []).filter(function (c) { return c && c.html && c.html.trim(); });
    if (!validChapters.length) return "";
    activeChaptersByArt[artId] = validChapters;

    var st = getViewState(artId);
    if (st.viewMode === "full" || validChapters.length === 1) {
      return validChapters.map(function (c) { return c.html; }).join("\n");
    }

    var idx = Math.max(0, Math.min(validChapters.length - 1, st.chapterIdx));
    chapByArt[artId] = idx;
    var activeChap = validChapters[idx];

    var pills = validChapters.map(function (c, i) {
      var lbl = enM ? ("Ch. " + (i + 1)) : ("Chương " + (i + 1));
      return (
        '<button type="button" class="v10-chap-pill' + (i === idx ? " is-active" : "") + '" ' +
        'data-art-id="' + esc(artId) + '" data-v10-chap-idx="' + i + '" title="' + esc(enM ? (c.labelEn || c.labelVi) : c.labelVi) + '">' +
        lbl + "</button>"
      );
    }).join("");

    var topBar =
      '<div class="v10-chapter-nav-strip v9-no-print">' +
      '  <div class="v10-chapter-pills">' + pills + "</div>" +
      '  <span style="font-size:0.82rem;color:var(--text-muted);font-weight:600;">' +
         esc(enM ? (activeChap.labelEn || activeChap.labelVi) : activeChap.labelVi) +
         " (" + (idx + 1) + "/" + validChapters.length + ")</span>" +
      "</div>";

    var bottomBar =
      '<div class="v10-chapter-bottom-bar v9-no-print">' +
      '  <button type="button" class="v10-step-btn" data-art-id="' + esc(artId) + '" data-v10-chap-idx="' + Math.max(0, idx - 1) + '"' + (idx <= 0 ? " disabled" : "") + ">" +
         (enM ? "← Previous chapter" : "← Chương trước") + "</button>" +
      '  <button type="button" class="v9-btn v9-btn-sm" data-v10-art-view="full" data-art-id="' + esc(artId) + '">' +
         (enM ? "View full essay / A4" : "Xem toàn văn 1 trang") + "</button>" +
      '  <button type="button" class="v10-step-btn" data-art-id="' + esc(artId) + '" data-v10-chap-idx="' + Math.min(validChapters.length - 1, idx + 1) + '"' + (idx >= validChapters.length - 1 ? " disabled" : "") + ">" +
         (enM ? "Next chapter →" : "Chương tiếp →") + "</button>" +
      "</div>";

    return topBar + activeChap.html + bottomBar;
  }

  window.CCE_V10_READER = {
    getViewState: getViewState,
    setViewMode: setViewMode,
    setChapter: setChapter,
    jumpToSection: jumpToSection,
    renderUnifiedToolbar: renderUnifiedToolbar,
    renderChapters: renderChapters
  };
})();
