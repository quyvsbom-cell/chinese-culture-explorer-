// ============================================================================
// Section 3.6: 中国地域文化 – Regional Chinese Cultures
// 6 Macro-regions + 10 Priority City Profiles + Diversity Analysis
// ============================================================================

window.CCE_REGIONS = {
  diversityNote:
    "Trung Quốc có diện tích lục địa ~9,6 triệu km² với 34 đơn vị hành chính cấp tỉnh (23 tỉnh, 5 khu tự trị dân tộc thiểu số: Nội Mông, Quảng Tây, Tây Tạng, Ninh Hạ, Tân Cương; 4 thành phố trực thuộc trung ương: Bắc Kinh, Thượng Hải, Thiên Tân, Trùng Khánh; 2 đặc khu: Hồng Kông, Ma Cao) và 56 dân tộc được công nhận chính thức. Tuyệt đối không đồng nhất văn hóa Trung Hoa chỉ với văn hóa người Hán vùng đồng bằng Bắc Bộ hoặc một đô thị duy nhất.",

  macroRegions: [
    {
      id: "north",
      nameVi: "Hoa Bắc",
      nameEn: "North China",
      nameZh: "华北地区",
      color: "#9F2929",
      provinces: "Bắc Kinh (TP), Thiên Tân (TP), Hà Bắc, Sơn Tây, Khu tự trị Nội Mông Cổ.",
      ethnicDiversity: "Người Hán chiếm đa số tại Bắc Kinh–Thiên Tân–Hà Bắc–Sơn Tây; người Mông Cổ và Hồi, Mãn sinh sống lâu đời tại Khu tự trị Nội Mông và vùng giáp ranh.",
      culturalFeatures:
        "Vùng đất cốt lõi của văn minh Hoàng Hà cổ đại (văn hóa Tam Tấn Sơn Tây, Yên-Triệu Hà Bắc) kết hợp văn hóa đế đô đa dân tộc (Liêu–Kim–Nguyên–Minh–Thanh tại Bắc Kinh) và văn hóa thảo nguyên du mục Nội Mông.",
      dialects: "Quan thoại Bắc Kinh – Ký Lỗ (cơ sở ngữ âm Phổ thông thoại) và tiếng Tấn (Sơn Tây) giữ âm nhập thanh cổ; tiếng Mông Cổ tại Nội Mông.",
      economy: "Trung tâm chính trị, giáo dục đại học hàng đầu, tài chính – công nghệ cao (Trung Quan Thôn), công nghiệp cảng biển (Thiên Tân), năng lượng than-điện sạch (Sơn Tây) và chăn nuôi – năng lượng gió/mặt trời (Nội Mông)."
    },
    {
      id: "east",
      nameVi: "Hoa Đông",
      nameEn: "East China",
      nameZh: "华东地区",
      color: "#637F72",
      provinces: "Thượng Hải (TP), Giang Tô, Chiết Giang, An Huy, Phúc Kiến, Giang Tây, Sơn Đông.",
      ethnicDiversity: "Đa số người Hán với sự đa dạng phương ngôn cực lớn; đồng thời là quê hương của người Xa (Chiết Giang–Phúc Kiến) và cộng đồng Hồi giáo lịch sử tại Tuyền Châu – Hàng Châu.",
      culturalFeatures:
        "Bao gồm văn hóa Tề-Lỗ (Sơn Đông – quê hương Nho gia), văn hóa Ngô-Việt tinh tế vùng Giang Nam (Giang Tô–Chiết Giang–Thượng Hải), văn hóa thương nhân Huy Châu (An Huy) và văn hóa hải dương Mân-Việt (Phúc Kiến).",
      dialects: "Ngô ngữ (Thượng Hải, Tô Châu, Hàng Châu), Mân ngữ (Mân Nam/Phúc Châu), Cám ngữ (Giang Tây), Huy ngữ (nam An Huy) và Quan thoại Giao-Liêu (Sơn Đông).",
      economy: "Động lực kinh tế năng động bậc nhất Trung Quốc: trung tâm tài chính – vận tải biển Thượng Hải, sản xuất thông minh Tô-Chiết, thương mại điện tử Hàng Châu, công nghiệp nhẹ/xuất khẩu Phúc Kiến và cảng biển Sơn Đông."
    },
    {
      id: "south",
      nameVi: "Hoa Nam & Trung Nam",
      nameEn: "South & Central China",
      nameZh: "华南与中南地区",
      color: "#B99A62",
      provinces: "Quảng Đông, Khu tự trị dân tộc Choang Quảng Tây, Hải Nam, Hồ Nam, Hồ Bắc, Hà Nam, Hồng Kông (SAR), Ma Cao (SAR).",
      ethnicDiversity: "Khu vực giao thoa đa sắc tộc mạnh: người Choang (dân tộc thiểu số đông dân nhất Trung Quốc tại Quảng Tây), Dao, Miêu, Lê (Hải Nam), Thổ Gia và người Hán bản địa Lĩnh Nam – Khách Gia.",
      culturalFeatures:
        "Từ cội nguồn văn minh Trung Nguyên (Hà Nam) và văn hóa Kinh-Sở lãng mạn (Hồ Bắc–Hồ Nam) xuôi xuống văn hóa Lĩnh Nam (Quảng Phủ, Triều Sán, Khách Gia) có truyền thống thương mại biển và di cư Hoa kiều rộng khắp Đông Nam Á.",
      dialects: "Việt ngữ / Quảng Đông (Quảng Châu–Hồng Kông), Khách Gia (Hakka), Mân/Triều Châu, Tương ngữ (Hồ Nam), cùng ngôn ngữ Thái–Kadai của người Choang.",
      economy: "Vùng Vịnh Lớn Quảng Đông–Hồng Kông–Ma Cao dẫn đầu về phần cứng điện tử, AI, xe điện (Thâm Quyến–Đông Quản–Phật Sơn), ngoại thương và hành lang biên mậu trực tiếp với Việt Nam qua Quảng Tây (Nam Ninh – Bằng Tường – Đông Hưng)."
    },
    {
      id: "southwest",
      nameVi: "Tây Nam",
      nameEn: "Southwest China",
      nameZh: "西南地区",
      color: "#B63D32",
      provinces: "Trùng Khánh (TP), Tứ Xuyên, Quý Châu, Vân Nam, Khu tự trị Tây Tạng.",
      ethnicDiversity: "Khu vực đa dạng dân tộc học bậc nhất Trung Quốc: người Tạng, Di, Bạch, Thái, Nạp Tây, Miêu, Bố Y, Cáp Nê, Choang và người Hán Ba-Thục.",
      culturalFeatures:
        "Văn hóa Ba-Thục hào sảng nhàn nhã (Tứ Xuyên–Trùng Khánh, di chỉ Tam Tinh Đôi độc đáo), văn hóa cao nguyên Phật giáo Tạng truyền (Tây Tạng) và văn hóa Cổ đạo Trà Mã xuyên núi non Vân-Quý-Tạng.",
      dialects: "Quan thoại Tây Nam (Tứ Xuyên, Trùng Khánh, Vân-Quý) cùng hàng chục ngôn ngữ thuộc ngữ hệ Tạng–Miến, Miêu–Dao và Thái–Kadai.",
      economy: "Thành Đô–Trùng Khánh là cực tăng trưởng nội địa phía Tây (công nghiệp ô tô, bán dẫn, đường sắt Trung–Âu khởi hành từ Trùng Khánh/Thành Đô); Vân Nam đóng vai trò cửa ngõ đường bộ kết nối ASEAN (qua Côn Minh – Hà Khẩu – Lào Cai)."
    },
    {
      id: "northwest",
      nameVi: "Tây Bắc",
      nameEn: "Northwest China",
      nameZh: "西北地区",
      color: "#7E5D43",
      provinces: "Thiểm Tây, Cam Túc, Thanh Hải, Khu tự trị dân tộc Hồi Ninh Hạ, Khu tự trị Duy Ngô Nhĩ Tân Cương.",
      ethnicDiversity: "Giao điểm văn minh Trung Hoa – Trung Á – Hồi giáo – Tây Tạng: người Hán, Hồi, Duy Ngô Nhĩ, Kazakh, Tạng, Đông Hương.",
      culturalFeatures:
        "Cái nôi cố đô Hán-Đường (Tây An / Quan Trung) và hành lang Con đường Tơ lụa cổ đại (Đôn Hoàng, Thổ Lỗ Phồn, Kashgar), nổi bật với nghệ thuật hang đá Phật giáo, văn hóa ốc đảo và âm nhạc Mộc Khải Mỗ (Muqam).",
      dialects: "Quan thoại Lan-Ngân, Quan thoại Trung Nguyên (Thiểm Tây), tiếng Duy Ngô Nhĩ (ngữ hệ Turk), tiếng Tạng An Đa.",
      economy: "Năng lượng tái tạo quy mô lớn (điện mặt trời/gió ở Cam Túc–Thanh Hải–Tân Cương), nông nghiệp tưới tiêu ốc đảo (bông, trái cây), du lịch di sản Tơ lụa và trung tâm trung chuyển đường sắt Á–Âu tại Tây An và Urumqi."
    },
    {
      id: "northeast",
      nameVi: "Đông Bắc",
      nameEn: "Northeast China",
      nameZh: "东北地区",
      color: "#4B637A",
      provinces: "Liêu Ninh, Cát Lâm, Hắc Long Giang.",
      ethnicDiversity: "Người Hán (hậu duệ làn sóng di dân 'Sấm Quan Đông'), người Mãn, người Triều Tiên (tập trung tại Diên Biên), Mông Cổ, Hách Triết.",
      culturalFeatures:
        "Kết hợp văn hóa Bát Kỳ Mãn Châu (Thẩm Dương), di sản công nghiệp nặng giữa thế kỷ XX, phong cách giao tiếp hài hước – trực tính ('Nhị nhân chuyển') và kiến trúc giao thoa Nga–Trung tại Cáp Nhĩ Tân.",
      dialects: "Quan thoại Đông Bắc (gần Phổ thông thoại nhất về ngữ pháp nhưng giàu khẩu ngữ sinh động và âm uốn lưỡi đặc trưng).",
      economy: "'Vựa lương thực' trọng yếu của Trung Quốc (đồng bằng Tùng Liêu), công nghiệp chế tạo thiết bị nặng, đóng tàu (Đại Liên) và du lịch băng tuyết Cáp Nhĩ Tân."
    }
  ],

  cities: [
    {
      id: "beijing",
      nameVi: "Bắc Kinh",
      nameEn: "Beijing",
      nameZh: "北京",
      region: "Hoa Bắc",
      history: "Từng là Kế Thành nước Yên thời Chiến Quốc, bồi đô của Liêu (Nam Kinh), kinh đô nhà Kim (Trung Đô), nhà Nguyên (Đại Đô), nhà Minh-Thanh và thủ đô nước CHND Trung Hoa từ 1949.",
      customs: "Phong thái trọng thể diện lễ nghi, thích bàn chuyện thời sự chính trị ('Khản đại sơn' 侃大山), uống trà hoa nhài và đi hội chùa dịp Tết.",
      cuisine: "Ẩm thực Kinh-Lỗ kết hợp cung đình và dân gian: Vịt quay Bắc Kinh, Lẩu cừu nhúng nồi đồng (Đồng oa xuyên dương nhục), Mì tương đen (Trá tương miến), Đậu phụ lên men Đậu trấp.",
      architecture: "Quy hoạch trục trung tâm đối xứng hoàn mỹ (Tử Cấm Thành, Thiên Đàn, Di Hòa Viên) và khu dân cư ngõ nhỏ Hồ Đồng – Tứ Hợp Viện (四合院).",
      dialect: "Tiếng Bắc Kinh (âm uốn lưỡi Nhi hóa âm 儿化音 rõ nét) – nguồn gốc chuẩn âm của tiếng Phổ thông.",
      heritage: "Nhiều di sản UNESCO nhất một thành phố: Tử Cấm Thành, Thiên Đàn, Di Hòa Viên, Vạn Lý Trường Thành, Chu Khẩu Điếm, Đại Vận Hà, Trục Trung Tâm Bắc Kinh (2024).",
      economy: "Trung tâm trụ sở các tập đoàn nhà nước, công nghệ cao Trung Quan Thôn (AI, phần mềm – ByteDance, Baidu, Xiaomi) và trung tâm đại học hàng đầu (Bắc Đại, Thanh Hoa).",
      landmarks: "Cố Cung, Thiên An Môn, Thiên Đàn, Di Hòa Viên, Hồ Đồng Nam La Cổ Hạng, Khu nghệ thuật 798."
    },
    {
      id: "shanghai",
      nameVi: "Thượng Hải",
      nameEn: "Shanghai",
      nameZh: "上海",
      region: "Hoa Đông",
      history: "Từ làng chài và thị trấn dệt bông thời Tống-Minh, Thượng Hải vươn lên thành thương cảng quốc tế bậc nhất Viễn Đông sau năm 1842, hình thành văn hóa 'Hải Phái' (海派) dung hợp Đông–Tây.",
      customs: "Thực dụng, coi trọng quy tắc hợp đồng, ranh giới riêng tư rõ ràng, văn hóa cà phê hàng đầu thế giới (mật độ quán cà phê cao nhất toàn cầu).",
      cuisine: "Bản bang thái (本帮菜) thiên vị đậm ngọt nhẹ thanh: Tiểu long bao Nam Tường, Thịt kho Đông Pha kiểu Thượng Hải (Hồng thiêu nhục), Cua lông Dương Trừng Hồ, Sinh tiễn bao.",
      architecture: "Bến Thượng Hải (Ngoại Than – kiến trúc Tân cổ điển/Art Deco thế kỷ XIX–XX), khu nhà gạch Thạch Khố Môn (石库门) và quần thể cao ốc Phố Đông (Lục Gia Chủy).",
      dialect: "Tiếng Thượng Hải (thuộc nhóm Ngô ngữ – giữ nhiều phụ âm hữu thanh và thanh điệu khác hẳn Quan thoại Bắc Kinh).",
      heritage: "Di sản Hải Phái, Dự Viên thời Minh, nghệ thuật bình đàn Giang Nam và di sản công nghiệp cận đại.",
      economy: "Trung tâm tài chính, chứng khoán, vận tải container lớn nhất thế giới (cảng Dương Sơn), khu thí điểm thương mại tự do và trụ sở khu vực của các tập đoàn đa quốc gia.",
      landmarks: "Ngoại Than (The Bund), Tháp Minh Châu Phương Đông & Tháp Thượng Hải, Dự Viên, Tân Thiên Địa, Khu Tô giới Pháp cũ."
    },
    {
      id: "guangzhou",
      nameVi: "Quảng Châu",
      nameEn: "Guangzhou",
      nameZh: "广州",
      region: "Hoa Nam",
      history: "Lịch sử hơn 2.200 năm (Phiên Ngung – kinh đô Nam Việt), là điểm xuất phát trọng yếu của Con đường Tơ lụa trên biển thời Đường-Tống và cảng thông thương duy nhất với phương Tây thời Càn Long (Thập tam hàng).",
      customs: "Thực dụng, cởi mở thương mại, coi trọng gia tộc và phong tục ẩm thực 'Nhất chung lưỡng kiện' (một ấm trà hai đĩa dimsum mỗi sáng – Ẩm trà 早茶).",
      cuisine: "Tinh hoa Việt thái (Quảng Đông): Dimsum (Há cảo, Xíu mại, Bánh cuốn Tràng phấn), Vịt quay da giòn, Gà luộc Bạch thiết kê, Canh hầm lửa nhỏ Lão hỏa lượng thang.",
      architecture: "Kỵ lâu (骑楼 – nhà phố có hành lang che mưa nắng nhiệt đới), Thư viện Trần Gia Từ chạm khắc tinh xảo và khu phố Tây Quan cổ.",
      dialect: "Tiếng Quảng Đông (Việt ngữ) giữ hệ thống 6–9 thanh điệu và phụ âm cuối -p, -t, -k rất gần âm Hán-Việt.",
      heritage: "Việt kịch (Cải lương Quảng Đông), múa Lân Sư Rồng Lĩnh Nam, Dược thiện thảo mộc Lĩnh Nam.",
      economy: "Trung tâm thương mại bán buôn toàn cầu, nơi tổ chức Hội chợ Xuất nhập khẩu Trung Quốc (Canton Fair) lớn nhất thế giới hai lần mỗi năm, cùng công nghiệp ô tô và thương mại xuyên biên giới.",
      landmarks: "Trần Gia Từ, Đảo Sa Diện, Tháp Quảng Châu, Phố đi bộ Bắc Kinh Lộ, Công viên Việt Tú."
    },
    {
      id: "shenzhen",
      nameVi: "Thâm Quyến",
      nameEn: "Shenzhen",
      nameZh: "深圳",
      region: "Hoa Nam",
      history: "Từ huyện Bảo An nông nghiệp – đánh cá giáp Hồng Kông, được chọn làm Đặc khu Kinh tế đầu tiên năm 1980 ('Tốc độ Thâm Quyến'), trở thành biểu tượng cho công cuộc Cải cách Mở cửa.",
      customs: "Thành phố nhập cư trẻ trung ('Đến đây là người Thâm Quyến' 来了就是深圳人), ít ràng buộc quan hệ thân tộc địa phương, đề cao hiệu suất, khởi nghiệp và bình đẳng cơ hội.",
      cuisine: "Hội tụ ẩm thực tứ phương Trung Quốc (đặc biệt Xuyên, Tương, Triều Sán lẩu bò, Quảng Đông) cùng văn hóa ăn uống nhanh khu công nghệ.",
      architecture: "Đô thị vị lai hiện đại (Trung tâm Tài chính Bình An, vịnh Thâm Quyến) đan xen các làng đô thị 'Thành trung thôn' và bảo tàng thiết kế đương đại.",
      dialect: "Phổ thông thoại là ngôn ngữ giao tiếp chính nhờ dân số nhập cư khắp cả nước, bên cạnh cộng đồng nói tiếng Quảng Đông và Khách Gia bản địa.",
      heritage: "Thành cổ Đại Bằng Sở Thành (thời Minh), làng tranh sơn dầu Đại Phân và di sản đổi mới sáng tạo đương đại.",
      economy: "'Thung lũng Silicon phần cứng' của thế giới: trụ sở Huawei, Tencent, BYD, DJI, BGI; hệ sinh thái chuỗi cung ứng điện tử – xe điện – drone hoàn chỉnh trong bán kính 1 giờ xe.",
      landmarks: "Trung tâm Tài chính Bình An, Công viên Liên Hoa Sơn, Hoa Cường Bắc (chợ linh kiện điện tử), Cảng Xà Khẩu, Thành cổ Nam Đầu."
    },
    {
      id: "xian",
      nameVi: "Tây An",
      nameEn: "Xi'an",
      nameZh: "西安",
      region: "Tây Bắc",
      history: "Cố đô Trường An của 13 triều đại (Chu, Tần, Tây Hán, Tùy, Đường) – điểm khởi đầu phía Đông của Con đường Tơ lụa cổ đại và trung tâm Phật giáo – văn hóa Đông Á thời Đường.",
      customs: "Trầm ổn, tự hào sâu sắc về lịch sử đế đô Hán-Đường, kết hợp sinh hoạt cộng đồng Hồi giáo lâu đời tại Khu phố Hồi.",
      cuisine: "Văn hóa bột mì và thịt cừu Tây Bắc: Nhục giáp mô (bánh kẹp thịt kho), Dương nhục bào mô (bánh mì xé chan nước dùng cừu), Mì Biangbiang sợi to, Lương bì.",
      architecture: "Thành cổ Tây An thời Minh còn nguyên vẹn nhất Trung Quốc, Tháp Đại Nhạn (nơi Huyền Trang dịch kinh) và Di chỉ Đại Minh Cung.",
      dialect: "Quan thoại Trung Nguyên phương ngữ Quan Trung (mộc mạc, âm điệu mạnh mẽ).",
      heritage: "Đội quân đất nung Binh Mã Dũng Tần Thủy Hoàng, Tần Khang (kịch cổ Thiểm Tây), Bia Lâm Tây An (kho bia đá thư pháp lớn nhất).",
      economy: "Trung tâm hàng không vũ trụ, công nghiệp bán dẫn, sản xuất xe năng lượng mới và đầu mối cảng cạn quốc tế (tàu hàng Trường An kết nối Trung Á – châu Âu).",
      landmarks: "Bảo tàng Binh Mã Dũng, Thành cổ Tây An, Tháp Đại Nhạn, Tháp Chuông – Tháp Trống, Khu phố Hồi."
    },
    {
      id: "chengdu",
      nameVi: "Thành Đô",
      nameEn: "Chengdu",
      nameZh: "成都",
      region: "Tây Nam",
      history: "Trung tâm văn hóa Cổ Thục (Tam Tinh Đôi, Kim Sa) hơn 3.000 năm trước; duy trì vị thế 'Thiên phủ chi quốc' trù phú và hiếm khi đổi tên hay dời vị trí suốt hơn 2.300 năm.",
      customs: "Nổi tiếng với nhịp sống khoan thai 'Ba thích' (巴适 – thư thái): ngồi trà quán ngoài trời uống trà hoa nhài cả buổi chiều, chơi mạt chược, tôn trọng sự tận hưởng đời sống.",
      cuisine: "Thủ phủ ẩm thực Xuyên thái được UNESCO công nhận 'Thành phố Ẩm thực': Lẩu Thành Đô, Đậu hũ Ma Bà, Cá nấu ớt Thủy chử, Chuỗi chuỗi hương, Gà Khẩu thủy.",
      architecture: "Nhà truyền thống Xuyên Tây lợp ngói xám – tre trúc (Khoan Trạch Hạng Tử), Đô Giang Yển (hệ thống thủy lợi 2.200 năm không đập chắn) và Vũ Hầu Từ.",
      dialect: "Tiếng Thành Đô (Quan thoại Tây Nam ngữ điệu du dương, giàu từ biểu cảm địa phương).",
      heritage: "Xuyên Kịch (nghệ thuật Biến diện – đổi mặt trong chớp mắt), Thục tú, Thục cẩm và văn hóa trà quán dân gian.",
      economy: "Động lực công nghệ – hàng không – game – sinh học của miền Tây Trung Quốc; trung tâm logistics hàng không và hành lang đường sắt Tây Nam.",
      landmarks: "Cơ sở Nghiên cứu Gấu trúc Khổng lồ, Đô Giang Yển & Núi Thanh Thành, Vũ Hầu Từ, Thảo đường Đỗ Phủ, Bảo tàng Tam Tinh Đôi (gần Thành Đô)."
    },
    {
      id: "chongqing",
      nameVi: "Trùng Khánh",
      nameEn: "Chongqing",
      nameZh: "重庆",
      region: "Tây Nam",
      history: "Trung tâm văn hóa Ba cổ đại tại hợp lưu Trường Giang và Gia Lăng; thủ đô thời chiến của Trung Hoa Dân Quốc (1937–1945) và trở thành Thành phố trực thuộc Trung ương thứ 4 năm 1997.",
      customs: "Tính cách hào sảng, thẳng thắn, 'Giang hồ khí' của dân phu bến sông xưa; cực kỳ hiếu khách và sôi động về đêm.",
      cuisine: "Lẩu Trùng Khánh cay nồng mỡ bò chín ô ('Cửu cung cách'), Mì Trùng Khánh (Tiểu miến), Gà cay Ca Lạc Sơn và các món giang hồ thái bên bến tàu.",
      architecture: "'Thành phố 8D' bám vách núi dựng đứng: nhà sàn Điếu Cước Lâu (Hồng Nhai Động), cáp treo vượt Trường Giang, đường sắt nhẹ xuyên qua tòa chung cư Lý Tử Bá.",
      dialect: "Tiếng Trùng Khánh (âm sắc mạnh, phóng khoáng hơn tiếng Thành Đô).",
      heritage: "Tượng khắc đá Đại Túc (Di sản UNESCO – nghệ thuật Phật-Đạo-Nho thời Đường-Tống), hò kéo thuyền Xuyên Giang.",
      economy: "Cứ điểm sản xuất ô tô (Changan, Seres) và laptop lớn bậc nhất thế giới, đồng thời là điểm khởi đầu Hành lang Thương mại Đất-Biển Mới phía Tây kết nối thẳng với đường sắt/cảng biển Đông Nam Á.",
      landmarks: "Hồng Nhai Động, Giải Phóng Bi, Cổ trấn Từ Khí Khẩu, Tượng đá Đại Túc, Giao lộ Triều Thiên Môn."
    },
    {
      id: "nanjing",
      nameVi: "Nam Kinh",
      nameEn: "Nanjing",
      nameZh: "南京",
      region: "Hoa Đông",
      history: "'Cố đô Lục Triều' (Ngô, Đông Tấn, Tống, Tề, Lương, Trần), từng là kinh đô đầu nhà Minh và thủ đô Trung Hoa Dân Quốc (1927–1949), mang chiều sâu bi tráng của lịch sử cận đại.",
      customs: "Thâm trầm, trọng học thuật ('Thiên hạ văn khu' – nơi từng đặt Giang Nam Cống Viện kỳ thi Hương lớn nhất đế chế), nhịp sống ôn hòa hơn Thượng Hải.",
      cuisine: "Ẩm thực Kim Lăng nổi tiếng về vịt: Vịt muối Nam Kinh (Diêm thủy áp), Miến tiết vịt, Súp bánh bao đường và ẩm thực chay tinh tế.",
      architecture: "Thành tường Nam Kinh thời Minh dài nhất thế giới, Minh Hiếu Lăng, Lăng Tôn Trung Sơn và khu dinh thự kiến trúc Dân Quốc dọc đường Di Hòa.",
      dialect: "Quan thoại Giang-Hoài (hệ thống giao thoa giữa Quan thoại phương Bắc và phương ngữ Ngô phương Nam).",
      heritage: "Vân Cẩm Nam Kinh (gấm mây hoàng gia – UNESCO), Tần Hoài đăng hội và văn hóa bảo tàng cận đại.",
      economy: "Trung tâm nghiên cứu khoa học tự nhiên (Đại học Nam Kinh, Đông Nam), công nghiệp hóa dầu, lưới điện thông minh, phần mềm và sản xuất ô tô.",
      landmarks: "Phu Tử Miếu – sông Tần Hoài, Minh Hiếu Lăng, Lăng Trung Sơn, Bảo tàng Nam Kinh, Nhà tưởng niệm Nạn nhân Thảm sát Nam Kinh."
    },
    {
      id: "hangzhou",
      nameVi: "Hàng Châu",
      nameEn: "Hangzhou",
      nameZh: "杭州",
      region: "Hoa Đông",
      history: "Vùng đất văn minh Lương Chử 5.000 năm, cực nam Đại Vận Hà nhà Tùy, và kinh đô Lâm An phồn hoa bậc nhất thế giới thế kỷ XII–XIII thời Nam Tống ('Thượng hữu thiên đàng, hạ hữu Tô Hàng').",
      customs: "Nhã nhặn, yêu thích thưởng trà Tây Hồ Long Tỉnh, dạo cảnh thiên nhiên và tinh thần văn nhân Giang Nam kết hợp nhịp sống khởi nghiệp công nghệ số.",
      cuisine: "Hàng Bang thái (Chiết Giang) thanh tao tinh tế: Cá giấm Tây Hồ (Tây Hồ thố ngư), Tôm xào lá trà Long Tỉnh, Thịt Đông Pha, Măng non hầm giăm bông.",
      architecture: "Kiến trúc vườn cổ thanh mảnh hòa vào sơn thủy Tây Hồ, Lục Hòa Tháp, Linh Ẩn Tự và phố cổ Hà Phường.",
      dialect: "Tiếng Hàng Châu (nhánh Ngô ngữ đặc biệt chịu ảnh hưởng từ Quan thoại Bắc Kinh khi quan lại Nam Tống di cư từ Khai Phong xuống).",
      heritage: "Cảnh quan Văn hóa Tây Hồ (UNESCO), nghệ thuật chế biến trà Long Tỉnh, Tơ lụa Hàng Châu và triện khắc Tây Linh Ấn Xã.",
      economy: "'Thủ phủ Thương mại Điện tử' của Trung Quốc: trụ sở Alibaba, Ant Group, NetEase, Hikvision, Geely và hệ sinh thái livestream – thanh toán số hàng đầu.",
      landmarks: "Tây Hồ (Thập cảnh Tây Hồ), Chùa Linh Ẩn, Bảo tàng Tơ lụa Quốc gia, Khu công viên đầm lầy Tây Khê, Công viên Khảo cổ Lương Chử."
    },
    {
      id: "tianjin",
      nameVi: "Thiên Tân",
      nameEn: "Tianjin",
      nameZh: "天津",
      region: "Hoa Bắc",
      history: "Thành lập năm 1404 ('Thiên tử độ tân' – bến đò của Thiên tử) làm cửa ngõ quân sự – vận tải lương thực Đại Vận Hà bảo vệ Bắc Kinh; bùng nổ thành thương cảng công nghiệp cận đại sau 1860.",
      customs: "Nổi tiếng với khiếu hài hước dân dã, lạc quan ('Nhạc a' 乐呵) và cái nôi của nghệ thuật tấu hài Tương Thanh (相声) trên các sân khấu trà quán.",
      cuisine: "Thiên Tân vị nổi bật ẩm thực ăn sáng và hải sản vịnh Bột Hải: Bánh bao Cẩu Bất Lý, Quẩy xoắn Thập Bát Nhai, Bánh kếp Giáp Quả Tử (Tiễn bính quả tử – ăn sáng trứ danh).",
      architecture: "Khu Ngũ Đại Đạo (五大道) với hơn 2.000 biệt thự phong cách châu Âu – Nhật Bản đầu thế kỷ XX và phố cổ Văn Hóa dọc sông Hải Hà.",
      dialect: "Tiếng Thiên Tân (nhánh Quan thoại đặc biệt có thanh điệu luyến xuống trầm bổng rất dễ nhận diện và giàu tính hài hước).",
      heritage: "Tranh Tết khắc gỗ Dương Liễu Thanh (杨柳青年画), Tượng nặn đất sét Nê Nhân Trương và Tương Thanh truyền thống.",
      economy: "Cảng biển nhân tạo lớn nhất miền Bắc Trung Quốc phục vụ vùng Kinh-Tân-Ký, trung tâm lắp ráp hàng không (Airbus A320), công nghiệp hóa chất và logistics xuyên lục địa.",
      landmarks: "Khu Ngũ Đại Đạo, Phố Cổ Văn Hóa, Vòng quay Mắt Thiên Tân trên sông Hải Hà, Nhà gốm Sứ (Từ Phòng Tử), Cảng Tân Hải."
    },
    {
      id: "suzhou",
      nameVi: "Tô Châu",
      nameEn: "Suzhou",
      nameZh: "苏州",
      region: "Hoa Đông",
      history: "Thành lập năm 514 TCN (kinh đô nước Ngô thời Xuân Thu – 'Cô Tô thành'), suốt hơn một thiên niên kỷ từ thời Đường–Tống–Minh–Thanh luôn là biểu tượng phồn hoa bậc nhất vùng Giang Nam ('Thượng hữu thiên đàng, hạ hữu Tô Hàng').",
      customs: "Phong thái Ngô Nùng nhuyễn ngữ (吴侬软语) nhẹ nhàng, tinh tế, coi trọng thẩm mỹ đời sống thường nhật, thưởng trà Bích Loa Xuân, nghe Bình Đàn và Côn Khúc.",
      cuisine: "Tô Bang thái (苏帮菜) thanh ngọt tinh xảo theo mùa: Cá quả sóc (Tùng thử quế ngư), Cua lông Dương Trừng Hồ, Bánh ngọt Tô thức và Mì nước dùng trong đầu ngày ('Đầu thang miến').",
      architecture: "Hệ thống phố cổ sông đào đan xen ('Tiểu kiều, lưu thủy, nhân gia'), 9 khu Viên lâm cổ điển được UNESCO công nhận Di sản Thế giới và Bảo tàng Tô Châu do Bối Duật Minh (I.M. Pei) thiết kế.",
      dialect: "Tiếng Tô Châu (đại diện chuẩn mực nhất của nhóm phương ngữ Ngô truyền thống, âm điệu êm dịu uyển chuyển).",
      heritage: "Viên lâm Cổ điển Tô Châu (Chuyết Chính Viên, Lưu Viên, Võng Sư Viên), Côn Khúc (UNESCO), Thêu Tô tú (Tứ đại danh tú) và tơ lụa Tống Cẩm.",
      economy: "Thành phố cấp địa khu có GDP công nghiệp lớn nhất Trung Quốc: Khu Công nghiệp Tô Châu (SIP hợp tác Singapore), cụm sản xuất công nghệ sinh học, thiết bị y tế, điện tử chính xác và vật liệu nano.",
      landmarks: "Chuyết Chính Viên, Bảo tàng Tô Châu, Phố cổ Bình Giang & Sơn Đường, Chùa Hàn Sơn, Hồ Kim Kê."
    },
    {
      id: "wuhan",
      nameVi: "Vũ Hán",
      nameEn: "Wuhan",
      nameZh: "武汉",
      region: "Hoa Nam & Trung Nam",
      history: "Hợp thành từ 'Vũ Hán tam trấn' (Vũ Xương, Hán Khẩu, Hán Dương) nơi sông Hán Thủy đổ vào Trường Giang; là trung tâm văn hóa Kinh–Sở cổ đại, thương cảng lớn thế kỷ XIX và nơi bùng nổ Khởi nghĩa Vũ Xương (10/10/1911) lật đổ nhà Thanh.",
      customs: "Tính cách người Vũ Hán bộc trực, nhiệt tình, trọng nghĩa khí ('Giang hồ khí' vùng Cửu tỉnh thông cù) và văn hóa 'Quá tảo' (过早 – vừa đi bộ vừa thưởng thức hàng chục món ăn sáng đường phố sôi động).",
      cuisine: "Ẩm thực Hồ Bắc (Ngạc thái) nổi tiếng món cá nước ngọt và điểm tâm sáng: Mì khô nóng Vũ Hán (Nhiệt can miến 热干面), Đậu bì tam tiên, Cổ vịt Chu Hắc Áp, Canh củ sen hầm sườn heo.",
      architecture: "Hoàng Hạc Lâu ('Thiên hạ giang sơn đệ nhất lâu'), Cầu Trường Giang Vũ Hán (cầu đường bộ–đường sắt vượt Trường Giang đầu tiên năm 1957) và dãy kiến trúc ngân hàng cổ dọc Giang Hán Lộ.",
      dialect: "Quan thoại Tây Nam (phương ngữ Vũ Hán có thanh điệu dứt khoát, giàu từ vựng khẩu ngữ bến sông).",
      heritage: "Văn hóa nước Sở (Bảo tàng Tỉnh Hồ Bắc lưu giữ Biên chung Tăng Hầu Ất và Kiếm Việt Vương Câu Tiễn), Hán kịch và lễ hội bơi vượt Trường Giang.",
      economy: "Trung tâm giao thông đường sắt – đường thủy nội địa số 1 miền Trung Trung Quốc ('Cửu tỉnh thông cù'), trung tâm đại học lớn (ĐH Vũ Hán, ĐH Khoa học Kỹ thuật Hoa Trung) và Thung lũng Quang học ('Quang Cốc' – cáp quang, chip nhớ, laser).",
      landmarks: "Hoàng Hạc Lâu, Bảo tàng Tỉnh Hồ Bắc, Đông Hồ, Đại học Vũ Hán (mùa hoa anh đào), Cầu Trường Giang Vũ Hán."
    },
    {
      id: "quanzhou-xiamen",
      nameVi: "Tuyền Châu & Hạ Môn (Mân Nam)",
      nameEn: "Quanzhou & Xiamen (Southern Fujian)",
      nameZh: "泉州·厦门（闽南文化圈）",
      region: "Hoa Đông",
      history: "Tuyền Châu (cổ danh 'Thích Đồng cảng' / Zaytun trong bút ký Marco Polo và Ibn Battuta) là thương cảng lớn nhất thế giới thời Tống–Nguyên; Hạ Môn là một trong 5 thương cảng mở cửa năm 1842 và Đặc khu Kinh tế năm 1980.",
      customs: "Tinh thần 'Ái bính tài hội doanh' (爱拼才会赢 — Dám dấn thân phấn đấu mới chiến thắng), trọng tín ngưỡng dân gian (Thiên Hậu Thánh Mẫu Ma Tổ, Quan Đế), gắn kết chặt chẽ với mạng lưới Hoa kiều Mân Nam khắp Đông Nam Á và Đài Loan.",
      cuisine: "Ẩm thực Mân Nam thanh ngọt vị hải sản: Mì sợi nhỏ Tuyền Châu (Miến tuyến hồ), Trứng tráng hàu biển (Hải lệ tiễn), Canh thịt bò viên, Gà vịt nấu gừng dầu vừng và văn hóa Công phu trà Thiết Quan Âm.",
      architecture: "Nhà cổ gạch đỏ đuôi chim én Mân Nam ('Hồng chuyên cổ thố' 红砖古厝), biệt thự vòm cổng đảo Cổ Lãng Tự (Gulangyu – UNESCO) và kiến trúc Gia Canh tại Đại học Hạ Môn.",
      dialect: "Tiếng Mân Nam (Hokkien / Tuyền–Chương) bảo lưu tầng ngữ âm Hán cổ thời Lục Triều – Đường và là tiếng mẹ đẻ của đông đảo cộng đồng người Hoa tại Singapore, Malaysia, Philippines, Đài Loan.",
      heritage: "Di sản Thế giới UNESCO 'Tuyền Châu: Trung tâm Thương mại Thế giới thời Tống–Nguyên' (22 điểm di tích gồm Thị Bạc Ty, Thanh Tĩnh Tự, tượng Lão Quân), đảo Cổ Lãng Tự, Nam Âm (hóa thạch âm nhạc cổ) và tục cài hoa Trâm Hoa Vi (簪花围).",
      economy: "Cụm công nghiệp giày dép – thể thao lớn nhất Trung Quốc (Anta, Xtep, 361° tại Tấn Giang – Tuyền Châu), cảng container nước sâu Hạ Môn và đầu mối giao thương kinh tế – học thuật (Đại học Hạ Môn).",
      landmarks: "Chùa Khai Nguyên & Tháp Đôi Tuyền Châu, Đảo Cổ Lãng Tự (Hạ Môn), Đại học Hạ Môn, Cầu Lạc Dương thời Tống, Làng chài Tuần Phố."
    },
    {
      id: "kunming",
      nameVi: "Côn Minh",
      nameEn: "Kunming",
      nameZh: "昆明",
      region: "Tây Nam",
      history: "Trung tâm văn hóa Điền Việt cổ đại bên hồ Điền Trì, vương quốc Nam Chiếu – Đại Lý thời Đường–Tống, hậu phương văn hóa – giáo dục thời kháng chiến chống Nhật (Đại học Liên hiệp Tây Nam 1938–1946) và thủ phủ tỉnh Vân Nam.",
      customs: "Nhịp sống ôn hòa giữa khí hậu cao nguyên mát mẻ quanh năm ('Xuân Thành' 春城), giao thoa rực rỡ lễ hội của 26 dân tộc (Lễ hội Đuốc người Di, Lễ hội Té nước người Thái, chợ hoa Đấu Nam).",
      cuisine: "Ẩm thực Vân Nam (Điền thái) nổi tiếng về nấm rừng tươi, hoa ăn được và nguyên liệu vùng cao: Bún qua cầu (Quá kiều mễ tuyến 过桥米线), Lẩu nấm hoang dã, Gà tần nồi đất Khí oa kê, Bánh hoa hồng tươi.",
      architecture: "Kim Mã Bích Kê Phường, Chùa Đồng Kim Điện, phố cổ Quan Độ và kiến trúc truyền thống của người Bạch, người Di, người Nạp Tây.",
      dialect: "Quan thoại Tây Nam (phương ngữ Côn Minh).",
      heritage: "Di tích Trường Đại học Liên hiệp Tây Nam (西南联大 – nơi đào tạo Dương Chấn Ninh, Lý Chính Đạo, Uông Tăng Kỳ), Rừng đá Thạch Lâm (UNESCO) và khởi điểm tuyến Trà Mã Cổ Đạo.",
      economy: "Cửa ngõ đường sắt – đường bộ chiến lược kết nối Trung Quốc với Việt Nam (tuyến Côn Minh – Hà Khẩu – Lào Cai – Hải Phòng) và Lào/Thái Lan; trung tâm giao dịch hoa tươi lớn nhất châu Á (Đấu Nam), dược liệu, trà Phổ Nhĩ và kim loại màu.",
      landmarks: "Hồ Điền Trì & Tây Sơn Long Môn, Rừng đá Thạch Lâm, Di tích Đại học Liên hiệp Tây Nam, Chợ hoa Đấu Nam, Công viên Thúy Hồ."
    },
    {
      id: "nanning-pingxiang",
      nameVi: "Nam Ninh & Bằng Tường (Quảng Tây)",
      nameEn: "Nanning & Pingxiang (Guangxi Corridor)",
      nameZh: "南宁·凭祥（中国—东盟门户）",
      region: "Hoa Nam",
      history: "Vùng đất cổ của tộc người Lạc Việt – Âu Việt (tổ tiên người Choang và người Tày–Nùng), thủ phủ Khu tự trị dân tộc Choang Quảng Tây và cửa ải lịch sử Hữu Nghị Quan (Trấn Nam Quan) trên biên giới đất liền Trung – Việt.",
      customs: "Văn hóa dân tộc Choang đậm đà với Tết 'Tam Nguyệt Tam' (mùng 3 tháng 3 âm lịch) hát đối dân ca (Sơn ca), ném còn thêu ('Tú cầu'), làm xôi ngũ sắc – rất gần gũi với văn hóa Tày–Nùng vùng Đông Bắc Việt Nam.",
      cuisine: "Ẩm thực Quảng Tây chua cay thanh mát giao thoa Việt–Quảng: Bún ốc Liễu Châu (Losa phấn), Bún bạn già Nam Ninh (Lão hữu phấn 老友粉), Vịt xào chanh muối Cao Phong và trái cây nhiệt đới.",
      architecture: "Thành lầu Hữu Nghị Quan lịch sử, phố cổ Tam Nhai Lưỡng Hạng Nam Ninh, trung tâm triển lãm quốc tế hoa dâm bụt và bức họa đá Hoa Sơn dọc sông Tả Giang (UNESCO).",
      dialect: "Tiếng Choang (ngữ hệ Thái–Kadai), tiếng Bình thoại, tiếng Quảng Đông (Bạch thoại Nam Ninh) và Quan thoại Tây Nam.",
      heritage: "Cảnh quan Nghệ thuật Đá Hoa Sơn Tả Giang (UNESCO), Trống đồng Đông Sơn – Lạc Việt (Bảo tàng Dân tộc Quảng Tây có bộ sưu tập trống đồng lớn nhất thế giới) và Hát Then / Thiên cầm.",
      economy: "Đầu mối thường trực của Hội chợ Trung Quốc – ASEAN (CAEXPO) tại Nam Ninh; Bằng Tường – Hữu Nghị Quan là cửa khẩu đường bộ và đường sắt lớn nhất phục vụ chuỗi cung ứng linh kiện điện tử và nông sản tươi (sầu riêng, thanh long) giữa Việt Nam và Trung Quốc.",
      landmarks: "Cửa khẩu Hữu Nghị Quan (Bằng Tường), Bảo tàng Dân tộc Quảng Tây, Núi Thanh Tú, Trung tâm Hội chợ Quốc tế Nam Ninh, Thác Đức Thiên – Bản Giốc."
    },
    {
      id: "harbin",
      nameVi: "Cáp Nhĩ Tân",
      nameEn: "Harbin",
      nameZh: "哈尔滨",
      region: "Đông Bắc",
      history: "Nguyên là vùng cư trú của tộc Nữ Chân (nhà Kim) bên sông Tùng Hoa; phát triển bùng nổ cuối thế kỷ XIX đầu thế kỷ XX khi xây dựng tuyến Đường sắt Trung Đông nối Siberia với Vladivostok, thu hút cộng đồng kiều dân Nga và châu Âu.",
      customs: "Tính cách người Đông Bắc hào sảng, nhiệt thành, yêu âm nhạc giao hưởng (được UNESCO công nhận 'Thành phố Âm nhạc') và biến mùa đông âm 25°C thành lễ hội văn hóa băng tuyết sôi động.",
      cuisine: "Ẩm thực Đông Bắc kết hợp phong vị Nga: Thịt heo chiên giòn sốt chua ngọt (Quách bao nhục 锅包肉), Hầm thập cẩm nồi gang (Thiết oa đốn), Xúc xích đỏ Cáp Nhĩ Tân (Hồng tràng), Bánh mì lớn Dalieba và Kem Madier ăn giữa trời tuyết.",
      architecture: "Được mệnh danh 'Phương Đông Moscow': Nhà thờ Saint Sophia mái hành tây Byzantine, đại lộ lát đá cuội Trung Dương (中央大街) và khu phố Baroque Trung Hoa Đạo Ngoại.",
      dialect: "Quan thoại Đông Bắc (phát âm cực kỳ chuẩn xác gần với bản tin truyền hình trung ương).",
      heritage: "Lễ hội Băng đăng Quốc tế Cáp Nhĩ Tân, di sản văn hóa săn bắt cá mùa đông vùng sông Tùng Hoa và truyền thống âm nhạc mùa hè Cáp Nhĩ Tân.",
      economy: "Thủ phủ tỉnh Hắc Long Giang – trung tâm chế biến lương thực an ninh quốc gia, chế tạo tua-bin điện, công nghiệp hàng không – vũ trụ (Đại học Công nghiệp Cáp Nhĩ Tân HIT) và thương mại kinh tế vùng cực Bắc.",
      landmarks: "Thế giới Băng Tuyết Cáp Nhĩ Tân, Nhà thờ Saint Sophia, Phố đi bộ Trung Dương, Đảo Thái Dương, Sông Tùng Hoa."
    }
  ],

  provincesDirectory: [
    // 4 Municipalities (Trực thuộc Trung ương)
    { id: "prov-beijing", nameVi: "Bắc Kinh", nameEn: "Beijing Municipality", nameZh: "北京市", abbr: "京 (Kinh)", type: "Thành phố trực thuộc TW", regionId: "north", regionLabel: "Hoa Bắc", capital: "Bắc Kinh", highlights: "Cố Cung, Vạn Lý Trường Thành, Thiên Đàn, Tứ Hợp Viện, Kinh kịch, 7 di sản UNESCO.", economy: "Trung tâm chính trị, học thuật (Thanh Hoa, Bắc Kinh), công nghệ AI Trung Quan Thôn và trụ sở các tập đoàn trung ương.", image: "assets/images/provinces/beijing-temple-of-heaven.jpg", landmark: "Điện Kỳ Niên – Thiên Đàn Bắc Kinh (天坛祈年殿)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Beijing", bestSeason: "Tháng 9 – Tháng 11 (Mùa thu lá vàng Hương Sơn & cố cung trời trong)", cuisine: "Vịt quay Bắc Kinh (北京烤鸭), Lẩu cừu nhúng nồi đồng (涮羊肉), Mì tương đen (炸酱面)", travelTip: "Cố Cung & Vạn Lý Trường Thành (Mộ Điền Cốc) cần đặt vé hộ chiếu trước 7 ngày; ưu tiên bay sân bay Đại Hưng hoặc Thủ Đô." },
    { id: "prov-tianjin", nameVi: "Thiên Tân", nameEn: "Tianjin Municipality", nameZh: "天津市", abbr: "津 (Tân)", type: "Thành phố trực thuộc TW", regionId: "north", regionLabel: "Hoa Bắc", capital: "Thiên Tân", highlights: "Khu phố kiến trúc Ngũ Đại Đạo, Tướng thanh (hài kịch đối đáp), bánh bao Cẩu Bất Lý, tranh tết Dương Liễu Thanh.", economy: "Cảng biển quốc tế cửa ngõ vùng Kinh–Tân–Ký, công nghiệp hàng không vũ trụ và hóa dầu.", image: "assets/images/provinces/tianjin-eye.jpg", landmark: "Vòng quay Mắt Thiên Tân bên sông Hải Hà (天津之眼摩天轮)", photoCredit: "Wikimedia Commons · Haihe River, Tianjin", bestSeason: "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 10 (Khí hậu dịu mát ven sông Hải Hà)", cuisine: "Bánh bao Cẩu Bất Lý (狗不理包子), Bánh chiên quai chèo (十八街麻花), Bánh rán Giản Bính Quả Tử", travelTip: "Tàu cao tốc Bắc Kinh Nam – Thiên Tân chỉ mất 30 phút; buổi tối đi thuyền ngắm cầu Hải Hà và Mắt Thiên Tân." },
    { id: "prov-shanghai", nameVi: "Thượng Hải", nameEn: "Shanghai Municipality", nameZh: "上海市", abbr: "沪 (Hộ)", type: "Thành phố trực thuộc TW", regionId: "east", regionLabel: "Hoa Đông", capital: "Thượng Hải", highlights: "Bến Thượng Hải (The Bund), kiến trúc Thạch Khố Môn, văn hóa Hải Phái, Dự Viên, Lục Gia Chủy.", economy: "Trung tâm tài chính – chứng khoán lớn nhất Trung Quốc, cảng container số 1 thế giới và đầu tàu kinh tế Trường Giang.", image: "assets/images/provinces/shanghai-bund-skyline.jpg", landmark: "Bến Thượng Hải & Lục Gia Chủy (上海外滩与陆家嘴)", photoCredit: "Wikimedia Commons · Shanghai Landmark", bestSeason: "Tháng 3 – Tháng 5 & Tháng 9 – Tháng 11 (Mùa xuân hoa mộc lan & mùa thu cua lông)", cuisine: "Tiểu long bao Nam Tường (小笼包), Thịt kho Đông Pha Thượng Hải (红烧肉), Cua lông Dương Trừng Hồ", travelTip: "Tàu đệm từ trường Maglev nối sân bay Phố Đông về Long Dương Lộ trong 8 phút; nhớ cài Alipay/WeChat Metro QR." },
    { id: "prov-chongqing", nameVi: "Trùng Khánh", nameEn: "Chongqing Municipality", nameZh: "重庆市", abbr: "渝 (Du)", type: "Thành phố trực thuộc TW", regionId: "southwest", regionLabel: "Tây Nam", capital: "Trùng Khánh", highlights: "Đô thị núi 3D bên hợp lưu Trường Giang – Gia Lăng, Tượng đá Đại Túc (UNESCO), Hồng Nhai Động, văn hóa lẩu cay Ba Du.", economy: "Cứ điểm sản xuất laptop, ô tô điện thông minh lớn nhất miền Tây và điểm khởi đầu tuyến đường sắt Trung – Âu (Du Tân Âu).", image: "assets/images/provinces/chongqing-hongyadong.jpg", landmark: "Hồng Nhai Động & Cầu Thiên Tư Môn sông Gia Lăng (洪崖洞与千厮门嘉陵江大桥)", photoCredit: "Wikimedia Commons · Chongqing Municipality", bestSeason: "Tháng 3 – Tháng 5 & Tháng 10 – Tháng 11 (Tránh cái nóng 'hỏa lò' tháng 7–8)", cuisine: "Lẩu Tứ Xuyên – Trùng Khánh cay nồng cửu cung cách (重庆九宫格火锅), Mì Trùng Khánh (重庆小面), Gà cay Ca Lạc Sơn", travelTip: "Đừng quá tin Google Maps ở đô thị 3D nhiều tầng; dùng Amap (Cao Đức) & đi tuyến Monorail số 2 xuyên tòa nhà Lý Tử Bá." },

    // 23 Provinces (Tỉnh)
    { id: "prov-hebei", nameVi: "Hà Bắc", nameEn: "Hebei Province", nameZh: "河北省", abbr: "冀 (Ký)", type: "Tỉnh", regionId: "north", regionLabel: "Hoa Bắc", capital: "Thạch Gia Trang", highlights: "Sơn Hải Quan (đầu cực Đông Vạn Lý Trường Thành), Tị Thử Sơn Trang Thừa Đức, Thanh Đông Lăng, vùng văn hóa Yên – Triệu.", economy: "Vành đai công nghiệp bao quanh Bắc Kinh – Thiên Tân, khu đô thị mới Hùng An (Xiong'an) và sản xuất thép – vật liệu.", image: "assets/images/provinces/hebei-chengde-resort.jpg", landmark: "Thừa Đức Tị Thử Sơn Trang (Phổ Đà Tông Thừa Chi Miếu) (承德避暑山庄普陀宗乘之庙)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Hebei", bestSeason: "Tháng 6 – Tháng 10 (Lý tưởng để tham quan Tị Thử Sơn Trang Thừa Đức & thảo nguyên Bá Thượng)", cuisine: "Bánh mì kẹp thịt lừa Bảo Định (驴肉火烧), Hải sản Tần Hoàng Đảo, Thịt cừu nướng Trương Gia Khẩu", travelTip: "Có thể đi trong ngày từ Bắc Kinh đến Thừa Đức hoặc Sơn Hải Quan bằng tàu cao tốc trong khoảng 1–2 giờ." },
    { id: "prov-shanxi", nameVi: "Sơn Tây", nameEn: "Shanxi Province", nameZh: "山西省", abbr: "晋 (Tấn)", type: "Tỉnh", regionId: "north", regionLabel: "Hoa Bắc", capital: "Thái Nguyên", highlights: "Thành cổ Bình Dao (cái nôi ngân hàng Phiếu hào Tấn thương), Hang đá Vân Cương, núi Ngũ Đài Sơn, bảo tàng kiến trúc gỗ cổ Đường – Liêu.", economy: "Trung tâm năng lượng than – điện, bảo tồn di sản kiến trúc cổ trên mặt đất lớn nhất Trung Quốc và công nghiệp vật liệu mới.", image: "assets/images/provinces/shanxi-hanging-temple.jpg", landmark: "Huyền Không Tự trên vách đá Hằng Sơn (恒山金龙峡悬空寺)", photoCredit: "Wikimedia Commons · Datong, Shanxi", bestSeason: "Tháng 5 – Tháng 10 (Thời tiết khô ráo tham quan thành cổ Bình Dao & Hang đá Vân Cương)", cuisine: "Mì cắt dao Sơn Tây (刀削面), Giấm lâu năm Sơn Tây (山西老陈醋), Thịt bò Bình Dao (平遥牛肉)", travelTip: "Tuyến chuẩn từ Bắc Kinh – Đại Đồng – Bình Dao – Tây An bằng tàu cao tốc giúp khám phá 'Bảo tàng kiến trúc gỗ cổ trên mặt đất'." },
    { id: "prov-liaoning", nameVi: "Liêu Ninh", nameEn: "Liaoning Province", nameZh: "辽宁省", abbr: "辽 (Liêu)", type: "Tỉnh", regionId: "northeast", regionLabel: "Đông Bắc", capital: "Thẩm Dương", highlights: "Cố Cung Thẩm Dương (kinh đô ban đầu nhà Thanh), văn hóa Hồng Sơn cổ đại (ngọc rồng C-shape), cảng Đại Liên.", economy: "Tỉnh duy nhất ở Đông Bắc có bờ biển; trung tâm đóng tàu, máy công cụ CNC, luyện kim và thương mại hàng hải Đông Bắc Á.", image: "assets/images/provinces/liaoning-mukden-palace.jpg", landmark: "Thẩm Dương Cố Cung (Đại Chính Điện) (沈阳故宫大政殿)", photoCredit: "Wikimedia Commons · Shenyang, Liaoning", bestSeason: "Tháng 5 – Tháng 6 & Tháng 9 – Tháng 10 (Thu hoạch táo, lá phong Đan Đông & biển Đại Liên mát mẻ)", cuisine: "Sủi cảo Lão Biên Thẩm Dương (老边饺子), Hải sản Đại Liên, Thịt chua ngọt Bạch Nhục Huyết Tràng", travelTip: "Tháng 10 bãi biển đỏ Bàn Cẩm (Red Beach) và đường lá phong Bản Khê rực đỏ ngoạn mục." },
    { id: "prov-jilin", nameVi: "Cát Lâm", nameEn: "Jilin Province", nameZh: "吉林省", abbr: "吉 (Cát)", type: "Tỉnh", regionId: "northeast", regionLabel: "Đông Bắc", capital: "Trường Xuân", highlights: "Núi Trường Bạch (hồ Thiên Trì), sương muối Cát Lâm (Vụ tùng), di chỉ vương quốc Cao Câu Ly, văn hóa dân tộc Triều Tiên.", economy: "Cái nôi ngành công nghiệp ô tô Trung Quốc (Tập đoàn FAW), sản xuất tàu cao tốc CRRC và vùng nông nghiệp ngô – nhân sâm.", image: "assets/images/provinces/jilin-changbai-tianchi.jpg", landmark: "Thiên Trì núi lửa Trường Bạch Sơn (长白山火山天池)", photoCredit: "Wikimedia Commons · Changbai Mountain, Jilin", bestSeason: "Tháng 7 – Tháng 8 (Lên Thiên Trì Trường Bạch Sơn ít mây mù) & Tháng 1 – Tháng 2 (Ngắm sương muối Vụ Tùng)", cuisine: "Gà hầm sâm Trường Bạch, Thịt nướng kiểu Diên Biên (延边烤肉), Mì lạnh Triều Tiên Diên Cát", travelTip: "Tháng 11–3 nên mang đồ giữ nhiệt chống âm 25°C và dán miếng giữ ấm sau lưng điện thoại chống sập pin." },
    { id: "prov-heilongjiang", nameVi: "Hắc Long Giang", nameEn: "Heilongjiang Province", nameZh: "黑龙江省", abbr: "黑 (Hắc)", type: "Tỉnh", regionId: "northeast", regionLabel: "Đông Bắc", capital: "Cáp Nhĩ Tân", highlights: "Lễ hội Băng Tuyết Cáp Nhĩ Tân, kiến trúc Nga trên phố Trung Dương, hồ Kính Bạc, vùng đất đen Bắc Đại Hoang.", economy: "Vựa lúa gạo hạt tròn (Ngũ Thường) đảm bảo an ninh lương thực quốc gia, chế tạo tua-bin điện và thương mại biên giới Trung – Nga.", image: "assets/images/provinces/heilongjiang-saint-sophia.jpg", landmark: "Nhà thờ Thánh Sophia Cáp Nhĩ Tân (哈尔滨圣索菲亚教堂)", photoCredit: "Wikimedia Commons · Harbin, Heilongjiang", bestSeason: "Tháng 12 – Tháng 2 (Lễ hội Băng Đăng Cáp Nhĩ Tân) & Tháng 6 – Tháng 8 (Tránh nóng mùa hè 22°C)", cuisine: "Thịt heo chiên giòn sốt chua ngọt Quách Bao Nhục (锅包肉), Xúc xích đỏ Cáp Nhĩ Tân, Lẩu nồi gang Thiết Oa Đốn", travelTip: "Tuyết Hương & Thế giới Băng Tuyết thường mở đón khách từ cuối tháng 12 đến cuối tháng 2; mang giày đinh chống trượt." },
    { id: "prov-jiangsu", nameVi: "Giang Tô", nameEn: "Jiangsu Province", nameZh: "江苏省", abbr: "苏 (Tô)", type: "Tỉnh", regionId: "east", regionLabel: "Hoa Đông", capital: "Nam Kinh", highlights: "Cố đô Nam Kinh (Lục triều – Minh sơ), Lâm viên Tô Châu (UNESCO), Côn khúc, Thêu Tô Châu, gốm Tử sa Nghi Hưng.", economy: "Tỉnh có GDP bình quân đầu người hàng đầu, nổi tiếng với 'Mô hình Tô Nam' (cụm công nghiệp Côn Sơn, Tô Châu, Vô Tích) về bán dẫn và điện tử.", image: "assets/images/provinces/jiangsu-suzhou-garden.jpg", landmark: "Chuyết Chính Viên – Lâm viên cổ điển Tô Châu (苏州古典园林拙政园)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Suzhou", bestSeason: "Tháng 3 – Tháng 5 (Mùa xuân Giang Nam hoa nở bên lâm viên Tô Châu) & Tháng 10 – Tháng 11 (Rừng phong Thiên Bình Sơn)", cuisine: "Vịt muối Nam Kinh (南京盐水鸭), Cá quế sóc Tô Châu (松鼠桂鱼), Mì Dương Xuân & Cơm chiên Dương Châu", travelTip: "Đặt trước vé Bảo tàng Nam Kinh và Bảo tàng Tô Châu (do Bối Duật Minh thiết kế) ít nhất 3–7 ngày qua WeChat." },
    { id: "prov-zhejiang", nameVi: "Chiết Giang", nameEn: "Zhejiang Province", nameZh: "浙江省", abbr: "浙 (Chiết)", type: "Tỉnh", regionId: "east", regionLabel: "Hoa Đông", capital: "Hàng Châu", highlights: "Tây Hồ Hàng Châu, di chỉ Lương Chử 5.000 năm, cố hương Lỗ Tấn (Thiệu Hưng), núi Phổ Đà, thư viện cổ Thiên Nhất Các (Ninh Ba).", economy: "Cái nôi kinh tế tư nhân Chiết thương, thương mại điện tử Alibaba (Hàng Châu), chợ bán buôn toàn cầu Nghĩa Ô và cảng Ninh Ba – Chu Sơn.", image: "assets/images/provinces/zhejiang-hangzhou-westlake.jpg", landmark: "Tây Hồ Hàng Châu (Tam Đàm Ấn Nguyệt) (杭州西湖三潭印月)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Hangzhou", bestSeason: "Tháng 3 – Tháng 5 (Trà Long Tỉnh vụ xuân) & Tháng 9 – Tháng 11 (Hoa quế nở rộ quanh Tây Hồ)", cuisine: "Cá giấm Tây Hồ (西湖醋鱼), Gà ăn mày (叫化鸡), Tôm nõn xào trà Long Tỉnh (龙井虾仁), Thịt kho Đông Pha", travelTip: "Kết hợp tuyến Hàng Châu – Ô Trấn / Tây Đường – Thiệu Hưng bằng đường sắt cao tốc cực kỳ thuận tiện chỉ trong 30 phút/chặng." },
    { id: "prov-anhui", nameVi: "An Huy", nameEn: "Anhui Province", nameZh: "安徽省", abbr: "皖 (Hoản)", type: "Tỉnh", regionId: "east", regionLabel: "Hoa Đông", capital: "Hợp Phì", highlights: "Núi Hoàng Sơn, làng cổ Hoành Thôn – Tây Đệ (kiến trúc Huy phái tường trắng ngói đen), truyền thống Huy thương và Văn phòng tứ bảo (Giấy Tuyên, Mực Huy).", economy: "Hợp Phì vươn lên thành trung tâm khoa học lượng tử, màn hình bán dẫn, sản xuất xe điện (BYD, NIO, Chery) và AI.", image: "assets/images/provinces/anhui-huangshan-cloudsea.jpg", landmark: "Hoàng Sơn Vân Hải & Nghênh Khách Tùng (黄山云海与迎客松)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Anhui", bestSeason: "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 11 (Mùa săn biển mây Hoàng Sơn & mùa thu lá đỏ Tháp Xuyên)", cuisine: "Cá quyết thối Huy Châu (臭鳜鱼), Đậu phụ lông Hoành Thôn (毛豆腐), Vịt nướng Lư Châu", travelTip: "Nên ngủ 1 đêm trên đỉnh Hoàng Sơn (gần Quang Minh Đỉnh) để kịp ngắm bình minh biển mây và đi bộ xuống Hoành Thôn." },
    { id: "prov-fujian", nameVi: "Phúc Kiến", nameEn: "Fujian Province", nameZh: "福建省", abbr: "闽 (Mân)", type: "Tỉnh", regionId: "south", regionLabel: "Hoa Nam / Đông Nam", capital: "Phúc Châu", highlights: "Thổ Lâu Khách Gia (UNESCO), núi Vũ Di Sơn (trà Ô Long Đại Hồng Bào), cảng cổ Tuyền Châu, đảo Cổ Lãng Tự (Hạ Môn), tín ngưỡng Thiên Hậu Mazu.", economy: "Quê hương Mân thương và Hoa kiều Đông Nam Á; thủ phủ pin năng lượng mới (CATL Ninh Đức), giày dép thể thao (Anta) và thương mại qua eo biển.", image: "assets/images/provinces/fujian-tulou.jpg", landmark: "Thổ Lâu Phúc Kiến (Thừa Khải Lâu) (福建客家土楼承启楼)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Fujian", bestSeason: "Tháng 4 – Tháng 6 & Tháng 10 – Tháng 12 (Khí hậu ấm áp ven biển Mân Nam & mùa hái trà Vũ Di Sơn)", cuisine: "Phật nhảy tường Phúc Châu (佛跳墙), Trứng hàu Mân Nam (海蛎煎), Mì sợi Hồ Tuyền Châu & Trà Đại Hồng Bào", travelTip: "Phà đi đảo Cổ Lãng Tự (Hạ Môn) cần đặt vé trước qua Alipay mini-program của Cảng Hạ Môn; giữ vé quay về." },
    { id: "prov-jiangxi", nameVi: "Giang Tây", nameEn: "Jiangxi Province", nameZh: "江西省", abbr: "赣 (Cám)", type: "Tỉnh", regionId: "east", regionLabel: "Hoa Đông / Hoa Trung", capital: "Nam Xương", highlights: "Kinh đô gốm sứ Cảnh Đức Trấn hơn 1.000 năm, Đằng Vương Các, núi Lư Sơn, thư viện Bạch Lộc Động (Chu Hy giảng học).", economy: "Trữ lượng đồng và đất hiếm hàng đầu (Cám Châu), chuỗi cung ứng vật liệu pin lithium, hàng không và chế tác gốm sứ cao cấp.", image: "assets/images/provinces/jiangxi-wuyuan-village.jpg", landmark: "Làng cổ Vụ Nguyên mùa hoa cải Giang Lĩnh (婺源江岭梯田与徽派古民居)", photoCredit: "Wikimedia Commons · Wuyuan, Jiangxi", bestSeason: "Tháng 3 – Tháng 4 (Hoa cải vàng Vụ Nguyên) & Tháng 10 – Tháng 11 (Phơi nông sản Thu Sái Hoàng Lĩnh)", cuisine: "Mì xào Nam Xương (南昌拌粉), Canh hầm niêu đất Ngõa Quán Thang, Gà hầm hạt sen Lư Sơn", travelTip: "Làng gốm Cảnh Đức Trấn có chợ gốm sáng cuối tuần tại Xưởng Điêu khắc & Làng gốm Tam Bảo rất đáng trải nghiệm." },
    { id: "prov-shandong", nameVi: "Sơn Đông", nameEn: "Shandong Province", nameZh: "山东省", abbr: "鲁 (Lỗ)", type: "Tỉnh", regionId: "north", regionLabel: "Hoa Đông / Hoa Bắc", capital: "Tế Nam", highlights: "Quê hương Khổng Tử – Mạnh Tử (Tam Khổng tại Khúc Phụ), núi Thái Sơn (Đông Nhạc), văn hóa Tề – Lỗ, suối nước Tế Nam, cảng Thanh Đảo.", economy: "Tỉnh công – nông nghiệp biển lớn thứ 3 Trung Quốc (Haier, Hisense, Bia Thanh Đảo, cảng Thanh Đảo và rau quả xuất khẩu Thọ Quang).", image: "assets/images/provinces/shandong-taishan.jpg", landmark: "Đỉnh Ngọc Hoàng – Thái Sơn Đông Nhạc (东岳泰山玉皇顶)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Shandong", bestSeason: "Tháng 4 – Tháng 5 & Tháng 9 – Tháng 10 (Nắng dịu leo Thái Sơn & lễ hội bia/biển Thanh Đảo)", cuisine: "Hải sâm xào hành Chương Khâu (葱烧海参), Cá chép chua ngọt Lỗ thái, Mực nướng & Bia tươi Thanh Đảo nguyên bản", travelTip: "Nếu leo Thái Sơn ngắm bình minh, có thể đi cáp treo Trấn Trung Thiên Môn lên Nam Thiên Môn hoặc leo đêm bằng đèn pin." },
    { id: "prov-henan", nameVi: "Hà Nam", nameEn: "Henan Province", nameZh: "河南省", abbr: "豫 (Dự)", type: "Tỉnh", regionId: "central", regionLabel: "Hoa Trung (Trung Nguyên)", capital: "Trịnh Châu", highlights: "Cái nôi văn minh Trung Nguyên: Ân Khư An Dương (Giáp cốt văn), cố đô Lạc Dương & Khai Phong, Hang đá Long Môn, Chùa Thiếu Lâm (Tung Sơn).", economy: "Đầu mối giao thông đường sắt chữ 'Mễ' toàn quốc, trung tâm lắp ráp điện thoại thông minh lớn nhất thế giới (Trịnh Châu) và chế biến thực phẩm.", image: "assets/images/provinces/henan-longmen-grottoes.jpg", landmark: "Tượng Đại Phật Lư Xá Na – Long Môn Thạch Khúc Lạc Dương (洛阳龙门石窟奉先寺卢舍那大佛)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Luoyang", bestSeason: "Tháng 4 (Lễ hội Hoa Mẫu Đơn Lạc Dương rực rỡ nhất năm) & Tháng 9 – Tháng 10", cuisine: "Mì hầm Hồ Nam / Hà Nam (河南烩面), Tiệc nước Lạc Dương (洛阳水席), Cháo cay Hồ Lạt Thang buổi sáng", travelTip: "Tuyến Tam Đại Cố Đô Trung Nguyên (Lạc Dương – Đăng Phong Thiếu Lâm Tự – Khai Phong) cách Trịnh Châu chỉ 40 phút tàu cao tốc." },
    { id: "prov-hubei", nameVi: "Hồ Bắc", nameEn: "Hubei Province", nameZh: "湖北省", abbr: "鄂 (Ngạc)", type: "Tỉnh", regionId: "central", regionLabel: "Hoa Trung", capital: "Vũ Hán", highlights: "Hoàng Hạc Lâu, văn hóa Sở (Biên chung Tăng Hầu Ất), núi Võ Đang (Đạo giáo Trương Tam Phong), đập Tam Hiệp trên sông Trường Giang.", economy: "Trái tim giao thông 'Cửu tỉnh thông cù', thung lũng quang học (Optics Valley Vũ Hán), thủy điện Tam Hiệp và công nghiệp ô tô – sinh học.", image: "assets/images/provinces/hubei-yellow-crane-tower.jpg", landmark: "Hoàng Hạc Lâu Vũ Hán bên sông Trường Giang (武汉蛇山黄鹤楼)", photoCredit: "Wikimedia Commons · Wuhan, Hubei", bestSeason: "Tháng 3 (Ngắm hoa anh đào Đại học Vũ Hán) & Tháng 10 – Tháng 11 (Hồ Đông Hồ mùa thu)", cuisine: "Mì khô nóng Nhiệt Can Miến (热干面), Đậu bì Tam Tiên (三鲜豆皮), Canh củ sen hầm sườn Hồng Hồ, Cá Võ Xương hấp", travelTip: "Bảo tàng Tỉnh Hồ Bắc (nơi trưng bày Biên chung Tăng Hầu Ất & Kiếm Việt Vương Câu Tiễn) miễn phí nhưng phải đặt lịch trước 5 ngày." },
    { id: "prov-hunan", nameVi: "Hồ Nam", nameEn: "Hunan Province", nameZh: "湖南省", abbr: "湘 (Tương)", type: "Tỉnh", regionId: "central", regionLabel: "Hoa Trung", capital: "Trường Sa", highlights: "Thư viện Nhạc Lộc (tứ đại thư viện cổ), Trương Gia Giới – Vũ Lăng Nguyên, Phượng Hoàng Cổ Trấn, lầu Nhạc Dương, ẩm thực Tương.", economy: "Thủ phủ chế tạo máy công trình hạng nặng (Sany, Zoomlion), công nghiệp truyền hình – giải trí – tiêu dùng trẻ Trường Sa.", image: "assets/images/provinces/hunan-zhangjiajie.jpg", landmark: "Trụ đá sa thạch Thiên Tử Sơn – Trương Gia Giới Vũ Lăng Nguyên (张家界武陵源天子山石柱)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Hunan", bestSeason: "Tháng 4 – Tháng 6 & Tháng 9 – Tháng 11 (Trương Gia Giới trong xanh ít sương mù che cột đá)", cuisine: "Đầu cá hấp ớt xắt (剁椒鱼头), Đậu phụ thối đen Trường Sa (长沙臭豆腐), Tôm hùm đất cay Hỏa Cung Điện", travelTip: "Mua vé Công viên Quốc gia Trương Gia Giới có giá trị 4 ngày liên tiếp; tránh cuối tuần dịp Quốc khánh 1/10 vì rất đông." },
    { id: "prov-guangdong", nameVi: "Quảng Đông", nameEn: "Guangdong Province", nameZh: "广东省", abbr: "粤 (Việt)", type: "Tỉnh", regionId: "south", regionLabel: "Hoa Nam (Lĩnh Nam)", capital: "Quảng Châu", highlights: "Ba nhánh văn hóa Quảng Phủ – Triều Sán – Khách Gia, Điêu lâu Khai Bình, ẩm thực Quảng Đông (Dimsum), múa Lân Sư Rồng và di tích Cách mạng.", economy: "Tỉnh có quy mô GDP và kim ngạch ngoại thương số 1 Trung Quốc suốt 35 năm; trụ cột Vùng Vịnh Lớn (Quảng Châu, Thâm Quyến, Đông Quản, Phật Sơn).", image: "assets/images/provinces/guangdong-canton-tower.jpg", landmark: "Tháp Quảng Châu bên dòng Châu Giang (广州塔与珠江新城天际线)", photoCredit: "Wikimedia Commons · Guangzhou, Guangdong", bestSeason: "Tháng 10 – Tháng 3 năm sau (Khô ráo, mát mẻ 18–25°C, lý tưởng ăn dimsum & đi Hội chợ Canton Fair)", cuisine: "Dimsum Trà Sáng Quảng Châu (早茶点心), Ngỗng quay Lĩnh Nam (烧鹅), Bún cuốn Tràng Phấn, Bò viên Sán Đầu", travelTip: "Từ Quảng Châu/Thâm Quyến có tàu cao tốc XRL nối thẳng trung tâm Tây Cửu Long (Hồng Kông) trong 14–48 phút." },
    { id: "prov-hainan", nameVi: "Hải Nam", nameEn: "Hainan Province", nameZh: "海南省", abbr: "琼 (Quỳnh)", type: "Tỉnh", regionId: "south", regionLabel: "Hoa Nam", capital: "Hải Khẩu", highlights: "Đảo nhiệt đới cực Nam, văn hóa dệt thổ cẩm người Lê (Li), nơi Tô Đông Pha từng lưu đày mở trường dạy học, vịnh Tam Á.", economy: "Cảng Thương mại Tự do Hải Nam (Hainan Free Trade Port), du lịch miễn thuế, trung tâm phóng tên lửa vũ trụ Văn Xương và nhân giống nông nghiệp.", image: "assets/images/provinces/hainan-sanya-guanyin.jpg", landmark: "Tượng Nam Sơn Hải Thượng Quan Âm Tam Á (三亚南山海上观音圣像)", photoCredit: "Wikimedia Commons · Sanya, Hainan", bestSeason: "Tháng 11 – Tháng 4 năm sau (Mùa nắng ấm 24–28°C, tránh mưa bão nhiệt đới tháng 8–9)", cuisine: "Cơm gà Văn Xương (文昌鸡), Cơm dừa hầm gà (椰子鸡), Mì Hải Nam & Hải sản tươi sống Tam Á", travelTip: "Hải Nam áp dụng chính sách miễn visa du lịch 30 ngày cho công dân 59 quốc gia; nhớ mang hộ chiếu khi mua hàng miễn thuế CDF." },
    { id: "prov-sichuan", nameVi: "Tứ Xuyên", nameEn: "Sichuan Province", nameZh: "四川省", abbr: "川 / 蜀 (Xuyên / Thục)", type: "Tỉnh", regionId: "southwest", regionLabel: "Tây Nam", capital: "Thành Đô", highlights: "Di chỉ Tam Tinh Đôi – Kim Sa, công trình thủy lợi Đô Giang Yển, Tượng Phật Lạc Sơn, Cửu Trại Câu, khu bảo tồn Gấu trúc lớn và văn hóa Tam Quốc.", economy: "Trung tâm kinh tế – công nghệ – hàng không lớn nhất miền Tây (Thành Đô), thủy điện sạch và chuỗi cung ứng điện tử – phần mềm.", image: "assets/images/provinces/sichuan-jiuzhaigou.jpg", landmark: "Ngũ Hoa Hải – Thung lũng Cửu Trại Câu (九寨沟五花海奇观)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Sichuan", bestSeason: "Tháng 9 – Tháng 11 (Rừng lá phong Cửu Trại Câu & Hoàng Long rực sắc thu) & Tháng 3 – Tháng 5", cuisine: "Đậu phụ Ma Bà (麻婆豆腐), Vịt hun khói trà Thành Đô, Gà xé sốt dầu ớt Hồng Du & Xiên que Lạnh (钵钵鸡)", travelTip: "Từ Thành Đô nay đã có tàu cao tốc xuyên núi lên thẳng ga Trấn Giang Quan / Hoàng Long Cửu Trại chỉ dưới 2 giờ." },
    { id: "prov-guizhou", nameVi: "Quý Châu", nameEn: "Guizhou Province", nameZh: "贵州省", abbr: "贵 / 黔 (Quý / Kiềm)", type: "Tỉnh", regionId: "southwest", regionLabel: "Tây Nam", capital: "Quý Dương", highlights: "Thác Hoàng Quả Thụ, Thiên hộ Miêu trại Tây Giang, Long Trường (nơi Vương Dương Minh ngộ đạo Tâm học), rượu Mao Đài.", economy: "Trung tâm Dữ liệu Lớn quốc gia (Big Data Hub cho Apple, Huawei, Tencent nhờ khí hậu mát và thủy điện), cầu cạn vượt hẻm núi cao nhất thế giới.", image: "assets/images/provinces/guizhou-huangguoshu.jpg", landmark: "Đại thác nước Hoàng Quả Thụ An Thuận (安顺黄果树大瀑布)", photoCredit: "Wikimedia Commons · Anshun, Guizhou", bestSeason: "Tháng 5 – Tháng 10 (Thác Hoàng Quả Thụ nhiều nước hùng vĩ & mùa hè cao nguyên chỉ 22°C tránh nóng)", cuisine: "Lẩu cá nấu canh chua đỏ người Miêu (凯里酸汤鱼), Mì bò Hoa Khê, Vịt khô chiên giòn Quý Dương", travelTip: "Các huyện dân tộc ở Quý Châu nay kết nối 100% đường sắt cao tốc xuyên cầu cạn và hầm núi rất thuận tiện." },
    { id: "prov-yunnan", nameVi: "Vân Nam", nameEn: "Yunnan Province", nameZh: "云南省", abbr: "云 / 滇 (Vân / Điền)", type: "Tỉnh", regionId: "southwest", regionLabel: "Tây Nam", capital: "Côn Minh", highlights: "Thành cổ Lệ Giang & Đại Lý, Rừng đá Thạch Lâm, ruộng bậc thang Nguyên Dương (Hà Nhì), Trà Mã Cổ Đạo và 25 dân tộc thiểu số.", economy: "Giáp biên giới Lào Cai – Hà Giang – Lai Châu – Điện Biên của Việt Nam; cửa ngõ đường sắt Trung – Lào và xuất khẩu hoa tươi, trà Phổ Nhĩ.", image: "assets/images/provinces/yunnan-lijiang-old-town.jpg", landmark: "Cổ trấn Lệ Giang dưới chân Ngọc Long Tuyết Sơn (丽江古城大研镇与玉龙雪山)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Yunnan", bestSeason: "Quanh năm ('Xuân Thành'); đẹp nhất Tháng 11 – Tháng 3 (Ruộng bậc thang Nguyên Dương có nước & Hải âu Điền Trì)", cuisine: "Bún qua cầu Côn Minh (过桥米线), Lẩu nấm hoang dã (菌子火锅), Gà tần nồi đất Khí Oa Kê, Bánh hoa hồng tươi", travelTip: "Rất tiện đi đường bộ hoặc đường sắt từ Hà Nội – Lào Cai – Hà Khẩu lên Côn Minh, rồi nối tàu cao tốc đến Đại Lý – Lệ Giang – Shangri-La." },
    { id: "prov-shaanxi", nameVi: "Thiểm Tây", nameEn: "Shaanxi Province", nameZh: "陕西省", abbr: "陕 / 秦 (Thiểm / Tần)", type: "Tỉnh", regionId: "northwest", regionLabel: "Tây Bắc", capital: "Tây An", highlights: "Cố đô Trường An của 13 triều đại, Đội quân đất nung Tần Thủy Hoàng, Tháp Đại Nhạn, lăng Hoàng Đế, cao nguyên Hoàng Thổ và dân ca Tần Khang.", economy: "Trung tâm nghiên cứu hàng không – vũ trụ, đại học kỹ thuật (Giao thông Tây An), năng lượng mặt trời và du lịch văn hóa lịch sử.", image: "assets/images/provinces/shaanxi-terracotta-army.jpg", landmark: "Đội quân Đất nung Tần Thủy Hoàng Lăng (西安秦始皇帝陵兵马俑一号坑)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Xi'an", bestSeason: "Tháng 3 – Tháng 5 & Tháng 9 – Tháng 11 (Thời tiết ôn hòa đạp xe trên tường thành cổ Tây An)", cuisine: "Bánh mì kẹp thịt Nhục Giáp Mô (肉夹馍), Mì xé tay Biangbiang (油泼面), Bánh mì xé ngâm canh cừu (羊肉泡馍)", travelTip: "Nên thuê hướng dẫn viên hoặc audio guide tại Binh Mã Dũng (Tần Thủy Hoàng) & Bảo tàng Lịch sử Thiểm Tây để hiểu thấu từng tầng hiện vật." },
    { id: "prov-gansu", nameVi: "Cam Túc", nameEn: "Gansu Province", nameZh: "甘肃省", abbr: "甘 / 陇 (Cam / Lũng)", type: "Tỉnh", regionId: "northwest", regionLabel: "Tây Bắc", capital: "Lan Châu", highlights: "Hành lang Hà Tây trên Con đường Tơ lụa, Hang đá Mạc Cao Đôn Hoàng, Gia Dục Quan, núi cầu vồng Trương Dịch và mì kéo Lan Châu.", economy: "Hành lang năng lượng gió – điện mặt trời quy mô lớn, luyện kim màu, bảo tồn khảo cổ học Đôn Hoàng và giao thông Á – Âu.", image: "assets/images/provinces/gansu-dunhuang-mogao.jpg", landmark: "Đôn Hoàng Mạc Cao Quật (Cửu Tằng Lâu) (敦煌莫高窟九层楼北大佛)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Gansu", bestSeason: "Tháng 5 – Tháng 10 (Nắng trong xanh cho Hành lang Hà Tây: Trương Dịch – Gia Dục Quan – Đôn Hoàng)", cuisine: "Mì bò kéo tay Lan Châu (兰州牛肉面 'Nhất thanh nhị bạch tam hồng tứ lục'), Thịt cừu hấp thủ trảo, Trà Hạnh Bì", travelTip: "Vé hang đá Mạc Cao Đôn Hoàng (hạng A cho phép vào 8 hang tiêu biểu + rạp vòm) thường hết rất sớm vào mùa hè — phải đặt trước 1 tháng." },
    { id: "prov-qinghai", nameVi: "Thanh Hải", nameEn: "Qinghai Province", nameZh: "青海省", abbr: "青 (Thanh)", type: "Tỉnh", regionId: "northwest", regionLabel: "Tây Bắc / Thanh Tạng", capital: "Tây Ninh", highlights: "Khu bảo tồn Tam Giang Nguyên (nguồn phát nguyên của Hoàng Hà, Trường Giang và sông Mê Kông / Lan Thương), hồ Thanh Hải, chùa Tháp Nhĩ (Kumbum).", economy: "Trữ lượng muối hồ lithium lớn nhất Trung Quốc (hồ Chaerhan phục vụ chuỗi pin xe điện) và các cánh đồng điện mặt trời – thủy điện cao nguyên.", image: "assets/images/provinces/qinghai-lake.jpg", landmark: "Hồ nước mặn Thanh Hải bên đồng hoa cải (高原圣湖青海湖油菜花海)", photoCredit: "Wikimedia Commons · Qinghai Province", bestSeason: "Tháng 6 – Tháng 8 (Hoa cải dầu nở vàng rực quanh Hồ Thanh Hải ở độ cao 3.200m)", cuisine: "Sữa chua Yak truyền thống Tây Ninh (老酸奶), Thịt cừu nướng/luộc cao nguyên, Mì lăng cao lương", travelTip: "Chú ý độ cao 3.200–3.800m; đi chuyển chậm ngày đầu tại Tây Ninh để thích nghi khí áp trước khi đến Hồ Muối Trà Ca." },
    { id: "prov-taiwan", nameVi: "Đài Loan", nameEn: "Taiwan Province", nameZh: "台湾省", abbr: "台 (Đài)", type: "Tỉnh", regionId: "south", regionLabel: "Đông Nam / Hải Đảo", capital: "Đài Bắc", highlights: "Bảo tàng Cố Cung Đài Bắc, hồ Nhật Nguyệt, núi A Lý Sơn, phố cổ Cửu Phần, giao thoa văn hóa Mân Nam – Khách Gia – bản địa.", economy: "Trung tâm công nghiệp chế tạo bán dẫn đúc chip (foundry), linh kiện điện tử chính xác và thương mại công nghệ cao.", image: "assets/images/provinces/taiwan-sun-moon-lake.jpg", landmark: "Hồ Nhật Nguyệt & Tháp Từ Ân (日月潭拉鲁岛与慈恩塔)", photoCredit: "Wikimedia Commons · Nantou, Taiwan", bestSeason: "Tháng 10 – Tháng 12 & Tháng 3 – Tháng 5 (Mùa thu lá phong A Lý Sơn & mùa xuân hoa anh đào)", cuisine: "Mì bò hầm Đài Bắc (牛肉面), Cơm thịt kho Lỗ Nhục Phạn (卤肉饭), Trà sữa trân châu nguyên bản, Bánh dứa Đài Loan", travelTip: "Dùng thẻ EasyCard hoặc iPASS đi thông suốt MRT Đài Bắc/Cao Hùng, xe buýt và mua sắm tại các cửa hàng tiện lợi 7-Eleven." },

    // 5 Autonomous Regions (Khu tự trị)
    { id: "prov-inner-mongolia", nameVi: "Nội Mông Cổ", nameEn: "Inner Mongolia Autonomous Region", nameZh: "内蒙古自治区", abbr: "蒙 (Mông)", type: "Khu tự trị", regionId: "north", regionLabel: "Hoa Bắc / Thảo nguyên", capital: "Hohhot (Hô Hòa Hạo Đặc)", highlights: "Thảo nguyên Hulunbuir, lăng Thành Cát Tư Hãn, lễ hội Naadam (đấu vật, đua ngựa, bắn cung), đàn Mã đầu cầm (Morin Khuur).", economy: "Thủ phủ đất hiếm thế giới (Bao Đầu), năng lượng gió – điện mặt trời, than đá và công nghiệp sữa hàng đầu (Yili, Mengniu).", image: "assets/images/provinces/inner-mongolia-hulunbuir.jpg", landmark: "Thảo nguyên Hô Luân Bối Nhĩ bên sông Mạc Nhĩ Cách Lặc (呼伦贝尔大草原与莫尔格勒河)", photoCredit: "Wikimedia Commons · Inner Mongolia Autonomous Region", bestSeason: "Tháng 6 – Tháng 9 (Thảo nguyên Hô Luân Bối Nhĩ xanh mướt & Lễ hội Naadam mùa hè)", cuisine: "Thịt cừu nướng nguyên con (烤全羊), Trà sữa mặn Mông Cổ (奶茶), Sữa bò nướng & phô mai thảo nguyên", travelTip: "Khoảng cách giữa các điểm thảo nguyên rất xa; nên thuê xe riêng bản địa đi cung đường Hải Lạp Nhĩ – Mãn Châu Lý." },
    { id: "prov-guangxi", nameVi: "Quảng Tây", nameEn: "Guangxi Zhuang Autonomous Region", nameZh: "广西壮族自治区", abbr: "桂 (Quế)", type: "Khu tự trị dân tộc Choang", regionId: "south", regionLabel: "Hoa Nam (Lĩnh Nam)", capital: "Nam Ninh", highlights: "Non nước Quế Lâm – Dương Sóc, tranh đá Hoa Sơn Tả Giang (UNESCO), trống đồng Lạc Việt, hát giao duyên Lưu Tam Tỷ, thác Đức Thiên – Bản Giốc.", economy: "Giáp biên giới Lạng Sơn – Cao Bằng – Quảng Ninh (Việt Nam); nơi tổ chức Hội chợ CAEXPO thường niên và tuyến Hành lang Thương mại Đất – Biển Mới.", image: "assets/images/provinces/guangxi-guilin-li-river.jpg", landmark: "Sơn thủy Ly Giang & Thạch lâm Dương Sóc Quế Lâm (桂林阳朔漓江山水)", photoCredit: "Wikimedia Commons · Guilin, Guangxi", bestSeason: "Tháng 4 – Tháng 10 (Mùa nước đầy Ly Giang & Ruộng bậc thang Long Tích vào vụ cấy/mùa lúa chín tháng 9–10)", cuisine: "Bún ốc Liễu Châu (螺蛳粉), Bún gạo Quế Lâm (桂林米粉), Bún bạn già Nam Ninh (老友粉), Vịt hầm bia Dương Sóc", travelTip: "Từ Hà Nội/Lạng Sơn có thể đi tàu hỏa liên vận hoặc qua cửa khẩu Hữu Nghị Quan sang Nam Ninh – Quế Lâm cực kỳ tiết kiệm." },
    { id: "prov-tibet", nameVi: "Tây Tạng", nameEn: "Tibet Autonomous Region (Xizang)", nameZh: "西藏自治区", abbr: "藏 (Tạng)", type: "Khu tự trị", regionId: "southwest", regionLabel: "Tây Nam (Thanh Tạng)", capital: "Lhasa", highlights: "Cung điện Potala, chùa Đại Chiêu (Jokhang), núi Everest (Chomolungma), núi thiêng Kailash, nghệ thuật tranh Thangka và y học Tạng y.", economy: "Du lịch sinh thái – văn hóa cao nguyên, bảo tồn môi trường 'Nóc nhà thế giới', năng lượng sạch và tuyến đường sắt Thanh – Tạng.", image: "assets/images/provinces/tibet-potala-palace.jpg", landmark: "Cung điện Potala Lhasa trên đỉnh đồi Hồng Sơn (拉萨红山布达拉宫)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Lhasa", bestSeason: "Tháng 5 – Tháng 10 (Nồng độ oxy cao hơn mùa đông, đường đèo Everest & hồ Namtso thông suốt)", cuisine: "Trà bơ Tây Tạng (酥油茶), Bột lúa mạch rang Tsampa (糌粑), Mì Tây Tạng (Thukpa) & Sữa chua Yak", travelTip: "Khách quốc tế cần xin Giấy phép nhập cảnh Tây Tạng (Tibet Travel Permit) qua công ty lữ hành trước khi lên tàu/máy bay đi Lhasa." },
    { id: "prov-ningxia", nameVi: "Ninh Hạ", nameEn: "Ningxia Hui Autonomous Region", nameZh: "宁夏回族自治区", abbr: "宁 (Ninh)", type: "Khu tự trị dân tộc Hồi", regionId: "northwest", regionLabel: "Tây Bắc", capital: "Ngân Xuyên", highlights: "Lăng mộ Tây Hạ dưới chân núi Hạ Lan, khu thắng cảnh sa mạc Sa Pha Đầu bên sông Hoàng Hà, văn hóa Hồi giáo Trung Hoa.", economy: "Mệnh danh 'Giang Nam nơi biên tái' nhờ thủy lợi Hoàng Hà; quê hương kỷ tử Ninh Hạ và vùng sản xuất rượu vang chân núi Hạ Lan.", image: "assets/images/provinces/ningxia-western-xia-tombs.jpg", landmark: "Quần thể Lăng mộ Hoàng gia Tây Hạ dưới chân Hạ Lan Sơn (贺兰山下西夏王陵)", photoCredit: "Wikimedia Commons · Yinchuan, Ningxia", bestSeason: "Tháng 5 – Tháng 10 (Khí hậu khô thoáng sa mạc Sa Pha Đầu & mùa thu hoạch nho/kỷ tử)", cuisine: "Thịt cừu luộc tay (手抓羊肉), Canh thịt cừu Tạp Toái, Trà Bát Bảo kỷ tử táo đỏ & Rượu vang chân núi Hạ Lan", travelTip: "Tây Hạ Vương Lăng nên đi vào cuối buổi chiều khi ánh nắng tà chiếu vàng rực trên các gò lăng mộ cổ." },
    { id: "prov-xinjiang", nameVi: "Tân Cương", nameEn: "Xinjiang Uyghur Autonomous Region", nameZh: "新疆维吾尔自治区", abbr: "新 (Tân)", type: "Khu tự trị Duy Ngô Nhĩ", regionId: "northwest", regionLabel: "Tây Bắc", capital: "Ürümqi (Ô Lỗ Mộc Tề)", highlights: "Dãy Thiên Sơn, thành cổ Kashgar, hồ Kanas, ốc đảo Turpan (hệ thống kênh ngầm Karez), âm nhạc Twelve Muqam (UNESCO).", economy: "Đầu mối cửa khẩu đường sắt Trung – Âu (Alashankou, Khorgos), vùng trồng bông sợi dài số 1 thế giới, công nghiệp polysilicon và năng lượng gió.", image: "assets/images/provinces/xinjiang-kanas-lake.jpg", landmark: "Hồ Kanas (Nguyệt Lượng Vịnh) vùng A Lặc Thái (阿勒泰阿尔泰山喀纳斯湖月亮湾)", photoCredit: "Wikimedia Commons · Altay, Xinjiang", bestSeason: "Tháng 6 (Cánh đồng oải hương Y Lê) & Tháng 9 – Tháng 10 (Rừng phong vàng Hồ Kanas & cây Hồ Dương sa mạc)", cuisine: "Cơm tay nắm Tân Cương (手抓饭), Gà đĩa lớn Đại Bàn Kê (大盘鸡), Xiên cừu nướng thìa là, Bánh mì Naan lò đất", travelTip: "Tân Cương rộng gấp gần 5 lần Việt Nam; nên tách chuyến đi làm 2 cung: Bắc Cương (thiên nhiên hồ núi) hoặc Nam Cương (Con đường Tơ lụa Kashgar)." },

    // 2 Special Administrative Regions (Đặc khu hành chính)
    { id: "prov-hongkong", nameVi: "Hồng Kông", nameEn: "Hong Kong SAR", nameZh: "香港特别行政区", abbr: "港 (Cảng)", type: "Đặc khu hành chính (SAR)", regionId: "south", regionLabel: "Hoa Nam (Vùng Vịnh Lớn)", capital: "Hồng Kông", highlights: "Cảng Victoria, giao thoa Đông – Tây, điện ảnh Hồng Kông, văn hóa trà lâu Quảng Đông và các đại học nghiên cứu hàng đầu châu Á.", economy: "Trung tâm tài chính quốc tế, ngân hàng thanh toán bù trừ đồng Nhân dân tệ ở nước ngoài (CNH) và thương mại chuyển khẩu tự do.", image: "assets/images/provinces/hongkong-victoria-harbour.jpg", landmark: "Cảng Victoria nhìn từ Đỉnh Thái Bình (维多利亚港与太平山顶夜景)", photoCredit: "Wikimedia Commons · Hong Kong SAR", bestSeason: "Tháng 10 – Tháng 12 (Trời thu nắng đẹp, khô ráo nhất để đi Đỉnh Thái Bình & đường mòn Dragon's Back)", cuisine: "Ngỗng quay Yung Kee, Dimsum xe đẩy truyền thống, Bánh dứa bơ Bolo Bao, Trà sữa uyên ương Trà Quán (茶餐厅)", travelTip: "Tải thẻ Octopus vào Apple Wallet / Android để đi phà Star Ferry, xe điện 2 tầng Tramways & MRT mà không cần đổi tiền lẻ." },
    { id: "prov-macau", nameVi: "Ma Cao", nameEn: "Macau SAR", nameZh: "澳门特别行政区", abbr: "澳 (Áo)", type: "Đặc khu hành chính (SAR)", regionId: "south", regionLabel: "Hoa Nam (Vùng Vịnh Lớn)", capital: "Ma Cao", highlights: "Khu trung tâm lịch sử Ma Cao (Di sản UNESCO: phế tích Nhà thờ Thánh Paul, Miếu Ma Các), ẩm thực giao thoa Bồ Đào Nha – Quảng Đông.", economy: "Trung tâm du lịch – nghỉ dưỡng – hội nghị quốc tế và nền tảng kết nối kinh tế thương mại giữa Trung Quốc với cộng đồng các nước nói tiếng Bồ Đào Nha.", image: "assets/images/provinces/macau-ruins-st-paul.jpg", landmark: "Mặt tiền Di tích Nhà thờ Thánh Phaolô (大三巴牌坊（圣保禄大教堂遗址）)", photoCredit: "Wikimedia Commons · UNESCO World Heritage Site, Macau SAR", bestSeason: "Tháng 10 – Tháng 12 (Khô ráo, thoáng mát, dễ chịu nhất khi đi bộ tham quan 22 công trình di sản UNESCO)", cuisine: "Bánh tart trứng Bồ Đào Nha (葡式蛋挞), Bánh mì kẹp sườn heo (猪扒包), Gà Bồ Đào Nha & Chè hạnh nhân cổ truyền", travelTip: "Khu phố cổ Nhà thờ Thánh Paul – Quảng trường Senado rất gần nhau, có thể đi bộ hoàn toàn trong nửa ngày." }
  ]
};
