// ============================================================================
// CHINESE CULTURE EXPLORER — Full-Screen Curtain Wipe Page Transition
// Zero-Build ES5 IIFE: Curtain Wipe + 2-Layer Palace Logo Illumination + Decode
// Exposes window.CCETransition
// ============================================================================

(function () {
  "use strict";

  var TIMING_ENTER_MS = 320;
  var TIMING_HOLD_MS = 260;
  var TIMING_EXIT_MS = 340;
  var TIMING_TOTAL_MS = TIMING_ENTER_MS + TIMING_HOLD_MS + TIMING_EXIT_MS;

  var PAGE_PATHS = {
    home: "/",
    explore: "/explore",
    history: "/lich-su",
    philosophy: "/triet-hoc",
    traditional: "/van-hoa",
    paintings: "/quoc-hoa",
    museum: "/bao-tang",
    regions: "/tinh-thanh",
    "sino-vietnam": "/trung-viet",
    business: "/kinh-doanh",
    library: "/thu-vien",
    learning: "/hoc-tap",
    about: "/gioi-thieu",
    legal: "/phap-ly"
  };

  var _curtain = null;
  var _taglineEl = null;
  var _routeEl = null;
  var _busy = false;
  var _bypassClick = false;
  var _timers = [];
  var _scrambleTimer = null;

  function prefersReducedMotion() {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (_err) {
      return false;
    }
  }

  function clearTimers() {
    for (var i = 0; i < _timers.length; i++) {
      clearTimeout(_timers[i]);
    }
    _timers = [];
    if (_scrambleTimer) {
      clearInterval(_scrambleTimer);
      _scrambleTimer = null;
    }
  }

  function buildPalaceSvgMarkup() {
    return (
      '<svg class="cce-pt-svg" viewBox="0 0 180 104" width="170" height="102" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '  <line x1="90" y1="6" x2="90" y2="14" stroke="#E5A93C" stroke-width="2" stroke-linecap="round" />' +
      '  <circle cx="90" cy="6" r="2.2" fill="#E5A93C" />' +
      '  <path d="M52 21 H128" stroke="#E5A93C" stroke-width="2.2" stroke-linecap="round" />' +
      '  <path d="M47 18 L52 21 L52 16 Z M133 18 L128 21 L128 16 Z" fill="#E5A93C" />' +
      '  <path d="M52 21 C44 33, 31 38, 19 39 L31 44 H149 L161 39 C149 38, 136 33, 128 21 Z" stroke="#E5A93C" stroke-width="2" stroke-linejoin="round" fill="rgba(229,169,60,0.12)" />' +
      '  <path d="M59 24 C66 34, 77 39, 90 39 C103 39, 114 34, 121 24" stroke="#E5A93C" stroke-width="1.2" opacity="0.72" />' +
      '  <rect x="38" y="44" width="104" height="7" stroke="#E5A93C" stroke-width="1.6" />' +
      '  <line x1="56" y1="44" x2="56" y2="51" stroke="#E5A93C" stroke-width="1.2" />' +
      '  <line x1="78" y1="44" x2="78" y2="51" stroke="#E5A93C" stroke-width="1.2" />' +
      '  <line x1="102" y1="44" x2="102" y2="51" stroke="#E5A93C" stroke-width="1.2" />' +
      '  <line x1="124" y1="44" x2="124" y2="51" stroke="#E5A93C" stroke-width="1.2" />' +
      '  <path d="M38 51 C29 58, 18 62, 8 62 L21 67 H159 L172 62 C162 62, 151 58, 142 51 Z" stroke="#E5A93C" stroke-width="2" stroke-linejoin="round" fill="rgba(229,169,60,0.16)" />' +
      '  <line x1="27" y1="67" x2="27" y2="91" stroke="#E5A93C" stroke-width="2" />' +
      '  <line x1="50" y1="67" x2="50" y2="91" stroke="#E5A93C" stroke-width="1.8" />' +
      '  <line x1="130" y1="67" x2="130" y2="91" stroke="#E5A93C" stroke-width="1.8" />' +
      '  <line x1="153" y1="67" x2="153" y2="91" stroke="#E5A93C" stroke-width="2" />' +
      '  <path d="M77 91 V74 C77 69, 103 69, 103 74 V91" stroke="#E5A93C" stroke-width="2" fill="rgba(229,169,60,0.18)" />' +
      '  <line x1="14" y1="92" x2="166" y2="92" stroke="#E5A93C" stroke-width="2.2" stroke-linecap="round" />' +
      '  <line x1="8" y1="97" x2="172" y2="97" stroke="#E5A93C" stroke-width="1.4" stroke-linecap="round" opacity="0.65" />' +
      '</svg>' +
      '<div class="cce-pt-wordmark">CCE</div>'
    );
  }

  function ensureCurtain() {
    if (_curtain && document.body && document.body.contains(_curtain)) {
      return _curtain;
    }
    if (!document || !document.body) return null;

    var existing = document.getElementById("cce-page-transition-curtain");
    if (existing) {
      _curtain = existing;
      _taglineEl = document.getElementById("cce-pt-tagline");
      _routeEl = document.getElementById("cce-pt-route");
      return _curtain;
    }

    var el = document.createElement("div");
    el.id = "cce-page-transition-curtain";
    el.className = "is-resetting";
    el.setAttribute("aria-hidden", "true");

    var logoHtml = buildPalaceSvgMarkup();
    el.innerHTML = (
      '<div class="cce-pt-stage">' +
      '  <div class="cce-pt-layer cce-pt-logo-dim">' + logoHtml + '</div>' +
      '  <div class="cce-pt-layer cce-pt-logo-lit">' + logoHtml + '</div>' +
      '</div>' +
      '<div class="cce-pt-footer">' +
      '  <div id="cce-pt-tagline" class="cce-pt-tagline">' + getTargetTagline() + '</div>' +
      '  <div id="cce-pt-route" class="cce-pt-route">HOME</div>' +
      '</div>'
    );

    document.body.appendChild(el);
    _curtain = el;
    _taglineEl = document.getElementById("cce-pt-tagline");
    _routeEl = document.getElementById("cce-pt-route");
    return _curtain;
  }

  function getActiveLang() {
    if (window.CCE_STORE && typeof window.CCE_STORE.getState === "function") {
      var st = window.CCE_STORE.getState();
      if (st && st.uiLang) return String(st.uiLang);
    }
    if (document && document.documentElement) {
      var docLang = document.documentElement.getAttribute("lang");
      if (docLang) return docLang;
    }
    return "vi";
  }

  function formatRouteDisplay(routePath) {
    var clean = String(routePath || "")
      .replace(/^\/+|\/+$/g, "")
      .replace(/\//g, " - ")
      .trim()
      .toUpperCase();
    return clean || "HOME";
  }

  function getTargetTagline() {
    var lang = getActiveLang().toLowerCase();
    if (lang.indexOf("zh") === 0) {
      return "中国文化探索";
    }
    return "CHINESE CULTURE EXPLORER";
  }

  function startScrambleDecode(targetText) {
    if (!_taglineEl) return;
    if (_scrambleTimer) {
      clearInterval(_scrambleTimer);
      _scrambleTimer = null;
    }
    _taglineEl.textContent = String(targetText || getTargetTagline()).toUpperCase();
  }

  function safeInvokeSwap(cb) {
    try {
      if (typeof cb === "function") cb();
    } catch (_err) {
      // Never leave curtain stuck if route callback throws
    }
    try {
      window.scrollTo(0, 0);
    } catch (_err2) {}
  }

  function runTransition(routePath, swapCallback) {
    var displayRoute = formatRouteDisplay(routePath);
    if (prefersReducedMotion()) {
      safeInvokeSwap(swapCallback);
      return;
    }

    var curtain = ensureCurtain();
    if (!curtain) {
      safeInvokeSwap(swapCallback);
      return;
    }

    if (_busy) return;
    _busy = true;
    clearTimers();

    var tagline = getTargetTagline();
    if (_taglineEl) _taglineEl.textContent = tagline;
    if (_routeEl) _routeEl.textContent = displayRoute;

    curtain.className = "is-resetting";
    void curtain.offsetWidth;

    // Stage 1: Enter (320ms, curtain slides up from bottom to full viewport)
    curtain.className = "is-entering";

    // Stage 2: Hold & Illuminate + Crisp Uppercase Typography
    _timers.push(setTimeout(function () {
      curtain.className = "is-holding is-illuminated";
      startScrambleDecode(tagline);
    }, TIMING_ENTER_MS));

    // Stage 3: Route Swap at 100% cover, scroll top, & Exit upward
    _timers.push(setTimeout(function () {
      safeInvokeSwap(swapCallback);
      curtain.className = "is-exiting is-illuminated";
    }, TIMING_ENTER_MS + TIMING_HOLD_MS));

    // Silent reset below viewport after exit animation finishes
    _timers.push(setTimeout(function () {
      curtain.className = "is-resetting";
      _busy = false;
    }, TIMING_TOTAL_MS + 25));
  }

  function triggerNativeNavClick(el) {
    if (!el) return;
    _bypassClick = true;
    try {
      if (typeof window.MouseEvent === "function") {
        el.dispatchEvent(new MouseEvent("click", { bubbles: true, cancelable: true, view: window }));
      } else {
        el.click();
      }
    } finally {
      _bypassClick = false;
    }
  }

  function navigateInternalHref(href) {
    if (!href) return;
    try {
      window.history.pushState(null, "", href);
    } catch (_err) {
      window.location.href = href;
      return;
    }
    try {
      if (typeof window.PopStateEvent === "function") {
        window.dispatchEvent(new PopStateEvent("popstate"));
      } else {
        var evt = document.createEvent("Event");
        evt.initEvent("popstate", true, true);
        window.dispatchEvent(evt);
      }
    } catch (_err2) {
      window.location.href = href;
    }
  }

  function isStaticDownloadHref(href) {
    return /\.(?:pdf|zip|csv|json|xml|png|jpe?g|webp|svg)(?:$|\?)/i.test(String(href || ""));
  }

  function onDocumentClick(e) {
    if (_bypassClick || _busy || e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    if (prefersReducedMotion()) return;

    var rawTarget = e.target;
    if (!rawTarget || typeof rawTarget.closest !== "function") return;

    var navEl = rawTarget.closest('[data-action="nav"], [data-action="nav-learning"], [data-action="nav-traditional"]');
    if (navEl) {
      var act = navEl.getAttribute("data-action");
      var destPage = act === "nav-learning"
        ? "learning"
        : (act === "nav-traditional" ? "traditional" : (navEl.getAttribute("data-page") || "home"));
      var hasSubTab = Boolean(navEl.getAttribute("data-tab"));
      if (window.CCE_STORE && typeof window.CCE_STORE.getState === "function") {
        var curState = window.CCE_STORE.getState();
        if (curState && curState.activePage === destPage && !hasSubTab) {
          return;
        }
      }
      e.preventDefault();
      e.stopPropagation();
      var destRoute = PAGE_PATHS[destPage] || ("/" + destPage);
      runTransition(destRoute, function () {
        triggerNativeNavClick(navEl);
      });
      return;
    }

    var linkEl = rawTarget.closest("a[href]");
    if (!linkEl) return;
    if (linkEl.getAttribute("target") === "_blank" || linkEl.hasAttribute("download")) return;
    var linkAction = linkEl.getAttribute("data-action");
    if (linkAction && linkAction !== "nav") return;

    var href = linkEl.getAttribute("href") || "";
    if (!href || href.charAt(0) !== "/" || href.indexOf("//") === 0) return;
    if (href === (window.location.pathname || "/") + (window.location.search || "")) return;
    if (isStaticDownloadHref(href)) return;

    e.preventDefault();
    e.stopPropagation();
    runTransition(href, function () {
      navigateInternalHref(href);
    });
  }

  function init() {
    ensureCurtain();
    document.addEventListener("click", onDocumentClick, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }

  window.CCETransition = {
    navigate: runTransition,
    isRunning: function () {
      return _busy;
    }
  };
})();
