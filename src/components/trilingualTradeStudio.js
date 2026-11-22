// ============================================================================
// CHINESE CULTURE EXPLORER — EU–China–Vietnam Trilingual Trade & Silk Road Studio
// 1. Anti-English-Attrition ZH <-> EN Bridge & 100 EU Logistics Terms
// 2. 12 Multi-Turn European Logistics Interviews + 8 Factory ZH <-> EU HQ EN Emails
// 3. 10 Parallel Trilingual Articles (ZH | Pinyin | EN | VI) + Silk Road Continuum
// ============================================================================

(function () {
  "use strict";

  var trState = {
    tab: "terms", // "terms" | "emails" | "interviews" | "articles" | "silkroad" | "cases24"
    cat: "all",
    caseLane: "all",
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

  var TRADE_IMGS = [
    "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "assets/images/articles/hero-supply-chain-rcep.jpg",
    "assets/images/editorial/infographic-co-forme-incoterms.svg",
    "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "assets/images/articles/hero-vietnam-ai-decree13.jpg",
    "assets/images/articles/hero-contemporary-china.jpg",
    "assets/images/provinces/shanghai-bund-skyline.jpg",
    "assets/images/provinces/guangdong-canton-tower.jpg"
  ];

  var SILK_IMGS = [
    "assets/images/articles/hero-silk-road.jpg",
    "assets/images/museum/tang-sancai-camel.jpg",
    "assets/images/museum/zheng-he-chart.jpg",
    "assets/images/editorial/map-silk-road-maritime-nodes.svg",
    "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "assets/images/provinces/fujian-tulou.jpg"
  ];

  function renderTrstThumb(src, caption) {
    if (!src) return "";
    var isSvg = /\.svg(\?|$)/i.test(src);
    var fitStyle = isSvg
      ? "width:100%;height:100%;object-fit:contain;padding:0.25rem;display:block;"
      : "width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;";
    return (
      '<div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:145px;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.5rem;background:var(--bg-surface);cursor:pointer;" data-action="open-custom-image" data-src="' + esc(src) + '" data-caption="' + esc(caption || "") + '">' +
      '  <img src="' + esc(src) + '" alt="' + esc(caption || "EU-China Trade") + '" loading="lazy" decoding="async" style="' + fitStyle + '" onerror="this.onerror=null;this.src=\'assets/images/articles/hero-supply-chain-rcep.jpg\';" />' +
      '</div>'
    );
  }

  function renderStudio(enM) {
    var data = window.CCE_TRADE_TRILINGUAL_V4 || {};
    var tbRaw = window.CCE_V4_TRADE_BRIDGE || {};
    var terms = data.terms || [];
    var emails = data.emailPairs || [];
    var dialogues = data.dialogues || [];
    var parallelArticles = data.parallelArticles || tbRaw.parallelArticles10 || [];
    var silk = data.silkRoadLogisticsContinuum || [];
    var supplyCases = (window.CCE_V5_SUPPLY_CASES && window.CCE_V5_SUPPLY_CASES.cases24) || [];
    if (!terms.length && !emails.length) return "";

    var q = trState.query.trim().toLowerCase();
    var filteredTerms = terms.filter(function (t) {
      var catOk = trState.cat === "all" || t.category === trState.cat;
      var qOk = !q || (t.en + " " + t.zh + " " + t.pinyin + " " + t.vi).toLowerCase().indexOf(q) !== -1;
      return catOk && qOk;
    });

    var catDefs = [
      { id: "all", lbl: "All (" + terms.length + " Terms)" },
      { id: "incoterms", lbl: "Incoterms 2020" },
      { id: "eu_compliance", lbl: "EU Compliance: CBAM/ICS2/EUDR" },
      { id: "ocean_rail", lbl: "CR Express Rail & Ocean" },
      { id: "customs_origin", lbl: "Customs, HS & EVFTA/RCEP" },
      { id: "finance_risk", lbl: "L/C, QC & Risk Finance" }
    ];
    // Keep counts dynamic from loaded array
    catDefs.forEach(function (c) {
      if (c.id !== "all") {
        var cnt = terms.filter(function (t) { return t.category === c.id; }).length;
        if (cnt > 0) c.lbl += " (" + cnt + ")";
      }
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
        catDefs.filter(function (c) {
          return c.id === "all" || terms.some(function (t) { return t.category === c.id; });
        }).map(function (c) {
          return '<button type="button" class="filter-pill ' + (trState.cat === c.id ? "active" : "") + '" data-trst-act="cat" data-val="' + c.id + '">' + c.lbl + '</button>';
        }).join("") +
        '</div>' +
        '<div class="academic-table-wrap" style="max-height:460px;overflow:auto;">' +
        '  <table class="academic-table"><thead><tr><th>European Corporate English</th><th>Chinese Factory / Carrier (中文)</th><th>Vietnamese &amp; Ops Scope</th><th>SM-2 SRS</th></tr></thead><tbody>' +
        filteredTerms.slice(0, 100).map(function (t) {
          var enCell = trState.recallMode === "hide-en"
            ? '<details><summary style="cursor:pointer;color:var(--jade-green);font-size:0.78rem;">Reveal English ▾</summary><strong>' + esc(t.en) + '</strong></details>'
            : '<strong>' + esc(t.en) + '</strong> ' + spkBtn(t.en, "en-US");
          var zhCell = trState.recallMode === "hide-zh"
            ? '<details><summary style="cursor:pointer;color:var(--imperial-red);font-size:0.78rem;">Reveal Chinese ▾</summary><span class="hanzi">' + esc(t.zh) + '</span> (' + esc(t.pinyin) + ')</details>'
            : '<strong class="hanzi" style="font-size:1rem;">' + esc(t.zh) + '</strong> ' + spkBtn(t.zh, "zh-CN") + '<br><span class="pinyin text-xs">' + esc(t.pinyin) + '</span>';
          var note = enM ? (t.contextEn || t.contextVi) : (t.contextVi || t.contextEn);
          return '<tr><td>' + enCell + '</td><td>' + zhCell + '</td><td style="font-size:0.8rem;"><strong>' + esc(t.vi) + '</strong><br><span style="color:var(--text-muted);">' + esc(note) + '</span></td><td><button type="button" class="btn btn-secondary btn-sm" data-trst-act="push-srs" data-zh="' + esc(t.zh) + '" data-py="' + esc(t.pinyin) + '" data-vi="' + esc(t.vi) + '" data-en="' + esc(t.en) + '">+ SRS</button></td></tr>';
        }).join("") +
        '  </tbody></table>' +
        '</div>'
      );
    } else if (trState.tab === "emails") {
      body = '<div style="display:grid;gap:0.85rem;">' + emails.map(function (em, idx) {
        return (
          '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;">' +
          renderTrstThumb(TRADE_IMGS[idx % TRADE_IMGS.length], em.topic) +
          '  <strong style="color:var(--imperial-red);">' + esc(em.topic) + '</strong>' +
          (em.viSummary ? '<p style="font-size:0.8rem;color:var(--text-secondary);margin:0.25rem 0 0;">' + esc(em.viSummary) + '</p>' : "") +
          '  <div class="grid grid-2" style="gap:0.85rem;margin-top:0.55rem;">' +
          '    <div style="background:var(--bg-paper);padding:0.7rem;border:1px solid var(--hairline);font-size:0.82rem;white-space:pre-line;"><strong class="hanzi" style="color:var(--imperial-red);">Factory Side (中文邮件/微信) ' + spkBtn((em.factoryZh || "").slice(0, 140), "zh-CN") + '</strong><br>' + esc(em.factoryZh) + (em.factoryPinyin ? '<div class="pinyin text-xs" style="margin-top:0.4rem;">' + esc(em.factoryPinyin) + '</div>' : "") + '</div>' +
          '    <div style="background:var(--bg-paper);padding:0.7rem;border:1px solid var(--hairline);font-size:0.82rem;white-space:pre-line;"><strong style="color:var(--jade-green);">European HQ Side (Corporate EN) ' + spkBtn((em.euHqEn || "").slice(0, 150), "en-US") + '</strong><br>' + esc(em.euHqEn) + '</div>' +
          '  </div>' +
          '</article>'
        );
      }).join("") + '</div>';
    } else if (trState.tab === "interviews") {
      body = '<div style="display:grid;gap:0.85rem;max-height:540px;overflow:auto;">' + dialogues.map(function (d, idx) {
        if (Array.isArray(d.turns)) {
          return (
            '<article class="flashcard-layer" style="font-size:0.82rem;padding:0.95rem 1.05rem;">' +
            renderTrstThumb(TRADE_IMGS[idx % TRADE_IMGS.length], enM ? d.titleEn : d.titleVi) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.45rem;">' +
            '    <strong>' + esc(enM ? d.titleEn : d.titleVi) + '</strong>' +
            '    <span class="badge badge-jade">' + esc(d.zhScenarioTag || d.mode || "Dialogue") + '</span>' +
            '  </div>' +
            '  <div style="display:grid;gap:0.45rem;">' +
            d.turns.map(function (t) {
              return '<div style="background:var(--bg-paper);padding:0.55rem 0.7rem;border:1px solid var(--hairline);">' +
                '<div style="font-size:0.76rem;color:var(--imperial-red);font-weight:700;">' + esc(t.speakerEn) + ' · <span class="hanzi">' + esc(t.speakerZh) + '</span> ' + spkBtn(t.zh, "zh-CN") + ' ' + spkBtn(t.en, "en-US") + '</div>' +
                '<div class="hanzi" style="font-size:0.92rem;margin:0.15rem 0;">' + esc(t.zh) + '</div>' +
                '<div class="pinyin text-xs">' + esc(t.pinyin) + '</div>' +
                '<div style="color:var(--jade-green);margin-top:0.2rem;"><strong>EN:</strong> ' + esc(t.en) + '</div>' +
                '<div style="color:var(--text-secondary);"><strong>VI:</strong> ' + esc(t.vi) + '</div>' +
              '</div>';
            }).join("") +
            '  </div>' +
            '</article>'
          );
        }
        return (
          '<div class="flashcard-layer" style="font-size:0.82rem;">' +
          renderTrstThumb(TRADE_IMGS[idx % TRADE_IMGS.length], d.role) +
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
    } else if (trState.tab === "articles") {
      body = '<div style="display:grid;gap:0.95rem;max-height:560px;overflow:auto;">' + parallelArticles.map(function (pa, idx) {
        return (
          '<article class="card" style="padding:1rem 1.15rem;">' +
          renderTrstThumb(TRADE_IMGS[idx % TRADE_IMGS.length], enM ? pa.titleEn : pa.titleVi) +
          '  <span class="badge badge-gold">' + esc(pa.domain) + '</span>' +
          '  <h4 style="margin:0.3rem 0;">' + esc(enM ? pa.titleEn : pa.titleVi) + ' — <span class="hanzi" style="color:var(--imperial-red);">' + esc(pa.titleZh) + '</span></h4>' +
          (pa.paragraphs || []).map(function (pg) {
            return (
              '<div class="flashcard-layer" style="margin-bottom:0.5rem;font-size:0.82rem;">' +
              '  <div style="display:flex;justify-content:space-between;gap:0.4rem;"><span class="hanzi" style="font-size:0.92rem;color:var(--ink-primary);">' + esc(pg.zh) + '</span>' + spkBtn(pg.zh, "zh-CN") + '</div>' +
              '  <div class="pinyin text-xs" style="margin:0.2rem 0;">' + esc(pg.pinyin) + '</div>' +
              '  <div style="color:var(--jade-green);margin-bottom:0.2rem;"><strong>EN:</strong> ' + esc(pg.en) + ' ' + spkBtn(pg.en, "en-US") + '</div>' +
              '  <div style="color:var(--text-secondary);"><strong>VI:</strong> ' + esc(pg.vi) + '</div>' +
              '</div>'
            );
          }).join("") +
          (pa.drillPromptEn ? '<div style="font-size:0.78rem;color:var(--imperial-red);"><strong>Anti-Attrition Drill (EN):</strong> ' + esc(pa.drillPromptEn) + '<br><strong>ZH Drill:</strong> <span class="hanzi">' + esc(pa.drillPromptZh || "") + '</span></div>' : "") +
          '</article>'
        );
      }).join("") + '</div>';
    } else if (trState.tab === "cases24") {
      var lanes = ["all", "CR Express Rail", "Yantian-Rotterdam Ocean", "Ningbo-Hamburg FCL", "Huunghi-Haiphong Hybrid", "EU CBAM Steel/Alu", "EUDR Traceability"];
      var visCases = supplyCases.filter(function (sc) {
        var laneOk = trState.caseLane === "all" || sc.lane === trState.caseLane;
        var qOk = !q || (sc.titleVi + " " + sc.titleEn + " " + sc.scenarioZh + " " + sc.riskIdentifiedEn + " " + sc.actionPlanVi).toLowerCase().indexOf(q) !== -1;
        return laneOk && qOk;
      });
      body = (
        '<div class="filter-bar" style="margin-bottom:0.85rem;">' +
        lanes.map(function (ln) {
          var cnt = ln === "all" ? supplyCases.length : supplyCases.filter(function (x) { return x.lane === ln; }).length;
          return '<button type="button" class="filter-pill ' + (trState.caseLane === ln ? "active" : "") + '" data-trst-act="case-lane" data-val="' + esc(ln) + '" style="font-size:0.74rem;">' + (ln === "all" ? (enM ? "All Lanes (" + cnt + ")" : "Tất cả Tuyến (" + cnt + ")") : esc(ln) + " (" + cnt + ")") + '</button>';
        }).join("") +
        '</div>' +
        '<div style="display:grid;gap:0.95rem;max-height:640px;overflow:auto;">' +
        visCases.map(function (sc, idx) {
          var sTitle = enM ? sc.titleEn : sc.titleVi;
          var docs = Array.isArray(sc.documentChecklist) ? sc.documentChecklist : [];
          var kTerms = Array.isArray(sc.keyTermsZhEn) ? sc.keyTermsZhEn : [];
          var rep = sc.bilingualReplyTemplate || null;
          return (
            '<article class="card" style="padding:1rem 1.15rem;border-top:2px solid var(--jade-green);">' +
            renderTrstThumb(TRADE_IMGS[idx % TRADE_IMGS.length], sTitle) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.3rem;">' +
            '    <span class="badge badge-jade">' + esc(sc.lane) + '</span>' +
            '    <span>' + spkBtn((sc.scenarioZh || "").split("(")[0].slice(0, 120), "zh-CN") + ' ' + spkBtn(sc.riskIdentifiedEn || "", "en-US") + '</span>' +
            '  </div>' +
            '  <h4 style="margin:0.15rem 0 0.4rem;">' + esc(sTitle) + '</h4>' +
            '  <div class="callout-editorial" style="margin:0 0 0.45rem;padding:0.5rem 0.7rem;font-size:0.82rem;">' +
            '    <strong class="hanzi" style="color:var(--imperial-red);">Factory / Terminal Dispatch:</strong> ' + esc(sc.scenarioZh) +
            '  </div>' +
            '  <p style="font-size:0.81rem;margin:0 0 0.35rem;color:var(--imperial-red);"><strong>' + (enM ? "Operational &amp; Cost Risk (EN):" : "Rủi ro Điều hành &amp; Chi phí (EU HQ English):") + '</strong> ' + esc(sc.riskIdentifiedEn) + '</p>' +
            '  <p style="font-size:0.81rem;margin:0 0 0.4rem;"><strong>' + (enM ? "Action Plan (SOP):" : "Quy trình Xử lý Thực chiến:") + '</strong> ' + esc(sc.actionPlanVi) + '</p>' +
            (sc.incotermsAndLiabilityVi ? '<div style="font-size:0.79rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);margin-bottom:0.4rem;"><strong>Incoterms 2020 &amp; Liability:</strong> ' + esc(enM ? (sc.incotermsAndLiabilityEn || sc.incotermsAndLiabilityVi) : sc.incotermsAndLiabilityVi) + (sc.financialImpactRangeEur ? '<div style="margin-top:0.25rem;color:var(--imperial-red);"><strong>' + (enM ? "Exposure Benchmark:" : "Biên độ Rủi ro Chi phí:") + '</strong> ' + esc(sc.financialImpactRangeEur) + '</div>' : "") + '</div>' : "") +
            (docs.length ? '<div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.45rem;">' + docs.map(function (d) { return '<span class="badge badge-outline" style="font-size:0.71rem;">✓ ' + esc(d) + '</span>'; }).join("") + '</div>' : "") +
            (kTerms.length ? '<div style="display:flex;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.45rem;">' + kTerms.map(function (kt) {
              var parts = String(kt.zh || "").split("(");
              var zhPure = parts[0].trim();
              var pyPure = parts[1] ? parts[1].replace(")", "").trim() : "";
              return '<span style="display:inline-flex;align-items:center;gap:0.3rem;padding:0.2rem 0.45rem;background:var(--bg-accent-soft);border:1px solid var(--hairline);font-size:0.75rem;"><strong class="hanzi">' + esc(zhPure) + '</strong> · ' + esc(enM ? kt.en : kt.vi) + ' <button type="button" class="btn btn-ghost btn-sm" style="padding:0 0.25rem;font-size:0.68rem;" data-trst-act="push-srs" data-zh="' + esc(zhPure) + '" data-py="' + esc(pyPure) + '" data-vi="' + esc(kt.vi) + '" data-en="' + esc(kt.en) + '">+ SRS</button></span>';
            }).join("") + '</div>' : "") +
            (rep || sc.stepByStepSOPVi || sc.clauseDraftingTemplateEn ? (
              '  <details class="ed-details" style="font-size:0.78rem;">' +
              '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "24h-7d Action SOP, Contract Clause &amp; Reply Templates →" : "SOP Xử lý T+0h→7d, Điều khoản Hợp đồng &amp; Mẫu Phản hồi WeChat/Email →") + '</summary>' +
              '    <div style="margin-top:0.45rem;display:grid;gap:0.45rem;">' +
              (sc.stepByStepSOPVi ? '<div style="padding:0.45rem 0.6rem;background:var(--bg-surface);border:1px solid var(--hairline);"><strong>' + (enM ? "Timestamped Escalation SOP:" : "Chuỗi Phản ứng Từng Giờ (SOP):") + '</strong> ' + esc(enM ? (sc.stepByStepSOPEn || sc.stepByStepSOPVi) : sc.stepByStepSOPVi) + '</div>' : "") +
              (sc.clauseDraftingTemplateEn ? '<div style="padding:0.45rem 0.6rem;background:var(--bg-paper);border-left:3px solid var(--imperial-red);"><strong>' + (enM ? "Contract Clause (EN / 中文):" : "Điều khoản Hợp đồng Mẫu (EN / 中文):") + '</strong> <div style="margin-top:0.2rem;">' + esc(sc.clauseDraftingTemplateEn) + '</div>' + (sc.clauseDraftingTemplateZh ? '<div class="hanzi" style="color:var(--imperial-red);margin-top:0.2rem;">' + esc(sc.clauseDraftingTemplateZh) + ' ' + spkBtn(sc.clauseDraftingTemplateZh, "zh-CN") + '</div>' : "") + '</div>' : "") +
              (rep ? (
                '      <div class="grid grid-2" style="gap:0.55rem;">' +
                '        <div style="padding:0.45rem 0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);"><strong style="color:var(--imperial-red);">To Factory (中文):</strong> ' + spkBtn(rep.toFactoryZh, "zh-CN") + '<div class="hanzi" style="margin-top:0.2rem;">' + esc(rep.toFactoryZh) + '</div></div>' +
                '        <div style="padding:0.45rem 0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);"><strong style="color:var(--jade-green);">To EU HQ (EN):</strong> ' + spkBtn(rep.toEuHqEn, "en-US") + '<div style="margin-top:0.2rem;">' + esc(rep.toEuHqEn) + '</div></div>' +
                '      </div>'
              ) : "") +
              '    </div>' +
              '  </details>'
            ) : "") +
            '</article>'
          );
        }).join("") +
        '</div>'
      );
    } else {
      body = (
        '<div style="margin-bottom:0.85rem;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">' +
        '  <p style="margin:0;font-size:0.85rem;max-width:70ch;">' + (enM ? "Tracing how ancient Silk Road overland/maritime hubs evolved directly into today's CR Express (中欧班列) and EU container trade lanes:" : "Đối chiếu tính kế thừa trực tiếp từ mạng lưới Con đường Tơ lụa Cổ đại đến tuyến Đường sắt Trung–Âu (中欧班列) và Hàng hải Châu Âu 2026:") + '</p>' +
        '  <button type="button" class="btn btn-primary btn-sm" data-trst-act="open-3d-silk">' + (enM ? "Open 3-Mode Silk Road 3D Studio →" : "Mở Bản đồ 3D Tơ Lụa ↔ Trung–Âu →") + '</button>' +
        '</div>' +
        '<div class="grid grid-3" style="gap:0.85rem;">' +
        silk.map(function (s, idx) {
          return '<div class="card">' + renderTrstThumb(SILK_IMGS[idx % SILK_IMGS.length], s.eraHub) + '<strong style="color:var(--imperial-red);">' + esc(s.eraHub) + '</strong><p style="font-size:0.81rem;margin:0.4rem 0;"><strong>Cổ đại:</strong> ' + esc(s.ancientRoleVi) + '</p><p style="font-size:0.81rem;margin:0;color:var(--jade-green);"><strong>Hiện đại 2026:</strong> ' + esc(enM ? s.modernRoleEn : s.modernRoleVi) + '</p></div>';
        }).join("") +
        '</div>'
      );
    }

    return (
      '<section id="cce-trilingual-trade-studio" class="card mb-2" style="margin-top:2.5rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="section-header" style="margin-bottom:0.75rem;"><div><div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "EU–CHINA–VIETNAM TRILINGUAL LOGISTICS STUDIO · 中欧越三语国际物流工作台" : "Studio Xuất Nhập Khẩu &amp; Logistics Châu Âu – Trung Quốc (Tam ngữ Anh · Trung · Việt)") + '</div><h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? "Keep Business English Sharp for European Firms + Negotiate Cleanly in Chinese" : "Làm việc Chuẩn Tiếng Anh tại Công ty Châu Âu + Giao tiếp Thẳng Với Xưởng Trung Quốc") + '</h2></div></div>' +
      '  <div class="tabs-bar" style="margin-bottom:1rem;">' +
      [
        { id: "terms", lbl: (enM ? (terms.length + " Trilingual Terms (ZH ↔ EN)") : (terms.length + " Thuật ngữ Logistics (Chống quên Anh)")) },
        { id: "emails", lbl: (enM ? (emails.length + " Email Pairs (Factory ZH | EU EN)") : (emails.length + " Cặp Email Xưởng TQ ↔ Sếp Âu")) },
        { id: "interviews", lbl: (enM ? (dialogues.length + " EU Dialogues & Interviews") : (dialogues.length + " Tình huống Hội thoại Âu–Trung")) },
        { id: "articles", lbl: (enM ? (parallelArticles.length + " Parallel Articles (ZH–EN–VI)") : (parallelArticles.length + " Bài Đọc Song hành Tam ngữ")) },
        { id: "cases24", lbl: (enM ? (supplyCases.length + " EU–China Incident Cases") : (supplyCases.length + " Case Sự cố Logistics Âu–Trung")) },
        { id: "silkroad", lbl: (enM ? "Silk Road Historic–Modern 2026" : "Đường Tơ Lụa → Trung–Âu 2026") }
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
      else if (act === "case-lane") trState.caseLane = el.getAttribute("data-val") || "all";
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
