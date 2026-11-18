// ============================================================================
// Digital Museum Exhibition Archive & Enriched Academic Article Supplements
// CHINESE CULTURE EXPLORER – 中国文化探索
// Every object attributes verified provenance, museum collection, dimensions,
// and material evidence without fabricated metadata or synthetic 3D claims.
// ============================================================================

window.CCE_MUSEUM = {
  categories: [
    { id: "all", labelVi: "Tất cả Hiện vật", labelZh: "全部藏品", labelEn: "All Objects" },
    { id: "painting", labelVi: "Hội họa Lịch sử", labelZh: "历代绘画", labelEn: "Paintings" },
    { id: "calligraphy", labelVi: "Thư pháp Danh tích", labelZh: "书法名迹", labelEn: "Calligraphy" },
    { id: "ceramics", labelVi: "Gốm sứ Cổ truyền", labelZh: "陶瓷珍品", labelEn: "Ceramics" },
    { id: "ancient-books", labelVi: "Cổ tịch Thiện bản", labelZh: "古籍善本", labelEn: "Ancient Books" },
    { id: "maps", labelVi: "Bản đồ Lịch sử", labelZh: "历史舆图", labelEn: "Historical Maps" },
    { id: "architecture", labelVi: "Kiến trúc Cổ điển", labelZh: "古典建筑", labelEn: "Architecture" },
    { id: "artifacts", labelVi: "Thanh đồng & Ngọc khí", labelZh: "青铜玉器", labelEn: "Artifacts" },
    { id: "collections", labelVi: "Đặc triển Bảo tàng", labelZh: "馆藏特展", labelEn: "Museum Collections" }
  ],

  culturalShowcase: [
    {
      id: "showcase-arch",
      titleVi: "Kiến trúc Cổ điển & Kết cấu Gỗ",
      titleZh: "中国古建筑",
      titleEn: "Ancient Architecture",
      subtitle: "Hệ kết cấu Đấu củng, Tứ hợp viện và Trường Thành",
      description: "Ngôn ngữ không gian lấy trục đối xứng, sân trong đón khí và kết cấu mộng gỗ không đinh làm nền tảng trật tự xã hội.",
      targetAction: "open-artifact",
      targetId: "taihe-dian",
      badge: "Kiến trúc"
    },
    {
      id: "showcase-paint",
      titleVi: "Hội họa Sơn thủy & Thủy mặc",
      titleZh: "传统水墨画",
      titleEn: "Traditional Painting",
      subtitle: "Mặc phân ngũ sắc, Tam viễn và nghệ thuật Lưu bạch",
      description: "Tranh không sao chép quang học thuần túy mà chưng cất khí vận sơn hà bằng bút mực và khoảng trắng.",
      targetAction: "open-article",
      targetId: "ink-wash-painting",
      badge: "Hội họa"
    },
    {
      id: "showcase-calligraphy",
      titleVi: "Thư pháp Hán tự",
      titleZh: "中国书法",
      titleEn: "Calligraphy",
      subtitle: "Đường nét Triện – Lệ – Khải – Hành – Thảo qua các thời đại",
      description: "Nghệ thuật nâng chữ viết thành tạo hình thị giác biểu lộ khí chất học giả, từ Giáp cốt đến Hành thư thời Tấn – Tống.",
      targetAction: "open-artifact",
      targetId: "lantingji-xu",
      badge: "Thư pháp"
    },
    {
      id: "showcase-lit",
      titleVi: "Kinh điển & Văn học Cổ đại",
      titleZh: "古典文学",
      titleEn: "Classical Literature",
      subtitle: "Từ Kinh Thi, Sử ký đến Đường thi và Tứ đại danh tác",
      description: "Dòng chảy ngôn từ kết tinh tư tưởng lịch sử, nhân sinh quan và chuẩn mực văn hiến toàn vùng Đông Á.",
      targetAction: "nav",
      targetId: "philosophy",
      badge: "Văn hiến"
    },
    {
      id: "showcase-tea",
      titleVi: "Văn hóa Trà & Đời sống Nhã tập",
      titleZh: "中国茶文化",
      titleEn: "Tea Culture",
      subtitle: "Lục trà, Ô Long, Phổ Nhĩ và con đường Trà Mã Cổ Đạo",
      description: "Từ 《Trà Kinh》 của Lục Vũ thời Đường đến nghi thức Công phu trà Mân-Việt và hàng hóa định hình giao thương biển.",
      targetAction: "open-article",
      targetId: "tea-culture",
      badge: "Trà đạo"
    },
    {
      id: "showcase-festivals",
      titleVi: "Tiết khí & Lễ hội Cổ truyền",
      titleZh: "传统节日",
      titleEn: "Chinese Festivals",
      subtitle: "Xuân Tiết, Thanh Minh, Đoan Ngọ, Trung Thu theo 24 Tiết khí",
      description: "Nhịp điệu nông lịch kết hợp đạo hiếu gia tộc, ký ức cộng đồng và tri thức khí hậu Đông Á.",
      targetAction: "open-article",
      targetId: "spring-festival-significance",
      badge: "Lễ hội"
    }
  ],

  artifacts: [
    {
      id: "jiangshan-ruci-duojiao",
      category: "painting",
      categoryLabel: "Hội họa Lịch sử & Hiện đại",
      featuredCollections: ["painting", "collections"],
      nameVi: "Giang Sơn Như Thử Đa Kiều (江山如此多娇)",
      nameEn: "This Land So Rich in Beauty (Monumental Landscape Painting, 1959)",
      nameZh: "江山如此多娇",
      nameZhTrad: "江山如此多嬌",
      pinyin: "Jiāngshān Rúcǐ Duōjiāo",
      periodId: "modern-contemporary",
      periodLabel: "Hiện đại (1959 SCN)",
      dateEstimate: "Hoàn thành tháng 9 năm 1959",
      material: "Tranh quốc họa thủy mặc thiết sắc cỡ đại trên giấy Tuyên ghép đặc chế",
      dimensions: "Cao 650 cm × Rộng 900 cm (Bản gốc tại Đại lễ đường Nhân dân Bắc Kinh)",
      origin: "Hợp bút bởi hai đại danh họa Phó Báo Thạch (傅抱石, 1904–1965, đại diện Kim Lăng họa phái) và Quan Sơn Nguyệt (关山月, 1912–2000, đại diện Lĩnh Nam họa phái)",
      culturalSignificance:
        "Kiệt tác hội họa sơn thủy thế kỷ XX kết hợp hài hòa hai truyền thống thẩm mỹ Nam – Bắc Trung Hoa: Quan Sơn Nguyệt vẽ cành tùng xanh tiền cảnh vươn mình vững chãi theo bút pháp Lĩnh Nam, trong khi Phó Báo Thạch dùng kỹ thuật 'Phá bút sấu' (破笔皴) khoáng đạt vẽ biển mây cuồn cuộn, dãy núi tuyết Tây Bắc, Vạn Lý Trường Thành và vầng hồng mọc ở phương Đông. Góc trên bên trái đề dòng chữ Thảo thư '江山如此多娇' lấy ý từ bài từ 《Thấm Viên Xuân · Tuyết》.",
      historicalContext:
        "Tác phẩm là biểu tượng thị giác của toàn bộ không gian địa lý 'Giang Sơn' Trung Hoa — thâu tóm cả bốn mùa Xuân–Hạ–Thu–Đông và cả bốn miền Bắc–Nam–Đông–Tây trong một khung nhìn Bình viễn và Cao viễn hùng vĩ.",
      collection: "Đại lễ đường Nhân dân Bắc Kinh (人民大会堂) • Kho Lưu trữ Trực quan CCE",
      attribution: "Tư liệu hình ảnh do người dùng cung cấp tại assets/images/jiangshan-ruci-duojiao.jpg.",
      imageUrl: "assets/images/jiangshan-ruci-duojiao.jpg",
      relatedIds: ["qianli-jiangshan", "great-wall-scroll"]
    },
    {
      id: "qianli-jiangshan",
      category: "painting",
      categoryLabel: "Hội họa Lịch sử",
      featuredCollections: ["painting", "collections"],
      nameVi: "Thiên Lý Giang Sơn Đồ",
      nameEn: "A Thousand Li of Rivers and Mountains",
      nameZh: "千里江山图",
      nameZhTrad: "千里江山圖",
      pinyin: "Qiānlǐ Jiāngshān Tú",
      periodId: "song",
      periodLabel: "Bắc Tống (北宋)",
      dateEstimate: "Khoảng năm 1113 SCN (niên hiệu Chính Hòa)",
      material: "Tranh cuộn ngang vẽ màu khoáng chất thanh lục (Thanh lục sơn thủy) trên lụa",
      dimensions: "Cao 51,5 cm × Dài 1.191,5 cm",
      origin: "Kinh đô Biện Kinh (Khai Phong, Hà Nam); tác giả Vương Hy Mạnh (王希孟) hoàn thành năm 18 tuổi dưới sự chỉ điểm của Tống Huy Tông",
      culturalSignificance:
        "Đỉnh cao tuyệt đối của dòng tranh Thanh lục sơn thủy thời Bắc Tống. Bố cục trường quyển kết hợp cả ba điểm nhìn Tam viễn (Cao viễn – Thâm viễn – Bình viễn), sử dụng bột đá khổng tước (lục tùng thạch) và lam thạch giúp sắc xanh giữ độ rực rỡ qua hơn 9 thế kỷ.",
      historicalContext:
        "Ra đời trong thời kỳ Viện thể họa Bắc Tống đạt kỹ thuật miêu tả thiên nhiên tỉ mỉ nhất, đồng thời thể hiện lý tưởng cảnh giới sơn hà thái bình của triều đình trước khi xảy ra biến cố Tĩnh Khang (1127).",
      collection: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院 – Palace Museum, Beijing)",
      attribution: "Hồ sơ giám định & lưu trữ bảo tàng công khai tại The Palace Museum; tranh gốc được bảo quản nghiêm ngặt, rất hiếm khi triển lãm định kỳ.",
      imageUrl: "assets/images/museum/qianli-jiangshan.jpg",
      relatedIds: ["qingming-scroll", "great-wall-scroll"]
    },
    {
      id: "qingming-scroll",
      category: "painting",
      categoryLabel: "Hội họa Lịch sử",
      featuredCollections: ["painting", "collections"],
      nameVi: "Thanh Minh Thượng Hà Đồ",
      nameEn: "Along the River During the Qingming Festival",
      nameZh: "清明上河图",
      nameZhTrad: "清明上河圖",
      pinyin: "Qīngmíng Shànghé Tú",
      periodId: "song",
      periodLabel: "Bắc Tống (北宋)",
      dateEstimate: "Đầu thế kỷ XII SCN",
      material: "Mực thủy mặc và màu đạm thiết sắc trên lụa tơ tằm",
      dimensions: "Cao 24,8 cm × Dài 528,7 cm",
      origin: "Trương Trạch Đoan (张择端), họa sĩ Hàn lâm Đồ họa viện triều Bắc Tống; mô tả kinh đô Đông Kinh (Khai Phong) dọc sông Biện",
      culturalSignificance:
        "Họa quyển này xứng đáng là 'bách khoa toàn thư bằng hình ảnh' về đời sống đô thị, thương mại, đóng tàu thuyền và giao thông thủy-bộ thời Tống. Bức họa mô tả hàng trăm nhân vật thuộc mọi tầng lớp, cầu Hồng Kiều bằng gỗ không trụ chống giữa sông cùng các hiệu thuốc, trà quán và đoàn lạc đà chở hàng.",
      historicalContext:
        "Phản ánh cuộc Cách mạng Thương mại thời Tống: hệ thống phường – thị khép kín từ đời Đường đã tan rã, nhường chỗ cho phố buôn bán mở cửa ngày đêm dọc tuyến Đại Vận Hà.",
      collection: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院)",
      attribution: "Hồ sơ sưu tập số hóa Bảo tàng Cố Cung Bắc Kinh; lưu ý phân biệt bản gốc Bắc Tống với các bản sao đời Minh (Cừu Anh) và đời Thanh.",
      imageUrl: "assets/images/museum/qingming-scroll.jpg",
      relatedIds: ["qianli-jiangshan", "daming-hunyitu"]
    },
    {
      id: "great-wall-scroll",
      category: "painting",
      categoryLabel: "Hội họa & Kiến trúc",
      featuredCollections: ["painting", "architecture", "collections"],
      nameVi: "Vạn Lý Trường Thành Vân Hải Thủy Mặc Đồ",
      nameEn: "Ink-Wash Painting of the Great Wall in a Sea of Clouds",
      nameZh: "万里长城云海水墨图",
      nameZhTrad: "萬里長城雲海水墨圖",
      pinyin: "Wànlǐ Chángchéng Yúnhǎi Shuǐmò Tú",
      periodId: "ming",
      periodLabel: "Chủ đề Trường Thành (Chu – Tần Hán – Minh)",
      dateEstimate: "Tác phẩm thủy mặc hiện đại kế thừa bút pháp Sơn thủy truyền thống",
      material: "Mực nho và bút lông trên giấy Tuyên (dạng tệp số phục vụ học thuật)",
      dimensions: "Tỷ lệ toàn cảnh 16:9 (Minh họa chuyên đề trực quan trên nền tảng)",
      origin: "Cung cấp trực tiếp trong kho tư liệu học tập của dự án",
      culturalSignificance:
        "Minh họa song hành hai trụ cột của văn minh Trung Hoa: một là mỹ học Thủy mặc (năm sắc thái mực Mặc phân ngũ sắc cùng kỹ pháp Lưu bạch dùng biển mây gợi chiều sâu vô tận), hai là công trình phòng thủ Vạn Lý Trường Thành uốn lượn theo sống núi phía Bắc.",
      historicalContext:
        "Trường Thành không được xây dựng một lần duy nhất: các lũy đất rời rạc xuất hiện từ thời Xuân Thu – Chiến Quốc, được Tần Thủy Hoàng nối liền năm 214 TCN, kéo dài đến Tây Vực thời Hán, và hoàn thiện dạng gạch đá kiên cố có địch lâu như ngày nay chủ yếu dưới triều Minh.",
      collection: "Kho Lưu trữ Học thuật CCE (Local Collection Asset)",
      attribution: "Tư liệu hình ảnh do người dùng cung cấp tại assets/images/great-wall-ink.jpg.",
      imageUrl: "assets/images/great-wall-ink.jpg",
      relatedIds: ["taihe-dian", "qianli-jiangshan"]
    },
    {
      id: "lantingji-xu",
      category: "calligraphy",
      categoryLabel: "Thư pháp Danh tích",
      featuredCollections: ["calligraphy", "collections"],
      nameVi: "Lan Đình Tập Tự (Bản Thần Long)",
      nameEn: "Preface to the Poems Collected at the Orchid Pavilion (Shenlong Version)",
      nameZh: "兰亭集序（神龙本）",
      nameZhTrad: "蘭亭集序（神龍本）",
      pinyin: "Lántíngjí Xù (Shénlóng Běn)",
      periodId: "jin-northern-southern",
      periodLabel: "Đông Tấn (353 SCN) / Bản mô phỏng Đường",
      dateEstimate: "Sáng tác năm 353 SCN; bản Thần Long mô phỏng thế kỷ VII SCN (triều Đường)",
      material: "Mực trên giấy ma theo kỹ thuật 'Song câu khoách điền' (kẻ viền kép tô mực)",
      dimensions: "24,5 cm × 69,9 cm",
      origin: "Nguyên tác của 'Thư thánh' Vương Hi Chi (王羲之) tại Cối Kê (Thiệu Hưng, Chiết Giang); bản Phùng Thừa Tố đời Đường phụng chỉ Đường Thái Tông mô phỏng",
      culturalSignificance:
        "Được tôn xưng là 'Thiên hạ đệ nhất Hành thư'. Gồm 324 chữ Hán, riêng 20 chữ 'Chi' (之) đều có biến hóa bút thế khác nhau không lặp lại. Nội dung văn bản kết hợp cảm thức Huyền học Ngụy-Tấn về sự ngắn ngủi của đời người trước vũ trụ vô cùng.",
      historicalContext:
        "Theo sử liệu truyền thế, Đường Thái Tông cực kỳ yêu thích bản gốc và cho chôn theo vào Chiêu Lăng; bởi vậy các bản truyền lại hôm nay đều là bản mô phỏng hoặc khắc đá thời Đường–Tống, trong đó bản Thần Long được đánh giá sát thần thái gốc nhất.",
      collection: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院)",
      attribution: "Hồ sơ thư pháp Bảo tàng Cố Cung Bắc Kinh; ghi chú rõ tình trạng truyền bản mô phỏng đời Đường.",
      imageUrl: "assets/images/museum/lantingji-xu.jpg",
      relatedIds: ["hanshi-tie", "yongle-dadian"]
    },
    {
      id: "hanshi-tie",
      category: "calligraphy",
      categoryLabel: "Thư pháp Danh tích",
      featuredCollections: ["calligraphy"],
      nameVi: "Hàn Thực Thiếp",
      nameEn: "The Cold Food Observance Scroll",
      nameZh: "寒食帖",
      nameZhTrad: "寒食帖",
      pinyin: "Hánshí Tiè",
      periodId: "song",
      periodLabel: "Bắc Tống (北宋)",
      dateEstimate: "Năm 1082 SCN (niên hiệu Nguyên Phong thứ 5)",
      material: "Thủ bản Hành thư bằng mực trên giấy",
      dimensions: "34,2 cm × 19,9 cm (phần thủ bản thơ của Tô Thức)",
      origin: "Tô Thức (Tô Đông Pha 苏轼) viết vào năm thứ ba bị biếm trích tại Hoàng Châu (Hồ Bắc)",
      culturalSignificance:
        "Được xếp vào 'Thiên hạ đệ tam Hành thư'. Đặc điểm nổi bật là bút pháp 'Thượng ý' (chú trọng biểu đạt tâm trạng nội tâm thay vì câu nệ phép tắc khải lệ): nét chữ từ trầm lắng đầu bài thơ dần dồn dập, phóng khoáng và mạnh mẽ về cuối theo mạch cảm xúc cô đơn trong tiết Hàn Thực mưa dầm.",
      historicalContext:
        "Minh chứng tiêu biểu cho chuyển dịch văn hóa thời Tống: tầng lớp sĩ đại phu đa tài hợp nhất Thơ – Thư – Họa thành phương tiện tu dưỡng tâm tính và lưu giữ lịch sử tinh thần cá nhân.",
      collection: "Bảo tàng Cố Cung Đài Bắc (国立故宫博物院 – National Palace Museum)",
      attribution: "Tư liệu học thuật về 'Tống Tứ Gia' thư pháp (Tô – Hoàng – Mễ – Thái).",
      imageUrl: "assets/images/museum/hanshi-tie.jpg",
      relatedIds: ["lantingji-xu", "qianli-jiangshan"]
    },
    {
      id: "david-vases",
      category: "ceramics",
      categoryLabel: "Gốm sứ Cổ truyền",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Cặp Bình Thanh Hoa Vân Long (The David Vases)",
      nameEn: "The David Vases (Blue-and-white Altar Vases)",
      nameZh: "元至正十一年青花云龙纹象耳瓶",
      nameZhTrad: "元至正十一年青花雲龍紋象耳瓶",
      pinyin: "Yuán Zhìzhèng Shíyī Nián Qīnghuā Yúnlóngwén Xiàng'ěrpíng",
      periodId: "yuan",
      periodLabel: "Triều Nguyên (元朝)",
      dateEstimate: "Năm 1351 SCN (có minh văn khắc năm Chí Chính thứ 11 – 至正十一年)",
      material: "Sứ trắng vẽ lam coban (Tô Ma Ly Thanh nhập qua Trung Á) dưới men trắng trong, Cảnh Đức Trấn",
      dimensions: "Cao 63,8 cm (Bình PDF B613 / B614)",
      origin: "Lò Cảnh Đức Trấn (Giang Tây), cúng tiến cho một ngôi đạo quán tại vùng Ngọc Sơn",
      culturalSignificance:
        "Một trong những hiện vật gốm sứ quan trọng nhất thế giới để định niên đại sứ Thanh Hoa (gốm hoa lam) thời Nguyên. Chất liệu coban (cobalt) được vận chuyển qua mạng lưới thương mại Á–Âu thời Mông–Nguyên đã mở ra dòng sứ Thanh Hoa làm thay đổi thị hiếu mỹ thuật từ Ba Tư, Đông Nam Á tới châu Âu.",
      historicalContext:
        "Có mối liên hệ trực tiếp với lịch sử giao thương gốm sứ vùng biển Đông Nam Á và Việt Nam (hệ thống gốm hoa lam Chu Đậu thế kỷ XV–XVI chia sẻ kỹ thuật vẽ coban dưới men từ truyền thống Đông Á).",
      collection: "Bảo tàng Anh (British Museum – Percival David Collection, PDF B613 & B614)",
      attribution: "Hồ sơ công khai British Museum Collection; niên đại xác thực nhờ dòng lạc khoản trực tiếp trên cổ bình.",
      imageUrl: "assets/images/museum/david-vases.jpg",
      relatedIds: ["chenghua-cup", "qingming-scroll"]
    },
    {
      id: "chenghua-cup",
      category: "ceramics",
      categoryLabel: "Gốm sứ Cổ truyền",
      featuredCollections: ["ceramics"],
      nameVi: "Chén Kê Cang Đấu Thái Thành Hóa",
      nameEn: "Chenghua Doucai 'Chicken Cup'",
      nameZh: "明成化斗彩鸡缸杯",
      nameZhTrad: "明成化鬥彩雞缸杯",
      pinyin: "Míng Chénghuà Dòucǎi Jīgāngbēi",
      periodId: "ming",
      periodLabel: "Triều Minh (明朝)",
      dateEstimate: "Niên hiệu Thành Hóa (1465–1487 SCN)",
      material: "Sứ ngự dụng Cảnh Đức Trấn kỹ thuật 'Đấu thái' (vẽ viền lam dưới men kết hợp men nhiều màu trên men)",
      dimensions: "Cao khoảng 3,4 cm × Đường kính miệng khoảng 8,3 cm",
      origin: "Ngự diêu xưởng Cảnh Đức Trấn (景德镇御窑厂), phục vụ hoàng cung Minh Hiến Tông",
      culturalSignificance:
        "Tiêu biểu cho mỹ học tinh tế cỡ nhỏ thời Minh trung kỳ: kỹ thuật nung hai lần tạo nên sự hòa quyện giữa nét vẽ thanh tú bằng lam coban dưới men và gam màu rực rỡ (đỏ, vàng, lục) phủ trên men vẽ hình gia đình gà ấp ủ bên khóm mẫu đơn và hoa lan.",
      historicalContext:
        "Đời sau (nhất là dưới thời Vạn Lịch và Khang Hy – Càn Long) cực kỳ sùng bái gốm Đấu thái Thành Hóa, xem đây là thước đo kỹ nghệ tinh xảo bậc nhất của lò Ngự.",
      collection: "Bảo tàng Cố Cung Bắc Kinh & The Metropolitan Museum of Art",
      attribution: "Dữ liệu gốm sứ Ngự diêu Cảnh Đức Trấn (Bắc Kinh 故宫博物院 / The Met Open Access).",
      imageUrl: "assets/images/museum/chenghua-cup.jpg",
      relatedIds: ["david-vases", "taihe-dian"]
    },
    {
      id: "yongle-dadian",
      category: "ancient-books",
      categoryLabel: "Cổ tịch Thiện bản",
      featuredCollections: ["ancient-books", "collections"],
      nameVi: "Vĩnh Lạc Đại Điển (Bản Gia Tĩnh)",
      nameEn: "Yongle Encyclopedia (Jiajing Copy)",
      nameZh: "永乐大典（嘉靖副本）",
      nameZhTrad: "永樂大典（嘉靖副本）",
      pinyin: "Yǒnglè Dàdiǎn (Jiājìng Fùběn)",
      periodId: "ming",
      periodLabel: "Triều Minh (明朝)",
      dateEstimate: "Biên soạn 1403–1408 SCN; bản sao Gia Tĩnh chép 1562–1567 SCN",
      material: "Giấy Tuyên cỡ đại, đóng quyển bao bối trang (bìa lụa vàng), mực đen viết khải thư kết hợp chu sa kẻ khung",
      dimensions: "Khoảng 50,3 cm × 30,0 cm mỗi trang gập đôi",
      origin: "Triều đình Minh Thành Tổ tập hợp hơn 2.100 học giả do Giải Tấn, Diêu Quảng Hiếu chủ trì biên soạn",
      culturalSignificance:
        "Loại thư (bách khoa toàn thư cổ điển) quy mô lớn nhất thời Trung đại gồm 22.877 quyển gốc (11.095 tập). Do phương pháp sao chép nguyên văn cổ tịch theo vận vần Hồng Vũ Chính Vận, nhiều sách cổ đã thất truyền từ thời Đường–Tống được bảo tồn nguyên vẹn bên trong bộ sách này.",
      historicalContext:
        "Sau các biến loạn cuối Minh và năm 1900 tại Bắc Kinh, phần lớn bộ sách bị thất lạc hoặc thiêu hủy; hiện chỉ còn khoảng hơn 400 tập (chưa tới 4% tổng số) phân tán tại Thư viện Quốc gia Trung Quốc và các kho lưu trữ quốc tế.",
      collection: "Thư viện Quốc gia Trung Quốc (中国国家图书馆) & Chester Beatty Library",
      attribution: "Dữ liệu thư mục học Thư viện Quốc gia Trung Quốc & Dự án Di sản Tư liệu UNESCO.",
      imageUrl: "assets/images/museum/yongle-dadian.jpg",
      relatedIds: ["daming-hunyitu", "lantingji-xu"]
    },
    {
      id: "daming-hunyitu",
      category: "maps",
      categoryLabel: "Bản đồ Lịch sử",
      featuredCollections: ["maps", "collections"],
      nameVi: "Đại Minh Hỗn Nhất Đồ",
      nameEn: "Da Ming Hunyi Tu (Amalgamated Map of the Great Ming Empire)",
      nameZh: "大明混一图",
      nameZhTrad: "大明混一圖",
      pinyin: "Dà Míng Hùnyī Tú",
      periodId: "ming",
      periodLabel: "Đầu Triều Minh (明初)",
      dateEstimate: "Khoảng năm 1389 SCN (niên hiệu Hồng Vũ thứ 22)",
      material: "Tranh màu vẽ trên lụa khổ đại; phần chú giải ban đầu bằng Hán văn, về sau thời Thanh có dán đè nhãn chữ Mãn",
      dimensions: "386 cm × 456 cm",
      origin: "Vẽ tại kinh đô Nam Kinh đầu triều Minh (phỏng đại lãnh thổ đế chế và thế giới Á–Âu–Phi theo địa lý thế kỷ XIV)",
      culturalSignificance:
        "Một trong những bản đồ thế giới cổ nhất còn tồn tại ở Đông Á: ngoài phần lãnh thổ nhà Minh phóng đại ở trung tâm, tác phẩm còn phác họa bán đảo Ấn Độ, bán đảo Ả Rập, châu Âu và đường bờ biển châu Phi (bao gồm vùng hồ nước lớn ở miền nam châu Phi) trước cả hải trình Trịnh Hòa.",
      historicalContext:
        "Lưu ý sử học: Bản đồ cổ đại sử dụng phép tỷ lệ chính trị – văn hóa (phóng to vùng trung tâm và thu nhỏ vùng ngoại vi) nên không đồng nhất với phép chiếu trắc địa hiện đại hay ranh giới hành chính ngày nay.",
      collection: "Trung tâm Lưu trữ Lịch sử Số 1 Trung Quốc (中国第一历史档案馆, Bắc Kinh)",
      attribution: "Tư liệu bản đồ học lịch sử Trung Quốc (ghi rõ niên đại Hồng Vũ 1389 và nhãn chữ Mãn thời Thanh dán bổ sung).",
      imageUrl: "assets/images/museum/daming-hunyitu.jpg",
      relatedIds: ["yongle-dadian", "qingming-scroll"]
    },
    {
      id: "taihe-dian",
      category: "architecture",
      categoryLabel: "Kiến trúc Cổ điển",
      featuredCollections: ["architecture", "collections"],
      nameVi: "Thái Hòa Điện – Tử Cấm Thành",
      nameEn: "Hall of Supreme Harmony (Taihe Dian), Forbidden City",
      nameZh: "紫禁城太和殿",
      nameZhTrad: "紫禁城太和殿",
      pinyin: "Zǐjìnchéng Tàihédiàn",
      periodId: "ming",
      periodLabel: "Minh – Thanh (明清)",
      dateEstimate: "Khởi dựng 1420 SCN (thời Vĩnh Lạc); kiến trúc gỗ hiện tồn trùng tu năm 1695 SCN (thời Khang Hy)",
      material: "Khung cột gỗ Nam Mộc, kết cấu mộng Đấu củng (斗拱), nền đá Hán bạch ngọc tam tầng, ngói lưu ly hoàng gia",
      dimensions: "Dài 63,96 m × Rộng 37,20 m; tổng chiều cao 35,05 m (kể cả bệ Tu Di)",
      origin: "Trục Thần đạo trung tâm Kinh thành Bắc Kinh",
      culturalSignificance:
        "Công trình kiến trúc bằng gỗ quy mô lớn bậc nhất còn tồn tại của Trung Quốc cổ đại. Từng chi tiết từ số gian (11 gian rộng), 10 linh thú trên góc mái (con số duy nhất có Hành thập) đến họa tiết rồng cuộn trên trần đều mã hóa quy phạm lễ nghi 'Thiên tử – Trung hòa' của kiến trúc Nho gia.",
      historicalContext:
        "Tên gọi đổi qua các thời kỳ: Phụng Thiên Điện (đời Vĩnh Lạc Minh), Hoàng Cực Điện (thời Gia Tĩnh), và Thái Hòa Điện (thời Thuận Trị triều Thanh, 1645). Hỏa hoạn nhiều lần khiến kết cấu gỗ hiện tại có niên đại chủ yếu từ đợt tái thiết năm 1695.",
      collection: "Bảo tàng Cố Cung Bắc Kinh (Di sản Văn hóa Thế giới UNESCO)",
      attribution: "Hồ sơ kiến trúc cổ Bảo tàng Cố Cung & UNESCO World Heritage Centre.",
      imageUrl: "assets/images/museum/taihe-dian.jpg",
      relatedIds: ["forbidden-city-axis-gate", "great-wall-scroll", "daming-hunyitu"]
    },
    {
      id: "forbidden-city-axis-gate",
      category: "architecture",
      categoryLabel: "Kiến trúc Cổ điển",
      featuredCollections: ["architecture", "collections"],
      nameVi: "Trục Thần Đạo Tử Cấm Thành & Cổng Son 81 Đinh Đồng",
      nameEn: "Forbidden City Central Axis & 81-Stud Crimson Gate Vista",
      nameZh: "紫禁城中轴线红门太和殿全景",
      nameZhTrad: "紫禁城中軸線紅門太和殿全景",
      pinyin: "Zǐjìnchéng Zhōngzhóuxiàn",
      periodId: "ming",
      periodLabel: "Minh – Thanh (明清)",
      dateEstimate: "1406–1420 SCN (Minh Vĩnh Lạc)",
      material: "Gỗ nam mộc sơn son, đinh đồng mạ vàng bố trí Cửu Hoành Cửu Tung (9×9 = 81 đinh), nền đá hoa cương & Hán Bạch Ngọc",
      dimensions: "Trục đối xứng Nam–Bắc dài 961 m × Rộng 753 m (Toàn khu 724.250 m²)",
      origin: "Cổng Trung tâm trục Thần Đạo nhìn thẳng vào Quảng trường Thái Hòa Điện, Bắc Kinh",
      culturalSignificance:
        "Mỗi cánh cửa hoàng gia tại các cổng trục chính của Tử Cấm Thành đóng 81 chiếc đinh đồng mạ vàng xếp thành 9 hàng ngang × 9 hàng dọc ('Cửu Hoành Cửu Tung', số Cửu Ngũ cực dương), đóng vai trò vừa khóa mộng kỹ thuật vừa biểu thị đẳng cấp thiên tử khi nhìn xuyên dọc đường ngự đạo hướng về Thái Hòa Điện.",
      historicalContext:
        "Toàn bộ không gian từ Ngọ Môn tiến qua cầu Kim Thủy tới Thái Hòa Môn và Thái Hòa Điện được tính toán theo tỷ lệ thu hút thị giác một điểm tụ, khiến du khách vừa bước qua ngưỡng cổng son đã thu trọn toàn cảnh tam đài Hán Bạch Ngọc vào tầm mắt.",
      collection: "Bảo tàng Cố Cung Bắc Kinh (Di sản Văn hóa Thế giới UNESCO)",
      attribution: "Tư liệu ảnh kiến trúc Tử Cấm Thành bổ sung vào Bảo tàng Số CCE.",
      imageUrl: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
      relatedIds: ["taihe-dian", "great-wall-scroll"]
    },
    {
      id: "houmuwu-ding",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Hậu Mẫu Mậu Đỉnh (Tư Mẫu Mậu Đỉnh)",
      nameEn: "Houmuwu Ding Bronze Vessel",
      nameZh: "后母戊鼎（司母戊鼎）",
      nameZhTrad: "後母戊鼎（司母戊鼎）",
      pinyin: "Hòumǔwù Dǐng",
      periodId: "xia-shang-zhou",
      periodLabel: "Hậu kỳ Triều Thương (商代晚期)",
      dateEstimate: "Khoảng thế kỷ XIII – XI TCN (Ân Khư, An Dương)",
      material: "Đồng thanh (hợp kim đồng – thiếc – chì), đúc bằng kỹ thuật khuôn đất nung ghép nhiều mảnh",
      dimensions: "Cao 133 cm × Miệng dài 110 cm × Rộng 79 cm; Nặng 832,84 kg",
      origin: "Khai quật năm 1939 tại thôn Vũ Quan, An Dương, tỉnh Hà Nam (kinh đô Ân Khư cuối nhà Thương)",
      culturalSignificance:
        "Lễ khí bằng đồng thanh nặng nhất từng được phát hiện của thời đại Đồ đồng cổ đại thế giới còn nguyên vẹn phần thân chính. Mặt ngoài đúc hoa văn Thao thiết (饕餮纹) và Quỳ long (夔龙纹); bên trong vách khắc 3 chữ Giáp cốt 'Hậu Mẫu Mậu' (hoặc 'Tư Mẫu Mậu') chỉ vương hậu Phụ Tinh của Thương vương Vũ Đinh.",
      historicalContext:
        "Để đúc khối đồng 832 kg trong một mẻ luyện kim cần hàng trăm thợ thủ công, nhiều lò nấu đồng phối hợp đồng thời — bằng chứng khảo cổ học trực tiếp về trình độ tổ chức lao động tập trung và phân công chuyên môn hóa cao của nhà nước Thương.",
      collection: "Bảo tàng Quốc gia Trung Quốc (中国国家博物馆 – National Museum of China, Bắc Kinh)",
      attribution: "Hồ sơ trưng bày thường trực Bảo tàng Quốc gia Trung Quốc (bộ sưu tập Cổ đại Trung Quốc).",
      imageUrl: "assets/images/museum/houmuwu-ding.jpg",
      relatedIds: ["liangzhu-yucong", "taihe-dian"]
    },
    {
      id: "liangzhu-yucong",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts"],
      nameVi: "Ngọc Tông Vương Văn hóa Lương Chử",
      nameEn: "Liangzhu Culture 'King of Jade Cong'",
      nameZh: "良渚文化玉琮王",
      nameZhTrad: "良渚文化玉琮王",
      pinyin: "Liángzhǔ Wénhuà Yùcóng Wáng",
      periodId: "prehistoric",
      periodLabel: "Tiền sử – Văn hóa Lương Chử (良渚文化)",
      dateEstimate: "Khoảng 3300–2300 TCN (khai quật tại gò Phản Sơn, mộ M12 năm 1986)",
      material: "Ngọc Thấu thiểm thạch (Nephrite Jade) chạm khắc vi mô nổi và chìm",
      dimensions: "Cao 8,8 cm × Đường kính ngoài 17,1–17,6 cm; Nặng 6,5 kg",
      origin: "Di chỉ Thành cổ Lương Chử (Hàng Châu, Chiết Giang)",
      culturalSignificance:
        "Hình khối 'ngoài vuông trong tròn' là tiền thân biểu tượng vũ trụ luận 'Trời tròn đất vuông' (Thiên viên địa phương) về sau. Trên bốn mặt góc khắc 8 đồ án 'Thần nhân thú diện văn' (vị thần đội mũ lông vũ cưỡi mãnh thú) bằng kỹ thuật rạch sợi nhỏ tới mức hàng nét/mm khiến giới khảo cổ kinh ngạc khi ngọc cứng hơn sắt đồng.",
      historicalContext:
        "Khẳng định sự tồn tại của nền văn minh đô thị – thủy lợi phát triển sớm bên vùng hạ lưu Trường Giang hơn 5.000 năm trước, song song nhưng khác biệt về vật liệu lễ nghi với vùng Trung Nguyên.",
      collection: "Bảo tàng Tỉnh Chiết Giang (浙江省博物馆, Hàng Châu)",
      attribution: "Hồ sơ khai quật Phản Sơn năm 1986 & Di sản Thế giới UNESCO Di chỉ Thành cổ Lương Chử.",
      imageUrl: "assets/images/museum/liangzhu-yucong.jpg",
      relatedIds: ["houmuwu-ding", "qianli-jiangshan"]
    },
    {
      id: "zheng-he-navigation-chart",
      category: "maps",
      categoryLabel: "Bản đồ Lịch sử",
      featuredCollections: ["maps", "collections"],
      nameVi: "Hải đồ Trịnh Hòa (Vũ Bị Chí)",
      nameEn: "Zheng He Navigation Chart (Mao Kun Map in Wubei Zhi)",
      nameZh: "《武备志·郑和航海图》",
      nameZhTrad: "《武備志·鄭和航海圖》",
      pinyin: "Wǔbèi Zhì · Zhèng Hé Hánghǎi Tú",
      periodId: "ming",
      periodLabel: "Triều Minh (明朝)",
      dateEstimate: "Hải hành 1405–1433 SCN; khắc in trong 《Vũ Bị Chí》 năm 1621",
      material: "Trường quyển mộc bản khắc in đường biển trải dài 20 trang gập",
      dimensions: "Cao 20,5 cm × Dài tổng thể khoảng 560 cm",
      origin: "Kế thừa trực tiếp từ tư liệu hàng hải của hạm đội Trịnh Hòa, do Mao Nguyên Nghi biên tập tại Nam Kinh",
      culturalSignificance:
        "Bản đồ hàng hải dài và chi tiết bậc nhất châu Á thời trung đại, ghi lại hơn 500 địa danh ven biển từ Nam Kinh qua Biển Đông (Chăm Pa, Đại Việt), eo Malacca, Ấn Độ Dương tới bờ Đông Phi (Malindi), kèm 4 'Quá dương Khiên tinh đồ' đo góc sao Bắc Đẩu xác định vĩ độ tàu biển.",
      historicalContext:
        "Lưu ý bản đồ học: Vẽ theo tuyến hành trình liên tục (strip map) chứ không dùng phép chiếu Mercator hiện đại, kết hợp la bàn phân kim 24 sơn hướng ('Canh') và đo sâu dò đáy bằng dây chì.",
      collection: "Thư viện Quốc hội Hoa Kỳ & Bản khắc cổ Thư viện Quốc gia Trung Quốc",
      attribution: "Tư liệu bản đồ học 《武备志》 (1621) phản ánh tuyến hàng hải hạm đội Trịnh Hòa.",
      imageUrl: "assets/images/museum/zheng-he-chart.jpg",
      relatedIds: ["daming-hunyitu", "chu-dau-blue-white-ceramic"]
    },
    {
      id: "acupuncture-bronze-figure",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Tượng Đồng Châm Cứu Thiên Thánh Bắc Tống",
      nameEn: "Northern Song Tiansheng Bronze Acupuncture Statue",
      nameZh: "宋天圣针灸铜人模型",
      nameZhTrad: "宋天聖針灸銅人模型",
      pinyin: "Sòng Tiānshèng Zhēnjiǔ Tóngrén Móxíng",
      periodId: "song",
      periodLabel: "Bắc Tống (北宋)",
      dateEstimate: "Chế tác năm 1027 SCN (niên hiệu Thiên Thánh thứ 5)",
      material: "Đồng thanh đúc rỗng, khắc 354 tên huyệt vị & 12 đường kinh lạc chính",
      dimensions: "Cao tương đương người trưởng thành (~172 cm ở bản chế tác gốc)",
      origin: "Vương Duy Nhất (王惟一) phụng chỉ Tống Nhân Tông thiết kế phục vụ giảng dạy và sát hạch y quan Thái Y Viện",
      culturalSignificance:
        "Thiết bị mô phỏng y học cổ đại xuất sắc bậc nhất thế giới: bên ngoài khắc tên huyệt và đục lỗ xuyên tâm, bên trong lắp nội tạng gỗ; khi thi cử châm cứu, tượng được phủ lớp sáp ong và đổ đầy nước — thí sinh châm đúng huyệt nước sẽ phun ra lập tức.",
      historicalContext:
        "Đánh dấu bước chuẩn hóa hệ thống huyệt vị Đông y qua ấn bản 《Đồng Nhân Du Huyệt Châm Cứu Đồ Kinh》 và có tầm ảnh hưởng sâu rộng tới trường phái châm cứu tại Đại Việt (Thái Y Viện thời Trần–Lê) và Nhật Bản.",
      collection: "Bảo tàng Quốc gia Trung Quốc (trưng bày phiên bản phục chế đời Minh Chính Thống 1443)",
      attribution: "Hồ sơ lịch sử y học Bảo tàng Quốc gia Trung Quốc & Bộ 《Đồng Nhân Du Huyệt Châm Cứu Đồ Kinh》 (1026).",
      imageUrl: "assets/images/museum/acupuncture-bronze.jpg",
      relatedIds: ["houmuwu-ding", "han-shipan-astrolabe"]
    },
    {
      id: "han-shipan-astrolabe",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Thức Bàn & Gương Đồng Quy Củ Vũ Trụ Tây Hán",
      nameEn: "Western Han Cosmic Board (Shipan) & TLV Cosmological Mirror",
      nameZh: "西汉天文式盘与博局规矩镜",
      nameZhTrad: "西漢天文式盤與博局規矩鏡",
      pinyin: "Xī-Hàn Tiānwén Shìpán yǔ Guījǔjìng",
      periodId: "qin-han",
      periodLabel: "Tây Hán (西汉)",
      dateEstimate: "Thế kỷ II – I TCN (mộ Nhữ Âm Hầu 165 TCN & sưu tập gương đồng Hán)",
      material: "Đồng thanh đúc nổi và gỗ sơn mài khắc Thiên bàn tròn xoay trên Địa bàn vuông",
      dimensions: "Địa bàn vuông 13,5 cm × 13,5 cm; Đường kính Thiên bàn tròn 9,5 cm",
      origin: "Khai quật tại Song Cổ Đôi (Phụ Dương, An Huy) & Bảo tàng Anh",
      culturalSignificance:
        "Bằng chứng khảo cổ sớm bậc nhất về máy tính thiên văn – lịch pháp cổ đại: Thiên bàn khắc 7 ngôi sao Bắc Đẩu ở tâm và 28 Tú (Nhị thập bát tú); Địa bàn vuông khắc Thiên Can, Địa Chi, Tứ Tượng và Bát Quái ('Thiên viên địa phương'). Là tiền thân trực tiếp của Tam Thức (Thái Ất, Lục Nhâm, Kỳ Môn) và La bàn Phong thủy.",
      historicalContext:
        "Cùng khai quật trong mộ này còn có thước đo bóng nắng 'Khuê biểu' và văn bản sớm về Chu Dịch, chứng minh mối liên hệ chặt chẽ giữa quan trắc thiên văn Hán triều với hệ thống thuật số cổ.",
      collection: "Bảo tàng Tỉnh An Huy & British Museum Collection",
      attribution: "Báo cáo khai quật khảo cổ mộ Song Cổ Đôi M1 (Phụ Dương, 1977) & British Museum Open Access.",
      imageUrl: "assets/images/museum/han-shipan.jpg",
      relatedIds: ["liangzhu-yucong", "acupuncture-bronze-figure"]
    },
    {
      id: "chu-dau-blue-white-ceramic",
      category: "ceramics",
      categoryLabel: "Gốm sứ Cổ truyền",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Gốm Hoa Lam Chu Đậu & Đối chiếu Sứ Thanh Hoa Biển Đông",
      nameEn: "15th-Century East Asian Maritime Blue-and-White Porcelain (Chu Dau & Jingdezhen Comparative Vessel)",
      nameZh: "十五世纪青花瓷海上贸易（景德镇—朱豆对照明器）",
      nameZhTrad: "十五世紀青花瓷海上貿易（景德鎮—朱豆對照明器）",
      pinyin: "Shíwǔ Shìjì Qīnghuácí Hǎishàng Màoyì",
      periodId: "ming",
      periodLabel: "Thế kỷ XV (Minh – Lê Sơ)",
      dateEstimate: "Khoảng 1450–1500 SCN (tương đương bình Chu Đậu ký năm Thái Hòa 1450 tại Bảo tàng Topkapi)",
      material: "Gốm xương trắng vẽ oxit coban xanh dưới men tro trấu / men trong nung nhiệt cao",
      dimensions: "Cao 54 cm (tham chiếu chân đèn & bình hoa lam xuất khẩu thế kỷ XV)",
      origin: "Đối sánh giao thương giữa lò Cảnh Đức Trấn (Giang Tây) và trung tâm gốm Chu Đậu (Hải Dương, Đại Việt) trên hải lộ Biển Đông",
      culturalSignificance:
        "Minh họa cuộc đối thoại kỹ thuật & thương mại hiếm có: khi triều Minh thi hành 'Hải cấm' hạn chế xuất khẩu sứ tư nhân giữa thế kỷ XV, gốm hoa lam Chu Đậu của Đại Việt đã vươn lên chiếm lĩnh thị trường xuất khẩu từ xác tàu đắm Cù Lao Chàm đến Đông Nam Á, Nhật Bản và Hoàng cung Ottoman (Topkapi Saray, Istanbul).",
      historicalContext:
        "Đồ án vẽ hoa mẫu đơn dây và chim chóc trên bình Chu Đậu vừa tiếp thu kỹ pháp vẽ bút lông bằng sắc lam coban từ truyền thống gốm Đông Á, vừa thổi hồn thiên nhiên sông nước nhiệt đới bản địa Việt Nam.",
      collection: "Bảo tàng Lịch sử Quốc gia Việt Nam (Hà Nội) & Bảo tàng Topkapi (Istanbul)",
      attribution: "Hồ sơ khảo cổ học xác tàu đắm Cù Lao Chàm (1997–1999) và Bảo tàng Lịch sử Quốc gia Việt Nam.",
      imageUrl: "assets/images/museum/chu-dau-ceramic.jpg",
      relatedIds: ["david-vases", "zheng-he-navigation-chart"]
    },
    {
      id: "sanxingdui-bronze-mask",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Mặt nạ Đồng Mắt lồi Tam Tinh Đôi (Cổ Thục)",
      nameEn: "Sanxingdui Bronze Mask with Protruding Eyes (Ancient Shu Civilization)",
      nameZh: "三星堆青铜纵目面具",
      nameZhTrad: "三星堆青銅縱目面具",
      pinyin: "Sānxīngduī Qīngtóng Zòngmù Miànjù",
      periodId: "xia-shang-zhou",
      periodLabel: "Cổ Thục – Tương đương Hậu kỳ Thương (商代晚期)",
      dateEstimate: "Khoảng thế kỷ XIII – XII TCN (khai quật tại hố tế lễ K2 năm 1986)",
      material: "Đồng thanh đúc ghép khuôn (hợp kim đồng – thiếc – chì)",
      dimensions: "Cao 65 cm × Rộng 138 cm; đôi đồng tử mắt lồi dài 16 cm",
      origin: "Di chỉ Tam Tinh Đôi (Quảng Hán, tỉnh Tứ Xuyên – Văn minh Cổ Thục lưu vực thượng lưu Trường Giang)",
      culturalSignificance:
        "Phát hiện khảo cổ làm thay đổi hoàn toàn nhận thức về nguồn gốc văn minh Trung Hoa: chứng minh văn minh Trung Hoa không phải 'đơn nguyên' chỉ có lưu vực Hoàng Hà mà là 'đa nguyên nhất thể' (多元一体). Hình tượng đôi mắt lồi trụ dài và đôi tai rộng gắn với truyền thuyết vua Khai Minh nhà Thục 'Thần nhân dọc mắt' (Тùng mục) trong 《Hoa Dương Quốc Chí》.",
      historicalContext:
        "Cùng khai quật tại Tam Tinh Đôi còn có Cây thần bằng đồng cao 3,96m, mặt nạ vàng và hàng trăm ngà voi, vỏ ốc biển Ấn Độ Dương — minh chứng mạng lưới trao đổi thương mại sớm từ Tứ Xuyên tới Nam Á.",
      collection: "Bảo tàng Tam Tinh Đôi (三星堆博物馆, Quảng Hán, Tứ Xuyên)",
      attribution: "Hồ sơ khảo cổ Viện Khảo cổ học Tứ Xuyên & Bảo tàng Tam Tinh Đôi.",
      imageUrl: "assets/images/museum/sanxingdui-mask.jpg",
      relatedIds: ["houmuwu-ding", "liangzhu-yucong"]
    },
    {
      id: "zeng-hou-yi-bianzhong",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Bộ Chuông Đồng Biên Chung Tăng Hầu Ất",
      nameEn: "Bronze Chime Bells (Bianzhong) of Marquis Yi of Zeng",
      nameZh: "曾侯乙编钟",
      nameZhTrad: "曾侯乙編鐘",
      pinyin: "Zēnghóu Yǐ Biānzhōng",
      periodId: "spring-autumn-warring",
      periodLabel: "Đầu Thời Chiến Quốc (战国早期)",
      dateEstimate: "Năm 433 TCN (khai quật năm 1978 tại Tùy Châu, tỉnh Hồ Bắc)",
      material: "65 quả chuông đồng thanh treo trên giá gỗ sơn mài 3 tầng đúc tượng đồng nâng đỡ",
      dimensions: "Khung giá dài 7,48 m × Cao 2,65 m; Tổng trọng lượng đồng hơn 2.567 kg",
      origin: "Mộ Tăng Hầu Ất tại Lôi Cổ Đồn (Tùy Châu, Hồ Bắc — vùng văn hóa Sở)",
      culturalSignificance:
        "Kỳ quan âm học và luyện kim cổ đại thế giới: mỗi quả chuông có tiết diện hình bầu dục dẹt ('Hợp ngõa hình') nên khi gõ vào chính giữa (Chính cổ âm) và gõ vào cạnh bên (Trắc cổ âm) sẽ phát ra 2 cao độ cách nhau đúng một quãng ba trưởng hoặc thứ, cho phép diễn tấu trọn vẹn thang âm 12 bán cung (Thập nhị luật) trên 5 quãng tám.",
      historicalContext:
        "Trên thân chuông khắc 3.755 chữ Kim văn mạ vàng ghi chép hệ thống lý thuyết âm nhạc các nước Chu, Sở, Tề, Tấn — chứng cứ khảo cổ vô giá về văn hóa 'Lễ Nhạc' thời Đông Chu.",
      collection: "Bảo tàng Tỉnh Hồ Bắc (湖北省博物馆, Vũ Hán)",
      attribution: "Báo cáo khai quật Mộ Tăng Hầu Ất (1978) & Bảo tàng Tỉnh Hồ Bắc.",
      imageUrl: "assets/images/museum/zeng-hou-yi-bells.jpg",
      relatedIds: ["houmuwu-ding", "sanxingdui-bronze-mask"]
    },
    {
      id: "tiangong-kaiwu-woodblock",
      category: "ancient-books",
      categoryLabel: "Cổ tịch Thiện bản",
      featuredCollections: ["ancient-books", "collections"],
      nameVi: "Mộc bản Minh họa 《Thiên Công Khai Vật》 (1637)",
      nameEn: "Tiangong Kaiwu (1637 Ming Woodblock Technical Encyclopedia by Song Yingxing)",
      nameZh: "《天工开物》明崇祯涂本木刻插图",
      nameZhTrad: "《天工開物》明崇禎塗本木刻插圖",
      pinyin: "Tiāngōng Kāiwù Mùkè Chātú",
      periodId: "ming",
      periodLabel: "Cuối Triều Minh (明末)",
      dateEstimate: "Năm Sùng Trinh thứ 10 (1637 SCN)",
      material: "Sách in khắc ván gỗ (Điêu bản ấn loát) trên giấy trúc Giang Tây",
      dimensions: "18 quyển chia 3 tập (Thượng – Trung – Hạ) kèm 123 tranh khắc gỗ kỹ thuật",
      origin: "Tống Ứng Tinh (宋应星, 1587–1666) biên soạn khi làm Giáo dụ tại Phân Nghi (Giang Tây)",
      culturalSignificance:
        "Được học giả Joseph Needham tôn vinh là 'Bách khoa toàn thư công nghệ thế kỷ XVII của Trung Quốc'. Các tranh khắc gỗ mô tả chính xác tỷ lệ máy móc và thao tác lao động thực tế: từ khung cửi dệt hoa 'Hoa lâu đề hoa cơ' (lập trình hoa văn bằng dây gai), kỹ thuật đúc đỉnh và chuông đồng, nung sứ Cảnh Đức Trấn đến luyện kẽm và làm giấy.",
      historicalContext:
        "Trong lời tựa, Tống Ứng Tinh tuyên bố cuốn sách này 'không liên quan gì đến việc cầu công danh khoa cử' mà viết cho người thực hành sản xuất thực tế — phản ánh luồng tư tưởng Thực học cuối thời Minh.",
      collection: "Thư viện Quốc gia Trung Quốc & Thư viện Quốc gia Pháp (BnF)",
      attribution: "Bản khắc Sùng Trinh 1637 (Đồ bản 涂本) thuộc phạm vi công cộng quốc tế.",
      imageUrl: "assets/images/museum/tiangong-kaiwu.jpg",
      relatedIds: ["yongle-dadian", "david-vases"]
    },
    {
      id: "jinshi-doctoral-stele",
      category: "ancient-books",
      categoryLabel: "Cổ tịch & Văn bia",
      featuredCollections: ["ancient-books", "architecture", "collections"],
      nameVi: "Bia Tiến Sĩ Văn Miếu – Quốc Tử Giám (Hà Nội & Bắc Kinh)",
      nameEn: "Doctoral Steles of the Imperial Academy (Hanoi Temple of Literature & Beijing Guozijian)",
      nameZh: "国子监与河内文庙进士题名碑",
      nameZhTrad: "國子監與河內文廟進士題名碑",
      pinyin: "Jìnshì Tímíng Bēi",
      periodId: "ming",
      periodLabel: "Lê – Mạc (1442–1779) & Nguyên – Minh – Thanh",
      dateEstimate: "Dựng từ năm Hồng Đức 1484 (tại Thăng Long) và 1306–1904 (tại Bắc Kinh)",
      material: "Bia đá xanh chạm khắc chữ Hán Khải thư đặt trên lưng rùa đá (Bị Hý / Quy phu)",
      dimensions: "82 tấm bia tại Văn Miếu Hà Nội; 198 tấm bia tại Quốc Tử Giám Bắc Kinh",
      origin: "Văn Miếu – Quốc Tử Giám Hà Nội (Đại Việt) & Quốc Tử Giám Bắc Kinh (Trung Quốc)",
      culturalSignificance:
        "Biểu tượng trường tồn của truyền thống Khoa cử và tư tưởng trọng hiền tài Đông Á. Trên tấm bia khoa Nhâm Tuất 1442 (dựng năm 1484 tại Hà Nội), danh nho Thân Nhân Trung khắc câu văn bất hủ: 'Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh mà vươn cao' (贤才国家之元气). Năm 2010–2011, 82 Bia Tiến sĩ Văn Miếu Hà Nội được UNESCO ghi danh là Di sản Tư liệu Thế giới.",
      historicalContext:
        "Trong khi bia Tiến sĩ Bắc Kinh mang phong cách quy chuẩn đế chế nghiêm cẩn, 82 bia Tiến sĩ Thăng Long có phần trán bia và diềm bia chạm khắc lưỡng long chầu nguyệt, hoa sen, mây lửa và cảnh sinh hoạt biến đổi sinh động qua từng giai đoạn nghệ thuật Lê sơ – Mạc – Lê Trung hưng.",
      collection: "Di tích Văn Miếu – Quốc Tử Giám Hà Nội & Bảo tàng Quốc Tử Giám Bắc Kinh",
      attribution: "Hồ sơ Di sản Tư liệu Thế giới UNESCO (Memory of the World Register, 2010).",
      imageUrl: "assets/images/museum/jinshi-stele.jpg",
      relatedIds: ["yongle-dadian", "taihe-dian"]
    },
    {
      id: "ma-dap-phi-yen",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "collections"],
      nameVi: "Tượng Đồng Mã Đạp Phi Yến (Đồng Bôn Mã)",
      nameEn: "Galloping Horse Treading on a Flying Swallow",
      nameZh: "马踏飞燕（铜奔马）",
      nameZhTrad: "馬踏飛燕（銅奔馬）",
      pinyin: "Mǎ tà fēiyàn (Tóng bēnmǎ)",
      periodId: "qin-han",
      periodLabel: "Đông Hán (东汉, Thế kỷ II SCN)",
      dateEstimate: "Thế kỷ II SCN (khai quật tháng 10 năm 1969)",
      material: "Đồng thanh đúc nguyên khối rỗng bên trong",
      dimensions: "Cao 34,5 cm × Dài 45 cm × Rộng 13 cm (Nặng 7,15 kg)",
      origin: "Khai quật tại Mộ Hán Lôi Đài (雷台汉墓), Võ Uy (武威), Hành lang Hà Tây, tỉnh Cam Túc",
      culturalSignificance:
        "Được chọn làm biểu tượng Du lịch Trung Quốc (中国旅游标志) nhờ kỳ tích cân bằng động lực học: toàn bộ trọng lượng 7,15 kg của chiến mã đang phi nước đại chỉ dồn trên một móng sau bên phải giẫm nhẹ lên lưng chim én đang sải cánh bay!",
      historicalContext:
        "Phản ánh đội kỵ binh Tây Vực thời Hán với giống 'Thiên mã' Đại Uyển dọc Hành lang Hà Tây sau sứ mệnh Trương Khiên khai thông Con đường Tơ lụa.",
      collection: "Bảo tàng Tỉnh Cam Túc (甘肃省博物馆, Lan Châu)",
      attribution: "Quốc bảo cấp 1 của Trung Quốc (Cấp bảo hộ Xuất cảnh Vật phẩm Cấm), 1969.",
      relatedIds: ["houmuwu-ding", "sanxingdui-bronze-mask"]
    },
    {
      id: "mao-gong-ding",
      category: "artifacts",
      categoryLabel: "Thanh đồng & Ngọc khí",
      featuredCollections: ["artifacts", "ancient-books"],
      nameVi: "Mao Công Đỉnh (497 Chữ Kim Văn)",
      nameEn: "Duke of Mao Cauldron (Mao Gong Ding)",
      nameZh: "毛公鼎",
      nameZhTrad: "毛公鼎",
      pinyin: "Máo Gōng Dǐng",
      periodId: "xia-shang-zhou",
      periodLabel: "Cuối Tây Chu (Tuyên Vương, ~827–782 TCN)",
      dateEstimate: "Thế kỷ IX TCN (đào thấy cuối thời Đạo Quang, ~1843 tại Kỳ Sơn, Thiểm Tây)",
      material: "Đồng thanh ba chân hai tai thẳng đứng, hoa văn hoàn đới và trọng hoàn",
      dimensions: "Cao 53,8 cm × Đường kính miệng 47,9 cm (Nặng 34,7 kg)",
      origin: "Kỳ Sơn, Bảo Kê, tỉnh Thiểm Tây (trung tâm đất Chu cổ)",
      culturalSignificance:
        "Trong lòng đỉnh đúc **497 chữ Kim văn (金文)** chia làm 32 dòng — bài minh văn thanh đồng dài nhất còn tồn tại từ thời Tây Chu, tương đương một thiên trong sách 《Thượng Thư》 chép nguyên văn sách mệnh của Chu Tuyên Vương phong thưởng cho thúc phụ Mao Công Âm.",
      historicalContext:
        "Bản gốc minh văn là sử liệu hạng nhất kiểm chứng ngôn ngữ chính trị 'Thiên mệnh – Kính đức' và nghi thức sách phong quan chế Tây Chu trước khi qua tay nhiều nhà sưu tầm cận đại.",
      collection: "Bảo tàng Cố Cung Đài Bắc (台北故宫博物院)",
      attribution: "Một trong 'Tam Đại Bảo Bất Phàm' (cùng Đại Khắc Đỉnh & Đại Vu Đỉnh) của Thanh đồng khí Tây Chu.",
      relatedIds: ["houmuwu-ding", "zeng-hou-yi-bianzhong"]
    },
    {
      id: "ru-yao-tianqing",
      category: "ceramics",
      categoryLabel: "Gốm sứ Cổ truyền",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Đĩa Gốm Nhữ Diêu Men Xanh Thiên Thanh",
      nameEn: "Ru Ware Celadon Dish (Sky-Clearing Blue)",
      nameZh: "北宋汝窑天青釉盘",
      nameZhTrad: "北宋汝窯天青釉盤",
      pinyin: "Běisòng Rǔyáo tiānqīng yòupán",
      periodId: "song",
      periodLabel: "Bắc Tống (Tống Huy Tông, ~1086–1125 SCN)",
      dateEstimate: "Cuối Bắc Tống (lò quan Bảo Phong, Thanh Lương Tự, Hà Nam hoạt động chưa đầy 20 năm)",
      material: "Đất sét xám hương tro mỏng tráng men ngọc pha bột mã não (玛瑙入釉)",
      dimensions: "Cao 3,4 cm × Đường kính miệng 18,5 cm (đáy có 3–5 vết đinh vừng 'Chi ma đinh')",
      origin: "Nhữ Châu / Bảo Phong, tỉnh Hà Nam — đứng đầu Ngũ Đại Danh Diêu (Nhữ – Quan – Ca – Quân – Định)",
      culturalSignificance:
        "Đạt tới lý tưởng thẩm mỹ tối giản Đạo gia của Tống Huy Tông với sắc men 'Vũ quá thiên thanh vân phá xứ' (màu trời xanh trong sau cơn mưa tan mây), bề mặt rạn băng tinh tế như cánh ve (Tiền văn khai phiến).",
      historicalContext:
        "Do chiến loạn Tĩnh Khang làm lò Nhữ thất truyền rất sớm, ngày nay toàn thế giới chỉ còn khoảng dưới 100 hiện vật Nhữ Diêu truyền thế nguyên vẹn được xác chứng.",
      collection: "Bảo tàng Cố Cung Bắc Kinh & Cố Cung Đài Bắc",
      attribution: "Kiệt tác đứng đầu Ngũ Đại Danh Diêu nhà Tống ('Túng hữu gia tài vạn quán, bất như Nhữ từ nhất phiến').",
      relatedIds: ["david-vases", "chenghua-cup"]
    }
  ],

  articleSupplements: {
    "hundred-schools": {
      periodId: "spring-autumn-warring",
      regionId: "north",
      difficulty: "Intermediate / University",
      sourceType: "Chính sử & Triết học Kinh điển",
      primaryQuote: {
        zh: "夫阴阳、儒、墨、名、法、道德，此务为治者也，直所从言之异路，有省不省耳。",
        pinyin: "Fú Yīnyáng, Rú, Mò, Míng, Fǎ, Dàodé, cǐ wù wéi zhì zhě yě, zhí suǒ cóng yán zhī yì lù, yǒu xǐng bù xǐng ěr.",
        vi: "Phàm các phái Âm Dương, Nho, Mặc, Danh, Pháp, Đạo Đức đều cùng mưu cầu việc trị nước an dân, chỉ là con đường lập ngôn xuất phát khác nhau, có chỗ sâu sắc mà cũng có chỗ chưa thấu triệt mà thôi.",
        source: "Tư Mã Đàm (司马谈), thiên 《Lục gia yếu chỉ》 trong 《Sử ký – Thái sử công tự tự》"
      },
      comparativeAnalysis:
        "Trong khi Hy Lạp cổ đại phát triển mạnh triết học tự nhiên và bản thể luận siêu hình, phần lớn Chư tử Bách gia thời Xuân Thu – Chiến Quốc (trừ một phần Đạo gia và Mặc Kinh) đặt trọng tâm vào triết học thực hành chính trị – xã hội: câu hỏi trung tâm không phải 'Thế giới được cấu tạo từ vật chất gì?' mà là 'Làm sao khôi phục trật tự nhân quần giữa thời đại biến loạn?'.",
      conclusion:
        "Chư tử Bách gia định hình 'bộ gen tư tưởng' đa nguyên của văn minh Trung Hoa: dù triều đình Hán về sau đề cao Nho học trên phương diện giáo hóa, cơ chế quản trị thực tế suốt hai nghìn năm sau vẫn là sự dung hợp âm thầm giữa Nho gia (lễ giáo bề nổi), Pháp gia (công cụ hành chính bên trong) và Đạo gia (triết lý ứng xử cá nhân khi ẩn dật).",
      relatedFigures: [
        { name: "Khổng Tử (孔子)", dates: "551–479 TCN", role: "Khởi nguồn Nho gia" },
        { name: "Lão Tử (老子)", dates: "Thế kỷ VI–IV TCN (truyền thuyết)", role: "Tác giả truyền thuyết 《Đạo Đức Kinh》" },
        { name: "Mặc Tử (墨子)", dates: "Khoảng 470–391 TCN", role: "Sáng lập Mặc gia, nhấn mạnh Kiêm ái & Phi công" },
        { name: "Hàn Phi Tử (韩非子)", dates: "Khoảng 280–233 TCN", role: "Tập đại thành Pháp gia (Pháp – Thuật – Thế)" }
      ],
      relatedTexts: ["《论语》 (Luận Ngữ)", "《道德经》 (Đạo Đức Kinh)", "《墨子》 (Mặc Tử)", "《汉书·艺文志》 (Hán thư Nghệ văn chí)"]
    },
    "confucianism-society": {
      periodId: "spring-autumn-warring",
      regionId: "north",
      difficulty: "Intermediate / University",
      sourceType: "Triết học Đạo đức & Xã hội học",
      primaryQuote: {
        zh: "己所不欲，勿施于人。在邦无怨，在家无怨。",
        pinyin: "Jǐ suǒ bù yù, wù shī yú rén. Zài bāng wú yuàn, zài jiā wú yuàn.",
        vi: "Điều gì mình không muốn, chớ làm cho người khác. Ở ngoài nước không ai oán trách, trong gia đình cũng không ai oán hận.",
        source: "Khổng Tử, 《Luận Ngữ · Nhan Uyên》 (论语·颜渊)"
      },
      comparativeAnalysis:
        "So sánh mô hình 'Sai tự cách cục' (差序格局) của xã hội Nho giáo truyền thống với khái niệm 'Xã hội công dân' (Civil Society) tại châu Âu: trong khung đạo đức Nho gia, lòng tin và nghĩa vụ phân tầng từ trong gia tộc tỏa ra ngoài; tại Việt Nam thời Lý–Trần–Lê–Nguyễn, Nho học được tiếp thu vào thể chế khoa cử nhưng dung hòa cùng cấu trúc làng xã truyền thống trọng tình hơn trọng lễ cứng nhắc.",
      conclusion:
        "Hiểu Nho giáo dưới góc độ lịch sử cấu trúc giúp tách biệt hai bình diện: triết lý nhân văn về giáo dục và tự tu dưỡng ('Quân tử cầu chư kỷ') vẫn còn sức sống, trong khi những biến tướng gia trưởng phục vụ chuyên chế cần được phê phán khách quan theo hoàn cảnh thời đại.",
      relatedFigures: [
        { name: "Mạnh Tử (孟子)", dates: "Khoảng 372–289 TCN", role: "Phát triển thuyết Tính Thiện và Dân vi quý" },
        { name: "Đổng Trọng Thư (董仲舒)", dates: "179–104 TCN", role: "Hệ thống hóa Hán Nho 'Thiên nhân cảm ứng'" },
        { name: "Chu Hy (朱熹)", dates: "1130–1200 SCN", role: "Tập đại thành Tống-Minh Lý học" },
        { name: "Phí Hiếu Thông (费孝通)", dates: "1910–2005", role: "Nhà xã hội học đề xuất khái niệm Sai tự cách cục" }
      ],
      relatedTexts: ["《论语》 (Luận Ngữ)", "《孟子》 (Mạnh Tử)", "《四书章句集注》 (Tứ Thư Tập Chú)", "《乡土中国》 (Hương thổ Trung Quốc)"]
    },
    "yinyang-origins": {
      periodId: "xia-shang-zhou",
      regionId: "north",
      difficulty: "Academic / Advanced",
      sourceType: "Lịch sử Tư tưởng Vũ trụ luận",
      primaryQuote: {
        zh: "一阴一阳之谓道，继之者善也，成之者性也。",
        pinyin: "Yī yīn yī yáng zhī wèi Dào, jì zhī zhě shàn yě, chéng zhī zhě xìng yě.",
        vi: "Một Âm một Dương vận hành tiếp nối gọi là Đạo; nối tiếp điều đó là Thiện, thành tựu nơi vạn vật là Bản tính.",
        source: "《Chu Dịch · Hệ Từ Thượng》 (周易·系辞上)"
      },
      comparativeAnalysis:
        "Trái với thuyết nhị nguyên thiện-ác tuyệt đối (Manichaeism hoặc các cặp đối lập loại trừ trong tư duy nhị nguyên cứng nhắc), Âm – Dương trong vũ trụ luận Trung Hoa là cặp cực bổ sung tương hỗ ('Âm trung hữu Dương, Dương trung hữu Âm'): không tiêu diệt nhau mà chuyển hóa lẫn nhau khi đạt cực điểm ('Vật cực tất phản').",
      conclusion:
        "Trong khảo cứu học thuật, cần giữ ranh giới nghiêm ngặt: Âm Dương là một mô hình triết học – biện chứng và ngôn ngữ mô tả cân bằng trong Đông y cổ truyền (TCM), chứ không phải định luật vật lý hiện đại đo bằng cơ học lượng tử.",
      relatedFigures: [
        { name: "Trâu Diễn (邹衍)", dates: "Khoảng 305–240 TCN", role: "Đại biểu tiêu biểu của Âm Dương gia thời Chiến Quốc" },
        { name: "Chu Đôn Di (周敦颐)", dates: "1017–1073 SCN", role: "Tác giả 《Thái Cực Đồ Thuyết》 thời Bắc Tống" }
      ],
      relatedTexts: ["《诗经·大雅》 (Kinh Thi)", "《周易·系辞》 (Chu Dịch Hệ Từ)", "《黄帝内经·素问》 (Hoàng Đế Nội Kinh)"]
    },
    "five-elements": {
      periodId: "spring-autumn-warring",
      regionId: "east",
      difficulty: "Academic / Advanced",
      sourceType: "Triết học Tự nhiên & Đông y Cổ truyền",
      primaryQuote: {
        zh: "五行：一曰水，二曰火，三曰木，四曰金，五曰土。水曰润下，火曰炎上，木曰曲直，金曰从革，土爰稼穑。",
        pinyin: "Wǔxíng: yī yuē shuǐ, èr yuē huǒ, sān yuē mù, sì yuē jīn, wǔ yuē tǔ...",
        vi: "Ngũ hành: một là Thủy (thấm xuống dưới), hai là Hỏa (bốc lên trên), ba là Mộc (uốn cong vươn thẳng), bốn là Kim (theo khuôn rèn biến đổi), năm là Thổ (gieo trồng thu hái).",
        source: "《Thượng Thư · Hồng Phạm》 (尚书·洪范)"
      },
      comparativeAnalysis:
        "Khác với Tứ nguyên tố tĩnh (Đất – Nước – Lửa – Khí) của triết gia Empedocles Hy Lạp dùng giải thích thành phần vật chất, 'Ngũ Hành' (五行) nhấn mạnh chữ Hành (hành động, pha chuyển hóa quan hệ): hệ Tương Sinh (thúc đẩy) và Tương Khắc (kiềm chế) tạo vòng phản hồi khép kín.",
      conclusion:
        "Khi tiếp cận Ngũ Hành trong kiến trúc Phong thủy cổ, Đông y hoặc Tử Bình Bát Tự, học viên cần đọc nó như hệ thống ký hiệu mô hình hóa chu kỳ khí hậu – tạng tượng thời tiền hiện đại, tách bạch rành mạch với bảng tuần hoàn hóa học và y học chứng cứ thực nghiệm.",
      relatedFigures: [
        { name: "Đổng Trọng Thư (董仲舒)", dates: "179–104 TCN", role: "Hệ thống hóa trình tự Tương Sinh – Tương Khắc trong 《Xuân Thu Phồn Lộ》" },
        { name: "Lý Thời Trân (李时珍)", dates: "1518–1593 SCN", role: "Danh y thời Minh ứng dụng Ngũ Hành trong 《Bản Thảo Cương Mục》" }
      ],
      relatedTexts: ["《尚书·洪范》 (Thượng Thư Hồng Phạm)", "《管子》 (Quản Tử)", "《春秋繁露》 (Xuân Thu Phồn Lộ)"]
    },
    "iching-development": {
      periodId: "xia-shang-zhou",
      regionId: "north",
      difficulty: "Academic / Advanced",
      sourceType: "Kinh điển học (Kinh học sử 经学史)",
      primaryQuote: {
        zh: "天行健，君子以自强不息；地势坤，君子以厚德载物。",
        pinyin: "Tiān xíng jiàn, jūnzǐ yǐ zìqiáng bù xī; dì shì kūn, jūnzǐ yǐ hòu dé zài wù.",
        vi: "Trời vận hành mạnh mẽ không ngừng, người quân tử noi theo mà tự cường không nghỉ; thế đất dày rộng nâng đỡ muôn loài, người quân tử noi theo mà lấy đức dày bao dung vạn vật.",
        source: "《Chu Dịch · Tượng Truyện》 (quẻ Càn và quẻ Khôn)"
      },
      comparativeAnalysis:
        "Kinh Dịch là trường hợp điển hình của tiến trình 'triết học hóa văn bản chiêm bốc': từ 64 quẻ bói cỏ thi thời Tây Chu (Bản kinh), sang tầng bình chú đạo đức – vũ trụ luận thời Chiến Quốc – Tần Hán (Thập Dực), trở thành nguồn cảm hứng chung cho cả Nho gia lẫn Đạo gia.",
      conclusion:
        "Nghiên cứu 《Chu Dịch》 một cách nghiêm túc đòi hỏi phân biệt hai trường phái lớn trong Kinh học sử: Tượng Số phái (giải mã biến dịch qua hình tượng quẻ – hào) và Nghĩa Lý phái (đọc quẻ như triết lý xử thế và đạo đức).",
      relatedFigures: [
        { name: "Vương Bật (王弼)", dates: "226–249 SCN", role: "Khai mở Nghĩa Lý phái Dịch học thời Ngụy" },
        { name: "Trình Di (程颐)", dates: "1033–1107 SCN", role: "Tác giả 《Y Xuyên Dịch Truyện》 thời Tống" }
      ],
      relatedTexts: ["《周易》 (Bản kinh 64 quẻ)", "《十翼 / 易传》 (Dịch Truyện)", "Thanh Hoa giản 《Phệ Pháp》"]
    },
    "spring-festival-significance": {
      periodId: "modern-contemporary",
      regionId: "north",
      difficulty: "Beginner / Intermediate",
      sourceType: "Nhân học Văn hóa & Tập quán học",
      primaryQuote: {
        zh: "爆竹声中一岁除，春风送暖入屠苏。千门万户曈曈日，总把新桃换旧符。",
        pinyin: "Bàozhú shēng zhōng yī suì chú, chūnfēng sòng nuǎn rù tú sū. Qiān mén wàn hù tóngtóng rì, zǒng bǎ xīn táo huàn jiù fú.",
        vi: "Trong tiếng pháo nổ một năm cũ qua đi, gió xuân đưa hơi ấm thấm vào chén rượu Đồ Tô. Ánh mặt trời rạng rỡ rọi ngàn nhà muôn cửa, nhà nhà thay bùa đào mới bỏ bùa cũ.",
        source: "Vương An Thạch (王安石, 1021–1086), bài thơ 《Nguyên Nhật》 (元日)"
      },
      comparativeAnalysis:
        "Đối chiếu Tết Nguyên Đán Trung Hoa và Tết Nguyên Đán Việt Nam: cùng xuất phát từ hệ thống nông lịch âm-dương và nghi lễ tế tổ chào xuân đầu năm, nhưng ẩm thực và biểu tượng bản địa hóa rõ nét — miền Bắc Trung Quốc ăn sủi cảo (饺子) trong khi Việt Nam làm bánh chưng – bánh tét gắn truyền thuyết Hùng Vương và tục hái lộc, xông đất riêng.",
      conclusion:
        "Dù lịch sử hiện đại chứng kiến những chuyển đổi mạnh mẽ (từ pháo nổ sang lì xì điện tử WeChat Hồng Bao, từ về quê truyền thống sang du lịch gia đình), Xuân Tiết vẫn đóng vai trò 'neo giữ văn hóa' tái khẳng định gắn kết gia tộc trước nhịp sống công nghiệp hóa.",
      relatedFigures: [
        { name: "Hán Vũ Đế (汉武帝)", dates: "156–87 TCN", role: "Ban hành Thái Sơ Lịch năm 104 TCN cố định tháng Giêng lập Xuân Tiết" },
        { name: "Vương An Thạch (王安石)", dates: "1021–1086 SCN", role: "Miêu tả sinh động phong tục Tết thời Bắc Tống qua thơ 《Nguyên Nhật》" }
      ],
      relatedTexts: ["《荆楚岁时记》 (Kinh Sở Tuế Thời Ký)", "《东京梦华录》 (Đông Kinh Mộng Hoa Lục)"]
    },
    "tang-golden-age": {
      periodId: "sui-tang",
      regionId: "northwest",
      difficulty: "Intermediate / University",
      sourceType: "Chính sử & Lịch sử Thể chế",
      primaryQuote: {
        zh: "自古皆贵中华，贱夷狄，朕独爱之如一。",
        pinyin: "Zì gǔ jiē guì Zhōnghuá, jiàn Yídí, zhèn dú ài zhī rú yī.",
        vi: "Từ xưa người ta đều coi trọng Trung Hoa mà khinh miệt rợ Di Địch, duy chỉ trẫm yêu thương các tộc bình đẳng như nhau.",
        source: "Đường Thái Tông Lý Thế Dân, chép trong 《Tư Trị Thông Giám · Đường kỷ》 (资治通鉴)"
      },
      comparativeAnalysis:
        "So với nhà Tần – Hán mở rộng bằng quân sự và Hán hóa từ trung tâm, nhà Đường thời sơ và thịnh kỳ kết hợp di sản văn hóa Lục Triều phía Nam với tinh thần cởi mở của tầng lớp quý tộc Quan-Lũng phía Bắc, tạo nên kinh đô Trường An đa tôn giáo (Phật giáo, Cảnh giáo, Hỏa giáo, Nho-Đạo) và sức lan tỏa sâu rộng tới Nhật Bản (Khiển Đường sứ), Tân La và Giao Châu – Việt Nam.",
      conclusion:
        "Bước ngoặt Loạn An Sử (755–763) khép lại thế giới quan hướng ngoại thời Thịnh Đường, đồng thời khởi phát quá trình dịch chuyển trọng tâm kinh tế – văn hóa về đồng bằng Trường Giang, mở đường cho nền kinh tế thị trường và tầng lớp văn nhân thời Tống.",
      relatedFigures: [
        { name: "Đường Thái Tông (唐太宗)", dates: "598–649 SCN", role: "Kiến thiết nền thịnh trị Trinh Quán" },
        { name: "Huyền Trang (玄奘)", dates: "602–664 SCN", role: "Thỉnh kinh Ấn Độ và lập dịch trường tại Trường An" },
        { name: "Lý Bạch (李白) & Đỗ Phủ (杜甫)", dates: "Thế kỷ VIII SCN", role: "Hai đỉnh cao Thi tiên & Thi thánh Đường thi" }
      ],
      relatedTexts: ["《资治通鉴》 (Tư Trị Thông Giám)", "《全唐诗》 (Toàn Đường Thi)", "《大唐西域记》 (Đại Đường Tây Vực Ký)"]
    },
    "ink-wash-painting": {
      periodId: "song",
      regionId: "east",
      difficulty: "Intermediate / University",
      sourceType: "Mỹ học & Lịch sử Nghệ thuật",
      primaryQuote: {
        zh: "运墨而五色具，谓之得意。意在五色，则物象乖矣。",
        pinyin: "Yùn mò ér wǔsè jù, wèi zhī déyì. Yì zài wǔsè, zé wùxiàng guāi yǐ.",
        vi: "Vận dụng mực đen mà đủ cả năm sắc thái mới gọi là đắc ý; còn nếu tâm chỉ chú trọng vào năm màu sặc sỡ thì hình tượng tự nhiên sẽ sai lạc mất thần.",
        source: "Trương Ngạn Viễn (张彦远, đời Đường), 《Lịch Đại Danh Họa Ký》 (历代名画记)"
      },
      comparativeAnalysis:
        "Nếu hội họa sơn dầu châu Âu thời Phục Hưng dùng phối cảnh tụ điểm cố định (single-point perspective) và kỹ thuật lấp đầy khung vải để mô phỏng quang học không gian ba chiều, thì thủy mặc sơn thủy Trung Hoa sử dụng 'Tán điểm thấu thị' (phối cảnh đa điểm di động) kết hợp Lưu bạch (khoảng trắng) để người xem đồng du hành qua từng lớp núi rừng trong bức cuộn dài.",
      conclusion:
        "Tính triết học của thủy mặc nằm ở sự thống nhất 'Thi – Thư – Họa – Ấn': bức tranh không chỉ là vật phẩm trang trí mà là nhật ký tinh thần (Tâm cảnh) nơi mực đậm nhạt truyền tải khí vận (Khí vận sinh động) của người nghệ sĩ.",
      relatedFigures: [
        { name: "Tạ Hách (谢赫)", dates: "Thế kỷ V–VI SCN", role: "Đề xuất 'Lục pháp' trong 《Cổ Họa Phẩm Lục》" },
        { name: "Quách Hy (郭熙)", dates: "Khoảng 1020–1090 SCN", role: "Hệ thống hóa phép 'Tam viễn' trong 《Lâm Tuyền Cao Trí》" },
        { name: "Tô Thức (苏轼)", dates: "1037–1101 SCN", role: "Đề xướng lý luận Văn nhân họa ('Thi trung hữu họa')" }
      ],
      relatedTexts: ["《历代名画记》 (Lịch Đại Danh Họa Ký)", "《林泉高致》 (Lâm Tuyền Cao Trí)", "《芥子园画谱》 (Giới Tử Viên Họa Phổ)"]
    },
    "guanxi-business": {
      periodId: "modern-contemporary",
      regionId: "east",
      difficulty: "International Business Applied",
      sourceType: "Quản trị Liên văn hóa & Thực chứng Kinh tế",
      primaryQuote: {
        zh: "人而无信，不知其可也。大车无輗，小车无軏，其何以行之哉？",
        pinyin: "Rén ér wú xìn, bù zhī qí kě yě. Dàchē wú ní, xiǎochē wú yuè, qí hé yǐ xíng zhī zāi?",
        vi: "Người mà không có chữ Tín thì chẳng biết làm nên việc gì; giống như xe lớn không có chốt ách ngựa, xe nhỏ không có then cài càng, lấy gì mà lăn bánh được đây?",
        source: "《Luận Ngữ · Vi Chính》 (论语·为政)"
      },
      comparativeAnalysis:
        "Trong thương mại quốc tế hiện đại, cần tách biệt ba vòng thực tiễn khi làm việc với doanh nghiệp Trung Quốc: (1) Mạng lưới xã hội Guanxi – Renqing giúp giảm chi phí tìm kiếm thông tin và tăng độ linh hoạt khi đàm phán khẩn cấp, (2) Cơ chế giá – tiến độ – kiểm soát chất lượng chuỗi cung ứng tại các cụm công nghiệp (Thâm Quyến, Nghĩa Ô, Tô Châu), và (3) Khung pháp chế hợp đồng điện tử – thanh toán LC/TT và luật thương mại.",
      conclusion:
        "Sai lầm phổ biến nhất của người mới làm kinh doanh là cực đoan hóa theo một trong hai hướng: hoặc xem nhẹ yếu tố thể diện (Mianzi) và nhân tình (Renqing), hoặc thần thánh hóa Guanxi mà bỏ qua thẩm định pháp lý, Incoterms và kiểm định hàng hóa độc lập.",
      relatedFigures: [
        { name: "Phí Hiếu Thông (费孝通)", dates: "1910–2005", role: "Lý giải cấu trúc mạng lưới xã hội Trung Hoa truyền thống" },
        { name: "Trương Thụy Mẫn (张瑞敏)", dates: "1949–nay", role: "Cựu Chủ tịch Haier kết hợp triết lý quản trị phương Đông và tiêu chuẩn chất lượng hiện đại" }
      ],
      relatedTexts: ["《论语》 (Luận Ngữ – Chữ Tín)", "《乡土中国》 (Hương thổ Trung Quốc)", "Án lệ doanh nghiệp Trung Quốc đương đại (Harvard/CEIBS)"]
    },
    "tea-culture": {
      periodId: "sui-tang",
      regionId: "southwest",
      difficulty: "Beginner / Intermediate",
      sourceType: "Lịch sử Đời sống & Thương mại Hàng hải",
      primaryQuote: {
        zh: "茶之为用，味至寒，为饮最宜精行俭德之人。",
        pinyin: "Chá zhī wéi yòng, wèi zhì hán, wéi yǐn zuì yí jīngxíng jiǎndé zhī rén.",
        vi: "Công dụng của trà, tính vị vốn thanh mát; làm thức uống hợp nhất với người giữ nếp thanh cao và đức hạnh tiết kiệm.",
        source: "Lục Vũ (陆羽, 733–804), 《Trà Kinh · Nhất Chi Nguyên》 (茶经·一之源)"
      },
      comparativeAnalysis:
        "Ngôn ngữ học toàn cầu ghi nhận lộ trình thương mại của lá trà Trung Hoa qua chính tên gọi: từ phương ngữ Quảng Đông – Quan thoại truyền theo đường bộ ('Cha / Chá' -> tiếng Việt *Trà/Chè*, Nga *Chai*, Ba Tư *Chay*, Nhật *Ocha*), còn từ phương ngữ Mân Nam tại cảng Tuyền Châu – Hạ Môn ('Te / Tê') đi theo tàu buôn Hà Lan – Anh thành tiếng Anh *Tea*, Pháp *Thé*, Đức *Tee*.",
      conclusion:
        "Từ cống phẩm triều đình đời Đường đến mắt xích trung tâm của hệ thống Trà Mã Cổ Đạo với Tây Tạng và cán cân thương mại bạc trắng Quảng Châu thế kỷ XVIII–XIX, lá trà minh chứng cách một thực vật bản địa biến thành thiết chế văn hóa và hàng hóa chiến lược xuyên lục địa.",
      relatedFigures: [
        { name: "Lục Vũ (陆羽)", dates: "733–804 SCN", role: "Được tôn làm 'Trà Thánh', tác giả chuyên luận trà đầu tiên của thế giới 《Trà Kinh》" },
        { name: "Thái Tương (蔡襄)", dates: "1012–1067 SCN", role: "Tác giả 《Trà Lục》 ghi chép kỹ nghệ điểm trà Bắc Tống" }
      ],
      relatedTexts: ["《茶经》 (Trà Kinh)", "《大观茶论》 (Đại Quan Trà Luận)", "《茶录》 (Trà Lục)"]
    },
    "sino-vietnam-history": {
      periodId: "five-dynasties",
      regionId: "south",
      difficulty: "Intermediate / University",
      sourceType: "Lịch sử Giao lưu Quốc tế & Ngôn ngữ học",
      primaryQuote: {
        zh: "惟我大越之国，实为文献之邦。山川之封域既殊，南北之风俗亦异。",
        pinyin: "Wéi wǒ Dàyuè zhī guó, shí wéi wénxiàn zhī bāng. Shānchuān zhī fēngyù jì shū, nánběi zhī fēngsú yì yì.",
        vi: "Như nước Đại Việt ta từ trước, vốn xưng nền văn hiến đã lâu. Núi sông bờ cõi đã chia, phong tục Bắc Nam cũng khác.",
        source: "Nguyễn Trãi (阮廌), 《Bình Ngô Đại Cáo》 (平吴大诰, viết năm 1428 bằng Hán văn cổ)"
      },
      comparativeAnalysis:
        "Tính biện chứng của lịch sử giao lưu văn hóa Việt – Trung thể hiện ngay trong áng văn trích trên: sử dụng văn tự Hán văn điêu luyện cùng điển cố Nho-Sử Đông Á để khẳng định dứt khoát chủ quyền văn hiến và phong tục bản địa riêng biệt của Đại Việt. Ba tầng phân tích (Tiếp nhận – Thích nghi – Sáng tạo nội sinh như Chữ Nôm, Truyện Kiều, Tín ngưỡng Tứ phủ) giúp tránh cả hai cực đoan: phủ nhận giao lưu lịch sử lẫn đồng nhất hóa Việt–Trung.",
      conclusion:
        "Đối với người học Hán ngữ và sinh viên Kinh doanh Quốc tế tại Việt Nam, vốn từ Hán-Việt chiếm hơn nửa lớp từ trừu tượng là cầu nối học thuật vô giá để giải mã khái niệm kinh tế – pháp lý Trung Hoa, miễn là cảnh giác với các từ 'đồng hình dị nghĩa' (như 学生, 交通, 经济 trong ngữ cảnh cổ vs hiện đại).",
      relatedFigures: [
        { name: "Chu Văn An (朱文安)", dates: "1292–1370", role: "Vạn thế sư biểu Nho học Việt Nam thời Trần" },
        { name: "Lê Quý Đôn (黎贵惇)", dates: "1726–1784", role: "Học giả bác học đối chiếu thư tịch Đại Việt và Trung Hoa trong 《Vân Đài Loại Ngữ》" },
        { name: "Nguyễn Tài Cẩn", dates: "1926–2011", role: "Giáo sư ngữ âm học lịch sử luận giải hệ thống âm Hán-Việt" }
      ],
      relatedTexts: ["《大越史记全书》 (Đại Việt Sử Ký Toàn Thư)", "《平吴大诰》 (Bình Ngô Đại Cáo)", "《安南志略》 (An Nam Chí Lược)"]
    },
    "beijing-shanghai-culture": {
      periodId: "modern-contemporary",
      regionId: "east",
      difficulty: "Business & Regional Analysis",
      sourceType: "Địa lý Văn hóa & Kinh tế Đô thị",
      primaryQuote: {
        zh: "海纳百川，有容乃大；壁立千仞，无欲则刚。",
        pinyin: "Hǎi nà bǎi chuān, yǒu róng nǎi dà; bì lì qiān rèn, wú yù zé gāng.",
        vi: "Biển lớn thu nhận trăm sông mới rộng lớn; vách đá đứng thẳng ngàn trượng không tư dục thì mới vững vàng.",
        source: "Lâm Tắc Từ (林则徐), câu đối thường dùng khái quát tinh thần bao dung văn hóa"
      },
      comparativeAnalysis:
        "Đối chiếu hai cực văn hóa đô thị hiện đại Trung Quốc: 'Kinh Phái' (京派 – Bắc Kinh) thấm đẫm truyền thống cố đô, trực hệ thiết chế chính sách, đại học nghiên cứu và mỹ học tứ hợp viện; trong khi 'Hải Phái' (海派 – Thượng Hải) kết tinh từ cảng thị mở cửa giữa thế kỷ XIX với văn hóa thương nghiệp, tinh thần hợp đồng, thời trang – tài chính quốc tế và nhịp sống thực dụng vùng Giang Nam.",
      conclusion:
        "Không có một 'văn hóa kinh doanh Trung Quốc' đồng nhất duy nhất: phong cách giao tiếp tại Bắc Kinh, Thượng Hải, Quảng Châu – Thâm Quyến hay Thành Đô – Trùng Khánh mang sắc thái địa kinh tế khác nhau mà bất kỳ chiến lược gia thị trường nào cũng cần phân biệt rõ.",
      relatedFigures: [
        { name: "Lão Xá (老舍)", dates: "1899–1966", role: "Nhà văn khắc họa chiều sâu văn hóa dân gian Bắc Kinh qua 《Trà Quán》" },
        { name: "Trương Ái Linh (张爱玲)", dates: "1920–1995", role: "Tác giả tiêu biểu viết về tâm thức đô thị Hải Phái Thượng Hải" }
      ],
      relatedTexts: ["《茶馆》 (Trà Quán)", "《北京志》 & Hồ sơ Quy hoạch Đồng bằng Trường Giang"]
    },
    "traditional-architecture-gardens": {
      periodId: "ming",
      regionId: "east",
      difficulty: "Intermediate / University",
      sourceType: "Lịch sử Kiến trúc & Di sản UNESCO",
      primaryQuote: {
        zh: "虽由人作，宛自天开。",
        pinyin: "Suī yóu rén zuò, wǎn zì tiān kāi.",
        vi: "Tuy do bàn tay con người kiến tạo, nhưng trông ngỡ như tự nhiên sinh thành.",
        source: "Kế Thành (计成, 1582–1642), 《Viên Dã · Hưng Tạo Luận》 (园冶·兴造论)"
      },
      comparativeAnalysis:
        "Kiến trúc truyền thống Trung Hoa vận hành trên sự đối thoại liên tục giữa hai hệ thống giá trị: (1) Nho gia ở khu vực công quyền (trục trung tâm đối xứng, phân cấp quy mô theo phẩm hàm trong Tử Cấm Thành và Tứ Hợp Viện) và (2) Đạo gia – Thiền học ở không gian riêng tư (bố cục uốn lượn tự do, 'Tá cảnh' mượn núi tháp ngoài tường, kết hợp đá Thái Hồ – mặt nước tĩnh trong Viên lâm Tô Châu).",
      conclusion:
        "Hệ khớp mộng gỗ Đấu củng (斗拱) trong 《Doanh Tạo Pháp Thức》 chứng minh trình độ cơ học kết cấu xuất sắc của thợ cả Trung Hoa cổ đại: biến bộ mái nặng thành lực ổn định ma sát đàn hồi thay vì chống lại địa chấn bằng sự cứng nhắc tuyệt đối.",
      relatedFigures: [
        { name: "Lý Giới (李诫)", dates: "1035–1110 SCN", role: "Tác giả bộ chuẩn mực kiến trúc Bắc Tống 《Doanh Tạo Pháp Thức》 (1103)" },
        { name: "Kế Thành (计成)", dates: "1582–1642 SCN", role: "Kiến trúc sư viên lâm thời Minh, tác giả 《Viên Dã》" },
        { name: "Lương Tư Thành (梁思成)", dates: "1901–1972", role: "Kiến trúc sư hiện đại tiên phong khảo cứu & bảo vệ kiến trúc cổ Trung Hoa" }
      ],
      relatedTexts: ["《营造法式》 (Doanh Tạo Pháp Thức)", "《园冶》 (Viên Dã)", "《图像中国建筑史》"]
    },
    "contemporary-china-digital": {
      periodId: "modern-contemporary",
      regionId: "south",
      difficulty: "Applied / Business & Sociology",
      sourceType: "Kinh tế Chính trị Đương đại & Thống kê Quốc tế",
      primaryQuote: {
        zh: "穷则变，变则通，通则久。",
        pinyin: "Qióng zé biàn, biàn zé tōng, tōng zé jiǔ.",
        vi: "Khi tới giới hạn bế tắc ắt phải biến đổi; có biến đổi mới thông suốt; có thông suốt mới bền lâu.",
        source: "《Chu Dịch · Hệ Từ Hạ》 (câu châm ngôn thường được giới doanh nhân & cải cách kinh tế Trung Quốc viện dẫn)"
      },
      comparativeAnalysis:
        "Thay vì nhìn nhận Trung Quốc đương đại như một nền sản xuất giá rẻ thuần túy kiểu thập niên 1990 hay một siêu cường số đồng nhất, góc nhìn kinh tế – văn hóa chỉ ra sự song hành đa tầng: hạ tầng logistics & TMĐT siêu tốc C2M gắn liền cụm công nghiệp Nghĩa Ô/Quảng Đông cùng lúc đối mặt bài toán áp lực thế hệ 'Nội quyển' (内卷) và xu hướng thương hiệu bản địa 'Quốc triều' (国潮).",
      conclusion:
        "Năng lực phân tích thị trường Trung Quốc thế kỷ XXI đòi hỏi phối hợp ba nguồn: dữ liệu chuỗi cung ứng thực chứng (UN Comtrade, cảng logistics), văn bản chính sách kinh tế – hải quan, và thấu hiểu biến đổi thị hiếu văn hóa của người tiêu dùng trẻ đô thị.",
      relatedFigures: [
        { name: "Phí Hiếu Thông (费孝通)", dates: "1910–2005", role: "Nghiên cứu chuyển hóa nông thôn – thị trấn công nghiệp Giang Nam thời kỳ đầu Cải cách" },
        { name: "Lương Tương Hải (Bambi Xiang)", dates: "Đương đại", role: "Khái niệm 'Nội quyển' từ nhân học Clifford Geertz du nhập vào diễn ngôn xã hội học TQ" }
      ],
      relatedTexts: ["World Bank China Economic Update", "UN Comtrade Database", "Báo cáo Hành lang Kinh tế ASEAN – Trung Quốc (RCEP)"]
    },
    "silk-road-maritime-trade": {
      periodId: "qin-han",
      regionId: "northwest",
      difficulty: "Academic / Intermediate",
      sourceType: "Lịch sử Giao thương Xuyên lục địa & Hàng hải",
      primaryQuote: {
        zh: "凿空西域，通使大夏；海舶云集，市舶司置。",
        pinyin: "Záo kōng Xīyù, tōng shǐ Dàxià; hǎibó yúnjí, Shìbósī zhì.",
        vi: "Khai thông Tây Vực, nối sứ bộ tới Đại Hạ; thuyền buôn vượt biển tụ hội, đặt Thị Bạc Ty quản lý thương cảng.",
        source: "Tổng hợp từ 《Sử Ký · Đại Uyển Liệt Truyện》 (Tư Mã Thiên) & 《Tống Hội Yếu Cảo · Chức Quan》"
      },
      comparativeAnalysis:
        "Từ thế kỷ II TCN đến thế kỷ XV SCN, Con đường Tơ lụa gồm hai mạch vận tải song hành: tuyến lục địa nối Trường An – Đôn Hoàng – Samarkand chở lụa, giấy, kỹ nghệ tưới tiêu; và Con đường Tơ lụa Trên biển (Quảng Châu – Tuyền Châu – Cù Lao Chàm – Malacca – Hormuz) do Thị Bạc Ty quản trị thuế quan 10–15% để trao đổi gốm hoa lam, gia vị, bạc trắng và hương liệu.",
      conclusion:
        "Trong mạng lưới này, miền Trung và Bắc Việt Nam (Giao Châu, Chu Đậu, Vân Đồn, Cù Lao Chàm) không chỉ là trạm tiếp nhiên liệu mà trực tiếp đóng vai trò xưởng chế tác xuất khẩu gốm hoa lam cạnh tranh và bổ trợ cho Cảnh Đức Trấn.",
      relatedFigures: [
        { name: "Trương Khiên (张骞)", dates: "Khoảng 164–114 TCN", role: "Sứ giả Tây Hán mở tuyến thông thương Trường An – Tây Vực năm 138 TCN" },
        { name: "Trịnh Hòa (郑和)", dates: "1371–1433 SCN", role: "Đô đốc chỉ huy 7 chuyến hải trình Hạ Tây Dương đầu thời Minh" }
      ],
      relatedTexts: ["《史记·大宛列传》 (Sử Ký – Đại Uyển Liệt Truyện)", "《郑和航海图》 (Trịnh Hòa Hải Đồ)", "《诸蕃志》 (Chư Phiên Chí – Triệu Nhữ Quát)"]
    },
    "tcm-solar-terms-yangsheng": {
      periodId: "qin-han",
      regionId: "north",
      difficulty: "Cultural Heritage & Epistemic Study",
      sourceType: "Y thư Cổ điển & Nông lịch Thiên văn",
      primaryQuote: {
        zh: "上工治未病，不治已病，此之谓也。法于阴阳，和于术数。",
        pinyin: "Shàng gōng zhì wèibìng, bù zhì yǐ bìng, cǐ zhī wèi yě. Fǎ yú yīnyáng, hé yú shùshù.",
        vi: "Thầy thuốc bậc thượng trị từ khi bệnh chưa phát thành triệu chứng, thuận theo quy luật Âm Dương và tiết chế nếp sinh hoạt.",
        source: "《Hoàng Đế Nội Kinh · Tố Vấn · Tứ Khí Điều Thần Đại Luận》 (黄帝内经·素问)"
      },
      comparativeAnalysis:
        "24 Tiết khí (Nhị thập tứ tiết khí) được đo chính xác theo góc kinh độ Mặt Trời cứ mỗi 15 độ trên hoàng đạo để định lịch nông nghiệp lưu vực Hoàng Hà. Khi nhập vào 《Hoàng Đế Nội Kinh》, chu kỳ khí hậu ấy được ánh xạ thành học thuyết Tạng Tượng – Kinh Lạc – Dưỡng sinh (ăn ngủ theo mùa, điều độ tâm thế) và đối thoại qua nhiều thế kỷ với Nam Y Việt Nam của Tuệ Tĩnh và Hải Thượng Lãn Ông.",
      conclusion:
        "Tiếp cận khoa học đòi hỏi tách bạch ba lớp: thiên văn nông lịch thực chứng (24 Tiết khí UNESCO), di sản triết học sinh thái và phòng bệnh (lối sống dưỡng sinh), và thực hành y khoa chứng cứ hiện đại (RCTs khi điều trị bệnh lý).",
      relatedFigures: [
        { name: "Vương Duy Nhất (王惟一)", dates: "Khoảng 987–1067 SCN", role: "Ngự y Bắc Tống đúc Thiên Thánh Đồng Nhân chuẩn hóa 354 huyệt vị châm cứu" },
        { name: "Lý Thời Trân (李时珍)", dates: "1518–1593 SCN", role: "Soạn 《Bản Thảo Cương Mục》, được Hải Thượng Lãn Ông tham khảo và bản địa hóa Nam dược" }
      ],
      relatedTexts: ["《黄帝内经·素问》 (Hoàng Đế Nội Kinh)", "《伤寒杂病论》 (Thương Hàn Tạp Bệnh Luận)", "《海上医宗心领》 (Hải Thượng Y Tông Tâm Lĩnh)"]
    },
    "chinese-metaphysics-systems": {
      periodId: "song",
      regionId: "east",
      difficulty: "Advanced / Comparative Epistemology",
      sourceType: "Thư tịch Cổ học & Lịch sử Tri thức",
      primaryQuote: {
        zh: "一命二运三风水，四积阴德五读书。不知命，无以为君子也。",
        pinyin: "Yī mìng èr yùn sān fēngshuǐ, sì jī yīndé wǔ dúshū. Bù zhī mìng, wú yǐ wéi jūnzǐ yě.",
        vi: "Nhất Mệnh, nhì Vận, ba Phong Thủy, bốn Tích đức, năm Đọc sách; câu sau trích Khổng Tử nhấn mạnh hiểu giới hạn hoàn cảnh để giữ khí tiết quân tử.",
        source: "《Luận Ngữ · Nghiêu Viết》 & Văn hóa Tục ngữ Minh–Thanh"
      },
      comparativeAnalysis:
        "So sánh cấu trúc bốn hệ thống thuật số cổ điển: Tử Bình Bát Tự (lập 4 trụ Can Chi theo tiết khí sinh để luận cân bằng Ngũ Hành – Dụng Thần), Tử Vi Đẩu Số (an 12 cung cùng 14 chính tinh và Tứ Hóa theo âm lịch), Phong Thủy Loan Đầu – Lý Khí (đánh giá địa hình thủy khẩu và tọa hướng), và Kỳ Môn Độn Giáp (mô hình không-thời gian 9 cung từng gắn binh thư cổ).",
      conclusion:
        "Mọi hệ thống trên đều vận hành trên nền tảng ký hiệu học Lịch pháp – Can Chi – Ngũ Hành thời tiền hiện đại. Giá trị học thuật cốt lõi nằm ở lịch sử tư duy biểu tượng, tâm lý học tự sự và bản sắc văn hóa Á Đông, tuyệt đối không đồng nhất với dự báo tất định hay khoa học thực nghiệm.",
      relatedFigures: [
        { name: "Từ Tử Bình (徐子平)", dates: "Thế kỷ X SCN", role: "Chuẩn hóa phép lập Tứ trụ lấy Nhật Can làm trọng tâm thời Ngũ Đại – đầu Tống" },
        { name: "Vạn Dân Anh (万民英)", dates: "1521–1603 SCN", role: "Tác giả 《Tam Mệnh Thông Hội》 tổng hợp thuật số thời Minh" }
      ],
      relatedTexts: ["《渊海子平》 (Uyên Hải Tử Bình)", "《紫微斗数全书》 (Tử Vi Đẩu Số Toàn Thư)", "《葬书》 (Táng Thư – Quách Phác)"]
    },
    "china-vietnam-supply-chain-rcep": {
      periodId: "modern-contemporary",
      regionId: "south",
      difficulty: "University / International Trade",
      sourceType: "Kinh tế Quốc tế & Pháp lý Hải quan",
      primaryQuote: {
        zh: "中国—东盟自贸区原产地规则与区域经济伙伴关系协定，重塑跨境产业链协同。",
        pinyin: "Zhōngguó–Dōngméng Zìmàoqū yuánchǎndì guīzé yǔ Qūyù Jīngjì Huǒbàn Guānxì Xiédìng, chóngshù kuàjìng chǎnyèliàn xiétóng.",
        vi: "Quy tắc xuất xứ Hiệp định ACFTA (C/O Form E) và RCEP tái định hình liên kết chuỗi sản xuất xuyên biên giới Việt – Trung.",
        source: "Khung Hiệp định RCEP (2022) & Nghị định thư nâng cấp ACFTA 3.0"
      },
      comparativeAnalysis:
        "Phân tích chuỗi giá trị sản xuất Việt – Trung trong thương mại quốc tế: Việt Nam nhập nguyên phụ liệu, dệt may, linh kiện điện tử từ các vành đai công nghiệp Quảng Đông – Chiết Giang – Giang Tô để gia công xuất khẩu đi Mỹ/EU (lưu ý RVC – Hàm lượng giá trị khu vực khi xin C/O ưu đãi), đồng thời xuất khẩu nông sản chính ngạch qua cửa khẩu thông minh Lạng Sơn – Bằng Tường.",
      conclusion:
        "Sinh viên Kinh doanh Quốc tế cần nắm vững bộ kỹ năng thực chiến: phân loại mã HS 8–10 số theo 6 quy tắc GRI, đối chiếu trị giá hải quan FOB/CIF trong hợp đồng ngoại thương, thẩm định chứng từ C/O Form E / RCEP hợp lệ và nhận diện rào cản kiểm dịch thực vật GACC.",
      relatedFigures: [
        { name: "Đặng Tiểu Bình (邓小平)", dates: "1904–1997", role: "Khởi xướng Đặc khu Kinh tế Thâm Quyến và chiến lược Mở cửa 1978" },
        { name: "Hiệp định ACFTA & RCEP", dates: "2002–2026", role: "Khung thể chế thuế quan và quy tắc cộng gộp xuất xứ khu vực Đông Á" }
      ],
      relatedTexts: ["Công ước Quốc tế về Hệ thống Hài hòa (HS Convention)", "Thông tư hướng dẫn C/O Form E & RCEP (Bộ Công Thương VN)", "UN Comtrade Bilateral Flow Reports"]
    },
    "imperial-examination-keju": {
      periodId: "sui-tang",
      regionId: "north",
      difficulty: "University / Institutional History",
      sourceType: "Sử học Thể chế & Di sản Tư liệu UNESCO",
      primaryQuote: {
        zh: "贤才国家之元气，元气盛则国势强而日隆。",
        pinyin: "Xiáncái guójiā zhī yuánqì, yuánqì shèng zé guóshì qiáng ér rì lóng.",
        vi: "Hiền tài là nguyên khí của quốc gia, nguyên khí thịnh thì thế nước mạnh mà ngày càng hưng thịnh.",
        source: "Thân Nhân Trung (申仁忠), 《Bia Tiến sĩ khoa Nhâm Tuất 1442》 dựng năm Hồng Đức 1484 tại Văn Miếu Thăng Long"
      },
      comparativeAnalysis:
        "So sánh thể chế Khoa cử tại Trung Quốc (605–1905) và Đại Việt (1075–1919): cả hai đều dùng thi cử Nho học để thay thế đặc quyền quý tộc huyết thống bằng tầng lớp văn quan ('Sĩ đại phu') và lập Bia Tiến sĩ tại Quốc Tử Giám. Tuy nhiên, tầng lớp Nho sĩ Việt Nam duy trì sự gắn kết mật thiết với hương ước làng xã nông thôn hơn là tầng lớp thân hào đô thị thời Minh–Thanh.",
      conclusion:
        "Khoa cử là một phát kiến thể chế vĩ đại về tuyển dụng dựa trên năng lực học vấn (meritocracy), nhưng việc đóng khung tư tưởng vào văn Bát cổ cuối thời Minh–Thanh cũng để lại bài học sâu sắc về nguy cơ giáo điều hóa giáo dục.",
      relatedFigures: [
        { name: "Thân Nhân Trung (申仁忠)", dates: "1418–1499", role: "Danh thần Tao Đàn thời Lê Thánh Tông, soạn bài ký Bia Tiến sĩ năm 1484" },
        { name: "Mạc Đĩnh Chi (莫挺之)", dates: "1272–1346", role: "Lưỡng quốc Trạng nguyên thời Trần" }
      ],
      relatedTexts: ["《大越史记全书》 (Đại Việt Sử Ký Toàn Thư)", "Hồ sơ 82 Bia Tiến sĩ Văn Miếu Hà Nội (UNESCO)", "Benjamin Elman (2000) – Civil Examinations in Late Imperial China"]
    },
    "four-great-inventions-science": {
      periodId: "song",
      regionId: "east",
      difficulty: "Intermediate / History of Science",
      sourceType: "Lịch sử Khoa học Kỹ thuật & Bách khoa Thư Cổ",
      primaryQuote: {
        zh: "巧夺天工，开物成务；贵五谷而贱金玉。",
        pinyin: "Qiǎo duó tiāngōng, kāiwù chéngwù; guì wǔgǔ ér jiàn jīnyù.",
        vi: "Khéo léo sánh ngang tạo hóa, mở mang sản vật làm nên công việc; coi trọng năm thứ lúa nuôi dân hơn cả vàng ngọc.",
        source: "Tống Ứng Tinh (宋应星), Lời tựa 《Thiên Công Khai Vật》 (天工开物, 1637)"
      },
      comparativeAnalysis:
        "Thông qua công trình 《Science and Civilisation in China》, Joseph Needham chỉ ra rằng bốn phát minh lớn (Giấy, In ấn, Thuốc súng, La bàn) cùng hàng loạt kỹ nghệ luyện kim, thủy lợi, dệt hoa của Trung Quốc cổ trung đại phát triển vượt bậc nhờ nền tảng quan sát thực nghiệm phục vụ nông nghiệp và quản trị đế chế, trước khi châu Âu bứt phá nhờ Cách mạng Khoa học toán học hóa thế kỷ XVII.",
      conclusion:
        "Đọc 《Mộng Khê Bút Đàm》 và 《Thiên Công Khai Vật》 giúp xóa bỏ định kiến cho rằng văn minh Trung Hoa truyền thống chỉ có văn chương triết học mà thiếu tư duy kỹ thuật thực nghiệm.",
      relatedFigures: [
        { name: "Thái Luân (蔡伦) & Tất Thăng (毕昇)", dates: "Thế kỷ II & Thế kỷ XI SCN", role: "Cải tiến nghề làm giấy (105 CN) và phát minh in chữ rời đất nung (~1041–1048)" },
        { name: "Thẩm Quát (沈括) & Tống Ứng Tinh (宋应星)", dates: "Bắc Tống & Cuối Minh", role: "Hai học giả khoa học – kỹ thuật kiệt xuất của Trung Hoa cổ đại" }
      ],
      relatedTexts: ["《梦溪笔谈》 (Mộng Khê Bút Đàm)", "《天工开物》 (Thiên Công Khai Vật)", "Joseph Needham – Science and Civilisation in China"]
    },
    "chinese-calligraphy-seal-aesthetics": {
      periodId: "jin-northern-southern",
      regionId: "east",
      difficulty: "Intermediate / Aesthetics & Art History",
      sourceType: "Mỹ học Văn nhân & Di sản Phi vật thể UNESCO",
      primaryQuote: {
        zh: "书者，如也：如其学，如其才，如其志，总之曰如其人而已。",
        pinyin: "Shū zhě, rú yě: rú qí xué, rú qí cái, rú qí zhì, zǒng zhī yuē rú qí rén ér yǐ.",
        vi: "Thư pháp chính là sự phản chiếu: phản chiếu học vấn, tài năng, chí hướng, tóm lại là chữ viết như chính con người vậy.",
        source: "Lưu Hy Tải (刘熙载, đời Thanh), 《Nghệ Khái · Thư Khái》 (艺概·书概)"
      },
      comparativeAnalysis:
        "Tiến trình tiến hóa từ Giáp cốt, Kim văn, Tiểu triện sang Lệ thư, Khải thư, Hành thư và Thảo thư thể hiện sự cân bằng giữa nhu cầu tốc ký hành chính ('Lệ biến') và khát vọng biểu đạt thẩm mỹ cá nhân. Khi kết hợp cùng nghệ thuật Triện khắc đá ('Phương thốn càn khôn'), chữ Hán trở thành linh hồn của bố cục 'Thi – Thư – Họa – Ấn'.",
      conclusion:
        "Hiểu 5 thể chữ Hán giúp người học đọc được biển hiệu cổ, hoành phi câu đối tại di tích Việt Nam – Trung Quốc và cảm thụ chiều sâu của các bức danh họa như 《Lan Đình Tập Tự》 hay 《Giang Sơn Như Thử Đa Kiều》.",
      relatedFigures: [
        { name: "Vương Hi Chi (王羲之)", dates: "303–361 SCN", role: "Thư thánh thời Đông Tấn, tác giả 《Lan Đình Tập Tự》" },
        { name: "Nhan Chân Khanh (颜真卿) & Tô Thức (苏轼)", dates: "Đường & Bắc Tống", role: "Đỉnh cao Nhan thể Khải thư và Hành thư Tống Tứ Gia" }
      ],
      relatedTexts: ["《兰亭集序》 (Lan Đình Tập Tự)", "《书谱》 (Thư Phổ – Tôn Quá Đình)", "Cầu Tích Khuê – Văn Tự Học Khái Yếu"]
    },
    "sino-vietnamese-translation-business": {
      periodId: "modern-contemporary",
      regionId: "south",
      difficulty: "Applied / Linguistics & Contract Law",
      sourceType: "Ngôn ngữ học Đối chiếu & Pháp lý Hợp đồng Ngoại thương",
      primaryQuote: {
        zh: "定金罚则：给付定金的一方不履行债务的，无权请求返还定金；收受定金的一方不履行债务的，应当双倍返还定金。",
        pinyin: "Dìngjīn fázé: jǐfù dìngjīn de yīfāng bù lǚxíng zhàiwù de, wúquán qǐngqiú fǎnhuán dìngjīn; shōushòu dìngjīn de yīfāng bù lǚxíng zhàiwù de, yīngdāng shuāngbèi fǎnhuán dìngjīn.",
        vi: "Quy tắc phạt cọc Định kim: Bên đặt cọc Định kim không thực hiện nghĩa vụ thì mất quyền đòi lại cọc; bên nhận Định kim không thực hiện nghĩa vụ thì phải hoàn trả gấp đôi.",
        source: "Điều 587 《Bộ luật Dân sự CHND Trung Hoa》 (中华人民共和国民法典)"
      },
      comparativeAnalysis:
        "Do âm Hán–Việt bắt nguồn từ ngữ âm Đường–Tống rồi phát triển độc lập hơn một thiên niên kỷ tại Việt Nam, hàng trăm từ song âm tiết có cùng mặt chữ Hán nhưng nghĩa tiếng Trung hiện đại đã thay đổi hoàn toàn ('Từ đồng hình dị nghĩa' 同形异义词, như 困难 = khó khăn, 检讨 = bản tự kiểm điểm, 书记 = bí thư). Trong pháp lý hợp đồng, sự khác biệt một bộ thủ giữa 定金 (cọc phạt gấp đôi) và 订金 (tiền ứng trước) quyết định trực tiếp quyền lợi tài chính của doanh nghiệp.",
      conclusion:
        "Kết hợp phương pháp chiết tự Hán tự với đối chiếu thuật ngữ pháp lý – hải quan chuẩn giúp người học Việt Nam phát huy lợi thế vốn từ Hán–Việt mà không rơi vào bẫy dịch ghép âm cơ học.",
      relatedFigures: [
        { name: "Vương Lực (王力) & Nguyễn Tài Cẩn", dates: "Thế kỷ XX", role: "Hai nhà ngôn ngữ học đặt nền móng nghiên cứu lịch sử ngữ âm và từ vựng Hán–Việt" }
      ],
      relatedTexts: ["Nguyễn Tài Cẩn (1979) – Nguồn gốc và quá trình hình thành cách đọc Hán Việt", "Bộ luật Dân sự Trung Quốc (Điều 586–587)", "UCP 600 & Incoterms 2020"]
    }
  }
};
