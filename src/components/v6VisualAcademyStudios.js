// ============================================================================
// CHINESE CULTURE EXPLORER V6.0 — Interactive Visual Academy & SVG Studios
// Exposes window.CCE_V6_STUDIOS (MindMap, Liushu 100, False Friends 30, Rules 12,
// Simp-Trad 50, Measure Words 40, Chengyu 36, Novel Graphs 4, Poems 24, Wenyan 30,
// HSK 40 + VN-Tang 15, Solar 24/Wuxing/28 Stars/48 Herbs/12 Microclimates,
// Incoterms/10 Annotated Trade Docs + AQL/Container Matrix, Sino-Viet 10 & CSC 24)
// ============================================================================

(function () {
  "use strict";

  var st = {
    mindMod: 1,
    liushuTab: "chars", // chars | ff30 | rules12 | st50 | mw40 | cy36 | novels | poems | wenyan | hsk_vn
    liushuCat: "all",
    hskLvFilter: "all",
    novelIdx: 0,
    solarIdx: 4, // Thanh Minh default
    wuxingEl: "Mộc (木)",
    cosmoSub: "wheel", // wheel | herbs | micro | stars9 | cases12
    incoCode: "CIP",
    docId: "doc-mbl-ocean",
    docBox: 1,
    svSub: "wonders", // wonders | csc_unis | csc_gantt | csc_int | hsr
    hsrIdx: 0,
    worldTab: "expeditions", // expeditions | concierge | pigments | benchmarks | cinema
    expRegion: "all",
    pigmentIdx: 0,
    ytActive: {},
    studentName: "Học viên Chinese Culture Explorer"
  };

  function loadConciergeDone() {
    try {
      return JSON.parse(localStorage.getItem("cce_v7_concierge_done") || "{}") || {};
    } catch (_e) {
      return {};
    }
  }

  function renderYoutubeCard(vObj, enM) {
    if (!vObj || !vObj.youtubeId) return "";
    var isPlaying = Boolean(st.ytActive[vObj.youtubeId]);
    var title = enM ? (vObj.titleEn || vObj.titleVi) : vObj.titleVi;
    var summary = enM ? (vObj.summaryEn || vObj.summaryVi) : vObj.summaryVi;
    var ytWatch = "https://www.youtube.com/watch?v=" + esc(vObj.youtubeId);
    var poster = vObj.posterImage || "assets/images/museum/taihe-dian.jpg";
    return (
      '<article class="card" style="padding:0.78rem 0.9rem;border-left:3px solid var(--imperial-red);display:flex;flex-direction:column;gap:0.45rem;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
      '    <span class="badge badge-red">YouTube · ' + esc(vObj.author || "Documentary") + '</span>' +
      '    <a href="' + ytWatch + '" target="_blank" rel="noopener" style="font-size:0.73rem;color:var(--imperial-red);font-weight:700;">' + (enM ? "Open YouTube ↗" : "Mở YouTube ↗") + '</a>' +
      '  </div>' +
      (isPlaying
        ? '<div style="position:relative;aspect-ratio:16/9;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);background:#111;"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(vObj.youtubeId) + '?autoplay=1&rel=0" title="' + esc(title) + '" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="width:100%;height:100%;border:0;display:block;"></iframe></div>'
        : '<div style="position:relative;aspect-ratio:16/9;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);background:#111;cursor:pointer;" data-v6st-act="play-yt" data-val="' + esc(vObj.youtubeId) + '">' +
          '  <img src="' + esc(poster) + '" alt="' + esc(title) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;opacity:0.86;display:block;" />' +
          '  <div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(180deg,rgba(17,17,17,0.12),rgba(17,17,17,0.68));">' +
          '    <span style="padding:0.42rem 0.9rem;background:#8C2318;color:#FFFFFF;border:1px solid #E5A93C;border-radius:999px;font-size:0.78rem;font-weight:700;">▶ ' + (enM ? "Play YouTube Documentary" : "Phát Video Tài Liệu YouTube") + '</span>' +
          '  </div>' +
          '</div>'
      ) +
      '  <strong style="font-size:0.88rem;line-height:1.35;">' + esc(title) + '</strong>' +
      '  <p style="margin:0;font-size:0.78rem;color:var(--text-secondary);">' + esc(summary) + '</p>' +
      '</article>'
    );
  }

  function renderOfficialPromoCard() {
    return "";
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function spk(text, lang) {
    if (!text) return "";
    var fn = lang === "en-US" ? 'data-action="speak-en" data-en="' + esc(text) + '"' : 'data-action="speak-zh" data-zh="' + esc(text) + '"';
    return '<button type="button" class="tts-speak-btn" ' + fn + ' title="Phát âm">' +
      '<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.84rem;height:0.84rem;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg></button>';
  }

  function srsBtn(zh, py, hv, vi, en) {
    return '<button type="button" class="btn btn-ghost btn-sm" style="padding:0.06rem 0.35rem;font-size:0.7rem;border:1px solid var(--hairline);" data-v6st-act="srs" data-zh="' + esc(zh) + '" data-py="' + esc(py) + '" data-hv="' + esc(hv) + '" data-vi="' + esc(vi) + '" data-en="' + esc(en) + '">+ SRS</button>';
  }

  function loadGanttDone() {
    try {
      return JSON.parse(localStorage.getItem("cce_v6_csc_gantt") || "{}") || {};
    } catch (_e) {
      return {};
    }
  }

  function formatEvolution4Stages(ev) {
    if (!ev) return "";
    if (typeof ev === "string") return ev;
    return [
      ev.oracleBone ? "Giáp Cốt: " + ev.oracleBone : "",
      ev.bronzeScript ? "Kim Văn: " + ev.bronzeScript : "",
      ev.smallSeal ? "Tiểu Triện: " + ev.smallSeal : "",
      ev.regularScript ? "Khải Thư: " + ev.regularScript : ""
    ].filter(Boolean).join(" · ");
  }

  // --------------------------------------------------------------------------
  // 1. Course 10-Module Interactive SVG MindMap + PNG Certificate Generator
  // --------------------------------------------------------------------------
  function renderCourseMindMapSvg(enM) {
    var nodes = [
      { n: 1, x: 92, y: 46, lbl: "HP 01 · Địa–Thủy", sub: "34 Tỉnh · Đô Giang Yển", col: "#8C2318" },
      { n: 2, x: 240, y: 40, lbl: "HP 02 · Sử–Danh Nhân", sub: "14 Triều · Cố Đô", col: "#8C2318" },
      { n: 3, x: 390, y: 40, lbl: "HP 03 · Triết–3D", sub: "24 Phòng WebGL 3D", col: "#1F6E5C" },
      { n: 4, x: 540, y: 40, lbl: "HP 04 · Thi–Họa–HSK", sub: "150 Lục Thư · 60 HSK", col: "#1F6E5C" },
      { n: 5, x: 688, y: 46, lbl: "HP 05 · Lão Tự Hào", sub: "120 Brands · 42 GI", col: "#A88940" },
      { n: 6, x: 92, y: 214, lbl: "HP 06 · Trung–Việt", sub: "16 Kỳ Quan · 36 CSC", col: "#6E5423" },
      { n: 7, x: 240, y: 222, lbl: "HP 07 · Trade Docs", sub: "Incoterms · 15 Chứng Từ", col: "#223A52" },
      { n: 8, x: 390, y: 222, lbl: "HP 08 · Mỹ Học 3D", sub: "8 Sắc Tố · Côn Khúc", col: "#8C2318" },
      { n: 9, x: 540, y: 222, lbl: "HP 09 · Di Sản 240h", sub: "16 Tour · 16 Cao Tốc", col: "#1F6E5C" },
      { n: 10, x: 688, y: 214, lbl: "HP 10 · GACC & Số", sub: "300 Thuật Ngữ · 600 MCQ", col: "#223A52" }
    ];
    var svgLinks = nodes.map(function (nd) {
      return '<line x1="390" y1="130" x2="' + nd.x + '" y2="' + nd.y + '" stroke="' + (st.mindMod === nd.n ? nd.col : "#c9bfa9") + '" stroke-width="' + (st.mindMod === nd.n ? "3" : "1.5") + '" stroke-dasharray="' + (st.mindMod === nd.n ? "none" : "4 3") + '" />';
    }).join("");
    var svgNodes = nodes.map(function (nd) {
      var active = st.mindMod === nd.n;
      return (
        '<g style="cursor:pointer;" data-v6st-act="mind-mod" data-val="' + nd.n + '">' +
        '  <rect x="' + (nd.x - 66) + '" y="' + (nd.y - 23) + '" width="132" height="46" rx="8" fill="' + (active ? nd.col : "#FBF9F4") + '" stroke="' + nd.col + '" stroke-width="' + (active ? "2.5" : "1.5") + '" />' +
        '  <text x="' + nd.x + '" y="' + (nd.y - 3) + '" text-anchor="middle" font-size="10.2" font-weight="700" fill="' + (active ? "#FFFFFF" : "#1D1B18") + '">' + esc(nd.lbl) + '</text>' +
        '  <text x="' + nd.x + '" y="' + (nd.y + 12) + '" text-anchor="middle" font-size="8.2" fill="' + (active ? "#F5E7CE" : "#5F584D") + '">' + esc(nd.sub) + '</text>' +
        '</g>'
      );
    }).join("");

    return (
      '<section id="cce-v6-mindmap-cert" class="card mb-2" style="padding:1rem 1.2rem;background:var(--bg-paper);border-left:4px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
      '    <div><div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "CURRICULUM CONCEPT MAP &amp; CERTIFICATE · 十大学科思维导图" : "SƠ ĐỒ 10 HỌC PHẦN &amp; CHỨNG CHỈ HOÀN THÀNH · 十大学科思维导图") + '</div>' +
      '    <h4 style="margin:0.1rem 0 0;font-size:1.08rem;">' + (enM ? "10-Module Learning Map (Click a Node to Filter)" : "Sơ đồ 10 Học phần &amp; 60 Bài giảng (Chọn từng mục để lọc bài)") + '</h4></div>' +
      '    <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">' +
      '      <input type="text" class="form-input" style="max-width:200px;font-size:0.78rem;padding:0.25rem 0.5rem;" value="' + esc(st.studentName) + '" data-v6st-act="cert-name" placeholder="' + (enM ? "Learner name..." : "Tên học viên...") + '" />' +
      '      <button type="button" id="cce-v6-export-cert-btn" class="btn btn-primary btn-sm" data-v6st-act="export-cert">' + (enM ? "Download Certificate (.PNG)" : "Tải Chứng chỉ (.PNG)") + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div style="overflow-x:auto;">' +
      '    <svg viewBox="0 0 780 264" style="width:100%;max-width:860px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Course 10-Module Visual MindMap">' +
      svgLinks +
      '      <ellipse cx="390" cy="130" rx="84" ry="30" fill="#8C2318" stroke="#E5A93C" stroke-width="2" />' +
      '      <text x="390" y="126" text-anchor="middle" font-size="11.5" font-weight="700" fill="#FFFFFF">' + (enM ? "10 MODULES" : "CHƯƠNG TRÌNH") + '</text>' +
      '      <text x="390" y="142" text-anchor="middle" font-size="8.6" fill="#F5E7CE">' + (enM ? "60 Lessons · 24 3D" : "10 Học Phần · 60 Bài") + '</text>' +
      svgNodes +
      '    </svg>' +
      '  </div>' +
      '</section>'
    );
  }

  function exportCertificatePng() {
    if (typeof document === "undefined") return;
    var cv = document.createElement("canvas");
    cv.width = 1200;
    cv.height = 800;
    var ctx = cv.getContext("2d");
    if (!ctx) return;

    ctx.fillStyle = "#FBF9F4";
    ctx.fillRect(0, 0, 1200, 800);
    ctx.strokeStyle = "#8C2318";
    ctx.lineWidth = 10;
    ctx.strokeRect(28, 28, 1144, 744);
    ctx.strokeStyle = "#C59B40";
    ctx.lineWidth = 3;
    ctx.strokeRect(46, 46, 1108, 708);

    ctx.fillStyle = "#8C2318";
    ctx.font = "bold 24px Georgia, serif";
    ctx.textAlign = "center";
    ctx.fillText("CHINESE CULTURE EXPLORER · 中国文化探索", 600, 130);

    ctx.fillStyle = "#1D1B18";
    ctx.font = "bold 46px Georgia, serif";
    ctx.fillText("CERTIFICATE OF ENCYCLOPEDIC COMPLETION", 600, 210);

    ctx.fillStyle = "#5F584D";
    ctx.font = "italic 22px Georgia, serif";
    ctx.fillText("Awarded to Scholar / Cultural Traveler", 600, 285);

    ctx.fillStyle = "#1F6E5C";
    ctx.font = "bold 42px Georgia, serif";
    ctx.fillText(String(st.studentName || "Chinese Culture Explorer"), 600, 355);

    ctx.fillStyle = "#3A352E";
    ctx.font = "20px sans-serif";
    ctx.fillText("Completed 10 Curriculum Modules (60 Sequential Lessons), 24 WebGL 3D Studios,", 600, 435);
    ctx.fillText("120 Honored Brands, 150 Liushu Roots, 16 Heritage Expeditions & 600-MCQ Challenge.", 600, 468);

    ctx.fillStyle = "#8C2318";
    ctx.fillRect(910, 540, 115, 115);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px Georgia, serif";
    ctx.fillText("中国文化", 968, 590);
    ctx.fillText("探索认证", 968, 625);

    ctx.fillStyle = "#5F584D";
    ctx.textAlign = "left";
    ctx.font = "18px monospace";
    ctx.fillText("CHINESE CULTURE EXPLORER · ARCHIVE EDITION · DATE: " + new Date().toISOString().slice(0, 10), 95, 650);

    var a = document.createElement("a");
    a.download = "CCE-Academy-Certificate.png";
    a.href = cv.toDataURL("image/png");
    a.click();
  }

  // --------------------------------------------------------------------------
  // 2. Liushu 100 + False Friends 30 + Rules 12 + SimpTrad 50 + MW 40 + Chengyu 36
  //    + Novel Graphs 4 + Poems 24 + Wenyan 30 + HSK Passages 40 & Tang-Viet 15
  // --------------------------------------------------------------------------
  function renderLiushuAndLiteratureStudio(enM) {
    var lData = window.CCE_V6_LIUSHU_VISUAL || {};
    var litData = window.CCE_V6_LITERATURE_VISUAL || {};
    var chars = lData.visualCharacters100 || lData.visualCharacters36 || [];
    var ff30 = lData.falseFriendsComic30 || [];
    var rules12 = lData.archaicMiddleChineseRules12 || lData.middleChineseRules12 || [];
    var st50 = lData.simpTradAsymmetry50 || [];
    var mw40 = lData.measureWordsVisual40 || [];
    var cy36 = lData.chengyuOrigins36 || [];
    var novels = litData.novelGraphs4 || [];
    var poems = litData.poemPaintingPairs24 || litData.poemPaintingPairs12 || [];
    var wenyan = litData.wenyanSyntaxTokens30 || litData.wenyanTokens20 || [];
    var hsk40 = litData.hskPassages40 || [];
    var hv15 = litData.hanVietPoetryComparison15 || [];
    if (!chars.length && !novels.length) return "";

    var subBar = [
      { id: "chars", lbl: chars.length + " Chữ Lục Thư 4 Thời Kỳ" },
      { id: "ff30", lbl: ff30.length + " Bạn Giả Hán–Việt Comic" },
      { id: "rules12", lbl: rules12.length + " Luật Nhập Thanh Đường–Việt" }
    ];
    if (st50.length) subBar.push({ id: "st50", lbl: st50.length + " Giản–Phồn Bất Đối Xứng" });
    if (mw40.length) subBar.push({ id: "mw40", lbl: mw40.length + " Lượng Từ Hình Khối" });
    if (cy36.length) subBar.push({ id: "cy36", lbl: cy36.length + " Thành Ngữ 3 Khung" });
    subBar.push({ id: "novels", lbl: novels.length + " Đồ Thị Đại Danh Tác" });
    subBar.push({ id: "poems", lbl: poems.length + " Thi Trung Hữu Họa" });
    subBar.push({ id: "wenyan", lbl: wenyan.length + " Hư Từ Văn Ngôn" });
    if (hsk40.length || hv15.length) subBar.push({ id: "hsk_vn", lbl: hsk40.length + " Bài Đọc HSK & " + hv15.length + " Thơ Đường–Việt" });

    var content = "";
    if (st.liushuTab === "chars") {
      var cats = [
        { id: "all", lbl: "Tất cả (" + chars.length + ")" },
        { id: "xiangxing", lbl: "Tượng Hình" },
        { id: "zhishi", lbl: "Chỉ Sự" },
        { id: "huiyi", lbl: "Hội Ý" },
        { id: "xingsheng", lbl: "Hình Thanh" },
        { id: "zhuanzhu", lbl: "Chuyển Chú" },
        { id: "jiajie", lbl: "Giả Tá" }
      ];
      var catAliases = {
        xiangxing: "Tượng hình", zhishi: "Chỉ sự", huiyi: "Hội ý",
        xingsheng: "Hình thanh", zhuanzhu: "Chuyển chú", jiajie: "Giả tá"
      };
      var filteredChars = chars.filter(function (c) {
        if (st.liushuCat === "all") return true;
        var lt = String(c.liushuType || "").toLowerCase();
        var alias = String(catAliases[st.liushuCat] || "").toLowerCase();
        return lt === st.liushuCat || (alias && lt === alias);
      });
      content =
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        cats.map(function (c) {
          return '<button type="button" class="filter-pill ' + (st.liushuCat === c.id ? "active" : "") + '" data-v6st-act="lcat" data-val="' + c.id + '">' + c.lbl + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-3" style="gap:0.7rem;max-height:560px;overflow:auto;">' +
        filteredChars.map(function (c) {
          var mShort = enM ? (c.meaningEn || c.meaningShort) : (c.meaningShort || c.meaningVi || c.meaningEn);
          var evTxt = c.evolution4StagesText || formatEvolution4Stages(c.evolution4Stages);
          return (
            '<article class="flashcard-layer" style="font-size:0.8rem;display:flex;flex-direction:column;gap:0.3rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;">' +
            '    <span class="badge badge-gold">' + esc((c.liushuType || "").toUpperCase()) + ' · Bộ ' + esc(c.radical) + '</span>' +
            '    <span>' + spk(c.zh) + ' ' + srsBtn(c.zh, c.pinyin, c.hanViet, mShort, c.meaningEn || mShort) + '</span>' +
            '  </div>' +
            '  <div style="display:flex;align-items:baseline;gap:0.5rem;">' +
            '    <span class="hanzi" style="font-size:2rem;color:var(--imperial-red);font-weight:800;">' + esc(c.zh) + '</span>' +
            '    <div><strong>' + esc(c.hanViet) + (c.hanVietOldVi ? ' / ' + esc(c.hanVietOldVi) : '') + '</strong> (' + esc(c.pinyin) + ')<br><span class="text-xs" style="color:var(--text-muted);">Phồn: ' + esc(c.trad) + ' · ' + esc(mShort) + '</span></div>' +
            '  </div>' +
            '  <div style="font-size:0.76rem;padding:0.35rem 0.5rem;background:var(--bg-paper);border-left:2px solid var(--imperial-red);"><strong style="color:var(--imperial-red);">Bộ Ý:</strong> ' + esc(c.semanticPart) + ' · <strong style="color:var(--jade-green);">Thanh:</strong> ' + esc(c.phoneticPart) + '</div>' +
            '  <div style="font-size:0.75rem;color:var(--text-secondary);"><strong>4 Thời kỳ:</strong> ' + esc(evTxt) + '</div>' +
            (c.culturalMnemonicVi ? '<div style="font-size:0.74rem;color:var(--text-muted);">' + esc(c.culturalMnemonicVi) + '</div>' : "") +
            (c.b2bSample ? '<div style="font-size:0.76rem;color:var(--jade-green);"><strong>B2B:</strong> ' + esc(c.b2bSample) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "ff30") {
      content =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:560px;overflow:auto;">' +
        ff30.map(function (f) {
          return (
            '<article class="card" style="padding:0.8rem 0.95rem;font-size:0.8rem;display:flex;flex-direction:column;gap:0.35rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.35rem;color:var(--imperial-red);">' + esc(f.zh) + ' <span class="pinyin text-xs">' + esc(f.pinyin) + '</span></strong><span>' + spk(f.zh) + ' ' + srsBtn(f.zh, f.pinyin, f.panelAVietTrap, f.panelBTrueZh, f.meaningEn) + '</span></div>' +
            '  <div class="grid grid-2" style="gap:0.45rem;">' +
            '    <div style="padding:0.45rem;background:var(--bg-accent-soft);border-left:3px solid var(--imperial-red);"><strong>Ô A · Bẫy Việt:</strong><br>' + esc(f.panelAVietTrap || f.comicPanelA_MisreadVi) + '</div>' +
            '    <div style="padding:0.45rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);"><strong style="color:var(--jade-green);">Ô B · Nghĩa Chuẩn TQ:</strong><br>' + esc(f.panelBTrueZh || f.comicPanelB_RealMeaningVi) + '</div>' +
            '  </div>' +
            '  <div style="font-size:0.76rem;color:var(--text-secondary);">' + esc(f.tipVi) + '</div>' +
            (f.b2bContractWarningVi ? '<div style="font-size:0.74rem;color:var(--imperial-red);">' + esc(f.b2bContractWarningVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "rules12") {
      content =
        '<div class="grid grid-2" style="gap:0.7rem;">' +
        rules12.map(function (r) {
          return '<div class="flashcard-layer" style="font-size:0.8rem;"><strong style="color:var(--imperial-red);">' + esc(enM ? (r.ruleNameEn || r.titleVi) : (r.titleVi || r.ruleNameVi)) + '</strong><p style="margin:0.3rem 0;">' + esc(r.ruleVi) + '</p><div style="color:var(--jade-green);font-size:0.77rem;"><strong>Ví dụ:</strong> ' + esc(r.examplesVi) + '</div>' + (r.historicalPhonologyNoteVi ? '<div style="font-size:0.74rem;color:var(--text-muted);margin-top:0.2rem;">' + esc(r.historicalPhonologyNoteVi) + '</div>' : "") + '</div>';
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "st50") {
      content =
        '<div class="grid grid-3" style="gap:0.7rem;max-height:560px;overflow:auto;">' +
        st50.map(function (x) {
          return (
            '<article class="flashcard-layer" style="font-size:0.79rem;display:flex;flex-direction:column;gap:0.25rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.45rem;color:var(--imperial-red);">' + esc(x.simp) + ' → ' + esc((x.trads || []).join(" / ")) + '</strong><span>' + spk(x.simp) + ' ' + srsBtn(x.simp, x.simp, (x.trads || []).join("/"), x.diffVi, x.diffEn) + '</span></div>' +
            '  <div><strong>Đối chiếu Phồn thể:</strong> ' + esc(enM ? x.diffEn : x.diffVi) + '</div>' +
            (x.classicalEtymologyVi ? '<div style="font-size:0.74rem;color:var(--text-secondary);">' + esc(x.classicalEtymologyVi) + '</div>' : "") +
            (x.taiwanHkSignageTrapVi ? '<div style="font-size:0.73rem;color:var(--jade-green);">' + esc(x.taiwanHkSignageTrapVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "mw40") {
      content =
        '<div class="grid grid-3" style="gap:0.7rem;max-height:560px;overflow:auto;">' +
        mw40.map(function (m) {
          return (
            '<article class="flashcard-layer" style="font-size:0.79rem;display:flex;flex-direction:column;gap:0.25rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.45rem;color:var(--imperial-red);">' + esc(m.zh) + ' <span class="pinyin text-xs">' + esc(m.pinyin) + '</span></strong><span>' + spk(m.exampleZh) + ' ' + srsBtn(m.zh, m.pinyin, m.shapeVi, m.exampleZh, m.usageEn) + '</span></div>' +
            '  <div><strong>Hình khối:</strong> ' + esc(enM ? m.usageEn : m.shapeVi) + '</div>' +
            '  <div class="hanzi" style="color:var(--jade-green);font-size:0.82rem;">' + esc(m.exampleZh) + '</div>' +
            (m.cognitiveGeometryVi ? '<div style="font-size:0.74rem;color:var(--text-muted);">' + esc(m.cognitiveGeometryVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "cy36") {
      content =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:560px;overflow:auto;">' +
        cy36.map(function (c) {
          var panels = c.storyboard3 || [];
          return (
            '<article class="card" style="padding:0.8rem 0.95rem;font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.25rem;color:var(--imperial-red);">' + esc(c.zh) + ' <span class="pinyin text-xs">' + esc(c.pinyin) + '</span> · ' + esc(c.hanViet) + '</strong><span>' + spk(c.zh) + ' ' + srsBtn(c.zh, c.pinyin, c.hanViet, c.b2bUsageVi, c.source) + '</span></div>' +
            '  <div class="text-xs" style="color:var(--text-muted);margin-bottom:0.35rem;">Nguồn điển tích: ' + esc(c.source) + '</div>' +
            '  <div class="grid grid-3" style="gap:0.35rem;margin-bottom:0.35rem;">' +
            panels.map(function (pTxt, pIdx) {
              return '<div style="padding:0.35rem;background:var(--bg-paper);border-top:2px solid var(--antique-gold);font-size:0.74rem;"><strong>Khung ' + (pIdx + 1) + ':</strong> ' + esc(pTxt) + '</div>';
            }).join("") +
            '  </div>' +
            '  <div style="color:var(--jade-green);"><strong>Ứng dụng B2B:</strong> ' + esc(c.b2bUsageVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "novels") {
      var curN = novels[st.novelIdx % novels.length] || novels[0];
      var nodeMap = {};
      var cx = 320, cy = 145, rad = 112;
      var nodes = curN ? curN.nodes : [];
      for (var ni = 0; ni < nodes.length; ni++) {
        var ang = (ni / Math.max(1, nodes.length)) * Math.PI * 2 - Math.PI / 2;
        nodeMap[nodes[ni].id] = { x: Math.round(cx + Math.cos(ang) * rad * 1.45), y: Math.round(cy + Math.sin(ang) * rad) };
      }
      var edges = curN ? curN.edges : [];
      var svgEdges = edges.map(function (eg) {
        var a = nodeMap[eg.from], b = nodeMap[eg.to];
        if (!a || !b) return "";
        return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="#B59B6B" stroke-width="1.6" />';
      }).join("");
      var svgNodes = nodes.map(function (nd) {
        var pos = nodeMap[nd.id];
        var lblZh = nd.zh || nd.labelZh || "";
        var lblVi = (nd.vi || nd.labelVi || "").split("(")[0].trim();
        return (
          '<g>' +
          '  <rect x="' + (pos.x - 54) + '" y="' + (pos.y - 17) + '" width="108" height="34" rx="6" fill="#FBF9F4" stroke="#8C2318" stroke-width="1.5" />' +
          '  <text x="' + pos.x + '" y="' + (pos.y - 2) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#8C2318">' + esc(lblZh) + '</text>' +
          '  <text x="' + pos.x + '" y="' + (pos.y + 11) + '" text-anchor="middle" font-size="8.2" fill="#1D1B18">' + esc(lblVi.slice(0, 18)) + '</text>' +
          '</g>'
        );
      }).join("");

      content =
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        novels.map(function (nv, nIdx) {
          return '<button type="button" class="filter-pill ' + (st.novelIdx === nIdx ? "active" : "") + '" data-v6st-act="novel" data-val="' + nIdx + '">' + esc(nv.titleZh) + '</button>';
        }).join("") +
        '</div>' +
        (curN ? (
          '<div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
          '  <strong style="color:var(--imperial-red);">' + esc(enM ? curN.titleEn : curN.titleVi) + '</strong>' +
          (curN.coreThemesVi ? '<p style="font-size:0.78rem;margin:0.25rem 0;color:var(--text-secondary);">' + esc(curN.coreThemesVi) + '</p>' : "") +
          '  <svg viewBox="0 0 640 295" style="width:100%;max-width:680px;height:auto;display:block;margin:0.55rem auto;">' + svgEdges + svgNodes + '</svg>' +
          '  <div class="grid grid-2" style="gap:0.4rem;margin-top:0.5rem;">' +
          edges.map(function (eg) {
            return '<div style="font-size:0.76rem;padding:0.3rem 0.5rem;border:1px solid var(--hairline);"><strong>' + esc(eg.from) + ' ↔ ' + esc(eg.to) + ':</strong> ' + esc(eg.rel || eg.relationVi) + '</div>';
          }).join("") +
          '  </div>' +
          '</div>'
        ) : "");
    } else if (st.liushuTab === "poems") {
      content =
        '<div class="grid grid-2" style="gap:0.8rem;max-height:560px;overflow:auto;">' +
        poems.map(function (pm) {
          var pTitle = pm.title || ((pm.titleVi || "") + " (" + (pm.titleZh || "") + ")");
          return (
            '<article class="card" style="padding:0.85rem 1rem;font-size:0.8rem;">' +
            '  <div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:150px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.5rem;cursor:pointer;" data-action="open-custom-image" data-src="' + esc(pm.image) + '" data-caption="' + esc(pTitle) + '">' +
            '    <img src="' + esc(pm.image) + '" alt="' + esc(pTitle) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.onerror=null;this.src=\'assets/images/paintings/01_luoshenfu_tu.jpg\';" />' +
            '  </div>' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong style="color:var(--imperial-red);">' + esc(pTitle) + '</strong>' + spk(pm.poemZh) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);">' + esc(pm.authorVi || pm.poet) + ' · ' + esc(pm.epithetVi || pm.hanViet) + '</div>' +
            '  <div class="hanzi" style="font-size:1rem;margin:0.35rem 0;font-weight:700;">' + esc(pm.poemZh) + '</div>' +
            '  <p style="margin:0.3rem 0;color:var(--text-secondary);">' + esc(pm.translateVi || pm.poemVi) + '</p>' +
            '  <div style="font-size:0.75rem;color:var(--jade-green);"><strong>Thi – Họa:</strong> ' + esc(pm.visualNoteVi) + ' (' + esc(pm.pingZeNote || pm.pingZePattern) + ')</div>' +
            (pm.brushworkAndCompositionVi ? '<div style="font-size:0.73rem;color:var(--text-muted);margin-top:0.2rem;">' + esc(pm.brushworkAndCompositionVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "wenyan") {
      content =
        '<div class="grid grid-2" style="gap:0.7rem;max-height:560px;overflow:auto;">' +
        wenyan.map(function (w) {
          var cEx = w.classicalExample || w.classicalExampleZh || "";
          var mEq = w.modernMandarinEq || w.vernacularHskEquivalentZh || "";
          return (
            '<div class="flashcard-layer" style="font-size:0.8rem;border-left:4px solid ' + esc(w.colorHex) + ';">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.35rem;color:' + esc(w.colorHex) + ';">' + esc(w.tokenZh) + ' <span class="pinyin text-xs">' + esc(w.pinyin) + '</span> · ' + esc(w.hanViet) + '</strong><span>' + spk(cEx) + ' ' + srsBtn(w.tokenZh, w.pinyin, w.hanViet, w.functionVi, mEq) + '</span></div>' +
            '  <span class="badge badge-outline" style="margin:0.2rem 0;">' + esc(w.category) + (w.classicalSource ? ' · ' + esc(w.classicalSource) : '') + '</span>' +
            '  <p style="margin:0.25rem 0;">' + esc(enM ? (w.functionEn || w.functionVi) : w.functionVi) + '</p>' +
            '  <div class="hanzi" style="font-size:0.84rem;color:var(--jade-green);">' + esc(cEx) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);">Bạch thoại tương đương: ' + esc(mEq) + '</div>' +
            (w.fullTranslateVi ? '<div class="text-xs" style="margin-top:0.2rem;"><strong>Dịch nghĩa:</strong> ' + esc(enM ? (w.fullTranslateEn || w.fullTranslateVi) : w.fullTranslateVi) + '</div>' : "") +
            (w.commonExamTrapVi ? '<div class="text-xs" style="color:var(--imperial-red);margin-top:0.2rem;">' + esc(w.commonExamTrapVi) + '</div>' : "") +
            '</div>'
          );
        }).join("") +
        '</div>';
    } else {
      var lvs = ["all", "HSK4", "HSK5", "HSK6", "HSK7-9"];
      var visHsk = hsk40.filter(function (x) { return st.hskLvFilter === "all" || x.hskLevel === st.hskLvFilter; });
      content =
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        lvs.map(function (lv) {
          return '<button type="button" class="filter-pill ' + (st.hskLvFilter === lv ? "active" : "") + '" data-v6st-act="hsklv" data-val="' + lv + '">' + (lv === "all" ? (enM ? "All (" + hsk40.length + " Passages)" : "Tất cả (" + hsk40.length + " Bài đọc)") : lv) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.75rem;max-height:460px;overflow:auto;margin-bottom:1.15rem;">' +
        visHsk.map(function (pa) {
          var qObj = pa.comprehensionQuiz || {};
          return (
            '<article class="card" style="padding:0.85rem 0.95rem;font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-gold">' + esc(pa.hskLevel) + '</span>' + spk(pa.passageZh) + '</div>' +
            '  <strong style="color:var(--imperial-red);">' + esc(enM ? pa.titleEn : pa.titleVi) + ' — <span class="hanzi">' + esc(pa.titleZh) + '</span></strong>' +
            '  <p class="hanzi" style="margin:0.35rem 0 0.15rem;font-size:0.88rem;">' + esc(pa.passageZh) + '</p>' +
            '  <div class="pinyin text-xs" style="margin-bottom:0.25rem;">' + esc(pa.passagePinyin) + '</div>' +
            '  <p style="margin:0.25rem 0;color:var(--text-secondary);">' + esc(enM ? pa.translationEn : pa.translationVi) + '</p>' +
            '  <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin:0.3rem 0;">' +
            (pa.keyWords || []).map(function (kw) {
              return '<span class="badge badge-outline" style="font-size:0.7rem;">' + esc(kw.zh + " · " + (enM ? (kw.en || kw.vi) : (kw.vi || kw.hanViet))) + '</span>';
            }).join("") +
            '  </div>' +
            (qObj.qVi ? (
              '  <details class="ed-details" style="font-size:0.76rem;margin-top:0.25rem;"><summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Comprehension Check →" : "Kiểm tra Đọc hiểu →") + '</summary><div style="padding:0.35rem 0.45rem;background:var(--bg-paper);"><strong>' + esc(enM ? qObj.qEn : qObj.qVi) + '</strong><br><span style="color:var(--imperial-red);">' + (enM ? "Answer: " : "Đáp án: ") + esc((enM ? (qObj.optionsEn || qObj.optionsVi) : (qObj.optionsVi || []))[qObj.ansIdx || 0] || (enM ? qObj.ansEn : qObj.ansVi) || "") + '</span> — ' + esc((enM ? (qObj.explainEn || qObj.ansEn) : (qObj.explainVi || qObj.ansVi)) || "") + '</div></details>'
            ) : "") +
            '</article>'
          );
        }).join("") +
        '</div>' +
        (hv15.length ? (
          '<h4 style="margin:0.6rem 0 0.5rem;color:var(--imperial-red);">' + (enM ? (hv15.length + " Tang–Song &amp; Vietnamese Classical Poetry Parallels") : (hv15.length + " Cặp Đối Sánh Thi Ca Đường–Tống ↔ Thơ Hán/Nôm Việt Nam")) + '</h4>' +
          '<div class="grid grid-2" style="gap:0.75rem;max-height:420px;overflow:auto;">' +
          hv15.map(function (hv) {
            return (
              '<article class="flashcard-layer" style="font-size:0.79rem;">' +
              '  <div style="display:flex;justify-content:space-between;"><strong style="color:var(--imperial-red);">' + esc(hv.tangPoet) + ' ↔ ' + esc(hv.vietPoet) + '</strong>' + spk(hv.tangLineZh + "。" + hv.vietLineZh) + '</div>' +
              '  <div class="hanzi" style="margin:0.25rem 0;"><strong>' + (enM ? "Tang–Song:" : "Đường–Tống:") + '</strong> ' + esc(hv.tangLineZh) + '</div>' +
              '  <div class="hanzi" style="color:var(--jade-green);margin-bottom:0.25rem;"><strong>' + (enM ? "Vietnam:" : "Việt Nam:") + '</strong> ' + esc(hv.vietLineZh) + '</div>' +
              '  <p style="margin:0;color:var(--text-secondary);">' + esc(enM ? (hv.comparisonEn || hv.comparisonVi) : hv.comparisonVi) + '</p>' +
              (hv.tonalAndImageryAnalysisVi ? '<div style="font-size:0.73rem;color:var(--text-muted);margin-top:0.2rem;">' + esc(enM ? (hv.tonalAndImageryAnalysisEn || hv.tonalAndImageryAnalysisVi) : hv.tonalAndImageryAnalysisVi) + '</div>' : "") +
              '</article>'
            );
          }).join("") +
          '</div>'
        ) : "");
    }

    var v7yt = (window.CCE_V7_ENCYCLOPEDIA && window.CCE_V7_ENCYCLOPEDIA.youtubeVideos12) || [];
    var litYt = v7yt.find ? v7yt.find(function (x) { return x.youtubeId === "QfU7sU_iCQM"; }) : null;
    return (
      '<section id="cce-v6-liushu-studio" style="margin-top:1.35rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? ("LIUSHU &amp; LITERARY LAB · " + chars.length + " CHARACTERS, " + ff30.length + " FALSE FRIENDS, " + novels.length + " GRAPHS &amp; " + hsk40.length + " HSK") : ("CHIẾT TỰ &amp; VĂN HỌC · " + chars.length + " LỤC THƯ, " + ff30.length + " BẠN GIẢ HÁN–VIỆT, " + st50.length + " GIẢN–PHỒN, " + novels.length + " ĐỒ THỊ &amp; " + hsk40.length + " HSK")) + '</div>' +
      '  <div class="filter-bar" style="margin:0.5rem 0 0.85rem;">' +
      subBar.map(function (sb) {
        return '<button type="button" class="filter-pill ' + (st.liushuTab === sb.id ? "active" : "") + '" data-v6st-act="ltab" data-val="' + sb.id + '">' + sb.lbl + '</button>';
      }).join("") +
      '  </div>' +
      content +
      (litYt ? '<div style="margin-top:0.85rem;max-width:460px;">' + renderYoutubeCard(litYt, enM) + '</div>' : "") +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. Cosmology SVG Studios: 24 Solar Wheel, Wuxing, 48 Herbs, 12 Microclimates, 28 Stars + 9 Constitutions
  // --------------------------------------------------------------------------
  function renderCosmologyVisualWheel(enM) {
    var cData = window.CCE_V6_COSMOLOGY_VISUAL || {};
    var solars = cData.solarTermsPhenology24 || cData.solarTerms24 || [];
    var ziwu = cData.ziwuHours12 || [];
    var wx = cData.wuxingNodes5 || [];
    var herbs = cData.culinaryHerbs48 || cData.herbarium24 || [];
    var micros = cData.historicalMicroclimateCases12 || cData.microclimateCases12 || [];
    var stars28 = cData.constellationsCulture28 || [];
    var const9 = cData.nineConstitutionsCulturalV6 || [];
    var cases12 = cData.cosmoCasebookAdditional12V6 || [];
    if (!solars.length) return "";

    var notice = (cData.epistemicNotice && (enM ? cData.epistemicNotice.en : cData.epistemicNotice.vi)) || "";
    var curSolar = solars[st.solarIdx % solars.length] || solars[0];

    var hr = new Date().getHours();
    var ziwuIdx = Math.floor(((hr + 1) % 24) / 2);
    var curZiwu = ziwu[ziwuIdx] || ziwu[0];

    var curWx = wx[0];
    for (var wi = 0; wi < wx.length; wi++) {
      if (wx[wi].el === st.wuxingEl) { curWx = wx[wi]; break; }
    }

    var solarSvgNodes = solars.map(function (s, idx) {
      var a = (idx / 24) * Math.PI * 2 - Math.PI / 2;
      var x = Math.round(145 + Math.cos(a) * 112);
      var y = Math.round(145 + Math.sin(a) * 112);
      var act = st.solarIdx === idx;
      return (
        '<g style="cursor:pointer;" data-v6st-act="solar" data-val="' + idx + '">' +
        '  <circle cx="' + x + '" cy="' + y + '" r="' + (act ? 16 : 12) + '" fill="' + (act ? "#8C2318" : "#FBF9F4") + '" stroke="#C59B40" stroke-width="1.5" />' +
        '  <text x="' + x + '" y="' + (y + 3) + '" text-anchor="middle" font-size="8.5" font-weight="700" fill="' + (act ? "#FFFFFF" : "#1D1B18") + '">' + esc(s.zh) + '</text>' +
        '</g>'
      );
    }).join("");

    var wxCoords = [
      { el: "Hỏa (火)", x: 145, y: 36, c: "#8C2318" },
      { el: "Thổ (土)", x: 245, y: 108, c: "#A88940" },
      { el: "Kim (金)", x: 205, y: 225, c: "#646B73" },
      { el: "Thủy (水)", x: 85, y: 225, c: "#223A52" },
      { el: "Mộc (木)", x: 45, y: 108, c: "#1F6E5C" }
    ];
    var wxSvgNodes = wxCoords.map(function (pt) {
      var act = st.wuxingEl === pt.el;
      return (
        '<g style="cursor:pointer;" data-v6st-act="wx" data-val="' + esc(pt.el) + '">' +
        '  <circle cx="' + pt.x + '" cy="' + pt.y + '" r="' + (act ? 26 : 21) + '" fill="' + (act ? pt.c : "#FBF9F4") + '" stroke="' + pt.c + '" stroke-width="2.5" />' +
        '  <text x="' + pt.x + '" y="' + (pt.y + 4) + '" text-anchor="middle" font-size="10.5" font-weight="700" fill="' + (act ? "#FFFFFF" : pt.c) + '">' + esc(pt.el.split(" ")[0]) + '</text>' +
        '</g>'
      );
    }).join("");

    var body = "";
    if (st.cosmoSub === "wheel") {
      var solarName = curSolar.vi || curSolar.nameVi || "";
      body = (
        '<div class="grid grid-2" style="gap:1rem;">' +
        '  <div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
        '    <strong style="color:var(--imperial-red);">Đĩa Xoay 24 Tiết Khí Nông Lịch UNESCO (Nhấp chọn từng tiết khí)</strong>' +
        '    <svg viewBox="0 0 290 290" style="width:100%;max-width:300px;height:auto;display:block;margin:0.5rem auto;">' +
        '      <circle cx="145" cy="145" r="112" fill="none" stroke="#DFD5C2" stroke-width="1.5" />' +
        '      <circle cx="145" cy="145" r="48" fill="#F4EEE1" stroke="#C59B40" stroke-width="1.5" />' +
        '      <text x="145" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#8C2318">' + esc(curSolar.zh) + '</text>' +
        '      <text x="145" y="158" text-anchor="middle" font-size="10" fill="#1D1B18">' + esc(solarName + " (" + (curSolar.deg || curSolar.solarLongitudeDeg) + "°)") + '</text>' +
        solarSvgNodes +
        '    </svg>' +
        '    <div style="font-size:0.8rem;padding:0.55rem;background:var(--bg-surface);border:1px solid var(--hairline);">' +
        '      <strong>' + esc(curSolar.zh + " · " + solarName) + ' (~' + esc(curSolar.dateApprox || curSolar.gregorianApproxDate) + ')</strong><br>' +
        '      <span style="color:var(--jade-green);"><strong>Tam Hậu:</strong> ' + esc(curSolar.tamHau || (curSolar.threePhenologiesVi || []).join(" | ")) + '</span><br>' +
        '      <span>' + esc(curSolar.descVi || curSolar.seasonalTeaFoodVi) + '</span>' +
        (curSolar.vietnamDeltaComparisonVi ? '<div style="font-size:0.74rem;color:var(--text-muted);margin-top:0.25rem;">' + esc(curSolar.vietnamDeltaComparisonVi) + '</div>' : "") +
        '    </div>' +
        '  </div>' +
        '  <div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
        '    <strong style="color:var(--jade-green);">Ngũ Giác Ngũ Hành Động (Sinh Ngoài · Khắc Trong) &amp; Giờ Tử Ngọ</strong>' +
        '    <svg viewBox="0 0 290 265" style="width:100%;max-width:290px;height:auto;display:block;margin:0.45rem auto;">' +
        '      <polygon points="145,36 245,108 205,225 85,225 45,108" fill="none" stroke="#1F6E5C" stroke-width="2" />' +
        '      <polygon points="145,36 205,225 45,108 245,108 85,225" fill="none" stroke="#8C2318" stroke-width="1.3" stroke-dasharray="4 3" />' +
        wxSvgNodes +
        '    </svg>' +
        (curWx ? (
          '<div style="font-size:0.79rem;padding:0.55rem;background:var(--bg-surface);border-left:4px solid ' + esc(curWx.color) + ';">' +
          '  <strong>' + esc(curWx.el) + '</strong> · Mùa ' + esc(curWx.season) + ' · Phương ' + esc(curWx.dir) + ' · Ngũ Âm ' + esc(curWx.sound) + ' · Vị ' + esc(curWx.flavor) + '<br>' +
          '  <span style="color:var(--jade-green);">' + esc(curWx.gen) + '</span> · <span style="color:var(--imperial-red);">' + esc(curWx.ctrl) + '</span>' +
          '</div>'
        ) : "") +
        (curZiwu ? (
          '<div style="font-size:0.78rem;margin-top:0.5rem;padding:0.5rem;background:var(--bg-accent-soft);border:1px solid var(--hairline);">' +
          '  <strong>Canh giờ Hiện tại (' + esc(curZiwu.nameVi + " · " + curZiwu.zh + " · " + curZiwu.range) + '):</strong> ' + esc(curZiwu.culturalNoteVi) +
          '</div>'
        ) : "") +
        '  </div>' +
        '</div>'
      );
    } else if (st.cosmoSub === "herbs") {
      body =
        '<div class="grid grid-3" style="gap:0.75rem;max-height:560px;overflow:auto;">' +
        herbs.map(function (h) {
          return (
            '<article class="flashcard-layer" style="font-size:0.79rem;display:flex;flex-direction:column;gap:0.28rem;">' +
            '  <div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:130px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);"><img src="' + esc(h.image) + '" alt="' + esc(h.nameVi) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-jade">' + esc(h.wuxingElement || "Thảo mộc Ẩm thực") + '</span><span>' + spk(h.zh) + ' ' + srsBtn(h.zh, h.pinyin, h.nameVi, h.culinaryVi, h.latin) + '</span></div>' +
            '  <strong class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);">' + esc(h.zh) + ' <span class="pinyin text-xs">' + esc(h.pinyin) + '</span></strong>' +
            '  <strong>' + esc(h.nameVi) + ' (<em>' + esc(h.latin || h.latinName) + '</em>)</strong>' +
            '  <div style="font-size:0.75rem;color:var(--jade-green);">' + esc(h.nature || h.propertyNatureVi) + '</div>' +
            '  <div style="color:var(--text-secondary);">' + esc(h.culinaryVi || h.culinaryDishVi) + '</div>' +
            (h.vietnamCulinaryParallelVi ? '<div style="font-size:0.73rem;color:var(--text-secondary);">' + esc(h.vietnamCulinaryParallelVi) + '</div>' : "") +
            '  <div style="font-size:0.71rem;color:var(--text-muted);">' + esc(h.nonClinicalReminderVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.cosmoSub === "stars9") {
      body =
        '<div class="grid grid-2" style="gap:1rem;margin-bottom:1rem;">' +
        '  <div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
        '    <strong style="color:var(--imperial-red);">Tứ Tượng &amp; ' + stars28.length + ' Nhị Thập Bát Tú Hoàng Đạo</strong>' +
        '    <svg viewBox="0 0 320 200" style="width:100%;max-width:340px;height:auto;display:block;margin:0.5rem auto;">' +
        '      <ellipse cx="160" cy="100" rx="135" ry="76" fill="none" stroke="#C59B40" stroke-width="1.6" stroke-dasharray="4 3" />' +
        '      <circle cx="160" cy="100" r="28" fill="#8C2318" />' +
        '      <text x="160" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#FFFFFF">28 TÚ</text>' +
        '      <text x="160" y="110" text-anchor="middle" font-size="7" fill="#F5E7CE">Thiên Văn Cổ</text>' +
        '      <rect x="110" y="6" width="100" height="24" rx="4" fill="#8C2318" /><text x="160" y="21" text-anchor="middle" font-size="8.5" font-weight="700" fill="#FFFFFF">Nam Chu Tước (7)</text>' +
        '      <rect x="110" y="170" width="100" height="24" rx="4" fill="#223A52" /><text x="160" y="185" text-anchor="middle" font-size="8.5" font-weight="700" fill="#FFFFFF">Bắc Huyền Vũ (7)</text>' +
        '      <rect x="6" y="88" width="90" height="24" rx="4" fill="#1F6E5C" /><text x="51" y="103" text-anchor="middle" font-size="8.5" font-weight="700" fill="#FFFFFF">Đông Thanh Long</text>' +
        '      <rect x="224" y="88" width="90" height="24" rx="4" fill="#646B73" /><text x="269" y="103" text-anchor="middle" font-size="8.5" font-weight="700" fill="#FFFFFF">Tây Bạch Hổ</text>' +
        '    </svg>' +
        '    <div style="max-height:360px;overflow:auto;display:grid;gap:0.4rem;">' +
        stars28.map(function (stItem) {
          return '<div class="flashcard-layer" style="font-size:0.76rem;padding:0.45rem 0.6rem;"><strong>' + esc(stItem.zh + " · " + stItem.hanViet + " (" + stItem.pinyin + ")") + '</strong> <span class="badge badge-outline">' + esc(stItem.symbolGroup + " · " + stItem.iauCounterpart) + '</span><br>' + esc(stItem.noteVi) + '</div>';
        }).join("") +
        '    </div>' +
        '  </div>' +
        '  <div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
        '    <strong style="color:var(--jade-green);">' + const9.length + ' Thể Chất Văn Hóa Dưỡng Sinh Cổ Truyền (Phi Lâm Sàng)</strong>' +
        '    <div style="max-height:560px;overflow:auto;display:grid;gap:0.5rem;margin-top:0.5rem;">' +
        const9.map(function (ct) {
          return '<div class="flashcard-layer" style="font-size:0.78rem;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(ct.zh + " · " + ct.hanViet) + '</strong> ' + spk(ct.zh) + '<p style="margin:0.2rem 0;">' + esc(enM ? ct.culturalSummaryEn : ct.culturalSummaryVi) + '</p><div style="color:var(--jade-green);font-size:0.74rem;">' + esc(ct.seasonalTeaAndSoupVi || "") + '</div><div style="color:var(--text-muted);font-size:0.71rem;">' + esc(ct.strictNonClinicalBoundaryVi || "") + '</div></div>';
        }).join("") +
        '    </div>' +
        '  </div>' +
        '</div>';
    } else if (st.cosmoSub === "cases12") {
      body =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:560px;overflow:auto;">' +
        cases12.map(function (cs) {
          return (
            '<article class="card" style="padding:0.85rem 1rem;font-size:0.8rem;">' +
            '  <strong style="color:var(--imperial-red);">' + esc(enM ? cs.titleEn : cs.titleVi) + '</strong>' +
            '  <p style="margin:0.3rem 0;">' + esc(enM ? cs.summaryEn : cs.summaryVi) + '</p>' +
            (cs.crossSystemLinkVi ? '<div style="font-size:0.75rem;color:var(--jade-green);">' + esc(cs.crossSystemLinkVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:560px;overflow:auto;">' +
        micros.map(function (m) {
          var sDeg = m.summerSunAngleDeg || 73;
          var wDeg = m.winterSunAngleDeg || 26;
          return (
            '<article class="card" style="padding:0.85rem 1rem;font-size:0.8rem;">' +
            '  <strong style="color:var(--imperial-red);">' + esc(enM ? m.titleEn : m.titleVi) + '</strong>' +
            '  <svg viewBox="0 0 260 66" style="width:100%;max-width:280px;height:auto;margin:0.35rem 0;">' +
            '    <rect x="2" y="2" width="256" height="62" rx="4" fill="#FBF9F4" stroke="#DFD5C2" />' +
            '    <line x1="20" y1="54" x2="115" y2="12" stroke="#8C2318" stroke-width="1.5" stroke-dasharray="3 2" />' +
            '    <line x1="20" y1="54" x2="115" y2="38" stroke="#A88940" stroke-width="1.5" />' +
            '    <text x="122" y="20" font-size="8.5" fill="#8C2318">Nắng Hạ: ' + esc(sDeg) + '°</text>' +
            '    <text x="122" y="36" font-size="8.5" fill="#6E5423">Nắng Đông: ' + esc(wDeg) + '°</text>' +
            '    <text x="122" y="52" font-size="8" fill="#1F6E5C">Gió chính: ' + esc((m.prevailingWindDirection || "Đông Nam / Bắc").slice(0, 26)) + '</text>' +
            '  </svg>' +
            '  <p style="margin:0.2rem 0;color:var(--text-muted);"><strong>Thách thức Khí hậu:</strong> ' + esc(m.challengeVi || m.climateChallengeVi) + '</p>' +
            '  <p style="margin:0.2rem 0;"><strong>Cơ chế Kiến trúc Cổ:</strong> ' + esc(m.mechanismVi || m.architecturalMechanismVi) + '</p>' +
            '  <div style="color:var(--jade-green);font-size:0.76rem;"><strong>Nguyên lý Vật lý Hiện đại:</strong> ' + esc(m.physicsVi || m.modernPhysicsPrincipleVi) + '</div>' +
            (m.vietnamArchitecturalComparisonVi ? '<div style="font-size:0.74rem;color:var(--text-secondary);margin-top:0.2rem;">' + esc(m.vietnamArchitecturalComparisonVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    }

    var v7ytCosmo = (window.CCE_V7_ENCYCLOPEDIA && window.CCE_V7_ENCYCLOPEDIA.youtubeVideos12) || [];
    var cosmoYt = v7ytCosmo.find ? v7ytCosmo.find(function (x) { return x.youtubeId === "qTrd010vMp8"; }) : null;
    return (
      '<section id="cce-v6-cosmo-studio" style="margin-top:1.4rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? ("SOLAR TERMS, 28 LUNAR MANSIONS, WUXING, " + herbs.length + " CULINARY HERBS &amp; " + micros.length + " MICROCLIMATES") : ("ĐĨA 24 TIẾT KHÍ, 28 NHỊ THẬP BÁT TÚ, NGŨ HÀNH, " + herbs.length + " THẢO MỘC ẨM THỰC &amp; " + micros.length + " VI KHÍ HẬU")) + '</div>' +
      '  <div class="epistemic-box critical" style="margin:0.45rem 0 0.75rem;font-size:0.79rem;">' + esc(notice) + '</div>' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "wheel" ? "active" : "") + '" data-v6st-act="csub" data-val="wheel">' + (enM ? "24 Solar Terms &amp; Wuxing Wheel" : "Đĩa 24 Tiết Khí &amp; Ngũ Hành SVG") + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "herbs" ? "active" : "") + '" data-v6st-act="csub" data-val="herbs">' + (enM ? (herbs.length + " Culinary Botanicals") : ("Herbarium " + herbs.length + " Vị Thực Dưỡng")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "micro" ? "active" : "") + '" data-v6st-act="csub" data-val="micro">' + (enM ? (micros.length + " Passive Microclimates") : (micros.length + " Kiến Trúc Vi Khí Hậu Cổ")) + '</button>' +
      (stars28.length ? '<button type="button" class="filter-pill ' + (st.cosmoSub === "stars9" ? "active" : "") + '" data-v6st-act="csub" data-val="stars9">' + (enM ? "28 Mansions &amp; 9 Constitutions" : "28 Nhị Thập Bát Tú &amp; 9 Thể Chất") + '</button>' : "") +
      (cases12.length ? '<button type="button" class="filter-pill ' + (st.cosmoSub === "cases12" ? "active" : "") + '" data-v6st-act="csub" data-val="cases12">' + (enM ? (cases12.length + " Science &amp; Astronomy Notes") : (cases12.length + " Chuyên Đề Khoa Học Cổ")) + '</button>' : "") +
      '  </div>' +
      body +
      (cosmoYt ? '<div style="margin-top:0.85rem;max-width:460px;">' + renderYoutubeCard(cosmoYt, enM) + '</div>' : "") +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 4. Trade Studio: Incoterms 2020 + 10 Annotated Docs Blueprint SVG + AQL/Container Matrix
  // --------------------------------------------------------------------------
  function renderTradeIncotermsAndDocs(enM) {
    var tData = window.CCE_V6_TRADE_AND_CSC || {};
    var incos = tData.incoterms2020_11 || [];
    var docs = tData.annotatedTradeDocs10 || [];
    var aqlMat = tData.aqlAndContainerMatrices || {};
    if (!incos.length && !docs.length) return "";

    var curInco = incos[0];
    for (var i = 0; i < incos.length; i++) {
      if (incos[i].code === st.incoCode) { curInco = incos[i]; break; }
    }
    var curDoc = docs[0];
    for (var j = 0; j < docs.length; j++) {
      if (docs[j].id === st.docId) { curDoc = docs[j]; break; }
    }
    var spots = (curDoc && curDoc.hotspots) || [];
    var curSpot = spots[(st.docBox - 1) % Math.max(1, spots.length)] || spots[0];

    var stages = ["Xưởng TQ", "Xe Đầu Chặng", "Hải Quan XK", "Xếp Lên Tàu/Ga", "Cước Chính", "Cảng Đích EU", "Hải Quan NK", "Kho Đích"];
    var barSvg = curInco ? (
      '<div style="display:grid;grid-template-columns:repeat(8,1fr);gap:3px;margin:0.65rem 0;">' +
      stages.map(function (sg, idx) {
        var sellerRisk = idx <= curInco.riskStage;
        var sellerCost = idx <= curInco.costStage;
        return '<div style="text-align:center;font-size:0.68rem;padding:0.35rem 0.2rem;border-radius:4px;background:' + (sellerRisk ? "#8C2318" : (sellerCost ? "#C59B40" : "#1F6E5C")) + ';color:#FFFFFF;"><strong>' + esc(sg) + '</strong><br>' + (sellerRisk ? "Bán chịu RR" : (sellerCost ? "Bán trả cước" : "Mua chịu")) + '</div>';
      }).join("") +
      '</div>'
    ) : "";

    var docBlueprintSvg = curDoc ? (
      '<svg viewBox="0 0 640 128" style="width:100%;max-width:680px;height:auto;display:block;margin:0.5rem auto;border:1px solid var(--hairline);background:#FBF9F4;">' +
      '  <rect x="6" y="6" width="628" height="22" rx="3" fill="#8C2318" />' +
      '  <text x="16" y="21" font-size="9.5" font-weight="700" fill="#FFFFFF">' + esc((curDoc.nameEn || curDoc.titleEn || "").slice(0, 56)) + ' · ' + esc(curDoc.nameZh || curDoc.titleZh || "") + '</text>' +
      spots.slice(0, 6).map(function (sp, sIdx) {
        var col = sIdx % 3;
        var row = Math.floor(sIdx / 3);
        var bx = 10 + col * 208;
        var by = 36 + row * 44;
        var active = st.docBox === sp.boxNum;
        return (
          '<g style="cursor:pointer;" data-v6st-act="dbox" data-val="' + sp.boxNum + '">' +
          '  <rect x="' + bx + '" y="' + by + '" width="198" height="36" rx="4" fill="' + (active ? "#8C2318" : "#FFFFFF") + '" stroke="' + (active ? "#E5A93C" : "#1F6E5C") + '" stroke-width="' + (active ? "2" : "1.2") + '" />' +
          '  <text x="' + (bx + 8) + '" y="' + (by + 15) + '" font-size="8.5" font-weight="700" fill="' + (active ? "#FFFFFF" : "#8C2318") + '">BOX #' + sp.boxNum + ' · ' + esc((sp.fieldEn || sp.fieldNameEn || "").slice(0, 26)) + '</text>' +
          '  <text x="' + (bx + 8) + '" y="' + (by + 28) + '" font-size="7.5" fill="' + (active ? "#F5E7CE" : "#5F584D") + '">' + esc((sp.fieldZh || sp.fieldNameZh || "").slice(0, 24)) + '</text>' +
          '</g>'
        );
      }).join("") +
      '</svg>'
    ) : "";

    var aqlRows = aqlMat.aqlSampleLetters || [];
    var contRows = aqlMat.containerSpecs || [];

    return (
      '<section id="cce-v6-incoterms-docs" style="margin-bottom:1.35rem;display:grid;gap:1.1rem;">' +
      (curInco ? (
        '<div class="card" style="padding:1rem;background:var(--bg-paper);border-left:4px solid var(--imperial-red);">' +
        '  <div class="editorial-kicker" style="color:var(--imperial-red);">INCOTERMS® 2020 INTERACTIVE RISK &amp; COST SPLIT BAR</div>' +
        '  <div class="filter-bar" style="margin:0.45rem 0;">' +
        incos.map(function (ic) {
          return '<button type="button" class="filter-pill ' + (st.incoCode === ic.code ? "active" : "") + '" data-v6st-act="inco" data-val="' + esc(ic.code) + '">' + esc(ic.code) + '</button>';
        }).join("") +
        '  </div>' +
        '  <strong>' + esc(curInco.code + " — " + curInco.title) + '</strong> <span class="badge badge-gold">' + esc(curInco.mode) + '</span>' +
        barSvg +
        '  <p style="font-size:0.81rem;margin:0.2rem 0 0;color:var(--text-secondary);">' + esc(enM ? curInco.summaryEn : curInco.summaryVi) + '</p>' +
        '</div>'
      ) : "") +
      (curDoc ? (
        '<div id="cce-v6-annotated-docs-box" class="card" style="padding:1rem;border-top:3px solid var(--jade-green);">' +
        '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? (docs.length + " ANNOTATED TRADE &amp; CUSTOMS DOCUMENTS (B/L · SMGS · GACC · FORM E · CIPS · L/C)") : (docs.length + " CHỨNG TỪ XUẤT NHẬP KHẨU ĐIỂM NÓNG (B/L · SMGS · GACC · FORM E · CIPS · USANCE L/C)")) + '</div>' +
        '  <div class="filter-bar" style="margin:0.45rem 0 0.75rem;">' +
        docs.map(function (dc) {
          var dTitle = dc.nameEn || dc.titleEn || dc.nameVi;
          return '<button type="button" class="filter-pill ' + (st.docId === dc.id ? "active" : "") + '" data-v6st-act="doc" data-val="' + esc(dc.id) + '">' + esc(dTitle.split("(")[0].trim()) + '</button>';
        }).join("") +
        '  </div>' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;">' +
        '    <strong>' + esc(curDoc.nameVi || curDoc.titleVi) + ' — <span class="hanzi" style="color:var(--imperial-red);">' + esc(curDoc.nameZh || curDoc.titleZh) + '</span></strong>' +
        '    <span class="badge badge-outline">Cấp bởi: ' + esc(curDoc.issuerVi || curDoc.issuerRoleVi) + '</span>' +
        '  </div>' +
        docBlueprintSvg +
        '  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin:0.55rem 0;">' +
        spots.map(function (sp) {
          var fEn = sp.fieldEn || sp.fieldNameEn || "";
          return '<button type="button" class="btn ' + (st.docBox === sp.boxNum ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v6st-act="dbox" data-val="' + sp.boxNum + '">Hotspot #' + sp.boxNum + ': ' + esc(fEn.split("—")[0].slice(0, 32)) + '</button>';
        }).join("") +
        '  </div>' +
        (curSpot ? (
          '<div style="padding:0.8rem 0.95rem;background:var(--bg-paper);border:1px solid var(--hairline);font-size:0.82rem;">' +
          '  <div style="color:var(--imperial-red);font-weight:700;">' + esc(curSpot.fieldEn || curSpot.fieldNameEn) + ' · <span class="hanzi">' + esc(curSpot.fieldZh || curSpot.fieldNameZh) + '</span> ' + spk(curSpot.fieldZh || curSpot.fieldNameZh) + '</div>' +
          '  <div style="margin:0.25rem 0;"><strong>Tiếng Việt:</strong> ' + esc(curSpot.fieldVi || curSpot.fieldNameVi) + '</div>' +
          '  <div style="color:var(--imperial-red);margin:0.25rem 0;"><strong>Rủi ro Sai Sót:</strong> ' + esc(curSpot.complianceRiskVi) + '</div>' +
          '  <div style="color:var(--jade-green);"><strong>Mẹo Kiểm Toán EU/Hải Quan:</strong> ' + esc(curSpot.auditTipVi) + '</div>' +
          (curDoc.euVietnamChinaWorkflowVi ? '<div style="margin-top:0.3rem;color:var(--text-secondary);"><strong>Luồng XNK:</strong> ' + esc(curDoc.euVietnamChinaWorkflowVi) + '</div>' : "") +
          (curDoc.rejectionCaseStudyVi ? '<div style="margin-top:0.2rem;color:var(--text-muted);"><strong>Case từ chối thực tế:</strong> ' + esc(curDoc.rejectionCaseStudyVi) + '</div>' : "") +
          '</div>'
        ) : "") +
        '</div>'
      ) : "") +
      ((aqlRows.length || contRows.length) ? (
        '<div id="cce-v6-aql-container-box" class="card" style="padding:1rem;border-top:3px solid var(--antique-gold);">' +
        '  <div class="editorial-kicker" style="color:var(--imperial-red);">ISO 2859-1 AQL INSPECTION MATRIX &amp; CONTAINER / EUR PALLET SPECS</div>' +
        '  <div class="grid grid-2" style="gap:0.9rem;margin-top:0.55rem;">' +
        (aqlRows.length ? (
          '    <div class="academic-table-wrap"><table class="academic-table" style="font-size:0.78rem;"><thead><tr><th>Lot Range</th><th>Code</th><th>Sample</th><th>AQL 1.5</th><th>AQL 2.5</th></tr></thead><tbody>' +
          aqlRows.map(function (r) {
            return '<tr><td>' + esc(r.lotRange) + '</td><td><strong>' + esc(r.codeLetter) + '</strong></td><td>' + esc(r.sampleSize) + '</td><td>' + esc(r.aql1_5_AcRe) + '</td><td>' + esc(r.aql2_5_AcRe) + '</td></tr>';
          }).join("") +
          '    </tbody></table></div>'
        ) : "") +
        (contRows.length ? (
          '    <div class="academic-table-wrap"><table class="academic-table" style="font-size:0.78rem;"><thead><tr><th>Container</th><th>Dims (m)</th><th>Max Kg</th><th>CBM</th><th>EUR / ISO Pallets</th></tr></thead><tbody>' +
          contRows.map(function (c) {
            return '<tr><td><strong>' + esc(c.type) + '</strong></td><td>' + esc(c.internalDimsM) + '</td><td>' + esc(c.maxPayloadKg) + '</td><td>' + esc(c.usableCbm) + '</td><td>' + esc(c.eurPallets120x80 + " / " + c.isoPallets120x100) + '</td></tr>';
          }).join("") +
          '    </tbody></table></div>'
        ) : "") +
        '  </div>' +
        '</div>'
      ) : "") +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 5. Sino–Vietnamese 10 Wonders + 24 CSC Universities + 12-Month Gantt + 12306 HSR
  // --------------------------------------------------------------------------
  function renderSinoVietAndCscStudio(enM) {
    var tData = window.CCE_V6_TRADE_AND_CSC || {};
    var wonders = tData.sinoVietWonders10 || [];
    var unis = tData.cscUniversities24Atlas || tData.cscUniversities24 || [];
    var gantt = tData.cscGantt12Months || [];
    var ints = tData.cscInterviewQuestions24 || tData.cscInterview24 || [];
    var hsr = tData.hsrCorridors8x8 || [];
    if (!wonders.length && !unis.length) return "";

    var doneMap = loadGanttDone();
    var body = "";
    if (st.svSub === "wonders") {
      body =
        '<div class="grid grid-2" style="gap:0.85rem;max-height:580px;overflow:auto;">' +
        wonders.map(function (w) {
          return (
            '<article class="card" style="padding:0.85rem;font-size:0.8rem;">' +
            '  <div class="grid grid-2" style="gap:0.45rem;margin-bottom:0.45rem;">' +
            '    <div class="img-skeleton-bg" style="aspect-ratio:16/10;overflow:hidden;border-radius:4px;border:1px solid var(--hairline);"><img src="' + esc(w.vnImg) + '" alt="VN" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>' +
            '    <div class="img-skeleton-bg" style="aspect-ratio:16/10;overflow:hidden;border-radius:4px;border:1px solid var(--hairline);"><img src="' + esc(w.chinaImg) + '" alt="China" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>' +
            '  </div>' +
            '  <strong style="color:var(--imperial-red);">' + esc(w.pairTitle) + '</strong>' +
            '  <p style="margin:0.3rem 0;color:var(--text-secondary);">' + esc(w.summaryVi) + '</p>' +
            (w.fieldVisitGuideVi ? '<div style="font-size:0.74rem;color:var(--jade-green);">' + esc(w.fieldVisitGuideVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.svSub === "csc_unis") {
      body =
        '<div class="grid grid-3" style="gap:0.65rem;max-height:560px;overflow:auto;">' +
        unis.map(function (u) {
          return (
            '<div class="flashcard-layer" style="font-size:0.79rem;">' +
            (u.imagePath ? '<div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:110px;overflow:hidden;border-radius:4px;border:1px solid var(--hairline);margin-bottom:0.35rem;"><img src="' + esc(u.imagePath) + '" alt="' + esc(u.nameVi) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;" /></div>' : "") +
            '  <div style="display:flex;justify-content:space-between;"><span class="badge badge-gold">Agency: ' + esc(u.agencyNo || u.agencyNumber) + '</span>' + spk(u.zh) + '</div>' +
            '  <strong class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);">' + esc(u.zh) + '</strong><br>' +
            '  <strong>' + esc(enM ? (u.nameEn || u.nameVi) : u.nameVi) + '</strong> (' + esc(u.cityVi) + ')' +
            '  <div style="color:var(--jade-green);margin-top:0.2rem;">' + esc(u.majorsVi || u.strengthsVi) + '</div>' +
            (u.recommendedHskAndIeltsVi ? '<div style="font-size:0.73rem;color:var(--text-secondary);margin-top:0.2rem;">' + esc(u.recommendedHskAndIeltsVi) + '</div>' : "") +
            (u.vietnamAlumniCareerTrackVi ? '<div style="font-size:0.72rem;color:var(--text-muted);margin-top:0.15rem;">' + esc(u.vietnamAlumniCareerTrackVi) + '</div>' : "") +
            '</div>'
          );
        }).join("") +
        '</div>';
    } else if (st.svSub === "csc_gantt") {
      body =
        '<div class="grid grid-2" style="gap:0.65rem;">' +
        gantt.map(function (g) {
          var checked = Boolean(doneMap[g.id]);
          return (
            '<label class="flashcard-layer" style="display:flex;gap:0.55rem;align-items:flex-start;cursor:pointer;font-size:0.79rem;border-left:4px solid ' + (checked ? "var(--jade-green)" : "var(--hairline)") + ';">' +
            '  <input type="checkbox" ' + (checked ? "checked" : "") + ' data-v6st-act="gantt" data-val="' + esc(g.id) + '" style="margin-top:0.2rem;" />' +
            '  <div><strong style="color:var(--imperial-red);">' + esc(g.month + ": " + g.milestone) + '</strong><div style="color:var(--text-secondary);">' + esc(g.detailVi) + '</div></div>' +
            '</label>'
          );
        }).join("") +
        '</div>';
    } else if (st.svSub === "csc_int") {
      body =
        '<div class="grid grid-2" style="gap:0.65rem;max-height:560px;overflow:auto;">' +
        ints.map(function (q) {
          return (
            '<div class="card" style="padding:0.75rem 0.9rem;font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(q.zh || q.qZh) + '</strong>' + spk(q.zh || q.qZh) + '</div>' +
            '  <div><strong>' + esc(enM ? (q.qEn || q.vi) : (q.vi || q.qVi)) + '</strong></div>' +
            '  <div style="color:var(--jade-green);margin-top:0.25rem;"><strong>Dàn ý:</strong> ' + esc(q.guideVi || q.outlineVi) + '</div>' +
            (q.modelAnswerZh ? '<div class="hanzi" style="margin-top:0.25rem;padding:0.35rem;background:var(--bg-paper);border-left:2px solid var(--imperial-red);"><strong>Mẫu ZH:</strong> ' + esc(q.modelAnswerZh) + ' ' + spk(q.modelAnswerZh) + '</div>' : "") +
            (q.commonPitfallToAvoidVi ? '<div style="font-size:0.73rem;color:var(--text-muted);margin-top:0.2rem;">' + esc(q.commonPitfallToAvoidVi) + '</div>' : "") +
            '</div>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-2" style="gap:0.65rem;">' +
        hsr.map(function (h) {
          return (
            '<div class="flashcard-layer" style="font-size:0.8rem;">' +
            '  <strong style="color:var(--imperial-red);">' + esc(h.from + " ↔ " + h.to) + '</strong><br>' +
            '  <span class="badge badge-jade">' + esc(h.duration) + '</span> <em>' + esc(h.lineName) + '</em>' +
            '  <p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(h.highlight) + '</p>' +
            '</div>'
          );
        }).join("") +
        '</div>';
    }

    var v7ytSv = (window.CCE_V7_ENCYCLOPEDIA && window.CCE_V7_ENCYCLOPEDIA.youtubeVideos12) || [];
    var svYtList = v7ytSv.filter ? v7ytSv.filter(function (x) { return x.youtubeId === "9wJCltuawSs" || x.youtubeId === "ROFmtJLCq1k"; }) : [];
    return (
      '<section id="cce-v6-sinoviet-csc" style="margin-top:1.4rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? ("SINO–VIETNAM HERITAGE (" + wonders.length + "), CSC SCHOLARSHIP ATLAS (" + unis.length + ") &amp; " + hsr.length + " HIGH-SPEED RAIL LINES") : ("ĐỐI SÁNH VĂN HIẾN TRUNG–VIỆT (" + wonders.length + "), HỌC BỔNG CSC " + unis.length + " TRƯỜNG &amp; " + hsr.length + " TUYẾN CAO TỐC 12306")) + '</div>' +
      '  <div class="filter-bar" style="margin:0.45rem 0 0.8rem;">' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "wonders" ? "active" : "") + '" data-v6st-act="svsub" data-val="wonders">' + (enM ? (wonders.length + " Sino–Viet Pairings") : (wonders.length + " Cặp Kỳ Quan Trung–Việt")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_unis" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_unis">' + (enM ? (unis.length + " CSC Universities") : (unis.length + " Trường Học Bổng CSC")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_gantt" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_gantt">' + (enM ? "12-Month CSC Timeline" : "Gantt 12 Tháng Hồ Sơ CSC") + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_int" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_int">' + (enM ? (ints.length + " CSC Interview Q&amp;As") : (ints.length + " Câu Hỏi Phỏng Vấn CSC")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "hsr" ? "active" : "") + '" data-v6st-act="svsub" data-val="hsr">' + (enM ? (hsr.length + " 12306 Rail Corridors") : (hsr.length + " Tuyến Cao Tốc 12306")) + '</button>' +
      '  </div>' +
      body +
      (svYtList.length ? '<div class="grid grid-2" style="gap:0.75rem;margin-top:0.85rem;">' + svYtList.map(function (vy) { return renderYoutubeCard(vy, enM); }).join("") + '</div>' : "") +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 6. V7.0 World Cultural & Tourism Benchmark Studio:
  //    16 Expeditions + 8 Concierge 240h + 8 Pigments + 6 Benchmarks + Cinema
  // --------------------------------------------------------------------------
  function renderWorldTourismAndMuseumStudio(enM) {
    var v7 = window.CCE_V7_ENCYCLOPEDIA || {};
    var exps = v7.heritageExpeditions16 || [];
    var guides = v7.digitalTravelConcierge8 || [];
    var pigments = v7.traditionalPigments8 || [];
    var benches = v7.globalPlatformBenchmarks6 || [];
    var yts = v7.youtubeVideos12 || [];
    if (!exps.length && !guides.length && !pigments.length) return "";

    var body = "";
    if (st.worldTab === "expeditions") {
      var regions = ["all"];
      exps.forEach(function (ex) {
        if (ex.regionGroup && regions.indexOf(ex.regionGroup) === -1) regions.push(ex.regionGroup);
      });
      var filtered = exps.filter(function (ex) {
        return st.expRegion === "all" || ex.regionGroup === st.expRegion;
      });
      body =
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        regions.map(function (r) {
          return '<button type="button" class="filter-pill ' + (st.expRegion === r ? "active" : "") + '" data-v6st-act="expflt" data-val="' + esc(r) + '" style="font-size:0.73rem;">' + (r === "all" ? (enM ? "All " + exps.length + " Routes" : "Tất cả (" + exps.length + ")") : esc(r)) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.85rem;max-height:660px;overflow:auto;">' +
        filtered.map(function (ex) {
          var stops = Array.isArray(ex.stops) ? ex.stops : [];
          var svgStops =
            '<svg viewBox="0 0 640 72" style="width:100%;height:auto;margin:0.35rem 0;" role="img" aria-label="Expedition Route">' +
            '  <line x1="36" y1="26" x2="604" y2="26" stroke="#C59B40" stroke-width="2" stroke-dasharray="4 3" />' +
            stops.slice(0, 5).map(function (stName, si) {
              var sx = 54 + si * 130;
              return (
                '<circle cx="' + sx + '" cy="26" r="7" fill="#8C2318" stroke="#E5A93C" stroke-width="2" />' +
                '<text x="' + sx + '" y="48" text-anchor="middle" font-size="9.5" fill="currentColor">' + esc(String(stName).slice(0, 18)) + '</text>'
              );
            }).join("") +
            '</svg>';
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.4rem;font-size:0.8rem;">' +
            '  <div class="img-skeleton-bg" style="aspect-ratio:16/9;max-height:140px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);cursor:pointer;" data-action="open-custom-image" data-src="' + esc(ex.imagePath) + '" data-caption="' + esc(enM ? ex.titleEn : ex.titleVi) + '">' +
            '    <img src="' + esc(ex.imagePath) + '" alt="' + esc(ex.titleVi) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;display:block;" />' +
            '  </div>' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
            '    <span class="badge badge-red">' + esc(ex.daysCount) + (enM ? " Days" : " Ngày") + ' · ' + esc(ex.estimatedBudgetUsd) + '</span>' +
            '    <span class="badge badge-jade">' + esc(ex.regionGroup) + '</span>' +
            '  </div>' +
            '  <h4 style="margin:0;font-size:0.96rem;">' + esc(enM ? ex.titleEn : ex.titleVi) + '</h4>' +
            '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(ex.titleZh) + ' · HSR: ' + esc(ex.hsrRef) + '</div>' +
            svgStops +
            '  <p style="margin:0;color:var(--text-secondary);">' + esc(enM ? ex.summaryEn : ex.summaryVi) + '</p>' +
            '  <div style="font-size:0.74rem;color:var(--jade-green);"><strong>' + (enM ? "Best Season:" : "Mùa đẹp nhất:") + '</strong> ' + esc(enM ? ex.bestSeasonEn : ex.bestSeasonVi) + '</div>' +
            (Array.isArray(ex.dayByDayOutlineVi) ? '<details class="ed-details" style="font-size:0.76rem;"><summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? "Day-by-Day Itinerary →" : "Lịch trình từng ngày →") + '</summary><ul style="margin:0.35rem 0 0;padding-left:1.1rem;">' + (enM && Array.isArray(ex.dayByDayOutlineEn) ? ex.dayByDayOutlineEn : ex.dayByDayOutlineVi).map(function (d) { return '<li>' + esc(d) + '</li>'; }).join("") + '</ul></details>' : "") +
            (ex.youtubeId ? '<div style="margin-top:auto;padding-top:0.35rem;"><a href="https://www.youtube.com/watch?v=' + esc(ex.youtubeId) + '" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">' + (enM ? "Watch YouTube Documentary ↗" : "Xem Phim Tài Liệu YouTube ↗") + '</a></div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.worldTab === "concierge") {
      var conDone = loadConciergeDone();
      body =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:640px;overflow:auto;">' +
        guides.map(function (g) {
          var list = (enM && Array.isArray(g.actionChecklistEn)) ? g.actionChecklistEn : (g.actionChecklistVi || []);
          return (
            '<article class="card" style="padding:0.85rem 1rem;border-left:4px solid var(--jade-green);font-size:0.8rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-gold">STEP ' + esc(g.stepNum) + ' · 240H &amp; DIGITAL CONCIERGE</span>' +
            spk(g.emergencyPhraseZh) +
            '  </div>' +
            '  <h4 style="margin:0.3rem 0 0.2rem;font-size:0.95rem;">' + esc(enM ? g.titleEn : g.titleVi) + '</h4>' +
            '  <div class="hanzi text-xs" style="color:var(--imperial-red);margin-bottom:0.3rem;">' + esc(g.titleZh) + '</div>' +
            '  <p style="margin:0 0 0.45rem;color:var(--text-secondary);">' + esc(enM ? g.summaryEn : g.summaryVi) + '</p>' +
            '  <div style="display:grid;gap:0.25rem;">' +
            list.map(function (it, li) {
              var ckKey = g.id + "_" + li;
              var isChk = Boolean(conDone[ckKey]);
              return '<label style="display:flex;gap:0.4rem;align-items:flex-start;cursor:pointer;"><input type="checkbox" ' + (isChk ? "checked" : "") + ' data-v6st-act="concheck" data-val="' + esc(ckKey) + '" style="margin-top:0.2rem;" /><span>' + esc(it) + '</span></label>';
            }).join("") +
            '  </div>' +
            '  <div style="margin-top:0.5rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);font-size:0.76rem;">' +
            '    <strong>' + (enM ? "Field Mandarin:" : "Câu Thực Địa:") + '</strong> <span class="hanzi">' + esc(g.emergencyPhraseZh) + '</span> ' + spk(g.emergencyPhraseZh) +
            '    <div class="pinyin">' + esc(g.emergencyPhrasePinyin) + '</div>' +
            '    <div style="color:var(--text-muted);">' + esc(enM ? (g.emergencyPhraseMeaningEn || g.summaryEn) : g.emergencyPhraseMeaningVi) + '</div>' +
            '  </div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.worldTab === "pigments") {
      var curPig = pigments[st.pigmentIdx % Math.max(1, pigments.length)] || pigments[0];
      body =
        '<div style="display:flex;gap:0.65rem;flex-wrap:wrap;margin-bottom:0.85rem;">' +
        pigments.map(function (pg, pi) {
          var isAct = pi === (st.pigmentIdx % pigments.length);
          return (
            '<button type="button" data-v6st-act="pigment" data-val="' + pi + '" class="flashcard-layer" style="cursor:pointer;display:flex;align-items:center;gap:0.5rem;padding:0.45rem 0.75rem;border:2px solid ' + (isAct ? "#E5A93C" : "var(--hairline)") + ';">' +
            '  <span style="width:22px;height:22px;border-radius:50%;background:' + esc(pg.hex) + ';border:1px solid #888;display:inline-block;flex-shrink:0;"></span>' +
            '  <span style="font-size:0.78rem;font-weight:700;">' + esc(enM ? pg.nameEn : pg.nameVi) + '</span>' +
            '</button>'
          );
        }).join("") +
        '</div>' +
        (curPig ? (
          '<article class="card" style="padding:1rem 1.2rem;border-left:8px solid ' + esc(curPig.hex) + ';display:grid;gap:0.4rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;">' +
          '    <span class="badge badge-gold">HEX ' + esc(curPig.hex) + ' · ' + esc(curPig.pinyin) + '</span>' +
          spk(curPig.nameZh) +
          '  </div>' +
          '  <h4 style="margin:0;font-size:1.1rem;">' + esc(curPig.nameZh) + ' — ' + esc(enM ? curPig.nameEn : curPig.nameVi) + '</h4>' +
          '  <div><strong>' + (enM ? "Mineral / Botanical Origin:" : "Nguồn Khoáng / Thực Vật:") + '</strong> ' + esc(enM ? curPig.mineralSourceEn : curPig.mineralSourceVi) + '</div>' +
          '  <div><strong>' + (enM ? "Peak Dynasties:" : "Triều Đại Đỉnh Cao:") + '</strong> ' + esc(enM ? curPig.peakDynastyEn : curPig.peakDynastyVi) + '</div>' +
          '  <div style="color:var(--jade-green);"><strong>' + (enM ? "Iconic Masterwork:" : "Kiệt Tác Bảo Tàng:") + '</strong> ' + esc(enM ? curPig.iconicMasterworkEn : curPig.iconicMasterworkVi) + '</div>' +
          '</article>'
        ) : "");
    } else if (st.worldTab === "benchmarks") {
      body =
        '<div class="grid grid-2" style="gap:0.75rem;">' +
        benches.map(function (b) {
          return (
            '<article class="flashcard-layer" style="font-size:0.8rem;border-left:4px solid var(--antique-gold);">' +
            '  <span class="badge badge-gold">' + esc(b.countryOrScope) + '</span>' +
            '  <h4 style="margin:0.35rem 0 0.25rem;color:var(--imperial-red);">' + esc(b.orgName) + '</h4>' +
            '  <p style="margin:0.2rem 0;"><strong>' + (enM ? "Practice:" : "Phương pháp tham chiếu:") + '</strong> ' + esc(enM ? b.coreBenchmarkFeatureEn : b.coreBenchmarkFeatureVi) + '</p>' +
            '  <p style="margin:0.2rem 0;color:var(--jade-green);"><strong>' + (enM ? "Applied Feature:" : "Ứng dụng thực tế:") + '</strong> ' + esc(enM ? b.cceV7AdoptionEn : b.cceV7AdoptionVi) + '</p>' +
            '  <div style="font-size:0.74rem;color:var(--text-muted);"><strong>' + (enM ? "Next Phase:" : "Định hướng mở rộng:") + '</strong> ' + esc(enM ? b.continuousLoopToV8En : b.continuousLoopToV8Vi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<h4 style="margin:0.2rem 0 0.65rem;font-size:1rem;">' + (enM ? yts.length + " Curated YouTube Documentaries (UNESCO, NatGeo, TED-Ed, DW)" : yts.length + " Video Tài Liệu YouTube Đính Kèm Theo Chuyên Mục") + '</h4>' +
        '<div class="grid grid-2" style="gap:0.8rem;max-height:620px;overflow:auto;">' +
        yts.map(function (vy) { return renderYoutubeCard(vy, enM); }).join("") +
        '</div>';
    }

    return (
      '<section id="cce-v7-world-tourism-studio" class="card mb-2" style="margin-top:1.5rem;padding:1.15rem 1.25rem;border-top:3px solid #E5A93C;">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "WORLD HERITAGE EXPEDITIONS, SMART 240H TRANSIT, PIGMENTS &amp; DOCUMENTARIES" : "HÀNH TRÌNH DI SẢN, CẨM NANG 240H, SẮC TỐ BẢO TÀNG &amp; TƯ LIỆU YOUTUBE") + '</div>' +
      '  <h3 style="margin:0.15rem 0 0.55rem;font-size:1.22rem;">' + (enM ? "World Heritage Expeditions (" + exps.length + "), Smart 240h Concierge (" + guides.length + "), Pigments &amp; Documentaries" : "Du Lịch Di Sản (" + exps.length + " Tuyến), Cẩm Nang Số 240h (" + guides.length + "), Sắc Tố Cổ &amp; " + yts.length + " Phim Tài Liệu") + '</h3>' +
      '  <div class="filter-bar" style="margin-bottom:0.85rem;">' +
      '    <button type="button" class="filter-pill ' + (st.worldTab === "expeditions" ? "active" : "") + '" data-v6st-act="wtab" data-val="expeditions">' + (enM ? (exps.length + " Heritage Expeditions") : (exps.length + " Hành Trình Di Sản")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.worldTab === "concierge" ? "active" : "") + '" data-v6st-act="wtab" data-val="concierge">' + (enM ? (guides.length + " 240h &amp; Alipay Guides") : (guides.length + " Cẩm Nang 240h &amp; Alipay")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.worldTab === "pigments" ? "active" : "") + '" data-v6st-act="wtab" data-val="pigments">' + (enM ? (pigments.length + " Classical Pigments") : (pigments.length + " Sắc Tố Cổ Điển")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.worldTab === "benchmarks" ? "active" : "") + '" data-v6st-act="wtab" data-val="benchmarks">' + (enM ? (benches.length + " Museum Benchmarks") : (benches.length + " Tham Chiếu Bảo Tàng")) + '</button>' +
      '    <button type="button" class="filter-pill ' + (st.worldTab === "cinema" ? "active" : "") + '" data-v6st-act="wtab" data-val="cinema">' + (enM ? (yts.length + " YouTube Documentaries") : (yts.length + " Video Tài Liệu YouTube")) + '</button>' +
      '  </div>' +
      body +
      '</section>'
    );
  }

  function bind() {
    if (window._cceV6StudiosBound || typeof document === "undefined") return;
    window._cceV6StudiosBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v6st-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v6st-act");
      var val = el.getAttribute("data-val") || "";
      if (act === "mind-mod") {
        st.mindMod = Number(val) || 1;
        if (window.CCE_V5_COURSE && window.CCE_V5_COURSE.setActiveModule) {
          window.CCE_V5_COURSE.setActiveModule(st.mindMod);
        }
      } else if (act === "ltab") st.liushuTab = val;
      else if (act === "lcat") st.liushuCat = val;
      else if (act === "hsklv") st.hskLvFilter = val;
      else if (act === "novel") st.novelIdx = Number(val) || 0;
      else if (act === "solar") st.solarIdx = Number(val) || 0;
      else if (act === "wx") st.wuxingEl = val;
      else if (act === "csub") st.cosmoSub = val;
      else if (act === "inco") st.incoCode = val;
      else if (act === "doc") { st.docId = val; st.docBox = 1; }
      else if (act === "dbox") st.docBox = Number(val) || 1;
      else if (act === "svsub") st.svSub = val;
      else if (act === "wtab") st.worldTab = val;
      else if (act === "expflt") st.expRegion = val || "all";
      else if (act === "pigment") st.pigmentIdx = Number(val) || 0;
      else if (act === "play-yt") {
        if (!st.ytActive) st.ytActive = {};
        if (val) st.ytActive[val] = true;
      }
      else if (act === "export-cert") { exportCertificatePng(); return; }
      else if (act === "srs") {
        if (window.CCE_SRS && window.CCE_SRS.addCard) {
          window.CCE_SRS.addCard({
            id: "v6-" + el.getAttribute("data-zh"),
            hanzi: el.getAttribute("data-zh"),
            pinyin: el.getAttribute("data-py"),
            hanViet: el.getAttribute("data-hv"),
            meaningVi: el.getAttribute("data-vi"),
            meaningEn: el.getAttribute("data-en"),
            source: "Visual Studio"
          });
          el.textContent = "Saved!";
        }
        return;
      }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
    document.addEventListener("change", function (e) {
      var el = e.target;
      if (!el || !el.getAttribute) return;
      var act = el.getAttribute("data-v6st-act");
      if (act === "gantt") {
        var map = loadGanttDone();
        map[el.getAttribute("data-val")] = Boolean(el.checked);
        try { localStorage.setItem("cce_v6_csc_gantt", JSON.stringify(map)); } catch (_e) {}
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      } else if (act === "concheck") {
        var cmap = loadConciergeDone();
        cmap[el.getAttribute("data-val")] = Boolean(el.checked);
        try { localStorage.setItem("cce_v7_concierge_done", JSON.stringify(cmap)); } catch (_e) {}
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
      }
    });
    document.addEventListener("input", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-v6st-act") === "cert-name") {
        st.studentName = el.value || "";
      }
    });
  }
  bind();

  window.CCE_V6_STUDIOS = {
    renderCourseMindMapSvg: renderCourseMindMapSvg,
    renderLiushuAndLiteratureStudio: renderLiushuAndLiteratureStudio,
    renderCosmologyVisualWheel: renderCosmologyVisualWheel,
    renderTradeIncotermsAndDocs: renderTradeIncotermsAndDocs,
    renderSinoVietAndCscStudio: renderSinoVietAndCscStudio,
    renderWorldTourismAndMuseumStudio: renderWorldTourismAndMuseumStudio,
    renderYoutubeCard: renderYoutubeCard,
    renderOfficialPromoCard: renderOfficialPromoCard,
    exportCertificatePng: exportCertificatePng
  };
})();
