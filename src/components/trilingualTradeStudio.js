// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — EU–China–Vietnam Trilingual Trade Studio
// 1. Anti-English-Attrition ZH -> EN Bridge & 100 EU Logistics Terms
// 2. 12 European Logistics Interviews + 8 Factory ZH <-> EU HQ EN Email Pairs
// 3. Silk Road Historic-to-Modern Logistics Continuum + 4-Col SRS / Anki Push
// ============================================================================

(function () {
  "use strict";

  var trState = {
    tab: "terms", // "terms" | "emails" | "interviews" | "silkroad"
    cat: "all",
    query: "",
    recallMode: "both" // "both" | "hide-en" | "hide-zh"
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function spkBtn(txt, langCode) {
    if (!txt) return "";
    return '<button type="button" class="tts-speak-btn" data-trst-speak="' + esc(txt) + '" data-trst-lang="' + esc(langCode || "zh-CN") + '" title="Listen ' + esc(langCode) + '"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function renderStudio(enM) {
    var data = window.CCE_TRADE_TRILINGUAL_V4 || {};
    var terms = data.terms || [];
    var emails = data.emailPairs || [];
    var dialogues = data.dialogues || [];
    var silk = data.silkRoadLogisticsContinuum || [];
    if (!terms.length && !emails.length) return "";

    var q = trState.query.trim().toLowerCase();
    var filteredTerms = terms.filter(function (t) {
      var catOk = trState.cat === "all" || t.category === trState.cat;
      var qOk = !q || (t.en + " " + t.zh + " " + t.pinyin + " " + t.vi).toLowerCase().indexOf(q) !== -1;
      return catOk && qOk;
    });

    var body = "";
    if (trState.tab === "terms") {
      body = (
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.8rem;">' +
        '  <input id="cce-trst-search" type="text" class="form-input" style="max-width:340px;font-size:0.84rem;" value="' + esc(trState.query) + '" placeholder="' + (enM ? "Search CBAM, ICS2, FCA, CR Express..." : "Tìm CBAM, ICS2, FCA, Trung–Âu, 滞箱费...") + '" />' +
        '  <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">' +
        '    <span style="font-size:0.75rem;font-weight:700;color:var(--text-muted);">' + (enM ? "Anti-Attrition Drill:" : "Chống Quên Ngoại ngữ:") + '</span>' +
        [
          { id: "both", lbl: "EN + ZH + VI" },
          { id: "hide-en", lbl: "Hide EN (ZH → EN Recall)" },
          { id: "hide-zh", lbl: "Hide ZH (EN → ZH Recall)" }
        ].map(function (m) {
          return '<button type="button" class="filter-pill ' + (trState.recallMode === m.id ? "active" : "") + '" data-trst-act="recall" data-val="' + m.id + '" style="font-size:0.73rem;">' + m.lbl + '</button>';
        }).join("") +
        '  </div>' +
        '</div>' +
        '<div class="filter-bar" style="margin-bottom:0.85rem;">' +
        [
          { id: "all", lbl: "All (" + terms.length + " Terms)" },
          { id: "incoterms", lbl: "Incoterms 2020 (16)" },
          { id: "eu", lbl: "EU Compliance: CBAM/ICS2/EUDR (23)" },
          { id: "freight", lbl: "CR Express Rail & Ocean (36)" },
          { id: "customs", lbl: "Customs, L/C & QC (25)" }
        ].map(function (c) {
          return '<button type="button" class="filter-pill ' + (trState.cat === c.id ? "active" : "") + '" data-trst-act="cat" data-val="' + c.id + '">' + c.lbl + '</button>';
        }).join("") +
        '</div>' +
        '<div class="academic-table-wrap" style="max-height:420px;overflow:auto;">' +
        '  <table class="academic-table"><thead><tr><th>European Corporate English</th><th>Chinese Factory / Carrier (中文)</th><th>Vietnamese &amp; Ops Scope</th><th>SM-2 SRS</th></tr></thead><tbody>' +
        filteredTerms.slice(0, 60).map(function (t) {
          var enCell = trState.recallMode === "hide-en"
            ? '<details><summary style="cursor:pointer;color:var(--jade-green);font-size:0.78rem;">Reveal English ▾</summary><strong>' + esc(t.en) + '</strong></details>'
            : '<strong>' + esc(t.en) + '</strong> ' + spkBtn(t.en, "en-US");
          var zhCell = trState.recallMode === "hide-zh"
            ? '<details><summary style="cursor:pointer;color:var(--imperial-red);font-size:0.78rem;">Reveal Chinese ▾</summary><span class="hanzi">' + esc(t.zh) + '</span> (' + esc(t.pinyin) + ')</details>'
            : '<strong class="hanzi" style="font-size:1rem;">' + esc(t.zh) + '</strong> ' + spkBtn(t.zh, "zh-CN") + '<br><span class="pinyin text-xs">' + esc(t.pinyin) + '</span>';
          return '<tr><td>' + enCell + '</td><td>' + zhCell + '</td><td style="font-size:0.8rem;"><strong>' + esc(t.vi) + '</strong><br><span style="color:var(--text-muted);">' + esc(t.contextEn) + '</span></td><td><button type="button" class="btn btn-secondary btn-sm" data-trst-act="push-srs" data-zh="' + esc(t.zh) + '" data-py="' + esc(t.pinyin) + '" data-vi="' + esc(t.vi) + '" data-en="' + esc(t.en) + '">+ SRS</button></td></tr>';
        }).join("") +
        '  </tbody></table>' +
        '</div>'
      );
    } else if (trState.tab === "emails") {
      body = '<div style="display:grid;gap:0.85rem;">' + emails.map(function (em) {
        return (
          '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;">' +
          '  <strong style="color:var(--imperial-red);">' + esc(em.topic) + '</strong>' +
          '  <div class="grid grid-2" style="gap:0.85rem;margin-top:0.55rem;">' +
          '    <div style="background:var(--bg-paper);padding:0.7rem;border:1px solid var(--hairline);font-size:0.82rem;white-space:pre-line;"><strong class="hanzi" style="color:var(--imperial-red);">Factory Side (中文邮件/微信) ' + spkBtn(em.factoryZh.slice(0, 120), "zh-CN") + '</strong><br>' + esc(em.factoryZh) + '</div>' +
          '    <div style="background:var(--bg-paper);padding:0.7rem;border:1px solid var(--hairline);font-size:0.82rem;white-space:pre-line;"><strong style="color:var(--jade-green);">European HQ Side (Corporate EN) ' + spkBtn(em.euHqEn.slice(0, 140), "en-US") + '</strong><br>' + esc(em.euHqEn) + '</div>' +
          '  </div>' +
          '</article>'
        );
      }).join("") + '</div>';
    } else if (trState.tab === "interviews") {
      body = '<div class="grid grid-2" style="gap:0.85rem;">' + dialogues.map(function (d) {
        return (
          '<div class="flashcard-layer" style="font-size:0.82rem;">' +
          '  <span class="badge badge-jade" style="margin-bottom:0.3rem;">' + esc(d.role) + '</span><br>' +
          '  <div style="color:var(--text-muted);margin-bottom:0.35rem;">' + esc(d.contextVi) + '</div>' +
          (d.zhSource ? '<p style="margin:0 0 0.35rem;"><strong class="hanzi">ZH Prompt:</strong> ' + esc(d.zhSource) + '</p>' : "") +
          (d.promptEn ? '<p style="margin:0 0 0.35rem;"><strong>Prompt (EN):</strong> ' + esc(d.promptEn) + '</p>' : "") +
          (d.answerEn ? '<p style="margin:0 0 0.35rem;color:var(--jade-green);"><strong>Model EN Answer:</strong> ' + esc(d.answerEn) + '</p>' : "") +
          (d.reportEn ? '<p style="margin:0 0 0.35rem;color:var(--jade-green);"><strong>EU HQ EN Report:</strong> ' + esc(d.reportEn) + '</p>' : "") +
          (d.zhPartnerBridge ? '<p style="margin:0;color:var(--imperial-red);"><strong>ZH Counterpart Script:</strong> ' + esc(d.zhPartnerBridge) + '</p>' : "") +
          '</div>'
        );
      }).join("") + '</div>';
    } else {
      body = (
        '<div style="margin-bottom:0.85rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">' +
        '  <p style="margin:0;font-size:0.85rem;max-width:70ch;">' + (enM ? "Tracing how ancient Silk Road overland/maritime hubs evolved directly into today's CR Express (中欧班列) and EU container trade lanes:" : "Đối chiếu tính kế thừa trực tiếp từ mạng lưới Con đường Tơ lụa Cổ đại đến tuyến Đường sắt Trung–Âu (中欧班列) và Hàng hải Châu Âu 2026:") + '</p>' +
        '  <button type="button" class="btn btn-primary btn-sm" data-trst-act="open-3d-silk">' + (enM ? "Open 3-Mode Silk Road 3D Studio →" : "Mở Bản đồ 3D Tơ Lụa ↔ Trung–Âu →") + '</button>' +
        '</div>' +
        '<div class="grid grid-3" style="gap:0.85rem;">' +
        silk.map(function (s) {
          return '<div class="card"><strong style="color:var(--imperial-red);">' + esc(s.eraHub) + '</strong><p style="font-size:0.81rem;margin:0.4rem 0;"><strong>Cổ đại:</strong> ' + esc(s.ancientRoleVi) + '</p><p style="font-size:0.81rem;margin:0;color:var(--jade-green);"><strong>Hiện đại 2026:</strong> ' + esc(enM ? s.modernRoleEn : s.modernRoleVi) + '</p></div>';
        }).join("") +
        '</div>'
      );
    }

    return (
      '<section id="cce-trilingual-trade-studio" class="card mb-2" style="margin-top:2.5rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="section-header" style="margin-bottom:0.75rem;"><div><div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "EU–CHINA–VIETNAM TRILINGUAL LOGISTICS STUDIO · 中欧越三语国际物流工作台" : "Studio Xuất Nhập Khẩu &amp; Logistics Châu Âu – Trung Quốc (Tam ngữ Anh · Trung · Việt)") + '</div><h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? "Keep Business English Sharp for European Firms + Negotiate Cleanly in Chinese" : "Làm việc Chuẩn Tiếng Anh tại Công ty Châu Âu + Giao tiếp Thẳng Với Xưởng Trung Quốc") + '</h2></div></div>' +
      '  <div class="tabs-bar" style="margin-bottom:1rem;">' +
      [
        { id: "terms", lbl: (enM ? "100 Trilingual Logistics Terms (ZH ↔ EN)" : "100 Thuật ngữ Logistics Âu–Trung (Chống quên Tiếng Anh)") },
        { id: "emails", lbl: (enM ? "8 Side-by-Side Email Pairs (Factory ZH | EU HQ EN)" : "8 Cặp Email Song hành Xưởng TQ ↔ Sếp Châu Âu") },
        { id: "interviews", lbl: (enM ? "12 EU Forwarder Interview & Ops Dialogues" : "12 Tình huống Phỏng vấn Logistics Châu Âu & Xử lý Sự cố") },
        { id: "silkroad", lbl: (enM ? "Silk Road Historic–Modern Continuum" : "Con Đường Tơ Lụa Cổ đại → Trung–Âu 2026") }
      ].map(function (t) {
        return '<button type="button" class="tab-btn ' + (trState.tab === t.id ? "active" : "") + '" data-trst-act="tab" data-val="' + t.id + '">' + t.lbl + '</button>';
      }).join("") +
      '  </div>' + body +
      '</section>'
    );
  }

  function bind() {
    if (window._cceTrStBound || typeof document === "undefined") return;
    window._cceTrStBound = true;
    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "cce-trst-search") {
        trState.query = e.target.value || "";
        var pos = e.target.selectionStart;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
        var ni = document.getElementById("cce-trst-search");
        if (ni) { ni.focus(); try { ni.setSelectionRange(pos, pos); } catch (_e) {} }
      }
    });
    document.addEventListener("click", function (e) {
      var spkEl = e.target && e.target.closest ? e.target.closest("[data-trst-speak]") : null;
      if (spkEl) {
        if (window.CCE_SPEECH && window.CCE_SPEECH.speakText) {
          window.CCE_SPEECH.speakText(spkEl.getAttribute("data-trst-speak"), spkEl.getAttribute("data-trst-lang") || "zh-CN");
        }
        return;
      }
      var el = e.target && e.target.closest ? e.target.closest("[data-trst-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-trst-act");
      if (act === "tab") trState.tab = el.getAttribute("data-val") || "terms";
      else if (act === "cat") trState.cat = el.getAttribute("data-val") || "all";
      else if (act === "recall") trState.recallMode = el.getAttribute("data-val") || "both";
      else if (act === "push-srs") {
        if (window.CCE_SRS && window.CCE_SRS.addCard) {
          window.CCE_SRS.addCard({
            id: "tr-" + el.getAttribute("data-zh"),
            hanzi: el.getAttribute("data-zh"),
            pinyin: el.getAttribute("data-py"),
            hanViet: el.getAttribute("data-vi"),
            meaningVi: el.getAttribute("data-vi") + " [" + el.getAttribute("data-en") + "]",
            meaningEn: el.getAttribute("data-en"),
            source: "EU-China Trade V4"
          });
          el.textContent = "Added";
        }
        return;
      } else if (act === "open-3d-silk") {
        if (window.CCE_3D_HUB) window.CCE_3D_HUB.setStudio("logistics");
        var mBtn = document.querySelector('[data-action="nav"][data-page="museum"]');
        if (mBtn) mBtn.click();
        return;
      }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_TRILINGUAL_STUDIO = { renderStudio: renderStudio };
})();
