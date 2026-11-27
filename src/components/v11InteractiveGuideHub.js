// ============================================================================
// CHINESE CULTURE EXPLORER v11.2 — Interactive Multi-Channel Discovery Suite
// 1. Dual-Mode Sticky Context Anchor Bar + Live Scroll Progress + Scroll-Spy
// 2. Field & Fast-Track 6-Card Numbered Bento Hub + Bilingual Driver Cards
// 3. 3-Persona Interactive Selector + Sticky 01/04 Stage & Scroll Walkthrough
// 4. Multi-Faceted Lão Tự Hiệu Heritage Brand & 34-Province Culinary/Tea Explorer
// 5. Split Scholarly & Field FAQ Accordion + Cross-Page Knowledge Synthesis Strip
// Pure ES5 IIFE — Strictly scholarly content, Zero UI emojis, WCAG AAA ready.
// ============================================================================
(function () {
  "use strict";

  var st = {
    fieldMode: false,
    persona: "scholar", // "scholar" | "traveler" | "b2b"
    activeStep: 0,
    brandQuery: "",
    brandCat: "all",
    brandShowAll: false,
    dishQuery: "",
    dishRegion: "all",
    dishFlavor: "all",
    dishShowAll: false,
    faqCat: "all",
    openFaqIdx: 0,
    driverModalIdx: -1,
    driverGroup: "all",
    bound: false,
    scrollRaf: 0,
    stepObserver: null
  };

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function speakZh(zh) {
    if (!zh || typeof window === "undefined") return;
    if (window.CCE_SPEECH && typeof window.CCE_SPEECH.speak === "function") {
      try { window.CCE_SPEECH.speak(zh, "zh-CN"); return; } catch (_e) {}
    }
    if (window.speechSynthesis && typeof window.SpeechSynthesisUtterance === "function") {
      try {
        window.speechSynthesis.cancel();
        var u = new window.SpeechSynthesisUtterance(zh);
        u.lang = "zh-CN";
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      } catch (_e2) {}
    }
  }

  function speakBtnHtml(zh, title) {
    if (!zh) return "";
    return '<button type="button" class="tts-speak-btn" data-v11-speak="' + esc(zh) + '" title="' + esc(title || "Nghe phát âm zh-CN") + '" aria-label="' + esc(title || "Nghe phát âm zh-CN") + '"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg></button>';
  }

  // --------------------------------------------------------------------------
  // CURATED DATASET 1: 3 Personas × 4 Guided Steps (All Wired to Real Corpus)
  // --------------------------------------------------------------------------
  var PERSONAS = {
    scholar: {
      id: "scholar",
      badgeVi: "NGHIÊN CỨU & VĂN HIẾN",
      badgeEn: "SCHOLARLY ARCHIVE",
      titleVi: "Nghiên cứu Văn hiến, Triết học & Cổ văn",
      titleEn: "Historical Texts, Philosophy & Classical Arts",
      subVi: "330 chuyên luận · Đấu Củng 3D · 72 Quốc họa · Kho Hán–Nôm",
      subEn: "330 Monographs · 3D Dougong · 72 Master Paintings · Han-Nom",
      steps: [
        {
          code: "01",
          badgeVi: "KIẾN TRÚC & VŨ TRỤ LUẬN",
          badgeEn: "IMPERIAL COSMOLOGY",
          titleVi: "Khảo sát Cấu trúc Đấu Củng & Thiên Đàn 3D",
          titleEn: "Inspect Interlocking Dougong & Temple of Heaven 3D",
          descVi: "Đối sánh mộng gỗ không dùng đinh sắt tại Tử Cấm Thành (8.707 gian thực đo năm 1973), Kỳ Niên Điện và hệ Trùng thiềm điệp ốc Cố đô Huế qua mô hình WebGL PBR tương tác.",
          descEn: "Examine nail-free interlocking brackets across 8,707 verified bays in Beijing alongside Hue's monsoon-tuned twin-roof carpentry in interactive PBR WebGL.",
          zh: "斗拱 · 天坛祈年殿",
          py: "Dǒugǒng · Tiāntán Qíniándiàn",
          ctaVi: "Đọc chuyên luận Thiên Đàn 3D →",
          ctaEn: "Open Temple of Heaven Monograph →",
          act: "article",
          targetId: "temple-of-heaven-tiantan-cosmology-3d"
        },
        {
          code: "02",
          badgeVi: "CHỮ VIẾT & ÂM VẬN CỔ",
          badgeEn: "PHONOLOGY & LIUSHU",
          titleVi: "Giải mã Lục Thư, Ngữ âm Trung cổ & Chữ Nôm",
          titleEn: "Trace Liushu Radicals, Middle Chinese & Chu Nom",
          descVi: "Học chữ Hán theo 6 phép cấu tạo Lục Thư, đối chiếu âm đọc Hán–Việt bảo lưu phụ âm đầu – thanh điệu Đường–Tống và kho thơ đi sứ Bắc Hành Tạp Lục.",
          descEn: "Study Six-Script character etymology paired with Sino-Vietnamese phonological fossils preserving Tang-Song coda consonants.",
          zh: "六书 · 汉越音",
          py: "Liùshū · Hàn-Yuèyīn",
          ctaVi: "Mở chuyên luận Ngữ âm Hán–Việt →",
          ctaEn: "Open Sino-Viet Phonology →",
          act: "article",
          targetId: "han-viet-phonology-middle-chinese"
        },
        {
          code: "03",
          badgeVi: "TRIỂN LÃM & CỔ VẬT SỐ",
          badgeEn: "NATIONAL TREASURES",
          titleVi: "Phóng đại 72 Quốc họa & 199 Quốc bảo 3D",
          titleEn: "Magnify 72 Scrolls & Inspect 199 Artifacts",
          descVi: "Phóng to 3.2x nét cọ Thanh Minh Thượng Hà Đồ, Thiên Lý Giang Sơn Đồ cùng mô hình 3D Hậu Mẫu Mậu Đỉnh, Ngọc Tông Lương Chử và Chuông Biên chung 65 quả.",
          descEn: "Zoom 3.2x into mineral-pigment silk scrolls and rotate PBR 3D reconstructions of Shang cauldrons, Liangzhu jade cong, and chime bells.",
          zh: "清明上河图 · 后母戊鼎",
          py: "Qīngmíng Shànghé Tú",
          ctaVi: "Vào Phòng Bảo tàng 3D →",
          ctaEn: "Launch 3D Museum Studio →",
          act: "page",
          page: "museum",
          sub: "studio3d"
        },
        {
          code: "04",
          badgeVi: "PHÁP CHẾ & KHOA CỬ",
          badgeEn: "LAW & EXAMINATIONS",
          titleVi: "Đối chiếu Đường Luật – Luật Hồng Đức & Khoa cử",
          titleEn: "Compare Tang Code, Hong Duc Law & Keju",
          descVi: "Phân tích cấu trúc Bộ luật Đường Luật Sơ Nghị (502 điều) trong mối liên hệ sáng tạo với Quốc triều Hình luật (Hồng Đức) và văn hóa sĩ đại phu qua khoa cử.",
          descEn: "Analyze how Tang statutory architecture entered East Asian jurisprudence and was adapted into Vietnam's 15th-century Hong Duc Code.",
          zh: "唐律疏议 · 科举",
          py: "Tánglǜ Shūyì · Kējǔ",
          ctaVi: "Đọc Đường Luật & Hồng Đức →",
          ctaEn: "Open Tang Code & Hong Duc →",
          act: "article",
          targetId: "tang-code-imperial-law-hong-duc"
        }
      ]
    },
    traveler: {
      id: "traveler",
      badgeVi: "THỰC ĐỊA & DI CHUYỂN",
      badgeEn: "FIELD & TRANSIT GUIDE",
      titleVi: "Chuẩn bị Thực địa, Tàu 12306 & Du lịch 34 Tỉnh",
      titleEn: "Pre-Trip Logistics, 12306 HSR & 34-Province Trails",
      subVi: "Alipay/WeChat · Hộ chiếu tàu G · eSIM & Gaode · 240h Quá cảnh",
      subEn: "Alipay KYC · Passport Rail Gates · Gaode Amap · 48h Trails",
      steps: [
        {
          code: "01",
          badgeVi: "HẠ TẦNG SỐ & THANH TOÁN",
          badgeEn: "CASHLESS & CONNECTIVITY",
          titleVi: "Thiết lập Alipay, WeChat Pay & eSIM trước khi bay",
          titleEn: "Bind Alipay, WeChat Pay & Roaming eSIM Pre-Flight",
          descVi: "Xác thực hộ chiếu cho cả Alipay và WeChat Pay trước giờ khởi hành; giao dịch lẻ <= 200 RMB miễn phí 3% thẻ quốc tế. Dùng eSIM roaming cùng Gaode (Amap) tìm cửa ra tàu điện.",
          descEn: "Verify passport KYC on Alipay and WeChat Pay pre-departure (transactions <= 200 RMB waive the 3% card fee) alongside Amap navigation.",
          zh: "支付宝 · 微信支付 · 高德地图",
          py: "Zhīfùbǎo · Gāodé Dìtú",
          ctaVi: "Mở Hành trang Thực địa →",
          ctaEn: "Open Readiness Hub →",
          act: "page",
          page: "regions",
          sub: "readiness"
        },
        {
          code: "02",
          badgeVi: "ĐƯỜNG SẮT CAO TỐC 12306",
          badgeEn: "RAILWAY 12306 PASSPORT BOARDING",
          titleVi: "Mua vé tàu G trên 12306 & Vào cổng Bằng Hộ chiếu",
          titleEn: "Book G-Trains via 12306 & Board with Physical Passport",
          descVi: "Dùng mục English trong ứng dụng Railway 12306, chọn thanh toán quốc tế; tới ga tàu đi thẳng làn nhân viên (Manual Inspection Lane) quét hộ chiếu gốc, không cần in vé giấy.",
          descEn: "Reserve HSR seats directly inside 12306 English edition and scan your physical passport at staffed station gates across all 34 divisions.",
          zh: "中国铁路12306 · 人工通道",
          py: "Zhōngguó Tiělù 12306",
          ctaVi: "Xem Cẩm nang Điểm đến 3 Cấp →",
          ctaEn: "Open 3-Tier Travel Atlas →",
          act: "page",
          page: "regions",
          sub: "expeditions"
        },
        {
          code: "03",
          badgeVi: "TRÀ ĐẠO & VĂN HÓA BẢN ĐỊA",
          badgeEn: "YUNNAN TEA-HORSE & CUISINE",
          titleVi: "Theo dấu Trà Mã Cổ Đạo & Rừng Trà Cổ Cảnh Mại",
          titleEn: "Follow the Tea-Horse Road & Jingmai UNESCO Forests",
          descVi: "Khám phá sự tiến hóa từ trà ép bánh Phổ Nhĩ sống (Sinh trà) sang công nghệ ủ đống ướt Côn Minh 1973 (Thục trà) và 170+ món đặc sản Bát Đại Thái Hệ.",
          descEn: "Explore how raw compressed Pu'erh tea evolved into 1973 Kunming wet-piling fermentation alongside 8 Great Regional Cuisines.",
          zh: "普洱茶 · 景迈山 · 茶马古道",
          py: "Pǔ'ěrchá · Chámǎ Gǔdào",
          ctaVi: "Đọc Chuyên luận Trà Phổ Nhĩ →",
          ctaEn: "Open Yunnan Pu'erh Monograph →",
          act: "article",
          targetId: "yunnan-puerh-tea-ancient-tea-horse-road-fermentation-heritage"
        },
        {
          code: "04",
          badgeVi: "GIAO TIẾP THỰC ĐỊA TỨC THÌ",
          badgeEn: "SHOW-TO-DRIVER CARDS",
          titleVi: "Thẻ Hán tự Khổ lớn cho Tài xế, Ga tàu & Gọi món",
          titleEn: "High-Contrast Bilingual Cards for Drivers & Dining",
          descVi: "Mở ngay bộ thẻ song ngữ chữ lớn kèm phát âm giọng Bắc Kinh (Không rau mùi, Ít cay, Xuất hóa đơn Fapiao, Ga cao tốc gần nhất, Dị ứng lạc/hải sản).",
          descEn: "Display large bilingual Mandarin cards with native TTS audio for taxi drivers, Fapiao invoices, allergies, and HSR stations.",
          zh: "请送我去高铁站 · 少辣",
          py: "Qǐng sòng wǒ qù gāotiězhàn",
          ctaVi: "Mở Thẻ Giao tiếp Ngay →",
          ctaEn: "Open Show-to-Driver Cards →",
          act: "driver",
          targetId: "0"
        }
      ]
    },
    b2b: {
      id: "b2b",
      badgeVi: "GIAO THƯƠNG & HỌC THUẬT",
      badgeEn: "B2B TRADE & CSC",
      titleVi: "Giao thương B2B, ACFTA 3.0 & Học bổng CSC",
      titleEn: "B2B Contracts, ACFTA 3.0 & CSC Scholarships",
      subVi: "Công chương 公章 · CIETAC/VIAC · Hoa Cường Bắc · HSK 7–9",
      subEn: "Company Seal · CIETAC/VIAC · Shenzhen · HSK 7–9",
      steps: [
        {
          code: "01",
          badgeVi: "PHÁP CHẾ HỢP ĐỒNG B2B",
          badgeEn: "B2B LEGAL VALIDITY",
          titleVi: "Công chương Đỏ (公章), Ngôn ngữ Ưu tiên & QC",
          titleEn: "Company Seal Verification, Governing Language & QC",
          descVi: "Theo Luật Dân sự & Công ty Trung Quốc, chữ ký tay thiếu con dấu tròn Công chương (hoặc Hợp đồng chương) rất dễ vô hiệu. Soạn song ngữ chỉ định rõ bản ưu tiên & điều khoản AQL.",
          descEn: "Under PRC corporate law, verifying the red round Official Seal (Gongzhang) and AQL pre-shipment inspection clauses protects bilateral orders.",
          zh: "公司公章 · 合同章 · 仲裁",
          py: "Gōngsī Gōngzhāng · Zhòngcái",
          ctaVi: "Đọc Pháp chế Hợp đồng B2B →",
          ctaEn: "Open B2B Contract Monograph →",
          act: "article",
          targetId: "cross-border-b2b-contracts-cietac-viac"
        },
        {
          code: "02",
          badgeVi: "CHUỖI CUNG ỨNG & RCEP",
          badgeEn: "ACFTA 3.0 & SUPPLY CHAINS",
          titleVi: "Quy tắc Xuất xứ C/O Form E & Chuỗi Quảng Đông–VN",
          titleEn: "C/O Form E Origin Rules & Shenzhen–Vietnam Corridors",
          descVi: "Phân tích cơ chế kết nối cụm công nghiệp Thâm Quyến – Đông Hoàn – Phật Sơn với hành lang cửa khẩu Hữu Nghị – Móng Cái – Hải Phòng theo dữ liệu RCEP / ACFTA 3.0.",
          descEn: "Analyze Pearl River Delta sourcing and C/O Form E compliance linking Shenzhen–Dongguan with Hanoi–Hai Phong logistics gates.",
          zh: "中国—东盟自贸区 · 原产地证",
          py: "Yuánchǎndìzhèng · RCEP",
          ctaVi: "Đọc Chuỗi cung ứng Việt–Trung →",
          ctaEn: "Open Supply Chain Monograph →",
          act: "article",
          targetId: "china-vietnam-supply-chain-rcep"
        },
        {
          code: "03",
          badgeVi: "TỪ ĐỒNG HÌNH DỊ NGHĨA",
          badgeEn: "FALSE FRIENDS AUDIT",
          titleVi: "Tránh Bẫy 25 Cặp Từ Hán–Việt Dễ Nhầm Trong Hợp Đồng",
          titleEn: "Avoid 25 High-Risk Sino-Vietnamese Contract False Friends",
          descVi: "Các từ như 'Phương tiện (方便)', 'Chủ trương (主张)', 'Bồi thường (赔偿)' hay 'Khả năng (可能)' có sắc thái pháp lý khác biệt giữa tiếng Trung hiện đại và tiếng Việt.",
          descEn: "Inspect semantic divergence in shared legal and commercial terms across Mandarin and Vietnamese before signing binding annexes.",
          zh: "合同条款 · 语义辨析",
          py: "Hétong Tiáokuǎn",
          ctaVi: "Mở Phòng B2B & Từ đồng hình →",
          ctaEn: "Open B2B & False Friends →",
          act: "page",
          page: "business",
          sub: "b2b"
        },
        {
          code: "04",
          badgeVi: "HSK 7–9 & ĐẠI HỌC CSC",
          badgeEn: "HSK 7-9 & CSC ATLAS",
          titleVi: "Luyện Đọc Hiểu HSK 7–9 & Hồ sơ 36 Đại học CSC",
          titleEn: "Practice HSK 7–9 Passages & Browse 36 CSC Universities",
          descVi: "Trích đoạn học thuật cấp cao kèm dịch thuật, phân tích cấu trúc câu phức và bản đồ 36 trường đại học trọng điểm Trung Quốc tiếp nhận lưu học sinh Việt Nam.",
          descEn: "Study advanced HSK 7–9 readings alongside an atlas of 36 flagship Chinese universities for bilateral academic mobility.",
          zh: "高等中文水平 · 奖学金",
          py: "Gāoděng Zhōngwén",
          ctaVi: "Vào Phân khu HSK 7–9 →",
          ctaEn: "Open HSK 7–9 Academy →",
          act: "page",
          page: "learning",
          sub: "academic"
        }
      ]
    }
  };

  // --------------------------------------------------------------------------
  // CURATED DATASET 2: 24 Flagship Lão Tự Hiệu (with Real Verified Provinces)
  // --------------------------------------------------------------------------
  var CURATED_BRANDS = [
    { id: "b-trt", zh: "北京同仁堂", py: "Běijīng Tóngréntáng", nameVi: "Đồng Nhân Đường Bắc Kinh", nameEn: "Beijing Tongrentang", year: 1669, cat: "tcm", catVi: "Y dược cổ truyền", catEn: "Traditional Medicine", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Gia truyền ngự dược nhà Thanh (Khang Hi thứ 8): Lục Vị Địa Hoàng Hoàn, An Cung Ngưu Hoàng Hoàn theo chuẩn bào chế nghiêm ngặt.", craftEn: "Imperial Qing apothecary since 1669; famed for authentic pill compounding." },
    { id: "b-clj", zh: "广州陈李济", py: "Guǎngzhōu Chénlǐjì", nameVi: "Trần Lý Tế Quảng Châu", nameEn: "Guangzhou Chen Liji", year: 1600, cat: "tcm", catVi: "Y dược cổ truyền", catEn: "Traditional Medicine", cityVi: "Quảng Châu", cityEn: "Guangzhou", provId: "prov-guangdong", craftVi: "Hãng dược lâu đời kỷ lục Guinness thế giới với phát minh viên hoàn bọc sáp ong (Lạp hoàn) bảo quản chống ẩm khí hậu Lĩnh Nam.", craftEn: "Founded 1600; pioneered beeswax-sealed pills preserving herbal potency in humid climates." },
    { id: "b-hqyt", zh: "杭州胡庆余堂", py: "Hángzhōu Húqìngyútáng", nameVi: "Hồ Khánh Dư Đường Hàng Châu", nameEn: "Hangzhou Huqingyutang", year: 1874, cat: "tcm", catVi: "Y dược cổ truyền", catEn: "Traditional Medicine", cityVi: "Hàng Châu", cityEn: "Hangzhou", provId: "prov-zhejiang", craftVi: "'Giang Nam Dược Vương' do thương nhân Hồ Tuyết Nham lập với bia chữ 'Giới Khi' (Không lừa dối) treo ngược giữa đại sảnh.", craftEn: "Known as the Medicine King of Jiangnan, preserving historic 19th-century pharmacy halls." },
    { id: "b-pzh", zh: "漳州片仔癀", py: "Zhāngzhōu Piànzǎihuáng", nameVi: "Phiến Tử Hoàng Chương Châu", nameEn: "Zhangzhou Pien Tze Huang", year: 1555, cat: "tcm", catVi: "Y dược cổ truyền", catEn: "Traditional Medicine", cityVi: "Chương Châu", cityEn: "Zhangzhou", provId: "prov-fujian", craftVi: "Công thức bảo vệ gan mật bí truyền cung đình Minh truyền xuống Phúc Kiến từ thế kỷ XVI.", craftEn: "Late Ming court herbal formulation preserved in coastal Fujian since 1555." },
    { id: "b-ynby", zh: "云南白药", py: "Yúnnán Báiyào", nameVi: "Vân Nam Bạch Dược", nameEn: "Yunnan Baiyao", year: 1902, cat: "tcm", catVi: "Y dược cổ truyền", catEn: "Traditional Medicine", cityVi: "Côn Minh", cityEn: "Kunming", provId: "prov-yunnan", craftVi: "Y học vùng núi Vân Nam của danh y Khúc Hoán Chương chuyên trị cầm máu và chấn thương ngoại khoa.", craftEn: "Kunming hemostatic herbal pharmacology formulated by physician Qu Huanzhang in 1902." },
    { id: "b-mt", zh: "贵州茅台", py: "Guìzhōu Máotái", nameVi: "Quý Châu Mao Đài", nameEn: "Kweichow Moutai", year: 1704, cat: "tea-wine", catVi: "Danh trà & Danh tửu", catEn: "Tea & Heritage Liquor", cityVi: "Tuân Nghĩa", cityEn: "Zunyi", provId: "prov-guizhou", craftVi: "Quy trình ủ men Tương Hương 9 lần chưng 8 lần lên men 7 lần rút rượu tại thung lũng sông Xích Thủy.", craftEn: "Artisanal sorghum酱香baijiu crafted along the Chishui River basin through multi-stage fermentation." },
    { id: "b-wly", zh: "宜宾五粮液", py: "Yíbīn Wǔliángyè", nameVi: "Ngũ Lương Dịch Nghi Tân", nameEn: "Yibin Wuliangye", year: 1368, cat: "tea-wine", catVi: "Danh trà & Danh tửu", catEn: "Tea & Heritage Liquor", cityVi: "Nghi Tân", cityEn: "Yibin", provId: "prov-sichuan", craftVi: "Hầm bùn cổ thời Minh hơn 600 năm liên tục tại Nghi Tân phối hợp 5 loại ngũ cốc cao lương, gạo tẻ, gạo nếp, lúa mì, ngô.", craftEn: "Continuously operating Ming-era mud fermentation pits blending five regional grains." },
    { id: "b-wyt", zh: "北京吴裕泰", py: "Běijīng Wúyùtài", nameVi: "Ngô Dụ Thái Trà Trang", nameEn: "Beijing Wuyutai Tea", year: 1887, cat: "tea-wine", catVi: "Danh trà & Danh tửu", catEn: "Tea & Heritage Liquor", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Kỹ thuật ướp hương trà hoa nhài 9 lần (Cửu giáo) giữ trọn vị thanh khiết của búp trà xuân Giang Nam.", craftEn: "Nine-stage jasmine scenting craft uniting southern green tea leaves with northern tea culture." },
    { id: "b-dxh", zh: "西湖龙井·狮峰", py: "Xīhú Lóngjǐng", nameVi: "Trà Long Tỉnh Tây Hồ (Sư Phong)", nameEn: "West Lake Longjing Tea", year: 1751, cat: "tea-wine", catVi: "Danh trà & Danh tửu", catEn: "Tea & Heritage Liquor", cityVi: "Hàng Châu", cityEn: "Hangzhou", provId: "prov-zhejiang", craftVi: "10 kỹ thuật sao tay trong chảo gang nóng tạo dáng dẹt bóng hương hạt dẻ, đứng đầu Thập đại Danh trà.", craftEn: "Hand-panned flat green tea needles harvested ahead of Qingming above West Lake." },
    { id: "b-puer", zh: "勐海茶厂·大益", py: "Měnghǎi Dàyì", nameVi: "Xưởng Trà Mãnh Hải (Phổ Nhĩ)", nameEn: "Menghai Pu'erh Tea", year: 1940, cat: "tea-wine", catVi: "Danh trà & Danh tửu", catEn: "Tea & Heritage Liquor", cityVi: "Tây Song Bản Nạp", cityEn: "Xishuangbanna", provId: "prov-yunnan", craftVi: "Nơi chuẩn hóa kỹ thuật Ủ đống ướt Ốc Đôi (1973) biến lá trà Shan tuyết cổ thụ thành Phổ Nhĩ chín dịu vị.", craftEn: "Pioneering Menghai wet-piling fermentation mastery along Yunnan's ancient tea corridor." },
    { id: "b-qjd", zh: "北京全聚德", py: "Běijīng Quánjùdé", nameVi: "Toàn Tụ Đức Bắc Kinh", nameEn: "Beijing Quanjude", year: 1864, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Nghệ thuật quay vịt lò treo bằng củi gỗ táo tàu (Quả mộc quải lô) đạt chuẩn 108 lát thịt da giòn.", craftEn: "1864 Qianmen roast house famous for jujube-wood open-oven Peking duck carving." },
    { id: "b-dyc", zh: "北京都一处", py: "Běijīng Dūyīchù", nameVi: "Đô Nhất Xứ Tiền Môn", nameEn: "Beijing Duyichu", year: 1738, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Biển hiệu do vua Càn Long ngự bút ban năm 1752; nổi tiếng với xíu mại nếp gấp hình cánh sen 24 nếp.", craftEn: "24-pleat imperial-named shaomai house continuously operating on Qianmen Street since 1738." },
    { id: "b-lwl", zh: "杭州楼外楼", py: "Hángzhōu Lóuwàilóu", nameVi: "Lâu Ngoại Lâu Tây Hồ", nameEn: "Hangzhou Louwailou", year: 1848, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Hàng Châu", cityEn: "Hangzhou", provId: "prov-zhejiang", craftVi: "Quán ăn văn nhân bên Cô Sơn nổi danh với Tôm nõn xào trà Long Tỉnh, Cá giấm Tây Hồ và Gà ăn mày.", craftEn: "Scholar-gourmet lakeside dining home to Dragon Well shrimp and West Lake vinegar fish." },
    { id: "b-shl", zh: "苏州松鹤楼", py: "Sūzhōu Sōnghèlóu", nameVi: "Tùng Hạc Lâu Tô Châu", nameEn: "Suzhou Songhelou", year: 1757, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Tô Châu", cityEn: "Suzhou", provId: "prov-jiangsu", craftVi: "Đại diện ẩm thực Tô Bang thời Càn Long với kỹ thuật khía dao Cá chép sóc (Tùng thử quế ngư) giòn tan.", craftEn: "Master Suzhou kitchen celebrated for crisp squirrel-shaped mandarin fish and delicate broths." },
    { id: "b-gzj", zh: "广州酒家", py: "Guǎngzhōu Jiǔjiā", nameVi: "Quảng Châu Tửu Gia", nameEn: "Guangzhou Restaurant", year: 1935, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Quảng Châu", cityEn: "Guangzhou", provId: "prov-guangdong", craftVi: "'Thực tại Quảng Châu Đệ nhất gia' — bảo tồn trọn vẹn nghệ thuật Điểm tâm Sớm (Yum Cha) và bánh trung thu hạt sen.", craftEn: "Landmark Cantonese banquet institution renowned for classic dim sum and Yue cuisine." },
    { id: "b-cmp", zh: "成都陈麻婆豆腐", py: "Chéngdū Chén Mápó", nameVi: "Trần Ma Bà Đậu Phụ Thành Đô", nameEn: "Chen Mapo Tofu", year: 1862, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Thành Đô", cityEn: "Chengdu", provId: "prov-sichuan", craftVi: "Đặt chuẩn 8 chữ Tứ Xuyên: Ma, Lạt, Thang, Hương, Tô, Nộn, Tiên, Khổn với đậu hũ non và tiêu hoa Hán Nguyên.", craftEn: "Originator of Chengdu's signature Sichuan peppercorn and fermented bean chili tofu since 1862." },
    { id: "b-lzhx", zh: "上海老正兴", py: "Shànghǎi Lǎozhèngxìng", nameVi: "Lão Chính Hưng Thượng Hải", nameEn: "Shanghai Laozhengxing", year: 1862, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Thượng Hải", cityEn: "Shanghai", provId: "prov-shanghai", craftVi: "Thủy tổ ẩm thực Bản Bang (Bản Bang Thái) Thượng Hải với kỹ thuật kho nồng dầu xì dầu đỏ (Nồng du xích tương).", craftEn: "1862 cradle of classic Shanghai Benbang rich soy-glazed river fish and crab roe cuisine." },
    { id: "b-dxc", zh: "苏州稻香村", py: "Sūzhōu Dàoxiāngcūn", nameVi: "Đạo Hương Thôn Tô Châu", nameEn: "Suzhou Daoxiangcun", year: 1773, cat: "culinary", catVi: "Ẩm thực lâu đời", catEn: "Historic Culinary", cityVi: "Tô Châu", cityEn: "Suzhou", provId: "prov-jiangsu", craftVi: "Bánh nướng Tô thức nhiều lớp giòn xốp (Tô thức nguyệt bính) và điểm tâm hoa quế tiến vua thời Càn Long.", craftEn: "Suzhou-style flaky pastry master preserving 18th-century lotus and osmanthus confections." },
    { id: "b-zxq", zh: "杭州张小泉", py: "Hángzhōu Zhāngxiǎoquán", nameVi: "Kéo Thép Trương Tiểu Tuyền", nameEn: "Zhang Xiaoquan Scissors", year: 1628, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Hàng Châu", cityEn: "Hangzhou", provId: "prov-zhejiang", craftVi: "72 công đoạn rèn kẹp lõi thép (Khảm cương) tạo lưỡi kéo sắc bền truyền từ cuối thời Minh Sùng Trinh.", craftEn: "72-step steel-inlay forging craft practiced continuously since 1628." },
    { id: "b-rbz", zh: "北京荣宝斋", py: "Běijīng Róngbǎozhāi", nameVi: "Vinh Bảo Trai Bắc Kinh", nameEn: "Beijing Rongbaozhai", year: 1672, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Bảo tồn kỹ nghệ 'Mộc bản thủy ấn' (in khắc bản màu nước) tái bản tranh cổ đạt độ trung thực ngang bản gốc.", craftEn: "Established 1672 in Liulichang; master studio for woodblock water-ink scroll facsimiles." },
    { id: "b-nlt", zh: "北京内联升", py: "Běijīng Nèiliánshēng", nameVi: "Giày Vải Nội Liên Thăng", nameEn: "Neiliansheng Cloth Shoes", year: 1853, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Bắc Kinh", cityEn: "Beijing", provId: "prov-beijing", craftVi: "Kỹ thuật khâu đế giày vải ngàn lớp 'Thiên tằng để' (mỗi inch 81 mũi khâu tay) phục vụ triều thần nhà Thanh.", craftEn: "Hand-stitched multi-layer 'thousand-layer sole' cloth footwear since 1853." },
    { id: "b-jdz", zh: "景德镇御窑工艺", py: "Jǐngdézhèn Yùyáo", nameVi: "Lò Ngự Cảnh Đức Trấn", nameEn: "Jingdezhen Imperial Kiln", year: 1369, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Cảnh Đức Trấn", cityEn: "Jingdezhen", provId: "prov-jiangxi", craftVi: "Kinh đô sứ thế giới phối đất Cao Lãnh + Thạch Từ với men lam cobalt Thanh Hoa nung 1.320°C.", craftEn: "World porcelain capital marrying kaolin clay and cobalt blue-and-white glazes at 1,320 C." },
    { id: "b-yunjin", zh: "南京云锦", py: "Nánjīng Yúnjǐn", nameVi: "Gấm Vân Cẩm Nam Kinh", nameEn: "Nanjing Yunjin Brocade", year: 1279, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Nam Kinh", cityEn: "Nanjing", provId: "prov-jiangsu", craftVi: "Dệt khung cửi Đại Hoa Lâu 2 người (người kéo hoa – người dệt thoi) phối chỉ vàng ròng làm long bào.", craftEn: "UNESCO cloud brocade woven on two-person drawlooms using gold thread and peacock feathers." },
    { id: "b-hx", zh: "徽州胡开文墨", py: "Húkāiwén Mò", nameVi: "Mực Tàu Hồ Khai Văn", nameEn: "Hu Kaiwen Inksticks", year: 1765, cat: "craft", catVi: "Gốm sứ, Tơ lụa & Thủ công", catEn: "Porcelain, Silk & Craft", cityVi: "Hoàng Sơn (Huy Châu)", cityEn: "Huizhou", provId: "prov-anhui", craftVi: "Đốt muội tùng vùng núi Hoàng Sơn trộn keo da lừa và xạ hương ép khuôn gỗ Lê hơn 100.000 búa tay.", craftEn: "Anhui pine-soot inksticks hand-pounded and molded in carved pearwood blocks since 1765." }
  ];

  // --------------------------------------------------------------------------
  // CURATED DATASET 3: 16 Signature Dishes & Iconic Teas (Verified Unique Photos)
  // --------------------------------------------------------------------------
  var CURATED_DISHES = [
    { id: "d-bj-duck", reg: "north", flavor: "roast", zh: "北京烤鸭", py: "Běijīng Kǎoyā", nameVi: "Vịt quay Bắc Kinh", nameEn: "Peking Roast Duck", provId: "prov-beijing", provVi: "Bắc Kinh", badgeVi: "Hoa Bắc · Kinh Sư", badgeEn: "North · Beijing", img: "assets/images/prov_items/beijing/d0.jpg", noteVi: "Da quay phồng giòn hổ phách ăn cùng bánh tráng mỏng, tương đậu ngọt và hành hoa thái chỉ.", noteEn: "Crisp lacquered skin carved into slices with steamed pancakes and sweet bean paste." },
    { id: "d-bj-hotpot", reg: "north", flavor: "roast", zh: "老北京铜锅涮肉", py: "Tóngguō Shuànròu", nameVi: "Lẩu cừu nồi đồng Bắc Kinh", nameEn: "Copper-Pot Lamb Hotpot", provId: "prov-beijing", provVi: "Bắc Kinh", badgeVi: "Hoa Bắc · Kinh Sư", badgeEn: "North · Beijing", img: "assets/images/prov_items/beijing/d1.jpg", noteVi: "Nồi đồng đốt than ở giữa đun nước thanh gừng hành, nhúng thịt cừu thái mỏng chấm sốt vừng.", noteEn: "Clear ginger-scallion broth in a charcoal chimney pot paired with sesame-peanut dip." },
    { id: "d-tj-goubuli", reg: "north", flavor: "dimsum", zh: "天津狗不理包子", py: "Gǒubùlǐ Bāozi", nameVi: "Bánh bao 18 nếp Thiên Tân", nameEn: "Tianjin Steamed Buns", provId: "prov-tianjin", provVi: "Thiên Tân", badgeVi: "Hoa Bắc · Kinh Tân", badgeEn: "North · Tianjin", img: "assets/images/prov_items/tianjin/d0.jpg", noteVi: "Vỏ bột nửa ủ mềm và 18 nếp gấp đều tăm tắp giữ trọn nước cốt thịt bên trong.", noteEn: "Classic 18-pleat juicy steamed buns famous across the Haihe river port." },
    { id: "d-zj-longjing", reg: "jiangnan", flavor: "tea", zh: "龙井虾仁", py: "Lóngjǐng Xiārén", nameVi: "Tôm nõn xào trà Long Tỉnh", nameEn: "Longjing Tea Shrimp", provId: "prov-zhejiang", provVi: "Chiết Giang", badgeVi: "Giang Nam · Chiết Thái", badgeEn: "Jiangnan · Zhejiang", img: "assets/images/prov_items/zhejiang/d1.jpg", noteVi: "Tôm sông tươi trắng ngần đảo lửa nhanh cùng lá trà Long Tỉnh mới hái tạo hương thanh thoát.", noteEn: "Delicate river shrimp stir-fried briefly with fragrant pre-Qingming Longjing leaves." },
    { id: "d-zj-fish", reg: "jiangnan", flavor: "umami", zh: "西湖醋鱼", py: "Xīhú Cùyú", nameVi: "Cá trắm giấm Tây Hồ", nameEn: "West Lake Vinegar Fish", provId: "prov-zhejiang", provVi: "Hàng Châu", badgeVi: "Giang Nam · Chiết Thái", badgeEn: "Jiangnan · Zhejiang", img: "assets/images/prov_items/zhejiang/d0.jpg", noteVi: "Cá chần lửa vừa trong nước dùng thanh rồi rưới sốt giấm gạo Trấn Giang chua ngọt bóng mượt.", noteEn: "Poached freshwater fish glazed with silky Zhenjiang aged rice vinegar and ginger." },
    { id: "d-js-squirrel", reg: "jiangnan", flavor: "umami", zh: "松鼠桂鱼", py: "Sōngshǔ Guìyú", nameVi: "Cá quế dáng sóc Tô Châu", nameEn: "Squirrel-Shaped Mandarin Fish", provId: "prov-jiangsu", provVi: "Giang Tô", badgeVi: "Giang Nam · Tô Thái", badgeEn: "Jiangnan · Jiangsu", img: "assets/images/prov_items/jiangsu/d0.jpg", noteVi: "Đỉnh cao đao công Hoài Dương – Tô Bang: khía ca rô không rách da, chiên xù xòe hình đuôi sóc.", noteEn: "Scored diamond cuts blossom crisp in hot oil beneath sweet tomato-vinegar sauce." },
    { id: "d-sh-xiaolong", reg: "jiangnan", flavor: "dimsum", zh: "南翔小笼包", py: "Nánxiáng Xiǎolóngbāo", nameVi: "Tiểu long bao Thượng Hải", nameEn: "Shanghai Soup Dumplings", provId: "prov-shanghai", provVi: "Thượng Hải", badgeVi: "Giang Nam · Bản Bang", badgeEn: "Jiangnan · Shanghai", img: "assets/images/prov_items/shanghai/d0.jpg", noteVi: "Da mỏng tang bọc thạch bì lợn nấu đông tan thành súp nóng hổi khi hấp xửng tre.", noteEn: "Paper-thin wrappers holding rich collagen broth that melts upon steaming." },
    { id: "d-ah-fish", reg: "jiangnan", flavor: "umami", zh: "徽州臭鳜鱼", py: "Chòu Guìyú", nameVi: "Cá quế ủ muối Huy Châu", nameEn: "Huizhou Fermented Mandarin Fish", provId: "prov-anhui", provVi: "An Huy", badgeVi: "Giang Nam · Huy Thái", badgeEn: "Jiangnan · Anhui", img: "assets/images/prov_items/anhui/d0.jpg", noteVi: "Ủ muối nhẹ trong thùng gỗ thông tạo mùi đậm đặc trưng nhưng thịt tách múi tỏi dai ngọt.", noteEn: "Lightly cured in pine barrels; firm garlic-clove flakes prized by Anhui merchants." },
    { id: "d-sc-mapo", reg: "sichuan", flavor: "mala", zh: "麻婆豆腐", py: "Mápó Dòufu", nameVi: "Đậu phụ Ma Bà Tứ Xuyên", nameEn: "Sichuan Mapo Tofu", provId: "prov-sichuan", provVi: "Tứ Xuyên", badgeVi: "Ba Thục · Xuyên Thái", badgeEn: "Sichuan Basin", img: "assets/images/prov_items/sichuan/d0.jpg", noteVi: "Tương đậu Bì Huyện ủ nắng kết hợp dầu ớt Nhị Kinh Điều và bột tiêu hoa tê đầu lưỡi.", noteEn: "Silken tofu braised in fermented Pixian broad-bean paste and red Sichuan peppercorns." },
    { id: "d-cq-hotpot", reg: "sichuan", flavor: "mala", zh: "重庆九宫格火锅", py: "Jiǔgōnggé Huǒguō", nameVi: "Lẩu 9 ngăn Trùng Khánh", nameEn: "Chongqing Nine-Grid Hotpot", provId: "prov-chongqing", provVi: "Trùng Khánh", badgeVi: "Ba Thục · Du Thái", badgeEn: "Chongqing", img: "assets/images/prov_items/chongqing/d0.jpg", noteVi: "Nồi đồng chia 9 ô điều tiết độ sôi giữ hương thơm từ mỡ bò, ớt khô và hoa tiêu bến tàu.", noteEn: "Copper lattice partitions regulate simmering heat across butter-chili river-port broths." },
    { id: "d-gd-dimsum", reg: "south", flavor: "dimsum", zh: "广式早茶点心", py: "Guǎngshì Zǎochá", nameVi: "Điểm tâm Sớm Quảng Đông", nameEn: "Cantonese Yum Cha Dim Sum", provId: "prov-guangdong", provVi: "Quảng Đông", badgeVi: "Lĩnh Nam · Việt Thái", badgeEn: "South · Guangdong", img: "assets/images/prov_items/guangdong/d0.jpg", noteVi: "'Nhất chung lưỡng kiện': Há cảo tôm 12 nếp gấp, Xíu mại gạch cua và Bánh bao xá xíu.", noteEn: "Morning tea tradition featuring crystal shrimp har gow, siu mai, and baked char siu." },
    { id: "d-gd-goose", reg: "south", flavor: "roast", zh: "深井烧鹅", py: "Shēnjǐng Shāo'é", nameVi: "Ngỗng quay Thâm Tỉnh", nameEn: "Cantonese Roast Goose", provId: "prov-guangdong", provVi: "Quảng Đông", badgeVi: "Lĩnh Nam · Việt Thái", badgeEn: "South · Guangdong", img: "assets/images/prov_items/guangdong/d1.jpg", noteVi: "Ướp ngũ vị hương khâu kín bụng nướng bằng than vải thiều, da bóng màu cánh gián chấm mận.", noteEn: "Lychee-wood roasted goose stuffed with five-spice aromatics and served with plum sauce." },
    { id: "d-yn-noodle", reg: "southwest", flavor: "umami", zh: "云南过桥米线", py: "Guòqiáo Mǐxiàn", nameVi: "Bún Qua Cầu Vân Nam", nameEn: "Yunnan Crossing-the-Bridge Noodles", provId: "prov-yunnan", provVi: "Vân Nam", badgeVi: "Tây Nam · Điền Thái", badgeEn: "Southwest · Yunnan", img: "assets/images/prov_items/yunnan/d0.jpg", noteVi: "Tô nước dùng gà hầm lớp mỡ khóa nhiệt 100°C làm chín tức thì thịt lát và nấm rừng.", noteEn: "Scalding chicken broth sealed with golden fat cooks thinly sliced meats tableside." },
    { id: "d-yn-tea", reg: "southwest", flavor: "tea", zh: "云南普洱熟茶 · 药膳", py: "Pǔ'ěr Chášàn", nameVi: "Trà Phổ Nhĩ & Nấm Dược thiện", nameEn: "Aged Pu'erh & Wild Mushroom Soup", provId: "prov-yunnan", provVi: "Vân Nam", badgeVi: "Tây Nam · Trà Mã", badgeEn: "Southwest · Tea-Horse", img: "assets/images/prov_items/yunnan/d2.jpg", noteVi: "Thục trà Phổ Nhĩ giúp tiêu thực kết hợp canh nấm kê tùng hương núi rừng Côn Minh.", noteEn: "Earthy fermented Yunnan tea paired with wild Matsutake mountain mushroom broth." },
    { id: "d-sn-bread", reg: "northwest", flavor: "dimsum", zh: "西安羊肉泡馍", py: "Yángròu Pàomó", nameVi: "Bánh mì bẻ súp cừu Tây An", nameEn: "Xi'an Pita Bread Lamb Soup", provId: "prov-shaanxi", provVi: "Thiểm Tây", badgeVi: "Tây Bắc · Tơ Lụa", badgeEn: "Northwest · Shaanxi", img: "assets/images/prov_items/shaanxi/d0.jpg", noteVi: "Thực khách tự tay bẻ nhỏ bánh nướng không men thành hạt đậu rồi đầu bếp chan nước cừu hầm.", noteEn: "Hand-torn unleavened bread simmered in aromatic mutton broth with pickled garlic." },
    { id: "d-xj-kebab", reg: "northwest", flavor: "roast", zh: "新疆烤全羊·红柳烤肉", py: "Hóngliǔ Kǎoròu", nameVi: "Cừu nướng xiên Hồng Liễu", nameEn: "Xinjiang Red-Willow Lamb", provId: "prov-xinjiang", provVi: "Tân Cương", badgeVi: "Tây Bắc · Tơ Lụa", badgeEn: "Northwest · Xinjiang", img: "assets/images/prov_items/xinjiang/d0.jpg", noteVi: "Xiên bằng cành cây liễu đỏ sa mạc tiết tinh dầu thơm hòa quyện thì là và muối hột.", noteEn: "Succulent lamb skewers roasted on aromatic desert tamarisk branches with cumin." }
  ];

  // --------------------------------------------------------------------------
  // CURATED DATASET 4: 12 Deep Scholarly & Practical Field Q&A Items
  // --------------------------------------------------------------------------
  var FAQ_ITEMS = [
    { cat: "field", qVi: "Đi tàu cao tốc Trung Quốc có cần in vé giấy hay đến ga trước bao lâu?", qEn: "Do foreign travelers need paper HSR tickets at 12306 stations?", aVi: "Không cần in vé giấy. Khi đặt vé qua ứng dụng Railway 12306 (chọn bản English) và xác thực ảnh hộ chiếu thành công, vé gắn trực tiếp vào số hộ chiếu. Tại ga đi, đi vào làn có nhân viên trực (Manual Lane / 人工通道) quét trực diện trang nhân thân hộ chiếu; nên có mặt trước giờ tàu chạy 35–45 phút vì ga lớn như Bắc Kinh Nam hay Thượng Hải Hồng Kiều kiểm tra an ninh 2 vòng.", aEn: "No paper ticket is required. After passport verification on 12306 English, present your physical passport at staffed Manual Lanes 35–45 minutes before departure.", action: "page", page: "regions", sub: "readiness", ctaVi: "Xem hướng dẫn 12306 →", ctaEn: "Open 12306 Guide →" },
    { cat: "field", qVi: "Thanh toán Alipay / WeChat Pay bằng thẻ Visa/Master Việt Nam có mất phí không?", qEn: "Does paying via Alipay or WeChat Pay incur international card fees?", aVi: "Theo quy định nâng hạn mức hiện hành của PBOC, mỗi giao dịch đơn lẻ từ 200 RMB trở xuống được miễn 100% phụ phí thẻ quốc tế 3%. Với giao dịch trên 200 RMB mới tính 3% (có thể dùng tính năng Tour Card hoặc tách hóa đơn hợp lệ). Nhớ hoàn tất xác thực hộ chiếu (Identity Verification) trước khi rời Việt Nam để tránh khóa thanh toán đột xuất.", aEn: "Single transactions of 200 RMB or less linked to international Visa/Mastercard waive the 3% surcharge; complete KYC verification before departure.", action: "page", page: "regions", sub: "expeditions", ctaVi: "Mở Cẩm nang 3 Cấp →", ctaEn: "Open Travel Atlas →" },
    { cat: "field", qVi: "Đặt vé Tử Cấm Thành (Cố Cung) và Thiên Đàn cần chú ý khung giờ nào?", qEn: "How far ahead should tickets for the Forbidden City and Tiantan be booked?", aVi: "Tử Cấm Thành mở bán vé đúng 20:00 (giờ Bắc Kinh, tức 19:00 giờ Hà Nội) trước đúng 7 ngày trên cổng chính thức và đóng cửa hoàn toàn vào Thứ Hai (trừ dịp lễ lớn). Thiên Đàn nên mua vé liên hoàn (Combined Ticket) để vào được sâu bên trong Điện Kỳ Niên, Hoàng Khung Vũ và Viên Khâu Đàn vào buổi sáng sớm.", aEn: "Forbidden City releases tickets 7 days prior at 20:00 Beijing time (closed Mondays). At Tiantan, select the Combined Pass for Prayer Hall and Circular Mound access.", action: "article", targetId: "temple-of-heaven-tiantan-cosmology-3d", ctaVi: "Khảo cứu Thiên Đàn →", ctaEn: "Read Tiantan Monograph →" },
    { cat: "field", qVi: "Tại sao người nước ngoài cần bản đồ Gaode (Amap) và eSIM roaming?", qEn: "Why combine roaming eSIMs with Amap (Gaode Maps)?", aVi: "Tại Trung Quốc đại lục, eSIM quốc tế roaming giúp duy trì công cụ làm việc liên tục mà không bị gián đoạn; song hành với đó, Amap (高德地图) cập nhật chính xác từng cửa ra tàu điện ngầm (Exit A/B/C), thời gian xe buýt thực và trạm đón Didi trong các ga đường sắt khổng lồ.", aEn: "International roaming eSIMs keep work workflows uninterrupted while Amap provides real-time metro exit navigation and HSR transfer timing.", action: "driver", targetId: "0", ctaVi: "Mở Thẻ Giao tiếp Tài xế →", ctaEn: "Open Driver Cards →" },
    { cat: "scholar", qVi: "Thực tế Tử Cấm Thành có 9.999,5 gian phòng hay chỉ 8.707 gian?", qEn: "Does the Forbidden City actually contain 9,999.5 rooms or 8,707 bays?", aVi: "Năm 1973, đoàn khảo cổ kiến trúc do chuyên gia Vu Trác Vân dẫn đầu hoàn tất đo đạc thực địa và xác nhận chính xác toàn bộ Cố Cung có 8.707 gian nền tiêu chuẩn (980 tòa kiến trúc trên diện tích 724.250 m²). Con số 9.999,5 là truyền thuyết dân gian gắn với tư tưởng thiên văn học hoàng đế tránh phạm số 10.000 của Thiên Đế.", aEn: "Yu Zhuoyun's 1973 survey verified 8,707 actual structural bays across 980 buildings; 9,999.5 is a cosmological folk legend rather than an architectural count.", action: "article", targetId: "forbidden-city-3d-dissection", ctaVi: "Mở Giải phẫu Tử Cấm Thành →", ctaEn: "Open Forbidden City Monograph →" },
    { cat: "scholar", qVi: "Tổng công trình sư người Việt nào trực tiếp tham gia quy hoạch Tử Cấm Thành 1420?", qEn: "Which Vietnamese-born chief architect directed Beijing & Forbidden City construction in 1420?", aVi: "Công trình sư Nguyễn An (chữ Hán: 阮安, 1381–1453, gốc Giao Chỉ / Hà Nội ngày nay) được Minh Thành Tổ trọng dụng giữ vai trò tổng công trình sư quy hoạch thành Bắc Kinh, hệ Tam Đại Điện và trục thủy lợi hào thành nối liền sông Kim Thủy suốt hai thập niên đầu thế kỷ XV.", aEn: "Chief architect Ruan An (Nguyễn An, 1381–1453, born in Vietnam) directed the layout of Beijing's imperial palaces and water canals under Emperor Yongle.", action: "page", page: "sino-vietnam", sub: "exchange", ctaVi: "Khám phá Văn hiến Trung–Việt →", ctaEn: "Explore China–Vietnam Dialogue →" },
    { cat: "scholar", qVi: "Phân biệt Trà Phổ Nhĩ Sống (Sinh trà) và Trà Phổ Nhĩ Chín (Thục trà) 1973 ra sao?", qEn: "How does Raw (Sheng) Pu'erh differ from 1973 Wet-Piled Ripe (Shou) Pu'erh?", aVi: "Sinh trà làm từ lá trà Shan tuyết cổ thụ diệt men ở nhiệt độ thấp rồi phơi nắng (Sái thanh) để vi sinh tự chuyển hóa chậm suốt nhiều thập kỷ. Thục trà ra đời năm 1973 tại Côn Minh & Mãnh Hải bằng công nghệ Ủ đống ướt (Ốc đôi / 渥堆) kiểm soát ẩm nhiệt 45–60 ngày, tạo nước trà đỏ nâu ngọt hậu mượt mà ngay lập tức.", aEn: "Sheng is sun-dried sun-cured leaf aging slowly over decades; Shou uses the 1973 Kunming controlled wet-piling fermentation for smooth ruby liquor.", action: "article", targetId: "yunnan-puerh-tea-ancient-tea-horse-road-fermentation-heritage", ctaVi: "Đọc Chuyên luận Trà Phổ Nhĩ →", ctaEn: "Open Pu'erh Monograph →" },
    { cat: "scholar", qVi: "Vì sao âm đọc Hán–Việt được xem là hóa thạch âm vận tiếng Hán thời Đường–Tống?", qEn: "Why are Sino-Vietnamese readings considered phonological fossils of Middle Chinese?", aVi: "Hệ thống Hán–Việt (nhập sâu thế kỷ IX–X thời vãn Đường – đầu Tống) bảo lưu đầy đủ các phụ âm cuối tắt (-p, -t, -k), âm mũi (-m) và cấu trúc thanh điệu âm dương (Bằng–Trắc) vốn đã biến mất hoặc giản lược phần lớn trong tiếng Quan Thoại Bắc Kinh hiện đại.", aEn: "Institutionalized in the 9th–10th centuries, Sino-Vietnamese preserves final stops (-p, -t, -k) and -m codas lost in modern Standard Mandarin.", action: "article", targetId: "han-viet-phonology-middle-chinese", ctaVi: "Đọc Ngữ âm Hán–Việt →", ctaEn: "Open Phonology Monograph →" },
    { cat: "b2b", qVi: "Trong hợp đồng B2B Trung–Việt, chữ ký giám đốc không có Công chương đỏ có hiệu lực không?", qEn: "Is a Chinese supplier contract valid with a director signature but no red company seal?", aVi: "Rủi ro rất cao. Tại Trung Quốc đại lục, con dấu tròn đỏ Công chương (公章) hoặc Dấu Hợp đồng (合同专用章) khắc mã số công an quản lý mới là biểu tượng pháp nhân cao nhất của doanh nghiệp. Bên mua Việt Nam cần kiểm tra tên tiếng Trung trên dấu khớp giấy phép ĐKKD trên hệ thống GSXT quốc gia và đóng dấu giáp lai các trang.", aEn: "Without the registered red round Gongzhang or Contract Seal, corporate enforceability is heavily exposed; always verify seal registration and stamp straddling pages.", action: "article", targetId: "cross-border-b2b-contracts-cietac-viac", ctaVi: "Mở Pháp chế Hợp đồng B2B →", ctaEn: "Open B2B Legal Guide →" },
    { cat: "b2b", qVi: "Vì sao thống kê xuất nhập khẩu Việt–Trung có 'Khoảng trống Gương' (Mirror Gap)?", qEn: "Why is there a $39B+ statistical 'Mirror Gap' between Vietnam Customs and China GACC?", aVi: "Nguyên nhân cốt lõi nằm ở quy chuẩn IMTS (CIF vs FOB) và vai trò cảng trung chuyển Hong Kong – Thâm Quyến. Linh kiện và hàng xuất qua Hong Kong thường được Việt Nam ghi vào kim ngạch đi Hong Kong, trong khi Hải quan Trung Quốc (GACC) ghi nhận theo Nước xuất xứ gốc (Country of Origin) là Việt Nam.", aEn: "CIF/FOB timing plus Hong Kong–Shenzhen entrepôt re-exports cause origin vs. consignment discrepancies under IMTS rules.", action: "page", page: "business", sub: "corridors", ctaVi: "Xem Ma trận Thương mại →", ctaEn: "Open Trade Corridors →" },
    { cat: "b2b", qVi: "C/O Form E (ACFTA) khác gì so với C/O RCEP khi nhập máy móc nguyên liệu?", qEn: "When should importers pick C/O Form E (ACFTA) over RCEP Certificate of Origin?", aVi: "ACFTA (Form E) thường cho mức thuế ưu đãi 0% sâu hơn đối với nhiều mặt hàng thành phẩm Việt–Trung song phương, trong khi RCEP linh hoạt hơn về quy tắc cộng gộp xuất xứ khu vực (Regional Value Content) cho linh kiện bán dẫn từ Nhật–Hàn–Trung–ASEAN.", aEn: "Form E frequently delivers zero tariffs on bilateral lists, while RCEP unlocks multi-country cumulation across East Asia.", action: "article", targetId: "china-vietnam-supply-chain-rcep", ctaVi: "Mở Chuyên luận ACFTA & RCEP →", ctaEn: "Open ACFTA Monograph →" },
    { cat: "b2b", qVi: "Cách phân biệt Nhóm từ Đồng hình Dị nghĩa dễ gây hiểu nhầm trong đàm phán?", qEn: "How to prevent Sino-Vietnamese 'False Friends' errors in business clauses?", aVi: "Cần đối chiếu 25 cặp từ bẫy kinh điển: ví dụ 方便 (fāngbiàn = thuận tiện/tiện lợi, khác với 'phương tiện giao thông'), 赔钱 (péiqián = lỗ vốn/đền tiền), 合同 (hétong = hợp đồng) hay 厉害 (lìhai = lợi hại/giỏi giang). Tra cứu ngay bảng 25 cặp từ đồng hình trong mục Trung–Việt của CCE.", aEn: "Audit high-risk false friends such as 方便 (convenient vs. vehicle) inside CCE's 25-pair contrastive Sino-Vietnamese table.", action: "page", page: "sino-vietnam", sub: "phonology", ctaVi: "Xem 25 Cặp từ Đồng hình →", ctaEn: "Inspect 25 False Friends →" }
  ];

  var DRIVER_QUICK_CARDS = [
    { zh: "请送我去最近的高铁站进站口，谢谢！", py: "Qǐng sòng wǒ qù zuìjìn de gāotiězhàn jìnzhànkǒu, xièxie!", vi: "Xin đưa tôi tới cổng vào Ga Tàu Cao tốc gần nhất, cảm ơn!", en: "Please take me to the nearest High-Speed Rail Station gate, thank you!" },
    { zh: "你好！不要香菜，少辣（微辣），谢谢！", py: "Nǐhǎo! Búyào xiāngcài, shǎolà, xièxie!", vi: "Chào bạn! Không cho rau mùi, ít cay thôi ạ, cảm ơn!", en: "Hello! No cilantro and mild spice please, thank you!" },
    { zh: "请帮我开具增值税电子发票，谢谢！", py: "Qǐng bāng wǒ kāijù zēngzhíshuì diànzǐ fāpiào.", vi: "Vui lòng xuất giúp tôi hóa đơn điện tử VAT (Fapiao).", en: "Please issue an electronic VAT tax invoice (Fapiao)." },
    { zh: "请注意：我对花生和海鲜严重过敏，请勿加入！", py: "Qǐng zhùyì: Wǒ duì huāshēng hé hǎixiān yánzhòng guòmǐn!", vi: "Lưu ý khẩn: Tôi dị ứng nặng với Đậu phộng (Lạc) và Hải sản!", en: "Alert: Severe allergy to peanuts and seafood — please exclude!" }
  ];

  // --------------------------------------------------------------------------
  // RENDERERS
  // --------------------------------------------------------------------------
  function renderStickyContextBar(activePage, enM) {
    var anchors = [];
    if (activePage === "home") {
      anchors = st.fieldMode ? [
        { id: "v11-field-hub-box", labelVi: "01 Trung tâm nhanh", labelEn: "01 Quick Hub" },
        { id: "v11-guided-journey", labelVi: "02 Lộ trình 4 bước", labelEn: "02 4-Step Guide" },
        { id: "v11-brand-culinary-explorer", labelVi: "03 Món ngon & Thương hiệu", labelEn: "03 Food & Brands" },
        { id: "v10-gac-spotlight", labelVi: "04 Quốc bảo & Atlas", labelEn: "04 Treasures & Atlas" },
        { id: "v11-faq-hub", labelVi: "05 Giải đáp 12306", labelEn: "05 Field FAQ" }
      ] : [
        { id: "v11-guided-journey", labelVi: "Lộ trình 4 bước", labelEn: "4-Step Guide" },
        { id: "v11-brand-culinary-explorer", labelVi: "Lão Tự Hiệu & Ẩm thực", labelEn: "Brands & Cuisine" },
        { id: "v10-gac-almanac", labelVi: "24 Tiết Khí", labelEn: "24 Solar Terms" },
        { id: "v10-gac-spotlight", labelVi: "Kiệt tác & Zoom 3.2x", labelEn: "3.2x Zoom Stage" },
        { id: "v11-faq-hub", labelVi: "Hỏi đáp Thực địa", labelEn: "Field FAQ" }
      ];
    } else {
      var pageShortcuts = {
        explore: [
          { page: "explore", labelVi: "330 Chuyên luận", labelEn: "330 Monographs" },
          { page: "museum", sub: "studio3d", labelVi: "110 Mô hình 3D", labelEn: "110 3D Studios" },
          { page: "paintings", labelVi: "72 Quốc họa", labelEn: "72 Paintings" },
          { page: "regions", sub: "map4layer", labelVi: "Bản đồ 3D 34 Tỉnh", labelEn: "3D Map" }
        ],
        regions: [
          { page: "regions", sub: "map4layer", labelVi: "Bản đồ 3D 34 Tỉnh", labelEn: "3D Map" },
          { page: "regions", sub: "expeditions", labelVi: "Điểm đến 3 Cấp", labelEn: "3-Tier Atlas" },
          { page: "regions", sub: "readiness", labelVi: "Hành trang 240h", labelEn: "240h Transit" },
          { page: "business", sub: "b2b", labelVi: "Hợp đồng B2B", labelEn: "B2B Trade" }
        ]
      };
      var sc = pageShortcuts[activePage] || pageShortcuts.explore;
      anchors = sc.map(function (it) {
        return { navPage: it.page, navSub: it.sub || "", labelVi: it.labelVi, labelEn: it.labelEn };
      });
    }

    return (
      '<div class="cce-v11-anchor-bar" id="cce-v11-anchor-bar">' +
      '  <div class="container cce-v11-anchor-inner">' +
      '    <nav class="cce-v11-anchor-scroll" aria-label="' + (enM ? "Quick Context Navigation" : "Thanh điều hướng nhanh theo ngữ cảnh") + '">' +
      anchors.map(function (a, i) {
        if (a.navPage) {
          return '<button type="button" class="cce-v11-anchor-pill" data-v11-act="go" data-page="' + esc(a.navPage) + '" data-sub="' + esc(a.navSub) + '">' + esc(enM ? a.labelEn : a.labelVi) + '</button>';
        }
        return '<button type="button" class="cce-v11-anchor-pill' + (i === 0 ? " is-active" : "") + '" data-v11-act="jump-id" data-target="' + esc(a.id) + '">' + esc(enM ? a.labelEn : a.labelVi) + '</button>';
      }).join("") +
      '    </nav>' +
      '    <div class="cce-v11-anchor-actions">' +
      '      <button type="button" class="cce-v11-mode-btn' + (st.fieldMode ? " is-on" : "") + '" data-v11-act="toggle-field-mode" aria-pressed="' + (st.fieldMode ? "true" : "false") + '">' +
      '        <span class="cce-v11-dot" aria-hidden="true"></span>' +
      '        <span>' + (enM ? "Field Fast-Track Mode" : "Tôi đang thực địa / Tra cứu nhanh") + '</span>' +
      '      </button>' +
      '      <button type="button" class="cce-v11-cta-pill" data-action="nav" data-page="explore">' + (enM ? "330 Monographs →" : "330 Chuyên Luận →") + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div class="cce-v11-scroll-progress" aria-hidden="true"><span id="cce-v11-scroll-bar"></span></div>' +
      '</div>'
    );
  }

  function getDriverCardsList() {
    var fa = window.CCE_V12_FIELD_ATLAS;
    var cards = (fa && Array.isArray(fa.dialogueCards60) && fa.dialogueCards60.length)
      ? fa.dialogueCards60.map(function (c) {
        return {
          group: c.group || "transit",
          titleVi: c.titleVi || "",
          titleEn: c.titleEn || "",
          zh: c.zhLarge || "",
          py: c.pinyin || "",
          hv: c.hanVietNote || "",
          vi: c.titleVi || "",
          en: c.titleEn || "",
          tip: c.pronunciationTipVi || ""
        };
      })
      : DRIVER_QUICK_CARDS.map(function (d) {
        return { group: "transit", zh: d.zh, py: d.py, vi: d.vi, en: d.en };
      });
    if (st.driverGroup && st.driverGroup !== "all") {
      var sub = cards.filter(function (x) { return x.group === st.driverGroup; });
      if (sub.length) return sub;
    }
    return cards;
  }

  function renderDriverCardsStrip(enM) {
    if (st.driverModalIdx < 0) return "";
    var list = getDriverCardsList();
    var activeIdx = Math.max(0, st.driverModalIdx % list.length);
    var cur = list[activeIdx];
    var groups = [
      { id: "all", vi: "Tất cả", en: "All" },
      { id: "transit", vi: "Tàu & Taxi", en: "Transit" },
      { id: "hotel", vi: "Khách sạn", en: "Hotel" },
      { id: "dining", vi: "Gọi món", en: "Dining" },
      { id: "medical", vi: "Y tế", en: "Medical" },
      { id: "museum", vi: "Bảo tàng", en: "Museum" },
      { id: "b2b", vi: "B2B", en: "B2B" }
    ];
    return (
      '<div class="card cce-v11-driver-card" style="margin-top:1rem;padding:1.1rem;background:#FAF7F2;color:#1A1918;border:2px solid #C89B3C;border-radius:4px;">' +
      '  <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.55rem;">' +
      '    <strong style="color:#821C1C;font-size:0.86rem;">' + (enM ? "HIGH-CONTRAST SHOW-TO-DRIVER CARD" : "THẺ HÁN TỰ KHỔ LỚN ĐƯA TÀI XẾ / NHÀ HÀNG") + ' (' + (activeIdx + 1) + '/' + list.length + ')</strong>' +
      '    <div style="display:flex;gap:0.3rem;flex-wrap:wrap;">' +
      '      <button type="button" class="btn btn-sm btn-secondary" data-v11-act="open-driver" data-idx="' + ((activeIdx - 1 + list.length) % list.length) + '">←</button>' +
      '      <button type="button" class="btn btn-sm btn-primary" data-v11-act="open-driver" data-idx="' + ((activeIdx + 1) % list.length) + '">→</button>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-v11-act="close-driver">' + (enM ? "Close ✕" : "Đóng ✕") + '</button>' +
      '    </div>' +
      '  </div>' +
      '  <div style="display:flex;gap:0.3rem;flex-wrap:wrap;margin-bottom:0.65rem;">' +
      groups.map(function (g) {
        return '<button type="button" class="filter-pill ' + (st.driverGroup === g.id ? "active" : "") + '" style="font-size:0.72rem;padding:0.2rem 0.55rem;min-height:28px;" data-v11-act="driver-group" data-val="' + g.id + '">' + esc(enM ? g.en : g.vi) + '</button>';
      }).join("") +
      '  </div>' +
      '  <div style="display:flex;align-items:center;gap:0.75rem;flex-wrap:wrap;">' +
      '    <div class="hanzi" style="font-size:1.55rem;font-weight:800;color:#1A1918;line-height:1.35;">' + esc(cur.zh) + '</div>' +
      speakBtnHtml(cur.zh, "Phát âm Mandarin") +
      '  </div>' +
      '  <div class="pinyin" style="font-size:0.86rem;color:#7A5428;margin-top:0.2rem;">' + esc(cur.py) + (cur.hv ? ' · <strong>Hán-Việt:</strong> ' + esc(cur.hv) : '') + '</div>' +
      '  <div style="font-size:0.9rem;font-weight:600;margin-top:0.3rem;">' + esc(enM ? cur.en : cur.vi) + '</div>' +
      (cur.tip ? '<div style="font-size:0.78rem;color:#5A5348;margin-top:0.2rem;">' + esc(cur.tip) + '</div>' : '') +
      '</div>'
    );
  }

  function renderFieldModeQuickHub(enM) {
    if (!st.fieldMode) {
      return (
        '<div class="container" style="margin-top:1.1rem;margin-bottom:0.65rem;" id="v11-field-hub-box">' +
        '  <div class="cce-v11-field-banner-bar">' +
        '    <div style="font-size:0.86rem;"><strong>' + (enM ? "Need fast on-site access?" : "Đang tra cứu nhanh hoặc đi thực địa Trung Quốc?") + '</strong> ' + (enM ? "Switch to the 6-card Command Hub for 3D maps, 12306 rail, Alipay & 60 Driver Cards." : "Bật Bảng Tra Cứu Nhanh 6 Điểm Đến cho Bản đồ 3D 34 Tỉnh, Món ngon, 90 Lão Tự Hiệu & 60 Thẻ Tài xế.") + '</div>' +
        '    <button type="button" class="btn btn-primary btn-sm" data-v11-act="toggle-field-mode">' + (enM ? "Open 6-Card Quick Hub →" : "Mở Trung tâm Tra cứu Nhanh ↗") + '</button>' +
        '  </div>' +
        renderDriverCardsStrip(enM) +
        '</div>'
      );
    }

    var tiles = [
      { code: "01", cls: "is-gold", titleVi: "Tiêu điểm & 330 Chuyên luận", titleEn: "330 Monographs Library", subVi: "Đọc khảo cứu sâu: Tô Tụng 1088, Thiên Công Khai Vật, Đường Luật & B2B", subEn: "Curated bilingual treatises across history, engineering, law, and craft", act: "go", page: "explore", sub: "" },
      { code: "02", cls: "is-crimson", titleVi: "Bản đồ Địa hình 3D 34 Tỉnh", titleEn: "Split 3D 34-Province Atlas", subVi: "34 ga cao tốc 12306, cửa khẩu Việt–Trung & danh mục 34 tỉnh", subEn: "Interactive 3D map with floating pins & synchronized directory", act: "jump-prov-3d", prov: "prov-beijing" },
      { code: "03", cls: "is-terracotta", titleVi: "Tìm Món Ngon & Danh Trà", titleEn: "Explore 8 Great Cuisines & Tea", subVi: "Lọc nhanh 64+ món Bát Đại Thái Hệ & Lục Đại Trà Loại theo hương vị", subEn: "Filter signature dishes and Gongfu teas by region and flavor", act: "jump-id", target: "v11-culinary-block" },
      { code: "04", cls: "is-jade", titleVi: "Tìm Thương hiệu Lão Tự Hiệu", titleEn: "Century Heritage Brands", subVi: "Đồng Nhân Đường 1669, Trần Lý Tế 1600, Hồ Khánh Dư Đường, Mao Đài", subEn: "Locate historic Chinese workshops & click straight to 3D map", act: "jump-id", target: "v11-brand-culinary-explorer" },
      { code: "05", cls: "is-indigo", titleVi: "60 Thẻ Giao tiếp & 12306", titleEn: "60 Show-to-Driver Cards", subVi: "Bật ngay 60 thẻ chữ Hán theo 6 tình huống cho tài xế, khách sạn, bảo tàng", subEn: "Instant 60-card Mandarin deck with native TTS audio across 6 topics", act: "open-driver", idx: 0 },
      { code: "06", cls: "is-bronze", titleVi: "110 Mô hình WebGL 3D PBR", titleEn: "110 Interactive PBR 3D Models", subVi: "Tử Cấm Thành, 4 Quốc bảo, 72 cảnh PBR & 10 mô hình tách lớp 3D", subEn: "Explore museum bronzes, 72 PBR scenes, and 10 exploded 3D models", act: "go", page: "museum", sub: "studio3d" }
    ];

    return (
      '<section class="cce-v11-field-hub" id="v11-field-hub-box">' +
      '  <div class="container">' +
      '    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#E5A93C;">' + (enM ? "FAST-TRACK COMMAND CENTER · CHẾ ĐỘ TRA CỨU NHANH" : "TRUNG TÂM ĐIỀU HƯỚNG NHANH · CHẾ ĐỘ THỰC ĐỊA") + '</div>' +
      '        <h2 style="font-family:var(--font-editorial);font-size:1.65rem;margin:0.15rem 0 0;color:#FFFFFF;">' + (enM ? "Choose your next destination across the platform" : "Chọn điểm đến tiếp theo của bạn trên toàn hệ thống") + '</h2>' +
      '      </div>' +
      '      <button type="button" class="btn btn-secondary btn-sm" data-v11-act="toggle-field-mode">' + (enM ? "Collapse Quick Hub ✕" : "Thu gọn Trung tâm Nhanh ✕") + '</button>' +
      '    </div>' +
      '    <div class="cce-v11-bento6">' +
      tiles.map(function (t) {
        var extra = t.act === "go"
          ? ' data-v11-act="go" data-page="' + esc(t.page) + '" data-sub="' + esc(t.sub || "") + '"'
          : (t.act === "jump-prov-3d"
            ? ' data-v11-act="jump-prov-3d" data-prov="' + esc(t.prov) + '"'
            : (t.act === "open-driver"
              ? ' data-v11-act="open-driver" data-idx="' + t.idx + '"'
              : ' data-v11-act="jump-id" data-target="' + esc(t.target) + '"'));
        return (
          '<button type="button" class="cce-v11-bento-card ' + t.cls + '"' + extra + '>' +
          '  <div class="cce-v11-bento-num"><span>' + t.code + '</span><span>↗</span></div>' +
          '  <div>' +
          '    <div class="cce-v11-bento-title">' + esc(enM ? t.titleEn : t.titleVi) + '</div>' +
          '    <div class="cce-v11-bento-sub">' + esc(enM ? t.subEn : t.subVi) + '</div>' +
          '  </div>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      renderDriverCardsStrip(enM) +
      '  </div>' +
      '</section>'
    );
  }

  function renderPersonaStageSvg(stepIdx) {
    var col = stepIdx % 2 === 0 ? "#E5A93C" : "#D46B5E";
    return (
      '<svg viewBox="0 0 220 92" width="220" height="92" fill="none" aria-hidden="true" style="display:block;margin-bottom:0.75rem;">' +
      '  <rect x="6" y="6" width="208" height="80" stroke="' + col + '" stroke-opacity="0.45" stroke-width="1.2"/>' +
      '  <path d="M40 34 C58 24, 82 14, 110 14 C138 14, 162 24, 180 34 H40 Z" stroke="#E5A93C" stroke-width="1.8" fill="rgba(229,169,60,0.12)"/>' +
      '  <rect x="58" y="34" width="104" height="8" stroke="#E5A93C" stroke-width="1.3"/>' +
      '  <line x1="72" y1="42" x2="72" y2="72" stroke="#F4EFE6" stroke-width="2"/>' +
      '  <line x1="110" y1="42" x2="110" y2="72" stroke="' + col + '" stroke-width="2.2"/>' +
      '  <line x1="148" y1="42" x2="148" y2="72" stroke="#F4EFE6" stroke-width="2"/>' +
      '  <line x1="30" y1="73" x2="190" y2="73" stroke="#E5A93C" stroke-width="2"/>' +
      '</svg>'
    );
  }

  function renderGuidedJourneySection(enM) {
    var p = PERSONAS[st.persona] || PERSONAS.scholar;
    var steps = p.steps;
    var sIdx = Math.max(0, Math.min(st.activeStep, steps.length - 1));
    var cur = steps[sIdx];
    var ctaAttr = cur.act === "article"
      ? 'data-action="open-article" data-id="' + esc(cur.targetId) + '"'
      : (cur.act === "driver"
        ? 'data-v11-act="open-driver" data-idx="' + esc(cur.targetId) + '"'
        : 'data-v11-act="go" data-page="' + esc(cur.page) + '" data-sub="' + esc(cur.sub || "") + '"');

    return (
      '<section class="cce-v11-section" id="v11-guided-journey" aria-label="' + (enM ? "Guided Platform Journeys" : "Lộ trình định hướng theo nhu cầu") + '">' +
      '  <div class="container">' +
      '    <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "PERSONA ENTRY & 4-STEP WALKTHROUGH · ĐỊNH HƯỚNG TRẢI NGHIỆM" : "CHỌN HỒ SƠ MỤC TIÊU · BẠN ĐANG TÌM KIẾM ĐIỀU GÌ?") + '</div>' +
      '    <h2 class="ed-h2" style="margin:0.15rem 0 0.25rem;">' + (enM ? "Select your track, follow four concrete steps" : "Chọn góc tiếp cận để mở đúng 4 bước khai thác kho tri thức") + '</h2>' +
      '    <div class="cce-v11-persona-grid">' +
      ["scholar", "traveler", "b2b"].map(function (pk) {
        var item = PERSONAS[pk];
        var isOn = st.persona === pk;
        return (
          '<button type="button" class="cce-v11-persona-card' + (isOn ? " is-active" : "") + '" data-v11-act="pick-persona" data-val="' + pk + '">' +
          '  <div style="font-size:0.7rem;font-weight:700;letter-spacing:0.06em;color:#821C1C;margin-bottom:0.25rem;">' + esc(enM ? item.badgeEn : item.badgeVi) + '</div>' +
          '  <strong style="display:block;font-size:1.02rem;line-height:1.3;margin-bottom:0.25rem;">' + esc(enM ? item.titleEn : item.titleVi) + '</strong>' +
          '  <div style="font-size:0.78rem;color:var(--text-muted);">' + esc(enM ? item.subEn : item.subVi) + '</div>' +
          '</button>'
        );
      }).join("") +
      '    </div>' +
      '    <div class="cce-v11-walk-split">' +
      '      <aside class="cce-v11-sticky-stage" id="v11-sticky-stage-box">' +
      renderPersonaStageSvg(sIdx) +
      '        <div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono,monospace);font-size:0.74rem;color:#E5A93C;">' +
      '          <span>' + esc(enM ? cur.badgeEn : cur.badgeVi) + '</span>' +
      '          <strong>' + (enM ? "STEP " : "BƯỚC ") + cur.code + ' / 04</strong>' +
      '        </div>' +
      '        <div class="cce-v11-step-meter"><span style="width:' + ((sIdx + 1) * 25) + '%;"></span></div>' +
      '        <h3 style="font-family:var(--font-editorial);font-size:1.3rem;margin:0 0 0.45rem;color:#FFFFFF;">' + esc(enM ? cur.titleEn : cur.titleVi) + '</h3>' +
      '        <div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;margin-bottom:0.55rem;">' +
      '          <span class="hanzi" style="color:#F4CE74;font-size:1.02rem;font-weight:700;">' + esc(cur.zh) + '</span>' +
      '          <span style="font-size:0.78rem;color:#CBC3B4;">(' + esc(cur.py) + ')</span>' +
      speakBtnHtml(cur.zh.split("·")[0].trim(), "Nghe phát âm") +
      '        </div>' +
      '        <p style="font-size:0.86rem;line-height:1.6;color:#E8E2D5;margin:0 0 0.95rem;">' + esc(enM ? cur.descEn : cur.descVi) + '</p>' +
      '        <button type="button" class="btn btn-gold btn-sm" ' + ctaAttr + '>' + esc(enM ? cur.ctaEn : cur.ctaVi) + '</button>' +
      '      </aside>' +
      '      <div class="cce-v11-step-list">' +
      steps.map(function (sp, idx) {
        var stepCtaAttr = sp.act === "article"
          ? 'data-action="open-article" data-id="' + esc(sp.targetId) + '"'
          : (sp.act === "driver"
            ? 'data-v11-act="open-driver" data-idx="' + esc(sp.targetId) + '"'
            : 'data-v11-act="go" data-page="' + esc(sp.page) + '" data-sub="' + esc(sp.sub || "") + '"');
        return (
          '<article class="cce-v11-step-card' + (idx === sIdx ? " is-active" : "") + '" data-v11-act="pick-step" data-idx="' + idx + '" data-v11-step-spy="' + idx + '">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;margin-bottom:0.3rem;">' +
          '    <span class="badge badge-gold">' + sp.code + ' · ' + esc(enM ? sp.badgeEn : sp.badgeVi) + '</span>' +
          '    <span class="hanzi" style="font-size:0.84rem;color:var(--imperial-red);font-weight:700;">' + esc(sp.zh) + '</span>' +
          '  </div>' +
          '  <h4 style="margin:0.15rem 0 0.32rem;font-size:1.05rem;">' + esc(enM ? sp.titleEn : sp.titleVi) + '</h4>' +
          '  <p style="margin:0 0 0.6rem;font-size:0.84rem;line-height:1.55;color:var(--text-secondary);">' + esc(enM ? sp.descEn : sp.descVi) + '</p>' +
          '  <button type="button" class="ed-link-action" style="padding:0;" ' + stepCtaAttr + '>' + esc(enM ? sp.ctaEn : sp.ctaVi) + '</button>' +
          '</article>'
        );
      }).join("") +
      '      </div>' +
      '    </div>' +
      '    <div class="cce-v11-next-banner">' +
      '      <div>' +
      '        <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.06em;">' + (enM ? "NEXT STEP · INTERACTIVE 3D MAP" : "BƯỚC TIẾP THEO · ĐỊA VĂN HÓA 3D") + '</div>' +
      '        <strong style="font-size:1.04rem;">' + (enM ? "Inspect all 34 provinces, 12 HSR arcs, and Vietnam border crossings on the 3D Spatial Atlas" : "Quan sát 34 tỉnh thành, 12 hành lang cao tốc & cửa khẩu Việt–Trung trực tiếp trên Bản đồ 3D") + '</strong>' +
      '      </div>' +
      '      <button type="button" class="btn btn-primary btn-sm" data-v11-act="jump-prov-3d" data-prov="prov-beijing">' + (enM ? "OPEN ON 3D MAP ↗" : "XEM TRÊN BẢN ĐỒ 3D ↗") + '</button>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function getFilteredBrands() {
    var q = String(st.brandQuery || "").trim().toLowerCase();
    var pool = CURATED_BRANDS.slice();
    var v12Lzh = window.CCE_V12_LAOZIHAO_ICH && window.CCE_V12_LAOZIHAO_ICH.laozihao90;
    if (Array.isArray(v12Lzh) && v12Lzh.length) {
      var seenZh = {};
      for (var k = 0; k < pool.length; k++) seenZh[pool[k].nameVi] = true;
      for (var i = 0; i < v12Lzh.length; i++) {
        var b = v12Lzh[i];
        if (!b || seenZh[b.nameVi]) continue;
        seenZh[b.nameVi] = true;
        var dom = String(b.domain || "craft");
        var catCode = dom.indexOf("tcm") >= 0 ? "tcm" : (dom.indexOf("tea") >= 0 || dom.indexOf("wine") >= 0 ? "tea-wine" : (dom.indexOf("food") >= 0 || dom.indexOf("cul") >= 0 ? "culinary" : "craft"));
        pool.push({
          id: b.id, zh: b.nameZh, py: b.pinyin, nameVi: b.nameVi, nameEn: b.nameEn,
          year: b.foundedYear, cat: catCode, catVi: b.domain, catEn: b.domain,
          cityVi: b.cityVi, cityEn: b.cityEn, provId: b.provinceId,
          craftVi: b.heritageStoryVi, craftEn: b.heritageStoryEn
        });
      }
    }
    return pool.filter(function (b) {
      if (st.brandCat !== "all" && b.cat !== st.brandCat) return false;
      if (!q) return true;
      return [b.nameVi, b.nameEn, b.zh, b.py, b.cityVi, b.cityEn, String(b.year), b.craftVi].join(" ").toLowerCase().indexOf(q) >= 0;
    });
  }

  function getFilteredDishes() {
    var q = String(st.dishQuery || "").trim().toLowerCase();
    var pool = CURATED_DISHES.slice();
    var v12Cul = window.CCE_V12_LEXICON_CULINARY_SYNC && window.CCE_V12_LEXICON_CULINARY_SYNC.culinaryTea64;
    if (Array.isArray(v12Cul) && v12Cul.length) {
      var dishImgs = [
        "assets/images/articles/hero-chinese-cuisines.jpg",
        "assets/images/articles/hero-chinese-banquet.jpg",
        "assets/images/articles/hero-six-teas-gongfu.jpg",
        "assets/images/articles/hero-tea-culture.jpg",
        "assets/images/articles_v8/b26-lu-yu-tea.jpg",
        "assets/images/articles_v8/tea-horse-caravan.jpg"
      ];
      var provReg = function (pid) {
        if (/beijing|tianjin|shandong|hebei|shanxi|liaoning/.test(pid)) return "north";
        if (/zhejiang|jiangsu|shanghai|anhui|fujian|jiangxi/.test(pid)) return "jiangnan";
        if (/sichuan|chongqing|hunan|hubei/.test(pid)) return "sichuan";
        if (/guangdong|guangxi|hainan/.test(pid)) return "south";
        if (/yunnan|guizhou/.test(pid)) return "southwest";
        return "northwest";
      };
      var seenD = {};
      for (var dk = 0; dk < pool.length; dk++) seenD[pool[dk].zh] = true;
      for (var di = 0; di < v12Cul.length; di++) {
        var c = v12Cul[di];
        if (!c || seenD[c.nameZh]) continue;
        seenD[c.nameZh] = true;
        var fp = String(c.flavorProfile || "").toLowerCase();
        var flv = c.kind === "tea" ? "tea" : (/cay|mala|tê/.test(fp) ? "mala" : (/quay|nướng|lẩu|hầm/.test(fp) ? "roast" : (/bánh|mì|điểm tâm/.test(fp) ? "dimsum" : "umami")));
        pool.push({
          id: c.id, reg: provReg(c.provinceId || ""), flavor: flv,
          zh: c.nameZh, py: c.pinyin, nameVi: c.nameVi, nameEn: c.nameEn,
          provId: c.provinceId || "prov-beijing", provVi: c.cityVi || c.schoolOrTeaClass,
          badgeVi: c.schoolOrTeaClass || (c.kind === "tea" ? "Danh Trà" : "Bát Đại Thái Hệ"),
          badgeEn: c.schoolOrTeaClass || c.kind,
          img: dishImgs[di % dishImgs.length],
          noteVi: c.cookingOrFermentationTechVi || c.flavorProfile || "",
          noteEn: c.cookingOrFermentationTechEn || c.flavorProfile || ""
        });
      }
    }
    return pool.filter(function (d) {
      if (st.dishRegion !== "all" && d.reg !== st.dishRegion) return false;
      if (st.dishFlavor !== "all" && d.flavor !== st.dishFlavor) return false;
      if (!q) return true;
      return [d.nameVi, d.nameEn, d.zh, d.py, d.provVi, d.noteVi].join(" ").toLowerCase().indexOf(q) >= 0;
    });
  }

  function renderBrandAndCulinaryExplorer(enM) {
    var brands = getFilteredBrands();
    var showBrands = st.brandShowAll ? brands : brands.slice(0, 6);
    var dishes = getFilteredDishes();
    var showDishes = st.dishShowAll ? dishes : dishes.slice(0, 8);

    var regFilters = [
      { id: "all", vi: "Tất cả vùng", en: "All Regions" },
      { id: "north", vi: "Hoa Bắc & Kinh Sư", en: "North & Beijing" },
      { id: "jiangnan", vi: "Giang Nam & Hoa Đông", en: "Jiangnan & East" },
      { id: "sichuan", vi: "Tứ Xuyên – Trùng Khánh", en: "Sichuan Basin" },
      { id: "south", vi: "Quảng Đông & Lĩnh Nam", en: "Guangdong & South" },
      { id: "southwest", vi: "Vân Nam & Tây Nam", en: "Yunnan & SW" },
      { id: "northwest", vi: "Tây Bắc & Tơ Lụa", en: "Northwest & Silk Road" }
    ];
    var flavorFilters = [
      { id: "all", vi: "Tất cả vị", en: "All Flavors" },
      { id: "mala", vi: "Cay tê Mala", en: "Mala Spicy" },
      { id: "umami", vi: "Thanh đạm Umami", en: "Steamed & Umami" },
      { id: "roast", vi: "Quay nướng & Hầm", en: "Roasted & Hotpot" },
      { id: "dimsum", vi: "Điểm tâm & Mì sợi", en: "Dim Sum & Noodles" },
      { id: "tea", vi: "Danh trà & Dược thiện", en: "Heritage Tea" }
    ];

    return (
      '<section class="cce-v11-section" id="v11-brand-culinary-explorer">' +
      '  <div class="container">' +
      // --- PART A: LÃO TỰ HIỆU ---
      '    <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "CENTURY HERITAGE WORKSHOPS · 中华老字号" : "KHÁM PHÁ THƯƠNG HIỆU LÂU ĐỜI · 中华老字号") + '</div>' +
      '        <h2 class="ed-h2" style="margin:0.15rem 0 0;">' + (enM ? "Search Lão Tự Hiệu Heritage Brands & Jump to 3D Atlas" : "Tra cứu 24 Thương hiệu Lão Tự Hiệu & Định vị trên Bản đồ 3D") + '</h2>' +
      '      </div>' +
      '      <button type="button" class="ed-link-action" data-v11-act="go" data-page="business" data-sub="laozihao">' + (enM ? "Open Full 120-Brand Pavilion →" : "Mở Triển lãm 120 Lão Tự Hiệu →") + '</button>' +
      '    </div>' +
      '    <div class="grid grid-2" style="gap:0.75rem;margin-bottom:0.85rem;align-items:end;">' +
      '      <div>' +
      '        <label for="v11-brand-q" style="font-size:0.76rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">' + (enM ? "Search brand, city or founding year:" : "Tìm thương hiệu, thành phố hoặc năm thành lập:") + '</label>' +
      '        <input id="v11-brand-q" type="text" class="form-input" data-v11-act="brand-q" value="' + esc(st.brandQuery) + '" placeholder="' + (enM ? "e.g., Tongrentang, 1669, Hangzhou, Tea..." : "Ví dụ: Đồng Nhân Đường, 1669, Hàng Châu, Trà Long Tỉnh...") + '" />' +
      '      </div>' +
      '      <div>' +
      '        <label for="v11-brand-cat" style="font-size:0.76rem;font-weight:700;color:var(--text-muted);display:block;margin-bottom:0.25rem;">' + (enM ? "Craft & Industry Domain:" : "Nhóm ngành nghề di sản:") + '</label>' +
      '        <select id="v11-brand-cat" class="form-select" data-v11-act="brand-cat">' +
      '          <option value="all"' + (st.brandCat === "all" ? " selected" : "") + '>' + (enM ? "All Domains" : "Tất cả lĩnh vực di sản") + '</option>' +
      '          <option value="tcm"' + (st.brandCat === "tcm" ? " selected" : "") + '>' + (enM ? "Traditional Medicine" : "Y dược cổ truyền") + '</option>' +
      '          <option value="tea-wine"' + (st.brandCat === "tea-wine" ? " selected" : "") + '>' + (enM ? "Heritage Tea & Liquor" : "Danh trà & Danh tửu") + '</option>' +
      '          <option value="culinary"' + (st.brandCat === "culinary" ? " selected" : "") + '>' + (enM ? "Historic Culinary" : "Ẩm thực lâu đời") + '</option>' +
      '          <option value="craft"' + (st.brandCat === "craft" ? " selected" : "") + '>' + (enM ? "Porcelain, Silk & Craft" : "Gốm sứ, Tơ lụa & Thủ công") + '</option>' +
      '        </select>' +
      '      </div>' +
      '    </div>' +
      '    <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.6rem;"><strong>' + brands.length + '</strong> ' + (enM ? "matching century brands" : "thương hiệu phù hợp") + '</div>' +
      '    <div class="cce-v11-brand-grid">' +
      showBrands.map(function (b) {
        return (
          '<article class="card" style="padding:0.95rem 1.05rem;display:flex;flex-direction:column;gap:0.35rem;">' +
          '  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.4rem;">' +
          '    <span class="badge badge-gold">Est. ' + b.year + ' · ' + esc(enM ? b.cityEn : b.cityVi) + '</span>' +
          '    <span style="font-size:0.71rem;color:var(--text-muted);">' + esc(enM ? b.catEn : b.catVi) + '</span>' +
          '  </div>' +
          '  <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.4rem;">' +
          '    <strong style="font-size:1rem;">' + esc(enM ? b.nameEn : b.nameVi) + '</strong>' +
          '    <span class="hanzi" style="color:#821C1C;font-weight:700;">' + esc(b.zh) + ' ' + speakBtnHtml(b.zh) + '</span>' +
          '  </div>' +
          '  <p style="margin:0.15rem 0 0.4rem;font-size:0.81rem;line-height:1.5;color:var(--text-secondary);">' + esc(enM ? b.craftEn : b.craftVi) + '</p>' +
          '  <div style="margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:0.4rem;padding-top:0.35rem;border-top:1px dashed var(--hairline);">' +
          '    <button type="button" class="ed-link-action" style="padding:0;font-size:0.78rem;" data-v11-act="jump-prov-3d" data-prov="' + esc(b.provId) + '">' + (enM ? "Locate on 3D Map ↗" : "Xem vị trí trên bản đồ 3D ↗") + '</button>' +
          '    <button type="button" class="btn btn-secondary btn-sm" style="padding:0.14rem 0.48rem;font-size:0.71rem;" data-action="open-province-detail" data-id="' + esc(b.provId) + '">' + (enM ? "Province" : "Hồ sơ tỉnh") + '</button>' +
          '  </div>' +
          '</article>'
        );
      }).join("") +
      '    </div>' +
      (brands.length > 6 ? '<div style="margin-top:0.75rem;"><button type="button" class="btn btn-secondary btn-sm" data-v11-act="toggle-brand-all">' + (st.brandShowAll ? (enM ? "Show Compact Top 6" : "Thu gọn còn 6 thương hiệu") : (enM ? "Show All " + brands.length + " Brands →" : "Xem tất cả " + brands.length + " thương hiệu →")) + '</button></div>' : "") +

      // --- PART B: 8 GREAT CUISINES & REGIONAL TEAS ---
      '    <div id="v11-culinary-block" style="margin-top:2.15rem;padding-top:1.75rem;border-top:1px solid var(--hairline);">' +
      '      <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">' +
      '        <div>' +
      '          <div class="editorial-kicker" style="color:#1F6E5C;">' + (enM ? "EIGHT GREAT CUISINES & HERITAGE TEAS · 八大菜系与名茶" : "KHÁM PHÁ MÓN NGON BÁT ĐẠI THÁI HỆ & DANH TRÀ 34 TỈNH") + '</div>' +
      '          <h2 class="ed-h2" style="margin:0.15rem 0 0;">' + (enM ? "Filter Regional Specialties by Culinary Axis & Flavor" : "Lọc Đặc sản Vùng miền & Danh trà theo Hương vị") + '</h2>' +
      '        </div>' +
      '        <button type="button" class="ed-link-action" data-v11-act="go" data-page="regions" data-sub="readiness">' + (enM ? "Open 170+ Provincial Dishes →" : "Mở kho 170+ món ăn 34 tỉnh →") + '</button>' +
      '      </div>' +
      '      <input id="v11-dish-q" type="text" class="form-input" style="max-width:460px;margin-bottom:0.75rem;" data-v11-act="dish-q" value="' + esc(st.dishQuery) + '" placeholder="' + (enM ? "Search dish or tea: Peking duck, Mapo tofu, Longjing..." : "Tìm món ăn hoặc trà: Vịt quay, Đậu phụ Ma Bà, Long Tỉnh, Bún qua cầu...") + '" />' +
      '      <div class="cce-v11-filter-strip" role="group" aria-label="Region Filter">' +
      regFilters.map(function (rf) {
        return '<button type="button" class="filter-pill ' + (st.dishRegion === rf.id ? "active" : "") + '" data-v11-act="dish-reg" data-val="' + rf.id + '">' + esc(enM ? rf.en : rf.vi) + '</button>';
      }).join("") +
      '      </div>' +
      '      <div class="cce-v11-filter-strip" role="group" aria-label="Flavor Filter" style="margin-bottom:0.9rem;">' +
      flavorFilters.map(function (ff) {
        return '<button type="button" class="btn btn-sm ' + (st.dishFlavor === ff.id ? "btn-primary" : "btn-secondary") + '" data-v11-act="dish-flavor" data-val="' + ff.id + '">' + esc(enM ? ff.en : ff.vi) + '</button>';
      }).join("") +
      '      </div>' +
      '      <div style="font-size:0.8rem;color:var(--text-muted);margin-bottom:0.65rem;"><strong>' + dishes.length + '</strong> ' + (enM ? "verified regional specialties" : "món đặc sản & danh trà phù hợp") + '</div>' +
      '      <div class="cce-v11-dish-grid">' +
      showDishes.map(function (d) {
        return (
          '<article class="cce-v11-dish-card">' +
          '  <div class="cce-v11-dish-thumb">' +
          '    <img src="' + esc(d.img) + '" alt="' + esc(enM ? d.nameEn : d.nameVi) + '" loading="lazy" decoding="async" />' +
          '    <span class="cce-v11-dish-badge">' + esc(enM ? d.badgeEn : d.badgeVi) + '</span>' +
          '  </div>' +
          '  <div style="padding:0.8rem 0.9rem;display:flex;flex-direction:column;gap:0.3rem;flex:1;">' +
          '    <div style="display:flex;justify-content:space-between;align-items:baseline;gap:0.35rem;">' +
          '      <strong style="font-size:0.96rem;">' + esc(enM ? d.nameEn : d.nameVi) + '</strong>' +
          speakBtnHtml(d.zh) +
          '    </div>' +
          '    <div class="hanzi" style="font-size:0.8rem;color:#821C1C;font-weight:700;">' + esc(d.zh) + ' · <span style="font-weight:400;color:var(--text-muted);">' + esc(d.py) + '</span></div>' +
          '    <p style="margin:0.15rem 0 0.45rem;font-size:0.79rem;line-height:1.48;color:var(--text-secondary);">' + esc(enM ? d.noteEn : d.noteVi) + '</p>' +
          '    <button type="button" class="ed-link-action" style="margin-top:auto;padding:0;font-size:0.77rem;" data-v11-act="jump-prov-3d" data-prov="' + esc(d.provId) + '">' + (enM ? "View on 3D Map — " : "Xem trên bản đồ — ") + esc(d.provVi) + ' →</button>' +
          '  </div>' +
          '</article>'
        );
      }).join("") +
      '      </div>' +
      (dishes.length > 8 ? '<div style="margin-top:0.85rem;"><button type="button" class="btn btn-secondary btn-sm" data-v11-act="toggle-dish-all">' + (st.dishShowAll ? (enM ? "Show Top 8 Dishes" : "Thu gọn còn 8 món tiêu biểu") : (enM ? "Show All " + dishes.length + " Specialties →" : "Xem tất cả " + dishes.length + " đặc sản →")) + '</button></div>' : "") +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderScholarlyFieldFaq(enM) {
    var list = FAQ_ITEMS.filter(function (f) {
      return st.faqCat === "all" || f.cat === st.faqCat;
    });
    var cats = [
      { id: "all", vi: "Tất cả (12)", en: "All (12)" },
      { id: "field", vi: "Thực địa, 12306 & Alipay", en: "Travel & Payments" },
      { id: "scholar", vi: "Văn hiến, 3D & Hán–Việt", en: "Heritage & Language" },
      { id: "b2b", vi: "Hợp đồng B2B & RCEP", en: "B2B Trade & Law" }
    ];
    return (
      '<section class="cce-v11-section" id="v11-faq-hub">' +
      '  <div class="container">' +
      '    <div class="cce-v11-faq-grid">' +
      '      <div>' +
      '        <div class="editorial-kicker" style="color:#821C1C;">' + (enM ? "SCHOLARLY & FIELD FAQ · HỎI ĐÁP CỐT LÕI" : "GIẢI ĐÁP THỰC ĐỊA & KHẢO CỨU · CÂU HỎI THƯỜNG GẶP") + '</div>' +
      '        <h2 class="ed-h2" style="margin:0.15rem 0 0.55rem;">' + (enM ? "Concise verified answers linked directly to monographs and tools" : "Giải đáp ngắn gọn bằng chứng cứ học thuật & kinh nghiệm thực địa") + '</h2>' +
      '        <div class="cce-v11-filter-strip" style="margin-top:0.75rem;">' +
      cats.map(function (c) {
        return '<button type="button" class="filter-pill ' + (st.faqCat === c.id ? "active" : "") + '" data-v11-act="faq-cat" data-val="' + c.id + '">' + esc(enM ? c.en : c.vi) + '</button>';
      }).join("") +
      '        </div>' +
      '      </div>' +
      '      <div>' +
      list.map(function (item, idx) {
        var isOpen = st.openFaqIdx === idx;
        var deepBtn = item.action === "article"
          ? 'data-action="open-article" data-id="' + esc(item.targetId) + '"'
          : (item.action === "driver"
            ? 'data-v11-act="open-driver" data-idx="0"'
            : 'data-v11-act="go" data-page="' + esc(item.page) + '" data-sub="' + esc(item.sub || "") + '"');
        return (
          '<div class="cce-v11-faq-item">' +
          '  <button type="button" class="cce-v11-faq-btn" data-v11-act="toggle-faq" data-idx="' + idx + '" aria-expanded="' + (isOpen ? "true" : "false") + '">' +
          '    <span>' + esc(enM ? item.qEn : item.qVi) + '</span>' +
          '    <span style="color:#821C1C;flex-shrink:0;">' + (isOpen ? "−" : "+") + '</span>' +
          '  </button>' +
          (isOpen ? (
            '<div class="cce-v11-faq-body">' +
            '  <p style="margin:0 0 0.45rem;">' + esc(enM ? item.aEn : item.aVi) + '</p>' +
            '  <button type="button" class="ed-link-action" style="padding:0;font-size:0.79rem;" ' + deepBtn + '>' + esc(enM ? item.ctaEn : item.ctaVi) + '</button>' +
            '</div>'
          ) : "") +
          '</div>'
        );
      }).join("") +
      '      </div>' +
      '    </div>' +
      '  </div>' +
      '</section>'
    );
  }

  function renderCrossPageKnowledgeStrip(pageId, enM) {
    var bridges = {
      explore: [
        { kicker: "3D STUDIO", titleVi: "100 Mô hình Kiến trúc & Cổ vật 3D", titleEn: "100 Interactive PBR 3D Models", act: "go", page: "museum", sub: "studio3d" },
        { kicker: "TRÀ ĐẠO", titleVi: "Trà Phổ Nhĩ & Rừng Trà Cảnh Mại", titleEn: "Yunnan Pu'erh & Tea-Horse Road", act: "article", targetId: "yunnan-puerh-tea-ancient-tea-horse-road-fermentation-heritage" },
        { kicker: "LUẬT CỔ", titleVi: "Đường Luật Sơ Nghị & Luật Hồng Đức", titleEn: "Tang Code & Hong Duc Comparison", act: "article", targetId: "tang-code-imperial-law-hong-duc" },
        { kicker: "B2B LAW", titleVi: "Pháp chế Công chương & CIETAC/VIAC", titleEn: "B2B Seals & Arbitration Rules", act: "article", targetId: "cross-border-b2b-contracts-cietac-viac" }
      ],
      regions: [
        { kicker: "3D ATLAS", titleVi: "Bản đồ Địa hình 3D 34 Tỉnh & 12 Tuyến G", titleEn: "Split 3D Atlas & HSR Corridors", act: "go", page: "regions", sub: "map4layer" },
        { kicker: "VŨ TRỤ LUẬN", titleVi: "Thiên Đàn Bắc Kinh & Đàn Nam Giao Huế", titleEn: "Temple of Heaven & Hue Altar", act: "article", targetId: "temple-of-heaven-tiantan-cosmology-3d" },
        { kicker: "LÃO TỰ HIỆU", titleVi: "120 Thương hiệu Trăm Năm & Cố đô", titleEn: "120 Century Brands by Province", act: "go", page: "business", sub: "laozihao" },
        { kicker: "NGỮ ÂM", titleVi: "Từ vựng Sinh tồn & Thẻ Tài xế", titleEn: "Survival Hanzi & Driver Cards", act: "go", page: "sino-vietnam", sub: "concierge" }
      ],
      business: [
        { kicker: "CHỨNG CỨ SỐ", titleVi: "Thống kê Thương mại Việt–Trung >350 tỷ USD", titleEn: "Bilateral Trade Monograph", act: "go", page: "business", sub: "corridors" },
        { kicker: "PHÁP CHẾ", titleVi: "Hợp đồng B2B, Dấu Công chương & QC", titleEn: "Contract Law & Company Seals", act: "article", targetId: "cross-border-b2b-contracts-cietac-viac" },
        { kicker: "ĐỒNG HÌNH", titleVi: "25 Cặp từ Đồng hình Dị nghĩa Dễ Nhầm", titleEn: "25 Sino-Viet False Friends", act: "go", page: "sino-vietnam", sub: "phonology" },
        { kicker: "THỰC ĐỊA", titleVi: "Hành trang 12306, Alipay & Hóa đơn Fapiao", titleEn: "12306 Rail & Fapiao Readiness", act: "go", page: "regions", sub: "readiness" }
      ]
    };
    var cards = bridges[pageId] || bridges.explore;
    return (
      '<section class="cce-v11-cross-strip">' +
      '  <div class="editorial-kicker" style="color:#821C1C;margin:0;">' + (enM ? "INTERCONNECTED KNOWLEDGE NETWORK · LIÊN KẾT TRI THỨC ĐA KÊNH" : "MẠNG LƯỚI TRI THỨC LIÊN KẾT ĐA KÊNH") + '</div>' +
      '  <div class="cce-v11-cross-grid">' +
      cards.map(function (c) {
        var attr = c.act === "article"
          ? 'data-action="open-article" data-id="' + esc(c.targetId) + '"'
          : 'data-v11-act="go" data-page="' + esc(c.page) + '" data-sub="' + esc(c.sub || "") + '"';
        return (
          '<button type="button" class="cce-v11-cross-card" ' + attr + '>' +
          '  <span style="font-size:0.68rem;font-weight:800;color:#821C1C;letter-spacing:0.06em;">' + esc(c.kicker) + ' ↗</span>' +
          '  <strong style="font-size:0.86rem;line-height:1.35;">' + esc(enM ? c.titleEn : c.titleVi) + '</strong>' +
          '</button>'
        );
      }).join("") +
      '  </div>' +
      '</section>'
    );
  }

  function renderFooterQuickPills(enM) {
    var pills = [
      { act: "go", page: "regions", sub: "readiness", vi: "Cẩm nang Thực địa 12306 ↗", en: "12306 & Alipay Readiness ↗" },
      { act: "go", page: "museum", sub: "studio3d", vi: "110 Mô hình 3D PBR ↗", en: "110 PBR 3D Models ↗" },
      { act: "go", page: "business", sub: "laozihao", vi: "120 Lão Tự Hiệu ↗", en: "120 Heritage Brands ↗" },
      { act: "jump-prov-3d", prov: "prov-beijing", vi: "Bản đồ 3D 34 Tỉnh ↗", en: "Split 3D Atlas ↗" },
      { act: "article", targetId: "cross-border-b2b-contracts-cietac-viac", vi: "Pháp chế Hợp đồng B2B ↗", en: "B2B Contract Law ↗" },
      { act: "go", page: "learning", sub: "quiz", vi: "Đấu trường 1.000 Câu Hỏi ↗", en: "1,000 Quiz Arena ↗" },
      { act: "feedback", vi: "Đóng góp Ý kiến & Hiệu đính", en: "Reader Feedback" }
    ];
    return (
      '<div class="cce-v11-footer-pills" aria-label="' + (enM ? "Quick Platform Shortcuts" : "Lối tắt chức năng trọng tâm") + '">' +
      pills.map(function (p) {
        if (p.act === "feedback") {
          return '<button type="button" class="cce-v11-footer-pill" data-v10-feedback-open="1" data-v10-feedback-cat="ui_ux">' + esc(enM ? p.en : p.vi) + '</button>';
        }
        var attr = p.act === "article"
          ? 'data-action="open-article" data-id="' + esc(p.targetId) + '"'
          : (p.act === "jump-prov-3d"
            ? 'data-v11-act="jump-prov-3d" data-prov="' + esc(p.prov) + '"'
            : 'data-v11-act="go" data-page="' + esc(p.page) + '" data-sub="' + esc(p.sub || "") + '"');
        return '<button type="button" class="cce-v11-footer-pill" ' + attr + '>' + esc(enM ? p.en : p.vi) + '</button>';
      }).join("") +
      '</div>'
    );
  }

  function updateScrollProgress() {
    var bar = document.getElementById("cce-v11-scroll-bar");
    if (!bar) return;
    var docH = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    var pct = Math.max(0, Math.min(100, (window.scrollY / docH) * 100));
    bar.style.width = pct.toFixed(1) + "%";
  }

  function syncScrollAndObservers() {
    updateScrollProgress();
    if (st.stepObserver) {
      try { st.stepObserver.disconnect(); } catch (_e) {}
      st.stepObserver = null;
    }
    if (typeof IntersectionObserver !== "function") return;
    var cards = document.querySelectorAll("[data-v11-step-spy]");
    if (!cards.length) return;
    st.stepObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (ent) {
        if (ent.isIntersecting && ent.intersectionRatio >= 0.5) {
          var idx = parseInt(ent.target.getAttribute("data-v11-step-spy"), 10);
          if (!isNaN(idx) && idx !== st.activeStep) {
            st.activeStep = idx;
            var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
            var box = document.getElementById("v11-sticky-stage-box");
            if (box) {
              var parent = document.getElementById("v11-guided-journey");
              if (parent) parent.querySelectorAll(".cce-v11-step-card").forEach(function (el, i) { el.classList.toggle("is-active", i === idx); });
              var p = PERSONAS[st.persona] || PERSONAS.scholar;
              var cur = p.steps[idx];
              if (cur) {
                var ctaAttr = cur.act === "article"
                  ? 'data-action="open-article" data-id="' + esc(cur.targetId) + '"'
                  : (cur.act === "driver"
                    ? 'data-v11-act="open-driver" data-idx="' + esc(cur.targetId) + '"'
                    : 'data-v11-act="go" data-page="' + esc(cur.page) + '" data-sub="' + esc(cur.sub || "") + '"');
                box.innerHTML =
                  renderPersonaStageSvg(idx) +
                  '<div style="display:flex;justify-content:space-between;align-items:center;font-family:var(--font-mono,monospace);font-size:0.74rem;color:#E5A93C;"><span>' + esc(enM ? cur.badgeEn : cur.badgeVi) + '</span><strong>' + (enM ? "STEP " : "BƯỚC ") + cur.code + ' / 04</strong></div>' +
                  '<div class="cce-v11-step-meter"><span style="width:' + ((idx + 1) * 25) + '%;"></span></div>' +
                  '<h3 style="font-family:var(--font-editorial);font-size:1.3rem;margin:0 0 0.45rem;color:#FFFFFF;">' + esc(enM ? cur.titleEn : cur.titleVi) + '</h3>' +
                  '<div style="display:flex;align-items:center;gap:0.45rem;flex-wrap:wrap;margin-bottom:0.55rem;"><span class="hanzi" style="color:#F4CE74;font-size:1.02rem;font-weight:700;">' + esc(cur.zh) + '</span><span style="font-size:0.78rem;color:#CBC3B4;">(' + esc(cur.py) + ')</span>' + speakBtnHtml(cur.zh.split("·")[0].trim()) + '</div>' +
                  '<p style="font-size:0.86rem;line-height:1.6;color:#E8E2D5;margin:0 0 0.95rem;">' + esc(enM ? cur.descEn : cur.descVi) + '</p>' +
                  '<button type="button" class="btn btn-gold btn-sm" ' + ctaAttr + '>' + esc(enM ? cur.ctaEn : cur.ctaVi) + '</button>';
              }
            }
          }
        }
      });
    }, { threshold: 0.55, rootMargin: "-15% 0px -25% 0px" });
    for (var k = 0; k < cards.length; k++) st.stepObserver.observe(cards[k]);
  }

  function refreshHost(rootId, htmlFn) {
    var enM = Boolean(window.CCE_STORE && window.CCE_STORE.getState().uiLang === "en");
    var el = rootId ? document.getElementById(rootId) : null;
    if (el && typeof htmlFn === "function") {
      el.outerHTML = htmlFn(enM);
      setTimeout(syncScrollAndObservers, 30);
    } else if (typeof window.CCE_PATCH_MAIN === "function") {
      window.CCE_PATCH_MAIN();
    } else if (typeof window.CCE_RENDER === "function") {
      window.CCE_RENDER();
    }
  }

  function bind() {
    if (st.bound || typeof document === "undefined") return;
    st.bound = true;

    window.addEventListener("scroll", function () {
      if (st.scrollRaf) return;
      st.scrollRaf = requestAnimationFrame(function () {
        st.scrollRaf = 0;
        updateScrollProgress();
      });
    }, { passive: true });

    document.addEventListener("input", function (e) {
      var el = e.target;
      if (!el || !el.getAttribute) return;
      var act = el.getAttribute("data-v11-act");
      if (act === "brand-q") {
        st.brandQuery = el.value || "";
        var pos = el.selectionStart;
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
        var nextIn = document.getElementById("v11-brand-q");
        if (nextIn) { nextIn.focus(); if (typeof pos === "number") nextIn.setSelectionRange(pos, pos); }
      } else if (act === "dish-q") {
        st.dishQuery = el.value || "";
        var posD = el.selectionStart;
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
        var nextD = document.getElementById("v11-dish-q");
        if (nextD) { nextD.focus(); if (typeof posD === "number") nextD.setSelectionRange(posD, posD); }
      }
    });

    document.addEventListener("change", function (e) {
      var el = e.target;
      if (el && el.getAttribute && el.getAttribute("data-v11-act") === "brand-cat") {
        st.brandCat = el.value || "all";
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
      }
    });

    document.addEventListener("click", function (e) {
      var spkBtn = e.target && e.target.closest ? e.target.closest("[data-v11-speak]") : null;
      if (spkBtn) {
        e.stopPropagation();
        speakZh(spkBtn.getAttribute("data-v11-speak"));
        return;
      }

      var el = e.target && e.target.closest ? e.target.closest("[data-v11-act]") : null;
      if (!el) return;
      var act = el.getAttribute("data-v11-act");

      if (act === "toggle-field-mode") {
        st.fieldMode = !st.fieldMode;
        if (typeof window.CCE_RENDER === "function") window.CCE_RENDER();
        else refreshHost("v11-field-hub-box", renderFieldModeQuickHub);
        if (st.fieldMode) setTimeout(function () {
          var b = document.getElementById("v11-field-hub-box");
          if (b && b.scrollIntoView) b.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 60);
      } else if (act === "jump-id") {
        var tid = el.getAttribute("data-target");
        var node = tid ? document.getElementById(tid) : null;
        if (node && node.scrollIntoView) node.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (act === "go") {
        var p = el.getAttribute("data-page") || "explore";
        var sub = el.getAttribute("data-sub") || "";
        if (window.CCE_V10_DECK && typeof window.CCE_V10_DECK.navigateTo === "function") {
          window.CCE_V10_DECK.navigateTo(p, sub || undefined);
        } else if (window.CCE_STORE && typeof window.CCE_STORE.setPage === "function") {
          window.CCE_STORE.setPage(p);
        }
      } else if (act === "jump-prov-3d") {
        var provId = el.getAttribute("data-prov") || "prov-beijing";
        var goMap = function () {
          if (window.CCE_CHINA_3D_MAP) {
            window.CCE_CHINA_3D_MAP.set3DMode(true);
          }
          if (window.CCE_V10_DECK) window.CCE_V10_DECK.navigateTo("regions", "map4layer");
          setTimeout(function () {
            if (window.CCE_CHINA_3D_MAP && typeof window.CCE_CHINA_3D_MAP.focusProvince === "function") {
              window.CCE_CHINA_3D_MAP.focusProvince(provId);
            }
          }, 260);
        };
        if (window.CCE_LAZY && typeof window.CCE_LAZY.ensureMany === "function") {
          window.CCE_LAZY.ensureMany(["3d-pack", "3d-studio-ext-pack"]).then(goMap);
        } else {
          goMap();
        }
      } else if (act === "pick-persona") {
        st.persona = el.getAttribute("data-val") || "scholar";
        st.activeStep = 0;
        refreshHost("v11-guided-journey", renderGuidedJourneySection);
      } else if (act === "pick-step") {
        st.activeStep = parseInt(el.getAttribute("data-idx") || "0", 10) || 0;
        refreshHost("v11-guided-journey", renderGuidedJourneySection);
      } else if (act === "open-driver") {
        st.driverModalIdx = parseInt(el.getAttribute("data-idx") || "0", 10) || 0;
        refreshHost("v11-field-hub-box", renderFieldModeQuickHub);
        setTimeout(function () {
          var box = document.getElementById("v11-field-hub-box");
          if (box && box.scrollIntoView) box.scrollIntoView({ behavior: "smooth", block: "nearest" });
        }, 40);
      } else if (act === "driver-group") {
        st.driverGroup = el.getAttribute("data-val") || "all";
        st.driverModalIdx = 0;
        refreshHost("v11-field-hub-box", renderFieldModeQuickHub);
      } else if (act === "close-driver") {
        st.driverModalIdx = -1;
        refreshHost("v11-field-hub-box", renderFieldModeQuickHub);
      } else if (act === "toggle-brand-all") {
        st.brandShowAll = !st.brandShowAll;
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
      } else if (act === "dish-reg") {
        st.dishRegion = el.getAttribute("data-val") || "all";
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
      } else if (act === "dish-flavor") {
        st.dishFlavor = el.getAttribute("data-val") || "all";
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
      } else if (act === "toggle-dish-all") {
        st.dishShowAll = !st.dishShowAll;
        refreshHost("v11-brand-culinary-explorer", renderBrandAndCulinaryExplorer);
      } else if (act === "faq-cat") {
        st.faqCat = el.getAttribute("data-val") || "all";
        st.openFaqIdx = 0;
        refreshHost("v11-faq-hub", renderScholarlyFieldFaq);
      } else if (act === "toggle-faq") {
        var fIdx = parseInt(el.getAttribute("data-idx") || "0", 10);
        st.openFaqIdx = st.openFaqIdx === fIdx ? -1 : fIdx;
        refreshHost("v11-faq-hub", renderScholarlyFieldFaq);
      }
    });
  }
  bind();

  window.CCE_V11_HUB = {
    isFieldMode: function () { return Boolean(st.fieldMode); },
    renderStickyContextBar: renderStickyContextBar,
    renderFieldModeQuickHub: renderFieldModeQuickHub,
    renderGuidedJourneySection: renderGuidedJourneySection,
    renderBrandAndCulinaryExplorer: renderBrandAndCulinaryExplorer,
    renderScholarlyFieldFaq: renderScholarlyFieldFaq,
    renderCrossPageKnowledgeStrip: renderCrossPageKnowledgeStrip,
    renderFooterQuickPills: renderFooterQuickPills,
    syncScrollAndObservers: syncScrollAndObservers
  };
})();
