(function () {
  "use strict";
  window.CCE_V4_PERSONAL_CORE = {
    chinaPoliticsGovernance: {
      summaryVi: "Hệ thống quản trị hiện đại của Trung Quốc vận hành theo cơ chế thống nhất giữa đường lối chiến lược trung ương, lập pháp đại diện, hiệp thương chính trị và điều hành hành chính năm cấp, lấy các bản Quy hoạch 5 Năm làm trục điều phối kinh tế – xã hội.",
      summaryEn: "China's contemporary governance framework integrates central strategic direction, legislative oversight, political consultation, and five-tier administrative execution, anchored by sequential Five-Year Plans.",
      institutions: [
        {
          id: "inst-npc",
          titleVi: "Đại hội Đại biểu Nhân dân Toàn quốc (Nhân Đại – NPC)",
          titleEn: "National People's Congress (NPC)",
          zh: "全国人民代表大会",
          pinyin: "Quánguó Rénmín Dàibiǎo Dàhuì",
          roleVi: "Cơ quan quyền lực nhà nước tối cao theo Hiến pháp, thực hiện quyền lập pháp, phê chuẩn ngân sách, Quy hoạch 5 Năm và bầu các chức danh lãnh đạo nhà nước.",
          roleEn: "The highest organ of state power under the Constitution, exercising legislative authority, approving state budgets and Five-Year Plans, and electing top state officials.",
          examEconRelevanceVi: "Các luật về đầu tư nước ngoài, hải quan, dữ liệu và thương mại điện tử do Nhân Đại ban hành trực tiếp định hình khung pháp lý cho doanh nghiệp xuất nhập khẩu."
        },
        {
          id: "inst-cppcc",
          titleVi: "Hội nghị Hiệp thương Chính trị Nhân dân Trung Quốc (Chính Hiệp – CPPCC)",
          titleEn: "Chinese People's Political Consultative Conference (CPPCC)",
          zh: "中国人民政治协商会议",
          pinyin: "Zhōngguó Rénmín Zhèngzhì Xiéshāng Huìyì",
          roleVi: "Thiết chế hiệp thương chính trị và giám sát dân chủ, quy tụ đại diện các giới học thuật, doanh nghiệp, dân tộc và tôn giáo để đóng góp kiến nghị chính sách.",
          roleEn: "A political advisory and consultative body bringing together scholars, entrepreneurs, ethnic groups, and civic sectors to submit policy proposals and conduct consultative oversight.",
          examEconRelevanceVi: "Các đề xuất tại Chính Hiệp thường phản ánh sớm nhu cầu cải cách của khu vực tư nhân, công nghệ xanh, giáo dục đại học và chuỗi cung ứng."
        },
        {
          id: "inst-lianghui",
          titleVi: "Lưỡng Hội",
          titleEn: "The Two Sessions (Lianghui)",
          zh: "两会",
          pinyin: "Liǎnghuì",
          roleVi: "Kỳ họp thường niên diễn ra song song vào tháng 3 hằng năm giữa Nhân Đại Toàn quốc và Chính Hiệp Toàn quốc, nơi công bố Báo cáo Công tác Chính phủ và mục tiêu tăng trưởng.",
          roleEn: "The concurrent annual plenary sessions of the NPC and CPPCC held each March, where the Government Work Report and annual macroeconomic targets are unveiled.",
          examEconRelevanceVi: "Báo cáo Công tác Chính phủ tại Lưỡng Hội là văn kiện tham chiếu cốt lõi để theo dõi mục tiêu GDP, thâm hụt tài khóa, chính sách công nghiệp và mở cửa thương mại."
        },
        {
          id: "inst-state-council",
          titleVi: "Quốc Vụ Viện",
          titleEn: "State Council",
          zh: "国务院",
          pinyin: "Guówùyuàn",
          roleVi: "Cơ quan hành chính nhà nước tối cao, trực tiếp chỉ đạo các bộ, ủy ban chuyên ngành (như Ủy ban Cải cách và Phát triển Quốc gia, Bộ Thương mại, Tổng cục Hải quan) và chính quyền địa phương.",
          roleEn: "The chief administrative authority of the state, overseeing ministries and commissions such as the NDRC, MOFCOM, and General Administration of Customs, alongside local governments.",
          examEconRelevanceVi: "Quốc Vụ Viện ban hành các nghị định điều hành thuế quan, khu thí điểm thương mại tự do, quy chuẩn sản phẩm và biện pháp bình ổn vĩ mô."
        },
        {
          id: "inst-fyp",
          titleVi: "Quy hoạch 5 Năm",
          titleEn: "Five-Year Plan",
          zh: "五年规划",
          pinyin: "Wǔnián Guīhuà",
          roleVi: "Khung chiến lược trung hạn định hướng phân bổ nguồn lực công, chuyển dịch cơ cấu công nghiệp, đổi mới sáng tạo, hạ tầng giao thông và mục tiêu khí hậu.",
          roleEn: "A medium-term strategic blueprint guiding public resource allocation, industrial upgrading, technological innovation, transport infrastructure, and climate targets.",
          examEconRelevanceVi: "Đọc hiểu Quy hoạch 5 Năm giúp nhận diện ngành ưu tiên, danh mục hỗ trợ tín dụng xanh và xu hướng dịch chuyển sản xuất tại khu vực châu Á – Thái Bình Dương."
        },
        {
          id: "inst-five-tiers",
          titleVi: "Phân cấp Hành chính 5 Tầng",
          titleEn: "Five-Tier Administrative Hierarchy",
          zh: "五级行政区划",
          pinyin: "Wǔjí Xíngzhèng Qūhuà",
          roleVi: "Hệ thống quản lý lãnh thổ gồm năm cấp liên thông: Trung ương, Cấp tỉnh (tỉnh, khu tự trị, thành phố trực thuộc trung ương), Địa cấp thị, Cấp huyện và Cấp hương/trấn.",
          roleEn: "A five-level territorial administration structure linking Central, Provincial (provinces, autonomous regions, municipalities), Prefecture-level cities, Counties/Districts, and Townships/Towns.",
          examEconRelevanceVi: "Trong thương mại và du học, cần phân biệt rõ thẩm quyền cấp tỉnh và địa cấp thị vì chính sách ưu đãi khu công nghiệp và học bổng địa phương phân bổ theo từng cấp."
        }
      ],
      glossaryTrilingual: [
        { id: "pol-01", zh: "政府工作报告", pinyin: "Zhèngfǔ Gōngzuò Bàogào", en: "Government Work Report", vi: "Báo cáo Công tác Chính phủ" },
        { id: "pol-02", zh: "国家发展和改革委员会", pinyin: "Guójiā Fāzhǎn hé Gǎigé Wěiyuánhuì", en: "National Development and Reform Commission (NDRC)", vi: "Ủy ban Cải cách và Phát triển Quốc gia" },
        { id: "pol-03", zh: "商务部", pinyin: "Shāngwùbù", en: "Ministry of Commerce (MOFCOM)", vi: "Bộ Thương mại" },
        { id: "pol-04", zh: "海关总署", pinyin: "Hǎiguān Zǒngshǔ", en: "General Administration of Customs (GACC)", vi: "Tổng cục Hải quan" },
        { id: "pol-05", zh: "直辖市", pinyin: "zhíxiáshì", en: "Directly-Administered Municipality", vi: "Thành phố trực thuộc Trung ương" },
        { id: "pol-06", zh: "自治区", pinyin: "zìzhìqū", en: "Autonomous Region", vi: "Khu tự trị" },
        { id: "pol-07", zh: "特别行政区", pinyin: "tèbié xíngzhèngqū", en: "Special Administrative Region (SAR)", vi: "Đặc khu hành chính" },
        { id: "pol-08", zh: "地级市", pinyin: "dìjíshì", en: "Prefecture-Level City", vi: "Địa cấp thị" },
        { id: "pol-09", zh: "改革开放", pinyin: "Gǎigé Kāifàng", en: "Reform and Opening-Up", vi: "Cải cách Mở cửa" },
        { id: "pol-10", zh: "高质量发展", pinyin: "gāozhìliàng fāzhǎn", en: "High-Quality Development", vi: "Phát triển chất lượng cao" },
        { id: "pol-11", zh: "宏观调控", pinyin: "hóngguān tiáokòng", en: "Macroeconomic Regulation", vi: "Điều tiết kinh tế vĩ mô" },
        { id: "pol-12", zh: "自由贸易试验区", pinyin: "zìyóu màoyì shìyànqū", en: "Pilot Free Trade Zone", vi: "Khu thí điểm thương mại tự do" },
        { id: "pol-13", zh: "营商环境", pinyin: "yíngshāng huánjìng", en: "Business Environment", vi: "Môi trường kinh doanh" },
        { id: "pol-14", zh: "依法治国", pinyin: "yīfǎ zhìguó", en: "Law-Based Governance", vi: "Quản trị nhà nước theo pháp luật" },
        { id: "pol-15", zh: "乡村振兴", pinyin: "xiāngcūn zhènxīng", en: "Rural Revitalization", vi: "Chấn hưng nông thôn" },
        { id: "pol-16", zh: "碳达峰与碳中和", pinyin: "tàn dáfēng yǔ tàn zhōnghé", en: "Carbon Peaking and Carbon Neutrality", vi: "Đạt đỉnh phát thải và Trung hòa các-bon" },
        { id: "pol-17", zh: "区域协调发展", pinyin: "qūyù xiétiáo fāzhǎn", en: "Coordinated Regional Development", vi: "Phát triển điều phối liên vùng" },
        { id: "pol-18", zh: "制度型开放", pinyin: "zhìdùxíng kāifàng", en: "Institutional Opening-Up", vi: "Mở cửa mang tính thể chế" }
      ]
    },
    macroEconomics2026: {
      summaryVi: "Giai đoạn chuyển giao giữa Quy hoạch 5 Năm lần thứ 14 và lần thứ 15 ghi nhận trọng tâm chuyển dịch từ tăng trưởng dựa vào bất động sản và thâm dụng lao động sang đổi mới công nghệ, sản xuất xanh, tiêu dùng nội địa và nâng chuẩn kết nối khu vực.",
      summaryEn: "Transitioning between the 14th and 15th Five-Year Plans, China's macroeconomic trajectory emphasizes technological upgrading, green manufacturing, domestic demand expansion, and higher-standard regional integration.",
      pillars: [
        {
          id: "econ-nqpf",
          titleVi: "Lực lượng Sản xuất Chất lượng Mới",
          titleEn: "New Quality Productive Forces",
          zh: "新质生产力",
          pinyin: "Xīnzhì Shēngchǎnlì",
          analysisVi: "Khái niệm nhấn mạnh vai trò của đột phá công nghệ lõi, phân bổ lại yếu tố sản xuất và chuyển đổi số – xanh nhằm nâng năng suất nhân tố tổng hợp thay vì mở rộng quy mô thuần túy.",
          analysisEn: "A policy paradigm centering on core technological breakthroughs, optimized factor allocation, and digital-green industrial transformation to raise total factor productivity beyond scale-driven growth.",
          tradeImplicationEn: "Shifts Chinese exports toward higher-value industrial machinery, automation equipment, and specialized components while intensifying competition in mid-to-high tech tiers.",
          tradeImplicationVi: "Đẩy cơ cấu xuất khẩu của Trung Quốc sang máy móc tự động hóa và linh kiện công nghệ cao, đồng thời gia tăng cạnh tranh ở phân khúc trung – cao cấp."
        },
        {
          id: "econ-dual-circ",
          titleVi: "Tuần hoàn Kép",
          titleEn: "Dual Circulation Strategy",
          zh: "双循环",
          pinyin: "Shuāngxúnhuán",
          analysisVi: "Mô hình lấy thị trường nội địa rộng lớn làm trụ cột chính (nội tuần hoàn), đồng thời duy trì liên kết thương mại – đầu tư quốc tế (ngoại tuần hoàn) để tăng sức chống chịu trước biến động bên ngoài.",
          analysisEn: "A structural framework anchoring growth in the domestic market (internal circulation) while keeping domestic and international trade flows mutually reinforcing (external circulation) to buffer external shocks.",
          tradeImplicationEn: "Creates sustained import demand for quality agricultural goods, consumer brands, and intermediate inputs tailored to China's evolving urban consumption.",
          tradeImplicationVi: "Tạo dư địa nhập khẩu ổn định cho nông sản chuẩn hóa, hàng tiêu dùng chất lượng và nguyên liệu đầu vào phục vụ tiêu dùng đô thị Trung Quốc."
        },
        {
          id: "econ-new-three",
          titleVi: "Tam Tân Dạng (Xe điện, Pin Lithium, Quang điện)",
          titleEn: "The 'New Three' Green Export Pillars",
          zh: "新三样",
          pinyin: "Xīn Sānyàng",
          analysisVi: "Ba nhóm sản phẩm công nghệ xanh gồm xe năng lượng mới (NEV), pin lithium-ion và mô-đun quang điện đã thay thế nhóm dệt may – đồ gia dụng – nội thất cũ để trở thành động lực xuất khẩu mới.",
          analysisEn: "Electric vehicles, lithium-ion batteries, and photovoltaic products have superseded traditional apparel, furniture, and appliances as headline drivers of China's export upgrading.",
          tradeImplicationEn: "Reshapes global maritime logistics with rising Ro-Ro vessel demand, hazardous-goods battery compliance, and heightened tariff and carbon-border scrutiny in Europe and North America.",
          tradeImplicationVi: "Định hình lại logistics biển toàn cầu với nhu cầu tàu Ro-Ro, quy chuẩn vận tải hàng nguy hiểm cho pin lithium và các rào cản thuế quan, cơ chế các-bon tại Âu – Mỹ."
        },
        {
          id: "econ-supply-resilience",
          titleVi: "Tự chủ và Đàn hồi Chuỗi cung ứng",
          titleEn: "Supply Chain Autonomy and Resilience",
          zh: "产业链供应链自主可控",
          pinyin: "Chǎnyèliàn Gōngyìngliàn Zìzhǔ Kěkòng",
          analysisVi: "Chiến lược tập trung khắc phục các khâu nút thắt trong bán dẫn, vật liệu mới, phần mềm công nghiệp và thiết bị chính xác, song song với việc doanh nghiệp Trung Quốc mở rộng mạng lưới nhà máy tại Đông Nam Á và Mỹ Latinh.",
          analysisEn: "Focuses on resolving bottlenecks in semiconductors, advanced materials, industrial software, and precision tooling, while Chinese manufacturers diversify production footprints into Southeast Asia and Latin America.",
          tradeImplicationEn: "Accelerates regional intermediate-goods trade across ASEAN and elevates strict Rules of Origin (ROO) verification in customs compliance.",
          tradeImplicationVi: "Thúc đẩy mạnh dòng thương mại hàng trung gian vào ASEAN, kéo theo yêu cầu kiểm tra Quy tắc Xuất xứ (C/O) ngày càng chặt chẽ trong nghiệp vụ hải quan."
        },
        {
          id: "econ-vn-rcep",
          titleVi: "Hợp tác Kinh tế Trung–Việt và Khung RCEP",
          titleEn: "China–Vietnam Economic Cooperation and RCEP",
          zh: "中越经贸合作与RCEP",
          pinyin: "Zhōng-Yuè Jīngmào Hézuò yǔ RCEP",
          analysisVi: "Hiệp định Đối tác Kinh tế Toàn diện Khu vực (RCEP) cùng các hành lang đường sắt, cửa khẩu thông minh tạo khung hài hòa hóa quy tắc xuất xứ cộng gộp và thuận lợi hóa thông quan giữa hai nền kinh tế láng giềng.",
          analysisEn: "The Regional Comprehensive Economic Partnership (RCEP), paired with cross-border rail connectivity and smart border-gate initiatives, harmonizes regional cumulation rules and customs facilitation between both neighbors.",
          tradeImplicationEn: "Enables firms operating in Vietnam to combine regional inputs under unified RCEP origin rules while demanding higher traceability and sanitary compliance for formal exports to China.",
          tradeImplicationVi: "Giúp doanh nghiệp tại Việt Nam tận dụng quy tắc cộng gộp xuất xứ RCEP, đồng thời đòi hỏi chuẩn hóa truy xuất nguồn gốc và kiểm dịch cho hàng xuất khẩu chính ngạch sang Trung Quốc."
        }
      ]
    },
    vietnamPerspectiveOnChina: [
      {
        id: "vn-01",
        titleVi: "Tự chủ Tiếp biến Văn hiến, Không Đồng hóa",
        titleEn: "Autonomous Cultural Adaptation Without Assimilation",
        analysisVi: "Lịch sử Việt Nam cho thấy quá trình tiếp nhận có chọn lọc chữ Hán, thể chế khoa cử và triết học Đông Á luôn song hành với bản địa hóa sâu sắc qua chữ Nôm, tín ngưỡng bản địa, Luật Hồng Đức và ý thức độc lập chủ quyền.",
        analysisEn: "Vietnamese history demonstrates selective engagement with Classical Chinese, civil examinations, and East Asian philosophy alongside deep indigenization through Chu Nom script, native beliefs, the Hong Duc Code, and sovereign identity.",
        takeawayVi: "Hiểu rõ ranh giới giữa điểm tương đồng vùng văn hóa và bản sắc độc lập giúp người học giao tiếp tự tin, tránh cả định kiến cực đoan lẫn sao chép máy móc.",
        takeawayEn: "Recognizing both shared regional heritage and distinct national identity fosters confident cross-cultural engagement free from bias or uncritical imitation."
      },
      {
        id: "vn-02",
        titleVi: "Chuỗi cung ứng và Bài toán Nâng Giá trị Nội địa",
        titleEn: "Supply Chains and Domestic Value-Added Upgrading",
        analysisVi: "Trung Quốc là nguồn cung cấp nguyên phụ liệu, máy móc và linh kiện lớn cho nhiều ngành sản xuất tại Việt Nam; thách thức dài hạn là chuyển từ gia công lắp ráp thuần túy sang làm chủ công nghiệp hỗ trợ và thiết kế.",
        analysisEn: "China functions as a primary supplier of raw materials, machinery, and components for Vietnamese manufacturing; the long-term strategic challenge is moving from assembly toward supporting industries and higher domestic value-added.",
        takeawayVi: "Nhân sự xuất nhập khẩu và quản trị chuỗi cung ứng cần nắm vững cả nguồn cung Trung Quốc lẫn tiêu chuẩn xuất xứ của thị trường EU và Hoa Kỳ.",
        takeawayEn: "Trade and supply-chain professionals must master both Chinese upstream sourcing and the origin compliance standards of EU and US destination markets."
      },
      {
        id: "vn-03",
        titleVi: "Giao thương Biên giới và Chuyển dịch Nông sản Chính ngạch",
        titleEn: "Border Trade and Transition to Formal Agricultural Exports",
        analysisVi: "Thị trường Trung Quốc ngày càng siết chặt đăng ký mã số vùng trồng, cơ sở đóng gói (theo Lệnh 248 và 249 của Tổng cục Hải quan Trung Quốc) và truy xuất nguồn gốc, khiến phương thức tiểu ngạch dần nhường chỗ cho chính ngạch.",
        analysisEn: "China's tightening of orchard registration, packing-facility licensing (under GACC Decrees 248 and 249), and traceability requirements has accelerated the shift from informal border trade to formal export channels.",
        takeawayVi: "Chuyển sang chính ngạch bằng hợp đồng chuẩn, kiểm dịch minh bạch và logistics lạnh là điều kiện sống còn để nông sản Việt giữ thị phần bền vững.",
        takeawayEn: "Transitioning to formal contracts, transparent phytosanitary compliance, and cold-chain logistics is essential for sustainable Vietnamese agricultural market share."
      },
      {
        id: "vn-04",
        titleVi: "Du lịch Tự túc và Thích nghi Khẩu vị Việt",
        titleEn: "Independent Travel and Palate Adaptation",
        analysisVi: "Hệ sinh thái thanh toán không tiền mặt, đường sắt cao tốc và đặt vé bảo tàng qua hộ chiếu mang lại sự thuận tiện lớn, trong khi ẩm thực nhiều vùng Trung Quốc thiên dầu mỡ hoặc vị tê cay cần cách gọi món linh hoạt.",
        analysisEn: "Cashless ecosystems, high-speed rail, and passport-linked museum ticketing make independent travel highly efficient, while regional cuisines heavier in oil or numbing spice benefit from informed ordering habits.",
        takeawayVi: "Chuẩn bị sẵn ứng dụng thanh toán, lộ trình tàu cao tốc và từ vựng điều chỉnh gia vị giúp trải nghiệm thực địa chủ động và thoải mái hơn.",
        takeawayEn: "Preparing mobile payment apps, rail bookings, and basic seasoning-adjustment phrases ensures smoother, self-directed field travel."
      },
      {
        id: "vn-05",
        titleVi: "Học thuật Đông y và Giao thoa Thảo mộc Bản địa",
        titleEn: "Classical Medical Scholarship and Native Herbal Traditions",
        analysisVi: "Y học cổ truyền Việt Nam tiếp thu hệ thống lý luận tạng tượng – kinh lạc từ kinh điển phương Bắc nhưng phát triển nhánh Nam dược độc đáo gắn với khí hậu nhiệt đới và dược liệu bản địa qua di sản Tuệ Tĩnh và Hải Thượng Lãn Ông.",
        analysisEn: "Vietnamese traditional medicine absorbed classical organ-meridian theory while cultivating a distinct Southern Herbalism (Nam duoc) adapted to tropical ecology, exemplified by Tue Tinh and Hai Thuong Lan Ong.",
        takeawayVi: "Đọc tài liệu Đông y Trung Quốc dưới lăng kính đối chiếu sử liệu giúp mở rộng tri thức văn hóa mà vẫn trân trọng hệ sinh thái dược liệu Việt Nam.",
        takeawayEn: "Studying classical Chinese medical texts comparatively enriches cultural literacy while honoring Vietnam's distinct botanical heritage."
      },
      {
        id: "vn-06",
        titleVi: "Tư thế Đối tác Bình đẳng trong Doanh nghiệp Đa quốc gia",
        titleEn: "Equal-Partner Stance in Multinational Enterprises",
        analysisVi: "Trong các tập đoàn châu Âu, châu Mỹ hoặc liên doanh có chuỗi cung ứng đặt tại Trung Quốc và Việt Nam, năng lực song ngữ Anh – Trung kết hợp am hiểu luật thương mại quốc tế tạo nên lợi thế điều phối chiến lược.",
        analysisEn: "Within European, American, or regional multinationals spanning Chinese and Vietnamese supply networks, combining English and Chinese fluency with international trade law creates strategic coordination leverage.",
        takeawayVi: "Giữ tác phong chuyên nghiệp, dựa trên dữ liệu, hợp đồng và tiêu chuẩn quốc tế giúp người làm nghề đàm phán ngang hàng và hiệu quả.",
        takeawayEn: "Maintaining a data-driven, contract-grounded, standards-based approach enables equitable and effective cross-border negotiation."
      }
    ],
    hskClassicsMastery: {
      journeyToTheWest: {
        overviewVi: "Tây Du Ký (Ngô Thừa Ân, đời Minh) tái hiện hành trình thỉnh kinh của thầy trò Đường Tăng dựa trên sử tích Huyền Trang đời Đường, kết hợp trí tưởng tượng thần thoại với ẩn dụ sâu sắc về tu tâm và quản trị đội ngũ.",
        overviewEn: "Journey to the West (attributed to Wu Cheng'en, Ming dynasty) transforms Tang monk Xuanzang's historical pilgrimage into a mythic allegory of self-cultivation, perseverance, and team governance.",
        threeTeachingsSynthesisVi: "Tác phẩm phản ánh tinh thần Tam giáo đồng nguyên thời Minh: mục tiêu giải thoát và nhân quả của Phật giáo, thuật luyện đan và hệ thống thiên đình của Đạo giáo, cùng kỷ cương luân lý sư – đồ của Nho giáo.",
        threeTeachingsSynthesisEn: "The novel embodies Ming-era syncretism of the Three Teachings: Buddhist karma and liberation, Daoist internal alchemy and celestial bureaucracy, and Confucian master-disciple ethics.",
        idioms12: [
          { id: "jttw-01", hanzi: "火眼金睛", pinyin: "huǒyǎn jīnjīng", en: "sharp-eyed discernment; ability to see through deception", vi: "Mắt lửa ngươi vàng; nhãn lực tinh tường nhìn thấu giả dối", hskLevel: "HSK 6", exampleZh: "优秀的审计人员需要具备火眼金睛，才能发现报表中的异常。", exampleEn: "Skilled auditors need keen discernment to spot anomalies in financial statements." },
          { id: "jttw-02", hanzi: "七十二变", pinyin: "qīshí'èr biàn", en: "seventy-two transformations; extraordinary versatility", vi: "Bảy mươi hai phép biến hóa; khả năng ứng biến linh hoạt", hskLevel: "HSK 5", exampleZh: "面对多变的国际市场，企业必须练就七十二变的适应能力。", exampleEn: "Facing volatile global markets, enterprises must develop versatile adaptability." },
          { id: "jttw-03", hanzi: "大闹天宫", pinyin: "dànào Tiāngōng", en: "wreaking havoc in Heaven; bold defiance of rigid authority", vi: "Đại náo Thiên cung; hành động phá vỡ trật tự cũ đầy táo bạo", hskLevel: "HSK 5", exampleZh: "孙悟空大闹天宫的情节体现了反抗束缚的艺术精神。", exampleEn: "Sun Wukong's rebellion in Heaven expresses an artistic spirit of defying rigid constraints." },
          { id: "jttw-04", hanzi: "唐僧肉", pinyin: "Tángsēng ròu", en: "coveted prize sought by everyone", vi: "Thịt Đường Tăng; mục tiêu béo bở ai cũng muốn tranh giành", hskLevel: "HSK 5", exampleZh: "这个稀缺的优质港口项目成了各大物流集团眼中的唐僧肉。", exampleEn: "This scarce, high-value port project became a coveted prize among major logistics groups." },
          { id: "jttw-05", hanzi: "紧箍咒", pinyin: "jǐngūzhòu", en: "tightening-headband spell; binding constraint or strict oversight", vi: "Vòng kim cô / chú khẩn cô; quy chế ràng buộc chặt chẽ", hskLevel: "HSK 6", exampleZh: "严格的环境法规就像一道紧箍咒，促使工厂加快绿色转型。", exampleEn: "Strict environmental regulations act like a binding constraint pushing factories toward green transition." },
          { id: "jttw-06", hanzi: "九九八十一难", pinyin: "jiǔjiǔ bāshíyī nàn", en: "eighty-one tribulations; long series of arduous tests", vi: "Tám mươi mốt kiếp nạn; chuỗi thử thách gian nan trước thành công", hskLevel: "HSK 6", exampleZh: "一项核心技术的研发往往要经历九九八十一难才能成熟。", exampleEn: "Developing a core technology often requires enduring countless setbacks before maturing." },
          { id: "jttw-07", hanzi: "功德圆满", pinyin: "gōngdé yuánmǎn", en: "mission accomplished with full merit", vi: "Công đức viên mãn; hoàn thành trọn vẹn sứ mệnh", hskLevel: "HSK 6", exampleZh: "经过三年筹备，中越联合文化展览终于功德圆满。", exampleEn: "After three years of preparation, the joint Sino-Vietnamese cultural exhibition concluded with complete success." },
          { id: "jttw-08", hanzi: "半途而废", pinyin: "bàntú'érfèi", en: "to give up halfway", vi: "Bỏ cuộc giữa chừng", hskLevel: "HSK 4", exampleZh: "学习汉语贵在坚持，绝不能遇到难点就半途而废。", exampleEn: "Consistency is vital in learning Chinese; one must never give up halfway at tough points." },
          { id: "jttw-09", hanzi: "原形毕露", pinyin: "yuánxíng bìlù", en: "true colors completely exposed", vi: "Hiện nguyên hình; lộ rõ bản chất thật", hskLevel: "HSK 6", exampleZh: "在海关严格查验下，虚假申报的货物很快原形毕露。", exampleEn: "Under strict customs inspection, the falsely declared cargo was quickly exposed." },
          { id: "jttw-10", hanzi: "神通广大", pinyin: "shéntōng guǎngdà", en: "possessing vast resourcefulness or capability", vi: "Thần thông quảng đại; năng lực và phương pháp sâu rộng", hskLevel: "HSK 6", exampleZh: "虽然他经验丰富、神通广大，但仍坚持按规章办事。", exampleEn: "Although highly resourceful and experienced, he still adheres strictly to formal procedures." },
          { id: "jttw-11", hanzi: "降妖伏魔", pinyin: "xiángyāo fúmó", en: "subduing demons; overcoming formidable obstacles", vi: "Hàng yêu phục ma; chế ngự hiểm họa và trở ngại lớn", hskLevel: "HSK 7-9", exampleZh: "取经路上降妖伏魔的故事常被用来比喻团队协同攻坚。", exampleEn: "Stories of subduing demons on the pilgrimage are often used as metaphors for collaborative problem-solving." },
          { id: "jttw-12", hanzi: "心猿意马", pinyin: "xīnyuán yìmǎ", en: "restless and distracted mind (monkey mind, galloping horse)", vi: "Tâm viên ý mã; tâm trí xao động, khó tập trung", hskLevel: "HSK 7-9", exampleZh: "写学术论文时切忌心猿意马，应当沉心查阅一手文献。", exampleEn: "When writing an academic paper, avoid a distracted mind and immerse yourself in primary sources." }
        ]
      },
      dreamOfRedChamber: {
        overviewVi: "Hồng Lâu Mộng (Tào Tuyết Cần, đời Thanh) là đỉnh cao tiểu thuyết cổ điển Trung Hoa, khắc họa sự hưng suy của đại gia tộc họ Giả cùng thế giới mỹ học tinh tế về thi ca, ẩm thực, y học, vườn cảnh và lễ giáo phong kiến.",
        overviewEn: "Dream of the Red Chamber (Cao Xueqin, Qing dynasty) represents the pinnacle of classical Chinese fiction, chronicling the rise and decline of the aristocratic Jia clan alongside refined aesthetics of poetry, cuisine, medicine, gardens, and ritual order.",
        fourClansArchitectureVi: "Bốn đại gia tộc Giả, Sử, Vương, Tiết liên kết bằng hôn nhân và quyền lực, tạo nên mạng lưới kinh tế – chính trị phức tạp phản chiếu cấu trúc xã hội quý tộc thế kỷ XVIII, với Đại Quan Viên là không gian biểu tượng vừa tráng lệ vừa mong manh.",
        fourClansArchitectureEn: "The four intermarried clans—Jia, Shi, Wang, and Xue—form an intricate socioeconomic network mirroring eighteenth-century elite society, with Grand View Garden standing as a luminous yet fragile aesthetic sanctuary.",
        idioms12: [
          { id: "dorc-01", hanzi: "刘姥姥进大观园", pinyin: "Liú Lǎolao jìn Dàguānyuán", en: "Granny Liu entering Grand View Garden; marveling at an unfamiliar splendid world", vi: "Lưu Lão Lão vào Đại Quan Viên; ngỡ ngàng trước thế giới mới lạ lộng lẫy", hskLevel: "HSK 6", exampleZh: "第一次走进自动化集装箱码头，我感觉自己像刘姥姥进大观园一样。", exampleEn: "Walking into an automated container terminal for the first time, I felt like Granny Liu entering Grand View Garden." },
          { id: "dorc-02", hanzi: "木石前盟", pinyin: "mùshí qiánméng", en: "predestined bond of wood and stone; spiritual affinity", vi: "Mộc thạch tiền minh; mối duyên tri kỷ sâu nặng về tinh thần", hskLevel: "HSK 7-9", exampleZh: "宝玉与黛玉的木石前盟强调的是精神共鸣而非世俗利益。", exampleEn: "The wood-and-stone bond between Baoyu and Daiyu emphasizes spiritual resonance over worldly interest." },
          { id: "dorc-03", hanzi: "金玉良缘", pinyin: "jīnyù liángyuán", en: "golden-and-jade match; socially auspicious union", vi: "Kim ngọc lương duyên; cuộc hôn nhân môn đăng hộ đối", hskLevel: "HSK 6", exampleZh: "在传统家族观念中，金玉良缘往往寄托着联姻兴族的期望。", exampleEn: "In traditional clan thinking, a golden-and-jade match often embodied hopes of strengthening family alliances." },
          { id: "dorc-04", hanzi: "乐极生悲", pinyin: "lèjí shēngbēi", en: "extreme joy begets sorrow; hubris preceding decline", vi: "Lạc cực sinh bi; vui quá hóa buồn, thịnh cực tất suy", hskLevel: "HSK 5", exampleZh: "企业在高速扩张期更要严控现金流，以防乐极生悲。", exampleEn: "During rapid expansion, firms must control cash flow rigorously lest euphoria turn into crisis." },
          { id: "dorc-05", hanzi: "人情世故", pinyin: "rénqíng shìgù", en: "social graces and worldly wisdom", vi: "Nhân tình thế cố; sự am hiểu cách đối nhân xử thế", hskLevel: "HSK 6", exampleZh: "读懂《红楼梦》中的人情世故，有助于理解东亚职场中的委婉表达。", exampleEn: "Understanding the social nuances in Dream of the Red Chamber helps decode indirect communication in East Asian workplaces." },
          { id: "dorc-06", hanzi: "树倒猢狲散", pinyin: "shù dǎo húsūn sàn", en: "when the tree falls, the monkeys scatter; opportunists fleeing decline", vi: "Cây đổ bầy khỉ tan; thế lực suy tàn thì kẻ cơ hội bỏ đi", hskLevel: "HSK 7-9", exampleZh: "缺乏核心竞争力的联盟一旦失去补贴，往往会树倒猢狲散。", exampleEn: "An alliance lacking core competitiveness tends to scatter as soon as subsidies disappear." },
          { id: "dorc-07", hanzi: "借花献佛", pinyin: "jièhuā xiànfó", en: "borrowing flowers to offer to Buddha; using another's gift to earn goodwill", vi: "Mượn hoa hiến Phật; dùng của người khác để làm đẹp lòng ai đó", hskLevel: "HSK 6", exampleZh: "我今天借花献佛，把朋友从杭州带来的龙井茶与大家分享。", exampleEn: "I am borrowing a friend's generosity today to share this Hangzhou Longjing tea with everyone." },
          { id: "dorc-08", hanzi: "坐山观虎斗", pinyin: "zuòshān guān hǔdòu", en: "sitting on the mountain watching tigers fight; profiting from rivals' conflict", vi: "Tọa sơn quan hổ đấu; đứng ngoài xem hai bên tranh đấu", hskLevel: "HSK 6", exampleZh: "面对竞争对手的价格战，稳健的品牌选择坐山观虎斗并专注研发。", exampleEn: "Facing rivals' price wars, steady brands stay on the sidelines and focus on research and development." },
          { id: "dorc-09", hanzi: "盛极必衰", pinyin: "shèngjí bìshuāi", en: "prosperity at its zenith inevitably declines", vi: "Thịnh cực tất suy; đạt đến đỉnh cao dễ sinh suy thoái nếu thiếu cải cách", hskLevel: "HSK 7-9", exampleZh: "贾府的命运印证了缺乏内部革新便会盛极必衰的历史规律。", exampleEn: "The fate of the Jia estate illustrates how prosperity declines without internal renewal." },
          { id: "dorc-10", hanzi: "多愁善感", pinyin: "duōchóu shàngǎn", en: "melancholic and deeply sensitive", vi: "Đa sầu đa cảm; nhạy cảm và giàu xúc cảm", hskLevel: "HSK 5", exampleZh: "林黛玉虽然多愁善感，但在作诗论艺时却极具锋芒与才情。", exampleEn: "Though deeply sensitive, Lin Daiyu displays sharp intellect and poetic brilliance in literary debates." },
          { id: "dorc-11", hanzi: "纸包不住火", pinyin: "zhǐ bāo bù zhù huǒ", en: "paper cannot wrap fire; truth cannot be concealed forever", vi: "Giấy không gói được lửa; sự thật khó lòng che giấu mãi", hskLevel: "HSK 5", exampleZh: "质量隐患一旦出现应当及时召回，因为纸包不住火。", exampleEn: "Once a quality defect emerges, prompt recall is essential, as the truth cannot remain hidden." },
          { id: "dorc-12", hanzi: "机关算尽", pinyin: "jīguān suànjìn", en: "exhausting every scheme only to backfire", vi: "Cơ quan toán tận; tính toán quá mức rốt cuộc tự hại mình", hskLevel: "HSK 7-9", exampleZh: "王熙凤的悲剧警示后人，过度追逐权谋终究可能机关算尽。", exampleEn: "Wang Xifeng's tragedy warns that excessive scheming can ultimately defeat its own architect." }
        ]
      }
    },
    hskCulturalBriefs60: [
      {
        id: "hsk-geo-01", level: "HSK 4", topic: "geography",
        titleEn: "Three-Step Topography of China", titleVi: "Địa hình ba bậc thang của Trung Quốc",
        passageZh: "中国地势西高东低，大致呈三级阶梯状分布。青藏高原位于第一级阶梯，东部平原位于第三级阶梯，因此许多大江大河自西向东流入海洋。",
        passagePinyin: "Zhōngguó dìshì xīgāo dōngdī, dàzhì chéng sānjí jiētīzhuàng fēnbù. Qīngzàng Gāoyuán wèiyú dì-yī jí jiētī, dōngbù píngyuán wèiyú dì-sān jí jiētī, yīncǐ xǔduō dàjiāng dàhé zìxī xiàngdōng liúrù hǎiyáng.",
        summaryEn: "China's terrain descends from west to east in three major topographic steps, driving most major rivers eastward to the sea.",
        summaryVi: "Địa hình Trung Quốc cao ở tây, thấp ở đông theo ba bậc thang, khiến phần lớn sông lớn chảy theo hướng tây – đông ra biển.",
        keyTermZh: "三级阶梯", keyTermEn: "three-step topography",
        quizPromptEn: "Why do most major Chinese rivers flow eastward?", quizPromptZh: "中国许多大河为什么自西向东流？",
        optionsZh: ["地势西高东低", "东部降水较少", "西部都是平原", "海洋都在西部"], correctIdx: 0
      },
      {
        id: "hsk-geo-02", level: "HSK 4", topic: "geography",
        titleEn: "The Qinling–Huaihe Line", titleVi: "Ranh giới địa lý Tần Lĩnh – Hoài Hà",
        passageZh: "秦岭和淮河一线是中国南北方的重要地理分界线。这条线以北冬季较冷，传统主食以面食为主；以南气候湿润，水稻种植历史悠久。",
        passagePinyin: "Qínlǐng hé Huáihé yīxiàn shì Zhōngguó nánběifāng de zhòngyào dìlǐ fēnjièxiàn. Zhè tiáo xiàn yǐběi dōngjì jiàolěng, chuántǒng zhǔshí yǐ miànshí wéizhǔ; yǐnán qìhòu shīrùn, shuǐdào zhòngzhí lìshǐ yōujiǔ.",
        summaryEn: "The Qinling–Huaihe Line divides China's colder wheat-growing north from its humid rice-growing south.",
        summaryVi: "Tuyến Tần Lĩnh – Hoài Hà phân chia miền Bắc khô lạnh ăn bột mì với miền Nam ẩm ướt trồng lúa nước.",
        keyTermZh: "地理分界线", keyTermEn: "geographical dividing line",
        quizPromptEn: "What is the traditional staple south of the Qinling–Huaihe Line?", quizPromptZh: "秦岭—淮河一线以南传统上广泛种植什么？",
        optionsZh: ["小麦", "水稻", "青稞", "高粱"], correctIdx: 1
      },
      {
        id: "hsk-geo-03", level: "HSK 5", topic: "geography",
        titleEn: "Dujiangyan Irrigation Heritage", titleVi: "Công trình thủy lợi Đô Giang Yển",
        passageZh: "位于四川的都江堰始建于战国时期，由李冰父子主持修建。它采用无坝引水设计，既能防洪又能灌溉，使成都平原成为富饶的天府之国。",
        passagePinyin: "Wèiyú Sìchuān de Dūjiāngyàn shǐjiàn yú Zhànguó shíqī, yóu Lǐ Bīng fùzǐ zhǔchí xiūjiàn. Tā cǎiyòng wúbà yǐnshuǐ shèjì, jì néng fánghóng yòu néng guàngài, shǐ Chéngdū Píngyuán chéngwéi fùráo de Tiānfǔ zhī Guó.",
        summaryEn: "Built in the Warring States era by Li Bing, Dujiangyan uses dam-free diversion to control floods and irrigate the Chengdu Plain.",
        summaryVi: "Đô Giang Yển do cha con Lý Băng xây thời Chiến Quốc, dùng nguyên lý dẫn nước không đập giúp trị thủy và tưới tiêu cho bình nguyên Thành Đô.",
        keyTermZh: "无坝引水", keyTermEn: "dam-free water diversion",
        quizPromptEn: "What engineering feature distinguishes Dujiangyan?", quizPromptZh: "都江堰最突出的工程特点是什么？",
        optionsZh: ["高坝蓄水发电", "无坝引水防洪灌溉", "地下暗渠输水", "人工海水淡化"], correctIdx: 1
      },
      {
        id: "hsk-geo-04", level: "HSK 5", topic: "geography",
        titleEn: "The Grand Canal Corridor", titleVi: "Hành lang Đại Vận Hà",
        passageZh: "京杭大运河全长约一千八百公里，沟通了海河、黄河、淮河、长江和钱塘江五大水系，历史上长期承担南北漕运与商贸往来的重任。",
        passagePinyin: "Jīng-Háng Dàyùnhé quáncháng yuē yīqiān bābǎi gōnglǐ, gōutōng le Hǎihé, Huánghé, Huáihé, Chángjiāng hé Qiántángjiāng wǔdà shuǐxì, lìshǐ shàng chángqī chéngdān nánběi cáoyùn yǔ shāngmào wǎnglái de zhòngrèn.",
        summaryEn: "The Beijing–Hangzhou Grand Canal links five major river basins and historically served as China's north–south grain and trade artery.",
        summaryVi: "Đại Vận Hà Kinh–Hàng nối năm hệ thống sông lớn, từng giữ vai trò huyết mạch vận chuyển lương thực và thương mại Nam – Bắc.",
        keyTermZh: "五大水系", keyTermEn: "five major river systems",
        quizPromptEn: "What historical role did the Grand Canal primarily fulfill?", quizPromptZh: "大运河在历史上主要承担什么任务？",
        optionsZh: ["南北漕运与商贸", "远洋航海探险", "高原牧区灌溉", "边境军事防御"], correctIdx: 0
      },
      {
        id: "hsk-geo-05", level: "HSK 5", topic: "geography",
        titleEn: "Hexi Corridor of the Silk Road", titleVi: "Hành lang Hà Tây trên Con đường Tơ lụa",
        passageZh: "河西走廊位于甘肃西部，夹在祁连山与巴丹吉林沙漠之间。凭借祁连山冰雪融水形成的绿洲，这里成为古代丝绸之路通往西域的咽喉要道。",
        passagePinyin: "Héxī Zǒuláng wèiyú Gānsù xībù, jiā zài Qíliánshān yǔ Bādānjílín Shāmò zhījiān. Píngjiè Qíliánshān bīngxuě róngshuǐ xíngchéng de lǜzhōu, zhèlǐ chéngwéi gǔdài Sīchóu zhī Lù tōngwǎng Xīyù de yānhóu yàodào.",
        summaryEn: "Fed by Qilian Mountain glacial meltwater oases, Gansu's Hexi Corridor served as the vital Silk Road gateway to Central Asia.",
        summaryVi: "Nhờ chuỗi ốc đảo từ băng tuyết núi Kỳ Liên, hành lang Hà Tây ở Cam Túc trở thành yết hầu của Con đường Tơ lụa cổ đại.",
        keyTermZh: "咽喉要道", keyTermEn: "strategic bottleneck passage",
        quizPromptEn: "What water source sustained the oases of the Hexi Corridor?", quizPromptZh: "河西走廊的绿洲主要依靠什么水源形成？",
        optionsZh: ["长江干流", "祁连山冰雪融水", "南海季风降雨", "地下水库抽水"], correctIdx: 1
      },
      {
        id: "hsk-geo-06", level: "HSK 5", topic: "geography",
        titleEn: "South China Karst Landscapes", titleVi: "Địa hình Karst miền Nam Trung Quốc",
        passageZh: "广西桂林、云南石林与贵州荔波等地分布着壮观的喀斯特地貌。石灰岩经亿万年流水溶蚀，雕琢出峰林、溶洞与地下河交织的奇景。",
        passagePinyin: "Guǎngxī Guìlín, Yúnnán Shílín yǔ Guìzhōu Lìbō děngdì fēnbù zhe zhuàngguān de Kāsītè dìmào. Shíhuīyán jīng yìwànnián liúshuǐ róngshí, diāozhuó chū fēnglín, róngdòng yǔ dìxiàhé jiāozhī de qíjǐng.",
        summaryEn: "Millions of years of water dissolution in limestone sculpted the peak forests, caves, and subterranean rivers of South China Karst.",
        summaryVi: "Sự hòa tan đá vôi qua hàng trăm triệu năm tạo nên rừng đỉnh núi, hang động và sông ngầm tại Quế Lâm, Thạch Lâm và Lệ Ba.",
        keyTermZh: "喀斯特地貌", keyTermEn: "karst topography",
        quizPromptEn: "Which rock type forms South China Karst landscapes?", quizPromptZh: "中国南方喀斯特地貌主要是由哪种岩石溶蚀形成的？",
        optionsZh: ["花岗岩", "玄武岩", "石灰岩", "石英砂岩"], correctIdx: 2
      },
      {
        id: "hsk-geo-07", level: "HSK 6", topic: "geography",
        titleEn: "Yangtze River Delta Urban Cluster", titleVi: "Cụm đô thị Đồng bằng sông Trường Giang",
        passageZh: "长三角地区涵盖上海、江苏、浙江和安徽，依托黄金水道与密集高铁网，形成了先进制造、金融服务与国际航运深度融合的超级经济圈。",
        passagePinyin: "Chángsānjiǎo dìqū hángài Shànghǎi, Jiāngsū, Zhèjiāng hé Ānhuī, yītuō huángjīn shuǐdào yǔ mìjí gāotiěwǎng, xíngchéng le xiānjìn zhìzào, jīnróng fúwù yǔ guójì hángyùn shēndù rónghé de chāojí jīngjìquān.",
        summaryEn: "Spanning Shanghai, Jiangsu, Zhejiang, and Anhui, the Yangtze River Delta integrates advanced manufacturing, finance, and global shipping.",
        summaryVi: "Vùng Trường Tam Giác gồm Thượng Hải, Giang Tô, Chiết Giang, An Huy, kết hợp sản xuất tiên tiến, tài chính và vận tải biển quốc tế.",
        keyTermZh: "长三角", keyTermEn: "Yangtze River Delta",
        quizPromptEn: "Which four provincial-level regions comprise the Yangtze River Delta?", quizPromptZh: "文中提到的长三角地区涵盖哪四个省市？",
        optionsZh: ["北京、天津、河北、山东", "上海、江苏、浙江、安徽", "广东、广西、海南、福建", "四川、重庆、云南、贵州"], correctIdx: 1
      },
      {
        id: "hsk-geo-08", level: "HSK 6", topic: "geography",
        titleEn: "Greater Bay Area Connectivity", titleVi: "Kết nối vùng Vịnh Lớn Quảng Đông–Hồng Kông–Ma Cao",
        passageZh: "粤港澳大湾区由香港、澳门及珠三角九市组成。港珠澳大桥与跨境高铁缩短了时空距离，推动科研创新与跨境贸易高效协同。",
        passagePinyin: "Yuè-Gǎng-Ào Dàwānqū yóu Xiānggǎng, Àomén jí Zhūsānjiǎo jiǔshì zǔchéng. Gǎng-Zhū-Ào Dàqiáo yǔ kuàjìng gāotiě suōduǎn le shíkōng jùlí, tuīdòng kēyán chuàngxīn yǔ kuàjìng màoyì gāoxiào xiétóng.",
        summaryEn: "The Greater Bay Area links Hong Kong, Macao, and nine Pearl River Delta cities via mega-bridges and high-speed rail.",
        summaryVi: "Đại Vịnh khu kết nối Hồng Kông, Ma Cao và chín thành phố Châu Giang nhờ cầu vượt biển và đường sắt cao tốc xuyên biên giới.",
        keyTermZh: "粤港澳大湾区", keyTermEn: "Guangdong–Hong Kong–Macao Greater Bay Area",
        quizPromptEn: "What infrastructure is highlighted for shortening travel time in the Greater Bay Area?", quizPromptZh: "文中提到哪两项设施缩短了大湾区的时空距离？",
        optionsZh: ["大运河与绿皮车", "港珠澳大桥与跨境高铁", "丝绸之路与驿道", "内河渡轮与索道"], correctIdx: 1
      },
      {
        id: "hsk-geo-09", level: "HSK 6", topic: "geography",
        titleEn: "The Loess Plateau Ecological Turn", titleVi: "Chuyển biến sinh thái Cao nguyên Hoàng Thổ",
        passageZh: "黄土高原土质疏松，历史上水土流失严重。近数十年来，通过退耕还林还草与梯田治理，当地植被覆盖率显著提升，黄河输沙量大幅下降。",
        passagePinyin: "Huángtǔ Gāoyuán tǔzhì shūsōng, lìshǐ shàng shuǐtǔ liúshī yánzhòng. Jìn shùshínián lái, tōngguò tuìgēng huánlín huáncǎo yǔ tītián zhìlǐ, dāngdì zhíbèi fùgàilǜ xiǎnzhù tíshēng, Huánghé shūshāliàng dàfú xiàjiàng.",
        summaryEn: "Reforestation and terracing on the Loess Plateau have raised vegetation cover and substantially lowered Yellow River sediment loads.",
        summaryVi: "Chính sách hoàn trả đất rừng và ruộng bậc thang tại Cao nguyên Hoàng Thổ giúp tăng độ che phủ xanh và giảm mạnh lượng phù sa trôi xuống Hoàng Hà.",
        keyTermZh: "退耕还林", keyTermEn: "converting cropland back to forest",
        quizPromptEn: "What measurable river effect followed Loess Plateau restoration?", quizPromptZh: "黄土高原治理后，黄河出现了什么明显变化？",
        optionsZh: ["输沙量大幅下降", "河道完全干涸", "彻底改变流向", "冬季不再结冰"], correctIdx: 0
      },
      {
        id: "hsk-geo-10", level: "HSK 7-9", topic: "geography",
        titleEn: "The Hu Huanyong Population Line", titleVi: "Đường ranh giới dân cư Hồ Hoán Dung",
        passageZh: "地理学家胡焕庸于1935年提出的黑河—腾冲线，揭示了中国人口与经济密度的空间格局：线东南面积不足半壁，却承载了绝大多数人口与城镇。",
        passagePinyin: "Dìlǐxuéjiā Hú Huànyōng yú yījiǔsānwǔ nián tíchū de Hēihé—Téngchōng Xiàn, jiēshì le Zhōngguó rénkǒu yǔ jīngjì mìdù de kōngjiān géjú: xiàn dōngnán miànjī bùzú bànbì, què chéngzài le juédàduōshù rénkǒu yǔ chéngzhèn.",
        summaryEn: "Proposed in 1935, the Heihe–Tengchong Line highlights China's demographic asymmetry, with most people concentrated southeast of the divide.",
        summaryVi: "Đường Hắc Hà – Đằng Xung do Hồ Hoán Dung đề xuất năm 1935 cho thấy phần đông nam chiếm chưa tới nửa diện tích nhưng tập trung đại đa số dân cư.",
        keyTermZh: "黑河—腾冲线", keyTermEn: "Heihe–Tengchong Line",
        quizPromptEn: "What spatial pattern does the Heihe–Tengchong Line reveal?", quizPromptZh: "黑河—腾冲线主要揭示了什么空间格局？",
        optionsZh: ["矿产储量分布", "人口与经济密度分布", "古代长城走向", "地震带分布"], correctIdx: 1
      },
      {
        id: "hsk-cls-01", level: "HSK 4", topic: "classics",
        titleEn: "Confucius on Reviewing the Old", titleVi: "Khổng Tử luận về Ôn cố tri tân",
        passageZh: "《论语》中说：温故而知新，可以为师矣。这句话强调复习旧知识时要不断思考，从而获得新的理解，是古今通用的治学方法。",
        passagePinyin: "Lúnyǔ zhōng shuō: wēngù ér zhīxīn, kěyǐ wéi shī yǐ. Zhè jù huà qiángdiào fùxí jiù zhīshi shí yào bùduàn sīkǎo, cóng'ér huòdé xīn de lǐjiě, shì gǔjīn tōngyòng de zhìxué fāngfǎ.",
        summaryEn: "The Analects teaches that revisiting prior knowledge with fresh reflection yields new insight—a enduring principle of scholarship.",
        summaryVi: "Luận Ngữ nhấn mạnh việc ôn lại kiến thức cũ đi kèm suy ngẫm để mở ra nhận thức mới, là phương pháp học tập xuyên thời đại.",
        keyTermZh: "温故而知新", keyTermEn: "gaining new insight by reviewing the old",
        quizPromptEn: "According to the passage, what makes reviewing old knowledge valuable?", quizPromptZh: "根据短文，复习旧知识的关键在于什么？",
        optionsZh: ["死记硬背原文", "不断思考以获得新理解", "减少阅读数量", "只背诵考试题目"], correctIdx: 1
      },
      {
        id: "hsk-cls-02", level: "HSK 4", topic: "classics",
        titleEn: "Laozi and the Metaphor of Water", titleVi: "Lão Tử và ẩn dụ về nước",
        passageZh: "《道德经》提出上善若水，赞美水滋润万物而不与万物争利。在管理与处世中，这种柔韧克刚的智慧常被视为高明的境界。",
        passagePinyin: "Dàodéjīng tíchū shàngshàn ruòshuǐ, zànměi shuǐ zīrùn wànwù ér bù yǔ wànwù zhēnglì. Zài guǎnlǐ yǔ chǔshì zhōng, zhèzhǒng róurèn kègāng de zhìhuì cháng bèi shìwéi gāomíng de jìngjiè.",
        summaryEn: "The Daodejing likens supreme goodness to water, which nourishes all things without contention—a celebrated ideal of flexible leadership.",
        summaryVi: "Đạo Đức Kinh ca ngợi bậc thượng thiện như nước, nuôi dưỡng vạn vật mà không tranh giành, biểu trưng cho trí tuệ lấy nhu thắng cương.",
        keyTermZh: "上善若水", keyTermEn: "supreme goodness is like water",
        quizPromptEn: "What quality of water does the Daodejing praise here?", quizPromptZh: "《道德经》在此赞美水的哪一种品格？",
        optionsZh: ["滋润万物而不争利", "汹涌澎湃毁灭一切", "静止不动永不变化", "只流向高处"], correctIdx: 0
      },
      {
        id: "hsk-cls-03", level: "HSK 5", topic: "classics",
        titleEn: "Sun Tzu on Winning Without Battle", titleVi: "Tôn Tử luận Bất chiến nhi khuất nhân chi binh",
        passageZh: "《孙子兵法》并非鼓吹战争，反而主张不战而屈人之兵，善之善者也。这一战略思想至今广泛影响着国际谈判与商业竞争分析。",
        passagePinyin: "Sūnzǐ Bīngfǎ bìngfēi gǔchuī zhànzhēng, fǎn'ér zhǔzhāng bùzhàn ér qūrén zhī bīng, shàn zhī shànzhě yě. Zhè yī zhànlüè sīxiǎng zhìjīn guǎngfàn yǐngxiǎng zhe guójì tánpàn yǔ shāngyè jìngzhēng fēnxī.",
        summaryEn: "Rather than glorifying combat, Sun Tzu prizes subduing opposition without fighting—a principle still influential in diplomacy and business strategy.",
        summaryVi: "Binh pháp Tôn Tử không cổ súy chiến tranh mà đề cao thắng lợi không cần giao chiến, ảnh hưởng sâu rộng tới đàm phán và chiến lược kinh doanh.",
        keyTermZh: "不战而屈人之兵", keyTermEn: "subduing the adversary without fighting",
        quizPromptEn: "What is the highest strategic ideal in Sun Tzu's Art of War according to the text?", quizPromptZh: "根据短文，《孙子兵法》推崇的最高策略是什么？",
        optionsZh: ["持久消耗战", "不战而屈人之兵", "盲目扩张领土", "依赖单一武器"], correctIdx: 1
      },
      {
        id: "hsk-cls-04", level: "HSK 5", topic: "classics",
        titleEn: "Sima Qian's Records of the Grand Historian", titleVi: "Sử Ký của Tư Mã Thiên",
        passageZh: "西汉史学家司马迁历经磨难写成《史记》，首创纪传体通史体例，以人物为中心记述上古至汉武帝时期的历史，被鲁迅赞为史家之绝唱。",
        passagePinyin: "Xīhàn shǐxuéjiā Sīmǎ Qiān lìjīng mónàn xiěchéng Shǐjì, shǒuchuàng jìzhuàntǐ tōngshǐ tǐlì, yǐ rénwù wéi zhōngxīn jìshù shànggǔ zhì Hàn Wǔdì shíqī de lìshǐ, bèi Lǔ Xùn zànwéi shǐjiā zhī juéchàng.",
        summaryEn: "Sima Qian pioneered the biographical-annals format in Shiji, covering antiquity to Emperor Wu of Han and earning Lu Xun's supreme praise.",
        summaryVi: "Tư Mã Thiên sáng lập thể kỷ truyện thông sử trong Sử Ký, ghi chép từ thượng cổ đến thời Hán Vũ Đế và được Lỗ Tấn tôn vinh là tuyệt xướng sử gia.",
        keyTermZh: "纪传体", keyTermEn: "biographical-annals historiographical style",
        quizPromptEn: "What historiographical format did Sima Qian pioneer?", quizPromptZh: "司马迁在《史记》中首创了哪种史书体例？",
        optionsZh: ["编年体", "纪传体通史", "日记体", "章回体小说"], correctIdx: 1
      },
      {
        id: "hsk-cls-05", level: "HSK 5", topic: "classics",
        titleEn: "Li Bai and Du Fu: Twin Peaks of Tang Poetry", titleVi: "Lý Bạch và Đỗ Phủ: Hai đỉnh cao Đường Thi",
        passageZh: "唐代诗坛以李白与杜甫并称。李白诗风豪放飘逸，富含浪漫想象；杜甫沉郁顿挫，深切关注战乱中的民生疾苦，被尊为诗圣。",
        passagePinyin: "Tángdài shītán yǐ Lǐ Bái yǔ Dù Fǔ bìngchēng. Lǐ Bái shīfēng háofàng piāoyì, fùhán làngmàn xiǎngxiàng; Dù Fǔ chényù dùncuò, shēnqiè guānzhù zhànluàn zhōng de mínshēng jíkǔ, bèi zūnwéi Shīshèng.",
        summaryEn: "Tang poetry pairs Li Bai's soaring romanticism with Du Fu's solemn realism and compassion for wartime suffering.",
        summaryVi: "Thi đàn đời Đường sánh đôi Lý Bạch hào phóng lãng mạn với Đỗ Phủ trầm uất hiện thực, sâu nặng nỗi niềm dân sinh.",
        keyTermZh: "沉郁顿挫", keyTermEn: "solemn, cadence-rich poetic gravity",
        quizPromptEn: "How is Du Fu's poetic focus characterized in the passage?", quizPromptZh: "短文如何概括杜甫诗歌的关注重点？",
        optionsZh: ["宫廷宴乐描写", "深切关注战乱中的民生疾苦", "纯粹山水隐逸", "海外贸易见闻"], correctIdx: 1
      },
      {
        id: "hsk-cls-06", level: "HSK 6", topic: "classics",
        titleEn: "Su Shi's Bold-Heroic Ci Poetry", titleVi: "Từ phái Hào phóng của Tô Thức",
        passageZh: "北宋文豪苏轼突破了词多写闺情离愁的传统局限，将历史怀古、人生哲思与山河气魄融入词作，开创了豪放词风，代表作有《念奴娇·赤壁怀古》。",
        passagePinyin: "Běisòng wénháo Sū Shì tūpò le cí duō xiě guīqíng líchóu de chuántǒng júxiàn, jiāng lìshǐ huáigǔ, rénshēng zhésī yǔ shānhé qìpò róngrù cízuò, kāichuàng le háofàng cífēng, dàibiǎozuò yǒu Niànnújiāo Chìbì Huáigǔ.",
        summaryEn: "Northern Song polymath Su Shi expanded ci poetry beyond boudoir sorrow to embrace history, philosophy, and grand landscapes.",
        summaryVi: "Tô Thức phá vỡ giới hạn uyển ước của từ cổ, đưa hoài cổ lịch sử và triết lý nhân sinh vào sáng tác, mở ra dòng từ hào phóng.",
        keyTermZh: "豪放词风", keyTermEn: "bold-heroic ci poetry style",
        quizPromptEn: "What traditional boundary did Su Shi break in ci poetry?", quizPromptZh: "苏轼突破了传统词作的什么局限？",
        optionsZh: ["多写闺情离愁的题材局限", "禁止使用韵脚", "只能由女性创作", "必须用白话写成"], correctIdx: 0
      },
      {
        id: "hsk-cls-07", level: "HSK 6", topic: "classics",
        titleEn: "Romance of the Three Kingdoms and Strategy", titleVi: "Tam Quốc Diễn Nghĩa và tư duy chiến lược",
        passageZh: "《三国演义》以东汉末年至西晋初年的群雄逐鹿为背景，虽有七分实事、三分虚构之说，却通过赤壁之战等典故塑造了深植东亚文化的忠义与谋略原型。",
        passagePinyin: "Sānguó Yǎnyì yǐ Dōnghàn mònán zhì Xījìn chūnián de qúnxióng zhúlù wéi bèijǐng, suī yǒu qīfēn shíshì, sānfēn xūgòu zhī shuō, què tōngguò Chìbì zhī Zhàn děng diǎngù sùzào le shēnzhí Dōngyà wénhuà de zhōngyì yǔ móulüè yuánxíng.",
        summaryEn: "Blending seven parts history with three parts fiction, Romance of the Three Kingdoms forged enduring East Asian archetypes of loyalty and strategy.",
        summaryVi: "Kết hợp bảy phần thực lục, ba phần hư cấu, Tam Quốc Diễn Nghĩa kiến tạo những nguyên mẫu trung nghĩa và mưu lược sâu đậm trong văn hóa Đông Á.",
        keyTermZh: "七分实事、三分虚构", keyTermEn: "seven parts history, three parts fiction",
        quizPromptEn: "How is the balance of history and fiction in Romance of the Three Kingdoms described?", quizPromptZh: "文中如何评价《三国演义》的史实与虚构比例？",
        optionsZh: ["完全虚构", "七分实事、三分虚构", "纯官方档案汇编", "一半神话一半新闻"], correctIdx: 1
      },
      {
        id: "hsk-cls-08", level: "HSK 6", topic: "classics",
        titleEn: "Wang Wei: Poetry in Painting", titleVi: "Vương Duy: Thi trung hữu họa",
        passageZh: "苏轼评价王维诗中有画，画中有诗。王维擅长用简练的声色对比营造空灵禅意，如空山新雨后，天气晚来秋，使读者如临其境。",
        passagePinyin: "Sū Shì píngjià Wáng Wéi shīzhōng yǒu huà, huàzhōng yǒu shī. Wáng Wéi shàncháng yòng jiǎnliàn de shēngsè duìbǐ yíngzào kōnglíng chányì, rú kōngshān xīnyǔ hòu, tiānqì wǎnlái qiū, shǐ dúzhě rúlín qíjìng.",
        summaryEn: "Praised by Su Shi for 'painting within poetry,' Wang Wei used spare sensory contrasts to evoke serene Chan stillness.",
        summaryVi: "Được Tô Thức khen 'thi trung hữu họa', Vương Duy dùng những nét thanh – sắc tinh giản để tạo không gian thiền vị tĩnh tại.",
        keyTermZh: "诗中有画", keyTermEn: "painting within poetry",
        quizPromptEn: "What aesthetic effect does Wang Wei achieve through sound-and-color contrasts?", quizPromptZh: "王维擅长通过声色对比营造怎样的意境？",
        optionsZh: ["空灵禅意", "喧嚣市井气", "悲壮战场感", "讽刺幽默感"], correctIdx: 0
      },
      {
        id: "hsk-cls-09", level: "HSK 7-9", topic: "classics",
        titleEn: "Qu Yuan and the Songs of Chu", titleVi: "Khuất Nguyên và Sở Từ",
        passageZh: "战国楚国诗人屈原以《离骚》开创了浪漫主义骚体诗传统。他以香草美人比喻高洁品格与政治理想，其爱国情怀与端午民俗共同流传两千余年。",
        passagePinyin: "Zhànguó Chǔguó shīrén Qū Yuán yǐ Lísāo kāichuàng le làngmànzhǔyì sāotǐshī chuántǒng. Tā yǐ xiāngcǎo měirén bǐyù gāojié pǐngé yǔ zhèngzhì lǐxiǎng, qí àiguó qínghuái yǔ Duānwǔ mínsú gòngtóng liúchuán liǎngqiān yúnián.",
        summaryEn: "Qu Yuan's Li Sao inaugurated the romantic Songs of Chu tradition, using fragrant herbs as allegories of moral integrity.",
        summaryVi: "Bài Ly Tao của Khuất Nguyên mở ra dòng thơ lãng mạn Sở Từ, mượn hương thảo mỹ nhân ẩn dụ cho khí tiết thanh cao.",
        keyTermZh: "香草美人", keyTermEn: "fragrant herbs and fair ladies (allegory of virtue)",
        quizPromptEn: "What do 'fragrant herbs and fair ladies' symbolize in Qu Yuan's poetry?", quizPromptZh: "屈原诗中的“香草美人”主要用来比喻什么？",
        optionsZh: ["农业丰收", "高洁品格与政治理想", "商业繁荣", "军事武器"], correctIdx: 1
      },
      {
        id: "hsk-cls-10", level: "HSK 7-9", topic: "classics",
        titleEn: "Classical Annotations and Evidential Learning", titleVi: "Khảo chứng học thời Thanh",
        passageZh: "清代乾嘉学派推崇实事求是与无征不信，通过文字、音韵与训诂考据还原古籍原貌。这种严谨的文献校勘精神与现代实证研究方法高度契合。",
        passagePinyin: "Qīngdài Qián-Jiā xuépài tuīchóng shíshì qiúshì yǔ wúzhēng bùxìn, tōngguò wénzì, yīnyùn yǔ xùngǔ kǎojù huányuán gǔjí yuánmào. Zhèzhǒng yánjǐn de wénxiàn jiàokān jīngshén yǔ xiàndài shízhèng yánjiū fāngfǎ gāodù qìhé.",
        summaryEn: "The Qing Qian-Jia school of evidential learning applied philology and phonology to verify classical texts, echoing modern empirical rigor.",
        summaryVi: "Học phái Càn Gia thời Thanh đề cao nguyên tắc 'vô chứng bất tín', dùng văn tự – âm vận – huấn cổ để khảo đính cổ thư, gần gũi với phương pháp thực chứng hiện đại.",
        keyTermZh: "无征不信", keyTermEn: "accept no claim without textual evidence",
        quizPromptEn: "Which core scholarly principle defined the Qing Qian-Jia school?", quizPromptZh: "清代乾嘉学派推崇的核心治学原则是什么？",
        optionsZh: ["实事求是、无征不信", "凭空想象演绎", "只读白话译本", "排斥古籍校勘"], correctIdx: 0
      },
      {
        id: "hsk-cus-01", level: "HSK 4", topic: "customs",
        titleEn: "Spring Festival Reunion Dinner", titleVi: "Bữa cơm tất niên đêm Giao thừa",
        passageZh: "除夕夜的年夜饭是中国人一年中最重视的家庭聚餐。餐桌上常有一道鱼，因为鱼与余谐音，寄托着年年有余的美好祝愿。",
        passagePinyin: "Chúxīyè de niányèfàn shì Zhōngguórén yīnián zhōng zuì zhòngshì de jiātíng jùcān. Cānzhuō shàng cháng yǒu yīdào yú, yīnwèi yú yǔ yú xiéyīn, jìtuō zhe niánnián yǒuyú de měihǎo zhùyuàn.",
        summaryEn: "The New Year's Eve reunion dinner features fish because the homophone 'yu' symbolizes annual abundance.",
        summaryVi: "Bữa cơm đêm trừ tịch thường có món cá nhờ đồng âm chữ 'ngư' và 'dư', gửi gắm lời chúc quanh năm sung túc.",
        keyTermZh: "年年有余", keyTermEn: "abundance year after year",
        quizPromptEn: "Why is fish commonly served at the Lunar New Year's Eve dinner?", quizPromptZh: "年夜饭餐桌上为什么常有一道鱼？",
        optionsZh: ["鱼与余谐音，寓意年年有余", "冬季只有鱼可以买到", "鱼代表长途旅行", "为了替代米饭"], correctIdx: 0
      },
      {
        id: "hsk-cus-02", level: "HSK 4", topic: "customs",
        titleEn: "Finger-Tapping Tea Etiquette", titleVi: "Lễ Khấu chỉ tạ trà",
        passageZh: "在广东和福建等地饮茶时，如果别人为你斟茶，你可以用手指轻轻叩击桌面两三下，这叫叩指礼，用来代替鞠躬表示感谢。",
        passagePinyin: "Zài Guǎngdōng hé Fújiàn děngdì yǐnchá shí, rúguǒ biérén wèi nǐ zhēnchá, nǐ kěyǐ yòng shǒuzhǐ qīngqīng kòujī zhuōmiàn liǎngsān xià, zhè jiào kòuzhǐlǐ, yònglái dàitì jūgōng biǎoshì gǎnxiè.",
        summaryEn: "In Guangdong and Fujian tea culture, lightly tapping the table with fingers ('kouzhili') expresses thanks to the person pouring tea.",
        summaryVi: "Trong văn hóa trà Quảng Đông và Phúc Kiến, gõ nhẹ ngón tay lên mặt bàn khi được rót trà là nghi lễ Khấu chỉ thay lời cảm ơn.",
        keyTermZh: "叩指礼", keyTermEn: "finger-tapping gratitude gesture",
        quizPromptEn: "What does lightly tapping the table during tea service signify?", quizPromptZh: "饮茶时用手指轻叩桌面表示什么意思？",
        optionsZh: ["茶水太烫", "向斟茶者表示感谢", "请服务员结账", "要求换一壶茶"], correctIdx: 1
      },
      {
        id: "hsk-cus-03", level: "HSK 4", topic: "customs",
        titleEn: "Mid-Autumn Mooncakes and Reunion", titleVi: "Tết Trung Thu và ý nghĩa đoàn viên",
        passageZh: "农历八月十五是中秋节，正值秋高气爽、明月最圆之际。全家人赏月、吃月饼，用圆满的月色象征家庭团聚与亲情和睦。",
        passagePinyin: "Nónglì bāyuè shíwǔ shì Zhōngqiūjié, zhèngzhí qiūgāo qìshuǎng, míngyuè zuìyuán zhījì. Quánjiārén shǎngyuè, chī yuèbǐng, yòng yuánmǎn de yuèsè xiàngzhēng jiātíng tuánjù yǔ qīnqíng hémù.",
        summaryEn: "Celebrated on the 15th day of the eighth lunar month, Mid-Autumn Festival pairs moon-gazing and mooncakes as emblems of family reunion.",
        summaryVi: "Rằm tháng Tám âm lịch là dịp cả gia đình thưởng nguyệt, ăn bánh trung thu, lấy hình ảnh trăng tròn biểu trưng cho sự đoàn viên.",
        keyTermZh: "团圆", keyTermEn: "family reunion",
        quizPromptEn: "What does the full moon symbolize during the Mid-Autumn Festival?", quizPromptZh: "中秋节的明月主要象征什么？",
        optionsZh: ["家庭团聚与和睦", "冬季农闲开始", "远行经商启程", "科举考试放榜"], correctIdx: 0
      },
      {
        id: "hsk-cus-04", level: "HSK 5", topic: "customs",
        titleEn: "Qingming: Ancestor Remembrance and Spring Outing", titleVi: "Tiết Thanh Minh: Tảo mộ và Đạp thanh",
        passageZh: "清明既是二十四节气之一，也是传统祭祖节日。人们在扫墓缅怀先人的同时，也趁春光踏青郊游，体现了慎终追远与亲近自然的双重内涵。",
        passagePinyin: "Qīngmíng jì shì èrshísì jiéqì zhīyī, yě shì chuántǒng jìzǔ jiérì. Rénmen zài sǎomù miǎnhuái xiānrén de tóngshí, yě chèn chūnguāng tàqīng jiāoyóu, tǐxiàn le shènzhōng zhuīyuǎn yǔ qīnjìn zìrán de shuāngchóng nèihán.",
        summaryEn: "Qingming serves both as a solar term and a festival combining tomb-sweeping remembrance with spring excursions into nature.",
        summaryVi: "Thanh Minh vừa là tiết khí vừa là lễ tiết kết hợp tảo mộ tưởng nhớ tổ tiên với du xuân hòa mình cùng thiên nhiên.",
        keyTermZh: "慎终追远", keyTermEn: "honoring ancestors with reverence",
        quizPromptEn: "What dual cultural themes are combined in Qingming?", quizPromptZh: "清明节融合了哪双重文化内涵？",
        optionsZh: ["祭祖缅怀与踏青亲近自然", "赛龙舟与喝雄黄酒", "赏灯谜与吃汤圆", "登高插茱萸与饮菊花酒"], correctIdx: 0
      },
      {
        id: "hsk-cus-05", level: "HSK 5", topic: "customs",
        titleEn: "The Twenty-Four Solar Terms", titleVi: "Hệ thống Nhị Thập Tứ Tiết Khí",
        passageZh: "二十四节气是古代农耕文明依据太阳在黄道上的位置划分的时间体系，精准指导播种、防寒与收获，已被列入联合国教科文组织非物质文化遗产名录。",
        passagePinyin: "Èrshísì Jiéqì shì gǔdài nónggēng wénmíng yījù tàiyáng zài huángdào shàng de wèizhì huàfēn de shíjiān tǐxì, jīngzhǔn zhǐdǎo bōzhǒng, fánghán yǔ shōuhuò, yǐ bèi lièrù Liánhéguó Jiàokēwén Zǔzhī fēiwùzhì wénhuà yíchǎn mínglù.",
        summaryEn: "Calculated from the sun's ecliptic longitude, the Twenty-Four Solar Terms guided agrarian life and are recognized as UNESCO Intangible Cultural Heritage.",
        summaryVi: "Nhị thập tứ tiết khí dựa trên vị trí mặt trời trên hoàng đạo để hướng dẫn canh tác nông nghiệp và đã được UNESCO ghi danh Di sản Phi vật thể.",
        keyTermZh: "二十四节气", keyTermEn: "Twenty-Four Solar Terms",
        quizPromptEn: "On what astronomical basis are the Twenty-Four Solar Terms calculated?", quizPromptZh: "二十四节气是依据什么天文规律划分的？",
        optionsZh: ["月球阴晴圆缺", "太阳在黄道上的位置", "潮汐每日涨落", "流星雨周期"], correctIdx: 1
      },
      {
        id: "hsk-cus-06", level: "HSK 5", topic: "customs",
        titleEn: "Banquet Seating Order", titleVi: "Quy tắc vị trí ngồi trên bàn tiệc",
        passageZh: "在正式中式宴请中，圆桌正对大门的座位通常为主宾席或主人席，讲究以右为尊或按长幼主客有序入座，体现了礼仪秩序与对客人的尊重。",
        passagePinyin: "Zài zhèngshì Zhōngshì yànqǐng zhōng, yuánzhuō zhèngduì dàmén de zuòwèi tōngcháng wéi zhǔbīnxí huò zhǔrénxí, jiǎngjiu yǐyòu wéizūn huò àn zhǎngyòu zhǔkè yǒuxù rùzuò, tǐxiàn le lǐyí zhìxù yǔ duì kèrén de zūnzhòng.",
        summaryEn: "At formal Chinese round-table banquets, the seat facing the entrance is reserved for the host or guest of honor, reflecting ordered hospitality.",
        summaryVi: "Trên bàn tròn tiệc chính thức, vị trí đối diện cửa chính dành cho chủ tiệc hoặc thượng khách, thể hiện trật tự lễ nghi và sự hiếu khách.",
        keyTermZh: "主宾席", keyTermEn: "seat of honor",
        quizPromptEn: "Which seat is typically reserved for the host or principal guest?", quizPromptZh: "正式中式圆桌宴请中，主宾或主人通常坐在哪里？",
        optionsZh: ["正对大门的座位", "紧靠门口背对门", "任意最角落的位置", "离菜盘最远的位置"], correctIdx: 0
      },
      {
        id: "hsk-cus-07", level: "HSK 5", topic: "customs",
        titleEn: "Gift-Giving Taboos and Homophones", titleVi: "Kiêng kỵ tặng quà và hiện tượng đồng âm",
        passageZh: "汉语文化中谐音寓意十分丰富。送礼时一般避免赠送钟表或成双拆分梨子，因为送钟与送终、分梨与分离发音相近，容易引发不吉联想。",
        passagePinyin: "Hànyǔ wénhuà zhōng xiéyīn yùyì shífēn fēngfù. Sònglǐ shí yībān bìmiǎn zèngsòng zhōngbiǎo huò chéngshuāng chāifēn lízi, yīnwèi sòngzhōng yǔ sòngzhōng, fēnlí yǔ fēnlí fāyīn xiāngjìn, róngyì yǐnfā bùjí liánxiǎng.",
        summaryEn: "Due to phonetic homophones, gifting clocks ('song zhong', echoing funeral rites) or splitting pears ('fen li', echoing separation) is traditionally avoided.",
        summaryVi: "Do đồng âm, việc tặng đồng hồ ('tống chung') hay chia quả lê ('phân ly') thường được tránh trong văn hóa tặng quà Trung Hoa.",
        keyTermZh: "谐音寓意", keyTermEn: "homophonic symbolism",
        quizPromptEn: "Why are clocks generally avoided as gifts in Chinese etiquette?", quizPromptZh: "中国礼仪中为什么一般避免送钟表作为礼物？",
        optionsZh: ["钟表价格过高", "送钟与送终谐音", "钟表难以包装", "现代人不需要看时间"], correctIdx: 1
      },
      {
        id: "hsk-cus-08", level: "HSK 6", topic: "customs",
        titleEn: "The Spirit of Siheyuan Courtyard Living", titleVi: "Không gian cộng đồng của Tứ Hợp Viện",
        passageZh: "北京四合院由东西南北四面房屋围合而成，外墙封闭安静，内部庭院栽树养鱼。正房供长辈居住，厢房由晚辈使用，将家族伦理融入建筑布局。",
        passagePinyin: "Běijīng Sìhéyuàn yóu dōng-xī-nán-běi sìmiàn fángwū wéihé érchéng, wàiqiáng fēngbì ānjìng, nèibù tíngyuàn zāishù yǎngyú. Zhèngfáng gōng zhǎngbèi jūzhù, xiāngfáng yóu wǎnbèi shǐyòng, jiāng jiāzú lúnlǐ róngrù jiànzhù bùjú.",
        summaryEn: "Beijing's Siheyuan encloses a tranquil courtyard on four sides, assigning the north-facing main hall to elders and side wings to younger generations.",
        summaryVi: "Tứ Hợp Viện Bắc Kinh khép kín bốn mặt quanh sân trong, bố trí chính phòng cho bậc trưởng bối và sương phòng cho thế hệ trẻ.",
        keyTermZh: "四合院", keyTermEn: "four-sided courtyard residence",
        quizPromptEn: "Who traditionally occupied the main hall (正房) of a Siheyuan?", quizPromptZh: "传统四合院的正房通常供谁居住？",
        optionsZh: ["家族长辈", "来访客商", "存放杂物", "厨房灶台"], correctIdx: 0
      },
      {
        id: "hsk-cus-09", level: "HSK 6", topic: "customs",
        titleEn: "Double Ninth Festival and Respect for Elders", titleVi: "Tết Trùng Cửu và truyền thống kính lão",
        passageZh: "农历九月初九为重阳节，因九为阳数，两九相重故名重阳。传统习俗包括登高望远、赏菊与敬老，现代更被赋予老年节的公共文化意义。",
        passagePinyin: "Nónglì jiǔyuè chūjiǔ wéi Chóngyángjié, yīn jiǔ wéi yángshù, liǎngjiǔ xiāngchóng gùmíng Chóngyáng. Chuántǒng xísú bāokuò dēnggāo wàngyuǎn, shǎngjú yǔ jìnglǎo, xiàndài gèng bèi fùyǔ Lǎoniánjié de gōnggòng wénhuà yìyì.",
        summaryEn: "Falling on the ninth day of the ninth lunar month, the Double Ninth Festival features hiking, viewing chrysanthemums, and honoring senior citizens.",
        summaryVi: "Ngày mùng 9 tháng 9 âm lịch là Tết Trùng Cửu với phong tục leo núi, thưởng hoa cúc và tôn vinh người cao tuổi.",
        keyTermZh: "登高赏菊", keyTermEn: "climbing heights and viewing chrysanthemums",
        quizPromptEn: "What modern civic theme is associated with the Double Ninth Festival?", quizPromptZh: "重阳节在现代社会被赋予了什么公共文化意义？",
        optionsZh: ["儿童节", "敬老与老年节", "植树节", "航运日"], correctIdx: 1
      },
      {
        id: "hsk-cus-10", level: "HSK 7-9", topic: "customs",
        titleEn: "Face (Mianzi) and Indirect Communication", titleVi: "Thể diện và nghệ thuật giao tiếp uyển chuyển",
        passageZh: "在跨文化商务交往中，理解面子与留有余地至关重要。中方伙伴在表达异议时常采用先肯定、再委婉提出顾虑的方式，旨在维护长期合作氛围。",
        passagePinyin: "Zài kuàwénhuà shāngwù jiāowǎng zhōng, lǐjiě miànzi yǔ liúyǒu yúdì zhìguān zhòngyào. Zhōngfāng huǒbàn zài biǎodá yìyì shí cháng cǎiyòng xiān kěndìng, zài wěiwǎn tíchū gùlǜ de fāngshì, zhǐzài wéihù chángqī hézuò fēnwéi.",
        summaryEn: "In Sino-international business, preserving 'mianzi' (face) and leaving room for maneuver often means voicing disagreement gently after initial affirmation.",
        summaryVi: "Trong giao thương xuyên văn hóa, hiểu khái niệm thể diện và 'để lại đường lui' giúp nhận diện cách từ chối uyển chuyển nhằm giữ quan hệ dài lâu.",
        keyTermZh: "留有余地", keyTermEn: "leaving room for maneuver",
        quizPromptEn: "Why do partners often affirm first before raising concerns indirectly?", quizPromptZh: "商务沟通中先肯定再委婉提出顾虑的主要目的是什么？",
        optionsZh: ["故意隐瞒合同条款", "维护长期合作氛围与体面", "延长会议时间", "避免签署书面协议"], correctIdx: 1
      },
      {
        id: "hsk-eco-01", level: "HSK 4", topic: "economy",
        titleEn: "Mobile Payments in Daily Commerce", titleVi: "Thanh toán di động trong thương mại thường nhật",
        passageZh: "在中国城市中，无论是大型商场还是街边早点摊，手机扫码支付都十分普及。如今境外旅客也可以绑定国际银行卡，顺畅使用移动支付。",
        passagePinyin: "Zài Zhōngguó chéngshì zhōng, wúlùn shì dàxíng shāngchǎng háishì jiēbiān zǎodiǎntān, shǒujī sǎomǎ zhīfù dōu shífēn pǔjí. Rújīn jìngwài lǚkè yě kěyǐ bǎngdìng guójì yínhángkǎ, shùnchàng shǐyòng yídòng zhīfù.",
        summaryEn: "QR-code mobile payments span malls and street stalls alike, and international travelers can now link overseas bank cards for seamless use.",
        summaryVi: "Thanh toán quét mã QR phổ biến từ trung tâm thương mại tới quán ăn đường phố, nay đã hỗ trợ liên kết thẻ ngân hàng quốc tế cho du khách.",
        keyTermZh: "扫码支付", keyTermEn: "QR-code payment",
        quizPromptEn: "How can overseas visitors now access mobile payments in China?", quizPromptZh: "如今境外旅客怎样顺畅使用中国移动支付？",
        optionsZh: ["只能兑换大量硬币", "可以绑定国际银行卡", "必须开设本地公司", "仅限机场免税店使用"], correctIdx: 1
      },
      {
        id: "hsk-eco-02", level: "HSK 4", topic: "economy",
        titleEn: "High-Speed Rail and Economic Integration", titleVi: "Đường sắt cao tốc và liên kết kinh tế vùng",
        passageZh: "中国建成了世界规模领先的高速铁路网。高频次、准点率高的高铁把相邻城市纳入一小时通勤圈，大幅降低了商务出行与人才流动成本。",
        passagePinyin: "Zhōngguó jiànchéng le shìjiè guīmó lǐngxiān de gāosù tiělùwǎng. Gāopíncì, zhǔndiǎnlǜ gāo de gāotiě bǎ xiānglín chéngshì nàrù yīxiǎoshí tōngqínquān, dàfú jiàngdī le shāngwù chūxíng yǔ réncái liúdòng chéngběn.",
        summaryEn: "China's extensive high-speed rail network creates one-hour intercity commuter belts, lowering costs for business travel and talent mobility.",
        summaryVi: "Mạng lưới đường sắt cao tốc tạo ra vành đai di chuyển một giờ giữa các đô thị lân cận, giảm đáng kể chi phí đi lại thương mại.",
        keyTermZh: "一小时通勤圈", keyTermEn: "one-hour commuter belt",
        quizPromptEn: "What economic benefit of high-speed rail is highlighted?", quizPromptZh: "文中重点强调了高铁带来哪项经济效益？",
        optionsZh: ["降低商务出行与人才流动成本", "完全替代海运集装箱", "取消所有城市地铁", "提高农产品出口关税"], correctIdx: 0
      },
      {
        id: "hsk-eco-03", level: "HSK 5", topic: "economy",
        titleEn: "Cross-Border E-Commerce Hubs", titleVi: "Các trung tâm thương mại điện tử xuyên biên giới",
        passageZh: "杭州、深圳与广州等地设立了跨境电子商务综合试验区，通过海外仓、数字化清关与品牌出海服务，帮助中小制造企业直接对接全球消费者。",
        passagePinyin: "Hángzhōu, Shēnzhèn yǔ Guǎngzhōu děngdì shèlì le kuàjìng diànzǐ shāngwù zōnghé shìyànqū, tōngguò hǎiwàicāng, shùzìhuà qīngguān yǔ pǐnpái chūhǎi fúwù, bāngzhù zhōngxiǎo zhìzào qǐyè zhíjiē duìjiē quánqiú xiāofèizhě.",
        summaryEn: "Cross-border e-commerce pilot zones in Hangzhou, Shenzhen, and Guangzhou combine overseas warehouses and digital customs to connect SMEs globally.",
        summaryVi: "Khu thí điểm thương mại điện tử xuyên biên giới tại Hàng Châu, Thâm Quyến, Quảng Châu kết hợp kho ngoại quan và thông quan số giúp doanh nghiệp vừa và nhỏ vươn ra toàn cầu.",
        keyTermZh: "海外仓", keyTermEn: "overseas warehouse",
        quizPromptEn: "How do pilot zones help small and medium manufacturers?", quizPromptZh: "跨境电商综合试验区如何帮助中小制造企业？",
        optionsZh: ["禁止跨境零售", "通过海外仓和数字化清关对接全球消费者", "只允许线下展销", "取消产品质检"], correctIdx: 1
      },
      {
        id: "hsk-eco-04", level: "HSK 5", topic: "economy",
        titleEn: "Automated Container Ports", titleVi: "Cảng container tự động hóa",
        passageZh: "上海洋山四期与青岛港等自动化码头广泛应用无人集卡、远程桥吊和智能调度系统，实现全天候装卸，显著提升了国际航运枢纽的周转效率。",
        passagePinyin: "Shànghǎi Yángshān sìqī yǔ Qīngdǎogǎng děng zìdònghuà mǎtóu guǎngfàn yìngyòng wúrén jíkǎ, yuǎnchéng qiáodiào hé zhìnéng diàodù xìtǒng, shíxiàn quántiānhòu zhuāngxiè, xiǎnzhù tíshēng le guójì hángyùn shūniǔ de zhōuzhuǎn xiàolǜ.",
        summaryEn: "Automated terminals like Shanghai Yangshan Phase IV deploy autonomous trucks and remote cranes for round-the-clock container throughput.",
        summaryVi: "Các bến cảng tự động như Dương Sơn giai đoạn 4 và Thanh Đảo dùng xe đầu kéo không người lái và cẩu điều khiển từ xa giúp tăng mạnh hiệu suất luân chuyển.",
        keyTermZh: "自动化码头", keyTermEn: "automated container terminal",
        quizPromptEn: "What operational advantage do automated terminals deliver?", quizPromptZh: "自动化码头带来了什么运营优势？",
        optionsZh: ["全天候装卸并提升周转效率", "完全免除海运保险", "不再需要提单文件", "只接卸小型渔船"], correctIdx: 0
      },
      {
        id: "hsk-eco-05", level: "HSK 5", topic: "economy",
        titleEn: "China–Europe Railway Express", titleVi: "Tuyến đường sắt liên vận Trung–Âu",
        passageZh: "中欧班列连接中国内陆城市与欧洲多个物流枢纽，运输时间较传统海运大幅缩短，成本低于空运，为电子产品、汽车零部件及高附加值货物提供了重要通道。",
        passagePinyin: "Zhōng-Ōu Bānliè liánjiē Zhōngguó nèilù chéngshì yǔ Ōuzhōu duōgè wùliú shūniǔ, yùnshū shíjiān jiào chuántǒng hǎiyùn dàfú suōduǎn, chéngběn dīyú kōngyùn, wéi diànzǐ chǎnpǐn, qìchē língbùjiàn jí gāo fùjiāzhí huòwù tígōng le zhòngyào tōngdào.",
        summaryEn: "The China–Europe Railway Express offers a middle-ground freight corridor—faster than ocean shipping and more economical than air cargo.",
        summaryVi: "Đoàn tàu Trung–Âu tạo hành lang vận tải cân bằng: nhanh hơn đường biển và tiết kiệm hơn đường hàng không cho hàng điện tử và linh kiện.",
        keyTermZh: "中欧班列", keyTermEn: "China–Europe Railway Express",
        quizPromptEn: "How does China–Europe rail compare to ocean and air freight?", quizPromptZh: "中欧班列与海运、空运相比有什么特点？",
        optionsZh: ["比海运快，成本低于空运", "比空运快，成本低于海运", "只运送煤炭和铁矿石", "仅在冬季运行"], correctIdx: 0
      },
      {
        id: "hsk-eco-06", level: "HSK 6", topic: "economy",
        titleEn: "Industrial Clusters in Manufacturing", titleVi: "Cụm công nghiệp chuyên môn hóa trong sản xuất",
        passageZh: "中国制造业的一大优势在于高度细分的产业集群，例如义乌小商品、佛山家电家具与苏州电子信息。上下游供应商近距离配套，大幅压缩了打样与交货周期。",
        passagePinyin: "Zhōngguó zhìzàoyè de yīdà yōushì zàiyú gāodù xìfēn de chǎnyè jíqún, lìrú Yìwū xiǎoshāngpǐn, Fóshān jiādiàn jiājù yǔ Sūzhōu diànzǐ xìnxī. Shàngxiàyóu gōngyìngshāng jìnjùlí pèitào, dàfú yāsuō le dǎyàng yǔ jiāohuò zhōuqī.",
        summaryEn: "Specialized industrial clusters such as Yiwu, Foshan, and Suzhou co-locate upstream and downstream suppliers, compressing prototyping and lead times.",
        summaryVi: "Các cụm ngành chuyên sâu như Nghĩa Ô, Phật Sơn, Tô Châu tập trung nhà cung ứng thượng – hạ nguồn gần nhau, rút ngắn mạnh thời gian ra mẫu và giao hàng.",
        keyTermZh: "产业集群", keyTermEn: "industrial cluster",
        quizPromptEn: "What practical advantage do tightly co-located suppliers provide?", quizPromptZh: "上下游供应商近距离配套带来了什么实际优势？",
        optionsZh: ["压缩打样与交货周期", "取消原材料采购", "免除出口报关手续", "消除汇率波动"], correctIdx: 0
      },
      {
        id: "hsk-eco-07", level: "HSK 6", topic: "economy",
        titleEn: "Green Energy Transition and Photovoltaics", titleVi: "Chuyển dịch năng lượng xanh và ngành quang điện",
        passageZh: "在双碳目标引领下，中国加快布局光伏、风电与储能产业。规模化生产推动清洁能源发电成本持续走低，也促使出口企业加强碳足迹核算。",
        passagePinyin: "Zài shuāngtàn mùbiāo yǐnlǐng xià, Zhōngguó jiākuài bùjú guāngfú, fēngdiàn yǔ chǔnéng chǎnyè. Guīmóhuà shēngchǎn tuīdòng qīngjié néngyuán fādiàn chéngběn chíxù zǒudī, yě cùshǐ chūkǒu qǐyè jiāqiáng tànzújì hésuàn.",
        summaryEn: "Under dual-carbon goals, scaled solar, wind, and storage manufacturing lowers clean-power costs while prompting exporters to track product carbon footprints.",
        summaryVi: "Dưới mục tiêu song các-bon, quy mô sản xuất quang điện và lưu trữ năng lượng giúp hạ giá điện sạch, đồng thời thúc đẩy doanh nghiệp xuất khẩu kiểm kê dấu chân các-bon.",
        keyTermZh: "碳足迹核算", keyTermEn: "carbon footprint accounting",
        quizPromptEn: "What compliance practice are exporters strengthening alongside green energy growth?", quizPromptZh: "伴随新能源发展，出口企业正在加强哪项合规工作？",
        optionsZh: ["碳足迹核算", "增加燃煤锅炉", "取消环保标签", "减少技术标准"], correctIdx: 0
      },
      {
        id: "hsk-eco-08", level: "HSK 6", topic: "economy",
        titleEn: "The Canton Fair as a Trade Barometer", titleVi: "Hội chợ Quảng Châu như hàn thử biểu ngoại thương",
        passageZh: "创办于1957年的中国进出口商品交易会（广交会）每年春秋两季在广州举办，兼具实体展馆与线上平台功能，长期被视作观察全球采购需求变化的重要窗口。",
        passagePinyin: "Chuàngbàn yú yījiǔwǔqī nián de Zhōngguó Jìnchūkǒu Shāngpǐn Jiāoyìhuì (Guǎngjiāohuì) měinián chūnqiū liǎngjì zài Guǎngzhōu jǔbàn, jiānjù shítǐ zhǎnguǎn yǔ xiànshàng píngtái gōngnéng, chángqī bèi shìzuò guānchá quánqiú cǎigòu xūqiú biànhuà de zhòngyào chuāngkǒu.",
        summaryEn: "Held biannually in Guangzhou since 1957 in both physical and online formats, the Canton Fair functions as a premier barometer of global sourcing demand.",
        summaryVi: "Tổ chức hai kỳ xuân – thu tại Quảng Châu từ năm 1957 theo mô hình trực tiếp kết hợp trực tuyến, Hội chợ Quảng Châu là cửa sổ quan sát nhu cầu thu mua toàn cầu.",
        keyTermZh: "广交会", keyTermEn: "Canton Fair",
        quizPromptEn: "How often is the Canton Fair held each year?", quizPromptZh: "广交会每年举办几次？",
        optionsZh: ["每年春秋两季各一次", "每两年举办一次", "每月举办一次", "仅在冬季举办一次"], correctIdx: 0
      },
      {
        id: "hsk-eco-09", level: "HSK 7-9", topic: "economy",
        titleEn: "RCEP Cumulative Rules of Origin", titleVi: "Quy tắc xuất xứ cộng gộp trong RCEP",
        passageZh: "《区域全面经济伙伴关系协定》（RCEP）引入了统一的区域原产地累积规则，允许成员国企业在计算原产资格时合并计入来自其他成员国的中间投入品，从而深化亚洲产业链整合。",
        passagePinyin: "Qūyù Quánmiàn Jīngjì Huǒbàn Guānxì Xiédìng (RCEP) yǐnrù le tǒngyī de qūyù yuánchǎndì lěijī guīzé, yǔnxǔ chéngyuánguó qǐyè zài jìsuàn yuánchǎn zīgé shí hébìng jìrù láizì qítā chéngyuánguó de zhōngjiān tóurùpǐn, cóng'ér shēnhuà Yàzhōu chǎnyèliàn zhěnghé.",
        summaryEn: "RCEP's regional cumulation rules let firms aggregate intermediate inputs from across member states to qualify for preferential tariffs.",
        summaryVi: "Quy tắc cộng gộp xuất xứ của RCEP cho phép doanh nghiệp tính gộp nguyên liệu trung gian từ các nước thành viên để hưởng ưu đãi thuế quan.",
        keyTermZh: "原产地累积规则", keyTermEn: "cumulative rules of origin",
        quizPromptEn: "What do RCEP cumulative rules of origin permit enterprises to do?", quizPromptZh: "RCEP的原产地累积规则允许企业做什么？",
        optionsZh: ["合并计入其他成员国的中间投入品", "免除全部卫生检疫", "使用单一货币结算", "取消商业发票"], correctIdx: 0
      },
      {
        id: "hsk-eco-10", level: "HSK 7-9", topic: "economy",
        titleEn: "Smart Customs and Paperless Clearance", titleVi: "Hải quan thông minh và thông quan phi giấy tờ",
        passageZh: "随着国际贸易单一窗口与智慧海关建设推进，电子原产地证书核验、风险智能布控和提前申报机制显著压缩了口岸滞留时间，降低了跨境供应链的不确定性。",
        passagePinyin: "Suízhe guójì màoyì dānyī chuāngkǒu yǔ zhìhuì hǎiguān jiànshè tuījìn, diànzǐ yuánchǎndì zhèngshū héyàn, fēngxiǎn zhìnéng bùkòng hé tíqián shēnbào jīzhì xiǎnzhù yāsuō le kǒu'àn zhìliú shíjiān, jiàngdī le kuàjìng gōngyìngliàn de bùquèdìngxìng.",
        summaryEn: "Single-window trade portals, electronic C/O verification, and advance declarations shorten port dwell times and reduce cross-border uncertainty.",
        summaryVi: "Cơ chế Một cửa quốc gia, kiểm tra C/O điện tử và khai báo trước giúp rút ngắn thời gian lưu cảng và giảm rủi ro chuỗi cung ứng.",
        keyTermZh: "国际贸易单一窗口", keyTermEn: "International Trade Single Window",
        quizPromptEn: "What key operational outcome is achieved through smart customs mechanisms?", quizPromptZh: "智慧海关机制带来了哪项关键成效？",
        optionsZh: ["压缩口岸滞留时间并降低不确定性", "取消关税税率表", "替代所有国际航运公司", "取消商品HS编码"], correctIdx: 0
      },
      {
        id: "hsk-tcm-01", level: "HSK 4", topic: "tcm",
        titleEn: "Food and Medicine Sharing One Origin", titleVi: "Triết lý Dược thực đồng nguyên",
        passageZh: "中医养生文化中有药食同源的传统观念，认为生姜、红枣、山药和枸杞等常见食材既可日常烹调，也在传统食养中各有温凉偏性。",
        passagePinyin: "Zhōngyī yǎngshēng wénhuà zhōng yǒu yàoshí tóngyuán de chuántǒng guānniàn, rènwéi shēngjiāng, hóngzǎo, shānyào hé gǒuqǐ děng chángjiàn shícái jì kě rìcháng pēngtiáo, yě zài chuántǒng shíyǎng zhōng gèyǒu wēnliáng piānxìng.",
        summaryEn: "The classical concept of 'medicine and food sharing one origin' views everyday ingredients like ginger, jujube, and yam as having thermal properties in traditional dietetics.",
        summaryVi: "Quan niệm 'dược thực đồng nguyên' xem những nguyên liệu quen thuộc như gừng, táo đỏ, hoài sơn vừa là thực phẩm vừa mang tính ôn – lương trong thực dưỡng cổ truyền.",
        keyTermZh: "药食同源", keyTermEn: "medicine and food share the same origin",
        quizPromptEn: "What does 'yaoshi tongyuan' mean in traditional Chinese food culture?", quizPromptZh: "“药食同源”在传统饮食文化中指什么？",
        optionsZh: ["许多食材与传统药材同属一源且各有偏性", "日常吃饭可以完全替代医院治疗", "所有草药都可以生吃", "食物没有寒热属性之分"], correctIdx: 0
      },
      {
        id: "hsk-tcm-02", level: "HSK 4", topic: "tcm",
        titleEn: "Warm Water and Seasonal Living", titleVi: "Thói quen uống nước ấm và thuận mùa",
        passageZh: "在传统生活习惯中，许多中国人偏好饮用温开水，并讲究春生、夏长、秋收、冬藏，根据季节冷暖调整作息与饮食，以顺应自然节律。",
        passagePinyin: "Zài chuántǒng shēnghuó xíguàn zhōng, xǔduō Zhōngguórén piānhào yǐnyòng wēnkāishuǐ, bìng jiǎngjiu chūnshēng, xiàzhǎng, qiūshōu, dōngcáng, gēnjù jìjié lěngnuǎn tiáozhěng zuòxī yǔ yǐnshí, yǐ shùnyìng zìrán jiélǜ.",
        summaryEn: "Everyday Chinese wellness habits favor warm water and seasonal rhythm—aligning rest and diet with spring growth, summer flourishing, autumn harvest, and winter storage.",
        summaryVi: "Thói quen sinh hoạt truyền thống ưa chuộng nước ấm và nguyên lý xuân sinh, hạ trưởng, thu thu, đông tàng để điều chỉnh ăn ngủ thuận theo mùa.",
        keyTermZh: "顺应自然", keyTermEn: "harmonizing with natural rhythms",
        quizPromptEn: "What guides adjustments in rest and diet under this traditional concept?", quizPromptZh: "这种传统观念主张依据什么来调整作息与饮食？",
        optionsZh: ["季节冷暖与自然节律", "每天固定同一套菜谱", "全年只喝冰水", "完全熬夜工作"], correctIdx: 0
      },
      {
        id: "hsk-tcm-03", level: "HSK 5", topic: "tcm",
        titleEn: "The Yellow Emperor's Inner Canon", titleVi: "Hoàng Đế Nội Kinh",
        passageZh: "成书于先秦至汉代的《黄帝内经》是中医理论体系的奠基文献，由《素问》和《灵枢》两部分组成，系统阐述了阴阳五行、脏象经络与预防思想。",
        passagePinyin: "Chéngshū yú Xiānqín zhì Hàndài de Huángdì Nèijīng shì Zhōngyī lǐlùn tǐxì de diànjī wénxiàn, yóu Sùwèn hé Língshū liǎngbùfèn zǔchéng, xìtǒng chǎnshù le yīnyáng wǔxíng, zàngxiàng jīngluò yǔ yùfáng sīxiǎng.",
        summaryEn: "Compiled between the pre-Qin and Han eras, the Huangdi Neijing (Suwen and Lingshu) laid the theoretical foundations of classical Chinese medicine.",
        summaryVi: "Hoàng Đế Nội Kinh (gồm Tố Vấn và Linh Khu) hình thành từ Tiên Tần đến Hán, là nền tảng lý luận về âm dương ngũ hành, tạng tượng và kinh lạc.",
        keyTermZh: "黄帝内经", keyTermEn: "Yellow Emperor's Inner Canon",
        quizPromptEn: "Which two parts make up the Huangdi Neijing?", quizPromptZh: "《黄帝内经》由哪两部分组成？",
        optionsZh: ["《素问》和《灵枢》", "《史记》和《汉书》", "《论语》和《孟子》", "《伤寒论》和《本草纲目》"], correctIdx: 0
      },
      {
        id: "hsk-tcm-04", level: "HSK 5", topic: "tcm",
        titleEn: "Li Shizhen and the Compendium of Materia Medica", titleVi: "Lý Thời Trân và Bản Thảo Cương Mục",
        passageZh: "明代医药学家李时珍耗费近三十年实地考察与文献考订，编撰《本草纲目》，收录药物一千八百余种，是东亚自然史与传统本草学的重要典籍。",
        passagePinyin: "Míngdài yīyàoxuéjiā Lǐ Shízhēn hàofèi jìn sānshínián shídì kǎochá yǔ wénxiàn kǎodìng, biānzhuàn Běncǎo Gāngmù, shōulù yàowù yīqiān bābǎi yúzhǒng, shì Dōngyà zìránshǐ yǔ chuántǒng běncǎoxué de zhòngyào diǎnjí.",
        summaryEn: "Ming naturalist Li Shizhen spent nearly thirty years compiling the Bencao Gangmu, cataloging over 1,800 medicinal substances in a landmark work of East Asian natural history.",
        summaryVi: "Lý Thời Trân dành gần ba mươi năm khảo sát thực địa và biên soạn Bản Thảo Cương Mục gồm hơn 1.800 vị thuốc, trở thành kinh điển dược thảo học và lịch sử tự nhiên Đông Á.",
        keyTermZh: "本草纲目", keyTermEn: "Compendium of Materia Medica",
        quizPromptEn: "How did Li Shizhen compile the Bencao Gangmu?", quizPromptZh: "李时珍编撰《本草纲目》采用了什么方法？",
        optionsZh: ["实地考察与文献考订相结合", "仅凭个人口头回忆", "直接翻译欧洲药典", "只收录矿物材料"], correctIdx: 0
      },
      {
        id: "hsk-tcm-05", level: "HSK 5", topic: "tcm",
        titleEn: "The Four Diagnostic Methods in Classical History", titleVi: "Tứ chẩn trong y học cổ truyền",
        passageZh: "传统中医临床观察概括为望、闻、问、切四诊。医师通过观察神色舌象、听声辨气、询问病史与切按脉象，综合判断整体状态。",
        passagePinyin: "Chuántǒng Zhōngyī línchuáng guānchá gàikuò wéi wàng, wén, wèn, qiè sìzhěn. Yīshī tōngguò guānchá shénsè shéxiàng, tīngshēng biànqì, xúnwèn bìngshǐ yǔ qiè'àn màixiàng, zōnghé pànduàn zhěngtǐ zhuàngtài.",
        summaryEn: "Classical TCM observation rests on four methods—inspection, listening/smelling, inquiry, and palpation—synthesized to assess the whole person.",
        summaryVi: "Tứ chẩn gồm vọng (nhìn), văn (nghe – ngửi), vấn (hỏi) và thiết (bắt mạch), được phối hợp đồng bộ để đánh giá tổng thể trạng thái cơ thể.",
        keyTermZh: "望闻问切", keyTermEn: "the four diagnostic methods",
        quizPromptEn: "Which action corresponds to 'qie' (切) in the four methods?", quizPromptZh: "四诊中的“切”主要指哪一项检查方式？",
        optionsZh: ["切按脉象", "观察舌苔颜色", "询问饮食起居", "听呼吸声音"], correctIdx: 0
      },
      {
        id: "hsk-tcm-06", level: "HSK 6", topic: "tcm",
        titleEn: "Preventive Philosophy of Zhi Weibing", titleVi: "Tư tưởng dự phòng Trị Vị Bệnh",
        passageZh: "《黄帝内经》提出上工治未病，主张在失衡尚未演变为明显器质性疾病之前，通过调节情志、饮食与劳逸来维护健康，这一理念与现代预防医学相呼应。",
        passagePinyin: "Huángdì Nèijīng tíchū shànggōng zhì wèibìng, zhǔzhāng zài shīhéng shàngwèi yǎnbiàn wéi míngxiǎn qìzhìxìng jíbìng zhīqián, tōngguò tiáojié qíngzhì, yǐnshí yǔ láoyì lái wéihù jiànkāng, zhè yī lǐniàn yǔ xiàndài yùfáng yīxué xiānghūyìng.",
        summaryEn: "'Treating disease before it manifests' emphasizes lifestyle balance in emotion, diet, and rest—resonating conceptually with modern preventive medicine.",
        summaryVi: "Quan điểm 'Thượng công trị vị bệnh' coi trọng điều hòa tinh thần, ăn uống và nghỉ ngơi từ sớm, có điểm gặp gỡ về tư duy với y học dự phòng hiện đại.",
        keyTermZh: "治未病", keyTermEn: "preventive care before illness manifests",
        quizPromptEn: "What modern field resonates conceptually with 'zhi weibing'?", quizPromptZh: "“治未病”的理念与现代哪一学科相呼应？",
        optionsZh: ["现代预防医学", "外科急诊手术", "法医鉴定学", "航空工程学"], correctIdx: 0
      },
      {
        id: "hsk-tcm-07", level: "HSK 6", topic: "tcm",
        titleEn: "Acupuncture and UNESCO Cultural Heritage", titleVi: "Châm cứu và Di sản Văn hóa Phi vật thể UNESCO",
        passageZh: "中医针灸通过刺激体表特定穴位调节机体功能，于2010年被列入联合国教科文组织人类非物质文化遗产代表作名录。在现代临床中，针灸须由具备执业资格的医师规范操作。",
        passagePinyin: "Zhōngyī zhēnjiǔ tōngguò cìjī tǐbiǎo tèdìng xuéwèi tiáojié jītǐ gōngnéng, yú èrlíngyīlíng nián bèi lièrù Liánhéguó Jiàokēwén Zǔzhī Rénlèi Fēiwùzhì Wénhuà Yíchǎn Dàibiǎozuò Mínglù. Zài xiàndài línchuáng zhōng, zhēnjiǔ xū yóu jùbèi zhíyè zīgé de yīshī guīfàn cāozuò.",
        summaryEn: "Inscribed by UNESCO in 2010, traditional acupuncture stimulates specific body points and in modern practice must be performed strictly by licensed clinicians.",
        summaryVi: "Châm cứu được UNESCO ghi danh năm 2010, tác động lên huyệt vị cơ thể và trong thực hành hiện đại bắt buộc phải do bác sĩ có chứng chỉ hành nghề thực hiện.",
        keyTermZh: "中医针灸", keyTermEn: "traditional Chinese acupuncture and moxibustion",
        quizPromptEn: "Who should perform acupuncture in modern clinical settings?", quizPromptZh: "在现代临床中，针灸应当由谁来操作？",
        optionsZh: ["具备执业资格的医师", "任何自学爱好者", "普通餐厅服务员", "未经培训的游客"], correctIdx: 0
      },
      {
        id: "hsk-tcm-08", level: "HSK 6", topic: "tcm",
        titleEn: "Tu Youyou and Artemisinin Research", titleVi: "Đồ U U và công trình Thanh hao tố",
        passageZh: "中国科学家屠呦呦从东晋葛洪《肘后备急方》的青蒿绞汁记载中获得灵感，结合现代化学低温萃取与严格临床验证，成功提取青蒿素，荣获2015年诺贝尔生理学或医学奖。",
        passagePinyin: "Zhōngguó kēxuéjiā Tú Yōuyōu cóng Dōngjìn Gé Hóng Zhǒuhòu Bèijífāng de qīnghāo jiǎozhī jìzǎi zhōng huòdé línggǎn, jiéhé xiàndài huàxué dīwēn cuìqǔ yǔ yángé línchuáng yànzhèng, chénggōng tíqǔ qīnghāosù, rónghuò èrlíngyīwǔ nián Nuòbèi'ěr Shēnglǐxué huò Yīxuéjiǎng.",
        summaryEn: "Inspired by Ge Hong's fourth-century text, Tu Youyou combined low-temperature extraction and modern clinical trials to isolate artemisinin, winning the 2015 Nobel Prize.",
        summaryVi: "Từ ghi chép cổ của Cát Hồng đời Đông Tấn, Đồ U U kết hợp chiết xuất hóa học nhiệt độ thấp và thử nghiệm lâm sàng hiện đại để tìm ra artemisinin, đạt giải Nobel năm 2015.",
        keyTermZh: "青蒿素", keyTermEn: "artemisinin",
        quizPromptEn: "What combination led to the discovery and validation of artemisinin?", quizPromptZh: "青蒿素的成功研发结合了哪两方面？",
        optionsZh: ["古籍灵感与现代化学萃取、严格临床验证", "单纯背诵古代药方", "仅靠民间传说", "无需实验直接投产"], correctIdx: 0
      },
      {
        id: "hsk-tcm-09", level: "HSK 7-9", topic: "tcm",
        titleEn: "Syndrome Differentiation (Bianzheng Lunzhi)", titleVi: "Nguyên lý Biện chứng luận trị",
        passageZh: "辨证论治是传统中医的核心思维特征，强调同病异治、异病同治，即依据个体体质、季节环境与证候组合制定差异化方案，而非机械套用单一标签。",
        passagePinyin: "Biànzhèng lùnzhì shì chuántǒng Zhōngyī de héxīn sīwéi tèzhēng, qiángdiào tóngbìng yìzhì, yìbìng tóngzhì, jí yījù gètǐ tǐzhì, jìjié huánjìng yǔ zhènghòu zǔhé zhìdìng chāyìhuà fāng'àn, ér fēi jīxiè tàoyòng dānyī biāoqiān.",
        summaryEn: "Pattern differentiation tailors classical approaches to individual constitution, season, and symptom clusters rather than applying rigid one-size-fits-all labels.",
        summaryVi: "Biện chứng luận trị là cốt lõi tư duy Đông y, xem xét tổng hòa thể chất cá nhân, mùa khí hậu và tổ hợp chứng hậu thay vì áp dụng công thức cứng nhắc.",
        keyTermZh: "辨证论治", keyTermEn: "pattern differentiation and treatment determination",
        quizPromptEn: "What factors are weighed in 'bianzheng lunzhi'?", quizPromptZh: "辨证论治主要综合依据哪些因素？",
        optionsZh: ["个体体质、季节环境与证候组合", "仅仅依靠年龄数字", "只看单一症状名称", "完全忽视季节变化"], correctIdx: 0
      },
      {
        id: "hsk-tcm-10", level: "HSK 7-9", topic: "tcm",
        titleEn: "Baduanjin and Traditional Mind–Body Movement", titleVi: "Bát Đoạn Cẩm và dưỡng sinh vận động cổ truyền",
        passageZh: "起源于宋代的八段锦由八组舒缓连贯的伸展动作组成，注重呼吸吐纳与脊柱舒展。作为温和的传统导引健身法，它如今在高校与社区广泛流行。",
        passagePinyin: "Qǐyuán yú Sòngdài de Bāduànjǐn yóu bāzǔ shūhuǎn liánguàn de shēnzhǎn dòngzuò zǔchéng, zhùzhòng hūxī tǔnà yǔ jǐzhù shūzhǎn. Zuòwéi wēnhé de chuántǒng dǎoyǐn jiànshēnfǎ, tā rújīn zài gāoxiào yǔ shèqū guǎngfàn liúxíng.",
        summaryEn: "Originating in the Song dynasty, Baduanjin pairs eight gentle stretching sequences with mindful breathing, remaining popular on campuses and in parks today.",
        summaryVi: "Khởi nguồn từ đời Tống, Bát Đoạn Cẩm gồm tám thức vận động nhẹ nhàng kết hợp điều khí và kéo giãn cột sống, nay rất phổ biến trong trường học và cộng đồng.",
        keyTermZh: "八段锦", keyTermEn: "Eight-Section Brocade exercise",
        quizPromptEn: "Which two elements are emphasized in practicing Baduanjin?", quizPromptZh: "练习八段锦主要注重哪两个方面？",
        optionsZh: ["呼吸吐纳与脊柱舒展", "高强度负重冲刺", "长时间屏气潜水", "激烈对抗搏击"], correctIdx: 0
      },
      {
        id: "hsk-cam-01", level: "HSK 4", topic: "campus",
        titleEn: "Campus Smart Card and Canteen Life", titleVi: "Thẻ sinh viên thông minh và nhà ăn đại học",
        passageZh: "在中国大学校园里，校园一卡通非常方便，既可用于食堂就餐、图书馆借书，也可进出宿舍楼和乘坐校车。各校食堂通常菜品丰富且价格亲民。",
        passagePinyin: "Zài Zhōngguó dàxué xiàoyuán lǐ, xiàoyuán yīkǎtōng fēicháng fāngbiàn, jì kě yòngyú shítáng jiùcān, túshūguǎn jièshū, yě kě jìnchū sùshèlóu hé chéngzuò xiàochē. Gèxiào shítáng tōngcháng càipǐn fēngfù qiě jiàgé qīnmín.",
        summaryEn: "A Chinese university smart card integrates canteen dining, library borrowing, dormitory access, and campus shuttles.",
        summaryVi: "Thẻ nhất-thẻ-thông trong đại học Trung Quốc tích hợp ăn uống tại căng-tin, mượn sách thư viện, ra vào ký túc xá và đi xe buýt nội khu.",
        keyTermZh: "校园一卡通", keyTermEn: "all-in-one campus smart card",
        quizPromptEn: "Which of the following is NOT listed as a function of the campus smart card?", quizPromptZh: "以下哪项不是文中提到的校园一卡通功能？",
        optionsZh: ["食堂就餐", "图书馆借书", "办理国际签证", "进出宿舍楼"], correctIdx: 2
      },
      {
        id: "hsk-cam-02", level: "HSK 4", topic: "campus",
        titleEn: "Selecting Courses and Credit Systems", titleVi: "Đăng ký tín chỉ và học phần tự chọn",
        passageZh: "新学期开始前，学生需在教务系统上完成选课。课程一般分为必修课与选修课，合理搭配专业课与汉语实践课，有助于保持稳定的绩点表现。",
        passagePinyin: "Xīnxuéqī kāishǐ qián, xuésheng xū zài jiàowù xìtǒng shàng wánchéng xuǎnkè. Kèchéng yībān fēnwéi bìxiūkè yǔ xuǎnxiūkè, hélǐ dāpèi zhuānyèkè yǔ Hànyǔ shíjiànkè, yǒuzhùyú bǎochí wěndìng de jìdiǎn biǎoxiàn.",
        summaryEn: "Before each semester, students register for compulsory and elective courses via the academic portal to balance major requirements and GPA.",
        summaryVi: "Trước học kỳ mới, sinh viên đăng ký học phần bắt buộc và tự chọn trên hệ thống giáo vụ để cân đối khối lượng chuyên ngành và điểm trung bình.",
        keyTermZh: "教务系统", keyTermEn: "academic affairs portal",
        quizPromptEn: "Where do students complete course registration before a new term?", quizPromptZh: "学生通常在哪里完成新学期的选课？",
        optionsZh: ["教务系统", "快递驿站", "体育馆前台", "校医院挂号处"], correctIdx: 0
      },
      {
        id: "hsk-cam-03", level: "HSK 5", topic: "campus",
        titleEn: "Communicating with an Academic Supervisor", titleVi: "Trao đổi học thuật với giảng viên hướng dẫn",
        passageZh: "申请硕博项目时，提前向目标导师发送套磁信是常见做法。邮件应当简明介绍个人研究背景、已读过导师的代表论文，以及双方契合的研究问题。",
        passagePinyin: "Shēnqǐng shuòbó xiàngmù shí, tíqián xiàng mùbiāo dǎoshī fāsòng tàocíxìn shì chángjiàn zuòfǎ. Yóujiàn yīngdāng jiǎnmíng jièshào gèrén yánjiū bèijǐng, yǐ dúguò dǎoshī de dàibiǎo lùnwén, yǐjí shuāngfāng qìhé de yánjiū wèntí.",
        summaryEn: "When contacting a prospective graduate advisor, concise outreach emails should summarize your background, reference their key papers, and propose aligned research questions.",
        summaryVi: "Thư liên hệ giảng viên hướng dẫn bậc sau đại học nên trình bày gọn gàng nền tảng nghiên cứu, bài báo tiêu biểu của thầy cô đã đọc và hướng đề tài tương thích.",
        keyTermZh: "套磁信", keyTermEn: "prospective supervisor outreach email",
        quizPromptEn: "What should a strong supervisor outreach email include?", quizPromptZh: "一封高质量的套磁信应当包含哪些内容？",
        optionsZh: ["研究背景、导师代表论文与契合的研究问题", "只附上一句问候语", "群发相同模板且不写导师姓名", "只询问奖学金金额"], correctIdx: 0
      },
      {
        id: "hsk-cam-04", level: "HSK 5", topic: "campus",
        titleEn: "Using CNKI for Chinese Literature Reviews", titleVi: "Tra cứu học liệu Trung văn trên CNKI",
        passageZh: "中国知网（CNKI）是检索中文核心期刊与硕博学位论文的重要数据库。撰写综述时，结合英文国际期刊与中文一手文献，能够显著提升跨区域研究的深度。",
        passagePinyin: "Zhōngguó Zhīwǎng (CNKI) shì jiǎnsuǒ Zhōngwén héxīn qīkān yǔ shuòbó xuéwèi lùnwén de zhòngyào shùjùkù. Zhuànxiě zōngshù shí, jiéhé Yīngwén guójì qīkān yǔ Zhōngwén yīshǒu wénxiàn, nénggòu xiǎnzhù tíshēng kuàqūyù yánjiū de shēndù.",
        summaryEn: "CNKI indexes core Chinese journals and theses; pairing Chinese primary literature with English international journals deepens cross-regional scholarship.",
        summaryVi: "CNKI là cơ sở dữ liệu tạp chí lõi và luận văn Trung văn trọng yếu; kết hợp học liệu Trung văn và tạp chí quốc tế tiếng Anh giúp nâng cao chiều sâu nghiên cứu.",
        keyTermZh: "中国知网", keyTermEn: "China National Knowledge Infrastructure (CNKI)",
        quizPromptEn: "How can students strengthen cross-regional literature reviews?", quizPromptZh: "撰写跨区域文献综述时怎样显著提升研究深度？",
        optionsZh: ["结合英文国际期刊与中文一手文献", "只引用社交媒体短评", "只看一篇文章的摘要", "避免查阅核心期刊"], correctIdx: 0
      },
      {
        id: "hsk-cam-05", level: "HSK 5", topic: "campus",
        titleEn: "Annual Scholarship Review Standards", titleVi: "Kỳ đánh giá học bổng thường niên",
        passageZh: "获得中国政府奖学金或省市奖学金的留学生，每年须参加年度评审。评审主要考察学业成绩、出勤纪律与导师评价，合格者方可继续享受下一学年资助。",
        passagePinyin: "Huòdé Zhōngguó Zhèngfǔ Jiǎngxuéjīn huò shěngshì jiǎngxuéjīn de liúxuésheng, měinián xū cānjiā niándù píngshěn. Píngshěn zhǔyào kǎochá xuéyè chéngjì, chūqín jìlǜ yǔ dǎoshī píngjià, hégézhě fāngkě jìxù xiǎngshòu xiàyī xuénián zīzhù.",
        summaryEn: "Scholarship recipients undergo an annual review evaluating grades, attendance, and advisor feedback to renew funding for the next academic year.",
        summaryVi: "Lưu học sinh nhận học bổng cần vượt qua kỳ đánh giá thường niên về học lực, chuyên cần và nhận xét của giảng viên để duy trì tài trợ năm tiếp theo.",
        keyTermZh: "年度评审", keyTermEn: "annual scholarship review",
        quizPromptEn: "Which three criteria are primarily assessed in the annual scholarship review?", quizPromptZh: "奖学金年度评审主要考察哪三项内容？",
        optionsZh: ["学业成绩、出勤纪律与导师评价", "社交媒体粉丝数量", "校园社团任职次数", "旅游城市数量"], correctIdx: 0
      },
      {
        id: "hsk-cam-06", level: "HSK 6", topic: "campus",
        titleEn: "Academic Integrity and Citation Ethics", titleVi: "Liêm chính học thuật và chuẩn mực trích dẫn",
        passageZh: "中国重点高校高度重视学术规范，毕业论文均须通过查重检测与盲审答辩。无论引用中文还是英文文献，都必须准确标注出处，严禁抄袭与数据造假。",
        passagePinyin: "Zhōngguó zhòngdiǎn gāoxiào gāodù zhòngshì xuéshù guīfàn, bìyè lùnwén jūn xū tōngguò cháchóng jiǎncè yǔ mángshěn dábiàn. Wúlùn yǐnyòng Zhōngwén háishì Yīngwén wénxiàn, dōu bìxū zhǔnquè biāozhù chūchù, yánjìn chāoxí yǔ shùjù zàojiǎ.",
        summaryEn: "Leading Chinese universities enforce strict plagiarism checks, blind peer reviews, and accurate citation across both Chinese and English sources.",
        summaryVi: "Các đại học trọng điểm Trung Quốc kiểm soát chặt chẽ đạo văn, phản biện kín và chuẩn mực trích dẫn nguồn đối với cả học liệu Trung và Anh.",
        keyTermZh: "盲审答辩", keyTermEn: "blind review and thesis defense",
        quizPromptEn: "What verification steps must graduation theses pass at key universities?", quizPromptZh: "重点高校的毕业论文通常须通过哪些学术审核环节？",
        optionsZh: ["查重检测与盲审答辩", "仅由同学口头投票", "无需标注参考文献", "只需提交三页提纲"], correctIdx: 0
      },
      {
        id: "hsk-cam-07", level: "HSK 6", topic: "campus",
        titleEn: "Understanding Double First-Class Universities", titleVi: "Hệ thống đại học Song Nhất Lưu",
        passageZh: "双一流建设指世界一流大学和一流学科建设，采用动态调整机制，既涵盖传统985与211名校，也支持在语言、财经、中医药等特色学科领先的高校发展。",
        passagePinyin: "Shuāngyīliú jiànshè zhǐ shìjiè yīliú dàxué hé yīliú xuékē jiànshè, cǎiyòng dòngtài tiáozhěng jīzhì, jì hángài chuántǒng jiǔbāwǔ yǔ èryāoyāo míngxiào, yě zhīchí zài yǔyán, cáijīng, Zhōngyīyào děng tèsè xuékē lǐngxiān de gāoxiào fāzhǎn.",
        summaryEn: "The Double First-Class initiative dynamically supports both comprehensive flagship universities and specialized leaders in languages, finance, and TCM.",
        summaryVi: "Chương trình Song Nhất Lưu áp dụng cơ chế điều chỉnh linh hoạt, bao gồm cả đại học tổng hợp hàng đầu lẫn các trường mạnh về ngôn ngữ, tài chính và y học cổ truyền.",
        keyTermZh: "双一流", keyTermEn: "Double First-Class initiative",
        quizPromptEn: "What makes the Double First-Class framework distinct from static rankings?", quizPromptZh: "“双一流”建设机制的一个突出特点是什么？",
        optionsZh: ["采用动态调整机制并支持特色一流学科", "只收录理工科院校", "永不更新入选名单", "仅面向本科一年级"], correctIdx: 0
      },
      {
        id: "hsk-cam-08", level: "HSK 6", topic: "campus",
        titleEn: "Campus Seminars and Group Discussion Etiquette", titleVi: "Hội thảo học thuật và thảo luận nhóm tại lớp",
        passageZh: "在研究生研讨课（Seminar）中，学生需提前精读文献并制作汇报幻灯片。提问环节应围绕研究方法、样本边界与论证逻辑展开，以建设性对话推动思考。",
        passagePinyin: "Zài yánjiūshēng yántǎokè zhōng, xuésheng xū tíqián jīngdú wénxiàn bìng zhìzuò huìbào huàndēngpiàn. Tíwèn huánjié yīng wéirào yánjiū fāngfǎ, yàngběn biānjiè yǔ lùnzhèng luójí zhǎnkāi, yǐ jiànshèxìng duìhuà tuīdòng sīkǎo.",
        summaryEn: "Graduate seminars require close pre-reading, structured slides, and constructive Q&A focused on methodology, sample scope, and logical rigor.",
        summaryVi: "Lớp hội thảo sau đại học đòi hỏi đọc sâu tài liệu trước buổi học và đặt câu hỏi mang tính xây dựng về phương pháp, phạm vi mẫu và logic lập luận.",
        keyTermZh: "研讨课", keyTermEn: "academic seminar",
        quizPromptEn: "What should seminar Q&A primarily focus on?", quizPromptZh: "研究生研讨课的提问环节应主要围绕什么展开？",
        optionsZh: ["研究方法、样本边界与论证逻辑", "汇报人的服装颜色", "无关的个人隐私", "纯情绪化争论"], correctIdx: 0
      },
      {
        id: "hsk-cam-09", level: "HSK 7-9", topic: "campus",
        titleEn: "Structuring a Competitive Study Plan", titleVi: "Cấu trúc bản Kế hoạch Học tập thuyết phục",
        passageZh: "一份具说服力的学习计划应形成清晰闭环：先阐明个人学术积淀，再提出具体可行的研究问题与方法，接着说明目标院校的师资匹配度，最后展望毕业后的跨国职业贡献。",
        passagePinyin: "Yīfèn jù shuōfúlì de xuéxí jìhuà yīng xíngchéng qīngxī bìhuán: xiān chǎnmíng gèrén xuéshù jīdiàn, zài tíchū jùtǐ kěxíng de yánjiū wèntí yǔ fāngfǎ, jiēzhe shuōmíng mùbiāo yuànxiào de shīzī pǐpèidù, zuìhòu zhǎnwàng bìyè hòu de kuàguó zhíyè gòngxiàn.",
        summaryEn: "A compelling Study Plan connects prior preparation, feasible research methods, faculty alignment, and post-graduation international impact in a logical arc.",
        summaryVi: "Một bản Study Plan thuyết phục cần kết nối mạch lạc giữa nền tảng học thuật, câu hỏi và phương pháp nghiên cứu, mức độ phù hợp giảng viên và định hướng nghề nghiệp sau tốt nghiệp.",
        keyTermZh: "学习计划", keyTermEn: "Study Plan / Research Proposal",
        quizPromptEn: "Which sequence forms a logical closed loop in a Study Plan?", quizPromptZh: "一份具说服力的学习计划应包含怎样的逻辑顺序？",
        optionsZh: ["学术积淀→研究问题与方法→院校师资匹配→毕业规划", "只列举旅游城市愿望清单", "仅抄写学校官网简介", "只谈个人业余爱好"], correctIdx: 0
      },
      {
        id: "hsk-cam-10", level: "HSK 7-9", topic: "campus",
        titleEn: "Bilingual Edge in Sino–European Careers", titleVi: "Lợi thế song ngữ trong sự nghiệp Âu–Trung",
        passageZh: "留华毕业生若在精进中文的同时持续保持高水准学术与商务英语，在跨国航运、供应链合规与国际商法领域往往具备稀缺的复合竞争力，能够顺畅衔接亚洲制造端与欧洲市场端。",
        passagePinyin: "Liú-Huá bìyèshēng ruò zài jīngjìn Zhōngwén de tóngshí chíxù bǎochí gāoshuǐzhǔn xuéshù yǔ shāngwù Yīngyǔ, zài kuàguó hángyùn, gōngyìngliàn héguī yǔ guójì shāngfǎ lǐngyù wǎngwǎng jùbèi xīquē de fùhé jìngzhēnglì, nénggòu shùnchàng xiánjiē Yàzhōu zhìzàoduān yǔ Ōuzhōu shìchǎngduān.",
        summaryEn: "Graduates who maintain strong academic and business English alongside Chinese gain rare dual-corridor competitiveness linking Asian manufacturing and European markets.",
        summaryVi: "Sinh viên du học Trung Quốc giữ vững tiếng Anh học thuật – thương mại song song với tiếng Trung sẽ sở hữu lợi thế hiếm có trong chuỗi cung ứng và thương mại kết nối Á – Âu.",
        keyTermZh: "复合竞争力", keyTermEn: "interdisciplinary composite competitiveness",
        quizPromptEn: "How do graduates maximize their bilingual advantage in global supply chains?", quizPromptZh: "留华毕业生如何最大化自身在跨国供应链中的语言优势？",
        optionsZh: ["精进中文的同时保持高水准学术与商务英语", "放弃英语只学单一语言", "只学习口语不读专业文件", "避免接触国际商法术语"], correctIdx: 0
      }
    ],
    tcmDeepStudy: {
      disclaimerVi: "Tri thức trình bày theo góc độ văn hóa – lịch sử y học cổ truyền, không dùng để tự chẩn đoán hay điều trị bệnh.",
      disclaimerEn: "Educational cultural and historical TCM reference only; not a substitute for professional medical diagnosis.",
      constitutions9: [
        {
          id: "const-pinghe", zh: "平和质", pinyin: "Pínghézhì", enName: "Balanced Constitution", viName: "Thể Bình hòa",
          featuresVi: "Âm dương khí huyết hài hòa, tinh thần tỉnh táo, sắc mặt nhuận, ăn ngủ đều đặn và thích nghi tốt với thay đổi thời tiết.",
          featuresEn: "Harmonious Yin-Yang and Qi-Blood balance, steady energy, clear complexion, regular sleep and appetite, and smooth seasonal adaptability.",
          foodSuggestionVi: "Duy trì khẩu phần đa dạng ngũ cốc, rau củ theo mùa, tránh ăn quá lạnh hoặc quá cay nóng kéo dài."
        },
        {
          id: "const-qixu", zh: "气虚质", pinyin: "Qìxūzhì", enName: "Qi-Deficiency Constitution", viName: "Thể Khí hư",
          featuresVi: "Nguyên khí suy giảm trong mô tả cổ truyền, thường dễ mệt khi gắng sức, tiếng nói nhỏ, dễ ra mồ hôi nhẹ và nhạy cảm với gió lạnh.",
          featuresEn: "Classically characterized by depleted vital energy, quick fatigue on exertion, soft voice, spontaneous light perspiration, and sensitivity to drafts.",
          foodSuggestionVi: "Thực dưỡng cổ truyền chuộng vị ngọt dịu, tính bình – ấm như hoài sơn, táo đỏ, hạt sen, gạo nếp, thịt gà hầm nhẹ."
        },
        {
          id: "const-yangxu", zh: "阳虚质", pinyin: "Yángxūzhì", enName: "Yang-Deficiency Constitution", viName: "Thể Dương hư",
          featuresVi: "Thiếu hỏa lực ôn ấm, thường sợ lạnh, tay chân dễ mát, ưa đồ ăn uống ấm nóng và kém thoải mái trong mùa đông hoặc phòng điều hòa sâu.",
          featuresEn: "Marked by diminished warming Yang energy, cold hands and feet, preference for warm meals and drinks, and discomfort in cold or air-conditioned spaces.",
          foodSuggestionVi: "Ưu tiên nguyên liệu tính ôn như gừng tươi, quế chi lượng nhỏ, hành tỏi, thịt cừu hoặc cháo ấm; hạn chế đồ sống lạnh."
        },
        {
          id: "const-yinxu", zh: "阴虚质", pinyin: "Yīnxūzhì", enName: "Yin-Deficiency Constitution", viName: "Thể Âm hư",
          featuresVi: "Tân dịch và phần âm thiên thiếu, hay cảm thấy khô miệng họng, lòng bàn tay chân ấm nóng, khó chịu thời tiết hanh khô.",
          featuresEn: "Associated with insufficient cooling Yin fluids, dry throat or mouth, warm palms and soles, and sensitivity to dry heat.",
          foodSuggestionVi: "Thực dưỡng truyền thống ưa vị thanh nhuận như lê hấp, ngân nhĩ (mộc nhĩ trắng), bách hợp, mè đen, đậu xanh; giảm đồ chiên cay."
        },
        {
          id: "const-tanshi", zh: "痰湿质", pinyin: "Tánshīzhì", enName: "Phlegm-Dampness Constitution", viName: "Thể Đàm thấp",
          featuresVi: "Vận hóa thủy thấp chậm theo quan niệm cổ truyền, cảm giác cơ thể nặng nề, da dễ tiết dầu, kém thoải mái vào mùa mưa ẩm.",
          featuresEn: "Linked to sluggish fluid transformation, bodily heaviness, oilier skin, and sluggishness during humid or rainy seasons.",
          foodSuggestionVi: "Chọn món thanh đạm, ít đường dầu như ý dĩ, đậu đỏ, bí đao, trần bì, trà phổ nhĩ chín hoặc trà xanh ấm."
        },
        {
          id: "const-shire", zh: "湿热质", pinyin: "Shīrèzhì", enName: "Damp-Heat Constitution", viName: "Thể Thấp nhiệt",
          featuresVi: "Thấp và nhiệt tích tụ song hành, thường dễ bóng dầu vùng mặt, cảm giác miệng đắng hoặc dính, khó chịu khi trời nóng ẩm.",
          featuresEn: "Reflects combined dampness and internal heat, often noted with facial oiliness, bitter or sticky mouth feel, and discomfort in muggy heat.",
          foodSuggestionVi: "Ưa nguyên liệu thanh nhiệt trừ thấp như mướp đắng, đậu xanh, ngó sen, trà hoa cúc, rau cần; hạn chế rượu bia và đồ cay dầu."
        },
        {
          id: "const-xueyu", zh: "血瘀质", pinyin: "Xuèyūzhì", enName: "Blood-Stasis Constitution", viName: "Thể Huyết ứ",
          featuresVi: "Khí huyết vận hành kém thông suốt trong hệ hình cổ truyền, sắc da có xu hướng trầm, nhạy cảm với lạnh và ít vận động kéo dài.",
          featuresEn: "Described classically as sluggish circulation of Qi and Blood, duller complexion, and heightened discomfort under cold or sedentary routines.",
          foodSuggestionVi: "Thực dưỡng truyền thống dùng sơn tra, mộc nhĩ đen, trà hoa hồng, gừng nghệ lượng vừa phải kết hợp vận động đều đặn."
        },
        {
          id: "const-qiyu", zh: "气郁质", pinyin: "Qìyùzhì", enName: "Qi-Stagnation Constitution", viName: "Thể Khí uất",
          featuresVi: "Khí cơ sơ tiết kém linh hoạt, dễ cảm thấy căng thẳng, nhạy cảm với áp lực tinh thần và thay đổi thời tiết u ám.",
          featuresEn: "Associated with constrained Qi flow, heightened sensitivity to emotional stress, tension, and overcast weather.",
          foodSuggestionVi: "Ưu tiên hương thơm sơ can nhẹ nhàng như trà hoa nhài, trần bì, kim quất, củ cải trắng, kết hợp đi bộ ngoài trời và hít thở sâu."
        },
        {
          id: "const-tebing", zh: "特禀质", pinyin: "Tèbǐngzhì", enName: "Inherited Special Constitution", viName: "Thể Đặc bẩm",
          featuresVi: "Cơ địa nhạy cảm mang tính bẩm sinh theo phân loại học thuật cổ truyền, dễ phản ứng mạnh trước phấn hoa, thời tiết giao mùa hoặc một số thực phẩm đặc thù.",
          featuresEn: "Represents innate hypersensitivity to environmental triggers such as pollen, seasonal shifts, or specific foods.",
          foodSuggestionVi: "Ăn uống thanh đạm, ghi nhật ký thực phẩm để tránh tác nhân dễ gây phản ứng; mọi vấn đề dị ứng cần theo tư vấn bác sĩ chuyên khoa."
        }
      ],
      ziwuLiuzhu12: [
        { id: "zw-01", branchZh: "子时", branchVi: "Giờ Tý", hours: "23:00–01:00", meridianZh: "足少阳胆经", meridianVi: "Kinh Đởm", meridianEn: "Gallbladder Meridian", rhythmVi: "Dương khí mới chớm sinh; nhịp cổ truyền nhấn mạnh đi ngủ sâu trước nửa đêm.", rhythmEn: "Yang begins to stir; classical hygiene prioritizes deep sleep before midnight." },
        { id: "zw-02", branchZh: "丑时", branchVi: "Giờ Sửu", hours: "01:00–03:00", meridianZh: "足厥阴肝经", meridianVi: "Kinh Can", meridianEn: "Liver Meridian", rhythmVi: "Giai đoạn tàng huyết và phục hồi tĩnh tại; tránh thức khuya căng thẳng.", rhythmEn: "Classically linked to storing blood and restorative rest; late-night strain is discouraged." },
        { id: "zw-03", branchZh: "寅时", branchVi: "Giờ Dần", hours: "03:00–05:00", meridianZh: "手太阴肺经", meridianVi: "Kinh Phế", meridianEn: "Lung Meridian", rhythmVi: "Khí huyết phân bố toàn thân vào rạng sáng; giữ ấm cơ thể trong giấc ngủ sâu.", rhythmEn: "Early pre-dawn transition when Qi redistributes; keeping warm in restful sleep is emphasized." },
        { id: "zw-04", branchZh: "卯时", branchVi: "Giờ Mão", hours: "05:00–07:00", meridianZh: "手阳明大肠经", meridianVi: "Kinh Đại Trường", meridianEn: "Large Intestine Meridian", rhythmVi: "Bình minh thức dậy, uống một cốc nước ấm và bài tiết điều độ.", rhythmEn: "Waking with dawn, drinking warm water, and establishing regular morning elimination." },
        { id: "zw-05", branchZh: "辰时", branchVi: "Giờ Thìn", hours: "07:00–09:00", meridianZh: "足阳明胃经", meridianVi: "Kinh Vị", meridianEn: "Stomach Meridian", rhythmVi: "Khung giờ tiêu hóa thuận lợi nhất buổi sáng; ưu tiên bữa sáng ấm nóng, đủ chất.", rhythmEn: "Prime morning digestive window; a warm, balanced breakfast is classically advised." },
        { id: "zw-06", branchZh: "巳时", branchVi: "Giờ Tỵ", hours: "09:00–11:00", meridianZh: "足太阴脾经", meridianVi: "Kinh Tỳ", meridianEn: "Spleen Meridian", rhythmVi: "Tỳ vận hóa dinh dưỡng và hỗ trợ sự tập trung; phù hợp cho học tập và làm việc chuyên sâu.", rhythmEn: "Associated with nutrient transformation and mental clarity; ideal for focused study or analytical work." },
        { id: "zw-07", branchZh: "午时", branchVi: "Giờ Ngọ", hours: "11:00–13:00", meridianZh: "手少阴心经", meridianVi: "Kinh Tâm", meridianEn: "Heart Meridian", rhythmVi: "Dương khí cực thịnh chuyển sang âm; ăn trưa vừa phải và chợp mắt ngắn dưỡng tâm.", rhythmEn: "Peak Yang shifting toward Yin; a moderate lunch and a brief midday rest calm the mind." },
        { id: "zw-08", branchZh: "未时", branchVi: "Giờ Mùi", hours: "13:00–15:00", meridianZh: "手太阳小肠经", meridianVi: "Kinh Tiểu Trường", meridianEn: "Small Intestine Meridian", rhythmVi: "Phân thanh giáng trọc trong tiêu hóa; bổ sung nước ấm và tránh ăn quá muộn bữa trưa.", rhythmEn: "Classically associated with separating clear and turbid nutrients; hydrate gently after lunch." },
        { id: "zw-09", branchZh: "申时", branchVi: "Giờ Thân", hours: "15:00–17:00", meridianZh: "足太阳膀胱经", meridianVi: "Kinh Bàng Quang", meridianEn: "Bladder Meridian", rhythmVi: "Khung giờ năng suất buổi chiều; thích hợp ôn bài, vận động nhẹ và uống nước đều.", rhythmEn: "Productive afternoon window suited for review, hydration, and light physical movement." },
        { id: "zw-10", branchZh: "酉时", branchVi: "Giờ Dậu", hours: "17:00–19:00", meridianZh: "足少阴肾经", meridianVi: "Kinh Thận", meridianEn: "Kidney Meridian", rhythmVi: "Tàng tinh cuối ngày; dùng bữa tối thanh đạm, giảm dần cường độ làm việc nặng.", rhythmEn: "Evening phase of conserving essence; favor a lighter dinner and wind down heavy exertion." },
        { id: "zw-11", branchZh: "戌时", branchVi: "Giờ Tuất", hours: "19:00–21:00", meridianZh: "手厥阴心包经", meridianVi: "Kinh Tâm Bào", meridianEn: "Pericardium Meridian", rhythmVi: "Giờ thư giãn tinh thần, đi bộ nhẹ, trò chuyện ấm cúng và hạn chế kích thích màn hình.", rhythmEn: "Time for emotional unwinding, gentle walks, pleasant conversation, and easing off screen stimulation." },
        { id: "zw-12", branchZh: "亥时", branchVi: "Giờ Hợi", hours: "21:00–23:00", meridianZh: "手少阳三焦经", meridianVi: "Kinh Tam Tiêu", meridianEn: "Triple Burner Meridian", rhythmVi: "Bách mạch quy tĩnh; chuẩn bị đi ngủ sớm để khép lại chu kỳ một ngày.", rhythmEn: "All pathways settle into stillness; prepare for sleep to complete the diurnal cycle." }
      ],
      tcmTermsTrilingual20: [
        { id: "tcm-01", zh: "阴阳平衡", pinyin: "yīnyáng pínghéng", en: "Yin-Yang Equilibrium", vi: "Cân bằng Âm Dương" },
        { id: "tcm-02", zh: "脏象学说", pinyin: "zàngxiàng xuéshuō", en: "Zang-Fu Visceral Manifestation Theory", vi: "Học thuyết Tạng Tượng" },
        { id: "tcm-03", zh: "经络系统", pinyin: "jīngluò xìtǒng", en: "Meridian and Collateral Network", vi: "Hệ thống Kinh Lạc" },
        { id: "tcm-04", zh: "气血津液", pinyin: "qìxuè jīnyè", en: "Qi, Blood, and Body Fluids", vi: "Khí, Huyết và Tân Dịch" },
        { id: "tcm-05", zh: "辨证论治", pinyin: "biànzhèng lùnzhì", en: "Pattern Differentiation and Treatment", vi: "Biện chứng luận trị" },
        { id: "tcm-06", zh: "整体观念", pinyin: "zhěngtǐ guānniàn", en: "Holistic Conceptual Framework", vi: "Quan niệm Chỉnh thể" },
        { id: "tcm-07", zh: "四气五味", pinyin: "sìqì wǔwèi", en: "Four Thermal Natures and Five Flavors", vi: "Tứ khí Ngũ vị" },
        { id: "tcm-08", zh: "药食同源", pinyin: "yàoshí tóngyuán", en: "Homology of Medicine and Food", vi: "Dược thực đồng nguyên" },
        { id: "tcm-09", zh: "君臣佐使", pinyin: "jūnchén zuǒshǐ", en: "Monarch-Minister-Assistant-Envoy Formula Structure", vi: "Phối ngũ Quân Thần Tá Sứ" },
        { id: "tcm-10", zh: "治未病", pinyin: "zhì wèibìng", en: "Preventive Health Preservation", vi: "Trị vị bệnh (Phòng bệnh từ sớm)" },
        { id: "tcm-11", zh: "望闻问切", pinyin: "wàng wén wèn qiè", en: "Four Classical Diagnostic Methods", vi: "Tứ chẩn (Vọng Văn Vấn Thiết)" },
        { id: "tcm-12", zh: "脉象", pinyin: "màixiàng", en: "Pulse Manifestation", vi: "Mạch tượng" },
        { id: "tcm-13", zh: "舌诊", pinyin: "shézhěn", en: "Tongue Inspection", vi: "Thiệt chẩn (Xem lưỡi)" },
        { id: "tcm-14", zh: "穴位", pinyin: "xuéwèi", en: "Acupoint", vi: "Huyệt vị" },
        { id: "tcm-15", zh: "艾灸", pinyin: "àijiǔ", en: "Moxibustion", vi: "Cứu ngải" },
        { id: "tcm-16", zh: "推拿", pinyin: "tuīná", en: "Therapeutic Tui Na Massage", vi: "Xoa bóp Thôi nã" },
        { id: "tcm-17", zh: "体质辨识", pinyin: "tǐzhì biànshí", en: "Constitutional Classification", vi: "Nhận diện Thể chất" },
        { id: "tcm-18", zh: "子午流注", pinyin: "zǐwǔ liúzhù", en: "Midnight-Noon Ebb-Flow Circadian Model", vi: "Tý Ngọ Lưu Chú" },
        { id: "tcm-19", zh: "天人合一", pinyin: "tiānrén héyī", en: "Unity of Humanity and Nature", vi: "Thiên nhân hợp nhất" },
        { id: "tcm-20", zh: "道地药材", pinyin: "dàodì yàocái", en: "Geo-Authentic Medicinal Materials", vi: "Dược liệu Đạo địa (chuẩn vùng trồng)" }
      ]
    },
    yinYangWuxingUnifyingStudy: {
      epistemologyBannerVi: "Phân tách rạch ròi ba tầng nhận thức: (1) Sử liệu văn bản & Thiên văn cổ, (2) Hệ ký hiệu triết lý Âm Dương – Ngũ Hành, và (3) Khoa học thực chứng hiện đại (tuyệt đối không thay thế y khoa hay cổ súy bói toán định mệnh).",
      epistemologyBannerEn: "Strict three-tier epistemology separating textual astronomy/history, Yin-Yang Wuxing symbolic grammar, and empirical clinical/modern science.",
      theoreticalRootVi: "Từ Thượng Thư (Hồng Phạm), Kinh Dịch đến Hoài Nam Tử và Hoàng Đế Nội Kinh, người Trung Hoa cổ đại đã xây dựng hệ ngữ pháp biểu tượng Âm Dương – Ngũ Hành như một mô hình phân loại quan hệ động giữa thời gian, không gian, khí hậu và sinh lý. Việc học thuật hiện đại nghiên cứu hệ thống này nhằm giải mã tư duy liên ngành cổ điển chứ không đồng nhất ký hiệu triết lý với định luật thực nghiệm hiện đại.",
      theoreticalRootEn: "From the Book of Documents (Hongfan) and Yijing to Huainanzi and Huangdi Neijing, classical Chinese thinkers forged Yin-Yang and Wuxing as a relational symbolic grammar linking time, space, climate, and physiology. Modern scholarship examines this framework to decode premodern interdisciplinary thought without conflating symbolic taxonomy with modern empirical laws.",
      unifyingMonographs4: [
        {
          id: "tcm",
          titleVi: "Đông y Cổ điển: Tạng Tượng, Ngũ Vị và Khí Hóa",
          titleEn: "Classical TCM: Visceral Manifestation, Five Flavors, and Qi Dynamics",
          zhTitle: "中医学：脏象五味与生克制化",
          primaryTextsVi: "Hoàng Đế Nội Kinh (Tố Vấn, Linh Khu), Nạn Kinh, Thương Hàn Tạp Bệnh Luận.",
          analysisVi: "Đông y mượn Ngũ Hành không phải để mô tả năm vật chất tĩnh, mà để mã hóa năm phương thức vận động sinh lý (thăng phát, tuyên thông, vận hóa, thu liễm, tàng trữ) gắn với ngũ tạng và biến đổi bốn mùa.",
          analysisEn: "Classical TCM employs Wuxing not as five static substances, but as five dynamic physiological modes—rising, expanding, transforming, contracting, and storing—mapped onto organ networks and seasonal shifts.",
          wuxingMechanismVi: "Cơ chế Tương sinh – Tương khắc duy trì cân bằng động; khi vượt ngưỡng sẽ xuất hiện Tương thừa (khắc quá mức) và Tương vũ (phản khắc), làm cơ sở cho lý luận điều chỉnh chế hóa.",
          wuxingMechanismEn: "Generating and restraining cycles model dynamic equilibrium; excess or deficiency produces over-acting (cheng) and counter-acting (wu) patterns guiding classical balancing logic.",
          boundaryNoteVi: "Mang giá trị lịch sử tư tưởng y học và văn hóa thực dưỡng; chẩn đoán và điều trị bệnh lý hiện đại cần tuân thủ y học chứng cứ và bác sĩ có giấy phép.",
          boundaryNoteEn: "Valuable as medical history and cultural wellness heritage; clinical diagnosis and treatment must follow licensed evidence-based medicine."
        },
        {
          id: "fengshui",
          titleVi: "Phong Thủy Cổ Điển: Hình Thế, Lý Khí và Vi Khí Hậu",
          titleEn: "Classical Fengshui: Form, Compass Theory, and Microclimate",
          zhTitle: "古典风水：形势理气与人居环境",
          primaryTextsVi: "Táng Thư (Quách Phác), Thanh Nang Áo Ngữ, Trạch Kinh, Dương Trạch Tam Yếu.",
          analysisVi: "Trong lịch sử kiến trúc Đông Á, Phong thủy (Kham dư) kết hợp hai nhánh: Hình Thế (quan sát sơn thủy, hướng gió, thoát nước, nắng chiếu) và Lý Khí (dùng Hà Đồ, Lạc Thư, Hậu Thiên Bát Quái và La Kinh 24 Sơn để lập mô hình không gian – thời gian).",
          analysisEn: "In East Asian architectural history, Fengshui (Kanyu) combines Form School observation of terrain, wind, drainage, and sunlight with Compass School spatial-temporal modeling via Hetu, Luoshu, Later Heaven Bagua, and the 24-Mountain compass.",
          wuxingMechanismVi: "Ngũ Hành phân loại hình thái địa hình (sơn hình), phương vị và vật liệu, giúp các nghệ nhân cổ truyền tổ chức bố cục thôn làng, cung điện và vườn cảnh hài hòa với địa hình bản địa.",
          wuxingMechanismEn: "Wuxing classifies landform silhouettes, cardinal orientations, and materials, helping premodern builders align villages, palaces, and gardens with local topography.",
          boundaryNoteVi: "Cần tách biệt yếu tố địa lý sinh thái – vi khí hậu – thẩm mỹ kiến trúc có thể kiểm chứng với các diễn giải siêu nhiên mang tính huyền bí.",
          boundaryNoteEn: "Verifiable ecological, microclimatic, and spatial-design insights must be distinguished from unverifiable supernatural claims."
        },
        {
          id: "bazi",
          titleVi: "Bát Tự Tứ Trụ: Lịch Pháp Tiết Khí và Hệ Can Chi",
          titleEn: "BaZi Four Pillars: Solar-Term Calendrics and Stem-Branch Grammar",
          zhTitle: "八字四柱：节气历法与干支模型",
          primaryTextsVi: "Uyên Hải Tử Bình (Từ Tử Bình), Tam Mệnh Thông Hội, Trích Thiên Tủy.",
          analysisVi: "Bát Tự là hệ ký hiệu lịch pháp chuyển đổi thời điểm sinh (năm, tháng, ngày, giờ theo 24 Tiết khí mặt trời) thành bốn cặp Thiên Can – Địa Chi thuộc chu kỳ 60 Hoa Giáp, hình thành nên một cấu trúc tám chữ biểu trưng cho khí hậu thời tiết tại mốc thời gian đó.",
          analysisEn: "BaZi is a calendrical notation translating birth year, month, day, and hour (anchored to the 24 Solar Terms) into four Heavenly Stem–Earthly Branch pairs from the sexagenary cycle, modeling seasonal climatic balance.",
          wuxingMechanismVi: "Dựa trên quy luật Vượng – Tướng – Hưu – Tù – Tử theo lệnh tháng và hệ quan hệ Thập Thần (Tỷ, Thực, Tài, Quan, Ấn), văn bản cổ phân tích tính cân bằng khí hậu (Điều hậu) và cường nhược của Nhật chủ.",
          wuxingMechanismEn: "Using seasonal phase strength (Wang–Xiang–Xiu–Qiu–Si) and the Ten Gods relational matrix, classical texts analyze symbolic climatic moderation and balance around the Day Master.",
          boundaryNoteVi: "Đây là di sản lịch pháp – triết lý nhân sinh cổ điển để nghiên cứu lịch sử văn hóa, tuyệt đối không phải công cụ tiên tri định mệnh hay cơ sở quyết định y tế, tài chính.",
          boundaryNoteEn: "Strictly a historical calendrical and philosophical artifact for cultural study—never an empirical predictor of destiny or a basis for medical or financial decisions."
        },
        {
          id: "ziwei",
          titleVi: "Tử Vi Đẩu Số: Thiên Văn Tượng Số và Tiếp Biến Việt Nam",
          titleEn: "Zi Wei Dou Shu: Astral Symbolism and Vietnamese Adaptation",
          zhTitle: "紫微斗数：星曜宫位与文化流变",
          primaryTextsVi: "Tử Vi Đẩu Số Toàn Thư (thời Minh), các bản sao lưu truyền tại Phúc Kiến, Đài Loan và hệ thống Tử Vi Việt Nam.",
          analysisVi: "Hình thành rõ nét từ thời Tống – Minh, Tử Vi Đẩu Số mượn danh xưng các chòm sao Bắc Đẩu, Nam Đẩu và hệ thống quan chế cổ đại để xây dựng bản đồ 12 cung cùng 14 chính tinh và cơ chế Tứ Hóa (Lộc, Quyền, Khoa, Kỵ).",
          analysisEn: "Crystallizing between the Song and Ming dynasties, Zi Wei Dou Shu borrows Northern and Southern Dipper star names and imperial bureaucratic titles to arrange 12 palaces, 14 major stars, and Four Transformations (Lu, Quan, Ke, Ji).",
          wuxingMechanismVi: "Ngũ Hành Cục (Thủy Nhị, Mộc Tam, Kim Tứ, Thổ Ngũ, Hỏa Lục) quyết định quy tắc an sao Tử Vi và chu kỳ đại vận, kết nối biểu tượng tinh tú với cấu trúc Ngũ Hành và 12 Địa Chi.",
          wuxingMechanismEn: "The Five-Phase Bureau (Water 2, Wood 3, Metal 4, Earth 5, Fire 6) governs the placement of the Zi Wei star and decadal cycles, binding astral symbolism to Wuxing and the 12 Branches.",
          boundaryNoteVi: "Tại Việt Nam, Tử Vi phát triển thêm nhiều trường phái văn bản độc lập; cần tiếp cận ở góc độ văn hóa học, lịch sử tư tưởng và ngôn ngữ Hán–Nôm thay vì mê tín định mệnh.",
          boundaryNoteEn: "In Vietnam, Zi Wei evolved distinct textual lineages; it should be approached through cultural history, literature, and philology rather than fatalistic superstition."
        }
      ],
      fivePhaseCrossMatrix: [
        {
          phaseId: "wood", zh: "木", pinyin: "Mù", vi: "Mộc", en: "Wood",
          tcmVi: "Tạng Can – Phủ Đởm; mùa Xuân; vị Chua; khí cơ sơ tiết, thăng phát.",
          tcmEn: "Liver and Gallbladder; Spring; Sour flavor; rising and free-flowing dispersion.",
          fengshuiVi: "Phương Đông; hình núi cao thẳng đứng; sinh khí mở rộng và cây xanh điều hòa vi khí hậu.",
          fengshuiEn: "East; tall slender peak forms; upward vitality and vegetated microclimate buffering.",
          baziVi: "Thiên Can Giáp – Ất; Địa Chi Dần – Mão; tượng trưng khởi phát, nhân ái và sự tăng trưởng.",
          baziEn: "Stems Jia–Yi; Branches Yin–Mao; symbolizes initiation, benevolence, and organic growth.",
          ziweiVi: "Mộc Tam Cục; nhóm sao mang tính giáo dục, mưu lược, phát triển như Thiên Cơ, Tham Lang (đới Mộc).",
          ziweiEn: "Wood-3 Bureau; linked symbolically to strategy, learning, and growth stars such as Tianji.",
          keyTermsZh: "肝胆 · 东方 · 甲乙 · 木三局"
        },
        {
          phaseId: "fire", zh: "火", pinyin: "Huǒ", vi: "Hỏa", en: "Fire",
          tcmVi: "Tạng Tâm – Phủ Tiểu Trường; mùa Hạ; vị Đắng; chủ huyết mạch và thần minh.",
          tcmEn: "Heart and Small Intestine; Summer; Bitter flavor; governs circulation and lucid awareness.",
          fengshuiVi: "Phương Nam; hình núi nhọn; ánh sáng tự nhiên, thông thoáng và trục đón nắng ấm.",
          fengshuiEn: "South; pointed triangular peaks; daylight orientation, openness, and solar warmth.",
          baziVi: "Thiên Can Bính – Đinh; Địa Chi Tỵ – Ngọ; tượng trưng quang minh, lễ nghi và nhiệt huyết.",
          baziEn: "Stems Bing–Ding; Branches Si–Wu; symbolizes radiance, propriety, and expressive energy.",
          ziweiVi: "Hỏa Lục Cục; nhóm sao sáng tỏ, hành động và truyền bá như Thái Dương, Liêm Trinh.",
          ziweiEn: "Fire-6 Bureau; associated with visibility, initiative, and illumination stars such as Taiyang.",
          keyTermsZh: "心小肠 · 南方 · 丙丁 · 火六局"
        },
        {
          phaseId: "earth", zh: "土", pinyin: "Tǔ", vi: "Thổ", en: "Earth",
          tcmVi: "Tạng Tỳ – Phủ Vị; trưởng hạ và giao mùa; vị Ngọt; trung tâm vận hóa dinh dưỡng.",
          tcmEn: "Spleen and Stomach; late summer and seasonal transitions; Sweet flavor; digestive transformation center.",
          fengshuiVi: "Trung cung và hướng Đông Bắc – Tây Nam; hình núi phẳng vuông; nền tảng vững chãi, bình ổn.",
          fengshuiEn: "Center and NE–SW axes; flat plateau forms; structural stability and grounded balance.",
          baziVi: "Thiên Can Mậu – Kỷ; Địa Chi Thìn – Tuất – Sửu – Mùi; tượng trưng tín nghĩa, bao dung và chuyển tiếp.",
          baziEn: "Stems Wu–Ji; Branches Chen–Xu–Chou–Wei; symbolizes trustworthiness, containment, and transition.",
          ziweiVi: "Thổ Ngũ Cục; nhóm sao trung tâm, quản trị và tích lũy như Tử Vi, Thiên Phủ.",
          ziweiEn: "Earth-5 Bureau; linked to central coordination and stewardship stars such as Ziwei and Tianfu.",
          keyTermsZh: "脾胃 · 中央 · 戊己 · 土五局"
        },
        {
          phaseId: "metal", zh: "金", pinyin: "Jīn", vi: "Kim", en: "Metal",
          tcmVi: "Tạng Phế – Phủ Đại Trường; mùa Thu; vị Cay; chủ hô hấp và túc giáng thu liễm.",
          tcmEn: "Lung and Large Intestine; Autumn; Pungent flavor; governs respiration and downward clearing.",
          fengshuiVi: "Phương Tây; hình núi tròn vòm; tính kỷ luật, gọn gàng và ranh giới không gian rõ nét.",
          fengshuiEn: "West; rounded dome-like hills; clarity, structural order, and defined spatial boundaries.",
          baziVi: "Thiên Can Canh – Tân; Địa Chi Thân – Dậu; tượng trưng nghĩa khí, quyết đoán và chuẩn mực.",
          baziEn: "Stems Geng–Xin; Branches Shen–You; symbolizes rectitude, decisiveness, and precision.",
          ziweiVi: "Kim Tứ Cục; nhóm sao quy củ, tài chính và chấp hành như Vũ Khúc, Thất Sát.",
          ziweiEn: "Metal-4 Bureau; linked to structure, finance, and execution stars such as Wuqu and Qisha.",
          keyTermsZh: "肺大肠 · 西方 · 庚辛 · 金四局"
        },
        {
          phaseId: "water", zh: "水", pinyin: "Shuǐ", vi: "Thủy", en: "Water",
          tcmVi: "Tạng Thận – Phủ Bàng Quang; mùa Đông; vị Mặn; chủ tàng tinh và điều tiết thủy dịch.",
          tcmEn: "Kidney and Bladder; Winter; Salty flavor; governs foundational essence and fluid balance.",
          fengshuiVi: "Phương Bắc; dòng chảy uốn lượn; tụ thủy điều hòa độ ẩm, thoát nước và sinh thái cảnh quan.",
          fengshuiEn: "North; meandering watercourses; moisture regulation, drainage, and landscape ecology.",
          baziVi: "Thiên Can Nhâm – Quý; Địa Chi Hợi – Tý; tượng trưng trí tuệ, linh hoạt và chiều sâu tư duy.",
          baziEn: "Stems Ren–Gui; Branches Hai–Zi; symbolizes wisdom, adaptability, and reflective depth.",
          ziweiVi: "Thủy Nhị Cục; nhóm sao luân chuyển, giao tiếp và cảm thụ như Thái Âm, Thiên Đồng, Cự Môn.",
          ziweiEn: "Water-2 Bureau; associated with fluidity, communication, and receptivity stars such as Taiyin and Tiantong.",
          keyTermsZh: "肾膀胱 · 北方 · 壬癸 · 水二局"
        }
      ]
    },
    vnTravelFoodGuide: {
      palateComparisonVi: "Ẩm thực Việt Nam thiên về sự cân bằng thanh nhẹ giữa rau thơm tươi, nước chấm mặn ngọt và ít dầu; trong khi nhiều trường phái ẩm thực Trung Quốc sử dụng dầu nóng dậy hương, tương lên men đậm vị hoặc hoa tiêu gây tê. Khi tự túc tại Trung Quốc, chủ động gọi thêm rau xanh luộc/xào tỏi ít dầu và yêu cầu điều chỉnh độ mặn – tê sẽ giúp giữ khẩu vị thoải mái suốt hành trình.",
      palateComparisonEn: "Vietnamese cuisine favors light balance, fresh herbs, and minimal oil, whereas many Chinese regional cuisines rely on fragrant heated oil, rich fermented sauces, or numbing Sichuan peppercorn. Ordering plain blanched or light-garlic greens and requesting less oil or no numbing spice keeps meals comfortable for Vietnamese travelers.",
      cityOrderTipsForVn: [
        {
          id: "city-beijing", cityVi: "Bắc Kinh", cityEn: "Beijing", cityZh: "北京",
          suitableDishesVi: "Vịt quay Bắc Kinh ăn kèm bánh tráng dưa leo, lẩu cừu nhúng nồi đồng nước trong, sủi cảo hấp, rau cải xào tỏi.",
          suitableDishesEn: "Peking roast duck with pancakes and cucumber, clear-broth copper-pot lamb hotpot, steamed dumplings, and garlic greens.",
          orderPhraseZh: "请少放油、少放盐，来一份清炒时蔬。",
          orderPhrasePinyin: "Qǐng shǎo fàng yóu, shǎo fàng yán, lái yīfèn qīngchǎo shíshū.",
          orderPhraseVi: "Xin cho ít dầu, ít muối và thêm một đĩa rau theo mùa xào nhẹ."
        },
        {
          id: "city-shanghai", cityVi: "Thượng Hải", cityEn: "Shanghai", cityZh: "上海",
          suitableDishesVi: "Tiểu long bao, hoành thánh nước trong, cá hấp xì dầu, canh măng thịt muối Yanduxian (vị thanh ngọt gần khẩu vị miền Nam).",
          suitableDishesEn: "Xiaolongbao soup dumplings, clear-broth wontons, steamed fish with soy, and Yanduxian bamboo-shoot soup.",
          orderPhraseZh: "菜品可以稍微清淡一点，不要太甜太油。",
          orderPhrasePinyin: "Càipǐn kěyǐ shāowēi qīngdàn yīdiǎn, bùyào tài tián tài yóu.",
          orderPhraseVi: "Món ăn làm thanh nhẹ một chút, đừng quá ngọt và quá nhiều dầu."
        },
        {
          id: "city-hangzhou", cityVi: "Hàng Châu", cityEn: "Hangzhou", cityZh: "杭州",
          suitableDishesVi: "Tôm xào trà Long Tỉnh, gà ăn mày, canh cá Tây Hồ, măng xuân hầm thanh – rất dễ ăn với khách Việt.",
          suitableDishesEn: "Longjing tea shrimp, Beggar's Chicken, West Lake fish broth, and braised spring bamboo shoots—highly compatible with Vietnamese palates.",
          orderPhraseZh: "请推荐几道清淡鲜美的杭帮菜，加一壶龙井茶。",
          orderPhrasePinyin: "Qǐng tuījiàn jǐdào qīngdàn xiānměi de Hángbāngcài, jiā yīhú Lóngjǐngchá.",
          orderPhraseVi: "Xin giới thiệu vài món Hàng Châu thanh ngọt, thêm một ấm trà Long Tỉnh."
        },
        {
          id: "city-chengdu", cityVi: "Thành Đô", cityEn: "Chengdu", cityZh: "成都",
          suitableDishesVi: "Lẩu uyên ương (một bên nước xương/nấm thanh), hoành thánh Long Sao Thủ nước trong, gà hấp không ớt, đậu phụ hầm thanh.",
          suitableDishesEn: "Split-pot hotpot (with mushroom or bone broth side), clear-broth Long Chaoshou wontons, and mild steamed chicken.",
          orderPhraseZh: "我们要鸳鸯锅，清汤配微辣，不要放花椒。",
          orderPhrasePinyin: "Wǒmen yào yuānyāngguō, qīngtāng pèi wēilà, bùyào fàng huājiāo.",
          orderPhraseVi: "Chúng tôi gọi nồi lẩu hai ngăn, một bên nước thanh một bên cay nhẹ, không cho hoa tiêu."
        },
        {
          id: "city-chongqing", cityVi: "Trùng Khánh", cityEn: "Chongqing", cityZh: "重庆",
          suitableDishesVi: "Mì Trùng Khánh chọn phiên bản nước trong hoặc cay rất nhẹ, canh củ sen sườn non, rau luộc chấm xì dầu tỏi.",
          suitableDishesEn: "Chongqing noodles ordered in clear or mild broth, lotus-root pork-rib soup, and blanched greens with light soy.",
          orderPhraseZh: "面条请做清汤或者微微辣，少油免麻。",
          orderPhrasePinyin: "Miàntiáo qǐng zuò qīngtāng huòzhě wēiwēilà, shǎoyóu miǎnmá.",
          orderPhraseVi: "Mì xin làm nước trong hoặc cay rất nhẹ, ít dầu và không tê."
        },
        {
          id: "city-kunming", cityVi: "Côn Minh", cityEn: "Kunming", cityZh: "昆明",
          suitableDishesVi: "Bún qua cầu nước dùng gà ngọt thanh, lẩu nấm rừng Vân Nam, gà hầm nồi đất – gần gũi nhất với khẩu vị Việt Nam.",
          suitableDishesEn: "Crossing-the-Bridge rice noodles, Yunnan wild-mushroom hotpot, and steam-pot chicken—remarkably close to Vietnamese tastes.",
          orderPhraseZh: "来一份原味过桥米线，配野生菌清汤锅。",
          orderPhrasePinyin: "Lái yīfèn yuánwèi Guòqiáo Mǐxiàn, pèi yěshēngjūn qīngtāngguō.",
          orderPhraseVi: "Cho một phần bún qua cầu vị nguyên bản và nồi lẩu nấm rừng nước trong."
        },
        {
          id: "city-guilin", cityVi: "Quế Lâm", cityEn: "Guilin", cityZh: "桂林",
          suitableDishesVi: "Bún Quế Lâm ăn kèm rau củ muối chua nhẹ, cá bia Dương Sóc chọn mức không cay, canh mướp đắng nhồi thịt.",
          suitableDishesEn: "Guilin rice noodles with light pickles, non-spicy Yangshuo beer fish, and stuffed bitter-melon soup.",
          orderPhraseZh: "桂林米粉请加青菜，啤酒鱼做不辣的。",
          orderPhrasePinyin: "Guìlín Mǐfěn qǐng jiā qīngcài, píjiǔyú zuò bùlà de.",
          orderPhraseVi: "Bún Quế Lâm xin thêm rau xanh, món cá bia làm không cay."
        },
        {
          id: "city-guangzhou", cityVi: "Quảng Châu", cityEn: "Guangzhou", cityZh: "广州",
          suitableDishesVi: "Dimsum trà sáng (há cảo, bánh cuốn hấp), cháo cá/thịt, vịt quay Quảng Đông, cải làn hấp dầu hào – tương đồng cao với vị Việt.",
          suitableDishesEn: "Morning dim sum (har gow, steamed rice rolls), congee, Cantonese roast duck, and steamed gai lan—highly aligned with Vietnamese tastes.",
          orderPhraseZh: "请来一笼虾饺、一份白灼菜心和一壶普洱茶。",
          orderPhrasePinyin: "Qǐng lái yīlóng xiājiǎo, yīfèn báizhuó càixīn hé yīhú Pǔ'ěrchá.",
          orderPhraseVi: "Xin cho một xửng há cảo tôm, một đĩa cải chần và một ấm trà Phổ Nhĩ."
        }
      ]
    },
    studyAbroadRoadmap: {
      timeline12Months: [
        { month: "Tháng 9 (Năm trước)", phaseVi: "Định vị Ngành và Trường", phaseEn: "Major & University Shortlisting", tasksVi: "Chốt bậc học, ngôn ngữ giảng dạy (Trung/Anh), lập danh sách 3–5 trường mục tiêu theo nhóm C9, 985, 211 hoặc trường chuyên ngành.", tasksEn: "Define degree level and instruction language, and shortlist 3–5 target universities across C9, 985, 211, or specialized tiers." },
        { month: "Tháng 10", phaseVi: "Chứng chỉ Ngoại ngữ", phaseEn: "Language Proficiency Tests", tasksVi: "Hoàn thành kỳ thi HSK/HSKK (hệ tiếng Trung) hoặc IELTS/TOEFL (hệ tiếng Anh) để kịp nhận bảng điểm chính thức trước hạn nộp.", tasksEn: "Complete HSK/HSKK (Chinese-taught) or IELTS/TOEFL (English-taught) exams so official score reports arrive ahead of deadlines." },
        { month: "Tháng 11", phaseVi: "Liên hệ Giảng viên (Thư 套磁)", phaseEn: "Supervisor Outreach", tasksVi: "Đọc bài báo của giảng viên hướng dẫn mục tiêu, gửi thư giới thiệu học thuật kèm CV và đề cương sơ bộ để xin Thư chấp nhận (Pre-admission/Acceptance Letter) nếu bậc sau đại học.", tasksEn: "Review target professors' publications and send tailored outreach emails with CV and brief research ideas to request supervisory support." },
        { month: "Tháng 12", phaseVi: "Hoàn thiện Hồ sơ Học thuật", phaseEn: "Academic Dossier Preparation", tasksVi: "Viết và hiệu đính Study Plan / Research Proposal, xin 2 thư giới thiệu của Phó Giáo sư hoặc Giáo sư, dịch công chứng bảng điểm và bằng cấp.", tasksEn: "Draft and refine the Study Plan or Research Proposal, obtain two reference letters from Associate/Full Professors, and prepare notarized transcripts." },
        { month: "Tháng 1", phaseVi: "Khám Sức khỏe và Lý lịch Tư pháp", phaseEn: "Medical Form & Police Clearance", tasksVi: "Khám sức khỏe theo mẫu Foreigner Physical Examination Form tại bệnh viện đủ chuẩn và xin Phiếu Lý lịch tư pháp số 1 bản song ngữ hoặc dịch công chứng.", tasksEn: "Complete the Foreigner Physical Examination Form at an authorized hospital and obtain a valid non-criminal record certificate." },
        { month: "Tháng 2", phaseVi: "Nộp Hồ sơ Học bổng Đợt Sớm", phaseEn: "Early Scholarship Submissions", tasksVi: "Điền cổng CSC (Campus China), cổng CIS/CLEC hoặc cổng riêng của trường đại học; rà soát khớp mã cơ quan (Agency Number) và đúng hệ Type A/Type B.", tasksEn: "Submit applications on CSC, CIS/CLEC, and university portals; verify agency numbers and exact Type A/Type B tracks." },
        { month: "Tháng 3", phaseVi: "Hoàn tất Hạn chót CSC & Học bổng Trường", phaseEn: "Primary Deadlines", tasksVi: "Nộp đầy đủ các trường còn lại trước mốc đóng cổng tháng 3–4, kiểm tra trạng thái hồ sơ trên hệ thống và bổ sung tài liệu nếu trường yêu cầu.", tasksEn: "Complete remaining university and scholarship portals before March–April cutoffs and monitor portal messages for supplementary requests." },
        { month: "Tháng 4", phaseVi: "Phỏng vấn Học thuật", phaseEn: "Academic Interviews", tasksVi: "Luyện tập phỏng vấn trực tuyến bằng tiếng Trung và tiếng Anh về động cơ chọn trường, phương pháp nghiên cứu, kiến thức nền chuyên ngành.", tasksEn: "Practice online interviews in Chinese and English covering academic motivation, research design, and core disciplinary knowledge." },
        { month: "Tháng 5", phaseVi: "Nộp Học bổng Tỉnh/Thành phố (nếu bổ sung)", phaseEn: "Provincial/Municipal Tracks", tasksVi: "Theo dõi kết quả sơ tuyển (Pre-admission) và hoàn tất các đợt học bổng chính quyền thành phố (Bắc Kinh, Thượng Hải, Chiết Giang, Quảng Tây) còn mở.", tasksEn: "Track pre-admission outcomes and submit any open municipal or provincial scholarship tracks." },
        { month: "Tháng 6", phaseVi: "Nhận Kết quả Chính thức", phaseEn: "Official Admission Results", tasksVi: "Xác nhận kết quả trúng tuyển học bổng, kiểm tra chính xác họ tên và số hộ chiếu trên Giấy báo nhập học và mẫu JW201/JW202.", tasksEn: "Confirm official scholarship awards and verify passport details on the Admission Notice and JW201/JW202 visa form." },
        { month: "Tháng 7–8", phaseVi: "Xin Visa X1/X2 và Hậu cần", phaseEn: "Visa Application & Pre-Departure", tasksVi: "Nộp hồ sơ xin thị thực du học (X1 cho khóa trên 180 ngày), đặt vé máy bay, đăng ký ký túc xá, cài sẵn ứng dụng thanh toán và bản đồ.", tasksEn: "Apply for the X1/X2 student visa, arrange flights and campus housing, and configure payment and navigation apps." },
        { month: "Tháng 9 (Nhập học)", phaseVi: "Nhập học và Đăng ký Cư trú", phaseEn: "Enrollment & Residence Permit", tasksVi: "Làm thủ tục báo danh tại văn phòng lưu học sinh, khám sức khỏe xác nhận tại địa phương, mở thẻ ngân hàng, SIM và chuyển đổi Giấy phép cư trú trong 30 ngày.", tasksEn: "Complete international-student registration, local medical verification, bank/SIM setup, and convert the X1 visa into a Residence Permit within 30 days." }
      ],
      scholarships: [
        {
          id: "sch-csc-a", nameVi: "Học bổng Chính phủ Trung Quốc – Hệ Hiệp định (CSC Type A)", nameEn: "Chinese Government Scholarship – Bilateral Program (CSC Type A)", nameZh: "中国政府奖学金国别双边项目（A类）",
          coverageVi: "Học bổng toàn phần hoặc bán phần theo chỉ tiêu cấp quốc gia: miễn học phí, bố trí ký túc xá hoặc trợ cấp lưu trú, sinh hoạt phí định kỳ theo bậc học và bảo hiểm y tế tổng hợp.",
          coverageEn: "Full or partial bilateral award covering tuition waiver, campus housing or accommodation subsidy, tiered monthly living stipend, and comprehensive medical insurance.",
          tipVi: "Nộp thông qua cơ quan tuyển sinh cấp quốc gia/Đại sứ quán; cần chuẩn bị sớm từ quý IV năm trước và thường yêu cầu nền tảng học lực nổi bật."
        },
        {
          id: "sch-csc-b", nameVi: "Học bổng Chính phủ Trung Quốc – Hệ Tự chủ Tuyển sinh (CSC Type B)", nameEn: "Chinese Government Scholarship – Chinese University Program (CSC Type B)", nameZh: "中国政府奖学金高水平研究生项目（B类）",
          coverageVi: "Tài trợ toàn phần cho bậc Thạc sĩ và Tiến sĩ: miễn học phí, chỗ ở ký túc xá, trợ cấp sinh hoạt hằng tháng theo quy định hiện hành của CSC và bảo hiểm y tế.",
          coverageEn: "Full graduate funding for Master's and PhD candidates, including tuition waiver, accommodation, official CSC monthly stipend, and medical insurance.",
          tipVi: "Nộp trực tiếp tới trường đại học đủ thẩm quyền; thư đồng ý hướng dẫn của giảng viên và Research Proposal chặt chẽ tạo lợi thế rõ rệt."
        },
        {
          id: "sch-cis", nameVi: "Học bổng Giáo viên Tiếng Trung Quốc tế (CIS / CLEC)", nameEn: "International Chinese Language Teachers Scholarship (CIS / CLEC)", nameZh: "国际中文教师奖学金",
          coverageVi: "Hỗ trợ các chương trình 1 kỳ, 1 năm tiếng, Đại học và Thạc sĩ Giáo dục Hán ngữ Quốc tế (MTCSOL): miễn học phí, ký túc xá, sinh hoạt phí và bảo hiểm y tế.",
          coverageEn: "Supports one-semester, one-year language, Bachelor's, and MTCSOL programs with tuition waiver, housing, living stipend, and medical insurance.",
          tipVi: "Yêu cầu cả điểm HSK và HSKK cùng thư giới thiệu từ đơn vị tiến cử (Viện Khổng Tử hoặc điểm thi HSK được ủy quyền)."
        },
        {
          id: "sch-prov", nameVi: "Học bổng Chính quyền Tỉnh / Thành phố", nameEn: "Provincial and Municipal Government Scholarships", nameZh: "省市级政府奖学金",
          coverageVi: "Cấp bởi chính quyền Bắc Kinh, Thượng Hải, Chiết Giang, Quảng Tây... với nhiều hạng mục từ miễn toàn phần học phí kèm sinh hoạt phí đến miễn một phần học phí.",
          coverageEn: "Awarded by Beijing, Shanghai, Zhejiang, Guangxi, and other local governments in tiered packages ranging from full tuition plus stipend to partial tuition waivers.",
          tipVi: "Lựa chọn rất hiệu quả cho bậc Đại học và Thạc sĩ tại các trung tâm kinh tế như Thượng Hải, Hàng Châu hoặc Nam Ninh."
        },
        {
          id: "sch-uni", nameVi: "Học bổng Trường Đại học", nameEn: "University President & Institutional Scholarships", nameZh: "高校自主奖学金",
          coverageVi: "Do từng trường cấp dựa trên hồ sơ đầu vào hoặc thành tích từng năm học, bao gồm miễn toàn phần/bán phần học phí và có thể kèm hỗ trợ ký túc xá hoặc sinh hoạt phí.",
          coverageEn: "Granted directly by host universities based on admission merit or annual performance, offering full or partial tuition waivers and optional housing or stipend support.",
          tipVi: "Nên nộp song song với các học bổng chính phủ để mở rộng phương án dự phòng và tối ưu xác suất trúng tuyển."
        }
      ],
      universities12: [
        { id: "uni-uibe", nameVi: "Đại học Kinh tế và Thương mại Đối ngoại (UIBE)", nameEn: "University of International Business and Economics (UIBE)", nameZh: "对外经济贸易大学", cityId: "beijing", tier: "211", bestMajorsVi: "Thương mại Quốc tế, Kinh tế Thế giới, Luật Thương mại Quốc tế, Hải quan và Quản trị Chuỗi cung ứng.", bestMajorsEn: "International Trade, World Economy, International Economic Law, Customs, and Supply Chain Management.", scholarshipTipVi: "Đánh giá cao ứng viên có nền tảng kinh tế định lượng và khả năng dùng song song cả tiếng Anh lẫn tiếng Trung." },
        { id: "uni-sufe", nameVi: "Đại học Tài chính Kinh tế Thượng Hải (SUFE)", nameEn: "Shanghai University of Finance and Economics (SUFE)", nameZh: "上海财经大学", cityId: "shanghai", tier: "211", bestMajorsVi: "Tài chính, Kinh tế học Ứng dụng, Kế toán, Thương mại Quốc tế và Phân tích Dữ liệu Kinh doanh.", bestMajorsEn: "Finance, Applied Economics, Accounting, International Trade, and Business Analytics.", scholarshipTipVi: "Chú trọng điểm toán – thống kê trong bảng điểm đại học và đề cương nghiên cứu có mô hình kinh tế lượng rõ ràng." },
        { id: "uni-blcu", nameVi: "Đại học Ngôn ngữ Bắc Kinh (BLCU)", nameEn: "Beijing Language and Culture University (BLCU)", nameZh: "北京语言大学", cityId: "beijing", tier: "Double First-Class", bestMajorsVi: "Giáo dục Hán ngữ Quốc tế, Hán ngữ Thương mại, Biên – Phiên dịch, Ngôn ngữ học Ứng dụng.", bestMajorsEn: "Teaching Chinese to Speakers of Other Languages, Business Chinese, Translation, and Applied Linguistics.", scholarshipTipVi: "Điểm đến hàng đầu cho học bổng CIS/CLEC; cần chứng chỉ HSKK điểm cao và kinh nghiệm giảng dạy hoặc hoạt động ngôn ngữ." },
        { id: "uni-bfsu", nameVi: "Đại học Ngoại ngữ Bắc Kinh (BFSU)", nameEn: "Beijing Foreign Studies University (BFSU)", nameZh: "北京外国语大学", cityId: "beijing", tier: "211", bestMajorsVi: "Quan hệ Quốc tế, Ngoại giao, Kinh doanh Quốc tế, Nghiên cứu Khu vực và Biên – Phiên dịch Đa ngữ.", bestMajorsEn: "International Relations, Diplomacy, International Business, Area Studies, and Multilingual Interpreting.", scholarshipTipVi: "Hồ sơ thể hiện năng lực đa ngữ Anh – Trung – Việt và tư duy đối chiếu khu vực có sức thuyết phục rất lớn." },
        { id: "uni-tsinghua", nameVi: "Đại học Thanh Hoa", nameEn: "Tsinghua University", nameZh: "清华大学", cityId: "beijing", tier: "C9", bestMajorsVi: "Quản trị Kinh doanh, Chính sách Công, Trí tuệ Nhân tạo, Kỹ thuật Hệ thống và Phát triển Bền vững.", bestMajorsEn: "Business Administration, Public Policy, Artificial Intelligence, Systems Engineering, and Sustainable Development.", scholarshipTipVi: "Cạnh tranh rất cao; cần GPA xuất sắc, thành tích nghiên cứu hoặc thực tập nổi bật và phỏng vấn học thuật sâu." },
        { id: "uni-pku", nameVi: "Đại học Bắc Kinh", nameEn: "Peking University", nameZh: "北京大学", cityId: "beijing", tier: "C9", bestMajorsVi: "Kinh tế học, Luật học, Nghiên cứu Trung Quốc (Yenching Academy), Văn học và Lịch sử Đông Á.", bestMajorsEn: "Economics, Law, China Studies (Yenching Academy), Literature, and East Asian History.", scholarshipTipVi: "Ưu tiên ứng viên có tư duy phản biện, bài viết học thuật sắc sảo và định hướng nghiên cứu liên ngành rõ ràng." },
        { id: "uni-fudan", nameVi: "Đại học Phục Đán", nameEn: "Fudan University", nameZh: "复旦大学", cityId: "shanghai", tier: "C9", bestMajorsVi: "Kinh tế Thế giới, Quan hệ Quốc tế, Truyền thông, Tài chính Quốc tế và Hán học Hiện đại.", bestMajorsEn: "World Economy, International Relations, Journalism, International Finance, and Modern Chinese Studies.", scholarshipTipVi: "Hỗ trợ cả CSC Type B và Học bổng Chính quyền Thượng Hải; hệ Thạc sĩ giảng dạy bằng tiếng Anh rất mạnh." },
        { id: "uni-sjtu", nameVi: "Đại học Giao thông Thượng Hải (SJTU)", nameEn: "Shanghai Jiao Tong University (SJTU)", nameZh: "上海交通大学", cityId: "shanghai", tier: "C9", bestMajorsVi: "Quản trị Chuỗi cung ứng và Logistics (Antai), Kỹ thuật Hàng hải, Kinh tế Quản lý và Khoa học Dữ liệu.", bestMajorsEn: "Supply Chain & Logistics Management (Antai), Naval Architecture & Ocean Engineering, Economics, and Data Science.", scholarshipTipVi: "Rất phù hợp cho định hướng Logistics và Vận tải Biển quốc tế; chú trọng năng lực phân tích định lượng và kinh nghiệm dự án." },
        { id: "uni-zju", nameVi: "Đại học Chiết Giang", nameEn: "Zhejiang University", nameZh: "浙江大学", cityId: "hangzhou", tier: "C9", bestMajorsVi: "Thương mại Điện tử, Kinh tế Số, Quản trị Đổi mới Sáng tạo, Nông nghiệp Công nghệ cao và Kỹ thuật.", bestMajorsEn: "E-Commerce, Digital Economy, Innovation Management, Agri-Tech, and Engineering.", scholarshipTipVi: "Gắn liền với hệ sinh thái công nghệ Hàng Châu; nên nhấn mạnh tính ứng dụng thực tiễn trong Study Plan." },
        { id: "uni-sysu", nameVi: "Đại học Trung Sơn", nameEn: "Sun Yat-sen University", nameZh: "中山大学", cityId: "guangzhou", tier: "985", bestMajorsVi: "Kinh tế Thương mại Vùng Vịnh Lớn, Nghiên cứu Đông Nam Á, Quản trị Du lịch và Y khoa.", bestMajorsEn: "Greater Bay Area Trade & Economics, Southeast Asian Studies, Tourism Management, and Medicine.", scholarshipTipVi: "Thuận lợi địa lý với Việt Nam, môi trường quốc tế cởi mở và có nhiều đề tài nghiên cứu gắn với ASEAN." },
        { id: "uni-bucm", nameVi: "Đại học Trung Y Dược Bắc Kinh (BUCM)", nameEn: "Beijing University of Chinese Medicine (BUCM)", nameZh: "北京中医药大学", cityId: "beijing", tier: "Double First-Class", bestMajorsVi: "Trung Y học, Châm cứu – Thôi nã, Trung Dược học và Văn hóa Y học Cổ truyền.", bestMajorsEn: "Traditional Chinese Medicine, Acupuncture & Tuina, Chinese Materia Medica, and TCM Cultural Studies.", scholarshipTipVi: "Yêu cầu năng lực đọc hiểu thuật ngữ Hán ngữ y học vững; nên chứng minh nền tảng sinh học hoặc nghiên cứu văn hóa y học nghiêm túc." },
        { id: "uni-shutcm", nameVi: "Đại học Trung Y Dược Thượng Hải (SHUTCM)", nameEn: "Shanghai University of Traditional Chinese Medicine (SHUTCM)", nameZh: "上海中医药大学", cityId: "shanghai", tier: "Double First-Class", bestMajorsVi: "Trung Y học kết hợp Nghiên cứu Hiện đại, Trung Dược học, Phục hồi chức năng và Điều dưỡng.", bestMajorsEn: "Integrated TCM & Modern Research, Chinese Materia Medica, Rehabilitation, and Nursing.", scholarshipTipVi: "Có cả học bổng CSC và Học bổng Thượng Hải; thế mạnh về chuẩn hóa quốc tế và nghiên cứu dược liệu hiện đại." }
      ],
      studyPlanAndInterview45: [
        { id: "sp-01", stage: "study-plan", zh: "基于我在国际贸易与供应链领域的本科积累，我申请攻读贵校硕士学位。", pinyin: "Jīyú wǒ zài guójì màoyì yǔ gōngyìngliàn lǐngyù de běnkē jīlěi, wǒ shēnqǐng gōngdú guìxiào shuòshì xuéwèi.", en: "Building on my undergraduate foundation in international trade and supply chains, I am applying to pursue a Master's degree at your university.", vi: "Dựa trên nền tảng bậc đại học về thương mại quốc tế và chuỗi cung ứng, tôi nộp đơn theo học chương trình Thạc sĩ tại quý trường." },
        { id: "sp-02", stage: "study-plan", zh: "我的学习计划旨在将东亚区域贸易理论与跨境物流实务紧密结合。", pinyin: "Wǒ de xuéxí jìhuà zhǐzài jiāng Dōngyà qūyù màoyì lǐlùn yǔ kuàjìng wùliú shíwù jǐnmì jiéhé.", en: "My study plan aims to bridge East Asian regional trade theory with practical cross-border logistics operations.", vi: "Kế hoạch học tập của tôi hướng tới kết hợp chặt chẽ lý thuyết thương mại khu vực Đông Á với thực tiễn logistics xuyên biên giới." },
        { id: "sp-03", stage: "study-plan", zh: "在第一学年，我计划系统修读高级国际经济学、计量方法与研究设计核心课程。", pinyin: "Zài dì-yī xuénián, wǒ jìhuà xìtǒng xiūdú gāojí guójì jīngjìxué, jìliàng fāngfǎ yǔ yánjiū shèjì héxīn kèchéng.", en: "During my first academic year, I plan to complete core coursework in advanced international economics, econometrics, and research design.", vi: "Trong năm học đầu tiên, tôi dự kiến hoàn thành các học phần cốt lõi về kinh tế quốc tế nâng cao, kinh tế lượng và thiết kế nghiên cứu." },
        { id: "sp-04", stage: "study-plan", zh: "贵校在跨区域经贸研究与双语学术环境方面的独特优势，与我的发展方向高度契合。", pinyin: "Guìxiào zài kuàqūyù jīngmào yánjiū yǔ shuāngyǔ xuéshù huánjìng fāngmiàn de dútè yōushì, yǔ wǒ de fāzhǎn fāngxiàng gāodù qìhé.", en: "Your university's distinctive strengths in cross-regional trade research and bilingual scholarship closely align with my academic trajectory.", vi: "Thế mạnh đặc thù của quý trường về nghiên cứu kinh thương liên vùng và môi trường học thuật song ngữ rất phù hợp với định hướng của tôi." },
        { id: "sp-05", stage: "study-plan", zh: "我特别关注贵院教授关于RCEP原产地规则与绿色供应链的最新研究成果。", pinyin: "Wǒ tèbié guānzhù guìyuàn jiàoshòu guānyú RCEP yuánchǎndì guīzé yǔ lǜsè gōngyìngliàn de zuìxīn yánjiū chéngguǒ.", en: "I have followed your faculty's recent scholarship on RCEP rules of origin and green supply chains with keen interest.", vi: "Tôi đặc biệt quan tâm tới các công trình nghiên cứu mới của giảng viên quý khoa về quy tắc xuất xứ RCEP và chuỗi cung ứng xanh." },
        { id: "sp-06", stage: "study-plan", zh: "为了胜任全中文学术讨论，我已通过HSK高级考试并坚持精读专业期刊。", pinyin: "Wèile shèngrèn quán Zhōngwén xuéshù tǎolùn, wǒ yǐ tōngguò HSK gāojí kǎoshì bìng jiānchí jīngdú zhuānyè qīkān.", en: "To participate rigorously in Chinese-language seminars, I have passed advanced HSK certification and regularly read Chinese peer-reviewed journals.", vi: "Để đáp ứng các buổi thảo luận học thuật bằng tiếng Trung, tôi đã đạt chứng chỉ HSK bậc cao và duy trì đọc tạp chí chuyên ngành." },
        { id: "sp-07", stage: "study-plan", zh: "在第二学年，我将在导师指导下开展实证调研并按时完成学位论文撰写。", pinyin: "Zài dì-èr xuénián, wǒ jiāng zài dǎoshī zhǐdǎo xià kāizhǎn shízhèng diàoyán bìng ànshí wánchéng xuéwèi lùnwén zhuànxiě.", en: "In the second year, I will conduct empirical fieldwork under my advisor's guidance and complete my thesis on schedule.", vi: "Trong năm thứ hai, tôi sẽ tiến hành khảo sát thực chứng dưới sự hướng dẫn của giảng viên và hoàn thành luận văn đúng hạn." },
        { id: "sp-08", stage: "study-plan", zh: "我希望借助贵校图书馆与中国知网等数据库，建立中英双语文献对照体系。", pinyin: "Wǒ xīwàng jièzhù guìxiào túshūguǎn yǔ Zhōngguó Zhīwǎng děng shùjùkù, jiànlì Zhōng-Yīng shuāngyǔ wénxiàn duìzhào tǐxì.", en: "I hope to leverage your library and CNKI databases to build a comparative Chinese–English literature framework.", vi: "Tôi mong muốn tận dụng thư viện quý trường và cơ sở dữ liệu CNKI để xây dựng hệ thống đối chiếu học liệu song ngữ Trung – Anh." },
        { id: "sp-09", stage: "study-plan", zh: "除课堂学习外，我计划积极参与国际学术论坛及港口企业的实地参访。", pinyin: "Chú kètáng xuéxí wài, wǒ jìhuà jījí cānyù guójì xuéshù lùntán jí gǎngkǒu qǐyè de shídì cānfǎng.", en: "Beyond coursework, I intend to engage actively in international academic forums and field visits to port enterprises.", vi: "Ngoài giờ học trên lớp, tôi dự định tích cực tham gia các diễn đàn học thuật quốc tế và chuyến khảo sát doanh nghiệp cảng biển." },
        { id: "sp-10", stage: "study-plan", zh: "我严格恪守学术诚信，所有研究均以透明的数据来源和规范的引文格式为基础。", pinyin: "Wǒ yángé kèshǒu xuéshù chéngxìn, suǒyǒu yánjiū jūn yǐ tòumíng de shùjù láiyuán hé guīfàn de yǐnwén géshì wéi jīchǔ.", en: "I strictly uphold academic integrity, grounding all work in transparent data sources and standardized citation practices.", vi: "Tôi tuân thủ nghiêm ngặt liêm chính học thuật, bảo đảm mọi nghiên cứu đều minh bạch nguồn dữ liệu và chuẩn hóa trích dẫn." },
        { id: "sp-11", stage: "study-plan", zh: "作为一名来自越南的申请者，我期待在多元文化校园中分享东南亚市场的一线观察。", pinyin: "Zuòwéi yīmíng láizì Yuènán de shēnqǐngzhě, wǒ qīdài zài duōyuán wénhuà xiàoyuán zhōng fēnxiǎng Dōngnányà shìchǎng de yīxiàn guānchá.", en: "As an applicant from Vietnam, I look forward to contributing firsthand insights on Southeast Asian markets to a diverse campus community.", vi: "Là một ứng viên đến từ Việt Nam, tôi kỳ vọng đóng góp góc nhìn thực tiễn về thị trường Đông Nam Á vào môi trường đại học đa văn hóa." },
        { id: "sp-12", stage: "study-plan", zh: "我相信这一阶段的系统深造将为我今后从事中越及中欧经贸合作奠定坚实基础。", pinyin: "Wǒ xiāngxìn zhè yī jiēduàn de xìtǒng shēnzào jiāng wéi wǒ jīnhòu cóngshì Zhōng-Yuè jí Zhōng-Ōu jīngmào hézuò diàndìng jiānshí jīchǔ.", en: "I am confident that structured graduate training here will build a solid foundation for my future work in China–Vietnam and China–Europe trade.", vi: "Tôi tin rằng giai đoạn đào tạo chuyên sâu này sẽ tạo nền tảng vững chắc cho công việc hợp tác kinh thương Trung–Việt và Trung–Âu sau này." },
        { id: "int-01", stage: "interview", zh: "各位评审老师好，非常荣幸有机会向各位汇报我的学习背景与研究设想。", pinyin: "Gèwèi píngshěn lǎoshī hǎo, fēicháng róngxìng yǒu jīhuì xiàng gèwèi huìbào wǒ de xuéxí bèijǐng yǔ yánjiū shèxiǎng.", en: "Good morning/afternoon, members of the committee. It is an honor to present my academic background and research plan.", vi: "Kính chào các thầy cô trong hội đồng, tôi rất vinh dự có cơ hội trình bày nền tảng học tập và định hướng nghiên cứu của mình." },
        { id: "int-02", stage: "interview", zh: "选择贵校不仅因为其卓越的学科声誉，更因为这里的课程兼顾理论深度与行业前沿。", pinyin: "Xuǎnzé guìxiào bùjǐn yīnwèi qí zhuóyuè de xuékē shēngyù, gèng yīnwèi zhèlǐ de kèchéng jiāngù lǐlùn shēndù yǔ hángyè qiányán.", en: "I chose your university not only for its academic reputation, but also because its curriculum balances theoretical rigor with industry frontiers.", vi: "Tôi chọn quý trường không chỉ vì uy tín học thuật mà còn vì chương trình đào tạo cân bằng giữa chiều sâu lý thuyết và xu hướng ngành." },
        { id: "int-03", stage: "interview", zh: "我在本科阶段主导过海关商品归类与跨文化管理项目，培养了扎实的数据分析能力。", pinyin: "Wǒ zài běnkē jiēduàn zhǔdǎo guò hǎiguān shāngpǐn guīlèi yǔ kuàwénhuà guǎnlǐ xiàngmù, péiyǎng le zhāshí de shùjù fēnxī nénglì.", en: "During my undergraduate studies, I led projects on customs classification and cross-cultural management, honing solid analytical skills.", vi: "Ở bậc đại học, tôi từng chủ trì các đề tài về phân loại hàng hóa hải quan và quản trị xuyên văn hóa, rèn luyện kỹ năng phân tích vững vàng." },
        { id: "int-04", stage: "interview", zh: "关于您刚才提出的问题，我想从政策机制与企业合规成本两个层面来回应。", pinyin: "Guānyú nín gāngcái tíchū de wèntí, wǒ xiǎng cóng zhèngcè jīzhì yǔ qǐyè héguī chéngběn liǎnggè céngmiàn lái huíyìng.", en: "Regarding your question, I would like to respond from two perspectives: policy mechanisms and corporate compliance costs.", vi: "Về câu hỏi thầy/cô vừa nêu, tôi xin phép trả lời từ hai góc độ là cơ chế chính sách và chi phí tuân thủ của doanh nghiệp." },
        { id: "int-05", stage: "interview", zh: "我的核心优势在于同时具备中英越三语工作能力，能够直接阅读多语种一手资料。", pinyin: "Wǒ de héxīn yōushì zàiyú tóngshí jùbèi Zhōng-Yīng-Yuè sānyǔ gōngzuò nénglì, nénggòu zhíjiē yuèdú duōyǔzhǒng yīshǒu zīliào.", en: "My core strength is trilingual working proficiency in Chinese, English, and Vietnamese, enabling direct engagement with primary sources.", vi: "Lợi thế cốt lõi của tôi là khả năng làm việc tam ngữ Trung – Anh – Việt, giúp tiếp cận trực tiếp tài liệu gốc đa ngôn ngữ." },
        { id: "int-06", stage: "interview", zh: "面对陌生学术领域或跨文化适应挑战，我习惯通过制定阶段性目标和主动请教来解决。", pinyin: "Miànduì mòshēng xuéshù lǐngyù huò kuàwénhuà shìyìng tiǎozhàn, wǒ xíguàn tōngguò zhìdìng jiēduànxìng mùbiāo hé zhǔdòng qǐngjiào lái jiějué.", en: "When facing unfamiliar academic fields or cross-cultural adjustments, I break goals into milestones and proactively seek guidance.", vi: "Khi đối mặt với lĩnh vực học thuật mới hoặc thách thức thích nghi văn hóa, tôi thường chia nhỏ mục tiêu và chủ động học hỏi." },
        { id: "int-07", stage: "interview", zh: "这个细分问题我目前尚未做过深入实证检验，但我初步判断关键变量在于制度摩擦。", pinyin: "Zhège xìfēn wèntí wǒ mùqián shàngwèi zuòguò shēnrù shízhèng jiǎnyàn, dàn wǒ chūbù pànduàn guānjiàn biànliàng zàiyú zhìdù mócā.", en: "I have not yet empirically tested that specific sub-question, though my preliminary view is that institutional friction is a key variable.", vi: "Vấn đề nhánh này tôi chưa kiểm định thực chứng sâu, nhưng nhận định bước đầu của tôi là biến số then chốt nằm ở ma sát thể chế." },
        { id: "int-08", stage: "interview", zh: "我之所以申请奖学金，是希望将全部精力投入课程钻研与高质量论文产出。", pinyin: "Wǒ zhī suǒyǐ shēnqǐng jiǎngxuéjīn, shì xīwàng jiāng quánbù jīnglì tóurù kèchéng zuānyán yǔ gāozhìliàng lùnwén chǎnchū.", en: "I am applying for this scholarship so I can devote my full energy to rigorous coursework and high-quality research output.", vi: "Tôi ứng tuyển học bổng nhằm tập trung toàn bộ tâm sức cho việc học chuyên sâu và tạo ra công trình nghiên cứu chất lượng." },
        { id: "int-09", stage: "interview", zh: "在团队合作中，我通常负责框架梳理、进度协调以及最终汇报的逻辑校对。", pinyin: "Zài tuánduì hézuò zhōng, wǒ tōngcháng fùzé kuàngjià shūlǐ, jìndù xiétiáo yǐjí zuìzhōng huìbào de luójí jiàoduì.", en: "In team projects, I typically handle structural framing, timeline coordination, and logical verification of the final presentation.", vi: "Trong làm việc nhóm, tôi thường phụ trách khung cấu trúc, điều phối tiến độ và rà soát tính logic của báo cáo cuối cùng." },
        { id: "int-10", stage: "interview", zh: "如果您允许，我可以简要举例说明越南制造企业在中越供应链中的实际痛点。", pinyin: "Rúguǒ nín yǔnxǔ, wǒ kěyǐ jiǎnyào jǔlì shuōmíng Yuènán zhìzào qǐyè zài Zhōng-Yuè gōngyìngliàn zhōng de shíjì tòngdiǎn.", en: "With your permission, I can briefly illustrate a concrete bottleneck faced by Vietnamese manufacturers in China–Vietnam supply chains.", vi: "Nếu thầy/cô cho phép, tôi xin nêu một ví dụ ngắn về nút thắt thực tế của doanh nghiệp sản xuất Việt Nam trong chuỗi cung ứng Trung–Việt." },
        { id: "int-11", stage: "interview", zh: "我想请教老师，贵项目对一年级研究生的文献阅读和量化工具掌握有哪些具体建议？", pinyin: "Wǒ xiǎng qǐngjiào lǎoshī, guì xiàngmù duì yīniánjí yánjiūshēng de wénxiàn yuèdú hé liànghuà gōngjù zhǎngwò yǒu nǎxiē jùtǐ jiànyì?", en: "May I ask what specific recommendations the program has for incoming students regarding literature reading and quantitative software?", vi: "Xin phép hỏi thầy/cô, chương trình có khuyến nghị cụ thể nào cho học viên năm nhất về tài liệu đọc trước và phần mềm định lượng không ạ?" },
        { id: "int-12", stage: "interview", zh: "非常感谢各位老师的宝贵时间与深刻指点，期待未来能在贵校继续向各位学习。", pinyin: "Fēicháng gǎnxiè gèwèi lǎoshī de bǎoguì shíjiān yǔ shēnkè zhǐdiǎn, qīdài wèilái néng zài guìxiào jìxù xiàng gèwèi xuéxí.", en: "Thank you very much for your time and insightful feedback; I look forward to the opportunity to learn from you at your university.", vi: "Xin chân thành cảm ơn thời gian quý báu và những góp ý sâu sắc của hội đồng; tôi rất mong có cơ hội tiếp tục học hỏi tại quý trường." },
        { id: "res-01", stage: "research", zh: "本研究的核心问题在于评估区域自贸协定原产地规则对双边中间品贸易的异质性影响。", pinyin: "Běn yánjiū de héxīn wèntí zàiyú pínggū qūyù zìmào xiédìng yuánchǎndì guīzé duì shuāngbiān zhōngjiānpǐn màoyì de yìzhìxìng yǐngxiǎng.", en: "This study investigates the heterogeneous impact of regional FTA rules of origin on bilateral intermediate-goods trade.", vi: "Câu hỏi trung tâm của nghiên cứu là đánh giá tác động không đồng nhất của quy tắc xuất xứ FTA khu vực lên thương mại hàng trung gian song phương." },
        { id: "res-02", stage: "research", zh: "现有文献多聚焦于关税削减本身，而对非关税措施与口岸通关效率的交互效应探讨尚不充分。", pinyin: "Xiànyǒu wénxiàn duō jùjiāo yú guānshuì xuējiǎn běnshēn, ér duì fēiguānshuì cuòshī yǔ kǒu'àn tōngguān xiàolǜ de jiāohù xiàoyìng tàntǎo shàng bù chōngfèn.", en: "Existing literature focuses heavily on tariff cuts while underexploring the interaction between non-tariff measures and port clearance efficiency.", vi: "Các nghiên cứu hiện có chủ yếu tập trung vào cắt giảm thuế quan mà chưa phân tích đầy đủ tác động tương tác giữa biện pháp phi thuế quan và hiệu suất thông quan." },
        { id: "res-03", stage: "research", zh: "在方法论上，本文拟采用结构引力模型并结合泊松伪极大似然估计（PPML）处理零贸易流问题。", pinyin: "Zài fāngfǎlùn shàng, běnwén nǐ cǎiyòng jiégòu yǐnlì móxíng bìng jiéhé Bósōng wěijídà sìrán gūjì (PPML) chǔlǐ líng màoyìliú wèntí.", en: "Methodologically, this paper applies a structural gravity model with PPML estimation to address zero trade flows and heteroskedasticity.", vi: "Về phương pháp luận, bài nghiên cứu dự kiến áp dụng mô hình trọng lực cấu trúc kết hợp ước lượng PPML để xử lý dòng thương mại bằng không." },
        { id: "res-04", stage: "research", zh: "数据来源拟整合联合国商品贸易数据库（UN Comtrade）及各国海关官方统计年鉴。", pinyin: "Shùjù láiyuán nǐ zhěnghé Liánhéguó Shāngpǐn Màoyì Shùjùkù (UN Comtrade) jí gèguó hǎiguān guānfāng tǒngjì niánjiàn.", en: "Data will integrate UN Comtrade records alongside official national customs statistical yearbooks.", vi: "Nguồn dữ liệu dự kiến tích hợp từ cơ sở dữ liệu UN Comtrade cùng niên giám thống kê chính thức của hải quan các quốc gia." },
        { id: "res-05", stage: "research", zh: "为缓解潜在的内生性偏误，本研究将引入多维固定效应并进行平行趋势与安慰剂检验。", pinyin: "Wèi huǎnjiě qiánzài de nèishēngxìng piānwù, běn yánjiū jiāng yǐnrù duōwéi gùdìng xiàoyìng bìng jìnxíng píngxíng qūshì yǔ ānwèijì jiǎnyàn.", en: "To mitigate potential endogeneity bias, the study incorporates multi-way fixed effects alongside parallel-trends and placebo tests.", vi: "Nhằm giảm thiểu sai lệch nội sinh tiềm ẩn, nghiên cứu sẽ đưa vào hiệu ứng cố định đa chiều kèm kiểm định xu hướng song song và kiểm định giả dược." },
        { id: "res-06", stage: "research", zh: "除定量建模外，我还将选取两家跨境物流企业开展半结构化访谈，以验证机制解释。", pinyin: "Chú dìngliàng jiànmó wài, wǒ hái jiāng xuǎnqǔ liǎngjiā kuàjìng wùliú qǐyè kāizhǎn bànjiégòuhuà fǎngtán, yǐ yànzhèng jīzhì jiěshì.", en: "Alongside quantitative modeling, I will conduct semi-structured interviews with two cross-border logistics firms to triangulate underlying mechanisms.", vi: "Bên cạnh mô hình định lượng, tôi sẽ phỏng vấn bán cấu trúc hai doanh nghiệp logistics xuyên biên giới để kiểm chứng cơ chế giải thích." },
        { id: "res-07", stage: "research", zh: "本研究的边际贡献体现在构建微观企业合规成本指标，并提供可操作的政策建议。", pinyin: "Běn yánjiū de biānjì gòngxiàn tǐxiàn zài gòujiàn wēiguān qǐyè héguī chéngběn zhǐbiāo, bìng tígōng kě cāozuò de zhèngcè jiànyì.", en: "The marginal contribution lies in constructing a firm-level compliance cost index and deriving actionable policy recommendations.", vi: "Đóng góp mới của nghiên cứu thể hiện ở việc xây dựng chỉ số chi phí tuân thủ cấp doanh nghiệp và đề xuất khuyến nghị chính sách khả thi." },
        { id: "res-08", stage: "research", zh: "本文明确界定样本时间窗口，并坦诚讨论宏观外部冲击可能带来的结果局限性。", pinyin: "Běnwén míngquè jièdìng yàngběn shíjiān chuāngkǒu, bìng tǎnchéng tǎolùn hóngguān wàibù chōngjī kěnéng dàilái de jiéguǒ júxiànxìng.", en: "The paper clearly defines its sample timeframe and transparently discusses limitations posed by external macroeconomic shocks.", vi: "Nghiên cứu xác định rõ khung thời gian mẫu và thảo luận thẳng thắn những giới hạn có thể phát sinh từ các cú sốc vĩ mô bên ngoài." },
        { id: "res-09", stage: "research", zh: "在文献综述部分，我将按照理论演进脉络而非简单罗列作者的方式进行批判性评述。", pinyin: "Zài wénxiàn zōngshù bùfèn, wǒ jiāng ànzhào lǐlùn yǎnjìn màiluò ér fēi jiǎndān luóliè zuòzhě de fāngshì jìnxíng pīpànxìng píngshù.", en: "In the literature review, I will synthesize scholarship along theoretical evolutions rather than merely listing authors.", vi: "Ở phần tổng quan tài liệu, tôi sẽ bình luận phản biện theo mạch tiến triển lý thuyết thay vì liệt kê đơn thuần từng tác giả." },
        { id: "res-10", stage: "research", zh: "通过稳健性检验替换核心解释变量与缩尾处理，确保实证结论具有高度可靠性。", pinyin: "Tōngguò wěnjiànxìng jiǎnyàn tìhuàn héxīn jiěshì biànliàng yǔ suōwěi chǔlǐ, quèbǎo shízhèng jiélùn jùyǒu gāodù kěkàoxìng.", en: "Robustness checks using alternative explanatory variables and winsorization ensure high reliability of empirical findings.", vi: "Các kiểm định độ bền bằng cách thay thế biến giải thích lõi và xử lý giá trị ngoại lai giúp bảo đảm độ tin cậy cao của kết quả." },
        { id: "res-11", stage: "research", zh: "我希望在读研期间将阶段性研究成果投稿至国际同行评审期刊，接受学术界检验。", pinyin: "Wǒ xīwàng zài dúyán qījiān jiāng jiēduànxìng yánjiū chéngguǒ tóugǎo zhì guójì tóngháng píngshěn qīkān, jiēshòu xuéshùjiè jiǎnyàn.", en: "During graduate study, I aim to submit milestone findings to international peer-reviewed journals for scholarly scrutiny.", vi: "Tôi kỳ vọng trong thời gian học sau đại học sẽ gửi các kết quả nghiên cứu theo giai đoạn tới tạp chí phản biện quốc tế." },
        { id: "grad-01", stage: "graduation", zh: "毕业后，我计划加入跨国供应链或欧洲物流企业，负责亚欧及中越贸易走廊的运营协调。", pinyin: "Bìyè hòu, wǒ jìhuà jiārù kuàguó gōngyìngliàn huò Ōuzhōu wùliú qǐyè, fùzé Yà-Ōu jí Zhōng-Yuè màoyì zǒuláng de yùnyíng xiétiáo.", en: "Upon graduation, I plan to join a multinational supply-chain or European logistics firm coordinating Asia–Europe and China–Vietnam trade corridors.", vi: "Sau khi tốt nghiệp, tôi dự định gia nhập doanh nghiệp chuỗi cung ứng đa quốc gia hoặc logistics châu Âu, điều phối hành lang thương mại Á–Âu và Trung–Việt." },
        { id: "grad-02", stage: "graduation", zh: "我的中长期目标是成长为精通海关合规、碳边境规则与多式联运的复合型贸易专家。", pinyin: "Wǒ de zhōngchángqī mùbiāo shì chéngzhǎng wéi jīngtōng hǎiguān héguī, tàn biānjìng guīzé yǔ duōshì liányùn de fùhéxíng màoyì zhuānjiā.", en: "My medium-to-long-term goal is to become an interdisciplinary trade specialist proficient in customs compliance, carbon-border rules, and multimodal transport.", vi: "Mục tiêu trung và dài hạn của tôi là trở thành chuyên gia thương mại đa năng am hiểu tuân thủ hải quan, cơ chế biên giới các-bon và vận tải đa phương thức." },
        { id: "grad-03", stage: "graduation", zh: "我希望将所学带回越南，助力本土出口企业提升合规水平并融入高标准国际供应链。", pinyin: "Wǒ xīwàng jiāng suǒxué dàihuí Yuènán, zhùlì běntǔ chūkǒu qǐyè tíshēng héguī shuǐpíng bìng róngrù gāobiāozhǔn guójì gōngyìngliàn.", en: "I hope to bring this expertise back to Vietnam, helping local exporters elevate compliance and integrate into high-standard global supply chains.", vi: "Tôi mong muốn mang tri thức tích lũy về đóng góp cho doanh nghiệp xuất khẩu Việt Nam nâng chuẩn tuân thủ và tham gia sâu vào chuỗi cung ứng quốc tế." },
        { id: "grad-04", stage: "graduation", zh: "凭借在中国积累的学术人脉与行业认知，我愿成为促进中越青年与经贸交流的务实桥梁。", pinyin: "Píngjiè zài Zhōngguó jīlěi de xuéshù rénmài yǔ hángyè rènzhī, wǒ yuàn chéngwéi cùjìn Zhōng-Yuè qīngnián yǔ jīngmào jiāoliú de wùshí qiáoliáng.", en: "Drawing on academic networks and industry insight gained in China, I aspire to serve as a pragmatic bridge for China–Vietnam youth and commercial exchange.", vi: "Với mạng lưới học thuật và hiểu biết thực tiễn tích lũy tại Trung Quốc, tôi mong trở thành cầu nối thiết thực cho giao lưu thanh niên và kinh thương Trung–Việt." },
        { id: "grad-05", stage: "graduation", zh: "在职业实践中，我将持续追踪绿色航运与数字化单证标准，保持终身学习习惯。", pinyin: "Zài zhíyè shíjiàn zhōng, wǒ jiāng chíxù zhuīzōng lǜsè hángyùn yǔ shùzìhuà dānzhèng biāozhǔn, bǎochí zhōngshēn xuéxí xíguàn.", en: "Throughout my career, I will continually track green shipping and digital trade-document standards through lifelong learning.", vi: "Trong thực tiễn nghề nghiệp, tôi sẽ liên tục cập nhật chuẩn vận tải biển xanh và chứng từ số hóa với tinh thần học tập suốt đời." },
        { id: "grad-06", stage: "graduation", zh: "若研究进展顺利且契合导师团队方向，我也对未来继续攻读博士学位保持开放态度。", pinyin: "Ruò yánjiū jìnzhǎn shùnlì qiě qìhé dǎoshī tuánduì fāngxiàng, wǒ yě duì wèilái jìxù gōngdú bóshì xuéwèi bǎochí kāifàng tàidù.", en: "If my research progresses strongly and aligns with the research group, I remain open to pursuing doctoral studies in the future.", vi: "Nếu tiến độ nghiên cứu thuận lợi và phù hợp định hướng nhóm nghiên cứu, tôi cũng sẵn sàng cân nhắc học tiếp bậc Tiến sĩ." },
        { id: "grad-07", stage: "graduation", zh: "毕业后，我期待与母校课题组保持长期合作，共同开展东南亚口岸与产业链追踪研究。", pinyin: "Bìyè hòu, wǒ qīdài yǔ mǔxiào kètízǔ bǎochí chángqī hézuò, gòngtóng kāizhǎn Dōngnányà kǒu'àn yǔ chǎnyèliàn zhuīzōng yánjiū.", en: "After graduating, I hope to maintain long-term collaboration with my alma mater's research group on Southeast Asian port and supply-chain studies.", vi: "Sau khi tốt nghiệp, tôi mong duy trì hợp tác dài hạn với nhóm nghiên cứu của trường trong các đề tài theo dõi cảng biển và chuỗi ngành Đông Nam Á." },
        { id: "grad-08", stage: "graduation", zh: "在跨国企业管理中，我将坚持以客观数据与国际惯例为准则，推动多方共赢合作。", pinyin: "Zài kuàguó qǐyè guǎnlǐ zhōng, wǒ jiāng jiānchí yǐ kèguān shùjù yǔ guójì guànlì wéi zhǔnzé, tuīdòng duōfāng gòngyíng hézuò.", en: "In multinational management, I will rely on objective data and international norms to foster mutually beneficial partnerships.", vi: "Trong quản trị doanh nghiệp đa quốc gia, tôi sẽ lấy dữ liệu khách quan và thông lệ quốc tế làm chuẩn mực để thúc đẩy hợp tác đôi bên cùng có lợi." },
        { id: "grad-09", stage: "graduation", zh: "我希望通过撰写双语行业报告，帮助更多中小贸易商理解跨境政策变化。", pinyin: "Wǒ xīwàng tōngguò zhuànxiě shuāngyǔ hángyè bàogào, bāngzhù gèngduō zhōngxiǎo màoyìshāng lǐjiě kuàjìng zhèngcè biànhuà.", en: "I aim to publish bilingual industry briefs that help small and medium traders navigate cross-border regulatory changes.", vi: "Tôi mong muốn biên soạn các báo cáo ngành song ngữ giúp doanh nghiệp thương mại vừa và nhỏ nắm bắt thay đổi chính sách xuyên biên giới." },
        { id: "grad-10", stage: "graduation", zh: "这段留华求学经历不仅是一次学位提升，更是我构建全球视野与跨文化领导力的新起点。", pinyin: "Zhèduàn liú-Huá qiúxué jīnglì bùjǐn shì yīcì xuéwèi tíshēng, gèng shì wǒ gòujiàn quánqiú shìyě yǔ kuàwénhuà lǐngdǎolì de xīnqǐdiǎn.", en: "Studying in China will be more than earning a degree; it will be a launchpad for building global perspective and cross-cultural leadership.", vi: "Chặng đường du học tại Trung Quốc không chỉ là nâng cao bằng cấp mà còn là khởi điểm mới để tôi xây dựng tầm nhìn toàn cầu và năng lực lãnh đạo xuyên văn hóa." }
      ]
    }
  };
})();
// --- Backward-compatible Adapter for Politics, Yin-Yang-Wuxing, HSK 60 & Study Abroad ---
(function () {
  "use strict";
  var pc = window.CCE_V4_PERSONAL_CORE || {};
  var pol = pc.chinaPoliticsGovernance || {};
  var eco = pc.macroEconomics2026 || {};
  var yy = pc.yinYangWuxingUnifyingStudy || {};
  var stAb = pc.studyAbroadRoadmap || {};

  var polEconList = []
    .concat((pol.institutions || []).map(function (inst) {
      return {
        id: inst.id,
        zh: inst.zh || "",
        titleVi: inst.titleVi || "",
        titleEn: inst.titleEn || "",
        summaryVi: (inst.roleVi || "") + (inst.examEconRelevanceVi ? " — " + inst.examEconRelevanceVi : ""),
        summaryEn: inst.roleEn || ""
      };
    }))
    .concat((eco.pillars || []).map(function (pil) {
      return {
        id: pil.id,
        zh: pil.zh || "",
        titleVi: pil.titleVi || "",
        titleEn: pil.titleEn || "",
        summaryVi: (pil.analysisVi || "") + (pil.tradeImplicationVi ? " — " + pil.tradeImplicationVi : ""),
        summaryEn: (pil.analysisEn || "") + (pil.tradeImplicationEn ? " " + pil.tradeImplicationEn : "")
      };
    }));

  window.CCE_V4_DISCIPLINES = {
    politicsEcon2026: polEconList,
    yinYangWuxing: {
      epistemicBannerVi: (yy.epistemologyBannerVi || "") + " (Lưu ý: KHÔNG phải y học lâm sàng hay tiên tri xác suất.)",
      epistemicBannerEn: yy.epistemologyBannerEn || "Strictly East Asian comparative intellectual history—NOT clinical medicine nor predictive science.",
      monographs: (yy.unifyingMonographs4 || []).map(function (m) {
        return {
          id: m.id,
          zh: m.zhTitle || "",
          titleVi: m.titleVi || "",
          titleEn: m.titleEn || "",
          bodyVi: (m.analysisVi || "") + (m.wuxingMechanismVi ? " " + m.wuxingMechanismVi : "")
        };
      }),
      matrix5x4: (yy.fivePhaseCrossMatrix || []).map(function (row) {
        return {
          phase: (row.vi || "") + " (" + (row.en || "") + " · " + (row.zh || "") + ")",
          seasonDir: row.fengshuiVi || "",
          tcm: row.tcmVi || "",
          fengshui: row.fengshuiVi || "",
          bazi: row.baziVi || "",
          ziwei: row.ziweiVi || ""
        };
      })
    },
    studyAbroad: {
      scholarships: (stAb.scholarships || []).map(function (s) {
        return {
          id: s.id,
          name: (s.nameVi || "") + (s.nameZh ? " (" + s.nameZh + ")" : ""),
          targetVi: (s.coverageVi || "") + (s.tipVi ? " " + s.tipVi : ""),
          targetEn: s.coverageEn || ""
        };
      }),
      universities: (stAb.universities12 || []).map(function (u) {
        return {
          id: u.id,
          tier: u.tier || "",
          zh: (u.nameZh || "") + (u.cityId ? " · " + u.cityId.toUpperCase() : ""),
          vi: u.nameVi || "",
          en: u.nameEn || "",
          strengthVi: (u.bestMajorsVi || "") + (u.scholarshipTipVi ? " (" + u.scholarshipTipVi + ")" : ""),
          strengthEn: u.bestMajorsEn || ""
        };
      }),
      studyPlanTemplateEnZh: {
        titleVi: "45 Mẫu câu Study Plan (学习计划) & Phỏng vấn Hội đồng CSC (Anh – Trung – Việt)",
        sections: (stAb.studyPlanAndInterview45 || []).slice(0, 6).map(function (sp) {
          return { headEn: sp.en || "", zh: sp.zh || "", tipVi: sp.vi || "" };
        })
      },
      interviewQa: (stAb.studyPlanAndInterview45 || []).filter(function (x) { return x.stage === "interview"; }).slice(0, 6).map(function (qa) {
        return { qEn: qa.en || "", qZh: qa.zh || "", aTipVi: qa.vi || "" };
      })
    }
  };

  // Wire all 60 HSK cultural briefs into CCE_LITERATURE_HSK_V4.hskBriefs
  window.CCE_LITERATURE_HSK_V4 = window.CCE_LITERATURE_HSK_V4 || { canons: [], hskBriefs: [] };
  window.CCE_LITERATURE_HSK_V4.hskBriefs = (pc.hskCulturalBriefs60 || []).map(function (b) {
    return {
      id: b.id,
      hsk: String(b.level || "HSK 5").replace("HSK ", ""),
      topic: b.topic || "",
      zh: b.keyTermZh || "",
      pinyin: b.passagePinyin || "",
      hanViet: b.titleVi || "",
      vi: b.summaryVi || "",
      en: b.summaryEn || "",
      titleEn: b.titleEn || "",
      passageZh: b.passageZh || "",
      quizPromptVi: b.quizPromptVi || "",
      quizPromptEn: b.quizPromptEn || ""
    };
  });
})();
