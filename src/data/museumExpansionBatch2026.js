// ============================================================================
// KNOWLEDGE EXPANSION ENGINE — MODULE 3 (BATCH 3)
// 12 New Museum Treasures (24 -> 36 Artifacts Total in #museum)
// + Complete 5-Hotspot Guided Story Tours for Flagship Handscrolls & Paintings
// + Connects verified real photography for Chu Đậu Ceramic & Jinshi Stele
// ============================================================================

(function () {
  window.CCE_MUSEUM = window.CCE_MUSEUM || {};
  window.CCE_MUSEUM.artifacts = window.CCE_MUSEUM.artifacts || [];

  // Ensure Chu Đậu & Jinshi Stele also reference local high-res photos cleanly
  window.CCE_MUSEUM.artifacts.forEach((a) => {
    if (a.id === "chu-dau-blue-white-ceramic" && !a.imageUrl) {
      a.imageUrl = "assets/images/museum/chu-dau-ceramic.jpg";
    }
    if (a.id === "jinshi-doctoral-stele" && !a.imageUrl) {
      a.imageUrl = "assets/images/museum/jinshi-stele.jpg";
    }
  });

  const EXISTING_IDS = new Set(window.CCE_MUSEUM.artifacts.map((a) => a.id));

  const NEW_ARTIFACTS_12 = [
    {
      id: "quan-yao-vase",
      category: "ceramics",
      categoryLabel: "Ngũ Đại Danh Diêu Thời Tống",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Bình Quan Diêu Tai Xuyên Thanh Từ Thời Nam Tống",
      nameEn: "Guan Ware Celadon Vase with Tubular Handles (Southern Song)",
      nameZh: "南宋官窑青瓷贯耳瓶",
      nameZhTrad: "南宋官窯青瓷貫耳瓶",
      pinyin: "Nánsòng Guānyáo qīngcí guàn'ěrpíng",
      periodId: "song",
      periodLabel: "Nam Tống (1127–1279 SCN)",
      dateEstimate: "Thế kỷ XII–XIII (Lò Quan Tu Nội Ty & Giao Đàn Hạ tại Hàng Châu)",
      material: "Xương gốm đen giàu sắt ('Hắc thai') tráng men ngọc dày nhiều lớp ('Tử khẩu thiết túc')",
      dimensions: "Cao 23,5 cm × Đường kính đáy 9,8 cm",
      imageUrl: "assets/images/museum/quan-yao-vase.jpg",
      origin: "Hàng Châu (Lâm An), tỉnh Chiết Giang — Ngự lò dành riêng cho hoàng cung Nam Tống",
      collection: "Bảo tàng Cố Cung Quốc lập Đài Bắc & Bảo tàng Cố Cung Bắc Kinh",
      culturalSignificance:
        "Tiêu biểu cho mỹ học Nho – Đạo thanh tĩnh thời Nam Tống: không vẽ rồng phượng hay hoa văn cầu kỳ, mà đạt tới vẻ đẹp ngọc bích nội liễm nhờ kỹ thuật nung nhiều lớp men mỏng và những đường rạn tự nhiên gọi là 'Băng liệt văn'. Miệng bình lộ cốt sẫm màu ('Tử khẩu') và chân đế phơi xương đen như sắt ('Thiết túc') mô phỏng kiểu dáng bình đồng Chu–Hán cổ điển.",
      historicalSignificance:
        "Phản ánh sự thiếu hụt nguồn quặng đồng và nỗ lực phục hưng lễ chế Tam Đại của triều đình Nam Tống tại Giang Nam bằng gốm sứ ngọc.",
      hotspotAnnotations: [
        { id: "qyz-1", x: 32, y: 24, titleVi: "Tai Xuyên Cân Xứng Mô Phỏng Bình Đồng Chu Lễ", titleZh: "贯耳礼器形制", pinyin: "Guàn'ěr", category: "Hình chế Cổ điển", detail: "Hai tai ống dọc hai bên cổ bình mô phỏng bình đựng mũi tên lễ nghi thời Chu–Hán." },
        { id: "qyz-2", x: 50, y: 52, titleVi: "Vân Men Ngọc Dày & Rạn Tự Nhiên 'Kim Ty Thiết Tuyến'", titleZh: "厚釉冰裂纹", pinyin: "Bīnglièwén", category: "Kỹ nghệ Men Tống", detail: "Sự chênh lệch co giãn nhiệt giữa cốt đen và lớp men ngọc tạo thành mạng lưới vết rạn mịn tự nhiên không lặp lại." },
        { id: "qyz-3", x: 50, y: 86, titleVi: "Đặc Điểm 'Tử Khẩu Thiết Túc' Kinh Điển", titleZh: "紫口铁足", pinyin: "Zǐkǒu tiězú", category: "Giám định Chân phẩm", detail: "Viền miệng lớp men chảy mỏng để lộ ánh tím tro, chân đế không tráng men lộ cốt đất sét giàu sắt đen ánh kim." }
      ]
    },
    {
      id: "ge-yao-incense-burner",
      category: "ceramics",
      categoryLabel: "Ngũ Đại Danh Diêu Thời Tống",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Lư Đồng Cổ Gốm Ca Diêu 'Kim Ty Thiết Tuyến'",
      nameEn: "Ge Ware Censer with 'Gold Thread & Iron Wire' Crackle Glaze",
      nameZh: "宋哥窑金丝铁线贯耳尊",
      nameZhTrad: "宋哥窯金絲鐵線貫耳尊",
      pinyin: "Sòng Gēyáo jīnsī tiěxiàn zūn",
      periodId: "song",
      periodLabel: "Tống – đầu Nguyên (Thế kỷ XII–XIV)",
      dateEstimate: "Thế kỷ XII–XIV (Truyền thuyết Long Tuyền Chương Sinh Nhất Diêu)",
      material: "Gốm men tro vàng xám hai tầng rạn kép nhuộm mực và trà",
      dimensions: "Cao 16,8 cm × Rộng vai 13,2 cm",
      imageUrl: "assets/images/museum/ge-yao-incense-burner.jpg",
      origin: "Vùng Long Tuyền (Chiết Giang) / Lò truyền thế hoàng cung",
      collection: "Bảo tàng Cố Cung Bắc Kinh (故宫博物院)",
      culturalSignificance:
        "Kỳ tích biến khuyết điểm nứt men thành đỉnh cao mỹ học: nghệ nhân lợi dụng hai đợt co giãn lệch pha và nhuộm màu đối lập — các đường nứt sâu lớn nhuộm mực đen gọi là 'Thiết tuyến' (Dây sắt), xen kẽ các khe rạn nông mịn hơn nhuộm nước trà nâu vàng gọi là 'Kim ty' (Sợi vàng).",
      historicalSignificance:
        "Một trong Ngũ Đại Danh Diêu (Nhữ – Quan – Ca – Định – Quân) định hình khái niệm 'Wabi' tự nhiên không hoàn hảo của mỹ học gốm sứ Á Đông.",
      hotspotAnnotations: [
        { id: "gy-1", x: 50, y: 46, titleVi: "Mạng Rạn Kép 'Kim Ty Thiết Tuyến'", titleZh: "金丝铁线双色开片", pinyin: "Jīnsī tiěxiàn", category: "Kỹ nghệ Độc nhất", detail: "Đường nứt lớn thấm mực đen đan với đường nứt nhỏ nhuộm trà óng vàng tạo chiều sâu thấu thị qua men." },
        { id: "gy-2", x: 50, y: 74, titleVi: "Ánh Men Mờ Trầm Ẩn Như Sáp Ong ('Ngưng Chi')", titleZh: "百圾碎酥光", pinyin: "Bǎijīsuì", category: "Mỹ học Chất men", detail: "Bề mặt men không bóng gắt mà mịn lì dịu mắt như mỡ đông." },
        { id: "gy-3", x: 32, y: 26, titleVi: "Chân Đế Sắt Đen & Tai Lư Mô Phỏng Đồng Cổ", titleZh: "紫口铁足与古耳", pinyin: "Zǐkǒu tiězú", category: "Hình chế Cổ điển", detail: "Phần gờ miệng mỏng men ngả sắc tía, đáy để mộc lộ cốt đất chứa hàm lượng sắt cao đặc trưng lò Ca." }
      ]
    },
    {
      id: "ding-yao-bowl",
      category: "ceramics",
      categoryLabel: "Ngũ Đại Danh Diêu Thời Tống",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Bát Sứ Trắng Định Diêu Khắc Hoa Hài Anh Chơi Hoa",
      nameEn: "Ding Ware Ivory-White Porcelain Bowl with Carved Boys & Peony Motif",
      nameZh: "北宋定窑白瓷刻花婴戏碗",
      nameZhTrad: "北宋定窯白瓷刻花嬰戲碗",
      pinyin: "Běisòng Dìngyáo báicí yīngxìwǎn",
      periodId: "song",
      periodLabel: "Bắc Tống (960–1127 SCN)",
      dateEstimate: "Thế kỷ XI–XII",
      material: "Sứ trắng ngà nung úp ngược ('Phúc thiêu pháp') bọc viền miệng đồng ('Mang khẩu')",
      dimensions: "Cao 7,2 cm × Đường kính miệng 21,6 cm",
      imageUrl: "assets/images/museum/ding-yao-bowl.jpg",
      origin: "Khúc Dương (Khu vực Định Châu), tỉnh Hà Bắc",
      collection: "Bảo tàng Cố Cung Bắc Kinh & Victoria and Albert Museum",
      culturalSignificance:
        "Định Diêu là lò duy nhất chuyên sứ trắng trong Ngũ Đại Danh Diêu thời Tống: thành bát mỏng nhẹ như vỏ trứng, sắc men trắng ngà ấm áp ('Ngọc cốt ngà voi'), khắc chìm bằng dao trúc họa tiết em bé đùa vui bên nhánh hoa mẫu đơn sinh động không hề vẽ màu.",
      historicalSignificance:
        "Sáng kiến xếp úp chén vào hộp nung nhiều tầng ('Phúc thiêu pháp' 覆烧法) giúp tăng gấp 3 công suất lò Định Châu và ảnh hưởng tới gốm sứ xuất khẩu khắp châu Á.",
      hotspotAnnotations: [
        { id: "dy-1", x: 50, y: 20, titleVi: "Viền Bọc Đồng Đỏ Chống Mẻ Miệng ('Mang Khẩu')", titleZh: "覆烧芒口镶铜", pinyin: "Mángkǒu", category: "Kỹ thuật Nung Tống", detail: "Vì đặt úp miệng khi nung không tráng men nên viền gốm thô được bọc bằng dải đồng hoặc bạc tinh xảo." },
        { id: "dy-2", x: 50, y: 55, titleVi: "Chạm Chìm 'Bán Đao Nê' Nét Thanh Mảnh Thoát Khí", titleZh: "半刀泥刻花", pinyin: "Kèhuā", category: "Mỹ thuật Khắc chìm", detail: "Dao nghiêng một mặt tạo rãnh sâu nông đọng men tạo hiệu ứng nổi 3D dưới ánh sáng nghiêng." },
        { id: "dy-3", x: 46, y: 76, titleVi: "Giọt Men Đọng 'Lệ Ngân' Màu Trắng Ngà Ấm Áp", titleZh: "泪痕与牙白釉", pinyin: "Lèihén yòu", category: "Dấu hiệu Giám định", detail: "Dọc thân ngoài men dày thường tụ lại các vệt giọt chảy lấp lánh như giọt nến sáp trắng ngà." }
      ]
    },
    {
      id: "jun-yao-bowl",
      category: "ceramics",
      categoryLabel: "Ngũ Đại Danh Diêu Thời Tống",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Chậu Hoa Gốm Quân Diêu Men Mân Côi Tử ('Nhất Sắc Nhập Diêu')",
      nameEn: "Jun Ware Rose-Purple Glazed Narcissus Basin",
      nameZh: "宋钧窑玫瑰紫釉菱花式花盆",
      nameZhTrad: "宋鈞窯玫瑰紫釉菱花式花盆",
      pinyin: "Sòng Jūnyáo méiguīzǐ huāpén",
      periodId: "song",
      periodLabel: "Bắc Tống muộn – Kim triều (TK XII)",
      dateEstimate: "Thế kỷ XII",
      material: "Men khoáng đồng tự biến sắc trong lửa ('Diêu biến' 窑变) sắc tím hoa hồng – lam thiên thanh",
      dimensions: "Cao 14,5 cm × Miệng cánh hoa lăng rộng 25,8 cm",
      imageUrl: "assets/images/museum/jun-yao-bowl.jpg",
      origin: "Vũ Châu (Quân Đài), tỉnh Hà Nam",
      collection: "Bảo tàng Cố Cung Đài Bắc & Đại học London Percival David",
      culturalSignificance:
        "Bước đột phá công nghệ gốm sứ từ 'men một màu đơn sắc' sang 'men đa sắc biến ảo trong lò' (**Diêu biến**): các hạt oxit đồng trong men khử oxi biến đổi không kiểm soát dưới 1.300°C thành dải ánh tím hoa hồng rực rỡ pha lam ngọc không bao giờ trùng lặp hai chiếc.",
      historicalSignificance:
        "Cổ nhân có câu 'Hoàng kim hữu giá Quân vô giá' (Vàng có thể định giá chứ gốm Quân Diêu là vô giá) vì sắc tím tự nhiên độc bản.",
      hotspotAnnotations: [
        { id: "jyz-1", x: 48, y: 45, titleVi: "Hiệu Ứng Hóa Học 'Diêu Biến' Ôxit Đồng", titleZh: "入窑一色，出窑万彩", pinyin: "Yáobiàn", category: "Khoa học Vật liệu Cổ", detail: "Phản ứng khử đồng keo tạo tán xạ ánh sáng Rayleigh thành vệt tím hoa hồng giữa nền lam ngọc." },
        { id: "jyz-2", x: 50, y: 80, titleVi: "Đường Rạn Ngắn Uốn Lượn 'Khâu Dẫn Tẩu Nê Văn'", titleZh: "蚯蚓走泥纹", pinyin: "Qiūyǐn zǒuníwén", category: "Dấu hiệu Giám định", detail: "Vết men dày tự liền lại sau khi nứt trong quá trình nung giống đường giun bò trên bùn." },
        { id: "jyz-3", x: 26, y: 24, titleVi: "Miệng Cánh Hoa Lăng & Số Hiệu Triện Đáy Cung Đình", titleZh: "葵花口与底足刻数", pinyin: "Kuíhuākǒu", category: "Nghi lễ Quân Diêu", detail: "Mỗi chậu hoa Quân quan triều khắc một chữ số (từ 1 đến 10) dưới đáy tương ứng kích thước chậu trồng thủy tiên." }
      ]
    },
    {
      id: "siyang-fangzun",
      category: "bronze",
      categoryLabel: "Thanh đồng Khí Thượng cổ",
      featuredCollections: ["ceramics", "collections"],
      nameVi: "Tứ Dương Phương Tôn Thời Văn Hóa Ân Khư Nhà Thương",
      nameEn: "Four-Goat Bronze Square Zun (Shang Dynasty Masterpiece)",
      nameZh: "商代晚期四羊方尊",
      nameZhTrad: "商代晚期四羊方尊",
      pinyin: "Shāngdài Sìyáng Fāngzūn",
      periodId: "xia-shang-zhou",
      periodLabel: "Cuối Nhà Thương (Thế kỷ XII–XI TCN)",
      dateEstimate: "Khoảng 1200–1046 TCN (Khai quật tại Ninh Hương, Hồ Nam năm 1938)",
      material: "Hợp kim đồng – thiếc – chì đúc khuôn ghép khối liền công nghệ cực cao",
      dimensions: "Cao 58,3 cm × Miệng rộng 52,4 cm × Trọng lượng 34,5 kg",
      imageUrl: "assets/images/museum/siyang-fangzun.jpg",
      origin: "Khai quật tại Hoàng Tài (Ninh Hương, Hồ Nam) — giao thoa văn hóa Thương Trung Nguyên với lưu vực Trường Giang",
      collection: "Bảo tàng Quốc gia Trung Quốc (Bắc Kinh)",
      culturalSignificance:
        "Được tôn là 'Vương giả của Nghệ thuật Thanh đồng Bốn Chân Đúc Khuôn': bốn góc thân bình vuông nhô ra bốn tượng dê cuộn sừng sống động như bước ra khỏi nền hoa văn *Thao thiết* và *Quỳ long* chạm nổi tầng tầng lớp lớp.",
      historicalSignificance:
        "Chứng minh lưu vực trung du Trường Giang thời Ân Thương đạt trình độ luyện kim đúc ghép đa khối ('Phân chú tiếp đúc') tinh xảo không kém kinh đô An Dương.",
      hotspotAnnotations: [
        { id: "syf-1", x: 30, y: 42, titleVi: "Đầu Bốn Chú Dê Cuộn Sừng Sống Động Tầng Nổi", titleZh: "高浮雕四羊首", pinyin: "Sìyángshǒu", category: "Điêu khắc Bốn góc", detail: "Dê là linh vật cát tường ('Dương' 羊 đồng âm 'Tường' 祥 trong chữ Hán cổ), gắn kết hoàn hảo vai vuông và thân tròn." },
        { id: "syf-2", x: 50, y: 65, titleVi: "Hoa Văn Thao Thiết & Mỏ Rồng Phủ Kín Mặt Vách", titleZh: "饕餮纹与扉棱", pinyin: "Tāotièwén", category: "Mỹ học Thương Chu", detail: "Toàn bộ thân tôn không chừa trống một cm nào nhờ những đường gân 'Phi lăng' che khít vết ghép khuôn." },
        { id: "syf-3", x: 50, y: 18, titleVi: "Cổ Loa Xòe Rộng Khắc Rồng Quỳ Hai Đầu Đối Xứng", titleZh: "喇叭形阔口蕉叶纹", pinyin: "Jiāoyèwén", category: "Kỹ thuật Phức hợp", detail: "Vành miệng loe lớn trang trí họa tiết lá chuối thanh thoát, cân bằng khối tượng dê đồ sộ bên dưới." }
      ]
    },
    {
      id: "jinlv-yuyi",
      category: "ceramics",
      categoryLabel: "Ngọc khí Hoàng gia Lưỡng Hán",
      featuredCollections: ["collections"],
      nameVi: "Áo Quan Ngọc Khâu Chỉ Vàng (*Kim Lũ Ngọc Y*) của Trung Sơn Tĩnh Vương",
      nameEn: "Jade Burial Suit Sewn with Gold Thread of Prince Liu Sheng (Western Han)",
      nameZh: "西汉中山靖王刘胜金缕玉衣",
      nameZhTrad: "西漢中山靖王劉勝金縷玉衣",
      pinyin: "Xīhàn Jīnlǚ Yùyī",
      periodId: "qin-han",
      periodLabel: "Tây Hán (~113 TCN)",
      dateEstimate: "Năm 113 TCN (Khai quật tại lăng mộ vách núi Mãn Thành, Hà Bắc năm 1968)",
      material: "2.498 miếng ngọc Hòa Điền mài phẳng đục 4 lỗ góc, khâu bằng ~1.100 gam chỉ vàng ròng",
      dimensions: "Dài 188 cm — chia 5 khối giáp phủ kín đầu, áo, tay áo, quần và giày",
      imageUrl: "assets/images/museum/jinlv-yuyi.jpg",
      origin: "Mãn Thành (Hà Bắc) — Lăng mộ Lưu Thắng (anh trai Hán Vũ Đế)",
      collection: "Bảo tàng Tỉnh Hà Bắc (Thạch Gia Trang)",
      culturalSignificance:
        "Kết tinh tín ngưỡng bảo vệ bất hủ thân xác thời Tây Hán ('Ngọc năng ngăn thi thể bất hủ'): để làm hoàn chỉnh một bộ giáp ngọc vừa khít thân hình người quá cố cần một xưởng thợ ngọc cung đình làm liên tục hơn 10 năm với sai số khoan lỗ góc dưới 1mm.",
      historicalSignificance:
        "Bằng chứng khảo cổ giải mã chế độ tang lễ phân cấp bằng ngọc thời Hán: Hoàng đế & chư hầu thân vương dùng Chỉ Vàng (*Kim lũ*), tam công dùng Chỉ Bạc (*Ngân lũ*), thấp hơn dùng Chỉ Đồng (*Đồng lũ*).",
      hotspotAnnotations: [
        { id: "jly-1", x: 50, y: 24, titleVi: "Mặt Nạ Ngọc & Mũ Giáp Khâu Từng Miếng Vuông Tam Giác", titleZh: "玉面罩连缀", pinyin: "Yùmiànzhào", category: "Kỹ nghệ Chế tác Ngọc", detail: "Hàng trăm miếng ngọc mỏng từ Tân Cương cắt uốn vừa vặn hốc mắt, sống mũi." },
        { id: "jly-2", x: 50, y: 60, titleVi: "2.498 Phiến Ngọc Khâu 1,1 kg Sợi Vàng Ròng", titleZh: "金丝连缀二千四百余片", pinyin: "Jīnlǚ liánzhuì", category: "Lễ chế Tây Hán", detail: "Từng sợi chỉ vàng uốn xoắn giữ khoảng hở hợp lý tránh nứt gãy khi đặt vào quan tài gỗ." },
        { id: "jly-3", x: 50, y: 84, titleVi: "Ủng Ngọc Đóng Kín Gót Chân & Mười Ngón Tay", titleZh: "玉靴与九窍玉塞", pinyin: "Jiǔqiào yùsāi", category: "Tín ngưỡng Bất tử", detail: "Phần chân giáp ngọc nối với 9 nút bịt khiếu bằng ngọc Bích nhằm giữ 'tinh khí' không thoát ra khỏi cơ thể." }
      ]
    },
    {
      id: "pingfu-tie",
      category: "calligraphy",
      categoryLabel: "Tam Hy Đường Pháp Thiếp & Cổ Thư",
      featuredCollections: ["calligraphy", "collections"],
      nameVi: "《Bình Phục Thiếp》 của Lục Cơ — Thủ Bản Thư Pháp Giấy Cổ Nhất Còn Tồn Tại",
      nameEn: "Consolation Letter (Píngfù Tiè) by Lu Ji — Earliest Extant Chinese Paper Calligraphy",
      nameZh: "西晋陆机《平复帖》",
      nameZhTrad: "西晉陸機《平復帖》",
      pinyin: "Xījìn Lù Jī Píngfù Tiè",
      periodId: "jin-northern-southern",
      periodLabel: "Tây Tấn (~300 SCN)",
      dateEstimate: "Cuối thế kỷ III – đầu IV SCN (Hơn 1.700 năm tuổi)",
      material: "Mực nho trên giấy gai thô thời Tây Tấn ('Ma chỉ'), 9 dòng gồm 84 chữ Chương Thảo",
      dimensions: "Cao 23,7 cm × Dài 20,6 cm",
      imageUrl: "assets/images/museum/pingfu-tie.jpg",
      origin: "Bức thư thăm hỏi sức khỏe bạn bè viết bằng ngòi bút cọ tù (Ngưu vĩ bút / Trúc bút sơ khai) của nhà văn Lục Cơ",
      collection: "Bảo tàng Cố Cung Bắc Kinh (Khởi công phục chế & trưng bày hiếm)",
      culturalSignificance:
        "Được tôn là 'Tổ thiếp của thiên hạ thư pháp' (Đứng trước cả Vương Hy Chi *Lan Đình Tự* hơn nửa thế kỷ): nét chữ **Chương Thảo** (thể chuyển giao từ Lệ thư sang Thảo thư hiện đại) cứng cỏi ngây ngô tự nhiên như cành cây cổ thụ không uốn éo hoa mỹ — ghi dấu quá trình chuyển hóa lịch sử của chữ viết Trung Hoa.",
      historicalSignificance:
        "Vượt qua biến cố 1.700 năm chiến loạn (từng qua tay Tống Huy Tông và triều Thanh), được nhà sưu tầm Trương Bá Câu kiên quyết bảo lưu không bán ra nước ngoài rồi hiến tặng Nhà nước Trung Quốc năm 1956.",
      hotspotAnnotations: [
        { id: "pft-1", x: 46, y: 42, titleVi: "Thể Chương Thảo Cổ Cứng Cỏi ('Bất Kết Bất Liên')", titleZh: "章草古意笔法", pinyin: "Zhāngcǎo", category: "Chuyển tiếp Thư thể", detail: "Các chữ giữ nét đứt gãy độc lập từng chữ theo dư âm Lệ thư thay vì nối liền như Kim thảo đời Đường." },
        { id: "pft-2", x: 18, y: 72, titleVi: "Ấn Triện Song Rồng Thời Bắc Tống Huy Tông & Trương Bá Câu", titleZh: "宣和御玺及历代题跋", pinyin: "Xuānhé guǎnbǎo", category: "Giám định Sử học", detail: "Dấu triện hoàng gia Bắc Tống và bài đề chữ vàng 'Lục Cơ Bình Phục Thiếp' của chính Tống Huy Tông." },
        { id: "pft-3", x: 74, y: 36, titleVi: "Chất Giấy Gai Thô 'Ma Chỉ' Hơn 1.700 Năm Tuổi", titleZh: "西晋秃笔麻纸纹理", pinyin: "Mázhǐ bǐyùn", category: "Vật liệu Cổ thư", detail: "Mặt giấy sần thớ đay kết hợp bút cọ ngọn ngắn không nhọn tạo nên vẻ mộc mạc trầm tĩnh độc nhất vô nhị." }
      ]
    },
    {
      id: "zhongqiu-tie",
      category: "calligraphy",
      categoryLabel: "Tam Hy Đường Pháp Thiếp & Cổ Thư",
      featuredCollections: ["calligraphy", "collections"],
      nameVi: "《Trung Thu Thiếp》 — Bảo Vật 'Tam Hy Đường' của Vương Hiến Chi",
      nameEn: "Mid-Autumn Letter (Zhōngqiū Tiè) — One of Qianlong's Three Rarities",
      nameZh: "东晋王献之《中秋帖》（三希之二）",
      nameZhTrad: "東晉王獻之《中秋帖》（三希之二）",
      pinyin: "Dōngjìn Wáng Xiànzhī Zhōngqiū Tiè",
      periodId: "jin-northern-southern",
      periodLabel: "Đông Tấn (Chân tích / Bản lâm mô thời Tống Mễ Phất)",
      dateEstimate: "Nguyên bản Thế kỷ IV SCN / Bản trúc chỉ mô phỏng Thế kỷ XI",
      material: "Mực đậm trên giấy trúc Giang Nam, 3 dòng ngắn 22 chữ Hành–Thảo 'Nhất bút thư'",
      dimensions: "Cao 27 cm × Dài 11,9 cm (kèm quyển bồi bạt dài hơn 3 mét)",
      imageUrl: "assets/images/museum/zhongqiu-tie.jpg",
      origin: "Vương Hiến Chi (con trai 'Thư Thánh' Vương Hy Chi), được Hoàng đế Càn Long đưa vào Tam Hy Đường Tử Cấm Thành năm 1746",
      collection: "Bảo tàng Cố Cung Bắc Kinh (Thủ đô Bắc Kinh)",
      culturalSignificance:
        "Tiêu biểu cho cuộc cách mạng bút pháp **Nhất bút thư** (一笔书 — viết liền mạch không nhấc bút kéo nối hai–ba chữ vào cùng một hơi thở): khí lực phóng khoáng mạnh mẽ tương phản rõ nét với vẻ nho nhã cân bằng của người cha Vương Hy Chi.",
      historicalSignificance:
        "Cùng với *Khoái Tuyết Thời Tình Thiếp* (nay ở Đài Bắc) và *Bá Viễn Thiếp*, tạo thành bộ ba Tam Hy Đường lừng danh — và được mua chuộc hồi hương từ Hồng Kông về Bắc Kinh năm 1951.",
      hotspotAnnotations: [
        { id: "zqt-1", x: 50, y: 45, titleVi: "Lối Viết Liền Hơi 'Nhất Bút Thư' Của Tiểu Vương", titleZh: "王献之一笔书神韵", pinyin: "Yībǐshū", category: "Cách mạng Hành–Thảo", detail: "Chỉ vỏn vẹn 22 chữ ('Trung thu bất phục tương kiến...') nhưng mạch khí cuộn trào như dải lụa múa." },
        { id: "zqt-2", x: 25, y: 30, titleVi: "Bản Đề Của Mễ Phất & Vua Càn Long Khắc Tam Hy Đường", titleZh: "乾隆三希堂御题", pinyin: "Sānxītáng", category: "Lịch sử Sưu tầm", detail: "Đoạn bạt chứng minh quá trình lưu lạc rồi tái ngộ tại Tử Cấm Thành." },
        { id: "zqt-3", x: 76, y: 70, titleVi: "Tranh Hoa Họa Vẽ Phụ Bồi & Triện Ấn Hoàng Gia Thanh Triều", titleZh: "竹纸墨色与藏印", pinyin: "Zhúzhǐ mòsè", category: "Giám định Vật liệu", detail: "Chất mực đen bóng bám trên giấy trúc mềm (tiết lộ dấu ấn lâm mô tuyệt kỹ thời Bắc Tống)." }
      ]
    },
    {
      id: "boyuan-tie",
      category: "calligraphy",
      categoryLabel: "Tam Hy Đường Pháp Thiếp & Cổ Thư",
      featuredCollections: ["calligraphy", "collections"],
      nameVi: "《Bá Viễn Thiếp》 của Vương Tuân — Chân Tích Duy Nhất Còn Lại Trong Tam Hy Đường",
      nameEn: "Letter to Boyuan (Bóyuǎn Tiè) by Wang Xun — Sole Surviving Authentic Eastern Jin Paper Work",
      nameZh: "东晋王珣《伯远帖》（三希之三）",
      nameZhTrad: "東晉王珣《伯遠帖》（三希之三）",
      pinyin: "Dōngjìn Wáng Xún Bóyuǎn Tiè",
      periodId: "jin-northern-southern",
      periodLabel: "Đông Tấn (~380–400 SCN)",
      dateEstimate: "Cuối thế kỷ IV SCN",
      material: "Mực nho trên giấy Tuyên cổ thời Tấn, 5 dòng 47 chữ Hành thư thanh tú tự nhiên",
      dimensions: "Cao 25,1 cm × Dài 17,2 cm",
      imageUrl: "assets/images/museum/boyuan-tie.jpg",
      origin: "Vương Tuân (cháu họ Vương Hy Chi) gửi thăm hỏi thân thích Bá Viễn",
      collection: "Bảo tàng Cố Cung Bắc Kinh",
      culturalSignificance:
        "Chân tích giấy viết tay **duy nhất thực sự do danh nhân thời Đông Tấn trực tiếp cầm bút viết** trong bộ *Tam Hy Đường* (hai bản kia đều là bản khắc mô thời Đường–Tống!): từng nét móc phẩy linh hoạt tự do, chuyển động bút lông lanh lẹ, giữ nguyên hơi thở văn nhân Tấn triều.",
      historicalSignificance:
        "Đổng Kỳ Xương thời Minh xem đây là chứng cứ vàng để nghiên cứu thư pháp Đông Tấn chưa qua tay thợ đồ lại đời sau.",
      hotspotAnnotations: [
        { id: "byt-1", x: 50, y: 40, titleVi: "Bút Đạm Hành Thư Chân Tích Thế Kỷ IV", titleZh: "东晋真迹墨韵", pinyin: "Xíngshū zhēnjì", category: "Chân phẩm Tấn triều", detail: "Vết mực có chỗ khô nhạt chỗ đẫm ướt chứng tỏ bút viết trực tiếp trên mặt giấy xơ tự nhiên thời Đông Tấn." },
        { id: "byt-2", x: 22, y: 65, titleVi: "Lời Bình Giám Định Kinh Điển Của Đổng Kỳ Xương & Thẩm Châu", titleZh: "明清题跋鉴藏", pinyin: "Jiàncáng tíbá", category: "Lịch sử Truyền thừa", detail: "Hàng chữ nhỏ bên trái do danh họa Đổng Kỳ Xương chép tôn vinh tài hoa nhà họ Vương." },
        { id: "byt-3", x: 78, y: 28, titleVi: "Ngự Bút Càn Long Đề 'Giang Tả Phong Lưu' Đầu Cuộn", titleZh: "乾隆御题引首", pinyin: "Jiāngzuǒ fēngliú", category: "Tam Hy Đường Ký", detail: "Dòng dẫn đầu cuộn do Càn Long đích thân đề tặng khi hợp bích ba bảo vật thư pháp đất Ngụy–Tấn." }
      ]
    },
    {
      id: "daxiguan-ding",
      category: "bronze",
      categoryLabel: "Thanh đồng Khí Thượng cổ",
      featuredCollections: ["collections"],
      nameVi: "Đại Khắc Đỉnh Thời Tây Chu (Khắc 290 Chữ Kim Văn Hiếm Quý)",
      nameEn: "Great Ke Bronze Tripod Ding (Da Ke Ding) with 290-Character Inscription",
      nameZh: "西周大克鼎",
      nameZhTrad: "西周大克鼎",
      pinyin: "Xīzhōu Dàkè Dǐng",
      periodId: "xia-shang-zhou",
      periodLabel: "Trung kỳ Tây Chu (Khoảng thế kỷ X–IX TCN)",
      dateEstimate: "Thời Chu Hiếu Vương (~890 TCN, khai quật năm 1890 tại Phù Phong, Thiểm Tây)",
      material: "Đồng thanh đúc nguyên khối hoa văn gợn sóng ('Ba khúc văn' & 'Thiết khúc văn')",
      dimensions: "Cao 93,1 cm × Đường kính miệng 75,6 cm × Trọng lượng 201,5 kg",
      imageUrl: "assets/images/museum/daxiguan-ding.jpg",
      origin: "Bảo Kê / Phù Phong (Thiểm Tây) — của đại thần Thiện phu Khắc dâng tế tổ phụ Sư Hoa Phủ",
      collection: "Bảo tàng Thượng Hải (Thủ kho 'Tam Đại Đỉnh' cùng Mao Công Đỉnh)",
      culturalSignificance:
        "Đỉnh đồng Tây Chu hoàn chỉnh bậc nhất về chuyển biến mỹ học: từ nét dữ dội uy hiếp thần linh *Thao thiết* thời Thương sang nét hoa văn gợn sóng hình học đều đặn trật tự mang tinh thần *Chu Lễ*, đi kèm bài văn Kim văn 290 chữ khắc chia ô kẻ dọc ngang cực kỳ đẹp mắt trong lòng vạc.",
      historicalSignificance:
        "Bài minh văn chia đôi: phần đầu ca tụng tổ phụ; phần sau chép nguyên bản sắc lệnh ban thưởng ruộng đất, nô tỳ và lễ phục của Thiên tử nhà Chu — tư liệu sơ cấp về chế độ Phong kiến Tây Chu.",
      hotspotAnnotations: [
        { id: "dkd-1", x: 50, y: 38, titleVi: "290 Chữ Kim Văn Kẻ Ô Vuông Thư Pháp Hoàn Mỹ", titleZh: "二百九十字金文方格铭文", pinyin: "Jīnwén míngwén", category: "Thư pháp Kim văn", detail: "Khác với chữ Thương–Chu sớm kích thước lộn xộn, chữ khắc bên trong Đại Khắc Đỉnh đều tăm tắp báo hiệu chữ Tiểu Triện." },
        { id: "dkd-2", x: 50, y: 74, titleVi: "Hoa Văn Sóng Gợn 'Ba Khúc Văn' Đầy Tính Trật Tự Chu Lễ", titleZh: "环带波曲纹", pinyin: "Bōqūwén", category: "Mỹ học Tây Chu", detail: "Thay quái thú bằng những dải sóng nhịp nhàng biểu trưng trật tự lễ nhạc." },
        { id: "dkd-3", x: 28, y: 84, titleVi: "Ba Chân Thú Khắc Nổi Thao Thiết Vững Chãi 201,5 kg", titleZh: "三兽首蹄形鼎足", pinyin: "Shòutí dǐngzú", category: "Kiến trúc Luyện đồng", detail: "Ba chân vạc hình vó thú khỏe khoắn chống đỡ trọng lượng hơn 2 tạ suốt gần ba thiên niên kỷ." }
      ]
    },
    {
      id: "zhaoqing-duanyan-inkstone",
      category: "calligraphy",
      categoryLabel: "Văn Phòng Tứ Bảo Hoàng gia",
      featuredCollections: ["calligraphy", "collections"],
      nameVi: "Nghiên Mực Đá Đoan Khê Long Vĩ Chạm Rồng Mây Thời Thanh",
      nameEn: "Imperial Duan Inkstone with Carved Dragon-and-Clouds Relief (Qing)",
      nameZh: "清代端溪云龙石渠砚",
      nameZhTrad: "清代端溪雲龍石渠硯",
      pinyin: "Qīngdài Duānxī yúnlóng yàn",
      periodId: "qing",
      periodLabel: "Thế kỷ XVIII (Triều Thanh Càn Long)",
      dateEstimate: "Thời Càn Long (~1750–1780)",
      material: "Đá tía tự nhiên khe Đoan Khê Lão Khanh (Triệu Khánh, Quảng Đông) kèm chấm mắt chim công ('Thạch nhãn')",
      dimensions: "Dài 24,2 cm × Rộng 16,4 cm × Dày 3,2 cm",
      imageUrl: "assets/images/museum/zhaoqing-duanyan-inkstone.jpg",
      origin: "Mỏ đá Lão Khanh dưới đáy sông Tây Giang (Triệu Khánh)",
      collection: "Bảo tàng Cố Cung & Bảo tàng Tỉnh Quảng Đông",
      culturalSignificance:
        "Đứng đầu 'Tứ đại Danh nghiên' Trung Hoa nhờ tinh thể sét mịn chặt ở cấp độ vi mô: vừa tạo ma sát nhẹ mài mực đen sánh mịn nhanh mà không mòn sợi lông dê mềm, vừa có 'Băng văn' và chấm mắt thạch nhãn xanh ngọc bích tự nhiên.",
      historicalSignificance:
        "Minh chứng cho mối liên hệ chặt chẽ giữa thủ công khai thác đá quý Hoa Nam và văn hóa thư họa kinh đô Bắc Kinh – Giang Nam.",
      hotspotAnnotations: [
        { id: "dyi-1", x: 52, y: 48, titleVi: "Mặt Nghiên Láng Mịn Chứa 'Nhãn Thạch' Tự Nhiên", titleZh: "翡翠石眼与砚堂", pinyin: "Shíyǎn", category: "Địa chất Quý hiếm", detail: "Vết kết tinh khoáng sét lục bảo tự nhiên trong phiến đá hàng trăm triệu năm." },
        { id: "dyi-2", x: 30, y: 26, titleVi: "Rãnh Chứa Mực ('Mặc Trì') Khắc Nổi Mây Rồng Vờn Ngọc", titleZh: "墨池云龙雕工", pinyin: "Mòchí", category: "Điêu khắc Hoa Nam", detail: "Rãnh trũng chứa nước mực khắc mây cuộn uyển chuyển bằng mũi đục sắt." },
        { id: "dyi-3", x: 74, y: 72, titleVi: "Hộp Gỗ Tử Đàn Chạm Lộng Kèm Minh Tự Bảo Tồn Mặt Nghiên", titleZh: "紫檀配匣与铭刻", pinyin: "Zǐtán yànhé", category: "Bảo quản Hoàng gia", detail: "Hộp gỗ trắc quý đậy kín giữ ẩm cho mặt đá Lão Khanh, tránh bay hơi nước mực trong mùa hanh khô phương Bắc." }
      ]
    },
    {
      id: "guqin-jiuxiao-huanpei",
      category: "calligraphy",
      categoryLabel: "Cổ nhạc & Tứ nghệ Văn nhân",
      featuredCollections: ["collections"],
      nameVi: "Đàn Cổ Cầm *Cửu Tiêu Hoàn Bội* Đời Thịnh Đường (756 SCN)",
      nameEn: "The 'Nine Heavens Encircling Pendants' Tang Dynasty Guqin (756 CE)",
      nameZh: "盛唐雷威制《九霄环佩》古琴",
      nameZhTrad: "盛唐雷威制《九霄環佩》古琴",
      pinyin: "Shèngtáng Jiǔxiāo Huánpèi Qín",
      periodId: "sui-tang",
      periodLabel: "Thịnh Đường (Năm Chí Đức nguyên niên 756 SCN)",
      dateEstimate: "Năm 756 SCN (Chế tác tại Thành Đô bởi danh tượng Lôi Uy đời Đường Túc Tông)",
      material: "Mặt gỗ ngô đồng cổ sơn mài đen pha sừng hươu – bột vàng ('Bát bảo khôi') rạn vết vỏ mai rùa ('Xà phúc đoạn văn')",
      dimensions: "Dài 124 cm × Rộng vai 21,8 cm — 7 dây, 13 nút huy ốc xà cừ",
      imageUrl: "assets/images/museum/guqin-jiuxiao-huanpei.jpg",
      origin: "Xưởng đàn gia tộc Lôi Thị tại đất Thục (Tứ Xuyên)",
      collection: "Bảo tàng Cố Cung Bắc Kinh (Đứng đầu Tứ đại Danh cầm Trung Hoa)",
      culturalSignificance:
        "Cây đàn dây quý giá bậc nhất thế giới còn phát ra âm thanh vang dội hoàn hảo sau gần 1.270 năm: tiếng Tán âm trầm hùng như chuông đồng cổ, tiếng Phiếm âm trong vắt như ngọc khánh — hội tụ kỹ nghệ chọn gỗ mục gió thổi tự nhiên trên núi Tứ Xuyên của dòng họ Lôi.",
      historicalSignificance:
        "Lưu giữ bài minh khắc của đại danh nhân Tô Thức, Hoàng Đình Kiên (Bắc Tống) ở đáy đàn trong kho tàng Di sản Cổ Cầm UNESCO.",
      hotspotAnnotations: [
        { id: "jxh-1", x: 48, y: 38, titleVi: "Đầu Đàn Dáng 'Phục Hy Thức' & Vết Sơn Mài Vết Rắn Ngàn Năm", titleZh: "蛇腹断纹漆面", pinyin: "Shéfù duànwén", category: "Giám định Đàn Cổ", detail: "Những vết rạn ngang thanh mảnh trên lớp sơn sống trộn bột sừng nai là bằng chứng xác thực tuổi đời trên 1.000 năm." },
        { id: "jxh-2", x: 76, y: 55, titleVi: "Bút Tích Khắc Đáy 'Cửu Tiêu Hoàn Bội' & Bài Đề Của Tô Thức", titleZh: "苏轼黄庭坚铭文题刻", pinyin: "Qínfù míngkè", category: "Văn nhân Truyền thừa", detail: "Chứng thực chủ nhân từng sở hữu từ thời Đường qua tay Tô Đông Pha tới Cố Cung." },
        { id: "jxh-3", x: 24, y: 48, titleVi: "13 Nút Huy Ốc Xà Cừ & Khe Đỡ Dây 'Nhạc Sơn' Cổ", titleZh: "十三螺钿徽位与岳山", pinyin: "Luódiàn huīwèi", category: "Cấu trúc Âm học", detail: "13 chấm ốc khảm theo tỷ lệ harmonic chuẩn xác, giúp ngón tay gảy âm bồi trong trẻo mà không cần phím chia ngăn." }
      ]
    }
  ];

  NEW_ARTIFACTS_12.forEach((item) => {
    if (!EXISTING_IDS.has(item.id)) {
      window.CCE_MUSEUM.artifacts.push(item);
      EXISTING_IDS.add(item.id);
    }
  });

  // Upgrade key paintings to ensure at least 4-5 Guided Tour Hotspots with clean (x, y) coords
  if (window.CCE_PAINTINGS && Array.isArray(window.CCE_PAINTINGS.masterpieces)) {
    const EXTRA_TOUR_HOTSPOTS = {
      "luoshenfu-tu": [
        { id: "lsf-t1", x: 16, y: 48, titleVi: "Thi Nhân Tào Thực Dừng Ngựa Bên Bờ Sông Lạc Thủy", titleZh: "曹植停驻洛水", pinyin: "Cáo Zhí tíngzhù", category: "Mở đầu Trường quyển", detail: "Khởi đầu bức tranh bằng dáng đứng trầm tư của Tào Thực bên bờ sông Lạc, mở ra không gian mộng ảo giữa cõi thực và cõi thần." },
        { id: "lsf-t2", x: 38, y: 42, titleVi: "Nữ Thần Sông Lạc Lướt Nhẹ Như Rồng Lượn ('Phiên Nhược Kinh Hồng')", titleZh: "翩若惊鸿，婉若游龙", pinyin: "Piān ruò jīnghóng", category: "Hình tượng Trung tâm", detail: "Cố Khải Chi khắc họa Lạc Thần bằng nét bút 'Xuân tàm thổ ti' (tơ tằm mùa xuân) đều mảnh bay bổng giữa dải lụa mây." },
        { id: "lsf-t3", x: 58, y: 55, titleVi: "Thần Rồng Cỡi Lục Long Chở Xe Mây Rước Thần Rời Đi", titleZh: "六龙齐首云车驾临", pinyin: "Liùlóng yúnchē", category: "Kỳ ảo Sơn thủy Cổ điển", detail: "Đoàn xe mây do sáu con rồng kéo cùng cá kình nhảy múa tạo không khí chia ly huyền thoại, còn núi non cây cối vẽ nhỏ ước lệ làm nền." },
        { id: "lsf-t4", x: 84, y: 50, titleVi: "Tào Thực Ngoảnh Nhìn Theo Xe Thần Trên Dòng Nước Chảy Xiết", titleZh: "夜不能寐临风怅望", pinyin: "Línfēng chàngwàng", category: "Đoạn kết Tự sự", detail: "Hình tượng người và cảnh nối liền bằng dải sông cuộn chảy liên hoàn — phép 'Liên hoàn họa' đầu tiên trong lịch sử mỹ thuật Á Đông." }
      ],
      "nvshi-zhentu": [
        { id: "nsz-t1", x: 20, y: 46, titleVi: "Phùng Thục Viên Tay Không Đứng Chắn Trước Con Gấu Điên Cứu Hán Nguyên Đế", titleZh: "冯媛当熊救主", pinyin: "Féngyuàn dāng xióng", category: "Đức Dũng & Khí Tiết", detail: "Trong buổi xem đấu thú, con gấu sổng chuồng lao tới ngai vua, Phùng Viên bước thẳng ra đối mặt bảo vệ Hoàng đế trong khi mọi cung tần tháo chạy." },
        { id: "nsz-t2", x: 46, y: 50, titleVi: "Người Phụ Nữ Ngồi Chải Đầu Soi Gương Đồng Khuyên Tu Đức Tâm Tính", titleZh: "人咸知修其容，莫知饰其性", pinyin: "Xiūrúng shìxìng", category: "Triết Lý Cốt Lõi", detail: "Gương đồng soi sắc đẹp bên ngoài kèm lời răn sâu sắc: ai cũng biết trang điểm dung nhan nhưng ít ai trau dồi tính nết bên trong." },
        { id: "nsz-t3", x: 70, y: 52, titleVi: "Gia Đình Sum Họp & Bài Học Dạy Con Chữ Nghĩa", titleZh: "天伦齐聚训诫", pinyin: "Tiānlún xùnjiè", category: "Luân lý Gia đình", detail: "Nét vẽ uyển chuyển kết hợp những dải lụa bay tạo cảm giác ấm áp nhưng nghiêm trang của gia phong sĩ đại phu." },
        { id: "nsz-t4", x: 88, y: 48, titleVi: "Nữ Sử Quan Cầm Bút Ghi Chép Lời Răn Cuối Cuộn", titleZh: "女史执笔书箴", pinyin: "Nǚshǐ zhíbǐ", category: "Thông điệp Cuối Quyển", detail: "Khép lại trường quyển bằng hình ảnh người nữ sử quan đứng ghi lại bài học trung thực trước quyền lực." }
      ],
      "zhanhua-shinv": [
        { id: "zhs-t1", x: 18, y: 50, titleVi: "Chú Chó Nhỏ Đùa Bên Gấu Áo La Lụa Mỏng Xuyên Thấu (Khinh La Sa Y)", titleZh: "透体薄纱与戏犬", pinyin: "Qīngluó shāyī", category: "Kỹ thuật Vẽ Lụa Đường", detail: "Chu Phưởng vẽ lớp áo khoác lụa mỏng trong suốt đến mức nhìn thấu lớp họa tiết mẫu đơn thêu vàng trên váy đỏ bên trong!" },
        { id: "zhs-t2", x: 48, y: 36, titleVi: "Trâm Hoa Mẫu Đơn, Hoa Sen & Thược Dược Cài Đỉnh Tóc Bồng Phì Mĩ", titleZh: "鬓发簪花富贵气象", pinyin: "Zānhuā shìnǚ", category: "Mỹ học Thịnh Đường", detail: "Lý tưởng vẻ đẹp tròn đầy tự tin đầy sức sống thời Đường — khác hoàn toàn dáng mảnh mai liễu yếu đời Minh Thanh." },
        { id: "zhs-t3", x: 76, y: 48, titleVi: "Cụm Hoa Bướm & Chim Hạc Dạo Chơi Trong Sân Vườn Hoàng Gia", titleZh: "鹤戏花阴庭院", pinyin: "Hè xì huāyīn", category: "Bố cục Lưu Bạch Đường", detail: "Khoảng nền để trống tạo nhịp thở thong thả quý phái cho từng bước đi nhàn tản." },
        { id: "zhs-t4", x: 90, y: 52, titleVi: "Nữ Tỳ Cầm Quạt Dài Phía Đầu Bức Tranh", titleZh: "执纨扇侍女", pinyin: "Zhíshàn shìnǚ", category: "Kết cấu Phân Trật", detail: "Đặt kích thước thị nữ nhỏ hơn các quý phi ở chính giữa — lối bố cục ước lệ tôn ti đặc trưng Đường – Tiền Tống." }
      ]
    };

    window.CCE_PAINTINGS.masterpieces.forEach((p) => {
      if (EXTRA_TOUR_HOTSPOTS[p.id]) {
        const existing = Array.isArray(p.hotspotAnnotations) ? p.hotspotAnnotations : [];
        if (existing.length < 4) {
          p.hotspotAnnotations = EXTRA_TOUR_HOTSPOTS[p.id];
        }
      }
    });
  }
})();
