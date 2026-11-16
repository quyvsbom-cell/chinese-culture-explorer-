// ============================================================================
// MASTER PROMPT 04: Brand Ownership, Founder's Identity, Copyright & IP
// Centralized Project Configuration, Trilingual Founder's Message,
// Brand Identity System, 9-Section About Architecture, and 8 Legal Pages
// ============================================================================

(function () {
  const CURRENT_YEAR = new Date().getFullYear();

  window.CCE_BRAND = {
    // Section 10: Centralized Configuration (Single Source of Truth)
    projectName: "CHINESE CULTURE EXPLORER",
    projectNameZh: "中国文化探索",
    projectNameZhTrad: "中國文化探索",
    projectFullTitle: "CHINESE CULTURE EXPLORER – 中国文化探索",
    projectCategory: "Independent Digital Cultural and Academic Knowledge Platform",
    projectCategoryVi: "Nền tảng Tri thức Văn hóa và Học thuật Số Độc lập",

    founderName: "Lê Hưng Thịnh (黎兴盛)",
    founderRole: "Founder · International Business Undergraduate, Thuongmai University (Hanoi)",
    founderRoleVi: "Người sáng lập · Sinh viên ngành Kinh doanh Quốc tế, Trường Đại học Thương mại (Hà Nội)",
    founderRoleZh: "创始人 · 越南贸易大学（河内）国际商务系",
    founderSignature: "Lê Hưng Thịnh (黎兴盛) | Thuongmai University, Hanoi",
    foundedByStatement: "Founded by Lê Hưng Thịnh (Thuongmai University, Hanoi)",
    foundedByStatementVi: "Sáng lập bởi Lê Hưng Thịnh · Kinh doanh Quốc tế, ĐH Thương mại Hà Nội",
    foundedByStatementZh: "由河内贸易大学国际商务系黎兴盛（Lê Hưng Thịnh）创立",

    founderColophon: {
      sealChars: "興盛",
      vi: "Khởi nguồn từ cuốn sổ tay học chữ Hán và khảo cứu văn hiến Đông Á của Lê Hưng Thịnh (黎兴盛) — sinh viên ngành Kinh doanh Quốc tế tại Hà Nội — Chinese Culture Explorer được xây dựng như một thư phòng mở: nơi giao thoa giữa cổ họa, địa phương chí 34 tỉnh thành, chiếc cầu văn hóa Trung – Việt và phương pháp chiết tự Lục thư thực chiến.",
      en: "Born from the study desk and three-column calligraphy notebook of Lê Hưng Thịnh (黎兴盛) — an International Business student in Hanoi — Chinese Culture Explorer is designed as an open reading room connecting classical handscrolls, 34 provincial chronicles, Sino-Vietnamese cultural dialogue, and Liushu character study.",
      zh: "源于河内国际商务专业大学生黎兴盛（Lê Hưng Thịnh）的三栏汉字笔记，「中国文化探索」被构筑为一间敞开的书房：汇集传世书画长卷、三十四省区市人文舆图、中越文化交流以及六书析字工具。",
      ctaVi: "Đọc tâm thư người sáng lập →",
      ctaEn: "Read the founder's note →",
      ctaZh: "阅读创始人寄语 →"
    },

    officialTagline: "Explore Chinese Civilization. Understand Its Philosophy. Discover Its Culture.",
    officialTaglineLines: [
      "Explore Chinese Civilization.",
      "Understand Its Philosophy.",
      "Discover Its Culture."
    ],
    secondaryStatementEn: "Beyond Knowledge. Toward Understanding. Across Cultures.",
    secondaryStatementVi: "Vượt lên trên việc tiếp nhận kiến thức. Hướng đến sự thấu hiểu. Kết nối những nền văn hóa.",
    secondaryStatementZh: "超越知识，走向理解，连接不同文明。",

    brandPhilosophy:
      "Connecting Chinese civilization, historical knowledge, cultural understanding and independent academic exploration.",
    finalBrandSummary:
      "A long-term independent intellectual project dedicated to exploring Chinese civilization, encouraging academic inquiry and connecting cultural understanding between China and Vietnam.",

    copyrightOwner: "Lê Hưng Thịnh",
    copyrightYear: CURRENT_YEAR,
    copyrightNoticeFull: `Copyright © ${CURRENT_YEAR} Lê Hưng Thịnh. All Rights Reserved.`,
    copyrightNoticeShort: `© ${CURRENT_YEAR} Lê Hưng Thịnh. All Rights Reserved.`,
    officialDomain: "chinesecultureexplorer.org",
    officialReleaseDate: "2026-11-15",

    // Official Brand SVG Assets
    assets: {
      favicon: "assets/images/brand/favicon.svg",
      logoHorizontal: "assets/images/brand/brand-logo-horizontal.svg",
      founderSeal: "assets/images/brand/founder-signature-seal.svg"
    },

    // Section 4: Brand Identity & Visual Signature Specifications
    brandIdentity: {
      independenceNotice:
        "CHINESE CULTURE EXPLORER – 中国文化探索 là một sáng kiến giáo dục, nghiên cứu văn hóa và học thuật số độc lập do Lê Hưng Thịnh khởi tạo. Nền tảng không phải cơ quan thuộc chính phủ, bảo tàng quốc gia hay trường đại học công lập tại Trung Quốc hoặc Việt Nam.",
      independenceNoticeEn:
        "CHINESE CULTURE EXPLORER – 中国文化探索 is an independent digital educational and cultural research initiative founded by Lê Hưng Thịnh. It is not affiliated with any government agency, national museum, or official university institution.",
      colorPalette: [
        { name: "Imperial Red", zh: "宫墙红", hex: "#9F2929", usage: "Ấn triện chính thức, điểm nhấn học thuật và tiêu đề chủ đạo" },
        { name: "Cinnabar Red", zh: "朱砂红", hex: "#B63D32", usage: "Chi tiết đồ họa truyền thống, đường nhấn biên tập và trạng thái tương tác" },
        { name: "Ink Black", zh: "松烟墨", hex: "#202020", usage: "Văn bản học thuật, thư pháp và tương phản đọc dài chuẩn bảo tàng" },
        { name: "Ivory White", zh: "宣纸白", hex: "#F7F4ED", usage: "Nền giấy tuyên ấm dịu giảm mỏi mắt khi nghiên cứu chuyên sâu" },
        { name: "Antique Gold", zh: "古铜金", hex: "#B99A62", usage: "Đường viền mảnh, khung huy hiệu triều đại và biểu đồ lịch sử" },
        { name: "Jade Green", zh: "青玉绿", hex: "#637F72", usage: "Chú giải phương pháp luận, trạng thái xác minh nguồn và giao thoa Đông Á" }
      ],
      typographySystem: [
        { role: "Editorial Display Serif", fonts: "Cormorant Garamond, Libre Baskerville", purpose: "Tiêu đề chuyên luận tiếng Anh–Việt và wordmark thương hiệu" },
        { role: "Academic Body UI", fonts: "Be Vietnam Pro, Inter", purpose: "Hiển thị chuẩn xác toàn bộ dấu thanh tiếng Việt và văn bản giao diện" },
        { role: "Classical & Modern Hanzi", fonts: "Noto Serif SC/TC, Noto Sans SC/TC", purpose: "Hiển thị song song Hán tự Giản thể và Phồn thể không vỡ nét" }
      ],
      logoVariations: [
        {
          id: "horizontal-lockup",
          title: "Biểu trưng Ngang Chính thức (Official Horizontal Wordmark)",
          src: "assets/images/brand/brand-logo-horizontal.svg",
          caption: "Kết hợp ấn triện vuông 朱文印, tên dự án song ngữ Anh–Trung, khẩu hiệu chính thức và chữ ký sáng lập."
        },
        {
          id: "founder-seal",
          title: "Ấn triện & Chữ ký Sáng lập (Founder Visual Signature)",
          src: "assets/images/brand/founder-signature-seal.svg",
          caption: "Dấu ấn xác nhận quyền khởi tạo độc lập của Lê Hưng Thịnh trong ấn phẩm và chuyên luận dự án."
        },
        {
          id: "digital-favicon",
          title: "Biểu tượng Trình duyệt & Triện Vuông (Digital Seal Favicon)",
          src: "assets/images/brand/favicon.svg",
          caption: "Phiên bản thu gọn tỷ lệ 1:1 dùng làm favicon SVG và huy hiệu nhận diện di động."
        }
      ]
    },

    // Section 2: Authentic Trilingual Founder's Manifesto (VI / EN / 中文)
    foundersMessage: {
      vi: {
        langLabel: "Tiếng Việt",
        heading: "Giữa những dòng chảy giao thương và những nét mực cổ xưa",
        subtitle: "Lời ngỏ từ người sáng lập Chinese Culture Explorer — Lê Hưng Thịnh (黎兴盛)",
        paragraphs: [
          "Tôi bắt đầu xây dựng Chinese Culture Explorer (中国文化探索) không phải từ một viện nghiên cứu Hán học, mà từ bàn học của một sinh viên ngành Kinh doanh Quốc tế tại Trường Đại học Thương mại (Hà Nội).",
          "Khi học về thương mại xuyên biên giới, chuỗi cung ứng và kinh tế khu vực, tôi sớm nhận ra một điều: người ta có thể ký một hợp đồng ngoại thương bằng tiếng Anh, nhưng để thực sự thấu hiểu cách người Á Đông tư duy về chữ Tín (信), cách vận hành của mạng lưới quan hệ, hay lý do một vùng đất hình thành nên tính cách thương nhân đặc trưng qua hàng thiên niên kỷ, ta buộc phải quay về với gốc rễ văn hiến, địa lý và chữ viết của họ.",
          "Ở góc nhìn phổ thông tại Việt Nam, người ta thường dễ nghe nhiều thông tin tiêu cực hoặc mang định kiến một chiều về Trung Quốc. Nhưng nhìn thẳng vào thực tiễn công nghệ, công nghiệp, hạ tầng và tổ chức kinh tế, đối với tôi Trung Quốc thực sự là một quốc gia phát triển đi trước chúng ta ít nhất từ 50 đến 100 năm ở rất nhiều phương diện cốt lõi. Vì vậy, người Việt Nam mình càng cần mạnh dạn mở rộng tầm nhìn thực tế, đập bỏ những cái nhìn phiến diện, cảm tính để nhìn nhận khách quan năng lực của thế giới xung quanh và luôn sẵn sàng tâm thế hội nhập toàn cầu.",
          "Trên hành trình hội nhập ấy, tôi luôn tin và nhấn mạnh vai trò sống còn của việc học ngoại ngữ. Ngoại ngữ — đặc biệt là tiếng Trung bên cạnh tiếng Anh — không chỉ đơn thuần để giao tiếp hay dịch văn bản thương mại, mà là chiếc chìa khóa tự chủ giúp mỗi người tự mình tiếp cận nguồn tri thức nguyên bản, hiểu đúng đối tác, tự kiểm chứng sự thật và đứng vững trên đôi chân tri thức của chính mình thay vì nghe lại qua lăng kính suy diễn của người khác.",
          "Thế nhưng, khi tự mình tìm hiểu văn hóa và ngôn ngữ Trung Hoa, tôi luôn đứng giữa hai thái cực: một bên là những bài viết bề nổi, rời rạc trên mạng xã hội; bên kia là những tài liệu học thuật dày đặc thuật ngữ khiến người mới bước vào dễ dàng nản lòng. Bản thân tôi, sau những giờ làm việc với dữ liệu trên màn hình máy tính, vẫn giữ thói quen lật từng trang vở giấy kẻ ba cột, chậm rãi phân tích từng bộ thủ, từng kết cấu Lục thư (六书) và lắng nghe âm Hán–Việt vang lên vừa lạ vừa quen trong chính tiếng mẹ đẻ của mình. Khi cầm chiếc máy ảnh đi dọc những mái đình làng cổ Đường Lâm, ngắm những bức hoành phi câu đối ở Hà Nội, hay khi ngồi trên chuyến tàu xuyên biên giới nhìn những dãy núi đá vôi Quế Lâm hiện ra hệt như một bức thủy mặc Tống – Nguyên, tôi hiểu rằng văn hóa cổ điển chưa bao giờ nằm yên trong sách vở. Nó sống động, hữu hình và luôn kết nối trực tiếp với hiện tại.",
          "Chinese Culture Explorer ra đời từ mong muốn nối liền khoảng trống đó — theo một nguyên tắc duy nhất: Lấy tri thức làm gốc, lấy trải nghiệm làm đầu.",
          "Không gian này được thiết kế như một thư phòng mở gồm ba tầng trải nghiệm: (1) Một bảo tàng thị giác tĩnh lặng để bạn chậm rãi cuộn mở từng centimet của Thanh Minh Thượng Hà Đồ, ngắm từng nét bút trong Lan Đình Tập Tự, Hàn Thực Thiếp và 36 bảo vật bảo tàng; (2) Một bản đồ văn hiến và địa phương chí nối liền tư tưởng Bách gia chư tử, 30 bộ cổ tịch Tứ Khố, giao thoa Trung – Việt với hồ sơ thực địa của 34 tỉnh, thành phố và khu tự trị Trung Hoa; và (3) Một công cụ tự học thực chiến giải phẫu hơn 520 khái niệm và từ vựng theo Lục thư, đối chiếu Hán–Việt – Pinyin – Anh ngữ kèm 10 bộ thẻ Anki chuyên đề.",
          "Đặc biệt, nền tảng này sẽ không dừng lại ở phiên bản hiện tại mà sẽ được tôi liên tục cập nhật, bổ sung thêm nhiều bài chuyên luận khảo cứu mới theo dòng thời gian. Dự án không tự nhận là một bộ bách khoa toàn thư hoàn hảo; nó là cuốn sổ tay nghiên cứu sống động của một người trẻ Việt Nam tin rằng: thấu hiểu sâu sắc một nền văn minh lớn, phá bỏ định kiến hẹp hòi và làm chủ ngoại ngữ chính là con đường vững chắc nhất để bước ra hội nhập cùng thế giới hôm nay."
        ],
        signName: "Lê Hưng Thịnh (黎兴盛)",
        signRole: "Người sáng lập · Sinh viên ngành Kinh doanh Quốc tế, Trường Đại học Thương mại (Hà Nội)",
        signProject: "CHINESE CULTURE EXPLORER – 中国文化探索"
      },
      en: {
        langLabel: "English",
        heading: "Between Modern Trade Flows and Ancient Brushstrokes",
        subtitle: "A Note from the Founder — Lê Hưng Thịnh (黎兴盛)",
        paragraphs: [
          "I did not start building Chinese Culture Explorer (中国文化探索) inside a traditional Sinology department, but from the study desk of an International Business student in Hanoi.",
          "Studying cross-border trade, supply chains, and regional economics taught me an early lesson: you can draft a contract in English, but to truly grasp how East Asian societies think about trust (xìn 信), institutional continuity, or regional commercial character across millennia, you have to return to the bedrock of their texts, geography, and script.",
          "In everyday Vietnamese conversation, China is frequently filtered through negative stereotypes or one-sided impressions. Yet looking realistically at industrial capacity, infrastructure, technology, and institutional execution, I see an undeniable reality: China stands at least 50 to 100 years ahead of us across many foundational domains. For Vietnam to move forward, we must broaden our real-world perspective, shatter narrow and one-sided prejudices, face global realities clearly, and remain ready to integrate actively with the world.",
          "That conviction makes foreign language mastery indispensable. Learning languages—especially Mandarin Chinese alongside English—is not merely an auxiliary career skill; it is the vital key to accessing primary knowledge firsthand, verifying facts independently, understanding partners in their own voice, and engaging globally with intellectual autonomy.",
          "Yet as a self-directed learner of Mandarin and Chinese civilization, I kept running into a frustrating divide. Online resources were either fragmented travel clichés or dense academic archives that buried visual beauty under walls of jargon. Away from screens, I still learn best with a physical three-column notebook—breaking characters down into their Six Scripts (Liùshū 六书) components and tracing how Sino-Vietnamese (Hán–Việt) readings preserve ancient layers of meaning inside my own native language. Walking with my camera beneath the weathered timber roofs of Đường Lâm Ancient Village, reading classical couplets in Hanoi, or watching the karst peaks of Guilin unfold outside a train window like a living Song-dynasty handscroll, I realized that classical culture is not a relic. It is a living lens for understanding the present.",
          "Chinese Culture Explorer was built to bridge that gap around one conviction: rigorous in knowledge, effortless in experience.",
          "Rather than an intimidating database, this platform is curated as an open reading room and gallery across three dimensions: a quiet digital gallery for unrolling classical handscrolls, calligraphy, and 36 museum treasures; a living cultural and regional atlas covering 30 Four Treasuries classics, Sino-Vietnamese exchange, and all 34 provincial-level regions of China; and a practical study companion deconstructing 520+ terms through Liushu radical etymology and 10 curated Anki flashcard decks.",
          "This platform is an evolving project: I will continuously update and publish new analytical monographs over time rather than leaving it static. It does not claim to be an exhaustive encyclopedia, but rather an honest living notebook by a young Vietnamese learner convinced that breaking bias, seeing reality clearly, and mastering foreign languages is our strongest bridge to the wider world."
        ],
        signName: "Lê Hưng Thịnh (黎兴盛)",
        signRole: "Founder · International Business Undergraduate, Thuongmai University (Hanoi)",
        signProject: "CHINESE CULTURE EXPLORER – 中国文化探索"
      },
      zh: {
        langLabel: "中文",
        heading: "在现代商贸脉络与千年笔墨之间",
        subtitle: "创始人寄语 — 黎兴盛 (Lê Hưng Thịnh)",
        paragraphs: [
          "我创办「中国文化探索」(Chinese Culture Explorer)，并非始于象牙塔中的汉学研究所，而是源于河内一名国际商务专业大学生的书桌。",
          "在研习跨境贸易、供应链与区域经济的过程中，我越来越清晰地体会到：一纸商业合同可以用英文签署，但若想真正理解东亚社会对“信”的敬畏、理解礼俗与制度的演进、理解中国三十四个省区市延续千年的风土与商帮性格，就必须回到文字、地理与历史源流之中。",
          "在越南的日常舆论里，人们往往容易听到关于中国的片面印象或负面成见；但从基础设施、产业体系、前沿科技与管理规模的现实出发，我认为中国在许多核心领域至少领先我们五十年到一百年。因此，越南青年更应当拓展务实的国际视野，打破狭隘与片面的偏见，客观直面世界真实的发展水平，并时刻做好融入世界的准备。",
          "正因如此，我格外重视外语学习的价值。掌握外语——尤其是汉语和英语——绝非锦上添花的点缀，而是直接走近一手典籍、读懂商业伙伴深层逻辑、独立查证事实真相、并以平等自信的姿态走向全球舞台的必由之路。",
          "然而，作为一名中文与中华文化的自学者，我常感到现有的数字资源处于两个极端：要么是碎片化的浅层介绍，要么是令初学者望而却步的枯燥文献。在屏幕之外，我习惯用三栏纸质笔记本一笔一划地拆解汉字的“六书”结构，在汉越音（Hán–Việt）与现代汉语的对照中体会千年文脉的回响；我也曾带着相机走过河内古街与唐林古村的牌匾楹联，或乘列车北上桂林，在漓江山水间亲眼印证宋元水墨长卷的意境。我深知，真正的古典文化从不枯燥，它本就具有直抵人心的视觉与思想力量。",
          "因此，这个平台秉持一个朴素的原则：以考据为骨，以体验为先。目前全站已汇集 64 篇专题论文、30 部四库原典文献、36 件博物馆珍品、34 个省级行政区深度档案与 520 余条六书字源词条，而且未来我将持续更新并补充更多新的深度研究论文，让这座数字书房常读常新，助力每一位打破成见、以语言和理性走向世界的学习者。"
        ],
        signName: "黎兴盛 (Lê Hưng Thịnh)",
        signRole: "创始人 · 越南贸易大学（河内）国际商务系",
        signProject: "CHINESE CULTURE EXPLORER – 中国文化探索"
      }
    },

    // Section 9: 9-Section Structured About Page Layout
    aboutSections: [
      {
        num: "01",
        id: "about-sec-intro",
        title: "Giới thiệu Dự án • What is CHINESE CULTURE EXPLORER?",
        titleZh: "01. 项目简介",
        summary:
          "CHINESE CULTURE EXPLORER – 中国文化探索 là một nền tảng tri thức văn hóa và học thuật số độc lập do Lê Hưng Thịnh khởi tạo, kết hợp năm cấu phần trong một hệ sinh thái thống nhất: Bảo tàng Số, Bách khoa Văn minh Trung Hoa, Thư viện Tư liệu Đối chiếu, Phòng học Hán ngữ Zero-Pinyin (Anki) và Cầu nối Nghiên cứu Trung – Việt."
      },
      {
        num: "02",
        id: "about-sec-vision",
        title: "Tầm nhìn & Sứ mệnh • Vision and Mission",
        titleZh: "02. 愿景与使命",
        summary:
          "Tầm nhìn: Kết nối di sản văn minh Trung Hoa, tư duy triết học cổ điển và bối cảnh xã hội – thương mại đương đại thành một bản đồ tri thức có phương pháp. Sứ mệnh: Giúp người học tại Việt Nam và quốc tế vượt qua lối học thuộc rời rạc để biết tự truy nguồn cổ tịch Hán văn, đối chiếu sử liệu đa chiều và nghiên cứu độc lập."
      },
      {
        num: "03",
        id: "founder-message-section",
        title: "Lời nhắn từ Người sáng lập • Founder's Message – 创始人寄语",
        titleZh: "03. 创始人寄语",
        summary: "Thông điệp biên tập chính thức ba thứ tiếng (Việt – Anh – Trung) của Lê Hưng Thịnh."
      },
      {
        num: "04",
        id: "about-sec-research",
        title: "Triết lý Nghiên cứu • Research Philosophy",
        titleZh: "04. 学术研究原则",
        points: [
          { label: "Ưu tiên sử liệu gốc", text: "Dẫn chiếu kinh điển Hán văn, chính sử và văn bản khảo cổ học trước bình luận thứ cấp." },
          { label: "Tách bạch nhận thức luận", text: "Phân định rạch ròi sự kiện lịch sử, triết học diễn giải, tín ngưỡng dân gian và khoa học thực chứng (nhất là trong Đông y và Thuật số)." },
          { label: "Đa dạng địa lý & lịch sử", text: "Không đồng nhất văn hóa Trung Hoa thành một khối tĩnh; luôn đặt trong tọa độ vùng miền, dân tộc và biến đổi triều đại." },
          { label: "Minh bạch nguồn & trích dẫn", text: "Không ngụy tạo học vị, không giả lập DOI/bảo trợ, ghi rõ nguồn bảo tàng/kho lưu trữ cho mọi hình ảnh và tư liệu." }
        ]
      },
      {
        num: "05",
        id: "about-sec-learning",
        title: "Triết lý Học tập • Learning Philosophy",
        titleZh: "05. 学习方法论",
        points: [
          { label: "Active Recall & Anki Zero-Pinyin", text: "Mặt trước flashcard chỉ hiện Hán tự trần để kích thích truy xuất trực tiếp âm – nghĩa." },
          { label: "Spaced Repetition & Bilingual Bridging", text: "Ghi nhớ dài hạn qua chiết tự bộ thủ Lục thư, âm Hán-Việt và cầu nối Anh–Việt." },
          { label: "Feynman Technique", text: "Hệ thống câu hỏi tự diễn đạt giúp người học tái cấu trúc khái niệm phức tạp bằng ngôn từ riêng." },
          { label: "Comparative Learning & Knowledge Mapping", text: "So sánh liên trường phái, liên vùng và đồ thị liên kết triết học – lịch sử – thương mại." }
        ]
      },
      {
        num: "06",
        id: "about-sec-dialogue",
        title: "Đối thoại Văn hóa Trung – Việt • Cultural Dialogue",
        titleZh: "06. 中越文明对话",
        summary:
          "Từ lớp từ vựng Hán-Việt, văn tự Chữ Nôm, giao thương gốm hoa lam Chu Đậu trên Con đường Tơ lụa Hàng hải thế kỷ XV đến liên kết chuỗi cung ứng RCEP và C/O Form E đương đại, dự án đặt văn hóa Việt Nam ở vị thế chủ thể đối thoại, tiếp biến sáng tạo và bình đẳng học thuật."
      },
      {
        num: "VII.",
        id: "about-sec-founder",
        title: "Tác giả & Bối cảnh Khởi nguồn • Founder's Background",
        titleZh: "创始人背景",
        summary:
          "CHINESE CULTURE EXPLORER – 中国文化探索 được Lê Hưng Thịnh (黎兴盛) — sinh viên ngành Kinh doanh Quốc tế tại Trường Đại học Thương mại (Hà Nội) — khởi dựng như cuốn sổ tay khảo cứu số hóa kết nối kinh tế khu vực với văn hiến Đông Á. Dự án hoạt động độc lập, không mạo nhận chức danh học thuật hay cơ quan bảo trợ."
      },
      {
        num: "08",
        id: "about-sec-ip",
        title: "Sở hữu Trí tuệ & Bản quyền • Intellectual Property",
        titleZh: "08. 知识产权与版权",
        summary:
          `Tất cả bài viết phân tích gốc, biên dịch, chú giải học thuật, đồ họa thông tin, sơ đồ khái niệm, bộ nhận diện thương hiệu và mã nguồn phần mềm gốc thuộc quyền tác giả của Lê Hưng Thịnh (${`Copyright © ${CURRENT_YEAR} Lê Hưng Thịnh. All Rights Reserved.`}), tách bạch rành mạch với tư liệu cổ đại thuộc phạm vi công cộng và tài nguyên cấp phép mở của bên thứ ba.`
      },
      {
        num: "09",
        id: "about-sec-contact",
        title: "Thông tin Dự án & Liên hệ • Contact and Project Information",
        titleZh: "09. 项目信息与官方联系",
        summary:
          "CHINESE CULTURE EXPLORER – 中国文化探索 vận hành như một nền tảng học thuật số độc lập. Mọi yêu cầu trao đổi học thuật, hiệu đính sử liệu hoặc báo cáo bản quyền – ghi nhận nguồn ảnh xin thực hiện thông qua Cổng Pháp lý & Báo cáo Vi phạm Sở hữu Trí tuệ chính thức trên nền tảng này."
      }
    ],

    // Sections 5, 6, 7: 8 Dedicated Legal & Policy Pages
    legalPages: [
      {
        id: "copyright",
        number: "01",
        titleVi: "Thông báo Bản quyền (Copyright Notice)",
        titleEn: "Copyright Notice",
        titleZh: "版权声明",
        lastUpdated: "2026-11-15",
        summary: `Copyright © ${CURRENT_YEAR} Lê Hưng Thịnh. All Rights Reserved. Tài liệu xác định phạm vi bảo hộ quyền tác giả đối với các cấu phần gốc của nền tảng CHINESE CULTURE EXPLORER – 中国文化探索.`,
        sections: [
          {
            heading: "1. Chủ sở hữu Bản quyền Chính thức",
            body: `Toàn bộ nội dung biên soạn gốc, cấu trúc kiến trúc thông tin và mã nguồn phần mềm của nền tảng CHINESE CULTURE EXPLORER – 中国文化探索 thuộc quyền sở hữu của nhà sáng lập: Lê Hưng Thịnh (Founder & Creator).`,
            bullets: [
              `Copyright © ${CURRENT_YEAR} Lê Hưng Thịnh. All Rights Reserved.`,
              "Project: CHINESE CULTURE EXPLORER – 中国文化探索",
              "Tagline: Explore Chinese Civilization. Understand Its Philosophy. Discover Its Culture."
            ]
          },
          {
            heading: "2. Các Hạng mục Gốc do Dự án Tạo lập",
            body: "Quyền tác giả được áp dụng trong phạm vi pháp luật Việt Nam về Sở hữu trí tuệ và các điều ước quốc tế liên quan đối với những thành phần sáng tạo độc lập sau:",
            bullets: [
              "Chuyên luận học thuật gốc, bài phân tích so sánh Trung – Việt và bình chú liên ngành.",
              "Hệ thống giải thích song ngữ Việt – Anh, chiết tự Lục thư, mẹo ghi nhớ và ví dụ ngữ cảnh Hán ngữ.",
              "Tất cả đồ họa khái niệm (infographics), sơ đồ lịch sử, bản đồ minh họa biên tập và minh họa SVG do nền tảng thiết kế.",
              "Bộ nhận diện thương hiệu (logo, ấn triện, wordmark), bố cục giao diện editorial và mã nguồn phần mềm của hệ thống."
            ]
          },
          {
            heading: "3. Phân định Công bình với Tư liệu Cổ điển & Bên thứ ba",
            body: "Nền tảng tuyệt đối KHÔNG tuyên bố sở hữu độc quyền đối với:",
            bullets: [
              "Sự kiện lịch sử, dữ liệu thiên văn 24 Tiết khí, hay văn bản kinh điển cổ đại đã thuộc Phạm vi Công cộng (Public Domain) như Luận Ngữ, Đạo Đức Kinh, Sử Ký, Hoàng Đế Nội Kinh.",
              "Hiện vật bảo tàng, thư tịch cổ hoặc tác phẩm ảnh nguyên bản thuộc sở hữu của bảo tàng, viện nghiên cứu hay tác giả bên thứ ba.",
              "Các ấn phẩm nguồn mở bên thứ ba tiếp tục chịu sự điều chỉnh của giấy phép gốc tương ứng (ví dụ CC0 hoặc CC BY-SA 4.0)."
            ]
          },
          {
            heading: "4. Công tác Chuẩn bị Đăng ký Bảo hộ Pháp lý",
            body: "Cấu trúc hồ sơ tác phẩm viết, chương trình máy tính và nhãn hiệu nhận diện của dự án được chuẩn hóa sẵn sàng cho thủ tục đăng ký bản quyền tác giả, bản quyền phần mềm và nhãn hiệu khi đủ điều kiện pháp lý. Nền tảng không tuyên bố trạng thái nhãn hiệu đã được cấp văn bằng bảo hộ (® / Registered Trademark) trước khi có quyết định cấp bằng chính thức của cơ quan có thẩm quyền."
          }
        ]
      },
      {
        id: "terms",
        number: "02",
        titleVi: "Điều khoản Sử dụng (Terms of Use)",
        titleEn: "Terms of Use",
        titleZh: "使用条款",
        lastUpdated: "2026-11-15",
        summary: "Quy định quyền truy cập, trích dẫn học thuật hợp lệ và các hành vi bị hạn chế khi sử dụng nền tảng CHINESE CULTURE EXPLORER.",
        sections: [
          {
            heading: "1. Mục đích Giáo dục & Nghiên cứu Phi thương mại",
            body: "Người học, giảng viên và nhà nghiên cứu được phép truy cập, đọc chuyên luận, sử dụng từ điển Zero-Pinyin, xuất bộ thẻ Anki (.CSV/.TSV) và lưu ghi chú cá nhân phục vụ tự học, giảng dạy và nghiên cứu học thuật."
          },
          {
            heading: "2. Quy tắc Trích dẫn Tài liệu Gốc của Nền tảng",
            body: "Khi trích dẫn đoạn phân tích hoặc đồ họa do dự án tạo ra cho bài nghiên cứu hay bài giảng, người dùng cần ghi rõ nguồn: Lê Hưng Thịnh – CHINESE CULTURE EXPLORER – 中国文化探索.",
            bullets: [
              "Không tự ý sao chép nguyên văn toàn bộ kho dữ liệu chuyên luận hoặc đồ họa để tái xuất bản thương mại khi chưa có văn bản đồng ý.",
              "Không gỡ bỏ thông báo bản quyền, chữ ký sáng lập hoặc chú dẫn nguồn bảo tàng đi kèm hình ảnh."
            ]
          },
          {
            heading: "3. Hành vi Không được Phép",
            bullets: [
              "Sử dụng công cụ thu thập tự động (scraping) gây quá tải máy chủ hoặc đóng gói bán lại nội dung dự án.",
              "Cắt ghép, xuyên tạc nội dung nhằm trình bày sai lệch nền tảng như cơ quan đại diện chính phủ hay tuyên bố tài trợ học thuật giả mạo."
            ]
          }
        ]
      },
      {
        id: "privacy",
        number: "03",
        titleVi: "Chính sách Bảo mật (Privacy Policy)",
        titleEn: "Privacy Policy",
        titleZh: "隐私政策",
        lastUpdated: "2026-11-15",
        summary: "Cam kết bảo vệ quyền riêng tư tuyệt đối cho cả người học lẫn nhà sáng lập theo kiến trúc lưu trữ cục bộ (Local-first).",
        sections: [
          {
            heading: "1. Kiến trúc Dữ liệu Cục bộ – Không Theo dõi Quảng cáo",
            body: "CHINESE CULTURE EXPLORER vận hành theo nguyên tắc ưu tiên quyền riêng tư tại thiết bị người dùng:",
            bullets: [
              "Lịch sử đọc bài, từ vựng Anki đã thu thập, kết quả trắc nghiệm Active Recall và Nhật ký học tập được lưu cục bộ trên trình duyệt (localStorage) và/hoặc cơ sở dữ liệu SQLite cục bộ khi chạy máy chủ nội bộ.",
              "Nền tảng không cài đặt cookie theo dõi quảng cáo bên thứ ba và không bán dữ liệu hành vi người học."
            ]
          },
          {
            heading: "2. Bảo vệ Thông tin Cá nhân Riêng tư",
            body: "Nền tảng chỉ hiển thị danh tính sáng lập công khai tối thiểu (Lê Hưng Thịnh – Founder & Creator) và không công bố địa chỉ cư trú, số điện thoại cá nhân, giấy tờ tùy thân hay thông tin riêng tư không được cung cấp chính thức."
          }
        ]
      },
      {
        id: "licensing",
        number: "04",
        titleVi: "Chính sách Cấp phép Nội dung (Content Licensing)",
        titleEn: "Content Licensing Policy",
        titleZh: "内容许可政策",
        lastUpdated: "2026-11-15",
        summary: "Phân loại rõ 4 tầng bản quyền nội dung giữa tài sản dự án, đồ họa biên tập, tư liệu mở bên thứ ba và di sản công cộng.",
        sections: [
          {
            heading: "1. Phân tầng Cấp phép 4 Lớp Minh bạch",
            bullets: [
              "Lớp A — Bài viết gốc, Chiết tự từ điển, Giao diện & Mã nguồn: Copyright © " + CURRENT_YEAR + " Lê Hưng Thịnh. All Rights Reserved.",
              "Lớp B — Đồ họa Khái niệm, Sơ đồ & Bản đồ Biên tập (Editorial SVG Plates): Copyright thuộc dự án / phát hành phục vụ giáo dục kèm yêu cầu ghi rõ nguồn sáng tạo; phần chú dẫn nguồn gốc đính kèm trên từng hình.",
              "Lớp C — Văn bản Kinh điển Cổ đại (Luận Ngữ, Tố Vấn, Sử Ký, Bình Ngô Đại Cáo...): Thuộc Phạm vi Công cộng (Public Domain); phần dịch chú tiếng Việt/Anh bổ sung thuộc bản quyền biên soạn của nền tảng.",
              "Lớp D — Tư liệu Bảo tàng & Kho Lưu trữ Mở Quốc tế (UNESCO, CText, UN Comtrade, WHO...): Tuân thủ điều khoản truy cập mở (Open Access) và ghi nhận đầy đủ tên tổ chức nắm giữ gốc."
            ]
          },
          {
            heading: "2. Minh bạch Công cụ Kỹ thuật Số & Trợ lý Tạo ảnh",
            body: "Các bản đồ biên tập và minh họa vector SVG của dự án được thiết kế, kiểm duyệt và hoàn thiện bằng quy trình lập trình đồ họa kết hợp biên tập nhân văn số của nền tảng, phân biệt rõ với ảnh chụp hiện vật lịch sử hoặc bản khắc gốc."
          }
        ]
      },
      {
        id: "image-credits",
        number: "05",
        titleVi: "Nguồn Tư liệu Hình ảnh & Bản quyền (Image Credits)",
        titleEn: "Image Credits and Sources",
        titleZh: "图像来源与版权说明",
        lastUpdated: "2026-11-15",
        summary: "Bảng kiểm kê toàn bộ hồ sơ xác thực hình ảnh biên tập và hiện vật bảo tàng theo chuẩn 8 trường: tác giả, tổ chức, URL gốc, chủ bản quyền, giấy phép, trạng thái xác minh, ghi nhận và phạm vi sử dụng.",
        showDynamicCreditsMatrix: true,
        sections: [
          {
            heading: "Nguyên tắc Ghi nhận Nguồn Hình ảnh của Dự án",
            body: "Mỗi hình ảnh hiển thị trên nền tảng đều gắn kèm nhãn phân biệt rõ: Hiện vật/Tác phẩm lịch sử, Phục dựng biên tập, Bản đồ lịch sử, hay Đồ họa khái niệm — tuyệt đối không cào dữ liệu ảnh có bản quyền từ báo chí hoặc bảo tàng thương mại trái phép."
          }
        ]
      },
      {
        id: "ip-reporting",
        number: "06",
        titleVi: "Báo cáo Vi phạm Sở hữu Trí tuệ (IP Infringement Reporting)",
        titleEn: "Intellectual Property Infringement Reporting",
        titleZh: "知识产权侵权反馈机制",
        lastUpdated: "2026-11-15",
        summary: "Quy trình tiếp nhận yêu cầu hiệu đính ghi nhận nguồn, điều chỉnh trích dẫn hoặc gỡ bỏ nội dung theo Luật Sở hữu Trí tuệ Việt Nam và thông lệ quốc tế.",
        sections: [
          {
            heading: "1. Cam kết Tôn trọng Bản quyền Bên thứ ba",
            body: "Nếu cá nhân hoặc tổ chức nhận thấy bất kỳ trích đoạn, hình ảnh minh họa hay chú dẫn nào trên nền tảng chưa ghi nhận đầy đủ tác giả gốc hoặc phát sinh tranh chấp quyền sử dụng, nền tảng cam kết xem xét thiện chí và xử lý kịp thời."
          },
          {
            heading: "2. Thành phần Hồ sơ Yêu cầu Hợp lệ",
            bullets: [
              "Thông tin định danh bên yêu cầu hoặc đại diện được ủy quyền hợp pháp của chủ thể quyền.",
              "Mô tả cụ thể đối tượng quyền tác giả hoặc quyền liên quan bị cho là xâm phạm.",
              "Đường dẫn chính xác (URL / Mã bài viết / Mã hình ảnh trên nền tảng) nơi nội dung đang hiển thị.",
              "Tài liệu hoặc cam đoan thiện chí chứng minh tư cách chủ sở hữu hợp pháp hoặc người được cấp phép."
            ]
          }
        ]
      },
      {
        id: "disclaimer",
        number: "07",
        titleVi: "Tuyên bố Miễn trừ Trách nhiệm (Disclaimer)",
        titleEn: "Academic and Educational Disclaimer",
        titleZh: "免责声明",
        lastUpdated: "2026-11-15",
        summary: "Làm rõ giới hạn học thuật của nội dung lịch sử, y học cổ truyền, thuật số cổ điển, thương mại quốc tế và tính độc lập thể chế của dự án.",
        sections: [
          {
            heading: "1. Tính Chất Tham khảo Học thuật Độc lập",
            body: "Toàn bộ chuyên luận và tài liệu trên nền tảng nhằm phục vụ nghiên cứu văn hóa, lịch sử, ngôn ngữ và kinh doanh học thuật, KHÔNG cấu thành khuyến nghị y khoa, tư vấn pháp lý, tư vấn đầu tư tài chính hay dịch vụ bói toán thương mại."
          },
          {
            heading: "2. Lưu ý với Đông y Dưỡng sinh & Thuật số Cổ điển",
            bullets: [
              "Thông tin về Hoàng Đế Nội Kinh và dưỡng sinh theo 24 Tiết khí được trình bày dưới góc độ lịch sử tư tưởng và văn hóa phòng bệnh — không thay thế chẩn đoán và phác đồ điều trị của bác sĩ chuyên khoa.",
              "Các chuyên đề Kinh Dịch, Bát Tự, Tử Vi Đẩu Số, Phong Thủy, Kỳ Môn Độn Giáp được khảo sát như hệ thống ký hiệu văn hóa và tư liệu lịch sử tri thức, tách biệt rõ với khoa học thực nghiệm."
            ]
          },
          {
            heading: "3. Lưu ý với Nghiệp vụ Ngoại thương, Hải quan & Mã HS",
            body: "Các phân tích về C/O Form E, RCEP, Incoterms và phân loại mã HS mang tính hệ thống hóa phương pháp học tập. Khi thông quan hàng hóa thực tế, doanh nghiệp và người khai hải quan phải đối chiếu biểu thuế và văn bản pháp quy hiện hành từ Tổng cục Hải quan và Bộ Công Thương."
          },
          {
            heading: "4. Tuyên bố Không Liên kết Thể chế Nhà nước",
            body: "Nền tảng là dự án tri thức độc lập của Lê Hưng Thịnh; không đại diện cho bất kỳ cơ quan nhà nước, viện hàn lâm, bảo tàng quốc gia hay trường đại học nào."
          }
        ]
      },
      {
        id: "founder",
        number: "08",
        titleVi: "Thông tin Chính thức về Người sáng lập (About the Founder)",
        titleEn: "About the Founder",
        titleZh: "关于创始人",
        lastUpdated: "2026-11-15",
        summary: "Hồ sơ định danh chính thức của Lê Hưng Thịnh — Founder & Creator của dự án CHINESE CULTURE EXPLORER – 中国文化探索.",
        sections: [
          {
            heading: "Thông tin Nhận diện Chính thức",
            bullets: [
              "Họ và tên (Founder & Creator): Lê Hưng Thịnh",
              "Vai trò: Người khởi tạo, thiết kế kiến trúc tri thức và xây dựng nền tảng CHINESE CULTURE EXPLORER – 中国文化探索",
              "Định hướng dự án: Xây dựng cầu nối nghiên cứu văn minh Trung Hoa, tư liệu gốc Hán văn và giao lưu lịch sử – kinh tế Việt – Trung."
            ]
          },
          {
            heading: "Chuẩn mực Minh bạch & Bảo vệ Quyền riêng tư",
            body: "Theo quy chuẩn xuất bản học thuật của dự án, hồ sơ sáng lập tuân thủ hai nguyên tắc chặt chẽ: (1) tuyệt đối không hư cấu học vị, danh hiệu chuyên môn hoặc chức danh công tác chưa được xác thực; (2) bảo vệ quyền riêng tư bằng cách không công bố địa chỉ cá nhân, giấy tờ tùy thân hay số điện thoại riêng trên không gian mạng công cộng."
          }
        ]
      }
    ]
  };
})();
