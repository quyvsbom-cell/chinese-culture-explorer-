"""V6 Pack 3 (24 Solar Terms, 12 Ziwu Cultural Hours, 5 Wuxing Nodes, 24 Culinary Herbarium, 12 Microclimate Cases)
and Pack 4 (4 Classic Novel SVG Graphs, 12 Poem-Painting Pairs, 20 Wenyan Syntax Tokens).
Strictly non-clinical & non-predictive on all Cosmology / TCM cultural entries."""

from __future__ import annotations

SOLAR_TERMS_24 = [
    ("st-01", "立春", "Lìchūn", "Lập Xuân", 315, "04/02", "Đông phong giải băng · Trập trùng thủy chấn · Ngư thiệp phụ băng", "Gió xuân thổi tan băng mặt hồ, trà hoa đầu xuân nhẹ nhàng và bánh cuốn xuân (Xuân Bính) đón Tết Nông lịch."),
    ("st-02", "雨水", "Yǔshuǐ", "Vũ Thủy", 330, "19/02", "Thát tế ngư · Hồng nhạn lai · Thảo mộc manh động", "Mưa xuân dịu tưới đồng bằng Hoa Bắc–Giang Nam, cháo kê táo đỏ kỷ tử ấm vị theo lịch thực dưỡng gia đình."),
    ("st-03", "惊蛰", "Jīngzhé", "Kinh Trập", 345, "05/03", "Đào thủy hoa · Thương canh minh · Ưng hóa vi cưu", "Sấm đầu xuân đánh thức mùa canh tác, hoa đào nở rộ; tục ăn quả lê hấp thanh mát cổ truyền mùa giao mùa."),
    ("st-04", "春分", "Chūnfēn", "Xuân Phân", 0, "20/03", "Huyền điểu chí · Lôi nãi phát thanh · Thủy điện", "Ngày và đêm dài đúng 12 giờ, Mặt Trời qua xích đạo thiên cầu; hái lộc rau xuân hẹ – cải cúc thanh đạm."),
    ("st-05", "清明", "Qīngmíng", "Thanh Minh", 15, "05/04", "Đồng thủy hoa · Điền thử hóa vi như · Hồng thủy kiến", "Tiết hái trà Long Tỉnh Minh Tiền tinh túy nhất trong năm, kết hợp lễ Tảo mộ tri ân tổ tiên cả ở Việt Nam và Trung Quốc."),
    ("st-06", "谷雨", "Gǔyǔ", "Cốc Vũ", 30, "20/04", "Bình thủy sinh · Minh cưu phất kỳ vũ · Đới thắng hàng vu tang", "Mưa nuôi trăm giống ngũ cốc sinh sôi, thưởng trà Vũ Tiền hương thơm đậm hậu vị ngọt."),
    ("st-07", "立夏", "Lìxià", "Lập Hạ", 45, "05/05", "Lâu quắc minh · Khâu dẫn xuất · Vương qua sinh", "Mùa hè bắt đầu, tập quán Giang Nam ăn cơm đậu đỏ – trứng trà ngũ vị đón khí hậu ấm áp."),
    ("st-08", "小满", "Xiǎomǎn", "Tiểu Mãn", 60, "21/05", "Khổ thái tú · Mị thảo tử · Mạch thu chí", "Hạt lúa mì đồng bằng Hoa Bắc vừa căng mẩy nhưng chưa chín rộ (triết lý khiêm nhường 'Tiểu Mãn thắng Đại Mãn')."),
    ("st-09", "芒种", "Mángzhòng", "Mang Chủng", 75, "06/06", "Đường lang sinh · Quyến thủy minh · Phản thiệt vô thanh", "Vụ gặt lúa mì và gieo cấy lúa nước đồng loạt; nấu nước mơ xanh ô mai đường phèn giải nhiệt mùa hè."),
    ("st-10", "夏至", "Xiàzhì", "Hạ Chí", 90, "21/06", "Lộc giác giải · Thuyền thủy minh · Bán hạ sinh", "Ngày dài nhất năm, tia nắng trưa rọi thẳng vào khuê biểu Cổ Đài Thiên văn Đăng Phong; truyền thống Bắc Bộ ăn mì lạnh giải nhiệt."),
    ("st-11", "小暑", "Xiǎoshǔ", "Tiểu Thử", 105, "07/07", "Ôn phong chí · Tất suất cư bích · Ưng thủy chí", "Gió nóng giữa hạ, chè đậu xanh hạt sen đường phèn là nét ẩm thực thanh tao khắp Đông Á."),
    ("st-12", "大暑", "Dàshǔ", "Đại Thử", 120, "23/07", "Phủ thảo vi huỳnh · Thổ nhuận như thử · Đại vũ thời hành", "Đỉnh điểm nắng mưa vùng gió mùa, dùng canh khổ qua – trà Bạch trà Phúc Đỉnh dịu mát vị giác."),
    ("st-13", "立秋", "Lìqiū", "Lập Thu", 135, "07/08", "Lương phong chí · Bạch lộ hàng · Hàn thuyền minh", "Gió thu mát đầu mùa thổi từ lục địa, dân gian có tập quán ăn dưa hấu 'Gặm Thu' và súp lê bách hợp."),
    ("st-14", "处暑", "Chǔshǔ", "Xử Thử", 150, "23/08", "Ưng nãi tế điểu · Thiên địa thủy túc · Hòa nãi đăng", "Nắng nóng mùa hè lui dần, trăng thu sáng trong; ngư dân duyên hải mở hội ra khơi mùa cá lớn."),
    ("st-15", "白露", "Báilù", "Bạch Lộ", 165, "08/09", "Hồng nhạn lai · Huyền điểu quy · Quần điểu dưỡng tu", "Sương sớm trắng đọng trên ngọn cỏ khi chênh lệch nhiệt ngày–đêm tăng, thưởng trà Ô Long Thiết Quan Âm thu."),
    ("st-16", "秋分", "Qiūfēn", "Thu Phân", 180, "23/09", "Lôi thủy thu thanh · Trập trùng phi hộ · Thủy thủy hạc", "Ngày đêm cân bằng lần hai; mùa thu hoạch lúa vàng, cua lông Dương Trừng Hồ và Tết Trung Thu sum vầy."),
    ("st-17", "寒露", "Hánlù", "Hàn Lộ", 195, "08/10", "Hồng nhạn lai tân · Tước nhập đại thủy · Cúc hữu hoàng hoa", "Hạt sương mang hơi lạnh rõ rệt, hoa cúc Hàng Châu nở rộ; tục leo núi Trùng Cửu ngắm lá đỏ."),
    ("st-18", "霜降", "Shuāngjiàng", "Sương Giáng", 210, "23/10", "Sài nãi tế thú · Thảo mộc hoàng lạc · Trập trùng hàm phủ", "Sương giá đầu tiên miền Bắc, quả hồng đỏ chín ngọt; súp củ cải trắng – thịt hầm giữ ấm cổ truyền."),
    ("st-19", "立冬", "Lìdōng", "Lập Đông", 225, "07/11", "Thủy thủy băng · Địa thủy đống · Trĩ nhập đại thủy", "Mùa đông bắt đầu, đồng bằng Hoa Bắc ăn sủi cảo đón đông, phương Nam hầm canh thảo mộc gia đình."),
    ("st-20", "小雪", "Xiǎoxuě", "Tiểu Tuyết", 240, "22/11", "Hồng tàng bất kiến · Thiên khí thượng đằng · Bế tắc nhi thành đông", "Tuyết nhẹ đầu mùa rơi miền Bắc, mùa làm thịt xông khói Lạp Vị vùng Tứ Xuyên – Quảng Đông."),
    ("st-21", "大雪", "Dàxuě", "Đại Tuyết", 255, "07/12", "Hạt đán bất minh · Hổ thủy giao · Lệ đĩnh xuất", "Tuyết phủ dày sông đóng băng, trà Phổ Nhĩ Thục Trà ấm áp giữ vị tròn đầy trong tĩnh lặng."),
    ("st-22", "冬至", "Dōngzhì", "Đông Chí", 270, "21/12", "Khâu dẫn kết · Mi giác giải · Thủy tuyền động", "Đêm dài nhất năm; Hoàng đế tế Thiên Đàn, dân gian ăn bánh trôi Thang Viên cầu năm mới ánh dương quay lại."),
    ("st-23", "小寒", "Xiǎohán", "Tiểu Hàn", 285, "05/01", "Nhạn bắc hướng · Thước thủy sào · Trĩ thủy cấu", "Cái lạnh sâu sắc trước thềm Lạp Bát, nấu cháo Lạp Bát tám loại hạt – đậu cầu mùa màng."),
    ("st-24", "大寒", "Dàhán", "Đại Hàn", 300, "20/01", "Kê thủy nhũ · Chinh điểu lệ tật · Thủy trạch phúc kiên", "Tiết khí cuối cùng khép lại 360° hoàng đạo, dọn nhà quét bụi chuẩn bị đón Giao thừa Tết Nguyên Đán.")
]

