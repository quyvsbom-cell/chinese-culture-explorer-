(function () {
  'use strict';

  function PQ(sourceZh, sourceVi, sourceEn, originalZh, pinyin, hanViet, meaningVi, meaningEn) {
    return {
      source: sourceVi + " (" + sourceZh + ")",
      sourceZh: sourceZh,
      sourceVi: sourceVi,
      sourceEn: sourceEn + " (" + sourceZh + ")",
      zh: originalZh,
      quoteZh: originalZh,
      originalZh: originalZh,
      pinyin: pinyin,
      hanViet: hanViet,
      translationVi: meaningVi,
      translationEn: meaningEn,
      meaningVi: meaningVi,
      meaningEn: meaningEn
    };
  }

  var ARTICLES_V3_PART3B = [
    {
      id: 'china-hsr-megaprojects-urban-network',
      number: 91,
      category: 'contemporary',
      categoryLabel: 'Trung Quốc Đương đại',
      titleVi: 'Mạng lưới Đường sắt Cao tốc Bát Tung Bát Hoành (350 km/h) & Mô hình Đô thị TOD',
      titleZh: '中国“八纵八横”高速铁路网与TOD城市群模式',
      titleZhTrad: '中國「八縱八橫」高速鐵路網與TOD城市群模式',
      titleEn: 'China\'s "Eight Vertical and Eight Horizontal" High-Speed Rail Network (350 km/h) and TOD Urban Clusters',
      readMinutes: 14,
      epistemicTag: 'Hạ tầng Đương đại & Địa kinh tế',
      abstract: 'Chuyên luận phân tích quá trình hình thành mạng lưới đường sắt cao tốc lớn nhất thế giới từ tuyến Bắc Kinh – Thiên Tân (2008) qua khung "Tứ Tung Tứ Hoành" đến "Bát Tung Bát Hoành" vượt mốc 45.000 km, kỹ nghệ tàu Fuxing CR400 vận hành thương mại 350 km/h và tác động nén không gian – thời gian lên các siêu vùng đô thị theo mô hình TOD.',
      keyTakeaways: [
        'Từ tuyến đường sắt cao tốc đầu tiên Bắc Kinh – Thiên Tân khai trương tháng 8/2008, Trung Quốc đã mở rộng mạng lưới vượt 45.000 km (tính đến cuối 2023), chiếm hơn hai phần ba tổng chiều dài đường sắt cao tốc toàn cầu.',
        'Khung quy hoạch "Bát Tung Bát Hoành" (8 tuyến dọc Bắc–Nam, 8 tuyến ngang Đông–Tây, phê duyệt năm 2016) cùng dòng tàu tự chủ Fuxing CR400 (vận hành 350 km/h trên tuyến Bắc Kinh – Thượng Hải từ năm 2017) kết nối hơn 95% thành phố trên 500.000 dân.',
        'Mô hình phát triển đô thị định hướng giao thông công cộng (TOD) lấy ga cao tốc làm hạt nhân (như Hồng Kiều Thượng Hải, Thâm Quyến Bắc, Trịnh Châu Đông) tạo ra "vòng tròn đi làm 1–2 giờ" hợp nhất các cụm đô thị Trường Giang, Châu Giang và Kinh–Tân–Ký.'
      ],
      introduction: 'Nếu Đại Vận Hà từng là xương sống thủy vận nối liền Bắc–Nam của Trung Hoa cổ đại, thì mạng lưới Đường sắt Cao tốc (Cao Thiết / Gaotie) chính là hạ tầng tái cấu trúc địa lý kinh tế mạnh mẽ nhất của Trung Quốc thế kỷ XXI. Trong chưa đầy hai thập kỷ, hành trình 1.318 km giữa Bắc Kinh và Thượng Hải rút ngắn xuống còn khoảng 4 giờ 30 phút bằng tàu Fuxing 350 km/h, làm thay đổi căn bản cách người dân di chuyển, doanh nghiệp phân bổ chuỗi cung ứng và du khách quốc tế lên lịch trình khám phá 34 tỉnh thành.',
      historicalBackground: 'Năm 2004, Quốc vụ viện Trung Quốc thông qua "Quy hoạch Mạng lưới Đường sắt Trung và Dài hạn" với mô hình ban đầu "Tứ Tung Tứ Hoành" (4 dọc 4 ngang), áp dụng chiến lược "nhập khẩu công nghệ lõi – tiêu hóa – hấp thu – tái sáng tạo" từ các hãng châu Âu và Nhật Bản (Siemens, Alstom, Kawasaki, Bombardier) cho dòng tàu Hexie (CRH). Tháng 8/2008, tuyến cao tốc 350 km/h đầu tiên Bắc Kinh – Thiên Tân khánh thành ngay trước Thế vận hội Bắc Kinh, tiếp nối bằng tuyến Vũ Hán – Quảng Châu (2009) và Bắc Kinh – Thượng Hải (2011). Năm 2016, quy hoạch nâng cấp thành "Bát Tung Bát Hoành" và năm 2017 dòng tàu tiêu chuẩn Trung Quốc Fuxing (CR400AF/BF) chính thức vận hành thương mại.',
      mainContent: [
        {
          heading: '1. Kiến trúc "Bát Tung Bát Hoành" và chinh phục địa hình khắc nghiệt',
          body: 'Mạng lưới "Bát Tung Bát Hoành" phủ kín từ vùng băng giá Cáp Nhĩ Tân – Đại Liên (vận hành ở -40°C, khai trương 2012), hành lang sa mạc Lan Châu – Urumqi (2014), địa hình núi đá vôi karst Quý Dương – Quảng Châu (2014) đến tuyến cao nguyên đầu tiên Lhasa – Lâm Chi tại Tây Tạng (2021). Tỷ lệ cầu cạn và hầm xuyên núi trên nhiều tuyến miền núi Tây Nam vượt quá 70–80% nhằm đảm bảo bán kính cong lớn cho tốc độ cao và tiết kiệm đất nông nghiệp.'
        },
        {
          heading: '2. Tàu Fuxing CR400, hệ thống đặt vé 12306 và trải nghiệm thực địa',
          body: 'Dòng tàu Fuxing CR400 đạt chuẩn hóa linh kiện trên 80% do CRRC sản xuất, giảm lực cản khí động học và tiếng ồn nội thất so với thế hệ CRH trước đó. Song hành với hạ tầng cứng là hệ thống bán vé điện tử tập trung Railway 12306 — cho phép hành khách quốc tế xác thực hộ chiếu trực tuyến và quét thẳng hộ chiếu (hoặc mã QR) qua cổng soát vé tự động mà không cần in vé giấy.'
        },
        {
          heading: '3. Mô hình TOD (Transit-Oriented Development) và Vòng tròn Đô thị 1 giờ',
          body: 'Các đầu mối giao thông tổng hợp đa phương thức như Trung tâm Giao thông Hồng Kiều (Thượng Hải, kết nối sân bay quốc tế, ga cao tốc 30 đường ray và nhiều tuyến metro) hay ga Tây Cửu Long (Hồng Kông, áp dụng mô hình kiểm soát biên giới "Nhất địa lưỡng kiểm") đã biến nhà ga thành cực tăng trưởng thương mại – văn phòng mới, thúc đẩy hiện tượng "sống ở Tô Châu/Côn Sơn, làm việc ở Thượng Hải" hay "sống ở Phật Sơn/Đông Hoản, làm việc ở Quảng Châu/Thâm Quyến".'
        },
        {
          heading: '4. Mở rộng kết nối khu vực và định hướng Đường sắt Việt – Trung',
          body: 'Kinh nghiệm xây dựng đường sắt tiêu chuẩn cao của Trung Quốc đang mở rộng sang Đông Nam Á qua tuyến Đường sắt Trung – Lào (Côn Minh – Viêng Chăn, thông xe tháng 12/2021) và tuyến cao tốc Jakarta – Bandung (Indonesia, khai trương tháng 10/2023). Với Việt Nam, các tuyến kết nối đường sắt khổ tiêu chuẩn 1.435 mm (Lào Cai – Hà Nội – Hải Phòng, Đồng Đăng – Hà Nội, Móng Cái – Hạ Long – Hải Phòng) cùng dự án đường sắt tốc độ cao Bắc – Nam đang mở ra triển vọng liên vận hành khách và hàng hóa trực tiếp với mạng lưới phía Nam Trung Quốc.'
        }
      ],
      theoreticalFramework: 'Trong địa lý kinh tế hiện đại ("Hiệu ứng nén không gian – thời gian" của David Harvey và lý thuyết kinh tế học đô thị về tích tụ cụm), đường sắt cao tốc tạo ra "hiệu ứng hành lang" (corridor effect): giảm mạnh chi phí tiếp xúc trực tiếp (face-to-face) giữa các trung tâm R&D, tài chính và nhà máy, nâng cao năng suất vùng đô thị lớn dù vẫn đặt ra bài toán cân bằng nợ đầu tư hạ tầng trên các tuyến mật độ khách thấp ở miền Tây.',
      terminologyAndLiushu: [
        { hanzi: '轨', pinyin: 'guǐ', hanViet: 'Quỹ', liushu: 'Hình thanh', gloss: 'Đường ray tiêu chuẩn 1.435 mm kế thừa khái niệm chuẩn hóa giao thông từ "Xa đồng quỹ" thời Tần.' },
        { hanzi: '铁', pinyin: 'tiě', hanViet: 'Thiết', liushu: 'Hình thanh', gloss: 'Gồm bộ Kim (钅) và chữ Thất (失); trong "Cao thiết" (高铁 — Đường sắt cao tốc).' },
        { hanzi: '枢', pinyin: 'shū', hanViet: 'Xu', liushu: 'Hình thanh', gloss: 'Cái bản lề cửa; trong "Giao thông xu nữu" (交通枢纽) chỉ đầu mối trung chuyển đa phương thức TOD.' },
        { hanzi: '隧', pinyin: 'suì', hanViet: 'Toại', liushu: 'Hình thanh', gloss: 'Gồm bộ Phụ (阝) và chữ Toại (遂); đường hầm xuyên núi hoặc xuyên sông trên tuyến cao tốc.' },
        { hanzi: '站', pinyin: 'zhàn', hanViet: 'Trạm', liushu: 'Hình thanh', gloss: 'Nhà ga hành khách đường sắt (như Bắc Kinh Nam Trạm, Thượng Hải Hồng Kiều Trạm).' }
      ],
      primarySources: [
        PQ(
          '《中长期铁路网规划》（中国国家发改委，2016）',
          'Quy hoạch Mạng lưới Đường sắt Trung và Dài hạn (Ủy ban Cải cách và Phát triển Quốc gia Trung Quốc, 2016)',
          'Mid-to-Long-Term Railway Network Plan (NDRC, 2016)',
          '构建以“八纵八横”主通道为骨架、区域连接线衔接、城际铁路补充的高速铁路网。',
          'Gòujiàn yǐ "bāzòng bāhéng" zhǔtōngdào wéi gǔjià, qūyù liánjiēxiàn xiánjiē, chéngjì tiělù bǔchōng de gāosù tiělùwǎng.',
          'Cấu kiến dĩ "Bát tung bát hoành" chủ thông đạo vi cốt giá, khu vực liên tiếp tuyến hàm tiếp, thành tế thiết lộ bổ sung đích cao tốc thiết lộ võng.',
          'Xây dựng mạng lưới đường sắt cao tốc lấy tám tuyến dọc và tám tuyến ngang làm khung xương chính, kết nối bằng các tuyến liên vùng và bổ trợ bởi đường sắt liên đô thị.',
          'Construct a high-speed railway network anchored by the "Eight Vertical and Eight Horizontal" trunk corridors, linked by regional connectors and supplemented by intercity lines.'
        ),
        PQ(
          '《史记·秦始皇本纪》（历史对照）',
          'Sử Ký — Tần Thủy Hoàng Bản Kỷ (đối chiếu lịch sử)',
          'Shiji, Basic Annals of Qin Shi Huang (Historical Parallel)',
          '车同轨，书同文字。',
          'Chē tóngguǐ, shū tóng wénzì.',
          'Xa đồng quỹ, thư đồng văn tự.',
          'Xe cùng một khổ trục, sách cùng một chữ viết — tinh thần chuẩn hóa hạ tầng kết nối quốc gia kéo dài từ thời Tần đến kỷ nguyên Cao thiết.',
          'Standardized carriage gauges and unified script—an infrastructure standardization ethos echoing into the modern HSR era.'
        )
      ],
      sinoVietnameseComparison: 'Với du khách và doanh nhân Việt Nam, hệ thống Cao thiết biến các chuyến đi liên tỉnh tại Trung Quốc trở nên thuận tiện hơn hàng không ở cự ly dưới 1.000 km nhờ ga đặt gần nội đô, tỷ lệ đúng giờ cao và thủ tục an ninh nhanh. Trong tương lai gần, tuyến đường sắt tốc độ cao Bắc – Nam Việt Nam và kết nối liên vận khổ 1.435 mm qua Lào Cai – Lạng Sơn hứa hẹn rút ngắn đáng kể thời gian vận chuyển giữa Hà Nội với Côn Minh, Nam Ninh và Thâm Quyến.',
      additionalReferences: [
        'World Bank (2019), China\'s High-Speed Rail Development, World Bank Publications.',
        'National Development and Reform Commission (NDRC, 2016), Mid-to-Long-Term Railway Network Plan.',
        'China State Railway Group (CR) Annual Statistical Bulletins.'
      ],
      conclusion: 'Mạng lưới "Bát Tung Bát Hoành" vừa là thành tựu kỹ thuật cơ khí – xây dựng vừa là cuộc tái định hình địa kinh tế quy mô lục địa, biến các tỉnh thành xa xôi thành một thị trường thống nhất liên thông trong ngày.'
    },
    {
      id: 'china-green-energy-ev-battery-ecosystem',
      number: 92,
      category: 'contemporary',
      categoryLabel: 'Trung Quốc Đương đại',
      titleVi: 'Chuyển dịch Năng lượng Xanh, Pin LFP/Natri-ion & Hệ sinh thái Xe điện Trung Quốc',
      titleZh: '中国绿色能源转型、磷酸铁锂/钠离子电池与新能源汽车生态',
      titleZhTrad: '中國綠色能源轉型、磷酸鐵鋰/鈉離子電池與新能源汽車生態',
      titleEn: 'China\'s Green Energy Transition, LFP/Sodium-Ion Batteries, and Electric Vehicle Ecosystem',
      readMinutes: 14,
      epistemicTag: 'Kinh tế Công nghiệp & Công nghệ Xanh',
      abstract: 'Chuyên luận phân tích chuỗi giá trị "Tân Tam Dạng" (xe năng lượng mới, pin lithium-ion và tấm pin mặt trời) giúp Trung Quốc dẫn đầu quá trình chuyển dịch xanh toàn cầu: đột phá công nghệ pin LFP (không coban) và pin Natri-ion của CATL – BYD, năng lực tinh luyện khoáng sản và bài học công nghiệp cho chuỗi cung ứng khu vực.',
      keyTakeaways: [
        'Bằng cách bỏ qua cuộc đua động cơ đốt trong đã định hình suốt một thế kỷ ở châu Âu–Nhật Bản, Trung Quốc thực hiện chiến lược "vượt qua ở khúc cua" tập trung vào xe điện (NEV) từ cuối thập niên 2000.',
        'Đột phá công nghệ cấu trúc pin LFP (Lithium Iron Phosphate — như Pin Blade của BYD và pin Shenxing/Qilin của CATL) loại bỏ sự phụ thuộc vào coban–niken đắt đỏ, nâng cao độ an toàn chống cháy nổ và kéo giảm mạnh giá thành xe điện.',
        'Song hành cùng xe điện là quy mô lắp đặt điện mặt trời, điện gió lớn nhất thế giới và đường dây truyền tải siêu cao áp (UHV) dẫn điện sạch từ sa mạc Tây Bắc về các siêu đô thị duyên hải.'
      ],
      introduction: 'Trong thập niên 2020, cấu trúc xuất khẩu công nghiệp của Trung Quốc đã chuyển dịch sâu sắc từ "Lão Tam Dạng" (may mặc, đồ gia dụng, nội thất) sang "Tân Tam Dạng" (xe điện năng lượng mới, pin lưu trữ lithium-ion và thiết bị quang điện mặt trời). Sự chuyển dịch này không diễn ra ngẫu nhiên trong vài năm, mà là kết quả của hai thập kỷ tích hợp chính sách công nghiệp, làm chủ chuỗi cung ứng vật liệu từ mỏ đến nhà máy và cạnh tranh thị trường nội địa cực kỳ khốc liệt.',
      historicalBackground: 'Đối mặt đồng thời với bài toán an ninh năng lượng (phụ thuộc nhập khẩu dầu mỏ qua eo biển Malacca), ô nhiễm không khí đô thị và khoảng cách công nghệ động cơ xăng dầu so với Đức, Nhật, Mỹ, Trung Quốc khởi động chương trình "Thập Thành Thiên Lượng" (2009) trợ cấp thử nghiệm xe điện giao thông công cộng (Thâm Quyến trở thành đại đô thị đầu tiên trên thế giới điện hóa 100% xe buýt vào cuối năm 2017). Sau giai đoạn trợ cấp trực tiếp (2010–2022) kết hợp cơ chế "hiệu ứng cá da trơn" khi cho phép Tesla xây Gigafactory Thượng Hải 100% vốn ngoại (2019), chuỗi cung ứng linh kiện xe điện nội địa nhanh chóng trưởng thành vượt bậc.',
      mainContent: [
        {
          heading: '1. Cách mạng hóa học Pin: LFP (Lithium Sắt Photphat) và Pin Natri-ion',
          body: 'Trong khi các hãng pin Hàn Quốc và phương Tây ban đầu tập trung vào pin NMC (Niken–Mangan–Coban) mật độ năng lượng cao nhưng giá thành đắt và rủi ro nhiệt cao, các doanh nghiệp Trung Quốc như CATL (Ninh Đức, Phúc Kiến) và BYD (Thâm Quyến) đã cải tiến đột phá kiến trúc cell-to-pack (CTP) cho pin LFP — tiêu biểu là Pin Lưỡi Dao (Blade Battery, 2020) và pin sạc siêu nhanh Shenxing. Nhờ không dùng coban, pin LFP an toàn hơn, tuổi thọ chu kỳ dài hơn và rẻ hơn đáng kể. Đồng thời, để giảm phụ thuộc vào nguồn cung lithium, CATL và các viện nghiên cứu Trung Quốc đi đầu thương mại hóa pin Natri-ion (Sodium-ion) hoạt động tốt trong khí hậu giá rét.'
        },
        {
          heading: '2. Hệ sinh thái Xe điện (NEV) và Chuỗi cung ứng Tích hợp Dọc',
          body: 'Khác với mô hình lắp ráp truyền thống, các cụm công nghiệp tại Thâm Quyến, Hợp Phì (An Huy), Thượng Hải, Trùng Khánh và Thường Châu (Giang Tô) gom gọn toàn bộ chuỗi từ cực dương/âm, màng ngăn, chất điện phân, chip công suất SiC, radar LiDAR đến phần mềm buồng lái thông minh trong bán kính vài giờ chạy xe. Doanh số xe năng lượng mới (BEV + PHEV) tại Trung Quốc đã vượt mốc 50% tỷ trọng xe du lịch bán ra theo nhiều tháng trong năm 2024, đồng thời thúc đẩy mạng lưới trạm sạc công cộng và trạm đổi pin (như NIO) phủ khắp quốc gia.'
        },
        {
          heading: '3. Quang điện Mặt trời, Điện gió và Đường dây Siêu cao áp (UHV)',
          body: 'Trung Quốc hiện chiếm hơn 75–80% công suất sản xuất toàn cầu ở các khâu polysilicon, tấm wafer, tế bào quang điện và mô-đun mặt trời, giúp giá điện mặt trời thế giới giảm hơn 80% trong một thập kỷ qua. Để giải quyết bài toán địa lý (nắng gió tập trung ở Tân Cương, Thanh Hải, Nội Mông nhưng tiêu thụ tập trung ở duyên hải phía Đông), Tập đoàn Lưới điện Quốc gia Trung Quốc đã triển khai mạng lưới truyền tải siêu cao áp một chiều (±800 kV và ±1.100 kV UHVDC) truyền điện sạch vượt hơn 3.000 km với tổn thất thấp.'
        },
        {
          heading: '4. Thách thức thương mại và Dịch chuyển chuỗi cung ứng Đông Nam Á',
          body: 'Tốc độ mở rộng công suất nhanh đã kéo theo cuộc chiến giá khốc liệt trong nước và rào cản thuế quan tại Mỹ và EU. Đáp lại, các nhà sản xuất xe điện và pin Trung Quốc đẩy mạnh đầu tư nhà máy sản xuất trực tiếp tại Đông Nam Á (Thái Lan, Indonesia, Malaysia), châu Âu (Hungary) và Mỹ Latinh, tạo ra làn sóng tái cấu trúc chuỗi cung ứng ô tô khu vực.'
        }
      ],
      theoreticalFramework: 'Kinh tế học đổi mới (như khái niệm "Chuỗi cung ứng tích hợp quy mô lớn" và "Đường cong học tập công nghệ" — Wright\'s Law) chỉ ra rằng lợi thế của Trung Quốc trong công nghệ xanh bắt nguồn từ tốc độ lặp lại kỹ thuật sản xuất hàng loạt (manufacturing learning-by-doing) song hành cùng trợ cấp ban đầu, nơi mỗi lần nhân đôi sản lượng lại kéo giảm mạnh chi phí đơn vị.',
      terminologyAndLiushu: [
        { hanzi: '电', pinyin: 'diàn', hanViet: 'Điện', liushu: 'Tượng hình', gloss: 'Dạng phồn thể 電 gồm bộ Vũ (雨: mưa) và tia chớp (申); nay chỉ điện năng, xe điện ("Điện động xa").' },
        { hanzi: '锂', pinyin: 'lǐ', hanViet: 'Lý (Lithium)', liushu: 'Hình thanh', gloss: 'Chữ hóa học hiện đại gồm bộ Kim (钅: kim loại) và chữ Lý (里) phiên âm nguyên tố Lithium trong pin xe điện.' },
        { hanzi: '伏', pinyin: 'fú', hanViet: 'Phục (trong Quang phục)', liushu: 'Hội ý / Phiên âm', gloss: 'Trong "Quang phục" (光伏 — Photovoltaic / Điện mặt trời) ghép ánh sáng (光) với đơn vị điện áp Volt (伏).' },
        { hanzi: '碳', pinyin: 'tàn', hanViet: 'Thán (Carbon)', liushu: 'Hình thanh', gloss: 'Gồm bộ Thạch (石) và chữ Thán (炭); xuất hiện trong mục tiêu kép "Song thán" (đạt đỉnh carbon 2030, trung hòa carbon 2060).' },
        { hanzi: '储', pinyin: 'chǔ', hanViet: 'Trữ', liushu: 'Hình thanh', gloss: 'Trong "Trữ năng" (储能 — Lưu trữ năng lượng bằng pin quy mô lưới điện).' }
      ],
      primarySources: [
        PQ(
          '《新能源汽车产业发展规划（2021—2035年）》（中国国务院办公厅，2020）',
          'Quy hoạch Phát triển Ngành Công nghiệp Xe Năng lượng Mới 2021–2035 (Quốc vụ viện Trung Quốc, 2020)',
          'New Energy Vehicle Industry Development Plan 2021–2035 (State Council, 2020)',
          '发展新能源汽车是我国从汽车大国迈向汽车强国的必由之路，是应对气候变化、推动绿色发展的战略举措。',
          'Fāzhǎn xīnnéngyuán qìchē shì wǒguó cóng qìchē dàguó màixiàng qìchē qiángguó de bìyóuzhīlù, shì yìngduì qìhòu biànhuà, tuīdòng lǜsè fāzhǎn de zhànlüè jǔcuò.',
          'Phát triển tân năng nguyên khí xa thị ngã quốc tòng khí xa đại quốc mại hướng khí xa cường quốc đích tất do chi lộ, thị ứng đối khí hậu biến hóa, thôi động lục sắc phát triển đích chiến lược cử thố.',
          'Phát triển xe năng lượng mới là con đường tất yếu để tiến từ nước sản xuất ô tô lớn thành cường quốc ô tô, đồng thời là bước đi chiến lược ứng phó biến đổi khí hậu và thúc đẩy phát triển xanh.',
          'Developing new energy vehicles is the essential path from a large automotive market to an automotive power, and a strategic measure to address climate change and green growth.'
        ),
        PQ(
          '《第75届联合国大会一般性辩论声明》（2020年9月）',
          'Tuyên bố Mục tiêu Khí hậu tại Đại hội đồng Liên Hợp Quốc khóa 75 (9/2020)',
          'Climate Pledge at the 75th UN General Assembly (September 2020)',
          '二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和。',
          'Èryǎnghuàtàn páifàng lìzhēng yú 2030 nián qián dádào fēngzhí, nǔlì zhēngqǔ 2060 nián qián shíxiàn tànzhōnghé.',
          'Nhị dưỡng hóa thán bài phóng lực tranh vu 2030 niên tiền đạt đáo phong trị, nỗ lực tranh thủ 2060 niên tiền thực hiện thán trung hòa.',
          'Phấn đấu đạt đỉnh phát thải khí CO2 trước năm 2030 và nỗ lực thực hiện trung hòa carbon trước năm 2060.',
          'Aim to have CO2 emissions peak before 2030 and achieve carbon neutrality before 2060.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam cũng đang bước nhanh vào cuộc chuyển dịch xe điện nội địa (gắn liền với VinFast trong mảng ô tô – xe máy điện cùng mạng lưới trạm sạc toàn quốc) và phát triển mạnh điện mặt trời – điện gió miền Trung–Nam Bộ. Việc nghiên cứu hệ sinh thái pin LFP và chuỗi cung ứng linh kiện của Trung Quốc mang lại nhiều bài học thực tiễn về nội địa hóa vật liệu và tối ưu hạ tầng lưới điện truyền tải.',
      additionalReferences: [
        'International Energy Agency (IEA, 2024), Global EV Outlook & Renewables Reports.',
        'State Council of China (2020), New Energy Vehicle Industry Development Plan (2021–2035).',
        'BloombergNEF (2024), Global Lithium-Ion Battery Supply Chain Ranking.'
      ],
      conclusion: 'Hệ sinh thái năng lượng xanh và xe điện Trung Quốc đánh dấu bước chuyển từ gia công chi phí thấp sang làm chủ công nghệ vật liệu và quy mô chuỗi cung ứng, trực tiếp định hình tốc độ giảm phát thải carbon của kinh tế toàn cầu.'
    },
    {
      id: 'china-digital-payments-platform-economy',
      number: 93,
      category: 'contemporary',
      categoryLabel: 'Trung Quốc Đương đại',
      titleVi: 'Kinh tế Nền tảng, Thương mại Livestream & Thanh toán Số: QR Alipay/WeChat Pay & e-CNY',
      titleZh: '中国平台经济、直播电商与数字支付：二维码与数字人民币',
      titleZhTrad: '中國平台經濟、直播電商與數字支付：二維碼與數字人民幣',
      titleEn: 'China\'s Platform Economy, Livestream Commerce, and Digital Payments: QR Ecosystems (Alipay/WeChat Pay) and e-CNY',
      readMinutes: 14,
      epistemicTag: 'Kinh tế Số & Hành trang Thực địa',
      abstract: 'Chuyên luận giải mã hiện tượng "nhảy cóc qua kỷ nguyên thẻ tín dụng" tại Trung Quốc: từ cơ chế ký quỹ bảo đảm Alipay (2004) và Lì xì WeChat (2014) đưa mã QR phủ khắp mọi ngõ ngách đời sống, đến hệ sinh thái Siêu ứng dụng (Super-App), thương mại Livestream và đồng Nhân dân tệ số (e-CNY) — kèm hướng dẫn thực tế cho du khách Việt Nam.',
      keyTakeaways: [
        'Trung Quốc bỏ qua giai đoạn phổ cập thẻ tín dụng nhựa để tiến thẳng từ tiền mặt sang thanh toán di động bằng mã QR (Alipay và WeChat Pay) nhờ chi phí chấp nhận thanh toán gần như bằng không cho tiểu thương.',
        'Mô hình "Siêu ứng dụng" (Super-App) tích hợp Mini-Program (Tiểu chương trình) biến WeChat và Alipay thành hệ điều hành đời sống: gọi xe Didi, đặt vé tàu 12306, quét thực đơn nhà hàng, mua vé bảo tàng và đi tàu điện ngầm.',
        'Từ năm 2023–2024, cả Alipay và WeChat Pay đã mở khóa liên kết trực tiếp thẻ Visa/Mastercard quốc tế giúp du khách nước ngoài thanh toán dễ dàng mà không cần tài khoản ngân hàng nội địa Trung Quốc.'
      ],
      introduction: 'Một trong những cú sốc văn hóa đầu tiên với du khách nước ngoài đặt chân đến Trung Quốc ngày nay là một xã hội gần như không dùng tiền mặt: từ trung tâm thương mại lớn, tàu điện ngầm đến sạp bán khoai nướng ven đường đều giao dịch tức thời qua hai tấm bảng mã QR màu xanh lam (Alipay) và xanh lục (WeChat Pay). Sự phổ cập sâu rộng của thanh toán số vượt qua giới hạn thay đổi công cụ trả tiền, tạo thành nền móng cho cả nền kinh tế nền tảng, giao hàng siêu tốc (Meituan, Ele.me) và thương mại livestream quy mô lớn nhất thế giới.',
      historicalBackground: 'Đầu thập niên 2000, rào cản lớn nhất của thương mại điện tử sơ khai (Taobao, thành lập năm 2003) là sự thiếu tin tưởng giữa người mua và người bán xa lạ trong bối cảnh tỷ lệ sở hữu thẻ tín dụng cực thấp. Năm 2004, Alibaba ra mắt Alipay với cơ chế ký quỹ trung gian (Escrow): tiền chỉ chuyển cho người bán sau khi người mua xác nhận nhận hàng đúng chất lượng. Bước ngoặt thứ hai diễn ra vào dịp Tết Nguyên Đán năm 2014, khi Tencent tung tính năng "Hồng bao WeChat" (Lì xì số) kết hợp chương trình Xuân Vãn CCTV, thu hút hàng trăm triệu người dùng liên kết tài khoản ngân hàng chỉ trong vài tuần, biến thanh toán mã QR thành chuẩn mực toàn dân.',
      mainContent: [
        {
          heading: '1. Kinh tế học của Mã QR và Kiến trúc Siêu Ứng dụng (Super-App)',
          body: 'Trong khi thẻ tín dụng yêu cầu máy POS đắt tiền và phí giao dịch 2–3%, một tấm mã QR in trên giấy chỉ tốn vài hào giúp ngay cả nông dân bán rau hay người hát rong cũng tiếp nhận thanh toán số. Nền tảng thanh toán này sau đó được tích hợp với Mini-Program (ứng dụng nhẹ chạy ngay bên trong WeChat/Alipay không cần tải từ kho ứng dụng), cho phép người dùng gọi xe Didi, thuê sạc dự phòng, quét mã gọi món tại bàn, đặt vé tham quan Cố Cung hay mua bảo hiểm chỉ bằng một lần xác thực danh tính.'
        },
        {
          heading: '2. Thương mại Điện tử Xã hội và Hệ sinh thái Livestream (Douyin, Taobao Live)',
          body: 'Kết hợp hạ tầng 4G/5G phủ rộng, logistics giao nhận giá rẻ và thanh toán một chạm, Trung Quốc định hình mô hình "Shoppertainment" (Mua sắm kết hợp giải trí). Từ xưởng sản xuất tại Hàng Châu, Nghĩa Ô hay vườn trái cây ở vùng nông thôn, người bán livestream trực tiếp giới thiệu sản phẩm cho hàng triệu khán giả trên Taobao Live, Douyin (TikTok bản nội địa) và Kuaishou, rút ngắn tối đa khâu trung gian bán lẻ và tạo nên các ngành nghề mới quanh chuỗi cung ứng livestream.'
        },
        {
          heading: '3. Đồng Nhân dân tệ Kỹ thuật số (e-CNY / Số tự Nhân dân tệ)',
          body: 'Do Ngân hàng Nhân dân Trung Quốc (PBOC) nghiên cứu từ năm 2014 và thí điểm rộng rãi tại hàng chục thành phố từ năm 2020 (bao gồm Thế vận hội Mùa đông Bắc Kinh 2022), e-CNY là tiền tệ kỹ thuật số của ngân hàng trung ương (CBDC) thuộc lớp tiền mặt số (M0), có giá trị pháp định ngang tiền giấy, hỗ trợ thanh toán ngoại tuyến không cần Internet (chạm hai điện thoại NFC) và bảo đảm khả năng dự phòng công cộng bên cạnh hai ví tư nhân lớn.'
        },
        {
          heading: '4. Hành trang Thanh toán Số thực chiến cho Du khách Việt Nam',
          body: 'Để di chuyển trơn tru tại Trung Quốc, du khách Việt Nam chỉ cần cài đặt và xác thực hộ chiếu trên cả Alipay và WeChat trước khi bay, sau đó gắn thẻ Visa/Mastercard phát hành tại Việt Nam (giao dịch lẻ dưới 200 CNY hiện được miễn phí giao dịch thẻ quốc tế theo quy định của nền tảng). Ngoài ra, Alipay tích hợp sẵn mục "Transport" tạo mã QR đi tàu điện ngầm/xe buýt tại hầu hết các thành phố lớn và công cụ dịch màn hình trực tiếp khi quét thực đơn.'
        }
      ],
      theoreticalFramework: 'Kinh tế học nền tảng (Jean Tirole về thị trường đa chiều và lý thuyết "Leapfrogging" — phát triển nhảy cóc) lý giải rằng việc thiếu hạ tầng thẻ tín dụng cũ lại trở thành lợi thế giúp Trung Quốc triển khai ngay hạ tầng thanh toán di động chi phí biên tiệm cận 0, từ đó tạo hiệu ứng mạng lưới khuếch đại toàn bộ ngành bán lẻ, ẩm thực và giao vận đô thị.',
      terminologyAndLiushu: [
        { hanzi: '码', pinyin: 'mǎ', hanViet: 'Mã', liushu: 'Hình thanh', gloss: 'Gồm bộ Thạch (石) và chữ Mã (马); trong "Nhị duy mã" (二维码 — Mã QR hai chiều) và "Thừa xa mã" (mã đi tàu điện ngầm).' },
        { hanzi: '付', pinyin: 'fù', hanViet: 'Phó (Trả)', liushu: 'Hội ý', gloss: 'Gồm bộ Nhân (亻) và bộ Thốn (寸: bàn tay trao đưa); chỉ hành động thanh toán ("Chi phó bảo" — Alipay).' },
        { hanzi: '包', pinyin: 'bāo', hanViet: 'Bao', liushu: 'Tượng hình', gloss: 'Trong "Hồng bao" (红包 — lì xì điện tử) và "Tiền bao" (ví điện tử).' },
        { hanzi: '播', pinyin: 'bō', hanViet: 'Bá / Phát', liushu: 'Hình thanh', gloss: 'Nghĩa gốc là gieo hạt giống, mở rộng thành phát sóng ("Trực bá" 直播 — Livestream bán hàng).' },
        { hanzi: '币', pinyin: 'bì', hanViet: 'Tệ', liushu: 'Hình thanh', gloss: 'Trong "Số tự Nhân dân tệ" (数字人民币 — e-CNY).' }
      ],
      primarySources: [
        PQ(
          '《中国数字人民币的研发进展白皮书》（中国人民银行，2021）',
          'Sách Trắng Tiến trình Nghiên cứu Phát triển Nhân dân tệ Số (Ngân hàng Nhân dân Trung Quốc, 2021)',
          'Progress of Research & Development of E-CNY in China (PBOC White Paper, 2021)',
          '数字人民币是由中国人民银行发行的数字形式的法定货币，由指定运营机构参与运营。',
          'Shùzì Rénmínbì shì yóu Zhōngguó Rénmín Yínháng fāxíng de shùzì xíngshì de fǎdìng huòbì, yóu zhǐdìng yùnyíng jīgòu cānyù yùnyíng.',
          'Số tự Nhân dân tệ thị do Trung Quốc Nhân dân Ngân hàng phát hành đích số tự hình thức đích pháp định hóa tệ, do chỉ định vận doanh cơ cấu tham dự vận doanh.',
          'Nhân dân tệ số là đồng tiền pháp định dưới hình thức kỹ thuật số do Ngân hàng Nhân dân Trung Quốc phát hành, có sự tham gia vận hành của các tổ chức được chỉ định.',
          'E-CNY is the digital version of fiat currency issued by the People\'s Bank of China and operated by authorized operators.'
        ),
        PQ(
          '《中国人民银行关于进一步优化支付服务提升支付便利性的意见》（2024）',
          'Hướng dẫn Tối ưu hóa Dịch vụ Thanh toán cho Người nước ngoài (Quốc vụ viện / PBOC, 2024)',
          'Guideline on Optimizing Payment Services for International Visitors (State Council / PBOC, 2024)',
          '大额刷卡、小额扫码、现金兜底。',
          'Dà\'é shuākǎ, xiǎo\'é sǎomǎ, xiànjīn dōudǐ.',
          'Đại ngạch xoát tạp, tiểu ngạch tảo mã, hiện kim đâu để.',
          'Khoản lớn quẹt thẻ, khoản nhỏ quét mã QR và luôn bảo đảm chấp nhận tiền mặt làm phương án dự phòng.',
          'Bank cards for large transactions, QR-code scanning for small payments, and cash guaranteed as a fallback.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam trong giai đoạn 2021–2026 cũng chứng kiến bước nhảy vọt ấn tượng của thanh toán không dùng tiền mặt nhờ chuẩn mã QR liên ngân hàng VietQR (NAPAS) chuyển khoản miễn phí tức thời 24/7. Điểm khác biệt chính là hệ sinh thái QR Việt Nam vận hành trực tiếp qua ứng dụng ngân hàng (Banking App) song hành ví điện tử, trong khi Trung Quốc tập trung quyền năng cực lớn vào hai Siêu ứng dụng Alipay và WeChat tích hợp trọn gói Mini-Program.',
      additionalReferences: [
        'People\'s Bank of China (2021), Progress of Research & Development of E-CNY in China.',
        'CGAP / World Bank (2019), China: A Digital Payments Revolution.',
        'State Council of China (March 2024), Opinions on Further Optimizing Payment Services.'
      ],
      conclusion: 'Cuộc cách mạng thanh toán QR và kinh tế nền tảng đã thay đổi tận gốc cấu trúc tiêu dùng và bán lẻ Trung Quốc; nắm vững cách vận hành Alipay, WeChat Pay và Mini-Program vừa là tri thức kinh tế số vừa là hành trang thiết yếu cho mọi chuyến đi thực địa.'
    },
    {
      id: 'modern-chinese-archaeology-sanxingdui-liangzhu',
      number: 94,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Khảo cổ học Đương đại Trung Hoa (Tam Tinh Đôi, Lương Chử, Nhị Lý Đầu, Mã Vương Đôi) & Mô hình "Đa nguyên Nhất thể"',
      titleZh: '中国现代考古学（三星堆、良渚、二里头、马王堆）与“多元一体”格局',
      titleZhTrad: '中國現代考古學（三星堆、良渚、二里頭、馬王堆）與「多元一體」格局',
      titleEn: 'Modern Chinese Archaeology (Sanxingdui, Liangzhu, Erlitou, Mawangdui) and the "Unity in Diversity" Civilization Model',
      readMinutes: 15,
      epistemicTag: 'Khảo cổ học Hiện đại & Tiền sử học',
      abstract: 'Chuyên luận tổng hợp những phát hiện khảo cổ học làm thay đổi tận gốc nhận thức về nguồn gốc văn minh Trung Hoa suốt một thế kỷ qua — từ thành cổ thủy lợi Lương Chử (5.300 năm), đô thành Nhị Lý Đầu, hố tế tự Tam Tinh Đôi (1986 và đợt khai quật mới 2020–2023) đến kho tàng Mã Vương Đôi — khẳng định mô hình "Đa nguyên Nhất thể" thay thế quan niệm cũ chỉ coi Hoàng Hà là cái nôi duy nhất.',
      keyTakeaways: [
        'Quan niệm truyền thống coi văn minh Trung Hoa chỉ xuất phát từ một trung tâm duy nhất ở Trung Nguyên (Hoàng Hà) đã bị bác bỏ bởi khảo cổ học hiện đại, thay bằng mô hình "Đa nguyên Nhất thể" (Phí Hiếu Thông) và "Mãn thiên tinh đẩu" (Tô Bỉnh Kỳ).',
        'Thành cổ Lương Chử (Hàng Châu, 3300–2300 TCN, UNESCO 2019) chứng minh xã hội nhà nước sơ khai với hệ thống đập thủy lợi dài hàng chục km và văn hóa ngọc Tông đã tồn tại rực rỡ ở hạ lưu Trường Giang hơn 5.000 năm trước.',
        'Tam Tinh Đôi (Tứ Xuyên, khai quật 1986 và 6 hố tế tự mới 2020–2023) với mặt nạ vàng, tượng đồng cao 2,6 m và cây thần đồng chứng thực một trung tâm văn minh Cổ Thục độc đáo song hành cùng nhà Thương ở Trung Nguyên.'
      ],
      introduction: 'Trong suốt thế kỷ XX và đầu thế kỷ XXI, khảo cổ học hiện đại Trung Quốc — khởi đầu từ cuộc khai quật di chỉ Ngưỡng Thiều (1921) và Ân Khư (1928) — đã viết lại hoàn toàn những trang sử đầu tiên của Đông Á. Nhờ phương pháp định tuổi phóng xạ carbon-14, địa khảo cổ và phân tích ADN cổ, bức tranh nguồn gốc văn minh Trung Hoa hiện lên không phải là một dòng chảy đơn tuyến từ Hoàng Hà, mà là một mạng lưới rực rỡ các trung tâm văn hóa khu vực cùng tương tác, hội tụ thành một chỉnh thể thống nhất.',
      historicalBackground: 'Trước năm 1920, lịch sử thượng cổ Trung Hoa chủ yếu dựa vào truyền thuyết Tam Hoàng Ngũ Đế và văn bản chép tay đời sau, từng bị phái "Nghi Cổ" (Cố Hiệt Cương) đặt nghi vấn gay gắt. Từ năm 1928, Viện Nghiên cứu Lịch sử – Ngôn ngữ (Lý Tế, Lương Tư Vĩnh) khai quật khoa học Ân Khư xác thực nhà Thương. Bước ngoặt lý thuyết lớn diễn ra từ thập niên 1970–1980 khi hàng loạt phát hiện chấn động xuất hiện ngoài lưu vực Hoàng Hà: văn hóa Hồng Sơn ở Liêu Ninh (5.500 năm), Lương Chử ở Chiết Giang (5.300 năm), Thạch Mão ở Thiểm Tây (4.300 năm) và Tam Tinh Đôi ở Tứ Xuyên (3.200 năm), dẫn đến dự án quốc gia "Trung Hoa Văn Minh Thám Nguyên Công Trình" (từ năm 2002).',
      mainContent: [
        {
          heading: '1. Thành cổ Lương Chử (3300–2300 TCN): Nhà nước Thủy lợi và Ngọc Lễ khí 5.000 năm',
          body: 'Nằm tại ngoại ô Hàng Châu (Chiết Giang, Di sản UNESCO 2019), Lương Chử là bằng chứng khảo cổ chắc chắn về một nhà nước sơ khai ở hạ lưu Trường Giang hơn một thiên niên kỷ trước nhà Thương. Tổ hợp gồm nội thành 300 ha, ngoại thành 630 ha, khu cung điện đắp đất Mạc Giác Sơn và đặc biệt là hệ thống 11 con đập thủy lợi bằng đất bọc cỏ (Thảo khỏa nê) kiểm soát lũ lụt trên diện tích 100 km² — công trình thủy lợi lớn sớm nhất thế giới cùng thời. Biểu tượng tinh thần của Lương Chử là Ngọc Tông (khối ngọc ngoài vuông trong tròn) chạm khắc tinh vi hình Thần Nhân Thú Diện bằng nét khắc mảnh chưa tới 0,1 mm.'
        },
        {
          heading: '2. Nhị Lý Đầu (1750–1500 TCN): "Trung Quốc Sớm Nhất" và bước chuyển sang Thời đại Đồ Đồng',
          body: 'Tại Yển Sư (Lạc Dương, Hà Nam), di chỉ Nhị Lý Đầu (diện tích hơn 300 ha) hé lộ quy hoạch đô thành hình bàn cờ với đường trục vuông góc, cụm cung điện khép kín có tường bao sớm nhất Trung Quốc (hình mẫu tiền thân của Tử Cấm Thành), xưởng đúc đồng thau và con rồng khảm hơn 2.000 mảnh ngọc lam. Dù giới học thuật vẫn thảo luận về mối liên hệ trực tiếp với trung–hậu kỳ nhà Hạ, Nhị Lý Đầu đánh dấu bước chuyển từ "Mãn thiên tinh đẩu" (đa trung tâm phân tán) sang giai đoạn hội tụ quyền lực tại Trung Nguyên.'
        },
        {
          heading: '3. Tam Tinh Đôi (Tứ Xuyên): Hố Tế Tự 1986 và Sáu Hố Mới 2020–2023',
          body: 'Nằm tại Quảng Hán (gần Thành Đô), Tam Tinh Đôi làm kinh ngạc giới khảo cổ toàn cầu với thẩm mỹ khác hẳn Trung Nguyên: tượng người đồng đứng cao 2,6 m (Thanh Đồng Đại Lập Nhân), mặt nạ đồng mắt lồi khổng lồ, quyền trượng vàng và Cây Thần Đồng cao 3,96 m. Trong đợt khai quật công nghệ cao bằng khoang bảo quản khí hậu khép kín năm 2020–2023 tại 6 hố tế tự mới (Hố số 3 đến số 8), các nhà khảo cổ thu được thêm hơn 17.000 hiện vật gồm nửa chiếc mặt nạ vàng nặng hơn 280 g, đàn tế đồng có tượng thú thần và dấu tích tơ lụa cổ, đồng thời tìm thấy các bình đồng Tôn – Lỗi kiểu nhà Thương, chứng minh Cổ Thục vừa cực kỳ độc lập vừa giao lưu chặt chẽ với Trung Nguyên.'
        },
        {
          heading: '4. Mã Vương Đôi (168 TCN): Kho tư liệu toàn diện về xã hội Tây Hán',
          body: 'Khai quật năm 1972–1974 tại Trường Sa (Hồ Nam), ba ngôi mộ gia đình Hầu tước Đái (Lợi Thương và Tân Truy phu nhân) cung cấp bức tranh chân thực đến từng chi tiết về đời sống Tây Hán: thi hài Tân Truy phu nhân bảo quản nguyên vẹn kỳ lạ sau 2.100 năm, áo lụa Tố Sa nặng 49 g, tranh lụa hình chữ T mô tả vũ trụ ba tầng (Thiên – Nhân – Địa), bản đồ địa hình – quân sự sớm nhất thế giới và hơn 120.000 chữ viết trên lụa (Bạch thư) gồm hai dị bản cổ nhất của "Đạo Đức Kinh" cùng các sách y học, thiên văn thất truyền.'
        }
      ],
      theoreticalFramework: 'Nhà khảo cổ Tô Bỉnh Kỳ (1909–1997) đề xuất thuyết "Khu hệ loại hình" và hình ảnh "Mãn thiên tinh đẩu" (văn minh khởi phát đồng thời tại sáu vùng lớn như sao đầy trời), kết hợp với lý thuyết "Đa nguyên Nhất thể" của nhà nhân học Phí Hiếu Thông (1988) và "Vòng tương tác Trung Quốc" (Chinese Interaction Sphere) của Trương Quang Trực: văn minh Trung Hoa không phải sản phẩm đơn độc của một tộc người hay một dòng sông, mà là kết quả hội tụ bền bỉ của nhiều nền văn hóa khu vực.',
      terminologyAndLiushu: [
        { hanzi: '考', pinyin: 'kǎo', hanViet: 'Khảo', liushu: 'Chuyển chú / Hình thanh', gloss: 'Nghĩa gốc là người già (liên hệ chữ Lão 老), mở rộng thành tra cứu kiểm chứng cổ vật ("Khảo cổ học").' },
        { hanzi: '琮', pinyin: 'cóng', hanViet: 'Tông (Ngọc Tông)', liushu: 'Hình thanh', gloss: 'Gồm bộ Ngọc (王/玉) và chữ Tông (宗); lễ khí ngọc ngoài vuông trong tròn tiêu biểu nhất của văn minh Lương Chử.' },
        { hanzi: '坑', pinyin: 'kēng', hanViet: 'Khanh (Hố)', liushu: 'Hình thanh', gloss: 'Trong "Tế tự khanh" (祭祀坑) — các hố chôn đồ lễ tế nung cháy có chủ đích tại Tam Tinh Đôi.' },
        { hanzi: '帛', pinyin: 'bó', hanViet: 'Bạch (Lụa)', liushu: 'Hình thanh', gloss: 'Trong "Bạch thư" (帛书) — sách cổ chép trên lụa quý giá khai quật tại Mã Vương Đôi (168 TCN).' },
        { hanzi: '层', pinyin: 'céng', hanViet: 'Tầng', liushu: 'Hình thanh', gloss: 'Trong "Địa tầng học" (地层学) — nguyên lý khoa học xác định niên đại tương đối qua các lớp đất khảo cổ.' }
      ],
      primarySources: [
        PQ(
          '《中华民族的多元一体格局》（费孝通，1988）',
          'Cục diện Đa nguyên Nhất thể của Dân tộc Trung Hoa — Phí Hiếu Thông (1988)',
          'The Pattern of Diversity in Unity of the Chinese Nation — Fei Xiaotong (1988)',
          '多元一体格局中，高层次的认同并不一定取代或排斥低层次的认同。',
          'Duōyuán yītǐ géjú zhōng, gāocéngcì de rèntóng bìng bù yīdìng qǔdài huò páichì dīcéngcì de rèntóng.',
          'Đa nguyên nhất thể cách cục trung, cao tầng thứ đích nhận đồng tịnh bất nhất định thủ đại hoặc bài xích đê tầng thứ đích nhận đồng.',
          'Trong cục diện Đa nguyên Nhất thể, bản sắc thống nhất ở tầng cao không nhất thiết thay thế hay bài trừ bản sắc đa dạng của từng vùng miền ở tầng cơ sở.',
          'Within the pattern of Unity in Diversity, higher-level shared identity does not necessarily replace or exclude lower-level regional identities.'
        ),
        PQ(
          '《礼记·礼运》（对玉礼与文明的古记）',
          'Chu Lễ — Xuân Quan Đại Tông Bá (ghi chép về Ngọc Tông – Ngọc Bích)',
          'Rites of Zhou, Offices of Spring (On Jade Bi and Cong)',
          '以苍璧礼天，以黄琮礼地。',
          'Yǐ cāngbì lǐ tiān, yǐ huángcóng lǐ dì.',
          'Dĩ thương bích lễ thiên, dĩ hoàng tông lễ địa.',
          'Dùng ngọc Bích màu xanh tròn để tế Trời, dùng ngọc Tông màu vàng vuông để tế Đất (minh chứng sự kế thừa lễ khí Lương Chử vào lễ chế Trung Nguyên).',
          'Use the azure circular Bi jade to worship Heaven, and the yellow square Cong jade to worship Earth.'
        )
      ],
      sinoVietnameseComparison: 'Tiến trình khảo cổ học hiện đại tại Việt Nam cũng xác lập một bức tranh "đa trung tâm hội tụ" tương tự: văn hóa Đông Sơn ở lưu vực sông Hồng – sông Mã, văn hóa Sa Huỳnh ở miền Trung và văn hóa Óc Eo ở đồng bằng sông Cửu Long phát triển độc lập rực rỡ đồng thời giao lưu mật thiết với nhau và với vùng Hoa Nam – Đông Nam Á, khẳng định chiều sâu bản địa của văn minh Việt Nam.',
      additionalReferences: [
        'Tô Bỉnh Kỳ (1997), Trung Quốc Văn Minh Khởi Nguyên Tân Thám (中国文明起源新探).',
        'K. C. Chang (1986), The Archaeology of Ancient China (4th ed.), Yale University Press.',
        'UNESCO World Heritage Centre, Archaeological Ruins of Liangzhu City (2019).'
      ],
      conclusion: 'Từ hệ thống đập thủy lợi 5.000 năm tại Lương Chử đến những chiếc mặt nạ vàng Tam Tinh Đôi và kho bạch thư Mã Vương Đôi, khảo cổ học đương đại đã giải phóng cổ sử Trung Hoa khỏi cái nhìn đơn tuyến, hé lộ một mạng lưới văn minh khu vực phong phú và tương tác sâu sắc.'
    },
    {
      id: 'china-space-aerospace-tiangong-beidou',
      number: 95,
      category: 'contemporary',
      categoryLabel: 'Trung Quốc Đương đại',
      titleVi: 'Hàng không Vũ trụ Đương đại Trung Quốc: Hệ thống Bắc Đẩu BeiDou, Trạm Thiên Cung & Chương trình Hằng Nga',
      titleZh: '中国当代航天科技：北斗导航、天宫空间站与嫦娥探月工程',
      titleZhTrad: '中國當代航太科技：北斗導航、天宮空間站與嫦娥探月工程',
      titleEn: 'Contemporary Chinese Aerospace: BeiDou Navigation System, Tiangong Space Station, and the Chang\'e Lunar Program',
      readMinutes: 14,
      epistemicTag: 'Khoa học Công nghệ & Văn hóa Đương đại',
      abstract: 'Chuyên luận hệ thống hóa hành trình hàng không vũ trụ tự chủ của Trung Quốc từ vệ tinh Đông Phương Hồng 1 (1970) và chuyến bay có người lái Thần Châu 5 (2003) đến ba trụ cột đương đại đã hoàn thành: hệ thống định vị toàn cầu Bắc Đẩu-3 (2020), Trạm vũ trụ Thiên Cung hình chữ T (2022) và các sứ mệnh lấy mẫu Mặt Trăng Hằng Nga 5 & Hằng Nga 6 (2020, 2024), cùng nét độc đáo đặt tên theo thần thoại cổ điển.',
      keyTakeaways: [
        'Chương trình vũ trụ Trung Quốc thể hiện sự kết nối biểu tượng độc đáo giữa công nghệ tiên tiến và văn hóa cổ điển: Bắc Đẩu (định vị), Thiên Cung (trạm không gian), Hằng Nga & Thỏ Ngọc (thám hiểm Mặt Trăng), Thiên Vấn & Chúc Dung (sao Hỏa).',
        'Hệ thống định vị vệ tinh Bắc Đẩu-3 hoàn thiện phủ sóng toàn cầu tháng 7/2020, trở thành một trong bốn hệ thống GNSS toàn cầu (cùng GPS, GLONASS, Galileo) và bổ sung tính năng nhắn tin ngắn qua vệ tinh.',
        'Năm 2022, Trạm vũ trụ Thiên Cung hoàn thành cấu hình chữ T ba mô-đun (Thiên Hòa, Vấn Thiên, Mộng Thiên); tháng 6/2024, tàu Hằng Nga 6 hoàn thành lần đầu tiên trong lịch sử nhân loại mang 1.935,3 g mẫu đất đá từ nửa tối (mặt khuất) của Mặt Trăng về Trái Đất.'
      ],
      introduction: 'Trong khi nhiều quốc gia đặt tên các sứ mệnh không gian bằng mã số kỹ thuật hoặc thần thoại Hy Lạp–La Mã, Trung Quốc đã gắn toàn bộ chương trình hàng không vũ trụ hiện đại với hệ biểu tượng văn hiến cổ điển: tàu có người lái mang tên "Thần Châu" (con thuyền thần), trạm không gian là "Thiên Cung" (cung trời), sứ mệnh sao Hỏa mang tên bài thơ "Thiên Vấn" của Khuất Nguyên, và vệ tinh tiếp âm Mặt Trăng mang tên "Thước Kiều" (cầu Ô Thước). Đằng sau chất thơ ấy là một trong những lộ trình công nghệ dài hạn kỷ luật nhất thế giới.',
      historicalBackground: 'Khởi đầu trong bối cảnh khó khăn thập niên 1950–1960 dưới sự dẫn dắt kỹ thuật của Tiền Học Sâm và các nhà khoa học "Lưỡng Đạn Nhất Tinh", Trung Quốc phóng thành công vệ tinh đầu tiên Đông Phương Hồng 1 bằng tên lửa Trường Chinh 1 ngày 24/4/1970 (nay là Ngày Hàng không Vũ trụ Trung Quốc). Năm 1992, Dự án 921 (Chương trình vũ trụ có người lái "Tam bộ tẩu": phóng tàu có người lái → phòng thí nghiệm không gian → trạm vũ trụ thường trực) được phê duyệt. Ngày 15/10/2003, phi hành gia Dương Lợi Vĩ trên tàu Thần Châu 5 đưa Trung Quốc trở thành quốc gia thứ ba trên thế giới tự đưa người lên quỹ đạo.',
      mainContent: [
        {
          heading: '1. Hệ thống Định vị Toàn cầu Bắc Đẩu (BeiDou / BDS-3)',
          body: 'Lấy tên chòm sao Bắc Đẩu bảy ngôi dùng định hướng từ thời cổ đại, hệ thống BeiDou được triển khai theo ba bước: BDS-1 thử nghiệm nội địa (2000), BDS-2 phủ sóng châu Á–Thái Bình Dương (2012) và BDS-3 hoàn thiện chòm vệ tinh toàn cầu ngày 31/7/2020. Điểm khác biệt kỹ thuật của BeiDou so với GPS là kiến trúc quỹ đạo lai (MEO, IGSO và GEO) kết hợp năng lực truyền tin ngắn hai chiều qua vệ tinh (Short Message Communication), phục vụ đắc lực cho tàu cá đánh bắt xa bờ, cứu hộ thiên tai và nông nghiệp chính xác.'
        },
        {
          heading: '2. Trạm Vũ trụ Thiên Cung (Tiangong): Cấu hình chữ T vận hành thường trực',
          body: 'Do không tham gia Trạm Vũ trụ Quốc tế (ISS), Trung Quốc tự phát triển Trạm Thiên Cung ở quỹ đạo thấp (~400 km). Chỉ trong 19 tháng (từ phóng mô-đun lõi Thiên Hòa tháng 4/2021 đến hai mô-đun thí nghiệm Vấn Thiên và Mộng Thiên năm 2022), cấu hình chữ T hoàn chỉnh được lắp ghép thành công nhờ tên lửa hạng nặng Trường Chinh 5B, duy trì luân phiên phi hành đoàn 3 người (các sứ mệnh Thần Châu) tiến hành hàng trăm thí nghiệm vi trọng lực về vật liệu, sinh học và y học không gian.'
        },
        {
          heading: '3. Chương trình Thám hiểm Mặt Trăng Hằng Nga (Chang\'e) và Sao Hỏa Thiên Vấn',
          body: 'Chương trình Hằng Nga thực hiện đúng lộ trình "Vòng quanh – Hạ cánh – Mang mẫu về": Hằng Nga 1 (2007) bay quanh Mặt Trăng; Hằng Nga 3 (2013) đưa xe tự hành Thỏ Ngọc (Yutu) đáp xuống; Hằng Nga 4 (1/2019) lần đầu tiên trong lịch sử nhân loại hạ cánh mềm xuống mặt khuất (far side) Mặt Trăng nhờ vệ tinh tiếp âm Thước Kiều; Hằng Nga 5 (12/2020) mang về 1.731 g mẫu đất Mặt Trăng trẻ nhất từng biết; và Hằng Nga 6 (6/2024) lần đầu tiên mang 1.935,3 g mẫu đất đá từ bồn địa Nam Cực–Aitken ở mặt khuất Mặt Trăng về Trái Đất. Trên hướng sao Hỏa, sứ mệnh Thiên Vấn 1 (5/2021) hoàn thành cùng lúc ba mục tiêu bay quỹ đạo, hạ cánh và vận hành xe tự hành Chúc Dung ngay trong lần thử đầu tiên.'
        },
        {
          heading: '4. Thương mại hóa Hàng không (C919) và Vũ trụ Tư nhân',
          body: 'Song song vũ trụ nhà nước (CNSA), lĩnh vực hàng không dân dụng đánh dấu cột mốc máy bay thân hẹp C919 của COMAC chính thức bay thương mại từ tháng 5/2023, trong khi làn sóng doanh nghiệp vũ trụ tư nhân (LandSpace với tên lửa chạy khí methane–oxy lỏng Zhuque-2 năm 2023) bắt đầu thử nghiệm tên lửa tái sử dụng.'
        }
      ],
      theoreticalFramework: 'Trong nghiên cứu chính sách khoa học – công nghệ, chương trình không gian Trung Quốc minh họa mô hình "công trình hệ thống đa thập kỷ theo giai đoạn" (phased systems engineering — như Dự án 921 và Hằng Nga Tam bộ tẩu): đặt mục tiêu từng bước có thể kiểm chứng, bảo đảm tính liên tục ngân sách và kết nối niềm tự hào văn hóa truyền thống vào truyền thông khoa học đại chúng.',
      terminologyAndLiushu: [
        { hanzi: '宙', pinyin: 'zhòu', hanViet: 'Trụ', liushu: 'Hình thanh', gloss: 'Gồm bộ Miên (宀) và chữ Do (由); theo "Hoài Nam Tử", Vũ (宇) là không gian bốn phương trên dưới, Trụ (宙) là thời gian xưa nay — hợp thành "Vũ trụ".' },
        { hanzi: '航', pinyin: 'háng', hanViet: 'Hàng', liushu: 'Hình thanh', gloss: 'Gồm bộ Chu (舟: thuyền) và chữ Kháng (亢); từ đi thuyền trên biển ("Hàng hải") mở rộng sang "Hàng không" và "Hàng thiên" (du hành vũ trụ).' },
        { hanzi: '穹', pinyin: 'qióng', hanViet: 'Khung', liushu: 'Hình thanh', gloss: 'Gồm bộ Huyệt (穴: vòm cao) và chữ Cung (弓: hình vòng cung); chỉ vòm trời bao la ("Thương khung").' },
        { hanzi: '星', pinyin: 'xīng', hanViet: 'Tinh', liushu: 'Hình thanh', gloss: 'Gồm bộ Nhật (日: ánh sáng) và chữ Sinh (生); chỉ các vì sao và vệ tinh nhân tạo ("Vệ tinh").' },
        { hanzi: '探', pinyin: 'tàn', hanViet: 'Thám', liushu: 'Hình thanh', gloss: 'Gồm bộ Thủ (扌) và chữ Thâm (罙); vươn tay tìm hiểu sâu xa ("Thám nguyệt" — thám hiểm Mặt Trăng).' }
      ],
      primarySources: [
        PQ(
          '《楚辞·天问》（战国·屈原）',
          'Sở Từ — Thiên Vấn (Khuất Nguyên, Chiến Quốc — nguồn gốc tên sứ mệnh Sao Hỏa Tianwen)',
          'Songs of Chu, Heavenly Questions (Tianwen) — Qu Yuan',
          '遂古之初，谁传道之？上下未形，何由考之？',
          'Suìgǔ zhī chū, shuí chuándào zhī? Shàngxià wèixíng, héyóu kǎo zhī?',
          'Toại cổ chi sơ, thùy truyền đạo chi? Thượng hạ vị hình, hà do khảo chi?',
          'Thuở thái cổ ban đầu, ai là người truyền kể lại? Khi trời đất trên dưới chưa thành hình, dựa vào đâu để khảo cứu?',
          'At the dawn of remote antiquity, who transmitted the tale? Before above and below took form, by what means can it be investigated?'
        ),
        PQ(
          '《2021中国的航天》白皮书（中国国务院新闻办公室，2022）',
          'Sách Trắng "Hàng không Vũ trụ Trung Quốc 2021" (Văn phòng Thông tin Quốc vụ viện, 2022)',
          'China\'s Space Program: A 2021 Perspective (SCIO White Paper, 2022)',
          '探索浩瀚宇宙，发展航天事业，建设航天强国，是中国不懈追求的航天梦。',
          'Tànsuǒ hàohàn yǔzhòu, fāzhǎn hángtiān shìyè, jiànshè hángtiān qiángguó, shì Zhōngguó bùxiè zhuīqiú de hángtiānmèng.',
          'Thám sách hạo hãn vũ trụ, phát triển hàng thiên sự nghiệp, kiến thiết hàng thiên cường quốc, thị Trung Quốc bất giải truy cầu đích hàng thiên mộng.',
          'Khám phá vũ trụ bao la, phát triển sự nghiệp hàng không vũ trụ là mục tiêu theo đuổi bền bỉ của Trung Quốc.',
          'To explore the vast cosmos and develop the space industry is an enduring aspiration of China\'s space program.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam và Trung Quốc đều có truyền thuyết văn hóa dân gian chung quanh ánh trăng (Chú Cuội – Chị Hằng / Hằng Nga – Thỏ Ngọc) và đang mở rộng hợp tác khoa học vũ trụ ứng dụng (như chia sẻ dữ liệu ảnh vệ tinh viễn thám phòng chống thiên tai và ứng dụng đa hệ thống định vị GPS/BeiDou/Galileo trong vận tải, nông nghiệp thông minh).',
      additionalReferences: [
        'State Council Information Office of China (2022), China\'s Space Program: A 2021 Perspective.',
        'China National Space Administration (CNSA) Official Press Releases on Chang\'e-5 (2020) and Chang\'e-6 (2024).',
        'BeiDou Navigation Satellite System Official Portal (en.beidou.gov.cn).'
      ],
      conclusion: 'Từ Đông Phương Hồng 1 đến Bắc Đẩu-3, Trạm Thiên Cung và sứ mệnh Hằng Nga 6 lấy mẫu mặt khuất Mặt Trăng, chương trình vũ trụ đương đại Trung Quốc vừa đánh dấu năng lực làm chủ công nghệ hệ thống phức tạp, vừa cho thấy cách biểu tượng thần thoại cổ điển được thổi hồn mới vào kỷ nguyên không gian.'
    }
  ];

  window.CCE_ARTICLES = window.CCE_ARTICLES || [];
  var existingIds = {};
  var i;
  var HERO_MAP = {
    "xia-shang-zhou-oracle-bones-rituals": "assets/images/museum/houmuwu-ding.jpg",
    "qin-institutional-standardization": "assets/images/articles_v8/qin-weights-measures.jpg",
    "song-dynasty-urban-science-renaissance": "assets/images/paintings/21_qingming_shanghe.jpg",
    "grand-canal-dujiangyan-hydraulic-empire": "assets/images/articles/hero-four-inventions.jpg",
    "modern-china-transformation-1840-1949": "assets/images/articles/hero-beijing-shanghai.jpg",
    "sixteen-ancient-capitals-geopolitics": "assets/images/articles_v8/ancient-capitals-luoyang.jpg",
    "tea-horse-road-southwest-corridor": "assets/images/articles_v8/tea-horse-caravan.jpg",
    "chinese-fermentation-spices-culinary-geography": "assets/images/articles/hero-chinese-cuisines.jpg",
    "chinese-liquor-culture-baijiu-huangjiu": "assets/images/articles/hero-chinese-banquet.jpg",
    "five-sacred-mountains-buddhist-peaks": "assets/images/articles_v8/five-sacred-mountains.jpg",
    "dunhuang-mogao-buddhist-grotto-art": "assets/images/articles_v8/dunhuang-nine-story.jpg",
    "xiqu-stagecraft-face-masks-tuong": "assets/images/opera/op-16.jpg",
    "five-vernacular-architecture-styles": "assets/images/articles_v8/vernacular-architecture-mix.jpg",
    "ming-qing-fiction-hongloumeng-anatomy": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "lacquerware-silk-woodblock-new-year-prints": "assets/images/articles/hero-laozihao-craft.jpg",
    "pre-qin-legalism-xunzi-hanfeizi": "assets/images/articles/hero-hundred-schools.jpg",
    "song-ming-neo-confucianism-zhu-wang": "assets/images/articles/hero-confucianism.jpg",
    "chinese-chan-buddhism-aesthetics": "assets/images/articles_v8/chan-aesthetics-grotto.jpg",
    "mohism-logic-optics-ethics": "assets/images/articles_v8/mohism-optical-treatise.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/articles_v8/daoism-wudang-palace.jpg",
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/articles_v8/truc-lam-yen-tu.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/articles_v8/historiography-shiji.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/articles_v8/digital-payments-qr.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/articles_v8/china-aerospace-station.jpg",
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/articles_v8/global-enterprises-cbd.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/articles_v8/b2b-legal-contracts.jpg",
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/articles_v8/tiantan-hall-prayer.jpg",
    "jiuzhaigou-travertine-karst": "assets/images/museum/jiuzhaigou-five-flower-lake.jpg",
    "zhangjiajie-wulingyuan-sandstone-pillars": "assets/images/articles_v8/zhangjiajie-tianzi.jpg"
  };
  var arrName = typeof ARTICLES_V3_PART1A !== "undefined" ? ARTICLES_V3_PART1A
    : typeof ARTICLES_V3_PART1B !== "undefined" ? ARTICLES_V3_PART1B
    : typeof ARTICLES_V3_PART2A !== "undefined" ? ARTICLES_V3_PART2A
    : typeof ARTICLES_V3_PART2B !== "undefined" ? ARTICLES_V3_PART2B
    : typeof ARTICLES_V3_PART3A !== "undefined" ? ARTICLES_V3_PART3A
    : typeof ARTICLES_V3_PART3B !== "undefined" ? ARTICLES_V3_PART3B
    : typeof ARTICLES_V3_PART4 !== "undefined" ? ARTICLES_V3_PART4
    : typeof ARTICLES_V3_PART5A !== "undefined" ? ARTICLES_V3_PART5A
    : typeof ARTICLES_V3_PART5B !== "undefined" ? ARTICLES_V3_PART5B : [];
  function normRefItem(r, isEn) {
    if (r && typeof r === "object") {
      return {
        author: r.author || "Tư liệu Chuyên khảo",
        date: r.date || r.year || "2026",
        title: r.title || "",
        url: r.url || "",
        sourceType: r.sourceType || "academic",
        verificationNote: r.verificationNote || r.note || ""
      };
    }
    var str = String(r || "").trim();
    var mYear = str.match(/\(([^)]{3,18})\)/);
    var firstComma = str.indexOf(",");
    var authorPart = firstComma > 0 ? str.slice(0, firstComma).replace(/\([^)]+\)/g, "").trim() : (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo");
    var titlePart = firstComma > 0 ? str.slice(firstComma + 1).trim() : str;
    return {
      author: authorPart || (isEn ? "Scholarly Reference" : "Tư liệu Chuyên khảo"),
      date: mYear ? mYear[1] : (isEn ? "Archival" : "Kinh điển / Khảo cứu"),
      title: titlePart || str,
      url: "",
      sourceType: "academic",
      verificationNote: isEn ? "Verified monograph bibliography" : "Tài liệu tham khảo đối chiếu chuyên luận"
    };
  }
  for (i = 0; i < arrName.length; i++) {
    var art = arrName[i];
    if (!art.references && Array.isArray(art.additionalReferences)) {
      art.references = art.additionalReferences.map(function (r) { return normRefItem(r, false); });
    } else if (Array.isArray(art.references)) {
      art.references = art.references.map(function (r) { return normRefItem(r, false); });
    }
    if (!art.heroImage && HERO_MAP[art.id]) {
      art.heroImage = { src: HERO_MAP[art.id], caption: art.titleVi || "", credit: "Chinese Culture Explorer Archival Collection" };
    }
    if (Array.isArray(art.terminologyAndLiushu)) {
      for (var tIdx = 0; tIdx < art.terminologyAndLiushu.length; tIdx++) {
        var tm = art.terminologyAndLiushu[tIdx];
        if (!tm.traditional) tm.traditional = tm.hanzi;
        if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "Lục thư";
        if (!tm.radicalAnalysis) tm.radicalAnalysis = tm.gloss || "";
        if (!tm.meaningVi) tm.meaningVi = tm.gloss || "";
      }
    }
  }
  var existingIdxById = {};
  for (i = 0; i < window.CCE_ARTICLES.length; i++) {
    if (window.CCE_ARTICLES[i] && window.CCE_ARTICLES[i].id) {
      existingIds[window.CCE_ARTICLES[i].id] = true;
      existingIdxById[window.CCE_ARTICLES[i].id] = i;
    }
  }
  for (i = 0; i < ARTICLES_V3_PART3B.length; i++) {
    var na = ARTICLES_V3_PART3B[i];
    if (!existingIds[na.id]) {
      window.CCE_ARTICLES.push(na);
      existingIds[na.id] = true;
      existingIdxById[na.id] = window.CCE_ARTICLES.length - 1;
    } else if (window.CCE_ARTICLES[existingIdxById[na.id]] && (window.CCE_ARTICLES[existingIdxById[na.id]]._v23Stub || window.CCE_ARTICLES[existingIdxById[na.id]]._v104Stub)) {
      window.CCE_ARTICLES[existingIdxById[na.id]] = na;
    }
  }
})();
