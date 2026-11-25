// ============================================================================
// CHINESE CULTURE EXPLORER — Curated Cultural, Literary & Trade Studios
// Renders Stage Heritage & Eight-Tone Instruments, Borderland Ethnology &
// Night/Craft Field Guides, Modern Literature 1918-2026, Green Urbanism &
// Reader Pathways, EU-China-VN Green Trade Casebook, HSK 7-9 Passages,
// and Article Primer Boxes with crisp 1px editorial minimalism.
// ============================================================================

(function () {
  "use strict";

  var st = {
    operaTab: "pieces", // pieces | instruments | masks
    operaTypeFilter: "all",
    baYinFilter: "all",
    ethnicTab: "communities", // communities | comparisons | guides
    litTab: "works", // works | authors | dialogues
    litEraFilter: "all",
    urbanDomainFilter: "all",
    activePathwayId: "path-heritage",
    greenDomainFilter: "all",
    hskIdx: 0,
    driverCardId: ""
  };

  function getData() {
    return window.CCE_V8_DATA || {};
  }

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function spkBtn(zh) {
    if (!zh) return "";
    return (
      '<button type="button" class="tts-speak-btn" data-v8st-speak="' + esc(zh) + '" title="Listen zh-CN">' +
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">' +
      '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>' +
      '<path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>'
    );
  }

  function srsBtn(zh, py, hv, vi, en) {
    if (!zh) return "";
    return (
      '<button type="button" class="btn btn-ghost btn-sm" style="padding:0.06rem 0.4rem;font-size:0.71rem;border:1px solid var(--hairline);" ' +
      'data-v8st-srs="1" data-zh="' + esc(zh) + '" data-py="' + esc(py || "") + '" data-hv="' + esc(hv || "") + '" data-vi="' + esc(vi || "") + '" data-en="' + esc(en || "") + '">+ SRS</button>'
    );
  }

  function imgPlate(src, alt, maxH) {
    if (!src) return "";
    return (
      '<div class="img-skeleton-bg" style="aspect-ratio:16/10;max-height:' + (maxH || 175) + 'px;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);background:var(--bg-surface);cursor:pointer;" ' +
      'data-action="open-custom-image" data-src="' + esc(src) + '" data-caption="' + esc(alt) + '">' +
      '<img src="' + esc(src) + '" alt="' + esc(alt) + '" loading="lazy" decoding="async" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" ' +
      'onerror="this.onerror=null;this.src=\'assets/images/museum/taihe-dian.jpg\';" /></div>'
    );
  }

  // --------------------------------------------------------------------------
  // 1. Stage Heritage (24), Ba Yin Eight-Tone Instruments (16) & Masks (12)
  // --------------------------------------------------------------------------
  function renderOperaAndMusicStudio(enM) {
    var D = getData();
    var pieces = D.operaAndPieces24 || [];
    var insts = D.instruments16 || [];
    var masks = D.masks12 || [];
    if (!pieces.length && !insts.length) return "";

    var body = "";
    if (st.operaTab === "pieces") {
      var types = ["all"];
      pieces.forEach(function (p) { if (p.type && types.indexOf(p.type) < 0) types.push(p.type); });
      var vis = st.operaTypeFilter === "all" ? pieces : pieces.filter(function (p) { return p.type === st.operaTypeFilter; });
      body =
        '<div class="filter-bar" style="margin-bottom:0.85rem;">' +
        types.map(function (t) {
          var lbl = t === "all" ? (enM ? "All (" + pieces.length + ")" : "Tất cả (" + pieces.length + ")") : t;
          return '<button type="button" class="filter-pill ' + (st.operaTypeFilter === t ? "active" : "") + '" data-v8st-act="op-type" data-val="' + esc(t) + '" style="font-size:0.74rem;">' + esc(lbl) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.9rem;">' +
        vis.map(function (op) {
          var title = enM ? (op.titleEn || op.titleVi) : op.titleVi;
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.45rem;padding:0.95rem 1.05rem;">' +
            imgPlate(op.imagePath, title, 165) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
            '    <span class="badge badge-outline">' + esc(op.type || "Stage") + ' · ' + esc(enM ? (op.eraEn || op.eraVi) : op.eraVi) + '</span>' +
            spkBtn(op.titleZh) +
            '  </div>' +
            '  <h4 style="margin:0.05rem 0;font-size:1rem;">' + esc(title) + '</h4>' +
            '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(op.titleZh || "") + (op.pinyin ? " · " + esc(op.pinyin) : "") + '</div>' +
            (op.mujiDigestVi ? '<div style="font-size:0.81rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--antique-gold);">' + esc(enM ? (op.mujiDigestEn || op.mujiDigestVi) : op.mujiDigestVi) + '</div>' : "") +
            '  <details class="ed-details" style="font-size:0.79rem;">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Synopsis, Quote &amp; Vietnam Parallel →" : "Nội dung, Trích dẫn &amp; Đối chiếu Việt Nam →") + '</summary>' +
            '    <div style="margin-top:0.45rem;display:grid;gap:0.4rem;padding:0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
            '      <div>' + esc(enM ? (op.synopsisEn || op.synopsisVi) : op.synopsisVi) + '</div>' +
            (op.musicalHighlightVi ? '<div><strong>' + (enM ? "Musical Note:" : "Âm luật:") + '</strong> ' + esc(enM ? (op.musicalHighlightEn || op.musicalHighlightVi) : op.musicalHighlightVi) + '</div>' : "") +
            (op.primaryQuoteZh ? '<div style="padding:0.35rem 0.5rem;background:var(--bg-surface);border-left:2px solid var(--imperial-red);"><span class="hanzi">' + esc(op.primaryQuoteZh) + '</span> ' + spkBtn(op.primaryQuoteZh) + '<div class="text-xs" style="color:var(--text-secondary);">' + esc(enM ? (op.primaryQuoteEn || op.primaryQuoteVi) : op.primaryQuoteVi) + '</div></div>' : "") +
            (op.vietnamParallelVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Vietnam Parallel:" : "Đối chiếu Việt Nam:") + '</strong> ' + esc(enM ? (op.vietnamParallelEn || op.vietnamParallelVi) : op.vietnamParallelVi) + '</div>' : "") +
            '    </div>' +
            '  </details>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.operaTab === "instruments") {
      var cats = ["all"];
      insts.forEach(function (ins) { if (ins.categoryBaYin && cats.indexOf(ins.categoryBaYin) < 0) cats.push(ins.categoryBaYin); });
      var visInst = st.baYinFilter === "all" ? insts : insts.filter(function (ins) { return ins.categoryBaYin === st.baYinFilter; });
      body =
        '<div class="filter-bar" style="margin-bottom:0.85rem;">' +
        cats.map(function (c) {
          return '<button type="button" class="filter-pill ' + (st.baYinFilter === c ? "active" : "") + '" data-v8st-act="bayin" data-val="' + esc(c) + '" style="font-size:0.74rem;">' + esc(c === "all" ? (enM ? "All Eight Tones (16)" : "Đủ Bát Âm (16)") : c) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.9rem;">' +
        visInst.map(function (ins) {
          var nm = enM ? (ins.nameEn || ins.nameVi) : ins.nameVi;
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.4rem;padding:0.95rem 1.05rem;">' +
            imgPlate(ins.imagePath, nm, 165) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-jade">' + esc(ins.categoryBaYin || "Ba Yin") + '</span>' +
            '    <span style="display:flex;gap:0.35rem;align-items:center;">' + spkBtn(ins.zh) + srsBtn(ins.zh, ins.pinyin, "", ins.nameVi, ins.nameEn) + '</span>' +
            '  </div>' +
            '  <h4 style="margin:0.05rem 0;">' + esc(nm) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(ins.zh) + '</span></h4>' +
            '  <div class="text-xs" style="color:var(--text-muted);">' + esc(ins.pinyin || "") + '</div>' +
            '  <p style="margin:0;font-size:0.81rem;line-height:1.5;color:var(--text-secondary);">' + esc(enM ? (ins.acousticsEn || ins.acousticsVi) : ins.acousticsVi) + '</p>' +
            (ins.vietnamParallelVi ? '<div class="text-xs" style="color:var(--jade-green);margin-top:auto;padding-top:0.35rem;border-top:1px dashed var(--hairline);"><strong>' + (enM ? "Vietnam Parallel:" : "Đối chiếu Nhạc khí Việt:") + '</strong> ' + esc(enM ? (ins.vietnamParallelEn || ins.vietnamParallelVi) : ins.vietnamParallelVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-3" style="gap:0.85rem;">' +
        masks.map(function (mk) {
          var mName = enM ? (mk.nameEn || mk.nameVi) : mk.nameVi;
          var hx = mk.colorHex || "#8C2318";
          return (
            '<article class="flashcard-layer" style="padding:0.9rem;display:flex;flex-direction:column;gap:0.4rem;border-top:3px solid ' + esc(hx) + ';">' +
            (mk.imagePath ? imgPlate(mk.imagePath, mName, 145) : "") +
            '  <div style="display:flex;align-items:center;gap:0.6rem;">' +
            '    <svg width="34" height="34" viewBox="0 0 36 36" aria-hidden="true">' +
            '      <circle cx="18" cy="18" r="15" fill="' + esc(hx) + '" stroke="#D9D2C5" stroke-width="1.5"/>' +
            '      <circle cx="13" cy="15" r="2.2" fill="#FBF9F4"/><circle cx="23" cy="15" r="2.2" fill="#FBF9F4"/>' +
            '      <path d="M12 24 Q18 21 24 24" stroke="#FBF9F4" stroke-width="1.5" fill="none"/>' +
            '    </svg>' +
            '    <div><strong style="font-size:0.92rem;">' + esc(mName) + '</strong><div class="hanzi text-xs" style="color:var(--text-muted);">' + esc(mk.roleZh || "") + ' · ' + esc(hx) + '</div></div>' +
            '  </div>' +
            '  <p style="margin:0;font-size:0.8rem;line-height:1.5;color:var(--text-secondary);">' + esc(enM ? (mk.meaningEn || mk.meaningVi) : mk.meaningVi) + '</p>' +
            (mk.vietnamComparisonVi ? '<div class="text-xs" style="color:var(--jade-green);margin-top:auto;"><strong>' + (enM ? "Tuong Mask Parallel:" : "Đối chiếu Tuồng Việt:") + '</strong> ' + esc(enM ? (mk.vietnamComparisonEn || mk.vietnamComparisonVi) : mk.vietnamComparisonVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    }

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-opera-music-studio" style="padding:1.2rem 1.3rem;border-top:3px solid var(--imperial-red);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "STAGE HERITAGE · EIGHT-TONE ACOUSTICS · 昆曲京剧与八音" : "DI SẢN HÝ KHÚC, CỔ CẦM &amp; NHẠC KHÍ BÁT ÂM · 昆曲京剧与八音") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.22rem;">' + (enM ? "24 Opera &amp; Guqin Masterpieces, 16 Eight-Tone Instruments &amp; 12 Facial Archetypes" : "24 Kịch Mục &amp; Cầm Khúc, 16 Nhạc Khí Bát Âm &amp; 12 Liên Phổ Kinh Kịch") + '</h3>' +
      '    </div>' +
      '    <div class="filter-bar" style="margin:0;">' +
      '      <button type="button" class="filter-pill ' + (st.operaTab === "pieces" ? "active" : "") + '" data-v8st-act="op-tab" data-val="pieces">' + (enM ? "24 Operas &amp; Guqin" : "24 Kịch Mục &amp; Cổ Cầm") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.operaTab === "instruments" ? "active" : "") + '" data-v8st-act="op-tab" data-val="instruments">' + (enM ? "16 Eight-Tone Instruments" : "16 Nhạc Khí Bát Âm") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.operaTab === "masks" ? "active" : "") + '" data-v8st-act="op-tab" data-val="masks">' + (enM ? "12 Facial Masks" : "12 Liên Phổ Sắc Màu") + '</button>' +
      '    </div>' +
      '  </div>' +
      body +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 2. Borderland Ethnology (24), VN-CN Comparisons (12) & Night/Craft Guides (12)
  // --------------------------------------------------------------------------
  function renderBorderlandEthnicAndGuidesStudio(enM) {
    var D = getData();
    var ethnics = D.ethnic24 || [];
    var cmps = D.ethnicVietnamComparisons12 || [];
    var guides = D.craftAndNightFieldGuides12 || [];
    if (!ethnics.length && !guides.length) return "";

    var body = "";
    if (st.ethnicTab === "communities") {
      body =
        '<div class="grid grid-2" style="gap:0.9rem;">' +
        ethnics.map(function (et) {
          var nm = enM ? (et.nameEn || et.nameVi) : et.nameVi;
          var terms = Array.isArray(et.keyTermsTrilingual) ? et.keyTermsTrilingual.slice(0, 3) : [];
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.42rem;padding:0.95rem 1.05rem;">' +
            imgPlate(et.imagePath, nm, 165) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
            '    <span class="badge badge-jade">' + esc(enM ? (et.languageFamilyEn || et.languageFamilyVi) : et.languageFamilyVi) + '</span>' +
            spkBtn(et.zh) +
            '  </div>' +
            '  <h4 style="margin:0.05rem 0;">' + esc(nm) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(et.zh || "") + '</span></h4>' +
            '  <div class="text-xs" style="color:var(--text-muted);">' + esc(enM ? (et.regionFocusEn || et.regionFocusVi) : et.regionFocusVi) + '</div>' +
            '  <div style="font-size:0.8rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--antique-gold);">' + esc(enM ? (et.mujiDigestEn || et.mujiDigestVi) : et.mujiDigestVi) + '</div>' +
            '  <details class="ed-details" style="font-size:0.79rem;">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Architecture, Textiles, Music &amp; Vietnam Link →" : "Kiến trúc, Dệt nhuộm, Lễ hội &amp; Giao thoa Việt Nam →") + '</summary>' +
            '    <div style="margin-top:0.45rem;display:grid;gap:0.4rem;padding:0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
            '      <div><strong>' + (enM ? "Habitat:" : "Kiến trúc:") + '</strong> ' + esc(enM ? (et.architectureEn || et.architectureVi) : et.architectureVi) + '</div>' +
            '      <div><strong>' + (enM ? "Craft &amp; Textile:" : "Trang phục &amp; Nghề:") + '</strong> ' + esc(enM ? (et.textileArtEn || et.textileArtVi) : et.textileArtVi) + '</div>' +
            '      <div><strong>' + (enM ? "Festival:" : "Âm nhạc &amp; Lễ hội:") + '</strong> ' + esc(enM ? (et.musicFestivalEn || et.musicFestivalVi) : et.musicFestivalVi) + '</div>' +
            (et.vietnamEthnicLinkVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Vietnam Parallel:" : "Đối chiếu Dân tộc Việt:") + '</strong> ' + esc(enM ? (et.vietnamEthnicLinkEn || et.vietnamEthnicLinkVi) : et.vietnamEthnicLinkVi) + '</div>' : "") +
            (terms.length ? '<div style="display:flex;flex-wrap:wrap;gap:0.3rem;padding-top:0.3rem;border-top:1px dashed var(--hairline);">' + terms.map(function (t) {
              return srsBtn(t.zh, t.pinyin, t.hanViet, t.vi, t.en) + '<span class="text-xs"><strong>' + esc(t.zh) + '</strong> · ' + esc(enM ? (t.en || t.vi) : t.vi) + '</span>';
            }).join(" ") + '</div>' : "") +
            '    </div>' +
            '  </details>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.ethnicTab === "comparisons") {
      body =
        '<div class="grid grid-2" style="gap:0.85rem;">' +
        cmps.map(function (cp) {
          return (
            '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;display:flex;flex-direction:column;gap:0.45rem;">' +
            '  <div class="badge badge-outline">' + esc(enM ? (cp.linguisticRootEn || cp.linguisticRootVi) : cp.linguisticRootVi) + '</div>' +
            '  <h4 style="margin:0;">' + esc(enM ? (cp.titleEn || cp.titleVi) : cp.titleVi) + '</h4>' +
            '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(cp.zhPair || "") + '</div>' +
            '  <div style="font-size:0.8rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);"><strong>' + (enM ? "Vietnam Side:" : "Phía Việt Nam:") + '</strong> ' + esc(enM ? (cp.vietnamSideEn || cp.vietnamSideVi) : cp.vietnamSideVi) + '</div>' +
            '  <div style="font-size:0.8rem;padding:0.45rem 0.6rem;background:var(--bg-paper);border-left:3px solid var(--imperial-red);"><strong>' + (enM ? "China Side:" : "Phía Trung Quốc:") + '</strong> ' + esc(enM ? (cp.chinaSideEn || cp.chinaSideVi) : cp.chinaSideVi) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-secondary);"><strong>' + (enM ? "Shared Ecology:" : "Chung Sinh Thái:") + '</strong> ' + esc(enM ? (cp.sharedCraftOrEcologyEn || cp.sharedCraftOrEcologyVi) : cp.sharedCraftOrEcologyVi) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);"><strong>' + (enM ? "Divergence:" : "Khác Biệt Lịch Sử:") + '</strong> ' + esc(enM ? (cp.divergenceEn || cp.divergenceVi) : cp.divergenceVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-2" style="gap:0.85rem;">' +
        guides.map(function (gd) {
          var isDriver = st.driverCardId === gd.id;
          return (
            '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;display:flex;flex-direction:column;gap:0.45rem;">' +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
            '    <span class="badge badge-red">' + esc(gd.category || "Field Guide") + ' · ' + esc(gd.cityZh || "") + '</span>' +
            '    <span class="badge badge-outline">' + esc(gd.durationHours || 4) + 'h · ' + esc(gd.hsrStationZh || "") + '</span>' +
            '  </div>' +
            '  <h4 style="margin:0.05rem 0;">' + esc(enM ? (gd.titleEn || gd.titleVi) : gd.titleVi) + '</h4>' +
            '  <div style="font-size:0.8rem;color:var(--text-secondary);line-height:1.5;"><strong>' + (enM ? "Route:" : "Lộ trình:") + '</strong> ' + esc(enM ? (gd.routeHighlightsEn || gd.routeHighlightsVi) : gd.routeHighlightsVi) + '</div>' +
            '  <div style="font-size:0.79rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);"><strong>' + (enM ? "Tickets &amp; Mini-App:" : "Vé &amp; Đặt Lịch:") + '</strong> ' + esc(enM ? (gd.ticketAndAppRuleEn || gd.ticketAndAppRuleVi) : gd.ticketAndAppRuleVi) + '</div>' +
            '  <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;margin-top:auto;">' +
            '    <button type="button" class="btn ' + (isDriver ? "btn-primary" : "btn-secondary") + ' btn-sm" data-v8st-act="driver" data-val="' + esc(gd.id) + '">' + (enM ? (isDriver ? "Hide Taxi Card" : "Show-to-Driver Card") : (isDriver ? "Ẩn Thẻ Tài Xế" : "Mở Thẻ Đưa Tài Xế")) + '</button>' +
            spkBtn(gd.showToDriverZh) +
            '  </div>' +
            (isDriver ? (
              '  <div style="margin-top:0.4rem;padding:0.75rem;background:#1D1B18;color:#FBF9F4;border-radius:var(--radius);">' +
              '    <div class="hanzi" style="font-size:1.18rem;font-weight:700;line-height:1.45;">' + esc(gd.showToDriverZh || "") + '</div>' +
              '    <div style="font-size:0.78rem;color:#DED4C3;margin-top:0.35rem;">' + esc(enM ? (gd.showToDriverEn || gd.showToDriverVi) : gd.showToDriverVi) + '</div>' +
              '  </div>'
            ) : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    }

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-ethnic-field-studio" style="padding:1.2rem 1.3rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "ETHNOLOGY, BORDERLANDS &amp; CRAFT TRAILS · 多元一体与非遗夜游" : "DÂN TỘC HỌC VÙNG BIÊN &amp; CẨM NANG LÀNG NGHỀ · 多元一体与非遗夜游") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.22rem;">' + (enM ? "24 Ethnic Communities, 12 Vietnam-China Ethnology Parallels &amp; 12 Night/Craft Guides" : "24 Cộng Đồng Dân Tộc, 12 Đối Chiếu Việt–Hoa &amp; 12 Cẩm Nang Làng Nghề – Bảo Tàng Đêm") + '</h3>' +
      '    </div>' +
      '    <div class="filter-bar" style="margin:0;">' +
      '      <button type="button" class="filter-pill ' + (st.ethnicTab === "communities" ? "active" : "") + '" data-v8st-act="eth-tab" data-val="communities">' + (enM ? "24 Communities" : "24 Dân Tộc") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.ethnicTab === "comparisons" ? "active" : "") + '" data-v8st-act="eth-tab" data-val="comparisons">' + (enM ? "12 VN–CN Parallels" : "12 Đối Chiếu Việt–Hoa") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.ethnicTab === "guides" ? "active" : "") + '" data-v8st-act="eth-tab" data-val="guides">' + (enM ? "12 Craft &amp; Night Guides" : "12 Cẩm Nang Thực Địa") + '</button>' +
      '    </div>' +
      '  </div>' +
      body +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 3. Modern Literature 1918–2026 (20 Works, 16 Authors, 12 Dialogues)
  // --------------------------------------------------------------------------
  function renderModernLiteratureStudio(enM) {
    var D = getData();
    var works = D.modernWorks20 || [];
    var authors = D.modernAuthors16 || [];
    var dialogues = D.modernVnCnDialogues12 || [];
    if (!works.length && !authors.length) return "";

    var body = "";
    if (st.litTab === "works") {
      var eras = ["all"];
      works.forEach(function (w) { if (w.eraGroup && eras.indexOf(w.eraGroup) < 0) eras.push(w.eraGroup); });
      var visWorks = st.litEraFilter === "all" ? works : works.filter(function (w) { return w.eraGroup === st.litEraFilter; });
      body =
        '<div class="filter-bar" style="margin-bottom:0.85rem;">' +
        eras.map(function (er) {
          return '<button type="button" class="filter-pill ' + (st.litEraFilter === er ? "active" : "") + '" data-v8st-act="lit-era" data-val="' + esc(er) + '" style="font-size:0.74rem;">' + esc(er === "all" ? (enM ? "All 20 Works (1918–2026)" : "Đủ 20 Tác Phẩm (1918–2026)") : er) + '</button>';
        }).join("") +
        '</div>' +
        '<div class="grid grid-2" style="gap:0.9rem;">' +
        visWorks.map(function (w) {
          var title = enM ? (w.titleEn || w.titleVi) : w.titleVi;
          var auth = enM ? (w.authorEn || w.authorVi) : w.authorVi;
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.42rem;padding:0.95rem 1.05rem;">' +
            imgPlate(w.imagePath, title, 165) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
            '    <span class="badge badge-outline">' + esc(w.year || "") + ' · ' + esc(auth) + '</span>' +
            spkBtn(w.titleZh) +
            '  </div>' +
            '  <h4 style="margin:0.05rem 0;">' + esc(title) + '</h4>' +
            '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(w.titleZh || "") + (w.pinyin ? " · " + esc(w.pinyin) : "") + '</div>' +
            '  <div style="font-size:0.81rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--antique-gold);">' + esc(enM ? (w.mujiDigestEn || w.mujiDigestVi) : w.mujiDigestVi) + '</div>' +
            '  <details class="ed-details" style="font-size:0.79rem;">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Excerpt, Significance &amp; Vietnam Dialogue →" : "Trích Đoạn, Giá Trị &amp; Đối Thoại Việt Nam →") + '</summary>' +
            '    <div style="margin-top:0.45rem;display:grid;gap:0.4rem;padding:0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
            (w.historicalSignificanceVi ? '<div>' + esc(enM ? (w.historicalSignificanceEn || w.historicalSignificanceVi) : w.historicalSignificanceVi) + '</div>' : "") +
            (w.excerptZh ? '<div style="padding:0.35rem 0.5rem;background:var(--bg-surface);border-left:2px solid var(--imperial-red);"><span class="hanzi">' + esc(w.excerptZh) + '</span> ' + spkBtn(w.excerptZh) + '<div class="text-xs" style="color:var(--text-secondary);">' + esc(enM ? (w.excerptEn || w.excerptVi) : w.excerptVi) + '</div></div>' : "") +
            (w.vietnamLiteraryDialogueVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Vietnam Dialogue:" : "Đối thoại Văn học Việt:") + '</strong> ' + esc(enM ? (w.vietnamLiteraryDialogueEn || w.vietnamLiteraryDialogueVi) : w.vietnamLiteraryDialogueVi) + '</div>' : "") +
            '    </div>' +
            '  </details>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else if (st.litTab === "authors") {
      body =
        '<div class="grid grid-3" style="gap:0.85rem;">' +
        authors.map(function (au) {
          var nm = enM ? (au.nameEn || au.nameVi) : au.nameVi;
          return (
            '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.38rem;padding:0.9rem;">' +
            imgPlate(au.imagePath, nm, 180) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">' +
            '    <span class="badge badge-outline">' + esc(au.lifeSpan || "") + '</span>' +
            spkBtn(au.nameZh) +
            '  </div>' +
            '  <h4 style="margin:0;">' + esc(nm) + ' <span class="hanzi" style="color:var(--imperial-red);">' + esc(au.nameZh || "") + '</span></h4>' +
            '  <div class="text-xs" style="color:var(--jade-green);">' + esc(enM ? (au.movementEn || au.movementVi) : au.movementVi) + '</div>' +
            '  <p style="margin:0;font-size:0.79rem;line-height:1.5;color:var(--text-secondary);">' + esc(enM ? (au.styleSignatureEn || au.styleSignatureVi) : au.styleSignatureVi) + '</p>' +
            (au.famousQuoteZh ? '<div class="text-xs" style="margin-top:auto;padding:0.35rem 0.45rem;background:var(--bg-paper);border-left:2px solid var(--imperial-red);"><span class="hanzi">' + esc(au.famousQuoteZh) + '</span> — ' + esc(enM ? (au.famousQuoteEn || au.famousQuoteVi) : au.famousQuoteVi) + '</div>' : "") +
            '</article>'
          );
        }).join("") +
        '</div>';
    } else {
      body =
        '<div class="grid grid-2" style="gap:0.85rem;">' +
        dialogues.map(function (dl) {
          return (
            '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;display:flex;flex-direction:column;gap:0.42rem;">' +
            '  <span class="badge badge-outline">' + esc(enM ? (dl.eraEn || dl.eraVi) : dl.eraVi) + '</span>' +
            '  <h4 style="margin:0;">' + esc(enM ? (dl.titleEn || dl.titleVi) : dl.titleVi) + '</h4>' +
            '  <p style="margin:0;font-size:0.81rem;color:var(--text-secondary);">' + esc(enM ? (dl.mujiDigestEn || dl.mujiDigestVi) : dl.mujiDigestVi) + '</p>' +
            '  <div style="font-size:0.8rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--imperial-red);"><strong>' + (enM ? "China Pole:" : "Cực Trung Quốc:") + '</strong> ' + esc(enM ? (dl.chinaPoleEn || dl.chinaPoleVi) : dl.chinaPoleVi) + '</div>' +
            '  <div style="font-size:0.8rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);"><strong>' + (enM ? "Vietnam Pole:" : "Cực Việt Nam:") + '</strong> ' + esc(enM ? (dl.vietnamPoleEn || dl.vietnamPoleVi) : dl.vietnamPoleVi) + '</div>' +
            '  <div class="text-xs" style="color:var(--text-muted);margin-top:auto;"><strong>' + (enM ? "Takeaway:" : "Nhận định:") + '</strong> ' + esc(enM ? (dl.scholarlyTakeawayEn || dl.scholarlyTakeawayVi) : dl.scholarlyTakeawayVi) + '</div>' +
            '</article>'
          );
        }).join("") +
        '</div>';
    }

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-modern-lit-studio" style="padding:1.2rem 1.3rem;border-top:3px solid var(--imperial-red);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "MODERN LITERARY CANON 1918–2026 · 现当代文学长廊" : "VĂN HỌC HIỆN ĐẠI &amp; ĐƯƠNG ĐẠI 1918–2026 · 现当代文学长廊") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.22rem;">' + (enM ? "20 Milestone Works, 16 Modern Authors &amp; 12 Vietnam–China Literary Dialogues" : "20 Tác Phẩm Kinh Điển (Lỗ Tấn → Tam Thể), 16 Tác Gia &amp; 12 Đối Thoại Việt–Trung") + '</h3>' +
      '    </div>' +
      '    <div class="filter-bar" style="margin:0;">' +
      '      <button type="button" class="filter-pill ' + (st.litTab === "works" ? "active" : "") + '" data-v8st-act="lit-tab" data-val="works">' + (enM ? "20 Works" : "20 Tác Phẩm") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.litTab === "authors" ? "active" : "") + '" data-v8st-act="lit-tab" data-val="authors">' + (enM ? "16 Authors" : "16 Tác Gia") + '</button>' +
      '      <button type="button" class="filter-pill ' + (st.litTab === "dialogues" ? "active" : "") + '" data-v8st-act="lit-tab" data-val="dialogues">' + (enM ? "12 Dialogues" : "12 Đối Thoại") + '</button>' +
      '    </div>' +
      '  </div>' +
      body +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 4. Green Urbanism & Pritzker Craft (16), 7 Eras & 4 Curated Pathways
  // --------------------------------------------------------------------------
  function renderUrbanGreenAndPathwaysStudio(enM) {
    var D = getData();
    var cases = D.urbanGreenCases16 || [];
    var eras = D.UNIFIED_ERAS_7 || [];
    var pathways = D.READER_PATHWAYS_4 || [];
    if (!cases.length && !eras.length) return "";

    var domains = ["all"];
    cases.forEach(function (c) { if (c.domain && domains.indexOf(c.domain) < 0) domains.push(c.domain); });
    var visCases = st.urbanDomainFilter === "all" ? cases : cases.filter(function (c) { return c.domain === st.urbanDomainFilter; });

    var activeTrack = pathways[0] || null;
    for (var pi = 0; pi < pathways.length; pi++) {
      if (pathways[pi].id === st.activePathwayId) { activeTrack = pathways[pi]; break; }
    }

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-urban-pathways-studio" style="padding:1.2rem 1.3rem;border-top:3px solid var(--jade-green);">' +
      '  <div style="margin-bottom:1rem;">' +
      '    <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "SEVEN CIVILIZATION ERAS &amp; FOUR GUIDED TRACKS · 七大历史纪元与四条研习主线" : "TRỤC 7 ĐẠI KỶ NGUYÊN &amp; 4 LỘ TRÌNH ĐỌC CHUYÊN SÂU · 七大历史纪元") + '</div>' +
      '    <h3 style="margin:0.15rem 0 0.65rem;font-size:1.22rem;">' + (enM ? "Chronological Coherence &amp; Reader Navigation Spine" : "Trục Mạch Lạc Từ Cổ Chí Kim &amp; Gợi Ý Lộ Trình Đọc") + '</h3>' +
      '    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:0.5rem;margin-bottom:0.85rem;">' +
      eras.map(function (er) {
        return (
          '<div style="padding:0.55rem 0.65rem;background:var(--bg-paper);border:1px solid var(--hairline);border-top:2px solid var(--imperial-red);">' +
          '  <div class="text-xs" style="font-weight:700;color:var(--imperial-red);">' + esc(er.span) + '</div>' +
          '  <div style="font-size:0.8rem;font-weight:700;margin:0.15rem 0;">' + esc(enM ? er.en : er.vi) + '</div>' +
          '  <div class="text-xs" style="color:var(--text-muted);">' + esc((er.anchors || []).join(" · ")) + '</div>' +
          '</div>'
        );
      }).join("") +
      '    </div>' +
      '    <div class="filter-bar" style="margin-bottom:0.45rem;">' +
      pathways.map(function (pt) {
        return '<button type="button" class="filter-pill ' + (pt.id === st.activePathwayId ? "active" : "") + '" data-v8st-act="pathway" data-val="' + esc(pt.id) + '" style="font-size:0.75rem;">' + esc(enM ? pt.nameEn : pt.nameVi) + '</button>';
      }).join("") +
      '    </div>' +
      (activeTrack ? (
        '<div style="padding:0.65rem 0.85rem;background:var(--bg-paper);border:1px solid var(--hairline);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">' +
        '  <div style="font-size:0.82rem;"><strong>' + esc(enM ? activeTrack.nameEn : activeTrack.nameVi) + ':</strong> ' + esc(enM ? activeTrack.summaryEn : activeTrack.summaryVi) + ' <span class="badge badge-outline">HP ' + esc((activeTrack.modules || []).join(", ")) + '</span></div>' +
        '  <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="' + esc(activeTrack.targetPage || "explore") + '">' + (enM ? "Start Track →" : "Vào Lộ Trình →") + '</button>' +
        '</div>'
      ) : "") +
      '  </div>' +
      '  <div style="padding-top:1rem;border-top:1px solid var(--hairline);">' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "SPONGE CITIES, RENEWABLES &amp; PRITZKER CRAFT" : "16 HỒ SƠ ĐÔ THỊ XANH, BỌT BIỂN &amp; KIẾN TRÚC TÁI SINH") + '</div>' +
      '        <h4 style="margin:0.1rem 0 0;font-size:1.1rem;">' + (enM ? "16 Urban Sustainability &amp; Recycled Material Architecture Profiles" : "Từ Thành Phố Bọt Biển Thâm Quyến–Vũ Hán Tới Gạch Ngói Tái Sinh Vương Thụ") + '</h4>' +
      '      </div>' +
      '      <div class="filter-bar" style="margin:0;">' +
      domains.map(function (dm) {
        return '<button type="button" class="filter-pill ' + (st.urbanDomainFilter === dm ? "active" : "") + '" data-v8st-act="urb-dom" data-val="' + esc(dm) + '" style="font-size:0.73rem;">' + esc(dm === "all" ? (enM ? "All (16)" : "Tất cả (16)") : dm) + '</button>';
      }).join("") +
      '      </div>' +
      '    </div>' +
      '    <div class="grid grid-2" style="gap:0.9rem;">' +
      visCases.map(function (uc) {
        var title = enM ? (uc.titleEn || uc.titleVi) : uc.titleVi;
        return (
          '<article class="flashcard-layer" style="display:flex;flex-direction:column;gap:0.42rem;padding:0.95rem 1.05rem;">' +
          imgPlate(uc.imagePath, title, 165) +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
          '    <span class="badge badge-jade">' + esc(uc.domain || "Urban") + ' · ' + esc(uc.cityVi || "") + '</span>' +
          spkBtn(uc.titleZh) +
          '  </div>' +
          '  <h4 style="margin:0.05rem 0;">' + esc(title) + '</h4>' +
          '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(uc.titleZh || "") + '</div>' +
          '  <div style="font-size:0.8rem;padding:0.4rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--jade-green);">' + esc(enM ? (uc.mujiDigestEn || uc.mujiDigestVi) : uc.mujiDigestVi) + '</div>' +
          '  <details class="ed-details" style="font-size:0.79rem;">' +
          '    <summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? "Engineering Mechanics, Limits &amp; Vietnam Urban Lesson →" : "Cơ Chế Kỹ Thuật, Giới Hạn &amp; Bài Học Đô Thị Việt Nam →") + '</summary>' +
          '    <div style="margin-top:0.45rem;display:grid;gap:0.4rem;padding:0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
          '      <div><strong>' + (enM ? "Mechanics:" : "Kỹ thuật:") + '</strong> ' + esc(enM ? (uc.engineeringMechanicsEn || uc.engineeringMechanicsVi) : uc.engineeringMechanicsVi) + '</div>' +
          (uc.tradeOrLimitationVi ? '<div><strong>' + (enM ? "Trade-off / Limit:" : "Giới hạn &amp; Chi phí:") + '</strong> ' + esc(enM ? (uc.tradeOrLimitationEn || uc.tradeOrLimitationVi) : uc.tradeOrLimitationVi) + '</div>' : "") +
          (uc.vietnamUrbanLessonVi ? '<div style="color:var(--jade-green);"><strong>' + (enM ? "Vietnam Lesson:" : "Gợi ý Đô thị Việt Nam:") + '</strong> ' + esc(enM ? (uc.vietnamUrbanLessonEn || uc.vietnamUrbanLessonVi) : uc.vietnamUrbanLessonVi) + '</div>' : "") +
          '    </div>' +
          '  </details>' +
          '</article>'
        );
      }).join("") +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 5. Green Trade Casebook 2030 (12 Cases with B2B Email Templates)
  // --------------------------------------------------------------------------
  function renderGreenTradeCasebookStudio(enM) {
    var cases = getData().greenTradeCasesV8_12 || [];
    if (!cases.length) return "";
    var domains = ["all"];
    cases.forEach(function (c) { if (c.domain && domains.indexOf(c.domain) < 0) domains.push(c.domain); });
    var vis = st.greenDomainFilter === "all" ? cases : cases.filter(function (c) { return c.domain === st.greenDomainFilter; });

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-green-trade-studio" style="padding:1.2rem 1.3rem;border-top:3px solid #223A52;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:#223A52;">' + (enM ? "EU–CHINA–VIETNAM GREEN SUPPLY CHAIN 2030 · CBAM · EUDR · DPP" : "THỰC CHIẾN THƯƠNG MẠI XANH 2030 · CBAM · EUDR · HỘ CHIẾU PIN") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.22rem;">' + (enM ? "12 Bilingual ESG Trade Compliance Cases &amp; Factory Email Templates" : "12 Hồ Sơ Kiểm Toán Bền Vững EU–Trung–Việt &amp; Mẫu Thư Giao Dịch Song Ngữ") + '</h3>' +
      '    </div>' +
      '    <div class="filter-bar" style="margin:0;">' +
      domains.map(function (dm) {
        return '<button type="button" class="filter-pill ' + (st.greenDomainFilter === dm ? "active" : "") + '" data-v8st-act="gt-dom" data-val="' + esc(dm) + '" style="font-size:0.73rem;">' + esc(dm === "all" ? (enM ? "All (12)" : "Tất cả (12)") : dm) + '</button>';
      }).join("") +
      '    </div>' +
      '  </div>' +
      '  <div class="grid grid-2" style="gap:0.9rem;">' +
      vis.map(function (gt) {
        var checklist = enM ? (gt.actionChecklistEn || gt.actionChecklistVi || []) : (gt.actionChecklistVi || []);
        return (
          '<article class="flashcard-layer" style="padding:0.95rem 1.05rem;display:flex;flex-direction:column;gap:0.45rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
          '    <span class="badge badge-outline">' + esc(gt.domain || "ESG") + ' · ' + esc(gt.regulationRef || "") + '</span>' +
          spkBtn(gt.titleZh) +
          '  </div>' +
          '  <h4 style="margin:0.05rem 0;">' + esc(enM ? (gt.titleEn || gt.titleVi) : gt.titleVi) + '</h4>' +
          '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(gt.titleZh || "") + '</div>' +
          '  <p style="margin:0;font-size:0.81rem;color:var(--text-secondary);"><strong>' + (enM ? "Scenario:" : "Tình huống:") + '</strong> ' + esc(enM ? (gt.scenarioEn || gt.scenarioVi) : gt.scenarioVi) + '</p>' +
          '  <div style="font-size:0.8rem;padding:0.42rem 0.55rem;background:var(--bg-paper);border-left:3px solid var(--imperial-red);"><strong>' + (enM ? "Compliance Risk:" : "Rủi ro Pháp lý:") + '</strong> ' + esc(enM ? (gt.riskAnalysisEn || gt.riskAnalysisVi) : gt.riskAnalysisVi) + '</div>' +
          '  <details class="ed-details" style="font-size:0.79rem;">' +
          '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Checklist &amp; Bilingual EN/ZH Supplier Emails →" : "Checklist Hành Động &amp; Mẫu Email EN / 中文 Gửi Nhà Máy →") + '</summary>' +
          '    <div style="margin-top:0.45rem;display:grid;gap:0.45rem;padding:0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
          (checklist.length ? '<ul style="margin:0;padding-left:1.15rem;">' + checklist.map(function (ck) { return '<li>' + esc(ck) + '</li>'; }).join("") + '</ul>' : "") +
          (gt.emailReplyTemplateEn ? '<div><div style="display:flex;justify-content:space-between;align-items:center;"><strong>EN Email Template</strong><button type="button" class="btn btn-ghost btn-sm" style="font-size:0.7rem;" data-v8st-copy="' + esc(gt.emailReplyTemplateEn) + '">' + (enM ? "Copy EN" : "Chép EN") + '</button></div><pre style="white-space:pre-wrap;font-size:0.74rem;background:var(--bg-surface);padding:0.45rem;margin:0.25rem 0;border:1px solid var(--hairline);">' + esc(gt.emailReplyTemplateEn) + '</pre></div>' : "") +
          (gt.emailReplyTemplateZh ? '<div><div style="display:flex;justify-content:space-between;align-items:center;"><strong>中文邮件模板</strong><button type="button" class="btn btn-ghost btn-sm" style="font-size:0.7rem;" data-v8st-copy="' + esc(gt.emailReplyTemplateZh) + '">' + (enM ? "Copy ZH" : "Chép ZH") + '</button></div><pre class="hanzi" style="white-space:pre-wrap;font-size:0.76rem;background:var(--bg-surface);padding:0.45rem;margin:0.25rem 0;border:1px solid var(--hairline);">' + esc(gt.emailReplyTemplateZh) + '</pre></div>' : "") +
          '    </div>' +
          '  </details>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 6. HSK 7–9 Advanced Academic & Commercial Passages (12 Passages)
  // --------------------------------------------------------------------------
  function renderHsk79PassagesStudio(enM) {
    var list = getData().hskPassagesV8_12 || [];
    if (!list.length) return "";
    var cur = list[st.hskIdx % list.length] || list[0];
    var vocabs = Array.isArray(cur.vocabHighlight) ? cur.vocabHighlight : [];
    var cq = cur.comprehensionQ;

    return (
      '<section class="card mt-2 mb-2" id="cce-v8-hsk79-studio" style="padding:1.2rem 1.3rem;border-top:3px solid var(--imperial-red);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "ADVANCED ACADEMIC &amp; COMMERCIAL CHINESE · HSK 7–9" : "LUYỆN ĐỌC CHUYÊN SÂU HSK 7–9 · BẢN ĐỊA &amp; THƯƠNG MẠI QUỐC TẾ") + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.22rem;">' + (enM ? "12 Authentic Long-Form Reading Passages with Pinyin &amp; SRS" : "12 Đoạn Văn Học Thuật &amp; Giao Thương Cao Cấp Kèm Từ Vựng SRS") + '</h3>' +
      '    </div>' +
      '    <span class="badge badge-jade">' + ((st.hskIdx % list.length) + 1) + ' / ' + list.length + '</span>' +
      '  </div>' +
      '  <div class="filter-bar" style="margin-bottom:0.8rem;">' +
      list.map(function (item, idx) {
        return '<button type="button" class="filter-pill ' + ((st.hskIdx % list.length) === idx ? "active" : "") + '" data-v8st-act="hsk" data-val="' + idx + '" style="font-size:0.73rem;">#' + (idx + 1) + ' · ' + esc(item.topicTag || "HSK 7–9") + '</button>';
      }).join("") +
      '  </div>' +
      '  <article class="flashcard-layer" style="padding:1rem 1.15rem;display:grid;gap:0.65rem;">' +
      '    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">' +
      '      <div>' +
      '        <h4 style="margin:0;font-size:1.08rem;">' + esc(enM ? (cur.titleEn || cur.titleVi) : cur.titleVi) + '</h4>' +
      '        <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(cur.titleZh || "") + '</div>' +
      '      </div>' +
      spkBtn(cur.passageZh) +
      '    </div>' +
      '    <div class="hanzi" style="font-size:1.03rem;line-height:1.85;padding:0.75rem 0.9rem;background:var(--bg-paper);border-left:3px solid var(--imperial-red);">' + esc(cur.passageZh || "") + '</div>' +
      (cur.pinyin ? '<div style="font-size:0.8rem;color:var(--text-muted);line-height:1.6;">' + esc(cur.pinyin) + '</div>' : "") +
      '    <div style="font-size:0.84rem;line-height:1.6;color:var(--text-secondary);"><strong>' + (enM ? "Translation:" : "Dịch nghĩa:") + '</strong> ' + esc(enM ? (cur.transEn || cur.transVi) : cur.transVi) + '</div>' +
      (vocabs.length ? (
        '    <div style="display:grid;gap:0.35rem;padding-top:0.5rem;border-top:1px dashed var(--hairline);">' +
        vocabs.map(function (v) {
          return '<div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;font-size:0.8rem;"><span><strong class="hanzi">' + esc(v.zh) + '</strong> <span class="pinyin">' + esc(v.pinyin || "") + '</span> · <em>' + esc(v.hanViet || "") + '</em> — ' + esc(enM ? (v.en || v.vi) : v.vi) + '</span><span>' + spkBtn(v.zh) + ' ' + srsBtn(v.zh, v.pinyin, v.hanViet, v.vi, v.en) + '</span></div>';
        }).join("") +
        '    </div>'
      ) : "") +
      (cq ? (
        '    <details class="ed-details" style="padding:0.5rem 0.65rem;background:var(--bg-paper);border:1px solid var(--hairline);font-size:0.8rem;">' +
        '      <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Comprehension Check: " : "Kiểm tra Đọc hiểu: ") + esc(enM ? (cq.qEn || cq.qVi) : cq.qVi) + '</summary>' +
        '      <div style="margin-top:0.35rem;color:var(--imperial-red);"><strong>' + (enM ? "Answer Key:" : "Đáp án:") + '</strong> ' + esc(enM ? (cq.ansEn || cq.ansVi) : cq.ansVi) + '</div>' +
        '    </details>'
      ) : "") +
      '  </article>' +
      '</section>'
    );
  }

  // --------------------------------------------------------------------------
  // 7. Article Primer Box (Triple-Anchor Pre-Reading Aid inside RenderArticle)
  // --------------------------------------------------------------------------
  function renderArticlePrimerBox(art, enM) {
    var D = getData();
    if (!art || typeof D.findArticlePrimer !== "function") return "";
    var pr = D.findArticlePrimer(art);
    if (!pr) return "";
    return (
      '<aside id="cce-v8-article-primer" class="card mb-2" style="padding:0.95rem 1.15rem;background:var(--bg-paper);border:1px solid var(--hairline);border-left:3px solid var(--jade-green);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.45rem;">' +
      '    <div class="editorial-kicker" style="color:var(--jade-green);margin:0;">' + (enM ? "READER PRIMER · TRIPLE-ANCHOR SUMMARY" : "ĐỊNH HƯỚNG ĐỌC NHANH · TÓM TẮT 3 ĐIỂM HẠT NHÂN") + '</div>' +
      '    <span class="badge badge-outline">' + esc(pr.readingMinutesEst || art.readMinutes || 8) + ' ' + (enM ? "min focus" : "phút tập trung") + '</span>' +
      '  </div>' +
      '  <ul style="margin:0;padding-left:1.15rem;display:grid;gap:0.32rem;font-size:0.84rem;line-height:1.55;">' +
      '    <li><strong>' + (enM ? "Historical Frame:" : "Bối cảnh:") + '</strong> ' + esc(enM ? (pr.contextBulletEn || pr.contextBulletVi) : pr.contextBulletVi) + '</li>' +
      '    <li><strong>' + (enM ? "Core Concept:" : "Khái niệm hạt nhân:") + '</strong> ' + esc(enM ? (pr.coreTermEn || pr.coreTermVi) : pr.coreTermVi) + '</li>' +
      '    <li><strong>' + (enM ? "Modern Relevance:" : "Hàm ý hôm nay:") + '</strong> ' + esc(enM ? (pr.modernTakeawayEn || pr.modernTakeawayVi) : pr.modernTakeawayVi) + '</li>' +
      '  </ul>' +
      '</aside>'
    );
  }

  function bind() {
    if (window._cceV8StudiosBound || typeof document === "undefined") return;
    window._cceV8StudiosBound = true;
    document.addEventListener("click", function (e) {
      var sp = e.target && e.target.closest ? e.target.closest("[data-v8st-speak]") : null;
      if (sp) {
        if (window.CCE_SPEECH && window.CCE_SPEECH.speakChinese) {
          window.CCE_SPEECH.speakChinese(sp.getAttribute("data-v8st-speak"));
        }
        return;
      }
      var sr = e.target && e.target.closest ? e.target.closest("[data-v8st-srs]") : null;
      if (sr) {
        if (window.CCE_SRS && window.CCE_SRS.addCard) {
          window.CCE_SRS.addCard({
            id: "v8-" + sr.getAttribute("data-zh"),
            hanzi: sr.getAttribute("data-zh"),
            pinyin: sr.getAttribute("data-py"),
            hanViet: sr.getAttribute("data-hv"),
            meaningVi: sr.getAttribute("data-vi"),
            meaningEn: sr.getAttribute("data-en"),
            source: "Culture Encyclopedia"
          });
          sr.textContent = "Saved!";
        }
        return;
      }
      var cp = e.target && e.target.closest ? e.target.closest("[data-v8st-copy]") : null;
      if (cp) {
        var rawTxt = cp.getAttribute("data-v8st-copy") || "";
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(rawTxt).catch(function () {});
        }
        var oldLabel = cp.textContent;
        cp.textContent = "Copied!";
        setTimeout(function () { if (cp) cp.textContent = oldLabel; }, 1200);
        return;
      }
      var el = e.target && e.target.closest ? e.target.closest("[data-v8st-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v8st-act");
      var val = el.getAttribute("data-val") || "";
      if (act === "op-tab") st.operaTab = val;
      else if (act === "op-type") st.operaTypeFilter = val;
      else if (act === "bayin") st.baYinFilter = val;
      else if (act === "eth-tab") st.ethnicTab = val;
      else if (act === "driver") st.driverCardId = (st.driverCardId === val ? "" : val);
      else if (act === "lit-tab") st.litTab = val;
      else if (act === "lit-era") st.litEraFilter = val;
      else if (act === "pathway") st.activePathwayId = val;
      else if (act === "urb-dom") st.urbanDomainFilter = val;
      else if (act === "gt-dom") st.greenDomainFilter = val;
      else if (act === "hsk") st.hskIdx = Number(val) || 0;
      else return;
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_V8_STUDIOS = {
    renderOperaAndMusicStudio: renderOperaAndMusicStudio,
    renderBorderlandEthnicAndGuidesStudio: renderBorderlandEthnicAndGuidesStudio,
    renderModernLiteratureStudio: renderModernLiteratureStudio,
    renderUrbanGreenAndPathwaysStudio: renderUrbanGreenAndPathwaysStudio,
    renderGreenTradeCasebookStudio: renderGreenTradeCasebookStudio,
    renderHsk79PassagesStudio: renderHsk79PassagesStudio,
    renderArticlePrimerBox: renderArticlePrimerBox
  };
})();
