// ============================================================================
// CHINESE CULTURE EXPLORER v12.0 — Master Encyclopedia UI Studios
// Renders Gói 03, 06, 07, 08, 09, 10 interactively across subpages:
// - B2B ACFTA 3.0 / CIETAC–VIAC 20 Clauses + 50 Sino-Viet False Friends
// - Siku Quanshu 40 Word-by-Word Classics + 40 Classical Chinese Particles
// - 24 Han-Nom & Envoy Texts + 43 UNESCO ICH Sino-Vietnamese Dialogues
// - 90 Zhonghua Laozihao Archive + 64 Academic Yijing Hexagrams Explorer
// - Astronomy & 72 Pentads Cosmology + 24 Project-985 CSC + 120 Script Lexicon
// Pure ES5 IIFE — Zero UI emojis, zero banned AI-ese, WCAG AAA contrast.
// ============================================================================
(function () {
  "use strict";

  var st = {
    sikuTab: "jingzi", // jingzi | shiji | particles
    sikuPage: 0,
    hanNomPage: 0,
    ichPage: 0,
    ichQuery: "",
    lzhPage: 0,
    lzhQuery: "",
    lzhDomain: "all",
    yijingIdx: 0,
    yijingQuery: "",
    astroTab: "mansions", // mansions | enclosures | solar | circadian
    ffPage: 0,
    ffQuery: "",
    b2bPage: 0,
    cscPage: 0,
    cscQuery: "",
    lexPage: 0,
    lexQuery: "",
    hsrPage: 0,
    hsrQuery: "",
    bound: false,
    hydratingPacks: {},
    hydratedPacks: {}
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function hydrate(packName) {
    if (!packName || st.hydratingPacks[packName] || st.hydratedPacks[packName]) return;
    if (window.CCE_LAZY && typeof window.CCE_LAZY.ensureBundle === "function") {
      st.hydratingPacks[packName] = true;
      window.CCE_LAZY.ensureBundle(packName).then(function () {
        st.hydratingPacks[packName] = false;
        st.hydratedPacks[packName] = true;
        if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
        else if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }).catch(function () {
        st.hydratingPacks[packName] = false;
      });
    }
  }

  function speakBtn(zh, title) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-action="speak-zh" data-text="' + esc(zh) + '" title="' + esc(title || "zh-CN") + '" aria-label="' + esc(title || "zh-CN") + '"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function pagerHtml(key, page, totalItems, perPage, enM) {
    var totalPages = Math.max(1, Math.ceil(totalItems / perPage));
    var safeP = Math.max(0, Math.min(totalPages - 1, page));
    if (totalPages <= 1) return "";
    return (
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-top:0.9rem;padding-top:0.75rem;border-top:1px solid var(--hairline);">' +
      '  <span style="font-size:0.8rem;color:var(--text-muted);">' + (enM ? "Page " : "Trang ") + (safeP + 1) + " / " + totalPages + " (" + totalItems + " " + (enM ? "entries" : "mục") + ")</span>" +
      '  <div style="display:flex;gap:0.35rem;">' +
      '    <button type="button" class="btn btn-secondary btn-sm" data-v12-page-key="' + key + '" data-v12-page="' + (safeP - 1) + '"' + (safeP <= 0 ? " disabled" : "") + ">← " + (enM ? "Prev" : "Trước") + "</button>" +
      '    <button type="button" class="btn btn-primary btn-sm" data-v12-page-key="' + key + '" data-v12-page="' + (safeP + 1) + '"' + (safeP >= totalPages - 1 ? " disabled" : "") + ">" + (enM ? "Next" : "Sau") + " →</button>" +
      "  </div>" +
      "</div>"
    );
  }

  function loadingBox(id, kicker, titleVi, titleEn, enM, packName) {
    hydrate(packName);
    return (
      '<section id="' + id + '" class="card mt-2 mb-2" style="padding:1.15rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + esc(kicker) + "</div>" +
      '  <p style="margin:0.35rem 0 0;font-size:0.88rem;color:var(--text-secondary);">' + esc(enM ? titleEn : titleVi) + "</p>" +
      "</section>"
    );
  }

  /* 1. B2B ACFTA 3.0 & CIETAC-VIAC 20 Clauses + 50 Sino-Viet False Friends */
  function renderB2BClauses20(enM) {
    var data = window.CCE_V12_B2B_QUIZ;
    if (!data || !Array.isArray(data.b2bClauses20)) {
      return loadingBox("v12-b2b-clauses-20", "ACFTA 3.0 & CIETAC–VIAC CONTRACTS", "Đang tải 20 điều khoản hợp đồng thương mại Việt – Trung chuẩn pháp chế...", "Loading 20 trilingual B2B contract clauses...", enM, "v12-b2b-quiz-pack");
    }
    var list = data.b2bClauses20;
    var per = 4;
    var totalP = Math.max(1, Math.ceil(list.length / per));
    st.b2bPage = Math.max(0, Math.min(totalP - 1, st.b2bPage));
    var slice = list.slice(st.b2bPage * per, st.b2bPage * per + per);

    return (
      '<section id="v12-b2b-clauses-20" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--imperial-red);">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "TRILINGUAL LEGAL CLAUSE BANK · ACFTA 3.0 & CIETAC–VIAC" : "KHO 20 ĐIỀU KHOẢN HỢP ĐỒNG B2B TAM NGỮ · ACFTA 3.0 & CIETAC–VIAC") + "</div>" +
      '  <h3 style="margin:0.25rem 0 0.85rem;">' + (enM ? "Standard China–Vietnam Trade Contract Clauses & Risk Alerts" : "Điều khoản chuẩn hóa song ngữ Việt – Trung – Anh kèm Cảnh báo Rủi ro") + "</h3>" +
      '  <div style="display:grid;gap:0.85rem;">' +
      slice.map(function (c, i) {
        return (
          '<article class="flashcard-layer" style="margin:0;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.4rem;">' +
          '    <strong>' + ((st.b2bPage * per) + i + 1) + ". " + esc(enM ? c.topicEn : c.topicVi) + "</strong>" +
          '    <button type="button" class="btn btn-secondary btn-sm" data-v12-copy="' + esc(c.clauseZh + "\n" + c.clauseVi) + '">' + (enM ? "Copy clause" : "Sao chép điều khoản") + "</button>" +
          "  </div>" +
          '  <div class="hanzi" style="font-size:0.94rem;padding:0.55rem 0.7rem;background:var(--bg-surface);border-left:3px solid var(--imperial-red);margin-bottom:0.45rem;">' + esc(c.clauseZh) + "</div>" +
          '  <p style="margin:0 0 0.35rem;font-size:0.84rem;line-height:1.58;">' + esc(enM ? c.clauseEn : c.clauseVi) + "</p>" +
          '  <div style="font-size:0.8rem;color:var(--imperial-red);"><strong>' + (enM ? "Risk alert: " : "Cảnh báo pháp lý: ") + "</strong>" + esc(enM ? c.riskAlertEn : c.riskAlertVi) + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("b2b", st.b2bPage, list.length, per, enM) +
      "</section>"
    );
  }

  function renderFalseFriends50(enM) {
    var data = window.CCE_V12_B2B_QUIZ;
    if (!data || !Array.isArray(data.falseFriends50)) {
      return loadingBox("v12-false-friends-50", "SINO–VIETNAMESE FALSE FRIENDS (50 PAIRS)", "Đang tải 50 cặp từ đồng âm Hán–Việt dị nghĩa trong hợp đồng & giao tiếp...", "Loading 50 Sino-Vietnamese semantic false friends...", enM, "v12-b2b-quiz-pack");
    }
    var q = String(st.ffQuery || "").trim().toLowerCase();
    var filtered = data.falseFriends50.filter(function (f) {
      if (!q) return true;
      return [f.hanzi, f.pinyin, f.hanVietSurface, f.modernChineseMeaningVi, f.vietnameseMeaningVi].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 9;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.ffPage = Math.max(0, Math.min(totalP - 1, st.ffPage));
    var slice = filtered.slice(st.ffPage * per, st.ffPage * per + per);

    return (
      '<section id="v12-false-friends-50" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "LEXICAL DIVERGENCE LAB · 50 FALSE FRIENDS" : "PHÒNG CHỐNG BẪY NGỮ NGHĨA · 50 CẶP TỪ ĐỒNG HÌNH DỊ NGHĨA HÁN–VIỆT") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Same Character, Divergent Meaning in Mandarin vs. Vietnamese" : "Cùng mặt chữ Hán – Khác nghĩa hiện đại Trung vs. Việt") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="ff" value="' + esc(st.ffQuery) + '" placeholder="' + (enM ? "Filter hanzi, Hán-Việt, meaning..." : "Lọc Hán tự, âm Hán-Việt, nghĩa...") + '" style="max-width:250px;font-size:0.84rem;" />' +
      "  </div>" +
      '  <div class="grid grid-3" style="gap:0.7rem;">' +
      slice.map(function (f) {
        return (
          '<article class="flashcard-layer" style="margin:0;font-size:0.82rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;">' +
          '    <span><strong class="hanzi" style="font-size:1.15rem;color:var(--imperial-red);">' + esc(f.hanzi) + '</strong> <span class="pinyin">' + esc(f.pinyin) + "</span></span>" +
          speakBtn(f.hanzi, f.hanzi) +
          "  </div>" +
          '  <div style="font-size:0.76rem;color:var(--text-muted);margin:0.2rem 0;">Hán–Việt: <strong>' + esc(f.hanVietSurface) + "</strong></div>" +
          '  <div style="margin-bottom:0.25rem;"><strong style="color:var(--imperial-red);">CN:</strong> ' + esc(enM ? f.modernChineseMeaningEn : f.modernChineseMeaningVi) + "</div>" +
          '  <div style="margin-bottom:0.25rem;color:var(--jade-green);"><strong>VN:</strong> ' + esc(enM ? f.vietnameseMeaningEn : f.vietnameseMeaningVi) + "</div>" +
          (f.contractOrDailyExampleZh ? '<div class="hanzi" style="font-size:0.78rem;padding-top:0.3rem;border-top:1px dashed var(--hairline);color:var(--text-secondary);">' + esc(f.contractOrDailyExampleZh) + "<br>" + esc(f.contractOrDailyExampleVi || "") + "</div>" : "") +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("ff", st.ffPage, filtered.length, per, enM) +
      "</section>"
    );
  }

  /* 2. Siku Quanshu 40 Word-by-Word Classics + 40 Classical Particles */
  function renderSikuAndParticlesStudio(enM, slotId) {
    var data = window.CCE_V12_CLASSICS_HANNOM;
    if (!data) {
      return loadingBox("v12-siku-40-studio-" + slotId, "SIKU QUANSHU WORD-BY-WORD & PARTICLES", "Đang tải 40 thiên cổ văn đối chiếu từng chữ & 40 hư từ Hán văn cổ...", "Loading 40 word-by-word classics and 40 classical particles...", enM, "v12-classics-cosmology-pack");
    }
    var list = st.sikuTab === "shiji" ? (data.shiJi20 || []) : (st.sikuTab === "particles" ? (data.particles40 || []) : (data.jingZi20 || []));
    var per = st.sikuTab === "particles" ? 8 : 4;
    var totalP = Math.max(1, Math.ceil(list.length / per));
    st.sikuPage = Math.max(0, Math.min(totalP - 1, st.sikuPage));
    var slice = list.slice(st.sikuPage * per, st.sikuPage * per + per);

    return (
      '<section id="v12-siku-40-studio-' + esc(slotId) + '" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "INTERLINEAR PHILOLOGY · 40 CLASSICS & 40 PARTICLES" : "ĐỐI CHIẾU TỪNG CHỮ TỨ KHỐ & HƯ TỪ CỔ VĂN · 80 ĐƠN VỊ") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Siku Quanshu Annotated Excerpts & Classical Particle Grammar" : "Kinh – Sử – Tử – Tập (Giảng giải từng chữ) & 40 Hư từ Trọng yếu") + "</h3>" +
      "    </div>" +
      '    <div class="tabs-bar" style="margin:0;">' +
      '      <button type="button" class="tab-btn ' + (st.sikuTab === "jingzi" ? "active" : "") + '" data-v12-siku-tab="jingzi">' + (enM ? "Classics & Masters (20)" : "Kinh & Tử Bộ (20)") + "</button>" +
      '      <button type="button" class="tab-btn ' + (st.sikuTab === "shiji" ? "active" : "") + '" data-v12-siku-tab="shiji">' + (enM ? "Histories & Lit. (20)" : "Sử & Tập Bộ (20)") + "</button>" +
      '      <button type="button" class="tab-btn ' + (st.sikuTab === "particles" ? "active" : "") + '" data-v12-siku-tab="particles">' + (enM ? "Particles (40)" : "40 Hư Từ Cổ Văn") + "</button>" +
      "    </div>" +
      "  </div>" +
      (st.sikuTab === "particles" ? (
        '<div class="grid grid-2" style="gap:0.75rem;">' +
        slice.map(function (pt) {
          return (
            '<article class="flashcard-layer" style="margin:0;font-size:0.83rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.3rem;">' +
            '    <span><strong class="hanzi" style="font-size:1.3rem;color:var(--imperial-red);">' + esc(pt.particleZh) + '</strong> <span class="pinyin">' + esc(pt.pinyin) + '</span> · <span class="badge badge-gold">' + esc(pt.hanViet) + "</span></span>" +
            speakBtn(pt.exampleZh || pt.particleZh, pt.particleZh) +
            "  </div>" +
            '  <div style="margin-bottom:0.3rem;"><strong>' + (enM ? "Roles: " : "Chức năng cú pháp: ") + "</strong>" + esc((enM ? pt.syntacticRolesEn : pt.syntacticRolesVi) || "") + "</div>" +
            '  <div style="padding:0.45rem 0.6rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);margin-bottom:0.3rem;">' +
            '    <div class="hanzi">' + esc(pt.exampleZh) + "</div>" +
            '    <div class="pinyin" style="font-size:0.76rem;">' + esc(pt.examplePinyin) + " · <em>Hán-Việt:</em> " + esc(pt.exampleHanViet) + "</div>" +
            '    <div>' + esc(enM ? pt.exampleTransEn : pt.exampleTransVi) + "</div>" +
            "  </div>" +
            '  <div style="font-size:0.78rem;color:var(--text-muted);">' + esc(enM ? pt.contrastModernChineseEn : pt.contrastModernChineseVi) + "</div>" +
            "</article>"
          );
        }).join("") +
        "</div>"
      ) : (
        '<div style="display:grid;gap:0.9rem;">' +
        slice.map(function (tx) {
          var wbw = Array.isArray(tx.wordByWord) ? tx.wordByWord : [];
          return (
            '<article class="flashcard-layer" style="margin:0;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.35rem;">' +
            '    <div><span class="badge badge-gold">' + esc(tx.sikuBranch || "") + '</span> <strong style="margin-left:0.35rem;">' + esc(enM ? tx.bookTitleEn : tx.bookTitleVi) + '</strong> <span class="hanzi">' + esc(tx.bookTitleZh) + "</span> — " + esc(enM ? tx.chapterEn : tx.chapterVi) + "</div>" +
            speakBtn(tx.excerptZh, tx.bookTitleVi) +
            "  </div>" +
            '  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.4rem;">' + esc(tx.authorAndEra || "") + "</div>" +
            '  <div class="hanzi" style="font-size:1.08rem;padding:0.6rem 0.75rem;background:var(--bg-surface);border-left:3px solid var(--imperial-red);margin-bottom:0.4rem;">' + esc(tx.excerptZh) + "</div>" +
            '  <div class="pinyin" style="font-size:0.8rem;margin-bottom:0.25rem;">' + esc(tx.pinyin) + "</div>" +
            '  <div style="font-size:0.82rem;color:var(--imperial-red);font-weight:600;margin-bottom:0.35rem;">Hán–Việt: ' + esc(tx.hanVietRead) + "</div>" +
            '  <p style="margin:0 0 0.45rem;font-size:0.86rem;">' + esc(enM ? tx.translationEn : tx.translationVi) + "</p>" +
            (wbw.length ? (
              '  <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.45rem;">' +
              wbw.map(function (w) {
                return '<span style="font-size:0.77rem;padding:0.22rem 0.5rem;border:1px solid var(--hairline);background:var(--bg-paper);"><strong class="hanzi">' + esc(w.zh) + "</strong> (" + esc(w.hv || w.py) + "): " + esc(enM ? (w.glossEn || w.glossVi) : w.glossVi) + "</span>";
              }).join("") +
              "  </div>"
            ) : "") +
            '  <div style="font-size:0.8rem;color:var(--jade-green);"><strong>' + (enM ? "Vietnamese Reception: " : "Tiếp biến tại Việt Nam: ") + "</strong>" + esc(enM ? tx.vietnamReceptionEn : tx.vietnamReceptionVi) + "</div>" +
            "</article>"
          );
        }).join("") +
        "</div>"
      )) +
      pagerHtml("siku", st.sikuPage, list.length, per, enM) +
      "</section>"
    );
  }

  /* 3. 24 Han-Nom & Envoy Texts + 43 UNESCO ICH Comparative Dossiers */
  function renderHanNom24Corpus(enM) {
    var data = window.CCE_V12_CLASSICS_HANNOM;
    if (!data || !Array.isArray(data.hanNom24)) {
      return loadingBox("v12-hannom-24-corpus", "HAN–NOM & ENVOY POETRY CORPUS (24 WORKS)", "Đang tải 24 kiệt tác Hán–Nôm & Thơ văn Bắc Sứ đối chiếu...", "Loading 24 Han-Nom and Diplomatic Envoy works...", enM, "v12-classics-cosmology-pack");
    }
    var list = data.hanNom24;
    var per = 4;
    var totalP = Math.max(1, Math.ceil(list.length / per));
    st.hanNomPage = Math.max(0, Math.min(totalP - 1, st.hanNomPage));
    var slice = list.slice(st.hanNomPage * per, st.hanNomPage * per + per);

    return (
      '<section id="v12-hannom-24-corpus" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--imperial-red);">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "ARCHIVAL HAN–NOM & ENVOY LITERACY · 24 TEXTS" : "KHO TƯ LIỆU HÁN–NÔM & THƠ ĐI SỨ BẮC HÀNH · 24 KIỆT TÁC") + "</div>" +
      '  <h3 style="margin:0.25rem 0 0.85rem;">' + (enM ? "Vietnamese Imperial Texts, Nom Script Mechanics & Northern Envoys" : "Nguyên bản Chữ Nôm – Giả tá – Hình thanh & Thơ Sứ trình Bắc quốc") + "</h3>" +
      '  <div class="grid grid-2" style="gap:0.85rem;">' +
      slice.map(function (hn) {
        return (
          '<article class="flashcard-layer" style="margin:0;">' +
          '  <div style="display:flex;justify-content:space-between;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.3rem;">' +
          '    <span class="badge badge-jade">' + esc(hn.category || "Hán–Nôm") + "</span>" +
          '    <span style="font-size:0.78rem;color:var(--text-muted);">' + esc(hn.authorVi) + " · " + esc(hn.yearOrDynasty) + "</span>" +
          "  </div>" +
          '  <h4 style="margin:0 0 0.35rem;">' + esc(enM ? hn.titleEn : hn.titleVi) + "</h4>" +
          '  <div class="hanzi" style="font-size:1.05rem;padding:0.5rem 0.65rem;background:var(--bg-surface);border-left:3px solid var(--imperial-red);margin-bottom:0.35rem;">' + esc(hn.originalTextZhOrNom) + "</div>" +
          (hn.hanVietTransliteration ? '<div style="font-size:0.81rem;color:var(--imperial-red);margin-bottom:0.3rem;">' + esc(hn.hanVietTransliteration) + "</div>" : "") +
          '  <p style="margin:0 0 0.35rem;font-size:0.84rem;">' + esc(enM ? hn.translationEn : hn.translationVi) + "</p>" +
          '  <div style="font-size:0.79rem;color:var(--text-secondary);">' + esc(enM ? hn.hanNomMechanismNoteEn : hn.hanNomMechanismNoteVi) + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("hannom", st.hanNomPage, list.length, per, enM) +
      "</section>"
    );
  }

  function renderIchComparative43(enM) {
    var data = window.CCE_V12_LAOZIHAO_ICH;
    if (!data || !Array.isArray(data.unescoIchComparative43)) {
      return loadingBox("v12-ich-43-comparative", "UNESCO INTANGIBLE CULTURAL HERITAGE · 43 DOSSIERS", "Đang tải 43 hồ sơ Di sản Phi vật thể UNESCO đối chiếu Trung – Việt...", "Loading 43 UNESCO ICH Sino-Vietnamese comparative dossiers...", enM, "v12-b2b-quiz-pack");
    }
    var q = String(st.ichQuery || "").trim().toLowerCase();
    var filtered = data.unescoIchComparative43.filter(function (x) {
      if (!q) return true;
      return [x.nameVi, x.nameEn, x.nameZh, x.vietnamParallelNameVi, x.categoryVi].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 6;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.ichPage = Math.max(0, Math.min(totalP - 1, st.ichPage));
    var slice = filtered.slice(st.ichPage * per, st.ichPage * per + per);

    return (
      '<section id="v12-ich-43-comparative" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "UNESCO INTANGIBLE CULTURAL HERITAGE · 43 COMPARATIVE DOSSIERS" : "DI SẢN VĂN HÓA PHI VẬT THỂ UNESCO · 43 HỒ SƠ ĐỐI CHIẾU TRUNG – VIỆT") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "43 Chinese UNESCO ICH Items Paired with Vietnamese Parallels" : "43 Di sản UNESCO Trung Quốc đối thoại cùng Di sản Việt Nam") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="ich" value="' + esc(st.ichQuery) + '" placeholder="' + (enM ? "Search Kunqu, Guqin, Vietnam parallel..." : "Tìm Côn Khúc, Cổ Cầm, Nhã nhạc, Ca trù...") + '" style="max-width:250px;font-size:0.84rem;" />' +
      "  </div>" +
      '  <div class="grid grid-2" style="gap:0.8rem;">' +
      slice.map(function (it) {
        return (
          '<article class="flashcard-layer" style="margin:0;">' +
          '  <div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.25rem;">' +
          '    <span class="badge badge-gold">UNESCO ' + esc(it.unescoYear) + " · " + esc(enM ? it.categoryEn : it.categoryVi) + "</span>" +
          '    <span class="hanzi">' + esc(it.nameZh) + "</span>" +
          "  </div>" +
          '  <h4 style="margin:0 0 0.35rem;">' + esc(enM ? it.nameEn : it.nameVi) + "</h4>" +
          '  <p style="margin:0 0 0.35rem;font-size:0.83rem;color:var(--text-secondary);">' + esc(enM ? it.transmissionMechanismEn : it.transmissionMechanismVi) + "</p>" +
          '  <div style="padding:0.45rem 0.6rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);font-size:0.82rem;">' +
          '    <strong style="color:var(--jade-green);">' + (enM ? "VN Parallel: " : "Đối sánh Việt Nam: ") + esc(enM ? it.vietnamParallelNameEn : it.vietnamParallelNameVi) + "</strong><br>" +
          esc(enM ? it.comparativeDialogueEn : it.comparativeDialogueVi) +
          "  </div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("ich", st.ichPage, filtered.length, per, enM) +
      "</section>"
    );
  }

  /* 4. 90 Laozihao Directory + Didi Address & 5 Craft Steps */
  function renderLaozihao90Directory(enM) {
    var data = window.CCE_V12_LAOZIHAO_ICH;
    if (!data || !Array.isArray(data.laozihao90)) {
      return loadingBox("v12-laozihao-90-dir", "90 ZHONGHUA LAOZIHAO ARCHIVE", "Đang tải 90 hồ sơ thương hiệu Lão Tự Hiệu kèm địa chỉ Didi & 5 bước công nghệ...", "Loading 90 Zhonghua Laozihao brand dossiers...", enM, "v12-b2b-quiz-pack");
    }
    var list = data.laozihao90;
    var domMap = {};
    for (var i = 0; i < list.length; i++) if (list[i].domain) domMap[list[i].domain] = true;
    var q = String(st.lzhQuery || "").trim().toLowerCase();
    var filtered = list.filter(function (b) {
      if (st.lzhDomain !== "all" && b.domain !== st.lzhDomain) return false;
      if (!q) return true;
      return [b.nameVi, b.nameEn, b.nameZh, b.cityVi, b.flagshipAddressZh].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 6;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.lzhPage = Math.max(0, Math.min(totalP - 1, st.lzhPage));
    var slice = filtered.slice(st.lzhPage * per, st.lzhPage * per + per);

    return (
      '<section id="v12-laozihao-90-dir" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "90 ZHONGHUA LAOZIHAO ARCHIVE · 1600–2026" : "DANH LỤC 90 THƯƠNG HIỆU LÃO TỰ HIỆU · ĐỊA CHỈ THỰC ĐỊA & CÔNG NGHỆ CHẾ TÁC") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Flagship Didi Addresses, 5 Craft Steps & GI Protections" : "Hồ sơ lịch sử, 5 công đoạn truyền thống & Chỉ dẫn địa lý") + "</h3>" +
      "    </div>" +
      '    <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">' +
      '      <select class="form-select" data-v12-select="lzhDomain" style="max-width:170px;font-size:0.82rem;">' +
      '        <option value="all"' + (st.lzhDomain === "all" ? " selected" : "") + ">" + (enM ? "All Domains" : "Mọi ngành nghề") + "</option>" +
      Object.keys(domMap).map(function (dm) {
        return '<option value="' + esc(dm) + '"' + (st.lzhDomain === dm ? " selected" : "") + ">" + esc(dm) + "</option>";
      }).join("") +
      "      </select>" +
      '      <input type="text" class="form-input" data-v12-search="lzh" value="' + esc(st.lzhQuery) + '" placeholder="' + (enM ? "Search brand, city..." : "Tìm hiệu buôn, tỉnh thành...") + '" style="max-width:210px;font-size:0.82rem;" />' +
      "    </div>" +
      "  </div>" +
      '  <div class="grid grid-2" style="gap:0.85rem;">' +
      slice.map(function (b) {
        var steps = Array.isArray(b.craftSteps5) ? b.craftSteps5 : [];
        return (
          '<article class="flashcard-layer" style="margin:0;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.25rem;">' +
          '    <span class="badge badge-red">' + esc(b.foundedYear) + " · " + esc(enM ? b.cityEn : b.cityVi) + "</span>" +
          '    <span class="badge badge-outline">' + esc(b.giProtectionStatus || b.domain) + "</span>" +
          "  </div>" +
          '  <h4 style="margin:0.15rem 0 0.25rem;">' + esc(enM ? b.nameEn : b.nameVi) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(b.nameZh) + "</span></h4>" +
          '  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.35rem;">' + esc(b.dynastyOrEra || "") + " · <strong>Didi:</strong> <span class=\"hanzi\">" + esc(b.flagshipAddressZh) + '</span> <button type="button" class="btn btn-ghost btn-sm" style="padding:0 0.35rem;font-size:0.72rem;" data-v12-copy="' + esc(b.flagshipAddressZh) + '">' + (enM ? "Copy" : "Chép") + "</button></div>" +
          '  <p style="margin:0 0 0.4rem;font-size:0.83rem;color:var(--text-secondary);">' + esc(enM ? b.heritageStoryEn : b.heritageStoryVi) + "</p>" +
          (steps.length ? '<div style="font-size:0.77rem;color:var(--text-secondary);margin-bottom:0.35rem;"><strong>' + (enM ? "5 Craft Steps: " : "5 công đoạn: ") + "</strong>" + esc(steps.join(" → ")) + "</div>" : "") +
          '  <div style="font-size:0.78rem;color:var(--jade-green);"><strong>' + (enM ? "Authenticity Tip: " : "Nhận biết hàng thật: ") + "</strong>" + esc(enM ? b.authenticBuyingTipEn : b.authenticBuyingTipVi) + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("lzh", st.lzhPage, filtered.length, per, enM) +
      "</section>"
    );
  }

  /* 5. 64 Academic Yijing Hexagrams + Astronomy & 72 Pentads Cosmology */
  function renderHexagramSvg(binary6) {
    var bits = String(binary6 || "111111").split("");
    // Top line is index 5 (upper), bottom is index 0
    var bars = [];
    for (var i = 5; i >= 0; i--) {
      var y = (5 - i) * 10 + 4;
      if (bits[i] === "1") {
        bars.push('<rect x="4" y="' + y + '" width="56" height="5" fill="currentColor" rx="1"/>');
      } else {
        bars.push('<rect x="4" y="' + y + '" width="24" height="5" fill="currentColor" rx="1"/>');
        bars.push('<rect x="36" y="' + y + '" width="24" height="5" fill="currentColor" rx="1"/>');
      }
    }
    return '<svg width="64" height="66" viewBox="0 0 64 66" style="color:var(--imperial-red);flex-shrink:0;" aria-hidden="true">' + bars.join("") + "</svg>";
  }

  function renderYijing64Lab(enM) {
    var data = window.CCE_V12_COSMOLOGY_ACADEMY;
    if (!data || !Array.isArray(data.yijing64)) {
      return loadingBox("v12-yijing-64-lab", "64 ACADEMIC YIJING HEXAGRAMS", "Đang tải hệ thống 64 quẻ Chu Dịch kèm Thoán Từ, Đại Tượng & 6 Hào từ...", "Loading 64 academic Yijing hexagrams...", enM, "v12-classics-cosmology-pack");
    }
    var q = String(st.yijingQuery || "").trim().toLowerCase();
    var all = data.yijing64;
    var filtered = q ? all.filter(function (g) {
      return [g.num, g.nameVi, g.nameEn, g.nameZh, g.pinyin].join(" ").toLowerCase().indexOf(q) >= 0;
    }) : all;
    var cur = all[Math.max(0, Math.min(all.length - 1, st.yijingIdx))] || all[0];
    var lines = Array.isArray(cur.lineMeanings6) ? cur.lineMeanings6 : [];

    return (
      '<section id="v12-yijing-64-lab" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--imperial-red);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "ACADEMIC YIJING MATRIX · 64 HEXAGRAMS & 384 LINES" : "THƯ VIỆN CHU DỊCH HỌC THUẬT · 64 QUẺ & GIẢI THÍCH LỤC HÀO") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Textual Structure, Da Xiang Symbolism & Ethical Governance" : "Cấu trúc Nội–Ngoại Quái, Thoán Từ, Đại Tượng & Luận giải Quân tử") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="yijing" value="' + esc(st.yijingQuery) + '" placeholder="' + (enM ? "Search hexagram #1–#64..." : "Tìm tên quẻ hoặc số 1–64...") + '" style="max-width:220px;font-size:0.82rem;" />' +
      "  </div>" +
      '  <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(92px,1fr));gap:0.35rem;max-height:190px;overflow-y:auto;padding:0.5rem;background:var(--bg-surface);border:1px solid var(--hairline);margin-bottom:1rem;">' +
      filtered.map(function (g) {
        var idx = g.num - 1;
        var active = idx === st.yijingIdx;
        return (
          '<button type="button" data-v12-yijing-pick="' + idx + '" style="text-align:left;padding:0.35rem 0.45rem;border:1px solid ' + (active ? "var(--imperial-red)" : "var(--hairline)") + ';background:' + (active ? "var(--imperial-red)" : "var(--bg-paper)") + ';color:' + (active ? "#FAF7F2" : "var(--ink-primary)") + ';cursor:pointer;font-size:0.74rem;border-radius:2px;">' +
          '  <strong>#' + g.num + '</strong> <span class="hanzi">' + esc(g.nameZh) + "</span><br>" +
          '  <span>' + esc(enM ? g.nameEn : g.nameVi) + "</span>" +
          "</button>"
        );
      }).join("") +
      "  </div>" +
      '  <div class="flashcard-layer" style="margin:0;">' +
      '    <div style="display:flex;gap:1rem;align-items:flex-start;flex-wrap:wrap;margin-bottom:0.75rem;">' +
      renderHexagramSvg(cur.binary6) +
      '      <div style="flex:1;min-width:220px;">' +
      '        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">' +
      '          <h4 style="margin:0;font-size:1.15rem;">Quẻ #' + cur.num + ": " + esc(enM ? cur.nameEn : cur.nameVi) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(cur.nameZh) + "</span></h4>" +
      '          <span class="badge badge-gold">' + esc(cur.upperTrigram) + " / " + esc(cur.lowerTrigram) + "</span>" +
      "        </div>" +
      '        <div style="margin:0.4rem 0 0.25rem;font-size:0.9rem;"><strong class="hanzi">' + esc(cur.guaCiZh) + "</strong> · <em>" + esc(cur.guaCiHanViet) + "</em></div>" +
      '        <div style="padding:0.45rem 0.65rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);font-size:0.84rem;">' +
      '          <strong class="hanzi">' + esc(cur.daXiangZh) + "</strong><br>" +
      esc(enM ? cur.daXiangEn : cur.daXiangVi) +
      "        </div>" +
      "      </div>" +
      "    </div>" +
      '    <p style="margin:0 0 0.7rem;font-size:0.84rem;color:var(--text-secondary);"><strong>' + (enM ? "Leadership & Ethics: " : "Minh triết Ứng xử & Quản trị: ") + "</strong>" + esc(enM ? cur.leadershipAndEthicsEn : cur.leadershipAndEthicsVi) + "</p>" +
      (lines.length ? (
        '    <div class="grid grid-2" style="gap:0.5rem;">' +
        lines.map(function (ln, li) {
          return '<div style="padding:0.45rem 0.6rem;border:1px solid var(--hairline);background:var(--bg-paper);font-size:0.79rem;"><strong style="color:var(--imperial-red);">Hào ' + (li + 1) + ":</strong> " + esc(ln) + "</div>";
        }).join("") +
        "    </div>"
      ) : "") +
      "  </div>" +
      "</section>"
    );
  }

  function renderCosmologySuite(enM) {
    var data = window.CCE_V12_COSMOLOGY_ACADEMY;
    if (!data || !data.astronomyCalendarSuite) {
      return loadingBox("v12-cosmology-suite", "28 MANSIONS · 3 ENCLOSURES · 72 PENTADS", "Đang tải Nhị Thập Bát Tú, Tam Viên, 72 Vật Hậu & Tý Ngọ Lưu Chú...", "Loading Chinese Astronomical Mansions, Enclosures & 72 Pentads...", enM, "v12-classics-cosmology-pack");
    }
    var a = data.astronomyCalendarSuite;
    var htmlBody = "";
    if (st.astroTab === "enclosures") {
      htmlBody = '<div class="grid grid-3" style="gap:0.8rem;">' + (a.threeEnclosures3 || []).map(function (e) {
        return '<article class="flashcard-layer" style="margin:0;"><h4 style="margin:0 0 0.25rem;">' + esc(enM ? e.nameEn : e.nameVi) + ' <span class="hanzi">' + esc(e.nameZh) + '</span></h4><p style="font-size:0.82rem;margin:0 0 0.35rem;">' + esc(enM ? e.celestialGovernanceEn : e.celestialGovernanceVi) + '</p><div style="font-size:0.79rem;color:var(--jade-green);">' + esc(enM ? e.forbiddenCityParallelEn : e.forbiddenCityParallelVi) + "</div></article>";
      }).join("") + "</div>";
    } else if (st.astroTab === "solar") {
      htmlBody = '<div class="grid grid-3" style="gap:0.7rem;">' + (a.solarLongitude24 || []).map(function (s) {
        var pts = enM ? (s.threePentadsEn || s.threePentadsVi || []) : (s.threePentadsVi || []);
        return '<article class="flashcard-layer" style="margin:0;font-size:0.8rem;"><div style="display:flex;justify-content:space-between;"><span class="badge badge-gold">' + esc(s.longitudeDeg) + "° · " + esc(s.approxDate) + '</span><span class="hanzi">' + esc(s.nameZh) + '</span></div><strong style="display:block;margin:0.25rem 0;">' + esc(enM ? s.nameEn : s.nameVi) + '</strong><div style="color:var(--jade-green);margin-bottom:0.2rem;">' + esc(Array.isArray(pts) ? pts.join(" · ") : pts) + '</div><div style="color:var(--text-muted);">' + esc(enM ? s.phenologyNoteEn : s.phenologyNoteVi) + "</div></article>";
      }).join("") + "</div>";
    } else if (st.astroTab === "circadian") {
      htmlBody = '<div class="grid grid-3" style="gap:0.7rem;">' + (a.circadian12Hours || []).map(function (c) {
        return '<article class="flashcard-layer" style="margin:0;font-size:0.8rem;"><div style="display:flex;justify-content:space-between;"><span class="badge badge-red">' + esc(c.timeWindow) + '</span><strong class="hanzi">' + esc(c.branchZh) + " (" + esc(c.branchVi) + ')</strong></div><p style="margin:0.35rem 0 0.2rem;">' + esc(enM ? c.classicalMeridianNoteEn : c.classicalMeridianNoteVi) + '</p><div style="color:var(--text-muted);">' + esc(enM ? c.modernCircadianNoteEn : c.modernCircadianNoteVi) + "</div></article>";
      }).join("") + "</div>";
    } else {
      htmlBody = '<div class="grid grid-4" style="gap:0.65rem;">' + (a.mansions28 || []).map(function (m) {
        return '<article class="flashcard-layer" style="margin:0;font-size:0.79rem;"><div style="display:flex;justify-content:space-between;"><span class="badge badge-outline">#' + esc(m.num) + " · " + esc(m.palace4) + '</span><strong class="hanzi">' + esc(m.nameZh) + '</strong></div><strong style="display:block;margin:0.2rem 0;">' + esc(m.nameVi) + " (" + esc(m.pinyin) + ')</strong><div style="color:var(--jade-green);">IAU: ' + esc(m.modernIauConstellation) + '</div><div style="color:var(--text-muted);margin-top:0.2rem;">' + esc(enM ? m.classicalNoteEn : m.classicalNoteVi) + "</div></article>";
      }).join("") + "</div>";
    }

    return (
      '<section id="v12-cosmology-suite" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "ARCHAEOASTRONOMY & CALENDAR SCIENCE" : "THIÊN VĂN CỔ ĐẠI & LỊCH PHÁP KHOA HỌC · 二十八宿 · 三垣 · 七十二候") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "28 Mansions, Three Enclosures, 72 Solar Pentads & 12 Hours" : "Nhị Thập Bát Tú, Tam Viên, 72 Vật Hậu Tiết Khí & Nhịp Sinh Học") + "</h3>" +
      "    </div>" +
      '    <div class="tabs-bar" style="margin:0;">' +
      '      <button type="button" class="tab-btn ' + (st.astroTab === "mansions" ? "active" : "") + '" data-v12-astro-tab="mansions">28 Tú</button>' +
      '      <button type="button" class="tab-btn ' + (st.astroTab === "enclosures" ? "active" : "") + '" data-v12-astro-tab="enclosures">Tam Viên (3)</button>' +
      '      <button type="button" class="tab-btn ' + (st.astroTab === "solar" ? "active" : "") + '" data-v12-astro-tab="solar">72 Vật Hậu (24)</button>' +
      '      <button type="button" class="tab-btn ' + (st.astroTab === "circadian" ? "active" : "") + '" data-v12-astro-tab="circadian">12 Giờ Địa Chi</button>' +
      "    </div>" +
      "  </div>" +
      htmlBody +
      "</section>"
    );
  }

  /* 6. Learning: 24 Project-985 CSC + 50 HSK 7-9 Vocab + 120 Script Lexicon */
  function renderAcademy985AndHsk50(enM) {
    var data = window.CCE_V12_COSMOLOGY_ACADEMY;
    if (!data || !data.universities985AndCsc) {
      return loadingBox("v12-academy-985-csc", "24 PROJECT-985 CSC UNIVERSITIES & HSK 7–9", "Đang tải hồ sơ 24 Đại học 985 & 50 từ vựng học thuật HSK 7–9...", "Loading 24 Project-985 CSC Universities and 50 HSK 7–9 terms...", enM, "v12-classics-cosmology-pack");
    }
    var u = data.universities985AndCsc;
    var unis = u.universities24 || [];
    var q = String(st.cscQuery || "").trim().toLowerCase();
    var filtered = unis.filter(function (x) {
      if (!q) return true;
      return [x.nameVi, x.nameEn, x.nameZh, x.cityZh, x.cscCode, x.flagshipDisciplinesVi].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 6;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.cscPage = Math.max(0, Math.min(totalP - 1, st.cscPage));
    var slice = filtered.slice(st.cscPage * per, st.cscPage * per + per);

    return (
      '<section id="v12-academy-985-csc" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--imperial-red);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "24 PROJECT-985 UNIVERSITIES & CSC SCHOLARSHIP PROTOCOL" : "24 ĐẠI HỌC TRỌNG ĐIỂM 985 · MÃ TRƯỜNG CSC & NGÀNH HÁN HỌC") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "CSC Agency Codes, Flagship Disciplines & 50 HSK 7–9 Terms" : "Mã Trường CSC Type B, Thế Mạnh Đào Tạo & Từ Vựng HSK 7–9") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="csc" value="' + esc(st.cscQuery) + '" placeholder="' + (enM ? "Search university, CSC code..." : "Tìm trường, mã CSC, thành phố...") + '" style="max-width:230px;font-size:0.82rem;" />' +
      "  </div>" +
      '  <div class="grid grid-2" style="gap:0.75rem;">' +
      slice.map(function (un) {
        return (
          '<article class="flashcard-layer" style="margin:0;font-size:0.82rem;">' +
          '  <div style="display:flex;justify-content:space-between;gap:0.4rem;"><span class="badge badge-red">CSC: ' + esc(un.cscCode) + '</span><span class="hanzi">' + esc(un.cityZh) + "</span></div>" +
          '  <h4 style="margin:0.25rem 0 0.2rem;">' + esc(enM ? un.nameEn : un.nameVi) + ' <span class="hanzi">' + esc(un.nameZh) + "</span></h4>" +
          '  <div style="margin-bottom:0.25rem;"><strong>' + (enM ? "Disciplines: " : "Thế mạnh: ") + "</strong>" + esc(enM ? un.flagshipDisciplinesEn : un.flagshipDisciplinesVi) + "</div>" +
          '  <div style="color:var(--jade-green);margin-bottom:0.2rem;"><strong>Sinology / VN:</strong> ' + esc(un.sinologyOrVietnamInstituteVi || "") + "</div>" +
          '  <div style="color:var(--text-muted);font-size:0.78rem;">' + esc(enM ? un.scholarshipNotesEn : un.scholarshipNotesVi) + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("csc", st.cscPage, filtered.length, per, enM) +
      (Array.isArray(u.hsk79AcademicVocab50) ? (
        '  <details style="margin-top:0.85rem;border-top:1px dashed var(--hairline);padding-top:0.65rem;">' +
        '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);font-size:0.86rem;">' + (enM ? "Open 50 HSK 7–9 Academic Vocabulary Matrix →" : "Mở danh mục 50 thuật ngữ học thuật chuẩn HSK 7–9 →") + "</summary>" +
        '    <div class="grid grid-3" style="gap:0.55rem;margin-top:0.65rem;">' +
        u.hsk79AcademicVocab50.map(function (hv) {
          return '<div class="flashcard-layer" style="margin:0;font-size:0.78rem;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(hv.hanzi) + '</strong> <span class="pinyin">' + esc(hv.pinyin) + "</span> · " + esc(hv.hanViet) + "<br><span>" + esc(enM ? hv.definitionEn : hv.definitionVi) + "</span></div>";
        }).join("") +
        "    </div>" +
        "  </details>"
      ) : "") +
      "</section>"
    );
  }

  function renderLexicon120Evolution(enM) {
    var data = window.CCE_V12_LEXICON_CULINARY_SYNC;
    if (!data || !Array.isArray(data.lexicon120)) {
      return loadingBox("v12-lexicon-120-evol", "120 FOUR-SCRIPT CHARACTER EVOLUTION", "Đang tải 120 chữ Hán 4 tầng diễn biến Giáp cốt – Kim văn – Tiểu triện – Khải thư...", "Loading 120 4-period character evolution entries...", enM, "v12-field-atlas-pack");
    }
    var q = String(st.lexQuery || "").trim().toLowerCase();
    var filtered = data.lexicon120.filter(function (lx) {
      if (!q) return true;
      return [lx.hanzi, lx.pinyin, lx.hanViet, lx.meaningVi, lx.liushuCategory].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 9;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.lexPage = Math.max(0, Math.min(totalP - 1, st.lexPage));
    var slice = filtered.slice(st.lexPage * per, st.lexPage * per + per);

    return (
      '<section id="v12-lexicon-120-evol" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "PALEOGRAPHY & 4-SCRIPT EVOLUTION · 120 RADICALS" : "VĂN TỰ HỌC 4 TẦNG · GIÁP CỐT → KIM VĂN → TIỂU TRIỆN → KHẢI THƯ (120 CHỮ)") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Trace Form Transformation from Shang Oracle Bones to Modern Kaishu" : "Diễn biến Tự dạng từ Giáp Cốt Ân Khư đến Khải Thư Hiện Đại") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="lex" value="' + esc(st.lexQuery) + '" placeholder="' + (enM ? "Filter character, Hán-Việt, Liushu..." : "Tìm chữ Hán, Hán-Việt, Lục thư...") + '" style="max-width:240px;font-size:0.82rem;" />' +
      "  </div>" +
      '  <div class="grid grid-3" style="gap:0.7rem;">' +
      slice.map(function (lx) {
        var ev = lx.scriptEvolution4 || {};
        return (
          '<article class="flashcard-layer" style="margin:0;font-size:0.81rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;">' +
          '    <span><strong class="hanzi" style="font-size:1.35rem;color:var(--imperial-red);">' + esc(lx.hanzi) + '</strong> <span class="pinyin">' + esc(lx.pinyin) + '</span> · <span class="badge badge-gold">' + esc(lx.hanViet) + "</span></span>" +
          speakBtn(lx.hanzi, lx.hanzi) +
          "  </div>" +
          '  <div style="font-size:0.75rem;color:var(--text-muted);margin:0.2rem 0;">' + esc(lx.liushuCategory) + " · Bộ " + esc(lx.radical) + " (" + esc(lx.strokes) + " nét)</div>" +
          '  <div style="margin-bottom:0.25rem;">' + esc(enM ? lx.meaningEn : lx.meaningVi) + "</div>" +
          '  <div style="font-size:0.75rem;color:var(--jade-green);">' + esc(ev.oracleBone || "") + " → " + esc(ev.smallSeal || "") + " → " + esc(ev.regularKaishu || "") + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("lex", st.lexPage, filtered.length, per, enM) +
      "</section>"
    );
  }

  /* 7. Regions: 34 Provincial 12306 HSR & 240h Transit Directory */
  function renderFieldAtlas34Directory(enM) {
    var data = window.CCE_V12_FIELD_ATLAS;
    if (!data || !Array.isArray(data.hsrHubs34)) {
      return loadingBox("v12-hsr-34-directory", "34 PROVINCES · 12306 HSR & 240H VISA HUBS", "Đang tải mạng lưới ga cao tốc 12306, sân bay & cửa khẩu 240h của 34 tỉnh thành...", "Loading 34-province 12306 HSR & 240h transit directory...", enM, "v12-field-atlas-pack");
    }
    var q = String(st.hsrQuery || "").trim().toLowerCase();
    var filtered = data.hsrHubs34.filter(function (h) {
      if (!q) return true;
      return [h.provinceId, h.provinceZh, h.mainHsrStationZh, h.mainHsrStationPinyin, h.airportCodeAndNameZh].join(" ").toLowerCase().indexOf(q) >= 0;
    });
    var per = 6;
    var totalP = Math.max(1, Math.ceil(filtered.length / per));
    st.hsrPage = Math.max(0, Math.min(totalP - 1, st.hsrPage));
    var slice = filtered.slice(st.hsrPage * per, st.hsrPage * per + per);

    return (
      '<section id="v12-hsr-34-directory" class="card mt-2 mb-2" style="padding:1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "34 PROVINCIAL LOGISTICS & 12306 HSR HUBS" : "MẠNG LƯỚI GA CAO TỐC 12306 & QUÁ CẢNH 240H · 34 TỈNH THÀNH") + "</div>" +
      '      <h3 style="margin:0.2rem 0 0;">' + (enM ? "Railway Stations, Airport IATA & Museum WeChat Reservations" : "Ga tàu trung tâm, Cảng hàng không & Quy tắc Đặt vé Bảo tàng") + "</h3>" +
      "    </div>" +
      '    <input type="text" class="form-input" data-v12-search="hsr" value="' + esc(st.hsrQuery) + '" placeholder="' + (enM ? "Filter province or HSR station..." : "Tìm tỉnh, tên ga cao tốc...") + '" style="max-width:230px;font-size:0.82rem;" />' +
      "  </div>" +
      '  <div class="grid grid-2" style="gap:0.8rem;">' +
      slice.map(function (h) {
        return (
          '<article class="flashcard-layer" style="margin:0;font-size:0.82rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
          '    <strong class="hanzi" style="font-size:1.05rem;">' + esc(h.provinceZh) + " · " + esc(h.mainHsrStationZh) + "</strong>" +
          '    <span class="badge ' + (h.visa240hEligible ? "badge-jade" : "badge-outline") + '">' + (h.visa240hEligible ? "240h Transit OK" : "Visa Required") + "</span>" +
          "  </div>" +
          '  <div style="font-size:0.76rem;color:var(--text-muted);margin:0.2rem 0;">' + esc(h.mainHsrStationPinyin) + " · " + esc(h.airportCodeAndNameZh) + "</div>" +
          '  <div style="margin-bottom:0.25rem;">' + esc(enM ? h.corridorConnectionsEn : h.corridorConnectionsVi) + "</div>" +
          '  <div style="color:var(--jade-green);font-size:0.79rem;"><strong>Booking:</strong> ' + esc(enM ? h.mustVisitMuseumBookingEn : h.mustVisitMuseumBookingVi) + "</div>" +
          "</article>"
        );
      }).join("") +
      "  </div>" +
      pagerHtml("hsr", st.hsrPage, filtered.length, per, enM) +
      "</section>"
    );
  }

  function bindEvents() {
    if (st.bound || typeof document === "undefined") return;
    st.bound = true;

    document.addEventListener("click", function (e) {
      var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");

      var pBtn = e.target && e.target.closest ? e.target.closest("[data-v12-page-key]") : null;
      if (pBtn && !pBtn.disabled) {
        var key = pBtn.getAttribute("data-v12-page-key");
        var pg = parseInt(pBtn.getAttribute("data-v12-page"), 10) || 0;
        st[key + "Page"] = pg;
        if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
        return;
      }

      var sTab = e.target && e.target.closest ? e.target.closest("[data-v12-siku-tab]") : null;
      if (sTab) {
        st.sikuTab = sTab.getAttribute("data-v12-siku-tab") || "jingzi";
        st.sikuPage = 0;
        if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
        return;
      }

      var aTab = e.target && e.target.closest ? e.target.closest("[data-v12-astro-tab]") : null;
      if (aTab) {
        st.astroTab = aTab.getAttribute("data-v12-astro-tab") || "mansions";
        if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
        return;
      }

      var yPick = e.target && e.target.closest ? e.target.closest("[data-v12-yijing-pick]") : null;
      if (yPick) {
        st.yijingIdx = parseInt(yPick.getAttribute("data-v12-yijing-pick"), 10) || 0;
        var box = document.getElementById("v12-yijing-64-lab");
        if (box) box.outerHTML = renderYijing64Lab(enM);
        return;
      }

      var cp = e.target && e.target.closest ? e.target.closest("[data-v12-copy]") : null;
      if (cp && navigator.clipboard) {
        try {
          navigator.clipboard.writeText(cp.getAttribute("data-v12-copy") || "");
          var orig = cp.textContent;
          cp.textContent = enM ? "Copied!" : "Đã chép!";
          setTimeout(function () { cp.textContent = orig; }, 1200);
        } catch (_e) {}
      }
    });

    document.addEventListener("change", function (e) {
      if (e.target && e.target.getAttribute("data-v12-select") === "lzhDomain") {
        st.lzhDomain = e.target.value || "all";
        st.lzhPage = 0;
        if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
      }
    });

    document.addEventListener("input", function (e) {
      var sk = e.target && e.target.getAttribute ? e.target.getAttribute("data-v12-search") : null;
      if (!sk) return;
      st[sk + "Query"] = e.target.value || "";
      if (sk !== "yijing") st[sk + "Page"] = 0;
      var val = e.target.value;
      if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
      var again = document.querySelector('[data-v12-search="' + sk + '"]');
      if (again) { again.value = val; again.focus(); }
    });
  }
  bindEvents();

  window.CCE_V12_VIEWS = {
    version: "12.0",
    renderB2BClauses20: renderB2BClauses20,
    renderFalseFriends50: renderFalseFriends50,
    renderSikuAndParticlesStudio: renderSikuAndParticlesStudio,
    renderHanNom24Corpus: renderHanNom24Corpus,
    renderIchComparative43: renderIchComparative43,
    renderLaozihao90Directory: renderLaozihao90Directory,
    renderYijing64Lab: renderYijing64Lab,
    renderCosmologySuite: renderCosmologySuite,
    renderAcademy985AndHsk50: renderAcademy985AndHsk50,
    renderLexicon120Evolution: renderLexicon120Evolution,
    renderFieldAtlas34Directory: renderFieldAtlas34Directory
  };
})();
