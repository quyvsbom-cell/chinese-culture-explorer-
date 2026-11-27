// ============================================================================
// CHINESE CULTURE EXPLORER – 中国文化探索
// Main Application Controller: Editorial Homepage, 3-Column Academic Reader,
// Digital Museum & Lightbox, Multi-Facet Search, Interactive 3D Dissection,
// Contextual Vocabulary & Reading Notebook + CSV/TSV Export
// ============================================================================

(function () {
  const Auth = window.CCE_AUTH || {
    init: async () => ({ status: "ready", authenticated: false }),
    isAuthenticated: () => false,
    getUser: () => null,
    getState: () => ({ status: "ready", isLocalHost: false, authenticated: false, providers: [] }),
    getAvailableProviders: () => [],
    signInWithGoogle: async () => ({ ok: false }),
    signOut: async () => {},
    subscribe: () => () => {}
  };
  const Store = window.CCE_STORE;
  const Visuals = window.CCE_VISUALS;
  const History = window.CCE_HISTORY;
  const Philosophy = window.CCE_PHILOSOPHY;
  const Metaphysics = window.CCE_METAPHYSICS;
  const CustomsArt = window.CCE_CUSTOMS_ART;
  const Regions = window.CCE_REGIONS;
  const SinoVN = window.CCE_SINO_VIETNAM;
  const Business = window.CCE_BUSINESS;
  const Articles = window.CCE_ARTICLES || [];
  const Dictionary = window.CCE_DICTIONARY;
  function syncArticlesRef() {
    if (Array.isArray(window.CCE_ARTICLES) && window.CCE_ARTICLES !== Articles) {
      var byId = Object.create(null);
      for (var i = 0; i < Articles.length; i++) {
        if (Articles[i] && Articles[i].id) byId[Articles[i].id] = i;
      }
      for (var j = 0; j < window.CCE_ARTICLES.length; j++) {
        var wa = window.CCE_ARTICLES[j];
        if (!wa || !wa.id) continue;
        var hasMain = Array.isArray(wa.mainContent) && wa.mainContent.length > 0 && !wa._v104Stub && !wa._v23Stub;
        if (Object.prototype.hasOwnProperty.call(byId, wa.id)) {
          var prev = Articles[byId[wa.id]];
          var prevStub = Boolean(!prev || prev._v104Stub || prev._v23Stub || !Array.isArray(prev.mainContent) || prev.mainContent.length === 0);
          if (prevStub && hasMain) Articles[byId[wa.id]] = wa;
        } else {
          byId[wa.id] = Articles.length;
          Articles.push(wa);
        }
      }
    }
    if (Array.isArray(window.CCE_DICTIONARY) && Array.isArray(Dictionary) && window.CCE_DICTIONARY !== Dictionary) {
      var dSeen = Object.create(null);
      for (var di = 0; di < Dictionary.length; di++) {
        if (Dictionary[di] && Dictionary[di].id) dSeen[Dictionary[di].id] = true;
      }
      for (var dj = 0; dj < window.CCE_DICTIONARY.length; dj++) {
        var wd = window.CCE_DICTIONARY[dj];
        if (wd && wd.id && !dSeen[wd.id]) {
          dSeen[wd.id] = true;
          Dictionary.push(wd);
        }
      }
    }
  }
  const LearningResearch = window.CCE_LEARNING_RESEARCH;
  const Museum = window.CCE_MUSEUM;
  const Paintings = window.CCE_PAINTINGS || { masterpieces: [], eras: [], genres: [], comparisons: [], museums: [] };
  const PaintingsList = Array.isArray(Paintings.masterpieces) ? Paintings.masterpieces : [];
  const EditorialMedia = window.CCE_EDITORIAL_MEDIA;
  const Intelligence = window.CCE_INTELLIGENCE || {};
  const Compendia = window.CCE_COMPENDIA || {};
  function getForbiddenCity3D() {
    return window.CCE_FORBIDDEN_CITY_3D || null;
  }
  const Lazy = window.CCE_LAZY || null;
  const CceRouter = window.CCE_ROUTER || null;
  const CceSearch = window.CCE_SEARCH || null;

  function hydratePageBundles(pageId, uiLang, extraFlags) {
    if (!Lazy || typeof Lazy.ensureForState !== "function") return Promise.resolve();
    const hadUnloaded = typeof Lazy.hasUnloaded === "function" ? Lazy.hasUnloaded(pageId, uiLang, extraFlags) : false;
    return Lazy.ensureForState(pageId, uiLang, extraFlags).then(() => {
      syncArticlesRef();
      if (hadUnloaded) {
        if (CceSearch && typeof CceSearch.markDirty === "function") CceSearch.markDirty();
        render();
      }
    });
  }
  const TravelReadiness = window.CCE_TRAVEL_READINESS || null;
  const WeeklyUpdates = window.CCE_WEEKLY_UPDATES || null;

  // Register Flagship Interactive 3D Forbidden City Dissection Treatise into Articles
  if (Array.isArray(Articles) && !Articles.some((a) => a.id === "forbidden-city-3d-dissection")) {
    Articles.unshift({
      id: "forbidden-city-3d-dissection",
      number: 0,
      isFeatured3D: true,
      category: "arts",
      categoryLabel: "Kiến trúc Hoàng gia & Giải phẫu 3D",
      titleVi: "Giải phẫu 3D Tử Cấm Thành (紫禁城): Đấu Củng, Trục Đế Vương & Đối Sánh Cố Đô Huế",
      titleEn: "3D Dissection of the Forbidden City (紫禁城): Dougong Joinery, Imperial Axis & Hue Citadel Comparison",
      titleZh: "紫禁城三维解剖：斗拱、中轴线与东亚宫殿架构比较",
      readMinutes: 16,
      periodId: "ming-qing",
      regionId: "north",
      heroImage: {
        src: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
        caption: "Trục Thần Đạo Tử Cấm Thành (紫禁城) nhìn qua cổng son đinh đồng Cửu Hoành Cửu Tung (9×9) thẳng tới Thái Hòa Điện trên Tam Đài Hán Bạch Ngọc",
        credit: "Chinese Culture Explorer 3D & Archival Photography"
      },
      introduction: "Khởi công năm 1406 dưới triều Minh Vĩnh Lạc trên diện tích 724.250 m² (960 m × 750 m), Tử Cấm Thành (紫禁城) là quần thể kiến trúc gỗ cổ đại lớn nhất hành tinh còn tồn tại. Chuyên luận 3D này tổ chức 10 phân khu hạt nhân dọc trục Nam–Bắc cùng kỹ thuật giải phẫu không gian 3 trạng thái để mổ xẻ hệ mái Trọng Diêm Phi Diềm, 10 linh thú nóc, cụm mộng Đấu Củng không đinh, ba tầng bệ đá Tu Di Tọa và đối chiếu trực tiếp với Điện Thái Hòa – Ngọ Môn Kinh thành Huế.",
      historicalContext: "Truyền thuyết dân gian gán cho Cố Cung 9.999,5 gian phòng (kém Thiên Đình nửa gian theo quy chuẩn tối cao). Tuy nhiên khảo sát thực tế của Bảo tàng Cố Cung xác định con số thực là 8.886 gian trong 980 tòa kiến trúc. Hơn nữa, từ năm 1722 (vua Ung Chính), trung tâm điều hành thực tế đã dịch chuyển từ đại điện Càn Thanh Cung sang khu chữ Công Dưỡng Tâm Điện ở phía Tây Nội Đình sát Quân Cơ Xứ.",
      mainContent: [
        {
          heading: "1. Trục Kiến trúc Vũ trụ & Hệ Lưới 10 Phân Khu Hạt Nhân (001–010)",
          body: "Tử Cấm Thành tổ chức 10 cụm cung điện hạt nhân (001–010) dọc trục Nam–Bắc nghiêm ngặt: từ Ngọ Môn chữ U (38 m), Nội Kim Thủy Hà & 5 cầu đá Hán Bạch Ngọc, Tam Đại Điện (Thái Hòa – Trung Hòa – Bảo Hòa) đến Hậu Tam Cung, Dưỡng Tâm Điện, Cửu Long Bích 270 mảnh lưu ly, Đông–Tây Lục Cung và Ngự Hoa Viên 12.000 m²."
        },
        {
          heading: "2. Kỹ nghệ Kết cấu Gỗ Đấu Củng (斗拱), Cột Nam Mộc & 80 Triệu Viên Gạch",
          body: "Khung cột xà hoàn toàn không dùng đinh sắt mà liên kết qua cụm mộng Đấu Củng 3 tầng (đầu công chồng khóa) giúp phân tán năng lượng động đất cực mạnh. Mái Trọng Diêm Vũ Điện của Thái Hòa Điện mang 10 linh thú góc mái — con số tối đa duy nhất toàn Đế chế — đặt trên tam đài Hán Bạch Ngọc có 1.142 đầu rồng Ly Thủ thoát nước mưa chống ngập."
        },
        {
          heading: "3. Đối thoại Kiến trúc Đông Á: Tử Cấm Thành Bắc Kinh – Đại Nội Kinh Thành Huế",
          body: "Kinh thành Huế (1804–1833) kế thừa nguyên lý Ngọ Môn chữ U và Điện Thái Hòa trên trục hướng Nam ('Tả Tổ Hữu Xã, Tiền Triều Hậu Thị'), đồng thời bản địa hóa tinh tế với hồ Thái Dịch xanh mát, mái Trùng thiềm Điệp ốc và pháp lam ngũ sắc hòa hợp khí hậu nhiệt đới Việt Nam."
        }
      ],
      keyTakeaways: [
        "Giải phẫu số liệu kiến trúc: 9.999,5 gian (truyền thuyết Cửu Ngũ) vs 8.886 gian khảo sát thực tế; dịch chuyển quyền lực thực tế từ Càn Thanh Cung sang Dưỡng Tâm Điện năm 1722.",
        "Mô hình WebGL 3D tương tác (nằm ngay trên trang này) cho phép bật X-Ray tách mái Trọng Diêm – Đấu Củng 3 bậc để lộ 6 cột rồng vàng Nam mộc & Cửu Long Bảo Tọa.",
        "Hành trang thực địa Bắc Kinh: bắt buộc đặt vé Tử Cấm Thành bằng hộ chiếu trước 7 ngày lúc 20:00 (giờ Bắc Kinh) và đi tuyến một chiều vào Nam Ngọ Môn – ra Bắc Thần Vũ Môn."
      ],
      terminologyIds: ["dougong", "zhongyan-wudian", "jinxiang-doudicao", "xumizuo"],
      examples: [
        "Thực hành ngay trên mô hình 3D ở đầu bài: chọn 'Bóc tách X-Ray Đấu Củng' và kéo thanh nâng mái lên 82% để quan sát hàng cột Nam Mộc vàng và Gương Hiên Viên.",
        "Bôi đen thuật ngữ bất kỳ (như 斗拱, 须弥座, Dưỡng Tâm Điện) để lưu trực tiếp kèm câu ngữ cảnh vào Sổ tay Từ vựng & Ghi chú."
      ],
      conclusion: "Từ nghệ thuật mộc công Đấu Củng thế kỷ XV tại Bắc Kinh đến Điện Thái Hòa – Ngọ Môn đất Thần Kinh Huế, kiến trúc cung đình Đông Á luôn dùng hình học không gian, tỷ lệ gỗ đá và trục vũ trụ làm cầu nối trực quan giữa triết học, lịch sử và kỹ nghệ xây dựng.",
      relatedTopics: ["Kiến trúc Cổ điển", "Đấu Củng", "Cố Đô Huế", "Di sản UNESCO"],
      references: [
        {
          author: "The Palace Museum (故宫博物院) & Google Arts",
          date: "2024",
          title: "Architecture of the Forbidden City: Meridian Gate, Santai & Taihedian Timber Structure",
          url: "https://en.dpm.org.cn/",
          sourceType: "Bảo tàng Quốc gia",
          verificationNote: "Đối chiếu kích thước 960×750 m, 8.886 gian, 1.142 đầu rồng Ly Thủ và tảng đá Vân Long 250 tấn."
        },
        {
          author: "UNESCO World Heritage Centre",
          date: "1987–2024",
          title: "Imperial Palaces of the Ming and Qing Dynasties in Beijing and Shenyang (Criterion I, II, III, IV)",
          url: "https://whc.unesco.org/en/list/439/",
          sourceType: "Tư liệu Di sản Thế giới",
          verificationNote: "Hồ sơ ghi danh Di sản Thế giới UNESCO đối chiếu kiến trúc cung đình và quy hoạch trục trung tâm Đông Á."
        }
      ]
    });
  }

  let _lastSortedArtLen = -1;
  function ensureNewestArticlesOrder() {
    if (!Array.isArray(Articles) || Articles.length === _lastSortedArtLen) return;
    const priorityRank = (a) => {
      if (a.id === "temple-of-heaven-tiantan-cosmology-3d") return 100000;
      if (a.id === "forbidden-city-3d-dissection") return 99999;
      if (a.isFeatured3D) return 99990;
      return Number(a.number || 0);
    };
    Articles.sort((a, b) => priorityRank(b) - priorityRank(a));
    _lastSortedArtLen = Articles.length;
  }
  ensureNewestArticlesOrder();
  const Brand = window.CCE_BRAND || {
    projectName: "CHINESE CULTURE EXPLORER",
    projectNameZh: "中国文化探索",
    projectFullTitle: "CHINESE CULTURE EXPLORER – 中国文化探索",
    founderName: "Lê Hưng Thịnh",
    founderRole: "Founder & Creator",
    foundedByStatement: "Founded and created by Lê Hưng Thịnh",
    officialTagline: "Explore Chinese Civilization. Understand Its Philosophy. Discover Its Culture.",
    secondaryStatementEn: "Beyond Knowledge. Toward Understanding. Across Cultures.",
    secondaryStatementVi: "Vượt lên trên việc tiếp nhận kiến thức. Hướng đến sự thấu hiểu. Kết nối những nền văn hóa.",
    secondaryStatementZh: "超越知识，走向理解，连接不同文明。",
    copyrightNoticeFull: `Copyright © ${new Date().getFullYear()} Lê Hưng Thịnh. All Rights Reserved.`,
    copyrightNoticeShort: `© ${new Date().getFullYear()} Lê Hưng Thịnh. All Rights Reserved.`,
    assets: {
      favicon: "assets/images/brand/favicon.svg",
      logoHorizontal: "assets/images/brand/brand-logo-horizontal.svg",
      founderSeal: "assets/images/brand/founder-signature-seal.svg"
    }
  };

  const ICONS = {
    search: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7.5"/><path d="M20 20l-4.2-4.2"/></svg>`,
    sun: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>`,
    moon: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>`,
    user: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
    menu: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>`,
    close: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>`,
    chevronDown: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.82rem;height:0.82rem;"><path d="M6 9l6 6 6-6"/></svg>`,
    museum: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M4 18h16M6 18v-7M10 18v-7M14 18v-7M18 18v-7M12 3l9 5H3l9-5z"/></svg>`,
    palette: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
    scales: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M6 8l6-3 6 3M3 14l3-6 3 6a3 3 0 01-6 0zM15 14l3-6 3 6a3 3 0 01-6 0z"/></svg>`,
    compass: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>`,
    book: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
    mapPin: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    play: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><polygon points="6 4 20 12 6 20 6 4"/></svg>`,
    pause: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>`,
    grid: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>`,
    list: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>`,
    feather: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z"/><path d="M16 8L2 22M17.5 15H9"/></svg>`,
    volume: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.88rem;height:0.88rem;"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/><path d="M19.07 4.93a10 10 0 010 14.14"/></svg>`,
    bookmark: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.86rem;height:0.86rem;"><path d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"/></svg>`,
    zoom: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.86rem;height:0.86rem;"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.35-4.35M11 8v6M8 11h6"/></svg>`,
    share: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.86rem;height:0.86rem;"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98"/></svg>`,
    download: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.86rem;height:0.86rem;"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>`,
    fileText: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.86rem;height:0.86rem;"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>`,
    check: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.84rem;height:0.84rem;"><path d="M20 6L9 17l-5-5"/></svg>`,
    lock: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.95rem;height:0.95rem;"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>`,
    bell: `<svg class="svg-icon" viewBox="0 0 24 24" aria-hidden="true" style="width:0.95rem;height:0.95rem;"><path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 01-3.46 0"/></svg>`,
    google: `<svg viewBox="0 0 24 24" aria-hidden="true" style="width:1rem;height:1rem;flex-shrink:0;"><path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/><path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z"/><path fill="#FBBC05" d="M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z"/><path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z"/></svg>`
  };

  // 6-Pillar Single-Line Desktop Navigation (Editorial & Digital Museum Architecture)
  const NAV_ITEMS = [
    { id: "explore", zh: "历史探索", vi: "Khám phá", en: "EXPLORE", zhCN: "历史探索", zhTW: "歷史探索", hasMega: true, activePages: ["explore", "history"] },
    { id: "philosophy", zh: "哲学文献", vi: "Tư tưởng", en: "THOUGHT", zhCN: "哲学文献", zhTW: "哲學文獻", hasMega: true, activePages: ["philosophy", "traditional"] },
    { id: "paintings", zh: "博物艺术", vi: "Bảo tàng", en: "MUSEUM", zhCN: "博物艺术", zhTW: "博物藝術", hasMega: true, activePages: ["paintings", "museum"] },
    { id: "regions", zh: "中华地域", vi: "Địa văn hóa", en: "ATLAS", zhCN: "中华地域", zhTW: "中華地域", hasMega: true, activePages: ["regions"] },
    { id: "sino-vietnam", zh: "中越商贸", vi: "Trung – Việt", en: "SINO-VIET", zhCN: "中越商贸", zhTW: "中越商貿", hasMega: true, activePages: ["sino-vietnam", "business"] },
    { id: "learning", zh: "学研字典", vi: "Học tập", en: "STUDY", zhCN: "学研字典", zhTW: "學研字典", hasMega: true, activePages: ["learning", "library", "about", "legal"] }
  ];

  function isNavItemActive(item, state) {
    const ap = state.activePage;
    if (ap === "article") {
      const art = Articles.find((a) => a.id === ui.activeArticleId);
      const cat = art ? art.category : "";
      if (cat === "sino-vietnam" || cat === "business") return item.id === "sino-vietnam";
      if (cat === "philosophy" || cat === "metaphysics" || cat === "religion-folk") return item.id === "philosophy";
      return item.id === "explore";
    }
    return Array.isArray(item.activePages) ? item.activePages.includes(ap) : ap === item.id;
  }

  const UI_I18N = {
    vi: {
      mastheadNote: "ẤN PHẨM BÁCH KHOA VĂN HIẾN & BẢO TÀNG SỐ ĐÔNG Á",
      searchBtn: "Tìm kiếm",
      searchPlaceholder: "Tìm sử liệu, triết học, từ vựng, 34 tỉnh, hiện vật...",
      themeLight: "Tuyên Chỉ",
      themeDark: "Thạch Nghiên",
      scriptBothLabel: "Giản/Phồn",
      scriptSimpLabel: "Giản thể",
      profileLabel: "Hồ sơ",
      langChangedToast: "Đã chuyển giao diện Tiếng Việt",
      heroKicker: "",
      heroHeadlineEn: "Explore the Depth of Chinese Civilization",
      heroHeadlineZh: "探索中华文明的深度",
      heroHeadlineVi: "Khám phá chiều sâu văn minh Trung Hoa",
      heroLeadEn: "Discover the history, philosophy, arts, traditions and intellectual heritage of China through an interconnected world of knowledge.",
      heroLeadVi: "Bảo tàng số, bách khoa văn hiến Đông Á và phòng học Hán ngữ chủ động dành cho người học Việt Nam: Sử học, Triết học, Thuật số, Trung – Việt và Kinh doanh Quốc tế.",
      heroExploreCta: "Bước vào thư phòng và bảo tàng →",
      heroMuseumCta: "Ngắm tranh trường quyển",
      heroFounderCta: "Lời người sáng lập (Lê Hưng Thịnh)",
      plateGreatWall: "I. Vạn Lý Trường Thành",
      plateJiangshan: "II. Giang Sơn Đa Kiều",
      plateQianli: "III. Thiên Lý Giang Sơn",
      plateZoomHint: "Nhấn vào ảnh để mở Không gian Bảo tàng và Điểm nhấn chi tiết",
      z2Kicker: "",
      z2Title: "Chuyên luận khảo cứu tiêu điểm",
      z2ViewAll: "Xem toàn bộ",
      z2EssaysUnit: "chuyên luận",
      z2ReadFull: "Đọc chuyên luận đầy đủ →",
      z2ReadUnit: "phút đọc",
      tabFeatured: "Nổi bật",
      tabHistory: "Lịch sử",
      tabPhilosophy: "Triết học",
      tabMetaphysics: "Thuật số",
      tabArts: "Thư họa",
      tabRegions: "Địa văn hóa",
      tabSinoVn: "Trung – Việt",
      tabBusiness: "Thương mại",
      z3Kicker: "",
      z3Title: "Địa phương chí 34 tỉnh, khu tự trị và đô thị Trung Hoa",
      z3ViewAll: "Mở danh bạ toàn quốc →",
      z3All: "Tất cả",
      z3Mun: "4 Đô thị TW",
      z3Prov: "23 Tỉnh",
      z3Auto: "5 Khu tự trị",
      z3Sar: "2 Đặc khu",
      z3Capital: "Thủ phủ",
      z3Heritage: "Di sản",
      z3Signature: "Đặc trưng",
      z3OpenDossier: "Mở hồ sơ tỉnh thành →",
      z3CompareBtn: "Đối chiếu 2 tỉnh thành",
      z4Kicker: "",
      z4Title: "Tranh trường quyển và bảo vật bảo tàng",
      z4PaintingsLabel: "Quốc họa",
      z4ArtifactsLabel: "Bảo vật",
      z5Kicker: "",
      z5Title: "Chiết tự Lục thư và đối chiếu văn hóa Việt – Trung",
      z5OpenAnki: "Mở Từ điển & Sổ tay Ngữ cảnh →",
      z5DailyLabel: "MỤC TỪ LỤC THƯ HÔM NAY",
      z5ZeroPinyinHint: "Nhận diện Hán tự · Đối chiếu Hán–Việt & Ngữ cảnh",
      z5SoundMeaning: "Âm & Nghĩa",
      z5Liushu: "Lục thư",
      z5Radical: "Bộ thủ",
      z5Mnemonic: "Chiết tự",
      z5Context: "Ngữ cảnh",
      z5SaveCard: "+ Lưu vào Sổ tay",
      z5SavedCard: "Đã lưu vào Sổ tay",
      z5InspectCard: "Mở Phiếu Lục thư →",
      z5BridgeHeading: "TRỤC ĐỐI CHIẾU TRUNG – VIỆT & KINH DOANH ĐÔNG Á",
      z5MethodTag: "KHUNG PHƯƠNG PHÁP LUẬN • 3 TẦNG TIẾP BIẾN",
      z5OpenBridge: "Khám phá Giao lưu Trung – Việt →",
      z5OpenBusiness: "Khám phá Kinh doanh B2B →",
      searchModalTitle: "Tra cứu Nâng cao & Khám phá Đa ngôn ngữ",
      searchModalPlaceholder: "Nhập tiếng Việt, Anh, Hán giản/phồn thể hoặc Pinyin (vd: Nho giáo, 儒家, Bắc Kinh, 科举)...",
      searchSuggested: "Từ khóa đề xuất đa ngữ:",
      searchRecent: "Lịch sử tìm kiếm gần đây",
      searchClearHistory: "Xóa lịch sử",
      searchClearFilters: "Xóa bộ lọc",
      searchLoadMore: "Tải thêm kết quả",
      footerSubtitle: "Nền tảng bách khoa văn hiến, bảo tàng số và nghiên cứu độc lập.",
      footerColExplore: "Khám phá Học thuật",
      footerColLearning: "Học tập & Bảo tàng",
      footerColAbout: "Về Dự án & Biên tập",
      footerColLegal: "Pháp lý & Bản quyền",
      fHistory: "Lịch sử",
      fPeriodsUnit: "Thời kỳ",
      fEventsUnit: "Sự kiện",
      fPhilosophy: "Triết học",
      fSchoolsUnit: "Trường phái",
      fTextsUnit: "Kinh điển",
      fMetaTcm: "Thuật số & Đông y",
      fSystemsUnit: "Hệ thống",
      fCustomsArts: "Phong tục & Nghệ thuật",
      fTopicsUnit: "Chủ đề",
      fRegions: "Địa văn hóa (6 Vùng • 16 Đô thị • 34 Tỉnh/Thành)",
      fSinoVn: "Giao lưu Trung – Việt",
      fThemesUnit: "Chuyên đề",
      fBusiness: "Văn hóa Kinh doanh",
      fMuseum: "Bảo tàng Số",
      fMasterpiecesUnit: "Bảo vật",
      fDict: "Từ điển Văn hóa",
      fEntriesUnit: "Mục từ",
      fFlashcards: "Sổ tay Từ vựng & Xuất CSV/TSV",
      fKmap: "Bản đồ Tri thức",
      fNodesUnit: "Nút",
      fLibrary: "Thư viện Nghiên cứu & Nguyên văn",
      fPaths: "Lộ trình Học tập (6 Hành trình)",
      fJournal: "Ghi chú & Nhật ký Học tập",
      fAboutIntro: "Giới thiệu Dự án",
      fFounderMsg: "Lời nhắn Nhà sáng lập",
      fEditorialStd: "Chuẩn mực Biên tập & Phương pháp luận",
      fSourcePolicy: "Chính sách Kiểm chứng Nguồn",
      fContact: "Liên hệ & Phản hồi Học thuật",
      fCopyright: "Thông báo Bản quyền",
      fTerms: "Điều khoản Sử dụng",
      fPrivacy: "Chính sách Quyền riêng tư",
      fLicensing: "Giấy phép Nội dung",
      fImgCredits: "Nguồn ảnh & Quyền tác giả",
      fDisclaimer: "Báo cáo SHTT & Miễn trừ"
    },
    en: {
      mastheadNote: "EAST ASIAN ENCYCLOPEDIC EDITION & DIGITAL MUSEUM",
      searchBtn: "Search",
      searchPlaceholder: "Search archives, philosophy, terms, 34 provinces, artifacts...",
      themeLight: "Xuan Paper",
      themeDark: "Inkstone",
      scriptBothLabel: "Simp/Trad",
      scriptSimpLabel: "Simplified",
      profileLabel: "My Account",
      langChangedToast: "Interface, Monographs & Dictionary switched to English",
      heroKicker: "",
      heroExploreCta: "Enter the Reading Room & Gallery →",
      heroFounderCta: "Founder's Note (Lê Hưng Thịnh)",
      heroHeadlineEn: "Explore the Depth of Chinese Civilization",
      heroHeadlineZh: "探索中华文明的深度",
      heroHeadlineVi: "Academic Encyclopedia & Digital Cultural Museum",
      heroLeadEn: "Discover the history, philosophy, arts, traditions and intellectual heritage of China through an interconnected world of knowledge.",
      heroLeadVi: "An independent multilingual workspace uniting 65 full-text English monographs, 54 master paintings, digital museum relics, and 34 provincial cultural & travel readiness dossiers.",
      heroExploreCta: "Enter the Reading Room & Gallery →",
      heroMuseumCta: "Open Painting Museum",
      heroFounderCta: "Founder's Note (Lê Hưng Thịnh)",
      plateGreatWall: "I. Great Wall of China",
      plateJiangshan: "II. Rivers & Mountains",
      plateQianli: "III. A Thousand Li of Rivers",
      plateZoomHint: "Click plate to open High-Res Museum & Hotspot Inspector",
      z2Kicker: "",
      z2Title: "Featured Reading Room",
      z2ViewAll: "Browse all",
      z2EssaysUnit: "essays",
      z2ReadFull: "Read full monograph →",
      z2ReadUnit: "min read",
      tabFeatured: "Featured",
      tabHistory: "History",
      tabPhilosophy: "Philosophy",
      tabMetaphysics: "Cosmology",
      tabArts: "Calligraphy & Art",
      tabRegions: "Regional Atlas",
      tabSinoVn: "Sino–Vietnam",
      tabBusiness: "Trade & B2B",
      z3Kicker: "",
      z3Title: "Cultural Atlas of 34 Chinese Provinces & Municipalities",
      z3ViewAll: "Open National Directory →",
      z3All: "All",
      z3Mun: "4 Municipalities",
      z3Prov: "23 Provinces",
      z3Auto: "5 Autonomous",
      z3Sar: "2 SARs",
      z3Capital: "Capital",
      z3Heritage: "Heritage",
      z3Signature: "Highlights",
      z3OpenDossier: "Open Provincial Dossier →",
      z3CompareBtn: "Compare 2 Provinces",
      z4Kicker: "",
      z4Title: "Handscroll Paintings & Museum Treasures",
      z4PaintingsLabel: "Paintings",
      z4ArtifactsLabel: "Artifacts",
      z5Kicker: "",
      z5Title: "Liushu Character Roots & Sino-Vietnamese Parallels",
      z5OpenAnki: "Open Vocabulary & Reading Notebook →",
      z5DailyLabel: "DAILY LIUSHU SPECIMEN",
      z5ZeroPinyinHint: "Character Recognition · Six Scripts & Contextual Gloss",
      z5SoundMeaning: "Reading & Gloss",
      z5Liushu: "Liushu Class",
      z5Radical: "Radicals",
      z5Mnemonic: "Etymology",
      z5Context: "Context",
      z5SaveCard: "+ Save to Notebook",
      z5SavedCard: "Saved in Notebook",
      z5InspectCard: "Open Character Card →",
      z5BridgeHeading: "SINO–VIETNAMESE PARALLELS & REGIONAL TRADE",
      z5MethodTag: "ANALYTICAL FRAMEWORK • 3-STAGE CULTURAL ADAPTATION",
      z5OpenBridge: "Explore Sino–Vietnam Bridge →",
      z5OpenBusiness: "Explore Business & RCEP →",
      searchModalTitle: "Global Multilingual Archive Search",
      searchModalPlaceholder: "Type English, Vietnamese, Hanzi or Pinyin (e.g. Confucianism, 儒家, Beijing, 科举)...",
      searchSuggested: "Multilingual Quick Queries:",
      searchRecent: "Recent Search History",
      searchClearHistory: "Clear history",
      searchClearFilters: "Reset filters",
      searchLoadMore: "Load more results",
      footerSubtitle: "Independent East Asian scholarly encyclopedia & digital museum archive.",
      footerColExplore: "Academic Explore",
      footerColLearning: "Study & Digital Museum",
      footerColAbout: "About & Editorial Policy",
      footerColLegal: "Legal & Copyright",
      fHistory: "History",
      fPeriodsUnit: "Periods",
      fEventsUnit: "Events",
      fPhilosophy: "Philosophy",
      fSchoolsUnit: "Schools",
      fTextsUnit: "Texts",
      fMetaTcm: "Metaphysics & TCM",
      fSystemsUnit: "Systems",
      fCustomsArts: "Customs & Arts",
      fTopicsUnit: "Topics",
      fRegions: "Regions (6 Regions • 16 Cities • 34 Provinces)",
      fSinoVn: "China–Vietnam",
      fThemesUnit: "Themes",
      fBusiness: "Business Culture",
      fMuseum: "Digital Museum",
      fMasterpiecesUnit: "Masterpieces",
      fDict: "Cultural Dictionary",
      fEntriesUnit: "Entries",
      fFlashcards: "Vocabulary & Reading Notebook (CSV/TSV)",
      fKmap: "Knowledge Map",
      fNodesUnit: "Nodes",
      fLibrary: "Research Library & Primary Texts",
      fPaths: "Learning Paths (6 Curated Journeys)",
      fJournal: "My Notes & Study Journal",
      fAboutIntro: "About the Project",
      fFounderMsg: "Founder's Message",
      fEditorialStd: "Editorial Standards & Methodology",
      fSourcePolicy: "Source Verification Policy",
      fContact: "Contact & Academic Feedback",
      fCopyright: "Copyright Notice",
      fTerms: "Terms of Use",
      fPrivacy: "Privacy Policy",
      fLicensing: "Content Licensing",
      fImgCredits: "Image Credits & Attribution",
      fDisclaimer: "IP Reporting & Disclaimer"
    },
    "zh-CN": {
      mastheadNote: "东亚文献百科与数字文化博物馆 · 独立学术平台",
      searchBtn: "全站检索",
      searchPlaceholder: "检索史料、哲学、汉字词汇、34省区与文物...",
      themeLight: "宣纸白",
      themeDark: "石砚黑",
      scriptBothLabel: "简/繁对照",
      scriptSimpLabel: "仅简体",
      profileLabel: "我的学习档案",
      langChangedToast: "已切换至简体中文界面",
      heroKicker: "",
      heroHeadlineEn: "Explore the Depth of Chinese Civilization",
      heroHeadlineZh: "探索中华文明的深度",
      heroHeadlineVi: "中华文化探索：数字博物馆与学术文献平台",
      heroLeadEn: "Discover the history, philosophy, arts, traditions and intellectual heritage of China through an interconnected world of knowledge.",
      heroLeadVi: "汇集中国历史文明、诸子哲学、传统术数、传世国画、34省级行政区志与中越比较研究（深度解析保留中越英三语对照体系）。",
      heroExploreCta: "步入书房与数字馆藏 →",
      heroMuseumCta: "步入传世国画馆",
      heroFounderCta: "创始人寄语（黎兴盛）",
      plateGreatWall: "I. 万里长城云海图",
      plateJiangshan: "II. 江山如此多娇",
      plateQianli: "III. 千里江山图",
      plateZoomHint: "点击图版开启博物馆高精赏析与重点标注",
      z2Kicker: "",
      z2Title: "精选深度专论",
      z2ViewAll: "查看全部",
      z2EssaysUnit: "篇专论",
      z2ReadFull: "阅读全文 →",
      z2ReadUnit: "分钟阅读",
      tabFeatured: "精选",
      tabHistory: "历史",
      tabPhilosophy: "哲学",
      tabMetaphysics: "术数养生",
      tabArts: "书画文物",
      tabRegions: "地理方志",
      tabSinoVn: "中越交融",
      tabBusiness: "经贸商道",
      z3Kicker: "",
      z3Title: "中国三十四省区市人文地理志",
      z3ViewAll: "打开全国名录 →",
      z3All: "全部",
      z3Mun: "4 直辖市",
      z3Prov: "23 省",
      z3Auto: "5 自治区",
      z3Sar: "2 特别行政区",
      z3Capital: "省会/中心",
      z3Heritage: "代表遗产",
      z3Signature: "风物特色",
      z3OpenDossier: "查看十二维度档案 →",
      z3CompareBtn: "双省区对比",
      z4Kicker: "",
      z4Title: "传世长卷名画与馆藏重器",
      z4PaintingsLabel: "传世国画",
      z4ArtifactsLabel: "馆藏文物",
      z5Kicker: "",
      z5Title: "六书析字与中越文明对照",
      z5OpenAnki: "进入语境词汇笔记本 →",
      z5DailyLabel: "今日精选汉字词卡",
      z5ZeroPinyinHint: "六书拆解与上下文笔记",
      z5SoundMeaning: "音义汉越",
      z5Liushu: "六书分类",
      z5Radical: "部首结构",
      z5Mnemonic: "字理记忆",
      z5Context: "语境例句",
      z5SaveCard: "+ 收入笔记本",
      z5SavedCard: "已存入笔记本",
      z5InspectCard: "查看详细六书卡片 →",
      z5BridgeHeading: "中越文明互鉴与东亚商贸前沿",
      z5MethodTag: "研究方法论 • 三层文化本土化",
      z5OpenBridge: "探索中越文化交流 →",
      z5OpenBusiness: "探索中越商贸实务 →",
      searchModalTitle: "多语种跨库学术检索",
      searchModalPlaceholder: "输入简体、繁体、拼音、越文或英文（如：儒家、科举、北京、Thanh Hoa）...",
      searchSuggested: "推荐多语关键词：",
      searchRecent: "最近检索记录",
      searchClearHistory: "清空记录",
      searchClearFilters: "重置筛选",
      searchLoadMore: "加载更多结果",
      footerSubtitle: "独立运行的中华文明百科、数字博物馆与中越比较研究平台。",
      footerColExplore: "学术板块导航",
      footerColLearning: "学习工具与馆藏",
      footerColAbout: "关于项目与学术规范",
      footerColLegal: "版权与合规声明",
      fHistory: "中国通史",
      fPeriodsUnit: "时期",
      fEventsUnit: "事件",
      fPhilosophy: "诸子哲学",
      fSchoolsUnit: "流派",
      fTextsUnit: "典籍",
      fMetaTcm: "传统术数与中医",
      fSystemsUnit: "体系",
      fCustomsArts: "民俗与艺术",
      fTopicsUnit: "专题",
      fRegions: "地域文化（6大区 • 16城市 • 34省级单位）",
      fSinoVn: "中越文明互鉴",
      fThemesUnit: "专题",
      fBusiness: "中华商业文化",
      fMuseum: "数字博物馆",
      fMasterpiecesUnit: "馆藏文物",
      fDict: "文化辞典",
      fEntriesUnit: "词条",
      fFlashcards: "语境词汇笔记本与 CSV/TSV 导出",
      fKmap: "知识图谱",
      fNodesUnit: "节点",
      fLibrary: "文献图书馆与原典",
      fPaths: "学习路径（6条专题路线）",
      fJournal: "个人笔记与学习日志",
      fAboutIntro: "项目简介",
      fFounderMsg: "创办人寄语",
      fEditorialStd: "编辑规范与方法论",
      fSourcePolicy: "史料核查政策",
      fContact: "学术联系与反馈",
      fCopyright: "版权声明",
      fTerms: "使用条款",
      fPrivacy: "隐私政策",
      fLicensing: "内容授权协议",
      fImgCredits: "图像来源与署名",
      fDisclaimer: "知识产权与免责声明"
    },
    "zh-TW": {
      mastheadNote: "東亞文獻百科與數位文化博物館 · 獨立學術平台",
      searchBtn: "全站檢索",
      searchPlaceholder: "檢索史料、哲學、漢字詞彙、34省區與文物...",
      themeLight: "宣紙白",
      themeDark: "石硯黑",
      scriptBothLabel: "簡/繁對照",
      scriptSimpLabel: "簡體優先",
      profileLabel: "我的學習檔案",
      langChangedToast: "已切換至繁體中文介面",
      heroKicker: "",
      heroHeadlineEn: "Explore the Depth of Chinese Civilization",
      heroHeadlineZh: "探索中華文明的深度",
      heroHeadlineVi: "中華文化探索：數位博物館與學術文獻平台",
      heroLeadEn: "Discover the history, philosophy, arts, traditions and intellectual heritage of China through an interconnected world of knowledge.",
      heroLeadVi: "匯集中國歷史文明、諸子哲學、傳統術數、傳世國畫、34省級行政區志與中越比較研究（深度解析保留中越英繁簡對照體系）。",
      heroExploreCta: "步入書房與數位館藏 →",
      heroMuseumCta: "步入傳世國畫館",
      heroFounderCta: "創始人寄語（黎興盛）",
      plateGreatWall: "I. 萬里長城雲海圖",
      plateJiangshan: "II. 江山如此多嬌",
      plateQianli: "III. 千里江山圖",
      plateZoomHint: "點擊圖版開啟博物館高精賞析與重點標註",
      z2Kicker: "",
      z2Title: "精選深度專論",
      z2ViewAll: "查看全部",
      z2EssaysUnit: "篇專論",
      z2ReadFull: "閱讀全文 →",
      z2ReadUnit: "分鐘閱讀",
      tabFeatured: "精選",
      tabHistory: "歷史",
      tabPhilosophy: "哲學",
      tabMetaphysics: "術數養生",
      tabArts: "書畫文物",
      tabRegions: "地理方志",
      tabSinoVn: "中越交融",
      tabBusiness: "經貿商道",
      z3Kicker: "",
      z3Title: "中國三十四省區市人文地理志",
      z3ViewAll: "打開全國名錄 →",
      z3All: "全部",
      z3Mun: "4 直轄市",
      z3Prov: "23 省",
      z3Auto: "5 自治區",
      z3Sar: "2 特別行政區",
      z3Capital: "省會/中心",
      z3Heritage: "代表遺產",
      z3Signature: "風物特色",
      z3OpenDossier: "查看十二維度檔案 →",
      z3CompareBtn: "雙省區對比",
      z4Kicker: "",
      z4Title: "傳世長卷名畫與館藏重器",
      z4PaintingsLabel: "傳世國畫",
      z4ArtifactsLabel: "館藏文物",
      z5Kicker: "",
      z5Title: "六書析字與中越文明對照",
      z5OpenAnki: "進入語境詞彙筆記本 →",
      z5DailyLabel: "今日精選漢字詞卡",
      z5ZeroPinyinHint: "六書拆解與上下文筆記",
      z5SoundMeaning: "音義漢越",
      z5Liushu: "六書分類",
      z5Radical: "部首結構",
      z5Mnemonic: "字理記憶",
      z5Context: "語境例句",
      z5SaveCard: "+ 收入筆記本",
      z5SavedCard: "已存入筆記本",
      z5InspectCard: "查看詳細六書卡片 →",
      z5BridgeHeading: "中越文明互鑑與東亞商貿前沿",
      z5MethodTag: "研究方法論 • 三層文化本土化",
      z5OpenBridge: "探索中越文化交流 →",
      z5OpenBusiness: "探索中越商貿實務 →",
      searchModalTitle: "多語種跨庫學術檢索",
      searchModalPlaceholder: "輸入繁體、簡體、拼音、越文或英文（如：儒家、科舉、北京、Thanh Hoa）...",
      searchSuggested: "推薦多語關鍵詞：",
      searchRecent: "最近檢索記錄",
      searchClearHistory: "清空記錄",
      searchClearFilters: "重置篩選",
      searchLoadMore: "載入更多結果",
      footerSubtitle: "獨立運行的中華文明百科、數位博物館與中越比較研究平台。",
      footerColExplore: "學術板塊導航",
      footerColLearning: "學習工具與館藏",
      footerColAbout: "關於項目與學術規範",
      footerColLegal: "版權與合規聲明",
      fHistory: "中國通史",
      fPeriodsUnit: "時期",
      fEventsUnit: "事件",
      fPhilosophy: "諸子哲學",
      fSchoolsUnit: "流派",
      fTextsUnit: "典籍",
      fMetaTcm: "傳統術數與中醫",
      fSystemsUnit: "體系",
      fCustomsArts: "民俗與藝術",
      fTopicsUnit: "專題",
      fRegions: "地域文化（6大區 • 16城市 • 34省級單位）",
      fSinoVn: "中越文明互鑑",
      fThemesUnit: "專題",
      fBusiness: "中華商業文化",
      fMuseum: "數位博物館",
      fMasterpiecesUnit: "館藏文物",
      fDict: "文化辭典",
      fEntriesUnit: "詞條",
      fFlashcards: "語境詞彙筆記本與 CSV/TSV 匯出",
      fKmap: "知識圖譜",
      fNodesUnit: "節點",
      fLibrary: "文獻圖書館與原典",
      fPaths: "學習路徑（6條專題路線）",
      fJournal: "個人筆記與學習日誌",
      fAboutIntro: "項目簡介",
      fFounderMsg: "創辦人寄語",
      fEditorialStd: "編輯規範與方法論",
      fSourcePolicy: "史料核查政策",
      fContact: "學術聯繫與反饋",
      fCopyright: "版權聲明",
      fTerms: "使用條款",
      fPrivacy: "隱私政策",
      fLicensing: "內容授權協議",
      fImgCredits: "圖像來源與署名",
      fDisclaimer: "智慧財產權與免責聲明"
    }
  };

  // Ephemeral UI State
  const ui = {
    mapLayerMode: "regions",
    mapHsrFilters: [],
    selectedMapProvinceId: "prov-beijing",
    homeProvinceTypeFilter: "all",
    activeHotspotIdx: 0,
    homeJourneyFilter: "all",
    articleZenReading: false,
    mobileNavOpen: false,
    mobileExpandedGroup: "explore",
    activeMegaMenu: null, // null | "explore" | "philosophy" | "paintings" | "regions" | "sino-vietnam" | "learning"
    heroArtworkMode: "great-wall-masterpiece", // great-wall-masterpiece | jiangshan-masterpiece | qianli-masterpiece | ink-painting
    heroSearchText: "",
    heroAutocompleteOpen: false,
    activeRoleJourneyId: "visitor",
    homeDestSlideIdx: 0,
    homeJournalCat: "all",
    exploreQuery: "",
    exploreCategory: "all",
    explorePeriod: "all",
    exploreRegion: "all",
    exploreContentType: "all", // all | article | artifact | term | text
    exploreLanguage: "all", // all | trilingual | classical-zh
    exploreDifficulty: "all", // all | Foundation | Intermediate | Advanced
    exploreSourceType: "all", // all | Primary | Academic | Museum
    exploreSort: "featured", // featured (newest) | courseOrder | readTimeAsc | readTimeDesc | titleAsc
    exploreViewMode: "grid", // grid | list
    exploreLimit: 12,
    activePeriodId: "spring-autumn-warring",
    timelineFilter: "all",
    timelineLayout: "horizontal", // horizontal | vertical
    historyFigureMode: "key28", // key28 | prov115
    activeSchoolId: "confucianism",
    traditionalTab: "metaphysics", // metaphysics | customs | arts | contemporary
    activeRegionId: "east",
    activeCityId: "beijing",
    regionViewMode: "map", // map | destinations | directory
    activeDestHubId: "dest-beijing",
    activeDestAreaId: "bj-core-axis",
    provinceQuery: "",
    provinceRegionFilter: "all",
    provinceDims: [],
    museumCategory: "all",
    museumPeriodFilter: "all",
    museumViewMode: "grid", // grid | list
    museumQuery: "",
    activeArtifactId: null,
    lightboxOpen: false,
    paintingsEraFilter: "all",
    paintingsGenreFilter: "all",
    paintingsMuseumFilter: "all",
    paintingsAttributionFilter: "all",
    paintingsQuery: "",
    paintingsViewMode: "grid",
    paintingsSort: "chronological",
    activePaintingId: null,
    paintingDetailTab: "historical",
    paintingZoomOpen: false,
    paintingZoomScale: 1,
    paintingZenMode: false,
    paintingHandscrollMode: false,
    paintingCompareOpen: false,
    paintingCompareLeftId: "xishan-xinglv",
    paintingCompareRightId: "zao-chun-tu",
    activeProvinceId: null,
    provinceLayerTab: "all", // all | pulse | roots | travel
    provinceCompareOpen: false,
    provinceCompareLeftId: "prov-beijing",
    provinceCompareRightId: "prov-guangdong",
    onboardingDismissed: false,
    dailyIdx: 0,
    learningTab: "dashboard", // dashboard | dictionary | flashcards | kmap | quiz | journal | survival
    survivalPackFilter: "all",
    survivalZeroPinyin: true,
    revealedSurvivalIds: {},
    dictLevelFilter: "all",
    dictDeckFilter: "all",
    dictQuery: "",
    flashcardIdx: 0,
    flashcardFlipped: false,
    flashcardDeckMode: "all", // all | collected
    flashcardDeckFilter: "all",
    flashcardLevelFilter: "all",
    flashcardTopicFilter: "all",
    activeKgNodeId: "kg-confucian",
    quizAnswers: {},
    quizShortAnswers: {},
    quizSubmitted: false,
    editingNoteId: null,
    searchQuery: "",
    searchCategoryFilter: "all", // all | articles | terms | artifacts | periods | people | places | texts | research
    searchPeriodFilter: "all",
    searchRegionFilter: "all",
    searchLevelFilter: "all",
    searchSourceFilter: "all",
    searchLimit: 18,
    searchModalOpen: false,
    activeArticleId: null,
    previousPage: "explore",
    articleScholarMode: false, // Clean Story Mode by default; opt-in Scholar Mode
    articleDepthMode: "academic", // Legacy flag retained for compatibility
    activeTocId: "sec-hero",
    articleMobileTocOpen: false,
    articleMobileContextOpen: false,
    activeTermId: null,
    activeEditorialImageId: null,
    articleGalleryIndex: {},
    editorialQaOpen: false,
    founderMsgLang: "all", // "all" | "vi" | "en" | "zh"
    aboutSectionFocus: null,
    activeLegalDocId: "copyright",
    librarySubTab: "classics", // "classics" | "monograph" | "compendia" | "intelligence" | "audit"
    classicsTreasuryFilter: "all", // "all" | "kinh" | "su" | "tu" | "tap"
    classicsQuery: "",
    activeMonographChapter: "all",
    intelFilterType: "all",
    sourceFilterType: "all",
    assistantQuery: "",
    phrasebookCat: "all",
    customModalImage: null,
    updatesModalOpen: false,
    updatesTab: "reader", // "reader" | "changelog"
    vocabSelectionPopup: null, // { term, sourceSentence, articleId, articleTitle, x, y }
    vocabSearchQuery: "",
    vocabFilterArticle: "all",
    vocabEditId: null
  };

  const QUERY_ALIASES = {
    kongzi: ["孔子", "khong tu", "kǒngzǐ", "nho gia", "luan ngu"],
    mengzi: ["孟子", "manh tu"],
    laozi: ["老子", "lao tu", "dao gia"],
    zhuangzi: ["庄子", "trang tu"],
    sunzi: ["孙子", "ton tu"],
    hanfeizi: ["韩非子", "han phi"],
    mozi: ["墨子", "mac tu"],
    confucianism: ["儒家", "nho gia", "nho giao", "khong tu"],
    taoism: ["道家", "道教", "dao gia", "lao tu"],
    buddhism: ["佛教", "phat giao"]
  };

  function escapeHtml(str) {
    if (str == null) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  const _normTextCache = new Map();
  function normalizeText(str) {
    if (str == null) return "";
    const raw = String(str);
    const cached = _normTextCache.get(raw);
    if (cached !== undefined) return cached;
    const norm = raw
      .normalize("NFC")
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "d")
      .trim();
    if (_normTextCache.size > 5000) _normTextCache.clear();
    _normTextCache.set(raw, norm);
    return norm;
  }

  function showToast(msg) {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const el = document.createElement("div");
    el.className = "toast";
    el.textContent = msg;
    container.appendChild(el);
    setTimeout(() => el.remove(), 3200);
  }

  function getLangPack() {
    const lang = Store.getState().uiLang || "vi";
    const base = UI_I18N[lang] || UI_I18N.vi;
    const ext = window.CCE_UI_I18N_ZH && window.CCE_UI_I18N_ZH[lang];
    if (!ext) return base;
    return {
      ...base,
      mastheadNote: (ext.meta && ext.meta.siteSubtitle) || base.mastheadNote,
      searchBtn: (ext.common && ext.common.searchButton) || base.searchBtn,
      searchPlaceholder: (ext.common && ext.common.searchPlaceholder) || base.searchPlaceholder,
      themeLight: (ext.settings && ext.settings.themeLight) || base.themeLight,
      themeDark: (ext.settings && ext.settings.themeDark) || base.themeDark,
      footerSubtitle: (ext.footer && ext.footer.openSourceNote) || base.footerSubtitle
    };
  }

  function getNavLabel(item) {
    const lang = Store.getState().uiLang || "vi";
    if (lang === "zh-CN") return item.zhCN || item.zh || item.vi;
    if (lang === "zh-TW") return item.zhTW || item.zh || item.vi;
    if (lang === "en") return item.en || item.vi;
    return item[lang] || item.vi;
  }

  function isEnglishUi() {
    return (Store.getState().uiLang || "vi") === "en";
  }

  function enVal(obj, key) {
    if (window.CCE_EN_FIELD) return window.CCE_EN_FIELD(obj, key, isEnglishUi());
    if (!obj) return "";
    if (isEnglishUi()) {
      const cap = key.charAt(0).toUpperCase() + key.slice(1);
      if (obj[`${key}En`]) return obj[`${key}En`];
      if (key.endsWith("Vi")) {
        const base = key.slice(0, -2);
        if (obj[`${base}En`]) return obj[`${base}En`];
      }
      if (obj[`${cap}En`]) return obj[`${cap}En`];
    }
    return obj[key] || "";
  }

  function getEnHelp() {
    return window.CCE_EN_HELPERS || {};
  }

  function getArticleEnPack(articleId) {
    return (window.CCE_ARTICLES_EN && window.CCE_ARTICLES_EN[articleId]) || null;
  }

  function getLocalizedArticleView(art, sup, ed) {
    const enMode = isEnglishUi();
    const en = enMode ? getArticleEnPack(art.id) : null;
    const rawTitle = enMode ? ((en && en.title) || art.titleEn || art.titleVi) : (art.titleVi || art.titleEn);
    const rawSubTitle = enMode ? "" : (art.titleEn || "");
    const rawCat = (en && en.categoryLabel) || (enMode && art.categoryLabelEn) || art.categoryLabel;
    const rawEpistemic = (en && en.epistemicTag) || art.epistemicTag;
    const rawStandfirst = (en && en.standfirst) || (enMode && art.standfirstEn) || art.standfirst || (ed && ed.standfirst) || "";
    const rawAbstract = (en && en.abstract)
      || (enMode && art.abstractEn)
      || (typeof art.abstract === "string" ? art.abstract : (art.abstract && (art.abstract.vi || art.abstract.text)) || "");
    const rawTakeaways = (en && Array.isArray(en.keyTakeaways) && en.keyTakeaways.length)
      ? en.keyTakeaways
      : ((enMode && Array.isArray(art.keyTakeawaysEn) && art.keyTakeawaysEn.length)
        ? art.keyTakeawaysEn
        : ((ed && ed.keyTakeaways && ed.keyTakeaways.length) ? ed.keyTakeaways : (art.keyTakeaways || [])));
    const rawIntro = (en && en.introduction) || (enMode && art.introductionEn) || art.introduction || "";
    const rawHist = (en && (en.historicalContext || en.historicalBackground))
      || (enMode && (art.historicalContextEn || art.historicalBackgroundEn))
      || art.historicalContext || art.historicalBackground || "";
    const rawSections = (en && Array.isArray(en.mainContent) && en.mainContent.length)
      ? en.mainContent
      : (enMode
        ? (art.mainContent || []).map((s) => ({
            heading: s.headingEn || s.heading,
            body: s.bodyEn || s.body
          }))
        : (art.mainContent || []));
    const rawTheory = (en && en.theoreticalFramework) ? en.theoreticalFramework : art.theoreticalFramework;
    const rawPrimarySources = (en && Array.isArray(en.primarySources) && en.primarySources.length)
      ? en.primarySources
      : (art.primarySources || []);
    const rawSinoVn = (en && en.sinoVietnameseComparison) ? en.sinoVietnameseComparison : (art.sinoVietnameseComparison || art.sinoVietnamLink);
    const rawExamples = (en && Array.isArray(en.examples) && en.examples.length)
      ? en.examples
      : (art.examples || []);
    const rawConclusion = (en && en.conclusion)
      || (enMode && (art.conclusionEn || art.conclusion))
      || (art.conclusion || art.modernRelevance || (sup && sup.conclusion) || "");
    const rawRefs = (en && Array.isArray(en.references) && en.references.length)
      ? en.references
      : (art.references || []);
    const rawCategoryModule = (en && en.categoryModule) || (ed && ed.categoryModule) || null;
    const rawHistoricalDoc = (en && en.historicalDocument) || (ed && ed.historicalDocument) || null;
    const rawPrimaryQuote = (en && en.primaryQuote) || (sup && sup.primaryQuote) || null;
    const rawCompAnalysis = (en && en.comparativeAnalysis) || (sup && sup.comparativeAnalysis) || "";
    const rawRelatedFigures = (en && Array.isArray(en.relatedFigures) && en.relatedFigures.length)
      ? en.relatedFigures
      : ((sup && sup.relatedFigures) || []);
    const rawRelatedTexts = (en && Array.isArray(en.relatedTexts) && en.relatedTexts.length)
      ? en.relatedTexts
      : ((sup && sup.relatedTexts) || []);
    const rawHeroCaption = (en && en.heroCaption) || (enMode && art.heroImage && art.heroImage.captionEn) || (art.heroImage && art.heroImage.caption) || rawTitle;
    const rawHeroCredit = (en && en.heroCredit) || (art.heroImage && art.heroImage.credit) || "Chinese Culture Explorer Archive";
    const rawTermsEn = (en && Array.isArray(en.terminologyAndLiushu)) ? en.terminologyAndLiushu : [];
    const rawEditorialAuthor = (en && en.editorialAuthor) || getEditorialAuthorName(ed);
    return {
      en,
      isEn: enMode,
      title: rawTitle,
      subTitle: rawSubTitle,
      categoryLabel: rawCat,
      epistemicTag: rawEpistemic,
      standfirst: rawStandfirst,
      abstract: rawAbstract,
      keyTakeaways: rawTakeaways,
      introduction: rawIntro,
      historicalContext: rawHist,
      mainContent: rawSections,
      theoreticalFramework: rawTheory,
      primarySources: rawPrimarySources,
      sinoVietnameseComparison: rawSinoVn,
      examples: rawExamples,
      conclusion: rawConclusion,
      references: rawRefs,
      categoryModule: rawCategoryModule,
      historicalDocument: rawHistoricalDoc,
      primaryQuote: rawPrimaryQuote,
      comparativeAnalysis: rawCompAnalysis,
      relatedFigures: rawRelatedFigures,
      relatedTexts: rawRelatedTexts,
      heroCaption: rawHeroCaption,
      heroCredit: rawHeroCredit,
      terminologyEn: rawTermsEn,
      editorialAuthor: rawEditorialAuthor
    };
  }

  function renderTheoryContent(tf) {
    if (!tf) return "";
    if (typeof tf === "string") return `<p>${tf}</p>`;
    if (Array.isArray(tf)) {
      return `<ul>${tf.map((pt) => `<li style="margin-bottom:0.45rem;">${escapeHtml(typeof pt === "string" ? pt : `${pt.title || ""}: ${pt.detail || ""}`)}</li>`).join("")}</ul>`;
    }
    if (typeof tf === "object") {
      const modelTitle = tf.modelName ? `<p style="margin-bottom:0.5rem;"><strong>${escapeHtml(tf.modelName)}</strong></p>` : "";
      const pts = Array.isArray(tf.principles)
        ? `<ul>${tf.principles.map((pr) => `<li style="margin-bottom:0.42rem;">${escapeHtml(pr)}</li>`).join("")}</ul>`
        : "";
      return `${modelTitle}${pts}` || `<p>${escapeHtml(JSON.stringify(tf))}</p>`;
    }
    return "";
  }

  function renderSinoVnContent(sv) {
    if (!sv) return "";
    if (typeof sv === "string") return `<p style="margin:0;line-height:1.68;">${sv}</p>`;
    const summaryText = sv.summary || sv.text || "";
    const pts = Array.isArray(sv.points) && sv.points.length
      ? `<ul style="margin:0.65rem 0 0;padding-left:1.2rem;">${sv.points.map((p) => `<li style="margin-bottom:0.35rem;line-height:1.58;">${escapeHtml(p)}</li>`).join("")}</ul>`
      : "";
    return `${summaryText ? `<p style="margin:0;line-height:1.68;">${escapeHtml(summaryText)}</p>` : ""}${pts}`;
  }

  function formatHanzi(simp, trad) {
    const mode = Store.getState().scriptMode;
    const lang = Store.getState().uiLang || "vi";
    if (lang === "zh-TW" && trad) {
      return `<span class="hanzi">${escapeHtml(trad)}</span>${simp && simp !== trad ? ` <span class="hanzi" style="opacity:.68;font-weight:400;">(${escapeHtml(simp)})</span>` : ""}`;
    }
    if (mode === "both" && trad && trad !== simp) {
      return `<span class="hanzi">${escapeHtml(simp)}</span> <span class="hanzi" style="opacity:.68;font-weight:400;">(${escapeHtml(trad)})</span>`;
    }
    return `<span class="hanzi">${escapeHtml(simp)}</span>`;
  }

  function getNormalizedCardLevel(t) {
    const raw = String((t && t.level) || "").trim();
    if (!raw) return "Advanced / Academic Chinese";
    if (/^beginner/i.test(raw)) return "Beginner";
    if (/hsk\s*1/i.test(raw)) return "HSK 1-2";
    if (/hsk\s*[23]-4/i.test(raw)) return "HSK 3-4";
    if (/hsk\s*4-5/i.test(raw)) return "HSK 4-5";
    if (/hsk\s*[56](\b|[-–\s/])/i.test(raw)) return "HSK 5-6";
    if (/^custom/i.test(raw)) return "Custom Deck";
    return "Advanced / Academic Chinese";
  }

  function getCardTopicCategory(t) {
    const hay = normalizeText([t.topicTag, t.level, t.context, t.vietnamese, t.english].filter(Boolean).join(" "));
    if (/triet hoc|nho hoc|dao gia|phat giao|philosoph|confuc|daoism|tam giao/.test(hay)) return "philosophy";
    if (/lich su|trieu dai|khoa cu|govern|institut|history|di san|hoang de|kinh do/.test(hay)) return "history";
    if (/nghe thuat|my hoc|thu phap|quoc hoa|art|aesthet|linguist|han-viet|literature/.test(hay)) return "art";
    if (/kinh doanh|thuong mai|hai quan|logistics|chuoi cung ung|phap ly|hop dong|business|trade|finance|supply|customs|b2b|ecommerce/.test(hay)) return "business";
    if (/thuat so|dong y|duong sinh|nong lich|tu vi|bat tu|phong thuy|metaphysics|tcm|yin|wuxing|math/.test(hay)) return "metaphysics";
    return "culture";
  }

  function getAllFlashcards() {
    const state = Store.getState();
    let terms = [...Dictionary, ...(state.customFlashcards || [])];
    if (ui.flashcardDeckMode === "collected") {
      const collectedSet = new Set(state.collectedVocab || []);
      terms = terms.filter((t) => collectedSet.has(t.id));
    }
    if (ui.flashcardDeckFilter && ui.flashcardDeckFilter !== "all") {
      terms = terms.filter((t) => (t.deckId || "deck-01") === ui.flashcardDeckFilter);
    }
    if (ui.flashcardLevelFilter && ui.flashcardLevelFilter !== "all") {
      terms = terms.filter((t) => getNormalizedCardLevel(t) === ui.flashcardLevelFilter);
    }
    if (ui.flashcardTopicFilter && ui.flashcardTopicFilter !== "all") {
      terms = terms.filter((t) => getCardTopicCategory(t) === ui.flashcardTopicFilter);
    }
    return terms;
  }

  function getTermById(id) {
    const custom = (Store.getState().customFlashcards || []).find((c) => c.id === id);
    return custom || Dictionary.find((d) => d.id === id);
  }

  const HANDSCROLL_MEDIA_KEYS = [
    "01_luoshenfu_tu", "02_nvshi_zhentu", "04_youchun_tu", "05_bunian_tu",
    "06_lidai_diwang_tu", "08_guoguo_furen", "09_daolian_tu", "10_zhanhua_shinv_tu",
    "11_huishan_shinv_tu", "13_xiaoxiang_tu", "16_hanxizai_yeyan", "17_xiesheng_zhenqin",
    "21_qingming_shanghe", "22_qianli_jiangshan", "25_wuma_tu", "30_quehua_qiuse",
    "31_xiushi_shulin", "32_fuchun_shanju", "42_huishan_chahui", "44_kangxi_nanxun",
    "qingming-scroll", "hanshi-tie", "qianli-jiangshan", "lantingji-xu",
    "pingfu-tie", "zhongqiu-tie", "boyuan-tie"
  ];

  function isHandscrollArtwork(itemOrSrc) {
    const src = typeof itemOrSrc === "string"
      ? itemOrSrc
      : ((itemOrSrc && (itemOrSrc.image || itemOrSrc.imageUrl)) || "");
    if (!src) return false;
    return HANDSCROLL_MEDIA_KEYS.some((k) => src.includes(k));
  }

  // Universal Academic Visual Helper — Ensures EVERY academic card & section has a real museum/archival photo
  const ACADEMIC_FALLBACK_POOL = [
    { src: "assets/images/academic/ming-forbidden-city.jpg", caption: "Tử Cấm Thành Bắc Kinh — Trục lễ nghi kiến trúc cung đình Trung Hoa", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/qin-terracotta.jpg", caption: "Đội quân đất nung Tần Thủy Hoàng tại Tây An — Di sản khảo cổ học", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/han-silk-banner.jpg", caption: "Tranh lụa Mã Vương Đôi (Tây Hán, 168 TCN) — Bảo tàng Hồ Nam", credit: "Hunan Museum" },
    { src: "assets/images/academic/tang-sancai-camel.jpg", caption: "Tượng gốm Tam thái (Sancai) Lạc đà Con đường Tơ lụa thời Đường", credit: "Museum Archive" },
    { src: "assets/images/academic/sunzi-bamboo-slips.jpg", caption: "Thẻ tre Ngân Tước Sơn — Văn bản cổ học thời Chiến Quốc - Tây Hán", credit: "Shandong Museum" },
    { src: "assets/images/academic/laozi-portrait.jpg", caption: "Chân dung triết gia cổ đại và truyền thống Đạo học Đông Á", credit: "Classical Archive" },
    { src: "assets/images/academic/wang-yangming.jpg", caption: "Chân dung Vương Dương Minh — Học thuyết Tâm học và Tri hành hợp nhất", credit: "Palace Museum" },
    { src: "assets/images/academic/suzhou-garden.jpg", caption: "Chuyết Chính Viên (Tô Châu) — Mỹ học viên lâm Giang Nam", credit: "UNESCO Heritage" },
    { src: "assets/images/academic/west-lake-hangzhou.jpg", caption: "Tây Hồ Hàng Châu — Trung tâm văn hóa và thương mại Giang Nam", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/chengdu-jinli.jpg", caption: "Phố cổ Cẩm Lý (Thành Đô) — Văn hóa Ba Thục và trà quán Tây Nam", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/guilin-li-river.jpg", caption: "Sông Ly Giang (Quế Lâm) — Địa mạo Karst đá vôi Hoa Nam", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/van-mieu-hanoi.jpg", caption: "Khuê Văn Các — Văn Miếu Quốc Tử Giám Hà Nội (Giao lưu văn hiến Trung - Việt)", credit: "Vietnam National Heritage" },
    { src: "assets/images/academic/peking-opera.jpg", caption: "Nghệ thuật Kinh kịch truyền thống — Di sản phi vật thể UNESCO", credit: "Wikimedia Commons" },
    { src: "assets/images/academic/guqin-instrument.jpg", caption: "Cổ cầm thất huyền — Nhạc khí của bậc quân tử và văn nhân", credit: "Metropolitan Museum" },
    { src: "assets/images/articles/hero-traditional-arch.jpg", caption: "Kiến trúc cổ điển và lễ khí vương triều Trung Hoa", credit: "Museum Archive" },
    { src: "assets/images/articles/hero-calligraphy-five-scripts.jpg", caption: "《Lan Đình Tập Tự》 (Đường Thần Long mô bản) — Mỹ học Hành thư & Triện khắc", credit: "Palace Museum" },
    { src: "assets/images/articles/hero-tea-culture.jpg", caption: "Nghệ thuật Trà đạo Công phu trà (工夫茶) và văn hóa ẩm trà", credit: "Wikimedia Commons" },
    { src: "assets/images/articles/hero-beijing-shanghai.jpg", caption: "Bến Thượng Hải và Lục Gia Chủy — Trung tâm tài chính Đông Á", credit: "Wikimedia Commons" },
    { src: "assets/images/articles/hero-contemporary-china.jpg", caption: "Thâm Quyến — Trung tâm phần cứng, bán dẫn và AI Vùng Vịnh Lớn", credit: "Wikimedia Commons" },
    { src: "assets/images/articles/hero-supply-chain-rcep.jpg", caption: "Hành lang thương mại và chuỗi cung ứng xuyên biên giới Việt - Trung", credit: "Trade Archive" },
    { src: "assets/images/articles/hero-ai-deepseek-lab.jpg", caption: "Phòng thí nghiệm AI & cụm máy chủ tính toán hiệu năng cao", credit: "Tech Research Archive" },
    { src: "assets/images/articles/hero-six-teas-gongfu.jpg", caption: "Lục Đại Trà Loại và nghệ thuật trà Công phu", credit: "Tea Heritage Archive" },
    { src: "assets/images/articles/hero-chinese-cuisines.jpg", caption: "Nghệ thuật ẩm thực Bát Đại Thái Hệ Trung Hoa", credit: "Culinary Heritage Archive" },
    { src: "assets/images/articles/hero-classical-books-scrolls.jpg", caption: "Cổ tịch khắc bản gỗ & thư phòng văn nhân", credit: "Rare Book Library" },
    { src: "assets/images/articles/hero-silk-embroidery-hanfu.jpg", caption: "Tơ lụa cổ truyền & thêu tay Hán phục trong bảo tàng", credit: "Silk Archive" },
    { src: "assets/images/articles/hero-academy-shuyuan.jpg", caption: "Kiến trúc Thư viện cổ điển trong rừng trúc", credit: "Academy Heritage Archive" },
    { src: "assets/images/articles/hero-huaqiangbei-tech.jpg", caption: "Hệ sinh thái tạo mẫu phần cứng Hoa Cường Bắc – Thâm Quyến", credit: "Hardware Industry Archive" },
    { src: "assets/images/articles/hero-laozihao-craft.jpg", caption: "Hiệu buôn cổ truyền Lão Tự Hiệu hơn trăm năm lịch sử", credit: "Commercial Heritage Archive" },
    { src: "assets/images/articles/hero-b2b-negotiation-table.jpg", caption: "Không gian tiếp đón và đàm phán thương mại B2B Đông Á", credit: "Trade Relations Archive" },
    { src: "assets/images/articles/hero-consular-field-guide.jpg", caption: "Hồ sơ thực địa & hành trình công tác biên giới Trung - Việt", credit: "Field Reference Archive" },
    { src: "assets/images/articles/hero-chinese-banquet.jpg", caption: "Nghi thức trà lễ và tặng quà ngoại giao trên bàn tiệc", credit: "Etiquette Archive" }
  ];

  function getAcademicPhotoForItem(domain, itemId, indexFallback = 0, titleHint = "") {
    const visuals = (Intelligence && Intelligence.academicVisuals) || {};
    let entry = null;
    if (domain === "section" || domain === "sectionBanners" || domain === "sectionHeaders") {
      const banners = visuals.sectionBanners || visuals.sectionHeaders || {};
      const aliasMap = { traditional: "culture", sinoVietnam: "sino-vietnam", library: "intelligence" };
      entry = banners[itemId] || banners[aliasMap[itemId]] || null;
    } else if (domain === "periods") {
      entry = (visuals.periods && visuals.periods[itemId]) || null;
    } else if (domain === "schools" || domain === "philosophySchools") {
      entry = (visuals.philosophySchools && visuals.philosophySchools[itemId]) || null;
    } else if (domain === "metaphysics" || domain === "metaphysicsSystems") {
      entry = (visuals.metaphysicsSystems && visuals.metaphysicsSystems[itemId]) || null;
    } else if (domain === "regions" || domain === "macroRegions") {
      entry = (visuals.regions && visuals.regions[itemId]) || (visuals.macroRegions && visuals.macroRegions[itemId]) || null;
    } else if (domain && visuals[domain] && itemId && visuals[domain][itemId]) {
      entry = visuals[domain][itemId];
    }
    if (typeof entry === "string") {
      return { src: entry, caption: "", credit: "Museum & Academic Archive" };
    }
    if (entry && (entry.src || entry.imageUrl)) {
      return {
        src: entry.src || entry.imageUrl,
        caption: entry.caption || entry.captionVi || entry.alt || entry.title || "",
        captionEn: entry.captionEn || "",
        credit: entry.credit || "Museum & Academic Archive"
      };
    }
    // Check if an article exists with matching ID
    const ed = getArticleEditorial(itemId);
    if (ed && ed.heroImageId) {
      const img = getEditorialImage(ed.heroImageId);
      if (img) {
        return { src: img.src, caption: img.captionVi || img.titleVi, captionEn: img.captionEn || img.titleEn, credit: img.sourceCredit };
      }
    }
    const hint = `${itemId || ""} ${titleHint || ""} ${domain || ""}`.toLowerCase();
    const topicRules = [
      { rx: /\b(tiantan|heaven|thiên đàn|kỳ niên)\b/i, src: "assets/images/articles_v8/tiantan-hall-prayer.jpg" },
      { rx: /\b(forbidden|tử cấm|palace|cố cung|dougong|đấu củng|arch)\b/i, src: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg" },
      { rx: /\b(tea|trà|puerh|longjing|oolong|wuyi)\b/i, src: "assets/images/articles_v8/tea-horse-caravan.jpg" },
      { rx: /\b(ceramic|porcelain|gốm|sứ|kiln|celadon|jade|ngọc)\b/i, src: "assets/images/editorial_v8/jingdezhen-imperial-kiln.jpg" },
      { rx: /\b(tang|đường luật|tang-code|hồng đức|law|legal)\b/i, src: "assets/images/museum/song-printed-shiji.jpg" },
      { rx: /\b(calligraphy|thư pháp|stele|bia|printing|mộc bản|in)\b/i, src: "assets/images/articles/hero-calligraphy-five-scripts.jpg" },
      { rx: /\b(poetry|thi ca|literature|novel|tiểu thuyết|truyện kiều)\b/i, src: "assets/images/articles/hero-classical-books-scrolls.jpg" },
      { rx: /\b(b2b|contract|rcep|acfta|gacc|trade|fair|canton|hải quan|thương)\b/i, src: "assets/images/articles/hero-b2b-negotiation-table.jpg" },
      { rx: /\b(rail|train|hsr|12306|esim|flight|airport|visa|travel|cao tốc|tàu)\b/i, src: "assets/images/lessons/v7-m9-l2.jpg" },
      { rx: /\b(opera|music|guqin|guzheng|pipa|kịch|nhạc)\b/i, src: "assets/images/opera/op-16.jpg" },
      { rx: /\b(tcm|medicine|y học|dược|herb|neijing|solar)\b/i, src: "assets/images/articles/hero-tcm-solar.jpg" },
      { rx: /\b(confucian|nho|academy|shuyuan|thư viện|philos|triết)\b/i, src: "assets/images/articles/hero-hundred-schools.jpg" },
      { rx: /\b(cuisine|ẩm thực|duck|noodle|banquet|baijiu|huangjiu)\b/i, src: "assets/images/articles/hero-chinese-cuisines.jpg" },
      { rx: /\b(astronomy|thiên văn|observatory|seismoscope|cartography|bản đồ)\b/i, src: "assets/images/editorial_v8/ancient-observatory-armillary.jpg" },
    ];
    for (let ti = 0; ti < topicRules.length; ti++) {
      if (topicRules[ti].rx.test(hint)) {
        const hit = ACADEMIC_FALLBACK_POOL.find((p) => p.src === topicRules[ti].src);
        return hit || { src: topicRules[ti].src, caption: "", credit: "Museum & Academic Archive", _isFallbackPool: true };
      }
    }
    const idx = Math.abs(Number(indexFallback) || 0) % ACADEMIC_FALLBACK_POOL.length;
    return Object.assign({}, ACADEMIC_FALLBACK_POOL[idx], { _isFallbackPool: true });
  }

  function getEditorialAuthorName(ed) {
    if (!ed || !ed.author) return "Lê Hưng Thịnh (黎兴盛)";
    if (typeof ed.author === "string") return ed.author;
    if (typeof ed.author === "object") {
      return ed.author.name || ed.author.vi || ed.author.title || "Lê Hưng Thịnh (黎兴盛)";
    }
    return "Lê Hưng Thịnh (黎兴盛)";
  }

  function isArtworkOrDocumentSrc(src = "", meta = "") {
    if (/\.svg(?:\?|$)/i.test(src) || /\/(monograph|brand|editorial)\//i.test(src)) return true;
    return /lanting|hanshi|jizhi-wengao|kuaixue|pingfu-tie|jinshi-stele|zheng-he-chart|han-silk-banner|han-shipan|infographic|diagram|calligraphy|chart|seal|figure-\d+/i.test(`${src} ${meta}`);
  }

  function renderAcademicCardThumb(photo, badgeLabel = "") {
    if (!photo || !photo.src) return "";
    const enM = isEnglishUi();
    const help = getEnHelp();
    const capText = enM
      ? (photo.captionEn || (help.academicCaptionEn ? help.academicCaptionEn(photo.caption, badgeLabel, true) : badgeLabel || ""))
      : (photo.caption || "");
    const isContain = isArtworkOrDocumentSrc(photo.src, `${capText} ${badgeLabel}`);
    const objStyle = isContain
      ? "object-fit:contain;object-position:center;padding:0.45rem;background:var(--bg-surface);"
      : "object-fit:cover;object-position:50% 30%;";
    return `
      <div class="academic-card-thumb img-skeleton-bg" style="position:relative;margin:0 0 0.9rem 0;aspect-ratio:16/10;width:100%;overflow:hidden;border-radius:var(--radius);background:var(--bg-surface);border:1px solid var(--hairline);">
        <img decoding="async"  src="${escapeHtml(photo.src)}" alt="${escapeHtml(capText)}" loading="lazy" style="width:100%;height:100%;${objStyle}display:block;" onerror="this.onerror=null;this.src='assets/images/museum/qianli-jiangshan.jpg';" />
        ${isContain ? "" : `<div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(16,14,12,0.72) 0%, rgba(16,14,12,0.12) 45%, rgba(16,14,12,0.02) 100%);pointer-events:none;"></div>`}
        <button type="button" class="btn btn-sm" style="position:absolute;top:0.45rem;right:0.55rem;padding:0.16rem 0.45rem;font-size:0.67rem;background:rgba(15,16,18,0.72);color:#F2EFE9;border:1px solid rgba(255,255,255,0.22);border-radius:2px;" data-action="open-custom-image" data-src="${escapeHtml(photo.src)}" data-caption="${escapeHtml(capText)}" data-credit="">${ICONS.zoom}</button>
        ${!isContain && capText ? `
          <div style="position:absolute;bottom:0.45rem;left:0.65rem;right:0.65rem;color:#F7F4ED;font-size:0.72rem;line-height:1.32;text-shadow:0 1px 3px rgba(0,0,0,0.85);">
            ${escapeHtml(capText)}
          </div>
        ` : ""}
      </div>
    `;
  }

  function renderAcademicSectionBanner(sectionKey, extraKpiHtml = "") {
    const banner = getAcademicPhotoForItem("section", sectionKey, 0);
    if (!banner || !banner.src) return "";
    const enMode = isEnglishUi();
    const help = getEnHelp();
    const rawCaption = banner.caption || "";
    const captionText = enMode
      ? (banner.captionEn || (help.sectionCaptionEn ? help.sectionCaptionEn(sectionKey, rawCaption, true) : rawCaption))
      : rawCaption;
    const isContain = isArtworkOrDocumentSrc(banner.src, rawCaption);
    const bannerFit = isContain
      ? "object-fit:contain;object-position:center;padding:0.75rem;"
      : "object-fit:cover;object-position:50% 34%;";
    const hasFooter = Boolean(captionText || extraKpiHtml);
    return `
      <div class="card mb-2 academic-section-banner">
        <div class="academic-banner-grid">
          <div class="academic-banner-media${isContain ? " is-contain" : ""}">
            <img decoding="async"  src="${escapeHtml(banner.src)}" alt="${escapeHtml(captionText)}" loading="eager" style="width:100%;height:100%;${bannerFit}display:block;" />
            <button type="button" class="btn btn-sm academic-banner-zoom" data-action="open-custom-image" data-src="${escapeHtml(banner.src)}" data-caption="${escapeHtml(captionText)}" data-credit="">${ICONS.zoom} ${enMode ? "View Original" : "Xem ảnh gốc"}</button>
          </div>
          ${hasFooter ? `
            <div class="academic-banner-body">
              ${captionText ? `<p style="font-family:var(--font-editorial);font-size:1rem;line-height:1.58;color:var(--ink-primary);margin:0;flex:1;min-width:260px;">${escapeHtml(captionText)}</p>` : ""}
              ${extraKpiHtml || ""}
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function getArticleSupplement(articleId) {
    return (Museum && Museum.articleSupplements && Museum.articleSupplements[articleId]) || null;
  }

  function escapeEditorialHtml(str) {
    return String(str == null ? "" : str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function getArticleEditorial(articleId) {
    return (EditorialMedia && EditorialMedia.articleEditorial && EditorialMedia.articleEditorial[articleId]) || null;
  }

  function getEditorialImage(imageId) {
    return (EditorialMedia && EditorialMedia.images && EditorialMedia.images[imageId]) || null;
  }

  function getArticleVisualSequence(articleId) {
    const ed = getArticleEditorial(articleId);
    const allIds = EditorialMedia && EditorialMedia.images ? Object.keys(EditorialMedia.images) : [];
    if (!ed) return allIds;
    const ordered = [
      ed.heroImageId,
      ...(ed.inlineVisuals || []).map((v) => v.imageId),
      ed.historicalDocument ? ed.historicalDocument.imageId : null,
      ...(ed.galleryImageIds || [])
    ].filter(Boolean);
    return Array.from(new Set(ordered)).filter((id) => Boolean(getEditorialImage(id)));
  }

  function getEditorialRatioClass(ratio) {
    const map = {
      "16:9": "ratio-16-9",
      "16:10": "ratio-16-10",
      "4:3": "ratio-4-3",
      "3:2": "ratio-3-2",
      "1:1": "ratio-1-1"
    };
    return map[ratio] || "ratio-16-9";
  }

  function renderAuthenticityBadge(img, extraClass = "") {
    if (!img) return "";
    const enB = isEnglishUi();
    const typeClass = `type-${escapeEditorialHtml(img.authenticityType || "editorial-reconstruction")}`;
    const label = enB
      ? (img.authenticityLabelEn || (img.authenticityType === "archival-source" ? "Archival Museum Plate" : "Editorial Illustration"))
      : (img.authenticityLabelVi || "Tư liệu Biên tập");
    return `<span class="authenticity-badge ${typeClass} ${extraClass}">${escapeEditorialHtml(label)}</span>`;
  }

  function renderEditorialImageFigure(imageId, opts = {}) {
    const img = getEditorialImage(imageId);
    if (!img) {
      return `
        <div class="editorial-media-frame ratio-16-9">
          <div class="editorial-fallback-box">${isEnglishUi() ? "Visual plate updating" : "Tư liệu minh họa đang được cập nhật"} (${escapeEditorialHtml(imageId || "N/A")})</div>
        </div>
      `;
    }
    const ratioClass = getEditorialRatioClass(opts.ratio || img.aspectRatio || (opts.isHero ? "16:9" : "4:3"));
    const focal = opts.focalPoint || (opts.useThumbnailFocal ? img.thumbnailFocalPoint : img.focalPoint) || "50% 50%";
    const loadingAttr = opts.loading || (opts.isHero ? "eager" : "lazy");
    const fetchPriorityAttr = opts.isHero ? ' fetchpriority="high"' : "";
    const callouts = Array.isArray(opts.callouts) ? opts.callouts : [];
    const showBadgeBar = opts.showBadge !== false;
    const showZoom = opts.showZoom !== false;
    const showCaption = opts.showCaption !== false && !opts.compact;

    return `
      <figure class="editorial-figure editorial-figure--clean" data-image-id="${escapeEditorialHtml(img.id)}" style="margin:0;">
        <div class="editorial-media-frame ${ratioClass}" style="position:relative;">
          <img
            class="editorial-img ${isArtworkOrDocumentSrc(img.src, img.id) ? "editorial-img--contain" : ""}"
            src="${escapeEditorialHtml(img.src)}"
            alt="${escapeEditorialHtml(img.altText || img.titleVi)}"
            loading="${loadingAttr}"${fetchPriorityAttr}
            decoding="async"
            style="${isArtworkOrDocumentSrc(img.src, img.id) ? "object-position:center;" : `object-position:${escapeEditorialHtml(focal)};`}"
            onerror="this.style.display='none';if(this.nextElementSibling&&this.nextElementSibling.classList.contains('editorial-fallback-box'))this.nextElementSibling.style.display='flex';"
          />
          ${showZoom ? `
            <button type="button" class="editorial-img-zoom-pill" data-action="open-editorial-lightbox" data-img-id="${escapeEditorialHtml(img.id)}" aria-label="${isEnglishUi() ? "Zoom image:" : "Phóng to ảnh:"} ${escapeEditorialHtml(isEnglishUi() ? (img.titleEn || img.titleVi) : img.titleVi)}">
              <span>${isEnglishUi() ? "⤢ Zoom" : "⤢ Phóng to"}</span>
            </button>
          ` : ""}
          <div class="editorial-fallback-box" style="display:none;flex-direction:column;gap:0.35rem;">
            <strong>${escapeEditorialHtml(isEnglishUi() ? (img.titleEn || img.titleVi) : img.titleVi)}</strong>
            <span>${escapeEditorialHtml(img.attributionText || "")}</span>
          </div>
        </div>

        ${showCaption ? `
          <figcaption class="editorial-caption-clean">
            <div class="editorial-caption-text">
              <strong>${escapeEditorialHtml(isEnglishUi() ? (img.titleEn || img.titleVi) : img.titleVi)}</strong>${img.titleZh ? ` <span lang="zh-Hans" class="editorial-caption-zh">(${escapeEditorialHtml(img.titleZh)})</span>` : ""}
              ${opts.captionOverride || (isEnglishUi() ? (img.captionEn || "") : img.caption) ? `<span class="caption-divider"> — </span><span class="caption-desc">${escapeEditorialHtml(opts.captionOverride || (isEnglishUi() ? (img.captionEn || img.caption) : img.caption))}</span>` : ""}
            </div>
          </figcaption>
        ` : ""}

        ${!opts.compact && opts.showMapMeta !== false && img.mapMetadata && !isEnglishUi() ? `
          <div class="map-metadata-panel">
            <div style="display:flex;justify-content:space-between;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.35rem;">
              <strong style="color:var(--ink-black);">Chú giải Bản đồ (Map Legend): ${escapeEditorialHtml(img.mapMetadata.title)}</strong>
              <span class="badge badge-gold">${escapeEditorialHtml(img.mapMetadata.timePeriod)}</span>
            </div>
            <div style="color:var(--text-secondary);font-size:0.79rem;"><strong>Phạm vi:</strong> ${escapeEditorialHtml(img.mapMetadata.geographicScope)}</div>
            <div class="map-legend-grid">
              ${(img.mapMetadata.legend || []).map((lg) => `
                <div class="map-legend-item">
                  <span style="font-weight:700;color:var(--imperial-red);white-space:nowrap;">${escapeEditorialHtml(lg.symbol)}</span>
                  <span style="color:var(--text-secondary);">${escapeHtml(lg.label)}</span>
                </div>
              `).join("")}
            </div>
            <div style="font-size:0.77rem;color:var(--text-muted);border-top:1px solid var(--border-subtle);padding-top:0.35rem;">
              <strong>Phương pháp luận:</strong> ${escapeEditorialHtml(img.mapMetadata.methodologicalNote)} (Nguồn: ${escapeEditorialHtml(img.mapMetadata.source)})
            </div>
          </div>
        ` : ""}

        ${!opts.compact && callouts.length && (!isEnglishUi() || callouts.some((c) => c.titleEn || c.detailEn)) ? `
          <div class="editorial-callout-grid">
            ${callouts.map((c) => `
              <div class="editorial-callout-card">
                <div style="margin-bottom:0.2rem;"><span class="callout-code-pill">${escapeEditorialHtml(c.code)}</span><strong>${escapeEditorialHtml(isEnglishUi() ? (c.titleEn || c.title) : c.title)}</strong></div>
                <div style="color:var(--text-secondary);line-height:1.45;">${escapeEditorialHtml(isEnglishUi() ? (c.detailEn || c.detail) : c.detail)}</div>
              </div>
            `).join("")}
          </div>
        ` : ""}
      </figure>
    `;
  }

  function renderEditorialLightboxModal() {
    if (!ui.activeEditorialImageId) return "";
    const enM = isEnglishUi();
    const img = getEditorialImage(ui.activeEditorialImageId);
    if (!img) return "";
    const activeSeq = getArticleVisualSequence(ui.activeArticleId);
    const allIds = activeSeq.includes(img.id)
      ? activeSeq
      : (EditorialMedia && EditorialMedia.images ? Object.keys(EditorialMedia.images) : [img.id]);
    const idx = Math.max(0, allIds.indexOf(img.id));
    const imgTitle = enM ? (img.titleEn || img.titleVi) : img.titleVi;
    const imgCaption = enM ? (img.captionEn || img.caption) : img.caption;
    const imgDesc = enM ? (img.descriptionEn || "") : img.description;

    return `
      <div class="lightbox-backdrop" role="dialog" aria-modal="true" aria-label="${enM ? "Inspect Archival Plate" : "Kiểm tra chi tiết tư liệu trực quan"}" data-action="close-editorial-lightbox" style="z-index:1200;">
        <div class="lightbox-stage" onclick="event.stopPropagation()" style="max-width:1080px;width:96%;padding:1.25rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.75rem;flex-wrap:wrap;margin-bottom:0.85rem;">
            <div>
              <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;margin-bottom:0.35rem;">
                ${renderAuthenticityBadge(img)}
                <span class="badge badge-gold">${escapeEditorialHtml(img.dimensions || "High-Res")} • ${escapeEditorialHtml(img.aspectRatio || "16:9")}</span>
                <span class="badge badge-jade">${idx + 1} / ${allIds.length}</span>
              </div>
              <h3 style="margin:0;font-size:1.25rem;color:#FFFFFF;">${escapeEditorialHtml(imgTitle)}</h3>
              <div style="font-size:0.84rem;color:#CBD5E1;">
                ${img.titleZh ? `<span lang="zh-Hans" style="font-family:var(--font-chinese);color:#FCD34D;">${escapeEditorialHtml(img.titleZh)}</span>` : ""}${enM ? "" : `${img.titleZh ? " • " : ""}${escapeEditorialHtml(img.titleEn || "")}`}
              </div>
            </div>
            <div style="display:flex;gap:0.45rem;align-items:center;">
              <button type="button" class="lightbox-tool-btn" data-action="editorial-lightbox-step" data-dir="-1" aria-label="${enM ? "Previous frame" : "Ảnh trước"}">&larr; ${enM ? "Prev" : "Trước"}</button>
              <button type="button" class="lightbox-tool-btn" data-action="editorial-lightbox-step" data-dir="1" aria-label="${enM ? "Next frame" : "Ảnh tiếp theo"}">${enM ? "Next" : "Sau"} &rarr;</button>
              <button type="button" class="lightbox-tool-btn lightbox-tool-btn-primary" data-action="close-editorial-lightbox" aria-label="${enM ? "Close viewer" : "Đóng hộp xem ảnh"}">${ICONS.close} ${enM ? "Close" : "Đóng"}</button>
            </div>
          </div>

          <div class="editorial-media-frame ${getEditorialRatioClass(img.aspectRatio || "16:9")}" style="max-height:70vh;background:#0F1012;border:1px solid rgba(242,239,233,0.16);">
            <img decoding="async"  class="editorial-img" src="${escapeEditorialHtml(img.src)}" alt="${escapeEditorialHtml(img.altText || imgTitle)}" style="object-fit:contain;background:#0F1012;" />
          </div>

          <div style="margin-top:0.85rem;">
            ${(imgCaption || imgDesc) ? `
              <div class="lightbox-caption" style="margin-top:0.35rem;">
                ${imgCaption ? `<div style="font-size:0.92rem;color:#F8FAFC;margin-bottom:0.35rem;">${escapeEditorialHtml(imgCaption)}</div>` : ""}
                ${imgDesc ? `<p style="font-size:0.82rem;color:#CBD5E1;margin:0;">${escapeEditorialHtml(imgDesc)}</p>` : ""}
              </div>
            ` : ""}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Multi-Entity Global Search & Faceted Filtering
  // Searches across Articles, Chinese Terms, Museum Artifacts, Periods,
  // Historical People, Regions/Cities, Classical Texts, and Research Portals
  // ==========================================================================
  function buildPeopleIndex() {
    const people = [];
    const seen = new Set();
    Object.entries(Museum.articleSupplements || {}).forEach(([articleId, sup]) => {
      (sup.relatedFigures || []).forEach((fig) => {
        if (!seen.has(fig.name)) {
          seen.add(fig.name);
          people.push({
            id: articleId,
            name: fig.name,
            dates: fig.dates,
            role: fig.role,
            periodId: sup.periodId,
            regionId: sup.regionId,
            targetType: "article",
            targetId: articleId
          });
        }
      });
    });
    History.periods.forEach((p) => {
      (p.figures || []).forEach((figLine) => {
        const key = figLine.split("–")[0].split(":")[0].trim();
        if (!seen.has(key)) {
          seen.add(key);
          people.push({
            id: p.id,
            name: key,
            dates: p.span,
            role: figLine,
            periodId: p.id,
            regionId: "all",
            targetType: "period",
            targetId: p.id
          });
        }
      });
    });
    return people;
  }

  const PEOPLE_INDEX = buildPeopleIndex();

  function buildResearchIndex() {
    const items = [];
    LearningResearch.researchLibrary.categories.forEach((cat) => {
      cat.items.forEach((item) => {
        items.push({ ...item, categoryName: cat.nameVi, categoryZh: cat.nameZh });
      });
    });
    return items;
  }

  const RESEARCH_INDEX = buildResearchIndex();

  function performGlobalSearch(query, filters = {}) {
    const rawQ = (query || "").trim();
    const normQ = normalizeText(rawQ);
    if (!normQ) {
      return {
        articles: [],
        terms: [],
        artifacts: [],
        periods: [],
        people: [],
        places: [],
        provinces: [],
        texts: [],
        paintings: [],
        research: []
      };
    }

    const qVariants = [rawQ.toLowerCase(), normQ, ...(QUERY_ALIASES[normQ] || []).map(normalizeText)];
    const match = (fields) =>
      fields.some((f) => {
        if (!f) return false;
        const low = String(f).toLowerCase();
        const normF = normalizeText(f);
        return qVariants.some((qv) => low.includes(qv) || normF.includes(qv));
      });

    const periodFilter = filters.period || "all";
    const regionFilter = filters.region || "all";
    const levelFilter = filters.level || "all";
    const sourceFilter = filters.source || "all";

    const regionCityMap = {
      "Hoa Bắc": "north",
      "Hoa Đông": "east",
      "Hoa Nam": "south",
      "Tây Nam": "southwest",
      "Tây Bắc": "northwest",
      "Đông Bắc": "northeast"
    };

    const allProvincesList = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];

    return {
      articles: Articles.filter((a) => {
        const sup = getArticleSupplement(a.id);
        const enPack = getArticleEnPack(a.id);
        if (periodFilter !== "all" && (!sup || sup.periodId !== periodFilter)) return false;
        if (regionFilter !== "all" && (!sup || sup.regionId !== regionFilter)) return false;
        if (levelFilter !== "all" && (!sup || !normalizeText(sup.difficulty).includes(normalizeText(levelFilter)))) return false;
        if (sourceFilter !== "all" && (!sup || !normalizeText(sup.sourceType).includes(normalizeText(sourceFilter)))) return false;
        return match([
          a.titleVi,
          a.titleEn,
          a.titleZh,
          a.introduction,
          a.historicalBackground,
          a.categoryLabel,
          ...(a.relatedTopics || []),
          sup && sup.primaryQuote ? sup.primaryQuote.zh : "",
          sup ? sup.comparativeAnalysis : "",
          enPack ? enPack.title : "",
          enPack ? enPack.standfirst : "",
          enPack ? enPack.introduction : "",
          enPack ? enPack.categoryLabel : ""
        ]);
      }),
      terms: [...Dictionary, ...(Store.getState().customFlashcards || [])].filter((t) => {
        if (levelFilter !== "all" && !normalizeText(t.level).includes(normalizeText(levelFilter))) return false;
        if (sourceFilter === "Museum") return false;
        return match([t.hanzi, t.traditional, t.pinyin, normalizeText(t.pinyin), t.hanViet, t.liushuType, t.liushuCategory, t.topicTag, t.components, t.english, t.vietnamese, t.context, t.radical]);
      }),
      artifacts: (Museum.artifacts || []).filter((art) => {
        if (periodFilter !== "all" && art.periodId !== periodFilter) return false;
        if (sourceFilter !== "all" && sourceFilter !== "Museum") return false;
        return match([art.nameVi, art.nameEn, art.nameZh, art.nameZhTrad, art.pinyin, art.collection, art.material, art.culturalSignificance, art.periodLabel]);
      }),
      periods: History.periods.filter((p) => {
        if (periodFilter !== "all" && p.id !== periodFilter) return false;
        return match([p.nameVi, p.nameEn, p.nameZh, p.nameZhTrad, p.overview, p.politics, p.vietnamRelations, p.governanceAndTax, ...(p.figures || [])]);
      }),
      people: PEOPLE_INDEX.filter((person) => {
        if (periodFilter !== "all" && person.periodId !== periodFilter) return false;
        if (regionFilter !== "all" && person.regionId !== "all" && person.regionId !== regionFilter) return false;
        return match([person.name, person.role, person.dates]);
      }),
      places: [
        ...Regions.cities.map((c) => ({ ...c, kind: "city", regionCode: regionCityMap[c.region] || "all" })),
        ...Regions.macroRegions.map((r) => ({ ...r, kind: "macro", regionCode: r.id }))
      ].filter((pl) => {
        if (regionFilter !== "all" && pl.regionCode !== regionFilter) return false;
        return match([pl.nameVi, pl.nameEn, pl.nameZh, pl.history, pl.economy, pl.provinces, pl.heritage, pl.cuisine]);
      }),
      provinces: allProvincesList.filter((pr) => {
        if (regionFilter !== "all" && pr.regionId && pr.regionId !== regionFilter) return false;
        return match([
          pr.nameVi,
          pr.nameZh,
          pr.pinyin,
          pr.identity && pr.identity.hanziSimplified,
          pr.identity && pr.identity.hanViet,
          pr.identity && pr.identity.abbreviation,
          pr.identity && pr.identity.capitalCity,
          pr.culturalIdentity,
          pr.historicalEvolution,
          pr.vietnamConnectivity
        ]);
      }),
      texts: Philosophy.classicalTexts.filter((txt) => {
        if (sourceFilter === "Museum") return false;
        return match([txt.titleZh, txt.titleVi, txt.titleEn, txt.school, txt.summary, txt.excerptZh, txt.excerptVi]);
      }),
      paintings: ((window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || []).filter((p) => {
        if (periodFilter !== "all" && p.eraId !== periodFilter) return false;
        return match([
          p.titleVi,
          p.titleZh,
          p.pinyin,
          p.titleEn,
          p.artist && p.artist.nameVi,
          p.artist && p.artist.nameZh,
          p.artist && p.artist.pinyin,
          p.material,
          p.museum,
          p.genreLabel,
          p.attribution,
          p.analysis && p.analysis.historicalBackground,
          p.analysis && p.analysis.brushwork,
          p.analysis && p.analysis.philosophicalMeaning
        ]);
      }),
      research: RESEARCH_INDEX.filter((r) => {
        if (sourceFilter !== "all" && !normalizeText(r.type).includes(normalizeText(sourceFilter))) return false;
        return match([r.title, r.institution, r.type, r.verification, r.categoryName]);
      }),
      vocabNotebook: (Store.getState().vocabNotebook || []).filter((vn) =>
        match([vn.term, vn.pinyin, vn.hanViet, vn.meaning, vn.sourceSentence, vn.note, vn.articleTitle])
      )
    };
  }

  // ==========================================================================
  // Vocabulary & Study Deck CSV / TSV Export Builder
  // ==========================================================================
  function exportVocabNotebookFile(format) {
    const entries = (Store.getState().vocabNotebook || []);
    if (!entries.length) {
      showToast(isEnglishUi() ? "Your Vocabulary Notebook has no entries yet!" : "Sổ tay Từ vựng chưa có mục từ nào để xuất!");
      return;
    }
    const sep = format === "tsv" ? "\t" : ",";
    const cleanCell = (val) => {
      const s = String(val || "").replace(/\r?\n/g, " ").trim();
      if (format === "tsv") return s.replace(/\t/g, " ");
      return `"${s.replace(/"/g, '""')}"`;
    };
    const header = ["Term_Or_Phrase", "Pinyin", "Han_Viet", "Meaning", "Source_Sentence", "Personal_Note", "Source_Article", "Saved_Date"].join(sep);
    const rows = entries.map((e) => [
      cleanCell(e.term),
      cleanCell(e.pinyin),
      cleanCell(e.hanViet),
      cleanCell(e.meaning),
      cleanCell(e.sourceSentence),
      cleanCell(e.note),
      cleanCell(e.articleTitle || e.articleId),
      cleanCell(e.createdAt)
    ].join(sep));
    const bom = "\uFEFF";
    const blob = new Blob([bom + header + "\n" + rows.join("\n")], {
      type: format === "tsv" ? "text/tab-separated-values;charset=utf-8;" : "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cce_vocab_reading_notebook.${format}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(isEnglishUi()
      ? `Exported ${entries.length} notebook entries (.${format.toUpperCase()})`
      : `Đã xuất ${entries.length} mục từ Sổ tay Ngữ cảnh (.${format.toUpperCase()})`);
  }

  function exportAnkiFile(format) {
    const cards = getAllFlashcards();
    if (!cards.length) {
      showToast("Không có mục từ nào trong bộ lọc hiện tại để xuất file!");
      return;
    }
    const sep = format === "tsv" ? "\t" : ",";
    const cleanCell = (val) => {
      const s = String(val || "").replace(/\r?\n/g, " ").trim();
      if (format === "tsv") return s.replace(/\t/g, " ");
      return `"${s.replace(/"/g, '""')}"`;
    };

    const header = ["Front_Hanzi", "Back_Full_Encoding", "Tags"].join(sep);
    const rows = cards.map((card) => {
      const front = card.hanzi;
      const examplesHtml = (card.examples || [])
        .map((ex, idx) => `${idx + 1}. ${ex.zh} (${ex.pinyin}) — ${ex.vi} / ${ex.en}`)
        .join("<br>");
      const liushu = card.liushuType || card.liushuCategory || "";
      const back = [
        `<b>1. Pinyin, Hán–Việt & Từ loại:</b> ${card.pinyin}${card.hanViet ? ` · Hán–Việt: ${card.hanViet}` : ""} [${card.pos || "n."}]`,
        `<b>2. Lục thư & Bộ thủ:</b> ${liushu ? `[${liushu}] ` : ""}${card.radical} | ${card.etymologyAndRadicals || card.components || ""}`,
        `<b>3. Nghĩa song ngữ:</b> EN: ${card.english} | VI: ${card.vietnamese}`,
        `<b>4. Mẹo ghi nhớ:</b> ${card.mnemonic || card.context || ""}`,
        `<b>5. Ngữ cảnh thực tế (${(card.examples || []).length} câu):</b><br>${examplesHtml}`
      ].join("<br><br>");
      const tag = `CCE::${(card.level || "General").replace(/\s+/g, "_")}`;
      return [cleanCell(front), cleanCell(back), cleanCell(tag)].join(sep);
    });

    const bom = "\uFEFF";
    const blob = new Blob([bom + header + "\n" + rows.join("\n")], {
      type: format === "tsv" ? "text/tab-separated-values;charset=utf-8;" : "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const lvlSlug = String(ui.flashcardLevelFilter || "all").toLowerCase().replace(/[^a-z0-9]+/g, "_");
    const topicSlug = String(ui.flashcardTopicFilter || "all").toLowerCase().replace(/[^a-z0-9]+/g, "_");
    a.download = `chinese_culture_vocab_bank_${ui.flashcardDeckMode}_${lvlSlug}_${topicSlug}.${format}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(isEnglishUi()
      ? `Exported ${cards.length} curated vocabulary entries (.${format.toUpperCase()})`
      : `Đã xuất ${cards.length} mục từ Sổ tay Từ điển (.${format.toUpperCase()})`);
  }

  function exportSurvivalAnkiFile(format, packFilter = "all") {
    const packs = (window.CCE_SURVIVAL_PACKS && window.CCE_SURVIVAL_PACKS.packs) || [];
    const activePacks = packFilter === "all" ? packs : packs.filter((p) => p.id === packFilter);
    const items = [];
    activePacks.forEach((pk) => {
      (pk.items || []).forEach((it) => {
        items.push({ pack: pk, item: it });
      });
    });
    if (!items.length) {
      showToast("Không có mục từ sinh tồn nào để xuất file!");
      return;
    }
    const fmt = format === "tsv" ? "tsv" : "csv";
    const sep = fmt === "tsv" ? "\t" : ",";
    const cleanCell = (val) => {
      const s = String(val || "").replace(/\r?\n/g, " ").trim();
      if (fmt === "tsv") return s.replace(/\t/g, " ");
      return `"${s.replace(/"/g, '""')}"`;
    };
    const header = ["Front_Hanzi_ZeroPinyin", "Pinyin", "Han_Viet", "Liushu_Radical_Logic", "Meaning_Vi_En", "Field_Tip", "Pack_Tag"].join(sep);
    const enExp = isEnglishUi();
    const rows = items.map(({ pack, item }) => {
      const meaning = enExp ? item.en : `${item.vi} | ${item.en}`;
      const liushuVal = enExp ? (item.liushuTypeEn || item.liushuType) : item.liushuType;
      const logicVal = enExp ? (item.radicalLogicEn || item.radicalLogic) : item.radicalLogic;
      const tipVal = enExp ? (item.fieldTipEn || item.fieldTip) : item.fieldTip;
      const tag = `CCE::Survival::Pack_${pack.number}`;
      return [
        cleanCell(item.hanzi),
        cleanCell(item.pinyin),
        cleanCell(item.hanViet),
        cleanCell(`[${liushuVal}] ${logicVal}`),
        cleanCell(meaning),
        cleanCell(tipVal),
        cleanCell(tag)
      ].join(sep);
    });
    const bom = "\uFEFF";
    const blob = new Blob([bom + header + "\n" + rows.join("\n")], {
      type: fmt === "tsv" ? "text/tab-separated-values;charset=utf-8;" : "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `cce_survival_hanzi_${packFilter || "all"}.${fmt}`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast(`Đã xuất ${items.length} từ Hành trang Sinh tồn chuẩn Anki (.${fmt.toUpperCase()})!`);
  }

  function copyTextToClipboard(text, successMsg) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard
        .writeText(text)
        .then(() => showToast(successMsg))
        .catch(() => showToast(successMsg + " (đã tạo trích dẫn)"));
    } else {
      showToast(successMsg);
    }
  }

  function speakChinese(text) {
    const clean = String(text || "").trim();
    if (!clean) return;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      try {
        window.speechSynthesis.cancel();
        const utter = new SpeechSynthesisUtterance(clean);
        utter.lang = "zh-CN";
        utter.rate = 0.88;
        const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
        const zhVoice = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("zh"));
        if (zhVoice) utter.voice = zhVoice;
        window.speechSynthesis.speak(utter);
        showToast(`Đang phát âm Phổ thông: "${clean.slice(0, 26)}${clean.length > 26 ? "..." : ""}"`);
      } catch (err) {
        showToast(`Phát âm Hán ngữ: ${clean}`);
      }
    } else {
      showToast(`Trình duyệt chưa hỗ trợ giọng đọc cho "${clean}".`);
    }
  }

  function cleanAbbrEn(val, enMode) {
    const s = String(val || "");
    return enMode ? s.replace(/\s*\([^)]*\)/g, "").trim() : s;
  }

  function renderSpeakBtn(zhText, title) {
    if (!zhText) return "";
    const resolvedTitle = title || (isEnglishUi() ? "Listen to Mandarin pronunciation (zh-CN)" : "Nghe phát âm tiếng Trung chuẩn (zh-CN)");
    return `<button type="button" class="tts-speak-btn" data-action="speak-zh" data-zh="${escapeHtml(zhText)}" title="${escapeHtml(resolvedTitle)}" aria-label="${escapeHtml(resolvedTitle)}">${ICONS.volume}</button>`;
  }

  function escapeBibtexValue(str) {
    return String(str == null ? "" : str)
      .replace(/\\/g, "\\textbackslash{}")
      .replace(/([&%$#_])/g, "\\$1")
      .replace(/[{}]/g, "");
  }

  function buildPaintingCitation(p, fmt) {
    const enC = isEnglishUi();
    const aName = enC ? (p.artist.nameEn || p.artist.nameVi) : p.artist.nameVi;
    const artistFull = `${aName} (${p.artist.nameZh})`;
    const pTit = enC ? (p.titleEn || p.titleVi) : p.titleVi;
    const pDate = enVal(p, "creationDate");
    const pMat = enVal(p, "material");
    const pDim = enVal(p, "dimensions");
    const pMus = enVal(p, "museum");
    if (fmt === "bibtex") {
      const key = p.id.replace(/[^a-zA-Z0-9]/g, "_");
      return `@misc{cce_${key},\n  author = {${escapeBibtexValue(artistFull)}},\n  title = {{${escapeBibtexValue(pTit)} (${escapeBibtexValue(p.titleZh)}${enC ? "" : ` / ${escapeBibtexValue(p.titleEn)}`})}},\n  year = {${escapeBibtexValue(pDate)}},\n  howpublished = {${escapeBibtexValue(pMus)}},\n  note = {Curated in Chinese Culture Explorer Digital Art Museum by ${escapeBibtexValue(Brand.founderName)}}\n}`;
    }
    if (fmt === "apa") {
      return `${artistFull}. (${pDate}). ${pTit} [${p.titleZh}${enC ? "" : ` / ${p.titleEn}`}; ${pMat}, ${pDim}]. ${pMus}. Chinese Culture Explorer Digital Art Museum.`;
    }
    return `${artistFull}. "${pTit} (${p.titleZh})." ${pDate}. ${pMat}, ${pDim}. ${pMus}. Chinese Culture Explorer.`;
  }

  function buildArticleCitation(art, fmt) {
    const enC = isEnglishUi();
    const enPack = enC ? getArticleEnPack(art.id) : null;
    const aTit = (enPack && enPack.title) || (enC ? art.titleEn : null) || art.titleVi;
    const aCat = (enPack && enPack.categoryLabel) || art.categoryLabel;
    const ref0 = (enPack && enPack.references && enPack.references[0]) || (art.references && art.references[0]) || null;
    const refTitle = (ref0 && typeof ref0 === "object" ? (ref0.title || ref0.author) : ref0)
      || (enC ? "Verified archival scholarship" : "Tư liệu học thuật đối chiếu");
    if (fmt === "bibtex") {
      const key = art.id.replace(/[^a-zA-Z0-9]/g, "_");
      return `@article{cce_art_${key},\n  author = {${escapeBibtexValue(Brand.founderName)} and Chinese Culture Explorer Editorial Board},\n  title = {{${escapeBibtexValue(aTit)} (${escapeBibtexValue(art.titleZh)})}},\n  journal = {${escapeBibtexValue(Brand.projectFullTitle)}},\n  year = {2026},\n  note = {Category: ${escapeBibtexValue(aCat)}. Primary Ref: ${escapeBibtexValue(refTitle)}}\n}`;
    }
    if (fmt === "apa") {
      return `${Brand.founderName} (Ed.). (2026). ${aTit} [${art.titleZh}${enC ? "" : ` / ${art.titleEn}`}]. ${Brand.projectFullTitle}. (${aCat}). Ref: ${refTitle}.`;
    }
    return `${Brand.founderName}, ed. "${aTit} (${art.titleZh}${enC ? "" : ` / ${art.titleEn}`})." ${Brand.projectFullTitle}, 2026. ${refTitle}.`;
  }

  // ==========================================================================
  // Shared Digital Museum, Monograph, Province & Smart Empty State Helpers
  // ==========================================================================
  function renderSmartEmptyState({
    query = "",
    resetAction = "clear-search-filters",
    resetAttrs = "",
    resetLabel = "Xóa bộ lọc & Xem toàn bộ kho lưu trữ",
    scopeLabel = "kho lưu trữ",
    targetField = "search",
    suggestions = ["Nho gia", "Tứ Xuyên", "Thanh Minh Thượng Hà Đồ", "Khoa cử", "Lục đại trà loại"]
  } = {}) {
    const qDisplay = query ? `cho từ khóa “${escapeHtml(query)}”` : "theo bộ lọc hiện tại";
    return `
      <div class="empty-filter-state" role="status" aria-live="polite">
        <div class="hanzi" style="font-size:1.75rem;margin-bottom:0.45rem;color:var(--accent-cinnabar);" aria-hidden="true">未获</div>
        <h3 style="margin:0 0 0.4rem;">Không tìm thấy tư liệu phù hợp ${qDisplay}</h3>
        <p style="max-width:560px;margin:0 auto 1rem;color:var(--text-secondary);font-size:0.9rem;">
          Chưa có mục nào trong ${escapeHtml(scopeLabel)} khớp với tiêu chí này. Bạn có thể tìm bằng tiếng Việt (có hoặc không dấu), chữ Hán, Pinyin hoặc nhấn vào một gợi ý bên dưới.
        </p>
        <button type="button" class="btn btn-primary btn-sm" data-action="${escapeHtml(resetAction)}" ${resetAttrs}>
          ${escapeHtml(resetLabel)}
        </button>
        <div class="empty-suggestions-row">
          <span style="width:100%;font-size:0.78rem;color:var(--text-muted);font-weight:600;">Từ khóa gợi ý khám phá:</span>
          ${suggestions.slice(0, 5).map((kw) => `
            <button
              type="button"
              class="empty-suggestion-btn"
              data-action="apply-empty-suggestion"
              data-target="${escapeHtml(targetField)}"
              data-query="${escapeHtml(kw)}"
            >${ICONS.search} ${escapeHtml(kw)}</button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderArtworkViewerMeta({ title = "", dimensions = "", material = "", museum = "", credit = "" } = {}) {
    const enM = isEnglishUi();
    const dims = dimensions || (enM ? "Scroll / museum archival object" : "Tư liệu quyển trục / hiện vật bảo tàng");
    const mat = material || (enM ? "Original archival medium" : "Chất liệu lưu trữ gốc bảo tàng");
    const mus = museum || (enM ? "Chinese Culture Explorer Digital Archive" : "Kho Lưu trữ Văn hiến Số Chinese Culture Explorer");
    const lic = credit || "Public Domain / Open Access Archival Attribution";
    return `
      <div class="artwork-viewer-meta-bar">
        ${title ? `<div style="font-weight:700;font-size:0.98rem;margin-bottom:0.2rem;">${escapeHtml(title)}</div>` : ""}
        <div class="artwork-viewer-meta-grid">
          <div class="artwork-viewer-chip">
            <span class="artwork-viewer-chip-label">${enM ? "Dimensions · 尺寸" : "Kích thước · 尺寸"}</span>
            ${escapeHtml(dims)}
          </div>
          <div class="artwork-viewer-chip">
            <span class="artwork-viewer-chip-label">${enM ? "Medium · 材质" : "Chất liệu · 材质"}</span>
            ${escapeHtml(mat)}
          </div>
          <div class="artwork-viewer-chip">
            <span class="artwork-viewer-chip-label">${enM ? "Collection · 馆藏机构" : "Bảo tàng Lưu trữ · 馆藏机构"}</span>
            ${escapeHtml(mus)}
          </div>
          <div class="artwork-viewer-chip">
            <span class="artwork-viewer-chip-label">${enM ? "Rights · 版权说明" : "Bản quyền · 版权说明"}</span>
            ${escapeHtml(lic)}
          </div>
        </div>
      </div>
    `;
  }

  function getItemHotspots(item, kind = "artifact") {
    if (item && Array.isArray(item.hotspotAnnotations) && item.hotspotAnnotations.length) {
      return item.hotspotAnnotations;
    }
    const enM = isEnglishUi();
    const labelZh = (item && (item.titleZh || item.nameZh)) || "文物细节";
    const titleVal = (item && (enM ? (item.titleEn || item.nameEn || item.titleVi || item.nameVi) : (item.titleVi || item.nameVi))) || (enM ? "Archived Work" : "Tác phẩm lưu trữ");
    const eraStr = (item && (item.dynasty ? (enM ? (item.dynasty.nameEn || item.dynasty.nameVi) : item.dynasty.nameVi) : (enM ? (item.periodLabelEn || item.period || item.creationDate) : (item.periodLabel || item.period || item.creationDate)))) || (enM ? "Historical Period" : "Lịch đại");
    const matStr = (item && (enM ? (item.materialEn || item.material) : item.material)) || (enM ? "classical medium" : "cổ điển");
    const musStr = (item && (enM ? (item.museumEn || item.collectionEn || item.museum || item.location) : (item.museum || item.location || item.collection))) || (enM ? "National Museum" : "bảo tàng quốc gia");
    return [
      {
        id: "hs-technique",
        x: 28,
        y: 34,
        titleVi: "Kỹ thuật chế tác & Bút pháp chủ đạo",
        titleEn: "Craftsmanship & Defining Brushwork",
        titleZh: kind === "painting" ? "笔墨皴法" : "工艺技法",
        pinyin: kind === "painting" ? "Bǐmò cūnfǎ" : "Gōngyì jìfǎ",
        category: "Kỹ thuật · 技法",
        categoryEn: "Technique · 技法",
        detail: `${titleVal} (${eraStr}) thể hiện chuẩn mực mỹ học và kỹ nghệ đặc trưng của thời kỳ, kết hợp tinh xảo giữa chất liệu (${matStr}) và bố cục không gian.`,
        detailEn: `${titleVal} (${eraStr}) exemplifies the canonical techniques and aesthetic standards of its dynasty, uniting refined materiality (${matStr}) with disciplined spatial craft.`
      },
      {
        id: "hs-inscription",
        x: 68,
        y: 26,
        titleVi: "Đề bạt, Minh văn & Ấn chương giám định",
        titleEn: "Colophons, Inscriptions & Collector Seals",
        titleZh: "题跋印章",
        pinyin: "Tíbá yìnzhāng",
        category: "Văn hiến · 题跋",
        categoryEn: "Epigraphy · 题跋",
        detail: `Hệ thống đề từ, ấn triện lưu truyền (${labelZh}) cho phép các nhà sử học nghệ thuật xác chứng niên đại truyền thừa và giá trị lịch sử bảo tàng.`,
        detailEn: `Transmitted inscriptions, colophons, and collector seals (${labelZh}) allow art historians to authenticate provenance chains across imperial and museum collections.`
      },
      {
        id: "hs-composition",
        x: 52,
        y: 66,
        titleVi: "Cấu trúc Thị giác & Giá trị Biểu tượng",
        titleEn: "Visual Architecture & Symbolic Order",
        titleZh: "构图意象",
        pinyin: "Gòutú yìxiàng",
        category: "Mỹ học · 美学",
        categoryEn: "Aesthetics · 美学",
        detail: `Trọng tâm bố cục tổ chức trục nhìn theo thẩm mỹ Đông Á (lưu bạch / đối xứng lễ nghi), hiện lưu trữ tại ${musStr}.`,
        detailEn: `The compositional core orchestrates visual flow according to classical East Asian principles of active void and ritual proportion, currently housed at ${musStr}.`
      }
    ];
  }

  function renderHotspotInspector(item, imgSrc, kind = "artifact") {
    const enM = isEnglishUi();
    const hotspots = getItemHotspots(item, kind);
    const total = hotspots.length;
    const activeIdx = Math.min(Math.max(0, ui.activeHotspotIdx || 0), Math.max(0, total - 1));
    const activeHs = hotspots[activeIdx] || hotspots[0];
    const prevIdx = (activeIdx - 1 + total) % Math.max(1, total);
    const nextIdx = (activeIdx + 1) % Math.max(1, total);
    const titleAlt = escapeHtml((item && (enM ? (item.titleEn || item.nameEn || item.titleVi || item.nameVi) : (item.titleVi || item.nameVi))) || (enM ? "Museum Object" : "Tác phẩm bảo tàng"));
    const zoomAttr = kind === "painting"
      ? `data-action="open-painting-zoom" data-id="${escapeHtml(item.id)}"`
      : `data-action="zoom-artifact"`;
    const scaleStyle = kind === "painting" ? `style="transform: scale(${ui.paintingZoomScale || 1});cursor:zoom-in;"` : `style="cursor:zoom-in;"`;
    const stageVisualHtml = imgSrc
      ? `<img decoding="async"  src="${escapeHtml(imgSrc)}" alt="${titleAlt}" class="hotspot-stage-img" ${kind === "painting" ? 'id="painting-modal-img"' : ""} ${zoomAttr} ${scaleStyle} onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />`
      : (kind === "artifact" ? Visuals.renderArtifactVisualHTML(item, true) : "");
    return `
      <div class="museum-viewer-frame" style="padding:0.75rem;">
        <div class="hotspot-stage-wrap" ${kind === "painting" ? 'id="painting-zoom-canvas-box"' : ""}>
          ${stageVisualHtml}
          ${hotspots.map((hs, idx) => `
            <button
              type="button"
              class="hotspot-pin ${idx === activeIdx ? "active" : ""}"
              style="left:${Number(hs.x) || 50}%;top:${Number(hs.y) || 50}%;"
              data-action="select-hotspot"
              data-idx="${idx}"
              title="${escapeHtml(enVal(hs, "titleVi"))} (${escapeHtml(hs.titleZh || "")})"
              aria-label="${enM ? `Detail ${idx + 1}` : `Điểm nhấn ${idx + 1}`}: ${escapeHtml(enVal(hs, "titleVi"))}"
            >${idx + 1}</button>
          `).join("")}
          ${kind === "painting" ? `
            <div class="painting-stage-controls">
              <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-in" title="${enM ? "Zoom in" : "Phóng to"}">+</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-out" title="${enM ? "Zoom out" : "Thu nhỏ"}">-</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="zoom-step-reset" title="100%">1:1</button>
              <button type="button" class="btn btn-primary btn-sm" data-action="open-painting-zoom" data-id="${escapeHtml(item.id)}" title="${enM ? "Full screen" : "Toàn màn hình"}">${ICONS.zoom}</button>
            </div>
          ` : ""}
        </div>

        <div class="hotspot-inspector-box">
          <div class="hotspot-cards-grid" role="tablist" aria-label="${enM ? "Select detail hotspot" : "Chọn điểm nhấn phân tích trên tác phẩm"}">
            ${hotspots.map((hs, idx) => `
              <button
                type="button"
                class="hotspot-chip-btn ${idx === activeIdx ? "active" : ""}"
                data-action="select-hotspot"
                data-idx="${idx}"
                role="tab"
                aria-selected="${idx === activeIdx ? "true" : "false"}"
              >
                <span class="hotspot-chip-index">${idx + 1}</span>
                <span style="min-width:0;">
                  <span style="display:block;font-size:0.72rem;font-weight:700;color:var(--accent-cinnabar);line-height:1.2;">${escapeHtml(hs.titleZh || `${enM ? "Detail" : "Chi tiết"} #${idx + 1}`)}</span>
                  <span style="display:block;font-size:0.79rem;font-weight:600;line-height:1.28;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(enVal(hs, "titleVi"))}</span>
                </span>
              </button>
            `).join("")}
          </div>

          ${activeHs ? `
            <div class="hotspot-detail-card">
              <div class="hotspot-detail-header">
                <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                  <span class="hotspot-active-counter">${enM ? `Detail #${activeIdx + 1} / ${total}` : `Điểm nhấn #${activeIdx + 1} / ${total}`}</span>
                  <span class="badge badge-gold">${escapeHtml(enVal(activeHs, "category") || (enM ? "Key Detail" : "Chi tiết Đắt giá"))}</span>
                </div>
                ${total > 1 ? `
                  <div class="hotspot-stepper">
                    <button type="button" class="hotspot-step-btn" data-action="select-hotspot" data-idx="${prevIdx}" aria-label="${enM ? "Previous detail" : "Điểm nhấn trước"}">${enM ? "← Prev" : "← Trước"}</button>
                    <button type="button" class="hotspot-step-btn" data-action="select-hotspot" data-idx="${nextIdx}" aria-label="${enM ? "Next detail" : "Điểm nhấn tiếp theo"}">${enM ? "Next →" : "Tiếp →"}</button>
                  </div>
                ` : ""}
              </div>
              <h4 class="hotspot-detail-title">${escapeHtml(enVal(activeHs, "titleVi"))}</h4>
              ${(activeHs.titleZh || activeHs.pinyin) ? `
                <div class="hotspot-detail-term">
                  ${activeHs.titleZh ? `<span class="hanzi">${escapeHtml(activeHs.titleZh)}</span>` : ""}
                  ${activeHs.pinyin ? `<span class="pinyin" style="color:var(--text-muted);font-weight:500;">• ${escapeHtml(activeHs.pinyin)}</span>` : ""}
                  ${activeHs.titleZh ? renderSpeakBtn(activeHs.titleZh) : ""}
                </div>
              ` : ""}
              <p class="hotspot-detail-body">${escapeHtml(enVal(activeHs, "detail"))}</p>
            </div>
          ` : ""}
        </div>

        ${kind === "painting" ? renderArtworkViewerMeta({
          dimensions: enVal(item, "dimensions") || item.specs || "",
          material: enVal(item, "material") || enVal(item, "categoryLabel") || "",
          museum: (enM ? (item.museumEn || item.collectionEn) : null) || item.museum || item.collection || item.location || "",
          credit: enVal(item, "attribution") || enVal(item, "credit") || ""
        }) : `
          <div class="artwork-viewer-meta-bar">
            <div style="font-size:0.76rem;color:#C4BEB5;line-height:1.45;">
              <strong style="color:#D7BA81 !important;">${enM ? "Collection:" : "Bảo tàng Lưu trữ:"}</strong>
              ${escapeHtml((enM ? (item.collectionEn || item.collection) : item.collection) || (enM ? "National Museum" : "Bảo tàng Quốc gia"))}
            </div>
          </div>
        `}
      </div>
    `;
  }

  function renderMonographPrimaryQuotes(quotes = []) {
    if (!Array.isArray(quotes) || !quotes.length) return "";
    const enMode = isEnglishUi();
    return `
      <section id="sec-primary-sources" class="article-section">
        <h2>${enMode ? "Primary-Source Quotations &amp; Commentary" : "Trích dẫn và bình giải tư liệu gốc"}</h2>
        ${quotes.map((q, idx) => `
          <div class="monograph-quote-4layer">
            <div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.35rem;">
              <span class="badge badge-outline">${enMode ? `Primary Source #${idx + 1}` : `Tư liệu gốc #${idx + 1}`}</span>
              <span style="font-size:0.78rem;color:var(--text-muted);">${escapeHtml(q.source || (enMode ? "Classical Canon" : "Cổ thư kinh điển"))}</span>
            </div>
            <div class="monograph-quote-zh">${escapeHtml(q.zh || "")} ${renderSpeakBtn(q.zh || "")}</div>
            <div class="monograph-quote-pinyin">Pinyin: ${escapeHtml(q.pinyin || "")}</div>
            ${q.hanViet ? `<div class="monograph-quote-hanviet">${enMode ? "Sino-Vietnamese:" : "Âm Hán – Việt:"} ${escapeHtml(q.hanViet)}</div>` : ""}
            <p style="margin:0;font-size:0.92rem;line-height:1.6;"><strong>${enMode ? "Translation &amp; Commentary:" : "Dịch nghĩa và bình giải:"}</strong> ${escapeHtml((enMode ? (q.translationEn || q.translationVi) : q.translationVi) || "")}</p>
          </div>
        `).join("")}
      </section>
    `;
  }

  function renderMonographLiushuGrid(terms = [], enTerms = []) {
    if (!Array.isArray(terms) || !terms.length) return "";
    const enMode = isEnglishUi();
    const enMap = new Map((enTerms || []).map((et) => [et.hanzi, et]));
    return `
      <section id="sec-liushu-terminology" class="article-section">
        <h2>${enMode ? `Core Terminology &amp; Liushu Analysis (${terms.length} Terms)` : `Thuật ngữ chuyên đề và chiết tự Lục thư (${terms.length} từ khóa)`}</h2>
        <div class="liushu-grid">
          ${terms.map((t) => {
            const matched = Dictionary.find((d) => d.hanzi === t.hanzi || d.id === t.id);
            const enInfo = enMap.get(t.hanzi);
            const meanEn = (enInfo && enInfo.meaningEn) || t.meaningEn || "";
            const ctxDisplay = enMode ? ((enInfo && enInfo.contextEn) || "") : (t.contextExample || "");
            return `
              <div class="liushu-chip-card">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">
                  <div>
                    <span class="hanzi" style="font-size:1.35rem;font-weight:800;">${escapeHtml(t.hanzi)}</span>
                    ${t.traditional && t.traditional !== t.hanzi ? `<span class="hanzi" style="font-size:0.9rem;color:var(--text-muted);margin-left:0.25rem;">(${escapeHtml(t.traditional)})</span>` : ""}
                    ${renderSpeakBtn(t.hanzi)}
                  </div>
                  <span class="liushu-badge">${escapeHtml(t.liushuCategory || "Liushu")}</span>
                </div>
                <div style="font-size:0.84rem;color:var(--imperial-red);font-weight:700;">${escapeHtml(t.pinyin || "")}${t.hanViet ? ` • <span style="color:var(--jade-green);">${escapeHtml(t.hanViet)}</span>` : ""}</div>
                ${!enMode && t.radicalAnalysis ? `<div style="font-size:0.8rem;color:var(--text-secondary);"><strong>Chiết tự Bộ thủ:</strong> ${escapeHtml(t.radicalAnalysis)}</div>` : ""}
                ${!enMode && t.meaningVi ? `<div style="font-size:0.84rem;"><strong>VI:</strong> ${escapeHtml(t.meaningVi)}</div>` : ""}
                ${meanEn ? `<div style="font-size:${enMode ? "0.84rem" : "0.78rem"};color:${enMode ? "var(--text-primary)" : "var(--text-muted)"};"><strong>${enMode ? "Gloss:" : "EN:"}</strong> ${escapeHtml(meanEn)}</div>` : ""}
                ${ctxDisplay ? `
                  <div style="background:var(--bg-subtle);padding:0.45rem 0.55rem;border-radius:6px;font-size:0.78rem;margin-top:0.2rem;">
                    ${escapeHtml(ctxDisplay)}
                  </div>
                ` : ""}
                <div style="margin-top:auto;padding-top:0.35rem;display:flex;gap:0.35rem;">
                  ${matched ? `<button type="button" class="btn btn-secondary btn-sm" data-action="open-term" data-id="${escapeHtml(matched.id)}">${enMode ? "Open Dictionary →" : "Mở Từ điển →"}</button>` : ""}
                </div>
              </div>
            `;
          }).join("")}
        </div>
      </section>
    `;
  }

  function renderUnifiedProvinceDetailContent(prov) {
    if (!prov) return "";
    const idn = prov.identity || {};
    const dishes = Array.isArray(prov.culinaryCulture && prov.culinaryCulture.signatureDishes)
      ? prov.culinaryCulture.signatureDishes
      : [];
    const heritage = Array.isArray(prov.heritageAndLandmarks) ? prov.heritageAndLandmarks : [];
    const figures = Array.isArray(prov.notableFigures) ? prov.notableFigures : [];
    const l1 = prov.layer1UrbanPulse || null;
    const l2 = prov.layer2HistoricalRoots || null;
    const l3 = prov.layer3TravelVietnam || null;
    const activeLayer = ui.provinceLayerTab || "all";
    const showL1 = activeLayer === "all" || activeLayer === "pulse";
    const showL2 = activeLayer === "all" || activeLayer === "roots";
    const showL3 = activeLayer === "all" || activeLayer === "travel";
    const ready = TravelReadiness && typeof TravelReadiness.getProvinceReadiness === "function"
      ? TravelReadiness.getProvinceReadiness(prov)
      : null;

    const enPr = isEnglishUi();
    const l1Title = enPr ? ((l1 && (l1.titleEn || l1.title)) || "") : ((l1 && l1.title) || "");
    const l1Body = enPr ? ((l1 && (l1.bodyEn || l1.body)) || "") : ((l1 && l1.body) || "");
    const l2Lineage = enPr ? ((l2 && (l2.lineageSummaryEn || l2.lineageSummary)) || "") : ((l2 && l2.lineageSummary) || "");
    return `
      <div class="tabs-bar" role="tablist" aria-label="${enPr ? "5-Tab Province Dossier" : "Hồ sơ Tỉnh/Thành 5 Thẻ"}" style="margin-bottom:1.1rem;">
        <button type="button" class="tab-btn ${activeLayer === "all" ? "active" : ""}" data-action="set-province-layer" data-layer="all">${enPr ? "Overview (All)" : "Tổng quan (Tất cả)"}</button>
        <button type="button" class="tab-btn ${activeLayer === "pulse" ? "active" : ""}" data-action="set-province-layer" data-layer="pulse">${enPr ? "Heritage &amp; Economy" : "Kinh tế &amp; Đời sống"}</button>
        <button type="button" class="tab-btn ${activeLayer === "roots" ? "active" : ""}" data-action="set-province-layer" data-layer="roots">${enPr ? "Culture &amp; Cuisine" : "Di sản, Văn hóa &amp; Ẩm thực"}</button>
        <button type="button" class="tab-btn ${activeLayer === "travel" ? "active" : ""}" data-action="set-province-layer" data-layer="travel">${enPr ? "Transport &amp; Know Before You Go" : "Cao tốc 12306 &amp; Hành trang"}</button>
      </div>

      ${showL1 ? `
        <section style="margin-bottom:1.25rem;">
          <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.35rem;">${enPr ? "LAYER 1 · CONTEMPORARY URBAN PULSE" : "LỚP 1 · ĐỜI SỐNG ĐƯƠNG ĐẠI &amp; DẤU ẤN THỊ GIÁC"}</div>
          ${l1 ? `
            <div class="card" style="padding:1rem 1.15rem;border-left:4px solid var(--imperial-red);margin-bottom:0.85rem;">
              <h4 style="margin:0 0 0.45rem;font-family:var(--font-editorial);font-size:1.15rem;color:var(--ink-primary);">${formatInlineMd(l1Title, true)}</h4>
              <p style="margin:0;font-size:0.9rem;line-height:1.65;color:var(--text-secondary);">${formatInlineMd(l1Body, true)}</p>
            </div>
          ` : ""}
          <div class="prov-dim-card">
            <h4>${enPr ? "Modern Urban Economy & Industrial Value Chain" : "Trụ cột Đô thị Hiện đại &amp; Chuỗi giá trị"}</h4>
            <p style="font-size:0.86rem;line-height:1.58;margin:0;">${escapeHtml((enPr && prov.economyEn) ? prov.economyEn : (prov.economyAndIndustry || prov.economyNote || ""))}</p>
          </div>
        </section>
      ` : ""}

      ${showL2 ? `
        <section style="margin-bottom:1.25rem;">
          <div class="editorial-kicker" style="color:var(--antique-gold);margin-bottom:0.35rem;">${enPr ? "LAYER 2 · HISTORICAL, PHILOSOPHICAL & CULTURAL ROOTS" : "LỚP 2 · CĂN CỐT LỊCH SỬ, TƯ TƯỞNG &amp; ĐỊA VĂN HÓA"}</div>
          ${l2Lineage ? `
            <div class="callout-editorial" style="margin:0 0 0.85rem;padding:0.75rem 1rem;">
              <strong>${enPr ? "Distinct Historical & Philosophical Lineage:" : "Mạch Lịch sử – Triết học Đặc trưng:"}</strong> ${formatInlineMd(l2Lineage, true)}
            </div>
          ` : ""}
          <div class="prov-encyclopedia-grid">
            <div class="prov-dim-card">
              <h4>${enPr ? "1. Administrative & Linguistic Identity (简称)" : "1. Định danh Hành chính &amp; Ngôn ngữ học (简称)"}</h4>
              <p style="font-size:0.86rem;line-height:1.58;margin:0;">
                <strong>${enPr ? "Hanzi:" : "Hán tự:"}</strong> ${escapeHtml(cleanAbbrEn(prov.headerFormatted || idn.hanziSimplified || prov.nameZh, enPr))} ${idn.hanziTraditional && idn.hanziTraditional !== idn.hanziSimplified ? `(${enPr ? "Traditional:" : "Phồn thể:"} ${escapeHtml(idn.hanziTraditional)})` : ""}<br>
                <strong>${enPr ? "Pinyin & Sino–Viet:" : "Pinyin &amp; Hán–Việt:"}</strong> <span class="pinyin">${escapeHtml(idn.pinyin || "")}</span> • <em>${escapeHtml(enPr ? (prov.nameEn || idn.hanViet || prov.nameVi) : (idn.hanViet || prov.nameVi))}</em><br>
                <strong>${enPr ? "Status:" : "Loại hình:"}</strong> ${escapeHtml(enVal(idn, "adminTypeFull") || (getEnHelp().provinceTypeEn ? getEnHelp().provinceTypeEn(idn.adminCategory || prov.type, enPr) : (idn.adminTypeFull || prov.adminType || "")))}<br>
                <strong>${enPr ? "Abbreviation (简称):" : "Viết tắt (简称):"}</strong> <strong style="color:var(--imperial-red);">${escapeHtml(idn.abbreviation || prov.abbr || "")} (${escapeHtml(enPr ? String(idn.abbreviationPinyin || "").replace(/\s*\([^)]*\)/g, "") : (idn.abbreviationPinyin || ""))})</strong> — ${escapeHtml(enVal(idn, "abbreviationOrigin"))}<br>
                <strong>${enPr ? "Capital / Center:" : "Thủ phủ / Trung tâm:"}</strong> ${escapeHtml(enVal(idn, "capitalCity") || enVal(prov, "capital"))}
              </p>
            </div>

            <div class="prov-dim-card">
              <h4>${enPr ? "2. Topography & Climate Shaping Culture" : "2. Địa mạo &amp; Khí hậu Định hình Văn hóa"}</h4>
              <p style="font-size:0.86rem;line-height:1.58;margin:0;">
                ${escapeHtml(enVal(prov.geographyAndClimate, "summary") || enVal(prov, "geography"))}
                ${prov.geographyAndClimate && (prov.geographyAndClimate.causalityEn || prov.geographyAndClimate.causality) ? `<br><br><strong>${enPr ? "Geo-Cultural Causality:" : "Cơ chế Nhân–Quả Địa lý &amp; Văn hóa:"}</strong> ${escapeHtml(enVal(prov.geographyAndClimate, "causality"))}` : ""}
              </p>
            </div>

            <div class="prov-dim-card">
              <h4>${enPr ? "3. Dynastic & Historical Evolution" : "3. Tiến trình Lịch sử qua các Triều đại"}</h4>
              <p style="font-size:0.86rem;line-height:1.58;margin:0;">${escapeHtml(enVal(prov, "historicalEvolution") || enVal(prov, "cultureHistory"))}</p>
            </div>

            <div class="prov-dim-card">
              <h4>${enPr ? "4. Sub-Regional Cultural Identity & Dialect" : "4. Bản sắc Tiểu vùng Văn hóa &amp; Phương ngôn"}</h4>
              <p style="font-size:0.86rem;line-height:1.58;margin:0;">${escapeHtml(enVal(prov, "culturalIdentity") || enVal(prov, "cultureHistory"))}</p>
            </div>

            <div class="prov-dim-card">
              <h4>${enPr ? "6. Intangible Heritage & Artisan Crafts" : "6. Di sản Phi vật thể &amp; Nghề Thủ công"}</h4>
              <p style="font-size:0.86rem;line-height:1.58;margin:0;">${escapeHtml(enVal(prov, "intangibleHeritage") || enVal(prov, "famousPlaces"))}</p>
            </div>

            ${prov.literaryAndHistoricalEchoes ? (() => {
              const echo = prov.literaryAndHistoricalEchoes;
              return `
                <div class="prov-dim-card">
                  <h4>${enPr ? "14. Poetic Resonance & Literary Allusions" : "14. Âm vang Thi ca &amp; Điển tích Địa danh"}</h4>
                  <div style="font-size:0.86rem;margin-bottom:0.4rem;">
                    <strong>${escapeHtml(enVal(echo, "workTitle"))}</strong> — <em>${escapeHtml(enVal(echo, "author"))}</em> (${escapeHtml(enVal(echo, "dynasty"))})
                  </div>
                  <div class="callout-editorial" style="margin:0.4rem 0;padding:0.65rem 0.85rem;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;">
                      <div class="hanzi" style="font-size:1.05rem;line-height:1.55;color:var(--ink-primary);">${formatHanzi(echo.quoteZh || "", echo.quoteZhTrad || echo.quoteZh || "")}</div>
                      ${renderSpeakBtn(echo.quoteZh || "", enPr ? "Listen to classical Hanzi text" : "Nghe đọc nguyên tác chữ Hán")}
                    </div>
                    ${echo.pinyin ? `<div class="pinyin" style="font-size:0.8rem;margin-top:0.25rem;">${escapeHtml(echo.pinyin)}</div>` : ""}
                    ${echo.hanViet ? `<div style="font-size:0.8rem;color:var(--imperial-red);font-weight:600;margin-top:0.2rem;">${enPr ? "Sino–Viet Reading:" : "Hán–Việt:"} ${escapeHtml(echo.hanViet)}</div>` : ""}
                  </div>
                  <p style="font-size:0.83rem;line-height:1.55;margin:0.35rem 0 0;color:var(--text-secondary);">${escapeHtml(enVal(echo, "meaningVi"))}</p>
                </div>
              `;
            })() : ""}
          </div>

          ${(() => {
            const itemVis = (window.CCE_PROVINCE_ITEM_VISUALS && window.CCE_PROVINCE_ITEM_VISUALS[prov.id]) || {};
            const hVis = Array.isArray(itemVis.heritage) ? itemVis.heritage : [];
            const dVis = Array.isArray(itemVis.dishes) ? itemVis.dishes : [];
            const fVis = Array.isArray(itemVis.figures) ? itemVis.figures : [];
            return `
          ${heritage.length ? `
            <div class="card mt-2" style="padding:1rem 1.15rem;">
              <h4 style="margin:0 0 0.65rem;color:var(--imperial-red);">${enPr ? `5. UNESCO World Heritage & Landmark Sites (${heritage.length} Sites)` : `5. Di sản Thế giới UNESCO &amp; Quần thể Danh thắng (${heritage.length} Địa danh)`}</h4>
              <div class="prov-dishes-grid">
                ${heritage.map((h, hIdx) => {
                  const hImg = hVis[hIdx];
                  const hCap = `${h.hanzi || ""} • ${enVal(h, "nameVi") || h.nameVi || ""}`;
                  return `
                  <div class="prov-dish-item">
                    ${hImg ? `<button type="button" class="prov-item-thumb" data-action="open-custom-image" data-src="${escapeHtml(hImg)}" data-caption="${escapeHtml(hCap)}" data-credit="${escapeHtml(prov.nameEn || prov.nameVi)} • Architectural & Heritage Archive" title="${enPr ? "Zoom image" : "Phóng to ảnh"}"><img src="${escapeHtml(hImg)}" alt="${escapeHtml(hCap)}" loading="lazy" decoding="async" /></button>` : ""}
                    <div style="display:flex;justify-content:space-between;gap:0.35rem;align-items:center;"><span style="font-weight:700;color:var(--imperial-red);"><span class="hanzi">${escapeHtml(h.hanzi || "")}</span> (${escapeHtml(h.pinyin || "")})</span>${h.hanzi ? renderSpeakBtn(h.hanzi) : ""}</div>
                    <div style="font-weight:600;margin:0.15rem 0;">${enPr ? escapeHtml(enVal(h, "nameVi")) : `${escapeHtml(h.hanViet || "")} — ${escapeHtml(enVal(h, "nameVi"))}`}</div>
                    <div style="font-size:0.8rem;color:var(--text-secondary);">${escapeHtml(enVal(h, "significance"))}</div>
                  </div>
                `;
                }).join("")}
              </div>
            </div>
          ` : ""}

          <div class="card mt-2" style="padding:1rem 1.15rem;">
            <h4 style="margin:0 0 0.45rem;color:var(--imperial-red);">${enPr ? "7. Regional Cuisine & Signature Specialties" : "7. Hệ thống Ẩm thực Bản địa &amp; Đặc sản Biểu tượng"}</h4>
            ${prov.culinaryCulture && prov.culinaryCulture.styleOverview ? `<p style="font-size:0.86rem;margin:0 0 0.65rem;">${escapeHtml(enVal(prov.culinaryCulture, "styleOverview"))}</p>` : ""}
            ${dishes.length ? `
              <div class="prov-dishes-grid">
                ${dishes.map((d, dIdx) => {
                  const dImg = dVis[dIdx];
                  const dCap = `${d.hanzi || ""} (${d.pinyin || ""}) • ${enPr ? (d.nameEn || d.hanViet || "") : (d.hanViet || "")}`;
                  return `
                  <div class="prov-dish-item">
                    ${dImg ? `<button type="button" class="prov-item-thumb" data-action="open-custom-image" data-src="${escapeHtml(dImg)}" data-caption="${escapeHtml(dCap)}" data-credit="${escapeHtml(prov.nameEn || prov.nameVi)} Culinary Archive" title="${enPr ? "Zoom dish photo" : "Phóng to ảnh món ăn"}"><img src="${escapeHtml(dImg)}" alt="${escapeHtml(d.hanzi || d.hanViet || "")}" loading="lazy" decoding="async" /></button>` : ""}
                    <div style="display:flex;justify-content:space-between;gap:0.35rem;align-items:center;">
                      <strong class="hanzi">${escapeHtml(d.hanzi)}</strong>
                      ${renderSpeakBtn(d.hanzi)}
                    </div>
                    <div style="font-size:0.8rem;color:var(--imperial-red);font-weight:600;">${escapeHtml(d.pinyin)}${enPr ? (d.nameEn ? ` • <span style="color:var(--jade-green);">${escapeHtml(d.nameEn)}</span>` : "") : ` • <span style="color:var(--jade-green);">${escapeHtml(d.hanViet)}</span>`}</div>
                    <p style="font-size:0.8rem;color:var(--text-secondary);margin:0.25rem 0 0;">${escapeHtml(enVal(d, "description"))}</p>
                  </div>
                `;
                }).join("")}
              </div>
            ` : `<p style="font-size:0.86rem;margin:0;">${escapeHtml(enVal(prov, "signatureFood"))}</p>`}
          </div>

          ${figures.length ? `
            <div class="card mt-2" style="padding:1rem 1.15rem;">
              <h4 style="margin:0 0 0.6rem;color:var(--imperial-red);">${enPr ? "10. Historical Luminaries, Thinkers & Cultural Figures" : "10. Danh nhân Lịch sử, Tư tưởng gia &amp; Văn nhân Tiêu biểu"}</h4>
              <div class="prov-figure-grid">
                ${figures.map((f, fIdx) => {
                  const fImg = fVis[fIdx];
                  const fCap = `${f.hanzi || ""} (${f.pinyin || ""}) — ${f.hanViet || f.nameVi || ""} (${f.lifespan || ""})`;
                  return `
                  <div class="prov-dish-item">
                    ${fImg ? `<button type="button" class="prov-item-thumb is-portrait" data-action="open-custom-image" data-src="${escapeHtml(fImg)}" data-caption="${escapeHtml(fCap)}" data-credit="Chinese Cultural & Historical Luminaries Archive" title="${enPr ? "Zoom portrait" : "Phóng to chân dung"}"><img src="${escapeHtml(fImg)}" alt="${escapeHtml(f.hanzi || f.hanViet || "")}" loading="lazy" decoding="async" /></button>` : ""}
                    <div style="display:flex;justify-content:space-between;gap:0.35rem;align-items:center;"><span style="font-weight:700;"><span class="hanzi">${escapeHtml(f.hanzi)}</span> (${escapeHtml(f.pinyin)})</span>${f.hanzi ? renderSpeakBtn(f.hanzi) : ""}</div>
                    <div style="font-size:0.82rem;color:var(--imperial-red);font-weight:600;">${escapeHtml(f.hanViet || f.nameVi)} (${escapeHtml(f.lifespan || "")})</div>
                    <p style="font-size:0.8rem;color:var(--text-secondary);margin:0.25rem 0 0;">${escapeHtml(enVal(f, "contribution"))}</p>
                  </div>
                `;
                }).join("")}
              </div>
            </div>
          ` : ""}
            `;
          })()}
        </section>
      ` : ""}

      ${showL3 ? `
        <section style="margin-bottom:1.15rem;">
          <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.35rem;">${enPr ? "LAYER 3 · PRE-DEPARTURE FIELD READINESS (12306 RAIL · WECHAT · TRADE CLUSTERS)" : "LỚP 3 · HÀNH TRANG THỰC ĐỊA CHO NGƯỜI VIỆT (12306 · WECHAT · CỤM CÔNG NGHIỆP)"}</div>
          ${l3 && Array.isArray(l3.hsrStations12306) && l3.hsrStations12306.length ? `
            <div class="card" style="padding:1rem 1.15rem;margin-bottom:0.85rem;border-top:3px solid var(--jade-green);">
              <h4 style="margin:0 0 0.6rem;color:var(--jade-green);">${enPr ? "12306 High-Speed Rail Hubs (Hanzi + Pinyin)" : "Đầu mối Đường sắt Cao tốc 12306 (Hán tự + Pinyin Chuẩn)"}</h4>
              <div class="grid ${l3.hsrStations12306.length > 2 ? "grid-3" : "grid-2"}" style="gap:0.65rem;">
                ${l3.hsrStations12306.map((st) => `
                  <div style="border:1px solid var(--hairline);padding:0.55rem 0.7rem;background:var(--bg-surface);">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">
                      <strong class="hanzi" style="font-size:1.05rem;color:var(--imperial-red);">${escapeHtml(st.hanzi)}</strong>
                      ${renderSpeakBtn(st.hanzi.split("/")[0].trim(), enPr ? "Listen to 12306 station name" : "Nghe tên nhà ga 12306")}
                    </div>
                    <div class="pinyin" style="font-size:0.78rem;color:var(--jade-green);font-weight:600;">${escapeHtml(st.pinyin)}</div>
                    <div style="font-size:0.78rem;color:var(--text-secondary);margin-top:0.2rem;line-height:1.45;">${escapeHtml(enVal(st, "noteVi"))}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

          ${ready ? `
            <div class="travel-readiness-card" style="margin-top:0;">
              <h4 style="margin:0 0 0.65rem;">${enPr ? `WeChat Booking (提前预约 / 护照), Best Season & Etiquette in ${escapeHtml(prov.nameEn || prov.nameVi)}` : `Đặt Vé WeChat (提前预约 / 护照), Mùa Đẹp &amp; Ứng xử Thực địa tại ${escapeHtml(prov.nameVi)}`}</h4>
              <div class="grid grid-2" style="gap:0.85rem;">
                <div style="font-size:0.85rem;line-height:1.6;">
                  <div><strong>${enPr ? "Best Season:" : "Mùa đẹp nhất:"}</strong> ${escapeHtml(enPr ? (ready.bestSeasonEn || ready.bestSeasonVi || "") : (ready.bestSeasonVi || prov.bestSeason || ""))}</div>
                  <div style="margin-top:0.45rem;"><strong>${enPr ? "Museum Reservations & Digital Survival:" : "Đặt vé Bảo tàng &amp; Số hóa:"}</strong> ${formatInlineMd(enPr ? ((l3 && (l3.bookingAndDigitalSurvivalEn || l3.bookingAndDigitalSurvival)) || ready.mustKnowEn || ready.mustKnowVi || "") : ((l3 && l3.bookingAndDigitalSurvival) || ready.mustKnowVi || ""), true)}</div>
                </div>
                <div style="font-size:0.85rem;line-height:1.6;">
                  <div><strong>${enPr ? "Local Dining & Ordering:" : "Khẩu vị &amp; Gọi món:"}</strong> ${escapeHtml(enPr ? (ready.flavorEn || ready.flavorVi || "") : (ready.flavorVi || prov.cuisine || ""))}</div>
                  <div style="margin-top:0.45rem;padding:0.5rem 0.65rem;background:var(--bg-jade-soft);border-left:3px solid var(--jade-green);">
                    <strong>${enPr ? "Flagship Industrial Cluster & Trade Corridor:" : "Cụm Công nghiệp Chủ lực &amp; Hành lang Thương mại:"}</strong> ${formatInlineMd(enPr ? ((l3 && (l3.industryCorridorBridgeEn || l3.industryCorridorBridge)) || ready.noteEn || ready.noteVi || "") : ((l3 && l3.industryCorridorBridge) || ready.noteVi || ""), true)}
                  </div>
                </div>
              </div>
              <div class="travel-signs-grid" style="margin-top:0.75rem;">
                ${(ready.signs || []).map((s) => `
                  <div class="travel-sign-chip">
                    <div class="hanzi" style="font-weight:700;color:var(--accent-cinnabar);font-size:0.95rem;">${escapeHtml(s.hanzi)}</div>
                    <div class="pinyin" style="font-size:0.74rem;color:var(--text-muted);">${escapeHtml(s.pinyin)}</div>
                    <div style="font-size:0.78rem;">${escapeHtml(enVal(s, "vi"))}</div>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}

          ${prov.commercialAndSupplyChain ? `
            <div class="prov-dim-card mt-2">
              <h4>${enPr ? "Historical Merchant Guilds & Cross-Border Trade Links" : "Kết nối Thương bang Lịch sử &amp; Giáo dục Việt–Trung"}</h4>
              <div style="font-size:0.84rem;line-height:1.55;display:flex;flex-direction:column;gap:0.35rem;">
                <div><strong>${enPr ? "Merchant Guild Heritage:" : "Thương bang lịch sử:"}</strong> ${escapeHtml(enVal(prov.commercialAndSupplyChain, "historicalGuild"))}</div>
                <div><strong>${enPr ? "Industrial Clusters & RCEP:" : "Cụm công nghiệp &amp; RCEP:"}</strong> ${escapeHtml(enVal(prov.commercialAndSupplyChain, "modernClusters"))} • ${escapeHtml(enVal(prov, "vietnamConnectivity"))}</div>
              </div>
            </div>
          ` : ""}
        </section>
      ` : ""}

      ${window.CCE_V104_VIEWS ? window.CCE_V104_VIEWS.renderProvinceMasterAtlas(prov, enPr) : ""}

      ${(prov.id === "prov-beijing" || prov.id === "prov-sichuan") ? (() => {
        const enG = isEnglishUi();
        const extraPhotos = prov.id === "prov-beijing"
          ? [
              { src: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg", cap: enG ? "Forbidden City Central Axis Gate" : "Cổng Son 81 Đinh Đồng Axis" },
              { src: "assets/images/museum/forbidden-city-jingshan-panorama.webp", cap: enG ? "Jingshan Panorama Over Palace" : "Toàn cảnh Từ Cảnh Sơn" },
              { src: "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg", cap: enG ? "Triple Marble Terraces Approach" : "Lối Ngự đạo & Tam Đài" },
              { src: "assets/images/museum/forbidden-city-autumn-ginkgo-moat.jpg", cap: enG ? "Moat & Autumn Ginkgo Canopy" : "Hào Nước & Ngân Hạnh Thu" }
            ]
          : [
              { src: "assets/images/museum/jiuzhaigou-five-flower-lake.jpg", cap: enG ? "Jiuzhaigou Five Flower Lake" : "Ngũ Hoa Hải Cửu Trại Câu" },
              { src: "assets/images/museum/jiuzhaigou-emerald-autumn-forest.webp", cap: enG ? "Jiuzhaigou Emerald Mirror Lake" : "Hồ Gương Sắc Thu Tứ Xuyên" }
            ];
        return `
          <div class="card mt-2" style="padding:1rem 1.15rem;">
            <h4 style="margin:0 0 0.65rem;color:var(--imperial-red);">${enG ? "Real-Site Photographic Supplement" : "Bộ Ảnh Thực Địa Bổ Sung"}</h4>
            <div class="grid ${extraPhotos.length > 2 ? "grid-4" : "grid-2"}" style="gap:0.65rem;">
              ${extraPhotos.map((p) => `
                <button type="button" class="card interactive" style="padding:0;overflow:hidden;text-align:left;border:1px solid var(--hairline);" data-action="open-custom-image" data-src="${p.src}" data-caption="${escapeHtml(p.cap)}" data-credit="Chinese Culture Explorer Archive">
                  <img decoding="async"  src="${p.src}" alt="${escapeHtml(p.cap)}" loading="lazy" style="width:100%;aspect-ratio:16/10;object-fit:cover;display:block;" />
                  <div style="padding:0.4rem 0.55rem;font-size:0.78rem;font-weight:700;">${escapeHtml(p.cap)}</div>
                </button>
              `).join("")}
            </div>
          </div>
        `;
      })() : ""}
    `;
  }

  // ==========================================================================
  // Header, Corporate Mega Menu System, Nested Mobile Drawer & 5-Col Footer
  // ==========================================================================
  function renderMegaMenuPanel() {
    const key = ui.activeMegaMenu;
    if (!key) return "";
    const enMm = isEnglishUi();
    const allProvinces = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];

    if (key === "explore") {
      const subjects = [
        { label: enMm ? `Essays & Monographs (${Articles.length})` : `Mục lục Chuyên luận (${Articles.length} Bài)`, zh: "学术长文", action: "nav", page: "explore" },
        { label: enMm ? `Historical Timeline (${History.periods.length} Periods)` : `Niên biểu Lịch sử (${History.periods.length} Thời kỳ)`, zh: "历史编年", action: "nav", page: "history" },
        { label: enMm ? "Imperial Examination (Keju) & Bureaucracy" : "Chế độ Khoa cử & Học thuật (科举)", zh: "科举制度", action: "open-article", id: "imperial-examination-keju" },
        { label: enMm ? "Silk Road & Maritime Trade Routes" : "Con đường Tơ lụa & Hải thương", zh: "丝绸之路", action: "open-article", id: "silk-road-maritime-trade" }
      ];
      const eras = [
        { label: enMm ? "Pre-Qin & Warring States" : "Thượng cổ & Xuân Thu – Chiến Quốc", sub: enMm ? "Liangzhu · Shang · Zhou · Hundred Schools" : "Lương Chử · Thương · Chu · Bách gia Chư tử", id: "spring-autumn-warring" },
        { label: enMm ? "Qin & Han Empires (秦汉)" : "Đế chế Tần – Hán (秦汉)", sub: enMm ? "Unified Script · Shiji · Silk Road" : "Thống nhất chữ viết · Sử Ký · Con đường Tơ lụa", id: "qin-han" },
        { label: enMm ? "Tang & Song Zenith (唐宋)" : "Thịnh Đường & Văn hiến Tống (唐宋)", sub: enMm ? "Chang'an · Keju · Neo-Confucianism · Landscape" : "Trường An · Khoa cử · Tống Nho · Quốc họa", id: "sui-tang" },
        { label: enMm ? "Yuan, Ming & Qing (元明清)" : "Nguyên – Minh – Thanh (元明清)", sub: enMm ? "Forbidden City · Zheng He · Evidential Learning" : "Tử Cấm Thành · Trịnh Hòa · Khảo cứ học", id: "ming" }
      ];
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "Explore & Timeline Mega Menu" : "Mega Menu Khám phá và Niên biểu"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar I · Exploration & History (历史探索)" : "Trụ cột I · Khám phá &amp; Niên biểu (历史探索)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="explore">${enMm ? "View All →" : "Tất cả →"}</button>
                </div>
                <div class="mega-links-list">
                  ${subjects.map((s) => `
                    <button type="button" class="mega-link-btn" data-action="${s.action}" ${s.page ? `data-page="${s.page}"` : ""} ${s.id ? `data-id="${s.id}"` : ""}>
                      <span><strong>${s.label}</strong></span>
                      <span class="hanzi" style="font-size:0.8rem;color:var(--accent-cinnabar);">${s.zh}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Jump by Dynastic Era (朝代脉络)" : "Nhảy nhanh Trục Triều đại (朝代脉络)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="history">${History.timelineEvents.length} ${enMm ? "Events →" : "Mốc sử →"}</button>
                </div>
                <div class="mega-links-list">
                  ${eras.map((e) => `
                    <button type="button" class="mega-link-btn" data-action="jump-period" data-id="${e.id}">
                      <div><strong>${e.label}</strong><span class="mega-link-sub">${e.sub}</span></div>
                      <span style="color:var(--accent-cinnabar);font-weight:700;">→</span>
                    </button>
                  `).join("")}
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Institutional Spotlight" : "Tiêu điểm Thể chế &amp; Sử liệu"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb">
                    <img decoding="async"  src="assets/images/articles/hero-keju-examinations.jpg" alt="${enMm ? "Chinese Imperial Examinations & Historical Heritage" : "Khoa cử Trung Hoa & Di sản Lịch sử"}" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">${enMm ? "Institutional History · 科举与士人" : "Lịch sử Thể chế · 科举与士人"}</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "From Imperial Examination Lists to East Asian Meritocracy" : "Từ Bảng vàng Khoa cử đến Đế chế Quan liêu Đông Á"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="imperial-examination-keju">${enMm ? "Read Monograph →" : "Đọc chuyên luận →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="history">${enMm ? "14 Dynasties" : "14 Triều đại"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (key === "philosophy") {
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "Philosophy & Classics Mega Menu" : "Mega Menu Tư tưởng và Văn hiến"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar II · Thought &amp; Classics (哲学文献)" : "Trụ cột II · Tư tưởng &amp; Văn hiến (哲学文献)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="philosophy">${enMm ? "Philosophy →" : "Trang Triết học →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="philosophy">
                    <div><strong>${enMm ? `Hundred Schools of Thought (${Philosophy.schools.length} Schools)` : `Hệ thống Bách gia Chư tử (${Philosophy.schools.length} Trường phái)`}</strong><span class="mega-link-sub">${enMm ? "Confucianism · Daoism · Mohism · Legalism · Chan Buddhism" : "Nho gia · Đạo gia · Mặc gia · Pháp gia · Thiền tông · Lý học"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">哲学</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-traditional" data-tab="metaphysics">
                    <div><strong>${enMm ? `Yin–Yang, I Ching &amp; Classical Systems (${Metaphysics.systems.length})` : `Âm Dương, Chu Dịch &amp; Thuật số (${Metaphysics.systems.length})`}</strong><span class="mega-link-sub">${enMm ? "64 Hexagrams · Bazi · Feng Shui · Qimen Dunjia in historical context" : "Kinh Dịch 64 quẻ · Bát Tự · Phong Thủy · Kỳ Môn dưới góc nhìn Sử học"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">易经</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-traditional" data-tab="customs">
                    <div><strong>${enMm ? `Customs, Rituals &amp; 24 Solar Terms (${CustomsArt.customs.length})` : `Phong tục, Lễ nghi &amp; 24 Tiết khí (${CustomsArt.customs.length})`}</strong><span class="mega-link-sub">${enMm ? "Spring Festival · Qingming · Dragon Boat · Tea &amp; Yangsheng" : "Xuân Tiết · Thanh Minh · Đoan Ngọ · Trà đạo &amp; Dưỡng sinh Đông y"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">民俗</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? `Schools &amp; Primary Texts (${Philosophy.classicalTexts.length})` : `Học phái &amp; Kinh điển Sơ cấp (${Philosophy.classicalTexts.length} Bộ)`}</span>
                </div>
                <div class="mega-links-grid">
                  ${Philosophy.schools.slice(0, 6).map((s) => `
                    <button type="button" class="mega-link-btn" data-action="jump-school" data-id="${s.id}">
                      <span><strong>${enVal(s, "nameVi") || s.nameVi}</strong></span>
                      <span class="hanzi" style="font-size:0.78rem;color:var(--accent-cinnabar);">${s.nameZh}</span>
                    </button>
                  `).join("")}
                  <button type="button" class="mega-link-btn" data-action="open-article" data-id="tcm-solar-terms-yangsheng">
                    <span><strong>${enMm ? "24 Solar Terms &amp; Neijing" : "24 Tiết khí &amp; Nội Kinh"}</strong></span>
                    <span class="hanzi" style="font-size:0.78rem;color:var(--accent-cinnabar);">节气</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-article" data-id="suzhou-classical-gardens-aesthetics">
                    <span><strong>${enMm ? "Scholar Garden Aesthetics" : "Mỹ học Văn nhân Đương đại"}</strong></span>
                    <span class="hanzi" style="font-size:0.78rem;color:var(--accent-cinnabar);">园林</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Featured Philosophical Monograph" : "Chuyên luận Kinh điển Tiêu biểu"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb">
                    <img decoding="async"  src="assets/images/articles/hero-confucianism.jpg" alt="Nho học và Truyền thống Văn hiến Đông Á" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">${enMm ? "Classical Philosophy · 儒道佛合流" : "Triết học Kinh điển · 儒道佛合流"}</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "Confucian Ethics, Daoist Wuwei &amp; Synthesis of the Three Teachings" : "Cấu trúc Đạo đức Nho gia, Vô Vi Đạo học &amp; Tam Giáo Hợp Lưu"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="philosophy">${enMm ? "Explore Classics →" : "Khảo cứu Kinh điển →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="nav-traditional" data-tab="metaphysics">${enMm ? "Cosmology" : "Thuật số"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (key === "paintings") {
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "Museum & Arts Mega Menu" : "Mega Menu Bảo tàng và Nghệ thuật"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar III · Museum &amp; Arts (博物艺术)" : "Trụ cột III · Bảo tàng &amp; Nghệ thuật (博物艺术)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="paintings">${enMm ? "Gallery →" : "Vào Triển lãm →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="paintings">
                    <div><strong>${enMm ? `Guohua Painting Gallery (${PaintingsList.length} Masterworks)` : `Triển lãm Quốc họa Danh tác (${PaintingsList.length} Kiệt tác)`}</strong><span class="mega-link-sub">${enMm ? "Six Dynasties to Modern · Hotspot Zoom &amp; Side-by-Side Comparison" : "Từ Ngụy Tấn đến Hiện đại · Chấm soi Hotspot &amp; So sánh Kề đôi"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">国画</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="museum">
                    <div><strong>${enMm ? `Digital Artifact Museum (${Museum.artifacts.length} Relics)` : `Bảo tàng Số Hiện vật (${Museum.artifacts.length} Bảo vật)`}</strong><span class="mega-link-sub">${enMm ? "Bronzes · Jade · Jingdezhen Porcelain · Provenance Archive" : "Đồng thanh · Ngọc khí · Gốm sứ Cảnh Đức Trấn · Cổ tịch Giám định"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">博物</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-traditional" data-tab="arts">
                    <div><strong>${enMm ? `Calligraphy, Seal Carving &amp; Architecture (${CustomsArt.arts.length})` : `Thư pháp, Triện khắc &amp; Kiến trúc (${CustomsArt.arts.length})`}</strong><span class="mega-link-sub">${enMm ? "Five Scripts · Guqin · Classical Opera &amp; Suzhou Gardens" : "Ngũ thể Thư pháp · Cổ cầm · Hý khúc &amp; Lâm viên Tô Châu"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">美学</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Curated Masterworks &amp; Relics" : "Tuyển chọn Kiệt tác &amp; Hiện vật Cốt lõi"}</span>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="open-painting-detail" data-id="qianli-jiangshan">
                    <div><strong>${enMm ? "A Thousand Li of Rivers and Mountains (Wang Ximeng)" : "Thiên Lý Giang Sơn Đồ (Tống Vương Hi Mạnh)"}</strong><span class="mega-link-sub">${enMm ? "Blue-green landscape handscroll · Palace Museum Beijing" : "Thanh lục sơn thủy quyển trục · Cố Cung Bắc Kinh"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">千里</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-artifact" data-id="qingming-scroll">
                    <div><strong>${enMm ? "Along the River During the Qingming Festival" : "Thanh Minh Thượng Hà Đồ (Trương Trạch Đoan)"}</strong><span class="mega-link-sub">${enMm ? "Northern Song urban scroll · 3 high-res inspection pins" : "Kiệt tác đô thị Bắc Tống · Kèm 3 điểm soi cận cảnh"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">清明</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-artifact" data-id="sanxingdui-bronze-mask">
                    <div><strong>${enMm ? "Sanxingdui Gold Mask &amp; Ancient Shu Culture" : "Mặt nạ Vàng Tam Tinh Đôi &amp; Văn hóa Ba Thục"}</strong><span class="mega-link-sub">${enMm ? "Shang–Shu Bronze Civilization (Sichuan)" : "Thanh đồng Thương – Thục (Tứ Xuyên)"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">三星堆</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Calligraphy &amp; Scroll Aesthetics" : "Thư pháp &amp; Mỹ học Quyển trục"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb mega-featured-thumb--contain">
                    <img decoding="async"  src="assets/images/articles/hero-calligraphy-five-scripts.jpg" alt="《Lan Đình Tập Tự》 (Đường Thần Long mô bản)" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">${enMm ? "Calligraphy Aesthetics · 书法与篆刻" : "Mỹ học Thư pháp · 书法与篆刻"}</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "Lantingji Xu &amp; Five Classical Brushwork Scripts" : "《Lan Đình Tập Tự》 &amp; Hệ thống Bút pháp Ngũ thể Cổ điển"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="chinese-calligraphy-seal-aesthetics">${enMm ? "Read Monograph →" : "Đọc chuyên luận →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="paintings">${PaintingsList.length} ${enMm ? "Paintings" : "Quốc họa"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (key === "regions") {
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "34 Provinces & Geocultural Atlas Mega Menu" : "Mega Menu 34 Tỉnh và Địa văn hóa"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar IV · 34 Provincial Units (中华地域)" : "Trụ cột IV · Địa văn hóa 34 Đơn vị (中华地域)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="regions">${enMm ? "Open Atlas →" : "Mở Atlas →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="open-regions-directory">
                    <div><strong>${enMm ? `Full Directory of ${allProvinces.length || 34} Provinces &amp; Municipalities` : `Danh bạ Đầy đủ ${allProvinces.length || 34} Đơn vị Cấp tỉnh &amp; Hành trang`}</strong><span class="mega-link-sub">${enMm ? "23 Provinces · 5 Autonomous Regions · 4 Municipalities · 2 SARs" : "23 Tỉnh · 5 Khu Tự trị · 4 Thành phố TW · 2 Đặc khu"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">省市</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="set-map-view-page" data-mode="destinations">
                    <div><strong>${enMm ? "3-Tier Travel Atlas &amp; 16 Cultural Capitals" : "Cẩm nang Du lịch 3 Cấp &amp; 16 Cố đô Văn hóa"}</strong><span class="mega-link-sub">${enMm ? "Top 11 5A Hubs (Province → District → Experience) &amp; 5 12306 Rail Routes" : "Top 11 Điểm đến 5A (Tỉnh → Đô thị → Trải nghiệm) &amp; 5 Tuyến Cao tốc 12306"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">文旅</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-province-compare">
                    <div><strong>${enMm ? "Compare Any Two Provinces Side-by-Side" : "So sánh Chéo 2 Tỉnh/Thành Trực quan"}</strong><span class="mega-link-sub">${enMm ? "Geography, RCEP industries, UNESCO heritage &amp; regional cuisine" : "Đối chiếu địa mạo, kinh tế RCEP, di sản UNESCO &amp; ẩm thực"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">对比</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "6 Macro Geocultural Regions (六大文化区)" : "6 Đại vùng Địa văn hóa (六大文化区)"}</span>
                </div>
                <div class="mega-links-grid">
                  ${Regions.macroRegions.map((r) => `
                    <button type="button" class="mega-link-btn" data-action="select-region" data-id="${r.id}">
                      <span><strong>${enVal(r, "nameVi") || r.nameVi}</strong></span>
                      <span class="hanzi" style="font-size:0.78rem;color:var(--accent-cinnabar);">${r.nameZh}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Key Regional Corridor" : "Hồ sơ Vùng Trọng điểm"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb">
                    <img decoding="async"  src="assets/images/articles/hero-beijing-shanghai.jpg" alt="${enMm ? "Beijing & Shanghai Geocultural Corridors" : "Địa văn hóa Bắc Kinh và Thượng Hải"}" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">${enMm ? "34 Provinces Geocultural Matrix · 京沪与江南" : "Địa văn hóa 34 Tỉnh · 京沪与江南"}</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "Beijing – Jiangnan – Lingnan Corridors Across All 34 Units" : "Hành lang Bắc Kinh – Giang Nam – Lĩnh Nam trong Tổng thể 34 Tỉnh/Thành"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-regions-directory">${enMm ? "Open 34-Province Directory →" : "Mở Danh bạ 34 Tỉnh →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="open-province-compare">${enMm ? "Compare" : "So sánh"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (key === "sino-vietnam") {
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "Sino–Vietnam & Business Mega Menu" : "Mega Menu Trung Việt và Kinh doanh"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar V · Sino–Vietnam &amp; Trade (中越商贸)" : "Trụ cột V · Trung – Việt &amp; Thương mại (中越商贸)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="sino-vietnam">${enMm ? "Sino–Vietnam →" : "Mở Trung – Việt →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="sino-vietnam">
                    <div><strong>${enMm ? "Sino–Vietnamese Cultural &amp; Historical Dialogue" : "Giao lưu Văn hóa &amp; Lịch sử Trung – Việt"}</strong><span class="mega-link-sub">${enMm ? "Critical Reception · Chu Nom Localization · Lexical Heritage" : "Tiếp nhận lịch sử · Bản địa hóa Chữ Nôm · Di sản Hán – Việt"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">中越</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-traditional" data-tab="contemporary">
                    <div><strong>${enMm ? `Contemporary Society &amp; Innovation (${CustomsArt.contemporary.length})` : `Xã hội &amp; Đổi mới Trung Quốc Đương đại (${CustomsArt.contemporary.length})`}</strong><span class="mega-link-sub">${enMm ? "Digital Economy · HSR Grid · GBA Supply Chains &amp; Guochao" : "Kinh tế số · Hạ tầng Cao tốc · Bán dẫn Vùng Vịnh Lớn &amp; Guochao"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">当代</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-article" data-id="china-vietnam-supply-chain-rcep">
                    <div><strong>${enMm ? "Lang Son – Pingxiang – RCEP Trade Corridor" : "Hành lang Thương mại Lạng Sơn – Bằng Tường – RCEP"}</strong><span class="mega-link-sub">${enMm ? "Border Gate Logistics · ACFTA Form E &amp; Regional Value Chains" : "Logistics cửa khẩu · ACFTA Form E &amp; chuỗi cung ứng khu vực"}</span></div>
                    <span style="color:var(--accent-cinnabar);font-weight:700;">→</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Practical B2B Culture &amp; Negotiation" : "Thực chiến Kinh doanh &amp; Đàm phán B2B"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="business">${enMm ? "Business →" : "Trang Kinh doanh →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="business">
                    <div><strong>${enMm ? "Chinese Business Culture Playbook" : "Cẩm nang Văn hóa Kinh doanh Trung Hoa"}</strong><span class="mega-link-sub">${enMm ? "Guanxi · Mianzi · Banquet Protocol · WeCom Workflows" : "Guanxi (Quan hệ) · Mianzi (Thể diện) · Nghi thức Bàn tiệc &amp; WeCom"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">商贸</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-article" data-id="cross-border-b2b-contracts-cietac-viac">
                    <div><strong>${enMm ? "B2B Contract Negotiation &amp; Legal Due Diligence" : "Chiến lược Đàm phán Hợp đồng B2B &amp; Pháp lý"}</strong><span class="mega-link-sub">${enMm ? "Bilingual contracts · Factory vetting &amp; Commercial Arbitration" : "Soạn thảo song ngữ · Thẩm định nhà máy &amp; Trọng tài Thương mại"}</span></div>
                    <span style="color:var(--accent-cinnabar);font-weight:700;">→</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-article" data-id="canton-system-to-huaqiangbei-7-day-cycle">
                    <div><strong>${enMm ? "Guangdong – Shenzhen GBA Manufacturing Hub" : "Hệ sinh thái Sản xuất Quảng Đông – Thâm Quyến"}</strong><span class="mega-link-sub">${enMm ? "Huaqiangbei · Foshan – Dongguan Industrial Clusters" : "Hoa Cường Bắc · Cụm công nghiệp Phật Sơn – Đông Hoản"}</span></div>
                    <span style="color:var(--accent-cinnabar);font-weight:700;">→</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Contemporary Hub &amp; Commerce" : "Đô thị &amp; Thương mại Đương đại"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb">
                    <img decoding="async"  src="assets/images/articles/hero-contemporary-china.jpg" alt="Trung Quốc Đương đại và Vùng Vịnh Lớn" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">${enMm ? "Economy &amp; Society · 当代中国" : "Kinh tế &amp; Xã hội · 当代中国"}</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "From Cultural Foundations to 2026 Vietnam–China Supply Chains" : "Từ Nền tảng Văn hiến đến Chuỗi cung ứng Việt – Trung 2026"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="sino-vietnam">${enMm ? "Sino–Vietnam →" : "Trung – Việt →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="business">${enMm ? "B2B Trade" : "Kinh doanh B2B"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    if (key === "learning") {
      return `
        <div class="mega-menu-shell" role="region" aria-label="${enMm ? "Learning & Research Library Mega Menu" : "Mega Menu Học tập và Thư viện"}">
          <div class="container mega-menu-inner">
            <div class="mega-3col-grid">
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Pillar VI · Active Study &amp; Hanzi (学研字典)" : "Trụ cột VI · Học tập Chủ động &amp; Hán ngữ (学研字典)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="learning">${enMm ? "Study Hub →" : "Phòng học →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="nav-learning" data-tab="dictionary">
                    <div><strong>${enMm ? `Liushu Etymology Dictionary (${Dictionary.length} Entries)` : `Từ điển Chiết tự Lục thư (${Dictionary.length} Mục)`}</strong><span class="mega-link-sub">${enMm ? "Simplified/Trad · Pinyin · Sino-Viet · Radicals &amp; Mandarin Audio" : "Giản/Phồn · Pinyin · Âm Hán-Việt · Bộ thủ &amp; Audio Phổ thông"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">词典</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-learning" data-tab="flashcards">
                    <div><strong>${enMm ? "Vocabulary Notebook &amp; Flashcard Exports (CSV/TSV)" : "Sổ tay Từ vựng &amp; Ghi chú Chuyên luận (CSV/TSV)"}</strong><span class="mega-link-sub">${enMm ? "Capture terms while reading &amp; study 10 curated thematic decks" : "Lưu thuật ngữ từ văn bản đang đọc &amp; tra bộ từ điển 10 chuyên đề"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">笔记</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav-learning" data-tab="kmap">
                    <div><strong>${enMm ? "Knowledge Graph &amp; Research Journal" : "Bản đồ Tri thức &amp; Nhật ký Nghiên cứu"}</strong><span class="mega-link-sub">${enMm ? "Philosophical K-Map · Feynman Quiz · Personal Study Log" : "K-Map tư tưởng · Trắc nghiệm Feynman · Ghi chú chuyên luận"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">图谱</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Research Library &amp; Charter (学术研究)" : "Thư viện Nghiên cứu &amp; Dự án (学术研究)"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="nav" data-page="library">${enMm ? "Library →" : "Thư viện →"}</button>
                </div>
                <div class="mega-links-list">
                  <button type="button" class="mega-link-btn" data-action="open-library-tab" data-tab="classics">
                    <div><strong>${enMm ? `Four Treasuries Primary Classics (Siku · ${Philosophy.classicalTexts.length} Works)` : `Thư viện Cổ tịch Nguyên điển (Tứ Khố · ${Philosophy.classicalTexts.length} Kinh điển)`}</strong><span class="mega-link-sub">${enMm ? "Classics · History · Masters · Collections with Hanzi &amp; Pinyin" : "Kinh · Sử · Tử · Tập đối chiếu chữ Hán, Pinyin, Hán–Việt &amp; Từ điển"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">四库</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-library-tab" data-tab="monograph">
                    <div><strong>${enMm ? "Vietnam–China Strategic Monograph 2026–2030" : "Báo cáo Chuyên khảo Việt – Trung 2026–2030"}</strong><span class="mega-link-sub">${enMm ? "Macro analysis, trade corridors &amp; bilingual economic data" : "58 trang phân tích vĩ mô, thương mại &amp; biểu đồ số liệu"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">专著</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="open-library-tab" data-tab="compendia">
                    <div><strong>${enMm ? "9 Compendia &amp; Primary Source Registry (TYPE A–E)" : "9 Bộ Chuyên khảo &amp; Thư mục Gốc (TYPE A–E)"}</strong><span class="mega-link-sub">${enMm ? "GSO / NSO · Palace Museum · Verified Scholarly Editions" : "Tổng cục Thống kê · Viện Bảo tàng Cố Cung · Kinh điển học thuật"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">索引</span>
                  </button>
                  <button type="button" class="mega-link-btn" data-action="nav" data-page="about">
                    <div><strong>${enMm ? "About, Founder Charter &amp; Image Attribution" : "Về Dự án, Sáng lập viên &amp; Bản quyền Hình ảnh"}</strong><span class="mega-link-sub">${enMm ? "Historical triangulation policy · Public Domain / CC-BY-SA" : "Phương pháp luận kiểm chứng sử liệu · Public Domain / CC-BY-SA"}</span></div>
                    <span class="hanzi" style="color:var(--accent-cinnabar);">关于</span>
                  </button>
                </div>
              </div>
              <div>
                <div class="mega-col-header">
                  <span class="mega-col-title">${enMm ? "Featured Research Compendium" : "Tài liệu Chuyên khảo Trọng điểm"}</span>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="close-mega">${enMm ? "Close" : "Đóng"} ${ICONS.close}</button>
                </div>
                <div class="mega-featured-card">
                  <div class="mega-featured-thumb">
                    <img decoding="async"  src="assets/images/articles/hero-supply-chain-rcep.jpg" alt="Chuyên khảo Thương mại Việt - Trung" loading="lazy" />
                  </div>
                  <div class="mega-featured-body">
                    <div class="ed-essay-kicker">Research &amp; Active Recall · VN-CN-TRD-2026</div>
                    <h4 style="margin:0.2rem 0 0.35rem;font-size:0.96rem;">${enMm ? "Active Hanzi Study &amp; 58-Page Vietnam–China Monograph" : "Học Hán ngữ Chủ động &amp; Báo cáo Chuyên khảo Việt – Trung 58p"}</h4>
                    <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-top:0.55rem;">
                      <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="learning">${enMm ? "Study Notebook →" : "Mở Sổ tay &amp; Học tập →"}</button>
                      <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="library">${enMm ? "Research Library" : "Thư viện Nghiên cứu"}</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    return "";
  }

  function renderHeader() {
    const state = Store.getState();
    const activePage = state.activePage;
    const isDark = state.theme === "dark";
    const lp = getLangPack();
    const enHdr = isEnglishUi();

    return `
      <header class="site-header">
        <!-- Single Consolidated Navigation Bar (Brand Seal | 6 Pillars | Compact Controls) -->
        <nav class="primary-nav-bar" aria-label="${enHdr ? "Primary navigation" : "Điều hướng chính"}">
          <div class="container primary-nav-inner">
            <a href="/" class="brand-link" data-action="nav" data-page="home" title="${enHdr ? "Chinese Culture Explorer Home" : "Trang chủ Chinese Culture Explorer"}">
              <div class="brand-seal" aria-hidden="true">中国<br>文化</div>
              <div class="brand-title">
                <span class="brand-name">CHINESE CULTURE EXPLORER</span>
              </div>
            </a>

            <div class="desktop-nav-strip">
              <ul class="nav-list">
                ${NAV_ITEMS.map((item) => `
                  <li class="nav-item-wrap">
                    <button
                      type="button"
                      class="nav-item-btn ${isNavItemActive(item, state) ? "active" : ""}"
                      data-action="nav"
                      data-page="${item.id}"
                    >
                      <span>${getNavLabel(item)}</span>
                    </button>
                    ${item.hasMega ? `
                      <button
                        type="button"
                        class="nav-mega-chevron ${ui.activeMegaMenu === item.id ? "open" : ""}"
                        data-action="toggle-mega"
                        data-mega="${item.id}"
                        aria-expanded="${ui.activeMegaMenu === item.id ? "true" : "false"}"
                        aria-label="${enHdr ? `Open ${getNavLabel(item)} submenu` : `Mở menu ${getNavLabel(item)}`}"
                        title="${enHdr ? "Open submenu" : "Mở danh mục con"}"
                      >${ICONS.chevronDown}</button>
                    ` : ""}
                  </li>
                `).join("")}
              </ul>
            </div>

            <div class="nav-utility-controls">
              <button type="button" class="nav-util-btn" data-action="open-search" aria-label="${enHdr ? "Search & Q&A (Ctrl+K)" : "Tìm kiếm & Hỏi đáp (Ctrl+K)"}" title="${escapeHtml(lp.searchPlaceholder)} (Ctrl+K)">
                ${ICONS.search}
              </button>
              <select class="nav-util-select" data-action="ui-lang-select" aria-label="${enHdr ? "Select interface language" : "Chọn ngôn ngữ giao diện"}">
                <option value="vi" ${state.uiLang === "vi" ? "selected" : ""}>VI</option>
                <option value="en" ${state.uiLang === "en" ? "selected" : ""}>EN</option>
                <option value="zh-CN" ${state.uiLang === "zh-CN" ? "selected" : ""}>简体</option>
                <option value="zh-TW" ${state.uiLang === "zh-TW" ? "selected" : ""}>繁體</option>
              </select>
              <button type="button" class="nav-util-btn" data-action="toggle-script" title="${enHdr ? "Toggle Simplified / Simplified+Traditional Hanzi" : "Chuyển chế độ chữ Giản thể / Giản+Phồn thể"}">
                <span class="hanzi">${state.scriptMode === "both" ? "简/繁" : "简体"}</span>
              </button>
              <button type="button" class="nav-util-btn nav-bell-btn" data-action="open-updates-modal" aria-label="${isEnglishUi() ? "Updates & Weekly Digest" : "Cập nhật Mới & Bản tin Tuần"}" title="${isEnglishUi() ? "Weekly Hot Picks, Changelog & Email Digest" : "Bài đọc Nóng, Cập nhật Website & Bản tin Email"}">
                ${ICONS.bell}
                <span class="nav-bell-dot" aria-hidden="true"></span>
              </button>
              <button type="button" class="nav-util-btn" data-action="toggle-theme" aria-label="Chuyển giao diện Sáng / Tối" title="${isDark ? lp.themeLight : lp.themeDark}">
                ${isDark ? ICONS.sun : ICONS.moon}
              </button>
              ${(() => {
                const authSt = Auth.getState();
                const enM = isEnglishUi();
                const curL = state.uiLang || "vi";
                const signOutLbl = curL === "zh-CN" ? "退出" : curL === "zh-TW" ? "登出" : (enM ? "Exit" : "Thoát");
                const signInLbl = curL === "zh-CN" ? "登录" : curL === "zh-TW" ? "登入" : (enM ? "Sign In" : "Đăng nhập");
                if (authSt.authenticated && authSt.user) {
                  const rawIdentity = String(authSt.user.fullName || authSt.user.email || "Google")
                    .split("@")[0]
                    .replace(/[()[\]{}]/g, " ")
                    .replace(/\s+/g, " ")
                    .trim();
                  const nameTokens = rawIdentity ? rawIdentity.split(" ") : ["Google"];
                  const shortName = nameTokens[nameTokens.length - 1] || "Google";
                  return `
                    <button type="button" class="nav-util-btn nav-auth-btn is-authed" data-action="auth-signout" title="Google Account (${escapeHtml(authSt.user.email || authSt.user.fullName)}) — ${enM ? "Click to Sign Out" : "Nhấn để đăng xuất"}">
                      ${ICONS.user}
                      <span class="nav-auth-name">${escapeHtml(shortName)}</span>
                      <span class="nav-auth-sep" aria-hidden="true">·</span>
                      <span class="nav-auth-exit">${signOutLbl}</span>
                    </button>
                  `;
                }
                return `
                  <button type="button" class="nav-util-btn nav-auth-btn" data-action="auth-signin-google" title="${enM ? "Sign in with Google to sync Vocabulary Notebook & reading preferences" : "Đăng nhập Google để đồng bộ Sổ tay Từ vựng & tùy chọn cá nhân"}">
                    ${ICONS.google}
                    <span>${signInLbl}</span>
                  </button>
                `;
              })()}
            </div>

            <div class="mobile-header-tools">
              <button type="button" class="icon-btn" data-action="open-search" aria-label="${escapeHtml(lp.searchPlaceholder)}">${ICONS.search}</button>
              <button type="button" class="icon-btn" data-action="toggle-theme" aria-label="Chuyển giao diện Sáng / Tối">${isDark ? ICONS.sun : ICONS.moon}</button>
              <button type="button" class="icon-btn mobile-menu-btn" data-action="toggle-mobile-nav" aria-label="Mở menu điều hướng">${ICONS.menu}</button>
            </div>
          </div>
          ${renderMegaMenuPanel()}
        </nav>
        ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderStickyContextBar(activePage, enHdr) : ""}
      </header>
    `;
  }

  function renderMobileNavDrawer() {
    if (!ui.mobileNavOpen) return "";
    const state = Store.getState();
    const lp = getLangPack();
    return `
      <div class="mobile-nav-backdrop open" data-action="close-mobile-nav">
        <aside class="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Menu điều hướng di động">
          <div style="display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid var(--hairline);padding-bottom:0.75rem;">
            <div>
              <strong style="font-family:var(--font-editorial);font-size:1.05rem;">CHINESE CULTURE EXPLORER</strong>
              <div class="hanzi" style="font-size:0.8rem;color:var(--accent-cinnabar);">中国文化探索 · Lê Hưng Thịnh</div>
            </div>
            <button type="button" class="icon-btn" data-action="toggle-mobile-nav" aria-label="Đóng menu">${ICONS.close}</button>
          </div>

          <button type="button" class="btn btn-primary btn-sm" style="width:100%;justify-content:center;" data-action="open-search">
            ${ICONS.search}
            <span>${escapeHtml(lp.searchBtn)} (Ctrl+K)</span>
          </button>

          <button type="button" class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;" data-action="open-updates-modal">
            ${ICONS.bell}
            <span>${isEnglishUi() ? "Weekly Hot Picks & Site Updates" : "Cập nhật Mới & Bản tin Tuần"}</span>
          </button>

          ${(() => {
            const mAuth = Auth.getState();
            const enM = isEnglishUi();
            const curL = state.uiLang || "vi";
            const mSignOut = curL === "zh-CN" ? "退出登录" : curL === "zh-TW" ? "登出帳號" : (enM ? "Sign Out" : "Đăng xuất");
            const mSignIn = curL === "zh-CN" ? "Google 登录（同步生词本）" : curL === "zh-TW" ? "Google 登入（同步生詞本）" : (enM ? "Sign in with Google (Sync Notebook)" : "Đăng nhập Google (Đồng bộ Sổ tay)");
            if (mAuth.authenticated && mAuth.user) {
              return `
                <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;padding:0.55rem 0.7rem;background:var(--bg-surface);border:1px solid var(--hairline);border-radius:3px;">
                  <span style="font-size:0.8rem;color:var(--ink-primary);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${escapeHtml(mAuth.user.fullName || mAuth.user.email)}</span>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="auth-signout">${mSignOut}</button>
                </div>
              `;
            }
            return `
              <button type="button" class="btn btn-secondary btn-sm" style="width:100%;justify-content:center;gap:0.45rem;" data-action="auth-signin-google">
                ${ICONS.google}
                <span>${mSignIn}</span>
              </button>
            `;
          })()}

          <div style="display:flex;flex-direction:column;gap:0.25rem;">
            ${[
              { id: "home", zh: "首页", zhTW: "首頁", vi: "Trang chủ", en: "Home" },
              ...NAV_ITEMS,
              { id: "history", zh: "历史编年", zhTW: "歷史編年", vi: "Niên biểu Lịch sử (14 Thời kỳ)", en: "History (14 Dynasties)" },
              { id: "museum", zh: "数字博物馆", zhTW: "數位博物館", vi: `Bảo tàng Số (${Museum.artifacts.length} Bảo vật)`, en: `Digital Museum (${Museum.artifacts.length})` },
              { id: "business", zh: "商业文化", zhTW: "商業文化", vi: "Văn hóa Kinh doanh B2B", en: "Business Culture" },
              { id: "library", zh: "学术研究", zhTW: "學術研究", vi: "Thư viện Nghiên cứu", en: "Research Library" },
              { id: "about", zh: "关于项目", zhTW: "關於項目", vi: "Về Dự án & Bản quyền", en: "About & Legal" }
            ].map((item) => `
              <button
                type="button"
                class="nav-item-btn ${isNavItemActive(item, state) ? "active" : ""}"
                style="justify-content:space-between;width:100%;padding:0.55rem 0.65rem;border-bottom:1px solid var(--hairline);"
                data-action="nav"
                data-page="${item.id}"
              >
                <span>${getNavLabel(item)}</span>
                <span class="nav-hanzi">${state.uiLang === "zh-TW" ? (item.zhTW || item.zh) : item.zh}</span>
              </button>
            `).join("")}
          </div>

          <div style="padding-top:0.5rem;">
            <div style="font-size:0.74rem;font-weight:700;text-transform:uppercase;color:var(--ink-muted);margin-bottom:0.45rem;">${isEnglishUi() ? "Quick Access" : "Truy cập Nhanh"}</div>
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;">
              <button type="button" class="filter-pill" data-action="open-regions-directory">${isEnglishUi() ? "34 Provinces" : "34 Tỉnh/Thành"}</button>
              <button type="button" class="filter-pill" data-action="nav-learning" data-tab="dictionary">${isEnglishUi() ? `Dictionary (${Dictionary.length})` : `Từ điển (${Dictionary.length})`}</button>
              <button type="button" class="filter-pill" data-action="nav-learning" data-tab="flashcards">${isEnglishUi() ? "Vocab Notebook" : "Sổ tay Từ vựng"}</button>
              <button type="button" class="filter-pill" data-action="open-founder-message">${isEnglishUi() ? "Founder" : "Sáng lập"}</button>
            </div>
          </div>

          <div style="border-top:1px solid var(--hairline);padding-top:0.85rem;display:flex;flex-direction:column;gap:0.65rem;">
            <label style="font-size:0.8rem;font-weight:600;">${isEnglishUi() ? "Interface Language" : "Ngôn ngữ giao diện"}</label>
            <select class="form-select" data-action="ui-lang-select">
              <option value="vi" ${state.uiLang === "vi" ? "selected" : ""}>Tiếng Việt (Mặc định)</option>
              <option value="en" ${state.uiLang === "en" ? "selected" : ""}>English Interface</option>
              <option value="zh-CN" ${state.uiLang === "zh-CN" ? "selected" : ""}>简体中文界面</option>
              <option value="zh-TW" ${state.uiLang === "zh-TW" ? "selected" : ""}>繁體中文界面</option>
            </select>
            <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-theme">
              ${state.theme === "dark" ? `${ICONS.sun} ${escapeHtml(lp.themeLight)}` : `${ICONS.moon} ${escapeHtml(lp.themeDark)}`}
            </button>
          </div>
        </aside>
      </div>
    `;
  }

  function renderMobileBottomNav(activePage) {
    const lp = getLangPack();
    const items = [
      { id: "home", icon: ICONS.compass, label: getNavLabel({ vi: "Trang chủ", en: "Home", zh: "首页", zhTW: "首頁" }), action: "nav", page: "home" },
      { id: "paintings", icon: ICONS.palette, label: getNavLabel({ vi: "Quốc họa", en: "Art", zh: "国画", zhTW: "國畫" }), action: "nav", page: "paintings" },
      { id: "regions", icon: ICONS.mapPin, label: getNavLabel({ vi: "34 Tỉnh", en: "Atlas", zh: "地域", zhTW: "地域" }), action: "nav", page: "regions" },
      { id: "museum", icon: ICONS.museum, label: getNavLabel({ vi: "Bảo tàng", en: "Museum", zh: "博物", zhTW: "博物" }), action: "nav", page: "museum" },
      { id: "learning", icon: ICONS.book, label: getNavLabel({ vi: "Học tập", en: "Study", zh: "学研", zhTW: "學研" }), action: "nav", page: "learning" },
      { id: "search", icon: ICONS.search, label: lp.searchBtn, action: "open-search", page: "" }
    ];
    return `
      <nav class="mobile-bottom-nav" aria-label="Điều hướng nhanh trên di động">
        ${items
          .map(
            (it) => `
              <button
                type="button"
                class="mobile-bottom-nav-btn ${activePage === it.id ? "active" : ""}"
                data-action="${it.action}"
                ${it.page ? `data-page="${it.page}"` : ""}
              >
                <span class="mobile-bottom-nav-icon" aria-hidden="true">${it.icon}</span>
                <span class="mobile-bottom-nav-label">${escapeHtml(it.label)}</span>
              </button>
            `
          )
          .join("")}
      </nav>
    `;
  }

  function renderFooter() {
    const lp = getLangPack();
    return `
      <footer class="site-footer">
        <div class="container">
          <div class="footer-5col-grid">
            <!-- COLUMN 1: BRAND -->
            <div class="footer-official-signature">
              <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.35rem;">
                <span class="seal-stamp">探索</span>
                <div>
                  <strong style="font-family:var(--font-editorial);font-size:1.18rem;display:block;line-height:1.15;">${Brand.projectName}</strong>
                  <span class="hanzi" style="font-size:0.95rem;color:var(--imperial-red);font-weight:700;">${Brand.projectNameZh}</span>
                </div>
              </div>
              <div class="footer-tagline-text">${Brand.officialTagline}</div>
              <div style="font-size:0.8rem;color:var(--jade-green);font-weight:600;">${Brand.secondaryStatementEn}</div>
              <div style="font-size:0.85rem;color:var(--text-primary);font-weight:700;margin-top:0.25rem;">
                ${Brand.foundedByStatement}
              </div>
              <p style="font-size:0.8rem;color:var(--text-muted);margin:0.15rem 0 0;">
                ${Brand.copyrightNoticeFull}<br>
                ${escapeHtml(lp.footerSubtitle)}
              </p>
            </div>

            <!-- COLUMN 2: EXPLORE -->
            <div>
              <div class="footer-heading">${escapeHtml(lp.footerColExplore)}</div>
              <ul class="footer-links">
                <li><button type="button" data-action="nav" data-page="history">${escapeHtml(lp.fHistory)} (${History.periods.length} ${escapeHtml(lp.fPeriodsUnit)} • ${History.timelineEvents.length} ${escapeHtml(lp.fEventsUnit)})</button></li>
                <li><button type="button" data-action="nav" data-page="philosophy">${escapeHtml(lp.fPhilosophy)} (${Philosophy.schools.length} ${escapeHtml(lp.fSchoolsUnit)} • ${Philosophy.classicalTexts.length} ${escapeHtml(lp.fTextsUnit)})</button></li>
                <li><button type="button" data-action="nav-traditional" data-tab="metaphysics">${escapeHtml(lp.fMetaTcm)} (${Metaphysics.systems.length} ${escapeHtml(lp.fSystemsUnit)})</button></li>
                <li><button type="button" data-action="nav-traditional" data-tab="customs">${escapeHtml(lp.fCustomsArts)} (${CustomsArt.customs.length + CustomsArt.arts.length} ${escapeHtml(lp.fTopicsUnit)})</button></li>
                <li><button type="button" data-action="nav" data-page="regions">${escapeHtml(lp.fRegions)}</button></li>
                <li><button type="button" data-action="nav" data-page="sino-vietnam">${escapeHtml(lp.fSinoVn)} (${SinoVN.themes.length} ${escapeHtml(lp.fThemesUnit)})</button></li>
                <li><button type="button" data-action="nav" data-page="business">${escapeHtml(lp.fBusiness)} (${Business.themes.length} ${escapeHtml(lp.fThemesUnit)})</button></li>
              </ul>
            </div>

            <!-- COLUMN 3: LEARNING & RESEARCH -->
            <div>
              <div class="footer-heading">${escapeHtml(lp.footerColLearning)}</div>
              <ul class="footer-links">
                <li><button type="button" data-action="nav" data-page="museum">${escapeHtml(lp.fMuseum)} (${Museum.artifacts.length} ${escapeHtml(lp.fMasterpiecesUnit)})</button></li>
                <li><button type="button" data-action="nav-learning" data-tab="dictionary">${escapeHtml(lp.fDict)} (${Dictionary.length} ${escapeHtml(lp.fEntriesUnit)})</button></li>
                <li><button type="button" data-action="nav-learning" data-tab="flashcards">${escapeHtml(lp.fFlashcards)}</button></li>
                <li><button type="button" data-action="nav-learning" data-tab="kmap">${escapeHtml(lp.fKmap)} (${LearningResearch.knowledgeGraph.nodes.length} ${escapeHtml(lp.fNodesUnit)})</button></li>
                <li><button type="button" data-action="nav" data-page="library">${escapeHtml(lp.fLibrary)}</button></li>
                <li><button type="button" data-action="nav" data-page="learning">${escapeHtml(lp.fPaths)}</button></li>
                <li><button type="button" data-action="nav-learning" data-tab="journal">${escapeHtml(lp.fJournal)}</button></li>
              </ul>
            </div>

            <!-- COLUMN 4: ABOUT -->
            <div>
              <div class="footer-heading">${escapeHtml(lp.footerColAbout)}</div>
              <ul class="footer-links">
                <li><button type="button" data-action="open-about-section" data-section="about-sec-intro">${escapeHtml(lp.fAboutIntro)}</button></li>
                <li><button type="button" data-action="open-founder-message">${escapeHtml(lp.fFounderMsg)}</button></li>
                <li><button type="button" data-action="open-about-section" data-section="about-sec-methodology">${escapeHtml(lp.fEditorialStd)}</button></li>
                <li><button type="button" data-action="open-about-section" data-section="about-sec-sources">${escapeHtml(lp.fSourcePolicy)}</button></li>
                <li><button type="button" data-action="open-about-section" data-section="about-sec-contact">${escapeHtml(lp.fContact)}</button></li>
                <li><button type="button" data-v10-feedback-open="1" data-v10-feedback-cat="ui_ux">${escapeHtml(lp.fFeedback || (isEnglishUi() ? "Send Feedback" : "Đóng góp ý kiến"))}</button></li>
              </ul>
            </div>

            <!-- COLUMN 5: LEGAL & COPYRIGHT -->
            <div>
              <div class="footer-heading">${escapeHtml(lp.footerColLegal)}</div>
              <ul class="footer-links">
                <li><button type="button" data-action="open-legal-doc" data-doc="copyright">${escapeHtml(lp.fCopyright)}</button></li>
                <li><button type="button" data-action="open-legal-doc" data-doc="terms">${escapeHtml(lp.fTerms)}</button></li>
                <li><button type="button" data-action="open-legal-doc" data-doc="privacy">${escapeHtml(lp.fPrivacy)}</button></li>
                <li><button type="button" data-action="open-legal-doc" data-doc="licensing">${escapeHtml(lp.fLicensing)}</button></li>
                <li><button type="button" data-action="open-legal-doc" data-doc="image-credits">${escapeHtml(lp.fImgCredits)}</button></li>
                <li><button type="button" data-action="open-legal-doc" data-doc="disclaimer">${escapeHtml(lp.fDisclaimer)}</button></li>
              </ul>
            </div>
          </div>

          ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderFooterQuickPills(isEnglishUi()) : ""}

          <div class="footer-bottom">
            <span>${Brand.copyrightNoticeFull} • ${Brand.projectFullTitle}.</span>
            <span>${Brand.foundedByStatement} • Beyond Knowledge. Toward Understanding. Across Cultures.</span>
          </div>
        </div>
      </footer>
    `;
  }

  // ==========================================================================
  // Page 1: HOMEPAGE – ALL 10 CURATED EDITORIAL & MUSEUM SECTIONS
  // ==========================================================================
  function renderHeroAutocomplete() {
    if (!ui.heroAutocompleteOpen || !ui.heroSearchText.trim()) return "";
    const res = performGlobalSearch(ui.heroSearchText);
    const suggestions = [
      ...(res.paintings || []).slice(0, 2).map((p) => ({ label: `${p.titleVi} (${p.titleZh}) — ${p.artist.nameVi}`, meta: `Quốc họa • ${p.dynasty.nameVi}`, action: "open-painting-detail", id: p.id })),
      ...res.articles.slice(0, 3).map((a) => ({ label: a.titleVi, meta: `Chuyên luận • ${a.titleZh}`, action: "open-article", id: a.id })),
      ...res.terms.slice(0, 2).map((t) => ({ label: `${t.hanzi} (${t.pinyin}) — ${t.vietnamese}`, meta: "Từ điển", action: "open-term", id: t.id })),
      ...res.artifacts.slice(0, 2).map((m) => ({ label: m.nameVi, meta: `Bảo tàng • ${m.nameZh}`, action: "open-artifact", id: m.id })),
      ...res.periods.slice(0, 2).map((p) => ({ label: p.nameVi, meta: `Thời kỳ • ${p.span}`, action: "jump-period", id: p.id })),
      ...res.places.slice(0, 2).map((c) => ({ label: c.nameVi, meta: "Địa danh", action: c.kind === "city" ? "jump-city" : "select-region", id: c.id }))
    ];

    if (!suggestions.length) {
      return `
        <div class="hero-autocomplete-box">
          <div style="padding:0.65rem 0.75rem;font-size:0.85rem;color:var(--text-muted);">
            Không có gợi ý nhanh — nhấn <strong>Tra cứu</strong> để mở bộ lọc tìm kiếm nâng cao cho “${escapeHtml(ui.heroSearchText)}”.
          </div>
        </div>
      `;
    }

    return `
      <div class="hero-autocomplete-box" role="listbox" aria-label="Gợi ý tìm kiếm nhanh">
        ${suggestions
          .map(
            (s) => `
              <button type="button" class="hero-autocomplete-item" data-action="${s.action}" data-id="${s.id}">
                <span><strong>${escapeHtml(s.label)}</strong></span>
                <span class="badge badge-outline">${escapeHtml(s.meta)}</span>
              </button>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderHomePage() {
    syncArticlesRef();
    const state = Store.getState();
    const lp = getLangPack();
    const dailyList = (LearningResearch && LearningResearch.dailyDiscoveries) || [];
    const daily = dailyList.length ? dailyList[ui.dailyIdx % dailyList.length] : {
      titleVi: "Tinh hoa Hán tự Lục thư",
      titleZh: "六书精要",
      summary: "Phân tích bộ thủ và ngữ cảnh song ngữ Hán – Việt.",
      actionId: "wenhua"
    };

    // ------------------------------------------------------------------
    // ZONE 01: Monumental Plate Selector (Priority: Great Wall & Jiangshan)
    // ------------------------------------------------------------------
    const greatWallArtifact = (Museum && Museum.artifacts || []).find((a) => a.id === "great-wall-scroll");
    const jiangshanArtifact = (Museum && Museum.artifacts || []).find((a) => a.id === "jiangshan-ruci-duojiao") || (Museum && Museum.artifacts && Museum.artifacts[0]);
    const qianliPainting = PaintingsList.find((pt) => pt.id === "qianli-jiangshan") || PaintingsList[0];
    const qingmingPainting = PaintingsList.find((pt) => pt.id === "qingming-shanghe") || PaintingsList[1] || qianliPainting;

    const cleanViTitle = (str) => String(str || "").replace(/\s*\([^)]*[\u4E00-\u9FFF][^)]*\)\s*$/, "").trim();

    const homeEn = state.uiLang === "en";
    const plateMap = {
      "great-wall-masterpiece": {
        mode: "great-wall-masterpiece",
        src: (greatWallArtifact && greatWallArtifact.imageUrl) || "assets/images/great-wall-ink.jpg",
        titleVi: cleanViTitle((greatWallArtifact && greatWallArtifact.nameVi) || "Vạn Lý Trường Thành Vân Hải Thủy Mặc Đồ"),
        titleEn: (greatWallArtifact && greatWallArtifact.nameEn) || "Great Wall Amidst Sea of Clouds Ink Scroll",
        titleZh: (greatWallArtifact && greatWallArtifact.nameZh) || "万里长城云海水墨图",
        artistLabel: homeEn ? "Classical Ink Panoramic Scroll" : "Thủy mặc Trường Thành Cổ kim",
        dynastyLabel: (greatWallArtifact && (homeEn ? (greatWallArtifact.periodLabelEn || greatWallArtifact.periodLabel) : greatWallArtifact.periodLabel)) || (homeEn ? "Zhou – Qin/Han – Ming" : "Chu – Tần Hán – Minh"),
        dimensions: (greatWallArtifact && (homeEn ? (greatWallArtifact.dimensionsEn || greatWallArtifact.dimensions) : greatWallArtifact.dimensions)) || (homeEn ? "16:9 Landscape" : "Toàn cảnh 16:9"),
        museum: (greatWallArtifact && (homeEn ? (greatWallArtifact.collectionEn || greatWallArtifact.collection) : greatWallArtifact.collection)) || (homeEn ? "CCE Digital Archive" : "Kho Lưu trữ Học thuật CCE"),
        action: greatWallArtifact ? "open-artifact" : "open-custom-image",
        id: (greatWallArtifact && greatWallArtifact.id) || "great-wall-scroll"
      },
      "jiangshan-masterpiece": jiangshanArtifact ? {
        mode: "jiangshan-masterpiece",
        src: jiangshanArtifact.imageUrl || "assets/images/jiangshan-ruci-duojiao.jpg",
        titleVi: cleanViTitle(jiangshanArtifact.nameVi),
        titleEn: jiangshanArtifact.nameEn || cleanViTitle(jiangshanArtifact.nameVi),
        titleZh: jiangshanArtifact.nameZh,
        artistLabel: homeEn ? "Fu Baoshi & Guan Shanyue" : "Phó Báo Thạch & Quan Sơn Nguyệt",
        dynastyLabel: (homeEn ? (jiangshanArtifact.periodLabelEn || jiangshanArtifact.periodLabel) : jiangshanArtifact.periodLabel) || (homeEn ? "Modern Era (1959)" : "Hiện đại (1959)"),
        dimensions: jiangshanArtifact.dimensions || "650 × 900 cm",
        museum: (homeEn ? (jiangshanArtifact.collectionEn || jiangshanArtifact.collection) : jiangshanArtifact.collection) || (homeEn ? "Great Hall of the People, Beijing" : "Đại lễ đường Nhân dân Bắc Kinh"),
        action: "open-artifact",
        id: jiangshanArtifact.id
      } : null,
      "qianli-masterpiece": qianliPainting ? {
        mode: "qianli-masterpiece",
        src: qianliPainting.image,
        titleVi: cleanViTitle(qianliPainting.titleVi),
        titleEn: qianliPainting.titleEn || cleanViTitle(qianliPainting.titleVi),
        titleZh: qianliPainting.titleZh,
        artistLabel: `${homeEn ? (qianliPainting.artist.nameEn || qianliPainting.artist.nameVi) : qianliPainting.artist.nameVi} (${qianliPainting.artist.nameZh})`,
        dynastyLabel: homeEn ? (qianliPainting.dynasty.nameEn || qianliPainting.dynasty.nameVi) : qianliPainting.dynasty.nameVi,
        dimensions: qianliPainting.dimensions || "51.5 × 1191.5 cm",
        museum: (homeEn ? (qianliPainting.museumEn || qianliPainting.museum) : qianliPainting.museum) || "故宫博物院",
        action: "open-painting-zoom",
        id: qianliPainting.id
      } : null
    };
    const activePlate = plateMap[ui.heroArtworkMode] || plateMap["great-wall-masterpiece"] || plateMap["jiangshan-masterpiece"] || plateMap["qianli-masterpiece"];

    // ------------------------------------------------------------------
    // ZONE 02: Curated Reading Room (FT/Reuters 7:5 Split)
    // ------------------------------------------------------------------
    const journalTabs = [
      { id: "all", label: lp.tabFeatured },
      { id: "history", label: lp.tabHistory },
      { id: "philosophy", label: lp.tabPhilosophy },
      { id: "metaphysics", label: lp.tabMetaphysics },
      { id: "arts", label: lp.tabArts },
      { id: "regions", label: lp.tabRegions },
      { id: "sino-vietnam", label: lp.tabSinoVn },
      { id: "business", label: lp.tabBusiness }
    ];
    ensureNewestArticlesOrder();
    const matchedArticles = ui.homeJournalCat === "all"
      ? Articles
      : Articles.filter((a) => a.category === ui.homeJournalCat);
    const curatedPool = matchedArticles.length >= 2 ? matchedArticles : Articles;
    const leadArt = curatedPool[0];
    const secondaryArts = curatedPool.slice(1, 6);

    const leadEd = leadArt ? getArticleEditorial(leadArt.id) : null;
    const leadThumbId = leadEd && leadEd.thumbnailConfig ? leadEd.thumbnailConfig.imageId : null;
    const leadImgObj = leadThumbId ? getEditorialImage(leadThumbId) : null;
    const rawLeadHero = leadArt && (leadArt.heroImage || getAcademicPhotoForItem(leadArt.category, leadArt.id, 0));
    const forbiddenHomeLeadImgs = new Set([
      "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
      activePlate && activePlate.src ? activePlate.src : ""
    ]);
    const resolvedLeadPhoto = (leadImgObj && (leadImgObj.url || leadImgObj.src))
      || (typeof rawLeadHero === "string" ? rawLeadHero : (rawLeadHero && (rawLeadHero.src || rawLeadHero.imageUrl)))
      || "assets/images/academic/ming-forbidden-city.jpg";
    const leadPhoto = forbiddenHomeLeadImgs.has(resolvedLeadPhoto)
      ? "assets/images/academic/ming-forbidden-city.jpg"
      : resolvedLeadPhoto;
    const leadExcerpt = (leadEd && leadEd.standfirst) || (leadArt && leadArt.introduction ? `${leadArt.introduction.slice(0, 175).trim()}…` : "");

    // ------------------------------------------------------------------
    // ZONE 03: 34-Province Cultural Atlas (Live Filter + SVG + 3-Trait Preview)
    // ------------------------------------------------------------------
    const allProvinces = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];
    const getProvAdminCat = (pr) => (pr && pr.identity && pr.identity.adminCategory) || (pr && pr.type) || "province";
    const filteredProvs = ui.homeProvinceTypeFilter === "all"
      ? allProvinces
      : allProvinces.filter((pr) => getProvAdminCat(pr) === ui.homeProvinceTypeFilter);
    const activeProv = allProvinces.find((pr) => pr.id === ui.selectedMapProvinceId) || filteredProvs[0] || allProvinces[0];
    const provCapital = (activeProv && (homeEn ? ((activeProv.identity && (activeProv.identity.capitalCityEn || activeProv.identity.capitalCity)) || activeProv.capitalEn || activeProv.capital) : ((activeProv.identity && activeProv.identity.capitalCity) || activeProv.capital))) || (homeEn ? "Beijing" : "Bắc Kinh");
    const provLandmark = activeProv && activeProv.heritageAndLandmarks && activeProv.heritageAndLandmarks[0]
      ? `${enVal(activeProv.heritageAndLandmarks[0], "nameVi")} (${activeProv.heritageAndLandmarks[0].hanzi || ""})`
      : (activeProv && enVal(activeProv, "highlights")) || (homeEn ? "Key Historical Heritage" : "Di sản văn hiến trọng điểm");
    const provDish = activeProv && activeProv.culinaryCulture && activeProv.culinaryCulture.signatureDishes && activeProv.culinaryCulture.signatureDishes[0]
      ? `${activeProv.culinaryCulture.signatureDishes[0].hanzi} — ${enVal(activeProv.culinaryCulture.signatureDishes[0], "description")}`
      : (activeProv && enVal(activeProv, "cuisine")) || "";
    const provEconNote = (activeProv && (enVal(activeProv, "vietnamConnectivity") || enVal(activeProv, "economy"))) || "";

    // ------------------------------------------------------------------
    // ZONE 04: Digital Museum Exhibition Strip (8 Well-Proportioned Exhibits)
    // ------------------------------------------------------------------
    const preferredPaintingIds = ["xishan-xinglv", "zao-chun-tu", "chushan-ruiai"];
    const excludedHomeScrolls = new Set(["qingming-shanghe", "qingming-scroll", "hanshi-tie", "dage-tu", "kangxi-nanxun", "quehua-qiuse", "wuma-tu", "fuchun-shanju"]);
    const pickedPaintings = [];
    preferredPaintingIds.forEach((pid) => {
      const found = PaintingsList.find((pt) => pt.id === pid);
      if (found) pickedPaintings.push(found);
    });
    PaintingsList.forEach((pt) => {
      if (pickedPaintings.length < 4 && !excludedHomeScrolls.has(pt.id) && !isHandscrollArtwork(pt) && !pickedPaintings.some((x) => x.id === pt.id)) {
        pickedPaintings.push(pt);
      }
    });

    const museumPaintings = pickedPaintings.slice(0, 4).map((pt) => ({
      kind: "painting",
      id: pt.id,
      action: "open-painting-detail",
      src: pt.image,
      titleVi: pt.titleVi,
      titleEn: pt.titleEn || pt.titleVi,
      titleZh: pt.titleZh,
      eraLabel: pt.dynasty ? (homeEn ? (pt.dynasty.nameEn || pt.dynasty.nameVi) : pt.dynasty.nameVi) : (homeEn ? "Classical" : "Cổ điển"),
      museum: (homeEn ? (pt.museumEn || pt.museum) : pt.museum) || (homeEn ? "The Palace Museum" : "Bảo tàng Cố Cung")
    }));

    const preferredArtifactIds = ["zeng-hou-yi-bianzhong", "ma-dap-phi-yen", "ru-yao-tianqing", "david-vases", "sanxingdui-bronze-mask", "changxin-palace-lamp"];
    const excludedHomeArtifacts = new Set(["great-wall-scroll", "jiangshan-ruci-duojiao", "forbidden-city-axis-gate", "forbidden-city-imperial-axis-gate"]);
    const pickedArtifacts = [];
    preferredArtifactIds.forEach((aid) => {
      const found = (Museum && Museum.artifacts || []).find((a) => a.id === aid && a.imageUrl);
      if (found) pickedArtifacts.push(found);
    });
    (Museum && Museum.artifacts ? Museum.artifacts : []).forEach((a) => {
      if (pickedArtifacts.length < 4 && a.imageUrl && !excludedHomeScrolls.has(a.id) && !excludedHomeArtifacts.has(a.id) && !pickedArtifacts.some((x) => x.id === a.id)) {
        pickedArtifacts.push(a);
      }
    });

    const museumArtifacts = pickedArtifacts.slice(0, 4).map((a) => ({
      kind: "artifact",
      id: a.id,
      action: "open-artifact",
      src: a.imageUrl,
      titleVi: cleanViTitle(a.nameVi),
      titleEn: a.nameEn || cleanViTitle(a.nameVi),
      titleZh: a.nameZh,
      eraLabel: (homeEn ? (a.periodLabelEn || a.periodLabel) : a.periodLabel) || (homeEn ? "National Treasure" : "Bảo vật Quốc gia"),
      museum: (homeEn ? (a.collectionEn || a.collection) : a.collection) || (homeEn ? "National Museum" : "Bảo tàng Quốc gia")
    }));
    const exhibitStrip = [...museumPaintings, ...museumArtifacts].slice(0, 8);

    // ------------------------------------------------------------------
    // ZONE 05: Active Sinology (Zero-Pinyin Specimen) & Sino-Viet Bridge
    // ------------------------------------------------------------------
    const matchedTerm = (daily.actionId && Dictionary.find((d) => d.id === daily.actionId))
      || Dictionary[ui.dailyIdx % Dictionary.length]
      || Dictionary[0];
    const isTermSaved = matchedTerm && state.collectedVocab.includes(matchedTerm.id);
    const sinologyExample = matchedTerm && matchedTerm.examples && matchedTerm.examples[0] ? matchedTerm.examples[0] : null;
    const bridgeArticles = Articles.filter((a) => a.category === "sino-vietnam" || a.category === "business").slice(0, 3);
    const sinoTheme = (SinoVN && SinoVN.themes && SinoVN.themes[0]) || null;

    const homeReadingHtml = () => `
      <!-- CURATED READING ROOM (Asymmetric 7:5 Hairline Grid) -->
      <section id="ed-home-reading-sec" class="ed-section" aria-label="Thư phòng chuyên luận">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <h2 class="ed-h2">${escapeHtml(lp.z2Title)}</h2>
            </div>
            <button type="button" class="ed-link-action" data-action="nav" data-page="explore">${escapeHtml(lp.z2ViewAll)} ${Articles.length} ${escapeHtml(lp.z2EssaysUnit)} →</button>
          </div>

          <div class="ed-reading-tabs" role="tablist" aria-label="Lọc chuyên đề đọc">
            ${journalTabs.map((t) => `
              <button type="button" class="ed-reading-tab ${ui.homeJournalCat === t.id ? "active" : ""}" data-action="set-home-journal-cat" data-cat="${t.id}">${t.label}</button>
            `).join("")}
          </div>

          ${leadArt ? (() => {
            const leadView = getLocalizedArticleView(leadArt, getArticleSupplement(leadArt.id), getArticleEditorial(leadArt.id));
            return `
            <div class="ed-reading-grid">
              <article class="ed-reading-lead">
                <button type="button" class="ed-reading-lead-img ${isArtworkOrDocumentSrc(leadPhoto, leadArt.id) ? "ed-reading-lead-img--contain" : ""}" data-action="open-article" data-id="${leadArt.id}" aria-label="Open ${escapeHtml(leadView.title)}">
                  <img decoding="async"  src="${escapeHtml(leadPhoto)}" alt="${escapeHtml(leadView.title)}" loading="lazy" />
                </button>
                <div class="ed-meta-line">${escapeHtml(leadView.categoryLabel)} · ${leadArt.readMinutes} ${escapeHtml(lp.z2ReadUnit)} · <span class="hanzi">${escapeHtml(leadArt.titleZh)}</span></div>
                <button type="button" class="ed-lead-headline" data-action="open-article" data-id="${leadArt.id}">${escapeHtml(leadView.title)}</button>
                <p class="ed-lead-excerpt">${escapeHtml(leadView.standfirst || leadExcerpt)}</p>
                <button type="button" class="ed-link-action" data-action="open-article" data-id="${leadArt.id}">${escapeHtml(lp.z2ReadFull)}</button>
              </article>

              <div class="ed-reading-list">
                ${secondaryArts.map((art) => {
                  const ed = getArticleEditorial(art.id);
                  const av = getLocalizedArticleView(art, getArticleSupplement(art.id), ed);
                  const sum = av.standfirst || (av.introduction ? `${av.introduction.slice(0, 118).trim()}…` : "");
                  return `
                    <div class="ed-reading-item">
                      <button type="button" class="ed-reading-item-btn" data-action="open-article" data-id="${art.id}">
                        <span class="ed-meta-line" style="margin-bottom:0.2rem;">${escapeHtml(av.categoryLabel)} · ${art.readMinutes} ${escapeHtml(lp.z2ReadUnit)}</span>
                        <span class="ed-item-title">${escapeHtml(av.title)} <span class="hanzi" style="font-weight:400;color:var(--text-muted);font-size:0.92em;">${escapeHtml(art.titleZh)}</span></span>
                        <span class="ed-item-summary">${escapeHtml(sum)}</span>
                      </button>
                    </div>
                  `;
                }).join("")}
              </div>
            </div>
          `;
          })() : ""}
        </div>
      </section>
    `;

    const homeOverviewHtml = () => homeReadingHtml();

    const homeCurriculumHtml = () => `
      ${window.CCE_V5_ACADEMY
        ? `<div class="container">${window.CCE_V5_ACADEMY.renderCourseTracker(homeEn)}</div>`
        : (() => {
            if (Lazy && !window._cceV10AcademyBooted) {
              window._cceV10AcademyBooted = true;
              Lazy.ensureBundle("v5-v8-core-pack").then(() => patchMainOnly());
            }
            return "";
          })()}

      <!-- SECTION 01B: FORBIDDEN CITY 3D ARCHITECTURAL EMBLEM & DISSECTION -->
      ${getForbiddenCity3D() ? getForbiddenCity3D().renderHomeSection(state.uiLang) : (() => { if (Lazy && !window._cceV10Fc3dBooted) { window._cceV10Fc3dBooted = true; Lazy.ensureBundle("3d-pack").then(() => patchMainOnly()); } return `
        <section class="ed-section" style="padding:1.65rem 0;border-bottom:1px solid var(--hairline);background:var(--bg-surface);">
          <div class="container" style="display:flex;justify-content:space-between;align-items:center;gap:1.25rem;flex-wrap:wrap;">
            <div>
              <div class="editorial-kicker">${homeEn ? "3D ARCHITECTURAL HERITAGE · 紫禁城三维解剖" : "DI SẢN KIẾN TRÚC 3D · 紫禁城三维解剖"}</div>
              <h2 class="ed-h2" style="margin:0.2rem 0 0.35rem;font-size:1.35rem;">${homeEn ? "Interactive 3D Forbidden City Dissection and Dougong Joinery Studio" : "Phòng Giải phẫu 3D Tử Cấm Thành: Mộng Đấu Củng và Trục Cố đô Huế"}</h2>
              <p style="margin:0;color:var(--text-secondary);font-size:0.88rem;max-width:68ch;">${homeEn ? "Inspect interlocking bracket joinery, imperial rooftop guardians, and Three-Tier White Marble terraces in 3D." : "Tải mô hình 3D tương tác để bóc tách kết cấu Đấu Củng không đinh và trục Thần Đạo Bắc – Nam."}</p>
            </div>
            <button type="button" class="ed-btn-primary" data-action="open-3d-studio" data-id="relics">${homeEn ? "Launch 3D Studio →" : "Mở Phòng Mô hình 3D →"}</button>
          </div>
        </section>
      `; })()}
    `;

    const homeAtlasHtml = () => `
      <!-- 34-PROVINCE CULTURAL ATLAS -->
      <section id="ed-home-atlas-sec" class="ed-section ed-section--surface" aria-label="Bản đồ địa văn hóa 34 tỉnh thành">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <h2 class="ed-h2">${escapeHtml(lp.z3Title)}</h2>
            </div>
            <div style="display:flex;gap:0.85rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-v11-act="jump-prov-3d" data-prov="${activeProv ? activeProv.id : "prov-beijing"}">${homeEn ? "Split 3D Atlas ↗" : "Bản đồ 3D Chia Đôi ↗"}</button>
              <button type="button" class="ed-link-action" data-action="open-regions-directory">${escapeHtml(lp.z3ViewAll)}</button>
            </div>
          </div>

          <div class="ed-atlas-filter-bar" role="tablist" aria-label="Lọc theo cấp hành chính">
            <button type="button" class="ed-reading-tab ${ui.homeProvinceTypeFilter === "all" ? "active" : ""}" data-action="set-home-province-type" data-type="all">${escapeHtml(lp.z3All)} (${allProvinces.length})</button>
            <button type="button" class="ed-reading-tab ${ui.homeProvinceTypeFilter === "municipality" ? "active" : ""}" data-action="set-home-province-type" data-type="municipality">${escapeHtml(lp.z3Mun)}</button>
            <button type="button" class="ed-reading-tab ${ui.homeProvinceTypeFilter === "province" ? "active" : ""}" data-action="set-home-province-type" data-type="province">${escapeHtml(lp.z3Prov)}</button>
            <button type="button" class="ed-reading-tab ${ui.homeProvinceTypeFilter === "autonomous" ? "active" : ""}" data-action="set-home-province-type" data-type="autonomous">${escapeHtml(lp.z3Auto)}</button>
            <button type="button" class="ed-reading-tab ${ui.homeProvinceTypeFilter === "sar" ? "active" : ""}" data-action="set-home-province-type" data-type="sar">${escapeHtml(lp.z3Sar)}</button>
          </div>

          <div class="ed-atlas-chips" aria-label="${homeEn ? "Quick select provincial division" : "Chọn nhanh đơn vị hành chính"}">
            ${filteredProvs.map((pr) => `
              <button type="button" class="ed-prov-chip ${activeProv && activeProv.id === pr.id ? "active" : ""}" data-action="select-map-province" data-id="${pr.id}">
                ${escapeHtml(homeEn ? (pr.nameEn || pr.nameVi) : pr.nameVi)} <span class="hanzi">${escapeHtml(pr.nameZh)}</span>
              </button>
            `).join("")}
          </div>

          ${activeProv ? `
            <div class="ed-atlas-grid">
              <div class="ed-atlas-map-panel">
                ${Visuals.renderChinaMapSVG(activeProv.regionId || ui.activeRegionId, ui.activeCityId, "admin", activeProv.id, allProvinces, { enMode: homeEn, hsrFilters: ui.mapHsrFilters })}
              </div>

              <div class="ed-atlas-preview-panel">
                <div class="ed-prov-head">
                  <div class="ed-essay-kicker">${escapeHtml((activeProv.identity && enVal(activeProv.identity, "adminTypeFull")) || enVal(activeProv, "regionLabel"))}</div>
                  <div style="display:flex;align-items:baseline;justify-content:space-between;gap:0.75rem;flex-wrap:wrap;">
                    <h3 style="font-family:var(--font-editorial);font-size:1.6rem;margin:0;">${escapeHtml(homeEn ? (activeProv.nameEn || activeProv.nameVi) : activeProv.nameVi)}</h3>
                    ${(() => {
                      const provPinyin = activeProv.pinyin || (activeProv.identity && activeProv.identity.pinyin) || "";
                      return `<span class="ed-prov-hanzi">${escapeHtml(activeProv.nameZh)}${provPinyin ? ` · ${escapeHtml(provPinyin)}` : ""}</span>`;
                    })()}
                  </div>
                </div>

                <div class="ed-prov-traits">
                  <div class="ed-prov-trait-row">
                    <span class="ed-prov-trait-label">${escapeHtml(lp.z3Capital)}</span>
                    <span class="ed-prov-trait-val">${escapeHtml(provCapital)}</span>
                  </div>
                  <div class="ed-prov-trait-row">
                    <span class="ed-prov-trait-label">${escapeHtml(lp.z3Heritage)}</span>
                    <span class="ed-prov-trait-val">${escapeHtml(provLandmark)}</span>
                  </div>
                  <div class="ed-prov-trait-row">
                    <span class="ed-prov-trait-label">${escapeHtml(lp.z3Signature)}</span>
                    <span class="ed-prov-trait-val">${escapeHtml(provDish || provEconNote)}</span>
                  </div>
                </div>

                <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:1.35rem;">
                  <button type="button" class="ed-btn-primary" data-action="open-province-detail" data-id="${activeProv.id}">${escapeHtml(lp.z3OpenDossier)}</button>
                  <button type="button" class="ed-btn-outline" data-action="open-province-compare">${escapeHtml(lp.z3CompareBtn)}</button>
                </div>
              </div>
            </div>
          ` : ""}
        </div>
      </section>

      <!-- DIGITAL MUSEUM EXHIBITION STRIP -->
      <section class="ed-section" aria-label="Triển lãm Bảo tàng số">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <h2 class="ed-h2">${escapeHtml(lp.z4Title)}</h2>
            </div>
            <div style="display:flex;gap:1.25rem;flex-wrap:wrap;">
              <button type="button" class="ed-link-action" data-action="nav" data-page="paintings">${PaintingsList.length} ${escapeHtml(lp.z4PaintingsLabel)} →</button>
              <button type="button" class="ed-link-action" data-action="nav" data-page="museum">${(Museum.artifacts || []).length} ${escapeHtml(lp.z4ArtifactsLabel)} →</button>
            </div>
          </div>

          <div class="ed-museum-strip">
            ${exhibitStrip.map((item) => `
              <article class="ed-exhibit-plate">
                <button type="button" class="ed-exhibit-stage" data-action="${item.action}" data-id="${item.id}" style="display:flex;width:100%;border:0;cursor:pointer;" aria-label="${homeEn ? "Inspect" : "Xem"} ${escapeHtml(homeEn ? (item.titleEn || item.titleVi) : item.titleVi)}">
                  <img decoding="async"  src="${escapeHtml(item.src)}" alt="${escapeHtml(homeEn ? (item.titleEn || item.titleVi) : item.titleVi)}" loading="lazy" onload="if(this.naturalHeight / Math.max(1, this.naturalWidth) >= 1.55) { this.parentElement && this.parentElement.classList.add('is-tall-scroll'); }" />
                </button>
                <button type="button" class="ed-exhibit-title" data-action="${item.action}" data-id="${item.id}" style="background:none;border:0;padding:0;text-align:left;cursor:pointer;">
                  ${escapeHtml(homeEn ? (item.titleEn || item.titleVi) : item.titleVi)} <span class="hanzi" style="font-weight:400;color:var(--text-muted);">${escapeHtml(item.titleZh)}</span>
                </button>
                <div class="ed-exhibit-footer">${escapeHtml(item.eraLabel)} · ${escapeHtml(item.museum)}</div>
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `;

    const homeBridgeHtml = () => `
      <!-- LIUSHU & SINO-VIET BRIDGE -->
      <section class="ed-section ed-section--surface" aria-label="Tra gốc chữ Lục thư và Đối chiếu Trung Việt">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <h2 class="ed-h2">${escapeHtml(lp.z5Title)}</h2>
            </div>
            <button type="button" class="ed-link-action" data-action="nav-learning" data-tab="flashcards">${escapeHtml(lp.z5OpenAnki)}</button>
          </div>

          <div class="ed-bridge-grid">
            ${matchedTerm ? `
              <div class="ed-sinology-pane">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.75rem;margin-bottom:0.85rem;">
                  <span class="ed-essay-kicker" style="margin:0;">${escapeHtml(lp.z5DailyLabel)} (${(ui.dailyIdx % Math.max(1, dailyList.length)) + 1}/${Math.max(1, dailyList.length)})</span>
                  <div style="display:flex;gap:0.4rem;">
                    <button type="button" class="ed-plate-tab" data-action="cycle-daily" data-dir="-1" aria-label="Mục từ trước">←</button>
                    <button type="button" class="ed-plate-tab" data-action="cycle-daily" data-dir="1" aria-label="Mục từ tiếp theo">→</button>
                  </div>
                </div>

                <div class="ed-hanzi-hero-box">
                  <span class="ed-hanzi-glyph hanzi">${escapeHtml(matchedTerm.hanzi)}</span>
                  <div style="display:flex;flex-direction:column;gap:0.35rem;">
                    <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-muted);font-weight:700;">${escapeHtml(lp.z5ZeroPinyinHint)}</div>
                    <div>${renderSpeakBtn(matchedTerm.hanzi, "Nghe phát âm tiếng Trung")}</div>
                  </div>
                </div>

                <div class="ed-liushu-table">
                  <div class="ed-liushu-row">
                    <span class="ed-liushu-label">${escapeHtml(lp.z5SoundMeaning)}</span>
                    <span><strong>${escapeHtml(matchedTerm.pinyin)}</strong>${matchedTerm.hanViet ? ` · <span style="color:var(--crimson-accent);font-weight:600;">${homeEn ? "Sino–Viet:" : "Hán–Việt:"} ${escapeHtml(matchedTerm.hanViet)}</span>` : ""} — ${escapeHtml(homeEn ? (matchedTerm.english || matchedTerm.vietnamese) : matchedTerm.vietnamese)}${homeEn ? "" : ` <span style="color:var(--text-muted);">(${escapeHtml(matchedTerm.english || "")})</span>`}</span>
                  </div>
                  ${(matchedTerm.liushuType || matchedTerm.liushuCategory) ? `
                    <div class="ed-liushu-row">
                      <span class="ed-liushu-label">${escapeHtml(lp.z5Liushu)}</span>
                      <span><strong>${escapeHtml(homeEn ? (matchedTerm.liushuTypeEn || matchedTerm.liushuCategoryEn || matchedTerm.liushuType || matchedTerm.liushuCategory) : (matchedTerm.liushuType || matchedTerm.liushuCategory))}</strong></span>
                    </div>
                  ` : ""}
                  <div class="ed-liushu-row">
                    <span class="ed-liushu-label">${escapeHtml(lp.z5Radical)}</span>
                    <span>${escapeHtml(homeEn ? (matchedTerm.radicalEn || matchedTerm.radicalAnalysisEn || matchedTerm.radical || matchedTerm.radicalAnalysis || "Classical radical analysis") : (matchedTerm.radical || matchedTerm.radicalAnalysis || "Phân tích bộ thủ truyền thống"))}</span>
                  </div>
                  <div class="ed-liushu-row">
                    <span class="ed-liushu-label">${escapeHtml(lp.z5Mnemonic)}</span>
                    <span>${escapeHtml(enVal(matchedTerm, "mnemonic") || enVal(daily, "summary") || "")}</span>
                  </div>
                  <div class="ed-liushu-row">
                    <span class="ed-liushu-label">${escapeHtml(lp.z5Context)}</span>
                    <span>${sinologyExample ? `<span class="hanzi">${escapeHtml(sinologyExample.zh)}</span> — ${escapeHtml(homeEn ? (sinologyExample.en || sinologyExample.vi || "") : (sinologyExample.vi || ""))}` : escapeHtml(enVal(daily, "summary") || "")}</span>
                  </div>
                </div>

                <div style="display:flex;gap:0.75rem;flex-wrap:wrap;margin-top:1.15rem;">
                  <button type="button" class="ed-btn-primary" data-action="toggle-collect-vocab" data-id="${matchedTerm.id}">${isTermSaved ? escapeHtml(lp.z5SavedCard) : escapeHtml(lp.z5SaveCard)}</button>
                  <button type="button" class="ed-btn-outline" data-action="open-term" data-id="${matchedTerm.id}">${escapeHtml(lp.z5InspectCard)}</button>
                </div>
              </div>
            ` : ""}

            <div class="ed-bridge-list">
              <div class="ed-essay-kicker">${escapeHtml(lp.z5BridgeHeading)}</div>
              ${bridgeArticles.map((bArt) => {
                const bv = getLocalizedArticleView(bArt, getArticleSupplement(bArt.id), getArticleEditorial(bArt.id));
                return `
                  <div class="ed-bridge-row">
                    <button type="button" class="ed-reading-item-btn" data-action="open-article" data-id="${bArt.id}">
                      <span class="ed-item-num">${escapeHtml(bv.categoryLabel)} · ${bArt.readMinutes} ${escapeHtml(lp.z2ReadUnit)}</span>
                      <span class="ed-item-title">${escapeHtml(bv.title)} <span class="hanzi" style="font-weight:400;color:var(--text-muted);">${escapeHtml(bArt.titleZh)}</span></span>
                      <span class="ed-item-summary">${escapeHtml(bv.standfirst || bv.introduction.slice(0, 120) + "…")}</span>
                    </button>
                  </div>
                `;
              }).join("")}

              ${sinoTheme ? `
                <div class="ed-bridge-row">
                  <button type="button" class="ed-reading-item-btn" data-action="nav" data-page="sino-vietnam">
                    <span class="ed-item-num">${escapeHtml(lp.z5MethodTag)}</span>
                    <span class="ed-item-title">${escapeHtml(isEnglishUi() ? (sinoTheme.titleEn || sinoTheme.titleVi) : sinoTheme.titleVi)} <span class="hanzi" style="font-weight:400;color:var(--text-muted);">${escapeHtml(sinoTheme.titleZh)}</span></span>
                    <span class="ed-item-summary">${escapeHtml(isEnglishUi() ? "Historical Sino-Vietnamese cultural exchange, Nom script localization, and shared administrative and literary canons." : ((SinoVN.methodologicalBanner || "").slice(0, 130) + "…"))}</span>
                  </button>
                </div>
              ` : ""}

              <div class="ed-bridge-row">
                <button type="button" class="ed-reading-item-btn" data-action="open-library-tab" data-tab="monograph">
                  <span class="ed-meta-line" style="margin-bottom:0.2rem;">${isEnglishUi() ? "Bilateral Trade Comparative Archive · VN-CN-TRD-2026-Q4" : "Chuyên khảo kinh tế so sánh 2026–2030 · VN-CN-TRD-2026-Q4"}</span>
                  <span class="ed-item-title">${isEnglishUi() ? "Vietnam–China Bilateral Trade and ACFTA 3.0 (>$350B Full-Year Projection)" : "Thương mại song phương Việt – Trung và ACFTA 3.0 (&gt;350 tỷ USD)"}</span>
                  <span class="ed-item-summary">${isEnglishUi() ? "Comparative archival synthesis of GACC/VOV trade statistics, ACFTA 3.0 Upgrade Protocol, and 14 empirical charts." : "Tư liệu đối chiếu chuỗi cung ứng, nâng cấp ACFTA 3.0 và 14 biểu đồ dữ liệu thương mại."}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WEEKLY HOT PICKS & PLATFORM CHANGELOG -->
      ${WeeklyUpdates ? (() => {
        const enM = isEnglishUi();
        return `
          <section class="ed-section" aria-label="${enM ? "Weekly Highlights and Site Changelog" : "Bài đọc nổi bật và nhật ký nâng cấp"}">
            <div class="container">
              <div class="ed-section-head">
                <div>
                  <div class="ed-meta-line" style="color:var(--accent-cinnabar);margin-bottom:0.2rem;">
                    ${enM ? "CURATED WEEKLY DIGEST · HOT MONOGRAPHS AND UPDATES" : "TỔNG HỢP TUẦN · BÀI ĐỌC NỔI BẬT VÀ NHẬT KÝ NÂNG CẤP"}
                  </div>
                  <h2 class="ed-h2">${enM ? "Weekly Picks and Reader Update Dispatch" : "Tiêu điểm tuần này và kênh thông báo độc giả"}</h2>
                </div>
                <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                  <button type="button" class="ed-btn-outline" data-action="open-updates-modal" data-tab="reader">${enM ? "Subscribe to Updates" : "Đăng ký bản tin email →"}</button>
                  <button type="button" class="ed-link-action" data-action="open-updates-modal" data-tab="changelog">${enM ? "Platform Changelog →" : "Nhật ký nâng cấp →"}</button>
                </div>
              </div>
              <div class="updates-hot-grid">
                ${(WeeklyUpdates.hotPicks || []).map((pk) => `
                  <article class="updates-card">
                    <div>
                      <div class="updates-tag">${escapeHtml(enM ? pk.badgeEn : pk.badgeVi)} · ${escapeHtml(pk.date)}</div>
                      <h3 style="font-family:var(--font-editorial);font-size:1.12rem;margin:0.35rem 0;">${escapeHtml(enM ? pk.titleEn : pk.titleVi)}</h3>
                      <p style="font-size:0.84rem;color:var(--text-secondary);line-height:1.55;margin:0;">${escapeHtml(enM ? pk.summaryEn : pk.summaryVi)}</p>
                    </div>
                    <button type="button" class="ed-link-action" style="justify-content:flex-start;" data-action="${pk.kind === "article" ? "open-article" : "open-updates-modal"}" ${pk.kind === "article" ? `data-id="${pk.targetId}"` : `data-tab="changelog"`}>
                      ${enM ? (pk.kind === "article" ? "Read Monograph →" : "View Changelog →") : (pk.kind === "article" ? "Đọc chuyên luận →" : "Xem chi tiết nâng cấp →")}
                    </button>
                  </article>
                `).join("")}
              </div>
            </div>
          </section>
        `;
      })() : ""}
    `;

    const homeDeckSubpages = [
      {
        id: "overview",
        labelVi: "Thư phòng chuyên luận",
        labelEn: "Curated Reading Room",
        descVi: "Tìm hiểu theo chủ đề, góc đọc tiếp và tuyển tập chuyên luận mới.",
        descEn: "Structured thematic entry points and curated flagship monographs.",
        render: homeOverviewHtml
      },
      {
        id: "curriculum",
        labelVi: "Lộ trình 12 học phần và 3D",
        labelEn: "12-Module Course & 3D",
        count: 12,
        descVi: "Theo dõi tiến trình học 12 học phần và mô hình giải phẫu kiến trúc 3D Tử Cấm Thành.",
        descEn: "Track the 12-module curriculum and launch the Forbidden City 3D architectural studio.",
        render: homeCurriculumHtml
      },
      {
        id: "atlas",
        labelVi: "Bản đồ 34 tỉnh và bảo vật",
        labelEn: "34-Province Atlas & Museum",
        count: allProvinces.length,
        descVi: "Tra cứu nhanh địa phương chí 34 đơn vị hành chính cùng dải hiện vật tiêu biểu.",
        descEn: "Inspect 34 provincial divisions and the digital museum strip.",
        render: homeAtlasHtml
      },
      {
        id: "bridge",
        labelVi: "Lục thư và tiêu điểm tuần",
        labelEn: "Liushu & Weekly Dispatch",
        descVi: "Mục từ Lục thư hằng ngày, đối chiếu Việt – Trung và nhật ký cập nhật dự án.",
        descEn: "Daily Six-Script specimen, China–Vietnam lens, and weekly digest.",
        render: homeBridgeHtml
      }
    ];

    const colophonFooterHtml = (() => {
      const col = Brand.founderColophon || {};
      const kicker = state.uiLang === "en" ? col.kickerEn : (state.uiLang === "zh-CN" || state.uiLang === "zh-TW") ? col.kickerZh : col.kickerVi;
      const prose = state.uiLang === "en" ? col.en : (state.uiLang === "zh-CN" || state.uiLang === "zh-TW") ? col.zh : col.vi;
      const cta = state.uiLang === "en" ? col.ctaEn : (state.uiLang === "zh-CN" || state.uiLang === "zh-TW") ? col.ctaZh : col.ctaVi;
      if (!prose) return "";
      return `
        <section class="ed-colophon-section" aria-label="Lời ngỏ người sáng lập">
          <div class="container">
            <div class="ed-colophon-inner">
              <div class="ed-colophon-seal" aria-hidden="true">${escapeHtml(col.sealChars || "興盛")}</div>
              ${kicker ? `<div class="ed-meta-line">${escapeHtml(kicker)}</div>` : ""}
              <p class="ed-colophon-prose">${escapeHtml(prose)}</p>
              <button type="button" class="ed-colophon-cta" data-action="open-founder-message">${escapeHtml(cta || "Đọc toàn văn thông điệp người sáng lập →")}</button>
            </div>
          </div>
        </section>
      `;
    })();

    return `
      ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderHomeSuite(homeEn) : ""}
      ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderFieldModeQuickHub(homeEn) : ""}
      ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderGuidedJourneySection(homeEn) : ""}
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("home", homeDeckSubpages, { enM: homeEn, showDrawer: false }) : (homeOverviewHtml() + homeCurriculumHtml() + homeAtlasHtml() + homeBridgeHtml())}
      ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderBrandAndCulinaryExplorer(homeEn) : ""}
      ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderPalaceArchCta(homeEn) : ""}
      ${window.CCE_V11_HUB ? window.CCE_V11_HUB.renderScholarlyFieldFaq(homeEn) : ""}
      ${colophonFooterHtml}
    `;
  }

  // ==========================================================================
  // Page 2: EXPLORE ALL KNOWLEDGE (MASTER PROMPT 05 Section 6 Directory)
  // Supports 8 Filter Facets, Sorting, Grid/List View Toggle, Pagination
  // ==========================================================================
  function renderExploreResultsContent() {
    syncArticlesRef();
    const categories = [
      { id: "all", label: `Tất cả (${Articles.length})` },
      { id: "history", label: "Lịch sử" },
      { id: "philosophy", label: "Triết học" },
      { id: "literature", label: "Văn học & Thi ca" },
      { id: "metaphysics", label: "Âm Dương & Thuật số" },
      { id: "religion-folk", label: "Tôn giáo & Tín ngưỡng" },
      { id: "customs", label: "Phong tục & Lễ hội" },
      { id: "cuisine", label: "Ẩm thực & Trà đạo" },
      { id: "attire", label: "Y phục & Hán phục" },
      { id: "traditional", label: "Kiến trúc Cổ" },
      { id: "ceramics-jade", label: "Gốm sứ & Ngọc khí" },
      { id: "arts", label: "Thư pháp & Quốc họa" },
      { id: "ich-heritage", label: "Di sản Phi vật thể" },
      { id: "science-tech", label: "Khoa học & Phát minh" },
      { id: "education", label: "Khoa cử & Du học" },
      { id: "regions", label: "Vùng miền" },
      { id: "sino-vietnam", label: "Trung – Việt" },
      { id: "business", label: "Kinh doanh & RCEP" },
      { id: "contemporary", label: "Đương đại" }
    ];
    void categories;

    const q = normalizeText(ui.exploreQuery);

    const filteredArticles = Articles.filter((a) => {
      const sup = getArticleSupplement(a.id) || {};
      const ed = getArticleEditorial(a.id) || {};
      if (ui.exploreCategory !== "all" && a.category !== ui.exploreCategory) return false;
      if (ui.explorePeriod !== "all" && sup.periodId !== ui.explorePeriod) return false;
      if (ui.exploreRegion !== "all" && sup.regionId !== ui.exploreRegion) return false;
      if (ui.exploreDifficulty !== "all" && !normalizeText(sup.difficulty || "").includes(normalizeText(ui.exploreDifficulty))) return false;
      if (ui.exploreSourceType !== "all" && !normalizeText((sup.sourceType || "") + " " + a.epistemicTag).includes(normalizeText(ui.exploreSourceType))) return false;
      if (ui.exploreLanguage === "classical-zh" && !(sup.primaryQuote && sup.primaryQuote.zh)) return false;
      if (q) {
        const enP = getArticleEnPack(a.id);
        const hay = normalizeText([
          a.titleVi,
          a.titleEn,
          a.titleZh,
          a.categoryLabel,
          a.introduction,
          ed.standfirst || "",
          ...(a.relatedTopics || []),
          enP ? enP.title : "",
          enP ? enP.standfirst : "",
          enP ? enP.introduction : "",
          enP ? enP.categoryLabel : ""
        ].join(" "));
        if (!hay.includes(q) && !a.titleZh.includes(ui.exploreQuery.trim())) return false;
      }
      return true;
    });

    ensureNewestArticlesOrder();
    const sortedArticles = [...filteredArticles].sort((a, b) => {
      if (ui.exploreSort === "courseOrder") return Number(a.number || 999) - Number(b.number || 999);
      if (ui.exploreSort === "readTimeAsc") return a.readMinutes - b.readMinutes;
      if (ui.exploreSort === "readTimeDesc") return b.readMinutes - a.readMinutes;
      if (ui.exploreSort === "titleAsc") {
        const va = getLocalizedArticleView(a, null, null).title;
        const vb = getLocalizedArticleView(b, null, null).title;
        return va.localeCompare(vb, isEnglishUi() ? "en" : "vi");
      }
      return 0;
    });

    const matchingArtifacts = (ui.exploreContentType === "all" || ui.exploreContentType === "artifact")
      ? (Museum.artifacts || []).filter((art) => {
          if (ui.explorePeriod !== "all" && art.periodId !== ui.explorePeriod) return false;
          if (!q) return ui.exploreContentType === "artifact";
          return normalizeText(`${art.nameVi} ${art.nameEn} ${art.nameZh} ${art.collection}`).includes(q);
        })
      : [];

    const matchingTerms = (ui.exploreContentType === "all" || ui.exploreContentType === "term")
      ? Dictionary.filter((t) => {
          if (!q) return ui.exploreContentType === "term";
          return normalizeText(`${t.hanzi} ${t.pinyin} ${t.vietnamese} ${t.english}`).includes(q);
        }).slice(0, 12)
      : [];

    const matchingTexts = (ui.exploreContentType === "all" || ui.exploreContentType === "text")
      ? Philosophy.classicalTexts.filter((txt) => {
          if (!q) return ui.exploreContentType === "text";
          return normalizeText(`${txt.titleVi} ${txt.titleEn} ${txt.titleZh} ${txt.summary}`).includes(q);
        })
      : [];

    const subId = (window.CCE_V10_DECK && window.CCE_V10_DECK.peekActiveSubpage("explore")) || "monographs";
    const filterSig = [q, ui.exploreCategory, ui.explorePeriod, ui.exploreRegion, ui.exploreDifficulty, ui.exploreSourceType, ui.exploreLanguage, ui.exploreSort, subId].join("|");
    const Pager = window.CCE_V10_PAGINATOR;

    const showArticles = subId === "monographs" && (ui.exploreContentType === "all" || ui.exploreContentType === "article");
    const artPaged = Pager
      ? Pager.paginate(sortedArticles, "explore-articles", { filterSig, desktopPerPage: 12, mobilePerPage: 8 })
      : { slice: sortedArticles.slice(0, ui.exploreLimit), totalItems: sortedArticles.length, renderControls: () => "" };
    const visibleArticles = showArticles ? artPaged.slice : [];
    const totalCount =
      (showArticles ? sortedArticles.length : 0) +
      matchingArtifacts.length +
      matchingTerms.length +
      matchingTexts.length;

    const hasActiveFacet =
      Boolean(ui.exploreQuery.trim()) ||
      ui.exploreCategory !== "all" ||
      ui.explorePeriod !== "all" ||
      ui.exploreRegion !== "all" ||
      ui.exploreContentType !== "all" ||
      ui.exploreLanguage !== "all" ||
      ui.exploreDifficulty !== "all" ||
      ui.exploreSourceType !== "all";

    const enEx = isEnglishUi();
    return `
      <div class="explore-results-toolbar">
        <div style="font-size:0.88rem;color:var(--text-secondary);">
          ${enEx
            ? `Found <strong>${totalCount}</strong> matching entries ${showArticles ? `(Showing <strong>${artPaged.startIdx != null ? artPaged.startIdx + 1 : 1}–${artPaged.endIdx != null ? artPaged.endIdx : visibleArticles.length}</strong> of ${sortedArticles.length} monographs)` : ""}`
            : `Tìm thấy <strong>${totalCount}</strong> mục tri thức phù hợp ${showArticles ? `(Trang này <strong>${visibleArticles.length}</strong> / ${sortedArticles.length} chuyên luận)` : ""}`}
        </div>
        <div style="display:flex;gap:0.5rem;align-items:center;">
          ${hasActiveFacet ? `
            <button type="button" class="btn btn-secondary btn-sm" data-action="clear-explore-facets">${ICONS.close} ${enEx ? "Clear filters" : "Xóa bộ lọc"}</button>
          ` : ""}
        </div>
      </div>

      ${showArticles ? (
        visibleArticles.length === 0 ? renderSmartEmptyState({
          query: ui.exploreQuery,
          resetAction: "clear-explore-facets",
          resetLabel: enEx ? `Restore All ${Articles.length} Monographs` : `Khôi phục toàn bộ ${Articles.length} chuyên luận`,
          scopeLabel: enEx ? "Scholarly Monograph Archive and Directory" : "Thư viện chuyên luận và mục lục học thuật",
          targetField: "explore",
          suggestions: enEx ? ["Confucianism", "Sichuan", "Keju", "Tea", "RCEP"] : ["Nho gia", "Tứ Xuyên", "Khoa cử", "Trà đạo", "RCEP"]
        }) : `
          ${ui.exploreViewMode === "list" ? `
          <div class="explore-list-view" style="margin-bottom:1.5rem;">
            ${visibleArticles.map((art) => {
              const ed = getArticleEditorial(art.id);
              const thumbId = ed && ed.thumbnailConfig ? ed.thumbnailConfig.imageId : null;
              const sup = getArticleSupplement(art.id) || {};
              const av = getLocalizedArticleView(art, sup, ed);
              return `
                <article class="explore-list-row">
                  <div>
                    ${thumbId ? renderEditorialImageFigure(thumbId, { ratio: "16:10", useThumbnailFocal: true, compact: true, showZoom: false, showBadge: true }) : ""}
                  </div>
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.3rem;">
                      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                        <span class="badge badge-red">${av.categoryLabel}</span>
                        <span class="badge badge-outline">${sup.difficulty || "Academic"}</span>
                        <span class="badge badge-gold">${art.readMinutes} ${av.isEn ? "min read" : "phút đọc"}</span>
                      </div>
                      <span class="card-title-zh">${art.titleZh}</span>
                    </div>
                    <h3 style="margin:0 0 0.3rem;font-size:1.25rem;">${av.title}</h3>
                    ${av.subTitle ? `<div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.45rem;">${escapeHtml(av.subTitle)}</div>` : ""}
                    <p style="font-size:0.88rem;color:var(--text-secondary);margin:0 0 0.75rem;">${escapeEditorialHtml(av.standfirst || av.introduction)}</p>
                    <div style="display:flex;justify-content:space-between;align-items:center;">
                      <span style="font-size:0.78rem;color:var(--text-muted);">${av.references.length} ${av.isEn ? "verified sources" : "tài liệu tham khảo kiểm chứng"}</span>
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${art.id}">${av.isEn ? "Read Monograph →" : "Mở chuyên luận →"}</button>
                    </div>
                  </div>
                </article>
              `;
            }).join("")}
          </div>
        ` : `
          <div class="grid grid-3" style="margin-bottom:1.5rem;">
            ${visibleArticles.map((art) => renderArticleCard(art)).join("")}
          </div>
        `}
          ${artPaged.renderControls(enEx)}
        `
      ) : ""}

      ${matchingArtifacts.length ? `
        <div style="margin-top:2rem;">
          <h3 style="margin-bottom:0.85rem;">${enEx ? `Matching Digital Museum Artifacts (${matchingArtifacts.length})` : `Hiện vật Bảo tàng Số Phù hợp (${matchingArtifacts.length})`}</h3>
          <div class="grid grid-3">
            ${matchingArtifacts.slice(0, 9).map((art) => `
              <article class="card interactive">
                ${Visuals.renderArtifactVisualHTML(art, false)}
                <div class="card-title-zh" style="margin-top:0.65rem;">${art.nameZh}</div>
                <h4 style="margin:0.2rem 0 0.35rem;">${formatInlineMd(enEx ? (art.nameEn || art.nameVi) : art.nameVi, true)}</h4>
                <p style="font-size:0.82rem;color:var(--text-secondary);">${escapeHtml(enVal(art, "collection"))} • ${escapeHtml(enVal(art, "periodLabel"))}</p>
                <button type="button" class="btn btn-primary btn-sm" data-action="open-artifact" data-id="${art.id}">${enEx ? "Inspect Artifact →" : "Xem Hiện vật →"}</button>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${matchingTerms.length ? `
        <div style="margin-top:2rem;">
          <h3 style="margin-bottom:0.85rem;">${enEx ? `Matching Lexicon Entries (${matchingTerms.length})` : `Mục từ Điển Văn hóa Hán–Việt–Anh (${matchingTerms.length})`}</h3>
          <div class="grid grid-3">
            ${matchingTerms.map((t) => `
              <article class="card interactive">
                <div style="display:flex;justify-content:space-between;align-items:center;">
                  <span class="hanzi" style="font-size:1.45rem;font-weight:700;color:var(--imperial-red);">${t.hanzi}</span>
                  <span class="badge badge-outline">${t.level}</span>
                </div>
                <div class="pinyin" style="margin:0.2rem 0;">${t.pinyin}</div>
                <strong>${escapeHtml(enEx ? t.english : t.vietnamese)}</strong>
                <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.65rem;">${escapeHtml(enEx ? t.vietnamese : t.english)}</div>
                <button type="button" class="btn btn-secondary btn-sm" data-action="open-term" data-id="${t.id}">${enEx ? "Inspect Etymology →" : "Chiết tự &amp; Ngữ cảnh →"}</button>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}

      ${matchingTexts.length ? `
        <div style="margin-top:2rem;">
          <h3 style="margin-bottom:0.85rem;">${enEx ? `Matching Philosophical Classics (${matchingTexts.length})` : `Kinh điển Triết học Gốc (${matchingTexts.length})`}</h3>
          <div class="grid grid-3">
            ${matchingTexts.map((txt) => `
              <article class="card">
                <div class="card-title-zh">${txt.titleZh}</div>
                <h4 style="margin:0.2rem 0;">${escapeHtml(enEx ? (txt.titleEn || txt.titleVi) : `${txt.titleVi} (${txt.titleEn})`)}</h4>
                <p style="font-size:0.83rem;color:var(--text-secondary);">${escapeHtml(enVal(txt, "summary"))}</p>
                <div class="primary-quote-box" style="font-size:0.82rem;">${txt.excerptZh}<br><span style="color:var(--text-muted);">${escapeHtml(enVal(txt, "excerptVi"))}</span></div>
              </article>
            `).join("")}
          </div>
        </div>
      ` : ""}
    `;
  }

  function renderExplorePage() {
    const enEx = isEnglishUi();
    const categories = [
      { id: "all", label: enEx ? `All (${Articles.length})` : `Tất cả (${Articles.length})` },
      { id: "history", label: enEx ? "History" : "Lịch sử" },
      { id: "philosophy", label: enEx ? "Philosophy" : "Triết học" },
      { id: "literature", label: enEx ? "Literature & Poetry" : "Văn học & Thi ca" },
      { id: "metaphysics", label: enEx ? "Yin-Yang & Cosmology" : "Âm Dương & Thuật số" },
      { id: "religion-folk", label: enEx ? "Religion & Folk Beliefs" : "Tôn giáo & Tín ngưỡng" },
      { id: "customs", label: enEx ? "Customs & Festivals" : "Phong tục & Lễ hội" },
      { id: "cuisine", label: enEx ? "Cuisine & Tea Culture" : "Ẩm thực & Trà đạo" },
      { id: "attire", label: enEx ? "Attire & Hanfu" : "Y phục & Hán phục" },
      { id: "traditional", label: enEx ? "Classical Architecture" : "Kiến trúc Cổ" },
      { id: "ceramics-jade", label: enEx ? "Ceramics & Jade" : "Gốm sứ & Ngọc khí" },
      { id: "arts", label: enEx ? "Calligraphy & Painting" : "Thư pháp & Quốc họa" },
      { id: "ich-heritage", label: enEx ? "Intangible Heritage" : "Di sản Phi vật thể" },
      { id: "science-tech", label: enEx ? "Science & Inventions" : "Khoa học & Phát minh" },
      { id: "education", label: enEx ? "Examinations & Scholars" : "Khoa cử & Du học" },
      { id: "regions", label: enEx ? "Regional Cultures" : "Vùng miền" },
      { id: "sino-vietnam", label: enEx ? "China – Vietnam" : "Trung – Việt" },
      { id: "business", label: enEx ? "Business & RCEP" : "Kinh doanh & RCEP" },
      { id: "contemporary", label: enEx ? "Contemporary China" : "Đương đại" }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enEx ? "All-Site Knowledge Index · 全站知识总目录" : "Mục lục tri thức toàn trang · 全站知识总目录"}</div>
          <h1>${enEx ? "Knowledge directory and multi-faceted filters" : "Mục lục tri thức và bộ lọc chuyên đề"}</h1>
          <p class="section-subtitle">
            ${enEx
              ? `Browse, filter, and sort ${Articles.length} 3-column academic monographs, ${Museum.artifacts.length} Digital Museum treasures, ${Dictionary.length} Hanzi–Vietnamese–English lexicon entries, and ${Philosophy.classicalTexts.length} classical primary texts.`
              : `Khám phá, lọc và sắp xếp ${Articles.length} chuyên luận học thuật 3 cột, ${Museum.artifacts.length} bảo vật Bảo tàng Số, ${Dictionary.length} mục từ điển Hán–Việt–Anh và ${Philosophy.classicalTexts.length} kinh điển gốc.`}
          </p>
        </div>
      </section>

      <section class="page-section">
        <div class="container">
          <!-- 8-Facet Filter Control Panel -->
          <div class="explore-facets-panel">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
              <div style="flex:1;min-width:260px;">
                <label for="explore-keyword-input" style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.3rem;">
                  ${enEx ? "1. Keyword Search (English / Vietnamese / Hanzi / Pinyin)" : "1. Keyword Search (Từ khóa Việt / Anh / Hán tự / Pinyin)"}
                </label>
                <input
                  id="explore-keyword-input"
                  type="text"
                  class="form-input"
                  data-action="explore-query-input"
                  value="${escapeHtml(ui.exploreQuery)}"
                  placeholder="${enEx ? "Enter keyword: Confucianism, Sichuan, Four Great Inventions, Calligraphy, RCEP..." : "Nhập từ khóa: Khoa cử, 科举, Tứ đại phát minh, Thư pháp, RCEP, Chu Dịch..."}"
                />
              </div>
              <div style="display:flex;gap:0.5rem;align-items:end;flex-wrap:wrap;">
                <div>
                  <label for="explore-sort-select" style="font-size:0.76rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">${enEx ? "Sort Order" : "Sắp xếp (Sort)"}</label>
                  <select id="explore-sort-select" class="form-select" data-action="explore-sort-change">
                    <option value="featured" ${ui.exploreSort === "featured" ? "selected" : ""}>${enEx ? "Newest & 3D Flagship First" : "Mới nhất & Tiêu điểm 3D Lên Đầu"}</option>
                    <option value="courseOrder" ${ui.exploreSort === "courseOrder" ? "selected" : ""}>${enEx ? "Curriculum Sequence (1 → 108)" : "Trình tự Khóa học Nền tảng (1 → 108)"}</option>
                    <option value="readTimeDesc" ${ui.exploreSort === "readTimeDesc" ? "selected" : ""}>${enEx ? "Deepest First (Read Time ↓)" : "Chuyên sâu nhất (Thời lượng ↓)"}</option>
                    <option value="readTimeAsc" ${ui.exploreSort === "readTimeAsc" ? "selected" : ""}>${enEx ? "Quickest First (Read Time ↑)" : "Đọc nhanh trước (Thời lượng ↑)"}</option>
                    <option value="titleAsc" ${ui.exploreSort === "titleAsc" ? "selected" : ""}>${enEx ? "Alphabetical (A → Z)" : "Bảng chữ cái (A → Z)"}</option>
                  </select>
                </div>
                <div style="display:flex;gap:0.35rem;">
                  <button type="button" class="btn ${ui.exploreViewMode === "grid" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-explore-view" data-mode="grid" title="${enEx ? "Grid View" : "Chế độ Lưới"}">
                    ${ICONS.grid}
                    <span>${enEx ? "Grid" : "Grid"}</span>
                  </button>
                  <button type="button" class="btn ${ui.exploreViewMode === "list" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-explore-view" data-mode="list" title="${enEx ? "List View" : "Chế độ Danh sách"}">
                    ${ICONS.list}
                    <span>${enEx ? "List" : "List"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="explore-facets-grid">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "3. Historical Period" : "3. Historical Period (Thời kỳ)"}</label>
                <select class="form-select" data-action="explore-facet-period">
                  <option value="all" ${ui.explorePeriod === "all" ? "selected" : ""}>${enEx ? "All 14 Historical Periods" : "Tất cả Thời kỳ (14)"}</option>
                  ${History.periods.map((p) => `<option value="${p.id}" ${ui.explorePeriod === p.id ? "selected" : ""}>${escapeHtml(enVal(p, "nameVi"))} (${p.nameZh})</option>`).join("")}
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "4. Macro-Region" : "4. Region (Vùng Địa lý)"}</label>
                <select class="form-select" data-action="explore-facet-region">
                  <option value="all" ${ui.exploreRegion === "all" ? "selected" : ""}>${enEx ? "All of China &amp; Cross-Regional" : "Toàn Trung Quốc &amp; Liên vùng"}</option>
                  ${Regions.macroRegions.map((r) => `<option value="${r.id}" ${ui.exploreRegion === r.id ? "selected" : ""}>${escapeHtml(enVal(r, "nameVi"))} (${r.nameZh})</option>`).join("")}
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "5. Content Type" : "5. Content Type (Loại học liệu)"}</label>
                <select class="form-select" data-action="explore-facet-type">
                  <option value="all" ${ui.exploreContentType === "all" ? "selected" : ""}>${enEx ? "All Content Types" : "Tất cả Loại nội dung"}</option>
                  <option value="article" ${ui.exploreContentType === "article" ? "selected" : ""}>${enEx ? `Scholarly Monographs (${Articles.length})` : `Chuyên luận Học thuật (${Articles.length})`}</option>
                  <option value="artifact" ${ui.exploreContentType === "artifact" ? "selected" : ""}>${enEx ? `Museum Artifacts (${Museum.artifacts.length})` : `Hiện vật Bảo tàng (${Museum.artifacts.length})`}</option>
                  <option value="term" ${ui.exploreContentType === "term" ? "selected" : ""}>${enEx ? `Cultural Dictionary (${Dictionary.length})` : `Từ điển Văn hóa (${Dictionary.length})`}</option>
                  <option value="text" ${ui.exploreContentType === "text" ? "selected" : ""}>${enEx ? `Primary Classics (${Philosophy.classicalTexts.length})` : `Kinh điển Cổ đại (${Philosophy.classicalTexts.length})`}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "6. Source Language" : "6. Language (Ngôn ngữ Tư liệu)"}</label>
                <select class="form-select" data-action="explore-facet-lang">
                  <option value="all" ${ui.exploreLanguage === "all" ? "selected" : ""}>${enEx ? "Trilingual (EN · VI · ZH)" : "Tam ngữ Việt – Hán – Anh"}</option>
                  <option value="classical-zh" ${ui.exploreLanguage === "classical-zh" ? "selected" : ""}>${enEx ? "With Classical Hanzi Citations" : "Có Trích dẫn Cổ văn Chữ Hán"}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "7. Difficulty Level" : "7. Difficulty Level (Cấp độ)"}</label>
                <select class="form-select" data-action="explore-facet-difficulty">
                  <option value="all" ${ui.exploreDifficulty === "all" ? "selected" : ""}>${enEx ? "All Levels" : "Mọi Cấp độ"}</option>
                  <option value="Foundation" ${ui.exploreDifficulty === "Foundation" ? "selected" : ""}>${enEx ? "Foundation (Introductory)" : "Foundation (Nhập môn)"}</option>
                  <option value="Intermediate" ${ui.exploreDifficulty === "Intermediate" ? "selected" : ""}>${enEx ? "Intermediate (Comparative)" : "Intermediate (Trung cấp)"}</option>
                  <option value="Advanced" ${ui.exploreDifficulty === "Advanced" ? "selected" : ""}>${enEx ? "Advanced (University Seminar)" : "Advanced (Chuyên sâu Đại học)"}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "8. Source Classification" : "8. Source Type (Loại nguồn)"}</label>
                <select class="form-select" data-action="explore-facet-source">
                  <option value="all" ${ui.exploreSourceType === "all" ? "selected" : ""}>${enEx ? "All Sources" : "Tất cả Nguồn"}</option>
                  <option value="Primary" ${ui.exploreSourceType === "Primary" ? "selected" : ""}>${enEx ? "Primary Source (Chronicles &amp; Classics)" : "Primary Source (Sử liệu / Kinh điển gốc)"}</option>
                  <option value="Academic" ${ui.exploreSourceType === "Academic" ? "selected" : ""}>${enEx ? "Academic Synthesis" : "Academic Synthesis (Tổng thuật Học thuật)"}</option>
                  <option value="Historical" ${ui.exploreSourceType === "Historical" ? "selected" : ""}>${enEx ? "Historical Evidence" : "Historical Evidence (Chứng cứ Lịch sử)"}</option>
                </select>
              </div>
            </div>

            <!-- 2. Category Pill Strip -->
            <div style="margin-top:0.95rem;padding-top:0.85rem;border-top:1px solid var(--hairline);">
              <div style="font-size:0.76rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-muted);margin-bottom:0.5rem;">
                ${enEx ? "2. 19 Thematic Categories" : "2. Chủ đề Chuyên sâu (19 Categories)"}
              </div>
              <div class="filter-bar" style="margin:0;">
                ${categories
                  .map(
                    (c) => `<button type="button" class="filter-pill ${ui.exploreCategory === c.id ? "active" : ""}" data-action="filter-explore" data-cat="${c.id}">${c.label}</button>`
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div id="explore-results-slot">
            ${renderExploreResultsContent()}
          </div>
        </div>
      </section>
    `;

    const exploreTreasuresHtml = () => {
      const Pager = window.CCE_V10_PAGINATOR;
      const eq = normalizeText(ui.exploreQuery || "");
      const mArts = (Museum.artifacts || []).filter((art) => !eq || normalizeText(`${art.nameVi} ${art.nameEn} ${art.nameZh} ${art.collection}`).includes(eq));
      const mPaged = Pager ? Pager.paginate(mArts, "explore-treasures-arts", { filterSig: eq, desktopPerPage: 12, mobilePerPage: 8 }) : { slice: mArts.slice(0, 12), renderControls: () => "" };
      const cTexts = (Philosophy.classicalTexts || []).filter((txt) => !eq || normalizeText(`${txt.titleVi} ${txt.titleEn} ${txt.titleZh} ${txt.summary}`).includes(eq));
      const cPaged = Pager ? Pager.paginate(cTexts, "explore-treasures-texts", { filterSig: eq, desktopPerPage: 6, mobilePerPage: 4 }) : { slice: cTexts.slice(0, 6), renderControls: () => "" };
      return `
        <div class="explore-facets-panel" style="margin-bottom:1.25rem;">
          <label for="explore-treasures-input" style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.3rem;">${enEx ? "Filter Museum Treasures & Classics" : "Tìm nhanh bảo vật và cổ tịch"}</label>
          <input id="explore-treasures-input" type="text" class="form-input" data-action="explore-query-input" value="${escapeHtml(ui.exploreQuery)}" placeholder="${enEx ? "Enter relic or classic title..." : "Nhập tên bảo vật, bảo tàng hoặc kinh điển..."}" />
        </div>
        <h2 style="font-size:1.35rem;margin-bottom:0.75rem;">${enEx ? `Digital Museum Treasures (${mArts.length})` : `Bảo vật Bảo tàng số (${mArts.length})`}</h2>
        <div class="grid grid-3" style="margin-bottom:0.9rem;">
          ${mPaged.slice.map((art) => `
            <article class="card interactive">
              ${Visuals.renderArtifactVisualHTML(art, false)}
              <div class="card-title-zh" style="margin-top:0.65rem;">${art.nameZh}</div>
              <h3 style="margin:0.2rem 0 0.35rem;font-size:1.05rem;">${formatInlineMd(enEx ? (art.nameEn || art.nameVi) : art.nameVi, true)}</h3>
              <p style="font-size:0.82rem;color:var(--text-secondary);">${escapeHtml(enVal(art, "collection"))} · ${escapeHtml(enVal(art, "periodLabel"))}</p>
              <button type="button" class="btn btn-primary btn-sm" data-action="open-artifact" data-id="${art.id}">${enEx ? "Inspect Artifact →" : "Xem hiện vật →"}</button>
            </article>
          `).join("")}
        </div>
        <div style="margin-bottom:1.5rem;">${mPaged.renderControls(enEx)}</div>
        <h2 style="font-size:1.35rem;margin:1.5rem 0 0.75rem;">${enEx ? `Primary Philosophical Classics (${cTexts.length})` : `Kinh điển triết học nguyên bản (${cTexts.length})`}</h2>
        <div class="grid grid-2">
          ${cPaged.slice.map((txt) => `
            <article class="card">
              <div class="card-title-zh">${txt.titleZh}</div>
              <h3 style="margin:0.2rem 0;font-size:1.05rem;">${escapeHtml(enEx ? (txt.titleEn || txt.titleVi) : `${txt.titleVi} (${txt.titleEn})`)}</h3>
              <p style="font-size:0.83rem;color:var(--text-secondary);">${escapeHtml(enVal(txt, "summary"))}</p>
              <div class="primary-quote-box" style="font-size:0.82rem;">${txt.excerptZh}<br><span style="color:var(--text-muted);">${escapeHtml(enVal(txt, "excerptVi"))}</span></div>
            </article>
          `).join("")}
        </div>
        ${cPaged.renderControls(enEx)}
      `;
    };

    const exploreLexiconHtml = () => {
      const Pager = window.CCE_V10_PAGINATOR;
      const eq = normalizeText(ui.exploreQuery || "");
      const mTerms = Dictionary.filter((t) => !eq || normalizeText(`${t.hanzi} ${t.pinyin} ${t.vietnamese} ${t.english} ${t.hanViet || ""}`).includes(eq));
      const tPaged = Pager ? Pager.paginate(mTerms, "explore-lexicon", { filterSig: eq, desktopPerPage: 12, mobilePerPage: 8 }) : { slice: mTerms.slice(0, 12), renderControls: () => "" };
      return `
        <div class="explore-facets-panel" style="margin-bottom:1.25rem;">
          <label for="explore-lexicon-input" style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.3rem;">${enEx ? "Search Liushu Cultural Lexicon" : "Tra cứu từ điển văn hóa Lục thư"}</label>
          <input id="explore-lexicon-input" type="text" class="form-input" data-action="explore-query-input" value="${escapeHtml(ui.exploreQuery)}" placeholder="${enEx ? "Enter Hanzi, Pinyin, or meaning..." : "Nhập chữ Hán, Pinyin, âm Hán – Việt hoặc nghĩa..."}" />
        </div>
        <div class="grid grid-3">
          ${tPaged.slice.map((t) => `
            <article class="card interactive">
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span class="hanzi" style="font-size:1.45rem;font-weight:700;color:var(--imperial-red);">${t.hanzi}</span>
                <span class="badge badge-outline">${escapeHtml(t.level)}</span>
              </div>
              <div class="pinyin" style="margin:0.2rem 0;">${escapeHtml(t.pinyin)}</div>
              <strong>${escapeHtml(enEx ? t.english : t.vietnamese)}</strong>
              <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.65rem;">${escapeHtml(enEx ? t.vietnamese : t.english)}</div>
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-term" data-id="${t.id}">${enEx ? "Inspect Etymology →" : "Chiết tự và ngữ cảnh →"}</button>
            </article>
          `).join("")}
        </div>
        ${tPaged.renderControls(enEx)}
      `;
    };

    const explorePathwaysHtml = () => `
      ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderUrbanGreenAndPathwaysStudio(enEx) : ""}
      ${window.CCE_V4_HUB ? window.CCE_V4_HUB.renderHub(enEx) : ""}
      ${window.CCE_CIV_ATLAS ? window.CCE_CIV_ATLAS.renderGuidedTracks(enEx, Store.getState().completedArticles) + window.CCE_CIV_ATLAS.renderMatrix6x7(enEx) : ""}
    `;

    const exploreMonographsHtml = () => `
          <!-- 8-Facet Filter Control Panel -->
          <div class="explore-facets-panel">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
              <div style="flex:1;min-width:260px;">
                <label for="explore-keyword-input" style="font-size:0.78rem;font-weight:700;text-transform:uppercase;color:var(--text-muted);display:block;margin-bottom:0.3rem;">
                  ${enEx ? "1. Keyword Search (English / Vietnamese / Hanzi / Pinyin)" : "1. Tìm từ khóa (Tiếng Việt / Tiếng Anh / Hán tự / Pinyin)"}
                </label>
                <input
                  id="explore-keyword-input"
                  type="text"
                  class="form-input"
                  data-action="explore-query-input"
                  value="${escapeHtml(ui.exploreQuery)}"
                  placeholder="${enEx ? "Enter keyword: Confucianism, Sichuan, Four Great Inventions, Calligraphy, RCEP..." : "Nhập từ khóa: Khoa cử, 科举, Tứ đại phát minh, Thư pháp, RCEP, Chu Dịch..."}"
                />
              </div>
              <div style="display:flex;gap:0.5rem;align-items:end;flex-wrap:wrap;">
                <div>
                  <label for="explore-sort-select" style="font-size:0.76rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">${enEx ? "Sort Order" : "Sắp xếp"}</label>
                  <select id="explore-sort-select" class="form-select" data-action="explore-sort-change">
                    <option value="featured" ${ui.exploreSort === "featured" ? "selected" : ""}>${enEx ? "Newest & 3D Flagship First" : "Mới nhất và tiêu điểm 3D lên đầu"}</option>
                    <option value="courseOrder" ${ui.exploreSort === "courseOrder" ? "selected" : ""}>${enEx ? "Curriculum Sequence" : "Trình tự khóa học nền tảng"}</option>
                    <option value="readTimeDesc" ${ui.exploreSort === "readTimeDesc" ? "selected" : ""}>${enEx ? "Deepest First" : "Chuyên sâu nhất"}</option>
                    <option value="readTimeAsc" ${ui.exploreSort === "readTimeAsc" ? "selected" : ""}>${enEx ? "Quickest First" : "Đọc nhanh trước"}</option>
                    <option value="titleAsc" ${ui.exploreSort === "titleAsc" ? "selected" : ""}>${enEx ? "Alphabetical (A → Z)" : "Theo bảng chữ cái (A → Z)"}</option>
                  </select>
                </div>
                <div style="display:flex;gap:0.35rem;">
                  <button type="button" class="btn ${ui.exploreViewMode === "grid" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-explore-view" data-mode="grid" title="${enEx ? "Grid View" : "Chế độ lưới"}">
                    ${ICONS.grid}
                    <span>${enEx ? "Grid" : "Lưới"}</span>
                  </button>
                  <button type="button" class="btn ${ui.exploreViewMode === "list" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-explore-view" data-mode="list" title="${enEx ? "List View" : "Chế độ danh sách"}">
                    ${ICONS.list}
                    <span>${enEx ? "List" : "Danh sách"}</span>
                  </button>
                </div>
              </div>
            </div>

            <div class="explore-facets-grid">
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "3. Historical Period" : "3. Thời kỳ lịch sử"}</label>
                <select class="form-select" data-action="explore-facet-period">
                  <option value="all" ${ui.explorePeriod === "all" ? "selected" : ""}>${enEx ? "All 14 Historical Periods" : "Tất cả 14 thời kỳ"}</option>
                  ${History.periods.map((p) => `<option value="${p.id}" ${ui.explorePeriod === p.id ? "selected" : ""}>${escapeHtml(enVal(p, "nameVi"))} (${p.nameZh})</option>`).join("")}
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "4. Macro-Region" : "4. Vùng địa lý"}</label>
                <select class="form-select" data-action="explore-facet-region">
                  <option value="all" ${ui.exploreRegion === "all" ? "selected" : ""}>${enEx ? "All of China" : "Toàn Trung Quốc và liên vùng"}</option>
                  ${Regions.macroRegions.map((r) => `<option value="${r.id}" ${ui.exploreRegion === r.id ? "selected" : ""}>${escapeHtml(enVal(r, "nameVi"))} (${r.nameZh})</option>`).join("")}
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "5. Content Type" : "5. Loại học liệu"}</label>
                <select class="form-select" data-action="explore-facet-type">
                  <option value="all" ${ui.exploreContentType === "all" ? "selected" : ""}>${enEx ? "All Content Types" : "Tất cả loại nội dung"}</option>
                  <option value="article" ${ui.exploreContentType === "article" ? "selected" : ""}>${enEx ? `Scholarly Monographs (${Articles.length})` : `Chuyên luận học thuật (${Articles.length})`}</option>
                  <option value="artifact" ${ui.exploreContentType === "artifact" ? "selected" : ""}>${enEx ? `Museum Artifacts (${Museum.artifacts.length})` : `Hiện vật bảo tàng (${Museum.artifacts.length})`}</option>
                  <option value="term" ${ui.exploreContentType === "term" ? "selected" : ""}>${enEx ? `Cultural Dictionary (${Dictionary.length})` : `Từ điển văn hóa (${Dictionary.length})`}</option>
                  <option value="text" ${ui.exploreContentType === "text" ? "selected" : ""}>${enEx ? `Primary Classics (${Philosophy.classicalTexts.length})` : `Kinh điển cổ đại (${Philosophy.classicalTexts.length})`}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "6. Source Language" : "6. Ngôn ngữ tư liệu"}</label>
                <select class="form-select" data-action="explore-facet-lang">
                  <option value="all" ${ui.exploreLanguage === "all" ? "selected" : ""}>${enEx ? "Trilingual (EN · VI · ZH)" : "Tam ngữ Việt – Hán – Anh"}</option>
                  <option value="classical-zh" ${ui.exploreLanguage === "classical-zh" ? "selected" : ""}>${enEx ? "With Classical Hanzi Citations" : "Có trích dẫn cổ văn chữ Hán"}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "7. Difficulty Level" : "7. Cấp độ đọc"}</label>
                <select class="form-select" data-action="explore-facet-difficulty">
                  <option value="all" ${ui.exploreDifficulty === "all" ? "selected" : ""}>${enEx ? "All Levels" : "Mọi cấp độ"}</option>
                  <option value="Foundation" ${ui.exploreDifficulty === "Foundation" ? "selected" : ""}>${enEx ? "Foundation (Introductory)" : "Nhập môn (Foundation)"}</option>
                  <option value="Intermediate" ${ui.exploreDifficulty === "Intermediate" ? "selected" : ""}>${enEx ? "Intermediate (Comparative)" : "Trung cấp (Intermediate)"}</option>
                  <option value="Advanced" ${ui.exploreDifficulty === "Advanced" ? "selected" : ""}>${enEx ? "Advanced (University Seminar)" : "Chuyên sâu (Advanced)"}</option>
                </select>
              </div>
              <div>
                <label style="font-size:0.75rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enEx ? "8. Source Classification" : "8. Phân loại nguồn"}</label>
                <select class="form-select" data-action="explore-facet-source">
                  <option value="all" ${ui.exploreSourceType === "all" ? "selected" : ""}>${enEx ? "All Sources" : "Tất cả nguồn"}</option>
                  <option value="Primary" ${ui.exploreSourceType === "Primary" ? "selected" : ""}>${enEx ? "Primary Source" : "Sử liệu và kinh điển gốc"}</option>
                  <option value="Academic" ${ui.exploreSourceType === "Academic" ? "selected" : ""}>${enEx ? "Academic Synthesis" : "Tổng thuật học thuật"}</option>
                  <option value="Historical" ${ui.exploreSourceType === "Historical" ? "selected" : ""}>${enEx ? "Historical Evidence" : "Chứng cứ lịch sử"}</option>
                </select>
              </div>
            </div>

            <!-- 2. Category Pill Strip -->
            <div style="margin-top:0.95rem;padding-top:0.85rem;border-top:1px solid var(--hairline);">
              <div style="font-size:0.76rem;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--ink-muted);margin-bottom:0.5rem;">
                ${enEx ? "2. 19 Thematic Categories" : "2. Chủ đề chuyên sâu (19 chuyên mục)"}
              </div>
              <div class="filter-bar" style="margin:0;">
                ${categories
                  .map(
                    (c) => `<button type="button" class="filter-pill ${ui.exploreCategory === c.id ? "active" : ""}" data-action="filter-explore" data-cat="${c.id}">${c.label}</button>`
                  )
                  .join("")}
              </div>
            </div>
          </div>

          <div id="explore-results-slot">
            ${renderExploreResultsContent()}
          </div>
    `;

    const exploreSubpages = [
      { id: "monographs", labelVi: "Chuyên luận khảo cứu", labelEn: "Monographs", count: Articles.length, render: exploreMonographsHtml },
      { id: "treasures", labelVi: "Bảo vật và cổ tịch", labelEn: "Relics & Classics", count: Museum.artifacts.length + Philosophy.classicalTexts.length, render: exploreTreasuresHtml },
      { id: "lexicon", labelVi: "Từ điển văn hóa", labelEn: "Lexicon", count: Dictionary.length, render: exploreLexiconHtml },
      { id: "pathways", labelVi: "Lộ trình và ma trận", labelEn: "Pathways & Matrix", render: explorePathwaysHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enEx ? "All-Site Knowledge Index · 全站知识总目录" : "Mục lục tri thức toàn trang · 全站知识总目录"}</div>
          <h1>${enEx ? "Knowledge directory and multi-faceted filters" : "Mục lục tri thức và bộ lọc chuyên đề"}</h1>
          <p class="section-subtitle">
            ${enEx
              ? `Browse, filter, and sort ${Articles.length} 3-column academic monographs, ${Museum.artifacts.length} Digital Museum treasures, ${Dictionary.length} Hanzi–Vietnamese–English lexicon entries, and ${Philosophy.classicalTexts.length} classical primary texts.`
              : `Khám phá, lọc và sắp xếp ${Articles.length} chuyên luận học thuật 3 cột, ${Museum.artifacts.length} bảo vật Bảo tàng số, ${Dictionary.length} mục từ điển Hán–Việt–Anh và ${Philosophy.classicalTexts.length} kinh điển gốc.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("explore", exploreSubpages, { enM: enEx }) : `<section class="page-section"><div class="container">${exploreMonographsHtml()}${explorePathwaysHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("explore", enEx)}</div>` : ""}
    `;
  }

  function renderArticleCard(art) {
    const bookmarked = Store.isBookmarked("article", art.id);
    const completed = Store.isArticleCompleted(art.id);
    const sup = getArticleSupplement(art.id);
    const ed = getArticleEditorial(art.id);
    const v = getLocalizedArticleView(art, sup, ed);
    const thumbId = ed && ed.thumbnailConfig ? ed.thumbnailConfig.imageId : null;
    const thumbRatio = ed && ed.thumbnailConfig ? ed.thumbnailConfig.aspectRatio : "16:10";
    const thumbImg = thumbId ? getEditorialImage(thumbId) : null;
    const rawFallbackThumb = !thumbId ? (art.heroImage || getAcademicPhotoForItem(art.category, art.id, art.number || 0, v.title || art.titleVi || "")) : null;
    const fallbackThumb = rawFallbackThumb && rawFallbackThumb._isFallbackPool
      ? Object.assign({}, rawFallbackThumb, { caption: v.title || "", captionEn: v.title || "" })
      : rawFallbackThumb;
    const excerptRaw = v.standfirst || (v.introduction ? slicePlainPreview(v.introduction, 132) : "");
    return `
      <article class="card interactive" style="display:flex;flex-direction:column;justify-content:space-between;">
        <div>
          ${thumbId ? `
            <div class="editorial-card-thumb">
              ${renderEditorialImageFigure(thumbId, { ratio: thumbRatio, useThumbnailFocal: true, compact: true, showZoom: false, showBadge: false })}
            </div>
          ` : (fallbackThumb ? renderAcademicCardThumb(fallbackThumb, "") : "")}
          <div class="card-header-row" style="margin-bottom:0.35rem;">
            <span class="ed-meta-line" style="margin:0;">${completed ? (v.isEn ? "Read · " : "Đã đọc · ") : ""}${escapeHtml(v.categoryLabel)} · ${art.readMinutes} ${v.isEn ? "min" : "phút"}</span>
            <button
              type="button"
              class="btn btn-ghost btn-sm"
              data-action="toggle-bookmark"
              data-type="article"
              data-id="${art.id}"
              data-title="${escapeHtml(v.title)}"
              title="${v.isEn ? "Save article" : "Lưu bài viết"}"
            >${ICONS.bookmark} ${bookmarked ? (v.isEn ? "Saved" : "Đã lưu") : (v.isEn ? "Save" : "Lưu")}</button>
          </div>
          <div class="card-title-zh">${art.titleZh}</div>
          <h3 class="card-title" style="font-size:1.14rem;">${formatInlineMd(v.title, true)}</h3>
          <p style="font-size:0.85rem;margin-bottom:0.85rem;">${formatInlineMd(excerptRaw, true)}</p>
        </div>
        <div class="card-footer-row" style="border-top:1px solid var(--border-subtle);padding-top:0.75rem;">
          <span style="font-size:0.77rem;color:var(--text-muted);">${art.readMinutes} ${v.isEn ? "min read" : "phút"} • ${v.isEn ? `${Math.max(3, v.references.length)} Verified Sources` : (thumbImg ? escapeEditorialHtml(thumbImg.institution.replace("Chinese Culture Explorer ", "CCE ")) : `${v.references.length} nguồn gốc`)}</span>
          <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${art.id}">${v.isEn ? "Read Monograph →" : "Đọc chuyên luận →"}</button>
        </div>
      </article>
    `;
  }

  function slicePlainPreview(str, maxLen = 115) {
    const clean = String(str || "").replace(/\*{1,2}([^*]+?)\*{1,2}/g, "$1").replace(/\*{1,2}/g, "");
    return clean.length > maxLen ? `${clean.slice(0, maxLen)}...` : clean;
  }

  function formatInlineMd(str, escapeFirst = false) {
    let s = escapeFirst ? escapeEditorialHtml(str) : String(str == null ? "" : str);
    s = s.replace(/\*\*((?:(?!\*\*).)+?)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[\s(>“'—–\-])\*([^\s*][^*\n]{0,90}?[^\s*])\*(?=[\s).,;!?<”'—–:\-]|$)/g, "$1<em>$2</em>");
    return s;
  }

  function cleanSourceTypeLabel(rawType) {
    return String(rawType || "")
      .replace(/\s*\(TYPE\s*[ABC][^)]*\)/gi, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function classifyReferenceBucket(ref) {
    const st = String((ref && ref.sourceType) || "").toLowerCase();
    const au = String((ref && ref.author) || "").toLowerCase();
    const tt = String((ref && ref.title) || "").toLowerCase();
    const ur = String((ref && ref.url) || "").toLowerCase();
    const all = `${st} ${au} ${tt} ${ur}`;

    const isOfficial = /unesco|fao|wipo|world bank|united nations|uncitral|dpm\.org\.cn|chnmuseum|npm\.gov\.tw|gov\.cn|gov\.vn|cac\.gov|samr|mofcom|gacc|moit|palace museum|national museum|shandong museum|shaanxi history|hunan museum|quốc hội|quốc vụ viện|chính phủ|bảo tàng|di sản thế giới|di sản phi vật thể|di sản tư liệu|văn bản pháp|quy phạm pháp|hiệp định|công ước|chiến lược quốc gia|nghị quyết|cổng thông tin chính phủ|thống kê quốc gia|cục hải quan|đại sứ quán|nia\.gov\.cn|mca\.gov\.cn/.test(all);
    if (isOfficial) return "official";

    const isScholarly = /chuyên khảo|công trình|sách nghiên cứu|giáo trình|bách khoa|bình chú|tạp chí|harvard|cambridge|oxford|yale|princeton|stanford|hku press|journal|quarterly|monograph|study|studies|luận ngữ|đạo đức kinh|kinh dịch|sử ký|trà kinh|hoàng đế nội kinh|viên dã|thiên công khai vật|bản thảo cương mục|tứ thư|ngũ kinh|kinh điển|nguyên điển|sử liệu|chính sử|lịch sử|cẩm nang kiến trúc|bộ luật dân sự/.test(all);
    if (isScholarly) return "scholarly";

    return "online";
  }

  function renderCategorizedReferencesSection(refs, enM, art) {
    const list = Array.isArray(refs) ? refs : [];
    const grouped = { official: [], scholarly: [], online: [] };
    list.forEach((r) => {
      grouped[classifyReferenceBucket(r)].push(r);
    });

    const categories = [
      {
        key: "official",
        headingVi: "1. Nguồn tư liệu chính thức",
        headingEn: "1. Official & Institutional Sources",
        items: grouped.official
      },
      {
        key: "scholarly",
        headingVi: "2. Sách và công trình nghiên cứu",
        headingEn: "2. Books & Academic Research",
        items: grouped.scholarly
      },
      {
        key: "online",
        headingVi: "3. Nguồn tư liệu trực tuyến",
        headingEn: "3. Verified Online Archives & Digital Collections",
        items: grouped.online
      }
    ].filter((c) => c.items.length > 0);

    return `
      <section id="sec-refs" class="editorial-references-final" aria-label="${enM ? "References and Primary Source Verification" : "Tài liệu tham khảo và đối chứng"}">
        <div class="editorial-kicker" style="color:var(--accent-cinnabar);">
          ${enM ? "CONSOLIDATED BIBLIOGRAPHY &amp; VERIFICATION" : "NGUỒN DẪN &amp; ĐỐI CHỨNG HỌC THUẬT"}
        </div>
        <h2 style="margin:0.2rem 0 0.9rem;font-family:var(--font-editorial);font-size:1.5rem;">
          ${enM ? "References and Primary Source Verification" : "Tài liệu tham khảo và đối chứng"}
        </h2>

        ${categories.length ? categories.map((cat) => `
          <div class="ref-category-group">
            <h3 class="ref-category-title">${enM ? cat.headingEn : cat.headingVi}</h3>
            <ol class="ref-clean-list">
              ${cat.items.map((ref) => {
                const isStrRef = typeof ref === "string";
                const rAuthor = isStrRef ? (enM ? "Scholarly Source" : "Tài liệu tham khảo") : (ref.author || "");
                const rDate = isStrRef ? "" : (ref.date || "");
                const rTitle = isStrRef ? ref : (ref.title || ref.note || "");
                const rUrl = !isStrRef && ref.url && ref.url !== "#" ? ref.url : "";
                const rNote = isStrRef ? "" : (ref.verificationNote || "");
                const cleanType = isStrRef ? "" : cleanSourceTypeLabel(ref.sourceType);
                return `
                  <li class="ref-item-clean">
                    <div>
                      ${rAuthor ? `<strong>${escapeEditorialHtml(rAuthor)}</strong> ` : ""}${rDate ? `(${escapeEditorialHtml(rDate)}) ` : ""}${rAuthor || rDate ? "— " : ""}
                      ${rUrl ? `<a href="${escapeHtml(rUrl)}" target="_blank" rel="noopener noreferrer"><em>${escapeEditorialHtml(rTitle)}</em> ↗</a>` : `<em>${escapeEditorialHtml(rTitle)}</em>`}
                      ${cleanType ? `<span class="badge badge-outline" style="margin-left:0.4rem;">${escapeEditorialHtml(cleanType)}</span>` : ""}
                    </div>
                    ${rNote ? `<div class="ref-item-note">${enM ? "Scope:" : "Phạm vi đối chứng:"} ${escapeEditorialHtml(rNote)}</div>` : ""}
                  </li>
                `;
              }).join("")}
            </ol>
          </div>
        `).join("") : ""}

        <div class="dossier-citation-box" style="margin-top:1.25rem;">
          <div class="citation-box-header">
            <strong>${enM ? "Cite this Essay (APA 7th &amp; BibTeX)" : "Trích dẫn chuẩn học thuật"}</strong>
            <div style="display:flex;gap:0.4rem;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="copy-citation-text" data-fmt="APA" data-text="${escapeHtml(buildArticleCitation(art, "apa"))}">${ICONS.fileText} Copy APA 7th</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="copy-citation-text" data-fmt="BibTeX" data-text="${escapeHtml(buildArticleCitation(art, "bibtex"))}">${ICONS.fileText} Copy BibTeX</button>
            </div>
          </div>
          <div class="citation-apa-text"><strong>APA 7th:</strong> ${escapeHtml(buildArticleCitation(art, "apa"))}</div>
        </div>

        <div class="dossier-copyright-box" style="margin-top:0.85rem;">
          <strong>${enM ? "Authorship &amp; Source Attribution:" : "Ghi nhận bản quyền và phân định tư liệu:"}</strong>
          <p style="margin:0.25rem 0 0.5rem;font-size:0.84rem;color:var(--text-secondary);line-height:1.55;">
            ${escapeEditorialHtml(Brand.copyrightNoticeFull)} (${escapeEditorialHtml(Brand.projectFullTitle)} — ${escapeEditorialHtml(Brand.foundedByStatement)}).
            ${enM
              ? "Original scholarly commentary, cross-cultural comparisons, procedural 3D architectural reconstructions, and editorial plates belong to the project author; classical texts reside in the Public Domain and archival artifacts remain credited to the museums and libraries cited above."
              : "Phần bình giải, đối chiếu liên văn hóa và minh họa biên tập thuộc bản quyền tác giả; nguyên văn kinh điển cổ đại thuộc phạm vi công cộng và tư liệu bảo tàng thuộc về các thiết chế được dẫn nguồn ở trên."}
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" data-action="open-legal-doc" data-doc="copyright">${enM ? "Copyright Notice →" : "Thông báo Bản quyền →"}</button>
            <button type="button" class="btn btn-ghost btn-sm" data-action="open-legal-doc" data-doc="image-credits">${enM ? "Visual Credits Registry →" : "Nguồn hình ảnh đối chiếu →"}</button>
          </div>
        </div>
      </section>
    `;
  }

  // ==========================================================================
  // Dedicated 3-Column ACADEMIC ARTICLE PAGE (Section 5 of Master Prompt)
  // Left Sidebar: Collapsible TOC + Reading Position
  // Center Column: Toolbar (Save/Note/Highlight/Flashcards/Cite/Share/Font) + Full Essay
  // Right Sidebar: Terminology, Figures, Related Articles, Texts, Quick Note
  // ==========================================================================
  function renderArticlePage() {
    syncArticlesRef();
    const art = Articles.find((a) => a.id === ui.activeArticleId) || Articles[0];
    window._cceHydratedArtIds = window._cceHydratedArtIds || Object.create(null);
    const hydState = art ? window._cceHydratedArtIds[art.id] : "";
    const needsHydration = Boolean(art && (art._v104Stub || art._v23Stub || !Array.isArray(art.mainContent) || art.mainContent.length === 0));
    if (needsHydration && Lazy && hydState !== "done") {
      if (hydState !== "loading") {
        window._cceHydratedArtIds[art.id] = "loading";
        const fastPacks = (art._v104Stub && art._v104Shard)
          ? [art._v104Shard]
          : (art._v104Stub
            ? ["v104-mono-shard-1", "v104-mono-shard-2", "v104-mono-shard-3", "v104-mono-shard-4", "v104-mono-shard-5"]
            : ["compendia-intel-pack", "articles-deep-batches-pack", "articles-v3-pack", "v104-monographs-pack", "v104-live108-patches"]);
        Lazy.ensureMany(fastPacks).then(() => {
          syncArticlesRef();
          let refreshed = Articles.find((a) => a.id === art.id);
          const stillEmpty = !refreshed || !Array.isArray(refreshed.mainContent) || refreshed.mainContent.length === 0;
          if (stillEmpty) {
            return Lazy.ensureMany(["v104-monographs-pack", "v104-live108-patches"]).then(() => {
              syncArticlesRef();
              return Articles.find((a) => a.id === art.id);
            });
          }
          return refreshed;
        }).then((refreshed) => {
          window._cceHydratedArtIds[art.id] = "done";
          window._cceLive108Patched = true;
          if (window.CCE_V104_BRIDGE && typeof window.CCE_V104_BRIDGE.syncAll === "function") {
            window.CCE_V104_BRIDGE.syncAll();
          }
          syncArticlesRef();
          refreshed = refreshed || Articles.find((a) => a.id === art.id);
          if (refreshed && Array.isArray(refreshed.mainContent) && refreshed.mainContent.length > 0) {
            delete refreshed._v104Stub;
            delete refreshed._v23Stub;
          }
          ensureNewestArticlesOrder();
          patchMainOnly();
          updateDocumentSeoMeta();
        }).catch(() => {
          window._cceHydratedArtIds[art.id] = "done";
        });
      }
      const enLoad = isEnglishUi();
      return `
        <section class="page-hero" style="padding:2rem 0;">
          <div class="container">
            <button type="button" class="btn btn-secondary btn-sm" data-action="close-article">${enLoad ? "← Back to Directory" : "← Quay lại danh mục"}</button>
            <h1 style="margin-top:1rem;">${escapeHtml((enLoad && art.titleEn) ? art.titleEn : art.titleVi)}</h1>
            ${art.titleZh ? `<div class="card-title-zh">${escapeHtml(art.titleZh)}</div>` : ""}
            <div class="card mt-2" style="padding:1.25rem;border-top:3px solid var(--imperial-red);">
              <div class="editorial-kicker">${enLoad ? "LOADING MONOGRAPH ARCHIVE" : "ĐANG TẢI TOÀN VĂN CHUYÊN LUẬN"}</div>
              <p style="margin:0.45rem 0 0;color:var(--text-secondary);">${escapeHtml(art.standfirst || (enLoad ? "Fetching full text, bilingual terminology, historical chronology, and evidence matrices..." : "Đang nạp nội dung chuyên sâu, niên biểu, thuật ngữ đối chiếu và ma trận chứng cứ..."))}</p>
            </div>
          </div>
        </section>
      `;
    }
    if (art && !art._v104Stub && !art._v23Stub && Number(art.number || 0) <= 108 && !window._cceLive108Patched && Lazy && !window._cceLive108Loading) {
      window._cceLive108Loading = true;
      Lazy.ensureBundle("v104-live108-patches").then(() => {
        syncArticlesRef();
        window._cceLive108Loading = false;
        window._cceLive108Patched = true;
        patchMainOnly();
      }).catch(() => {
        window._cceLive108Loading = false;
        window._cceLive108Patched = true;
      });
    }
    const sup = getArticleSupplement(art.id) || {};
    const ed = getArticleEditorial(art.id) || {};
    const v = getLocalizedArticleView(art, sup, ed);
    const enM = v.isEn;
    const qaResult =
      EditorialMedia && typeof EditorialMedia.validateArticleEditorial === "function"
        ? EditorialMedia.validateArticleEditorial(art.id)
        : null;
    const state = Store.getState();
    const bookmarked = Store.isBookmarked("article", art.id);
    const completed = Store.isArticleCompleted(art.id);
    const fontSize = state.articleFontSize || "md";

    const galleryIds = (ed.galleryImageIds || []).filter((gid) => Boolean(getEditorialImage(gid)));
    const rawGalleryIdx = ui.articleGalleryIndex[art.id] || 0;
    const safeGalleryIdx = galleryIds.length ? ((rawGalleryIdx % galleryIds.length) + galleryIds.length) % galleryIds.length : 0;
    const activeGalleryImgId = galleryIds[safeGalleryIdx] || null;

    const inlineBySection = {};
    const trailingVisuals = [];
    (ed.inlineVisuals || []).forEach((vis) => {
      const idx = Number.isInteger(vis.afterSectionIndex) ? vis.afterSectionIndex : 0;
      if (idx >= 0 && idx < v.mainContent.length) {
        if (!inlineBySection[idx]) inlineBySection[idx] = [];
        inlineBySection[idx].push(vis);
      } else {
        trailingVisuals.push(vis);
      }
    });

    const isAcademic = Boolean(ui.articleScholarMode);
    const cleanSecTitle = (raw) => String(raw || "").replace(/^\s*\d+[\.\)]\s*/, "").trim();

    const hasAbstract = Boolean(v.abstract);
    const hasTheory = Boolean(v.theoreticalFramework);
    const hasPrimaryQuotes = Array.isArray(v.primarySources) && v.primarySources.length > 0;
    const hasSinoVn = Boolean(v.sinoVietnameseComparison);
    const hasLiushu = Array.isArray(art.terminologyAndLiushu) && art.terminologyAndLiushu.length > 0;

    const tocItems = [
      { id: "sec-hero", label: enM ? "Lead Visual Plate" : "Ảnh chính và thông số" },
      ...(isAcademic && hasAbstract ? [{ id: "sec-abstract", label: enM ? "Research Abstract" : "Tóm tắt chuyên luận" }] : []),
      ...(v.keyTakeaways.length ? [{ id: "sec-takeaways", label: enM ? "Key Takeaways" : "Điểm cốt lõi" }] : []),
      { id: "sec-intro", label: enM ? "Introduction" : "Dẫn nhập" },
      { id: "sec-bg", label: enM ? "1. Historical Context" : "1. Bối cảnh lịch sử" },
      ...v.mainContent.map((s, i) => ({ id: `sec-body-${i}`, label: `${i + 2}. ${cleanSecTitle(s.heading)}` })),
      ...(isAcademic && hasTheory ? [{ id: "sec-theory", label: enM ? "Theoretical Framework" : "Khung lý thuyết và khái niệm" }] : []),
      ...(isAcademic && v.categoryModule ? [{ id: "sec-module", label: v.categoryModule.title }] : []),
      ...(isAcademic && v.historicalDocument ? [{ id: "sec-doc", label: enM ? "Historical Document" : "Tư liệu văn hiến đối chiếu" }] : []),
      ...(isAcademic && galleryIds.length ? [{ id: "sec-gallery", label: enM ? "Visual Gallery" : "Thư viện tư liệu trực quan" }] : []),
      ...(isAcademic && hasPrimaryQuotes ? [{ id: "sec-primary-sources", label: enM ? `Primary Sources (${v.primarySources.length})` : `Tư liệu gốc (${v.primarySources.length})` }] : []),
      ...(isAcademic && v.primaryQuote && !hasPrimaryQuotes ? [{ id: "sec-quote", label: enM ? "Primary Quotation" : "Trích dẫn tư liệu gốc" }] : []),
      ...(isAcademic && hasLiushu ? [{ id: "sec-liushu-terminology", label: enM ? `Liushu Terms (${art.terminologyAndLiushu.length})` : `Chiết tự Lục thư (${art.terminologyAndLiushu.length})` }] : []),
      { id: "sec-terms", label: enM ? "Key Terminology" : "Thuật ngữ trọng tâm" },
      ...(isAcademic && hasSinoVn ? [{ id: "sec-sinovn", label: enM ? "Sino–Vietnamese Lens" : "Đối chiếu Việt – Trung" }] : []),
      ...(isAcademic && v.comparativeAnalysis ? [{ id: "sec-compare", label: enM ? "Comparative Analysis" : "Phân tích so sánh" }] : []),
      ...(v.examples.length ? [{ id: "sec-examples", label: enM ? "Field Examples" : "Ví dụ và minh chứng" }] : []),
      ...(v.conclusion ? [{ id: "sec-conclusion", label: enM ? "Conclusion" : "Tổng kết và luận giải" }] : []),
      { id: "sec-refs", label: enM ? "References & Verification" : "Tài liệu tham khảo và đối chứng" }
    ];

    const relatedArticles = Articles.filter(
      (other) => other.id !== art.id && (other.category === art.category || (art.relatedTopics || []).some((t) => other.categoryLabel.includes(t.split(" ")[0])))
    ).slice(0, 3);
    const fallbackRelated = relatedArticles.length ? relatedArticles : Articles.filter((o) => o.id !== art.id).slice(0, 3);

    return `
      <section class="page-hero" style="padding:1.75rem 0 1.45rem;">
        <div class="container">
          <div class="editorial-article-header" style="border-bottom:none;padding-bottom:0;margin-bottom:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="close-article">${enM ? "← Back to Directory" : "← Quay lại danh mục"}</button>
              <div style="display:flex;flex-wrap:wrap;gap:0.45rem;">
                <span class="badge badge-red">${escapeHtml(v.categoryLabel)}</span>
                <span class="badge badge-outline">${art.readMinutes} ${enM ? "min read" : "phút đọc"}</span>
                <span id="cce-read-remaining" data-mins="${art.readMinutes}" class="badge badge-jade" style="font-size:0.72rem;">${art.readMinutes} ${enM ? "min left" : "phút còn lại"}</span>
              </div>
            </div>
            <h1 style="font-size:clamp(1.85rem, 3vw, 2.55rem);margin-bottom:0.35rem;">${formatInlineMd(v.title, true)}</h1>
            <div class="card-title-zh" style="font-size:1.35rem;margin-bottom:0.2rem;">${art.titleZh} ${renderSpeakBtn(art.titleZh, "Listen to Chinese title")}</div>
            ${v.subTitle ? `<div style="font-size:0.98rem;color:var(--text-muted);">${escapeHtml(v.subTitle)}</div>` : ""}
            ${v.standfirst ? `<p class="editorial-standfirst">${escapeEditorialHtml(v.standfirst)}</p>` : ""}

            <div class="editorial-byline-bar">
              <div class="editorial-byline-meta">
                <span><strong>${enM ? "Author:" : "Biên soạn:"}</strong> ${escapeEditorialHtml(v.editorialAuthor)}</span>
                <span>•</span>
                <span><strong>${enM ? "Project:" : "Dự án:"}</strong> ${escapeEditorialHtml(Brand.projectFullTitle)}</span>
                <span>•</span>
                <span><strong>${enM ? "Published:" : "Xuất bản:"}</strong> ${escapeEditorialHtml(ed.publishedDate || "2026-11-18")}</span>
                <span>•</span>
                <span><strong>${enM ? "Rights:" : "Bản quyền bài viết gốc:"}</strong> ${escapeEditorialHtml(Brand.copyrightNoticeShort)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="article-reader-shell${isAcademic ? "" : " is-story-mode"}${ui.articleZenReading ? " is-curatorial-zen" : ""}${art.id === "forbidden-city-3d-dissection" ? " is-panoramic-3d" : ""}">
        <div class="container">
          ${window.CCE_V10_READER ? window.CCE_V10_READER.renderUnifiedToolbar({
            enM,
            art,
            isAcademic,
            fontSize,
            completed,
            bookmarked,
            title: v.title,
            apaText: buildArticleCitation(art, "apa"),
            bibtexText: buildArticleCitation(art, "bibtex")
          }) : (window.CCE_V9_READER ? window.CCE_V9_READER.renderModeToolbar(enM, art.id) : "")}
          ${isAcademic ? `
            <div class="mobile-article-drawer-bar">
              <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-article-mobile-toc">
                ${ui.articleMobileTocOpen ? (enM ? "Hide Contents" : "Ẩn mục lục") : (enM ? "Contents" : "Mở mục lục bài viết")}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-article-mobile-context">
                ${ui.articleMobileContextOpen ? (enM ? "Hide Drawer" : "Ẩn sổ tay thuật ngữ") : (enM ? "Terms and Quick Notes" : "Tra cứu thuật ngữ")}
              </button>
            </div>
          ` : ""}

          <div class="editorial-reading-layout article-3col-grid">
            ${isAcademic ? `
            <aside class="editorial-toc-rail article-sidebar-left ${ui.articleMobileTocOpen ? "mobile-shown" : ""}" aria-label="Contents">
              <div class="editorial-rail-inner">
                <div class="editorial-rail-header">
                  <span class="rail-kicker">${enM ? "Contents · Progress" : "Mục lục · Tiến trình"}</span>
                  <div class="rail-progress-track">
                    <div class="rail-progress-fill" style="width:${completed ? "100%" : "45%"};"></div>
                  </div>
                  <div class="rail-status-text">
                    ${completed ? (enM ? "Completed" : "Đã hoàn thành") : (enM ? "Reading monograph" : "Đang đọc chuyên luận")}
                  </div>
                </div>
                <nav class="editorial-rail-nav">
                  ${tocItems.map((item) => `
                    <button type="button" class="editorial-rail-link article-toc-link ${ui.activeTocId === item.id ? "active" : ""}" data-action="scroll-article-sec" data-target="${item.id}">
                      ${escapeHtml(item.label)}
                    </button>
                  `).join("")}
                </nav>
                <div class="editorial-rail-footer" style="margin-top:1.2rem;padding-top:0.8rem;border-top:1px solid var(--hairline);">
                  <button type="button" class="btn btn-outline btn-xs" style="width:100%;margin-bottom:0.4rem;font-size:0.75rem;" data-action="toggle-article-mobile-context">
                    ${ICONS.book} ${enM ? "Terms" : "Thuật ngữ"} (${(art.terminologyIds || []).length})
                  </button>
                </div>
              </div>
            </aside>
            ` : ""}

            <article class="editorial-article-main article-center-column">
              ${window.CCE_V4_UX ? window.CCE_V4_UX.renderBilingualSplitView(art) : ""}
              ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderArticlePrimerBox(art, enM) : ""}

              <div class="article-prose text-size-${fontSize}" data-vocab-capture-zone="${escapeHtml(art.id)}" data-vocab-article-title="${escapeHtml(v.title)}">
                ${(() => {
                  const heroHtml = ed.heroImageId ? `
                    <div id="sec-hero" style="margin-bottom:1.5rem;">
                      ${renderEditorialImageFigure(ed.heroImageId, { isHero: true, ratio: "16:9", loading: "eager", showZoom: true })}
                    </div>
                  ` : (() => {
                    const fbHero = art.heroImage || getAcademicPhotoForItem(art.category, art.id, art.number || 0);
                    const heroContain = fbHero && isArtworkOrDocumentSrc(fbHero.src, art.titleVi);
                    const heroStyle = heroContain ? "object-fit:contain;object-position:center;padding:0.65rem;background:var(--bg-surface);" : "object-fit:cover;object-position:50% 30%;";
                    return fbHero ? `
                      <figure id="sec-hero" class="editorial-figure editorial-figure--clean" style="margin:0 0 1.5rem;">
                        <div class="editorial-figure-frame" style="aspect-ratio:16/9;position:relative;overflow:hidden;border-radius:var(--radius-md);background:var(--bg-surface);border:1px solid var(--hairline);">
                          <img decoding="async"  src="${escapeHtml(fbHero.src)}" alt="${escapeHtml(v.title)}" loading="eager" style="width:100%;height:100%;${heroStyle}display:block;" />
                          <button type="button" class="editorial-img-zoom-pill" data-action="open-custom-image" data-src="${escapeHtml(fbHero.src)}" data-caption="${escapeHtml(v.heroCaption)}" data-credit="">${enM ? "⤢ Zoom" : "⤢ Phóng to"}</button>
                        </div>
                        ${v.heroCaption ? `
                          <figcaption class="editorial-caption-clean">
                            <div class="editorial-caption-text"><strong>${escapeHtml(v.heroCaption)}</strong></div>
                          </figcaption>
                        ` : ""}
                      </figure>
                    ` : "";
                  })();

                  const chap1Html = `
                    ${heroHtml}
                    ${v.keyTakeaways.length ? `
                      <div id="sec-takeaways" class="editorial-key-takeaways">
                        <div class="editorial-kicker" style="color:var(--imperial-red);">${enM ? "Key Takeaways" : "Điểm cốt lõi"}</div>
                        <ul>${v.keyTakeaways.map((kt) => `<li>${formatInlineMd(kt, true)}</li>`).join("")}</ul>
                      </div>
                    ` : ""}
                    ${isAcademic && hasAbstract ? `
                      <section id="sec-abstract" class="monograph-abstract-card">
                        <div class="editorial-kicker" style="color:var(--imperial-red);margin-bottom:0.3rem;">${enM ? "Research Abstract" : "Tóm tắt nghiên cứu"}</div>
                        <p style="margin:0;font-size:0.95rem;line-height:1.65;">${formatInlineMd(v.abstract, true)}</p>
                      </section>
                    ` : ""}
                    <div id="sec-intro" class="epistemic-box">
                      <div class="epistemic-title">${enM ? "Introduction" : "Dẫn nhập"}</div>
                      <p style="margin:0;">${formatInlineMd(v.introduction, false)}</p>
                    </div>
                    ${art.id === "forbidden-city-3d-dissection" ? (getForbiddenCity3D() ? getForbiddenCity3D().renderMonographPage(state.uiLang) : (() => {
                      if (Lazy) Lazy.ensureBundle("3d-pack").then(() => patchMainOnly());
                      return `<div class="epistemic-box" style="margin:1.25rem 0;"><strong>${enM ? "Initializing 3D Architectural Studio..." : "Đang khởi tạo mô hình 3D kiến trúc Tử Cấm Thành..."}</strong></div>`;
                    })()) : ""}
                    ${art.id === "temple-of-heaven-tiantan-cosmology-3d" && window.CCE_CIV_ATLAS ? window.CCE_CIV_ATLAS.renderTiantanEmbed(state.uiLang, enM) : ""}
                    <h3 id="sec-bg">${enM ? "1. Historical Context" : "1. Bối cảnh lịch sử"}</h3>
                    <p>${(window.CCE_LABS_EXT && window.CCE_LABS_EXT.injectInlineClassicalGloss) ? window.CCE_LABS_EXT.injectInlineClassicalGloss(formatInlineMd(v.historicalContext, false), enM) : formatInlineMd(v.historicalContext, false)}</p>
                  `;

                  const v10Chapters = [
                    {
                      labelVi: "Dẫn nhập và bối cảnh",
                      labelEn: "Context",
                      secIds: ["sec-hero", "sec-takeaways", "sec-abstract", "sec-intro", "sec-bg"],
                      html: chap1Html
                    }
                  ];

                  for (let bi = 0; bi < v.mainContent.length; bi += 2) {
                    const pair = v.mainContent.slice(bi, bi + 2);
                    const isLastBody = bi + 2 >= v.mainContent.length;
                    const secIds = pair.map((_s, offset) => `sec-body-${bi + offset}`);
                    if (isLastBody) {
                      if (isAcademic && hasTheory) secIds.push("sec-theory");
                      if (isAcademic && v.categoryModule) secIds.push("sec-module");
                    }
                    const bodyChunkHtml = pair.map((sec, offset) => {
                      const idx = bi + offset;
                      return `
                        <h3 id="sec-body-${idx}">${idx + 2}. ${cleanSecTitle(sec.heading)}</h3>
                        <p>${(window.CCE_LABS_EXT && window.CCE_LABS_EXT.injectInlineClassicalGloss) ? window.CCE_LABS_EXT.injectInlineClassicalGloss(formatInlineMd(sec.body, false), enM) : formatInlineMd(sec.body, false)}</p>
                        ${(inlineBySection[idx] || []).map((vis) => `
                          <div style="margin:1.35rem 0 1.55rem;">
                            ${renderEditorialImageFigure(vis.imageId, { callouts: vis.callouts || [], showMapMeta: isAcademic, showZoom: true })}
                          </div>
                        `).join("")}
                      `;
                    }).join("") + (isLastBody ? `
                      ${isAcademic && hasTheory ? `
                        <section id="sec-theory" class="article-section" style="margin-top:1.35rem;">
                          <h3>${enM ? "Theoretical Framework and Core Concepts" : "Khung lý thuyết và hệ khái niệm cốt lõi"}</h3>
                          ${renderTheoryContent(v.theoreticalFramework)}
                        </section>
                      ` : ""}
                      ${trailingVisuals.length ? trailingVisuals.map((vis) => `
                        <div style="margin:1.35rem 0 1.55rem;">
                          ${renderEditorialImageFigure(vis.imageId, { callouts: vis.callouts || [], showMapMeta: isAcademic, showZoom: true })}
                        </div>
                      `).join("") : ""}
                      ${isAcademic && v.categoryModule ? `
                        <section id="sec-module" class="category-template-module">
                          <div class="editorial-kicker">${enM ? `Analytical Matrix • ${escapeEditorialHtml(v.categoryLabel)}` : `Khung phân tích chuyên đề • ${escapeEditorialHtml(v.categoryLabel)}`}</div>
                          <h3 style="margin:0.2rem 0 0;">${escapeEditorialHtml(v.categoryModule.title)}</h3>
                          <div class="category-template-grid">
                            ${(v.categoryModule.items || []).map((it) => `
                              <div class="category-template-cell">
                                <div style="margin-bottom:0.35rem;"><span class="badge badge-outline">${escapeEditorialHtml(it.tag)}</span></div>
                                <div style="font-weight:700;color:var(--text-primary);margin-bottom:0.25rem;">${escapeEditorialHtml(it.label)}</div>
                                <div style="color:var(--text-secondary);line-height:1.45;">${escapeEditorialHtml(it.note)}</div>
                              </div>
                            `).join("")}
                          </div>
                        </section>
                      ` : ""}
                      ${window.CCE_LABS && (art.id === "traditional-architecture-gardens" || art.id === "suzhou-classical-gardens-aesthetics" || art.id === "chinese-science-technology-history-modern") ? window.CCE_LABS.renderDujiangyanLab(enM) : ""}
                      ${window.CCE_LABS && (art.id === "tcm-solar-terms-yangsheng" || art.id === "solar-terms-huangdi-neijing") ? window.CCE_LABS.renderZiwuClockLab(enM) : ""}
                      ${window.CCE_LABS_EXT && (art.id === "guqin-zither-silent-sound-aesthetics" || art.id === "zeng-hou-yi-bianzhong" || art.id === "bronze-music-chimes") ? window.CCE_LABS_EXT.renderPentatonicResonator(enM) : ""}
                      ${window.CCE_LABS_EXT && (art.id === "iching-development" || art.id === "yijing-hexagrams-strategy-timing") ? window.CCE_LABS_EXT.renderYijingHexagramLab(enM) : ""}
                    ` : "");
                    v10Chapters.push({
                      labelVi: cleanSecTitle(pair[0].heading),
                      labelEn: cleanSecTitle(pair[0].heading),
                      secIds,
                      html: bodyChunkHtml
                    });
                  }

                  const chapSourcesHtml = `
                    ${isAcademic && v.historicalDocument ? `
                      <section id="sec-doc" class="historical-doc-inspector">
                        <div>
                          ${renderEditorialImageFigure(v.historicalDocument.imageId || (ed && ed.historicalDocument && ed.historicalDocument.imageId) || (ed && ed.heroImageId), { ratio: "4:3", compact: true, showZoom: true })}
                        </div>
                        <div>
                          <div class="editorial-kicker">${enM ? "Historical Document Inspector" : "Tư liệu văn hiến và hiện vật đối chiếu"}</div>
                          <h3 style="margin:0.25rem 0 0.4rem;font-size:1.08rem;">${escapeEditorialHtml(enVal(v.historicalDocument, "docTypeLabel") || (enM ? v.title : v.historicalDocument.docTypeLabel))}</h3>
                          <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.65rem;">
                            <strong>${enM ? "Era:" : "Niên đại:"}</strong> ${escapeEditorialHtml(enVal(v.historicalDocument, "period"))} • <strong>${enM ? "Archive:" : "Lưu trữ:"}</strong> ${escapeEditorialHtml(enVal(v.historicalDocument, "holdingInstitution"))}
                          </div>
                          <div class="primary-quote-box" style="margin:0.5rem 0 0.7rem;">
                            <div class="hanzi" style="font-size:1.06rem;color:var(--text-primary);" lang="zh-Hans">${escapeEditorialHtml(v.historicalDocument.transcriptionZh)}</div>
                          </div>
                          <p style="font-size:0.86rem;margin:0 0 0.45rem;"><strong>${enM ? "Translation:" : "Dịch và phiên giải:"}</strong> ${escapeEditorialHtml(enM ? (v.historicalDocument.translationEn || v.historicalDocument.translationVi) : v.historicalDocument.translationVi)}</p>
                          <div style="font-size:0.79rem;color:var(--text-muted);"><strong>${enM ? "Archival Note:" : "Ghi chú tư liệu:"}</strong> ${escapeEditorialHtml(enM ? (v.historicalDocument.archivalNoteEn || enVal(v.historicalDocument, "holdingInstitution")) : v.historicalDocument.archivalNote)}</div>
                        </div>
                      </section>
                    ` : ""}
                    ${isAcademic && activeGalleryImgId ? `
                      <section id="sec-gallery" class="editorial-gallery-box">
                        <div class="editorial-gallery-header">
                          <div>
                            <div class="editorial-kicker">${enM ? "Multi-Frame Visual Dossier" : "Thư viện tư liệu trực quan"}</div>
                            <h3 style="margin:0.15rem 0 0;font-size:1.12rem;">${enM ? `Comparing Figures, Maps and Plates (${safeGalleryIdx + 1}/${galleryIds.length})` : `Đối chiếu hình ảnh, bản đồ và đồ họa (${safeGalleryIdx + 1}/${galleryIds.length})`}</h3>
                          </div>
                          <div style="display:flex;gap:0.4rem;">
                            <button type="button" class="btn btn-secondary btn-sm" data-action="article-gallery-step" data-id="${art.id}" data-dir="-1" aria-label="${enM ? "Previous frame" : "Khung ảnh trước"}">${enM ? "← Prev" : "← Trước"}</button>
                            <button type="button" class="btn btn-secondary btn-sm" data-action="article-gallery-step" data-id="${art.id}" data-dir="1" aria-label="${enM ? "Next frame" : "Khung ảnh tiếp theo"}">${enM ? "Next →" : "Sau →"}</button>
                          </div>
                        </div>
                        ${renderEditorialImageFigure(activeGalleryImgId, { ratio: "16:10", showZoom: true })}
                        <div class="editorial-gallery-thumbs" role="tablist" aria-label="${enM ? "Quick select gallery frame" : "Chọn nhanh khung ảnh trong thư viện"}">
                          ${galleryIds
                            .map((gid, gIdx) => {
                              const gImg = getEditorialImage(gid);
                              if (!gImg) return "";
                              const gTitle = enM ? (gImg.titleEn || gImg.titleVi) : gImg.titleVi;
                              return `
                                <button type="button" class="editorial-gallery-thumb-btn ${gIdx === safeGalleryIdx ? "active" : ""}" data-action="article-gallery-select" data-id="${art.id}" data-idx="${gIdx}" aria-label="${enM ? `View frame ${gIdx + 1}: ` : `Xem ảnh ${gIdx + 1}: `}${escapeEditorialHtml(gTitle)}">
                                  <img decoding="async"  src="${escapeEditorialHtml(gImg.src)}" alt="${escapeEditorialHtml(gTitle)}" loading="lazy" />
                                </button>
                              `;
                            }).join("")}
                        </div>
                      </section>
                    ` : ""}
                    ${isAcademic && hasPrimaryQuotes ? renderMonographPrimaryQuotes(v.primarySources) : ""}
                    ${isAcademic && v.primaryQuote && !hasPrimaryQuotes ? `
                      <h3 id="sec-quote">${enM ? "Primary-Source Quotation" : "Trích dẫn tư liệu gốc"}</h3>
                      <div class="primary-quote-box">
                        <div class="hanzi" style="font-size:1.18rem;color:var(--text-primary);margin-bottom:0.4rem;">“${v.primaryQuote.zh}” ${renderSpeakBtn(v.primaryQuote.zh, enM ? "Listen to classical source quotation" : "Nghe phát âm trích dẫn kinh điển")}</div>
                        <div class="pinyin" style="font-size:0.88rem;margin-bottom:0.45rem;">${v.primaryQuote.pinyin || ""}</div>
                        <p style="margin:0 0 0.45rem;font-size:0.95rem;"><strong>${enM ? "Translation:" : "Dịch nghĩa:"}</strong> ${enM ? (v.primaryQuote.en || v.primaryQuote.vi) : v.primaryQuote.vi}</p>
                        <div style="font-size:0.82rem;color:var(--text-muted);">— ${enM ? "Source:" : "Nguồn:"} <i>${v.primaryQuote.source}</i></div>
                      </div>
                    ` : ""}
                    ${isAcademic && hasLiushu ? renderMonographLiushuGrid(art.terminologyAndLiushu, v.terminologyEn) : ""}
                    ${(art.terminologyIds && art.terminologyIds.length) ? `
                      <h3 id="sec-terms">${enM ? "Core Terminology (Click for Liushu Etymology)" : "Thuật ngữ trọng tâm (bấm để chiết tự Lục thư)"}</h3>
                      <div style="display:flex;flex-wrap:wrap;gap:0.55rem;margin-bottom:1.25rem;">
                        ${(art.terminologyIds || []).map((tid) => {
                          const t = getTermById(tid);
                          if (!t) return "";
                          const tDef = enM ? (t.english || t.vietnamese) : t.vietnamese.split("(")[0].trim();
                          return `<button type="button" class="term-chip" data-action="open-term" data-id="${t.id}"><span class="hanzi">${t.hanzi}</span> <span class="pinyin">${t.pinyin}</span> — ${tDef}</button>`;
                        }).join("")}
                      </div>
                    ` : `<div id="sec-terms"></div>`}
                  `;

                  if (chapSourcesHtml.replace(/<div id="sec-terms"><\/div>/g, "").trim()) {
                    v10Chapters.push({
                      labelVi: "Tư liệu gốc và chiết tự",
                      labelEn: "Primary Sources & Terms",
                      secIds: ["sec-doc", "sec-gallery", "sec-primary-sources", "sec-quote", "sec-liushu-terminology", "sec-terms"],
                      html: chapSourcesHtml
                    });
                  }

                  const chapEndHtml = `
                    ${isAcademic && hasSinoVn ? `
                      <section id="sec-sinovn" class="crosslink-strip" style="margin:1.25rem 0;border-left:4px solid var(--jade-green);">
                        <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.25rem;">${enM ? "Sino–Vietnamese Comparative Lens" : "Góc nhìn đối chiếu văn hóa Việt – Trung"}</div>
                        <h3 style="margin:0 0 0.5rem;">${enM ? "Historical Comparison and Sino–Vietnamese Cultural Exchange" : "Đối chiếu lịch sử và tiếp biến văn hóa Việt – Trung"}</h3>
                        ${renderSinoVnContent(v.sinoVietnameseComparison)}
                      </section>
                    ` : ""}
                    ${isAcademic && v.comparativeAnalysis ? `
                      <h3 id="sec-compare">${enM ? "Comparative Analysis" : "Phân tích so sánh"}</h3>
                      <p>${v.comparativeAnalysis}</p>
                    ` : ""}
                    ${(v.examples && v.examples.length) ? `
                      <h3 id="sec-examples">${enM ? "Case Studies and Practical Illustrations" : "Ví dụ và minh chứng thực tế"}</h3>
                      <ul style="padding-left:1.2rem;color:var(--text-secondary);">
                        ${(v.examples || []).map((ex) => `<li style="margin-bottom:0.55rem;">${formatInlineMd(ex, false)}</li>`).join("")}
                      </ul>
                    ` : ""}
                    ${v.conclusion ? `
                      <h3 id="sec-conclusion">${enM ? (isAcademic ? "Academic Conclusion" : "Concluding Synthesis") : "Tổng kết và luận giải"}</h3>
                      <p>${formatInlineMd(v.conclusion, false)}</p>
                    ` : ""}
                    ${window.CCE_V10_RICH_BLOCKS ? window.CCE_V10_RICH_BLOCKS.renderForArticle(art, enM) : ""}
                    ${window.CCE_V3_W5 ? window.CCE_V3_W5.renderArticleComprehension(art, enM, Dictionary) : ""}
                    ${renderCategorizedReferencesSection(v.references || [], enM, art)}
                  `;

                  v10Chapters.push({
                    labelVi: "Đối chiếu và tham khảo",
                    labelEn: "Synthesis & Sources",
                    secIds: ["sec-sinovn", "sec-compare", "sec-examples", "sec-conclusion", "sec-refs"],
                    html: chapEndHtml
                  });

                  return window.CCE_V10_READER
                    ? window.CCE_V10_READER.renderChapters(art.id, enM, v10Chapters)
                    : v10Chapters.map((c) => c.html).join("");
                })()}
              </div>
            </article>

            <!-- Off-canvas Glossary & Study Drawer (Drawer mode toggled by button or mobile) -->
            <div class="editorial-drawer-overlay ${ui.articleMobileContextOpen ? "active" : ""}" data-action="toggle-article-mobile-context"></div>
            <aside class="editorial-context-drawer article-sidebar-right ${ui.articleMobileContextOpen ? "active" : ""}" aria-label="${enM ? "Terminology & Reading Notebook drawer" : "Sổ tay tra cứu thuật ngữ và ghi chú"}">
              <div class="drawer-header">
                <div>
                  <strong style="font-size:0.95rem;">${enM ? "Monograph Notebook" : "Sổ tay Chuyên luận"}</strong>
                  <div style="font-size:0.75rem;color:var(--text-muted);">${enM ? "Terminology &amp; contextual reading notes" : "Tra cứu thuật ngữ &amp; ghi chú học tập"}</div>
                </div>
                <button type="button" class="btn btn-ghost btn-sm" data-action="toggle-article-mobile-context" aria-label="${enM ? "Close drawer" : "Đóng ngăn tra cứu"}">${ICONS.close} ${enM ? "Close" : "Đóng"}</button>
              </div>
              <div class="drawer-body">
                <div class="editorial-kicker" style="margin-bottom:0.5rem;">${enM ? `Article Terms (${(art.terminologyIds || []).length})` : `Từ vựng Chuyên đề (${(art.terminologyIds || []).length})`}</div>
                ${(art.terminologyIds || [])
                  .map((tid) => {
                    const t = getTermById(tid);
                    if (!t) return "";
                    return `
                      <button type="button" class="hero-autocomplete-item" style="border:1px solid var(--border-subtle);margin-bottom:0.45rem;" data-action="open-term" data-id="${t.id}">
                        <div>
                          <span class="hanzi" style="font-size:1.1rem;">${t.hanzi}</span>
                          <span class="pinyin" style="font-size:0.82rem;margin-left:0.35rem;">${t.pinyin}</span><br>
                          <span style="font-size:0.78rem;color:var(--text-muted);">${enM ? (t.english || t.vietnamese) : t.vietnamese.split("(")[0].trim()}</span>
                        </div>
                        <span style="font-size:0.75rem;">→</span>
                      </button>
                    `;
                  })
                  .join("")}

                ${(v.relatedFigures && v.relatedFigures.length) ? `
                  <div class="editorial-kicker" style="margin:1.2rem 0 0.5rem;">${enM ? "Historical Figures" : "Nhân vật Liên quan"}</div>
                  ${v.relatedFigures.map(f => `
                    <div style="margin-bottom:0.55rem;padding-bottom:0.45rem;border-bottom:1px solid var(--border-subtle);font-size:0.83rem;">
                      <strong>${f.name}</strong> <span style="color:var(--text-muted);">(${f.dates})</span><br>
                      <span style="color:var(--text-secondary);">${f.role}</span>
                    </div>
                  `).join("")}
                ` : ""}

                ${(v.relatedTexts && v.relatedTexts.length) ? `
                  <div class="editorial-kicker" style="margin:1.2rem 0 0.5rem;">${enM ? "Primary Canon &amp; Texts" : "Kinh điển &amp; Tư liệu"}</div>
                  <ul style="padding-left:1rem;margin:0;font-size:0.83rem;color:var(--text-secondary);">
                    ${v.relatedTexts.map((rt) => `<li style="margin-bottom:0.35rem;">${rt}</li>`).join("")}
                  </ul>
                ` : ""}

                <div class="editorial-kicker" style="margin:1.2rem 0 0.5rem;">${enM ? "Quick Study Note (Reading Log)" : "Ghi chú Nhanh (Lưu Nhật ký)"}</div>
                <div id="article-quick-note-box">
                  <form data-action="add-note-form" style="display:flex;flex-direction:column;gap:0.55rem;">
                    <input required name="title" class="form-input" style="font-size:0.84rem;" value="${enM ? "Note: " : "Ghi chú: "}${escapeHtml(v.title.slice(0, 48))}" />
                    <input type="hidden" name="category" value="${escapeHtml(v.categoryLabel)}" />
                    <input type="hidden" name="method" value="Feynman Technique" />
                    <textarea required name="content" id="article-quick-note-textarea" rows="3" class="form-textarea" style="font-size:0.84rem;" placeholder="${enM ? "Summarize key legal/cultural takeaways in your own words..." : "Tóm tắt luận điểm cốt lõi hoặc điều khoản bằng ngôn ngữ của bạn..."}"></textarea>
                    <button type="submit" class="btn btn-primary btn-sm">${enM ? "Save to Study Journal" : "Lưu vào Nhật ký Học tập"}</button>
                  </form>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    `;
  }

  // ==========================================================================
  // Page 3: INTERACTIVE DIGITAL MUSEUM (Section 6 of Master Prompt)
  // Grid & List views, Category + Period + Search filters, Detail Modal + Lightbox
  // ==========================================================================
  const MUSEUM_CAT_EN_MAP = {
    all: "All Artifacts",
    paintings: "Paintings & Scrolls",
    calligraphy: "Calligraphy",
    ceramics: "Ceramics & Porcelain",
    bronze: "Ritual Bronzes",
    jade: "Jade & Carving",
    texts: "Rare Manuscripts",
    architecture: "Architecture & Palaces",
    maps: "Historical Cartography"
  };

  function renderMuseumResultsContent() {
    const enM = isEnglishUi();
    const query = normalizeText(ui.museumQuery);
    const filtered = (Museum.artifacts || []).filter((item) => {
      const catOk =
        ui.museumCategory === "all" ||
        item.category === ui.museumCategory ||
        (item.featuredCollections || []).includes(ui.museumCategory);
      const periodOk = ui.museumPeriodFilter === "all" || item.periodId === ui.museumPeriodFilter;
      const qOk =
        !query ||
        normalizeText(item.nameVi).includes(query) ||
        normalizeText(item.nameEn).includes(query) ||
        item.nameZh.includes(ui.museumQuery.trim()) ||
        normalizeText(item.pinyin).includes(query) ||
        normalizeText(item.collection).includes(query) ||
        normalizeText(item.material).includes(query);
      return catOk && periodOk && qOk;
    });

    const filterSig = [query, ui.museumCategory, ui.museumPeriodFilter].join("|");
    const Pager = window.CCE_V10_PAGINATOR;
    const mPaged = Pager
      ? Pager.paginate(filtered, "museum", { filterSig, desktopPerPage: 12, mobilePerPage: 8 })
      : { slice: filtered, totalItems: filtered.length, renderControls: () => "" };
    const visibleMuseum = mPaged.slice;

    return `
      <div class="museum-toolbar">
        <span style="font-size:0.88rem;color:var(--text-muted);">${enM ? `Showing <strong>${visibleMuseum.length}</strong> of <strong>${filtered.length}</strong> matching / ${Museum.artifacts.length} museum artifacts.` : `Đang xem <strong>${visibleMuseum.length}</strong> / <strong>${filtered.length}</strong> hiện vật khớp lọc (tổng ${Museum.artifacts.length}).`}</span>
        ${(ui.museumCategory !== "all" || ui.museumPeriodFilter !== "all" || ui.museumQuery)
          ? `<button type="button" class="btn btn-secondary btn-sm" data-action="clear-museum-filters">${ICONS.close} ${enM ? "Clear Filters" : "Xóa bộ lọc bảo tàng"}</button>`
          : ""}
      </div>

      ${filtered.length === 0
        ? renderSmartEmptyState({
            query: ui.museumQuery,
            resetAction: "clear-museum-filters",
            resetLabel: enM ? `Show All ${Museum.artifacts.length} Artifacts` : `Hiển thị toàn bộ ${Museum.artifacts.length} hiện vật`,
            scopeLabel: enM ? "Digital Museum and Archived Treasures" : "Kho bảo tàng số và bảo vật lưu trữ",
            targetField: "museum",
            suggestions: enM ? ["Qingming Scroll", "Qianli Jiangshan", "Lanting Xu", "Bronze Ding", "Jade Cong"] : ["Thanh Minh", "Thiên Lý Giang Sơn", "Lan Đình Tự", "Đỉnh đồng", "Ngọc tông"]
          })
        : ui.museumViewMode === "list"
        ? `<div class="museum-list">
            ${visibleMuseum
              .map((art) => {
                const fav = Store.isBookmarked("artifact", art.id);
                const artTitle = enM ? (art.nameEn || art.nameVi) : art.nameVi;
                const artCat = enVal(art, "categoryLabel") || MUSEUM_CAT_EN_MAP[art.category] || art.categoryLabel;
                const artPer = enVal(art, "periodLabel");
                const artCol = enVal(art, "collection");
                const artMat = enVal(art, "material");
                return `
                  <article class="museum-list-item">
                    ${Visuals.renderArtifactVisualHTML(art, false)}
                    <div>
                      <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.4rem;">
                        <span class="badge badge-gold">${escapeHtml(artCat)} • ${escapeHtml(artPer)}</span>
                        <button type="button" class="btn btn-ghost btn-sm" data-action="toggle-bookmark" data-type="artifact" data-id="${art.id}" data-title="${escapeHtml(artTitle)}">${ICONS.bookmark} ${fav ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save" : "Lưu")}</button>
                      </div>
                      <h3 style="margin-bottom:0.2rem;">${formatInlineMd(artTitle, true)} (<span class="hanzi">${formatHanzi(art.nameZh, art.nameZhTrad)}</span>)</h3>
                      <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.5rem;">${enM ? "" : `${escapeHtml(art.nameEn || "")} • `}<span class="pinyin">${art.pinyin}</span></div>
                      <p style="font-size:0.88rem;margin-bottom:0.6rem;"><strong>${enM ? "Collection:" : "Lưu giữ:"}</strong> ${escapeHtml(artCol)} • <strong>${enM ? "Medium:" : "Chất liệu:"}</strong> ${escapeHtml(artMat)}</p>
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-artifact" data-id="${art.id}">${enM ? "Inspect Artifact Dossier →" : "Xem hồ sơ giám định →"}</button>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>`
        : `<div class="museum-grid">
            ${visibleMuseum
              .map((art) => {
                const fav = Store.isBookmarked("artifact", art.id);
                const isScroll = isHandscrollArtwork(art);
                const artTitle = enM ? (art.nameEn || art.nameVi) : art.nameVi;
                const artCat = enVal(art, "categoryLabel") || MUSEUM_CAT_EN_MAP[art.category] || art.categoryLabel;
                const artPer = enVal(art, "periodLabel");
                const artCol = enVal(art, "collection").split("(")[0].trim();
                const artSig = enVal(art, "culturalSignificance");
                return `
                  <article class="card interactive museum-card ${isScroll ? "is-handscroll-card" : ""}" style="padding:1rem;">
                    ${Visuals.renderArtifactVisualHTML(art, false)}
                    <div class="card-header-row" style="margin-top:0.85rem;">
                      <span class="ed-meta-line" style="margin:0;">${escapeHtml(artCat)} · ${escapeHtml(artPer)} · ${escapeHtml(artCol)}</span>
                      <button type="button" class="btn btn-ghost btn-sm" data-action="toggle-bookmark" data-type="artifact" data-id="${art.id}" data-title="${escapeHtml(artTitle)}">${ICONS.bookmark} ${fav ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save" : "Lưu")}</button>
                    </div>
                    <div class="card-title-zh">${art.nameZh}</div>
                    <h3 class="card-title" style="font-size:1.15rem;">${formatInlineMd(artTitle, true)}</h3>
                    ${isScroll ? `<span class="handscroll-caption-line">${enM ? "Horizontal Handscroll · Click to unroll full view →" : "Trường quyển ngang · Nhấn để cuộn xem toàn bức →"}</span>` : ""}
                    <p style="font-size:0.84rem;margin-top:0.35rem;">${escapeEditorialHtml(slicePlainPreview(artSig, 115))}</p>
                    <div class="card-footer-row">
                      <span class="pinyin" style="font-size:0.78rem;">${art.pinyin}</span>
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-artifact" data-id="${art.id}">${enM ? "Details →" : "Chi tiết →"}</button>
                    </div>
                  </article>
                `;
              })
              .join("")}
          </div>`}
      ${filtered.length ? mPaged.renderControls(enM) : ""}
    `;
  }

  function renderMuseumPage() {
    const enM = isEnglishUi();
    const museumCatalogHtml = () => `
          <div class="crosslink-strip" style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
            <div style="font-size:0.86rem;">
              ${enM
                ? `<strong>Curatorial Track Distinction:</strong> <strong>Digital Museum (${Museum.artifacts.length} Multi-Material Relics)</strong> covers bronzes, porcelain, jade, steles, and calligraphy; <strong>Master Paintings (${PaintingsList.length} Silk and Paper Scrolls)</strong> provides 9-dimension painterly critique.`
                : `<strong>Phân định chuyên khu:</strong> <strong>Bảo tàng số (${Museum.artifacts.length} bảo vật đa chất liệu)</strong> tập trung hiện vật đồng thanh, gốm sứ, cổ tịch và thư pháp; <strong>Triển lãm Quốc họa (${PaintingsList.length} tác phẩm)</strong> khảo cứu mỹ học hội họa.`}
            </div>
            <button type="button" class="btn btn-gold btn-sm" data-action="nav" data-page="paintings">${enM ? `Open ${PaintingsList.length} Master Paintings →` : `Chuyển sang triển lãm ${PaintingsList.length} Quốc họa →`}</button>
          </div>

          <div class="card" style="margin-bottom:1.4rem;">
            <div class="grid grid-2" style="align-items:end;gap:1rem;margin-bottom:0.9rem;">
              <div>
                <label for="museum-search-input" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.35rem;">${enM ? "Search Artifact / Museum / Medium" : "Tìm hiện vật, bảo tàng hoặc chất liệu"}</label>
                <input
                  id="museum-search-input"
                  type="text"
                  class="form-input"
                  data-action="museum-search-input"
                  value="${escapeHtml(ui.museumQuery)}"
                  placeholder="${enM ? "e.g., Ru ware, Forbidden City, Wang Xizhi, 清明上河图, Jingdezhen..." : "vd: Thanh Hoa, Cố Cung, Vương Hi Chi, 清明上河图, Cảnh Đức Trấn..."}"
                />
              </div>
              <div style="display:flex;gap:0.75rem;align-items:end;flex-wrap:wrap;">
                <div style="flex:1;min-width:190px;">
                  <label for="museum-period-select" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.35rem;">${enM ? "Filter by Historical Period" : "Lọc theo thời kỳ"}</label>
                  <select id="museum-period-select" class="form-select" data-action="museum-period-filter">
                    <option value="all" ${ui.museumPeriodFilter === "all" ? "selected" : ""}>${enM ? "All Dynasties / Periods" : "Tất cả triều đại và thời kỳ"}</option>
                    ${History.periods
                      .map((p) => `<option value="${p.id}" ${ui.museumPeriodFilter === p.id ? "selected" : ""}>${enM ? (p.nameEn || p.nameVi) : p.nameVi} (${p.nameZh})</option>`)
                      .join("")}
                  </select>
                </div>
                <div style="display:flex;gap:0.35rem;">
                  <button type="button" class="btn ${ui.museumViewMode === "grid" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-museum-view" data-mode="grid" style="display:inline-flex;align-items:center;gap:0.35rem;"><span>⊞</span><span>${enM ? "Grid" : "Lưới"}</span></button>
                  <button type="button" class="btn ${ui.museumViewMode === "list" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-museum-view" data-mode="list">${ICONS.list} ${enM ? "List" : "Danh sách"}</button>
                </div>
              </div>
            </div>

            <div class="filter-bar" style="margin-bottom:0;">
              ${Museum.categories
                .map(
                  (c) => `
                    <button type="button" class="filter-pill ${ui.museumCategory === c.id ? "active" : ""}" data-action="filter-museum-cat" data-cat="${c.id}">
                      ${enM ? (c.labelEn || MUSEUM_CAT_EN_MAP[c.id] || c.labelVi) : c.labelVi} <span class="hanzi">${c.labelZh}</span>
                    </button>
                  `
                )
                .join("")}
            </div>
          </div>

          <div id="museum-results-slot">
            ${renderMuseumResultsContent()}
          </div>
    `;

    const museum3dHtml = () => (window.CCE_3D_HUB
      ? window.CCE_3D_HUB.renderUnifiedStudio(enM, Store.getState().uiLang)
      : (window.CCE_ARTIFACTS_3D ? window.CCE_ARTIFACTS_3D.renderSection(enM, Store.getState().uiLang) : `<section class="card mt-2 mb-2" style="padding:1.35rem;border-top:3px solid var(--imperial-red);"><div class="editorial-kicker" style="color:var(--imperial-red);">${enM ? "INTERACTIVE 3D STUDIO · LOADING WEBGL" : "PHÒNG MÔ HÌNH 3D · ĐANG NẠP WEBGL"}</div><h3 style="margin:0.35rem 0 0;">${enM ? "Initializing 110 interactive Three.js PBR models..." : "Đang nạp 110 mô hình 3D Three.js PBR tương tác..."}</h3></section>`));

    const museumDiscoveryHtml = () => `
      ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderPigmentsReference(enM) : ""}
      ${window.CCE_V9_HANDSCROLL ? window.CCE_V9_HANDSCROLL.renderExhibitionHallBanner(enM) : ""}
      ${window.CCE_V9_DISCOVERY ? window.CCE_V9_DISCOVERY.renderSection("museum", enM) : ""}
    `;

    const museumTimelineHtml = () => (window.CCE_GALLERY_V3
      ? window.CCE_GALLERY_V3.renderCraftTimeline4000(ui.museumPeriodFilter, enM)
      : "");

    const museumSubpages = [
      { id: "catalog", labelVi: "Danh mục bảo vật", labelEn: "Artifact Catalog", count: Museum.artifacts.length, render: museumCatalogHtml },
      { id: "studio3d", labelVi: "Phòng mô hình 3D tương tác", labelEn: "Interactive 3D Studio", count: 100, render: museum3dHtml },
      { id: "discovery", labelVi: "Sắc tố khoáng và trưng bày", labelEn: "Pigments & Exhibition", render: museumDiscoveryHtml },
      { id: "timeline", labelVi: "Tiến trình chế tác 4.000 năm", labelEn: "4,000-Year Craft Timeline", render: museumTimelineHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enM ? "Digital Museum Exhibition · 数字博物馆" : "Triển lãm hiện vật · 数字博物馆"}</div>
          <h1>${enM ? "Digital museum of Chinese civilization and multi-material relics" : "Bảo tàng số văn hiến và bảo vật đa chất liệu"}</h1>
          <p class="section-subtitle">
            ${enM
              ? `Explore ${Museum.artifacts.length} verified masterpieces spanning bronzes, Song ceramics, jades, rare calligraphy, architectural axes, and historical cartography with curator inspection dossiers.`
              : `Khám phá ${Museum.artifacts.length} hiện vật tiêu biểu từ hội họa, thư pháp, gốm sứ, cổ tịch đến bản đồ và kiến trúc cổ đại với hồ sơ giám định xác thực.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("museum", museumSubpages, { enM }) : `<section class="page-section fade-in-up"><div class="container">${museumCatalogHtml()}${museum3dHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("museum", enM)}</div>` : ""}
    `;
  }

  function renderArtifactModal() {
    if (!ui.activeArtifactId) return "";
    const art = Museum.artifacts.find((a) => a.id === ui.activeArtifactId);
    if (!art) return "";
    const enM = isEnglishUi();
    const fav = Store.isBookmarked("artifact", art.id);
    const related = (art.relatedIds || []).map((id) => Museum.artifacts.find((x) => x.id === id)).filter(Boolean);
    const matchingPainting = PaintingsList.find((p) => p.id === art.id || p.titleZh === art.nameZh);
    const artTitle = enM ? (art.nameEn || art.nameVi) : art.nameVi;
    const artSub = enM ? "" : art.nameEn;

    return `
      <div class="modal-backdrop open" data-action="close-modal-backdrop" style="z-index:215;">
        <div class="modal-panel" style="max-width:960px;" role="dialog" aria-modal="true" aria-label="${escapeHtml(artTitle)}">
          <button type="button" class="modal-close-btn" data-action="close-artifact" aria-label="${enM ? "Close artifact dossier" : "Đóng hồ sơ hiện vật"}">${ICONS.close}</button>

          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
            <span class="badge badge-red">${escapeHtml(enVal(art, "categoryLabel") || MUSEUM_CAT_EN_MAP[art.category] || art.categoryLabel)}</span>
            <span class="badge badge-gold">${escapeHtml(enVal(art, "periodLabel"))}</span>
            ${matchingPainting ? `<button type="button" class="btn btn-gold btn-sm" data-action="switch-artifact-to-painting" data-id="${matchingPainting.id}">${enM ? "Open 9-Dimension Painting Monograph →" : "Mở Hồ sơ Quốc họa 9 Chiều →"}</button>` : ""}
          </div>

          <h2 style="font-family:var(--font-editorial);font-size:2rem;">${formatInlineMd(artTitle, true)}</h2>
          <div style="display:flex;flex-wrap:wrap;align-items:baseline;gap:0.75rem;margin-bottom:1rem;">
            <span style="font-size:1.25rem;">${formatHanzi(art.nameZh, art.nameZhTrad)}</span>
            <span class="pinyin">${art.pinyin}</span>
            ${artSub ? `<span style="font-size:0.9rem;color:var(--text-muted);">• ${escapeHtml(artSub)}</span>` : ""}
          </div>

          <div class="grid grid-2" style="align-items:start;gap:1.25rem;margin-bottom:1.25rem;">
            <div>
              ${renderHotspotInspector(art, art.imageUrl || "", "artifact")}
              <div style="display:flex;gap:0.5rem;margin-top:0.75rem;flex-wrap:wrap;">
                <button type="button" class="btn btn-primary btn-sm" data-action="zoom-artifact">${enM ? "Zoom Full View" : "Phóng to Ảnh"}</button>
                <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="artifact" data-id="${art.id}" data-title="${escapeHtml(artTitle)}">
                  ${fav ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save to Collection" : "Lưu vào Yêu thích")}
                </button>
                <button type="button" class="btn btn-secondary btn-sm" data-action="print-dossier">${ICONS.fileText} ${enM ? "Print A4 Dossier" : "In Hồ sơ A4"}</button>
              </div>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.5rem;font-size:0.88rem;">
              <div class="flashcard-layer"><strong>${enM ? "Dating / Estimate:" : "Niên đại / Ước định:"}</strong> ${escapeHtml(enVal(art, "dateEstimate"))}</div>
              <div class="flashcard-layer"><strong>${enM ? "Medium & Technique:" : "Chất liệu &amp; Kỹ thuật:"}</strong> ${escapeHtml(enVal(art, "material"))}</div>
              <div class="flashcard-layer"><strong>${enM ? "Dimensions (Verified):" : "Kích thước (nếu kiểm chứng):"}</strong> ${escapeHtml(enVal(art, "dimensions"))}</div>
              <div class="flashcard-layer"><strong>${enM ? "Provenance / Origin:" : "Xuất xứ / Tác giả:"}</strong> ${escapeHtml(enVal(art, "origin"))}</div>
              <div class="flashcard-layer"><strong>${enM ? "Holding Institution:" : "Bảo tàng / Sưu tập:"}</strong> ${escapeHtml(enVal(art, "collection"))}</div>
              ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderRealScaleRuler(art, enM) : ""}
            </div>
          </div>

          <div class="flashcard-layer" style="margin-bottom:0.75rem;">
            <strong>${enM ? "Cultural & Artistic Significance:" : "Ý nghĩa Văn hóa &amp; Nghệ thuật:"}</strong><br>${formatInlineMd(enVal(art, "culturalSignificance"), true)}
          </div>
          <div class="flashcard-layer" style="margin-bottom:0.75rem;">
            <strong>${enM ? "Historical Context:" : "Bối cảnh Lịch sử:"}</strong><br>${formatInlineMd(enVal(art, "historicalContext"), true)}
          </div>
          <div class="epistemic-box" style="margin-bottom:1rem;">
            <div class="epistemic-title">${enM ? "Provenance &amp; Archival Attribution" : "Nguồn Tư liệu &amp; Quyền Lưu trữ"}</div>
            <p style="margin:0;font-size:0.86rem;">${escapeHtml(enVal(art, "attribution"))}</p>
          </div>

          ${art.visitorNote ? `
            <div class="card" style="margin-bottom:1rem;padding:0.95rem 1.1rem;border-left:4px solid var(--jade-green);background:var(--bg-jade-soft);">
              <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.25rem;">${enM ? "4. CURATORIAL &amp; VISITOR INSPECTION NOTES" : "4. GÓC NHÌN THAM QUAN &amp; KHẢO CỨU CHO KHÁCH VIỆT"}</div>
              <div style="font-size:0.86rem;line-height:1.58;display:flex;flex-direction:column;gap:0.38rem;">
                <div><strong>${enM ? "Craft & Material Dissection:" : "Kỹ thuật Chế tác Nổi bật:"}</strong> ${formatInlineMd(enM ? (art.visitorNote.techniqueDissectionEn || enVal(art, "material")) : (art.visitorNote.techniqueDissection || art.material || ""), true)}</div>
                <div><strong>${enM ? "Gallery & Conservation Protocol:" : "Địa điểm &amp; Lưu ý Bảo tồn:"}</strong> ${formatInlineMd(enM ? (art.visitorNote.rotationStatusEn || `Preserved at ${enVal(art, "collection") || "National Museum Collection"}.`) : (art.visitorNote.rotationStatus || ""), true)}</div>
                <div><strong>${enM ? "What to Look For First:" : "Điểm Cần Quan Sát Đầu Tiên:"}</strong> ${formatInlineMd(enM ? (art.visitorNote.whatToLookForFirstEn || enVal(art, "culturalSignificance") || "") : (art.visitorNote.whatToLookForFirst || ""), true)}</div>
              </div>
            </div>` : ""}

          ${window.CCE_V104_VIEWS ? window.CCE_V104_VIEWS.renderArtifactDeepDossier(art, enM) : ""}

          ${related.length
            ? `<div>
                <h4 style="margin-bottom:0.5rem;">${enM ? "Related Artifacts in the Collection" : "Hiện vật Liên quan trong Bộ sưu tập"}</h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.55rem;">
                  ${related
                    .map(
                      (r) => `<button type="button" class="btn btn-secondary btn-sm" data-action="open-artifact" data-id="${r.id}">${escapeHtml(enM ? (r.nameEn || r.nameVi) : r.nameVi)} (${r.nameZh})</button>`
                    )
                    .join("")}
                </div>
              </div>`
            : ""}
        </div>
      </div>
    `;
  }

  function renderLightboxModal() {
    if (!ui.lightboxOpen || !ui.activeArtifactId) return "";
    const art = Museum.artifacts.find((a) => a.id === ui.activeArtifactId);
    if (!art) return "";
    const enM = isEnglishUi();
    const artTitle = enM ? (art.nameEn || art.nameVi) : art.nameVi;
    return `
      <div class="lightbox-backdrop" data-action="close-lightbox" role="dialog" aria-modal="true" aria-label="${enM ? "Zoom artifact" : "Phóng to hiện vật"} ${escapeHtml(artTitle)}" style="background:#0F1012;">
        <div class="lightbox-stage" onclick="event.stopPropagation()" style="max-width:1120px;width:95%;padding:1.25rem;background:#1A1B1E;color:#F2EFE9;border-radius:0px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:0.9rem;flex-wrap:wrap;">
            <div>
              <strong style="font-family:var(--font-editorial);font-size:1.35rem;color:#F2EFE9;">${escapeHtml(artTitle)}</strong>
              <span class="hanzi" style="margin-left:0.5rem;color:#FCD34D;">${art.nameZh}</span>
              <div style="font-size:0.82rem;color:#B8B2A6;">${escapeHtml(enVal(art, "collection"))} • ${escapeHtml(enVal(art, "dimensions"))}</div>
            </div>
            <button type="button" class="lightbox-tool-btn lightbox-tool-btn-primary" data-action="close-lightbox">${ICONS.close} ${enM ? "Close Zoom" : "Đóng phóng to"}</button>
          </div>
          ${Visuals.renderArtifactVisualHTML(art, true)}
          <div style="margin-top:0.85rem;">
            ${renderArtworkViewerMeta({
              title: `${artTitle} (${art.nameZh})`,
              dimensions: enVal(art, "dimensions") || "",
              material: enVal(art, "material") || "",
              museum: enVal(art, "collection") || "",
              credit: enVal(art, "attribution") || ""
            })}
          </div>
        </div>
      </div>
    `;
  }


  // ==========================================================================
  // MASTERPIECES OF CHINESE TRADITIONAL PAINTING (中国国画经典 • 数字艺术博物馆)
  // Curated Exhibition of 54 Monumental Masterpieces across 7 Dynastic Eras & 9 Genres
  // ==========================================================================

  function getFilteredPaintings() {
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const q = normalizeText(ui.paintingsQuery || "");
    const era = ui.paintingsEraFilter || "all";
    const genre = ui.paintingsGenreFilter || "all";
    const museum = ui.paintingsMuseumFilter || "all";
    const attr = ui.paintingsAttributionFilter || "all";

    return list.filter((p) => {
      if (era !== "all" && p.eraId !== era) return false;
      if (genre !== "all" && !(p.genres || [p.genreId]).includes(genre)) return false;
      if (museum !== "all" && !p.museum.includes(museum)) return false;
      if (attr !== "all" && !p.attribution.includes(attr)) return false;

      if (!q) return true;
      const matchFields = [
        p.titleVi,
        p.titleZh,
        p.pinyin,
        p.titleEn,
        p.artist.nameVi,
        p.artist.nameZh,
        p.artist.pinyin,
        p.material,
        p.museum,
        p.genreLabel,
        p.attribution,
        p.analysis.historicalBackground,
        p.analysis.brushwork,
        p.analysis.philosophicalMeaning
      ];
      return matchFields.some((f) => f && normalizeText(f).includes(q));
    }).sort((a, b) => {
      if (ui.paintingsSort === "title") return a.titleVi.localeCompare(b.titleVi, "vi");
      if (ui.paintingsSort === "artist") return a.artist.nameVi.localeCompare(b.artist.nameVi, "vi");
      // Default chronological by index in master dataset
      return list.indexOf(a) - list.indexOf(b);
    });
  }

  function renderPaintingsGridContent() {
    const enM = isEnglishUi();
    const filtered = getFilteredPaintings();
    if (!filtered.length) {
      return `
        <div style="grid-column:1/-1;">
          ${renderSmartEmptyState({
            query: ui.paintingsQuery,
            resetAction: "clear-paintings-filters",
            resetLabel: enM ? `Clear filters and view all ${PaintingsList.length} paintings` : `Xóa bộ lọc và xem đủ ${PaintingsList.length} kiệt tác`,
            scopeLabel: enM ? `${PaintingsList.length} Masterpieces of Chinese Painting` : `Kho ${PaintingsList.length} kiệt tác Quốc họa`,
            targetField: "paintings",
            suggestions: ["Lạc Thần", "Thanh Minh Thượng Hà Đồ", "Thiên Lý Giang Sơn Đồ", "Khê Sơn Hành Lữ Đồ", "Phú Xuân Sơn Cư Đồ"]
          })}
        </div>
      `;
    }

    const filterSig = [ui.paintingsQuery, ui.paintingsEraFilter, ui.paintingsGenreFilter, ui.paintingsMuseumFilter, ui.paintingsAttributionFilter, ui.paintingsSort].join("|");
    const Pager = window.CCE_V10_PAGINATOR;
    const pPaged = Pager
      ? Pager.paginate(filtered, "paintings", { filterSig, desktopPerPage: 12, mobilePerPage: 8 })
      : { slice: filtered, renderControls: () => "" };
    const visiblePaintings = pPaged.slice;
    const pagerHtml = `<div style="grid-column:1/-1;">${pPaged.renderControls(enM)}</div>`;

    if (ui.paintingsViewMode === "list") {
      return `
        <div style="grid-column:1/-1;display:flex;flex-direction:column;gap:0.75rem;">
          ${visiblePaintings.map((p) => {
            const fav = Store.isBookmarked("painting", p.id);
            const isScroll = isHandscrollArtwork(p);
            const pTitleMain = enM ? (p.titleEn || p.titleVi) : p.titleVi;
            const pDynasty = p.dynasty ? (enM ? (p.dynasty.nameEn || p.dynasty.nameVi) : p.dynasty.nameVi) : "";
            const pGenre = enVal(p, "genreLabel");
            const pMuseum = enVal(p, "museum").split("•")[0].trim();
            const pArtist = enM ? (p.artist.nameEn || p.artist.nameVi) : p.artist.nameVi;
            return `
              <div class="card" style="display:flex;gap:1.25rem;align-items:center;padding:1rem;flex-wrap:wrap;">
                <div style="width:168px;aspect-ratio:4/3;border-radius:var(--radius-md);overflow:hidden;background:${isScroll ? "#1B1917" : "var(--bg-surface)"};border:1px solid var(--hairline);padding:${isScroll ? "0" : "0.35rem"};display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;" data-action="open-painting-detail" data-id="${p.id}">
                  <img decoding="async"  src="${p.image}" alt="${escapeHtml(pTitleMain)}" style="width:100%;height:100%;object-fit:${isScroll ? "cover" : "contain"};object-position:${isScroll ? "28% center" : "center"};" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
                </div>
                <div style="flex:1;min-width:240px;">
                  <div class="ed-meta-line" style="margin-bottom:0.25rem;">
                    <span>${escapeHtml(pDynasty)} · ${escapeHtml(pGenre)} · ${escapeHtml(pMuseum)}</span>
                    ${isScroll ? ` · <span style="font-style:italic;color:var(--accent-cinnabar);">${enM ? "Horizontal Handscroll" : "Trường quyển ngang"}</span>` : ""}
                  </div>
                  <strong style="font-family:var(--font-editorial);font-size:1.05rem;display:block;">${escapeHtml(pTitleMain)} · ${escapeHtml(enM ? p.titleVi : p.titleEn)}</strong>
                  <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:0.25rem;">
                    <strong>${escapeHtml(pArtist)} (${p.artist.nameZh})</strong> · ${escapeHtml(enVal(p, "creationDate"))} · ${escapeHtml(enVal(p, "material"))} · ${escapeHtml(p.dimensions)}
                  </div>
                </div>
                <div style="display:flex;gap:0.4rem;align-items:center;">
                  <button type="button" class="btn btn-primary btn-sm" data-action="open-painting-detail" data-id="${p.id}">${enM ? "Study" : "Khảo cứu"}</button>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}">${ICONS.zoom} ${enM ? "Zoom" : "Phóng to"}</button>
                  <button type="button" class="btn ${fav ? "btn-jade" : "btn-ghost"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(pTitleMain)}" title="${enM ? "Save masterpiece" : "Lưu kiệt tác"}">
                    ${ICONS.bookmark}
                  </button>
                </div>
              </div>
            `;
          }).join("")}
        </div>
        ${pagerHtml}
      `;
    }

    return visiblePaintings.map((p) => {
      const fav = Store.isBookmarked("painting", p.id);
      const isScroll = isHandscrollArtwork(p);
      const pTitleMain = enM ? (p.titleEn || p.titleVi) : p.titleVi;
      const pTitleSub = enM ? p.titleVi : p.titleEn;
      const pDynasty = p.dynasty ? (enM ? (p.dynasty.nameEn || p.dynasty.nameVi) : p.dynasty.nameVi) : "";
      const pGenre = enVal(p, "genreLabel");
      const pMuseum = enVal(p, "museum").split("•")[0].trim();
      const pArtist = enM ? (p.artist.nameEn || p.artist.nameVi) : p.artist.nameVi;
      const pAttr = enVal(p, "attribution").split("—")[0].trim();
      const pQuoteTxt = enM ? (p.featuredQuote.en || p.featuredQuote.vi) : p.featuredQuote.vi;
      const pQuoteAuth = enM ? (p.featuredQuote.authorEn || p.featuredQuote.author) : p.featuredQuote.author;
      return `
        <article class="painting-card ${isScroll ? "is-handscroll-card" : ""} fade-in-up" data-painting-id="${p.id}">
          <div class="painting-card-thumb-wrap ${isScroll ? "is-handscroll" : ""}" data-action="open-painting-detail" data-id="${p.id}" title="${enM ? "Click for 9-dimension curatorial analysis" : "Nhấn để xem phân tích học thuật 9 chiều kích"}">
            <img decoding="async"  src="${p.image}" alt="${escapeHtml(pTitleMain)} - ${p.titleZh}" loading="lazy" onload="var r=this.naturalWidth/Math.max(1,this.naturalHeight);if(r>=2.2){this.parentElement&&this.parentElement.classList.add('is-handscroll');this.closest('.painting-card')&&this.closest('.painting-card').classList.add('is-handscroll-card');}else if(r<=0.64){this.parentElement&&this.parentElement.classList.add('is-tall-scroll');}" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
          </div>

          <div class="painting-card-body">
            <div class="ed-meta-line">${escapeHtml(pDynasty)} · ${escapeHtml(pGenre)} · ${escapeHtml(pMuseum)}</div>
            <div class="painting-card-title-zh">${p.titleZh} <span class="pinyin" style="font-size:0.82rem;font-weight:normal;">(${p.pinyin})</span></div>
            <h3 class="painting-card-title-vi">${escapeHtml(pTitleMain)}</h3>
            <div class="painting-card-title-en">${escapeHtml(pTitleSub)}</div>
            ${isScroll ? `<span class="handscroll-caption-line">${enM ? "Horizontal Handscroll · Click to unroll full scroll →" : "Trường quyển ngang · Nhấn để cuộn xem toàn bức →"}</span>` : ""}

            <div class="painting-card-meta">
              <div><strong>${enM ? "Artist:" : "Họa sĩ:"}</strong> ${escapeHtml(pArtist)} <span class="hanzi">(${p.artist.nameZh})</span></div>
              <div><strong>${enM ? "Date:" : "Niên đại:"}</strong> ${escapeHtml(enVal(p, "creationDate"))} · ${escapeHtml(pAttr)}</div>
            </div>

            <div class="painting-card-quote">
              “${escapeHtml(pQuoteTxt.slice(0, 115))}...”
              <div style="text-align:right;font-size:0.72rem;color:var(--text-muted);margin-top:0.2rem;">— ${escapeHtml(pQuoteAuth)}</div>
            </div>

            <div class="painting-card-actions">
              <button type="button" class="btn btn-primary btn-sm" style="flex:1;" data-action="open-painting-detail" data-id="${p.id}">
                ${enM ? "9-Dim Study" : "Khảo cứu chi tiết"}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}" title="${enM ? "High-res zoom viewer" : "Phóng to tranh độ phân giải cao"}">
                ${ICONS.zoom}
              </button>
              <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(pTitleMain)}" title="${enM ? "Save to collection" : "Lưu vào bộ sưu tập cá nhân"}">
                ${ICONS.bookmark}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("") + pagerHtml;
  }

  function renderPaintingsPage() {
    const enM = isEnglishUi();
    const data = window.CCE_PAINTINGS || {};
    const eras = data.eras || [];
    const genres = data.genres || [];
    const comparisons = data.comparisons || [];
    const museums = data.museums || [];
    const filtered = getFilteredPaintings();

    const paintingsGalleryHtml = () => `
          <div id="paintings-collection-anchor">
            <div style="margin-bottom:1.1rem;">
              <div style="font-size:0.84rem;font-weight:600;color:var(--text-muted);margin-bottom:0.5rem;">
                ${enM ? "9 CLASSICAL PAINTING GENRES (九大绘画流派):" : "PHÂN LOẠI 9 DÒNG HỘI HỌA TRUYỀN THỐNG (九大绘画流派):"}
              </div>
              <div class="paintings-genres-bar">
                <button type="button" class="filter-pill ${ui.paintingsGenreFilter === "all" ? "active" : ""}" data-action="filter-painting-genre" data-genre="all">
                  ${enM ? "All Genres (全部)" : "Tất cả dòng họa (全部)"}
                </button>
                ${genres.map((g) => `
                  <button type="button" class="filter-pill ${ui.paintingsGenreFilter === g.id ? "active" : ""}" data-action="filter-painting-genre" data-genre="${g.id}" title="${escapeHtml(enVal(g, "desc"))}">
                    ${escapeHtml(enVal(g, "nameVi"))} <span class="hanzi">(${g.nameZh})</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <div class="card" style="margin-bottom:1.5rem;padding:1.1rem 1.25rem;">
              <div class="grid grid-2" style="gap:1rem;align-items:end;margin-bottom:0.85rem;">
                <div>
                  <label for="paintings-search-input" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.35rem;">
                    ${enM ? "Search Title / Artist / Museum / Genre" : "Tra cứu kiệt tác, họa sĩ, bảo tàng hoặc thể loại"}
                  </label>
                  <input type="text" id="paintings-search-input" class="form-input" data-action="paintings-search-input" value="${escapeHtml(ui.paintingsQuery)}" placeholder="${enM ? "e.g., Fan Kuan, Fuchun, Wang Ximeng, Palace Museum..." : "vd: Lạc Thần, Khê Sơn, Tảo Xuân, Phú Xuân, Cố Cung..."}" autocomplete="off" />
                </div>
                <div style="display:flex;gap:0.6rem;flex-wrap:wrap;align-items:end;">
                  <div style="flex:1;min-width:140px;">
                    <label for="paintings-museum-select" style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:0.35rem;">${enM ? "Holding Institution" : "Bảo tàng lưu giữ"}</label>
                    <select id="paintings-museum-select" class="form-select" data-action="filter-painting-museum" style="font-size:0.82rem;">
                      <option value="all" ${ui.paintingsMuseumFilter === "all" ? "selected" : ""}>${enM ? "All Museums and Collections" : "Tất cả bảo tàng"}</option>
                      <option value="故宫博物院" ${ui.paintingsMuseumFilter === "故宫博物院" ? "selected" : ""}>${enM ? "Palace Museum, Beijing" : "Cố Cung Bắc Kinh"}</option>
                      <option value="台北故宫" ${ui.paintingsMuseumFilter === "台北故宫" ? "selected" : ""}>${enM ? "National Palace Museum, Taipei" : "Cố Cung Đài Bắc"}</option>
                      <option value="上海博物馆" ${ui.paintingsMuseumFilter === "上海博物馆" ? "selected" : ""}>${enM ? "Shanghai Museum" : "Bảo tàng Thượng Hải"}</option>
                      <option value="辽宁省博物馆" ${ui.paintingsMuseumFilter === "辽宁省博物馆" ? "selected" : ""}>${enM ? "Liaoning Provincial Museum" : "Bảo tàng Liêu Ninh"}</option>
                      <option value="南京博物院" ${ui.paintingsMuseumFilter === "南京博物院" ? "selected" : ""}>${enM ? "Nanjing Museum" : "Bảo tàng Nam Kinh"}</option>
                      <option value="中国美术馆" ${ui.paintingsMuseumFilter === "中国美术馆" ? "selected" : ""}>${enM ? "National Art Museum of China" : "Mỹ thuật Trung Quốc"}</option>
                      <option value="北京人民大会堂" ${ui.paintingsMuseumFilter === "北京人民大会堂" ? "selected" : ""}>${enM ? "Great Hall of the People, Beijing" : "Đại lễ đường Nhân dân Bắc Kinh"}</option>
                      <option value="Boston" ${ui.paintingsMuseumFilter === "Boston" ? "selected" : ""}>${enM ? "Museum of Fine Arts, Boston" : "MFA Boston"}</option>
                      <option value="The Met" ${ui.paintingsMuseumFilter === "The Met" ? "selected" : ""}>The Met (New York)</option>
                      <option value="东京国立" ${ui.paintingsMuseumFilter === "东京国立" ? "selected" : ""}>${enM ? "Tokyo National Museum" : "Quốc lập Tokyo"}</option>
                    </select>
                  </div>
                  <div style="flex:1;min-width:140px;">
                    <label for="paintings-attr-select" style="font-size:0.82rem;font-weight:600;display:block;margin-bottom:0.35rem;">${enM ? "Attribution Status" : "Tình trạng quy thuộc"}</label>
                    <select id="paintings-attr-select" class="form-select" data-action="filter-painting-attr" style="font-size:0.82rem;">
                      <option value="all" ${ui.paintingsAttributionFilter === "all" ? "selected" : ""}>${enM ? "All Attribution Grades" : "Tất cả tình trạng"}</option>
                      <option value="馆藏" ${ui.paintingsAttributionFilter === "馆藏" ? "selected" : ""}>${enM ? "Public Museum Collection (馆藏)" : "Hiện vật bảo tàng công lập (馆藏)"}</option>
                      <option value="宋摹本" ${ui.paintingsAttributionFilter === "宋摹本" ? "selected" : ""}>${enM ? "Song-Period Tracing Copy (宋摹本)" : "Tống triều mô bản (宋摹本)"}</option>
                      <option value="唐摹本" ${ui.paintingsAttributionFilter === "唐摹本" ? "selected" : ""}>${enM ? "Tang-Period Tracing Copy (唐摹本)" : "Đường triều lâm bản (唐摹本)"}</option>
                      <option value="传" ${ui.paintingsAttributionFilter === "传" ? "selected" : ""}>${enM ? "Attributed / Transmitted Work" : "Truyền thế bản (传世本)"}</option>
                      <option value="存疑" ${ui.paintingsAttributionFilter === "存疑" ? "selected" : ""}>${enM ? "Contested Attribution (存疑)" : "Còn nghi vấn quy thuộc (存疑)"}</option>
                      <option value="国家殿堂" ${ui.paintingsAttributionFilter === "国家殿堂" ? "selected" : ""}>${enM ? "State Institutional Collection" : "Sưu tập thiết chế nhà nước"}</option>
                    </select>
                  </div>
                  <div style="display:flex;gap:0.3rem;">
                    <button type="button" class="btn ${ui.paintingsViewMode === "grid" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-paintings-view" data-mode="grid" style="display:inline-flex;align-items:center;gap:0.35rem;"><span>⊞</span><span>${enM ? "Grid" : "Lưới"}</span></button>
                    <button type="button" class="btn ${ui.paintingsViewMode === "list" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-paintings-view" data-mode="list">${ICONS.list} ${enM ? "List" : "Danh sách"}</button>
                  </div>
                </div>
              </div>

              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;font-size:0.84rem;color:var(--text-muted);border-top:1px solid var(--border-subtle);padding-top:0.6rem;">
                <div>
                  ${enM ? `Matching <strong id="paintings-count-slot">${filtered.length}</strong> / ${PaintingsList.length} masterworks.` : `Khớp lọc <strong id="paintings-count-slot">${filtered.length}</strong> / ${PaintingsList.length} tác phẩm tiêu biểu.`}
                  ${(ui.paintingsEraFilter !== "all" || ui.paintingsGenreFilter !== "all" || ui.paintingsMuseumFilter !== "all" || ui.paintingsAttributionFilter !== "all" || ui.paintingsQuery)
                    ? `<button type="button" class="btn btn-ghost btn-sm" style="color:var(--imperial-red);margin-left:0.5rem;" data-action="clear-paintings-filters">${ICONS.close} ${enM ? "Clear Filters" : "Xóa bộ lọc"}</button>`
                    : ""}
                </div>
                <div style="display:flex;align-items:center;gap:0.4rem;">
                  <span style="white-space:nowrap;">${enM ? "Sort:" : "Sắp xếp:"}</span>
                  <select class="form-select" style="font-size:0.79rem;padding:0.2rem 0.5rem;" data-action="set-paintings-sort">
                    <option value="chronological" ${ui.paintingsSort === "chronological" ? "selected" : ""}>${enM ? "Historical Chronology" : "Niên đại lịch sử"}</option>
                    <option value="title" ${ui.paintingsSort === "title" ? "selected" : ""}>${enM ? "Artwork Title (A–Z)" : "Tên tác phẩm (A–Z)"}</option>
                    <option value="artist" ${ui.paintingsSort === "artist" ? "selected" : ""}>${enM ? "Artist (A–Z)" : "Họa sĩ (A–Z)"}</option>
                  </select>
                </div>
              </div>
            </div>

            <div class="paintings-grid" id="paintings-grid-slot">
              ${renderPaintingsGridContent()}
            </div>
          </div>
    `;

    const paintingsHandscrollHtml = () => (window.CCE_V9_HANDSCROLL
      ? window.CCE_V9_HANDSCROLL.renderSection(enM)
      : "");

    const paintingsPigmentsHtml = () => `
          ${window.CCE_V9_DISCOVERY ? window.CCE_V9_DISCOVERY.renderSection("paintings", enM) : ""}
          <div class="timeline-strip-container">
            <div class="timeline-strip-header">
              <div>
                <strong style="font-family:var(--font-editorial);font-size:1.15rem;">${enM ? "Chronological Painting Evolution (7 Eras)" : "Tiến trình lịch sử hội họa qua 7 kỷ nguyên"}</strong>
                <span style="font-size:0.8rem;color:var(--text-muted);margin-left:0.5rem;">${enM ? "Select an era to filter masterpieces" : "Nhấn vào từng thời kỳ để lọc kiệt tác tương ứng"}</span>
              </div>
              <button type="button" class="btn btn-ghost btn-sm ${ui.paintingsEraFilter === "all" ? "active" : ""}" data-action="filter-painting-era" data-era="all">
                ${enM ? "All Eras" : "Xem tất cả thời kỳ"}
              </button>
            </div>
            <div class="timeline-ribbon">
              ${eras.map((era) => `
                <button type="button" class="timeline-era-btn ${ui.paintingsEraFilter === era.id ? "active" : ""}" data-action="filter-painting-era" data-era="${era.id}">
                  <span class="era-zh">${era.nameZh}</span>
                  <span class="era-vi">${escapeHtml(enVal(era, "nameVi"))}</span>
                  <span class="era-span">${escapeHtml(enVal(era, "timeSpan"))}</span>
                </button>
              `).join("")}
            </div>
          </div>
    `;

    const paintingsCompareHtml = () => `
          <div class="card" style="margin-bottom:1.5rem;padding:1.5rem;background:var(--bg-elevated);border:1px solid var(--border-gold);">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.25rem;flex-wrap:wrap;gap:0.75rem;">
              <div>
                <div class="editorial-kicker">${enM ? "Comparative Aesthetics • 对照分析" : "Mỹ học đối chiếu • 对照分析"}</div>
                <h2 style="font-family:var(--font-editorial);font-size:1.5rem;margin:0.2rem 0;">${enM ? "5 Curated Pairwise Masterpiece Comparisons" : "5 chuyên đề so sánh kiệt tác kinh điển"}</h2>
                <p style="font-size:0.88rem;color:var(--text-secondary);margin:0;">
                  ${enM ? "Place two canonical scrolls side by side to trace evolutions in brushwork, mineral color, and Song–Yuan–Ming spatial voids." : "Đặt song song 2 kiệt tác để đối chiếu bút pháp, sắc độ khoáng vật và bố cục không gian."}
                </p>
              </div>
              <button type="button" class="btn btn-gold btn-sm" data-action="open-paintings-compare">
                ${enM ? "Open Custom Comparison Matrix ⇋" : "Mở ma trận đối chiếu tùy chọn ⇋"}
              </button>
            </div>
            <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(280px, 1fr));gap:1rem;">
              ${comparisons.map((cmp) => `
                <div class="flashcard-layer" style="display:flex;flex-direction:column;justify-content:space-between;">
                  <div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                      <span class="badge badge-gold" style="font-size:0.7rem;">${cmp.titleZh}</span>
                    </div>
                    <strong style="font-size:0.95rem;display:block;margin-bottom:0.45rem;color:var(--text-primary);">${escapeHtml(enVal(cmp, "titleVi"))}</strong>
                    <p style="font-size:0.82rem;color:var(--text-secondary);line-height:1.5;margin-bottom:0.75rem;">${escapeHtml(enVal(cmp, "perspective"))}</p>
                  </div>
                  <button type="button" class="btn btn-secondary btn-sm" data-action="launch-comparison" data-left="${cmp.leftId}" data-right="${cmp.rightId}">
                    ${enM ? "Compare Both Works →" : "So sánh 2 bức này →"}
                  </button>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="grid grid-2" style="gap:1.5rem;">
            <div class="card" style="padding:1.35rem;">
              <div class="editorial-kicker">${enM ? "Collections and Institutions • 馆藏与机构归属" : "Nguồn gốc và thiết chế • 馆藏与机构归属"}</div>
              <h3 style="font-family:var(--font-editorial);font-size:1.25rem;margin-bottom:0.75rem;">${enM ? "10 Steward Museums and Institutional Archives" : "10 bảo tàng và thiết chế lưu giữ tác phẩm"}</h3>
              <div style="display:flex;flex-direction:column;gap:0.6rem;max-height:280px;overflow-y:auto;">
                ${museums.map((m) => `
                  <div style="border-bottom:1px solid var(--border-subtle);padding-bottom:0.45rem;">
                    <div style="display:flex;justify-content:space-between;align-items:baseline;">
                      <strong style="font-size:0.86rem;color:var(--imperial-red);">${m.nameZh}</strong>
                      <span style="font-size:0.75rem;color:var(--text-muted);">${escapeHtml(enVal(m, "city"))}</span>
                    </div>
                    <div style="font-size:0.82rem;font-weight:600;">${escapeHtml(enVal(m, "nameVi"))}</div>
                    <div style="font-size:0.77rem;color:var(--text-secondary);">${escapeHtml(enVal(m, "description"))}</div>
                  </div>
                `).join("")}
              </div>
            </div>

            <div class="card" style="padding:1.35rem;">
              <div class="editorial-kicker">${enM ? "Attribution Rigor • 审定标准" : "Giám định học thuật • 审定标准"}</div>
              <h3 style="font-family:var(--font-editorial);font-size:1.25rem;margin-bottom:0.75rem;">${enM ? "Connoisseurship and Provenance Classification" : "Quy tắc phân định tình trạng quy thuộc"}</h3>
              <p style="font-size:0.84rem;color:var(--text-secondary);line-height:1.6;margin-bottom:0.75rem;">
                ${enM
                  ? "Strictly aligned with international museum connoisseurship standards — never mislabeling later tracing copies as original autographs across 5 grades:"
                  : "Tuân thủ nguyên tắc giám định bảo tàng quốc tế, phân định rành mạch bản gốc, bản mô phỏng thời Đường–Tống và bản truyền thế:"}
              </p>
              <div style="display:flex;flex-direction:column;gap:0.45rem;">
                ${(data.attributionGuide || []).map((ag) => `
                  <div style="padding:0.45rem 0.6rem;background:var(--bg-elevated);border-radius:var(--radius-sm);font-size:0.8rem;">
                    <strong>${escapeHtml(enVal(ag, "type"))}</strong> (${ag.labelZh}):
                    <span style="color:var(--text-secondary);">${escapeHtml(enVal(ag, "desc"))}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          </div>
    `;

    const paintingsSubpages = [
      { id: "gallery", labelVi: "Bộ sưu tập kiệt tác", labelEn: "Masterpiece Gallery", count: PaintingsList.length, render: paintingsGalleryHtml },
      { id: "handscroll", labelVi: "Trường quyển ngắm chậm", labelEn: "Handscroll Stage", render: paintingsHandscrollHtml },
      { id: "pigments", labelVi: "Sắc tố khoáng và 7 kỷ nguyên", labelEn: "Pigments & 7 Eras", count: eras.length || 7, render: paintingsPigmentsHtml },
      { id: "compare", labelVi: "Đối chiếu và quy thuộc", labelEn: "Compare & Provenance", count: museums.length || 10, render: paintingsCompareHtml }
    ];

    return `
      <!-- EXHIBITION HERO SECTION -->
      <section class="paintings-hero">
        <div class="container">
          <div class="paintings-hero-content">
            <div class="paintings-kicker">
              <span>${enM ? "Curatorial Exhibition · 数字艺术博物馆" : "Triển lãm đặc sắc · 数字艺术博物馆"}</span>
            </div>
            <h1 class="paintings-title-main">
              ${enM ? "Masterpieces of Classical Chinese Painting" : "Kiệt tác Quốc họa Trung Hoa"}
              <span class="paintings-title-zh">中国国画经典 • 千年流变</span>
            </h1>
            <p class="paintings-lead">
              ${enM
                ? `Explore ${PaintingsList.length} canonical scrolls from Wei–Jin and Sui–Tang through Song, Yuan, Ming, Qing, and the modern era with curatorial analysis across global museum collections.`
                : `Khảo cứu ${PaintingsList.length} kiệt tác hội họa từ Ngụy – Tấn, Tùy – Đường qua đỉnh cao Tống – Nguyên – Minh – Thanh đến cận hiện đại với phân tích bút pháp, thủy mặc và tư liệu bảo tàng.`}
            </p>
            <div style="display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center;">
              <button type="button" class="btn btn-primary" data-action="scroll-to-paintings">
                ${ICONS.compass} ${enM ? `Explore ${PaintingsList.length} Masterpieces` : `Khám phá ${PaintingsList.length} kiệt tác`}
              </button>
              <button type="button" class="btn btn-gold" data-action="open-paintings-compare">
                ${enM ? "Side-by-Side Comparison" : "So sánh đối chiếu"}
              </button>
              <button type="button" class="btn btn-secondary" data-action="nav" data-page="museum">
                ${ICONS.museum} ${enM ? "Digital Heritage Museum" : "Bảo tàng số di sản"}
              </button>
            </div>

            <div class="paintings-hero-stats">
              <div class="paintings-stat-card">
                <strong>${PaintingsList.length}</strong>
                <span>${enM ? "Curated Masterpieces" : "Tác phẩm tuyển chọn"}</span>
              </div>
              <div class="paintings-stat-card">
                <strong>${eras.length || 7}</strong>
                <span>${enM ? "Historical Eras" : "Kỷ nguyên lịch sử"}</span>
              </div>
              <div class="paintings-stat-card">
                <strong>${genres.length || 9}</strong>
                <span>${enM ? "Painting Genres" : "Dòng hội họa truyền thống"}</span>
              </div>
              <div class="paintings-stat-card">
                <strong>${museums.length || 10}</strong>
                <span>${enM ? "Museum Institutions" : "Bảo tàng và thiết chế"}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("paintings", paintingsSubpages, { enM }) : `<section class="page-section"><div class="container">${paintingsGalleryHtml()}</div></section>`}
    `;
  }


  // ==========================================================================
  // Painting Modals: Detail Modal, Compare Modal, and Fullscreen Deep-Zoom
  // ==========================================================================

  function renderPaintingDetailModal() {
    if (!ui.activePaintingId) return "";
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const p = list.find((item) => item.id === ui.activePaintingId);
    if (!p) return "";

    const enM = isEnglishUi();
    const fav = Store.isBookmarked("painting", p.id);
    const tab = ui.paintingDetailTab || "historical";
    const pTitleMain = enM ? (p.titleEn || p.titleVi) : p.titleVi;
    const pTitleSub = enM ? "" : p.titleEn;
    const pDynasty = p.dynasty ? (enM ? (p.dynasty.nameEn || p.dynasty.nameVi) : p.dynasty.nameVi) : "";
    const pGenre = enVal(p, "genreLabel");
    const pAttr = enVal(p, "attribution");
    const pMuseum = enVal(p, "museum");
    const pMaterial = enVal(p, "material");
    const pArtistName = enM ? (p.artist.nameEn || p.artist.nameVi) : p.artist.nameVi;
    const pArtistSchool = enM ? (p.artist.schoolEn || p.artist.school) : p.artist.school;
    const pArtistBio = enM ? (p.artist.bioEn || p.artist.bio) : p.artist.bio;
    const an = (enM && p.analysisEn) ? p.analysisEn : (p.analysis || {});
    const sr = (enM && p.scholarlyResearchEn) ? p.scholarlyResearchEn : (p.scholarlyResearch || {});

    return `
      <div class="modal-backdrop open" data-action="close-painting-backdrop" style="z-index:220;">
        <div class="painting-detail-modal-stage" role="dialog" aria-modal="true" aria-label="${escapeHtml(pTitleMain)}">
          <!-- TOP HEADER BAR -->
          <div class="painting-detail-header">
            <div>
              <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;margin-bottom:0.25rem;">
                <span class="badge badge-gold">${escapeHtml(pDynasty)}</span>
                <span class="badge badge-red">${escapeHtml(pGenre)}</span>
                <span class="painting-attribution-tag">${escapeHtml(pAttr.split("—")[0].trim())}</span>
              </div>
              <h2 style="font-family:var(--font-editorial);font-size:1.75rem;margin:0;line-height:1.2;">
                ${escapeHtml(pTitleMain)}
                <span class="hanzi" style="color:var(--imperial-red);margin-left:0.5rem;font-size:1.45rem;">${p.titleZh}</span>
                <span class="pinyin" style="font-size:0.9rem;font-weight:normal;color:var(--text-muted);">(${p.pinyin})</span>
                ${renderSpeakBtn(p.titleZh, enM ? "Listen to Chinese title" : "Nghe phát âm tên tác phẩm")}
              </h2>
              <div style="font-size:0.84rem;color:var(--text-muted);">${pTitleSub ? `${escapeHtml(pTitleSub)} • ` : ""}${escapeHtml(pMuseum)}</div>
            </div>

            <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-action="open-painting-zen" data-id="${p.id}" title="${enM ? "Distraction-free Zen viewing mode" : "Chế độ Chiêm ngưỡng Thuần túy không xao nhãng"}">
                ${enM ? "Zen Mode" : "Chế độ Thiền (Zen Mode)"}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-painting-zoom" data-id="${p.id}" title="${enM ? "Full-screen deep zoom" : "Phóng to tranh toàn màn hình"}">
                ${enM ? "Zoom View" : "Phóng to Ảnh"}
              </button>
              <button type="button" class="btn btn-gold btn-sm" data-action="compare-with-this" data-id="${p.id}" title="${enM ? "Compare side-by-side" : "Đặt bức này vào bàn so sánh đối chiếu"}">
                ${enM ? "Compare" : "Đối chiếu"}
              </button>
              <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="painting" data-id="${p.id}" data-title="${escapeHtml(pTitleMain)}">
                ${fav ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save" : "Lưu tranh")}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="print-dossier">
                ${ICONS.fileText} ${enM ? "Print A4" : "In Hồ sơ A4"}
              </button>
              ${(() => {
                const matchedArt = Museum.artifacts.find((a) => a.id === p.id || a.nameZh === p.titleZh);
                return matchedArt ? `<button type="button" class="btn btn-secondary btn-sm" data-action="switch-painting-to-artifact" data-id="${matchedArt.id}">${enM ? "Museum Relic" : "Bảo tàng Số"}</button>` : "";
              })()}
              <button type="button" class="modal-close-btn" data-action="close-painting-detail" aria-label="${enM ? "Close painting dossier" : "Đóng hồ sơ kiệt tác"}">${ICONS.close}</button>
            </div>
          </div>

          <!-- MODAL BODY: 2 COLUMNS -->
          <div class="painting-detail-body">
            <!-- LEFT COLUMN: ARTWORK VIEWER, INTERACTIVE HOTSPOTS & TECHNICAL METADATA -->
            <div>
              ${renderHotspotInspector(p, p.image, "painting")}

              <!-- ATTRIBUTION CALLOUT BOX -->
              <div class="card" style="margin-top:1rem;padding:0.9rem 1rem;background:var(--bg-accent-soft);border:1px solid var(--border-red);">
                <div style="font-size:0.8rem;font-weight:700;color:var(--cinnabar-red);margin-bottom:0.25rem;">
                  ${enM ? "ATTRIBUTION &amp; MUSEUM PROVENANCE GRADE:" : "TÌNH TRẠNG QUY THUỘC &amp; GIÁM ĐỊNH BẢO TÀNG:"}
                </div>
                <div style="font-size:0.84rem;color:var(--text-secondary);line-height:1.5;">
                  ${escapeHtml(pAttr)}
                </div>
              </div>

              ${p.visitorNote ? `
                <div class="card" style="margin-top:0.85rem;padding:0.95rem 1rem;border-left:4px solid var(--jade-green);background:var(--bg-jade-soft);">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                    <span style="font-size:0.75rem;font-weight:800;color:var(--jade-green);letter-spacing:0.05em;">${enM ? "4. CURATORIAL &amp; VISITOR NOTES" : "4. LƯU Ý THAM QUAN CHO ĐỘC GIẢ VIỆT"}</span>
                    <span class="badge ${p.visitorNote.isRestrictedRotation ? "badge-red" : "badge-jade"}">${escapeHtml(enM ? (p.visitorNote.rotationBadgeEn || p.visitorNote.rotationBadge || "") : (p.visitorNote.rotationBadge || ""))}</span>
                  </div>
                  <div style="font-size:0.82rem;color:var(--text-secondary);line-height:1.55;display:flex;flex-direction:column;gap:0.32rem;">
                    <div><strong>${enM ? "Holding Museum & Rotation:" : "Nơi lưu giữ &amp; Quy tắc mở cuộn:"}</strong> ${formatInlineMd(enM ? (p.visitorNote.rotationStatusEn || p.visitorNote.rotationStatus || "") : (p.visitorNote.rotationStatus || ""), true)}</div>
                    <div><strong>${enM ? "First Inspection Cue:" : "Quan sát đầu tiên:"}</strong> ${formatInlineMd(enM ? (p.visitorNote.whatToLookForFirstEn || p.visitorNote.whatToLookForFirst || "") : (p.visitorNote.whatToLookForFirst || ""), true)}</div>
                    <div><strong>${enM ? "Brushwork & Material Dissection:" : "Giải phẫu Bút pháp &amp; Chất liệu:"}</strong> ${formatInlineMd(enM ? (p.visitorNote.techniqueDissectionEn || p.visitorNote.techniqueDissection || "") : (p.visitorNote.techniqueDissection || ""), true)}</div>
                  </div>
                </div>` : ""}

              <!-- TECHNICAL SPECS TABLE -->
              <div class="card" style="margin-top:1rem;padding:1rem;">
                <h4 style="font-family:var(--font-editorial);font-size:1.1rem;margin-bottom:0.6rem;">${enM ? "Technical Specifications &amp; Provenance" : "Thông số &amp; Giám định Hiện vật"}</h4>
                <table style="width:100%;font-size:0.82rem;border-collapse:collapse;">
                  <tbody>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);width:38%;"><strong>${enM ? "Artist:" : "Họa sĩ:"}</strong></td>
                      <td style="padding:0.35rem 0;"><strong>${escapeHtml(pArtistName)}</strong> (${p.artist.nameZh} • ${p.artist.pinyin})</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "School / Lineage:" : "Trường phái:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(pArtistSchool)}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Dynasty / Era:" : "Triều đại / Thời kỳ:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(pDynasty)} (${p.dynasty.nameZh})</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Creation Date:" : "Niên đại sáng tác:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(enVal(p, "creationDate"))}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Genre:" : "Thể loại hội họa:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(pGenre)}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Medium & Technique:" : "Chất liệu &amp; Kỹ thuật:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(pMaterial)}</td>
                    </tr>
                    <tr style="border-bottom:1px solid var(--border-subtle);">
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Actual Dimensions:" : "Kích thước thực tế:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(enVal(p, "dimensions"))}</td>
                    </tr>
                    <tr>
                      <td style="padding:0.35rem 0;color:var(--text-muted);"><strong>${enM ? "Holding Museum:" : "Bảo tàng lưu giữ:"}</strong></td>
                      <td style="padding:0.35rem 0;">${escapeHtml(pMuseum)}</td>
                    </tr>
                  </tbody>
                </table>
                ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderRealScaleRuler(p, enM) : ""}
              </div>

              <!-- HISTORICAL CRITIQUE QUOTE CARD -->
              <div class="card" style="margin-top:1rem;padding:1rem;border-left:3px solid var(--imperial-red);">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;">
                  <span style="font-size:0.75rem;font-weight:700;color:var(--imperial-red);">${enM ? "CLASSICAL ART CRITICISM (历代画论典评):" : "LỜI PHÊ BÌNH CỔ ĐIỂN (历代画论典评):"}</span>
                  ${renderSpeakBtn(p.featuredQuote.zh, enM ? "Listen to classical Chinese art critique" : "Nghe đọc lời phê bình cổ điển")}
                </div>
                <div style="font-family:var(--font-hanzi-serif);font-size:0.95rem;color:var(--text-primary);margin-bottom:0.35rem;line-height:1.6;">
                  “${p.featuredQuote.zh}”
                </div>
                <div style="font-size:0.84rem;color:var(--text-secondary);font-style:italic;line-height:1.5;">
                  “${escapeHtml(enM ? (p.featuredQuote.en || p.featuredQuote.vi) : p.featuredQuote.vi)}”
                </div>
                <div style="text-align:right;font-size:0.75rem;color:var(--text-muted);margin-top:0.4rem;">
                  — ${escapeHtml(enM ? (p.featuredQuote.authorEn || p.featuredQuote.author) : p.featuredQuote.author)} • <em>${escapeHtml(enM ? (p.featuredQuote.sourceEn || p.featuredQuote.source) : p.featuredQuote.source)}</em>
                </div>
              </div>
            </div>

            <!-- RIGHT COLUMN: 9-DIMENSIONAL SCHOLARLY ANALYSIS TABS -->
            <div>
              <div class="analysis-tabstrip">
                <button type="button" class="analysis-tab-btn ${tab === "historical" ? "active" : ""}" data-action="set-painting-tab" data-tab="historical">
                  ${enM ? "1. History & Artist" : "1. Lịch sử &amp; Họa sĩ"}
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "aesthetics" ? "active" : ""}" data-action="set-painting-tab" data-tab="aesthetics">
                  ${enM ? "2. Composition & Brush" : "2. Bố cục &amp; Bút pháp"}
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "philosophy" ? "active" : ""}" data-action="set-painting-tab" data-tab="philosophy">
                  ${enM ? "3. Three Distances & Philosophy" : "3. Tam viễn &amp; Triết học"}
                </button>
                <button type="button" class="analysis-tab-btn ${tab === "scholarly" ? "active" : ""}" data-action="set-painting-tab" data-tab="scholarly">
                  ${enM ? "4. Connoisseurship & Cite" : "4. Giám định &amp; Trích dẫn"}
                </button>
              </div>

              <div class="analysis-panel-box">
                ${tab === "historical" ? `
                  ${(an.historicalBackground || "").trim() ? `<div class="analysis-item-row"><strong>${enM ? "1. Historical Background:" : "1. Historical Background — Bối cảnh Lịch sử:"}</strong><p style="margin:0;">${an.historicalBackground}</p></div>` : ""}
                  ${(pArtistBio || an.artistBiography || "").trim() ? `<div class="analysis-item-row"><strong>${enM ? "2. Artist Biography & Career:" : "2. Artist Biography — Tiểu sử &amp; Hành trạng Họa sĩ:"}</strong>${pArtistBio ? `<p style="margin:0 0 0.5rem;">${pArtistBio}</p>` : ""}${an.artistBiography ? `<p style="margin:0;">${an.artistBiography}</p>` : ""}</div>` : ""}
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>${enM ? "3. Provenance & Transmission:" : "3. Provenance History — Lịch sử Lưu truyền &amp; Sưu tập:"}</strong>
                    <p style="margin:0;">${enM ? `Examined and stamped with imperial collector seals across successive dynasties before entering the permanent archive at ${escapeHtml(pMuseum)}.` : `Bảo vật từng qua tay giám định và đóng ấn ngự lãm của các hoàng gia, hiện được bảo tồn nghiêm ngặt tại ${escapeHtml(pMuseum)}.`}</p>
                  </div>
                ` : tab === "aesthetics" ? `
                  <div class="analysis-item-row">
                    <strong>${enM ? "4. Artistic Composition:" : "4. Artistic Composition — Bố cục Mỹ học:"}</strong>
                    <p style="margin:0;">${an.artisticComposition || ""}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>${enM ? "5. Brushwork & Texture Strokes:" : "5. Brushwork — Kỹ thuật Cọ vẽ &amp; Bút pháp:"}</strong>
                    <p style="margin:0;">${an.brushwork || ""}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>${enM ? "6. Ink Tonality & Mineral Pigments:" : "6. Ink and Color — Kỹ thuật Dùng mực &amp; Màu sắc Khoáng chất:"}</strong>
                    <p style="margin:0;">${an.inkAndColor || ""}</p>
                  </div>
                ` : tab === "philosophy" ? `
                  <div class="analysis-item-row">
                    <strong>${enM ? "7. Spatial Perspective (San-yuan Three Distances):" : "7. Spatial Perspective — Không gian &amp; Phối cảnh (Tam viễn):"}</strong>
                    <p style="margin:0;">${an.spatialPerspective || ""}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>${enM ? "8. Cultural Symbolism:" : "8. Symbolism — Biểu tượng Văn hóa &amp; Ngụ ý:"}</strong>
                    <p style="margin:0;">${an.symbolism || ""}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>${enM ? "9. Daoist–Confucian–Chan Philosophical Meaning:" : "9. Philosophical Meaning — Ý nghĩa Triết học Đạo–Nho–Thiền:"}</strong>
                    <p style="margin:0;">${an.philosophicalMeaning || ""}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>${enM ? "10. Artistic Legacy & Influence:" : "10. Artistic Legacy — Di sản &amp; Ảnh hưởng Nghệ thuật:"}</strong>
                    <p style="margin:0;">${an.artisticLegacy || ""}</p>
                  </div>
                ` : `
                  <div class="analysis-item-row">
                    <strong>${enM ? "Scholarly Consensus:" : "Scholarly Consensus — Đồng thuận Giới Nghiên cứu Mỹ thuật:"}</strong>
                    <p style="margin:0;">${sr.scholarlyConsensus || ""}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>${enM ? "Debated Attribution & Dating Issues:" : "Debated Issues — Những Tranh luận Học thuật về Niên đại / Tác giả:"}</strong>
                    <p style="margin:0;">${sr.debatedIssues || ""}</p>
                  </div>
                  <div class="analysis-item-row">
                    <strong>${enM ? "Comparative Context:" : "Comparative Context — Đối chiếu với Tác phẩm Cùng Thời kỳ:"}</strong>
                    <p style="margin:0;">${sr.comparativeContext || ""}</p>
                  </div>
                  <div class="analysis-item-row" style="margin-bottom:0;">
                    <strong>${enM ? "Verified Academic Citations:" : "Academic Citations — Tài liệu Tham khảo &amp; Trích dẫn Học thuật:"}</strong>
                    <ul style="margin:0.4rem 0 0.75rem 1.25rem;padding:0;font-size:0.8rem;color:var(--text-secondary);">
                      ${(sr.academicCitations || p.scholarlyResearch.academicCitations || []).map((cite) => `<li>${cite}</li>`).join("")}
                    </ul>
                    <div style="background:var(--bg-secondary);padding:0.75rem;border-radius:var(--radius-sm);font-size:0.78rem;">
                      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.4rem;margin-bottom:0.45rem;">
                        <strong>${enM ? "Academic Citation Generator (1-Click Copy):" : "Trích dẫn Chuẩn Học thuật (1-Click Copy):"}</strong>
                        <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
                          <button type="button" class="btn btn-secondary btn-sm" style="font-size:0.73rem;padding:0.22rem 0.55rem;" data-action="copy-citation-text" data-fmt="APA 7th" data-text="${escapeHtml(buildPaintingCitation(p, "apa"))}">
                            APA 7th
                          </button>
                          <button type="button" class="btn btn-secondary btn-sm" style="font-size:0.73rem;padding:0.22rem 0.55rem;" data-action="copy-citation-text" data-fmt="Chicago" data-text="${escapeHtml(buildPaintingCitation(p, "chicago"))}">
                            Chicago
                          </button>
                          <button type="button" class="btn btn-jade btn-sm" style="font-size:0.73rem;padding:0.22rem 0.55rem;" data-action="copy-citation-text" data-fmt="BibTeX" data-text="${escapeHtml(buildPaintingCitation(p, "bibtex"))}">
                            BibTeX
                          </button>
                        </div>
                      </div>
                      <div style="font-family:var(--font-mono);font-size:0.74rem;color:var(--text-primary);word-break:break-word;">
                        ${escapeHtml(buildPaintingCitation(p, "apa"))}
                      </div>
                    </div>
                  </div>
                  <div class="verification-record-card">
                    <div class="editorial-kicker" style="margin-bottom:0.2rem;">5-Point Museum Verification Record</div>
                    <div class="verification-record-grid">
                      <div class="verification-record-item">
                        <strong style="font-size:0.78rem;color:var(--imperial-red);">${enM ? "1. Steward Institution" : "1. Bảo tàng &amp; Bối cảnh Lưu giữ"}</strong>
                        <div style="font-size:0.8rem;margin-top:0.2rem;">${escapeHtml(pMuseum)}</div>
                      </div>
                      <div class="verification-record-item">
                        <strong style="font-size:0.78rem;color:var(--imperial-red);">${enM ? "2. Attribution & Date" : "2. Quy thuộc &amp; Niên đại"}</strong>
                        <div style="font-size:0.8rem;margin-top:0.2rem;">${escapeHtml(pAttr.split("—")[0].trim())} • ${escapeHtml(enVal(p, "creationDate"))}</div>
                      </div>
                      <div class="verification-record-item">
                        <strong style="font-size:0.78rem;color:var(--imperial-red);">${enM ? "3. Medium & Dimensions" : "3. Chất liệu &amp; Kích thước"}</strong>
                        <div style="font-size:0.8rem;margin-top:0.2rem;">${escapeHtml(pMaterial)} • ${escapeHtml(enVal(p, "dimensions"))}</div>
                      </div>
                      <div class="verification-record-item">
                        <strong style="font-size:0.78rem;color:var(--imperial-red);">${enM ? "4. Consensus & Debate" : "4. Đồng thuận &amp; Tranh luận"}</strong>
                        <div style="font-size:0.8rem;margin-top:0.2rem;">${escapeHtml((sr.debatedIssues || "").slice(0, 120))}...</div>
                      </div>
                      <div class="verification-record-item">
                        <strong style="font-size:0.78rem;color:var(--imperial-red);">${enM ? "5. Academic Bibliography" : "5. Thư mục Tham khảo"}</strong>
                        <div style="font-size:0.8rem;margin-top:0.2rem;">${(sr.academicCitations || p.scholarlyResearch.academicCitations || []).length} ${enM ? "verified scholarly citations" : "trích dẫn chuẩn học thuật đã đối chiếu"}</div>
                      </div>
                    </div>
                  </div>
                `}
              </div>
              ${window.CCE_V104_VIEWS ? window.CCE_V104_VIEWS.renderPaintingDeepDossier(p, enM) : ""}
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPaintingCompareModal() {
    if (!ui.paintingCompareOpen) return "";
    const enM = isEnglishUi();
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const left = list.find((item) => item.id === ui.paintingCompareLeftId) || list[0];
    const right = list.find((item) => item.id === ui.paintingCompareRightId) || list[1];
    const leftAn = (enM && left.analysisEn) ? left.analysisEn : (left.analysis || {});
    const rightAn = (enM && right.analysisEn) ? right.analysisEn : (right.analysis || {});

    return `
      <div class="modal-backdrop open" data-action="close-compare-backdrop" style="z-index:230;">
        <div class="modal-panel" style="max-width:1320px;max-height:92vh;display:flex;flex-direction:column;padding:0;" role="dialog" aria-modal="true" aria-label="${enM ? "Compare Paintings Side-by-Side" : "So sánh Đối chiếu Kiệt tác"}">
          <div style="padding:1rem 1.5rem;background:var(--bg-elevated);border-bottom:1px solid var(--border-medium);display:flex;justify-content:space-between;align-items:center;gap:1rem;">
            <div>
              <h3 style="font-family:var(--font-editorial);font-size:1.5rem;margin:0;">
                ${enM ? "Classical Painting Side-by-Side Comparison Matrix" : "Ma Trận Đối Chiếu Kiệt Tác Quốc Họa (Side-by-Side Art Comparison)"}
              </h3>
              <p style="font-size:0.82rem;color:var(--text-muted);margin:0;">
                ${enM ? "Compare two masterworks across brushwork, ink tonality, spatial distance, and philosophical intent." : "Đặt song song 2 danh tác để so sánh kỹ thuật bút pháp, cách dùng mực, không gian tam viễn và ý niệm triết học."}
              </p>
            </div>
            <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="v3-compare-zoom-in">+ Zoom</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="v3-compare-zoom-out">- Zoom</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="v3-compare-zoom-reset">1:1</button>
              <button type="button" class="modal-close-btn" data-action="close-painting-compare" aria-label="${enM ? "Close comparison" : "Đóng so sánh"}">${ICONS.close}</button>
            </div>
          </div>

          <div class="painting-compare-grid">
            <!-- LEFT ARTWORK COLUMN -->
            <div class="compare-card-col">
              <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.79rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enM ? "FIRST WORK (LEFT PANEL):" : "KIỆT TÁC THỨ NHẤT (VẾ TRÁI):"}</label>
                <select class="form-select" data-action="select-compare-left" style="font-weight:600;">
                  ${list.map((item) => `
                    <option value="${item.id}" ${item.id === left.id ? "selected" : ""}>
                      ${escapeHtml(enM ? (item.titleEn || item.titleVi) : item.titleVi)} (${item.titleZh}) — ${escapeHtml(enM ? (item.artist.nameEn || item.artist.nameVi) : item.artist.nameVi)} [${escapeHtml(enM ? (item.dynasty.nameEn || item.dynasty.nameVi) : item.dynasty.nameVi)}]
                    </option>
                  `).join("")}
                </select>
              </div>

              <div style="height:260px;background:#141413;border-radius:var(--radius-md);overflow:auto;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;">
                <img decoding="async" src="${left.image}" alt="${escapeHtml(enM ? (left.titleEn || left.titleVi) : left.titleVi)}" style="max-width:100%;max-height:100%;object-fit:contain;transform:scale(${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.getSyncCompareZoom() : 1});transform-origin:center;transition:transform 0.2s;" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
              </div>

              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                <span class="badge badge-gold">${escapeHtml(enM ? (left.dynasty.nameEn || left.dynasty.nameVi) : left.dynasty.nameVi)}</span>
                <span class="badge badge-red">${escapeHtml(enVal(left, "genreLabel"))}</span>
                <span class="painting-attribution-tag">${escapeHtml(enVal(left, "attribution").split("—")[0].trim())}</span>
              </div>

              <h4 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0 0 0.2rem;">${escapeHtml(enM ? (left.titleEn || left.titleVi) : left.titleVi)} <span class="hanzi" style="color:var(--imperial-red);">${left.titleZh}</span></h4>
              <div style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:0.75rem;">
                <strong>${escapeHtml(enM ? (left.artist.nameEn || left.artist.nameVi) : left.artist.nameVi)} (${left.artist.nameZh})</strong> • ${escapeHtml(enVal(left, "creationDate"))} • ${escapeHtml(enVal(left, "dimensions"))} • ${escapeHtml(enVal(left, "museum"))}
              </div>

              <div class="analysis-panel-box" style="font-size:0.84rem;">
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Brushwork & Texture:" : "Bút pháp &amp; Cọ vẽ:"}</strong>
                  <p style="margin:0.2rem 0 0;">${leftAn.brushwork || ""}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Ink & Mineral Pigments:" : "Mực &amp; Màu sắc:"}</strong>
                  <p style="margin:0.2rem 0 0;">${leftAn.inkAndColor || ""}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Spatial Perspective:" : "Không gian &amp; Tam viễn:"}</strong>
                  <p style="margin:0.2rem 0 0;">${leftAn.spatialPerspective || ""}</p>
                </div>
                <div>
                  <strong style="color:var(--imperial-red);">${enM ? "Philosophical Intent:" : "Ý nghĩa Triết học:"}</strong>
                  <p style="margin:0.2rem 0 0;">${leftAn.philosophicalMeaning || ""}</p>
                </div>
              </div>
            </div>

            <!-- RIGHT ARTWORK COLUMN -->
            <div class="compare-card-col">
              <div style="margin-bottom:0.75rem;">
                <label style="font-size:0.79rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enM ? "SECOND WORK (RIGHT PANEL):" : "KIỆT TÁC THỨ HAI (VẾ PHẢI):"}</label>
                <select class="form-select" data-action="select-compare-right" style="font-weight:600;">
                  ${list.map((item) => `
                    <option value="${item.id}" ${item.id === right.id ? "selected" : ""}>
                      ${escapeHtml(enM ? (item.titleEn || item.titleVi) : item.titleVi)} (${item.titleZh}) — ${escapeHtml(enM ? (item.artist.nameEn || item.artist.nameVi) : item.artist.nameVi)} [${escapeHtml(enM ? (item.dynasty.nameEn || item.dynasty.nameVi) : item.dynasty.nameVi)}]
                    </option>
                  `).join("")}
                </select>
              </div>

              <div style="height:260px;background:#141413;border-radius:var(--radius-md);overflow:auto;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;">
                <img decoding="async" src="${right.image}" alt="${escapeHtml(enM ? (right.titleEn || right.titleVi) : right.titleVi)}" style="max-width:100%;max-height:100%;object-fit:contain;transform:scale(${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.getSyncCompareZoom() : 1});transform-origin:center;transition:transform 0.2s;" onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'" />
              </div>

              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.75rem;">
                <span class="badge badge-gold">${escapeHtml(enM ? (right.dynasty.nameEn || right.dynasty.nameVi) : right.dynasty.nameVi)}</span>
                <span class="badge badge-red">${escapeHtml(enVal(right, "genreLabel"))}</span>
                <span class="painting-attribution-tag">${escapeHtml(enVal(right, "attribution").split("—")[0].trim())}</span>
              </div>

              <h4 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0 0 0.2rem;">${escapeHtml(enM ? (right.titleEn || right.titleVi) : right.titleVi)} <span class="hanzi" style="color:var(--imperial-red);">${right.titleZh}</span></h4>
              <div style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:0.75rem;">
                <strong>${escapeHtml(enM ? (right.artist.nameEn || right.artist.nameVi) : right.artist.nameVi)} (${right.artist.nameZh})</strong> • ${escapeHtml(enVal(right, "creationDate"))} • ${escapeHtml(enVal(right, "dimensions"))} • ${escapeHtml(enVal(right, "museum"))}
              </div>

              <div class="analysis-panel-box" style="font-size:0.84rem;">
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Brushwork & Texture:" : "Bút pháp &amp; Cọ vẽ:"}</strong>
                  <p style="margin:0.2rem 0 0;">${rightAn.brushwork || ""}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Ink & Mineral Pigments:" : "Mực &amp; Màu sắc:"}</strong>
                  <p style="margin:0.2rem 0 0;">${rightAn.inkAndColor || ""}</p>
                </div>
                <div style="margin-bottom:0.75rem;">
                  <strong style="color:var(--imperial-red);">${enM ? "Spatial Perspective:" : "Không gian &amp; Tam viễn:"}</strong>
                  <p style="margin:0.2rem 0 0;">${rightAn.spatialPerspective || ""}</p>
                </div>
                <div>
                  <strong style="color:var(--imperial-red);">${enM ? "Philosophical Intent:" : "Ý nghĩa Triết học:"}</strong>
                  <p style="margin:0.2rem 0 0;">${rightAn.philosophicalMeaning || ""}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderPaintingZoomModal() {
    if (!ui.paintingZoomOpen) return "";
    const enM = isEnglishUi();
    const list = (window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || [];
    const p = list.find((item) => item.id === (ui.activePaintingId || ui.paintingZoomId)) || list[0];
    if (!p) return "";
    const isZen = Boolean(ui.paintingZenMode);
    const isScroll = Boolean(ui.paintingHandscrollMode);
    const pTitleMain = enM ? (p.titleEn || p.titleVi) : p.titleVi;
    const pArtistName = enM ? (p.artist.nameEn || p.artist.nameVi) : p.artist.nameVi;
    const pDynasty = p.dynasty ? (enM ? (p.dynasty.nameEn || p.dynasty.nameVi) : p.dynasty.nameVi) : "";
    const pMuseum = enVal(p, "museum");

    return `
      <div class="lightbox-backdrop ${isZen ? "zen-mode-backdrop" : ""}" data-action="close-painting-zoom-backdrop" role="dialog" aria-modal="true" aria-label="${enM ? "Zoom painting" : "Phóng to kiệt tác"} ${escapeHtml(pTitleMain)}" style="background:#0F1012;">
        <div class="lightbox-stage ${isZen ? "zen-mode-stage" : ""}" style="max-width:${isZen ? "100%" : "1380px"};width:${isZen ? "100%" : "96%"};padding:${isZen ? "1rem 1.5rem" : "1.25rem"};background:#1A1B1E;color:#F2EFE9;border-radius:0px;">
          <div class="zen-toolbar-row" style="display:flex;justify-content:space-between;align-items:center;gap:1rem;flex-wrap:wrap;margin-bottom:0.75rem;">
            <div style="opacity:${isZen ? "0.78" : "1"};transition:opacity 0.2s;">
              <strong style="font-family:var(--font-editorial);font-size:1.3rem;color:#F2EFE9;">
                ${escapeHtml(pTitleMain)} <span class="hanzi" style="color:#E8D2A0;">${p.titleZh}</span>
              </strong>
              ${!isZen ? `
                <div style="font-size:0.8rem;color:#B8B2A6;">
                  ${escapeHtml(pArtistName)} (${p.artist.nameZh}) • ${escapeHtml(pDynasty)} • ${escapeHtml(pMuseum)}
                </div>
              ` : ""}
            </div>
            <div style="display:flex;gap:0.4rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="lightbox-tool-btn" data-action="zoom-step-in">${enM ? "+ Zoom In" : "+ Phóng to"}</button>
              <button type="button" class="lightbox-tool-btn" data-action="zoom-step-out">${enM ? "- Zoom Out" : "- Thu nhỏ"}</button>
              <button type="button" class="lightbox-tool-btn" data-action="zoom-step-reset">1:1</button>
              <button type="button" class="lightbox-tool-btn ${isScroll ? "lightbox-tool-btn-primary" : ""}" data-action="toggle-painting-handscroll" title="${enM ? "Unroll horizontal handscroll canvas" : "Trải rộng trường quyển cuộn ngang"}">
                ${isScroll ? (enM ? "Exit Handscroll" : "Tắt cuộn ngang") : (enM ? "Unroll Scroll" : "Cuộn trường quyển")}
              </button>
              <button type="button" class="lightbox-tool-btn ${isZen ? "lightbox-tool-btn-primary" : ""}" data-action="toggle-painting-zen" title="${enM ? "Hide labels for pure contemplative viewing" : "Ẩn chữ, tập trung thưởng lãm thuần túy"}">
                ${isZen ? (enM ? "Show Labels" : "Hiện chú dẫn") : (enM ? "Zen View" : "Chế độ Thiền")}
              </button>
              <button type="button" class="lightbox-tool-btn" data-action="speak-zh" data-zh="${escapeHtml(`${p.titleZh}。${p.featuredQuote ? p.featuredQuote.zh : ""}`)}" title="${enM ? "Recite title & classical colophon" : "Nghe đọc tên tranh và lời đề cổ điển"}">
                ${enM ? "Recite Inscription" : "Đọc đề từ"}
              </button>
              ${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.renderHandscrollHudControls(isScroll, enM) : ""}
              <button type="button" class="lightbox-tool-btn lightbox-tool-btn-primary" data-action="close-painting-zoom">${ICONS.close} ${enM ? "Close" : "Đóng"}</button>
            </div>
          </div>

          ${(() => {
            const hotspotList = (Array.isArray(p.hotspotAnnotations) && p.hotspotAnnotations.length ? p.hotspotAnnotations : p.hotspots) || [];
            const totalHs = hotspotList.length;
            const activeIdx = totalHs ? Math.max(0, Math.min(Number(ui.activeHotspotIdx || 0), totalHs - 1)) : 0;
            const activeHs = totalHs ? hotspotList[activeIdx] : null;
            const stageWidth = isScroll ? `${Math.max(160, (ui.paintingZoomScale || 1) * 165)}%` : `${(ui.paintingZoomScale || 1) * 100}%`;
            return `
              <div class="painting-zen-canvas ${isScroll ? "handscroll-mode" : ""}" id="painting-zoom-canvas" style="background:#0F1012;border-radius:0px;padding:1rem;max-height:${isZen ? "82vh" : "66vh"};overflow:auto;text-align:${isScroll ? "left" : "center"};position:relative;">
                <div class="painting-stage-inner" style="position:relative;display:inline-block;width:${stageWidth};${isScroll ? "height:62vh;" : ""}transition:width 0.25s ease;">
                  <img decoding="async" 
                    src="${p.image}"
                    alt="${escapeHtml(pTitleMain)}"
                    style="width:100%;height:${isScroll ? "100%" : "auto"};object-fit:contain;display:block;"
                    onerror="this.src='assets/images/museum/qianli-jiangshan.jpg'"
                  />
                  ${!isZen && totalHs ? hotspotList.map((hs, idx) => {
                    const isAct = idx === activeIdx;
                    const xVal = typeof hs.x === "number" ? hs.x : 20 + ((idx * 17) % 60);
                    const yVal = typeof hs.y === "number" ? hs.y : 35 + ((idx * 13) % 40);
                    const hsTitle = enVal(hs, "titleVi");
                    return `
                      <button
                        type="button"
                        class="painting-hotspot-pin ${isAct ? "is-active" : ""}"
                        id="${isAct ? "active-painting-hotspot-pin" : ""}"
                        style="left:${xVal}%;top:${yVal}%;"
                        data-action="select-hotspot"
                        data-idx="${idx}"
                        aria-label="${enM ? `Detail ${idx + 1}` : `Chi tiết ${idx + 1}`}: ${escapeHtml(hsTitle)}"
                        title="${escapeHtml(hsTitle)}"
                      >${idx + 1}</button>
                    `;
                  }).join("") : ""}
                </div>
              </div>

              ${!isZen && totalHs && activeHs ? `
                <div class="guided-tour-panel" role="region" aria-label="${enM ? "Guided Curatorial Inspection" : "Hành trình Thuyết minh Giám định Tác phẩm"}">
                  <div class="guided-tour-head">
                    <div class="guided-tour-counter">
                      <span class="guided-tour-badge">${enM ? `Detail ${activeIdx + 1} / ${totalHs}` : `Chi tiết ${activeIdx + 1} / ${totalHs}`}</span>
                      ${activeHs.category ? `<span class="guided-tour-cat">${escapeHtml(enVal(activeHs, "category"))}</span>` : ""}
                    </div>
                    <div class="guided-tour-stepper">
                      <button type="button" class="guided-tour-btn" data-action="tour-prev-hotspot">${enM ? "◀ Previous" : "◀ Chi tiết trước"}</button>
                      <button type="button" class="guided-tour-btn guided-tour-btn-next" data-action="tour-next-hotspot">${enM ? "Next ▶" : "Chi tiết tiếp ▶"}</button>
                    </div>
                  </div>
                  <div class="guided-tour-body">
                    <h4 class="guided-tour-title">
                      ${escapeHtml(enVal(activeHs, "titleVi"))}
                      ${activeHs.titleZh ? `<span class="hanzi guided-tour-zh">${escapeHtml(activeHs.titleZh)}</span>` : ""}
                      ${activeHs.pinyin ? `<span class="pinyin guided-tour-pinyin">${escapeHtml(activeHs.pinyin)}</span>` : ""}
                    </h4>
                    <p class="guided-tour-detail">${escapeHtml(enVal(activeHs, "detail") || activeHs.technique || activeHs.meaning || "")}</p>
                  </div>
                  <div class="guided-tour-pills">
                    ${hotspotList.map((hs, idx) => `
                      <button type="button" class="guided-tour-pill ${idx === activeIdx ? "is-active" : ""}" data-action="select-hotspot" data-idx="${idx}">
                        ${idx + 1}. ${escapeHtml(enVal(hs, "titleVi"))}
                      </button>
                    `).join("")}
                  </div>
                </div>
              ` : ""}
            `;
          })()}

          ${!isZen ? `
            <div style="margin-top:0.75rem;">
              ${renderArtworkViewerMeta({
                title: `${pTitleMain} (${p.titleZh}) — ${pArtistName}`,
                dimensions: p.dimensions || "",
                material: enVal(p, "material") || "",
                museum: pMuseum || "",
                credit: enVal(p, "attribution") || ""
              })}
            </div>
          ` : ""}

          ${p.featuredQuote ? `
            <div style="text-align:center;margin-top:0.65rem;font-size:0.84rem;color:rgba(247,244,237,${isZen ? "0.62" : "0.86"});font-style:italic;">
              <span class="hanzi" style="color:#E8D2A0;margin-right:0.5rem;">“${p.featuredQuote.zh}”</span>
              ${!isZen ? `— “${escapeHtml(enM ? (p.featuredQuote.en || p.featuredQuote.vi) : p.featuredQuote.vi)}” (${escapeHtml(enM ? (p.featuredQuote.authorEn || p.featuredQuote.author) : p.featuredQuote.author)})` : ""}
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }


  // ==========================================================================
  // Page 4: HISTORY (14 Periods, Horizontal/Vertical Timeline Toggle + 6 Filters)
  // ==========================================================================
  function renderHistoryPage() {
    const enM = isEnglishUi();
    const help = getEnHelp();
    const activePeriod = History.periods.find((p) => p.id === ui.activePeriodId) || History.periods[0];
    const eventFilters = [
      { id: "all", label: enM ? "All Events" : "Tất cả sự kiện" },
      { id: "dynasty", label: enM ? "Dynasties" : "Triều đại" },
      { id: "event", label: enM ? "Turning Points" : "Sự kiện bước ngoặt" },
      { id: "philosophy", label: enM ? "Philosophical Milestones" : "Phát triển Tư tưởng" },
      { id: "figure", label: enM ? "Key Figures" : "Nhân vật tiêu biểu" },
      { id: "culture", label: enM ? "Cultural Achievements" : "Thành tựu Văn hóa" }
    ];

    const filteredEvents = ui.timelineFilter === "all"
      ? History.timelineEvents
      : History.timelineEvents.filter((e) => e.type === ui.timelineFilter);

    const apTimeline = (enM && Array.isArray(activePeriod.timelineEn) && activePeriod.timelineEn.length) ? activePeriod.timelineEn : activePeriod.timeline;
    const apRepArtifacts = (enM && Array.isArray(activePeriod.representativeArtifactsEn) && activePeriod.representativeArtifactsEn.length) ? activePeriod.representativeArtifactsEn : activePeriod.representativeArtifacts;
    const apFigures = (enM && Array.isArray(activePeriod.figuresEn) && activePeriod.figuresEn.length) ? activePeriod.figuresEn : activePeriod.figures;
    const apCultAch = (enM && Array.isArray(activePeriod.culturalAchievementsEn) && activePeriod.culturalAchievementsEn.length) ? activePeriod.culturalAchievementsEn : activePeriod.culturalAchievements;
    const apNameMain = enM ? (activePeriod.nameEn || activePeriod.nameVi) : activePeriod.nameVi;
    const apNameSub = enM ? activePeriod.nameVi : activePeriod.nameEn;

    const Pager = window.CCE_V10_PAGINATOR;

    const historyDynastiesHtml = () => `
          ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderSynchronyTimeline(enM) : ""}
          ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderSyncedDynastyTimeline(History.periods, activePeriod.id, enM) : ""}
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.75rem;">
            <h2 style="font-size:1.45rem;margin:0;">${enM ? "1. Select Historical Era" : "1. Chọn thời kỳ lịch sử"}</h2>
            <div style="display:flex;gap:0.35rem;">
              <button type="button" class="btn ${ui.timelineLayout === "horizontal" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-timeline-layout" data-mode="horizontal">${enM ? "↔ Horizontal Rail" : "↔ Trục ngang"}</button>
              <button type="button" class="btn ${ui.timelineLayout === "vertical" ? "btn-primary" : "btn-secondary"} btn-sm" data-action="set-timeline-layout" data-mode="vertical">${enM ? "↕ Vertical Grid" : "↕ Lưới dọc"}</button>
            </div>
          </div>
          <div class="timeline-rail ${ui.timelineLayout === "vertical" ? "vertical-mode" : ""}">
            ${History.periods
              .map(
                (p) => `
                  <button type="button" class="timeline-node ${p.id === activePeriod.id ? "active" : ""}" data-action="select-period" data-id="${p.id}">
                    <div class="timeline-year">#${p.order} • ${escapeHtml(enVal(p, "span"))}</div>
                    <div class="timeline-name">${escapeHtml(enM ? (p.nameEn || p.nameVi) : p.nameVi)}</div>
                    <div class="timeline-zh">${formatHanzi(p.nameZh, p.nameZhTrad)}</div>
                  </button>
                `
              )
              .join("")}
          </div>
          <div class="dynasty-detail-panel">
            ${renderAcademicCardThumb(getAcademicPhotoForItem("periods", activePeriod.id, activePeriod.order || 0), `${apNameMain} • ${enVal(activePeriod, "span")}`)}
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;align-items:flex-start;margin-bottom:1.1rem;">
              <div>
                <span class="badge badge-red">${escapeHtml(enVal(activePeriod, "span"))}</span>
                <h2 style="margin-top:0.4rem;">${escapeHtml(apNameMain)}${enM ? "" : ` (${escapeHtml(apNameSub)})`} — ${formatHanzi(activePeriod.nameZh, activePeriod.nameZhTrad)}</h2>
              </div>
              <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-bookmark" data-type="period" data-id="${activePeriod.id}" data-title="${enM ? "History: " : "Lịch sử: "}${escapeHtml(apNameMain)}">${Store.isBookmarked("period", activePeriod.id) ? (enM ? "Saved Era" : "Đã lưu thời kỳ") : (enM ? "Save Era" : "Lưu thời kỳ")}</button>
            </div>
            <div class="epistemic-box">
              <div class="epistemic-title">${enM ? "Historical Overview" : "Tổng quan lịch sử"}</div>
              <p style="margin:0;">${escapeHtml(enVal(activePeriod, "overview"))}</p>
            </div>
            <div class="grid grid-2" style="margin-top:1.25rem;">
              <div class="card">
                <h3 class="card-title" style="font-size:1.15rem;">${enM ? "Key Chronological Milestones" : "Mốc thời gian trọng yếu"}</h3>
                <ul style="padding-left:1.15rem;margin:0;color:var(--text-secondary);font-size:0.9rem;">
                  ${apTimeline.map((item) => `<li style="margin-bottom:0.45rem;">${escapeHtml(item)}</li>`).join("")}
                </ul>
              </div>
              <div class="card">
                <h3 class="card-title" style="font-size:1.15rem;">${enM ? "Political Order and Socio-Economic Institutions" : "Chính trị và kinh tế – xã hội"}</h3>
                <p style="font-size:0.9rem;"><strong>${enM ? "Politics:" : "Chính trị:"}</strong> ${escapeHtml(enVal(activePeriod, "politics"))}</p>
                <p style="font-size:0.9rem;margin-bottom:${activePeriod.governanceAndTax ? "0.65rem" : "0"};"><strong>${enM ? "Economy & Society:" : "Kinh tế – xã hội:"}</strong> ${escapeHtml(enVal(activePeriod, "economySociety"))}</p>
                ${activePeriod.governanceAndTax ? `<p style="font-size:0.9rem;margin-bottom:0;"><strong>${enM ? "Governance & Taxation:" : "Thể chế và thuế khóa:"}</strong> ${escapeHtml(enVal(activePeriod, "governanceAndTax"))}</p>` : ""}
              </div>
            </div>
            ${(activePeriod.vietnamRelations || (apRepArtifacts && apRepArtifacts.length)) ? `
              <div class="grid grid-2" style="margin-top:1.25rem;">
                ${activePeriod.vietnamRelations ? `
                  <div class="card" style="border-left:3px solid var(--crimson-accent);">
                    <h3 class="card-title" style="font-size:1.12rem;color:var(--crimson-accent);">${enM ? "Synchronized Vietnam and East Asian Context" : "Đối chiếu lịch sử Việt Nam và Đông Á"}</h3>
                    <p style="font-size:0.9rem;margin-bottom:0;">${escapeHtml(enVal(activePeriod, "vietnamRelations"))}</p>
                  </div>
                ` : ""}
                ${(apRepArtifacts && apRepArtifacts.length) ? `
                  <div class="card">
                    <h3 class="card-title" style="font-size:1.12rem;">${enM ? "Representative Archaeological Relics" : "Di sản và bảo vật khảo cổ tiêu biểu"}</h3>
                    <ul style="padding-left:1.15rem;margin:0;color:var(--text-secondary);font-size:0.9rem;">
                      ${apRepArtifacts.map((art) => `<li style="margin-bottom:0.4rem;">${escapeHtml(art)}</li>`).join("")}
                    </ul>
                  </div>
                ` : ""}
              </div>
            ` : ""}
            <div class="grid grid-3" style="margin-top:1.25rem;">
              <div class="card">
                <h3 class="card-title" style="font-size:1.12rem;">${enM ? "Historical Figures" : "Nhân vật lịch sử"}</h3>
                <ul style="padding-left:1.1rem;margin:0;color:var(--text-secondary);font-size:0.88rem;">
                  ${apFigures.map((f) => `<li style="margin-bottom:0.4rem;">${escapeHtml(f)}</li>`).join("")}
                </ul>
              </div>
              <div class="card">
                <h3 class="card-title" style="font-size:1.12rem;">${enM ? "Philosophy and Cultural Legacy" : "Triết học và thành tựu văn hóa"}</h3>
                <p style="font-size:0.88rem;">${escapeHtml(enVal(activePeriod, "philosophyIntellectual"))}</p>
                <ul style="padding-left:1.1rem;margin:0;color:var(--text-secondary);font-size:0.86rem;">
                  ${apCultAch.map((c) => `<li style="margin-bottom:0.35rem;">${escapeHtml(c)}</li>`).join("")}
                </ul>
              </div>
              <div class="card">
                <h3 class="card-title" style="font-size:1.12rem;">${enM ? "Historical Geography and Primary Sources" : "Địa lý lịch sử và tư liệu gốc"}</h3>
                <p style="font-size:0.86rem;"><strong>${enM ? "Capitals:" : "Kinh đô:"}</strong> ${escapeHtml(enVal(activePeriod.mapData, "capitals"))}</p>
                <p style="font-size:0.86rem;"><strong>${enM ? `Extent (${enVal(activePeriod, "span")}):` : `Không gian (${activePeriod.span}):`}</strong> ${escapeHtml(enVal(activePeriod.mapData, "territory"))}</p>
                <p style="font-size:0.86rem;"><strong>${enM ? "Trade Corridors:" : "Tuyến giao thương:"}</strong> ${escapeHtml(enVal(activePeriod.mapData, "routes"))}</p>
                <hr style="border:none;border-top:1px solid var(--border-subtle);margin:0.65rem 0;">
                ${activePeriod.primarySources
                  .map(
                    (s) => `
                      <div style="font-size:0.82rem;margin-bottom:0.5rem;">
                        <strong>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(enVal(s, "title"))} ↗</a>` : escapeHtml(enVal(s, "title"))}</strong><br>
                        <span style="color:var(--text-muted);">${escapeHtml(enVal(s, "note"))}</span>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </div>
            ${(() => {
              const pArtifacts = (Museum.artifacts || []).filter((a) => a.periodId === activePeriod.id).slice(0, 4);
              const periodMatch = normalizeText(`${activePeriod.id} ${activePeriod.nameVi} ${activePeriod.nameZh}`).replace(/-/g, "");
              const pPaintings = PaintingsList.filter((pt) => {
                const dyn = normalizeText(`${pt.eraId || ""} ${(pt.dynasty && (pt.dynasty.eraId || pt.dynasty.nameVi)) || ""} ${(pt.dynasty && pt.dynasty.nameZh) || ""}`).replace(/-/g, "");
                return periodMatch.split(/\s+/).some((tok) => tok.length >= 3 && dyn.includes(tok));
              }).slice(0, 4);
              if (!pArtifacts.length && !pPaintings.length) return "";
              return `
                <div class="crosslink-strip" style="margin-top:1.15rem;">
                  <div class="editorial-kicker" style="margin-bottom:0.2rem;">${enM ? "Cross-Disciplinary Archive" : "Liên kết hiện vật và hội họa cùng thời kỳ"}</div>
                  <strong>${enM ? `Museum Artifacts and Paintings from ${escapeHtml(apNameMain)} (${escapeHtml(activePeriod.nameZh)})` : `Hiện vật và quốc họa thời ${escapeHtml(activePeriod.nameVi)} (${escapeHtml(activePeriod.nameZh)})`}</strong>
                  <div class="crosslink-pill-row">
                    ${pArtifacts.map((a) => `<button type="button" class="btn btn-secondary btn-sm" data-action="open-artifact" data-id="${a.id}">${escapeHtml(enM ? (a.nameEn || a.nameVi) : a.nameVi)} (${escapeHtml(a.nameZh)})</button>`).join("")}
                    ${pPaintings.map((pt) => `<button type="button" class="btn btn-gold btn-sm" data-action="open-painting-detail" data-id="${pt.id}">${escapeHtml(enM ? (pt.titleEn || pt.titleVi) : pt.titleVi)} (${escapeHtml(pt.titleZh)})</button>`).join("")}
                  </div>
                </div>
              `;
            })()}
          </div>
    `;

    const historyCapitalsHtml = () => `
          ${window.CCE_V9_DATA_STORIES ? window.CCE_V9_DATA_STORIES.renderForPage("history", enM) : ""}
          <div class="museum-artwork-banner">
            ${Visuals.renderGreatWallInkHTML("长城史脉")}
            <div>
              <div class="editorial-kicker">${enM ? "Military Architecture and Geopolitics • 万里长城" : "Kiến trúc quân sự và địa chính trị • 万里长城"}</div>
              <h2 style="font-size:1.48rem;margin:0.25rem 0 0.6rem;">${enM ? "The Great Wall: From Warring States Earthworks to Ming Masonry Ramparts" : "Trường Thành: Từ lũy đất Xuân Thu đến tuyến phòng thủ Minh triều"}</h2>
              <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.9rem;">
                ${enM
                  ? "Never built in one reign alone, the Great Wall links Frontier garrisons, watchtowers, and passes across Zhou, Qin, Han, Northern Wei, and Ming dynasties."
                  : "Hệ thống thành lũy, quan ải và phong hỏa đài nối tiếp qua các triều đại Chu – Tần – Hán – Bắc Ngụy – Minh, phản ánh ranh giới sinh thái và thương mại giữa vùng nông nghiệp Hoa Hạ và thảo nguyên phía bắc."}
              </p>
              <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                <button type="button" class="btn btn-primary btn-sm" data-action="select-period" data-id="qin-han">${enM ? "Explore Qin–Han Era (秦汉)" : "Xem thời Tần – Hán (秦汉)"}</button>
                <button type="button" class="btn btn-secondary btn-sm" data-action="select-period" data-id="ming">${enM ? "Explore Ming Era (明代)" : "Xem thời Minh (明代)"}</button>
              </div>
            </div>
          </div>
          ${Visuals.renderCapitalMigrationMapSVG ? Visuals.renderCapitalMigrationMapSVG(enM) : ""}
    `;

    const historyEventsHtml = () => {
      const evPaged = Pager ? Pager.paginate(filteredEvents, "history-events", { filterSig: ui.timelineFilter, desktopPerPage: 12, mobilePerPage: 8 }) : { slice: filteredEvents, renderControls: () => "" };
      return `
          <div class="section-header">
            <div>
              <div class="editorial-kicker">${enM ? "Interactive Chronology • 历代重大事件" : "Biên niên tương tác • 历代重大事件"}</div>
              <h2 class="section-title" style="font-size:1.6rem;">${enM ? "Chronology of Dynasties, Events, Thought and Figures" : "Bộ lọc sự kiện, triều đại, tư tưởng và nhân vật"}</h2>
            </div>
          </div>
          <div class="filter-bar">
            ${eventFilters.map((f) => `<button type="button" class="filter-pill ${ui.timelineFilter === f.id ? "active" : ""}" data-action="filter-timeline" data-type="${f.id}">${f.label}</button>`).join("")}
          </div>
          <div class="grid grid-2">
            ${evPaged.slice.map((ev, evIdx) => {
              const evTypeLabel = (help.eventTypeEn && help.eventTypeEn(ev.type, enM)) || ev.type;
              return `
                <div class="card">
                  ${renderAcademicCardThumb(getAcademicPhotoForItem("periods", ev.periodId, evIdx), `${escapeHtml(enVal(ev, "year"))} • ${escapeHtml(evTypeLabel)}`)}
                  <div class="card-header-row">
                    <span class="badge badge-gold">${escapeHtml(enVal(ev, "year"))}</span>
                    <span class="badge badge-outline">${escapeHtml(evTypeLabel)}</span>
                  </div>
                  <h4 style="margin-bottom:0.2rem;">${escapeHtml(enVal(ev, "title"))}</h4>
                  <div class="card-title-zh" style="margin-bottom:0.5rem;">${ev.zh}</div>
                  <p style="font-size:0.88rem;margin-bottom:0.75rem;">${escapeHtml(enVal(ev, "summary"))}</p>
                  <button type="button" class="btn btn-ghost btn-sm" data-action="select-period" data-id="${ev.periodId}">${enM ? "View Dynasty Context →" : "Xem bối cảnh triều đại →"}</button>
                </div>
              `;
            }).join("")}
          </div>
          ${evPaged.renderControls(enM)}
      `;
    };

    const historySyncHtml = () => {
      const hSync = window.CCE_HISTORY_SYNC_V3;
      const syncHtml = hSync ? (() => {
        const pTimeline = Array.isArray(hSync.parallelTimeline) ? hSync.parallelTimeline : [];
        const kFigures = Array.isArray(hSync.keyFigures) ? hSync.keyFigures : [];
        const activeSync = pTimeline.find((item) => item.eraId === activePeriod.id || activePeriod.id.indexOf(item.eraId) >= 0 || item.eraId.indexOf(activePeriod.id) >= 0) || pTimeline[0];
        const provFigs = [];
        if (ui.historyFigureMode === "prov115") {
          const pAll = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];
          const visMap = window.CCE_PROVINCE_ITEM_VISUALS || {};
          pAll.forEach((pr) => {
            const pVis = (visMap[pr.id] && visMap[pr.id].figures) || [];
            (pr.notableFigures || []).forEach((nf, idx) => {
              provFigs.push({
                nameVi: nf.hanViet || nf.nameVi || nf.hanzi,
                nameEn: nf.hanViet || nf.hanzi,
                nameZh: nf.hanzi || "",
                years: nf.lifespan || "",
                roleVi: `${enM ? (pr.nameEn || pr.nameVi) : pr.nameVi} (${pr.nameZh || ""})`,
                roleEn: pr.nameEn || pr.nameVi,
                significanceVi: nf.contribution || "",
                significanceEn: nf.contributionEn || nf.contribution || "",
                provinceId: pr.id,
                image: pVis[idx] || ""
              });
            });
          });
        }
        const displayFigs = ui.historyFigureMode === "prov115" && provFigs.length ? provFigs : kFigures;
        const figPaged = Pager ? Pager.paginate(displayFigs, "history-figures", { filterSig: ui.historyFigureMode, desktopPerPage: 12, mobilePerPage: 8 }) : { slice: displayFigs, renderControls: () => "" };
        return `
          ${activeSync ? `
            <div class="sync-timeline-v3-card">
              <div class="editorial-kicker">${enM ? "Synchronized Chrono-Axis (China · Vietnam · World)" : "Trục đồng đại song song (Trung Quốc · Việt Nam · Thế giới)"}</div>
              <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.5rem;">
                <h2 style="margin:0.2rem 0 0;font-size:1.35rem;">${escapeHtml(enM ? activeSync.eraNameEn : activeSync.eraNameVi)} <span class="hanzi">${escapeHtml(activeSync.eraNameZh)}</span></h2>
                <span class="badge badge-outline">${escapeHtml(activeSync.periodSpan)}</span>
              </div>
              <div class="sync-timeline-3col">
                <div class="sync-lane-box lane-cn">
                  <strong style="display:block;margin-bottom:0.35rem;color:var(--accent-cinnabar);">${enM ? "China Milestones" : "Trục Trung Hoa"}</strong>
                  <ul style="margin:0;padding-left:1rem;">
                    ${((enM ? activeSync.chinaMilestonesEn : activeSync.chinaMilestonesVi) || []).map((ms) => `<li style="margin-bottom:0.3rem;">${escapeHtml(ms)}</li>`).join("")}
                  </ul>
                </div>
                <div class="sync-lane-box lane-vn">
                  <strong style="display:block;margin-bottom:0.35rem;color:var(--accent-jade);">${enM ? "Vietnam Parallel" : "Song hành Việt Nam"}</strong>
                  <p style="margin:0;">${escapeHtml(enM ? activeSync.vietnamParallelEn : activeSync.vietnamParallelVi)}</p>
                </div>
                <div class="sync-lane-box lane-world">
                  <strong style="display:block;margin-bottom:0.35rem;color:var(--antique-gold);">${enM ? "World Context" : "Bối cảnh thế giới"}</strong>
                  <p style="margin:0;">${escapeHtml(enM ? activeSync.worldParallelEn : activeSync.worldParallelVi)}</p>
                </div>
              </div>
            </div>
          ` : ""}
          ${displayFigs.length ? `
            <div class="sync-timeline-v3-card">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.6rem;">
                <div>
                  <div class="editorial-kicker">${enM ? `Biographical Index (${displayFigs.length} Figures)` : `Danh nhân lịch đại (${displayFigs.length} nhân vật)`}</div>
                  <h3 style="margin:0.2rem 0 0;">${enM ? "Historical Figures Linked to Native Provinces" : "Nhân vật lịch sử và tỉnh thành cố hương"}</h3>
                </div>
                <div class="filter-bar" style="margin:0;">
                  <button type="button" class="filter-pill ${ui.historyFigureMode !== "prov115" ? "active" : ""}" data-action="set-history-figure-mode" data-mode="key28">${enM ? "28 Era Luminaries" : "28 danh nhân trục lịch sử"}</button>
                  <button type="button" class="filter-pill ${ui.historyFigureMode === "prov115" ? "active" : ""}" data-action="set-history-figure-mode" data-mode="prov115">${enM ? "All 34 Provinces (115)" : "Toàn bộ 34 tỉnh thành (115)"}</button>
                </div>
              </div>
              <div class="history-figures-grid">
                ${figPaged.slice.map((fig) => {
                  const fTitle = enM ? (fig.nameEn || fig.nameVi) : fig.nameVi;
                  const fCap = `${fTitle} (${fig.nameZh}) — ${fig.years}`;
                  return `
                  <div class="history-figure-card">
                    ${fig.image ? `<button type="button" class="prov-item-thumb is-portrait" data-action="open-custom-image" data-src="${escapeHtml(fig.image)}" data-caption="${escapeHtml(fCap)}" data-credit="Chinese Cultural and Historical Luminaries Archive" title="${enM ? "Zoom portrait" : "Phóng to chân dung"}"><img src="${escapeHtml(fig.image)}" alt="${escapeHtml(fTitle)}" loading="lazy" decoding="async" /></button>` : ""}
                    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.4rem;">
                      <strong>${escapeHtml(fTitle)} <span class="hanzi">${escapeHtml(fig.nameZh)}</span></strong>
                      <span style="font-size:0.74rem;font-family:var(--font-mono);color:var(--text-muted);">${escapeHtml(fig.years)}</span>
                    </div>
                    <div style="font-size:0.8rem;font-weight:600;color:var(--accent-cinnabar);">${escapeHtml(enM ? (fig.roleEn || fig.roleVi) : fig.roleVi)}</div>
                    <p style="margin:0;font-size:0.8rem;color:var(--text-secondary);line-height:1.45;">${escapeHtml(enM ? (fig.significanceEn || fig.significanceVi) : fig.significanceVi)}</p>
                    ${fig.provinceId ? `<button type="button" class="btn btn-secondary btn-sm" style="margin-top:auto;align-self:flex-start;padding:0.2rem 0.5rem;font-size:0.74rem;" data-action="open-province-detail" data-id="${escapeHtml(fig.provinceId)}">${enM ? "Province Dossier →" : "Xem tỉnh cố hương →"}</button>` : ""}
                  </div>
                `;
                }).join("")}
              </div>
              ${figPaged.renderControls(enM)}
            </div>
          ` : ""}
        `;
      })() : "";
      return syncHtml + (window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderTriangulationLedger("history", enM) : "");
    };

    const historySubpages = [
      { id: "dynasties", labelVi: "14 thời kỳ lịch sử", labelEn: "14 Dynastic Eras", count: History.periods.length, render: historyDynastiesHtml },
      { id: "capitals", labelVi: "Dịch chuyển kinh đô", labelEn: "Capitals & Great Wall", render: historyCapitalsHtml },
      { id: "events", labelVi: "Biên niên sự kiện", labelEn: "Event Chronology", count: History.timelineEvents.length, render: historyEventsHtml },
      { id: "sync", labelVi: "Đối chiếu Việt – Hoa", labelEn: "China–Vietnam Axis", render: historySyncHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enM ? "History and Dynasties · 中国历史与文明" : "Lịch sử và triều đại · 中国历史与文明"}</div>
          <h1>${enM ? "History and civilization of China across 14 historical eras" : "Lịch sử và văn minh Trung Hoa qua 14 thời kỳ"}</h1>
          <p class="section-subtitle">
            ${enM
              ? "Trace five millennia from Neolithic Liangzhu and Erlitou through imperial dynasties to contemporary China alongside primary historical sources and synchronized comparative context."
              : "Khám phá tiến trình xuyên suốt từ Thời đại Đồ đá – Lương Chử đến Trung Quốc đương đại kèm tư liệu gốc và bản đồ lịch sử."}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("history", historySubpages, { enM }) : `<section class="page-section"><div class="container">${historyDynastiesHtml()}${historyEventsHtml()}</div></section>`}
    `;
  }

  // ==========================================================================
  // Page 5: PHILOSOPHY (12 Schools x 7 Dimensions + 15 Classical Texts + Matrix)
  // ==========================================================================
  function renderPhilosophyPage() {
    const enM = isEnglishUi();
    const activeSchool = Philosophy.schools.find((s) => s.id === ui.activeSchoolId) || Philosophy.schools[0];
    const activeClassicalArr = (enM && Array.isArray(activeSchool.classicalTextsEn) && activeSchool.classicalTextsEn.length)
      ? activeSchool.classicalTextsEn
      : (activeSchool.classicalTexts || []);
    const activeConceptsArr = (enM && Array.isArray(activeSchool.philosophicalConceptsEn) && activeSchool.philosophicalConceptsEn.length)
      ? activeSchool.philosophicalConceptsEn
      : (activeSchool.philosophicalConcepts || []);
    const schoolMain = enM ? (activeSchool.nameEn || activeSchool.nameVi) : activeSchool.nameVi;
    const schoolSub = enM ? activeSchool.nameVi : activeSchool.nameEn;

    const philSchoolsHtml = () => `
          ${renderAcademicSectionBanner("philosophy")}
          <div class="filter-bar">
            ${Philosophy.schools
              .map(
                (s) => `
                  <button type="button" class="filter-pill ${s.id === activeSchool.id ? "active" : ""}" data-action="open-school" data-id="${s.id}">
                    ${escapeHtml(enM ? (s.nameEn || s.nameVi) : s.nameVi)} <span class="hanzi">${s.nameZh}</span>
                  </button>
                `
              )
              .join("")}
          </div>

          <div class="dynasty-detail-panel">
            ${renderAcademicCardThumb(getAcademicPhotoForItem("schools", activeSchool.id, 0), `${schoolMain} • ${activeSchool.nameZh}`)}
            <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:1rem;align-items:center;margin-bottom:1rem;">
              <div>
                <span class="badge badge-red">${enM ? "7-Dimension Scholarly Dissection" : "Phân tích 7 chiều học thuật"}</span>
                <h2 style="margin-top:0.35rem;">${escapeHtml(schoolMain)} (${escapeHtml(schoolSub)}) — <span class="hanzi">${activeSchool.nameZh}</span></h2>
              </div>
              <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-bookmark" data-type="school" data-id="${activeSchool.id}" data-title="${enM ? "Philosophy: " : "Triết học: "}${escapeHtml(schoolMain)}">${Store.isBookmarked("school", activeSchool.id) ? (enM ? "Saved School" : "Đã lưu học phái") : (enM ? "Save School" : "Lưu học phái")}</button>
            </div>

            <div class="grid grid-2">
              <div class="card">
                <h4 style="color:var(--imperial-red);">${enM ? "1. Historical Origins" : "1. Nguồn gốc lịch sử"}</h4>
                <p style="font-size:0.9rem;">${escapeHtml(enVal(activeSchool, "historicalOrigins"))}</p>
                <h4 style="color:var(--imperial-red);">${enM ? "2. Major Thinkers and Exponents" : "2. Các tư tưởng gia tiêu biểu"}</h4>
                <p style="font-size:0.9rem;">${escapeHtml(enVal(activeSchool, "majorThinkers"))}</p>
                <h4 style="color:var(--imperial-red);">${enM ? "3. Foundational Principles" : "3. Nguyên lý cốt lõi"}</h4>
                <p style="font-size:0.9rem;margin-bottom:0;">${escapeHtml(enVal(activeSchool, "fundamentalPrinciples"))}</p>
              </div>
              <div class="card">
                <h4 style="color:var(--jade-green);">${enM ? "4. Foundational Canons" : "4. Kinh điển quan trọng"}</h4>
                <p style="font-size:0.9rem;">${activeClassicalArr.map((x) => escapeHtml(x)).join(" • ")}</p>
                <h4 style="color:var(--jade-green);">${enM ? "5. Core Philosophical Concepts" : "5. Khái niệm triết học trọng tâm"}</h4>
                <ul style="padding-left:1.1rem;margin:0 0 0.85rem 0;color:var(--text-secondary);font-size:0.88rem;">
                  ${activeConceptsArr.map((c) => `<li style="margin-bottom:0.35rem;">${escapeHtml(c)}</li>`).join("")}
                </ul>
              </div>
            </div>

            <div class="grid grid-2" style="margin-top:1.25rem;">
              <div class="card">
                <h4>${enM ? "6. Historical Trajectory and State Institutionalization" : "6. Ảnh hưởng lịch sử"}</h4>
                <p style="font-size:0.9rem;margin-bottom:0;">${escapeHtml(enVal(activeSchool, "historicalInfluence"))}</p>
              </div>
              <div class="card">
                <h4>${enM ? "7. Contemporary Relevance and Ethics" : "7. Giá trị và liên hệ đương đại"}</h4>
                <p style="font-size:0.9rem;margin-bottom:0;">${escapeHtml(enVal(activeSchool, "contemporaryRelevance"))}</p>
              </div>
            </div>
            ${activeSchool.vietnamRelevance ? `
              <div class="card" style="margin-top:1.25rem;border-left:3px solid var(--crimson-accent);">
                <h4 style="color:var(--crimson-accent);">${enM ? "8. Reception and Adaptation in Vietnamese Intellectual History" : "8. Tiếp biến và giao thoa tại Việt Nam"}</h4>
                <p style="font-size:0.9rem;margin-bottom:0;">${escapeHtml(enVal(activeSchool, "vietnamRelevance"))}</p>
              </div>
            ` : ""}
          </div>
    `;

    const philYijingHtml = () => `
      ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderYijingHexagramLab(enM) : ""}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderYijing64Lab(enM) : ""}
    `;

    const philClassicsHtml = () => {
      const Pager = window.CCE_V10_PAGINATOR;
      const cPaged = Pager ? Pager.paginate(Philosophy.classicalTexts, "philosophy-classics", { desktopPerPage: 6, mobilePerPage: 4 }) : { slice: Philosophy.classicalTexts, renderControls: () => "" };
      return `
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderSikuAndParticlesStudio(enM, "philosophy") : ""}
          <div class="section-header">
            <div>
              <div class="editorial-kicker">${enM ? "Original Classics · 传世经典原典" : "Kinh điển nguyên bản • 传世经典原典"}</div>
              <h2 class="section-title" style="font-size:1.65rem;">${enM ? `${Philosophy.classicalTexts.length} Foundational Chinese Classics` : `${Philosophy.classicalTexts.length} bộ kinh điển trọng yếu`}</h2>
            </div>
          </div>
          ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderClassicalGrammarDeck(enM) : ""}
          <div class="grid grid-2">
            ${cPaged.slice.map((txt, tIdx) => {
              const quotes = Array.isArray(txt.quotes) ? txt.quotes : [];
              const excerpts = Array.isArray(txt.excerpts) ? txt.excerpts : [];
              const leadQ = quotes[0] || excerpts[0] || null;
              const extraQ = quotes.length > 1 ? quotes.slice(1) : excerpts.slice(1);
              const zhLead = leadQ ? (leadQ.zh || leadQ.hanziSc || txt.excerptZh || "") : (txt.excerptZh || "");
              const pyLead = leadQ ? (leadQ.pinyin || txt.excerptPinyin || "") : (txt.excerptPinyin || "");
              const hvLead = leadQ && leadQ.hanViet ? leadQ.hanViet : "";
              const viLead = (leadQ && leadQ.vi) || txt.excerptVi || "";
              const enLead = (leadQ && leadQ.en) || txt.excerptEn || "";
              const commLead = leadQ ? (enM ? (leadQ.commentaryEn || "") : (leadQ.commentary || "")) : "";
              return `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("texts", txt.id, tIdx), `${enVal(txt, "school")} • ${enVal(txt, "era")}`)}
                <div class="card-header-row">
                  <span class="badge badge-gold">${escapeHtml(enVal(txt, "school"))}</span>
                  <span style="font-size:0.78rem;color:var(--text-muted);">${escapeHtml(enVal(txt, "era"))}</span>
                </div>
                <h3 class="card-title"><span class="hanzi">${txt.titleZh}</span> — ${escapeHtml(enM ? (txt.titleEn || txt.titleVi) : `${txt.titleVi} (${txt.titleEn})`)}</h3>
                <p style="font-size:0.88rem;">${escapeHtml(enVal(txt, "summary"))}</p>
                <div class="epistemic-box" style="margin-top:auto;">
                  <div class="hanzi" style="font-size:1.08rem;color:var(--text-primary);margin-bottom:0.35rem;">“${escapeHtml(zhLead)}”</div>
                  <div class="pinyin" style="font-size:0.84rem;margin-bottom:0.35rem;">${escapeHtml(pyLead)}</div>
                  ${hvLead ? `<div style="font-size:0.82rem;color:var(--crimson-accent);font-weight:600;margin-bottom:0.3rem;">${enM ? "Sino–Viet Reading:" : "Âm Hán–Việt:"} ${escapeHtml(hvLead)}</div>` : ""}
                  ${enM
                    ? `<div style="font-size:0.85rem;color:var(--text-secondary);"><strong>Translation:</strong> ${escapeHtml(enLead || enVal(txt, "whyItMatters"))}</div>`
                    : `<div style="font-size:0.85rem;color:var(--text-secondary);"><strong>VI:</strong> ${escapeHtml(viLead)}</div><div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.2rem;"><strong>EN:</strong> ${escapeHtml(enLead)}</div>`}
                  ${commLead ? `<div style="font-size:0.81rem;color:var(--text-muted);margin-top:0.35rem;"><em>${enM ? "Commentary:" : "Chú giải:"}</em> ${escapeHtml(commLead)}</div>` : ""}
                  ${extraQ.length ? `
                    <details style="margin-top:0.75rem;border-top:1px dashed var(--border-subtle);padding-top:0.55rem;">
                      <summary style="cursor:pointer;font-size:0.82rem;font-weight:600;color:var(--crimson-accent);list-style:none;">${enM ? `Read all ${(quotes.length || excerpts.length)} classical passages (${extraQ.length} additional passages) →` : `Xem toàn bộ ${(quotes.length || excerpts.length)} danh ngôn kinh điển nguyên bản (${extraQ.length} đoạn bổ sung) →`}</summary>
                      <div style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.7rem;">
                        ${extraQ.map((q, qIdx) => {
                          const qZh = q.zh || q.hanziSc || "";
                          const qComm = enM ? (q.commentaryEn || "") : (q.commentary || "");
                          return `
                            <div style="padding-top:0.55rem;border-top:1px solid var(--border-subtle);">
                              <div class="hanzi" style="font-size:1rem;color:var(--text-primary);"><strong>${qIdx + 2}.</strong> “${escapeHtml(qZh)}”</div>
                              <div class="pinyin" style="font-size:0.81rem;margin:0.2rem 0;">${escapeHtml(q.pinyin || "")}</div>
                              ${q.hanViet ? `<div style="font-size:0.8rem;color:var(--crimson-accent);font-weight:600;">${enM ? "Sino–Viet:" : "Hán–Việt:"} ${escapeHtml(q.hanViet)}</div>` : ""}
                              ${enM
                                ? `<div style="font-size:0.82rem;color:var(--text-secondary);margin-top:0.2rem;"><strong>EN:</strong> ${escapeHtml(q.en || q.passageTitleEn || "")}</div>`
                                : `<div style="font-size:0.82rem;color:var(--text-secondary);margin-top:0.2rem;"><strong>VI:</strong> ${escapeHtml(q.vi || "")}</div>`}
                              ${qComm ? `<div style="font-size:0.79rem;color:var(--text-muted);margin-top:0.15rem;"><em>${enM ? "Commentary:" : "Chú giải:"}</em> ${escapeHtml(qComm)}</div>` : ""}
                            </div>
                          `;
                        }).join("")}
                      </div>
                    </details>
                  ` : ""}
                </div>
              </article>
            `;
            }).join("")}
          </div>
          ${cPaged.renderControls(enM)}
      `;
    };

    const philCompareHtml = () => `
          <div style="margin-bottom:2rem;">
            <div class="section-header">
              <div>
                <div class="editorial-kicker">${enM ? "Comparative Philosophy • 学派比较研究" : "Phân tích so sánh • 学派比较研究"}</div>
                <h2 class="section-title" style="font-size:1.65rem;">${enM ? "Cross-School Philosophical Comparison Matrix" : "Bảng đối chiếu các trường phái triết học"}</h2>
              </div>
            </div>
            <div class="academic-table-wrap">
              <table class="academic-table">
                <thead>
                  <tr>
                    <th>${enM ? "Comparative Axis" : "Trục so sánh"}</th>
                    <th>${enM ? "Confucianism 儒家" : "Nho gia 儒家"}</th>
                    <th>${enM ? "Daoism 道家" : "Đạo gia 道家"}</th>
                    <th>${enM ? "Legalism 法家" : "Pháp gia 法家"}</th>
                    <th>${enM ? "Buddhism 佛教" : "Phật giáo 佛教"}</th>
                    <th>${enM ? "Mohism 墨家" : "Mặc gia 墨家"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${Philosophy.comparisonMatrix
                    .map(
                      (row) => `
                        <tr>
                          <td><strong>${escapeHtml(enVal(row, "dimension"))}</strong></td>
                          <td>${escapeHtml(enVal(row, "confucianism"))}</td>
                          <td>${escapeHtml(enVal(row, "daoism"))}</td>
                          <td>${escapeHtml(enVal(row, "legalism"))}</td>
                          <td>${escapeHtml(enVal(row, "buddhism"))}</td>
                          <td>${escapeHtml(enVal(row, "mohism"))}</td>
                        </tr>
                      `
                    )
                    .join("")}
                </tbody>
              </table>
            </div>
          </div>
          ${window.CCE_V3_W5 ? window.CCE_V3_W5.renderConceptPairsStudio(enM) : ""}
    `;

    const philSubpages = [
      { id: "schools", labelVi: "12 trường phái tư tưởng", labelEn: "12 Schools of Thought", count: Philosophy.schools.length, render: philSchoolsHtml },
      { id: "classics", labelVi: "Kinh điển nguyên bản", labelEn: "Primary Classics", count: Philosophy.classicalTexts.length, render: philClassicsHtml },
      { id: "yijing", labelVi: "Xưởng Kinh Dịch 64 quẻ", labelEn: "64-Hexagram Lab", count: 64, render: philYijingHtml },
      { id: "compare", labelVi: "Ma trận và cặp khái niệm", labelEn: "Matrices & Concepts", render: philCompareHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enM ? "Chinese Philosophy and Classics · 中国哲学与思想" : "Triết học và kinh điển · 中国哲学与思想"}</div>
          <h1>${enM ? "Chinese philosophy and classical thought traditions" : "Triết học và tư tưởng Trung Hoa"}</h1>
          <p class="section-subtitle">
            ${enM
              ? `An analytical archive spanning ${Philosophy.schools.length} philosophical traditions, ${Philosophy.classicalTexts.length} foundational classics, 64 Yijing hexagrams, and cross-school synthesis.`
              : `Phân tích chuyên sâu ${Philosophy.schools.length} truyền thống tư tưởng, ${Philosophy.classicalTexts.length} bộ kinh điển gốc, 64 quẻ Kinh Dịch và bảng đối chiếu liên trường phái.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("philosophy", philSubpages, { enM }) : `<section class="page-section"><div class="container">${philSchoolsHtml()}${philClassicsHtml()}</div></section>`}
    `;
  }

  // ==========================================================================
  // Page 6: TRADITIONAL CULTURE, METAPHYSICS, ARTS & CONTEMPORARY
  // ==========================================================================
  function renderTraditionalPage() {
    const enM = isEnglishUi();
    const tradCustomsHtml = () => `
      ${renderCustomsTab()}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderIchComparative43(enM) : ""}
    `;
    const tradStageHtml = () => `
      ${renderArtsTab()}
      ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderOperaAndMusicStudio(enM) : ""}
    `;
    const tradCosmologyHtml = () => `
      ${renderMetaphysicsTab()}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderCosmologySuite(enM) : ""}
    `;
    const tradContemporaryHtml = () => `
      ${renderContemporaryTab()}
      ${window.CCE_LAOZIHAO_PAVILION ? window.CCE_LAOZIHAO_PAVILION.renderPavilion(enM) : ""}
    `;

    const tradSubpages = [
      { id: "customs", labelVi: "Lễ nghi, trà đạo và ẩm thực", labelEn: "Customs, Tea & Cuisine", count: CustomsArt.customs.length, render: tradCustomsHtml },
      { id: "stage", labelVi: "Mỹ học, kịch khúc và Bát âm", labelEn: "Aesthetics, Opera & Music", count: CustomsArt.arts.length, render: tradStageHtml },
      { id: "cosmology", labelVi: "Vũ trụ luận và thuật số", labelEn: "Cosmology & Bagua", count: Metaphysics.systems.length, render: tradCosmologyHtml },
      { id: "contemporary", labelVi: "Thương hiệu lâu đời và đương đại", labelEn: "Heritage Brands & Today", count: CustomsArt.contemporary.length, render: tradContemporaryHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enM ? "Traditional Culture, Arts and Cosmology · 传统文化与艺术" : "Văn hóa cổ truyền, nghệ thuật và thuật số · 传统文化与艺术"}</div>
          <h1>${enM ? "Traditional culture, cosmology, aesthetics and contemporary evolution" : "Văn hóa truyền thống, thuật số, mỹ học và đương đại"}</h1>
          <p class="section-subtitle">
            ${enM
              ? `Comprehensive synthesis spanning ${Metaphysics.systems.length} classical cosmological frameworks with strict epistemological framing, ${CustomsArt.customs.length} social customs and tea traditions, ${CustomsArt.arts.length} aesthetic disciplines, and ${CustomsArt.contemporary.length} contemporary transitions.`
              : `Tổng hợp vũ trụ luận và thuật số (${Metaphysics.systems.length} hệ thống với ranh giới nhận thức luận rõ ràng), ${CustomsArt.customs.length} tập quán xã hội, ${CustomsArt.arts.length} lĩnh vực mỹ học và ${CustomsArt.contemporary.length} chuyển biến đương đại.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("traditional", tradSubpages, { enM }) : `<section class="page-section"><div class="container">${renderAcademicSectionBanner("traditional")}${tradCustomsHtml()}</div></section>`}
    `;
  }

  function renderMetaphysicsTab() {
    const enM = isEnglishUi();
    return `
      ${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.renderLiveSolarTermWidget(enM) : ""}
      <div class="epistemic-box critical" style="margin-bottom:1.75rem;">
        <div class="epistemic-title">${escapeHtml(enVal(Metaphysics.epistemologyBanner, "title"))}</div>
        <p style="margin:0;">${escapeHtml(enVal(Metaphysics.epistemologyBanner, "description"))}</p>
      </div>

      ${window.CCE_3D_ARMILLARY ? `<section class="card mb-2" style="padding:1.1rem 1.25rem;border-top:3px solid var(--antique-gold);">${window.CCE_3D_ARMILLARY.renderPanel(enM)}</section>` : ""}

      <div class="grid grid-2" style="margin-bottom:2rem;">
        <div class="card">
          <h3 class="card-title">${enM ? "Five Phases Dynamics (五行生克)" : "Sơ đồ Vận động Ngũ Hành (五行生克)"}</h3>
          <p style="font-size:0.86rem;">${enM ? "Generating (Sheng) and Restraining (Ke) cycles across classical cosmology and traditional medicine." : "Quan hệ nuôi dưỡng (Sinh) và điều tiết kìm hãm (Khắc) trong vũ trụ luận và Đông y cổ truyền."}</p>
          ${Visuals.renderFiveElementsSVG(Metaphysics.fiveElementsGraph, enM)}
        </div>

        <div class="card">
          <h3 class="card-title">${enM ? "Bagua Trigram Matrix (八卦符号)" : "Cấu trúc Ký hiệu Bát Quái (八卦符号)"}</h3>
          <p style="font-size:0.86rem;">${enM ? "Eight three-line Yin–Yang combinations forming the 64 hexagrams of the Zhouyi." : "Tám tổ hợp ba hào Âm–Dương làm cơ sở tạo 64 quẻ Chu Dịch."}</p>
          <div class="grid grid-2" style="gap:0.65rem;">
            ${Metaphysics.baguaList
              .map(
                (b) => `
                  <div class="flashcard-layer" style="display:flex;align-items:center;gap:0.65rem;">
                    <span style="font-size:1.7rem;color:var(--imperial-red);line-height:1;">${b.symbol}</span>
                    <div>
                      <strong>${escapeHtml(enVal(b, "nameVi"))} (<span class="hanzi">${b.zh}</span>)</strong> • ${escapeHtml(enVal(b, "element"))}<br>
                      <span style="font-size:0.78rem;color:var(--text-muted);">${escapeHtml(enVal(b, "nature"))} • ${escapeHtml(enVal(b, "quality"))}</span>
                    </div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>

      <div class="grid grid-2">
        ${Metaphysics.systems
          .map(
            (sys, sIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("metaphysics", sys.id, sIdx), `${enVal(sys, "category")} • ${sys.nameZh}`)}
                <div class="card-header-row">
                  <span class="badge badge-gold">${escapeHtml(enVal(sys, "category"))}</span>
                  <span class="card-title-zh">${sys.nameZh}</span>
                </div>
                <h3 class="card-title">${escapeHtml(enM ? (sys.nameEn || sys.nameVi) : `${sys.nameVi} (${sys.nameEn})`)}</h3>
                <p style="font-size:0.88rem;"><strong>${enM ? "Origins:" : "Nguồn gốc:"}</strong> ${escapeHtml(enVal(sys, "origins"))}</p>
                <p style="font-size:0.88rem;"><strong>${enM ? "Structure:" : "Cấu trúc:"}</strong> ${escapeHtml(enVal(sys, "structure"))}</p>
                <p style="font-size:0.85rem;"><strong>${enM ? "Classics:" : "Kinh điển:"}</strong> ${((enM && sys.classicalTextsEn) || sys.classicalTexts || []).join(" • ")}</p>
                <p style="font-size:0.85rem;"><strong>${enM ? "Lineages:" : "Trường phái:"}</strong> ${escapeHtml(enVal(sys, "schools"))}</p>
                <div class="epistemic-box warning" style="margin-top:auto;margin-bottom:0;font-size:0.83rem;">
                  <div class="epistemic-title">${enM ? "Epistemological Distinction" : "Phân tách Nhận thức luận"}</div>
                  <div><strong>• ${enM ? "Historical evidence:" : "Chứng cứ sử học:"}</strong> ${escapeHtml(enVal(sys.epistemicNote, "historical"))}</div>
                  <div><strong>• ${enM ? "Philosophical reading:" : "Diễn giải triết học:"}</strong> ${escapeHtml(enVal(sys.epistemicNote, "philosophical"))}</div>
                  <div><strong>• ${enM ? "Scientific boundary:" : "Ranh giới khoa học:"}</strong> ${escapeHtml(enVal(sys.epistemicNote, "empiricalScience"))}</div>
                </div>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderCustomsTab() {
    const enM = isEnglishUi();
    const teaData = Compendia && Compendia.teaAndLaozihao;
    return `
      ${teaData ? `
        <div class="card mb-2" style="border-color:var(--border-gold);background:var(--bg-accent-soft);">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.65rem;">
            <div>
              <span class="badge badge-red">${enM ? "Field Handbook 2026 · 茶道与中华老字号" : "Tích hợp Cẩm nang Thực địa 2026 • 茶道与中华老字号"}</span>
              <h3 style="margin:0.35rem 0 0.15rem;">${enM ? "Six Major Tea Categories, Finger-Tap Etiquette &amp; 1,455 Time-Honored Brands" : "Lục Đại Trà Loại (6 Họ Trà), Nghi thức Khấu Thủ Lễ &amp; 1.455 Thương hiệu Trung Hoa Lão Tự Hiệu"}</h3>
            </div>
            <button type="button" class="btn btn-primary btn-sm" data-action="open-library-tab" data-tab="compendia">${enM ? "Open Full Tea &amp; Brands Handbook →" : "Mở Cẩm nang Trà &amp; Lão Tự Hiệu Đầy đủ →"}</button>
          </div>
          <p style="font-size:0.86rem;margin-bottom:0.65rem;"><strong>${enM ? "Finger-Tap Courtesy (叩手礼):" : "Khấu thủ lễ (叩手礼):"}</strong> ${escapeHtml(enVal(teaData, "koushouLi"))}</p>
          <div class="grid grid-3" style="gap:0.65rem;">
            ${(teaData.sixTeaCategories || []).map((tc) => `
              <div class="flashcard-layer" style="font-size:0.8rem;">
                <strong>${escapeHtml(enVal(tc, "type"))}</strong> • ${enM ? "Oxidation:" : "Lên men:"} ${escapeHtml(enVal(tc, "fermentation"))} • ${enM ? "Temp:" : "Nhiệt độ:"} <strong>${escapeHtml(enVal(tc, "temp"))}</strong><br>
                <span style="color:var(--text-secondary);">${enM ? "Signature Teas:" : "Danh trà:"} ${escapeHtml(enVal(tc, "famous"))}</span>
              </div>
            `).join("")}
          </div>
        </div>
      ` : ""}
      <div class="grid grid-3">
        ${CustomsArt.customs
          .map(
            (c, cIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("customs", c.id, cIdx + 2), `${c.nameZh} • ${enM ? "Custom" : "Tập quán"}`)}
                <div class="card-header-row">
                  <span class="card-title-zh">${c.nameZh}</span>
                  <span class="badge badge-outline">${enM ? "Social Custom" : "Tập quán Xã hội"}</span>
                </div>
                <h3 class="card-title" style="font-size:1.2rem;">${escapeHtml(enM ? (c.nameEn || c.nameVi) : `${c.nameVi} (${c.nameEn})`)}</h3>
                <p style="font-size:0.86rem;"><strong>${enM ? "Origins:" : "Nguồn gốc:"}</strong> ${escapeHtml(enVal(c, "origins"))}</p>
                <p style="font-size:0.86rem;"><strong>${enM ? "Symbolism:" : "Biểu tượng:"}</strong> ${escapeHtml(enVal(c, "symbolism"))}</p>
                <p style="font-size:0.86rem;"><strong>${enM ? "Regional Variation:" : "Khác biệt vùng miền:"}</strong> ${escapeHtml(enVal(c, "regionalDiff"))}</p>
                <p style="font-size:0.86rem;margin-bottom:0;"><strong>${enM ? "Modern Evolution:" : "Biến đổi hiện đại:"}</strong> ${escapeHtml(enVal(c, "modernTransform"))}</p>
              </article>
            `
          )
          .join("")}
      </div>
      ${window.CCE_CIV_ATLAS ? window.CCE_CIV_ATLAS.renderCustomsExpansion(enM) : ""}
    `;
  }

  function renderArtsTab() {
    const enM = isEnglishUi();
    return `
      <div class="museum-artwork-banner">
        ${Visuals.renderGreatWallInkHTML("水墨留白")}
        <div>
          <div class="editorial-kicker">${enM ? "Ink Aesthetics Evidence • 水墨山水美学" : "Thực chứng Mỹ học Thủy mặc • 水墨山水美学"}</div>
          <h2 style="font-size:1.45rem;margin:0.25rem 0 0.6rem;">${enM ? "Five Tonal Shades of Ink (墨分五色) &amp; Active Void (留白)" : "Mặc phân Ngũ sắc (墨分五色) &amp; Kỹ pháp Lưu bạch (留白)"}</h2>
          <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.85rem;">
            ${enM
              ? "This ink-wash panorama of the Great Wall demonstrates classical Chinese pictorial aesthetics: five ink tonalities (scorched, dense, heavy, pale, luminous) sculpting cliffside structure against uninked clouds of active void (Liubai)."
              : "Tác phẩm sơn thủy Vạn Lý Trường Thành minh họa trực quan tinh thần hội họa thủy mặc cổ điển: năm sắc độ mực (Tiêu – Nùng – Trọng – Đạm – Thanh) tạo khối núi đá đối sánh với khoảng trắng biển mây (<i>Lưu bạch</i>) gợi khí vận vô tận ngoài khung tranh."}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
            <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="ink-wash-painting">${enM ? "Read Ink-Wash Monograph →" : "Đọc Chuyên luận Hội họa Thủy mặc →"}</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="museum">${enM ? "Open Digital Museum →" : "Mở Bảo tàng Mỹ thuật →"}</button>
          </div>
        </div>
      </div>

      ${window.CCE_PENTATONIC_STUDIO ? window.CCE_PENTATONIC_STUDIO.renderStudio(enM) : ""}
      ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderPentatonicResonator(enM) : ""}

      <div class="grid grid-2">
        ${CustomsArt.arts
          .map(
            (a, aIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("arts", a.id, aIdx + 6), `${a.nameZh} • ${enM ? "Aesthetics" : "Mỹ học"}`)}
                <div class="card-header-row">
                  <span class="badge badge-red">${enM ? "Classical Aesthetics" : "Mỹ học Cổ truyền"}</span>
                  <span class="card-title-zh">${a.nameZh}</span>
                </div>
                <h3 class="card-title">${escapeHtml(enM ? (a.nameEn || a.nameVi) : `${a.nameVi} (${a.nameEn})`)}</h3>
                <p style="font-size:0.9rem;"><strong>${enM ? "Aesthetic Core:" : "Cốt lõi Thẩm mỹ:"}</strong> ${escapeHtml(enVal(a, "aestheticCore"))}</p>
                <p style="font-size:0.88rem;"><strong>${enM ? "Historical Evolution:" : "Tiến trình Phát triển:"}</strong> ${escapeHtml(enVal(a, "evolution"))}</p>
                <p style="font-size:0.85rem;margin-bottom:0;color:var(--jade-green);"><strong>${enM ? "Masters &amp; Legacy:" : "Bậc thầy &amp; Di sản:"}</strong> ${escapeHtml(enVal(a, "masters"))}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  function renderContemporaryTab() {
    const enM = isEnglishUi();
    return `
      <div class="card mb-2" style="border-color:var(--border-gold);background:var(--bg-accent-soft);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;">
        <div>
          <span class="badge badge-red">${enM ? "2026 Research Dossier · 中国人工智能与半导体革命" : "Báo cáo Chuyên khảo 2026 • 中国人工智能与半导体革命"}</span>
          <h3 style="margin:0.3rem 0 0.15rem;">${enM ? "China AI &amp; Semiconductor Ecosystem 2026: DeepSeek-R1/V3, Qwen, Ascend &amp; Domestic Nodes" : "Cách mạng AI Trung Quốc 2026: DeepSeek-R1/V3, Qwen 2.5, Huawei Ascend 910C &amp; SMIC 7nm"}</h3>
          <p style="font-size:0.84rem;color:var(--text-secondary);margin:0;">${enM ? "Architecture breakdown of MLA, GRPO, open-weights API economics, and 12 industrial AI deployments." : "Tích hợp đầy đủ kiến trúc MLA, GRPO, cuộc chiến giá API giảm 99% và 12 Case Studies AI công nghiệp."}</p>
        </div>
        <button type="button" class="btn btn-primary btn-sm" data-action="open-library-tab" data-tab="compendia">${enM ? "Explore 2026 AI Dossier →" : "Xem Nghiên cứu AI 2026 →"}</button>
      </div>
      <div class="grid grid-3">
        ${CustomsArt.contemporary
          .map(
            (item, iIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("contemporary", item.id, iIdx + 10), `${item.nameZh} • ${enM ? "Contemporary" : "Đương đại"}`)}
                <div class="card-header-row">
                  <span class="badge badge-jade">${enM ? "Contemporary" : "Đương đại"}</span>
                  <span class="card-title-zh">${item.nameZh}</span>
                </div>
                <h3 class="card-title" style="font-size:1.18rem;">${escapeHtml(enM ? (item.nameEn || item.nameVi) : item.nameVi)}</h3>
                ${enM ? "" : `<div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.5rem;">${escapeHtml(item.nameEn || "")}</div>`}
                <p style="font-size:0.88rem;margin-bottom:0;">${escapeHtml(enVal(item, "summary"))}</p>
              </article>
            `
          )
          .join("")}
      </div>
    `;
  }

  // ==========================================================================
  // Page 7: REGIONS (3 Modes: Interactive Map, 16 City Cards, 34-Province Directory)
  // ==========================================================================
  function getProvincesForMacroRegion(provinces, macroId) {
    if (macroId === "all") return provinces;
    if (macroId === "south") {
      return provinces.filter((pr) => pr.regionId === "south" || pr.regionId === "central");
    }
    return provinces.filter((pr) => pr.regionId === macroId);
  }

  function renderProvincesDirectoryContent() {
    const enM = isEnglishUi();
    const help = getEnHelp();
    const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
    const pq = normalizeText(ui.provinceQuery || "");
    const regionScopedProvinces = getProvincesForMacroRegion(provinces, ui.provinceRegionFilter);
    const dims = Array.isArray(ui.provinceDims) ? ui.provinceDims : [];
    const filteredProvinces = regionScopedProvinces.filter((pr) => {
      if (dims.length && window.CCE_V3_MODS && !window.CCE_V3_MODS.matchesMultiFilter(pr, dims)) return false;
      if (!pq) return true;
      return normalizeText(`${pr.nameVi} ${pr.nameEn} ${pr.nameZh} ${pr.capital} ${pr.highlights} ${pr.cuisine || ""} ${pr.landmark || ""}`).includes(pq);
    });

    const filterSig = [pq, ui.provinceRegionFilter, dims.join(",")].join("|");
    const Pager = window.CCE_V10_PAGINATOR;
    const prPaged = Pager
      ? Pager.paginate(filteredProvinces, "provinces", { filterSig, desktopPerPage: 12, mobilePerPage: 8 })
      : { slice: filteredProvinces, renderControls: () => "" };
    const visibleProvinces = prPaged.slice;

    return `
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;font-size:0.86rem;color:var(--text-secondary);">
        <span>${enM ? `Showing <strong>${visibleProvinces.length}</strong> of <strong>${filteredProvinces.length}</strong> / ${provinces.length} provincial divisions` : `Đang xem <strong>${visibleProvinces.length}</strong> / <strong>${filteredProvinces.length}</strong> đơn vị hành chính (tổng ${provinces.length})`}</span>
        ${(ui.provinceRegionFilter !== "all" || dims.length || ui.provinceQuery.trim())
          ? `<button type="button" class="btn btn-secondary btn-sm" data-action="clear-province-filters">${ICONS.close} ${enM ? "Clear Filters" : "Xóa bộ lọc tỉnh thành"}</button>`
          : ""}
      </div>
      ${filteredProvinces.length === 0 ? renderSmartEmptyState({
        query: ui.provinceQuery,
        resetAction: "clear-province-filters",
        resetLabel: enM ? `Reset and show all ${provinces.length} divisions` : `Xóa bộ lọc và xem lại ${provinces.length} tỉnh thành`,
        scopeLabel: enM ? "34 Provincial Administrative Divisions" : "Danh bạ 34 đơn vị hành chính cấp tỉnh",
        targetField: "provinces",
        suggestions: enM ? ["Beijing", "Sichuan", "Yunnan", "Guangdong", "Guangxi"] : ["Bắc Kinh", "Tứ Xuyên", "Vân Nam", "Quảng Đông", "Quảng Tây"]
      }) : `
        <div class="grid grid-3">
          ${visibleProvinces.map((pr, pIdx) => {
            const provPhoto = pr.image ? { src: pr.image, caption: enVal(pr, "landmark") || (enM ? pr.nameEn : pr.nameVi), credit: "" } : getAcademicPhotoForItem("regions", pr.regionId, pIdx);
            const pTypeLabel = help.provinceTypeEn ? help.provinceTypeEn(pr.type, enM) : (pr.type === "Thành phố trực thuộc TW" ? "Đô thị trung ương" : pr.type);
            const pMainName = enM ? (pr.nameEn || pr.nameVi) : pr.nameVi;
            const pSubName = enM ? pr.nameVi : pr.nameEn;
            return `
            <article class="card interactive" style="display:flex;flex-direction:column;">
              ${renderAcademicCardThumb(provPhoto, `${pTypeLabel} • ${cleanAbbrEn(pr.abbr || pr.nameZh, enM)}`)}
              <div class="card-header-row" style="gap:0.45rem;align-items:center;flex-wrap:wrap;">
                <span class="badge badge-gold" style="white-space:nowrap;flex-shrink:0;">${escapeHtml(pTypeLabel)}</span>
                <span class="card-title-zh" style="display:inline-flex;align-items:center;gap:0.3rem;white-space:nowrap;">${escapeHtml(cleanAbbrEn(pr.headerFormatted || `${pr.nameZh}${pr.abbr ? ` · ${pr.abbr}` : ""}`, enM))} ${renderSpeakBtn(pr.nameZh, enM ? "Listen to Chinese name" : "Nghe phát âm tên tỉnh thành")}</span>
              </div>
              <h3 class="card-title" style="font-size:1.15rem;">${escapeHtml(pMainName)}${enM ? "" : ` <span style="font-weight:400;font-size:0.9rem;color:var(--text-muted);">(${escapeHtml(pSubName)})</span>`}</h3>
              ${pr.landmark ? `<p style="font-size:0.81rem;color:var(--antique-gold);margin-bottom:0.3rem;"><strong>${enM ? "Landmarks:" : "Danh thắng:"}</strong> ${escapeHtml(enVal(pr, "landmark"))}</p>` : ""}
              <p style="font-size:0.83rem;margin-bottom:0.3rem;"><strong>${enM ? "Capital:" : "Thủ phủ:"}</strong> ${escapeHtml(enVal(pr, "capital"))}</p>
              ${pr.bestSeason ? `<p style="font-size:0.81rem;margin-bottom:0.3rem;color:var(--jade-green);"><strong>${enM ? "Best Season:" : "Mùa đẹp nhất:"}</strong> ${escapeHtml(enVal(pr, "bestSeason"))}</p>` : ""}
              ${pr.cuisine ? `<p style="font-size:0.81rem;margin-bottom:0.35rem;color:var(--text-secondary);"><strong>${enM ? "Cuisine:" : "Ẩm thực:"}</strong> ${escapeHtml(enVal(pr, "cuisine"))}</p>` : ""}
              <p style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.85rem;flex:1;"><strong>${enM ? "Highlights:" : "Đặc trưng:"}</strong> ${escapeHtml(enVal(pr, "highlights"))}</p>
              <div class="card-footer-row" style="display:flex;gap:0.45rem;justify-content:space-between;margin-top:auto;">
                <button type="button" class="btn btn-primary btn-sm" style="flex:1;" data-action="open-province-detail" data-id="${pr.id}">${enM ? "Open Dossier →" : "Hồ sơ tỉnh →"}</button>
                <button type="button" class="btn btn-secondary btn-sm" data-action="compare-with-province" data-id="${pr.id}" title="${enM ? "Compare side-by-side" : "Đặt làm vế so sánh"}">${enM ? "Compare" : "Đối chiếu"}</button>
              </div>
            </article>
          `;}).join("")}
        </div>
        ${prPaged.renderControls(enM)}
      `}
    `;
  }

  function renderDestinationsDeepAtlas() {
    const atlas = window.CCE_DESTINATIONS_ATLAS;
    if (!atlas || !Array.isArray(atlas.hubs) || !atlas.hubs.length) return "";
    const enM = isEnglishUi();
    const hubs = atlas.hubs;
    const corridors = atlas.corridors || [];
    const activeHub = hubs.find((h) => h.id === ui.activeDestHubId) || hubs[0];
    const areas = activeHub.areas || [];
    const activeArea = areas.find((a) => a.id === ui.activeDestAreaId) || areas[0];
    const spots = (activeArea && activeArea.spots) || [];

    return `
      <div class="dest-atlas-shell">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.45rem;">
          <div>
            <div class="editorial-kicker">${enM ? "STAGE 1 DEEP TOURISM DATA • LEVEL 1 → LEVEL 2 → LEVEL 3" : "DỮ LIỆU DU LỊCH CHUYÊN SÂU 3 CẤP • CẤP TỈNH → CỤM ĐÔ THỊ → DANH THẮNG 5A"}</div>
            <h2 style="font-family:var(--font-editorial);font-size:1.55rem;margin:0.15rem 0;">
              ${enM ? `3-Level Travel Atlas & High-Speed Rail Guide (${hubs.length}/34 Divisions)` : `Cẩm nang Điểm đến 3 Cấp Toàn Quốc (${hubs.length}/34 Tỉnh Thành)`}
            </h2>
          </div>
          ${activeHub.provinceId ? `
            <button type="button" class="btn btn-secondary btn-sm" data-action="open-province-detail" data-id="${escapeHtml(activeHub.provinceId)}">
              ${enM ? "Open Full 12-Dim Provincial Dossier →" : "Mở Hồ sơ 12 Chiều Tỉnh này →"}
            </button>
          ` : ""}
        </div>

        <div class="dest-hub-grid" role="tablist" aria-label="${enM ? "Level 1 Provincial Destination Hubs" : "Cấp 1: Chọn Tỉnh/Thành Điểm đến Trọng điểm"}">
          ${hubs.map((h) => `
            <button type="button" class="filter-pill ${h.id === activeHub.id ? "active" : ""}" data-action="dest-select-hub" data-id="${escapeHtml(h.id)}">
              ${escapeHtml(enM ? h.nameEn : h.nameVi)} <span class="hanzi">${escapeHtml(h.nameZh)}</span>
            </button>
          `).join("")}
        </div>

        <div class="dest-level-box">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.45rem;">
            <div>
              <span class="badge badge-gold">${escapeHtml(enM ? activeHub.tierBadgeEn : activeHub.tierBadgeVi)}</span>
              <strong style="margin-left:0.45rem;font-size:1.05rem;">${escapeHtml(enM ? activeHub.nameEn : activeHub.nameVi)} (<span class="hanzi">${escapeHtml(activeHub.nameZh)}</span>)</strong>
            </div>
            <span style="font-size:0.78rem;color:var(--jade-green);font-weight:600;">${escapeHtml(enM ? activeHub.bestSeasonEn : activeHub.bestSeasonVi)}</span>
          </div>
          <p style="font-size:0.86rem;line-height:1.58;margin:0 0 0.55rem;">${escapeHtml(enM ? activeHub.overviewEn : activeHub.overviewVi)}</p>
          <div class="grid grid-2" style="gap:0.65rem;font-size:0.8rem;">
            <div style="background:var(--bg-paper);border:1px solid var(--hairline);padding:0.55rem 0.7rem;">
              <strong style="color:var(--imperial-red);">${enM ? "Airports & 12306 Rail Hubs:" : "Sân bay & Ga Cao tốc 12306:"}</strong><br>
              <span style="color:var(--text-secondary);">${escapeHtml(enM ? activeHub.gatewayEn : activeHub.gatewayVi)}</span>
            </div>
            <div style="background:var(--bg-paper);border:1px solid var(--hairline);padding:0.55rem 0.7rem;">
              <strong style="color:var(--jade-green);">${enM ? "Passport & Field Booking Note:" : "Lưu ý Hộ chiếu & Đặt vé Thực địa:"}</strong><br>
              <span style="color:var(--text-secondary);">${escapeHtml(enM ? activeHub.passportNoteEn : activeHub.passportNoteVi)}</span>
            </div>
          </div>
        </div>

        <div style="margin-bottom:0.55rem;">
          <div style="font-size:0.76rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.35rem;">
            ${enM ? `Level 2 · Key Cities & Scenic Zones (${areas.length})` : `Cấp 2 · Đô thị & Phân khu Trải nghiệm (${areas.length})`}
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:0.38rem;">
            ${areas.map((a) => `
              <button type="button" class="filter-pill ${activeArea && a.id === activeArea.id ? "active" : ""}" data-action="dest-select-area" data-id="${escapeHtml(a.id)}">
                ${escapeHtml(enM ? a.nameEn : a.nameVi)} <span class="hanzi">${escapeHtml(a.nameZh)}</span>
              </button>
            `).join("")}
          </div>
          ${activeArea ? `
            <p style="font-size:0.81rem;color:var(--text-secondary);margin:0.45rem 0 0;">
              <strong>${enM ? "Local Transit:" : "Di chuyển nội vùng:"}</strong> ${escapeHtml(enM ? activeArea.transitEn : activeArea.transitVi)}
            </p>
          ` : ""}
        </div>

        <div style="font-size:0.76rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.04em;margin:0.9rem 0 0.2rem;">
          ${enM ? `Level 3 · Official Scenic Spots & Authentic Food Pairings (${spots.length})` : `Cấp 3 · Danh thắng 5A/UNESCO, Trải nghiệm & Ẩm thực Bản địa (${spots.length})`}
        </div>
        <div class="dest-spots-grid">
          ${spots.map((sp) => `
            <article class="dest-spot-card">
              <div class="dest-spot-thumb">
                <img src="${escapeHtml(sp.img || activeHub.heroImg)}" alt="${escapeHtml(enM ? sp.nameEn : sp.nameVi)}" loading="lazy" decoding="async" />
                <button type="button" class="btn btn-sm" style="position:absolute;top:0.45rem;right:0.5rem;padding:0.15rem 0.45rem;font-size:0.68rem;background:rgba(15,16,18,0.74);color:#F2EFE9;border:1px solid rgba(255,255,255,0.22);" data-action="open-custom-image" data-src="${escapeHtml(sp.img || activeHub.heroImg)}" data-caption="${escapeHtml(enM ? sp.nameEn : sp.nameVi)}" data-credit="">${ICONS.zoom}</button>
              </div>
              <div style="padding:0.8rem 0.9rem;display:flex;flex-direction:column;flex:1;gap:0.35rem;">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;flex-wrap:wrap;">
                  <span class="badge badge-red" style="font-size:0.68rem;">${escapeHtml(sp.rating)}</span>
                  <span class="hanzi" style="font-size:0.85rem;color:var(--imperial-red);font-weight:700;">${escapeHtml(sp.nameZh)} ${renderSpeakBtn(sp.nameZh)}</span>
                </div>
                <h4 style="margin:0.1rem 0;font-size:1.02rem;">${escapeHtml(enM ? sp.nameEn : sp.nameVi)}</h4>
                <p style="font-size:0.81rem;line-height:1.5;margin:0;color:var(--text-secondary);">${escapeHtml(enM ? sp.expEn : sp.expVi)}</p>
                <p style="font-size:0.79rem;line-height:1.45;margin:0.15rem 0 0;"><strong>${enM ? "Must-Try Dishes:" : "Ẩm thực gợi ý:"}</strong> ${escapeHtml(enM ? sp.foodEn : sp.foodVi)}</p>
                <p style="font-size:0.76rem;line-height:1.42;margin:auto 0 0;padding-top:0.35rem;border-top:1px dashed var(--hairline);color:var(--jade-green);">
                  <strong>${enM ? "Entry Note:" : "Đặt vé & Lưu ý:"}</strong> ${escapeHtml(enM ? sp.bookingEn : sp.bookingVi)}
                </p>
              </div>
            </article>
          `).join("")}
        </div>

        ${corridors.length ? `
          <div style="margin-top:1.25rem;padding-top:1rem;border-top:1px solid var(--border-subtle);">
            <div style="font-size:0.76rem;font-weight:700;color:var(--imperial-red);text-transform:uppercase;letter-spacing:0.04em;margin-bottom:0.55rem;">
              ${enM ? "Cross-Province HSR Intercity Loops" : "5 Hành lang Đường sắt Cao tốc Liên tỉnh Tiêu biểu (Việt–Trung & Nội địa)"}
            </div>
            <div class="grid grid-2" style="gap:0.65rem;">
              ${corridors.map((cr) => `
                <div class="dest-corridor-card">
                  <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.2rem;">
                    <strong>${escapeHtml(enM ? cr.nameEn : cr.nameVi)}</strong>
                    <span class="badge badge-outline" style="font-size:0.68rem;">${escapeHtml(enM ? cr.durationEn : cr.durationVi)}</span>
                  </div>
                  <div class="hanzi" style="font-size:0.8rem;color:var(--imperial-red);margin-bottom:0.2rem;">${escapeHtml(cr.stopsZh)}</div>
                  <div style="font-size:0.79rem;color:var(--text-secondary);line-height:1.45;">${escapeHtml(enM ? cr.highlightsEn : cr.highlightsVi)}</div>
                </div>
              `).join("")}
            </div>
          </div>
        ` : ""}
      </div>
    `;
  }

  function renderRegionsPage() {
    const enM = isEnglishUi();
    const help = getEnHelp();
    const activeRegion = Regions.macroRegions.find((r) => r.id === ui.activeRegionId) || Regions.macroRegions[0];
    const activeCity = Regions.cities.find((c) => c.id === ui.activeCityId) || Regions.cities[0];
    const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
    const mapRegionProvinces = getProvincesForMacroRegion(provinces, activeRegion.id);
    const guilinData = Compendia && Compendia.guilin2026;
    const hsrFilters = Array.isArray(ui.mapHsrFilters) ? ui.mapHsrFilters : [];
    const hsrCorridors = [
      { id: "hsr-gba", labelVi: "GBA · Quảng Đông–HK", labelEn: "GBA · GD–HK HSR" },
      { id: "hsr-sw", labelVi: "Tây Nam · Thành Đô–TK", labelEn: "SW · Chengdu–CQ HSR" },
      { id: "hsr-yn", labelVi: "Vân Nam · Côn Minh–LG", labelEn: "YN · Kunming–Lijiang" },
      { id: "hsr-mc", labelVi: "Đông Hưng–Nam Ninh", labelEn: "Dongxing–Nanning" },
      { id: "hsr-jh", labelVi: "Kinh–Hộ · BK–Thượng Hải", labelEn: "Jing–Hu · BJ–SH HSR" },
      { id: "hsr-jgj", labelVi: "Kinh–Quảng–Cảng", labelEn: "Jing–Guang–HK HSR" },
      { id: "hsr-silk", labelVi: "Tơ lụa · Lũng Hải–Tân", labelEn: "Silk Road HSR" },
      { id: "hsr-yangtze", labelVi: "Duyên Giang · SH–Thành Đô", labelEn: "Yangtze River HSR" },
      { id: "hsr-ne", labelVi: "Đông Bắc · BK–Cáp Nhĩ Tân", labelEn: "NE · BJ–Harbin HSR" },
      { id: "hsr-coast", labelVi: "Duyên Hải · Hàng–Hạ–Thâm", labelEn: "SE Coastal HSR" },
      { id: "hsr-xizang", labelVi: "Thanh–Tạng · Lhasa", labelEn: "Qinghai–Tibet Rail" },
      { id: "hsr-huabao", labelVi: "Hoa Bắc · Hô–Ngân–Lan", labelEn: "North Steppe Rail" }
    ];

    const regionsAtlasHtml = () => `
          <div class="card mb-2">
            <div style="display:flex;justify-content:space-between;align-items:end;flex-wrap:wrap;gap:0.85rem;margin-bottom:1rem;">
              <div style="flex:1;min-width:240px;">
                <label for="province-query-input" style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${enM ? "Search Province, Capital, Dish or Heritage" : "Tìm tỉnh, khu tự trị, đô thị, thủ phủ hoặc đặc sản"}</label>
                <input id="province-query-input" type="text" class="form-input" data-action="province-query-input" value="${escapeHtml(ui.provinceQuery)}" placeholder="${enM ? "e.g., Guangdong, Sichuan, Chongqing, Yunnan, Peking duck..." : "Ví dụ: Quảng Đông, Tứ Xuyên, Trùng Khánh, Vân Nam, vịt quay..."}" />
              </div>
              <div style="display:flex;gap:0.5rem;align-items:center;flex-wrap:wrap;">
                <button type="button" class="btn btn-gold btn-sm" data-action="open-province-compare">
                  ${enM ? "Compare 2 Provinces" : "Đối chiếu 2 tỉnh thành"}
                </button>
                <button type="button" class="btn btn-secondary btn-sm" data-action="print-dossier">
                  ${ICONS.fileText} ${enM ? "Print A4 Dossier" : "In hồ sơ A4"}
                </button>
              </div>
            </div>
            <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-bottom:1rem;">
              <button type="button" class="filter-pill ${ui.provinceRegionFilter === "all" ? "active" : ""}" data-action="filter-province-region" data-region="all">${enM ? `All (${provinces.length})` : `Tất cả (${provinces.length})`}</button>
              ${Regions.macroRegions.map((r) => `
                <button type="button" class="filter-pill ${ui.provinceRegionFilter === r.id ? "active" : ""}" data-action="filter-province-region" data-region="${r.id}">${escapeHtml(enVal(r, "nameVi"))} (${getProvincesForMacroRegion(provinces, r.id).length})</button>
              `).join("")}
            </div>
            ${window.CCE_V3_MODS ? window.CCE_V3_MODS.renderMultiFilterStrip(ui.provinceDims, enM) : ""}
            <div id="provinces-grid-slot">
              ${renderProvincesDirectoryContent()}
            </div>
          </div>
    `;

    const regionsSplitAtlasHtml = () => (window.CCE_V9_ATLAS ? window.CCE_V9_ATLAS.renderSection(enM) : "");

    const regionsMap4LayerHtml = () => {
      const selectedMapProv = provinces.find((pr) => pr.id === ui.selectedMapProvinceId) || provinces[0];
      const layerMode = ui.mapLayerMode || "regions";
      return `
          <div class="map-explorer-layout">
            <div class="map-canvas-wrap">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;flex-wrap:wrap;gap:0.4rem;">
                <strong style="font-size:0.88rem;">${enM ? "4-Layer Atlas and 34 Provincial Divisions" : "Bản đồ tương tác 4 lớp và 34 tỉnh thành"}</strong>
                <div style="display:flex;gap:0.35rem;align-items:center;flex-wrap:wrap;">
                  <span class="badge badge-gold" style="font-size:0.7rem;">${enM ? `6 Regions · ${provinces.length} Divs` : `6 vùng · ${provinces.length} tỉnh`}</span>
                  ${window.CCE_CHINA_3D_MAP ? window.CCE_CHINA_3D_MAP.renderViewSwitcher(enM) : ""}
                  <button type="button" class="btn btn-secondary btn-sm" style="padding:0.2rem 0.5rem;font-size:0.74rem;" data-action="open-province-compare">${enM ? "Compare" : "Đối chiếu"}</button>
                </div>
              </div>
              <div class="map-layer-bar" role="tablist" aria-label="${enM ? "Toggle 4 map data layers" : "Chuyển đổi 4 lớp dữ liệu bản đồ"}">
                ${[
                  { id: "regions", label: enM ? "1: 6 Regions" : "Lớp 1: 6 đại vùng" },
                  { id: "admin", label: enM ? "2: 34 Divisions" : "Lớp 2: 34 hành chính" },
                  { id: "capitals", label: enM ? "3: Capitals" : "Lớp 3: Trục cố đô" },
                  { id: "corridors", label: enM ? "4: RCEP & HSR" : "Lớp 4: Kinh tế – RCEP" }
                ].map((ly) => `
                  <button type="button" class="filter-pill ${layerMode === ly.id ? "active" : ""}" data-action="select-map-layer" data-mode="${ly.id}">
                    ${ly.label}
                  </button>
                `).join("")}
              </div>
              <div class="hsr-corridor-bar" role="group" aria-label="${enM ? "12306 HSR Corridor Overlays" : "Lớp phủ hành lang cao tốc 12306"}">
                <span style="font-size:0.7rem;font-weight:700;color:var(--text-muted);text-transform:uppercase;">${enM ? "12306 HSR:" : "Cao tốc 12306:"}</span>
                ${hsrCorridors.map((hc) => `
                  <button type="button" class="hsr-corridor-pill ${hsrFilters.includes(hc.id) ? "active" : ""}" data-action="toggle-map-hsr" data-hsr-id="${hc.id}" aria-pressed="${hsrFilters.includes(hc.id) ? "true" : "false"}">
                    ${escapeHtml(enM ? hc.labelEn : hc.labelVi)}
                  </button>
                `).join("")}
              </div>
              <div style="display:flex;flex-wrap:wrap;gap:0.28rem;margin:0.35rem 0 0.5rem;" role="tablist" aria-label="${enM ? "Quick select 6 Macro-Regions" : "Chọn nhanh 6 đại vùng văn hóa"}">
                ${Regions.macroRegions.map((r) => `
                  <button type="button" class="filter-pill ${activeRegion.id === r.id ? "active" : ""}" data-action="select-region" data-id="${r.id}" style="padding:0.18rem 0.5rem;font-size:0.72rem;">
                    ${escapeHtml(enVal(r, "nameVi"))} <span class="hanzi">${escapeHtml(r.nameZh.replace(/地区/, ""))}</span>
                  </button>
                `).join("")}
              </div>
              ${(window.CCE_CHINA_3D_MAP && window.CCE_CHINA_3D_MAP.is3DMode())
                ? window.CCE_CHINA_3D_MAP.renderContainer(ui.selectedMapProvinceId, enM)
                : Visuals.renderChinaMapSVG(activeRegion.id, activeCity.id, layerMode, ui.selectedMapProvinceId, provinces, { enMode: enM, hsrFilters })}
              <div class="map-legend-strip" style="font-size:0.73rem;margin-top:0.35rem;">
                ${layerMode === "admin"
                  ? (enM
                      ? `<span>● Crimson: 4 Municipalities</span><span>● Jade: 5 Autonomous Regions</span><span>● Gold: 2 SARs</span><span>● Terracotta: 23 Provinces</span>`
                      : `<span>● Đỏ: 4 Đô thị TW</span><span>● Ngọc: 5 Khu Tự trị</span><span>● Vàng kim: 2 Đặc khu</span><span>● Nâu son: 23 Tỉnh</span>`)
                  : layerMode === "capitals"
                  ? (enM
                      ? `<span>◆ Ancient Capitals: Xi'an • Luoyang • Beijing • Nanjing • Hangzhou • Kaifeng</span>`
                      : `<span>◆ Cố đô lịch đại: Tây An • Lạc Dương • Bắc Kinh • Nam Kinh • Hàng Châu • Khai Phong</span>`)
                  : layerMode === "corridors"
                  ? (enM
                      ? `<span>━━ Economic Corridors: Jing-Jin-Ji • YRD • Greater Bay Area • Chengdu–Chongqing</span>`
                      : `<span>━━ Hành lang kinh tế: Jing-Jin-Ji • Trường Giang • Đại Loan Khu GBA • Thành Đô – Trùng Khánh</span>`)
                  : (enM
                      ? `<span>Click any Macro-Region, 16 Historic Cities, or 34 Provincial Pins for instant dossier</span>`
                      : `<span>Nhấp trực tiếp vào từng vùng, 16 đô thị hoặc 34 chấm tỉnh để xem hồ sơ</span>`)}
              </div>
            </div>
            ${(() => {
              const regPhoto = getAcademicPhotoForItem("regions", activeRegion.id, 0);
              const regThumbSrc = regPhoto && regPhoto.src ? regPhoto.src : "";
              return `
            <div class="card map-inspector-panel" style="display:flex;flex-direction:column;gap:0.55rem;">
              ${selectedMapProv ? `
                <div class="crosslink-strip" style="margin:0;padding:0.6rem 0.72rem;border-left:4px solid var(--imperial-red);background:var(--bg-surface);">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;flex-wrap:wrap;margin-bottom:0.25rem;">
                    <span class="badge badge-gold" style="font-size:0.68rem;">${enM ? "Selected Province" : "Tỉnh đang chọn"} • ${escapeHtml(help.provinceTypeEn ? help.provinceTypeEn(selectedMapProv.type, enM) : (selectedMapProv.type || ""))}</span>
                    <span class="hanzi" style="color:var(--imperial-red);font-weight:700;font-size:0.86rem;">${escapeHtml(selectedMapProv.nameZh)}${selectedMapProv.abbr ? ` · ${escapeHtml(cleanAbbrEn(selectedMapProv.abbr, enM))}` : ""}</span>
                  </div>
                  <div style="display:flex;gap:0.6rem;align-items:center;margin-bottom:0.42rem;">
                    ${selectedMapProv.image ? `<img decoding="async"  src="${escapeHtml(selectedMapProv.image)}" alt="${escapeHtml(enM ? (selectedMapProv.nameEn || selectedMapProv.nameVi) : selectedMapProv.nameVi)}" style="width:68px;height:48px;object-fit:cover;flex-shrink:0;border:1px solid var(--hairline);" />` : ""}
                    <div style="min-width:0;flex:1;">
                      <h4 style="margin:0 0 0.12rem;font-size:0.95rem;">${escapeHtml(enM ? (selectedMapProv.nameEn || selectedMapProv.nameVi) : `${selectedMapProv.nameVi} (${selectedMapProv.nameEn})`)}</h4>
                      <p style="font-size:0.76rem;margin:0;color:var(--text-secondary);line-height:1.38;"><strong>${enM ? "Capital:" : "Thủ phủ:"}</strong> ${escapeHtml(enVal(selectedMapProv, "capital"))} • ${escapeHtml((enVal(selectedMapProv, "highlights") || "").slice(0, 95))}...</p>
                    </div>
                  </div>
                  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                    <button type="button" class="btn btn-primary btn-sm" style="padding:0.26rem 0.65rem;font-size:0.75rem;" data-action="open-province-detail" data-id="${escapeHtml(selectedMapProv.id)}">${enM ? "Open Dossier →" : "Mở hồ sơ tỉnh →"}</button>
                    <button type="button" class="btn btn-secondary btn-sm" style="padding:0.26rem 0.6rem;font-size:0.75rem;" data-action="compare-with-province" data-id="${escapeHtml(selectedMapProv.id)}">${enM ? "Compare" : "Đối chiếu"}</button>
                  </div>
                </div>
              ` : ""}
              <div style="padding:0.55rem 0.7rem;border:1px solid var(--hairline);background:var(--bg-paper);">
                <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                  <strong style="font-size:0.79rem;color:var(--imperial-red);">${enM ? `Divisions in ${escapeHtml(enVal(activeRegion, "nameVi"))} (${mapRegionProvinces.length}):` : `Tỉnh thành vùng ${activeRegion.nameVi} (${mapRegionProvinces.length}):`}</strong>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:0.28rem;">
                  ${mapRegionProvinces.map((pr) => `
                    <button type="button" class="filter-pill ${selectedMapProv && selectedMapProv.id === pr.id ? "active" : ""}" data-action="open-province-detail" data-id="${pr.id}" title="${escapeHtml(enVal(pr, "landmark") || (enM ? pr.nameEn : pr.nameVi))}" style="padding:0.18rem 0.48rem;font-size:0.73rem;">
                      ${escapeHtml(enM ? (pr.nameEn || pr.nameVi) : pr.nameVi)} <span class="hanzi">${pr.nameZh.replace(/省|市|自治区|特别行政区|壮族|回族|维吾尔/g, "")}</span>
                    </button>
                  `).join("")}
                </div>
              </div>
              <div style="border-top:1px solid var(--border-subtle);padding-top:0.55rem;">
                <div style="display:flex;gap:0.65rem;align-items:center;margin-bottom:0.45rem;">
                  ${regThumbSrc ? `<img decoding="async"  src="${escapeHtml(regThumbSrc)}" alt="${escapeHtml(enVal(activeRegion, "nameVi"))}" style="width:68px;height:48px;object-fit:cover;flex-shrink:0;border:1px solid var(--hairline);" />` : ""}
                  <div style="min-width:0;flex:1;">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.35rem;">
                      <span class="badge badge-red" style="font-size:0.68rem;">${enM ? "Selected Region" : "Vùng đang chọn"}</span>
                      <span class="card-title-zh" style="font-size:0.84rem;">${activeRegion.nameZh} ${renderSpeakBtn(activeRegion.nameZh, enM ? "Listen to region name" : "Nghe phát âm tên đại vùng")}</span>
                    </div>
                    <h2 class="card-title" style="font-size:1.12rem;margin:0.15rem 0 0;">${escapeHtml(enM ? activeRegion.nameEn : `${activeRegion.nameVi} (${activeRegion.nameEn})`)}</h2>
                  </div>
                </div>
                <div style="font-size:0.78rem;line-height:1.45;display:flex;flex-direction:column;gap:0.25rem;color:var(--text-secondary);">
                  <div><strong style="color:var(--ink-primary);">${enM ? "Divisions:" : "Hành chính:"}</strong> ${escapeHtml(enVal(activeRegion, "provinces"))}</div>
                  <div><strong style="color:var(--ink-primary);">${enM ? "Peoples and Dialects:" : "Dân tộc và ngôn ngữ:"}</strong> ${escapeHtml(enVal(activeRegion, "ethnicDiversity"))} · ${escapeHtml(enVal(activeRegion, "dialects"))}</div>
                  <div><strong style="color:var(--ink-primary);">${enM ? "Cultural Hallmarks:" : "Đặc trưng văn hóa:"}</strong> ${escapeHtml(enVal(activeRegion, "culturalFeatures"))}</div>
                  <div><strong style="color:var(--ink-primary);">${enM ? "Economy:" : "Kinh tế vùng:"}</strong> ${escapeHtml(enVal(activeRegion, "economy"))}</div>
                </div>
              </div>
            </div>
            `;
            })()}
          </div>
      `;
    };

    const regionsCities16Html = () => `
          <div>
            <div class="section-header">
              <div>
                <div class="editorial-kicker">${enM ? "Sixteen Priority Cities · 十六大城市文化档案" : "Mười sáu đô thị trọng điểm • 十六大城市文化档案"}</div>
                <h2 class="section-title" style="font-size:1.65rem;">${enM ? `Detailed Dossiers for ${Regions.cities.length} Historic and Commercial Cities` : `Hồ sơ chi tiết ${Regions.cities.length} thành phố lịch sử và kinh tế`}</h2>
              </div>
            </div>
            <div class="filter-bar">
              ${Regions.cities.map((c) => `<button type="button" class="filter-pill ${c.id === activeCity.id ? "active" : ""}" data-action="select-city" data-id="${c.id}">${escapeHtml(enM ? (c.nameEn || c.nameVi) : c.nameVi)} <span class="hanzi">${c.nameZh}</span></button>`).join("")}
            </div>
            <div class="dynasty-detail-panel">
              ${renderAcademicCardThumb(getAcademicPhotoForItem("cities", activeCity.id, 0), `${enM ? activeCity.nameEn : activeCity.nameVi} • ${enVal(activeCity, "region")}`)}
              <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:1rem;">
                <div>
                  <span class="badge badge-jade">${enM ? "Region:" : "Khu vực:"} ${escapeHtml(enVal(activeCity, "region"))}</span>
                  <h3 style="font-family:var(--font-editorial);font-size:1.6rem;margin-top:0.35rem;">
                    ${escapeHtml(enM ? activeCity.nameEn : `${activeCity.nameVi} (${activeCity.nameEn})`)} — <span class="hanzi">${activeCity.nameZh}</span>
                  </h3>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" data-action="toggle-bookmark" data-type="city" data-id="${activeCity.id}" data-title="${enM ? "City: " : "Đô thị: "}${escapeHtml(enM ? (activeCity.nameEn || activeCity.nameVi) : activeCity.nameVi)}">${Store.isBookmarked("city", activeCity.id) ? (enM ? "Saved City" : "Đã lưu thành phố") : (enM ? "Save City" : "Lưu thành phố")}</button>
              </div>
              <div class="grid grid-2">
                <div class="card">
                  <p style="font-size:0.9rem;"><strong>${enM ? "1. Historical Context:" : "1. Bối cảnh lịch sử:"}</strong> ${escapeHtml(enVal(activeCity, "history"))}</p>
                  <p style="font-size:0.9rem;"><strong>${enM ? "2. Local Customs:" : "2. Tập quán địa phương:"}</strong> ${escapeHtml(enVal(activeCity, "customs"))}</p>
                  <p style="font-size:0.9rem;"><strong>${enM ? "3. Regional Cuisine:" : "3. Ẩm thực vùng miền:"}</strong> ${escapeHtml(enVal(activeCity, "cuisine"))}</p>
                  <p style="font-size:0.9rem;margin-bottom:0;"><strong>${enM ? "4. Signature Architecture:" : "4. Kiến trúc tiêu biểu:"}</strong> ${escapeHtml(enVal(activeCity, "architecture"))}</p>
                </div>
                <div class="card">
                  <p style="font-size:0.9rem;"><strong>${enM ? "5. Language and Dialect:" : "5. Ngôn ngữ và phương ngôn:"}</strong> ${escapeHtml(enVal(activeCity, "dialect"))}</p>
                  <p style="font-size:0.9rem;"><strong>${enM ? "6. Cultural Heritage:" : "6. Di sản văn hóa:"}</strong> ${escapeHtml(enVal(activeCity, "heritage"))}</p>
                  <p style="font-size:0.9rem;"><strong>${enM ? "7. Economic and Industrial Profile:" : "7. Đặc trưng kinh tế:"}</strong> ${escapeHtml(enVal(activeCity, "economy"))}</p>
                  <p style="font-size:0.9rem;margin-bottom:0;"><strong>${enM ? "8. Landmark Sites:" : "8. Địa danh trọng yếu:"}</strong> ${escapeHtml(enVal(activeCity, "landmarks"))}</p>
                </div>
              </div>
              ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderCities16FieldCompanion(activeCity.id, enM) : ""}
            </div>
          </div>
    `;

    const regionsExpeditionsHtml = () => `
          <div id="destinations-atlas-slot">
            ${renderDestinationsDeepAtlas()}
          </div>
          ${guilinData ? `
            <div class="card" style="margin-top:1.5rem;border-color:var(--border-gold);">
              ${renderAcademicCardThumb({ src: "assets/images/academic/guilin-li-river.jpg", caption: enM ? "Li River (Guilin – Yangshuo, Guangxi) — Field Handbook" : "Sông Ly Giang (Quế Lâm – Dương Sóc, Quảng Tây) — Cẩm nang thực địa", credit: "" }, enM ? "Field Guide • Guilin–Yangshuo" : "Thực địa Quế Lâm • 桂林阳朔龙脊")}
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.65rem;">
                <div>
                  <span class="badge badge-red">240-Hour Visa-Free Transit</span>
                  <h3 style="margin:0.3rem 0 0;">${enM ? "Guilin – Yangshuo – Longji Practical Field Monograph (Guangxi)" : "Chuyên khảo thực địa Quế Lâm – Dương Sóc – Long Tích (Quảng Tây)"}</h3>
                </div>
                <button type="button" class="btn btn-primary btn-sm" data-action="open-library-tab" data-tab="compendia">${enM ? "Open Guilin Handbook →" : "Mở cẩm nang Quế Lâm →"}</button>
              </div>
              <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:0.65rem;">${escapeHtml(enVal(guilinData, "visaHighlight"))}</p>
              <div class="grid grid-3" style="gap:0.65rem;">
                ${(guilinData.trainStations || []).map((st) => `
                  <div class="flashcard-layer" style="font-size:0.81rem;">
                    <strong>${escapeHtml(enVal(st, "name"))}</strong><br>
                    <span style="color:var(--text-secondary);">${escapeHtml(enVal(st, "role"))}</span>
                  </div>
                `).join("")}
              </div>
            </div>
          ` : ""}
    `;

    const regionsReadinessHtml = () => `
          ${window.CCE_TRAVEL_HUB ? window.CCE_TRAVEL_HUB.renderHub(enM, Regions) : ""}
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderFieldAtlas34Directory(enM) : ""}
          ${TravelReadiness ? (() => {
            const enR = isEnglishUi();
            const guideList = enR ? (TravelReadiness.guideSectionsEn || []) : (TravelReadiness.guideSectionsVi || []);
            const signs = TravelReadiness.survivalHanzi || [];
            return `
              <div class="travel-readiness-hub card" id="pre-trip-readiness-guide" style="margin-top:1.5rem;">
                <div class="section-header" style="margin-bottom:1.1rem;">
                  <div>
                    <div class="editorial-kicker">${enR ? "ARMCHAIR TO FIELD · PRE-TRIP READINESS" : "NGỌA DU ĐẾN THỰC ĐỊA · HÀNH TRANG ĐI TRUNG QUỐC"}</div>
                    <h2 class="section-title" style="font-size:1.55rem;">${enR ? "First-Time China Travel and Survival Hanzi Guide" : "Cẩm nang chuẩn bị đi Trung Quốc và Hán tự sinh tồn"}</h2>
                    <p class="section-subtitle">${enR ? "Everything needed 48 hours before departure: cashless setup, passport HSR lanes, table QR dining, and 7-day museum booking." : "Bốn trụ cột thực địa cần chuẩn bị 48 giờ trước khi bay: thanh toán không tiền mặt, đi tàu cao tốc bằng hộ chiếu, gọi món QR và đặt vé di sản."}</p>
                  </div>
                </div>
                <div class="travel-readiness-grid">
                  ${guideList.map((sec) => `
                    <article class="travel-readiness-card">
                      <span class="badge badge-gold">${escapeHtml(sec.badge)}</span>
                      <h4>${escapeHtml(sec.title)}</h4>
                      <p class="tr-summary">${escapeHtml(sec.summary)}</p>
                      <ul class="tr-bullets">
                        ${(sec.bullets || []).map((b) => `<li>${escapeHtml(b)}</li>`).join("")}
                      </ul>
                    </article>
                  `).join("")}
                </div>
                <div style="margin-top:1.5rem;padding-top:1.25rem;border-top:1px solid var(--border-subtle);">
                  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">
                    <strong>${enR ? "10 Survival Hanzi Signs (Stations, HSR and Dining)" : "10 biển hiệu và khẩu ngữ Hán tự sinh tồn"}</strong>
                    <span class="text-muted" style="font-size:0.82rem;">${enR ? "Click speaker icon for native Mandarin audio" : "Bấm biểu tượng loa để nghe phát âm"}</span>
                  </div>
                  <div class="survival-hanzi-grid">
                    ${signs.map((s) => `
                      <div class="survival-hanzi-item">
                        <div class="survival-hanzi-top">
                          <span class="hanzi">${escapeHtml(s.hanzi)}</span>
                          ${renderSpeakBtn(s.hanzi.split("/")[0].trim(), enR ? "Speak phrase" : "Nghe phát âm")}
                        </div>
                        <div class="pinyin">${escapeHtml(s.pinyin)}</div>
                        <div class="meaning">${escapeHtml(enR ? s.en : s.vi)}</div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              </div>
            `;
          })() : ""}
          ${window.CCE_LABS ? window.CCE_LABS.renderTripPlannerAndCorridors(enM) : ""}
    `;

    const regionsBorderlandsHtml = () => `
          ${window.CCE_V3_MODS ? window.CCE_V3_MODS.renderVernacularCrossSections(enM, renderSpeakBtn) : ""}
          ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderBorderlandEthnicAndGuidesStudio(enM) : ""}
    `;

    const regionsSubpages = [
      { id: "atlas", labelVi: "Danh bạ 34 tỉnh thành", labelEn: "34-Province Directory", count: provinces.length, render: regionsAtlasHtml },
      { id: "splitatlas", labelVi: "Bản đồ chia đôi 34 tỉnh", labelEn: "Split Atlas & Matrix", count: provinces.length, render: regionsSplitAtlasHtml },
      { id: "map4layer", labelVi: "Bản đồ 4 lớp tương tác", labelEn: "4-Layer Map", count: Regions.macroRegions.length, render: regionsMap4LayerHtml },
      { id: "cities16", labelVi: "16 đô thị lịch sử", labelEn: "16 Historic Cities", count: Regions.cities.length, render: regionsCities16Html },
      { id: "expeditions", labelVi: "Cẩm nang 3 cấp và Quế Lâm", labelEn: "3-Tier Atlas & Guilin", count: 16, render: regionsExpeditionsHtml },
      { id: "readiness", labelVi: "Hành trang 240h và lộ trình", labelEn: "240h Transit & Planner", render: regionsReadinessHtml },
      { id: "borderlands", labelVi: "Kiến trúc dân gian và 24 dân tộc", labelEn: "Vernacular & Borderlands", count: 24, render: regionsBorderlandsHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enM ? "Regional Geopolitics and Culture · 中国地域文化与三十四省级行政区" : "Địa văn hóa Trung Hoa · 中国地域文化与三十四省级行政区"}</div>
          <h1>${enM ? "Regional cultures, 16 historic cities and 34 provincial divisions" : "Văn hóa vùng miền, 16 đô thị lịch sử và 34 tỉnh thành"}</h1>
          <p class="section-subtitle">${escapeHtml(enVal(Regions, "diversityNote"))}</p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("regions", regionsSubpages, { enM }) : `<section class="page-section"><div class="container">${regionsAtlasHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("regions", enM)}</div>` : ""}
    `;
  }

  // ==========================================================================
  // Page 8: SINO-VIETNAM, BUSINESS CULTURE, LIBRARY, ABOUT
  // ==========================================================================
  function renderSinoVietnamPage() {
    const enSV = isEnglishUi();
    const svIds = [
      "han-viet-phonology-middle-chinese",
      "envoy-poetry-bac-hanh-tap-luc",
      "comparative-timber-architecture-dougong",
      "imperial-academies-temple-of-literature"
    ];
    const svArticles = svIds.map((aid) => Articles.find((a) => a.id === aid)).filter(Boolean);

    const svExchangeHtml = () => `
          ${renderAcademicSectionBanner("sinoVietnam", `
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-action="open-library-tab" data-tab="monograph">${enSV ? "Open 2026–2030 Bilateral Trade Monograph →" : "Mở chuyên khảo thương mại Việt – Trung 2026 →"}</button>
              <a href="assets/docs/VN-CN-TRD-2026-Q4-Monograph.pdf" target="_blank" rel="noopener" class="btn btn-secondary btn-sm">${ICONS.download} ${enSV ? "Download 58-Page PDF" : "Tải PDF gốc 58 trang"}</a>
            </div>
          `)}
          <div class="grid grid-2">
            ${SinoVN.themes.map((t, tIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("sinoVietnam", t.id, tIdx + 11), `${t.titleZh} • ${enSV ? "Sino–Vietnamese" : "Giao lưu Trung – Việt"}`)}
                <div class="card-header-row">
                  <span class="card-title-zh">${t.titleZh}</span>
                  <span class="badge badge-jade">${enSV ? "3 Stratum Dynamics" : "3 tầng tiếp biến"}</span>
                </div>
                <h3 class="card-title">${escapeHtml(enVal(t, "titleVi"))}</h3>
                <div class="flashcard-layer" style="margin-bottom:0.5rem;">
                  <strong>${enSV ? "1. Transmission:" : "1. Truyền bá và tiếp nhận:"}</strong> ${escapeHtml(enVal(t, "transmission"))}
                </div>
                <div class="flashcard-layer" style="margin-bottom:0.5rem;">
                  <strong>${enSV ? "2. Localization:" : "2. Bản địa hóa:"}</strong> ${escapeHtml(enVal(t, "adaptation"))}
                </div>
                <div class="flashcard-layer" style="background:var(--bg-jade-soft);">
                  <strong>${enSV ? "3. Indigenous Creation:" : "3. Phát triển nội sinh Việt Nam:"}</strong> ${escapeHtml(enVal(t, "indigenous"))}
                </div>
              </article>
            `).join("")}
          </div>
          ${svArticles.length ? `
            <div style="margin-top:2.25rem;border-top:1px solid var(--hairline);padding-top:1.5rem;">
              <div class="section-header">
                <div>
                  <div class="editorial-kicker">${enSV ? "In-Depth Comparative Monographs · 越中文化比较研究" : "Chuyên luận đối chiếu chuyên sâu · 越中文化比较研究"}</div>
                  <h2 class="section-title" style="font-size:1.55rem;">${enSV ? `${svArticles.length} Monographs on Phonology, Envoy Poetry and Timber Architecture` : `${svArticles.length} chuyên luận khảo cứu ngữ âm, sứ trình và kiến trúc`}</h2>
                </div>
              </div>
              <div class="grid grid-2">
                ${svArticles.map((art) => renderArticleCard(art)).join("")}
              </div>
            </div>
          ` : ""}
    `;

    const svPhonologyHtml = () => `
          ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderHanNomAndFalseFriends(enSV) : ""}
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderHanNom24Corpus(enSV) : ""}
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderFalseFriends50(enSV) : ""}
          ${window.CCE_V9_DATA_STORIES ? window.CCE_V9_DATA_STORIES.renderForPage("sino-vietnam", enSV) : ""}
          ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderChuNomParallelReader(enSV) : ""}
    `;

    const svMatricesHtml = () => {
      const matrices = Array.isArray(SinoVN.fiveComparativeMatrices) ? SinoVN.fiveComparativeMatrices : [];
      const enS = isEnglishUi();
      return `
          ${matrices.length ? `
            <div id="sino-vn-5-matrices" style="margin-bottom:2rem;">
              <div class="section-header">
                <div>
                  <div class="editorial-kicker">${enS ? "5 STRUCTURAL COMPARISON MATRICES" : "5 ma trận đối sánh cấu trúc · Đồng văn nhưng dị bản"}</div>
                  <h2 class="section-title" style="font-size:1.6rem;">${enS ? "5 Parallel Axes: Shared Roots, Indigenous Innovations and 2026 Trade" : "5 trục so sánh song song giữa Việt Nam và Trung Quốc"}</h2>
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:1.15rem;">
                ${matrices.map((mx) => `
                  <article class="card" style="padding:1.25rem 1.35rem;border-top:3px solid ${mx.id === "matrix-econ2026" ? "var(--jade-green)" : "var(--imperial-red)"};">
                    <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.35rem;">
                      <span class="badge ${mx.id === "matrix-econ2026" ? "badge-jade" : "badge-gold"}">${enS ? `MATRIX ${escapeHtml(mx.num)} · ${escapeHtml(mx.badgeEn || mx.badgeVi)}` : `MA TRẬN ${escapeHtml(mx.num)} · ${escapeHtml(mx.badgeVi)}`}</span>
                      <span class="hanzi" style="font-size:0.9rem;color:var(--text-muted);">${escapeHtml(mx.titleZh)}</span>
                    </div>
                    <h3 class="card-title" style="margin:0.15rem 0 0.35rem;">${escapeHtml(enS ? (mx.titleEn || mx.titleVi) : mx.titleVi)}</h3>
                    <p style="font-size:0.88rem;color:var(--text-secondary);margin:0 0 0.85rem;">${escapeHtml(enS ? (mx.summaryEn || mx.summaryVi) : mx.summaryVi)}</p>
                    <div class="grid grid-2" style="gap:0.9rem;">
                      ${((enS && mx.columnsEn) ? mx.columnsEn : (mx.columns || [])).map((col, cIdx) => `
                        <div class="flashcard-layer" style="margin:0;${cIdx === 1 ? "background:var(--bg-jade-soft);border-left:3px solid var(--jade-green);" : "border-left:3px solid var(--imperial-red);"}">
                          <div style="font-weight:800;font-size:0.86rem;color:${cIdx === 1 ? "var(--jade-green)" : "var(--imperial-red)"};margin-bottom:0.45rem;">${escapeHtml(col.side)}</div>
                          <ul style="margin:0;padding-left:1.1rem;font-size:0.84rem;line-height:1.58;display:flex;flex-direction:column;gap:0.35rem;">
                            ${(col.points || []).map((pt) => `<li>${formatInlineMd(pt, false)}</li>`).join("")}
                          </ul>
                        </div>
                      `).join("")}
                    </div>
                  </article>
                `).join("")}
              </div>
            </div>
          ` : ""}
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderIchComparative43(enSV) : ""}
          ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderTriangulationLedger("sino-vietnam", enSV) : ""}
          <div style="margin-top:2rem;">
            <div class="section-header">
              <div>
                <div class="editorial-kicker">${enSV ? "Comparative Contrast • 文化细节对比" : "Đối chiếu thực hành • 文化细节对比"}</div>
                <h2 class="section-title" style="font-size:1.6rem;">${enSV ? "Parallel Table of Convergences and Structural Divergences" : "Bảng so sánh các điểm giao thoa và khác biệt"}</h2>
              </div>
            </div>
            <div class="academic-table-wrap">
              <table class="academic-table">
                <thead>
                  <tr>
                    <th>${enSV ? "Cultural Dimension" : "Khía cạnh văn hóa"}</th>
                    <th>${enSV ? "In China" : "Tại Trung Quốc"}</th>
                    <th>${enSV ? "In Vietnam" : "Tại Việt Nam"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${SinoVN.comparisonRows.map((r) => `
                    <tr>
                      <td><strong>${escapeHtml(enVal(r, "aspect"))}</strong></td>
                      <td>${escapeHtml(enVal(r, "china"))}</td>
                      <td>${escapeHtml(enVal(r, "vietnam"))}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
      `;
    };

    const svConciergeHtml = () => (window.CCE_V9_TRIP_PLANNER ? window.CCE_V9_TRIP_PLANNER.renderFieldConciergeStrip(enSV) : "");

    const svSubpages = [
      { id: "exchange", labelVi: "Tiếp biến văn hiến 3 tầng", labelEn: "3-Stratum Exchange", count: SinoVN.themes.length, render: svExchangeHtml },
      { id: "phonology", labelVi: "Ngữ âm Hán – Việt và Chữ Nôm", labelEn: "Phonology & Chu Nom", render: svPhonologyHtml },
      { id: "matrices", labelVi: "5 ma trận đối sánh cấu trúc", labelEn: "5 Comparison Matrices", count: 5, render: svMatricesHtml },
      { id: "concierge", labelVi: "Sổ tay thực địa và thẻ tài xế", labelEn: "Field Guide & Driver Card", render: svConciergeHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enSV ? "Sino–Vietnamese Relations · 中越文化交流与双边经贸" : "Giao lưu Trung – Việt · 中越文化交流与双边经贸"}</div>
          <h1>${enSV ? "China–Vietnam cultural exchange and bilateral trade" : "Giao lưu văn hóa và thương mại Việt – Trung"}</h1>
          <p class="section-subtitle">${enSV ? "Shared Sinosphere literary and agrarian roots, distinct indigenous Vietnamese localizations, and verified bilateral trade ($296.3B in 9M 2026 under ACFTA 3.0)." : SinoVN.methodologicalBanner}</p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("sino-vietnam", svSubpages, { enM: enSV }) : `<section class="page-section"><div class="container">${svExchangeHtml()}${svMatricesHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("sino-vietnam", enSV)}</div>` : ""}
    `;
  }

  function renderBusinessPage() {
    const enB = isEnglishUi();

    const bizB2bHtml = () => `
          ${renderAcademicSectionBanner("business", `
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-action="open-library-tab" data-tab="monograph">${enB ? "View 14 China–Vietnam Trade Charts →" : "Xem 14 biểu đồ thương mại Việt – Trung →"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="open-library-tab" data-tab="compendia">${enB ? "Open B2B Field Handbooks →" : "Mở cẩm nang đàm phán B2B →"}</button>
            </div>
          `)}
          <div class="epistemic-box warning" style="margin-bottom:1.75rem;">
            <div class="epistemic-title">${enB ? "Distinguishing Cultural Norms from Empirical Corporate Conduct" : "Tách bạch khái niệm văn hóa truyền thống và thực hành doanh nghiệp"}</div>
            <p style="margin:0;">${escapeHtml(enVal(Business, "epistemicWarning"))}</p>
          </div>
          <div class="grid grid-2">
            ${Business.themes.map((t, bIdx) => `
              <article class="card">
                ${renderAcademicCardThumb(getAcademicPhotoForItem("business", t.id, bIdx + 14), `${t.titleZh} • Business and Trade`)}
                <div class="card-header-row">
                  <span class="card-title-zh">${t.titleZh}</span>
                  <span class="badge badge-outline">Business and Trade</span>
                </div>
                <h3 class="card-title" style="font-size:1.22rem;">${escapeHtml(enVal(t, "titleVi"))}</h3>
                <div class="flashcard-layer" style="margin-bottom:0.55rem;">
                  <strong>${enB ? "Traditional Cultural Foundation:" : "Nền tảng văn hóa truyền thống:"}</strong> ${escapeHtml(enVal(t, "traditionalConcept"))}
                </div>
                <div class="flashcard-layer" style="background:var(--bg-accent-soft);">
                  <strong>${enB ? "Empirical Modern Practice:" : "Thực tiễn quan sát hiện đại:"}</strong> ${escapeHtml(enVal(t, "empiricalPractice"))}
                </div>
              </article>
            `).join("")}
          </div>
          <div style="margin-top:2.25rem;">
            <div class="section-header">
              <div>
                <div class="editorial-kicker">${enB ? "Corporate Case Studies • 典型企业案例" : "Nghiên cứu tình huống • 典型企业案例"}</div>
                <h2 class="section-title" style="font-size:1.65rem;">${enB ? `${Business.caseStudies.length} Signature Chinese Corporate Case Studies` : `${Business.caseStudies.length} nghiên cứu doanh nghiệp Trung Quốc tiêu biểu`}</h2>
              </div>
            </div>
            <div class="grid grid-3">
              ${Business.caseStudies.map((cs, csIdx) => `
                <article class="card">
                  ${renderAcademicCardThumb(getAcademicPhotoForItem("caseStudies", cs.id, csIdx + 16), `${enVal(cs, "company")} • ${enVal(cs, "hq")}`)}
                  <div class="card-header-row">
                    <span class="badge badge-red">${escapeHtml(enVal(cs, "hq"))}</span>
                    <span class="card-title-zh">${cs.zh}</span>
                  </div>
                  <h3 class="card-title">${escapeHtml(enVal(cs, "company"))}</h3>
                  <div style="font-size:0.82rem;color:var(--text-muted);margin-bottom:0.65rem;">${escapeHtml(enVal(cs, "sector"))}</div>
                  <p style="font-size:0.87rem;"><strong>${enB ? "Organizational Culture:" : "Văn hóa tổ chức:"}</strong> ${escapeHtml(enVal(cs, "culturalIntegration"))}</p>
                  <p style="font-size:0.87rem;margin-bottom:0;"><strong>${enB ? "Empirical Capability:" : "Năng lực thực chứng:"}</strong> ${escapeHtml(enVal(cs, "empiricalPractice"))}</p>
                </article>
              `).join("")}
            </div>
          </div>
          ${window.CCE_V3_W5 ? window.CCE_V3_W5.renderB2BExpansion(enB) : ""}
          ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderB2BClauses20(enB) : ""}
    `;

    const bizLaozihaoHtml = () => `
      ${window.CCE_LAOZIHAO_PAVILION ? window.CCE_LAOZIHAO_PAVILION.renderPavilion(enB) : ""}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderLaozihao90Directory(enB) : ""}
    `;

    const bizCorridorsHtml = () => `
          ${window.CCE_V9_DATA_STORIES ? window.CCE_V9_DATA_STORIES.renderForPage("business", enB) : ""}
          ${window.CCE_3D_LOGISTICS ? `<section class="card mt-2 mb-2" style="padding:1.1rem 1.25rem;border-top:3px solid var(--jade-green);">${window.CCE_3D_LOGISTICS.renderPanel(enB)}</section>` : ""}
          ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderGreenTradeCasebookStudio(enB) : ""}
    `;

    const bizCustomsHtml = () => `
      ${window.CCE_TRILINGUAL_STUDIO ? window.CCE_TRILINGUAL_STUDIO.renderStudio(enB) : ""}
      ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderHsk79AndTradeCases("trade", enB) : ""}
    `;

    const bizSubpages = [
      { id: "b2b", labelVi: "Văn hóa kinh doanh và B2B", labelEn: "B2B Culture & Cases", count: Business.themes.length + Business.caseStudies.length, render: bizB2bHtml },
      { id: "laozihao", labelVi: "120 thương hiệu Lão tự hào", labelEn: "120 Honored Brands", count: 120, render: bizLaozihaoHtml },
      { id: "corridors", labelVi: "Hành lang xanh và logistics 3D", labelEn: "Green Corridors & 3D", render: bizCorridorsHtml },
      { id: "customs", labelVi: "Chứng từ C/O và tam ngữ B2B", labelEn: "Customs C/O & Terms", count: 200, render: bizCustomsHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enB ? "Commerce and B2B Practice · 中国商业文化与国际贸易" : "Thương đạo và thương mại B2B · 中国商业文化与国际贸易"}</div>
          <h1>${enB ? "Chinese business culture, B2B negotiation and supply chains" : "Văn hóa kinh doanh, đàm phán B2B và chuỗi cung ứng"}</h1>
          <p class="section-subtitle">
            ${enB
              ? "Linking East Asian cultural frameworks with 5-region B2B negotiation protocols, South China industrial supply engines, cross-border logistics, and 2026–2030 China–Vietnam trade."
              : "Kết nối tri thức văn hóa Đông Á với thực hành đàm phán B2B 5 vùng miền, công xưởng Hoa Nam, vận tải xuyên biên giới và quan hệ kinh tế Việt – Trung 2026–2030."}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("business", bizSubpages, { enM: enB }) : `<section class="page-section"><div class="container">${bizB2bHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("business", enB)}</div>` : ""}
    `;
  }

  function renderClassicsLibrarySubTab() {
    const enM = isEnglishUi();
    const texts = Philosophy.classicalTexts || [];
    const cats = Philosophy.treasuryCategories || [
      { id: "all", label: enM ? `All Siku Quanshu (${texts.length})` : `Tất cả Tứ Khố (${texts.length} Bộ)`, hanzi: "四库全书总目" },
      { id: "kinh", label: enM ? "Classics (Jing 经部)" : "Kinh bộ 经部", hanzi: "经部" },
      { id: "su", label: enM ? "Histories (Shi 史部)" : "Sử bộ 史部", hanzi: "史部" },
      { id: "tu", label: enM ? "Masters (Zi 子部)" : "Tử bộ 子部", hanzi: "子部" },
      { id: "tap", label: enM ? "Belles-Lettres (Ji 集部)" : "Tập bộ 集部", hanzi: "集部" }
    ];
    const activeCat = ui.classicsTreasuryFilter || "all";
    const cq = normalizeText(ui.classicsQuery || "");

    const filtered = texts.filter((txt) => {
      const catOk = activeCat === "all" || txt.treasury === activeCat;
      const hay = normalizeText([txt.titleVi, txt.titleEn, txt.titleZh, txt.author, txt.era, txt.school, txt.summary, txt.whyItMatters].filter(Boolean).join(" "));
      const qOk = !cq || hay.includes(cq) || (txt.titleZh || "").includes((ui.classicsQuery || "").trim());
      return catOk && qOk;
    });

    const catEnMap = {
      all: `All Four Treasuries (${texts.length})`,
      kinh: "Classics · Jingbu 经部",
      su: "Histories · Shibu 史部",
      tu: "Masters · Zibu 子部",
      tap: "Collections · Jibu 集部"
    };

    return `
      <div class="classics-treasury-shell">
        <div class="card mb-2" style="padding:1.25rem 1.4rem;">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;">
            <div style="flex:1;min-width:260px;">
              <div class="editorial-kicker">${enM ? "Original Classics Treasury · 四库经史子集原典库" : "Thư viện Cổ tịch Nguyên điển · 四库经史子集原典库"}</div>
              <h2 style="font-family:var(--font-editorial);font-size:1.65rem;margin:0 0 0.3rem;">${enM ? `${texts.length} Foundational Classics across the Four Treasuries (Jing · Shi · Zi · Ji)` : `${texts.length} Tác phẩm Kinh điển Theo Hệ thống Tứ Khố (Kinh · Sử · Tử · Tập)`}</h2>
              <p style="font-size:0.88rem;color:var(--text-secondary);margin:0;">
                ${enM
                  ? "Every work pairs Simplified/Traditional Chinese text (synced with 简/繁 switcher), Pinyin, Sino-Vietnamese readings, Vietnamese–English translations, scholarly commentary, and direct Liushu dictionary links."
                  : "Mỗi bộ kinh điển gồm nguyên văn Giản/Phồn thể (đồng bộ nút 简/繁), Pinyin chuẩn thanh điệu, âm Hán–Việt, bản dịch Việt–Anh, bình chú hiện đại và thuật ngữ Lục thư liên kết thẳng tới Từ điển."}
              </p>
            </div>
            <div style="min-width:260px;flex:0 1 340px;">
              <label for="classics-search-input" style="font-size:0.78rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.3rem;">${enM ? "Search Canon, Author, or Idea" : "Tìm Kinh điển, Tác giả hoặc Tư tưởng"}</label>
              <input
                id="classics-search-input"
                type="text"
                class="form-input"
                value="${escapeHtml(ui.classicsQuery || "")}"
                placeholder="${enM ? "e.g., Zhouyi, Shiji, Sunzi, Mencius, Analects..." : "Vd: Chu Dịch, Sử Ký, Tôn Tử, Bắc Hành Tạp Lục..."}"
                data-action="classics-query-input"
              />
            </div>
          </div>

          <div class="filter-bar" style="margin:0;">
            ${cats.map((c) => {
              const cnt = c.id === "all" ? texts.length : texts.filter((t) => t.treasury === c.id).length;
              const catLbl = enM ? (catEnMap[c.id] || c.label) : c.label.replace(/\s*\([^)]*\)/, "");
              return `<button type="button" class="filter-pill ${activeCat === c.id ? "active" : ""}" data-action="set-classics-treasury" data-treasury="${c.id}">${escapeHtml(catLbl)} (${cnt})</button>`;
            }).join("")}
          </div>
          ${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.renderClassicsColToggles(enM) : ""}
        </div>

        <div id="classics-results-slot">
          ${filtered.length === 0 ? `
            <div class="card" style="text-align:center;padding:2.2rem;">
              <p style="margin:0 0 0.85rem;color:var(--text-secondary);">${enM ? `No classical texts matched "${escapeHtml(ui.classicsQuery || "")}".` : `Không tìm thấy cổ tịch phù hợp với từ khóa "${escapeHtml(ui.classicsQuery || "")}".`}</p>
              <button type="button" class="btn btn-primary btn-sm" data-action="clear-classics-filters">${enM ? `Reset and show all ${texts.length} works` : `Hiển thị toàn bộ ${texts.length} bộ kinh điển`}</button>
            </div>
          ` : (() => {
            const Pager = window.CCE_V10_PAGINATOR;
            const cPaged = Pager ? Pager.paginate(filtered, "library-classics", { filterSig: `${activeCat}|${cq}`, desktopPerPage: 6, mobilePerPage: 4 }) : { slice: filtered, renderControls: () => "" };
            return `
            <div class="grid grid-2" style="gap:1.35rem;">
              ${cPaged.slice.map((txt, idx) => {
                const excerpts = Array.isArray(txt.excerpts) && txt.excerpts.length ? txt.excerpts : [];
                const leadEx = excerpts[0] || null;
                const extraEx = excerpts.slice(1);
                const classicThumb = getAcademicPhotoForItem("texts", txt.id, idx);
                return `
                  <article class="card classics-work-card" style="display:flex;flex-direction:column;gap:0.85rem;">
                    ${renderAcademicCardThumb(classicThumb, enVal(txt, "treasuryLabel") || (enM ? "Canonical Work" : "Kinh điển"))}
                    <div class="ed-meta-line" style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                      <span>${escapeHtml(enVal(txt, "treasuryLabel") || (enM ? "Canonical Work" : "Kinh điển"))} · ${escapeHtml(enVal(txt, "era") || "")}</span>
                      <span class="hanzi" style="color:var(--imperial-red);font-weight:700;">${formatHanzi(txt.titleZh || "", txt.titleZhTrad || txt.titleZh || "")}</span>
                    </div>

                    <div>
                      <h3 class="card-title" style="font-size:1.35rem;margin-bottom:0.2rem;">${escapeHtml(enM ? (txt.titleEn || txt.titleVi) : txt.titleVi)}${enM ? "" : ` <span style="font-size:0.9rem;font-weight:400;color:var(--text-muted);">(${escapeHtml(txt.titleEn || "")})</span>`}</h3>
                      <div style="font-size:0.82rem;color:var(--ink-muted);"><strong>${enM ? "Author / Compiler:" : "Tác giả / Soạn giả:"}</strong> ${escapeHtml(enVal(txt, "author") || enVal(txt, "school") || "")}</div>
                    </div>

                    ${txt.whyItMatters ? `<p style="font-size:0.88rem;line-height:1.58;margin:0;color:var(--ink-primary);"><strong>${enM ? "Core Significance:" : "Giá trị cốt lõi:"}</strong> ${escapeHtml(enVal(txt, "whyItMatters"))}</p>` : ""}

                    ${leadEx ? `
                      <div class="classics-excerpt-box">
                        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.35rem;">
                          <span style="font-size:0.75rem;font-weight:700;color:var(--imperial-red);letter-spacing:0.03em;">${escapeHtml(enVal(leadEx, "passageTitle") || (enM ? "Original Text Excerpt" : "Đoạn trích Nguyên điển"))}</span>
                          ${renderSpeakBtn(leadEx.hanziSc || "", enM ? "Listen to classical Chinese reading" : "Nghe đọc nguyên văn cổ tịch")}
                        </div>
                        ${(() => {
                          const cols = (window.CCE_GALLERY_V3 && window.CCE_GALLERY_V3.getClassicCols()) || { sc: true, tc: true, py: true, tr: true };
                          let zhOut = "";
                          if (cols.sc && leadEx.hanziSc) zhOut += `<div><span class="badge badge-outline" style="font-size:0.62rem;margin-right:0.3rem;">简</span>${escapeHtml(leadEx.hanziSc)}</div>`;
                          if (cols.tc && (leadEx.hanziTc || leadEx.hanziSc)) zhOut += `<div style="color:var(--text-secondary);"><span class="badge badge-outline" style="font-size:0.62rem;margin-right:0.3rem;">繁</span>${escapeHtml(leadEx.hanziTc || leadEx.hanziSc)}</div>`;
                          return zhOut ? `<div class="hanzi" style="font-size:1.1rem;line-height:1.62;color:var(--ink-primary);margin-bottom:0.3rem;">${zhOut}</div>` : "";
                        })()}
                        ${(!window.CCE_GALLERY_V3 || window.CCE_GALLERY_V3.getClassicCols().py) ? `${leadEx.pinyin ? `<div class="pinyin" style="font-size:0.81rem;margin-bottom:0.25rem;">${escapeHtml(leadEx.pinyin)}</div>` : ""}${leadEx.hanViet ? `<div style="font-size:0.8rem;color:var(--jade-green);font-weight:600;margin-bottom:0.35rem;">${enM ? "Sino–Viet Reading:" : "Hán–Việt:"} ${escapeHtml(leadEx.hanViet)}</div>` : ""}` : ""}
                        ${(!window.CCE_GALLERY_V3 || window.CCE_GALLERY_V3.getClassicCols().tr) ? `${enM ? `<p style="font-size:0.85rem;line-height:1.56;margin:0 0 0.25rem;"><strong>Translation:</strong> ${escapeHtml(leadEx.en || txt.excerptEn || "")}</p>` : `<p style="font-size:0.85rem;line-height:1.56;margin:0 0 0.25rem;"><strong>Dịch nghĩa:</strong> ${escapeHtml(leadEx.vi || "")}</p>`}${(enM ? leadEx.commentaryEn : leadEx.commentary) ? `<p style="font-size:0.81rem;line-height:1.5;margin:0;color:var(--text-secondary);"><em>${enM ? "Commentary:" : "Bình chú:"}</em> ${escapeHtml(enVal(leadEx, "commentary"))}</p>` : ""}` : ""}
                        ${Array.isArray(leadEx.keyTerms) && leadEx.keyTerms.length ? `
                          <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-top:0.55rem;">
                            ${leadEx.keyTerms.map((tid) => {
                              const foundTerm = Dictionary.find((d) => d.id === tid || d.hanzi === tid);
                              const label = foundTerm ? `${foundTerm.hanzi} · ${foundTerm.pinyin}` : tid;
                              return `<button type="button" class="classics-term-link" data-action="open-term" data-id="${escapeHtml(foundTerm ? foundTerm.id : tid)}">${escapeHtml(label)}</button>`;
                            }).join("")}
                          </div>
                        ` : ""}
                      </div>
                    ` : ""}

                    ${extraEx.length ? `
                      <details class="ed-details">
                        <summary>${enM ? `Read ${extraEx.length} more primary passages and commentary →` : `Đọc thêm ${extraEx.length} đoạn trích nguyên bản và bình chú →`}</summary>
                        <div class="ed-details-body" style="display:flex;flex-direction:column;gap:0.75rem;margin-top:0.75rem;">
                          ${extraEx.map((ex) => `
                            <div class="classics-excerpt-box" style="margin:0;">
                              <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;margin-bottom:0.3rem;">
                                <span style="font-size:0.75rem;font-weight:700;color:var(--imperial-red);">${escapeHtml(enVal(ex, "passageTitle") || "")}</span>
                                ${renderSpeakBtn(ex.hanziSc || "", enM ? "Listen to classical reading" : "Nghe đọc nguyên văn cổ tịch")}
                              </div>
                              <div class="hanzi" style="font-size:1.05rem;line-height:1.6;color:var(--ink-primary);margin-bottom:0.25rem;">
                                ${formatHanzi(ex.hanziSc || "", ex.hanziTc || ex.hanziSc || "")}
                              </div>
                              ${ex.pinyin ? `<div class="pinyin" style="font-size:0.79rem;margin-bottom:0.2rem;">${escapeHtml(ex.pinyin)}</div>` : ""}
                              ${ex.hanViet ? `<div style="font-size:0.79rem;color:var(--jade-green);font-weight:600;margin-bottom:0.25rem;">${enM ? "Sino–Viet:" : "Hán–Việt:"} ${escapeHtml(ex.hanViet)}</div>` : ""}
                              ${enM
                                ? (ex.en ? `<p style="font-size:0.83rem;line-height:1.55;margin:0 0 0.25rem;"><strong>Translation:</strong> ${escapeHtml(ex.en)}</p>` : "")
                                : `<p style="font-size:0.83rem;line-height:1.55;margin:0 0 0.25rem;"><strong>VI:</strong> ${escapeHtml(ex.vi || "")}</p>${ex.en ? `<p style="font-size:0.8rem;line-height:1.48;margin:0 0 0.25rem;color:var(--text-muted);"><strong>EN:</strong> ${escapeHtml(ex.en)}</p>` : ""}`}
                              ${(enM ? ex.commentaryEn : ex.commentary) ? `<p style="font-size:0.8rem;line-height:1.48;margin:0;color:var(--text-secondary);"><em>${enM ? "Commentary:" : "Bình chú:"}</em> ${escapeHtml(enVal(ex, "commentary"))}</p>` : ""}
                              ${Array.isArray(ex.keyTerms) && ex.keyTerms.length ? `
                                <div style="display:flex;gap:0.35rem;flex-wrap:wrap;margin-top:0.45rem;">
                                  ${ex.keyTerms.map((tid) => {
                                    const foundTerm = Dictionary.find((d) => d.id === tid || d.hanzi === tid);
                                    const label = foundTerm ? `${foundTerm.hanzi} · ${foundTerm.pinyin}` : tid;
                                    return `<button type="button" class="classics-term-link" data-action="open-term" data-id="${escapeHtml(foundTerm ? foundTerm.id : tid)}">${escapeHtml(label)}</button>`;
                                  }).join("")}
                                </div>
                              ` : ""}
                            </div>
                          `).join("")}
                        </div>
                      </details>
                    ` : ""}
                  </article>
                `;
              }).join("")}
            </div>
            ${cPaged.renderControls(enM)}
          `;
          })()}
        </div>
      </div>
    `;
  }

  function renderLibraryPage() {
    const enLib = isEnglishUi();
    const mono = (Intelligence && Intelligence.monograph2026) || {};
    const audit = (Intelligence && Intelligence.knowledgeAudit) || {};
    const intelItems = (Intelligence && Intelligence.intelligenceFeed) || [];
    const srcDir = (Intelligence && Intelligence.sourceDirectory) || [];
    const sched = (Intelligence && Intelligence.monitoringSchedule) || {};
    const classicsCount = (Philosophy && Philosophy.classicalTexts ? Philosophy.classicalTexts.length : 30);

    const libClassicsHtml = () => `
      ${renderClassicsLibrarySubTab()}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderSikuAndParticlesStudio(enLib, "library") : ""}
    `;
    const libLiteratureHtml = () => (window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderModernLiteratureStudio(enLib) : "");
    const libMonographHtml = () => renderMonographSubTab(mono);
    const libCompendiaHtml = () => renderCompendiaSubTab();
    const libSourcesHtml = () => `
      ${renderIntelligenceSubTab(intelItems, srcDir)}
      <div style="margin-top:2rem;">
        ${renderAuditSubTab(audit, sched)}
      </div>
      <div style="margin-top:2.25rem;border-top:2px solid var(--border-gold);padding-top:1.5rem;">
        <div class="section-header">
          <div>
            <div class="editorial-kicker">${enLib ? "Verified Research Repositories • 权威学术文献库" : "Cơ sở dữ liệu học thuật • 权威学术文献库"}</div>
            <h2 class="section-title" style="font-size:1.55rem;">${enLib ? "Curated Academic Databases and External Archives" : "Danh mục cơ sở dữ liệu kiểm chứng quốc tế"}</h2>
          </div>
        </div>
        <div class="grid grid-2">
          ${LearningResearch.researchLibrary.categories.map((cat, cIdx) => `
            <div class="card">
              ${renderAcademicCardThumb(getAcademicPhotoForItem("library", cat.nameVi, cIdx + 3), cat.nameZh)}
              <div class="card-header-row"><span class="card-title-zh">${cat.nameZh}</span></div>
              <h3 class="card-title" style="font-size:1.2rem;">${escapeHtml(enVal(cat, "nameVi"))}</h3>
              ${cat.items.map((item) => `
                <div class="flashcard-layer" style="margin-bottom:0.75rem;">
                  <div style="display:flex;justify-content:space-between;gap:0.5rem;flex-wrap:wrap;">
                    <strong><a href="${item.url}" target="_blank" rel="noopener">${escapeHtml(enVal(item, "title"))} ↗</a></strong>
                    <span class="badge badge-outline">${escapeHtml(enVal(item, "type"))}</span>
                  </div>
                  <div style="font-size:0.8rem;color:var(--text-muted);margin:0.2rem 0;">${escapeHtml(enVal(item, "institution"))} • ${escapeHtml(enVal(item, "date"))}</div>
                  <div style="font-size:0.85rem;">${escapeHtml(enVal(item, "verification"))}</div>
                </div>
              `).join("")}
            </div>
          `).join("")}
        </div>
      </div>
    `;

    const librarySubpages = [
      { id: "classics", labelVi: "Cổ tịch Tứ Khố", labelEn: "Four Treasuries Classics", count: classicsCount, render: libClassicsHtml },
      { id: "literature", labelVi: "Văn học 1918–2026", labelEn: "Modern Literature", count: 36, render: libLiteratureHtml },
      { id: "monograph", labelVi: "Chuyên khảo thương mại 58 trang", labelEn: "58p Trade Monograph", count: 14, render: libMonographHtml },
      { id: "compendia", labelVi: "9 bộ tổng luận và cẩm nang", labelEn: "9 Compendia & Guides", count: 9, render: libCompendiaHtml },
      { id: "sources", labelVi: "Cơ sở dữ liệu và chuẩn nguồn", labelEn: "Databases & Standards", render: libSourcesHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enLib ? "Classical Library and Research Archive · 四库经典与实证研究文献库" : "Thư viện cổ tịch và tư liệu đối chứng · 四库经典与实证研究文献库"}</div>
          <h1>${enLib ? `${classicsCount} Four Treasuries classics, 9 compendia and research archive` : `Thư viện ${classicsCount} cổ tịch nguyên điển và tư liệu nghiên cứu`}</h1>
          <p class="section-subtitle">
            ${enLib
              ? `Combines the Siku Quanshu Classical Library (${classicsCount} Classics, Histories, Masters, and Collections) with the 2026–2030 Vietnam–China Trade Monograph, Modern Literature, and open academic archives.`
              : `Kết hợp Thư viện Cổ tịch Tứ Khố (${classicsCount} bộ Kinh, Sử, Tử, Tập) với Văn học 1918–2026, Báo cáo Thương mại Việt – Trung 58 trang và cơ sở dữ liệu nguồn kiểm chứng.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("library", librarySubpages, { enM: enLib }) : `<section class="page-section"><div class="container">${libClassicsHtml()}</div></section>`}
    `;
  }

  function renderMonographSubTab(mono) {
    const docId = mono && (mono.docCode || mono.docId);
    if (!mono || !docId) return `<div class="card">Đang tải dữ liệu Chuyên khảo...</div>`;
    const activeChap = ui.activeMonographChapter || "all";
    const visibleFigures = activeChap === "all"
      ? (mono.figures || [])
      : (mono.figures || []).filter((f) => String(f.chapter || "").includes(String(Number(activeChap))) || f.chapter === activeChap);

    const kpis = mono.heroKpis || mono.heroKPIs || [];
    const pdfHref = mono.pdfUrl || mono.pdfPath || "assets/docs/VN-CN-TRD-2026-Q4-Monograph.pdf";

    return `
      <div class="card mb-2" style="border:2px solid var(--border-gold);background:linear-gradient(135deg, #1E1815 0%, #2B211C 100%);color:#F7F4ED;">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
          <div>
            <div style="display:flex;gap:0.45rem;flex-wrap:wrap;margin-bottom:0.45rem;">
              <span class="badge badge-red">Mã tài liệu: ${escapeHtml(docId)}</span>
              <span class="badge badge-gold">${escapeHtml(mono.Classification || mono.classification || "Scholarly Monograph")}</span>
              <span class="badge badge-jade">${mono.pages || mono.pageCount || 58} Trang • 10 Chương • 14 Biểu đồ Độ phân giải Cao</span>
            </div>
            <h2 style="color:#F7F4ED;font-size:1.7rem;margin:0 0 0.25rem;">${escapeHtml(mono.titleVi)}</h2>
            <div class="hanzi" style="color:var(--gold);font-size:1.15rem;margin-bottom:0.25rem;">${escapeHtml(mono.titleZh)}</div>
            <p style="font-size:0.9rem;color:rgba(247,244,237,0.84);margin:0;">${escapeHtml(mono.titleEn || mono.subtitleVi || "")} • Nguồn dữ liệu: ${escapeHtml(mono.dataCutOff || mono.dataVintage || "")}</p>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <a href="${escapeHtml(pdfHref)}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${ICONS.download} Mở / Tải Bản PDF Gốc 58 Trang</a>
            <button type="button" class="btn btn-secondary btn-sm" data-action="open-article" data-id="china-vietnam-supply-chain-rcep">Đọc Chuyên luận Tích hợp 3 Cột</button>
          </div>
        </div>

        <div class="grid grid-3" style="gap:0.85rem;">
          ${kpis.map((k) => `
            <div style="padding:0.9rem 1rem;border-radius:var(--radius-sm);background:rgba(255,255,255,0.06);border:1px solid rgba(232,210,160,0.28);">
              <div style="font-size:1.38rem;font-weight:800;color:#E8D2A0;font-family:var(--font-editorial);">${escapeHtml(k.value)}</div>
              <div style="font-size:0.83rem;font-weight:700;color:#F7F4ED;margin:0.15rem 0;">${escapeHtml(k.label)}</div>
              <div style="font-size:0.75rem;color:rgba(247,244,237,0.72);">${escapeHtml(k.delta ? `${k.delta} • ${k.note || ""}` : k.sub || "")}</div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- 5 Research Questions & 10 Chapters -->
      <div class="grid grid-2 mb-2">
        <div class="card">
          <div class="editorial-kicker">Khung Phương pháp Luận • 5 Câu hỏi Nghiên cứu Trọng tâm (RQ1–RQ5)</div>
          <h3 style="margin:0.25rem 0 0.75rem;">Cấu trúc Mô hình Trọng lực, HS 6 Chữ số &amp; Chuỗi Giá trị</h3>
          ${(mono.researchQuestions || []).map((rq) => `
            <div class="flashcard-layer" style="margin-bottom:0.5rem;font-size:0.84rem;">
              <strong style="color:var(--imperial-red);">${escapeHtml(rq.id || rq.code)}:</strong> ${escapeHtml(rq.question || rq.q)}
              ${rq.finding ? `<div style="margin-top:0.2rem;color:var(--jade-green);"><strong>Phát hiện thực nghiệm:</strong> ${escapeHtml(rq.finding)}</div>` : ""}
            </div>
          `).join("")}
        </div>

        <div class="card">
          <div class="editorial-kicker">Cấu trúc 10 Chương (58 Trang) • Nhấp để lọc Biểu đồ theo Chương</div>
          <h3 style="margin:0.25rem 0 0.75rem;">Mục lục 10 Chương Chuyên khảo</h3>
          <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.75rem;">
            <button type="button" class="filter-pill ${activeChap === "all" ? "active" : ""}" data-action="filter-monograph-chap" data-chap="all">Tất cả 14 Biểu đồ</button>
            ${(mono.chapters || []).map((ch) => `
              <button type="button" class="filter-pill ${activeChap === ch.num ? "active" : ""}" data-action="filter-monograph-chap" data-chap="${ch.num}">Ch.${ch.num}</button>
            `).join("")}
          </div>
          <div style="max-height:290px;overflow-y:auto;padding-right:0.3rem;">
            ${(mono.chapters || []).map((ch) => `
              <div style="padding:0.45rem 0;border-bottom:1px solid var(--border-subtle);font-size:0.82rem;">
                <strong>${escapeHtml(ch.title || `Chương ${ch.num}: ${ch.titleVi || ""}`)}</strong><br>
                <span style="color:var(--text-secondary);">${escapeHtml(ch.summary)}</span>
              </div>
            `).join("")}
          </div>
        </div>
      </div>

      <!-- All 14 Extracted High-Resolution Statistical Charts -->
      <div class="section-header" style="margin-top:1.5rem;">
        <div>
          <div class="editorial-kicker">Hệ thống 14 Biểu đồ Kinh tế Lượng &amp; Thống kê • 十四幅高分辨率统计图表</div>
          <h2 class="section-title" style="font-size:1.65rem;">Bộ 14 Biểu đồ Trích xuất Nguyên bản từ Chuyên khảo (${visibleFigures.length}/14 Biểu đồ)</h2>
        </div>
      </div>

      <div class="grid grid-2 mb-2">
        ${visibleFigures.map((fig) => {
          const figSrc = fig.imageUrl || fig.src;
          const figTitle = fig.title || fig.titleVi;
          const figNum = fig.num || fig.id;
          return `
          <article class="card" style="display:flex;flex-direction:column;justify-content:space-between;">
            <div>
              <div style="position:relative;border-radius:var(--radius-sm);overflow:hidden;border:1px solid var(--border-subtle);background:#fff;margin-bottom:0.85rem;">
                <img src="${escapeHtml(figSrc)}" alt="${escapeHtml(figTitle)}" data-fig-id="${escapeHtml(fig.id)}" loading="eager" decoding="async" style="width:100%;height:auto;display:block;" />
                <button type="button" class="btn btn-primary btn-sm" style="position:absolute;top:0.6rem;right:0.6rem;" data-action="open-custom-image" data-src="${escapeHtml(figSrc)}" data-caption="${escapeHtml(figNum + " — " + figTitle + ": " + fig.insight)}" data-credit="VN-CN-TRD-2026-Q4 Monograph (GACC, VN Customs, NBS, MPI)">${ICONS.zoom} Phóng to Biểu đồ</button>
              </div>
              <div class="card-header-row">
                <span class="badge badge-red">${escapeHtml(figNum)} • ${escapeHtml(fig.chapter)}</span>
                <span class="badge badge-gold">${escapeHtml(fig.id.toUpperCase())}</span>
              </div>
              <h3 class="card-title" style="font-size:1.12rem;">${escapeHtml(figTitle)}</h3>
              <p style="font-size:0.84rem;color:var(--text-secondary);margin-bottom:0;">${escapeHtml(fig.insight)}</p>
            </div>
          </article>
        `;
        }).join("")}
      </div>

      <!-- Empirical Data Tables: 2021-2026E Series, Export/Import Breakdown, 2030F Scenarios & Econometric Betas -->
      <div class="grid grid-2 mb-2">
        <div class="card">
          <h3 class="card-title">Bảng 1: Chuỗi Thời gian Thương mại Song phương 2021–2026E (Tỷ USD)</h3>
          <div class="academic-table-wrap">
            <table class="academic-table">
              <thead>
                <tr>
                  <th>Kỳ Thống kê</th>
                  <th>Tổng Kim ngạch (VN)</th>
                  <th>VN Xuất khẩu</th>
                  <th>VN Nhập khẩu</th>
                  <th>Cán cân (VN)</th>
                  <th>GACC Trung Quốc</th>
                </tr>
              </thead>
              <tbody>
                ${(mono.macroTimeSeries || []).map((r) => `
                  <tr>
                    <td><strong>${escapeHtml(r.period || r.year)}</strong></td>
                    <td><strong>$${escapeHtml(r.vnTotal || r.totalTurnover)}B</strong> (${escapeHtml(r.vnYoY || r.yoy)})</td>
                    <td>$${escapeHtml(r.vnExport || r.vnExports)}B</td>
                    <td>$${escapeHtml(r.vnImport || r.vnImports)}B</td>
                    <td style="color:var(--imperial-red);">${escapeHtml(r.vnBalance)}B</td>
                    <td>$${escapeHtml(r.gaccTotal)}B</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Bảng 2: Ba Kịch bản Dự báo Kinh tế Lượng 2026E–2030F &amp; Hệ số Beta (β)</h3>
          <div class="academic-table-wrap" style="margin-bottom:0.85rem;">
            <table class="academic-table">
              <thead>
                <tr>
                  <th>Kịch bản (2026E–2030F)</th>
                  <th>CAGR</th>
                  <th>Kim ngạch 2030F (VN / GACC)</th>
                  <th>Cán cân 2030F</th>
                </tr>
              </thead>
              <tbody>
                ${(mono.forecastScenarios || []).map((sc) => {
                  const y2030 = sc.years && sc.years["2030F"] ? sc.years["2030F"] : null;
                  return `
                  <tr>
                    <td><strong>${escapeHtml(sc.scenario || sc.name)}</strong><br><span class="text-xs" style="color:var(--text-muted);">${escapeHtml(sc.assumptions || sc.drivers)}</span></td>
                    <td><strong>${escapeHtml(sc.cagr)}</strong></td>
                    <td><strong>${y2030 ? `$${y2030.totalVN}B (GACC: $${y2030.totalGACC}B)` : escapeHtml(sc.turnover2030 || "")}</strong></td>
                    <td>${y2030 ? `${y2030.balance}B` : escapeHtml(sc.deficit2030 || "")}</td>
                  </tr>
                `;
                }).join("")}
              </tbody>
            </table>
          </div>
          <div class="flashcard-layer" style="font-size:0.8rem;">
            <strong>Ước lượng Trọng lực PPML / OLS (R² = 0,914):</strong>
            ${(mono.econometricBetas || []).map((b) => `<div style="margin-top:0.2rem;">• <code>${escapeHtml(b.variable)}</code>: <strong>β = ${escapeHtml(b.beta)}</strong> (t = ${escapeHtml(b.tStat || b.sig)}) — ${escapeHtml(b.meaning)}</div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Dedicated Executive Research Reports Shelf (Separated from Knowledge Articles) -->
      <div class="card mb-2" style="border-color:var(--border-gold);">
        <div class="card-header-row">
          <span class="badge badge-red">PHÂN KHU BÁO CÁO RIÊNG BIỆT • EXECUTIVE RESEARCH REPORTS</span>
          <span class="card-title-zh">独立研究报告专区</span>
        </div>
        <h3 class="card-title" style="font-size:1.4rem;">Kho 5 Báo cáo Nghiên cứu Chuyên sâu (Tách riêng khỏi Bài Kiến thức)</h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:1rem;">
          Các báo cáo định lượng, mô hình kinh tế lượng và nghiên cứu chiến lược cấp điều hành được lưu trữ riêng tại phân khu này để phục vụ tra cứu số liệu gốc, tải PDF và đối chiếu phương pháp luận; phần nội dung học thuật đã được cắt nhỏ thành 18 bài kiến thức độc lập trong hệ thống chuyên luận.
        </p>
        <div class="grid grid-2">
          ${((Compendia && Compendia.catalog) || []).filter((d) => ["VN-CN-TRD-2026-Q4", "CN-AI-REV-2026-Q4", "GD-SZ-VN-DYN-2026", "CN-B2B-NEG-2026", "CN-GEO-SUP-2026"].includes(d.code)).map((rep) => `
            <div class="flashcard-layer" style="display:flex;flex-direction:column;justify-content:space-between;gap:0.5rem;">
              <div>
                <div style="display:flex;justify-content:space-between;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.3rem;">
                  <span class="badge badge-red">${escapeHtml(rep.code)}</span>
                  <span class="badge badge-outline">${escapeHtml(rep.pages)}</span>
                </div>
                <strong style="font-size:1rem;">${escapeHtml(rep.titleVi)}</strong>
                <div style="font-size:0.8rem;color:var(--text-muted);margin:0.2rem 0;">${escapeHtml(rep.titleZh)}</div>
                <p style="font-size:0.82rem;color:var(--text-secondary);margin:0.35rem 0 0;">${escapeHtml(rep.summary)}</p>
              </div>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-top:0.4rem;">
                ${rep.code === "VN-CN-TRD-2026-Q4" ? `<a href="assets/docs/VN-CN-TRD-2026-Q4-Monograph.pdf" target="_blank" rel="noopener" class="btn btn-primary btn-sm">${ICONS.download} Tải PDF 58 Trang</a>` : ""}
                <button type="button" class="btn btn-secondary btn-sm" data-action="set-library-subtab" data-tab="compendia">Xem Bài Kiến thức Cắt nhỏ →</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderCompendiaSubTab() {
    const catalog = (Compendia && Compendia.catalog) || [];
    const slicedArticles = window.CCE_COMPENDIA_ARTICLES || Articles.filter((a) => a.number >= 23);
    const ai = (Compendia && Compendia.aiRevolution2026) || {};
    const south = (Compendia && Compendia.southernDynamism) || {};
    const neg = (Compendia && Compendia.b2bNegotiation) || {};
    const tea = (Compendia && Compendia.teaAndLaozihao) || {};
    const guilin = (Compendia && Compendia.guilin2026) || {};
    const cities7 = (Compendia && Compendia.sevenCitiesMatrix) || [];
    const phrases = (Compendia && Compendia.phrasebookCategories) || [];

    return `
      <!-- 18 Sliced Knowledge Articles from the 9 Master Monographs & Field Guides -->
      <div class="section-header">
        <div>
          <div class="editorial-kicker">Cắt nhỏ Tri thức Chuyên khảo • 18 Bài Kiến thức Chuyên sâu (Articles #23–#40)</div>
          <h2 class="section-title" style="font-size:1.65rem;">Hệ thống ${slicedArticles.length} Bài Kiến thức Cắt nhỏ từ 9 Bộ Chuyên khảo &amp; Cẩm nang 2026</h2>
        </div>
      </div>

      <div class="grid grid-3 mb-2">
        ${(() => {
          const Pager = window.CCE_V10_PAGINATOR;
          const slPaged = Pager ? Pager.paginate(slicedArticles, "library-compendia-sliced", { desktopPerPage: 9, mobilePerPage: 6 }) : { slice: slicedArticles, renderControls: () => "" };
          return slPaged.slice.map((art) => renderArticleCard(art)).join("") + `<div style="grid-column:1/-1;">${slPaged.renderControls(isEnglishUi())}</div>`;
        })()}
      </div>

      <!-- Source Compendia Traceability Index -->
      <div class="section-header" style="margin-top:2rem;">
        <div>
          <div class="editorial-kicker">Truy xuất Nguồn gốc • 九大核心专著与指南目录</div>
          <h2 class="section-title" style="font-size:1.45rem;">Danh mục 9 Bộ Chuyên khảo &amp; Cẩm nang Gốc</h2>
        </div>
      </div>

      <div class="grid grid-3 mb-2">
        ${catalog.map((doc, dIdx) => `
          <article class="card">
            ${renderAcademicCardThumb({ src: doc.heroImage, caption: doc.titleVi, credit: doc.code }, `${doc.code} • ${doc.pages}`)}
            <div class="card-header-row">
              <span class="badge badge-red">${escapeHtml(doc.code)}</span>
              <span class="card-title-zh">${escapeHtml(doc.titleZh)}</span>
            </div>
            <h3 class="card-title" style="font-size:1.1rem;">${escapeHtml(doc.titleVi)}</h3>
            <p style="font-size:0.83rem;color:var(--text-secondary);">${escapeHtml(doc.summary)}</p>
            <div style="display:flex;flex-wrap:wrap;gap:0.3rem;margin-top:auto;">
              ${(doc.highlights || []).map((h) => `<span class="badge badge-outline" style="font-size:0.7rem;">${escapeHtml(h)}</span>`).join("")}
            </div>
          </article>
        `).join("")}
      </div>

      ${window.CCE_V3_W5 ? window.CCE_V3_W5.renderCompendiaSvgDiagrams(isEnglishUi()) : ""}

      <!-- Deep Module A: China's AI Revolution & Semiconductors 2026 -->
      <div class="card mb-2" style="border-color:var(--border-gold);">
        <div class="card-header-row">
          <span class="badge badge-red">${isEnglishUi() ? "TECHNOLOGY MONOGRAPH · 2026" : "CHUYÊN KHẢO CÔNG NGHỆ · 2026"}</span>
          <span class="card-title-zh">中国人工智能与半导体革命</span>
        </div>
        <h3 class="card-title" style="font-size:1.45rem;">Cách mạng AI &amp; Bán dẫn Trung Quốc 2026: DeepSeek-R1/V3, Qwen 2.5, Huawei Ascend 910C &amp; SMIC 7nm</h3>
        <div class="grid grid-2" style="margin-top:0.85rem;">
          <div>
            <div class="academic-table-wrap">
              <table class="academic-table">
                <thead>
                  <tr>
                    <th>${isEnglishUi() ? "Model / Lab" : "Mô hình / Nhà phát triển"}</th>
                    <th>${isEnglishUi() ? "Architecture &amp; Context" : "Kiến trúc &amp; Ngữ cảnh"}</th>
                    <th>${isEnglishUi() ? "Benchmark Score" : "Chỉ số đối chiếu"}</th>
                    <th>${isEnglishUi() ? "API Price &amp; License" : "Giá API &amp; Giấy phép"}</th>
                  </tr>
                </thead>
                <tbody>
                  ${((ai.modelsMatrix || ai.frontierModels || [])).map((m) => `
                    <tr>
                      <td><strong>${escapeHtml(m.model)}</strong></td>
                      <td>${escapeHtml(m.arch)}<br><span class="text-xs" style="color:var(--text-muted);">${escapeHtml(m.context || "")}</span></td>
                      <td><span class="badge badge-jade" style="font-size:0.7rem;">${escapeHtml(m.benchmarks || "")}</span></td>
                      <td><strong>${escapeHtml(m.price || "")}</strong><br><span class="text-xs" style="color:var(--text-muted);">${escapeHtml(m.license || "")}</span></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <div class="flashcard-layer" style="margin-bottom:0.6rem;font-size:0.84rem;">
              <strong style="color:var(--imperial-red);">3 Nút thắt Chuỗi Bán dẫn Nội địa:</strong><br>
              ${((ai.semiconductorBottlenecks || ai.semiconductorStack || [])).map((s) => `• <strong>${escapeHtml(s.layer || s.chip)}:</strong> ${escapeHtml(s.status || s.spec)} — <em>${escapeHtml(s.metric || s.role)}</em><br>`).join("")}
            </div>
            <div class="flashcard-layer" style="background:var(--bg-jade-soft);font-size:0.84rem;">
              <strong style="color:var(--jade-green);">Chiến lược Triển khai cho Doanh nghiệp Việt Nam:</strong><br>
              ${((ai.vietnamAiPlaybook || ai.vietnamPlaybook || [])).map((p) => `• <strong>${escapeHtml(p.caseId)}:</strong> ${escapeHtml(p.workflow)} <em>(${escapeHtml(p.saving)})</em><br>`).join("")}
            </div>
          </div>
        </div>
      </div>

      <!-- Deep Module B: Southern Chinese Commercial Dynamism & B2B Negotiation Playbook -->
      <div class="grid grid-2 mb-2">
        <div class="card">
          ${renderAcademicCardThumb({ src: "assets/images/articles/hero-contemporary-china.jpg", caption: "Thâm Quyến — Quảng Đông ($1,92 nghìn tỷ GDP • 5,81% R&D) & Chu kỳ 7 ngày Hoa Cường Bắc", credit: "Wikimedia Commons" }, "COMPENDIUM #8 • 华南商业动力")}
          <h3 class="card-title">Kiến trúc Động lực Thương mại Hoa Nam (Quảng Đông, Quảng Châu, Thâm Quyến vs. Việt Nam)</h3>
          <div class="academic-table-wrap" style="margin-bottom:0.75rem;">
            <table class="academic-table">
              <thead>
                <tr>
                  <th>Chỉ tiêu</th>
                  <th>Quảng Đông</th>
                  <th>Quảng Châu / Thâm Quyến</th>
                  <th>Việt Nam (Đối sánh)</th>
                </tr>
              </thead>
              <tbody>
                ${((south.quantitativeBenchmarks || south.macroComparison || [])).map((r) => `
                  <tr>
                    <td><strong>${escapeHtml(r.metric)}</strong></td>
                    <td><strong>${escapeHtml(r.guangdong)}</strong></td>
                    <td>GZ: ${escapeHtml(r.guangzhou)}<br>SZ: <strong>${escapeHtml(r.shenzhen)}</strong></td>
                    <td>${escapeHtml(r.vietnam)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div class="flashcard-layer" style="font-size:0.82rem;">
            <strong>Chu kỳ 7 Ngày Hoa Cường Bắc (华强北):</strong><br>
            ${((south.shenzhen7DayCycle || south.huaqiangbei7DayCycle || [])).map((c) => (typeof c === "string" ? escapeHtml(c) : `• <strong>${escapeHtml(c.day)}:</strong> ${escapeHtml(c.task)}<br>`)).join("")}
          </div>
        </div>

        <div class="card">
          ${renderAcademicCardThumb({ src: "assets/images/articles/hero-guanxi.jpg", caption: "Đàm phán Kinh doanh B2B 5 Vùng miền, Thẩm định NECIPS & Quản trị Công chương (公章)", credit: "Corporate Archive" }, "COMPENDIUM #6 • B2B商务谈判")}
          <h3 class="card-title">Đàm phán B2B với Đối tác Trung Quốc: Ma trận 5 Vùng &amp; 7 Bước Kiểm soát Rủi ro</h3>
          <div class="academic-table-wrap" style="margin-bottom:0.75rem;">
            <table class="academic-table">
              <thead>
                <tr>
                  <th>Vùng Kinh tế</th>
                  <th>Đặc điểm Thể chế &amp; Văn hóa</th>
                  <th>Chiến lược Đàm phán Thực chiến</th>
                </tr>
              </thead>
              <tbody>
                ${((neg.regionalStyles || [])).map((rs) => `
                  <tr>
                    <td><strong>${escapeHtml(rs.region)}</strong></td>
                    <td>${escapeHtml(rs.profile || rs.archetype || "")}</td>
                    <td>${escapeHtml(rs.strategy || rs.keyTactic || "")}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
          <div class="flashcard-layer" style="font-size:0.81rem;">
            <strong>8 Mẫu Câu Đàm phán Tam ngữ Trọng yếu:</strong>
            ${(neg.trilingualScripts || []).slice(0, 4).map((sc) => `<div style="margin-top:0.25rem;">• <strong>[${escapeHtml(sc.topic)}]</strong> <span class="hanzi">${escapeHtml(sc.zh)}</span> — ${escapeHtml(sc.vi)}</div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Deep Module C: 7-City 12-Dimension Matrix + Practical Travel & Trade Phrasebook -->
      <div class="grid grid-2">
        <div class="card">
          <h3 class="card-title">Ma trận Đối sánh 7 Đô thị Chiến lược (COMPENDIUM #7 &amp; #9)</h3>
          <div class="academic-table-wrap">
            <table class="academic-table">
              <thead>
                <tr>
                  <th>Đô thị</th>
                  <th>Cấp hành chính / Khí hậu</th>
                  <th>Phương ngôn &amp; Ẩm thực</th>
                  <th>Định vị Kinh tế &amp; Thương mại</th>
                </tr>
              </thead>
              <tbody>
                ${cities7.map((c) => `
                  <tr>
                    <td><strong>${escapeHtml(c.city)}</strong></td>
                    <td>${escapeHtml(c.status)}<br><span class="text-xs">${escapeHtml(c.climate)}</span></td>
                    <td>${escapeHtml(c.dialect)} • ${escapeHtml(c.cuisine)}</td>
                    <td>${escapeHtml(c.businessStyle)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Sổ tay Tiếng Trung Du lịch, Hải quan, Trà đạo &amp; Thương mại (COMPENDIUM #2, #3, #4)</h3>
          <div style="max-height:360px;overflow-y:auto;padding-right:0.35rem;">
            ${phrases.map((cat) => `
              <div style="margin-bottom:0.85rem;">
                <div class="badge badge-gold" style="margin-bottom:0.4rem;">${escapeHtml(cat.title)}</div>
                ${(cat.phrases || []).map((p) => `
                  <div class="flashcard-layer" style="margin-bottom:0.35rem;font-size:0.82rem;">
                    <span class="hanzi" style="font-size:1rem;font-weight:700;color:var(--imperial-red);">${escapeHtml(p.zh)}</span>
                    <span class="pinyin" style="margin-left:0.35rem;">(${escapeHtml(p.py)})</span> ${renderSpeakBtn(p.zh)}<br>
                    <strong>VI:</strong> ${escapeHtml(p.vi)}
                  </div>
                `).join("")}
              </div>
            `).join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderIntelligenceSubTab(intelItems, srcDir) {
    const filteredIntel = ui.intelFilterType === "all"
      ? intelItems
      : intelItems.filter((it) => (it.subsectionId || it.categoryCode) === ui.intelFilterType);
    const filteredSources = ui.sourceFilterType === "all"
      ? srcDir
      : srcDir.filter((s) => (s.type || s.typeCode) === ui.sourceFilterType);

    return `
      <div class="section-header">
        <div>
          <div class="editorial-kicker">CHINA KNOWLEDGE INTELLIGENCE • 中国知识动态 (10 Phân mục Giám sát)</div>
          <h2 class="section-title" style="font-size:1.65rem;">Hệ thống Cập nhật Nghiên cứu Học thuật, Khảo cổ &amp; Kinh tế Đương đại</h2>
        </div>
      </div>

      <div class="grid grid-2 mb-2">
        ${filteredIntel.map((item) => {
          const imgSrc = item.imageUrl || item.image;
          const subTitle = item.subsectionTitleVi || item.subsection;
          const verBadge = item.verificationStatus || item.verificationBadge || "Verified";
          const inst = item.sourceName || item.institution;
          const updDate = item.updateDate || item.websiteUpdatedDate;
          const relSlug = item.relatedArticleSlug || item.linkedArticleId;
          return `
          <article class="card">
            ${renderAcademicCardThumb({ src: imgSrc, caption: item.titleVi, credit: inst }, `${subTitle} • ${verBadge}`)}
            <div class="card-header-row">
              <span class="badge badge-red">${escapeHtml(subTitle)}</span>
              <span class="badge badge-jade">${escapeHtml(verBadge)} (${escapeHtml(item.sourceType)})</span>
            </div>
            <div class="card-title-zh">${escapeHtml(item.titleZh)}</div>
            <h3 class="card-title" style="font-size:1.15rem;">${escapeHtml(item.titleVi)}</h3>
            <div class="text-xs" style="color:var(--text-muted);margin-bottom:0.5rem;">
              <strong>Cơ quan công bố:</strong> ${escapeHtml(inst)} • <strong>Sự kiện:</strong> ${escapeHtml(item.eventDate)} • <strong>Xác minh:</strong> ${escapeHtml(updDate)}
            </div>
            <p style="font-size:0.86rem;color:var(--text-secondary);">${escapeHtml(item.summaryVi)}</p>
            <div style="display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--border-subtle);padding-top:0.65rem;margin-top:auto;">
              <span class="badge badge-outline">${escapeHtml(item.freshnessGroup || "Verified")}</span>
              ${relSlug ? `<button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${escapeHtml(relSlug)}">Mở Chuyên luận Liên kết →</button>` : ""}
            </div>
          </article>
        `;
        }).join("")}
      </div>

      <!-- Multi-Language Source Directory (TYPE A - TYPE E) -->
      <div class="card" style="margin-top:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:1rem;">
          <div>
            <div class="editorial-kicker">Phân tầng Độ tin cậy Nguồn • 五级信源分类体系 (TYPE A – TYPE E)</div>
            <h3 style="margin:0.2rem 0 0;">Danh bạ Nguồn Học thuật Đa ngôn ngữ (Trung – Việt – Quốc tế)</h3>
          </div>
          <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
            ${["all", "TYPE A", "TYPE B", "TYPE C", "TYPE D", "TYPE E"].map((tp) => `
              <button type="button" class="filter-pill ${ui.sourceFilterType === tp ? "active" : ""}" data-action="filter-source-type" data-type="${tp}">${tp === "all" ? `Tất cả (${srcDir.length})` : tp}</button>
            `).join("")}
          </div>
        </div>

        <div class="academic-table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Phân loại</th>
                <th>Tên Cơ sở Dữ liệu / Cơ quan</th>
                <th>Ngôn ngữ &amp; Lĩnh vực</th>
                <th>Mức độ Tin cậy &amp; Quy tắc Sử dụng</th>
              </tr>
            </thead>
            <tbody>
              ${filteredSources.map((s) => {
                const sType = s.type || s.typeCode;
                return `
                <tr>
                  <td><span class="badge ${sType === "TYPE E" ? "badge-gold" : "badge-jade"}">${escapeHtml(sType)}</span><br><span class="text-xs">${escapeHtml(s.typeLabel)}</span></td>
                  <td>
                    <strong><a href="${escapeHtml(s.url)}" target="_blank" rel="noopener">${escapeHtml(s.name)} ↗</a></strong><br>
                    <span class="text-xs" style="color:var(--imperial-red);">${escapeHtml(s.institution || s.nameZh || "")}</span>
                  </td>
                  <td>${escapeHtml(s.language.toUpperCase())} (${escapeHtml(s.region || "")})<br><span class="text-xs" style="color:var(--text-muted);">${escapeHtml(s.domain)}</span></td>
                  <td style="font-size:0.82rem;"><strong>${escapeHtml(s.verification || s.reliability)}</strong> — ${escapeHtml(s.credibility || s.notes)}</td>
                </tr>
              `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  function renderAuditSubTab(audit, sched) {
    if (!audit || !audit.auditId) return `<div class="card">Đang tải hồ sơ chuẩn mực biên tập...</div>`;
    const records = audit.articleAudits || audit.articleAuditRecords || {};
    const inv = audit.inventorySummary || {};
    const envDisc = (sched && sched.environmentDisclosure) || {};
    const gaps = audit.gapTypes || audit.gapTypesResolved || [];
    const backlog = audit.prioritizedBacklog || audit.improvementBacklog || [];
    const cadences = (sched && (sched.cadences || sched.tiers)) || [];

    return `
      <div class="card mb-2" style="border-color:var(--border-gold);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;margin-bottom:1rem;">
          <div>
            <span class="badge badge-red">Cập nhật Thư mục: ${escapeHtml(audit.auditDate)}</span>
            <h2 style="margin:0.35rem 0 0.2rem;">Hồ sơ Tổng hợp Hệ thống Nguồn &amp; Tiêu chuẩn Biên tập</h2>
            <p style="font-size:0.88rem;color:var(--text-secondary);margin:0;">Chủ biên &amp; Phê duyệt Học thuật: <strong>${escapeHtml(audit.leadAuditor || audit.auditor)}</strong></p>
          </div>
          <span class="badge badge-jade" style="font-size:0.9rem;padding:0.45rem 0.85rem;">${Articles.length} Chuyên luận Đã Đối chiếu Nguồn</span>
        </div>

        <div class="grid grid-4" style="gap:0.75rem;margin-bottom:1rem;">
          <div class="stat-card"><div class="stat-value">${Articles.length}</div><div class="stat-label">Chuyên luận Đã Đối chiếu</div></div>
          <div class="stat-card"><div class="stat-value">9</div><div class="stat-label">Chuyên khảo &amp; Cẩm nang 2026</div></div>
          <div class="stat-card"><div class="stat-value">${inv.dictionaryEntries || Dictionary.length}</div><div class="stat-label">Thuật ngữ Hán–Việt–Anh</div></div>
          <div class="stat-card"><div class="stat-value">${inv.provincialDivisions || 34}</div><div class="stat-label">Đơn vị Hành chính Cấp Tỉnh</div></div>
        </div>

        <div class="epistemic-box" style="margin-bottom:0;">
          <div class="epistemic-title">Nguyên tắc Minh bạch Học thuật (${escapeHtml(envDisc.mode || "Chuẩn mực Tư liệu & Phân định Sử liệu")})</div>
          <p style="margin:0;font-size:0.85rem;">${escapeHtml(envDisc.honestStatementVi || sched.architectureNote || "")}</p>
        </div>
      </div>

      <!-- 10 Gap Types & 4 Priority Levels -->
      <div class="grid grid-2 mb-2">
        <div class="card">
          <h3 class="card-title">10 Tiêu chuẩn Chuẩn hóa Học thuật Áp dụng Trên Toàn Hệ thống</h3>
          <div style="max-height:320px;overflow-y:auto;padding-right:0.3rem;">
            ${gaps.map((g) => `
              <div style="padding:0.45rem 0;border-bottom:1px solid var(--border-subtle);font-size:0.82rem;">
                <span class="badge badge-jade">${escapeHtml(g.code)} • ${escapeHtml(g.status)}</span>
                <strong style="margin-left:0.35rem;">${escapeHtml(g.name)}</strong><br>
                <span style="color:var(--text-secondary);">${escapeHtml(g.action || g.resolution)}</span>
              </div>
            `).join("")}
          </div>
        </div>

        <div class="card">
          <h3 class="card-title">Lịch trình Hiệu đính Thư mục &amp; 4 Trọng tâm Biên tập</h3>
          ${backlog.map((p) => `
            <div class="flashcard-layer" style="margin-bottom:0.45rem;font-size:0.82rem;">
              <strong>${escapeHtml(p.priority)}:</strong> <span class="badge badge-jade">${escapeHtml(p.status)}</span><br>
              <span style="color:var(--text-secondary);">${escapeHtml(p.description || p.items)}</span>
            </div>
          `).join("")}
          <hr style="border:none;border-top:1px solid var(--border-subtle);margin:0.65rem 0;" />
          <div style="font-size:0.81rem;">
            <strong>Chu kỳ Rà soát Định kỳ:</strong>
            ${cadences.map((t) => `<div style="margin-top:0.2rem;">• <strong>${escapeHtml(t.cycle || t.frequency)}:</strong> ${escapeHtml(t.focus)} (${escapeHtml(t.method || t.nextDue)})</div>`).join("")}
          </div>
        </div>
      </div>

      <!-- Article-by-Article Editorial Status Matrix -->
      <div class="card">
        <h3 class="card-title">Hồ sơ Thư mục &amp; Trạng thái Hiệu đính của ${Articles.length} Chuyên luận</h3>
        <div class="academic-table-wrap">
          <table class="academic-table">
            <thead>
              <tr>
                <th>Chuyên luận</th>
                <th>Nhóm Độ ổn định Sử liệu</th>
                <th>Trạng thái Đối chiếu</th>
                <th>Xác minh Gần nhất &amp; Ghi chú Hiệu đính</th>
              </tr>
            </thead>
            <tbody>
              ${Articles.map((a) => {
                const rec = records[a.id] || { freshnessGroup: "Tri thức Nền tảng Cốt lõi", statusBadge: "Đã đối chiếu Sử liệu", lastVerified: "2026-11-15", changeLog: "Đã đối chiếu nguyên bản chữ Hán, phiên âm Hán–Việt và thư mục nguồn sơ cấp/thứ cấp." };
                return `
                  <tr>
                    <td>
                      <button type="button" class="btn btn-ghost btn-sm" style="text-align:left;padding:0;font-weight:700;" data-action="open-article" data-id="${a.id}">${escapeHtml(a.titleVi)} →</button><br>
                      <span class="hanzi text-xs" style="color:var(--imperial-red);">${escapeHtml(a.titleZh)}</span>
                    </td>
                    <td><span class="text-xs">${escapeHtml(rec.freshnessGroup)}</span></td>
                    <td><span class="badge badge-jade">${escapeHtml(rec.statusBadge || rec.freshnessBadge)}</span><br><span class="text-xs" style="color:var(--jade-green);">Đạt chuẩn thư mục tham khảo</span></td>
                    <td style="font-size:0.81rem;"><strong>${escapeHtml(rec.lastVerified || rec.lastVerifiedDate)}:</strong> ${escapeHtml(rec.changeLog || rec.changelog)}</td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Page 10: MY LEARNING SYSTEM (Dashboard, Dictionary, Flashcards, K-Map, Quiz, Journal)
  // ==========================================================================
  function renderLearningPage() {
    syncArticlesRef();
    const enL = isEnglishUi();
    const state = Store.getState();
    const notebookCount = (state.vocabNotebook || []).length;
    const totalQuizCnt = Math.max(1000, Array.isArray(window.CCE_MASTER_QUIZ_830) && window.CCE_MASTER_QUIZ_830.length >= 1000 ? window.CCE_MASTER_QUIZ_830.length : 1000);

    const learnDashboardHtml = () => `
          ${renderAcademicSectionBanner("learning", `
            <div style="display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:0.55rem;">
              <div style="border:1px solid var(--hairline);padding:0.45rem 0.6rem;background:var(--bg-paper);">
                <div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;">${enL ? "Monographs" : "Chuyên luận"}</div>
                <strong style="font-size:0.95rem;color:var(--imperial-red);">${state.completedArticles.length} / ${Articles.length}</strong>
              </div>
              <div style="border:1px solid var(--hairline);padding:0.45rem 0.6rem;background:var(--bg-paper);">
                <div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;">${enL ? "Saved Terms" : "Từ vựng lưu"}</div>
                <strong style="font-size:0.95rem;color:var(--jade-green);">${notebookCount + (state.collectedVocab || []).length}</strong>
              </div>
              <div style="border:1px solid var(--hairline);padding:0.45rem 0.6rem;background:var(--bg-paper);">
                <div style="font-family:var(--font-mono);font-size:0.68rem;color:var(--text-muted);text-transform:uppercase;">${enL ? "Study Notes" : "Ghi chú"}</div>
                <strong style="font-size:0.95rem;color:var(--antique-gold);">${(state.notes || []).length}</strong>
              </div>
            </div>
          `)}
          ${renderLearningDashboard()}
    `;

    const learnKmapHtml = () => renderKnowledgeMapTab();

    const learnLexiconHtml = () => {
      const subMode = ui.lexiconSubMode === "survival" ? "survival" : "dict";
      return `
        <div class="tabs-bar" style="margin-bottom:1.15rem;">
          <button type="button" class="tab-btn ${subMode === "dict" ? "active" : ""}" data-action="set-lexicon-submode" data-mode="dict">${enL ? `Liushu Cultural Lexicon (${Dictionary.length})` : `Từ điển Lục thư (${Dictionary.length} mục từ)`}</button>
          <button type="button" class="tab-btn ${subMode === "survival" ? "active" : ""}" data-action="set-lexicon-submode" data-mode="survival">${enL ? "10 Survival Hanzi Packs" : "10 bộ chữ Hán sinh tồn"}</button>
        </div>
        ${subMode === "survival" ? renderSurvivalHanziTab() : `${renderDictionaryTab()}${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderLexicon120Evolution(enL) : ""}`}
      `;
    };

    const learnNotebookHtml = () => renderVocabularyNotebookTab();
    const learnQuizHtml = () => renderQuizTab();
    const learnAcademicHtml = () => `
      ${window.CCE_V10_DISCOVERY ? window.CCE_V10_DISCOVERY.renderHsk79AndTradeCases("hsk", enL) : ""}
      ${window.CCE_V8_STUDIOS ? window.CCE_V8_STUDIOS.renderHsk79PassagesStudio(enL) : ""}
      ${window.CCE_V12_VIEWS ? window.CCE_V12_VIEWS.renderAcademy985AndHsk50(enL) : ""}
      <div style="margin-top:2rem;">
        ${renderJournalTab()}
      </div>
    `;

    const learningSubpages = [
      { id: "dashboard", labelVi: "Lộ trình học tập", labelEn: "Dashboard & Pathways", render: learnDashboardHtml },
      { id: "kmap", labelVi: "Bản đồ tri thức", labelEn: "Knowledge Map", render: learnKmapHtml },
      { id: "lexicon", labelVi: "Từ điển Lục thư", labelEn: "Lexicon & Survival Hanzi", count: Dictionary.length, render: learnLexiconHtml },
      { id: "notebook", labelVi: "Sổ tay SM-2", labelEn: "Notebook & SM-2 Review", count: notebookCount, render: learnNotebookHtml },
      { id: "quiz", labelVi: "Trắc nghiệm", labelEn: "Quiz & Feynman Arena", count: totalQuizCnt, render: learnQuizHtml },
      { id: "academic", labelVi: "Đọc hiểu HSK 7–9", labelEn: "HSK 7–9, CSC & Journal", render: learnAcademicHtml }
    ];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enL ? "Learning Hub and Contextual Vocabulary · 个人知识管理与语境词汇" : "Hệ thống học tập và sổ tay tri thức · 个人知识管理与语境词汇"}</div>
          <h1>${enL ? "Interactive learning hub and vocabulary reading notebook" : "Hệ thống học tập tương tác và sổ tay từ vựng"}</h1>
          <p class="section-subtitle">
            ${enL
              ? `Highlight phrases directly inside monographs, study ${Dictionary.length} Liushu entries, practice ${totalQuizCnt} quiz questions, and organize your personal reading notes.`
              : `Tích hợp từ điển Lục thư ${Dictionary.length} mục từ, sổ tay từ vựng ngữ cảnh, đấu trường ${totalQuizCnt} câu hỏi và nhật ký học tập lưu trực tiếp trên trình duyệt.`}
          </p>
        </div>
      </section>
      ${window.CCE_V10_DECK ? window.CCE_V10_DECK.renderDeck("learning", learningSubpages, { enM: enL }) : `<section class="page-section"><div class="container">${learnDashboardHtml()}</div></section>`}
      ${window.CCE_V11_HUB ? `<div class="container">${window.CCE_V11_HUB.renderCrossPageKnowledgeStrip("learning", enL)}</div>` : ""}
    `;
  }

  function renderSurvivalHanziTab() {
    const packs = (window.CCE_SURVIVAL_PACKS && window.CCE_SURVIVAL_PACKS.packs) || [];
    const filterId = ui.survivalPackFilter || "all";
    const visiblePacks = filterId === "all" ? packs : packs.filter((p) => p.id === filterId);
    const totalCount = packs.reduce((acc, p) => acc + (p.items ? p.items.length : 0), 0);
    const zeroPinyin = Boolean(ui.survivalZeroPinyin);
    const revealedMap = ui.revealedSurvivalIds || {};
    const enL = isEnglishUi();

    return `
      <div class="card mb-2" style="padding:1.25rem 1.35rem;border-top:3px solid var(--jade-green);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:0.85rem;">
          <div>
            <div class="editorial-kicker" style="color:var(--jade-green);margin-bottom:0.2rem;">${enL ? "PRE-DEPARTURE SURVIVAL HANZI PACKS · LIUSHU LOGIC" : "HÀNH TRANG CHỮ HÁN THỰC CHIẾN · 六书实用汉字备忘"}</div>
            <h2 style="font-family:var(--font-editorial);font-size:1.55rem;margin:0 0 0.35rem;">${enL ? `${packs.length} Field Survival Hanzi Packs (${totalCount} Core Signage & Rail Phrases)` : `${packs.length} Bộ Chữ Hán Sinh Tồn Trước Giờ Bay (${totalCount} Cụm Từ Cốt Lõi Theo Logic Lục Thư)`}</h2>
            <p style="margin:0;font-size:0.88rem;color:var(--text-secondary);max-width:74ch;">
              ${enL
                ? "Instead of rote memorization, every 12306 station sign, museum rule, menu option, and police term is unpacked via Six Writings radical logic. Toggle <strong>Zero-Pinyin Active Recall</strong> to test instant visual recognition before flying."
                : "Thay vì học vẹt từng mặt chữ, mỗi biển báo ga cao tốc 12306, bảo tàng, quán ăn và đồn công an đều được giải mã theo cấu trúc bộ thủ Lục thư. Bật <strong>Zero-Pinyin Active Recall</strong> để tự kiểm tra phản xạ nhận mặt chữ trước khi đi thực địa."}
            </p>
          </div>
          <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
            <button type="button" class="btn ${zeroPinyin ? "btn-primary" : "btn-secondary"} btn-sm" data-action="toggle-survival-zero-pinyin" aria-pressed="${zeroPinyin ? "true" : "false"}">
              ${zeroPinyin ? (enL ? "Zero-Pinyin Recall: ON" : "Zero-Pinyin Recall: ĐANG BẬT") : (enL ? "Mode: Pinyin Visible" : "Chế độ: Đang Hiện Pinyin")}
            </button>
            <button type="button" class="btn btn-jade btn-sm" data-action="export-survival-anki" data-fmt="csv">${ICONS.download} Anki .CSV</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="export-survival-anki" data-fmt="tsv">${ICONS.download} .TSV</button>
          </div>
        </div>

        <div class="filter-bar" style="margin-top:0.95rem;margin-bottom:0;" role="tablist" aria-label="${enL ? `Filter ${packs.length} Survival Packs` : `Lọc ${packs.length} bộ sinh tồn`}">
          <button type="button" class="filter-pill ${filterId === "all" ? "active" : ""}" data-action="set-survival-pack" data-pack="all">${enL ? `All ${packs.length} Packs (${totalCount})` : `Tất cả ${packs.length} Bộ (${totalCount})`}</button>
          ${packs.map((pk) => `
            <button type="button" class="filter-pill ${filterId === pk.id ? "active" : ""}" data-action="set-survival-pack" data-pack="${escapeHtml(pk.id)}">
              ${enL ? `Pack ${escapeHtml(pk.number)}: ${escapeHtml(pk.titleEn || pk.titleVi)}` : `Bộ ${escapeHtml(pk.number)}: ${escapeHtml(pk.titleVi)}`} (${(pk.items || []).length})
            </button>
          `).join("")}
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:1.5rem;">
        ${visiblePacks.map((pk, pkIdx) => {
          const packVisuals = {
            "pack-01-hsr-airport": { src: "assets/images/articles/hero-beijing-shanghai.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-02-museums-parks": { src: "assets/images/museum/taihe-dian.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-03-dining-allergy": { src: "assets/images/articles/hero-chinese-cuisines.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-04-alipay-hotels": { src: "assets/images/articles/hero-contemporary-china.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-05-police-medical": { src: "assets/images/articles/hero-consular-field-guide.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-06-b2b-customs": { src: "assets/images/articles/hero-supply-chain-rcep.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-07-medical": { src: "assets/images/museum/acupuncture-bronze.jpg", caption: enL ? pk.titleEn : pk.titleVi },
            "pack-08-canton-factory": { src: "assets/images/articles/hero-b2b-negotiation-table.jpg", caption: enL ? pk.titleEn : pk.titleVi }
          };
          const pkPhoto = packVisuals[pk.id] || getAcademicPhotoForItem("survival", pk.id, pkIdx);
          return `
          <section class="card" style="padding:1.25rem 1.35rem;">
            ${renderAcademicCardThumb(pkPhoto, pk.titleZh)}
            <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.65rem;padding-bottom:0.55rem;border-bottom:1px solid var(--hairline);">
              <div>
                <span class="badge badge-gold">${enL ? `PACK ${escapeHtml(pk.number)}` : `BỘ ${escapeHtml(pk.number)}`} · ${escapeHtml(pk.titleZh)}</span>
                <h3 style="margin:0.35rem 0 0.2rem;font-family:var(--font-editorial);font-size:1.3rem;">${escapeHtml(enL ? (pk.titleEn || pk.titleVi) : pk.titleVi)}</h3>
                <p style="margin:0;font-size:0.84rem;color:var(--text-secondary);">${escapeHtml(enL ? (pk.descEn || pk.descVi) : pk.descVi)}</p>
              </div>
              <button type="button" class="btn btn-ghost btn-sm" data-action="export-survival-anki" data-fmt="csv" data-pack="${escapeHtml(pk.id)}">${ICONS.download} ${enL ? `Export Pack ${escapeHtml(pk.number)}` : `Xuất riêng Bộ ${escapeHtml(pk.number)}`}</button>
            </div>

            <div class="grid grid-2" style="gap:0.85rem;">
              ${(pk.items || []).map((it) => {
                const isRevealed = !zeroPinyin || Boolean(revealedMap[it.id]);
                const liushuLabel = enL ? (it.liushuTypeEn || it.liushuType) : it.liushuType;
                const radLogic = enL ? (it.radicalLogicEn || it.radicalLogic) : it.radicalLogic;
                const tipTxt = enL ? (it.fieldTipEn || it.fieldTip) : it.fieldTip;
                return `
                  <article class="card" style="padding:0.95rem 1rem;background:var(--bg-surface);border-left:3px solid ${isRevealed ? "var(--jade-green)" : "var(--imperial-red)"};display:flex;flex-direction:column;gap:0.45rem;">
                    <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:0.5rem;">
                      <div>
                        <span class="badge badge-outline" style="font-size:0.68rem;">${escapeHtml(liushuLabel)}</span>
                        <div class="hanzi" style="font-size:1.45rem;font-weight:700;color:var(--ink-primary);margin-top:0.2rem;line-height:1.25;">${escapeHtml(it.hanzi)}</div>
                      </div>
                      <div style="display:flex;gap:0.3rem;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;">
                        ${renderSpeakBtn(it.hanzi.split("/")[0].trim(), enL ? "Listen" : "Nghe phát âm")}
                        <button type="button" class="btn btn-ghost btn-sm" data-action="open-survival-evolution" data-id="${escapeHtml(it.id)}" title="${enL ? "Inspect Script Evolution" : "Xem Tiến hóa Nét chữ"}">${enL ? "Evolve" : "Tiến hóa"}</button>
                        <button type="button" class="btn btn-ghost btn-sm" data-action="save-survival-to-notebook" data-id="${escapeHtml(it.id)}" title="${enL ? "Save to Notebook" : "Lưu vào Sổ tay"}">+ ${enL ? "Save" : "Lưu"}</button>
                      </div>
                    </div>

                    ${zeroPinyin ? `
                      <div style="display:flex;align-items:center;gap:0.5rem;flex-wrap:wrap;">
                        <button type="button" class="btn ${isRevealed ? "btn-secondary" : "btn-primary"} btn-sm" data-action="toggle-survival-reveal" data-id="${escapeHtml(it.id)}">
                          ${isRevealed ? (enL ? "Hide Answer" : "Ẩn Đáp án") : (enL ? "Tap to Reveal Pinyin, Radicals & Meaning" : "Chạm để Hiện Pinyin, Chiết tự & Nghĩa")}
                        </button>
                      </div>
                    ` : ""}

                    ${isRevealed ? `
                      <div style="display:flex;flex-direction:column;gap:0.35rem;font-size:0.84rem;border-top:1px dashed var(--hairline);padding-top:0.45rem;">
                        <div><span class="pinyin" style="color:var(--imperial-red);font-weight:700;">${escapeHtml(it.pinyin)}</span> • <span style="color:var(--jade-green);font-weight:700;">${enL ? "Sino-Viet:" : "Hán–Việt:"} ${escapeHtml(it.hanViet)}</span></div>
                        <div><strong>${enL ? "Meaning:" : "Nghĩa:"}</strong> ${escapeHtml(enL ? it.en : it.vi)} ${!enL ? `<span style="color:var(--text-muted);">(${escapeHtml(it.en)})</span>` : ""}</div>
                        <div style="padding:0.45rem 0.6rem;background:var(--bg-paper);border:1px solid var(--hairline);">
                          <strong style="color:var(--antique-gold);">${enL ? "Liushu Radical Logic:" : "Giải mã Bộ thủ Lục thư:"}</strong> ${escapeHtml(radLogic)}
                        </div>
                        <div style="font-size:0.79rem;color:var(--text-secondary);"><strong>${enL ? "Field Tip:" : "Mẹo thực địa:"}</strong> ${formatInlineMd(tipTxt, true)}</div>
                      </div>
                    ` : `
                      <div style="font-size:0.78rem;color:var(--text-muted);font-style:italic;">
                        ${enL ? "Active Recall: scan Hanzi shapes & guess radicals silently before revealing." : "Chế độ Active Recall: tự nhẩm mặt chữ Hán &amp; đoán bộ thủ trước khi mở đáp án."}
                      </div>
                    `}
                  </article>
                `;
              }).join("")}
            </div>
          </section>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderLearningDashboard() {
    const state = Store.getState();
    const enL = isEnglishUi();
    const completionPct = Math.round((state.completedArticles.length / Articles.length) * 100);
    const nextArticles = Articles.filter((a) => !state.completedArticles.includes(a.id)).slice(0, 3);
    const lastRead = state.readingHistory && state.readingHistory[0];
    const totalSavedTerms = (state.vocabNotebook || []).length + (state.collectedVocab || []).length;

    return `
      ${lastRead
        ? `<div class="sino-vn-editorial-panel" style="padding:1.4rem 1.75rem;margin-bottom:1.75rem;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
            <div>
              <div class="editorial-kicker" style="margin-bottom:0.2rem;">Continue Reading</div>
              <h3 style="margin:0 0 0.25rem;font-size:1.35rem;">${escapeHtml(lastRead.title)}</h3>
              <span style="font-size:0.84rem;color:var(--text-muted);">${enL ? `Last read on ${lastRead.viewedAt}` : `Đọc gần nhất ngày ${lastRead.viewedAt} • Giao diện Khảo cứu Chuyên luận`}</span>
            </div>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
              <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${lastRead.id}">${enL ? "Continue Reading →" : "Tiếp tục Đọc →"}</button>
              <button type="button" class="btn btn-jade btn-sm" data-action="set-learn-tab" data-tab="flashcards">${enL ? `Open Vocabulary Notebook (${totalSavedTerms})` : `Mở Sổ tay Từ vựng (${totalSavedTerms})`}</button>
            </div>
          </div>`
        : ""}

      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.65rem;margin-bottom:1.1rem;">
        <div style="font-size:0.84rem;color:var(--text-secondary);">
          <strong>${enL ? "Personal Progress:" : "Trạng thái Học tập Cá nhân:"}</strong> ${enL ? "Starts cleanly at <code>0</code> and updates as you highlight phrases, save notes, or mark completed essays." : "Bắt đầu từ <code>0</code> và chỉ tăng khi bạn chủ động lưu từ vựng, viết ghi chú hoặc đánh dấu hoàn thành."}
        </div>
        <div style="display:flex;gap:0.45rem;flex-wrap:wrap;">
          <button type="button" class="btn btn-secondary btn-sm" data-action="load-demo-progress" title="Load sample dataset">${enL ? "Load Sample Data" : "Nạp Dữ liệu Minh họa Mẫu"}</button>
          <button type="button" class="btn btn-ghost btn-sm" style="color:var(--imperial-red);" data-action="reset-learning-progress" title="Reset progress">↺ ${enL ? "Reset Progress (0)" : "Đặt lại Tiến trình (0)"}</button>
        </div>
      </div>

      <div class="grid grid-4" style="margin-bottom:2rem;">
        <div class="stat-card">
          <div class="stat-value">${state.completedArticles.length}/${Articles.length}</div>
          <div class="stat-label">${enL ? `Monographs Completed (${completionPct}%)` : `Chuyên luận hoàn thành (${completionPct}%)`}</div>
          <div class="progress-bar-track" style="margin-top:0.65rem;">
            <div class="progress-bar-fill" style="width:${completionPct}%;"></div>
          </div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${totalSavedTerms}</div>
          <div class="stat-label">${enL ? "Notebook & Saved Terms" : "Từ &amp; Cụm từ Đã lưu Sổ tay"}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${state.bookmarks.length}</div>
          <div class="stat-label">${enL ? "Bookmarked Pages" : "Mục đã đánh dấu (Bookmarks)"}</div>
        </div>
        <div class="stat-card">
          <div class="stat-value">${state.notes.length}</div>
          <div class="stat-label">${enL ? "Research & Reading Notes" : "Ghi chú &amp; Câu hỏi Nghiên cứu"}</div>
        </div>
      </div>

      <h3 style="font-family:var(--font-editorial);font-size:1.55rem;margin-bottom:1rem;">${enL ? "Recommended Learning Journeys" : "Lộ trình học tập đề xuất"}</h3>
      <div class="grid grid-2" style="margin-bottom:2rem;">
        ${LearningResearch.learningPaths
          .map(
            (path) => `
              <div class="card">
                <div class="card-title-zh">${path.titleZh || path.code || ""}</div>
                <h4 style="margin:0.25rem 0;">${escapeHtml(enL ? (path.titleEn || path.titleVi) : path.titleVi)}</h4>
                <div style="font-size:0.75rem;color:var(--text-muted);margin-bottom:0.3rem;font-weight:600;">${escapeHtml(enL ? (path.difficultyEn || path.difficulty || "") : (path.difficulty || ""))}</div>
                <p style="font-size:0.88rem;">${escapeHtml(enL ? (path.descriptionEn || path.description) : path.description)}</p>
                <div style="display:flex;flex-direction:column;gap:0.45rem;">
                  ${path.steps
                    .map((step) => {
                      const done = step.targetType === "article" && state.completedArticles.includes(step.targetId);
                      const matchedArt = step.targetType === "article" ? Articles.find((a) => a.id === step.targetId) : null;
                      const stepTitleEn = step.labelEn || (matchedArt && getArticleEnPack(matchedArt.id) ? getArticleEnPack(matchedArt.id).title : step.label);
                      return `
                        <button
                          type="button"
                          class="btn btn-secondary btn-sm"
                          style="justify-content:space-between;text-align:left;"
                          data-action="${step.targetType === "article" ? "open-article" : "nav"}"
                          ${step.targetType === "article" ? `data-id="${step.targetId}"` : `data-page="${step.targetId}"`}
                        >
                          <span>${done ? "✓ " : "○ "} ${escapeHtml(enL ? stepTitleEn : step.label)}</span>
                          <span>${enL ? "Open →" : "Mở →"}</span>
                        </button>
                      `;
                    })
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>

      ${window.CCE_V104_VIEWS ? window.CCE_V104_VIEWS.renderStudyPaths12(enL) : ""}

      <div class="grid grid-2">
        <div class="card">
          <h4 style="margin-bottom:0.75rem;">${enL ? "Recommended Next Monographs" : "Đề xuất Bài học Tiếp theo"}</h4>
          ${nextArticles.length
            ? nextArticles
                .map(
                  (art) => {
                    const avNext = getLocalizedArticleView(art, null, null);
                    return `
                    <div class="flashcard-layer" style="margin-bottom:0.6rem;display:flex;justify-content:space-between;align-items:center;gap:0.75rem;">
                      <div>
                        <strong>${escapeHtml(avNext.title)}</strong><br>
                        <span style="font-size:0.78rem;color:var(--text-muted);">${escapeHtml(art.titleZh)} • ${art.readMinutes} ${enL ? "min read" : "phút"}</span>
                      </div>
                      <button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${art.id}">${enL ? "Read" : "Học"}</button>
                    </div>
                  `;
                  }
                )
                .join("")
            : `<p>${enL ? `You have completed all ${Articles.length} core monographs!` : `Bạn đã hoàn thành toàn bộ ${Articles.length} chuyên luận nền tảng!`}</p>`}
        </div>

        <div class="card">
          <h4 style="margin-bottom:0.75rem;">${enL ? "Reading History &amp; Quiz Scores" : "Lịch sử Đọc &amp; Kết quả Trắc nghiệm"}</h4>
          ${state.readingHistory.slice(0, 4)
            .map(
              (h) => `
                <div class="flashcard-layer" style="margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;">
                  <span style="font-size:0.85rem;"><strong>${escapeHtml(h.title)}</strong></span>
                  <span style="font-size:0.76rem;color:var(--text-muted);">${h.viewedAt}</span>
                </div>
              `
            )
            .join("")}
          ${state.quizResults && state.quizResults.length
            ? `<div class="epistemic-box" style="margin-top:0.75rem;margin-bottom:0;">
                <div class="epistemic-title">${enL ? "Latest Quiz Result" : "Điểm Kiểm tra Gần nhất"}</div>
                <div style="font-size:0.86rem;">${enL ? "Score:" : "Đúng"} <strong>${state.quizResults[0].score}/${state.quizResults[0].total}</strong> (${state.quizResults[0].date})</div>
              </div>`
            : ""}
        </div>
      </div>
      ${window.CCE_LABS ? window.CCE_LABS.renderStudyPassportCard(state, enL) : ""}
    `;
  }

  function renderDictionaryResultsContent() {
    const allTerms = [...Dictionary, ...(Store.getState().customFlashcards || [])];
    const studyDecks = window.CCE_STUDY_DECKS || [];
    const activeDeck = ui.dictDeckFilter && ui.dictDeckFilter !== "all"
      ? studyDecks.find((d) => d.id === ui.dictDeckFilter)
      : null;
    const q = normalizeText(ui.dictQuery);

    const filtered = allTerms.filter((t) => {
      const deckOk = !ui.dictDeckFilter || ui.dictDeckFilter === "all" || (t.deckId || "deck-01") === ui.dictDeckFilter;
      const levelOk = ui.dictLevelFilter === "all" || getNormalizedCardLevel(t) === ui.dictLevelFilter;
      const queryOk =
        !q ||
        t.hanzi.toLowerCase().includes(q) ||
        (t.traditional || "").toLowerCase().includes(q) ||
        normalizeText(t.pinyin).includes(q) ||
        normalizeText(t.hanViet || "").includes(q) ||
        normalizeText(t.liushuType || t.liushuCategory || "").includes(q) ||
        normalizeText(t.topicTag || "").includes(q) ||
        normalizeText(t.english).includes(q) ||
        normalizeText(t.vietnamese).includes(q);
      return deckOk && levelOk && queryOk;
    });

    const enD = isEnglishUi();
    const filterSig = [q, ui.dictDeckFilter, ui.dictLevelFilter].join("|");
    const Pager = window.CCE_V10_PAGINATOR;
    const dPaged = Pager
      ? Pager.paginate(filtered, "learning-dictionary", { filterSig, desktopPerPage: 12, mobilePerPage: 8 })
      : { slice: filtered.slice(0, 12), renderControls: () => "" };
    const visibleTerms = dPaged.slice;

    return `
      ${activeDeck ? `
        <div class="study-deck-banner">
          <div>
            <span class="ed-meta-line" style="color:var(--imperial-red);margin-bottom:0.2rem;">${escapeHtml(activeDeck.code)} · ${escapeHtml(activeDeck.titleZh)}</span>
            <strong>${escapeHtml(activeDeck.titleVi)}</strong> — <span style="color:var(--text-secondary);">${escapeHtml(activeDeck.descVi)}</span>
          </div>
        </div>
      ` : ""}
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:1rem;font-size:0.86rem;color:var(--text-secondary);">
        <span>${enD ? `Showing <strong>${visibleTerms.length}</strong> of <strong>${filtered.length}</strong> / ${allTerms.length} entries` : `Đang xem <strong>${visibleTerms.length}</strong> / <strong>${filtered.length}</strong> thuật ngữ (tổng ${allTerms.length})`}</span>
        ${(ui.dictLevelFilter !== "all" || (ui.dictDeckFilter && ui.dictDeckFilter !== "all") || ui.dictQuery.trim())
          ? `<button type="button" class="btn btn-secondary btn-sm" data-action="clear-dict-filters">${ICONS.close} ${enD ? "Clear dictionary filters" : "Xóa bộ lọc từ điển"}</button>`
          : ""}
      </div>
      ${filtered.length === 0 ? renderSmartEmptyState({
        query: ui.dictQuery,
        resetAction: "clear-dict-filters",
        resetLabel: `Xóa bộ lọc và xem lại ${allTerms.length} thuật ngữ`,
        scopeLabel: "Từ điển chiết tự Lục thư",
        targetField: "dictionary",
        suggestions: ["儒家", "科举", "Yin-Yang", "Ngũ hành", "Hán tự"]
      }) : `
        <div class="grid grid-3">
          ${visibleTerms
            .map((t) => {
              const collected = Store.isVocabCollected(t.id);
              const liushu = t.liushuType || t.liushuCategory || "";
              return `
                <article class="card interactive">
                  <div class="card-header-row" style="gap:0.35rem;flex-wrap:wrap;">
                    <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">
                      <span class="badge badge-gold">${escapeHtml(t.level)}</span>
                      ${liushu ? `<span class="badge badge-red">${escapeHtml(liushu)}</span>` : ""}
                    </div>
                    <button
                      type="button"
                      class="btn btn-ghost btn-sm"
                      data-action="toggle-collect-vocab"
                      data-id="${t.id}"
                    >${collected ? "Đã lưu" : "Lưu thẻ"}</button>
                  </div>
                  <div style="display:flex;align-items:baseline;gap:0.65rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                    <span style="font-size:1.8rem;">${formatHanzi(t.hanzi, t.traditional)}</span>
                    <span class="pinyin">${escapeHtml(t.pinyin)}</span>
                    ${renderSpeakBtn(t.hanzi)}
                    <span class="badge badge-outline">${escapeHtml(t.pos)}</span>
                  </div>
                  ${t.hanViet ? `<p style="font-size:0.84rem;margin-bottom:0.25rem;color:var(--crimson-accent);font-weight:600;">Âm Hán–Việt: ${escapeHtml(t.hanViet)}${t.topicTag ? ` <span class="badge badge-outline" style="margin-left:0.3rem;font-weight:500;">${escapeHtml(t.topicTag)}</span>` : ""}</p>` : ""}
                  <p style="font-size:0.88rem;margin-bottom:0.3rem;"><strong>VI:</strong> ${escapeHtml(t.vietnamese)}</p>
                  <p style="font-size:0.85rem;margin-bottom:0.5rem;"><strong>EN:</strong> ${escapeHtml(t.english)}</p>
                  <p style="font-size:0.82rem;color:var(--text-muted);"><strong>Bộ thủ:</strong> ${escapeHtml(t.radical)}</p>
                  <div class="card-footer-row" style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                    <button type="button" class="btn btn-primary btn-sm" style="flex:1;" data-action="open-term" data-id="${t.id}">Chiết tự và ${(t.examples || []).length} ví dụ →</button>
                    <button type="button" class="btn btn-secondary btn-sm" data-action="open-stroke-pad" data-hanzi="${escapeHtml(t.hanzi)}" data-pinyin="${escapeHtml(t.pinyin || "")}" title="Tập viết Ô Mễ Tự 米字格">米字格</button>
                    <button type="button" class="btn btn-jade btn-sm" data-action="add-term-to-srs" data-id="${t.id}" title="Lưu vào ôn tập SM-2">+ SRS</button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
        ${dPaged.renderControls(enD)}
      `}
    `;
  }

  function renderDictionaryTab() {
    const levels = ["all", "Beginner", "HSK 1-2", "HSK 3-4", "HSK 4-5", "HSK 5-6", "Advanced / Academic Chinese"];
    const allTerms = [...Dictionary, ...(Store.getState().customFlashcards || [])];
    const studyDecks = window.CCE_STUDY_DECKS || [];

    return `
      <div class="card" style="margin-bottom:1.5rem;">
        <div class="grid grid-2" style="align-items:end;">
          <div>
            <label for="dict-search-input" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.4rem;">Tra cứu Từ điển Văn hóa &amp; Lục thư (${allTerms.length} mục từ)</label>
            <input
              id="dict-search-input"
              type="text"
              class="form-input"
              value="${escapeHtml(ui.dictQuery)}"
              placeholder="Nhập chữ Hán, Pinyin, tiếng Việt hoặc tiếng Anh (vd: 关系, 徽商, yinyang, Hán-Việt)..."
              data-action="dict-search-input"
            />
          </div>
          <div>
            <label for="dict-deck-select" style="font-size:0.84rem;font-weight:600;display:block;margin-bottom:0.4rem;">Lọc theo 10 Bộ Chuyên đề (10 Curated Study Decks)</label>
            <select id="dict-deck-select" class="form-select" data-action="dict-deck-filter">
              <option value="all" ${ui.dictDeckFilter === "all" ? "selected" : ""}>Tất cả 10 Bộ Chuyên đề (${allTerms.length} mục từ)</option>
              ${studyDecks.map((d) => {
                const cnt = allTerms.filter((t) => (t.deckId || "deck-01") === d.id).length;
                return `<option value="${d.id}" ${ui.dictDeckFilter === d.id ? "selected" : ""}>${d.code}: ${d.titleVi} (${cnt})</option>`;
              }).join("")}
            </select>
          </div>
        </div>

        <div class="filter-bar" style="margin-top:1rem;margin-bottom:0;">
          ${levels
            .map(
              (lvl) => `<button type="button" class="filter-pill ${ui.dictLevelFilter === lvl ? "active" : ""}" data-action="filter-dict-level" data-level="${lvl}">${lvl === "all" ? `Tất cả cấp độ (${allTerms.length})` : lvl}</button>`
            )
            .join("")}
        </div>
      </div>

      <div id="dict-results-slot">
        ${renderDictionaryResultsContent()}
      </div>
      ${window.CCE_LEARNING_V3 ? window.CCE_LEARNING_V3.renderFalseFriendsPanel(isEnglishUi()) : ""}
    `;
  }

  function renderVocabularyNotebookTab() {
    const enL = isEnglishUi();
    const state = Store.getState();
    const entries = state.vocabNotebook || [];
    const studyDecks = window.CCE_STUDY_DECKS || [];
    const basePool = [...Dictionary, ...(state.customFlashcards || [])];
    const filteredPool = getAllFlashcards();

    const uniqueArticles = Array.from(
      new Map(
        entries
          .filter((e) => e.articleId)
          .map((e) => [e.articleId, e.articleTitle || e.articleId])
      ).entries()
    );
    const qNorm = normalizeText(ui.vocabSearchQuery || "");
    const visibleEntries = entries.filter((e) => {
      const artOk = ui.vocabFilterArticle === "all" || e.articleId === ui.vocabFilterArticle;
      if (!artOk) return false;
      if (!qNorm) return true;
      return (
        normalizeText(e.term).includes(qNorm) ||
        normalizeText(e.pinyin).includes(qNorm) ||
        normalizeText(e.hanViet).includes(qNorm) ||
        normalizeText(e.meaning).includes(qNorm) ||
        normalizeText(e.sourceSentence).includes(qNorm) ||
        normalizeText(e.note).includes(qNorm)
      );
    });
    const nbPaged = window.CCE_V10_PAGINATOR
      ? window.CCE_V10_PAGINATOR.paginate(visibleEntries, "learning-notebook", {
          filterSig: `${ui.vocabFilterArticle}|${qNorm}`,
          desktopPerPage: 10,
          mobilePerPage: 8
        })
      : { items: visibleEntries, total: visibleEntries.length, renderControls: () => "" };
    const shownEntries = nbPaged.items;

    const deckPool = ui.flashcardDeckMode === "collected"
      ? basePool.filter((t) => (state.collectedVocab || []).includes(t.id))
      : basePool;
    const lvlOptions = [
      { id: "all", label: enL ? `All Levels (${deckPool.length})` : `Tất cả cấp độ (${deckPool.length})` },
      { id: "Beginner", label: `Beginner (${deckPool.filter((t) => getNormalizedCardLevel(t) === "Beginner").length})` },
      { id: "HSK 1-2", label: `HSK 1–2 (${deckPool.filter((t) => getNormalizedCardLevel(t) === "HSK 1-2").length})` },
      { id: "HSK 3-4", label: `HSK 3–4 (${deckPool.filter((t) => getNormalizedCardLevel(t) === "HSK 3-4").length})` },
      { id: "HSK 4-5", label: `HSK 4–5 (${deckPool.filter((t) => getNormalizedCardLevel(t) === "HSK 4-5").length})` },
      { id: "HSK 5-6", label: `HSK 5–6 (${deckPool.filter((t) => getNormalizedCardLevel(t) === "HSK 5-6").length})` },
      { id: "Advanced / Academic Chinese", label: enL ? `Academic (${deckPool.filter((t) => getNormalizedCardLevel(t) === "Advanced / Academic Chinese").length})` : `Học thuật Cao cấp (${deckPool.filter((t) => getNormalizedCardLevel(t) === "Advanced / Academic Chinese").length})` }
    ];
    const topicOptions = [
      { id: "all", label: enL ? `All Topics (${deckPool.length})` : `Tất cả chủ đề (${deckPool.length})` },
      { id: "philosophy", label: enL ? `Philosophy (${deckPool.filter((t) => getCardTopicCategory(t) === "philosophy").length})` : `Triết học & Nho–Đạo–Phật (${deckPool.filter((t) => getCardTopicCategory(t) === "philosophy").length})` },
      { id: "history", label: enL ? `History & Rituals (${deckPool.filter((t) => getCardTopicCategory(t) === "history").length})` : `Lịch sử & Điển chế (${deckPool.filter((t) => getCardTopicCategory(t) === "history").length})` },
      { id: "art", label: enL ? `Art & Scripts (${deckPool.filter((t) => getCardTopicCategory(t) === "art").length})` : `Thư họa & Ngôn ngữ (${deckPool.filter((t) => getCardTopicCategory(t) === "art").length})` },
      { id: "business", label: enL ? `Trade & Law (${deckPool.filter((t) => getCardTopicCategory(t) === "business").length})` : `Kinh doanh, Logistics & Hải quan (${deckPool.filter((t) => getCardTopicCategory(t) === "business").length})` },
      { id: "metaphysics", label: enL ? `Classical Thought (${deckPool.filter((t) => getCardTopicCategory(t) === "metaphysics").length})` : `Thuật số & Đông y (${deckPool.filter((t) => getCardTopicCategory(t) === "metaphysics").length})` },
      { id: "culture", label: enL ? `Customs & Society (${deckPool.filter((t) => getCardTopicCategory(t) === "culture").length})` : `Phong tục & Văn hóa (${deckPool.filter((t) => getCardTopicCategory(t) === "culture").length})` }
    ];

    return `
      <div class="epistemic-box" style="margin-bottom:1.25rem;">
        <div class="epistemic-title">${enL ? "Contextual Vocabulary & Reading Notes Notebook" : "Sổ tay Từ vựng Ngữ cảnh & Ghi chú Chuyên đề (Vocabulary & Reading Notebook)"}</div>
        <p style="margin:0;">
          ${enL
            ? "Highlight any word, phrase, or legal/cultural clause while reading a monograph to save it directly alongside its surrounding sentence and your personal commentary. Export your personal notebook as <code>.CSV</code> or <code>.TSV</code> anytime."
            : "Bôi đen bất kỳ từ, cụm từ hay điều khoản văn bản nào khi đọc chuyên luận để lưu thẳng vào Sổ tay kèm câu ngữ cảnh và ghi chú riêng. Có thể lọc theo bài viết và xuất <code>.CSV</code> / <code>.TSV</code> bất cứ lúc nào."}
        </p>
      </div>

      ${window.CCE_SRS ? window.CCE_SRS.renderReviewer(enL) : ""}
      <!-- PART 1: PERSONAL READING NOTEBOOK -->
      <div class="card mb-2" style="border-color:var(--border-gold);">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.75rem;margin-bottom:1rem;">
          <div>
            <h3 class="card-title" style="margin:0;">${enL ? `My Saved Phrases & Context Notes (${visibleEntries.length}/${entries.length})` : `Từ &amp; Cụm từ Đã lưu Kèm Ngữ cảnh (${visibleEntries.length}/${entries.length})`}</h3>
            <span style="font-size:0.82rem;color:var(--text-muted);">${enL ? "Captured from articles or manually logged for deep mastery." : "Thu thập trực tiếp khi đọc chuyên luận hoặc thêm thủ công bên dưới."}</span>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-jade btn-sm" data-action="export-vocab-notebook" data-fmt="csv">${ICONS.download} ${enL ? "Export Notebook .CSV" : "Xuất Sổ tay .CSV"}</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="export-vocab-notebook" data-fmt="tsv">${ICONS.download} ${enL ? "Export Notebook .TSV" : "Xuất Sổ tay .TSV"}</button>
          </div>
        </div>

        <div class="grid grid-2" style="gap:0.85rem;margin-bottom:1rem;">
          <div>
            <label for="vocab-search-input" style="font-size:0.8rem;font-weight:700;display:block;margin-bottom:0.35rem;">${enL ? "Search saved words, sentences & notes" : "Tìm theo từ, cụm từ, câu gốc hoặc ghi chú"}</label>
            <input id="vocab-search-input" type="text" class="form-input" data-action="vocab-search-input" value="${escapeHtml(ui.vocabSearchQuery || "")}" placeholder="${enL ? "e.g., RCEP, 礼制, Quan hệ, Đấu củng..." : "vd: 斗拱, 礼制, RCEP, Hán–Việt, pháp luật..."}" />
          </div>
          <div>
            <label for="vocab-article-filter" style="font-size:0.8rem;font-weight:700;display:block;margin-bottom:0.35rem;">${enL ? "Filter by Source Monograph" : "Lọc theo Chuyên luận Nguồn"}</label>
            <select id="vocab-article-filter" class="form-select" data-action="vocab-article-filter">
              <option value="all" ${ui.vocabFilterArticle === "all" ? "selected" : ""}>${enL ? `All Sources (${entries.length})` : `Tất cả Nguồn bài (${entries.length})`}</option>
              ${uniqueArticles.map(([aid, atitle]) => `<option value="${escapeHtml(aid)}" ${ui.vocabFilterArticle === aid ? "selected" : ""}>${escapeHtml(atitle.slice(0, 62))}</option>`).join("")}
            </select>
          </div>
        </div>

        ${visibleEntries.length === 0 ? `
          <div class="empty-filter-state" style="padding:1.25rem;">
            <p style="margin:0 0 0.6rem;">${enL ? "No saved phrases match the current filter. Open any monograph and highlight text with your cursor, or add an entry manually below." : "Chưa có mục từ nào khớp bộ lọc. Hãy mở một chuyên luận bất kỳ rồi bôi đen từ/cụm từ cần ghi nhớ, hoặc thêm mới ngay bên dưới."}</p>
            <button type="button" class="btn btn-primary btn-sm" data-action="nav" data-page="explore">${enL ? "Browse Monographs →" : "Mở Thư viện Chuyên luận →"}</button>
          </div>
        ` : `
          <div style="display:flex;flex-direction:column;gap:0.85rem;">
            ${shownEntries.map((entry) => `
              <article class="vocab-notebook-entry">
                <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:flex-start;gap:0.5rem;">
                  <div style="display:flex;align-items:baseline;flex-wrap:wrap;gap:0.45rem;">
                    <strong class="hanzi" style="font-size:1.22rem;color:var(--accent-cinnabar);">${escapeHtml(entry.term)}</strong>
                    ${entry.pinyin ? `<span class="pinyin" style="font-size:0.88rem;">${escapeHtml(entry.pinyin)}</span>` : ""}
                    ${entry.hanViet ? `<span class="badge badge-gold">Hán–Việt: ${escapeHtml(entry.hanViet)}</span>` : ""}
                    ${renderSpeakBtn(entry.term, enL ? "Speak term" : "Nghe phát âm")}
                  </div>
                  <div style="display:flex;gap:0.35rem;flex-wrap:wrap;align-items:center;">
                    <span class="badge badge-outline">${escapeHtml(entry.createdAt || "")}</span>
                    ${entry.articleId && entry.articleId !== "custom" ? `<button type="button" class="btn btn-ghost btn-sm" data-action="open-article" data-id="${escapeHtml(entry.articleId)}">${enL ? "Open Essay →" : "Mở bài →"}</button>` : ""}
                    <button type="button" class="btn btn-secondary btn-sm" data-action="edit-vocab-entry" data-id="${escapeHtml(entry.id)}">${ui.vocabEditId === entry.id ? (enL ? "Cancel" : "Hủy") : (enL ? "Edit Note" : "Sửa ghi chú")}</button>
                    <button type="button" class="btn btn-ghost btn-sm" style="color:var(--imperial-red);" data-action="delete-vocab-entry" data-id="${escapeHtml(entry.id)}">${enL ? "Delete" : "Xóa"}</button>
                  </div>
                </div>
                ${entry.meaning ? `<div style="margin-top:0.35rem;font-size:0.9rem;"><strong>${enL ? "Meaning:" : "Nghĩa &amp; Thuật ngữ:"}</strong> ${escapeHtml(entry.meaning)}</div>` : ""}
                ${entry.sourceSentence ? `<blockquote class="vocab-notebook-quote">${escapeHtml(entry.sourceSentence)}</blockquote>` : ""}
                ${ui.vocabEditId === entry.id ? `
                  <form data-action="save-vocab-note-form" style="margin-top:0.6rem;display:flex;flex-direction:column;gap:0.45rem;">
                    <input type="hidden" name="id" value="${escapeHtml(entry.id)}" />
                    <label style="font-size:0.78rem;font-weight:700;">${enL ? "Update meaning" : "Cập nhật nghĩa / giải thích"}</label>
                    <input name="meaning" class="form-input" value="${escapeHtml(entry.meaning || "")}" />
                    <label style="font-size:0.78rem;font-weight:700;">${enL ? "Personal note" : "Ghi chú nghiên cứu / ngữ cảnh cá nhân"}</label>
                    <textarea required name="note" rows="2" class="form-textarea">${escapeHtml(entry.note || "")}</textarea>
                    <div><button type="submit" class="btn btn-primary btn-sm">${enL ? "Save Changes" : "Lưu cập nhật"}</button></div>
                  </form>
                ` : `
                  ${entry.note ? `<div style="margin-top:0.4rem;font-size:0.86rem;color:var(--text-secondary);"><strong>${enL ? "My Note:" : "Ghi chú:"}</strong> ${escapeHtml(entry.note)}</div>` : ""}
                `}
                ${entry.articleTitle ? `<div style="margin-top:0.4rem;font-size:0.76rem;color:var(--text-muted);">${enL ? "Source:" : "Nguồn:"} <em>${escapeHtml(entry.articleTitle)}</em></div>` : ""}
              </article>
            `).join("")}
          </div>
          ${nbPaged.renderControls(enL)}
        `}
      </div>

      <!-- PART 2: QUICK ADD TO NOTEBOOK -->
      <div class="card mb-2" style="margin-top:1.25rem;">
        <h3 class="card-title">${enL ? "Add New Term or Legal/Cultural Phrase to Notebook" : "Lưu Từ / Cụm từ hoặc Ghi chú Đọc bài Mới"}</h3>
        <form data-action="add-vocab-notebook-form" class="grid grid-2" style="gap:0.85rem;margin-top:0.75rem;">
          <div>
            <label style="font-size:0.82rem;font-weight:600;">${enL ? "Word or Phrase (Hanzi / Term) *" : "Từ hoặc Cụm từ (Hán tự / Thuật ngữ) *"}</label>
            <input required name="term" class="form-input" placeholder="vd: 不可抗力 / Lục thư / Chứng nhận Xuất xứ" />
          </div>
          <div>
            <label style="font-size:0.82rem;font-weight:600;">${enL ? "Pinyin & Sino-Viet (optional)" : "Pinyin &amp; Âm Hán–Việt (nếu có)"}</label>
            <input name="pinyin" class="form-input" placeholder="vd: bùkě kànglì | Bất khả kháng lực" />
          </div>
          <div>
            <label style="font-size:0.82rem;font-weight:600;">${enL ? "Meaning / Legal & Cultural Sense *" : "Nghĩa Tiếng Việt / Tiếng Anh *"}</label>
            <input required name="meaning" class="form-input" placeholder="Force majeure clause; sự kiện bất khả kháng" />
          </div>
          <div>
            <label style="font-size:0.82rem;font-weight:600;">${enL ? "Context / Source Clause" : "Câu ngữ cảnh gốc (nếu trích từ bài)"}</label>
            <input name="sourceSentence" class="form-input" placeholder="Điều khoản miễn trách nhiệm khi có thiên tai hoặc phong tỏa cảng..." />
          </div>
          <div style="grid-column:1 / -1;">
            <label style="font-size:0.82rem;font-weight:600;">${enL ? "Personal Reading Note *" : "Ghi chú Cá nhân &amp; Cách dùng *"}</label>
            <textarea required name="note" rows="2" class="form-textarea" placeholder="So sánh nghĩa trong Luật Dân sự TQ với Bộ luật Dân sự 2015 VN..."></textarea>
          </div>
          <div style="grid-column:1 / -1;">
            <button type="submit" class="btn btn-primary">${enL ? "Save to Vocabulary Notebook" : "Lưu vào Sổ tay Từ vựng"}</button>
          </div>
        </form>
      </div>

      <!-- PART 3: CURATED 10-DECK STUDY BANK & EXPORT -->
      <div class="card" style="margin-top:1.5rem;">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:0.75rem;margin-bottom:0.85rem;">
          <div>
            <h3 class="card-title" style="margin:0;">${enL ? `Curated 10-Deck Terminology Bank (${filteredPool.length} matching)` : `Kho Thuật ngữ Đối chiếu 10 Chuyên đề (${filteredPool.length} mục khớp lọc)`}</h3>
            <span style="font-size:0.82rem;color:var(--text-muted);">${enL ? "Filter curated entries by theme or HSK tier and save directly into your Vocabulary Notebook." : "Tra nhanh theo 10 chuyên đề hoặc cấp độ HSK, bấm lưu thẳng vào Sổ tay cá nhân hoặc xuất bảng."}</span>
          </div>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-jade btn-sm" data-action="export-anki" data-fmt="csv">${ICONS.download} ${enL ? `Export Bank .CSV (${filteredPool.length})` : `Xuất Bảng Từ vựng .CSV (${filteredPool.length})`}</button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="export-anki" data-fmt="tsv">${ICONS.download} .TSV</button>
          </div>
        </div>

        <div class="filter-bar" style="margin-bottom:0.75rem;">
          <button type="button" class="filter-pill ${ui.flashcardDeckMode === "all" ? "active" : ""}" data-action="set-deck-mode" data-mode="all">${enL ? `Full Lexicon (${basePool.length})` : `Toàn bộ Mục từ (${basePool.length})`}</button>
          <button type="button" class="filter-pill ${ui.flashcardDeckMode === "collected" ? "active" : ""}" data-action="set-deck-mode" data-mode="collected">${enL ? `Starred Terms (${state.collectedVocab.length})` : `Mục từ Đã đánh dấu (${state.collectedVocab.length})`}</button>
        </div>

        <div class="flashcard-deck-filter-bar">
          <div class="flashcard-deck-filter-field">
            <label for="flashcard-deck-select">${enL ? "10 Topic Modules" : "10 Nhóm Chuyên đề Học thuật"}</label>
            <select id="flashcard-deck-select" class="form-select" data-action="flashcard-deck-filter">
              <option value="all" ${ui.flashcardDeckFilter === "all" ? "selected" : ""}>${enL ? `All 10 Topics (${deckPool.length})` : `Tất cả 10 Chuyên đề (${deckPool.length} mục)`}</option>
              ${studyDecks.map((d) => {
                const cnt = deckPool.filter((t) => (t.deckId || "deck-01") === d.id).length;
                return `<option value="${d.id}" ${ui.flashcardDeckFilter === d.id ? "selected" : ""}>${d.code}: ${enL ? (d.titleEn || d.titleVi) : d.titleVi} (${cnt})</option>`;
              }).join("")}
            </select>
          </div>
          <div class="flashcard-deck-filter-field">
            <label for="flashcard-level-select">${enL ? "HSK / Academic Level" : "Lọc theo Cấp độ HSK / Học thuật"}</label>
            <select id="flashcard-level-select" class="form-select" data-action="flashcard-level-filter">
              ${lvlOptions.map((o) => `<option value="${o.id}" ${ui.flashcardLevelFilter === o.id ? "selected" : ""}>${o.label}</option>`).join("")}
            </select>
          </div>
          <div class="flashcard-deck-filter-field">
            <label for="flashcard-topic-select">${enL ? "Subject Domain" : "Lọc theo Lĩnh vực Chuyên ngành"}</label>
            <select id="flashcard-topic-select" class="form-select" data-action="flashcard-topic-filter">
              ${topicOptions.map((o) => `<option value="${o.id}" ${ui.flashcardTopicFilter === o.id ? "selected" : ""}>${o.label}</option>`).join("")}
            </select>
          </div>
        </div>

        <div class="grid grid-3" style="gap:0.75rem;margin-top:1rem;">
          ${filteredPool.slice(0, 12).map((t) => `
            <div class="flashcard-layer" style="display:flex;flex-direction:column;justify-content:space-between;gap:0.45rem;">
              <div>
                <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.4rem;">
                  <strong class="hanzi" style="font-size:1.15rem;color:var(--accent-cinnabar);">${escapeHtml(t.hanzi)}</strong>
                  ${t.hanViet ? `<span class="badge badge-gold">${escapeHtml(t.hanViet)}</span>` : ""}
                </div>
                <div class="pinyin" style="font-size:0.8rem;">${escapeHtml(t.pinyin)} • <span style="color:var(--text-muted);">${escapeHtml(t.level)}</span></div>
                <div style="font-size:0.82rem;color:var(--text-secondary);margin-top:0.25rem;">${escapeHtml(enL ? (t.english || t.vietnamese) : t.vietnamese)}</div>
              </div>
              <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
                <button type="button" class="btn btn-secondary btn-sm" data-action="add-term-to-notebook" data-id="${escapeHtml(t.id)}">+ ${enL ? "Save to Notebook" : "Lưu Sổ tay"}</button>
                <button type="button" class="btn btn-ghost btn-sm" data-action="open-term" data-id="${escapeHtml(t.id)}">${enL ? "Etymology →" : "Chiết tự →"}</button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderKnowledgeMapTab() {
    const graph = LearningResearch.knowledgeGraph;
    const kCat = window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.getKMapCat() : "all";
    const scopedNodes = kCat === "all" ? graph.nodes : graph.nodes.filter((n) => (n.category || n.cluster || n.pillar || "").toLowerCase().includes(kCat) || normalizeText(n.desc + " " + n.label).includes(kCat === "sino-viet" ? "viet" : kCat === "philosophy" ? "triet" : kCat === "history" ? "su" : "hoa"));
    const activePool = scopedNodes.length ? scopedNodes : graph.nodes;
    const node = activePool.find((n) => n.id === ui.activeKgNodeId) || activePool[0];

    return `
      <div class="card">
        <div class="card-header-row">
          <div>
            <h3 class="card-title">Bản đồ Tri thức Liên kết (Interactive Knowledge Map)</h3>
            <p style="font-size:0.88rem;margin:0;">Nhấp vào bất kỳ khái niệm nào trên đồ thị để xem mối liên hệ lịch sử và mở thẳng chuyên luận liên quan.</p>
          </div>
          <span class="badge badge-gold">Knowledge Mapping</span>
        </div>

        ${window.CCE_GALLERY_V3 ? window.CCE_GALLERY_V3.renderKMapFilterBar(isEnglishUi()) : ""}
        <div class="knowledge-graph-wrap" style="overflow-x:auto;margin:1rem 0;">
          ${Visuals.renderKnowledgeGraphSVG(graph, node.id)}
        </div>

        <div class="epistemic-box" style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem;">
          <div>
            <div class="epistemic-title">Nút Tri thức đang chọn: ${node.label} (<span class="hanzi">${node.zh}</span>)</div>
            <p style="margin:0;">${node.desc}</p>
          </div>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            data-action="${node.linkType === "article" ? "open-article" : "nav"}"
            ${node.linkType === "article" ? `data-id="${node.linkId}"` : `data-page="${node.linkId}"`}
          >Đi tới Nội dung Liên kết →</button>
        </div>
      </div>
    `;
  }

  function renderQuizTab() {
    const enQ = isEnglishUi();
    const questions = LearningResearch.quizBank;
    const mcqList = questions.filter((q) => q.type !== "short-answer");
    let correctCount = 0;
    if (ui.quizSubmitted) {
      mcqList.forEach((q) => {
        if (ui.quizAnswers[q.id] === q.correctIndex) correctCount++;
      });
    }

    return `
      ${window.CCE_V104_VIEWS ? window.CCE_V104_VIEWS.renderMasterQuiz830Arena(enQ) : ""}
      ${window.CCE_LABS ? window.CCE_LABS.renderPracticeQuizArena(enQ) : ""}
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:1rem;margin-bottom:1.5rem;">
        <div>
          <h3 class="card-title">${enQ ? "Active Recall &amp; Concept Reflection Quiz" : "Kiểm tra Active Recall &amp; Phản biện Khái niệm"}</h3>
          <p style="font-size:0.9rem;margin:0;">${enQ ? "Covers historical reasoning, classical character recognition, comparative concepts, and Feynman prompts." : "Bao gồm trắc nghiệm lịch sử, nhận diện Hán tự, so sánh khái niệm và câu hỏi tự diễn đạt Feynman."}</p>
        </div>
        <div style="display:flex;gap:0.5rem;">
          <button type="button" class="btn btn-primary" data-action="submit-quiz">${enQ ? "Score &amp; Review Explanations" : "Chấm điểm &amp; Xem Giải thích"}</button>
          <button type="button" class="btn btn-secondary" data-action="reset-quiz">${enQ ? "Retake Quiz" : "Làm lại"}</button>
        </div>
      </div>

      ${ui.quizSubmitted
        ? `<div class="epistemic-box" style="margin-bottom:1.5rem;">
            <div class="epistemic-title">${enQ ? `Quiz Score: ${correctCount} / ${mcqList.length} correct (${Math.round((correctCount / mcqList.length) * 100)}%)` : `Kết quả Trắc nghiệm: ${correctCount} / ${mcqList.length} câu đúng (${Math.round((correctCount / mcqList.length) * 100)}%)`}</div>
            <p style="margin:0;">${enQ ? "Review the scholarly rationale beneath each question to reinforce nuances across periods and schools." : "Hãy đọc phần giải thích học thuật bên dưới mỗi câu để củng cố vùng kiến thức còn phân vân."}</p>
          </div>`
        : ""}

      <div style="display:flex;flex-direction:column;gap:1.25rem;">
        ${(() => {
          const Pager = window.CCE_V10_PAGINATOR;
          const qPaged = Pager ? Pager.paginate(questions, "learning-quiz", { desktopPerPage: 8, mobilePerPage: 6 }) : { slice: questions, startIdx: 0, renderControls: () => "" };
          const qControls = qPaged.renderControls(enQ);
          return qPaged.slice
          .map((q, sliceIdx) => {
            const idx = (qPaged.startIdx || 0) + sliceIdx;
            if (q.type === "short-answer") {
              return `
                <div class="card">
                  <div class="card-header-row">
                    <span class="badge badge-gold">${escapeHtml(enVal(q, "category"))}</span>
                    <span>${enQ ? `Question ${idx + 1}` : `Câu ${idx + 1}`}</span>
                  </div>
                  <h4>${escapeHtml(enVal(q, "question"))}</h4>
                  <textarea
                    rows="4"
                    class="form-textarea"
                    placeholder="${enQ ? "Write your self-explanation using the Feynman technique..." : "Viết câu trả lời tự diễn đạt theo phương pháp Feynman..."}"
                    data-action="quiz-short-input"
                    data-qid="${q.id}"
                  >${escapeHtml(ui.quizShortAnswers[q.id] || "")}</textarea>
                  ${ui.quizSubmitted
                    ? `<div class="epistemic-box" style="margin-top:0.9rem;">
                        <div class="epistemic-title">${enQ ? "Model Academic Synthesis" : "Gợi ý Tự đối chiếu Học thuật"}</div>
                        <p style="margin:0;font-size:0.9rem;">${escapeHtml(enVal(q, "modelAnswer"))}</p>
                      </div>`
                    : ""}
                </div>
              `;
            }

            const chosen = ui.quizAnswers[q.id];
            const opts = enQ && Array.isArray(q.optionsEn) ? q.optionsEn : q.options;
            return `
              <div class="card">
                <div class="card-header-row">
                  <span class="badge badge-red">${escapeHtml(enVal(q, "category"))}</span>
                  <span>${enQ ? `Question ${idx + 1}` : `Câu ${idx + 1}`}</span>
                </div>
                ${q.promptHanzi ? `<div class="hanzi" style="font-size:2.6rem;text-align:center;margin:0.5rem 0;color:var(--imperial-red);">${q.promptHanzi}</div>` : ""}
                <h4 style="margin-bottom:0.85rem;">${escapeHtml(enVal(q, "question"))}</h4>
                <div>
                  ${opts
                    .map((opt, optIdx) => {
                      let cls = "quiz-option";
                      if (ui.quizSubmitted) {
                        if (optIdx === q.correctIndex) cls += " correct";
                        else if (chosen === optIdx) cls += " wrong";
                      } else if (chosen === optIdx) {
                        cls += " active";
                        cls += '" style="border-color:var(--imperial-red);background:var(--bg-accent-soft);';
                      }
                      return `
                        <button
                          type="button"
                          class="${cls}"
                          data-action="select-quiz-option"
                          data-qid="${q.id}"
                          data-idx="${optIdx}"
                          ${ui.quizSubmitted ? "disabled" : ""}
                        >
                          <strong>${String.fromCharCode(65 + optIdx)}.</strong>
                          <span>${escapeHtml(opt)}</span>
                        </button>
                      `;
                    })
                    .join("")}
                </div>
                ${ui.quizSubmitted
                  ? `<div class="epistemic-box" style="margin-top:0.6rem;">
                      <div class="epistemic-title">${enQ ? "Scholarly Explanation" : "Giải thích Chi tiết"}</div>
                      <p style="margin:0;font-size:0.88rem;">${escapeHtml(enVal(q, "explanation"))}</p>
                    </div>`
                  : ""}
              </div>
            `;
          })
          .join("") + qControls;
        })()}
      </div>
    `;
  }

  function renderJournalTab() {
    const state = Store.getState();
    const editingNote = ui.editingNoteId ? state.notes.find((n) => n.id === ui.editingNoteId) : null;
    const catList = [
      "Lịch sử & Văn minh",
      "Triết học & Kinh điển",
      "Thuật số & Vũ trụ luận",
      "Giao lưu Trung – Việt",
      "Văn hóa Kinh doanh & TMĐT",
      "Hán ngữ & Chiết tự"
    ];
    const methodList = ["Feynman Technique", "Comparative Learning", "Research Question", "Learning by Reconstruction"];

    return `
      <div class="grid grid-2" style="align-items:start;">
        <div class="card">
          <h3 class="card-title">${editingNote ? "Chỉnh sửa Ghi chú Nghiên cứu" : "Thêm Ghi chú Feynman / Câu hỏi Nghiên cứu"}</h3>
          <form data-action="add-note-form" style="display:flex;flex-direction:column;gap:0.85rem;margin-top:0.75rem;">
            <div>
              <label style="font-size:0.82rem;font-weight:600;">Tiêu đề Ghi chú *</label>
              <input required name="title" class="form-input" value="${editingNote ? escapeHtml(editingNote.title) : ""}" placeholder="vd: Tóm tắt khác biệt Trình-Chu Lý học và Tâm học Dương Minh" />
            </div>
            <div class="grid grid-2" style="gap:0.75rem;">
              <div>
                <label style="font-size:0.82rem;font-weight:600;">Chuyên ngành</label>
                <select name="category" class="form-select">
                  ${catList.map((c) => `<option ${editingNote && editingNote.category === c ? "selected" : ""}>${c}</option>`).join("")}
                </select>
              </div>
              <div>
                <label style="font-size:0.82rem;font-weight:600;">Phương pháp Học</label>
                <select name="method" class="form-select">
                  ${methodList.map((m) => `<option ${editingNote && editingNote.method === m ? "selected" : ""}>${m}</option>`).join("")}
                </select>
              </div>
            </div>
            <div>
              <label style="font-size:0.82rem;font-weight:600;">Nội dung Chi tiết *</label>
              <textarea required name="content" rows="5" class="form-textarea" placeholder="Giải thích lại khái niệm bằng ngôn ngữ đơn giản nhất, hoặc ghi lại câu hỏi nghiên cứu cần kiểm chứng thêm...">${editingNote ? escapeHtml(editingNote.content) : ""}</textarea>
            </div>
            <div style="display:flex;gap:0.5rem;">
              <button type="submit" class="btn btn-primary">${editingNote ? "Cập nhật Ghi chú" : "Lưu vào Nhật ký Học tập"}</button>
              ${editingNote ? `<button type="button" class="btn btn-secondary" data-action="cancel-edit-note">Hủy sửa</button>` : ""}
            </div>
          </form>
        </div>

        <div style="display:flex;flex-direction:column;gap:1rem;">
          <div class="card">
            <h3 class="card-title">Mục Đã đánh dấu (Bookmarks: ${state.bookmarks.length})</h3>
            ${state.bookmarks.length
              ? state.bookmarks
                  .map(
                    (b) => `
                      <div class="flashcard-layer" style="margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
                        <div>
                          <span class="badge badge-outline">${b.type}</span>
                          <strong style="margin-left:0.4rem;font-size:0.88rem;">${escapeHtml(b.title)}</strong>
                        </div>
                        <div style="display:flex;gap:0.35rem;">
                          ${b.type === "article" ? `<button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${b.id}">Mở</button>` : ""}
                          ${b.type === "artifact" ? `<button type="button" class="btn btn-primary btn-sm" data-action="open-artifact" data-id="${b.id}">Xem</button>` : ""}
                          <button type="button" class="btn btn-ghost btn-sm" data-action="toggle-bookmark" data-type="${b.type}" data-id="${b.id}" data-title="${escapeHtml(b.title)}" aria-label="Bỏ đánh dấu">${ICONS.close}</button>
                        </div>
                      </div>
                    `
                  )
                  .join("")
              : `<p style="font-size:0.88rem;">Chưa có mục đánh dấu nào.</p>`}
          </div>

          <div class="card">
            <h3 class="card-title">Khái niệm Highlight Đã lưu (${state.highlights.length})</h3>
            ${state.highlights.length
              ? state.highlights
                  .map(
                    (hl) => `
                      <div class="flashcard-layer" style="margin-bottom:0.5rem;display:flex;justify-content:space-between;gap:0.5rem;">
                        <span style="font-size:0.85rem;">“${escapeHtml(hl.text)}”</span>
                        <button type="button" class="btn btn-ghost btn-sm" data-action="delete-highlight" data-id="${hl.id}" aria-label="Xóa highlight">${ICONS.close}</button>
                      </div>
                    `
                  )
                  .join("")
              : `<p style="font-size:0.88rem;">Mở bất kỳ chuyên luận nào để lưu đoạn trích quan trọng vào đây.</p>`}
          </div>
        </div>
      </div>

      <div style="margin-top:2rem;">
        <h3 style="font-family:var(--font-editorial);font-size:1.55rem;margin-bottom:1rem;">Danh sách Ghi chú & Câu hỏi Nghiên cứu (${state.notes.length})</h3>
        <div class="grid grid-2">
          ${state.notes
            .map(
              (n) => `
                <article class="card">
                  <div class="card-header-row">
                    <span class="badge badge-jade">${escapeHtml(n.method)}</span>
                    <div style="display:flex;gap:0.35rem;">
                      <button type="button" class="btn btn-ghost btn-sm" data-action="edit-note" data-id="${n.id}">Sửa</button>
                      <button type="button" class="btn btn-ghost btn-sm" data-action="delete-note" data-id="${n.id}">Xóa</button>
                    </div>
                  </div>
                  <h4 style="margin-bottom:0.25rem;">${escapeHtml(n.title)}</h4>
                  <div style="font-size:0.78rem;color:var(--text-muted);margin-bottom:0.6rem;">${escapeHtml(n.category)} • ${n.updatedAt}</div>
                  <p style="font-size:0.9rem;margin-bottom:0;white-space:pre-line;">${escapeHtml(n.content)}</p>
                </article>
              `
            )
            .join("")}
        </div>
      </div>
    `;
  }

  function renderAboutPage() {
    const enAb = isEnglishUi();
    const aboutSecs = Brand.aboutSections || [];
    const aboutEnMap = {
      "about-sec-intro": {
        title: "01 · Project Overview & What is CHINESE CULTURE EXPLORER?",
        summary: "An independent, non-commercial digital cultural and scholarly platform initiated by Lê Hưng Thịnh, integrating five components in one coherent ecosystem: Digital Museum, Encyclopedia of Chinese Civilization, Comparative Literature & Primary Library, Liushu Etymology Dictionary & Contextual Notebook, and Sino–Vietnamese Cultural Bridge."
      },
      "about-sec-vision": {
        title: "02 · Vision, Academic Standards & Mission",
        summary: "Vision: Connect Chinese civilizational heritage, classical philosophy, and contemporary economic–cultural context within a rigorous, structured atlas. Mission: Empower learners in Vietnam and globally to move beyond fragmented rote memorization toward primary Hanzi text consultation, historical triangulation, and independent inquiry."
      },
      "about-sec-research": {
        title: "04 · Research Philosophy & Source Triangulation",
        points: [
          { label: "Prioritize Primary Sources", text: "Cite classical Hanzi canons, dynastic histories, and archaeological reports before secondary commentary." },
          { label: "Epistemological Distinction", text: "Clearly separate verifiable historical events, philosophical interpretation, folk belief, and empirical science (especially in TCM and Cosmology)." },
          { label: "Regional & Temporal Plurality", text: "Never flatten Chinese civilization into a static monolith; anchor every topic in provincial geography, ethnic diversity, and dynastic change." },
          { label: "Citation & Attribution Transparency", text: "Zero fabricated credentials or mock DOIs; every museum plate and external asset cites its archival holding and license." }
        ]
      },
      "about-sec-learning": {
        title: "05 · Learning Philosophy & Active Recall",
        points: [
          { label: "Active Recall & Direct Script", text: "Front-of-card practice leads with clean Hanzi characters to stimulate direct sound–meaning retrieval before revealing pinyin." },
          { label: "Six Scripts (Liushu) & Bilingual Bridging", text: "Durable retention through radical decomposition, Sino–Vietnamese phonology, and structured Vietnamese–English synthesis." },
          { label: "Feynman Method", text: "Self-explanation prompts guide learners to reconstruct complex historical and philosophical frameworks in clear own words." },
          { label: "Comparative Knowledge Mapping", text: "Inter-school, inter-provincial comparison matrices and an interactive Knowledge Graph connecting thought, history, and regional commerce." }
        ]
      },
      "about-sec-dialogue": {
        title: "06 · Sino–Vietnamese Cultural Dialogue",
        summary: "From Sino–Vietnamese vocabulary strata, Chu Nom literature, and 15th-century Chu Dau ceramic maritime trade to modern RCEP supply chains and C/O Form E protocols, this project approaches Vietnam as an equal, creative interlocutor in East Asian civilizational history."
      },
      "about-sec-founder": {
        title: "07 · Founder Background — Lê Hưng Thịnh",
        summary: "CHINESE CULTURE EXPLORER – 中国文化探索 was initiated by Lê Hưng Thịnh (黎兴盛) — an International Business undergraduate — as an open digital research notebook connecting regional economic analysis with East Asian humanities. It operates independently with zero fabricated institutional titles or sponsorships."
      },
      "about-sec-ip": {
        title: "08 · Intellectual Property & Open Attribution",
        summary: "All original bilingual analytical essays, editorial annotations, information architecture, conceptual diagrams, brand identity assets, and original application source code belong to Lê Hưng Thịnh (Copyright © 2026 Lê Hưng Thịnh. All Rights Reserved.), strictly distinct from public-domain historical classics and open-licensed museum photography."
      },
      "about-sec-contact": {
        title: "09 · Project Governance & Academic Feedback",
        summary: "CHINESE CULTURE EXPLORER – 中国文化探索 operates as an independent non-commercial scholarly platform. Academic inquiries, historical errata notifications, and copyright/attribution corrections may be submitted via the official Legal & IP Governance Center."
      }
    };
    const brandAssetEn = {
      "horizontal-lockup": { title: "Official Horizontal Wordmark", caption: "Pairs the square red cinnabar seal 朱文印 with the bilingual project title, official tagline, and founder signature." },
      "founder-seal": { title: "Founder Visual Seal & Signature", caption: "Editorial colophon mark attesting independent authorship by Lê Hưng Thịnh across monographs and visual plates." },
      "digital-favicon": { title: "Square Browser Seal Emblem (Favicon)", caption: "1:1 compact digital seal icon rendered in browser tabs and mobile shortcuts." }
    };
    const introVision = aboutSecs.slice(0, 2);
    const remainingSecs = aboutSecs.slice(3);
    const fm = Brand.foundersMessage || {};
    const fmMode = ui.founderMsgLang || "all";
    const activeLangKeys = fmMode === "all" ? ["vi", "en", "zh"] : [fmMode];
    const bi = Brand.brandIdentity || {};
    const legalPages = Brand.legalPages || [];

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${escapeHtml(Brand.projectFullTitle)} · 关于本平台与创始人</div>
          <h1>${enAb ? "About the project, scholarly approach and founder" : "Giới thiệu dự án, phương pháp khảo cứu và người sáng lập"}</h1>
          <p class="section-subtitle" style="margin-bottom:0.65rem;">
            <strong>${escapeHtml(Brand.officialTagline)}</strong>${!enAb && Brand.finalBrandSummary ? ` — ${escapeHtml(Brand.finalBrandSummary)}` : ""}
          </p>
          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;align-items:center;">
            <span class="badge badge-red">${escapeHtml(Brand.foundedByStatement)}</span>
            <span class="badge badge-gold">${escapeHtml(Brand.secondaryStatementEn)}</span>
            <span class="badge badge-jade">${enAb ? "Independent Cultural Platform" : escapeHtml(Brand.projectCategoryVi || "Nền tảng Độc lập")}</span>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="container" style="display:flex;flex-direction:column;gap:2.2rem;">
          <!-- Sections 01 & 02: Project Introduction + Vision & Mission -->
          <div class="about-nine-grid">
            ${introVision
              .map(
                (sec) => {
                  const ov = enAb ? aboutEnMap[sec.id] : null;
                  return `
                  <div id="${escapeHtml(sec.id)}" class="about-section-card">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.65rem;">
                      <span class="about-num-badge">${escapeHtml(sec.num)}</span>
                      <span class="hanzi" style="font-size:0.86rem;color:var(--text-muted);">${escapeHtml(sec.titleZh)}</span>
                    </div>
                    <h2 style="font-size:1.25rem;margin-bottom:0.55rem;">${escapeHtml((ov && ov.title) || sec.title)}</h2>
                    <p style="margin:0;color:var(--text-secondary);font-size:0.93rem;line-height:1.68;">${escapeHtml((ov && ov.summary) || sec.summary)}</p>
                  </div>
                `;
                }
              )
              .join("")}
          </div>

          <!-- Section 03: Trilingual Founder's Manifesto (VI / EN / 中文) -->
          <section id="founder-message-section" class="founder-message-panel">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;flex-wrap:wrap;gap:1rem;">
              <div>
                <h2 style="font-family:var(--font-editorial);font-size:1.65rem;margin:0 0 0.25rem 0;">${enAb ? `Founder's Note — ${escapeHtml(Brand.founderName)}` : `Lời ngỏ từ Người sáng lập — ${escapeHtml(Brand.founderName)}`}</h2>
                <div style="font-size:0.88rem;color:var(--text-muted);">${escapeHtml(enAb ? (Brand.founderRole || "Founder & Creator") : Brand.founderRoleVi)}</div>
              </div>
              <img decoding="async" 
                src="${escapeHtml(Brand.assets.founderSeal)}"
                alt="${escapeHtml(Brand.founderSignature)}"
                style="height:68px;width:auto;border-radius:2px;"
                loading="eager"
              />
            </div>

            <div class="filter-bar" role="tablist" aria-label="${enAb ? "Select founder letter language" : "Chọn ngôn ngữ tâm thư sáng lập"}" style="margin:1.1rem 0 1.4rem;">
              ${[
                { id: "all", label: enAb ? "Trilingual Side-by-Side (VI · EN · 中文)" : "Song hành 3 Ngôn ngữ (VI · EN · 中文)" },
                { id: "vi", label: "Tiếng Việt" },
                { id: "en", label: "English" },
                { id: "zh", label: "中文" }
              ]
                .map(
                  (tab) => `
                    <button
                      type="button"
                      class="filter-pill ${fmMode === tab.id ? "active" : ""}"
                      data-action="set-founder-msg-lang"
                      data-lang="${tab.id}"
                    >${tab.label}</button>
                  `
                )
                .join("")}
            </div>

            <div class="${fmMode === "all" ? "founder-trilingual-grid" : ""}" style="${fmMode !== "all" ? "max-width:70ch;margin:0 auto;" : ""}">
              ${activeLangKeys
                .map((langKey) => {
                  const block = fm[langKey];
                  if (!block) return "";
                  return `
                    <article class="founder-letter-card" ${langKey === "zh" ? 'lang="zh-Hans"' : langKey === "en" ? 'lang="en"' : 'lang="vi"'}>
                      <div class="ed-meta-line" style="margin-bottom:0.45rem;">${escapeHtml(block.langLabel)}</div>
                      <h3 style="font-family:var(--font-editorial);font-size:1.25rem;margin-bottom:0.35rem;color:#7A1414;">${escapeHtml(block.heading)}</h3>
                      ${block.subtitle ? `<div style="font-size:0.84rem;color:var(--text-muted);font-style:italic;margin-bottom:0.9rem;">${escapeHtml(block.subtitle)}</div>` : ""}
                      ${(block.paragraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
                      ${Array.isArray(block.pillars) && block.pillars.length
                        ? `<ol class="founder-pillars-list">
                            ${block.pillars
                              .map((pl) => `<li><strong>${escapeHtml(pl.title)}</strong> ${escapeHtml(pl.text)}</li>`)
                              .join("")}
                          </ol>`
                        : ""}
                      ${block.closingNote
                        ? `<p class="founder-letter-closing"><strong>${escapeHtml(block.closingNote.label)}</strong> ${escapeHtml(block.closingNote.text)}</p>`
                        : ""}
                      <div class="founder-letter-signoff">
                        <strong>${escapeHtml(block.signName)}</strong><br>
                        <span>${escapeHtml(block.signRole)}</span><br>
                        <span style="font-size:0.82rem;color:var(--text-muted);">${escapeHtml(block.signProject)}</span>
                      </div>
                    </article>
                  `;
                })
                .join("")}
            </div>

            ${Brand.founderPoem ? `
              <div class="founder-poem-trilingual" id="founder-poem-section">
                <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:0.5rem;">
                  <div>
                    <div class="editorial-kicker">${escapeHtml(Brand.founderPoem.titleZh || "七言绝句 · 文脉通商")}</div>
                    <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.18rem;">
                      ${escapeHtml(isEnglishUi() ? (Brand.founderPoem.titleEn || Brand.founderPoem.titleVi) : Brand.founderPoem.titleVi)}
                    </h3>
                  </div>
                  <span class="badge badge-gold">VI · 汉语 · EN</span>
                </div>
                <div class="founder-poem-grid">
                  <div class="founder-poem-col" lang="vi">
                    <div class="founder-poem-lang">Tiếng Việt</div>
                    <div class="founder-poem-lines">
                      ${(Brand.founderPoem.vi || []).map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
                    </div>
                  </div>
                  <div class="founder-poem-col" lang="zh-Hans">
                    <div class="founder-poem-lang">七言绝句 · 中文</div>
                    <div class="founder-poem-lines hanzi">
                      ${(Brand.founderPoem.zh || []).map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
                    </div>
                  </div>
                  <div class="founder-poem-col" lang="en">
                    <div class="founder-poem-lang">English Verse</div>
                    <div class="founder-poem-lines">
                      ${(Brand.founderPoem.en || []).map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
                    </div>
                  </div>
                </div>
              </div>
            ` : ""}

            ${(() => {
              const fg = Brand.founderGuidance || {};
              const guide = (fmMode === "en" || (fmMode === "all" && enAb)) ? fg.en : fmMode === "zh" ? fg.zh : fg.vi;
              if (!guide) return "";
              return `
                <div class="founder-guidance-wrap" id="founder-counsel-section">
                  <div class="ed-meta-line" style="margin-bottom:0.65rem;">${escapeHtml(guide.sectionBadge)}</div>
                  <div class="founder-guidance-grid">
                    <article class="founder-guidance-card">
                      <h3>${escapeHtml(guide.readerCardTitle)}</h3>
                      <p class="founder-guidance-lead">${escapeHtml(guide.readerHeadline)}</p>
                      ${(guide.readerParagraphs || []).map((p) => `<p>${escapeHtml(p)}</p>`).join("")}
                    </article>
                    <article class="founder-guidance-card founder-guidance-card--discipline">
                      <h3>${escapeHtml(guide.selfCardTitle)}</h3>
                      <ul class="founder-discipline-list">
                        ${(guide.selfCommitments || [])
                          .map((item) => `<li><strong>${escapeHtml(item.label)}</strong> ${escapeHtml(item.text)}</li>`)
                          .join("")}
                      </ul>
                    </article>
                  </div>
                </div>
              `;
            })()}
          </section>

          <!-- Sections 04 to 09: Research, Learning, Cultural Dialogue, Founder Identity, IP, Contact -->
          <div class="about-nine-grid">
            ${remainingSecs
              .map(
                (sec) => {
                  const ov = enAb ? aboutEnMap[sec.id] : null;
                  const pts = (ov && ov.points) ? ov.points : sec.points;
                  return `
                  <div id="${escapeHtml(sec.id)}" class="about-section-card">
                    <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.65rem;">
                      <span class="about-num-badge">${escapeHtml(sec.num)}</span>
                      <span class="hanzi" style="font-size:0.86rem;color:var(--text-muted);">${escapeHtml(sec.titleZh)}</span>
                    </div>
                    <h2 style="font-size:1.22rem;margin-bottom:0.6rem;">${escapeHtml((ov && ov.title) || sec.title)}</h2>
                    ${(ov && ov.summary) || sec.summary ? `<p style="margin:0;color:var(--text-secondary);font-size:0.92rem;line-height:1.68;">${escapeHtml((ov && ov.summary) || sec.summary)}</p>` : ""}
                    ${pts && pts.length
                      ? `<ul style="padding-left:1.15rem;margin:0.5rem 0 0;color:var(--text-secondary);font-size:0.9rem;">
                          ${pts
                            .map((pt) => `<li style="margin-bottom:0.45rem;"><strong>${escapeHtml(pt.label)}:</strong> ${escapeHtml(pt.text)}</li>`)
                            .join("")}
                        </ul>`
                      : ""}
                  </div>
                `;
                }
              )
              .join("")}
          </div>

          <!-- Brand Identity, Visual Signature & Institutional Independence -->
          <section id="about-brand-identity" class="card" style="border-color:var(--border-gold);">
            <div class="card-header-row">
              <div>
                <div class="editorial-kicker">${enAb ? "Brand Identity &amp; Visual Signature Guidelines" : "Nhận diện Thương hiệu &amp; Hệ thống Thị giác • Visual Signature Guidelines"}</div>
                <h2 style="margin:0;">${enAb ? `Official Visual Identity — ${escapeHtml(Brand.projectFullTitle)}` : `Bộ Nhận diện Chính thức — ${escapeHtml(Brand.projectFullTitle)}`}</h2>
              </div>
              <span class="badge badge-gold">${escapeHtml(Brand.founderSignature)}</span>
            </div>

            <div class="epistemic-box" style="margin:0.85rem 0;">
              <div class="epistemic-title">${enAb ? "Independent Platform Clarification" : "Tuyên bố Độc lập Thể chế • Independent Platform Clarification"}</div>
              <p style="margin:0;font-size:0.88rem;">${escapeHtml((enAb && bi.independenceNoticeEn) ? bi.independenceNoticeEn : (bi.independenceNotice || ""))}</p>
            </div>

            <div class="brand-guidelines-showcase">
              ${(bi.logoVariations || [])
                .map(
                  (lv) => {
                    const lvOv = enAb ? brandAssetEn[lv.id] : null;
                    const lvTitle = (lvOv && lvOv.title) || lv.title;
                    const lvCap = (lvOv && lvOv.caption) || lv.caption;
                    return `
                    <div class="brand-asset-plate">
                      <img decoding="async"  src="${escapeHtml(lv.src)}" alt="${escapeHtml(lvTitle)}" loading="eager" />
                      <div>
                        <div style="font-weight:700;font-size:0.88rem;color:var(--text-primary);">${escapeHtml(lvTitle)}</div>
                        <div style="font-size:0.79rem;color:var(--text-muted);margin-top:0.2rem;">${escapeHtml(lvCap)}</div>
                      </div>
                    </div>
                  `;
                  }
                )
                .join("")}
            </div>

            <h3 style="font-size:1rem;margin:1.35rem 0 0.45rem;">${enAb ? "Scholarly &amp; Cultural Palette (Brand Color System)" : "Bảng màu Chuẩn Mực Học thuật &amp; Văn hóa (Brand Color System)"}</h3>
            <div class="brand-swatch-grid">
              ${(bi.colorPalette || [])
                .map(
                  (c) => `
                    <div class="brand-swatch-item">
                      <div class="brand-swatch-color" style="background:${escapeHtml(c.hex)};"></div>
                      <div style="padding:0.45rem 0.55rem;">
                        <div style="font-weight:700;">${escapeHtml(c.name)}</div>
                        <div style="color:var(--text-muted);font-family:monospace;">${escapeHtml(c.hex)} • ${escapeHtml(c.zh)}</div>
                      </div>
                    </div>
                  `
                )
                .join("")}
            </div>
          </section>

          <!-- Links to All 8 Legal & Policy Documents -->
          <section class="card">
            <div class="card-header-row">
              <div>
                <div class="editorial-kicker">${enAb ? "Legal, Intellectual Property &amp; Image Attribution" : "Pháp lý, Sở hữu Trí tuệ &amp; Nguồn Ảnh • Legal &amp; IP Documentation"}</div>
                <h2 style="margin:0;">${enAb ? "Copyright Charter, Open Policies &amp; Provenance Center (8 Documents)" : "Cổng Hồ sơ Bản quyền, Chính sách &amp; Nguồn Tư liệu (8 Tài liệu)"}</h2>
              </div>
              <button type="button" class="btn btn-primary btn-sm" data-action="open-legal-doc" data-doc="copyright">${enAb ? "Open Legal Center →" : "Mở Trung tâm Pháp lý →"}</button>
            </div>
            <p style="font-size:0.9rem;color:var(--text-secondary);margin:0.55rem 0 1rem;">
              ${escapeHtml(Brand.copyrightNoticeFull)} — ${enAb ? "Distinguishing original bilingual research synthesis from public-domain historical classics and open-access museum holdings." : "Phân định rạch ròi tài sản sáng tạo gốc của dự án, văn bản kinh điển phạm vi công cộng và nguồn cấp phép bảo tàng mở."}
            </p>
            <div class="grid grid-4" style="gap:0.75rem;">
              ${legalPages
                .map(
                  (doc) => `
                    <button
                      type="button"
                      class="hero-autocomplete-item"
                      style="border:1px solid var(--border-subtle);padding:0.75rem;text-align:left;align-items:flex-start;flex-direction:column;gap:0.25rem;"
                      data-action="open-legal-doc"
                      data-doc="${escapeHtml(doc.id)}"
                    >
                      <span class="badge badge-outline">${escapeHtml(doc.number)} • ${escapeHtml(doc.titleZh)}</span>
                      <strong style="font-size:0.86rem;color:var(--text-primary);">${escapeHtml(doc.titleEn)}</strong>
                      ${enAb ? "" : `<span style="font-size:0.77rem;color:var(--text-muted);">${escapeHtml(doc.titleVi)}</span>`}
                    </button>
                  `
                )
                .join("")}
            </div>
          </section>
        </div>
      </section>
    `;
  }

  function renderLegalPage() {
    const enLg = isEnglishUi();
    const legalList = Brand.legalPages || [];
    const activeDoc = legalList.find((d) => d.id === ui.activeLegalDocId) || legalList[0];
    const allEditorialImgs = EditorialMedia && EditorialMedia.images ? Object.values(EditorialMedia.images) : [];
    const allArtifacts = Museum && Museum.artifacts ? Museum.artifacts : [];
    const legalEnMap = {
      copyright: {
        summary: "Copyright © 2026 Lê Hưng Thịnh. All Rights Reserved. Defines copyright scope covering original scholarly essays, UI architecture, bilingual dictionaries, and source code of CHINESE CULTURE EXPLORER – 中国文化探索.",
        sections: [
          { heading: "1. Official Copyright Holder", body: "All original editorial synthesis, information architecture, and application source code of CHINESE CULTURE EXPLORER – 中国文化探索 are owned by Founder & Creator Lê Hưng Thịnh.", bullets: ["Copyright © 2026 Lê Hưng Thịnh. All Rights Reserved.", "Project: CHINESE CULTURE EXPLORER – 中国文化探索", "Tagline: Explore Chinese Civilization. Understand Its Philosophy. Discover Its Culture."] },
          { heading: "2. Original Protected Components", body: "Copyright protection under Vietnamese Intellectual Property Law and international treaties applies to:", bullets: ["Original analytical essays, Sino–Vietnamese comparative studies, and interdisciplinary commentary.", "Bilingual Vietnamese–English explanations, Six Scripts (Liushu) character etymology, mnemonics, and usage examples.", "All conceptual infographics, historical diagrams, editorial maps, and custom SVG illustrations.", "Brand identity assets (logos, seals, wordmarks), editorial UI layout, and platform source code."] },
          { heading: "3. Public Domain & Third-Party Carve-Outs", body: "The platform strictly claims ZERO exclusive ownership over:", bullets: ["Historical facts, astronomical data for the 24 Solar Terms, or public-domain classics such as the Analects, Daodejing, Shiji, or Huangdi Neijing.", "Museum artifacts, rare manuscripts, and third-party open-access photographs belonging to holding institutions or creators.", "Open-licensed third-party works governed by their respective CC0 / CC BY-SA 4.0 licenses."] },
          { heading: "4. Trademark & Registration Transparency", body: "Written works, computer programs, and brand marks are structured cleanly for formal IP filing where eligible. No registered trademark (®) is claimed prior to official government registration grant." }
        ]
      },
      terms: {
        summary: "Defines educational access permissions, scholarly citation standards, and prohibited scraping or commercial misappropriation across CHINESE CULTURE EXPLORER.",
        sections: [
          { heading: "1. Non-Commercial Education & Research Scope", body: "Learners, educators, and researchers may read monographs, use the Liushu Dictionary & Contextual Notebook, save personal study notes, and export CSV/TSV vocabulary lists for non-commercial study and teaching." },
          { heading: "2. Attribution Requirements", body: "When citing original synthesis or diagrams from this platform, please credit: Lê Hưng Thịnh – CHINESE CULTURE EXPLORER – 中国文化探索.", bullets: ["Do not republish the entire monograph database or editorial assets commercially without prior written permission.", "Do not strip copyright notices, creator colophons, or holding museum credits attached to visual plates."] },
          { heading: "3. Prohibited Conduct", bullets: ["Automated scraping or bulk redistribution for commercial packaging.", "Misrepresenting the platform as an official government organ, university press, or state-sponsored museum."] }
        ]
      },
      privacy: {
        summary: "Privacy-first commitment for learners and founder via Local-first browser storage with zero third-party ad tracking.",
        sections: [
          { heading: "1. Local-First Data Architecture & Zero Ad Trackers", body: "CHINESE CULTURE EXPLORER stores study activity strictly under user control:", bullets: ["Reading history, Vocabulary Notebook notes, Active Recall quiz state, and journal entries persist locally in your browser (localStorage) or local loopback dev storage.", "Zero third-party behavioral advertising cookies or telemetry brokers."] },
          { heading: "2. Founder Privacy Protection", body: "Only the public creator identity (Lê Hưng Thịnh – Founder & Creator) is published; home addresses, personal IDs, and private phone numbers are omitted for digital privacy." }
        ]
      },
      licensing: {
        summary: "Clear four-tier rights framework separating original project synthesis, editorial SVG graphics, open third-party assets, and public-domain historical texts.",
        sections: [
          { heading: "1. Four-Layer Content Licensing Matrix", bullets: ["Tier A — Original Essays, Liushu Etymologies, UI & Code: Copyright © 2026 Lê Hưng Thịnh. All Rights Reserved.", "Tier B — Editorial Infographics, Timelines & Schematic Maps: Educational project assets with clear provenance metadata.", "Tier C — Classical Texts (Analects, Suwen, Shiji, etc.): Public Domain ancient originals; bilingual commentary remains project intellectual property.", "Tier D — Open Museum & Archive Media (UNESCO, Palace Museum Open Access, CText, Wikimedia Commons): Governed by respective Open Access / CC licenses."] },
          { heading: "2. Digital Illustration & Archival Photograph Distinction", body: "Schematic maps and SVG study plates created programmatically for educational comparison are labeled explicitly as editorial reconstructions and never passed off as authentic historical excavations." }
        ]
      },
      "image-credits": {
        summary: "Eight-field provenance ledger covering editorial visuals, provincial photography, and digital museum artifacts: Creator, Institution, Source URL, Holder, License, Verification, Attribution, and Scope.",
        sections: [
          { heading: "Visual Attribution Principles", body: "Every image distinguishes clearly between Historical Artifact/Photograph, Editorial Reconstruction, Schematic Map, and Conceptual Visual—never scraping watermarked commercial press photography." }
        ]
      },
      "ip-reporting": {
        summary: "Good-faith channel for attribution corrections, citation amendments, or takedown requests aligned with Vietnam IP Law and international open standards.",
        sections: [
          { heading: "1. Respect for Third-Party Rights", body: "If any institution or creator identifies an image or excerpt requiring updated attribution or removal, the platform reviews and resolves valid notices promptly." },
          { heading: "2. Required Notice Details", bullets: ["Contact identification of rights holder or authorized representative.", "Description of the copyrighted work claimed.", "Exact URL, Essay ID, or Image Asset ID on this platform.", "Proof or good-faith statement of ownership or license authority."] }
        ]
      },
      disclaimer: {
        summary: "Clarifies scholarly scope limitations regarding historical inquiry, classical health preservation (Yangsheng), cosmology symbols, customs regulations, and institutional independence.",
        sections: [
          { heading: "1. Independent Academic Reference Only", body: "Materials herein support cultural, historical, linguistic, and academic business education ONLY—never clinical medical advice, formal legal counsel, investment advice, or commercial fortune-telling." },
          { heading: "2. Traditional Medicine & Cosmological Symbols", bullets: ["Huangdi Neijing and 24 Solar Terms content are examined historically and culturally—never substituting licensed medical diagnosis.", "Yijing hexagrams, Bazi, and Feng Shui are studied purely as historical symbol systems, strictly separated from empirical science."] },
          { heading: "3. Trade, Customs & HS Code Reference", body: "Analyses of C/O Form E, RCEP, Incoterms, and HS classifications systematize learning workflows; real customs declarations must consult official current tariffs and ministries." },
          { heading: "4. Non-Governmental Status", body: "An independent initiative by Lê Hưng Thịnh, unaffiliated with any state agency, national academy, or official museum." }
        ]
      },
      founder: {
        summary: "Official creator identity record of Lê Hưng Thịnh — Founder & Creator of CHINESE CULTURE EXPLORER – 中国文化探索.",
        sections: [
          { heading: "Official Identity Statement", bullets: ["Full Name (Founder & Creator): Lê Hưng Thịnh", "Role: Originator, Information Architect, and Lead Builder of CHINESE CULTURE EXPLORER – 中国文化探索", "Mission: Building a rigorous digital bridge linking Chinese civilizational studies, classical Hanzi philology, and Vietnam–China economic–cultural dialogue."] },
          { heading: "Publication Ethics & Privacy Standard", body: "Strict adherence to zero fabricated academic degrees/affiliations and safeguarding non-public personal contact details." }
        ]
      }
    };
    const docEnOv = enLg ? legalEnMap[activeDoc.id] : null;
    const renderDocSecs = (docEnOv && docEnOv.sections) ? docEnOv.sections : (activeDoc.sections || []);

    return `
      <section class="page-hero">
        <div class="container">
          <div class="editorial-kicker">${enLg ? "Copyright, Governance and Provenance" : "Bản quyền, quy chuẩn và nguồn tư liệu"} · ${escapeHtml(Brand.projectFullTitle)}</div>
          <h1>${enLg ? "Legal charter, intellectual property and source attribution" : "Hồ sơ pháp lý, sở hữu trí tuệ và nguồn tư liệu"}</h1>
          <p class="section-subtitle" style="margin-bottom:0.8rem;">
            ${escapeHtml(Brand.copyrightNoticeFull)} • ${escapeHtml(Brand.foundedByStatement)}. ${enLg ? "Transparent archival provenance aligned with Vietnam &amp; international open scholarship standards." : "Chuẩn mực minh bạch nguồn tư liệu và pháp lý phù hợp định hướng Việt Nam &amp; quốc tế."}
          </p>
          <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
            <button type="button" class="btn btn-secondary btn-sm" data-action="nav" data-page="about">${enLg ? "← Back to About &amp; Founder's Note" : "← Quay lại Trang Giới thiệu"}</button>
            <span class="badge badge-jade">${enLg ? "8 Charter Documents" : "8 Tài liệu Chính thức"}</span>
            <span class="badge badge-gold">${enLg ? `${allEditorialImgs.length} Archival Plates &amp; ${allArtifacts.length} Relics Audited` : `${allEditorialImgs.length} Tư liệu Đồ họa &amp; ${allArtifacts.length} Hiện vật Kiểm kê`}</span>
          </div>
        </div>
      </section>

      <section class="page-section">
        <div class="container">
          <div class="legal-layout-grid">
            <aside class="legal-nav-list" aria-label="${enLg ? "8 Legal Charter Documents" : "Danh mục 8 tài liệu pháp lý"}">
              ${legalList
                .map(
                  (doc) => `
                    <button
                      type="button"
                      class="legal-nav-btn ${doc.id === activeDoc.id ? "active" : ""}"
                      data-action="open-legal-doc"
                      data-doc="${escapeHtml(doc.id)}"
                    >
                      <span class="about-num-badge">${escapeHtml(doc.number)}</span>
                      <span>
                        <span style="display:block;color:var(--text-primary);">${escapeHtml(doc.titleEn)}</span>
                        ${enLg ? "" : `<span style="font-size:0.74rem;color:var(--text-muted);">${escapeHtml(doc.titleVi)}</span>`}
                      </span>
                    </button>
                  `
                )
                .join("")}
            </aside>

            <div class="card" style="padding:1.6rem;">
              <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.75rem;">
                <span class="badge badge-red">${enLg ? `Document ${escapeHtml(activeDoc.number)} / 08` : `Tài liệu ${escapeHtml(activeDoc.number)} / 08`}</span>
                <span style="font-size:0.8rem;color:var(--text-muted);">${enLg ? "Updated:" : "Cập nhật:"} ${escapeHtml(activeDoc.lastUpdated)} • ${escapeHtml(Brand.founderSignature)}</span>
              </div>

              <h2 style="font-size:1.65rem;margin-bottom:0.25rem;">${escapeHtml(enLg ? (activeDoc.titleEn || activeDoc.titleVi) : activeDoc.titleVi)}</h2>
              <div style="font-size:0.9rem;color:var(--text-muted);margin-bottom:0.9rem;">
                ${escapeHtml(enLg ? "" : activeDoc.titleEn)}${enLg ? "" : " • "}<span class="hanzi">${escapeHtml(activeDoc.titleZh)}</span>
              </div>

              <div class="epistemic-box" style="margin-bottom:1.25rem;">
                <div class="epistemic-title">${enLg ? "Legal Scope Summary" : "Tóm tắt Phạm vi Pháp lý"}</div>
                <p style="margin:0;font-size:0.92rem;">${escapeHtml((docEnOv && docEnOv.summary) ? docEnOv.summary : (enLg && activeDoc.summaryEn ? activeDoc.summaryEn : activeDoc.summary))}</p>
              </div>

              ${activeDoc.id === "founder" ? `
                <div style="margin-bottom:1.25rem;">
                  <img decoding="async" 
                    src="${escapeHtml(Brand.assets.founderSeal)}"
                    alt="${escapeHtml(Brand.founderSignature)}"
                    style="max-width:340px;width:100%;height:auto;border-radius:8px;border:1px solid var(--border-gold);"
                    loading="eager"
                  />
                </div>
              ` : ""}

              <div style="display:flex;flex-direction:column;gap:1.1rem;">
                ${renderDocSecs
                  .map(
                    (sec) => `
                      <section style="padding-bottom:0.95rem;border-bottom:1px solid var(--border-subtle);">
                        <h3 style="font-size:1.1rem;margin-bottom:0.45rem;">${escapeHtml(sec.heading)}</h3>
                        ${sec.body ? `<p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.5rem;">${escapeHtml(sec.body)}</p>` : ""}
                        ${sec.bullets && sec.bullets.length
                          ? `<ul style="padding-left:1.2rem;margin:0;color:var(--text-secondary);font-size:0.9rem;">
                              ${sec.bullets.map((b) => `<li style="margin-bottom:0.4rem;">${escapeHtml(b)}</li>`).join("")}
                            </ul>`
                          : ""}
                      </section>
                    `
                  )
                  .join("")}
              </div>

              ${activeDoc.showDynamicCreditsMatrix ? `
                <div style="margin-top:1.5rem;">
                  <h3 style="font-size:1.15rem;margin-bottom:0.35rem;">${enLg ? `1. Copyright Registry — ${allEditorialImgs.length} Editorial Graphics &amp; Maps` : `1. Kiểm kê Bản quyền ${allEditorialImgs.length} Tư liệu Đồ họa &amp; Bản đồ Biên tập`}</h3>
                  <p style="font-size:0.84rem;color:var(--text-muted);margin-bottom:0.5rem;">${enLg ? "Complete provenance record: Creator, Holding Institution, Original URL, Copyright Holder, License, Verification Status, and Required Citation." : "Ghi nhận đủ: Tác giả, Tổ chức lưu trữ, URL gốc, Chủ sở hữu bản quyền, Giấy phép, Hình thức xác thực và Yêu cầu trích dẫn."}</p>
                  <div class="credits-table-wrap">
                    <table class="credits-table">
                      <thead>
                        <tr>
                          <th>${enLg ? "# / Asset ID" : "# / Mã Tài nguyên"}</th>
                          <th>${enLg ? "Work &amp; Classification" : "Tác phẩm &amp; Phân loại"}</th>
                          <th>${enLg ? "Creator / Institution &amp; Source" : "Tác giả / Tổ chức &amp; Nguồn gốc"}</th>
                          <th>${enLg ? "Rights Holder &amp; License" : "Chủ bản quyền &amp; Giấy phép"}</th>
                          <th>${enLg ? "Status &amp; Required Attribution" : "Trạng thái &amp; Ghi nhận Bắt buộc"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${allEditorialImgs
                          .map(
                            (im, idx) => `
                              <tr>
                                <td><strong>#${idx + 1}</strong><br><code>${escapeEditorialHtml(im.id)}</code></td>
                                <td>
                                  <strong>${escapeEditorialHtml(im.titleVi)}</strong><br>
                                  <span class="badge badge-outline" style="margin-top:0.2rem;">${escapeEditorialHtml(im.authenticityLabelVi || im.authenticityType || "")}</span>
                                </td>
                                <td>
                                  ${escapeEditorialHtml(im.creator || "")} — <i>${escapeEditorialHtml(im.institution || "")}</i><br>
                                  ${escapeEditorialHtml(im.originalSource || "")}
                                  ${im.sourceUrl ? `<br><a href="${escapeEditorialHtml(im.sourceUrl)}" target="_blank" rel="noopener noreferrer">Nguồn đối chiếu ↗</a>` : ""}
                                </td>
                                <td>
                                  <strong>${escapeEditorialHtml(im.copyrightHolder || "")}</strong><br>
                                  <span>${escapeEditorialHtml(im.license || "")}</span>
                                </td>
                                <td>
                                  <span class="badge badge-jade">${escapeEditorialHtml(im.verificationStatus || "verified")}</span><br>
                                  <span>${escapeEditorialHtml(im.attributionText || "")}</span>
                                </td>
                              </tr>
                            `
                          )
                          .join("")}
                      </tbody>
                    </table>
                  </div>

                  ${window.CCE_V3_MODS ? (() => { const ps = window.CCE_V3_MODS.getProvenanceStats(); return `<div class="flashcard-layer" style="margin:1.15rem 0;border-left:4px solid var(--jade-green);"><strong>${enLg ? `3. 456 Provincial Plates Provenance Breakdown (${ps.totalProvItems} plates)` : `3. Minh bạch Nguồn 456 Ảnh Tư liệu 34 Tỉnh thành (${ps.totalProvItems} ảnh)`}</strong><p style="margin:0.35rem 0 0;font-size:0.84rem;color:var(--text-secondary);">${enLg ? `171 Wikimedia Commons / Public Domain heritage plates, 170 regional culinary plates (${ps.editorialDishes} editorial reconstructions clearly labeled in lightbox), and 115 archival portraits.` : `171 ảnh di sản kiến trúc từ Wikimedia Commons/Public Domain, 170 ảnh ẩm thực vùng miền (trong đó ${ps.editorialDishes} đĩa minh họa biên tập được gắn nhãn rõ ràng khi phóng to), và 115 chân dung danh nhân lịch sử.`}</p></div>`; })() : ""}
                  <h3 style="font-size:1.15rem;margin:1.65rem 0 0.35rem;">${enLg ? `2. Asset Inventory — ${allArtifacts.length} Digital Museum Relics` : `2. Kiểm kê Nguồn ${allArtifacts.length} Hiện vật Bảo tàng Số`}</h3>
                  <div class="credits-table-wrap">
                    <table class="credits-table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>${enLg ? "Artifact &amp; Era" : "Hiện vật &amp; Niên đại"}</th>
                          <th>${enLg ? "Provenance &amp; Original Collection" : "Xuất xứ &amp; Sưu tập Gốc"}</th>
                          <th>${enLg ? "Holding Attribution" : "Ghi nhận Nguồn Lưu trữ (Attribution)"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        ${allArtifacts
                          .map(
                            (art, idx) => `
                              <tr>
                                <td><strong>#${idx + 1}</strong></td>
                                <td><strong>${escapeHtml(art.nameVi)}</strong> (<span class="hanzi">${escapeHtml(art.nameZh)}</span>)<br><span style="color:var(--text-muted);">${escapeHtml(art.periodLabel)}</span></td>
                                <td>${escapeHtml(art.origin || "")}<br><i>${escapeHtml(art.collection || "")}</i></td>
                                <td>${escapeHtml(art.attribution || "")}</td>
                              </tr>
                            `
                          )
                          .join("")}
                      </tbody>
                    </table>
                  </div>
                </div>
              ` : ""}
            </div>
          </div>
        </div>
      </section>
    `;
  }

  // ==========================================================================
  // Modals: Province Detail, Province Comparison, Dictionary Term & Global Search
  // ==========================================================================
  function getRelatedKnowledgeForProvince(pr) {
    if (!pr) return { cities: [], articles: [], paintings: [], artifacts: [] };
    const graph = window.CCE_CROSSLINKS && window.CCE_CROSSLINKS.getForProvince ? window.CCE_CROSSLINKS.getForProvince(pr.id) : [];
    const pickByIds = (list, kindName) => {
      const want = {};
      graph.filter((e) => e.kind === kindName).forEach((e) => { want[e.id] = true; });
      return (list || []).filter((x) => x && want[x.id]);
    };
    const tokens = [pr.nameVi, pr.nameEn, pr.nameZh, pr.capital]
      .filter(Boolean)
      .map((t) => normalizeText(t))
      .filter((t) => t.length >= 2);
    const hasMatch = (str) => {
      const hay = normalizeText(str || "");
      return tokens.some((tok) => hay.includes(tok));
    };
    const mergeUnique = (prim, sec) => {
      const seen = {};
      return prim.concat(sec).filter((x) => x && x.id && !seen[x.id] && (seen[x.id] = true)).slice(0, 4);
    };
    return {
      cities: (Regions.cities || []).filter((c) => hasMatch(`${c.nameVi} ${c.nameZh} ${c.nameEn} ${c.region} ${c.history}`)).slice(0, 3),
      articles: mergeUnique(pickByIds(Articles, "articles"), (Articles || []).filter((a) => hasMatch(`${a.titleVi} ${a.titleEn} ${a.introduction} ${(a.relatedTopics || []).join(" ")}`))),
      paintings: mergeUnique(pickByIds(PaintingsList, "paintings"), PaintingsList.filter((p) => hasMatch(`${p.titleVi} ${p.museum} ${p.analysis && p.analysis.historicalBackground || ""}`))),
      artifacts: mergeUnique(pickByIds(Museum.artifacts, "artifacts"), (Museum.artifacts || []).filter((m) => hasMatch(`${m.nameVi} ${m.collection} ${m.origin} ${m.historicalContext}`)))
    };
  }

  function renderProvinceDetailModal() {
    if (!ui.activeProvinceId) return "";
    const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
    const pr = provinces.find((item) => item.id === ui.activeProvinceId);
    if (!pr) return "";
    const fav = Store.isBookmarked("province", pr.id);
    const rel = getRelatedKnowledgeForProvince(pr);
    const enPM = isEnglishUi();
    const help = getEnHelp();
    const typeDisplay = help.provinceTypeEn ? help.provinceTypeEn(pr.type, enPM) : pr.type;
    const regDisplay = help.regionLabelEn ? help.regionLabelEn(pr.regionId, pr.regionLabel, enPM) : pr.regionLabel;
    const pTitleMain = enPM ? escapeHtml(pr.nameEn || pr.nameVi) : `${escapeHtml(pr.nameVi)} (${escapeHtml(pr.nameEn)})`;

    return `
      <div class="modal-backdrop open" data-action="close-province-detail-backdrop" style="z-index:220;">
        <div class="modal-panel" style="max-width:960px;" role="dialog" aria-modal="true" aria-label="${enPM ? `Province Dossier: ${escapeHtml(pr.nameEn || pr.nameVi)}` : `Hồ sơ Tỉnh/Thành: ${escapeHtml(pr.nameVi)}`}">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:0.85rem;">
            <div>
              <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.35rem;">
                <span class="badge badge-gold">${escapeHtml(typeDisplay)}</span>
                <span class="badge badge-red">${escapeHtml(regDisplay)}</span>
                ${pr.abbr ? `<span class="badge badge-outline">${enPM ? "Abbr.:" : "Viết tắt:"} ${escapeHtml(cleanAbbrEn(pr.abbr, enPM))}</span>` : ""}
              </div>
              <h2 style="font-family:var(--font-editorial);font-size:1.85rem;margin:0;">
                ${pTitleMain}
                <span class="hanzi" style="color:var(--imperial-red);margin-left:0.45rem;font-size:1.25rem;">${escapeHtml(cleanAbbrEn(pr.headerFormatted || pr.nameZh, enPM))}</span>
                ${renderSpeakBtn(pr.nameZh, enPM ? "Listen to Mandarin name" : "Nghe phát âm tên tỉnh/thành")}
              </h2>
            </div>
            <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">
              ${(() => {
                const atlasHub = (window.CCE_DESTINATIONS_ATLAS && window.CCE_DESTINATIONS_ATLAS.hubs || []).find((h) => h.provinceId === pr.id);
                return atlasHub ? `<button type="button" class="btn btn-jade btn-sm" data-action="open-destinations-hub" data-id="${escapeHtml(atlasHub.id)}">${enPM ? "3-Level Travel Guide →" : "Du lịch 3 Cấp →"}</button>` : "";
              })()}
              <button type="button" class="btn btn-gold btn-sm" data-action="compare-with-province" data-id="${pr.id}">${enPM ? "Compare" : "Đối chiếu Tỉnh"}</button>
              <button type="button" class="btn ${fav ? "btn-jade" : "btn-secondary"} btn-sm" data-action="toggle-bookmark" data-type="province" data-id="${pr.id}" data-title="${enPM ? `Division: ${escapeHtml(pr.nameEn || pr.nameVi)}` : `Tỉnh/Thành: ${escapeHtml(pr.nameVi)}`}">
                ${enPM ? (fav ? "Saved" : "Save") : (fav ? "Đã lưu" : "Lưu")}
              </button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="print-dossier">${ICONS.fileText} ${enPM ? "Print A4" : "In Hồ sơ A4"}</button>
              <button type="button" class="modal-close-btn" data-action="close-province-detail" aria-label="${enPM ? "Close dossier" : "Đóng hồ sơ tỉnh"}">${ICONS.close}</button>
            </div>
          </div>

          ${pr.image ? `
            <figure style="margin:0 0 1.15rem;background:var(--bg-surface);border-radius:var(--radius-md);overflow:hidden;border:1px solid var(--hairline);">
              <img decoding="async"  src="${escapeHtml(pr.image)}" alt="${escapeHtml(enVal(pr, "landmark") || (enPM ? pr.nameEn : pr.nameVi))}" style="width:100%;aspect-ratio:16/9;max-height:430px;object-fit:cover;object-position:50% 35%;display:block;" />
              <figcaption style="padding:0.55rem 0.85rem;font-size:0.82rem;color:var(--text-secondary);border-top:1px solid var(--hairline);">
                <span><strong>${enPM ? "Signature Landmark:" : "Danh thắng biểu tượng:"}</strong> ${escapeHtml(enVal(pr, "landmark") || (enPM ? pr.nameEn : pr.nameVi))}</span>
              </figcaption>
            </figure>
          ` : ""}

          ${renderUnifiedProvinceDetailContent(pr)}

          ${(rel.cities.length || rel.articles.length || rel.paintings.length || rel.artifacts.length) ? `
            <div class="crosslink-strip" style="margin-bottom:0;">
              <div class="editorial-kicker" style="margin-bottom:0.2rem;">${enPM ? "Knowledge Cross-Links" : "Liên kết Tri thức Khu vực • Knowledge Cross-Links"}</div>
              <strong>${enPM ? `Related Cities, Monographs, Artifacts & Works in ${escapeHtml(pr.nameEn || pr.nameVi)}` : `Đô thị, Chuyên luận, Bảo vật &amp; Tác phẩm gắn với ${escapeHtml(pr.nameVi)}`}</strong>
              <div class="crosslink-pill-row">
                ${rel.cities.map((c) => `<button type="button" class="btn btn-secondary btn-sm" data-action="jump-city" data-id="${c.id}">${enPM ? "City:" : "Đô thị"} ${escapeHtml(enPM ? (c.nameEn || c.nameVi) : c.nameVi)}</button>`).join("")}
                ${rel.articles.map((a) => `<button type="button" class="btn btn-primary btn-sm" data-action="open-article" data-id="${a.id}">${escapeHtml(enPM ? (getArticleEnPack(a.id)?.title || a.titleEn || a.titleVi) : a.titleVi)}</button>`).join("")}
                ${rel.paintings.map((pt) => `<button type="button" class="btn btn-gold btn-sm" data-action="open-painting-detail" data-id="${pt.id}">${escapeHtml(enPM ? (pt.titleEn || pt.titleVi) : pt.titleVi)}</button>`).join("")}
                ${rel.artifacts.map((ar) => `<button type="button" class="btn btn-jade btn-sm" data-action="open-artifact" data-id="${ar.id}">${escapeHtml(enPM ? (ar.nameEn || ar.nameVi) : ar.nameVi)}</button>`).join("")}
              </div>
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function renderProvinceCompareModal() {
    if (!ui.provinceCompareOpen) return "";
    const enPM = isEnglishUi();
    const help = getEnHelp();
    const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
    const left = provinces.find((item) => item.id === ui.provinceCompareLeftId) || provinces[0];
    const right = provinces.find((item) => item.id === ui.provinceCompareRightId) || provinces[2] || provinces[1];
    if (!left || !right) return "";

    const renderProvCol = (pr, sideLabel, selectAction) => {
      const pType = help.provinceTypeEn ? help.provinceTypeEn(pr.type, enPM) : pr.type;
      const pReg = help.regionLabelEn ? help.regionLabelEn(pr.regionId, pr.regionLabel, enPM) : pr.regionLabel;
      const pName = enPM ? (pr.nameEn || pr.nameVi) : pr.nameVi;
      return `
      <div class="compare-card-col">
        <div style="margin-bottom:0.75rem;">
          <label style="font-size:0.79rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">${sideLabel}:</label>
          <select class="form-select" data-action="${selectAction}" style="font-weight:600;">
            ${provinces.map((item) => `
              <option value="${item.id}" ${item.id === pr.id ? "selected" : ""}>
                ${escapeHtml(enPM ? (item.nameEn || item.nameVi) : item.nameVi)} (${item.nameZh}) — ${escapeHtml(help.regionLabelEn ? help.regionLabelEn(item.regionId, item.regionLabel, enPM) : item.regionLabel)}
              </option>
            `).join("")}
          </select>
        </div>

        <div style="aspect-ratio:16/10;background:var(--bg-surface);border:1px solid var(--hairline);border-radius:var(--radius-md);overflow:hidden;margin-bottom:0.85rem;">
          <img decoding="async"  src="${escapeHtml(pr.image || "assets/images/articles/hero-traditional-arch.jpg")}" alt="${escapeHtml(pName)}" style="width:100%;height:100%;object-fit:cover;object-position:50% 35%;display:block;" />
        </div>

        <div style="display:flex;gap:0.4rem;flex-wrap:wrap;margin-bottom:0.5rem;">
          <span class="badge badge-gold">${escapeHtml(pType)}</span>
          <span class="badge badge-jade">${escapeHtml(pReg)}</span>
          ${pr.abbr ? `<span class="badge badge-outline">${escapeHtml(cleanAbbrEn(pr.abbr, enPM))}</span>` : ""}
        </div>

        <h4 style="font-family:var(--font-editorial);font-size:1.35rem;margin:0 0 0.5rem;">
          ${escapeHtml(pName)} <span class="hanzi" style="color:var(--imperial-red);">${escapeHtml(pr.nameZh)}</span>
          ${renderSpeakBtn(pr.nameZh)}
        </h4>

        <div class="analysis-panel-box" style="font-size:0.84rem;">
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Capital:" : "Thủ phủ:"}</strong> ${escapeHtml(enVal(pr, "capital"))}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Landmark:" : "Danh thắng:"}</strong> ${escapeHtml(enVal(pr, "landmark") || pName)}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Best Season:" : "Mùa đẹp nhất:"}</strong> ${escapeHtml(enVal(pr, "bestSeason") || (enPM ? "Year-round" : "Quanh năm"))}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Signature Cuisine:" : "Ẩm thực trứ danh:"}</strong> ${escapeHtml(enVal(pr, "cuisine") || (enPM ? "Regional specialties" : "Đặc sản địa phương"))}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Culture &amp; Heritage:" : "Văn hóa &amp; Di sản:"}</strong> ${escapeHtml(enVal(pr, "highlights"))}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Economy:" : "Kinh tế mũi nhọn:"}</strong> ${escapeHtml(enVal(pr, "economy"))}</div>
          <div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Field Notes:" : "Kinh nghiệm thực địa:"}</strong> ${escapeHtml(enVal(pr, "travelTip") || "")}</div>
          ${pr.commercialAndSupplyChain ? `<div style="margin-bottom:0.6rem;"><strong style="color:var(--imperial-red);">${enPM ? "Guilds &amp; Supply Chain:" : "Thương bang &amp; Chuỗi cung ứng:"}</strong> ${escapeHtml(enVal(pr.commercialAndSupplyChain, "historicalGuild") || "")} · <span style="color:var(--jade-green);">${escapeHtml(enVal(pr.commercialAndSupplyChain, "vietnamAseanLink") || "")}</span></div>` : ""}
          ${pr.literaryAndHistoricalEchoes ? `<div><strong style="color:var(--imperial-red);">${enPM ? "Literary Echoes:" : "Âm vang Thi ca:"}</strong> ${escapeHtml(enVal(pr.literaryAndHistoricalEchoes, "workTitle") || "")} — <span class="hanzi">${escapeHtml(pr.literaryAndHistoricalEchoes.quoteZh || "")}</span></div>` : ""}
        </div>
      </div>
    `;
    };

    return `
      <div class="modal-backdrop open" data-action="close-province-compare-backdrop" style="z-index:230;">
        <div class="modal-panel" style="max-width:1280px;max-height:92vh;display:flex;flex-direction:column;padding:0;" role="dialog" aria-modal="true" aria-label="${enPM ? "Compare Two Provincial Divisions" : "So sánh Đối chiếu 2 Tỉnh/Thành Trung Quốc"}">
          <div style="padding:1rem 1.5rem;background:var(--bg-elevated);border-bottom:1px solid var(--border-medium);display:flex;justify-content:space-between;align-items:center;gap:1rem;">
            <div>
              <h3 style="font-family:var(--font-editorial);font-size:1.5rem;margin:0;">
                ${enPM ? "34-Province Side-by-Side Comparator" : "So sánh Đối chiếu 2 Tỉnh / Thành Trung Quốc (34-Province Comparator)"}
              </h3>
              <p style="font-size:0.82rem;color:var(--text-muted);margin:0;">
                ${enPM ? "Compare two provincial divisions across climate, best travel windows, regional cuisine, UNESCO heritage, and industrial clusters." : "Đặt cạnh nhau 2 tỉnh/thành để so sánh khí hậu, mùa du lịch, ẩm thực đặc trưng, di sản UNESCO và động lực kinh tế."}
              </p>
            </div>
            <div style="display:flex;gap:0.45rem;align-items:center;flex-wrap:wrap;">
              <button type="button" class="btn btn-secondary btn-sm" data-action="swap-province-compare">${enPM ? "Swap A ↔ B" : "Đổi chỗ A ↔ B"}</button>
              <button type="button" class="btn btn-secondary btn-sm" data-action="print-dossier">${ICONS.fileText} ${enPM ? "Print A4" : "In Đối chiếu A4"}</button>
              <button type="button" class="modal-close-btn" data-action="close-province-compare" aria-label="${enPM ? "Close comparator" : "Đóng so sánh"}">${ICONS.close}</button>
            </div>
          </div>

          <div class="painting-compare-grid">
            ${window.CCE_V3_MODS && window.CCE_V3_MODS.renderCompareCol8Dim ? window.CCE_V3_MODS.renderCompareCol8Dim(left, enPM ? "FIRST DIVISION (LEFT PANEL)" : "TỈNH / THÀNH THỨ NHẤT (VẾ TRÁI)", "select-prov-compare-left", provinces, enPM, help, enVal, cleanAbbrEn, renderSpeakBtn(left.nameZh)) : renderProvCol(left, enPM ? "FIRST DIVISION (LEFT PANEL)" : "TỈNH / THÀNH THỨ NHẤT (VẾ TRÁI)", "select-prov-compare-left")}
            ${window.CCE_V3_MODS && window.CCE_V3_MODS.renderCompareCol8Dim ? window.CCE_V3_MODS.renderCompareCol8Dim(right, enPM ? "SECOND DIVISION (RIGHT PANEL)" : "TỈNH / THÀNH THỨ HAI (VẾ PHẢI)", "select-prov-compare-right", provinces, enPM, help, enVal, cleanAbbrEn, renderSpeakBtn(right.nameZh)) : renderProvCol(right, enPM ? "SECOND DIVISION (RIGHT PANEL)" : "TỈNH / THÀNH THỨ HAI (VẾ PHẢI)", "select-prov-compare-right")}
          </div>
        </div>
      </div>
    `;
  }

  function renderTermModal() {
    if (!ui.activeTermId) return "";
    const t = getTermById(ui.activeTermId);
    if (!t) return "";
    const collected = Store.isVocabCollected(t.id);

    const liushu = t.liushuType || t.liushuCategory || "";
    const examples = t.examples || [];

    return `
      <div class="modal-backdrop open" data-action="close-modal-backdrop" style="z-index:220;">
        <div class="modal-panel" style="max-width:740px;" role="dialog" aria-modal="true" aria-label="${escapeHtml(t.hanzi)}">
          <button type="button" class="modal-close-btn" data-action="close-term" aria-label="Đóng từ điển">${ICONS.close}</button>

          <div style="display:flex;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.8rem;">
            <span class="badge badge-gold">${escapeHtml(t.level)}</span>
            ${t.topicTag ? `<span class="badge badge-outline">${escapeHtml(t.topicTag)}</span>` : ""}
            <span class="badge badge-outline">${escapeHtml(t.pos)}</span>
            ${liushu ? `<span class="badge badge-red">${escapeHtml(liushu)}</span>` : ""}
          </div>

          <div style="display:flex;align-items:baseline;gap:1rem;flex-wrap:wrap;margin-bottom:1rem;">
            <span style="font-size:3rem;line-height:1.1;">${formatHanzi(t.hanzi, t.traditional)}</span>
            <span class="pinyin" style="font-size:1.35rem;">${escapeHtml(t.pinyin)}</span>
            ${t.hanViet ? `<span class="badge badge-gold" style="font-size:0.88rem;">Hán–Việt: ${escapeHtml(t.hanViet)}</span>` : ""}
            ${renderSpeakBtn(t.hanzi, "Nghe phát âm thuật ngữ chuẩn Phổ thông")}
          </div>

          <div style="display:flex;gap:0.6rem;flex-wrap:wrap;margin-bottom:1.25rem;">
            <button type="button" class="btn ${collected ? "btn-jade" : "btn-primary"} btn-sm" data-action="toggle-collect-vocab" data-id="${t.id}">
              ${isEnglishUi()
                ? (collected ? "Saved to Wordlist" : "Save to Wordlist")
                : (collected ? "Đã lưu vào Kho Từ vựng" : "Lưu vào Kho Từ vựng")}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="add-term-to-notebook" data-id="${t.id}">
              + ${isEnglishUi() ? "Save with Note to Reading Notebook" : "Lưu kèm ghi chú vào Sổ tay"}
            </button>
            <button type="button" class="btn btn-secondary btn-sm" data-action="open-stroke-pad" data-hanzi="${escapeHtml(t.hanzi)}" data-pinyin="${escapeHtml(t.pinyin || "")}">
              米字格 ${isEnglishUi() ? "Stroke Practice" : "Tập viết Bút lông"}
            </button>
            <button type="button" class="btn btn-jade btn-sm" data-action="add-term-to-srs" data-id="${t.id}">
              + ${isEnglishUi() ? "Add to SM-2 SRS" : "Nạp Thẻ SM-2"}
            </button>
          </div>

          <div class="grid grid-2" style="gap:0.9rem;margin-bottom:1rem;">
            <div class="flashcard-layer">
              <strong>Nghĩa Tiếng Việt & Hán-Việt:</strong><br>${escapeHtml(t.vietnamese)}
            </div>
            <div class="flashcard-layer">
              <strong>Nghĩa Tiếng Anh (Bilingual Bridge):</strong><br>${escapeHtml(t.english)}
            </div>
          </div>

          ${window.CCE_LABS ? window.CCE_LABS.renderHanziEvolutionStrip(t, isEnglishUi()) : ""}
          <div class="flashcard-layer" style="margin-bottom:0.8rem;">
            <strong>Phân tích Bộ thủ (Radical Analysis):</strong> ${escapeHtml(t.radicalAnalysis || t.radical)}
          </div>
          <div class="flashcard-layer" style="margin-bottom:0.8rem;">
            <strong>Cấu tạo chữ &amp; Lục thư (Liushu Classification):</strong> ${liushu ? `<span class="badge badge-gold" style="margin-right:0.35rem;">${escapeHtml(liushu)}</span> ` : ""}${escapeHtml(t.etymologyAndRadicals || t.components || "")}
          </div>
          <div class="flashcard-layer" style="margin-bottom:0.8rem;background:var(--bg-gold-soft);">
            <strong>Mẹo ghi nhớ (Mnemonic):</strong> ${escapeHtml(t.mnemonic || "")}
          </div>
          <div class="flashcard-layer" style="margin-bottom:0.8rem;">
            <strong>Bối cảnh Lịch sử & Văn hóa:</strong> ${escapeHtml(t.context)}
          </div>
          <div class="flashcard-layer" style="margin-bottom:0.8rem;">
            <strong>Cụm từ Liên quan:</strong> ${(t.related || []).map((r) => `<span class="badge badge-outline" style="margin:0.15rem;">${escapeHtml(r)}</span>`).join(" ")}
          </div>

          <div class="flashcard-layer">
            <strong>${examples.length} Câu Ngữ cảnh Thực tế:</strong>
            ${examples
              .map(
                (ex, idx) => `
                  <div style="margin-top:0.55rem;padding-top:0.45rem;border-top:1px solid var(--border-subtle);">
                    <div><strong>${idx + 1}.</strong> <span class="hanzi" style="font-size:1.08rem;">${escapeHtml(ex.zh)}</span> ${renderSpeakBtn(ex.zh)}</div>
                    <div class="pinyin" style="font-size:0.86rem;">${escapeHtml(ex.pinyin)}</div>
                    <div style="font-size:0.86rem;"><strong>VI:</strong> ${escapeHtml(ex.vi)}</div>
                    <div style="font-size:0.83rem;color:var(--text-muted);"><strong>EN:</strong> ${escapeHtml(ex.en)}</div>
                  </div>
                `
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
  }

  function renderGlobalSearchResultsHTML() {
    const state = Store.getState();
    const lp = getLangPack();
    const results = performGlobalSearch(ui.searchQuery, {
      period: ui.searchPeriodFilter,
      region: ui.searchRegionFilter,
      level: ui.searchLevelFilter,
      source: ui.searchSourceFilter
    });

    const cat = ui.searchCategoryFilter;
    const flatRows = [];
    const pushRows = (key, arr, builder) => {
      if (cat !== "all" && cat !== key) return;
      if (Array.isArray(arr)) arr.forEach((item) => flatRows.push(builder(item)));
    };

    const enS = isEnglishUi();
    pushRows("articles", results.articles, (a) => {
      const av = getLocalizedArticleView(a, getArticleSupplement(a.id), getArticleEditorial(a.id));
      return {
        badge: enS ? "Monograph" : "Chuyên luận",
        badgeClass: "badge-red",
        title: `${av.title} (${a.titleZh})`,
        sub: `${av.categoryLabel} • ${a.readMinutes} ${enS ? "min read" : "phút"}`,
        btnLabel: enS ? "Open Essay" : "Đọc Chuyên luận",
        action: "open-article",
        id: a.id
      };
    });
    pushRows("terms", results.terms, (t) => ({
      badge: enS ? "Liushu Lexicon" : "Từ điển Hán tự",
      badgeClass: "badge-gold",
      title: `${t.hanzi} (${t.pinyin})${t.hanViet ? ` · ${t.hanViet}` : ""} — ${enS ? (t.english || t.vietnamese) : t.vietnamese}`,
      sub: `${t.level}${t.liushuType ? ` • ${t.liushuType}` : ""} • ${t.english}`,
      btnLabel: enS ? "Etymology" : "Chiết tự",
      action: "open-term",
      id: t.id
    }));
    pushRows("vocab", results.vocabNotebook, (vn) => ({
      badge: enS ? "Notebook" : "Sổ tay Ngữ cảnh",
      badgeClass: "badge-jade",
      title: `${vn.term}${vn.pinyin ? ` (${vn.pinyin})` : ""} — ${vn.meaning || vn.note || ""}`,
      sub: `${vn.articleTitle || "Custom Entry"} • ${vn.createdAt || ""}`,
      btnLabel: enS ? "Open Notebook" : "Mở Sổ tay",
      action: "open-vocab-from-search",
      id: vn.id
    }));
    pushRows("provinces", results.provinces, (pr) => ({
      badge: enS ? "34 Provinces" : "34 Tỉnh/Thành",
      badgeClass: "badge-jade",
      title: `${enS ? (pr.nameEn || pr.nameVi) : pr.nameVi} (${pr.nameZh}${pr.pinyin ? ` · ${pr.pinyin}` : ""})`,
      sub: `${(pr.identity && pr.identity.capitalCity) || pr.capital || ""} • ${(pr.identity && pr.identity.adminTypeFull) || pr.regionLabel || ""}`,
      btnLabel: enS ? "Province Dossier" : "Hồ sơ Tỉnh thành",
      action: "open-province-detail",
      id: pr.id
    }));
    if (CceSearch && typeof CceSearch.search === "function" && ui.searchQuery.trim()) {
      const deepHits = CceSearch.search(ui.searchQuery, 10).filter((h) => h.type === "province_item");
      pushRows("provinces", deepHits, (dh) => ({
        badge: enS ? "Regional Highlight" : "Đặc sản / Di sản Tỉnh",
        badgeClass: "badge-gold",
        title: enS ? (dh.titleEn || dh.title) : dh.title,
        sub: `${dh.zh ? dh.zh + " · " : ""}${dh.sub || ""}`,
        btnLabel: enS ? "Open Province" : "Mở Tỉnh thành",
        action: "open-province-detail",
        id: dh.id
      }));
    }
    pushRows("artifacts", results.artifacts, (m) => ({
      badge: "Bảo tàng Số",
      badgeClass: "badge-jade",
      title: `${m.nameVi} (${m.nameZh})`,
      sub: `${m.periodLabel} • ${m.collection}`,
      btnLabel: "Xem hiện vật",
      action: "open-artifact",
      id: m.id
    }));
    pushRows("periods", results.periods, (p) => ({
      badge: "Thời kỳ Lịch sử",
      badgeClass: "badge-outline",
      title: `${p.nameVi} (${p.nameZh})`,
      sub: p.span,
      btnLabel: "Mở Lịch sử",
      action: "jump-period",
      id: p.id
    }));
    pushRows("people", results.people, (p) => ({
      badge: "Nhân vật",
      badgeClass: "badge-outline",
      title: p.name,
      sub: `${p.dates} — ${p.role}`,
      btnLabel: p.targetType === "article" ? "Đọc chuyên luận" : "Xem thời kỳ",
      action: p.targetType === "article" ? "open-article" : "jump-period",
      id: p.targetId
    }));
    pushRows("places", results.places, (pl) => ({
      badge: pl.kind === "city" ? "Đô thị" : "Vùng miền",
      badgeClass: "badge-jade",
      title: `${pl.nameVi} (${pl.nameZh})`,
      sub: pl.kind === "city" ? pl.region : pl.provinces,
      btnLabel: "Mở Địa phương",
      action: pl.kind === "city" ? "jump-city" : "select-region",
      id: pl.id
    }));
    pushRows("texts", results.texts, (tx) => ({
      badge: "Kinh điển",
      badgeClass: "badge-gold",
      title: `${tx.titleZh} — ${tx.titleVi}`,
      sub: `${tx.school} • ${tx.era}`,
      btnLabel: "Mở Triết học",
      action: "nav",
      page: "philosophy"
    }));
    pushRows("paintings", results.paintings, (p) => ({
      badge: "Quốc họa",
      badgeClass: "badge-red",
      title: `${p.titleVi} (${p.titleZh}) — ${(p.artist && p.artist.nameVi) || ""}`,
      sub: `${(p.dynasty && p.dynasty.nameVi) || ""} • ${p.material} • ${p.museum}`,
      btnLabel: "Khảo cứu Kiệt tác",
      action: "open-painting-detail",
      id: p.id
    }));
    pushRows("research", results.research, (r) => ({
      badge: "Nguồn Nghiên cứu",
      badgeClass: "badge-outline",
      title: r.title,
      sub: `${r.institution} • ${r.type}`,
      btnLabel: "Mở Thư viện",
      action: "nav",
      page: "library"
    }));

    if (ui.searchQuery && ui.searchQuery.trim() && (cat === "all" || cat === "terms" || cat === "articles")) {
      const seenDeep = new Set(flatRows.map((r) => String(r.title || "")));
      if (CceSearch && typeof CceSearch.search === "function") {
        const deepOther = CceSearch.search(ui.searchQuery, 20).filter((h) => h.type !== "province_item");
        deepOther.forEach((dh) => {
          const ttl = enS ? (dh.titleEn || dh.title) : dh.title;
          if (seenDeep.has(ttl)) return;
          seenDeep.add(ttl);
          const pageMap = { dict: "learning", learning: "learning", traditional: "traditional", business: "business", "sino-vietnam": "sino-vietnam", museum: "museum", explore: "explore", article: "explore", regions: "regions", library: "library" };
          const targetPage = pageMap[dh.type] || "explore";
          const isRealArticle = dh.type === "article" && Articles.some((a) => a.id === dh.id);
          flatRows.push({
            badge: dh.sub ? String(dh.sub).slice(0, 26) : (enS ? "Archive" : "Chuyên mục"),
            badgeClass: dh.type === "business" ? "badge-jade" : (dh.type === "museum" ? "badge-red" : "badge-gold"),
            title: ttl,
            sub: (dh.zh ? dh.zh + " · " : "") + (dh.body ? String(dh.body).slice(0, 95) : ""),
            btnLabel: enS ? "Open Section" : "Mở Chuyên Mục",
            action: isRealArticle ? "open-article" : "nav",
            id: isRealArticle ? dh.id : "",
            page: isRealArticle ? "" : targetPage
          });
        });
      }
      const qv4 = normalizeText(ui.searchQuery);
      const tList = (window.CCE_TRADE_TRILINGUAL_V4 && window.CCE_TRADE_TRILINGUAL_V4.terms) || [];
      tList.filter((t) => normalizeText(`${t.en} ${t.zh} ${t.pinyin} ${t.vi}`).includes(qv4)).slice(0, 6).forEach((t) => {
        flatRows.push({
          badge: "EU–China Logistics",
          badgeClass: "badge-jade",
          title: `${t.en} · ${t.zh} (${t.vi})`,
          sub: `${t.pinyin} · ${t.contextEn || ""}`,
          btnLabel: enS ? "Open Trade Studio" : "Mở Studio Logistics",
          action: "nav",
          page: "business"
        });
      });
      const hskList = (window.CCE_LITERATURE_HSK_V4 && window.CCE_LITERATURE_HSK_V4.hskBriefs) || [];
      hskList.filter((h) => normalizeText(`${h.zh} ${h.pinyin} ${h.hanViet} ${h.vi} ${h.en}`).includes(qv4)).slice(0, 4).forEach((h) => {
        flatRows.push({
          badge: `HSK ${h.hsk}`,
          badgeClass: "badge-gold",
          title: `${h.zh} (${h.pinyin}) — ${h.hanViet}: ${enS ? h.en : h.vi}`,
          sub: `${h.en} · ${h.vi}`,
          btnLabel: enS ? "Open HSK Hub" : "Mở Kho HSK",
          action: "nav",
          page: "explore"
        });
      });
    }

    const totalAllCategories =
      Math.max(
        flatRows.length,
        (results.articles || []).length +
          (results.terms || []).length +
          (results.vocabNotebook || []).length +
          (results.provinces || []).length +
          (results.artifacts || []).length +
          (results.periods || []).length +
          (results.people || []).length +
          (results.places || []).length +
          (results.texts || []).length +
          (results.paintings || []).length +
          (results.research || []).length
      );

    const categoryTabs = [
      { id: "all", label: `${enS ? "All" : "Tất cả"} (${totalAllCategories})` },
      { id: "articles", label: `${enS ? "Essays" : "Bài viết"} (${(results.articles || []).length})` },
      { id: "vocab", label: `${enS ? "Notebook" : "Sổ tay"} (${(results.vocabNotebook || []).length})` },
      { id: "terms", label: `${enS ? "Terms" : "Từ vựng"} (${(results.terms || []).length})` },
      { id: "paintings", label: `${enS ? "Paintings" : "Quốc họa"} (${(results.paintings || []).length})` },
      { id: "provinces", label: `${enS ? "Provinces" : "34 Tỉnh/Thành"} (${(results.provinces || []).length})` },
      { id: "artifacts", label: `${enS ? "Artifacts" : "Hiện vật"} (${(results.artifacts || []).length})` },
      { id: "periods", label: `${enS ? "Dynasties" : "Thời kỳ"} (${(results.periods || []).length})` },
      { id: "people", label: `${enS ? "Figures" : "Nhân vật"} (${(results.people || []).length})` },
      { id: "places", label: `${enS ? "Places" : "Địa danh"} (${(results.places || []).length})` },
      { id: "texts", label: `${enS ? "Classics" : "Kinh điển"} (${(results.texts || []).length})` },
      { id: "research", label: `${enS ? "Library" : "Thư viện"} (${(results.research || []).length})` }
    ];

    const visibleRows = flatRows.slice(0, ui.searchLimit);

    return `
      <div class="filter-bar" style="margin-top:0.85rem;margin-bottom:0.65rem;">
        ${categoryTabs
          .map(
            (t) => `<button type="button" class="filter-pill ${cat === t.id ? "active" : ""}" data-action="search-cat-filter" data-cat="${t.id}">${t.label}</button>`
          )
          .join("")}
        ${(ui.searchPeriodFilter !== "all" || ui.searchRegionFilter !== "all" || ui.searchLevelFilter !== "all" || ui.searchSourceFilter !== "all" || cat !== "all")
          ? `<button type="button" class="btn btn-ghost btn-sm" data-action="clear-search-filters">${ICONS.close} ${escapeHtml(lp.searchClearFilters)}</button>`
          : ""}
      </div>

      <div style="margin-top:0.75rem;">
        ${!ui.searchQuery.trim()
          ? `<div>
              <p style="font-size:0.9rem;margin-bottom:0.6rem;"><strong>${escapeHtml(lp.searchSuggested)}</strong></p>
              <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-bottom:1rem;">
                ${["Confucianism", "儒家", "Nho giáo", "Kongzi", "孔子", "Bắc Kinh", "Thanh Hoa", "Chữ Nôm", "Guanxi"]
                  .map((kw) => `<button type="button" class="filter-pill" data-action="quick-search" data-q="${kw}">${kw}</button>`)
                  .join("")}
              </div>
              ${(state.searchHistory && state.searchHistory.length)
                ? `<div>
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.4rem;">
                      <strong style="font-size:0.84rem;color:var(--text-muted);">${escapeHtml(lp.searchRecent)}</strong>
                      <button type="button" class="btn btn-ghost btn-sm" data-action="clear-search-history">${escapeHtml(lp.searchClearHistory)}</button>
                    </div>
                    <div style="display:flex;flex-wrap:wrap;gap:0.4rem;">
                      ${state.searchHistory.map((h) => `<button type="button" class="filter-pill" data-action="quick-search" data-q="${escapeHtml(h)}">${escapeHtml(h)}</button>`).join("")}
                    </div>
                  </div>`
                : ""}
            </div>`
          : flatRows.length === 0
          ? renderSmartEmptyState({
              query: ui.searchQuery,
              resetAction: "clear-search-filters",
              resetLabel: lp.searchClearFilters,
              scopeLabel: "Tìm kiếm Liên kết Toàn trang",
              targetField: "search",
              suggestions: ["儒家", "Nho giáo", "Thượng Hải", "Vạn Lý Trường Thành", "RCEP"]
            })
          : `
            <div style="font-size:0.84rem;color:var(--text-muted);margin-bottom:0.75rem;">Hiển thị ${visibleRows.length} / ${flatRows.length} kết quả phù hợp.</div>
            ${visibleRows
              .map(
                (row) => `
                  <div class="flashcard-layer" style="margin-bottom:0.5rem;display:flex;justify-content:space-between;align-items:center;gap:0.75rem;">
                    <div>
                      <span class="badge ${row.badgeClass}">${row.badge}</span>
                      <strong style="margin-left:0.35rem;">${escapeHtml(row.title)}</strong>
                      <div style="font-size:0.78rem;color:var(--text-muted);margin-top:0.15rem;">${escapeHtml(row.sub)}</div>
                    </div>
                    <button
                      type="button"
                      class="btn btn-secondary btn-sm"
                      data-action="${row.action}"
                      ${row.id ? `data-id="${row.id}"` : ""}
                      ${row.page ? `data-page="${row.page}"` : ""}
                    >${row.btnLabel}</button>
                  </div>
                `
              )
              .join("")}
            ${flatRows.length > visibleRows.length
              ? `<div style="text-align:center;margin-top:0.85rem;">
                  <button type="button" class="btn btn-secondary btn-sm" data-action="load-more-search">${escapeHtml(lp.searchLoadMore)} (${flatRows.length - visibleRows.length})</button>
                </div>`
              : ""}
          `}
      </div>
    `;
  }

  function renderSearchModal() {
    if (!ui.searchModalOpen) return "";
    const lp = getLangPack();

    return `
      <div class="modal-backdrop open" data-action="close-modal-backdrop">
        <div class="modal-panel" style="max-width:920px;" role="dialog" aria-modal="true" aria-label="${escapeHtml(lp.searchModalTitle)}">
          <button type="button" class="modal-close-btn" data-action="close-search" aria-label="Đóng tìm kiếm">${ICONS.close}</button>
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;padding-right:2.5rem;margin-bottom:0.75rem;">
            <h3 class="card-title" style="margin:0;">${escapeHtml(lp.searchModalTitle)}</h3>
            <button type="button" class="btn btn-secondary btn-sm" data-action="open-local-qa" style="font-size:0.78rem;">
              ${isEnglishUi() ? "Source-Cited Q&amp;A Engine →" : "Hỏi đáp Trích nguồn Tư liệu →"}
            </button>
          </div>
          <input
            type="text"
            id="global-search-input"
            class="form-input"
            value="${escapeHtml(ui.searchQuery)}"
            placeholder="${escapeHtml(lp.searchModalPlaceholder)}"
            data-action="global-search-input"
          />

          <!-- Multi-Facet Search Filters -->
          ${(() => { const enS = isEnglishUi(); return `
          <div class="grid grid-4" style="gap:0.55rem;margin-top:0.85rem;">
            <select class="form-select" style="font-size:0.82rem;" data-action="search-filter-period" aria-label="${enS ? "Filter by historical period" : "Lọc theo thời kỳ"}">
              <option value="all" ${ui.searchPeriodFilter === "all" ? "selected" : ""}>${enS ? "Era: All Periods" : "Thời kỳ: Tất cả"}</option>
              ${History.periods.map((p) => `<option value="${p.id}" ${ui.searchPeriodFilter === p.id ? "selected" : ""}>${escapeHtml(enS ? (p.nameEn || p.nameVi) : p.nameVi)}</option>`).join("")}
            </select>
            <select class="form-select" style="font-size:0.82rem;" data-action="search-filter-region" aria-label="${enS ? "Filter by macro-region" : "Lọc theo vùng miền"}">
              <option value="all" ${ui.searchRegionFilter === "all" ? "selected" : ""}>${enS ? "Region: All Regions" : "Vùng: Tất cả"}</option>
              ${Regions.macroRegions.map((r) => `<option value="${r.id}" ${ui.searchRegionFilter === r.id ? "selected" : ""}>${escapeHtml(enS ? (r.nameEn || r.nameVi) : r.nameVi)}</option>`).join("")}
            </select>
            <select class="form-select" style="font-size:0.82rem;" data-action="search-filter-level" aria-label="${enS ? "Filter by difficulty level" : "Lọc theo trình độ"}">
              <option value="all" ${ui.searchLevelFilter === "all" ? "selected" : ""}>${enS ? "Level: All Levels" : "Trình độ: Tất cả"}</option>
              <option value="Beginner" ${ui.searchLevelFilter === "Beginner" ? "selected" : ""}>Beginner / HSK 1-2</option>
              <option value="Intermediate" ${ui.searchLevelFilter === "Intermediate" ? "selected" : ""}>Intermediate / HSK 3-4</option>
              <option value="Academic" ${ui.searchLevelFilter === "Academic" ? "selected" : ""}>Academic / HSK 5-6+</option>
            </select>
            <select class="form-select" style="font-size:0.82rem;" data-action="search-filter-source" aria-label="${enS ? "Filter by archive source" : "Lọc theo loại nguồn"}">
              <option value="all" ${ui.searchSourceFilter === "all" ? "selected" : ""}>${enS ? "Archive: All Sources" : "Nguồn: Tất cả"}</option>
              <option value="Chính sử" ${ui.searchSourceFilter === "Chính sử" ? "selected" : ""}>${enS ? "Chronicles / Classics" : "Chính sử / Kinh điển"}</option>
              <option value="Museum" ${ui.searchSourceFilter === "Museum" ? "selected" : ""}>${enS ? "Digital Museum" : "Bảo tàng Số"}</option>
              <option value="Quản trị" ${ui.searchSourceFilter === "Quản trị" ? "selected" : ""}>${enS ? "Business / Empirical" : "Kinh doanh / Thực chứng"}</option>
            </select>
          </div>`; })()}

          <div id="global-search-results-slot">
            ${renderGlobalSearchResultsHTML()}
          </div>
        </div>
      </div>
    `;
  }

  // ==========================================================================
  // Master Render & Event Delegation
  // ==========================================================================
  function renderPageContent(pageId) {
    let html = "";
    switch (pageId) {
      case "article": html = renderArticlePage(); break;
      case "museum": html = renderMuseumPage(); break;
      case "paintings": html = renderPaintingsPage(); break;
      case "explore": html = renderExplorePage(); break;
      case "history": html = renderHistoryPage(); break;
      case "philosophy": html = renderPhilosophyPage(); break;
      case "traditional": html = renderTraditionalPage(); break;
      case "regions": html = renderRegionsPage(); break;
      case "sino-vietnam": html = renderSinoVietnamPage(); break;
      case "business": html = renderBusinessPage(); break;
      case "library": html = renderLibraryPage(); break;
      case "learning": html = renderLearningPage(); break;
      case "about": html = renderAboutPage(); break;
      case "legal": html = renderLegalPage(); break;
      case "home":
      default:
        html = renderHomePage();
        break;
    }
    if (window.CCE_V10_DRAWER) {
      html += window.CCE_V10_DRAWER.renderHost(pageId, isEnglishUi(), {
        activeArticleId: ui.activeArticleId,
        articles: Articles,
        getTermById: getTermById
      });
    }
    return html;
  }

  function renderCustomImageModal() {
    if (!ui.customModalImage || !ui.customModalImage.src) return "";
    const enM = isEnglishUi();
    const img = ui.customModalImage;
    return `
      <div class="lightbox-backdrop" data-action="close-custom-image" role="dialog" aria-modal="true" aria-label="${enM ? "Zoom Archival Figure" : "Phóng to tư liệu học thuật"}" style="background:#0F1012;">
        <div class="lightbox-stage" onclick="event.stopPropagation()" style="max-width:1180px;width:95%;padding:1.25rem;background:#1A1B1E;color:#F2EFE9;border-radius:0px;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;margin-bottom:0.85rem;flex-wrap:wrap;">
            <div>
              <strong style="font-family:var(--font-editorial);font-size:1.2rem;color:#F2EFE9;">${escapeHtml(img.caption || (enM ? "Archival Plate &amp; Figure" : "Tư liệu Hình ảnh &amp; Biểu đồ Học thuật"))}</strong>
            </div>
            <button type="button" class="lightbox-tool-btn lightbox-tool-btn-primary" data-action="close-custom-image">${ICONS.close} ${enM ? "Close Zoom" : "Đóng phóng to"}</button>
          </div>
          <div style="background:#0F1012;border-radius:0px;padding:0.5rem;max-height:76vh;overflow:auto;text-align:center;border:1px solid rgba(255,255,255,0.14);">
            <img decoding="async"  src="${escapeHtml(img.src)}" alt="${escapeHtml(img.caption || "")}" style="max-width:100%;max-height:72vh;object-fit:contain;display:inline-block;" />
          </div>
          ${window.CCE_V3_MODS ? (() => { const pv = window.CCE_V3_MODS.getImageProvenance(img.src, img.credit, enM); return `<div style="margin-top:0.75rem;padding:0.55rem 0.8rem;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.14);display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;font-size:0.78rem;"><span><span class="badge badge-gold" style="margin-right:0.4rem;">${escapeHtml(pv.badgeLabel)}</span><strong>${escapeHtml(pv.sourceLabel)}</strong></span><span style="color:#D8D2C5;">${escapeHtml(pv.license)}${pv.note ? ` · ${escapeHtml(pv.note)}` : ""}</span></div>`; })() : ""}
          ${(img.dimensions || img.material || img.museum) ? `
            <div style="margin-top:0.85rem;">
              ${renderArtworkViewerMeta({
                title: img.caption || "",
                dimensions: img.dimensions || "",
                material: img.material || "",
                museum: img.museum || "",
                credit: ""
              })}
            </div>
          ` : ""}
        </div>
      </div>
    `;
  }

  function renderUpdatesModal() {
    if (!ui.updatesModalOpen) return "";
    const enU = isEnglishUi();
    const state = Store.getState();
    const sub = state.emailSubscription || {};
    const tab = ui.updatesTab === "changelog" ? "changelog" : "reader";
    const hotPicks = (WeeklyUpdates && WeeklyUpdates.hotPicks) || [];
    const logs = [
      ...((state.changelogPublishedLog || []).map((c) => ({
        version: c.version || "v2.0.0",
        date: c.publishedAt || "",
        tagVi: "[Nhật ký Xuất bản]",
        tagEn: "[Release Dispatch]",
        titleVi: c.title || "Bản tin Đã ghi nhận",
        titleEn: c.title || "Logged Dispatch",
        itemsVi: [c.note || "Đã ghi nhận bản cập nhật mới."],
        itemsEn: [c.note || "Logged release update."]
      }))),
      ...((WeeklyUpdates && WeeklyUpdates.siteChangelog) || [])
    ];

    return `
      <div class="modal-backdrop open" data-action="close-updates-backdrop" style="z-index:960;">
        <div class="modal-panel" style="max-width:980px;max-height:92vh;overflow-y:auto;" role="dialog" aria-modal="true" aria-label="${enU ? "Weekly Hot Picks & Website Changelog" : "Tiêu điểm Bài Đọc Nóng & Nhật ký Cập nhật Website"}">
          <button type="button" class="modal-close-btn" data-action="close-updates-modal" aria-label="${enU ? "Close updates" : "Đóng bảng cập nhật"}">${ICONS.close}</button>
          <div class="editorial-kicker">${enU ? "READER DIGEST & PLATFORM CHANGELOG" : "BẢN TIN ĐỘC GIẢ &amp; NHẬT KÝ CẬP NHẬT WEBSITE"}</div>
          <h3 style="font-family:var(--font-editorial);font-size:1.45rem;margin:0.15rem 0 0.75rem;">
            ${enU ? "Weekly Featured Essays, Email Subscription & Site Updates" : "Tiêu điểm Bài Đọc Nóng, Đăng ký Bản tin &amp; Nhật ký Nâng cấp Web"}
          </h3>

          <div class="tabs-bar" style="margin-bottom:1.1rem;">
            <button type="button" class="tab-btn ${tab === "reader" ? "active" : ""}" data-action="set-updates-tab" data-tab="reader">1. ${enU ? "Reader Subscribe & Hot Picks" : "Đăng ký Email &amp; Bài Nóng"}</button>
            <button type="button" class="tab-btn ${tab === "changelog" ? "active" : ""}" data-action="set-updates-tab" data-tab="changelog">2. ${enU ? "Website Changelog" : "Nhật ký Nâng cấp Web"}</button>
          </div>

          ${tab === "reader" ? `
            <div class="updates-hot-grid" style="margin-bottom:1.25rem;">
              ${hotPicks.map((p) => `
                <article class="updates-card">
                  <div>
                    <div class="updates-tag">${escapeHtml(enU ? p.badgeEn : p.badgeVi)} · ${escapeHtml(p.date)}</div>
                    <h4 style="margin:0.3rem 0;font-size:0.98rem;">${escapeHtml(enU ? p.titleEn : p.titleVi)}</h4>
                    <p style="font-size:0.83rem;color:var(--text-secondary);margin:0;">${escapeHtml(enU ? p.summaryEn : p.summaryVi)}</p>
                  </div>
                  <div>
                    ${p.kind === "article"
                      ? `<button type="button" class="btn btn-primary btn-sm" data-action="open-article-from-updates" data-id="${escapeHtml(p.targetId)}">${enU ? "Open Essay →" : "Đọc Chuyên luận →"}</button>`
                      : `<button type="button" class="btn btn-secondary btn-sm" data-action="set-updates-tab" data-tab="changelog">${enU ? "View Release Notes →" : "Xem Nhật ký Nâng cấp →"}</button>`}
                  </div>
                </article>
              `).join("")}
            </div>

            <div class="card" style="background:var(--bg-paper);border-color:var(--border-gold);">
              <h4 style="margin:0 0 0.35rem;">${enU ? "Opt-In Reader Updates (Strictly Zero Spam)" : "Đăng ký Nhận Bản tin Chuyên luận &amp; Nâng cấp Website (Tự nguyện Opt-In)"}</h4>
              <p style="font-size:0.84rem;color:var(--text-secondary);margin:0 0 0.85rem;">
                ${enU
                  ? "Choose the categories you follow: highlighted monographs, new 3D architectural dissections, or archive updates. Your preference is saved locally with zero tracking."
                  : "Chọn chuyên mục bạn muốn theo dõi: bài viết nóng, chuyên luận văn hiến mới hoặc các nâng cấp tính năng tra cứu trên website."}
              </p>
              ${sub.subscribed ? `
                <div class="epistemic-box" style="margin-bottom:0.85rem;">
                  <strong>${enU ? "Active Subscription:" : "Đang bật nhận thông báo:"}</strong> <code>${escapeHtml(sub.email)}</code> · ${escapeHtml(sub.frequency || "weekly")} · [${escapeHtml((sub.topics || []).join(", "))}]
                  <button type="button" class="btn btn-ghost btn-sm" style="margin-left:0.6rem;color:var(--imperial-red);" data-action="unsubscribe-email">${enU ? "Unsubscribe" : "Hủy nhận tin"}</button>
                </div>
              ` : ""}
              <form data-action="subscribe-email-form" class="grid grid-2" style="gap:0.75rem;">
                <div>
                  <label style="font-size:0.8rem;font-weight:700;">${enU ? "Email Address *" : "Địa chỉ Email của bạn *"}</label>
                  <input required type="email" name="email" class="form-input" value="${escapeHtml(sub.email || "")}" placeholder="reader@example.com" />
                </div>
                <div>
                  <label style="font-size:0.8rem;font-weight:700;">${enU ? "Digest Frequency" : "Tần suất gửi"}</label>
                  <select name="frequency" class="form-select">
                    <option value="weekly" ${(sub.frequency || "weekly") === "weekly" ? "selected" : ""}>${enU ? "Weekly Sunday Digest" : "Tổng hợp Cuối tuần (Weekly)"}</option>
                    <option value="biweekly" ${sub.frequency === "biweekly" ? "selected" : ""}>${enU ? "Biweekly Edition" : "Hai tuần một lần (Biweekly)"}</option>
                    <option value="major-only" ${sub.frequency === "major-only" ? "selected" : ""}>${enU ? "Major Upgrades & 3D Releases Only" : "Chỉ khi có Chuyên luận 3D / Nâng cấp Lớn"}</option>
                  </select>
                </div>
                <div style="grid-column:1 / -1;display:flex;gap:1rem;flex-wrap:wrap;font-size:0.84rem;">
                  <label><input type="checkbox" name="topics" value="hot" ${(sub.topics || ["hot", "articles", "updates"]).includes("hot") ? "checked" : ""} /> ${enU ? "Hot Essays & Reader Picks" : "Bài đọc Nóng &amp; Pháp lý"}</label>
                  <label><input type="checkbox" name="topics" value="articles" ${(sub.topics || ["hot", "articles", "updates"]).includes("articles") ? "checked" : ""} /> ${enU ? "New Monographs & 3D Studies" : "Chuyên luận Mới &amp; Mô hình 3D"}</label>
                  <label><input type="checkbox" name="topics" value="updates" ${(sub.topics || ["hot", "articles", "updates"]).includes("updates") ? "checked" : ""} /> ${enU ? "Website Features & Changelog" : "Nâng cấp Tính năng &amp; Dữ liệu Web"}</label>
                </div>
                <div style="grid-column:1 / -1;">
                  <button type="submit" class="btn btn-primary btn-sm">${enU ? "Save Notification Preference" : "Lưu Tùy chọn Nhận Bản tin"}</button>
                </div>
              </form>
            </div>
          ` : `
            <div style="display:flex;flex-direction:column;gap:0.9rem;">
              ${logs.map((entry) => `
                <article class="card" style="border-left:3.5px solid var(--accent-cinnabar);">
                  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
                    <span class="badge badge-red">${escapeHtml(entry.version)} · ${escapeHtml(enU ? entry.tagEn : entry.tagVi)}</span>
                    <span class="text-muted" style="font-size:0.8rem;">${escapeHtml(entry.date)}</span>
                  </div>
                  <h4 style="margin:0.45rem 0;">${escapeHtml(enU ? entry.titleEn : entry.titleVi)}</h4>
                  <ul style="margin:0;padding-left:1.15rem;font-size:0.86rem;color:var(--text-secondary);">
                    ${(enU ? entry.itemsEn : entry.itemsVi).map((it) => `<li style="margin-bottom:0.3rem;">${escapeHtml(it)}</li>`).join("")}
                  </ul>
                </article>
              `).join("")}
            </div>
          `}
        </div>
      </div>
    `;
  }

  function renderVocabSelectionPopover() {
    const pop = ui.vocabSelectionPopup;
    if (!pop) return "";
    const enP = isEnglishUi();
    const leftPx = Math.max(12, Math.min(window.innerWidth - 360, Number(pop.x || 24)));
    const topPx = Math.max(68, Math.min(window.innerHeight - 175, Number(pop.y || 140)));
    return `
      <div class="vocab-capture-popover" style="left:${leftPx}px;top:${topPx}px;" role="dialog" aria-label="${enP ? "Save phrase to Vocabulary Notebook" : "Lưu từ vào Sổ tay"}">
        <form data-action="save-selection-vocab-form" style="display:flex;flex-direction:column;gap:0.42rem;width:100%;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;">
            <strong style="font-size:0.74rem;letter-spacing:0.04em;text-transform:uppercase;color:#D7BA81;">${enP ? "Save Term & Reading Note" : "Lưu Từ / Cụm từ &amp; Ghi chú"}</strong>
            <button type="button" data-action="dismiss-vocab-popover" style="padding:0.12rem 0.45rem;background:transparent;border:none;color:#FAF7F2;" aria-label="Close">✕</button>
          </div>
          <input required name="term" class="form-input" value="${escapeHtml(pop.term || "")}" style="font-size:0.84rem;font-weight:700;padding:0.32rem 0.5rem;background:#26231F;color:#FAF7F2;border-color:rgba(215,186,129,0.5);" placeholder="${enP ? "Word or legal/cultural phrase..." : "Từ, cụm từ hoặc điều khoản..."}" />
          <input name="note" class="form-input" style="font-size:0.78rem;padding:0.32rem 0.5rem;background:#26231F;color:#FAF7F2;border-color:rgba(215,186,129,0.4);" placeholder="${enP ? "Personal note / legal meaning (optional)..." : "Ghi chú riêng / nghĩa chuyên luật (tùy chọn)..."}" />
          <div style="display:flex;gap:0.45rem;align-items:center;justify-content:space-between;">
            <button type="submit">${enP ? "+ Save to Notebook" : "+ Lưu vào Sổ tay"}</button>
            <span style="font-size:0.69rem;color:#C8C0B4;">${pop.sourceSentence ? (enP ? "Sentence context linked" : "Đã kèm câu ngữ cảnh") : (enP ? "Instant notebook entry" : "Lưu trực tiếp vào Sổ tay")}</span>
          </div>
        </form>
      </div>
    `;
  }

  let lastRenderedPageKey = null;

  function hasAnyOpenModalState() {
    return Boolean(
      ui.activeArtifactId ||
      ui.activePaintingId ||
      ui.paintingCompareOpen ||
      ui.paintingZoomOpen ||
      ui.activeProvinceId ||
      ui.provinceCompareOpen ||
      ui.activeTermId ||
      ui.searchModalOpen ||
      ui.updatesModalOpen ||
      ui.lightboxOpen ||
      ui.activeEditorialImageId ||
      (ui.customModalImage && ui.customModalImage.src) ||
      (window.CCE_STROKE_PAD && window.CCE_STROKE_PAD.isOpen()) ||
      (window.CCE_V4_UX && window.CCE_V4_UX.isCollectionOpen()) ||
      document.querySelector("#cce-modal-root .modal-backdrop.open")
    );
  }

  function renderAllModalsHTML() {
    return `
      ${renderArtifactModal()}
      ${renderPaintingDetailModal()}
      ${renderPaintingCompareModal()}
      ${renderPaintingZoomModal()}
      ${renderProvinceDetailModal()}
      ${renderProvinceCompareModal()}
      ${renderTermModal()}
      ${renderSearchModal()}
      ${renderUpdatesModal()}
      ${renderLightboxModal()}
      ${renderEditorialLightboxModal()}
      ${renderCustomImageModal()}
      ${window.CCE_LABS_EXT ? window.CCE_LABS_EXT.renderInlineGlossModal(isEnglishUi()) : ""}
      ${renderVocabSelectionPopover()}
      ${window.CCE_STROKE_PAD ? window.CCE_STROKE_PAD.renderModal(isEnglishUi()) : ""}
      ${window.CCE_V4_UX ? window.CCE_V4_UX.renderCollectionModalHTML(isEnglishUi()) + window.CCE_V4_UX.renderQuickRefFloating(isEnglishUi()) : ""}
    `;
  }

  function syncModalPostUpdate(prevModalScroll, activeElId, selStart) {
    const modalRoot = document.getElementById("cce-modal-root");
    document.body.style.overflow = hasAnyOpenModalState() ? "hidden" : "";
    if (prevModalScroll > 0 && modalRoot) {
      const nextModalEl = modalRoot.querySelector(".modal-panel, .painting-detail-modal-stage, .lightbox-stage");
      if (nextModalEl) nextModalEl.scrollTop = prevModalScroll;
    }
    if (window.CCE_STROKE_PAD && window.CCE_STROKE_PAD.bindIfOpen) {
      window.CCE_STROKE_PAD.bindIfOpen();
    }
    if (ui.paintingZoomOpen) {
      const zCanvas = document.getElementById("painting-zoom-canvas");
      const activePin = document.getElementById("active-painting-hotspot-pin");
      if (zCanvas && activePin) {
        const leftPct = parseFloat(activePin.style.left || "50") / 100;
        const topPct = parseFloat(activePin.style.top || "50") / 100;
        const targetX = Math.max(0, zCanvas.scrollWidth * leftPct - zCanvas.clientWidth / 2);
        const targetY = Math.max(0, zCanvas.scrollHeight * topPct - zCanvas.clientHeight / 2);
        zCanvas.scrollTo({ left: targetX, top: targetY, behavior: "smooth" });
      }
    }
    if (activeElId) {
      const el = document.getElementById(activeElId);
      if (el) {
        try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        if (selStart !== null && typeof el.setSelectionRange === "function") {
          try { el.setSelectionRange(selStart, selStart); } catch {}
        }
      }
    }
    if (typeof updateDocumentSeoMeta === "function") {
      updateDocumentSeoMeta();
    }
    if (window.CCE_V3_W5 && typeof window.CCE_V3_W5.onModalSync === "function") {
      window.CCE_V3_W5.onModalSync(hasAnyOpenModalState());
    }
  }

  function renderModalsOnly() {
    const modalRoot = document.getElementById("cce-modal-root");
    if (!modalRoot) { render(); return; }
    const activeElId = document.activeElement ? document.activeElement.id : null;
    const selStart = document.activeElement && typeof document.activeElement.selectionStart === "number" ? document.activeElement.selectionStart : null;
    const openModalEl = modalRoot.querySelector(".modal-panel, .painting-detail-modal-stage, .lightbox-stage");
    const prevModalScroll = openModalEl ? openModalEl.scrollTop : 0;
    modalRoot.innerHTML = renderAllModalsHTML();
    syncModalPostUpdate(prevModalScroll, activeElId, selStart);
  }

  function patchHeaderOnly() {
    const headerRoot = document.getElementById("cce-header-root");
    if (!headerRoot) { render(); return; }
    headerRoot.innerHTML = renderHeader();
  }

  function patchNavOnly() {
    const navRoot = document.getElementById("cce-nav-root");
    if (!navRoot) { render(); return; }
    navRoot.innerHTML = `${renderMobileNavDrawer()}${renderMobileBottomNav(Store.getState().activePage)}`;
  }

  function patchHeaderThemeOnly() {
    const isDark = Store.getState().theme === "dark";
    const lp = getLangPack();
    document.querySelectorAll('[data-action="toggle-theme"]').forEach((btn) => {
      btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
      btn.title = isDark ? lp.themeLight : lp.themeDark;
    });
  }

  function patchMainOnly() {
    const mainEl = document.getElementById("main-content");
    if (!mainEl) { render(); return; }
    const state = Store.getState();
    const prevScrollY = window.scrollY || window.pageYOffset || 0;
    const activeElId = document.activeElement ? document.activeElement.id : null;
    const selStart = document.activeElement && typeof document.activeElement.selectionStart === "number" ? document.activeElement.selectionStart : null;
    mainEl.innerHTML = renderPageContent(state.activePage);
    if (prevScrollY > 0 && lastRenderedPageKey === state.activePage) {
      window.scrollTo(0, prevScrollY);
    }
    if (activeElId) {
      const el = document.getElementById(activeElId);
      if (el) {
        try { el.focus({ preventScroll: true }); } catch { el.focus(); }
        if (selStart !== null && typeof el.setSelectionRange === "function") {
          try { el.setSelectionRange(selStart, selStart); } catch {}
        }
      }
    }
    const _fc3dMain = getForbiddenCity3D();
    if (_fc3dMain && typeof _fc3dMain.initMountedCanvasIfAny === "function") {
      _fc3dMain.initMountedCanvasIfAny();
    }
    if (window.CCE_ARTIFACTS_3D && typeof window.CCE_ARTIFACTS_3D.initMountedCanvasIfAny === "function") {
      window.CCE_ARTIFACTS_3D.initMountedCanvasIfAny();
    }
    if (window.CCE_3D_HUB && typeof window.CCE_3D_HUB.initAllMounted === "function") {
      window.CCE_3D_HUB.initAllMounted();
    }
    if (window.CCE_GALLERY_V3 && typeof window.CCE_GALLERY_V3.afterRender === "function") {
      window.CCE_GALLERY_V3.afterRender();
    }
    const _has3dMain = (window.CCE_3D_HUB && window.CCE_3D_HUB.hasAny3dCanvasInDom()) ||
      Boolean(document.querySelector("[data-fc3d-mount]") || document.getElementById("cce-artifact-3d-canvas") || document.getElementById("cce-china-3d-canvas"));
    if (!_has3dMain && window.CCE_WEBGL_MGR) {
      window.CCE_WEBGL_MGR.disposeAll();
    }
    if (window.CCE_V9_LOADER && typeof window.CCE_V9_LOADER.afterRender === "function") {
      window.CCE_V9_LOADER.afterRender(state.activePage, isEnglishUi());
    }
    if (window.CCE_V10_DISCOVERY && typeof window.CCE_V10_DISCOVERY.syncRightEdgeDock === "function") {
      window.CCE_V10_DISCOVERY.syncRightEdgeDock(isEnglishUi());
    }
    if (window.CCE_V11_HUB && typeof window.CCE_V11_HUB.syncScrollAndObservers === "function") {
      window.CCE_V11_HUB.syncScrollAndObservers();
    }
  }

  function patchSlot(slotId, rendererFn) {
    const slot = document.getElementById(slotId);
    if (!slot) { patchMainOnly(); return; }
    slot.innerHTML = rendererFn();
  }

  const _inputTimers = new Map();
  function scheduleSlotInput(key, fn, delayMs = 95) {
    if (_inputTimers.has(key)) clearTimeout(_inputTimers.get(key));
    _inputTimers.set(key, setTimeout(() => {
      _inputTimers.delete(key);
      fn();
    }, delayMs));
  }

  function syncBookmarkButtonsInDom() {
    const enM = isEnglishUi();
    document.querySelectorAll('[data-action="toggle-bookmark"]').forEach((btn) => {
      const bType = btn.getAttribute("data-type");
      const bId = btn.getAttribute("data-id");
      if (!bType || !bId) return;
      const saved = Store.isBookmarked(bType, bId);
      if (bType === "article") {
        btn.innerHTML = `${ICONS.bookmark} ${saved ? (enM ? "Saved" : "Đã lưu") : (enM ? "Save" : "Lưu")}`;
      } else if (bType === "province") {
        btn.classList.toggle("btn-jade", saved);
        btn.classList.toggle("btn-secondary", !saved);
        btn.textContent = enM ? (saved ? "Saved" : "Save") : (saved ? "Đã lưu" : "Lưu");
      } else if (bType === "city") {
        btn.textContent = saved ? (enM ? "Saved City" : "Đã lưu thành phố") : (enM ? "Save City" : "Lưu thành phố");
      }
    });
  }

  function render() {
    const app = document.getElementById("app");
    if (!app) return;
    const state = Store.getState();

    const samePageReRender = lastRenderedPageKey === state.activePage;
    const prevScrollY = window.scrollY || window.pageYOffset || 0;
    lastRenderedPageKey = state.activePage;

    const activeElId = document.activeElement ? document.activeElement.id : null;
    const selStart = document.activeElement && typeof document.activeElement.selectionStart === "number" ? document.activeElement.selectionStart : null;
    const openModalEl = app.querySelector(".modal-panel, .painting-detail-modal-stage, .lightbox-stage");
    const prevModalScroll = openModalEl ? openModalEl.scrollTop : 0;

    app.innerHTML = `
      <div id="cce-header-root">${renderHeader()}</div>
      <main id="main-content">
        ${renderPageContent(state.activePage)}
      </main>
      <div id="cce-footer-root">${renderFooter()}</div>
      <div id="cce-nav-root">${renderMobileNavDrawer()}${renderMobileBottomNav(state.activePage)}</div>
      <div id="cce-modal-root">${renderAllModalsHTML()}</div>
    `;

    if (typeof window.CCE_DEDUPE_IMAGES === "function") {
      window.CCE_DEDUPE_IMAGES(document.getElementById("main-content"));
    }

    document.body.style.overflow = hasAnyOpenModalState() ? "hidden" : "";

    if (samePageReRender && prevScrollY > 0) {
      window.scrollTo(0, prevScrollY);
    }

    syncModalPostUpdate(prevModalScroll, activeElId, selStart);

    const _fc3dRender = getForbiddenCity3D();
    if (_fc3dRender && typeof _fc3dRender.initMountedCanvasIfAny === "function") {
      _fc3dRender.initMountedCanvasIfAny();
    }
    if (window.CCE_ARTIFACTS_3D && typeof window.CCE_ARTIFACTS_3D.initMountedCanvasIfAny === "function") {
      window.CCE_ARTIFACTS_3D.initMountedCanvasIfAny();
      window.CCE_ARTIFACTS_3D.syncTiantanLang(state.uiLang);
    }
    if (window.CCE_3D_HUB && typeof window.CCE_3D_HUB.initAllMounted === "function") {
      window.CCE_3D_HUB.initAllMounted();
    }
    if (window.CCE_GALLERY_V3 && typeof window.CCE_GALLERY_V3.afterRender === "function") {
      window.CCE_GALLERY_V3.afterRender();
    }
    const _has3dRender = (window.CCE_3D_HUB && window.CCE_3D_HUB.hasAny3dCanvasInDom()) ||
      Boolean(document.querySelector("[data-fc3d-mount]") || document.getElementById("cce-artifact-3d-canvas") || document.getElementById("cce-china-3d-canvas"));
    if (!_has3dRender && window.CCE_WEBGL_MGR) {
      window.CCE_WEBGL_MGR.disposeAll();
    }
    if (window.CCE_V9_LOADER && typeof window.CCE_V9_LOADER.afterRender === "function") {
      window.CCE_V9_LOADER.afterRender(state.activePage, isEnglishUi());
    }
    if (window.CCE_V10_DISCOVERY && typeof window.CCE_V10_DISCOVERY.syncRightEdgeDock === "function") {
      window.CCE_V10_DISCOVERY.syncRightEdgeDock(isEnglishUi());
    }
    if (window.CCE_V11_HUB && typeof window.CCE_V11_HUB.syncScrollAndObservers === "function") {
      window.CCE_V11_HUB.syncScrollAndObservers();
    }
  }

  document.addEventListener("click", (e) => {
    // Dismiss Hero autocomplete if clicking outside hero-search-wrap
    if (ui.heroAutocompleteOpen && !e.target.closest(".hero-search-wrap")) {
      ui.heroAutocompleteOpen = false;
      const slot = document.getElementById("hero-autocomplete-slot");
      if (slot) slot.innerHTML = "";
      else patchMainOnly();
    }

    if (ui.vocabSelectionPopup && !e.target.closest(".vocab-capture-popover") && !e.target.closest("[data-action='open-vocab-capture-manual']")) {
      ui.vocabSelectionPopup = null;
      renderModalsOnly();
    }

    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.getAttribute("data-action");
    const id = target.getAttribute("data-id");

    const _fc3dClick = getForbiddenCity3D();
    if (action && action.startsWith("fc3d-") && _fc3dClick && typeof _fc3dClick.handleAction === "function") {
      if (_fc3dClick.handleAction(action, target, Store, showToast, render)) return;
    }

    if (action === "map-zoom-in" || action === "map-zoom-out" || action === "map-zoom-reset") {
      const stage = target.closest("[data-map-stage]");
      const svg = stage ? stage.querySelector("[data-map-svg]") : null;
      if (svg) {
        let cur = parseFloat(svg.getAttribute("data-zoom") || "1") || 1;
        cur = action === "map-zoom-reset" ? 1 : (action === "map-zoom-in" ? Math.min(2.4, cur + 0.35) : Math.max(1, cur - 0.35));
        svg.setAttribute("data-zoom", String(cur));
        svg.style.transform = cur > 1 ? `scale(${cur.toFixed(2)})` : "";
      }
      return;
    }

    if (window.CCE_LABS_EXT && typeof window.CCE_LABS_EXT.handleAction === "function") {
      if (window.CCE_LABS_EXT.handleAction(action, target)) {
        render();
        return;
      }
      if (action === "lab-play-motif") return;
    }

    switch (action) {
      case "open-local-qa":
        ui.searchModalOpen = false;
        renderModalsOnly();
        break;

      case "auth-signin-google": {
        e.preventDefault();
        ui.mobileNavOpen = false;
        Auth.signInWithGoogle().then((res) => {
          if (res && res.ok) {
            showToast(res.mode === "local_demo"
              ? "Đã mở khóa Toàn văn (Chế độ Kiểm thử Localhost)"
              : "Đang mở trang đăng nhập Google...");
            render();
          } else if (res && (res.code === "identity_disabled" || res.code === "provider_not_enabled")) {
            showToast("Hãy bật Enable Identity → Google Provider trong Netlify Dashboard để đăng nhập trực tuyến.");
          } else if (res && res.error) {
            showToast(`Lỗi đăng nhập Google: ${res.error}`);
          }
        });
        break;
      }

      case "auth-signout": {
        e.preventDefault();
        ui.mobileNavOpen = false;
        Auth.signOut().then(() => {
          showToast("Đã đăng xuất tài khoản Google.");
          render();
        });
        break;
      }

      case "navigate":
      case "nav": {
        e.preventDefault();
        if (CceRouter) CceRouter.saveScroll();
        const nextPage = target.getAttribute("data-page") || "home";
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        ui.activeMegaMenu = null;
        Store.setPage(nextPage);
        syncHashFromState(nextPage);
        window.scrollTo({ top: 0, behavior: "instant" });
        hydratePageBundles(nextPage, Store.getState().uiLang);
        break;
      }

      case "nav-learning": {
        if (CceRouter) CceRouter.saveScroll();
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        ui.activeMegaMenu = null;
        const lTab = target.getAttribute("data-tab") || "dashboard";
        ui.learningTab = lTab;
        const lSubMap = { dashboard: "dashboard", kmap: "kmap", dictionary: "lexicon", survival: "lexicon", flashcards: "notebook", quiz: "quiz", journal: "academic" };
        if (lTab === "survival") ui.lexiconSubMode = "survival";
        else if (lTab === "dictionary") ui.lexiconSubMode = "dict";
        syncHashFromState("learning");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("learning", lSubMap[lTab] || "dashboard", { rerender: false, scroll: false });
        if (Store.getState().activePage === "learning") patchMainOnly();
        else Store.setPage("learning");
        window.scrollTo({ top: 0, behavior: "instant" });
        hydratePageBundles("learning", Store.getState().uiLang);
        break;
      }

      case "nav-traditional": {
        if (CceRouter) CceRouter.saveScroll();
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        ui.activeMegaMenu = null;
        const tTab = target.getAttribute("data-tab") || "customs";
        ui.traditionalTab = tTab;
        const tSubMap = { metaphysics: "cosmology", customs: "customs", arts: "stage", contemporary: "contemporary" };
        syncHashFromState("traditional");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("traditional", tSubMap[tTab] || "customs", { rerender: false, scroll: false });
        if (Store.getState().activePage === "traditional") patchMainOnly();
        else Store.setPage("traditional");
        window.scrollTo({ top: 0, behavior: "instant" });
        hydratePageBundles("traditional", Store.getState().uiLang);
        break;
      }

      case "toggle-mobile-nav":
        ui.mobileNavOpen = !ui.mobileNavOpen;
        patchNavOnly();
        break;

      case "close-mobile-nav":
        if (e.target === target) {
          ui.mobileNavOpen = false;
          patchNavOnly();
        }
        break;

      case "toggle-theme":
        Store.toggleTheme();
        break;

      case "toggle-script":
        Store.toggleScriptMode();
        showToast(Store.getState().scriptMode === "both" ? "Đang hiển thị Giản thể + Phồn thể" : "Đang hiển thị chữ Giản thể");
        break;

      case "toggle-hero-artwork":
        ui.heroArtworkMode = ui.heroArtworkMode === "svg-schematic" ? "ink-painting" : "svg-schematic";
        render();
        break;

      case "cycle-daily": {
        const dir = Number(target.getAttribute("data-dir") || 1);
        const len = LearningResearch.dailyDiscoveries.length;
        ui.dailyIdx = (ui.dailyIdx + dir + len) % len;
        render();
        break;
      }

      case "open-search":
        ui.searchModalOpen = true;
        ui.mobileNavOpen = false;
        renderModalsOnly();
        setTimeout(() => {
          const inp = document.getElementById("global-search-input");
          if (inp) inp.focus();
        }, 20);
        break;

      case "close-search":
        ui.searchModalOpen = false;
        renderModalsOnly();
        break;

      case "quick-search": {
        const q = target.getAttribute("data-q") || "";
        ui.searchQuery = q;
        ui.searchLimit = 18;
        ui.searchModalOpen = true;
        ui.heroAutocompleteOpen = false;
        Store.addSearchHistory(q);
        renderModalsOnly();
        break;
      }

      case "search-cat-filter":
        ui.searchCategoryFilter = target.getAttribute("data-cat") || "all";
        ui.searchLimit = 18;
        renderModalsOnly();
        break;

      case "clear-search-filters":
        ui.searchCategoryFilter = "all";
        ui.searchPeriodFilter = "all";
        ui.searchRegionFilter = "all";
        ui.searchLevelFilter = "all";
        ui.searchSourceFilter = "all";
        ui.searchLimit = 18;
        renderModalsOnly();
        break;

      case "clear-search-history":
        Store.clearSearchHistory();
        break;

      case "load-more-search":
        ui.searchLimit += 18;
        patchSlot("global-search-results-slot", renderGlobalSearchResultsHTML);
        break;

      case "close-modal-backdrop":
        if (e.target === target) {
          if (ui.lightboxOpen) ui.lightboxOpen = false;
          else if (ui.activeTermId) ui.activeTermId = null;
          else if (ui.activeArtifactId) {
            ui.activeArtifactId = null;
            syncHashFromState(Store.getState().activePage || "museum");
          } else ui.searchModalOpen = false;
          renderModalsOnly();
        }
        break;

      case "filter-explore":
        ui.exploreCategory = target.getAttribute("data-cat");
        patchMainOnly();
        break;

      case "filter-museum-cat":
        ui.museumCategory = target.getAttribute("data-cat");
        patchMainOnly();
        break;

      case "set-museum-view":
        ui.museumViewMode = target.getAttribute("data-mode");
        patchMainOnly();
        break;

      case "clear-museum-filters":
        ui.museumCategory = "all";
        ui.museumPeriodFilter = "all";
        ui.museumQuery = "";
        patchMainOnly();
        break;

      case "open-artifact":
        ui.activeArtifactId = id;
        ui.activeHotspotIdx = 0;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        if (ui.activeMegaMenu) { ui.activeMegaMenu = null; patchHeaderOnly(); }
        syncHashFromState(`artifact=${id}`);
        if (Lazy && !Museum.artifacts.some((m) => m && m.id === id)) {
          Lazy.ensureMany(["museum-classics-v3-pack", "v104-museum-pack"]).then(() => {
            if (window.CCE_V104_BRIDGE && typeof window.CCE_V104_BRIDGE.syncAll === "function") window.CCE_V104_BRIDGE.syncAll();
            renderModalsOnly();
          });
        }
        renderModalsOnly();
        break;

      case "close-artifact":
        ui.activeArtifactId = null;
        ui.activeHotspotIdx = 0;
        ui.lightboxOpen = false;
        syncHashFromState(Store.getState().activePage || "museum");
        renderModalsOnly();
        break;

      case "zoom-artifact":
        ui.lightboxOpen = true;
        renderModalsOnly();
        break;

      case "open-painting":
      case "open-painting-detail":
        ui.activePaintingId = id;
        ui.activeHotspotIdx = 0;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        ui.paintingZoomScale = 1;
        if (ui.activeMegaMenu) { ui.activeMegaMenu = null; patchHeaderOnly(); }
        syncHashFromState(`painting=${id}`);
        if (Lazy && (!Paintings.masterpieces || !Paintings.masterpieces.some((p) => p && p.id === id) || !window.CCE_QUOCHOA_72_DEEP_DOSSIERS || !Object.keys(window.CCE_QUOCHOA_72_DEEP_DOSSIERS).length)) {
          Lazy.ensureMany(["paintings-pack", "v104-paintings-pack"]).then(() => {
            if (window.CCE_V104_BRIDGE && typeof window.CCE_V104_BRIDGE.syncAll === "function") window.CCE_V104_BRIDGE.syncAll();
            renderModalsOnly();
          });
        }
        renderModalsOnly();
        break;

      case "close-painting-detail":
        ui.activePaintingId = null;
        ui.paintingZoomScale = 1;
        syncHashFromState(Store.getState().activePage || "paintings");
        renderModalsOnly();
        break;

      case "close-painting-backdrop":
        if (e.target.classList.contains("modal-backdrop") || target.getAttribute("data-action") === "close-painting-backdrop") {
          ui.activePaintingId = null;
          ui.paintingZoomScale = 1;
          syncHashFromState(Store.getState().activePage || "paintings");
          renderModalsOnly();
        }
        break;

      case "switch-artifact-to-painting":
        ui.activeArtifactId = null;
        ui.activePaintingId = id;
        ui.paintingZoomScale = 1;
        Store.setPage("paintings");
        syncHashFromState(`painting=${id}`);
        renderModalsOnly();
        break;

      case "switch-painting-to-artifact":
        ui.activePaintingId = null;
        ui.activeArtifactId = id;
        ui.paintingZoomScale = 1;
        Store.setPage("museum");
        syncHashFromState(`artifact=${id}`);
        renderModalsOnly();
        break;

      case "set-painting-tab":
        ui.paintingDetailTab = target.getAttribute("data-tab") || "historical";
        renderModalsOnly();
        break;

      case "open-painting-zoom": {
        if (id) ui.activePaintingId = id;
        const zoomTarget = ((window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || []).find(
          (item) => item.id === (ui.activePaintingId || id)
        );
        ui.paintingZoomOpen = true;
        ui.paintingZoomScale = 1;
        ui.activeHotspotIdx = 0;
        ui.paintingHandscrollMode = isHandscrollArtwork(zoomTarget);
        renderModalsOnly();
        break;
      }

      case "close-painting-zoom":
        ui.paintingZoomOpen = false;
        ui.paintingZoomScale = 1;
        renderModalsOnly();
        break;

      case "zoom-step-in":
        ui.paintingZoomScale = Math.min(3, (ui.paintingZoomScale || 1) + 0.25);
        renderModalsOnly();
        break;

      case "zoom-step-out":
        ui.paintingZoomScale = Math.max(0.75, (ui.paintingZoomScale || 1) - 0.25);
        renderModalsOnly();
        break;

      case "zoom-step-reset":
        ui.paintingZoomScale = 1;
        renderModalsOnly();
        break;

      case "open-paintings-compare":
        ui.paintingCompareOpen = true;
        renderModalsOnly();
        break;

      case "close-painting-compare":
        ui.paintingCompareOpen = false;
        renderModalsOnly();
        break;

      case "close-compare-backdrop":
        if (e.target.classList.contains("modal-backdrop")) {
          ui.paintingCompareOpen = false;
          renderModalsOnly();
        }
        break;

      case "compare-with-this":
        if (id) ui.paintingCompareLeftId = id;
        ui.paintingCompareOpen = true;
        renderModalsOnly();
        break;

      case "launch-comparison":
        ui.paintingCompareLeftId = target.getAttribute("data-left") || "xishan-xinglv";
        ui.paintingCompareRightId = target.getAttribute("data-right") || "xiaoxiang-tu";
        ui.paintingCompareOpen = true;
        renderModalsOnly();
        break;

      case "filter-painting-era":
        ui.paintingsEraFilter = target.getAttribute("data-era") || "all";
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("paintings", "gallery", { rerender: false, scroll: false });
        patchMainOnly();
        break;

      case "filter-painting-genre":
        ui.paintingsGenreFilter = target.getAttribute("data-genre") || "all";
        patchMainOnly();
        break;

      case "clear-paintings-filters":
        ui.paintingsEraFilter = "all";
        ui.paintingsGenreFilter = "all";
        ui.paintingsMuseumFilter = "all";
        ui.paintingsAttributionFilter = "all";
        ui.paintingsQuery = "";
        patchMainOnly();
        break;

      case "set-paintings-view":
        ui.paintingsViewMode = target.getAttribute("data-mode") || "grid";
        patchMainOnly();
        break;

      case "scroll-to-paintings":
        {
          if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("paintings", "gallery", { scroll: true });
          else {
            const el = document.getElementById("paintings-collection-anchor");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }
        }
        break;

      case "copy-citation":
        {
          const text = target.getAttribute("data-text");
          if (text) {
            copyTextToClipboard(text, "Đã sao chép trích dẫn học thuật vào bộ nhớ tạm!");
          } else if (id) {
            const art = Articles.find((a) => a.id === id);
            if (art) {
              copyTextToClipboard(buildArticleCitation(art, "apa"), "Đã sao chép trích dẫn APA 7th vào bộ nhớ tạm!");
            }
          }
        }
        break;

      case "close-lightbox":
        if (e.target === target || target.tagName === "BUTTON") {
          ui.lightboxOpen = false;
          renderModalsOnly();
        }
        break;

      case "select-period":
        ui.activePeriodId = id;
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("history", "dynasties", { rerender: false, scroll: false });
        patchMainOnly();
        break;

      case "select-map-layer":
        ui.mapLayerMode = target.getAttribute("data-mode") || "regions";
        patchMainOnly();
        break;

      case "select-map-province": {
        ui.selectedMapProvinceId = id;
        ui.regionSubTab = "map";
        const provList = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];
        const matchedProv = provList.find((pr) => pr.id === id);
        if (matchedProv && matchedProv.regionId) ui.activeRegionId = matchedProv.regionId;
        patchMainOnly();
        break;
      }

      case "select-hotspot":
        ui.activeHotspotIdx = Number(target.getAttribute("data-idx") || 0);
        renderModalsOnly();
        break;

      case "tour-prev-hotspot":
      case "tour-next-hotspot": {
        const activeP = ((window.CCE_PAINTINGS && window.CCE_PAINTINGS.masterpieces) || []).find(
          (item) => item.id === ui.activePaintingId
        );
        const hsList = activeP && ((Array.isArray(activeP.hotspotAnnotations) && activeP.hotspotAnnotations.length ? activeP.hotspotAnnotations : activeP.hotspots) || []);
        if (hsList && hsList.length) {
          const total = hsList.length;
          const cur = Math.max(0, Math.min(Number(ui.activeHotspotIdx || 0), total - 1));
          ui.activeHotspotIdx = action === "tour-next-hotspot" ? (cur + 1) % total : (cur - 1 + total) % total;
        }
        renderModalsOnly();
        break;
      }

      case "set-classics-treasury":
        ui.classicsTreasuryFilter = target.getAttribute("data-treasury") || "all";
        patchMainOnly();
        break;

      case "clear-classics-filters":
        ui.classicsTreasuryFilter = "all";
        ui.classicsQuery = "";
        patchMainOnly();
        break;

      case "set-home-journey-filter":
        ui.homeJourneyFilter = target.getAttribute("data-role") || "all";
        patchMainOnly();
        break;

      case "apply-empty-suggestion": {
        const q = target.getAttribute("data-query") || "";
        const tf = target.getAttribute("data-target") || "search";
        if (tf === "explore") {
          ui.exploreQuery = q;
          ui.exploreCategory = "all";
          ui.explorePeriod = "all";
          ui.exploreRegion = "all";
          ui.exploreContentType = "all";
          ui.exploreLanguage = "all";
          ui.exploreDifficulty = "all";
          ui.exploreSourceType = "all";
        } else if (tf === "paintings") {
          ui.paintingsQuery = q;
          ui.paintingsEraFilter = "all";
          ui.paintingsGenreFilter = "all";
          ui.paintingsMuseumFilter = "all";
          ui.paintingsAttributionFilter = "all";
        } else if (tf === "museum") {
          ui.museumQuery = q;
          ui.museumCategory = "all";
          ui.museumPeriodFilter = "all";
        } else if (tf === "provinces") {
          ui.provinceQuery = q;
          ui.provinceRegionFilter = "all";
        } else if (tf === "dictionary") {
          ui.dictQuery = q;
          ui.dictLevelFilter = "all";
        } else {
          ui.searchQuery = q;
          ui.searchCategoryFilter = "all";
          ui.searchPeriodFilter = "all";
          ui.searchRegionFilter = "all";
          ui.searchLevelFilter = "all";
          ui.searchSourceFilter = "all";
        }
        if (tf === "search") renderModalsOnly();
        else patchMainOnly();
        break;
      }

      case "set-timeline-layout":
        ui.timelineLayout = target.getAttribute("data-mode");
        patchMainOnly();
        break;

      case "jump-period":
        ui.activePeriodId = id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        syncHashFromState("history");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("history", "dynasties", { rerender: false, scroll: false });
        if (Store.getState().activePage === "history") patchMainOnly();
        else Store.setPage("history");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "filter-timeline":
        ui.timelineFilter = target.getAttribute("data-type");
        patchMainOnly();
        break;

      case "open-school":
        ui.activeSchoolId = id;
        if (Store.getState().activePage !== "philosophy") {
          Store.setPage("philosophy");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          patchMainOnly();
        }
        break;

      case "jump-school":
        ui.activeSchoolId = id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        Store.setPage("philosophy");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "set-trad-tab": {
        const tTab = target.getAttribute("data-tab") || "customs";
        ui.traditionalTab = tTab;
        const tSubMap = { metaphysics: "cosmology", customs: "customs", arts: "stage", contemporary: "contemporary" };
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("traditional", tSubMap[tTab] || "customs", { scroll: true });
        else patchMainOnly();
        break;
      }

      case "set-lexicon-submode":
        ui.lexiconSubMode = target.getAttribute("data-mode") === "survival" ? "survival" : "dict";
        patchMainOnly();
        break;

      case "set-history-figure-mode":
        ui.historyFigureMode = target.getAttribute("data-mode") || "key28";
        patchMainOnly();
        break;

      case "select-region":
        ui.activeRegionId = id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        document.querySelectorAll("[data-map-tooltip]").forEach((el) => { el.hidden = true; });
        if (Store.getState().activePage !== "regions") {
          Store.setPage("regions");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          patchMainOnly();
        }
        break;

      case "select-city":
        ui.activeCityId = id;
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", "cities16", { rerender: false, scroll: false });
        patchMainOnly();
        break;

      case "set-map-view": {
        const rMode = target.getAttribute("data-mode") || "atlas";
        ui.regionViewMode = rMode;
        const rSubMap = { directory: "atlas", map: "map4layer", destinations: "expeditions" };
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", rSubMap[rMode] || "atlas", { scroll: true });
        else patchMainOnly();
        break;
      }

      case "set-map-view-page": {
        ui.activeMegaMenu = null;
        ui.mobileNavOpen = false;
        const rMode2 = target.getAttribute("data-mode") || "destinations";
        ui.regionViewMode = rMode2;
        const rSubMap2 = { directory: "atlas", map: "map4layer", destinations: "expeditions" };
        syncHashFromState("regions");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", rSubMap2[rMode2] || "atlas", { rerender: false, scroll: false });
        if (Store.getState().activePage === "regions") patchMainOnly();
        else Store.setPage("regions");
        window.scrollTo({ top: 0, behavior: "instant" });
        break;
      }

      case "dest-select-hub": {
        ui.activeDestHubId = id;
        const atlas = window.CCE_DESTINATIONS_ATLAS;
        const hub = atlas && atlas.hubs ? atlas.hubs.find((h) => h.id === id) : null;
        ui.activeDestAreaId = hub && hub.areas && hub.areas[0] ? hub.areas[0].id : null;
        patchSlot("destinations-atlas-slot", renderDestinationsDeepAtlas);
        break;
      }

      case "dest-select-area":
        ui.activeDestAreaId = id;
        patchSlot("destinations-atlas-slot", renderDestinationsDeepAtlas);
        break;

      case "open-destinations-hub": {
        const atlas = window.CCE_DESTINATIONS_ATLAS;
        const hub = atlas && atlas.hubs ? atlas.hubs.find((h) => h.id === id) : null;
        ui.activeDestHubId = id || "dest-beijing";
        ui.activeDestAreaId = hub && hub.areas && hub.areas[0] ? hub.areas[0].id : null;
        ui.activeProvinceId = null;
        ui.regionViewMode = "destinations";
        syncHashFromState("regions");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", "expeditions", { rerender: false, scroll: false });
        if (Store.getState().activePage === "regions") patchMainOnly();
        else Store.setPage("regions");
        window.scrollTo({ top: 0, behavior: "instant" });
        break;
      }

      case "jump-city":
        ui.activeCityId = id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        syncHashFromState("regions");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", "cities16", { rerender: false, scroll: false });
        if (Store.getState().activePage === "regions") patchMainOnly();
        else Store.setPage("regions");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "set-learn-tab": {
        const lTab = target.getAttribute("data-tab") || "dashboard";
        ui.learningTab = lTab;
        const lSubMap = { dashboard: "dashboard", kmap: "kmap", dictionary: "lexicon", survival: "lexicon", flashcards: "notebook", quiz: "quiz", journal: "academic" };
        if (lTab === "survival") ui.lexiconSubMode = "survival";
        else if (lTab === "dictionary") ui.lexiconSubMode = "dict";
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("learning", lSubMap[lTab] || "dashboard", { scroll: true });
        else patchMainOnly();
        break;
      }

      case "set-province-layer":
        ui.provinceLayerTab = target.getAttribute("data-layer") || "all";
        renderModalsOnly();
        break;

      case "set-survival-pack":
        ui.survivalPackFilter = target.getAttribute("data-pack") || "all";
        patchMainOnly();
        break;

      case "toggle-survival-zero-pinyin":
        ui.survivalZeroPinyin = !ui.survivalZeroPinyin;
        patchMainOnly();
        break;

      case "toggle-survival-reveal": {
        if (!ui.revealedSurvivalIds) ui.revealedSurvivalIds = {};
        ui.revealedSurvivalIds[id] = !ui.revealedSurvivalIds[id];
        patchMainOnly();
        break;
      }

      case "save-survival-to-notebook": {
        const packs = (window.CCE_SURVIVAL_PACKS && window.CCE_SURVIVAL_PACKS.packs) || [];
        let foundItem = null;
        let foundPack = null;
        packs.forEach((pk) => {
          const hit = (pk.items || []).find((x) => x.id === id);
          if (hit) {
            foundItem = hit;
            foundPack = pk;
          }
        });
        if (foundItem && Store && Store.addVocabNotebookEntry) {
          Store.addVocabNotebookEntry({
            term: foundItem.hanzi,
            pinyin: foundItem.pinyin,
            hanViet: foundItem.hanViet,
            meaning: `${foundItem.vi} — [${foundItem.liushuType}]`,
            sourceSentence: foundItem.radicalLogic,
            articleId: "survival-packs",
            articleTitle: `Hành trang Sinh tồn (${foundPack ? foundPack.titleVi : ""})`,
            note: foundItem.fieldTip
          });
          showToast(`Đã lưu "${foundItem.hanzi}" vào Sổ tay Từ vựng!`);
          patchMainOnly();
        }
        break;
      }

      case "export-survival-anki": {
        const packArg = target.getAttribute("data-pack") || ui.survivalPackFilter || "all";
        exportSurvivalAnkiFile(target.getAttribute("data-fmt") || "csv", packArg);
        break;
      }

      case "lab-dujiangyan-mode":
        if (window.CCE_LABS) window.CCE_LABS.setDujiangyanSeason(target.getAttribute("data-mode"));
        patchMainOnly();
        break;

      case "lab-meridian-now":
        if (window.CCE_LABS) window.CCE_LABS.setMeridianByHour(new Date().getHours());
        patchMainOnly();
        break;

      case "lab-meridian-pick":
        if (window.CCE_LABS) window.CCE_LABS.state.selectedMeridianIdx = Number(target.getAttribute("data-idx") || 0);
        patchMainOnly();
        break;

      case "trip-set-border":
        if (window.CCE_LABS) window.CCE_LABS.state.tripBorderId = id;
        patchMainOnly();
        break;

      case "trip-set-corridor":
        if (window.CCE_LABS) window.CCE_LABS.state.tripCorridorId = id;
        patchMainOnly();
        break;

      case "go-survival-packs":
        ui.learningTab = "survival";
        ui.lexiconSubMode = "survival";
        ui.activeProvinceId = null;
        syncHashFromState("learning");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("learning", "lexicon", { rerender: false, scroll: false });
        if (Store.getState().activePage === "learning") patchMainOnly();
        else Store.setPage("learning");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "arena-answer": {
        if (window.CCE_LABS) {
          const qid = target.getAttribute("data-qid");
          const optIdx = Number(target.getAttribute("data-opt"));
          window.CCE_LABS.state.quizAnsweredMap[qid] = optIdx;
          patchMainOnly();
          try {
            const badgeText = (document.querySelector("#quiz-arena-box .badge-jade") || {}).textContent || "";
            const m = badgeText.match(/(\d+)\//);
            if (m) {
              const sc = Number(m[1]);
              const prevBest = Number(localStorage.getItem("cce_quiz_arena_best") || "0");
              if (sc > prevBest) localStorage.setItem("cce_quiz_arena_best", String(sc));
            }
          } catch (_e) {}
        }
        break;
      }

      case "arena-step": {
        if (window.CCE_LABS) {
          const dir = Number(target.getAttribute("data-dir") || 1);
          const poolLen = Math.max(1, window.CCE_LABS.getQuizCount ? window.CCE_LABS.getQuizCount() : 8);
          window.CCE_LABS.state.quizIdx = (window.CCE_LABS.state.quizIdx + dir + poolLen) % poolLen;
        }
        patchMainOnly();
        break;
      }

      case "v3-arena-pillar":
        if (window.CCE_LABS) {
          window.CCE_LABS.state.quizPillarFilter = target.getAttribute("data-pillar") || "all";
          window.CCE_LABS.state.quizIdx = 0;
        }
        patchMainOnly();
        break;

      case "arena-reset":
        if (window.CCE_LABS) {
          window.CCE_LABS.state.quizIdx = 0;
          window.CCE_LABS.state.quizAnsweredMap = {};
        }
        patchMainOnly();
        break;

      case "open-survival-evolution": {
        const packs = (window.CCE_SURVIVAL_PACKS && window.CCE_SURVIVAL_PACKS.packs) || [];
        let foundIt = null;
        packs.forEach((pk) => {
          const m = (pk.items || []).find((x) => x.id === id);
          if (m) foundIt = m;
        });
        if (foundIt) {
          const ch0 = Array.from(foundIt.hanzi)[0];
          const dictHit = Dictionary.find((d) => foundIt.hanzi.includes(d.hanzi) || d.hanzi === ch0);
          if (dictHit) {
            ui.activeTermId = dictHit.id;
          } else {
            const dynId = `sv-term-${foundIt.id}`;
            if (!Dictionary.some((d) => d.id === dynId)) {
              Dictionary.push({
                id: dynId,
                hanzi: foundIt.hanzi,
                traditional: foundIt.hanzi,
                pinyin: foundIt.pinyin,
                hanViet: foundIt.hanViet,
                level: "Survival",
                pos: foundIt.liushuType || "Signage",
                liushuType: foundIt.liushuType,
                vietnamese: foundIt.vi,
                english: foundIt.en,
                radicalAnalysis: foundIt.radicalLogic,
                etymologyAndRadicals: foundIt.radicalLogic,
                mnemonic: foundIt.fieldTip,
                context: foundIt.fieldTip,
                related: [],
                examples: [{ zh: foundIt.hanzi, pinyin: foundIt.pinyin, vi: foundIt.vi, en: foundIt.en }]
              });
            }
            ui.activeTermId = dynId;
          }
          renderModalsOnly();
        }
        break;
      }

      case "export-study-passport": {
        if (window.CCE_EXPORTERS) {
          window.CCE_EXPORTERS.exportPassportBackup(Store.getState());
          showToast(isEnglishUi() ? "Exported Full Study Passport & SM-2 Backup .JSON!" : "Đã xuất Hộ chiếu Tri thức & Thẻ SM-2 (.JSON)!");
        }
        break;
      }

      case "filter-dict-level":
        ui.dictLevelFilter = target.getAttribute("data-level");
        patchMainOnly();
        break;

      case "open-article": {
        const openFoundArticle = (foundArt) => {
          const curPage = Store.getState().activePage;
          if (curPage && curPage !== "article") ui.previousPage = curPage;
          ui.activeArticleId = foundArt.id;
          ui.activeTocId = "sec-hero";
          ui.searchModalOpen = false;
          ui.heroAutocompleteOpen = false;
          ui.activeMegaMenu = null;
          ui.articleMobileTocOpen = false;
          ui.articleMobileContextOpen = false;
          ui.editorialQaOpen = false;
          Store.recordReading("article", foundArt.id, foundArt.titleVi);
          if (window.CCE_COOKIES && typeof window.CCE_COOKIES.setResume === "function") {
            window.CCE_COOKIES.setResume({ kind: "article", id: foundArt.id, title: foundArt.titleVi, chap: 1 });
          }
          Store.setPage("article");
          syncHashFromState(`article=${foundArt.id}`);
          window.scrollTo({ top: 0, behavior: "instant" });
        };
        syncArticlesRef();
        const art = Articles.find((a) => a.id === id);
        if (art) {
          openFoundArticle(art);
        } else if (Lazy && id) {
          Lazy.ensureMany(["articles-v3-pack", "v104-mono-shard-5", "v104-monographs-pack", "v104-live108-patches"]).then(() => {
            if (window.CCE_V104_BRIDGE && typeof window.CCE_V104_BRIDGE.syncAll === "function") {
              window.CCE_V104_BRIDGE.syncAll();
            }
            syncArticlesRef();
            const lazyArt = Articles.find((a) => a.id === id);
            if (lazyArt) openFoundArticle(lazyArt);
          });
        }
        break;
      }

      case "close-article": {
        const backPage = ui.previousPage || "explore";
        Store.setPage(backPage);
        syncHashFromState(backPage);
        window.scrollTo({ top: 0, behavior: "instant" });
        break;
      }

      case "set-article-depth":
        ui.articleDepthMode = target.getAttribute("data-depth") || "academic";
        patchMainOnly();
        break;

      case "reset-learning-progress":
        if (typeof Store.resetProgress === "function") {
          Store.resetProgress();
          showToast("Đã đặt lại toàn bộ tiến trình học tập về 0.");
        }
        break;

      case "load-demo-progress":
        if (typeof Store.loadDemoData === "function") {
          Store.loadDemoData();
          showToast("Đã nạp dữ liệu minh họa mẫu (có thể đặt lại về 0 bất cứ lúc nào).");
        }
        break;

      case "clear-province-filters":
        ui.provinceQuery = "";
        ui.provinceRegionFilter = "all";
        ui.provinceDims = [];
        patchMainOnly();
        break;

      case "toggle-prov-dim": {
        const dim = target.getAttribute("data-dim");
        if (dim) {
          const arr = Array.isArray(ui.provinceDims) ? [...ui.provinceDims] : [];
          const ix = arr.indexOf(dim);
          if (ix >= 0) arr.splice(ix, 1); else arr.push(dim);
          ui.provinceDims = arr;
          patchMainOnly();
        }
        break;
      }

      case "v3-select-arch":
        if (window.CCE_V3_MODS) window.CCE_V3_MODS.setArchId(id);
        patchMainOnly();
        break;

      case "v3-toggle-tiantan":
        if (window.CCE_ARTIFACTS_3D) window.CCE_ARTIFACTS_3D.toggleTiantan();
        patchMainOnly();
        break;

      case "v3-select-3d-artifact":
        if (window.CCE_ARTIFACTS_3D) window.CCE_ARTIFACTS_3D.setArtifact(id);
        patchMainOnly();
        break;

      case "v3-set-3d-light":
        if (window.CCE_ARTIFACTS_3D) window.CCE_ARTIFACTS_3D.setLighting(target.getAttribute("data-light"));
        patchMainOnly();
        break;

      case "v3-craft-period":
        ui.museumPeriodFilter = target.getAttribute("data-period") || "all";
        patchMainOnly();
        break;

      case "open-3d-studio": {
        const stId = (target.getAttribute("data-studio") || id || "relics");
        if (window.CCE_3D_HUB && typeof window.CCE_3D_HUB.setStudio === "function") {
          window.CCE_3D_HUB.setStudio(stId);
        }
        if (stId === "tiantan" && window.CCE_ARTIFACTS_3D && !window.CCE_ARTIFACTS_3D.isTiantanOpen()) {
          window.CCE_ARTIFACTS_3D.toggleTiantan();
        }
        Store.setPage("museum");
        syncHashFromState("museum");
        if (window.CCE_V10_DECK && typeof window.CCE_V10_DECK.setSubpage === "function") {
          window.CCE_V10_DECK.setSubpage("museum", "studio3d", { rerender: false, scroll: false });
        }
        window.scrollTo({ top: 0, behavior: "instant" });
        hydratePageBundles("museum", Store.getState().uiLang);
        break;
      }

      case "v3-toggle-classic-col":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.toggleClassicCol(target.getAttribute("data-col"));
        patchMainOnly();
        break;

      case "v3-filter-kmap":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.setKMapCat(target.getAttribute("data-cat"));
        patchMainOnly();
        break;

      case "v3-toggle-loupe":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.toggleLoupe();
        renderModalsOnly();
        break;

      case "v3-compare-zoom-in":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.stepSyncCompareZoom(0.35);
        renderModalsOnly();
        break;

      case "v3-compare-zoom-out":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.stepSyncCompareZoom(-0.35);
        renderModalsOnly();
        break;

      case "srs-toggle-zero-pinyin":
        if (window.CCE_SRS) window.CCE_SRS.toggleZeroPinyin();
        patchMainOnly();
        break;

      case "srs-reveal":
        if (window.CCE_SRS) window.CCE_SRS.reveal(id);
        patchMainOnly();
        break;

      case "srs-grade":
        if (window.CCE_SRS) {
          window.CCE_SRS.gradeCard(id, target.getAttribute("data-grade"));
          window.CCE_SRS.clearReveal();
        }
        patchMainOnly();
        break;

      case "srs-export-anki": {
        const n = window.CCE_EXPORTERS ? window.CCE_EXPORTERS.exportSrsToAnki("csv") : 0;
        showToast(n ? (isEnglishUi() ? `Exported ${n} trilingual SRS cards to Anki .CSV!` : `Đã xuất ${n} thẻ SM-2 tam ngữ ra Anki .CSV!`) : "Chưa có thẻ SM-2 nào.");
        break;
      }

      case "add-term-to-srs": {
        const t = getTermById(id);
        if (t && window.CCE_SRS) {
          const r = window.CCE_SRS.addCard({
            id: "dict-" + t.id,
            hanzi: t.hanzi,
            pinyin: t.pinyin,
            hanViet: t.hanViet,
            meaningVi: t.vietnamese,
            meaningEn: t.english,
            source: "Liushu Dictionary"
          });
          showToast(r.added ? (isEnglishUi() ? `Added "${t.hanzi}" to SM-2 SRS deck!` : `Đã thêm "${t.hanzi}" vào bộ ôn tập SM-2!`) : (isEnglishUi() ? `"${t.hanzi}" is already in your SRS deck.` : `"${t.hanzi}" đã có trong bộ thẻ SM-2.`));
        }
        break;
      }

      case "open-stroke-pad":
        if (window.CCE_STROKE_PAD) {
          window.CCE_STROKE_PAD.open(target.getAttribute("data-hanzi") || "和", target.getAttribute("data-pinyin") || "");
          renderModalsOnly();
        }
        break;

      case "close-stroke-pad":
        if (window.CCE_STROKE_PAD) window.CCE_STROKE_PAD.close();
        renderModalsOnly();
        break;

      case "stroke-pad-undo":
        if (window.CCE_STROKE_PAD) window.CCE_STROKE_PAD.undo();
        break;

      case "stroke-pad-clear":
        if (window.CCE_STROKE_PAD) window.CCE_STROKE_PAD.clear();
        break;

      case "stroke-pad-ghost":
        if (window.CCE_STROKE_PAD) window.CCE_STROKE_PAD.toggleGhost();
        renderModalsOnly();
        break;

      case "v3-ff-ctx":
        if (window.CCE_LEARNING_V3) window.CCE_LEARNING_V3.setContext(target.getAttribute("data-ctx"));
        patchMainOnly();
        break;

      case "v3-ff-flip":
        if (window.CCE_LEARNING_V3) window.CCE_LEARNING_V3.toggleFlip(id);
        patchMainOnly();
        break;

      case "v3-compare-zoom-reset":
        if (window.CCE_GALLERY_V3) window.CCE_GALLERY_V3.resetSyncCompareZoom();
        renderModalsOnly();
        break;

      case "v3-select-arch-callout":
        if (window.CCE_V3_MODS) window.CCE_V3_MODS.setCalloutIdx(target.getAttribute("data-idx"));
        patchMainOnly();
        break;

      case "clear-dict-filters":
        ui.dictQuery = "";
        ui.dictLevelFilter = "all";
        ui.dictDeckFilter = "all";
        patchMainOnly();
        break;

      case "toggle-article-mobile-toc":
        ui.articleMobileTocOpen = !ui.articleMobileTocOpen;
        patchMainOnly();
        break;

      case "toggle-article-mobile-context":
        ui.articleMobileContextOpen = !ui.articleMobileContextOpen;
        patchMainOnly();
        break;

      case "open-editorial-lightbox":
        ui.activeEditorialImageId = target.getAttribute("data-img-id");
        renderModalsOnly();
        break;

      case "close-editorial-lightbox":
        ui.activeEditorialImageId = null;
        renderModalsOnly();
        break;

      case "editorial-lightbox-step":
        stepEditorialLightbox(Number(target.getAttribute("data-dir")) || 1);
        break;

      case "article-gallery-step": {
        const gEd = getArticleEditorial(id);
        const gList = gEd && gEd.galleryImageIds ? gEd.galleryImageIds.filter((gid) => Boolean(getEditorialImage(gid))) : [];
        if (gList.length) {
          const dir = Number(target.getAttribute("data-dir")) || 1;
          const cur = ui.articleGalleryIndex[id] || 0;
          ui.articleGalleryIndex[id] = ((cur + dir) % gList.length + gList.length) % gList.length;
          patchMainOnly();
        }
        break;
      }

      case "article-gallery-select":
        ui.articleGalleryIndex[id] = Number(target.getAttribute("data-idx")) || 0;
        patchMainOnly();
        break;

      case "toggle-editorial-qa":
        ui.editorialQaOpen = !ui.editorialQaOpen;
        patchMainOnly();
        break;

      case "scroll-article-sec": {
        const secId = target.getAttribute("data-target");
        ui.activeTocId = secId;
        ui.articleMobileTocOpen = false;
        document.querySelectorAll(".article-toc-link").forEach((btn) => {
          btn.classList.toggle("active", btn.getAttribute("data-target") === secId);
        });
        const tocAside = document.querySelector(".article-sidebar-left");
        if (tocAside) tocAside.classList.remove("mobile-shown");
        if (window.CCE_V10_READER && ui.activeArticleId && window.CCE_V10_READER.jumpToSection(ui.activeArticleId, secId)) {
          break;
        }
        const el = document.getElementById(secId);
        if (el) {
          const headerEl = document.querySelector(".site-header");
          const offset = (headerEl ? headerEl.getBoundingClientRect().height : 110) + 18;
          const topY = window.scrollY + el.getBoundingClientRect().top - offset;
          window.scrollTo({ top: Math.max(0, topY), behavior: "smooth" });
        }
        break;
      }

      case "set-font-size":
        Store.setArticleFontSize(target.getAttribute("data-size") || "md");
        break;

      case "focus-article-note": {
        ui.articleMobileContextOpen = true;
        patchMainOnly();
        setTimeout(() => {
          const ta = document.getElementById("article-quick-note-textarea");
          if (ta) {
            ta.scrollIntoView({ behavior: "smooth", block: "center" });
            ta.focus();
          }
        }, 30);
        break;
      }

      case "generate-article-flashcards": {
        const art = Articles.find((a) => a.id === id);
        if (art) {
          let addedCount = 0;
          const vTitle = getLocalizedArticleView(art, getArticleSupplement(art.id), getArticleEditorial(art.id)).title;
          (art.terminologyIds || []).forEach((tid) => {
            if (!Store.isVocabCollected(tid)) {
              Store.toggleCollectVocab(tid);
              addedCount++;
            }
            const t = getTermById(tid);
            if (t && !(Store.getState().vocabNotebook || []).some((entry) => entry.term === t.hanzi && entry.articleId === art.id)) {
              Store.addVocabNotebookEntry({
                term: t.hanzi,
                pinyin: t.pinyin || "",
                hanViet: t.hanViet || "",
                meaning: isEnglishUi() ? (t.english || t.vietnamese) : t.vietnamese,
                sourceSentence: (t.examples && t.examples[0] && t.examples[0].zh) || "",
                articleId: art.id,
                articleTitle: vTitle,
                note: ""
              });
            }
          });
          showToast(
            isEnglishUi()
              ? (addedCount > 0 ? `Added ${addedCount} essay terms to your Vocabulary Notebook!` : "All key terms from this monograph are already saved in your Notebook.")
              : (addedCount > 0 ? `Đã lưu ${addedCount} thuật ngữ chuyên luận vào Sổ tay Từ vựng!` : "Toàn bộ thuật ngữ chuyên luận đã có trong Sổ tay Từ vựng của bạn.")
          );
        }
        break;
      }

      case "copy-citation": {
        const art = Articles.find((a) => a.id === id);
        if (art) {
          const refTitle = art.references && art.references[0] ? art.references[0].title : "Tư liệu học thuật đối chiếu";
          const citation = `${Brand.founderName} — ${Brand.projectFullTitle} (${Brand.copyrightNoticeShort}). "${art.titleVi} (${art.titleEn})". Chuyên mục: ${art.categoryLabel}. Tham chiếu chính: ${refTitle}.`;
          copyTextToClipboard(citation, "Đã sao chép trích dẫn chuẩn học thuật");
        }
        break;
      }

      case "share-article": {
        const url = `${window.location.origin}${window.location.pathname}#article=${id}`;
        window.location.hash = `article=${id}`;
        copyTextToClipboard(url, "Đã sao chép liên kết chia sẻ chuyên luận");
        break;
      }

      case "toggle-complete-article":
        Store.toggleArticleCompleted(id);
        showToast(Store.isArticleCompleted(id) ? "Đã đánh dấu hoàn thành chuyên luận!" : "Đã bỏ đánh dấu hoàn thành.");
        break;

      case "toggle-bookmark": {
        const bType = target.getAttribute("data-type");
        const bTitle = target.getAttribute("data-title");
        const added = Store.toggleBookmark(bType, id, bTitle);
        showToast(added ? "Đã lưu vào danh sách đánh dấu" : "Đã gỡ khỏi danh sách đánh dấu");
        break;
      }

      case "save-highlight": {
        const art = Articles.find((a) => a.id === id);
        if (art) {
          Store.addHighlight(art.id, art.introduction);
          showToast("Đã lưu trích dẫn vào Highlights trong Nhật ký học tập");
        }
        break;
      }

      case "delete-highlight":
        Store.deleteHighlight(id);
        showToast("Đã xóa Highlight");
        break;

      case "open-term": {
        const matched = getTermById(id) || Dictionary.find((d) => d.hanzi === id || d.traditional === id);
        ui.activeTermId = matched ? matched.id : id;
        ui.searchModalOpen = false;
        ui.heroAutocompleteOpen = false;
        renderModalsOnly();
        break;
      }

      case "close-term":
        ui.activeTermId = null;
        renderModalsOnly();
        break;

      case "toggle-collect-vocab": {
        const added = Store.toggleCollectVocab(id);
        showToast(isEnglishUi()
          ? (added ? "Added term to your Wordlist" : "Removed from your Wordlist")
          : (added ? "Đã thêm mục từ vào Kho Từ vựng của bạn" : "Đã gỡ khỏi Kho Từ vựng"));
        break;
      }

      case "set-deck-mode":
        ui.flashcardDeckMode = target.getAttribute("data-mode");
        ui.flashcardIdx = 0;
        ui.flashcardFlipped = false;
        patchMainOnly();
        break;

      case "clear-flashcard-filters":
        ui.flashcardDeckMode = "all";
        ui.flashcardDeckFilter = "all";
        ui.flashcardLevelFilter = "all";
        ui.flashcardTopicFilter = "all";
        ui.flashcardIdx = 0;
        ui.flashcardFlipped = false;
        patchMainOnly();
        break;

      case "flip-flashcard":
        ui.flashcardFlipped = !ui.flashcardFlipped;
        patchMainOnly();
        break;

      case "next-card": {
        const deck = getAllFlashcards();
        if (!deck.length) break;
        ui.flashcardIdx = (ui.flashcardIdx + 1) % deck.length;
        ui.flashcardFlipped = false;
        patchMainOnly();
        break;
      }

      case "prev-card": {
        const deck = getAllFlashcards();
        if (!deck.length) break;
        ui.flashcardIdx = (ui.flashcardIdx - 1 + deck.length) % deck.length;
        ui.flashcardFlipped = false;
        patchMainOnly();
        break;
      }

      case "toggle-master-card":
        Store.toggleMasteredFlashcard(id);
        break;

      case "export-anki":
        exportAnkiFile(target.getAttribute("data-fmt"));
        break;

      case "select-kg-node":
        ui.activeKgNodeId = id;
        patchMainOnly();
        break;

      case "select-quiz-option": {
        const qid = target.getAttribute("data-qid");
        const idx = Number(target.getAttribute("data-idx"));
        ui.quizAnswers[qid] = idx;
        patchMainOnly();
        break;
      }

      case "submit-quiz": {
        ui.quizSubmitted = true;
        const mcq = LearningResearch.quizBank.filter((q) => q.type !== "short-answer");
        let score = 0;
        mcq.forEach((q) => {
          if (ui.quizAnswers[q.id] === q.correctIndex) score++;
        });
        Store.recordQuizResult(score, mcq.length);
        showToast(`Đã chấm điểm: ${score}/${mcq.length} câu đúng`);
        patchMainOnly();
        break;
      }

      case "reset-quiz":
        ui.quizAnswers = {};
        ui.quizShortAnswers = {};
        ui.quizSubmitted = false;
        patchMainOnly();
        break;

      case "edit-note":
        ui.editingNoteId = id;
        patchMainOnly();
        window.scrollTo({ top: 180, behavior: "smooth" });
        break;

      case "cancel-edit-note":
        ui.editingNoteId = null;
        patchMainOnly();
        break;

      case "delete-note":
        if (ui.editingNoteId === id) ui.editingNoteId = null;
        Store.deleteNote(id);
        showToast("Đã xóa ghi chú");
        break;

      case "set-founder-msg-lang":
        ui.founderMsgLang = target.getAttribute("data-lang") || "all";
        patchMainOnly();
        break;

      case "open-founder-message":
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        ui.founderMsgLang = target.getAttribute("data-lang") || ui.founderMsgLang || "all";
        Store.setPage("about");
        setTimeout(() => {
          const el = document.getElementById("founder-message-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }, 40);
        break;

      case "open-about-section": {
        const secId = target.getAttribute("data-section");
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        Store.setPage("about");
        setTimeout(() => {
          const el = secId ? document.getElementById(secId) : null;
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
          else window.scrollTo({ top: 0, behavior: "smooth" });
        }, 40);
        break;
      }

      case "open-legal-doc":
        ui.mobileNavOpen = false;
        ui.searchModalOpen = false;
        ui.activeLegalDocId = target.getAttribute("data-doc") || "copyright";
        Store.setPage("legal");
        syncHashFromState("legal");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "toggle-mega":
      case "toggle-mega-menu": {
        const key = target.getAttribute("data-mega");
        ui.activeMegaMenu = ui.activeMegaMenu === key ? null : key;
        patchHeaderOnly();
        break;
      }

      case "scroll-home-sec": {
        const secId = target.getAttribute("data-target");
        if (Store.getState().activePage !== "home") {
          Store.setPage("home");
        }
        setTimeout(() => {
          const el = secId ? document.getElementById(secId) : null;
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 40);
        break;
      }

      case "set-hero-artwork":
        ui.heroArtworkMode = target.getAttribute("data-mode") || "jiangshan-masterpiece";
        patchMainOnly();
        break;

      case "close-mega":
        ui.activeMegaMenu = null;
        patchHeaderOnly();
        break;

      case "select-role-journey":
        ui.activeRoleJourneyId = id || "visitor";
        patchMainOnly();
        break;

      case "start-journey":
        Store.startJourney(id);
        showToast("Đã kích hoạt lộ trình học tập!");
        break;

      case "pause-journey":
        Store.pauseJourney(id);
        showToast("Đã tạm dừng lộ trình học tập.");
        break;

      case "toggle-journey-step":
        Store.toggleJourneyStep(id, Number(target.getAttribute("data-step") || 0));
        break;

      case "step-dest-carousel": {
        const dir = Number(target.getAttribute("data-dir") || 1);
        const total = Math.max(1, Math.ceil((Regions.cities || []).length / 4));
        ui.homeDestSlideIdx = ((ui.homeDestSlideIdx + dir) % total + total) % total;
        patchMainOnly();
        break;
      }

      case "select-dest-slide":
        ui.homeDestSlideIdx = Number(target.getAttribute("data-idx") || 0);
        patchMainOnly();
        break;

      case "set-home-journal-cat":
        ui.homeJournalCat = target.getAttribute("data-cat") || "all";
        patchMainOnly();
        break;

      case "set-home-province-type": {
        ui.homeProvinceTypeFilter = target.getAttribute("data-type") || "all";
        const allProvs = (Regions && (Regions.provincesDirectory || Regions.provincialDirectory)) || [];
        const matched = allProvs.filter((pr) => ui.homeProvinceTypeFilter === "all" || ((pr.identity && pr.identity.adminCategory) || pr.type) === ui.homeProvinceTypeFilter);
        if (matched.length && !matched.some((pr) => pr.id === ui.selectedMapProvinceId)) {
          ui.selectedMapProvinceId = matched[0].id;
        }
        patchMainOnly();
        break;
      }

      case "open-regions-directory":
        ui.activeMegaMenu = null;
        ui.mobileNavOpen = false;
        ui.regionViewMode = "directory";
        syncHashFromState("regions");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("regions", "atlas", { rerender: false, scroll: false });
        if (Store.getState().activePage === "regions") patchMainOnly();
        else Store.setPage("regions");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "filter-province-region":
        ui.provinceRegionFilter = target.getAttribute("data-region") || "all";
        patchMainOnly();
        break;

      case "set-explore-view":
        ui.exploreViewMode = target.getAttribute("data-mode") || "grid";
        patchMainOnly();
        break;

      case "clear-explore-facets":
        ui.exploreQuery = "";
        ui.exploreCategory = "all";
        ui.explorePeriod = "all";
        ui.exploreRegion = "all";
        ui.exploreContentType = "all";
        ui.exploreLanguage = "all";
        ui.exploreDifficulty = "all";
        ui.exploreSourceType = "all";
        ui.exploreLimit = 12;
        patchMainOnly();
        break;

      case "explore-load-more":
        ui.exploreLimit += 12;
        patchSlot("explore-results-slot", renderExploreResultsContent);
        break;

      case "set-library-subtab": {
        const lSub = target.getAttribute("data-tab") || "monograph";
        ui.librarySubTab = lSub;
        const libMap = { classics: "classics", literature: "literature", monograph: "monograph", compendia: "compendia", intelligence: "sources", audit: "sources" };
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("library", libMap[lSub] || "classics", { scroll: true });
        else patchMainOnly();
        break;
      }

      case "open-library-tab": {
        ui.activeMegaMenu = null;
        ui.mobileNavOpen = false;
        const lSub2 = target.getAttribute("data-tab") || "monograph";
        ui.librarySubTab = lSub2;
        const libMap2 = { classics: "classics", literature: "literature", monograph: "monograph", compendia: "compendia", intelligence: "sources", audit: "sources" };
        syncHashFromState("library");
        if (window.CCE_V10_DECK) window.CCE_V10_DECK.setSubpage("library", libMap2[lSub2] || "classics", { rerender: false, scroll: false });
        if (Store.getState().activePage === "library") patchMainOnly();
        else Store.setPage("library");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;
      }

      case "toggle-scholar-mode":
        ui.articleScholarMode = !ui.articleScholarMode;
        showToast(isEnglishUi()
          ? (ui.articleScholarMode ? "Scholar Apparatus enabled (primary citations, Hanzi & Liushu layers visible)" : "Switched to Story Reading Mode (Default)")
          : (ui.articleScholarMode ? "Đã bật Chế độ Khảo cứu (hiển thị đầy đủ Hán văn, Lục thư & trích dẫn)" : "Đã chuyển về Chế độ Đọc (Mặc định)"));
        patchMainOnly();
        break;

      case "filter-monograph-chap":
        ui.activeMonographChapter = target.getAttribute("data-chap") || "all";
        patchMainOnly();
        break;

      case "filter-source-type":
        ui.sourceFilterType = target.getAttribute("data-type") || "all";
        patchMainOnly();
        break;

      case "open-custom-image":
        ui.customModalImage = {
          src: target.getAttribute("data-src"),
          caption: target.getAttribute("data-caption") || "",
          credit: target.getAttribute("data-credit") || ""
        };
        renderModalsOnly();
        break;

      case "close-custom-image":
        if (e.target === target || target.tagName === "BUTTON") {
          ui.customModalImage = null;
          renderModalsOnly();
        }
        break;

      case "speak-zh":
        e.stopPropagation();
        speakChinese(target.getAttribute("data-zh") || "");
        break;

      case "speak-en":
        e.stopPropagation();
        try {
          const enTxt = target.getAttribute("data-en") || "";
          if (window.speechSynthesis && enTxt) {
            window.speechSynthesis.cancel();
            const uEn = new SpeechSynthesisUtterance(enTxt);
            uEn.lang = "en-US";
            uEn.rate = 0.94;
            window.speechSynthesis.speak(uEn);
          }
        } catch {}
        break;

      case "dismiss-onboarding":
        ui.onboardingDismissed = true;
        patchMainOnly();
        break;

      case "open-painting-zen":
        if (id) ui.activePaintingId = id;
        ui.paintingZoomOpen = true;
        ui.paintingZenMode = true;
        ui.paintingZoomScale = 1;
        renderModalsOnly();
        break;

      case "toggle-painting-zen":
        ui.paintingZenMode = !ui.paintingZenMode;
        renderModalsOnly();
        break;

      case "toggle-painting-handscroll":
        ui.paintingHandscrollMode = !ui.paintingHandscrollMode;
        renderModalsOnly();
        break;

      case "close-painting-zoom-backdrop":
        if (e.target === target) {
          ui.paintingZoomOpen = false;
          ui.paintingZenMode = false;
          ui.paintingHandscrollMode = false;
          ui.paintingZoomScale = 1;
          renderModalsOnly();
        }
        break;

      case "copy-citation-text": {
        const txt = target.getAttribute("data-text");
        const fmt = target.getAttribute("data-fmt") || "học thuật";
        if (txt) {
          copyTextToClipboard(txt, `Đã sao chép trích dẫn định dạng ${fmt}!`);
        }
        break;
      }

      case "open-province":
      case "open-province-detail":
        ui.selectedMapProvinceId = id;
        ui.activeProvinceId = id;
        syncHashFromState(`province=${id}`);
        if (Lazy && (!Regions.provincesDirectory || !Regions.provincesDirectory.some((pr) => pr && pr.id === id) || !window.CCE_PROVINCES_34_MASTER_ATLAS || !Object.keys(window.CCE_PROVINCES_34_MASTER_ATLAS).length)) {
          Lazy.ensureMany(["regions-batches-pack", "v104-provinces-pack"]).then(() => {
            if (window.CCE_V104_BRIDGE && typeof window.CCE_V104_BRIDGE.syncAll === "function") window.CCE_V104_BRIDGE.syncAll();
            renderModalsOnly();
          });
        }
        renderModalsOnly();
        break;

      case "close-province-detail":
        ui.activeProvinceId = null;
        syncHashFromState(Store.getState().activePage || "regions");
        renderModalsOnly();
        break;

      case "close-province-detail-backdrop":
        if (e.target === target) {
          ui.activeProvinceId = null;
          syncHashFromState(Store.getState().activePage || "regions");
          renderModalsOnly();
        }
        break;

      case "open-province-compare":
        ui.provinceCompareOpen = true;
        renderModalsOnly();
        break;

      case "swap-province-compare": {
        const tmp = ui.provinceCompareLeftId;
        ui.provinceCompareLeftId = ui.provinceCompareRightId;
        ui.provinceCompareRightId = tmp;
        renderModalsOnly();
        break;
      }

      case "close-province-compare":
        ui.provinceCompareOpen = false;
        renderModalsOnly();
        break;

      case "close-province-compare-backdrop":
        if (e.target === target) {
          ui.provinceCompareOpen = false;
          renderModalsOnly();
        }
        break;

      case "compare-with-province":
        if (id) {
          ui.provinceCompareLeftId = id;
          if (ui.provinceCompareRightId === id) {
            ui.provinceCompareRightId = id === "prov-shanghai" ? "prov-beijing" : "prov-shanghai";
          }
        }
        ui.provinceCompareOpen = true;
        renderModalsOnly();
        break;

      case "open-updates-modal":
        ui.activeMegaMenu = null;
        ui.mobileNavOpen = false;
        ui.updatesTab = target.getAttribute("data-tab") || ui.updatesTab || "reader";
        ui.updatesModalOpen = true;
        renderModalsOnly();
        break;

      case "close-updates-modal":
        ui.updatesModalOpen = false;
        renderModalsOnly();
        break;

      case "close-updates-backdrop":
        if (e.target === target) {
          ui.updatesModalOpen = false;
          renderModalsOnly();
        }
        break;

      case "set-updates-tab":
        ui.updatesTab = target.getAttribute("data-tab") || "reader";
        renderModalsOnly();
        break;

      case "unsubscribe-email":
        Store.setEmailSubscription({ subscribed: false });
        showToast(isEnglishUi() ? "Email notifications paused." : "Đã tắt thông báo Email tự nguyện.");
        break;

      case "open-article-from-updates":
        ui.updatesModalOpen = false;
        ui.activeArticleId = id;
        Store.setPage("article");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "dismiss-vocab-popover":
        ui.vocabSelectionPopup = null;
        renderModalsOnly();
        break;

      case "open-vocab-capture-manual": {
        const art = Articles.find((a) => a.id === id);
        const av = art ? getLocalizedArticleView(art, getArticleSupplement(art.id), getArticleEditorial(art.id)) : null;
        const sel = window.getSelection ? String(window.getSelection().toString() || "").trim() : "";
        const rect = target.getBoundingClientRect();
        ui.vocabSelectionPopup = {
          term: sel.slice(0, 120),
          sourceSentence: "",
          articleId: id || (art && art.id) || "custom",
          articleTitle: (av && av.title) || (art && art.titleVi) || "",
          x: Math.max(16, Math.min(window.innerWidth - 360, rect.left)),
          y: Math.max(76, Math.min(window.innerHeight - 190, rect.bottom + 8))
        };
        renderModalsOnly();
        break;
      }

      case "add-term-to-notebook": {
        const t = getTermById(id);
        if (t) {
          const exists = (Store.getState().vocabNotebook || []).some((entry) => entry.term === t.hanzi);
          if (!exists) {
            Store.addVocabNotebookEntry({
              term: t.hanzi,
              pinyin: t.pinyin || "",
              hanViet: t.hanViet || "",
              meaning: isEnglishUi() ? (t.english || t.vietnamese) : t.vietnamese,
              sourceSentence: (t.examples && t.examples[0] && t.examples[0].zh) || "",
              articleId: ui.activeArticleId || "dictionary",
              articleTitle: t.context ? t.context.slice(0, 72) : "Liushu Cultural Dictionary",
              note: t.mnemonic || ""
            });
          }
          showToast(isEnglishUi()
            ? (exists ? `"${t.hanzi}" is already in your Vocabulary Notebook.` : `Saved "${t.hanzi}" to your Vocabulary & Reading Notebook!`)
            : (exists ? `"${t.hanzi}" đã có sẵn trong Sổ tay Từ vựng.` : `Đã lưu "${t.hanzi}" vào Sổ tay Từ vựng & Ghi chú!`));
        }
        break;
      }

      case "edit-vocab-entry":
        ui.vocabEditId = ui.vocabEditId === id ? null : id;
        patchMainOnly();
        break;

      case "delete-vocab-entry":
        if (ui.vocabEditId === id) ui.vocabEditId = null;
        Store.deleteVocabNotebookEntry(id);
        showToast(isEnglishUi() ? "Removed entry from Vocabulary Notebook" : "Đã xóa mục từ khỏi Sổ tay Từ vựng");
        break;

      case "export-vocab-notebook":
        exportVocabNotebookFile(target.getAttribute("data-fmt") || "csv");
        break;

      case "open-vocab-from-search":
        ui.searchModalOpen = false;
        ui.learningTab = "flashcards";
        Store.setPage("learning");
        window.scrollTo({ top: 0, behavior: "smooth" });
        break;

      case "toggle-map-hsr": {
        const hsrId = target.getAttribute("data-hsr-id");
        if (!Array.isArray(ui.mapHsrFilters)) ui.mapHsrFilters = [];
        if (hsrId) {
          if (ui.mapHsrFilters.includes(hsrId)) {
            ui.mapHsrFilters = ui.mapHsrFilters.filter((x) => x !== hsrId);
          } else {
            ui.mapHsrFilters = [...ui.mapHsrFilters, hsrId];
          }
          if (ui.mapHsrFilters.length && ui.regionViewMode === "map" && ui.mapLayerMode !== "corridors") {
            ui.mapLayerMode = "corridors";
          }
        }
        patchMainOnly();
        break;
      }

      case "toggle-zen-reading":
        ui.articleZenReading = !ui.articleZenReading;
        patchMainOnly();
        break;

      case "open-slide-mode": {
        const sId = target.getAttribute("data-id") || ui.activeArticleId;
        const sArt = Articles.find((a) => a.id === sId) || Articles[0];
        if (sArt && window.CCE_SLIDE_MODE) {
          const sSup = getArticleSupplement(sArt.id) || {};
          const sEd = getArticleEditorial(sArt.id) || {};
          const sView = getLocalizedArticleView(sArt, sSup, sEd);
          window.CCE_SLIDE_MODE.open(sArt, sView, isEnglishUi());
        }
        break;
      }

      case "print-dossier":
        if (Store.getState().activePage === "article" && ui.activeArticleId && window.CCE_V10_READER) {
          window.CCE_V10_READER.setViewMode(ui.activeArticleId, "full");
        }
        if (typeof window.print === "function") {
          setTimeout(() => window.print(), 60);
        }
        break;
    }
  });

  document.addEventListener("change", (e) => {
    const action = e.target.getAttribute("data-action");
    if (action === "import-study-passport-file") {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const rawJson = String(reader.result || "{}");
          const data = JSON.parse(rawJson);
          if (data && data.schema === "cce-passport-v1" && window.CCE_EXPORTERS) {
            const res = window.CCE_EXPORTERS.restorePassportBackup(rawJson);
            showToast(isEnglishUi() ? `Restored Study Passport & ${res.srsCount} SRS cards!` : `Đã khôi phục Hộ chiếu & ${res.srsCount} thẻ SM-2!`);
            render();
          } else if (Store && Store.importPassportSnapshot && Store.importPassportSnapshot(data)) {
            showToast(isEnglishUi() ? "Imported Study Passport cleanly!" : "Đã khôi phục Hộ chiếu Văn hiến thành công!");
            render();
          } else {
            showToast("File JSON không hợp lệ!");
          }
        } catch (_err) {
          showToast("Lỗi đọc file Hộ chiếu .JSON!");
        }
      };
      reader.readAsText(file);
      return;
    }
    if (action === "ui-lang-select") {
      Store.setUiLang(e.target.value);
      hydratePageBundles(Store.getState().activePage || "home", e.target.value, { needs3d: ui.activeArticleId === "forbidden-city-3d-dissection" });
      if (window.CCE_ARTIFACTS_3D && window.CCE_ARTIFACTS_3D.syncTiantanLang) {
        window.CCE_ARTIFACTS_3D.syncTiantanLang(e.target.value);
      }
      showToast(getLangPack().langChangedToast || `Đã chuyển giao diện: ${e.target.value.toUpperCase()}`);
    } else if (action === "vocab-article-filter") {
      ui.vocabFilterArticle = e.target.value || "all";
      patchMainOnly();
    } else if (action === "filter-painting-museum") {
      ui.paintingsMuseumFilter = e.target.value;
      patchSlot("paintings-grid-slot", renderPaintingsGridContent);
    } else if (action === "filter-painting-attr") {
      ui.paintingsAttributionFilter = e.target.value;
      patchSlot("paintings-grid-slot", renderPaintingsGridContent);
    } else if (action === "set-paintings-sort") {
      ui.paintingsSort = e.target.value;
      patchSlot("paintings-grid-slot", renderPaintingsGridContent);
    } else if (action === "select-compare-left") {
      ui.paintingCompareLeftId = e.target.value;
      renderModalsOnly();
    } else if (action === "select-compare-right") {
      ui.paintingCompareRightId = e.target.value;
      renderModalsOnly();
    } else if (action === "select-prov-compare-left") {
      ui.provinceCompareLeftId = e.target.value;
      renderModalsOnly();
    } else if (action === "select-prov-compare-right") {
      ui.provinceCompareRightId = e.target.value;
      renderModalsOnly();
    } else if (action === "dict-deck-filter") {
      ui.dictDeckFilter = e.target.value || "all";
      patchSlot("dict-results-slot", renderDictionaryResultsContent);
    } else if (action === "flashcard-deck-filter") {
      ui.flashcardDeckFilter = e.target.value || "all";
      ui.flashcardIdx = 0;
      ui.flashcardFlipped = false;
      patchMainOnly();
    } else if (action === "flashcard-level-filter") {
      ui.flashcardLevelFilter = e.target.value || "all";
      ui.flashcardIdx = 0;
      ui.flashcardFlipped = false;
      patchMainOnly();
    } else if (action === "flashcard-topic-filter") {
      ui.flashcardTopicFilter = e.target.value || "all";
      ui.flashcardIdx = 0;
      ui.flashcardFlipped = false;
      patchMainOnly();
    } else if (action === "museum-period-filter") {
      ui.museumPeriodFilter = e.target.value;
      patchSlot("museum-results-slot", renderMuseumResultsContent);
    } else if (action === "search-filter-period") {
      ui.searchPeriodFilter = e.target.value;
      renderModalsOnly();
    } else if (action === "search-filter-region") {
      ui.searchRegionFilter = e.target.value;
      renderModalsOnly();
    } else if (action === "search-filter-level") {
      ui.searchLevelFilter = e.target.value;
      renderModalsOnly();
    } else if (action === "search-filter-source") {
      ui.searchSourceFilter = e.target.value;
      renderModalsOnly();
    } else if (action === "explore-sort-change") {
      ui.exploreSort = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-period") {
      ui.explorePeriod = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-region") {
      ui.exploreRegion = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-type") {
      ui.exploreContentType = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-lang") {
      ui.exploreLanguage = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-difficulty") {
      ui.exploreDifficulty = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "explore-facet-source") {
      ui.exploreSourceType = e.target.value;
      patchSlot("explore-results-slot", renderExploreResultsContent);
    }
  });

  document.addEventListener("input", (e) => {
    const action = e.target.getAttribute("data-action");
    if (!action) return;

    if (action === "hero-search-input") {
      ui.heroSearchText = e.target.value;
      const trimmed = e.target.value.trim();
      ui.heroAutocompleteOpen = Boolean(trimmed);
      scheduleSlotInput("hero-ac", () => {
        const slot = document.getElementById("hero-autocomplete-slot");
        if (!ui.heroSearchText.trim()) {
          if (slot) slot.innerHTML = "";
        } else if (slot) {
          slot.innerHTML = renderHeroAutocomplete();
        }
      }, 65);
    } else if (action === "paintings-search-input") {
      ui.paintingsQuery = e.target.value;
      scheduleSlotInput("paintings-q", () => {
        const slot = document.getElementById("paintings-grid-slot");
        const countEl = document.getElementById("paintings-count-slot");
        if (countEl) countEl.textContent = String(getFilteredPaintings().length);
        if (slot) slot.innerHTML = renderPaintingsGridContent();
        else patchMainOnly();
      }, 95);
    } else if (action === "dict-search-input") {
      ui.dictQuery = e.target.value;
      scheduleSlotInput("dict-q", () => {
        patchSlot("dict-results-slot", renderDictionaryResultsContent);
      }, 95);
    } else if (action === "museum-search-input") {
      ui.museumQuery = e.target.value;
      scheduleSlotInput("museum-q", () => {
        patchSlot("museum-results-slot", renderMuseumResultsContent);
      }, 95);
    } else if (action === "global-search-input") {
      ui.searchQuery = e.target.value;
      ui.searchLimit = 18;
      scheduleSlotInput("global-q", () => {
        const slot = document.getElementById("global-search-results-slot");
        if (slot) slot.innerHTML = renderGlobalSearchResultsHTML();
        else renderModalsOnly();
      }, 95);
    } else if (action === "quiz-short-input") {
      ui.quizShortAnswers[e.target.getAttribute("data-qid")] = e.target.value;
    } else if (action === "explore-query-input") {
      ui.exploreQuery = e.target.value;
      if (_inputTimers.has("explore-q")) {
        clearTimeout(_inputTimers.get("explore-q"));
        _inputTimers.delete("explore-q");
      }
      patchSlot("explore-results-slot", renderExploreResultsContent);
    } else if (action === "province-query-input") {
      ui.provinceQuery = e.target.value;
      scheduleSlotInput("prov-q", () => {
        patchSlot("provinces-grid-slot", renderProvincesDirectoryContent);
      }, 95);
    } else if (action === "classics-query-input") {
      ui.classicsQuery = e.target.value;
      scheduleSlotInput("classics-q", () => {
        patchMainOnly();
      }, 110);
    } else if (action === "vocab-search-input") {
      ui.vocabSearchQuery = e.target.value;
      scheduleSlotInput("vocab-q", () => {
        patchMainOnly();
      }, 110);
    } else if (action === "fc3d-explode") {
      const _fc3dInput = getForbiddenCity3D();
      if (_fc3dInput && typeof _fc3dInput.handleAction === "function") {
        _fc3dInput.handleAction("fc3d-explode", e.target, Store, showToast, render);
      }
    }
  });

  document.addEventListener("submit", (e) => {
    const action = e.target.getAttribute("data-action");
    if (!action) return;
    e.preventDefault();

    if (action === "hero-search-form") {
      const inp = document.getElementById("hero-search-input");
      const q = inp ? inp.value : ui.heroSearchText;
      ui.searchQuery = q;
      ui.heroAutocompleteOpen = false;
      ui.searchModalOpen = true;
      ui.searchLimit = 18;
      if (q && q.trim()) Store.addSearchHistory(q.trim());
      const slot = document.getElementById("hero-autocomplete-slot");
      if (slot) slot.innerHTML = "";
      renderModalsOnly();
      setTimeout(() => {
        const modalInp = document.getElementById("global-search-input");
        if (modalInp) modalInp.focus();
      }, 20);
    } else if (action === "add-note-form") {
      const fd = new FormData(e.target);
      const payload = {
        title: fd.get("title"),
        category: fd.get("category"),
        method: fd.get("method"),
        content: fd.get("content")
      };
      if (ui.editingNoteId && Store.getState().activePage === "learning") {
        Store.updateNote(ui.editingNoteId, payload);
        ui.editingNoteId = null;
        showToast("Đã cập nhật ghi chú trong Nhật ký Học tập");
      } else {
        Store.addNote(payload);
        e.target.reset();
        showToast("Đã lưu ghi chú mới vào Nhật ký Học tập");
      }
    } else if (action === "create-flashcard-form") {
      const fd = new FormData(e.target);
      const exRaw = String(fd.get("example") || "").split("|").map((s) => s.trim());
      const examples = exRaw[0]
        ? [{ zh: exRaw[0], pinyin: exRaw[1] || "", vi: exRaw[2] || "", en: exRaw[2] || "" }]
        : [{ zh: String(fd.get("hanzi")), pinyin: String(fd.get("pinyin")), vi: String(fd.get("vietnamese")), en: String(fd.get("english")) }];

      Store.addCustomFlashcard({
        hanzi: String(fd.get("hanzi")).trim(),
        traditional: String(fd.get("hanzi")).trim(),
        pinyin: String(fd.get("pinyin")).trim(),
        level: "Custom Deck",
        pos: "custom",
        radical: String(fd.get("radical") || "Tự định nghĩa"),
        components: "Thẻ tự tạo theo ngữ cảnh nghiên cứu cá nhân",
        english: String(fd.get("english")).trim(),
        vietnamese: String(fd.get("vietnamese")).trim(),
        mnemonic: String(fd.get("mnemonic") || ""),
        context: "Thẻ cá nhân",
        related: [],
        examples
      });
      e.target.reset();
      showToast(isEnglishUi() ? "Saved new vocabulary entry!" : "Đã tạo mục từ mới và thêm vào Kho Từ vựng!");
    } else if (action === "subscribe-email-form") {
      const fd = new FormData(e.target);
      const email = String(fd.get("email") || "").trim();
      const frequency = String(fd.get("frequency") || "weekly");
      const topics = fd.getAll("topics").map((x) => String(x));
      if (email) {
        const finalTopics = topics.length ? topics : ["hot", "articles", "updates"];
        Store.setEmailSubscription({
          subscribed: true,
          email,
          frequency,
          topics: finalTopics
        });
        const isLocalOrigin =
          typeof window !== "undefined" &&
          (window.location.hostname === "localhost" ||
            window.location.hostname === "127.0.0.1" ||
            window.location.protocol === "file:");
        if (!isLocalOrigin && typeof fetch === "function") {
          const payload = new URLSearchParams({
            "form-name": "cce-subscribers",
            "bot-field": "",
            email,
            frequency,
            topics: finalTopics.join(","),
            lang: Store.getState().uiLang || "vi"
          });
          fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: payload.toString()
          }).catch(() => {});
        }
        showToast(isEnglishUi()
          ? `Subscribed ${email} (${frequency}) to digest updates!`
          : `Đã lưu đăng ký nhận bản tin qua Email: ${email} (${frequency})!`);
      }
    } else if (action === "save-selection-vocab-form") {
      const fd = new FormData(e.target);
      const pop = ui.vocabSelectionPopup || {};
      const term = String(fd.get("term") || pop.term || "").trim();
      const note = String(fd.get("note") || "").trim();
      if (term) {
        const dictHit = Dictionary.find((d) => d.hanzi === term || d.traditional === term);
        Store.addVocabNotebookEntry({
          term,
          pinyin: dictHit ? (dictHit.pinyin || "") : "",
          hanViet: dictHit ? (dictHit.hanViet || "") : "",
          meaning: dictHit ? (isEnglishUi() ? (dictHit.english || dictHit.vietnamese) : dictHit.vietnamese) : "",
          sourceSentence: pop.sourceSentence || "",
          articleId: pop.articleId || ui.activeArticleId || "custom",
          articleTitle: pop.articleTitle || "",
          note
        });
        if (window.CCE_SRS) {
          window.CCE_SRS.addCard({
            hanzi: term,
            pinyin: dictHit ? (dictHit.pinyin || "") : "",
            hanViet: dictHit ? (dictHit.hanViet || "") : "",
            meaningVi: dictHit ? (dictHit.vietnamese || "") : (note || "Lưu từ bài viết"),
            meaningEn: dictHit ? (dictHit.english || "") : "",
            source: pop.articleTitle || "Reading Capture"
          });
        }
        ui.vocabSelectionPopup = null;
        showToast(isEnglishUi()
          ? `Saved "${term}" with context & note to Vocabulary Notebook!`
          : `Đã lưu "${term}" kèm ngữ cảnh & ghi chú vào Sổ tay!`);
        renderModalsOnly();
      }
    } else if (action === "add-vocab-notebook-form") {
      const fd = new FormData(e.target);
      const term = String(fd.get("term") || "").trim();
      if (term) {
        const pyRaw = String(fd.get("pinyin") || "").split("|").map((x) => x.trim());
        Store.addVocabNotebookEntry({
          term,
          pinyin: pyRaw[0] || "",
          hanViet: pyRaw[1] || "",
          meaning: String(fd.get("meaning") || "").trim(),
          sourceSentence: String(fd.get("sourceSentence") || "").trim(),
          articleId: ui.activeArticleId || "custom",
          articleTitle: "Manual Reading Notebook Entry",
          note: String(fd.get("note") || "").trim()
        });
        e.target.reset();
        showToast(isEnglishUi() ? `Added "${term}" to Vocabulary Notebook!` : `Đã thêm "${term}" vào Sổ tay Từ vựng!`);
      }
    } else if (action === "save-vocab-note-form") {
      const fd = new FormData(e.target);
      const entryId = String(fd.get("id") || "").trim();
      if (entryId) {
        Store.updateVocabNotebookEntry(entryId, {
          meaning: String(fd.get("meaning") || "").trim(),
          note: String(fd.get("note") || "").trim()
        });
        ui.vocabEditId = null;
        showToast(isEnglishUi() ? "Updated Vocabulary Notebook entry!" : "Đã cập nhật ghi chú trong Sổ tay Từ vựng!");
      }
    }
  });

  document.addEventListener("mouseup", (e) => {
    if (e.target && e.target.closest(".vocab-capture-popover, input, textarea, button, select")) return;
    const zone = e.target && e.target.closest ? e.target.closest("[data-vocab-capture-zone]") : null;
    if (!zone || !window.getSelection) return;
    const sel = window.getSelection();
    if (!sel || sel.isCollapsed) return;
    const rawText = String(sel.toString() || "").replace(/\s+/g, " ").trim();
    if (rawText.length < 1 || rawText.length > 140) return;

    let sentence = "";
    try {
      const nodeText = (sel.anchorNode && sel.anchorNode.textContent) || "";
      if (nodeText) {
        const parts = nodeText.split(/(?<=[。！？.!?])\s+|\r?\n/);
        sentence = (parts.find((p) => p.includes(rawText)) || nodeText).replace(/\s+/g, " ").trim().slice(0, 260);
      }
      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      ui.vocabSelectionPopup = {
        term: rawText,
        sourceSentence: sentence,
        articleId: zone.getAttribute("data-vocab-capture-zone") || ui.activeArticleId || "",
        articleTitle: zone.getAttribute("data-vocab-article-title") || "",
        x: Math.max(12, Math.min(window.innerWidth - 360, rect.left)),
        y: Math.max(68, Math.min(window.innerHeight - 175, rect.bottom + 8))
      };
      renderModalsOnly();
    } catch {}
  });

  function stepEditorialLightbox(dir) {
    if (!ui.activeEditorialImageId) return;
    const seq = getArticleVisualSequence(ui.activeArticleId);
    const list = seq.includes(ui.activeEditorialImageId)
      ? seq
      : (EditorialMedia && EditorialMedia.images ? Object.keys(EditorialMedia.images) : [ui.activeEditorialImageId]);
    if (!list.length) return;
    const idx = Math.max(0, list.indexOf(ui.activeEditorialImageId));
    const nextIdx = ((idx + dir) % list.length + list.length) % list.length;
    ui.activeEditorialImageId = list[nextIdx];
    renderModalsOnly();
  }

  // Map province hover tooltip delegation
  document.addEventListener("mouseover", (e) => {
    const poly = e.target && e.target.closest ? e.target.closest("[data-tip-title]") : null;
    if (!poly) return;
    const stage = poly.closest("[data-map-stage]");
    const tip = stage ? stage.querySelector("[data-map-tooltip]") : null;
    if (!tip) return;
    const title = poly.getAttribute("data-tip-title") || "";
    const meta = poly.getAttribute("data-tip-meta") || "";
    tip.innerHTML = `<strong>${escapeHtml(title)}</strong>${meta ? `<div style="font-size:0.72rem;color:var(--text-muted);margin-top:2px;">${escapeHtml(meta)}</div>` : ""}`;
    tip.hidden = false;
  });
  document.addEventListener("mouseout", (e) => {
    const poly = e.target && e.target.closest ? e.target.closest("[data-tip-title]") : null;
    if (!poly) return;
    const stage = poly.closest("[data-map-stage]");
    const tip = stage ? stage.querySelector("[data-map-tooltip]") : null;
    if (tip) tip.hidden = true;
  });

  // Keyboard shortcuts (Ctrl+K or '/' for global search, Escape to close modals/drawers, Arrows in Editorial Lightbox)
  window.addEventListener("keydown", (e) => {
    const isK = (e.key && e.key.toLowerCase() === "k") || e.code === "KeyK";
    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    const inEditable = ["INPUT", "TEXTAREA", "SELECT"].includes(activeTag) || (document.activeElement && document.activeElement.isContentEditable);
    const isSlashShortcut = e.key === "/" && !e.ctrlKey && !e.metaKey && !e.altKey && !inEditable;
    if (((e.ctrlKey || e.metaKey) && !e.altKey && isK) || isSlashShortcut) {
      e.preventDefault();
      ui.searchModalOpen = true;
      renderModalsOnly();
      requestAnimationFrame(() => {
        const el = document.getElementById("global-search-input");
        if (el) {
          el.focus();
          if (typeof el.setSelectionRange === "function") el.setSelectionRange(el.value.length, el.value.length);
        }
      });
    } else if (ui.activeEditorialImageId && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (!["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        e.preventDefault();
        stepEditorialLightbox(e.key === "ArrowLeft" ? -1 : 1);
      }
    } else if (["1", "2", "3", "4"].includes(e.key) && window.CCE_SRS && document.getElementById("cce-srs-deck-widget")) {
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (!["INPUT", "TEXTAREA", "SELECT"].includes(tag)) {
        const gradeBtn = document.querySelector(`[data-action="srs-grade"][data-grade="${e.key}"]`);
        if (gradeBtn) gradeBtn.click();
      }
    } else if (e.key === "Escape") {
      if (window.CCE_STROKE_PAD && window.CCE_STROKE_PAD.isOpen()) {
        window.CCE_STROKE_PAD.close();
        renderModalsOnly();
      } else if (ui.vocabSelectionPopup) {
        ui.vocabSelectionPopup = null;
        renderModalsOnly();
      } else if (ui.updatesModalOpen) {
        ui.updatesModalOpen = false;
        renderModalsOnly();
      } else if (ui.customModalImage) {
        ui.customModalImage = null;
        renderModalsOnly();
      } else if (ui.activeEditorialImageId) {
        ui.activeEditorialImageId = null;
        renderModalsOnly();
      } else if (ui.lightboxOpen) {
        ui.lightboxOpen = false;
        renderModalsOnly();
      } else if (ui.activeTermId) {
        ui.activeTermId = null;
        renderModalsOnly();
      } else if (ui.activeArtifactId) {
        ui.activeArtifactId = null;
        syncHashFromState(Store.getState().activePage || "museum");
        renderModalsOnly();
      } else if (ui.searchModalOpen) {
        ui.searchModalOpen = false;
        renderModalsOnly();
      } else if (ui.mobileNavOpen) {
        ui.mobileNavOpen = false;
        patchNavOnly();
      } else if (ui.paintingZoomOpen) {
        ui.paintingZoomOpen = false;
        ui.paintingZenMode = false;
        ui.paintingHandscrollMode = false;
        ui.paintingZoomScale = 1;
        renderModalsOnly();
      } else if (ui.provinceCompareOpen) {
        ui.provinceCompareOpen = false;
        renderModalsOnly();
      } else if (ui.activeProvinceId) {
        ui.activeProvinceId = null;
        syncHashFromState(Store.getState().activePage || "regions");
        renderModalsOnly();
      } else if (ui.paintingCompareOpen) {
        ui.paintingCompareOpen = false;
        renderModalsOnly();
      } else if (ui.activePaintingId) {
        ui.activePaintingId = null;
        ui.paintingZoomScale = 1;
        syncHashFromState(Store.getState().activePage || "paintings");
        renderModalsOnly();
      } else if (ui.activeMegaMenu) {
        ui.activeMegaMenu = null;
        patchHeaderOnly();
      } else if (ui.heroAutocompleteOpen) {
        ui.heroAutocompleteOpen = false;
        const slot = document.getElementById("hero-autocomplete-slot");
        if (slot) slot.innerHTML = "";
        else patchMainOnly();
      }
    }
  }, { capture: true });

  // Automatic APA 7th Citation Attribution when copying > 40 words from #main-content
  document.addEventListener("copy", (e) => {
    try {
      const sel = window.getSelection ? window.getSelection() : null;
      if (!sel || sel.isCollapsed) return;
      const text = String(sel.toString() || "").trim();
      const words = text.split(/\s+/).filter(Boolean);
      if (words.length <= 40) return;
      const anchorNode = sel.anchorNode && (sel.anchorNode.nodeType === 1 ? sel.anchorNode : sel.anchorNode.parentElement);
      if (!anchorNode || !anchorNode.closest("#main-content")) return;
      const activeArt = ui.activeArticleId ? Articles.find((a) => a.id === ui.activeArticleId) : null;
      const titleForCite = activeArt ? getLocalizedArticleView(activeArt, null, null).title : document.title;
      const citationLine = isEnglishUi()
        ? `\n\n— Source Attribution (APA 7th): Lê, H. T. (2026). ${titleForCite}. ${Brand.projectName}. Retrieved from ${window.location.href}`
        : `\n\n— Nguồn trích dẫn (APA 7th): Lê, H. T. (2026). ${titleForCite}. ${Brand.projectName}. Truy cập tại: ${window.location.href}`;
      if (e.clipboardData && typeof e.clipboardData.setData === "function") {
        e.preventDefault();
        e.clipboardData.setData("text/plain", text + citationLine);
      }
    } catch (_err) {
      // ignore clipboard restrictions
    }
  });

  // Full Dual Router (Clean Path History API + Legacy Hash Fallback) & Dynamic SEO
  let isApplyingHashRoute = false;
  const VALID_HASH_PAGES = new Set([
    "home", "explore", "history", "philosophy", "traditional", "paintings",
    "museum", "regions", "sino-vietnam", "business", "library", "learning", "about", "legal"
  ]);
  const CLEAN_PAGE_PATHS = {
    home: "/",
    explore: "/explore",
    history: "/lich-su",
    philosophy: "/triet-hoc",
    traditional: "/van-hoa",
    paintings: "/quoc-hoa",
    museum: "/bao-tang",
    regions: "/tinh-thanh",
    "sino-vietnam": "/trung-viet",
    business: "/kinh-doanh",
    library: "/thu-vien",
    learning: "/hoc-tap",
    about: "/gioi-thieu",
    legal: "/phap-ly"
  };
  const PATH_TO_PAGE = Object.entries(CLEAN_PAGE_PATHS).reduce((acc, [page, p]) => {
    acc[p] = page;
    return acc;
  }, { "/kham-pha": "explore" });
  const SITE_ORIGIN =
    window.location.protocol === "http:" || window.location.protocol === "https:"
      ? (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1"
          ? "https://chinese-culture-explorer.netlify.app"
          : window.location.origin)
      : "https://chinese-culture-explorer.netlify.app";

  function routeSlugToPath(routeSlug) {
    const clean = String(routeSlug || "").replace(/^#/, "").trim();
    if (!clean || clean === "home") return "/";
    if (clean.startsWith("article=")) return `/chuyen-luan/${encodeURIComponent(clean.replace("article=", "").trim())}`;
    if (clean.startsWith("province=")) return `/tinh-thanh/${encodeURIComponent(clean.replace("province=", "").trim())}`;
    if (clean.startsWith("painting=")) return `/quoc-hoa/${encodeURIComponent(clean.replace("painting=", "").trim())}`;
    if (clean.startsWith("artifact=")) return `/bao-tang/${encodeURIComponent(clean.replace("artifact=", "").trim())}`;
    return CLEAN_PAGE_PATHS[clean] || `/${clean}`;
  }

  function syncHashFromState(routeSlug) {
    if (isApplyingHashRoute || !routeSlug) return;
    if (window.location.protocol === "http:" || window.location.protocol === "https:") {
      const targetPath = routeSlugToPath(routeSlug);
      if (window.location.pathname !== targetPath || window.location.hash) {
        try {
          window.history.pushState(null, "", targetPath);
        } catch (_err) {
          // fallback below
        }
      }
      return;
    }
    const desired = routeSlug.startsWith("#") ? routeSlug : `#${routeSlug}`;
    if (window.location.hash !== desired) {
      window.location.hash = desired;
    }
  }

  function updateDocumentSeoMeta() {
    const state = Store.getState();
    const activePage = state.activePage || "home";
    const enSeo = isEnglishUi();
    const aCnt = Articles.length;
    const pCnt = PaintingsList.length;
    const mCnt = (Museum.artifacts || []).length;
    const cCnt = (Philosophy && Philosophy.classicalTexts ? Philosophy.classicalTexts.length : 30);
    const dCnt = Dictionary.length;
    let title = "CHINESE CULTURE EXPLORER – 中国文化探索";
    let description = enSeo
      ? `Explore Chinese Civilization: ${aCnt} scholarly monographs, ${cCnt} Four Treasuries classics, ${pCnt} painting masterpieces, ${mCnt} digital museum artifacts, and 34 provincial dossiers.`
      : `Khám phá văn minh Trung Hoa: ${aCnt} chuyên luận khảo cứu, ${cCnt} cổ tịch Tứ Khố, ${pCnt} kiệt tác quốc họa, ${mCnt} bảo vật bảo tàng và hồ sơ địa văn hóa 34 tỉnh thành.`;
    let canonicalPath = CLEAN_PAGE_PATHS[activePage] || "/";
    let ogImageSrc = "assets/images/museum/forbidden-city-imperial-axis-gate.jpg";
    const isRasterSrc = (s) => Boolean(s) && !/\.svg(?:$|\?)/i.test(String(s));
    const pickFirstRaster = (...cands) => cands.find((s) => isRasterSrc(s)) || ogImageSrc;
    let jsonLd = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: title,
      url: `${SITE_ORIGIN}${canonicalPath}`,
      author: { "@type": "Person", name: "Lê Hưng Thịnh" }
    };

    if (activePage === "article" && ui.activeArticleId) {
      const art = Articles.find((a) => a.id === ui.activeArticleId);
      if (art) {
        canonicalPath = `/chuyen-luan/${encodeURIComponent(art.id)}`;
        const enArtPack = enSeo ? getArticleEnPack(art.id) : null;
        const locTitle = (enArtPack && enArtPack.title) || (enSeo ? art.titleEn : null) || art.titleVi;
        title = `${locTitle} – CHINESE CULTURE EXPLORER`;
        const absText = (enArtPack && enArtPack.abstract) || (typeof art.abstract === "string"
          ? art.abstract
          : (art.abstract && (enSeo ? art.abstract.en || art.abstract.vi || art.abstract.text : art.abstract.vi || art.abstract.text))) || art.introduction || description;
        description = String(absText).replace(/<[^>]+>/g, "").slice(0, 158);
        const ed = getArticleEditorial(art.id);
        const edHeroImg = ed && ed.heroImageId ? getEditorialImage(ed.heroImageId) : null;
        const galleryRaster = ed && Array.isArray(ed.galleryImageIds)
          ? ed.galleryImageIds.map((gid) => getEditorialImage(gid)).find((g) => g && isRasterSrc(g.src))
          : null;
        const acadFallback = getAcademicPhotoForItem(art.category, art.id, art.number || 0);
        ogImageSrc = pickFirstRaster(
          art.heroImage && art.heroImage.src,
          edHeroImg && edHeroImg.src,
          galleryRaster && galleryRaster.src,
          acadFallback && acadFallback.src,
          ogImageSrc
        );
        jsonLd = {
          "@context": "https://schema.org",
          "@type": "ScholarlyArticle",
          headline: locTitle,
          alternativeHeadline: `${art.titleZh || ""} ${art.titleEn || ""}`.trim(),
          description,
          image: /^https?:\/\//i.test(ogImageSrc) ? ogImageSrc : `${SITE_ORIGIN}/${ogImageSrc.replace(/^\/+/, "")}`,
          author: { "@type": "Person", name: "Lê Hưng Thịnh" },
          mainEntityOfPage: `${SITE_ORIGIN}${canonicalPath}`,
          isAccessibleForFree: true
        };
      }
    } else if (ui.activeProvinceId) {
      const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
      const pr = provinces.find((p) => p.id === ui.activeProvinceId);
      if (pr) {
        canonicalPath = `/tinh-thanh/${encodeURIComponent(pr.id)}`;
        title = enSeo
          ? `${pr.nameEn || pr.nameVi} (${pr.nameZh}) – 34 Provincial Dossiers | CCE`
          : `${pr.nameVi} (${pr.nameZh}) – Địa văn hóa 34 Tỉnh/Thành | CCE`;
        description = String(enVal(pr, "highlights") || enVal(pr, "economy") || description).slice(0, 158);
        ogImageSrc = pickFirstRaster(
          pr.image,
          pr.heroImage,
          (getAcademicPhotoForItem("regions", pr.id, 0) || {}).src,
          ogImageSrc
        );
      }
    } else if (activePage === "paintings" && ui.activePaintingId) {
      const pt = PaintingsList.find((p) => p.id === ui.activePaintingId);
      if (pt) {
        canonicalPath = `/quoc-hoa/${encodeURIComponent(pt.id)}`;
        title = enSeo
          ? `${pt.titleEn || pt.titleVi} (${pt.titleZh || ""}) – ${PaintingsList.length} Masterpieces of Chinese Painting | CCE`
          : `${pt.titleVi} (${pt.titleZh || ""}) – ${PaintingsList.length} Kiệt tác Quốc họa | CCE`;
        const pAnalysis = (enSeo && pt.analysisEn) || pt.analysis;
        description = String((pAnalysis && (pAnalysis.artisticLegacy || pAnalysis.historicalBackground)) || enVal(pt, "significance") || enVal(pt, "composition") || enVal(pt, "overview") || description).replace(/<[^>]+>/g, "").slice(0, 158);
        ogImageSrc = pickFirstRaster(pt.imageUrl, pt.image, pt.src, ogImageSrc);
      }
    } else if (activePage === "museum" && ui.activeArtifactId) {
      const af = (Museum.artifacts || []).find((m) => m.id === ui.activeArtifactId);
      if (af) {
        canonicalPath = `/bao-tang/${encodeURIComponent(af.id)}`;
        title = enSeo
          ? `${af.nameEn || af.nameVi} (${af.nameZh || ""}) – Digital Museum | CCE`
          : `${af.nameVi} (${af.nameZh || ""}) – Bảo tàng Số | CCE`;
        description = String(enVal(af, "culturalSignificance") || enVal(af, "historicalContext") || description).replace(/<[^>]+>/g, "").slice(0, 158);
        ogImageSrc = pickFirstRaster(af.imageUrl, af.src, ogImageSrc);
      }
    } else {
      const pageTitles = enSeo ? {
        explore: `Knowledge Directory & ${aCnt} Monographs — CHINESE CULTURE EXPLORER`,
        history: "Chinese History Across 14 Eras — CHINESE CULTURE EXPLORER",
        philosophy: "Chinese Philosophy and Foundational Classics — CHINESE CULTURE EXPLORER",
        traditional: "Traditional Architecture, Heritage and Customs — CHINESE CULTURE EXPLORER",
        library: `Four Treasuries Classics (${cCnt} Works) and Archive — CHINESE CULTURE EXPLORER`,
        paintings: `${pCnt} Masterpieces of Chinese Painting — CHINESE CULTURE EXPLORER`,
        museum: `Digital Museum of ${mCnt} Cultural Artifacts — CHINESE CULTURE EXPLORER`,
        regions: "34 Provincial Divisions and 16 Historic Cities — CHINESE CULTURE EXPLORER",
        "sino-vietnam": "China–Vietnam Cultural and Commercial Heritage — CHINESE CULTURE EXPLORER",
        business: "Chinese Business Culture and Bilateral Trade — CHINESE CULTURE EXPLORER",
        learning: `Liushu Lexicon (${dCnt} Entries) and Learning System — CHINESE CULTURE EXPLORER`,
        about: "About the Project and Founder's Note — Lê Hưng Thịnh | CHINESE CULTURE EXPLORER"
      } : {
        explore: `Mục lục ${aCnt} chuyên luận và tri thức Trung Hoa — CHINESE CULTURE EXPLORER`,
        history: "Lịch sử Trung Hoa qua 14 thời kỳ — CHINESE CULTURE EXPLORER",
        philosophy: "Triết học Trung Hoa, Tứ Thư và Ngũ Kinh — CHINESE CULTURE EXPLORER",
        traditional: "Văn hóa cổ truyền, kiến trúc và lễ nghi Trung Hoa — CHINESE CULTURE EXPLORER",
        library: `Thư viện ${cCnt} cổ tịch Tứ Khố và tư liệu đối chiếu — CHINESE CULTURE EXPLORER`,
        paintings: `${pCnt} kiệt tác Quốc họa Trung Hoa — CHINESE CULTURE EXPLORER`,
        museum: `Bảo tàng số ${mCnt} bảo vật văn hiến — CHINESE CULTURE EXPLORER`,
        regions: "34 tỉnh thành và 16 đô thị lịch sử Trung Hoa — CHINESE CULTURE EXPLORER",
        "sino-vietnam": "Giao lưu văn hiến và kinh tế Việt – Trung — CHINESE CULTURE EXPLORER",
        business: "Văn hóa kinh doanh và thương mại Việt – Trung — CHINESE CULTURE EXPLORER",
        learning: `Hệ thống học tập và từ điển Lục thư ${dCnt} mục từ — CHINESE CULTURE EXPLORER`,
        about: "Giới thiệu dự án và tâm thư sáng lập viên Lê Hưng Thịnh — CHINESE CULTURE EXPLORER"
      };
      if (pageTitles[activePage]) title = pageTitles[activePage];
      if (activePage !== "home") {
        const secBanner = getAcademicPhotoForItem("section", activePage, 0);
        ogImageSrc = pickFirstRaster(secBanner && secBanner.src, ogImageSrc);
      }
    }

    const ogImageUrl = /^https?:\/\//i.test(ogImageSrc)
      ? ogImageSrc
      : `${SITE_ORIGIN}/${String(ogImageSrc).replace(/^\/+/, "")}`;

    const stripMd = (s) => String(s || "").replace(/\*{1,2}([^*]+?)\*{1,2}/g, "$1");
    title = stripMd(title);
    description = stripMd(description);
    document.title = title;
    const descEl = document.querySelector('meta[name="description"]');
    if (descEl) descEl.setAttribute("content", description);
    const canonEl = document.getElementById("cce-canonical");
    if (canonEl) canonEl.setAttribute("href", `${SITE_ORIGIN}${canonicalPath}`);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", description);
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute("content", `${SITE_ORIGIN}${canonicalPath}`);
    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute("content", ogImageUrl);
    const twTitle = document.querySelector('meta[name="twitter:title"]');
    if (twTitle) twTitle.setAttribute("content", title);
    const twDesc = document.querySelector('meta[name="twitter:description"]');
    if (twDesc) twDesc.setAttribute("content", description);
    const twImg = document.querySelector('meta[name="twitter:image"]');
    if (twImg) twImg.setAttribute("content", ogImageUrl);
    const ldEl = document.getElementById("cce-jsonld");
    if (ldEl) ldEl.textContent = JSON.stringify(jsonLd);
  }

  function applyRouteFromHash(rawHash) {
    const clean = String(rawHash || "").replace(/^#/, "").trim();
    if (!clean) return false;
    isApplyingHashRoute = true;
    let handled = false;
    try {
      if (clean.startsWith("article=")) {
        const hashId = clean.replace("article=", "").trim();
        if (Articles.some((a) => a.id === hashId)) {
          ui.activeArticleId = hashId;
          ui.activeProvinceId = null;
          ui.activePaintingId = null;
          ui.activeArtifactId = null;
          Store.setPage("article");
          window.scrollTo({ top: 0, behavior: "instant" });
          handled = true;
        } else if (Lazy) {
          Lazy.ensureForState("article", Store.getState().uiLang, { needs3d: hashId === "forbidden-city-3d-dissection" }).then(() => {
            if (Articles.some((a) => a.id === hashId)) {
              ui.activeArticleId = hashId;
              Store.setPage("article");
              render();
            }
          });
        }
      } else if (clean.startsWith("province=")) {
        const provId = clean.replace("province=", "").trim();
        const provinces = Regions.provincesDirectory || Regions.provincialDirectory || [];
        if (provinces.some((p) => p.id === provId)) {
          ui.regionViewMode = "directory";
          ui.activeProvinceId = provId;
          Store.setPage("regions");
          window.scrollTo({ top: 0, behavior: "instant" });
          handled = true;
        }
      } else if (clean.startsWith("painting=")) {
        const paintId = clean.replace("painting=", "").trim();
        if (PaintingsList.some((p) => p.id === paintId)) {
          ui.activePaintingId = paintId;
          Store.setPage("paintings");
          window.scrollTo({ top: 0, behavior: "instant" });
          handled = true;
        } else if (Lazy) {
          Lazy.ensureForState("paintings", Store.getState().uiLang).then(() => {
            if (PaintingsList.some((p) => p.id === paintId)) {
              ui.activePaintingId = paintId;
              Store.setPage("paintings");
              render();
            }
          });
        }
      } else if (clean.startsWith("artifact=")) {
        const artId = clean.replace("artifact=", "").trim();
        if ((Museum.artifacts || []).some((m) => m.id === artId)) {
          ui.activeArtifactId = artId;
          Store.setPage("museum");
          window.scrollTo({ top: 0, behavior: "instant" });
          handled = true;
        } else if (Lazy) {
          Lazy.ensureForState("museum", Store.getState().uiLang).then(() => {
            if ((Museum.artifacts || []).some((m) => m.id === artId)) {
              ui.activeArtifactId = artId;
              Store.setPage("museum");
              render();
            }
          });
        }
      } else if (clean === "founder-message-section" || clean === "about#founder-message-section") {
        Store.setPage("about");
        setTimeout(() => {
          const el = document.getElementById("founder-message-section");
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
        handled = true;
      } else {
        const routeAliases = { articles: "explore", research: "library", knowledge: "library", archive: "library" };
        const mappedPage = routeAliases[clean] || clean;
        if (VALID_HASH_PAGES.has(mappedPage)) {
          ui.activeArticleId = null;
          ui.activeProvinceId = null;
          ui.activePaintingId = null;
          ui.activeArtifactId = null;
          Store.setPage(mappedPage);
          window.scrollTo({ top: 0, behavior: "instant" });
          handled = true;
        }
      }
    } finally {
      isApplyingHashRoute = false;
    }
    return handled;
  }

  function isIdentityCallbackHash(h) {
    return /(?:access_token=|id_token=|invite_token=|confirmation_token=|recovery_token=|email_change_token=|error_description=)/.test(String(h || ""));
  }

  function applyRouteFromLocation() {
    if (window.location.hash && !isIdentityCallbackHash(window.location.hash)) {
      if (applyRouteFromHash(window.location.hash)) {
        if (window.location.protocol === "http:" || window.location.protocol === "https:") {
          const cleanSlug = window.location.hash.replace(/^#/, "");
          if (cleanSlug !== "founder-message-section" && cleanSlug !== "about#founder-message-section") {
            try {
              window.history.replaceState(null, "", routeSlugToPath(cleanSlug));
            } catch {}
          }
        }
        return;
      }
    }

    const rawPath = ((window.location.pathname || "/")
      .replace(/^\/seo_pages(?=\/|$)/i, "")
      .replace(/\.html$/i, "")
      .replace(/\/+$/, "")) || "/";
    if (rawPath === "/" || rawPath === "/index") {
      isApplyingHashRoute = true;
      ui.activeArticleId = null;
      ui.activeProvinceId = null;
      ui.activePaintingId = null;
      ui.activeArtifactId = null;
      Store.setPage("home");
      isApplyingHashRoute = false;
      return;
    }

    const articleMatch = rawPath.match(/^\/(?:chuyen-luan|article)\/([^/]+)$/);
    if (articleMatch) {
      applyRouteFromHash(`article=${decodeURIComponent(articleMatch[1])}`);
      return;
    }
    const provMatch = rawPath.match(/^\/(?:tinh-thanh|province)\/([^/]+)$/);
    if (provMatch) {
      applyRouteFromHash(`province=${decodeURIComponent(provMatch[1])}`);
      return;
    }
    const paintMatch = rawPath.match(/^\/(?:quoc-hoa|painting)\/([^/]+)$/);
    if (paintMatch) {
      applyRouteFromHash(`painting=${decodeURIComponent(paintMatch[1])}`);
      return;
    }
    const artMatch = rawPath.match(/^\/(?:bao-tang|artifact)\/([^/]+)$/);
    if (artMatch) {
      applyRouteFromHash(`artifact=${decodeURIComponent(artMatch[1])}`);
      return;
    }

    const mappedPage = PATH_TO_PAGE[rawPath] || rawPath.slice(1);
    if (VALID_HASH_PAGES.has(mappedPage)) {
      applyRouteFromHash(mappedPage);
    } else {
      isApplyingHashRoute = true;
      Store.setPage("home");
      isApplyingHashRoute = false;
    }
  }

  window.addEventListener("hashchange", () => {
    if (window.location.hash && !isIdentityCallbackHash(window.location.hash)) {
      applyRouteFromHash(window.location.hash);
    }
  });

  window.addEventListener("popstate", () => {
    applyRouteFromLocation();
    const st = Store.getState();
    hydratePageBundles(st.activePage || "home", st.uiLang || "vi");
    if (CceRouter) CceRouter.restoreScroll();
  });

  // Initialize Auth, Store, Clean Path Routing, and Render
  Store.subscribe((nextState, reason) => {
    if (reason === "theme") {
      patchHeaderThemeOnly();
      return;
    }
    if (reason === "reading") {
      return;
    }
    if (reason === "bookmark") {
      syncBookmarkButtonsInDom();
      if (hasAnyOpenModalState()) renderModalsOnly();
      if (Store.getState().activePage === "learning") patchMainOnly();
      return;
    }
    if (reason === "vocab") {
      if (hasAnyOpenModalState()) renderModalsOnly();
      if (Store.getState().activePage === "learning" || Store.getState().activePage === "article") {
        patchMainOnly();
      }
      return;
    }
    if (reason === "font" && Store.getState().activePage === "article") {
      patchMainOnly();
      return;
    }
    render();
    if (nextState && nextState.activePage) {
      hydratePageBundles(nextState.activePage, nextState.uiLang || "vi", {
        needs3d: ui.activeArticleId === "forbidden-city-3d-dissection"
      });
    }
  });
  Auth.subscribe(render);
  Store.init();
  try {
    const qpLang = new URLSearchParams(window.location.search || "").get("lang");
    if (qpLang && ["vi", "en", "zh-CN", "zh-TW"].includes(qpLang)) {
      Store.setUiLang(qpLang);
    }
  } catch {}
  window.CCE_RENDER = render;
  window.CCE_PATCH_MAIN = patchMainOnly;
  window.CCE_RENDER_MODALS = renderModalsOnly;
  window.CCE_SELECT_MAP_PROVINCE = (pid) => {
    if (!pid) return;
    ui.selectedMapProvinceId = pid;
    patchMainOnly();
  };
  applyRouteFromLocation();
  if (/#(?:access_token|confirmation_token|invite_token|recovery_token|email_change_token|error)=/i.test(window.location.hash || "")) {
    Auth.init();
  }
  render();
  if (window.CCETransition && typeof window.CCETransition.finishInitialSplash === "function") {
    window.CCETransition.finishInitialSplash();
  }
  hydratePageBundles(Store.getState().activePage || "home", Store.getState().uiLang || "vi", {
    needs3d: ui.activeArticleId === "forbidden-city-3d-dissection"
  });
  if (Lazy && typeof Lazy.warmAllInIdle === "function") Lazy.warmAllInIdle();
  if (CceSearch && typeof CceSearch.warmIdle === "function") CceSearch.warmIdle();
  if (typeof window !== "undefined") {
    let progressRaf = 0;
    const syncReadProgress = () => {
      progressRaf = 0;
      const bar = document.getElementById("cce-v8-read-progress");
      if (!bar) return;
      if (Store.getState().activePage !== "article") {
        bar.style.width = "0%";
        return;
      }
      const docEl = document.documentElement;
      const maxScroll = Math.max(1, (docEl.scrollHeight || 0) - window.innerHeight);
      const pct = Math.min(100, Math.max(0, (window.scrollY / maxScroll) * 100));
      bar.style.width = pct.toFixed(1) + "%";
    };
    window.addEventListener("scroll", () => {
      if (!progressRaf && typeof window.requestAnimationFrame === "function") {
        progressRaf = window.requestAnimationFrame(syncReadProgress);
      }
    }, { passive: true });
  }
  if (typeof navigator !== "undefined" && "serviceWorker" in navigator && window.location.protocol !== "file:") {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    });
  }
})();
