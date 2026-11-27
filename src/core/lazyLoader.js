// ============================================================================
// CHINESE CULTURE EXPLORER — On-Demand Route & Encyclopedia Bundle Loader
// Pre-seeds safe global data containers BEFORE app.js initializes so bundles
// stream in on demand without detaching Array/Object references.
// ============================================================================

(function () {
  "use strict";

  // Pre-seed mutable containers before core scripts read references
  var _seedArticles = (window.CCE_ARTICLES = window.CCE_ARTICLES || []);
  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};
  var _seedDict = (window.CCE_DICTIONARY = window.CCE_DICTIONARY || []);
  var _seedSurvival = (window.CCE_SURVIVAL_PACKS = window.CCE_SURVIVAL_PACKS || []);
  window.CCE_PHILOSOPHY = window.CCE_PHILOSOPHY || { schools: [], classicalTexts: [], comparisonMatrix: [] };
  window.CCE_MUSEUM = window.CCE_MUSEUM || { categories: [], culturalShowcase: [], artifacts: [], articleSupplements: {} };
  window.CCE_PAINTINGS = window.CCE_PAINTINGS || { masterpieces: [], eras: [], genres: [], comparisons: [], museums: [] };
  window.CCE_PAINTINGS_EN = window.CCE_PAINTINGS_EN || {};
  window.CCE_DESTINATIONS_ATLAS = window.CCE_DESTINATIONS_ATLAS || { hubs: [], corridors: [] };
  window.CCE_DESTINATIONS_ATLAS_EN = window.CCE_DESTINATIONS_ATLAS_EN || {};
  var _seedIntel = (window.CCE_INTELLIGENCE = window.CCE_INTELLIGENCE || {});
  var _seedComp = (window.CCE_COMPENDIA = window.CCE_COMPENDIA || {});
  window.CCE_MUSEUM_199_COMPLETE_ARCHIVE = window.CCE_MUSEUM_199_COMPLETE_ARCHIVE || {};
  window.CCE_QUOCHOA_72_DEEP_DOSSIERS = window.CCE_QUOCHOA_72_DEEP_DOSSIERS || {};
  window.CCE_PROVINCES_34_MASTER_ATLAS = window.CCE_PROVINCES_34_MASTER_ATLAS || {};
  window.CCE_MASTER_QUIZ_830 = window.CCE_MASTER_QUIZ_830 || [];
  window.CCE_STUDY_PATHS_12 = window.CCE_STUDY_PATHS_12 || [];

  var BUNDLES = {
    "dictionary-base-pack": [
      "src/data/dictionaryData.js",
      "src/data/dictionaryExpansionBatch2026.js"
    ],
    "compendia-intel-pack": [
      "src/data/intelligenceAuditData.js",
      "src/data/compendiaData.js",
      "src/data/compendiaArticles.js"
    ],
    "regions-batches-pack": [
      "src/data/regionsProvincesBatch1.js",
      "src/data/regionsProvincesBatch2.js",
      "src/data/regionsProvincesBatch3.js",
      "src/data/destinationsDeepAtlas2026.js",
      "src/data/regionsExpansionBatch2026.js",
      "src/data/provincesReadiness2026.js",
      "src/data/provincesVisualsMap2026.js"
    ],
    "articles-deep-batches-pack": [
      "src/data/articlesMonographsPart1.js",
      "src/data/articlesMonographsPart2.js",
      "src/data/articlesDepthEnrichmentBatch1.js",
      "src/data/articlesDepthEnrichmentBatch2.js",
      "src/data/articlesDepthEnrichmentBatch3.js",
      "src/data/hotspotsAndMetadataUpgradeBatch1.js",
      "src/data/hotspotsAndMetadataUpgradeBatch2.js",
      "src/data/articlesExpansionBatch2026.js",
      "src/data/classicsExpansionBatch2026.js",
      "src/data/museumExpansionBatch2026.js",
      "src/data/curatorialAndMatrices2026.js",
      "src/data/paintingsCuratorial2026.js",
      "src/data/uniformDepthAndEn2026.js",
      "src/data/editorialMediaPack2026.js"
    ],
    "subpage-ui-pack": [
      "src/components/interactiveLabs2026.js",
      "src/components/labsExpansionPart2_2026.js",
      "src/components/v3WaveModules.js",
      "src/components/galleryReaderV3.js",
      "src/components/hanziStrokePad.js",
      "src/components/learningLabV3.js",
      "src/components/v3Wave5Modules.js",
      "src/components/pentatonicStudio.js",
      "src/components/presentationMode.js",
      "src/components/civilizationAtlas.js",
      "src/components/v4UXEnhancements.js",
      "src/components/travelUXHub.js",
      "src/components/v4KnowledgeHub.js",
      "src/components/trilingualTradeStudio.js",
      "src/components/v9HomeExperience.js",
      "src/components/v9VisualDiscovery.js",
      "src/components/v9HandscrollViewer.js",
      "src/components/v9SplitAtlas.js",
      "src/components/v9ScrollytellingReader.js",
      "src/components/v9DataStories.js"
    ],
    "v5-v8-core-pack": [
      "src/data/v5/laozihaoBrandsV5.js",
      "src/data/v5/laozihaoBrandsExpandedV5.js",
      "src/data/v5/courseLessonsV5.js",
      "src/data/v5/hskEssaysV5.js",
      "src/data/v5/wuxingCasebookV5.js",
      "src/data/v5/supplyChainCasesV5.js",
      "src/data/v5/quizMasteryV5.js",
      "src/data/v5/v5DeepEnrichmentLayer.js",
      "src/components/laozihaoPavilionV5.js",
      "src/components/v5CourseAcademy.js",
      "src/data/v6/v6EncyclopediaAndVisuals.js",
      "src/data/v7/v7CompleteEncyclopedia.js",
      "src/data/v8/V8_Pack1.js",
      "src/data/v8/V8_Pack2.js",
      "src/data/v8/V8_Pack3.js",
      "src/data/v8/V8_Pack4.js",
      "src/data/v8/V8_Pack5.js",
      "src/data/v8/V8_Pack6.js",
      "src/data/v8/V8_Pack7.js",
      "src/data/v8/V8_Pack8.js",
      "src/data/v8/v8MasterBridge.js",
      "src/components/v6VisualAcademyStudios.js",
      "src/components/v8EncyclopediaStudios.js"
    ],
    "v104-monographs-pack": [
      "src/data/cce_v10_upgrade/cceV10Monographs294Bundle.js"
    ],
    "v104-mono-shard-1": [
      "src/data/cce_v10_upgrade/cceV10MonographsShard1.js"
    ],
    "v104-mono-shard-2": [
      "src/data/cce_v10_upgrade/cceV10MonographsShard2.js"
    ],
    "v104-mono-shard-3": [
      "src/data/cce_v10_upgrade/cceV10MonographsShard3.js"
    ],
    "v104-mono-shard-4": [
      "src/data/cce_v10_upgrade/cceV10MonographsShard4.js"
    ],
    "v104-mono-shard-5": [
      "src/data/cce_v10_upgrade/cceV10MonographsShard5.js"
    ],
    "v12-home-curatorial-pack": [
      "src/data/v12/v12CuratedChaptersData.js",
      "src/data/v12/v12CuratorialHotspotsData.js"
    ],
    "v12-field-atlas-pack": [
      "src/data/v12/v12FieldAtlas12306Data.js",
      "src/data/v12/v12LexiconCulinaryAndSynchronyData.js"
    ],
    "v12-3d-explode-pack": [
      "src/data/v12/v12Procedural3DSpecs.js",
      "src/components/3d/v12ProceduralExplode3D.js"
    ],
    "v12-b2b-quiz-pack": [
      "src/data/v12/v12B2BAndQuizExpansion.js",
      "src/data/v12/v12LaozihaoAndIchMasterData.js"
    ],
    "v12-classics-cosmology-pack": [
      "src/data/v12/v12ClassicalAndHanNomCorpus.js",
      "src/data/v12/v12CosmologyYijingAndAcademyData.js"
    ],
    "v104-live108-patches": [
      "src/data/cce_v10_upgrade/cceV10Live108Patches.js"
    ],
    "v104-museum-pack": [
      "src/data/cce_v10_upgrade/cceV10Museum199Bundle.js"
    ],
    "v104-paintings-pack": [
      "src/data/cce_v10_upgrade/cceV10QuocHoa72Bundle.js"
    ],
    "v104-provinces-pack": [
      "src/data/cce_v10_upgrade/cceV10Provinces34AtlasBundle.js"
    ],
    "v104-quiz-pack": [
      "src/data/cce_v10_upgrade/cceV10Quiz830AndIndexesBundle.js"
    ],
    "3d-pack": [
      "src/vendor/three.min.js",
      "src/components/forbiddenCity3D.js",
      "src/components/artifacts3DStudio.js"
    ],
    "3d-studio-ext-pack": [
      "src/components/china3DMap.js",
      "src/components/3d/dougongJoinery3D.js",
      "src/components/3d/vernacular3DStudio.js",
      "src/components/3d/euChinaLogistics3D.js",
      "src/components/3d/hydraulic3DStudio.js",
      "src/components/3d/armillary3DStudio.js",
      "src/components/3d/artifacts3DExtra.js",
      "src/components/3d/v6HeritageStudios3D.js",
      "src/components/3d/v7Masterpieces3D.js",
      "src/components/3d/v8InteractiveStudios3D.js",
      "src/components/3d/cceV10Unified3DStudio72.js",
      "src/components/3d/studioHub3D.js"
    ],
    "en-pack": [
      "src/data/articlesEnData.js",
      "src/data/enParityPhilCustomsBiz2026.js",
      "src/data/enParityMuseum2026.js",
      "src/data/enParityPaintings2026.js",
      "src/data/enParityRegionsHistory2026.js",
      "src/data/coreModulesEnParity2026.js",
      "src/data/v3/enParityArticlesV3_Part1a.js",
      "src/data/v3/enParityArticlesV3_Part1b.js",
      "src/data/v3/enParityArticlesV3_Part2a.js",
      "src/data/v3/enParityArticlesV3_Part2b.js",
      "src/data/v3/enParityArticlesV3_Part3a.js",
      "src/data/v3/enParityArticlesV3_Part3b.js",
      "src/data/v3/enParityArticlesV3_Part4.js",
      "src/data/v3/enParityArticlesV3_Part5a.js",
      "src/data/v3/enParityArticlesV3_Part5b.js",
      "src/data/v3/enParityPaintingsV3.js",
      "src/data/v3/enParityMuseumV3.js",
      "src/data/v3/enParityClassicsV3.js",
      "src/data/v3/enParityComprehensionV3_p1.js",
      "src/data/v3/enParityComprehensionV3_p2.js",
      "src/data/v3/enParityCustomsV3.js"
    ],
    "zh-i18n-pack": [
      "src/data/v3/uiI18nZh2026.js"
    ],
    "articles-v3-pack": [
      "src/data/v3/articlesExpansionV3_Part1a.js",
      "src/data/v3/articlesExpansionV3_Part1b.js",
      "src/data/v3/articlesExpansionV3_Part2a.js",
      "src/data/v3/articlesExpansionV3_Part2b.js",
      "src/data/v3/articlesExpansionV3_Part3a.js",
      "src/data/v3/articlesExpansionV3_Part3b.js",
      "src/data/v3/articlesExpansionV3_Part4.js",
      "src/data/v3/articlesExpansionV3_Part5a.js",
      "src/data/v3/articlesExpansionV3_Part5b.js",
      "src/data/v3/articlesDepthEnrichmentBatch3_p1.js",
      "src/data/v3/articlesDepthEnrichmentBatch3_p2.js",
      "src/data/v3/articleComprehensionV3_p1.js",
      "src/data/v3/articleComprehensionV3_p2.js",
      "src/data/crossLinkGraph2026.js"
    ],
    "regions-deep-pack": [
      "src/data/v3/destinationsDeepAtlasPart2_3a.js",
      "src/data/v3/destinationsDeepAtlasPart2_3b.js",
      "src/data/v3/destinationsDeepAtlasPart2_3c.js",
      "src/data/crossLinkGraph2026.js"
    ],
    "paintings-pack": [
      "src/data/v3/paintingsExpansionV3.js"
    ],
    "museum-classics-v3-pack": [
      "src/data/v3/museumExpansionV3.js",
      "src/data/v3/classicsExpansionV3.js",
      "src/data/v3/customsExpansionV3.js",
      "src/data/v3/conceptPairs2026_a.js",
      "src/data/v3/conceptPairs2026_b.js",
      "src/data/v3/guidedTracks2026.js"
    ],
    "dictionary-pack": [
      "src/data/v3/dictionaryExpansionV3_p1.js",
      "src/data/v3/dictionaryExpansionV3_p2.js",
      "src/data/v3/survivalPacksExpansionV3.js",
      "src/data/v3/quizArenaBank2026.js"
    ],
    "history-biz-v3-pack": [
      "src/data/v3/historySyncV3.js",
      "src/data/v3/falseFriendsV3.js",
      "src/data/v3/bizExpansionV3.js"
    ],
    "v4-knowledge-pack": [
      "src/data/v4/unescoHeritageEncyclopediaV4.js",
      "src/data/v4/literatureOperaArtsV4.js",
      "src/data/v4/scienceTeaMedicineFoodV4.js",
      "src/data/v4/sinoVietModernChinaV4.js",
      "src/data/v4/politicsEconHskTcmStudyV4.js",
      "src/data/v4/knowledgeGraphV4.js",
      "src/data/v4/quizArenaV4.js"
    ],
    "v4-trilingual-pack": [
      "src/data/v4/tradeTrilingualBridgeV4.js"
    ]
  };

  var _loadedScripts = {};
  var _bundlePromises = {};
  var _activeBundles = {};
  var _listeners = [];

  function isArticleStub(art) {
    if (!art) return true;
    return Boolean(art._v104Stub || art._v23Stub || !Array.isArray(art.mainContent) || art.mainContent.length === 0);
  }

  function reconcileGlobalRefs() {
    var i, j, art;
    if (window.CCE_ARTICLES !== _seedArticles && Array.isArray(window.CCE_ARTICLES)) {
      if (_seedArticles.length === 0) {
        // Adopt the pre-populated bootstrap array (captured by app.js) instead of detaching it
        _seedArticles = window.CCE_ARTICLES;
      } else {
        Array.prototype.push.apply(_seedArticles, window.CCE_ARTICLES);
        window.CCE_ARTICLES = _seedArticles;
      }
    }
    // Deduplicate _seedArticles in-place so full monographs cleanly replace _v104Stub / _v23Stub entries
    var bestIdx = Object.create(null);
    var writeIdx = 0;
    for (i = 0; i < _seedArticles.length; i++) {
      art = _seedArticles[i];
      if (!art || !art.id) continue;
      if (Object.prototype.hasOwnProperty.call(bestIdx, art.id)) {
        var prevIdx = bestIdx[art.id];
        var prev = _seedArticles[prevIdx];
        var prevStub = isArticleStub(prev);
        var curStub = isArticleStub(art);
        if (prevStub && !curStub) {
          _seedArticles[prevIdx] = art;
        }
        continue;
      }
      bestIdx[art.id] = writeIdx;
      _seedArticles[writeIdx++] = art;
    }
    if (writeIdx < _seedArticles.length) {
      _seedArticles.length = writeIdx;
    }

    if (window.CCE_DICTIONARY !== _seedDict && Array.isArray(window.CCE_DICTIONARY)) {
      if (_seedDict.length === 0) {
        _seedDict = window.CCE_DICTIONARY;
      } else {
        var seenIds = Object.create(null);
        for (i = 0; i < _seedDict.length; i++) {
          if (_seedDict[i] && _seedDict[i].id) seenIds[_seedDict[i].id] = true;
        }
        for (j = 0; j < window.CCE_DICTIONARY.length; j++) {
          var d = window.CCE_DICTIONARY[j];
          if (!d || (d.id && seenIds[d.id])) continue;
          if (d.id) seenIds[d.id] = true;
          _seedDict.push(d);
        }
        window.CCE_DICTIONARY = _seedDict;
      }
    }

    // Merge V12 Lexicon 120 into CCE_DICTIONARY idempotently (even if later packs re-seeded)
    if (window.CCE_V12_LEXICON_CULINARY_SYNC && Array.isArray(window.CCE_V12_LEXICON_CULINARY_SYNC.lexicon120)) {
      var dictTarget = Array.isArray(window.CCE_DICTIONARY) ? window.CCE_DICTIONARY : _seedDict;
      var dictSeen = Object.create(null);
      for (i = 0; i < dictTarget.length; i++) {
        if (dictTarget[i]) {
          if (dictTarget[i].id) dictSeen[dictTarget[i].id] = true;
          if (dictTarget[i].hanzi) dictSeen["hz:" + dictTarget[i].hanzi] = true;
        }
      }
      var lexList = window.CCE_V12_LEXICON_CULINARY_SYNC.lexicon120;
      for (j = 0; j < lexList.length; j++) {
        var lx = lexList[j];
        if (!lx || !lx.hanzi || dictSeen[lx.id] || dictSeen["hz:" + lx.hanzi]) continue;
        dictSeen[lx.id] = true;
        dictSeen["hz:" + lx.hanzi] = true;
        dictTarget.push({
          id: lx.id,
          hanzi: lx.hanzi,
          traditional: lx.traditionalZh || lx.hanzi,
          pinyin: lx.pinyin || "",
          hanViet: lx.hanViet || "",
          level: "HSK 7-9 / Văn ngôn",
          topicTag: lx.liushuCategory || "Văn hiến 4 tầng tự dạng",
          vietnamese: lx.meaningVi || "",
          english: lx.meaningEn || "",
          context: lx.sinoVietNuanceVi || "",
          mnemonic: lx.sinoVietNuanceVi || "",
          liushuCategory: lx.liushuCategory || "",
          radical: lx.radical || "",
          strokes: lx.strokes || 0,
          scriptEvolution4: lx.scriptEvolution4 || null,
          examples: lx.exampleZh ? [{ zh: lx.exampleZh, vi: lx.exampleVi || "", en: lx.exampleEn || "" }] : []
        });
      }
    }

    // Merge V12 170 MCQs (#831-#1000) into CCE_MASTER_QUIZ_830 idempotently (re-applies even after cceV10Quiz830 overwrites)
    if (window.CCE_V12_B2B_QUIZ && Array.isArray(window.CCE_V12_B2B_QUIZ.quiz170)) {
      window.CCE_MASTER_QUIZ_830 = Array.isArray(window.CCE_MASTER_QUIZ_830) ? window.CCE_MASTER_QUIZ_830 : [];
      var qSeen = Object.create(null);
      for (i = 0; i < window.CCE_MASTER_QUIZ_830.length; i++) {
        if (window.CCE_MASTER_QUIZ_830[i] && window.CCE_MASTER_QUIZ_830[i].id) qSeen[window.CCE_MASTER_QUIZ_830[i].id] = true;
      }
      var pillarNames = {
        history: "V12 History",
        philosophy: "V12 Philosophy",
        museum: "V12 Museum & Art",
        field: "V12 Field Atlas",
        business: "V12 B2B & Sino-Viet"
      };
      var q170 = window.CCE_V12_B2B_QUIZ.quiz170;
      for (j = 0; j < q170.length; j++) {
        var qx = q170[j];
        if (!qx || !qx.id || qSeen[qx.id]) continue;
        qSeen[qx.id] = true;
        window.CCE_MASTER_QUIZ_830.push({
          id: qx.id,
          pack: qx.pack || pillarNames[qx.pillar] || "V12 Scholarly",
          monographId: qx.monographId || "",
          topicVi: qx.topicVi || "",
          topicEn: qx.topicEn || "",
          qVi: qx.qVi || "",
          qEn: qx.qEn || "",
          optionsVi: qx.optionsVi || [],
          optionsEn: qx.optionsEn || [],
          correctIndex: typeof qx.correctIndex === "number" ? qx.correctIndex : Number(qx.answerIdx || 0),
          explanationVi: qx.explanationVi || "",
          explanationEn: qx.explanationEn || ""
        });
      }
    }

    if (window.CCE_SURVIVAL_PACKS !== _seedSurvival && Array.isArray(window.CCE_SURVIVAL_PACKS)) {
      if (_seedSurvival.length === 0) {
        _seedSurvival = window.CCE_SURVIVAL_PACKS;
      } else {
        var existPack = Object.create(null);
        for (var p = 0; p < _seedSurvival.length; p++) {
          if (_seedSurvival[p] && _seedSurvival[p].id) existPack[_seedSurvival[p].id] = true;
        }
        for (var q = 0; q < window.CCE_SURVIVAL_PACKS.length; q++) {
          var sp = window.CCE_SURVIVAL_PACKS[q];
          if (!sp || (sp.id && existPack[sp.id])) continue;
          _seedSurvival.push(sp);
        }
        window.CCE_SURVIVAL_PACKS = _seedSurvival;
      }
    }
    if (window.CCE_INTELLIGENCE && window.CCE_INTELLIGENCE !== _seedIntel) {
      Object.assign(_seedIntel, window.CCE_INTELLIGENCE);
      window.CCE_INTELLIGENCE = _seedIntel;
    }
    if (window.CCE_COMPENDIA && window.CCE_COMPENDIA !== _seedComp) {
      Object.assign(_seedComp, window.CCE_COMPENDIA);
      window.CCE_COMPENDIA = _seedComp;
    }
  }

  function hasScriptInDom(src) {
    var norm = src.replace(/^\//, "");
    var list = document.querySelectorAll("script[src]");
    for (var i = 0; i < list.length; i++) {
      var s = (list[i].getAttribute("src") || "").replace(/^\//, "");
      if (s === norm || s.indexOf(norm) === 0) return true;
    }
    return false;
  }

  function loadScript(src) {
    if (_loadedScripts[src]) return _loadedScripts[src];
    if (hasScriptInDom(src)) {
      _loadedScripts[src] = Promise.resolve();
      return _loadedScripts[src];
    }
    _loadedScripts[src] = new Promise(function (resolve) {
      var el = document.createElement("script");
      var cleanSrc = "/" + src.replace(/^\//, "");
      el.src = cleanSrc + (cleanSrc.indexOf("?") >= 0 ? "" : "?v=12.0");
      el.async = false;
      el.onload = function () {
        resolve();
      };
      el.onerror = function () {
        resolve();
      };
      document.head.appendChild(el);
    });
    return _loadedScripts[src];
  }

  function emitProgress(bundleName, done) {
    for (var i = 0; i < _listeners.length; i++) {
      try { _listeners[i](bundleName, done); } catch (e) {}
    }
  }

  function ensureBundle(name) {
    if (_bundlePromises[name]) return _bundlePromises[name];
    var files = BUNDLES[name];
    if (!files || !files.length) return Promise.resolve();
    _activeBundles[name] = true;
    emitProgress(name, false);
    var chain = Promise.resolve();
    files.forEach(function (file) {
      chain = chain.then(function () { return loadScript(file); });
    });
    _bundlePromises[name] = chain.then(function () {
      reconcileGlobalRefs();
      delete _activeBundles[name];
      emitProgress(name, true);
      if (window.CCE_SEARCH && typeof window.CCE_SEARCH.markDirty === "function") {
        window.CCE_SEARCH.markDirty();
      }
    });
    return _bundlePromises[name];
  }

  function ensureMany(names) {
    return Promise.all((names || []).map(ensureBundle));
  }

  function computeNeededBundles(pageId, extraFlags) {
    var need = [];
    if (pageId === "home") {
      need.push("dictionary-base-pack", "v12-home-curatorial-pack", "v12-field-atlas-pack", "v12-b2b-quiz-pack");
    } else if (pageId === "explore") {
      need.push("dictionary-base-pack", "subpage-ui-pack", "v12-home-curatorial-pack");
    } else if (pageId === "article") {
      need.push("dictionary-base-pack", "subpage-ui-pack");
      if (extraFlags && extraFlags.needs3d) need.push("3d-pack", "3d-studio-ext-pack");
    } else if (pageId === "history") {
      need.push("dictionary-base-pack", "history-biz-v3-pack", "v4-knowledge-pack", "subpage-ui-pack", "v5-v8-core-pack", "v12-field-atlas-pack");
    } else if (pageId === "regions") {
      need.push("regions-batches-pack", "regions-deep-pack", "subpage-ui-pack", "v104-provinces-pack", "v12-field-atlas-pack", "3d-pack", "3d-studio-ext-pack");
    } else if (pageId === "paintings") {
      need.push("paintings-pack", "subpage-ui-pack", "v104-paintings-pack", "v12-home-curatorial-pack");
    } else if (pageId === "museum") {
      need.push("museum-classics-v3-pack", "paintings-pack", "subpage-ui-pack", "v104-museum-pack", "v12-home-curatorial-pack", "v12-3d-explode-pack", "3d-pack", "3d-studio-ext-pack");
    } else if (pageId === "philosophy" || pageId === "traditional" || pageId === "library") {
      need.push("dictionary-base-pack", "compendia-intel-pack", "museum-classics-v3-pack", "dictionary-pack", "subpage-ui-pack", "v5-v8-core-pack", "v4-knowledge-pack", "v12-classics-cosmology-pack", "v12-b2b-quiz-pack", "3d-pack", "3d-studio-ext-pack");
    } else if (pageId === "learning") {
      need.push("dictionary-base-pack", "dictionary-pack", "museum-classics-v3-pack", "history-biz-v3-pack", "v4-knowledge-pack", "v4-trilingual-pack", "subpage-ui-pack", "v104-quiz-pack", "v12-b2b-quiz-pack", "v12-classics-cosmology-pack", "v12-field-atlas-pack");
    } else if (pageId === "sino-vietnam" || pageId === "business") {
      need.push("dictionary-base-pack", "compendia-intel-pack", "history-biz-v3-pack", "v4-trilingual-pack", "v4-knowledge-pack", "subpage-ui-pack", "v5-v8-core-pack", "v12-b2b-quiz-pack", "v12-classics-cosmology-pack", "3d-pack", "3d-studio-ext-pack");
    } else if (pageId === "about") {
      need.push("compendia-intel-pack", "subpage-ui-pack");
    }
    return need;
  }

  function ensureForState(pageId, uiLang, extraFlags) {
    var need = computeNeededBundles(pageId, extraFlags);
    return ensureMany(need).then(function () {
      var langPacks = [];
      if (uiLang === "en") langPacks.push("en-pack");
      if (uiLang === "zh-CN" || uiLang === "zh-TW") langPacks.push("zh-i18n-pack");
      return langPacks.length ? ensureMany(langPacks) : Promise.resolve();
    });
  }

  function hasUnloaded(pageId, uiLang, extraFlags) {
    var need = computeNeededBundles(pageId, extraFlags);
    if (uiLang === "en") need.push("en-pack");
    if (uiLang === "zh-CN" || uiLang === "zh-TW") need.push("zh-i18n-pack");
    for (var i = 0; i < need.length; i++) {
      if (!_bundlePromises[need[i]]) return true;
    }
    return false;
  }

  function warmAllInIdle() {
    var queue = [
      "dictionary-base-pack",
      "subpage-ui-pack",
      "regions-batches-pack",
      "compendia-intel-pack"
    ];
    var stepIdx = 0;
    function pumpNext() {
      if (stepIdx >= queue.length) return;
      var name = queue[stepIdx++];
      ensureBundle(name).then(function () {
        setTimeout(pumpNext, 1200);
      });
    }
    var runner = window.requestIdleCallback || function (cb) { return setTimeout(cb, 2600); };
    runner(function () {
      setTimeout(pumpNext, 800);
    });
  }

  if (typeof document !== "undefined") {
    document.addEventListener("pointerover", function (e) {
      var navEl = e.target && e.target.closest ? e.target.closest('[data-action="nav"][data-page], [data-v10-go-page]') : null;
      if (!navEl) return;
      var targetPage = navEl.getAttribute("data-page") || navEl.getAttribute("data-v10-go-page");
      if (!targetPage || targetPage === "home") return;
      var lang = (window.CCE_STORE && window.CCE_STORE.getState().uiLang) || "vi";
      ensureForState(targetPage, lang, {});
    }, { passive: true });
  }

  window.CCE_LAZY = {
    BUNDLES: BUNDLES,
    ensureBundle: ensureBundle,
    ensureMany: ensureMany,
    ensureForState: ensureForState,
    hasUnloaded: hasUnloaded,
    warmAllInIdle: warmAllInIdle,
    isLoading: function (name) {
      if (name) return Boolean(_activeBundles[name]);
      return Object.keys(_activeBundles).length > 0;
    },
    onStatus: function (fn) {
      if (typeof fn === "function") _listeners.push(fn);
    }
  };
})();
