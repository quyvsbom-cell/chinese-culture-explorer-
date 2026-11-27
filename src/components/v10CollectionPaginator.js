// ============================================================================
// CHINESE CULTURE EXPLORER — Smart Collection Paginator (12 Desktop / 8 Mobile)
// Preserves search/filter state and auto-resets to page 1 on filter changes
// ============================================================================
(function () {
  "use strict";

  var pageMap = Object.create(null);
  var filterSigMap = Object.create(null);
  var sizeModeMap = Object.create(null);
  var urlPageLoaded = false;
  var bound = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function isMobileViewport() {
    return typeof window !== "undefined" && window.innerWidth < 768;
  }

  function readSizeMode(stateKey) {
    if (sizeModeMap[stateKey]) return sizeModeMap[stateKey];
    try {
      var saved = window.sessionStorage.getItem("cce_v10_psize_" + stateKey);
      if (saved === "default" || saved === "24" || saved === "all") {
        sizeModeMap[stateKey] = saved;
        return saved;
      }
    } catch (e) {}
    return "default";
  }

  function writeSizeMode(stateKey, mode) {
    sizeModeMap[stateKey] = mode;
    try {
      window.sessionStorage.setItem("cce_v10_psize_" + stateKey, mode);
    } catch (e) {}
  }

  function readUrlPage() {
    try {
      var raw = new URLSearchParams(window.location.search || "").get("p");
      var n = parseInt(raw, 10);
      return Number.isFinite(n) && n >= 1 ? n : 1;
    } catch (e) {
      return 1;
    }
  }

  function writeUrlPage(pageNum) {
    try {
      if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return;
      var u = new URL(window.location.href);
      if (pageNum > 1) u.searchParams.set("p", String(pageNum));
      else u.searchParams.delete("p");
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) {}
  }

  function refreshView(stateKey) {
    if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
    else if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    requestAnimationFrame(function () {
      try {
        var pager = document.querySelector('[data-v10-pager-anchor="' + stateKey + '"]');
        var target = (pager && (pager.closest("#paintings-grid-slot, #explore-results-slot, #provinces-grid-slot") || pager.previousElementSibling)) || pager;
        if (target) {
          var top = target.getBoundingClientRect().top;
          if (top < 60 || top > window.innerHeight * 0.65) {
            window.scrollTo({ top: Math.max(0, window.scrollY + top - 96), behavior: "smooth" });
          }
        }
      } catch (e) {}
    });
  }

  function setPage(stateKey, nextPage) {
    var n = parseInt(nextPage, 10);
    if (!Number.isFinite(n) || n < 1) n = 1;
    pageMap[stateKey] = n;
    writeUrlPage(n);
    refreshView(stateKey);
  }

  function resetPage(stateKey) {
    pageMap[stateKey] = 1;
    writeUrlPage(1);
  }

  function bindEvents() {
    if (bound || typeof document === "undefined") return;
    bound = true;

    document.addEventListener("click", function (e) {
      var pBtn = e.target && e.target.closest ? e.target.closest("[data-v10-page-key][data-v10-page]") : null;
      if (pBtn && !pBtn.disabled) {
        setPage(pBtn.getAttribute("data-v10-page-key"), pBtn.getAttribute("data-v10-page"));
        return;
      }
      var sBtn = e.target && e.target.closest ? e.target.closest("[data-v10-perpage-key][data-v10-perpage]") : null;
      if (sBtn) {
        var sk = sBtn.getAttribute("data-v10-perpage-key");
        writeSizeMode(sk, sBtn.getAttribute("data-v10-perpage"));
        pageMap[sk] = 1;
        writeUrlPage(1);
        refreshView(sk);
      }
    });

    document.addEventListener("change", function (e) {
      var sel = e.target && e.target.closest ? e.target.closest("[data-v10-jump-key]") : null;
      if (sel) {
        setPage(sel.getAttribute("data-v10-jump-key"), sel.value);
      }
    });
  }

  function paginate(items, stateKey, opts) {
    bindEvents();
    var list = Array.isArray(items) ? items : [];
    var o = opts || {};
    var defDesktop = Number(o.desktopPerPage || 12);
    var defMobile = Number(o.mobilePerPage || 8);
    var baseSize = isMobileViewport() ? defMobile : defDesktop;
    var sizeMode = readSizeMode(stateKey);
    var perPage = sizeMode === "all"
      ? Math.max(1, list.length)
      : (sizeMode === "24" ? 24 : baseSize);

    if (o.filterSig !== undefined) {
      var sigStr = String(o.filterSig);
      if (filterSigMap[stateKey] !== undefined && filterSigMap[stateKey] !== sigStr) {
        pageMap[stateKey] = 1;
      }
      filterSigMap[stateKey] = sigStr;
    }

    if (!urlPageLoaded) {
      urlPageLoaded = true;
      var up = readUrlPage();
      if (up > 1 && pageMap[stateKey] == null) pageMap[stateKey] = up;
    }

    var totalItems = list.length;
    var totalPages = Math.max(1, Math.ceil(totalItems / Math.max(1, perPage)));
    var rawPage = pageMap[stateKey] != null ? pageMap[stateKey] : 1;
    var currentPage = Math.max(1, Math.min(totalPages, rawPage));
    pageMap[stateKey] = currentPage;

    var startIdx = (currentPage - 1) * perPage;
    var endIdx = Math.min(totalItems, startIdx + perPage);
    var slice = list.slice(startIdx, endIdx);

    function renderControls(enM, customLabel) {
      if (totalItems === 0) return "";
      var showNums = totalPages > 1;
      var label = customLabel || (enM
        ? "Showing <strong>" + (startIdx + 1) + "–" + endIdx + "</strong> of <strong>" + totalItems + "</strong>"
        : "Hiển thị <strong>" + (startIdx + 1) + "–" + endIdx + "</strong> trên tổng số <strong>" + totalItems + "</strong>");

      var winStart = Math.max(1, currentPage - 2);
      var winEnd = Math.min(totalPages, winStart + 4);
      if (winEnd - winStart < 4) winStart = Math.max(1, winEnd - 4);

      var numBtns = "";
      if (showNums) {
        for (var p = winStart; p <= winEnd; p++) {
          numBtns += '<button type="button" class="v10-page-btn' + (p === currentPage ? " is-active" : "") + '" data-v10-page-key="' + esc(stateKey) + '" data-v10-page="' + p + '">' + p + "</button>";
        }
      }

      var optHtml = "";
      if (showNums) {
        for (var q = 1; q <= totalPages; q++) {
          optHtml += '<option value="' + q + '"' + (q === currentPage ? " selected" : "") + ">" + (enM ? "Page " + q + " / " + totalPages : "Trang " + q + " / " + totalPages) + "</option>";
        }
      }

      return (
        '<div class="v10-pager-bar v9-no-print" data-v10-pager-anchor="' + esc(stateKey) + '">' +
        '  <div class="v10-pager-status" aria-live="polite">' + label + "</div>" +
        (showNums
          ? '<div class="v10-pager-controls">' +
            '  <button type="button" class="v10-page-btn" data-v10-page-key="' + esc(stateKey) + '" data-v10-page="' + Math.max(1, currentPage - 1) + '"' + (currentPage <= 1 ? " disabled" : "") + ">← " + (enM ? "Prev" : "Trước") + "</button>" +
            '  <div class="v10-pager-nums" style="display:flex;gap:0.25rem;">' + numBtns + "</div>" +
            '  <div class="v10-pager-mobile-jump"><select aria-label="' + esc(enM ? "Jump to page" : "Chọn trang") + '" data-v10-jump-key="' + esc(stateKey) + '">' + optHtml + "</select></div>" +
            '  <button type="button" class="v10-page-btn" data-v10-page-key="' + esc(stateKey) + '" data-v10-page="' + Math.min(totalPages, currentPage + 1) + '"' + (currentPage >= totalPages ? " disabled" : "") + ">" + (enM ? "Next" : "Sau") + " →</button>" +
            "</div>"
          : "") +
        (totalItems > baseSize
          ? '<div class="v10-pager-size-group">' +
            '  <span>' + (enM ? "Per page:" : "Mỗi trang:") + "</span>" +
            '  <button type="button" class="v10-size-btn' + (sizeMode === "default" ? " is-active" : "") + '" data-v10-perpage-key="' + esc(stateKey) + '" data-v10-perpage="default">' + baseSize + "</button>" +
            '  <button type="button" class="v10-size-btn' + (sizeMode === "24" ? " is-active" : "") + '" data-v10-perpage-key="' + esc(stateKey) + '" data-v10-perpage="24">24</button>' +
            '  <button type="button" class="v10-size-btn' + (sizeMode === "all" ? " is-active" : "") + '" data-v10-perpage-key="' + esc(stateKey) + '" data-v10-perpage="all">' + (enM ? "All" : "Tất cả") + "</button>" +
            "</div>"
          : "") +
        "</div>"
      );
    }

    return {
      slice: slice,
      totalItems: totalItems,
      totalPages: totalPages,
      currentPage: currentPage,
      perPage: perPage,
      startIdx: startIdx,
      endIdx: endIdx,
      renderControls: renderControls
    };
  }

  window.CCE_V10_PAGINATOR = {
    paginate: paginate,
    setPage: setPage,
    resetPage: resetPage,
    setUrlPage: writeUrlPage,
    clearUrlPageParam: function () { writeUrlPage(1); }
  };
})();
