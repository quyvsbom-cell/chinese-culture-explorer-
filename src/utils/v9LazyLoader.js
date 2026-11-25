// ============================================================================
// CHINESE CULTURE EXPLORER V9.0 — Lazy Module & LQIP Hydrator Orchestrator
// ============================================================================
(function () {
  "use strict";

  var loadedScripts = Object.create(null);
  var memStore = Object.create(null);
  var imgObserver = null;
  var globalEventsBound = false;

  var SafeStorage = {
    getJSON: function (key, fallback) {
      try {
        var raw = window.localStorage.getItem(key);
        return raw ? JSON.parse(raw) : fallback;
      } catch (e) {
        return memStore[key] !== undefined ? memStore[key] : fallback;
      }
    },
    setJSON: function (key, value) {
      memStore[key] = value;
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
        return true;
      } catch (e) {
        return false;
      }
    }
  };

  function loadScriptOnce(src) {
    if (loadedScripts[src]) return loadedScripts[src];
    loadedScripts[src] = new Promise(function (resolve, reject) {
      var existing = document.querySelector('script[src="' + src + '"]');
      if (existing) {
        resolve(src);
        return;
      }
      var s = document.createElement("script");
      s.src = src;
      s.defer = true;
      s.onload = function () { resolve(src); };
      s.onerror = function (err) {
        delete loadedScripts[src];
        reject(err);
      };
      document.head.appendChild(s);
    });
    return loadedScripts[src];
  }

  function revealImg(img) {
    if (!img) return;
    var ds = img.getAttribute("data-src");
    if (ds) {
      img.src = ds;
      img.removeAttribute("data-src");
    }
    if (typeof img.decode === "function") {
      img.decode().catch(function () {}).finally(function () {
        img.classList.add("is-loaded");
      });
    } else {
      img.classList.add("is-loaded");
    }
  }

  function hydrateImages(rootEl) {
    var root = rootEl || document;
    var imgs = root.querySelectorAll("img[data-src], .v9-lqip-box img");
    if (!imgs.length) return;
    if (!("IntersectionObserver" in window)) {
      imgs.forEach(revealImg);
      return;
    }
    if (!imgObserver) {
      imgObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          revealImg(entry.target);
          imgObserver.unobserve(entry.target);
        });
      }, { rootMargin: "160px 0px" });
    }
    imgs.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0 && !img.getAttribute("data-src")) {
        img.classList.add("is-loaded");
      } else {
        imgObserver.observe(img);
      }
    });
  }

  function teardownInactive(activePage) {
    if ((activePage !== "paintings" || !document.getElementById("v9-handscroll-section")) && window.CCE_V9_HANDSCROLL && typeof window.CCE_V9_HANDSCROLL.stopDrift === "function") {
      window.CCE_V9_HANDSCROLL.stopDrift();
    }
    if (activePage !== "article" && window.CCE_V9_READER && typeof window.CCE_V9_READER.destroy === "function") {
      window.CCE_V9_READER.destroy();
    }
    if (window.CCE_V9_ATLAS && !document.getElementById("v9-split-atlas-section") && activePage !== "learning" && typeof window.CCE_V9_ATLAS.syncTray === "function") {
      window.CCE_V9_ATLAS.syncTray(false);
    }
  }

  function bindGlobalKeys() {
    if (globalEventsBound || typeof document === "undefined") return;
    globalEventsBound = true;

    document.addEventListener("keydown", function (e) {
      var tag = e.target && e.target.tagName ? e.target.tagName.toLowerCase() : "";
      var inInput = tag === "input" || tag === "textarea" || tag === "select";

      if (e.key === "Escape") {
        if (window.CCE_V10_DRAWER && typeof window.CCE_V10_DRAWER.isOpen === "function" && window.CCE_V10_DRAWER.isOpen()) {
          window.CCE_V10_DRAWER.close();
          return;
        }
        if (window.CCE_3D_HUB && typeof window.CCE_3D_HUB.isCinemaOpen === "function" && window.CCE_3D_HUB.isCinemaOpen()) {
          window.CCE_3D_HUB.closeCinema();
          return;
        }
        if (window.CCE_V9_DISCOVERY && typeof window.CCE_V9_DISCOVERY.closeLoupe === "function" && window.CCE_V9_DISCOVERY.isLoupeOpen()) {
          window.CCE_V9_DISCOVERY.closeLoupe();
          return;
        }
        if (window.CCE_V9_TRIP_PLANNER && typeof window.CCE_V9_TRIP_PLANNER.closeOverlays === "function" && window.CCE_V9_TRIP_PLANNER.hasOpenOverlay()) {
          window.CCE_V9_TRIP_PLANNER.closeOverlays();
          return;
        }
        if (window.CCE_V9_READER && typeof window.CCE_V9_READER.closePopover === "function") {
          window.CCE_V9_READER.closePopover();
        }
        var cinOverlay = document.querySelector(".v9-cinema-overlay");
        if (cinOverlay) {
          var closeBtn = cinOverlay.querySelector('[data-s3d-act="toggle-cinema"]');
          if (closeBtn) closeBtn.click();
        }
      }

      if (!inInput && e.shiftKey && e.code === "Space") {
        if (window.CCE_V9_READER && typeof window.CCE_V9_READER.toggleAudio === "function") {
          if (document.getElementById("v9-reader-modebar")) {
            e.preventDefault();
            window.CCE_V9_READER.toggleAudio();
          }
        }
      }
    });
  }

  function prefetchOnIdle(urls) {
    try {
      if (navigator.connection && navigator.connection.saveData) return;
      var run = function () {
        (urls || []).forEach(function (u) {
          var l = document.createElement("link");
          l.rel = "prefetch";
          l.href = u;
          document.head.appendChild(l);
        });
      };
      if (typeof window.requestIdleCallback === "function") {
        window.requestIdleCallback(run, { timeout: 2500 });
      } else {
        setTimeout(run, 1800);
      }
    } catch (e) {}
  }

  function afterRender(activePage, enM) {
    bindGlobalKeys();
    teardownInactive(activePage);
    hydrateImages(document.getElementById("main-content"));

    if (activePage === "home" && window.CCE_V9_HOME && typeof window.CCE_V9_HOME.mount === "function") {
      window.CCE_V9_HOME.mount(enM);
    }
    if ((activePage === "paintings" || activePage === "museum") && window.CCE_V9_DISCOVERY && typeof window.CCE_V9_DISCOVERY.mount === "function") {
      window.CCE_V9_DISCOVERY.mount(activePage, enM);
    }
    if (activePage === "paintings" && window.CCE_V9_HANDSCROLL && typeof window.CCE_V9_HANDSCROLL.mount === "function") {
      window.CCE_V9_HANDSCROLL.mount(enM);
    }
    if (activePage === "regions" && window.CCE_V9_ATLAS && typeof window.CCE_V9_ATLAS.mount === "function") {
      window.CCE_V9_ATLAS.mount(enM);
    }
    if (activePage === "article" && window.CCE_V9_READER && typeof window.CCE_V9_READER.mount === "function") {
      window.CCE_V9_READER.mount(enM);
    }
    if ((activePage === "history" || activePage === "sino-vietnam" || activePage === "business") && window.CCE_V9_DATA_STORIES && typeof window.CCE_V9_DATA_STORIES.mount === "function") {
      window.CCE_V9_DATA_STORIES.mount(activePage, enM);
    }
    if (window.CCE_V9_TRIP_PLANNER && typeof window.CCE_V9_TRIP_PLANNER.mountGlobal === "function") {
      window.CCE_V9_TRIP_PLANNER.mountGlobal(activePage, enM);
    }
  }

  window.CCE_V9_LOADER = {
    SafeStorage: SafeStorage,
    loadScriptOnce: loadScriptOnce,
    hydrateImages: hydrateImages,
    prefetchOnIdle: prefetchOnIdle,
    afterRender: afterRender
  };
})();