ZIWU_HOURS_12 = [
    ("Tý", "子时", "23:00–01:00", "Canh Tý — Dương khí sơ sinh trong tĩnh lặng ban đêm; văn hóa dưỡng sinh khuyến khích ngủ sâu tránh thức khuya."),
    ("Sửu", "丑时", "01:00–03:00", "Canh Sửu — Khung giờ nghỉ ngơi yên tĩnh nhất giúp cân bằng nhịp sinh học tự nhiên theo Nội Kinh."),
    ("Dần", "寅时", "03:00–05:00", "Canh Dần — Chuẩn bị bước sang bình minh, các thiền viện cổ dậy tụng sớm đón luồng khí trong lành buổi mai."),
    ("Mão", "卯时", "05:00–07:00", "Canh Mão — Mặt trời mọc phương Đông, uống cốc nước ấm thanh sạch và dạo bước ngoài sân vườn."),
    ("Thìn", "辰时", "07:00–09:00", "Canh Thìn — Giờ bữa sáng ấm áp (cháo ngũ cốc, màn thầu, mì sợi) tạo năng lượng cho ngày làm việc."),
    ("Tỵ", "巳时", "09:00–11:00", "Canh Tỵ — Thời điểm lý tưởng đọc kinh điển, nghiên cứu học thuật và giải quyết việc đòi hỏi tập trung cao."),
    ("Ngọ", "午时", "11:00–13:00", "Canh Ngọ — Dương khí cực thịnh giữa trưa, dùng bữa trưa cân đối và chợp mắt nghỉ 20 phút ('Ngọ Thụy')."),
    ("Mùi", "未时", "13:00–15:00", "Canh Mùi — Uống tách trà xanh/Ô Long nhẹ kích thích sự tỉnh táo buổi chiều."),
    ("Thân", "申时", "15:00–17:00", "Canh Thân — Thời gian giao thương, xử lý email/chứng từ và uống đủ nước trong phòng làm việc."),
    ("Dậu", "酉时", "17:00–19:00", "Canh Dậu — Mặt trời lặn hướng Tây, dùng bữa tối vừa phải, đi dạo thư giãn cùng gia đình."),
    ("Tuất", "戌时", "19:00–21:00", "Canh Tuất — Thưởng trà Phổ Nhĩ ấm, viết nhật ký học tập hoặc đọc tản văn nhẹ nhàng trước giờ ngủ."),
    ("Hợi", "亥时", "21:00–23:00", "Canh Hợi — Tắt đèn thiết bị điện tử, tĩnh tâm thư giãn khép lại trọn vẹn một vòng 12 Canh giờ.")
]

