// ============================================================================
// CHINESE CULTURE EXPLORER — Google Arts & Culture Discovery Suite & Benchmarks
// Powers Homepage Accordion, +/- Zoom Spotlight, Circular-Fan Bento, Almanac,
// Branching Pills, 18-Era Synchrony Timeline & Deep Cultural/Travel Panels.
// ============================================================================
(function () {
  "use strict";

  var SPOTLIGHT_META = {
    "qianli-jiangshan": { img: "assets/images/paintings/22_qianli_jiangshan.jpg", titleVi: "Thiên Lý Giang Sơn Đồ", titleEn: "A Thousand Miles of Rivers and Mountains", zh: "千里江山图", action: "open-painting-detail", id: "qianli-jiangshan" },
    "qingming-shanghe": { img: "assets/images/paintings/21_qingming_shanghe.jpg", titleVi: "Thanh Minh Thượng Hà Đồ", titleEn: "Along the River During the Qingming Festival", zh: "清明上河图", action: "open-painting-detail", id: "qingming-shanghe" },
    "fuchun-shanju": { img: "assets/images/paintings/32_fuchun_shanju.jpg", titleVi: "Phú Xuân Sơn Cư Đồ", titleEn: "Dwelling in the Fuchun Mountains", zh: "富春山居图", action: "open-painting-detail", id: "fuchun-shanju" },
    "luoshenfu-tu": { img: "assets/images/paintings/01_luoshenfu_tu.jpg", titleVi: "Lạc Thần Phú Đồ", titleEn: "Nymph of the Luo River", zh: "洛神赋图", action: "open-painting-detail", id: "luoshenfu-tu" },
    "hanxizai-yeyan": { img: "assets/images/paintings/16_hanxizai_yeyan.jpg", titleVi: "Hàn Hy Tái Dạ Yến Đồ", titleEn: "Night Revels of Han Xizai", zh: "韩熙载夜宴图", action: "open-painting-detail", id: "hanxizai-yeyan" },
    "early-spring-guo-xi": { img: "assets/images/paintings/19_zao_chun_tu.jpg", titleVi: "Tảo Xuân Đồ", titleEn: "Early Spring", zh: "早春图", action: "open-painting-detail", id: "early-spring-guo-xi" },
    "travelers-among-mountains-fan-kuan": { img: "assets/images/paintings/18_xishan_xinglv.jpg", titleVi: "Khê Sơn Hành Lữ Đồ", titleEn: "Travelers Among Mountains and Streams", zh: "溪山行旅图", action: "open-painting-detail", id: "travelers-among-mountains-fan-kuan" },
    "auspicious-cranes-huizong": { img: "assets/images/paintings/23_rui_he_tu.jpg", titleVi: "Thụy Hạc Đồ", titleEn: "Auspicious Cranes", zh: "瑞鹤图", action: "open-painting-detail", id: "auspicious-cranes-huizong" },
    "spring-outing-zhan-ziqian": { img: "assets/images/paintings/04_youchun_tu.jpg", titleVi: "Du Xuân Đồ", titleEn: "Strolling About in Spring", zh: "游春图", action: "open-painting-detail", id: "spring-outing-zhan-ziqian" },
    "night-shining-white-han-gan": { img: "assets/images/paintings/56_zhaoye_bai_tu.jpg", titleVi: "Chiếu Dạ Bạch Đồ", titleEn: "Night-Shining White", zh: "照夜白图", action: "open-painting-detail", id: "night-shining-white-han-gan" },
    "houmuwu-ding": { img: "assets/images/museum/daxiguan-ding.jpg", titleVi: "Hậu Mẫu Mậu Đỉnh", titleEn: "Houmuwu Bronze Ding Cauldron", zh: "后母戊鼎", action: "open-artifact", id: "houmuwu-ding" },
    "ru-ware-narcissus-basin": { img: "assets/images/museum/ru-yao-tianqing.jpg", titleVi: "Chậu Thủy Tiên Gốm Nhữ Diêu", titleEn: "Ru Ware Narcissus Basin", zh: "汝窑青瓷水仙盆", action: "open-artifact", id: "ru-ware-tianqing" },
    "jadeite-cabbage": { img: "assets/images/museum/liangzhu-yucong.jpg", titleVi: "Ngọc Điêu Bảo Tàng", titleEn: "Imperial Jade Craftsmanship", zh: "玉雕珍品", action: "open-artifact", id: "liangzhu-yucong" },
    "flying-horse-gansu": { img: "assets/images/museum/ma-dap-phi-yen.jpg", titleVi: "Mã Đạp Phi Yến", titleEn: "Galloping Horse Treading on a Flying Swallow", zh: "马踏飞燕", action: "open-artifact", id: "ma-dap-phi-yen" },
    "sanxingdui-bronze-mask": { img: "assets/images/museum/sanxingdui-mask.jpg", titleVi: "Mặt Nạ Đồng Tam Tinh Đôi", titleEn: "Sanxingdui Bronze Mask", zh: "三星堆青铜纵目面具", action: "open-artifact", id: "sanxingdui-bronze-mask" }
  };

  var ZOOM_STEPS = [1.0, 1.6, 2.4, 3.2];
  var st = {
    accIdx: 0,
    spotIdx: -1,
    zoomIdx: 0,
    panX: 0,
    panY: 0,
    hotspotIdx: 0,
    solarIdx: -1,
    syncIdx: 8,
    hanNomIdx: 0,
    hskIdx: 0,
    grammarPage: 0,
    bound: false
  };

  function getV10() {
    return window.CCE_V10_DATA || {};
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getCurrentSolarTermIndex(terms) {
    if (!Array.isArray(terms) || !terms.length) return 0;
    var now = new Date();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var approxIdx = ((m - 2 + 12) % 12) * 2 + (d >= 19 ? 1 : 0);
    return Math.max(0, Math.min(terms.length - 1, approxIdx));
  }

  function ensureSpotIdx(keysLen) {
    if (st.spotIdx >= 0 && st.spotIdx < keysLen) return st.spotIdx;
    if (window.CCE_COOKIES && typeof window.CCE_COOKIES.getDailyPick === "function") {
      st.spotIdx = window.CCE_COOKIES.getDailyPick(keysLen).spotIdx;
    } else {
      st.spotIdx = 0;
    }
    return st.spotIdx;
  }

  function renderBranchPills(pills, enM) {
    if (!Array.isArray(pills) || !pills.length) return "";
    var routeMap = {
      "/quoc-hoa": { page: "paintings", sub: "handscroll" },
      "/bao-tang": { page: "museum", sub: "studio3d" },
      "/chuyen-luan": { page: "explore", sub: "directory" },
      "/tinh-thanh": { page: "regions", sub: "cities16" },
      "/kinh-doanh": { page: "business", sub: "laozihao" },
      "/lich-su": { page: "history", sub: "dynasties" },
      "/triet-hoc": { page: "philosophy", sub: "schools" },
      "/trung-viet": { page: "sino-vietnam", sub: "exchange" }
    };
    return (
      '<div class="v10-branch-pills">' +
      pills.slice(0, 2).map(function (pl) {
        var r = routeMap[pl.targetRoute] || { page: "explore", sub: "" };
        var lbl = enM ? (pl.labelEn || pl.labelVi) : pl.labelVi;
        return (
          '<button type="button" class="v10-branch-pill" data-v10-go-page="' + esc(r.page) + '" data-v10-go-sub="' + esc(r.sub) + '">' +
          '  <span>' + esc(lbl) + '</span><span aria-hidden="true">→</span>' +
          '</button>'
        );
      }).join("") +
      '</div>'
    );
  }

  function renderTopPicksAccordion(enM) {
    var panels = [
      {
        kickerVi: "Trường quyển Quốc họa",
        kickerEn: "RTL Handscrolls",
        titleVi: "Hán Cung Xuân Hiểu & Trường Quyển Quốc Họa",
        titleEn: "Spring Morning in the Han Palace & Handscrolls",
        descVi: "Trải cuộn Phải sang Trái các kiệt tác tranh cuộn Tống – Minh độ nét cao kèm thuyết minh từng chặng.",
        descEn: "Unroll high-resolution Song and Ming silk handscrolls right-to-left with synced commentary.",
        img: "assets/images/paintings/39_hangong_chunxiao.jpg",
        page: "paintings",
        sub: "handscroll"
      },
      {
        kickerVi: "Phòng Mô Hình 3D",
        kickerEn: "Interactive 3D Lab",
        titleVi: "28 Studio 3D Kiến Trúc & Cổ Vật",
        titleEn: "28 Interactive 3D Heritage Models",
        descVi: "Xoay 360 độ mộng Đấu Củng, Thiên Đàn, Hậu Mẫu Mậu Đỉnh, Đô Giang Yển và Cổ Cầm 7 dây.",
        descEn: "Orbit Dougong brackets, Temple of Heaven, Houmuwu Ding, and Guqin in WebGL.",
        img: "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg",
        page: "museum",
        sub: "studio3d"
      },
      {
        kickerVi: "Chuyên luận Khảo cứu",
        kickerEn: "Scholarly Archive",
        titleVi: "108 Chuyên Luận & Nguyên Văn Hán Cổ",
        titleEn: "108 Monographs & Classical Grammar",
        descVi: "Trình đọc theo từng chương gọn gàng kèm chiết tự Hán–Việt, ngữ pháp và trích dẫn APA.",
        descEn: "Chapter-paginated research essays with Han-Viet phonology and primary citations.",
        img: "assets/images/articles/hero-hundred-schools.jpg",
        page: "explore",
        sub: "directory"
      },
      {
        kickerVi: "120 Lão Tự Hào",
        kickerEn: "Honored Brands",
        titleVi: "Bắc Kinh Đồng Nhân Đường & Thương Hiệu Trăm Năm",
        titleEn: "Tong Ren Tang & 120 Historic Brands",
        descVi: "Khảo cứu hiệu thuốc cổ, danh trà, tửu phường và 42 Chỉ dẫn Địa lý bảo hộ Âu–Trung.",
        descEn: "Examine century-old apothecaries, porcelain kilns, and 42 EU-China protected GIs.",
        img: "assets/images/brands/tongrentang.jpg",
        page: "business",
        sub: "laozihao"
      },
      {
        kickerVi: "34 Tỉnh & 16 Đô Thị",
        kickerEn: "Regional Field Atlas",
        titleVi: "Cẩm Nang Ga Cao Tốc 12306 & Quá Cảnh 240 Giờ",
        titleEn: "High-Speed Rail Hubs & 48h City Trails",
        descVi: "Thông tin thực địa cốt lõi từng tỉnh thành, hành trình 48 giờ và liên kết cửa khẩu Việt–Trung.",
        descEn: "Practical HSR hub dossiers, 48-hour itineraries, and border corridors.",
        img: "assets/images/academic/guilin-li-river.jpg",
        page: "regions",
        sub: "cities16"
      }
    ];

    return (
      '<section class="v10-gac-section" id="v10-gac-top-picks" aria-label="' + (enM ? "Today's Top Picks" : "Tiêu điểm chọn lọc hôm nay") + '">' +
      '  <div class="container">' +
      (window.CCE_COOKIES ? window.CCE_COOKIES.renderResumePill(enM) : "") +
      '    <div class="v10-gac-head">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "CURATED GALLERY STRIP" : "TIÊU ĐIỂM CHỌN LỌC HÔM NAY") + '</div>' +
      '        <h2 class="v10-gac-title">' + (enM ? "Explore five pillars without scrolling" : "Khám phá năm trụ cột ngay trên một khung hình") + '</h2>' +
      '      </div>' +
      '      <span style="font-size:0.79rem;color:var(--text-muted);">' + (enM ? "Hover or tap a panel to expand" : "Di chuột hoặc chạm để mở rộng từng chủ đề") + '</span>' +
      '    </div>' +
      '    <div class="v10-gac-accordion" role="list">' +
      panels.map(function (p, idx) {
        var active = idx === st.accIdx;
        return (
          '<button type="button" class="v10-acc-panel ' + (active ? "is-expanded" : "") + '" data-v10-acc="' + idx + '" data-v10-go-page="' + esc(p.page) + '" data-v10-go-sub="' + esc(p.sub) + '">' +
          '  <img src="' + esc(p.img) + '" alt="' + esc(enM ? p.titleEn : p.titleVi) + '" loading="' + (idx < 2 ? "eager" : "lazy") + '" decoding="async" />' +
          '  <div class="v10-acc-scrim"></div>' +
          '  <div class="v10-acc-content">' +
          '    <span class="v10-acc-kicker">' + esc(enM ? p.kickerEn : p.kickerVi) + '</span>' +
          '    <h3 class="v10-acc-heading">' + esc(enM ? p.titleEn : p.titleVi) + '</h3>' +
          '    <p class="v10-acc-desc">' + esc(enM ? p.descEn : p.descVi) + '</p>' +
          '  </div>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderObjectSpotlight(enM) {
    var d = getV10();
    var zs = d.zoomStage15 || {};
    var keys = Object.keys(zs);
    if (!keys.length) return "";
    var sIdx = ensureSpotIdx(keys.length);
    var key = keys[sIdx] || keys[0];
    var obj = zs[key];
    var meta = SPOTLIGHT_META[key] || { img: "assets/images/museum/daxiguan-ding.jpg", titleVi: key, titleEn: key, zh: "", action: "nav", id: "museum" };
    var tomb = obj.tombstone || {};
    var hotspots = Array.isArray(obj.zoomHotspots) ? obj.zoomHotspots : [];
    var hsIdx = Math.max(0, Math.min(st.hotspotIdx, Math.max(0, hotspots.length - 1)));
    var activeHs = hotspots[hsIdx] || null;
    var lookPack = (d.artifactsPigments && d.artifactsPigments.artifacts && d.artifactsPigments.artifacts[key]) || null;
    var zoomScale = ZOOM_STEPS[st.zoomIdx] || 1.0;

    return (
      '<section class="v10-gac-section" id="v10-gac-spotlight" aria-label="' + (enM ? "Object Spotlight" : "Sân khấu bảo vật") + '">' +
      '  <div class="container">' +
      '    <div class="v10-gac-head">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "MUSEUM OBJECT SPOTLIGHT" : "SÂN KHẤU BẢO VẬT · SOI CẬN CẢNH") + '</div>' +
      '        <h2 class="v10-gac-title">' + esc(enM ? meta.titleEn : meta.titleVi) + (meta.zh ? ' <span class="hanzi" style="font-weight:500;">' + esc(meta.zh) + '</span>' : '') + '</h2>' +
      '      </div>' +
      '      <div style="display:flex;gap:0.4rem;align-items:center;">' +
      '        <button type="button" class="btn btn-secondary btn-sm" data-v10-spot-step="-1">← ' + (enM ? "Prev" : "Trước") + '</button>' +
      '        <span style="font-size:0.78rem;color:var(--text-muted);font-family:var(--font-mono);">' + (sIdx + 1) + '/' + keys.length + '</span>' +
      '        <button type="button" class="btn btn-secondary btn-sm" data-v10-spot-step="1">' + (enM ? "Next" : "Tiếp") + ' →</button>' +
      '      </div>' +
      '    </div>' +
      '    <div class="v10-gac-spotlight">' +
      '      <div class="v10-spot-meta">' +
      '        <div class="v10-spot-tombstone">' +
      '          <div><strong>' + (enM ? "Dynasty:" : "Niên đại:") + '</strong> ' + esc(tomb.dynasty || "") + '</div>' +
      '          <div><strong>' + (enM ? "Medium:" : "Chất liệu:") + '</strong> ' + esc(tomb.medium || "") + '</div>' +
      '          <div><strong>' + (enM ? "Dimensions:" : "Kích thước:") + '</strong> ' + esc(tomb.dimensions || "") + '</div>' +
      '          <div><strong>' + (enM ? "Holding:" : "Lưu trữ:") + '</strong> ' + esc(tomb.museum || "") + '</div>' +
      '        </div>' +
      (activeHs ? (
        '        <div class="v10-spot-step-box">' +
        '          <div style="font-size:0.71rem;color:#E5A93C;font-weight:700;text-transform:uppercase;margin-bottom:0.25rem;">' + (enM ? "Inspection Pin " : "Điểm soi giám định ") + (hsIdx + 1) + '/' + hotspots.length + ': ' + esc(activeHs.titleVi) + '</div>' +
        '          <div>' + esc(enM ? (activeHs.detailEn || activeHs.detailVi) : activeHs.detailVi) + '</div>' +
        '        </div>'
      ) : "") +
      (lookPack ? (
        '        <div class="v10-spot-step-box" style="font-size:0.76rem;color:#C8C2B4;">' +
        esc((enM ? lookPack.threeStepLookEn : lookPack.threeStepLookVi)[0] || "") +
        '        </div>'
      ) : "") +
      '        <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:auto;">' +
      '          <button type="button" class="btn btn-primary btn-sm" data-action="' + esc(meta.action) + '" data-id="' + esc(meta.id) + '">' + (enM ? "Open full dossier →" : "Mở hồ sơ chi tiết →") + '</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" data-action="open-3d-studio" data-id="relics" data-studio="relics">' + (enM ? "Launch 3D Studio" : "Mở Studio 3D xoay") + '</button>' +
      '          <button type="button" class="btn btn-ghost btn-sm" style="color:#E5A93C;" data-v10-feedback-open="1" data-v10-feedback-cat="image_3d" data-v10-feedback-context="' + esc((enM ? meta.titleEn : meta.titleVi) + " (" + key + ")") + '">' + (enM ? "Report issue" : "Góp ý mục này") + '</button>' +
      '        </div>' +
      '      </div>' +
      '      <div class="v10-spot-stage" id="v10-spot-stage">' +
      '        <div class="v10-spot-canvas-wrap" id="v10-spot-canvas-wrap" style="transform:translate3d(' + st.panX + 'px,' + st.panY + 'px,0) scale(' + zoomScale + ');cursor:' + (zoomScale > 1 ? "grab" : "zoom-in") + ';">' +
      '          <img src="' + esc(meta.img) + '" alt="' + esc(enM ? meta.titleEn : meta.titleVi) + '" loading="lazy" decoding="async" />' +
      hotspots.map(function (hs, idx) {
        return '<button type="button" class="v10-spot-pin ' + (idx === hsIdx ? "is-active" : "") + '" style="left:' + Number(hs.xPct || 50) + '%;top:' + Number(hs.yPct || 50) + '%;" data-v10-spot-pin="' + idx + '" title="' + esc(hs.titleVi) + '">' + (idx + 1) + '</button>';
      }).join("") +
      '        </div>' +
      '        <div class="v10-spot-zoom-ctrl" role="group" aria-label="' + (enM ? "Zoom controls" : "Điều khiển phóng to thu nhỏ") + '">' +
      '          <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="-1" aria-label="' + (enM ? "Zoom out" : "Thu nhỏ") + '">−</button>' +
      '          <span style="font-family:var(--font-mono);font-size:0.74rem;color:#E5A93C;padding:0 4px;">' + zoomScale.toFixed(1) + 'x</span>' +
      '          <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="1" aria-label="' + (enM ? "Zoom in" : "Phóng to") + '">+</button>' +
      '          <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="0" aria-label="' + (enM ? "Reset zoom" : "Đặt lại 1x") + '" style="font-size:0.72rem;">1:1</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderGeometricBento(enM) {
    var d = getV10();
    var zs = d.zoomStage15 || {};
    var bentoOrder = [
      { key: "auspicious-cranes-huizong", shape: "fan-circle", tagVi: "Đoàn phiến · Hội họa", tagEn: "Round Fan" },
      { key: "sanxingdui-bronze-mask", shape: "vertical-scroll", tagVi: "Lập trục · Cổ vật", tagEn: "Archival Relic" },
      { key: "early-spring-guo-xi", shape: "vertical-scroll", tagVi: "Lập trục · Sơn thủy", tagEn: "Hanging Scroll" },
      { key: "ru-ware-narcissus-basin", shape: "fan-circle", tagVi: "Đoàn phiến · Gốm Nhữ", tagEn: "Song Ceramic" },
      { key: "fuchun-shanju", shape: "horizontal-panel", tagVi: "Hoành phi · Trường quyển", tagEn: "Horizontal Scroll" }
    ];

    var almanac = d.almanac || {};
    var terms = almanac.solarTerms24 || [];
    var sIdx = st.solarIdx >= 0 ? st.solarIdx : getCurrentSolarTermIndex(terms);
    var curTerm = terms[sIdx] || {};

    return (
      '<section class="v10-gac-section" id="v10-gac-bento" aria-label="' + (enM ? "Curated Aesthetic Frames" : "Nhịp điệu khung hình Đông Á") + '">' +
      '  <div class="container">' +
      '    <div class="v10-gac-head">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "CURATORIAL MOSAIC · ROUND FAN & SCROLL" : "CHỦ ĐỀ TRONG NGÀY · ĐOÀN PHIẾN VÀ LẬP TRỤC") + '</div>' +
      '        <h2 class="v10-gac-title">' + (enM ? "Visual cadence across dynasties and forms" : "Ngắm tác phẩm qua khung quạt tròn thời Tống và tranh cuộn") + '</h2>' +
      '      </div>' +
      '    </div>' +
      '    <div class="v10-bento-mosaic">' +
      bentoOrder.map(function (b) {
        var item = zs[b.key];
        var meta = SPOTLIGHT_META[b.key];
        if (!item || !meta) return "";
        var isWide = b.shape === "horizontal-panel";
        var frameCls = b.shape === "fan-circle" ? "v10-frame-fan" : (isWide ? "v10-frame-scroll-h" : "v10-frame-scroll-v");
        return (
          '<button type="button" class="v10-bento-item ' + (isWide ? "is-wide" : "") + '" data-action="' + esc(meta.action) + '" data-id="' + esc(meta.id) + '">' +
          '  <div class="' + frameCls + '"><img src="' + esc(meta.img) + '" alt="' + esc(enM ? meta.titleEn : meta.titleVi) + '" loading="lazy" decoding="async" /></div>' +
          '  <div>' +
          '    <div class="v10-acc-kicker" style="color:#821C1C;">' + esc(enM ? b.tagEn : b.tagVi) + '</div>' +
          '    <div style="font-weight:700;font-size:0.98rem;margin-top:0.15rem;">' + esc(enM ? meta.titleEn : meta.titleVi) + ' <span class="hanzi" style="font-weight:400;color:var(--text-muted);">' + esc(meta.zh) + '</span></div>' +
          '    <div style="font-size:0.78rem;color:var(--text-muted);">' + esc((item.tombstone && item.tombstone.dynasty) || "") + ' · ' + esc((item.tombstone && item.tombstone.museum) || "") + '</div>' +
          '  </div>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      renderBranchPills(curTerm.branchPills, enM) +
      '  </div>' +
      '</section>'
    );
  }

  function renderAlmanacSplit(enM) {
    var d = getV10();
    var alm = d.almanac || {};
    var terms = alm.solarTerms24 || [];
    var events = alm.historicalEvents36 || [];
    if (!terms.length) return "";

    var sIdx = st.solarIdx >= 0 ? (st.solarIdx % terms.length) : getCurrentSolarTermIndex(terms);
    var term = terms[sIdx] || terms[0];
    var ev = events[sIdx % Math.max(1, events.length)] || null;

    var cards = [
      { id: "qianli-jiangshan", type: "painting", titleVi: "Thiên Lý Giang Sơn Đồ", titleEn: "Rivers and Mountains", img: "assets/images/paintings/22_qianli_jiangshan.jpg", action: "open-painting-detail" },
      { id: "spring-outing-zhan-ziqian", type: "painting", titleVi: term.relatedPaintingHint || "Du Xuân Đồ", titleEn: "Seasonal Landscape", img: "assets/images/paintings/04_youchun_tu.jpg", action: "open-painting-detail" },
      { id: "six-teas-gongfu", type: "article", titleVi: "Lục Đại Trà Loại và Công Phu Trà", titleEn: "Six Tea Categories Monograph", img: "assets/images/articles/hero-six-teas-gongfu.jpg", action: "open-article" },
      { id: "astronomical-calendar", type: "article", titleVi: "Lịch Pháp 24 Tiết Khí Đông Á", titleEn: "East Asian 24 Solar Terms", img: "assets/images/articles/hero-yinyang.jpg", action: "open-article" }
    ];

    return (
      '<section class="v10-gac-section" id="v10-gac-almanac" aria-label="' + (enM ? "24 Solar Terms & History" : "Ngày này trong lịch sử và 24 Tiết khí") + '">' +
      '  <div class="container">' +
      '    <div class="v10-almanac-split">' +
      '      <div style="display:flex;flex-direction:column;gap:0.65rem;">' +
      '        <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">' +
      '          <span class="badge badge-gold" style="border-color:' + esc(term.seasonColorHex || "#821C1C") + ';">' + (enM ? "SOLAR TERM" : "TIẾT KHÍ HIỆN HÀNH") + ' · ' + (sIdx + 1) + '/24</span>' +
      '          <div style="display:flex;gap:0.3rem;">' +
      '            <button type="button" class="btn btn-secondary btn-sm" data-v10-solar-step="-1" aria-label="' + (enM ? "Previous solar term" : "Tiết khí trước") + '">←</button>' +
      '            <button type="button" class="btn btn-secondary btn-sm" data-v10-solar-step="1" aria-label="' + (enM ? "Next solar term" : "Tiết khí sau") + '">→</button>' +
      '          </div>' +
      '        </div>' +
      '        <h3 style="margin:0;font-family:var(--font-editorial);font-size:1.45rem;">' + esc(enM ? term.enName : term.viName) + ' <span class="hanzi" style="color:' + esc(term.seasonColorHex || "#821C1C") + ';">' + esc(term.zhName) + '</span></h3>' +
      '        <div style="padding:0.55rem 0.7rem;background:var(--bg-surface);border-left:3px solid ' + esc(term.seasonColorHex || "#821C1C") + ';font-size:0.84rem;">' +
      '          <div class="hanzi" style="font-size:0.96rem;margin-bottom:0.2rem;">' + esc(term.poemZh) + '</div>' +
      '          <div style="color:var(--text-secondary);">' + esc(term.poemVi) + '</div>' +
      '        </div>' +
      '        <p style="margin:0;font-size:0.83rem;color:var(--text-secondary);"><strong>' + (enM ? "Seasonal practice:" : "Thực dưỡng mùa:") + '</strong> ' + esc(term.teaAndFoodVi) + '</p>' +
      (ev ? (
        '        <div style="border-top:1px dashed var(--hairline);padding-top:0.55rem;font-size:0.82rem;">' +
        '          <div class="v10-acc-kicker" style="color:#821C1C;">' + (enM ? "HISTORICAL MILESTONE" : "MỐC LỊCH SỬ") + ' · ' + esc(ev.yearLabel) + '</div>' +
        '          <strong>' + esc(enM ? ev.titleEn : ev.titleVi) + '</strong>' +
        '          <p style="margin:0.2rem 0 0;color:var(--text-secondary);">' + esc(enM ? ev.summaryEn : ev.summaryVi) + '</p>' +
        '        </div>'
      ) : "") +
      renderBranchPills(term.branchPills, enM) +
      '      </div>' +
      '      <div class="v10-almanac-collage">' +
      cards.map(function (c) {
        var saved = window.CCE_STORE && window.CCE_STORE.isBookmarked(c.type, c.id);
        var title = enM ? c.titleEn : c.titleVi;
        return (
          '<article class="v10-almanac-mini">' +
          '  <div class="v10-almanac-mini-img" data-action="' + esc(c.action) + '" data-id="' + esc(c.id) + '">' +
          '    <img src="' + esc(c.img) + '" alt="' + esc(title) + '" loading="lazy" decoding="async" />' +
          '    <div class="v10-mini-actions">' +
          '      <button type="button" class="v10-icon-circle ' + (saved ? "is-saved" : "") + '" data-action="toggle-bookmark" data-type="' + esc(c.type) + '" data-id="' + esc(c.id) + '" data-title="' + esc(title) + '" aria-label="' + (enM ? "Save item" : "Lưu mục này") + '">' +
          '        <svg width="14" height="14" viewBox="0 0 24 24" fill="' + (saved ? "currentColor" : "none") + '" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>' +
          '      </button>' +
          '      <button type="button" class="v10-icon-circle" data-v10-share="' + esc(c.id) + '" title="' + (enM ? "Copy link" : "Sao chép liên kết") + '" aria-label="' + (enM ? "Share link" : "Chia sẻ liên kết") + '">' +
          '        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>' +
          '      </button>' +
          '    </div>' +
          '  </div>' +
          '  <button type="button" style="border:0;background:none;padding:0.55rem 0.65rem;text-align:left;cursor:pointer;font-family:inherit;font-size:0.84rem;font-weight:700;color:var(--ink-primary);" data-action="' + esc(c.action) + '" data-id="' + esc(c.id) + '">' + esc(title) + '</button>' +
          '</article>'
        );
      }).join("") +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderSynchronyTimeline(enM) {
    var d = getV10();
    var list = d.syncTimeline18 || [];
    if (!list.length) return "";
    var idx = Math.max(0, Math.min(st.syncIdx, list.length - 1));
    var cur = list[idx];
    return (
      '<section class="card mb-2" id="v10-sync-timeline-box" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "COMPARATIVE SYNCHRONY · 1600 BCE–2026" : "THANH ĐỒNG ĐẠI VĂN MINH · 1600 TCN–2026") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.25rem;">' + esc(cur.yearDisplay) + '</h3>' +
      '    </div>' +
      '    <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">' +
      '      <label for="v10-sync-range" style="font-size:0.78rem;color:var(--text-muted);">' + (enM ? "Scrub era:" : "Chọn mốc thế kỷ:") + '</label>' +
      '      <input id="v10-sync-range" type="range" min="0" max="' + (list.length - 1) + '" value="' + idx + '" style="width:210px;accent-color:#821C1C;" />' +
      '      <span class="badge badge-gold">' + (idx + 1) + '/' + list.length + '</span>' +
      '    </div>' +
      '  </div>' +
      '  <div class="v10-sync-grid">' +
      '    <div class="flashcard-layer" style="border-left:3px solid #821C1C;"><strong style="color:#821C1C;">' + (enM ? "China: " : "Trung Hoa: ") + esc((cur.china && cur.china.dynasty) || "") + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.china ? (enM ? cur.china.factEn : cur.china.factVi) : "") + '</p></div>' +
      '    <div class="flashcard-layer" style="border-left:3px solid var(--jade-green);"><strong style="color:var(--jade-green);">' + (enM ? "Vietnam: " : "Việt Nam: ") + esc((cur.vietnam && cur.vietnam.dynasty) || "") + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.vietnam ? (enM ? cur.vietnam.factEn : cur.vietnam.factVi) : "") + '</p></div>' +
      '    <div class="flashcard-layer" style="border-left:3px solid var(--antique-gold);"><strong>' + esc((cur.world && cur.world.region) || (enM ? "World" : "Thế giới")) + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.world ? (enM ? cur.world.factEn : cur.world.factVi) : "") + '</p></div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderCities16FieldCompanion(cityId, enM) {
    var d = getV10();
    var map = d.cities16 || {};
    var key = String(cityId || "").replace(/^city-/, "");
    var info = map[key] || map[Object.keys(map)[0]];
    if (!info) return "";
    var hubs = (enM ? info.hsrHubsEn : info.hsrHubsVi) || [];
    return (
      '<section class="card mt-2" id="v10-cities16-at-a-glance" style="padding:1.15rem 1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "AT A GLANCE · HSR 12306 & 48H ITINERARY" : "THÔNG TIN THỰC ĐỊA CỐT LÕI · TÀU CAO TỐC 12306 & LỊCH TRÌNH 48H") + '</div>' +
      '  <div class="v10-city-16-grid" style="margin-top:0.75rem;">' +
      '    <div class="flashcard-layer">' +
      '      <strong>' + (enM ? "Main High-Speed Rail Hubs:" : "Ga đường sắt cao tốc trọng điểm:") + '</strong>' +
      '      <ul style="margin:0.4rem 0 0.65rem;padding-left:1.1rem;font-size:0.83rem;">' +
      hubs.map(function (h) { return '<li style="margin-bottom:0.25rem;">' + esc(h) + '</li>'; }).join("") +
      '      </ul>' +
      '      <div style="font-size:0.81rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border-left:3px solid #821C1C;"><strong>' + (enM ? "Booking & Entry Note:" : "Lưu ý đặt vé thực tế:") + '</strong> ' + esc(enM ? (info.itineraryEn || info.bookingAlertVi) : info.bookingAlertVi) + '</div>' +
      '    </div>' +
      '    <div class="flashcard-layer">' +
      '      <strong>' + (enM ? "48-Hour Structured Trail:" : "Lộ trình 48 giờ mẫu:") + '</strong>' +
      (enM
        ? '<p style="margin:0.45rem 0 0;font-size:0.83rem;line-height:1.55;">' + esc(info.itineraryEn || "") + '</p>'
        : '<div style="display:grid;gap:0.32rem;margin-top:0.4rem;font-size:0.82rem;">' +
          '<div><strong>Ngày 1 Sáng:</strong> ' + esc(info.day1MorningVi || "") + '</div>' +
          '<div><strong>Ngày 1 Chiều:</strong> ' + esc(info.day1AfternoonVi || "") + '</div>' +
          '<div><strong>Ngày 2 Sáng:</strong> ' + esc(info.day2MorningVi || "") + '</div>' +
          '<div><strong>Ngày 2 Chiều:</strong> ' + esc(info.day2AfternoonVi || "") + '</div>' +
          '</div>') +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderClassicalGrammarDeck(enM) {
    var list = (getV10().classicalTexts) || [];
    if (!list.length) return "";
    var perPage = 4;
    var pages = Math.max(1, Math.ceil(list.length / perPage));
    var p = Math.max(0, Math.min(st.grammarPage, pages - 1));
    var slice = list.slice(p * perPage, (p + 1) * perPage);
    return (
      '<section class="card mt-2" id="v10-classical-grammar-deck" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;">' +
      '    <div><div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "CLASSICAL SYNTAX LAB" : "GIẢI PHẪU NGỮ PHÁP CỔ VĂN") + '</div><h3 style="margin:0.15rem 0 0;">' + (enM ? "15 Classical Passages with Function Words & Han–Viet Readings" : "15 đoạn nguyên văn kinh điển kèm hư từ và đối chiếu Việt Nam") + '</h3></div>' +
      '    <div style="display:flex;gap:0.35rem;align-items:center;">' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-v10-gram-page="' + ((p - 1 + pages) % pages) + '">←</button>' +
      '      <span style="font-size:0.78rem;">' + (p + 1) + '/' + pages + '</span>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-v10-gram-page="' + ((p + 1) % pages) + '">→</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="grid grid-2" style="gap:0.85rem;">' +
      slice.map(function (c) {
        return (
          '<article class="flashcard-layer">' +
          '  <span class="badge badge-gold">' + esc(c.school) + '</span>' +
          '  <h4 style="margin:0.3rem 0;">' + esc(c.passageTitle) + '</h4>' +
          '  <div class="hanzi" style="font-size:1.05rem;color:#821C1C;margin-bottom:0.2rem;">' + esc(c.hanziSc) + '</div>' +
          '  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.35rem;">' + esc(c.pinyin) + ' · <em>' + esc(c.hanViet) + '</em></div>' +
          '  <p style="font-size:0.83rem;margin:0 0 0.4rem;">' + esc(enM ? c.literalEn : c.literalVi) + '</p>' +
          (c.vietnamInfluenceVi ? '<div style="font-size:0.78rem;color:var(--jade-green);"><strong>' + (enM ? "Vietnam parallel:" : "Liên hệ Việt Nam:") + '</strong> ' + esc(enM ? c.vietnamInfluenceEn : c.vietnamInfluenceVi) + '</div>' : "") +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function renderHanNomAndFalseFriends(enM) {
    var d = getV10();
    var nom = d.hanNom12 || [];
    var ff = (d.falseFriends || []).slice(0, 6);
    if (!nom.length && !ff.length) return "";
    var curNom = nom[st.hanNomIdx % Math.max(1, nom.length)] || null;
    return (
      '<section class="card mt-2" id="v10-hannom-contract-bridge" style="padding:1.15rem 1.25rem;border-top:3px solid var(--jade-green);">' +
      (curNom ? (
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
        '    <div><div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "CHU NOM & PHONOLOGY ARCHIVE" : "12 KIỆT TÁC HÁN–NÔM & CHIẾT TỰ") + '</div><h3 style="margin:0.15rem 0 0;">' + esc(enM ? curNom.titleEn : curNom.titleVi) + '</h3></div>' +
        '    <div style="display:flex;gap:0.35rem;align-items:center;">' +
        '      <button type="button" class="btn btn-secondary btn-sm" data-v10-nom-step="-1">←</button>' +
        '      <span style="font-size:0.78rem;">' + ((st.hanNomIdx % nom.length) + 1) + '/' + nom.length + '</span>' +
        '      <button type="button" class="btn btn-secondary btn-sm" data-v10-nom-step="1">→</button>' +
        '    </div>' +
        '  </div>' +
        '  <div class="flashcard-layer" style="margin-bottom:0.9rem;">' +
        '    <div class="hanzi" style="font-size:1.15rem;color:#821C1C;">' + esc(curNom.lineNomOrHan) + '</div>' +
        '    <div style="font-size:0.88rem;font-weight:700;margin:0.25rem 0;">' + esc(curNom.quocNgu) + '</div>' +
        '    <p style="font-size:0.82rem;color:var(--text-secondary);margin:0;">' + esc(enM ? curNom.phonologyRuleEn : curNom.phonologyRuleVi) + '</p>' +
        '  </div>'
      ) : "") +
      (ff.length ? (
        '  <div class="editorial-kicker" style="color:#821C1C;margin-bottom:0.45rem;">' + (enM ? "CONTRACT FALSE FRIENDS (HAN–VIET TRAP)" : "BẪY ĐỒNG HÌNH DỊ NGHĨA TRONG HỢP ĐỒNG THƯƠNG MẠI") + '</div>' +
        '  <div class="grid grid-3" style="gap:0.75rem;">' +
        ff.map(function (f) {
          return (
            '<div class="flashcard-layer" style="font-size:0.8rem;">' +
            '  <div><strong class="hanzi" style="font-size:1.05rem;color:#821C1C;">' + esc(f.hanziSc) + '</strong> · ' + esc(f.pinyin) + ' (<em>' + esc(f.hanViet) + '</em>)</div>' +
            '  <div style="margin-top:0.25rem;"><strong>VN:</strong> ' + esc(f.vietnameseMeaning) + '</div>' +
            '  <div style="margin-top:0.2rem;color:var(--jade-green);"><strong>CN:</strong> ' + esc(enM ? f.explanationEn : f.chineseModernMeaning) + '</div>' +
            '</div>'
          );
        }).join("") +
        '  </div>'
      ) : "") +
      '</section>'
    );
  }

  function renderHsk79AndTradeCases(mode, enM) {
    var d = getV10();
    if (mode === "hsk") {
      var list = d.hsk79 || [];
      if (!list.length) return "";
      var item = list[st.hskIdx % list.length];
      return (
        '<section class="card mt-2" id="v10-hsk79-capstone" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
        '    <div><div class="editorial-kicker" style="color:#821C1C;">HSK 7–9 · ' + esc(item.topicTag) + '</div><h3 style="margin:0.15rem 0 0;">' + esc(enM ? item.titleEn : item.titleVi) + '</h3></div>' +
        '    <div style="display:flex;gap:0.35rem;align-items:center;"><button type="button" class="btn btn-secondary btn-sm" data-v10-hsk-step="-1">←</button><span style="font-size:0.78rem;">' + ((st.hskIdx % list.length) + 1) + '/' + list.length + '</span><button type="button" class="btn btn-secondary btn-sm" data-v10-hsk-step="1">→</button></div>' +
        '  </div>' +
        '  <div class="hanzi" style="font-size:0.96rem;line-height:1.75;padding:0.75rem;background:var(--bg-surface);border-left:3px solid #821C1C;margin-bottom:0.6rem;">' + esc(item.passageZh) + '</div>' +
        '  <p style="font-size:0.84rem;color:var(--text-secondary);">' + esc(enM ? item.translationEn : item.translationVi) + '</p>' +
        '</section>'
      );
    }
    var cases = (d.tradeCases || []).slice(0, 6);
    if (!cases.length) return "";
    return (
      '<section class="card mt-2" id="v10-trade-compliance-cases" style="padding:1.15rem 1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "ACFTA 3.0 & RCEP CUSTOMS CASES" : "HỒ SƠ THÔNG QUAN ACFTA 3.0 & RCEP THỰC TẾ") + '</div>' +
      '  <div class="grid grid-2" style="gap:0.85rem;margin-top:0.75rem;">' +
      cases.map(function (tc) {
        return (
          '<article class="flashcard-layer">' +
          '  <span class="badge badge-jade">' + esc(tc.corridor) + '</span>' +
          '  <h4 style="margin:0.3rem 0;">' + esc(enM ? tc.titleEn : tc.titleVi) + '</h4>' +
          '  <p style="font-size:0.82rem;margin:0 0 0.35rem;">' + esc(enM ? tc.scenarioEn : tc.scenarioVi) + '</p>' +
          '  <div style="font-size:0.78rem;color:var(--jade-green);"><strong>' + (enM ? "Rule:" : "Xử lý:") + '</strong> ' + esc(enM ? tc.complianceOutcomeEn : tc.complianceOutcomeVi) + '</div>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  var PIGMENT_HEX = {
    "pigment-cinnabar": "#A62C22",
    "pigment-azurite": "#1D4E78",
    "pigment-malachite": "#2B7A5E",
    "pigment-realgar": "#D96B27",
    "pigment-lead-white": "#ECE8DF",
    "pigment-gamboge": "#D69E2E",
    "pigment-indigo": "#263B59",
    "pigment-pine-soot-ink": "#1E1D1B"
  };

  function renderPigmentsReference(enM) {
    var ap = (getV10().artifactsPigments) || {};
    var pigs = ap.mineralPigments8 || [];
    if (!pigs.length) return "";
    return (
      '<section class="card mt-2" id="v10-mineral-pigments-8" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
      '  <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "EIGHT CLASSICAL MINERAL PIGMENTS" : "TÁM SẮC TỐ KHOÁNG ĐAN THANH CỔ ĐIỂN") + '</div>' +
      '  <div class="grid grid-4" style="gap:0.7rem;margin-top:0.75rem;">' +
      pigs.map(function (pg) {
        var hex = PIGMENT_HEX[pg.id] || pg.hexColor || "#821C1C";
        var zhText = pg.nameZh || pg.zh || "";
        var formulaText = pg.formula || pg.chemicalFormula || "";
        var descText = enM ? (pg.mineralSourceEn || pg.preparationAndStabilityEn || pg.historicalUseEn || "") : (pg.mineralSourceVi || pg.preparationAndStabilityVi || pg.historicalUseVi || "");
        return (
          '<div class="flashcard-layer" style="font-size:0.79rem;">' +
          '  <div style="display:flex;align-items:center;gap:0.45rem;margin-bottom:0.25rem;">' +
          '    <span style="width:16px;height:16px;border-radius:2px;background:' + esc(hex) + ';border:1px solid var(--hairline);flex-shrink:0;"></span>' +
          '    <strong>' + esc(enM ? pg.nameEn : pg.nameVi) + '</strong>' +
          '  </div>' +
          '  <div class="hanzi text-xs" style="color:var(--text-muted);">' + esc(zhText) + (formulaText ? ' · ' + esc(formulaText) : '') + '</div>' +
          '  <p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(descText) + '</p>' +
          '</div>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function patchRoot(elId, html) {
    var node = document.getElementById(elId);
    if (node) node.outerHTML = html;
    else if (typeof window.CCE_PATCH_MAIN === "function") window.CCE_PATCH_MAIN();
  }

  function bindEvents() {
    if (st.bound || typeof document === "undefined") return;
    st.bound = true;

    var dragSpot = { active: false, startX: 0, startY: 0, baseX: 0, baseY: 0 };

    document.addEventListener("pointerover", function (e) {
      var panel = e.target && e.target.closest ? e.target.closest("[data-v10-acc]") : null;
      if (!panel) return;
      var idx = parseInt(panel.getAttribute("data-v10-acc"), 10);
      if (isNaN(idx) || idx === st.accIdx) return;
      st.accIdx = idx;
      var strip = panel.closest(".v10-gac-accordion");
      if (strip) {
        strip.querySelectorAll("[data-v10-acc]").forEach(function (b, bIdx) {
          b.classList.toggle("is-expanded", bIdx === idx);
        });
      }
    });

    document.addEventListener("mousedown", function (e) {
      var stage = e.target && e.target.closest ? e.target.closest("#v10-spot-stage") : null;
      if (!stage || (e.target.closest && e.target.closest(".v10-spot-zoom-ctrl, .v10-spot-pin"))) return;
      if ((ZOOM_STEPS[st.zoomIdx] || 1) <= 1) return;
      dragSpot = { active: true, startX: e.clientX, startY: e.clientY, baseX: st.panX, baseY: st.panY };
    });
    window.addEventListener("mousemove", function (e) {
      if (!dragSpot.active) return;
      st.panX = Math.max(-220, Math.min(220, dragSpot.baseX + (e.clientX - dragSpot.startX)));
      st.panY = Math.max(-160, Math.min(160, dragSpot.baseY + (e.clientY - dragSpot.startY)));
      var wrap = document.getElementById("v10-spot-canvas-wrap");
      if (wrap) wrap.style.transform = "translate3d(" + st.panX + "px," + st.panY + "px,0) scale(" + (ZOOM_STEPS[st.zoomIdx] || 1) + ")";
    });
    window.addEventListener("mouseup", function () { dragSpot.active = false; });

    document.addEventListener("click", function (e) {
      var goBtn = e.target && e.target.closest ? e.target.closest("[data-v10-go-page]") : null;
      if (goBtn) {
        var page = goBtn.getAttribute("data-v10-go-page");
        var sub = goBtn.getAttribute("data-v10-go-sub");
        if (window.CCE_V10_DECK && typeof window.CCE_V10_DECK.navigateTo === "function") {
          window.CCE_V10_DECK.navigateTo(page, sub);
        }
        return;
      }

      var spotPin = e.target && e.target.closest ? e.target.closest("[data-v10-spot-pin]") : null;
      if (spotPin) {
        st.hotspotIdx = parseInt(spotPin.getAttribute("data-v10-spot-pin"), 10) || 0;
        if (st.zoomIdx === 0) st.zoomIdx = 1;
        patchRoot("v10-gac-spotlight", renderObjectSpotlight(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        return;
      }

      var spotZoom = e.target && e.target.closest ? e.target.closest("[data-v10-spot-zoom]") : null;
      if (spotZoom) {
        var dz = parseInt(spotZoom.getAttribute("data-v10-spot-zoom"), 10);
        if (dz === 0) { st.zoomIdx = 0; st.panX = 0; st.panY = 0; }
        else { st.zoomIdx = Math.max(0, Math.min(ZOOM_STEPS.length - 1, st.zoomIdx + dz)); }
        if (st.zoomIdx === 0) { st.panX = 0; st.panY = 0; }
        patchRoot("v10-gac-spotlight", renderObjectSpotlight(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        return;
      }

      var spotStep = e.target && e.target.closest ? e.target.closest("[data-v10-spot-step]") : null;
      if (spotStep) {
        var keys = Object.keys((getV10().zoomStage15) || {});
        if (keys.length) {
          var dir = parseInt(spotStep.getAttribute("data-v10-spot-step"), 10) || 1;
          st.spotIdx = (ensureSpotIdx(keys.length) + dir + keys.length) % keys.length;
          st.zoomIdx = 0; st.panX = 0; st.panY = 0; st.hotspotIdx = 0;
          patchRoot("v10-gac-spotlight", renderObjectSpotlight(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        }
        return;
      }

      var solStep = e.target && e.target.closest ? e.target.closest("[data-v10-solar-step]") : null;
      if (solStep) {
        var terms = (getV10().almanac && getV10().almanac.solarTerms24) || [];
        if (terms.length) {
          var curS = st.solarIdx >= 0 ? st.solarIdx : getCurrentSolarTermIndex(terms);
          st.solarIdx = (curS + (parseInt(solStep.getAttribute("data-v10-solar-step"), 10) || 1) + terms.length) % terms.length;
          patchRoot("v10-gac-almanac", renderAlmanacSplit(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        }
        return;
      }

      var shareBtn = e.target && e.target.closest ? e.target.closest("[data-v10-share]") : null;
      if (shareBtn && navigator.clipboard) {
        try {
          navigator.clipboard.writeText(window.location.href);
        } catch (_e) {}
        return;
      }

      var gp = e.target && e.target.closest ? e.target.closest("[data-v10-gram-page]") : null;
      if (gp) {
        st.grammarPage = parseInt(gp.getAttribute("data-v10-gram-page"), 10) || 0;
        patchRoot("v10-classical-grammar-deck", renderClassicalGrammarDeck(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        return;
      }

      var ns = e.target && e.target.closest ? e.target.closest("[data-v10-nom-step]") : null;
      if (ns) {
        var nLen = (getV10().hanNom12 || []).length || 1;
        st.hanNomIdx = (st.hanNomIdx + (parseInt(ns.getAttribute("data-v10-nom-step"), 10) || 1) + nLen) % nLen;
        patchRoot("v10-hannom-contract-bridge", renderHanNomAndFalseFriends(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
        return;
      }

      var hs = e.target && e.target.closest ? e.target.closest("[data-v10-hsk-step]") : null;
      if (hs) {
        var hLen = (getV10().hsk79 || []).length || 1;
        st.hskIdx = (st.hskIdx + (parseInt(hs.getAttribute("data-v10-hsk-step"), 10) || 1) + hLen) % hLen;
        patchRoot("v10-hsk79-capstone", renderHsk79AndTradeCases("hsk", window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
      }
    });

    document.addEventListener("input", function (e) {
      if (e.target && e.target.id === "v10-sync-range") {
        st.syncIdx = parseInt(e.target.value, 10) || 0;
        patchRoot("v10-sync-timeline-box", renderSynchronyTimeline(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en"));
      }
    });
  }
  bindEvents();

  window.CCE_V10_DISCOVERY = {
    renderHomeSuite: function (enM) {
      return (
        renderTopPicksAccordion(enM) +
        renderObjectSpotlight(enM) +
        renderGeometricBento(enM) +
        renderAlmanacSplit(enM)
      );
    },
    renderSynchronyTimeline: renderSynchronyTimeline,
    renderCities16FieldCompanion: renderCities16FieldCompanion,
    renderClassicalGrammarDeck: renderClassicalGrammarDeck,
    renderHanNomAndFalseFriends: renderHanNomAndFalseFriends,
    renderHsk79AndTradeCases: renderHsk79AndTradeCases,
    renderPigmentsReference: renderPigmentsReference
  };
})();
