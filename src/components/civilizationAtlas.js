// ============================================================================
// CHINESE CULTURE EXPLORER — Wave 3.6 Modules
// 1. 6x7 Civilization Matrix (6 Eras x 7 Domains = 42 Links)
// 2. Customs Expansion V3 Renderer (10 Famous Teas, 6 Arts, 8 Ethnic Minorities)
// 3. 6 Guided Study Tracks Renderer (CCE_GUIDED_TRACKS_V3)
// 4. 3-Lang Article TTS Mini-Bar (VI/EN/zh-CN + 0.85x-1.25x Speeds) & Tiantan Embed
// ============================================================================

(function () {
  "use strict";

  var audioBarState = {
    lang: "vi",
    rate: 1.0,
    playing: false,
    paused: false
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // --------------------------------------------------------------------------
  // 1. 6x7 Civilization Atlas Matrix (6 Historical Horizons x 7 Domains)
  // --------------------------------------------------------------------------
  var ERAS = [
    { id: "xia-shang-zhou", vi: "Thượng Cổ (Hạ–Thương–Chu)", en: "Early Bronze (Xia–Zhou)" },
    { id: "qin-han", vi: "Tần – Hán Đế chế", en: "Qin–Han Empire" },
    { id: "tang", vi: "Tùy – Đường Quốc tế", en: "Sui–Tang Cosmopolitan" },
    { id: "song-yuan", vi: "Tống – Nguyên Đô thị", en: "Song–Yuan Renaissance" },
    { id: "ming-qing", vi: "Minh – Thanh Hoàng gia", en: "Ming–Qing Imperial" },
    { id: "modern", vi: "Cận – Đương đại (2026)", en: "Modern & 2026 Horizon" }
  ];

  var DOMAINS = [
    { id: "gov", vi: "Thể chế", en: "Governance" },
    { id: "phil", vi: "Triết học", en: "Philosophy" },
    { id: "arch", vi: "Kiến trúc", en: "Architecture" },
    { id: "arts", vi: "Thư Họa", en: "Fine Arts" },
    { id: "sci", vi: "Khoa học", en: "Science" },
    { id: "trade", vi: "Thương mại", en: "Trade" },
    { id: "vn", vi: "Trung – Việt", en: "Sino–Viet" }
  ];

  var MATRIX_CELLS = {
    "xia-shang-zhou": [
      { label: "Lễ Nhạc Tây Chu", en: "Zhou Rites", act: "open-article", id: "xia-shang-zhou-oracle-bones-rituals" },
      { label: "Chu Dịch & Bách Gia", en: "Hundred Schools", act: "nav", page: "philosophy" },
      { label: "Thành cổ Lương Chử", en: "Liangzhu Walls", act: "open-article", id: "modern-chinese-archaeology-sanxingdui-liangzhu" },
      { label: "Thanh đồng Tam Tinh Đôi", en: "Sanxingdui Bronze", act: "open-artifact", id: "sanxingdui-bronze-tree" },
      { label: "Giáp cốt Thiên văn", en: "Oracle Astronomy", act: "open-article", id: "xia-shang-zhou-oracle-bones-rituals" },
      { label: "Bối tệ & Ngọc bích", en: "Cowrie & Jade", act: "nav", page: "museum" },
      { label: "Giao lưu Văn Lang – Bách Việt", en: "Baiyue Contacts", act: "nav", page: "sino-vietnam" }
    ],
    "qin-han": [
      { label: "Quận Huyện & Thư đồng văn", en: "Qin Standardization", act: "open-article", id: "qin-institutional-standardization" },
      { label: "Nho – Pháp hợp lưu", en: "State Confucianism", act: "open-article", id: "pre-qin-legalism-xunzi-hanfeizi" },
      { label: "Trường Thành & Lăng Tần", en: "Great Wall & Terracotta", act: "nav", page: "regions" },
      { label: "Bức họa Lạc Thần", en: "Nymph of Luo River", act: "nav", page: "paintings" },
      { label: "Đô Giang Yển & Hồn Thiên Nghi", en: "Dujiangyan & Seismoscope", act: "open-article", id: "grand-canal-dujiangyan-hydraulic-empire" },
      { label: "Tơ lụa Trường An", en: "Han Silk Road", act: "open-article", id: "han-dynasty-silk-road-pax-sinica" },
      { label: "Âm Hán – Việt Thượng tầng", en: "Old Sino–Viet Strata", act: "open-article", id: "han-viet-phonology-middle-chinese" }
    ],
    "tang": [
      { label: "Tam Tỉnh Lục Bộ & Khoa cử", en: "Keju & Three Depts", act: "nav", page: "history" },
      { label: "Thiền tông & Tam giáo", en: "Chan & Three Teachings", act: "nav", page: "philosophy" },
      { label: "Mạc Cao Đôn Hoàng", en: "Dunhuang Mogao", act: "open-article", id: "dunhuang-mogao-buddhist-grotto-art" },
      { label: "Ngũ Ngưu Đồ (Hàn Hoảng)", en: "Five Oxen Painting", act: "open-painting", id: "wuniu-tu" },
      { label: "Khắc ván In 868", en: "Diamond Sutra Print", act: "open-article", id: "east-asian-woodblock-printing-encyclopedias" },
      { label: "Đô thị Trường An", en: "Chang'an Markets", act: "open-article", id: "sixteen-ancient-capitals-geopolitics" },
      { label: "Thiết Thanh Đường – Việt", en: "Tang–Viet Phonology", act: "open-article", id: "han-viet-phonology-middle-chinese" }
    ],
    "song-yuan": [
      { label: "Văn trị Sĩ đại phu", en: "Song Literati State", act: "open-article", id: "song-dynasty-urban-science-renaissance" },
      { label: "Lý học Chu Hy", en: "Zhu Xi Lixue", act: "open-article", id: "song-ming-neo-confucianism-zhu-wang" },
      { label: "Doanh Tạo Pháp Thức", en: "Yingzao Fashi Timber", act: "open-article", id: "comparative-timber-architecture-dougong" },
      { label: "Thanh Minh Thượng Hà", en: "Qingming Scroll", act: "open-artifact", id: "qingming-scroll" },
      { label: "La bàn & Tiền giấy Giao tử", en: "Compass & Jiaozi Notes", act: "open-article", id: "chinese-science-technology-history-modern" },
      { label: "Hải cảng Tuyền Châu", en: "Maritime Quanzhou", act: "open-province", id: "prov-fujian" },
      { label: "Gốm Chu Đậu & Thiền Trúc Lâm", en: "Chu Dau Ceramics", act: "nav", page: "sino-vietnam" }
    ],
    "ming-qing": [
      { label: "Nội các & Quân cơ xứ", en: "Grand Secretariat", act: "nav", page: "history" },
      { label: "Dương Minh Tâm học", en: "Wang Yangming Xinxue", act: "open-article", id: "song-ming-neo-confucianism-zhu-wang" },
      { label: "Tử Cấm Thành & Thiên Đàn 3D", en: "Forbidden City & Tiantan 3D", act: "open-article", id: "forbidden-city-3d-dissection" },
      { label: "Tứ Khố & Tam Hy Đường", en: "Siku & Calligraphy", act: "open-article", id: "calligraphy-masterpieces-three-rarities-lineage" },
      { label: "Bản Thảo Cương Mục", en: "Bencao Gangmu", act: "nav", page: "traditional" },
      { label: "Quảng Châu Thập Tam Hàng", en: "Canton Cohong Trade", act: "open-province", id: "prov-guangdong" },
      { label: "Kinh thành Huế – Bắc Kinh", en: "Hue & Beijing Axes", act: "open-article", id: "forbidden-city-3d-dissection" }
    ],
    "modern": [
      { label: "Cải cách & Đổi mới 1978–2026", en: "Reform & Opening", act: "open-article", id: "modern-china-transformation-1840-1949" },
      { label: "Phản biện Liên văn hóa", en: "Intercultural Critique", act: "nav", page: "philosophy" },
      { label: "Lâm viên Tô Châu & Di sản", en: "UNESCO Preservation", act: "open-article", id: "suzhou-classical-gardens-aesthetics" },
      { label: "Bảo tàng Số WebGL", en: "Digital 3D Museum", act: "nav", page: "museum" },
      { label: "AI DeepSeek & Bán dẫn 2026", en: "DeepSeek & Chips 2026", act: "nav", page: "library" },
      { label: "GACC 248 / RCEP / B2B", en: "GACC 248 & RCEP B2B", act: "nav", page: "business" },
      { label: "14 Biểu đồ Việt – Trung 2030", en: "VN–CN 2030 Trade Charts", act: "nav", page: "library" }
    ]
  };

  function renderMatrix6x7(enM) {
    return (
      '<section id="cce-civ-matrix-6x7" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--imperial-red);">' +
      '  <div class="section-header" style="margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "CIVILIZATION ATLAS MATRIX · 六代七域文明矩阵" : "Bản đồ Ma trận Văn minh 6 Thời kỳ × 7 Lĩnh vực · 六代七域文明矩阵") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;">' + (enM ? "Interactive 42-Node Cross-Era Civilization Matrix" : "42 Giao điểm Tri thức Xuyên suốt 4.000 Năm Lịch sử") + '</h3>' +
      '    </div>' +
      '  </div>' +
      '  <div class="academic-table-wrap">' +
      '    <table class="academic-table">' +
      '      <thead><tr><th>' + (enM ? "Era / Horizon" : "Thời kỳ") + '</th>' +
      DOMAINS.map(function (d) { return '<th>' + (enM ? d.en : d.vi) + '</th>'; }).join("") +
      '      </tr></thead><tbody>' +
      ERAS.map(function (era) {
        var row = MATRIX_CELLS[era.id] || [];
        return '<tr><td><strong>' + (enM ? era.en : era.vi) + '</strong></td>' +
          row.map(function (cell) {
            var attr = cell.act === "nav"
              ? 'data-action="nav" data-page="' + esc(cell.page) + '"'
              : 'data-action="' + esc(cell.act) + '" data-id="' + esc(cell.id) + '"';
            return '<td><button type="button" class="btn btn-ghost btn-sm" style="padding:0.2rem 0.35rem;font-size:0.76rem;text-align:left;white-space:normal;height:auto;line-height:1.3;" ' + attr + '>' + esc(enM ? cell.en : cell.label) + ' →</button></td>';
          }).join("") +
          '</tr>';
      }).join("") +
      '      </tbody></table></div></section>'
    );
  }

  // --------------------------------------------------------------------------
  // 2. Customs V3 Renderer (10 Famous Teas, Six Arts, 8 Ethnic Minorities)
  // --------------------------------------------------------------------------
  function renderCustomsExpansion(enM) {
    var cust = window.CCE_CUSTOMS_V3 || {};
    var teas = cust.topTenTeas || [];
    var arts6 = cust.sixArts || [];
    var eth = cust.ethnicMinorities || [];
    if (!teas.length && !arts6.length && !eth.length) return "";

    return (
      '<div id="cce-customs-v3-expansion" style="margin-top:2.5rem;">' +
      (teas.length ? (
        '<div class="card mb-2">' +
        '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "CHINESE TOP TEN TEAS · 中国十大名茶" : "Thập Đại Danh Trà Trung Hoa · 中国十大名茶") + '</div>' +
        '  <h3 class="card-title">' + teas.length + (enM ? " Canonical Famous Teas & Brewing Matrix" : " Danh trà Tiêu biểu & Chuẩn pha ấm") + '</h3>' +
        '  <div class="grid grid-2" style="gap:0.75rem;">' +
        teas.map(function (t) {
          return (
            '<div class="flashcard-layer" style="font-size:0.83rem;">' +
            '  <div style="display:flex;justify-content:space-between;gap:0.4rem;"><strong>' + esc(enM ? (t.nameEn || t.nameVi) : t.nameVi) + ' (<span class="hanzi">' + esc(t.nameZh) + '</span>)</strong><span class="badge badge-outline">' + esc(t.brewTempC || "") + '°C</span></div>' +
            '  <div style="color:var(--text-muted);margin:0.2rem 0;">' + esc(enM ? (t.teaTypeEn || t.teaTypeVi) : t.teaTypeVi) + ' · ' + esc(enM ? (t.teawareEn || t.teawareVi) : t.teawareVi) + '</div>' +
            '  <div>' + esc(enM ? (t.notesEn || t.notesVi) : t.notesVi) + '</div>' +
            '</div>'
          );
        }).join("") +
        '  </div></div>'
      ) : "") +
      (arts6.length ? (
        '<div class="card mb-2">' +
        '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "THE SIX ARTS OF ZHOU EDUCATION · 周代六艺教育" : "Lục Nghệ Giáo dục Nho gia Cổ điển · 周代六艺") + '</div>' +
        '  <h3 class="card-title">' + arts6.length + (enM ? " Classical Disciplines (Li · Yue · She · Yu · Shu · Shu)" : " Môn Tu thân Cổ điển (Lễ · Nhạc · Xạ · Ngự · Thư · Số)") + '</h3>' +
        '  <div class="grid grid-3" style="gap:0.75rem;">' +
        arts6.map(function (a) {
          return (
            '<div class="flashcard-layer" style="font-size:0.83rem;">' +
            '  <div class="hanzi" style="font-size:1.3rem;color:var(--imperial-red);">' + esc(a.nameZh) + '</div>' +
            '  <strong>' + esc(enM ? (a.nameEn || a.nameVi) : a.nameVi) + '</strong>' +
            '  <p style="margin:0.35rem 0 0.25rem;">' + esc(enM ? (a.westernZhouOriginEn || a.westernZhouOriginVi) : a.westernZhouOriginVi) + '</p>' +
            '  <div style="color:var(--text-secondary);">' + esc(enM ? (a.scholarSignificanceEn || a.scholarSignificanceVi) : a.scholarSignificanceVi) + '</div>' +
            '</div>'
          );
        }).join("") +
        '  </div></div>'
      ) : "") +
      (eth.length ? (
        '<div class="card">' +
        '  <div class="editorial-kicker" style="color:var(--antique-gold);">' + (enM ? "MULTI-ETHNIC CULTURAL HERITAGE · 多民族非遗档案" : "Di sản Đa dân tộc & Trang phục – Lễ hội · 多民族文化") + '</div>' +
        '  <h3 class="card-title">' + eth.length + (enM ? " Representative Ethnic Minority Cultures" : " Cộng đồng Dân tộc & Văn hóa Bản địa Tiêu biểu") + '</h3>' +
        '  <div class="grid grid-2" style="gap:0.75rem;">' +
        eth.map(function (eItem) {
          return (
            '<div class="flashcard-layer" style="font-size:0.83rem;">' +
            '  <strong>' + esc(enM ? (eItem.nameEn || eItem.nameVi) : eItem.nameVi) + ' (<span class="hanzi">' + esc(eItem.nameZh) + '</span>)</strong>' +
            '  <p style="margin:0.3rem 0;"><strong>' + (enM ? "Script:" : "Văn tự:") + '</strong> ' + esc(enM ? (eItem.scriptEn || eItem.scriptVi) : eItem.scriptVi) + '</p>' +
            '  <p style="margin:0 0 0.3rem;"><strong>' + (enM ? "Attire:" : "Y phục:") + '</strong> ' + esc(enM ? (eItem.attireEn || eItem.attireVi) : eItem.attireVi) + '</p>' +
            '  <p style="margin:0;color:var(--jade-green);"><strong>' + (enM ? "Festival:" : "Lễ hội:") + '</strong> ' + esc(enM ? (eItem.festivalEn || eItem.festivalVi) : eItem.festivalVi) + '</p>' +
            '</div>'
          );
        }).join("") +
        '  </div></div>'
      ) : "") +
      '</div>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. 6 Guided Academic Tracks (CCE_GUIDED_TRACKS_V3)
  // --------------------------------------------------------------------------
  function stepAttr(step) {
    var t = step.targetType;
    var id = step.targetId || "";
    if (t === "article") return 'data-action="open-article" data-id="' + esc(id) + '"';
    if (t === "museum") return 'data-action="open-artifact" data-id="' + esc(id) + '"';
    if (t === "painting") return 'data-action="open-painting" data-id="' + esc(id) + '"';
    if (t === "classic") return 'data-action="open-library-tab" data-tab="classics"';
    if (id === "history-sync-v3") return 'data-action="nav" data-page="history"';
    if (id === "liushu-dictionary" || id === "false-friends-v3") return 'data-action="nav" data-page="learning"';
    if (id === "concept-pairs-v3") return 'data-action="nav" data-page="philosophy"';
    if (id === "customs-tea-ethnic") return 'data-action="nav" data-page="traditional"';
    return 'data-action="nav" data-page="business"';
  }

  function renderGuidedTracks(enM, completedIds) {
    var tracks = window.CCE_GUIDED_TRACKS_V3 || [];
    if (!tracks.length) return "";
    var doneSet = {};
    (completedIds || []).forEach(function (id) { doneSet[id] = true; });
    return (
      '<section id="cce-guided-tracks-v3" style="margin-top:2rem;">' +
      '  <div class="section-header" style="margin-bottom:0.85rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "6 GUIDED ACADEMIC SYLLABI · 6条导师导修路线" : "6 Lộ trình Học thuật Có Hướng dẫn (54 Chặng) · 导修学术路线") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;">' + (enM ? "Curated Step-by-Step Thematic Tracks" : "Hệ thống Chuyên đề Tuần tự Từ Nhập môn Đến Thực chiến B2B") + '</h3>' +
      '    </div>' +
      '  </div>' +
      '  <div class="grid grid-2">' +
      tracks.map(function (tr) {
        return (
          '<article class="card">' +
          '  <h4 style="margin:0 0 0.35rem;font-size:1.08rem;">' + esc(enM ? (tr.titleEn || tr.titleVi) : tr.titleVi) + '</h4>' +
          '  <p style="font-size:0.83rem;color:var(--text-secondary);margin-bottom:0.75rem;">' + esc(enM ? (tr.descEn || tr.descVi) : tr.descVi) + '</p>' +
          '  <div style="display:flex;flex-direction:column;gap:0.35rem;">' +
          (tr.steps || []).slice(0, 6).map(function (s) {
            var isDone = Boolean(doneSet[s.targetId]);
            return '<button type="button" class="btn btn-ghost btn-sm" style="justify-content:space-between;text-align:left;border:1px solid var(--hairline);white-space:normal;height:auto;" ' + stepAttr(s) + '><span>' + (isDone ? "✓ " : s.stepNumber + ". ") + esc(enM ? (s.titleEn || s.titleVi) : s.titleVi) + '</span><span>→</span></button>';
          }).join("") +
          '  </div>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 4. 3-Lang Article TTS Mini-Bar (VI | EN | zh-CN + 0.85x..1.25x) + Tiantan
  // --------------------------------------------------------------------------
  function renderArticleTtsBar(enM) {
    var speeds = [0.85, 1.0, 1.15, 1.25];
    var langs = [
      { code: "vi", label: "VI Audio" },
      { code: "en", label: "EN Audio" },
      { code: "zh-CN", label: "中文朗读" }
    ];
    return (
      '<div id="cce-article-tts-bar" style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.5rem;padding:0.55rem 0.8rem;background:var(--bg-surface);border:1px solid var(--hairline);margin-bottom:1rem;font-size:0.78rem;">' +
      '  <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">' +
      '    <strong>' + (enM ? "Listen Article:" : "Nghe Chuyên luận:") + '</strong>' +
      langs.map(function (l) {
        return '<button type="button" class="filter-pill ' + (audioBarState.lang === l.code ? "active" : "") + '" data-tts-act="lang" data-val="' + l.code + '" style="padding:0.18rem 0.5rem;font-size:0.74rem;">' + l.label + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;align-items:center;gap:0.35rem;flex-wrap:wrap;">' +
      speeds.map(function (sp) {
        return '<button type="button" class="filter-pill ' + (Math.abs(audioBarState.rate - sp) < 0.01 ? "active" : "") + '" data-tts-act="rate" data-val="' + sp + '" style="padding:0.18rem 0.45rem;font-size:0.72rem;">' + sp + '×</button>';
      }).join("") +
      '    <button type="button" class="btn btn-primary btn-sm" data-tts-act="play" style="padding:0.2rem 0.55rem;">' + (enM ? "Play" : "Phát") + '</button>' +
      '    <button type="button" class="btn btn-secondary btn-sm" data-tts-act="pause" style="padding:0.2rem 0.55rem;">' + (enM ? "Pause" : "Tạm dừng") + '</button>' +
      '    <button type="button" class="btn btn-ghost btn-sm" data-tts-act="stop" style="padding:0.2rem 0.45rem;">' + (enM ? "Stop" : "Dừng") + '</button>' +
      '  </div>' +
      '</div>'
    );
  }

  function renderTiantanEmbed(uiLang, enM) {
    var safeLang = uiLang || "vi";
    return (
      '<section id="cce-tiantan-article-embed" class="card mb-2" style="padding:0;overflow:hidden;border:1px solid var(--border-gold);margin:1.25rem 0;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;padding:0.55rem 0.85rem;background:#161513;color:#F2EFE9;font-size:0.82rem;flex-wrap:wrap;gap:0.5rem;">' +
      '    <span><strong>天坛祈年殿 3D Digital Twin</strong> · ' + (enM ? "Synchronized to " : "Đồng bộ ngôn ngữ: ") + '<code>' + esc(safeLang) + '</code></span>' +
      '    <a href="assets/interactive/tiantan-3d-heritage.html?lang=' + encodeURIComponent(safeLang) + '" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm" style="font-size:0.74rem;padding:0.2rem 0.5rem;">' + (enM ? "Open Fullscreen 3D →" : "Mở Toàn màn hình →") + '</a>' +
      '  </div>' +
      '  <iframe id="cce-tiantan-iframe" title="Temple of Heaven 3D Cosmology & Joinery" src="assets/interactive/tiantan-3d-heritage.html?lang=' + encodeURIComponent(safeLang) + '" style="width:100%;height:480px;border:0;display:block;" loading="lazy"></iframe>' +
      '</section>'
    );
  }

  function bindEvents() {
    if (window._cceAtlasBound || typeof document === "undefined") return;
    window._cceAtlasBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-tts-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-tts-act");
      var speech = window.CCE_SPEECH;
      if (act === "lang") {
        audioBarState.lang = el.getAttribute("data-val") || "vi";
        var bar = document.getElementById("cce-article-tts-bar");
        if (bar) bar.querySelectorAll('[data-tts-act="lang"]').forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-val") === audioBarState.lang); });
      } else if (act === "rate") {
        audioBarState.rate = parseFloat(el.getAttribute("data-val")) || 1.0;
        if (speech) speech.setRate(audioBarState.rate);
        var barR = document.getElementById("cce-article-tts-bar");
        if (barR) barR.querySelectorAll('[data-tts-act="rate"]').forEach(function (b) { b.classList.toggle("active", Math.abs(parseFloat(b.getAttribute("data-val")) - audioBarState.rate) < 0.01); });
      } else if (act === "play") {
        if (!speech) return;
        speech.setRate(audioBarState.rate);
        var prose = document.querySelector(".article-prose");
        var text = prose ? prose.innerText : "";
        if (audioBarState.lang === "zh-CN") {
          var zhMatches = text.match(/[\u4e00-\u9fff，。；！？、]{2,}/g) || [];
          text = zhMatches.slice(0, 12).join("。") || "欢迎研读中华文化探索数字博物馆专论。";
        }
        var chunks = String(text).replace(/\s+/g, " ").match(/.{1,240}(?:\s|$)/g) || [];
        var code = audioBarState.lang === "vi" ? "vi-VN" : audioBarState.lang === "en" ? "en-US" : "zh-CN";
        speech.playSegments(chunks.slice(0, 16), code);
      } else if (act === "pause") {
        if (speech && speech.togglePause) speech.togglePause();
      } else if (act === "stop") {
        if (speech && speech.stopAll) speech.stopAll();
      }
    });
  }

  bindEvents();

  window.CCE_CIV_ATLAS = {
    renderMatrix6x7: renderMatrix6x7,
    renderCustomsExpansion: renderCustomsExpansion,
    renderGuidedTracks: renderGuidedTracks,
    renderArticleTtsBar: renderArticleTtsBar,
    renderTiantanEmbed: renderTiantanEmbed
  };
})();