HERBARIUM_24 = [
    ("hb-01", "宁夏枸杞", "Níngxià Gǒuqǐ", "Kỷ tử Ninh Hạ", "Lycium barbarum L.", "Bình · Cam", "Thổ", "Quả chín phơi", "Thả ấm trà hoa cúc/táo đỏ hoặc hầm canh gà mùa thu.", "assets/images/prov_items/ningxia/d0.jpg"),
    ("hb-02", "新会陈皮", "Xīnhuì Chénpí", "Trần bì Tân Hội (Quảng Đông)", "Citrus reticulata Blanco", "Ôn · Khổ Tân", "Kim/Thổ", "Vỏ quýt ủ lâu năm", "Nấu chè đậu đỏ trần bì hoặc pha trà Phổ Nhĩ chín.", "assets/images/prov_items/guangdong/d0.jpg"),
    ("hb-03", "杭州白菊", "Hángzhōu Báijú", "Cúc hoa trắng Hàng Châu", "Chrysanthemum morifolium", "Lương · Cam Khổ", "Kim/Mộc", "Nụ hoa sấy", "Trà hoa cúc Hàng Châu dùng giải nhiệt văn phòng ngày hè.", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"),
    ("hb-04", "罗汉果", "Luóhànguǒ", "La hán quả Quế Lâm", "Siraitia grosvenorii", "Lương · Cam", "Kim", "Quả sấy chậm", "Nấu nước giải khát ngọt tự nhiên (chất ngọt Mogroside không calo).", "assets/images/provinces/guangxi-guilin-li-river.jpg"),
    ("hb-05", "四川花椒", "Sìchuān Huājiāo", "Hoa tiêu đỏ Tứ Xuyên", "Zanthoxylum bungeanum", "Ôn · Tân", "Hỏa/Thổ", "Vỏ quả chín", "Linh hồn vị tê thơm ('Ma') của Tứ Xuyên – Tương Đậu Bì Huyện.", "assets/images/prov_items/sichuan/d0.jpg"),
    ("hb-06", "广西八角", "Guǎngxī Bājiǎo", "Hoa hồi Lạng Sơn / Quảng Tây", "Illicium verum Hook. f.", "Ôn · Tân Cam", "Thổ", "Quả 8 cánh", "Gia vị thiết yếu nấu Phở Việt Nam và Vịt kho/Ngũ vị Trung Hoa.", "assets/images/prov_items/guangxi/d0.jpg"),
    ("hb-07", "怀山药", "Huái Shānyào", "Hoài sơn (Củ mài Hà Nam)", "Dioscorea polystachya", "Bình · Cam", "Thổ", "Thân rễ", "Hầm canh xương, nấu cháo buổi sáng cân bằng dưỡng vị cổ truyền.", "assets/images/prov_items/henan/d0.jpg"),
    ("hb-08", "莲子", "Liánzǐ", "Hạt sen trắng Kiến Ninh / Hồ Tây", "Nelumbo nucifera", "Bình · Cam Sáp", "Thổ/Thủy", "Hạt chín tách tim", "Chè hạt sen nhãn nhục – di sản ẩm thực chung Việt Nam & Trung Quốc.", "assets/images/prov_items/hunan/d0.jpg"),
    ("hb-09", "红枣 (若羌)", "Ruòqiāng Hóngzǎo", "Táo đỏ Tân Cương", "Ziziphus jujuba Mill.", "Ôn · Cam", "Thổ", "Quả khô nắng", "Nấu cháo Lạp Bát, hãm trà dưỡng nhan gia đình.", "assets/images/prov_items/xinjiang/d0.jpg"),
    ("hb-10", "生姜", "Shēngjiāng", "Gừng tươi", "Zingiber officinale", "Ôn · Tân", "Kim/Thổ", "Thân rễ", "Pha trà gừng đường đỏ ngày mưa rét và khử tanh thủy sản.", "assets/images/articles/hero-chinese-cuisines.jpg"),
    ("hb-11", "肉桂", "Ròuguì", "Quế Trà My / Quảng Tây", "Cinnamomum cassia", "Đại Nhiệt · Tân Cam", "Hỏa", "Vỏ thân cây", "Gia vị thơm nồng trong nồi nước dùng phở và thịt kho Đông Ba.", "assets/images/prov_items/guangxi/d1.jpg"),
    ("hb-12", "茯苓", "Fúlíng", "Phục linh Vân Nam", "Wolfiporia extensa", "Bình · Cam Đạm", "Thổ", "Nấm rễ thông cổ thụ", "Làm bánh Phục Linh Cung Đình Bắc Kinh – truyền thống ẩm thực Hoàng gia.", "assets/images/prov_items/yunnan/d0.jpg"),
    ("hb-13", "薏苡仁", "Yìyǐrén", "Ý dĩ (Bo bo)", "Coix lacryma-jobi", "Lương · Cam Đạm", "Thổ", "Hạt đã tách vỏ", "Hầm chè ý dĩ hạt sen thanh nhẹ ngày ẩm nồm.", "assets/images/prov_items/jiangxi/d0.jpg"),
    ("hb-14", "绿豆", "Lǜdòu", "Đậu xanh", "Vigna radiata", "Hàn · Cam", "Mộc", "Hạt đỗ", "Nấu canh/chè đậu xanh đường phèn tiết Tiểu Thử–Đại Thử.", "assets/images/articles/hero-tcm-solar.jpg"),
    ("hb-15", "山楂", "Shānzhā", "Quả Sơn Tra", "Crataegus pinnatifida", "Vi Ôn · Toan Cam", "Mộc", "Quả chín thái lát", "Làm Kẹo Hồ Lô Bắc Kinh (Băng Đường Hồ Lô) và trà tiêu thực sau tiệc.", "assets/images/prov_items/shandong/d0.jpg"),
    ("hb-16", "黑芝麻", "Hēi Zhīma", "Vừng đen (Mè đen)", "Sesamum indicum", "Bình · Cam", "Thủy", "Hạt chín rang", "Nước sốt mè đen của Mì Khô Nhiệt Can Diện Vũ Hán & chè Xí Mà Phù.", "assets/images/prov_items/hubei/d0.jpg"),
    ("hb-17", "百合", "Bǎihé", "Bách hợp Lan Châu", "Lilium brownii", "Vi Hàn · Cam", "Kim", "Vảy củ mọng trắng", "Xào cần tây bách hợp mùa thu hoặc nấu chè trắng thanh nhã.", "assets/images/prov_items/gansu/d0.jpg"),
    ("hb-18", "桂花", "Guìhuā", "Hoa Mộc Tê Hàng Châu / Quế Lâm", "Osmanthus fragrans", "Ôn · Tân", "Kim", "Cụm hoa nhỏ vàng", "Làm mứt hoa mộc tê nhồi ngó sen mật ong & trà Ô Long hương hoa.", "assets/images/prov_items/zhejiang/d0.jpg"),
    ("hb-19", "玫瑰花", "Méiguīhuā", "Hoa Hồng Bình Âm (Sơn Đông)", "Rosa rugosa", "Ôn · Cam Vi Khổ", "Mộc/Hỏa", "Nụ hoa sấy lạnh", "Làm nhân Bánh Hoa Tươi (Tiên Hoa Bính) Vân Nam thơm ngát.", "assets/images/prov_items/yunnan/d1.jpg"),
    ("hb-20", "草果", "Cǎoguǒ", "Thảo quả Tây Bắc VN / Vân Nam", "Lanxangia tsaoko", "Ôn · Tân", "Thổ", "Quả già sấy khói", "Tạo hương thơm trầm ấm cho nồi lẩu Bò & Phở Việt Nam.", "assets/images/prov_items/yunnan/d2.jpg"),
    ("hb-21", "黑木耳", "Hēi Mù'ěr", "Mộc nhĩ đen Đông Bắc", "Auricularia heimuer", "Bình · Cam", "Thủy", "Tai nấm khô", "Món nộm gỏi mộc nhĩ khai vị giòn sần sật trên bàn tiệc.", "assets/images/prov_items/heilongjiang/d0.jpg"),
    ("hb-22", "葛根", "Gégēn", "Sắn dây (Cát căn)", "Pueraria montana", "Lương · Cam Tân", "Thổ", "Củ tinh bột trắng", "Bột sắn dây giải nhiệt mùa hè thân quen cả Việt Nam và Hoa Nam.", "assets/images/prov_items/guangdong/d1.jpg"),
    ("hb-23", "甘草", "Gāncǎo", "Cam thảo Nội Mông / Cam Túc", "Glycyrrhiza uralensis", "Bình · Cam", "Thổ", "Rễ vàng ngọt", "Vị điều hòa kinh điển trong trà thảo mộc Lĩnh Nam & món kho hầm.", "assets/images/prov_items/inner-mongolia/d0.jpg"),
    ("hb-24", "陈醋 (米酿)", "Chéncù", "Giấm gạo nếp ủ chum (Sơn Tây/Trấn Giang)", "Oryza sativa vinegar", "Ôn · Toan", "Mộc", "Lên men rắn lâu năm", "Dùng chấm há cảo, sủi cảo giữ tròn vị và chống ngấy bữa ăn.", "assets/images/prov_items/shanxi/d0.jpg")
]

MICROCLIMATE_12 = [
    ("mc-arch-01", "Tứ Hợp Viện Bắc Kinh (北京四合院)", "Beijing Siheyuan Courtyard", "Gió bắc lạnh buốt mùa đông từ Mông Cổ + bão cát xuân.", "Quay cửa chính Đông Nam (Khảm Trạch Tốn Môn), tường hậu Bắc cao dày không mở cửa sổ (Huyền Vũ kín gió), sân giữa thu tia nắng đông góc 26°.", "Passive thermal buffer + seasonal winter solar gain (Chống gió mùa ĐB + đón nắng thấp mùa đông)."),
    ("mc-arch-02", "Thổ Lâu Phúc Kiến (福建土楼)", "Fujian Hakka Tulou", "Mưa bão nhiệt đới ẩm + chênh nhiệt rừng núi miền Nam Phúc Kiến.", "Tường đất nện Hàng Thổ dày 1,5m cách nhiệt tự nhiên (ấm đông – mát hè), mái tròn hiên rộng chống nước mưa tạt vào móng đá.", "High thermal-mass rammed-earth envelope + radial stack ventilation (Khối nhiệt lượng đất nện giảm dao động nhiệt 24h)."),
    ("mc-arch-03", "Nhà Tường Đầu Ngựa Huy Châu (徽州马头墙)", "Huizhou Horse-Head Firewall Homes", "Khí hậu ẩm ướt thung lũng An Huy & nguy cơ cháy lan khu phố gỗ san sát.", "Tường gạch đầu ngựa vượt cao hơn mái ngói cắt lửa; sân giếng trời nhỏ ('Thiên Tỉnh') hút gió đối lưu làm mát nhà mà che nắng gắt.", "Chimney-effect courtyard cooling + stepped masonry firebreaks (Thông gió đối lưu thẳng đứng + tường chống cháy lan)."),
    ("mc-arch-04", "Kinh Thành Trường An Thời Đường (唐长安城)", "Tang Chang'an 108-Ward Grid", "Địa hình bồn địa Quan Trung hứng sông Vị phía Bắc, núi Tần Lĩnh phía Nam.", "Tựa thủy (sông Vị Thủy) vọng sơn (Chung Nam Sơn), đại lộ rộng 150m làm hành lang thoát gió nóng mùa hạ và phân lô 108 phường kiểm soát vi khí hậu.", "Basin topography wind-corridor alignment linking Wei River drainage and Qinling foothills."),
    ("mc-arch-05", "Tử Cấm Thành Bắc Kinh (紫禁城)", "Forbidden City Imperial Axis", "Mưa dông mùa hạ bất ngờ + mùa đông băng giá -10°C đồng bằng Hoa Bắc.", "Đào sông Kim Thủy Hà điều hòa ẩm + trữ nước chữa cháy; 1.142 đầu rồng Ly Thủ thoát toàn bộ nước mưa Tam Đại Điện không đọng giọt; mái ngói uốn hắt nắng trưa hè nhưng đón nắng thấp mùa đông.", "Engineered cascading hydraulic drainage + overhanging Dougong eaves shading summer sun (73°) while admitting winter sun (26°)."),
    ("mc-arch-06", "Hoàng Thành Huế Việt Nam (顺化皇城)", "Hue Imperial Citadel & Ngy Binh Screen", "Gió Lào khô nóng mùa hè từ Tây sang + mưa bão miền Trung.", "Lấy sông Hương làm Minh Đường tụ thủy điều ẩm, núi Ngự Bình làm Tiền Án chắn gió, hồ Tịnh Tâm – hào nước thành Nội trồng sen giảm nhiệt bề mặt 3–4°C.", "Waterfront evaporative cooling via Perfume River moat network + mountain wind screen adapting East Asian planning to tropical Vietnam."),
    ("mc-arch-07", "Nhà Diêu Động Cao Nguyên Hoàng Thổ (陕北窑洞)", "Shaanxi Loess Cave Dwellings", "Vùng Thiểm Tây ít gỗ xây dựng, mùa hè nắng gắt nhưng mùa đông băng giá.", "Đào vòm parabol trực tiếp vào vách đất Hoàng Thổ dày hàng chục mét, tận dụng lớp đất đá cách nhiệt sâu giữ ổn định trong phòng 16–20°C quanh năm.", "Subterranean geothermal inertia maintaining year-round indoor thermal comfort without timber."),
    ("mc-arch-08", "Điếu Cước Lâu Miêu Trại Quý Châu (贵州吊脚楼)", "Guizhou Miao Stilted Houses", "Độ dốc núi cao hiểm trở và độ ẩm rừng sương mù Tây Nam quanh năm.", "Dựng sàn gỗ tựa vách đá tránh ẩm đất, không cần san ủi làm sạt lở địa chất sườn dốc, gầm sàn thông gió làm khô kết cấu gỗ.", "Low-impact slope engineering + raised timber ventilation separating living deck from damp mountain soil."),
    ("mc-arch-09", "Viên Lâm Cổ Điển Tô Châu (苏州古典园林)", "Suzhou Classical Gardens", "Không gian đô thị đất chật nhưng mùa hạ Giang Nam oi bức.", "Dùng hồ nước uốn khúc và hành lang xuyên tường hoa (*Lậu Song*) tạo hiệu ứng Venturi kéo làn gió mát thổi qua từng gian sảnh tiếp khách.", "Venturi breeze acceleration through perforated lattice windows across micro-ponds."),
    ("mc-arch-10", "Phố Cổ Hội An Nhà Ống Xuyên Phòng (会安古街)", "Hoi An Heritage Merchant Townhouse", "Mặt bằng phố thương mại chiều sâu 30–50m dễ bí khí vùng Trung Bộ VN.", "Bố trí 2 khoảng sân giếng trời xen kẽ các nếp nhà mái âm dương chống nóng, thông gió trước–sau nối thẳng ra bến sông Hoài.", "Multi-courtyard cross ventilation + double-clay yin-yang roof tiles deflecting tropical solar radiation."),
    ("mc-arch-11", "Kiều Gia Đại Viện Sơn Tây (乔家大院)", "Shanxi Qiao Family Compound", "Khí hậu khô hanh nhiều bụi gió cao nguyên Sơn Tây.", "Thiết kế mái dốc đổ hết nước mưa hiếm hoi chảy về sân trong ('Tứ Thủy Quy Đường'), tường cao kín đáo giữ ẩm và bảo vệ két bạc thương gia.", "Rainwater harvesting inward pitched roofs ('Four Waters Returning to Courtyard') conserving arid water & privacy."),
    ("mc-arch-12", "Thiên Nhất Các Ninh Ba Tàng Thư Lâu (天一阁)", "Ningbo Tianyi Ge Heritage Library", "Thư viện tư nhân lâu đời nhất châu Á (1561) sợ nhất hỏa hoạn làm cháy mộc bản.", "Mặt tiền dựng bể Thiên Nhất Trì chứa nước liên thông kênh rạch, kết hợp mái ngói màu đen tượng trưng hành Thủy trong triết lý Bách gia khắc chế Hỏa.", "Dual architectural strategy: functional fire-suppression reservoir pool + symbolic black Thủy-water roof tiles.")
]

NOVEL_GRAPHS_4 = [
    {
        "id": "graph-xiyouji", "titleVi": "Tây Du Ký — Hệ Ngũ Hành & Đồ Hình 5 Thầy Trò", "titleEn": "Journey to the West — Five Elements Role Graph", "titleZh": "西游记师徒关系图",
        "nodes": [
            {"id": "sanzang", "zh": "唐三藏", "vi": "Đường Tăng (Thủy/Tâm)", "group": "core"},
            {"id": "wukong", "zh": "孙悟空", "vi": "Tôn Ngộ Không (Kim/Tâm Viên)", "group": "core"},
            {"id": "bajie", "zh": "猪八戒", "vi": "Trư Bát Giới (Mộc/Dục)", "group": "core"},
            {"id": "wujing", "zh": "沙悟净", "vi": "Sa Ngộ Tĩnh (Thổ/Hòa)", "group": "core"},
            {"id": "bailong", "zh": "白龙马", "vi": "Bạch Long Mã (Hỏa/Ý Mã)", "group": "core"},
            {"id": "guanyin", "zh": "观音菩萨", "vi": "Quan Âm Bồ Tát", "group": "mentor"},
            {"id": "rulai", "zh": "如来佛祖", "vi": "Như Lai Phật Tổ", "group": "mentor"},
            {"id": "niumowang", "zh": "牛魔王", "vi": "Ngưu Ma Vương", "group": "antagonist"},
            {"id": "tieshan", "zh": "铁扇公主", "vi": "Thiết Phiến Công Chúa", "group": "antagonist"},
            {"id": "baigujing", "zh": "白骨精", "vi": "Bạch Cốt Tinh", "group": "antagonist"}
        ],
        "edges": [
            {"from": "sanzang", "to": "wukong", "rel": "Thầy – Trò (Vòng Kim Cô kỷ luật)"},
            {"from": "sanzang", "to": "bajie", "rel": "Thầy – Trò (Thu phục Cao Lão Trang)"},
            {"from": "sanzang", "to": "wujing", "rel": "Thầy – Trò (Gánh hành lý qua Lưu Sa Hà)"},
            {"from": "sanzang", "to": "bailong", "rel": "Cưỡi vượt 10 vạn 8 nghìn dặm"},
            {"from": "guanyin", "to": "sanzang", "rel": "Trao sứ mệnh thỉnh kinh Tây Thiên"},
            {"from": "wukong", "to": "niumowang", "rel": "Kết nghĩa huynh đệ xưa → đối đầu Hỏa Diệm Sơn"},
            {"from": "wukong", "to": "tieshan", "rel": "Mượn Quạt Ba Tiêu dập lửa"},
            {"from": "wukong", "to": "baigujing", "rel": "Ba lần đánh diệt thử thách lòng tin thầy trò"},
            {"from": "rulai", "to": "wukong", "rel": "Áp Ngũ Hành Sơn 500 năm → phong Đấu Chiến Thắng Phật"}
        ]
    },
    {
        "id": "graph-hongloumeng", "titleVi": "Hồng Lâu Mộng — Tứ Đại Gia Tộc Giả–Sử–Vương–Tiết", "titleEn": "Dream of the Red Chamber — Four Clans Network", "titleZh": "红楼梦家族关系图",
        "nodes": [
            {"id": "jia_mu", "zh": "贾母", "vi": "Giả Mẫu (Sử Thái Quân)", "group": "elder"},
            {"id": "baoyu", "zh": "贾宝玉", "vi": "Giả Bảo Ngọc", "group": "core"},
            {"id": "daiyu", "zh": "林黛玉", "vi": "Lâm Đại Ngọc", "group": "core"},
            {"id": "baochai", "zh": "薛宝钗", "vi": "Tiết Bảo Thoa", "group": "core"},
            {"id": "xifeng", "zh": "王熙凤", "vi": "Vương Hy Phượng", "group": "admin"},
            {"id": "yuanchun", "zh": "贾元春", "vi": "Giả Nguyên Xuân (Hiền Đức Phi)", "group": "elder"},
            {"id": "qinkeqing", "zh": "秦可卿", "vi": "Tần Khả Khanh", "group": "admin"},
            {"id": "liuxiaolao", "zh": "刘姥姥", "vi": "Lưu Lão Lão (Quan sát từ ngoài)", "group": "mentor"}
        ],
        "edges": [
            {"from": "baoyu", "to": "daiyu", "rel": "Mộc Thạch Tiền Minh (Tri kỷ tâm giao)"},
            {"from": "baoyu", "to": "baochai", "rel": "Kim Ngọc Lương Duyên (Hôn nhân gia tộc)"},
            {"from": "jia_mu", "to": "baoyu", "rel": "Cháu đích tôn cưng chiều nhất Giả phủ"},
            {"from": "jia_mu", "to": "daiyu", "rel": "Cháu ngoại yêu thương từ Cô Tô"},
            {"from": "xifeng", "to": "baoyu", "rel": "Quản gia Vinh Quốc Phủ quyền lực thực tế"},
            {"from": "yuanchun", "to": "baoyu", "rel": "Chị ruột mang lại vinh hoa Đại Quan Viên"},
            {"from": "liuxiaolao", "to": "xifeng", "rel": "Chứng kiến thịnh suy và cứu Giả Xảo Thư"}
        ]
    },
    {
        "id": "graph-sanguo", "titleVi": "Tam Quốc Diễn Nghĩa — Cục Diện Ngụy – Thục – Ngô", "titleEn": "Three Kingdoms — Wei, Shu & Wu Tripolar Balance", "titleZh": "三国鼎立核心人物图",
        "nodes": [
            {"id": "liubei", "zh": "刘备", "vi": "Lưu Bị (Thục Hán)", "group": "shu"},
            {"id": "zhuge", "zh": "诸葛亮", "vi": "Gia Cát Lượng (Khổng Minh)", "group": "shu"},
            {"id": "guanyu", "zh": "关羽", "vi": "Quan Vũ (Kết nghĩa Đào Viên)", "group": "shu"},
            {"id": "caocao", "zh": "曹操", "vi": "Tào Tháo (Tào Ngụy)", "group": "wei"},
            {"id": "simayi", "zh": "司马懿", "vi": "Tư Mã Ý (Đặt nền Tây Tấn)", "group": "wei"},
            {"id": "sunquan", "zh": "孙权", "vi": "Tôn Quyền (Đông Ngô)", "group": "wu"},
            {"id": "zhouyu", "zh": "周瑜", "vi": "Chu Du (Đô đốc Giang Đông)", "group": "wu"}
        ],
        "edges": [
            {"from": "liubei", "to": "zhuge", "rel": "Tam Cố Thảo Lư → Long Trung Đối chia ba thiên hạ"},
            {"from": "liubei", "to": "guanyu", "rel": "Kết nghĩa Vườn Đào đồng sinh cộng tử"},
            {"from": "zhuge", "to": "zhouyu", "rel": "Liên minh Tôn–Lưu hỏa công Xích Bích (208)"},
            {"from": "caocao", "to": "zhouyu", "rel": "Đại chiến Xích Bích bẻ gãy thế Bắc phạt"},
            {"from": "zhuge", "to": "simayi", "rel": "Sáu lần xuất Kỳ Sơn đấu trí kỳ phùng địch thủ"},
            {"from": "sunquan", "to": "guanyu", "rel": "Tranh chấp Kinh Châu dẫn tới rạn vỡ đồng minh"}
        ]
    },
    {
        "id": "graph-shuihu", "titleVi": "Thủy Hử — Tụ Nghĩa Lương Sơn Bạc (36 Thiên Cang)", "titleEn": "Water Margin — Liangshan Outlaws Alliance Web", "titleZh": "水浒传聚义人物图",
        "nodes": [
            {"id": "songjiang", "zh": "宋江", "vi": "Tống Giang (Cập Thời Vũ)", "group": "core"},
            {"id": "lujunyi", "zh": "卢俊义", "vi": "Lư Tuấn Nghĩa (Ngọc Kỳ Lân)", "group": "core"},
            {"id": "wuyong", "zh": "吴用", "vi": "Ngô Dụng (Trí Đa Tinh)", "group": "mentor"},
            {"id": "linchong", "zh": "林冲", "vi": "Lâm Xung (Báo Tử Đầu)", "group": "warrior"},
            {"id": "wusong", "zh": "武松", "vi": "Võ Tòng (Đả Hổ Cảnh Dương)", "group": "warrior"},
            {"id": "luzhishen", "zh": "鲁智深", "vi": "Lỗ Trí Thâm (Hoa Hòa Thượng)", "group": "warrior"},
            {"id": "likui", "zh": "李逵", "vi": "Lý Quỳ (Hắc Toàn Phong)", "group": "warrior"},
            {"id": "gaoqui", "zh": "高俅", "vi": "Cao Cầu (Quyền thần gian nịnh)", "group": "antagonist"}
        ],
        "edges": [
            {"from": "songjiang", "to": "wuyong", "rel": "Chủ lĩnh & Quân sư hoạch định tụ nghĩa"},
            {"from": "songjiang", "to": "lujunyi", "rel": "Nhị thủ lĩnh Lương Sơn, dẹp loạn Phương Lạp"},
            {"from": "linchong", "to": "gaoqui", "rel": "Bị bức hại Bạch Hổ Đường → Đêm tuyết Sơn Thần Miếu"},
            {"from": "luzhishen", "to": "linchong", "rel": "Tình huynh đệ cứu mạng rừng Dã Trư Lâm"},
            {"from": "wusong", "to": "songjiang", "rel": "Huynh đệ trung nghĩa → phản đối chiêu an vô điều kiện"},
            {"from": "likui", "to": "songjiang", "rel": "Trung thành tuyệt đối theo Tống Giang từ Giang Châu"}
        ]
    }
]

POEM_PAINTING_12 = [
    ("pp-01", "山居秋暝 (Sơn Cư Thu Minh)", "Vương Duy (Thịnh Đường)", "Wáng Wéi · Bái Tổ 'Thi Trung Hữu Họa'", "空山新雨后，天气晚来秋。明月松间照，清泉石上流。", "Kōng shān xīn yǔ hòu, tiānqì wǎn lái qiū. Míngyuè sōng jiān zhào, qīngquán shí shàng liú.", "Núi vắng sau trận mưa mới, khí trời chiều thu dần tới. Trăng sáng soi qua kẽ thông, suối trong chảy trên đá biếc.", "Trúc – Đá – Trăng – Suối tạo hiệu ứng âm–thanh–quang thủy mặc thuần khiết.", "assets/images/paintings/11_huishan_shinv_tu.jpg", "Ping-Ze: T T B B T, B B T T B (Bình khởi vần 'ưu')"),
    ("pp-02", "静夜思 (Tĩnh Dạ Tư)", "Lý Bạch (Thịnh Đường)", "Lǐ Bái · Thi Tiên Trường An", "床前明月光，疑是地上霜。举头望明月，低头思故乡。", "Chuáng qián míngyuè guāng, yí shì dìshàng shuāng. Jǔ tóu wàng míngyuè, dī tóu sī gùxiāng.", "Đầu giường ánh trăng rọi, ngỡ mặt đất phủ sương. Ngẩng đầu nhìn trăng sáng, cúi đầu nhớ cố hương.", "Chữ 'Ngẩng–Cúi' điều phối ánh nhìn bức tranh thu nhỏ gắn liền nỗi nhớ nhà của lữ khách.", "assets/images/paintings/01_luoshenfu_tu.jpg", "Ping-Ze: B B B T B, B T T B B (Ngũ ngôn cổ thể tự nhiên)"),
    ("pp-03", "登高 (Đăng Cao)", "Đỗ Phủ (Thịnh Đường)", "Dù Fǔ · 'Thất Luật Đệ Nhất Cổ Kim'", "无边落木萧萧下，不尽长江滚滚来。万里悲秋常作客，百年多病独登台。", "Wúbiān luòmù xiāoxiāo xià, bùjìn Chángjiāng gǔngǔn lái...", "Rừng cây trút lá rào rào vô tận, Trường Giang cuồn cuộn chảy mãi chẳng ngơi...", "Bố cục tầm nhìn 'Thâm Viễn – Bình Viễn' bao quát đại giang và rừng thu bạt ngàn.", "assets/images/paintings/12_kuanglu_tu.jpg", "Ping-Ze đối ngẫu chặt chẽ cả bốn cặp vế trên/dưới"),
    ("pp-04", "江雪 (Giang Tuyết)", "Liễu Tông Nguyên (Trung Đường)", "Liǔ Zōngyuán · Khoảng Trống Lưu Bạch", "千山鸟飞绝，万径人踪灭。孤舟蓑笠翁，独钓寒江雪。", "Qiān shān niǎo fēi jué, wàn jìng rénzōng miè. Gū zhōu suōlì wēng, dú diào hánjiāng xuě.", "Nghìn non chim bay bặt, muôn nẻo dấu người tan. Thuyền côi ông áo tơi nón lá, câu lẻ trên sông tuyết lạnh.", "Mẫu mực tuyệt đỉnh của thủ pháp Lưu Bạch: 90% mặt giấy trắng làm nổi duy nhất chiếc thuyền đen.", "assets/images/paintings/04_youchun_tu.jpg", "Ping-Ze: T T B B T (Tàng chữ 'Tuyệt – Diệt – Tuyết' âm Nhập thanh -t cổ!)"),
    ("pp-05", "饮湖上初晴后雨", "Tô Thức (Bắc Tống)", "Sū Shì · Tây Hồ Hàng Châu", "水光潋滟晴方好，山色空蒙雨亦奇。欲把西湖比西子，淡妆浓抹总相宜。", "Shuǐguāng liànyàn qíng fāng hǎo, shānsè kōngméng yǔ yì qí...", "Nước gợn lấp lánh ngày nắng đẹp, sắc núi mờ ảo lúc mưa bay càng kỳ...", "Gắn trực tiếp vào khung cảnh Tây Hồ – Trà Long Tỉnh và bố cục núi nước Giang Nam.", "assets/images/provinces/zhejiang-hangzhou-westlake.jpg", "Bình khởi thất ngôn tuyệt cú chuẩn mực đời Tống"),
    ("pp-06", "题西林壁 (Đề Tây Lâm Bích)", "Tô Thức (Bắc Tống)", "Sū Shì · Triết Học Đa Góc Nhìn", "横看成岭侧成峰，远近高低各不同。不识庐山真面目，只缘身在此山中。", "Héng kàn chéng lǐng cè chéng fēng, yuǎn jìn gāodī gè bùtóng...", "Nhìn ngang thành dãy nhìn nghiêng thành đỉnh, xa gần cao thấp đều khác nhau...", "Cơ sở lý luận cho góc xoay Camera 360° & 3 Chiều Phối cảnh trong Thủy Mặc Lư Sơn.", "assets/images/paintings/05_bunian_tu.jpg", "Soi chiếu góc nhìn đa chiều trước khi đưa ra kết luận."),
    ("pp-07", "青玉案·元夕", "Tân Khí Tật (Nam Tống)", "Xīn Qìjí · Hội Đèn Nguyên Tiêu", "众里寻他千百度，蓦然回首，那人却在，灯火阑珊处。", "Zhòng lǐ xún tā qiān bǎi dù, mòrán huíshǒu, nà rén què zài dēnghuǒ lánshān chù.", "Tìm kiếm trong muôn vạn người trăm nghìn bận, chợt ngoảnh lại thấy người đứng nơi ánh đèn thưa dần.", "Vương Quốc Duy xếp làm cảnh giới thứ 3 (tìm ra chân lý) trong Nhân Gian Từ Thoại.", "assets/images/articles/hero-spring-festival.jpg", "Từ bài điệu dài ngắn (Trường đoản cú), nhịp chuyển nhanh ở kết đoạn"),
    ("pp-08", "声声慢 (Thanh Thanh Mạn)", "Lý Thanh Chiếu (Nữ Thi Sĩ Tống)", "Lǐ Qīngzhào · Đệ Nhất Nữ Từ Nhân", "寻寻觅觅，冷冷清清，凄凄惨惨戚戚。", "Xún xún mì mì, lěng lěng qīng qīng, qī qī cǎn cǎn qī qī.", "Tìm tìm kiếm kiếm, lạnh lẽo vắng tanh, thê lương thảm thiết...", "Kỹ thuật 14 chữ điệp âm liên tiếp cực khó chuyển dịch, nổi bật thanh điệu nhập thanh âm răng.", "assets/images/paintings/09_daolian_tu.jpg", "7 cặp chữ láy liên hoàn hiếm có trong lịch sử văn học thế giới"),
    ("pp-09", "清明 (Thanh Minh)", "Đỗ Mục (Vãn Đường)", "Dù Mù · Mưa Phùn Xuân Giang Nam", "清明时节雨纷纷，路上行人欲断魂。借问酒家何处有？牧童遥指杏花村。", "Qīngmíng shíjié yǔ fēnfēn, lùshàng xíngrén yù duànhún...", "Tiết Thanh Minh mưa bụi bay lất phất, khách đi đường lòng ngơ ngẩn buồn...", "Gắn liền Hoàng Tửu Thiệu Hưng và Tửu phường Hạnh Hoa Thôn Sơn Tây.", "assets/images/paintings/06_lidai_diwang_tu.jpg", "Chuyển nhịp vấn – đáp sinh động gợi khung cảnh mục đồng chỉ tay"),
    ("pp-10", "望庐山瀑布", "Lý Bạch (Thịnh Đường)", "Lǐ Bái · Khoa Trương Hùng Tráng", "飞流直下三千尺，疑是银河落九天。", "Fēi liú zhí xià sān qiān chǐ, yí shì Yínhé luò jiǔ tiān.", "Dòng thác bay đổ thẳng xuống ba nghìn thước, ngỡ dải Ngân Hà tuột rơi từ chín tầng mây.", "Tương ứng thủ pháp 'Cao Viễn' (ngước nhìn từ đáy vực lên đỉnh thác dựng đứng).", "assets/images/paintings/08_guoguo_furen.jpg", "Thủ pháp khoa trương (夸张) chuẩn mực Đường Thi"),
    ("pp-11", "竹石 (Trúc Thạch)", "Trịnh Bản Kiều (Thanh)", "Zhèng Bǎnqiáo · Họa Gia Tứ Quân Tử", "咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。", "Yǎodìng qīngshān bù fàngsōng, lìgēn yuán zài pò yán zhōng...", "Bám chặt núi xanh chẳng buông lơi, cắm rễ sâu ngay trong kẽ đá vỡ...", "Nguyên tác bài thơ đề trực tiếp lên kiệt tác Trúc Thạch Đồ bằng nét chữ 'Lục Phân Bán Thư'.", "assets/images/paintings/10_zhanhua_shinv_tu.jpg", "Sự kết hợp Thi – Thư – Họa – Ấn trên cùng một bức tranh"),
    ("pp-12", "望岳 (Vọng Nhạc)", "Đỗ Phủ (Thịnh Đường)", "Dù Fǔ · Khí Phách Ngũ Nhạc Thái Sơn", "会当凌绝顶，一览众山小。", "Huì dāng líng juédǐng, yī lǎn zhòng shān xiǎo.", "Sẽ có ngày bước lên tận đỉnh cao nhất, phóng mắt trông xuống thảy các núi khác đều nhỏ bé.", "Biểu tượng khát vọng chinh phục đỉnh núi Thái Sơn Ngũ Nhạc (Sơn Đông).", "assets/images/provinces/shandong-taishan.jpg", "Câu chốt kinh điển dùng trong phát biểu học thuật & ý chí khởi nghiệp")
]

WENYAN_TOKENS_20 = [
    ("wy-01", "之", "zhī", "Chi", "Trợ từ / Đại từ", "#8C2318", "1. Sở hữu ('của', giống 的): 仁者之心; 2. Thay thế danh từ ('nó/họ', giống 它); 3. Đứng giữa Chủ–Vị hủy độc lập câu.", "学而时习之 (Học rồi thường xuyên ôn tập điều đó — Luận Ngữ).", "的 / 它 / 取消独立性"),
    ("wy-02", "者", "zhě", "Giả", "Đại từ chỉ người/sự vật", "#1F6E5C", "Gắn sau động/tính từ biến thành 'Người mà...' hoặc 'Cái việc mà...' (tương đương 的人 / 的东西).", "知之者不如好之者 (Người biết không bằng người yêu thích — Luận Ngữ).", "……的人 / 事物"),
    ("wy-03", "也", "yě", "Dã", "Trợ từ kết thúc khẳng định", "#6E5423", "Đứng cuối câu phán đoán ('... là vậy đấy') giúp câu dứt khoát khẳng định chân lý.", "己所不欲，勿施于人也 (Luận Ngữ).", "……啊 / 确实是这样"),
    ("wy-04", "乎", "hū", "Hồ", "Trợ từ nghi vấn / Giới từ", "#223A52", "1. Hỏi tu từ cuối câu ('chẳng phải sao?': 不亦乐乎); 2. Làm giới từ 'ở/tại' (= 于).", "有朋自远方来，不亦乐乎？", "吗 / 呢 / 于（在）"),
    ("wy-05", "而", "ér", "Nhi", "Liên từ đa năng", "#1F6E5C", "1. Nối đồng đẳng/thuận tiếp ('và rồi'); 2. Chuyển折 đối lập ('nhưng mà', ví dụ 和而不同: Hòa nhưng không đồng hóa).", "温故而知新 / 和而不同。", "并且 / 而且 / 但是"),
    ("wy-06", "以", "yǐ", "Dĩ", "Giới từ / Động từ", "#8C2318", "1. 'Lấy/Bằng phương tiện...' (以史为鉴); 2. 'Nhằm để...' (以防万一); 3. Cho rằng.", "以铜为镜，可以正衣冠 (Lấy đồng làm gương có thể chỉnh áo mũ).", "用 / 拿 / 来 / 因为"),
    ("wy-07", "为", "wéi / wèi", "Vi / Vị", "Động từ / Giới từ", "#8C2318", "Đọc wéi: Làm/Trở thành (变为); Đọc wèi: Vì mục đích / Cho ai đó.", "大道之行也，天下为公 (Lễ Ký).", "做 / 是 / 为了"),
    ("wy-08", "其", "qí", "Kỳ", "Đại từ sở hữu / Phó từ", "#6E5423", "1. 'Của nó/của họ' (极其 / 各自); 2. Nhấn mạnh phỏng đoán ('chắc hẳn là...').", "工欲善其事，必先利其器 (Thợ muốn khéo việc mình ắt trước mài sắc công cụ).", "他的 / 它的 / 难道"),
    ("wy-09", "乃", "nǎi", "Nãi", "Phó từ nối phán đoán", "#223A52", "1. 'Chính là...' (tương đương 便是/就是); 2. 'Bèn / Rồi mới...'.", "失败乃成功之母 (Thất bại chính là mẹ thành công).", "就是 / 于是 / 才"),
    ("wy-10", "所", "suǒ", "Sở", "Trợ từ danh hóa trước động từ", "#1F6E5C", "Đặt trước động từ thành danh từ 'Điều mà...' (所得 điều thu được, 所长 sở trường).", "己所不欲，勿施于人 (Điều bản thân không muốn đừng gán cho người).", "……的东西 / 所作所为"),
    ("wy-11", "则", "zé", "Tắc", "Liên từ điều kiện tất yếu", "#8C2318", "'Thì / Ắt là...' nối điều kiện với hệ quả logic chặt chẽ.", "学而不思则罔，思而不学则殆 (Luận Ngữ).", "就 / 那么 / 却"),
    ("wy-12", "虽", "suī", "Tuy", "Liên từ nhượng bộ", "#6E5423", "'Tuy rằng / Cho dù' đi kèm thường với nhưng 然 / 而 ở vế sau.", "千里之行，始于足下；山虽高，攀则必至。", "虽然 / 即使"),
    ("wy-13", "若", "ruò", "Nhược", "Liên từ giả định / So sánh", "#223A52", "1. 'Nếu như' (如果); 2. 'Giống như' (若隐若现 · 门庭若市).", "若无其事 / 门庭若市 (Cửa sân đông như chợ — Chiến Quốc Sách).", "如果 / 好像"),
    ("wy-14", "然", "rán", "Nhiên", "Đại từ khẳng định / Chuyển ý", "#1F6E5C", "1. Đúng vậy ('然也'); 2. Tuy nhiên ('然而'); 3. Đuôi trạng thái ('Tự nhiên', 'Tất nhiên').", "然而事实并非如此 (Tuy nhiên sự thật không như thế).", "然而 / 这样 / ……的样子"),
    ("wy-15", "既", "jì", "Ký", "Phó từ hoàn thành / Song hành", "#8C2318", "'Đã...' dùng lẻ hoặc ghép cặp '既……又……' (Đã... lại còn...).", "既来之，则安之 (Đã đến thì hãy an tâm ở lại làm tốt — Luận Ngữ).", "已经 / 既然 / 既…又…"),
    ("wy-16", "盖", "gài", "Cái", "Phó từ mở đầu giải thích nguyên nhân", "#6E5423", "Đứng đầu câu luận giải nghĩa là 'Ấy là bởi vì...' hay dùng trong Sử Ký, Cổ văn.", "盖文章，经国之大业 (Điển Luận · Luận Văn — Tào Phi).", "大概 / 原来是因为"),
    ("wy-17", "焉", "yān", "Yên", "Đại từ nơi chốn / Kết câu", "#223A52", "1. Tương đương 'Ở nơi đó' (= 于是/于之); 2. Nghi vấn 'Sao lại...' (Bất nhập hổ huyệt yên đắc hổ tử).", "三人行，必有我师焉 (Trong ba người đi ắt có thầy ta ở trong đó).", "在那里 / 怎么会"),
    ("wy-18", "且", "qiě", "Thả", "Liên từ song song tăng tiến", "#1F6E5C", "'Hơn nữa / Vả lại / Tạm thời' (而且 / 尚且 / 姑且).", "穷且益坚，不坠青云之志 (Vương Bột).", "而且 / 尚且 / 暂且"),
    ("wy-19", "莫", "mò", "Mạc", "Đại từ phủ định toàn thể", "#8C2318", "'Không ai / Không có gì / Đừng...' (莫如 không gì bằng, 莫测 khó lường).", "三人莫不赞叹 (Ba người không ai không tán thưởng).", "没有谁 / 不要 / 不可"),
    ("wy-20", "唯", "wéi", "Duy", "Phó từ giới hạn độc nhất", "#6E5423", "'Chỉ có duy nhất...' (唯物, 唯一, 唯有) hay dùng nhấn mạnh điều kiện tiên quyết.", "唯有源头活水来 / 唯独合作方能共赢。", "只有 / 仅仅")
]


def build_pack_cosmo_lit() -> dict:
    solar_list = [
        {"id": s[0], "zh": s[1], "pinyin": s[2], "vi": s[3], "deg": s[4], "dateApprox": s[5], "tamHau": s[6], "descVi": s[7]}
        for s in SOLAR_TERMS_24
    ]
    ziwu_list = [
        {"nameVi": z[0], "zh": z[1], "range": z[2], "culturalNoteVi": z[3]}
        for z in ZIWU_HOURS_12
    ]
    wuxing_nodes = [
        {"el": "Mộc (木)", "color": "#1F6E5C", "season": "Xuân", "dir": "Đông", "sound": "Giốc", "flavor": "Toan (Chua)", "gen": "Sinh Hỏa", "ctrl": "Khắc Thổ"},
        {"el": "Hỏa (火)", "color": "#8C2318", "season": "Hạ", "dir": "Nam", "sound": "Chủy", "flavor": "Khổ (Đắng)", "gen": "Sinh Thổ", "ctrl": "Khắc Kim"},
        {"el": "Thổ (土)", "color": "#A88940", "season": "Trưởng Hạ", "dir": "Trung Ương", "sound": "Cung", "flavor": "Cam (Ngọt)", "gen": "Sinh Kim", "ctrl": "Khắc Thủy"},
        {"el": "Kim (金)", "color": "#646B73", "season": "Thu", "dir": "Tây", "sound": "Thương", "flavor": "Tân (Cay)", "gen": "Sinh Thủy", "ctrl": "Khắc Mộc"},
        {"el": "Thủy (水)", "color": "#223A52", "season": "Đông", "dir": "Bắc", "sound": "Vũ", "flavor": "Hàm (Mặn)", "gen": "Sinh Mộc", "ctrl": "Khắc Hỏa"}
    ]
    herbs = [
        {
            "id": h[0], "zh": h[1], "pinyin": h[2], "nameVi": h[3], "latin": h[4], "nature": h[5],
            "wuxingElement": h[6], "partUsed": h[7], "culinaryVi": h[8], "image": h[9],
            "nonClinicalReminderVi": "Thực phẩm / gia vị thực dưỡng gia đình cổ truyền; không thay thế điều trị y khoa."
        }
        for h in HERBARIUM_24
    ]
    micro = [
        {"id": m[0], "titleVi": m[1], "titleEn": m[2], "challengeVi": m[3], "mechanismVi": m[4], "physicsVi": m[5]}
        for m in MICROCLIMATE_12
    ]
    poems = [
        {
            "id": p[0], "title": p[1], "authorVi": p[2], "epithetVi": p[3],
            "poemZh": p[4], "pinyin": p[5], "translateVi": p[6], "visualNoteVi": p[7],
            "image": p[8], "pingZeNote": p[9]
        }
        for p in POEM_PAINTING_12
    ]
    wenyan = [
        {
            "id": w[0], "tokenZh": w[1], "pinyin": w[2], "hanViet": w[3],
            "category": w[4], "colorHex": w[5], "functionVi": w[6],
            "classicalExample": w[7], "modernMandarinEq": w[8]
        }
        for w in WENYAN_TOKENS_20
    ]

    return {
        "CCE_V6_COSMOLOGY_VISUAL": {
            "epistemicNotice": {
                "vi": "KHUNG KHOA HỌC BẮT BUỘC V6.0: Toàn bộ dữ liệu 24 Tiết khí, 12 Canh giờ Tử–Ngọ, Ngũ Hành, Herbarium Thực dưỡng 24 vị & Kiến trúc Vi khí hậu là tư liệu lịch sử văn hóa, vật lý công trình và nhân học ẩm thực — tuyệt đối KHÔNG chẩn đoán lâm sàng và KHÔNG bói toán/tiên tri.",
                "en": "V6.0 EPISTEMOLOGICAL BOUNDARY: All 24 Solar Terms, 12 Ziwu rhythms, Wuxing correspondences, Culinary Herbarium, and Microclimate Architecture entries serve historical, anthropological, and building-physics scholarship only — strictly NOT clinical advice or divination."
            },
            "solarTerms24": solar_list,
            "ziwuHours12": ziwu_list,
            "wuxingNodes5": wuxing_nodes,
            "herbarium24": herbs,
            "microclimateCases12": micro
        },
        "CCE_V6_LITERATURE_VISUAL": {
            "novelGraphs4": NOVEL_GRAPHS_4,
            "poemPaintingPairs12": poems,
            "wenyanTokens20": wenyan
        }
    }
