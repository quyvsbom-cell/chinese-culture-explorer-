// ============================================================================
// CHINESE CULTURE EXPLORER — Deterministic Offline Grounded Q&A Engine
// Zero External API Keys: Searches essays, provinces, lexicon, concepts & V4 packs
// ============================================================================

(function () {
  "use strict";

  var qaState = {
    open: false,
    query: "",
    results: []
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function normTokens(q) {
    return String(q || "")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}\s]+/gu, " ")
      .split(/\s+/)
      .filter(function (t) { return t.length >= 2 || /[\u4e00-\u9fff]/.test(t); });
  }

  function buildCorpus() {
    var docs = [];
    (window.CCE_ARTICLES || []).forEach(function (a) {
      docs.push({
        type: "article",
        id: a.id,
        title: (a.titleVi || "") + (a.titleZh ? " (" + a.titleZh + ")" : ""),
        titleEn: a.titleEn || a.titleVi || "",
        snippet: (a.introduction || "").slice(0, 220),
        hay: ((a.titleVi || "") + " " + (a.titleEn || "") + " " + (a.titleZh || "") + " " + (a.introduction || "") + " " + (a.categoryLabel || "")).toLowerCase()
      });
    });
    var provs = (window.CCE_REGIONS && (window.CCE_REGIONS.provincesDirectory || window.CCE_REGIONS.provincialDirectory)) || [];
    provs.forEach(function (p) {
      docs.push({
        type: "province",
        id: p.id,
        title: (p.nameVi || "") + " (" + (p.nameZh || "") + ")",
        titleEn: p.nameEn || p.nameVi || "",
        snippet: (p.highlights || p.economy || "").slice(0, 220),
        hay: ((p.nameVi || "") + " " + (p.nameEn || "") + " " + (p.nameZh || "") + " " + (p.highlights || "") + " " + (p.economy || "")).toLowerCase()
      });
    });
    (window.CCE_CONCEPT_PAIRS_V3 || []).forEach(function (cp) {
      docs.push({
        type: "philosophy",
        id: cp.id,
        title: cp.termA_Vi + " vs " + cp.termB_Vi,
        titleEn: (cp.termA_En || cp.termA_Vi) + " vs " + (cp.termB_En || cp.termB_Vi),
        snippet: cp.coreDiffVi || "",
        hay: ((cp.termA_Vi || "") + " " + (cp.termB_Vi || "") + " " + (cp.termA_Zh || "") + " " + (cp.termB_Zh || "") + " " + (cp.coreDiffVi || "") + " " + (cp.coreDiffEn || "")).toLowerCase()
      });
    });
    (window.CCE_DICTIONARY || []).forEach(function (d) {
      docs.push({
        type: "term",
        id: d.id,
        title: d.hanzi + " (" + d.pinyin + ") — " + (d.vietnamese || ""),
        titleEn: d.hanzi + " (" + d.pinyin + ") — " + (d.english || d.vietnamese || ""),
        snippet: d.etymology || d.context || "",
        hay: ((d.hanzi || "") + " " + (d.pinyin || "") + " " + (d.hanViet || "") + " " + (d.vietnamese || "") + " " + (d.english || "") + " " + (d.etymology || "")).toLowerCase()
      });
    });
    // Index V4 bundles automatically if loaded
    var tradeV4 = window.CCE_TRADE_TRILINGUAL_V4 || {};
    (tradeV4.terms || []).forEach(function (tr) {
      docs.push({
        type: "business",
        id: tr.id,
        title: (tr.en || "") + " · " + (tr.zh || "") + " (" + (tr.vi || "") + ")",
        titleEn: (tr.en || "") + " · " + (tr.zh || ""),
        snippet: (tr.contextEn || tr.contextVi || "").slice(0, 200),
        hay: ((tr.en || "") + " " + (tr.zh || "") + " " + (tr.vi || "") + " " + (tr.pinyin || "") + " " + (tr.contextEn || "") + " " + (tr.contextVi || "")).toLowerCase()
      });
    });
    return docs;
  }

  function query(q) {
    qaState.query = String(q || "").trim();
    var toks = normTokens(qaState.query);
    if (!toks.length) {
      qaState.results = [];
      return [];
    }
    var corpus = buildCorpus();
    var scored = [];
    for (var i = 0; i < corpus.length; i++) {
      var doc = corpus[i];
      var s = 0;
      for (var j = 0; j < toks.length; j++) {
        if (doc.hay.indexOf(toks[j]) !== -1) {
          s += 1;
          if (doc.title.toLowerCase().indexOf(toks[j]) !== -1) s += 1.5;
        }
      }
      if (doc.hay.indexOf(qaState.query.toLowerCase()) !== -1) s += 3;
      if (s > 0) scored.push({ score: s, doc: doc });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    qaState.results = scored.slice(0, 6).map(function (x) { return x.doc; });
    return qaState.results;
  }

  function open(initialQ) {
    qaState.open = true;
    if (initialQ) query(initialQ);
    renderModal();
  }

  function close() {
    qaState.open = false;
    var el = document.getElementById("cce-local-qa-backdrop");
    if (el) el.remove();
  }

  function renderModal() {
    var existing = document.getElementById("cce-local-qa-backdrop");
    if (!qaState.open) {
      if (existing) existing.remove();
      return;
    }
    var enM = (window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
    var html =
      '<div class="modal-panel" style="max-width:760px;" role="dialog" aria-modal="true" aria-label="Local Grounded Q&A">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--hairline);padding-bottom:0.65rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "OFFLINE GROUNDED KNOWLEDGE ENGINE · 本地文献问答" : "Tra cứu Hỏi – Đáp Trích nguồn Cục bộ · 本地文献问答") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;">' + (enM ? "Ask Across Essays, Provinces, Lexicon & Trade Terms" : "Hỏi đáp Trực tiếp Trên Kho Tư liệu 100% Ngoại tuyến") + '</h3>' +
      '    </div>' +
      '    <button type="button" class="btn btn-ghost btn-sm" data-qa-act="close">' + (enM ? "Close [Esc]" : "Đóng [Esc]") + '</button>' +
      '  </div>' +
      '  <form data-qa-form="1" style="display:flex;gap:0.5rem;margin-bottom:0.9rem;">' +
      '    <input id="cce-local-qa-input" type="text" class="form-input" value="' + esc(qaState.query) + '" placeholder="' + (enM ? "e.g. Dougong, FOB vs CIF, Định kim, Dujiangyan..." : "VD: Đấu củng, Định kim, Đô Giang Yển, Bắc Kinh, FOB...") + '" />' +
      '    <button type="submit" class="btn btn-primary btn-sm">' + (enM ? "Search Sources" : "Truy xuất") + '</button>' +
      '  </form>' +
      '  <div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.85rem;">' +
      ["斗拱 Đấu Củng", "定金 Định Kim", "FOB CIF", "Tứ Khố Tứ Thư", "Đô Giang Yển"].map(function (sample) {
        return '<button type="button" class="filter-pill" data-qa-act="sample" data-q="' + esc(sample) + '">' + esc(sample) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="max-height:360px;overflow:auto;display:grid;gap:0.65rem;">' +
      (qaState.query ? (
        qaState.results.length ? qaState.results.map(function (r) {
          var actAttr = r.type === "article"
            ? 'data-action="open-article" data-id="' + esc(r.id) + '"'
            : r.type === "province"
              ? 'data-action="open-province" data-id="' + esc(r.id) + '"'
              : r.type === "term"
                ? 'data-action="open-term" data-id="' + esc(r.id) + '"'
                : r.type === "philosophy"
                  ? 'data-action="nav" data-page="philosophy"'
                  : 'data-action="nav" data-page="business"';
          return (
            '<div class="flashcard-layer" style="padding:0.75rem 0.9rem;">' +
            '  <div style="display:flex;justify-content:space-between;gap:0.5rem;align-items:center;">' +
            '    <strong>' + esc(enM ? r.titleEn : r.title) + '</strong>' +
            '    <span class="badge badge-outline">' + esc(r.type.toUpperCase()) + '</span>' +
            '  </div>' +
            '  <p style="font-size:0.83rem;color:var(--text-secondary);margin:0.35rem 0 0.5rem;">' + esc(r.snippet) + '</p>' +
            '  <button type="button" class="btn btn-secondary btn-sm" data-qa-close-on-nav="1" ' + actAttr + '>' + (enM ? "Open Source Dossier →" : "Mở Nguồn đối chứng →") + '</button>' +
            '</div>'
          );
        }).join("") : '<div class="epistemic-box">' + (enM ? "No grounded entry matched that query. Try Chinese, Pinyin, Vietnamese, or English keywords." : "Chưa tìm thấy mục từ khớp trực tiếp. Thử từ khóa Việt, Anh, Hán tự hoặc Pinyin.") + '</div>'
      ) : '<p style="font-size:0.86rem;color:var(--text-muted);margin:0;">' + (enM ? "Enter a term or topic to retrieve exact verified dossiers locally (0 API cost)." : "Nhập khái niệm, địa danh hoặc điều khoản để trích xuất hồ sơ đã kiểm chứng từ bộ nhớ trình duyệt.") + '</p>') +
      '  </div>' +
      '</div>';

    if (!existing) {
      existing = document.createElement("div");
      existing.id = "cce-local-qa-backdrop";
      existing.className = "modal-backdrop open";
      document.body.appendChild(existing);
    }
    existing.innerHTML = html;
  }

  function bindEvents() {
    if (window._cceLocalQaBound || typeof document === "undefined") return;
    window._cceLocalQaBound = true;
    document.addEventListener("click", function (e) {
      var opener = e.target && e.target.closest ? e.target.closest('[data-action="open-local-qa"]') : null;
      if (opener) { e.preventDefault(); open(); return; }
      var navClose = e.target && e.target.closest ? e.target.closest("[data-qa-close-on-nav]") : null;
      if (navClose) { close(); return; }
      var actEl = e.target && e.target.closest ? e.target.closest("[data-qa-act]") : null;
      if (!actEl) return;
      var act = actEl.getAttribute("data-qa-act");
      if (act === "close") close();
      else if (act === "sample") {
        query(actEl.getAttribute("data-q") || "");
        renderModal();
      }
    });
    document.addEventListener("submit", function (e) {
      var f = e.target;
      if (!f || !f.getAttribute || !f.getAttribute("data-qa-form")) return;
      e.preventDefault();
      var inp = document.getElementById("cce-local-qa-input");
      query(inp ? inp.value : "");
      renderModal();
    });
    document.addEventListener("keydown", function (e) {
      if (qaState.open && e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        close();
      }
    }, true);
  }

  bindEvents();

  window.CCE_LOCAL_QA = {
    open: open,
    close: close,
    query: query,
    isOpen: function () { return qaState.open; }
  };
})();
