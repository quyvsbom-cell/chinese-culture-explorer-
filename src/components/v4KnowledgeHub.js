// ============================================================================
// CHINESE CULTURE EXPLORER — Specialized Interdisciplinary Knowledge Hub
// Integrates all 6 Gemini Web Playbook Packs: Politics & Macro 2026,
// HSK 4-9 Classics/60 Briefs/24 Poems/100 Chengyu, Non-Clinical TCM & Yin-Yang-
// Wuxing 5x4 Matrix, CSC/C9/UIBE Study Abroad, and 59 UNESCO Sites + Food/VN
// ============================================================================

(function () {
  "use strict";

  var st = {
    tab: "hsk", // "hsk" | "tcm-wuxing" | "study" | "politics" | "culture-vn"
    hskSub: "classics", // "classics" | "briefs" | "poems" | "chengyu" | "phrases"
    wuxingSub: "matrix", // "matrix" | "constitutions" | "ziwu"
    studySub: "roadmap", // "roadmap" | "unis" | "phrases"
    polSub: "institutions", // "institutions" | "glossary"
    vnSub: "vn", // "vn" | "food" | "unesco" | "places"
    hskLevel: "all",
    spFilter: "all"
  };

  function esc(s) {
    return String(s == null ? "" : s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function spk(zh) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="' + esc(zh) + '" title="Listen zh-CN"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  function srsBtn(zh, py, hv, vi, en) {
    if (!zh) return "";
    return '<button type="button" class="btn btn-ghost btn-sm" style="padding:0.1rem 0.38rem;font-size:0.72rem;border:1px solid var(--hairline);" data-v4h-act="add-srs" data-zh="' + esc(zh) + '" data-py="' + esc(py || "") + '" data-hv="' + esc(hv || "") + '" data-vi="' + esc(vi || "") + '" data-en="' + esc(en || "") + '">+ SRS</button>';
  }

  function subPillsBar(stateKey, activeVal, items) {
    return '<div class="filter-bar" style="margin-bottom:0.9rem;">' + items.map(function (it) {
      return '<button type="button" class="filter-pill ' + (activeVal === it.id ? "active" : "") + '" data-v4h-act="sub" data-key="' + stateKey + '" data-val="' + it.id + '">' + esc(it.lbl) + '</button>';
    }).join("") + '</div>';
  }

  var POEM_PAINTINGS_24 = [
    "assets/images/paintings/28_libai_hangyin.jpg",
    "assets/images/paintings/01_luoshenfu_tu.jpg",
    "assets/images/paintings/04_youchun_tu.jpg",
    "assets/images/paintings/12_kuanglu_tu.jpg",
    "assets/images/paintings/13_xiaoxiang_tu.jpg",
    "assets/images/paintings/15_qiushan_wendao.jpg",
    "assets/images/paintings/18_xishan_xinglv.jpg",
    "assets/images/paintings/19_zao_chun_tu.jpg",
    "assets/images/paintings/20_wanhe_songfeng_litang.jpg",
    "assets/images/paintings/21_qingming_shanghe.jpg",
    "assets/images/paintings/22_qianli_jiangshan.jpg",
    "assets/images/paintings/23_rui_he_tu.jpg",
    "assets/images/paintings/26_chushan_ruiai.jpg",
    "assets/images/paintings/30_quehua_qiuse.jpg",
    "assets/images/paintings/32_fuchun_shanju.jpg",
    "assets/images/paintings/33_dongting_yuyin.jpg",
    "assets/images/paintings/36_lushan_gao.jpg",
    "assets/images/paintings/38_shanlu_songsheng.jpg",
    "assets/images/paintings/43_luomu_qiuse.jpg",
    "assets/images/paintings/51_lushan_tu_daqian.jpg",
    "assets/images/paintings/57_jiangxing_chuxue_tu.jpg",
    "assets/images/paintings/59_hanjiang_dudiao_tu.jpg",
    "assets/images/paintings/66_taohuayuan_tu.jpg",
    "assets/images/paintings/72_gusu_fanhua_tu.jpg"
  ];

  var HSK_BRIEF_POOL = [
    "assets/images/articles/hero-keju-examinations.jpg",
    "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "assets/images/articles/hero-confucianism.jpg",
    "assets/images/articles/hero-traditional-arch.jpg",
    "assets/images/articles/hero-six-teas-gongfu.jpg",
    "assets/images/articles/hero-silk-road.jpg",
    "assets/images/articles/hero-four-inventions.jpg",
    "assets/images/articles/hero-spring-festival.jpg",
    "assets/images/articles/hero-contemporary-china.jpg",
    "assets/images/articles/hero-sino-vietnam.jpg",
    "assets/images/academic/peking-opera.jpg",
    "assets/images/academic/guqin-instrument.jpg",
    "assets/images/academic/suzhou-garden.jpg",
    "assets/images/academic/ming-forbidden-city.jpg",
    "assets/images/academic/qin-terracotta.jpg",
    "assets/images/academic/west-lake-hangzhou.jpg"
  ];

  var CHENGYU_POOL = [
    "assets/images/museum/lantingji-xu.jpg",
    "assets/images/museum/hanshi-tie.jpg",
    "assets/images/academic/sunzi-bamboo-slips.jpg",
    "assets/images/articles/hero-hundred-schools.jpg",
    "assets/images/articles/hero-hanviet-false-friends.jpg",
    "assets/images/articles/hero-classical-books-scrolls.jpg"
  ];

  var PHRASE_POOL = [
    "assets/images/articles/hero-consular-field-guide.jpg",
    "assets/images/articles/hero-chinese-banquet.jpg",
    "assets/images/articles/hero-beijing-shanghai.jpg",
    "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "assets/images/academic/chengdu-jinli.jpg",
    "assets/images/editorial_v8/field-rail-transit.jpg"
  ];

  var OPERA_SCRIPT_RELICS = [
    "assets/images/opera/op-01.jpg",
    "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "assets/images/provinces/jiangsu-suzhou-garden.jpg",
    "assets/images/provinces/guangdong-canton-tower.jpg",
    "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
    "assets/images/museum/mao-gong-ding.jpg",
    "assets/images/opera/op-08.jpg",
    "assets/images/museum/jizhi-wengao-yan-zhenqing.jpg",
    "assets/images/opera/inst-01.jpg",
    "assets/images/museum/pingfu-tie.jpg"
  ];

  var TCM_POOL = [
    "assets/images/articles/hero-tcm-solar.jpg",
    "assets/images/museum/acupuncture-bronze.jpg",
    "assets/images/articles/hero-tea-culture.jpg",
    "assets/images/herbs/herb-astragalus.jpg",
    "assets/images/editorial/infographic-tcm-meridian-clock.svg",
    "assets/images/editorial/infographic-wuxing-correlative.svg",
    "assets/images/articles/hero-yinyang.jpg",
    "assets/images/articles/hero-wuxing.jpg"
  ];

  var STUDY_POOL = [
    "assets/images/articles/hero-academy-shuyuan.jpg",
    "assets/images/universities/csc-01.jpg",
    "assets/images/universities/csc-02.jpg",
    "assets/images/academic/van-mieu-hanoi.jpg",
    "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "assets/images/provinces/shanghai-bund-skyline.jpg"
  ];

  var UNI_PROVINCE_HINTS = [
    "prov-beijing", "prov-beijing", "prov-beijing", "prov-shanghai",
    "prov-shanghai", "prov-zhejiang", "prov-jiangsu", "prov-guangdong",
    "prov-sichuan", "prov-hubei", "prov-shaanxi", "prov-beijing"
  ];

  var POLITICS_POOL = [
    "assets/images/urban/urban-08.jpg",
    "assets/images/urban/urban-06.jpg",
    "assets/images/articles/hero-ai-deepseek-lab.jpg",
    "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "assets/images/articles/hero-supply-chain-rcep.jpg",
    "assets/images/urban/urban-11.jpg"
  ];

  var PROVINCE_COVER_MAP = {
    "prov-beijing": "assets/images/museum/forbidden-city-autumn-ginkgo-moat.jpg",
    "prov-shanghai": "assets/images/prov_items/shanghai/h0.jpg",
    "prov-guangdong": "assets/images/prov_items/guangdong/h0.jpg",
    "prov-sichuan": "assets/images/prov_items/sichuan/h0.jpg",
    "prov-zhejiang": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg",
    "prov-jiangsu": "assets/images/prov_items/jiangsu/h0.jpg",
    "prov-fujian": "assets/images/provinces/fujian-tulou.jpg",
    "prov-gansu": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "prov-shaanxi": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "prov-henan": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "prov-shandong": "assets/images/provinces/shandong-taishan.jpg",
    "prov-anhui": "assets/images/expeditions/v7-exp-05.jpg",
    "prov-yunnan": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "prov-hunan": "assets/images/provinces/hunan-zhangjiajie.jpg",
    "prov-hubei": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "prov-guangxi": "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "prov-chongqing": "assets/images/provinces/chongqing-hongyadong.jpg",
    "prov-shanxi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "prov-tibet": "assets/images/provinces/tibet-potala-palace.jpg",
    "prov-xinjiang": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "prov-jiangxi": "assets/images/provinces/jiangxi-wuyuan-village.jpg",
    "prov-guizhou": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "prov-hebei": "assets/images/provinces/hebei-chengde-resort.jpg",
    "prov-liaoning": "assets/images/provinces/liaoning-mukden-palace.jpg"
  };

  var ALL_PROVINCE_KEYS = Object.keys(PROVINCE_COVER_MAP);

  function provVisual(provId, bucket, idx, fallback) {
    var i = Math.abs(Number(idx) || 0);
    var pid = provId;
    if (!pid) pid = ALL_PROVINCE_KEYS[i % ALL_PROVINCE_KEYS.length];
    var vis = (window.CCE_PROVINCE_ITEM_VISUALS && window.CCE_PROVINCE_ITEM_VISUALS[pid]) || {};
    var arr = Array.isArray(vis[bucket]) ? vis[bucket] : [];
    if (arr.length) return arr[i % arr.length];
    if (PROVINCE_COVER_MAP[pid]) return PROVINCE_COVER_MAP[pid];
    return fallback || "assets/images/editorial_v8/guozijian-imperial-academy.jpg";
  }

  function renderV4Thumb(src, caption, compact) {
    if (!src) return "";
    var isSvg = /\.svg(\?|$)/i.test(src);
    var styleBox = compact
      ? "position:relative;width:100%;height:88px;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.4rem;background:var(--bg-surface);cursor:pointer;"
      : "position:relative;aspect-ratio:16/10;max-height:155px;width:100%;overflow:hidden;border-radius:var(--radius);border:1px solid var(--hairline);margin-bottom:0.5rem;background:var(--bg-surface);cursor:pointer;";
    var fitStyle = isSvg
      ? "width:100%;height:100%;object-fit:contain;padding:0.25rem;display:block;"
      : "width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;";
    return (
      '<div class="img-skeleton-bg" style="' + styleBox + '" data-action="open-custom-image" data-src="' + esc(src) + '" data-caption="' + esc(caption || "") + '">' +
      '  <img src="' + esc(src) + '" alt="' + esc(caption || "Visual") + '" loading="lazy" decoding="async" style="' + fitStyle + '" onerror="this.onerror=null;this.src=\'assets/images/articles/hero-classical-books-scrolls.jpg\';" />' +
      '</div>'
    );
  }

  function renderV5HskEssays(enM) {
    var hskData = window.CCE_V5_HSK_ESSAYS || {};
    var pairs20 = hskData.classicalModernPairs20 || [];
    var baseTpl = hskData.hskArgumentTemplates15 || [];
    var v6Essays = (window.CCE_V6_LITERATURE_VISUAL && window.CCE_V6_LITERATURE_VISUAL.hskEssayFrames30_Additional15) || [];
    var tpl15 = baseTpl.concat(v6Essays);
    if (!pairs20.length && !tpl15.length) return "";
    var pairImgs = [
      "assets/images/museum/song-printed-shiji.jpg",
      "assets/images/academic/laozi-portrait.jpg",
      "assets/images/museum/kuaixue-shiqing-tie.jpg",
      "assets/images/literature/lit-mod-01.jpg",
      "assets/images/literature/lit-mod-06.jpg",
      "assets/images/figures/confucius.jpg"
    ];
    return (
      '<div id="cce-v5-hsk-essays-section" style="margin-top:1.35rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "WENYAN ↔ MODERN BAIHUA BRIDGE & HSK 6–9 ACADEMIC TEMPLATES · 文言文与议论文模板" : "NHỊP CẦU CỔ VĂN (VĂN NGÔN) ↔ BẠCH THOẠI & " + tpl15.length + " KHUNG NGHỊ LUẬN HSK 6–9") + '</div>' +
      '  <h4 style="margin:0.2rem 0 0.75rem;font-size:1.15rem;">' + (enM ? (pairs20.length + " Classical–Modern Sentence Pairs &amp; " + tpl15.length + " HSK Argument Templates") : (pairs20.length + " Danh ngôn Cổ văn – Hiện đại &amp; " + tpl15.length + " Khung Lập luận Luận văn / Phỏng vấn CSC")) + '</h4>' +
      (pairs20.length ? (
        '  <div class="grid grid-2" style="gap:0.75rem;max-height:540px;overflow:auto;margin-bottom:1.1rem;">' +
        pairs20.map(function (cm, idx) {
          return (
            '<article class="flashcard-layer" style="font-size:0.81rem;display:flex;flex-direction:column;gap:0.35rem;">' +
            renderV4Thumb(pairImgs[idx % pairImgs.length], cm.sourceBook + " — " + cm.hanViet, true) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-gold">' + esc(cm.sourceBook) + '</span>' +
            '    <span>' + spk(cm.classicalZh) + ' ' + srsBtn(cm.classicalZh, cm.pinyin, cm.hanViet, cm.vi, cm.en) + '</span>' +
            '  </div>' +
            '  <div class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);font-weight:700;">' + esc(cm.classicalZh) + '</div>' +
            '  <div class="hanzi" style="font-size:0.9rem;color:var(--jade-green);">→ ' + esc(cm.modernZh) + ' ' + spk(cm.modernZh) + '</div>' +
            '  <div class="pinyin text-xs">' + esc(cm.pinyin) + ' · <strong>' + esc(cm.hanViet) + '</strong></div>' +
            '  <div><strong>' + (enM ? "Meaning:" : "Nghĩa:") + '</strong> ' + esc(enM ? cm.en : cm.vi) + '</div>' +
            '  <div style="font-size:0.77rem;color:var(--text-secondary);background:var(--bg-paper);padding:0.4rem 0.55rem;border:1px solid var(--hairline);"><strong>' + (enM ? "CSC / Essay Usage:" : "Ứng dụng viết HSK / CSC:") + '</strong> ' + esc(enM ? cm.usageContextEn : cm.usageContextVi) + '</div>' +
            (cm.grammarBreakdownVi ? (
              '  <details class="ed-details" style="font-size:0.77rem;">' +
              '    <summary style="cursor:pointer;font-weight:700;color:var(--jade-green);">' + (enM ? "Grammar Breakdown &amp; Model Essay Paragraph →" : "Phân tích Hư tự Cổ – Kim &amp; Đoạn văn Mẫu HSK 7–9 →") + '</summary>' +
              '    <div style="margin-top:0.35rem;display:grid;gap:0.3rem;padding:0.45rem 0.55rem;background:var(--bg-surface);border:1px solid var(--hairline);">' +
              '      <div><strong>' + (enM ? "Philology:" : "Ngữ pháp Văn ngôn:") + '</strong> ' + esc(enM ? (cm.grammarBreakdownEn || cm.grammarBreakdownVi) : cm.grammarBreakdownVi) + '</div>' +
              (cm.rhetoricalDeviceVi ? '<div><strong>' + (enM ? "Rhetorical Device:" : "Thủ pháp Tu từ &amp; Đối ngẫu:") + '</strong> ' + esc(enM ? (cm.rhetoricalDeviceEn || cm.rhetoricalDeviceVi) : cm.rhetoricalDeviceVi) + '</div>' : "") +
              (cm.hskEssayApplicationZh ? '<div class="hanzi" style="color:var(--ink-primary);">' + esc(cm.hskEssayApplicationZh) + ' ' + spk(cm.hskEssayApplicationZh) + '</div>' : "") +
              (cm.hskEssayApplicationVi ? '<div style="color:var(--jade-green);">' + esc(enM ? (cm.hskEssayApplicationEn || cm.hskEssayApplicationVi) : cm.hskEssayApplicationVi) + '</div>' : "") +
              '    </div>' +
              '  </details>'
            ) : "") +
            '</article>'
          );
        }).join("") +
        '  </div>'
      ) : "") +
      (tpl15.length ? (
        '  <h4 style="margin:0 0 0.55rem;">' + (enM ? (tpl15.length + " High-Register HSK 6–9 &amp; CSC Research Argument Templates") : (tpl15.length + " Khung Lập luận Học thuật HSK 6–9 &amp; Đề cương Thạc sĩ CSC")) + '</h4>' +
        '  <div class="grid grid-2" style="gap:0.75rem;max-height:480px;overflow:auto;">' +
        tpl15.map(function (tp, idx) {
          return (
            '<article class="card" style="padding:0.85rem 0.95rem;font-size:0.81rem;display:flex;flex-direction:column;gap:0.35rem;">' +
            renderV4Thumb(HSK_BRIEF_POOL[idx % HSK_BRIEF_POOL.length], enM ? tp.themeEn : tp.themeVi, true) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-jade">' + esc(enM ? tp.themeEn : tp.themeVi) + '</span><span>' + spk(tp.sampleParagraphZh) + ' ' + srsBtn(tp.structureZh, tp.pinyin, tp.themeVi, tp.viNote, tp.parallelEn) + '</span></div>' +
            '  <div class="hanzi" style="font-size:0.98rem;color:var(--imperial-red);font-weight:700;">' + esc(tp.structureZh) + '</div>' +
            '  <div class="pinyin text-xs">' + esc(tp.pinyin) + '</div>' +
            '  <div style="color:var(--jade-green);"><strong>Academic EN:</strong> ' + esc(tp.parallelEn) + '</div>' +
            '  <div class="callout-editorial" style="margin:0.2rem 0;padding:0.45rem 0.6rem;">' +
            '    <div class="hanzi" style="font-size:0.88rem;">' + esc(tp.sampleParagraphZh) + '</div>' +
            '    <div style="font-size:0.77rem;color:var(--text-secondary);margin-top:0.2rem;">' + esc(tp.sampleParagraphEn) + '</div>' +
            '  </div>' +
            (tp.connectorToolkitZh ? '<div style="font-size:0.76rem;color:var(--imperial-red);"><strong>Toolkit:</strong> <span class="hanzi">' + esc(tp.connectorToolkitZh) + '</span></div>' : "") +
            '  <div style="font-size:0.76rem;color:var(--text-muted);"><strong>' + (enM ? "Register Tip:" : "Lưu ý Văn phong:") + '</strong> ' + esc(enM ? (tp.commonPitfallEn || tp.viNote) : (tp.viNote + " " + (tp.commonPitfallVi || ""))) + '</div>' +
            '</article>'
          );
        }).join("") +
        '  </div>'
      ) : "") +
      '</div>'
    );
  }

  function renderV5WuxingCasebook(enM) {
    var cb = window.CCE_V5_WUXING_CASEBOOK || {};
    var baseCases = cb.historicalCases16 || [];
    var v6Cases = (window.CCE_V6_COSMOLOGY_VISUAL && window.CCE_V6_COSMOLOGY_VISUAL.cosmoCasebookAdditional12V6) || [];
    var cases = baseCases.concat(v6Cases);
    if (!cases.length) return "";
    var discObj = cb.epistemicDisclaimer || {};
    var wxImgs = [
      "assets/images/figures/sima-qian.jpg",
      "assets/images/prov_items/beijing/h0.jpg",
      "assets/images/prov_items/beijing/h1.jpg",
      "assets/images/prov_items/beijing/h2.jpg",
      "assets/images/prov_items/beijing/h3.jpg",
      "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
      "assets/images/prov_items/beijing/h4.jpg",
      "assets/images/museum/han-shipan.jpg"
    ];
    return (
      '<div id="cce-v5-wuxing-casebook" style="margin-top:1.45rem;padding-top:1rem;border-top:2px solid var(--hairline);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? (cases.length + " HISTORICAL CASE STUDIES: COSMOLOGY, ARCHITECTURE & CALENDRICAL SCIENCE · 阴阳五行思想史案例集") : (cases.length + " NGHIÊN CỨU ĐIỂN HÌNH LỊCH SỬ TƯ TƯỞNG ÂM DƯƠNG – NGŨ HÀNH (ĐÔNG Y · KIẾN TRÚC · LỊCH PHÁP)")) + '</div>' +
      (discObj.vi ? '<div class="epistemic-box critical" style="margin:0.45rem 0 0.9rem;font-size:0.8rem;">' + esc(enM ? (discObj.en || discObj.vi) : discObj.vi) + '</div>' : "") +
      '  <div class="grid grid-2" style="gap:0.85rem;max-height:580px;overflow:auto;">' +
      cases.map(function (c, idx) {
        var cTitle = enM ? (c.titleEn || c.titleVi) : c.titleVi;
        return (
          '<article class="card" style="padding:0.9rem 1rem;font-size:0.81rem;display:flex;flex-direction:column;gap:0.35rem;">' +
          renderV4Thumb(wxImgs[idx % wxImgs.length], cTitle, false) +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;">' +
          '    <span class="badge badge-jade">' + esc(c.domain) + ' · ' + esc(c.phaseFocus) + '</span>' +
          spk((c.primaryCitationZh || "").split("（")[0].slice(0, 60)) +
          '  </div>' +
          '  <h4 style="margin:0.15rem 0;font-size:0.98rem;">' + esc(cTitle) + '</h4>' +
          '  <div class="hanzi text-xs" style="color:var(--imperial-red);">' + esc(c.titleZh) + '</div>' +
          '  <div class="callout-editorial" style="margin:0.25rem 0;padding:0.45rem 0.65rem;">' +
          '    <div class="hanzi" style="font-size:0.88rem;">' + esc(c.primaryCitationZh) + '</div>' +
          (c.primaryCitationVi ? '<div style="font-size:0.77rem;color:var(--text-secondary);margin-top:0.2rem;">' + esc(enM ? c.primaryCitationEn : c.primaryCitationVi) + '</div>' : "") +
          '  </div>' +
          '  <p style="margin:0;color:var(--text-secondary);line-height:1.5;">' + esc(enM ? (c.historicalAnalysisEn || c.historicalAnalysisVi) : c.historicalAnalysisVi) + '</p>' +
          (c.crossSystemLinkVi ? (
            '  <details class="ed-details" style="font-size:0.78rem;margin-top:0.15rem;">' +
            '    <summary style="cursor:pointer;font-weight:700;color:var(--imperial-red);">' + (enM ? "Correlative Mechanism &amp; Cross-Domain / VN Link →" : "Cơ chế Tương quan Sinh–Khắc &amp; Giao thoa Văn hóa Việt Nam →") + '</summary>' +
            '    <div style="margin-top:0.35rem;display:grid;gap:0.3rem;padding:0.45rem 0.55rem;background:var(--bg-paper);border:1px solid var(--hairline);">' +
            (c.correlativeMechanismVi ? '<div><strong>' + (enM ? "Structural Logic:" : "Cấu trúc Quy luật:") + '</strong> ' + esc(enM ? c.correlativeMechanismEn : c.correlativeMechanismVi) + '</div>' : "") +
            (c.architecturalOrDailyManifestationVi ? '<div><strong>' + (enM ? "Architecture &amp; Cultural Expression (Non-Clinical):" : "Ứng dụng Kiến trúc &amp; Thực dưỡng Truyền thống (Phi lâm sàng):") + '</strong> ' + esc(enM ? (c.architecturalOrDailyManifestationEn || c.architecturalOrDailyManifestationVi) : c.architecturalOrDailyManifestationVi) + '</div>' : "") +
            '<div style="color:var(--jade-green);"><strong>' + (enM ? "Cross-Domain &amp; VN Link:" : "Liên kết Liên ngành &amp; Việt Nam:") + '</strong> ' + esc(enM ? (c.crossSystemLinkEn || c.crossSystemLinkVi) : c.crossSystemLinkVi) + '</div>' +
            '    </div>' +
            '  </details>'
          ) : "") +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</div>'
    );
  }

  function renderHub(enM) {
    var disc = window.CCE_V4_DISCIPLINES || {};
    var lit = window.CCE_LITERATURE_HSK_V4 || {};
    var sci = window.CCE_SCIENCE_TCM_FOOD_V4 || {};
    var vn = window.CCE_SINO_VIET_MODERN_V4 || {};
    var unesco = window.CCE_UNESCO_V4 || [];

    // Full Playbook Globals from the 6 imported packs
    var uRaw = window.CCE_V4_UNESCO || {};
    var litRaw = window.CCE_V4_LIT_ARTS || {};
    var sciRaw = window.CCE_V4_SCI_TEA || {};
    var svRaw = window.CCE_V4_SINOVIET_MOD || {};
    var pcRaw = window.CCE_V4_PERSONAL_CORE || {};

    var tabs = [
      { id: "hsk", vi: "Tác phẩm, 60 HSK 4–9 & Thi từ", en: "HSK 4–9, Classics & Poetry" },
      { id: "tcm-wuxing", vi: "Đông y & Âm Dương Ngũ Hành", en: "TCM & Yin–Yang–Wuxing" },
      { id: "study", vi: "Du học Trung Quốc (CSC/C9/UIBE)", en: "Study Abroad & Scholarships" },
      { id: "politics", vi: "Chính trị & Kinh tế Vĩ mô 2026", en: "Politics & Macro 2026" },
      { id: "culture-vn", vi: "Ẩm thực, Góc nhìn VN & 59 UNESCO", en: "Food, VN View & 59 UNESCO" }
    ];

    var body = "";

    // =========================================================================
    // TAB 1: HSK 4–9, Journey to the West / Red Chamber, Poems, Chengyu
    // =========================================================================
    if (st.tab === "hsk") {
      var mastery = pcRaw.hskClassicsMastery || {};
      var briefsAll = (lit.hskBriefs && lit.hskBriefs.length ? lit.hskBriefs : (pcRaw.hskCulturalBriefs60 || []));
      var poems = litRaw.poems24 || [];
      var chengyu = svRaw.chengyu100 || [];
      var phrases60 = svRaw.situationalPhrases60 || [];
      var operas = (litRaw.fiveOperas && litRaw.fiveOperas.traditions) || [];
      var scripts = (litRaw.calligraphyFiveScripts && litRaw.calligraphyFiveScripts.scripts) || [];

      var totalTemplatesCount = (((window.CCE_V5_HSK_ESSAYS || {}).hskArgumentTemplates15) || []).length + (((window.CCE_V6_LITERATURE_VISUAL || {}).hskEssayFrames30_Additional15) || []).length;
      var subBar = subPillsBar("hskSub", st.hskSub, [
        { id: "classics", lbl: enM ? "Journey to the West & Red Chamber + Canons" : "Tây Du Ký, Hồng Lâu Mộng & Tứ đại Danh tác" },
        { id: "essays-v5", lbl: enM ? ("20 Classical–Modern Pairs & " + totalTemplatesCount + " HSK 6–9 Templates") : ("20 Cặp Cổ văn ↔ Hiện đại & " + totalTemplatesCount + " Khung Nghị luận HSK 6–9") },
        { id: "briefs", lbl: enM ? ("60 HSK 4–9 Cultural Briefs (" + briefsAll.length + ")") : ("60 Đoạn đọc Văn hóa HSK 4–9 (" + briefsAll.length + ")") },
        { id: "poems", lbl: enM ? ("24 Tang–Song Poems (" + poems.length + ")") : ("24 Thi từ Đường–Tống (" + poems.length + ")") },
        { id: "chengyu", lbl: enM ? ("100 HSK Chengyu (" + chengyu.length + ")") : ("100 Thành ngữ Kinh điển (" + chengyu.length + ")") },
        { id: "phrases", lbl: enM ? ("60 Field Phrases & 5 Operas") : ("60 Mẫu câu Thực địa & Hý khúc") }
      ]);

      if (st.hskSub === "essays-v5") {
        body = subBar + renderV5HskEssays(enM);
      } else if (st.hskSub === "briefs") {
        var filteredBriefs = briefsAll.filter(function (b) {
          var lv = String(b.hsk || b.level || "").replace("HSK ", "");
          return st.hskLevel === "all" || lv === String(st.hskLevel);
        });
        body = subBar +
          '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
          '  <strong>' + (enM ? "Exam-Ready Cultural Reading Passages (HSK 4–9):" : "Đoạn đọc Chuyên đề Luyện thi HSK 4–9 (Kèm Pinyin & Câu hỏi Tự kiểm):") + '</strong>' +
          '  <div class="filter-bar" style="margin:0;">' +
          ["all", "4", "5", "6", "7-9"].map(function (lv) {
            return '<button type="button" class="filter-pill ' + (st.hskLevel === lv ? "active" : "") + '" data-v4h-act="hsk" data-val="' + lv + '" style="font-size:0.74rem;">' + (lv === "all" ? "All (" + briefsAll.length + ")" : "HSK " + lv) + '</button>';
          }).join("") +
          '  </div>' +
          '</div>' +
          '<div class="grid grid-2" style="gap:0.75rem;max-height:520px;overflow:auto;">' +
          filteredBriefs.map(function (b, idx) {
            var lvLbl = String(b.hsk || b.level || "HSK 5").indexOf("HSK") === 0 ? (b.hsk || b.level) : ("HSK " + b.hsk);
            var keyZh = b.keyTermZh || b.zh || "";
            var bTitle = enM ? (b.titleEn || b.hanViet) : (b.hanViet || b.titleVi || b.titleEn);
            return (
              '<article class="flashcard-layer" style="font-size:0.82rem;">' +
              renderV4Thumb(HSK_BRIEF_POOL[idx % HSK_BRIEF_POOL.length], bTitle, false) +
              '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
              '    <span><span class="badge badge-gold">' + esc(lvLbl) + '</span> <strong>' + esc(bTitle) + '</strong></span>' +
              '    <span>' + spk(b.passageZh || keyZh) + ' ' + srsBtn(keyZh || b.passageZh, b.passagePinyin || b.pinyin, b.hanViet || b.titleVi, b.summaryVi || b.vi, b.summaryEn || b.en) + '</span>' +
              '  </div>' +
              (b.passageZh ? '<p class="hanzi" style="margin:0.4rem 0 0.15rem;font-size:0.95rem;color:var(--ink-primary);">' + esc(b.passageZh) + '</p>' : "") +
              (b.passagePinyin || b.pinyin ? '<div class="pinyin text-xs" style="margin-bottom:0.3rem;">' + esc(b.passagePinyin || b.pinyin) + '</div>' : "") +
              '  <p style="margin:0 0 0.25rem;color:var(--text-secondary);">' + esc(enM ? (b.summaryEn || b.en) : (b.summaryVi || b.vi)) + '</p>' +
              (b.quizPromptVi || b.quizPromptEn ? '<div style="font-size:0.76rem;color:var(--jade-green);"><strong>' + (enM ? "Check:" : "Tự kiểm:") + '</strong> ' + esc(enM ? b.quizPromptEn : b.quizPromptVi) + (b.quizPromptZh ? ' (<span class="hanzi">' + esc(b.quizPromptZh) + '</span>)' : "") + '</div>' : "") +
              '</article>'
            );
          }).join("") +
          '</div>';
      } else if (st.hskSub === "poems") {
        body = subBar + '<div class="grid grid-2" style="gap:0.85rem;max-height:520px;overflow:auto;">' + poems.map(function (pm, idx) {
          var pmTitle = enM ? pm.titleEn : pm.titleVi;
          return (
            '<article class="card" style="padding:0.9rem 1rem;">' +
            renderV4Thumb(POEM_PAINTINGS_24[idx % POEM_PAINTINGS_24.length], pmTitle + " — " + pm.titleZh, false) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
            '    <span class="badge badge-gold">' + esc(pm.genre) + ' · ' + esc(pm.era) + '</span>' +
            '    <span>' + spk(pm.originalZh) + ' ' + srsBtn(pm.titleZh, pm.pinyin, pm.titleVi, pm.translationVi, pm.translationEn) + '</span>' +
            '  </div>' +
            '  <h4 style="margin:0.35rem 0 0.15rem;">' + esc(pmTitle) + ' — <span class="hanzi" style="color:var(--imperial-red);">' + esc(pm.titleZh) + '</span> (' + esc(pm.authorVi) + ')</h4>' +
            '  <div class="callout-editorial" style="margin:0.4rem 0;padding:0.55rem 0.75rem;white-space:pre-line;">' +
            '    <div class="hanzi" style="font-size:1rem;">' + esc(pm.originalZh) + '</div>' +
            '    <div class="pinyin text-xs" style="margin-top:0.2rem;">' + esc(pm.originalPinyin) + '</div>' +
            '    <div style="font-size:0.78rem;color:var(--imperial-red);margin-top:0.2rem;">' + esc(pm.hanVietLines) + '</div>' +
            '  </div>' +
            '  <p style="font-size:0.81rem;margin:0 0 0.3rem;white-space:pre-line;">' + esc(enM ? pm.translationEn : pm.translationVi) + '</p>' +
            '  <div style="font-size:0.77rem;color:var(--text-muted);">' + esc(enM ? pm.poeticsAnalysisEn : pm.poeticsAnalysisVi) + '</div>' +
            '</article>'
          );
        }).join("") + '</div>';
      } else if (st.hskSub === "chengyu") {
        body = subBar + '<div class="grid grid-3" style="gap:0.65rem;max-height:520px;overflow:auto;">' + chengyu.map(function (c, idx) {
          return (
            '<div class="flashcard-layer" style="font-size:0.8rem;">' +
            renderV4Thumb(CHENGYU_POOL[idx % CHENGYU_POOL.length], c.hanzi + " — " + c.hanViet, true) +
            '  <div style="display:flex;justify-content:space-between;align-items:center;"><span class="badge badge-outline">' + esc(c.category) + '</span>' + srsBtn(c.hanzi, c.pinyin, c.hanViet, c.meaningVi, c.meaningEn) + '</div>' +
            '  <strong class="hanzi" style="font-size:1.12rem;color:var(--imperial-red);">' + esc(c.hanzi) + '</strong> ' + spk(c.hanzi) + ' <span class="pinyin text-xs">' + esc(c.pinyin) + '</span>' +
            '  <div style="font-weight:700;margin-top:0.15rem;">' + esc(c.hanViet) + '</div>' +
            '  <div style="color:var(--text-secondary);">' + esc(enM ? c.meaningEn : c.meaningVi) + '</div>' +
            (c.usageExampleZh ? '<div style="margin-top:0.25rem;font-size:0.75rem;color:var(--jade-green);"><span class="hanzi">' + esc(c.usageExampleZh) + '</span></div>' : "") +
            '</div>'
          );
        }).join("") + '</div>';
      } else if (st.hskSub === "phrases") {
        body = subBar +
          '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1rem;max-height:360px;overflow:auto;">' +
          phrases60.map(function (p, idx) {
            return '<div class="flashcard-layer" style="font-size:0.81rem;">' + renderV4Thumb(PHRASE_POOL[idx % PHRASE_POOL.length], p.hanzi, true) + '<div style="display:flex;justify-content:space-between;"><span class="badge badge-jade">' + esc(p.context) + '</span><span>' + spk(p.hanzi) + ' ' + srsBtn(p.hanzi, p.pinyin, p.hanViet, p.vi, p.en) + '</span></div><strong class="hanzi" style="font-size:1rem;">' + esc(p.hanzi) + '</strong><div class="pinyin text-xs">' + esc(p.pinyin) + '</div><div><strong>' + esc(enM ? p.en : p.vi) + '</strong></div></div>';
          }).join("") +
          '</div>' +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "5 Classical Opera Traditions & 5 Calligraphy Scripts" : "5 Loại hình Hý khúc Truyền thống & 5 Thể chữ Thư pháp") + '</h4>' +
          '<div class="grid grid-2" style="gap:0.7rem;">' +
          operas.concat(scripts).map(function (it, idx) {
            var itImg = it.provinceId ? provVisual(it.provinceId, "heritage", idx, OPERA_SCRIPT_RELICS[idx % OPERA_SCRIPT_RELICS.length]) : OPERA_SCRIPT_RELICS[idx % OPERA_SCRIPT_RELICS.length];
            return '<div class="card" style="padding:0.75rem 0.9rem;font-size:0.81rem;">' + renderV4Thumb(itImg, enM ? it.nameEn : it.nameVi, false) + '<strong>' + esc(enM ? it.nameEn : it.nameVi) + ' (<span class="hanzi">' + esc(it.nameZh) + '</span>)</strong><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? (it.featuresEn || it.traitsEn) : (it.featuresVi || it.traitsVi)) + '</p></div>';
          }).join("") +
          '</div>';
      } else {
        var jttw = mastery.journeyToTheWest || {};
        var dorc = mastery.dreamOfRedChamber || {};
        var canons = lit.canons || [];
        var canonImgs = ["assets/images/literature/lit-mod-03.jpg", "assets/images/literature/lit-mod-04.jpg", "assets/images/literature/lit-mod-07.jpg", "assets/images/paintings/10_zhanhua_shinv_tu.jpg"];
        var novelIdiomImgs = ["assets/images/literature/lit-mod-05.jpg", "assets/images/literature/lit-mod-08.jpg", "assets/images/literature/lit-mod-09.jpg", "assets/images/literature/lit-mod-14.jpg", "assets/images/literature/lit-mod-16.jpg", "assets/images/figures/cao-xueqin.jpg"];
        var extraHtml = "";
        if (jttw.idioms12 || dorc.idioms12) {
          var cards24 = []
            .concat((jttw.idioms12 || []).map(function (x) { x._src = "Tây Du Ký"; return x; }))
            .concat((dorc.idioms12 || []).map(function (x) { x._src = "Hồng Lâu Mộng"; return x; }));
          extraHtml = (
            '<div class="grid grid-2" style="gap:0.85rem;margin-bottom:1rem;">' +
            '  <article class="card">' + renderV4Thumb("assets/images/editorial_v8/envoy-poetry-scroll.jpg", "Tây Du Ký · 西游记", false) + '<span class="badge badge-red">Tây Du Ký · 西游记</span><h4 style="margin:0.3rem 0;">' + esc(enM ? "Pilgrimage, Mind Cultivation & Three Teachings" : "Ẩn dụ Tu tâm Tam Giáo & Quản trị Đội ngũ") + '</h4><p style="font-size:0.82rem;margin:0 0 0.35rem;">' + esc(enM ? jttw.overviewEn : jttw.overviewVi) + '</p><p style="font-size:0.79rem;color:var(--text-secondary);margin:0;">' + esc(enM ? jttw.threeTeachingsSynthesisEn : jttw.threeTeachingsSynthesisVi) + '</p></article>' +
            '  <article class="card">' + renderV4Thumb("assets/images/literature/lit-mod-10.jpg", "Hồng Lâu Mộng · 红楼梦", false) + '<span class="badge badge-gold">Hồng Lâu Mộng · 红楼梦</span><h4 style="margin:0.3rem 0;">' + esc(enM ? "Lineage Economics & Tragic Aesthetics" : "Tứ đại Gia tộc, Kinh tế Trang viên & Mỹ học") + '</h4><p style="font-size:0.82rem;margin:0 0 0.35rem;">' + esc(enM ? dorc.overviewEn : dorc.overviewVi) + '</p><p style="font-size:0.79rem;color:var(--text-secondary);margin:0;">' + esc(enM ? dorc.fourClansArchitectureEn : dorc.fourClansArchitectureVi) + '</p></article>' +
            '</div>' +
            '<h4 style="margin:0 0 0.55rem;">' + (enM ? "24 Exam-Ready Literary Idioms & Phrases (With Context Examples)" : "24 Điển cố Từ vựng Văn học HSK 4–9 Trích từ Tây Du Ký & Hồng Lâu Mộng") + '</h4>' +
            '<div class="grid grid-3" style="gap:0.6rem;margin-bottom:1rem;max-height:380px;overflow:auto;">' +
            cards24.map(function (c, idx) {
              return '<div class="flashcard-layer" style="font-size:0.8rem;">' + renderV4Thumb(novelIdiomImgs[idx % novelIdiomImgs.length], c.hanzi, true) + '<div style="display:flex;justify-content:space-between;"><span class="badge badge-outline">' + esc(c._src + " · " + c.hskLevel) + '</span><span>' + spk(c.hanzi) + ' ' + srsBtn(c.hanzi, c.pinyin, c.vi, c.vi, c.en) + '</span></div><strong class="hanzi" style="font-size:1.08rem;color:var(--imperial-red);">' + esc(c.hanzi) + '</strong> <span class="pinyin text-xs">' + esc(c.pinyin) + '</span><div>' + esc(enM ? c.en : c.vi) + '</div><div style="font-size:0.74rem;color:var(--jade-green);margin-top:0.2rem;"><span class="hanzi">' + esc(c.exampleZh) + '</span></div></div>';
            }).join("") +
            '</div>'
          );
        }
        body = subBar + extraHtml +
          '<h4 style="margin:0 0 0.55rem;">' + (enM ? "Four Classic Masterpieces Overview (四大名著)" : "Tổng quan Tứ Đại Danh Tác Văn học Cổ điển (四大名著)") + '</h4>' +
          '<div class="grid grid-2" style="gap:0.75rem;">' +
          canons.map(function (c, idx) {
            return '<article class="card">' + renderV4Thumb(canonImgs[idx % canonImgs.length], enM ? c.titleEn : c.titleVi, false) + '<span class="badge badge-gold">' + esc(c.hskTag) + '</span><div class="card-title-zh" style="margin-top:0.35rem;">' + esc(c.zh) + ' ' + spk(c.zh) + '</div><h4 style="margin:0.15rem 0 0.4rem;">' + esc(enM ? c.titleEn : c.titleVi) + '</h4><p style="font-size:0.82rem;margin:0 0 0.35rem;">' + esc(enM ? c.coreThemeEn : c.coreThemeVi) + '</p><div style="font-size:0.77rem;color:var(--jade-green);">' + esc(c.hskVocabVi) + '</div></article>';
          }).join("") +
          '</div>' +
          renderV5HskEssays(enM) +
          (window.CCE_V6_STUDIOS && window.CCE_V6_STUDIOS.renderLiushuAndLiteratureStudio ? window.CCE_V6_STUDIOS.renderLiushuAndLiteratureStudio(enM) : "");
      }

    // =========================================================================
    // TAB 2: Yin–Yang & Wuxing Unifying Monograph + Non-Clinical TCM Study
    // =========================================================================
    } else if (st.tab === "tcm-wuxing") {
      var yw = disc.yinYangWuxing || {};
      var tcm = sci.tcmFoundations || {};
      var tcmDeep = pcRaw.tcmDeepStudy || {};
      var herbs = (sciRaw.tcmHeritageOverview && sciRaw.tcmHeritageOverview.culinaryHerbs12) || [];

      var totalCaseCount = (((window.CCE_V5_WUXING_CASEBOOK || {}).historicalCases16) || []).length + (((window.CCE_V6_COSMOLOGY_VISUAL || {}).cosmoCasebookAdditional12V6) || []).length;
      var wBar = subPillsBar("wuxingSub", st.wuxingSub, [
        { id: "matrix", lbl: enM ? ("Yin–Yang–Wuxing 5×4 Matrix & " + totalCaseCount + " Cases") : ("Ngữ pháp Gốc, Ma trận 5×4 & " + totalCaseCount + " Case") },
        { id: "casebook-v5", lbl: enM ? (totalCaseCount + " Historical Yin–Yang–Wuxing Case Studies") : (totalCaseCount + " Nghiên cứu Điển hình Âm Dương – Ngũ Hành") },
        { id: "constitutions", lbl: enM ? ("9 Constitutions & 12 Wellness Herbs") : ("9 Thể chất Đông y & 12 Vị Dược thiện") },
        { id: "ziwu", lbl: enM ? ("12 Ziwu Liuzhu Meridian Clock & 20 TCM Terms") : ("12 Canh giờ Tử Ngọ Lưu Chú & 20 Thuật ngữ Tam ngữ") }
      ]);

      var epistemicBox = '<div class="epistemic-box critical" style="margin-bottom:0.85rem;"><div class="epistemic-title">' + (enM ? "Strict Epistemological Boundary (Non-Clinical & Non-Predictive)" : "Khung Ranh giới Khoa học: Khảo cứu Văn hóa – Lịch sử (Không Lâm sàng & Không Tiên tri)") + '</div><p style="margin:0 0 0.35rem;font-size:0.84rem;">' + esc(enM ? yw.epistemicBannerEn : yw.epistemicBannerVi) + '</p><p style="margin:0;font-size:0.8rem;color:var(--text-secondary);">' + esc(enM ? tcm.disclaimerEn : tcm.disclaimerVi) + '</p></div>';

      if (st.wuxingSub === "casebook-v5") {
        body = epistemicBox + wBar + renderV5WuxingCasebook(enM) +
          (window.CCE_V6_STUDIOS && window.CCE_V6_STUDIOS.renderCosmologyVisualWheel ? window.CCE_V6_STUDIOS.renderCosmologyVisualWheel(enM) : "");
      } else if (st.wuxingSub === "constitutions") {
        var const9 = tcmDeep.constitutions9 || [];
        body = epistemicBox + wBar +
          '<div class="grid grid-3" style="gap:0.75rem;margin-bottom:1.1rem;">' +
          const9.map(function (ct, idx) {
            return '<div class="card" style="padding:0.8rem 0.9rem;font-size:0.81rem;">' + renderV4Thumb(TCM_POOL[idx % TCM_POOL.length], enM ? ct.enName : ct.viName, true) + '<div style="display:flex;justify-content:space-between;"><strong class="hanzi" style="color:var(--imperial-red);">' + esc(ct.zh) + '</strong>' + spk(ct.zh) + '</div><strong>' + esc(enM ? ct.enName : ct.viName) + '</strong> (' + esc(ct.pinyin) + ')<p style="margin:0.3rem 0;color:var(--text-secondary);">' + esc(enM ? ct.featuresEn : ct.featuresVi) + '</p><div style="color:var(--jade-green);font-size:0.77rem;"><strong>Thực dưỡng tham khảo:</strong> ' + esc(ct.foodSuggestionVi) + '</div></div>';
          }).join("") +
          '</div>' +
          (herbs.length ? '<h4 style="margin:0 0 0.55rem;">' + (enM ? "12 Culinary Herbs & Food–Medicine Continuity (药食同源)" : "12 Thảo mộc Dược thiện Cổ truyền (Dược Thực Đồng Nguyên)") + '</h4><div class="grid grid-4" style="gap:0.65rem;">' + herbs.map(function (h, idx) {
            var hImg = provVisual(h.provinceId || null, "dishes", idx, "assets/images/herbs/v7-herb-49.jpg");
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(hImg, h.zh + " · " + (enM ? h.en : h.vi), true) + '<strong class="hanzi">' + esc(h.zh) + '</strong> ' + spk(h.zh) + ' <span class="pinyin">' + esc(h.pinyin) + '</span><br><strong>' + esc(enM ? h.en : h.vi) + '</strong><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? h.effectEn : h.effectVi) + '</p></div>';
          }).join("") + '</div>' : "");
      } else if (st.wuxingSub === "ziwu") {
        var zw = tcmDeep.ziwuLiuzhu12 || [];
        var tcmTerms = tcmDeep.tcmTermsTrilingual20 || [];
        body = epistemicBox + wBar +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "Ziwu Liuzhu (12 Two-Hour Organ Clock)" : "Chu kỳ 12 Canh giờ Tử Ngọ Lưu Chú (子午流注)") + '</h4>' +
          '<div class="grid grid-4" style="gap:0.65rem;margin-bottom:1.1rem;">' +
          zw.map(function (z, idx) {
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(TCM_POOL[idx % TCM_POOL.length], z.branchVi + " · " + z.meridianZh, true) + '<span class="badge badge-outline">' + esc(z.hours) + '</span> <strong>' + esc(z.branchVi) + ' (' + esc(z.branchZh) + ')</strong><br><strong style="color:var(--imperial-red);">' + esc(enM ? z.meridianEn : z.meridianVi) + '</strong> <span class="hanzi text-xs">' + esc(z.meridianZh) + '</span><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? z.rhythmEn : z.rhythmVi) + '</p></div>';
          }).join("") +
          '</div>' +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "20 Trilingual Classical TCM & Wellness Terms" : "20 Thuật ngữ Đông y Cổ truyền Tam ngữ (ZH–EN–VI)") + '</h4>' +
          '<div class="grid grid-4" style="gap:0.6rem;">' +
          tcmTerms.map(function (tm, idx) {
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(TCM_POOL[(idx + 2) % TCM_POOL.length], tm.zh, true) + '<div style="display:flex;justify-content:space-between;"><strong class="hanzi">' + esc(tm.zh) + '</strong>' + srsBtn(tm.zh, tm.pinyin, tm.vi, tm.vi, tm.en) + '</div><div class="pinyin text-xs">' + esc(tm.pinyin) + '</div><strong>' + esc(enM ? tm.en : tm.vi) + '</strong></div>';
          }).join("") +
          '</div>';
      } else {
        var monoImgs = ["assets/images/editorial_v8/dunhuang-star-chart.jpg", "assets/images/editorial_v8/ancient-observatory-armillary.jpg", "assets/images/articles_v8/daoism-wudang-palace.jpg", "assets/images/articles/hero-metaphysics-systems.jpg"];
        var tcmClassicImgs = ["assets/images/herbs/v7-herb-51.jpg", "assets/images/herbs/v7-herb-55.jpg", "assets/images/museum/tiangong-kaiwu.jpg"];
        body = epistemicBox + wBar +
          '<div style="margin-bottom:0.9rem;display:flex;justify-content:flex-end;"><button type="button" class="btn btn-primary btn-sm" data-v4h-act="open-armillary-3d">' + (enM ? "Launch Interactive 3D Brass Armillary & Wuxing Disk →" : "Mở Mô hình 3D Hồn Thiên Nghi & Đĩa Âm Dương – Ngũ Hành →") + '</button></div>' +
          '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1.15rem;">' +
          (yw.monographs || []).map(function (m, idx) {
            return '<article class="card">' + renderV4Thumb(monoImgs[idx % monoImgs.length], enM ? m.titleEn : m.titleVi, false) + '<div class="card-title-zh">' + esc(m.zh) + '</div><h4 style="margin:0.2rem 0 0.4rem;">' + esc(enM ? m.titleEn : m.titleVi) + '</h4><p style="font-size:0.83rem;margin:0;color:var(--text-secondary);">' + esc(m.bodyVi) + '</p></article>';
          }).join("") +
          '</div>' +
          '<div class="academic-table-wrap mb-2"><table class="academic-table"><thead><tr><th>Ngũ Hành (Five Phase)</th><th>Đông y (中医)</th><th>Phong thủy (风水)</th><th>Bát Tự (八字)</th><th>Tử Vi Đẩu Số (紫微)</th></tr></thead><tbody>' +
          (yw.matrix5x4 || []).map(function (row) {
            return '<tr><td><strong>' + esc(row.phase) + '</strong></td><td>' + esc(row.tcm) + '</td><td>' + esc(row.fengshui) + '</td><td>' + esc(row.bazi) + '</td><td>' + esc(row.ziwei) + '</td></tr>';
          }).join("") +
          '</tbody></table></div>' +
          '<div class="grid grid-3" style="gap:0.75rem;">' +
          (tcm.classics || []).map(function (cl, idx) {
            return '<div class="flashcard-layer">' + renderV4Thumb(tcmClassicImgs[idx % tcmClassicImgs.length], cl.zh, true) + '<strong class="hanzi">' + esc(cl.zh) + '</strong><br><strong>' + esc(enM ? cl.en : cl.vi) + '</strong><p style="font-size:0.8rem;margin:0.3rem 0 0;">' + esc(enM ? cl.noteEn : cl.noteVi) + '</p></div>';
          }).join("") +
          '</div>' +
          renderV5WuxingCasebook(enM) +
          (window.CCE_V6_STUDIOS && window.CCE_V6_STUDIOS.renderCosmologyVisualWheel ? window.CCE_V6_STUDIOS.renderCosmologyVisualWheel(enM) : "");
      }

    // =========================================================================
    // TAB 3: Study Abroad CSC / C9 / UIBE / SUFE / BLCU / BUCM
    // =========================================================================
    } else if (st.tab === "study") {
      var stAb = disc.studyAbroad || {};
      var stRaw = pcRaw.studyAbroadRoadmap || {};
      var sBar = subPillsBar("studySub", st.studySub, [
        { id: "roadmap", lbl: enM ? "12-Month Timeline & 5 Scholarships" : "Lộ trình 12 Tháng & 5 Hệ Học bổng" },
        { id: "unis", lbl: enM ? ("12 Target Universities (UIBE/SUFE/C9/BUCM)") : ("12 Đại học Mục tiêu (UIBE/SUFE/BLCU/BUCM/C9)") },
        { id: "phrases", lbl: enM ? "45 Study Plan & Interview Expressions" : "45 Mẫu câu Study Plan & Phỏng vấn (ZH–EN–VI)" }
      ]);

      if (st.studySub === "unis") {
        var uList = stRaw.universities12 || stAb.universities || [];
        body = sBar + '<div class="grid grid-2" style="gap:0.75rem;max-height:520px;overflow:auto;">' + uList.map(function (u, idx) {
          var zh = u.nameZh || u.zh || "";
          var viName = u.nameVi || u.vi || "";
          var enName = u.nameEn || u.en || "";
          var uProv = u.provinceId || UNI_PROVINCE_HINTS[idx % UNI_PROVINCE_HINTS.length];
          var uImg = provVisual(uProv, "heritage", idx, STUDY_POOL[idx % STUDY_POOL.length]);
          return '<div class="flashcard-layer">' + renderV4Thumb(uImg, enM ? enName : viName, false) + '<span class="badge badge-gold">' + esc(u.tier || "") + '</span><div class="card-title-zh" style="margin-top:0.25rem;">' + esc(zh) + ' ' + spk(zh) + '</div><strong>' + esc(enM ? enName : viName) + '</strong><p style="font-size:0.81rem;margin:0.25rem 0;">' + esc(enM ? (u.bestMajorsEn || u.strengthEn) : (u.bestMajorsVi || u.strengthVi)) + '</p>' + (u.scholarshipTipVi ? '<div style="font-size:0.76rem;color:var(--jade-green);">' + esc(u.scholarshipTipVi) + '</div>' : "") + '</div>';
        }).join("") + '</div>';
      } else if (st.studySub === "phrases") {
        var spAll = stRaw.studyPlanAndInterview45 || [];
        var filteredSp = spAll.filter(function (x) { return st.spFilter === "all" || x.stage === st.spFilter; });
        body = sBar +
          '<div class="filter-bar" style="margin-bottom:0.75rem;">' +
          ["all", "study-plan", "interview", "graduation"].map(function (sg) {
            return '<button type="button" class="filter-pill ' + (st.spFilter === sg ? "active" : "") + '" data-v4h-act="sp" data-val="' + sg + '" style="font-size:0.74rem;">' + sg + '</button>';
          }).join("") +
          '</div>' +
          '<div class="grid grid-2" style="gap:0.65rem;max-height:480px;overflow:auto;">' +
          filteredSp.map(function (x, idx) {
            return '<div class="flashcard-layer" style="font-size:0.82rem;">' + renderV4Thumb(STUDY_POOL[idx % STUDY_POOL.length], x.zh, true) + '<div style="display:flex;justify-content:space-between;"><span class="badge badge-outline">' + esc(x.stage) + '</span><span>' + spk(x.zh) + ' ' + srsBtn(x.zh, x.pinyin, x.vi, x.vi, x.en) + '</span></div><div class="hanzi" style="font-size:1rem;color:var(--imperial-red);margin-top:0.2rem;">' + esc(x.zh) + '</div><div class="pinyin text-xs">' + esc(x.pinyin) + '</div><div><strong>EN:</strong> ' + esc(x.en) + '</div><div style="color:var(--text-secondary);"><strong>VI:</strong> ' + esc(x.vi) + '</div></div>';
          }).join("") +
          '</div>';
      } else {
        var timeline = stRaw.timeline12Months || [];
        body = sBar +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "5 Major Scholarship Channels" : "5 Hệ Học bổng Chính") + '</h4>' +
          '<div class="grid grid-3" style="gap:0.75rem;margin-bottom:1.1rem;">' +
          (stAb.scholarships || []).map(function (s, idx) {
            return '<div class="card">' + renderV4Thumb(STUDY_POOL[idx % STUDY_POOL.length], s.name, true) + '<span class="badge badge-jade">Scholarship</span><h4 style="margin:0.35rem 0;">' + esc(s.name) + '</h4><p style="font-size:0.81rem;margin:0;">' + esc(enM ? s.targetEn : s.targetVi) + '</p></div>';
          }).join("") +
          '</div>' +
          (timeline.length ? '<h4 style="margin:0 0 0.5rem;">' + (enM ? "12-Month Application Timeline (Sep → Sep)" : "Lộ trình 12 Tháng Chuẩn bị Hồ sơ (Tháng 9 Năm trước → Tháng 9 Nhập học)") + '</h4><div class="grid grid-3" style="gap:0.65rem;">' + timeline.map(function (m, idx) {
            return '<div class="flashcard-layer" style="font-size:0.8rem;">' + renderV4Thumb(STUDY_POOL[idx % STUDY_POOL.length], m.month, true) + '<span class="badge badge-gold">' + esc(m.month) + '</span><br><strong>' + esc(enM ? m.phaseEn : m.phaseVi) + '</strong><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? m.tasksEn : m.tasksVi) + '</p></div>';
          }).join("") + '</div>' : "") +
          (window.CCE_V6_STUDIOS && window.CCE_V6_STUDIOS.renderSinoVietAndCscStudio ? window.CCE_V6_STUDIOS.renderSinoVietAndCscStudio(enM) : "");
      }

    // =========================================================================
    // TAB 4: Politics & Macroeconomics 2026
    // =========================================================================
    } else if (st.tab === "politics") {
      var polG = pcRaw.chinaPoliticsGovernance || {};
      var gl = polG.glossaryTrilingual || [];
      var clusters4 = (svRaw.modernChina2026 && svRaw.modernChina2026.clusters4) || [];
      var pe = disc.politicsEcon2026 || [];
      var pBar = subPillsBar("polSub", st.polSub, [
        { id: "institutions", lbl: enM ? "Governance & 2026 Macro Pillars" : "Hệ thống Chính trị & Trụ cột Vĩ mô 2026" },
        { id: "glossary", lbl: enM ? ("30 Trilingual Politics Terms & 4 Megaclusters") : ("30 Thuật ngữ Chính trị Tam ngữ & 4 Cụm Đô thị") }
      ]);

      if (st.polSub === "glossary") {
        var clusterImgs = [
          "assets/images/urban/urban-07.jpg",
          "assets/images/urban/urban-13.jpg",
          "assets/images/urban/urban-12.jpg",
          "assets/images/urban/urban-10.jpg"
        ];
        body = pBar +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "4 Industrial Megaclusters (2026)" : "4 Đại Cụm Đô thị – Công nghiệp 2026") + '</h4>' +
          '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1.1rem;">' +
          clusters4.map(function (cl, idx) {
            return '<div class="card" style="padding:0.85rem;">' + renderV4Thumb(clusterImgs[idx % clusterImgs.length], enM ? cl.nameEn : cl.nameVi, false) + '<div class="card-title-zh">' + esc(cl.zh) + ' ' + spk(cl.zh) + '</div><strong>' + esc(enM ? cl.nameEn : cl.nameVi) + '</strong><p style="font-size:0.81rem;margin:0.3rem 0 0;color:var(--text-secondary);">' + esc(enM ? cl.industryEn : cl.industryVi) + '</p></div>';
          }).join("") +
          '</div>' +
          '<h4 style="margin:0 0 0.5rem;">' + (enM ? "30 Trilingual Governance & Economic Terms" : "30 Thuật ngữ Chính trị – Kinh tế Vĩ mô Tam ngữ") + '</h4>' +
          '<div class="grid grid-3" style="gap:0.6rem;max-height:380px;overflow:auto;">' +
          gl.map(function (g, idx) {
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(POLITICS_POOL[idx % POLITICS_POOL.length], g.zh, true) + '<div style="display:flex;justify-content:space-between;"><strong class="hanzi">' + esc(g.zh) + '</strong>' + srsBtn(g.zh, g.pinyin, g.vi, g.vi, g.en) + '</div><div class="pinyin text-xs">' + esc(g.pinyin) + '</div><div><strong>' + esc(g.en) + '</strong><br><span style="color:var(--text-secondary);">' + esc(g.vi) + '</span></div></div>';
          }).join("") +
          '</div>';
      } else {
        body = pBar + '<div class="grid grid-2" style="gap:0.85rem;">' + pe.map(function (p, idx) {
          return '<article class="card">' + renderV4Thumb(POLITICS_POOL[idx % POLITICS_POOL.length], enM ? p.titleEn : p.titleVi, false) + '<div class="card-title-zh">' + esc(p.zh) + ' ' + spk(p.zh) + '</div><h4 style="margin:0.2rem 0 0.45rem;">' + esc(enM ? p.titleEn : p.titleVi) + '</h4><p style="font-size:0.84rem;margin:0;color:var(--text-secondary);">' + esc(enM ? p.summaryEn : p.summaryVi) + '</p></article>';
        }).join("") + '</div>';
      }

    // =========================================================================
    // TAB 5: Cuisines, VN Perspective, 59 UNESCO, Geology/Grottoes/Towns
    // =========================================================================
    } else {
      var vBar = subPillsBar("vnSub", st.vnSub, [
        { id: "vn", lbl: enM ? "Vietnamese View & 10 Sino–Viet Pillars" : "Góc nhìn Việt Nam & 10 Trụ cột Trung–Việt" },
        { id: "food", lbl: enM ? "Culinary Guide, 8 Cuisines, Night Markets & Tea" : "Ẩm thực, Gọi món Hợp Vị Việt, Chợ Đêm & Trà" },
        { id: "unesco", lbl: enM ? ("59 UNESCO Sites & 44 ICH") : ("59 Di sản UNESCO & 44 Phi vật thể") },
        { id: "places", lbl: enM ? "Geology, 4 Grottoes, 6 Towns & 16 Museums" : "Địa chất, 4 Thạch quật, 6 Cổ trấn & 16 Bảo tàng" }
      ]);

      if (st.vnSub === "food") {
        var foodG = pcRaw.vnTravelFoodGuide || {};
        var nm12 = sciRaw.nightMarkets12 || [];
        var teas10 = (sciRaw.teaEncyclopedia && sciRaw.teaEncyclopedia.tenFamousTeas) || [];
        var cuis = sci.eightCuisines || [];
        var cuisineProvs = ["prov-shandong", "prov-sichuan", "prov-guangdong", "prov-jiangsu", "prov-fujian", "prov-zhejiang", "prov-hunan", "prov-anhui"];
        var teaProvs = ["prov-zhejiang", "prov-jiangsu", "prov-anhui", "prov-henan", "prov-fujian", "prov-anhui", "prov-anhui", "prov-anhui", "prov-fujian", "prov-yunnan"];
        body = vBar +
          (foodG.palateComparisonVi ? '<div class="callout-editorial" style="margin-bottom:1rem;"><strong>' + (enM ? "Vietnamese Palate Adaptation in China:" : "Chiến lược Khẩu vị Cho Người Việt Khi Đi Trung Quốc:") + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(enM ? foodG.palateComparisonEn : foodG.palateComparisonVi) + '</p></div>' : "") +
          '<h4 style="margin:0 0 0.55rem;">' + (enM ? "Eight Great Chinese Culinary Traditions (八大菜系)" : "Ẩm thực Bát Đại Thái Hệ (八大菜系)") + '</h4>' +
          '<div class="grid grid-4" style="gap:0.65rem;margin-bottom:1.1rem;">' +
          cuis.map(function (c, idx) {
            var cImg = provVisual(c.provinceId || cuisineProvs[idx % cuisineProvs.length], "dishes", idx, "assets/images/articles/hero-chinese-cuisines.jpg");
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(cImg, enM ? c.en : c.vi, true) + '<strong class="hanzi" style="color:var(--imperial-red);">' + esc(c.zh) + '</strong> ' + spk(c.zh) + ' · <strong>' + esc(enM ? c.en : c.vi) + '</strong><br>' + esc(enM ? c.techEn : c.techVi) + '<br><span style="color:var(--jade-green);">' + esc(c.sigVi) + '</span></div>';
          }).join("") +
          '</div>' +
          '<div class="grid grid-2" style="gap:0.85rem;">' +
          '  <div><h4 style="margin:0 0 0.5rem;">12 Phố Ẩm thực Đêm Nổi bật</h4><div style="display:grid;gap:0.55rem;max-height:340px;overflow:auto;">' +
          nm12.map(function (n, idx) {
            var nmImg = provVisual(n.provinceId || null, "dishes", idx, "assets/images/editorial_v8/chinese-banquet-table.jpg");
            return '<div class="flashcard-layer" style="font-size:0.8rem;">' + renderV4Thumb(nmImg, enM ? n.nameEn : n.nameVi, true) + '<strong>' + esc(enM ? n.nameEn : n.nameVi) + ' (<span class="hanzi">' + esc(n.nameZh) + '</span>)</strong><br>' + esc(enM ? n.signatureFoodsEn : n.signatureFoodsVi) + '</div>';
          }).join("") +
          '  </div></div>' +
          '  <div><h4 style="margin:0 0 0.5rem;">Thập Đại Danh Trà (十大名茶)</h4><div style="display:grid;gap:0.55rem;max-height:340px;overflow:auto;">' +
          teas10.map(function (t, idx) {
            var tImg = t.provinceId ? provVisual(t.provinceId, "heritage", idx, "assets/images/gis/gi-eu-01.jpg") : provVisual(teaProvs[idx % teaProvs.length], "heritage", idx, "assets/images/gis/gi-eu-11.jpg");
            return '<div class="flashcard-layer" style="font-size:0.8rem;">' + renderV4Thumb(tImg, enM ? t.nameEn : t.nameVi, true) + '<strong style="color:var(--jade-green);">' + esc(enM ? t.nameEn : t.nameVi) + ' (<span class="hanzi">' + esc(t.nameZh) + '</span>)</strong> · ' + esc(t.category) + '<br>' + esc(t.originVi || "") + '</div>';
          }).join("") +
          '  </div></div>' +
          '</div>';
      } else if (st.vnSub === "unesco") {
        var ich44 = sciRaw.intangibleHeritage44 || [];
        body = vBar +
          '<h4 style="margin:0 0 0.55rem;">' + (enM ? (unesco.length + " UNESCO World Heritage Sites in China") : (unesco.length + " Di sản Thế giới UNESCO tại Trung Quốc")) + '</h4>' +
          '<div class="grid grid-3" style="gap:0.65rem;max-height:420px;overflow:auto;margin-bottom:1.1rem;">' +
          unesco.map(function (u, idx) {
            var uImg = provVisual(u.provinceId || null, "heritage", idx, "assets/images/expeditions/v7-exp-04.jpg");
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(uImg, enM ? u.en : u.vi, true) + '<span class="badge badge-outline">' + u.year + ' · ' + esc(u.kind) + '</span> <strong>' + esc(enM ? u.en : u.vi) + '</strong> (<span class="hanzi">' + esc(u.zh) + '</span>)<p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? u.noteEn : u.noteVi) + '</p></div>';
          }).join("") +
          '</div>' +
          (ich44.length ? '<h4 style="margin:0 0 0.5rem;">44 Di sản Văn hóa Phi vật thể UNESCO</h4><div class="grid grid-4" style="gap:0.55rem;max-height:260px;overflow:auto;">' + ich44.map(function (ic, idx) {
            var icImg = provVisual(ic.provinceId || null, "heritage", idx + 3, OPERA_SCRIPT_RELICS[idx % OPERA_SCRIPT_RELICS.length]);
            return '<div class="flashcard-layer" style="font-size:0.77rem;">' + renderV4Thumb(icImg, enM ? ic.nameEn : ic.nameVi, true) + '<span class="badge badge-jade">' + ic.year + '</span> <strong>' + esc(enM ? ic.nameEn : ic.nameVi) + '</strong><br><span class="hanzi">' + esc(ic.nameZh) + '</span></div>';
          }).join("") + '</div>' : "");
      } else if (st.vnSub === "places") {
        var geo = uRaw.geologyLandforms || [];
        var grot = uRaw.fourGrottoes || [];
        var towns = uRaw.ancientTowns || [];
        var mus16 = svRaw.top16Museums || [];
        body = vBar +
          '<div class="grid grid-2" style="gap:0.85rem;margin-bottom:1rem;">' +
          geo.concat(grot).map(function (it, idx) {
            var gImg = provVisual(it.provinceId || null, "heritage", idx, "assets/images/expeditions/v7-exp-08.jpg");
            return '<div class="card" style="padding:0.8rem;font-size:0.8rem;">' + renderV4Thumb(gImg, enM ? (it.titleEn || it.nameEn) : (it.titleVi || it.nameVi), false) + '<strong>' + esc(enM ? (it.titleEn || it.nameEn) : (it.titleVi || it.nameVi)) + ' (<span class="hanzi">' + esc(it.titleZh || it.nameZh) + '</span>)</strong><p style="margin:0.3rem 0 0;color:var(--text-secondary);">' + esc(enM ? (it.originEn || it.dynastyStyleEn) : (it.originVi || it.dynastyStyleVi)) + '</p></div>';
          }).join("") +
          '</div>' +
          '<div class="grid grid-3" style="gap:0.65rem;max-height:360px;overflow:auto;">' +
          towns.concat(mus16).map(function (m, idx) {
            var mImg = provVisual(m.provinceId || null, "heritage", idx, "assets/images/museum/taihe-dian.jpg");
            return '<div class="flashcard-layer" style="font-size:0.79rem;">' + renderV4Thumb(mImg, enM ? m.nameEn : m.nameVi, true) + '<strong style="color:var(--imperial-red);">' + esc(enM ? m.nameEn : m.nameVi) + '</strong> <span class="hanzi">' + esc(m.nameZh) + '</span><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? (m.architectureEn || m.signatureRelicEn) : (m.architectureVi || m.signatureRelicVi)) + '</p></div>';
          }).join("") +
          '</div>';
      } else {
        var persAll = pcRaw.vietnamPerspectiveOnChina || vn.perspectives || [];
        var pillars10 = svRaw.sinoViet10Pillars || [];
        var sinoVietImgs = [
          "assets/images/lessons/v7-m9-l6.jpg",
          "assets/images/lessons/v5-m6-l6.jpg",
          "assets/images/museum/chu-dau-ceramic.jpg",
          "assets/images/museum/ngoc-lu-bronze-drum.jpg",
          "assets/images/museum/ly-tran-celadon-lotus-jar.jpg",
          "assets/images/museum/daming-hunyitu.jpg"
        ];
        body = vBar +
          '<h4 style="margin:0 0 0.55rem;">' + (enM ? "Vietnamese Analytical Perspectives on China" : "Góc nhìn Phân tích Từ Việt Nam Về Trung Quốc") + '</h4>' +
          '<div class="grid grid-2" style="gap:0.75rem;margin-bottom:1.1rem;">' +
          persAll.map(function (p, idx) {
            return '<div class="card">' + renderV4Thumb(sinoVietImgs[idx % sinoVietImgs.length], enM ? p.titleEn : p.titleVi, false) + '<div class="card-title-zh">' + esc(p.zh || "") + '</div><strong>' + esc(enM ? p.titleEn : p.titleVi) + '</strong><p style="font-size:0.82rem;margin:0.3rem 0 0;color:var(--text-secondary);">' + esc(enM ? (p.analysisEn || p.summaryEn) : (p.analysisVi || p.summaryVi)) + '</p>' + (p.takeawayVi ? '<div style="font-size:0.77rem;color:var(--jade-green);margin-top:0.25rem;">' + esc(enM ? p.takeawayEn : p.takeawayVi) + '</div>' : "") + '</div>';
          }).join("") +
          '</div>' +
          (pillars10.length ? '<h4 style="margin:0 0 0.55rem;">10 Trụ cột Đối sánh Trung – Việt</h4><div class="grid grid-2" style="gap:0.7rem;max-height:360px;overflow:auto;">' + pillars10.map(function (pl, idx) {
            return '<div class="flashcard-layer" style="font-size:0.8rem;">' + renderV4Thumb(sinoVietImgs[idx % sinoVietImgs.length], enM ? pl.titleEn : pl.titleVi, true) + '<strong>' + esc(enM ? pl.titleEn : pl.titleVi) + '</strong> <span class="hanzi">' + esc(pl.hanziTheme || "") + '</span><p style="margin:0.25rem 0 0;color:var(--text-secondary);">' + esc(enM ? pl.synthesisEn : pl.synthesisVi) + '</p></div>';
          }).join("") + '</div>' : "");
      }
      if (window.CCE_V6_STUDIOS && window.CCE_V6_STUDIOS.renderWorldTourismAndMuseumStudio) {
        body += window.CCE_V6_STUDIOS.renderWorldTourismAndMuseumStudio(enM);
      }
    }

    return (
      '<section id="cce-v4-knowledge-hub" class="card mb-2" style="margin-top:2rem;border-top:3px solid var(--imperial-red);">' +
      '  <div class="section-header" style="margin-bottom:0.75rem;"><div><div class="editorial-kicker" style="color:var(--imperial-red);">' + (enM ? "INTERDISCIPLINARY RESEARCH &amp; HSK ACADEMY · 专题学术与实务研习中心" : "Học viện Chuyên sâu: HSK 4–9, Đông y – Ngũ Hành, Du học CSC &amp; Chính trị 2026 · 专题研习中心") + '</div><h2 class="section-title" style="font-size:1.55rem;margin:0.15rem 0 0;">' + (enM ? "Politics, HSK Classics, TCM &amp; Yin–Yang–Wuxing Monograph Hub" : "Trung tâm Nghiên cứu HSK Danh tác, Đông y – Ngũ Hành, Du học &amp; Văn hóa Ứng dụng") + '</h2></div></div>' +
      '  <div class="tabs-bar" style="margin-bottom:1rem;">' +
      tabs.map(function (t) {
        return '<button type="button" class="tab-btn ' + (st.tab === t.id ? "active" : "") + '" data-v4h-act="tab" data-val="' + t.id + '">' + (enM ? t.en : t.vi) + '</button>';
      }).join("") +
      '  </div>' + body +
      '</section>'
    );
  }

  function bind() {
    if (window._cceV4HubBound || typeof document === "undefined") return;
    window._cceV4HubBound = true;
    document.addEventListener("click", function (e) {
      var el = e.target && e.target.closest ? e.target.closest("[data-v4h-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v4h-act");
      if (act === "tab") st.tab = el.getAttribute("data-val") || "hsk";
      else if (act === "sub") st[el.getAttribute("data-key")] = el.getAttribute("data-val") || "";
      else if (act === "hsk") st.hskLevel = el.getAttribute("data-val") || "all";
      else if (act === "sp") st.spFilter = el.getAttribute("data-val") || "all";
      else if (act === "add-srs") {
        if (window.CCE_SRS && window.CCE_SRS.addCard) {
          window.CCE_SRS.addCard({
            id: "v4-" + el.getAttribute("data-zh"),
            hanzi: el.getAttribute("data-zh"),
            pinyin: el.getAttribute("data-py"),
            hanViet: el.getAttribute("data-hv"),
            meaningVi: el.getAttribute("data-vi"),
            meaningEn: el.getAttribute("data-en"),
            source: "HSK / Research Academy"
          });
          el.textContent = "Saved!";
        }
        return;
      } else if (act === "open-armillary-3d") {
        if (window.CCE_3D_HUB) window.CCE_3D_HUB.setStudio("armillary");
        var mBtn = document.querySelector('[data-action="nav"][data-page="museum"]');
        if (mBtn) mBtn.click();
        return;
      }
      if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
    });
  }
  bind();

  window.CCE_V4_HUB = {
    renderHub: renderHub,
    setActiveTab: function (t) { st.tab = t || "hsk"; }
  };
})();
