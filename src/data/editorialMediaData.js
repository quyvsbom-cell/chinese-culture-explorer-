// ============================================================================
// EDITORIAL MEDIA REGISTRY, STORYTELLING SCHEMAS & QUALITY VALIDATION ENGINE
// Inspired by SCMP, BBC, Guardian Long Read, Reuters Graphics & NYT Graphics
// ============================================================================

(function () {
  const images = {
    "img-hero-hundred-schools": {
      id: "img-hero-hundred-schools",
      src: "assets/images/articles/hero-hundred-schools.jpg",
      titleVi: "Phục dựng Sơ đồ Học viện Tắc Hạ & Thẻ tre Quách Điếm",
      titleZh: "稷下学宫与郭店楚简思想图谱",
      titleEn: "Jixia Academy Architectural Reconstruction & Guodian Bamboo Slips",
      originalSource: "Tổng hợp Khảo cổ học Quách Điếm (1993) & 《Sử ký · Điền Kính Trọng Hoàn Thế gia》",
      sourceUrl: "https://ctext.org/han-shu/yi-wen-zhi",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Xuân Thu – Chiến Quốc (thế kỷ V–III TCN)",
      description:
        "Bản phục dựng đối xứng không gian tranh biện học thuật tại Học viện Tắc Hạ nước Tề cùng bản vẽ các thanh thẻ tre Quách Điếm khắc văn bản Đạo – Nho sơ kỳ.",
      altText:
        "Sơ đồ đồ họa học thuật hai khung: bên trái phác họa kiến trúc mái ngói đỏ của Học viện Tắc Hạ nước Tề; bên phải vẽ bốn thẻ tre Quách Điếm khắc chữ Hán cổ và sáu ô trường phái tư tưởng thời Chiến Quốc.",
      caption:
        "Phục dựng đồ họa kiến trúc Học viện Tắc Hạ (Lâm Truy) kết hợp thẻ tre Quách Điếm (Kinh Môn, 1993) minh họa tính đa nguyên của Bách Gia Chư Tử trước khi hợp nhất tư tưởng thời Hán.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 42%",
      thumbnailFocalPoint: "32% 45%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Phục dựng Đồ họa Học thuật",
      attributionText: "Nguồn phục dựng: Văn khố Số CCE • Dựa trên tư liệu khảo cổ Quách Điếm & CText.",
      verificationStatus: "verified"
    },
    "img-hero-confucianism": {
      id: "img-hero-confucianism",
      src: "assets/images/articles/hero-confucianism.jpg",
      titleVi: "Mô hình Sai tự Cách cục & Ba Lần Tái cấu trúc Nho học",
      titleZh: "儒家“差序格局”与三次哲学重构",
      titleEn: "Chaxu Geju Concentric Circles and Confucian Institutional Evolution",
      originalSource: "Phí Hiếu Thông 《Hương thổ Trung Quốc》 (1947) & Tư liệu Khoa cử Văn Miếu",
      sourceUrl: "https://plato.stanford.edu/entries/confucius/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Tiên Tần đến Thời kỳ Hiện đại (551 TCN – Thế kỷ XX)",
      description:
        "Biểu đồ vòng tròn đồng tâm mô tả cấu trúc quan hệ xã hội Đông Á quanh cái tôi cá nhân, đặt cạnh ba mốc tái cấu trúc của Nho giáo từ Tiên Tần, Hán Nho đến Lý học Tống-Minh.",
      altText:
        "Đồ họa thông tin gồm năm vòng tròn đồng tâm màu vàng đất và đỏ son xoay quanh chữ Kỷ ở tâm bên trái, cùng ba khối tiến trình lịch sử và khung Văn Miếu Khoa cử ở bên phải.",
      caption:
        "Cấu trúc 'Sai tự cách cục' (Phí Hiếu Thông) lý giải cách Nho gia tổ chức nghĩa vụ đạo đức theo tầng bậc thân sơ, gắn liền thiết chế khoa cử và Văn Miếu tại Trung Quốc – Việt Nam.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "25% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Thông tin Xã hội học",
      attributionText: "Nguồn tham khảo: Stanford Encyclopedia of Philosophy & Phí Hiếu Thông (1947).",
      verificationStatus: "verified"
    },
    "img-hero-yinyang": {
      id: "img-hero-yinyang",
      src: "assets/images/articles/hero-yinyang.jpg",
      titleVi: "Quang chiếu Địa hình Núi – Sông và Nguồn gốc Khái niệm Âm Dương",
      titleZh: "山南水北：阴阳概念的地理气候起源",
      titleEn: "Topographical Solar Origin of Yin and Yang",
      originalSource: "《Kinh Thi · Đại Nhã》 & Chu Đôn Di 《Thái Cực Đồ Thuyết》",
      sourceUrl: "https://iep.utm.edu/yinyang/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Tây Chu – Thời Tống (Thế kỷ X TCN – XI SCN)",
      description:
        "Mặt cắt địa hình minh họa sườn núi hướng Nam đón nắng gọi là Dương, sườn Bắc khuất nắng gọi là Âm và bờ bắc–nam dòng sông theo kinh nghiệm nông nghiệp Hoàng Hà.",
      altText:
        "Sơ đồ mặt cắt ngọn núi hai màu sáng tối hướng về biểu tượng Mặt Trời phía Nam, phía dưới là dòng sông chảy ngang giải thích địa danh Lạc Dương và Hoài Âm, bên phải là biểu đồ Thái Cực.",
      caption:
        "Trước khi trở thành phạm trù triết học phổ quát, 'Âm' và 'Dương' bắt nguồn từ quan sát quang chiếu Mặt Trời lên sườn núi và hai bờ sông trong 《Kinh Thi》.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "46% 50%",
      thumbnailFocalPoint: "30% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Khái niệm Học thuật",
      attributionText: "Nguồn dẫn liệu: Robin R. Wang (IEP) & Chu Dịch Hệ Từ (CText).",
      verificationStatus: "verified"
    },
    "img-hero-wuxing": {
      id: "img-hero-wuxing",
      src: "assets/images/articles/hero-wuxing.jpg",
      titleVi: "Chu trình Phản hồi Hai chiều Tương Sinh – Tương Khắc của Ngũ Hành",
      titleZh: "五行生克动态机制与历代对应表",
      titleEn: "Dynamic Five Phases Generating and Restraining Network",
      originalSource: "《Thượng Thư · Hồng Phạm》 & Joseph Needham (Science and Civilisation in China, Vol. 2)",
      sourceUrl: "https://ctext.org/shang-shu/great-plan",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Tiền Tần – Thời Hán (Thế kỷ V TCN – I SCN)",
      description:
        "Ngũ giác mạng lưới thể hiện sự vận động tương hỗ giữa năm pha Mộc, Hỏa, Thổ, Kim, Thủy cùng bảng đối chiếu mùa vụ, phương vị và tạng phủ Đông y.",
      altText:
        "Bên trái vẽ vòng tròn nối năm nút màu sắc khác nhau (Hỏa, Thổ, Kim, Thủy, Mộc) bằng nét đứt dài ngoài rìa và ngôi sao nét đứt ngắn bên trong; bên phải là bảng phân loại Hồng Phạm.",
      caption:
        "Ngũ Hành vận hành như một hệ thống phản hồi khép kín: vòng tròn ngoài minh họa Tương Sinh (nuôi dưỡng) và ngôi sao bên trong biểu thị Tương Khắc (kiềm chế cân bằng).",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "26% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Khái niệm Hệ thống",
      attributionText: "Nguồn dẫn liệu: Thượng Thư – Hồng Phạm (CText) & Stanford Encyclopedia.",
      verificationStatus: "verified"
    },
    "img-hero-iching": {
      id: "img-hero-iching",
      src: "assets/images/articles/hero-iching.jpg",
      titleVi: "Bát Quái, Ba Tầng Văn bản Chu Dịch & Đối thoại Leibniz (1703)",
      titleZh: "《易经》文本层累与东西方二进制对话",
      titleEn: "Bagua Radial Diagram, Textual Strata & Leibniz Binary Correspondence",
      originalSource: "Chu Dịch (CText), Văn khố Mã Vương Đôi & Thư tín Leibniz – Joachim Bouvet",
      sourceUrl: "https://ctext.org/book-of-changes",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Tây Chu – Đầu Thanh & Khai sáng Châu Âu (Thế kỷ X TCN – 1703 SCN)",
      description:
        "Sơ đồ vòng tròn Bát Quái Càn–Khôn–Khảm–Ly đối chiếu các tầng kiến tạo văn bản Chu Dịch từ lời bói cỏ thi cổ đến bình giải triết học Thập Dực và hệ nhị phân.",
      altText:
        "Vòng tròn Bát Quái có chữ Dịch ở tâm đặt bên trái; bốn khung chữ bên phải tóm tắt lớp Kinh văn Tây Chu, Thập Dực, bản lụa Mã Vương Đôi và nghiên cứu nhị phân của Leibniz năm 1703.",
      caption:
        "Sơ đồ giải mã cấu trúc ba tầng lịch sử của 《Chu Dịch》: từ sổ tay bói cỏ thi Tây Chu sang tác phẩm triết học 'Thập Dực' và cảm hứng hệ nhị phân 0/1 của G. W. Leibniz.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "25% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Lịch sử Văn bản",
      attributionText: "Nguồn tham khảo: Richard J. Smith (2012) & Chinese Text Project.",
      verificationStatus: "verified"
    },
    "img-hero-spring-festival": {
      id: "img-hero-spring-festival",
      src: "assets/images/articles/hero-spring-festival.jpg",
      titleVi: "Chu kỳ 23 Ngày Xuân Tiết & Di sản Văn hóa Phi vật thể UNESCO 2024",
      titleZh: "春节仪式周期与南北年俗差异",
      titleEn: "23-Day Spring Festival Ritual Cycle and North-South Cultural Contrast",
      originalSource: "Hồ sơ Di sản Phi vật thể Nhân loại UNESCO (12/2024) & Nghiên cứu Dân tục học",
      sourceUrl: "https://ich.unesco.org/en/RL/spring-festival-social-practices-of-the-chinese-people-in-celebration-of-traditional-new-year-02126",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Từ Lịch Thái Sơ (104 TCN) đến UNESCO 2024",
      description:
        "Ấn phẩm đồ họa nền đỏ chu sa điểm vàng trình bày tiến trình 4 chặng nghi lễ từ 23 tháng Chạp tới Rằm tháng Giêng và sự phân hóa ẩm thực Bắc–Nam.",
      altText:
        "Khung đỏ thẫm viền vàng bên trái mang đại tự Xuân Tiết và chữ Phúc cùng bốn mốc nghi lễ từ Tế Táo đến Nguyên Tiêu; bên phải so sánh sủi cảo miền Bắc và bánh Niên cao miền Nam.",
      caption:
        "Chu kỳ Xuân Tiết kéo dài từ ngày 23 tháng Chạp đến rằm tháng Giêng Nguyên Tiêu, kết nối tái khẳng định quan hệ gia tộc truyền thống với nền kinh tế bao lì xì số hiện đại.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "25% 45%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Nhân học Văn hóa",
      attributionText: "Nguồn dẫn liệu: Hồ sơ Di sản UNESCO (02126) & Dân tục học Trung Quốc.",
      verificationStatus: "verified"
    },
    "img-hero-tang-dynasty": {
      id: "img-hero-tang-dynasty",
      src: "assets/images/articles/hero-tang-dynasty.jpg",
      titleVi: "Quy hoạch Bàn cờ Kinh đô Trường An (108 Phường) & Tam Tỉnh Lục Bộ",
      titleZh: "唐长安城一百零八坊与三省六部制图解",
      titleEn: "Tang Chang'an Checkerboard Urban Plan and Three Departments Governance",
      originalSource: "Khảo cổ học Trường An (Viện Khảo cổ TQ) & 《Tư trị thông giám · Đường kỷ》",
      sourceUrl: "https://ctext.org/wiki.pl?if=gb&res=284890",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Triều Đường (618–907 SCN)",
      description:
        "Bản vẽ kiến trúc đô thị Trường An tách biệt Hoàng thành, trục Chu Tước, Tây Thị, Đông Thị đặt cạnh sơ đồ kiểm tra chéo quyền lực Trung Thư – Môn Hạ – Thượng Thư.",
      altText:
        "Sơ đồ mặt bằng hình chữ nhật chia ô bàn cờ của thành Trường An với Cung thành đỏ phía bắc và hai khu Đông Tây Thị xanh lá bên trái; sơ đồ cơ cấu Tam Tỉnh Lục Bộ bên phải.",
      caption:
        "Kinh đô Trường An (quy hoạch 9,7 × 8,6 km với 108 phường khép kín) và cơ chế Tam Tỉnh Lục Bộ thể hiện năng lực quản trị đế chế đỉnh cao thời Đường.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "24% 48%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Phục dựng Quy hoạch Đô thị Cổ",
      attributionText: "Nguồn phục dựng: Tư liệu Khảo cổ Đô thành Trường An & Mark Edward Lewis (2009).",
      verificationStatus: "verified"
    },
    "img-hero-ink-wash": {
      id: "img-hero-ink-wash",
      src: "assets/images/great-wall-ink.jpg",
      titleVi: "Vạn Lý Trường Thành Vân Hải Thủy Mặc Đồ",
      titleZh: "万里长城云海水墨图",
      titleEn: "Ink-Wash Painting of the Great Wall Amid Sea of Clouds",
      originalSource: "Bộ sưu tập Lưu trữ Trực quan Chinese Culture Explorer",
      sourceUrl: "https://www.dpm.org.cn/",
      creator: "Tranh Thủy mặc Cổ điển (Phục chế Lưu trữ Số)",
      institution: "Chinese Culture Explorer Visual Archive",
      copyrightHolder: "CCE Curated Archive",
      license: "Editorial Archive License",
      creationDate: "Thế kỷ XX–XXI (phong cách Sơn thủy truyền thống)",
      historicalPeriod: "Mỹ học Thủy mặc Cổ truyền & Pháo đài Trấn biên thời Minh",
      description:
        "Tác phẩm thủy mặc đơn sắc cỡ đại khắc họa Vạn Lý Trường Thành uốn lượn qua các đỉnh núi đá dựng đứng và biển mây Lưu bạch, minh họa kỹ pháp Tiệm nhạt (Thủy phân ngũ sắc).",
      altText:
        "Bức tranh thủy mặc đen trắng khổ ngang: Vạn Lý Trường Thành quanh co nối liền các chòi gác trên sống núi cao hiểm trở, bên dưới là thung lũng mây mù trắng xóa và tán tùng rậm rạp góc phải.",
      caption:
        "Bức 'Vạn Lý Trường Thành Vân Hải Thủy Mặc Đồ' sử dụng thủ pháp Lưu bạch (khoảng trống biển mây) và năm sắc độ mực đen để chuyển tải chiều sâu không gian Tam viễn.",
      dimensions: "1200 × 675 px",
      width: 1200,
      height: 675,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "48% 52%",
      thumbnailFocalPoint: "36% 62%",
      authenticityType: "original-artifact",
      authenticityLabelVi: "Tác phẩm Thủy mặc Lưu trữ",
      attributionText: "Lưu trữ Hình ảnh CCE • Đối chiếu nguyên tắc mỹ học Cố Cung Danh Họa Ký.",
      verificationStatus: "verified"
    },
    "img-hero-guanxi": {
      id: "img-hero-guanxi",
      src: "assets/images/articles/hero-guanxi.jpg",
      titleVi: "Kiến trúc Tam giác Xã hội học của Guanxi & Chuẩn mực Pháp lý",
      titleZh: "中国商业“关系”三角架构与现代契约辨析",
      titleEn: "Triangular Sociological Architecture of Guanxi vs Contractual Governance",
      originalSource: "Peng & Luo (AMJ, 2000) và Doug Guthrie (The China Quarterly, 1998)",
      sourceUrl: "https://journals.aom.org/journal/amj",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Từ Mạng lưới Thương bang Minh–Thanh đến Kinh tế Hiện đại",
      description:
        "Sơ đồ tam giác liên kết ba thành tố Tín nhiệm (Xinyong), Nhân tình (Renqing) và Thể diện (Mianzi), đối chiếu với vùng giảm phụ thuộc Guanxi tại các tập đoàn niêm yết.",
      altText:
        "Sơ đồ tam giác cân bên trái với ba đỉnh tròn Xinyong màu đỏ, Mianzi màu đen và Renqing màu xanh ngọc xoay quanh tâm Cơ sở Chia sẻ Chung; ba khung phân tích thực chứng đặt bên phải.",
      caption:
        "Trong thương mại hiện đại, Guanxi vận hành dựa trên Tín nhiệm, Thể diện và Nhân tình như vốn xã hội bổ trợ, chứ không thay thế được giá thành, chất lượng và hợp đồng.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "25% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Xã hội học Kinh tế",
      attributionText: "Nguồn học thuật: Peng & Luo (2000), Doug Guthrie (1998).",
      verificationStatus: "verified"
    },
    "img-hero-tea-culture": {
      id: "img-hero-tea-culture",
      src: "assets/images/articles/hero-tea-culture.jpg",
      titleVi: "Tiến hóa Kỹ thuật Pha trà (Tiễn – Điểm – Tản) & Phổ 6 Đại Trà hệ",
      titleZh: "中国茶艺演变与六大茶类发酵谱系",
      titleEn: "Historical Evolution of Tea Brewing and the Six Tea Oxidation Categories",
      originalSource: "Lục Vũ 《Trà Kinh》 (~780 SCN), GS. Trần Duyện (1979) & Hồ sơ UNESCO 2022",
      sourceUrl: "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Triều Đường – Tống – Minh đến Đương đại (760 SCN – 2026)",
      description:
        "Biểu đồ hai tầng so sánh ba giai đoạn kỹ thuật pha trà (Tiễn trà Đường, Điểm trà Tống, Tản trà Minh) và thang mức độ oxy hóa của 6 dòng trà chính Trung Quốc.",
      altText:
        "Tầng trên chia ba ô Đường Tiễn trà, Tống Điểm trà và Minh Tản trà; tầng dưới gồm sáu thẻ đứng đại diện cho Lục trà, Bạch trà, Hoàng trà, Thanh trà Ô Long, Hồng trà và Hắc trà theo tỷ lệ oxy hóa tăng dần.",
      caption:
        "Kỹ thuật chế biến quyết định phân loại 6 đại trà hệ từ cùng một loài cây Camellia sinensis, song hành cùng tiến trình chuyển từ bánh trà nén sang trà lá nguyên cánh.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "50% 25%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Văn hóa Thương phẩm",
      attributionText: "Nguồn dẫn liệu: Lục Vũ Trà Kinh (CText) & Hồ sơ Di sản UNESCO 2022.",
      verificationStatus: "verified"
    },
    "img-hero-sino-vietnam": {
      id: "img-hero-sino-vietnam",
      src: "assets/images/articles/hero-sino-vietnam.jpg",
      titleVi: "Mô hình Ba Tầng Giao lưu Trung – Việt: Tiếp nhận, Việt hóa & Nội sinh",
      titleZh: "中越文化互动三层模型：接受、本土化与独立创造",
      titleEn: "Three-Layer Sino-Vietnamese Cultural Exchange Model",
      originalSource: "Nguyễn Tài Cẩn (1979) & Alexander Woodside (Harvard, 1971)",
      sourceUrl: "https://www.hup.harvard.edu/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Từ Bắc thuộc & Triều Lý–Trần–Lê–Nguyễn đến Hiện đại",
      description:
        "Đồ họa đối chiếu ba cột phân tách giữa yếu tố nguồn gốc Đông Á, sự bản địa hóa tại Việt Nam (âm Hán-Việt, Trúc Lâm, Hội An) và sáng tạo độc lập (Chữ Nôm, Lục bát, Thờ Mẫu).",
      altText:
        "Ba bảng dọc đặt cạnh nhau: cột kem bên trái về nguồn chữ Hán và khoa cử, cột giữa viền xanh ngọc về Tam giáo và thương cảng Hội An, cột đỏ thẫm bên phải về Chữ Nôm, đình làng và Tín ngưỡng Thờ Mẫu.",
      caption:
        "Cách tiếp cận sử học so sánh ba tầng giúp nhìn nhận khách quan vừa cầu nối ngôn ngữ Hán-Việt, vừa bản lĩnh văn hiến độc lập được Nguyễn Trãi khẳng định trong 《Bình Ngô Đại Cáo》.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 42%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Sử học So sánh",
      attributionText: "Nguồn học thuật: Nguyễn Tài Cẩn (1979) & Alexander Woodside (1971).",
      verificationStatus: "verified"
    },
    "img-hero-beijing-shanghai": {
      id: "img-hero-beijing-shanghai",
      src: "assets/images/articles/hero-beijing-shanghai.jpg",
      titleVi: "Song thành Ký Kiến trúc & Kinh doanh: Kinh Phái vs Hải Phái",
      titleZh: "京派与海派：北京四合院与上海石库门对比",
      titleEn: "Beijing Jingpai vs Shanghai Haipai Urban and Commercial Culture",
      originalSource: "Hồ sơ Di sản Trục Trung tâm Bắc Kinh UNESCO (2024) & Leo Ou-fan Lee (1999)",
      sourceUrl: "https://whc.unesco.org/en/list/1714/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Từ Đế đô Bắc Kinh đến Thương cảng Thượng Hải (Thế kỷ XIX–XXI)",
      description:
        "Đối chiếu trực diện mặt bằng Tứ Hợp Viện Bắc Kinh (Kinh Phái: trục chính tâm, thứ bậc gia tộc) với mặt đứng Bến Thượng Hải & Cổng đá Thạch Khố Môn (Hải Phái: thực dụng, khế ước).",
      altText:
        "Hình chia đôi theo chiều dọc: bên trái là sơ đồ nhà sân trong Tứ Hợp Viện với Chính phòng đỏ hướng Nam; bên phải phác họa cao ốc Art Deco Bến Thượng Hải và cổng vòm Thạch Khố Môn.",
      caption:
        "Hai cực đô thị Trung Quốc: văn hóa định chế, tôn ti vĩ mô của 'Kinh Phái' Bắc Kinh đối lập rõ nét với tinh thần hợp đồng, chi tiết và thực dụng quốc tế của 'Hải Phái' Thượng Hải.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "25% 45%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Đồ họa Đô thị học So sánh",
      attributionText: "Nguồn dẫn liệu: UNESCO Central Axis (1714) & Leo Ou-fan Lee (1999).",
      verificationStatus: "verified"
    },
    "img-hero-traditional-arch": {
      id: "img-hero-traditional-arch",
      src: "assets/images/articles/hero-traditional-arch.jpg",
      titleVi: "Mặt cắt Kết cấu Gỗ Đấu Củng & Mỹ học Viên lâm Tô Châu",
      titleZh: "斗拱减震力学与苏州园林“借景”对比",
      titleEn: "Timber Dougong Seismic Cutaway & Suzhou Classical Garden Principle",
      originalSource: "Lý Giới 《Doanh Tạo Pháp Thức》 (1103), Kế Thành 《Viên Dã》 (1631) & UNESCO 813",
      sourceUrl: "https://whc.unesco.org/en/list/813/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Triều Tống – Liêu – Minh – Thanh (Thế kỷ XI–XIX)",
      description:
        "Mặt cắt kỹ thuật chồng khối Đấu – Củng đặt tự do trên đá tảng cột nổi, đặt cạnh bản so sánh trục đối xứng cung đình với vườn cảnh 'Di bộ hoán cảnh' Tô Châu.",
      altText:
        "Bên trái vẽ mặt cắt đứng cột gỗ sơn son nâng chồng khối Đấu Củng đỡ xà mái ngói trên chân đá tảng; bên phải là hai khung đối chiếu kiến trúc cung đình Cố Cung và Viên lâm Tô Châu.",
      caption:
        "Kết cấu gỗ không đinh sắt truyền tải nặng bộ mái qua hàng chục khớp mộng Đấu củng đàn hồi, giúp Mộc tháp Ứng Huyện (1056) vượt qua hơn 40 trận động đất.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "24% 48%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Phục dựng Mặt cắt Kiến trúc",
      attributionText: "Nguồn học thuật: Lương Tư Thành (1944), UNESCO Site 813 & CText Viên Dã.",
      verificationStatus: "verified"
    },
    "img-hero-contemporary-china": {
      id: "img-hero-contemporary-china",
      src: "assets/images/articles/hero-contemporary-china.jpg",
      titleVi: "Trung Quốc Đương đại: Hạ tầng Số, Nội quyển và Làn sóng Quốc Triều",
      titleZh: "当代中国：高速数字基建、“内卷”张力与“国潮”复兴",
      titleEn: "Contemporary China: Digital Infrastructure, Involution and Guochao",
      originalSource: "World Bank China Update (2024) & UN Comtrade Database",
      sourceUrl: "https://www.worldbank.org/en/country/china/overview",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Đương đại (1978 – 2026)",
      description:
        "Ba trụ cột quan sát Trung Quốc hiện đại: mạng lưới Đường sắt cao tốc & Siêu ứng dụng thương mại số, áp lực cạnh tranh Nội quyển của giới trẻ và văn hóa tiêu dùng Quốc triều.",
      altText:
        "Infographic ba cột dọc: cột xanh dương liệt kê Đường sắt cao tốc 45.000+ km và Logistics TMĐT; cột kem giải thích Nội quyển và Thảng bình; cột đỏ phân tích Quốc triều Cố Cung và Tân thức trà ẩm.",
      caption:
        "Trung Quốc thế kỷ XXI là sự đan xen giữa siêu hạ tầng công nghiệp – logistics C2M tốc độ cao và nỗ lực tái khẳng định di sản văn hóa qua thương hiệu Gen Z ('Quốc triều').",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "18% 45%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Phân tích Đương đại",
      attributionText: "Nguồn dẫn liệu: World Bank China Overview (2024) & UN Comtrade.",
      verificationStatus: "verified"
    },

    // --- 15 IN-ARTICLE MAPS, DIAGRAMS, INFOGRAPHICS & HISTORICAL DOCUMENTS ---

    "img-map-warring-states": {
      id: "img-map-warring-states",
      src: "assets/images/editorial/map-warring-states-academies.svg",
      titleVi: "Bản đồ Địa – Tư tưởng Các Trung tâm Học thuật Chiến Quốc",
      titleZh: "战国诸子学派地域分布图",
      titleEn: "Warring States Intellectual Centers Distribution Map",
      originalSource: "Đàm Kỳ Tương 《Trung Quốc Lịch sử Địa đồ tập》 (Vol. 1) & Di chỉ Quách Điếm",
      sourceUrl: "https://ctext.org/pre-qin-and-han",
      creator: "Ban Bản đồ Lịch sử CCE",
      institution: "Chinese Culture Explorer Cartographic Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Cartographic Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Xuân Thu – Chiến Quốc (~475–221 TCN)",
      description:
        "Bản đồ vùng ảnh hưởng tư tưởng tại lưu vực Hoàng Hà và Trường Giang, định vị Khúc Phụ (Nho–Mặc), Tắc Hạ nước Tề (liên phái), Hàm Dương nước Tần (Pháp gia) và nước Sở (Đạo gia).",
      altText:
        "Bản đồ đường nét thể hiện sông Hoàng Hà và Trường Giang với bốn ký hiệu hình học khác nhau đánh dấu nước Tần, nước Lỗ, Học viện Tắc Hạ nước Tề và nước Sở kèm thước tỷ lệ.",
      caption:
        "Sự phân tán trung tâm quyền lực thời Chiến Quốc tạo điều kiện cho bốn vùng địa-văn hóa nuôi dưỡng những khuynh hướng triết học khác nhau dọc Hoàng Hà và Trường Giang.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-map",
      focalPoint: "42% 48%",
      thumbnailFocalPoint: "42% 48%",
      authenticityType: "historical-map",
      authenticityLabelVi: "Bản đồ Lịch sử Học thuật",
      attributionText: "Nguồn bản đồ học: Đàm Kỳ Tương (Tập 1) & Bảo tàng Kinh Môn.",
      verificationStatus: "verified",
      mapMetadata: {
        title: "Không gian Phân bố Các Trường phái Bách Gia Chư Tử (Thế kỷ V–III TCN)",
        timePeriod: "Thời kỳ Chiến Quốc (khoảng 475–221 TCN)",
        geographicScope: "Quan Trung, Trung Nguyên, Tề – Lỗ (Sơn Đông) và Lưu vực Giang Hán (Sở)",
        legend: [
          { symbol: "● Đỏ", label: "Nước Lỗ (Khúc Phụ): Trung tâm Nho – Mặc sơ kỳ" },
          { symbol: "▲ Vàng", label: "Học viện Tắc Hạ (Tề): Hội tụ đa học phái" },
          { symbol: "■ Xanh", label: "Nước Sở (Giang Hán): Đạo gia & Thẻ tre Quách Điếm" },
          { symbol: "● Đen", label: "Quan Trung (Tần): Trung tâm Pháp trị thực hành" }
        ],
        source: "Đàm Kỳ Tương 《Trung Quốc Lịch sử Địa đồ tập》; Báo cáo Khai quật Quách Điếm (1993).",
        methodologicalNote:
          "Đường ranh giới các nước chư hầu Chiến Quốc biến động liên tục theo chiến sự; bản đồ chỉ biểu thị tâm ảnh hưởng tư tưởng, không phản ánh biên giới hiện đại."
      }
    },
    "img-doc-han-shu": {
      id: "img-doc-han-shu",
      src: "assets/images/editorial/doc-han-shu-yiwenzhi.svg",
      titleVi: "Bản Dàn trang Thư mục 《Hán thư · Nghệ văn chí》 (Kẻ cột Chu sa)",
      titleZh: "《汉书·艺文志》九流十家文献版式还原",
      titleEn: "Archival Format Reconstruction of Han Shu Yiwen Zhi",
      originalSource: "Ban Cố 《Hán thư · Quyển 30》 (Thế kỷ I SCN) — Chinese Text Project",
      sourceUrl: "https://ctext.org/han-shu/yi-wen-zhi",
      creator: "Ban Tư liệu Cổ tịch CCE",
      institution: "Chinese Culture Explorer Archival Desk",
      copyrightHolder: "Public Domain Text / Editorial Plate",
      license: "CC BY-SA 4.0 Archival Layout",
      creationDate: "2026-11-15",
      historicalPeriod: "Đông Hán (Thế kỷ I SCN, phỏng theo bản khắc mộc bản cổ)",
      description:
        "Bản tái hiện khung kẻ cột chu sa đứng theo lối cổ tịch Hán văn, trích nguyên văn đoạn luận thuyết 'Cửu lưu thập gia' xuất phát từ chức quan Vương thất nhà Chu.",
      altText:
        "Trang giấy màu ngà đóng khung kẻ dọc đỏ chu sa chứa năm cột chữ Hán phồn thể đọc từ phải sang trái giới thiệu nguồn gốc Nho gia, Đạo gia, Âm Dương gia, Pháp gia và Mặc gia.",
      caption:
        "Phỏng theo lối đóng khung chu sa của thư tịch cổ để minh họa phân loại kinh điển trong 《Hán thư · Nghệ văn chí》 — thư mục học sớm nhất còn toàn vẹn của Trung Quốc.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "historical-document",
      focalPoint: "55% 45%",
      thumbnailFocalPoint: "55% 45%",
      authenticityType: "historical-reproduction",
      authenticityLabelVi: "Tư liệu Cổ tịch Đối chiếu",
      attributionText: "Văn bản gốc: Ban Cố (CText han-shu/yi-wen-zhi) • Trình bày cổ tịch CCE.",
      verificationStatus: "verified"
    },
    "img-diagram-chaxugeju": {
      id: "img-diagram-chaxugeju",
      src: "assets/images/editorial/diagram-confucian-chaxugeju.svg",
      titleVi: "So sánh Mô hình Quan hệ: Sai tự Cách cục vs Đoàn thể Cách cục",
      titleZh: "“差序格局”与“团体格局”比较图示",
      titleEn: "Chaxu Geju vs Tuanti Geju Relational Comparison Diagram",
      originalSource: "Phí Hiếu Thông 《Hương thổ Trung Quốc》 Chương 4 (1947)",
      sourceUrl: "https://www.ncpssd.cn/",
      creator: "Ban Đồ họa CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Xã hội học So sánh Thế kỷ XX",
      description:
        "Hình đối chiếu hai cấu trúc kết nối xã hội: gợn sóng đồng tâm đàn hồi trong xã hội Nho giáo truyền thống đối lập với khối cá nhân bình đẳng quanh luật lệ chung.",
      altText:
        "Sơ đồ so sánh hai bảng vuông: bên trái vẽ các vòng tròn đồng tâm xếp lớp quanh chữ Kỷ; bên phải vẽ khung vuông chứa sáu hình tròn độc lập mang ký hiệu từ A đến F.",
      caption:
        "Khái niệm 'Sai tự cách cục' (bên trái) giải thích vì sao luân lý Nho gia phân tầng theo thân sơ gia tộc, khác với chuẩn mực tổ chức hội đoàn phương Tây (bên phải).",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Sơ đồ Khái niệm Xã hội học",
      attributionText: "Nguồn lý thuyết: Phí Hiếu Thông (1947, Chương 4).",
      verificationStatus: "verified"
    },
    "img-diagram-yinyang-steps": {
      id: "img-diagram-yinyang-steps",
      src: "assets/images/editorial/diagram-yinyang-topography.svg",
      titleVi: "Bốn Giai đoạn Tiến hóa Phạm trù Âm Dương",
      titleZh: "阴阳观念四阶段演变图谱",
      titleEn: "Four Stages of Yin-Yang Semantic Evolution",
      originalSource: "Đối chiếu văn bản 《Kinh Thi》, 《Tả Truyện》, 《Chu Dịch》 & 《Xuân Thu Phồn Lộ》",
      sourceUrl: "https://ctext.org/book-of-changes/xi-ci-shang",
      creator: "Ban Đồ họa CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Thế kỷ X TCN – Thế kỷ II TCN",
      description:
        "Chuỗi 4 thẻ mũi tên nối tiếp theo trình tự thời gian chỉ rõ bước chuyển từ khái niệm quang chiếu nắng–râm sang y lý, đạo đức vũ trụ và ý thức hệ thời Hán.",
      altText:
        "Bốn khung cột được đánh số từ 1 đến 4 nối bằng mũi tên đỏ mô tả bốn bước tiến hóa của khái niệm Âm Dương qua Kinh Thi, Tả Truyện, Hệ Từ và Tây Hán.",
      caption:
        "Tiến trình trừu tượng hóa Âm Dương: từ định hướng nhà cửa trên sườn núi trong 《Kinh Thi》 sang lý thuyết khí y học trong 《Tả Truyện》 và ý thức hệ chính trị thời Tây Hán.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Biểu đồ Tiến hóa Văn bản",
      attributionText: "Nguồn đối chiếu: Robin R. Wang (IEP) & Văn khố CText.",
      verificationStatus: "verified"
    },
    "img-infographic-wuxing-epistemic": {
      id: "img-infographic-wuxing-epistemic",
      src: "assets/images/editorial/infographic-wuxing-correlative.svg",
      titleVi: "Phân tách Nhận thức luận: Ngũ Hành – Tứ Nguyên tố – Hóa học Hiện đại",
      titleZh: "五行学说、古希腊四元素与现代科学的认识论界限",
      titleEn: "Epistemological Distinction: Wuxing vs Four Elements vs Modern Chemistry",
      originalSource: "《Thượng Thư · Hồng Phạm》 & Joseph Needham (1956)",
      sourceUrl: "https://plato.stanford.edu/entries/chinese-change/",
      creator: "Ban Đồ họa CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Liên thời kỳ Cổ đại – Hiện đại",
      description:
        "Bảng so sánh ba cột tách bạch chức năng mô hình tương quan của Ngũ Hành cổ truyền khỏi vật chất luận Empedocles và bảng tuần hoàn nguyên tố khoa học.",
      altText:
        "Infographic ba cột đánh số La Mã [I], [II], [III] tách biệt Ngũ Hành Trung Hoa, Tứ Nguyên tố Hy Lạp cổ đại và Khoa học vật lý hóa học hiện đại.",
      caption:
        "Phân định rạch ròi nhận thức luận: Ngũ Hành mô hình hóa mối liên hệ quá trình trong tự nhiên và Đông y cổ truyền, không dùng thay thế định lượng sinh hóa hiện đại.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Thông tin So sánh",
      attributionText: "Nguồn dẫn liệu: Joseph Needham (1956) & Stanford Encyclopedia.",
      verificationStatus: "verified"
    },
    "img-doc-mawangdui": {
      id: "img-doc-mawangdui",
      src: "assets/images/editorial/doc-mawangdui-hexagrams.svg",
      titleVi: "Đối chiếu Văn bản Lụa Chu Dịch Mã Vương Đôi (168 TCN)",
      titleZh: "马王堆汉墓帛书《周易》与通行本对比",
      titleEn: "Mawangdui Silk Zhouyi vs Transmitted Wang Bi Edition Comparison",
      originalSource: "Bảo tàng Hồ Nam (Khai quật Mộ số 3 Mã Vương Đôi, 1973)",
      sourceUrl: "https://ctext.org/book-of-changes",
      creator: "Ban Tư liệu Khảo cổ CCE",
      institution: "Chinese Culture Explorer Archival Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Comparison",
      creationDate: "2026-11-15",
      historicalPeriod: "Đầu Tây Hán (chôn cất năm 168 TCN)",
      description:
        "Hai khung đối chiếu dị thể tên quẻ và trật tự sắp xếp 64 quẻ trong bản chép trên lụa khai quật năm 1973 so với bản truyền thế phổ biến từ Vương Bật.",
      altText:
        "Bảng hai cột đặt trên nền màu lụa cổ: cột trái ghi tám tên quẻ dị thể chữ Lệ từ bản lụa Mã Vương Đôi năm 168 TCN; cột phải đối chiếu trật tự Càn Khôn bản Vương Bật.",
      caption:
        "Phát hiện lụa Mã Vương Đôi (Trường Sa, 1973) chứng minh vào thế kỷ II TCN vẫn tồn tại nhiều hệ thống sắp xếp 64 quẻ song song với bản truyền thế hiện nay.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "historical-document",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "historical-reproduction",
      authenticityLabelVi: "Tư liệu Khảo cổ Đối chiếu",
      attributionText: "Nguồn khảo cổ: Bảo tàng Tỉnh Hồ Nam (Bản lụa Mã Vương Đôi 168 TCN).",
      verificationStatus: "verified"
    },
    "img-map-spring-festival": {
      id: "img-map-spring-festival",
      src: "assets/images/editorial/map-spring-festival-customs.svg",
      titleVi: "Phân vùng Tập quán Ẩm thực Xuân Tiết Dọc Đường Tần Lĩnh – Hoài Hà",
      titleZh: "秦岭—淮河一线南北春节食俗差异图",
      titleEn: "Northern Jiaozi vs Southern Niangao Customs Map along Qinling-Huaihe Line",
      originalSource: "Hồ sơ Di sản Phi vật thể Xuân Tiết (UNESCO 2024) & Địa lý Nông nghiệp TQ",
      sourceUrl: "https://ich.unesco.org/en/RL/spring-festival-social-practices-of-the-chinese-people-in-celebration-of-traditional-new-year-02126",
      creator: "Ban Bản đồ Văn hóa CCE",
      institution: "Chinese Culture Explorer Cartographic Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Tập quán Truyền thống đến Đương đại",
      description:
        "Bản đồ khái niệm phân chia vùng văn hóa ẩm thực bột mì (Sủi cảo miền Bắc) và gạo nếp (Bánh Niên cao, Thang viên miền Nam) qua dải chuyển tiếp sinh thái Tần Lĩnh – Hoài Hà.",
      altText:
        "Sơ đồ vùng chia đôi bởi đường đứt nét ngang Tần Lĩnh - Hoài Hà: nửa trên màu hồng nhạt mô tả Sủi cảo và tranh Tết phương Bắc; nửa dưới xanh nhạt mô tả Niên Cao, Lân sư phương Nam.",
      caption:
        "Sự khác biệt trên bàn ăn Giao thừa Bắc–Nam phản ánh ranh giới canh tác lúa mì – lúa nước quanh dải Tần Lĩnh – Hoài Hà, trong khi nghi lễ đoàn viên vẫn thống nhất.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-map",
      focalPoint: "46% 50%",
      thumbnailFocalPoint: "46% 50%",
      authenticityType: "historical-map",
      authenticityLabelVi: "Bản đồ Nhân học Sinh thái",
      attributionText: "Nguồn dẫn liệu: Hồ sơ Di sản UNESCO Xuân Tiết (2024).",
      verificationStatus: "verified",
      mapMetadata: {
        title: "Chuyển tiếp Tập quán Ẩm thực Ngày Tết qua Ranh giới Tần Lĩnh – Hoài Hà",
        timePeriod: "Truyền thống Lịch sử đến Thế kỷ XXI",
        geographicScope: "Trung Quốc Đại lục (Lưu vực Hoàng Hà phía Bắc & Lưu vực Trường Giang–Châu Giang phía Nam)",
        legend: [
          { symbol: "▬ Đỏ đứt nét", label: "Đới chuyển tiếp sinh thái Tần Lĩnh – Hoài Hà" },
          { symbol: "Vùng Bắc", label: "Vùng canh tác lúa mì: Sủi cảo (饺子) & Dương Ca" },
          { symbol: "Vùng Nam", label: "Vùng canh tác lúa nước: Niên cao (年糕) & Chợ hoa" }
        ],
        source: "UNESCO Intangible Cultural Heritage Nomination File 02126.",
        methodologicalNote:
          "Tần Lĩnh – Hoài Hà là vùng chuyển tiếp dần về ẩm thực và nông nghiệp; nhiều gia đình đô thị ngày nay kết hợp cả hai tập tục."
      }
    },
    "img-map-tang-silkroad": {
      id: "img-map-tang-silkroad",
      src: "assets/images/editorial/map-tang-changan-silkroad.svg",
      titleVi: "Hai Tuyến Con đường Tơ lụa Đường bộ & Hàng hải Triều Đường",
      titleZh: "唐代陆上与海上丝绸之路交通图",
      titleEn: "Tang Dynasty Overland and Maritime Silk Road Routes",
      originalSource: "Mark Edward Lewis (2009) & Tư liệu Thương cảng Quảng Châu – Bạc Ty Sứ",
      sourceUrl: "https://ctext.org/wiki.pl?if=gb&res=284890",
      creator: "Ban Bản đồ Lịch sử CCE",
      institution: "Chinese Culture Explorer Cartographic Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Triều Đường (Thế kỷ VII–IX SCN)",
      description:
        "Bản đồ mô phỏng tuyến tơ lụa đường bộ từ Trường An qua Hành lang Hà Tây đến Samarkand song song với tuyến hàng hải gió mùa từ Quảng Châu qua Giao Châu (An Nam) tới Vịnh Ba Tư.",
      altText:
        "Bản đồ lộ trình mũi tên đỏ nối Trường An, Đôn Hoàng, Samarkand tới Ba Tư ở phía trên; đường xanh nét đứt nối Quảng Châu, Giao Châu, Malacca ra Vịnh Ba Tư ở phía dưới.",
      caption:
        "Giao thương thời Đường kết nối đồng thời cả lục lộ Tây Vực (Tơ lụa – ngựa quý) và hải lộ Quảng Châu – Giao Châu (gốm Trường Sa – hương liệu Ấn Độ Dương).",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-map",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "historical-map",
      authenticityLabelVi: "Bản đồ Lịch sử Giao thương",
      attributionText: "Nguồn dẫn liệu: Đàm Kỳ Tương (Tập 5) & Harvard China's Cosmopolitan Empire.",
      verificationStatus: "verified",
      mapMetadata: {
        title: "Mạng lưới Con đường Tơ lụa Đường bộ và Hàng hải (Thế kỷ VII–IX)",
        timePeriod: "Sơ – Trung Đường (khoảng 630–850 SCN)",
        geographicScope: "Từ Trường An (Thiểm Tây) xuyên Trung Á tới Địa Trung Hải và từ Quảng Châu qua Giao Châu tới Siraf",
        legend: [
          { symbol: "━━ Đỏ liền", label: "Tuyến Đường bộ qua Đôn Hoàng – Samarkand" },
          { symbol: "╍╍ Xanh đứt", label: "Tuyến Hàng hải Gió mùa qua Quảng Châu – Giao Châu – Malacca" },
          { symbol: "● Lục", label: "Đô hộ phủ An Nam (Giao Châu) trên hành lang hàng hải" }
        ],
        source: "Mark Edward Lewis (2009); Tư liệu Tàu đắm Belitung (thế kỷ IX).",
        methodologicalNote:
          "Vị trí thương cảng mô tả các nút giao thương trọng yếu thời Đường, không vẽ lại biên giới quốc gia hiện đại."
      }
    },
    "img-diagram-ink-distances": {
      id: "img-diagram-ink-distances",
      src: "assets/images/editorial/diagram-ink-three-distances.svg",
      titleVi: "Phép Phối cảnh Tam Viễn (Quách Hy) & Thang Ngũ Sắc Mực",
      titleZh: "郭熙“三远法”构图与“墨分五色”色阶图",
      titleEn: "Guo Xi's Three Distances Perspective and Five Ink Tones Scale",
      originalSource: "Quách Hy 《Lâm tuyền cao trí》 (~1080 SCN) & Bảo tàng Cố Cung Bắc Kinh",
      sourceUrl: "https://www.dpm.org.cn/",
      creator: "Ban Đồ họa Mỹ học CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Thời Bắc Tống (Thế kỷ XI)",
      description:
        "Minh họa trực quan ba điểm nhìn phối cảnh di động (Cao viễn, Thâm viễn, Bình viễn) kèm năm ô độ xám của mực tàu pha nước (Tiêu – Nồng – Trọng – Đạm – Thanh).",
      altText:
        "Ba khung hình học bên trên minh họa ba góc nhìn Cao viễn, Thâm viễn, Bình viễn trong tranh sơn thủy; thanh ngang bên dưới gồm năm ô sắc độ mực từ đen tuyền đến xám nhạt.",
      caption:
        "Khác phép phối cảnh một điểm tụ phương Tây, tranh thủy mặc kết hợp ba góc nhìn di động 'Tam Viễn' và 5 cấp độ pha loãng mực tàu để tạo chiều sâu khí quyển.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Sơ đồ Lý luận Mỹ học",
      attributionText: "Nguồn dẫn liệu: Quách Hy 《Lâm tuyền cao trí》 & Cố Cung Danh Họa Ký.",
      verificationStatus: "verified"
    },
    "img-infographic-guanxi-sectors": {
      id: "img-infographic-guanxi-sectors",
      src: "assets/images/editorial/infographic-guanxi-empirical.svg",
      titleVi: "Vai trò Guanxi theo Loại hình Thị trường & Tuân thủ Hợp đồng",
      titleZh: "现代不同商业部门中契约规范与关系依赖度对比",
      titleEn: "Relative Role of Formal Contracts vs Personal Guanxi by Sector",
      originalSource: "Tổng hợp khung phân tích Guthrie (1998) & Peng & Luo (2000)",
      sourceUrl: "https://www.cambridge.org/core/journals/china-quarterly",
      creator: "Ban Đồ họa Kinh tế CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Giai đoạn Kinh tế Chuyển đổi & Hiện đại (1998–Nay)",
      description:
        "Biểu đồ thanh ngang dùng kết hợp màu xanh ngọc và nền gạch sọc đỏ so sánh mức độ ưu tiên hợp đồng pháp lý minh bạch giữa sàn TMĐT/FDI, xưởng OEM và dự án SME.",
      altText:
        "Biểu đồ thanh ngang phân tầng sử dụng cả mảng đặc và mảng gạch chéo phân biệt mức trọng số giữa hợp đồng pháp lý và tín nhiệm quan hệ cá nhân qua ba nhóm thị trường.",
      caption:
        "Tại các sàn thương mại điện tử minh bạch và đô thị chuẩn quốc tế, hợp đồng – giá – SLA giữ vai trò áp đảo; Guanxi chủ yếu hỗ trợ giai đoạn thăm dò hoặc xử lý linh hoạt OEM.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Tổng hợp Nghiên cứu",
      attributionText: "Khung tổng hợp định tính dựa trên D. Guthrie (1998) & M. Peng / Y. Luo (2000).",
      verificationStatus: "verified"
    },
    "img-infographic-tea-process": {
      id: "img-infographic-tea-process",
      src: "assets/images/editorial/infographic-six-tea-oxidation.svg",
      titleVi: "Quy trình Chế biến Phân tách 6 Đại Trà hệ từ Một Loài Cây",
      titleZh: "中国六大茶类加工工艺与氧化梯度流程图",
      titleEn: "Processing Steps Separating the Six Chinese Tea Categories",
      originalSource: "Phân loại GS. Trần Duyện (Đại học Nông nghiệp Chiết Giang, 1979)",
      sourceUrl: "https://ich.unesco.org/en/RL/traditional-tea-processing-techniques-and-associated-social-practices-in-china-01884",
      creator: "Ban Đồ họa CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Hệ thống hóa Hiện đại (1979 – Di sản UNESCO 2022)",
      description:
        "Lưu đồ sáu cột dọc cho thấy cách điều chỉnh công đoạn 'Sát thanh' (diệt men) trước hay sau quá trình oxy hóa tạo nên Lục trà, Bạch trà, Hoàng trà, Ô Long, Hồng trà và Hắc trà.",
      altText:
        "Lưu đồ gồm thanh tiêu đề xanh phía trên dẫn xuống sáu cột quy trình chế biến từng bước kèm phần trăm mức độ oxy hóa của sáu dòng trà Trung Quốc.",
      caption:
        "Cùng thu hái từ loài chè Camellia sinensis, thời điểm sao diệt men ('Sát thanh') và cách ủ lá quyết định hương vị khác biệt hoàn toàn giữa 6 dòng trà cổ truyền.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Lưu đồ Kỹ thuật Thủ công",
      attributionText: "Nguồn dẫn liệu: Trần Duyện (1979) & Hồ sơ Di sản UNESCO (01884).",
      verificationStatus: "verified"
    },
    "img-map-sino-vietnam": {
      id: "img-map-sino-vietnam",
      src: "assets/images/editorial/map-sino-vietnam-corridors.svg",
      titleVi: "Ba Tuyến Giao lưu Văn hóa – Sứ bộ – Thương mại Trung – Việt",
      titleZh: "中越历史文化与商贸交流三通道示意图",
      titleEn: "Historical Sino-Vietnamese Diplomatic and Maritime Trade Corridors",
      originalSource: "Khảo cứu Sử liệu Đại Việt – Minh/Thanh & Thương cảng Phố cổ Hội An",
      sourceUrl: "https://www.hup.harvard.edu/",
      creator: "Ban Bản đồ Lịch sử CCE",
      institution: "Chinese Culture Explorer Cartographic Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Thời Lý–Trần–Lê–Nguyễn (Thế kỷ XI–XIX)",
      description:
        "Bản đồ ba tuyến đường trao đổi lịch sử giữa Trung Quốc và Việt Nam: Tuyến Sứ bộ qua Nam Quan, Hành lang Sông Hồng Vân Nam – Thăng Long và Hải lộ Phúc Kiến – Hội An.",
      altText:
        "Bản đồ hành lang địa lý hiển thị ba tuyến mũi tên màu khác biệt (đỏ, xanh ngọc nét đứt, xanh lam) nối Yên Kinh, Nam Quan, Thăng Long, Vân Nam, Quảng Châu và Hội An.",
      caption:
        "Ba tuyến hành lang vừa truyền tải sách vở, sứ bộ triều cống thời quân chủ vừa nuôi dưỡng mạng lưới thương thuyền Hội quán Hoa kiều tại Phố Hiến và Hội An.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-map",
      focalPoint: "46% 50%",
      thumbnailFocalPoint: "46% 50%",
      authenticityType: "historical-map",
      authenticityLabelVi: "Bản đồ Lịch sử So sánh",
      attributionText: "Nguồn dẫn liệu: Sử liệu Sứ trình & Di sản Phố cổ Hội An (UNESCO).",
      verificationStatus: "verified",
      mapMetadata: {
        title: "Các Hành lang Giao lưu Lịch sử & Thương mại Trung Quốc – Việt Nam",
        timePeriod: "Thế kỷ XI – XIX (đối chiếu tuyến logistics hiện đại)",
        geographicScope: "Nam Trung Quốc (Quảng Tây, Vân Nam, Quảng Đông, Phúc Kiến) & Bắc–Trung Bộ Việt Nam",
        legend: [
          { symbol: "━━ Đỏ", label: "Tuyến Sứ bộ qua Nam Quan – Lạng Sơn – Bắc Kinh" },
          { symbol: "╍╍ Lục", label: "Hành lang Sông Hồng (Vân Nam – Thăng Long)" },
          { symbol: "━━ Lam", label: "Tuyến Hàng hải Phúc Kiến / Quảng Đông – Hội An" }
        ],
        source: "Tư liệu Sứ trình Bắc sứ; Alexander Woodside (1971); Hồ sơ Di sản Hội An.",
        methodologicalNote:
          "Minh họa tuyến giao thông lịch sử đường bộ và hàng hải; tên gọi địa danh lịch sử phản ánh bối cảnh sử học giai đoạn Lê–Nguyễn."
      }
    },
    "img-diagram-jingpai-haipai": {
      id: "img-diagram-jingpai-haipai",
      src: "assets/images/editorial/diagram-jingpai-haipai-architecture.svg",
      titleVi: "Đối chiếu Mặt bằng Không gian Cư trú: Tứ Hợp Viện vs Thạch Khố Môn",
      titleZh: "京派四合院与海派石库门空间平面对比",
      titleEn: "Floor-Plan Comparison: Beijing Siheyuan vs Shanghai Shikumen",
      originalSource: "Tài liệu Kiến trúc Dân cư Bắc Kinh & Bảo tồn Phố Lý Lộng Thượng Hải",
      sourceUrl: "https://whc.unesco.org/en/list/1714/",
      creator: "Ban Đồ họa Kiến trúc CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Thanh hậu kỳ – Dân Quốc (Thế kỷ XIX–XX)",
      description:
        "Mặt bằng kiến trúc so sánh không gian sân trong khép kín gia tộc Tứ Hợp Viện tại Hồ Đồng Bắc Kinh với kiểu nhà phố liền kề cổng đá Thạch Khố Môn ở Thượng Hải.",
      altText:
        "Hai sơ đồ mặt bằng hình chữ nhật cạnh nhau minh họa Tứ Hợp Viện bốn gian quay vào sân giữa và Thạch Khố Môn gồm khách đường, thiên tĩnh và cổng đá.",
      caption:
        "Hình thái cư trú phản ánh triết lý sống đô thị: Tứ Hợp Viện đề cao gia tộc truyền thống và bảo hộ khí hậu, trong khi Thạch Khố Môn là sản phẩm giao thoa thương cảng.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Mặt bằng Kiến trúc So sánh",
      attributionText: "Nguồn dẫn liệu: Lương Tư Thành & Hồ sơ Bảo tồn Thạch Khố Môn Thượng Hải.",
      verificationStatus: "verified"
    },
    "img-diagram-dougong-seismic": {
      id: "img-diagram-dougong-seismic",
      src: "assets/images/editorial/diagram-dougong-seismic.svg",
      titleVi: "Ba Lớp Giảm Chấn Cơ học trong Kết cấu Gỗ Cổ điển",
      titleZh: "中国传统木构建筑三重减震机制解析",
      titleEn: "Three-Tier Seismic Energy Dissipation in Classical Timber Architecture",
      originalSource: "Lý Giới 《Doanh Tạo Pháp Thức》 (1103) & Thực địa Mộc tháp Ứng Huyện",
      sourceUrl: "https://whc.unesco.org/en/list/813/",
      creator: "Ban Đồ họa Kiến trúc CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Thời Liêu – Tống (Thế kỷ XI–XII)",
      description:
        "Sơ đồ giải thích ba tầng tiêu tán lực động đất: trọng lượng mái ép dọc, khớp mộng Đấu củng trượt đàn hồi không đinh sắt, và chân cột đặt nổi trên tảng đá Trụ sở.",
      altText:
        "Ba thẻ hộp song song phân tích Lớp 1 Bộ mái đẩy nén, Lớp 2 Đấu củng khớp lỏng không đinh và Lớp 3 Chân cột nổi trên đá tảng.",
      caption:
        "Thay vì neo cứng vào móng bê tông, kết cấu gỗ cổ đại dùng trọng lực mái nhà kết hợp ma sát trượt tại khớp Đấu củng và chân đá tảng để triệt tiêu xung chấn.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Sơ đồ Cơ học Kết cấu",
      attributionText: "Nguồn tham khảo: 《Doanh Tạo Pháp Thức》 & Báo cáo Mộc tháp Ứng Huyện.",
      verificationStatus: "verified"
    },
    "img-infographic-contemporary-eco": {
      id: "img-infographic-contemporary-eco",
      src: "assets/images/editorial/infographic-contemporary-digital.svg",
      titleVi: "Lưu đồ Cụm Sản xuất C2M, Logistics Số & Bản sắc Quốc Triều",
      titleZh: "产业带C2M供应链、数字物流与国潮品牌升级链条",
      titleEn: "C2M Manufacturing Clusters, Digital Logistics & Guochao Ecosystem Flow",
      originalSource: "Báo cáo Chuỗi cung ứng Hàng Châu/Nghĩa Ô & Dữ liệu RCEP – UN Comtrade",
      sourceUrl: "https://comtradeplus.un.org/",
      creator: "Ban Đồ họa Kinh tế CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Đương đại (2015 – 2026)",
      description:
        "Bản đồ dòng chảy giá trị kết nối vành đai nhà máy Nghĩa Ô/Quảng Đông với hệ thống kho ngoại quan số và quá trình chuyển dịch lên thương hiệu bản sắc Quốc triều.",
      altText:
        "Lưu đồ ba khối chính kết nối Cụm công nghiệp C2M, Hạ tầng logistics thông quan số và Giá trị văn hóa Quốc triều kèm khung hàm ý cho doanh nghiệp Việt Nam.",
      caption:
        "Sự liên thông giữa cụm công nghiệp C2M, thông quan một cửa và bản địa hóa thương hiệu Quốc triều định hình năng lực cạnh tranh thương mại khu vực RCEP.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Chuỗi Cung ứng Số",
      attributionText: "Nguồn tham khảo: World Bank Economic Update (2024) & UN Comtrade.",
      verificationStatus: "verified"
    },
    "img-hero-silk-road": {
      id: "img-hero-silk-road",
      src: "assets/images/articles/hero-silk-road.jpg",
      titleVi: "Con đường Tơ lụa Lục địa & Hải trình Ấn Độ Dương – Biển Đông",
      titleZh: "陆上丝绸之路与海上陶瓷香料之路全景图",
      titleEn: "Overland Silk Road and Maritime Ceramic–Spice Trade Synthesis",
      originalSource: "《Sử Ký · Đại Uyển Liệt Truyện》, 《Trịnh Hòa Hải Đồ》 & Hồ sơ UNESCO Silk Roads",
      sourceUrl: "https://whc.unesco.org/en/list/1442/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Editorial Composition",
      creationDate: "2026-11-15",
      historicalPeriod: "Tây Hán (138 TCN) – Đầu Minh (1433 SCN)",
      description:
        "Tranh biên tập toàn cảnh đối chiếu mạng lưới đoàn lạc đà qua hành lang Hà Tây – Đôn Hoàng với hải đội thương thuyền vượt Biển Đông qua Thị Bạc Ty Tuyền Châu và cảng Cù Lao Chàm.",
      altText:
        "Bản vẽ ngang chia hai tầng cảnh quan: phía trên là sa mạc Gobi với dãy lạc đà từ Trường An qua Đôn Hoàng; phía dưới là sóng biển xanh ngọc với thuyền buồm gốm hoa lam và hải cảng Quảng Châu – Tuyền Châu.",
      caption:
        "Từ sứ bộ Trương Khiên (138 TCN) đến bảy chuyến hải trình Trịnh Hòa, thương mại lục địa và hàng hải đã nối liền kỹ nghệ lụa–giấy–gốm Trung Hoa với Trung Á, Đại Việt và Ấn Độ Dương.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "38% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tranh Tổng hợp Lịch sử Thương mại",
      attributionText: "Nguồn dẫn liệu: UNESCO Silk Roads Programme & Tư liệu Bảo tàng Hàng hải Tuyền Châu.",
      verificationStatus: "verified"
    },
    "img-map-silk-road-nodes": {
      id: "img-map-silk-road-nodes",
      src: "assets/images/editorial/map-silk-road-maritime-nodes.svg",
      titleVi: "Mạng lưới Trạm trung chuyển Đường Tơ lụa & Thương cảng Chu Đậu – Cù Lao Chàm",
      titleZh: "丝绸之路双线节点与中越陶瓷贸易港分布图",
      titleEn: "Dual Overland and Maritime Silk Road Nodes with Vietnamese Ceramic Ports",
      originalSource: "Đàm Kỳ Tương 《Trung Quốc Lịch sử Địa đồ tập》 & Báo cáo Khảo cổ học Tàu đắm Cù Lao Chàm",
      sourceUrl: "https://whc.unesco.org/en/list/1442/",
      creator: "Ban Bản đồ Lịch sử CCE",
      institution: "Chinese Culture Explorer Cartography Desk",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0 Cartographic Diagram",
      creationDate: "2026-11-15",
      historicalPeriod: "Đường – Tống – Minh (Thế kỷ VII–XVI SCN)",
      description:
        "Bản đồ chuyên đề đánh dấu tuyến lục địa Trường An–Đôn Hoàng–Kashgar và tuyến hải trình Tuyền Châu–Quảng Châu–Vân Đồn–Chu Đậu–Cù Lao Chàm–Malacca cùng bảng hàng hóa trao đổi hai chiều.",
      altText:
        "Lược đồ hai tuyến đường màu vàng hổ phách trên bộ và xanh ngọc bích trên biển nối các điểm nút Đông Á với Đông Nam Á kèm hộp chú giải vật phẩm xuất nhập khẩu.",
      caption:
        "Các thương cảng miền Bắc và miền Trung Việt Nam (Vân Đồn, Chu Đậu, Hội An – Cù Lao Chàm) giữ vai trò mắt xích sản xuất và trung chuyển chiến lược trên tuyến Tơ lụa Hàng hải.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-map",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "46% 52%",
      authenticityType: "historical-map-reconstruction",
      authenticityLabelVi: "Bản đồ Chuyên đề Thương mại Cổ đại",
      attributionText: "Tư liệu khảo cổ học: Shipwreck Ceramics Project Cù Lao Chàm & UNESCO Silk Roads.",
      verificationStatus: "verified",
      mapMetadata: {
        title: "Mạng lưới Con đường Tơ lụa Lục địa & Hàng hải Á – Âu",
        timePeriod: "Thế kỷ II TCN – Thế kỷ XVI SCN (Hán – Đường – Tống – Minh)",
        geographicScope: "Từ Quan Trung – Hành lang Hà Tây đến Biển Đông – Eo Malacca – Tây Á",
        legend: [
          { symbol: "━━ Vàng đất", label: "Tuyến lục địa: Trường An → Đôn Hoàng → Kashgar → Samarkand" },
          { symbol: "━━ Ngọc bích", label: "Tuyến hàng hải: Tuyền Châu → Quảng Châu → Cù Lao Chàm → Malacca" },
          { symbol: "◆ Đỏ chu sa", label: "Thương cảng & Xưởng gốm Việt Nam (Vân Đồn, Chu Đậu, Cù Lao Chàm)" }
        ],
        source: "UNESCO Silk Roads Inventory & Báo cáo Khai quật Gốm Chu Đậu – Cù Lao Chàm.",
        methodologicalNote:
          "Tuyến thương mại lịch sử là mạng lưới giao dịch đa chặng nối tiếp nhau (relay trade), hiếm khi một đoàn buôn duy nhất đi trọn vẹn từ Trường An tới Địa Trung Hải."
      }
    },
    "img-hero-tcm-solar": {
      id: "img-hero-tcm-solar",
      src: "assets/images/articles/hero-tcm-solar.jpg",
      titleVi: "Vòng tròn 24 Tiết khí Thiên văn Hoàng đạo & Triết lý Dưỡng sinh Nội Kinh",
      titleZh: "二十四节气天文黄道与《黄帝内经》顺时养生图",
      titleEn: "Astronomical 24 Solar Terms Ecliptic Wheel and Inner Canon Seasonal Balance",
      originalSource: "《Hoàng Đế Nội Kinh · Tố Vấn》, 《Hoài Nam Tử · Thiên Văn Huấn》 & Hồ sơ UNESCO 2016",
      sourceUrl: "https://ich.unesco.org/en/RL/the-twenty-four-solar-terms-knowledge-of-time-and-practices-developed-in-china-through-observation-of-the-sun-s-annual-motion-00647",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Chiến Quốc – Tây Hán (《Hoài Nam Tử》 139 TCN) & UNESCO 2016",
      description:
        "Đồ họa tròn đồng tâm phân bổ 24 tiết khí theo chu kỳ 15 độ kinh độ Mặt Trời gắn với Ngũ Hành 4 mùa Xuân–Hạ–Thu–Đông và bảng phân tách tri thức sử học vs y học thực chứng.",
      altText:
        "Biểu đồ vòng tròn thiên văn màu trắng ngà điểm vàng cổ và đỏ chu sa chia 24 cung tiết khí từ Lập Xuân tới Đại Hàn quanh trục bốn mùa Xuân Mộc, Hạ Hỏa, Thu Kim, Đông Thủy.",
      caption:
        "Hệ thống 24 Tiết khí đo chính xác chuyển động Mặt Trời trên hoàng đạo phục vụ nông nghiệp, đồng thời trở thành khung tham chiếu nhịp sống dưỡng sinh trong Đông y cổ truyền.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "32% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Thiên văn Nông lịch & Đông y",
      attributionText: "Nguồn: UNESCO Intangible Cultural Heritage (2016) & 《Hoài Nam Tử》.",
      verificationStatus: "verified"
    },
    "img-infographic-tcm-clock": {
      id: "img-infographic-tcm-clock",
      src: "assets/images/editorial/infographic-tcm-meridian-clock.svg",
      titleVi: "Đồng hồ Tý Ngọ Lưu Chú & Đối chiếu Đông y – Y học Hiện đại",
      titleZh: "十二时辰经络流注图解与实证医学边界说明",
      titleEn: "Twelve Shichen Meridian Circulation Model and Evidence-Based Medicine Boundary",
      originalSource: "Hệ thống Tạng tượng Kinh lạc (《Linh Khu》) & Đối chiếu Nhịp sinh học (Circadian Rhythm)",
      sourceUrl: "https://www.who.int/health-topics/traditional-complementary-and-integrative-medicine",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Hán – Tống – Hiện đại (Đối chiếu Liên ngành)",
      description:
        "Mặt đồng hồ 12 Can Chi ứng với khung 2 giờ trong ngày đặt bên cạnh bảng phân tách rõ giá trị điều độ sinh hoạt cổ truyền và chuẩn mực thử nghiệm lâm sàng hiện đại.",
      altText:
        "Vòng tròn 12 canh giờ Tý–Sửu–Dần–Mão kèm chú thích tạng phủ truyền thống bên trái và ba cột khung đối chiếu giữa Di sản Y thư, Dưỡng sinh hành vi và Y học chứng cứ bên phải.",
      caption:
        "Mô hình 'Tý Ngọ Lưu Chú' minh họa quan niệm nhịp sinh học ngày–đêm của cổ nhân, được đặt trong khung nhận thức luận tách bạch giữa văn hóa dưỡng sinh và y khoa lâm sàng.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Đối chiếu Y sử & Phương pháp luận",
      attributionText: "Nguồn tham khảo: 《Hoàng Đế Nội Kinh · Linh Khu》 & WHO Traditional Medicine Framework.",
      verificationStatus: "verified"
    },
    "img-hero-metaphysics-systems": {
      id: "img-hero-metaphysics-systems",
      src: "assets/images/articles/hero-metaphysics-systems.jpg",
      titleVi: "Hỗn Thiên Nghi Đồng Cổ & Vũ trụ đồ Thái Cực – Bát Quái",
      titleZh: "浑天仪铜器与太极八卦星象图",
      titleEn: "Bronze Armillary Sphere & Classical Taiji-Bagua Cosmological Chart",
      originalSource: "《Tứ Khố Toàn Thư · Thuật số loại》 & truyền thống Thiên văn – Dịch học Đông Á",
      sourceUrl: "https://ctext.org/siku-quanshu",
      creator: "Chinese Culture Explorer Museum Visual Studio",
      institution: "Chinese Culture Explorer Editorial Archive",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Đường – Tống – Minh – Thanh (Thế kỷ VIII–XVIII)",
      description:
        "Ảnh chụp trưng bày Hỗn thiên nghi bằng đồng cổ đặt cạnh bản đồ vũ trụ Thái Cực – Bát Quái và các vòng Can Chi thiên văn trên giấy Tuyên cổ, minh họa hệ tọa độ lịch pháp – ký hiệu học của thuật số truyền thống.",
      altText:
        "Hỗn thiên nghi đồng gỉ xanh đặt trên bục gỗ sẫm bên cạnh cuộn giấy Tuyên vẽ Thái Cực đồ, Bát Quái và vòng tròn thiên văn cổ cùng triện đỏ chu sa.",
      caption:
        "Bốn môn thuật số kinh điển (Bát Tự, Tử Vi, Phong Thủy Loan Đầu–Lý Khí, Kỳ Môn) chia sẻ cùng trục thiên văn lịch pháp Âm Dương – Ngũ Hành – Can Chi và tách biệt với khoa học thực chứng.",
      dimensions: "1376 × 768 px",
      width: 1376,
      height: 768,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "editorial-illustration",
      authenticityLabelVi: "Ảnh Minh họa Bảo tàng Thiên văn & Dịch học",
      attributionText: "Nguồn: Chinese Culture Explorer Visual Archive · Tham khảo 《Tứ Khố Toàn Thư · Thuật số》 & Richard J. Smith.",
      verificationStatus: "verified"
    },
    "img-diagram-ziwei-bazi-qimen": {
      id: "img-diagram-ziwei-bazi-qimen",
      src: "assets/images/editorial/diagram-ziwei-bazi-qimen.svg",
      titleVi: "Ma trận So sánh Hệ quy chiếu: Tử Vi, Bát Tự, Phong Thủy & Kỳ Môn",
      titleZh: "传统术数历法参数与认知边界对比矩阵",
      titleEn: "Reference Frame Matrix: Calendar Rules and Epistemic Scope Across Four Systems",
      originalSource: "Ban Nghiên cứu Cổ học CCE (Tổng hợp từ 《Tam Mệnh Thông Hội》 & 《Hoàng Đế Trạch Kinh》)",
      sourceUrl: "https://plato.stanford.edu/entries/chinese-epistemology/",
      creator: "Ban Đồ họa Nhận thức luận CCE",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Tổng hợp Liên triều (Hán – Thanh)",
      description:
        "Bảng đối chiếu 5 chiều giữa Tử Bình Bát Tự, Tử Vi Đẩu Số, Phong Thủy và Kỳ Môn Độn Giáp: lịch pháp chuẩn, tham số đầu vào, cốt lõi biểu tượng và giới hạn sử học.",
      altText:
        "Bảng ma trận bốn hàng chữ rõ nét so sánh chuẩn lịch Tiết khí hay Âm lịch, biến số không gian – thời gian và khái niệm cốt lõi như Dụng thần hay Phi tinh Tứ hóa.",
      caption:
        "Khác biệt kỹ thuật then chốt giữa Bát Tự (thuần lịch Tiết khí Mặt Trời) và Tử Vi Đẩu Số (kết hợp tuần Trăng Âm lịch với Phi Hóa 12 cung), đặt dưới góc nhìn văn hóa sử học.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-diagram",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Ma trận Đối chiếu Hệ thống Ký hiệu",
      attributionText: "Tài liệu đối chiếu: 《Tử Vi Đẩu Số Toàn Thư》 & Sử liệu Văn hóa Dân gian.",
      verificationStatus: "verified"
    },
    "img-hero-supply-chain-rcep": {
      id: "img-hero-supply-chain-rcep",
      src: "assets/images/articles/hero-supply-chain-rcep.jpg",
      titleVi: "Hành lang Chuỗi Cung ứng Trung Quốc – Việt Nam trong RCEP & ACFTA",
      titleZh: "RCEP与中国—东盟跨境供应链、原产地证书（Form E）及智慧口岸格局",
      titleEn: "China–Vietnam Cross-Border Supply Chain Corridor under RCEP and ACFTA",
      originalSource: "Tổng cục Hải quan VN, UN Comtrade & Báo cáo Hành lang Kinh tế Lạng Sơn – Bằng Tường",
      sourceUrl: "https://comtradeplus.un.org/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Đương đại (Giai đoạn Thực thi RCEP 2022–2026)",
      description:
        "Đồ họa trục dọc và luồng hàng xuyên biên giới kết nối cụm sản xuất Thâm Quyến – Quảng Châu – Nghĩa Ô qua cửa khẩu thông minh Hữu Nghị – Hải Phòng tới thị trường xuất khẩu.",
      altText:
        "Tranh sơ đồ kinh tế hiển thị luồng linh kiện và nguyên phụ liệu từ cụm nhà máy Trung Quốc sang khu công nghiệp miền Bắc Việt Nam, cùng chiều xuất khẩu nông sản qua cửa khẩu thông minh.",
      caption:
        "Chuỗi cung ứng Việt – Trung vận hành theo mô hình bổ trợ sản xuất khu vực: tối ưu chi phí nhờ quy tắc cộng gộp xuất xứ RCEP/ACFTA và thông quan điện tử.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "42% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Thương mại Quốc tế & Logistics",
      attributionText: "Nguồn tham khảo: UN Comtrade, WCO Harmonized System & ASEAN RCEP Secretariat.",
      verificationStatus: "verified"
    },
    "img-infographic-co-forme-incoterms": {
      id: "img-infographic-co-forme-incoterms",
      src: "assets/images/editorial/infographic-co-forme-incoterms.svg",
      titleVi: "Quy trình Kiểm toán Chứng từ C/O Form E, Mã HS & Incoterms Việt – Trung",
      titleZh: "中越外贸实务：Form E 原产地证、HS编码归类与海关估价流程",
      titleEn: "China–Vietnam Trade Audit: C/O Form E Rules, HS Classification & Incoterms Matrix",
      originalSource: "Quy tắc Hệ thống Hài hòa WCO (6 Quy tắc GRI), Incoterms 2020 & Thông tư C/O Form E",
      sourceUrl: "https://www.wcoomd.org/",
      creator: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Editorial Graphics",
      copyrightHolder: "Chinese Culture Explorer",
      license: "CC BY-SA 4.0",
      creationDate: "2026-11-15",
      historicalPeriod: "Chuẩn mực Ngoại thương Đương đại (2020–2026)",
      description:
        "Lưu đồ 4 bước kiểm toán bộ chứng từ ngoại thương khi nhập khẩu từ Trung Quốc: phân loại mã HS 8 số, đối chiếu trị giá FOB/CIF, kiểm tra tiêu chí xuất xứ WO/PE/RVC 40% trên Form E và kiểm tra đồng nhất hóa đơn–vận đơn.",
      altText:
        "Đồ họa bốn cột quy trình nghiệp vụ ngoại thương chỉ rõ thứ tự từ tra cứu mã HS theo 6 quy tắc GRI, tính thuế MFN hay Form E đến đối chiếu sai lệch Invoice và B/L.",
      caption:
        "Nắm vững quy tắc chuyển đổi mã số hàng hóa (CTH) hoặc hàm lượng giá trị khu vực (RVC 40%) giúp doanh nghiệp khai thác ưu đãi thuế ACFTA/RCEP hợp lệ và tránh truy thu hải quan.",
      dimensions: "1200 × 750 px",
      width: 1200,
      height: 750,
      aspectRatio: "4:3",
      role: "inline-infographic",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "conceptual-infographic",
      authenticityLabelVi: "Đồ họa Nghiệp vụ Ngoại thương & Hải quan",
      attributionText: "Nguồn quy chuẩn: WCO HS GRI Rules, ICC Incoterms 2020 & ACFTA Rules of Origin.",
      verificationStatus: "verified"
    },
    "img-painting-jiangshan-duojiao": {
      id: "img-painting-jiangshan-duojiao",
      src: "assets/images/jiangshan-ruci-duojiao.jpg",
      titleVi: "Kiệt tác Quốc họa 《Giang Sơn Như Thử Đa Kiều》 (Phó Bảo Thạch & Quan Sơn Nguyệt, 1959)",
      titleZh: "傅抱石、关山月《江山如此多娇》巨幅国画（1959年）",
      titleEn: "Monumental Landscape 'This Land So Rich in Beauty' (Fu Baoshi & Guan Shanyue, 1959)",
      originalSource: "Đại lễ đường Nhân dân Bắc Kinh (Bản chụp tư liệu tác phẩm quốc họa 1959)",
      sourceUrl: "https://www.dpm.org.cn/",
      creator: "Phó Bảo Thạch (傅抱石) & Quan Sơn Nguyệt (关山月) — Đề chữ: Mao Trạch Đông",
      institution: "Great Hall of the People, Beijing (人民大会堂)",
      copyrightHolder: "Tư liệu Nghệ thuật Lịch sử (Fair Use / Educational Citation)",
      license: "Educational & Academic Fair Use",
      creationDate: "1959",
      historicalPeriod: "Hiện đại (Thế kỷ XX – 1959)",
      description:
        "Bức quốc họa khổng lồ (9m × 6.5m) kết hợp bút pháp phóng khoáng Kim Lăng của Phó Bảo Thạch và nét vẽ khỏe khoắn Lĩnh Nam của Quan Sơn Nguyệt, quy tụ Trường Thành, Hoàng Hà, tùng xanh và hồng nhật phương Đông.",
      altText:
        "Tranh thủy mặc thiết sắc khổ lớn vẽ dãy núi tuyết trắng bên trái, tùng xanh thẫm tiền cảnh bên phải, Vạn Lý Trường Thành ẩn hiện trong biển mây và vầng mặt trời đỏ thắm góc phải phía trên cùng dòng thảo thư Giang Sơn Như Thử Đa Kiều.",
      caption:
        "《Giang Sơn Như Thử Đa Kiều》 (江山如此多娇, 1959): Sự giao hòa giữa phong cách sơn thủy Bắc tông – Nam tông, quy tụ bốn mùa và địa lý toàn cõi Trung Hoa trong một khung cảnh duy nhất.",
      dimensions: "1408 × 920 px",
      width: 1408,
      height: 920,
      aspectRatio: "16:10",
      role: "hero",
      focalPoint: "55% 42%",
      thumbnailFocalPoint: "60% 45%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Tác phẩm Quốc họa Lịch sử (1959)",
      attributionText: "Tác phẩm của Phó Bảo Thạch & Quan Sơn Nguyệt (1959), Đại lễ đường Nhân dân Bắc Kinh.",
      verificationStatus: "verified"
    },
    "img-hero-keju-examinations": {
      id: "img-hero-keju-examinations",
      src: "assets/images/articles/hero-keju-examinations.jpg",
      titleVi: "Tranh Cổ 《Lân Đường Thu Bảng》 – Sĩ tử Xem Bảng Vàng Khoa Cử Thời Minh",
      titleZh: "明代科举放榜历史画卷与登科录文献",
      titleEn: "Ming Dynasty Imperial Examination Results Announcement Scroll",
      originalSource: "Bảo tàng Khoa cử Trung Quốc Nam Kinh (Jiangnan Examination Hall) & Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/Category:Imperial_examination",
      creator: "Họa sư Cung đình thời Minh (Public Domain Archival Scan)",
      institution: "China Imperial Examination Museum, Nanjing (中国科举博物馆)",
      copyrightHolder: "Public Domain Historical Artwork",
      license: "Public Domain (PD-Old-100)",
      creationDate: "Thế kỷ XVI (Thời Minh)",
      historicalPeriod: "Tùy – Đường – Tống – Minh – Thanh (605–1905)",
      description:
        "Tư liệu hội họa cổ khắc họa cảnh đám đông sĩ tử chen chân trước cổng trường thi xem bảng vàng đề tên trúng tuyển kỳ thi Hương – Hội – Đình, phản ánh cơ chế tuyển chọn quan lại bằng văn chương suốt 1.300 năm.",
      altText:
        "Bức tranh lụa cổ màu sắc ấm vẽ hàng chục sĩ tử đội mũ nho sinh đang chăm chú nhìn lên bức tường dán bảng tên trúng tuyển khoa cử dưới mái hiên cổ kính.",
      caption:
        "Khoa cử (科举) đã kiến tạo tầng lớp 'Sĩ đại phu' (士大夫) trị quốc bằng văn học và kinh nghĩa, đồng thời lan tỏa sâu rộng sang chế độ khoa cử Nho học Việt Nam từ năm 1075 đến 1919.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Tranh Tư liệu Lịch sử Khoa cử",
      attributionText: "Nguồn: Bảo tàng Khoa cử Trung Quốc (Nam Kinh) & Wikimedia Commons Public Domain.",
      verificationStatus: "verified"
    },
    "img-doc-jinshi-stele": {
      id: "img-doc-jinshi-stele",
      src: "assets/images/museum/jinshi-stele.jpg",
      titleVi: "Rừng Bia Tiến sĩ Quốc Tử Giám Bắc Kinh & Đối chiếu Văn Miếu Hà Nội",
      titleZh: "北京国子监进士题名碑林实景摄影",
      titleEn: "Jinshi Examination Steles at the Beijing Guozijian Imperial College",
      originalSource: "Quốc Tử Giám Bắc Kinh (Beijing Guozijian Museum) & Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/Category:Guozijian_in_Beijing",
      creator: "Tư liệu Nhiếp ảnh Di sản Quốc Tử Giám",
      institution: "Beijing Guozijian & Temple of Confucius Museum",
      copyrightHolder: "Wikimedia Commons Contributors",
      license: "CC BY-SA 4.0",
      creationDate: "Thời Nguyên – Minh – Thanh (1302–1904)",
      historicalPeriod: "Nguyên – Minh – Thanh (Đối chiếu Lê Sơ Việt Nam 1484)",
      description:
        "Ảnh chụp thực tế 198 tấm bia đá khắc tên 51.624 vị Tiến sĩ đỗ kỳ thi Đình qua ba triều Nguyên, Minh, Thanh tại Quốc Tử Giám Bắc Kinh, tương ứng với 82 bia Tiến sĩ tại Văn Miếu – Quốc Tử Giám Hà Nội.",
      altText:
        "Hàng bia đá cổ cao lớn dựng thẳng hàng dưới tán cây bách cổ thụ trong khuôn viên Quốc Tử Giám Bắc Kinh.",
      caption:
        "Truyền thống dựng bia đề danh Tiến sĩ tại Quốc Tử Giám Bắc Kinh và Văn Miếu Hà Nội phản ánh triết lý 'Hiền tài là nguyên khí của quốc gia'.",
      dimensions: "1200 × 800 px",
      width: 1200,
      height: 800,
      aspectRatio: "3:2",
      role: "inline-document",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "archival-photograph",
      authenticityLabelVi: "Ảnh Chụp Hiện vật Bia đá Lịch sử",
      attributionText: "Nguồn: Quốc Tử Giám Bắc Kinh (Wikimedia Commons CC BY-SA).",
      verificationStatus: "verified"
    },
    "img-hero-four-inventions": {
      id: "img-hero-four-inventions",
      src: "assets/images/articles/hero-four-inventions.jpg",
      titleVi: "Mộc bản Khắc in Kinh Kim Cương (868 SCN) & Truyền thống Kỹ nghệ Cổ điển",
      titleZh: "敦煌藏经洞唐代咸通九年（868年）《金刚经》雕版印刷卷首画",
      titleEn: "Frontispiece of the Printed Diamond Sutra (868 CE, Tang Dynasty)",
      originalSource: "Thư viện Anh (British Library Or.8210/P.2) – Phát hiện tại Động Tàng Kinh Đôn Hoàng",
      sourceUrl: "https://commons.wikimedia.org/wiki/File: Jingangjing.jpg",
      creator: "Vương Giới (王玠) khắc in năm Hàm Thông thứ 9 nhà Đường (868 SCN)",
      institution: "British Library (Dunhuang Collection)",
      copyrightHolder: "Public Domain Historical Artifact",
      license: "Public Domain (PD-Old-100)",
      creationDate: "868 SCN (Đường Hàm Thông thứ 9)",
      historicalPeriod: "Thời Đường (868 SCN) – Tống – Minh",
      description:
        "Bản in khắc gỗ có niên đại rõ ràng cổ nhất thế giới (ngày 15 tháng 4 năm Hàm Thông thứ 9 – 868 SCN), minh chứng cho sự kết hợp giữa nghề làm giấy Thái Luân và kỹ thuật in ấn Trung Hoa cổ đại.",
      altText:
        "Bức tranh khắc gỗ đen trắng tinh xảo đầu cuộn Kinh Kim Cương năm 868 vẽ Đức Phật thuyết pháp cho tôn giả Tu-bồ-đề cùng các vị hộ pháp bên cạnh các cột chữ Hán khắc in sắc nét.",
      caption:
        "Cuộn 《Kinh Kim Cương》 in năm 868 SCN tìm thấy tại Đôn Hoàng là ấn phẩm in khắc gỗ có ghi ngày tháng hoàn chỉnh cổ nhất thế giới hiện còn lưu giữ.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Hiện vật Ấn bản Khắc gỗ Năm 868 SCN",
      attributionText: "Nguồn: British Library (Or.8210/P.2, Dunhuang Collection, Public Domain).",
      verificationStatus: "verified"
    },
    "img-doc-tiangong-kaiwu": {
      id: "img-doc-tiangong-kaiwu",
      src: "assets/images/museum/tiangong-kaiwu.jpg",
      titleVi: "Minh họa Quy trình Xeo Giấy Trúc trong 《Thiên Công Khai Vật》 (1637)",
      titleZh: "宋应星《天工开物·杀青》（1637年崇祯刻本）造纸工序版画",
      titleEn: "Papermaking Woodblock Illustration from Song Yingxing's Tiangong Kaiwu (1637)",
      originalSource: "Ấn bản Sùng Trinh năm thứ 10 (1637) của Tống Ứng Tinh (Thư viện Quốc gia Trung Quốc)",
      sourceUrl: "https://commons.wikimedia.org/wiki/Category:Tiangong_Kaiwu",
      creator: "Tống Ứng Tinh (宋应星, 1587–1666)",
      institution: "National Library of China (中国国家图书馆)",
      copyrightHolder: "Public Domain Historical Woodblock",
      license: "Public Domain (PD-Old-100)",
      creationDate: "1637 (Minh Sùng Trinh thứ 10)",
      historicalPeriod: "Cuối thời Minh (1637)",
      description:
        "Tranh khắc gỗ nguyên bản trong bộ bách khoa toàn thư kỹ thuật 《Thiên Công Khai Vật》 mô tả tỉ mỉ công đoạn ngâm tre, nấu bồ tạt,荡簾 (xeo giấy bằng liêm trúc) và ép khô giấy.",
      altText:
        "Bản khắc gỗ cổ thế kỷ XVII vẽ hai người thợ thủ công đang cầm khuôn liêm trúc vớt bột giấy từ bể nước vuông.",
      caption:
        "Tống Ứng Tinh được học giả Joseph Needham mệnh danh là 'Diderot của Trung Hoa' nhờ ghi chép định lượng chính xác các quy trình luyện kim, dệt lụa, làm giấy và gốm sứ thời Minh.",
      dimensions: "1200 × 850 px",
      width: 1200,
      height: 850,
      aspectRatio: "4:3",
      role: "inline-document",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Mộc bản Bách khoa Kỹ thuật 1637",
      attributionText: "Nguồn: 《Thiên Công Khai Vật》 (Ấn bản 1637, Public Domain).",
      verificationStatus: "verified"
    },
    "img-hero-calligraphy-five-scripts": {
      id: "img-hero-calligraphy-five-scripts",
      src: "assets/images/articles/hero-calligraphy-five-scripts.jpg",
      titleVi: "Kiệt tác Hành thư 《Lan Đình Tập Tự》 (Bản Thần Long mô phỏng theo Vương Hy Chi)",
      titleZh: "王羲之《兰亭集序》（唐冯承素神龙摹本局部）与朱文白文藏书印章",
      titleEn: "Wang Xizhi's Lantingji Xu (Tang Shenlong Facsimile Detail with Collector Seals)",
      originalSource: "Bảo tàng Cố cung Bắc Kinh (The Palace Museum, Beijing — 《Lan Đình Tập Tự》 bản Thần Long)",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:LantingXu.jpg",
      creator: "Vương Hy Chi (王羲之, 303–361) · Phùng Thừa Tố thời Đường sao mô (~thế kỷ VII)",
      institution: "The Palace Museum, Beijing (故宫博物院)",
      copyrightHolder: "Public Domain Masterpiece",
      license: "Public Domain (PD-Old-100)",
      creationDate: "353 SCN (Nguyên tác Đông Tấn) · ~705 SCN (Đường Thần Long mô bản)",
      historicalPeriod: "Đông Tấn (353 SCN) – Đường mô bản",
      description:
        "Trích đoạn đặc tả các dòng Hành thư nổi tiếng (“隨事遷，感慨係之矣…”) từ bản mô phỏng Thần Long của 《Lan Đình Tập Tự》 — ‘Thiên hạ đệ nhất Hành thư’ — cùng hệ thống ấn triện chu văn và bạch văn của các nhà sưu tầm Tống – Minh – Thanh.",
      altText:
        "Bản mô phỏng cổ cuộn giấy 《Lan Đình Tập Tự》 viết chữ Hán lối hành thư (“隨事遷感慨係之矣”) cùng các con dấu triện đỏ chu sa đóng dọc cuộn giấy.",
      caption:
        "Cận cảnh nét bút Hành thư trong 《Lan Đình Tập Tự》 (Đường Thần Long mô bản, Cố cung Bắc Kinh): đường nét mực đen (huyền) và ấn triện chu sa đỏ (chu) tạo nhịp điệu Âm – Dương sống động.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "48% 50%",
      thumbnailFocalPoint: "48% 50%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Đường triều Mô bản (神龙摹本 · Cố cung Bắc Kinh)",
      attributionText: "Nguồn: Bảo tàng Cố cung Bắc Kinh (Palace Museum, Public Domain — 《Lan Đình Tập Tự》).",
      verificationStatus: "verified"
    },
    "img-doc-lanting-scroll": {
      id: "img-doc-lanting-scroll",
      src: "assets/images/museum/lantingji-xu.jpg",
      titleVi: "《Lan Đình Tập Tự》 (Bản Mô phỏng Thần Long của Phùng Thừa Tố Thời Đường)",
      titleZh: "王羲之《兰亭集序》（唐冯承素神龙本，故宫博物院藏）",
      titleEn: "Preface to the Poems Collected from the Orchid Pavilion (Shenlong Copy, Palace Museum)",
      originalSource: "Bảo tàng Cố cung Bắc Kinh (The Palace Museum, Beijing)",
      sourceUrl: "https://www.dpm.org.cn/",
      creator: "Vương Hy Chi (王羲之, 353 SCN) — Bản câu điền (钩填) của Phùng Thừa Tố thời Đường",
      institution: "The Palace Museum, Beijing (故宫博物院)",
      copyrightHolder: "Public Domain Masterpiece",
      license: "Public Domain (PD-Old-100)",
      creationDate: "353 SCN (Đông Tấn Vĩnh Hòa thứ 9)",
      historicalPeriod: "Đông Tấn (353) – Đường Thần Long (705)",
      description:
        "Tác phẩm được tôn xưng là 'Thiên hạ Đệ nhất Hành thư', nổi tiếng với 20 chữ 'Chi' (之) viết theo 20 biến thể bút pháp hoàn toàn khác nhau, không chữ nào lặp lại.",
      altText:
        "Cuộn giấy lụa cổ viết 28 dòng chữ Hán lối hành thư thanh thoát, uyển chuyển kèm các ấn giám hoàng gia.",
      caption:
        "20 chữ 'Chi' (之) biến hóa thiên hình vạn trạng trong 《Lan Đình Tập Tự》 là chuẩn mực tối cao của nguyên lý 'Thư bất đồng thể' trong thư pháp cổ điển.",
      dimensions: "1400 × 650 px",
      width: 1400,
      height: 650,
      aspectRatio: "21:9",
      role: "inline-document",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Đường Thần Long mô bản • Bảo tàng Cố cung Bắc Kinh",
      attributionText: "Nguồn: Bảo tàng Cố cung Bắc Kinh (The Palace Museum, Public Domain).",
      verificationStatus: "verified"
    },
    "img-infographic-sinoviet-script": {
      id: "img-infographic-sinoviet-script",
      src: "assets/images/articles/hero-calligraphy-five-scripts.jpg",
      srcSet: "assets/images/articles/hero-calligraphy-five-scripts.jpg",
      titleVi: "Hệ thống Văn tự Hán – Nôm & Đối chiếu Ngữ âm Lịch sử Trung – Việt",
      titleEn: "Classical Script & Sino-Vietnamese Phonological Correspondence Plate",
      authorOrCreator: "Tư liệu Thư pháp & Văn bản Cổ điển",
      copyrightHolder: "Public Domain Calligraphic Specimen",
      license: "Public Domain",
      creationDate: "Đông Tấn – Đương đại",
      historicalPeriod: "Tiến hóa Văn tự & Hán–Việt",
      description: "Đối chiếu năm thể chữ Hán (Triện, Lệ, Khải, Hành, Thảo) và sự bảo lưu âm Hán–Việt cổ.",
      altText: "Bản mẫu thư pháp đối chiếu chữ Hán kinh điển phục vụ nghiên cứu Hán–Việt.",
      caption: "Đối chiếu hình thể chữ Hán cổ điển và cấu trúc âm Hán–Việt lịch sử trong văn bản học thuật và hợp đồng.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "inline",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Tư liệu Thư pháp & Văn tự học",
      attributionText: "Nguồn: Bộ sưu tập Văn tự học Cổ điển (Public Domain).",
      verificationStatus: "verified"
    },
    "img-hero-hanviet-false-friends": {
      id: "img-hero-hanviet-false-friends",
      src: "assets/images/articles/hero-hanviet-false-friends.jpg",
      titleVi: "Mộc bản Song ngữ Hán – Nôm 《Chỉ Nam Ngọc Âm Giải Nghĩa》 & Từ vựng Ngoại thương",
      titleZh: "汉喃古籍《指南玉音解义》书影与中越商务同形异义词对照",
      titleEn: "Bilingual Han-Nom Lexicon Woodblock and Sino-Vietnamese Semantic Divergence",
      originalSource: "Thư viện Viện Nghiên cứu Hán Nôm & Tư liệu Văn khắc Hán Nôm Việt Nam",
      sourceUrl: "https://commons.wikimedia.org/wiki/Category:Ch%E1%BB%89_nam_ng%E1%BB%8Dc_%C3%A2m_gi%E1%BA%A3i_ngh%C4%A9a",
      creator: "Tư liệu Từ điển học Hán – Nôm Lịch sử (Thế kỷ XVII)",
      institution: "Viện Nghiên cứu Hán Nôm & National Library of Vietnam",
      copyrightHolder: "Public Domain Historical Woodblock Text",
      license: "Public Domain (PD-Old-100)",
      creationDate: "Thế kỷ XVII",
      historicalPeriod: "Thời Lê Trung Hưng – Đương đại",
      description:
        "Trang mộc bản cổ đối chiếu chữ Hán và giải nghĩa tiếng Việt (chữ Nôm), đặt nền tảng lịch sử cho việc phân tích sự dịch chuyển nghĩa của từ Hán-Việt trong tiếng Trung thương mại hiện đại.",
      altText:
        "Trang sách cổ in mộc bản chữ Hán cỡ lớn xen kẽ hai hàng chữ Nôm giải nghĩa cỡ nhỏ đóng khung viền đen truyền thống.",
      caption:
        "Hiểu rõ cơ chế chuyển nghĩa lịch sử giữa từ Hán-Việt và tiếng Trung hiện đại (như 经理, 困难, 合作, 报关) giúp người học tránh bẫy 'bạn giả ngôn ngữ' trong đàm phán và dịch thuật hợp đồng.",
      dimensions: "1600 × 900 px",
      width: 1600,
      height: 900,
      aspectRatio: "16:9",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "50% 48%",
      authenticityType: "historical-artwork",
      authenticityLabelVi: "Tư liệu Mộc bản Từ điển học Hán–Việt",
      attributionText: "Nguồn: Tư liệu Mộc bản Hán Nôm Cổ điển (Wikimedia Commons Public Domain).",
      verificationStatus: "verified"
    },
    "img-forbidden-city-imperial-axis-gate": {
      id: "img-forbidden-city-imperial-axis-gate",
      src: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
      titleVi: "Trục Thần Đạo Tử Cấm Thành Qua Cổng Đinh Đồng Hoàng Gia Tới Thái Hòa Điện",
      titleZh: "紫禁城中轴线红门铜钉遥望太和殿全景",
      titleEn: "Forbidden City Sacred Axial Vista Through Crimson Studded Doors to the Hall of Supreme Harmony",
      originalSource: "Tư liệu Ảnh Kiến trúc Tử Cấm Thành do Nhà sáng lập Bổ sung",
      sourceUrl: "https://en.dpm.org.cn/",
      creator: "Architectural Field Photography Collection",
      institution: "Chinese Culture Explorer 3D & Museum Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "Kiến trúc 1406–1695",
      historicalPeriod: "Minh Vĩnh Lạc – Thanh Khang Hy",
      description:
        "Góc nhìn kinh điển dọc trục Thần Đạo Nam–Bắc qua hai cánh cổng son đinh đồng Cửu Hoành Cửu Tung (9 hàng × 9 cột = 81 đinh tượng trưng Cửu Ngũ Chí Tôn) hướng thẳng tới Tam Đài Hán Bạch Ngọc và mái Trọng Diêm Vũ Điện của Thái Hòa Điện.",
      altText:
        "Hai cánh cổng son đỏ đính hàng đinh đồng vàng mở ra hướng thẳng tới Điện Thái Hòa mái vàng trên nền đá trắng ba tầng dưới ánh hoàng hôn rực rỡ.",
      caption:
        "Cổng son 81 đinh đồng mở trục Thần Đạo tiến vào Điện Thái Hòa trên tam đài Hán Bạch Ngọc (Tu Di Tọa) tại Tử Cấm Thành Bắc Kinh.",
      dimensions: "1200 × 800 px",
      width: 1200,
      height: 800,
      aspectRatio: "3:2",
      role: "hero",
      focalPoint: "50% 48%",
      thumbnailFocalPoint: "50% 48%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Ảnh Kiến trúc Cung đình",
      attributionText: "Nguồn: Bộ sưu tập Tư liệu Kiến trúc Tử Cấm Thành — Chinese Culture Explorer.",
      verificationStatus: "verified"
    },
    "img-forbidden-city-jingshan-panorama": {
      id: "img-forbidden-city-jingshan-panorama",
      src: "assets/images/museum/forbidden-city-jingshan-panorama.webp",
      titleVi: "Toàn cảnh Trục Kiến trúc Tử Cấm Thành Nhìn Từ Đỉnh Cảnh Sơn",
      titleZh: "景山万春亭俯瞰紫禁城中轴线全景",
      titleEn: "Aerial Panorama of the Forbidden City Along the Central Axis from Jingshan",
      originalSource: "Tư liệu Ảnh Toàn cảnh Cố Cung Bắc Kinh",
      sourceUrl: "https://en.dpm.org.cn/",
      creator: "Architectural Field Photography Collection",
      institution: "Chinese Culture Explorer 3D & Museum Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "Kiến trúc 1406–1695",
      historicalPeriod: "Minh – Thanh (明清)",
      description: "Toàn cảnh biển mái ngói lưu ly hoàng gia vàng rực nhìn dọc trục trung tâm Nam–Bắc từ công viên Cảnh Sơn phía Bắc.",
      altText: "Toàn cảnh quần thể cung điện Tử Cấm Thành mái ngói vàng nhìn từ trên cao xuống Thần Vũ Môn.",
      caption: "Biển mái lưu ly hoàng gia và hệ thống sân chầu đối xứng tuyệt đối của Tử Cấm Thành.",
      dimensions: "1400 × 840 px",
      width: 1400,
      height: 840,
      aspectRatio: "16:10",
      role: "gallery",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Toàn cảnh Cố Cung",
      attributionText: "Nguồn: Tư liệu Kiến trúc Tử Cấm Thành — Chinese Culture Explorer.",
      verificationStatus: "verified"
    },
    "img-forbidden-city-crimson-gate-terrace": {
      id: "img-forbidden-city-crimson-gate-terrace",
      src: "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg",
      titleVi: "Ngưỡng Cổng Son Đinh Đồng & Bệ Đá Hán Bạch Ngọc Thái Hòa",
      titleZh: "紫禁城红门铜钉与白玉栏杆御道视角",
      titleEn: "Framing Through Crimson Palace Doors Toward Triple Marble Terraces",
      originalSource: "Tư liệu Ảnh Kiến trúc Tử Cấm Thành",
      sourceUrl: "https://en.dpm.org.cn/",
      creator: "Architectural Field Photography Collection",
      institution: "Chinese Culture Explorer 3D & Museum Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "Minh – Thanh",
      historicalPeriod: "Minh Vĩnh Lạc – Thanh Khang Hy",
      description: "Khung cảnh hai cánh cửa son mở ra lối ngự đạo lát đá trắng cùng lan can Hán Bạch Ngọc bao quanh điện lớn.",
      altText: "Cánh cổng gỗ đỏ đính đinh đồng vàng mở ra hướng đại điện trên nền đá trắng.",
      caption: "Đối xứng nghi lễ qua ngưỡng cửa son hoàng thành Bắc Kinh.",
      dimensions: "1200 × 900 px",
      width: 1200,
      height: 900,
      aspectRatio: "4:3",
      role: "gallery",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Ảnh Thực địa Cố Cung",
      attributionText: "Nguồn: Tư liệu Kiến trúc Tử Cấm Thành — Chinese Culture Explorer.",
      verificationStatus: "verified"
    },
    "img-forbidden-city-autumn-ginkgo-moat": {
      id: "img-forbidden-city-autumn-ginkgo-moat",
      src: "assets/images/museum/forbidden-city-autumn-ginkgo-moat.jpg",
      titleVi: "Hào Nước Hộ Thành Tử Cấm Thành & Tán Ngân Hạnh Mùa Thu",
      titleZh: "故宫筒子河与银杏秋韵倒影",
      titleEn: "Forbidden City Moat Reflection and Golden Autumn Ginkgo Canopy",
      originalSource: "Tư liệu Ảnh Kiến trúc Hộ Thành Hà Bắc Kinh",
      sourceUrl: "https://en.dpm.org.cn/",
      creator: "Architectural Field Photography Collection",
      institution: "Chinese Culture Explorer 3D & Museum Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "1406–1420",
      historicalPeriod: "Minh – Thanh",
      description: "Hệ thống Hộ Thành Hà (Đồng Tử Hà) rộng 52 mét soi bóng thành trì và lầu cổng mái lưu ly dưới tán ngân hạnh thu.",
      altText: "Hào nước phẳng lặng phản chiếu cổng thành Cố Cung mái vàng dưới tán lá ngân hạnh vàng rực.",
      caption: "Hệ thống phòng thủ thủy đạo Đồng Tử Hà rộng 52 m bao quanh tường thành Tử Cấm Thành.",
      dimensions: "960 × 1280 px",
      width: 960,
      height: 1280,
      aspectRatio: "3:4",
      role: "gallery",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Ảnh Hộ Thành Hà",
      attributionText: "Nguồn: Tư liệu Kiến trúc Tử Cấm Thành — Chinese Culture Explorer.",
      verificationStatus: "verified"
    },
    "img-jiuzhaigou-five-flower-lake": {
      id: "img-jiuzhaigou-five-flower-lake",
      src: "assets/images/museum/jiuzhaigou-five-flower-lake.jpg",
      titleVi: "Ngũ Hoa Hải – Thung lũng Cửu Trại Câu (Tứ Xuyên)",
      titleZh: "四川九寨沟五花海秋色",
      titleEn: "Five Flower Lake in Autumn Foliage, Jiuzhaigou Valley (Sichuan)",
      originalSource: "Hồ sơ Địa văn hóa Tứ Xuyên · UNESCO World Heritage",
      sourceUrl: "https://whc.unesco.org/en/list/637/",
      creator: "Sichuan Geographical Field Collection",
      institution: "Chinese Culture Explorer Atlas Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "Đương đại",
      historicalPeriod: "Di sản Thiên nhiên Thế giới UNESCO",
      description: "Hồ đá vôi xanh ngọc bích tại Cửu Trại Câu, châu tự trị A Bá, Tứ Xuyên phản chiếu sắc rừng lá kim mùa thu.",
      altText: "Mặt hồ xanh ngọc trong vắt phản chiếu rừng cây lá vàng lá đỏ trên sườn núi Cửu Trại Câu.",
      caption: "Ngũ Hoa Hải mùa thu tại Cửu Trại Câu — biểu tượng địa mạo đá vôi karst Tứ Xuyên.",
      dimensions: "1280 × 853 px",
      width: 1280,
      height: 853,
      aspectRatio: "3:2",
      role: "gallery",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Địa mạo Tứ Xuyên",
      attributionText: "Nguồn: Hồ sơ Địa phương chí 34 Tỉnh/Thành CCE.",
      verificationStatus: "verified"
    },
    "img-jiuzhaigou-emerald-autumn-forest": {
      id: "img-jiuzhaigou-emerald-autumn-forest",
      src: "assets/images/museum/jiuzhaigou-emerald-autumn-forest.webp",
      titleVi: "Hồ Gương & Rừng Thu Sắc Vàng – Đỏ Cửu Trại Câu",
      titleZh: "九寨沟镜海碧水金秋",
      titleEn: "Mirror Waters and Submerged Timber at Jiuzhaigou Autumn Sanctuary",
      originalSource: "Hồ sơ Địa văn hóa Tứ Xuyên · UNESCO World Heritage",
      sourceUrl: "https://whc.unesco.org/en/list/637/",
      creator: "Sichuan Geographical Field Collection",
      institution: "Chinese Culture Explorer Atlas Archive",
      copyrightHolder: "Archival Reference",
      license: "Editorial & Educational Use",
      creationDate: "Đương đại",
      historicalPeriod: "Di sản Thiên nhiên Thế giới UNESCO",
      description: "Làn nước giàu canxi cacbonat trong suốt nhìn thấu thân cây hóa vôi dưới đáy hồ và cầu gỗ ven bờ.",
      altText: "Lối đi gỗ uốn lượn bên mặt hồ xanh ngọc trong veo phản chiếu rừng thu Cửu Trại Câu.",
      caption: "Hồ nước trong vắt giàu khoáng travertine giữa khu bảo tồn thiên nhiên Cửu Trại Câu.",
      dimensions: "1280 × 960 px",
      width: 1280,
      height: 960,
      aspectRatio: "4:3",
      role: "gallery",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Địa mạo Tứ Xuyên",
      attributionText: "Nguồn: Hồ sơ Địa phương chí 34 Tỉnh/Thành CCE.",
      verificationStatus: "verified"
    },
    "img-map-silk-road-corridors": {
      id: "img-map-silk-road-corridors",
      src: "assets/images/academic/tang-sancai-camel.jpg",
      titleVi: "Lộ trình Truyền bá Kỹ thuật Trên Con đường Tơ lụa Lục địa & Hải thương",
      titleZh: "丝绸之路与四大发明西传路线图",
      titleEn: "Overland & Maritime Silk Road Transmission of Paper, Compass, Printing & Gunpowder",
      description: "Tượng lạc đà gốm Tam Thái thời Đường minh chứng mạng lưới giao lưu kỹ thuật, thương mại từ Trường An và Tuyền Châu tới Samarkand và Đại lục Á–Âu.",
      altText: "Tượng gốm Tam Thái lạc đà Con đường Tơ lụa thời Thịnh Đường tại Bảo tàng Lịch sử Thiểm Tây.",
      caption: "Mạng lưới Con đường Tơ lụa đưa nghề làm giấy, la bàn và kỹ nghệ in Trung Hoa lan tỏa khắp Á–Âu.",
      dimensions: "1200 × 800 px",
      width: 1200,
      height: 800,
      aspectRatio: "3:2",
      role: "inline",
      focalPoint: "50% 42%",
      thumbnailFocalPoint: "50% 42%",
      authenticityType: "museum-artifact",
      authenticityLabelVi: "Hiện vật Con đường Tơ lụa Đường triều",
      attributionText: "Nguồn: Shaanxi History Museum Archival Collection.",
      verificationStatus: "verified"
    },
    "img-diagram-yinyang-cosmology": {
      id: "img-diagram-yinyang-cosmology",
      src: "assets/images/articles/hero-yinyang.jpg",
      titleVi: "Triết lý Bố cục Âm Dương · Kế Bạch Đương Hắc (计白当黑)",
      titleZh: "太极阴阳与书法留白美学图式",
      titleEn: "Yin-Yang Polarity & Blank-Space Aesthetics in Classical Chinese Calligraphy",
      description: "Minh họa sự cân bằng giữa khoảng trắng Lưu bạch (Dương) và nét mực Huyền mặc (Âm) trong bố cục thư họa cổ điển.",
      altText: "Đồ hình Thái Cực Âm Dương và thư pháp cổ điển trên nền giấy tuyên.",
      caption: "Tương phản mực đen và khoảng trống giấy trắng vận hành theo quy luật chuyển hóa Âm – Dương.",
      dimensions: "1280 × 800 px",
      width: 1280,
      height: 800,
      aspectRatio: "16:10",
      role: "inline",
      focalPoint: "50% 50%",
      thumbnailFocalPoint: "50% 50%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Mỹ học Thư họa Cổ điển",
      attributionText: "Nguồn: Chinese Culture Explorer Editorial Archive.",
      verificationStatus: "verified"
    },
    "img-diagram-confucian-circles": {
      id: "img-diagram-confucian-circles",
      src: "assets/images/articles/hero-confucianism.jpg",
      titleVi: "Cấu trúc Tư tưởng Nho gia · Tứ Thư Ngũ Kinh & Đạo Trị Quốc",
      titleZh: "儒家礼治秩序与四书五经科举体系",
      titleEn: "Confucian Institutional Order: Four Books, Five Classics & Scholarly Governance",
      description: "Không gian Khổng Miếu – Quốc Tử Giám biểu trưng cho hệ thống giáo dục khoa cử lấy Tứ Thư Ngũ Kinh làm nền tảng suốt nhiều thế kỷ.",
      altText: "Khung cảnh Khổng Miếu và văn hiến Nho gia cổ điển Trung Hoa.",
      caption: "Hệ thống Tứ Thư Ngũ Kinh định hình chuẩn mực khoa cử Quốc Tử Giám Bắc Kinh và Văn Miếu Hà Nội.",
      dimensions: "1280 × 800 px",
      width: 1280,
      height: 800,
      aspectRatio: "16:10",
      role: "inline",
      focalPoint: "50% 45%",
      thumbnailFocalPoint: "50% 45%",
      authenticityType: "editorial-reconstruction",
      authenticityLabelVi: "Tư liệu Văn hiến Nho gia Đông Á",
      attributionText: "Nguồn: Chinese Culture Explorer Editorial Archive.",
      verificationStatus: "verified"
    }
  };

  // ==========================================================================
  // 22 EDITORIAL SCHEMAS (One unique heroImageId per article, mapped to all categories)
  // ==========================================================================
  const articleEditorial = {
    "hundred-schools": {
      articleId: "hundred-schools",
      publishedDate: "2026-09-12",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "historical-feature",
      storytellingFormatLabel: "Historical Feature • Chuyên khảo Lịch sử Tư tưởng",
      standfirst:
        "Trong sự tan rã của trật tự lễ nhạc Tây Chu thế kỷ VI–III TCN, sự xuất hiện của tầng lớp trí thức tự do di chuyển và Học viện Tắc Hạ đã châm ngòi cho cuộc tranh luận đa cực sâu rộng bậc nhất lịch sử Á Đông.",
      heroImageId: "img-hero-hundred-schools",
      thumbnailConfig: {
        imageId: "img-hero-hundred-schools",
        aspectRatio: "16:10",
        focalPoint: "32% 45%"
      },
      keyTakeaways: [
        "Sự phân quyền đa cực giữa các nước chư hầu (chưa có độc tôn một học phái từ trung ương) chính là điều kiện ươm mầm 'thị trường ý tưởng' Bách Gia Chư Tử.",
        "Hai trục tranh luận xuyên suốt: Thiên nhiên (Vô vi Đạo gia) vs Nhân tạo (Lễ giáo Nho gia), và Đức trị vs Pháp trị khách quan.",
        "Thẻ tre Quách Điếm (~300 TCN) chứng minh văn bản Nho – Đạo sơ kỳ từng lưu hành đan xen trước khi phân tuyến đối lập đời sau."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-map-warring-states",
          layout: "wide",
          callouts: [
            { code: "A1", title: "Học viện Tắc Hạ (Nước Tề)", detail: "Tài trợ bổng lộc tự do tranh biện không gò bó hành chính." },
            { code: "A2", title: "Khu vực Sở (Giang Hán)", detail: "Thư tịch thẻ tre Quách Điếm bảo tồn bản Đạo Đức Kinh cổ." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-hundred-schools", "img-map-warring-states", "img-doc-han-shu"],
      historicalDocument: {
        imageId: "img-doc-han-shu",
        docTypeLabel: "Chính sử & Thư mục học (《汉书·艺文志》)",
        period: "Đông Hán (Thế kỷ I SCN, kế thừa Thất Lược của Lưu Hâm)",
        holdingInstitution: "Chinese Text Project (Đối chiếu bản khắc cổ)",
        transcriptionZh: "儒家者流，盖出于司徒之官…道家者流，盖出于史官…法家者流，盖出于理官。",
        translationVi: "Phái Nho gia khởi nguồn từ chức quan Tư Đồ dạy dỗ dân chúng; phái Đạo gia xuất phát từ Sử quan chép sử suy nghiệm biến dịch hưng vong; Pháp gia từ Lý quan giữ hình luật.",
        archivalNote: "Tài liệu thư mục cổ nhất phân chia tư tưởng Tiên Tần thành Cửu lưu thập gia; đây là bản dàn trang học thuật phục dựng từ chính sử."
      },
      categoryModule: {
        kind: "philosophy",
        title: "Cấu trúc Tranh luận Tiên Tần & Trường phái Chủ chốt",
        items: [
          { tag: "Nho gia 儒家", label: "Nhân – Lễ – Chính danh", note: "Tái xây dựng trật tự qua giáo hóa đạo đức và trách nhiệm của bậc Quân tử." },
          { tag: "Đạo gia 道家", label: "Đạo – Vô vi – Tự nhiên", note: "Hoài nghi quy phạm giả tạo; đề cao sự hòa điệu không gượng ép với tự nhiên." },
          { tag: "Pháp gia 法家", label: "Pháp – Thuật – Thế", note: "Đo lường quản trị bằng pháp luật khách quan và cơ chế thưởng–phạt minh định." },
          { tag: "Mặc gia 墨家", label: "Kiêm ái – Phi công – Mặc Kinh", note: "Phản chiến, đề cao thực dụng lao động, quang học và logic hình thức sớm." }
        ]
      }
    },

    "confucianism-society": {
      articleId: "confucianism-society",
      publishedDate: "2026-09-18",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "standard-academic",
      storytellingFormatLabel: "Standard Academic • Phân tích Triết học – Xã hội",
      standfirst:
        "Vượt xa khuôn mẫu lễ giáo đơn thuần, Nho gia tồn tại hơn hai thiên niên kỷ nhờ ba lần tái cấu trúc lý luận và mạng lưới quan hệ đồng tâm mang tên 'Sai tự cách cục'.",
      heroImageId: "img-hero-confucianism",
      thumbnailConfig: {
        imageId: "img-hero-confucianism",
        aspectRatio: "16:10",
        focalPoint: "25% 50%"
      },
      keyTakeaways: [
        "Khổng Tử dân chủ hóa chuẩn mực 'Quân tử' từ dòng dõi quý tộc thành phẩm chất đạo đức ai cũng có thể rèn luyện ('Hữu giáo vô loại').",
        "Mô hình 'Sai tự cách cục' (Phí Hiếu Thông) lý giải nghĩa vụ Ngũ luân thay đổi linh hoạt theo vòng tròn thân sơ quanh cá nhân.",
        "Thể chế Khoa cử kết nối trực tiếp kinh điển Nho học với bộ máy tuyển chọn quan lại khắp Đông Á, bao gồm Việt Nam."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-diagram-chaxugeju",
          layout: "wide",
          callouts: [
            { code: "B1", title: "Sai tự Cách cục", detail: "Ranh giới công–tư co giãn theo độ thân thích và đồng hương." },
            { code: "B2", title: "Đoàn thể Cách cục", detail: "Cá nhân nguyên tử gắn kết bởi hợp đồng chung bình đẳng." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-confucianism", "img-diagram-chaxugeju", "img-doc-han-shu"],
      historicalDocument: {
        imageId: "img-hero-confucianism",
        docTypeLabel: "Sơ đồ Lý thuyết & Tư liệu Văn Miếu",
        period: "Tống – Thanh & Nghiên cứu Xã hội học 1947",
        holdingInstitution: "Stanford Encyclopedia of Philosophy / NCPSSD",
        transcriptionZh: "君子求诸己，小人求诸人。己欲立而立人，己欲达而达人。",
        translationVi: "Người quân tử đòi hỏi nghiêm khắc nơi chính bản thân mình; mình muốn đứng vững thì giúp người khác đứng vững, mình muốn hanh thông thì giúp người khác hanh thông.",
        archivalNote: "Trích nguyên văn 《Luận Ngữ》 (Vệ Linh Công & Ung Dã) được chọn làm nền tảng chương trình khoa cử Tứ Thư của Chu Hy từ 1313."
      },
      categoryModule: {
        kind: "philosophy",
        title: "Ba Bước Tái cấu trúc Lịch sử của Nho học",
        items: [
          { tag: "Tiên Tần", label: "Khổng – Mạnh – Tuân", note: "Thiết lập hạt nhân nhân văn: Nhân, Lễ, Nghĩa, Tính Thiện và Trọng dân." },
          { tag: "Tây Hán", label: "Đổng Trọng Thư & Thái Học", note: "Kết hợp Nho học với vũ trụ luận Âm Dương làm ý thức hệ hành chính thống nhất." },
          { tag: "Tống – Minh", label: "Chu Hy & Vương Dương Minh", note: "Siêu hình hóa đạo đức thành 'Thiên lý', hoàn chỉnh Tứ Thư làm đề thi Khoa cử." },
          { tag: "Đương đại", label: "Phê phán Ngũ Tứ & Tân Nho gia", note: "Tách lọc yếu tố gia trưởng chuyên chế để đối thoại với quản trị hiện đại." }
        ]
      }
    },

    "yinyang-origins": {
      articleId: "yinyang-origins",
      publishedDate: "2026-09-25",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "visual-essay",
      storytellingFormatLabel: "Visual Essay • Giải mã Nguồn gốc Khái niệm",
      standfirst:
        "Từ sườn núi hướng nắng và khuất nắng ở lưu vực Hoàng Hà trong 《Kinh Thi》, 'Âm' và 'Dương' đã tiến hóa thành một mô hình tư duy quan hệ đặc sắc của triết học và Đông y.",
      heroImageId: "img-hero-yinyang",
      thumbnailConfig: {
        imageId: "img-hero-yinyang",
        aspectRatio: "16:10",
        focalPoint: "30% 48%"
      },
      keyTakeaways: [
        "Địa danh cổ Trung Quốc lưu giữ nghĩa gốc Âm–Dương: Lạc Dương (phía bắc sông Lạc hứng nắng Nam), Hoa Âm (sườn bắc núi Hoa Sơn khuất nắng).",
        "Không phải hai lực lượng siêu nhiên thiện–ác tuyệt đối, mà là hai pha quan hệ tương đối luôn bao hàm lẫn nhau.",
        "Khoa học hiện đại không coi Âm Dương là hạt vật lý; cần tách bạch ngôn ngữ triết lý–y lý truyền thống với vật lý thực nghiệm."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-diagram-yinyang-steps",
          layout: "wide",
          callouts: [
            { code: "Y1", title: "Kinh Thi (~VII TCN)", detail: "Chỉ hướng nắng – râm của địa hình định cư." },
            { code: "Y2", title: "Tả Truyện (V TCN)", detail: "Chuyển sang lý giải khí hậu và trạng thái cơ thể." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-yinyang", "img-diagram-yinyang-steps", "img-infographic-wuxing-epistemic"],
      historicalDocument: {
        imageId: "img-diagram-yinyang-steps",
        docTypeLabel: "Biên niên Văn bản Học (《Chu Dịch · Hệ Từ Thượng》)",
        period: "Chiến Quốc – Tây Hán",
        holdingInstitution: "Chinese Text Project (ctext.org/book-of-changes/xi-ci-shang)",
        transcriptionZh: "相其阴阳，观其流泉（《诗经》） → 一阴一阳之谓道（《周易·系辞》）。",
        translationVi: "Từ 'Khảo sát hướng nắng râm (âm dương) và ngắm dòng suối chảy' trong Kinh Thi tiến hóa thành 'Một lần Âm một lần Dương luân chuyển gọi là Đạo' trong Hệ Từ.",
        archivalNote: "Chứng minh quá trình phi-hình-thể-hóa khái niệm nông nghiệp địa hình thành phạm trù triết học."
      },
      categoryModule: {
        kind: "metaphysics",
        title: "Bảng Phân định Nhận thức luận (Epistemological Boundary)",
        items: [
          { tag: "Địa lý & Ngữ văn gốc", label: "Sơn nam thủy bắc = Dương", note: "Bằng chứng từ văn bản 《Kinh Thi》 và tên địa danh cổ Lạc Dương, Hoài Âm." },
          { tag: "Triết học & Đông y", label: "Mô hình Cân bằng Quan hệ", note: "《Hoàng Đế Nội Kinh》 dùng mô tả hội chứng Hàn–Nhiệt, Hư–Thực lâm sàng." },
          { tag: "Ranh giới Khoa học", label: "Không thay thế Đo lường Vật lý", note: "Không đồng nhất Âm–Dương với điện tích hay hạt vật lý cơ học lượng tử." }
        ]
      }
    },

    "five-elements": {
      articleId: "five-elements",
      publishedDate: "2026-10-02",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "data-driven",
      storytellingFormatLabel: "Conceptual Analysis • Mô hình Hệ thống Cổ đại",
      standfirst:
        "Chữ 'Hành' (行) mang nghĩa vận động và chuyển hóa: vì vậy 'Ngũ Hành' là năm pha tương tác khép kín theo quy luật Tương Sinh – Tương Khắc chứ không phải 5 nguyên tố tĩnh.",
      heroImageId: "img-hero-wuxing",
      thumbnailConfig: {
        imageId: "img-hero-wuxing",
        aspectRatio: "16:10",
        focalPoint: "25% 50%"
      },
      keyTakeaways: [
        "Thiên 《Hồng Phạm》 ban đầu mô tả công năng vật lý của năm nguồn tài nguyên phục vụ đời sống (nhuận hạ, viêm thượng, khúc trực...).",
        "Vòng Tương Sinh (hỗ trợ) và Tương Khắc (kiềm chế) tạo cấu trúc cân bằng động hai chiều, ngăn một yếu tố tăng trưởng cực đoan.",
        "Là ngôn ngữ tư duy tương ứng (correlative thinking) trong Đông y và thuật số cổ, không thay thế bảng tuần hoàn hóa học."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 2,
          imageId: "img-infographic-wuxing-epistemic",
          layout: "wide",
          callouts: [
            { code: "W1", title: "Khác Hy Lạp cổ đại", detail: "Nhấn mạnh quan hệ biến đổi pha chứ không phải chất liệu tĩnh." },
            { code: "W2", title: "Giới hạn Hiện đại", detail: "Tránh ép gán cơ học mọi hiện tượng tự nhiên vào khung số 5." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-wuxing", "img-infographic-wuxing-epistemic", "img-hero-yinyang"],
      historicalDocument: {
        imageId: "img-hero-wuxing",
        docTypeLabel: "Kinh điển Tiền Tần (《尚书·洪范》)",
        period: "Truyền thống Tây Chu – Biên định Chiến Quốc",
        holdingInstitution: "Chinese Text Project (ctext.org/shang-shu/great-plan)",
        transcriptionZh: "五行：一曰水，二曰火，三曰木，四曰金，五曰土。水曰润下，火曰炎上，木曰曲直...",
        translationVi: "Ngũ hành: một là Thủy (thấm xuống dưới), hai là Hỏa (bốc lên trên), ba là Mộc (uốn cong hay thẳng), bốn là Kim (theo khuôn đúc đổi dạng), năm là Thổ (gieo trồng gặt hái).",
        archivalNote: "Văn bản sớm nhất liệt kê đặc tính động thái vật chất trước khi Trâu Diễn hợp nhất thành lý thuyết luân chuyển triều đại."
      },
      categoryModule: {
        kind: "metaphysics",
        title: "Cơ chế Tự Điều chỉnh Hai Chiều & Ứng dụng",
        items: [
          { tag: "Vòng Tương Sinh", label: "Mộc → Hỏa → Thổ → Kim → Thủy → Mộc", note: "Thúc đẩy tăng trưởng có trật tự theo chu kỳ bốn mùa." },
          { tag: "Ngôi sao Tương Khắc", label: "Mộc khắc Thổ • Thổ khắc Thủy...", note: "Cơ chế hãm phanh tự nhiên chống mất cân bằng hệ thống." },
          { tag: "Ranh giới Học thuật", label: "Văn hóa Tư tưởng vs Y học Chứng cứ", note: "Phân biệt rõ hệ ký hiệu cổ truyền với giải phẫu sinh hóa phân tử." }
        ]
      }
    },

    "iching-development": {
      articleId: "iching-development",
      publishedDate: "2026-10-08",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "historical-feature",
      storytellingFormatLabel: "Archival Study • Lịch sử Kiến tạo Kinh điển",
      standfirst:
        "Từ cẩm nang bói 50 cọng cỏ thi thời Tây Chu, 《Chu Dịch》 được các thế hệ học giả bồi đắp tầng bình giải 'Thập Dực' để đứng đầu Ngũ Kinh và gây ấn tượng với nhà toán học Leibniz.",
      heroImageId: "img-hero-iching",
      thumbnailConfig: {
        imageId: "img-hero-iching",
        aspectRatio: "16:10",
        focalPoint: "25% 50%"
      },
      keyTakeaways: [
        "Cần tách bạch hai lớp văn bản: Kinh văn Tây Chu (sổ tay bói cỏ thi) và Thập Dực (bộ 7 thiên triết học hóa thời Chiến Quốc – Tây Hán).",
        "Bản lụa Mã Vương Đôi (168 TCN) cho thấy nhiều trật tự 64 quẻ từng song hành trước khi bản Vương Bật trở thành chuẩn.",
        "Thư trao đổi giữa giáo sĩ Joachim Bouvet và G. W. Leibniz (1703) kết nối đồ hình 64 quẻ của Thiệu Ung với hệ số nhị phân 0 và 1."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 2,
          imageId: "img-doc-mawangdui",
          layout: "wide",
          callouts: [
            { code: "I1", title: "Mộ số 3 Mã Vương Đôi", detail: "Bảo tồn tên quẻ dị thể chữ Lệ trước thời Đông Hán." },
            { code: "I2", title: "Tượng Số vs Nghĩa Lý", detail: "Hai trường phái đối thoại xuyên suốt lịch sử Dịch học." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-iching", "img-doc-mawangdui", "img-hero-yinyang"],
      historicalDocument: {
        imageId: "img-doc-mawangdui",
        docTypeLabel: "Cổ tịch Khảo cổ Học (Bản lụa Mã Vương Đôi)",
        period: "Đầu Tây Hán (chôn cất năm 168 TCN tại Trường Sa)",
        holdingInstitution: "Bảo tàng Tỉnh Hồ Nam (Khai quật năm 1973)",
        transcriptionZh: "键（乾） • 根（艮） • 赣（坎） • 辰（震） • 川（坤） • 夺（兑） • 罗（离） • 筭（巽）",
        translationVi: "Tên tám quẻ đơn trong bản lụa 168 TCN viết theo lối giả tá âm Hán cổ, sắp xếp thứ tự nhóm khác hoàn toàn bản truyền thế.",
        archivalNote: "Phát hiện khảo cổ trọng yếu chứng minh lịch sử phân hóa dòng văn bản Chu Dịch."
      },
      categoryModule: {
        kind: "metaphysics",
        title: "Hai Dòng Diễn giải Kinh Dịch & Tương ứng Khoa học",
        items: [
          { tag: "Tượng Số Phái", label: "Kinh Phòng • Thiệu Ung", note: "Phân tích biến hào âm-dương, hỗ quái, chu kỳ thời gian và sơ đồ Tiên Thiên Bát Quái." },
          { tag: "Nghĩa Lý Phái", label: "Vương Bật • Trình Di", note: "Đọc 64 quẻ như triết lý tu dưỡng đạo đức, tiết chế và ứng biến của bậc quân tử." },
          { tag: "Đối thoại Leibniz", label: "Hệ Nhị phân (1703)", note: "Tương đồng hình thức 6 vạch âm-dương với chuỗi bit 0/1, không khẳng định cổ nhân phát minh máy tính." }
        ]
      }
    },

    "spring-festival-significance": {
      articleId: "spring-festival-significance",
      publishedDate: "2026-10-14",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Cultural Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "interactive-map-story",
      storytellingFormatLabel: "Cultural Map Story • Nhân học Tập quán Bắc – Nam",
      standfirst:
        "Được UNESCO ghi danh Di sản Phi vật thể Nhân loại cuối năm 2024, Xuân Tiết vừa là kỳ nghỉ đoàn viên gia tộc, vừa phản ánh ranh giới ẩm thực Tần Lĩnh – Hoài Hà và kỷ nguyên thanh toán số.",
      heroImageId: "img-hero-spring-festival",
      thumbnailConfig: {
        imageId: "img-hero-spring-festival",
        aspectRatio: "16:10",
        focalPoint: "25% 45%"
      },
      keyTakeaways: [
        "Lịch Thái Sơ (104 TCN) thời Hán Vũ Đế ấn định cố định tháng Dần làm tháng Giêng đầu năm Nông lịch.",
        "Mâm cỗ Giao thừa phân hóa rõ: miền Bắc gói Sủi cảo (lúa mì, đồng âm Giao tử); miền Nam chuộng Niên cao & Thang viên (gạo nếp).",
        "Dù có chung nguồn Nông lịch, Tết Nguyên Đán Việt Nam phát triển bản sắc lúa nước riêng qua bánh chưng/bánh tét, hoa đào/mai và mâm ngũ quả."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-map-spring-festival",
          layout: "wide",
          callouts: [
            { code: "S1", title: "Bắc Tần Lĩnh", detail: "Sủi cảo lúc nửa đêm, tranh Tết Dương Liễu Thanh." },
            { code: "S2", title: "Nam Hoài Hà", detail: "Niên cao, Thang viên, cá nguyên con và Chợ hoa Lĩnh Nam." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-spring-festival", "img-map-spring-festival", "img-map-sino-vietnam"],
      historicalDocument: {
        imageId: "img-hero-spring-festival",
        docTypeLabel: "Hồ sơ Di sản Văn hóa Phi vật thể UNESCO (02126)",
        period: "Từ Lịch Thái Sơ (104 TCN) → Cải lịch 1914 → UNESCO 2024",
        holdingInstitution: "UNESCO Intangible Cultural Heritage Representative List",
        transcriptionZh: "春节：农历正月初一 • 腊月二十三祭灶 → 除夕年夜饭 → 正月十五元宵节",
        translationVi: "Chu kỳ Tết cổ truyền từ ngày 23 tháng Chạp tế Táo Quân qua bữa cơm tất niên Trừ tịch đến Rằm Nguyên Tiêu.",
        archivalNote: "Tên gọi chính thức 'Xuân Tiết' áp dụng từ 1914 nhằm phân biệt với Tết dương lịch (Nguyên Đán 1/1)."
      },
      categoryModule: {
        kind: "customs",
        title: "So sánh Tết Cổ truyền Bắc – Nam Trung Quốc & Việt Nam",
        items: [
          { tag: "Miền Bắc TQ", label: "Sủi cảo (饺子) • Miếu hội", note: "Chơi chữ 'Canh tuế giao tử', bột mì nhân thịt gói hình thỏi bạc." },
          { tag: "Miền Nam TQ", label: "Niên cao (年糕) • Hoa thị", note: "Gạo nếp dẻo cầu thăng tiến, cá chép giữ nguyên con ('Hữu dư')." },
          { tag: "Việt Nam", label: "Bánh Chưng / Tét • Mâm Ngũ quả", note: "Dùng chung âm lịch nhưng bản địa hóa sâu sắc nông nghiệp lúa nước." }
        ]
      }
    },

    "tang-golden-age": {
      articleId: "tang-golden-age",
      publishedDate: "2026-10-19",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer History Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "historical-feature",
      storytellingFormatLabel: "Historical Feature • Lịch sử Đế chế Đa văn hóa",
      standfirst:
        "Hơn một đô thị triệu dân bàn cờ 108 phường, Trường An thời Đường là giao lộ của tăng lữ, thương nhân Ba Tư và danh sĩ An Nam Khương Công Phụ trước biến cố Loạn An Sử.",
      heroImageId: "img-hero-tang-dynasty",
      thumbnailConfig: {
        imageId: "img-hero-tang-dynasty",
        aspectRatio: "16:10",
        focalPoint: "25% 46%"
      },
      keyTakeaways: [
        "Cơ chế Tam Tỉnh Lục Bộ phân tách khâu thảo chiếu (Trung Thư), thẩm tra bác bỏ (Môn Hạ) và thực thi 6 bộ (Thượng Thư).",
        "Tây Thị Trường An và Thương cảng Quảng Châu mở rộng giao lưu Á–Âu cả trên Con đường Tơ lụa đường bộ lẫn hàng hải.",
        "Sau Loạn An Sử (755–763), Cải cách Lưỡng Thuế (780) giải phóng thương mại tư nhân và chuyển trọng tâm kinh tế xuống Giang Nam."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-map-tang-silkroad",
          layout: "wide",
          callouts: [
            { code: "T1", title: "Lục lộ Tây Vực", detail: "Trường An – Đôn Hoàng – Samarkand: Tơ lụa, hồ khúc & Phật học." },
            { code: "T2", title: "Hải lộ Phương Nam", detail: "Quảng Châu – Giao Châu – Malacca: Gốm Trường Sa & hương liệu." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-tang-dynasty", "img-map-tang-silkroad", "img-map-sino-vietnam"],
      historicalDocument: {
        imageId: "img-hero-tang-dynasty",
        docTypeLabel: "Phục dựng Mặt bằng Đô thành & Chính sử Biên niên",
        period: "Sơ – Thịnh Đường (618–755 SCN)",
        holdingInstitution: "Tài liệu Khảo cổ Đô thành Trường An / 《Tư trị thông giám》",
        transcriptionZh: "唐长安城百零八坊，东西两市；贞观之治，开元盛世；三省六部，封驳之制。",
        translationVi: "Kinh đô Trường An chia 108 phường cùng hai khu Đông–Tây Thị; hệ thống Tam Tỉnh Lục Bộ kèm quyền thẩm định bác bỏ (Phong bác) của Môn Hạ tỉnh.",
        archivalNote: "Sơ đồ tái hiện dựa trên đo đạc khảo cổ tường thành Đường Trường An tại Tây An ngày nay."
      },
      categoryModule: {
        kind: "history",
        title: "Biên niên Động lực & Nhân vật Tiêu biểu Triều Đường",
        items: [
          { tag: "627–649", label: "Trinh Quán Chi Trị (Đường Thái Tông)", note: "Khoan thư sức dân, trọng dụng Ngụy Trưng và ban hành Đường Luật Sơ Nghị." },
          { tag: "713–755", label: "Khai Nguyên Thịnh Thế & Lý – Đỗ", note: "Đỉnh cao kinh tế – thi ca Đường luật (Lý Bạch, Đỗ Phủ); Khương Công Phụ người Ái Châu làm Tể tướng (hậu kỳ)." },
          { tag: "755–780", label: "Loạn An Sử → Lưỡng Thuế Pháp", note: "Suy yếu quyền lực trung ương nhưng giải phóng dòng di cư – thương mại Giang Nam." }
        ]
      }
    },

    "ink-wash-painting": {
      articleId: "ink-wash-painting",
      publishedDate: "2026-10-22",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Arts Curatorial",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "digital-exhibition",
      storytellingFormatLabel: "Digital Exhibition • Phân tích Mỹ học Hiện vật",
      standfirst:
        "Chỉ bằng nước và mực đen trên giấy tuyên, họa sĩ Văn nhân Trung Hoa dùng khoảng trống 'Lưu bạch' và năm sắc độ mực để dựng nên toàn bộ núi non sương mù trước tâm cảnh người thưởng ngoạn.",
      heroImageId: "img-hero-ink-wash",
      thumbnailConfig: {
        imageId: "img-hero-ink-wash",
        aspectRatio: "16:10",
        focalPoint: "36% 62%"
      },
      keyTakeaways: [
        "Quy tắc tối thượng trong Lục pháp của Tạ Hách (~500 SCN) là 'Khí vận sinh động', ưu tiên thần thái nội tại hơn tả thực quang học.",
        "Thủ pháp 'Mặc phân ngũ sắc' tạo 5 tầng sáng tối từ Tiêu (đen đặc) đến Đạm – Thanh (mây mù – lưu bạch).",
        "Hợp nhất bốn nghệ thuật Thi – Thư – Họa – Ấn trên cùng một bức tranh lụa hoặc giấy tuyên."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-diagram-ink-distances",
          layout: "wide",
          callouts: [
            { code: "M1", title: "Phép Tam Viễn (Quách Hy)", detail: "Cho phép mắt người xem di chuyển nhiều góc nhìn trong một bức cuộn." },
            { code: "M2", title: "Mặc phân Ngũ sắc", detail: "Năm thang độ loãng mực tái hiện không gian xa gần không cần màu sơn dầu." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-ink-wash", "img-diagram-ink-distances", "img-hero-traditional-arch"],
      historicalDocument: {
        imageId: "img-diagram-ink-distances",
        docTypeLabel: "Lý luận Hội họa Tống (Quách Hy 《Lâm tuyền cao trí》)",
        period: "Triều Bắc Tống (~1080 SCN)",
        holdingInstitution: "Cố Cung Danh Họa Ký (dpm.org.cn) / Văn khố Lý luận Nghệ thuật",
        transcriptionZh: "山有三远：自山下而仰山巅，谓之高远；自山前而窥山后，谓之深远；自近山而望远山，谓之平远。",
        translationVi: "Núi có ba góc nhìn xa: từ chân núi ngước lên đỉnh là Cao viễn; từ núi trước nhìn xuyên lớp núi sau là Thâm viễn; từ núi gần trông ra cõi xa thẳm là Bình viễn.",
        archivalNote: "Tác phẩm họa thủy mặc Vạn Lý Trường Thành đóng vai trò minh họa trực quan cho nguyên tắc Tam viễn và Lưu bạch."
      },
      categoryModule: {
        kind: "arts",
        title: "Cấu trúc Mỹ học Tác phẩm Thủy mặc Truyền thống",
        items: [
          { tag: "Họa (画)", label: "Kỹ pháp Câu – Thoát – Lưu bạch", note: "Tạo gân đá núi bằng nét bút khô/ướt kết hợp khoảng trống biển mây biết nói." },
          { tag: "Thư & Thi", label: "Đề bạt Thư họa Đồng nguyên", note: "Chữ viết và bài thơ tự sự nằm trực tiếp trong bố cục như một yếu tố thị giác." },
          { tag: "Ấn (印)", label: "Triện đỏ Chu sa (Imperial Red)", note: "Tạo điểm cân bằng thị giác ấm trên nền đen–trắng tối giản." }
        ]
      }
    },

    "guanxi-business": {
      articleId: "guanxi-business",
      publishedDate: "2026-10-26",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Commerce Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "data-driven",
      storytellingFormatLabel: "Data-Driven Feature • Phân tích Xã hội học Kinh tế",
      standfirst:
        "Guanxi không phải phép màu vượt qua giá thành hay chất lượng, càng không đồng nghĩa với hối lộ: nghiên cứu thực chứng chỉ ra vai trò biến thiên rõ rệt theo ngành hàng và mức độ thể chế hóa đô thị.",
      heroImageId: "img-hero-guanxi",
      thumbnailConfig: {
        imageId: "img-hero-guanxi",
        aspectRatio: "16:10",
        focalPoint: "25% 50%"
      },
      keyTakeaways: [
        "Guanxi bền vững cần đồng thời ba trụ cột: Tín nhiệm cá nhân (Xinyong), Trao đổi Nhân tình (Renqing) và Bảo toàn Thể diện (Mianzi).",
        "Tại Thượng Hải, Thâm Quyến và các sàn TMĐT minh bạch, năng lực giá – chất lượng – hợp đồng chiếm vai trò áp đảo (Guthrie, 1998).",
        "Doanh nghiệp Việt Nam cần kết hợp chặt chẽ thẩm định pháp lý Incoterms với sự ổn định nhân sự đầu mối liên văn hóa."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-infographic-guanxi-sectors",
          layout: "wide",
          callouts: [
            { code: "G1", title: "Khu vực TMĐT & FDI", detail: "Hợp đồng chuẩn, SLA và KPI minh bạch giữ trọng số cao nhất." },
            { code: "G2", title: "OEM / ODM Chiết Giang – Quảng Đông", detail: "Tín nhiệm Xinyong hỗ trợ ưu tiên xếp chuyền sản xuất mùa cao điểm." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-guanxi", "img-infographic-guanxi-sectors", "img-infographic-contemporary-eco"],
      historicalDocument: {
        imageId: "img-infographic-guanxi-sectors",
        docTypeLabel: "Tổng hợp Học thuật Bình duyệt (AMJ 2000 & China Quarterly 1998)",
        period: "Nghiên cứu Chuyển đổi Kinh tế (1998–2025)",
        holdingInstitution: "Academy of Management Journal / Cambridge University Press",
        transcriptionZh: "信用（Xìnyòng） • 人情（Rénqíng） • 面子（Miànzi） • 契约精神（Khế ước tinh thần）",
        translationVi: "Mạng lưới vốn xã hội truyền thống (Tín nhiệm – Nhân tình – Thể diện) đang tương tác và nhường chỗ dần cho Tinh thần Khế ước hợp đồng trong kinh tế hiện đại.",
        archivalNote: "Biểu đồ định tính tổng hợp xu hướng từ các công trình kinh điển về quản trị doanh nghiệp tại Trung Quốc."
      },
      categoryModule: {
        kind: "business",
        title: "Khung Ứng xử Liên văn hóa trên Bàn Đàm phán Việt – Trung",
        items: [
          { tag: "Pháp lý", label: "Hợp đồng Song ngữ & Incoterms", note: "Mọi cam kết miệng tại bàn tiệc cần được chốt lại bằng điều khoản văn bản và L/C hoặc T/T rõ ràng." },
          { tag: "Nhân sự", label: "Tính liên tục Người phụ trách", note: "Tránh thay đổi đột ngột nhân sự phụ trách giữa chu kỳ đơn hàng vì lòng tin Xinyong gắn với cá nhân." },
          { tag: "Tuân thủ", label: "Tách bạch Nhân tình vs Hối lộ", note: "Tuân thủ nghiêm quy định kiểm toán chống tham nhũng tại các tập đoàn niêm yết TQ." }
        ]
      }
    },

    "tea-culture": {
      articleId: "tea-culture",
      publishedDate: "2026-10-30",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Cultural Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "visual-essay",
      storytellingFormatLabel: "Visual Essay • Hành trình Thảo dược đến Thương mại",
      standfirst:
        "Từ lá thuốc giải nhiệt cổ đại đến bộ chuyên khảo 《Trà Kinh》 của Lục Vũ và sáu dòng trà phân loại theo oxy hóa, lịch sử tách trà Trung Hoa phản chiếu cả mỹ học lẫn thương mại hàng hải thế giới.",
      heroImageId: "img-hero-tea-culture",
      thumbnailConfig: {
        imageId: "img-hero-tea-culture",
        aspectRatio: "16:10",
        focalPoint: "50% 24%"
      },
      keyTakeaways: [
        "Kỹ thuật thưởng trà đổi qua 3 kỷ nguyên: Tiễn trà (bánh trà nấu đời Đường), Điểm trà (đánh bọt đời Tống) và Tản trà (trà lá nguyên cánh từ đời Minh).",
        "Cùng loài Camellia sinensis, kỹ thuật sao diệt men ('Sát thanh') quyết định chia thành 6 đại trà hệ (Lục – Bạch – Hoàng – Thanh – Hồng – Hắc).",
        "Hai tên gọi toàn cầu 'Chai/Trà' và 'Tea/Thé' lần theo hai lộ trình truyền bá đường bộ (Quan thoại/Quảng Đông) và đường biển (Mân Nam Tuyền Châu)."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-infographic-tea-process",
          layout: "wide",
          callouts: [
            { code: "C1", title: "Chìa khóa Lục trà (0–5%)", detail: "Sao diệt men ngay sau hái để khóa trọn diệp lục và vị thanh tươi." },
            { code: "C2", title: "Chìa khóa Ô Long & Hồng trà", detail: "Kiểm soát mức oxy hóa bán phần (20–75%) hoặc toàn phần (90%+)." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-tea-culture", "img-infographic-tea-process", "img-hero-contemporary-china"],
      historicalDocument: {
        imageId: "img-hero-tea-culture",
        docTypeLabel: "Chuyên khảo Trà học Cổ điển (《茶经》 – Lục Vũ)",
        period: "Triều Đường (~760–780 SCN) • Phổ hóa GS. Trần Duyện 1979",
        holdingInstitution: "Chinese Text Project & UNESCO Heritage Archive (2022)",
        transcriptionZh: "茶之为用，味至寒，为饮最宜精行俭德之人。",
        translationVi: "Tính vị trà thanh mát, hợp nhất với người giữ nếp thanh cao và đức hạnh tiết kiệm.",
        archivalNote: "Tư liệu 10 thiên Trà Kinh và bảng phân 6 loại trà được UNESCO ghi danh Di sản Phi vật thể tháng 11/2022."
      },
      categoryModule: {
        kind: "customs",
        title: "Từ Nghi lễ Giao tiếp đến Chuỗi Cung ứng Trà Hiện đại",
        items: [
          { tag: "Khấu chỉ tạ trà", label: "Nghi thức Gõ hai ngón tay", note: "Cử chỉ trang nhã cảm ơn người rót trà mà không ngắt lời cuộc trò chuyện bàn tiệc." },
          { tag: "Công phu trà", label: "Triều Sán & Mân Nam", note: "Dùng ấm tử sa nhỏ, chiết xuất hương đậm đặc thể hiện sự hiếu khách nồng hậu." },
          { tag: "Tân thức trà ẩm", label: "Thế kỷ XXI", note: "Thương hiệu HEYTEA, Chagee kết hợp trà nguyên lá Ô Long/Lục trà mở rộng ra ASEAN." }
        ]
      }
    },

    "sino-vietnam-history": {
      articleId: "sino-vietnam-history",
      publishedDate: "2026-11-04",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Comparative Studies",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "comparative-cultural",
      storytellingFormatLabel: "Comparative Cultural Feature • Sử học & Ngôn ngữ So sánh",
      standfirst:
        "Việt Nam chia sẻ cùng Trung Quốc kho tàng từ vựng Hán-Việt và kinh điển Đông Á, nhưng lịch sử nghìn năm tự chủ lại minh chứng bản lĩnh bản địa hóa và sáng tạo độc lập hiếm có.",
      heroImageId: "img-hero-sino-vietnam",
      thumbnailConfig: {
        imageId: "img-hero-sino-vietnam",
        aspectRatio: "16:10",
        focalPoint: "50% 42%"
      },
      keyTakeaways: [
        "Tiếng Việt thuộc ngữ hệ Nam Á nhưng âm Hán-Việt bảo lưu ngữ âm Trường An thời Đường–Tống, tạo lợi thế từ vựng trừu tượng cho người học Hán ngữ.",
        "Các triều đại tự chủ Lý–Trần–Lê chủ động chọn lọc thể chế Nho học nhưng giữ Luật Hồng Đức, Tam giáo hòa hợp và sáng chế Chữ Nôm.",
        "Luôn cảnh giác với các từ Hán-Việt 'đồng hình dị nghĩa' (学生, 便宜, 经济) trong giao tiếp và hợp đồng thương mại."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          imageId: "img-map-sino-vietnam",
          layout: "wide",
          callouts: [
            { code: "V1", title: "Tuyến Sứ bộ Nam Quan", detail: "Hành lang giao lưu ngoại giao – sách vở Lê-Nguyễn và Minh-Thanh." },
            { code: "V2", title: "Thương cảng Hội An", detail: "Không gian cộng cư thương nhân Việt và Hội quán Phúc Kiến/Quảng Đông." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-sino-vietnam", "img-map-sino-vietnam", "img-hero-spring-festival"],
      historicalDocument: {
        imageId: "img-map-sino-vietnam",
        docTypeLabel: "Văn hiến Cổ điển Việt Nam bằng Hán văn (《Bình Ngô Đại Cáo》, 1428)",
        period: "Thế kỷ XV (Triều Lê Sơ – Nguyễn Trãi)",
        holdingInstitution: "Viện Nghiên cứu Hán Nôm / Đại Việt Sử Ký Toàn Thư",
        transcriptionZh: "惟我大越之国，实为文献之邦。山川之封域既殊，南北之风俗亦异。",
        translationVi: "Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu. Núi sông bờ cõi đã chia, phong tục Bắc Nam cũng khác.",
        archivalNote: "Minh chứng kinh điển cho năng lực sử dụng chính chữ Hán để khẳng định chủ quyền văn hóa độc lập."
      },
      categoryModule: {
        kind: "sino-vietnam",
        title: "So sánh Song song: Điểm Chung Đông Á vs Bản Sắc Riêng Việt Nam",
        items: [
          { tag: "Văn tự", label: "Hán tự → Âm Hán-Việt & Chữ Nôm", note: "Bảo lưu âm Đường-Tống cổ và sáng tạo hệ chữ ghi tiếng Việt thuần." },
          { tag: "Luật pháp & Tín ngưỡng", label: "Tam giáo & Tín ngưỡng Thờ Mẫu", note: "Dung hòa Phật–Nho–Đạo cùng thờ Mẫu Tam/Tứ phủ bản địa, khác bài xích cứng nhắc." },
          { tag: "Thương mại Nay", label: "Hành lang Hữu Nghị Quan & RCEP", note: "Chuyển tiếp từ sứ bộ – thương thuyền sang chuỗi cung ứng nông sản & linh kiện xuyên biên giới." }
        ]
      }
    },

    "beijing-shanghai-culture": {
      articleId: "beijing-shanghai-culture",
      publishedDate: "2026-11-08",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Regional Studies",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "comparative-cultural",
      storytellingFormatLabel: "Regional Feature • Song Thành Ký Văn hóa Đô thị",
      standfirst:
        "Không có một mẫu số chung duy nhất cho tác phong Trung Quốc: từ Tứ Hợp Viện 'Kinh Phái' Bắc Kinh đến phố Thạch Khố Môn 'Hải Phái' Thượng Hải là hai thái cực thẩm mỹ và đàm phán kinh doanh.",
      heroImageId: "img-hero-beijing-shanghai",
      thumbnailConfig: {
        imageId: "img-hero-beijing-shanghai",
        aspectRatio: "16:10",
        focalPoint: "24% 45%"
      },
      keyTakeaways: [
        "Bắc Kinh (Kinh Phái) kết tinh di sản kinh đô 800 năm: trọng đại cục chính sách, thứ bậc danh vị và kiến trúc Tứ Hợp Viện khép kín.",
        "Thượng Hải (Hải Phái) phát triển từ thương cảng quốc tế: trọng khế ước tinh thần (hợp đồng), đúng giờ tuyệt đối và tách bạch công–tư.",
        "Ngoài trục Bắc–Thượng, Thâm Quyến (tốc độ công nghệ), Quảng Châu (thương nhân biển) và Thành Đô (nhàn tản) đều mang bản sắc riêng."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-diagram-jingpai-haipai",
          layout: "wide",
          callouts: [
            { code: "R1", title: "Tứ Hợp Viện (Bắc Kinh)", detail: "Tổ chức sân giữa tụ khí, phân phòng Chính–Sương theo trưởng ấu." },
            { code: "R2", title: "Thạch Khố Môn (Thượng Hải)", detail: "Phố liền kề mật độ cao, cổng đá vòm lai Âu–Á thích ứng thương cảng." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-beijing-shanghai", "img-diagram-jingpai-haipai", "img-hero-traditional-arch"],
      historicalDocument: {
        imageId: "img-diagram-jingpai-haipai",
        docTypeLabel: "Hồ sơ Di sản Quy hoạch (UNESCO World Heritage 1714 – Beijing Central Axis)",
        period: "Triều Nguyên – Minh – Thanh (1267–2024)",
        holdingInstitution: "UNESCO World Heritage Centre & Thượng Hải Lý Lộng Bảo tồn",
        transcriptionZh: "北京中轴线：坐北朝南，前朝后市；上海石库门：中西合璧，契约理弄。",
        translationVi: "Trục Trung tâm Bắc Kinh theo chuẩn tọa Bắc triều Nam tôn ti; khu Thạch Khố Môn Thượng Hải dung hợp sân trời Giang Nam với phố thị thương nghiệp.",
        archivalNote: "Sơ đồ mặt bằng giúp sinh viên đọc hiểu ngôn ngữ không gian khi làm việc trực tiếp với đối tác hai miền."
      },
      categoryModule: {
        kind: "regions",
        title: "So sánh Tác phong Kinh doanh Địa phương",
        items: [
          { tag: "Bắc Kinh (Kinh Phái)", label: "Chính sách • Nghiên cứu • SOE", note: "Chú trọng nghi thức tiếp đón, định hướng vĩ mô và tầng bậc chức danh." },
          { tag: "Thượng Hải (Hải Phái)", label: "Tài chính • Logistics • Đa quốc gia", note: "Ưu tiên số liệu chuẩn xác, đúng giờ và ranh giới hợp đồng rành mạch." },
          { tag: "Quảng Châu – Thâm Quyến", label: "Lĩnh Nam Thương mại & Phần cứng", note: "Thực tế, quyết đoán nhanh, trọng hiệu quả mẫu thử và tốc độ giao hàng." }
        ]
      }
    },

    "traditional-architecture-gardens": {
      articleId: "traditional-architecture-gardens",
      publishedDate: "2026-11-12",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Architectural History",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "visual-essay",
      storytellingFormatLabel: "Architectural Feature • Giải cấu trúc Di sản Gỗ",
      standfirst:
        "Không dùng một cây đinh thép, những khớp mộng Đấu củng triều Liêu–Tống cho phép công trình gỗ cao hơn 67 mét co giãn qua hàng chục trận động đất, đối xứng cùng nghệ thuật 'Tá cảnh' Viên lâm Tô Châu.",
      heroImageId: "img-hero-traditional-arch",
      thumbnailConfig: {
        imageId: "img-hero-traditional-arch",
        aspectRatio: "16:10",
        focalPoint: "25% 48%"
      },
      keyTakeaways: [
        "Bộ tiêu chuẩn 《Doanh Tạo Pháp Thức》 (1103) chuẩn hóa kiến trúc gỗ theo mô-đun 'Tài', cho phép dựng lắp hàng loạt trên khắp đế chế.",
        "Chân cột nổi trên đá tảng Trụ sở kết hợp khớp mộng Đấu củng đàn hồi giúp phân tán năng lượng xung chấn thay vì chống cứng.",
        "Viên lâm Tô Châu áp dụng mỹ học Đạo–Thiền ('Di bộ hoán cảnh', 'Tá cảnh') bổ sung cho sự trang nghiêm Nho giáo của Cố Cung."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-diagram-dougong-seismic",
          layout: "wide",
          callouts: [
            { code: "D1", title: "Khớp lỏng Đấu củng", detail: "Ma sát trượt giữa thanh củng ngang và đấu vuông tiêu hao động năng." },
            { code: "D2", title: "Chân cột nổi (柱础)", detail: "Tránh hơi ẩm đất nền và không bị nứt gãy chân khi nền rung." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-traditional-arch", "img-diagram-dougong-seismic", "img-diagram-jingpai-haipai"],
      historicalDocument: {
        imageId: "img-diagram-dougong-seismic",
        docTypeLabel: "Chuyên khảo Kỹ thuật & Viên lâm Cổ (《营造法式》 1103 & 《园冶》 1631)",
        period: "Triều Bắc Tống (1103) – Triều Minh (1631)",
        holdingInstitution: "Chinese Text Project & UNESCO Site 813 Archive",
        transcriptionZh: "凡构屋之制，皆以材为祖…（《营造法式》）；巧于因借，精在体宜（《园冶》）。",
        translationVi: "Mọi phép dựng nhà đều lấy mô-đun Tài làm chuẩn mực gốc; phép tạo vườn khéo ở chỗ nương mượn cảnh ngoài (Tá cảnh) và tinh tế trong bố cục tự nhiên.",
        archivalNote: "Bản tổng hợp đối chiếu hai trụ cột kiến trúc học truyền thống Trung Hoa."
      },
      categoryModule: {
        kind: "arts",
        title: "So sánh Cực Cung đình (Nho) vs Cực Viên lâm (Đạo – Thiền)",
        items: [
          { tag: "Vật liệu & Kỹ thuật", label: "Gỗ Nam Mộc – Đấu củng – Đá Thái Hồ", note: "Kết cấu khung gỗ chịu lực độc lập với tường bao che không chịu tải." },
          { tag: "Cung đình (Cố Cung)", label: "Đối xứng Trung trục – Ngói vàng", note: "Thể hiện trật tự Thiên tử trung tâm và lễ nghi triều chính." },
          { tag: "Viên lâm (Tô Châu)", label: "Uốn lượn tự nhiên – Tường trắng", note: "Tạo không gian suy tư vô hạn trong diện tích thành thị giới hạn." }
        ]
      }
    },

    "contemporary-china-digital": {
      articleId: "contemporary-china-digital",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Contemporary Studies",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "data-driven",
      storytellingFormatLabel: "Data & Supply Chain Feature • Kinh tế Số & Thế hệ Gen Z",
      standfirst:
        "Từ cụm công nghiệp Nghĩa Ô – Quảng Đông chạy dữ liệu thời gian thực đến hiện tượng thanh niên 'Nội quyển' và làn sóng thiết kế di sản 'Quốc triều', Trung Quốc đương đại kết hợp siêu hạ tầng số với tái cấu trúc bản sắc.",
      heroImageId: "img-hero-contemporary-china",
      thumbnailConfig: {
        imageId: "img-hero-contemporary-china",
        aspectRatio: "16:10",
        focalPoint: "20% 45%"
      },
      keyTakeaways: [
        "Siêu hạ tầng đường sắt cao tốc (>45.000 km) và siêu ứng dụng thanh toán số hóa hợp nhất thị trường nội địa và logistics TMĐT.",
        "Chuỗi cung ứng C2M tại các cụm công nghiệp chuyên biệt rút ngắn chu kỳ ra mẫu và giao hàng xuyên biên giới sang ASEAN.",
        "Thế hệ trẻ vừa chịu áp lực cạnh tranh đô thị ('Nội quyển') vừa thúc đẩy thị trường văn hóa tiêu dùng 'Quốc triều' gắn với di sản bảo tàng."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-infographic-contemporary-eco",
          layout: "wide",
          callouts: [
            { code: "E1", title: "Cụm Sản xuất C2M", detail: "Nghĩa Ô, Thâm Quyến, Hàng Châu phản hồi đơn hàng theo thời gian thực." },
            { code: "E2", title: "Hàm ý Việt – Trung", detail: "Hành lang cửa khẩu Bằng Tường – Hữu Nghị và cạnh tranh nâng giá trị thương hiệu." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-contemporary-china", "img-infographic-contemporary-eco", "img-infographic-guanxi-sectors"],
      historicalDocument: {
        imageId: "img-infographic-contemporary-eco",
        docTypeLabel: "Báo cáo Kinh tế Số & Dữ liệu Thương mại (World Bank 2024 & UN Comtrade)",
        period: "Giai đoạn Cải cách & Số hóa (2015–2026)",
        holdingInstitution: "World Bank China Overview / UN Comtrade Database",
        transcriptionZh: "新质生产力 • 产业带 C2M • 跨境电商 • 国潮文化消费",
        translationVi: "Lực lượng sản xuất mới — Vành đai công nghiệp C2M — Thương mại điện tử xuyên biên giới — Tiêu dùng văn hóa Quốc triều.",
        archivalNote: "Sơ đồ tổng hợp cấu trúc kinh tế số phục vụ phân tích chuỗi cung ứng khu vực RCEP."
      },
      categoryModule: {
        kind: "business",
        title: "Ma trận Cơ hội & Thách thức cho Kinh doanh Quốc tế",
        items: [
          { tag: "Cung ứng C2M", label: "Tiếp cận Trực tiếp Xưởng Nguồn", note: "Kiểm tra chứng chỉ sản xuất, mẫu thực tế và điều khoản thanh toán bảo vệ người mua." },
          { tag: "Logistics RCEP", label: "Hành lang Đường bộ & Hàng hải", note: "Tối ưu tuyến Bằng Tường – Hữu Nghị Quan và cảng Hải Phòng / Cát Lái." },
          { tag: "Thị hiếu Quốc triều", label: "Kể chuyện Bản sắc Thương hiệu", note: "Học cách các thương hiệu Á Đông khai thác di sản văn hóa bản địa tạo giá trị gia tăng." }
        ]
      }
    },

    "silk-road-maritime-trade": {
      articleId: "silk-road-maritime-trade",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "interactive-map-story",
      storytellingFormatLabel: "Interactive Map Story • Địa lịch sử Thương mại Á – Âu",
      standfirst:
        "Từ sứ bộ Trương Khiên thời Tây Hán đến các thương cảng Thị Bạc Ty thời Tống – Nguyên và hải đội Trịnh Hòa, hai mạch Con đường Tơ lụa lục địa và hàng hải đã định hình mạng lưới giao thương liên lục địa trong đó Việt Nam là mắt xích gốm sứ trọng yếu.",
      heroImageId: "img-hero-silk-road",
      thumbnailConfig: {
        imageId: "img-hero-silk-road",
        aspectRatio: "16:10",
        focalPoint: "38% 50%"
      },
      keyTakeaways: [
        "Con đường Tơ lụa không phải một tuyến cao tốc đơn lẻ mà là mạng lưới giao dịch đa chặng (relay trade) qua ốc đảo Trung Á và cảng biển Đông Á – Ấn Độ Dương.",
        "Thiết chế Thị Bạc Ty (市舶司) thời Đường–Tống–Nguyên chứng tỏ triều đình Trung Hoa quản lý ngoại thương hàng hải bằng thuế quan, kho ngoại quan và khu phố ngoại thương (Phiên phường) có tổ chức.",
        "Hải trình Biển Đông nối Tuyền Châu – Quảng Châu với Vân Đồn, Chu Đậu và Cù Lao Chàm của Đại Việt như trung tâm sản xuất và tái xuất gốm hoa lam thế kỷ XIV–XVI."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-map-silk-road-nodes",
          layout: "wide",
          callouts: [
            { code: "S1", title: "Hành lang Hà Tây & Đôn Hoàng", detail: "Cửa ngõ trao đổi tơ lụa, giấy và ngựa chiến giữa Trường An với Trung Á." },
            { code: "S2", title: "Tam giác Tuyền Châu – Chu Đậu – Malacca", detail: "Hành lang gốm hoa lam và gia vị nối thương cảng Mân Nam với Đại Việt." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-silk-road", "img-map-silk-road-nodes", "img-map-tang-silkroad"],
      historicalDocument: {
        imageId: "img-map-silk-road-nodes",
        docTypeLabel: "Chính sử & Hải đồ Cổ điển (《史记·大宛列传》 & 《郑和航海图》)",
        period: "Tây Hán (Thế kỷ II TCN) – Minh Sơ (Thế kỷ XV SCN)",
        holdingInstitution: "Chinese Text Project & UNESCO Silk Roads Inventory",
        transcriptionZh: "汉使穷河源，广市舶以通番货，瓷器茶丝流布南洋。",
        translationVi: "Sứ thần nhà Hán lần nguồn Tây Vực; đời sau mở rộng Thị Bạc Ty đón thuyền buôn, đưa gốm sứ, trà và tơ lụa lưu thông khắp Nam Dương.",
        archivalNote: "Kết hợp tư liệu biên niên chính sử với khảo cổ tàu đắm Cù Lao Chàm và hải đồ quá dương khiên tinh."
      },
      categoryModule: {
        kind: "history",
        title: "So sánh Hai Mạch Vận tải Xuyên lục địa & Hàng hải",
        items: [
          { tag: "Lục địa (Hán–Đường)", label: "Thương đội Lạc đà & Ốc đảo", note: "Vận tải khối lượng nhỏ giá trị cao: tơ lụa, giấy, bảo thạch, Phật điển, kỹ nghệ thủy lợi." },
          { tag: "Hàng hải (Tống–Minh)", label: "Thuyền buồm Hải thương & Thị Bạc Ty", note: "Chuyên chở hàng nặng khối lượng lớn: gốm sứ Cảnh Đức Trấn – Chu Đậu, trà, gia vị, bạc trắng." },
          { tag: "Vai trò Việt Nam", label: "Chu Đậu & Cù Lao Chàm (Thế kỷ XV)", note: "Tàu đắm Cù Lao Chàm lưu giữ hàng vạn hiện vật gốm Chu Đậu xuất khẩu tới Trung Đông và Đông Nam Á." }
        ]
      }
    },

    "tcm-solar-terms-yangsheng": {
      articleId: "tcm-solar-terms-yangsheng",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "comparative-cultural",
      storytellingFormatLabel: "Epistemic Heritage Study • Lịch sử Y thư & Dưỡng sinh",
      standfirst:
        "Từ hệ thống 24 Tiết khí đo chính xác chuyển động Mặt Trời trên hoàng đạo đến 《Hoàng Đế Nội Kinh》, tri thức dưỡng sinh Đông Á mô hình hóa mối liên hệ giữa nhịp khí hậu theo mùa với nếp ăn ngủ điều độ của con người.",
      heroImageId: "img-hero-tcm-solar",
      thumbnailConfig: {
        imageId: "img-hero-tcm-solar",
        aspectRatio: "16:10",
        focalPoint: "35% 50%"
      },
      keyTakeaways: [
        "24 Tiết khí (được UNESCO công nhận năm 2016) là hệ thống thiên văn Mặt Trời thuần túy dựa trên mỗi cung 15° hoàng kinh, bổ trợ cho tuần trăng Âm lịch để chỉ dẫn mùa vụ.",
        "《Hoàng Đế Nội Kinh》 chuyển ngôn ngữ Âm Dương – Ngũ Hành thành học thuyết Tạng Tượng và phòng bệnh từ sớm ('Thượng công trị vị bệnh').",
        "Học thuật nghiêm túc tách bạch rõ: y sử, dưỡng sinh lối sống (giấc ngủ, ẩm thực theo mùa, thái cực) với điều trị bệnh lý đòi hỏi thử nghiệm lâm sàng chứng cứ hiện đại."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-infographic-tcm-clock",
          layout: "wide",
          callouts: [
            { code: "T1", title: "Đồng hồ Tý Ngọ Lưu Chú", detail: "12 canh giờ gắn kết thói quen sinh hoạt ngày–đêm theo nhịp tuần hoàn cổ điển." },
            { code: "T2", title: "Ranh giới Nhận thức luận", detail: "Phân định triết học dưỡng sinh văn hóa với bằng chứng thử nghiệm lâm sàng RCTs." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-tcm-solar", "img-infographic-tcm-clock", "img-diagram-yinyang-steps"],
      historicalDocument: {
        imageId: "img-hero-tcm-solar",
        docTypeLabel: "Y thư Kinh điển & Nông lịch (《黄帝内经·素问》)",
        period: "Chiến Quốc – Tây Hán (Biên tập hoàn chỉnh thế kỷ I TCN)",
        holdingInstitution: "Chinese Text Project & UNESCO Intangible Cultural Heritage",
        transcriptionZh: "上工治未病，不治已病。春三月，此谓发陈；冬三月，此谓闭藏。",
        translationVi: "Bậc thầy thuốc giỏi lo phòng từ khi bệnh chưa phát. Ba tháng mùa Xuân là lúc vạn vật sinh sôi; ba tháng mùa Đông là lúc khí dương tàng trữ giữ ấm.",
        archivalNote: "Văn bản minh họa triết lý thuận thời tiết để điều chỉnh nhịp ăn nghỉ, tương đồng sâu sắc với lời dạy 'Nam dược trị Nam nhân' của Tuệ Tĩnh tại Việt Nam."
      },
      categoryModule: {
        kind: "customs",
        title: "Khung Tiếp cận Liên ngành: Nông lịch, Y sử & Khoa học Thực chứng",
        items: [
          { tag: "Thiên văn học", label: "24 Tiết khí Hoàng đạo", note: "Đo góc kinh độ Mặt Trời (15° mỗi tiết), chuẩn xác về mùa vụ khí hậu Bắc bán cầu." },
          { tag: "Văn hóa Dưỡng sinh", label: "Nội Kinh & Tuệ Tĩnh / Lãn Ông", note: "Khuyến khích điều độ giấc ngủ, vận động nhẹ, giảm căng thẳng và ăn theo mùa." },
          { tag: "Y học Chứng cứ", label: "Tiêu chuẩn Lâm sàng Hiện đại", note: "Mọi chỉ định dược lý và điều trị bệnh lý cần dựa trên chẩn đoán y khoa và nghiên cứu thực chứng." }
        ]
      }
    },

    "chinese-metaphysics-systems": {
      articleId: "chinese-metaphysics-systems",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "comparative-cultural",
      storytellingFormatLabel: "Structural Analysis • Giải mã Thuật số dưới góc độ Cổ học",
      standfirst:
        "Đặt Tử Vi Đẩu Số, Tử Bình Bát Tự, Phong Thủy và Kỳ Môn Độn Giáp cạnh nhau trong danh mục 'Thuật số' của 《Tứ Khố Toàn Thư》 để giải mã cấu trúc lịch pháp – ký hiệu học và ranh giới nhận thức luận.",
      heroImageId: "img-hero-metaphysics-systems",
      thumbnailConfig: {
        imageId: "img-hero-metaphysics-systems",
        aspectRatio: "16:10",
        focalPoint: "50% 45%"
      },
      keyTakeaways: [
        "Trong thư mục cổ điển Trung Hoa (《Tứ Khố Toàn Thư》), Bát Tự, Tử Vi, Phong Thủy và Kỳ Môn đều được xếp vào 'Tử bộ · Thuật số loại', dùng chung hệ tọa độ Thiên Can – Địa Chi – Ngũ Hành.",
        "Điểm phân biệt kỹ thuật rõ nhất: Tử Bình Bát Tự hoàn toàn lấy lịch Tiết khí Mặt Trời lập Tứ trụ (tìm Dụng thần cân bằng), trong khi Tử Vi Đẩu Số dùng tháng ngày Âm lịch để an 14 chính tinh và Tứ Hóa qua 12 cung.",
        "Tiếp cận học thuật coi đây là di sản ký hiệu học, tâm lý tự sự và triết lý ứng xử truyền thống ('Nhất Mệnh nhì Vận... ngũ Đọc sách'), tách biệt rạch ròi với khoa học thực chứng."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-diagram-ziwei-bazi-qimen",
          layout: "wide",
          callouts: [
            { code: "M1", title: "Trục Lịch pháp Tham chiếu", detail: "Bát Tự bám 24 Tiết khí Mặt Trời; Tử Vi bám tuần Trăng Âm lịch và giờ sinh." },
            { code: "M2", title: "Loan Đầu & Lý Khí", detail: "Phong thủy lịch sử kết hợp thực địa địa hình khí hậu với biểu tượng hướng vị." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-metaphysics-systems", "img-diagram-ziwei-bazi-qimen", "img-hero-iching"],
      historicalDocument: {
        imageId: "img-diagram-ziwei-bazi-qimen",
        docTypeLabel: "Thư mục Cổ học (《四库全书总目提要·术数类》)",
        period: "Tống – Minh – Thanh (Thế kỷ X–XVIII SCN)",
        holdingInstitution: "Chinese Text Project & Đài Loan Cố Cung Thư Mục",
        transcriptionZh: "术数之兴，多在秦汉以后，要其旨，不出乎阴阳五行生克制化之理。",
        translationVi: "Các môn Thuật số hưng thịnh chủ yếu từ sau thời Tần Hán; xét thấu tôn chỉ gốc rễ đều không ra ngoài lý Âm Dương Ngũ Hành sinh khắc chế hóa.",
        archivalNote: "Học giả Kỷ Quân thời Càn Long nhận xét bản chất thư tịch thuật số khi tổng biên 《Tứ Khố Toàn Thư》: đọc để hiểu cấu trúc ký hiệu cổ đại, tránh mê tín mù quáng."
      },
      categoryModule: {
        kind: "metaphysics",
        title: "So sánh Kỹ thuật & Giá trị Văn hóa Bốn Hệ thống Thuật số",
        items: [
          { tag: "Tử Bình Bát Tự", label: "4 Trụ 8 Chữ & Dụng thần", note: "Cân bằng vượng suy Ngũ Hành quanh Nhật Can theo tiết khí (Thiên văn Mặt Trời)." },
          { tag: "Tử Vi Đẩu Số", label: "12 Cung Mệnh & Tứ Hóa Phi tinh", note: "Phân tích tương tác cung vị (Mệnh, Tài, Quan, Thiên Di) qua Tam hợp và Bắc phái Phi tinh." },
          { tag: "Phong Thủy & Kỳ Môn", label: "Không gian Kiến trúc & Thời – Không", note: "Loan Đầu thực địa (ánh sáng, thông gió, thủy thế) tách khỏi các lớp biểu tượng tâm linh." }
        ]
      }
    },

    "china-vietnam-supply-chain-rcep": {
      articleId: "china-vietnam-supply-chain-rcep",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: "Lê Hưng Thịnh (黎兴盛) — CHINESE CULTURE EXPLORER",
      institution: "Chinese Culture Explorer Research Desk",
      verificationStatus: "Đã kiểm chứng Nguồn & Bản quyền Ảnh",
      storytellingFormat: "data-driven",
      storytellingFormatLabel: "International Trade Analytics • Chuỗi cung ứng & Hải quan RCEP",
      standfirst:
        "Phân tích vai trò bổ trợ trong chuỗi sản xuất giữa các vành đai công nghiệp Trung Quốc và Việt Nam dưới khung ưu đãi thuế quan ACFTA (C/O Form E) – RCEP, chuẩn phân loại mã HS và quản trị rủi ro thông quan.",
      heroImageId: "img-hero-supply-chain-rcep",
      thumbnailConfig: {
        imageId: "img-hero-supply-chain-rcep",
        aspectRatio: "16:10",
        focalPoint: "42% 50%"
      },
      keyTakeaways: [
        "Thương mại Việt – Trung mang tính bổ trợ chuỗi giá trị: Việt Nam nhập nguyên phụ liệu, máy móc, linh kiện từ Trung Quốc để gia công xuất khẩu và xuất khẩu nông sản chính ngạch ngược lại.",
        "Hưởng thuế ưu đãi ACFTA (C/O Form E) hay RCEP đòi hỏi đáp ứng tiêu chí xuất xứ WO, PE, CTH hoặc hàm lượng giá trị khu vực RVC 40% và khớp tuyệt đối giữa Invoice, Packing List, B/L.",
        "Khai báo điện tử VNACCS và cửa khẩu thông minh Lạng Sơn – Bằng Tường đòi hỏi phân loại đúng mã HS 8–10 số theo 6 quy tắc GRI của Tổ chức Hải quan Thế giới (WCO)."
      ],
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          imageId: "img-infographic-co-forme-incoterms",
          layout: "wide",
          callouts: [
            { code: "B1", title: "Kiểm toán Mã HS & 6 Quy tắc GRI", detail: "Xác định thuế suất MFN vs ACFTA Form E trước khi ký hợp đồng FOB/CIF." },
            { code: "B2", title: "Đối chiếu Bộ Chứng từ Ngoại thương", detail: "Đảm bảo thống nhất tên hàng, trọng lượng và trị giá giữa Invoice, B/L, C/O." }
          ]
        }
      ],
      galleryImageIds: ["img-hero-supply-chain-rcep", "img-infographic-co-forme-incoterms", "img-infographic-contemporary-eco"],
      historicalDocument: {
        imageId: "img-infographic-co-forme-incoterms",
        docTypeLabel: "Khung Pháp lý Ngoại thương (ACFTA Form E, RCEP & WCO HS Rules)",
        period: "Chuẩn mực Thực hành Thương mại Đương đại (2020–2026)",
        holdingInstitution: "UN Comtrade, WCO Harmonized System & ASEAN RCEP",
        transcriptionZh: "原产地规则（RVC 40%）• 协调制度（HS归类）• 单证一致 • 智慧口岸通关",
        translationVi: "Quy tắc xuất xứ (RVC 40%) — Hệ thống Hài hòa HS — Đồng nhất chứng từ — Thông quan cửa khẩu thông minh.",
        archivalNote: "Mô hình chuẩn hóa quy trình kiểm tra chứng từ trước thông quan giúp hạn chế rủi ro bác C/O Form E và ấn định lại trị giá hải quan."
      },
      categoryModule: {
        kind: "business",
        title: "Bộ Công cụ Thực chiến Thương mại Quốc tế Việt – Trung",
        items: [
          { tag: "Hải quan & Mã HS", label: "6 Quy tắc Phân loại GRI", note: "Xác định đúng mã HS 8 số để tra cứu biểu thuế MFN, ACFTA Form E, RCEP và VAT." },
          { tag: "Xuất xứ C/O", label: "Form E (ACFTA) vs Form RCEP", note: "So sánh mức thuế ưu đãi và quy tắc cộng gộp xuất xứ linh hoạt cho hàng lắp ráp tại Việt Nam." },
          { tag: "Giao nhận & Hợp đồng", label: "Incoterms 2020 & Cửa khẩu Số", note: "Phân chia rủi ro tại cảng Thâm Quyến/Ninh Ba – Hải Phòng và tuyến bộ Hữu Nghị – Bằng Tường." }
        ]
      }
    },

    "imperial-examination-keju": {
      articleId: "imperial-examination-keju",
      heroImageId: "img-hero-keju-examinations",
      editorialCategoryVi: "Lịch sử & Thể chế • Khoa cử Nho học",
      editorialCategoryEn: "History & Institutions • Imperial Examination System",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: {
        name: "Ban Nghiên cứu Thể chế & Sử học Đông Á CCE",
        roleVi: "Chuyên khảo Chế độ Khoa cử Tùy–Đường–Tống–Minh–Thanh & Văn Miếu Việt Nam",
        affiliation: "Chinese Culture Explorer Editorial Board"
      },
      thumbnailConfig: {
        imageId: "img-hero-keju-examinations",
        aspectRatio: "16:10",
        focalPoint: "50% 45%",
        cropNote: "Cắt tiêu điểm vào nhóm sĩ tử xem bảng vàng trúng tuyển trước cổng trường thi."
      },
      pullQuote: {
        quoteVi: "Khoa cử không xóa bỏ hoàn toàn bất bình đẳng tài sản, nhưng lần đầu tiên trong lịch sử tiền hiện đại đã đặt tri thức văn chương và kinh nghĩa lên trên huyết thống quý tộc thế tập.",
        quoteZh: "朝为田舍郎，暮登天子堂；将相本无种，男儿当自强。",
        attribution: "Thần Đồng Thi (神童诗) – Uông Thù thời Bắc Tống & Benjamin Elman (2000)"
      },
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          layout: "split-aside",
          imageId: "img-doc-jinshi-stele",
          kicker: "Hiện vật Văn khắc Lịch sử • Quốc Tử Giám & Văn Miếu",
          contextNote: "198 tấm bia Tiến sĩ tại Quốc Tử Giám Bắc Kinh và 82 bia Tiến sĩ tại Văn Miếu Hà Nội là chứng tích vật chất trường tồn của truyền thống trọng dụng hiền tài."
        },
        {
          afterSectionIndex: 1,
          layout: "full-bleed-figure",
          imageId: "img-diagram-confucian-circles",
          kicker: "Cấu trúc Tư tưởng • Tứ Thư Ngũ Kinh & Đạo Trị Quốc",
          contextNote: "Chương trình thi cử từ thời Nguyên–Minh–Thanh lấy Tứ Thư Tập Chú của Chu Hy làm chuẩn mực chấm bài Tu thân – Tề gia – Trị quốc."
        }
      ],
      galleryImageIds: ["img-hero-keju-examinations", "img-doc-jinshi-stele", "img-hero-confucianism"],
      historicalDocument: {
        imageId: "img-doc-jinshi-stele",
        docTypeLabel: "Bia Đề danh Tiến sĩ (进士题名碑) – Quốc Tử Giám Bắc Kinh & Văn Miếu Hà Nội",
        period: "Nguyên – Minh – Thanh (1302–1904) & Lê Sơ Việt Nam (1484)",
        holdingInstitution: "Beijing Guozijian Museum & Văn Miếu – Quốc Tử Giám Hà Nội",
        transcriptionZh: "贤才国家之元气 • 金榜题名 • 连中三元",
        translationVi: "Hiền tài là nguyên khí của quốc gia — Bảng vàng đề tên — Liên trúng Tam nguyên.",
        archivalNote: "Bia Tiến sĩ ghi rõ họ tên, quê quán và thứ hạng (Đệ nhất giáp Tiến sĩ cập đệ: Trạng nguyên, Bảng nhãn, Thám hoa) để lưu danh hậu thế."
      },
      categoryModule: {
        kind: "history",
        title: "Cấu trúc Ba Cấp Thi Khoa Cử & Đối chiếu Trung – Việt",
        items: [
          { tag: "Thi Hương (乡试)", label: "Giải nguyên (解元) – Cử nhân", note: "Tổ chức 3 năm một lần vào mùa thu tại các tỉnh; tại Việt Nam gồm 4 kỳ (Tứ trường) chọn Cử nhân và Tú tài." },
          { tag: "Thi Hội (会试)", label: "Hội nguyên (会元) – Cống sĩ", note: "Tổ chức vào mùa xuân năm sau tại kinh đô do Bộ Lễ chủ trì, khảo hạch sâu kinh nghĩa, chiếu, chế, biểu và văn sách." },
          { tag: "Thi Đình (殿试)", label: "Trạng nguyên • Bảng nhãn • Thám hoa", note: "Hoàng đế đích thân ra đề Văn sách hỏi về thời vụ trị nước, xếp hạng Tam giáp Tiến sĩ và khắc tên lên bia đá." }
        ]
      }
    },

    "four-great-inventions-science": {
      articleId: "four-great-inventions-science",
      heroImageId: "img-hero-four-inventions",
      editorialCategoryVi: "Lịch sử Khoa học & Kỹ nghệ • Tứ Đại Phát Minh",
      editorialCategoryEn: "History of Science & Technology • Four Great Inventions",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: {
        name: "Ban Nghiên cứu Lịch sử Khoa học & Công nghệ CCE",
        roleVi: "Chuyên khảo Khoa học & Văn minh Trung Hoa (Needham Research Synthesis)",
        affiliation: "Chinese Culture Explorer Editorial Board"
      },
      thumbnailConfig: {
        imageId: "img-hero-four-inventions",
        aspectRatio: "16:10",
        focalPoint: "50% 45%",
        cropNote: "Cắt tiêu điểm vào bản khắc gỗ Kinh Kim Cương năm 868 SCN sắc nét."
      },
      pullQuote: {
        quoteVi: "Giấy, nghề in, thuốc súng và la bàn từ tính đã làm thay đổi diện mạo văn minh toàn cầu hơn bất kỳ đế chế hay học thuyết nào.",
        quoteZh: "造纸术、印刷术、火药与指南针——重塑世界知识传播与航海格局的四大技术。",
        attribution: "Francis Bacon (Novum Organum, 1620) & Joseph Needham (Science and Civilisation in China)"
      },
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          layout: "split-aside",
          imageId: "img-doc-tiangong-kaiwu",
          kicker: "Bách khoa Kỹ thuật 1637 • 《Thiên Công Khai Vật》 của Tống Ứng Tinh",
          contextNote: "Mộc bản khắc họa chi tiết quy trình xeo giấy trúc (Sát thanh – Đãng liêm) trong bộ bách khoa kỹ thuật thời Minh."
        },
        {
          afterSectionIndex: 1,
          layout: "full-bleed-figure",
          imageId: "img-map-silk-road-corridors",
          kicker: "Lộ trình Truyền bá Kỹ thuật • Từ Trường An & Tuyền Châu tới Thế giới",
          contextNote: "Nghề làm giấy truyền sang Samarkand sau năm 751, la bàn hàng hải và thuốc súng lan tỏa qua mạng lưới thương mại Ấn Độ Dương và Đại lục Á–Âu."
        }
      ],
      galleryImageIds: ["img-hero-four-inventions", "img-doc-tiangong-kaiwu", "img-map-silk-road-corridors"],
      historicalDocument: {
        imageId: "img-doc-tiangong-kaiwu",
        docTypeLabel: "Mộc bản 《Thiên Công Khai Vật · Sát Thanh》 (天工开物, 1637)",
        period: "Minh Sùng Trinh năm thứ 10 (1637)",
        holdingInstitution: "National Library of China & British Library (Dunhuang Collection)",
        transcriptionZh: "斩竹漂塘 • 煮楻足火 • 荡帘覆压 • 透火焙干",
        translationVi: "Chặt tre ngâm hồ — Nấu vôi đun kỹ — Xeo giấy bằng liêm — Ép nước sấy khô.",
        archivalNote: "Bản khắc gỗ năm 1637 minh họa đầy đủ 5 bước chuẩn hóa sản xuất giấy trúc thủ công quy mô lớn thời Minh."
      },
      categoryModule: {
        kind: "history",
        title: "Niên biểu Kiểm chứng Khảo cổ học Tứ Đại Phát Minh",
        items: [
          { tag: "Làm giấy (造纸术)", label: "Giấy Phương Mã Than (179–141 TCN) & Thái Luân (105 SCN)", note: "Khảo cổ phát hiện mảnh bản đồ giấy thời Tây Hán trước khi Thái Luân cải tiến quy trình vỏ cây, gai rách và lưới cá." },
          { tag: "In ấn (印刷术)", label: "Kinh Kim Cương (868 SCN) & Tất Thăng (1041–1048)", note: "Từ mộc bản điêu khắc thời Đường đến chữ rời đất nung của Tất Thăng (ghi trong Mộng Khê Bút Đàm) và chữ rời gỗ Vương Trinh." },
          { tag: "La bàn & Thuốc súng", label: "Mộng Khê Bút Đàm (1088) & Vũ Kinh Tổng Yếu (1044)", note: "Thẩm Quát ghi nhận độ từ thiên sớm hơn châu Âu 400 năm; Tăng Công Lượng công bố 3 công thức thuốc súng đầu tiên." }
        ]
      }
    },

    "chinese-calligraphy-seal-aesthetics": {
      articleId: "chinese-calligraphy-seal-aesthetics",
      heroImageId: "img-hero-calligraphy-five-scripts",
      editorialCategoryVi: "Nghệ thuật & Mỹ học • Thư Pháp & Triện Khắc",
      editorialCategoryEn: "Chinese Art & Aesthetics • Calligraphy & Seal Engraving",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: {
        name: "Ban Nghiên cứu Mỹ học & Văn tự Đông Á CCE",
        roleVi: "Chuyên khảo Ngũ Thể Thư Pháp, Văn phòng Tứ bảo & Nghệ thuật Triện khắc",
        affiliation: "Chinese Culture Explorer Editorial Board"
      },
      thumbnailConfig: {
        imageId: "img-hero-calligraphy-five-scripts",
        aspectRatio: "16:10",
        focalPoint: "48% 50%",
        cropNote: "Cắt tiêu điểm vào các dòng hành thư 《Lan Đình Tập Tự》 và ấn chương đỏ chu sa."
      },
      pullQuote: {
        quoteVi: "Thư pháp dùng một ngọn bút lông mềm mại để kiến tạo khung xương kim thạch trên mặt giấy trắng, biến mỗi con chữ thành một bức chân dung tinh thần (Tâm họa) của người cầm bút.",
        quoteZh: "书者，心画也。计白当黑，气韵生动。",
        attribution: "Dương Hùng (《Pháp Ngôn》) & Đặng Thạch Như (Mỹ học Thư pháp Cổ điển)"
      },
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          layout: "full-bleed-figure",
          imageId: "img-doc-lanting-scroll",
          kicker: "Thiên hạ Đệ nhất Hành thư • 《Lan Đình Tập Tự》 (Vương Hy Chi, 353 SCN)",
          contextNote: "Bản mô phỏng Thần Long của Phùng Thừa Tố thời Đường lưu giữ tại Bảo tàng Cố cung Bắc Kinh, nổi tiếng với 20 chữ 'Chi' (之) biến hóa khác biệt."
        },
        {
          afterSectionIndex: 1,
          layout: "split-aside",
          imageId: "img-diagram-yinyang-cosmology",
          kicker: "Triết lý Bố cục • Kế Bạch Đương Hắc & Tương phản Huyền – Chu",
          contextNote: "Khoảng trắng (Lưu bạch – Dương) và nét mực đen (Hắc – Âm) kết hợp cùng ấn triện đỏ chu sa tạo nên thế cân bằng thị giác sống động."
        }
      ],
      galleryImageIds: ["img-hero-calligraphy-five-scripts", "img-doc-lanting-scroll", "img-hero-spring-festival"],
      historicalDocument: {
        imageId: "img-doc-lanting-scroll",
        docTypeLabel: "Đường triều Mô bản 《Lan Đình Tập Tự》 (兰亭集序 • 神龙摹本)",
        period: "Đông Tấn Vĩnh Hòa thứ 9 (353 SCN) – Đường Thần Long (khoảng thế kỷ VII–VIII)",
        holdingInstitution: "The Palace Museum, Beijing (故宫博物院)",
        transcriptionZh: "永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。",
        translationVi: "Năm Vĩnh Hòa thứ chín, năm Quý Sửu, đầu tháng cuối xuân, cùng hội họp tại đình Lan ở Sơn Âm xứ Cối Kê để làm lễ Tu Hễ.",
        archivalNote: "Kỹ thuật 'Song câu điền mặc' (vẽ viền đôi rồi tô mực) của các thư gia Nội phủ nhà Đường tái hiện chính xác tới từng sợi lông bút tước xước của Vương Hy Chi."
      },
      categoryModule: {
        kind: "art",
        title: "Ngũ Thể Thư Pháp & Văn Phòng Tứ Bảo Kinh Điển",
        items: [
          { tag: "Ngũ Thể (五体)", label: "Triện • Lệ • Khải • Hành • Thảo", note: "Từ nét cong cân đối của Tiểu Triện thời Tần, tằm đầu nhạn vĩ của Lệ thư thời Hán đến chuẩn mực Khải thư thời Đường và sự phóng khoáng của Hành–Thảo." },
          { tag: "Tứ Bảo (文房四宝)", label: "Bút Hồ • Mặc Huy • Giấy Tuyên • Nghiên Đoan", note: "Bốn vật phẩm định hình chất liệu biểu đạt sắc độ 'Mặc phân ngũ sắc' (Tiêu, Nùng, Trọng, Đạm, Thanh)." },
          { tag: "Triện Khắc (篆刻)", label: "Chu văn (Dương ấn) & Bạch văn (Âm ấn)", note: "Nghệ thuật khắc đá Thanh Điền / Thọ Sơn kết hợp văn tự cổ và bố cục 'Sơ khả tẩu mã, mật bất thấu phong'." }
        ]
      }
    },

    "sino-vietnamese-translation-business": {
      articleId: "sino-vietnamese-translation-business",
      heroImageId: "img-hero-hanviet-false-friends",
      editorialCategoryVi: "Ngôn ngữ & Giao thương Trung – Việt • Dịch thuật Thực chiến",
      editorialCategoryEn: "Sino-Vietnamese Linguistics & Business Translation",
      publishedDate: "2026-11-15",
      updatedDate: "2026-11-15",
      author: {
        name: "Ban Nghiên cứu Ngôn ngữ học Hán–Việt & Thương mại Quốc tế CCE",
        roleVi: "Chuyên khảo Đồng hình Dị nghĩa Hán–Việt & Dịch thuật Hợp đồng Ngoại thương",
        affiliation: "Chinese Culture Explorer Editorial Board"
      },
      thumbnailConfig: {
        imageId: "img-hero-hanviet-false-friends",
        aspectRatio: "16:10",
        focalPoint: "50% 48%",
        cropNote: "Cắt tiêu điểm vào trang mộc bản từ điển đối chiếu Hán – Nôm cổ."
      },
      pullQuote: {
        quoteVi: "Kho tàng từ Hán-Việt là chiếc cầu nối giúp người Việt học nhanh gấp đôi vốn từ vựng học thuật tiếng Trung, nhưng cũng chứa những 'bẫy đồng hình dị nghĩa' cần được phân tích bằng ngôn ngữ học lịch sử.",
        quoteZh: "同形异义词辨析：跨越汉越词历史语义流变与现代国际商务合同翻译的鸿沟。",
        attribution: "Khung Phân tích Từ vựng Hán–Việt & Hợp đồng Ngoại thương CCE"
      },
      inlineVisuals: [
        {
          afterSectionIndex: 0,
          layout: "split-aside",
          imageId: "img-infographic-sinoviet-script",
          kicker: "Ngữ âm & Từ vựng Lịch sử • Ba Nhóm Tương ứng Hán–Việt",
          contextNote: "Phân loại từ đồng hình đồng nghĩa (độc lập, hợp tác), đồng hình dị nghĩa một phần và đồng hình dị nghĩa hoàn toàn (biểu tình, phương tiện, kinh lý)."
        },
        {
          afterSectionIndex: 1,
          layout: "full-bleed-figure",
          imageId: "img-infographic-co-forme-incoterms",
          kicker: "Ngôn ngữ Hợp đồng Ngoại thương • Chuẩn Thuật ngữ Hải quan & L/C",
          contextNote: "Đối chiếu chính xác các thuật ngữ 报关 (khai báo hải quan), 提单 (vận đơn B/L), 原产地证 (C/O) và 不可抗力 (bất khả kháng)."
        }
      ],
      galleryImageIds: ["img-hero-hanviet-false-friends", "img-infographic-sinoviet-script", "img-infographic-co-forme-incoterms"],
      historicalDocument: {
        imageId: "img-hero-hanviet-false-friends",
        docTypeLabel: "Từ điển Mộc bản Hán – Nôm 《Chỉ Nam Ngọc Âm Giải Nghĩa》 & Hợp đồng Song ngữ",
        period: "Thế kỷ XVII – Đương đại",
        holdingInstitution: "Viện Nghiên cứu Hán Nôm & Phòng Thương mại Quốc tế",
        transcriptionZh: "经理 (Giám đốc) • 表情 (Biểu cảm) • 报关 (Khai báo hải quan) • 不可抗力 (Bất khả kháng)",
        translationVi: "Phân biệt rõ nghĩa Hán-Việt lịch sử và nghĩa tiếng Trung Phổ thông hiện đại trong giao dịch thương mại.",
        archivalNote: "Việc nắm vững quy luật thu hẹp, mở rộng và dịch chuyển nghĩa giúp sinh viên Kinh doanh Quốc tế dịch chuẩn xác chứng từ và hợp đồng."
      },
      categoryModule: {
        kind: "sinoviet",
        title: "Bảng Kiểm Dịch Thuật & Bạn Giả Ngôn Ngữ Hán – Việt Trọng Điểm",
        items: [
          { tag: "Chức danh & Doanh nghiệp", label: "经理 (Giám đốc) vs 董事 (Ủy viên HĐQT)", note: "Tránh dịch nhầm 总经理 (Tổng giám đốc) hay 董事长 (Chủ tịch HĐQT) trong biên bản đàm phán." },
          { tag: "Đời sống & Giao tiếp", label: "方便 (Thuận tiện) • 困难 (Khó khăn) • 辛苦 (Vất vả)", note: "Các từ có âm Hán-Việt nghe trang trọng nhưng trong tiếng Trung hiện đại là từ vựng giao tiếp hàng ngày." },
          { tag: "Chứng từ Ngoại thương", label: "装箱单 (Packing List) • 商业发票 (Invoice) • 信用证 (L/C)", note: "Bộ thuật ngữ bắt buộc phải thống nhất 100% giữa hợp đồng, hóa đơn thương mại và tờ khai hải quan." }
        ]
      }
    },

    "forbidden-city-3d-dissection": {
      articleId: "forbidden-city-3d-dissection",
      heroImageId: "img-forbidden-city-imperial-axis-gate",
      editorialCategoryVi: "Kiến trúc Hoàng gia & Giải phẫu 3D • 紫禁城中轴线",
      editorialCategoryEn: "Imperial Architecture & 3D Structural Dissection",
      publishedDate: "2026-11-18",
      updatedDate: "2026-11-18",
      author: {
        name: "Lê Hưng Thịnh (黎兴盛)",
        roleVi: "Nhà sáng lập & Biên tập Kiến trúc – Văn hiến Đông Á",
        affiliation: "CHINESE CULTURE EXPLORER"
      },
      thumbnailConfig: {
        imageId: "img-forbidden-city-imperial-axis-gate",
        aspectRatio: "16:10",
        focalPoint: "50% 50%",
        cropNote: "Khung nhìn xuyên qua cổng son 81 đinh đồng thẳng dọc trục Thái Hòa Điện."
      },
      pullQuote: {
        quoteVi: "Kiến trúc Tử Cấm Thành không xây để chống chọi cứng nhắc với địa chấn, mà dùng 3 tầng mộng Đấu Củng đàn hồi và tam đài Hán Bạch Ngọc như một bộ máy vũ trụ học bằng gỗ và đá.",
        quoteZh: "斗拱抗震结构与中轴礼制空间：故宫九百八十座木构建筑的千年力学美学。",
        attribution: "Chuyên luận Giải phẫu 3D Tử Cấm Thành — Chinese Culture Explorer"
      },
      inlineVisuals: [
        {
          afterSectionIndex: 1,
          layout: "wide",
          imageId: "img-diagram-dougong-seismic",
          kicker: "Cơ học Gỗ Không Đinh · Kết cấu Mộng Đấu Củng (斗拱)",
          contextNote: "Đối chiếu kết cấu 3 bậc chồng công đỡ mái Trọng Diêm Vũ Điện với hệ cột Kim ti Nam mộc."
        }
      ],
      galleryImageIds: [
        "img-forbidden-city-imperial-axis-gate",
        "img-forbidden-city-jingshan-panorama",
        "img-forbidden-city-crimson-gate-terrace",
        "img-forbidden-city-autumn-ginkgo-moat",
        "img-hero-traditional-arch",
        "img-diagram-dougong-seismic"
      ],
      historicalDocument: {
        imageId: "img-hero-traditional-arch",
        docTypeLabel: "Khảo công ký & Hồ sơ Kiến trúc Cố Cung (《周礼·考工记》)",
        period: "Tiên Tần – Minh Vĩnh Lạc – Thanh Khang Hy",
        holdingInstitution: "The Palace Museum & UNESCO World Heritage Archive",
        transcriptionZh: "匠人营国，方九里，旁三门。国中九经九纬，经涂九轨。左祖右社，面朝后市。",
        translationVi: "Bậc tượng nhân quy hoạch kinh đô vuông 9 dặm, mỗi mặt mở 3 cửa; tả lập Thái Miếu thờ tổ tiên, hữu lập Xã Tắc, trước đặt Triều đường, sau đặt Thị tứ.",
        archivalNote: "Bản vẽ quy chế kinh thành lý tưởng trong Chu Lễ làm nền tảng trục Thần đạo của Bắc Kinh và Kinh thành Huế."
      },
      categoryModule: {
        kind: "arts",
        title: "So sánh Quy chế Chuẩn Tắc vs Thực Tế Vật Lý Tử Cấm Thành",
        items: [
          { tag: "Quy mô Gian phòng", label: "9.999,5 gian (Dân gian) vs 8.886 gian (Khảo sát)", note: "Hồ sơ kiểm kê của Bảo tàng Cố Cung xác định 8.886 gian trong 980 tòa kiến trúc trên 724.250 m²." },
          { tag: "Quyền lực Nội đình", label: "Càn Thanh Cung (Minh) → Dưỡng Tâm Điện (1722)", note: "Từ thời Ung Chính, hoàng đế chuyển hẳn nơi thiết triều thường nhật sang khu chữ Công Dưỡng Tâm Điện." },
          { tag: "Đối thoại Việt Nam", label: "Ngọ Môn & Thái Hòa Điện (Bắc Kinh ⇄ Huế)", note: "Nhà Nguyễn giữ trục Ngọ Môn – Thái Hòa nhưng sáng tạo hồ Thái Dịch và mái Trùng thiềm Điệp ốc nhiệt đới." }
        ]
      }
    }
  };

  // ==========================================================================
  // Section 11 Editorial Quality Control Validation Engine
  // ==========================================================================
  function validateArticleEditorial(articleId) {
    const ed = articleEditorial[articleId];
    const articles = window.CCE_ARTICLES || [];
    const article = articles.find((a) => a.id === articleId);
    const checks = [];

    const hero = ed ? images[ed.heroImageId] : null;
    const isHeroUnique =
      !!ed &&
      Object.values(articleEditorial).filter((x) => x.heroImageId === ed.heroImageId).length === 1;

    checks.push({
      code: "Q1",
      label: "Ảnh chính (Hero Image) gắn trực tiếp với chủ đề bài viết & không trùng lặp",
      ok: Boolean(hero && isHeroUnique),
      detail: hero ? `${hero.id} (${hero.aspectRatio})` : "Thiếu Hero image"
    });
    checks.push({
      code: "Q2",
      label: "Thích hợp bối cảnh lịch sử & địa lý của chuyên mục",
      ok: Boolean(hero && hero.historicalPeriod && article && ed),
      detail: hero ? hero.historicalPeriod : ""
    });
    checks.push({
      code: "Q3",
      label: "Ghi rõ Nguồn gốc, Cơ quan lưu giữ & Đường dẫn kiểm chứng",
      ok: Boolean(hero && hero.originalSource && hero.institution && hero.sourceUrl),
      detail: hero ? hero.institution : ""
    });
    checks.push({
      code: "Q4",
      label: "Ghi nhận Bản quyền & Giấy phép sử dụng rõ ràng (License)",
      ok: Boolean(hero && hero.license && hero.copyrightHolder),
      detail: hero ? hero.license : ""
    });
    checks.push({
      code: "Q5",
      label: "Chú thích ảnh (Caption) & Alt-text mô tả độc lập với Tiêu đề bài",
      ok: Boolean(hero && hero.caption && hero.altText && article && hero.altText !== article.titleVi),
      detail: "Alt-text mô tả cấu trúc thị giác"
    });
    checks.push({
      code: "Q6",
      label: "Ảnh thu nhỏ quảng bá (Promotional Thumbnail) có điểm cắt tiêu điểm riêng",
      ok: Boolean(ed && ed.thumbnailConfig && images[ed.thumbnailConfig.imageId] && ed.thumbnailConfig.focalPoint),
      detail: ed && ed.thumbnailConfig ? `${ed.thumbnailConfig.aspectRatio} @ ${ed.thumbnailConfig.focalPoint}` : ""
    });
    checks.push({
      code: "Q7",
      label: "Tích hợp Ảnh / Bản đồ / Infographic ngữ cảnh đặt cạnh đoạn nội dung liên quan",
      ok: Boolean(ed && Array.isArray(ed.inlineVisuals) && ed.inlineVisuals.length > 0 && ed.inlineVisuals.every((v) => images[v.imageId])),
      detail: ed ? `${ed.inlineVisuals.length} tư liệu ngữ cảnh` : ""
    });
    checks.push({
      code: "Q8",
      label: "Phân loại rõ Tính xác thực (Tác phẩm gốc vs Phục dựng vs Infographic vs Bản đồ)",
      ok: Boolean(hero && hero.authenticityType && hero.authenticityLabelVi),
      detail: hero ? hero.authenticityLabelVi : ""
    });
    checks.push({
      code: "Q9",
      label: "Tư liệu Lịch sử & Thư viện Ảnh tương tác đa khung (Prev/Next + Phóng to)",
      ok: Boolean(ed && ed.historicalDocument && images[ed.historicalDocument.imageId] && ed.galleryImageIds && ed.galleryImageIds.length >= 3),
      detail: ed ? `${ed.galleryImageIds.length} khung ảnh` : ""
    });
    checks.push({
      code: "Q10",
      label: "Hồ sơ tác giả, ngày xuất bản, ngày cập nhật, nguồn tham khảo & bản kiểm tra đáp ứng mobile",
      ok: Boolean(ed && ed.author && ed.publishedDate && ed.updatedDate && article && article.references && article.references.length > 0),
      detail: ed ? `Cập nhật ${ed.updatedDate}` : ""
    });

    const passedCount = checks.filter((c) => c.ok).length;
    return {
      articleId,
      passedCount,
      totalChecks: checks.length,
      passed: passedCount === checks.length,
      checks
    };
  }

  function validateAllEditorialContent() {
    const articles = window.CCE_ARTICLES || [];
    const results = articles.map((a) => validateArticleEditorial(a.id));
    const uniqueHeroes = new Set(Object.values(articleEditorial).map((e) => e.heroImageId));
    const allPassed = results.every((r) => r.passed) && uniqueHeroes.size === articles.length;
    return {
      articleCount: articles.length,
      imageCount: Object.keys(images).length,
      uniqueHeroCount: uniqueHeroes.size,
      allPassed,
      results
    };
  }

  window.CCE_EDITORIAL_MEDIA = {
    images,
    articleEditorial,
    validateArticleEditorial,
    validateAllEditorialContent
  };
})();
