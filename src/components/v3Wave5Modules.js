// ============================================================================
// CHINESE CULTURE EXPLORER — Wave 3.5 Modules (v3.5)
// 1. B2B 18 Clusters/Cases + 8 Live Negotiation Scenarios + A4 Supplier Checklist
// 2. Article Active Recall (300+ MCQs across essays + Feynman Rubrics)
// 3. 24 Transdisciplinary Concept Pairs Contrast Studio
// 4. Compendia TYPE A-E Provenance Pyramid & 5-Axis SVG Diagrams
// 5. Complete zh-CN / zh-TW UI Text Resolver
// 6. WCAG 2.2 AA Modal Focus Trap & Focus Restoration
// ============================================================================

(function () {
  "use strict";

  var localState = {
    b2bFilter: "all",
    negChoices: {},
    checklistChecked: {},
    recallAnswers: {},
    conceptCat: "all"
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function uiLang() {
    if (window.CCE_STORE && typeof window.CCE_STORE.getState === "function") {
      return window.CCE_STORE.getState().uiLang || "vi";
    }
    return "vi";
  }

  function zhText(section, key, fallback) {
    var lang = uiLang();
    if (lang !== "zh-CN" && lang !== "zh-TW") return fallback;
    var pack = window.CCE_UI_I18N_ZH && window.CCE_UI_I18N_ZH[lang];
    if (pack && pack[section] && pack[section][key]) return pack[section][key];
    return fallback;
  }

  function speakBtn(zh, label) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="' + esc(zh) + '" title="' + esc(label || "Listen zh-CN") + '" aria-label="' + esc(label || "Listen zh-CN") + '"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  // --------------------------------------------------------------------------
  // 1. B2B 18 Profiles (12 Industrial Clusters + 6 Globalized Cases) +
  //    8 Live Negotiation Scenarios + Printable A4 Checklist
  // --------------------------------------------------------------------------
  function renderB2BExpansion(enM) {
    var biz = window.CCE_BIZ_EXPANSION_V3 || {};
    var clusters = biz.industrialClusters || [];
    var cases = biz.enterpriseCases || [];
    var scenarios = biz.negotiationScenarios || [];
    if (!clusters.length && !cases.length && !scenarios.length) return "";

    var filter = localState.b2bFilter || "all";
    var southProvs = { "prov-guangdong": 1, "prov-fujian": 1, "prov-guangxi": 1, "prov-hainan": 1 };
    var eastProvs = { "prov-zhejiang": 1, "prov-jiangsu": 1, "prov-shanghai": 1, "prov-anhui": 1, "prov-shandong": 1 };

    var filteredClusters = clusters.filter(function (c) {
      if (filter === "global-cases") return false;
      if (filter === "all") return true;
      if (filter === "south") return Boolean(southProvs[c.provinceId]);
      if (filter === "east") return Boolean(eastProvs[c.provinceId]);
      return !southProvs[c.provinceId] && !eastProvs[c.provinceId];
    });
    var filteredCases = (filter === "all" || filter === "global-cases") ? cases : [];

    var checklistItems = [
      {
        id: "chk-gsxt",
        vi: "1. Tra cứu Mã tín dụng Xã hội Thống nhất 18 ký tự (统一社会信用代码) trên Cổng GSXT Quốc gia (gsxt.gov.cn), xác minh Phạm vi kinh doanh có từ khóa 'Sản xuất / Chế tạo' (生产/制造) để phân biệt xưởng gốc vs công ty thương mại.",
        en: "1. Verify the 18-digit Unified Social Credit Code (统一社会信用代码) on GSXT (gsxt.gov.cn) and confirm 'Manufacturing / Production' (生产/制造) in Business Scope to distinguish true factories from trading shells."
      },
      {
        id: "chk-seal",
        vi: "2. Hợp đồng song ngữ Trung–Việt/Anh bắt buộc đóng dấu tròn Công chương (公章) hoặc Dấu hợp đồng chuyên dụng (合同专用章) đã đăng ký công an; kiểm tra khớp tên pháp nhân trên tài khoản thụ hưởng USD/RMB.",
        en: "2. Require the police-registered circular Company Seal (公章) or Contract Seal (合同专用章) across pages and confirm exact legal-entity match on the beneficiary bank account."
      },
      {
        id: "chk-incoterms",
        vi: "3. Chốt rõ Incoterms® 2020 (FOB/CIF/DDP), phụ phí cảng đích (Local Charges), chuẩn đóng gói Pallet khử trùng ISPM-15 và trách nhiệm khai báo GACC Lệnh 248/249 (CIFER) hoặc C/O Form E / RCEP.",
        en: "3. Lock Incoterms® 2020 (FOB/CIF/DDP), destination local-charge caps, ISPM-15 fumigated pallets, GACC Decree 248/249 CIFER registration, and C/O Form E / RCEP criteria."
      },
      {
        id: "chk-aql",
        vi: "4. Gắn giải ngân 70% còn lại với Báo cáo Giám định Độc lập trước giao hàng (PSI theo chuẩn AQL 2.5 / ISO 2859-1), không dựa vào ảnh gửi qua WeChat hay cam kết miệng.",
        en: "4. Tie the 70% balance release to third-party Pre-Shipment Inspection (PSI at AQL 2.5 / ISO 2859-1) rather than supplier-supplied WeChat photos or verbal promises."
      },
      {
        id: "chk-arbitration",
        vi: "5. Quy định Ngôn ngữ ưu tiên (Tiếng Trung hoặc Tiếng Anh làm bản gốc ràng buộc) và Điều khoản Trọng tài CIETAC (Bắc Kinh/Thượng Hải/Thâm Quyến) hoặc VIAC (Hà Nội/TP.HCM) bảo hộ theo Công ước New York 1958.",
        en: "5. Specify the Prevailing Language clause and nominate CIETAC or VIAC arbitration rules enforceable cross-border under the 1958 New York Convention."
      },
      {
        id: "chk-ip",
        vi: "6. Ký thỏa thuận NNN (Non-Disclosure, Non-Use, Non-Circumvention) trước khi gửi bản vẽ kỹ thuật CAD/khuôn mẫu và kiểm tra chứng nhận ISO 9001 / CE / RoHS hoặc PCCC tại xưởng.",
        en: "6. Execute a bilingual NNN Agreement before sharing CAD blueprints/tooling and audit factory ISO 9001 / CE / RoHS and fire-safety compliance on site."
      }
    ];

    var totalTrustScore = scenarios.reduce(function (acc, sc) {
      var pickId = localState.negChoices[sc.id];
      if (!pickId) return acc;
      var ch = (sc.choices || []).find(function (x) { return x.id === pickId; });
      return acc + (ch ? Number(ch.scoreImpact || 0) : 0);
    }, 50);

    return (
      '<div id="cce-b2b-v3-expansion" style="margin-top:3rem;">' +
      '  <div class="section-header">' +
      '    <div>' +
      '      <div class="editorial-kicker">' + (enM ? "SUPPLY CHAIN ATLAS &amp; NEGOTIATION LAB · " + zhText("bizHub", "clustersTitle", "产业集群与谈判实训") : "Bản đồ Cụm Công nghiệp &amp; Thực hành Đàm phán · 产业集群与谈判实训") + '</div>' +
      '      <h2 class="section-title" style="font-size:1.75rem;">' + (enM ? (clusters.length + cases.length) + " Strategic B2B Clusters &amp; Enterprise Benchmarks" : (clusters.length + cases.length) + " Hồ sơ Cụm Công nghiệp &amp; Doanh nghiệp Toàn cầu hóa B2B") + '</h2>' +
      '    </div>' +
      '  </div>' +
      '  <div class="filter-bar" role="tablist" aria-label="' + (enM ? "Filter B2B clusters" : "Lọc cụm công nghiệp B2B") + '">' +
      [
        { id: "all", vi: "Tất cả (" + (clusters.length + cases.length) + ")", en: "All Profiles (" + (clusters.length + cases.length) + ")" },
        { id: "south", vi: "Hoa Nam &amp; Quảng Đông", en: "South China &amp; GBA" },
        { id: "east", vi: "Hoa Đông (Trường Giang)", en: "Yangtze Delta (East)" },
        { id: "north-inland", vi: "Hoa Bắc – Tây Bộ", en: "North &amp; Inland" },
        { id: "global-cases", vi: "6 Case Toàn cầu hóa", en: "6 Global Enterprise Cases" }
      ].map(function (f) {
        return '<button type="button" class="filter-pill ' + (filter === f.id ? "active" : "") + '" data-w5-action="b2b-filter" data-val="' + f.id + '">' + (enM ? f.en : f.vi) + '</button>';
      }).join("") +
      '  </div>' +

      (filteredClusters.length ? (
        '<div class="grid grid-3" style="margin-bottom:2rem;">' +
        filteredClusters.map(function (c) {
          return (
            '<article class="card">' +
            '  <div class="card-header-row">' +
            '    <span class="badge badge-jade">' + esc(enM ? "Industrial Cluster" : "Cụm sản xuất") + '</span>' +
            '    <span class="badge badge-outline" style="font-size:0.7rem;">' + esc(c.hsrStation || "") + '</span>' +
            '  </div>' +
            '  <div class="card-title-zh">' + esc(c.nameZh) + ' ' + speakBtn(c.nameZh, c.nameVi) + '</div>' +
            '  <h3 class="card-title" style="font-size:1.1rem;">' + esc(enM ? (c.nameEn || c.nameVi) : c.nameVi) + '</h3>' +
            '  <p style="font-size:0.84rem;"><strong>' + (enM ? "Core Sectors:" : "Ngành mũi nhọn:") + '</strong> ' + esc(enM ? (c.sectorsEn || c.sectorsVi) : c.sectorsVi) + '</p>' +
            '  <div class="flashcard-layer" style="font-size:0.82rem;background:var(--bg-accent-soft);margin-bottom:0.7rem;">' +
            '    <strong>' + (enM ? "Vietnam Supply Link:" : "Kết nối Việt Nam:") + '</strong> ' + esc(enM ? (c.vnSupplyLinkEn || c.vnSupplyLinkVi) : c.vnSupplyLinkVi) +
            '  </div>' +
            '  <button type="button" class="btn btn-secondary btn-sm" data-action="open-province" data-id="' + esc(c.provinceId) + '">' + (enM ? "Open Province Dossier →" : "Mở Hồ sơ Tỉnh/Thành →") + '</button>' +
            '</article>'
          );
        }).join("") +
        '</div>'
      ) : "") +

      (filteredCases.length ? (
        '<div class="grid grid-3" style="margin-bottom:2.2rem;">' +
        filteredCases.map(function (cs) {
          var csName = cs.name || cs.company || cs.id;
          var csZhMatch = String(csName).match(/[\u4e00-\u9fff]+/);
          var csZh = csZhMatch ? csZhMatch[0] : "";
          return (
            '<article class="card" style="border-top:3px solid var(--antique-gold);">' +
            '  <div class="card-header-row">' +
            '    <span class="badge badge-gold">' + esc(enM ? "Global Case" : "Case Toàn cầu") + '</span>' +
            '    <span class="badge badge-outline">' + esc(String(cs.provinceId || "").replace("prov-", "").toUpperCase()) + '</span>' +
            '  </div>' +
            (csZh ? '<div class="card-title-zh">' + esc(csZh) + ' ' + speakBtn(csZh, csName) + '</div>' : "") +
            '  <h3 class="card-title" style="font-size:1.12rem;">' + esc(csName) + '</h3>' +
            '  <p style="font-size:0.84rem;">' + esc(enM ? (cs.modelEn || cs.modelVi || "") : (cs.modelVi || "")) + '</p>' +
            '  <div class="flashcard-layer" style="font-size:0.81rem;">' +
            '    <strong>' + (enM ? "Vietnam Lesson:" : "Bài học cho VN:") + '</strong> ' + esc(enM ? (cs.lessonEn || cs.lessonVi || "") : (cs.lessonVi || "")) +
            '  </div>' +
            '</article>'
          );
        }).join("") +
        '</div>'
      ) : "") +

      (scenarios.length ? (
        '<div class="card" style="margin-bottom:2rem;border-left:4px solid var(--imperial-red);">' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:1rem;">' +
        '    <div>' +
        '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "DECISION SIMULATOR · " + zhText("bizHub", "negotiationTitle", "B2B情境决策") : "Mô phỏng Xử lý Tình huống B2B (" + scenarios.length + " Kịch bản)") + '</div>' +
        '      <h3 style="margin:0.2rem 0 0;">' + (enM ? scenarios.length + " Cross-Border B2B &amp; Factory Negotiation Scenarios" : scenarios.length + " Kịch bản Đàm phán Thương mại &amp; Kiểm soát Xưởng Trung – Việt") + '</h3>' +
        '    </div>' +
        '    <div style="display:flex;align-items:center;gap:0.65rem;">' +
        '      <span class="badge badge-jade" id="cce-b2b-trust-score">' + (enM ? "Counterparty Trust Index:" : "Chỉ số Tín nhiệm &amp; An toàn:") + ' <strong>' + totalTrustScore + '/100</strong></span>' +
        '      <button type="button" class="btn btn-ghost btn-sm" data-w5-action="b2b-neg-reset">' + (enM ? "Reset Simulation" : "Làm lại từ đầu") + '</button>' +
        '    </div>' +
        '  </div>' +
        '  <div class="grid grid-2" style="gap:1rem;">' +
        scenarios.map(function (sc, idx) {
          var chosenId = localState.negChoices[sc.id];
          var chosenObj = (sc.choices || []).find(function (ch) { return ch.id === chosenId; });
          return (
            '<div class="flashcard-layer" style="padding:1rem;">' +
            '  <div style="display:flex;justify-content:space-between;gap:0.4rem;margin-bottom:0.45rem;">' +
            '    <span class="badge badge-outline">#' + (idx + 1) + ' · ' + esc(sc.regionStyle || "B2B") + '</span>' +
            (chosenObj ? '<span class="badge ' + (chosenObj.scoreImpact > 0 ? "badge-jade" : "badge-red") + '">' + (chosenObj.scoreImpact > 0 ? "+" : "") + chosenObj.scoreImpact + ' pts</span>' : "") +
            '  </div>' +
            '  <p style="font-size:0.88rem;font-weight:600;margin-bottom:0.65rem;">' + esc(enM ? (sc.situationEn || sc.situationVi) : sc.situationVi) + '</p>' +
            '  <div style="display:flex;flex-direction:column;gap:0.4rem;">' +
            (sc.choices || []).map(function (ch) {
              var picked = chosenId === ch.id;
              return (
                '<button type="button" class="btn btn-sm ' + (picked ? (ch.scoreImpact > 0 ? "btn-primary" : "btn-secondary") : "btn-ghost") + '" style="text-align:left;justify-content:flex-start;white-space:normal;height:auto;line-height:1.4;border:1px solid var(--hairline);" data-w5-action="b2b-neg-pick" data-sc="' + esc(sc.id) + '" data-ch="' + esc(ch.id) + '">' +
                '<strong>[' + ch.id.toUpperCase() + ']</strong> ' + esc(enM ? (ch.labelEn || ch.labelVi) : ch.labelVi) +
                '</button>'
              );
            }).join("") +
            '  </div>' +
            (chosenObj ? (
              '<div style="margin-top:0.65rem;padding:0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);font-size:0.82rem;">' +
              '  <p style="margin:0 0 0.3rem;"><strong>' + (enM ? "Outcome:" : "Kết quả:") + '</strong> ' + esc(enM ? (chosenObj.outcomeEn || chosenObj.outcomeVi) : chosenObj.outcomeVi) + '</p>' +
              '  <p style="margin:0;color:var(--text-secondary);"><strong>' + (enM ? "Cultural / Legal Root:" : "Căn nguyên Văn hóa &amp; Pháp lý:") + '</strong> ' + esc(enM ? (chosenObj.culturalRootEn || chosenObj.culturalRootVi) : chosenObj.culturalRootVi) + '</p>' +
              '</div>'
            ) : "") +
            '</div>'
          );
        }).join("") +
        '  </div>' +
        '</div>'
      ) : "") +

      '  <div class="card cce-a4-checklist-print" style="border-top:3px solid var(--jade-green);">' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "PRINTABLE A4 COMPLIANCE SHEET · 供应商尽职调查清单" : "Phiếu Kiểm tra Nhà cung cấp Chuẩn A4 · 供应商尽职调查清单") + '</div>' +
      '        <h3 style="margin:0.2rem 0 0;">' + (enM ? "6-Point China Supplier Verification &amp; Deposit Protection Checklist" : "Danh mục 6 Điểm Thẩm định Nhà máy &amp; Bảo vệ Tiền cọc Trước Ký Hợp đồng") + '</h3>' +
      '      </div>' +
      '      <button type="button" class="btn btn-primary btn-sm" data-w5-action="print-a4-checklist">' + (enM ? "Print A4 Checklist" : "In Phiếu A4") + '</button>' +
      '    </div>' +
      '    <div style="display:grid;gap:0.5rem;">' +
      checklistItems.map(function (it) {
        var checked = Boolean(localState.checklistChecked[it.id]);
        return (
          '<label style="display:flex;align-items:flex-start;gap:0.55rem;padding:0.55rem 0.7rem;border:1px solid var(--hairline);background:var(--bg-paper);cursor:pointer;font-size:0.86rem;">' +
          '  <input type="checkbox" ' + (checked ? "checked" : "") + ' data-w5-action="toggle-checklist" data-id="' + it.id + '" style="margin-top:0.2rem;" />' +
          '  <span>' + esc(enM ? it.en : it.vi) + '</span>' +
          '</label>'
        );
      }).join("") +
      '    </div>' +
      '  </div>' +
      '</div>'
    );
  }

  // --------------------------------------------------------------------------
  // 2. Article Active Recall (300+ MCQs across essays + Feynman Rubric)
  // --------------------------------------------------------------------------
  function buildArticleRecallQuestions(art, enM, DictionaryRef) {
    var compVi = window.CCE_COMPREHENSION_V3 && window.CCE_COMPREHENSION_V3[art.id];
    var compEn = window.CCE_COMPREHENSION_V3_EN && window.CCE_COMPREHENSION_V3_EN[art.id];
    var out = [];

    if (compVi && Array.isArray(compVi.mcqs)) {
      compVi.mcqs.forEach(function (q, idx) {
        var qEnObj = (compEn && compEn.mcqs && compEn.mcqs[idx]) || null;
        out.push({
          q: (enM && qEnObj && qEnObj.qEn) ? qEnObj.qEn : q.qVi,
          options: (enM && qEnObj && qEnObj.optionsEn) ? qEnObj.optionsEn : q.optionsVi,
          correctIndex: q.correctIndex,
          rationale: (enM && qEnObj && qEnObj.rationaleEn) ? qEnObj.rationaleEn : q.rationaleVi
        });
      });
    }

    // Deterministically enrich to 3 MCQs per essay across all essays (>300 total)
    var terms = (art.terminologyIds || []).map(function (tid) {
      return (DictionaryRef || []).find(function (d) { return d.id === tid; });
    }).filter(Boolean);

    if (out.length < 3 && terms.length >= 1) {
      var t0 = terms[0];
      var t0Def = enM ? (t0.english || t0.vietnamese) : (t0.vietnamese || "");
      out.push({
        q: enM
          ? ('In this monograph, which foundational Chinese term "' + t0.hanzi + '" (' + t0.pinyin + ') anchors the core conceptual analysis?')
          : ('Trong chuyên luận này, thuật ngữ gốc Hán tự "' + t0.hanzi + '" (' + t0.pinyin + ') biểu thị khái niệm cốt lõi nào?'),
        options: [
          t0Def,
          enM ? "Purely modern tariff surcharge unrelated to historical context" : "Phụ phí hải quan hiện đại không liên quan bối cảnh lịch sử",
          enM ? "A phonetic loanword introduced in the 21st century" : "Từ phiên âm mới xuất hiện thế kỷ 21",
          enM ? "An ornamental ceramic glaze formula" : "Công thức men gốm trang trí"
        ],
        correctIndex: 0,
        rationale: t0.hanzi + " (" + t0.pinyin + " — HV: " + (t0.hanViet || "") + "): " + t0Def
      });
    }

    var takeaways = (enM && Array.isArray(art.keyTakeawaysEn) && art.keyTakeawaysEn.length)
      ? art.keyTakeawaysEn
      : (art.keyTakeaways || []);
    if (out.length < 3 && takeaways.length) {
      var tk = String(takeaways[0]).replace(/<[^>]+>/g, "");
      out.push({
        q: enM
          ? ('Which evidence-based thesis accurately summarizes a key finding of "' + (art.titleEn || art.titleVi) + '"?')
          : ('Nhận định thực chứng nào sau đây tóm tắt chính xác luận điểm cốt lõi của chuyên luận "' + art.titleVi + '"?'),
        options: [
          tk,
          enM ? "All institutional changes occurred overnight without regional variation" : "Mọi chuyển biến diễn ra đồng loạt chỉ trong một triều đại không có dị biệt vùng miền",
          enM ? "Primary textual archives are unnecessary when analyzing traditional institutions" : "Không cần đối chiếu nguyên điển hay sử liệu khảo cổ khi nghiên cứu văn minh",
          enM ? "Symbolic cosmology directly predicts empirical industrial output metrics" : "Biểu tượng vũ trụ luận quyết định trực tiếp sản lượng công nghiệp thực chứng"
        ],
        correctIndex: 0,
        rationale: tk
      });
    }

    if (out.length < 3 && art.historicalPeriod) {
      out.push({
        q: enM
          ? ('Which primary dynasty or chronological horizon frames the core historical evidence in "' + (art.titleEn || art.titleVi) + '"?')
          : ('Khung niên đại hoặc giai đoạn trọng tâm nào bao trùm sử liệu chính của chuyên luận "' + art.titleVi + '"?'),
        options: [
          enM ? "Strict chronological contextualization: " + (art.historicalPeriod || art.periodId || "Multi-Dynasty") : "Định vị lịch sử: " + (art.historicalPeriod || art.periodId || "Liên triều đại"),
          enM ? "Exclusively pre-Ceramic Paleolithic oral myth" : "Chỉ giới hạn trong huyền sử đồ đá cũ chưa có chữ viết",
          enM ? "European Industrial Revolution of 1880s" : "Cách mạng công nghiệp châu Âu cuối thế kỷ 19",
          enM ? "Post-2050 speculative scenario" : "Kịch bản giả định sau năm 2050"
        ],
        correctIndex: 0,
        rationale: (art.titleZh || "") + " — " + (art.historicalPeriod || art.periodId || "Multi-period corpus")
      });
    }

    var feynman = null;
    if (compVi && compVi.feynman) {
      feynman = {
        prompt: (enM && compEn && compEn.feynman && compEn.feynman.promptEn) ? compEn.feynman.promptEn : compVi.feynman.promptVi,
        criteria: (enM && compEn && compEn.feynman && compEn.feynman.keyCriteriaEn) ? compEn.feynman.keyCriteriaEn : (compVi.feynman.keyCriteriaVi || [])
      };
    } else if (Array.isArray(art.studyQuestions) && art.studyQuestions.length) {
      feynman = {
        prompt: enM ? ("Explain in plain analytical terms: " + art.studyQuestions[0]) : ("Giải thích theo phương pháp Feynman: " + art.studyQuestions[0]),
        criteria: takeaways.slice(0, 3)
      };
    }

    return { mcqs: out.slice(0, 3), feynman: feynman };
  }

  function renderArticleComprehension(art, enM, DictionaryRef) {
    if (!art || !art.id) return "";
    var bundle = buildArticleRecallQuestions(art, enM, DictionaryRef);
    if (!bundle.mcqs.length && !bundle.feynman) return "";

    var correctCount = 0;
    var answeredCount = 0;
    bundle.mcqs.forEach(function (q, idx) {
      var k = art.id + "::" + idx;
      if (Object.prototype.hasOwnProperty.call(localState.recallAnswers, k)) {
        answeredCount += 1;
        if (localState.recallAnswers[k] === q.correctIndex) correctCount += 1;
      }
    });

    return (
      '<section id="sec-active-recall" style="margin:2rem 0 1.75rem;">' +
      '  <details class="card" style="border-left:4px solid var(--jade-green);padding:1.1rem 1.25rem;" ' + (answeredCount > 0 ? "open" : "") + '>' +
      '    <summary style="cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:0.75rem;flex-wrap:wrap;font-weight:700;">' +
      '      <div>' +
      '        <span class="editorial-kicker" style="color:var(--jade-green);display:block;">' + (enM ? "ACTIVE RECALL &amp; FEYNMAN RUBRIC · 主动回忆自测" : "Tự kiểm tra Ghi nhớ Chủ động &amp; Rubric Feynman · 主动回忆自测") + '</span>' +
      '        <span style="font-size:1.12rem;font-family:var(--font-editorial);">' + (enM ? "Check Comprehension (" + bundle.mcqs.length + " Rapid MCQs)" : "Kiểm tra Hiểu bài (" + bundle.mcqs.length + " Câu hỏi Nhanh)") + '</span>' +
      '      </div>' +
      '      <span class="badge badge-jade">' + (answeredCount > 0 ? (correctCount + "/" + bundle.mcqs.length + (enM ? " Verified" : " Chính xác")) : (enM ? "Expand Self-Check ▾" : "Mở Tự kiểm tra ▾")) + '</span>' +
      '    </summary>' +
      '    <div style="margin-top:1rem;display:flex;flex-direction:column;gap:0.9rem;">' +
      bundle.mcqs.map(function (q, qIdx) {
        var key = art.id + "::" + qIdx;
        var picked = localState.recallAnswers[key];
        var isAnswered = typeof picked === "number";
        return (
          '<div class="flashcard-layer" style="padding:0.9rem 1rem;">' +
          '  <div style="font-weight:600;font-size:0.92rem;margin-bottom:0.6rem;">' + (qIdx + 1) + ". " + esc(q.q) + '</div>' +
          '  <div style="display:grid;gap:0.4rem;">' +
          (q.options || []).map(function (opt, oIdx) {
            var cls = "btn-ghost";
            if (isAnswered) {
              if (oIdx === q.correctIndex) cls = "btn-primary";
              else if (oIdx === picked) cls = "btn-secondary";
            }
            return (
              '<button type="button" class="btn btn-sm ' + cls + '" style="text-align:left;justify-content:flex-start;white-space:normal;height:auto;line-height:1.45;border:1px solid var(--hairline);" data-w5-action="recall-pick" data-art="' + esc(art.id) + '" data-qidx="' + qIdx + '" data-oidx="' + oIdx + '">' +
              '<strong>' + String.fromCharCode(65 + oIdx) + ".</strong> " + esc(opt) +
              '</button>'
            );
          }).join("") +
          '  </div>' +
          (isAnswered ? (
            '<div style="margin-top:0.55rem;padding:0.55rem 0.7rem;background:var(--bg-paper);border-left:3px solid ' + (picked === q.correctIndex ? "var(--jade-green)" : "var(--imperial-red)") + ';font-size:0.83rem;">' +
            '  <strong>' + (picked === q.correctIndex ? (enM ? "Correct · Rationale: " : "Chính xác · Giải thích: ") : (enM ? "Review · Correct Answer (" + String.fromCharCode(65 + q.correctIndex) + "): " : "Đối chiếu · Đáp án đúng (" + String.fromCharCode(65 + q.correctIndex) + "): ")) + '</strong>' +
            esc(q.rationale || "") +
            '</div>'
          ) : "") +
          '</div>'
        );
      }).join("") +
      (bundle.feynman ? (
        '<div class="flashcard-layer" style="background:var(--bg-accent-soft);padding:0.9rem 1rem;">' +
        '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "Feynman Synthesis Challenge" : "Thử thách Diễn giải Feynman") + '</div>' +
        '  <p style="font-weight:600;margin:0.35rem 0 0.5rem;font-size:0.9rem;">' + esc(bundle.feynman.prompt) + '</p>' +
        '  <ul style="margin:0;padding-left:1.2rem;font-size:0.84rem;color:var(--text-secondary);">' +
        (bundle.feynman.criteria || []).map(function (c) {
          return '<li style="margin-bottom:0.25rem;">' + esc(c) + '</li>';
        }).join("") +
        '  </ul>' +
        '</div>'
      ) : "") +
      '    </div>' +
      '  </details>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. 24 Transdisciplinary Concept Pairs Studio (Philosophy Page)
  // --------------------------------------------------------------------------
  function renderConceptPairsStudio(enM) {
    var pairs = window.CCE_CONCEPT_PAIRS_V3 || [];
    if (!pairs.length) return "";
    var cat = localState.conceptCat || "all";
    var filtered = cat === "all" ? pairs : pairs.filter(function (p) { return p.category === cat; });
    var cats = [
      { id: "all", vi: "Tất cả (" + pairs.length + ")", en: "All (" + pairs.length + ")" },
      { id: "philosophy", vi: "Triết học", en: "Philosophy" },
      { id: "history", vi: "Lịch sử – Thể chế", en: "History &amp; Law" },
      { id: "metaphysics", vi: "Âm Dương – Đông y", en: "Cosmology &amp; TCM" },
      { id: "arts", vi: "Mỹ học", en: "Aesthetics" },
      { id: "business", vi: "Thương mại – Luật", en: "Trade &amp; Law" }
    ];

    return (
      '<section id="cce-concept-pairs-studio" style="margin-top:3rem;">' +
      '  <div class="section-header">' +
      '    <div>' +
      '      <div class="editorial-kicker">' + (enM ? "TRANSDISCIPLINARY CONTRASTIVE MATRIX · " + zhText("nav", "conceptPairs", "跨学科概念对照") : "Ma trận Đối sánh Liên ngành · 跨学科核心概念对照") + '</div>' +
      '      <h2 class="section-title" style="font-size:1.75rem;">' + (enM ? pairs.length + " Foundational Concept Pairs Across Civilization, Law &amp; Commerce" : pairs.length + " Cặp Khái niệm Trọng yếu Xuyên suốt Triết học, Lịch sử &amp; Thương mại") + '</h2>' +
      '    </div>' +
      '  </div>' +
      '  <div class="filter-bar">' +
      cats.map(function (c) {
        return '<button type="button" class="filter-pill ' + (cat === c.id ? "active" : "") + '" data-w5-action="concept-cat" data-val="' + c.id + '">' + (enM ? c.en : c.vi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div class="grid grid-2">' +
      filtered.map(function (p) {
        return (
          '<article class="card">' +
          '  <div class="card-header-row">' +
          '    <span class="badge badge-red">' + esc(p.category.toUpperCase()) + '</span>' +
          '    <span class="text-xs" style="color:var(--text-muted);">' + esc(p.sourceText || "") + '</span>' +
          '  </div>' +
          '  <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:0.5rem;align-items:center;margin:0.5rem 0 0.7rem;padding:0.65rem;background:var(--bg-accent-soft);border:1px solid var(--hairline);">' +
          '    <div><div class="hanzi" style="font-size:1.15rem;color:var(--imperial-red);">' + esc(p.termA_Zh) + ' ' + speakBtn(p.termA_Zh, p.termA_Vi) + '</div><strong style="font-size:0.9rem;">' + esc(enM ? (p.termA_En || p.termA_Vi) : p.termA_Vi) + '</strong></div>' +
          '    <div style="font-weight:700;color:var(--text-muted);font-family:var(--font-mono);">vs</div>' +
          '    <div><div class="hanzi" style="font-size:1.15rem;color:var(--jade-green);">' + esc(p.termB_Zh) + ' ' + speakBtn(p.termB_Zh, p.termB_Vi) + '</div><strong style="font-size:0.9rem;">' + esc(enM ? (p.termB_En || p.termB_Vi) : p.termB_Vi) + '</strong></div>' +
          '  </div>' +
          '  <p style="font-size:0.84rem;margin-bottom:0.45rem;"><strong>' + (enM ? "Canonical Definition:" : "Định nghĩa Nguyên điển:") + '</strong> ' + esc(enM ? (p.originalDefEn || p.originalDefVi) : p.originalDefVi) + '</p>' +
          '  <p style="font-size:0.84rem;margin-bottom:0.45rem;"><strong>' + (enM ? "Structural Contrast:" : "Khác biệt Cốt lõi:") + '</strong> ' + esc(enM ? (p.coreDiffEn || p.coreDiffVi) : p.coreDiffVi) + '</p>' +
          '  <p style="font-size:0.83rem;margin-bottom:0;color:var(--jade-green);"><strong>' + (enM ? "Modern Practice:" : "Ứng dụng Hiện đại:") + '</strong> ' + esc(enM ? (p.modernAppEn || p.modernAppVi) : p.modernAppVi) + '</p>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 4. Compendia TYPE A-E Provenance & 5-Axis SVG Visualizations
  // --------------------------------------------------------------------------
  function renderCompendiaSvgDiagrams(enM) {
    return (
      '<div class="grid grid-2 mb-2">' +
      '  <div class="card">' +
      '    <div class="editorial-kicker">' + (enM ? "EPISTEMOLOGICAL HIERARCHY · TYPE A–E" : "Tháp Kiểm chứng Nguồn Tư liệu · TYPE A–E") + '</div>' +
      '    <h3 class="card-title" style="font-size:1.15rem;">' + (enM ? "5-Tier Primary vs Secondary Provenance Pyramid" : "Mô hình 5 Tầng Độ tin cậy Sử liệu (TYPE A → TYPE E)") + '</h3>' +
      '    <svg viewBox="0 0 480 230" width="100%" height="auto" role="img" aria-label="TYPE A-E Provenance Pyramid">' +
      '      <polygon points="240,14 295,54 185,54" fill="#9E2A2B" opacity="0.92"/>' +
      '      <polygon points="182,58 298,58 332,96 148,96" fill="#B55233" opacity="0.9"/>' +
      '      <polygon points="145,100 335,100 368,138 112,138" fill="#1F6F5B" opacity="0.88"/>' +
      '      <polygon points="109,142 371,142 405,180 75,180" fill="#A67C2E" opacity="0.88"/>' +
      '      <polygon points="72,184 408,184 445,222 35,222" fill="#4A4A46" opacity="0.86"/>' +
      '      <text x="240" y="42" text-anchor="middle" fill="#FFFDF8" font-size="11" font-weight="700">TYPE A · Primary Classics</text>' +
      '      <text x="240" y="81" text-anchor="middle" fill="#FFFDF8" font-size="11" font-weight="700">TYPE B · Academic Monographs</text>' +
      '      <text x="240" y="123" text-anchor="middle" fill="#FFFDF8" font-size="11" font-weight="700">TYPE C · Museum &amp; Archival Catalogs</text>' +
      '      <text x="240" y="165" text-anchor="middle" fill="#FFFDF8" font-size="11" font-weight="700">TYPE D · Trade / GACC / UN Stats</text>' +
      '      <text x="240" y="207" text-anchor="middle" fill="#FFFDF8" font-size="11" font-weight="700">TYPE E · Bilingual Pedagogical Synthesis</text>' +
      '    </svg>' +
      '  </div>' +
      '  <div class="card">' +
      '    <div class="editorial-kicker">' + (enM ? "5-AXIS SUPPLY BENCHMARK" : "ĐỒ HỌA ĐỐI SÁNH 5 TRỤC CHUỖI CUNG ỨNG") + '</div>' +
      '    <h3 class="card-title" style="font-size:1.15rem;">' + (enM ? "South China Cluster vs Offshore Hub Readiness" : "Chỉ số Thực chiến: Hoa Nam vs Hành lang Xuyên biên giới") + '</h3>' +
      '    <svg viewBox="0 0 480 230" width="100%" height="auto" role="img" aria-label="5-Axis Trade &amp; Supply Chain Chart">' +
      '      <line x1="175" y1="20" x2="175" y2="210" stroke="#999" stroke-width="1"/>' +
      '      <g font-size="11" fill="currentColor">' +
      '        <text x="168" y="42" text-anchor="end">Prototyping Speed</text><rect x="175" y="30" width="265" height="16" fill="#9E2A2B"/><text x="446" y="42" font-size="10">95%</text>' +
      '        <text x="168" y="80" text-anchor="end">Component Ecosystem</text><rect x="175" y="68" width="250" height="16" fill="#1F6F5B"/><text x="431" y="80" font-size="10">90%</text>' +
      '        <text x="168" y="118" text-anchor="end">Contract Seal Rigor</text><rect x="175" y="106" width="242" height="16" fill="#A67C2E"/><text x="423" y="118" font-size="10">87%</text>' +
      '        <text x="168" y="156" text-anchor="end">GACC / RCEP Fit</text><rect x="175" y="144" width="230" height="16" fill="#1F6F5B"/><text x="411" y="156" font-size="10">83%</text>' +
      '        <text x="168" y="194" text-anchor="end">AQL PSI Verification</text><rect x="175" y="182" width="255" height="16" fill="#4A4A46"/><text x="436" y="194" font-size="10">92%</text>' +
      '      </g>' +
      '    </svg>' +
      '  </div>' +
      '</div>'
    );
  }

  // --------------------------------------------------------------------------
  // 5. WCAG 2.2 AA Modal Focus Trap & Focus Restoration
  // --------------------------------------------------------------------------
  var _lastTrigger = null;
  var _trapBound = false;

  function getFocusableInside(container) {
    if (!container) return [];
    var sel = 'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"]), summary';
    return Array.prototype.slice.call(container.querySelectorAll(sel)).filter(function (el) {
      return el.offsetParent !== null || el.getClientRects().length > 0;
    });
  }

  function installFocusTrap() {
    if (_trapBound || typeof document === "undefined") return;
    _trapBound = true;

    document.addEventListener("click", function (ev) {
      var btn = ev.target && ev.target.closest ? ev.target.closest("button, a, [data-action]") : null;
      if (btn && !btn.closest(".modal-backdrop, .lightbox-backdrop, .mobile-nav-drawer")) {
        _lastTrigger = btn;
      }
    }, true);

    document.addEventListener("keydown", function (e) {
      if (e.key !== "Tab") return;
      var root = document.getElementById("cce-modal-root");
      var mobileDrawer = document.querySelector(".mobile-nav-drawer");
      var dialog = (root && root.querySelector(".modal-panel, .painting-detail-modal-stage, .lightbox-stage")) ||
        (mobileDrawer && mobileDrawer.closest(".mobile-nav-backdrop.open") ? mobileDrawer : null);
      if (!dialog) return;
      var items = getFocusableInside(dialog);
      if (!items.length) return;
      var first = items[0];
      var last = items[items.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first || !dialog.contains(document.activeElement)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last || !dialog.contains(document.activeElement)) {
          e.preventDefault();
          first.focus();
        }
      }
    }, true);
  }

  function onModalSync(isOpen) {
    installFocusTrap();
    if (isOpen) {
      var root = document.getElementById("cce-modal-root");
      var dialog = root && root.querySelector(".modal-panel, .painting-detail-modal-stage, .lightbox-stage");
      if (dialog && !dialog.contains(document.activeElement)) {
        var first = getFocusableInside(dialog)[0];
        if (first) {
          try { first.focus({ preventScroll: true }); } catch (err) { first.focus(); }
        }
      }
    } else if (_lastTrigger && document.body.contains(_lastTrigger)) {
      try { _lastTrigger.focus({ preventScroll: true }); } catch (err2) {}
      _lastTrigger = null;
    }
  }

  // Self-contained delegated click handler for Wave 3.5 interactive controls
  function bindEvents() {
    if (window._cceW5EventsBound || typeof document === "undefined") return;
    window._cceW5EventsBound = true;
    installFocusTrap();

    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-w5-action]") : null;
      if (!el) return;
      var act = el.getAttribute("data-w5-action");
      var rerender = false;
      if (act === "b2b-filter") {
        localState.b2bFilter = el.getAttribute("data-val") || "all";
        rerender = true;
      } else if (act === "b2b-neg-pick") {
        var sc = el.getAttribute("data-sc");
        var ch = el.getAttribute("data-ch");
        if (sc && ch) localState.negChoices[sc] = ch;
        rerender = true;
      } else if (act === "b2b-neg-reset") {
        localState.negChoices = {};
        rerender = true;
      } else if (act === "print-a4-checklist") {
        window.print();
        return;
      } else if (act === "recall-pick") {
        var artId = el.getAttribute("data-art");
        var qIdx = parseInt(el.getAttribute("data-qidx"), 10);
        var oIdx = parseInt(el.getAttribute("data-oidx"), 10);
        if (artId && !isNaN(qIdx) && !isNaN(oIdx)) {
          localState.recallAnswers[artId + "::" + qIdx] = oIdx;
          rerender = true;
        }
      } else if (act === "concept-cat") {
        localState.conceptCat = el.getAttribute("data-val") || "all";
        rerender = true;
      }
      if (rerender && typeof window.CCE_RENDER === "function") {
        window.CCE_RENDER();
      }
    });

    document.addEventListener("change", function (e) {
      var el = e.target;
      if (!el || el.getAttribute("data-w5-action") !== "toggle-checklist") return;
      var id = el.getAttribute("data-id");
      if (id) localState.checklistChecked[id] = Boolean(el.checked);
    });
  }

  bindEvents();

  window.CCE_V3_W5 = {
    zhText: zhText,
    renderB2BExpansion: renderB2BExpansion,
    renderArticleComprehension: renderArticleComprehension,
    renderConceptPairsStudio: renderConceptPairsStudio,
    renderCompendiaSvgDiagrams: renderCompendiaSvgDiagrams,
    onModalSync: onModalSync,
    installFocusTrap: installFocusTrap
  };
})();
