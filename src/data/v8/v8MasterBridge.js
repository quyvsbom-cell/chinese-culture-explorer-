// ============================================================================
// CHINESE CULTURE EXPLORER — Unified Encyclopedia Bridge, 12-Module Spine & Eras
// Aggregates Pack 1..Pack 8 payloads cleanly onto global CCE registries.
// ============================================================================

(function () {
  "use strict";

  var p1 = window.CCE_V8_PACK1 || {};
  var p2 = window.CCE_V8_PACK2 || {};
  var p3 = window.CCE_V8_PACK3 || {};
  var p4 = window.CCE_V8_PACK4 || {};
  var p5 = window.CCE_V8_PACK5 || {};
  var p6 = window.CCE_V8_PACK6 || {};
  var p7 = window.CCE_V8_PACK7 || {};
  var p8 = window.CCE_V8_PACK8 || {};

  // V10.3: Enforce 1-to-1 entity photography from Pack 2 (brandsA, brandsB, gis42)
  (function propagateLaozihaoAndGiImages() {
    function normZh(z) {
      return String(z || "")
        .replace(/^(北京|杭州|广州|漳州|成都|宜宾|绍兴|苏州|太谷|东阿|长沙|武汉|上海|天津|济南|重庆|镇江|桂林|扬州|开封|福州|佛山|泸州|杏花村|青岛|烟台|黄山|安溪|勐海|凤翔|宿迁|泾县|湖州|安徽|景德镇|沈阳)/, "")
        .replace(/\s*\(.*?\)\s*/g, "")
        .trim();
    }
    var byId = {};
    var byZh = {};
    var byCoreZh = {};
    function indexPool(arr) {
      if (!Array.isArray(arr)) return;
      for (var i = 0; i < arr.length; i++) {
        var r = arr[i];
        if (!r || !r.targetFile) continue;
        if (r.id) byId[String(r.id)] = r.targetFile;
        if (r.zh) {
          byZh[String(r.zh).trim()] = r.targetFile;
          var cz = normZh(r.zh);
          if (cz) byCoreZh[cz] = r.targetFile;
        }
      }
    }
    indexPool(p2.brandsA);
    indexPool(p2.brandsB);
    indexPool(p2.gis42);

    function applyTo(list) {
      if (!Array.isArray(list)) return;
      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        if (!item) continue;
        var matched = (item.id && byId[String(item.id)]) ||
          (item.zh && byZh[String(item.zh).trim()]) ||
          (item.zh && byCoreZh[normZh(item.zh)]) ||
          "";
        if (matched) item.imagePath = matched;
      }
    }
    if (window.CCE_V5_LAOZIHAO) applyTo(window.CCE_V5_LAOZIHAO.brands);
    if (window.CCE_V5_LAOZIHAO_EXPANDED) {
      applyTo(window.CCE_V5_LAOZIHAO_EXPANDED.brands60);
      applyTo(window.CCE_V5_LAOZIHAO_EXPANDED.giAppellations12);
    }
    if (window.CCE_V6_BRANDS_CRAFT) {
      applyTo(window.CCE_V6_BRANDS_CRAFT.brandsAdditional40);
      applyTo(window.CCE_V6_BRANDS_CRAFT.brandsAdditional36);
      applyTo(window.CCE_V6_BRANDS_CRAFT.giAdditional18);
    }
  })();

  var UNIFIED_ERAS_7 = [
    {
      id: "era-1",
      span: "1600–221 BCE",
      vi: "Thương – Chu – Xuân Thu Chiến Quốc",
      en: "Shang, Zhou & Warring States",
      anchors: ["Giáp Cốt Ân Khư", "Bách Gia Chư Tử", "Bát Âm Chu Lễ"]
    },
    {
      id: "era-2",
      span: "221 BCE–220 CE",
      vi: "Tần – Hán Thống Nhất & Đô Giang Yển",
      en: "Qin-Han Unification & Silk Road",
      anchors: ["Đô Giang Yển", "Binh Mã Dũng Tần Thủy Hoàng", "Con Đường Tơ Lụa"]
    },
    {
      id: "era-3",
      span: "618–1279",
      vi: "Đường – Tống Phục Hưng Văn Nhân",
      en: "Tang-Song Literati Renaissance",
      anchors: ["Thịnh Đường Trường An", "Thanh Minh Thượng Hà Đồ", "Tứ Đại Phát Minh"]
    },
    {
      id: "era-4",
      span: "1271–1911",
      vi: "Nguyên – Minh – Thanh & Hải Thượng",
      en: "Yuan-Ming-Qing & Maritime Trade",
      anchors: ["Tử Cấm Thành", "Côn Khúc Thủy Ma Điệu", "120 Lão Tự Hào"]
    },
    {
      id: "era-5",
      span: "1918–1949",
      vi: "Ngũ Tứ, Bạch Thoại & Kháng Chiến",
      en: "May Fourth & Modern Literary Awakening",
      anchors: ["Lỗ Tấn AQ", "Ba Kim Gia", "Thơ Tân Nguyệt"]
    },
    {
      id: "era-6",
      span: "1978–2015",
      vi: "Đổi Mới, Đô Thị Hóa & Kiến Trúc Tái Sinh",
      en: "Reform Era, Megacities & Pritzker Craft",
      anchors: ["Uông Tăng Kỳ – Dư Hoa – Mạc Ngôn", "Vương Thụ Bảo tàng Ninh Ba"]
    },
    {
      id: "era-7",
      span: "2016–2026+",
      vi: "Đô Thị Xanh, AI & Thương Mại Chuẩn EU",
      en: "Green Cities, AI & Sustainable Trade",
      anchors: ["Thành phố Bọt biển 3D", "Tam Thể Hugo", "CBAM – EUDR – Cửa khẩu 240h"]
    }
  ];

  var READER_PATHWAYS_4 = [
    {
      id: "path-heritage",
      nameVi: "Lộ trình 1: Tinh Hoa Triết – Sử – Mỹ Thuật",
      nameEn: "Track 1: Philosophy, History & Aesthetics",
      modules: [2, 3, 8, 11],
      targetPage: "philosophy",
      summaryVi: "Đi từ 14 triều đại và Bách Gia đến hội họa, Côn Khúc và âm luật Cổ Cầm.",
      summaryEn: "Trace 14 dynasties and classical philosophy into painting, Kunqu opera, and Guqin harmonics."
    },
    {
      id: "path-sino-vn",
      nameVi: "Lộ trình 2: Đối Chiếu Giao Thoa Việt – Hoa",
      nameEn: "Track 2: Sino-Vietnamese Comparative Studies",
      modules: [4, 6, 11, 12],
      targetPage: "sino-vietnam",
      summaryVi: "So sánh chữ Hán–Nôm, nhã nhạc – ca trù, dân tộc vùng biên và văn học hiện đại.",
      summaryEn: "Compare Han-Nom philology, court music, borderland ethnology, and modern literary dialogues."
    },
    {
      id: "path-travel",
      nameVi: "Lộ trình 3: Du Lịch Di Sản 240h & Làng Nghề",
      nameEn: "Track 3: 240h Visa-Free Transit & Craft Trails",
      modules: [1, 5, 9],
      targetPage: "regions",
      summaryVi: "Kết nối địa hình 34 tỉnh, 120 Lão Tự Hào, 42 GI và 12 cẩm nang làng nghề – bảo tàng đêm.",
      summaryEn: "Connect 34 provinces, 120 heritage brands, 42 GIs, and 12 craft and night museum guides."
    },
    {
      id: "path-trade",
      nameVi: "Lộ trình 4: Giao Thương B2B, HSK 7–9 & Xanh 2030",
      nameEn: "Track 4: B2B Supply Chains, HSK 7–9 & ESG Trade",
      modules: [5, 7, 10, 12],
      targetPage: "business",
      summaryVi: "Thực chiến chứng từ xuất nhập khẩu, 12 hồ sơ CBAM–EUDR, HSK 7–9 và thành phố Bọt biển.",
      summaryEn: "Master trade compliance, CBAM-EUDR cases, advanced HSK readings, and sponge city engineering."
    }
  ];

  function normalizeModuleMeta(meta, numStr, defaultImg, nextPage, nextVi, nextEn) {
    var m = meta || {};
    return {
      id: m.id || ("mod-" + numStr),
      num: m.num || numStr,
      page: m.page || (numStr === "11" ? "traditional" : "contemporary"),
      doneKey: m.doneKey || ("v8_mod_" + numStr),
      img: defaultImg,
      zh: m.zh || "",
      titleVi: m.titleVi || ("Học phần " + numStr),
      titleEn: m.titleEn || ("Module " + numStr),
      whyNextVi: m.coreQuestionVi || m.whyNextVi || "",
      whyNextEn: m.coreQuestionEn || m.whyNextEn || "",
      nextPage: nextPage,
      nextLabelVi: nextVi,
      nextLabelEn: nextEn
    };
  }

  var mod11 = normalizeModuleMeta(
    p1.modulesMeta11,
    "11",
    "assets/images/lessons/v8-m11-l1.jpg",
    "explore",
    "Học phần 12: Dân Tộc Học Vùng Biên, Văn Học & Đô Thị Xanh →",
    "Module 12: Borderland Ethnology, Literature & Green Urbanism →"
  );
  var mod12 = normalizeModuleMeta(
    p5.modulesMeta12,
    "12",
    "assets/images/lessons/v8-m12-l1.jpg",
    "learning",
    "Tổng kết Học viện: 12 Bài đọc HSK 7–9 & 800 Đề Thi Tổng Hợp →",
    "Academy Capstone: 12 HSK 7–9 Passages & 800-MCQ Quiz Arena →"
  );

  var hp11 = Array.isArray(p1.lessonsHP11) ? p1.lessonsHP11 : [];
  var hp12 = Array.isArray(p5.lessonsHP12) ? p5.lessonsHP12 : [];
  var lessons12 = hp11.concat(hp12);
  var mujiDigestMap = p6.lessonsMujiDigest60 && typeof p6.lessonsMujiDigest60 === "object"
    ? p6.lessonsMujiDigest60
    : {};

  // Merge Module 11–12 lessons into main curriculum store (72 lessons) & enrich Module 1–10 digests
  if (window.CCE_V5_COURSE_LESSONS && Array.isArray(window.CCE_V5_COURSE_LESSONS.lessons36)) {
    var baseList = window.CCE_V5_COURSE_LESSONS.lessons36;
    var existingIds = {};
    var i;
    for (i = 0; i < baseList.length; i++) {
      var item = baseList[i];
      if (item && item.id) {
        existingIds[item.id] = true;
        var dg = mujiDigestMap[item.id];
        if (dg && typeof dg === "object") {
          if (dg.mujiDigestVi) item.mujiDigestVi = dg.mujiDigestVi;
          if (dg.mujiDigestEn) item.mujiDigestEn = dg.mujiDigestEn;
          if (dg.prerequisiteConceptsVi) item.prerequisiteConceptsVi = dg.prerequisiteConceptsVi;
          if (dg.prerequisiteConceptsEn) item.prerequisiteConceptsEn = dg.prerequisiteConceptsEn;
          if (dg.deepensIntoVi) item.deepensIntoVi = dg.deepensIntoVi;
          if (dg.deepensIntoEn) item.deepensIntoEn = dg.deepensIntoEn;
        }
      }
    }
    for (i = 0; i < lessons12.length; i++) {
      var lNew = lessons12[i];
      if (lNew && lNew.id && !existingIds[lNew.id]) {
        existingIds[lNew.id] = true;
        baseList.push(lNew);
      }
    }
  }

  window.CCE_V8_COURSE_ADDON = {
    modulesMeta2: [mod11, mod12],
    lessons12: lessons12,
    lessonsMujiDigest60: mujiDigestMap
  };

  var qt = Array.isArray(p8.quizTheory150) ? p8.quizTheory150 : [];
  var qv = Array.isArray(p8.quizVisual50) ? p8.quizVisual50 : [];
  window.CCE_V8_QUIZ = qt.concat(qv);

  var primerList = Array.isArray(p6.articlesPrimerBox65) ? p6.articlesPrimerBox65 : [];
  var primerBySlug = {};
  var primerByZh = {};
  for (var pi = 0; pi < primerList.length; pi++) {
    var pr = primerList[pi];
    if (pr && pr.articleSlugHint) primerBySlug[String(pr.articleSlugHint).toLowerCase()] = pr;
    if (pr && pr.titleMatchZh) primerByZh[String(pr.titleMatchZh).trim()] = pr;
  }

  function findArticlePrimer(art) {
    if (!art) return null;
    var aid = String(art.id || "").toLowerCase();
    if (aid && primerBySlug[aid]) return primerBySlug[aid];
    var azh = String(art.titleZh || "").trim();
    if (azh && primerByZh[azh]) return primerByZh[azh];
    for (var k in primerBySlug) {
      if (aid && (aid.indexOf(k) !== -1 || k.indexOf(aid) !== -1)) return primerBySlug[k];
    }
    for (var zhKey in primerByZh) {
      if (azh && (azh.indexOf(zhKey) !== -1 || zhKey.indexOf(azh) !== -1)) return primerByZh[zhKey];
    }
    return null;
  }

  window.CCE_V8_DATA = {
    operaAndPieces24: Array.isArray(p1.operaAndPieces24) ? p1.operaAndPieces24 : [],
    instruments16: Array.isArray(p1.instruments16) ? p1.instruments16 : [],
    masks12: Array.isArray(p1.masks12) ? p1.masks12 : [],
    replacementsGiV7: Array.isArray(p2.replacementsGiV7) ? p2.replacementsGiV7 : [],
    replacementsCscV7: Array.isArray(p2.replacementsCscV7) ? p2.replacementsCscV7 : [],
    ethnic24: (Array.isArray(p3.ethnicCommunitiesA) ? p3.ethnicCommunitiesA : []).concat(
      Array.isArray(p3.ethnicCommunitiesB) ? p3.ethnicCommunitiesB : []
    ),
    ethnicVietnamComparisons12: Array.isArray(p3.ethnicVietnamComparisons12) ? p3.ethnicVietnamComparisons12 : [],
    modernWorks20: Array.isArray(p4.modernWorks20) ? p4.modernWorks20 : [],
    modernAuthors16: Array.isArray(p4.modernAuthors16) ? p4.modernAuthors16 : [],
    modernVnCnDialogues12: Array.isArray(p4.modernVnCnDialogues12) ? p4.modernVnCnDialogues12 : [],
    urbanGreenCases16: Array.isArray(p5.urbanGreenCases16) ? p5.urbanGreenCases16 : [],
    studio3dHotspots4: Array.isArray(p5.studio3dHotspots4) ? p5.studio3dHotspots4 : [],
    lessonsMujiDigest60: mujiDigestMap,
    articlesPrimerBox65: primerList,
    hskPassagesV8_12: Array.isArray(p7.hskPassagesV8_12) ? p7.hskPassagesV8_12 : [],
    greenTradeCasesV8_12: Array.isArray(p7.greenTradeCasesV8_12) ? p7.greenTradeCasesV8_12 : [],
    craftAndNightFieldGuides12: Array.isArray(p7.craftAndNightFieldGuides12) ? p7.craftAndNightFieldGuides12 : [],
    UNIFIED_ERAS_7: UNIFIED_ERAS_7,
    READER_PATHWAYS_4: READER_PATHWAYS_4,
    findArticlePrimer: findArticlePrimer
  };
})();
