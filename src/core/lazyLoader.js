// ============================================================================
// CHINESE CULTURE EXPLORER V3/V4 — On-Demand Zero-Build Lazy Bundle Loader
// Pre-seeds safe global data containers BEFORE app.js initializes so bundles
// can stream in on demand without detaching Array/Object references.
// ============================================================================

(function () {
  "use strict";

  // Pre-seed mutable containers before core scripts read references
  window.CCE_ARTICLES = window.CCE_ARTICLES || [];
  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};
  window.CCE_DICTIONARY = window.CCE_DICTIONARY || [];
  window.CCE_SURVIVAL_PACKS = window.CCE_SURVIVAL_PACKS || [];
  window.CCE_PHILOSOPHY = window.CCE_PHILOSOPHY || { schools: [], classicalTexts: [], comparisonMatrix: [] };
  window.CCE_MUSEUM = window.CCE_MUSEUM || { categories: [], culturalShowcase: [], artifacts: [], articleSupplements: {} };
  window.CCE_PAINTINGS = window.CCE_PAINTINGS || { masterpieces: [], eras: [], genres: [], comparisons: [], museums: [] };
  window.CCE_PAINTINGS_EN = window.CCE_PAINTINGS_EN || {};
  window.CCE_DESTINATIONS_ATLAS = window.CCE_DESTINATIONS_ATLAS || { hubs: [], corridors: [] };
  window.CCE_DESTINATIONS_ATLAS_EN = window.CCE_DESTINATIONS_ATLAS_EN || {};

  var BUNDLES = {
    "3d-pack": [
      "src/vendor/three.min.js",
      "src/components/forbiddenCity3D.js"
    ],
    "en-pack": [
      "src/data/articlesEnData.js",
      "src/data/enParityPhilCustomsBiz2026.js",
      "src/data/enParityMuseum2026.js",
      "src/data/enParityPaintings2026.js",
      "src/data/enParityRegionsHistory2026.js",
      "src/data/coreModulesEnParity2026.js",
      "src/data/v3/enParityArticlesV3_Part1a.js",
      "src/data/v3/enParityArticlesV3_Part1b.js",
      "src/data/v3/enParityArticlesV3_Part2a.js",
      "src/data/v3/enParityArticlesV3_Part2b.js",
      "src/data/v3/enParityArticlesV3_Part3a.js",
      "src/data/v3/enParityArticlesV3_Part3b.js",
      "src/data/v3/enParityArticlesV3_Part4.js",
      "src/data/v3/enParityArticlesV3_Part5a.js",
      "src/data/v3/enParityArticlesV3_Part5b.js",
      "src/data/v3/enParityPaintingsV3.js",
      "src/data/v3/enParityMuseumV3.js",
      "src/data/v3/enParityClassicsV3.js",
      "src/data/v3/enParityComprehensionV3_p1.js",
      "src/data/v3/enParityComprehensionV3_p2.js",
      "src/data/v3/enParityCustomsV3.js"
    ],
    "zh-i18n-pack": [
      "src/data/v3/uiI18nZh2026.js"
    ],
    "articles-v3-pack": [
      "src/data/v3/articlesExpansionV3_Part1a.js",
      "src/data/v3/articlesExpansionV3_Part1b.js",
      "src/data/v3/articlesExpansionV3_Part2a.js",
      "src/data/v3/articlesExpansionV3_Part2b.js",
      "src/data/v3/articlesExpansionV3_Part3a.js",
      "src/data/v3/articlesExpansionV3_Part3b.js",
      "src/data/v3/articlesExpansionV3_Part4.js",
      "src/data/v3/articlesExpansionV3_Part5a.js",
      "src/data/v3/articlesExpansionV3_Part5b.js",
      "src/data/v3/articlesDepthEnrichmentBatch3_p1.js",
      "src/data/v3/articlesDepthEnrichmentBatch3_p2.js",
      "src/data/v3/articleComprehensionV3_p1.js",
      "src/data/v3/articleComprehensionV3_p2.js",
      "src/data/crossLinkGraph2026.js"
    ],
    "regions-deep-pack": [
      "src/data/v3/destinationsDeepAtlasPart2_3a.js",
      "src/data/v3/destinationsDeepAtlasPart2_3b.js",
      "src/data/v3/destinationsDeepAtlasPart2_3c.js",
      "src/data/crossLinkGraph2026.js"
    ],
    "paintings-pack": [
      "src/data/v3/paintingsExpansionV3.js"
    ],
    "museum-classics-v3-pack": [
      "src/data/v3/museumExpansionV3.js",
      "src/data/v3/classicsExpansionV3.js",
      "src/data/v3/customsExpansionV3.js",
      "src/data/v3/conceptPairs2026_a.js",
      "src/data/v3/conceptPairs2026_b.js",
      "src/data/v3/guidedTracks2026.js"
    ],
    "dictionary-pack": [
      "src/data/v3/dictionaryExpansionV3_p1.js",
      "src/data/v3/dictionaryExpansionV3_p2.js",
      "src/data/v3/survivalPacksExpansionV3.js",
      "src/data/v3/quizArenaBank2026.js"
    ],
    "history-biz-v3-pack": [
      "src/data/v3/historySyncV3.js",
      "src/data/v3/falseFriendsV3.js",
      "src/data/v3/bizExpansionV3.js"
    ]
  };

  var _loadedScripts = {};
  var _bundlePromises = {};
  var _activeBundles = {};
  var _listeners = [];

  function hasScriptInDom(src) {
    var norm = src.replace(/^\//, "");
    var list = document.querySelectorAll("script[src]");
    for (var i = 0; i < list.length; i++) {
      var s = (list[i].getAttribute("src") || "").replace(/^\//, "");
      if (s === norm || s.indexOf(norm) === 0) return true;
    }
    return false;
  }

  function loadScript(src) {
    if (_loadedScripts[src]) return _loadedScripts[src];
    if (hasScriptInDom(src)) {
      _loadedScripts[src] = Promise.resolve();
      return _loadedScripts[src];
    }
    _loadedScripts[src] = new Promise(function (resolve) {
      var el = document.createElement("script");
      el.src = "/" + src.replace(/^\//, "");
      el.async = false;
      el.onload = function () { resolve(); };
      el.onerror = function () { resolve(); }; // fail-open gracefully if an optional future script is absent
      document.head.appendChild(el);
    });
    return _loadedScripts[src];
  }

  function emitProgress(bundleName, done) {
    for (var i = 0; i < _listeners.length; i++) {
      try { _listeners[i](bundleName, done); } catch (e) {}
    }
  }

  function ensureBundle(name) {
    if (_bundlePromises[name]) return _bundlePromises[name];
    var files = BUNDLES[name];
    if (!files || !files.length) return Promise.resolve();
    _activeBundles[name] = true;
    emitProgress(name, false);
    // Load sequentially within bundle to preserve deterministic dependency order
    var chain = Promise.resolve();
    files.forEach(function (file) {
      chain = chain.then(function () { return loadScript(file); });
    });
    _bundlePromises[name] = chain.then(function () {
      delete _activeBundles[name];
      emitProgress(name, true);
      if (window.CCE_SEARCH && typeof window.CCE_SEARCH.markDirty === "function") {
        window.CCE_SEARCH.markDirty();
      }
    });
    return _bundlePromises[name];
  }

  function ensureMany(names) {
    return Promise.all((names || []).map(ensureBundle));
  }

  function ensureForState(pageId, uiLang, extraFlags) {
    var need = [];

    if (pageId === "home") {
      need.push("regions-deep-pack", "museum-classics-v3-pack");
    } else if (pageId === "explore" || pageId === "article") {
      need.push("articles-v3-pack", "dictionary-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "history") {
      need.push("history-biz-v3-pack");
    } else if (pageId === "regions") {
      need.push("regions-deep-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "paintings") {
      need.push("paintings-pack");
    } else if (pageId === "museum") {
      need.push("museum-classics-v3-pack", "paintings-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "philosophy" || pageId === "traditional" || pageId === "library") {
      need.push("museum-classics-v3-pack", "articles-v3-pack", "dictionary-pack");
    } else if (pageId === "learning") {
      need.push("dictionary-pack", "museum-classics-v3-pack", "history-biz-v3-pack");
    } else if (pageId === "sino-vietnam" || pageId === "business") {
      need.push("history-biz-v3-pack");
    }

    // Enforce VI additive packs BEFORE en-pack / zh-i18n-pack so EN/ZH overlays always find base records
    return ensureMany(need).then(function () {
      var langPacks = [];
      if (uiLang === "en") langPacks.push("en-pack");
      if (uiLang === "zh-CN" || uiLang === "zh-TW") langPacks.push("zh-i18n-pack");
      return langPacks.length ? ensureMany(langPacks) : Promise.resolve();
    });
  }

  function hasUnloaded(pageId, uiLang, extraFlags) {
    var need = [];
    if (pageId === "home") need.push("regions-deep-pack", "museum-classics-v3-pack");
    else if (pageId === "explore" || pageId === "article") {
      need.push("articles-v3-pack", "dictionary-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "history") need.push("history-biz-v3-pack");
    else if (pageId === "regions") {
      need.push("regions-deep-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "paintings") need.push("paintings-pack");
    else if (pageId === "museum") {
      need.push("museum-classics-v3-pack", "paintings-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack");
    } else if (pageId === "philosophy" || pageId === "traditional" || pageId === "library") {
      need.push("museum-classics-v3-pack", "articles-v3-pack", "dictionary-pack");
    } else if (pageId === "learning") need.push("dictionary-pack", "museum-classics-v3-pack", "history-biz-v3-pack");
    else if (pageId === "sino-vietnam" || pageId === "business") need.push("history-biz-v3-pack");
    if (uiLang === "en") need.push("en-pack");
    if (uiLang === "zh-CN" || uiLang === "zh-TW") need.push("zh-i18n-pack");

    for (var i = 0; i < need.length; i++) {
      if (!_bundlePromises[need[i]]) return true;
    }
    return false;
  }

  function warmAllInIdle() {
    var runner = window.requestIdleCallback || function (cb) { return setTimeout(cb, 1800); };
    runner(function () {
      ensureMany([
        "articles-v3-pack",
        "regions-deep-pack",
        "museum-classics-v3-pack",
        "dictionary-pack",
        "history-biz-v3-pack",
        "paintings-pack"
      ]);
    });
  }

  window.CCE_LAZY = {
    BUNDLES: BUNDLES,
    ensureBundle: ensureBundle,
    ensureMany: ensureMany,
    ensureForState: ensureForState,
    hasUnloaded: hasUnloaded,
    warmAllInIdle: warmAllInIdle,
    isLoading: function (name) {
      if (name) return Boolean(_activeBundles[name]);
      return Object.keys(_activeBundles).length > 0;
    },
    onStatus: function (fn) {
      if (typeof fn === "function") _listeners.push(fn);
    }
  };
})();
