// ============================================================================
// CHINESE CULTURE EXPLORER — Cinematic 6-Scene Heritage Discovery Suite & Dock
// Scene 1: Scroll-Scrubbed Bilateral Imperial Brocade Parting Curtain ("Up Mo")
// Scene 2: Sunlit Amber Canvas, 3-Col Peek Filigree Carousel & Cloud-Sea Band
// Scene 3: Gold-Rail Antique 34-Province Scroll Map + Compass Rose + 2-Col Info
// Scene 4: Wide Filigree Museum Stage + 6 Circular Gold Medallions & 3.2x Zoom
// Scene 5: Edge-to-Edge 01..08 Vertical Strip Accordion ABOVE Display Lockup
// Scene 6: Carved Imperial Palace Archway + 6 Clickable Heritage Wing Emblems
// + Right-Edge Crimson-Gold Vertical Dock & Theme-Reactive Monograph Support
// Pure ES5 IIFE — Zero UI emojis, strict Light/Dark AAA contrast.
// ============================================================================
(function () {
  "use strict";

  var CORNER_SVG =
    '<svg viewBox="0 0 36 36" fill="none" stroke="currentColor" stroke-width="1.55" aria-hidden="true">' +
    '<path d="M2 28V2h26M7 22V7h15M12 16v-4h4M2 2l8 8"/>' +
    '</svg>';

  function filigreeCornersHtml() {
    return (
      '<span class="v10-filigree-corner is-tl">' + CORNER_SVG + '</span>' +
      '<span class="v10-filigree-corner is-tr">' + CORNER_SVG + '</span>' +
      '<span class="v10-filigree-corner is-bl">' + CORNER_SVG + '</span>' +
      '<span class="v10-filigree-corner is-br">' + CORNER_SVG + '</span>'
    );
  }

  var SPOTLIGHT_META = {
    "qianli-jiangshan": { img: "assets/images/paintings/22_qianli_jiangshan.jpg", titleVi: "Thiên Lý Giang Sơn Đồ", titleEn: "A Thousand Miles of Rivers and Mountains", zh: "千里江山图", action: "open-painting-detail", id: "qianli-jiangshan" },
    "qingming-shanghe": { img: "assets/images/paintings/21_qingming_shanghe.jpg", titleVi: "Thanh Minh Thượng Hà Đồ", titleEn: "Along the River During the Qingming Festival", zh: "清明上河图", action: "open-painting-detail", id: "qingming-shanghe" },
    "fuchun-shanju": { img: "assets/images/paintings/32_fuchun_shanju.jpg", titleVi: "Phú Xuân Sơn Cư Đồ", titleEn: "Dwelling in the Fuchun Mountains", zh: "富春山居图", action: "open-painting-detail", id: "fuchun-shanju" },
    "luoshenfu-tu": { img: "assets/images/paintings/01_luoshenfu_tu.jpg", titleVi: "Lạc Thần Phú Đồ", titleEn: "Nymph of the Luo River", zh: "洛神赋图", action: "open-painting-detail", id: "luoshenfu-tu" },
    "hanxizai-yeyan": { img: "assets/images/paintings/16_hanxizai_yeyan.jpg", titleVi: "Hàn Hy Tái Dạ Yến Đồ", titleEn: "Night Revels of Han Xizai", zh: "韩熙载夜宴图", action: "open-painting-detail", id: "hanxizai-yeyan" },
    "early-spring-guo-xi": { img: "assets/images/paintings/19_zao_chun_tu.jpg", titleVi: "Tảo Xuân Đồ", titleEn: "Early Spring", zh: "早春图", action: "open-painting-detail", id: "zao-chun-tu" },
    "travelers-among-mountains-fan-kuan": { img: "assets/images/paintings/18_xishan_xinglv.jpg", titleVi: "Khê Sơn Hành Lữ Đồ", titleEn: "Travelers Among Mountains and Streams", zh: "溪山行旅图", action: "open-painting-detail", id: "xishan-xinglv" },
    "auspicious-cranes-huizong": { img: "assets/images/paintings/23_rui_he_tu.jpg", titleVi: "Thụy Hạc Đồ", titleEn: "Auspicious Cranes", zh: "瑞鹤图", action: "open-painting-detail", id: "rui-he-tu" },
    "spring-outing-zhan-ziqian": { img: "assets/images/paintings/04_youchun_tu.jpg", titleVi: "Du Xuân Đồ", titleEn: "Strolling About in Spring", zh: "游春图", action: "open-painting-detail", id: "you-chun-tu" },
    "night-shining-white-han-gan": { img: "assets/images/paintings/56_zhaoye_bai_tu.jpg", titleVi: "Chiếu Dạ Bạch Đồ", titleEn: "Night-Shining White", zh: "照夜白图", action: "open-painting-detail", id: "zhaoye-bai-tu" },
    "houmuwu-ding": { img: "assets/images/museum/daxiguan-ding.jpg", titleVi: "Hậu Mẫu Mậu Đỉnh", titleEn: "Houmuwu Bronze Ding Cauldron", zh: "后母戊鼎", action: "open-artifact", id: "houmuwu-ding" },
    "ru-ware-narcissus-basin": { img: "assets/images/museum/ru-yao-tianqing.jpg", titleVi: "Chậu Thủy Tiên Gốm Nhữ Diêu", titleEn: "Ru Ware Narcissus Basin", zh: "汝窑青瓷水仙盆", action: "open-artifact", id: "ru-yao-tianqing" },
    "jadeite-cabbage": { img: "assets/images/museum/liangzhu-yucong.jpg", titleVi: "Ngọc Điêu Bảo Tàng", titleEn: "Imperial Jade Craftsmanship", zh: "玉雕珍品", action: "open-artifact", id: "liangzhu-yucong" },
    "flying-horse-gansu": { img: "assets/images/museum/ma-dap-phi-yen.jpg", titleVi: "Mã Đạp Phi Yến", titleEn: "Galloping Horse Treading on a Flying Swallow", zh: "马踏飞燕", action: "open-artifact", id: "ma-dap-phi-yen" },
    "sanxingdui-bronze-mask": { img: "assets/images/museum/sanxingdui-mask.jpg", titleVi: "Mặt Nạ Đồng Tam Tinh Đôi", titleEn: "Sanxingdui Bronze Mask", zh: "三星堆青铜纵目面具", action: "open-artifact", id: "sanxingdui-bronze-mask" }
  };

  var PEEK_STORIES = [
    {
      kickerVi: "LỊCH SỬ & HÀNH LANG TÂY VỰC",
      kickerEn: "SILK ROAD CORRIDOR",
      titleVi: "Âm hưởng Văn Hiến — Chạm vào Con Đường Tơ Lụa",
      titleEn: "Resonance of Civilization Along the Hexi Corridor",
      descVi: "Từ Trường An đến Đôn Hoàng, dòng chảy thương đội, gốm men, kinh điển Phật giáo và thiên văn đã kết nối Đông Á với thế giới suốt hai thiên niên kỷ.",
      descEn: "From Chang'an to Dunhuang, caravans carried silk, celadon, manuscripts, and astronomical instruments across Eurasia.",
      zhHeader: "丝绸之路 · 河西四郡 · 敦煌莫高窟",
      factsVi: [
        "Tuyến Hà Tây Tứ Quận (Vũ Uy – Trương Dịch – Tửu Tuyền – Đôn Hoàng) mở thông từ thời Hán Vũ Đế sau sứ trình Trương Khiên (138 TCN).",
        "Quần thể 492 hang Mạc Cao lưu giữ hơn 50.000 văn thư Tàng Kinh Động bằng chữ Hán, Tạng, Phạn, Hồi Hột và Sogdian."
      ],
      factsEn: [
        "The Hexi Corridor commanderies (Wuwei, Zhangye, Jiuquan, Dunhuang) anchored trans-Eurasian caravan trade from 138 BCE.",
        "Mogao's 492 caves preserved over 50,000 Library Cave manuscripts in Chinese, Tibetan, Sanskrit, and Sogdian."
      ],
      articleId: "northwest-silk-road-gansu-qinghai-xinjiang-guide",
      articleLabelVi: "Đọc chuyên luận Tơ Lụa Tây Bắc →",
      articleLabelEn: "Read Northwest Silk Road Monograph →",
      secondaryId: "uyghur-twelve-muqam-unesco-turpan-silk-road-oasis",
      secondaryLabelVi: "Ốc đảo Turpan & Mộc Tạp Mỗ ↗",
      secondaryLabelEn: "Turpan Oasis & Twelve Muqam ↗",
      img: "assets/images/articles/hero-silk-road.jpg",
      page: "history",
      sub: "dynasties"
    },
    {
      kickerVi: "TRUYỀN THỐNG THƯ VIỆN & KHẢO CỨU",
      kickerEn: "CLASSICAL ACADEMIES",
      titleVi: "Tứ Đại Thư Viện — Mạch Học Thuật Ngàn Năm",
      titleEn: "The Four Great Academies of Classical Learning",
      descVi: "Không gian tranh biện giữa Nhạc Lộc, Bạch Lộc Động và các học viện Tống–Minh nơi hình thành quy chuẩn bình chú kinh điển và khoa cử.",
      descEn: "Centers of Confucian-Daoist dialogue where annotation, woodblock printing, and examination scholarship matured.",
      zhHeader: "四大书院 · 白鹿洞书院揭示 · 鹅湖之会",
      factsVi: [
        "Nhạc Lộc (976), Bạch Lộc Động, Ứng Thiên và Tung Dương định hình truyền thống tự học, tàng thư khắc bản và giảng hội độc lập.",
        "Bạch Lộc Động Thư Viện Học Quy của Chu Hy và cuộc biện luận Nga Hồ (1175) với Lục Cửu Uyên đặt nền tảng giáo dục Đông Á."
      ],
      factsEn: [
        "Yuelu (976), White Deer Grotto, Yingtian, and Songyang pioneered private book printing and public philosophical debate.",
        "Zhu Xi's White Deer Grotto Precepts and the 1175 Goose Lake Debate shaped East Asian classical pedagogy."
      ],
      articleId: "four-great-academies-yuelu-bailudong-education",
      articleLabelVi: "Đọc chuyên luận Tứ Đại Thư Viện →",
      articleLabelEn: "Read Four Great Academies Monograph →",
      secondaryId: "imperial-academies-temple-of-literature",
      secondaryLabelVi: "Đối sánh Văn Miếu – Quốc Tử Giám ↗",
      secondaryLabelEn: "Compare Temple of Literature ↗",
      img: "assets/images/articles/hero-academy-shuyuan.jpg",
      page: "philosophy",
      sub: "classics"
    },
    {
      kickerVi: "CỔ TỊCH & VĂN PHÒNG TỨ BẢO",
      kickerEn: "PRINTING & LITERATI CRAFT",
      titleVi: "Khắc Bản Gỗ, Giấy Tuyên Thành & Mực Tùng Yên",
      titleEn: "Woodblock Editions, Xuan Paper & Pine Soot Ink",
      descVi: "Sự kết hợp giữa kỹ nghệ làm giấy Đan Dương–Kinh Huyện và in khắc bản thời Tống đã giữ nguyên vẹn kho thư tịch đến tận ngày nay.",
      descEn: "Craftsmanship of Xuan paper, Huizhou inksticks, and Song woodblock typography preserved textual memory across centuries.",
      zhHeader: "雕版印刷 · 金刚经(868) · 泾县宣纸与徽墨",
      factsVi: [
        "Kinh Kim Cương khắc năm Hàm Thông thứ 9 (868 SCN) là bản in mộc bản có niên đại xác thực cổ nhất thế giới còn lưu giữ.",
        "Giấy Tuyên Thành (Kinh Huyện, An Huy) làm từ vỏ cây Thanh Đàn qua 108 công đoạn kiềm hóa tự nhiên, kết hợp mực khói thông Huy Châu bền màu trên ngàn năm."
      ],
      factsEn: [
        "The 868 CE Diamond Sutra is the world's earliest dated complete woodblock-printed scroll.",
        "Jingxian Xuan paper (108 processing steps from wingceltis bark) paired with Huizhou pine-soot ink resists decay for over a millennium."
      ],
      articleId: "east-asian-woodblock-printing-encyclopedias",
      articleLabelVi: "Đọc chuyên luận Khắc Ván In Cổ →",
      articleLabelEn: "Read Woodblock Printing Monograph →",
      secondaryId: "four-treasures-of-the-scholar-study",
      secondaryLabelVi: "Văn Phòng Tứ Bảo: Tuyên Chỉ & Huy Mặc ↗",
      secondaryLabelEn: "Four Treasures: Xuan Paper & Huizhou Ink ↗",
      img: "assets/images/articles/hero-classical-books-scrolls.jpg",
      page: "explore",
      sub: "monographs"
    },
    {
      kickerVi: "KIẾN TRÚC GỖ ĐẤU CỦNG & TRỤC THẦN ĐẠO",
      kickerEn: "TIMBER ENGINEERING",
      titleVi: "Kết Cấu Không Đinh & Đối Sánh Cố Đô Đông Á",
      titleEn: "Interlocking Joinery Across East Asian Capitals",
      descVi: "Hệ mộng Đấu Củng giúp mái điện nghìn tấn chịu chấn động địa chất, gợi đối thoại sâu sắc từ Tử Cấm Thành tới Điện Thái Hòa Cố đô Huế.",
      descEn: "Bracket complexes distribute monumental roof loads and link imperial Chinese carpentry with Hue's Citadel.",
      zhHeader: "营造法式(1103) · 材分八等 · 应县木塔",
      factsVi: [
        "Doanh Tạo Pháp Thức (Lý Giới, 1103) chuẩn hóa mô-đun gỗ Tài-Phân 8 bậc cho toàn bộ cung điện và tự viện triều Tống.",
        "Mộc Tháp Ứng Huyện (1056, cao 67,31m) ghép hoàn toàn bằng 54 kiểu mộng Đấu Củng không đinh sắt, đứng vững qua hơn 9 thế kỷ địa chấn."
      ],
      factsEn: [
        "Li Jie's Yingzao Fashi (1103) standardized modular Cai-Fen timber proportions into eight structural grades.",
        "Yingxian Timber Pagoda (1056, 67.31 m) uses 54 types of nail-free Dougong brackets to dissipate seismic energy."
      ],
      articleId: "yingzao-fashi-song-dynasty-timber-dougong-brackets",
      articleLabelVi: "Đọc chuyên luận Doanh Tạo Pháp Thức →",
      articleLabelEn: "Read Yingzao Fashi & Dougong Monograph →",
      secondaryId: "comparative-timber-architecture-dougong",
      secondaryLabelVi: "Đối sánh Đấu Củng & Đình Làng Việt ↗",
      secondaryLabelEn: "Compare Dougong & Vietnamese Carpentry ↗",
      img: "assets/images/articles/hero-traditional-arch.jpg",
      page: "museum",
      sub: "studio3d"
    },
    {
      kickerVi: "ĐỐI CHIẾU VĂN HIẾN VIỆT – TRUNG",
      kickerEn: "SINO-VIETNAMESE DIALOGUE",
      titleVi: "Sứ Trình Bắc Sứ & Kho Tàng Chữ Hán–Nôm",
      titleEn: "Diplomatic Envoys & Han-Nom Archival Heritage",
      descVi: "Theo chân các sứ thần Nguyễn Trãi, Lê Quý Đôn, Nguyễn Du qua thơ đi sứ và hệ âm đọc Hán–Việt cổ lưu giữ âm vận Trung cổ.",
      descEn: "Trace scholarly exchanges between Vietnam and China through envoy poetry, architectural parallels, and historical phonology.",
      zhHeader: "使程诗 · 北行杂录(1813) · 汉越古音层",
      factsVi: [
        "Tập Bắc Hành Tạp Lục (131 bài thơ chữ Hán, 1813–1814) của Nguyễn Du ghi chép hành trình sứ bộ từ Nam Quan qua Quế Lâm, Hồ Nam tới Yên Kinh.",
        "Hệ âm đọc Hán–Việt bảo lưu nguyên vẹn phụ âm cuối nhập thanh (-p, -t, -k) của tiếng Hán trung đại thời Đường – Tống."
      ],
      factsEn: [
        "Nguyen Du's Bac Hanh Tap Luc (131 Classical Chinese poems, 1813–1814) chronicles the diplomatic route from Nam Quan to Beijing.",
        "Sino-Vietnamese readings preserve Middle Chinese entering-tone codas (-p, -t, -k) lost in modern Mandarin."
      ],
      articleId: "envoy-poetry-bac-hanh-tap-luc",
      articleLabelVi: "Đọc chuyên luận Thơ Văn Đi Sứ →",
      articleLabelEn: "Read Envoy Poetry Monograph →",
      secondaryId: "han-viet-phonology-middle-chinese",
      secondaryLabelVi: "Âm đọc Hán–Việt & Thiết Vận ↗",
      secondaryLabelEn: "Sino-Vietnamese Phonology ↗",
      img: "assets/images/articles/hero-sino-vietnam.jpg",
      page: "sino-vietnam",
      sub: "phonology"
    }
  ];

  var ATLAS_PINS = [
    { code: "BJ", geoId: "prov-beijing", mapLabel: "Bắc Kinh", dx: 13, dy: 4, anchor: "start", labelVi: "Bắc Kinh", titleZh: "北京", pageId: "prov-beijing", descVi: "Tử Cấm Thành, Thiên Đàn, Đồng Nhân Đường (1669) & ga Nam–Tây cao tốc 12306." },
    { code: "SN", geoId: "prov-shaanxi", mapLabel: "Tây An", dx: -12, dy: 4, anchor: "end", labelVi: "Tây An (Thiểm Tây)", titleZh: "陕西 · 西安", pageId: "prov-shaanxi", descVi: "Cố đô Trường An (Chu–Tần–Hán–Đường), Binh Mã Dũng & Bảo tàng Lịch sử Thiểm Tây." },
    { code: "HA", geoId: "prov-henan", mapLabel: "Lạc Dương", dx: 12, dy: -4, anchor: "start", labelVi: "Lạc Dương / Khai Phong", titleZh: "河南 · 洛阳", pageId: "prov-henan", descVi: "Cái nôi Ân Khư Giáp cốt, hang đá Long Môn và Biện Kinh thời Bắc Tống." },
    { code: "ZJ", geoId: "prov-zhejiang", mapLabel: "Hàng Châu", dx: 12, dy: 8, anchor: "start", labelVi: "Hàng Châu (Chiết Giang)", titleZh: "浙江 · 杭州", pageId: "prov-zhejiang", descVi: "Kinh đô Nam Tống Lâm An, trà Long Tỉnh, Hồ Khánh Dư Đường (1874) & Lương Chử." },
    { code: "JS", geoId: "prov-jiangsu", mapLabel: "Tô Châu", dx: 12, dy: -6, anchor: "start", labelVi: "Tô Châu / Nam Kinh", titleZh: "江苏 · 苏州", pageId: "prov-jiangsu", descVi: "Viên lâm Tô Châu, Côn Khúc, tơ lụa Vân Cẩm và 400 năm nghề khắc in Kim Lăng." },
    { code: "SC", geoId: "prov-sichuan", mapLabel: "Thành Đô", dx: -12, dy: 4, anchor: "end", labelVi: "Thành Đô (Tứ Xuyên)", titleZh: "四川 · 成都", pageId: "prov-sichuan", descVi: "Tam Tinh Đôi, công trình thủy lợi Đô Giang Yển 2.270 năm & văn hóa trà quán Thục." },
    { code: "GD", geoId: "prov-guangdong", mapLabel: "Quảng Châu", dx: 12, dy: 6, anchor: "start", labelVi: "Quảng Châu (Quảng Đông)", titleZh: "广东 · 广州", pageId: "prov-guangdong", descVi: "Cảng thị Con đường Tơ lụa trên biển, Trần Lý Tế (1600) & Canton Fair." },
    { code: "GX", geoId: "prov-guangxi", mapLabel: "Quế Lâm", dx: -12, dy: 4, anchor: "end", labelVi: "Quế Lâm / Nam Ninh", titleZh: "广西 · 桂林", pageId: "prov-guangxi", descVi: "Cửa ngõ liên vận Việt–Trung Hữu Nghị Quan – Bằng Tường & núi sông Ly Giang." }
  ];

  var CHAPTER_IMAGES = {
    "hexi-corridor-silk-road": "assets/images/articles/hero-silk-road.jpg",
    "song-four-great-academies": "assets/images/articles/hero-academy-shuyuan.jpg",
    "woodblock-868-xuan-paper-four-treasures": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "yingzao-fashi-dougong-timber-joinery": "assets/images/articles/hero-traditional-arch.jpg",
    "bac-hanh-tap-luc-han-viet-phonology": "assets/images/articles/hero-sino-vietnam.jpg",
    "jingdezhen-blue-white-chu-dau-bat-trang": "assets/images/museum/chu-dau-ceramic.jpg",
    "dujiangyan-irrigation-grand-canal": "assets/images/academic/guilin-li-river.jpg",
    "astronomy-zhang-heng-su-song-24-solar-terms": "assets/images/articles/hero-four-inventions.jpg",
    "bayin-zeng-hou-yi-bianzhong-muqam": "assets/images/museum/zeng-hou-yi-bells.jpg",
    "bencao-gangmu-historic-pharmacies": "assets/images/brands/tongrentang.jpg",
    "suzhou-classical-gardens-borrowed-scenery": "assets/images/articles_v8/b26-suzhou-gardens.jpg",
    "nanjing-yunjin-brocade-east-asian-silk": "assets/images/articles/hero-silk-embroidery-hanfu.jpg"
  };

  function trimPeekDesc(txt, maxLen) {
    var s = String(txt || "").trim();
    if (s.length <= maxLen) return s;
    var cut = s.slice(0, maxLen);
    var dot = Math.max(cut.lastIndexOf(". "), cut.lastIndexOf("。"));
    if (dot >= 120) return cut.slice(0, dot + 1).trim();
    return cut.replace(/\s+\S*$/, "") + "…";
  }

  function getPeekStories() {
    var v12 = window.CCE_V12_CURATED_CHAPTERS;
    if (Array.isArray(v12) && v12.length) {
      return v12.map(function (c, i) {
        var tr = c.targetRoute || {};
        return {
          id: c.id,
          kickerVi: c.kickerVi || "",
          kickerEn: c.kickerEn || "",
          titleVi: c.titleVi || "",
          titleEn: c.titleEn || "",
          descVi: trimPeekDesc(c.summaryVi || "", 240),
          descEn: trimPeekDesc(c.summaryEn || "", 240),
          zhHeader: c.zhHeader || "",
          articleId: c.linkedMonographId || "",
          page: tr.page || "explore",
          sub: tr.sub || "monographs",
          img: CHAPTER_IMAGES[c.id] || PEEK_STORIES[i % PEEK_STORIES.length].img
        };
      });
    }
    return PEEK_STORIES;
  }

  function getMergedSpotData() {
    var d = getV10();
    var out = {};
    var zs = d.zoomStage15 || {};
    var hs = window.CCE_V12_HOTSPOTS;
    var k;
    for (k in zs) {
      if (Object.prototype.hasOwnProperty.call(zs, k)) out[k] = zs[k];
    }
    if (hs) {
      var arr = (hs.paintings15 || []).concat(hs.treasures15 || []);
      for (var i = 0; i < arr.length; i++) {
        var it = arr[i];
        if (!it || !it.slug) continue;
        if (!out[it.slug]) out[it.slug] = it;
        else {
          out[it.slug] = {
            tombstone: it.tombstone || out[it.slug].tombstone,
            zoomHotspots: (Array.isArray(it.zoomHotspots) && it.zoomHotspots.length) ? it.zoomHotspots : out[it.slug].zoomHotspots,
            mineralPigmentsOrAlloy: it.mineralPigmentsOrAlloy || "",
            sealsAndInscriptions: it.sealsAndInscriptions || "",
            threeStepLookVi: it.threeStepLookVi || null,
            threeStepLookEn: it.threeStepLookEn || null
          };
        }
      }
    }
    return out;
  }

  var ZOOM_STEPS = [1.0, 1.6, 2.4, 3.2];
  var st = {
    peekIdx: 0,
    accIdx: 0,
    spotIdx: -1,
    zoomIdx: 0,
    panX: 0,
    panY: 0,
    hotspotIdx: 0,
    solarIdx: -1,
    atlasPinIdx: 0,
    syncIdx: 8,
    hanNomIdx: 0,
    hskIdx: 0,
    grammarPage: 0,
    curtainForcedOpen: false,
    bound: false,
    rafId: 0
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

  function clamp01(v) {
    return v < 0 ? 0 : (v > 1 ? 1 : v);
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
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
      "/chuyen-luan": { page: "explore", sub: "monographs" },
      "/tinh-thanh": { page: "regions", sub: "cities16" },
      "/kinh-doanh": { page: "business", sub: "laozihao" },
      "/lich-su": { page: "history", sub: "dynasties" },
      "/triet-hoc": { page: "philosophy", sub: "schools" },
      "/trung-viet": { page: "sino-vietnam", sub: "exchange" }
    };
    return (
      '<div class="v10-branch-pills">' +
      pills.slice(0, 2).map(function (pl) {
        var lbl = enM ? (pl.labelEn || pl.labelVi) : pl.labelVi;
        if (pl.targetAction && pl.targetId) {
          return (
            '<button type="button" class="v10-branch-pill" data-action="' + esc(pl.targetAction) + '" data-id="' + esc(pl.targetId) + '">' +
            '  <span>' + esc(lbl) + '</span><span aria-hidden="true">→</span>' +
            '</button>'
          );
        }
        var r = routeMap[pl.targetRoute] || { page: "explore", sub: "" };
        return (
          '<button type="button" class="v10-branch-pill" data-v10-go-page="' + esc(r.page) + '" data-v10-go-sub="' + esc(r.sub) + '">' +
          '  <span>' + esc(lbl) + '</span><span aria-hidden="true">→</span>' +
          '</button>'
        );
      }).join("") +
      '</div>'
    );
  }

  /* ==========================================================================
   * SCENE 1: Scroll-Scrubbed Bilateral Silk-Brocade Parting Curtain ("Up Mo")
   * ========================================================================== */
  function renderBrocadeCurtainHero(enM) {
    var totalEssays = Math.max(330, (window.CCE_V104_MANIFEST && window.CCE_V104_MANIFEST.totalMonographs) ||
      (window.CCE_ARTICLES ? window.CCE_ARTICLES.length : 330));
    var totalArtifacts = Math.max(199, (window.CCE_MUSEUM && window.CCE_MUSEUM.artifacts && window.CCE_MUSEUM.artifacts.length) || 199);
    var totalPaintings = Math.max(72, (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces && window.CCE_PAINTINGS.masterpieces.length) || 72);

    var reduceMotion = false;
    try {
      reduceMotion = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    } catch (_e) {}
    var initialOpen = (reduceMotion || st.curtainForcedOpen) ? 1 : 0;
    var initialP = initialOpen ? 0.86 : 0;

    return (
      '<section class="v10-curtain-runway' + (initialOpen ? " is-curtain-open" : "") + '" id="v10-brocade-curtain-hero" style="--curtain-p:' + initialP + ';--curtain-open:' + initialOpen + ';" aria-label="' + (enM ? "Imperial Brocade Reveal Hero" : "Trình diễn vén màn gấm văn hiến") + '">' +
      '  <div class="v10-curtain-sticky-stage">' +
      '    <div class="v10-curtain-panorama">' +
      '      <img src="assets/images/brand/forbidden-city-hero-clean.jpg" alt="' + (enM ? "Panoramic Forbidden City bathed in golden sunlight" : "Toàn cảnh Cố Cung Bắc Kinh nhìn từ đồi Cảnh Sơn trong ánh hoàng kim") + '" loading="eager" decoding="async" />' +
      '      <div class="v10-curtain-panorama-atmos"></div>' +
      '    </div>' +
      '    <div class="v10-curtain-reveal-lockup">' +
      '      <div class="v10-curtain-kicker">' + (enM ? "MONUMENTAL EAST ASIAN ARCHIVE · 中国文化探索" : "BIỂU TƯỢNG VĂN HIẾN ĐÔNG Á · 中国文化探索") + '</div>' +
      '      <h1 class="v10-curtain-title">' + (enM ? "FIVE MILLENNIA OF HERITAGE" : "TINH HOA NGÀN NĂM") + '</h1>' +
      '      <p class="v10-curtain-lead">' +
      (enM
        ? ("An independent bilingual archive uniting " + totalEssays + " scholarly monographs, " + totalArtifacts + " museum treasures, " + totalPaintings + " master paintings, 110 3D models, and 34 provincial dossiers.")
        : ("Thư phòng song ngữ Hán – Việt quy tụ " + totalEssays + " chuyên luận khảo cứu, " + totalArtifacts + " quốc bảo bảo tàng, " + totalPaintings + " kiệt tác quốc họa, 110 mô hình 3D và địa văn hóa 34 tỉnh thành.")) +
      '      </p>' +
      '      <div class="v10-curtain-cta-row">' +
      '        <button type="button" class="v10-curtain-cta-primary" data-action="nav" data-page="explore">' + (enM ? ("Enter " + totalEssays + " Monographs →") : ("Mở " + totalEssays + " Chuyên Luận →")) + '</button>' +
      '        <button type="button" class="v10-curtain-cta-ghost" data-action="open-founder-message">' + (enM ? "Founder Charter" : "Lời ngỏ sáng lập") + '</button>' +
      '      </div>' +
      '    </div>' +
      '    <div class="v10-curtain-valance is-left" aria-hidden="true"></div>' +
      '    <div class="v10-curtain-valance is-right" aria-hidden="true"></div>' +
      '    <div class="v10-curtain-leaf is-left" aria-hidden="true"><span class="v10-curtain-hem"></span></div>' +
      '    <div class="v10-curtain-leaf is-right" aria-hidden="true"><span class="v10-curtain-hem"></span></div>' +
      '    <div class="v10-curtain-closed-overlay">' +
      '      <div class="v10-curtain-seal-card">' +
      '        <div class="v10-curtain-seal-mark" aria-hidden="true">中国文化</div>' +
      '        <div class="v10-curtain-seal-brand">CHINESE CULTURE EXPLORER</div>' +
      '        <p class="v10-curtain-seal-poetic">' +
      (enM
        ? "Part the imperial crimson brocade — step into five millennia of scholarship, calligraphy, porcelain, and East Asian geography."
        : "Cùng vén bức trướng gấm Vân Cẩm năm nghìn năm — bước vào cõi thư tịch, quốc họa, bảo vật và sơn thủy Đông Á.") +
      '        </p>' +
      '        <button type="button" class="v10-curtain-open-btn" data-v10-curtain-open="1">' +
      (enM ? "Part the Brocade Curtain ↓" : "Cuộn xuống hoặc nhấn để vén màn ↓") +
      '        </button>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  /* ==========================================================================
   * SCENE 2: Sunlit Golden Canvas + 3-Col Peek Filigree Carousel + Cloud-Sea
   * ========================================================================== */
  function pad2(n) { return n < 10 ? "0" + n : String(n); }

  function renderPeekStoryCarousel(enM) {
    var stories = getPeekStories();
    var idx = st.peekIdx % stories.length;
    var cur = stories[idx];
    var nxt = stories[(idx + 1) % stories.length];
    var ctaAttr = cur.articleId
      ? ('data-action="open-article" data-id="' + esc(cur.articleId) + '"')
      : ('data-v10-go-page="' + esc(cur.page || "explore") + '" data-v10-go-sub="' + esc(cur.sub || "monographs") + '"');
    var ctaLabel = cur.articleId
      ? (enM ? "Read monograph →" : "Đọc chuyên luận →")
      : (enM ? "Explore wing →" : "Mở chuyên khu →");

    return (
      '<section class="v10-gac-section v10-sunlit-stage" id="v10-peek-stories" aria-label="' + (enM ? "Curated Civilization Chapters" : "Hành lang văn hiến") + '">' +
      '  <div class="container">' +
      (window.CCE_COOKIES ? window.CCE_COOKIES.renderResumePill(enM) : "") +
      '    <header class="v10-centered-display-head">' +
      '      <div class="v10-tracked-kicker">' + (enM ? "HERITAGE CORRIDOR — STEP INTO" : "HÀNH LANG VĂN HIẾN — CHẠM VÀO") + '</div>' +
      '      <h2 class="v10-editorial-italic-title">' + (enM ? "Original East Asian Civilization" : "Trung Hoa Nguyên Bản") + '</h2>' +
      '    </header>' +
      '    <div class="v10-peek-grid">' +
      '      <div class="v10-peek-copy">' +
      '        <div class="v10-tracked-kicker" style="text-align:left;">' + esc(enM ? cur.kickerEn : cur.kickerVi) + '</div>' +
      '        <h3 class="v10-peek-heading">' + esc(enM ? cur.titleEn : cur.titleVi) + '</h3>' +
      '        <div class="v10-peek-zh-line">' + esc(cur.zhHeader || "") + '</div>' +
      '        <p class="v10-peek-prose">' + esc(enM ? cur.descEn : cur.descVi) + '</p>' +
      '        <div class="v10-peek-cta-bar">' +
      '          <button type="button" class="v10-crimson-link-btn" ' + ctaAttr + '>' + ctaLabel + '</button>' +
      '        </div>' +
      '      </div>' +
      '      <div class="v10-peek-track">' +
      '        <div class="v10-peek-main-col">' +
      '          <div class="v10-peek-main">' +
      filigreeCornersHtml() +
      '            <img src="' + esc(cur.img) + '" alt="' + esc(enM ? cur.titleEn : cur.titleVi) + '" loading="eager" decoding="async" ' + ctaAttr + ' style="cursor:pointer;" />' +
      '            <button type="button" class="v10-peek-arrow is-prev" data-v10-peek-step="-1" aria-label="' + (enM ? "Previous story" : "Chủ đề trước") + '">←</button>' +
      '            <button type="button" class="v10-peek-arrow is-next" data-v10-peek-step="1" aria-label="' + (enM ? "Next story" : "Chủ đề tiếp") + '">→</button>' +
      '            <div class="v10-peek-main-caption">' +
      '              <span class="hanzi" style="font-size:0.88rem;color:#F3EDE0;letter-spacing:0.04em;">' + esc(cur.zhHeader || "") + '</span>' +
      '              <span style="font-family:var(--font-mono);font-size:0.75rem;color:#F2CA72;">' + pad2(idx + 1) + ' / ' + pad2(stories.length) + '</span>' +
      '            </div>' +
      '          </div>' +
      '          <div class="v10-peek-dots" role="tablist" aria-label="Story dots">' +
      stories.map(function (_s, di) {
        return '<button type="button" class="v10-peek-dot ' + (di === idx ? "is-active" : "") + '" data-v10-peek-dot="' + di + '" aria-label="Story ' + (di + 1) + '"></button>';
      }).join("") +
      '          </div>' +
      '        </div>' +
      '        <button type="button" class="v10-peek-next" data-v10-peek-step="1" aria-label="' + (enM ? "Preview next story" : "Xem tiếp chủ đề sau") + '">' +
      filigreeCornersHtml() +
      '          <img src="' + esc(nxt.img) + '" alt="' + esc(enM ? nxt.titleEn : nxt.titleVi) + '" loading="lazy" decoding="async" />' +
      '        </button>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '  <div class="v10-manifesto-band">' +
      '    <div class="container">' +
      '      <h2 class="v10-dual-serif-display">' +
      '        <span>' + (enM ? "RESONANCE OF" : "ÂM HƯỞNG") + ' <em>' + (enM ? "Heritage" : "Di Sản") + '</em></span>' +
      '        <span>' + (enM ? "SPIRIT OF" : "PHONG VỊ") + ' <em>' + (enM ? "Millennia" : "Ngàn Năm") + '</em></span>' +
      '      </h2>' +
      '      <p class="v10-manifesto-prose">' +
      (enM
        ? "Each dynasty left its imprint across kiln glazes, bronze inscriptions, wooden joinery, and classical commentary. Chinese Culture Explorer curates primary sources, bilingual terminology, and Sino–Vietnamese dialogue under transparent archival rigor."
        : "Mỗi triều đại để lại dấu ấn trên men gốm, minh văn đồng thanh, kết cấu Đấu Củng và dòng bình chú kinh điển. Kho lưu trữ đối chiếu Hán – Việt giúp bạn đọc tiếp cận tư liệu gốc, bảo vật và địa chí một cách hệ thống.") +
      '      </p>' +
      '    </div>' +
      '  </div>' +
      '  <div class="v10-cloudsea-horizon" aria-hidden="true">' +
      '    <img src="assets/images/provinces/anhui-huangshan-cloudsea.jpg" alt="" loading="lazy" decoding="async" />' +
      '    <div class="v10-cloudsea-mask-top"></div>' +
      '    <div class="v10-cloudsea-mask-bottom"></div>' +
      '  </div>' +
      '</section>'
    );
  }

  /* ==========================================================================
   * SCENE 3: Gold-Rail Illustrated 34-Province Scroll Map + Compass + 2-Col Info
   * ========================================================================== */
  function renderScrollAtlasPreview(enM) {
    var geo = window.CCE_CHINA_GEO || {};
    var geoKeys = Object.keys(geo);
    var activePin = ATLAS_PINS[st.atlasPinIdx % ATLAS_PINS.length] || ATLAS_PINS[0];

    var pathsHtml = geoKeys.map(function (gk) {
      var item = geo[gk];
      if (!item || !item.d) return "";
      var isSel = activePin.geoId === gk;
      return '<path d="' + item.d + '" fill="' + (isSel ? "#A34525" : "rgba(182, 134, 62, 0.34)") + '" stroke="#734E22" stroke-width="1.05" />';
    }).join("");

    var pinsHtml = ATLAS_PINS.map(function (pin, idx) {
      var coords = geo[pin.geoId];
      if (!coords) return "";
      var isSel = idx === (st.atlasPinIdx % ATLAS_PINS.length);
      var dx = typeof pin.dx === "number" ? pin.dx : 12;
      var dy = typeof pin.dy === "number" ? pin.dy : 4;
      return (
        '<g style="cursor:pointer;" data-v10-atlas-pin="' + idx + '">' +
        '  <circle cx="' + coords.cx + '" cy="' + coords.cy + '" r="' + (isSel ? 13 : 8) + '" fill="' + (isSel ? "#821C1C" : "#B87A2A") + '" stroke="#FFFDF6" stroke-width="2.2" />' +
        '  <text x="' + (coords.cx + dx) + '" y="' + (coords.cy + dy) + '" text-anchor="' + (pin.anchor || "start") + '" font-size="' + (isSel ? "16" : "13") + '" font-weight="' + (isSel ? "700" : "600") + '" fill="currentColor">' + esc(pin.mapLabel || pin.labelVi) + '</text>' +
        '</g>'
      );
    }).join("");

    return (
      '<section class="v10-gac-section v10-atlas-scroll-section" id="v10-scroll-atlas-preview" aria-label="' + (enM ? "Antique Heritage Atlas" : "Bản đồ địa văn hóa 34 tỉnh") + '">' +
      '  <div class="container">' +
      '    <header class="v10-centered-display-head" style="margin-bottom:1.15rem;">' +
      '      <div class="v10-tracked-kicker">' + (enM ? "GEOGRAPHIC CONVERGENCE · 34 PROVINCES" : "ĐỊA VĂN HÓA &amp; HÀNH TRÌNH THỰC ĐỊA · 34 TỈNH THÀNH") + '</div>' +
      '      <h2 class="v10-editorial-roman-title">' + (enM ? "Thirty-Four Provinces Across One Illustrated Scroll" : "Bản Đồ Cuộn Cổ 34 Tỉnh &amp; 16 Đô Thị Trục") + '</h2>' +
      '    </header>' +
      '    <div class="v10-scroll-rail-stage">' +
      '      <div class="v10-scroll-rod is-top" aria-hidden="true"></div>' +
      '      <div class="v10-scroll-parchment-canvas">' +
      filigreeCornersHtml() +
      '        <svg class="v10-compass-rose" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="1.35" aria-hidden="true">' +
      '          <circle cx="32" cy="32" r="24" stroke-dasharray="3 2"/>' +
      '          <circle cx="32" cy="32" r="14"/>' +
      '          <path d="M32 4l4 24 24 4-24 4-4 24-4-24L4 32l24-4z" fill="rgba(130,28,28,0.18)"/>' +
      '          <text x="32" y="13" text-anchor="middle" font-size="7" font-weight="700" fill="currentColor" stroke="none">北</text>' +
      '        </svg>' +
      (geoKeys.length ? (
        '        <svg viewBox="60 10 855 610" class="v10-scroll-geo-svg">' +
        pathsHtml + pinsHtml +
        '        </svg>'
      ) : (
        '        <div style="padding:2rem;text-align:center;">34 Provinces Interactive Atlas</div>'
      )) +
      '      </div>' +
      '      <div class="v10-scroll-rod is-bottom" aria-hidden="true"></div>' +
      '    </div>' +
      '    <div class="v10-atlas-two-col">' +
      '      <div class="v10-atlas-col">' +
      '        <div class="v10-tracked-kicker" style="text-align:left;margin-bottom:0.25rem;">' + esc(activePin.titleZh) + ' · ' + esc(activePin.code) + '</div>' +
      '        <h3 class="v10-atlas-col-title">' + esc(activePin.labelVi) + '</h3>' +
      '        <p style="margin:0 0 0.75rem;font-size:0.92rem;line-height:1.6;">' + esc(activePin.descVi) + '</p>' +
      '        <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">' +
      ATLAS_PINS.map(function (pin, idx) {
        return '<button type="button" class="filter-pill ' + (idx === (st.atlasPinIdx % ATLAS_PINS.length) ? "active" : "") + '" style="font-size:0.74rem;" data-v10-atlas-pin="' + idx + '">' + esc(pin.labelVi.split(" ")[0]) + (pin.labelVi.split(" ")[1] ? " " + esc(pin.labelVi.split(" ")[1]) : "") + '</button>';
      }).join("") +
      '        </div>' +
      '      </div>' +
      '      <div class="v10-atlas-col">' +
      '        <div class="v10-tracked-kicker" style="text-align:left;margin-bottom:0.25rem;">' + (enM ? "CORRIDORS & LOGISTICS 2026" : "MẠNG LƯỚI DI SẢN &amp; THỰC ĐỊA 12306") + '</div>' +
      '        <ul class="v10-atlas-bullets">' +
      '          <li>' + (enM ? "HSR 12306 station guides, Alipay/WeChat setup & 240h visa-free transit briefs." : "Chỉ dẫn ga cao tốc 12306, thanh toán không tiền mặt & quá cảnh 240 giờ.") + '</li>' +
      '          <li>' + (enM ? "Cross-border Vietnam–China gateways: Huu Nghi – Pingxiang & Lao Cai – Hekou." : "Cửa ngõ liên vận Việt–Trung: Hữu Nghị Quan – Bằng Tường & Lào Cai – Hà Khẩu.") + '</li>' +
      '          <li>' + (enM ? "Full curatorial dossier for each province with crafts, cuisine & seasonal climate." : "Hồ sơ chi tiết từng tỉnh kèm di sản UNESCO, làng nghề và đặc sản vùng.") + '</li>' +
      '        </ul>' +
      '        <div style="display:flex;gap:0.55rem;flex-wrap:wrap;margin-top:0.85rem;">' +
      '          <button type="button" class="btn btn-primary btn-sm" data-action="open-province-detail" data-id="' + esc(activePin.pageId) + '">' + (enM ? "Open province dossier →" : "Mở hồ sơ " + esc(activePin.labelVi) + " →") + '</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" data-v10-go-page="regions" data-v10-go-sub="cities16">' + (enM ? "All 34 Provinces & 16 Hubs" : "Xem 34 Tỉnh &amp; 16 Đô thị") + '</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  /* ==========================================================================
   * SCENE 4: Centered Monumental Header + Wide Filigree Stage + 6 Medallions
   * ========================================================================== */
  function renderObjectSpotlight(enM) {
    var d = getV10();
    var zs = getMergedSpotData();
    var keys = Object.keys(zs);
    if (!keys.length) return "";
    var sIdx = ensureSpotIdx(keys.length);
    var key = keys[sIdx] || keys[0];
    var obj = zs[key];
    var meta = SPOTLIGHT_META[key] || { img: "assets/images/museum/daxiguan-ding.jpg", titleVi: obj.titleVi || key, titleEn: obj.titleEn || key, zh: obj.titleZh || "", action: "nav", id: "museum" };
    var tomb = obj.tombstone || {};
    var hotspots = Array.isArray(obj.zoomHotspots) ? obj.zoomHotspots : [];
    var hsIdx = Math.max(0, Math.min(st.hotspotIdx, Math.max(0, hotspots.length - 1)));
    var activeHs = hotspots[hsIdx] || null;
    var lookPack = (obj.threeStepLookVi ? obj : ((d.artifactsPigments && d.artifactsPigments.artifacts && d.artifactsPigments.artifacts[key]) || null));
    var zoomScale = ZOOM_STEPS[st.zoomIdx] || 1.0;

    var medallionKeys = [
      "houmuwu-ding",
      "sanxingdui-bronze-mask",
      "ru-ware-narcissus-basin",
      "qianli-jiangshan",
      "flying-horse-gansu",
      "auspicious-cranes-huizong"
    ].filter(function (mk) { return Boolean(zs[mk] && SPOTLIGHT_META[mk]); });

    return (
      '<section class="v10-gac-section v10-spotlight-band" id="v10-gac-spotlight" aria-label="' + (enM ? "Object Spotlight" : "Sân khấu bảo vật") + '">' +
      '  <div class="container">' +
      '    <header class="v10-centered-display-head">' +
      '      <div class="v10-tracked-kicker">' + (enM ? "MUSEUM OBJECT SPOTLIGHT · 199 NATIONAL TREASURES" : "BẢO TÀNG SỐ QUỐC BẢO · SOI CẬN CẢNH 3.2x") + '</div>' +
      '      <h2 class="v10-editorial-roman-title">' + esc(enM ? meta.titleEn : meta.titleVi) + (meta.zh ? ' <span class="hanzi" style="font-weight:500;">' + esc(meta.zh) + '</span>' : '') + '</h2>' +
      '      <p class="v10-centered-sub">' + esc(tomb.dynasty || "") + (tomb.medium ? ' · ' + esc(tomb.medium) : '') + (tomb.museum ? ' · ' + esc(tomb.museum) : '') + '</p>' +
      '    </header>' +
      '    <div class="v10-spot-showcase">' +
      '      <div class="v10-gac-spotlight">' +
      filigreeCornersHtml() +
      '        <div class="v10-spot-stage" id="v10-spot-stage">' +
      '          <div class="v10-spot-canvas-wrap" id="v10-spot-canvas-wrap" style="transform:translate3d(' + st.panX + 'px,' + st.panY + 'px,0) scale(' + zoomScale + ');cursor:' + (zoomScale > 1 ? "grab" : "zoom-in") + ';">' +
      '            <img src="' + esc(meta.img) + '" alt="' + esc(enM ? meta.titleEn : meta.titleVi) + '" loading="lazy" decoding="async" />' +
      hotspots.map(function (hs, idx) {
        return '<button type="button" class="v10-spot-pin ' + (idx === hsIdx ? "is-active" : "") + '" style="left:' + Number(hs.xPct || 50) + '%;top:' + Number(hs.yPct || 50) + '%;" data-v10-spot-pin="' + idx + '" title="' + esc(hs.titleVi) + '">' + (idx + 1) + '</button>';
      }).join("") +
      '          </div>' +
      '          <div class="v10-spot-zoom-ctrl" role="group" aria-label="' + (enM ? "Zoom controls" : "Điều khiển phóng to thu nhỏ") + '">' +
      '            <button type="button" class="v10-spot-zbtn" data-v10-spot-step="-1" title="' + (enM ? "Previous artifact" : "Bảo vật trước") + '">←</button>' +
      '            <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="-1" aria-label="' + (enM ? "Zoom out" : "Thu nhỏ") + '">−</button>' +
      '            <span style="font-family:var(--font-mono);font-size:0.74rem;color:#E5A93C;padding:0 4px;">' + zoomScale.toFixed(1) + 'x</span>' +
      '            <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="1" aria-label="' + (enM ? "Zoom in" : "Phóng to") + '">+</button>' +
      '            <button type="button" class="v10-spot-zbtn" data-v10-spot-zoom="0" aria-label="' + (enM ? "Reset zoom" : "Đặt lại 1x") + '" style="font-size:0.72rem;">1:1</button>' +
      '            <button type="button" class="v10-spot-zbtn" data-v10-spot-step="1" title="' + (enM ? "Next artifact" : "Bảo vật tiếp") + '">→</button>' +
      '          </div>' +
      '        </div>' +
      '        <div class="v10-spot-meta">' +
      '          <div class="v10-spot-tombstone">' +
      '            <div><strong>' + (enM ? "Dynasty:" : "Niên đại:") + '</strong> ' + esc(tomb.dynasty || "") + '</div>' +
      '            <div><strong>' + (enM ? "Medium:" : "Chất liệu:") + '</strong> ' + esc(tomb.medium || "") + '</div>' +
      '            <div><strong>' + (enM ? "Dimensions:" : "Kích thước:") + '</strong> ' + esc(tomb.dimensions || "") + '</div>' +
      '            <div><strong>' + (enM ? "Holding:" : "Lưu trữ:") + '</strong> ' + esc(tomb.museum || "") + '</div>' +
      '          </div>' +
      (activeHs ? (
        '          <div class="v10-spot-step-box">' +
        '            <div style="font-size:0.71rem;color:#E5A93C;font-weight:700;text-transform:uppercase;margin-bottom:0.25rem;">' + (enM ? "Inspection Pin " : "Điểm soi giám định ") + (hsIdx + 1) + '/' + hotspots.length + ': ' + esc(activeHs.titleVi) + '</div>' +
        '            <div>' + esc(enM ? (activeHs.detailEn || activeHs.detailVi) : activeHs.detailVi) + '</div>' +
        '          </div>'
      ) : "") +
      (lookPack ? (
        '          <div class="v10-spot-step-box" style="font-size:0.76rem;color:#D2CBBF;">' +
        esc((enM ? lookPack.threeStepLookEn : lookPack.threeStepLookVi)[0] || "") +
        '          </div>'
      ) : "") +
      '          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-top:auto;">' +
      '            <button type="button" class="btn btn-primary btn-sm" data-action="' + esc(meta.action) + '" data-id="' + esc(meta.id) + '">' + (enM ? "Open full dossier →" : "Mở hồ sơ chi tiết →") + '</button>' +
      '            <button type="button" class="btn btn-secondary btn-sm" data-action="open-3d-studio" data-id="relics" data-studio="relics">' + (enM ? "Launch 3D Studio" : "Mở Studio 3D") + '</button>' +
      '            <button type="button" class="btn btn-ghost btn-sm" style="color:#E5A93C;" data-v10-feedback-open="1" data-v10-feedback-cat="image_3d" data-v10-feedback-context="' + esc((enM ? meta.titleEn : meta.titleVi) + " (" + key + ")") + '">' + (enM ? "Report issue" : "Góp ý mục này") + '</button>' +
      '          </div>' +
      '        </div>' +
      '      </div>' +
      (medallionKeys.length ? (
        '      <div class="v10-spot-medallions" aria-label="' + (enM ? "Quick treasure medallions" : "Chọn nhanh 6 bảo vật tiêu điểm") + '">' +
        medallionKeys.map(function (mk) {
          var mm = SPOTLIGHT_META[mk];
          var isCur = mk === key;
          return (
            '<button type="button" class="v10-medallion-btn ' + (isCur ? "is-active" : "") + '" data-v10-spot-key="' + esc(mk) + '" title="' + esc(enM ? mm.titleEn : mm.titleVi) + '">' +
            '  <span class="v10-medallion-ring"><img src="' + esc(mm.img) + '" alt="' + esc(enM ? mm.titleEn : mm.titleVi) + '" loading="eager" decoding="async" /></span>' +
            '  <span class="v10-medallion-lbl">' + esc(enM ? mm.titleEn : mm.titleVi) + '</span>' +
            '</button>'
          );
        }).join("") +
        '      </div>'
      ) : "") +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  /* ==========================================================================
   * SCENE 5: Edge-to-Edge 01..08 Accordion ABOVE Monumental Display Lockup
   * ========================================================================== */
  function renderTopPicksAccordion(enM) {
    var totalEssays = Math.max(330, (window.CCE_V104_MANIFEST && window.CCE_V104_MANIFEST.totalMonographs) ||
      (window.CCE_ARTICLES ? window.CCE_ARTICLES.length : 330));
    var totalQuiz = Math.max(1000, Array.isArray(window.CCE_MASTER_QUIZ_830) && window.CCE_MASTER_QUIZ_830.length >= 1000 ? window.CCE_MASTER_QUIZ_830.length : 1000);
    var panels = [
      {
        num: "01.", kickerVi: "Quốc họa Trường quyển", kickerEn: "Handscrolls",
        titleVi: "Hán Cung Xuân Hiểu & 72 Quốc Họa", titleEn: "Han Palace & 72 Master Paintings",
        descVi: "Trải cuộn Phải sang Trái kiệt tác lụa Tống–Minh kèm lớp soi ấn giám và đề bạt.",
        descEn: "Unroll high-resolution silk handscrolls with seal and colophon overlays.",
        img: "assets/images/paintings/39_hangong_chunxiao.jpg", page: "paintings", sub: "handscroll"
      },
      {
        num: "02.", kickerVi: "Bảo tàng Quốc bảo", kickerEn: "199 Artifacts",
        titleVi: "199 Bảo Vật Khảo Cổ & Kính Lúp 3.2x", titleEn: "199 Archaeological Treasures",
        descVi: "Soi cận cảnh hiện vật đồng thanh, gốm Nhữ Diêu, ngọc Lương Chử cùng 30 hồ sơ giám tuyển 3.2x.",
        descEn: "Inspect ancient bronzes, Ru celadon, and jade carvings with 30 curated 3.2x dossiers.",
        img: "assets/images/museum/zeng-hou-yi-bells.jpg", page: "museum", sub: "catalog"
      },
      {
        num: "03.", kickerVi: "Phòng Mô hình 3D", kickerEn: "3D WebGL Lab",
        titleVi: "110 Mô Hình Kiến Trúc & Giải Phẫu 3D", titleEn: "110 Interactive 3D Heritage Models",
        descVi: "Xoay 360 độ mộng Đấu Củng, Thiên Đàn, 72 cảnh PBR và 10 mô hình tách lớp cơ khí.",
        descEn: "Orbit Dougong brackets, 72 PBR scenes, and 10 exploded-view engineering cutaways.",
        img: "assets/images/museum/taihe-dian.jpg", page: "museum", sub: "studio3d"
      },
      {
        num: "04.", kickerVi: "Thư phòng Chuyên luận", kickerEn: totalEssays + " Monographs",
        titleVi: totalEssays + " Chuyên Luận & Nguyên Văn Cổ", titleEn: totalEssays + " Flagship Monographs",
        descVi: "Mỗi chuyên luận gồm niên biểu, thuật ngữ Hán–Việt, ma trận đối chiếu và cẩm nang thực địa.",
        descEn: "Comprehensive bilingual research essays paired with glossaries and evidence checks.",
        img: "assets/images/articles/hero-hundred-schools.jpg", page: "explore", sub: "monographs"
      },
      {
        num: "05.", kickerVi: "34 Tỉnh & 16 Đô Thị", kickerEn: "Field Atlas",
        titleVi: "Cẩm Nang Ga Cao Tốc 12306 & Quá Cảnh 240h", titleEn: "34 Provinces & High-Speed Rail Trails",
        descVi: "Lộ trình thực địa 5 ngày, 34 ga 12306, 60 thẻ tài xế Mandarin và cửa khẩu Việt–Trung.",
        descEn: "Detailed 34-province HSR hubs, 60 driver cards, and 240h transit guidance.",
        img: "assets/images/academic/guilin-li-river.jpg", page: "regions", sub: "cities16"
      },
      {
        num: "06.", kickerVi: "120 Lão Tự Hào", kickerEn: "Honored Brands",
        titleVi: "Đồng Nhân Đường (1669) & 42 Chỉ Dẫn Địa Lý", titleEn: "Tong Ren Tang & 42 EU-China GIs",
        descVi: "Ảnh thực tế, địa chỉ Didi tiếng Trung, 5 công đoạn chế tác và 43 Di sản UNESCO Việt–Trung.",
        descEn: "Authentic storefronts, Didi addresses, 5-step craft dossiers, and 43 UNESCO ICH pairs.",
        img: "assets/images/brands/tongrentang.jpg", page: "business", sub: "laozihao"
      },
      {
        num: "07.", kickerVi: "Lịch sử & Triết học", kickerEn: "Chronology",
        titleVi: "60 Mốc Đồng Đại Sử & 64 Quẻ Chu Dịch", titleEn: "60 Synchrony Eras & 64 Yijing Hexagrams",
        descVi: "Đặt song song dòng chảy Trung Hoa – Việt Nam – Thế giới từ Hạ–Hùng Vương tới 2026 cùng Tứ Khố.",
        descEn: "Compare 60 eras across China, Vietnam, and World alongside 64 hexagrams and Siku texts.",
        img: "assets/images/museum/terracotta-general.jpg", page: "history", sub: "dynasties"
      },
      {
        num: "08.", kickerVi: "Việt – Trung & HSK 7–9", kickerEn: "Sino-Viet & Study",
        titleVi: "Hán–Nôm, Bạn Giả & " + totalQuiz + " Câu Trắc Nghiệm", titleEn: "Han-Nom, False Friends & " + totalQuiz + " MCQs",
        descVi: "120 chữ Hán 4 tầng diễn biến, 50 cặp bạn giả, 24 Đại học CSC 985 và " + totalQuiz + " câu hỏi.",
        descEn: "Bridge 4-script evolution, 50 false friends, 24 CSC universities, and " + totalQuiz + " MCQs.",
        img: "assets/images/museum/ngoc-lu-bronze-drum.jpg", page: "learning", sub: "quiz"
      }
    ];

    return (
      '<section class="v10-gac-section v10-accordion-section" id="v10-gac-top-picks" aria-label="' + (enM ? "Eight Heritage Pillars" : "Tám trụ cột văn hiến") + '">' +
      '  <div class="v10-acc-fullwrap">' +
      '    <div class="v10-gac-accordion" role="list">' +
      panels.map(function (p, idx) {
        var active = idx === st.accIdx;
        return (
          '<button type="button" class="v10-acc-panel ' + (active ? "is-expanded" : "") + '" data-v10-acc="' + idx + '" data-v10-go-page="' + esc(p.page) + '" data-v10-go-sub="' + esc(p.sub) + '">' +
          '  <img src="' + esc(p.img) + '" alt="' + esc(enM ? p.titleEn : p.titleVi) + '" loading="' + (idx < 4 ? "eager" : "lazy") + '" decoding="async" />' +
          '  <div class="v10-acc-scrim"></div>' +
          '  <div class="v10-acc-content">' +
          '    <div class="v10-acc-topcopy">' +
          '      <span class="v10-acc-kicker">' + esc(enM ? p.kickerEn : p.kickerVi) + '</span>' +
          '      <h3 class="v10-acc-heading">' + esc(enM ? p.titleEn : p.titleVi) + '</h3>' +
          '      <p class="v10-acc-desc">' + esc(enM ? p.descEn : p.descVi) + '</p>' +
          '    </div>' +
          '    <div class="v10-acc-num">' + esc(p.num) + '</div>' +
          '  </div>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      '  </div>' +
      '  <div class="container">' +
      '    <div class="v10-acc-below-lockup">' +
      '      <h2 class="v10-dual-serif-display">' +
      '        <span class="is-crimson">' + (enM ? "EIGHT ARCHIVAL WINGS" : "TÁM TRỤ CỘT TRI THỨC") + '</span>' +
      '        <span>' + (enM ? "EAST ASIAN SCHOLARSHIP" : "KHẢO CỨU ĐÔNG Á") + '</span>' +
      '      </h2>' +
      '      <p class="v10-centered-sub">' + (enM ? "Hover or tap any numbered strip above to open the corresponding scholarly wing." : "Di chuột hoặc chạm từng dải số 01.–08. phía trên để mở thẳng chuyên khu nghiên cứu tương ứng.") + '</p>' +
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
      { id: "you-chun-tu", type: "painting", titleVi: term.relatedPaintingHint || "Du Xuân Đồ", titleEn: "Seasonal Landscape", img: "assets/images/paintings/04_youchun_tu.jpg", action: "open-painting-detail" },
      { id: "six-tea-categories-brewing-etiquette", type: "article", titleVi: "Lục Đại Trà Loại và Công Phu Trà", titleEn: "Six Tea Categories Monograph", img: "assets/images/articles/hero-six-teas-gongfu.jpg", action: "open-article" },
      { id: "ancient-chinese-astronomy-28-mansions-calendar", type: "article", titleVi: "Thiên văn & Lịch Pháp 24 Tiết Khí Đông Á", titleEn: "East Asian Astronomy & Calendar", img: "assets/images/articles/hero-yinyang.jpg", action: "open-article" }
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
          '  <div class="v10-almanac-mini-img">' +
          '    <img src="' + esc(c.img) + '" alt="' + esc(title) + '" loading="lazy" decoding="async" data-action="' + esc(c.action) + '" data-id="' + esc(c.id) + '" style="cursor:pointer;" />' +
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

  /* ==========================================================================
   * SCENE 6: Carved Imperial Palace Archway + 6 Clickable Wing Emblems
   * ========================================================================== */
  function renderPalaceArchCta(enM) {
    var totalEssays = Math.max(330, (window.CCE_V104_MANIFEST && window.CCE_V104_MANIFEST.totalMonographs) || 330);
    var wings = [
      { count: String(totalEssays), zh: "专论", labelVi: "Chuyên Luận", labelEn: "Monographs", action: "nav", page: "explore", id: "" },
      { count: "199", zh: "国宝", labelVi: "Quốc Bảo", labelEn: "National Relics", action: "nav", page: "museum", id: "" },
      { count: "72", zh: "国画", labelVi: "Quốc Họa", labelEn: "Paintings", action: "nav", page: "paintings", id: "" },
      { count: "110", zh: "三维", labelVi: "Mô Hình 3D", labelEn: "3D Scenes", action: "open-3d-studio", page: "", id: "relics" },
      { count: "120", zh: "老字号", labelVi: "Lão Tự Hào", labelEn: "Honored Brands", goPage: "business", goSub: "laozihao" },
      { count: "1000", zh: "研习", labelVi: "Trắc Nghiệm", labelEn: "Quiz Arena", action: "nav", page: "learning", id: "" }
    ];

    return (
      '<section class="v10-gac-section v10-arch-section" id="v10-palace-arch-stage" aria-label="' + (enM ? "Imperial Archway Portal" : "Cổng vòm tri thức") + '">' +
      '  <div class="v10-arch-sky-backdrop">' +
      '    <div class="v10-arch-pillar-frame">' +
      '      <svg class="v10-arch-outline-svg" viewBox="0 0 900 420" preserveAspectRatio="none" aria-hidden="true">' +
      '        <path d="M0 420 V0 H900 V420 H770 V215 C770 86, 625 28, 450 28 C275 28, 130 86, 130 215 V420 Z" fill="currentColor" opacity="0.96"/>' +
      '        <path d="M130 420 V215 C130 86, 275 28, 450 28 C625 28, 770 86, 770 215 V420" fill="none" stroke="#D7A74E" stroke-width="5"/>' +
      '        <path d="M150 420 V218 C150 104, 286 48, 450 48 C614 48, 750 104, 750 218 V420" fill="none" stroke="#821C1C" stroke-width="2.5"/>' +
      '      </svg>' +
      '      <div class="v10-arch-portal-content">' +
      '        <div class="v10-tracked-kicker" style="color:#FFFDF8;">' + (enM ? "SIX PILLARS OF ARCHIVAL DISCOVERY" : "SÁU CỬA NGÕ TRI THỨC SONG NGỮ") + '</div>' +
      '        <h2 class="v10-arch-title">' + (enM ? "Step Through the Heritage Gate" : "Bước Qua Cổng Vòm Văn Hiến") + '</h2>' +
      '        <div class="v10-arch-wing-grid">' +
      wings.map(function (w) {
        var attr = w.goPage
          ? ('data-v10-go-page="' + esc(w.goPage) + '" data-v10-go-sub="' + esc(w.goSub) + '"')
          : ('data-action="' + esc(w.action) + '"' + (w.page ? ' data-page="' + esc(w.page) + '"' : "") + (w.id ? ' data-id="' + esc(w.id) + '" data-studio="' + esc(w.id) + '"' : ""));
        return (
          '<button type="button" class="v10-arch-wing-btn" ' + attr + '>' +
          '  <span class="v10-arch-wing-seal">' + esc(w.zh) + '</span>' +
          '  <span class="v10-arch-wing-num">' + esc(w.count) + '</span>' +
          '  <span class="v10-arch-wing-lbl">' + esc(enM ? w.labelEn : w.labelVi) + '</span>' +
          '</button>'
        );
      }).join("") +
      '        </div>' +
      '        <div style="display:flex;justify-content:center;gap:0.65rem;flex-wrap:wrap;margin-top:1.1rem;">' +
      '          <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="explore">' + (enM ? ("All " + totalEssays + " Monographs →") : ("Mở " + totalEssays + " Chuyên Luận →")) + '</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="learning">' + (enM ? "1,000 MCQs & 12 Pathways →" : "Đấu Trường 1.000 Câu Hỏi →") + '</button>' +
      '          <button type="button" class="btn btn-secondary btn-sm" data-v10-feedback-open="1" data-v10-feedback-cat="ui_ux">' + (enM ? "Send Feedback" : "Đóng góp ý kiến") + '</button>' +
      '        </div>' +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  /* ==========================================================================
   * RIGHT-EDGE VERTICAL CRIMSON-GOLD DOCK
   * ========================================================================== */
  function syncRightEdgeDock(enM) {
    if (typeof document === "undefined" || !document.body) return;
    var dock = document.getElementById("v10-right-edge-dock");
    if (!dock) {
      dock = document.createElement("aside");
      dock.id = "v10-right-edge-dock";
      dock.className = "v9-no-print";
      dock.setAttribute("aria-label", enM ? "Quick Utility Dock" : "Thanh tác vụ nhanh bên phải");
      document.body.appendChild(dock);
    }
    var stopCount = 0;
    try {
      var tripApi = window.CCE_V9_TRIP_PLANNER || window.CCE_V9_TRIP;
      if (tripApi && typeof tripApi.getCount === "function") stopCount = tripApi.getCount();
    } catch (_e) {}

    dock.innerHTML =
      '<button type="button" class="v10-dock-pill is-search" data-action="open-search" title="' + (enM ? "Global Search & Q&A (Ctrl+K)" : "Tìm kiếm & Hỏi đáp (Ctrl+K)") + '">' +
      '  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="11" cy="11" r="7.5"/><path d="M20 20l-4.2-4.2"/></svg>' +
      '  <span>' + (enM ? "SEARCH" : "TRA CỨU") + '</span>' +
      '</button>' +
      '<button type="button" class="v10-dock-orb" data-v9-trip-open="1" title="' + (enM ? "Open Trip Itinerary" : "Mở Lịch trình Thực địa") + '" aria-label="' + (enM ? "Trip Itinerary" : "Lịch trình Thực địa") + '">' +
      '  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>' +
      (stopCount ? '<span class="v10-dock-badge">' + stopCount + '</span>' : "") +
      '</button>' +
      '<button type="button" class="v10-dock-pill is-feedback" data-v10-feedback-open="1" data-v10-feedback-cat="ui_ux" title="' + (enM ? "Send Feedback" : "Đóng góp ý kiến") + '">' +
      '  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>' +
      '  <span>' + (enM ? "FEEDBACK" : "GÓP Ý") + '</span>' +
      '</button>';
  }

  function updateCurtainProgress() {
    var hero = document.getElementById("v10-brocade-curtain-hero");
    if (!hero) return;
    var reduce = false;
    try {
      reduce = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    } catch (_e) {}
    if (reduce || st.curtainForcedOpen) {
      hero.style.setProperty("--curtain-p", "1");
      hero.style.setProperty("--curtain-open", "1");
      hero.classList.add("is-curtain-open");
      return;
    }
    var rect = hero.getBoundingClientRect();
    var stage = hero.querySelector(".v10-curtain-sticky-stage");
    var stageH = stage ? stage.offsetHeight : window.innerHeight;
    var travel = Math.max(1, hero.offsetHeight - stageH);
    var p = clamp01(-rect.top / travel);
    var open = easeInOutCubic(clamp01((p - 0.02) / 0.66));
    hero.style.setProperty("--curtain-p", p.toFixed(4));
    hero.style.setProperty("--curtain-open", open.toFixed(4));
    hero.classList.toggle("is-curtain-open", open >= 0.32 || p >= 0.28);
  }

  function scheduleScrollSync() {
    if (st.rafId || typeof window === "undefined") return;
    var raf = window.requestAnimationFrame || function (cb) { return setTimeout(cb, 16); };
    st.rafId = raf(function () {
      st.rafId = 0;
      updateCurtainProgress();
    });
  }

  function renderSynchronyTimeline(enM) {
    var d = getV10();
    var v12Sync = window.CCE_V12_LEXICON_CULINARY_SYNC && Array.isArray(window.CCE_V12_LEXICON_CULINARY_SYNC.synchrony60)
      ? window.CCE_V12_LEXICON_CULINARY_SYNC.synchrony60
      : null;
    var list = v12Sync || d.syncTimeline18 || [];
    if (!list.length) return "";
    var idx = Math.max(0, Math.min(st.syncIdx, list.length - 1));
    var cur = list[idx];
    var yearHdr = enM ? (cur.yearDisplayEn || cur.yearDisplay || "") : (cur.yearDisplayVi || cur.yearDisplay || "");
    var cnTitle = cur.china ? (enM ? (cur.china.dynastyEn || cur.china.dynastyVi || cur.china.dynasty || "") : (cur.china.dynastyVi || cur.china.dynasty || "")) : "";
    var vnTitle = cur.vietnam ? (enM ? (cur.vietnam.eraEn || cur.vietnam.dynastyEn || cur.vietnam.eraVi || cur.vietnam.dynasty || "") : (cur.vietnam.eraVi || cur.vietnam.dynasty || "")) : "";
    var wdTitle = cur.world ? (enM ? (cur.world.regionEn || cur.world.regionVi || cur.world.region || "World") : (cur.world.regionVi || cur.world.region || "Thế giới")) : "World";
    var impactText = enM ? (cur.crossImpactEn || "") : (cur.crossImpactVi || "");
    return (
      '<section class="card mb-2" id="v10-sync-timeline-box" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:0.8rem;">' +
      '    <div>' +
      '      <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? ("COMPARATIVE SYNCHRONY · " + list.length + " MILESTONES (2070 BCE–2026)") : ("THANH ĐỒNG ĐẠI VĂN MINH · " + list.length + " MỐC LỊCH SỬ (2070 TCN–2026)")) + '</div>' +
      '      <h3 style="margin:0.15rem 0 0;font-size:1.25rem;">' + esc(yearHdr) + '</h3>' +
      '    </div>' +
      '    <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">' +
      '      <label for="v10-sync-range" style="font-size:0.78rem;color:var(--text-muted);">' + (enM ? "Scrub era:" : "Chọn mốc thế kỷ:") + '</label>' +
      '      <input id="v10-sync-range" type="range" min="0" max="' + (list.length - 1) + '" value="' + idx + '" style="width:210px;accent-color:#821C1C;" />' +
      '      <span class="badge badge-gold">' + (idx + 1) + '/' + list.length + '</span>' +
      '    </div>' +
      '  </div>' +
      '  <div class="v10-sync-grid">' +
      '    <div class="flashcard-layer" style="border-left:3px solid #821C1C;"><strong style="color:#821C1C;">' + (enM ? "China: " : "Trung Hoa: ") + esc(cnTitle) + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.china ? (enM ? cur.china.factEn : cur.china.factVi) : "") + '</p></div>' +
      '    <div class="flashcard-layer" style="border-left:3px solid var(--jade-green);"><strong style="color:var(--jade-green);">' + (enM ? "Vietnam: " : "Việt Nam: ") + esc(vnTitle) + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.vietnam ? (enM ? cur.vietnam.factEn : cur.vietnam.factVi) : "") + '</p></div>' +
      '    <div class="flashcard-layer" style="border-left:3px solid var(--antique-gold);"><strong>' + esc(wdTitle) + '</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;">' + esc(cur.world ? (enM ? cur.world.factEn : cur.world.factVi) : "") + '</p></div>' +
      '  </div>' +
      (impactText ? '<div style="margin-top:0.65rem;padding:0.5rem 0.75rem;background:var(--bg-surface);border-left:3px solid var(--jade-green);font-size:0.81rem;color:var(--text-secondary);"><strong>' + (enM ? "Cross-Impact: " : "Tương tác Liên vùng: ") + '</strong>' + esc(impactText) + '</div>' : "") +
      '</section>'
    );
  }

  function renderCities16FieldCompanion(cityId, enM) {
    var d = getV10();
    var map = d.cities16 || {};
    var c = map[cityId] || map["city-beijing"];
    if (!c) return "";
    return (
      '<section class="card mt-2" id="v10-city-16-companion" style="padding:1.15rem 1.25rem;border-top:3px solid var(--jade-green);">' +
      '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "AT-A-GLANCE FIELD BRIEF · 12306 HSR &amp; 48H TRAIL" : "THÔNG TIN THỰC ĐỊA CỐT LÕI · TÀU CAO TỐC 12306 &amp; LỊCH TRÌNH 48H") + '</div>' +
      '  <div class="v10-city-16-grid" style="margin-top:0.75rem;">' +
      '    <div class="flashcard-layer">' +
      '      <strong>' + (enM ? "High-Speed Rail 12306 Hubs:" : "Ga Cao tốc 12306 &amp; Sân bay:") + '</strong>' +
      '      <p style="margin:0.3rem 0;font-size:0.84rem;">' + esc(enM ? c.hsrHubsEn : c.hsrHubsVi) + '</p>' +
      '      <div style="font-size:0.78rem;color:var(--text-muted);">' + esc(c.tip12306Vi) + '</div>' +
      '    </div>' +
      '    <div class="flashcard-layer">' +
      '      <strong>' + (enM ? "48-Hour Field Itinerary:" : "Lộ trình 48 giờ trọng điểm:") + '</strong>' +
      '      <div style="font-size:0.82rem;margin-top:0.3rem;"><strong>Ngày 1:</strong> ' + esc(c.itinerary48h && c.itinerary48h.day1Vi) + '</div>' +
      '      <div style="font-size:0.82rem;margin-top:0.25rem;"><strong>Ngày 2:</strong> ' + esc(c.itinerary48h && c.itinerary48h.day2Vi) + '</div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderClassicalGrammarDeck(enM) {
    var list = getV10().classicalTexts || [];
    if (!list.length) return "";
    var page = Math.max(0, Math.min(st.grammarPage, Math.ceil(list.length / 3) - 1));
    var slice = list.slice(page * 3, page * 3 + 3);
    return (
      '<section class="card mb-2" id="v10-classical-grammar-deck" style="padding:1.15rem 1.25rem;border-top:3px solid var(--antique-gold);">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;">' +
      '    <div class="editorial-kicker" style="color:#821C1C;margin:0;">' + (enM ? "CLASSICAL CHINESE GRAMMAR ANATOMY · 15 PRIMARY EXCERPTS" : "GIẢI PHẪU NGỮ PHÁP CỔ VĂN · 15 ĐOẠN NGUYÊN VĂN KINH ĐIỂN KÈM HƯ TỪ") + '</div>' +
      '    <div style="display:flex;gap:0.35rem;">' +
      [0, 1, 2, 3, 4].map(function (pIdx) {
        return '<button type="button" class="btn btn-sm ' + (pIdx === page ? "btn-primary" : "btn-secondary") + '" data-v10-gram-page="' + pIdx + '">' + (pIdx * 3 + 1) + '-' + Math.min(list.length, pIdx * 3 + 3) + '</button>';
      }).join("") +
      '    </div>' +
      '  </div>' +
      '  <div style="display:grid;gap:0.85rem;">' +
      slice.map(function (ct) {
        return (
          '<article class="flashcard-layer">' +
          '  <div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;"><strong>' + esc(enM ? ct.titleEn : ct.titleVi) + '</strong><span class="badge badge-gold">' + esc(ct.dynasty) + '</span></div>' +
          '  <div class="hanzi" style="font-size:1.12rem;color:#821C1C;margin:0.35rem 0 0.2rem;">' + esc(ct.classicalZh) + '</div>' +
          '  <div class="pinyin text-xs" style="margin-bottom:0.35rem;">' + esc(ct.pinyin) + ' · <em>Hán-Việt:</em> ' + esc(ct.hanViet) + '</div>' +
          '  <p style="margin:0 0 0.35rem;font-size:0.84rem;">' + esc(enM ? ct.meaningEn : ct.meaningVi) + '</p>' +
          '  <div style="font-size:0.78rem;color:var(--jade-green);"><strong>' + (enM ? "VN Dialogue:" : "Đối chiếu Việt Nam:") + '</strong> ' + esc(ct.vietnamDialogueVi) + '</div>' +
          '</article>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function renderHanNomAndFalseFriends(enM) {
    var d = getV10();
    var list = d.hanNom12 || [];
    var ff = d.falseFriends || [];
    if (!list.length && !ff.length) return "";
    var item = list[st.hanNomIdx % Math.max(1, list.length)] || null;
    return (
      '<section class="card mt-2 mb-2" id="v10-hannom-contract-bridge" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
      (item ? (
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">' +
        '    <div class="editorial-kicker" style="color:#821C1C;margin:0;">' + (enM ? "12 HAN-NOM CLASSICS &amp; RADICAL STRUCTURE" : "12 KIỆT TÁC HÁN–NÔM &amp; CHIẾT TỰ · " + esc(item.authorVi)) + '</div>' +
        '    <div style="display:flex;gap:0.35rem;">' +
        '      <button type="button" class="btn btn-secondary btn-sm" data-v10-nom-step="-1">← ' + (enM ? "Prev" : "Bài trước") + '</button>' +
        '      <span class="badge badge-gold">' + ((st.hanNomIdx % list.length) + 1) + '/' + list.length + '</span>' +
        '      <button type="button" class="btn btn-secondary btn-sm" data-v10-nom-step="1">' + (enM ? "Next" : "Bài sau") + ' →</button>' +
        '    </div>' +
        '  </div>' +
        '  <div class="flashcard-layer" style="margin-bottom:0.9rem;">' +
        '    <strong>' + esc(item.workTitle) + '</strong>' +
        '    <div class="hanzi" style="font-size:1.15rem;color:#821C1C;margin:0.35rem 0;">' + esc(item.excerptOriginal) + '</div>' +
        '    <div style="font-size:0.84rem;">' + esc(item.modernVietnameseGloss) + '</div>' +
        '    <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.3rem;">' + esc(item.culturalNoteVi) + '</div>' +
        '  </div>'
      ) : "") +
      (ff.length ? (
        '  <div class="editorial-kicker" style="color:var(--jade-green);">' + (enM ? "25 SINO-VIETNAMESE FALSE FRIENDS IN CONTRACTS" : "25 CẶP TỪ ĐỒNG HÌNH DỊ NGHĨA DỄ NHẦM TRONG HỢP ĐỒNG &amp; GIAO TIẾP") + '</div>' +
        '  <div class="grid grid-3" style="gap:0.65rem;margin-top:0.5rem;">' +
        ff.slice(0, 9).map(function (f) {
          return '<div class="flashcard-layer" style="font-size:0.79rem;"><strong class="hanzi" style="color:#821C1C;">' + esc(f.hanzi) + '</strong> <span class="pinyin">' + esc(f.pinyin) + '</span><br><span style="color:var(--text-muted);">Hán-Việt: ' + esc(f.hanVietLiteral) + '</span><br><span><strong>CN:</strong> ' + esc(f.chineseMeaningVi) + '</span><br><span style="color:var(--jade-green);"><strong>VN:</strong> ' + esc(f.vietnameseMeaningVi) + '</span></div>';
        }).join("") +
        '  </div>'
      ) : "") +
      '</section>'
    );
  }

  function renderHsk79AndTradeCases(mode, enM) {
    var d = getV10();
    if (mode === "hsk") {
      var passages = d.hsk79 || [];
      if (!passages.length) return "";
      var idx = st.hskIdx % passages.length;
      var item = passages[idx];
      return (
        '<section class="card mb-2" id="v10-hsk79-capstone" style="padding:1.15rem 1.25rem;border-top:3px solid #821C1C;">' +
        '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.7rem;">' +
        '    <div><span class="badge badge-red">HSK 7–9 · ' + esc(item.domain) + '</span> <strong style="margin-left:0.4rem;">' + esc(enM ? item.titleEn : item.titleVi) + ' (' + (idx + 1) + '/' + passages.length + ')</strong></div>' +
        '    <div style="display:flex;gap:0.35rem;"><button type="button" class="btn btn-secondary btn-sm" data-v10-hsk-step="-1">←</button><button type="button" class="btn btn-secondary btn-sm" data-v10-hsk-step="1">→</button></div>' +
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
        var descText = enM
          ? (pg.mineralSourceEn || pg.preparationAndStabilityEn || pg.historicalUseEn || "")
          : (pg.mineralSourceVi || pg.preparationAndStabilityVi || pg.historicalUseVi || "");
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

    if (typeof window !== "undefined" && typeof window.addEventListener === "function") {
      window.addEventListener("scroll", scheduleScrollSync, { passive: true });
      window.addEventListener("resize", scheduleScrollSync, { passive: true });
    }

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
      var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");

      var curtainBtn = e.target && e.target.closest ? e.target.closest("[data-v10-curtain-open]") : null;
      if (curtainBtn) {
        st.curtainForcedOpen = true;
        updateCurtainProgress();
        var hero = document.getElementById("v10-brocade-curtain-hero");
        if (hero) {
          var stage = hero.querySelector(".v10-curtain-sticky-stage");
          var targetScroll = hero.offsetTop + Math.max(420, (hero.offsetHeight - (stage ? stage.offsetHeight : window.innerHeight)) * 0.78);
          try {
            window.scrollTo({ top: targetScroll, behavior: "smooth" });
          } catch (_err) {
            window.scrollTo(0, targetScroll);
          }
          setTimeout(updateCurtainProgress, 60);
        }
        return;
      }

      var tripOrb = e.target && e.target.closest ? e.target.closest("[data-v9-trip-open]") : null;
      if (tripOrb) {
        e.preventDefault();
        var tp = window.CCE_V9_TRIP_PLANNER || window.CCE_V9_TRIP;
        if (tp && typeof tp.openDrawer === "function") tp.openDrawer(enM);
        return;
      }

      var goBtn = e.target && e.target.closest ? e.target.closest("[data-v10-go-page]") : null;
      if (goBtn) {
        var page = goBtn.getAttribute("data-v10-go-page");
        var sub = goBtn.getAttribute("data-v10-go-sub");
        if (window.CCE_V10_DECK && typeof window.CCE_V10_DECK.navigateTo === "function") {
          window.CCE_V10_DECK.navigateTo(page, sub);
        }
        return;
      }

      var peekStep = e.target && e.target.closest ? e.target.closest("[data-v10-peek-step]") : null;
      if (peekStep) {
        e.stopPropagation();
        var sLen = getPeekStories().length;
        var dirP = parseInt(peekStep.getAttribute("data-v10-peek-step"), 10) || 1;
        st.peekIdx = (st.peekIdx + dirP + sLen) % sLen;
        patchRoot("v10-peek-stories", renderPeekStoryCarousel(enM));
        return;
      }

      var peekDot = e.target && e.target.closest ? e.target.closest("[data-v10-peek-dot]") : null;
      if (peekDot) {
        st.peekIdx = parseInt(peekDot.getAttribute("data-v10-peek-dot"), 10) || 0;
        patchRoot("v10-peek-stories", renderPeekStoryCarousel(enM));
        return;
      }

      var spotKey = e.target && e.target.closest ? e.target.closest("[data-v10-spot-key]") : null;
      if (spotKey) {
        var targetK = spotKey.getAttribute("data-v10-spot-key");
        var allK = Object.keys(getMergedSpotData());
        var foundIdx = allK.indexOf(targetK);
        if (foundIdx >= 0) {
          st.spotIdx = foundIdx;
          st.zoomIdx = 0; st.panX = 0; st.panY = 0; st.hotspotIdx = 0;
          patchRoot("v10-gac-spotlight", renderObjectSpotlight(enM));
        }
        return;
      }

      var spotPin = e.target && e.target.closest ? e.target.closest("[data-v10-spot-pin]") : null;
      if (spotPin) {
        st.hotspotIdx = parseInt(spotPin.getAttribute("data-v10-spot-pin"), 10) || 0;
        if (st.zoomIdx === 0) st.zoomIdx = 1;
        patchRoot("v10-gac-spotlight", renderObjectSpotlight(enM));
        return;
      }

      var spotZoom = e.target && e.target.closest ? e.target.closest("[data-v10-spot-zoom]") : null;
      if (spotZoom) {
        var dz = parseInt(spotZoom.getAttribute("data-v10-spot-zoom"), 10);
        if (dz === 0) { st.zoomIdx = 0; st.panX = 0; st.panY = 0; }
        else { st.zoomIdx = Math.max(0, Math.min(ZOOM_STEPS.length - 1, st.zoomIdx + dz)); }
        if (st.zoomIdx === 0) { st.panX = 0; st.panY = 0; }
        patchRoot("v10-gac-spotlight", renderObjectSpotlight(enM));
        return;
      }

      var spotStep = e.target && e.target.closest ? e.target.closest("[data-v10-spot-step]") : null;
      if (spotStep) {
        var keys = Object.keys(getMergedSpotData());
        if (keys.length) {
          var dir = parseInt(spotStep.getAttribute("data-v10-spot-step"), 10) || 1;
          st.spotIdx = (ensureSpotIdx(keys.length) + dir + keys.length) % keys.length;
          st.zoomIdx = 0; st.panX = 0; st.panY = 0; st.hotspotIdx = 0;
          patchRoot("v10-gac-spotlight", renderObjectSpotlight(enM));
        }
        return;
      }

      var atlasPin = e.target && e.target.closest ? e.target.closest("[data-v10-atlas-pin]") : null;
      if (atlasPin) {
        st.atlasPinIdx = parseInt(atlasPin.getAttribute("data-v10-atlas-pin"), 10) || 0;
        patchRoot("v10-scroll-atlas-preview", renderScrollAtlasPreview(enM));
        return;
      }

      var solStep = e.target && e.target.closest ? e.target.closest("[data-v10-solar-step]") : null;
      if (solStep) {
        var terms = (getV10().almanac && getV10().almanac.solarTerms24) || [];
        if (terms.length) {
          var curS = st.solarIdx >= 0 ? st.solarIdx : getCurrentSolarTermIndex(terms);
          st.solarIdx = (curS + (parseInt(solStep.getAttribute("data-v10-solar-step"), 10) || 1) + terms.length) % terms.length;
          patchRoot("v10-gac-almanac", renderAlmanacSplit(enM));
        }
        return;
      }

      var shareBtn = e.target && e.target.closest ? e.target.closest("[data-v10-share]") : null;
      if (shareBtn) {
        e.preventDefault();
        e.stopPropagation();
        if (navigator.clipboard) {
          try { navigator.clipboard.writeText(window.location.href); } catch (_e) {}
        }
        shareBtn.setAttribute("title", enM ? "Copied!" : "Đã sao chép!");
        return;
      }

      var gp = e.target && e.target.closest ? e.target.closest("[data-v10-gram-page]") : null;
      if (gp) {
        st.grammarPage = parseInt(gp.getAttribute("data-v10-gram-page"), 10) || 0;
        patchRoot("v10-classical-grammar-deck", renderClassicalGrammarDeck(enM));
        return;
      }

      var ns = e.target && e.target.closest ? e.target.closest("[data-v10-nom-step]") : null;
      if (ns) {
        var nLen = (getV10().hanNom12 || []).length || 1;
        st.hanNomIdx = (st.hanNomIdx + (parseInt(ns.getAttribute("data-v10-nom-step"), 10) || 1) + nLen) % nLen;
        patchRoot("v10-hannom-contract-bridge", renderHanNomAndFalseFriends(enM));
        return;
      }

      var hs = e.target && e.target.closest ? e.target.closest("[data-v10-hsk-step]") : null;
      if (hs) {
        var hLen = (getV10().hsk79 || []).length || 1;
        st.hskIdx = (st.hskIdx + (parseInt(hs.getAttribute("data-v10-hsk-step"), 10) || 1) + hLen) % hLen;
        patchRoot("v10-hsk79-capstone", renderHsk79AndTradeCases("hsk", enM));
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
      syncRightEdgeDock(enM);
      setTimeout(updateCurtainProgress, 0);
      return (
        renderBrocadeCurtainHero(enM) +
        '<div class="v10-sunlit-flow">' +
        renderPeekStoryCarousel(enM) +
        renderScrollAtlasPreview(enM) +
        renderObjectSpotlight(enM) +
        renderTopPicksAccordion(enM) +
        renderGeometricBento(enM) +
        renderAlmanacSplit(enM) +
        '</div>'
      );
    },
    renderBrocadeCurtainHero: renderBrocadeCurtainHero,
    updateCurtainProgress: updateCurtainProgress,
    renderPalaceArchCta: renderPalaceArchCta,
    syncRightEdgeDock: syncRightEdgeDock,
    renderSynchronyTimeline: renderSynchronyTimeline,
    renderCities16FieldCompanion: renderCities16FieldCompanion,
    renderClassicalGrammarDeck: renderClassicalGrammarDeck,
    renderHanNomAndFalseFriends: renderHanNomAndFalseFriends,
    renderHsk79AndTradeCases: renderHsk79AndTradeCases,
    renderPigmentsReference: renderPigmentsReference
  };
})();
