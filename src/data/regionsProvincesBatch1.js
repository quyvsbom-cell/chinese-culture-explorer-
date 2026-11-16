// ============================================================================
// 34-PROVINCE 12-DIMENSION ENCYCLOPEDIA — BATCH 1 (11 UNITS)
// 4 Municipalities (Bắc Kinh, Thiên Tân, Thượng Hải, Trùng Khánh)
// + 7 Provinces (Hà Bắc, Sơn Tây, Liêu Ninh, Cát Lâm, Hắc Long Giang, Giang Tô, Chiết Giang)
// Standard Mandarin + Hanyu Pinyin (Tone Marks) + Hán–Việt + Vietnamese
// Minimum 850–1,150 words per unit across all 12 Scholarly Dimensions
// ============================================================================

(function () {
  if (!window.CCE_REGIONS || !Array.isArray(window.CCE_REGIONS.provincesDirectory)) return;

  const UPGRADES = {
    "prov-beijing": {
      identity: {
        hanziSimplified: "北京市",
        hanziTraditional: "北京市",
        pinyin: "Běijīng Shì",
        hanViet: "Bắc Kinh Thị",
        adminCategory: "municipality",
        adminTypeFull: "Thành phố trực thuộc Trung ương (直辖市 Zhíxiáshì)",
        abbreviation: "京",
        abbreviationPinyin: "Jīng (Kinh)",
        abbreviationOrigin: "Chữ 京 (Kinh) nguyên nghĩa là gò đất cao dựng cung thất đế vương trong Giáp cốt văn; từ thời nhà Minh (Minh Thành Tổ dời đô năm 1421) xác lập danh xưng chính thức là Bắc Kinh (北京 – Kinh đô phương Bắc) phân biệt với Nam Kinh (南京 – Ứng Thiên Phủ), dùng 京 làm chữ viết tắt độc tôn cho Thủ đô.",
        capitalCity: "Trung tâm Chính trị & Thủ đô Cộng hòa Nhân dân Trung Hoa (Quận Đông Thành & Thông Châu)"
      },
      geographyAndClimate: {
        summary: "Nằm ở bậc thềm thứ ba cuối cùng trong cấu trúc 'Tam cấp giai thê' (三级阶梯) phía tây bắc Bình nguyên Hoa Bắc (华北平原 Huáběi Píngyuán), Bắc Kinh tựa lưng vào hình vòng cung khép kín của dãy Yến Sơn (燕山 Yānshān) phía bắc và dãy Thái Hành Sơn (太行山 Tàiháng Shān) phía tây, hướng mặt ra Biển Bột Hải ở phía đông nam. Địa thế 'hậu sơn tiền xuyên' được hệ thống sông Vĩnh Định Hà (永定河) và Triều Bạch Hà (潮白河) bồi tụ qua hàng vạn năm tạo thành 'Tiểu bình nguyên Bối Loan'. Khí hậu ôn đới gió mùa lục địa điển hình với bốn mùa phân minh: xuân khô hanh đôi khi có gió cát cao nguyên Mông Cổ, hạ nóng ẩm tập trung 75% lượng mưa, thu trời cao trong xanh được mệnh danh là mùa đẹp nhất Hoa Bắc, và đông lạnh khô khắc nghiệt dưới ảnh hưởng cao áp Siberia.",
        causality: "Thế đất chữ C 'tả thanh long – hữu bạch hổ – hậu Huyền Vũ' giải thích tại sao qua năm vương triều lớn (Liêu, Kim, Nguyên, Minh, Thanh), Bắc Kinh được chọn làm kinh đô phòng thủ chống kỵ binh thảo nguyên đồng thời kiểm soát vùng nông nghiệp Hoa Bắc. Chính mùa đông kéo dài khắc nghiệt đã hun đúc kiến trúc Tứ Hợp Viện (四合院 Sìhéyuàn) tường dày chống rét quay mặt về hướng Nam đón nắng, sử dụng hệ thống sưởi ấm Khang (炕 Kàng) bằng gạch nung, và nền ẩm thực giàu nhiệt lượng từ thịt cừu, vịt quay béo ngậy cùng thói quen muối cải thảo tích trữ qua đông."
      },
      historicalEvolution: "Từ thế kỷ XI TCN thời Tây Chu, vùng đất này là phong ấp Kế Quốc (蓟国 Jìguó) và nước Yên (燕国) trong thời Xuân Thu – Chiến Quốc với kinh đô Kế Thành (蓟城). Thời Tần–Hán đặt Quảng Dương quận và U Châu (幽州 Yōuzhōu) – trọng trấn biên thùy đông bắc. Bước ngoặt địa – chính trị vĩ đại khởi đầu khi nhà Liêu nâng thành bồi đô Nam Kinh (938 CN), nhà Kim (1153) định làm Trung Đô (中都), Hốt Tất Liệt triều Nguyên quy hoạch mới hoàn toàn theo *Chu Lễ · Khảo Công Ký* thành Đại Đô (大都 Dàdū, 1272). Thời Minh Thành Tổ Chu Đệ (1403–1421), Tử Cấm Thành (紫禁城) và Trục Trung tâm (中轴线) dài 7,8 km được hoàn thiện, kéo dài sang triều Thanh (1644–1911) với hàng loạt hành cung Viên Minh Viên, Di Hòa Viên. Sau Phong trào Ngũ Tứ (五四运动, 1919) khởi phát từ Đại học Bắc Kinh và ngày 01/10/1949, Bắc Kinh giữ vững vị thế trái tim chính trị, học thuật và ngoại giao của Trung Quốc hiện đại.",
      culturalIdentity: "Văn hóa Bắc Kinh thuộc tiểu vùng Văn hóa Yên Triệu (燕赵文化) thăng hoa thành Văn hóa Kinh Phái (京派文化 Jīngpài Wénhuà): sự dung hợp uy nghi giữa lễ nghi cung đình Bát Kỳ Mãn–Hán, khí chất trầm mặc cổ kính của ngõ nhỏ Hồ Đồng (胡同 Hútòng), khẩu âm Quan thoại Bắc Kinh tròn vành rõ chữ kèm âm uốn lưỡi (Nhi hóa 儿化 Érhuà – nền tảng phát âm của Phổ thông thoại toàn quốc) và tính cách sảng khoái, trọng thể diện, hào hiệp bàn chuyện quốc sự ('Khản đại sơn' 侃大山 Kǎn dàshān). Văn hóa học thuật đặt trọng tâm vào trường đại học, viện nghiên cứu, nghệ thuật văn phòng tứ bảo ở Lưu Ly Xưởng và tinh thần bảo tồn di sản Trục Trung tâm UNESCO.",
      heritageAndLandmarks: [
        { hanzi: "故宫博物院 / 紫禁城", pinyin: "Gùgōng Bówùyuàn / Zǐjìnchéng", hanViet: "Cố Cung Bác Vật Viện / Tử Cấm Thành", nameVi: "Tử Cấm Thành Bắc Kinh (1420)", significance: "Quần thể cung điện gỗ cổ lớn nhất còn tồn tại trên thế giới (72 ha, hơn 980 tòa kiến trúc) phản ánh chuẩn mực vũ trụ quan Nho gia qua Điện Thái Hòa, Càn Thanh cung và hơn 1,86 triệu hiện vật." },
        { hanzi: "北京中轴线", pinyin: "Běijīng Zhōngzhóuxiàn", hanViet: "Bắc Kinh Trung Trục Tuyến", nameVi: "Trục Trung tâm Bắc Kinh (UNESCO 2024)", significance: "Đường trục lễ nghi dài 7,8 km từ Tháp Chuông – Tháp Trống qua Cảnh Sơn, Cố Cung, Thiên An Môn tới Cửa Vĩnh Định, kết tinh quy hoạch đô thị lý tưởng trong *Khảo Công Ký*." },
        { hanzi: "八达岭及慕田峪长城", pinyin: "Bādálǐng jí Mùtiányù Chángchéng", hanViet: "Bát Đạt Lĩnh cập Mộ Điền Dục Trường Thành", nameVi: "Vạn Lý Trường Thành đoạn Bắc Kinh", significance: "Hệ thống phòng tuyến quân sự kiên cố triều Minh bắc qua sống núi Yến Sơn với các ải hiểm yếu như Cư Dung Quan (居庸关)." },
        { hanzi: "天坛", pinyin: "Tiāntán", hanViet: "Thiên Đàn", nameVi: "Đàn Tế Trời Thiên Đàn (1420)", significance: "Tuyệt tác kiến trúc biểu tượng triết lý 'Thiên viên địa phương' (Trời tròn Đất vuông) qua Kỳ Niên Điện gỗ không đinh sắt và Hoàng Khung Vũ." },
        { hanzi: "颐和园", pinyin: "Yíhéyuán", hanViet: "Di Hòa Viên", nameVi: "Di Hòa Viên – Cung điện Mùa Hè", significance: "Đỉnh cao nghệ thuật tạo vườn hoàng gia Trung Hoa mô phỏng Tây Hồ Hàng Châu quanh hồ Côn Minh và núi Vạn Thọ." },
        { hanzi: "明十三陵", pinyin: "Míng Shísān Líng", hanViet: "Minh Thập Tam Lăng", nameVi: "Thập Tam Lăng triều Minh", significance: "Khu lăng tẩm phong thủy của 13 vị hoàng đế nhà Minh nép dưới dãy Thiên Thọ Sơn theo bố cục 'tựa núi nhìn sông'." }
      ],
      intangibleHeritage: "Quốc túy Kinh kịch (京剧 Jīngjù) hình thành vào cuối thế kỷ XVIII từ sự hội tụ Tứ đại Huy ban tiến kinh và Côn khúc phương Nam; Tướng thanh (相声 Xiàngshēng – tấu hài đối đáp Bắc Kinh); nghệ thuật thổi sáo diều, nặn tò he, tráng men Cảnh Thái Lam (景泰蓝 Jǐngtàilán – Pháp lang khắc dây đồng thời Minh Cảnh Thái); kỹ nghệ chế tác ngọc điêu Bắc Kinh và hội chợ miếu hội Xưởng Điện (厂甸庙会) dịp Xuân Tiết.",
      culinaryCulture: {
        styleOverview: "Ẩm thực Kinh Thái (京菜 Jīngcài) kết hợp tinh hoa Cung đình Thái y viện Minh–Thanh (Ngự thiện), ẩm thực Hoa Bắc Sơn Đông (Lỗ thái) và phong vị Hồi giáo Thanh Chân (cừu thảo nguyên Mông–Ninh).",
        signatureDishes: [
          { hanzi: "北京烤鸭", pinyin: "Běijīng kǎoyā", hanViet: "Bắc Kinh khảo áp (Vịt quay Bắc Kinh)", description: "Vịt trắng Bạch Kinh nuôi vỗ tự nhiên được bơm căng da, quét mạch nha rồi quay bằng gỗ cây ăn quả (nhãn/táo tàu ở Toàn Tụ Đức) hoặc lò kín (Tiện Nghi Phường), da giòn tan cuốn bánh tráng mỏng, tương đậu ngọt và hành hoa." },
          { hanzi: "老北京铜锅涮羊肉", pinyin: "Lǎo Běijīng tóngguō shuàn yángròu", hanViet: "Lão Bắc Kinh đồng oa xuyến dương nhục", description: "Lẩu nồi đồng đốt than hoa dùng nước lọc trong thả vài lát gừng hành, nhúng nhanh lát thịt cừu Nội Mông thái mỏng tang, chấm xốt vừng (芝麻酱) cùng đậu phụ thối và hoa hẹ muối." },
          { hanzi: "老北京炸酱面", pinyin: "Lǎo Běijīng zhájiàngmiàn", hanViet: "Lão Bắc Kinh trá tương miến", description: "Mì sợi kéo tay dẻo trộn xốt tương đậu vàng kho thịt ba chỉ băm nhỏ dậy mùi hồi hoa, ăn kèm 'Thất sắc thái mã' gồm dưa chuột, củ cải xanh, giá đỗ, đậu tương luộc." },
          { hanzi: "满汉全席点心 · 驴打滚", pinyin: "Lǘdǎgǔn", hanViet: "Lư đả cổn (Bánh nếp lăn bột đậu vàng)", description: "Món bánh cung đình và dân gian làm từ gạo nếp hấp, cuộn nhân đậu đỏ ngọt rồi lăn qua bột đậu tương rang thơm vàng như lừa con lăn bụi đất." },
          { hanzi: "豆汁儿配焦圈", pinyin: "Dòuzhīr pèi jiāoquān", hanViet: "Đậu trấp phối tiêu quyển", description: "Thức uống lên men tự nhiên từ bã đậu xanh làm miến mang vị chua đặc trưng của người Bắc Kinh gốc, thưởng thức nóng cùng bánh quẩy vòng giòn tan và dưa muối." }
        ]
      },
      economyAndIndustry: "GDP đạt hơn 4,37 nghìn tỷ NDT (~610 tỷ USD), tỷ trọng dịch vụ chiếm trên 84% (cao nhất Trung Quốc). Bắc Kinh không đi theo mô hình sản xuất đại trà mà giữ vai trò trung tâm tài chính quốc gia (Phố Tài Chính – Trụ sở Ngân hàng Nhân dân Trung Quốc, Ngân hàng Đầu tư Cơ sở Hạ tầng Châu Á AIIB), cái nôi R&D khoa học công nghệ hàng đầu Châu Á tại Trung Quan Thôn (中关村 Zhōngguāncūn – 'Thung lũng Silicon phương Đông') với các trụ sở Baidu, ByteDance, Xiaomi, Kuaishou, Zhipu AI, Moonshot Kimi cùng mạng lưới hạ tầng số, hàng không (Sân bay Quốc tế Đại Hưng) và dịch vụ pháp lý – kiểm toán quốc tế.",
      vietnamConnectivity: "Trong lịch sử, Bắc Kinh là điểm đến của các đoàn sứ bộ Thăng Long – Hà Nội (như Lê Quý Đôn, Ngô Thì Nhậm, Phan Huy Chú) với các tập *Bắc hành tạp lục*, lưu dấu giao lưu thi họa, thư pháp và ấn loát Hán Nôm. Hiện đại, Bắc Kinh là trung tâm học thuật thu hút số lượng nghiên cứu sinh Việt Nam đông bậc nhất thông qua học bổng CSC tại Đại học Bắc Kinh (北京大学 – 985/Song Nhất Lưu), Đại học Thanh Hoa (清华大学 – 985/C9), Đại học Nhân dân Trung Quốc (中国人民大学), Đại học Ngôn ngữ Bắc Kinh (北语 – nơi đào tạo Hán ngữ và Hán học hàng đầu cho sinh viên Việt Nam) và Đại học Sư phạm Bắc Kinh (北师大).",
      notableFigures: [
        { hanzi: "祖冲之", pinyin: "Zǔ Chōngzhī", hanViet: "Tổ Xung Chi", lifespan: "429–500", contribution: "Nhà toán học, thiên văn học vĩ đại quê gốc Phạm Dương (nay gần Bắc Kinh) tính chính xác số Pi tới 7 chữ số thập phân (3,1415926–3,1415927), sớm hơn châu Âu hơn 1.000 năm." },
        { hanzi: "曹雪芹", pinyin: "Cáo Xuěqín", hanViet: "Tào Tuyết Cần", lifespan: "k. 1715–1763", contribution: "Tác giả kiệt tác *Hồng Lâu Mộng* (红楼梦), sáng tác phần lớn cuộc đời trong nỗi cô tịch tại Tây Sơn (ngoại ô Bắc Kinh)." },
        { hanzi: "老舍", pinyin: "Lǎo Shě", hanViet: "Lão Xá (Thư Khánh Xuân)", lifespan: "1899–1966", contribution: "Văn hào hiện đại xuất thân gia đình Mãn tộc nghèo ở Bắc Kinh, tác giả *Lạc Đà Tường Tử* và kịch *Trà Quán* phản ánh linh hồn người lao động Kinh thành." },
        { hanzi: "梅兰芳", pinyin: "Méi Lánfāng", hanViet: "Mai Lan Phương", lifespan: "1894–1961", contribution: "Bậc thầy Kinh kịch hàng Thanh Y đưa nghệ thuật sân khấu Trung Hoa lên trình diễn tại Mỹ, Liên Xô và Nhật Bản, tạo thành 'Hệ thống biểu diễn Mai Lan Phương'." }
      ],
      travelAndLogistics: "Mùa đẹp nhất là mùa Thu vàng lá ngân hạnh (cuối tháng 9 – đầu tháng 11) và mùa Xuân (tháng 4 – tháng 5). Đầu mối hàng không gồm Sân bay Thủ Đô (PEK) và Sân bay Đại Hưng (PKX); mạng lưới đường sắt cao tốc từ Ga Bắc Kinh Nam (đi Thượng Hải trong 4h30), Ga Bắc Kinh Tây (đi Tây An, Trịnh Châu, Vũ Hán) và Bắc Kinh Bắc (đi Bát Đạt Lĩnh, Trương Gia Khẩu). Gợi ý hành trình 4 ngày: Ngày 1 Cố Cung – Cảnh Sơn – Bắc Hải; Ngày 2 Thiên An Môn – Bảo tàng Quốc gia – Thiên Đàn – Tiền Môn; Ngày 3 Trường Thành Mộ Điền Dục – Công viên Olympic; Ngày 4 Di Hòa Viên – Khu Hồ Đồng Nam La Cổ Hạng & 798 Art District.",
      mapCoordinates: { mapX: 586, mapY: 184, historicalCapitalEra: "Yên · Liêu · Kim · Nguyên Đại Đô · Minh · Thanh · Thủ đô", economicCorridor: "Kinh–Tân–Ký (京津冀)" }
    },
    "prov-tianjin": {
      identity: {
        hanziSimplified: "天津市",
        hanziTraditional: "天津市",
        pinyin: "Tiānjīn Shì",
        hanViet: "Thiên Tân Thị",
        adminCategory: "municipality",
        adminTypeFull: "Thành phố trực thuộc Trung ương (直辖市 Zhíxiáshì)",
        abbreviation: "津",
        abbreviationPinyin: "Jīn (Tân)",
        abbreviationOrigin: "Tên Thiên Tân nghĩa là 'Bến đò của Thiên tử' (天子津渡 Tiānzǐ jīndù), do Minh Thành Tổ Chu Đệ đặt năm 1404 sau khi vượt sông Hải Hà tại Trực Cô tiến quân xuống Nam Kinh; từ đó chữ 津 (bến sông/cảng khẩu) trở thành ký hiệu viết tắt.",
        capitalCity: "Khu Hòa Bình & Tân Hải Tân Khu (trung tâm đô thị cửa biển Hoa Bắc)"
      },
      geographyAndClimate: {
        summary: "Nằm ở hạ lưu cực đông của Bình nguyên Hoa Bắc nơi 5 nhánh lớn thuộc hệ thống sông Hải Hà (海河 Hǎihé) hội tụ tại Tam Xá Hà Khẩu trước khi đổ ra Vịnh Bột Hải (渤海湾), cách Bắc Kinh chỉ 120 km về phía đông nam. Địa hình đồng bằng ven biển thấp bằng phẳng ở bậc thềm thứ ba, phía bắc chạm chân dãy Yến Sơn tại Kế Châu. Khí hậu ôn đới gió mùa chịu điều tiết nhẹ của vịnh Bột Hải nên biên độ nhiệt dịu hơn Bắc Kinh.",
        causality: "Vị trí 'Ngũ hà hạ sao, Cửu hà yếu tân' (chín dòng sông quy về một bến) biến Thiên Tân từ thế kỷ XV thành cảng ngũ cốc huyết mạch của Đại Vận Hà (大运河) tiếp tế lương thực cho Kinh thành, rồi trở thành cửa ngõ hàng hải của Thủ đô Bắc Kinh thời cận đại. Giao thoa thủy – hải đã tạo nên văn hóa 'Ngũ phương tạp xứ' phóng khoáng, hài hước kiểu dân thương cảng, ẩm thực giàu hải vị sông–biển (tôm, cua, cá thu) và kiến trúc Ngũ Đại Đạo pha trộn Á–Âu độc nhất Hoa Bắc."
      },
      historicalEvolution: "Khởi thủy là làng chài và đồn muối Trực Cô Trại (直沽寨) thời Tống–Kim; năm 1404 nhà Minh chính thức xây thành Thiên Tân Vệ (天津卫) bảo vệ vận tải lương thảo đường biển và kênh đào lên Bắc Kinh. Sau năm 1860, Thiên Tân trở thành thương cảng nhượng địa đa quốc gia lớn nhất miền Bắc, khởi phát phong trào Dương Vụ Vận Động (洋务运动) của Lý Hồng Chương (Xưởng cơ khí Bắc Dương, Đại học Bắc Dương 1895 – tiền thân Đại học Thiên Tân, trường đại học hiện đại đầu tiên Trung Quốc). Thời Dân Quốc, đây là nơi lưu trú của nhiều chính khách, văn nhân và phế đế Phổ Nghi; ngày nay là trọng điểm Tân Khu Tân Hải trong vùng Kinh–Tân–Ký.",
      culturalIdentity: "Văn hóa Thiên Tân gọi là Tân Vị Văn Hóa (津味文化 Jīnwèi Wénhuà): một nhánh văn hóa thị dân thương cảng hài hước, tự trào và trọng nghĩa khí sông nước. Phương ngôn Thiên Tân nổi tiếng nhịp điệu 'Nhàn thanh – Giáng điệu' đặc sắc, là cái nôi hàng đầu của nghệ thuật Tướng thanh và Khoái bản. Tinh thần cởi mở với thương mại cận đại đồng thời lại lưu giữ nồng hậu tín ngưỡng Thiên Hậu (Thiên Hậu Cung 1326 – một trong ba miếu Mazu lâu đời nhất Trung Quốc).",
      heritageAndLandmarks: [
        { hanzi: "五大道历史风貌建筑区", pinyin: "Wǔdàdào Lìshǐ Fēngmào Jiànzhùqū", hanViet: "Ngũ Đại Đạo Lịch sử Phong mạo Kiến trúc khu", nameVi: "Khu Kiến trúc Di sản Ngũ Đại Đạo", significance: "Bảo tàng kiến trúc thế giới lộ thiên với hơn 2.000 biệt thự phong cách Anh, Pháp, Ý, Đức, Tây Ban Nha xây dựng từ đầu thế kỷ XX." },
        { hanzi: "天津古文化街与天后宫", pinyin: "Tiānjīn Gǔwénhuàjiē yǔ Tiānhòugōng", hanViet: "Thiên Tân Cổ Văn hóa Nhai dữ Thiên Hậu Cung", nameVi: "Phố Văn hóa Cổ & Miếu Thiên Hậu (1326)", significance: "Trung tâm tín ngưỡng thủy thủ Mazu lâu đời nhất miền Bắc và cái nôi thương mại dân gian từ thời Nguyên–Minh." },
        { hanzi: "黄崖关长城", pinyin: "Huángyáguān Chángchéng", hanViet: "Hoàng Nhai Quan Trường Thành", nameVi: "Trường Thành Hoàng Nhai Quan (Kế Châu)", significance: "Cửa ải hiểm yếu thời Bắc Tề và được Tích Kế Quang tu bổ kiên cố thời Minh với thiết kế Thủy Quan cầu cống xuyên thành." },
        { hanzi: "独乐寺", pinyin: "Dúlèsì", hanViet: "Độc Lạc Tự", nameVi: "Chùa Độc Lạc (Thời Liêu, 984 CN)", significance: "Một trong ba quần thể kiến trúc gỗ cổ đời Tống–Liêu còn nguyên vẹn nhất Trung Quốc, nổi bật với tượng Quán Âm Mười một mặt cao 16 m." },
        { hanzi: "盘山风景名胜区", pinyin: "Pánshān Fēngjǐng Míngshèngqū", hanViet: "Bàn Sơn Phong cảnh Danh thắng khu", nameVi: "Danh sơn Bàn Sơn (Kế Châu)", significance: "Từng được vua Càn Long khen ngợi 'Tảo tri hữu Bàn Sơn, hà tất hạ Giang Nam', lưu giữ nhiều tháp cổ và tự viện thời Đường–Liêu." }
      ],
      intangibleHeritage: "Tranh Tết mộc bản Dương Liễu Thanh (杨柳青年画 Yángliǔqīng niánhuà – đứng đầu Tứ đại danh họa Tết dân gian Trung Quốc); Tượng đất nung 'Nê Nhân Trương' (泥人张) sống động như thật; Tướng thanh Thiên Tân tại các trà quán cổ; Nghệ thuật khắc gạch hoa văn; và Diều Ngụy Thị (风筝魏).",
      culinaryCulture: {
        styleOverview: "Tân Thái (津菜 Jīncài) thuộc nhánh Hoa Bắc đậm đà mặn mà, khéo kết hợp hải sản vịnh Bột Hải, thủy sản sông Hải Hà với kỹ thuật làm bánh điểm tâm bữa sáng phong phú bậc nhất cả nước ('Thiên Tân tam tuyệt').",
        signatureDishes: [
          { hanzi: "狗不理包子", pinyin: "Gǒubùlǐ bāozi", hanViet: "Cẩu Bất Lý bao tử (Bánh bao 18 nếp gấp)", description: "Bánh bao nhân thịt lợn băm và nước dùng hầm xương đông lạnh tan chảy khi hấp, nổi tiếng từ năm 1858 với đúng 18 nếp mí đều đặn như cánh hoa cúc." },
          { hanzi: "十八街麻花", pinyin: "Shíbājiē máhuā", hanViet: "Thập Bát Nhai ma hoa (Bánh quẩy xoắn Quế Phát Tường)", description: "Bánh xoắn nhiều sợi chiên giòn có nhân thập cẩm mứt quất, vừng, quế hoa giòn thơm giữ được lâu không ỉu." },
          { hanzi: "耳朵眼炸糕", pinyin: "Ěrduǒyǎn zhágāo", hanViet: "Nhĩ Đóa Nhãn trá cao (Bánh rán nếp nhân đậu)", description: "Vỏ gạo nếp vàng lên men tự nhiên chiên giòn rụm bọc nhân đậu đỏ ngào đường hoa quế mịn tan." },
          { hanzi: "煎饼馃子", pinyin: "Jiānbǐng guǒzi", hanViet: "Tiễn bính quả tử (Bánh kếp bột đậu xanh Thiên Tân)", description: "Món sáng quốc dân của người Thiên Tân dùng 100% bột đậu xanh xay tráng mỏng với trứng gà, kẹp quẩy hoặc bánh đa chiên (báo tì), phết tương đậu và chao đỏ." },
          { hanzi: "罾蹦鲤鱼", pinyin: "Zēngbèng lǐyú", hanViet: "Tăng Băng lý ngư (Cá chép nguyên vảy chiên giòn)", description: "Món đại yến Hải Hà nổi tiếng giữ nguyên vảy cá chép chiên lửa lớn cho phồng giòn rộp rồi rưới xốt chua ngọt nóng bốc khói." }
        ]
      },
      economyAndIndustry: "Cảng Thiên Tân (天津港) là cảng tổng hợp nhân tạo nước sâu lớn hàng đầu thế giới và là cửa ngõ hàng hải chính của toàn bộ vùng Kinh–Tân–Ký, Nội Mông, Sơn Tây. Thành phố sở hữu dây chuyền lắp ráp cuối cùng (FAL) máy bay Airbus A320 ngoài châu Âu tại Khu Tân Hải, chuỗi công nghiệp hàng không vũ trụ (tên lửa Trường Chinh 5), đóng tàu, hóa dầu, xe năng lượng mới và trung tâm tài chính thuê mua máy bay – tàu biển hàng đầu Trung Quốc.",
      vietnamConnectivity: "Hàng hải container trực tiếp từ Cảng Hải Phòng đến Cảng Thiên Tân phục vụ giao thương thiết bị công nghiệp, hóa chất và nông sản miền Bắc Việt Nam sang Thủ đô Bắc Kinh và Hoa Bắc. Về giáo dục, Đại học Thiên Tân (天津大学 – 985/C9 Engineering/Song Nhất Lưu), Đại học Nam Khai (南开大学 – 985/Song Nhất Lưu, cái nôi toán học của Trần Tỉnh Thân và nơi Chu Ân Lai theo học), và Đại học Trung y dược Thiên Tân (được UNESCO công nhận đào tạo Y học cổ truyền) có nhiều sinh viên Việt Nam theo học ngành Kỹ thuật hóa chất, Kiến trúc, Kinh tế và Y học cổ truyền.",
      notableFigures: [
        { hanzi: "严复", pinyin: "Yán Fù", hanViet: "Nghiêm Phục", lifespan: "1854–1921", contribution: "Nhà tư tưởng Khai sáng dịch *Thiên diễn luận* và *Quốc phú luận* tại Thiên Tân, đề xướng chuẩn dịch thuật bất hủ 'Tín – Đạt – Nhã' (信达雅)." },
        { hanzi: "张伯苓", pinyin: "Zhāng Bólíng", hanViet: "Trương Bá Linh", lifespan: "1876–1951", contribution: "Nhà giáo dục lớn sáng lập hệ thống trường Nam Khai (1904) và Đại học Nam Khai (1919), người tiên phong phong trào Olympic tại Trung Quốc." },
        { hanzi: "曹禺", pinyin: "Cáo Yǔ", hanViet: "Tào Ngu", lifespan: "1910–1996", contribution: "Ông tổ kịch nói hiện đại Trung Quốc với hai vở bi kịch gia tộc kinh điển *Lôi Vũ* (雷雨) và *Nhật Xuất* (日出) lấy bối cảnh đô thị Thiên Tân." }
      ],
      travelAndLogistics: "Mùa xuân – thu từ tháng 4–6 và 9–11 dịu mát rất thích hợp đi bộ ngắm kiến trúc và du thuyền sông Hải Hà về đêm. Tàu cao tốc liên thành phố (Kinh–Tân Thành Tế) nối Bắc Kinh Nam tới Ga Thiên Tân chỉ mất 30 phút! Sân bay Quốc tế Tân Hải (TSN). Hành trình gợi ý 3 ngày: Ngày 1 Ngũ Đại Đạo – Từ Phòng Tử (Nhà sứ) – Phố Ý; Ngày 2 Phố Văn hóa Cổ – Thiên Hậu Cung – Vòng quay Thiên Tân Chi Nhãn (Tianjin Eye) trên cầu Vĩnh Lạc; Ngày 3 Khu Tân Hải (Thư viện Tân Hải hình con mắt) hoặc lên Kế Châu thăm Chùa Độc Lạc.",
      mapCoordinates: { mapX: 618, mapY: 204, historicalCapitalEra: "Trọng trấn Vệ sở Đại Vận Hà · Thương cảng Kinh–Kỳ", economicCorridor: "Kinh–Tân–Ký (京津冀)" }
    },
    "prov-shanghai": {
      identity: {
        hanziSimplified: "上海市",
        hanziTraditional: "上海市",
        pinyin: "Shànghǎi Shì",
        hanViet: "Thượng Hải Thị",
        adminCategory: "municipality",
        adminTypeFull: "Thành phố trực thuộc Trung ương (直辖市 Zhíxiáshì)",
        abbreviation: "沪",
        abbreviationPinyin: "Hù (Hỗ)",
        abbreviationOrigin: "Chữ 沪 (Hỗ) hay 扈 bắt nguồn từ công cụ đánh cá cổ đại dùng rào tre đan dọc theo cửa sông Tô Châu Hà (Ngô Tùng Giang) thời Tấn–Đường gọi là 'Hỗ Độc' (扈渎), qua thời đại trở thành chữ 沪; ngoài ra Thượng Hải còn có nhã xưng 申 (Thân) từ đất phong của Xuân Thân Quân Hoàng Yết nước Sở thời Chiến Quốc.",
        capitalCity: "Trung tâm Tài chính – Thương mại Đông Á (Quận Hoàng Phố & Lục Gia Chủy Phố Đông)"
      },
      geographyAndClimate: {
        summary: "Tọa lạc ngay tại đỉnh cực đông của Tam giác châu thổ sông Trường Giang (长江三角洲 Chángjiāng Sānjiǎozhōu), mặt đông giáp Biển Đông Trung Hoa, nơi sông Hoàng Phố (黄浦江) hợp lưu cùng Ngô Tùng Giang chảy thẳng ra cửa sông Trường Giang. Địa hình phù sa bằng phẳng tuyệt đối ở bậc thềm thứ ba, cao trung bình chỉ 4 m so với mực nước biển, chằng chịt kênh rạch Giang Nam nối tới Thái Hồ. Khí hậu cận nhiệt đới hải dương bốn mùa rõ rệt với mùa mưa Mai Vũ (梅雨) vào tháng 6 và mùa thu rực rỡ.",
        causality: "Nắm giữ vị trí chiến lược 'T hình' hiếm có trên bản đồ thế giới — giao điểm giữa trục đường bờ biển Bắc–Nam Trung Hoa và cửa ngõ thủy vận dài 6.300 km của lưu vực sông Trường Giang vào tận nội địa Tứ Xuyên — Thượng Hải tất yếu vươn mình từ một làng chài đánh cá thành siêu cảng thương mại hàng đầu Thái Bình Dương. Lối sống đô thị mặt bằng chật hẹp dọc các con ngõ nhỏ đã sinh ra nhà liền kề Thạch Khố Môn (石库门 Shíkùmén) kết hợp tứ hợp viện Giang Nam với cổng đá chạm khắc phương Tây, hun đúc tinh thần Hải Phái thực dụng, chuẩn xác hợp đồng và dung nạp toàn cầu."
      },
      historicalEvolution: "Thời Xuân Thu thuộc đất Ngô – Sở (đất phong Xuân Thân Quân năm 248 TCN); năm 1292 triều Nguyên lập huyện Thượng Hải. Năm 1843 sau Điều ước Nam Kinh, Thượng Hải mở cửa thành thương cảng quốc tế với Tô giới Anh–Mỹ (Tô giới Công cộng) và Tô giới Pháp. Đầu thế kỷ XX, Bến Thượng Hải (外滩 Wàitān) trở thành trung tâm ngân hàng, điện ảnh, báo chí (Thương vụ Ấn thư quán), xuất bản và trào lưu văn học Tân Thanh Niên lớn nhất Viễn Đông ('Đông phương Ba Lê'). Sau khi khu mới Phố Đông (浦东新区) mở cửa năm 1990 dưới thời Đặng Tiểu Bình, Thượng Hải bứt phá với cụm cao ốc Lục Gia Chủy và Khu Thương mại Tự do đầu tiên Trung Quốc (2013).",
      culturalIdentity: "Thượng Hải là biểu tượng đỉnh cao của Văn hóa Hải Phái (海派文化 Hǎipài Wénhuà): tôn trọng ranh giới cá nhân, khế ước thương mại minh bạch, trọng chữ tín, nhạy bén thời trang – tài chính và hòa quyện sâu sắc giữa nền tảng văn hóa Ngô Việt Giang Nam tinh tế (ẩm thực thanh ngọt, thưởng trà, nghe Bình Đàn Tô Châu) với kỹ trị quản trị hiện đại kiểu phương Tây.",
      heritageAndLandmarks: [
        { hanzi: "外滩万国建筑博览群", pinyin: "Wàitān Wànguó Jiànzhù Bólǎnqún", hanViet: "Ngoại Than Vạn Quốc Kiến trúc Bác lãm quần", nameVi: "Quần thể Kiến trúc Bến Thượng Hải", significance: "52 tòa nhà phong cách Gothic, Baroque, Tân Cổ điển và Art Deco dọc sông Hoàng Phố ghi dấu lịch sử tài chính Á–Âu đầu thế kỷ XX." },
        { hanzi: "豫园", pinyin: "Yùyuán", hanViet: "Dự Viên", nameVi: "Vườn cổ Dự Viên (1559)", significance: "Khu vườn cổ điển Giang Nam nổi tiếng nhất Thượng Hải do Phan Doãn Đoan xây thời Minh Gia Tĩnh với hòn giả sơn đá Thái Hồ 'Ngọc Linh Lung'." },
        { hanzi: "中共一大会址", pinyin: "Zhōnggòng Yīdà Huìzhǐ", hanViet: "Trung Cộng Nhất Đại Hội Chỉ", nameVi: "Di tích Đại hội I ĐCSTQ (Tân Thiên Địa)", significance: "Ngôi nhà gạch xám kiến trúc Thạch Khố Môn lịch sử xây năm 1920 đánh dấu sự kiện thành lập Đảng Cộng sản Trung Quốc tháng 7/1921." },
        { hanzi: "朱家角古镇", pinyin: "Zhūjiājiǎo Gǔzhèn", hanViet: "Chu Gia Giác Cổ Trấn", nameVi: "Cổ trấn Sông nước Chu Gia Giác", significance: "Thị trấn thủy hương 1.700 năm ở Thanh Phố nổi bật với cầu đá 5 nhịp Phóng Sinh Kiều (1571) dài nhất khu vực Thượng Hải." },
        { hanzi: "上海博物馆", pinyin: "Shànghǎi Bówùguǎn", hanViet: "Thượng Hải Bác Vật Viện", nameVi: "Bảo tàng Thượng Hải (Trụ sở Quảng trường Nhân dân & Đông Quán)", significance: "Sở hữu hơn 1 triệu hiện vật, nổi tiếng thế giới với bộ sưu tập đồ đồng thời Thương–Chu (Đại Khắc Đỉnh), gốm sứ và hội họa Nguyên–Minh–Thanh." }
      ],
      intangibleHeritage: "Hỗ kịch (沪剧 Hùjù) hát bằng tiếng Ngô Thượng Hải; Nghệ thuật Cố tú (顾绣 Gùxiù) ở Tùng Giang thêu tay như tranh thủy mặc; Kỹ thuật cắt may sườn xám Hải Phái (海派旗袍); Chạm khắc trúc Gia Định (嘉定竹刻) và nhạc cụ tỳ bà Giang Nam Ti Trúc.",
      culinaryCulture: {
        styleOverview: "Bản Bang Thái (本帮菜 Běnbāngcài) là nhánh kết hợp giữa Giang Nam Tô–Chiết thanh tao và kỹ thuật 'nùng du xích tương' (nước xốt đậm màu sánh óng hơi ngọt đường phèn), cùng phong vị điểm tâm sáng tinh xảo.",
        signatureDishes: [
          { hanzi: "南翔小笼包", pinyin: "Nánxiáng xiǎolóngbāo", hanViet: "Nam Tường tiểu long bao", description: "Bánh bao súp vỏ mỏng trong suốt 18–20 nếp xoắn mịn, bên trong đầy ắp nước súp thịt heo ninh bì heo đông tan thơm gừng, chấm giấm đen Trấn Giang." },
          { hanzi: "生煎馒头", pinyin: "Shēngjiān mántou", hanViet: "Sinh tiên man đầu (Bánh bao áp chảo Thượng Hải)", description: "Vỏ bột men trắng mềm ở trên nhưng đáy chiên áp chảo vàng giòn rụm, rắc hành lá và vừng đen với nhân súp thịt nóng hổi." },
          { hanzi: "本帮红烧肉", pinyin: "Běnbāng hóngshāoròu", hanViet: "Bản bang hồng thiêu nhục (Thịt kho tàu kiểu Thượng Hải)", description: "Thịt ba chỉ cắt vuông kho chỉ dùng xì dầu đậm, xì dầu nhạt, rượu Thiệu Hưng và đường phèn cho đến khi sánh óng đỏ nâu không thêm nước." },
          { hanzi: "葱油拌面", pinyin: "Cōngyóu bànmiàn", hanViet: "Thông du bạn diện (Mì trộn dầu hành cháy)", description: "Mì sợi mảnh dai trộn cùng dầu hành lá chiên lửa nhỏ tới thơm lừng sẫm màu kết hợp xì dầu pha đường vừa vặn." },
          { hanzi: "白斩鸡", pinyin: "Báizhǎnjī", hanViet: "Bạch trảm kê", description: "Gà Tam Hoàng luộc vừa chín tới giữ phần xương hơi hồng mềm mọng, ngâm đá làm da giòn rồi chấm tương gừng hành béo ngậy." }
        ]
      },
      economyAndIndustry: "GDP vượt 4,72 nghìn tỷ NDT (~660 tỷ USD — đô thị có GDP lớn nhất Trung Quốc và châu Á). Cảng Thượng Hải (bao gồm cảng biển nước sâu Dương Sơn và cầu Đông Hải 32,5 km) giữ ngôi vị cảng container số 1 thế giới liên tục 14 năm. Tập trung Sở Giao dịch Chứng khoán Thượng Hải (SSE & Bảng Khoa Sáng STAR Market), cụm sản xuất xe điện (Tesla Gigafactory, NIO, SAIC), chip bán dẫn (SMIC), sinh học dược phẩm (Trương Giang), tàu du lịch cỡ lớn, thương mại máy bay COMAC C919 và hội chợ CIIE.",
      vietnamConnectivity: "Thương mại hàng hải từ TP.HCM (Cảng Cát Lái / Cái Mép) tới Cảng Thượng Hải là tuyến logistics trọng yếu nhập nguyên phụ liệu, máy móc công nghiệp và xuất khẩu trái cây, thủy sản Việt Nam vào vùng Tam giác Trường Giang. Đồng thời Chủ tịch Hồ Chí Minh từng ghé qua Thượng Hải trong hành trình tìm đường cứu nước và hoạt động cách mạng thập niên 1920–1930 (có dấu tích liên hệ hội nghị Hồng Khẩu, Lỗ Tấn). Mạng lưới du học sinh Việt Nam rất mạnh tại Đại học Phục Đán (复旦大学 – 985/C9), Đại học Giao thông Thượng Hải (上海交通大学 – 985/C9), Đại học Đồng Tế (同济大学 – Kiến trúc & Kỹ thuật) và Đại học Sư phạm Hoa Đông (华东师大).",
      notableFigures: [
        { hanzi: "黄道婆", pinyin: "Huáng Dàopó", hanViet: "Hoàng Đạo Bà", lifespan: "k. 1245–1330", contribution: "Bà tổ ngành dệt bông Trung Quốc tại Tùng Giang (Thượng Hải), người truyền bá kỹ thuật kéo sợi ba thoi từ Hải Nam giúp Giang Nam bùng nổ dệt lụa – bông." },
        { hanzi: "徐光启", pinyin: "Xú Guāngqǐ", hanViet: "Từ Quang Khải", lifespan: "1562–1633", contribution: "Tể tướng thời Minh quê Thượng Hải, đồng dịch *Kỷ Hà Nguyên Bản* (Euclid) cùng Matteo Ricci và biên soạn *Nông Chính Toàn Thư*." },
        { hanzi: "张爱玲", pinyin: "Zhāng Àilíng", hanViet: "Trương Ái Linh", lifespan: "1920–1995", contribution: "Nữ văn sĩ xuất chúng nhất của dòng văn học Hải Phái với *Khuynh Thành Chi Luyến* và *Kim Tỏa Ký* miêu tả sắc sảo xã hội Thượng Hải – Hồng Kông." }
      ],
      travelAndLogistics: "Tháng 3–5 mùa xuân hoa nở và tháng 10–11 mùa thu lá ngô đồng vàng ở Tô giới Pháp là lý tưởng nhất. Hai sân bay quốc tế Phố Đông (PVG) và Hồng Kiều (SHA) kết nối thẳng TP.HCM và Hà Nội; tàu đệm từ Maglev chạy 431 km/h từ sân bay PVG vào nội đô trong 8 phút; Ga Hồng Kiều là trung tâm đường sắt cao tốc lớn nhất Hoa Đông. Gợi ý 4 ngày: Ngày 1 Dự Viên – Đường Nam Kinh – Bến Thượng Hải – Phố Đông Tháp Ngọc; Ngày 2 Tô giới Pháp – Đường Võ Khang – Bảo tàng Thượng Hải; Ngày 3 Tân Thiên Địa – Tây Ngạn Bảo tàng Long; Ngày 4 Cổ trấn Chu Gia Giác hoặc Shanghai Disneyland.",
      mapCoordinates: { mapX: 710, mapY: 356, historicalCapitalEra: "Trung tâm Tài chính & Thương cảng Toàn cầu", economicCorridor: "Châu thổ Trường Giang (长三角)" }
    },
    "prov-chongqing": {
      identity: {
        hanziSimplified: "重庆市",
        hanziTraditional: "重慶市",
        pinyin: "Chóngqìng Shì",
        hanViet: "Trùng Khánh Thị",
        adminCategory: "municipality",
        adminTypeFull: "Thành phố trực thuộc Trung ương (直辖市 Zhíxiáshì)",
        abbreviation: "渝",
        abbreviationPinyin: "Yú (Du)",
        abbreviationOrigin: "Bắt nguồn từ tên cổ Du Thủy (渝水 – nay là sông Gia Lăng 嘉陵江) chảy qua thành cổ nước Ba (巴国); thời Tùy (581 CN) lập Du Châu (渝州), đến năm 1189 Tống Quang Tông Triệu Đôn sắc phong tước Cung vương trước rồi mới lên ngôi nên gọi là 'Song hỉ lâm môn – Trùng khánh' (双重喜庆), còn 渝 được giữ làm tên tắt hành chính.",
        capitalCity: "Khu Du Trung & Khu Lưỡng Giang Tân Khu (siêu đô thị núi miền Tây Nam)"
      },
      geographyAndClimate: {
        summary: "Nằm trên rìa đông bồn địa Tứ Xuyên (四川盆地), giữ điểm nút chuyển tiếp từ bậc thềm thứ hai (Cao nguyên Vân Quý & Đại Ba Sơn) xuống bậc thềm thứ ba qua Hẻm núi Tam Hiệp (长江三峡) hùng vĩ. Địa hình có tới 76% là đồi núi xen kẽ thung lũng sâu (gọi là 'Sơn thành' – Thành phố trên núi), nơi hai con sông lớn Trường Giang (长江) và Gia Lăng (嘉陵江) hội tụ ngay giữa bán đảo Du Trung. Khí hậu cận nhiệt đới ẩm ít nắng nhiều sương mù ('Vụ đô'), mùa hè nóng nực nằm trong 'Tứ đại hỏa lò' Trung Hoa.",
        causality: "Địa thế bán đảo núi dựng đứng kẹp giữa hai sông đã kiến tạo nên kiến trúc 'Đoạn tầng 3D ma ảo' độc nhất vô nhị thế giới: nhà cọc gỗ Điếu Cước Lâu (吊脚楼) bám vách đá và hệ thống tàu điện trên không chạy xuyên qua tầng lầu chung cư (Ga Lý Tử Bá). Sự ẩm thấp quanh năm của bồn địa sương mù kết hợp với vị trí đầu nguồn bến thủy (công nhân kéo thuyền mạo hiểm qua ghềnh đá Tam Hiệp) sinh ra văn hóa ẩm thực Cửu Cung Cách Lẩu cay tê (火锅) đầy sôi động, khử ẩm, gắn kết hào sảng cộng đồng người lao động bến cảng."
      },
      historicalEvolution: "Thời Tiên Tần là vùng trung tâm văn minh nước Ba (巴国 Bāguó) nổi tiếng vũ điệu chiến trận mạnh mẽ. Thời Hán–Tống là trọng trấn Ba Quận, Công Châu rồi phủ Trùng Khánh; thế kỷ XIII quân dân hợp lực tại Thành Điếu Ngư (钓鱼城) cầm chân quân Mông Cổ suốt 36 năm, làm thay đổi lịch sử Á–Âu khi Đại Hãn Mông Kha tử trận tại đây năm 1259. Trong Kháng chiến chống Nhật (1937–1945), Trùng Khánh trở thành Bồi đô (Thủ đô thời chiến) của Trung Hoa Dân Quốc. Năm 1997, Trùng Khánh tách khỏi Tứ Xuyên trở thành Thành phố trực thuộc Trung ương thứ 4 (lớn nhất về diện tích: 82.400 km²) nhằm làm động lực phát triển Đại Tây Bộ.",
      culturalIdentity: "Nền văn hóa Ba Du (巴渝文化 Bāyú Wénhuà) kết tinh tính cách bộc trực, gan dạ, hào phóng ('Cảng tử' 耿直), giao hòa di sản bến cảng Trường Giang (hò kéo thuyền Xuyên Giang Hào Tử), di sản kiến trúc kháng chiến thời Dân Quốc và tâm hồn thị dân thích uống trà坝 (trà sân), chơi bài và tụ họp quanh nồi lẩu sôi sục bất kể mùa đông hay giữa trưa hè.",
      heritageAndLandmarks: [
        { hanzi: "大足石刻", pinyin: "Dàzú Shíkè", hanViet: "Đại Túc Thạch Khắc", nameVi: "Tượng khắc đá Đại Túc (UNESCO 1999)", significance: "Hơn 50.000 tượng điêu khắc đá thời Đường–Tống (đỉnh cao ở Bảo Đỉnh Sơn) dung hợp nhuần nhuyễn Phật giáo – Nho gia – Đạo giáo với tuyệt tác Quan Âm Nghìn Tay." },
        { hanzi: "武隆喀斯特", pinyin: "Wǔlóng Kāsītè", hanViet: "Vũ Long Ca-xtơ", nameVi: "Quần thể Karst Vũ Long (UNESCO)", significance: "Tuyệt tác địa chất Tam Kiều Tự Nhiên (Thiên Sinh Tam Kiều) và hố sụt địa chất lớn nhất châu Á." },
        { hanzi: "合川钓鱼城", pinyin: "Héchuān Diàoyúchéng", hanViet: "Hợp Xuyên Điếu Ngư Thành", nameVi: "Pháo đài cổ Điếu Ngư Thành", significance: "Chiến trường nổi tiếng thế kỷ XIII nơi tướng Vương Kiên triều Nam Tống kiên cường giữ thành 36 năm trước đại quân Mông Cổ." },
        { hanzi: "洪崖洞", pinyin: "Hóngyádòng", hanViet: "Hồng Nhai Động", nameVi: "Quần thể nhà sàn vách đá Hồng Nhai Động", significance: "Công trình nhà sàn truyền thống Điếu Cước Lâu 11 tầng ôm trọn vách đá nhìn xuống sông Gia Lăng lung linh về đêm." },
        { hanzi: "白帝城 · 瞿塘峡", pinyin: "Báidìchéng · Qútángxiá", hanViet: "Bạch Đế Thành · Cù Đường Hiệp", nameVi: "Thành Bạch Đế & Hẻm núi Tam Hiệp", significance: "Nơi Lưu Bị gửi gắm con côi và nguồn cảm hứng bất tử trong bài thơ 'Sớm rời thành Bạch Đế' của Lý Bạch." }
      ],
      intangibleHeritage: "Nghệ thuật biến mặt Xuyên kịch chi nhánh Trùng Khánh; Hò kéo thuyền Tam Hiệp Xuyên Giang Hào Tử (川江号子); Nghề sơn mài Trường Thọ; Tranh in gỗ Bàn Long và chạm khắc gỗ Trùng Khánh.",
      culinaryCulture: {
        styleOverview: "Du Thái (渝菜 Yúcài) là trụ cột quan trọng của ẩm thực Xuyên Du nổi tiếng cay nồng (Màlà 麻辣 – tê của hoa tiêu Hán Nguyên hòa cay ớt) nhưng thiên về mùi béo ngậy của mỡ bò, tỏi gừng và tính bình dân sôi nổi.",
        signatureDishes: [
          { hanzi: "重庆九宫格老火锅", pinyin: "Chóngqìng jiǔgōnggé lǎo huǒguō", hanViet: "Trùng Khánh cửu cung cách lão hỏa oa (Lẩu 9 ô)", description: "Nước dùng nấu từ mỡ bò nguyên khối, ớt Đậu Biện, hoa tiêu và gừng tỏi chia 9 ngăn nhiệt độ khác nhau để nhúng lòng bò (Mao đỗ), huyết vịt và thực quản lợn." },
          { hanzi: "重庆小面", pinyin: "Chóngqìng xiǎomiàn", hanViet: "Trùng Khánh tiểu diện", description: "Bát mì ăn sáng linh hồn của người Sơn Thành với hơn 10 loại gia vị: dầu ớt, dầu hoa tiêu, tương đậu phộng, tỏi băm, cải mặn nha thái và rau muống chần giòn." },
          { hanzi: "万州烤鱼", pinyin: "Wànzhōu kǎoyú", hanViet: "Vạn Châu khảo ngư (Cá nướng Vạn Châu)", description: "Cá trắm cỏ hoặc cá nheo nướng than giòn da rồi om sục trong khay gia vị cay nồng, cần tây, đậu phụ khô và củ sen." },
          { hanzi: "歌乐山辣子鸡", pinyin: "Gēlèshān làzǐjī", hanViet: "Ca Nhạc Sơn lạt tử kê (Gà xào núi ớt)", description: "Thịt gà tơ thái hạt lựu chiên giòn ngập trong biển ớt khô đỏ rực và hoa tiêu thơm nức mũi để thực khách vừa ăn vừa 'tìm vàng trong ớt'." },
          { hanzi: "酸辣粉", pinyin: "Suānlàfěn", hanViet: "Toan lạt phấn (Miến chua cay khoai lang)", description: "Sợi miến làm từ tinh bột khoai lang dai sần sật hòa quyện giấm đen Tứ Xuyên, dầu ớt, lạc rang và đậu cô ve muối." }
        ]
      },
      economyAndIndustry: "Tọa độ trung tâm của Vành đai Kinh tế Thành Đô – Trùng Khánh (成渝地区双城经济圈) và đầu mối Hành lang Thương mại Biển – Bộ Mới (陆海新通道) nối đường sắt thẳng xuống Cảng Khâm Châu (Quảng Tây) tới ASEAN và Việt Nam. Nổi danh là 'Thủ đô Sản xuất Laptop toàn cầu' (chiếm 1/3 lượng máy tính xách tay thế giới nhờ chuỗi Foxconn, HP, Quanta), trung tâm sản xuất ô tô điện (Changan Auto, Seres/Aito), phần mềm và cảng thông quan đường sắt Á–Âu đầu tiên (tuyến Du–Tân–Âu).",
      vietnamConnectivity: "Trùng Khánh là trạm trung chuyển cực kỳ chiến lược của tuyến vận tải container liên vận quốc tế Hành lang Tây Mới kết nối trực tiếp ga Yên Viên (Hà Nội) và Đồng Đăng qua Nam Ninh – Quý Dương lên Trùng Khánh, giúp hàng điện tử, dệt may, trái cây và nông sản hai nước đi xuyên vào Tây Nam Trung Quốc và nối tiếp sang châu Âu. Trong lịch sử, đây cũng là nơi Chủ tịch Hồ Chí Minh hoạt động thời kỳ 1940–1945 (Bảo tàng Hồng Nham vẫn lưu giữ tư liệu liên quan). Sinh viên Việt Nam theo học đông tại Đại học Trùng Khánh (重庆大学 – 985/Song Nhất Lưu), Đại học Tây Nam (西南大学 – 211/Song Nhất Lưu) và Học viện Sư phạm Trùng Khánh.",
      notableFigures: [
        { hanzi: "曼卿 / 甘罗 / 巴蔓子", pinyin: "Bā Mànzǐ", hanViet: "Ba Mạn Tử (Tướng quân nước Ba)", lifespan: "Thời Chiến Quốc", contribution: "Vị tướng lẫy lừng thời Chiến Quốc chấp nhận tự sát để giữ vẹn toàn ba thành của nước Ba trước sự uy hiếp của nước Sở, biểu tượng trung nghĩa Sơn Thành." },
        { hanzi: "秦良玉", pinyin: "Qín Liángyù", hanViet: "Tần Lương Ngọc", lifespan: "1574–1648", contribution: "Nữ danh tướng duy nhất được chép liệt truyện riêng trong phần Chính sử Trung Hoa (*Minh sử*), gốc Thạch Trụ Trùng Khánh, chỉ huy Bạch Can Binh giữ biên cương." },
        { hanzi: "卢作孚", pinyin: "Lú Zuòfú", hanViet: "Lư Tác Phu", lifespan: "1893–1952", contribution: "Nhà thực nghiệp ái quốc vĩ đại lập Công ty Tàu thủy Dân Sinh, tổ chức cuộc 'Đôn Khơk Trung Hoa' sơ tán hơn 150.000 người và máy móc công nghiệp an toàn lên Trùng Khánh năm 1938." }
      ],
      travelAndLogistics: "Tháng 3–5 mùa hoa xuân và tháng 10–12 sương mù dịu mát dễ thưởng thức lẩu và ngắm cảnh đêm hơn mùa hè tháng 7–8 rất nóng. Sân bay Quốc tế Giang Bắc (CKG); đường sắt cao tốc nối Thành Đô 1 giờ, Quý Dương 2 giờ, Tây An 5 giờ. Tuyến gợi ý 4 ngày: Ngày 1 Bia Giải Phóng – Hồng Nhai Động – Du thuyền Lưỡng Giang; Ngày 2 Lý Tử Bá – Cáp treo Trường Giang – Cổ trấn Từ Khí Khẩu; Ngày 3 Công viên Địa chất Karst Vũ Long; Ngày 4 Tượng khắc đá Đại Túc.",
      mapCoordinates: { mapX: 432, mapY: 386, historicalCapitalEra: "Nước Ba cổ · Pháo đài Điếu Ngư · Bồi đô 1937–1945", economicCorridor: "Thành Đô–Trùng Khánh (成渝经济圈)" }
    },
    "prov-hebei": {
      identity: {
        hanziSimplified: "河北省",
        hanziTraditional: "河北省",
        pinyin: "Héběi Shěng",
        hanViet: "Hà Bắc Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "冀",
        abbreviationPinyin: "Jì (Ký)",
        abbreviationOrigin: "Trong thiên *Vũ Cống* kinh điển của *Thượng Thư*, vùng đất phía bắc sông Hoàng Hà được đặt làm Ký Châu (冀州 Jìzhōu) – châu đứng đầu trong Cửu Châu cổ đại Trung Hoa; vì nằm trọn phía bắc hạ lưu Hoàng Hà nên có tên là Hà Bắc và giữ chữ viết tắt 冀.",
        capitalCity: "Thạch Gia Trang (石家庄 Shíjiāzhuāng – Thạch Gia Trang)"
      },
      geographyAndClimate: {
        summary: "Vùng đất duy nhất tại Trung Quốc hội tụ đầy đủ cả 5 dạng địa hình: cao nguyên (Cao nguyên Bá Thượng phía bắc), núi cao (Thái Hành Sơn và Yến Sơn), đồi trung du, bình nguyên rộng lớn (Bình nguyên Hoa Bắc) và bờ biển vịnh Bột Hải. Tỉnh bao bọc hoàn toàn hai thành phố Bắc Kinh và Thiên Tân ở vòng trong ('Kinh Kỳ yếu địa'), chuyển tiếp từ bậc thềm thứ hai trên dãy Thái Hành xuống bậc thềm thứ ba. Khí hậu ôn đới lục địa gió mùa khô hanh mùa xuân – đông và mưa nhiều tháng 7–8.",
        causality: "Vị thế địa lý kẹp giữa thảo nguyên Du mục Mông Cổ (qua các cửa ải Sơn Hải Quan, Trương Gia Khẩu) và đồng bằng nông nghiệp Trung Nguyên đã biến Hà Bắc suốt 2.500 năm thành tuyến đầu giao tranh lẫn giao thương Hán – Du mục. Từ đó hình thành tinh thần 'Yên Triệu đa khảng khái bi ca chi sĩ' (đất Yên – Triệu sinh ra nhiều tráng sĩ hào sảng đầy bi tráng) mà Kinh Kha là tiêu biểu, đồng thời bảo lưu kho tàng kiến trúc quân sự Trường Thành dày đặc bậc nhất Trung Quốc."
      },
      historicalEvolution: "Thời Tây Chu chia thành hai chư hầu lớn là Yên (燕) ở phía bắc và Tấn/Triệu (赵) ở phía nam với cố đô Hàm Đan (邯郸) tồn tại danh xưng không đổi hơn 3.000 năm – nơi gắn với thành ngữ 'Hoàng Lương nhất mộng', 'Hoàn bích quy Triệu' và 'Phụ kinh thỉnh tội'. Thời Tần–Hán đặt Cự Lộc, Thường Sơn; thời Đường lập Hà Bắc Đạo; thời Nguyên–Minh–Thanh trở thành đất Trực Lệ (直隶 – chịu sự cai quản trực tiếp của triều đình trung ương tại Bắc Kinh), đến năm 1928 đổi tên chính thức là tỉnh Hà Bắc.",
      culturalIdentity: "Trái tim của Văn hóa Yên Triệu (燕赵文化 Yānzhào Wénhuà): mộc mạc, trọng nghĩa khí, trung hậu nhưng kiên cường trước gian khó. Đồng thời vùng Hàm Đan, Định Châu và Chính Định lưu giữ mạch văn minh Trung Nguyên sâu thẳm với nghệ thuật gốm sứ cổ truyền và chữ viết chữ Lệ – Khải trên bia Hán–Đường. Ngày nay, Hùng An Tân Khu (雄安新区) đang được kiến tạo làm thành phố vệ tinh xanh thông minh chia sẻ chức năng phi thủ đô với Bắc Kinh.",
      heritageAndLandmarks: [
        { hanzi: "承德避暑山庄及周围寺庙", pinyin: "Chéngdé Bìshǔ Shānzhuāng", hanViet: "Thừa Đức Tị Thử Sơn Trang", nameVi: "Tị Thử Sơn Trang Thừa Đức (UNESCO 1994)", significance: "Khu hành cung mùa hè lớn nhất triều Thanh (564 ha) kết hợp vườn cảnh phương Nam và thảo nguyên Mông Cổ cùng Ngoại Bát Miếu (Phổ Đà Tông Thừa mô phỏng cung Potala)." },
        { hanzi: "山海关长城（天下第一关）", pinyin: "Shānhǎiguān Chángchéng", hanViet: "Sơn Hải Quan (Thiên hạ Đệ nhất quan)", nameVi: "Sơn Hải Quan & Lão Long Đầu", significance: "Điểm cực đông của Vạn Lý Trường Thành triều Minh nơi tường thành đá lao thẳng xuống sóng biển Bột Hải tại Tần Hoàng Đảo." },
        { hanzi: "正定隆兴寺", pinyin: "Zhèngdìng Lóngxīngsì", hanViet: "Chính Định Long Hưng Tự", nameVi: "Chùa Long Hưng (Bắc Tống)", significance: "Lưu giữ tượng đồng Quán Âm Thiên Thủ Thiên Nhãn cao 21,3 m đúc năm 971 triều Tống – tượng đồng cổ cao nhất Trung Quốc." },
        { hanzi: "赵州桥（安济桥）", pinyin: "Zhàozhōu Qiáo (Ānjì Qiáo)", hanViet: "Triệu Châu Kiều (An Tế Kiều)", nameVi: "Cầu đá Triệu Châu (Thời Tùy, 605 CN)", significance: "Cây cầu vòm đá mở hai bên (spandrel arch) đầu tiên trên thế giới do công trình sư Lý Xuân thiết kế, đứng vững hơn 1.400 năm." },
        { hanzi: "清东陵与清西陵", pinyin: "Qīng Dōnglíng yǔ Qīng Xīlíng", hanViet: "Thanh Đông Lăng dữ Thanh Tây Lăng", nameVi: "Quần thể Hoàng lăng triều Thanh (UNESCO 2000)", significance: "Lăng mộ Khang Hy, Càn Long (Đông Lăng tại Tuân Hóa) và Ung Chính, Quang Tự (Tây Lăng tại Dịch Huyện)." }
      ],
      intangibleHeritage: "Hí kịch Hà Bắc Bảng Tử (河北梆子) giọng cao vút hào sảng; Bình kịch (评剧); Nghệ thuật xiếc Ngô Kiều (吴桥杂技 – 'Quê hương xiếc thế giới'); Tranh cắt giấy Uy Huyện (蔚县剪纸) nhuộm màu thủ công; Nghệ thuật gốm Định Diêu (定窑) men ngà nổi tiếng thời Tống.",
      culinaryCulture: {
        styleOverview: "Ký Thái (冀菜 Jìcài) dung hòa món đồng bằng bột mì – thịt hầm đậm đà (Bảo Định – Thạch Gia Trang), hải sản Tần Hoàng Đảo–Đường Sơn và đặc sản thịt thú/hương liệu Mông–Hán khu Tái Ngoại Thừa Đức.",
        signatureDishes: [
          { hanzi: "保定驴肉火烧", pinyin: "Bǎodìng lǘròu huǒshāo", hanViet: "Bảo Định lư nhục hỏa thiêu", description: "Câu ngạn ngữ 'Thiên thượng long nhục, địa hạ lư nhục' tôn vinh bánh nướng Bảo Định giòn xếp lớp kẹp thịt lừa ninh thảo mộc mềm thơm và ớt xanh thái lát." },
          { hanzi: "正定八大碗", pinyin: "Zhèngdìng bādàwǎn", hanViet: "Chính Định bát đại uyển", description: "Bộ 8 bát thịt chân giò, sườn hấp, thịt nạc rim nấu kiểu cổ thời Đường–Tống dâng trong yến tiệc Chính Định." },
          { hanzi: "金毛狮子鱼", pinyin: "Jīnmáo shīziyú", hanViet: "Kim mao sư tử ngư", description: "Món cá chép thái sợi mịn bung xù như bờm sư tử vàng khi chiên rộp rồi rưới xốt chua ngọt cổ điển ở Thạch Gia Trang." },
          { hanzi: "衡水金凤扒鸡", pinyin: "Héngshuǐ Jīnfèng bājī", hanViet: "Hoành Thủy Kim Phượng bái kê", description: "Gà ướp mật ong chiên sơ rồi ninh mềm trong nồi nước dùng hàng chục năm tuổi có tới 18 vị thuốc bắc." },
          { hanzi: "唐山棋子烧饼", pinyin: "Tángshān qízǐ shāobǐng", hanViet: "Đường Sơn kỳ tử thiêu bính", description: "Bánh nướng nhỏ tròn như quân cờ tướng vỏ giòn rụm bọc nhân thịt lợn và hành hương thơm phức." }
        ]
      },
      economyAndIndustry: "Là cột sống công nghiệp nặng và chuyển đổi xanh của Vòng kinh tế Kinh–Tân–Ký: Đường Sơn và Hàm Đan dẫn đầu sản lượng thép toàn cầu đang tái cấu trúc theo công nghệ luyện kim hydro xanh; khu công nghệ Hùng An Tân Khu đón các trụ sở công nghệ nhà nước, dữ liệu lớn và kiến trúc sinh thái; Baoding (Trường Thành Ô tô – Great Wall Motors/Haval) và Thạch Gia Trang (cụm dược phẩm lớn nhất Trung Quốc như CSPC).",
      vietnamConnectivity: "Thép xây dựng, nguyên liệu hóa dược phẩm, phân bón và máy nông nghiệp từ Hà Bắc xuất khẩu ổn định sang Việt Nam qua cảng Tần Hoàng Đảo, Hoàng Hoa và Thiên Tân. Về giáo dục, Đại học Công nghiệp Hà Bắc (tuyển sinh liên kết Kinh–Tân–Ký), Đại học Hà Bắc (Bảo Định), Đại học Yên Sơn (Tần Hoàng Đảo – trọng điểm chế tạo máy nặng) có nhiều học bổng cấp tỉnh Hà Bắc cấp hàng năm cho sinh viên Việt Nam.",
      notableFigures: [
        { hanzi: "扁鹊", pinyin: "Biǎn Què", hanViet: "Biển Thước (Tần Việt Nhân)", lifespan: "407–310 TCN", contribution: "Thần y khai tổ phương pháp 'Vọng – Văn – Vấn – Thiết' trong Đông y, người đất Mậu (nay thuộc Nhậm Khâu, Hà Bắc)." },
        { hanzi: "关汉卿", pinyin: "Guān Hànqīng", hanViet: "Quan Hán Khanh", lifespan: "k. 1220–1300", contribution: "Kịch tác gia vĩ đại nhất đời Nguyên (đứng đầu Nguyên Khúc Tứ Đại Gia) quê Kỳ Châu, tác giả bi kịch bất hủ *Đậu Nga Oan*." },
        { hanzi: "祖暅", pinyin: "Zǔ Gèng", hanViet: "Tổ Hằng", lifespan: "456–536", contribution: "Con trai Tổ Xung Chi, phát biểu nguyên lý tính thể tích hình cầu ('Nguyên lý Tổ Hằng') sớm hơn Cavalieri của châu Âu 1.100 năm." }
      ],
      travelAndLogistics: "Tháng 5–10 lý tưởng để lên Cao nguyên Bá Thượng (Mộc Lan Vi Trường) tránh nóng hoặc khám phá Sơn Hải Quan; đường sắt cao tốc Kinh–Thạch và Kinh–Thẩm kết nối Thạch Gia Trang, Bảo Định, Đường Sơn, Tần Hoàng Đảo với Bắc Kinh chỉ 45–90 phút. Gợi ý 3 ngày: Ngày 1 Chính Định Long Hưng Tự – Cầu Triệu Châu; Ngày 2–3 Tị Thử Sơn Trang Thừa Đức hoặc ra biển Bột Hải thăm Sơn Hải Quan.",
      mapCoordinates: { mapX: 562, mapY: 214, historicalCapitalEra: "Yên · Triệu (Hàm Đan) · Hành cung Thừa Đức", economicCorridor: "Kinh–Tân–Ký (京津冀)" }
    },
    "prov-shanxi": {
      identity: {
        hanziSimplified: "山西省",
        hanziTraditional: "山西省",
        pinyin: "Shānxī Shěng",
        hanViet: "Sơn Tây Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "晋",
        abbreviationPinyin: "Jìn (Tấn)",
        abbreviationOrigin: "Nằm ở phía tây dãy núi Thái Hành Sơn (太行山) nên gọi là Sơn Tây (Nghĩa: phía Tây của núi). Vùng đất này là trung tâm của nước Tấn (晋国 Jìnguó) – bá chủ lẫy lừng thời Xuân Thu dưới sự trị vì của Tấn Văn Công, nên giữ chữ viết tắt 晋.",
        capitalCity: "Thái Nguyên (太原 Tàiyuán – Thái Nguyên)"
      },
      geographyAndClimate: {
        summary: "Toàn tỉnh nằm trên Cao nguyên Hoàng Thổ (黄土高原 Huángtǔ Gāoyuán) ở rìa phía đông bậc thềm thứ hai của địa hình Trung Quốc, với cấu trúc tự nhiên đặc trưng 'Lưỡng sơn giáp nhất xuyên': dãy Thái Hành ở phía đông, dãy Lữ Lương ở phía tây và ở giữa là chuỗi bồn địa thung lũng sông Phần Hà (汾河) từ Đại Đồng xuống Thái Nguyên, Lâm Phần và Vận Thành. Phía tây và nam lấy sông Hoàng Hà làm ranh giới tự nhiên với Thiểm Tây và Hà Nam. Khí hậu ôn đới lục địa khô ráo ít mưa, biên độ nhiệt ngày–đêm lớn.",
        causality: "Chính khí hậu khô hanh trên cao nguyên đất hoàng thổ và thung lũng núi khép kín đã trở thành 'chiếc tủ bảo quản tự nhiên khổng lồ' cho hàng trăm công trình gỗ cổ nhất Trung Hoa thời Đường–Liêu–Tống–Kim (chiếm tới hơn 70% công trình gỗ từ thời Tống trở về trước trên cả nước, tiêu biểu là Nam Thiền Tự, Phật Quang Tự). Đất cằn ít ruộng đồng ép người Sơn Tây phải rời thung lũng đi buôn bán đường xa khắp Trung Hoa và thảo nguyên, khai sinh ra hội thương nhân Tấn Thương lừng lẫy. Thói quen trồng nhiều lúa mì, cao lương, kê cùng khí hậu kiềm tính tạo nên văn hóa hầm giấm trăm năm (Sơn Tây Lão Trần Thố) và hàng trăm cách làm mì đặc sắc."
      },
      historicalEvolution: "Cái nôi tối cổ của văn minh Hoa Hạ với di chỉ Đào Tự (陶寺遗址, Lâm Phần, khoảng 2300–1900 TCN được giới khảo cổ xem là trung tâm nghi lễ sớm lưu vực Hoàng Hà), truyền thuyết Nghiêu – Thuấn – Vũ nhường ngôi và lễ phong 'Đông đồng phong đệ' nước Tấn thời Tây Chu. Trong Tam gia phân Tấn, đây là trung tâm nước Tấn và Hàn–Triệu–Ngụy; thời Tùy Đường, Thái Nguyên là 'Long Hưng chi địa' nơi Lý Uyên khởi binh dựng nên nhà Đường. Dưới thời Minh–Thanh, Tấn Thương (晋商 Jìnshāng) xây dựng Phiếu hiệu Nhật Thăng Xương (日升昌, 1823 tại Bình Dao) – ngân hàng hối đoái đầu tiên của Trung Quốc, nắm giữ mạch máu tài chính Đế quốc suốt hơn 100 năm.",
      culturalIdentity: "Văn hóa Tam Tấn (三晋文化 Sānjìn Wénhuà) được tóm gọn trong câu 'Địa hạ văn vật khán Thiểm Tây, địa thượng văn vật khán Sơn Tây' (cổ vật dưới lòng đất xem Thiểm Tây, kiến trúc mặt đất xem Sơn Tây). Con người Sơn Tây trầm ổn, cần kiệm, trọng chữ tín thương nghiệp ('Dĩ nghĩa chế lợi' – lấy đạo nghĩa điều tiết lợi nhuận) và gắn bó mật thiết với tín ngưỡng Quan Công (Quan Vũ quê Vận Thành) như vị thần bảo hộ thương tín.",
      heritageAndLandmarks: [
        { hanzi: "云冈石窟", pinyin: "Yúngāng Shíkū", hanViet: "Vân Cương Thạch Quật", nameVi: "Hang đá Phật giáo Vân Cương (UNESCO 2001)", significance: "Kiệt tác điêu khắc Bắc Ngụy (thế kỷ V) ở Đại Đồng với 53 hang lớn và 59.000 tượng Phật giao thoa phong cách Ấn Độ Gandhara – Trung Á – Trung Hoa." },
        { hanzi: "平遥古城", pinyin: "Píngyáo Gǔchéng", hanViet: "Bình Dao Cổ Thành", nameVi: "Cổ thành Bình Dao & Nhật Thăng Xương (UNESCO 1997)", significance: "Đô thị tường thành triều Minh–Thanh nguyên vẹn nhất Trung Quốc, cái nôi ngân hàng hối đoái Phiếu hiệu đầu tiên trong lịch sử Hoa Hạ." },
        { hanzi: "五台山 · 佛光寺", pinyin: "Wǔtáishān · Fóguāng Sì", hanViet: "Ngũ Đài Sơn · Phật Quang Tự", nameVi: "Thánh địa Ngũ Đài Sơn & Chùa Phật Quang (UNESCO)", significance: "Đứng đầu Tứ đại Danh sơn Phật giáo Trung Quốc; Đông Đại Điện chùa Phật Quang (857 CN) là phát hiện chấn động của Lương Tư Thành và Lâm Huy Nhân." },
        { hanzi: "应县木塔（佛宫寺释迦塔）", pinyin: "Yìngxiàn Mùtǎ", hanViet: "Ứng Huyện Mộc Tháp (Phật Cung Tự Thích Ca Tháp)", nameVi: "Tháp gỗ Ứng Huyện (1056 CN)", significance: "Tòa tháp gỗ thuần mộng khớp cao nhất và lâu đời nhất thế giới (67,3 m, không dùng một chiếc đinh sắt), đứng vững qua hơn 40 trận động đất suốt gần thiên niên kỷ." },
        { hanzi: "悬空寺", pinyin: "Xuánkōng Sì", hanViet: "Huyền Không Tự", nameVi: "Chùa Treo Huyền Không (Hằng Sơn)", significance: "Kỳ quan kiến trúc thời Bắc Ngụy bám cheo leo vào vách đá thẳng đứng trên mặt vực sâu, quy tụ cả Tam giáo Thích – Lão – Nho trong một đại điện." }
      ],
      intangibleHeritage: "Múa rối đất Hiếu Nghĩa; Thổi kèn Suona Sơn Tây; Sơn Tây Lão Trần Thố cổ truyền ủ men đại mạch/cao lương trong chum dưới nắng hè và băng đông ('Hạ phơi phục, Đông vớt băng'); kỹ thuật xây hang động hầm đất (Diêu động); và hí kịch Tấn kịch (晋剧) trầm hùng.",
      culinaryCulture: {
        styleOverview: "Tấn Thái (晋菜) trứ danh toàn Trung Hoa về nghệ thuật biến hóa bột mì ('Thế giới chi miến thực tại Trung Quốc, Trung Quốc chi miến thực tại Sơn Tây' – hơn 280 loại mì) và vị chua thanh sâu lắng từ Giấm lâu năm Lão Trần Thố.",
        signatureDishes: [
          { hanzi: "山西刀削面", pinyin: "Shānxī dāoxiāomiàn", hanViet: "Sơn Tây đao tước diện (Mì gọt dao)", description: "Nghệ nhân vác khối bột lên vai hoặc đầu, dùng thanh dao uốn cong gọt từng dải bột hình lá liễu dày giữa mỏng mép bay thẳng vào chảo nước sôi, chan xốt thịt băm nấm hoặc thịt om." },
          { hanzi: "平遥牛肉", pinyin: "Píngyáo niúròu", hanViet: "Bình Dao ngưu nhục", description: "Thịt bò ướp muối mỏ địa phương và gia vị rồi ninh nhỏ lửa suốt nhiều giờ đạt màu đỏ hồng ngọc, cắt lát mịn thớ không xơ." },
          { hanzi: "过油肉", pinyin: "Guòyóuròu", hanViet: "Quá du nhục (Thịt xào lướt dầu)", description: "Món quốc túy bàn tiệc Sơn Tây dùng thăn lợn cắt mỏng ướp trứng tẩm bột xào qua dầu nóng cùng nấm mộc nhĩ, măng, hành tây và vài giọt giấm già." },
          { hanzi: "山西栲栳栳", pinyin: "Shānxī kǎolǎolǎo", hanViet: "Sơn Tây khảo lão lão (Mì ống bột yến mạch)", description: "Cuộn bột kiều mạch yến mạch (Du miến) thành từng ống nhỏ xếp đứng như tổ ong rồi hấp chín, ăn kèm xốt cà chua trứng hoặc hầm cừu." },
          { hanzi: "头脑", pinyin: "Tóunǎo (Bāzhēntāng)", hanViet: "Đầu não (Canh bát trân Thái Nguyên)", description: "Món ăn dưỡng sinh sáng mùa đông Thái Nguyên do danh y – thư pháp gia Phó Sơn triều Minh chế tác: thịt cừu nấu cùng hoàng kỳ, củ mài, ngó sen, rượu vàng và bột mì." }
        ]
      },
      economyAndIndustry: "Tỉnh năng lượng xương sống cung ứng than nhiệt, điện gió – điện mặt trời lớn của Trung Quốc và đang chuyển mình mạnh sang hợp kim đặc biệt (thép không gỉ Thái Nguyên TISCO làm đầu bút bi & tàu vũ trụ), chuỗi sản xuất linh kiện iPhone Foxconn Thái Nguyên, nông nghiệp cốc khô – giấm thực phẩm và du lịch di sản cổ kiến trúc đang tăng trưởng bùng nổ (nhất là sau thành công của *Black Myth: Wukong* lấy 27/36 bối cảnh tại Sơn Tây!).",
      vietnamConnectivity: "Sơn Tây là cái nôi đào tạo nhân tài ngành năng lượng, khai khoáng thông minh, luyện kim và khảo cổ học cổ kiến trúc. Đại học Sơn Tây (山西大学 – Song Nhất Lưu tại Thái Nguyên, trường đại học lập năm 1902 thuộc nhóm 3 trường cổ nhất Trung Quốc) và Đại học Công nghệ Thái Nguyên (太原理工大学 – 211/Song Nhất Lưu) có các hợp tác trao đổi sinh viên địa chất, năng lượng tái tạo và tiếng Trung với các đại học kỹ thuật Việt Nam.",
      notableFigures: [
        { hanzi: "关羽", pinyin: "Guān Yǔ", hanViet: "Quan Vũ (Quan Công)", lifespan: "k. 160–220", contribution: "Danh tướng đất Giải Lương (nay là Vận Thành, Sơn Tây), biểu tượng tối cao về Trung – Nghĩa – Tín trong văn hóa Trung Hoa và thương nhân Đông Á." },
        { hanzi: "司马光", pinyin: "Sīmǎ Guāng", hanViet: "Tư Mã Quang", lifespan: "1019–1086", contribution: "Sử gia và Tể tướng Bắc Tống quê Hạ Huyện (Vận Thành), chủ biên bộ thông sử biên niên đồ sộ *Tư Trị Thông Giám*." },
        { hanzi: "王维", pinyin: "Wáng Wéi", hanViet: "Vương Duy (Thi Phật)", lifespan: "701–761", contribution: "Nhà thơ – họa sĩ đỉnh cao Thịnh Đường quê Kỳ Huyện (Vận Thành), khai sinh trường phái tranh thủy mặc Nam Tông với lý tưởng 'Thi trung hữu họa'." },
        { hanzi: "白居易 / 柳宗元 / 傅山", pinyin: "Fù Shān", hanViet: "Phó Sơn (Thanh Chủ)", lifespan: "1607–1684", contribution: "Đại danh sĩ – thầy thuốc – nhà thư pháp xuất chúng đất Dương Khúc (Thái Nguyên), đề xướng tinh thần 'Ninh chuyết vô xảo' (thà vụng mà chân chất)." }
      ],
      travelAndLogistics: "Tháng 5–10 khí hậu mát khô dễ chịu; tuyến cao tốc Đại Đồng – Tây An chạy dọc xương sống thung lũng Phần Hà giúp đi từ Bắc Kinh tới Đại Đồng chỉ 2h, tới Thái Nguyên 2h30, nối tiếp Bình Dao 40 phút. Hành trình cổ kiến trúc 4–5 ngày: Ngày 1–2 Đại Đồng (Vân Cương Thạch Quật – Huyền Không Tự – Mộc tháp Ứng Huyện); Ngày 3 Chùa Phật Quang Ngũ Đài Sơn; Ngày 4–5 Tấn Từ Thái Nguyên & Cổ thành Bình Dao – Đại viện Kiều Gia.",
      mapCoordinates: { mapX: 512, mapY: 226, historicalCapitalEra: "Nước Tấn cổ · Bắc Ngụy Bình Thành · Thái Nguyên (Long Hưng chi địa)", economicCorridor: "Kinh–Tân–Ký (京津冀)" }
    },
    "prov-liaoning": {
      identity: {
        hanziSimplified: "辽宁省",
        hanziTraditional: "遼寧省",
        pinyin: "Liáoníng Shěng",
        hanViet: "Liêu Ninh Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "辽",
        abbreviationPinyin: "Liáo (Liêu)",
        abbreviationOrigin: "Tên ghép từ lưu vực sông Liêu Hà (辽河) chảy dọc trung tâm tỉnh và hàm ý chúc phúc 'Liêu Hà vĩnh viễn an ninh' (辽河安宁 – đặt năm 1929 thay cho Phụng Thiên 奉天); chữ 辽 (Liêu) được giữ làm ký hiệu viết tắt.",
        capitalCity: "Thẩm Dương (沈阳市 Shěnyáng Shì – Thẩm Dương)"
      },
      geographyAndClimate: {
        summary: "Nằm ở cực nam của vùng Đông Bắc, là tỉnh duy nhất của vùng Đông Bắc vừa tiếp giáp biên giới bộ vừa sở hữu đường bờ biển dài đổ ra Hoàng Hải và Biển Bột Hải ở Bán đảo Liêu Đông (辽东半岛). Cấu trúc 'Lục sơn nhất thủy tam phân điền': hai bên là núi Liêu Tây và dãy Thiên Sơn (Trường Bạch) kẹp ở giữa là đồng bằng Hạ Liêu Hà phì nhiêu rộng lớn. Khí hậu ôn đới gió mùa với mùa đông lạnh giá tuyết trắng (-15°C ở Thẩm Dương) nhưng Đại Liên ven bán đảo ấm áp hơn rõ rệt nhờ hai mặt giáp biển.",
        causality: "Vị thế 'yết hầu' qua Sơn Hải Quan kết nối Hoa Bắc với bình nguyên Đông Bắc biến Liêu Ninh suốt lịch sử thành hành lang di dân vĩ đại nhất cận đại ('Sấm Quan Đông' 闯关东 – hàng chục triệu người Sơn Đông, Hà Bắc vượt biển và ải sang khai khẩn) và nền công nghiệp nặng khai khoáng sắt An Sơn – than Phủ Thuận. Đường bờ biển không đóng băng vào mùa đông tại Lữ Thuận – Đại Liên lại tạo nên văn hóa cảng biển cởi mở hòa quyện ẩm thực Lỗ Thái và phong vị Đông Bắc."
      },
      historicalEvolution: "Từ thời Chiến Quốc là Liêu Đông quận và Liêu Tây quận nước Yên; nơi đây có di chỉ văn hóa Hồng Sơn (红山文化, 4700–2900 TCN) phát tích Rồng Ngọc (Ngọc Long) nổi tiếng. Thời Liêu–Kim là trọng trấn Đông Kinh; bước ngoặt cận đại là khi Nỗ Nhĩ Cáp Xích lập Hậu Kim và dời đô về Thịnh Kinh – Thẩm Dương (1625), xây dựng Cố Cung Thẩm Dương và Thanh Chiêu Lăng trước khi tiến vào Sơn Hải Quan (1644). Thế kỷ XIX–XX, chiến tranh Giáp Ngọ tại Lữ Thuận và Sự biến 18/9 (Cửu Nhất Bát, 1931) ghi dấu ấn bi tráng; sau 1949 Liêu Ninh trở thành 'Đệ nhất Công hòa quốc Công nghiệp nặng' của Trung Quốc.",
      culturalIdentity: "Sự giao thoa giữa văn hóa Bát Kỳ Mãn Châu quý tộc (Thịnh Kinh cung đình, lễ nghi tộc Mãn, viết tiếng Mãn – Hán) với văn hóa di dân Sơn Đông phóng khoáng ('Cái nôi của Di dân Sấm Quan Đông') và bản sắc công nhân kỹ thuật thành thị Đại Liên – An Sơn: thẳng thắn, hiếu khách, hài hước tự nhiên và đặc biệt tôn vinh tinh thần kỹ sư – thợ cả.",
      heritageAndLandmarks: [
        { hanzi: "沈阳故宫", pinyin: "Shěnyáng Gùgōng", hanViet: "Thẩm Dương Cố Cung", nameVi: "Cố Cung Thẩm Dương (UNESCO 2004)", significance: "Quần thể hoàng cung duy nhất còn tồn tại ngoài Bắc Kinh, tiêu biểu cho sự dung hòa kiến trúc Mãn Châu (Đại Chính Điện hình lều Bát Kỳ), Mông Cổ và Hán." },
        { hanzi: "清福陵与清昭陵（盛京三陵）", pinyin: "Qīng Fúlīng yǔ Zhāolīng", hanViet: "Thanh Phúc Lăng & Thanh Chiêu Lăng", nameVi: "Lăng mộ Hoàng đế Nỗ Nhĩ Cáp Xích & Hoàng Thái Cực", significance: "Cụm hoàng lăng sơ Thanh mở đầu phong cách quy hoạch sơn thủy triều đại Mãn Thanh." },
        { hanzi: "张氏帅府", pinyin: "Zhāngshì Shuàifǔ", hanViet: "Trương Thị Soái Phủ", nameVi: "Phủ Đại soái Trương Tác Lâm – Trương Học Lương", significance: "Quần thể phủ đệ kết hợp Tứ Hợp Viện Trung Hoa, lâu đài La Mã và biệt thự Pháp ghi dấu lịch sử Đông Bắc đầu thế kỷ XX." },
        { hanzi: "牛河梁红山文化遗址", pinyin: "Niúhéliáng Hóngshān Yízhǐ", hanViet: "Ngưu Hà Lương Hồng Sơn Di chỉ", nameVi: "Di chỉ Văn hóa Hồng Sơn (Triều Dương)", significance: "Di chỉ tiền sử 5.500 năm với Tế đàn Tròn – Vuông và Thần miếu nữ thần góp phần xác chứng bình minh văn minh Liêu Hà." },
        { hanzi: "九门口水上长城", pinyin: "Jiǔménkǒu Shuǐshàng Chángchéng", hanViet: "Cửu Môn Khẩu Thủy Thượng Trường Thành", nameVi: "Trường Thành trên sông Cửu Môn Khẩu (UNESCO)", significance: "Đoạn Trường Thành độc nhất bắc qua sông Cửu Giang bằng hệ thống chín vòm cống đá khổng lồ." }
      ],
      intangibleHeritage: "Nghệ thuật dân gian Nhị Nhân Chuyển (二人转 Èrrénzhuǎn) đặc sản Đông Bắc hát đối múa khăn; Nghệ thuật Mãn tộc Tiễn Chỉ; Hí kịch Thẩm Dương Bình Kịch và nghề chạm khắc ngọc Tụ Nham (岫岩玉雕 – một trong Tứ đại danh ngọc Trung Hoa).",
      culinaryCulture: {
        styleOverview: "Liêu Thái (辽菜 Liáocài) đứng đầu ẩm thực Đông Bắc, chắt lọc từ Cơm cung đình Mãn–Hán, ẩm thực hầm om đậm vị Sơn Đông và hải sản vịnh Hoàng Hải–Bột Hải cực tươi ngon.",
        signatureDishes: [
          { hanzi: "锅包肉", pinyin: "Guōbāoròu", hanViet: "Oa bao nhục (Thịt lợn chiên giòn xốt chua ngọt vàng)", description: "Sáng tạo lẫy lừng đầu thế kỷ XX của đầu bếp Trịnh Hưng Văn phục vụ ngoại giao Đông Bắc: thăn lợn thái lát mỏng tẩm bột khoai tây chiên giòn rụm bọc xốt giấm đường gừng hành thơm nức." },
          { hanzi: "老边饺子", pinyin: "Lǎobiān jiǎozi", hanViet: "Lão Biên giáo tử (Sủi cảo Lão Biên)", description: "Danh sản Thẩm Dương từ năm 1829 dùng thịt băm xào chín om nước dùng hầm xương trước khi gói thành viên sủi cảo chín tới giữ trọn độ thơm béo." },
          { hanzi: "海胆蒸蛋 & 蒜蓉生蚝", pinyin: "Dàlián hǎidǎn zhēng dàn", hanViet: "Đại Liên hải đảm chưng đản (Trứng hấp nhum biển Đại Liên)", description: "Nhum biển vàng vùng nước lạnh Đại Liên đánh hấp mịn cùng trứng tươi tạo vị ngọt thanh của đại dương." },
          { hanzi: "沈阳鸡架", pinyin: "Shěnyáng jījià", hanViet: "Thẩm Dương kê giá (Khung xương gà nướng/hun khói)", description: "Thẩm Dương tiêu thụ khung xương gà nhiều bậc nhất Trung Quốc với đủ phiên bản hun khói đường, rán xì dầu mật, trộn cay nhâm nhi bia Tuyết Hoa." },
          { hanzi: "小鸡炖蘑菇", pinyin: "Xiǎojī dùn mógū", hanViet: "Tiểu kê đốn ma cô (Gà bản hầm nấm thông dại)", description: "Món quốc dân mùa đông Đông Bắc dùng gà thả vườn hầm cùng nấm trăn (Zhēnmó) dãy Trường Bạch và miến dong dai." }
        ]
      },
      economyAndIndustry: "Trung tâm chế tạo máy công cụ CNC (Thẩm Dương), luyện thép An Sơn (Ansteel), công nghiệp hàng không (Tập đoàn Máy bay Thẩm Dương AVIC), chế tạo tàu biển (Đại Liên đóng tàu sân bay và tàu chở LNG), robot công nghiệp (SIASUN) và phần mềm – dịch vụ BPO tiếng Nhật–Anh tại Đại Liên. Cảng Đại Liên (cửa ngõ Bột Hải) và khu công nghiệp hóa dầu Bàn Cẩm là đầu mối xuất nhập khẩu toàn vùng Đông Bắc.",
      vietnamConnectivity: "Các trường đại học hàng đầu Liêu Ninh gồm Đại học Đông Bắc (东北大学 – 985/Song Nhất Lưu, nổi tiếng AI, Tự động hóa và Luyện kim tại Thẩm Dương), Đại học Công nghệ Đại Liên (大连理工大学 – 985/Song Nhất Lưu), Đại học Liêu Ninh (211/Song Nhất Lưu) và Đại học Hàng hải Đại Liên (đại học trọng điểm hàng hải quốc gia) tiếp nhận sinh viên Việt Nam theo các chương trình kỹ thuật đóng tàu, vận tải biển, tự động hóa công nghiệp và thương mại quốc tế.",
      notableFigures: [
        { hanzi: "努尔哈赤", pinyin: "Nǔ'ěrhāchì", hanViet: "Nỗ Nhĩ Cáp Xích", lifespan: "1559–1626", contribution: "Người thống nhất các bộ lạc Nữ Chân lập nên Hậu Kim (tiền thân nhà Thanh), định chế hệ thống Bát Kỳ và chọn Thẩm Dương làm kinh đô mới." },
        { hanzi: "张学良", pinyin: "Zhāng Xuéliáng", hanViet: "Trương Học Lương", lifespan: "1901–2001", contribution: "Thiếu soái Đông Bắc, người khởi xướng 'Đông Bắc Dịch Xí' thống nhất Trung Hoa (1928) và Sự biến Tây An (1936) lập mặt trận kháng Nhật." },
        { hanzi: "曹霑祖籍 · 雷锋纪念地", pinyin: "Léifēng (Fǔshùn) / Wáng Guówéi", hanViet: "Cố hương Bát Kỳ Tào Tuyết Cần tại Liêu Dương", lifespan: "Thế kỷ XVII", contribution: "Vùng đất Liêu Dương giữ nhiều tư liệu gia phả gia tộc họ Tào trước khi theo quân Bát Kỳ nhập quan vào Bắc Kinh." }
      ],
      travelAndLogistics: "Tháng 5–10 mát mẻ tuyệt đẹp ở Đại Liên và mùa lá phong đỏ tháng 9–10 tại Bản Khê (Bắc Kinh của lá đỏ Trung Quốc); mùa đông tháng 12–2 thích hợp trải nghiệm suối nước nóng tuyết trắng. Sân bay Đào Tiên Thẩm Dương (SHE) và Chu Thủy Tử Đại Liên (DLC); tàu cao tốc Thẩm Dương – Đại Liên chỉ 1h40, Thẩm Dương – Bắc Kinh 2h45. Hành trình gợi ý 4 ngày: Ngày 1 Cố Cung Thẩm Dương – Phủ Đại Soái – Bảo tàng Liêu Ninh; Ngày 2 Thiên Sơn An Sơn hoặc Bản Khê Thủy Động; Ngày 3–4 Đại Liên (Quảng trường Tinh Hải, Đường Tân Hải, Lữ Thuận Khẩu).",
      mapCoordinates: { mapX: 682, mapY: 184, historicalCapitalEra: "Hậu Kim Thịnh Kinh · Thành cổ Thẩm Dương", economicCorridor: "Vành đai Đông Bắc & Hoàn Bột Hải" }
    },
    "prov-jilin": {
      identity: {
        hanziSimplified: "吉林省",
        hanziTraditional: "吉林省",
        pinyin: "Jílín Shěng",
        hanViet: "Cát Lâm Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "吉",
        abbreviationPinyin: "Jí (Cát)",
        abbreviationOrigin: "Bắt nguồn từ tiếng Mãn 'Cát Lâm Ô Lạp' (Jilin Ula – 吉林乌拉, nghĩa là 'Thị trấn dọc theo dòng sông lớn', chỉ sông Tùng Hoa); thời Thanh (1673) rút gọn thành thành phố Cát Lâm (nằm về phía đông) và lấy chữ 吉 (Cát – tốt lành) làm chữ viết tắt toàn tỉnh.",
        capitalCity: "Trường Xuân (长春市 Chángchūn Shì – Trường Xuân)"
      },
      geographyAndClimate: {
        summary: "Nằm ở trung tâm vùng Đông Bắc Á, giáp Liêu Ninh ở phía nam, Hắc Long Giang ở phía bắc, Nga ở phía đông và Triều Tiên dọc sông Đồ Môn và sông Áp Lục ở phía đông nam. Địa hình nghiêng dần từ đông nam xuống tây bắc: phía đông là dãy núi Trường Bạch (长白山 Chángbáishān – đỉnh Bạch Đầu cao 2.744 m với hồ núi lửa Thiên Trì xanh thẳm); ở giữa là Bình nguyên Tùng Liêu đất đen phì nhiêu bậc nhất hành tinh; phía tây là thảo nguyên Khoa Nhĩ Thấm bán khô hạn. Khí hậu ôn đới lục địa gió mùa ẩm lạnh với băng tuyết tơi mịn nổi tiếng thế giới.",
        causality: "Lượng phù sa mùn đen dày giàu hữu cơ tại bình nguyên trung tâm (một trong ba vành đai đất đen lớn nhất thế giới) tạo nên vựa ngô, đậu nành và gạo đặc sản thượng hạng, đồng thời hệ sinh thái rừng rậm nguyên sinh Trường Bạch cho ra nguồn nhân sâm, nhung hươu và thảo dược quý giá nhất Đế quốc ('Đông Bắc tam bảo'). Lịch sử nhập cư liên vùng cùng cộng đồng người Triều Tiên bản địa lâu đời ở Châu tự trị Diên Biên tạo ra không gian giao thoa ẩm thực Hán – Mãn – Triều cực kỳ đặc sắc."
      },
      historicalEvolution: "Quê hương cổ đại của các bộ lạc Phù Dư (夫余), Cao Câu Ly (thủ đô Hoàn Đô Sơn Thành ở Tập An, Cát Lâm giai đoạn 3–427 CN) và vương quốc Bột Hải (渤海国) thời Đường. Thời Liêu–Kim là đất phát tích của tộc Nữ Chân Hoàng tộc Kim Triều; triều Thanh xem dãy Trường Bạch là 'Long Hưng chi địa' thiêng liêng và từng thi hành lệnh 'Phong cấm Quan Đông' trong suốt 200 năm. Thập niên 1930–1945 thành phố Trường Xuân mang dấu ấn lịch sử cận đại với hàng loạt công trình thời 'Mãn Châu Quốc'; từ năm 1953, Trung Quốc xây dựng nhà máy ô tô đầu tiên Đệ Nhất Ô Tô (FAW – 1953) và xưởng phim Trường Xuân (cái nôi điện ảnh CHND Trung Hoa) ngay tại đây.",
      culturalIdentity: "Cát Lâm mang nét trầm ấm hiền hòa của vùng rừng núi tuyết trắng kết hợp ký ức công nghiệp ô tô – điện ảnh Trường Xuân và bản sắc văn hóa dân tộc Triều Tiên tại Châu Tự trị Dân tộc Triều Tiên Diên Biên (延边朝鲜族自治州 – đường phố song ngữ Trung–Hàn, trang phục truyền thống và điệu múa trống dài).",
      heritageAndLandmarks: [
        { hanzi: "高句丽王城、王陵及贵族墓葬", pinyin: "Gāogōulì Wángchéng (Jí'ān)", hanViet: "Cao Câu Ly Vương thành · Tướng Quân Phần", nameVi: "Di sản Cao Câu Ly Tập An (UNESCO 2004)", significance: "Lưu giữ thành Hoàn Đô Sơn, bia đá Hảo Thái Vương (414 CN – tư liệu chữ Hán cổ cực quý) và Tướng Quân Phần bằng đá hoa cương kim tự tháp." },
        { hanzi: "长白山天池", pinyin: "Chángbáishān Tiānchí", hanViet: "Trường Bạch Sơn Thiên Trì", nameVi: "Núi thiêng Trường Bạch & Hồ miệng núi lửa Thiên Trì", significance: "Hồ núi lửa trên cao lớn nhất Trung Quốc (2.189 m), nguồn phát tích ba dòng sông lớn Tùng Hoa, Áp Lục và Đồ Môn." },
        { hanzi: "伪满皇宫博物院", pinyin: "Wěimǎn Huánggōng Bówùyuàn", hanViet: "Ngụy Mãn Hoàng Cung Bác Vật Viện", nameVi: "Bảo tàng Cung điện Ngụy Mãn Châu (Trường Xuân)", significance: "Khu di tích lịch sử cận đại ghi dấu 14 năm cuối đời hoàng đế Phổ Nghi từ 1932 đến 1945." },
        { hanzi: "吉林雾凇岛", pinyin: "Jílín Wùsōngdǎo", hanViet: "Cát Lâm Vụ Tùng Đảo", nameVi: "Kỳ quan Tuyết kết sương Vụ Tùng trên sông Tùng Hoa", significance: "Được mệnh danh một trong 'Tứ đại khí tượng kỳ quan Trung Quốc' khi hơi ấm từ sông Tùng Hoa không đóng băng ngưng tụ thành tinh thể trắng muốt trên hàng liễu mùa đông." },
        { hanzi: "查干湖冬捕", pinyin: "Chágànhú Dōngbǔ", hanViet: "Tra Can Hồ Đông Bộ", nameVi: "Đánh bắt cá băng mùa đông Hồ Tra Can", significance: "Di sản văn hóa săn cá dưới lớp băng dày hơn 1 mét bằng lưới kéo ngựa từ thời Liêu–Kim của người Mông Cổ Quách Nhĩ La Tư." }
      ],
      intangibleHeritage: "Nghi lễ Đánh cá băng mùa đông hồ Tra Can; Nghệ thuật Nhạc nông dân tộc Triều Tiên Diên Biên (Nongak – được UNESCO ghi danh); Kỹ thuật khai thác Nhân sâm hoang dã dãy Trường Bạch (Phóng sơn 放山); và nghề làm hộp gỗ Bạch Sơn – chạm đá Tùng Hoa.",
      culinaryCulture: {
        styleOverview: "Kết hợp tinh hoa Tống–Thanh ẩm thực cung đình săn bắn Mãn tộc (thịt thú, sâm núi, nấm rừng), vị thanh ngọt dẻo của gạo đất đen Tùng Liêu và gia vị lên men cay chua của người Triều Tiên vùng Diên Biên.",
        signatureDishes: [
          { hanzi: "延吉冷面", pinyin: "Yánjí lěngmiàn", hanViet: "Diên Cát lãnh diện (Mì lạnh đá kiểu Diên Biên)", description: "Sợi mì kiều mạch dai giòn ăn trong nước dùng hầm thịt bò lọc trong mát lạnh nổi đá bào, vị chua ngọt dịu ăn kèm kim chi, lê tuyết thái lát và trứng luộc." },
          { hanzi: "人参汽锅鸡", pinyin: "Rénshēn qìguōjī", hanViet: "Nhân sâm khí oa kê (Gà hấp nhân sâm Trường Bạch)", description: "Món bổ dưỡng đặc trưng dùng nhân sâm tươi Phủ Tùng 5 năm tuổi hấp cách thủy với gà đồi giữ nguyên tinh chất thanh ngọt." },
          { hanzi: "白肉血肠", pinyin: "Báiròu xuècháng", hanViet: "Bạch nhục huyết tràng (Thịt ba chỉ cải chua dồi tiết kiểu Mãn)", description: "Di sản yến tiệc tế lễ triều Thanh nấu ba chỉ thái thật mỏng, dồi tiết lợn mềm thơm cùng dưa cải thảo muối chua Đông Bắc." },
          { hanzi: "延边烤牛肉 · 参鸡汤", pinyin: "Yánbiān kǎoniúròu", hanViet: "Thịt bò nướng Diên Biên & Đậu tương gói thịt", description: "Thịt bò Diên Biên nuôi cỏ núi Trường Bạch ướp lê ngọt nướng trên than sồi thơm lừng." },
          { hanzi: "雪衣豆沙", pinyin: "Xuěyī dòushā", hanViet: "Tuyết y đậu sa (Bánh lòng trắng trứng đánh bông chiên tuyết)", description: "Món tráng miệng trứ danh Cát Lâm bọc nhân đậu đỏ trong lớp lòng trắng trứng đánh bông xốp như mây rồi chiên dầu ấm giữ sắc trắng tinh khiết." }
        ]
      },
      economyAndIndustry: "Được mệnh danh là 'Cái nôi Công nghiệp Ô tô Trung Hoa' với trụ sở Tập đoàn FAW (Hồng Kỳ 红旗 Hongqi, FAW-VW, FAW-Toyota), trung tâm sản xuất tàu cao tốc Phục Hưng và toa xe metro hiện đại bậc nhất thế giới tại CRRC Trường Xuân, cụm công nghiệp quang học (Viện Quang học Trường Xuân CIOMP), nông nghiệp ngô/gạo hàng đầu quốc gia và khu kinh tế cửa khẩu Diên Biên–Hồn Xuân hướng ra biển Nhật Bản.",
      vietnamConnectivity: "Sinh viên Việt Nam theo học các ngành Công nghệ Ô tô, Cơ điện tử, Quang học – Vật lý và Đông Bắc Á học tại Đại học Cát Lâm (吉林大学 – 985/Song Nhất Lưu, quy mô đào tạo lớn và nổi tiếng hàng đầu ngành Khảo cổ, Pháp luật, Ô tô và Hóa học tại Trường Xuân), Đại học Sư phạm Đông Bắc (东北师范大学 – 211/Song Nhất Lưu) và Đại học Diên Biên (延边大学 – 211/Song Nhất Lưu).",
      notableFigures: [
        { hanzi: "朱光亚", pinyin: "Zhū Guāngyà", hanViet: "Chu Quang Á", lifespan: "1924–2011", contribution: "Nhà vật lý hạt nhân kiệt xuất từng đặt nền móng cho bộ môn Vật lý tại Đại học Đông Bắc Nhân dân (Đại học Cát Lâm ngày nay)." },
        { hanzi: "张伯驹", pinyin: "Zhāng Bójū", hanViet: "Trương Bá Câu", lifespan: "1898–1982", contribution: "Đại gia sưu tầm văn vật lừng danh đã hiến tặng vô số quốc bảo (như *Bình Phục Thiếp* của Lục Cơ, *Du Xuân Đồ* của Triển Tử Khiên) và từng làm Phó viện trưởng Bảo tàng Tỉnh Cát Lâm." },
        { hanzi: "宋振庭 / 李四光纪念地", pinyin: "Lǐ Sìguāng", hanViet: "Các học giả địa chất Khai phá Đại Khánh – Tùng Liêu", lifespan: "Thế kỷ XX", contribution: "Đặt nền móng lý thuyết địa chất lục địa giúp phát hiện mỏ dầu lớn trên bình nguyên Tùng Liêu – Cát Lâm." }
      ],
      travelAndLogistics: "Tháng 7–9 mùa hè mát mẻ 22°C lý tưởng tránh nóng để leo Hồ Thiên Trì Trường Bạch; tháng 12–2 mùa trượt tuyết tơi mịn và ngắm sương kết Vụ Tùng (Tết Âm lịch). Sân bay Long Gia Trường Xuân (CGQ), Ga đường sắt Trường Xuân; tuyến cao tốc Trường Xuân – Cát Lâm – Diên Cát đi qua rừng thông và khu Trường Bạch rất thuận tiện. Gợi ý 4 ngày: Ngày 1 Trường Xuân (Ngụy Mãn Hoàng Cung – Bảo tàng Phim & Nhà máy Hồng Kỳ); Ngày 2 Thị trấn Đảo Vụ Tùng Cát Lâm; Ngày 3–4 Núi Trường Bạch Bắc Pha / Tây Pha & Phố ẩm thực Đại học Diên Biên.",
      mapCoordinates: { mapX: 734, mapY: 146, historicalCapitalEra: "Cao Câu Ly (Tập An) · Vương quốc Bột Hải", economicCorridor: "Vành đai Đông Bắc & Hoàn Bột Hải" }
    },
    "prov-heilongjiang": {
      identity: {
        hanziSimplified: "黑龙江省",
        hanziTraditional: "黑龍江省",
        pinyin: "Hēilóngjiāng Shěng",
        hanViet: "Hắc Long Giang Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "黑",
        abbreviationPinyin: "Hēi (Hắc)",
        abbreviationOrigin: "Đặt theo tên con sông Hắc Long Giang (Amur) chảy dọc biên giới phía bắc tỉnh có màu nước thẫm giàu chất hữu cơ rừng rậm và hình thế uốn lượn như rồng đen (trong tiếng Mãn gọi là Sahaliyan Ula – 'Sông Đen'); dùng chữ 黑 làm chữ viết tắt duy nhất của vùng cực Bắc Trung Quốc.",
        capitalCity: "Cáp Nhĩ Tân (哈尔滨市 Hā'ěrbīn Shì – Cáp Nhĩ Tân)"
      },
      geographyAndClimate: {
        summary: "Là tỉnh cực Bắc và cực Đông của Trung Quốc (hành lang Bắc Cực – Khố Mô Hà / Mạc Hà ở 53° Bắc có hiện tượng Bạch Dạ mùa hạ và cực quang). Địa hình được mệnh danh 'Ngũ sơn nhất thủy nhất thảo tam phân điền': vùng núi Đại Hưng An Lĩnh ở tây bắc, Tiểu Hưng An Lĩnh ở phía bắc, dãy Trường Bạch ở đông nam ôm trọn Đồng bằng Tam Giang (Sông Hắc Long Giang – Tùng Hoa – Ô Tô Lý) và Đồng bằng Tùng Nộn rộng mênh mông ở trung tâm. Khí hậu hàn đới – ôn đới lục địa lạnh nhất Trung Quốc với mùa đông kéo dài 6 tháng (-20°C đến -40°C).",
        causality: "Nước sông Tùng Hoa đóng băng dày tới 1,5 m suốt 5 tháng mùa đông biến Cáp Nhĩ Tân thành thủ phủ điêu khắc băng đăng lớn nhất hành tinh, nơi người dân tận dụng ngay sông băng làm vật liệu kiến trúc thành phố mùa đông. Lớp đất đen Phù Sa (Chernozem) đóng băng mùa đông không bị vi sinh vật phân hủy quá nhanh giúp bảo toàn độ màu mỡ cực đại biến 'Bắc Đại Hoang' xưa thành 'Bắc Đại Thương' – kho lương thực số 1 bảo đảm an ninh lương thực cho 1,4 tỷ dân. Giao thoa lịch sử đường sắt Trung Đông (1898) lại tạo ra bản sắc đô thị lai Nga–Trung với bánh mì nướng củi Đại Liệt Ba và nhà thờ vòm củ hành."
      },
      historicalEvolution: "Quê hương cổ đại của tộc Túc Thận – Mạt Hạt – Nữ Chân lập nên vương triều Kim (1115 CN với Thượng Kinh Hội Ninh phủ ngay tại A Thành, Cáp Nhĩ Tân) và đất phát tích cộng đồng người Hách Triết đánh cá ven sông Ô Tô Lý. Thời Minh đặt Nô Nhi Can Đô Ty; đầu triều Thanh nổ ra trận Nhã Khắc Tát (1685–1689) dẫn tới Điều ước Ni Bố Sở phân định biên giới Trung–Nga. Cuối thế kỷ XIX, việc Nga xây tuyến Đường sắt Trung Đông biến làng chài Cáp Nhĩ Tân thành đô thị đa quốc gia sầm uất nhất Viễn Đông đầu thế kỷ XX (có tới hơn 16 lãnh sự quán). Sau năm 1949, Hàng triệu thanh niên khai hoang biến đầm lầy Tam Giang thành nông trường cơ giới lớn nhất cả nước và phát hiện mỏ dầu Đại Khánh (1959).",
      culturalIdentity: "Sự kết hợp đặc biệt giữa tinh thần hoang dã đại ngàn Hưng An Lĩnh, khí chất cởi mở hào phóng phương Bắc ('Tâm tính rộng như bình nguyên Tam Giang'), di sản âm nhạc cổ điển – kiến trúc Baroque / Tân Nghệ thuật từ cộng đồng Nga–Do Thái đầu thế kỷ XX tại Cáp Nhĩ Tân ('Thành phố Âm nhạc UNESCO') và văn hóa săn cá da cá tầm của dân tộc ít người Hách Triết.",
      heritageAndLandmarks: [
        { hanzi: "哈尔滨中央大街与圣索菲亚教堂", pinyin: "Zhōngyāng Dàjiē yǔ Shèng Suǒfēiyà Jiàotáng", hanViet: "Trung Ương Đại Nhai dữ Thánh Sophia Giáo Đường", nameVi: "Phố đi bộ lát đá Đại lộ Trung Ương & Nhà thờ Thánh Sophia (1907)", significance: "Khu phố kiến trúc Phục hưng – Baroque – Art Nouveau bảo tồn hơn 70 công trình lịch sử đường sắt Viễn Đông cùng lát đá bánh mì từ năm 1924." },
        { hanzi: "哈尔滨冰雪大世界", pinyin: "Hā'ěrbīn Bīngxuě Dàshìjiè", hanViet: "Cáp Nhĩ Tân Băng Tuyết Đại Thế Giới", nameVi: "Thế giới Băng Tuyết Quốc tế Cáp Nhĩ Tân", significance: "Công viên điêu khắc kiến trúc bằng hàng trăm nghìn mét khối băng sông Tùng Hoa lớn nhất hành tinh." },
        { hanzi: "五大连池风景区", pinyin: "Wǔdàliánchí Fēngjǐngqū", hanViet: "Ngũ Đại Liên Trì Phong cảnh khu", nameVi: "Công viên Địa chất Toàn cầu Ngũ Đại Liên Trì (UNESCO)", significance: "Năm hồ dung nham núi lửa nối liền nhau hình thành từ các đợt phun trào thế kỷ XVIII được mệnh danh 'Bảo tàng núi lửa thiên nhiên'." },
        { hanzi: "镜泊湖世界地质公园", pinyin: "Jìngpōhú Shìjiè Dìzhì Gōngyuán", hanViet: "Kính Bạc Hồ Thế giới Địa chất Công viên", nameVi: "Hồ dung nham chắn dòng Kính Bạc & Thác Điếu Thủy Lâu", significance: "Hồ trên núi hình thành do dòng dung nham chắn sông Mẫu Đơn Giang 1 vạn năm trước với thác băng ngoạn mục mùa đông." },
        { hanzi: "漠河北极村", pinyin: "Mòhé Běijícūn", hanViet: "Mạc Hà Bắc Cực Thôn", nameVi: "Làng Cực Bắc Mạc Hà (53°33'N)", significance: "Điểm dân cư cực bắc lãnh thổ Trung Quốc bên sông Hắc Long Giang, nơi chiêm ngưỡng hiện tượng đêm trắng và cực quang mùa hạ." }
      ],
      intangibleHeritage: "Nghệ thuật Y Mã Kham (伊玛堪 Yīmǎkān – sử thi hát kể truyền miệng của người Hách Triết, được UNESCO bảo vệ khẩn cấp); Kỹ thuật may quần áo từ da cá của người Hách Triết; Tranh vảy cá và điêu khắc băng tuyết truyền thống sông Tùng Hoa.",
      culinaryCulture: {
        styleOverview: "Long Thái (龙江菜 Lóngjiāngcài) là sự dung hòa hào phóng giữa món hầm nồi gang Đông Bắc, thịt thú/cá sông lạnh 'Tam Hoa Ngũ La' sông Ô Tô Lý và di sản bánh mì – xúc xích – súp borsch Tây phương tại Cáp Nhĩ Tân.",
        signatureDishes: [
          { hanzi: "哈尔滨红肠 & 大列巴", pinyin: "Hā'ěrbīn hóngcháng & Dàlièbā", hanViet: "Hồng tràng Cáp Nhĩ Tân & Bánh mì Đại Liệt Ba", description: "Xúc xích thịt hun khói gỗ quả sơn tiêu đậm vị tỏi kiểu Đông Âu (hãng Thu Lâm Lí Đạo Tư từ 1900) ăn kèm ổ bánh mì lúa mạch nướng lò củi nặng tới 2,5 kg." },
          { hanzi: "铁锅炖大鹅", pinyin: "Tiěguō dùn dà'é", hanViet: "Thiết oa đốn đại nga (Nồi gang hầm ngỗng Đông Bắc)", description: "Ngỗng đồng bằng Tùng Nộn om nhừ trong chảo gang khổng lồ với khoai tây, miến, đậu đũa và bánh ngô dán xung quanh thành chảo nóng rực giữa bếp than." },
          { hanzi: "杀猪菜", pinyin: "Shāzhūcài", hanViet: "Sát trư thái (Tiệc lợn mổ cuối năm)", description: "Món tụ họp mùa đông trứ danh gồm dưa cải chua Đông Bắc om sườn, dồi tiết, ba chỉ luộc thái mỏng chấm xốt tỏi." },
          { hanzi: "得莫利炖活鱼", pinyin: "Démòlì dùn huóyú", hanViet: "Đắc Mạc Lợi đốn hoạt ngư", description: "Cá chép sống sông Tùng Hoa om tương đậu vùng Phương Chính với đậu phụ thấm đẫm và miến khoai bản rộng." },
          { hanzi: "马迭尔冰棍", pinyin: "Mǎdié'ěr bīnggùn", hanViet: "Kem Que Modern (1906)", description: "Món kem sữa trứng vani ra đời năm 1906 tại Khách sạn Modern trên Đại lộ Trung Ương: người Cáp Nhĩ Tân truyền thống ăn kem ngay giữa trời -20°C mùa đông!" }
        ]
      },
      economyAndIndustry: "Số 1 cả nước về tổng sản lượng ngũ cốc (đặc biệt gạo Ngũ Thường nổi tiếng thơm dẻo và đậu nành không biến đổi gen), công nghiệp chế tạo tua-bin thủy điện/điện hạt nhân cỡ lớn (Tập đoàn Điện khí Cáp Nhĩ Tân – HEI), sản xuất trực thăng công nghiệp (Harbin Aircraft), hóa dầu Đại Khánh và cửa ngõ giao thương biên mậu đường bộ–đường sắt trọng yếu Trung–Nga qua Tuyền Hà – Mãn Châu Lý.",
      vietnamConnectivity: "Học viện Công nghiệp Cáp Nhĩ Tân (哈尔滨工业大学 HIT – thành viên sáng lập C9 League / 985 / Song Nhất Lưu hàng đầu thế giới về Hàng không vũ trụ, Robot, Kỹ thuật dân dụng và Tự động hóa) cùng Đại học Kỹ thuật Cáp Nhĩ Tân (HEU – 211/Song Nhất Lưu) và Đại học Nông nghiệp Đông Bắc đào tạo rất nhiều thạc sĩ, tiến sĩ Việt Nam ngành kỹ thuật cao và công nghệ thực phẩm.",
      notableFigures: [
        { hanzi: "完颜阿骨打", pinyin: "Wányán Āgǔdǎ", hanViet: "Hoàn Nhan A Cốt Đả", lifespan: "1068–1123", contribution: "Vị vua khai quốc vương triều Đại Kim (1115–1234) thống nhất các bộ tộc Nữ Chân vùng sông Á Thập (nay thuộc Cáp Nhĩ Tân)." },
        { hanzi: "萧红", pinyin: "Xiāo Hóng", hanViet: "Tiêu Hồng", lifespan: "1911–1942", contribution: "Nữ văn sĩ xuất chúng nhất thời Dân Quốc quê Hô Lan (Cáp Nhĩ Tân), tác giả tuyệt tác *Truyện Sông Hô Lan* (呼兰河传) thấm đẫm tình yêu quê hương miền Bắc." },
        { hanzi: "伍连德纪念馆", pinyin: "Wǔ Liándé", hanViet: "Bác sĩ Ngũ Liên Đức", lifespan: "1879–1960", contribution: "Người tiên phong phòng chống đại dịch tại Cáp Nhĩ Tân (1910–1911), phát minh ra khẩu trang vải nhiều lớp (tiền thân N95) giúp dập tắt dịch hạch phổi Mãn Châu trong 4 tháng." }
      ],
      travelAndLogistics: "Tháng 12–2 là thiên đường du lịch mùa đông quốc tế (Lễ hội Băng Tuyết Cáp Nhĩ Tân – Làng Tuyết Trung Hoa 雪乡 – Mạc Hà); tháng 6–8 là thiên đường tránh nóng (nhiệt độ trung bình 21°C). Sân bay Quốc tế Thái Bình Cáp Nhĩ Tân (HRB); tàu cao tốc Cáp Nhĩ Tân – Đại Liên và Cáp Nhĩ Tân – Tế Nam/Bắc Kinh (4h30). Gợi ý 4 ngày mùa đông: Ngày 1 Nhà thờ Thánh Sophia – Đại lộ Trung Ương – Thế giới Băng Tuyết; Ngày 2 Đảo Mặt Trời & Công viên Hổ Đông Bắc; Ngày 3–4 Trượt tuyết Á Bố Lực & Làng Tuyết (Xuěxiāng).",
      mapCoordinates: { mapX: 762, mapY: 92, historicalCapitalEra: "Thượng Kinh Hội Ninh (Nhà Kim) · Đô thị Viễn Đông", economicCorridor: "Vành đai Đông Bắc & Hoàn Bột Hải" }
    },
    "prov-jiangsu": {
      identity: {
        hanziSimplified: "江苏省",
        hanziTraditional: "江苏省",
        pinyin: "Jiāngsū Shěng",
        hanViet: "Giang Tô Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "苏",
        abbreviationPinyin: "Sū (Tô)",
        abbreviationOrigin: "Tên tỉnh được thiết lập đầu triều Thanh năm 1667 bằng cách ghép chữ đầu của hai phủ phú cường nhất vùng: Giang Ninh Phủ (江宁府 – nay là Nam Kinh) và Tô Châu Phủ (苏州府 – Tô Châu); chọn chữ 苏 (Tô – biểu tượng vùng thủy hương lúa cá Giang Nam) làm chữ viết tắt toàn tỉnh.",
        capitalCity: "Nam Kinh (南京市 Nánjīng Shì – Nam Kinh)"
      },
      geographyAndClimate: {
        summary: "Nằm ở hạ lưu cực đông bình nguyên sông Trường Giang và sông Hoài Hà, giáp Hoàng Hải ở phía đông, ở bậc thềm thứ ba cực thấp phẳng (tỉnh có tỷ lệ đồng bằng cao nhất Trung Quốc – trên 68%). Cả tỉnh có mật độ hồ nước ngọt dày đặc nhất cả nước: Thái Hồ (太湖), Hồng Trạch Hồ (洪泽湖), Cao Bưu Hồ và hệ thống Đại Vận Hà Kinh–Hàng chảy dọc toàn tỉnh từ Từ Châu xuống Tô Châu. Khí hậu chuyển tiếp từ ôn đới gió mùa (Giang Bắc – Từ Châu) sang cận nhiệt đới ẩm (Tô Nam).",
        causality: "Hệ thống sông hồ nối liền Đại Vận Hà tạo nên mạng lưới thủy vận giá rẻ chi phí thấp, đẩy mạnh thâm canh lúa nước ('Tô Hồ thục, thiên hạ túc' – Tô Châu và Hồ Châu được mùa thì thiên hạ đủ ăn từ đời Tống), trồng dâu nuôi tằm và thương mại gốm sứ – lụa tơ tằm. Phù sa giàu dưỡng chất sinh ra truyền thống văn hóa thi thư khoa cử đạt tỷ lệ Trạng nguyên cao nhất trong lịch sử Trung Hoa (riêng triều Thanh Giang Tô có tới gần 49/114 Trạng nguyên toàn quốc), cùng kiến trúc nhà vườn tinh xảo dùng đá vôi Thái Hồ và không gian thanh tịnh."
      },
      historicalEvolution: "Mở đầu là Vương quốc Ngô (吴国) thời Xuân Thu tại Vô Tích – Tô Châu (Tôn Vũ viết *Binh pháp Tôn Tử* phụng sự Ngô vương Hạp Lư) và đất Bái quê hương Hán Cao Tổ Lưu Bang tại Từ Châu. Từ thời Đông Tấn (317) đến Nam triều (Tống – Tề – Lương – Trần), sự kiện 'Y quan Nam độ' đã đưa Nam Kinh (Kiến Khang) trở thành kinh đô của Lục Triều giữ gìn hoa tinh Hoa Hạ, kéo dài sang Nam Đường, đầu triều Minh (Chu Nguyên Chương đóng đô tại Ứng Thiên Phủ và dựng Minh Hiếu Lăng 1368–1421), Thái Bình Thiên Quốc (Thiên Kinh) và Trung Hoa Dân Quốc (1927–1949).",
      culturalIdentity: "Giang Tô hội tụ ba tiểu vùng văn hóa đặc sắc trên cùng một dải đất: Văn hóa Kim Lăng hào hoa lịch sử (Nam Kinh), Văn hóa Ngô – Giang Nam tao nhã thanh quý (Tô Châu – Vô Tích – Thường Châu), Văn hóa Hoài Dương phong lưu phú quý (Dương Châu – Diêm Thành) và Văn hóa Hán Sở hào hùng phương Bắc (Từ Châu). Đặc biệt, truyền thống 'Sùng văn trọng giáo' (tôn thờ văn chương giáo dục) của sĩ phu Giang Tô đạt tới đỉnh cao khoa bảng Đông Á.",
      heritageAndLandmarks: [
        { hanzi: "苏州古典园林", pinyin: "Sūzhōu Gǔdiǎn Yuánlín", hanViet: "Tô Châu Cổ Điển Viên Lâm", nameVi: "Viên lâm Cổ điển Tô Châu (UNESCO 1997)", significance: "Chuyết Chính Viên, Lưu Viên, Võng Sư Viên, Thương Lãng Đình — đỉnh cao triết lý 'Thiên nhân hợp nhất' và thủ pháp mượn cảnh 'Tá cảnh' trong kiến trúc sân vườn." },
        { hanzi: "明孝陵（南京）", pinyin: "Míng Xiàolíng", hanViet: "Minh Hiếu Lăng", nameVi: "Lăng mộ Minh Thái Tổ Chu Nguyên Chương (UNESCO)", significance: "Khởi nguồn mô hình Thần đạo và kiến trúc hoàng lăng cho toàn bộ Thập Tam Lăng triều Minh–Thanh suốt hơn 500 năm." },
        { hanzi: "中国大运河（扬州 · 苏州段）", pinyin: "Dà Yùnhé", hanViet: "Trung Quốc Đại Vận Hà", nameVi: "Đại Vận Hà Kinh – Hàng (UNESCO 2014)", significance: "Tuyến kênh đào nhân tạo dài nhất thế giới nuôi dưỡng hưng thịnh của thương nhân muối Dương Châu và lụa Tô Châu." },
        { hanzi: "中山陵与夫子庙秦淮河", pinyin: "Zhōngshānlíng yǔ Fūzǐmiào", hanViet: "Trung Sơn Lăng dữ Phu Tử Miếu Tần Hoài Hà", nameVi: "Lăng Tôn Trung Sơn & Trường thi Giang Nam Cống Viện", significance: "Công trình kiến trúc lăng tẩm hiện đại đồ sộ trên núi Tử Kim Sơn và trường thi khoa cử lớn nhất thời Minh–Thanh cạnh sông Tần Hoài." },
        { hanzi: "瘦西湖与平江路历史街区", pinyin: "Shòu Xīhú", hanViet: "Sấu Tây Hồ & Phố cổ Bình Giang", nameVi: "Hồ Sấu Tây Dương Châu & Phố nước Bình Giang", significance: "Quần thể cảnh quan hồ uyển chuyển thơ mộng được vua Càn Long sáu lần tuần du phương Nam ghé thăm." }
      ],
      intangibleHeritage: "Côn khúc (昆曲 Kūnqǔ – 'Tổ của trăm loài hí kịch' ra đời tại Côn Sơn, được UNESCO ghi danh kiệt tác nhân loại năm 2001); Nghề dệt lụa gấm Vân Cẩm Nam Kinh (南京云锦 – dùng riêng cho Long bào hoàng đế); Thêu Tô Tú (苏绣 – đứng đầu Tứ đại danh tú); Chạm ngọc Dương Châu; Nghệ thuật làm ấm đất Tử sa Nghi Hưng (宜兴紫砂) và Nhạc Cầm Bình Đàn Tô Châu.",
      culinaryCulture: {
        styleOverview: "Tô Thái (苏菜 Sūcài) – một trong Bát Đại Thái Hệ nổi danh với kỹ thuật dùng dao tuyệt kỹ (đậu phụ thái mịn như sợi tóc), hương vị nguyên chất thanh tao hơi ngọt, nấu kỹ ninh nhừ nhưng giữ hình khối mỹ thuật.",
        signatureDishes: [
          { hanzi: "松鼠鳜鱼", pinyin: "Sōngshǔ guìyú", hanViet: "Tùng thử quế ngư (Cá quế hình sóc)", description: "Tuyệt kỹ dao nhà hàng Tùng Hạc Lâu Tô Châu: cá quế khứa carô lộn ngược rồi chiên vàng phồng vồng như đuôi sóc, rưới xốt chua ngọt nóng bốc tiếng kêu xèo xèo." },
          { hanzi: "清炖狮子头", pinyin: "Qīngdùn shīzitóu", hanViet: "Thanh đốn sư tử đầu (Thịt viên đầu sư tử Dương Châu)", description: "Thịt ba chỉ 'tỷ lệ 7 nạc 3 mỡ' hoàn toàn băm bằng tay (không xay), nặn to như nắm tay bọc lá cải thảo ninh trong nước dùng gà lửa thật liu riu đến tan trong miệng." },
          { hanzi: "南京盐水鸭", pinyin: "Nánjīng yánshuǐyā", hanViet: "Nam Kinh diêm thủy áp (Vịt nước muối Nam Kinh)", description: "Vịt trắng vùng hồ Thái Hồ ướp muối hoa tiêu quế hoa rồi chần chậm ở nhiệt độ dưới sôi tạo lớp da trắng ngà giòn tan, thịt hồng thơm lừng không béo ngấy." },
          { hanzi: "扬州干丝（大煮干丝）", pinyin: "Yángzhōu gānsī", hanViet: "Dương Châu đại chử can ti", description: "Một bìa đậu phụ ép mỏng được thái thành 30–40 sợi tơ mảnh tăm tắp, chần nước sôi rồi hầm cùng gà xé, tôm khô và măng thành món thanh đạm chuẩn Hoài Dương." },
          { hanzi: "阳澄湖大闸蟹", pinyin: "Yángchénghú dàzháxiè", hanViet: "Dương Trừng Hồ đại áp giải (Cua lông hồ Dương Trừng)", description: "Thủy sản danh tiếng bậc nhất mùa thu Giang Nam thịt ngọt gạch son vàng óng, hấp cùng gừng tía tô chấm giấm gừng nóng." }
        ]
      },
      economyAndIndustry: "GDP đứng thứ 2 toàn quốc (~12,82 nghìn tỷ NDT, ~1,8 nghìn tỷ USD, chỉ sau Quảng Đông nhưng đồng đều nhất Trung Quốc với tất cả 13 địa cấp thị đều lọt Top 100 GDP cả nước!). Tập trung tại Vành đai Công nghệ Công nghiệp Tô Châu (SIP – Khu công nghiệp hợp tác Trung–Sing), Vô Tích (trung tâm đóng gói kiểm thử bán dẫn, thiết bị y tế và IoT), Nam Kinh (phần mềm, hóa dầu, xe điện), Thường Châu (thủ phủ pin xe điện CATL/BYD toàn cầu) và Nam Thông – Liên Vân Cảng (cửa biển thương mại Đông Tây).",
      vietnamConnectivity: "Giang Tô (đặc biệt Tô Châu, Vô Tích, Nam Kinh, Thường Châu) là nguồn FDI công nghiệp trực tiếp lớn từ Trung Quốc đại lục sang khu công nghiệp Bắc Ninh, Hải Phòng, Bình Dương của Việt Nam trong ngành linh kiện bán dẫn, điện tử tiêu dùng, năng lượng mặt trời và dệt nhuộm công nghệ cao. Về giáo dục, Nam Kinh đứng thứ 3 Trung Quốc về mật độ trường đại học tinh hoa: Đại học Nam Kinh (南京大学 – 985/C9), Đại học Đông Nam (东南大学 – 985/C9 Kiến trúc & 5G/6G), Đại học Nông nghiệp Nam Kinh, Đại học Sư phạm Nam Kinh và Đại học Tô Châu (211/Song Nhất Lưu) có cộng đồng du học sinh Việt Nam rất lớn và gắn kết.",
      notableFigures: [
        { hanzi: "孙武", pinyin: "Sūn Wǔ", hanViet: "Tôn Vũ (Tôn Tử)", lifespan: "544–496 TCN", contribution: "Nhà quân sự vĩ đại viết bộ *Binh pháp Tôn Tử* (13 thiên) tại ngoại ô thành Cô Tô (Tô Châu) giúp nước Ngô xưng bá." },
        { hanzi: "祖冲之 · 顾恺之", pinyin: "Gù Kǎizhī", hanViet: "Cố Khải Chi", lifespan: "k. 345–406", contribution: "Ông tổ hội họa Trung Hoa (gốc Vô Tích) sáng tác *Lạc Thần Phú Đồ* và *Nữ Sử Châm Đồ*, người đặt ra lý thuyết mỹ học 'Dĩ hình tả thần'." },
        { hanzi: "沈括", pinyin: "Shěn Kuò", hanViet: "Thẩm Quát", lifespan: "1031–1095", contribution: "Nhà bác học vĩ đại đời Tống cuối đời ẩn cư tại Mộng Khê Viên (Trấn Giang, Giang Tô) và hoàn thành bộ *Mộng Khê Bút Đàm* kinh điển." },
        { hanzi: "吴承恩 / 施耐庵", pinyin: "Wú Chéng'ēn / Shī Nài'ān", hanViet: "Ngô Thừa Ân & Thi Nại Am", lifespan: "Thế kỷ XIV–XVI", contribution: "Hai đại tiểu thuyết gia quê Hoài An và Hưng Hóa (Giang Tô), tác giả *Tây Du Ký* và *Thủy Hử Truyện* trong Tứ Đại Danh Tác." }
      ],
      travelAndLogistics: "Tháng 3–5 mùa hoa anh đào Vô Tích – liễu rủ Tây Hồ Dương Châu và tháng 10–11 mùa cua lông ăn lá phong đỏ Núi Thiên Bình Tô Châu. Sân bay Lộc Khẩu Nam Kinh (NKG), Sân bay Thạc Phóng Vô Tích; mạng lưới đường sắt cao tốc Kinh–Hỗ & Hỗ–Ninh kết nối Nam Kinh – Trấn Giang – Thường Châu – Vô Tích – Tô Châu với Thượng Hải chỉ trong 25–60 phút! Hành trình 4 ngày: Ngày 1 Nam Kinh (Minh Hiếu Lăng – Tần Hoài); Ngày 2 Dương Châu (Sấu Tây Hồ – Vận Hà); Ngày 3–4 Tô Châu (Chuyết Chính Viên – Hàn Sơn Tự – Chu Trang).",
      mapCoordinates: { mapX: 646, mapY: 326, historicalCapitalEra: "Lục Triều Kiến Khang · Sơ Minh (Nam Kinh) · Tô Châu", economicCorridor: "Châu thổ Trường Giang (长三角)" }
    },
    "prov-zhejiang": {
      identity: {
        hanziSimplified: "浙江省",
        hanziTraditional: "浙江省",
        pinyin: "Zhèjiāng Shěng",
        hanViet: "Chiết Giang Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "浙",
        abbreviationPinyin: "Zhè (Chiết)",
        abbreviationOrigin: "Tên gọi lấy theo sông Chiết Giang (tức sông Tiền Đường 钱塘江); trong chữ Hán, 'Chiết' (折) có nghĩa là uốn khúc gấp khúc chữ Z – mô tả chính xác dáng sông Tiền Đường uốn lượn quanh núi trước khi đổ ra vịnh Hàng Châu.",
        capitalCity: "Hàng Châu (杭州市 Hángzhōu Shì – Hàng Châu)"
      },
      geographyAndClimate: {
        summary: "Nằm ở cánh nam Tam giác Trường Giang bên bờ Biển Đông ở bậc thềm thứ ba, sở hữu cấu trúc địa lý cô đọng 'Thất sơn nhất thủy lưỡng phân điền' (70% núi đồi và thung lũng sông nhỏ phía nam, 10% sông hồ, chỉ 20% đồng bằng vùng Hàng–Gia–Hồ phía bắc). Đường bờ biển dài và quanh co với hàng nghìn đảo lớn nhỏ (quần đảo Chu Sơn – đông đảo nhất Trung Quốc). Khí hậu cận nhiệt đới gió mùa ẩm nhiều sương mù dịu nhẹ vùng đồi núi và mùa thủy triều dâng cao ngoạn mục trên Vịnh Hàng Châu hình phễu.",
        causality: "Chính sự khan hiếm đất nông nghiệp (70% đồi núi, dân đông đất chật) ở các vùng Ôn Châu, Nghĩa Ô, Ninh Ba đã buộc người Chiết Giang ngay từ thời Nam Tống phải bươn chải đi buôn bán khắp bốn phương ('Đi khắp thiên hạ như chim én Ôn Châu'), chuyển hóa áp lực sinh tồn thành văn hóa thương nhân cực kỳ nhạy bén với chuỗi cung ứng nhỏ lẻ và thương mại điện tử hiện đại. Ngược lại, những triền đồi sương mù ấm ẩm quanh Tây Hồ và Ngàn Đảo lại nuôi lớn danh trà Tây Hồ Long Tỉnh và nghệ thuật sơn thủy Tống–Nguyên đậm chất thiền vị."
      },
      historicalEvolution: "Nơi lưu giữ dấu ấn nền văn minh lúa nước sớm nhất Trung Quốc tại Hà Mẫu Độ (河姆渡, 5000–3300 TCN ở Dư Diêu) và nền văn minh đô thị ngọc khí Lương Chử (良渚文化, 3300–2300 TCN tại Hàng Châu – UNESCO 2019). Thời Xuân Thu là trung tâm nước Việt (越国) của Việt Vương Câu Tiễn ('Nằm gai nếm mật'). Thời Ngũ Đại có Vương quốc Ngô–Việt (Tiền Lưu); đỉnh cao huy hoàng là giai đoạn Nam Tống (1127–1279) định đô tại Lâm An (Hàng Châu) – đô thị thịnh vượng bậc nhất thế giới thời bấy giờ qua lời kể của Marco Polo ('Thành phố Thiên đường'). Thời Minh–Thanh là quê hương Học phái Tâm học Chiết Đông của Vương Dương Minh, Hoàng Tông Hy và bến cảng Minh Châu (Ninh Ba).",
      culturalIdentity: "Sự kết hợp lý tưởng giữa mỹ học tinh thần 'Thi họa Giang Nam' nhẹ nhàng tĩnh tại (với Hàng Châu được mệnh danh là 'Thiên đường hạ giới' cùng Tô Châu: Thượng hữu thiên đường, hạ hữu Tô Hàng 上有天堂，下有苏杭) với 'Văn hóa Thương nhân Ôn–Nghĩa–Hàng' thực nghiệp: dám khởi nghiệp từ những xưởng gia đình nhỏ để xây dựng đế chế thương mại toàn cầu (Tư duy 'Tứ thiên tinh thần' của Chiết Thương).",
      heritageAndLandmarks: [
        { hanzi: "杭州西湖文化景观", pinyin: "Hángzhōu Xīhú Wénhuà Jǐngguān", hanViet: "Hàng Châu Tây Hồ Văn hóa Cảnh quan", nameVi: "Tây Hồ Hàng Châu (UNESCO 2011)", significance: "Khu cảnh quan 'Tam diện vân sơn nhất diện thành' với Tô Đê, Bạch Đê, Lôi Phong Tháp – nguyên mẫu thẩm mỹ cho hàng nghìn lâm viên khắp Đông Á." },
        { hanzi: "良渚古城遗址", pinyin: "Liángzhǔ Gǔchéng Yízhǐ", hanViet: "Lương Chử Cổ Thành Di chỉ", nameVi: "Di chỉ Thành cổ Lương Chử (UNESCO 2019)", significance: "Xác chứng lịch sử 5.000 năm văn minh hoa đồng – ngọc khí (Ngọc Tông – Ngọc Bích) và hệ thống đập thủy lợi cổ nhất Trung Quốc." },
        { hanzi: "天一阁博物院", pinyin: "Tiānyīgè Bówùyuàn", hanViet: "Thiên Nhất Các (Ninh Ba)", nameVi: "Thư viện Cổ Thiên Nhất Các (1561)", significance: "Tòa lầu tàng thư tư nhân cổ nhất châu Á còn tồn tại liên tục suốt 460 năm do Phạm Khâm xây dựng." },
        { hanzi: "乌镇与西塘古镇", pinyin: "Wūzhèn yǔ Xītáng", hanViet: "Ô Trấn dữ Tây Đường", nameVi: "Cổ trấn Thủy hương Ô Trấn & Tây Đường", significance: "Kiến trúc nhà sàn gỗ ven kênh rạch Giang Nam 1.300 năm – nơi hiện nay tổ chức Hội nghị Internet Thế giới (WIC)." },
        { hanzi: "普陀山（海天佛国）", pinyin: "Pǔtuóshān", hanViet: "Phổ Đà Sơn (Hải Thiên Phật Quốc)", nameVi: "Phổ Đà Sơn Quần đảo Chu Sơn", significance: "Một trong Tứ đại Danh sơn Phật giáo Trung Hoa, đạo tràng thờ Quán Thế Âm Bồ Tát giữa biển Đông." }
      ],
      intangibleHeritage: "Nghề sản xuất Trà xanh Tây Hồ Long Tỉnh (trà ngự dụng đứng đầu Thập đại Danh trà Trung Quốc); Công nghệ tằm tang dệt lụa Hàng Châu (UNESCO); Nghề làm gốm thanh từ Long Tuyền (龙泉青瓷 – sứ duy nhất đạt danh hiệu UNESCO); Nghệ thuật Việt kịch Thiệu Hưng (越剧) nhẹ nhàng bay bổng; Chạm khắc đá Thanh Điền và Gỗ Đông Dương.",
      culinaryCulture: {
        styleOverview: "Chiết Thái (浙菜 Zhècài) nằm trong Bát Đại Thái Hệ, chia 4 nhánh Hàng Châu – Ninh Ba – Thiệu Hưng – Ôn Châu, lấy 'tươi giòn, mềm mịn, thơm thanh, giữ nguyên mùi tự nhiên và không dầu mỡ' làm quy tắc tối thượng.",
        signatureDishes: [
          { hanzi: "西湖醋鱼", pinyin: "Xīhú cùyú", hanViet: "Tây Hồ thố ngư (Cá trắm chần xốt giấm chua ngọt)", description: "Cá trắm thả nhịn đói hai ngày hết bùn, phi lê cắt đao luộc chín tới giữ nguyên độ mọng thịt rồi phủ xốt giấm Mễ Tố sóng sánh chua ngọt tinh tế." },
          { hanzi: "东坡肉", pinyin: "Dōngpōròu", hanViet: "Đông Pha nhục (Thịt kho Đông Pha)", description: "Sáng tạo của đại thi hào Tô Thức khi làm Tri phủ Hàng Châu: khối thịt ba chỉ vuông buộc lạt nếp om chậm bằng rượu vàng Thiệu Hưng, không thêm nước, mềm tan như thạch." },
          { hanzi: "龙井虾仁", pinyin: "Lóngjǐng xiārén", hanViet: "Long Tỉnh hà nhân (Tôm sông xào lá trà Long Tỉnh)", description: "Tôm sông tươi bóc nõn xào nhanh tay cùng nước và búp trà xanh Tây Hồ Long Tỉnh vụ Xuân tạo sắc trắng ngọc xanh mướt thanh tao." },
          { hanzi: "叫花鸡", pinyin: "Jiàohuājī", hanViet: "Khiếu hoa kê (Gà ăn mày bọc đất sét)", description: "Gà nhồi nấm mộc nhĩ, thịt thăn gói lá sen Tây Hồ bọc đất sét rượu Thiệu Hưng nướng chậm trong tro nóng thơm ngát." },
          { hanzi: "绍兴黄酒与茴香豆", pinyin: "Shàoxīng huángjiǔ", hanViet: "Thiệu Hưng hoàng tửu (Rượu vàng Nữ Nhi Hồng)", description: "Quốc tửu cổ truyền làm từ gạo nếp và nước hồ Giám Hồ ủ chôn vò sành nhiều năm, uống ấm cùng đậu tằm hồi hương." }
        ]
      },
      economyAndIndustry: "GDP đạt ~8,25 nghìn tỷ NDT (Top 4 Trung Quốc), dẫn đầu toàn quốc về kinh tế tư nhân và thương mại điện tử toàn cầu! Hàng Châu là trụ sở Alibaba, Ant Group, Geely Auto, Hikvision, DeepSeek AI (gây chấn động thế giới với R1/V3), Unitree Robotics; Nghĩa Ô (义乌) là 'Chợ đầu mối hàng hóa nhỏ lớn nhất thế giới' kết nối 230 quốc gia; Cảng Ninh Ba – Chu Sơn (宁波舟山港) đứng số 1 thế giới về tổng sản lượng hàng hóa thông qua (tải trọng hàng rời & container kết nối toàn cầu).",
      vietnamConnectivity: "Nghĩa Ô, Ôn Châu, Ninh Ba và Hàng Châu là nguồn hàng chủ lực của thương mại điện tử xuyên biên giới, máy dệt may, nguyên phụ liệu thời trang, đồ gia dụng thông minh nhập khẩu vào Việt Nam (rất nhiều doanh nhân Việt lấy hàng tại Chợ Nghĩa Ô và triển lãm Hàng Châu – Ninh Ba). Giáo dục nổi bật với Đại học Chiết Giang (浙江大学 – 985/C9 League Top 3–5 Trung Quốc tại Hàng Châu), Học viện Mỹ thuật Trung Quốc (中国美术学院 – cái nôi quốc họa và thiết kế), Đại học Ninh Ba (Song Nhất Lưu) và Đại học Sư phạm Chiết Giang đón hàng trăm nghiên cứu sinh Việt Nam.",
      notableFigures: [
        { hanzi: "王羲之 · 王献之（兰亭集序）", pinyin: "Wáng Xīzhī", hanViet: "Vương Hy Chi (Thư thánh tại Lan Đình Thiệu Hưng)", lifespan: "303–361", contribution: "Thư pháp gia vĩ đại nhất lịch sử Trung Hoa sáng tác *Lan Đình Tập Tự* – đệ nhất thiên hạ Hành thư – bên dòng suối Lan Đình ở Thiệu Hưng." },
        { hanzi: "王阳明", pinyin: "Wáng Yángmíng", hanViet: "Vương Dương Minh (Vương Thủ Nhân)", lifespan: "1472–1529", contribution: "Đại triết gia triều Minh quê Dư Diêu (Chiết Giang), người sáng lập Tâm học với học thuyết 'Tri hành hợp nhất' và 'Trí lương tri'." },
        { hanzi: "鲁迅", pinyin: "Lǔ Xùn", hanViet: "Lỗ Tấn (Chu Thụ Nhân)", lifespan: "1881–1936", contribution: "Nhà văn khai sáng văn học hiện đại Trung Quốc sinh trưởng ở Thiệu Hưng với *AQ Chính Truyện*, *Nhật Ký Người Điên*." }
      ],
      travelAndLogistics: "Tháng 3–5 mùa hái trà Long Tỉnh và hoa anh đào Tây Hồ; tháng 9–10 ngắm sóng triều Tiền Đường Giang (lớn nhất vào 18/8 Âm lịch). Sân bay Tiêu Sơn Hàng Châu (HGH có bay thẳng Hà Nội/TP.HCM) và Sân bay Lịch Xã Ninh Ba (NGB); tàu cao tốc Hàng Châu – Thượng Hải chỉ 45 phút! Hành trình 4 ngày: Ngày 1–2 Tây Hồ – Linh Ẩn Tự – Làng trà Long Tỉnh – Tống Thành; Ngày 3 Cổ trấn Ô Trấn; Ngày 4 Phố cổ Thiệu Hưng (Cố cư Lỗ Tấn & Lan Đình) hoặc Ninh Ba Thiên Nhất Các.",
      mapCoordinates: { mapX: 676, mapY: 386, historicalCapitalEra: "Lương Chử · Việt · Ngô Việt · Nam Tống (Lâm An)", economicCorridor: "Châu thổ Trường Giang (长三角)" }
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
