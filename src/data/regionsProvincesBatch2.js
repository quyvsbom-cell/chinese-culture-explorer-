// ============================================================================
// 34-PROVINCE 12-DIMENSION ENCYCLOPEDIA — BATCH 2 (12 PROVINCES)
// An Huy, Phúc Kiến, Giang Tây, Sơn Đông, Hà Nam, Hồ Bắc, Hồ Nam,
// Quảng Đông, Hải Nam, Tứ Xuyên, Quý Châu, Vân Nam
// Standard Mandarin + Hanyu Pinyin (Tone Marks) + Hán–Việt + Vietnamese
// Zero Jyutping • 850–1,050 words per unit across all 12 Scholarly Dimensions
// ============================================================================

(function () {
  if (!window.CCE_REGIONS || !Array.isArray(window.CCE_REGIONS.provincesDirectory)) return;

  const UPGRADES = {
    "prov-anhui": {
      identity: {
        hanziSimplified: "安徽省",
        hanziTraditional: "安徽省",
        pinyin: "Ānhuī Shěng",
        hanViet: "An Huy Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "皖",
        abbreviationPinyin: "Wǎn (Hoàn)",
        abbreviationOrigin: "Tên An Huy ghép từ hai phủ trọng yếu đầu triều Thanh (1667): An Khánh Phủ (安庆府) và Huy Châu Phủ (徽州府). Chữ viết tắt 皖 (Hoàn) bắt nguồn từ nước Hoàn (皖国) thời Xuân Thu và núi Hoàn Công (Hoàn Sơn / Thiên Trụ Sơn) nằm ở An Khánh.",
        capitalCity: "Hợp Phì (合肥市 Héféi Shì – Hợp Phì)"
      },
      geographyAndClimate: {
        summary: "Nằm ở nội lục Hoa Đông trên bậc thềm thứ ba, An Huy bị dãy núi Đại Biệt Sơn và sông Hoài Hà – sông Trường Giang chia thành ba tiểu vùng rõ rệt: Hoài Bắc thuộc Bình nguyên Hoa Bắc trồng lúa mì, Giang Hoài đồi thấp quanh Hồ Sào Hồ (巢湖 – Ngũ đại hồ nước ngọt Trung Quốc), và Hoài Nam / Hoàn Nam núi non Hoàng Sơn – Cửu Hoa Sơn tráng lệ. Phía bắc đường phân chia Tần Lĩnh – Hoài Hà thuộc khí hậu ôn đới gió mùa, còn phía nam chuyển hẳn sang cận nhiệt đới ẩm.",
        causality: "Chính ranh giới địa lý thiên nhiên giữa Hoài Hà và Trường Giang khiến An Huy sở hữu 'ba linh hồn khác biệt trong một tỉnh': Hoài Bắc mang phong vị cởi mở phương Bắc, còn vùng núi Hoán Nam (Huy Châu) đất chật nhiều đồi không đủ nuôi dân nên đàn ông buộc phải ra ngoài buôn bán ('Tiền thế bất tu, sinh tại Huy Châu; thập tam tứ tuế, vãng ngoại nhất đâu'), tạo nên thế lực thương nhân Huy Thương lẫy lừng 400 năm. Khí hậu ẩm lạnh quanh sườn đá granit Hoàng Sơn đồng thời nuôi dưỡng danh trà Hoàng Sơn Mao Phong, Kỳ Môn Hồng Trà và vỏ cây thanh đàn làm giấy Tuyên Cổ độc nhất thế giới."
      },
      historicalEvolution: "Quê hương văn hóa Lão–Trang Đạo gia tại Bạc Châu và Khổng–Tống; thời Xuân Thu – Chiến Quốc phía bắc thuộc nước Tống/Sở (Thọ Xuân là kinh đô cuối cùng của nước Sở từ 241–223 TCN). Thời Tam Quốc, Hợp Phì – Tiêu Dao Tân là chiến trường trọng yếu Tào Ngụy – Đông Ngô. Từ Nam Tống đến Minh–Thanh, thương nhân Huy Châu ('Huy Thương' 徽商 Huīshāng) thao túng thị trường muối, gỗ, chè và văn phòng tứ bảo toàn quốc, xây nên những làng cổ tường đầu ngựa tường trắng ngói đen thanh nhã. Đến năm 1978, 18 hộ nông dân thôn Tiểu Cương (Phượng Dương, An Huy) ký hiệp ước khoán hộ bí mật mở màn cải cách nông thôn Đặng Tiểu Bình.",
      culturalIdentity: "Văn hóa An Huy chia làm ba mạch nguồn: Văn hóa Hoài Hà Đạo học – Kiến An (Bạc Châu, Phụ Dương), Văn hóa Hoàn Giang (Hợp Phì, Đồng Thành với Đồng Thành Phái văn xuôi cổ điển thời Thanh) và Văn hóa Huy Châu (Hoàng Sơn – Hấp Huyện – Tích Khê) – được sánh ngang với Đôn Hoàng học và Tạng học thành 'Tam đại Hiển học' khu vực của Trung Quốc nhờ bảo tồn hàng trăm nghìn khế ước gia tộc thời Minh–Thanh.",
      heritageAndLandmarks: [
        { hanzi: "黄山风景区", pinyin: "Huángshān Fēngjǐngqū", hanViet: "Hoàng Sơn Phong cảnh khu", nameVi: "Danh sơn Hoàng Sơn (UNESCO 1990)", significance: "Đứng đầu Tứ tuyệt sơn thủy Trung Hoa ('Ngũ Nhạc quy lai bất khán sơn, Hoàng Sơn quy lai bất khán Nhạc') với Kỳ tùng, Quái thạch, Vân hải, Ôn tuyền." },
        { hanzi: "皖南古村落（西递 · 宏村）", pinyin: "Xīdì · Hóngcūn", hanViet: "Tây Đệ · Hoành Thôn", nameVi: "Làng cổ Tây Đệ & Hoành Thôn (UNESCO 2000)", significance: "Kiến trúc Huy Phái tường trắng mái ngói âm dương 'Mã đầu tường' cùng hệ thống dẫn thủy nhân tạo hình con trâu tuổi đời 800 năm." },
        { hanzi: "九华山", pinyin: "Jiǔhuáshān", hanViet: "Cửu Hoa Sơn", nameVi: "Phật giáo Danh sơn Cửu Hoa Sơn", significance: "Một trong Tứ đại Danh sơn Phật giáo Trung Hoa, đạo tràng thờ Địa Tạng Vương Bồ Tát gắn liền giai thoại thiền sư Kim Kiều Giác." },
        { hanzi: "明中都皇故城与皇觉寺", pinyin: "Míng Zhōngdū Gùchéng", hanViet: "Minh Trung Đô (Phượng Dương)", nameVi: "Di tích Minh Trung Đô tại Phượng Dương", significance: "Kinh đô đầu tiên Chu Nguyên Chương khởi công xây dựng làm nguyên mẫu quy hoạch cho Cố Cung Nam Kinh và Bắc Kinh." },
        { hanzi: "安徽博物院 · 三河古镇", pinyin: "Ānhuī Bówùyuàn", hanViet: "An Huy Bác Vật Viện (Chủ Đỉnh Sở Khí)", nameVi: "Bảo tàng An Huy & Cổ trấn Tam Hà", significance: "Nơi lưu giữ Sở Đại Đỉnh (Đúc Khách Đỉnh) nặng thứ hai chỉ sau Hậu Mẫu Mậu Đỉnh cùng kiến trúc Huy Khẩu cổ." }
      ],
      intangibleHeritage: "Nghệ thuật Văn phòng Tứ bảo toàn thư (Giấy Tuyên 宣纸 ở Kính Huyện bền 1.000 năm gọi là 'Chỉ thọ thiên niên', Mực Huy 徽墨, Nghiên Hấp 歙砚); Hoàng Mai hí (黄梅戏 Huángméixì) ngọt ngào trong trẻo vùng An Khánh; nghệ thuật chạm gỗ – chạm gạch – chạm đá Tam Điêu Huy Châu.",
      culinaryCulture: {
        styleOverview: "Huy Thái (徽菜 Huīcài) – một trong Bát Đại Thái Hệ nổi danh với nguyên liệu núi rừng măng khô, nấm đá, thịt muối, sử dụng hỏa công hầm om nhiều dầu nhẹ nước tương để giữ nhiệt và vị đậm đà vùng sơn cước.",
        signatureDishes: [
          { hanzi: "臭鳜鱼（腌鲜鳜鱼）", pinyin: "Chòu guìyú", hanViet: "Xú quế ngư (Cá quế ủ muối lên men nhẹ)", description: "Món quốc bảo Huy Châu: cá quế tẩm muối nhạt ủ gỗ thông vừa lên men tạo mùi đặc trưng nhưng thịt trắng săn thành múi như tỏi, kho tỏi ớt thơm ngào ngạt." },
          { hanzi: "徽州毛豆腐", pinyin: "Huīzhōu máodòufu", hanViet: "Huy Châu mao đậu hủ", description: "Đậu phụ lên men phủ lớp tơ nấm trắng mịn (không độc hại) đem rán áp chảo vàng trong dầu cải thơm lừng ăn kèm tương ớt giòn bùi." },
          { hanzi: "李鸿章杂烩", pinyin: "Lǐ Hóngzhāng záhuì", hanViet: "Lý Hồng Chương tạp hội", description: "Món ninh thập cẩm hải sâm, bào ngư, bong bóng cá, giăm bông Kim Hoa, măng trúc và trứng cút mang tên đại thần Lý Hồng Chương (quê Hợp Phì)." },
          { hanzi: "黄山炖鸽", pinyin: "Huángshān dùnge", hanViet: "Hoàng Sơn đốn cáp", description: "Bồ câu núi hầm cùng củ mài rừng Hoàng Sơn và kỷ tử trong thố đất giữ trọn nước dùng trong ngọt thanh." },
          { hanzi: "芜湖虾子面", pinyin: "Wúhú xiāzǐmiàn", hanViet: "Vu Hồ hà tử diện", description: "Mì mảnh nấu trong nước hầm xương thơm nồng cùng trứng tôm sông Trường Giang rang vàng giòn." }
        ]
      },
      economyAndIndustry: "Hợp Phì đang tạo nên 'Kỳ tích Hợp Phì' trong đầu tư công nghệ cao: trở thành trung tâm hàng đầu Trung Quốc về màn hình OLED (BOE), bộ nhớ DRAM (CXMT), xe điện (NIO, BYD, Volkswagen An Huy, Chery ở Vu Hồ), điện toán lượng tử (USTC Thung lũng Lượng tử) và phản ứng nhiệt hạch hạt nhân nhân tạo (EAST).",
      vietnamConnectivity: "Sinh viên và nghiên cứu sinh Việt Nam đặc biệt quan tâm Đại học Khoa học và Công nghệ Trung Quốc (中国科学技术大学 USTC tại Hợp Phì – thành viên C9 League top đầu vật lý, lượng tử, AI), Đại học Công nghiệp Hợp Phì (HFUT – 211/Song Nhất Lưu) và Đại học An Huy (211/Song Nhất Lưu). Hãng ô tô Chery (Vu Hồ) và doanh nghiệp linh kiện màn hình An Huy cũng đang mở rộng đầu tư lắp ráp tại Việt Nam.",
      notableFigures: [
        { hanzi: "老子与庄子", pinyin: "Lǎozǐ · Zhuāngzǐ", hanViet: "Lão Tử & Trang Tử (Bạc Châu / Mông Thành)", lifespan: "Thế kỷ VI–IV TCN", contribution: "Hai vị đại tổ sư Đạo gia triết học (tác giả *Đạo Đức Kinh* và *Nam Hoa Kinh*) đều sinh trưởng tại vùng Bắc An Huy ngày nay." },
        { hanzi: "曹操 · 华佗", pinyin: "Cáo Cāo · Huà Tuó", hanViet: "Tào Tháo & Thần y Hoa Đà (Bạc Châu)", lifespan: "Thế kỷ II–III CN", contribution: "Nhà chính trị–thi sĩ lỗi lạc Tào Tháo và bậc danh y sáng tạo Ma Phí Tán (thuốc gây mê phẫu thuật sớm) Hoa Đà đều là người Tiêu Quận (Bạc Châu)." },
        { hanzi: "包拯（包青天）", pinyin: "Bāo Zhěng", hanViet: "Bao Chửng (Bao Công – Hợp Phì)", lifespan: "999–1062", contribution: "Danh thần thanh liêm triều Bắc Tống quê Lư Châu (Hợp Phì), biểu tượng công lý Đông Á." },
        { hanzi: "朱熹（祖籍婺源/徽州）", pinyin: "Zhū Xī", hanViet: "Chu Hy (Huy Châu)", lifespan: "1130–1200", contribution: "Tư tưởng gia đại thành Lý học Tống–Minh mang dòng máu và học mạch Huy Châu." }
      ],
      travelAndLogistics: "Tháng 4–5 và tháng 10–11 Hoàng Sơn đẹp nhất với biển mây sáng rực rỡ mùa thu. Sân bay Tân Kiều Hợp Phì (HFE), Sân bay Đồn Khê Hoàng Sơn (TXN); đường sắt cao tốc Hợp Phì – Phúc Châu xuyên thẳng qua Hoàng Sơn và Hoành Thôn cực kỳ nhanh chóng. Gợi ý 4 ngày: Ngày 1 Bảo tàng An Huy Hợp Phì – Phố cổ Tam Hà; Ngày 2–3 Lên đỉnh Hoàng Sơn ngắm Nhật xuất & Hải vân; Ngày 4 Tây Đệ – Hoành Thôn – Phố cổ Đồn Khê.",
      mapCoordinates: { mapX: 602, mapY: 342, historicalCapitalEra: "Thọ Xuân (Nước Sở) · Làng cổ Huy Châu", economicCorridor: "Châu thổ Trường Giang (长三角)" }
    },
    "prov-fujian": {
      identity: {
        hanziSimplified: "福建省",
        hanziTraditional: "福建省",
        pinyin: "Fújiàn Shěng",
        hanViet: "Phúc Kiến Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "閩 / 闽",
        abbreviationPinyin: "Mǐn (Mân)",
        abbreviationOrigin: "Tên Phúc Kiến hợp từ hai châu lớn thời Đường (733): Phúc Châu (福州) và Kiến Châu (建州 – nay là Kiến Âu). Chữ viết tắt 闽 (Mân) gồm chữ 门 (cửa) bên ngoài chữ 虫 (rắn/rồng nhỏ), ghi dấu văn minh bản địa Mân Việt (闽越 Mǐnyuè) thời Bách Việt cổ đại tôn thờ vật tổ rắn ở lưu vực sông Mân Giang.",
        capitalCity: "Phúc Châu (福州市 Fúzhōu Shì – Phúc Châu)"
      },
      geographyAndClimate: {
        summary: "Nằm bên bờ Biển Đông đối diện Eo biển Đài Loan trên bậc thềm thứ ba, Phúc Kiến có địa hình 'Bát sơn nhất thủy nhất phân điền' (80% là núi non hiểm trở như dãy Vũ Di Sơn phía tây bắc). Toàn tỉnh dốc từ tây bắc xuống bờ biển khúc khuỷu giàu vịnh nước sâu vùng đông nam như vịnh Tuyền Châu, vịnh Hạ Môn và vịnh Tam Đô Áo. Khí hậu cận nhiệt đới gió mùa hải dương ấm áp quanh năm, lượng mưa dồi dào nhưng thường chịu bão biển mùa thu.",
        causality: "Núi cao chia cắt sâu khiến nội bộ Phúc Kiến hình thành nhiều nhóm phương ngôn tách biệt không thông hiểu nhau (Mân Nam, Mân Đông, Mân Bắc, Phủ Tiên, Khách Gia), đồng thời ruộng ít khiến người dân phải 'hướng ra biển cả kiếm sống' (Bát Mân Hải Thương). Để phòng cướp biển và thú dữ trong các thung lũng cô lập, người Khách Gia (Hakka) và Mân Nam sáng tạo kiến trúc Pháo đài Đất nện khép kín Thổ Lâu (土楼 Tǔlóu) chứa cả dòng tộc hàng trăm người. Rừng núi sương mù Vũ Di Sơn và An Khê đồng thời sinh ra các loại trà Ô Long (Đại Hồng Bào, Thiết Quan Âm) và Bạch Trà nổi danh toàn cầu."
      },
      historicalEvolution: "Quê hương nước Mân Việt cổ đại thời Chiến Quốc – Tây Hán (khảo cổ thành cổ Thành Thôn Vũ Di Sơn). Qua hai đợt đại di cư 'Bát tính nhập Mân' thời Vĩnh Gia (thế kỷ IV) và cuối Đường, người Hoa Bắc mang theo văn hóa Trung Nguyên giữ lại ngữ âm thượng cổ trong tiếng Mân Nam. Thời Tống–Nguyên, Tuyền Châu (泉州 – Zaytun trong ký sự Marco Polo và Ibn Battuta) trở thành thương cảng mậu dịch biển số 1 thế giới giao thương với Ả Rập, Ấn Độ và Đông Nam Á. Đầu triều Thanh, Trịnh Thành Công vượt biển từ Hạ Môn giải phóng Đài Loan; từ cuối thế kỷ XIX–XX, hàng chục triệu người Phúc Kiến di cư ra Đông Nam Á tạo thành mạng lưới Hoa kiều hùng mạnh.",
      culturalIdentity: "Văn hóa Bát Mân Hải Dương (八闽海洋文化): kết hợp đạo đức tông tộc khép kín chặt chẽ (gia phả, từ đường, Thổ Lâu) với khát vọng mạo hiểm đại dương ('Ái bính tài hội doanh' 爱拼才会赢 – Dám liều mới thắng) và tín ngưỡng bảo hộ thủy thủ Thiên Hậu Ma Tổ (妈祖 Māzǔ – phát tích tại đảo Mi Châu, Phủ Điền).",
      heritageAndLandmarks: [
        { hanzi: "泉州：宋元中国的世界海洋商贸中心", pinyin: "Quánzhōu Shìjiè Hǎiyáng Shāngmào Zhōngxīn", hanViet: "Tuyền Châu: Trung tâm Hải thương Tống–Nguyên", nameVi: "Tuyền Châu Hải thương Thế giới (UNESCO 2021)", significance: "22 điểm di sản liên hoàn gồm Chùa Khai Nguyên (Tháp Đôi), Thánh đường Hồi giáo Thanh Tịnh Tự (1009), Cảng Hậu Chử và Cầu Lạc Dương." },
        { hanzi: "福建土楼（永定 · 南靖）", pinyin: "Fújiàn Tǔlóu", hanViet: "Phúc Kiến Thổ Lâu", nameVi: "Quần thể Thổ Lâu Phúc Kiến (UNESCO 2008)", significance: "46 tòa thành đất nện tròn – vuông đồ sộ (như Chấn Thành Lâu, Điền Loa Khanh 'Tứ Thái Nhất Thang') giữ ấm mùa đông mát mùa hè và chống động đất tuyệt vời." },
        { hanzi: "武夷山", pinyin: "Wǔyíshān", hanViet: "Vũ Di Sơn", nameVi: "Danh thắng Vũ Di Sơn (UNESCO Di sản Kép)", significance: "Đỉnh cao Đan Hà địa mạo suối Cửu Khúc, nơi Chu Hy giảng Lý học suốt 50 năm và quê hương Nham trà Đại Hồng Bào cùng Hồng trà Chính Sơn Tiểu Chủng." },
        { hanzi: "鼓浪屿历史国际社区", pinyin: "Gǔlàngyǔ", hanViet: "Cổ Lãng Tự (Hạ Môn)", nameVi: "Đảo Dương cầm Cổ Lãng Tự (UNESCO 2017)", significance: "Hòn đảo không xe cơ giới ngoài Hạ Môn bảo tồn gần 1.000 biệt thự lịch sử Á–Âu và bảo tàng đàn piano cổ lớn nhất Trung Quốc." },
        { hanzi: "三坊七巷（福州）", pinyin: "Sānfāng Qīxiàng", hanViet: "Tam Phường Thất Hạng", nameVi: "Khu phố Cổ Tam Phường Thất Hạng (Phúc Châu)", significance: "Bảo tàng sống kiến trúc thời Đường–Tống với hơn 200 phủ đệ tường yên ngựa nơi Lâm Tắc Từ và Nghiêm Phục sinh sống." }
      ],
      intangibleHeritage: "Nghi lễ tín ngưỡng Ma Tổ Mi Châu (UNESCO); Kỹ thuật chế biến trà truyền thống Vũ Di Nham Trà, Bạch Trà Phúc Đỉnh và Trà Ô Long An Khê Thiết Quan Âm; Sứ trắng Đức Hóa (德化白瓷 – được châu Âu tôn xưng Blanc de Chine); Nghệ thuật Mộc ngẫu hí (Múa rối dây Tuyền Châu) và Điêu khắc gỗ Phúc Châu.",
      culinaryCulture: {
        styleOverview: "Mân Thái (闽菜 Mǐncài) đứng trong Bát Đại Thái Hệ nổi danh với kỹ thuật nấu súp/canh công phu, sử dụng đa dạng hải sản tươi, vị thanh ngọt nhẹ từ bỗng rượu đỏ (Hồng tao) và nước mắm cá biển truyền thống.",
        signatureDishes: [
          { hanzi: "佛跳墙", pinyin: "Fótiàoqiáng", hanViet: "Phật Khiêu Tường (Phật nhảy tường)", description: "Đỉnh cao đại yến Mân Thái từ thời Thanh Quang Tự: hơn 20 sơn hào hải vị (bào ngư, hải sâm, vi cá, sò điệp khô, gân hươu, giăm bông, nấm hương) ủ rượu Thiệu Hưng hầm chậm nhiều ngày trong vò sứ kín." },
          { hanzi: "沙茶面", pinyin: "Shāchàmiàn", hanViet: "Sa trà diện (Mì Sa Tế Hạ Môn)", description: "Món quốc dân Hạ Môn – Mân Nam dùng nước dùng nấu từ đậu phộng xay, tôm khô, cá bơn khô thơm nồng chan mì trứng cùng tôm, mực, lòng heo và đậu phụ rán." },
          { hanzi: "荔枝肉", pinyin: "Lìzhīròu", hanViet: "Lệ chi nhục", description: "Thịt thăn lợn khứa carô ướp bỗng rượu đỏ chiên xoăn tròn như trái vải chín đỏ rồi đảo nhanh trong xốt chua ngọt hương táo tỏi." },
          { hanzi: "福建鱼丸（福州鱼丸）", pinyin: "Fúzhōu yúwán", hanViet: "Phúc Châu ngư hoàn (Cá viên bọc thịt)", description: "Vỏ chả cá lươn/cá nhám dai trắng tinh bọc kín nhân thịt lợn băm mọng nước thơm gừng hành bên trong." },
          { hanzi: "海蛎煎（蚵仔煎）", pinyin: "Hǎilìjiān (Kēzǎijiān)", hanViet: "Hải lệ tiên (Trứng chiên hàu bột khoai)", description: "Hàu sữa tươi vùng Mân Nam chiên cùng tinh bột khoai lang dẻo sánh và trứng gà đánh tan kèm lá hẹ xanh." }
        ]
      },
      economyAndIndustry: "Số 1 thế giới về pin xe điện thông qua Tập đoàn CATL (Ninh Đức Đương Đại 宁德时代 tại Ninh Đức); trung tâm sản xuất giày thể thao lớn nhất Trung Quốc tại Tấn Giang – Tuyền Châu (Anta, Xtep, 361°, Peak); kính ô tô Fuyao (Phúc Châu); cảng nước sâu Hạ Môn – Phúc Châu; đặc khu dệt may, gốm sứ Đức Hóa và công nghiệp hóa dầu.",
      vietnamConnectivity: "Phúc Kiến và cộng đồng người Mân Nam – Khách Gia có lịch sử giao thương đường biển sâu đậm hàng trăm năm với Hội An, Phố Hiến, Sài Gòn – Chợ Lớn (chùa Bà Thiên Hậu, Hội quán Phúc Kiến ở Hội An và TP.HCM). Hiện đại, tuyến container Cảng Hạ Môn – Hải Phòng/Cát Lái và chuyến bay thẳng Hạ Môn – Hà Nội/TP.HCM thúc đẩy thương mại máy móc dệt, giày dép và thủy sản. Đại học Hạ Môn (厦门大学 – 985/Song Nhất Lưu nổi tiếng Kinh tế học, Quản trị biển và Hán ngữ Quốc tế với Cơ sở Malaysia) và Đại học Phúc Châu (211/Song Nhất Lưu) có đông đảo sinh viên Việt Nam.",
      notableFigures: [
        { hanzi: "柳永", pinyin: "Liǔ Yǒng", hanViet: "Liễu Vĩnh", lifespan: "k. 987–1053", contribution: "Từ nhân vĩ đại thời Bắc Tống quê Sùng An (Vũ Di Sơn), mở đường phát triển Mạn từ phái Uyển ước ('Phàm hữu tỉnh thủy ẩm xứ, giai năng ca Liễu từ')." },
        { hanzi: "林则徐", pinyin: "Lín Zéxú", hanViet: "Lâm Tắc Từ", lifespan: "1785–1850", contribution: "Vị quan thanh liêm quê Hầu Quan (Phúc Châu), người chỉ huy tiêu hủy thuốc phiện tại Hổ Môn (1839) và mở mắt nhìn thế giới cận đại." },
        { hanzi: "陈景润", pinyin: "Chén Jǐngrùn", hanViet: "Trần Cảnh Nhuận", lifespan: "1933–1996", contribution: "Nhà toán học kiệt xuất quê Phúc Châu (tốt nghiệp Đại học Hạ Môn) chấn động toán học thế giới với chứng minh '1+2' cho Giả thuyết Goldbach." },
        { hanzi: "陈嘉庚", pinyin: "Chén Jiāgēng", hanViet: "Trần Gia Canh (Tan Kah Kee)", lifespan: "1874–1961", contribution: "Thủ lĩnh Hoa kiều Đông Nam Á quê Tập Mỹ (Hạ Môn), người hiến tài sản dựng nên Đại học Hạ Môn." }
      ],
      travelAndLogistics: "Tháng 4–5 và tháng 10–12 khí hậu ôn hòa dễ chịu ít bão; đường sắt cao tốc Phúc–Hạ 350 km/h nối Phúc Châu – Bồ Điền – Tuyền Châu – Hạ Môn chỉ trong 1 giờ! Sân bay Cao Khi Hạ Môn (XMN), Trường Lạc Phúc Châu (FOC). Gợi ý 4–5 ngày: Ngày 1 Hạ Môn (Cổ Lãng Tự – Đại học Hạ Môn – Phố Trung Sơn); Ngày 2 Quần thể Thổ Lâu Nam Kinh/Vĩnh Định; Ngày 3 Tuyền Châu (Khải Nguyên Tự – Thanh Tịnh Tự); Ngày 4 Vũ Di Sơn (Cửu Khúc Khê & Thưởng Nham Trà).",
      mapCoordinates: { mapX: 668, mapY: 454, historicalCapitalEra: "Mân Việt cổ · Đế cảng Tuyền Châu Tống–Nguyên", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    },
    "prov-jiangxi": {
      identity: {
        hanziSimplified: "江西省",
        hanziTraditional: "江西省",
        pinyin: "Jiāngxī Shěng",
        hanViet: "Giang Tây Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "赣",
        abbreviationPinyin: "Gàn (Cám)",
        abbreviationOrigin: "Tên Giang Tây rút gọn từ 'Giang Nam Tây Đạo' (江南西道) do Đường Huyền Tông thiết lập năm 733. Chữ viết tắt 赣 (Cám) bắt nguồn từ con sông mẹ Cám Giang (赣江 Gànjiāng) chảy xuyên suốt từ nam lên bắc đổ vào Hồ Bà Dương.",
        capitalCity: "Nam Xương (南昌市 Nánchāng Shì – Nam Xương)"
      },
      geographyAndClimate: {
        summary: "Nằm ở nội lục Hoa Đông phía nam trung hạ lưu sông Trường Giang, trên bậc thềm thứ ba với cấu trúc ba mặt núi cao (dãy Mạc Phụ – Lư Sơn phía bắc, Vũ Di Sơn phía đông, Tỉnh Cương Sơn – La Tiêu phía tây và Nam Lĩnh phía nam) mở ra như chiếc đĩa nghiêng về Hồ Bà Dương (鄱阳湖 Póyáng Hú – hồ nước ngọt tự nhiên lớn nhất Trung Quốc). Khí hậu cận nhiệt đới ẩm mưa nhiều vào mùa xuân–hè.",
        causality: "Vị trí lòng chảo mở ra Bắc kết nối đại lộ thủy vận Cổ Đại từ Mai Quan Lĩnh Nam lên sông Cám – Hồ Bà Dương vào sông Trường Giang đã biến Giang Tây suốt 1.000 năm (Đường – Tống – Minh) thành hành lang thương mại Bắc–Nam sầm uất nhất Trung Quốc trước khi đường sắt ra đời. Đất sét cao lanh tinh khiết vùng Cống Châu – Cảnh Đức Trấn cùng rừng thông làm củi đốt lò đã đẻ ra kinh đô gốm sứ ngàn năm Cảnh Đức Trấn (景德镇). Trong khi núi non trùng điệp Lư Sơn, Long Hổ Sơn trở thành chốn ẩn dật lý tưởng của thi nhân, thư viện Nho học (Bạch Lộc Động) và đạo tràng Thiền tông."
      },
      historicalEvolution: "Thời Xuân Thu là đất ranh giới giao tranh 'Ngô đầu Sở vĩ'. Năm 202 TCN Lưu Bang sai Quán Anh xây thành Nam Xương ('Dự Chương Cố Quận'). Thời Đường–Tống, Giang Tây đạt tới hoàng kim văn học – thư viện với 'Đường Tống Bát Đại Gia' đóng góp tới 3 người (Âu Dương Tu, Tằng Củng, Vương An Thạch) và Đào Tiềm, Hoàng Đình Kiên (Tây Giang Thi Phái). Đến Minh–Thanh, Giang Hữu Thương Bang (江右商帮) đứng đầu cả nước suốt 300 năm với danh hiệu 'Kinh đô Sứ Thế giới Cảnh Đức Trấn'. Đầu thế kỷ XX, Nam Xương (Khởi nghĩa 01/08/1927) và Tỉnh Cương Sơn – Thụy Kim trở thành cái nôi cách mạng đỏ Trung Quốc.",
      culturalIdentity: "Văn hóa Cám Bà (赣鄱文化 Gànpó Wénhuà): truyền thống 'Văn chương tiết nghĩa chi bang' — đặc biệt chuộng học thuật thư viện (Thư viện Bạch Lộc Động là cái nôi của *Bạch Lộc Động Thư viện Học quy* Chu Hy), bản lĩnh thẳng thắn của phái Tây Giang Thi Pháp, sự kiên nhẫn tinh xảo của thợ lò sứ Cảnh Đức Trấn và chiều sâu Đạo giáo Chính Nhất (Núi Long Hổ) – Thiền tông Tịnh Độ (Chùa Đông Lâm Lư Sơn).",
      heritageAndLandmarks: [
        { hanzi: "庐山风景名胜区", pinyin: "Lúshān", hanViet: "Lư Sơn & Thư viện Bạch Lộc Động", nameVi: "Danh thắng Lư Sơn & Bạch Lộc Động (UNESCO 1996)", significance: "Ngọn núi văn hóa nổi danh với bài thơ 'Bất thức Lư Sơn chân diện mục' của Tô Thức và Thư viện Bạch Lộc Động – đứng đầu Tứ đại Thư viện cổ Trung Hoa." },
        { hanzi: "景德镇古窑民俗博览区", pinyin: "Jǐngdézhèn Gǔyáo", hanViet: "Cảnh Đức Trấn Cổ Diêu", nameVi: "Kinh đô Sứ Thế giới Cảnh Đức Trấn", significance: "Lò sứ cung đình ngàn năm sản xuất sứ Thanh Hoa, Đấu Thái, Phấn Thái phục vụ hoàng cung Minh–Thanh và xuất khẩu sang Á–Âu." },
        { hanzi: "滕王阁", pinyin: "Téngwánggé", hanViet: "Đằng Vương Các (Nam Xương)", nameVi: "Đằng Vương Các bên sông Cám Giang", significance: "Một trong Tam đại Danh lâu Giang Nam gắn liền thiên cổ kiệt tác *Đằng Vương Các Tự* của Vương Bột ('Lạc hà dữ cô vụ tề phi, thu thủy cộng trường thiên nhất sắc')." },
        { hanzi: "三清山与龙虎山", pinyin: "Sānqīngshān yǔ Lónghǔshān", hanViet: "Tam Thanh Sơn dữ Long Hổ Sơn", nameVi: "Tam Thanh Sơn & Tổ đình Đạo giáo Long Hổ Sơn (UNESCO)", significance: "Hai kỳ quan địa chất hoa cương và Đan Hà gắn với tổ đình Trương Thiên Sư Đạo giáo Chính Nhất phái." },
        { hanzi: "婺源篁岭古村", pinyin: "Wùyuán Huánglǐng", hanViet: "Vụ Nguyên Hoàng Lĩnh", nameVi: "Làng cổ Vụ Nguyên (Sái thu trên mái ngói)", significance: "Khu vực cổ thôn Huy Phái đẹp nhất mùa hoa cải vàng tháng 3 và mùa phơi ớt – ngô sắc thu tháng 10–11." }
      ],
      intangibleHeritage: "Nghệ thuật chế tác gốm sứ thủ công Cảnh Đức Trấn (chủ yếu 72 công đoạn từ đất cao lanh tới vẽ lam côban); Nghệ thuật làm giấy trúc Diên Sơn; Vũ điệu Nuo Nam Phong (hóa mặt nạ cổ trừ tà thời Hán); và kỹ thuật pha chế trà Lư Sơn Vân Vụ.",
      culinaryCulture: {
        styleOverview: "Cám Thái (赣菜 Gàncài) có câu truyền miệng 'Giang Tây bất lạt bất thành hoan' — cay nồng tươi giòn sánh ngang Xuyên – Tương nhưng đậm hương vị hầm niêu đất (Ngõa quán thang) thanh bổ vùng hồ Bà Dương.",
        signatureDishes: [
          { hanzi: "南昌瓦罐汤 & 拌粉", pinyin: "Nánchāng wǎguàntāng & bànfěn", hanViet: "Canh thố đất Nam Xương & Mì bún gạo trộn", description: "Bữa sáng kinh điển Nam Xương: bún gạo dai trộn xì dầu, củ cải muối giòn, ớt dầu, ăn cùng canh gà/sườn thảo mộc ninh hàng giờ trong những vò gốm đất đặt trong lò than kín." },
          { hanzi: "三杯鸡（宁都三杯鸡）", pinyin: "Níngdū sānbēijī", hanViet: "Ninh Đô tam bôi kê (Gà nấu ba chén)", description: "Khởi nguồn chính gốc từ Giang Tây (không dùng giọt nước nào, chỉ dùng đúng 1 chén dầu trà, 1 chén xì dầu và 1 chén rượu gạo ngọt om thịt gà săn thơm)." },
          { hanzi: "莲花血鸭", pinyin: "Liánhuā xuèyā", hanViet: "Liên Hoa huyết áp (Vịt om tiết Liên Hoa)", description: "Món trứ danh Bình Hương: thịt vịt đồng tơ xào lửa lớn với gừng ớt tươi rồi rưới tiết vịt hòa rượu trắng lúc tắt bếp tạo lớp xốt đậm mịn." },
          { hanzi: "鄱阳湖银鱼炖蛋", pinyin: "Póyánghú yínyú", hanViet: "Bà Dương Hồ ngân ngư (Cá bạc hồ Bà Dương)", description: "Loài cá nhỏ trong suốt không xương đặc sản hồ Bà Dương hấp trứng hoặc chiên giòn." },
          { hanzi: "井冈山烟笋炒肉", pinyin: "Jǐnggāngshān yānsǔn", hanViet: "Tỉnh Cương Sơn yên duẩn", description: "Măng tre non núi Tỉnh Cương hun khói củi trúc xào thịt ba chỉ ớt xanh thơm nức mùi khói rừng." }
        ]
      },
      economyAndIndustry: "Thủ phủ khai thác – tinh luyện đồng hàng đầu cả nước (Ưng Đàm – Thượng Nhiêu) và trung tâm lithium – pin năng lượng mặt trời toàn cầu (Nghi Xuân là 'Thủ đô Lithium châu Á' cung ứng cho CATL, BYD, Gotion). Ngành chế tạo máy bay trực thăng – hàng không (Nam Xương – Cảnh Đức Trấn) và kinh tế gốm sứ sáng tạo quy mô hàng tỷ USD tại Cảnh Đức Trấn.",
      vietnamConnectivity: "Quặng lithium, gốm sứ mỹ nghệ, đồng công nghiệp và tấm pin năng lượng mặt trời từ Giang Tây tham gia trực tiếp chuỗi cung ứng năng lượng tái tạo tại Việt Nam; đặc biệt nghề gốm Cảnh Đức Trấn có mối đối chiếu kỹ thuật lâu đời với gốm hoa lam Chu Đậu và Bát Tràng. Sinh viên Việt Nam sang nghiên cứu chuyên sâu Nghệ thuật Gốm sứ tại Đại học Gốm sứ Cảnh Đức Trấn (景德镇陶瓷大学 – cơ sở đào tạo gốm sứ đại học duy nhất ở Trung Quốc) và các ngành kỹ thuật tại Đại học Nam Xương (南昌大学 – 211/Song Nhất Lưu).",
      notableFigures: [
        { hanzi: "陶渊明", pinyin: "Táo Yuānmíng", hanViet: "Đào Uyên Minh (Đào Tiềm)", lifespan: "k. 365–427", contribution: "Ông tổ thơ Điền viên Trung Hoa quê Tầm Dương (Cửu Giang), tác giả *Đào Hoa Nguyên Ký* với tinh thần 'Bất vị ngũ đấu mễ chiết yêu'." },
        { hanzi: "欧阳修 · 王安石", pinyin: "Ōuyáng Xiū / Wáng Ānshí", hanViet: "Âu Dương Tu & Vương An Thạch", lifespan: "Thế kỷ XI", contribution: "Hai nhà văn kiệt xuất trong Đường Tống Bát Đại Gia và nhà cải cách lớn triều Bắc Tống xuất thân từ Lư Lăng (Cát An) và Lâm Xuyên (Phủ Châu)." },
        { hanzi: "汤显祖", pinyin: "Tāng Xiǎnzǔ", hanViet: "Thang Hiển Tổ", lifespan: "1550–1616", contribution: "Kịch tác gia vĩ đại cùng thời với Shakespeare (cùng mất năm 1616), quê Lâm Xuyên, tác giả vở *Mẫu Đơn Đình* bất hủ." },
        { hanzi: "宋应星", pinyin: "Sòng Yìngxīng", hanViet: "Tống Ứng Tinh", lifespan: "1587–k. 1666", contribution: "Nhà khoa học kỹ thuật đời Minh quê Phụng Tân (Giang Tây), tác giả bộ bách khoa toàn thư *Thiên Công Khai Vật* (天工开物, 1637)." }
      ],
      travelAndLogistics: "Tháng 3–4 mùa hoa cải Vụ Nguyên – Lư Sơn sương sớm và tháng 10–11 mùa lá đỏ Hoàng Lĩnh. Sân bay Xương Bắc Nam Xương (KHN); mạng lưới đường sắt cao tốc Hồ–Côn và Hàng–Xương kết nối trực tiếp Thượng Hải – Hàng Châu – Cảnh Đức Trấn – Vụ Nguyên – Nam Xương trong 2–3 giờ. Gợi ý 4 ngày: Ngày 1 Nam Xương (Đằng Vương Các – Bảo tàng Giang Tây); Ngày 2 Lư Sơn – Bạch Lộc Động; Ngày 3 Cảnh Đức Trấn (Bảo tàng Ngự Diêu – Xưởng sứ Khê Châu); Ngày 4 Vụ Nguyên Hoàng Lĩnh.",
      mapCoordinates: { mapX: 608, mapY: 416, historicalCapitalEra: "Dự Chương · Kinh đô Sứ Cảnh Đức Trấn", economicCorridor: "Trung Nguyên & Trung Du Trường Giang" }
    },
    "prov-shandong": {
      identity: {
        hanziSimplified: "山东省",
        hanziTraditional: "山東省",
        pinyin: "Shāndōng Shěng",
        hanViet: "Sơn Đông Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "鲁",
        abbreviationPinyin: "Lǔ (Lỗ)",
        abbreviationOrigin: "Tên Sơn Đông chỉ vùng phía đông dãy Thái Hành Sơn thời Kim–Nguyên. Chữ viết tắt 鲁 (Lỗ) bắt nguồn từ nước Lỗ (鲁国 Lǔguó) đóng tại Khúc Phụ – đất phong của Chu Công Đán và quê hương của Đức Khổng Tử thời Xuân Thu.",
        capitalCity: "Tế Nam (济南市 Jǐnán Shì – 'Thành phố của 72 Suối phun')"
      },
      geographyAndClimate: {
        summary: "Nằm ở bờ đông đồng bằng Hoa Bắc trên bậc thềm thứ ba, gồm hai khối địa hình đối lập hài hòa: khối đồi núi trung nam Thái Sơn (泰山 – đứng đầu Ngũ Nhạc, cao 1.545 m) cùng Bán đảo Sơn Đông nhô ra chia tách vịnh Bột Hải và Hoàng Hải ở phía đông; bao quanh là đồng bằng phù sa Hoàng Hà đổ ra biển tại Đông Dinh ở phía tây–bắc. Khí hậu ôn đới gió mùa ấm áp, Thanh Đảo và Yên Đài ven bán đảo mang khí hậu biển mát dịu bậc nhất miền Bắc.",
        causality: "Vị thế bán đảo hướng ra Đông Á lại sở hữu đồng bằng Hoàng Hà rộng lớn khiến Sơn Đông vừa là cái nôi nông nghiệp trồng kê lúa mì định cư lâu đời sinh ra lễ giáo gia tộc Nho gia (văn hóa Lỗ trọng lễ nghi, hiếu đễ), vừa có văn hóa duyên hải phóng khoáng hướng biển (văn hóa Tề trọng thương mại, kỹ nghệ và quân sự tại Lâm Truy). Dân cư Sơn Đông cao lớn nhất trung bình Trung Quốc nhờ nguồn lúa mì giàu dinh dưỡng và hải sản dồi dào, hun đúc tính cách trung hậu, hào hiệp Thủy Hử ('Hảo hán Sơn Đông')."
      },
      historicalEvolution: "Mảnh đất phát tích hàng loạt nền văn minh tiền sử vĩ đại như văn hóa Đại Vấn Khẩu (4100–2600 TCN) và Văn hóa Long Sơn (2500–2000 TCN – đồ gốm đen mỏng như vỏ trứng 'Hắc đào'). Thời Tây Chu, Khương Tử Nha lập nước Tề ở Lâm Truy (Truy Bác) và Chu Công Đán lập nước Lỗ ở Khúc Phụ — từ đó sản sinh Khổng Tử, Mạnh Tử (Nho gia), Tôn Vũ (Binh gia) và Học viện Tắc Hạ thời Chiến Quốc (nơi Bách Gia Chư Tử tự do tranh biện). Thời Tống gắn liền Lương Sơn Bạc trong *Thủy Hử Truyện*; thời cận đại Thanh Đảo – Yên Đài trở thành trọng điểm cảng biển, bia bọt và đường sắt Giao–Tế.",
      culturalIdentity: "Cái nôi của Văn hóa Tề Lỗ (齐鲁文化 Qílǔ Wénhuà): một trục kép gồm chiều sâu đạo đức Nho học ('Khổng Mạnh chi hương, Lễ nghi chi bang' 孔孟之乡，礼仪之邦) ở tây nam Sơn Đông và tinh thần thực dụng canh tân, giao thương biển của nước Tề cổ ở đông bắc Sơn Đông. Người Sơn Đông đặc biệt coi trọng chữ hiếu, trật tự bàn tiệc ('chủ – khách' rõ ràng) và nghĩa khí thẳng thắn.",
      heritageAndLandmarks: [
        { hanzi: "曲阜孔庙、孔府、孔林（三孔）", pinyin: "Qūfù Sānkǒng", hanViet: "Tam Khổng Khúc Phụ (Khổng Miếu – Khổng Phủ – Khổng Lâm)", nameVi: "Quần thể Di sản Tam Khổng (UNESCO 1994)", significance: "Thánh địa Nho giáo Đông Á với hơn 100 tòa điện các (Đại Thành Điện) và khu rừng mộ 100.000 gốc tùng bách của dòng họ Khổng hơn 2.500 năm." },
        { hanzi: "泰山（五岳独尊）", pinyin: "Tàishān", hanViet: "Thái Sơn (Ngũ Nhạc Độc Tôn)", nameVi: "Núi thiêng Thái Sơn (UNESCO Di sản Kép 1987)", significance: "Ngọn núi linh thiêng nhất lịch sử phong kiến Trung Hoa, nơi 12 hoàng đế từ Tần Thủy Hoàng, Hán Vũ Đế tới Càn Long hành đại lễ Phong Thiền (封禅)." },
        { hanzi: "青岛八大关与栈桥", pinyin: "Qīngdǎo Bādàguān", hanViet: "Thanh Đảo Bát Đại Quan", nameVi: "Khu phố Biệt thự Đỏ ngói Xanh cây Bát Đại Quan & Nhà máy Bia Thanh Đảo (1903)", significance: "Kiến trúc cảng biển duyên hải đặc trưng hòa quyện thảm cây xanh và mái ngói đỏ bên vịnh Hoàng Hải." },
        { hanzi: "济南趵突泉与大明湖", pinyin: "Jǐnán Bàotūquán", hanViet: "Báo Đột Tuyền & Đại Minh Hồ", nameVi: "Danh thắng Suối Báo Đột Tế Nam", significance: "'Thiên hạ Đệ nhất Tuyền' nơi dòng suối ngầm phun vọt từ đá vôi tạo nên cảnh quan thủy thanh giữa lòng đô thị cổ." },
        { hanzi: "蓬莱阁与齐长城", pinyin: "Péngláigé", hanViet: "Bồng Lai Các", nameVi: "Bồng Lai Các (Yên Đài) & Trường Thành nước Tề", significance: "Thắng cảnh tiên gia gắn với huyền thoại Bát Tiên Quá Hải và hiện tượng hải thị thận lâu nổi tiếng." }
      ],
      intangibleHeritage: "Nghi lễ Tế Khổng Khúc Phụ; Tranh Tết mộc bản Dương Gia Phụ (Duy Phường); Hội Diều Quốc tế Duy Phường ('Thủ đô Diều thế giới'); Hí kịch Lữ kịch (吕剧); Bóng da Xúc Cúc cổ đại (được FIFA công nhận nguồn gốc bóng đá tại Lâm Truy); và kỹ thuật rèn đúc gốm đen Long Sơn.",
      culinaryCulture: {
        styleOverview: "Lỗ Thái (鲁菜 Lǔcài) là trường phái duy nhất trong Bát Đại Thái Hệ phát triển từ phương Bắc, từng là nền tảng của Ngự thiện Cung đình Minh–Thanh Bắc Kinh; trứ danh với kỹ thuật xốt hành hương 'Thông thiêu', ninh nước dùng 'Thanh thang – Nãi thang' tinh tế và hải sản Giao Đông tươi ngọt.",
        signatureDishes: [
          { hanzi: "葱烧海参", pinyin: "Cōngshāo hǎishēn", hanViet: "Thông thiêu hải sâm (Hải sâm om hành Chương Khâu)", description: "Vua của các món yến tiệc Lỗ Thái: hải sâm Bột Hải ninh mềm thấm đẫm xốt hành Chương Khâu ngọt dài tới nửa mét phi thơm sẫm màu óng ả." },
          { hanzi: "糖醋鲤鱼", pinyin: "Tángcù lǐyú", hanViet: "Đường thố lý ngư (Cá chép Hoàng Hà chiên uốn cong)", description: "Cá chép vàng sông Hoàng Hà được bẻ cong sống lưng uốn hình cá vượt vũ môn chiên giòn tan rưới xốt giấm đường." },
          { hanzi: "九转大肠", pinyin: "Jiǔzhuǎn dàcháng", hanViet: "Cửu chuyển đại tràng", description: "Kỳ công chế biến lòng heo qua chín bước làm sạch, luộc, rán, om với đủ năm vị chua, ngọt, đắng, cay, mặn cùng vị quế hồi." },
          { hanzi: "德州扒鸡", pinyin: "Dézhōu bājī", hanViet: "Đức Châu bái kê (Gà hầm rút xương Đức Châu)", description: "Món ăn trứ danh hơn 300 năm dùng gà ta rưới mật mạch nha chiên vàng rồi ninh mềm rục với 16 vị thuốc bắc tới độ lắc nhẹ là tuột xương." },
          { hanzi: "淄博烧烤 · 煎饼卷大葱", pinyin: "Zībó shāokǎo / Jiānbǐng juǎn dàcōng", hanViet: "Thịt nướng Truy Bác & Bánh tráng cuốn hành", description: "Nét văn hóa dân dã đặc sản: tự nướng xiên thịt trên bếp than nhỏ tại bàn rồi cuốn trong bánh tráng ngô cùng hành lá Chương Khâu và tương đậu." }
        ]
      },
      economyAndIndustry: "GDP đứng thứ 3 toàn quốc (~9,21 nghìn tỷ NDT) và dẫn đầu tuyệt đối Trung Quốc về sản lượng nông sản (lương thực, rau quả Thọ Quang, táo Yên Đài), gia dụng thông minh (Haier, Hisense tại Thanh Đảo), đầu máy xe tải – thiết bị cảng (Weichai Power, Sinotruk Tế Nam), lốp xe và cảng biển nước sâu Thanh Đảo – Nhật Chiếu.",
      vietnamConnectivity: "Hàng gia dụng Haier/Hisense, xe tải nặng Sinotruk/Weichai, rau quả ôn đới Sơn Đông và hóa chất công nghiệp giao thương tấp nập với Việt Nam qua Cảng Thanh Đảo. Trong lĩnh vực học thuật, Đại học Sơn Đông (山东大学 – 985/Song Nhất Lưu tại Tế Nam, Thanh Đảo, Uy Hải nổi danh số 1 về Cổ điển Hán học & Triết học Nho gia), Đại học Hải dương Trung Quốc (OUC – 985/Song Nhất Lưu tại Thanh Đảo) và Đại học Dầu khí Trung Quốc tiếp nhận rất nhiều lưu học sinh Việt Nam.",
      notableFigures: [
        { hanzi: "孔子（孔丘）", pinyin: "Kǒngzǐ", hanViet: "Khổng Tử (Vạn thế Sư biểu)", lifespan: "551–479 TCN", contribution: "Đại tư tưởng gia và nhà giáo dục vĩ đại quê Khúc Phụ, sáng lập Nho học định hình nền tảng đạo đức và thể chế văn minh Đông Á suốt 2.500 năm." },
        { hanzi: "孟子（孟轲）", pinyin: "Mèngzǐ", hanViet: "Mạnh Tử (Á Thánh)", lifespan: "k. 372–289 TCN", contribution: "Người Trâu Thành (nay giáp Khúc Phụ) phát triển tư tưởng 'Tính thiện' và thuyết 'Dân vi quý, xã tắc thứ chi, quân vi khinh'." },
        { hanzi: "墨子 · 鲁班", pinyin: "Mòzǐ · Lǔ Bān", hanViet: "Mặc Tử & Lỗ Ban", lifespan: "Thế kỷ V TCN", contribution: "Tổ sư Mặc gia ('Kiêm ái phi công' – quang học, cơ học) và Ông tổ nghề mộc – kiến trúc Đông Á Lỗ Ban đều xuất thân từ vùng Tề Lỗ." },
        { hanzi: "李清照 · 辛弃疾", pinyin: "Lǐ Qīngzhào · Xīn Qìjí", hanViet: "Lý Thanh Chiếu & Tân Khí Tật", lifespan: "Thế kỷ XI–XII", contribution: "Song tuyệt đỉnh cao Tống Từ ('Tế Nam Nhị An') quê Chương Khâu và Tế Nam." }
      ],
      travelAndLogistics: "Tháng 5–10 khí hậu cực kỳ lý tưởng leo Thái Sơn ngắm mặt trời mọc và nghỉ mát Thanh Đảo (Lễ hội Bia Quốc tế Thanh Đảo tháng 8). Sân bay Lưu Đình/Giao Đông Thanh Đảo (TAO) và Diêu Tường Tế Nam (TNA); tuyến đường sắt cao tốc Kinh–Hỗ nối Bắc Kinh – Tế Nam (1h25) – Khúc Phụ Đông (30p) – Thái An (20p). Gợi ý 4 ngày: Ngày 1 Khúc Phụ Tam Khổng; Ngày 2 Chinh phục đỉnh Ngọc Hoàng Thái Sơn; Ngày 3 Suối Báo Đột & Đại Minh Hồ Tế Nam; Ngày 4 Thanh Đảo Bát Đại Quan & Bảo tàng Bia 1903.",
      mapCoordinates: { mapX: 626, mapY: 256, historicalCapitalEra: "Nước Lỗ (Khúc Phụ) & Nước Tề (Lâm Truy)", economicCorridor: "Kinh–Tân–Ký (京津冀)" }
    },
    "prov-henan": {
      identity: {
        hanziSimplified: "河南省",
        hanziTraditional: "河南省",
        pinyin: "Hénán Shěng",
        hanViet: "Hà Nam Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "豫",
        abbreviationPinyin: "Yù (Dự)",
        abbreviationOrigin: "Tên Hà Nam nghĩa là 'vùng đất phía nam sông Hoàng Hà'. Trong Cửu Châu cổ đại *Thượng Thư · Vũ Cống*, đây là vùng trung tâm Dự Châu (豫州) — chữ 豫 gồm chữ 予 (ban cho/ung dung) và 象 (con voi), phản ánh khí hậu cổ đại ấm ẩm thời Thương tại Trung Nguyên từng có voi hoang dã sinh sống.",
        capitalCity: "Trịnh Châu (郑州市 Zhèngzhōu Shì – Trịnh Châu)"
      },
      geographyAndClimate: {
        summary: "Nằm ở vị trí 'Thiên hạ chi trung' tại trung hạ lưu sông Hoàng Hà, chuyển tiếp từ bậc thềm thứ hai (dãy Thái Hành Sơn tây bắc, Phục Ngưu Sơn – Tung Sơn phía tây) sang mặt phẳng mênh mông của Bình nguyên Hoa Bắc ở phía đông. Sông Hoàng Hà chảy xuyên phía bắc qua cửa ải Tam Môn Hiệp trước khi bồi đắp đồng bằng phù sa khổng lồ với mực đáy sông treo cao hơn mặt đất ('Địa thượng huyền hà' ở Khai Phong). Khí hậu ôn đới gió mùa bốn mùa cân bằng.",
        causality: "Vị thế trung tâm địa lý ngã ba giao cắt Đông–Tây và Bắc–Nam ('Trung Nguyên') cùng hai dòng phù sa mềm dễ canh tác bằng công cụ đá–đồng sơ khai (hoàng thổ Lạc Hà – Y Hà) đã đưa Hà Nam thành cái nôi nông nghiệp và đô thị đầu tiên của văn minh Hoa Hạ. Nhưng sự biến đổi khí hậu và lũ lụt vỡ đê Hoàng Hà hàng nghìn năm (được sử ghi nhận hàng trăm lần) cũng dạy người Hà Nam tính kiên trì chịu khó, nghệ thuật ẩm thực bình dân ấm áp tinh bột (Hồ Lạt Thang, Hối Diện) và văn hóa hầm ngầm / tầng văn hóa xếp chồng lên nhau tại Khai Phong ('Thành đè lên Thành')."
      },
      historicalEvolution: "Quê hương cốt lõi của lịch sử Hoa Hạ: từ văn hóa Bùi Lý Cương (7000–5000 TCN), gốm màu Ngưỡng Thiều (5000–3000 TCN), di chỉ Nhị Lý Đầu (Lạc Dương – gắn liền truyền thuyết văn minh tiền Thương), đến kinh đô xác chứng cổ nhất bằng văn tự Giáp cốt là Ân Khư nhà Thương (An Dương, khoảng 1300 TCN). Suốt hơn 3.000 năm cho tới hết Bắc Tống (1127), hơn 20 vương triều đã đặt kinh đô tại đây: Lạc Dương (13 triều đại từ Chu, Đông Hán, Tào Ngụy, Tây Tấn, Bắc Ngụy tới Võ Tắc Thiên nhà Đường) và Khai Phong (Kinh đô Đông Kinh Biện Lương hoa lệ nhất thế giới thế kỷ XI qua tranh *Thanh Minh Thượng Hà Đồ*). Có câu: 'Nhất bộ Hà Nam sử, bán bộ Trung Quốc sử'.",
      culturalIdentity: "Trái tim của Văn hóa Trung Nguyên (中原文化 Zhōngyuán Wénhuà): truyền thống lễ giáo – sử học – văn tự chữ Hán (Thương Hiệt tạo tự trong truyền thuyết, Thận Trọng viết *Thuyết Văn Giải Tự* ở Lạc Dương), tinh thần võ học Thiếu Lâm Tự Tung Sơn – Thái Cực Quyền Trần Gia Câu, và khẩu khí đôn hậu chất phác của văn minh nông nghiệp Hoàng Hà.",
      heritageAndLandmarks: [
        { hanzi: "殷墟遗址（安阳）", pinyin: "Yīnxū Yízhǐ", hanViet: "Ân Khư Di chỉ", nameVi: "Kinh đô Ân Khư thời Thương (UNESCO 2006)", significance: "Kinh đô đầu tiên của Trung Quốc được xác chứng khảo cổ bằng hơn 150.000 mảnh Giáp cốt văn và Hậu Mẫu Mậu Đỉnh nặng 832,84 kg." },
        { hanzi: "龙门石窟", pinyin: "Lóngmén Shíkū", hanViet: "Long Môn Thạch Quật", nameVi: "Hang đá Phật giáo Long Môn – Lạc Dương (UNESCO 2000)", significance: "Hơn 2.300 hang động và 100.000 tượng Phật thời Bắc Ngụy – Thịnh Đường (đỉnh cao tượng Phật Lô Xá Na 17,14 m tạc theo dung mạo Võ Tắc Thiên)." },
        { hanzi: "登封“天地之中”历史建筑群 · 少林寺", pinyin: "Shàolínsì · Tiāndì zhī Zhōng", hanViet: "Thiếu Lâm Tự & Tung Dương Thư Viện", nameVi: "Quần thể 'Thiên địa chi trung' Tung Sơn & Thiếu Lâm Tự (UNESCO 2010)", significance: "Tổ đình Thiền tông & Võ học Thiếu Lâm (495 CN), Đài Quan tinh Cổ Chu Công và Thư viện Tung Dương." },
        { hanzi: "开封清明上河园 · 铁塔", pinyin: "Kāifēng Qīngmíng Shànghéyuán", hanViet: "Khai Phong Thanh Minh Thượng Hà Viên & Thiết Tháp", nameVi: "Cố đô Biện Lương Khai Phong", significance: "Tái hiện kinh thành hoa lệ Bắc Tống thế kỷ XI gắn liền Phủ Khai Phong Bao Công và Chùa Thiết Tháp gạch men lưu ly năm 1049." },
        { hanzi: "红旗渠与二里头夏都遗址博物馆", pinyin: "Èrlǐtóu Yízhǐ", hanViet: "Bảo tàng Khảo cổ Nhị Lý Đầu (Yển Sư)", nameVi: "Di chỉ Văn hóa Nhị Lý Đầu & Bảo tàng Hà Nam", significance: "Xác chứng khảo cổ sơ kỳ văn minh đồ đồng lưu vực Lạc Hà (~1750–1500 TCN) cùng Quốc bảo Liên Hạc Phương Hồ tại Bảo tàng Hà Nam." }
      ],
      intangibleHeritage: "Thái Cực Quyền (太极拳 Tàijíquán – khai sinh tại Trần Gia Câu, Tiêu Tác, UNESCO 2020); Công phu Thiếu Lâm Tự; Dự kịch (豫剧 Yùjù – kịch bản Mộc Lan từ quân được hát vang cả nước); Kỹ nghệ Tam Thái Lạc Dương; Sứ Quân Diêu (钧窑) vùng Vũ Châu.",
      culinaryCulture: {
        styleOverview: "Dự Thái (豫菜 Yùcài) được tôn là 'Mẫu thân của các hệ ẩm thực Trung Hoa' nhờ vị trí Trung Nguyên trung dung: hương vị hài hòa ngũ vị 'Ngũ vị điều hòa, chất vị thích trung', nổi bật với nước dùng hầm xương cừu béo ngọt và các món từ bột mì.",
        signatureDishes: [
          { hanzi: "郑州烩面", pinyin: "Zhèngzhōu huìmiàn", hanViet: "Trịnh Châu hối diện (Mì kéo dải hầm xương dê)", description: "Dải mì bản rộng dai mướt nấu trong nồi nước dùng xương dê hầm trắng sữa đậm vị cùng thịt dê, mộc nhĩ, đậu phụ ky và rau rau thơm." },
          { hanzi: "胡辣汤", pinyin: "Húlàtāng", hanViet: "Hồ lạt thang (Súp cay tiêu đen ăn sáng)", description: "Bữa sáng linh hồn của người Hà Nam: bột mì sánh quyện nước hầm thịt bò, hồ tiêu đen băm, ớt, mộc nhĩ, hoa kim châm và đậu phụ ki sợi nóng bỏng cổ họng." },
          { hanzi: "洛阳水席", pinyin: "Luòyáng shuǐxí", hanViet: "Lạc Dương thủy tịch (Tiệc 24 món nước Lạc Dương)", description: "Di sản ẩm thực ngàn năm thời Đường phục vụ 24 món liên hoàn trong đó hơn một nửa là canh súp chua cay, mở đầu bởi 'Mẫu đơn yến thái' củ cải trắng tước sợi tựa yến sào." },
          { hanzi: "开封灌汤包", pinyin: "Kāifēng guàntāngbāo", hanViet: "Khai Phong quán thang bao", description: "Truyền nhân trực hệ thời Bắc Tống có câu 'Đề khởi tượng đăng lồng, phóng hạ tượng cúc hoa' với vỏ mỏng chứa tràn súp thịt ngọt lịm." },
          { hanzi: "道口烧鸡", pinyin: "Dàokǒu shāojī", hanViet: "Đạo Khẩu thiêu kê (Gà quay hầm 18 vị Hoạt Huyện)", description: "Món gà quay ngâm hầm mềm rục hương thảo quả sa nhân nổi danh từ thế kỷ XVII." }
        ]
      },
      economyAndIndustry: "Trịnh Châu là 'Ngã ba Đường sắt số 1 Trung Quốc' (giao điểm tuyến Kinh–Quảng và Lũng–Hải) và trạm cảng hàng không lớn nhất miền Trung — đồng thời là công xưởng sản xuất điện thoại iPhone lớn nhất thế giới (Khu Foxconn Sân bay Trịnh Châu), trung tâm sản xuất ô tô điện (BYD Trịnh Châu & Xe buýt Yutong số 1 thế giới), chế tạo máy khiên đào hầm TBM hàng đầu toàn cầu (CREG) và vựa lúa mì lớn nhất cả nước.",
      vietnamConnectivity: "Quặng khoáng sản, phân bón, máy móc xây dựng và xe buýt năng lượng sạch Yutong (cùng máy móc nông nghiệp Lạc Dương – YTO Đông Phương Hồng) hiện diện phổ biến tại Việt Nam. Về văn hóa, Thái Cực Quyền Trần Gia Câu, Võ thuật Thiếu Lâm và Dự án Bảo tàng Văn tự Trung Quốc (An Dương) thu hút nhiều võ sinh, nhà nghiên cứu văn tự Giáp cốt và sinh viên Việt Nam theo học tại Đại học Trịnh Châu (郑州大学 – 211/Song Nhất Lưu) và Đại học Hà Nam (Song Nhất Lưu ở Khai Phong).",
      notableFigures: [
        { hanzi: "杜甫（诗圣）", pinyin: "Dù Fǔ", hanViet: "Đỗ Phủ (Thi Thánh)", lifespan: "712–770", contribution: "Đại thi hào kiệt xuất nhất Đường Thi quê Củng Nghĩa (Hà Nam), tấm gương nhân bản phản ánh nỗi thống khổ thời Loạn An Sử." },
        { hanzi: "白居易", pinyin: "Bái Jūyì", hanViet: "Bạch Cư Dị", lifespan: "772–846", contribution: "Thi hào chủ trương 'Tân Nhạc phủ' xuất thân Tân Trịnh (Hà Nam), an dưỡng cuối đời tại Hương Sơn Lạc Dương." },
        { hanzi: "张仲景（医圣）", pinyin: "Zhāng Zhòngjǐng", hanViet: "Trương Trọng Cảnh (Y Thánh)", lifespan: "k. 150–219", contribution: "Thánh y thời Đông Hán quê Nam Dương (Hà Nam), tác giả bộ *Thương Hàn Tạp Bệnh Luận* nền tảng y lý lâm sàng Đông y." },
        { hanzi: "韩非子 · 李商隐", pinyin: "Hán Fēizǐ / Lǐ Shāngyǐn", hanViet: "Hàn Phi Tử & Lý Thương Ẩn", lifespan: "Thế kỷ III TCN / IX CN", contribution: "Nhà tư tưởng tập đại thành Pháp gia (nước Hàn ở Tân Trịnh) và thi sĩ 'Vô đề' diễm lệ thời Vãn Đường." }
      ],
      travelAndLogistics: "Tháng 4 (Lễ hội Hoa Mẫu Đơn Lạc Dương nổi tiếng 'Mẫu đơn giáp thiên hạ') và tháng 9–10 mùa thu rất dễ chịu. Sân bay Tân Trịnh Trịnh Châu (CGO); ga cao tốc Trịnh Châu Đông là nút giao tốc độ 350 km/h nối Bắc Kinh – Tây An – Vũ Hán – Nam Kinh chỉ trong 1h30–2h30! Hành trình 5 ngày tinh hoa Trung Nguyên: Ngày 1 Bảo tàng Hà Nam Trịnh Châu; Ngày 2 Thiếu Lâm Tự Tung Sơn; Ngày 3 Lạc Dương Long Môn Thạch Quật – Bạch Mã Tự (chùa Phật giáo đầu tiên Trung Quốc năm 68 CN); Ngày 4 Khai Phong; Ngày 5 Bảo tàng Ân Khư An Dương.",
      mapCoordinates: { mapX: 540, mapY: 292, historicalCapitalEra: "Ân Khư (Thương) · Lạc Dương (13 triều) · Khai Phong (Tống)", economicCorridor: "Trung Nguyên & Trung Du Trường Giang" }
    },
    "prov-hubei": {
      identity: {
        hanziSimplified: "湖北省",
        hanziTraditional: "湖北省",
        pinyin: "Húběi Shěng",
        hanViet: "Hồ Bắc Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "鄂",
        abbreviationPinyin: "È (Ngạc)",
        abbreviationOrigin: "Tên Hồ Bắc nghĩa là 'phía bắc Hồ Động Đình'. Chữ viết tắt 鄂 (Ngạc) xuất phát từ nước Ngạc (鄂国) thời Thương–Chu đặt đô ở Ngạc Châu (phía đông Vũ Hán ngày nay), được giữ qua các triều đại làm Ngạc Thành và Ngạc Tỉnh.",
        capitalCity: "Vũ Hán (武汉市 Wǔhàn Shì – 'Cửu tỉnh thông cù')"
      },
      geographyAndClimate: {
        summary: "Nằm ở trái tim lưu vực trung du sông Trường Giang, chuyển tiếp từ ranh giới Tam Hiệp bậc thềm thứ hai (dãy núi Vũ Đương, Thần Nông Giá – đỉnh Thần Nông cao nhất miền Trung Hoa 3.106 m ở phía tây) xuống bình nguyên Giang Hán (江汉平原) phẳng lặng giàu đầm hồ ở phía đông ('Thiên hồ chi tỉnh' – Tỉnh ngàn hồ). Tại trung tâm Vũ Hán, con sông Hán Thủy lớn nhất nhánh Trường Giang đổ vào sông mẹ Trường Giang chia ba khu vực Vũ Xương – Hán Khẩu – Hán Dương. Khí hậu cận nhiệt đới gió mùa nóng ẩm mùa hè nhưng lạnh buốt ẩm ướt vào mùa đông.",
        causality: "Ngã ba thủy lộ khổng lồ nơi hai đại thủy lộ Trường Giang và Hán Thủy giao cắt biến Vũ Hán thành 'Cửu tỉnh thông cù' (ngã tư thông thương chín tỉnh), nơi thương buôn khắp Hoa Nam–Hoa Bắc–Tây Nam tụ hội, tạo nên tính cách bộc trực nóng nảy nhưng hào sảng trượng nghĩa ('Bất phục chu' 不服周 – tinh thần nước Sở không khuất phục), đồng thời khởi phát văn hóa 'Quá Tảo' (ăn sáng bún mì khô dầu mè nóng để nạp đủ năng lượng nhanh trước khi ra bến tàu)."
      },
      historicalEvolution: "Mảnh đất phát tích vương triều Kinh Sở (荆楚文化, nước Sở thời Xuân Thu – Chiến Quốc với kinh đô Dĩnh Đô tại Kinh Châu), đạt trình độ đúc đồng thanh (Bộ chuông Tăng Hầu Ất), sơn mài, dệt lụa và thi ca Khuất Nguyên rực rỡ chẳng kém Trung Nguyên. Trong thời Tam Quốc, hơn phân nửa chiến trận nổi tiếng của *Tam Quốc Diễn Nghĩa* diễn ra tại đây: Trận Xích Bích (208 CN), Kinh Châu ('Tất tranh chi địa'), Tương Dương Cổ Thành. Thời cận đại (1890), Trương Chi Động lập Xưởng Gang thép Hán Dương làm trụ cột Công nghiệp Dương Vụ; ngày 10/10/1911 Khởi nghĩa Vũ Xương lật đổ chế độ phong kiến cuối cùng triều Thanh (Cách mạng Tân Hợi).",
      culturalIdentity: "Cốt tủy của Văn hóa Kinh Sở (荆楚文化 Jīngchǔ Wénhuà): sự lãng mạn bay bổng siêu phàm (tư tưởng Đạo học Nam phương của Khuất Nguyên – Trang Tử), huyền thoại võ học Đạo giáo Thái Cực núi Vũ Đương, niềm tự hào 'Hảo hán Kinh Sở' kiên cường vượt qua nghịch cảnh lịch sử (từ Xích Bích, Tân Hợi đến kiên cường hồi sinh năm 2020) và lối sống đậm chất giáo dục đại học ở Vũ Hán (hơn 1,3 triệu sinh viên đại học nhiều nhất thế giới trong một thành phố).",
      heritageAndLandmarks: [
        { hanzi: "武当山古建筑群", pinyin: "Wǔdāngshān", hanViet: "Vũ Đương Sơn Cổ Kiến trúc quần", nameVi: "Thánh địa Đạo giáo Vũ Đương Sơn (UNESCO 1994)", significance: "Quần thể đạo quán hoàng gia triều Minh trên đỉnh Thiên Trụ (Kim Đỉnh) và cái nôi Thái Cực Quyền nội gia." },
        { hanzi: "神农架自然遗产", pinyin: "Shénnóngjià", hanViet: "Thần Nông Giá", nameVi: "Khu dự trữ Rừng Nguyên sinh Thần Nông Giá (UNESCO 2016)", significance: "Nóc nhà miền Trung Trung Quốc bảo tồn thảm thực vật cổ kỷ Đệ Tam, voọc mũi hếch vàng và huyền thoại Thần Nông hái thuốc." },
        { hanzi: "黄鹤楼与湖北省博物馆", pinyin: "Huánghèlóu · Húběi Bówùguǎn", hanViet: "Hoàng Hạc Lâu & Bảo tàng Hồ Bắc", nameVi: "Hoàng Hạc Lâu Vũ Hán & Kho báu nước Sở", significance: "Đệ nhất danh lâu Giang Nam qua thơ Thôi Hiệu – Lý Bạch; Bảo tàng Hồ Bắc giữ Tứ đại Quốc bảo gồm Biên Chung Tăng Hầu Ất và Thanh đồng Kiếm Việt Vương Câu Tiễn." },
        { hanzi: "明显陵与荆州古城", pinyin: "Míng Xiǎnlíng · Jīngzhōu Gǔchéng", hanViet: "Minh Hiển Lăng & Thành cổ Kinh Châu", nameVi: "Hoàng lăng Minh Hiển Lăng (Chung Tường, UNESCO) & Thành cổ Kinh Châu", significance: "Tường thành gạch đất đắp 2.000 năm tuổi còn bảo tồn nguyên vẹn gắn liền điển tích Quan Vũ giữ Kinh Châu." },
        { hanzi: "三峡大坝", pinyin: "Sānxiá Dàbà", hanViet: "Đập Tam Hiệp (Nghi Xương)", nameVi: "Công trình Thủy điện Tam Hiệp", significance: "Nhà máy thủy điện lớn nhất thế giới về công suất lắp đặt (22.500 MW) trên hẻm núi Tây Lăng Hiệp." }
      ],
      intangibleHeritage: "Võ thuật & Dưỡng sinh Đạo giáo núi Vũ Đương (Vũ Đương Võ Thuật); Hát Kịch Hán (汉剧 – tiền thân góp phần tạo nên Kinh kịch); Nghệ thuật thêu Kinh Châu (Hán tú); Cổ cầm Lưu Thủy Tri Âm (giai thoại Bá Nha – Tử Kỳ gặp tri kỷ ngay tại Cổ Cầm Đài Hán Dương); và kỹ thuật làm trà Gạch xanh Xích Bích.",
      culinaryCulture: {
        styleOverview: "Ngạc Thái (鄂菜 Ècài) nổi tiếng về kỹ nghệ nấu cá nước ngọt ('Tam chử tam chiên'), món hầm liên ngẫu đầm hồ và văn hóa điểm tâm đường phố Quá Tảo (过早) phong phú tới mức có thể ăn cả tháng không trùng món.",
        signatureDishes: [
          { hanzi: "武汉热干面", pinyin: "Wǔhàn règānmiàn", hanViet: "Vũ Hán nhiệt can diện (Mì trộn khô vừng nóng)", description: "Top 10 danh miến Trung Quốc: sợi mì kiềm luộc sơ rưới dầu vừng tránh dính, trụng nóng chan xốt tương vừng béo ngậy, dưa cải băm, hành lá và tỏi ớt." },
          { hanzi: "莲藕排骨汤（铫子煨汤）", pinyin: "Lián'ǒu páigǔtāng", hanViet: "Liên ngẫu bài cốt thang (Canh củ sen hầm sườn niêu đất)", description: "Củ sen hồng hồ Hồng Hồ dẻo bở giàu tinh bột hầm cùng sườn non trong niêu gốm đậy kín suốt 4 tiếng thành món canh ngọt thanh hồn cốt Vũ Hán." },
          { hanzi: "清蒸武昌鱼", pinyin: "Qīngzhēng Wǔchāngyú", hanViet: "Thanh chưng Vũ Xương ngư", description: "Cá mòi nước ngọt thân dẹt hồ Lương Tử hấp cách thủy với nấm đông cô, măng, hành gừng tạo vị thịt béo mịn không tanh." },
          { hanzi: "三鲜豆皮", pinyin: "Sānxiān dòupí", hanViet: "Tam tiên đậu bì", description: "Bánh vỏ đậu xanh trứng gà rán vàng giòn bọc gạo nếp dẻo, nấm hương, thịt nạc và măng băm cắt miếng vuông vuông thơm phức." },
          { hanzi: "潜江油焖小龙虾", pinyin: "Qiánjiāng xiǎolóngxiā", hanViet: "Tiềm Giang du muộn tiểu long hà (Tôm hùm đất om cay)", description: "Tiềm Giang (Hồ Bắc) là thủ phủ tôm hùm đất lớn nhất thế giới; tôm om bia với hàng chục gia vị thảo mộc, tỏi và ớt tê bùng nổ." }
        ]
      },
      economyAndIndustry: "Vũ Hán ('Thung lũng Quang học Trung Quốc' – 光谷 Optics Valley) giữ vị thế số 1 cả nước về cáp quang truyền dẫn (FiberHome), laser công nghiệp và bộ nhớ flash NAND (YMTC Trường Giang Lưu Trữ); là trung tâm công nghiệp ô tô hàng đầu (Dongfeng Motor, Voyah) tại Vũ Hán – Thập Yển, công nghiệp đóng cầu đường sắt lớn nhất nước (tới 60% cầu dây văng lớn toàn cầu do kỹ sư Vũ Hán thiết kế!) và trung tâm thương mại trung chuyển nội địa.",
      vietnamConnectivity: "Cộng đồng du học sinh Việt Nam tại Vũ Hán là một trong những cộng đồng lâu đời và đông nhất Trung Quốc: tập trung tại Đại học Vũ Hán (武汉大学 – 985/Song Nhất Lưu, top 10 ĐH đẹp nhất Trung Quốc mùa hoa anh đào tháng 3), Đại học Khoa học và Công nghệ Hoa Trung (HUST 华中科技大学 – 985/Song Nhất Lưu về Kỹ thuật – Cơ khí – Y khoa), Đại học Sư phạm Hoa Trung (211/Song Nhất Lưu) và Đại học Địa chất Trung Quốc (CUG). Các tập đoàn cầu đường và cáp quang Vũ Hán cũng là đối tác hạ tầng quan trọng tại Việt Nam.",
      notableFigures: [
        { hanzi: "屈原", pinyin: "Qū Yuán", hanViet: "Khuất Nguyên (Tỷ Quy / Kinh Châu)", lifespan: "k. 340–278 TCN", contribution: "Đại thi hào mở đầu dòng thơ lãng mạn cá nhân trong lịch sử văn học Trung Quốc với *Ly Tao* (*Sở Từ*), gắn với nguồn gốc Tết Đoan Ngọ." },
        { hanzi: "毕昇", pinyin: "Bì Shēng", hanViet: "Tất Thăng (Anh Sơn, Hồ Bắc)", lifespan: "k. 972–1051", contribution: "Nhà phát minh sáng tạo kỹ thuật in chữ rời bằng đất sét nung thời Bắc Tống (trước Gutenberg hơn 400 năm)." },
        { hanzi: "李时珍", pinyin: "Lǐ Shízhuān (Lǐ Shízhēn)", hanViet: "Lý Thời Trân (Kỳ Xuân)", lifespan: "1518–1593", contribution: "Đại danh y và dược học gia triều Minh, tác giả bộ dược điển đồ sộ *Bản Thảo Cương Mục* mô tả 1.892 vị thuốc." },
        { hanzi: "王昭君 · 米芾", pinyin: "Wáng Zhāojūn · Mǐ Fú", hanViet: "Vương Chiêu Quân & Mễ Phất", lifespan: "Thế kỷ I TCN / XI CN", contribution: "Tứ đại mỹ nhân 'Lạc nhạn' quê Hưng Sơn (Hồ Bắc) và bậc đại thư họa gia 'Mễ điểm sơn thủy' sống nhiều năm tại Tương Dương." }
      ],
      travelAndLogistics: "Tháng 3–4 (mùa hoa anh đào Đại học Vũ Hán rực rỡ) và tháng 10–11 (mùa thu dịu mát tại Thần Nông Giá – Vũ Đương Sơn). Sân bay Quốc tế Thiên Hà Vũ Hán (WUH có đường bay nối TP.HCM/Hà Nội); nút giao đường sắt cao tốc Vũ Hán (Bắc Kinh–Quảng Châu 4h, Thượng Hải–Thành Đô 4–5h). Gợi ý 4 ngày: Ngày 1 Bảo tàng Hồ Bắc – Đằng Đông Hồ – Đại học Vũ Hán; Ngày 2 Hoàng Hạc Lâu – Cầu Trường Giang – Phố ăn sáng Hộ Bộ Hạng; Ngày 3–4 Du thuyền Tây Lăng Hiệp & Đập Tam Hiệp (Nghi Xương) hoặc lên đỉnh Vũ Đương Sơn.",
      mapCoordinates: { mapX: 536, mapY: 356, historicalCapitalEra: "Dĩnh Đô (Nước Sở) · Kinh Châu · Vũ Xương Tân Hợi", economicCorridor: "Trung Nguyên & Trung Du Trường Giang" }
    },
    "prov-hunan": {
      identity: {
        hanziSimplified: "湖南省",
        hanziTraditional: "湖南省",
        pinyin: "Húnnán Shěng",
        hanViet: "Hồ Nam Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "湘",
        abbreviationPinyin: "Xiāng (Tương)",
        abbreviationOrigin: "Tên Hồ Nam nghĩa là 'vùng đất phía nam Hồ Động Đình'. Chữ viết tắt 湘 (Tương) lấy theo sông Tương Giang (湘江 Xiāngjiāng) – con sông mẹ chảy suốt chiều dài từ nam lên bắc qua Vĩnh Châu, Hành Dương, Tương Đàm, Trường Sa đổ vào Hồ Động Đình.",
        capitalCity: "Trường Sa (长沙市 Chángshā Shì – Trường Sa)"
      },
      geographyAndClimate: {
        summary: "Nằm ở phía nam trung du sông Trường Giang, chuyển tiếp bậc thềm thứ ba với ba mặt vây bọc bởi rừng núi hùng vĩ (dãy Vũ Lăng – Tuyết Phong Sơn phía tây, Nam Lĩnh phía nam, Mạc Phụ – La Tiêu phía đông) mở cửa về Hồ Động Đình ở phía bắc như hình chiếc móng ngựa. Bốn dòng sông lớn (Tương – Tư – Nguyên – Lễ) đổ tụ về Động Đình Hồ. Khí hậu cận nhiệt đới gió mùa ẩm ướt, nhiều mưa mây mùa xuân và oi ả mùa hạ.",
        causality: "Vị trí lòng chảo mở bắc bị ba phía núi cao hiểm trở vây kín hun đúc tâm lý kiên cường tự tôn và máu liều cách mạng nổi tiếng của người Hồ Nam ('Nhược yếu Trung Quốc vong, trừ phi Hồ Nam nhân tử tuyệt' – tinh thần 'Khắc bá 吃得苦, Bá man 霸得蛮' của dân xứ Tương). Sự ẩm thấp kéo dài từ hệ thống sông hồ khiến ớt cay và thực phẩm xông khói Lạp Vị trở thành nhu cầu sinh tồn khử hàn ẩm không thể thiếu trên mâm cơm mọi gia đình Hồ Nam."
      },
      historicalEvolution: "Mở đầu là vùng đất nước Sở phương Nam nơi các thi nhân lưu đày Khuất Nguyên, Giả Nghị viết nên những áng văn bi tráng nhất sử Trung Hoa bên bờ sông Mịch La. Thời Tây Hán lưu giữ bảo tàng khảo cổ chấn động thế giới tại lăng mộ Mã Vương Đôi (Mawangdui, Trường Sa, 168 TCN). Thời Tống, Thư viện Nhạc Lộc (岳麓书院, 976) tại Trường Sa do Chu Hy và Trương Thức luận đạo trở thành trung tâm Lý học phương Nam. Sang thế kỷ XIX–XX, Tương quân của Tăng Quốc Phiên, Tả Tông Đường cùng phong trào Duy Tân (Đàm Tự Đồng) và lớp nhà cách mạng thế hệ Mao Trạch Đông, Lưu Thiếu Kỳ, Hồ Diệu Bang đưa văn hóa Hồ Tương thành tâm điểm lịch sử cận đại Trung Quốc.",
      culturalIdentity: "Văn hóa Hồ Tương (湖湘文化 Húxiāng Wénhuà): một sự pha trộn kỳ lạ giữa tinh thần 'Kinh thế trí dụng' (học Nho gia để gánh vác thực tiễn cứu quốc từ Thư viện Nhạc Lộc), bản tính bộc trực 'bá man' dám làm dám chịu, văn hóa thần bí vu sư nước Sở cổ (di vật lăng Mã Vương Đôi) và không khí giải trí – truyền thông trẻ trung sôi động bậc nhất Trung Quốc hiện đại ('Thành phố không ngủ Trường Sa' và Đế chế Truyền hình Hồ Nam / Mango TV).",
      heritageAndLandmarks: [
        { hanzi: "武陵源风景名胜区（张家界）", pinyin: "Wǔlíngyuán (Zhāngjiājiè)", hanViet: "Vũ Lăng Nguyên – Trương Gia Giới", nameVi: "Quần thể Cột đá Sa thạch Trương Gia Giới (UNESCO 1992)", significance: "Hơn 3.000 cột đá thạch anh dựng đứng xuyên mây mù (nguyên mẫu cảnh quan núi Hallelujah trong *Avatar*) và Cầu kính Thiên Môn Sơn." },
        { hanzi: "岳麓书院与岳麓山", pinyin: "Yuèlù Shūyuàn", hanViet: "Nhạc Lộc Thư Viện (976 CN)", nameVi: "Thư viện Nhạc Lộc Trường Sa", significance: "Một trong Tứ đại Thư viện cổ truyền thừa giảng dạy liên tục hơn 1.000 năm (nay thuộc Đại học Hồ Nam), giữ câu đối bất hủ 'Duy Sở hữu tài, vu tư vi thịnh'." },
        { hanzi: "湖南省博物院（马王堆汉墓陈列）", pinyin: "Mǎwángduī Hànmù", hanViet: "Lăng mộ Hán Mã Vương Đôi", nameVi: "Bảo tàng Hồ Nam & Thi hài Lão phu nhân Tân Truy (168 TCN)", significance: "Phát hiện bảo tồn hoàn hảo thi hài 2.100 năm, áo lụa đơn nặng chỉ 49 gam, tranh lụa Phi Y dẫn hồn và bản lụa *Chu Dịch* / *Lão Tử* cổ nhất thế giới." },
        { hanzi: "岳阳楼与洞庭湖", pinyin: "Yuèyánglóu", hanViet: "Nhạc Dương Lâu (Nhạc Dương)", nameVi: "Nhạc Dương Lâu bên Hồ Động Đình", significance: "Danh lâu đứng đầu Tam đại Danh lâu Giang Nam với bài ký bất hủ của Phạm Trọng Yêm: 'Tiên thiên hạ chi ưu nhi ưu, hậu thiên hạ chi lạc nhi lạc'." },
        { hanzi: "凤凰古城", pinyin: "Fènghuáng Gǔchéng", hanViet: "Phượng Hoàng Cổ Trấn", nameVi: "Cổ trấn Phượng Hoàng & Tương Tây Thổ Gia – Miêu", significance: "Nhà sàn gỗ Điếu Cước Lâu soi bóng xuống sông Đà Giang êm đềm giữ đậm sắc màu văn hóa dân tộc Miêu và Thổ Gia." }
      ],
      intangibleHeritage: "Thêu Tương Tú (湘绣 – một trong Tứ đại Danh tú nổi tiếng kỹ thuật 'Sư tử hai mặt khác màu'); Kỹ thuật làm Trà Đen lên men An Hóa (安化黑茶) đóng bánh Thiên Lưỡng Trà; Hoa Cổ hí (花鼓戏); Lễ hội Đua thuyền rồng sông Mịch La tưởng nhớ Khuất Nguyên (UNESCO); và chữ viết Nữ Thư (女书 Nǚshū) vùng Giang Vĩnh – văn tự bí mật duy nhất trên thế giới do phụ nữ sáng tạo!",
      culinaryCulture: {
        styleOverview: "Tương Thái (湘菜 Xiāngcài) là ngôi sao trong Bát Đại Thái Hệ với vị 'Cay thơm nực mũi (Hương lạt 香辣) & Chua cay hài hòa (Toan lạt 酸辣)', chuyên sử dụng ớt ngâm chua Đọa Tiêu (剁椒), tỏi băm và thịt hun khói củi.",
        signatureDishes: [
          { hanzi: "剁椒鱼头", pinyin: "Duòjiāo yútóu", hanViet: "Đọa tiêu ngư đầu (Đầu cá hấp ớt băm Đọa Tiêu)", description: "Đầu cá trắm đen béo ngậy rưới kín lớp ớt đỏ lên men băm nhuyễn trộn tỏi gừng hấp lửa lớn cho thịt mềm tan thấm đẫm nước xốt đỏ rực." },
          { hanzi: "辣椒炒肉", pinyin: "Làjiāo chǎoròu", hanViet: "Lạt tiêu xào nhục (Thịt ba chỉ xào ớt xanh)", description: "Món cơm nhà trứ danh số 1 Hồ Nam: thịt ba chỉ đen lợn Ninh Hương xào lửa thật to cùng ớt sừng xanh mỏng vỏ ('Trâu Lĩnh Tiêu') và đậu tương đen tạo hương cháy chảo bùng nổ." },
          { hanzi: "毛氏红烧肉", pinyin: "Máo shì hóngshāoròu", hanViet: "Mao thị hồng thiêu nhục (Thịt kho họ Mao)", description: "Ba chỉ cắt vuông thắng màu từ đường phèn (không dùng xì dầu đậm) kho với ớt khô, hoa hồi và quế cho màu đỏ cánh gián béo mà không ngấy." },
          { hanzi: "长沙臭豆腐", pinyin: "Chángshā chòudòufu", hanViet: "Trường Sa xú đậu hủ (Đậu phụ thối đen Trường Sa)", description: "Đậu phụ ngâm nước cốt măng – nấm – đậu xị đen nhánh chiên phồng rộp rỗng ruột ngoài giòn trong mềm, khoét lỗ giữa nhồi tương ớt tỏi thơm nức." },
          { hanzi: "永州血鸭 & 茶颜悦色", pinyin: "Yǒngzhōu xuèyā", hanViet: "Vĩnh Châu huyết áp & Văn hóa trà sữa Trà Nhan Duyệt Sắc", description: "Vịt xào tiết và gừng non nổi danh đất Vĩnh Châu; đồng thời Trường Sa hiện đại là nơi khai sinh thương hiệu trà sữa phong cách Quốc phong Trà Nhan Duyệt Sắc." }
        ]
      },
      economyAndIndustry: "Số 1 Trung Quốc và thuộc Top 3 thế giới về 'Thủ đô Máy móc Công trình Xây dựng' với Sany Heavy Industry (Tam Nhất Trọng Công), Zoomlion (Trung Liên Trọng Khoa) và CRCHI (Trình Quốc Thiết Kiến – chế tạo khiên đào hầm TBM) tập trung ở Trường Sa. Chu Châu là 'Thành phố Động lực Điện Đường sắt' (CRRC Zhuzhou chế tạo đầu máy tàu điện toàn cầu), cùng công nghiệp giải trí truyền hình – văn hóa số bùng nổ tại Mã Lan Sơn.",
      vietnamConnectivity: "Trong lịch sử cận đại, thành phố Trường Sa và Tương Đàm gắn liền tình cảm giao lưu giáo dục – cách mạng Việt–Trung (học viện Nam Kinh/Trường Sa đào tạo cán bộ Việt Nam thập niên 1950–1960 như Học viện Nam Nhạc/Trường Dục Tài Quế Lâm–Trường Sa). Thương mại hiện nay nhập khẩu nhiều máy xúc cần cẩu Sany/Zoomlion cho các dự án hạ tầng Việt Nam. Sinh viên Việt Nam học tập đông tại Đại học Trung Nam (中南大学 – 985/Song Nhất Lưu dẫn đầu Khoa học Vật liệu, Khai khoáng và Y học Tương Nhã), Đại học Hồ Nam (湖南大学 – 985/Song Nhất Lưu tại chân núi Nhạc Lộc) và Đại học Sư phạm Hồ Nam (211/Song Nhất Lưu).",
      notableFigures: [
        { hanzi: "周敦颐", pinyin: "Zhōu Dūnyí", hanViet: "Chu Đôn Di (Liêm Khê Tiên Sinh)", lifespan: "1017–1073", contribution: "Khai tổ Lý học Tống–Minh quê Đạo Huyện (Vĩnh Châu, Hồ Nam), tác giả bài văn bất hủ *Ái Liên Thuyết* ('Gần bùn mà chẳng hôi tanh mùi bùn')." },
        { hanzi: "王夫之（船山先生）", pinyin: "Wáng Fūzhī", hanViet: "Vương Phu Chi (Thuyền Sơn)", lifespan: "1619–1692", contribution: "Đại triết gia duy vật lịch sử cuối Minh đầu Thanh quê Hành Dương, có ảnh hưởng sâu rộng tới tư duy cận đại Trung Quốc." },
        { hanzi: "曾国藩 · 左宗棠", pinyin: "Zēng Guófān · Zuǒ Zōngtang", hanViet: "Tăng Quốc Phiên & Tả Tông Đường", lifespan: "Thế kỷ XIX", contribution: "Hai danh thần thời vãn Thanh quê Tương Hương và Tương Âm cải tổ quân đội và khởi phát phong trào công nghiệp Dương Vụ." },
        { hanzi: "齐白石", pinyin: "Qí Báishí", hanViet: "Tề Bạch Thạch", lifespan: "1864–1957", contribution: "Đại sư Quốc họa Tả ý thế kỷ XX xuất thân thợ mộc Tương Đàm, trứ danh tranh tôm mực thủy mặc và hoa điểu sống động." }
      ],
      travelAndLogistics: "Tháng 4–5 (mây trắng Trương Gia Giới – Phượng Hoàng) và tháng 9–11 (mùa thu lá đỏ Ái Vãn Đình Nhạc Lộc Sơn). Sân bay Hoàng Hoa Trường Sa (CSX kết nối đường bay đến Việt Nam); tàu cao tốc Bắc Kinh – Quảng Châu chạy xuyên Trường Sa (đi Quảng Châu 2h30) và tuyến cao tốc Trương–Cát–Hoài đưa thẳng từ Trường Sa tới Trương Gia Giới – Phượng Hoàng Cổ Trấn chỉ trong 2h! Gợi ý 5 ngày: Ngày 1–2 Trường Sa (Bảo tàng Mã Vương Đôi – Đảo Cam Tử – Thư viện Nhạc Lộc – Phố Thái Bình); Ngày 3–4 Công viên Rừng Quốc gia Trương Gia Giới – Thiên Môn Sơn; Ngày 5 Phượng Hoàng Cổ Trấn.",
      mapCoordinates: { mapX: 532, mapY: 422, historicalCapitalEra: "Nước Sở (Mã Vương Đôi) · Thư viện Nhạc Lộc", economicCorridor: "Trung Nguyên & Trung Du Trường Giang" }
    },
    "prov-guangdong": {
      identity: {
        hanziSimplified: "广东省",
        hanziTraditional: "廣東省",
        pinyin: "Guǎngdōng Shěng",
        hanViet: "Quảng Đông Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "粤",
        abbreviationPinyin: "Yuè (Việt)",
        abbreviationOrigin: "Tên Quảng Đông bắt nguồn từ 'Quảng Nam Đông Lộ' thời Tống (chia tách từ Quảng Châu xưa). Chữ viết tắt 粤 (Việt) có cội nguồn từ tộc Bách Việt / Nam Việt (南越 Nányuè) sinh sống khắp vùng Lĩnh Nam từ thời Tiên Tần – Hán; dùng hoàn toàn âm Phổ thông chuẩn là Yuè (Hán-Việt: Việt).",
        capitalCity: "Quảng Châu (广州市 Guǎngzhōu Shì – Quảng Châu)"
      },
      geographyAndClimate: {
        summary: "Nằm ở cực nam Trung Quốc đại lục trên bậc thềm thứ ba, lưng tựa dãy Ngũ Lĩnh (五岭 – ranh giới tự nhiên ngăn cách gió rét Hoa Bắc) và mặt hướng ra Biển Đông với đường bờ biển dài nhất cả nước (hơn 4.100 km). Ở trung tâm là Đồng bằng Châu thổ Sông Châu Giang (珠江三角洲 Zhūjiāng Sānjiǎozhōu) nơi ba dòng Tây Giang, Bắc Giang, Đông Giang hội tụ đổ ra Cửa biển Hổ Môn. Khí hậu cận nhiệt đới gió mùa nóng ẩm quanh năm, phần bán đảo Lôi Châu mang tính nhiệt đới; mùa hè–thu dài thường đón mưa bão.",
        causality: "Dãy Ngũ Lĩnh cao chắn gió bắc giúp Quảng Đông suốt lịch sử phát triển một hệ sinh thái tương đối độc lập với Trung Nguyên, đồng thời biển Đông biến vùng này thành trạm xuất phát của Con đường Tơ lụa trên biển cổ đại. Chính khí hậu nóng ẩm bức bí quanh năm lại thúc đẩy nền văn hóa ẩm thực tinh tế 'Thanh đạm giữ vị tươi gốc – Tiết thực thanh nhiệt' (người Quảng Đông coi trọng ninh canh chậm 'Lão hỏa lượng thang' 老火靓汤 từ thảo mộc mát cơ thể và uống trà Thảo Mộc Lương Trà chống nóng ẩm), đồng thời tạo ra xã hội trọng thực dụng thương nghiệp cởi mở hàng đầu Trung Hoa."
      },
      historicalEvolution: "Từ năm 214 TCN Tần Thủy Hoàng mở đất Lĩnh Nam lập Nam Hải quận; năm 203 TCN Triệu Đà dựng Vương quốc Nam Việt đóng đô tại Phiên Ngung (Quảng Châu). Thời Đường–Tống, Quảng Châu lập Thị Bạc Ty đầu tiên trong lịch sử quản lý hàng trăm thuyền buôn Ả Rập–Ba Tư ('Con đường Tơ lụa trên biển'). Từ năm 1757 đến 1842, triều Thanh thi hành chính sách 'Nhất khẩu thông thương' (Hệ thống Thập Tam Hàng Quảng Châu), biến Quảng Châu thành thương cảng duy nhất thông thương phương Tây, tích lũy mạng lưới tài chính Hoa kiều Kiều phê (侨批) khắp Đông Nam Á. Từ 1978, Đặng Tiểu Bình chọn Thâm Quyến – Chu Hải – Sán Đầu lập Đặc khu Kinh tế, mở ra 35 năm liên tục Quảng Đông dẫn đầu GDP toàn Trung Quốc.",
      culturalIdentity: "Văn hóa Lĩnh Nam (岭南文化 Lǐngnán Wénhuà) được cấu thành bởi ba trụ cột lớn: Văn hóa Quảng Phủ (Châu thổ Châu Giang – trọng thực dụng, trà sớm Điểm tâm), Văn hóa Triều Sán (Sán Đầu – Triều Châu – nổi tiếng thương tín đoàn kết toàn cầu, Trà Công Phu và sùng bái tổ tiên) và Văn hóa Khách Gia (Mai Châu – Hà Nguyên – giữ nếp cổ Nho giáo hiếu học và nhà đất Vi Long Ốc). Tinh thần chung là 'Đoàn kết vụ thực, cảm vi thiên hạ tiên' (thực tế, không thích hình thức rườm rà, dám đi trước thiên hạ).",
      heritageAndLandmarks: [
        { hanzi: "开平碉楼与村落", pinyin: "Kāipíng Diāolóu", hanViet: "Khai Bình Điêu Lâu (Giang Môn)", nameVi: "Tháp phòng thủ Khai Bình Điêu Lâu (UNESCO 2007)", significance: "Hơn 1.800 tháp nhà nhiều tầng do Hoa kiều đầu thế kỷ XX xây bằng bê tông cốt thép pha trộn tháp canh Lĩnh Nam với vòm La Mã, Baroque và Hồi giáo." },
        { hanzi: "丹霞山（韶关）", pinyin: "Dānxiáshān", hanViet: "Đan Hà Sơn (Thiều Quan)", nameVi: "Địa mạo Đan Hà Sơn (UNESCO 2010)", significance: "Nơi định danh thuật ngữ địa chất 'Địa mạo Đan Hà' (sa thạch đỏ kỳ vĩ) cho giới địa mạo quốc tế." },
        { hanzi: "陈家祠（广东民间工艺博物馆）", pinyin: "Chénjiācí", hanViet: "Trần Gia Từ (Quảng Châu)", nameVi: "Từ đường Họ Trần – Đỉnh cao Kiến trúc Lĩnh Nam", significance: "Xây dựng năm 1894 với nghệ thuật 'Tam điêu Nhị tố' (chạm gỗ, chạm đá, chạm gạch, đắp gốm, nặn vôi màu) lộng lẫy bậc nhất Hoa Nam." },
        { hanzi: "南越王博物院", pinyin: "Nányuèwáng Bówùyuàn", hanViet: "Bảo tàng Nam Việt Vương", nameVi: "Lăng mộ Triệu Mạt & Cung điện Phiên Ngung", significance: "Lưu giữ bộ áo ngọc khâu tơ vàng (Ti lữ ngọc y) độc nhất và ấn vàng 'Văn Đế Hành Tỷ' thế kỷ II TCN." },
        { hanzi: "潮州广济桥与南澳岛", pinyin: "Cháozhōu Guǎngjìqiáo", hanViet: "Cầu Quảng Tế Triều Châu", nameVi: "Cầu Quảng Tế (1171) & Cổ thành Triều Châu", significance: "Cây cầu cổ duy nhất trên thế giới có nhịp cầu nổi giữa sông bằng thuyền gỗ tháo mở hàng ngày cho tàu lớn đi qua." }
      ],
      intangibleHeritage: "Việt kịch Lĩnh Nam (粤剧 Yuèjù – UNESCO); Múa Sư tử tỉnh Nam Phái (Quảng Đông Tinh Sư 广东醒狮 – không thể thiếu mỗi dịp khai trương, Tết); Nghệ thuật Trà Công Phu Triều Châu (潮州工夫茶); Gốm nung thạch anh Phật Sơn; và kỹ thuật lụa Hương Vân Sa (香云纱) nhuộm củ nâu dãi nắng sương tự nhiên.",
      culinaryCulture: {
        styleOverview: "Việt Thái (粤菜 Yuècài) là ngôi sao rực rỡ bậc nhất của Bát Đại Thái Hệ trên toàn thế giới, chia ba nhánh Quảng Châu – Triều Sán – Khách Gia (Đông Giang), lấy 'Thanh – Tiên – Nộn – Hoạt – Sảng – Hương' làm tiêu chuẩn tối thượng: tôn trọng vị ngọt nguyên bản của nguyên liệu, không dùng gia vị nặng át mùi.",
        signatureDishes: [
          { hanzi: "早茶点心（虾饺 · 烧卖 · 叉烧包 · 肠粉）", pinyin: "Zǎochá diǎnxīn (Xiājiǎo, Shāomài, Chāshāobāo)", hanViet: "Trà sớm Điểm tâm Quảng Đông (Yum Cha)", description: "Văn hóa 'Ẩm trà' trứ danh (Yǐnchá – 饮茶): há cảo tôm vỏ bột lọc trong suốt 12 nếp gấp, xíu mại gạch cua, bánh bao xá xíu nứt vỏ và bánh cuốn tráng bột gạo mềm mướt." },
          { hanzi: "白切鸡（湛江白切鸡）", pinyin: "Báiqiējī", hanViet: "Bạch thiết kê (Gà luộc da giòn trạm giang)", description: "Thước đo tay nghề của đầu bếp Quảng Đông: gà thả vườn chần nhiệt độ 85–90°C giữ độ chín vừa xương hơi hồng đỏ, thịt mọng nước chấm dầu gừng hành tăm." },
          { hanzi: "老火靓汤", pinyin: "Lǎohuǒ liàngtāng", hanViet: "Lão hỏa lượng thang (Canh hầm chậm Lĩnh Nam)", description: "Văn hóa dưỡng sinh qua từng chén canh ninh 3–6 tiếng từ xương, vịt, cá kết hợp vị thuốc bắc như hoài sơn, kỷ tử, đẳng sâm, trần bì Tân Hội." },
          { hanzi: "广式烧鹅", pinyin: "Guǎngshì shāo'é", hanViet: "Quảng thức thiêu nga (Ngỗng quay da giòn Quảng Đông)", description: "Ngỗng tơ Cổ Tỉnh ướp ngũ vị, húng thảo, khâu kín bụng quay lò than đạt da màu hổ phách căng giòn quyện mỡ thơm dùng kèm mứt mận chua ngọt." },
          { hanzi: "潮汕牛肉火锅", pinyin: "Cháoshàn niúròu huǒguō", hanViet: "Triều Sán ngưu nhục hỏa oa (Lẩu bò tươi Triều Sán)", description: "Thịt bò giết mổ trong vòng 3–4 giờ được đầu bếp lóc chuẩn từng phần (nạm, gầu, bắp, cổ vai – Điếu Long, Thì Bỉnh), nhúng nước xương trong 8 giây và chấm xốt Sa Trà." }
        ]
      },
      economyAndIndustry: "GDP năm 2025–2026 vượt 1,92 nghìn tỷ USD — quy mô lớn hơn nhiều nền kinh tế G20 và giữ ngôi vị số 1 Trung Quốc 35 năm liền! Là động lực chính của Vùng Vịnh Lớn (GBA): Thâm Quyến dẫn đầu AI, phần cứng & xe điện (Huawei, Tencent, BYD, DJI, Ping An); Quảng Châu nổi bật ô tô (GAC), thương mại xuyên biên giới (Shein, Canton Fair – Hội chợ Xuất nhập khẩu lớn nhất Trung Quốc 2 kỳ/năm); Đông Quản ('Công xưởng sản xuất phần cứng toàn cầu'), Phật Sơn (Midea gia dụng & vật liệu xây dựng); và Chu Hải – Huệ Châu.",
      vietnamConnectivity: "Quảng Đông là đối tác thương mại – đầu tư và cung ứng phần cứng trực tiếp số 1 của Việt Nam (tốc độ sản xuất nguyên mẫu PCB tại Hoa Cường Bắc – Thâm Quyến chỉ 7 ngày; linh kiện điện tử – vải vóc chợ Trung Đại Quảng Châu – nội thất Thuận Đức Phật Sơn xuất ồ ạt sang Việt Nam). Trong lịch sử cận đại, Quảng Châu là nơi Chủ tịch Hồ Chí Minh thành lập Hội Việt Nam Cách mạng Thanh niên (1925) và mở các lớp huấn luyện cán bộ tại số 13–13B đường Văn Minh. Về đại học: Đại học Trung Sơn (中山大学 – 985/Song Nhất Lưu ở Quảng Châu–Chu Hải–Thâm Quyến), Đại học Công nghệ Hoa Nam (SCUT – 985/Song Nhất Lưu), Đại học Tế Nam (211 – nổi tiếng tiếp nhận học giả Đông Nam Á) và Đại học Thâm Quyến đón hàng nghìn sinh viên Việt Nam.",
      notableFigures: [
        { hanzi: "惠能（六祖大师）", pinyin: "Huìnéng", hanViet: "Lục Tổ Huệ Năng (Thiều Quan – Nam Hoa Tự)", lifespan: "638–713", contribution: "Vị tổ thứ sáu sáng lập Thiền tông Nam Tông ('Đốn ngộ thành Phật') với bộ *Pháp Bảo Đàn Kinh* có ảnh hưởng sâu rộng sang Thiền phái Trúc Lâm Việt Nam." },
        { hanzi: "康有为 · 梁启超", pinyin: "Kāng Yǒuwéi · Liáng Qǐchāo", hanViet: "Khang Hữu Vi & Lương Khải Siêu", lifespan: "Cuối XIX – đầu XX", contribution: "Hai nhà tư tưởng Duy Tân Bách Nhật (1898) quê Nam Hải và Tân Hội, tác phẩm của họ (*Ẩm Băng Thất Toàn Tập*) truyền cảm hứng sâu sắc cho Phan Bội Châu và Phan Châu Trinh của Việt Nam." },
        { hanzi: "孙中山", pinyin: "Sūn Zhōngshān", hanViet: "Tôn Trung Sơn (Tôn Dật Tiên – Trung Sơn)", lifespan: "1866–1925", contribution: "Vị Quốc phụ cách mạng dân chủ Trung Hoa quê Hương Sơn (nay là TP. Trung Sơn, Quảng Đông)." },
        { hanzi: "袁崇焕 · 詹天佑", pinyin: "Yuán Chónghuàn · Zhān Tiānyòu", hanViet: "Viên Sùng Hoán & Chiêm Thiên Hữu", lifespan: "Thế kỷ XVII / XIX–XX", contribution: "Danh tướng giữ Ninh Viễn quê Đông Quản và Cha đẻ ngành Đường sắt Trung Quốc quê Nam Hải." }
      ],
      travelAndLogistics: "Tháng 10 đến tháng 3 năm sau thời tiết mát ráo tuyệt đẹp (tránh mùa mưa nồm tháng 5–6 và bão tháng 7–9). Sân bay Quốc tế Bạch Vân Quảng Châu (CAN) và Bảo An Thâm Quyến (SZX) đều có nhiều chuyến bay thẳng hàng ngày từ Hà Nội, TP.HCM, Đà Nẵng! Tàu cao tốc kết nối Quảng Châu Nam – Thâm Quyến Bắc chỉ 29 phút, nối sang Tây Cửu Long (Hồng Kông) thêm 14 phút. Gợi ý 4 ngày: Ngày 1–2 Quảng Châu (Trần Gia Từ – Nam Việt Vương – Đảo Sa Diện – Tháp Quảng Châu & Trà sớm Điểm Tâm); Ngày 3–4 Thâm Quyến (Chợ điện tử Hoa Cường Bắc – Làng tranh Đại Phân – Vịnh Thâm Quyến).",
      mapCoordinates: { mapX: 576, mapY: 496, historicalCapitalEra: "Nam Việt (Phiên Ngung) · Thập Tam Hàng · Thâm Quyến SEZ", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    },
    "prov-hainan": {
      identity: {
        hanziSimplified: "海南省",
        hanziTraditional: "海南省",
        pinyin: "Hǎinán Shěng",
        hanViet: "Hải Nam Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "琼",
        abbreviationPinyin: "Qióng (Quỳnh)",
        abbreviationOrigin: "Nằm ở phía nam Eo biển Quỳnh Châu trên biển Đông nên mang tên Hải Nam. Chữ viết tắt 琼 (Quỳnh – ngọc đẹp / tên cổ Quỳnh Châu thời Đường–Tống) xuất phát từ núi Bạch Thạch (Quỳnh Sơn) gần Hải Khẩu với mong ước hòn đảo ngọc xanh giữa biển khơi.",
        capitalCity: "Hải Khẩu (海口市 Hǎikǒu Shì – Hải Khẩu)"
      },
      geographyAndClimate: {
        summary: "Là tỉnh đảo duy nhất đồng thời là tỉnh cực Nam của Trung Quốc (quản lý Đảo Hải Nam trên bậc thềm thứ ba cùng các vùng biển đảo rộng lớn). Cấu trúc địa hình hòn đảo vươn cao thành khối tròn ở trung tâm với đỉnh Ngũ Chỉ Sơn (五指山 – 1.867 m) rồi thoải thấp đồng tâm ra biển xung quanh, bao bọc bởi bãi cát trắng Tam Á và rừng mưa nhiệt đới nguyên sinh. Là tỉnh duy nhất của Trung Quốc nằm hoàn toàn trong vùng khí hậu nhiệt đới gió mùa hải dương: quanh năm xanh tươi không có mùa đông.",
        causality: "Vị thế cách trở Eo biển Quỳnh Châu khiến Hải Nam suốt thời phong kiến được coi là vùng biên viễn hải ngoại 'Thiên nhai hải giác' (chân trời góc biển – nơi triều đình thường lưu đày danh thần như Tô Đông Pha, Hải Thụy). Nhưng chính vùng biển đảo nhiệt đới ấm áp tách biệt này lại tạo nên hệ sinh thái dừa – cà phê Hưng Long – cao su nhiệt đới độc nhất cả nước, đồng thời biến Hải Nam thành thiên đường nghỉ dưỡng mùa đông cho người Hoa Bắc và đặc khu cảng thương mại tự do toàn đảo."
      },
      historicalEvolution: "Quê hương cổ xưa của dân tộc bản địa Lê (黎族 Lízú) từ hơn 3.000 năm trước; năm 110 TCN Hán Vũ Đế thiết lập Chu Nhai quận và Đam Nhĩ quận trên đảo. Năm 1097–1100, đại thi hào Tô Thức (Tô Đông Pha) bị đày tới Đam Châu (Hải Nam), mở trường giảng học truyền bá văn minh văn tự làm bừng sáng giáo dục hải đảo (vùng Đam Châu tới tận ngày nay vẫn say mê ngâm thơ). Trong thế kỷ XIV, nữ anh kiệt Hoàng Đạo Bà học nghệ thuật dệt vải từ phụ nữ người Lê ở Nhai Châu trước khi đưa ra Giang Nam. Năm 1988, Hải Nam tách khỏi Quảng Đông trở thành tỉnh thứ 31 và Đặc khu Kinh tế lớn nhất Trung Quốc; từ 2020 xây dựng Cảng Thương mại Tự do Hải Nam (Hainan FTP – miễn thuế toàn đảo từ cuối 2025).",
      culturalIdentity: "Sự kết hợp dịu dàng giữa văn hóa biển cả ngư dân Lĩnh Nam (thờ Ma Tổ, nói tiếng Hải Nam thuộc nhánh Mân) với văn hóa dệt thổ cẩm nguyên bản của dân tộc Lê – Miêu vùng núi Ngũ Chỉ Sơn và văn hóa thư viện hải đảo lưu dấu của Tô Đông Pha ('Nhữ thị Đam Châu nhân').",
      heritageAndLandmarks: [
        { hanzi: "五指山与热带雨林国家公园", pinyin: "Wǔzhǐshān Rèdài Yǔlín", hanViet: "Ngũ Chỉ Sơn & Công viên Rừng Mưa Nhiệt đới", nameVi: "Vườn Quốc gia Rừng mưa Nhiệt đới Hải Nam", significance: "Bảo tồn loài Vượn Hải Nam (Hainan Gibbon – loài linh trưởng quý hiếm bậc nhất hành tinh chỉ còn vài chục cá thể)." },
        { hanzi: "天涯海角与南山文化旅游区", pinyin: "Tiānyá Hǎijiǎo · Nánshān", hanViet: "Thiên Nhai Hải Giác & Tượng Quán Âm Nam Sơn", nameVi: "Thắng cảnh Chân Trời Góc Biển & Tượng Quán Âm Nam Sơn Tam Á", significance: "Quần thể Phật giáo bên bờ biển nổi tiếng với tượng Quán Thế Âm Ba Mặt cao 108 m (cao hơn Tượng Nữ thần Tự do)." },
        { hanzi: "东坡书院（儋州）", pinyin: "Dōngpō Shūyuàn", hanViet: "Thư Viện Đông Pha (Đam Châu)", nameVi: "Thư viện Tải Tửu Đường của Tô Đông Pha (1098)", significance: "Nơi Tô Thức dạy học gieo mầm văn hiến khoa cử cho đảo Hải Nam từ thời Bắc Tống." },
        { hanzi: "骑楼老街（海口）", pinyin: "Qílóu Lǎojiē", hanViet: "Phố cổ Kỵ Lâu Hải Khẩu", nameVi: "Quần thể Nhà vòm Kỵ Lâu Hải Khẩu (Di sản đường phố đẹp nhất Trung Quốc)", significance: "Hơn 600 ngôi nhà phố cổ xây theo kiểu hành lang che mưa nắng Đông Nam Á mang dấu ấn Hoa kiều hồi hương thế kỷ XIX–XX." },
        { hanzi: "槟榔谷黎苗文化区", pinyin: "Bīnglánggǔ Lízú", hanViet: "Thung lũng Tân Lang (Dân tộc Lê)", nameVi: "Bảo tàng Sống Văn hóa Người Lê & Miêu", significance: "Lưu giữ kiến trúc nhà hình thuyền lật (Thuyền hình ốc 船型屋) độc đáo của người Lê cổ." }
      ],
      intangibleHeritage: "Kỹ thuật kéo sợi, nhuộm, dệt và thêu truyền thống của dân tộc Lê (黎族传统纺染织绣技艺 – được UNESCO ghi danh Di sản cần bảo vệ khẩn cấp, nguồn gốc của kỹ thuật dệt bông Hoa Hạ); Kỹ thuật làm thuyền buồm cổ; Chạm khắc vỏ dừa; và Quỳnh kịch (琼剧) bằng tiếng Hải Nam.",
      culinaryCulture: {
        styleOverview: "Quỳnh Thái (琼菜 Qióngcài) tận dụng tối đa sản vật nhiệt đới tại chỗ: gà Văn Xương, cua Hòa Lạc, dê Đông Sơn, vịt Gia Tích ('Hải Nam tứ đại danh thái'), trái dừa tươi và thảo mộc núi đá vôi với kỹ thuật luộc, hấp giữ độ ngọt mát và không dầu mỡ.",
        signatureDishes: [
          { hanzi: "文昌鸡", pinyin: "Wénchāngjī", hanViet: "Văn Xương kê (Gà Văn Xương luộc chấm xốt tắc tỏi gừng)", description: "Top 1 Tứ đại danh thái Hải Nam (nguồn gốc của món Cơm gà Hải Nam lan tỏa khắp Singapore – Malaysia): gà ăn dừa và hạt đa băm, luộc chín mềm da vàng bóng, chấm xì dầu gừng tỏi ớt vắt chanh quất." },
          { hanzi: "椰子鸡火锅", pinyin: "Yēzǐjī huǒguō", hanViet: "Lẩu gà nước dừa tươi", description: "Đun sôi nước dùng làm từ 100% nước dừa xiêm Văn Xương tươi ngọt (không giọt nước lọc) thả gà Văn Xương chín trong 3 phút ăn kèm cùi dừa non giòn sật." },
          { hanzi: "加积鸭 · 东山羊 · 和乐蟹", pinyin: "Jiājīyā · Dōngshānyáng · Hélèxiè", hanViet: "Vịt Gia Tích · Dê Đông Sơn · Cua Hòa Lạc", description: "Bộ ba sản vật hoàng kim còn lại trong Tứ đại danh thái Hải Nam: vịt béo thịt dày, dê ăn thảo dược núi đá Vạn Ninh không mùi hôi, cua biển gạch béo ngập mai." },
          { hanzi: "清补凉", pinyin: "Qīngbǔliáng", hanViet: "Thanh bổ lương (Chè giải nhiệt nước dừa)", description: "Món giải nhiệt mùa hè trứ danh Hải Nam gồm sữa dừa tươi mát rưới lên đậu xanh, ý dĩ, hạt sen, bột lọc, dưa hấu, táo đỏ và khoai môn." },
          { hanzi: "糟粕醋火锅", pinyin: "Zāopòcù huǒguō", hanViet: "Lẩu giấm bỗng rượu gạo Văn Xương", description: "Nước dùng làm từ men cái bỗng rượu gạo lên men chua dịu tự nhiên nấu cùng dầu tỏi ớt vàng rực để nhúng hải sản tươi sống." }
        ]
      },
      economyAndIndustry: "Trọng điểm chiến lược quốc gia về Cảng Thương mại Tự do Hải Nam (Free Trade Port – thuế suất doanh nghiệp & cá nhân tối đa 15%, trung tâm mua sắm miễn thuế lớn nhất thế giới ở Tam Á – Hải Khẩu), Bãi phóng Tàu vũ trụ Văn Xương (phóng các tàu Thần Châu/Thường Nga/Trạm Thiên Cung), trung tâm nhân giống nông nghiệp nhiệt đới Nam Phồn ('Thung lũng Silicon hạt giống') và Diễn đàn Châu Á Bác Ngao.",
      vietnamConnectivity: "Hải Nam có vị trí địa lý gần Vịnh Bắc Bộ Việt Nam nhất bằng đường biển, chia sẻ cùng hệ sinh thái nông nghiệp nhiệt đới (cà phê, cao su, dừa, trái cây nhiệt đới, nghề cá Biển Đông) và từng là một tuyến giao thương quan trọng giữa thuyền buôn Việt Nam – Trung Hoa. Chính sách miễn thị thực 59 quốc gia (bao gồm nhiều diện đối tác và du lịch nhóm) cùng các đại học như Đại học Hải Nam (海南大学 – 211/Song Nhất Lưu) và Đại học Sư phạm Hải Nam tạo kết nối ngày càng tăng về du lịch biển, thủy sản và thương mại miễn thuế.",
      notableFigures: [
        { hanzi: "丘浚", pinyin: "Qiū Jùn", hanViet: "Khâu Tuấn", lifespan: "1421–1495", contribution: "Danh sĩ – Đại học sĩ triều Minh quê Quỳnh Sơn (Hải Khẩu), người viết bộ *Đại Học Diễn Nghĩa Bổ* (sách kinh tế chính trị xuất sắc thời Minh)." },
        { hanzi: "海瑞（海青天）", pinyin: "Hǎi Ruì", hanViet: "Hải Thụy (Hải Thanh Thiên)", lifespan: "1514–1587", contribution: "Vị quan thanh liêm liều mạng dâng sớ can gián vua Gia Tĩnh nổi tiếng không kém Bao Công, quê Quỳnh Sơn (Hải Nam)." },
        { hanzi: "宋庆龄（祖籍海南文昌）", pinyin: "Sòng Qìnglíng", hanViet: "Tống Khánh Linh (Tổ quán Văn Xương)", lifespan: "1893–1981", contribution: "Gia tộc họ Tống gốc huyện Văn Xương (Hải Nam) giữ vai trò trung tâm lịch sử Trung Quốc cận đại." }
      ],
      travelAndLogistics: "Tháng 11 đến tháng 4 năm sau là mùa nắng ráo dễ chịu 22–28°C (tránh tháng 8–10 hay có bão). Hải Nam sở hữu **Đường sắt cao tốc Vòng quanh Đảo đầu tiên trên thế giới** chạy trọn 653 km quanh bờ biển nối Sân bay Mỹ Lan Hải Khẩu (HAK) tới Tam Á Phượng Hoàng (SYX) chỉ trong 1h30! Hành trình 4 ngày: Ngày 1 Hải Khẩu Phố cổ Kỵ Lâu – Hỏa sơn Khẩu; Ngày 2 Làng Văn hóa Lê–Miêu Tân Lang Cốc; Ngày 3–4 Tam Á (Vịnh Á Long – Tượng Quán Âm Nam Sơn – Đảo Ngô Chi Châu).",
      mapCoordinates: { mapX: 516, mapY: 568, historicalCapitalEra: "Quỳnh Châu cổ · Cảng Thương mại Tự do Hải Nam", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    },
    "prov-sichuan": {
      identity: {
        hanziSimplified: "四川省",
        hanziTraditional: "四川省",
        pinyin: "Sìchuān Shěng",
        hanViet: "Tứ Xuyên Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "川 / 蜀",
        abbreviationPinyin: "Chuān / Shǔ (Xuyên / Thục)",
        abbreviationOrigin: "Tên Tứ Xuyên bắt nguồn từ 'Xuyên Hạp Tứ Lộ' thời Bắc Tống (Ích Châu, Tử Châu, Lợi Châu, Quỳ Châu – bốn vùng sông ngòi). Chữ tắt 蜀 (Thục) lưu giữ ký ức Vương quốc Cổ Thục lừng lẫy thời Thương–Chu tại đồng bằng Thành Đô.",
        capitalCity: "Thành Đô (成都市 Chéngdū Shì – Thành Đô)"
      },
      geographyAndClimate: {
        summary: "Nằm trên đường phân chia vĩ đại giữa bậc thềm thứ nhất và bậc thềm thứ hai địa hình Trung Quốc: nửa phía tây là Cao nguyên Tứ Xuyên – Tây Tạng đồ sộ (khu Tự trị Tây Tạng Cẩm Tứ với đỉnh Cống Dát cao 7.509 m); nửa phía đông là Bồn địa Tứ Xuyên (四川盆地 – 'Bồn địa Đỏ') được vây kín bởi Tần Lĩnh, Đại Ba Sơn và Hoành Đoạn Sơn, với đồng bằng Thành Đô bằng phẳng ở chính giữa nhờ hệ thống thủy lợi Đô Giang Yển dẫn nước sông Dân Giang. Khí hậu ôn hòa ẩm nhiều mây ở bồn địa ('Thục khuyển phệ nhật' – chó Tứ Xuyên thấy mặt trời liền sủa vì ít nắng) và băng tuyết vùng cao tây bắc.",
        causality: "Núi cao 'Thục đạo nan, nan ư thướng thanh thiên' biến lòng chảo Thành Đô thành vùng đất 'Thiên Phủ Chi Quốc' (Kho báu Trời ban) khép kín bình yên mỗi khi Trung Nguyên đại loạn (thời An Sử chi loạn hay Kháng chiến chống Nhật). Nhờ khí hậu không cực nóng hay băng giá như phương Bắc, lại không lo lụt hạn nhờ Đô Giang Yển suốt 2.280 năm, người Thành Đô hình thành tâm lý hưởng thụ cuộc sống từ tốn, nhàn nhã ('Ba Thích' 巴适) ngồi uống trà cả buổi bên bờ sông Cẩm Giang. Sương ẩm quanh năm đồng thời đẩy vị cay nóng 'Ma Lạt' (tê + cay) lên tầm nghệ thuật trị ẩm."
      },
      historicalEvolution: "Nơi xuất lộ nền văn minh đồng thanh kỳ bí Cổ Thục ở Tam Tinh Đôi (广汉三星堆, khoảng 1700–1150 TCN) và Kim Sa (Thái Dương Thần Điểu). Thời Chiến Quốc, Lý Băng đào công trình Đô Giang Yển (256 TCN) biến Tứ Xuyên thành vựa lương thực giúp nước Tần thống nhất Trung Quốc. Thời Tam Quốc, Lưu Bị – Gia Cát Lượng lập nước Thục Hán định đô tại Thành Đô (Vũ Hầu Từ). Thời Đường–Tống, Thành Đô trở thành thủ phủ văn học (Đỗ Phủ Thảo Đường, Lý Bạch, Tam Tô) và nơi phát hành **tiền giấy đầu tiên trong lịch sử nhân loại – Giao Tử (交子, 1024 CN)** thời Bắc Tống!",
      culturalIdentity: "Văn hóa Ba Thục (巴蜀文化 Bāshǔ Wénhuà): một thái độ sống vừa tài hoa thi họa (quê hương Lý Bạch, Tư Mã Tương Như, Tô Đông Pha), vừa phóng khoáng thong dong hưởng lạc ('Thiếu bất nhập Xuyên, lão bất xuất Thục' – trẻ vào Tứ Xuyên dễ sa đà hưởng nhàn mất chí tiến thủ!), tôn thờ tinh thần trung nghĩa Vũ Hầu và bảo tồn song song văn hóa người Tạng Khang–Gia Nhung, người Di tại Lương Sơn và văn hóa người Khương.",
      heritageAndLandmarks: [
        { hanzi: "青城山—都江堰", pinyin: "Qīngchéngshān · Dūjiāngyàn", hanViet: "Thanh Thành Sơn & Đô Giang Yển", nameVi: "Thủy lợi Đô Giang Yển (256 TCN) & Thanh Thành Sơn (UNESCO 2000)", significance: "Công trình thủy lợi không đập chắn duy nhất từ cổ đại vẫn hoạt động tưới tiêu suốt gần 2.300 năm, cùng tổ đình Đạo giáo Thanh Thành Sơn." },
        { hanzi: "九寨沟与黄龙", pinyin: "Jiǔzhàigōu · Huánglóng", hanViet: "Cửu Trại Câu & Hoàng Long (A Bá)", nameVi: "Thung lũng Nước ngũ sắc Cửu Trại Câu & Hoàng Long (UNESCO)", significance: "Kỳ quan địa chất hồ vôi canxi xanh ngọc bích tầng bậc đẹp bậc nhất Châu Á giữa núi tuyết dãy Dân Sơn." },
        { hanzi: "峨眉山—乐山大佛", pinyin: "Éméishān · Lèshān Dàfó", hanViet: "Nga Mi Sơn & Lạc Sơn Đại Phật", nameVi: "Nga Mi Sơn & Phật Đá Lạc Sơn (UNESCO Di sản Kép 1996)", significance: "Đạo tràng Phổ Hiền Bồ Tát và tượng Phật Di Lặc tạc vách núi đá cao 71 m lớn nhất thế giới từ thời Đường để trấn thủy ba dòng sông." },
        { hanzi: "三星堆博物馆与武侯祠 · 杜甫草堂", pinyin: "Sānxīngduī · Wǔhóucí", hanViet: "Bảo tàng Tam Tinh Đôi · Vũ Hầu Từ · Đỗ Phủ Thảo Đường", nameVi: "Văn minh Đồng thanh Tam Tinh Đôi & Đền Vũ Hầu", significance: "Cổ vật Thần thụ đồng 3,96 m, Mặt nạ mắt lồi và Đền thờ Gia Cát Lượng duy nhất quân–thần hợp tế." },
        { hanzi: "四川大熊猫栖息地（成都大熊猫基地）", pinyin: "Dàxióngmāo Qīxīdì", hanViet: "Khu Bảo tồn Gấu Trúc Lớn Tứ Xuyên (UNESCO)", nameVi: "Quê hương Gấu trúc Khổng lồ Thành Đô – Ngọa Long", significance: "Quần thể sinh cảnh bảo tồn hơn 80% số cá thể Gấu trúc khổng lồ (Đại Hùng Miêu) hoang dã toàn cầu." }
      ],
      intangibleHeritage: "Nghệ thuật Biến Diện và Phun lửa Xuyên kịch (川剧变脸 Chuānjù biànliǎn – bí thuật đổi mặt nạ lụa chớp mắt trong tích tắc); Thêu Thục Tú (蜀绣 – một trong Tứ đại Danh tú từ thời Hán); Gấm Thục Cẩm (蜀锦); Nghệ thuật đan tre và sơn mài Thành Đô; và văn hóa Trà quán Cổ (Cái Oản Trà 盖碗茶).",
      culinaryCulture: {
        styleOverview: "Xuyên Thái (川菜 Chuāncài) có phạm vi ảnh hưởng phổ biến nhất Trung Quốc nhờ nguyên lý 'Bách thái bách vị' (trăm món trăm vị), vượt qua vị cay đơn sắc để phối hợp tới 24 hương vị phức tạp: Ngư hương, Ma lạt, Quái vị, Hồng du, Gia thường dùng Đậu biện tương Bì Huyện và Hoa tiêu Hán Nguyên.",
        signatureDishes: [
          { hanzi: "麻婆豆腐", pinyin: "Mápó dòufu", hanViet: "Ma Bà đậu hủ", description: "Kiệt tác 8 tiêu chuẩn 'Ma, Lạt, Thang, Hương, Tô, Nộn, Tiên, Hoạt' của bà chủ quán mặt rỗ (Trần Ma Bà, 1862): đậu phụ non vuông vắn không vỡ ngập trong xốt bò băm Đậu Biện Bì Huyện rắc bột hoa tiêu Hán Nguyên." },
          { hanzi: "回锅肉", pinyin: "Huíguōròu", hanViet: "Hồi oa nhục (Thịt ba chỉ hai lần chảo)", description: "Vua của cơm nhà Tứ Xuyên: thịt mông ba chỉ luộc rồi thái lát mỏng áp chảo xèo mỡ ('Đăng trản oa' cong tròn) đảo cùng Đậu Biện tương, đậu xị và lá tỏi xanh." },
          { hanzi: "宫保鸡丁", pinyin: "Gōngbǎo jīdīng", hanViet: "Cung Bảo kê đinh (Gà xào lạc Cung Bảo)", description: "Mang tước hiệu Thái tử Thiếu bảo Đinh Bảo Trinh thời Thanh: ức gà thái hạt lựu xào nhanh vị 'Hồ lạt lệ chi' (ngọt thanh quyện chua nhẹ ớt khô và lạc chiên giòn)." },
          { hanzi: "水煮牛肉 & 水煮鱼", pinyin: "Shuǐzhǔ niúròu", hanViet: "Thủy chử ngưu nhục", description: "Lát thịt bò/cá ướp mượt chần vừa chín trong nước hầm giá đỗ cần tây rồi dội chảo dầu nóng rực ngập ớt khô hoa tiêu bùng hương." },
          { hanzi: "担担面 · 龙抄手 · 钟水饺", pinyin: "Dàndànmiàn · Lóngchāoshǒu", hanViet: "Đam Đam diện · Long Sao Thủ · Chung Thủy Giáo", description: "Bộ ba tiểu thực bất hủ Thành Đô từ gánh hàng rong phố cổ thế kỷ XIX." }
        ]
      },
      economyAndIndustry: "Trụ cột phía tây của Vòng kinh tế Thành Đô–Trùng Khánh (~6 nghìn tỷ NDT GDP tỉnh, đứng thứ 5–6 cả nước), trung tâm chế tạo sản phẩm Apple iPad toàn cầu (Foxconn Thành Đô), chip Intel – Texas Instruments, hàng không vũ trụ (Tiêm-20, động cơ phản lực), công nghiệp thủy điện sạch (chiếm sản lượng điện nước lớn nhất nước truyền về Giang–Chiết–Quảng Đông) và trung tâm khởi phát tuyến tàu hỏa Trung–Âu tốc độ cao.",
      vietnamConnectivity: "Thành Đô có chuyến bay thẳng tới Hà Nội và TP.HCM, thu hút đông đảo du khách Việt đi Cửu Trại Câu, Tứ Cô Nương Sơn và Nga Mi Sơn. Ngoài ra thiết bị thủy điện, phân bón kali và linh kiện điện tử Thành Đô–Miên Dương xuất vào Việt Nam. Giáo dục nổi bật với Đại học Tứ Xuyên (四川大学 – 985/Song Nhất Lưu, nổi danh Y khoa Hoa Tây & Sử học Đường–Tống), Đại học Khoa học Điện tử Trung Quốc (UESTC – 985/Song Nhất Lưu, top 1 kỹ thuật vô tuyến–viễn thông) và Đại học Giao thông Tây Nam (211 – đường sắt cao tốc).",
      notableFigures: [
        { hanzi: "李白（蜀中长居/江油）", pinyin: "Lǐ Bái", hanViet: "Lý Bạch (Thi Tiên)", lifespan: "701–762", contribution: "Lớn lên tại Thanh Liên Hương (Giang Du, Tứ Xuyên), nguồn cảm hứng viết nên thiên cổ tuyệt xướng *Thục Đạo Nan* và *Nga Mi Sơn Nguyệt Ca*." },
        { hanzi: "苏洵 · 苏轼（苏东坡）· 苏辙", pinyin: "Sū Xún · Sū Shì · Sū Zhé", hanViet: "Tam Tô Mi Sơn", lifespan: "Thế kỷ XI", contribution: "Ba cha con kỳ tài cùng lọt vào 'Đường Tống Bát Đại Gia' quê ở Mi Sơn (Tứ Xuyên) — riêng Tô Đông Pha là biểu tượng toàn năng nhất văn hóa Tống." },
        { hanzi: "司马相如 · 卓文君", pinyin: "Sīmǎ Xiàngrú", hanViet: "Tư Mã Tương Như", lifespan: "179–117 TCN", contribution: "Bậc thầy thể văn Hán Phú lẫy lừng thời Tây Hán quê Thành Đô, với mối tình Cầm–Tâm bất hủ cùng Trác Văn Quân." },
        { hanzi: "邓小平", pinyin: "Dèng Xiǎopíng", hanViet: "Đặng Tiểu Bình", lifespan: "1904–1997", contribution: "Nhà cải cách tổng công trình sư của Trung Quốc hiện đại quê Quảng An (Tứ Xuyên)." }
      ],
      travelAndLogistics: "Tháng 3–5 và tháng 9–11 đẹp nhất (riêng Cửu Trại Câu tháng 10 lá vàng lá đỏ phản chiếu hồ ngọc bích lộng lẫy nhất hành tinh). Sân bay Thiên Phủ (TFU) và Song Lưu (CTU); tuyến đường sắt cao tốc Xuyên–Thanh mới mở đưa khách thẳng từ Ga Thành Đô Đông tới Cửu Trại Câu (Ga Hoàng Long Cửu Trại) chỉ còn 1h40! Hành trình 5 ngày: Ngày 1 Thành Đô (Căn cứ Gấu Trúc – Vũ Hầu Từ – Đỗ Phủ Thảo Đường – Ngõ Khoan Trách); Ngày 2 Tam Tinh Đôi – Đô Giang Yển; Ngày 3–4 Cửu Trại Câu – Hoàng Long; Ngày 5 Lạc Sơn Đại Phật – Nga Mi Sơn.",
      mapCoordinates: { mapX: 362, mapY: 368, historicalCapitalEra: "Cổ Thục Tam Tinh Đôi · Thục Hán (Thành Đô)", economicCorridor: "Thành Đô–Trùng Khánh (成渝经济圈)" }
    },
    "prov-guizhou": {
      identity: {
        hanziSimplified: "贵州省",
        hanziTraditional: "貴州省",
        pinyin: "Guìzhōu Shěng",
        hanViet: "Quý Châu Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "贵 / 黔",
        abbreviationPinyin: "Guì / Qián (Quý / Kiềm)",
        abbreviationOrigin: "Tên Quý Châu lấy từ núi Quý Sơn gần Quý Dương (nơi đặt Quý Châu Tuyên Úy Ty năm 1413 thời Minh lập tỉnh). Chữ viết tắt 黔 (Kiềm) bắt nguồn từ Kiềm Trung Quận thời Tần–Chiến Quốc (nghĩa gốc 'đen thẫm' ám chỉ màu rừng già rậm mù sương hoặc khăn đen của cư dân bản địa).",
        capitalCity: "Quý Dương (贵阳市 Guìyáng Shì – 'Thành phố Rừng Rậm Sảng khoái')"
      },
      geographyAndClimate: {
        summary: "Nằm ở phía đông Cao nguyên Vân Quý trên bậc thềm thứ hai địa hình Trung Quốc — là tỉnh DUY NHẤT ở Trung Quốc hoàn toàn không có vùng đồng bằng thực thụ ('Địa vô tam lý bình' – đất chẳng có ba dặm bằng phẳng), hơn 92,5% diện tích là núi đá vôi Karst và hẻm núi sâu hun hút! Tuy nhiên độ cao trung bình 1.100 m lại ban tặng khí hậu ôn hòa quanh năm 'Thiên vô tam nhật tình' (trời chẳng có ba ngày nắng liền vì nhiều mây ẩm) nhưng mùa hè mát rượi ~23°C ('Thủ đô Tránh nóng Trung Hoa').",
        causality: "Địa hình núi đá vôi Karst hiểm trở chia cắt tạo nên hàng trăm hẻm núi cô lập là nơi bảo tồn hơn 18 dân tộc thiểu số (Miêu, Bố Y, Đồng, Thủy...) với hàng nghìn bộ trang phục bạc truyền thống và làng cổ giữ nguyên ngôn ngữ hàng thiên niên kỷ ('Tiên Sơn Thập Lý bất đồng phong'). Nhờ khí hậu mát ẩm 100% thiếu ánh nắng gay gắt và khan hiếm muối cổ đại ('Phu nhân xưng là đất muối quý như vàng'), người Quý Châu sáng tạo kỹ thuật lên men rau ớt tự nhiên không cần muối nhiều bằng gạo nếp và cà chua dại — khai sinh trường phái 'Vị chua cay lên men' (Khải Lý Toan Thang Ngư) độc nhất trong ẩm thực Hoa Hạ."
      },
      historicalEvolution: "Thời Xuân Thu–Hán thuộc Vương quốc Dạ Lang cổ ('Dạ Lang tự đại' 庄蹻/Dạ Lang quốc cổ ở Biển Tiết–An Thuận). Năm 1413 (Minh Vĩnh Lạc thứ 11), triều Minh phá bỏ chế độ Thổ Ty thiết lập chính thức tỉnh Quý Châu và đưa hàng trăm nghìn binh lính đồn điền Giang Nam tới khai khẩn (để lại di sản làng đá Quân Đồn Bảo ở An Thuận). Năm 1508, đại triết gia Vương Dương Minh bị đày tới dịch trạm Long Trường (Tu Văn, Quý Dương), hoàn thành cuộc đốn ngộ chấn động lịch sử tư tưởng: 'Long Trường Ngộ Đạo' (Tri hành hợp nhất)! Trong thập niên 1930 (Hội nghị Tuân Nghĩa 1935) và thời Chiến khu Tam Tuyến, Quý Châu dần mở đường xuyên núi; sang thế kỷ XXI bứt phá thành 'Bảo tàng Cầu đường Thế giới' nhờ công nghệ cầu dây văng xuyên vực sâu hàng trăm mét.",
      culturalIdentity: "Sự kết hợp đặc biệt giữa linh hồn đa dân tộc vùng Tây Nam rực rỡ sắc bạc–chàm (Lễ hội chị em dân tộc Miêu, Tháp Trống & Hát Đại Ca Đồng tộc) với truyền thống Đồn Bảo thời Minh tại An Thuận và dấu ấn Tâm học Vương Dương Minh sâu đậm tại Quý Dương.",
      heritageAndLandmarks: [
        { hanzi: "荔波喀斯特（中国南方喀斯特）", pinyin: "Lìbō Kāsītè", hanViet: "Lệ Ba Ca-xtơ (Tiểu Thất Khổng)", nameVi: "Rừng đá Karst Lệ Ba (UNESCO 2007)", significance: "Hệ sinh thái rừng mọc trên núi đá vôi với thác 68 tầng và nước sông ngọc lục bảo Tiểu Thất Khổng." },
        { hanzi: "赤水丹霞与梵净山", pinyin: "Fànjìngshān · Chìshuǐ", hanViet: "Phạm Tịnh Sơn & Xích Thủy Đan Hà", nameVi: "Thánh sơn Phật giáo Di Lặc Phạm Tịnh Sơn (UNESCO 2018)", significance: "Đỉnh đá nấm đỏ chót vót Hồng Vân Kim Đỉnh dựng đứng giữa biển mây với hai ngôi chùa cổ nối nhau qua cầu đá." },
        { hanzi: "黄果树大瀑布", pinyin: "Huángguǒshù Pùbù", hanViet: "Thác Hoàng Quả Thụ (An Thuận)", nameVi: "Thác nước Hoàng Quả Thụ (lớn nhất châu Á)", significance: "Thác cao 77,8 m rộng 101 m có hang Thủy Liêm Động tự nhiên đi xuyên qua sau bức màn nước." },
        { hanzi: "西江千户苗寨与肇兴侗寨", pinyin: "Xījiāng Qiānhù Miáozhài", hanViet: "Tây Giang Thiên Hộ Miêu Trại & Triệu Hưng Đồng Trại", nameVi: "Làng người Miêu lớn nhất thế giới & Làng Đồng", significance: "Hơn 1.400 nhà sàn gỗ xếp chồng theo sườn núi, rực rỡ ánh đèn đêm và tiếng khèn lá truyền thống." },
        { hanzi: "贵阳甲秀楼与阳明祠 · 遵义会址", pinyin: "Jiǎxiùlóu · Zūnyì Huìzhǐ", hanViet: "Giáp Tú Lâu · Dương Minh Đường · Hội Chỉ Tuân Nghĩa", nameVi: "Cổ lâu Giáp Tú trên sông Nam Minh & Khu Hội nghị Tuân Nghĩa", significance: "Công trình gỗ cổ biểu tượng tri thức khoa bảng Quý Dương từ năm 1598." }
      ],
      intangibleHeritage: "Đại Ca Đồng Tộc (侗族大歌 – hợp xướng đa thanh không nhạc đệm được UNESCO công nhận Di sản Nhân loại 2009); Nghệ thuật Rèn trang sức bạc và Thêu nổi của người Miêu Quý Đông Nam; Nhuộm chàm Batik sáp ong (Lạp nhiễm 蜡染); Rượu Mao Đài Cổ truyền Maokou Trấn Xích Thủy; và Hí kịch mặt nạ An Thuận Địa Hí 600 năm tuổi.",
      culinaryCulture: {
        styleOverview: "Kiềm Thái (黔菜 Qiáncài) tôn thờ phương châm 'Tam thiên bất cật toan, tẩu lộ đả toàn toàn' (ba ngày không ăn đồ chua đi đường loạng choạng) — dùng gia vị lên men tự nhiên (Toan thang đỏ cà chua rừng, Toan thang trắng nước vo gạo, Tào lạt ớt băm lên men) nấu cay thơm sảng khoái.",
        signatureDishes: [
          { hanzi: "凯里酸汤鱼", pinyin: "Kǎilǐ suāntāngyú", hanViet: "Khải Lý toan thang ngư (Cá nấu lẩu canh chua cay)", description: "Món quốc bảo Quý Châu: nước dùng ủ men cà chua bi dại, gạo nếp và ớt sừng thơm lừng với lá mộc khương (hương sả chanh núi rừng) ăn cùng cá lăng sống." },
          { hanzi: "丝娃娃", pinyin: "Sīwáwa", hanViet: "Ty Oa Oa (Bánh tráng cuốn ngũ sắc Quý Dương)", description: "Lớp vỏ bột mì mỏng tắp bằng lòng bàn tay cuốn hàng chục loại rau sợi dưa chuột, giá đỗ, củ cải ngâm giấm rưới nước chấm ớt chua Tào Lạt thanh mát." },
          { hanzi: "肠旺面", pinyin: "Chángwàngmiàn", hanViet: "Tràng vượng diện (Mì lòng huyết heo giòn)", description: "Bữa sáng 'may mắn' nổi danh Quý Dương gồm mì trứng dai vàng óng, lòng heo non hầm giòn, huyết heo mềm và tóp mỡ ớt đỏ ('Tiết – Tràng – Vượng')." },
          { hanzi: "贵州辣子鸡", pinyin: "Guìzhōu làzǐjī", hanViet: "Quý Châu lạt tử kê (Gà xào tương ớt dẻo Từ Ba)", description: "Khác Xuyên Thái chiên giòn khô, gà Quý Châu xào thấm đậm với tương ớt dẻo giã cối Từ Ba Lạt Tử hương tỏi gừng cực kỳ đưa cơm." },
          { hanzi: "青岩卤猪脚 & 折耳根", pinyin: "Qīngyán lǔzhūjiǎo", hanViet: "Chân giò hầm Cổ trấn Thanh Nham & Rau diếp cá", description: "Chân giò hầm 20 vị thảo mộc ăn kèm tương chấm trứ danh pha rễ rau diếp cá (Triết nhĩ căn) – gia vị linh hồn miền Quý–Vân." }
        ]
      },
      economyAndIndustry: "Trở thành 'Thủ đô Dữ liệu Lớn (Big Data) Trung Quốc' tại Quý An Tân Khu nhờ khí hậu mát mẻ quanh năm và thủy điện dồi dào (đặt trung tâm máy chủ Huawei Cloud, Tencent, Apple iCloud China); sở hữu Kính thiên văn vô tuyến đơn lớn nhất thế giới FAST (Thiên Nhãn 500m tại Bình Đường); và tập đoàn Kweichow Moutai (Quý Châu Mao Đài) đứng đầu vốn hóa ngành hàng tiêu dùng Trung Hoa. Quý Châu cũng nắm kỷ lục hơn 45 trong Top 100 cây cầu cao nhất thế giới!",
      vietnamConnectivity: "Với đường sắt cao tốc Quý–Quảng và Côn–Quý, Quý Châu nằm trên tuyến trung chuyển trực tiếp nối Hà Nội – Nam Ninh – Quý Dương – Thành Đô/Trùng Khánh của Hành lang Thương mại Biển–Bộ Mới. Quặng phốt phát, nhôm và thủy sản – rau quả Việt Nam ngày càng tăng lưu thông qua tuyến đường sắt này. Giáo dục có Đại học Quý Châu (贵州大学 – 211/Song Nhất Lưu) và Đại học Sư phạm Quý Châu hợp tác trao đổi văn hóa đa dân tộc và công nghệ dữ liệu.",
      notableFigures: [
        { hanzi: "王阳明（龙场悟道）", pinyin: "Wáng Yángmíng", hanViet: "Vương Dương Minh (tại Long Trường Quý Châu)", lifespan: "1472–1529", contribution: "Hoàn thành cuộc giác ngộ 'Long Trường Ngộ Đạo' năm 1508 tại Tu Văn, Quý Dương — bước ngoặt sinh ra Tâm học Đông Á." },
        { hanzi: "丁宝桢", pinyin: "Dīng Bǎozhēn", hanViet: "Đinh Bảo Trinh", lifespan: "1820–1886", contribution: "Vị Tổng đốc Tứ Xuyên – Tuần phủ Sơn Đông thanh liêm quê Chức Kim (Quý Châu), nổi tiếng cả về chống tham nhũng (xử trảm thái giám An Đức Hải) và món 'Cung Bảo Kê Đinh'." },
        { hanzi: "黎庶昌 · 莫友芝", pinyin: "Lí Shùchāng · Mò Yǒuzhī", hanViet: "Lê Thứ Xương & Mạc Hữu Chi", lifespan: "Thế kỷ XIX", contribution: "Hai đại học giả Cổ điển học và Thư mục học thời Thanh quê Tuân Nghĩa và Độc Sơn phục hưng nhiều cổ tịch thất truyền tại Nhật Bản." }
      ],
      travelAndLogistics: "Tháng 6–9 Quý Châu là thiên đường tránh nóng số 1 cả nước (21–25°C) và thác Hoàng Quả Thụ đầy nước trắng xóa hùng vĩ; tháng 3–4 mùa hoa đỗ quyên Bách Lý Đỗ Quyên rực rỡ nhất thế giới! Sân bay Long Động Bảo Quý Dương (KWE); mạng đường sắt cao tốc nối Quý Dương – Côn Minh 2h, Quý Dương – Quế Lâm 2h15, Quý Dương – Quảng Châu 4h. Gợi ý 5 ngày: Ngày 1 Quý Dương (Giáp Tú Lâu – Cổ trấn Thanh Nham); Ngày 2 Thác Hoàng Quả Thụ; Ngày 3 Lệ Ba Tiểu Thất Khổng; Ngày 4 Tây Giang Thiên Hộ Miêu Trại; Ngày 5 Phạm Tịnh Sơn hoặc Tuân Nghĩa.",
      mapCoordinates: { mapX: 426, mapY: 448, historicalCapitalEra: "Dạ Lang cổ · Long Trường (Vương Dương Minh)", economicCorridor: "Thành Đô–Trùng Khánh (成渝经济圈)" }
    },
    "prov-yunnan": {
      identity: {
        hanziSimplified: "云南省",
        hanziTraditional: "雲南省",
        pinyin: "Yúnnán Shěng",
        hanViet: "Vân Nam Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "云 / 滇",
        abbreviationPinyin: "Yún / Diān (Vân / Điền)",
        abbreviationOrigin: "Tên Vân Nam (Vùng đất phía nam dãy Vân Lĩnh – núi mây) do Hán Vũ Đế đặt khi nằm ở phía nam rặng Vân Lĩnh núi tuyết Tây Bắc. Chữ viết tắt thứ hai 滇 (Điền) lưu danh Cổ quốc Điền Quốc (滇国 Diānguó) văn hóa đồ đồng rực rỡ quanh hồ Điền Trì thời Chiến Quốc – Tây Hán.",
        capitalCity: "Côn Minh (昆明市 Kūnmíng Shì – 'Thành phố Mùa Xuân' Xuân Thành)"
      },
      geographyAndClimate: {
        summary: "Nằm ở biên thùy Tây Nam chuyển tiếp dữ dội từ Cao nguyên Thanh–Tạng ở rìa tây bắc (Địch Khánh / Hương Cách Lý Lạp giáp dãy Tam Giang Tịnh Lưu cao trên 6.700 m) qua Cao nguyên Vân Quý xuống những thung lũng nhiệt đới sông Mê Kông (Lan Thương Giang) – sông Hồng (Nguyên Giang) tại Tây Song Bản Nạp và Hồng Hà ở phía nam. Độ cao phân tầng cực đại tạo ra tới 7 đới khí hậu trên cùng một tỉnh ('Nhất sơn phân tứ mùa, thập lý bất đồng thiên'), trong đó vùng Côn Minh–Đại Lý–Lệ Giang cao 1.900–2.400 m luôn giữ mức nhiệt mùa xuân 15–22°C quanh năm!",
        causality: "Núi cao sông sâu của dãy Hoành Đoạn Sơn chia cắt thành vô số thung lũng khép kín khiến Vân Nam trở thành tỉnh đa dạng dân tộc nhất Trung Quốc (25 dân tộc thiểu số định cư lâu đời như Di, Bạch, Cáp Nê, Thái, Nạp Tây, Tạng, Miêu...). Vị trí cửa ngõ cổ đại nối Tứ Xuyên – Tây Tạng – Ấn Độ – Đông Nam Á sinh ra Con đường Tơ lụa Phương Nam và Trà Mã Cổ Đạo (茶马古道 – vận chuyển bánh trà Phổ Nhĩ nén lên Tây Tạng đổi lấy ngựa chiến). Hệ sinh thái ấm ẩm giàu rừng nguyên sinh biến Vân Nam thành 'Vương quốc Thực vật & Nấm dại' lớn nhất Á–Âu."
      },
      historicalEvolution: "Nơi tìm thấy hóa thạch 'Người Nguyên Mưu' (1,7 triệu năm trước) và văn minh trống đồng Điền Quốc (tinh xảo ngang ngửa văn hóa Đông Sơn Việt Nam qua di chỉ Thạch Trại Sơn). Thời Đường–Tống là hai vương quốc hùng mạnh Nam Chiếu (南诏) và Đại Lý (大理国 – quê hương văn hóa Phật giáo Mật tông Bạch tộc); thế kỷ XIII Hốt Tất Liệt hợp nhất thành tỉnh Vân Nam. Triều Minh phát tích hai tuyến hành trình vĩ đại: Trịnh Hòa (người Côn Dương, Côn Minh) chỉ huy 7 chuyến Hải trình xuống Tây Dương, và nhà địa lý Từ Hà Khách điền dã xuyên Vân Nam. Thế kỷ XX trong kháng chiến 1937–1945, Côn Minh đón Đại học Tây Nam Liên Hợp (Thanh Hoa – Bắc Kinh – Nam Khai sơ tán), trở thành thành trì tri thức cứu quốc và tuyến Đường sắt Điền–Việt (Hải Phòng – Côn Minh).",
      culturalIdentity: "Thiên đường đa sắc tộc và mỹ học chậm rãi hòa bình: văn hóa Nạp Tây Đông Ba (văn tự tượng hình còn sống duy nhất trên thế giới ở Lệ Giang), văn hóa Bạch tộc 'Phong – Hoa – Tuyết – Nguyệt' Đại Lý bên hồ Nhĩ Hải, văn hóa Thái Té nước rộn rã Tây Song Bản Nạp và văn hóa Trà Phổ Nhĩ cổ thụ hơn 1.000 năm tại Phổ Nhĩ – Lâm Thương.",
      heritageAndLandmarks: [
        { hanzi: "丽江古城", pinyin: "Lìjiāng Gǔchéng", hanViet: "Lệ Giang Cổ Thành (Đa Nghiên Trấn)", nameVi: "Cổ thành Lệ Giang (UNESCO 1997)", significance: "Đô thị cổ 800 năm không có tường thành của người Nạp Tây, dùng hệ thống ba mạch kênh nước chảy ngang trước từng nếp nhà dưới chân Ngọc Long Tuyết Sơn." },
        { hanzi: "红河哈尼梯田文化景观", pinyin: "Hónghé Hāní Tītián", hanViet: "Ruộng Bậc Thang Cáp Nê Hồng Hà", nameVi: "Quần thể Ruộng Bậc Thang Hồng Hà (UNESCO 2013)", significance: "Kiệt tác canh tác tuần hoàn 'Rừng – Thôn – Ruộng – Sông' 1.300 năm tuổi leo lên hơn 3.000 bậc núi dốc của người Cáp Nê bên thượng nguồn Sông Hồng." },
        { hanzi: "中国南方喀斯特（石林）与三江并流", pinyin: "Shílín · Sānjiāng Bìngliú", hanViet: "Thạch Lâm Côn Minh & Tam Giang Tịnh Lưu", nameVi: "Rừng đá Thạch Lâm & Tam Giang Tịnh Lưu (UNESCO)", significance: "Nơi ba dòng đại giang Mê Kông – Trường Giang – Nộ Giang chảy song song qua hẻm núi sâu tới 3.000 m ở Tây Bắc Vân Nam." },
        { hanzi: "普洱景迈山古茶林文化景观", pinyin: "Jǐngmàishān Gǔchálín", hanViet: "Rừng Trà Cổ Cảnh Mại Sơn (Phổ Nhĩ)", nameVi: "Cảnh quan Rừng Trà Cổ Cảnh Mại Sơn (UNESCO 2023)", significance: "Di sản trà đầu tiên trên thế giới được UNESCO ghi danh: khu rừng trà cổ 1.000 năm trồng tự nhiên dưới tán cây rừng nguyên sinh." },
        { hanzi: "崇圣寺三塔（大理）& 松赞林寺（香格里拉）", pinyin: "Chóngshèngsì Sāntǎ", hanViet: "Sùng Thánh Tự Tam Tháp Đại Lý & Tùng Tán Lâm Tự", nameVi: "Tam Tháp Sùng Thánh Đại Lý & Cung Potala thu nhỏ Shangri-La", significance: "Tháp Thiên Tầm thời Nam Chiếu thế kỷ IX soi bóng xuống hồ Nhĩ Hải và tự viện Phật giáo Tạng truyền lớn nhất Vân Nam." }
      ],
      intangibleHeritage: "Văn tự tượng hình Nạp Tây Đông Ba (纳西族东巴象形文字 – UNESCO Ký ức Thế giới); Nghệ thuật Nhuộm Chàm Trát Nhiễm Bạch tộc Đại Lý (Đại Lý Bạch Tộc Trát Nhiễm); Gốm đen Tạng Ni Tây; Trà Phổ Nhĩ nén ép bánh lên men hậu sinh ('Uống được lịch sử' 越陈越香); và Lễ hội Té nước năm mới người Thái Tây Song Bản Nạp.",
      culinaryCulture: {
        styleOverview: "Điền Thái (滇菜 Diāncài) trứ danh toàn Trung Hoa về nguyên liệu rừng tự nhiên: trên 250 loài nấm rừng dại (nấm Tùng Nhung, nấm Kê Tông, nấm Ngưu Can), côn trùng, hàng chục loại hoa ăn được ('Ăn hoa & ăn nấm' trong suốt mùa hè), kèm thịt muối Tuyên Uy sánh ngang Kim Hoa.",
        signatureDishes: [
          { hanzi: "云南过桥米线", pinyin: "Yúnnán guòqiáo mǐxiàn", hanViet: "Bún Qua Cầu Vân Nam (Mông Tự)", description: "Biểu tượng ẩm thực Vân Nam: bát nước dùng hầm gà xương nóng 100°C phủ lớp váng mỡ giữ nhiệt không thấy hơi khói; thực khách tự thả trứng cút, phi lê cá, thịt lợn thái lát mỏng tang chín tái tại bàn rồi thả bún gạo tươi." },
          { hanzi: "汽锅鸡", pinyin: "Qìguōjī", hanViet: "Gà hấp nồi hơi Kiến Thủy", description: "Dùng nồi gốm tím Kiến Thủy có ống dẫn hơi ở chính giữa đặt trên nồi nước sôi: gà ta, gừng và tam thất Văn Sơn hoàn toàn chín bằng hơi nước ngưng tụ tạo thứ nước cốt thanh ngọt tinh khiết." },
          { hanzi: "野生菌火锅", pinyin: "Yěshēngjūn huǒguō", hanViet: "Lẩu Nấm Rừng Hoang Dã", description: "Đặc sản tối thượng mùa mưa tháng 6–9 tại Côn Minh–Cảnh Hồng: hàng chục loại nấm núi rừng nấu cùng nước gà bản già suốt ít nhất 20 phút cho vị ngọt umami tự nhiên tuyệt đỉnh." },
          { hanzi: "宣威火腿 & 鲜花饼", pinyin: "Xuānwēi huǒtuǐ / Xiānhuābǐng", hanViet: "Giăm bông Tuyên Uy & Bánh hoa hồng tươi", description: "Đùi lợn muối ủ núi cao Tuyên Uy hơn 1–3 năm sánh ngang giăm bông Tây Ban Nha; bánh ngàn lớp nhân cánh hoa hồng đỏ ướp mật ăn ấm nóng ở đường phố Côn Minh." },
          { hanzi: "傣味手抓饭 · 菠萝紫米饭", pinyin: "Dǎiwèi shǒuzhuāfàn", hanViet: "Cơm bốc lá chuối người Thái & Xôi nếp cẩm nướng dứa", description: "Phong vị nhiệt đới Tây Song Bản Nạp chua cay sả ớt chanh rừng hài hòa cực kỳ gần gũi ẩm thực Tây Bắc Việt Nam – Lào." }
        ]
      },
      economyAndIndustry: "Số 1 châu Á về thị trường đấu giá Hoa Tươi (Chợ Hoa Đấu Nam Côn Minh cung ứng trên 70% hoa cắt cành toàn Trung Quốc và xuất đi Đông Nam Á); số 1 thế giới về trà Phổ Nhĩ, tam thất dược liệu (Dược phẩm Bạch Dược Vân Nam – Yunnan Baiyao), nhôm xanh thủy điện (cung cấp 90% điện tái tạo nội tỉnh!) và thuốc lá (Hồng Tháp Sơn Ngọc Khê). Là cửa ngõ kết nối đường bộ – đường sắt trực tiếp tới Việt Nam, Lào (Đường sắt Trung–Lào), Myanmar.",
      vietnamConnectivity: "Vân Nam có mối liên hệ lịch sử, địa – kinh tế và văn hóa sâu sắc bậc nhất với miền Bắc Việt Nam: chung lưu vực Sông Hồng (Từ Nguyên Giang – Lào Cai đổ ra Biển Đông) và tuyến Đường sắt Điền–Việt (Côn Minh – Hà Khẩu – Lào Cai – Hải Phòng từ năm 1910), đang triển khai dự án kết nối đường sắt khổ tiêu chuẩn 1.435 mm Lào Cai – Hà Nội – Hải Phòng tới Côn Minh! Trong lịch sử, Chủ tịch Hồ Chí Minh năm 1940 đã sang Côn Minh, Khai Viễn kết nối phong trào cách mạng Việt–Trung. Sinh viên Việt Nam học tập cực kỳ đông đảo tại Đại học Vân Nam (云南大学 – 211/Song Nhất Lưu), Đại học Sư phạm Vân Nam (cái nôi kế thừa Tây Nam Liên Đại) và Đại học Y khoa Côn Minh qua Học bổng Chính phủ Tỉnh Vân Nam (diện hợp tác Lào Cai/Việt Nam).",
      notableFigures: [
        { hanzi: "郑和", pinyin: "Zhèng Hé", hanViet: "Trịnh Hòa (Mã Tam Bảo – Côn Dương)", lifespan: "1371–1433", contribution: "Nhà hàng hải vĩ đại nhất Trung Hoa cổ đại quê Côn Dương (Côn Minh), dẫn đầu hạm đội Bảo Thuyền 7 lần vượt Ấn Độ Dương tới Đông Phi (1405–1433)." },
        { hanzi: "聂耳", pinyin: "Niè Ěr", hanViet: "Nhiếp Nhĩ (Ngọc Khê)", lifespan: "1912–1935", contribution: "Nhạc sĩ thiên tài soạn nhạc bài *Nghĩa Dũng Quân Tiến Hành Khúc* (Quốc ca CHND Trung Hoa)." },
        { hanzi: "杨慎（升庵先生）", pinyin: "Yáng Shèn", hanViet: "Dương Thận", lifespan: "1488–1559", contribution: "Trạng nguyên đời Minh bị đày 35 năm tại Bảo Sơn – Đại Lý (Vân Nam), sáng tác bài từ mở đầu *Tam Quốc Diễn Nghĩa* ('Cổn cổn Trường Giang đông thệ thủy...')." }
      ],
      travelAndLogistics: "Quanh năm lý tưởng nhờ khí hậu Xuân Thành (riêng tháng 6–9 mùa mưa nấm rừng; tháng 11–3 mùa hoa anh đào mùa đông – hải âu hồ Điền Trì và hoa cải La Bình tháng 2–3). Sân bay Quốc tế Trường Thủy Côn Minh (KMG có bay thẳng Hà Nội – TP.HCM chỉ 1h20–2h15!) và ga biên giới Hà Khẩu Bắc kết nối thẳng từ Lào Cai (chỉ cần qua cầu Hồ Kiều) lên cao tốc tới Côn Minh trong 4h30! Tuyến tàu cao tốc du lịch vàng Côn Minh – Đại Lý (2h) – Lệ Giang (1h30) – Shangri-La (1h10) nối thẳng một mạch. Hành trình 6 ngày kinh điển: Ngày 1 Côn Minh (Thạch Lâm / Chợ hoa Đấu Nam); Ngày 2–3 Đại Lý (Thành cổ – Hồ Nhĩ Hải – Tam Tháp); Ngày 4–5 Lệ Giang (Cổ thành – Ngọc Long Tuyết Sơn); Ngày 6 Shangri-La (Hổ Khiêu Hiệp – Độc Khắc Tông).",
      mapCoordinates: { mapX: 334, mapY: 484, historicalCapitalEra: "Điền Quốc cổ · Nam Chiếu · Đại Lý · Đầu mối Sông Hồng", economicCorridor: "Hành lang RCEP – Việt Nam" }
    }
  };

  window.CCE_REGIONS.provincesDirectory.forEach((p) => {
    const up = UPGRADES[p.id];
    if (up) {
      Object.assign(p, up);
      if (up.geographyAndClimate && up.geographyAndClimate.summary) {
        p.geography = up.geographyAndClimate.summary + " " + (up.geographyAndClimate.causality || "");
      }
      if (up.historicalEvolution) {
        p.cultureHistory = up.historicalEvolution + " " + (up.culturalIdentity || "");
      }
      if (Array.isArray(up.heritageAndLandmarks)) {
        p.famousPlaces = up.heritageAndLandmarks.map((h) => `${h.nameVi} (${h.hanzi} – ${h.pinyin})`).join("; ");
      }
      if (up.culinaryCulture && Array.isArray(up.culinaryCulture.signatureDishes)) {
        p.signatureFood = up.culinaryCulture.signatureDishes.map((d) => `${d.hanzi} (${d.pinyin} – ${d.hanViet}): ${d.description}`).join(" | ");
      }
      if (up.economyAndIndustry) p.economyNote = up.economyAndIndustry;
    }
  });
})();
