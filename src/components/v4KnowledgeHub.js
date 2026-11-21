// ============================================================================
// CHINESE CULTURE EXPLORER V4.0 — Specialized Knowledge & Study Hub
// Tabs: Politics & Macro 2026 | HSK 4-9 Canons & 60 Idioms |
// Dong Y & Yin-Yang-Wuxing 5x4 Matrix | Du Hoc CSC/C9/UIBE | Cuisines & VN View
// ============================================================================

(function () {
  "use strict";

  var st = {
    tab: "hsk", // "politics" | "hsk" | "tcm-wuxing" | "study" | "culture-vn"
    hskLevel: "all"
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function spk(zh) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="' + esc(zh) + '" title="Listen zh-CN"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function renderHub(enM) {
    var disc = window.CCE_V4_DISCIPLINES || {};
    var lit = window.CCE_LITERATURE_HSK_V4 || {};
    var sci = window.CCE_SCIENCE_TCM_FOOD_V4 || {};
    var vn = window.CCE_SINO_VIET_MODERN_V4 || {};
    var unesco = window.CCE_UNESCO_V4 || [];

    var tabs = [
      { id: "hsk", vi: "Tác phẩm & 60 HSK 4–9", en: "HSK 4–9 & Literary Canons" },
      { id: "tcm-wuxing", vi: "Đông y & Âm Dương Ngũ Hành", en: "TCM & Yin–Yang–Wuxing" },
      { id: "study", vi: "Du học Trung Quốc (CSC/UIBE)", en: "Study Abroad & Scholarships" },
      { id: "politics", vi: "Chính trị & Kinh tế 2026", en: "Politics & Macro 2026" },
      { id: "culture-vn", vi: "8 Thái hệ, Góc nhìn VN & UNESCO", en: "Cuisines, VN View & UNESCO" }
    ];

    var body = "";
    if (st.tab === "politics") {
      var pe = disc.politicsEcon2026 || [];
      body = '<div class="grid grid-2" style="gap:0.85rem;">' + pe.map(function (p) {
        return '<article class="card"><div class="card-title-zh">' + esc(p.zh) + ' ' + spk(p.zh) + '</div><h4 style="margin:0.2rem 0 0.45rem;">' + esc(enM ? p.titleEn : p.titleVi) + '</h4><p style="font-size:0.85rem;margin:0;color:var(--text-secondary);">' + esc(enM ? p.summaryEn : p.summaryVi) + '</p></article>';
      }).join("") + '</div>';
    } else if (st.tab === "hsk") {
      var canons = lit.canons || [];
      var briefs = (lit.hskBriefs || []).filter(function (b) { return st.hskLevel === "all" || String(b.hsk) === String(st.hskLevel); });
      body = (
        '<div class="grid grid-3" style="gap:0.75rem;margin-bottom:1.25rem;">' +
        canons.map(function (c) {
          return '<article class="card"><span class="badge badge-gold">' + esc(c.hskTag) + '</span><div class="card-title-zh" style="margin-top:0.35rem;">' + esc(c.zh) + ' ' + spk(c.zh) + '</div><h4 style="margin:0.15rem 0 0.4rem;">' + esc(enM ? c.titleEn : c.titleVi) + '</h4><p style="font-size:0.82rem;margin:0 0 0.4rem;">' + esc(enM ? c.coreThemeEn : c.coreThemeVi) + '</p><div style="font-size:0.77rem;color:var(--jade-green);">' + esc(c.hskVocabVi) + '</div></article>';
        }).join("") +
        '</div>' +
        '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;"><strong>' + (enM ? "60 Exam-Ready HSK 4–9 Idioms & Keywords:" : "60 Điển cố & Từ khóa Văn hóa Luyện thi HSK 4–9:") + '</strong><div class="filter-bar" style="margin:0;">' +
        ["all", "4", "5", "6", "7", "8", "9"].map(function (lv) {
          return '<button type="button" class="filter-pill ' + (st.hskLevel === lv ? "active" : "") + '" data-v4h-act="hsk" data-val="' + lv + '" style="font-size:0.74rem;">' + (lv === "all" ? "All (60)" : "HSK " + lv) + '</button>';
        }).join("") +
        '</div></div>' +
        '<div class="grid grid-3" style="gap:0.6rem;max-height:420px;overflow:auto;">' +
        briefs.map(function (b) {
          return '<div class="flashcard-layer" style="font-size:0.81rem;"><div style="display:flex;justify-content:space-between;"><span class="badge badge-outline">HSK ' + b.hsk + '</span><button type="button" class="btn btn-ghost btn-sm" style="padding:0 0.3rem;font-size:0.72rem;" data-v4h-act="add-srs" data-zh="' + esc(b.zh) + '" data-py="' + esc(b.pinyin) + '" data-hv="' + esc(b.hanViet) + '" data-vi="' + esc(b.vi) + '" data-en="' + esc(b.en) + '">+ SRS</button></div><strong class="hanzi" style="font-size:1.1rem;color:var(--imperial-red);">' + esc(b.zh) + '</strong> ' + spk(b.zh) + ' <span class="pinyin">' + esc(b.pinyin) + '</span><br><strong>' + esc(b.hanViet) + ':</strong> ' + esc(b.vi) + '<div style="color:var(--text-muted);font-size:0.76rem;">EN: ' + esc(b.en) + '</div></div>';
        }).join("") +
        '</div>'
      );
    } else if (st.tab === "tcm-wuxing") {
      var yw = disc.yinYangWuxing || {};
      var tcm = sci.tcmFoundations || {};
      body = (
        '<div class="epistemic-box critical" style="margin-bottom:1rem;"><div class="epistemic-title">' + (enM ? "Strict Epistemological Boundary (Non-Clinical & Non-Predictive)" : "Khung Ranh giới Khoa học: Khảo cứu Văn hóa – Lịch sử (Không Lâm sàng & Không Tiên tri)") + '</div><p style="margin:0 0 0.35rem;font-size:0.84rem;">' + esc(enM ? yw.epistemicBannerEn : yw.epistemicBannerVi) + '</p><p style="margin:0;font-size:0.81rem;color:var(--text-secondary);">' + esc(enM ? tcm.disclaimerEn : tcm.disclaimerVi) + '</p></div>' +
        '<div style="margin-bottom:1rem;display:flex;justify-content:flex-end;"><button type="button" class="btn btn-primary btn-sm" data-v4h-act="open-armillary-3d">' + (enM ? "Launch Interactive 3D Brass Armillary & Wuxing Disk →" : "Mở Mô hình 3D Hồn Thiên Nghi & Đĩa Âm Dương – Ngũ Hành →") + '</button></div>' +
        '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1.15rem;">' +
        (yw.monographs || []).map(function (m) {
          return '<article class="card"><div class="card-title-zh">' + esc(m.zh) + '</div><h4 style="margin:0.2rem 0 0.4rem;">' + esc(enM ? m.titleEn : m.titleVi) + '</h4><p style="font-size:0.83rem;margin:0;color:var(--text-secondary);">' + esc(m.bodyVi) + '</p></article>';
        }).join("") +
        '</div>' +
        '<div class="academic-table-wrap mb-2"><table class="academic-table"><thead><tr><th>Ngũ Hành (Five Phase)</th><th>Mùa &amp; Phương</th><th>Đông y (中医)</th><th>Phong thủy (风水)</th><th>Bát Tự (八字)</th><th>Tử Vi Đẩu Số (紫微)</th></tr></thead><tbody>' +
        (yw.matrix5x4 || []).map(function (row) {
          return '<tr><td><strong>' + esc(row.phase) + '</strong></td><td>' + esc(row.seasonDir) + '</td><td>' + esc(row.tcm) + '</td><td>' + esc(row.fengshui) + '</td><td>' + esc(row.bazi) + '</td><td>' + esc(row.ziwei) + '</td></tr>';
        }).join("") +
        '</tbody></table></div>' +
        '<div class="grid grid-3" style="gap:0.75rem;">' +
        (tcm.classics || []).map(function (cl) {
          return '<div class="flashcard-layer"><strong class="hanzi">' + esc(cl.zh) + '</strong><br><strong>' + esc(enM ? cl.en : cl.vi) + '</strong><p style="font-size:0.8rem;margin:0.3rem 0 0;">' + esc(enM ? cl.noteEn : cl.noteVi) + '</p></div>';
        }).join("") +
        '</div>'
      );
    } else if (st.tab === "study") {
      var stAb = disc.studyAbroad || {};
      body = (
        '<div class="grid grid-3" style="gap:0.75rem;margin-bottom:1rem;">' +
        (stAb.scholarships || []).map(function (s) {
          return '<div class="card"><span class="badge badge-jade">Scholarship</span><h4 style="margin:0.35rem 0;">' + esc(s.name) + '</h4><p style="font-size:0.82rem;margin:0;">' + esc(enM ? s.targetEn : s.targetVi) + '</p></div>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1rem;">' +
        (stAb.universities || []).map(function (u) {
          return '<div class="flashcard-layer"><span class="badge badge-outline">' + esc(u.tier) + '</span><div class="card-title-zh" style="margin-top:0.25rem;">' + esc(u.zh) + '</div><strong>' + esc(enM ? u.en : u.vi) + '</strong><p style="font-size:0.81rem;margin:0.25rem 0 0;">' + esc(enM ? u.strengthEn : u.strengthVi) + '</p></div>';
        }).join("") +
        '</div>' +
        '<div class="card"><h4 style="margin:0 0 0.5rem;">' + esc((stAb.studyPlanTemplateEnZh && stAb.studyPlanTemplateEnZh.titleVi) || "Study Plan (EN | ZH)") + '</h4>' +
        ((stAb.studyPlanTemplateEnZh && stAb.studyPlanTemplateEnZh.sections) || []).map(function (sec) {
          return '<div class="flashcard-layer" style="margin-bottom:0.45rem;font-size:0.82rem;"><strong>' + esc(sec.headEn) + '</strong><br><span class="hanzi" style="color:var(--imperial-red);">' + esc(sec.zh) + '</span><br>' + esc(sec.tipVi) + '</div>';
        }).join("") +
        (stAb.interviewQa || []).map(function (qa) {
          return '<div class="flashcard-layer" style="background:var(--bg-accent-soft);margin-bottom:0.45rem;font-size:0.81rem;"><strong>Q (EN):</strong> ' + esc(qa.qEn) + '<br><strong class="hanzi">Q (ZH):</strong> ' + esc(qa.qZh) + '<br><strong>Gợi ý trả lời:</strong> ' + esc(qa.aTipVi) + '</div>';
        }).join("") +
        '</div>'
      );
    } else {
      var cuis = sci.eightCuisines || [];
      var pers = vn.perspectives || [];
      body = (
        '<h4 style="margin:0 0 0.6rem;">' + (enM ? "Vietnamese Analytical Perspectives on China" : "Góc nhìn Phân tích Từ Việt Nam Về Trung Quốc") + '</h4>' +
        '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1.15rem;">' +
        pers.map(function (p) {
          return '<div class="card"><div class="card-title-zh">' + esc(p.zh) + '</div><strong>' + esc(enM ? p.titleEn : p.titleVi) + '</strong><p style="font-size:0.82rem;margin:0.3rem 0 0;color:var(--text-secondary);">' + esc(enM ? p.summaryEn : p.summaryVi) + '</p></div>';
        }).join("") +
        '</div>' +
        '<h4 style="margin:0 0 0.6rem;">' + (enM ? "Eight Great Chinese Culinary Traditions (八大菜系)" : "Ẩm thực Bát Đại Thái Hệ (八大菜系)") + '</h4>' +
        '<div class="grid grid-4" style="gap:0.65rem;margin-bottom:1.15rem;">' +
        cuis.map(function (c) {
          return '<div class="flashcard-layer" style="font-size:0.8rem;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(c.zh) + '</strong> ' + spk(c.zh) + ' · <strong>' + esc(enM ? c.en : c.vi) + '</strong><br>' + esc(enM ? c.techEn : c.techVi) + '<br><span style="color:var(--jade-green);">' + esc(c.sigVi) + '</span></div>';
        }).join("") +
        '</div>' +
        '<h4 style="margin:0 0 0.6rem;">' + (enM ? "16 UNESCO Heritage & Intangible Sites" : "16 Di sản Thế giới & Phi vật thể UNESCO") + '</h4>' +
        '<div class="grid grid-4" style="gap:0.6rem;">' +
        unesco.map(function (u) {
          return '<div class="flashcard-layer" style="font-size:0.79rem;"><span class="badge badge-outline">' + u.year + ' · ' + esc(u.kind) + '</span><br><strong>' + esc(enM ? u.en : u.vi) + '</strong> (<span class="hanzi">' + esc(u.zh) + '</span>)<br>' + esc(enM ? u.noteEn : u.noteVi) + '</div>';
        }).join("") +
        '</div>'
      );
    }

    return (
      '<section id="cce-v4-knowledge-hub" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--imperial-red);">' +
      '  <div class="section-header" style="margin-bottom:0.75rem;"><div><div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "SPECIALIZED KNOWLEDGE &amp; STUDY HUB · 专题学术与实务研习中心" : "Chuyên đề Tổng hợp: Chính trị, HSK 4–9, Đông y, Ngũ Hành &amp; Du học · 专题研习中心") + '</div><h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? "Politics, HSK Classics, TCM &amp; Yin–Yang–Wuxing Monograph Hub" : "Trung tâm Nghiên cứu Chính trị, HSK Danh tác, Đông y – Ngũ Hành &amp; Du học") + '</h2></div></div>' +
      '  <div class="tabs-bar" style="margin-bottom:1rem;">' +
      tabs.map(function (t) {
        return '<button type="button" class="tab-btn ' + (st.tab === t.id ? "active" : "") + '" data-v4h-act="tab" data-val="' + t.id + '">' + (enM ? t.en : t.vi) + '</button>';
      }).join("") +
      '  </div>' + body +
      '</section>'
    );
  }

  function bind() {
    if (window._cceV4HubBound || typeof document === "undefined") return;
    window._cceV4HubBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v4h-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v4h-act");
      if (act === "tab") st.tab = el.getAttribute("data-val") || "hsk";
      else if (act === "hsk") st.hskLevel = el.getAttribute("data-val") || "all";
      else if (act === "add-srs") {
        if (window.CCE_SRS && window.CCE_SRS.addCard) {
          window.CCE_SRS.addCard({
            id: "v4-" + el.getAttribute("data-zh"),
            hanzi: el.getAttribute("data-zh"),
            pinyin: el.getAttribute("data-py"),
            hanViet: el.getAttribute("data-hv"),
            meaningVi: el.getAttribute("data-vi"),
            meaningEn: el.getAttribute("data-en"),
            source: "HSK 4-9 V4"
          });
          el.textContent = "Saved!";
        }
        return;
      } else if (act === "open-armillary-3d") {
        if (window.CCE_3D_HUB) window.CCE_3D_HUB.setStudio("armillary");
        var mBtn = document.querySelector('[data-action="nav"][data-page="museum"]');
        if (mBtn) mBtn.click();
        return;
      }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_V4_HUB = {
    renderHub: renderHub,
    setActiveTab: function (t) { st.tab = t || "hsk"; }
  };
})();
