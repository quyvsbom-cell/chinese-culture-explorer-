// ============================================================================
// CHINESE CULTURE EXPLORER — Weighted Global Search Index (Step 05)
// Indexes 108 essays, 45 classics, 72 paintings, 55 artifacts, 850+ dict,
// 34 provinces AND all 456+ provincial sub-items (heritages, dishes, figures).
// Scoring: exact (+100) > prefix (+50) > folded/toneless Pinyin (+25) > desc (+10)
// ============================================================================

(function () {
  "use strict";

  var _items = null;
  var _dirty = true;

  var QUERY_ALIASES = {
    "hoang son": "an huy huangshan",
    "cuu trai cau": "tu xuyen jiuzhaigou",
    "truong gia gioi": "ho nam zhangjiajie",
    "thien dan": "bac kinh temple of heaven",
    "tu cam thanh": "co cung forbidden city",
    "dau cung": "dougong forbidden city",
    "lau cuu cung": "trung khanh",
    "to thuc": "chiet giang ho bac tu xuyen",
    "vuong duong minh": "quy chau chiet giang",
    "khong tu": "son dong luan ngu nho gia",
    "canton fair": "quang dong quang chau",
    "rcep": "hai quan form e thuong mai",
    "luc thu": "tu dien thuyet van"
  };

  function norm(str) {
    if (window.CCE_UTILS) return window.CCE_UTILS.foldVi(str);
    return String(str || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[đĐ]/g, "d")
      .toLowerCase();
  }

  function buildIndex() {
    var out = [];
    var arts = window.CCE_ARTICLES || [];
    for (var i = 0; i < arts.length; i++) {
      var a = arts[i];
      out.push({
        type: "article",
        id: a.id,
        title: a.titleVi || a.titleEn || "",
        titleEn: a.titleEn || "",
        zh: a.titleZh || "",
        sub: a.categoryLabel || "Chuyên luận",
        rawTitle: norm((a.titleVi || "") + " " + (a.titleEn || "") + " " + (a.titleZh || "")),
        body: norm((a.abstract || "") + " " + (a.introduction || "") + " " + (a.categoryLabel || ""))
      });
    }

    var pls = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    for (i = 0; i < pls.length; i++) {
      var p = pls[i];
      var artName = (p.artist && (p.artist.nameVi || p.artist.nameEn)) || "";
      out.push({
        type: "painting",
        id: p.id,
        title: p.titleVi || p.titleEn || "",
        titleEn: p.titleEn || "",
        zh: p.titleZh || "",
        sub: artName + (p.dynasty ? " · " + (p.dynasty.nameVi || "") : ""),
        rawTitle: norm((p.titleVi || "") + " " + (p.titleEn || "") + " " + (p.titleZh || "") + " " + (p.pinyin || "")),
        body: norm(artName + " " + (p.museum || "") + " " + (p.genreLabel || ""))
      });
    }

    var mus = (window.CCE_MUSEUM && window.CCE_MUSEUM.artifacts) || [];
    for (i = 0; i < mus.length; i++) {
      var m = mus[i];
      out.push({
        type: "artifact",
        id: m.id,
        title: m.nameVi || m.nameEn || "",
        titleEn: m.nameEn || "",
        zh: m.nameZh || "",
        sub: (m.periodLabel || "") + " · " + (m.collection || ""),
        rawTitle: norm((m.nameVi || "") + " " + (m.nameEn || "") + " " + (m.nameZh || "") + " " + (m.pinyin || "")),
        body: norm((m.material || "") + " " + (m.culturalSignificance || ""))
      });
    }

    var classics = (window.CCE_PHILOSOPHY && window.CCE_PHILOSOPHY.classicalTexts) || [];
    for (i = 0; i < classics.length; i++) {
      var c = classics[i];
      out.push({
        type: "classic",
        id: c.id,
        title: c.titleVi || c.titleEn || "",
        titleEn: c.titleEn || "",
        zh: c.titleZh || "",
        sub: (c.treasuryLabel || "Cổ tịch") + " · " + (c.author || c.school || ""),
        rawTitle: norm((c.titleVi || "") + " " + (c.titleEn || "") + " " + (c.titleZh || "")),
        body: norm((c.summary || "") + " " + (c.author || "") + " " + (c.era || ""))
      });
    }

    var reg = window.CCE_REGIONS;
    var provs = (reg && reg.provinces) || [];
    for (i = 0; i < provs.length; i++) {
      var pr = provs[i];
      out.push({
        type: "province",
        id: pr.id,
        title: pr.nameVi || pr.nameEn || "",
        titleEn: pr.nameEn || "",
        zh: pr.nameZh || "",
        sub: (pr.regionLabel || "") + " · " + (pr.capital || ""),
        rawTitle: norm((pr.nameVi || "") + " " + (pr.nameEn || "") + " " + (pr.nameZh || "") + " " + (pr.capital || "")),
        body: norm((pr.highlights || "") + " " + (pr.economy || "") + " " + (pr.landmark || ""))
      });
      // Index provincial sub-items (heritages, dishes, figures) pointing straight to pr.id
      var subGroups = [
        { arr: pr.heritageSites || [], kind: "Di sản" },
        { arr: pr.dishes || pr.cuisineDishes || [], kind: "Đặc sản" },
        { arr: pr.famousFigures || pr.figures || [], kind: "Danh nhân" }
      ];
      for (var sg = 0; sg < subGroups.length; sg++) {
        var grp = subGroups[sg];
        for (var j = 0; j < grp.arr.length; j++) {
          var subItem = grp.arr[j];
          var sTitle = (typeof subItem === "string" ? subItem : (subItem.nameVi || subItem.name || subItem.title || ""));
          var sZh = (subItem && (subItem.nameZh || subItem.zh || "")) || "";
          if (!sTitle) continue;
          out.push({
            type: "province_item",
            id: pr.id,
            title: sTitle + " (" + (pr.nameVi || "") + ")",
            titleEn: ((subItem && subItem.nameEn) || sTitle) + " (" + (pr.nameEn || pr.nameVi || "") + ")",
            zh: sZh,
            sub: grp.kind + " · " + (pr.nameVi || ""),
            rawTitle: norm(sTitle + " " + ((subItem && subItem.nameEn) || "") + " " + sZh),
            body: norm((pr.nameVi || "") + " " + ((subItem && (subItem.descVi || subItem.note || "")) || ""))
          });
        }
      }
    }

    var dict = window.CCE_DICTIONARY || [];
    for (i = 0; i < dict.length; i++) {
      var d = dict[i];
      out.push({
        type: "term",
        id: d.id,
        title: d.hanzi + " — " + (d.hanViet || d.vietnamese || ""),
        titleEn: d.hanzi + " (" + (d.pinyin || "") + ") — " + (d.english || ""),
        zh: d.hanzi || "",
        sub: (d.pinyin || "") + " · " + (d.liushuCategory || d.liushuType || "Lục thư"),
        rawTitle: norm((d.hanzi || "") + " " + (d.traditional || "") + " " + (d.pinyin || "") + " " + (d.hanViet || "")),
        body: norm((d.vietnamese || "") + " " + (d.english || ""))
      });
    }

    var litV4 = (window.CCE_LITERATURE_HSK_V4 && window.CCE_LITERATURE_HSK_V4.hskBriefs) || [];
    for (i = 0; i < litV4.length; i++) {
      var hb = litV4[i];
      out.push({
        type: "article",
        id: "han-viet-phonology-middle-chinese",
        title: "[HSK " + hb.hsk + "] " + hb.zh + " (" + hb.pinyin + ") — " + hb.vi,
        titleEn: "[HSK " + hb.hsk + "] " + hb.zh + " — " + hb.en,
        zh: hb.zh || "",
        sub: hb.hanViet + " · HSK " + hb.hsk,
        rawTitle: norm(hb.zh + " " + hb.pinyin + " " + hb.hanViet + " " + hb.vi + " " + hb.en),
        body: norm(hb.en + " " + hb.vi)
      });
    }

    var tradeV4 = (window.CCE_TRADE_TRILINGUAL_V4 && window.CCE_TRADE_TRILINGUAL_V4.terms) || [];
    for (i = 0; i < tradeV4.length; i++) {
      var tt = tradeV4[i];
      out.push({
        type: "business",
        id: tt.id,
        title: tt.en + " · " + tt.zh + " (" + tt.vi + ")",
        titleEn: tt.en + " · " + tt.zh,
        zh: tt.zh || "",
        sub: tt.pinyin + " · EU–China Logistics",
        rawTitle: norm(tt.en + " " + tt.zh + " " + tt.pinyin + " " + tt.vi),
        body: norm(tt.contextEn || "")
      });
    }

    var lzh = (window.CCE_V5_LAOZIHAO && window.CCE_V5_LAOZIHAO.brands) || [];
    for (i = 0; i < lzh.length; i++) {
      var br = lzh[i];
      out.push({
        type: "business",
        id: br.id,
        title: br.zh + " (" + br.hanViet + " · " + br.foundedYear + ")",
        titleEn: br.nameEn + " · " + br.zh + " (Est. " + br.foundedYear + ")",
        zh: br.zh || "",
        sub: "Trung Hoa Lão Tự Hiệu · " + (br.cityVi || ""),
        rawTitle: norm(br.zh + " " + br.pinyin + " " + br.hanViet + " " + br.nameEn),
        body: norm((br.craftSecretVi || "") + " " + (br.b2bTradeVi || ""))
      });
    }

    var lzhExp = window.CCE_V5_LAOZIHAO_EXPANDED || {};
    var b60 = lzhExp.brands60 || [];
    for (i = 0; i < b60.length; i++) {
      var bx = b60[i];
      out.push({
        type: "business",
        id: bx.id,
        title: bx.zh + " (" + bx.hanViet + " · " + bx.foundedYear + ")",
        titleEn: bx.nameEn + " · " + bx.zh + " (Est. " + bx.foundedYear + ")",
        zh: bx.zh || "",
        sub: "Lão Tự Hiệu · " + (bx.cityVi || ""),
        rawTitle: norm(bx.zh + " " + bx.pinyin + " " + bx.hanViet + " " + bx.nameEn),
        body: norm((bx.craftSecretVi || "") + " " + (bx.b2bTradeVi || "") + " " + (bx.signatureProductVi || ""))
      });
    }
    var gis = lzhExp.giAppellations12 || [];
    for (i = 0; i < gis.length; i++) {
      var g = gis[i];
      out.push({
        type: "business",
        id: g.id,
        title: "[GI Âu–Trung] " + g.vi + " (" + g.zh + ")",
        titleEn: "[EU–China GI] " + g.en + " (" + g.zh + ")",
        zh: g.zh || "",
        sub: g.gbStandardCode || "Chỉ dẫn Địa lý Bảo hộ",
        rawTitle: norm(g.zh + " " + g.pinyin + " " + g.vi + " " + g.en),
        body: norm((g.euProtectionNoteVi || "") + " " + (g.terroirAndCraftVi || ""))
      });
    }

    var v5Lessons = (window.CCE_V5_COURSE_LESSONS && window.CCE_V5_COURSE_LESSONS.lessons36) || [];
    for (i = 0; i < v5Lessons.length; i++) {
      var ls = v5Lessons[i];
      out.push({
        type: "article",
        id: (ls.moduleNum >= 6 ? "sino-vietnamese-translation-business" : (ls.moduleNum === 3 ? "temple-of-heaven-tiantan-cosmology-3d" : "forbidden-city-3d-dissection")),
        title: "[HP " + ls.moduleNum + "." + ls.lessonNum + "] " + ls.titleVi,
        titleEn: "[Module " + ls.moduleNum + "." + ls.lessonNum + "] " + (ls.titleEn || ls.titleVi),
        zh: (ls.titleZh || "").split("·")[0].trim(),
        sub: "Khóa học V5 · " + (ls.titleZh || ""),
        rawTitle: norm((ls.titleVi || "") + " " + (ls.titleEn || "") + " " + (ls.titleZh || "")),
        body: norm((ls.coreQuestionVi || "") + " " + (ls.synthesisParagraphVi || ""))
      });
    }

    var hskV5 = window.CCE_V5_HSK_ESSAYS || {};
    var cm20 = hskV5.classicalModernPairs20 || [];
    for (i = 0; i < cm20.length; i++) {
      var cm = cm20[i];
      out.push({
        type: "classic",
        id: cm.id,
        title: "[Cổ văn ↔ HSK] " + cm.classicalZh + " (" + cm.hanViet + ")",
        titleEn: "[Classical ↔ Modern] " + cm.classicalZh + " — " + cm.en,
        zh: cm.classicalZh || "",
        sub: cm.sourceBook || "HSK 4–9 Văn ngôn",
        rawTitle: norm(cm.classicalZh + " " + cm.modernZh + " " + cm.hanViet + " " + cm.pinyin),
        body: norm((cm.vi || "") + " " + (cm.en || "") + " " + (cm.usageContextVi || ""))
      });
    }

    var wxCases = (window.CCE_V5_WUXING_CASEBOOK && window.CCE_V5_WUXING_CASEBOOK.historicalCases16) || [];
    for (i = 0; i < wxCases.length; i++) {
      var wx = wxCases[i];
      out.push({
        type: "article",
        id: "yinyang-origins",
        title: "[Âm Dương Ngũ Hành] " + wx.titleVi,
        titleEn: "[Wuxing Case] " + (wx.titleEn || wx.titleVi),
        zh: (wx.titleZh || "").split("·")[0].trim(),
        sub: wx.phaseFocus || "Lịch sử Tư tưởng",
        rawTitle: norm(wx.titleVi + " " + (wx.titleEn || "") + " " + (wx.phaseFocus || "")),
        body: norm((wx.historicalAnalysisVi || "") + " " + (wx.crossSystemLinkVi || ""))
      });
    }

    var sc24 = (window.CCE_V5_SUPPLY_CASES && window.CCE_V5_SUPPLY_CASES.cases24) || [];
    for (i = 0; i < sc24.length; i++) {
      var sc = sc24[i];
      out.push({
        type: "business",
        id: sc.id,
        title: "[" + sc.lane + "] " + sc.titleVi,
        titleEn: "[" + sc.lane + "] " + (sc.titleEn || sc.titleVi),
        zh: "",
        sub: sc.lane + " · Logistics Âu–Trung",
        rawTitle: norm(sc.lane + " " + sc.titleVi + " " + (sc.titleEn || "")),
        body: norm((sc.riskIdentifiedEn || "") + " " + (sc.actionPlanVi || ""))
      });
    }

    var v6B = window.CCE_V6_BRANDS_CRAFT || {};
    (v6B.brandsAdditional40 || v6B.brandsAdditional36 || []).forEach(function (vb) {
      out.push({
        type: "traditional",
        id: vb.id,
        title: "[Lão Tự Hiệu] " + vb.hanViet + " (" + vb.zh + ")",
        titleEn: "[Honored Brand] " + vb.nameEn + " (" + vb.zh + ")",
        zh: vb.zh || "",
        sub: "Est. " + vb.foundedYear + " · " + vb.cityVi,
        rawTitle: norm(vb.zh + " " + vb.pinyin + " " + vb.hanViet + " " + vb.nameEn),
        body: norm((vb.craftSecretVi || "") + " " + (vb.signatureProductVi || ""))
      });
    });
    (v6B.lzhDualComparePairs10 || []).forEach(function (dc) {
      out.push({
        type: "traditional",
        id: dc.id,
        title: "[Đối sánh Lão Tự Hiệu] " + dc.titleVi,
        titleEn: "[Brand Pair Compare] " + dc.titleEn,
        zh: "",
        sub: (dc.brandA || "") + " vs " + (dc.brandB || ""),
        rawTitle: norm((dc.titleVi || "") + " " + (dc.titleEn || "") + " " + (dc.brandA || "") + " " + (dc.brandB || "")),
        body: norm(dc.legalIpLessonVi || "")
      });
    });
    (v6B.giAdditional18 || []).forEach(function (vg) {
      var vgVi = vg.vi || vg.nameVi || "";
      var vgEn = vg.en || vg.nameEn || "";
      out.push({
        type: "business",
        id: vg.id,
        title: "[GI Âu–Trung] " + vgVi + " (" + vg.zh + ")",
        titleEn: "[EU–China GI] " + vgEn + " (" + vg.zh + ")",
        zh: vg.zh || "",
        sub: vg.gbStandardCode || "Chỉ dẫn Địa lý V6",
        rawTitle: norm(vg.zh + " " + vg.pinyin + " " + vgVi + " " + vgEn),
        body: norm((vg.euProtectionNoteVi || vg.protectionRuleVi || "") + " " + (vg.vnEuComparisonVi || vg.vnEvftaCounterpartVi || ""))
      });
    });

    var v6L = window.CCE_V6_LIUSHU_VISUAL || {};
    (v6L.visualCharacters100 || v6L.visualCharacters36 || []).forEach(function (lc) {
      var mShort = lc.meaningShort || lc.meaningVi || "";
      out.push({
        type: "dict",
        id: lc.id,
        title: "[Lục Thư] " + lc.zh + " · " + lc.hanViet + " (" + mShort + ")",
        titleEn: "[Liushu] " + lc.zh + " — " + (lc.meaningEn || mShort),
        zh: lc.zh || "",
        sub: (lc.liushuType || "") + " · " + (lc.pinyin || ""),
        rawTitle: norm(lc.zh + " " + lc.pinyin + " " + lc.hanViet + " " + mShort),
        body: norm((lc.evolution4StagesText || lc.svgMorphDesc || "") + " " + (lc.meaningVi || ""))
      });
    });
    (v6L.falseFriendsComic30 || []).forEach(function (ff) {
      out.push({
        type: "dict",
        id: ff.id,
        title: "[Bạn Giả Hán–Việt] " + ff.zh + " — " + (ff.panelBTrueZh || ff.comicPanelB_RealMeaningVi),
        titleEn: "[False Friend] " + ff.zh + " — " + (ff.meaningEn || ff.comicPanelB_RealMeaningEn),
        zh: ff.zh || "",
        sub: ff.pinyin + " · Tránh hiểu nhầm",
        rawTitle: norm(ff.zh + " " + ff.pinyin + " " + (ff.panelAVietTrap || "") + " " + (ff.panelBTrueZh || "")),
        body: norm(ff.tipVi || "")
      });
    });
    (v6L.simpTradAsymmetry50 || []).forEach(function (stItem) {
      out.push({
        type: "dict",
        id: stItem.id,
        title: "[Giản–Phồn] " + stItem.simp + " → " + (stItem.trads || []).join(" / "),
        titleEn: "[Simp–Trad] " + stItem.simp + " -> " + (stItem.trads || []).join(" / "),
        zh: stItem.simp || "",
        sub: "Bất đối xứng 1–Nhiều",
        rawTitle: norm(stItem.simp + " " + (stItem.trads || []).join(" ") + " " + (stItem.diffVi || "")),
        body: norm(stItem.classicalEtymologyVi || stItem.diffVi || "")
      });
    });
    (v6L.measureWordsVisual40 || []).forEach(function (mw) {
      out.push({
        type: "dict",
        id: mw.id,
        title: "[Lượng từ] " + mw.zh + " (" + mw.pinyin + ") — " + mw.shapeVi,
        titleEn: "[Measure Word] " + mw.zh + " — " + mw.usageEn,
        zh: mw.zh || "",
        sub: mw.exampleZh || "",
        rawTitle: norm(mw.zh + " " + mw.pinyin + " " + mw.shapeVi + " " + mw.usageEn),
        body: norm(mw.exampleZh || "")
      });
    });
    (v6L.chengyuOrigins36 || []).forEach(function (cy) {
      out.push({
        type: "dict",
        id: cy.id,
        title: "[Thành ngữ 3 Khung] " + cy.zh + " (" + cy.hanViet + ")",
        titleEn: "[Chengyu] " + cy.zh + " (" + cy.pinyin + ")",
        zh: cy.zh || "",
        sub: cy.source || "",
        rawTitle: norm(cy.zh + " " + cy.pinyin + " " + cy.hanViet + " " + (cy.source || "")),
        body: norm(cy.b2bUsageVi || "")
      });
    });

    var v6C = window.CCE_V6_COSMOLOGY_VISUAL || {};
    (v6C.solarTerms24 || v6C.solarTermsPhenology24 || []).forEach(function (stItem) {
      var stVi = stItem.vi || stItem.nameVi || "";
      out.push({
        type: "article",
        id: "yinyang-origins",
        title: "[24 Tiết Khí] " + stItem.zh + " (" + stVi + ")",
        titleEn: "[Solar Term] " + stItem.zh + " (" + (stItem.nameEn || stVi) + ")",
        zh: stItem.zh || "",
        sub: (stItem.dateApprox || stItem.gregorianApproxDate || "") + " · " + (stItem.deg || stItem.solarLongitudeDeg || 0) + " deg",
        rawTitle: norm(stItem.zh + " " + stItem.pinyin + " " + stVi),
        body: norm((stItem.tamHau || "") + " " + (stItem.descVi || ""))
      });
    });
    (v6C.culinaryHerbs48 || v6C.herbarium24 || []).forEach(function (hb) {
      out.push({
        type: "article",
        id: "yinyang-origins",
        title: "[Herbarium 48] " + hb.nameVi + " (" + hb.zh + ")",
        titleEn: "[Herbarium] " + (hb.nameEn || hb.nameVi) + " (" + hb.zh + ")",
        zh: hb.zh || "",
        sub: hb.latin || hb.latinName || "",
        rawTitle: norm(hb.zh + " " + hb.pinyin + " " + hb.nameVi + " " + (hb.latinName || "")),
        body: norm(hb.culinaryVi || hb.culinaryDishVi || "")
      });
    });
    (v6C.constellationsCulture28 || []).forEach(function (cs) {
      out.push({
        type: "article",
        id: "yinyang-origins",
        title: "[28 Nhị Thập Bát Tú] " + cs.zh + " · " + cs.hanViet,
        titleEn: "[Lunar Mansion] " + cs.zh + " · " + cs.iauCounterpart,
        zh: cs.zh || "",
        sub: cs.symbolGroup + " · " + cs.iauCounterpart,
        rawTitle: norm(cs.zh + " " + cs.pinyin + " " + cs.hanViet + " " + cs.iauCounterpart),
        body: norm(cs.noteVi || "")
      });
    });

    var v6Lit = window.CCE_V6_LITERATURE_VISUAL || {};
    (v6Lit.poemPaintingPairs24 || []).forEach(function (pp) {
      out.push({
        type: "article",
        id: "literature-classics",
        title: "[Thi Trung Hữu Họa] " + pp.titleVi + " (" + pp.titleZh + ")",
        titleEn: "[Poem-Painting] " + pp.titleVi + " — " + pp.poet,
        zh: pp.titleZh || "",
        sub: pp.poet || "",
        rawTitle: norm(pp.titleZh + " " + pp.titleVi + " " + (pp.poet || "")),
        body: norm(pp.poemVi || "")
      });
    });
    (v6Lit.hskPassages40 || []).forEach(function (hp) {
      out.push({
        type: "dict",
        id: hp.id,
        title: "[" + hp.hskLevel + " Đọc hiểu] " + hp.titleVi + " (" + hp.titleZh + ")",
        titleEn: "[" + hp.hskLevel + "] " + hp.titleEn,
        zh: hp.titleZh || "",
        sub: hp.hskLevel + " Reading",
        rawTitle: norm(hp.titleZh + " " + hp.titleVi + " " + hp.titleEn),
        body: norm(hp.translationVi || "")
      });
    });
    (v6Lit.hanVietPoetryComparison15 || []).forEach(function (hv) {
      out.push({
        type: "sino-vietnam",
        id: hv.id,
        title: "[Thi Ca Đường–Việt] " + hv.tangPoet + " ↔ " + hv.vietPoet,
        titleEn: "[Sino-Viet Poetry] " + hv.tangPoet + " vs " + hv.vietPoet,
        zh: hv.tangLineZh || "",
        sub: hv.vietPoet || "",
        rawTitle: norm(hv.tangPoet + " " + hv.vietPoet + " " + (hv.tangLineZh || "")),
        body: norm(hv.comparisonVi || "")
      });
    });

    var v6T = window.CCE_V6_TRADE_AND_CSC || {};
    (v6T.annotatedTradeDocs10 || []).forEach(function (td) {
      var tdVi = td.nameVi || td.titleVi || "";
      var tdEn = td.nameEn || td.titleEn || "";
      out.push({
        type: "business",
        id: td.id,
        title: "[Chứng từ XNK] " + tdVi + " (" + tdEn + ")",
        titleEn: "[Trade Doc] " + tdEn,
        zh: td.nameZh || td.titleZh || "",
        sub: td.issuerVi || td.issuerRoleVi || "Incoterms & Customs Doc",
        rawTitle: norm(tdVi + " " + tdEn + " " + (td.nameZh || td.titleZh || "")),
        body: norm(td.issuerVi || td.issuerRoleVi || "")
      });
    });
    (v6T.b2bTerms150 || []).forEach(function (bt) {
      out.push({
        type: "business",
        id: bt.id,
        title: "[" + (bt.v6Tag || "B2B Trade") + "] " + bt.en + " — " + bt.zh,
        titleEn: "[" + (bt.v6Tag || "B2B Trade") + "] " + bt.en + " (" + bt.zh + ")",
        zh: bt.zh || "",
        sub: bt.pinyin + " · " + bt.vi,
        rawTitle: norm(bt.en + " " + bt.zh + " " + bt.pinyin + " " + bt.hanViet + " " + bt.vi),
        body: norm(bt.contextVi || "")
      });
    });
    (v6T.extraSupplyCases16 || []).forEach(function (sc6) {
      out.push({
        type: "business",
        id: sc6.id,
        title: "[" + sc6.lane + "] " + sc6.titleVi,
        titleEn: "[" + sc6.lane + "] " + sc6.titleEn,
        zh: "",
        sub: sc6.lane + " · Decision Tree V6",
        rawTitle: norm(sc6.lane + " " + sc6.titleVi + " " + sc6.titleEn),
        body: norm((sc6.riskIdentifiedEn || "") + " " + (sc6.actionPlanVi || ""))
      });
    });
    (v6T.cscUniversities24Atlas || v6T.cscUniversities24 || []).forEach(function (cu) {
      out.push({
        type: "sino-vietnam",
        id: cu.id,
        title: "[Học bổng CSC] " + cu.nameVi + " (" + cu.zh + ")",
        titleEn: "[CSC University] " + (cu.nameEn || cu.nameVi) + " (" + cu.zh + ")",
        zh: cu.zh || "",
        sub: "Agency " + (cu.agencyNo || cu.agencyNumber) + " · " + cu.cityVi,
        rawTitle: norm(cu.zh + " " + cu.nameVi + " " + cu.cityVi + " " + (cu.agencyNo || cu.agencyNumber)),
        body: norm(cu.majorsVi || cu.strengthsVi || "")
      });
    });

    _items = out;
    _dirty = false;
    return out;
  }

  function ensureIndex() {
    if (_dirty || !_items) return buildIndex();
    return _items;
  }

  function search(rawQuery, limitPerGroup) {
    var qRaw = String(rawQuery || "").trim();
    if (!qRaw) return [];
    var q = norm(qRaw);
    var alias = QUERY_ALIASES[q] || "";
    var list = ensureIndex();
    var scored = [];
    for (var i = 0; i < list.length; i++) {
      var it = list[i];
      var score = 0;
      if (it.zh && it.zh === qRaw) score = 120;
      else if (it.rawTitle === q) score = 100;
      else if (it.rawTitle.indexOf(q) === 0) score = 50;
      else if (it.rawTitle.indexOf(q) >= 0) score = 25;
      else if (it.body.indexOf(q) >= 0) score = 10;
      else if (alias && (it.rawTitle.indexOf(alias.split(" ")[0]) >= 0 || it.body.indexOf(alias.split(" ")[0]) >= 0)) score = 18;
      if (score > 0) scored.push({ score: score, item: it });
    }
    scored.sort(function (a, b) { return b.score - a.score; });
    var maxTotal = limitPerGroup ? limitPerGroup * 6 : 60;
    return scored.slice(0, maxTotal).map(function (s) { return s.item; });
  }

  window.CCE_SEARCH = {
    search: search,
    markDirty: function () { _dirty = true; },
    warmIdle: function () {
      var r = window.requestIdleCallback || function (cb) { setTimeout(cb, 600); };
      r(ensureIndex);
    }
  };
})();
