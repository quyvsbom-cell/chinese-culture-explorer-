// ============================================================================
// CHINESE CULTURE EXPLORER — Sub-Page Deck Orchestrator (?sub=...)
// Renders strictly one active sub-page at a time, syncs URL & keyboard nav
// ============================================================================
(function () {
  "use strict";

  var activeMap = Object.create(null);
  var urlSyncedPage = null;
  var globalBound = false;

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function sanitizeId(raw) {
    var s = String(raw || "").trim();
    return /^[a-z0-9_-]{1,36}$/i.test(s) ? s : "";
  }

  function readSubFromUrl() {
    try {
      var params = new URLSearchParams(window.location.search || "");
      return sanitizeId(params.get("sub"));
    } catch (e) {
      return "";
    }
  }

  function writeUrlParams(subId, resetPageParam) {
    try {
      if (window.location.protocol !== "http:" && window.location.protocol !== "https:") return;
      var u = new URL(window.location.href);
      if (subId) u.searchParams.set("sub", subId);
      else u.searchParams.delete("sub");
      if (resetPageParam) u.searchParams.delete("p");
      window.history.replaceState(null, "", u.pathname + u.search + u.hash);
    } catch (e) {}
  }

  function getActiveSubpage(pageId, subpages) {
    if (!Array.isArray(subpages) || !subpages.length) return "";
    var valid = subpages.map(function (s) { return s.id; });
    if (urlSyncedPage !== pageId) {
      urlSyncedPage = pageId;
      var fromUrl = readSubFromUrl();
      if (fromUrl && valid.indexOf(fromUrl) >= 0) {
        activeMap[pageId] = fromUrl;
        return fromUrl;
      }
    }
    var cur = activeMap[pageId];
    if (cur && valid.indexOf(cur) >= 0) return cur;
    activeMap[pageId] = valid[0];
    return valid[0];
  }

  function refreshMain() {
    if (typeof window.CCE_PATCH_MAIN === "function") {
      window.CCE_PATCH_MAIN();
    } else if (typeof window.CCE_RENDER === "function") {
      window.CCE_RENDER();
    }
  }

  function scrollToDeckTop(pageId) {
    try {
      var navEl = document.getElementById("v10-subnav-" + pageId);
      if (!navEl) {
        window.scrollTo({ top: 0, behavior: "instant" });
        return;
      }
      var rect = navEl.getBoundingClientRect();
      if (rect.top < 50 || rect.top > window.innerHeight * 0.45) {
        var targetTop = Math.max(0, window.scrollY + rect.top - 70);
        window.scrollTo({ top: targetTop, behavior: "smooth" });
      }
    } catch (e) {}
  }

  function setSubpage(pageId, subId, opts) {
    var clean = sanitizeId(subId);
    if (!pageId || !clean) return;
    var changed = activeMap[pageId] !== clean;
    activeMap[pageId] = clean;
    urlSyncedPage = pageId;
    if (window.CCE_V10_PAGINATOR && typeof window.CCE_V10_PAGINATOR.clearUrlPageParam === "function") {
      writeUrlParams(clean, true);
    } else {
      writeUrlParams(clean, true);
    }
    try {
      window.dispatchEvent(new CustomEvent("cce:v10:subpage-change", { detail: { pageId: pageId, subId: clean } }));
    } catch (e) {}
    if (!opts || opts.rerender !== false) {
      refreshMain();
      if (changed && (!opts || opts.scroll !== false)) {
        requestAnimationFrame(function () {
          scrollToDeckTop(pageId);
        });
      }
    }
  }

  function navigateTo(pageId, subId, pageNum) {
    var clean = sanitizeId(subId);
    if (pageId && clean) {
      activeMap[pageId] = clean;
      urlSyncedPage = pageId;
    }
    if (pageNum && window.CCE_V10_PAGINATOR && typeof window.CCE_V10_PAGINATOR.setUrlPage === "function") {
      window.CCE_V10_PAGINATOR.setUrlPage(pageNum);
    }
    if (window.CCE_STORE && typeof window.CCE_STORE.setPage === "function") {
      window.CCE_STORE.setPage(pageId);
    }
    if (clean) writeUrlParams(clean, !pageNum);
    window.scrollTo({ top: 0, behavior: "instant" });
  }

  function bindGlobalEvents() {
    if (globalBound || typeof document === "undefined") return;
    globalBound = true;

    document.addEventListener("click", function (e) {
      var tabBtn = e.target && e.target.closest ? e.target.closest("[data-v10-deck-page][data-v10-sub]") : null;
      if (tabBtn) {
        var pid = tabBtn.getAttribute("data-v10-deck-page");
        var sid = tabBtn.getAttribute("data-v10-sub");
        setSubpage(pid, sid, { scroll: true });
        return;
      }

      var drawerBtn = e.target && e.target.closest ? e.target.closest("[data-v10-open-drawer]") : null;
      if (drawerBtn && window.CCE_V10_DRAWER && typeof window.CCE_V10_DRAWER.open === "function") {
        window.CCE_V10_DRAWER.open(drawerBtn.getAttribute("data-v10-open-drawer"));
      }
    });

    document.addEventListener("keydown", function (e) {
      var tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
      var inField = tag === "input" || tag === "textarea" || tag === "select" || (e.target && e.target.isContentEditable);
      if (inField) return;

      var activeTab = e.target && e.target.closest ? e.target.closest(".v10-subnav [data-v10-sub]") : null;
      if (activeTab && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
        var nav = activeTab.closest(".v10-subnav");
        var tabs = nav ? Array.prototype.slice.call(nav.querySelectorAll("[data-v10-sub]")) : [];
        var idx = tabs.indexOf(activeTab);
        if (idx >= 0 && tabs.length > 1) {
          e.preventDefault();
          var nextIdx = e.key === "ArrowRight" ? (idx + 1) % tabs.length : (idx - 1 + tabs.length) % tabs.length;
          var nextBtn = tabs[nextIdx];
          setSubpage(nextBtn.getAttribute("data-v10-deck-page"), nextBtn.getAttribute("data-v10-sub"), { scroll: false });
          requestAnimationFrame(function () {
            var refocused = document.querySelector('.v10-subnav [data-v10-sub="' + nextBtn.getAttribute("data-v10-sub") + '"]');
            if (refocused) refocused.focus();
          });
        }
        return;
      }

      if ((e.key === "[" || e.key === "]") && !document.querySelector(".modal-backdrop.open, .v9-cinema-overlay, .v10-context-drawer-backdrop")) {
        var navBar = document.querySelector(".v10-subnav");
        if (!navBar) return;
        var allTabs = Array.prototype.slice.call(navBar.querySelectorAll("[data-v10-sub]"));
        var curIdx = allTabs.findIndex(function (b) { return b.classList.contains("is-active"); });
        if (curIdx >= 0 && allTabs.length > 1) {
          var targetIdx = e.key === "]" ? (curIdx + 1) % allTabs.length : (curIdx - 1 + allTabs.length) % allTabs.length;
          var btn = allTabs[targetIdx];
          setSubpage(btn.getAttribute("data-v10-deck-page"), btn.getAttribute("data-v10-sub"), { scroll: true });
        }
      }
    });
  }

  function renderDeck(pageId, subpages, opts) {
    bindGlobalEvents();
    var o = opts || {};
    var enM = Boolean(o.enM);
    var activeId = getActiveSubpage(pageId, subpages);
    var activeIdx = 0;
    for (var i = 0; i < subpages.length; i++) {
      if (subpages[i].id === activeId) {
        activeIdx = i;
        break;
      }
    }
    var activeSub = subpages[activeIdx];
    var prevSub = activeIdx > 0 ? subpages[activeIdx - 1] : null;
    var nextSub = activeIdx < subpages.length - 1 ? subpages[activeIdx + 1] : null;

    var tabsHtml = subpages.map(function (s) {
      var isOn = s.id === activeSub.id;
      var lbl = enM ? (s.labelEn || s.labelVi) : s.labelVi;
      var cnt = s.count != null && s.count !== "" ? '<span class="v10-subtab-count">' + esc(s.count) + "</span>" : "";
      return (
        '<button type="button" role="tab" aria-selected="' + (isOn ? "true" : "false") + '" ' +
        'class="v10-subtab' + (isOn ? " is-active" : "") + '" ' +
        'data-v10-deck-page="' + esc(pageId) + '" data-v10-sub="' + esc(s.id) + '">' +
        "<span>" + esc(lbl) + "</span>" + cnt +
        "</button>"
      );
    }).join("");

    var drawerTrigger = (o.showDrawer !== false && pageId !== "home")
      ? '<button type="button" class="v10-drawer-trigger-btn" data-v10-open-drawer="' + esc(pageId) + '" title="' + esc(enM ? "Open related readings and quick links" : "Mở liên kết tri thức và gợi ý đọc tiếp") + '">' +
        (enM ? "Related links" : "Liên kết tri thức") + "</button>"
      : "";

    var bodyHtml = "";
    try {
      bodyHtml = typeof activeSub.render === "function" ? String(activeSub.render() || "") : "";
    } catch (err) {
      bodyHtml = '<div class="card"><p style="margin:0;">' + esc(enM ? "Unable to render this section." : "Không thể hiển thị phân khu này.") + "</p></div>";
    }

    var leadDesc = enM ? (activeSub.descEn || activeSub.descVi || "") : (activeSub.descVi || "");
    var leadBar = leadDesc
      ? '<div class="v10-subpage-lead"><p class="v10-subpage-lead-desc">' + esc(leadDesc) + "</p></div>"
      : "";

    var footerNav = subpages.length > 1
      ? '<nav class="v10-subpage-footer-nav v9-no-print" aria-label="' + esc(enM ? "Subpage navigation" : "Chuyển trang con") + '">' +
          (prevSub
            ? '<button type="button" class="v10-step-btn" data-v10-deck-page="' + esc(pageId) + '" data-v10-sub="' + esc(prevSub.id) + '">← ' + esc(enM ? "Previous: " + (prevSub.labelEn || prevSub.labelVi) : "Phần trước: " + prevSub.labelVi) + "</button>"
            : "<span></span>") +
          (nextSub
            ? '<button type="button" class="v10-step-btn" data-v10-deck-page="' + esc(pageId) + '" data-v10-sub="' + esc(nextSub.id) + '">' + esc(enM ? "Next: " + (nextSub.labelEn || nextSub.labelVi) : "Phần tiếp: " + nextSub.labelVi) + " →</button>"
            : "<span></span>") +
        "</nav>"
      : "";

    return (
      '<div class="v10-subnav-wrap v9-no-print" id="v10-subnav-' + esc(pageId) + '">' +
      '  <div class="container">' +
      '    <div class="v10-subnav-inner">' +
      '      <div class="v10-subnav" role="tablist" aria-label="' + esc(enM ? "Section subpages" : "Các trang con trong chuyên mục") + '">' +
      tabsHtml +
      "      </div>" +
      drawerTrigger +
      "    </div>" +
      "  </div>" +
      "</div>" +
      '<div class="v10-deck-stage" id="v10-deck-stage-' + esc(pageId) + '" data-active-sub="' + esc(activeSub.id) + '">' +
      '  <div class="container">' +
      leadBar +
      bodyHtml +
      footerNav +
      "  </div>" +
      "</div>"
    );
  }

  window.CCE_V10_DECK = {
    getActiveSubpage: getActiveSubpage,
    setSubpage: setSubpage,
    navigateTo: navigateTo,
    renderDeck: renderDeck,
    peekActiveSubpage: function (pageId) { return activeMap[pageId] || readSubFromUrl() || ""; }
  };
})();
