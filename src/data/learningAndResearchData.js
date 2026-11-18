// ============================================================================
// Sections 5 (Interactive Learning System) & 6 (Research Library & Verification)
// Knowledge Map, Active Recall Quizzes, Learning Paths, and Verified Sources
// ============================================================================

window.CCE_LEARNING_RESEARCH = {
  userJourneys: [
    {
      id: "new-explorer",
      code: "JOURNEY ROLE 01",
      roleEn: "New Explorer",
      roleVi: "Người Mới Khám Phá",
      roleZh: "文化初探者",
      tagline: "Khởi đầu toàn cảnh về lịch sử, triết học, mỹ học và văn hóa Trung Hoa qua lộ trình trực quan.",
      startAction: { type: "journey", id: "path-foundation", label: "Bắt đầu Journey 01: Văn minh Trung Hoa" },
      secondaryAction: { type: "page", id: "explore", label: "Mở Thư mục Tổng hợp (Explore All)" },
      recommendedIds: ["hundred-schools", "tang-golden-age", "spring-festival-significance"]
    },
    {
      id: "language-learner",
      code: "JOURNEY ROLE 02",
      roleEn: "Language Learner",
      roleVi: "Người Học Hán Ngữ",
      roleZh: "汉语与汉字学习者",
      tagline: "Học từ vựng chữ Hán qua chiết tự Lục thư, đối chiếu âm Hán–Việt, ghi chú ngữ cảnh trực tiếp trên chuyên luận và xuất sổ tay từ vựng.",
      startAction: { type: "page", id: "learning", label: "Mở Từ điển Hán Ngữ & Sổ tay Từ vựng" },
      secondaryAction: { type: "article", id: "sino-vietnamese-translation-business", label: "Đọc bài Từ Hán–Việt Đồng hình Dị nghĩa" },
      recommendedIds: ["sino-vietnamese-translation-business", "chinese-calligraphy-seal-aesthetics", "sino-vietnam-history"]
    },
    {
      id: "academic-researcher",
      code: "JOURNEY ROLE 03",
      roleEn: "Academic Researcher",
      roleVi: "Nhà Nghiên Cứu Học Thuật",
      roleZh: "学术与文献研究者",
      tagline: "Tra cứu nguyên bản CText, thẩm định nguồn cấp 1–2, phân biệt sử liệu khảo cổ và trích dẫn chuẩn APA/Chicago.",
      startAction: { type: "page", id: "research", label: "Mở Thư viện Nghiên cứu & Nguồn Chính thống" },
      secondaryAction: { type: "article", id: "imperial-examination-keju", label: "Đọc Chuyên khảo Khoa cử Đông Á" },
      recommendedIds: ["imperial-examination-keju", "four-great-inventions-science", "iching-development"]
    },
    {
      id: "regional-explorer",
      code: "JOURNEY ROLE 04",
      roleEn: "Regional Explorer",
      roleVi: "Người Khám Phá Địa Văn Hóa",
      roleZh: "中华地域文化探索者",
      tagline: "Khám phá 6 đại vùng địa lý, 16 đô thị tiêu biểu và danh bạ 34 đơn vị hành chính cấp tỉnh của Trung Quốc.",
      startAction: { type: "page", id: "regions", label: "Mở Trung tâm Khám phá Vùng miền & Bản đồ" },
      secondaryAction: { type: "article", id: "beijing-shanghai-culture", label: "So sánh Kinh Phái vs Hải Phái" },
      recommendedIds: ["beijing-shanghai-culture", "traditional-architecture-gardens", "silk-road-maritime-trade"]
    },
    {
      id: "business-learner",
      code: "JOURNEY ROLE 05",
      roleEn: "Business Learner",
      roleVi: "Chuyên Gia Kinh Doanh & Ngoại Thương",
      roleZh: "国际商务与供应链研习者",
      tagline: "Làm chủ văn hóa đàm phán Guanxi–Mianzi, kiểm toán C/O Form E, hợp đồng Định kim và chuỗi cung ứng RCEP.",
      startAction: { type: "page", id: "business", label: "Mở Chuyên mục Văn hóa Kinh doanh & Case Studies" },
      secondaryAction: { type: "article", id: "china-vietnam-supply-chain-rcep", label: "Đọc bài Chuỗi Cung ứng & C/O Form E" },
      recommendedIds: ["china-vietnam-supply-chain-rcep", "guanxi-business", "sino-vietnamese-translation-business"]
    }
  ],

  learningPaths: [
    {
      id: "path-foundation",
      code: "JOURNEY 01",
      titleVi: "Toàn cảnh Văn minh & Lịch sử Trung Hoa",
      titleEn: "Understanding Chinese Civilization",
      titleZh: "中华文明与历史脉络导览",
      estimatedMinutes: 55,
      difficulty: "Foundation • Nhập môn đến Trung cấp",
      difficultyEn: "Foundation • Introductory to Intermediate",
      description: "Khám phá tiến trình 5.000 năm từ Ngọc Lương Chử, Giáp Cốt văn thời Thương, thể chế Tam Tỉnh Lục Bộ và Khoa cử đến bốn phát minh khoa học kỹ thuật cổ đại.",
      descriptionEn: "Trace five millennia of Chinese civilization from Liangzhu jades, Shang oracle bones, Tang Three Departments and Keju civil examinations to ancient science and technology.",
      objectives: [
        "Phân biệt ranh giới giữa Truyền thuyết cổ đại và Chứng cứ khảo cổ xác thực (Lương Chử, Ân Khư, Tam Tinh Đôi).",
        "Hiểu cơ chế vận hành của nhà nước văn quan qua chế độ Khoa cử (科举) và quy hoạch đô thị Trường An.",
        "Đánh giá khách quan Tứ đại phát minh, 《Thiên Công Khai Vật》 và Câu hỏi Joseph Needham."
      ],
      steps: [
        { label: "Bước 1: Tiến trình Triều đại & Sử học Nghiêm cẩn", labelEn: "Step 1: Dynastic Timeline & Archival Historiography", targetType: "page", targetId: "history", summary: "Khảo sát 11 thời kỳ lịch sử và bảng phân tầng chứng cứ khảo cổ." },
        { label: "Bước 2: Thời đại Hoàng kim Nhà Đường & Trường An", labelEn: "Step 2: Tang Golden Age & Chang'an Urbanism", targetType: "article", targetId: "tang-golden-age", summary: "Quy hoạch đô thị 108 phường, Tam Tỉnh Lục Bộ và giao lưu Á – Âu." },
        { label: "Bước 3: Chế độ Khoa cử (科举) Trung Hoa & Đại Việt", labelEn: "Step 3: The Imperial Examination System (Keju)", targetType: "article", targetId: "imperial-examination-keju", summary: "Thể chế tuyển chọn tinh hoa suốt 1.300 năm và Bia Tiến sĩ Văn Miếu." },
        { label: "Bước 4: Tứ Đại Phát Minh & 《Thiên Công Khai Vật》", labelEn: "Step 4: The Four Great Inventions & Tiangong Kaiwu", targetType: "article", targetId: "four-great-inventions-science", summary: "Giấy, In ấn, Thuốc súng, La bàn từ và lịch sử khoa học kỹ thuật." }
      ],
      relatedResources: ["houmuwu-ding", "taihe-dian", "jinshi-doctoral-stele"],
      recommendedNext: "path-philosophy"
    },
    {
      id: "path-philosophy",
      code: "JOURNEY 02",
      titleVi: "Nho giáo, Đạo giáo, Phật giáo & Bách Gia Chư Tử",
      titleEn: "Confucianism, Taoism & Buddhism",
      titleZh: "儒释道三教与诸子百家思想",
      estimatedMinutes: 50,
      difficulty: "Intermediate • Đại học & Học thuật",
      difficultyEn: "Intermediate • University & Academic Inquiry",
      description: "Đi sâu vào cuộc tranh biện trục tâm thời Xuân Thu – Chiến Quốc, cấu trúc xã hội Nho gia, triết lý Vô vi Đạo gia, Thiền tông và Tâm học Vương Dương Minh.",
      descriptionEn: "Examine the Hundred Schools of Thought, Confucian social ethics, Daoist wuwei philosophy, Chan Buddhism, and Wang Yangming's Mind-Learning.",
      objectives: [
        "Nắm vững bối cảnh xã hội Học viện Tắc Hạ và sự ra đời của Bách Gia Chư Tử.",
        "Giải thích khái niệm 'Sai tự cách cục' (差序格局) của Phí Hiếu Thông và ảnh hưởng của Nho học.",
        "Đối chiếu 12 trường phái tư tưởng từ Tiên Tần đến Lý học Chu Hy và Tâm học 'Tri hành hợp nhất'."
      ],
      steps: [
        { label: "Bước 1: Bách Gia Chư Tử & Học viện Tắc Hạ", labelEn: "Step 1: The Hundred Schools & Jixia Academy", targetType: "article", targetId: "hundred-schools", summary: "Thị trường ý tưởng đa cực thời Xuân Thu – Chiến Quốc." },
        { label: "Bước 2: Tư tưởng Khổng Tử & Sai tự cách cục", labelEn: "Step 2: Confucius & Concentric Social Networks", targetType: "article", targetId: "confucianism-society", summary: "Ngũ thường, Lễ trị và cấu trúc vòng tròn đồng tâm Đông Á." },
        { label: "Bước 3: Ma trận Đối sánh 12 Trường phái & 15 Kinh điển", labelEn: "Step 3: 12 Philosophical Schools & 15 Classics Matrix", targetType: "page", targetId: "philosophy", summary: "Đọc nguyên bản trích đoạn Luận Ngữ, Đạo Đức Kinh, Truyền Tập Lục, Lục Tổ Đàn Kinh." }
      ],
      relatedResources: ["lantingji-xu", "yongle-dadian"],
      recommendedNext: "path-cosmology"
    },
    {
      id: "path-cosmology",
      code: "JOURNEY 03",
      titleVi: "Âm Dương, Ngũ Hành, Kinh Dịch & Vũ trụ luận Cổ điển",
      titleEn: "Yin-Yang, Five Elements & Classical Cosmology",
      titleZh: "阴阳五行、《易经》与传统术数考辨",
      estimatedMinutes: 60,
      difficulty: "Advanced • Nhận thức luận & Cổ học",
      difficultyEn: "Advanced • Epistemology & Classical Systems",
      description: "Giải mã nguồn gốc địa lý – thiên văn của Âm Dương, Ngũ Hành, Kinh Dịch, 24 Tiết khí Đông y và khảo cứu khách quan Tử Vi – Bát Tự – Phong Thủy.",
      descriptionEn: "Decode the geographical roots of Yin-Yang, Wu Xing dynamic systems, the Book of Changes, 24 solar terms in TCM, and symbolic divination classics.",
      objectives: [
        "Truy nguyên nguồn gốc quang chiếu địa hình ('Sơn nam thủy bắc') của Âm Dương và động học Ngũ Hành.",
        "Phân biệt tầng Kinh văn Tây Chu, Thập Dực và bản lụa Mã Vương Đôi của 《Chu Dịch》.",
        "Tách bạch tri thức thiên văn nông lịch (24 Tiết khí), dưỡng sinh Nội Kinh và hệ thống ký hiệu Thuật số với khoa học thực nghiệm."
      ],
      steps: [
        { label: "Bước 1: Nguồn gốc & Tiến hóa Khái niệm Âm Dương", labelEn: "Step 1: Origins & Evolution of Yin-Yang", targetType: "article", targetId: "yinyang-origins", summary: "Từ quan sát nắng–râm sườn núi đến phạm trù triết học." },
        { label: "Bước 2: Ngũ Hành Tương Sinh – Tương Khắc", labelEn: "Step 2: Five Elements Generating & Overcoming Cycles", targetType: "article", targetId: "five-elements", summary: "Mô hình hệ thống động học trong 《Thượng Thư · Hồng Phạm》." },
        { label: "Bước 3: Văn bản học 《Kinh Dịch》 & Đối thoại Leibniz", labelEn: "Step 3: Textual History of I Ching & Leibniz Dialogue", targetType: "article", targetId: "iching-development", summary: "Bát quái, 64 quẻ và lịch sử tiếp nhận Đông – Tây." },
        { label: "Bước 4: 24 Tiết khí & Dưỡng sinh 《Hoàng Đế Nội Kinh》", labelEn: "Step 4: 24 Solar Terms & TCM Yangsheng Philosophy", targetType: "article", targetId: "tcm-solar-terms-yangsheng", summary: "Lịch Mặt Trời hoàng đạo và y học cổ truyền." },
        { label: "Bước 5: Khảo cứu Bát Tự, Tử Vi, Phong Thủy & Kỳ Môn", labelEn: "Step 5: Bazi, Ziwei, Fengshui & Symbolic Epistemology", targetType: "article", targetId: "chinese-metaphysics-systems", summary: "Cấu trúc ký hiệu học Can Chi và giới hạn nhận thức luận." }
      ],
      relatedResources: ["han-shipan-astrolabe", "acupuncture-bronze-figure"],
      recommendedNext: "path-regions"
    },
    {
      id: "path-regions",
      code: "JOURNEY 04",
      titleVi: " Trung Quốc Đa Vùng Miền: Bắc, Nam, Đông, Tây & Mỹ học",
      titleEn: "Regional China: North, South, East & West",
      titleZh: "中国地域文化：京派、海派、江南与岭南",
      estimatedMinutes: 50,
      difficulty: "Intermediate • Địa văn hóa & Mỹ học",
      difficultyEn: "Intermediate • Geocultural Diversity & Aesthetics",
      description: "Du hành qua 6 đại vùng địa lý, 16 đô thị tiêu biểu và 34 tỉnh thành — từ Tứ Hợp Viện Bắc Kinh, Thạch Khố Môn Thượng Hải, Viên lâm Tô Châu đến Thư họa & Trà đạo.",
      descriptionEn: "Journey through 6 macro-regions, 16 historic cities, and 34 provinces—from Beijing courtyard architecture and Shanghai shikumen to Jiangnan gardens and tea culture.",
      objectives: [
        "So sánh văn hóa Kinh Phái (Bắc Kinh), Hải Phái (Thượng Hải), Giang Nam (Tô–Hàng) và Lĩnh Nam (Quảng–Thâm).",
        "Hiểu nguyên lý kết cấu gỗ Đấu củng kháng chấn và mỹ học 'Tá cảnh' trong lâm viên cổ điển.",
        "Thưởng thức nghệ thuật Thủy mặc, Thư pháp ngũ thể, Triện khắc và 6 đại trà hệ Trung Hoa."
      ],
      steps: [
        { label: "Bước 1: Song Thành Ký Bắc Kinh vs Thượng Hải", labelEn: "Step 1: Tale of Two Cities: Beijing vs Shanghai", targetType: "article", targetId: "beijing-shanghai-culture", summary: "Đối chiếu kiến trúc, tâm thức đô thị và phong cách đàm phán." },
        { label: "Bước 2: Kiến trúc Gỗ Đấu củng & Lâm viên Tô Châu", labelEn: "Step 2: Dougong Timber Joinery & Classical Gardens", targetType: "article", targetId: "traditional-architecture-gardens", summary: "Cơ học kháng chấn không đinh sắt và triết lý viên lâm." },
        { label: "Bước 3: Hội họa Thủy mặc & Thư pháp – Triện khắc", labelEn: "Step 3: Ink Wash Aesthetics, Calligraphy & Seal Carving", targetType: "article", targetId: "chinese-calligraphy-seal-aesthetics", summary: "Ngũ thể thư pháp, phương thốn ấn chương và Thi–Thư–Họa–Ấn." },
        { label: "Bước 4: Văn hóa Trà đạo & Bản đồ 34 Tỉnh thành", labelEn: "Step 4: Tea Heritage & 34 Provinces Directory", targetType: "page", targetId: "regions", summary: "Khám phá bản đồ tương tác 6 vùng và danh bạ 34 đơn vị hành chính." }
      ],
      relatedResources: ["jiangshan-ruci-duojiao", "qianli-jiangshan", "great-wall-scroll"],
      recommendedNext: "path-culture-vietnam"
    },
    {
      id: "path-culture-vietnam",
      code: "JOURNEY 05",
      titleVi: "Trung Quốc & Việt Nam: Di sản Giao thoa và Bản sắc Độc lập",
      titleEn: "China and Vietnam: Shared Heritage & Distinct Identities",
      titleZh: "中越文化交流：历史互动、汉喃与本土创造",
      estimatedMinutes: 50,
      difficulty: "Intermediate / Advanced • Sử học & Ngôn ngữ So sánh",
      difficultyEn: "Intermediate / Advanced • Comparative History & Philology",
      description: "Phân tích mô hình 3 tầng (Tiếp nhận – Thích nghi – Sáng tạo nội sinh) qua âm Hán–Việt, Chữ Nôm, Khoa cử, Bắc Y – Nam Dược, Gốm Chu Đậu và dịch thuật hợp đồng.",
      descriptionEn: "Analyze Vietnam's three-tier localization (Reception, Adaptation, Innovation) through Sino-Vietnamese phonology, Chữ Nôm, Chu Đậu ceramics, and commercial contract translation.",
      objectives: [
        "Hiểu cơ chế hình thành âm Hán–Việt từ ngữ âm Đường–Tống và cấu trúc sáng tạo Chữ Nôm bản địa.",
        "Đối sánh thể chế Khoa cử, Luật Hồng Đức, Tết Nguyên Đán và gốm hoa lam Chu Đậu trên tuyến Tơ lụa Hàng hải.",
        "Nhận diện và phòng tránh bẫy 'Từ đồng hình dị nghĩa' Hán–Việt (như 定金 vs 订金) trong dịch thuật kinh tế."
      ],
      steps: [
        { label: "Bước 1: Lịch sử Giao lưu & Bản địa hóa Trung – Việt", labelEn: "Step 1: Sino-Vietnamese Cultural Exchange Trajectory", targetType: "article", targetId: "sino-vietnam-history", summary: "Mô hình 3 tầng phân tích từ văn tự, tư tưởng đến thương cảng." },
        { label: "Bước 2: Con đường Tơ lụa Hàng hải & Gốm Chu Đậu", labelEn: "Step 2: Maritime Silk Road & Chu Đậu Blue-White Ceramics", targetType: "article", targetId: "silk-road-maritime-trade", summary: "Mạng lưới Thị Bạc Ty và vai trò thương cảng Đại Việt thế kỷ XV." },
        { label: "Bước 3: Từ Hán–Việt 'Đồng Hình Dị Nghĩa' & Dịch Hợp đồng", labelEn: "Step 3: Sino-Vietnamese False Friends in Trade Contracts", targetType: "article", targetId: "sino-vietnamese-translation-business", summary: "Phân biệt pháp lý Định kim (定金) vs Đính kim (订金) và thuật ngữ ngoại thương." },
        { label: "Bước 4: Chuyên trang Đối sánh 16 Chủ đề Trung – Việt", labelEn: "Step 4: 16 Comparative Sino-Vietnamese Themes Hub", targetType: "page", targetId: "sino-vietnam", summary: "Bảng đối chiếu chuyên sâu văn hóa, pháp điển, y dược và ẩm thực." }
      ],
      relatedResources: ["chu-dau-blue-white-ceramic", "zheng-he-navigation-chart"],
      recommendedNext: "path-ib-china"
    },
    {
      id: "path-ib-china",
      code: "JOURNEY 06",
      titleVi: "Văn hóa Kinh doanh, Chuỗi Cung ứng & Trung Quốc Đương đại",
      titleEn: "Chinese Culture in Modern Business & Society",
      titleZh: "现代商业文化、跨境供应链与当代中国社会",
      estimatedMinutes: 55,
      difficulty: "Applied Professional • Kinh doanh Quốc tế & Logistics",
      difficultyEn: "Applied Professional • International Business & Supply Chains",
      description: "Kết nối văn hóa thương bang truyền thống, mạng lưới Guanxi–Xinyong–Mianzi với nghiệp vụ C/O Form E, mã HS, chuỗi cung ứng C2M và 12 tập đoàn tiêu biểu.",
      descriptionEn: "Bridge historical merchant guilds and Guanxi–Xinyong–Mianzi ethics with C/O Form E audits, RCEP trade corridors, and 12 major Chinese enterprise case studies.",
      objectives: [
        "Đặt Guanxi (Quan hệ), Xinyong (Tín nhiệm) và Mianzi (Thể diện) đúng vị trí bên cạnh hợp đồng pháp lý và SLA.",
        "Thực hành quy trình kiểm toán bộ chứng từ ngoại thương Trung–Việt, mã HS và tiêu chí xuất xứ C/O Form E / RCEP.",
        "Phân tích mô hình vận hành của 12 doanh nghiệp lớn (Alibaba, JD, Tencent, Huawei, BYD, SHEIN, CATL, Xiaomi...)."
      ],
      steps: [
        { label: "Bước 1: Guanxi, Thể diện & Tinh thần Khế ước Hiện đại", labelEn: "Step 1: Guanxi, Mianzi & Modern Contract Law", targetType: "article", targetId: "guanxi-business", summary: "Phân tích xã hội học kinh tế về tín nhiệm và hợp đồng." },
        { label: "Bước 2: Chuỗi Cung ứng Trung – Việt, Hải quan & C/O Form E", labelEn: "Step 2: China–Vietnam Supply Chains & C/O Form E", targetType: "article", targetId: "china-vietnam-supply-chain-rcep", summary: "Vành đai công nghiệp, 3 hành lang logistics và kiểm toán xuất xứ ACFTA/RCEP." },
        { label: "Bước 3: Chuyển đổi Số, Nội quyển & Quốc triều Đương đại", labelEn: "Step 3: Digital Ecosystems, Involution & Guochao", targetType: "article", targetId: "contemporary-china-digital", summary: "Siêu hạ tầng số, tâm lý xã hội trẻ và xu hướng tiêu dùng mới." },
        { label: "Bước 4: Nghiên cứu 20 Chủ đề & 12 Case Studies Tập đoàn", labelEn: "Step 4: 20 B2B Topics & 12 Enterprise Case Studies", targetType: "page", targetId: "business", summary: "Khảo sát thực tiễn Alibaba, Huawei, BYD, SHEIN, CATL, COSCO..." }
      ],
      relatedResources: ["qingming-scroll", "david-vases"],
      recommendedNext: "path-foundation"
    }
  ],

  knowledgeGraph: {
    nodes: [
      { id: "kg-zhou", label: "Xuân Thu – Chiến Quốc", zh: "春秋战国", x: 90, y: 110, group: "history", linkType: "page", linkId: "history", desc: "Giai đoạn phân quyền đa cực tạo tiền đề cho Bách Gia Chư Tử." },
      { id: "kg-hundred", label: "Bách Gia Chư Tử", zh: "诸子百家", x: 280, y: 110, group: "philosophy", linkType: "article", linkId: "hundred-schools", desc: "Cuộc tranh biện trục tâm giữa Nho, Đạo, Pháp, Mặc, Danh, Âm Dương." },
      { id: "kg-confucian", label: "Nho gia & Lý–Tâm học", zh: "儒家·理学·心学", x: 490, y: 65, group: "philosophy", linkType: "article", linkId: "confucianism-society", desc: "Hệ thống Nhân – Lễ – Hiếu, Cách vật trí tri và Tri hành hợp nhất." },
      { id: "kg-daoism", label: "Đạo gia & Dịch lý", zh: "道家·易经", x: 490, y: 165, group: "metaphysics", linkType: "article", linkId: "iching-development", desc: "Đạo, Vô vi, Âm Dương Ngũ Hành và mỹ học tự nhiên." },
      { id: "kg-keju", label: "Khoa cử & Văn Miếu", zh: "科举·进士碑", x: 710, y: 60, group: "history", linkType: "article", linkId: "imperial-examination-keju", desc: "Thể chế thi tuyển quan lại suốt 1.300 năm ở Trung Quốc và 844 năm ở Việt Nam." },
      { id: "kg-ink", label: "Thủy mặc, Thư pháp & Trà", zh: "诗书画印·茶道", x: 710, y: 165, group: "arts", linkType: "article", linkId: "chinese-calligraphy-seal-aesthetics", desc: "Ngũ thể thư pháp, Triện khắc, Lưu bạch và tinh thần Trà đạo." },
      { id: "kg-sinovn", label: "Giao lưu Trung – Việt", zh: "中越文化交流", x: 940, y: 70, group: "vietnam", linkType: "article", linkId: "sino-vietnam-history", desc: "Âm Hán–Việt, Chữ Nôm, Bắc sứ lục và bản lĩnh văn hiến độc lập." },
      { id: "kg-social", label: "Sai tự cách cục & Guanxi", zh: "差序格局·关系", x: 940, y: 175, group: "business", linkType: "article", linkId: "guanxi-business", desc: "Ảnh hưởng cấu trúc xã hội tới mạng lưới tin cậy và đàm phán hiện đại." },
      { id: "kg-regions", label: "Đô thị: Kinh – Hải – Lĩnh", zh: "京派·海派·岭南", x: 710, y: 265, group: "business", linkType: "article", linkId: "beijing-shanghai-culture", desc: "Phân hóa văn hóa Bắc Kinh – Thượng Hải – Quảng Thâm trong kinh doanh." },
      { id: "kg-arch", label: "Đấu củng & Viên lâm", zh: "古建筑·苏州园林", x: 490, y: 265, group: "arts", linkType: "article", linkId: "traditional-architecture-gardens", desc: "Kết cấu gỗ kháng chấn không đinh và nghệ thuật Tá cảnh viên lâm." },
      { id: "kg-science", label: "Tứ đại phát minh & Needham", zh: "四大发明·天工开物", x: 280, y: 265, group: "history", linkType: "article", linkId: "four-great-inventions-science", desc: "Giấy, In ấn, Thuốc súng, La bàn và bách khoa thư kỹ thuật thế kỷ XVII." },
      { id: "kg-silkroad", label: "Tơ lụa & Hải thương", zh: "陆海丝绸之路", x: 90, y: 355, group: "history", linkType: "article", linkId: "silk-road-maritime-trade", desc: "Mạng lưới giao thương lục địa và hải trình Biển Đông nối Trung Quốc – Đại Việt." },
      { id: "kg-tcm-metaphysics", label: "24 Tiết khí & Thuật số", zh: "节气内经·传统术数", x: 380, y: 365, group: "metaphysics", linkType: "article", linkId: "tcm-solar-terms-yangsheng", desc: "Hoàng Đế Nội Kinh, Tử Bình Bát Tự, Tử Vi Đẩu Số và ranh giới nhận thức." },
      { id: "kg-translation", label: "Đồng hình Dị nghĩa & Hợp đồng", zh: "汉越同形异义·定金", x: 670, y: 365, group: "vietnam", linkType: "article", linkId: "sino-vietnamese-translation-business", desc: "Phân biệt từ Hán–Việt lệch nghĩa và điều khoản Định kim vs Đính kim." },
      { id: "kg-rcep-customs", label: "RCEP & Hải quan Form E", zh: "RCEP·原产地Form E", x: 940, y: 365, group: "business", linkType: "article", linkId: "china-vietnam-supply-chain-rcep", desc: "Phân loại mã HS, xuất xứ C/O Form E và chuỗi cung ứng Việt – Trung." }
    ],
    edges: [
      { from: "kg-zhou", to: "kg-hundred", label: "Thúc đẩy" },
      { from: "kg-hundred", to: "kg-confucian", label: "Nhánh nhập thế" },
      { from: "kg-hundred", to: "kg-daoism", label: "Nhánh tự nhiên" },
      { from: "kg-confucian", to: "kg-keju", label: "Thể chế hóa" },
      { from: "kg-daoism", to: "kg-ink", label: "Cảm hứng mỹ học" },
      { from: "kg-daoism", to: "kg-arch", label: "Mỹ học viên lâm" },
      { from: "kg-keju", to: "kg-sinovn", label: "Văn Miếu & Tiến sĩ" },
      { from: "kg-confucian", to: "kg-social", label: "Cấu trúc quan hệ" },
      { from: "kg-social", to: "kg-regions", label: "Thực tiễn vùng miền" },
      { from: "kg-science", to: "kg-silkroad", label: "Truyền bá kỹ thuật" },
      { from: "kg-daoism", to: "kg-tcm-metaphysics", label: "Âm Dương Ngũ Hành" },
      { from: "kg-sinovn", to: "kg-translation", label: "Biến đổi ngữ nghĩa" },
      { from: "kg-translation", to: "kg-rcep-customs", label: "Pháp lý ngoại thương" },
      { from: "kg-regions", to: "kg-rcep-customs", label: "Vành đai công nghiệp" }
    ]
  },

  quizBank: [
    {
      id: "q1",
      type: "multiple-choice",
      category: "Lịch sử & Khảo cổ",
      question: "Chữ viết hoàn chỉnh cổ nhất của Trung Quốc hiện được xác nhận bằng hiện vật khảo cổ đương thời thuộc triều đại nào?",
      options: [
        "Thời Tam Hoàng Ngũ Đế (qua văn bản Truyền thuyết)",
        "Nhà Hạ tại di chỉ Nhị Lý Đầu",
        "Nhà Thương qua Chữ Giáp Cốt tại Ân Khư (An Dương)",
        "Thời Chiến Quốc qua thẻ tre Quách Điếm"
      ],
      correctIndex: 2,
      explanation:
        "Chữ Giáp Cốt (甲骨文) tại Ân Khư (khoảng 1250–1046 TCN) là hệ thống văn tự hoàn chỉnh sớm nhất có hiện vật đương thời xác thực; phả hệ vua Thương trên xương giáp cốt trùng khớp với ghi chép trong Sử ký."
    },
    {
      id: "q2",
      type: "vocabulary",
      category: "Từ vựng Chiết tự (Active Recall)",
      promptHanzi: "留白",
      question: "Nhìn chữ Hán trên (留白): Nghĩa mỹ học và Pinyin chính xác của thuật ngữ này là gì?",
      options: [
        "liúbái — Khoảng trống có chủ ý trong tranh thủy mặc/thiết kế để gợi không gian tưởng tượng",
        "báihuà — Ngôn ngữ bạch thoại bình dân thời Ngũ Tứ",
        "shuǐmò — Kỹ thuật pha năm sắc độ mực đen trong hội họa",
        "bāguà — Tám quẻ đơn trong Kinh Dịch"
      ],
      correctIndex: 0,
      explanation:
        "留白 (liúbái – Lưu bạch) nghĩa là chừa khoảng trắng có chủ ý. Trong tranh thủy mặc Tống–Nguyên và triết lý Đạo gia ('Hữu vô tương sinh'), khoảng trắng hóa thành nước, mây trời hoặc khoảng lặng suy tư."
    },
    {
      id: "q3",
      type: "multiple-choice",
      category: "Nhận thức luận Thuật số & Lịch pháp",
      question: "Phát biểu nào sau đây phân tách ĐÚNG về 24 Tiết khí (二十四节气) và Thuật số truyền thống?",
      options: [
        "24 Tiết khí là lịch Âm thuần túy dựa vào chu kỳ Mặt Trăng",
        "24 Tiết khí được tính dựa trên kinh độ hoàng đạo của Mặt Trời (thuộc hệ Dương lịch thiên văn), còn Nông lịch là Âm–Dương hợp lịch",
        "Thuyết Ngũ Hành tương đương hoàn toàn với bảng tuần hoàn nguyên tố hóa học hiện đại",
        "Tử Vi Đẩu Số dự đoán tương lai dựa trên bức xạ vật lý thực tế từ chòm sao Bắc Đẩu"
      ],
      correctIndex: 1,
      explanation:
        "24 Tiết khí chia quỹ đạo biểu kiến 360° của Mặt Trời thành 24 cung 15°, nên ngày Tiết khí (như Thanh Minh 4–5/4, Đông Chí 21–22/12) bám theo lịch Dương. Nông lịch kết hợp cả chu kỳ Trăng (mùng 1, rằm) và chu kỳ Mặt Trời (24 Tiết khí + tháng Nhuận)."
    },
    {
      id: "q4",
      type: "comparison",
      category: "Giao lưu Văn hóa Trung – Việt",
      question: "Nhận định nào mô tả CHÍNH XÁC nhất về âm Hán-Việt và chữ Nôm trong lịch sử Việt Nam?",
      options: [
        "Tiếng Việt và tiếng Hán thuộc cùng một ngữ hệ Hán-Tạng",
        "Âm Hán-Việt bảo lưu nhiều đặc điểm ngữ âm tiếng Hán trung cổ thời Đường–Tống, trong khi Chữ Nôm là văn tự bản địa sáng tạo theo nguyên lý cấu tạo chữ Hán",
        "Chữ Nôm được triều đình nhà Đường đặt ra cho vùng An Nam",
        "Mọi từ Hán-Việt ngày nay đều giữ nguyên hoàn toàn nghĩa giống tiếng Trung hiện đại"
      ],
      correctIndex: 1,
      explanation:
        "Tiếng Việt thuộc ngữ hệ Nam Á (Mon-Khmer), khác ngữ hệ Hán-Tạng của tiếng Hán. Âm Hán-Việt hình thành trên nền ngữ âm Đường–Tống nên giữ các âm cuối -p, -t, -c; Chữ Nôm do trí thức Việt Nam tự sáng tạo để ghi tiếng Việt thuần; và nhiều từ Hán-Việt bị lệch nghĩa so với tiếng Trung hiện đại."
    },
    {
      id: "q5",
      type: "multiple-choice",
      category: "Kinh doanh Quốc tế & Vùng miền",
      question: "Khi so sánh môi trường kinh doanh tại Bắc Kinh ('Kinh Phái') và Thượng Hải ('Hải Phái'), đặc điểm nào thường được quan sát thấy nhất?",
      options: [
        "Không có sự khác biệt nào vì mọi doanh nghiệp Trung Quốc vận hành giống nhau",
        "Thượng Hải nổi bật với văn hóa khế ước, ranh giới công việc–đời tư rõ ràng và tính quốc tế hóa cao, còn Bắc Kinh gắn nhiều hơn với trục chính sách, thứ bậc định chế và tập đoàn nhà nước",
        "Bắc Kinh sử dụng tiếng Quảng Đông làm ngôn ngữ hành chính",
        "Quan hệ (Guanxi) cho phép bỏ qua hoàn toàn hợp đồng và tuân thủ pháp lý tại Thượng Hải"
      ],
      correctIndex: 1,
      explanation:
        "Khác biệt vùng miền (Kinh Phái vs Hải Phái vs văn hóa Thâm Quyến) tác động rõ rệt tới phong cách giao tiếp. Dù ở đâu, doanh nghiệp hiện đại vẫn dựa vào hợp đồng, dữ liệu giá-chất lượng và tuân thủ pháp lý bên cạnh xây dựng lòng tin cá nhân."
    },
    {
      id: "q6",
      type: "vocabulary",
      category: "Từ vựng Kinh doanh & Xã hội học",
      promptHanzi: "差序格局",
      question: "Khái niệm xã hội học 差序格局 (Phí Hiếu Thông đề xuất năm 1947) giải thích điều gì?",
      options: [
        "Sự phân chia chuỗi cung ứng theo cụm công nghiệp",
        "Cấu trúc quan hệ xã hội đồng tâm lan tỏa từ cá nhân theo độ thân sơ thay vì tổ chức hợp đồng bình đẳng tuyệt đối",
        "Hệ thống 6 loại trà theo mức độ lên men",
        "Cơ chế Tam tỉnh Lục bộ thời nhà Đường"
      ],
      correctIndex: 1,
      explanation:
        "差序格局 (chàxù géjú – Sai tự cách cục) là khái niệm nền tảng giúp hiểu gốc rễ của Guanxi, Nhân tình và cấu trúc gia tộc truyền thống."
    },
    {
      id: "q7",
      type: "short-answer",
      category: "Tự phản biện Feynman (Short-Answer Active Recall)",
      question: "Hãy tự diễn đạt bằng lời của bạn (Feynman Technique): Vì sao không nên dịch 'Ngũ Hành' (五行) thành 5 chất liệu tĩnh, và làm sao tách bạch giữa giá trị triết học–văn hóa của Ngũ Hành với khoa học tự nhiên hiện đại?",
      modelAnswer:
        "1) Chữ 'Hành' (行) chỉ sự vận động, chuyển hóa chứ không phải 5 nguyên tố hóa học tĩnh; chúng tương tác theo hai vòng phản hồi Tương Sinh (nuôi dưỡng) và Tương Khắc (kiềm chế mất cân bằng). 2) Về mặt nhận thức luận, Ngũ Hành là mô hình 'tư duy tương ứng' (correlative cosmology) cổ đại giúp lý giải tổng thể tự nhiên và Đông y, nhưng không thay thế bảng tuần hoàn hóa học hay sinh học phân tử hiện đại.",
      explanation: "Đối chiếu câu trả lời của bạn với đáp án gợi ý bên dưới, sau đó lưu vào Nhật ký Học tập nếu muốn chỉnh sửa theo ngôn ngữ riêng."
    },
    {
      id: "q8",
      type: "mcq",
      category: "Giao thương Lịch sử & Hải thương",
      question: "Thiết chế nào do triều đình Đường – Tống – Nguyên lập ra tại các thương cảng như Quảng Châu, Tuyền Châu để quản lý thuyền buôn quốc tế, đánh thuế và kiểm soát kho ngoại quan?",
      options: [
        "Thủ công cục (手工局)",
        "Thị Bạc Ty (市舶司)",
        "Hàn Lâm Viện (翰林院)",
        "Tư Thiên Giám (司天监)"
      ],
      correctIndex: 1,
      explanation: "Thị Bạc Ty (市舶司) là cơ quan hải quan – thương vụ chuyên trách ngoại thương đường biển thời Đường, Tống, Nguyên và đầu Minh, đóng vai trò quan trọng trên Con đường Tơ lụa Hàng hải."
    },
    {
      id: "q9",
      type: "hanzi",
      category: "Hán ngữ Cổ điển & Nông lịch",
      promptHanzi: "二十四节气",
      question: "Nhìn trực diện Hán tự trên (không Pinyin): Khái niệm văn hóa – thiên văn này đo lường chu kỳ nào?",
      options: [
        "24 ngày lễ tế tổ tiên thuần túy theo tuần Trăng Âm lịch",
        "24 mốc chuyển động Mặt Trời (mỗi cung 15° trên hoàng đạo) chỉ dẫn mùa vụ và dưỡng sinh",
        "24 đơn vị cân nặng cổ đại dùng tại xưởng đúc đồng nhà Thương",
        "24 điều luật hình sự đầu tiên của Thương Ưởng nước Tần"
      ],
      correctIndex: 1,
      explanation: "二十四节气 (Nhị thập tứ tiết khí) được xác định thuần túy theo góc kinh độ Mặt Trời (Lập Xuân, Xuân Phân, Đông Chí...), là phần Dương lịch tích hợp trong nông lịch truyền thống và sách 《Hoàng Đế Nội Kinh》."
    },
    {
      id: "q10",
      type: "mcq",
      category: "Thuật số & Nhận thức luận",
      question: "Điểm phân biệt kỹ thuật cơ bản giữa Tử Bình Bát Tự và Tử Vi Đẩu Số dưới góc độ lịch pháp học là gì?",
      options: [
        "Bát Tự lập trụ theo 24 Tiết khí Mặt Trời; Tử Vi Đẩu Số an 14 chính tinh và Tứ Hóa theo ngày tháng Âm lịch",
        "Bát Tự hoàn toàn dùng kinh độ sao Thủy, còn Tử Vi dùng lịch La Mã cổ đại",
        "Cả hai môn đều là phát minh từ khoa học vật lý hiện đại thế kỷ XXI",
        "Tử Vi không dùng 12 Địa Chi, chỉ dùng 5 hành Kim – Mộc – Thủy – Hỏa – Thổ"
      ],
      correctIndex: 0,
      explanation: "Trong hệ thống thuật số cổ truyền, Bát Tự chuyển đổi ngày sinh qua trục Tiết khí (tháng Dần bắt đầu từ Lập Xuân), còn Tử Vi Đẩu Số dùng tháng Âm lịch và giờ sinh để an sao trên 12 cung; cả hai đều được nghiên cứu như di sản ký hiệu văn hóa chứ không phải khoa học thực chứng."
    },
    {
      id: "q11",
      type: "mcq",
      category: "Kinh doanh Quốc tế & Hải quan Việt – Trung",
      question: "Để một lô hàng nhập khẩu từ Trung Quốc về Việt Nam hợp lệ hưởng thuế ưu đãi đặc biệt ACFTA (C/O Form E), điều kiện nào sau đây là then chốt?",
      options: [
        "Chỉ cần người bán đóng dấu công ty Trung Quốc lên Commercial Invoice",
        "Đáp ứng quy tắc xuất xứ (như WO, CTH hoặc RVC tối thiểu 40%) cùng bộ chứng từ Invoice, Packing List, B/L khớp thông tin với Form E",
        "Luôn áp dụng mức thuế MFN cao nhất thay cho thuế ưu đãi",
        "Không cần phân loại mã HS 8 số khi khai tờ khai điện tử VNACCS"
      ],
      correctIndex: 1,
      explanation: "Hưởng ưu đãi Form E / RCEP đòi hỏi hàng hóa đạt tiêu chuẩn xuất xứ (WO, PE, chuyển đổi mã số HS hoặc RVC >= 40%) và không có sai lệch thông số hàng hóa, trọng lượng, mã HS giữa Hợp đồng, Invoice, Packing List, Vận đơn và C/O."
    },
    {
      id: "q12",
      type: "short-answer",
      category: "Tổng hợp Feynman Liên ngành (Trung – Việt & Thương mại)",
      question: "Hãy tự diễn giải trong 3–5 câu: Vai trò lịch sử của thương cảng Đại Việt (Chu Đậu, Cù Lao Chàm) trong Con đường Tơ lụa Hàng hải thế kỷ XV khác và giống điểm gì so với vai trò của Việt Nam trong chuỗi cung ứng RCEP với Trung Quốc hiện nay?",
      modelAnswer: "Điểm giống: Việt Nam đều tận dụng vị trí địa-kinh tế cửa ngõ Biển Đông và năng lực sản xuất gắn với mạng lưới Trung Hoa để tham gia chuỗi giá trị liên vùng (thế kỷ XV là xuất khẩu gốm hoa lam Chu Đậu tiếp nối công nghệ men lam Cảnh Đức Trấn sang Đông Nam Á–Trung Đông; hiện nay là nhập linh kiện/nguyên liệu công nghiệp từ Quảng Đông–Chiết Giang để lắp ráp xuất khẩu và xuất khẩu nông sản chính ngạch). Điểm khác: Thương mại cổ đại vận hành qua thuyền buồm, Thị Bạc Ty và cống–hộ khẩu truyền thống; thương mại hiện đại chịu điều chỉnh của thể chế FTA (ACFTA Form E, RCEP), mã HS chuẩn WCO, Incoterms và hệ thống thông quan điện tử VNACCS/cửa khẩu thông minh.",
      explanation: "Đối chiếu câu trả lời tự diễn đạt của bạn với đáp án gợi ý trên để rà soát tư duy liên ngành Lịch sử Thương mại – Kinh doanh Quốc tế."
    },
    {
      id: "q13",
      type: "multiple-choice",
      category: "Khoa cử & Thể chế Đông Á",
      question: "Cải cách kỹ thuật nào dưới thời Bắc Tống đã giúp kỳ thi Khoa cử (科举) trở nên công bằng, hạn chế giám khảo nhận ra chữ viết của thí sinh quý tộc?",
      options: [
        "Bãi bỏ hoàn toàn việc thi viết văn xuôi",
        "Thực hiện chế độ 'Hồ danh' (糊名 – dán kín tên/rọc phách) và 'Đằng lục' (誊录 – cử thư lại chép lại toàn bộ bài thi bằng mực đỏ trước khi chấm)",
        "Chỉ cho phép con cháu quan lại nhất phẩm dự thi Hội",
        "Chuyển toàn bộ kỳ thi Đình sang thi bắn cung và cưỡi ngựa"
      ],
      correctIndex: 1,
      explanation:
        "Thời Bắc Tống, triều đình áp dụng 'Hồ danh' (niêm phong tên thí sinh) và 'Đằng lục' (thuê người chép lại bài thi ra bản mới để giám khảo không nhận diện được nét chữ quen thuộc), tạo bước tiến lớn về quy trình khảo thí khách quan."
    },
    {
      id: "q14",
      type: "vocabulary",
      category: "Hợp đồng Ngoại thương · Chiết tự Pháp lý",
      promptHanzi: "定金 vs 订金",
      question: "Trong hợp đồng mua bán hàng hóa với nhà cung cấp Trung Quốc, sự khác biệt pháp lý cốt lõi giữa 定金 và 订金 là gì?",
      options: [
        "Hai từ hoàn toàn giống nhau về hiệu lực pháp lý, dùng từ nào cũng được",
        "定金 (bộ Miên 宀) là tiền đặt cọc pháp định chịu chế tài phạt cọc gấp đôi theo Điều 587 Bộ luật Dân sự TQ; còn 订金 (bộ Ngôn 讠) chỉ được coi là khoản trả trước (预付款) có thể hoàn lại",
        "订金 có hiệu lực phạt gấp 10 lần giá trị hợp đồng",
        "定金 chỉ dùng trong mua bán bất động sản nội địa, không dùng trong ngoại thương"
      ],
      correctIndex: 1,
      explanation:
        "Dù phát âm giống hệt nhau (dìngjīn), chữ 定金 chịu quy tắc phạt cọc cứng (bên mua hủy mất cọc, bên bán hủy đền gấp đôi), trong khi 订金 về mặt pháp lý chỉ là tiền ứng trước."
    },
    {
      id: "q15",
      type: "multiple-choice",
      category: "Lịch sử Khoa học & Kỹ thuật",
      question: "Bộ bách khoa thư kỹ thuật năm 1637 nào của Tống Ứng Tinh được mệnh danh là 'Bách khoa toàn thư công nghệ thế kỷ XVII của Trung Quốc' với 123 bức tranh khắc gỗ?",
      options: [
        "《Bản Thảo Cương Mục》 (本草纲目) của Lý Thời Trân",
        "《Thiên Công Khai Vật》 (天工开物) của Tống Ứng Tinh",
        "《Tư Trị Thông Giám》 (资治通鉴) của Tư Mã Quang",
        "《Văn Tâm Điêu Long》 (文心雕龙) của Lưu Hiệp"
      ],
      correctIndex: 1,
      explanation:
        "《Thiên Công Khai Vật》 (1637) của Tống Ứng Tinh ghi chép thực nghiệm toàn diện về nông nghiệp, dệt lụa đề hoa, gốm sứ Cảnh Đức Trấn, luyện kẽm/sắt, làm giấy và đóng tàu cuối thời Minh."
    },
    {
      id: "q16",
      type: "vocabulary",
      category: "Triết học Tâm học · Chiết tự Kinh điển",
      promptHanzi: "知行合一",
      question: "Mệnh đề triết học 知行合一 do Vương Dương Minh đề xướng thời Minh mang ý nghĩa cốt lõi nào?",
      options: [
        "Tri thức lý thuyết và hành động thực tiễn vốn là một thể thống nhất: biết chân thực thì tất yếu phải thể hiện qua hành động",
        "Phải tách rời hoàn toàn việc đọc sách khỏi việc làm quan",
        "Chỉ cần ngồi thiền tĩnh tọa mà không cần làm việc thực tế",
        "Mọi tri thức đều do bẩm sinh không cần học tập"
      ],
      correctIndex: 0,
      explanation:
        "Trong 《Truyền Tập Lục》, Vương Dương Minh khẳng định: 'Tri là khởi đầu của Hành, Hành là sự hoàn thành của Tri' (知是行之始，行是知之成), phê phán lối học chỉ nói suông mà không thực hành."
    },
    {
      id: "q17",
      type: "multiple-choice",
      category: "Mỹ học Thư pháp & Triện khắc",
      question: "Trong nghệ thuật Triện khắc (篆刻) truyền thống trên mặt đá ấn chương, thuật ngữ 'Chu văn' (朱文) và 'Bạch văn' (白文) được phân biệt như thế nào?",
      options: [
        "Chu văn là khắc lõm nền để nét chữ nổi màu đỏ (Dương văn); Bạch văn là khắc lõm nét chữ để chữ hiện màu trắng trên nền đỏ (Âm văn)",
        "Chu văn chỉ dùng mực đen, Bạch văn chỉ dùng mực xanh",
        "Chu văn viết bằng chữ Thảo, Bạch văn viết bằng chữ Khải",
        "Chỉ có hoàng đế mới được dùng Bạch văn"
      ],
      correctIndex: 0,
      explanation:
        "Chu văn (朱文 – Dương văn) có nét chữ màu đỏ chu sa trên nền giấy trắng thanh thoát; Bạch văn (白文 – Âm văn) có nét chữ màu trắng chìm trên nền đỏ đầm chắc. Khi đóng hai ấn cạnh nhau, người xưa thường phối hợp một âm một dương."
    },
    {
      id: "q18",
      type: "comparison",
      category: "Từ Hán–Việt Đồng hình Dị nghĩa",
      question: "Khi đối tác doanh nghiệp Trung Quốc nói '我们遇到了一点困难，需要做个检讨', cách dịch nào sang tiếng Việt là CHÍNH XÁC?",
      options: [
        "Dịch nguyên âm Hán-Việt: 'Chúng tôi gặp một chút khốn nạn, cần làm kiểm thảo'",
        "Dịch chuẩn ngữ nghĩa hiện đại: 'Chúng tôi gặp một chút khó khăn (困难), cần làm bản tự kiểm điểm/rút kinh nghiệm (检讨)'",
        "Dịch là: 'Chúng tôi muốn hủy bỏ hợp đồng ngay lập tức'",
        "Dịch là: 'Chúng tôi đề nghị tăng giá đơn hàng thêm 20%'"
      ],
      correctIndex: 1,
      explanation:
        "困难 (kùnnan) trong tiếng Trung hiện đại nghĩa là 'khó khăn, vướng mắc' và 检讨 (jiǎntǎo) nghĩa là 'tự kiểm điểm nhận lỗi'. Đây là cặp từ đồng hình dị nghĩa Hán–Việt điển hình không được dịch ghép âm máy móc."
    },
    {
      id: "q19",
      type: "multiple-choice",
      category: "Chuỗi Cung ứng & TMĐT Đương đại",
      question: "Mô hình sản xuất 'Đơn nhỏ phản ứng nhanh' (小单快反 – Small-Batch Quick-Response) của chuỗi cung ứng thời trang Quảng Châu / SHEIN vận hành theo nguyên lý nào?",
      options: [
        "Sản xuất trước 1 triệu sản phẩm mỗi mẫu rồi lưu kho chờ bán dần trong 3 năm",
        "Đặt sản xuất thử lô rất nhỏ (100–200 chiếc/mẫu) để đo phản ứng thị trường thời gian thực; mẫu nào bán chạy mới tự động đặt bù hàng loạt qua hệ thống số hóa",
        "Chỉ nhận đơn hàng tối thiểu từ 50.000 chiếc trở lên",
        "Hoàn toàn không sử dụng dữ liệu số trong quản lý xưởng may"
      ],
      correctIndex: 1,
      explanation:
        "小单快反 (Xiǎodān Kuàifǎn) kết hợp MOQ cực thấp ở lô thử nghiệm với hệ thống ERP kết nối hàng nghìn xưởng linh hoạt tại vùng Châu Giang, giúp giảm thiểu tồn kho và rút ngắn chu kỳ ra mẫu xuống 7–10 ngày."
    },
    {
      id: "q20",
      type: "short-answer",
      category: "Tổng hợp Feynman: Khoa cử & Văn hóa Trọng học Đông Á",
      question: "Hãy tự diễn giải trong 3–4 câu: Vì sao cả Quốc Tử Giám Bắc Kinh và Văn Miếu – Quốc Tử Giám Hà Nội đều lập Bia Tiến sĩ khắc tên người đỗ đạt, và di sản này để lại bài học gì cho giáo dục hiện đại?",
      modelAnswer:
        "1) Bia Tiến sĩ tại Bắc Kinh (198 bia) và Hà Nội (82 bia, với câu 'Hiền tài là nguyên khí của quốc gia' năm 1484) vừa vinh danh nỗ lực học tập cá nhân không phân biệt xuất thân, vừa nhắc nhở trách nhiệm liêm chính của kẻ sĩ trước lịch sử ('bia đá lưu danh muôn đời'). 2) Bài học cho hiện đại là giữ vững truyền thống hiếu học và tuyển dụng nhân tài công bằng, nhưng phải vượt qua lối học từ chương ứng thí máy móc (như văn Bát cổ cuối Minh–Thanh) để khuyến khích tư duy phản biện và khoa học thực nghiệm.",
      explanation: "Đối chiếu với gợi ý trên để củng cố kiến thức về thể chế Khoa cử và giao lưu văn hiến Trung – Việt."
    }
  ],

  researchLibrary: {
    categories: [
      {
        id: "primary-texts",
        nameVi: "Nguồn Nguyên bản & Kinh điển Cổ (Primary Sources)",
        nameZh: "一手文献与传世古籍",
        items: [
          {
            title: "Chinese Text Project (中国哲学书电子化计划 – CText)",
            institution: "Thư viện Số Triết học Trung Hoa",
            date: "Cập nhật liên tục",
            url: "https://ctext.org/",
            type: "Kho văn bản nguyên bản",
            verification: "Tin cậy cao để tra cứu nguyên văn Hán tự (Tiên Tần Lưỡng Hán, Ngụy Tấn, Tống Minh) kèm đối chiếu bản khắc cổ; cần đối chiếu thêm bản hiệu điểm của Trung Hoa Thư Cục (中华书局) khi trích dẫn học thuật."
          },
          {
            title: "Thư viện Quốc gia Trung Quốc – Kho Cổ tịch Số hóa (中华古籍资源库)",
            institution: "National Library of China (国家图书馆)",
            date: "Kho lưu trữ quốc gia",
            url: "https://www.nlc.cn/",
            type: "Lưu trữ Quốc gia Chính thức",
            verification: "Nguồn cấp 1 chính thống cho bản chụp mộc bản cổ, địa phương chí và tư liệu sử học."
          },
          {
            title: "Bảo tàng Cố Cung – Kho Hiện vật Số hóa (故宫博物院数字文物库)",
            institution: "The Palace Museum, Beijing",
            date: "Cổng tra cứu mở",
            url: "https://www.dpm.org.cn/",
            type: "Bảo tàng Quốc gia",
            verification: "Xác thực hiện vật thư họa, gốm sứ, kiến trúc và tư liệu cung đình Minh–Thanh."
          }
        ]
      },
      {
        id: "academic-databases",
        nameVi: "Cơ sở Dữ liệu Học thuật & Tạp chí Bình duyệt",
        nameZh: "学术数据库与期刊索引",
        items: [
          {
            title: "National Center for Philosophy and Social Sciences Documentation (国家哲学社会科学文献中心 – NCPSSD)",
            institution: "Viện Hàn lâm Khoa học Xã hội Trung Quốc (CASS)",
            date: "Truy cập mở chính thức",
            url: "https://www.ncpssd.cn/",
            type: "CSDL Học thuật Mở Quốc gia",
            verification: "Kho truy cập mở miễn phí hàng triệu bài báo khoa học xã hội – nhân văn – kinh tế học tiếng Trung (bao gồm nhiều tạp chí lõi CSSCI và PKU Core)."
          },
          {
            title: "CNKI (中国知网), Wanfang Data (万方数据) & VIP (维普网)",
            institution: "Các nhà cung cấp chỉ mục học thuật lớn tại Trung Quốc",
            date: "Cổng thương mại / thư viện đại học",
            url: "https://www.cnki.net/",
            type: "CSDL Học thuật (Cần tài khoản thư viện)",
            verification: "Tiêu chuẩn tìm luận văn thạc sĩ/tiến sĩ và bài báo CSSCI/CSCD; lưu ý phân biệt rõ tạp chí lõi (CSSCI / 北大核心) với tạp chí phổ thông (普刊)."
          },
          {
            title: "Stanford Encyclopedia of Philosophy (SEP) – Chinese Philosophy Entries",
            institution: "Stanford University",
            date: "Bình duyệt học thuật liên tục",
            url: "https://plato.stanford.edu/search/searcher.py?query=Chinese+philosophy",
            type: "Bách khoa Triết học Bình duyệt Quốc tế",
            verification: "Tài liệu tiếng Anh chuẩn mực về Khổng Tử, Mạnh Tử, Trang Tử, Lão Tử, Mặc gia, Danh gia và Nhận thức luận Trung Hoa."
          }
        ]
      },
      {
        id: "gov-econ-trade",
        nameVi: "Cổng Dữ liệu Chính phủ, Kinh tế & Thương mại",
        nameZh: "官方统计、经贸与留学权威门户",
        items: [
          {
            title: "Cục Thống kê Quốc gia Trung Quốc (国家统计局 – NBS)",
            institution: "National Bureau of Statistics of China",
            date: "Niên giám & Báo cáo tháng/quý",
            url: "https://www.stats.gov.cn/",
            type: "Cơ quan Thống kê Chính phủ",
            verification: "Nguồn cấp 1 về GDP, chỉ số tiêu dùng, sản lượng công nghiệp, dân số đô thị; lưu ý kiểm tra định nghĩa 'quy mô trên mức quy định' (规模以上) và số sơ bộ vs chính thức."
          },
          {
            title: "Tổng cục Hải quan Trung Quốc (海关总署 – GACC) & Bộ Thương mại (商务部 – MOFCOM)",
            institution: "Chính phủ CHND Trung Hoa",
            date: "Cập nhật chính sách & thương mại",
            url: "https://www.mofcom.gov.cn/",
            type: "Cơ quan Quản lý Thương mại",
            verification: "Tra cứu kim ngạch xuất nhập khẩu Trung Quốc – ASEAN/Việt Nam, mã giám sát TMĐT xuyên biên giới (9610/9710/9810/1210) và quy tắc xuất xứ RCEP."
          },
          {
            title: "Cổng Học bổng Chính phủ Trung Quốc (中国政府奖学金 – CSC Study in China)",
            institution: "China Scholarship Council & Bộ Giáo dục Trung Quốc (MOE)",
            date: "Thông báo tuyển sinh hàng năm",
            url: "https://www.campuschina.org/",
            type: "Cơ quan Học bổng Chính thức",
            verification: "Dành cho sinh viên Việt Nam tìm hiểu học bổng Thạc sĩ Thương mại Quốc tế / Quản trị Chuỗi cung ứng tại Trung Quốc; luôn kiểm tra yêu cầu HSK, IELTS/TOEFL, thi CSCA (nếu trường áp dụng) và hạn nộp Type A / Type B cho năm tuyển sinh thực tế."
          }
        ]
      },
      {
        id: "discovery-platforms",
        nameVi: "Nền tảng Khám phá Đời sống & Thực tiễn (Cần Kiểm chứng Độc lập)",
        nameZh: "社会观察与田野线索平台（须交叉核实）",
        items: [
          {
            title: "Zhihu (知乎), WeChat Official Accounts (微信公众号), Xiaohongshu (小红书), Baidu Baike (百度百科)",
            institution: "Nền tảng mạng xã hội & cộng đồng nội địa Trung Quốc",
            date: "Thời gian thực",
            url: "https://www.zhihu.com/",
            type: "Nguồn Khám phá / Thực tiễn (Cần Kiểm chứng)",
            verification: "CẢNH BÁO HỌC THUẬT: Rất hữu ích để quan sát góc nhìn người trong cuộc về đời sống đại học, xu hướng tiêu dùng, văn hóa công sở hay thảo luận chuyên môn; nhưng TUYỆT ĐỐI KHÔNG dùng làm nguồn trích dẫn duy nhất khi chưa đối chiếu lại với văn bản gốc, dữ liệu thống kê hoặc tài liệu học thuật bình duyệt."
          }
        ]
      }
    ]
  },

  dailyDiscoveries: [
    {
      titleVi: "Tại sao Trung Quốc và Việt Nam đều có chữ 'Tín' (信) cấu tạo từ Người và Lời nói?",
      titleZh: "汉字解析：“信”与商业伦理",
      summary: "Chữ 信 kết hợp bộ Nhân (亻 – con người) và chữ Ngôn (言 – lời nói). Từ đạo đức Nho gia đến tài chính hiện đại, khả năng giữ lời hứa của một cá nhân là nền tảng biến kết nối xã hội (Quan hệ) thành giá trị kinh tế (Tín dụng 信用).",
      actionLabel: "Mở từ điển chữ 信",
      actionType: "term",
      actionId: "xinyong"
    },
    {
      titleVi: "Phân biệt Bát Quái trong 《周易》 với Nghĩa Khẩu ngữ Đương đại",
      titleZh: "词义流变：从《周易》八卦到网络热词",
      summary: "Trong triết học cổ đại, 八卦 là 8 ký hiệu 3 vạch Âm-Dương mô hình hóa biến đổi tự nhiên; còn trong tiếng Trung khẩu ngữ ngày nay, '很八卦' dùng để nói về việc hóng chuyện giải trí. Hiểu sự chuyển nghĩa giúp tránh nhầm lẫn khi đọc báo chí và tư liệu học thuật.",
      actionLabel: "Mở từ điển chữ 八卦",
      actionType: "term",
      actionId: "bagua"
    },
    {
      titleVi: "24 Tiết khí là Lịch Mặt Trời (không phải Lịch Trăng)",
      titleZh: "太阳历与太阴历：二十四节气的天文本质",
      summary: "Nhiều người nhầm Lịch Âm–Dương truyền thống hoàn toàn dựa theo Mặt Trăng. Thực chất, 24 Tiết khí (Lập Xuân, Đông Chí...) được xác định chính xác theo mỗi góc 15° kinh độ Mặt Trời trên hoàng đạo để dẫn hướng nông nghiệp và y lý Nội Kinh.",
      actionLabel: "Mở từ điển 二十四节气",
      actionType: "term",
      actionId: "ershisijieqi"
    },
    {
      titleVi: "Hiểu đúng C/O Form E (ACFTA) & Mã HS khi Nhập khẩu từ Trung Quốc",
      titleZh: "中国—东盟自贸区：原产地证书与海关归类逻辑",
      summary: "Cùng một mặt hàng từ Quảng Châu về Hải Phòng, mức thuế MFN có thể 15–20% nhưng thuế ưu đãi ACFTA Form E giảm về 0–5% nếu hàng hóa đáp ứng quy tắc RVC 40% hoặc chuyển đổi mã số HS hợp lệ và chứng từ khớp 100%.",
      actionLabel: "Mở từ điển 原产地证书",
      actionType: "term",
      actionId: "yuanchanzheng"
    },
    {
      titleVi: "Cẩn trọng 1 chữ Hán quyết định Tiền Cọc Hợp đồng: 定金 vs 订金",
      titleZh: "外贸合同实务：“定金”与“订金”的法律天壤之别",
      summary: "Cùng đọc là 'dìngjīn', nhưng chữ 定金 (bộ Miên) chịu chế tài phạt cọc gấp đôi theo Điều 587 Bộ luật Dân sự Trung Quốc, còn chữ 订金 (bộ Ngôn) chỉ là tiền ứng trước đặt hàng có thể hoàn lại.",
      actionLabel: "Mở từ điển 定金与订金",
      actionType: "term",
      actionId: "dingjin"
    },
    {
      titleVi: "Tại sao bức đại họa 《Giang Sơn Như Thử Đa Kiều》 lại kết hợp hai trường phái Bắc – Nam?",
      titleZh: "艺术典藏：《江山如此多娇》的南北山水合璧",
      summary: "Năm 1959, hai danh họa Phó Báo Thạch (Kim Lăng phái) và Quan Sơn Nguyệt (Lĩnh Nam phái) cùng hợp bút vẽ bức tranh sơn thủy 9 × 6,5m, dung hợp nét bút khoáng đạt phương Bắc với tùng xanh phương Nam và vầng mặt trời chu sa.",
      actionLabel: "Ngắm hiện vật trong Bảo tàng Số",
      actionType: "page",
      actionId: "museum"
    },
    {
      titleVi: "Bia Tiến sĩ Bắc Kinh – Hà Nội và Mệnh đề 'Hiền tài là nguyên khí của quốc gia'",
      titleZh: "科举文献：进士题名碑与“贤才国家之元气”",
      summary: "Quốc Tử Giám Bắc Kinh lưu giữ 198 bia Tiến sĩ Nguyên–Minh–Thanh, trong khi Văn Miếu Hà Nội bảo tồn 82 bia Tiến sĩ Lê–Mạc (Di sản Tư liệu UNESCO) phản ánh truyền thống trọng học Đông Á.",
      actionLabel: "Mở từ điển 进士",
      actionType: "term",
      actionId: "jinshi"
    },
    {
      titleVi: "Mô hình 'Đơn nhỏ phản ứng nhanh' (小单快反) của Chuỗi Cung ứng Châu Giang",
      titleZh: "柔性供应链：从“小单快反”看现代制造业协同",
      summary: "Thay vì sản xuất hàng loạt dễ tồn kho, các cụm xưởng Quảng Châu – Chiết Giang thử nghiệm lô 100–200 chiếc rồi dùng dữ liệu thời gian thực để đặt bù tự động trong 7 ngày.",
      actionLabel: "Mở từ điển 小单快反",
      actionType: "term",
      actionId: "xiaodankuaifan"
    }
  ]
};
