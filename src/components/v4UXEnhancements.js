// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Benchmarked UI/UX Layer
// 1. NatGeo 4 Intent Cards & Recently Viewed Shelf (localStorage)
// 2. Scrolled 60px Compact Header & Keyboard Navigable Command Palette
// 3. FT/Monocle Reading Themes (Paper/Sepia/Night) + Bilingual VI|EN Split-View
// 4. Met/Rijksstudio My Collection Unified Drawer + Floating Quick Reference
// ============================================================================

(function () {
  "use strict";

  var RECENT_KEY = "cce_recent_visited_v4";
  var THEME_KEY = "cce_read_theme_v4";
  var uxState = {
    readTheme: (typeof localStorage !== "undefined" && localStorage.getItem(THEME_KEY)) || "paper",
    bilingualSplit: false,
    quickRefOpen: false,
    quickRefQuery: "",
    collectionOpen: false,
    cmdActiveIdx: -1
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function applyReadTheme() {
    if (typeof document === "undefined" || !document.body) return;
    document.body.classList.remove("cce-read-paper", "cce-read-sepia", "cce-read-night");
    document.body.classList.add("cce-read-" + (uxState.readTheme || "paper"));
  }

  function loadRecent() {
    try {
      var raw = JSON.parse(localStorage.getItem(RECENT_KEY) || "[]");
      return Array.isArray(raw) ? raw.slice(0, 6) : [];
    } catch (_e) {
      return [];
    }
  }

  function recordVisit(item) {
    if (!item || !item.id || !item.title || typeof localStorage === "undefined") return;
    var list = loadRecent().filter(function (x) { return !(x.type === item.type && x.id === item.id); });
    list.unshift({ type: item.type, id: item.id, title: String(item.title).slice(0, 64) });
    try { localStorage.setItem(RECENT_KEY, JSON.stringify(list.slice(0, 6))); } catch (_e) {}
  }

  // --------------------------------------------------------------------------
  // 1. Homepage 4 Intent Cards + Recently Viewed Shelf + Collection Button
  // --------------------------------------------------------------------------
  function renderHeroIntentAndRecent(enM) {
    var recent = loadRecent();
    var intents = [
      {
        tag: enM ? "Travel & Cuisine" : "Du lịch & Ẩm thực",
        title: enM ? "34-Province Atlas, Itineraries & Dish Guide" : "Cẩm nang Du lịch Thực địa, Lịch trình & Ẩm thực",
        desc: enM ? "12-month calendar, 8 curated itineraries, Show-to-Driver cards & 3D relief map." : "Lịch 12 tháng, 8 lịch trình, thẻ đưa tài xế & bản đồ 3D 34 tỉnh.",
        act: 'data-ux-act="go-travel"'
      },
      {
        tag: enM ? "HSK 4–9 & Classics" : "HSK 4–9 & Danh tác",
        title: enM ? "Literary Canons, Study Abroad & SRS Deck" : "Tây Du Ký, Hồng Lâu Mộng, Du học CSC & Từ điển",
        desc: enM ? "60 HSK idioms, 64 false friends, C9/CSC admissions & SM-2 flashcards." : "60 điển cố HSK 4–9, 64 bạn giả Hán–Việt, học bổng CSC & thẻ SM-2.",
        act: 'data-ux-act="go-hsk"'
      },
      {
        tag: enM ? "EU–China Logistics" : "Logistics Trung – Âu – VN",
        title: enM ? "Trilingual EN–ZH–VI Export, Customs & Silk Road" : "XNK Song ngữ Anh–Trung, Hải quan EU & Đường Tơ Lụa",
        desc: enM ? "Keep English sharp for EU firms alongside Chinese factory negotiation & 3D rail routes." : "Giữ vững tiếng Anh cho công ty châu Âu + đàm phán xưởng TQ & bản đồ 3D.",
        act: 'data-ux-act="go-eu-trade"'
      },
      {
        tag: enM ? "3D & Cosmology" : "3D & Âm Dương – Ngũ Hành",
        title: enM ? "10 Interactive 3D Labs, Đông y & Five Phases" : "10 Mô hình 3D, Đông y & Chuyên luận Âm Dương Ngũ Hành",
        desc: enM ? "Forbidden City, Dougong, Chime Bells & Brass Armillary Wuxing framework." : "Tử Cấm Thành, Đấu Củng, Biên Chung & Hồn Thiên Nghi Ngũ Hành – Đông y.",
        act: 'data-ux-act="go-armillary"'
      }
    ];

    return (
      '<section class="cce-intent-strip" aria-label="' + (enM ? "Guided pathways" : "Khám phá theo mục tiêu") + '">' +
      '  <div class="container">' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.75rem;flex-wrap:wrap;gap:0.5rem;">' +
      '      <span class="editorial-kicker">' + (enM ? "CHOOSE YOUR EXPLORATION PATH · 专题探索入口" : "Chọn Hành trình Khám phá Của Bạn · 专题探索入口") + '</span>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-ux-act="open-collection">' + (enM ? "My Collection" : "Bộ sưu tập Của Tôi") + '</button>' +
      '    </div>' +
      '    <div class="cce-intent-grid">' +
      intents.map(function (it) {
        return (
          '<button type="button" class="cce-intent-card" ' + it.act + '>' +
          '  <span class="cce-intent-tag">' + it.tag + '</span>' +
          '  <span class="cce-intent-title">' + it.title + '</span>' +
          '  <span class="cce-intent-desc">' + it.desc + '</span>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      (recent.length ? (
        '<div class="cce-recent-shelf">' +
        '  <span style="font-family:var(--font-mono);font-size:0.72rem;color:var(--text-muted);text-transform:uppercase;">' + (enM ? "Recently Viewed:" : "Vừa xem gần đây:") + '</span>' +
        recent.map(function (r) {
          var attr = r.type === "province" ? 'data-action="open-province" data-id="' + esc(r.id) + '"'
            : r.type === "artifact" ? 'data-action="open-artifact" data-id="' + esc(r.id) + '"'
            : r.type === "painting" ? 'data-action="open-painting-detail" data-id="' + esc(r.id) + '"'
            : 'data-action="open-article" data-id="' + esc(r.id) + '"';
          return '<button type="button" class="filter-pill" style="font-size:0.74rem;padding:0.18rem 0.55rem;" ' + attr + '>' + esc(r.title) + '</button>';
        }).join("") +
        '</div>'
      ) : "") +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 2. Article Reading Room Bar (Paper/Sepia/Night + Bilingual VI|EN Split)
  // --------------------------------------------------------------------------
  function renderReadingControlsBar(art, enM) {
    applyReadTheme();
    if (art && art.id) {
      recordVisit({ type: "article", id: art.id, title: enM ? (art.titleEn || art.titleVi) : art.titleVi });
    }
    var themes = [
      { id: "paper", lbl: enM ? "Paper" : "Giấy Xưa" },
      { id: "sepia", lbl: "Sepia" },
      { id: "night", lbl: enM ? "Night" : "Đêm" }
    ];
    return (
      '<div class="cce-reading-controls" role="region" aria-label="Reading Room Appearance">' +
      '  <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">' +
      '    <strong>' + (enM ? "Theme:" : "Nền đọc:") + '</strong>' +
      themes.map(function (th) {
        return '<button type="button" class="filter-pill ' + (uxState.readTheme === th.id ? "active" : "") + '" data-ux-act="read-theme" data-val="' + th.id + '" style="padding:0.15rem 0.5rem;font-size:0.72rem;">' + th.lbl + '</button>';
      }).join("") +
      '  </div>' +
      '  <button type="button" class="btn btn-sm ' + (uxState.bilingualSplit ? "btn-primary" : "btn-secondary") + '" data-ux-act="toggle-split">' +
      (uxState.bilingualSplit ? (enM ? "Exit VI | EN Split-View" : "Tắt Đối chiếu VI | EN") : (enM ? "Bilingual VI | EN Split-View" : "Song ngữ Đối chiếu VI | EN")) +
      '  </button>' +
      '</div>'
    );
  }

  function renderBilingualSplitView(art) {
    if (!uxState.bilingualSplit || !art) return "";
    var enPack = (window.CCE_ARTICLES_EN && window.CCE_ARTICLES_EN[art.id]) || null;
    var viSecs = art.mainContent || [];
    var enSecs = (enPack && enPack.mainContent) || viSecs;
    var viIntro = art.introduction || "";
    var enIntro = (enPack && enPack.introduction) || art.introductionEn || "(English parallel pack loading or summarized in abstract above.)";
    return (
      '<section id="cce-bilingual-split" class="cce-split-bilingual" aria-label="Bilingual VI and EN Split View">' +
      '  <div class="cce-split-col">' +
      '    <div class="editorial-kicker" style="color:var(--imperial-red);">TIẾNG VIỆT · CHUYÊN LUẬN GỐC</div>' +
      '    <h4 style="margin:0.25rem 0 0.5rem;">' + esc(art.titleVi || "") + '</h4>' +
      '    <p>' + esc(viIntro) + '</p>' +
      viSecs.slice(0, 2).map(function (s) {
        return '<p><strong>' + esc(s.heading || "") + ':</strong> ' + esc(String(s.body || "").slice(0, 420)) + '</p>';
      }).join("") +
      '  </div>' +
      '  <div class="cce-split-col">' +
      '    <div class="editorial-kicker" style="color:var(--jade-green);">ENGLISH EDITION · ACADEMIC PARALLEL</div>' +
      '    <h4 style="margin:0.25rem 0 0.5rem;">' + esc((enPack && enPack.title) || art.titleEn || art.titleVi || "") + '</h4>' +
      '    <p>' + esc(enIntro) + '</p>' +
      enSecs.slice(0, 2).map(function (s) {
        return '<p><strong>' + esc(s.heading || "") + ':</strong> ' + esc(String(s.body || "").slice(0, 420)) + '</p>';
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. My Collection Modal + Floating Quick Reference Drawer
  // --------------------------------------------------------------------------
  function renderCollectionModalHTML(enM) {
    if (!uxState.collectionOpen) return "";
    var st = window.CCE_STORE ? window.CCE_STORE.getState() : { bookmarks: [], vocabNotebook: [] };
    var bms = st.bookmarks || [];
    var srsCnt = window.CCE_SRS ? window.CCE_SRS.loadDeck().length : 0;
    return (
      '<div class="modal-backdrop open" data-ux-act="close-collection">' +
      '  <div class="modal-panel" style="max-width:740px;" role="dialog" aria-modal="true" aria-label="My Collection">' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--hairline);padding-bottom:0.65rem;margin-bottom:0.85rem;">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:var(--imperial-red);">MY CURATED COLLECTION · 个人藏馆</div>' +
      '        <h3 style="margin:0.15rem 0 0;">' + (enM ? "Saved Monographs, Paintings, Artifacts &amp; SRS Deck" : "Kho Lưu trữ Cá nhân Hợp nhất") + '</h3>' +
      '      </div>' +
      '      <button type="button" class="btn btn-ghost btn-sm" data-ux-act="close-collection">' + (enM ? "Close [Esc]" : "Đóng [Esc]") + '</button>' +
      '    </div>' +
      '    <div class="grid grid-3" style="gap:0.65rem;margin-bottom:1rem;">' +
      '      <div class="stat-card"><div class="stat-value">' + bms.length + '</div><div class="stat-label">' + (enM ? "Saved Bookmarks" : "Mục Đã Lưu") + '</div></div>' +
      '      <div class="stat-card"><div class="stat-value">' + (st.vocabNotebook || []).length + '</div><div class="stat-label">' + (enM ? "Notebook Phrases" : "Từ Vựng Sổ tay") + '</div></div>' +
      '      <div class="stat-card"><div class="stat-value">' + srsCnt + '</div><div class="stat-label">SM-2 SRS Cards</div></div>' +
      '    </div>' +
      (bms.length ? (
        '<div style="display:grid;gap:0.45rem;max-height:280px;overflow:auto;">' +
        bms.map(function (b) {
          var act = b.type === "artifact" ? 'data-action="open-artifact" data-id="' + esc(b.id) + '"'
            : b.type === "painting" ? 'data-action="open-painting-detail" data-id="' + esc(b.id) + '"'
            : b.type === "province" ? 'data-action="open-province" data-id="' + esc(b.id) + '"'
            : 'data-action="open-article" data-id="' + esc(b.id) + '"';
          return '<div class="flashcard-layer" style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;"><span><span class="badge badge-outline">' + esc(b.type) + '</span> <strong>' + esc(b.title || b.id) + '</strong></span><button type="button" class="btn btn-secondary btn-sm" data-ux-act="close-collection-nav" ' + act + '>Open →</button></div>';
        }).join("") +
        '</div>'
      ) : '<p style="font-size:0.86rem;color:var(--text-muted);">' + (enM ? "No saved items yet. Click Save on any essay, painting, artifact, or province." : "Chưa có mục nào được lưu. Nhấn nút Lưu trên chuyên luận, quốc họa, bảo vật hoặc tỉnh thành.") + '</p>') +
      '  </div>' +
      '</div>'
    );
  }

  function renderQuickRefFloating(enM) {
    var q = uxState.quickRefQuery.trim().toLowerCase();
    var hits = [];
    if (uxState.quickRefOpen && q.length >= 1) {
      hits = (window.CCE_DICTIONARY || []).filter(function (d) {
        return ((d.hanzi || "") + " " + (d.pinyin || "") + " " + (d.hanViet || "") + " " + (d.vietnamese || "") + " " + (d.english || "")).toLowerCase().indexOf(q) !== -1;
      }).slice(0, 6);
    }
    return (
      '<button type="button" class="cce-quickref-fab" data-ux-act="toggle-quickref" aria-expanded="' + (uxState.quickRefOpen ? "true" : "false") + '">' +
      (enM ? "Quick Ref" : "Tra cứu Nhanh") +
      '</button>' +
      (uxState.quickRefOpen ? (
        '<aside class="cce-quickref-drawer" aria-label="' + (enM ? "Quick Reference" : "Ngăn Tra cứu Nhanh") + '">' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">' +
        '    <strong style="font-size:0.86rem;">' + (enM ? "Instant Sinology & Trade Lookup" : "Tra Nhanh Hán Tự & Thuật Ngữ") + '</strong>' +
        '    <button type="button" class="btn btn-ghost btn-sm" data-ux-act="toggle-quickref" style="padding:0.1rem 0.4rem;">✕</button>' +
        '  </div>' +
        '  <input id="cce-quickref-input" type="text" class="form-input" style="font-size:0.82rem;margin-bottom:0.55rem;" value="' + esc(uxState.quickRefQuery) + '" placeholder="' + (enM ? "Hanzi, Pinyin, Incoterms, term..." : "Gõ Hán tự, Pinyin, Hán Việt...") + '" />' +
        (hits.length ? hits.map(function (h) {
          return '<div class="flashcard-layer" style="margin-bottom:0.35rem;font-size:0.78rem;"><strong class="hanzi">' + esc(h.hanzi) + '</strong> <span class="pinyin">' + esc(h.pinyin) + '</span><br>' + esc(enM ? (h.english || h.vietnamese) : h.vietnamese) + '</div>';
        }).join("") : '<div style="font-size:0.78rem;color:var(--text-muted);">' + (q ? (enM ? "No lexicon entry matched." : "Không có mục khớp.") : (enM ? "Type any character or Pinyin above." : "Nhập từ khóa bất kỳ để tra ngay không rời trang.")) + '</div>') +
        '</aside>'
      ) : "")
    );
  }

  // --------------------------------------------------------------------------
  // 4. Global UX Listeners (60px Header, Arrow Nav Command Palette, Actions)
  // --------------------------------------------------------------------------
  function bindGlobal() {
    if (window._cceV4UxBound || typeof document === "undefined") return;
    window._cceV4UxBound = true;
    applyReadTheme();

    window.addEventListener("scroll", function () {
      document.body.classList.toggle("is-scrolled", (window.scrollY || 0) > 64);
    }, { passive: true });

    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "cce-quickref-input") {
        uxState.quickRefQuery = e.target.value || "";
        var cursorPos = e.target.selectionStart;
        if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS();
        var nextInp = document.getElementById("cce-quickref-input");
        if (nextInp) { nextInp.focus(); try { nextInp.setSelectionRange(cursorPos, cursorPos); } catch (_err) {} }
      }
    });

    // Keyboard Command Palette navigation (Up / Down / Enter) inside Search Modal
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        if (uxState.collectionOpen) { uxState.collectionOpen = false; if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS(); }
        if (uxState.quickRefOpen) { uxState.quickRefOpen = false; if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS(); }
      }
      var searchInp = document.getElementById("search-modal-input");
      if (!searchInp || !searchInp.closest(".modal-panel")) return;
      var btns = Array.prototype.slice.call(searchInp.closest(".modal-panel").querySelectorAll(".flashcard-layer button[data-action]"));
      if (!btns.length) return;
      if (e.key === "ArrowDown") {
        e.preventDefault();
        uxState.cmdActiveIdx = (uxState.cmdActiveIdx + 1) % btns.length;
        btns.forEach(function (b, idx) { b.closest(".flashcard-layer").classList.toggle("cce-cmd-active", idx === uxState.cmdActiveIdx); });
        btns[uxState.cmdActiveIdx].scrollIntoView({ block: "nearest" });
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        uxState.cmdActiveIdx = uxState.cmdActiveIdx <= 0 ? btns.length - 1 : uxState.cmdActiveIdx - 1;
        btns.forEach(function (b, idx) { b.closest(".flashcard-layer").classList.toggle("cce-cmd-active", idx === uxState.cmdActiveIdx); });
        btns[uxState.cmdActiveIdx].scrollIntoView({ block: "nearest" });
      } else if (e.key === "Enter" && uxState.cmdActiveIdx >= 0 && btns[uxState.cmdActiveIdx]) {
        e.preventDefault();
        btns[uxState.cmdActiveIdx].click();
        uxState.cmdActiveIdx = -1;
      }
    }, true);

    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-ux-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-ux-act");
      if (act === "read-theme") {
        uxState.readTheme = el.getAttribute("data-val") || "paper";
        try { localStorage.setItem(THEME_KEY, uxState.readTheme); } catch (_e) {}
        applyReadTheme();
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "toggle-split") {
        uxState.bilingualSplit = !uxState.bilingualSplit;
        if (window.CCE_LAZY && uxState.bilingualSplit) {
          window.CCE_LAZY.ensureBundle("en-pack").then(function () {
            if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
          });
        } else if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "toggle-quickref") {
        uxState.quickRefOpen = !uxState.quickRefOpen;
        if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS();
      } else if (act === "open-collection") {
        uxState.collectionOpen = true;
        if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS();
      } else if (act === "close-collection") {
        if (e.target === el || el.tagName === "BUTTON") {
          uxState.collectionOpen = false;
          if (typeof window.CCE_RENDER_MODALS === "function") window.CCE_RENDER_MODALS();
        }
      } else if (act === "close-collection-nav") {
        uxState.collectionOpen = false;
      } else if (act === "go-travel") {
        var rBtn = document.querySelector('[data-action="nav"][data-page="regions"]');
        if (rBtn) rBtn.click();
      } else if (act === "go-hsk") {
        if (window.CCE_V4_HUB && window.CCE_V4_HUB.setActiveTab) window.CCE_V4_HUB.setActiveTab("hsk");
        var eBtn = document.querySelector('[data-action="nav"][data-page="explore"]');
        if (eBtn) eBtn.click();
      } else if (act === "go-eu-trade") {
        var bBtn = document.querySelector('[data-action="nav"][data-page="business"]');
        if (bBtn) bBtn.click();
      } else if (act === "go-armillary") {
        if (window.CCE_3D_HUB) window.CCE_3D_HUB.setStudio("armillary");
        var mBtn = document.querySelector('[data-action="nav"][data-page="museum"]');
        if (mBtn) mBtn.click();
      }
    });
  }
  bindGlobal();

  window.CCE_V4_UX = {
    recordVisit: recordVisit,
    renderHeroIntentAndRecent: renderHeroIntentAndRecent,
    renderReadingControlsBar: renderReadingControlsBar,
    renderBilingualSplitView: renderBilingualSplitView,
    renderCollectionModalHTML: renderCollectionModalHTML,
    renderQuickRefFloating: renderQuickRefFloating,
    isCollectionOpen: function () { return uxState.collectionOpen; }
  };
})();
