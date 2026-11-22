// ============================================================================
// CHINESE CULTURE EXPLORER V6.0 — Interactive Visual Academy & SVG Studios
// Exposes window.CCE_V6_STUDIOS (MindMap, Liushu, False Friends, Solar/Wuxing,
// Novel Graphs, Wenyan, Incoterms/Docs, Sino-Viet/CSC Gantt, PNG Certificate)
// ============================================================================

(function () {
  "use strict";

  var st = {
    mindMod: 1,
    liushuTab: "chars", // chars | ff30 | rules12 | novels | poems | wenyan
    liushuCat: "all",
    novelIdx: 0,
    solarIdx: 4, // Thanh Minh default
    wuxingEl: "Mộc (木)",
    cosmoSub: "wheel", // wheel | herbs | micro
    incoCode: "CIP",
    docId: "doc-mbl",
    docBox: 1,
    svSub: "wonders", // wonders | csc_unis | csc_gantt | csc_int | hsr
    hsrIdx: 0,
    studentName: "Học viên Chinese Culture Explorer"
  };

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

  // --------------------------------------------------------------------------
  // 1. Course 7-Module Interactive SVG MindMap + PNG Certificate Generator
  // --------------------------------------------------------------------------
  function renderCourseMindMapSvg(enM) {
    var nodes = [
      { n: 1, x: 105, y: 58, lbl: "HP 01 · Địa–Thủy", sub: "34 Tỉnh · Đô Giang Yển", col: "#8C2318" },
      { n: 2, x: 255, y: 40, lbl: "HP 02 · Sử–Danh Nhân", sub: "14 Triều Đại · Cố Đô", col: "#8C2318" },
      { n: 3, x: 410, y: 40, lbl: "HP 03 · Triết–3D", sub: "Đấu Củng · Thiên Đàn", col: "#1F6E5C" },
      { n: 4, x: 560, y: 58, lbl: "HP 04 · Thi–Họa–HSK", sub: "Lục Thư · Quốc Họa", col: "#1F6E5C" },
      { n: 5, x: 165, y: 178, lbl: "HP 05 · Lão Tự Hiệu", sub: "100 Brands · 30 GI", col: "#A88940" },
      { n: 6, x: 335, y: 192, lbl: "HP 06 · Trung–Việt", sub: "10 Kỳ Quan · Du Học CSC", col: "#6E5423" },
      { n: 7, x: 505, y: 178, lbl: "HP 07 · EU Trade Docs", sub: "Incoterms · CBAM · EUDR", col: "#223A52" }
    ];
    var svgLinks = nodes.map(function (nd) {
      return '<line x1="335" y1="115" x2="' + nd.x + '" y2="' + nd.y + '" stroke="' + (st.mindMod === nd.n ? nd.col : "#c9bfa9") + '" stroke-width="' + (st.mindMod === nd.n ? "3" : "1.5") + '" stroke-dasharray="' + (st.mindMod === nd.n ? "none" : "4 3") + '" />';
    }).join("");
    var svgNodes = nodes.map(function (nd) {
      var active = st.mindMod === nd.n;
      return (
        '<g style="cursor:pointer;" data-v6st-act="mind-mod" data-val="' + nd.n + '">' +
        '  <rect x="' + (nd.x - 64) + '" y="' + (nd.y - 24) + '" width="128" height="48" rx="8" fill="' + (active ? nd.col : "#FBF9F4") + '" stroke="' + nd.col + '" stroke-width="' + (active ? "2.5" : "1.5") + '" />' +
        '  <text x="' + nd.x + '" y="' + (nd.y - 4) + '" text-anchor="middle" font-size="10.5" font-weight="700" fill="' + (active ? "#FFFFFF" : "#1D1B18") + '">' + esc(nd.lbl) + '</text>' +
        '  <text x="' + nd.x + '" y="' + (nd.y + 12) + '" text-anchor="middle" font-size="8.5" fill="' + (active ? "#F5E7CE" : "#5F584D") + '">' + esc(nd.sub) + '</text>' +
        '</g>'
      );
    }).join("");

    return (
      '<section id="cce-v6-mindmap-cert" class="card mb-2" style="padding:1rem 1.2rem;background:var(--bg-paper);border-left:4px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;">' +
      '    <div><div class="editorial-kicker" style="color:var(--imperial-red);">V6.0 VISUAL COURSE CONCEPT MAP &amp; CERTIFICATE · 课程思维导图</div>' +
      '    <h4 style="margin:0.1rem 0 0;font-size:1.08rem;">' + (enM ? "Interactive 7-Module Knowledge Graph (Click a Node to Filter)" : "Bản đồ Tư duy Tương tác 7 Học phần (Nhấp từng nút để lọc Bài học Khóa học)") + '</h4></div>' +
      '    <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">' +
      '      <input type="text" class="form-input" style="max-width:200px;font-size:0.78rem;padding:0.25rem 0.5rem;" value="' + esc(st.studentName) + '" data-v6st-act="cert-name" placeholder="Tên học viên..." />' +
      '      <button type="button" class="btn btn-primary btn-sm" data-v6st-act="export-cert">' + (enM ? "Download V6.0 PNG Certificate" : "Xuất Chứng chỉ Hoàn thành V6.0 (.PNG)") + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div style="overflow-x:auto;">' +
      '    <svg viewBox="0 0 670 232" style="width:100%;max-width:740px;height:auto;display:block;margin:0 auto;" role="img" aria-label="Course 7-Module Visual MindMap">' +
      svgLinks +
      '      <ellipse cx="335" cy="115" rx="68" ry="28" fill="#8C2318" stroke="#E5A93C" stroke-width="2" />' +
      '      <text x="335" y="112" text-anchor="middle" font-size="11" font-weight="700" fill="#FFFFFF">CCE V6.0 CORE</text>' +
      '      <text x="335" y="127" text-anchor="middle" font-size="8.5" fill="#F5E7CE">42+ Bài Hệ thống</text>' +
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
    ctx.fillText("CHINESE CULTURE EXPLORER · 中国文化探索 V6.0", 600, 130);

    ctx.fillStyle = "#1D1B18";
    ctx.font = "bold 46px Georgia, serif";
    ctx.fillText("CERTIFICATE OF ENCYCLOPEDIC COMPLETION", 600, 210);

    ctx.fillStyle = "#5F584D";
    ctx.font = "italic 22px Georgia, serif";
    ctx.fillText("Awarded to Scholar / Practitioner", 600, 285);

    ctx.fillStyle = "#1F6E5C";
    ctx.font = "bold 42px Georgia, serif";
    ctx.fillText(String(st.studentName || "Chinese Culture Explorer"), 600, 355);

    ctx.fillStyle = "#3A352E";
    ctx.font = "20px sans-serif";
    ctx.fillText("Completed 7 Curriculum Modules (42+ Sequential Lessons), 100 Honored Brands,", 600, 435);
    ctx.fillText("Liushu Etymology, Non-Clinical East Asian Thought, & EU–China–VN Supply Chain Compliance.", 600, 468);

    // Traditional vermilion seal
    ctx.fillStyle = "#8C2318";
    ctx.fillRect(910, 540, 115, 115);
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "bold 24px Georgia, serif";
    ctx.fillText("中国文化", 968, 590);
    ctx.fillText("探索认证", 968, 625);

    ctx.fillStyle = "#5F584D";
    ctx.textAlign = "left";
    ctx.font = "18px monospace";
    ctx.fillText("RELEASE TAG: V6.0 VISUAL & ENCYCLOPEDIC EDITION · DATE: " + new Date().toISOString().slice(0, 10), 95, 650);

    var a = document.createElement("a");
    a.download = "CCE-V6-Certificate.png";
    a.href = cv.toDataURL("image/png");
    a.click();
  }

  // --------------------------------------------------------------------------
  // 2. Liushu 36 + 30 False Friends Comic + 12 Sound Laws + Novel Graphs + Poems + Wenyan
  // --------------------------------------------------------------------------
  function renderLiushuAndLiteratureStudio(enM) {
    var lData = window.CCE_V6_LIUSHU_VISUAL || {};
    var litData = window.CCE_V6_LITERATURE_VISUAL || {};
    var chars = lData.visualCharacters36 || [];
    var ff30 = lData.falseFriendsComic30 || [];
    var rules12 = lData.middleChineseRules12 || [];
    var novels = litData.novelGraphs4 || [];
    var poems = litData.poemPaintingPairs12 || [];
    var wenyan = litData.wenyanTokens20 || [];
    if (!chars.length && !novels.length) return "";

    var subBar = [
      { id: "chars", lbl: "36 Chữ Lục Thư 4 Thời Kỳ (" + chars.length + ")" },
      { id: "ff30", lbl: "30 Bạn Giả Hán–Việt Comic (" + ff30.length + ")" },
      { id: "rules12", lbl: "12 Luật Nhập Thanh Đường–Việt (" + rules12.length + ")" },
      { id: "novels", lbl: "4 Đồ Thị Tứ Đại Danh Tác (" + novels.length + ")" },
      { id: "poems", lbl: "12 Thi Trung Hữu Họa (" + poems.length + ")" },
      { id: "wenyan", lbl: "20 Hư Từ Văn Ngôn (" + wenyan.length + ")" }
    ];

    var content = "";
    if (st.liushuTab === "chars") {
      var cats = [
        { id: "all", lbl: "Tất cả (36)" },
        { id: "xiangxing", lbl: "Tượng Hình" },
        { id: "zhishi", lbl: "Chỉ Sự" },
        { id: "huiyi", lbl: "Hội Ý" },
        { id: "xingsheng", lbl: "Hình Thanh" },
        { id: "zhuanzhu", lbl: "Chuyển Chú" },
        { id: "jiajie", lbl: "Giả Tá" }
      ];
      var filteredChars = chars.filter(function (c) { return st.liushuCat === "all" || c.liushuType === st.liushuCat; });
      content =
        '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
        cats.map(function (c) {
          return '<button type="button" class="filter-pill ' + (st.liushuCat === c.id ? "active" : "") + '" data-v6st-act="lcat" data-val="' + c.id + '">' + c.lbl + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-3" style="gap:0.7rem;max-height:540px;overflow:auto;">' +
        filteredChars.map(function (c) {
          return (
            '<article class="flashcard-layer" style="font-size:0.8rem;display:flex;flex-direction:column;gap:0.3rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;">' +
            '    <span class="badge badge-gold">' + esc(c.liushuType.toUpperCase()) + ' · Bộ ' + esc(c.radical) + '</span>' +
            '    <span>' + spk(c.zh) + ' ' + srsBtn(c.zh, c.pinyin, c.hanViet, c.meaningShort, c.meaningEn) + '</span>' +
            '  </div>' +
            '  <div style="display:flex;align-items:baseline;gap:0.5rem;">' +
            '    <span class="hanzi" style="font-size:2rem;color:var(--imperial-red);font-weight:800;">' + esc(c.zh) + '</span>' +
            '    <div><strong>' + esc(c.hanViet) + '</strong> (' + esc(c.pinyin) + ')<br><span class="text-xs" style="color:var(--text-muted);">Phồn: ' + esc(c.trad) + ' · ' + esc(c.meaningShort) + '</span></div>' +
            '  </div>' +
            '  <div style="font-size:0.76rem;padding:0.35rem 0.5rem;background:var(--bg-paper);border-left:2px solid var(--imperial-red);"><strong style="color:var(--imperial-red);">Bộ Ý:</strong> ' + esc(c.semanticPart) + ' · <strong style="color:var(--jade-green);">Thanh:</strong> ' + esc(c.phoneticPart) + '</div>' +
            '  <div style="font-size:0.75rem;color:var(--text-secondary);"><strong>4 Thời kỳ:</strong> ' + esc(c.evolution4Stages) + '</div>' +
            '  <div style="font-size:0.76rem;color:var(--jade-green);"><strong>B2B:</strong> ' + esc(c.b2bSample) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "ff30") {
      content =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:540px;overflow:auto;">' +
        ff30.map(function (f) {
          return (
            '<article class="card" style="padding:0.8rem 0.95rem;font-size:0.8rem;display:flex;flex-direction:column;gap:0.35rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.35rem;color:var(--imperial-red);">' + esc(f.zh) + ' <span class="pinyin text-xs">' + esc(f.pinyin) + '</span></strong><span>' + spk(f.zh) + ' ' + srsBtn(f.zh, f.pinyin, f.panelAVietTrap, f.panelBTrueZh, f.meaningEn) + '</span></div>' +
            '  <div class="grid grid-2" style="gap:0.45rem;">' +
            '    <div style="padding:0.45rem;background:var(--bg-accent-soft);border-left:3px solid var(--imperial-red);"><strong>Ô A · Bẫy Việt:</strong><br>' + esc(f.panelAVietTrap) + '</div>' +
            '    <div style="padding:0.45rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);"><strong style="color:var(--jade-green);">Ô B · Nghĩa Chuẩn TQ:</strong><br>' + esc(f.panelBTrueZh) + '</div>' +
            '  </div>' +
            '  <div style="font-size:0.76rem;color:var(--text-secondary);">' + esc(f.tipVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "rules12") {
      content =
        '<div class="grid grid-2" style="gap:0.7rem;">' +
        rules12.map(function (r) {
          return '<div class="flashcard-layer" style="font-size:0.8rem;"><strong style="color:var(--imperial-red);">' + esc(r.titleVi) + '</strong><p style="margin:0.3rem 0;">' + esc(r.ruleVi) + '</p><div style="color:var(--jade-green);font-size:0.77rem;">' + esc(r.examplesVi) + '</div></div>';
        }).join("") +
        '</div>';
    } else if (st.liushuTab === "novels") {
      var curN = novels[st.novelIdx % novels.length] || novels[0];
      var nodeMap = {};
      var cx = 320, cy = 145, rad = 112;
      var nodes = curN ? curN.nodes : [];
      var svgEdges = "";
      for (var ni = 0; ni < nodes.length; ni++) {
        var ang = (ni / Math.max(1, nodes.length)) * Math.PI * 2 - Math.PI / 2;
        nodeMap[nodes[ni].id] = { x: Math.round(cx + Math.cos(ang) * rad * 1.45), y: Math.round(cy + Math.sin(ang) * rad) };
      }
      var edges = curN ? curN.edges : [];
      svgEdges = edges.map(function (eg) {
        var a = nodeMap[eg.from], b = nodeMap[eg.to];
        if (!a || !b) return "";
        return '<line x1="' + a.x + '" y1="' + a.y + '" x2="' + b.x + '" y2="' + b.y + '" stroke="#B59B6B" stroke-width="1.6" />';
      }).join("");
      var svgNodes = nodes.map(function (nd) {
        var pos = nodeMap[nd.id];
        return (
          '<g>' +
          '  <rect x="' + (pos.x - 54) + '" y="' + (pos.y - 17) + '" width="108" height="34" rx="6" fill="#FBF9F4" stroke="#8C2318" stroke-width="1.5" />' +
          '  <text x="' + pos.x + '" y="' + (pos.y - 2) + '" text-anchor="middle" font-size="10" font-weight="700" fill="#8C2318">' + esc(nd.zh) + '</text>' +
          '  <text x="' + pos.x + '" y="' + (pos.y + 11) + '" text-anchor="middle" font-size="8.2" fill="#1D1B18">' + esc(nd.vi.split("(")[0].trim()) + '</text>' +
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
          '  <svg viewBox="0 0 640 295" style="width:100%;max-width:680px;height:auto;display:block;margin:0.55rem auto;">' + svgEdges + svgNodes + '</svg>' +
          '  <div class="grid grid-2" style="gap:0.4rem;margin-top:0.5rem;">' +
          edges.map(function (eg) {
            return '<div style="font-size:0.76rem;padding:0.3rem 0.5rem;border:1px solid var(--hairline);"><strong>' + esc(eg.from) + ' ↔ ' + esc(eg.to) + ':</strong> ' + esc(eg.rel) + '</div>';
          }).join("") +
          '  </div>' +
          '</div>'
        ) : "");
    } else if (st.liushuTab === "poems") {
      content =
        '<div class="grid grid-2" style="gap:0.8rem;max-height:560px;overflow:auto;">' +
        poems.map(function (pm) {
          return (
            '<article class="card" style="padding:0.85rem 1rem;font-size:0.8rem;">' +
            '  <div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:150px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.5rem;cursor:pointer;" data-action="open-custom-image" data-src="' + esc(pm.image) + '" data-caption="' + esc(pm.title) + '">' +
            '    <img src="' + esc(pm.image) + '" alt="' + esc(pm.title) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" onerror="this.onerror=null;this.src=\'assets/images/paintings/01_luoshenfu_tu.jpg\';" />' +
            '  </div>' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong style="color:var(--imperial-red);">' + esc(pm.title) + '</strong>' + spk(pm.poemZh) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);">' + esc(pm.authorVi) + ' · ' + esc(pm.epithetVi) + '</div>' +
            '  <div class="hanzi" style="font-size:1rem;margin:0.35rem 0;font-weight:700;">' + esc(pm.poemZh) + '</div>' +
            '  <div class="pinyin text-xs">' + esc(pm.pinyin) + '</div>' +
            '  <p style="margin:0.3rem 0;color:var(--text-secondary);">' + esc(pm.translateVi) + '</p>' +
            '  <div style="font-size:0.75rem;color:var(--jade-green);"><strong>Thi – Họa:</strong> ' + esc(pm.visualNoteVi) + ' (' + esc(pm.pingZeNote) + ')</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      content =
        '<div class="grid grid-2" style="gap:0.7rem;max-height:540px;overflow:auto;">' +
        wenyan.map(function (w) {
          return (
            '<div class="flashcard-layer" style="font-size:0.8rem;border-left:4px solid ' + esc(w.colorHex) + ';">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="font-size:1.35rem;color:' + esc(w.colorHex) + ';">' + esc(w.tokenZh) + ' <span class="pinyin text-xs">' + esc(w.pinyin) + '</span> · ' + esc(w.hanViet) + '</strong><span>' + spk(w.classicalExample) + ' ' + srsBtn(w.tokenZh, w.pinyin, w.hanViet, w.functionVi, w.modernMandarinEq) + '</span></div>' +
            '  <span class="badge badge-outline" style="margin:0.2rem 0;">' + esc(w.category) + '</span>' +
            '  <p style="margin:0.25rem 0;">' + esc(w.functionVi) + '</p>' +
            '  <div class="hanzi" style="font-size:0.82rem;color:var(--jade-green);">' + esc(w.classicalExample) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);">Bạch thoại tương đương: ' + esc(w.modernMandarinEq) + '</div>' +
            '</div>'
          );
        }).join("") +
        '</div>';
    }

    return (
      '<section id="cce-v6-liushu-studio" style="margin-top:1.35rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">V6.0 PHÒNG CHIẾT TỰ LỤC THƯ, BẠN GIẢ HÁN–VIỆT, ĐỒ THỊ DANH TÁC &amp; VĂN NGÔN</div>' +
      '  <div class="filter-bar" style="margin:0.5rem 0 0.85rem;">' +
      subBar.map(function (sb) {
        return '<button type="button" class="filter-pill ' + (st.liushuTab === sb.id ? "active" : "") + '" data-v6st-act="ltab" data-val="' + sb.id + '">' + sb.lbl + '</button>';
      }).join("") +
      '  </div>' +
      content +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. Cosmology SVG Studios: 24 Solar Wheel, 12 Ziwu Clock, Wuxing Pentagram, Herbs, Microclimate
  // --------------------------------------------------------------------------
  function renderCosmologyVisualWheel(enM) {
    var cData = window.CCE_V6_COSMOLOGY_VISUAL || {};
    var solars = cData.solarTerms24 || [];
    var ziwu = cData.ziwuHours12 || [];
    var wx = cData.wuxingNodes5 || [];
    var herbs = cData.herbarium24 || [];
    var micros = cData.microclimateCases12 || [];
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

    // Build 24 clickable points around SVG ring
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

    // Wuxing Pentagon SVG
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
      body = (
        '<div class="grid grid-2" style="gap:1rem;">' +
        '  <div class="card" style="padding:0.9rem;background:var(--bg-paper);">' +
        '    <strong style="color:var(--imperial-red);">Đĩa Xoay 24 Tiết Khí Nông Lịch UNESCO (Nhấp chọn từng tiết khí)</strong>' +
        '    <svg viewBox="0 0 290 290" style="width:100%;max-width:300px;height:auto;display:block;margin:0.5rem auto;">' +
        '      <circle cx="145" cy="145" r="112" fill="none" stroke="#DFD5C2" stroke-width="1.5" />' +
        '      <circle cx="145" cy="145" r="48" fill="#F4EEE1" stroke="#C59B40" stroke-width="1.5" />' +
        '      <text x="145" y="140" text-anchor="middle" font-size="14" font-weight="700" fill="#8C2318">' + esc(curSolar.zh) + '</text>' +
        '      <text x="145" y="158" text-anchor="middle" font-size="10" fill="#1D1B18">' + esc(curSolar.vi) + ' (' + curSolar.deg + '°)</text>' +
        solarSvgNodes +
        '    </svg>' +
        '    <div style="font-size:0.8rem;padding:0.55rem;background:var(--bg-surface);border:1px solid var(--hairline);">' +
        '      <strong>' + esc(curSolar.zh + " · " + curSolar.vi) + ' (~' + esc(curSolar.dateApprox) + ')</strong><br>' +
        '      <span style="color:var(--jade-green);"><strong>Tam Hậu:</strong> ' + esc(curSolar.tamHau) + '</span><br>' +
        '      <span>' + esc(curSolar.descVi) + '</span>' +
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
        '<div class="grid grid-3" style="gap:0.75rem;max-height:540px;overflow:auto;">' +
        herbs.map(function (h) {
          return (
            '<article class="flashcard-layer" style="font-size:0.79rem;display:flex;flex-direction:column;gap:0.28rem;">' +
            '  <div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:130px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);"><img src="' + esc(h.image) + '" alt="' + esc(h.nameVi) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" /></div>' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-jade">' + esc(h.nature) + '</span><span>' + spk(h.zh) + ' ' + srsBtn(h.zh, h.pinyin, h.nameVi, h.culinaryVi, h.latin) + '</span></div>' +
            '  <strong class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);">' + esc(h.zh) + ' <span class="pinyin text-xs">' + esc(h.pinyin) + '</span></strong>' +
            '  <strong>' + esc(h.nameVi) + ' (<em>' + esc(h.latin) + '</em>)</strong>' +
            '  <div style="color:var(--text-secondary);">' + esc(h.culinaryVi) + '</div>' +
            '  <div style="font-size:0.72rem;color:var(--text-muted);">' + esc(h.nonClinicalReminderVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-2" style="gap:0.75rem;max-height:540px;overflow:auto;">' +
        micros.map(function (m) {
          return (
            '<article class="card" style="padding:0.85rem 1rem;font-size:0.8rem;">' +
            '  <strong style="color:var(--imperial-red);">' + esc(enM ? m.titleEn : m.titleVi) + '</strong>' +
            '  <p style="margin:0.25rem 0;color:var(--text-muted);"><strong>Thách thức Khí hậu:</strong> ' + esc(m.challengeVi) + '</p>' +
            '  <p style="margin:0.25rem 0;"><strong>Cơ chế Kiến trúc Cổ:</strong> ' + esc(m.mechanismVi) + '</p>' +
            '  <div style="color:var(--jade-green);font-size:0.76rem;"><strong>Nguyên lý Vật lý Hiện đại:</strong> ' + esc(m.physicsVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    }

    return (
      '<section id="cce-v6-cosmo-studio" style="margin-top:1.4rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">V6.0 ĐĨA THIÊN VĂN 24 TIẾT KHÍ, NGŨ HÀNH ĐỘNG, HERBARIUM 24 VỊ &amp; VI KHÍ HẬU KIẾN TRÚC</div>' +
      '  <div class="epistemic-box critical" style="margin:0.45rem 0 0.75rem;font-size:0.79rem;">' + esc(notice) + '</div>' +
      '  <div class="filter-bar" style="margin-bottom:0.75rem;">' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "wheel" ? "active" : "") + '" data-v6st-act="csub" data-val="wheel">Đĩa 24 Tiết Khí &amp; Ngũ Hành SVG</button>' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "herbs" ? "active" : "") + '" data-v6st-act="csub" data-val="herbs">Herbarium 24 Vị Thực Dưỡng</button>' +
      '    <button type="button" class="filter-pill ' + (st.cosmoSub === "micro" ? "active" : "") + '" data-v6st-act="csub" data-val="micro">12 Kiến Trúc Vi Khí Hậu Cổ</button>' +
      '  </div>' +
      body +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 4. Trade Studio: Incoterms 2020 Risk/Cost Visualizer + 10 Annotated Docs
  // --------------------------------------------------------------------------
  function renderTradeIncotermsAndDocs(enM) {
    var tData = window.CCE_V6_TRADE_AND_CSC || {};
    var incos = tData.incoterms2020_11 || [];
    var docs = tData.annotatedTradeDocs10 || [];
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
        '  <div class="editorial-kicker" style="color:var(--jade-green);">10 CHỨNG TỪ XUẤT NHẬP KHẨU ĐIỂM NÓNG (B/L · SMGS · ICS2 · FORM E · EUR.1 · CBAM · EUDR)</div>' +
        '  <div class="filter-bar" style="margin:0.45rem 0 0.75rem;">' +
        docs.map(function (dc) {
          return '<button type="button" class="filter-pill ' + (st.docId === dc.id ? "active" : "") + '" data-v6st-act="doc" data-val="' + esc(dc.id) + '">' + esc(dc.nameEn.split("(")[0].trim()) + '</button>';
        }).join("") +
        '  </div>' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;">' +
        '    <strong>' + esc(curDoc.nameVi) + ' — <span class="hanzi" style="color:var(--imperial-red);">' + esc(curDoc.nameZh) + '</span></strong>' +
        '    <span class="badge badge-outline">Cấp bởi: ' + esc(curDoc.issuerVi) + '</span>' +
        '  </div>' +
        '  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin:0.65rem 0;">' +
        spots.map(function (sp) {
          return '<button type="button" class="btn ' + (st.docBox === sp.boxNum ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v6st-act="dbox" data-val="' + sp.boxNum + '">Hotspot #' + sp.boxNum + ': ' + esc(sp.fieldEn.split("—")[0].slice(0, 32)) + '</button>';
        }).join("") +
        '  </div>' +
        (curSpot ? (
          '<div style="padding:0.8rem 0.95rem;background:var(--bg-paper);border:1px solid var(--hairline);font-size:0.82rem;">' +
          '  <div style="color:var(--imperial-red);font-weight:700;">' + esc(curSpot.fieldEn) + ' · <span class="hanzi">' + esc(curSpot.fieldZh) + '</span> ' + spk(curSpot.fieldZh) + '</div>' +
          '  <div style="margin:0.25rem 0;"><strong>Tiếng Việt:</strong> ' + esc(curSpot.fieldVi) + '</div>' +
          '  <div style="color:var(--imperial-red);margin:0.25rem 0;"><strong>Rủi ro Sai Sót:</strong> ' + esc(curSpot.complianceRiskVi) + '</div>' +
          '  <div style="color:var(--jade-green);"><strong>Mẹo Kiểm Toán EU/Hải Quan:</strong> ' + esc(curSpot.auditTipVi) + '</div>' +
          '</div>'
        ) : "") +
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
    var unis = tData.cscUniversities24 || [];
    var gantt = tData.cscGantt12Months || [];
    var ints = tData.cscInterview24 || [];
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
            '  <p style="margin:0.3rem 0 0;color:var(--text-secondary);">' + esc(w.summaryVi) + '</p>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.svSub === "csc_unis") {
      body =
        '<div class="grid grid-3" style="gap:0.65rem;max-height:540px;overflow:auto;">' +
        unis.map(function (u) {
          return (
            '<div class="flashcard-layer" style="font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;"><span class="badge badge-gold">Agency: ' + esc(u.agencyNo) + '</span>' + spk(u.zh) + '</div>' +
            '  <strong class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);">' + esc(u.zh) + '</strong><br>' +
            '  <strong>' + esc(u.nameVi) + '</strong> (' + esc(u.cityVi) + ')' +
            '  <div style="color:var(--jade-green);margin-top:0.2rem;">' + esc(u.majorsVi) + '</div>' +
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
        '<div class="grid grid-2" style="gap:0.65rem;max-height:540px;overflow:auto;">' +
        ints.map(function (q) {
          return (
            '<div class="card" style="padding:0.75rem 0.9rem;font-size:0.79rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(q.zh) + '</strong>' + spk(q.zh) + '</div>' +
            '  <div><strong>' + esc(q.vi) + '</strong></div>' +
            '  <div style="color:var(--jade-green);margin-top:0.25rem;"><strong>Gợi ý trả lời:</strong> ' + esc(q.guideVi) + '</div>' +
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

    return (
      '<section id="cce-v6-sinoviet-csc" style="margin-top:1.4rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">V6.0 ĐỐI SÁNH VĂN HIẾN TRUNG–VIỆT, BẢN ĐỒ HỌC BỔNG CSC 24 TRƯỜNG &amp; CAO TỐC 12306</div>' +
      '  <div class="filter-bar" style="margin:0.45rem 0 0.8rem;">' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "wonders" ? "active" : "") + '" data-v6st-act="svsub" data-val="wonders">10 Cặp Kỳ Quan Trung–Việt</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_unis" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_unis">24 Trường Học Bổng CSC</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_gantt" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_gantt">Gantt 12 Tháng Hồ Sơ CSC</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "csc_int" ? "active" : "") + '" data-v6st-act="svsub" data-val="csc_int">24 Câu Hỏi Phỏng Vấn CSC</button>' +
      '    <button type="button" class="filter-pill ' + (st.svSub === "hsr" ? "active" : "") + '" data-v6st-act="svsub" data-val="hsr">Mạng Cao Tốc 12306 Bát Tung</button>' +
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
      else if (act === "novel") st.novelIdx = Number(val) || 0;
      else if (act === "solar") st.solarIdx = Number(val) || 0;
      else if (act === "wx") st.wuxingEl = val;
      else if (act === "csub") st.cosmoSub = val;
      else if (act === "inco") st.incoCode = val;
      else if (act === "doc") { st.docId = val; st.docBox = 1; }
      else if (act === "dbox") st.docBox = Number(val) || 1;
      else if (act === "svsub") st.svSub = val;
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
            source: "V6 Visual Studio"
          });
          el.textContent = "Saved!";
        }
        return;
      }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
    document.addEventListener("change", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-v6st-act") === "gantt") {
        var map = loadGanttDone();
        map[el.getAttribute("data-val")] = Boolean(el.checked);
        try { localStorage.setItem("cce_v6_csc_gantt", JSON.stringify(map)); } catch (_e) {}
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
    exportCertificatePng: exportCertificatePng
  };
})();
