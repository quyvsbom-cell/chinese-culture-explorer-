// ============================================================================
// PROMPT A — CORE EN PARITY RUNTIME HELPER & SHARED TRANSLATION LOOKUPS
// Provides window.CCE_EN_FIELD(obj, key, enMode), full Quiz / Research Library
// EN parity, Academic Card Thumbnail caption translation, and taxonomy helpers.
// ============================================================================
(function () {
  "use strict";

  function resolveEnCandidate(obj, key) {
    if (!obj || typeof obj !== "object") return undefined;
    const directEnKey = key + "En";
    if (obj[directEnKey] !== undefined && obj[directEnKey] !== null && obj[directEnKey] !== "") {
      return obj[directEnKey];
    }
    if (key.endsWith("Vi") && key.length > 2) {
      const stemEnKey = key.slice(0, -2) + "En";
      if (obj[stemEnKey] !== undefined && obj[stemEnKey] !== null && obj[stemEnKey] !== "") {
        return obj[stemEnKey];
      }
    }
    if (key === "vietnamese" && obj.english) {
      return obj.english;
    }
    return undefined;
  }

  function enField(obj, key, enMode) {
    if (!obj || typeof obj !== "object") return "";
    if (!enMode) {
      const raw = obj[key];
      return raw !== undefined && raw !== null ? raw : "";
    }
    const enCandidate = resolveEnCandidate(obj, key);
    if (enCandidate !== undefined) return enCandidate;
    const fallback = obj[key];
    return fallback !== undefined && fallback !== null ? fallback : "";
  }

  const PROVINCE_TYPE_EN = {
    "Thành phố trực thuộc TW": "Direct-Controlled Municipality",
    "Đô thị trung ương": "Direct-Controlled Municipality",
    "Tỉnh": "Province",
    "Khu tự trị": "Autonomous Region",
    "Khu tự trị dân tộc Choang": "Zhuang Autonomous Region",
    "Khu tự trị dân tộc Hồi": "Hui Autonomous Region",
    "Khu tự trị Duy Ngô Nhĩ": "Uyghur Autonomous Region",
    "Đặc khu hành chính (SAR)": "Special Administrative Region (SAR)",
    "Đặc khu Hành chính": "Special Administrative Region (SAR)",
    "Đặc khu hành chính": "Special Administrative Region (SAR)"
  };

  const REGION_LABEL_EN = {
    "Hoa Bắc": "North China",
    "Đông Bắc": "Northeast China",
    "Hoa Đông": "East China",
    "Hoa Đông / Hoa Bắc": "East / North China",
    "Hoa Đông / Hoa Trung": "East / Central China",
    "Hoa Trung": "Central China",
    "Hoa Trung (Trung Nguyên)": "Central China (Central Plains)",
    "Hoa Nam": "South China",
    "Hoa Nam (Lĩnh Nam)": "South China (Lingnan)",
    "Hoa Nam / Đông Nam": "South / Southeast China",
    "Hoa Nam (Vùng Vịnh Lớn)": "South China (Greater Bay Area)",
    "Đông Nam / Hải Đảo": "Southeast / Island",
    "Tây Nam": "Southwest China",
    "Tây Nam (Thanh Tạng)": "Southwest China (Qinghai–Tibet Plateau)",
    "Tây Bắc": "Northwest China",
    "Tây Bắc / Thanh Tạng": "Northwest / Qinghai–Tibet Plateau",
    "Hoa Bắc / Thảo nguyên": "North China / Steppe"
  };

  const TIMELINE_EVENT_TYPE_EN = {
    "dynasty": "Dynasty",
    "event": "Turning Point",
    "philosophy": "Philosophy & Thought",
    "figure": "Historical Figure",
    "culture": "Cultural Achievement"
  };

  const SECTION_BANNER_CAPTION_EN = {
    "history": "Aerial view of the Great Wall winding along steep mountain ridges of Juyongguan Pass, linking agrarian empires with Eurasian steppe corridors.",
    "philosophy": "Architectural complex of Qufu Confucius Temple (Shandong) honoring more than twenty-five centuries of Confucian humanistic scholarship and civil education.",
    "traditional": "Traditional Ming–Qing Chinese pavilion and courtyard eaves harmoniously framing scholar-garden rocks and tranquil waters.",
    "culture": "Classical East Asian cosmology, calendar wisdom, scholar gardens, and performing arts spanning ancient traditions to modern expression.",
    "regions": "Karst limestone peaks of Guilin and Yangshuo rising beside the jade waters of the Li River in southern China.",
    "sinoVietnam": "Thang Long – Hanoi Imperial Citadel Heritage & comparative Sinosphere stone steles bridging Vietnamese and East Asian classical civilization.",
    "sino-vietnam": "Thang Long – Hanoi Imperial Citadel Heritage & comparative Sinosphere stone steles bridging Vietnamese and East Asian classical civilization.",
    "business": "Shanghai Lujiazui international financial skyline overlooking the Yangtze Estuary — nerve center of Asia–Pacific trade and capital.",
    "library": "Wenjin Pavilion archival repository housing the Siku Quanshu Four Treasuries, classical scholarship, and bilateral trade research.",
    "intelligence": "Wenjin Pavilion archival repository housing the Siku Quanshu Four Treasuries, classical scholarship, and bilateral trade research.",
    "learning": "Yinqueshan Han Dynasty Bamboo Slips & classical script study traditions linking etymology, contextual flashcards, and research notebooks."
  };

  const ACADEMIC_CAPTIONS_EN = {
    "Tử Cấm Thành Bắc Kinh — Trục lễ nghi kiến trúc cung đình Trung Hoa": "Forbidden City Beijing — Imperial Ritual & Palace Axis",
    "Đội quân đất nung Tần Thủy Hoàng tại Tây An — Di sản khảo cổ học": "Terracotta Warriors at Xi'an — Archaeological Heritage",
    "Tranh lụa Mã Vương Đôi (Tây Hán, 168 TCN) — Bảo tàng Hồ Nam": "Mawangdui Western Han Silk Banner (168 BCE) — Hunan Museum",
    "Tượng gốm Tam thái (Sancai) Lạc đà Con đường Tơ lụa thời Đường": "Tang Sancai Glazed Silk Road Camel Figurine",
    "Thẻ tre Ngân Tước Sơn — Văn bản cổ học thời Chiến Quốc - Tây Hán": "Yinqueshan Bamboo Slips — Warring States & Han Texts",
    "Chân dung triết gia cổ đại và truyền thống Đạo học Đông Á": "Ancient Sage Portrait & East Asian Philosophical Lineage",
    "Chân dung Vương Dương Minh — Học thuyết Tâm học và Tri hành hợp nhất": "Wang Yangming — Mind Learning & Unity of Knowledge and Action",
    "Chuyết Chính Viên (Tô Châu) — Mỹ học viên lâm Giang Nam": "Humble Administrator's Garden (Suzhou) — Jiangnan Scholar Landscape",
    "Tây Hồ Hàng Châu — Trung tâm văn hóa và thương mại Giang Nam": "West Lake Hangzhou — Cultural & Commercial Heartland of Jiangnan",
    "Phố cổ Cẩm Lý (Thành Đô) — Văn hóa Ba Thục và trà quán Tây Nam": "Jinli Street (Chengdu) — Ba–Shu Heritage & Teahouse Culture",
    "Sông Ly Giang (Quế Lâm) — Địa mạo Karst đá vôi Hoa Nam": "Li River (Guilin) — Southern Limestone Karst Landscape",
    "Khuê Văn Các — Văn Miếu Quốc Tử Giám Hà Nội (Giao lưu văn hiến Trung - Việt)": "Khue Van Cac Pavilion, Hanoi Temple of Literature — Sino–Vietnamese Dialogue",
    "Nghệ thuật Kinh kịch truyền thống — Di sản phi vật thể UNESCO": "Classical Peking Opera — UNESCO Intangible Cultural Heritage",
    "Cổ cầm thất huyền — Nhạc khí của bậc quân tử và văn nhân": "Seven-String Guqin Zither — Instrument of Sages & Literati",
    "Kiến trúc cổ điển và lễ khí vương triều Trung Hoa": "Classical Palace Architecture & Dynastic Ritual Craft",
    "《Lan Đình Tập Tự》 (Đường Thần Long mô bản) — Mỹ học Hành thư & Triện khắc": "Preface to the Orchid Pavilion — Running Script & Seal Carving",
    "Nghệ thuật Trà đạo Công phu trà (工夫茶) và văn hóa ẩm trà": "Gongfu Tea Ceremony (工夫茶) & Brewing Aesthetics",
    "Bến Thượng Hải và Lục Gia Chủy — Trung tâm tài chính Đông Á": "Shanghai Bund & Lujiazui — East Asian Financial Hub",
    "Thâm Quyến — Trung tâm phần cứng, bán dẫn và AI Vùng Vịnh Lớn": "Shenzhen — Hardware, Semiconductor & AI Innovation Engine",
    "Hành lang thương mại và chuỗi cung ứng xuyên biên giới Việt - Trung": "Cross-Border Vietnam–China Trade & RCEP Supply Corridor",
    "Phòng thí nghiệm AI & cụm máy chủ tính toán hiệu năng cao": "AI Compute Cluster & High-Efficiency Inference Architecture",
    "Lục Đại Trà Loại và nghệ thuật trà Công phu": "Six Major Chinese Tea Categories & Gongfu Brewing",
    "Nghệ thuật ẩm thực Bát Đại Thái Hệ Trung Hoa": "Eight Great Regional Culinary Traditions of China",
    "Nghệ thuật Trà đạo": "Classical Chinese Tea Art & Ceremony",
    "Y sử & Triết học Dưỡng sinh": "Medical History & Seasonal Yangsheng Philosophy",
    "Cổ tịch khắc bản gỗ & thư phòng văn nhân": "Woodblock Classics & Literati Study",
    "Tơ lụa cổ truyền & thêu tay Hán phục trong bảo tàng": "Traditional Silk Weaving & Museum Hanfu Craft",
    "Kiến trúc Thư viện cổ điển trong rừng trúc": "Classical Academy Architecture Amid Bamboo Groves",
    "Hệ sinh thái tạo mẫu phần cứng Hoa Cường Bắc – Thâm Quyến": "Huaqiangbei Shenzhen Hardware Prototyping Ecosystem",
    "Hiệu buôn cổ truyền Lão Tự Hiệu hơn trăm năm lịch sử": "Time-Honored Commercial Heritage (Laozihao)",
    "Không gian tiếp đón và đàm phán thương mại B2B Đông Á": "East Asian B2B Reception & Contract Negotiation Setting",
    "Hồ sơ thực địa & hành trình công tác biên giới Trung - Việt": "Field Dossier & Cross-Border Business Readiness",
    "Nghi thức trà lễ và tặng quà ngoại giao trên bàn tiệc": "Diplomatic Tea Service & Formal Banquet Protocol",
    "Quản trị Nho thương (儒商): Đức trị, lễ nghi gia đình và đạo đức thương nhân Đông Á": "Confucian Merchant Ethos (Rúshāng): Family Stewardship & Integrity",
    "Mạng lưới Quan hệ (关系) và vốn xã hội trong đàm phán – liên kết doanh nghiệp Hoa ngữ": "Guanxi Networks & Social Capital in Business Negotiations",
    "Thể diện (面子) và giao tiếp gián tiếp trên bàn trà đàm phán thương mại": "Mianzi (Social Face) & High-Context Tea-Table Diplomacy",
    "Nhân tình (人情) và nguyên tắc có đi có lại dài hạn trên bàn tiệc – tiếp đón đối tác": "Renqing & Long-Term Reciprocity in Partner Hospitality",
    "Cấu trúc Gia tộc & Sai Tự Cách Cục (差序格局) trong xã hội truyền thống.": "Lineage Organization & Differential Mode of Association",
    "Mô hình gia tộc thương nhân Giang Nam, Triều Châu và cấu trúc truyền thừa đa thế hệ": "Jiangnan & Chaozhou Family Merchant Multi-Generational Succession",
    "Đối chiếu doanh nghiệp nhà nước (国企) Bắc Kinh và khối tư nhân năng động Hoa Nam": "Beijing State Enterprises vs. Agile Southern Private Tech",
    "Nghi thức trao danh thiếp hai tay, mời trà và thứ bậc lễ tân doanh nghiệp": "Two-Handed Business Card Exchange & Seating Protocol",
    "Nghi thức Bàn tiệc, tặng quà và tôn ti trường ấu.": "Formal Banquet Seating, Toasts & Gift Protocol",
    "Giao tiếp ngữ cảnh cao (High-Context) và chuẩn xác thuật ngữ thương mại Hoa – Việt": "High-Context Communication & Sino–Vietnamese Contract Terminology",
    "Siêu ứng dụng WeChat, Xiaohongshu và hệ sinh thái thương mại nội dung.": "Super-App Ecosystems (WeChat & Xiaohongshu) & Social Commerce",
    "Hệ sinh thái thương mại điện tử và livestream Hàng Châu – Trung tâm kinh tế số": "Hangzhou Digital Commerce & Livestreaming Retail Ecosystem",
    "Chuỗi cung ứng sản xuất vùng Đồng bằng Châu Giang – RCEP và kết nối logistics": "Pearl River Delta Manufacturing & RCEP Logistics Links",
    "Cụm công nghiệp phần cứng Thâm Quyến (Hoa Cường Bắc) – Đông Quản – Nghĩa Ô": "Shenzhen–Dongguan–Yiwu Electronics & Wholesale Clusters",
    "Quy trình đặt hàng OEM/ODM Quảng Châu – Đông Quản, kiểm định AQL và kiểm toán nhà máy": "OEM/ODM Sourcing, AQL Quality Inspection & Factory Audits",
    "Quy trình chứng từ C/O Form E (ACFTA), RCEP và điều kiện giao hàng Incoterms 2020": "ACFTA Form E, RCEP Rules of Origin & Incoterms Documentation",
    "Vận tải biển container và mạng lưới cảng biển Đông Á": "Maritime Container Shipping & East Asian Deep-Water Ports",
    "Cửa khẩu thông minh, đường sắt khổ chuẩn 1.435 mm và hành lang vận tải đa phương thức": "Smart Border Gates, Standard-Gauge Rail & Multimodal Freight",
    "Thương mại song phương Việt – Trung, cơ cấu ngành hàng và hành lang RCEP": "China–Vietnam Bilateral Trade Corridor & RCEP Supply Chains",
    "Hành vi người tiêu dùng đô thị thế hệ Z, Quốc triều (国潮) và trải nghiệm bán lẻ mới": "Gen-Z Urban Consumers, Guochao & New Retail Trends",
    "Bảo hộ sở hữu trí tuệ, đăng ký nhãn hiệu và di sản thương hiệu Quốc triều – Lão Tự Hiệu": "IP Protection, Trademark Filing & Heritage Branding",
    "Thanh toán quốc tế L/C, T/T và cơ chế kết toán xuyên biên giới tại Bến Thượng Hải": "Letters of Credit, Cross-Border RMB Settlement & Trade Finance",
    "Lộ trình học bổng CSC, du học đại học trọng điểm Trung Quốc và năng lực Hán ngữ": "CSC Scholarship Pathways & Academic Study in China",
    "Hạ tầng R&D viễn thông, bán dẫn AI và đám mây công nghiệp tại Vùng Vịnh Lớn": "Greater Bay Area Telecom R&D, AI Chips & Industrial Cloud",
    "Thâm Quyến — Trụ sở Tencent, Hoa Cường Bắc và siêu ứng dụng WeChat": "Shenzhen — Tencent HQ & Integrated Hardware Innovation",
    "Hàng Châu — Cái nôi hệ sinh thái Alibaba & thương mại điện tử toàn cầu": "Hangzhou — Digital Platform Economics & Global E-Commerce",
    "Bắc Kinh — Trụ sở JD.com và mạng lưới kho vận tự động hóa": "Beijing — Automated Fulfillment Logistics & AI Retail",
    "Thượng Hải — Chuỗi cung ứng C2M trực tiếp từ nhà máy và thương mại xuyên biên giới": "Shanghai — Direct-to-Factory C2M Platforms & Global Logistics",
    "Mô hình quản trị RenDanHeYi (人单合一) từ Sơn Đông vươn ra toàn cầu": "Shandong Zero-Boundary Micro-Enterprise Management (RenDanHeYi)",
    "Chuỗi sản xuất xe năng lượng mới (NEV) và pin LFP Quảng Đông": "Guangdong New-Energy Vehicle (NEV) & LFP Battery Clusters",
    "Ninh Đức (Phúc Kiến) — Công nghệ pin lưu trữ năng lượng và chuỗi cung ứng xanh": "Ningde (Fujian) — EV Powertrain & Clean Energy Storage Supply Chain",
    "Chuỗi may mặc phản ứng nhanh theo dữ liệu (On-Demand Apparel) Quảng Châu": "Guangzhou Data-Driven Small-Batch Quick-Response Apparel",
    "Hệ sinh thái AIoT và chiến lược bán lẻ phần cứng Bắc Kinh – Thượng Hải": "Beijing–Shanghai Smart AIoT Hardware Ecosystem",
    "Thị trường tiêu dùng thế hệ Z, nhượng quyền F&B và nghệ thuật IP tại các đô thị": "Urban Gen-Z Consumer IP Collectibles & Scaled F&B Franchising",
    "Tết Nguyên Đán (春节) — Lễ hội đoàn viên lớn nhất năm Âm lịch.": "Lunar New Year — Family Reunion & Auspicious Renewal",
    "Tết Nguyên Tiêu (元宵节) — Đêm hội hoa đăng rằm tháng Giêng.": "Lantern Festival — Full-Moon Processions & Poetic Riddles",
    "Tiết Thanh Minh (清明节) — Tảo mộ tri ân tiên tổ và du xuân.": "Qingming Ancestral Remembrance & Spring Outing",
    "Tết Đoan Ngọ (端午节) — Đua thuyền rồng tưởng nhớ Khuất Nguyên.": "Dragon Boat Festival — Racing Crew & Sticky-Rice Dumplings",
    "Lễ Thất Tịch (七夕节) — Khất Xảo thêu thùa và truyền thuyết Ngưu Lang Chức Nữ.": "Qixi Seventh-Night Craft Festival & Celestial Romance",
    "Tết Trung Thu (中秋节) — Thưởng trăng, đèn lồng và bánh đoàn viên.": "Mid-Autumn Full-Moon Reunion & Mooncake Gifting",
    "Tết Trùng Cửu (重阳节) — Đăng cao ngắm thu và kính lão trường thọ.": "Double Ninth Highland Ascent & Reverence for Elders",
    "Tiết Đông Chí (冬至) — Bánh trôi sủi cảo mùa đông và dưỡng sinh Bổ Thận.": "Winter Solstice Equilibrium & Seasonal Health Food",
    "Lễ Lạp Bát & Trung Nguyên — Cháo bát bảo và tập tục cộng đồng vùng Mân Nam.": "Laba & Ghost Festival Communal Offerings",
    "Tín ngưỡng Thờ cúng Tổ tiên (祭祖) — Từ đỉnh đồng Thương Chu đến Từ đường.": "Ancestral Veneration — From Ritual Bronzes to Clan Halls",
    "Hôn lễ truyền thống — Lục Lễ và Phượng Quan Hà Bối sắc đỏ hỷ sự.": "Traditional Chinese Wedding Rites & Crimson Ceremonial Attire",
    "Tang lễ & Hiếu đạo cổ truyền — Từ đường gia tộc và đạo lý tưởng niệm.": "Traditional Mourning Rites, Filial Piety & Lineage Memory",
    "Văn hóa Trà đạo Công phu trà (工夫茶) và lễ nghi mời khách.": "Gongfu Tea Hospitality Rituals & Utensils",
    "Ẩm thực Bát Đại Thái Hệ và mỹ học sum họp bàn tròn.": "Eight Great Regional Cuisines & Round-Table Banqueting",
    "Tứ Nghệ Văn Nhân: Cầm – Kỳ – Thi – Họa trong đời sống sĩ đại phu.": "Four Literati Arts: Zither, Weiqi, Poetry & Painting",
    "Di sản Y quan & Lụa tơ tằm trong phong tục sinh hoạt qua các triều đại.": "Historical Silk Dress & Ceremonial Vestments Across Dynasties",
    "Tập tục đặt tên, Tự, Hiệu và Ngũ hành trong tên họ người Hoa.": "Naming Traditions, Courtesy Names, Literary Sobriquets & Surnames",
    "Lễ nhạc cổ điển — Biên chung, Quan lễ và tế tự cộng đồng.": "Classical Ritual Bronze Bell Music & Community Ceremonies",
    "Thư pháp Trung Hoa — Tứ bảo thư phòng và Ngũ thể Triện, Lệ, Khải, Hành, Thảo.": "Five Calligraphic Scripts & Four Treasures of the Study",
    "Quốc họa Thủy mặc (水墨画) — Lý luận Khí Vận Sinh Động và Tam Viễn pháp.": "Ink-Wash Painting — Rhythmic Vitality & Three-Distance Perspective",
    "Thi ca cổ điển — Từ Kinh Thi, Đường thi niêm luật đến Tống từ.": "Classical Poetry — Book of Odes, Tang Regulated Verse & Song Lyrics",
    "Văn học cổ điển & Tứ Đại Danh tác tiểu thuyết chương hồi.": "Four Great Classical Novels & Dramatic Prose Literature",
    "Viên lâm Giang Nam — Chuyết Chính Viên và nghệ thuật mượn cảnh (Tá cảnh).": "Suzhou Jiangnan Gardens — Borrowed Scenery Architecture",
    "Kiến trúc gỗ Đấu củng (斗拱) chống địa chấn và cung điện Tứ Hợp Viện.": "Seismic Timber Dougong Bracketry & Imperial Courtyards",
    "Gốm sứ Trung Hoa — Thanh hoa Cảnh Đức Trấn, Nhữ Diêu và Men Đấu Thái.": "Song Ru Celadon, Jingdezhen Blue-and-White & Doucai Porcelain",
    "Kinh kịch (京剧) — Tứ đại hành đương Sinh, Đán, Tịnh, Sửu.": "Peking Opera Archetypes — Sheng, Dan, Jing & Chou",
    "Nhạc khí truyền thống — Cổ cầm thất huyền, Tỳ bà và Nhị hồ.": "Classical Instruments — Guqin Zither, Pipa Lute & Erhu",
    "Nghệ thuật Đá ngọc & Thanh đồng khí — Ngọc Tông Lương Chử và Đỉnh Thương Chu.": "Ancient Nephrite Jade Carving & Shang–Zhou Ritual Bronzes",
    "Triện khắc Kim Thạch học (篆刻) — Chữ Tiểu triện trên đá Thanh Điền và Thọ Sơn.": "Seal Carving & Epigraphic Small-Seal Stone Engraving",
    "Tứ đại Danh tú (Tô, Tương, Việt, Thục) & gấm Vân Cẩm Nam Kinh.": "Four Great Silk Embroidery Styles & Nanjing Yunjin Brocade",
    "Văn Phòng Tứ Bảo (Bút – Mực – Giấy – Nghiên) & Ấn triện thư phòng.": "Four Treasures of the Studio & Scholar Seal Collections",
    "Điêu khắc Hang đá Phật giáo — Mạc Cao Đôn Hoàng, Vân Cương và Long Môn.": "Buddhist Cave Sculpture — Dunhuang, Yungang & Longmen",
    "Đô thị thông minh Bắc Kinh – Thượng Hải – Thâm Quyến và nhịp sống không tiền mặt.": "Cashless Digital Infrastructure in Tier-1 Chinese Megacities",
    "Công nghiệp AI tạo sinh, hoạt họa Quốc mạn và trò chơi điện tử Trung Quốc.": "Generative AI Engineering, Guoman Animation & Digital Games",
    "Văn hóa Thế hệ Z & Làn sóng Quốc Triều (国潮 Guócháo) phục hưng di sản.": "Gen-Z Neo-Traditional Guochao Creative Wave"
  };

  function academicCaptionEn(rawCaption, badgeLabel, enMode) {
    if (!enMode) return rawCaption || "";
    if (!rawCaption) return badgeLabel || "";
    const trimmed = String(rawCaption).trim();
    if (ACADEMIC_CAPTIONS_EN[trimmed]) return ACADEMIC_CAPTIONS_EN[trimmed];
    if (!/[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ]/i.test(trimmed)) {
      return trimmed;
    }
    return badgeLabel ? String(badgeLabel) : "Archival Cultural Reference";
  }

  // English translations for ALL 20 Active Recall / Feynman quiz questions
  const QUIZ_BANK_EN = {
    "q1": {
      categoryEn: "History & Archaeology",
      questionEn: "Which dynasty left China's earliest contemporary archaeologically verified full writing system?",
      optionsEn: [
        "Three Sovereigns & Five Emperors (transmitted only in late legend)",
        "Xia Dynasty at the Erlitou site",
        "Shang Dynasty Oracle Bone Script (Jiaguwen) at Anyang Yinxu",
        "Warring States Guodian bamboo slips"
      ],
      explanationEn: "Shang Oracle Bone inscriptions excavated at Anyang Yinxu (~1250–1046 BCE) confirm royal genealogy independently corroborated by Sima Qian's *Shiji*."
    },
    "q2": {
      categoryEn: "Character Etymology (Active Recall)",
      questionEn: "Inspecting the Hanzi above (留白): what are its accurate aesthetic meaning and Pinyin?",
      optionsEn: [
        "liúbái — Intentional negative void left uninked to evoke misty infinity and reflective space",
        "báihuà — Modern vernacular prose promoted in the May Fourth Movement",
        "shuǐmò — Mixing five distinct shades of soot ink in landscape brushwork",
        "bāguà — Eight trigrams forming the basis of the Zhouyi"
      ],
      explanationEn: "Liubai (留白) turns unpainted silk or paper into water, clouds, or calm breathing room embodying the Daoist dynamic between Being and Non-Being."
    },
    "q3": {
      categoryEn: "Cosmology & Calendar Epistemology",
      questionEn: "Which statement accurately distinguishes the 24 Solar Terms (二十四节气) from traditional divinatory frameworks?",
      optionsEn: [
        "The 24 Solar Terms form a purely lunar calendar tracking Moon phases",
        "The 24 Solar Terms track solar ecliptic longitude every 15° (solar component), integrated into China's lunisolar farming calendar",
        "Five Phases theory equals the modern periodic table of chemical elements",
        "Ziwei Doushu astrology calculates physical starlight radiation"
      ],
      explanationEn: "Each 15° solar step along Earth's orbit defines predictable agricultural seasons (e.g., Qingming April 4–5), paired separately with lunar month cycles."
    },
    "q4": {
      categoryEn: "Sino–Vietnamese Cultural Exchange",
      questionEn: "Which statement best captures Sino–Vietnamese phonology and the invention of Chữ Nôm in Vietnamese history?",
      optionsEn: [
        "Vietnamese and Chinese descend from the same Sino–Tibetan language family",
        "Sino–Vietnamese readings preserve Tang–Song Middle Chinese codas, while Chữ Nôm is Vietnam's indigenous vernacular script built on Sinitic principles",
        "Chữ Nôm was designed by the Tang court in Chang'an for Annam",
        "Every Sino–Vietnamese compound retains the exact modern Mandarin meaning"
      ],
      explanationEn: "Vietnamese belongs to the Austroasiatic family; scholars adapted Tang–Song phonetic strata into Sino–Vietnamese readings and invented Chữ Nôm independently."
    },
    "q5": {
      categoryEn: "B2B Culture & Regional Hubs",
      questionEn: "Comparing Beijing ('Jingpai') vs. Shanghai ('Haipai') business environments, what contrast is most commonly observed?",
      optionsEn: [
        "All Chinese cities run on identical corporate norms",
        "Shanghai stresses contractual clarity, crisp work–life separation, and cosmopolitan norms, whereas Beijing engages policy institutions and state hierarchies",
        "Beijing municipal firms negotiate primarily in Cantonese",
        "Personal Guanxi lets foreign firms skip compliance audits in Shanghai"
      ],
      explanationEn: "Regional culture shapes cadence and signaling, yet competitive global deals still demand rigorous pricing, quality specs, and statutory contracts."
    },
    "q6": {
      categoryEn: "Sociology & Business Lexicon",
      questionEn: "What does Fei Xiaotong's 1947 sociological concept 差序格局 ('Differential Mode of Association') describe?",
      optionsEn: [
        "Vertical division of factory assembly lines across industrial clusters",
        "Concentric rings of social trust radiating outward from the individual by relational closeness rather than uniform impersonal citizenship",
        "Classification of six Chinese tea varieties by oxidation degree",
        "The Tang Dynasty Three Departments and Six Ministries charter"
      ],
      explanationEn: "Chaxu Geju illuminates why trust reciprocity (Guanxi and Renqing) often precedes formal contracts unless mediated through corporate governance."
    },
    "q7": {
      categoryEn: "Feynman Reflection (Short Answer)",
      questionEn: "Explain in your own words: Why should Wuxing (五行) not be translated as five static material substances, and how do you separate its philosophical model from modern science?",
      modelAnswerEn: "1) Xing (行) signifies dynamic phase movement — Generating (Sheng) and Restraining (Ke) feedback loops — rather than inert elements. 2) Epistemologically it operates as correlative cosmology guiding Chinese medicine and ecological pattern-thinking without substituting for modern physics or chemistry."
    },
    "q8": {
      categoryEn: "Historical Maritime Commerce",
      questionEn: "Which Tang–Song–Yuan port authority oversaw overseas merchant junks, customs levies, and bonded maritime trade across Guangzhou and Quanzhou?",
      optionsEn: [
        "Imperial Craft Bureau (Shougongju)",
        "Maritime Trade Superintendency (Shibosi 市舶司)",
        "Hanlin Imperial Academy (翰林院)",
        "Astronomical Observatory (司天监)"
      ],
      explanationEn: "Established under Tang–Song dynasties, the Shibosi regulated Maritime Silk Road tariffs linking China, Dai Viet's Van Don, and Indian Ocean ports."
    },
    "q9": {
      categoryEn: "Classical Astronomy & Almanac",
      questionEn: "Inspecting the Hanzi directly without Pinyin: what astronomical cycle does 二十四节气 track?",
      optionsEn: [
        "Twenty-four monthly lunar festival observances",
        "Twenty-four solar ecliptic milestones separated by 15° longitude guiding farming and seasonal wellness",
        "Twenty-four ancient Shang bronze weight measurements",
        "Twenty-four legal statutes codified by Shang Yang"
      ],
      explanationEn: "Solar ecliptic milestones anchor sowing, harvest, and *Huangdi Neijing* seasonal prevention."
    },
    "q10": {
      categoryEn: "Calendrical Methods in Cosmology",
      questionEn: "What is the key calendrical difference between Bazi Four Pillars (子平八字) and Ziwei Doushu?",
      optionsEn: [
        "Bazi plots branches strictly by Solar Terms, whereas Ziwei Doushu arranges symbolic stars by lunar birth month and hour",
        "Bazi uses Mercury's orbital longitude while Ziwei follows Roman solar dates",
        "Both were invented using 21st-century quantum computers",
        "Ziwei excludes Earthly Branches altogether"
      ],
      explanationEn: "Recognizing their contrasting solar vs. lunar calendrical calculations situates both traditions clearly as symbolic cultural heritage."
    },
    "q11": {
      categoryEn: "Cross-Border Trade & Customs Compliance",
      questionEn: "To qualify a China–Vietnam shipment for preferential ACFTA tariff exemption via C/O Form E, what condition is strictly mandatory?",
      optionsEn: [
        "Simply stamping a seller seal upon the Commercial Invoice",
        "Meeting origin rules (WO, CTC, or minimum 40% RVC) with exact consistency across Invoice, Packing List, Bill of Lading, and Form E",
        "Defaulting to the highest MFN statutory duty",
        "Omitting 8-digit HS classification inside customs declarations"
      ],
      explanationEn: "Post-clearance customs audits frequently disallow Form E preferences when gross weights, HS headings, or invoice descriptions mismatch."
    },
    "q12": {
      categoryEn: "Interdisciplinary Feynman Prompt (Sino–Vietnam Trade)",
      questionEn: "Explain in 3–5 sentences: What structural parallels and differences connect 15th-century Chu Dau ceramic trade with Vietnam's role inside today's RCEP/ACFTA supply chain?",
      modelAnswerEn: "Both eras leverage Vietnam's maritime geography beside South China's industrial clusters (15th-century Chu Dau export cobalt ware vs. modern electronics/machinery assembly and agro-exports). Ancient trade ran via seasonal monsoons and Shibosi port guilds, whereas modern trade operates via WTO HS codes, Form E/RCEP rules of origin, Incoterms, and smart digital borders."
    },
    "q13": {
      categoryEn: "Civil Service Examination Institutional History",
      questionEn: "Which Northern Song administrative safeguards prevented examiners from recognizing aristocratic candidates' handwriting?",
      optionsEn: [
        "Replacing written essays purely with oral interviews",
        "Implementing sealed name-masking ('Huming' 糊名) alongside crimson-ink manuscript transcription ('Tenglu' 誊录)",
        "Restricting Palace Examinations solely to hereditary nobles",
        "Testing military archery instead of classical essays"
      ],
      explanationEn: "Sealed masking and red-ink copying established blind meritocratic grading fairness later adopted across East Asia."
    },
    "q14": {
      categoryEn: "Foreign Trade Contract Law · Legal Etymology",
      questionEn: "In bilateral Chinese trade contracts, what crucial statutory distinction separates 定金 from 订金?",
      optionsEn: [
        "Both graphs carry identical enforceable penalties",
        "定金 (Civil Code Art. 587) imposes statutory double-deposit forfeiture if breached, whereas 订金 acts solely as an ordinary refundable prepayment",
        "订金 enforces a 10× penalty clause automatically",
        "定金 applies solely to residential leases"
      ],
      explanationEn: "Though both read 'dingjin', mistakenly writing 订金 removes the double-deposit deterrent protecting buyers against unilateral supplier default."
    },
    "q15": {
      categoryEn: "History of Science & Engineering",
      questionEn: "Which 1637 encyclopedic manual by Song Yingxing is celebrated as China's finest 17th-century industrial and agricultural engineering compendium?",
      optionsEn: [
        "Li Shizhen's *Compendium of Materia Medica* (本草纲目)",
        "Song Yingxing's *Exploitation of the Works of Nature* (*Tiangong Kaiwu* 天工开物)",
        "Sima Guang's *Comprehensive Mirror in Aid of Governance* (资治通鉴)",
        "Liu Xie's *The Literary Mind and the Carving of Dragons*"
      ],
      explanationEn: "*Tiangong Kaiwu* systematically illustrated rice farming, silk drawlooms, Jingdezhen porcelain kilns, metallurgy, papermaking, and ocean vessels."
    },
    "q16": {
      categoryEn: "Ming Mind Learning · Classical Concept",
      questionEn: "What core thesis does Wang Yangming's philosophical proposition 知行合一 ('Unity of Knowledge and Action') advance?",
      optionsEn: [
        "Authentic moral knowing inherently realizes itself in action — genuine knowledge and conduct form one seamless continuum",
        "Book learning must be divorced wholly from public service",
        "Silent seated meditation alone fulfills social responsibility",
        "All technical skills are innate without dedicated practice"
      ],
      explanationEn: "In *Instructions for Practical Living* (*Chuanxilu*), Wang Yangming attacked sterile scholastic hypocrisy divorced from ethical conduct."
    },
    "q17": {
      categoryEn: "Seal Carving & Epigraphic Aesthetics",
      questionEn: "In stone seal engraving (篆刻), how do relief seals ('Zhuwen' 朱文) differ visually from intaglio seals ('Baiwen' 白文)?",
      optionsEn: [
        "Zhuwen carves away background stone leaving raised cinnabar-red strokes; Baiwen carves hollowed strokes reading crisp white inside a solid red ground",
        "Zhuwen stamps exclusively in black carbon ink while Baiwen uses azure ink",
        "Zhuwen restricts characters to cursive grass script",
        "Only emperors could stamp Baiwen intaglio seals"
      ],
      explanationEn: "Traditional colophon mountings balance airy relief seals (Zhuwen) paired side-by-side with grounded intaglio impressions (Baiwen)."
    },
    "q18": {
      categoryEn: "Sino–Vietnamese False Friends",
      questionEn: "When a Chinese partner remarks '我们遇到了一点困难，需要做个检讨', which translation is accurate?",
      optionsEn: [
        "Literal Sino–Vietnamese sound reading implying calamity",
        "Modern idiomatic reading: 'We ran into a minor operational hurdle (困难) and need to conduct an internal self-review (检讨)'",
        "Immediate termination of the entire supply contract",
        "Notice of a mandatory 20% tariff surcharge"
      ],
      explanationEn: "In contemporary Mandarin, 困难 means 'difficulty/hurdle' and 检讨 means 'self-review/corrective audit', diverging starkly from modern Vietnamese false friends."
    },
    "q19": {
      categoryEn: "Apparel Supply Chains & Cross-Border E-Commerce",
      questionEn: "How does Guangzhou/SHEIN's 'Small-Batch Quick-Response' (小单快反) manufacturing model eliminate deadstock risk?",
      optionsEn: [
        "By weaving one million units per SKU upfront for multi-year warehousing",
        "Running agile 100–200 piece test batches synced to live demand signals, automatically triggering rapid workshop replenishment only for verified hits",
        "Requiring minimum 50,000-unit initial factory runs",
        "Avoiding digital ERP tracking across Panyu workshops"
      ],
      explanationEn: "Digitally connected workshop ERP turns Panyu sewing clusters into sub-10-day responsive demand engines."
    },
    "q20": {
      categoryEn: "Feynman Synthesis: Imperial Academies in East Asia",
      questionEn: "Reflect in 3–4 sentences: Why did both Beijing's Imperial College and Hanoi's Temple of Literature carve stone Doctor Steles honoring laureates, and what enduring educational lesson holds today?",
      modelAnswerEn: "Both monuments enshrined meritocratic scholarly honor alongside civic duty ('Talented individuals sustain the state' — 1484 Hanoi stele), keeping scholars accountable before history. For modern education, preserving deep reverence for scholarship while replacing rote formulaic testing with empirical critical inquiry remains timeless."
    }
  };

  const RESEARCH_LIB_CATEGORIES_EN = {
    "primary-texts": {
      nameEn: "Primary Manuscripts & Classical Archives",
      itemsEn: [
        { titleEn: "Chinese Text Project (CText Digital Classical Archive)", institutionEn: "Open Classical Sinology Library", dateEn: "Continuously Updated", typeEn: "Primary Text Database", verificationEn: "Essential reference for pre-Qin to Qing classical characters; verify against Zhonghua Book Company critical editions for academic citation." },
        { titleEn: "National Library of China — Rare Books & Digital Gazettes", institutionEn: "National Library of China (Beijing)", dateEn: "National Repository", typeEn: "Official National Archive", verificationEn: "Tier-1 primary source for woodblock facsimiles, local gazetteers, and imperial historiography." },
        { titleEn: "The Palace Museum Digital Artifact Registry", institutionEn: "The Palace Museum, Beijing", dateEn: "Open Museum Portal", typeEn: "National Museum", verificationEn: "Authoritative provenance records for Ming–Qing imperial calligraphy, bronzes, porcelain, and palace architecture." }
      ]
    },
    "academic-databases": {
      nameEn: "Peer-Reviewed Academic Databases & Journals",
      itemsEn: [
        { titleEn: "National Center for Philosophy & Social Sciences (NCPSSD)", institutionEn: "Chinese Academy of Social Sciences (CASS)", dateEn: "Official Open Access", typeEn: "Open Humanities Repository", verificationEn: "Free open-access repository spanning millions of CSSCI & PKU Core humanities, history, and economics papers." },
        { titleEn: "CNKI, Wanfang Data & VIP Citation Indexes", institutionEn: "Leading Chinese Academic Indexes", dateEn: "Institutional / University Access", typeEn: "Scholarly Index", verificationEn: "Standard academic gateway distinguishing CSSCI peer-reviewed core journals from general periodicals." },
        { titleEn: "Stanford Encyclopedia of Philosophy (Chinese Philosophy)", institutionEn: "Stanford University", dateEn: "Continuous Peer Review", typeEn: "Peer-Reviewed Reference", verificationEn: "International scholarly baseline covering Confucianism, Daoism, Mohism, Logicians, and comparative epistemology." }
      ]
    },
    "gov-econ-trade": {
      nameEn: "Official Statistical, Customs & Education Portals",
      itemsEn: [
        { titleEn: "National Bureau of Statistics of China (NBS)", institutionEn: "State Statistical Authority", dateEn: "Annual & Quarterly Releases", typeEn: "Official Statistics", verificationEn: "Tier-1 statistical source for GDP, industrial output, and urban demographics; verify enterprise threshold definitions." },
        { titleEn: "General Administration of Customs (GACC) & MOFCOM", institutionEn: "Ministries of the PRC", dateEn: "Ongoing Policy Releases", typeEn: "Trade & Customs Authority", verificationEn: "Reference portal for China–Vietnam trade volumes, cross-border e-commerce codes (9610/9710), and RCEP/ACFTA origin rules." },
        { titleEn: "China Scholarship Council (CSC — CampusChina)", institutionEn: "Ministry of Education & CSC", dateEn: "Annual Admissions Cycle", typeEn: "Official Scholarship Portal", verificationEn: "Authoritative admissions portal verifying HSK requirements, CSCA policies, and Type A/B university deadlines." }
      ]
    },
    "discovery-platforms": {
      nameEn: "Social Observation & Field Discovery Platforms (Cross-Verify)",
      itemsEn: [
        { titleEn: "Zhihu, WeChat Official Accounts, Xiaohongshu & Baidu Baike", institutionEn: "Domestic Chinese Digital Platforms", dateEn: "Real-Time Cultural Pulse", typeEn: "Exploratory Context (Unverified Alone)", verificationEn: "METHODOLOGY NOTICE: Helpful for observing contemporary campus and consumer sentiment, NEVER cited as sole factual proof without primary-source verification." }
      ]
    }
  };

  if (window.CCE_LEARNING_RESEARCH) {
    if (Array.isArray(window.CCE_LEARNING_RESEARCH.quizBank)) {
      window.CCE_LEARNING_RESEARCH.quizBank.forEach((q) => {
        const p = QUIZ_BANK_EN[q.id];
        if (p) Object.assign(q, p);
      });
    }
    if (window.CCE_LEARNING_RESEARCH.researchLibrary && Array.isArray(window.CCE_LEARNING_RESEARCH.researchLibrary.categories)) {
      window.CCE_LEARNING_RESEARCH.researchLibrary.categories.forEach((cat) => {
        const cEn = RESEARCH_LIB_CATEGORIES_EN[cat.id];
        if (!cEn) return;
        cat.nameEn = cEn.nameEn;
        if (Array.isArray(cat.items)) {
          cat.items.forEach((it, idx) => {
            if (cEn.itemsEn[idx]) Object.assign(it, cEn.itemsEn[idx]);
          });
        }
      });
    }
  }

  if (window.CCE_REGIONS) {
    window.CCE_REGIONS.diversityNoteEn =
      "Spanning ~9.6 million km², China exhibits profound ecological contrasts—from northern loess plateaus and arid Silk Road oases to subtropical Lingnan coasts and highland Himalayan valleys—shaping six cultural macro-regions and 34 provincial administrative divisions.";

    const MACRO_PROVINCES_EN = {
      north: "Beijing (Municipality), Tianjin (Municipality), Hebei, Shanxi, Inner Mongolia Autonomous Region.",
      east: "Shanghai (Municipality), Jiangsu, Zhejiang, Anhui, Fujian, Jiangxi, Shandong.",
      south: "Henan, Hubei, Hunan, Guangdong, Guangxi Zhuang AR, Hainan, Hong Kong SAR, Macau SAR.",
      southwest: "Chongqing (Municipality), Sichuan, Guizhou, Yunnan, Tibet Autonomous Region.",
      northwest: "Shaanxi, Gansu, Qinghai, Ningxia Hui AR, Xinjiang Uyghur AR.",
      northeast: "Liaoning, Jilin, Heilongjiang."
    };
    (window.CCE_REGIONS.macroRegions || []).forEach((mr) => {
      if (MACRO_PROVINCES_EN[mr.id]) mr.provincesEn = MACRO_PROVINCES_EN[mr.id];
    });

    const CAPITAL_EN_MAP = {
      "Bắc Kinh": "Beijing",
      "Thiên Tân": "Tianjin",
      "Thượng Hải": "Shanghai",
      "Trùng Khánh": "Chongqing",
      "Thạch Gia Trang": "Shijiazhuang",
      "Thái Nguyên": "Taiyuan",
      "Thẩm Dương": "Shenyang",
      "Trường Xuân": "Changchun",
      "Cáp Nhĩ Tân": "Harbin",
      "Nam Kinh": "Nanjing",
      "Hàng Châu": "Hangzhou",
      "Hợp Phì": "Hefei",
      "Phúc Châu": "Fuzhou",
      "Nam Xương": "Nanchang",
      "Tế Nam": "Jinan",
      "Trịnh Châu": "Zhengzhou",
      "Vũ Hán": "Wuhan",
      "Trường Sa": "Changsha",
      "Quảng Châu": "Guangzhou",
      "Hải Khẩu": "Haikou",
      "Thành Đô": "Chengdu",
      "Quý Dương": "Guiyang",
      "Côn Minh": "Kunming",
      "Tây An": "Xi'an",
      "Lan Châu": "Lanzhou",
      "Tây Ninh": "Xining",
      "Đài Bắc": "Taipei",
      "Hô Hòa Hạo Đặc": "Hohhot",
      "Nam Ninh": "Nanning",
      "Lạp Tát": "Lhasa",
      "Ngân Xuyên": "Yinchuan",
      "Ô Lỗ Mộc Tề": "Urumqi",
      "Hồng Kông": "Hong Kong (Victoria City / Central)",
      "Ma Cao": "Macau Peninsula"
    };
    (window.CCE_REGIONS.provincesDirectory || []).forEach((pr) => {
      if (pr.capital && CAPITAL_EN_MAP[pr.capital]) {
        pr.capitalEn = CAPITAL_EN_MAP[pr.capital];
      }
      if (pr.capital && !pr.capitalEn) {
        const clean = String(pr.capital).replace(/\s*\([^)]*\)/g, "").trim();
        pr.capitalEn = CAPITAL_EN_MAP[clean] || clean;
      }
    });
  }

  // Runtime EN enrichment for Metaphysics (epistemology banner, Five Phases, Bagua)
  if (window.CCE_METAPHYSICS) {
    if (window.CCE_METAPHYSICS.epistemologyBanner) {
      window.CCE_METAPHYSICS.epistemologyBanner.titleEn = "Scholarly & Epistemological Framework";
      window.CCE_METAPHYSICS.epistemologyBanner.descriptionEn =
        "Traditional Chinese cosmological and correlative frameworks (Shushuxue 术数学) constitute a rich philosophical and cultural archive documenting how classical thinkers modeled time, space, and social harmony. This portal carefully distinguishes (1) historical/archaeological evidence, (2) traditional cosmology, (3) philosophical interpretation, (4) folk religion, and (5) modern empirical science — never treating ancient divination claims as scientifically tested laws.";
    }
    const BAGUA_EN = {
      "Càn": { nameEn: "Qian", elementEn: "Metal", natureEn: "Heaven", familyEn: "Father", qualityEn: "Strong, creative" },
      "Khôn": { nameEn: "Kun", elementEn: "Earth", natureEn: "Earth", familyEn: "Mother", qualityEn: "Receptive, nurturing" },
      "Chấn": { nameEn: "Zhen", elementEn: "Wood", natureEn: "Thunder", familyEn: "Eldest Son", qualityEn: "Arousing, dynamic" },
      "Tốn": { nameEn: "Xun", elementEn: "Wood", natureEn: "Wind", familyEn: "Eldest Daughter", qualityEn: "Gentle, penetrating" },
      "Khảm": { nameEn: "Kan", elementEn: "Water", natureEn: "Water", familyEn: "Middle Son", qualityEn: "Abyssal, profound" },
      "Ly": { nameEn: "Li", elementEn: "Fire", natureEn: "Fire", familyEn: "Middle Daughter", qualityEn: "Clarity, illuminating" },
      "Cấn": { nameEn: "Gen", elementEn: "Earth", natureEn: "Mountain", familyEn: "Youngest Son", qualityEn: "Stillness, boundary" },
      "Đoài": { nameEn: "Dui", elementEn: "Metal", natureEn: "Marsh / Lake", familyEn: "Youngest Daughter", qualityEn: "Joyous, expressive" }
    };
    (window.CCE_METAPHYSICS.baguaList || []).forEach((b) => {
      const m = BAGUA_EN[b.nameVi];
      if (m) Object.assign(b, m);
    });
    const WUXING_EN = {
      wood: { nameEn: "Wood", seasonEn: "Spring", directionEn: "East", organEn: "Liver / Gallbladder", generatesEn: "Fire", overcomesEn: "Earth" },
      fire: { nameEn: "Fire", seasonEn: "Summer", directionEn: "South", organEn: "Heart / Small Intestine", generatesEn: "Earth", overcomesEn: "Metal" },
      earth: { nameEn: "Earth", seasonEn: "Late Summer", directionEn: "Center", organEn: "Spleen / Stomach", generatesEn: "Metal", overcomesEn: "Water" },
      metal: { nameEn: "Metal", seasonEn: "Autumn", directionEn: "West", organEn: "Lung / Large Intestine", generatesEn: "Water", overcomesEn: "Wood" },
      water: { nameEn: "Water", seasonEn: "Winter", directionEn: "North", organEn: "Kidney / Bladder", generatesEn: "Wood", overcomesEn: "Fire" }
    };
    (window.CCE_METAPHYSICS.fiveElementsGraph || []).forEach((w) => {
      const e = WUXING_EN[w.id];
      if (e) Object.assign(w, e);
    });

    const METAPHYSICS_SYSTEMS_EN = {
      "yinyang": {
        categoryEn: "Foundational Cosmology",
        originsEn: "Evolved from concrete topographic sunlight references—shady slope (Yin 阴) vs. sunlit slope (Yang 阳) in the Book of Odes and Zhou bronze inscriptions—into complementary cosmic principles in the Yijing (Xici) and Dao De Jing.",
        classicalTextsEn: ["《周易·系辞》 (Appended Statements)", "《黄帝内经·素问》 (Yellow Emperor's Classic)", "《春秋繁露》 (Dong Zhongshu)"],
        structureEn: "Four dynamic interaction laws: mutual opposition and constraint (对立制约), mutual interdependence (互根互用), waxing-and-waning balance (消长平衡), and cyclical reciprocal transformation (相互转化).",
        schoolsEn: "Warring States Yin–Yang School; Han Imperial Correlative Exegesis; Song Neo-Confucian Taiji Diagrams (Zhou Dunyi); Classical Chinese Medicine.",
        histEn: "Confirmed on Warring States bamboo slips and pre-Qin texts as empirical pairs observing light, slope exposure, and seasonal temperature.",
        philEn: "Dialectical relational framework conceptualizing dynamic polarity, complementarity, and rhythmic change.",
        sciEn: "Philosophical and taxonomic framework—NOT two physical particles or measurable laboratory forces."
      },
      "wuxing": {
        categoryEn: "Foundational Cosmology",
        originsEn: "Attested earliest in Shangshu ('Great Plan') as five vital material resources (Water, Fire, Wood, Metal, Earth), later systematized by Warring States thinker Zou Yan into five dynamic transformative phases ('Xing' means motion, not static chemical elements).",
        classicalTextsEn: ["《尚书·洪范》", "《礼记·月令》", "《黄帝内经》", "《五行大义》 (Xiao Ji)"],
        structureEn: "Driven by dual cycles: Generating (Phase Sheng: Wood→Fire→Earth→Metal→Water) and Restraining (Phase Ke: Wood→Earth→Water→Fire→Metal), supplemented by Over-Acting and Insulting imbalance feedback.",
        schoolsEn: "Zou Yan's Dynastic Cycle Theory; TCM Zang-Fu organ correspondences; Bazi Destiny lineages.",
        histEn: "Guodian and Mawangdui bamboo texts reveal multiple early ordering sequences before Western Han standardization.",
        philEn: "Correlative relational taxonomy linking seasons, directions, colors, organs, and ethical conduct.",
        sciEn: "Not equivalent to the modern chemical periodic table; its value lies in systems ecology and historical East Asian medicine."
      },
      "bagua": {
        categoryEn: "Yijing Symbolic Matrix",
        originsEn: "Eight 3-line combinations of unbroken Yang (⚊) and broken Yin (⚋) forming 2³ = 8 core trigrams. Attributed mythically to Fuxi, yet archaeological 'numerical trigram' oracle inscriptions prove Bronze-Age numeric precursors.",
        classicalTextsEn: ["《周易·说卦》", "《京氏易传》", "《皇极经世》 (Shao Yong)"],
        structureEn: "Two canonical arrangements: Earlier Heaven Fuxi Bagua (polar Yin–Yang symmetry) and Later Heaven King Wen Bagua (seasonal directional flow across the year).",
        schoolsEn: "Han Image-and-Number Divination (Jing Fang); Song Cosmology (Shao Yong); Daoist Inner Alchemy & Fengshui.",
        histEn: "Shang–Zhou oracle bones and bronzes preserve six-digit numeric strings preceding standardized solid/broken line graphics.",
        philEn: "Binary representational architecture (admired centuries later by Gottfried Leibniz in 17th-century Europe).",
        sciEn: "Historical abstract symbolic grammar; directional/auspicious attributions belong to cultural-philosophical tradition."
      },
      "yijing-system": {
        categoryEn: "Core Classic & Methodology",
        originsEn: "Stacking two 3-line trigrams produces 64 6-line hexagrams (2⁶ = 64) and 384 moving lines. Originating as a Zhou-era yarrow-stalk divination manual (Zhouyi), Confucian Ten Wings commentaries elevated it into China's foremost philosophical Book of Changes.",
        classicalTextsEn: ["《周易正义》 (Wang Bi & Kong Yingda)", "《周易本义》 (Zhu Xi)", "《周易折中》"],
        structureEn: "Three foundational principles: Invariance (the constant rule of change), Transformation (perpetual flux), and Simplicity (clarity of timing).",
        schoolsEn: "Dual 2,000-year lineages: Moral Meaning & Principle (Yili: Wang Bi, Cheng Yi) vs. Image & Number Numerology (Xiangshu: Jing Fang, Shao Yong).",
        histEn: "The Mawangdui silk manuscript (168 BCE) and Shanghai Museum slips attest textual variation prior to Han imperial canonization.",
        philEn: "Structured framework for situational judgment ('Timely Mean' 时中), contingency planning, and ethical steadiness.",
        sciEn: "Coin or yarrow randomness lacks causal predictive physics; enduring value resides in structured strategic self-reflection."
      },
      "tiangan-dizhi": {
        categoryEn: "Calendar & Chronology",
        originsEn: "Pairing the 10 Heavenly Stems (Jia to Gui) with 12 Earthly Branches (Zi to Hai) cycles smoothly across their least common multiple of 60 combinations (Sexagenary Jiazi Cycle), attested on Shang oracle bones recording consecutive days since 1300 BCE.",
        classicalTextsEn: ["《尔雅·释天》", "《淮南子·天文训》", "《协纪辨方书》"],
        structureEn: "Encodes years, months, days, and double-hours (12 Shichen of 2 hours each) paired systematically with Five Phases, Yin–Yang polarity, and later 12 zodiac animal mnemonics.",
        schoolsEn: "Imperial Astronomy Bureaus, Agricultural Almanacs, Traditional Sino–Vietnamese Chronology (Can Chi), and TCM Chronomedicine.",
        histEn: "Unbroken empirical 60-day count from Anyang oracle records to modern calendars forms humanity's oldest continuous timekeeping standard.",
        philEn: "Captures qualitative seasonal rhythms ('when Qi peaks and recedes') rather than purely linear mechanical seconds.",
        sciEn: "Rigorous mathematical modulo-60 calendrical ring; zodiac fortune folklore rests on cultural metaphor rather than astronomy."
      },
      "bazi": {
        categoryEn: "Correlative Destiny Analysis",
        originsEn: "Formalized from Tang scholar Li Xuzhong (Three Pillars) to Northern Song Master Xu Ziping, encoding a birth date's year, month, day, and hour into four Gan–Zhi pairs (Eight Characters / Bazi) analyzed via Five Phases balance.",
        classicalTextsEn: ["《渊海子平》 (Xu Sheng)", "《三命通会》 (Wan Minying)", "《滴天髓》", "《穷通宝鉴》"],
        structureEn: "Takes the Day Stem as the core Self ('Day Master') and evaluates environmental interaction across Month Season Strength, Ten Gods relationships, and Decadal Luck Pillars.",
        schoolsEn: "Classic Ziping格局 (Pattern School) vs. Seasonal Cooling–Warming Adjustments (Tiaohou School).",
        histEn: "Peak institutional popularity in Ming–Qing literate society as an introspective framework for career timing and Temperament reflection.",
        philEn: "Conceptualizes individual resilience and temperament in analogy with seasonal botanical ecology.",
        sciEn: "Correlative symbolic tradition without replicable empirical statistical predictive validity in controlled scientific trials."
      },
      "ziweidoushu": {
        categoryEn: "Symbolic Star Mapping",
        originsEn: "Named after the North Pole Imperial Star Ziwei, combining pre-Tang astral nomenclature with Southern Song–Ming Twelve Palace house grids (Self, Parents, Career, Wealth, Marriage) attributed traditionally to Chen Tuan and Luo Hongxian.",
        classicalTextsEn: ["《紫微斗数全书》", "《紫微斗数全集》", "《十八飞星策天紫微斗数》"],
        structureEn: "Distributes >100 imaginary symbolic stars (14 Major Stars led by Ziwei & Tianfu) across 12 Branch Palaces transformed annually by Four Catalysts (Lu–Quan–Ke–Ji).",
        schoolsEn: "Southern School ('Sanhe Three Harmonies' weighing star combinations) vs. Northern River School ('Si Hua' Four Transformation vectors).",
        histEn: "Cataloged Ming–Qing mathematical-symbolic traditions later popularized across Taiwan, Hong Kong, and Vietnam (Tử Vi Đẩu Số).",
        philEn: "Uses dramatic court bureaucracy metaphors to stimulate reflection on competing life roles, ambition, and interpersonal friction.",
        sciEn: "Calculated imaginary astral tables independent of real astrophysics and astronomical constellations; non-scientific cultural practice."
      },
      "fengshui": {
        categoryEn: "Environmental & Spatial Culture",
        originsEn: "Rooted in early Han–Jin geomantic siting texts (Guo Pu's *Book of Burial*, *Huangdi Zhaijing*) seeking sheltered, sunlit, flooded-free settlements ('Backing mountains to embrace sunlit water plains').",
        classicalTextsEn: ["《葬书》 (Guo Pu, Jin)", "《撼龙经》 & 《疑龙经》 (Yang Yunsong)", "《阳宅三要》", "《八宅明镜》"],
        structureEn: "Dual pillars: Form School (Forms, Topography & Microclimate: Dragon ridge, Sand flanks, Water drainage, Sunlit Courtyard) and Compass School (Sanhe–Xuankong magnetic directional bearings).",
        schoolsEn: "Jiangxi Form School (Yang Yunsong) and Fujian Compass Luopan School.",
        histEn: "Guided imperial city planning (Chang'an, Beijing, Hue Citadel), courtyard architecture, and ecologically resilient Chinese clan villages (e.g., Hongcun).",
        philEn: "Harmonizing human dwellings harmoniously inside living watershed topography ('Tian Ren He Yi').",
        sciEn: "Traditional siting principles align demonstrably with passive solar gain, windbreaks, slope stability, and hygiene; magnetic 'star flight' lore lacks physical mechanisms."
      },
      "qimendunjia": {
        categoryEn: "Classical Military Matrix",
        originsEn: "One of the Three Grand Matrices (San Shi) traced through Han–Tang–Song military manuals (*Wubei Zhi*), abstracting celestial direction, seasonal terrain, and tactical timing into a moving 3×3 Luo Shu spatial grid.",
        classicalTextsEn: ["《烟波钓叟歌》 (Song)", "《奇门遁甲秘笈大全》", "《御定奇门宝鉴》"],
        structureEn: "Layers Four Concentric Rings (Heaven, Earth, Eight Gates, Nine Stars, Eight Spirits) sliding dynamically over Nine Palaces by Solar Term and 2-hour window.",
        schoolsEn: "Time-Window School (Shijia Qimen) vs. Annual/Daily Plates and 'Rotating vs. Flying' Nine-Palace permutations.",
        histEn: "Historically studied by military staff officers and later popular novels (e.g., *Romance of the Three Kingdoms*) celebrating Zhuge Liang's strategic lore.",
        philEn: "Trains systematic simultaneous evaluation of Terrain (Gates), Timing (Stars), Moral Momentum (Spirits), and Reserves.",
        sciEn: "Algebraic spatio-temporal chessboard rooted in folk military tradition; lacks empirically verified predictive power over battlefield outcomes."
      },
      "solar-terms": {
        categoryEn: "UNESCO Intangible Astronomy",
        originsEn: "Codified definitively in Western Han *Huainanzi* ('Treatise on Celestial Patterns', 139 BCE) by dividing Earth's 360° solar ecliptic orbit into 24 equal 15° intervals (~15.2 days per term) aligned strictly with sunlight zeniths.",
        classicalTextsEn: ["《淮南子·天文训》", "《礼记·月令》", "《七十二候》"],
        structureEn: "Starts at Lichun (Start of Spring, 315° solar longitude), marking equinoxes, solstices, heat peaks, frosts, and agricultural rhythm cues—inscribed as UNESCO Intangible Cultural Heritage (2016).",
        schoolsEn: "Northern Yellow River Agrarian Calendar, TCM Seasonal Nourishment (Yangsheng), and Vietnamese Rural Proverbs (Tiết Lập Xuân, Vũ Thủy, Thanh Minh).",
        histEn: "Proven archaeologically by Western Han sundials and clepsydra water-clock calibration standards.",
        philEn: "Aligns diet, farm labor, clothing, and rest thoughtfully with true solar insolation rather than abstract bureaucracy.",
        sciEn: "100% astronomically sound solar-longitude measurement calibrated specifically to mid-latitude East Asian temperate climates."
      },
      "chinese-calendar": {
        categoryEn: "Lunisolar Mathematics",
        originsEn: "Synthesized across millennia from Han *Taichu* Calendar to Guo Shoujing's Yuan-era *Shoushi Calendar* (achieving 365.2425 days—matching the Gregorian tropical year centuries earlier!).",
        classicalTextsEn: ["《太初历》 (104 BCE)", "《大明历》 (Zu Chongzhi)", "《授时历》 (Guo Shoujing)"],
        structureEn: "Harmonizes 29.53-day lunar phases (determining month lengths & festivals) with the 365.24-day solar year by inserting 7 leap months every 19 Metonic cycles ('19-year 7-intercalation rule').",
        schoolsEn: "Historical Imperial Calendar Bureaus (Qin Tian Jian) vs. Vietnamese Imperial Calendars adjusted by +1/+0h coastal longitude shifts.",
        histEn: "Recorded solar eclipses, sunspots, and supernovae (such as the 1054 CE Crab Nebula recorded by Song astronomers) with unmatched continuity.",
        philEn: "Orchestrates ocean tides, lunar civic holidays, and seasonal farming seamlessly inside one dual celestial clock.",
        sciEn: "Exact celestial mechanics grounded in observational gnomon-shadow astronomy and high-precision interpolation mathematics."
      },
      "tcm-zangxiang-meridians": {
        categoryEn: "Classical Medical History",
        originsEn: "Systematized during Warring States–Han inside *Huangdi Neijing* (c. 2nd c. BCE) and Mawangdui silk medical scrolls, modeling human physiology through functional Zang-Fu organ networks and Meridian pathways ('Jingluo').",
        classicalTextsEn: ["《黄帝内经》(素问·灵枢)", "《难经》", "《伤寒杂病论》 (Zhang Zhongjing)", "《本草纲目》 (Li Shizhen)"],
        structureEn: "Integrates Qi–Blood–Body Fluid flow, Twelve Primary Meridians, Four Diagnostic Methods (Inspection, Auscultation, Inquiry, Pulse), and herbal Monarch–Minister–Assistant–Envoy formulations.",
        schoolsEn: "Warm Disease (Wenbing) vs. Cold Damage (Shanghan) Schools; Jin–Yuan Four Medical Masters; Sino–Vietnamese Nam Y integration (Tue Tinh, Hai Thuong Lan Ong).",
        histEn: "Mawangdui silk texts and Chengdu Laoguanshan lacquer acupuncture figurines trace 2,200+ years of empirical bedside clinical observation.",
        philEn: "Emphasizes preventive balance ('Treating disease before illness manifests' 治未病) and holism integrating climate, mind, and body.",
        sciEn: "Acupuncture analgesia and botanical pharmacology (notably Tu Youyou's Nobel-winning artemisinin discovery) yield active biomedicine; traditional Qi meridian metaphysics remain historical heuristic models."
      },
      "hetu-luoshu": {
        categoryEn: "Early Combinatorics & Symbolism",
        originsEn: "Alluded to in *Yijing · Xici* ('From the River emerged the Diagram; from the Luo emerged the Writing') and systematized by Northern Song cosmologists Chen Tuan, Liu Mu, Shao Yong, and Zhu Xi.",
        classicalTextsEn: ["《周易·系辞上》", "《大戴礼记·明堂》", "《周易本义》", "《易学启蒙》"],
        structureEn: "Hetu pairs Yin–Yang Five-Phase generating numbers (1–10), while Luoshu forms humanity's oldest 3×3 Magic Square whose every row, column, and diagonal sums identically to 15.",
        schoolsEn: "Song Image–Number Scholarship, Nine-Palace Medical Winds (*Lingshu*), and Xuan Kong directional grids.",
        histEn: "Excavated Han Taiyi Nine-Palace lacquer boards (165 BCE) prove pre-Song archaeological existence of the 3×3 Luo Shu grid.",
        philEn: "Models cosmic equity through mathematical rotational balance centered calmly around number 5.",
        sciEn: "Mathematically verified unique 3×3 normal magic square up to dihedral symmetry; auspicious star-flight readings belong to cultural numerology."
      },
      "liuren-taiyi": {
        categoryEn: "Ancient Three Cosmic Boards",
        originsEn: "Alongside Qimen Dunjia formed the 'Three Styles' (*Sanshi* 三式) recorded in the Sui and Song official Histories as elite astronomical–calendrical calculation matrices.",
        classicalTextsEn: ["《太乙金镜式经》", "《六壬大全》", "《大六壬指南》"],
        structureEn: "Taiyi calculates macro historical epoch cycles; Da Liuren rotates the 12 Monthly Sun Generals onto 12 Earthly Branches to derive Four Lessons and Three Transmissions.",
        schoolsEn: "Tang–Song Bureau of Astronomy specialists and Ming–Qing Jiangnan scholar Liuren academies.",
        histEn: "Excavated Western Han lacquered double-disc rotating 'Shi' shipan cosmographs preserve exact instrument geometry.",
        philEn: "Structures problem evolution across three progressive stages: Initial Trigger, Mid-Course Shift, and Resolution.",
        sciEn: "Combinatorial calendrical artifacts lacking empirical validity for forecasting modern geopolitical crises or disasters."
      },
      "meihua-yishu": {
        categoryEn: "Image-Number Correlative Thought",
        originsEn: "Six-Line Najia stems from Western Han scholar Jing Fang (77–37 BCE) pairing 64 hexagrams with Can Chi stems and branches, whereas Plum Blossom Numerology (attributed to Song master Shao Yong) derives hexagrams swiftly from observed numbers or times.",
        classicalTextsEn: ["《京氏易传》", "《梅花易数》", "《增删卜易》", "《卜筮正宗》"],
        structureEn: "Divides each hexagram into Subject ('Ti' Host) vs. Environment ('Yong' Guest), analyzing Five-Phase birth/restraint shifts through Nuclear and Changing hexagrams.",
        schoolsEn: "Han Jing Fang Correlative School vs. Song Shao Yong Symbolic Observation School.",
        histEn: "Widely copied across late imperial East Asia, inspiring numerous Han–Nom Yijing manuscript commentaries in Vietnam.",
        philEn: "Cultivates keen observational mindfulness ('Observing Objects to Seize Images') and Subject–Context analysis.",
        sciEn: "Random coin tosses or clock inputs possess no causal forecasting power; practical utility lies solely in structured reflective framing."
      },
      "physiognomy-bingjian": {
        categoryEn: "Classical Observational Personnel",
        originsEn: "Ancient physiognomy (*Xiangxue* 相学) drew early rationalist critique from Xunzi (*Against Physiognomy*), before Wei scholar Liu Shao (*Renwuzhi*) and Qing statesman Zeng Guofan (*Bingjian*, Mirror of Ice) refined demeanor-based talent appraisal.",
        classicalTextsEn: ["《人物志》 (Liu Shao)", "《冰鉴》 (Zeng Guofan)", "《荀子·非相》"],
        structureEn: "Prioritizes seven observable comportment cues—bearing, firmness–gentleness, composure, spirit, voice clarity, gaze integrity, and speech discipline—over rigid bone measurements.",
        schoolsEn: "Scholar-Official Personnel Appraisal (*Guanren*, Zeng Guofan) vs. Folk Fortune-Telling Manuals (*Mayi*).",
        histEn: "Demonstrates pre-modern administrative interviewing heuristics prior to standardized psychometric testing.",
        philEn: "Echoes Xunzi's 3rd-c. BCE maxim: 'Examining outward features cannot match discerning the heart-mind and chosen learning.'",
        sciEn: "Modern psychology rejects cranial/facial determinism (phrenology); genuine insight rests solely on observable communication behavior and body language."
      }
    };
    (window.CCE_METAPHYSICS.systems || []).forEach((s) => {
      const m = METAPHYSICS_SYSTEMS_EN[s.id];
      if (!m) return;
      s.categoryEn = m.categoryEn;
      s.originsEn = m.originsEn;
      s.classicalTextsEn = m.classicalTextsEn;
      s.structureEn = m.structureEn;
      s.schoolsEn = m.schoolsEn;
      if (s.epistemicNote) {
        s.epistemicNote.historicalEn = m.histEn;
        s.epistemicNote.philosophicalEn = m.philEn;
        s.epistemicNote.empiricalScienceEn = m.sciEn;
      }
    });
  }

  // Runtime EN enrichment for Six Tea Categories in Compendia / Customs
  if (window.CCE_COMPENDIA && window.CCE_COMPENDIA.teaAndLaozihao) {
    const tData = window.CCE_COMPENDIA.teaAndLaozihao;
    tData.koushouLiEn =
      "Finger-tap etiquette (Koushouli 叩手礼): Lightly tap two curved fingers on the tabletop when someone pours tea—originating with Qianlong's incognito visits where kneeling etiquette translated into a modest table-tap salute.";
    const TEA_CATS_EN = [
      { typeEn: "Green Tea (Lǜchá 绿茶)", fermentationEn: "0% (Non-fermented, pan-fired/steamed)", tempEn: "80–85°C", famousEn: "West Lake Longjing, Biluochun, Huangshan Maofeng" },
      { typeEn: "White Tea (Báichá 白茶)", fermentationEn: "5–10% (Lightly withered)", tempEn: "85–90°C (Fresh) / 95–100°C (Aged)", famousEn: "Fuding Silver Needle, White Peony, Shoumei" },
      { typeEn: "Yellow Tea (Huángchá 黄茶)", fermentationEn: "10–20% (Sealed yellowing)", tempEn: "80–85°C", famousEn: "Junshan Silver Needle, Mengding Huangya" },
      { typeEn: "Oolong Tea (Wūlóngchá 乌龙茶)", fermentationEn: "15–70% (Semi-oxidized)", tempEn: "95–100°C", famousEn: "Tieguanyin, Wuyi Da Hong Pao, Phoenix Dancong" },
      { typeEn: "Black Tea (Hóngchá 红茶)", fermentationEn: "80–95% (Fully oxidized)", tempEn: "90–95°C", famousEn: "Keemun (Qimen), Lapsang Souchong, Dianhong" },
      { typeEn: "Dark Tea (Hēichá 黑茶)", fermentationEn: "100% Post-fermented", tempEn: "100°C Boiling", famousEn: "Yunnan Ripe Pu'er, Anhua Dark Tea, Liubao" }
    ];
    (tData.sixTeaCategories || []).forEach((tc, i) => {
      if (TEA_CATS_EN[i]) Object.assign(tc, TEA_CATS_EN[i]);
    });
  }

  // Safeguard EN Dictionary overrides for Homepage Daily Discoveries specimen card
  if (Array.isArray(window.CCE_DICTIONARY)) {
    const DAILY_DICT_EN = {
      "xinyong": {
        liushuTypeEn: "Compound Ideograph (Huìyì 会意: Person 亻 + Speech 言 + Utility 用)",
        radicalEn: "亻 (standing person) + 言 (words/pledge) & 用 (utility/apply)",
        mnemonicEn: "A person (亻) who honors spoken pledges (言) creates durable social trust and economic utility (用)."
      },
      "bagua": {
        liushuTypeEn: "Pictographic & Compound Ideograph (八卦: Eight Trigrams)",
        radicalEn: "八 (eight divisions) + 卜 (divination fissure) + 圭 (ritual jade tally)",
        mnemonicEn: "Eight 3-line combinations alternating broken Yin and solid Yang strokes to encode cosmic change."
      },
      "ershisijieqi": {
        liushuTypeEn: "Numerical Astronomical Compound (二十四节气)",
        radicalEn: "节 (bamboo node / seasonal interval 艹) + 气 (solar seasonal breath)",
        mnemonicEn: "Twenty-four 15° solar ecliptic benchmarks anchoring East Asian harvest timing and preventive health."
      },
      "yuanchanzheng": {
        liushuTypeEn: "Phono-Semantic Legal Compound (原产地证书)",
        radicalEn: "原 (origin source) + 产 (produce) + 证 (speaking pledge 讠)",
        mnemonicEn: "Official certificate authenticating origin threshold (e.g., ACFTA Form E >=40% RVC) for preferential tariffs."
      },
      "dingjin": {
        liushuTypeEn: "Pictographic & Phono-Semantic Contrast (定金 vs. 订金)",
        radicalEn: "定 (roof 宀 + foot resting firmly: legally binding) vs. 订 (speech 讠: preliminary promise)",
        mnemonicEn: "PRC Civil Code Art. 587: 定金 (roof radical) triggers statutory double-refund forfeiture; 订金 (word radical) is merely refundable prepayment."
      },
      "jinshi": {
        liushuTypeEn: "Compound Ideograph (进士: Advancing Scholar)",
        radicalEn: "进 (walking path 辶 forward) + 士 (scholar-gentry official)",
        mnemonicEn: "Highest imperial Palace Examination graduate stepping forward into top civil governance (Beijing & Hanoi Steles)."
      }
    };
    window.CCE_DICTIONARY.forEach((entry) => {
      const patch = entry && DAILY_DICT_EN[entry.id];
      if (patch) Object.assign(entry, patch);
    });
  }

  // Runtime EN visitorNote generation & safeguard for ALL 37 Museum Artifacts & 54 Paintings
  if (window.CCE_MUSEUM && Array.isArray(window.CCE_MUSEUM.artifacts)) {
    const CRITICAL_MUSEUM_EN_FALLBACKS = {
      "jiangshan-ruci-duojiao": {
        categoryLabelEn: "Historical & Modern Painting",
        periodLabelEn: "Modern Era (1959 CE)",
        dateEstimateEn: "Completed September 1959",
        materialEn: "Monumental ink-and-color landscape on joined sheets of specially crafted Xuan paper",
        dimensionsEn: "H 650 cm × W 900 cm (Original at Great Hall of the People, Beijing)",
        originEn: "Jointly painted by masters Fu Baoshi (1904–1965, Jinling School) and Guan Shanyue (1912–2000, Lingnan School)",
        collectionEn: "Great Hall of the People, Beijing (人民大会堂) • CCE Visual Archive",
        attributionEn: "Great Hall of the People, Beijing (1959) • Joint Masterwork by Fu Baoshi & Guan Shanyue; Calligraphy Colophon by Mao Zedong"
      }
    };
    window.CCE_MUSEUM.artifacts.forEach((art) => {
      const fb = CRITICAL_MUSEUM_EN_FALLBACKS[art.id];
      if (fb) Object.assign(art, fb);
      if (!art.visitorNote) return;
      const colEn = art.collectionEn || "National Public Museum Collection";
      const dimEn = art.dimensionsEn || "Archival Scale";
      const matEn = art.materialEn || "Classical Artifact Medium";
      const sigFirst = (art.culturalSignificanceEn || "").split(".")[0];
      art.visitorNote.rotationStatusEn = `Preserved at ${colEn}. Reserve timed museum admission via WeChat mini-program with your original passport and keep flash photography disabled.`;
      art.visitorNote.whatToLookForFirstEn = `Inspect the primary incised motifs and compositional detail at archival scale (${dimEn}) alongside craftsmanship in ${matEn}.`;
      art.visitorNote.techniqueDissectionEn = `${matEn}${sigFirst ? ` — ${sigFirst}.` : "."}`;
    });
  }

  if (window.CCE_PAINTINGS && Array.isArray(window.CCE_PAINTINGS.masterpieces)) {
    window.CCE_PAINTINGS.masterpieces.forEach((p) => {
      if (!p.visitorNote) return;
      const musEn = p.museumEn || p.museum || "National Museum Collection";
      const dimEn = p.dimensionsEn || p.dimensions || "Scroll dimensions";
      const matEn = p.materialEn || p.material || "Ink & color on silk/paper";
      const bwFirst = (p.analysisEn && p.analysisEn.brushwork) ? p.analysisEn.brushwork.split(".")[0] : "";
      if (!p.visitorNote.rotationBadgeEn) {
        p.visitorNote.rotationBadgeEn = p.visitorNote.isRestrictedRotation ? "Restricted Rotation (限展书画)" : "Periodic Rotation";
      }
      if (!p.visitorNote.rotationStatusEn) {
        p.visitorNote.rotationStatusEn = p.visitorNote.isRestrictedRotation
          ? `Restricted-rotation treasure (限展书画) at ${musEn}: silk scrolls older than 600–1,000 years open for ~40-day exhibitions every 3–5 years.`
          : `Held by ${musEn}: rotated periodically across themed calligraphy and painting galleries; check official WeChat exhibition alerts before visiting.`;
      }
      if (!p.visitorNote.whatToLookForFirstEn) {
        p.visitorNote.whatToLookForFirstEn = `Examine compositional balance (${dimEn}), mineral pigment luminosity on ${matEn}, and imperial collector seals along the margin.`;
      }
      if (!p.visitorNote.techniqueDissectionEn) {
        p.visitorNote.techniqueDissectionEn = `${matEn}${bwFirst ? ` — ${bwFirst}.` : "."}`;
      }
    });
  }

  // Runtime EN patch for History primarySources structured objects & Article editorial archives
  if (window.CCE_HISTORY && Array.isArray(window.CCE_HISTORY.periods)) {
    const PRIMARY_SOURCE_TITLE_EN = {
      "Thượng thư (尚书) & Thuật ngũ Cổ Sử (CText)": "Book of Documents (Shangshu 尚书) — Classical Chronicle (CText)",
      "Giáp Cốt Văn & Tư liệu Ân Khư (An Dương)": "Yinxu Oracle Bone Archive & Excavated Bronzes",
      "Kinh Thi (诗经) — Nhã & Tụng": "Book of Odes (Shijing 诗经) — Court Hymns & Folk Songs",
      "Tả truyện (左传) & Chiến Quốc sách (战国策)": "Zuozhuan (Commentary of Zuo) & Strategies of the Warring States",
      "Luận Ngữ (论语) & Đạo Đức Kinh (道德经)": "The Analects (论语) & Dao De Jing (道德经)",
      "Tôn Tử Binh Pháp (孙子兵法)": "Sunzi's Art of War (孙子兵法)",
      "Sử ký Tư Mã Thiên (史记)": "Records of the Grand Historian (Shiji 史记)",
      "Hán thư — Ban Cố (汉书)": "Book of Han (Hanshu 汉书) by Ban Gu",
      "Tam Quốc Chí (三国志) — Trần Thọ": "Records of the Three Kingdoms (Sanguozhi 三国志)",
      "Thế Thuyết Tân Ngữ (世说新语)": "New Account of the Tales of the World (Shishuo Xinyu)",
      "Tư Trị Thông Giám (资治通鉴)": "Comprehensive Mirror in Aid of Governance (Zizhi Tongjian)",
      "Toàn Đường Thi (全唐诗)": "Complete Tang Poems (Quan Tangshi 全唐诗)",
      "Tống Sử (宋史) & Mộng Khê Bút Đàm (梦溪笔谈)": "History of Song & Dream Pool Essays (Mengxi Bitan)",
      "Nguyên Sử (元史) & Mã Khả Ba La Du Ký": "History of Yuan & Il Milione",
      "Minh Thực Lục (明实录) & Bản Thảo Cương Mục": "Ming Veritable Records & Compendium of Materia Medica",
      "Tứ Khố Toàn Thư (四库全书) & Hoàng Triều Nhất Thống Dư Địa Chí": "Siku Quanshu & Imperial Qing Atlas",
      "Tân Thanh Niên (新青年) & Văn khố Quốc gia Trung Quốc": "New Youth & Early Republican Archives",
      "Cục Thống kê Quốc gia Trung Quốc (NBS) & Ngân hàng Thế giới": "National Bureau of Statistics of China (NBS) & World Bank"
    };
    window.CCE_HISTORY.periods.forEach((p) => {
      if (Array.isArray(p.primarySources)) {
        p.primarySources.forEach((src, i) => {
          if (src && src.title && PRIMARY_SOURCE_TITLE_EN[src.title] && !src.titleEn) {
            src.titleEn = PRIMARY_SOURCE_TITLE_EN[src.title];
          }
          if (src && !src.noteEn && Array.isArray(p.primarySourcesEn) && p.primarySourcesEn[i]) {
            src.noteEn = p.primarySourcesEn[i];
          }
        });
      }
    });
  }

  // Fallback EN cleanups for article editorial images & captions
  if (window.CCE_EDITORIAL_MEDIA && window.CCE_EDITORIAL_MEDIA.images) {
    const SPECIFIC_IMG_EN = {
      "img-pack26-guqin-zither-silent-sound-aesthetics-hero": {
        titleEn: "Jianzipu Tablature (减字谱) & High Mountains Flowing Water — Archival Overview",
        captionEn: "Seven silk strings of the Guqin embody classical stillness ('Great sound has rare notes').",
        attributionTextEn: "The Palace Museum (Jiuxiao Huanpei, 756 CE) & Classical Guqin Repertoire Archive"
      },
      "img-pack26-guqin-zither-silent-sound-aesthetics-f2": {
        titleEn: "Jiuxiao Huanpei Tang Dynasty Guqin & Jianzipu Tablature — Comparative Plate",
        captionEn: "Seven-string Tang dynasty silk-and-lacquer Guqin illustrating acoustic restraint and contemplative aesthetics.",
        attributionTextEn: "The Palace Museum, Beijing (故宫博物院 · Jiuxiao Huanpei 756 CE)"
      }
    };
    Object.values(window.CCE_EDITORIAL_MEDIA.images).forEach((img) => {
      if (!img) return;
      if (SPECIFIC_IMG_EN[img.id]) Object.assign(img, SPECIFIC_IMG_EN[img.id]);
      if (img.titleEn) {
        img.titleEn = String(img.titleEn)
          .replace(/—\s*Tư liệu Tổng quan/gi, "— Primary Archival Overview")
          .replace(/—\s*Sơ đồ & Tư liệu Đối chứng/gi, "— Comparative Plate & Evidence")
          .replace(/Giản Tự Phổ \(减字谱\) & Khúc Cao Sơn Lưu Thủy/gi, "Jianzipu Tablature (减字谱) & High Mountains Flowing Water");
      } else if (img.titleVi) {
        img.titleEn = img.titleVi;
      }
      if (!img.captionEn) {
        img.captionEn = (img.titleEn && !/[àáảãạăâđêôơư]/i.test(img.titleEn)) ? img.titleEn : "Curated Archival Plate";
      }
      if (img.attributionText && /Bảo tàng Cố Cung/i.test(img.attributionText) && !img.attributionTextEn) {
        img.attributionTextEn = "The Palace Museum & Archival Repository";
      }
    });
  }
  if (window.CCE_ARTICLES_EN) {
    const guqinEn = window.CCE_ARTICLES_EN["guqin-zither-silent-sound-aesthetics"];
    if (guqinEn) {
      guqinEn.historicalDocument = {
        imageId: "img-pack26-guqin-zither-silent-sound-aesthetics-f3",
        ...(guqinEn.historicalDocument || {}),
        docTypeLabel: "Jianzipu Tablature (减字谱) & Classical Guqin Repertoire",
        period: "Zhou Dynasty to Tang 756 CE → UNESCO Intangible Heritage",
        holdingInstitution: "The Palace Museum, Beijing (故宫博物院) · Jiuxiao Huanpei Guqin"
      };
    }
  }

  window.CCE_EN_FIELD = enField;
  window.CCE_EN_HELPERS = {
    enField,
    provinceTypeEn: function (prov, enMode) {
      if (!prov) return "";
      const val = typeof prov === "string" ? prov : prov.type;
      if (!enMode) return val || "";
      return (typeof prov === "object" && prov.typeEn) || PROVINCE_TYPE_EN[val] || val || "";
    },
    regionLabelEn: function (prov, altLabel, enMode) {
      const mode = typeof altLabel === "boolean" ? altLabel : enMode;
      if (!prov) return "";
      const raw = typeof prov === "string" ? (typeof altLabel === "string" ? altLabel : prov) : (prov.regionLabel || prov.region || "");
      if (!mode) return raw || "";
      return (typeof prov === "object" && (prov.regionLabelEn || prov.regionEn)) || REGION_LABEL_EN[raw] || raw || "";
    },
    eventTypeEn: function (evType, enMode) {
      if (!enMode) {
        const viMap = {
          dynasty: "Triều đại",
          event: "Sự kiện bước ngoặt",
          philosophy: "Phát triển Tư tưởng",
          figure: "Nhân vật tiêu biểu",
          culture: "Thành tựu Văn hóa"
        };
        return viMap[evType] || evType || "";
      }
      return TIMELINE_EVENT_TYPE_EN[evType] || evType || "";
    },
    sectionCaptionEn: function (sectionKey, viFallback, enMode) {
      if (!enMode) return viFallback || "";
      return SECTION_BANNER_CAPTION_EN[sectionKey] || viFallback || "";
    },
    academicCaptionEn
  };
})();
