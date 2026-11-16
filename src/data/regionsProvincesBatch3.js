// ============================================================================
// 34-PROVINCE 12-DIMENSION ENCYCLOPEDIA — BATCH 3 (11 FINAL UNITS)
// 4 Provinces (Thiểm Tây, Cam Túc, Thanh Hải, Đài Loan)
// + 5 Autonomous Regions (Nội Mông, Quảng Tây, Tây Tạng, Ninh Hạ, Tân Cương)
// + 2 SARs (Hồng Kông, Ma Cao)
// Standard Mandarin + Hanyu Pinyin (Tone Marks) + Hán–Việt + Vietnamese
// Zero Jyutping • 850–1,100 words per unit across all 12 Scholarly Dimensions
// ============================================================================

(function () {
  if (!window.CCE_REGIONS || !Array.isArray(window.CCE_REGIONS.provincesDirectory)) return;

  const UPGRADES = {
    "prov-shaanxi": {
      identity: {
        hanziSimplified: "陕西省",
        hanziTraditional: "陝西省",
        pinyin: "Shǎnxī Shěng",
        hanViet: "Thiểm Tây Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "陕 / 秦",
        abbreviationPinyin: "Shǎn / Qín (Thiểm / Tần)",
        abbreviationOrigin: "Tên Thiểm Tây nghĩa là 'vùng đất phía tây Thiểm Nguyên / Thiểm Châu' (nay là Tam Môn Hiệp, Hà Nam – nơi Chu Công và Triệu Công chia quyền trị vì đất Thiểm thời Tây Chu). Chữ viết tắt thứ hai 秦 (Tần) ghi dấu nước Tần cổ lập quốc tại Quan Trung rồi thống nhất Trung Hoa năm 221 TCN.",
        capitalCity: "Tây An (西安市 Xī'ān Shì – Cố đô Trường An 长安)"
      },
      geographyAndClimate: {
        summary: "Nằm trên trục chuyển tiếp trung tâm bậc thềm thứ hai với cấu trúc tự nhiên 'Tam đại địa mạo' cực kỳ rõ nét từ bắc xuống nam: phía bắc là Cao nguyên Hoàng Thổ Thiểm Bắc (Diên An – Du Lâm) bị sông Vô Định Hà cắt xẻ; ở giữa là Bình nguyên Quan Trung (Bình nguyên sông Vị Hà 'Bát bách lý Tần Xuyên') đất phù sa vàng màu mỡ phẳng phiu; phía nam bị dãy Tần Lĩnh (秦岭 – 'Long mạch Trung Hoa', ranh giới khí hậu – thủy văn chia đôi Nam Bắc Trung Quốc, đỉnh Thái Bạch cao 3.771 m) chắn ngang trước khi đổ xuống thung lũng sông Hán Thủy tại Hán Trung – An Khang.",
        causality: "Bình nguyên Quan Trung mang cấu trúc 'Tứ Tắc chi quốc' (Đông có Đồng Quan, Tây có Tán Quan, Nam có Vũ Quan, Bắc có Tiêu Quan) tựa pháo đài bất khả xâm phạm của cổ đại, tạo thành cái nôi nuôi dưỡng liên tục Chu – Tần – Hán – Đường suốt 1.100 năm làm Kinh đô Đế chế. Sự khác biệt dữ dội giữa Thiểm Bắc khô hạn gió bụi (Diêu động hang đất, câu hò Tín Thiên Du vang dội giữa sườn đồi) với Quan Trung lúa mì (tạo ra văn hóa bát mì dải Biangbiang rộng bằng dây thắt lưng và bát tô uống nước to như cái chậu 'Thiểm Tây Bát Đại Quái') và Thiểm Nam ẩm mướt gần giống Ba Thục giải thích rõ câu ngạn ngữ địa phương."
      },
      historicalEvolution: "Mở đầu bằng di chỉ Bán Pha Ngưỡng Thiều (6000 năm trước tại Tây An) và lăng truyền thuyết Hiên Viên Hoàng Đế tại Hoàng Lăng. Từ thế kỷ XI TCN, Tây Chu lập Phong – Hạo tại Tây An; năm 221 TCN Tần Thủy Hoàng thống nhất sáu nước từ kinh đô Hàm Dương; thời Tây Hán (Trường An) mở đường tơ lụa Trương Khiên năm 138 TCN; đỉnh cao Thịnh Đường đưa Trường An thành siêu đô thị 1 triệu dân hoa lệ nhất thế giới thế kỷ VII–IX (cửa Tây Thị đón thương buôn Ba Tư, Ấn Độ, Nhật Bản, Tân La và Giao Châu). Thời hiện đại, Diên An giữ vai trò thủ phủ cách mạng Trung Quốc (1935–1947).",
      culturalIdentity: "Trái tim của Văn hóa Tam Tần / Quan Trung (关中文化 Guānzhōng Wénhuà): một bản sắc trầm hùng, cổ điển mang cốt cách Đại Hán – Đại Đường. Người Thiểm Tây tự hào nói câu phương ngôn Tần – Quan Trung cổ kính ('Trường An khang trang, Tần xoang hào sảng'), bảo tồn sâu sắc truyền thống sử học (Tư Mã Thiên quê Hàn Thành), nghệ thuật bia khắc Bi Lâm, Diêu động đất hoàng thổ và âm nhạc cổ cung đình Đường Nhạc.",
      heritageAndLandmarks: [
        { hanzi: "秦始皇陵及兵马俑博物院", pinyin: "Qín Shǐhuáng Bīngmǎyǒng", hanViet: "Lăng Tần Thủy Hoàng & Binh Mã Dũng", nameVi: "Đội quân Đất nung Tần Thủy Hoàng (UNESCO 1987)", significance: "Kỳ quan thứ 8 thế giới thế kỷ III TCN với hơn 8.000 tượng chiến binh – ngựa đất nung kích thước người thật gương mặt không ai giống ai." },
        { hanzi: "西安古城墙与大雁塔 · 小雁塔", pinyin: "Xī'ān Gǔchéngqiáng · Dàyàntǎ", hanViet: "Thành Cổ Tây An & Chùa Đại Nhạn Tháp", nameVi: "Thành cổ Tây An (Minh) & Chùa Từ Ân Đại Nhạn Tháp (UNESCO)", significance: "Vành đai tường thành cổ nguyên vẹn nhất Trung Quốc dài 13,7 km và ngôi tháp gạch 652 CN nơi Pháp sư Huyền Trang (Đường Tăng) dịch 1.335 quyển kinh Phật từ Ấn Độ." },
        { hanzi: "华清宫与华山（西岳）", pinyin: "Huáqīnggōng · Huàshān", hanViet: "Hoa Thanh Cung & Tây Nhạc Hoa Sơn", nameVi: "Cung Hoa Thanh Ly Sơn & Danh sơn Hoa Sơn", significance: "Suối khoáng cung đình gắn câu chuyện Đường Huyền Tông – Dương Quý Phi và ngọn Hoa Sơn vách đá hoa cương hiểm trở nhất Ngũ Nhạc." },
        { hanzi: "陕西历史博物馆与碑林博物馆", pinyin: "Shǎnxī Lìshǐ Bówùguǎn", hanViet: "Bảo tàng Lịch sử Thiểm Tây & Bảo tàng Bi Lâm", nameVi: "Bảo tàng Lịch sử Thiểm Tây & Rừng Bia Tây An", significance: "Mệnh danh 'Cổ đô Minh Châu Bảo Khố' với kho báu Nhà Đường Hà Gia Thôn và gần 4.000 bia đá thư pháp cổ từ Hán–Đường–Tống." },
        { hanzi: "黄帝陵与延安宝塔山 · 壶口瀑布", pinyin: "Huángdìlíng · Húkǒu Pùbù", hanViet: "Hoàng Đế Lăng · Thác Hồ Khẩu Hoàng Hà", nameVi: "Lăng truyền thuyết Hoàng Đế & Thác vàng Hồ Khẩu", significance: "Thánh địa tưởng niệm Thủy tổ nhân văn Hoa Hạ tại Hoàng Lăng và thác nước màu phù sa vàng cuồn cuộn duy nhất trên thế giới bên sông Hoàng Hà." }
      ],
      intangibleHeritage: "Tần Xoang (秦腔 Qínqiāng – hí khúc cổ cao vút dữ dội nhất miền Tây Bắc với mặt nạ tuồng rực rỡ); Nghệ thuật Rối bóng Hoa Huyện (Hoa Huyện Bì Ảnh Hí); Thổi sáo cổ Nhạc Xã Trường An (UNESCO); Tranh nông dân Hộ Huyện sặc sỡ; và Kỹ thuật khắc ấn Triện đá – rập bia Bi Lâm.",
      culinaryCulture: {
        styleOverview: "Thiểm Thái (陕菜 Shǎncài) là truyền nhân trực tiếp của cỗ Quan Trung thời Chu – Tần – Đường, kết hợp kỹ thuật chế biến bột mì đa dạng số 1 Tây Bắc với ẩm thực Hồi giáo Thanh Chân đường phố Phố Hồi (Hồi Dân Nhai) đậm mùi thì là Ai Cập – thịt cừu – ớt Tần.",
        signatureDishes: [
          { hanzi: "肉夹馍", pinyin: "Ròujiāmó", hanViet: "Nhục giáp mô (Bánh mì kẹp thịt hầm Quan Trung)", description: "'Bánh mì kẹp lâu đời nhất nhân loại': vỏ bánh Bạch Cát Mô nướng lò giòn xốp (hoa văn Thiết quyển hổ bối cúc hoa tâm) kẹp thịt Lạp Trấp kho mềm bằng nước cốt 30 năm băm nhuyễn rưới nước thịt béo." },
          { hanzi: "羊肉泡馍", pinyin: "Yángròu pàomó", hanViet: "Dương nhục phao mô (Súp cừu xé bánh mì)", description: "Thực khách tự tay xé bánh mì cứng Tử Bạch Mô thành từng hạt nhỏ bằng hạt đậu, đầu bếp nấu sôi bùng cùng nước hầm xương cừu béo thơm, miến dong, mộc nhĩ, ăn kèm tỏi ngâm giấm và tương ớt." },
          { hanzi: "油泼扯面（Biángbiáng面）", pinyin: "Yóupō chěmiàn (Biángbiáng miàn)", hanViet: "Du bát xả diện (Mì dải lớn chữ Biáng)", description: "Sợi mì kéo bản rộng như thắt lưng, luộc xong đặt tỏi băm, hành lá, ớt bột Tần Tiều mịn lên trên rồi dội chảo dầu cải nóng bỏng xèo khói tạo hương thơm nồng nàn." },
          { hanzi: "陕西凉皮（秦镇米皮）", pinyin: "Shǎnxī liángpí", hanViet: "Lương bì Thiểm Tây (Bún dải lạnh dầu ớt)", description: "Lớp bột mì/gạo hấp mỏng cắt sợi mềm dai trộn dầu ớt Tần pha giấm tỏi, dưa chuột và miến gluten (Mặt cân) – món giải ngấy không thể thiếu cùng Nhục Giáp Mô." },
          { hanzi: "葫芦鸡", pinyin: "Húlújī", hanViet: "Hồ lô kê (Gà nguyên con hình bầu hồ lô Trường An)", description: "'Đệ nhất danh thái Trường An' qua ba công đoạn luộc – hấp cách thủy – chiên ngập dầu vàng giòn rộp hình quả hồ lô chấm muối tiêu Tứ Xuyên." }
        ]
      },
      economyAndIndustry: "Trung tâm hàng không vũ trụ quốc gia hàng đầu cả nước (Diêm Lương – Hàng Không Thành Tây An phát triển máy bay vận tải Y-20, động cơ tên lửa Trường Chinh, máy bay C919 cánh chính); cụm sản xuất chip bán dẫn bộ nhớ flash lớn (Samsung Semiconductor Tây An), sản xuất ô tô điện (BYD có nhà máy xe điện lớn bậc nhất tại Tây An), thiết bị năng lượng mặt trời (LONGi Green Energy số 1 thế giới), và Đầu mối Đường sắt Á–Âu (Chuyến tàu Trường An nối Tây An sang Kazakhstan – Đức).",
      vietnamConnectivity: "Trường An là điểm hội tụ văn hiến Đông Á thời Đường nơi các nhân tài Giao Châu – Đại Việt (như Khương Công Phụ từng đỗ Trạng nguyên khoa Chế sách tại Trường An năm 780 CN, giữ chức Gián nghị đại phu – Đồng Bình chương sự triều Đường!) ghi danh bảng vàng văn hóa sử hai dân tộc. Ngày nay, Đại học Giao thông Tây An (西安交通大学 – 985/C9 League), Đại học Công nghiệp Tây Bắc (NWPU – 985/Song Nhất Lưu hàng không vũ trụ), Đại học Tây Bắc (Song Nhất Lưu – Khảo cổ & Hán học) và Đại học Điện tử Tây An (Xidian – 211 kỹ thuật vô tuyến–AI) đào tạo đông đảo sinh viên Việt Nam; đặc biệt tuyến bay thẳng Tây An – Hà Nội/TP.HCM ngày càng gắn kết du lịch Cố đô.",
      notableFigures: [
        { hanzi: "司马迁（史圣）", pinyin: "Sīmǎ Qiān", hanViet: "Tư Mã Thiên (Hàn Thành)", lifespan: "k. 145–86 TCN", contribution: "Thái sử lệnh thời Tây Hán quê Long Môn (Hàn Thành, Thiểm Tây), tác giả bộ *Sử Ký* (史记) đặt chuẩn mực kỷ truyền thể cho toàn bộ sử học Đông Á." },
        { hanzi: "张骞", pinyin: "Zhāng Qiān", hanViet: "Trương Khiên (Thành Cố, Hán Trung)", lifespan: "k. 164–114 TCN", contribution: "Nhà ngoại giao – thám hiểm thời Hán Vũ Đế mở thông Con đường Tơ lụa nối liền Trung Hoa với Trung Á và Địa Trung Hải." },
        { hanzi: "玄奘法师", pinyin: "Xuánzàng", hanViet: "Pháp sư Huyền Trang", lifespan: "602–664", contribution: "Dù sinh ở Lạc Dương, sự nghiệp hoằng pháp – dịch 75 bộ kinh Phật tại Đại Từ Ân Tự (Đại Nhạn Tháp Tây An) biến Tây An thành trung tâm Phật học châu Á." },
        { hanzi: "颜真卿 · 柳公权", pinyin: "Yán Zhēnqīng · Liǔ Gōngquán", hanViet: "Nhan Chân Khanh & Liễu Công Quyền (Kinh Triệu)", lifespan: "Thế kỷ VIII–IX", contribution: "Song tuyệt Khải thư triều Đường ('Nhan cân Liễu cốt' 颜筋柳骨) gắn liền quê hương và sự nghiệp tại Trường An." }
      ],
      travelAndLogistics: "Tháng 4–5 mùa hoa mẫu đơn Tây An và tháng 9–10 mùa thu lá ngân hạnh ngàn năm Cổ Quan Âm Thiền Tự (thư thái nhất). Sân bay Quốc tế Hàm Dương Tây An (XIY); Ga Tây An Bắc là trung tâm cao tốc Tây Bộ (nối Trịnh Châu 1h50, Thành Đô 3h20 xuyên qua dãy Tần Lĩnh qua chuỗi đường hầm ngoạn mục). Gợi ý 4 ngày: Ngày 1 Thành cổ Tây An – Tháp Chuông Trống – Phố Hồi – Đại Nhạn Tháp Đại Đường Bất Dạ Thành; Ngày 2 Binh Mã Dũng – Hoa Thanh Cung; Ngày 3 Bảo tàng Lịch sử Thiểm Tây – Bảo tàng Bi Lâm; Ngày 4 Chinh phục Tây Nhạc Hoa Sơn.",
      mapCoordinates: { mapX: 454, mapY: 284, historicalCapitalEra: "Hàm Dương · Trường An (Chu–Tần–Hán–Tùy–Đường)", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-gansu": {
      identity: {
        hanziSimplified: "甘肃省",
        hanziTraditional: "甘肅省",
        pinyin: "Gānsù Shěng",
        hanViet: "Cam Túc Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "甘 / 陇",
        abbreviationPinyin: "Gān / Lǒng (Cam / Lũng)",
        abbreviationOrigin: "Tên Cam Túc ghép từ hai châu cổ vùng Hành lang Hà Tây thời Tống–Nguyên: Cam Châu (Trương Dịch) và Túc Châu (Tửu Tuyền). Chữ viết tắt thứ hai 陇 (Lũng) bắt nguồn từ núi Lũng Sơn (Lục Bàn Sơn) chạy ở phía đông nam tỉnh.",
        capitalCity: "Lan Châu (兰州市 Lánzhōu Shì – Thành phố duy nhất có sông Hoàng Hà chảy xuyên lòng đô thị)"
      },
      geographyAndClimate: {
        summary: "Vùng đất mang hình dáng 'thanh như ý' hẹp dài hơn 1.600 km từ đông nam lên tây bắc — là NGÃ TƯ ĐỊA LÝ DUY NHẤT tại Trung Quốc nơi ba đại cao nguyên (Cao nguyên Hoàng Thổ, Cao nguyên Mông Cổ và Cao nguyên Thanh–Tạng) cùng gặp nhau! Dải đồng bằng hẹp Hành lang Hà Tây (河西走廊) dài 1.000 km nằm kẹp giữa dãy Kỳ Liên Sơn (nước tuyết tan đổ xuống tưới ốc đảo Trương Dịch – Đôn Hoàng) và Sa mạc Ba Đan Cát Lâm. Khí hậu ôn đới lục địa khô cằn ít mưa, nắng gắt ngày nóng đêm lạnh buốt.",
        causality: "Chính địa hình hẹp như ống yết hầu nằm giữa vách băng Kỳ Liên Sơn và bãi sa mạc chết chóc đã biến Hành lang Hà Tây thành con đường bộ DUY NHẤT xuyên từ Trường An tới Tây Vực và La Mã cổ đại suốt 2.000 năm (Con đường Tơ lụa Lục địa). Dòng thương buôn, tăng lữ Ba Tư, Ấn Độ, Túc Đặc, Hồi Hột và người Hán đi lại nườm nượp đã đắp khắc nên chuỗi hang đá Phật giáo vĩ đại dọc hành lang (Mạc Cao Quật Đôn Hoàng, Mạch Tích Sơn, Bính Linh Tự). Khí hậu khô ráo sa mạc Gobi bảo quản trọn vẹn hàng vạn quyển cổ thư Đôn Hoàng ngàn năm không mục nát!"
      },
      historicalEvolution: "Thiên thủy là đất phát tích văn hóa Đại Địa Loan (6000 TCN) và nơi phát tích của bộ tộc nhà Tần (Lễ Huyện) cùng truyền thuyết Phục Hy vạch Bát Quái. Năm 121 TCN, Hán Vũ Đế sai Hoắc Khứ Bệnh đánh bại Hung Nô mở thông Hành lang Hà Tây, lập nên 'Hà Tây Tứ Quận' (Vũ Uy – Trương Dịch – Tửu Tuyền – Đôn Hoàng) và xây dựng Ngọc Môn Quan – Dương Quan. Thời Ngụy Tấn đến Đường, Đôn Hoàng trở thành kinh đô nghệ thuật Phật giáo Á–Âu; thế kỷ XI thuộc vương quốc Tây Hạ. Đến năm 1900, đạo sĩ Vương Viên Lục phát hiện Tàng Kinh Động Hang 17 Đôn Hoàng mở ra ngành 'Đôn Hoàng học' quốc tế.",
      culturalIdentity: "Sự kết tụ hào hùng của văn hóa Tơ Lụa Biên Tái ('Đại mạc cô yên trực, Trường hà lạc nhật viên'), tinh thần bao dung đa văn minh (Phật – Cảnh giáo – Ma Ni giáo – Hồi giáo – Đạo giáo cùng in dấu trong hang Mạc Cao) và sự hiếu khách nồng hậu của người Tây Bắc qua bát Mì bò Lan Châu nóng hổi mỗi sớm mai.",
      heritageAndLandmarks: [
        { hanzi: "敦煌莫高窟", pinyin: "Dūnhuáng Mògāokū", hanViet: "Đôn Hoàng Mạc Cao Quật", nameVi: "Hang đá Ngàn Phật Đôn Hoàng (UNESCO 1987)", significance: "735 hang động với 45.000 m² bích họa và hơn 2.400 tượng Phật từ thế kỷ IV đến XIV — kho tàng nghệ thuật Phật giáo & lịch sử Tơ lụa lớn nhất nhân loại." },
        { hanzi: "嘉峪关长城（天下第一雄关）", pinyin: "Jiāyùguān", hanViet: "Gia Dục Quan (Thiên hạ Đệ nhất Hùng quan)", nameVi: "Cửa ải Gia Dục Quan & Trường Thành thời Minh", significance: "Đầu mút cực tây kiên cố của Vạn Lý Trường Thành triều Minh xây năm 1372 trấn giữ yết hầu Hà Tây." },
        { hanzi: "麦积山石窟（天水）", pinyin: "Màijīshān Shíkū", hanViet: "Mạch Tích Sơn Thạch Quật", nameVi: "Hang đá Mạch Tích Sơn (Tứ Đại Thạch Quật Trung Hoa)", significance: "194 hang đẽo thẳng trên vách núi hình đụn rơm cheo leo, lừng danh về nghệ thuật tượng đất nung thời Bắc Ngụy – Tùy có nét cười nhân hậu 'Đông phương Vệ Nữ'." },
        { hanzi: "张掖七彩丹霞", pinyin: "Zhāngyè Qīcǎi Dānxiá", hanViet: "Trương Dịch Thất Thải Đan Hà", nameVi: "Núi Cầu Vồng Trương Dịch (UNESCO Công viên Địa chất)", significance: "Các tầng sa thạch – bùn sét cổ chứa khoáng chất biến thành những dải màu đỏ, cam, vàng, lục rực rỡ kỳ ảo như tranh sơn dầu." },
        { hanzi: "甘肃省博物馆 · 鸣沙山月牙泉", pinyin: "Míngshāshān Yuèyáquán", hanViet: "Minh Sa Sơn Nguyệt Nha Tuyền & Bảo tàng Cam Túc", nameVi: "Hồ Trăng Khuyết giữa Sa mạc & Cổ vật Đồng Bôn Mã ('Mã Đạp Phi Yến')", significance: "Con suối hình trăng lưỡi liềm ngàn năm không cạn giữa cồn cát biết hát và quốc bảo Ngựa đồng bay chân giẫm én thời Đông Hán." }
      ],
      intangibleHeritage: "Nghệ thuật Vẽ tranh khoáng thạch Đôn Hoàng; Vũ điệu Phi Thiên Đôn Hoàng; Hát dân ca đối đáp Hoa Nhi (花儿 – Di sản UNESCO của các dân tộc Hoàng Thổ); Rối bóng Đôn Hoàng; và nghề mài Nghiên đá Thao Nghiên Trác Lệ (một trong Tứ đại danh nghiên Trung Hoa).",
      culinaryCulture: {
        styleOverview: "Lũng Thái (陇菜 Lǒngcài) mang đậm phong vị thảo nguyên Thanh Chân và hành lang ốc đảo: thịt cừu thịt bò ít mùi nhờ nguồn cỏ thảo mộc kiềm tính trên sa mạc Gobi, kết hợp tay nghề kéo mì siêu đẳng và trái cây dưa ngọt nắng gắt.",
        signatureDishes: [
          { hanzi: "兰州牛肉面（一清二白三红四绿五黄）", pinyin: "Lánzhōu niúròumiàn", hanViet: "Mì bò kéo tay Lan Châu (Nhất Thanh Nhị Bạch)", description: "Đệ nhất danh miến Trung Hoa tuân thủ 5 chuẩn mực sắc–hương: (1) Nước hầm xương bò trong veo; (2) Củ cải trắng thái lát ngọt mát; (3) Dầu ớt đỏ rực thơm lừng không cay gắt; (4) Rau mùi & tỏi tây xanh tươi; (5) Sợi mì kéo tay vàng óng từ kiềm Bồng Thảo có tới 9 kích cỡ sợi!" },
          { hanzi: "手抓羊肉（靖远/临夏）", pinyin: "Shǒuzhuā yángròu", hanViet: "Thủ trảo dương nhục (Thịt cừu luộc bốc tay)", description: "Thịt cừu nuôi trên đồng cỏ kiềm không chút mùi hôi, luộc nguyên tảng cùng hoa tiêu muối biển giữ màu hồng mềm mọng chấm muối tiêu tỏi." },
          { hanzi: "敦煌驴肉黄面", pinyin: "Dūnhuáng lǘròu huángmiàn", hanViet: "Đôn Hoàng lư nhục hoàng diện", description: "Sợi mì vàng mịn bóng dẻo chan xốt thịt lừa hầm nấm hương thơm đậm – đặc sản truyền thống của lữ khách Đôn Hoàng." },
          { hanzi: "天水麻辣烫 · 甘谷辣椒", pinyin: "Tiānshuǐ málàtàng", hanViet: "Ma Lạt Thang Thiên Thủy", description: "Nổi tiếng khắp cả nước nhờ loại ớt Cam Cốc da dày nhiều dầu màu đỏ rực thơm ngào ngạt nhưng cay dịu và khoai tây bột Định Tây." },
          { hanzi: "三泡台（盖碗茶）& 甜醅子", pinyin: "Sānpàotái & Tiánpēizi", hanViet: "Trà Bát Bảo Tam Pháo Đài & Cơm rượu yến mạch", description: "Trà xanh Xuân Tiêm pha với đường phèn, long nhãn, táo đỏ, kỷ tử, nho khô Tân Cương, cùi dứa và hoa hồng khô trong chén có nắp 3 phần; ăn kèm yến mạch lên men mát lạnh." }
        ]
      },
      economyAndIndustry: "Trung tâm hàng đầu Trung Quốc về công nghệ Hàng không vũ trụ (Trung tâm Phóng Vệ tinh Tửu Tuyền – phóng toàn bộ tàu có người lái Thần Châu), Căn cứ Năng lượng Sạch Gió – Mặt trời quy mô GW lớn bậc nhất thế giới dọc Hành lang Hà Tây (Tửu Tuyền), 'Thành phố Niken – Đồng' Kim Xương (cung ứng niken trọng yếu cho pin xe điện EV), Hóa dầu Lan Châu và nông nghiệp dược liệu quy mô lớn (Đương quy Mân Huyện, Đảng sâm Cam Túc).",
      vietnamConnectivity: "Cam Túc là điểm nút trung chuyển tuyến tàu hàng hóa quốc tế từ miền Tây sang Trung Á và là kho dược liệu Đông y lớn nhất cung ứng Đương quy, Hoàng kỳ, Cam thảo cho thị trường dược liệu cổ truyền Việt Nam. Về học thuật, Đại học Lan Châu (兰州大学 – 985/Song Nhất Lưu, lừng danh Hóa học Hữu cơ, Vật lý Hạt nhân, Khảo cổ Con đường Tơ lụa & Sinh thái Thảo nguyên) và Đại học Sư phạm Tây Bắc hợp tác nghiên cứu Đôn Hoàng học và đón nhận nhiều lưu học sinh Việt Nam.",
      notableFigures: [
        { hanzi: "伏羲（人文始祖传说）· 李广", pinyin: "Fúxī · Lǐ Guǎng", hanViet: "Phi tướng quân Lý Quảng (Thiên Thủy)", lifespan: "k. ?–119 TCN", contribution: "Danh tướng kiệt xuất thời Tây Hán trấn giữ biên cương Hung Nô tại Thành Kỷ (Thiên Thủy), đi vào Đường Thi với câu bất hủ 'Đãn sử Long Thành phi tướng tại'." },
        { hanzi: "张芝（草圣）", pinyin: "Zhāng Zhī", hanViet: "Trương Chi (Thảo Thánh – Tửu Tuyền)", lifespan: "Thế kỷ II CN", contribution: "Tổ sư chữ Thảo thư (Kim Thảo) thời Đông Hán quê Đôn Hoàng – Tửu Tuyền, có ảnh hưởng quyết định tới Vương Hy Chi." },
        { hanzi: "皇甫谧 · 常书鸿", pinyin: "Huángfǔ Mì · Cháng Shūhóng", hanViet: "Hoàng Phủ Mật & Thường Thư Hồng", lifespan: "215–282 / 1904–1994", contribution: "Tác giả bộ kinh điển Châm cứu *Châm Cứu Giáp Ất Kinh* tại Linh Đài (Bình Lương) và vị 'Thủ hộ thần Đôn Hoàng' Thường Thư Hồng bảo vệ hang Mạc Cao suốt nửa thế kỷ." }
      ],
      travelAndLogistics: "Tháng 5–10 lý tưởng nhất (tránh mùa bão cát tháng 3–4 và mùa đông cực lạnh; riêng cuối tháng 9 – tháng 10 rừng dương hồ vàng rực rỡ). Đường sắt cao tốc Lan–Tân xuyên suốt Hành lang Hà Tây kết nối Lan Châu – Trương Dịch – Gia Dục Quan – Đôn Hoàng mượt mà! Gợi ý 6 ngày Hành lang Tơ lụa: Ngày 1 Lan Châu (Bảo tàng Cam Túc – Cầu Trung Sơn Hoàng Hà); Ngày 2 Trương Dịch (Thất Thải Đan Hà – Mã Đề Tự); Ngày 3 Gia Dục Quan Thành Lâu; Ngày 4–6 Đôn Hoàng (Mạc Cao Quật – Minh Sa Sơn Nguyệt Nha Tuyền – Nhã Đan Ma Quỷ Thành – Dương Quan).",
      mapCoordinates: { mapX: 344, mapY: 242, historicalCapitalEra: "Hà Tây Tứ Quận · Con đường Tơ lụa · Đôn Hoàng", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-qinghai": {
      identity: {
        hanziSimplified: "青海省",
        hanziTraditional: "青海省",
        pinyin: "Qīnghǎi Shěng",
        hanViet: "Thanh Hải Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "青",
        abbreviationPinyin: "Qīng (Thanh)",
        abbreviationOrigin: "Tên tỉnh lấy theo Hồ Thanh Hải (青海湖 Qīnghǎi Hú – hồ nước mặn nội lục lớn nhất Trung Quốc, tiếng Mông Cổ gọi là Koko Nor, nghĩa là 'Biển Xanh'); dùng chữ 青 (xanh biếc) làm ký hiệu viết tắt.",
        capitalCity: "Tây Ninh (西宁市 Xīníng Shì – 'Thành phố Nghỉ Mát Mùa Hè' của Cao nguyên)"
      },
      geographyAndClimate: {
        summary: "Nằm ở góc đông bắc của Cao nguyên Thanh–Tạng trên bậc thềm thứ nhất địa hình Trung Quốc (độ cao trung bình hơn 3.000 m, đỉnh Bố Khách Đạt Bản cao 6.860 m) — được tôn vinh là **'Thủy Tháp Trung Hoa' (中华水塔)** và **'Tam Giang Nguyên' (三江源)**: nơi khởi phát đồng thời của cả ba dòng sông vĩ đại châu Á là Trường Giang, Hoàng Hà và Mê Kông (Lan Thương Giang)! Địa hình ôm trọn Hồ Thanh Hải xanh ngắt và Bồn địa Sài Đạt Mộc (柴达木盆地 – mệnh danh 'Tụ Bảo Bồn') đầy hồ muối kỳ ảo ở phía tây bắc. Khí hậu cao nguyên lục địa khắc nghiệt, mùa đông lạnh dài và mùa hạ cực kỳ mát dịu (trung bình chỉ 17°C ở Tây Ninh), bức xạ mặt trời cực mạnh.",
        causality: "Vị thế thượng nguồn ba đại giang ở độ cao trên 3.000 m khiến Thanh Hải gánh trọng trách bảo vệ an ninh sinh thái cho hàng trăm triệu người vùng hạ lưu, nên tỉnh chú trọng bảo tồn công viên quốc gia thay vì phát triển công nghiệp nặng ô nhiễm. Chính khí hậu loãng oxy và lạnh giá cao nguyên tạo nên nền văn hóa du mục Tạng – Mông Cổ – Thổ – Tát Lạp gắn bó với bò Tây Tạng Yak, cừu thảo nguyên, trà bơ mặn và thảm dệt Tạng, cùng cảnh quan hồ muối phản chiếu bầu trời ('Gương Trời Trà Ca') độc nhất vô nhị."
      },
      historicalEvolution: "Xưa là vùng đất sinh sống của tộc Tây Khương (西羌) và Vương quốc Thổ Dục Hồn (吐谷浑, 313–663 CN) kiểm soát nhánh nam Con đường Tơ lụa qua Thanh Hải. Năm 641 Công chúa Văn Thành triều Đường qua núi Nhật Nguyệt Sơn tại Thanh Hải tiến vào Tây Tạng kết duyên cùng Tùng Tán Cán Bố (lưu dấu văn hóa chùa Tháp Nhĩ – ngôi tổ đình dòng Cách Lỗ Tạng truyền nơi Tông Khách Ba đản sinh năm 1357). Năm 1929 chính thức tách thành tỉnh Thanh Hải; thập niên 1950–1960 khu vực Kim Ngân Than bên Hồ Thanh Hải là nơi các nhà khoa học Trung Quốc chế tạo thành công hạt nhân ('Lưỡng Đạn Nhất Tinh').",
      culturalIdentity: "Vùng đất giao thoa sâu sắc văn hóa Phật giáo Tạng truyền vùng An Đa (nền hội họa Tangka Nghệ thuật Nhiệt Cống vùng Hoàng Nam, Tháp Nhĩ Tự, chùa cổ Cù Đàm) với văn hóa Hồi – Tát Lạp – Thổ vùng Hà Hoàng (Tây Ninh – Hải Đông), đặc trưng bởi tinh thần thuần khiết, tôn trọng thiên nhiên cao nguyên và sự hòa hợp giữa các tộc người du mục – định cư.",
      heritageAndLandmarks: [
        { hanzi: "青海湖与茶卡盐湖", pinyin: "Qīnghǎihú · Chákǎ Yánhú", hanViet: "Hồ Thanh Hải & Hồ Muối Trà Ca", nameVi: "Hồ Thanh Hải & 'Gương Trời' Hồ Muối Trà Ca", significance: "Hồ nước mặn lớn nhất Trung Quốc (với hoa cải vàng nở rộ ven hồ tháng 7) và hồ muối kết tinh phẳng lì phản chiếu mây trời." },
        { hanzi: "塔尔寺（湟中）", pinyin: "Tǎ'ěrsì", hanViet: "Chùa Tháp Nhĩ Tự (Kumbum)", nameVi: "Tổ đình Cách Lỗ Phái Chùa Tháp Nhĩ (1577)", significance: "Một trong 6 đại tự viện dòng Hoàng Mạo (Cách Lỗ) Tây Tạng, xây nơi đản sinh Đại sư Tông Khách Ba, nổi danh với 'Nghệ thuật Tam Tuyệt': Hoa điêu bơ Yak, Tranh thêu đắp nổi Đôi Tú và Bích họa." },
        { hanzi: "可可西里（三江源国家公园）", pinyin: "Kěkěxīlǐ", hanViet: "Khu Bảo tồn Khả Khả Tây Lý (UNESCO 2017)", nameVi: "Thánh địa Hoang dã Khả Khả Tây Lý & Nguồn 3 Sông lớn", significance: "Vùng đất hoang sơ trên 4.600 m nơi bảo tồn loài Linh dương Tạng quý hiếm và đỉnh ngọn nguồn Trường Giang – Hoàng Hà." },
        { hanzi: "大柴旦翡翠湖 · 察尔汗盐湖", pinyin: "Fěicuìhú · Chá'ěrhàn Yánhú", hanViet: "Hồ Phỉ Thúy Đại Sài Đán & Hồ muối Sát Nhĩ Hãn", nameVi: "Hồ Muối Phỉ Thúy Ngũ Sắc Sài Đạt Mộc", significance: "Những ao muối khoáng kali–liti–magie có màu xanh ngọc lục bảo và vàng hổ phách tuyệt mỹ." },
        { hanzi: "热贡艺术之乡（同仁）", pinyin: "Règòng Yìshù", hanViet: "Khu Nghệ thuật Nhiệt Cống (Đồng Nhân)", nameVi: "Cái nôi Tranh Tangka & Điêu khắc Nhiệt Cống (UNESCO)", significance: "Trung tâm vẽ tranh Phật giáo Tangka bằng bột vàng khoáng chất tự nhiên nổi tiếng nhất miền Đông Tạng." }
      ],
      intangibleHeritage: "Nghệ thuật Nhiệt Cống (热贡艺术 – UNESCO 2009); Hoa điêu bằng bơ bò Yak chùa Tháp Nhĩ; Nghệ thuật dệt Thảm Tạng Gia Tạng; Dị bản Sử thi *Cách Tát Nhĩ Vương* (Gesar – sử thi dài nhất thế giới của người Tạng vùng Quả Lạc – Ngọc Thụ); và dân ca Hoa Nhi sông Hoàng Thủy.",
      culinaryCulture: {
        styleOverview: "Ẩm thực Thanh Hải dung hòa thịt bò Yak – cừu thả rông trên thảo nguyên cao nguyên sạch tinh khiết (nấu giản đơn bảo toàn độ thơm béo tự nhiên), sữa chua bò Yak lên men sánh đặc và món ăn Thanh Chân phong vị Tây Ninh.",
        signatureDishes: [
          { hanzi: "手抓羊肉与炕锅羊肉", pinyin: "Shǒuzhuā / Kàngguō yángròu", hanViet: "Thịt cừu nấu chảo gang nướng & bốc tay Tây Ninh", description: "Thịt sườn cừu non nướng cháy cạnh cùng khoai tây lát, hành tây, bánh dẻo mì và ớt xanh thơm nức trong chảo gang phẳng trên bếp than." },
          { hanzi: "青海土火锅", pinyin: "Qīnghǎi tǔhuǒguō", hanViet: "Lẩu nồi đồng đất nung Thanh Hải", description: "Chiếc nồi đồng ống khói giữa xếp kín thịt bò hầm, thịt cừu, giò heo, cải chua, đậu phụ chiên và thịt viên nấu sục nước dùng thanh thơm giữa trời lạnh cao nguyên." },
          { hanzi: "牦牛酸奶", pinyin: "Máoniú suānnǎi", hanViet: "Sữa chua bò Yak lớp váng vàng", description: "Sữa bò Yak giàu dinh dưỡng lên men tự nhiên kết thành lớp váng bơ vàng mịn thơm ngậy trên mặt bát, rắc đường trắng hoặc mật ong Thanh Hải." },
          { hanzi: "酿皮（青海高担酿皮）", pinyin: "Qīnghǎi niàngpí", hanViet: "Nhưỡng bì Cao Đam Tây Ninh", description: "Lát mì bột mì hấp dày dẻo hơn Lương bì Thiểm Tây, trộn giấm thơm, nước tỏi, tương vừng và dầu ớt bốc vị cực kỳ kích thích." },
          { hanzi: "酥油茶 · 狗浇尿（油饼）", pinyin: "Sūyóuchá · Gǒujiāoniào", hanViet: "Trà bơ Tạng & Bánh chiên mỏng dầu hạt cải", description: "Trà bơ muối đánh sủi giúp giữ ấm và giảm say độ cao khi leo cao nguyên kèm bánh rán rưới dầu hạt cải Thanh Hải." }
        ]
      },
      economyAndIndustry: "Tỉnh đứng đầu cả nước về tỷ trọng năng lượng tái tạo (hơn 85% công suất điện đến từ điện mặt trời khổng lồ ở Tháp Lạp Than – Hải Nam Châu và thủy điện thượng nguồn Hoàng Hà như Long Dương Hiệp); đồng thời là kho **Muối Kali & Lithium** lớn nhất Trung Quốc tại Hồ muối Sát Nhĩ Hãn (Bồn địa Sài Đạt Mộc) phục vụ chuỗi sản xuất pin xe điện EV quốc gia cùng dược liệu Đông trùng hạ thảo (tập trung ở Ngọc Thụ) số 1 thế giới.",
      vietnamConnectivity: "Thanh Hải cung ứng nguyên liệu phân bón kali, muối lithium cho pin xe điện và nguồn dược liệu quý (Đông trùng hạ thảo Ngọc Thụ, Kỷ tử Sài Đạt Mộc) sang Việt Nam. Ngoài ra, Thanh Hải là điểm xuất phát của tuyến đường sắt cao nguyên Thanh–Tạng kỳ vĩ đưa du khách Việt Nam đi Lhasa (Tây Tạng) để thích nghi dần độ cao. Đại học Thanh Hải (211/Song Nhất Lưu về Sinh thái Cao nguyên & Y học Tạng) đón một số sinh viên trao đổi quốc tế.",
      notableFigures: [
        { hanzi: "宗喀巴（罗桑札巴）", pinyin: "Zōngkābā (Tsongkhapa)", hanViet: "Đại sư Tông Khách Ba", lifespan: "1357–1419", contribution: "Vị tổ sư cải cách Phật giáo Tây Tạng sinh tại Hoàng Trung (Tây Ninh), sáng lập Hoàng Giáo (Cách Lỗ Phái – truyền thống Đạt Lai Lạt Ma và Ban Thiền Lạt Ma)." },
        { hanzi: "文成公主（日月山历史交汇）", pinyin: "Wénchéng Gōngzhǔ", hanViet: "Công chúa Văn Thành (Di tích Nhật Nguyệt Sơn)", lifespan: "k. 628–680", contribution: "Dừng chân ném chiếc gương Nhật Nguyệt tại Xích Lĩnh (Thanh Hải) trên đường hòa thân lên Thổ Phồn năm 641, mở ra kỷ nguyên giao lưu Hán–Tạng sâu rộng." },
        { hanzi: "王洛宾（西部歌王）", pinyin: "Wáng Luòbīn", hanViet: "Vương Lạc Tân", lifespan: "1913–1996", contribution: "Nhạc sĩ sưu tầm và phổ biến dân ca Tây Bắc, sáng tác bài *Ở nơi xa xôi ấy* (在那遥远的地方) ngay tại thảo nguyên Kim Ngân Than Hồ Thanh Hải." }
      ],
      travelAndLogistics: "Tháng 6–9 mùa hè mát mẻ đẹp nhất trong năm (tháng 7 hoa cải vàng bên hồ Thanh Hải xanh thẳm rực rỡ nhất); tháng 10 mùa thu vàng Kỳ Liên Sơn. Sân bay Tào Gia Bảo Tây Ninh (XNN); tuyến cao tốc Lan–Tân nối Lan Châu – Tây Ninh chỉ mất 1h10! Hành trình Vòng cung Thanh Hải – Cam Túc (Thanh Cam Đại Hoàn Tuyến) 6–7 ngày kinh điển: Ngày 1 Tây Ninh – Tháp Nhĩ Tự – Hồ Thanh Hải; Ngày 2 Hồ Muối Trà Ca; Ngày 3–4 Hồ Phỉ Thúy – Sa mạc Sài Đạt Mộc; Ngày 5–6 Nối sang Đôn Hoàng & Trương Dịch.",
      mapCoordinates: { mapX: 266, mapY: 282, historicalCapitalEra: "Thổ Dục Hồn · Tổ đình Tháp Nhĩ · Thủy Tháp Tam Giang Nguyên", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-taiwan": {
      identity: {
        hanziSimplified: "台湾省",
        hanziTraditional: "臺灣省",
        pinyin: "Táiwān Shěng",
        hanViet: "Đài Loan Tỉnh",
        adminCategory: "province",
        adminTypeFull: "Tỉnh (省 Shěng)",
        abbreviation: "台 / 臺",
        abbreviationPinyin: "Tái (Đài)",
        abbreviationOrigin: "Trong *Thư Kinh* và văn hiến minh–thanh sớm gọi là Di Châu, Lưu Cầu; đầu thế kỷ XVII gọi khu vực cảng An Bình (Đài Nam) theo âm bản địa tộc Siraya là Tayouan / Đại Viên / Đài Oa, rồi triều Thanh thống nhất tên gọi là Đài Loan (1684); dùng 台 (giản thể) / 臺 (phồn thể) làm chữ viết tắt.",
        capitalCity: "Đài Bắc (台北市 Táiběi Shì – Trung tâm Văn hóa, Tài chính & Khoa học Kỹ thuật)"
      },
      geographyAndClimate: {
        summary: "Hòn đảo lớn nhất vùng biển Hoa Đông – Biển Đông nằm trên vành đai kiến tạo Thái Bình Dương ngoài khơi tỉnh Phúc Kiến, nổi bật với Dãy núi Trung Ương (中央山脉) hùng vĩ chạy dọc từ bắc xuống nam (đỉnh Ngọc Sơn cao 3.952 m – đỉnh núi cao nhất Đông Á) chiếm tới 2/3 diện tích đảo, chia tách đồng bằng phù sa phì nhiêu phía tây (Đài Bắc, Đài Trung, Đài Nam, Cao Hùng) với bờ đá dựng đứng dốc thẳng xuống Thái Bình Dương ở phía đông (Hoa Liên – Thái Lỗ Các). Chí tuyến Bắc đi qua Gia Nghĩa chia đảo thành cận nhiệt đới phía bắc và nhiệt đới phía nam ẩm quanh năm.",
        causality: "Ngọn núi cao gần 4.000 m nằm giữa biển khơi tạo ra kho báu thực vật đa tầng (trà Ô Long núi cao A Lý Sơn – Lê Sơn thơm ngát mây mù ở độ cao 1.500–2.400 m) cùng hàng trăm suối khoáng nóng kiến tạo mảng từ Bắc Đầu tới Tri Bản. Đồng thời, lịch sử đón nhiều làn sóng di dân Mân Nam (Phúc Kiến) và Khách Gia (Quảng Đông), kết hợp cộng đồng 16 dân tộc bản địa Nam Đảo (Austronesian), lưu giữ nguyên vẹn chữ Phồn thể truyền thống và tinh hoa Bảo tàng Cố Cung Đài Bắc tạo ra một nền văn hóa hải đảo vừa cổ điển lễ giáo Nho gia vừa cởi mở sáng tạo hiện đại."
      },
      historicalEvolution: "Từ thiên niên kỷ trước là quê hương của các tộc người Nam Đảo bản địa. Thời Tam Quốc (230 CN) Đông Ngô cử Vệ Ôn đi Di Châu; triều Nguyên lập Bành Hồ Tuần Kiểm Ty; đầu thế kỷ XVII người Hà Lan (Pháo đài Zeelandia 1624 tại Đài Nam) và Tây Ban Nha lập thương trạm. Năm 1661–1662 Trịnh Thành Công vượt biển từ Hạ Môn thu phục Đài Nam lập Phủ Thừa Thiên; năm 1684 triều Thanh Khang Hy thiết lập Phủ Đài Loan thuộc Phúc Kiến, đến năm 1885 nâng thành Tỉnh Đài Loan dưới sự cai quản canh tân của Tuần phủ Lưu Minh Truyền. Sau giai đoạn thuộc Nhật (1895–1945) và hậu 1949 trở thành một trong 'Bốn Con Rồng Kinh Tế Châu Á' với kỳ tích công nghiệp bán dẫn TSMC.",
      culturalIdentity: "Sự kết tinh đặc sắc giữa bảo tồn Nho gia – Đạo giáo truyền thống (những lễ hội rước kiệu Bà Ma Tổ Đại Giáp náo nhiệt bậc nhất Đông Á, văn hóa Chữ Phồn thể, tinh hoa thư viện học thuật truyền thống Tống–Minh tại Bảo tàng Cố Cung Đài Bắc), tính thân thiện hiếu khách của người Mân Nam – Khách Gia ('Văn hóa Chợ đêm' phong phú), ý thức bảo tồn dân tộc Nam Đảo và phong cách tiểu văn hóa nghệ thuật – tiệm sách – trà quán tinh tế kiểu Đài Bắc.",
      heritageAndLandmarks: [
        { hanzi: "台北故宫博物院", pinyin: "Táiběi Gùgōng Bówùyuàn", hanViet: "Bảo tàng Cố Cung Đài Bắc", nameVi: "Bảo tàng Cố Cung Quốc lập Đài Bắc (Sĩ Lâm)", significance: "Lưu giữ gần 700.000 quốc bảo hoàng gia Bắc Kinh chuyển sang năm 1948–1949: Ngọc Bắp Cải Thúy Ngọc, Thạch Nhục Hình, Mao Công Đỉnh và kiệt tác *Phú Xuân Sơn Cư Đồ*, *Khê Sơn Hành Lữ Đồ*, *Tảo Xuân Đồ*." },
        { hanzi: "日月潭与阿里山", pinyin: "Rìyuètán · Ālǐshān", hanViet: "Hồ Nhật Nguyệt Đàm & Núi A Lý Sơn", nameVi: "Thắng cảnh Nhật Nguyệt Đàm & Rừng cổ thụ A Lý Sơn", significance: "Hồ nước ngọt trên cao lớn nhất đảo cùng tuyến tàu lửa rừng cổ xuyên rừng bách nghìn năm và đồn điền trà núi cao." },
        { hanzi: "太鲁阁峡谷（花莲）", pinyin: "Tàilǔgé Xiágǔ", hanViet: "Hẻm núi Đá cẩm thạch Thái Lỗ Các (Hoa Liên)", nameVi: "Công viên Quốc gia Thái Lỗ Các", significance: "Hẻm núi đá cẩm thạch dốc đứng sâu hàng trăm mét do sông Lập Vụ cắt xuyên dãy núi đá vôi suốt triệu năm." },
        { hanzi: "台南赤嵌楼与安平古堡", pinyin: "Chìkǎnlóu · Ānpíng Gǔbǎo", hanViet: "Xích Khảm Lâu & Cổ bảo An Bình (Đài Nam)", nameVi: "Di tích Cố đô Đài Nam & Khổng Miếu đầu tiên (1665)", significance: "Đền Khổng Tử lâu đời nhất trên đảo ('Toàn Đài Thủ Học') và di tích thời Trịnh Thành Công tại cố đô Đài Nam." },
        { hanzi: "九份老街与淡水老街", pinyin: "Jiǔfèn Lǎojiē", hanViet: "Cổ Trấn Đèn lồng Cửu Phần", nameVi: "Phố núi Mỏ vàng Cổ Cửu Phần (Cơ Long – Tân Bắc)", significance: "Ngôi làng bậc thang cổ bên biển nổi danh với trà quán trên sườn dốc huyền ảo trong sương mù hoàng hôn." }
      ],
      intangibleHeritage: "Nghi lễ Rước kiệu Đại Giáp Ma Tổ Điền Hương (một trong 3 lễ hội tôn giáo lớn nhất thế giới do Discovery bình chọn); Nghệ thuật Rối tay Bố Đại Hí (布袋戏); Kịch Ca Tử Hí (歌仔戏); Kỹ thuật sao trà Ô Long Cao Sơn (Đông Đỉnh, Văn Sơn Bao Chủng, Đông Phương Mỹ Nhân); và Thờ cúng Ông Công – Thần Hoàng.",
      culinaryCulture: {
        styleOverview: "Đài Thái (臺菜 Táicài) là nhánh phát triển rực rỡ từ Mân Nam Phúc Kiến – Triều Sán hòa quyện phong vị Khách Gia và tinh hoa ẩm thực khắp Hoa Bắc–Giang Nam hội tụ năm 1949, nổi bật với hải sản tươi ngọt, vị thanh béo nhẹ của hành phi – xì dầu và văn hóa Chợ đêm (夜市 Yèshì) sáng tạo bậc nhất thế giới.",
        signatureDishes: [
          { hanzi: "台湾牛肉面", pinyin: "Táiwān niúròumiàn", hanViet: "Mì bò hầm Đài Loan (Hồng thiêu / Thanh đốn)", description: "Món quốc hồn ra đời từ sự sáng tạo của các cựu binh Tứ Xuyên–Lương Sơn tại Đài Bắc thập niên 1950: bắp bò gân ninh nhừ trong nước tương đậu tương thảo mộc dùng kèm mì sợi dai và dưa cải chua." },
          { hanzi: "卤肉饭", pinyin: "Lǔròufàn", hanViet: "Lỗ nhục phạn (Cơm thịt ba chỉ băm kho)", description: "Ba chỉ băm hạt lựu ninh keo sánh trong xì dầu, hành phi giòn vàng thơm, hồi quế và rượu gạo chan nóng lên bát cơm gạo dẻo Bồng Lai." },
          { hanzi: "鼎泰丰小笼包", pinyin: "Dǐngtàifēng xiǎolóngbāo", hanViet: "Tiểu long bao Đỉnh Thái Phong (18 nếp xoắn chuẩn 21g)", description: "Nâng tầm bánh bao súp Giang Nam lên chuẩn mực mỹ thuật toàn cầu với vỏ bột đúng 5 gam, nhân 16 gam và đúng 18 nếp gấp đều tăm tắp." },
          { hanzi: "蚵仔煎 · 珍珠奶茶", pinyin: "Kēzǎijiān · Zhēnzhū nǎichá", hanViet: "Trứng hàu rán & Trà sữa Trân Châu (Đài Trung)", description: "Hàu biển tươi rán bột khoai lang kèm rau cải cúc, xốt ngọt đỏ; và phát minh Trà sữa Trân Châu đen (Boba) từ quán Xuân Thủy Đường (Đài Trung, 1986) lan khắp địa cầu!" },
          { hanzi: "凤梨酥 · 牛肉汤（台南）", pinyin: "Fènglísū", hanViet: "Bánh Dứa Phượng Lê Tô & Canh bò tươi Đài Nam", description: "Bánh quy bơ thơm lừng bọc nhân mứt dứa bản địa chua ngọt hài hòa – quà biếu biểu tượng của Đài Loan." }
        ]
      },
      economyAndIndustry: "Đứng vị trí hạt nhân chuỗi cung ứng bán dẫn toàn cầu ('Lá chắn Silicon'): sản xuất hơn 60% tổng lượng bán dẫn thế giới và trên 90% chip tiến trình tiên tiến nhất dưới 5nm/3nm nhờ TSMC (Công viên Khoa học Tân Trúc – Đài Trung – Đài Nam), MediaTek, Foxconn (Hồng Hải), ASE Group, ASUS, Acer và Giant Bicycle.",
      vietnamConnectivity: "Hiện là một trong những nhà đầu tư FDI hàng đầu vào các khu công nghiệp Việt Nam (Bình Dương, Đồng Nai, Bắc Giang, Hải Phòng) trong các lĩnh vực dệt may, da giày, điện tử lắp ráp Foxconn/Pegatron/Wistron và hóa dầu (Formosa); đồng thời cộng đồng người Việt học tập (theo Chương trình Tân Hướng Nam & học bổng đại học hàng đầu như Đại học Quốc lập Đài Loan NTU, ĐH Thanh Hoa Tân Trúc NTHU, ĐH Dương Minh Giao thông NYCU, ĐH Thành Công NCKU) và kết hôn/làm việc tại đây cực kỳ đông đảo (trên 400.000 người).",
      notableFigures: [
        { hanzi: "郑成功（延平郡王）", pinyin: "Zhèng Chénggōng", hanViet: "Trịnh Thành Công", lifespan: "1624–1662", contribution: "Danh tướng cuối Minh quê Nam An Phúc Kiến vượt biển đánh bại quân Hà Lan năm 1662, khai mở công cuộc định cư và kiến thiết văn hiến Trung Hoa tại Đài Loan." },
        { hanzi: "连横（连雅堂）", pinyin: "Lián Héng", hanViet: "Liên Hoành", lifespan: "1878–1936", contribution: "Sử gia quê Đài Nam soạn bộ *Đài Loan Thông Sử* (1920) bảo tồn ký ức lịch sử – văn hóa truyền thống suốt giai đoạn thuộc địa." },
        { hanzi: "张忠谋（半导体之父）· 侯孝贤", pinyin: "Zhāng Zhōngmóu · Hóu Xiàoxián", hanViet: "Trương Trung Mưu (TSMC) & Đạo diễn Hầu Hiếu Hiền", lifespan: "1931– / 1947–", contribution: "Người sáng lập mô hình xưởng đúc chip độc lập TSMC thay đổi ngành công nghệ toàn cầu và bậc thầy điện ảnh Tân Làn sóng Đài Loan (*Bi Tình Thành Thị*)." }
      ],
      travelAndLogistics: "Tháng 10–12 mùa thu mát ráo và tháng 3–4 mùa hoa anh đào cao nguyên đẹp nhất (tránh mùa bão tháng 7–9). Sân bay Quốc tế Đào Viên (TPE có bay thẳng cực dày từ Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc); tuyến **Đường sắt Cao tốc THSR** chạy dọc bờ tây từ Nam Cảng – Đài Bắc qua Tân Trúc – Đài Trung – Gia Nghĩa xuống Tả Doanh (Cao Hùng) chỉ mất 90 phút! Gợi ý 5 ngày: Ngày 1–2 Đài Bắc (Bảo tàng Cố Cung – Đài Bắc 101 – Phố cổ Cửu Phần – Chợ đêm Sĩ Lâm); Ngày 3 Hồ Nhật Nguyệt Đàm – Đài Trung; Ngày 4 Gia Nghĩa – A Lý Sơn; Ngày 5 Đài Nam Cố đô hoặc Cao Hùng.",
      mapCoordinates: { mapX: 742, mapY: 472, historicalCapitalEra: "Đông Ninh Phủ (Đài Nam) · Đài Bắc · Công xưởng Silicon", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    },
    "prov-inner-mongolia": {
      identity: {
        hanziSimplified: "内蒙古自治区",
        hanziTraditional: "內蒙古自治區",
        pinyin: "Nèiměnggǔ Zìzhìqū",
        hanViet: "Nội Mông Cổ Tự Trị Khu",
        adminCategory: "autonomous",
        adminTypeFull: "Khu tự trị dân tộc (自治区 Zìzhìqū)",
        abbreviation: "内蒙古 / 蒙",
        abbreviationPinyin: "Nèiměnggǔ / Měng (Nội Mông)",
        abbreviationOrigin: "Tên đầy đủ chính xác khi viết tắt là 内蒙古 (ba chữ duy nhất ở cấp tỉnh, thường gọi tắt một chữ trong giao dịch là 蒙 Měng); xuất phát từ cách chia hành chính Nội Trát Tát Khắc (nằm phía trong sa mạc Gobi hướng về Trung Nguyên) so với Ngoại Mông thời triều Thanh.",
        capitalCity: "Hô Hòa Hạo Đặc (呼和浩特市 Hūhéhàotè Shì – tiếng Mông nghĩa là 'Thành phố Xanh')"
      },
      geographyAndClimate: {
        summary: "Trải dài hơn 2.400 km dọc biên giới phía bắc Trung Quốc qua 8 tỉnh lân cận (tỉnh rộng thứ 3 Trung Quốc, 1,18 triệu km²), nằm chủ yếu trên Cao nguyên Nội Mông thuộc bậc thềm thứ hai với dãy Đại Hưng An Lĩnh ở phía đông bắc và vùng cong chữ Kỷ ('Cửu Khúc Hoàng Hà') ở trung tâm Hậu Sáo. Cảnh quan chuyển biến rõ rệt từ đông sang tây theo lượng mưa: thảo nguyên xanh bất tận Hô Luân Bối Nhĩ (phía đông) -> thảo nguyên Tích Lâm Quách Lặc -> đồng cỏ bán hoang mạc Ordos -> sa mạc Ba Đan Cát Lâm và Đằng Cách Lý ở cực tây. Khí hậu ôn đới lục địa khô hanh, gió mùa đông khắc nghiệt nhưng mùa hạ thảo nguyên xanh rực rỡ mát lành.",
        causality: "Vùng thảo nguyên khép kín với đồng cỏ mênh mông không thích hợp trồng lúa nước đã nuôi sống nền văn minh du mục trên lưng ngựa suốt 3.000 năm (Hung Nô, Tiên Ti, Đột Quyết, Khiết Đan, Mông Cổ) – sản sinh lối kiến trúc lều tròn Mông Cổ Bao (蒙古包 – tháo lắp trong vài giờ để di chuyển theo bầy đàn), trang phục bào da cừu chống gió bão và chế độ ăn đạm đỏ (thịt cừu, bò, sữa ngựa lên men, trà sữa mặn) thay cho rau xanh. Ngược lại, khúc quanh sông Hoàng Hà ở Hậu Sáo – Hô Hòa Hạo Đặc mang lại ruộng đồng màu mỡ giúp Hán–Mông giao thoa văn minh nông tang – du mục hiếm có."
      },
      historicalEvolution: "Mảnh đất của các bộ tộc du mục phương Bắc từ thời Chiến Quốc (Vua Triệu Vũ Linh Vương cải cách 'Hồ phục kỵ xạ' tại đây), đến thời Tây Hán gắn liền câu chuyện Vương Chiêu Quân đi cống Hung Nô mang hòa bình 60 năm ('Chiêu Quân Mộ' tại Hô Hòa Hạo Đặc). Thời Ngụy–Tấn có tộc Thác Bạt Tiên Ti từ Đại Hưng An Lĩnh lập Bắc Ngụy; thế kỷ X người Khiết Đan dựng nhà Liêu trên lưu vực Tây Liêu Hà; thế kỷ XIII đế chế Mông Cổ của Thành Cát Tư Hãn và Hốt Tất Liệt đặt Thượng Đô (元上都 tại Tích Lâm Quách Lặc) làm kinh đô mùa hạ. Năm 1947, Khu tự trị Nội Mông được thành lập — là khu tự trị cấp tỉnh ĐẦU TIÊN của Trung Quốc.",
      culturalIdentity: "Tinh thần thảo nguyên 'Mã bối thượng đích văn minh' (Văn minh trên lưng ngựa): trọng nghĩa khí huynh đệ, hiếu khách bằng bát rượu sữa ngựa và chiếc khăn lụa Khắc Đạt (Khata 哈达) xanh trời, tôn kính thiên nhiên (Thiên – Trường Sinh Thiên), yêu thích tiếng đàn Mã Đầu Cầm (马头琴) réo rắt ngân vang như gió thảo nguyên và hát trường ca Trường Điệu (长调) có chữ viết Mông Cổ truyền thống song song chữ Hán trên mọi bảng hiệu.",
      heritageAndLandmarks: [
        { hanzi: "元上都遗址（锡林郭勒）", pinyin: "Yuán Shàngdū Yízhǐ", hanViet: "Di chỉ Kinh đô Mùa hạ Nguyên Thượng Đô", nameVi: "Nguyên Thượng Đô (UNESCO 2012 – Xanadu)", significance: "Kinh đô mùa hè lẫy lừng của Hốt Tất Liệt (1256), nơi Marco Polo mô tả sự huy hoàng của triều Nguyên ra toàn châu Âu." },
        { hanzi: "呼伦贝尔大草原与额尔古纳湿地", pinyin: "Hūlúnbèi'ěr Dàcǎoyuán", hanViet: "Đại Thảo Nguyên Hô Luân Bối Nhĩ", nameVi: "Thảo nguyên Xanh Hô Luân Bối Nhĩ & Rừng Bạch Dương", significance: "Một trong 4 thảo nguyên tự nhiên lớn và bảo tồn nguyên vẹn nhất thế giới." },
        { hanzi: "响沙湾（鄂尔多斯）与成吉思汗陵", pinyin: "Xiǎngshāwān · Chéngjísīhán Líng", hanViet: "Vịnh Cát Hát Hưởng Sa Loan & Lăng Thành Cát Tư Hãn", nameVi: "Sa mạc Hưởng Sa Loan & Khu Tưởng niệm Thành Cát Tư Hãn", significance: "Sa mạc cát vàng biết phát tiếng vang ngân dưới bước chân và nơi lưu giữ lễ tế lửa – lễ tế Bát Bạch Thất trăm năm của người Mông Cổ." },
        { hanzi: "阿尔山国家森林公园", pinyin: "Ā'ěrshān", hanViet: "Công viên Rừng Núi lửa A Nhĩ Sơn", nameVi: "Công viên Địa chất Núi lửa A Nhĩ Sơn", significance: "Quần thể hồ miệng núi lửa Thiên Trì, dòng sông bất đóng băng mùa đông giữa rừng thông tuyết trắng ở Đại Hưng An Lĩnh." },
        { hanzi: "大召寺与昭君博物院（呼和浩特）", pinyin: "Dàzhàosì · Zhāojūn Bówùyuàn", hanViet: "Chùa Đại Chiếu & Bảo tàng Chiêu Quân", nameVi: "Chùa Phật Bạc Đại Chiếu (1579) & Mộ Vương Chiêu Quân", significance: "Tự viện Phật giáo Tạng truyền cổ nhất Hô Hòa Hạo Đặc lưu giữ tượng Phật Thích Ca bằng bạc nguyên khối." }
      ],
      intangibleHeritage: "Hát Trường Điệu Mông Cổ (蒙古族长调民歌 – UNESCO) và Hát Hầu Hô Mạch (呼麦 Khoomei – một người phát đồng thời hai âm tầng siêu thực); Nghệ thuật Đàn Mã Đầu Cầm (UNESCO); Lễ hội Na Đạt Mộ (那达慕大会 Naadam) với Ba môn Nam nhi Thảo nguyên: Đấu vật Mông Cổ, Đua ngựa không yên và Bắn cung.",
      culinaryCulture: {
        styleOverview: "Mông Thái (蒙餐 Měngcān) trứ danh toàn Trung Quốc về chất lượng thịt cừu thả đồng cỏ tự nhiên tốt bậc nhất thế giới (Tích Lâm Quách Lặc & Hô Luân Bối Nhĩ), các chế phẩm sữa tươi cô đặc và kỹ thuật nướng than/nướng đá cổ truyền không cần gia vị cầu kỳ.",
        signatureDishes: [
          { hanzi: "手把羊肉 & 烤全羊", pinyin: "Shǒubǎ yángròu & Kǎo quányáng", hanViet: "Thủ bả dương nhục & Cừu quay nguyên con", description: "Sườn cừu non luộc vừa chín bằng nước muối thanh không thêm gia vị nào để giữ độ ngọt sữa cỏ, hoặc cừu quay da vàng giòn trong tiệc đãi khách quý Thảo nguyên." },
          { hanzi: "蒙古咸奶茶（锅茶）", pinyin: "Ménggǔ xiánnǎichá (Guōchá)", hanViet: "Trà sữa mặn nồi đồng Mông Cổ (Oa Trà)", description: "Trà gạch đen nấu quyện sữa bò tươi, muối biển rồi bỏ thêm thịt bò khô, phô mai váng sữa (Nãi bì tử), bơ, kê rang giòn – thức uống năng lượng ấm bụng." },
          { hanzi: "冰煮羊火锅", pinyin: "Bīngzhǔyáng huǒguō", hanViet: "Lẩu cừu nấu băng đá tinh khiết", description: "Phương pháp sáng tạo nổi danh Hô Luân Bối Nhĩ: xếp thịt cừu non tươi lên trên lớp đá viên sạch, thêm hành tây, cà chua và rượu vang, đun lửa để băng tan từ từ giữ thớ thịt mềm mọng tuyệt đối." },
          { hanzi: "稍麦（烧麦）& 莜面窝窝", pinyin: "Shāomài · Yóumiàn wōwo", hanViet: "Xíu mại thịt cừu Hô Hòa Hạo Đặc", description: "Xíu mại Mông–Hồi nhân hoàn toàn thịt cừu băm gừng hành bọc lớp bột mỏng xòe cánh hoa hấp chín ăn cùng ấm trà gạch giải ngấy buổi sáng." },
          { hanzi: "奶皮子 · 奶豆腐", pinyin: "Nǎipízi · Nǎidòufu", hanViet: "Nãi bì tử (Váng sữa) & Đậu phụ sữa tươi", description: "Đặc sản chế phẩm sữa truyền thống thơm béo ngậy giàu đạm của gia đình du mục." }
        ]
      },
      economyAndIndustry: "Số 1 thế giới về **Đất hiếm (Rare Earths)** tại mỏ Bạch Vân Ngạc Bác (Bao Đầu chiếm hơn 50% sản lượng tinh luyện đất hiếm toàn cầu phục vụ nam châm xe điện EV, tua-bin gió và chip!); đứng top đầu Trung Quốc về **Ngành Sữa** với hai gã khổng lồ Yili (伊利) và Mengniu (蒙牛) đều đặt trụ sở tại Hô Hòa Hạo Đặc; dẫn đầu cả nước về sản xuất điện gió – điện mặt trời vùng sa mạc Kubuqi và sản lượng than – thịt cừu – len cashmere Ordos.",
      vietnamConnectivity: "Với vị trí cửa ngõ đường sắt Mãn Châu Lý và Nhị Liên Hạo Đặc kết nối Trung Quốc – Mông Cổ – Nga – Châu Âu, Nội Mông cung ứng khoáng sản, chế phẩm sữa Yili/Mengniu và len dệt may. Đại học Nội Mông (内蒙古大学 – 211/Song Nhất Lưu về Sinh học Bảo tồn Thảo nguyên & Mông Cổ học) và Đại học Công nghiệp Nội Mông trao đổi sinh viên trong các lĩnh vực thú y, nông lâm nghiệp và kỹ thuật năng lượng sạch.",
      notableFigures: [
        { hanzi: "赵武灵王（胡服骑射遗址）", pinyin: "Zhào Wǔlíngwáng", hanViet: "Triệu Vũ Linh Vương (Cải cách Hồ phục)", lifespan: "340–295 TCN", contribution: "Thực hiện cuộc cải cách quân sự vĩ đại mặc quần áo bó và cưỡi ngựa bắn cung tại vùng Cửu Nguyên (Bao Đầu – Hô Hòa Hạo Đặc)." },
        { hanzi: "成吉思汗 · 忽必烈（元上都）", pinyin: "Chéngjísīhán · Hūbìliè", hanViet: "Thành Cát Tư Hãn & Hốt Tất Liệt", lifespan: "Thế kỷ XII–XIII", contribution: "Khởi dựng Đại đế quốc Mông Cổ và triều Nguyên từ vùng đất phía bắc tới Hô Luân Bối Nhĩ và Thượng Đô." },
        { hanzi: "乌兰夫 · 席慕蓉", pinyin: "Xí Mùróng", hanViet: "Nữ thi sĩ Tịch Mộ Dung (quê gốc Mông Cổ Sát Cáp Nhĩ)", lifespan: "1943–", contribution: "Tác giả những bài thơ trữ tình nổi tiếng viết bằng tiếng Hán (*Thất Lý Hương*, *Phụ thân đích Thảo nguyên mẫu thân đích Hà*) khắc khoải nỗi nhớ quê hương thảo nguyên Nội Mông." }
      ],
      travelAndLogistics: "Tháng 6–8 là mùa thảo nguyên xanh thẳm ngút ngàn mát rượi (lễ hội Naadam sôi nổi tháng 7–8); tháng 9–10 rừng Bạch Dương Hải Lạp Nhĩ và Hồ Dương Lâm Ngạch Tế Nạp hóa vàng rực rỡ. Sân bay Bạch Tháp Hô Hòa Hạo Đặc (HET) và Đông Sơn Hải Lạp Nhĩ (HLD); tàu cao tốc Bắc Kinh Bắc – Hô Hòa Hạo Đặc Đông chỉ còn 2h15! Gợi ý 5 ngày Thảo nguyên Đông bộ: Ngày 1 Hải Lạp Nhĩ – Sông Mạc Nhĩ Cách Lặc; Ngày 2–3 Rừng Ngạch Nhĩ Cổ Nạp – Làng Ân Hòa Nga–Hoa; Ngày 4–5 Cửa khẩu Mãn Châu Lý & Hồ Hô Luân.",
      mapCoordinates: { mapX: 468, mapY: 138, historicalCapitalEra: "Hung Nô · Khiết Đan · Nguyên Thượng Đô (Xanadu)", economicCorridor: "Vành đai Đông Bắc & Hoàn Bột Hải" }
    },
    "prov-guangxi": {
      identity: {
        hanziSimplified: "广西壮族自治区",
        hanziTraditional: "廣西壯族自治區",
        pinyin: "Guǎngxī Zhuàngzú Zìzhìqū",
        hanViet: "Quảng Tây Choang Tộc Tự Trị Khu",
        adminCategory: "autonomous",
        adminTypeFull: "Khu tự trị dân tộc (自治区 Zìzhìqū)",
        abbreviation: "桂",
        abbreviationPinyin: "Guì (Quế)",
        abbreviationOrigin: "Tên Quảng Tây rút gọn từ 'Quảng Nam Tây Lộ' thời Bắc Tống (trung tâm đặt ở Quế Châu, đối ứng với Quảng Nam Đông Lộ tức Quảng Đông). Chữ viết tắt 桂 (Quế) bắt nguồn từ Quế Lâm / Quế Giang (tên gọi có từ thời Tần Lĩnh Nam Quế Lâm quận vì vùng này thơm ngát hoa mộc quế vàng mùa thu).",
        capitalCity: "Nam Ninh (南宁市 Nánníng Shì – 'Thành phố Xanh ASEAN')"
      },
      geographyAndClimate: {
        summary: "Nằm ở biên thùy Tây Nam tiếp giáp trực tiếp miền Bắc Việt Nam trên đất liền lẫn vịnh Bắc Bộ (Cảng Phòng Thành – Bắc Hải – Khâm Châu), nằm chuyển tiếp từ rìa đông nam Cao nguyên Vân Quý xuống Bồn địa Quảng Tây trên bậc thềm thứ hai–ba. Tỉnh sở hữu địa hình đá vôi **Karst đỉnh tháp (Peak Cluster / Tower Karst)** kỳ vĩ bậc nhất thế giới tại Quế Lâm – Dương Sóc và Sùng Tả, uốn lượn theo hệ thống sông Tây Giang (Li Giang, Úc Giang, Tả Giang – Hữu Giang). Khí hậu cận nhiệt đới gió mùa ẩm ấm nóng quanh năm giống hệt miền Bắc Việt Nam.",
        causality: "Núi đá vôi bị nước mưa hòa tan hàng triệu năm tạo ra hang động kỳ ảo, những thung lũng lúa nước hẹp ven sông Li Giang và tuyến đường thủy Linh Cừ (灵渠, 214 TCN) nối liền lưu vực Trường Giang với Châu Giang. Chính cảnh quan 'Quế Lâm sơn thủy giáp thiên hạ' đã nuôi dưỡng trường phái sơn thủy thanh tao từ thời Đường–Tống, trong khi sự gần gũi địa lý và hệ sinh thái sông Bằng Giang – sông Kỳ Cùng biến Quảng Tây thành đồng minh giao lưu ngôn ngữ, nông nghiệp (lúa, vải, na, hồi, quế) và kinh tế cửa khẩu mật thiết nhất của Việt Nam."
      },
      historicalEvolution: "Mở đầu bằng văn hóa Tả Giang Hoa Sơn thời Chiến Quốc – Đông Hán của người Lạc Việt / Âu Lạc cổ (những bức tranh vách đá Tả Giang hơn 2.000 năm tuổi vẽ người đánh trống đồng!). Năm 214 TCN Tần Thủy Hoàng sai Sử Lộc đào kênh Linh Cừ nối sông Tương – Ly Giang lập Quế Lâm quận. Thời Tùy–Đường là Giao Chỉ – Lĩnh Nam Tây Đạo; năm 1949 lập tỉnh Quảng Tây và năm 1958 đổi thành Khu tự trị dân tộc Choang Quảng Tây (quê hương dân tộc Choang – dân tộc thiểu số đông dân nhất Trung Quốc, hơn 17 triệu người, cùng hệ ngôn ngữ Thái–Choang thân thuộc với Tày–Nùng Việt Nam). Năm 1940–1944, nhiều vùng Quảng Tây (Liễu Châu, Quế Lâm, Tĩnh Tây, Long Châu) in đậm dấu chân cách mạng Việt Nam.",
      culturalIdentity: "Văn hóa Bát Quế (八桂文化) giao hòa sâu sắc giữa bản sắc dân tộc Choang ('Tam Nguyệt Tam' hát đối Sơn Ca Lưu Tam Tỷ, thờ vật tổ ếch, dệt thổ cẩm Tráng Cẩm và trống đồng Bắc Bộ–Tả Giang), văn hóa Dao–Miêu–Động vùng Long Tích – Tam Giang (Cầu Mưa Gió) với nét thanh lịch thi họa Quế Lâm và phong thái thương mại mở cửa hướng ASEAN của Nam Ninh.",
      heritageAndLandmarks: [
        { hanzi: "桂林山水（中国南方喀斯特）与漓江", pinyin: "Guìlín Lìjiāng", hanViet: "Quế Lâm Sơn Thủy & Sông Ly Giang", nameVi: "Sơn thủy Quế Lâm – Dương Sóc (UNESCO 2014)", significance: "Đoạn sông Ly Giang 83 km từ Quế Lâm đến Dương Sóc với hơn 100 ngọn núi đá vôi hình măng mọc, in trên mặt sau tờ tiền 20 Nhân dân tệ." },
        { hanzi: "左江花山岩画文化景观", pinyin: "Zuǒjiāng Huāshān Yánhuà", hanViet: "Tranh vách đá Hoa Sơn Tả Giang (Sùng Tả)", nameVi: "Bích họa Đá Hoa Sơn Tả Giang (UNESCO 2016)", significance: "Hơn 1.900 hình vẽ sắc đỏ chu sa trên vách đá dựng đứng thế kỷ V TCN – II CN của tổ tiên người Lạc Việt – Choang cổ cùng biểu tượng trống đồng." },
        { hanzi: "德天跨国瀑布（与板约瀑布相连）", pinyin: "Détiān Kuàguó Pùbù", hanViet: "Thác Đức Thiên – Bản Giốc (Sùng Tả)", nameVi: "Thác Liên quốc gia Đức Thiên – Bản Giốc", significance: "Thác nước xuyên biên giới lớn nhất Châu Á nối liền giữa Huyện Đại Tân (Quảng Tây) và Trùng Khánh (Cao Bằng, Việt Nam)." },
        { hanzi: "龙脊梯田与程阳八寨", pinyin: "Lóngjǐ Tītián · Chéngyáng", hanViet: "Ruộng Bậc Thang Long Tích & Cầu Phong Vũ Trình Dương", nameVi: "Ruộng Bậc Thang 'Sống lưng Rồng' Long Tích & Làng Đồng Tam Giang", significance: "Ruộng bậc thang 650 năm tuổi của người Choang–Dao leo lên độ cao 1.100 m và cây cầu gỗ không đinh sắt của người Đồng." },
        { hanzi: "灵渠（兴安）与友谊关（凭祥）", pinyin: "Língqú · Yǒuyìguān", hanViet: "Kênh đào Linh Cừ (214 TCN) & Hữu Nghị Quan", nameVi: "Kênh Linh Cừ cổ đại & Ải Nam Quan – Hữu Nghị Quan", significance: "Kênh nối sông Trường Giang – Châu Giang hơn 2.200 năm tuổi và cửa ải lịch sử 2.000 năm kết nối trực diện Lạng Sơn (Việt Nam)." }
      ],
      intangibleHeritage: "Hội hát Sơn Ca 'Mồng Ba Tháng Ba' (三月三) của dân tộc Choang hát đối dưới ánh trăng tại Công viên Dân ca; Nghệ thuật dệt gấm Tráng Cẩm (壮锦) với hoa văn chim hạc – trống đồng; Chế tác Khèn Đồng – Quả Tú cầu thêu (绣球 – quà đính ước Tĩnh Tây – Tịnh Tây); và nghệ thuật chế biến Trà Dầu Cung Thành.",
      culinaryCulture: {
        styleOverview: "Quế Thái (桂菜 Guìcài) nổi tiếng nhất khắp Trung Quốc không phải cao lương mỹ vị cung đình mà là **Đế chế Bún Gạo (Phấn 粉)** ngon trứ danh ('Phấn tại Quảng Tây'): do vùng đất giàu lúa nước dẻo tạo ra Bún Ốc Liễu Châu, Bún Quế Lâm, Bún Hữu Bằng Nam Ninh cùng hương vị Chua Ngọt Gia vị Xoài – Măng chua 'Toan dã' cực kỳ thân thuộc với khẩu vị miền Bắc Việt Nam!",
        signatureDishes: [
          { hanzi: "柳州螺蛳粉", pinyin: "Liǔzhōu luósīfěn", hanViet: "Liễu Châu loa ty phấn (Bún ốc măng chua Liễu Châu)", description: "Hiện tượng ẩm thực tỷ đô nổi danh toàn cầu: bún gạo dai ngâm nước dùng ninh xương heo & ốc đá với hơn 20 hương liệu, ăn kèm măng chua muối (Toan duẩn – tạo mùi nồng đặc trưng), váng đậu rán giòn, đậu que chua, mộc nhĩ và ớt đỏ." },
          { hanzi: "正宗桂林米粉", pinyin: "Guìlín mǐfěn", hanViet: "Bún trộn khô Quế Lâm (Lỗ thủy)", description: "Sợi bún trắng mịn trụng nước dùng xương – thịt – hương liệu thảo mộc bí truyền ('Lỗ thủy'), xếp thịt xá xíu quay giòn, thịt bò kho, đậu phộng rang và củ cải chua." },
          { hanzi: "南宁老友粉", pinyin: "Nánníng lǎoyǒufěn", hanViet: "Nam Ninh Lão Hữu Phấn (Bún 'Bạn Cũ')", description: "Bún xào nhanh trên chảo lửa lớn với tỏi giã, đậu xị đen, măng chua, ớt và thịt lợn băm tạo nước dùng nóng bừng vừa chua vừa cay giải cảm mùa mưa." },
          { hanzi: "阳朔啤酒鱼", pinyin: "Yángshuò píjiǔyú", hanViet: "Dương Sóc tì tửu ngư (Cá sông Ly Giang om bia)", description: "Cá kiếm hoặc cá chép sông Ly Giang chiên sơ nguyên vảy rồi om cùng bia Thanh Đảo, cà chua tươi, ớt chuông xanh đỏ thơm ngậy lạ miệng." },
          { hanzi: "荔浦芋扣肉 & 恭城油茶", pinyin: "Lìpǔyù kòuròu", hanViet: "Khoai môn Lệ Phố khâu nhục & Trà dầu Cung Thành", description: "Ba chỉ hầm nhừ kẹp từng lát khoai môn bở tơi Lệ Phố (món tiến vua thời Thanh) hòa vị béo bùi quyện tan trong miệng." }
        ]
      },
      economyAndIndustry: "Cửa ngõ thương mại số 1 giữa Trung Quốc và ASEAN — nơi tổ chức **Hội chợ Trung Quốc – ASEAN (CAEXPO)** hàng năm tại Nam Ninh; Cảng Khâm Châu đang đào **Kênh đào Bình Lục (平陆运河)** dài 134 km nối trực tiếp hệ thống sông Tây Giang ra Biển Đông qua Vịnh Bắc Bộ để rút ngắn 560 km cho hàng Tây Nam tới Việt Nam; đồng thời Liễu Châu là 'Thủ đô Xe điện Đô thị Mini' thế giới với Wuling / SGMW (Wuling Mini EV xuất hiện dày đặc cả ở Việt Nam!) và tập đoàn máy xúc LiuGong.",
      vietnamConnectivity: "Không một tỉnh nào của Trung Quốc có kết nối biên mậu và cộng đồng lưu học sinh gắn bó với Việt Nam trực diện như Quảng Tây: qua cặp cửa khẩu Quốc tế **Hữu Nghị Quan – Bằng Tường (Lạng Sơn)** và **Đông Hưng – Móng Cái (Quảng Ninh)** chiếm tới >70% lưu lượng xuất khẩu sầu riêng, thanh long, mít, xoài và linh kiện điện tử đường bộ giữa hai nước; tuyến tàu liên vận Gia Lâm – Đồng Đăng – Bằng Tường – Nam Ninh – Sùng Tả. Tại Nam Ninh và Quế Lâm, Đại học Quảng Tây (广西大学 – 211/Song Nhất Lưu), Đại học Dân tộc Quảng Tây, Đại học Y khoa Quảng Tây và Đại học Sư phạm Quảng Tây (Trường Dục Tài lịch sử) đón lượng lưu học sinh Việt Nam đứng nhóm đầu cả nước!",
      notableFigures: [
        { hanzi: "刘三姐（壮族歌仙传说）", pinyin: "Liú Sānjiě", hanViet: "Lưu Tam Tỷ (Ca Tiên dân tộc Choang)", lifespan: "Truyền thuyết Đường đại", contribution: "Biểu tượng văn nghệ dân gian tài hoa chống áp bức qua tiếng hát sơn ca đối đáp bên dòng Ly Giang Nghi Châu – Quế Lâm." },
        { hanzi: "陈宏谋 · 李宗仁", pinyin: "Chén Hóngmóu · Lǐ Zōngrén", hanViet: "Trần Hoành Mưu & Lý Tông Nhân (Quế Lâm)", lifespan: "1696–1771 / 1891–1969", contribution: "Vị đại thần – nhà giáo dục nổi danh triều Càn Long quê Lâm Quế và vị tướng chỉ huy chiến thắng Đài Nhi Trang thời Kháng chiến." },
        { hanzi: "胡志明与广西革命足迹", pinyin: "Yuè-Zhōng Yǒuyì (Lóngzhōu · Jìngxī · Liǔzhōu)", hanViet: "Khu Di tích Hữu nghị Việt–Trung tại Liễu Châu – Tĩnh Tây", lifespan: "1940–1944", contribution: "Nơi Chủ tịch Hồ Chí Minh viết tập thơ bất hủ *Nhật ký trong tù* tại nhiều nhà lao Quảng Tây và gắn bó cùng nhân dân Tịnh Tây – Liễu Châu." }
      ],
      travelAndLogistics: "Tháng 4–10 cảnh sắc sông Ly Giang, ruộng bậc thang Long Tích mùa đổ nước (tháng 5–6) hoặc mùa lúa chín vàng rực (cuối tháng 9 – tháng 10) đẹp mê hồn; tháng 10/2026 chính sách quá cảnh miễn thị thực 240 giờ cũng mở rộng cực thuận lợi qua Sân bay Lưỡng Giang Quế Lâm (KWL) và Ngô Vu Nam Ninh (NNG)! Tàu cao tốc nối Nam Ninh Đông tới Quế Lâm chỉ 2h15, tới Biện giới Sùng Tả – Bằng Tường dưới 1h30 (dễ dàng qua cửa khẩu Hữu Nghị bằng xe/tàu!). Gợi ý 5 ngày: Ngày 1 Nam Ninh – Bảo tàng Dân tộc Choang; Ngày 2 Thác Đức Thiên – Cổ trấn Thái Bình Sùng Tả; Ngày 3 Quế Lâm (Tượng Tỵ Sơn – Tĩnh Giang Vương Thành); Ngày 4 Du thuyền Ly Giang – Dương Sóc (Ngộ Long Hà & Ấn tượng Lưu Tam Tỷ); Ngày 5 Ruộng bậc thang Long Tích.",
      mapCoordinates: { mapX: 484, mapY: 506, historicalCapitalEra: "Quế Lâm quận (Tần) · Cửa khẩu Hữu Nghị Quan", economicCorridor: "Hành lang RCEP – Việt Nam" }
    },
    "prov-tibet": {
      identity: {
        hanziSimplified: "西藏自治区",
        hanziTraditional: "西藏自治區",
        pinyin: "Xīzàng Zìzhìqū",
        hanViet: "Tây Tạng Tự Trị Khu",
        adminCategory: "autonomous",
        adminTypeFull: "Khu tự trị dân tộc (自治区 Zìzhìqū)",
        abbreviation: "藏",
        abbreviationPinyin: "Zàng (Tạng)",
        abbreviationOrigin: "Tên gọi 'Tạng' (藏) bắt nguồn từ tên vùng địa lý truyền thống Tạng (Tsang – vùng Nhật Khách Tắc) hợp với Tiền Tạng (Ngô – Lhasa) thành 'Vệ Tạng' thời Thanh; nằm ở phía tây vùng Trung Nguyên nên gọi Tây Tạng và viết tắt là 藏.",
        capitalCity: "Lhasa (拉萨市 Lāsà Shì – tiếng Tạng: 'Thánh Địa Chư Thần')"
      },
      geographyAndClimate: {
        summary: "Nằm trọn vẹn trên phần cốt lõi của **Cao nguyên Thanh–Tạng — bậc thềm thứ nhất cao nhất Trái Đất ('Nóc nhà Thế giới')** với độ cao trung bình trên 4.000 m, được kẹp giữa hai dãy núi sừng sững bậc nhất hành tinh là dãy **Himalaya** ở phía nam (đỉnh Châu Mục Lãng Mã / Everest cao 8.848,86 m) và dãy Côn Lôn – Đường Cổ Lạp Sơn ở phía bắc. Phía đông nam là thung lũng ấm ẩm Lâm Chi và Hẻm núi Nhã Lỗ Tạng Bố sâu nhất thế giới. Khí hậu cao nguyên khô lạnh loãng oxy, chênh lệch nhiệt độ ngày–đêm cực lớn nhưng sở hữu hơn 3.000 giờ nắng rực rỡ mỗi năm ('Thành phố Ánh Dương' Lhasa).",
        causality: "Nồng độ oxy chỉ đạt ~60–65% mực nước biển và băng tuyết vĩnh cửu khiến trồng lúa mì/lúa gạo thông thường bất khả thi ở phần lớn cao nguyên, buộc người Tạng thuần hóa duy nhất loài cây ngũ cốc chịu lạnh là **Thanh Khoa (hắc mạch/lúa mạch cao nguyên)** giã thành bột Tsampa (Tán ba 糌粑) trộn Trà Bơ để dễ mang theo khi du mục hoặc hành hương, và dựa vào bò Tây Tạng Yak cho sữa, thịt, len, chất đốt lẫn thồ hàng. Nắng gắt gió buốt còn tạo nên trang phục áo Tạng (Tạng bào) rộng vai để ban trưa trời nắng cởi một bên tay áo thông thoáng và ban đêm dùng làm chăn ngủ!"
      },
      historicalEvolution: "Thế kỷ VII CN, vị Tán Phổ kiệt xuất **Tùng Tán Cán Bố (Songtsen Gampo)** thống nhất các bộ lạc tạo lập Đế chế Thổ Phồn (吐蕃) hùng mạnh đóng đô tại Lhasa, sai đại thần Thonmi Sambhota sáng tạo chữ Tạng (dựa trên chữ Phạn Ấn Độ), tiếp nhận Công chúa Văn Thành triều Đường (641) và Công chúa Bhrikuti Nepal xây dựng Chùa Đại Chiêu – Cung Potala sơ khai. Thế kỷ XI phát triển thành Bốn đại tông phái Phật giáo Tạng truyền (Ninh Mã, Tát Ca, Ca Cử và Cách Lỗ Phái sau thế kỷ XV của Đại sư Tông Khách Ba cùng hệ thống Đạt Lai Lạt Ma – Ban Thiền Lạt Ma). Thời Nguyên–Minh–Thanh thiết lập Tuyên Chính Viện và Trú Tạng Đại Thần; năm 1965 chính thức thành lập Khu tự trị Tây Tạng.",
      culturalIdentity: "Cái nôi của Văn hóa Tuyết Vực Tạng (雪域藏文化): một thế giới tâm linh thẳm sâu đặt Phật giáo Kim Cương Thừa làm trung tâm vũ trụ quan (luật luân hồi, cờ cầu nguyện Kinh Phiên Ngũ Sắc 经幡 tung bay mang lời chúc bình an theo gió, chuyển luân Kinh đồng, hành hương Ngũ thể đầu địa quanh Bát Giác Nhai và Lhasa), kết hợp y học Tạng truyền (*Tứ Bộ Y Điển*), nghệ thuật Tangka tinh xảo và lòng sùng kính thiên nhiên núi thiêng hồ thánh.",
      heritageAndLandmarks: [
        { hanzi: "拉萨布达拉宫历史建筑群（大昭寺 · 罗布林卡）", pinyin: "Bùdálāgōng · Dàzhāosì", hanViet: "Cung Potala · Chùa Đại Chiêu (Jokhang) · La Bố Lâm Tạp", nameVi: "Quần thể Cung Potala & Chùa Đại Chiêu (UNESCO 1994)", significance: "Tòa cung điện–tu viện 13 tầng trên đỉnh Hồng Sơn ở độ cao 3.700 m cùng ngôi chùa linh thiêng nhất Tây Tạng thờ tượng Phật Thích Ca 12 tuổi của Công chúa Văn Thành." },
        { hanzi: "珠穆朗玛峰与羊卓雍措 · 纳木措", pinyin: "Zhūmùlǎngmǎfēng · Nàmùcuò", hanViet: "Đỉnh Everest · Hồ Dương Trác Ung Thố · Hồ Nam Thố", nameVi: "Đỉnh Everest & Tam Đại Thánh Hồ Tây Tạng", significance: "Đỉnh núi cao nhất Trái Đất (8.848,86 m) và các hồ thiêng xanh màu đá ngọc lam nằm ở độ cao 4.400–4.718 m." },
        { hanzi: "扎什伦布寺（日喀则）与色拉寺 · 哲蚌寺", pinyin: "Zháshílúnbùsì", hanViet: "Chùa Trát Thập Luân Bố (Shigatse) & Triết Bạng · Sắc Lạp", nameVi: "Tứ Đại Tự Viện Hoàng Giáo Cách Lỗ Phái", significance: "Những đại học Phật giáo lớn nhất Tây Tạng nổi danh về tranh biện Kinh điển triết học sân chùa (Biện Kinh) mỗi buổi chiều tại Chùa Sắc Lạp." },
        { hanzi: "雅鲁藏布大峡谷与林芝桃花沟", pinyin: "Yǎlǔzàngbù Dàxiágǔ", hanViet: "Đại Hẻm núi Nhã Lỗ Tạng Bố & Lâm Chi", nameVi: "Hẻm núi Sâu nhất Trái Đất & Thung lũng Hoa Đào Lâm Chi", significance: "Đoạn sông lớn uốn vòng quanh đỉnh Nam Già Ba Ngõa (Namcha Barwa 7.782 m) tạo vùng tiểu khí hậu 'Giang Nam Tây Tạng'." },
        { hanzi: "古格王朝遗址（阿里）与冈仁波齐", pinyin: "Gǔgé Wángcháo · Gāngrénbōqí", hanViet: "Di chỉ Vương quốc Cổ Cách & Thần sơn Kailash", nameVi: "Phế tích Vương quốc Cổ Cách (A Lý) & Núi Thiêng Kailash", significance: "Núi Cương Nhân Ba Tề được cả bốn tôn giáo (Phật giáo, Ấn Độ giáo, Kỳ Na giáo, Bön) tôn là Trục Tâm Thế Giới." }
      ],
      intangibleHeritage: "Tạng Hí (藏戏 Ache Lhamo – kịch hát mặt nạ ngoài trời 600 năm tuổi, UNESCO); Sử thi *Cách Tát Nhĩ Vương* (UNESCO); Tắm thuốc Dược Dục Y học Tạng truyền (UNESCO); Nghệ thuật Vẽ tranh Tangka khoáng chất vàng bạc và Tạo lập Mandala cát màu; và Nhạc tế lễ tự viện kèn đồng dài Dungchen.",
      culinaryCulture: {
        styleOverview: "Tạng Thái (藏餐 Zàngcān) tối giản nhưng giàu năng lượng chống rét cao nguyên: lấy lúa mạch Thanh Khoa (nướng xay làm Tsampa và ủ thành rượu Thanh Khoa), thịt bò Yak phơi khô gió tự nhiên và bơ Yak làm nền tảng, hiện nay tại Lhasa còn kết hợp khéo léo phong vị Tứ Xuyên – Nepal.",
        signatureDishes: [
          { hanzi: "糌粑配酥油茶", pinyin: "Zānbā pèi sūyóuchá", hanViet: "Tán ba phối Tô du trà (Bột Thanh khoa & Trà bơ mặn)", description: "Hai thức thực phẩm sinh tồn không thể tách rời người Tạng: uống trà gạch nấu với bơ Yak muối ấm nóng rồi dùng tay bóp đều bột lúa mạch rang thành viên tròn ăn trực tiếp." },
          { hanzi: "牦牛肉火锅 & 风干牦牛肉", pinyin: "Máoniúròu huǒguō", hanViet: "Lẩu thịt bò Yak & Bò Yak phơi gió khô", description: "Thịt bò Yak chăn thả trên thảo nguyên 4.500 m thớ săn chắc thơm đậm, thái miếng hoặc ninh lẩu nấm Tùng Nhung Lâm Chi." },
          { hanzi: "青稞酒", pinyin: "Qīngkējiǔ", hanViet: "Thanh khoa tửu (Rượu lúa mạch cao nguyên)", description: "Thức uống nồng độ nhẹ thanh ngọt màu hổ phách ủ từ lúa mạch cao nguyên lên men mời khách trong mọi lễ hội." },
          { hanzi: "藏面配甜茶", pinyin: "Zàngmiàn pèi tiánchá", hanViet: "Mì Tạng & Trà sữa ngọt (Trà quán Quang Minh Lhasa)", description: "Món sáng bình dân tuyệt vời tại các trà quán Lhasa: mì nấu nước xương bò Yak ăn kèm bánh thịt hấp và nhâm nhi ly trà sữa đen đun ngọt béo." },
          { hanzi: "鲁朗石锅鸡（林芝）", pinyin: "Lǔlǎng shíguōjī", hanViet: "Gà hầm nồi đá Lỗ Lãng (Lâm Chi)", description: "Gà đen Tạng nấu cùng nấm thủ chưởng Lâm Chi, thiên ma, đẳng sâm trong chiếc nồi đẽo nguyên khối từ đá xà phòng Mặc Thoát." }
        ]
      },
      economyAndIndustry: "Tăng trưởng xanh dẫn đầu toàn quốc với du lịch văn hóa – sinh thái cao cấp toàn cầu, thủy điện sạch thượng nguồn, khoáng sản đồng – lithium hồ muối cao nguyên, sản xuất nước khoáng băng tinh khiết (Tibet 5100), dược phẩm Y học Tạng truyền (Kỳ Chính Tạng Dược) và nông sản đặc hữu Thanh Khoa – thịt bò Yak – nấm Tùng Nhung.",
      vietnamConnectivity: "Tuyến du lịch hành hương Tây Tạng Lhasa – Shigatse – Everest – Kailash là một trong những tuyến điểm khát khao bậc nhất của du khách và Phật tử Việt Nam (bay qua Thành Đô / Trùng Khánh / Côn Minh tới Sân bay Cống Cát Lhasa). Một số tự viện cổ và Đại học Tây Tạng (西藏大学 – 211/Song Nhất Lưu về Ngôn ngữ – Văn học – Sinh thái Độ cao) đóng vai trò cầu nối nghiên cứu văn hóa Phật giáo Đông Á – Tạng truyền.",
      notableFigures: [
        { hanzi: "松赞干布", pinyin: "Sōngzàn Gānbù", hanViet: "Tùng Tán Cán Bố (Songtsen Gampo)", lifespan: "k. 617–650", contribution: "Vị Tán Phổ vĩ đại thứ 33 lập nên vương triều Thổ Phồn thống nhất, đặt chữ viết Tạng, định luật pháp và đưa Phật giáo vào Tây Tạng." },
        { hanzi: "八思巴（萨迦派法王）", pinyin: "Bāsībā", hanViet: "Bát Tư Ba (Drogon Chogyal Phagpa)", lifespan: "1235–1280", contribution: "Vị Quốc sư triều Nguyên sáng chế hệ thống chữ Bát Tư Ba cho Hốt Tất Liệt và thúc đẩy giao lưu Phật giáo sâu rộng toàn Đế quốc." },
        { hanzi: "仓央嘉措（六世达赖）", pinyin: "Cāngyāng Jiācuò", hanViet: "Thương Ương Gia Thố", lifespan: "1683–1706", contribution: "Thi sĩ trữ tình kiệt xuất của văn học Tạng ngữ thế kỷ XVII với hàng trăm bài tình ca đầy triết lý được dịch rộng rãi ra nhiều thứ tiếng." }
      ],
      travelAndLogistics: "Tháng 4–6 và tháng 9–10 thời tiết khô ráo nắng trong đẹp nhất để ngắm Everest & Lâm Chi hoa đào (tháng 3–4); mùa đông tháng 11–2 vắng khách nắng ấm ban ngày rất bình yên. Cần xin trước Giấy phép Nhập cảnh Tây Tạng (Tibet Travel Permit cho khách quốc tế), hạ cánh ở độ cao 3.650 m qua Sân bay Cống Cát Lhasa (LXA) hoặc đi **Tuyến Đường sắt Thanh–Tạng** từ Tây Ninh (21h vượt đèo Đường Cổ Lạp 5.072 m) để thích nghi dần độ cao. Hành trình chuẩn 6–7 ngày: Ngày 1–2 Lhasa (nghỉ thích nghi độ cao, Chùa Đại Chiêu – Phố Bát Giác); Ngày 3 Cung Potala – Chùa Sắc Lạp; Ngày 4 Hồ Dương Trác Ung Thố – Băng hà Khả Nhược Lạp – Nhật Khách Tắc; Ngày 5 Trát Thập Luân Bố / Everest Base Camp; Ngày 6 Hồ Nam Thố hoặc Lâm Chi.",
      mapCoordinates: { mapX: 186, mapY: 388, historicalCapitalEra: "Thổ Phồn (Cung Potala Lhasa) · Cổ Cách", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-ningxia": {
      identity: {
        hanziSimplified: "宁夏回族自治区",
        hanziTraditional: "寧夏回族自治區",
        pinyin: "Níngxià Huízú Zìzhìqū",
        hanViet: "Ninh Hạ Hồi Tộc Tự Trị Khu",
        adminCategory: "autonomous",
        adminTypeFull: "Khu tự trị dân tộc (自治区 Zìzhìqū)",
        abbreviation: "宁",
        abbreviationPinyin: "Níng (Ninh)",
        abbreviationOrigin: "Sau khi Thành Cát Tư Hãn tiêu diệt vương triều Tây Hạ năm 1227, triều Nguyên lập hành tỉnh lấy tên Ninh Hạ (nghĩa là 'Bình định, an ninh vùng đất Tây Hạ' 夏地安宁), rút chữ đầu 宁 (Ninh) làm ký hiệu viết tắt.",
        capitalCity: "Ngân Xuyên (银川市 Yínchuān Shì – 'Tái Thượng Giang Nam')"
      },
      geographyAndClimate: {
        summary: "Nằm ở trung thượng lưu sông Hoàng Hà trên bậc thềm thứ hai giữa ranh giới Cao nguyên Hoàng Thổ và Cao nguyên Nội Mông (tỉnh có diện tích nhỏ nhất trong 5 khu tự trị). Tuy vây bọc ba phía bởi sa mạc Đằng Cách Lý, Mao Ô Tố và Ô Lan Bố Hòa, nhưng dãy núi **Hạ Lan Sơn (贺兰山)** chạy dọc sườn tây cao 3.556 m như bức tường thành chắn gió bão cát Tây Bắc, đồng thời đoạn sông Hoàng Hà chảy qua bình nguyên Ngân Xuyên đã hình thành hệ thống kênh tưới tiêu 2.000 năm biến lòng chảo thành ốc đảo trù phú mệnh danh **'Thiên hạ Hoàng Hà Phú Ninh Hạ' (Tái Thượng Giang Nam 塞上江南)**. Khí hậu ôn đới khô hanh nhiều nắng, biên độ nhiệt ngày–đêm rất cao.",
        causality: "Nắng gắt ban ngày thúc đẩy quang hợp đường, còn ban đêm lạnh sương giúp tích tụ chất ngọt tuyệt đối khiến Trung Ninh Kỷ Tử (câu kỷ đỏ số 1 thế giới), nho làm rượu vang chân núi Hạ Lan Sơn (tiêu chuẩn Grand Cru sánh ngang Bordeaux) và cừu Than Dương ăn cỏ muối kiềm đạt chất lượng thượng hạng không đâu sánh bằng. Bốn mặt sa mạc giao thoa Hán – Tạng – Hồi – Đảng Hạng suốt ngàn năm sinh ra văn hóa 'Vạn lý trường thành đan xen tháp Hồi giáo' và nền văn hóa ẩm thực Thanh Chân tinh tế hàng đầu Trung Quốc."
      },
      historicalEvolution: "Mở đầu bằng di chỉ Thủy Động Câu 30.000 năm trước và dấu tích tranh đá Hạ Lan Sơn thời tiền sử. Thời Tần–Hán cho đào hệ thống kênh Tần Cừ, Hán Cừ dẫn nước Hoàng Hà định cư vùng Ngân Xuyên. Giai đoạn rực rỡ độc nhất là **Vương quốc Tây Hạ (西夏, 1038–1227)** do Lý Nguyên Hạo tộc Đảng Hạng lập nên tại Hưng Khánh Phủ (Ngân Xuyên): sáng tạo chữ viết Tây Hạ cực kỳ phức tạp, phát hành kinh Phật bằng công nghệ in chữ rời gỗ sớm nhất còn lưu vật chứng, xây dựng Quần thể Lăng tẩm Tây Hạ ('Kim tự tháp phương Đông'). Thời Nguyên–Minh–Thanh tiếp nhận cộng đồng người Hồi (hậu duệ thương nhân Ba Tư – Ả Rập Con đường Tơ lụa) định cư, và năm 1958 lập Khu tự trị dân tộc Hồi Ninh Hạ.",
      culturalIdentity: "Không gian hài hòa giữa di sản bí ẩn của vương triều Tây Hạ cổ đại, lối sống cần cù thanh sạch Thanh Chân (Halal) của người Hồi (trà Bát Bảo, thánh đường mái vòm kết hợp đình các Trung Hoa), nghệ thuật thổi sáo dân gian Hồi tộc khẩu huyền (Mục Tức/Kǒuxián) và không khí vùng biên ải sa mạc đầy thi vị ('Giá trường xa đạp phá Hạ Lan Sơn khuyết' của Nhạc Phi).",
      heritageAndLandmarks: [
        { hanzi: "西夏陵国家考古遗址公园", pinyin: "Xīxià Líng", hanViet: "Quần thể Hoàng lăng Tây Hạ (Di sản đề cử UNESCO)", nameVi: "Quần thể Lăng Tẩm Tây Hạ Vương Triều", significance: "9 lăng đế vương và 271 mộ bồi táng tháp đất nện màu vàng cam hình bát giác dựng sừng sững dưới chân núi Hạ Lan Sơn." },
        { hanzi: "沙坡头（中卫 · 腾格里沙漠）", pinyin: "Shāpōtóu", hanViet: "Sa Pha Đầu (Trung Vệ)", nameVi: "Khu Sinh thái Sa mạc Sa Pha Đầu – Hoàng Hà", significance: "Nơi Sa mạc Đằng Cách Lý, Sông Hoàng Hà, núi cao và ốc đảo xanh gặp nhau cùng kỳ tích lưới rơm chống cát 'Mạch thảo phương cách' nổi tiếng của Liên Hợp Quốc." },
        { hanzi: "贺兰山岩画", pinyin: "Hèlánshān Yánhuà", hanViet: "Tranh khắc đá Hạ Lan Sơn", nameVi: "Di sản Tranh khắc đá Núi Hạ Lan (10.000–3.000 năm)", significance: "Hơn 20.000 bức khắc đá cổ của các bộ lạc du mục phương Bắc với biểu tượng Thần Mặt Trời nổi tiếng." },
        { hanzi: "水洞沟遗址", pinyin: "Shuǐdònggōu", hanViet: "Di chỉ Tiền sử Thủy Động Câu", nameVi: "Di chỉ Cựu thạch khí Thủy Động Câu & Tàng Binh Động", significance: "Di chỉ đồ đá cũ quan trọng nhất miền Tây Bắc Trung Quốc cùng hệ thống địa đạo quân sự thời Minh dài hàng km." },
        { hanzi: "须弥山石窟与镇北堡西部影城", pinyin: "Xūmíshān Shíkū · Zhènběibǎo", hanViet: "Hang đá Tu Di Sơn & Phim trường Trấn Bắc Bảo", nameVi: "Phật giáo Tu Di Sơn & Trường quay Trấn Bắc Bảo", significance: "Trọng điểm Tơ Lụa phương Bắc thời Bắc Ngụy–Đường và bối cảnh quay các phim kinh điển như *Đại Thoại Tây Du*, *Cao Lương Đỏ*." }
      ],
      intangibleHeritage: "Nghệ thuật Dệt thảm len tay Ngân Xuyên; Điêu khắc đá Hạ Lan ('Thúy thạch'); Hát dân ca Hoa Nhi Lục Bàn Sơn; Nghệ thuật Nhạc khí Khẩu huyền của người Hồi (Miệng ngậm đồng thau thổi vang); và kỹ nghệ chế biến Dược liệu Câu Kỷ Tử Trung Ninh.",
      culinaryCulture: {
        styleOverview: "Ngân Xuyên là kinh đô ẩm thực Thanh Chân Trung Quốc: thịt cừu Than Dương (盐池滩羊) ăn cỏ muối trên thảo nguyên Diêm Trì được giới ẩm thực toàn quốc phong danh 'Thịt cừu ngon nhất Trung Quốc – hoàn toàn không mùi hôi dù luộc nước lọc', kết hợp lúa mì – gạo ốc đảo Ngân Xuyên cực dẻo ngọt.",
        signatureDishes: [
          { hanzi: "盐池手抓羊肉", pinyin: "Yánchí shǒuzhuā yángròu", hanViet: "Thủ trảo dương nhục Diêm Trì", description: "Sườn cừu Than Dương 6 tháng tuổi luộc chín trong nước lã có vài lát hành gừng, thịt mềm mọng thấm chút mặn khoáng tự nhiên không hề cần gia vị át mùi." },
          { hanzi: "冰煮羊 · 辣糊糊", pinyin: "Làhúhu", hanViet: "Lẩu Xốt Cay Sánh Lạt Hồ Hồ Ngân Xuyên", description: "Món ăn vặt quốc dân không thể cưỡng tại Ngân Xuyên: nước lẩu sánh đặc nấu từ ớt bột ngọt, vừng, lạc giã nhuyễn không dùng dầu mỡ để nhúng thịt bò, khoai tây." },
          { hanzi: "宁夏八宝茶（盖碗茶）", pinyin: "Níngxià bābǎochá", hanViet: "Trà Bát Bảo Ninh Hạ", description: "Tất yếu trên mọi bàn tiệc Ngân Xuyên gồm trà xanh/ô long ủ cùng kỷ tử Trung Ninh, táo đỏ, long nhãn, vừng, đường phèn, nho khô và quả óc chó." },
          { hanzi: "羊杂碎 · 羊肉搓面", pinyin: "Yángzásuì · Yángròu cuōmiàn", hanViet: "Canh lòng cừu & Mì lăn tay thịt cừu", description: "Bữa sáng ấm nóng đặc trưng vùng sa mạc với nước hầm lòng cừu sánh ớt dầu hoặc mì vê tròn dai nhai sần sật." },
          { hanzi: "中宁枸杞甜品 · 贺兰山葡萄酒", pinyin: "Zhōngníng gǒuqǐ", hanViet: "Chè Câu kỷ đỏ Trung Ninh & Vang sườn Đông Hạ Lan", description: "Kỷ tử tươi Trung Ninh mọng ngọt thanh nhiệt dùng hầm gà, nấu chè ngân nhĩ kết hợp danh vang Cabernet đất đá chân núi Hạ Lan Sơn." }
        ]
      },
      economyAndIndustry: "Số 1 thế giới về **Sản xuất & Chế biến Câu Kỷ Tử (Goji Berry)**; vùng sản xuất Rượu Vang Đỏ chất lượng cao đạt hàng trăm huy chương vàng Decanter thế giới tại sườn Đông Hạ Lan Sơn; Khu công nghiệp năng lượng – than hóa lỏng lớn nhất thế giới Ninh Đông (biến than thành dầu và olefin công nghệ cao); Điện toán đám mây 'Đông Số Tây Toán' (Trung Vệ là cụm trung tâm dữ liệu xanh hàng đầu) và Nông nghiệp sinh thái ốc đảo.",
      vietnamConnectivity: "Ninh Hạ là đối tác xuất khẩu lớn các vị thuốc Đông y (Kỷ tử, Cam thảo) và phân bón, hóa chất sang Việt Nam; đồng thời kỹ thuật chắn cát bằng lưới rơm và trồng nông nghiệp trên vùng cát khô hạn Ninh Hạ mang lại nhiều tham khảo học thuật giá trị cho miền Trung khô hạn Việt Nam. Đại học Ninh Hạ (宁夏大学 – 211/Song Nhất Lưu về Tây Hạ học, Kỹ thuật Hóa chất & Nông nghiệp Chống hạn) mở rộng hợp tác nghiên cứu và học bổng cho khu vực Đông Nam Á.",
      notableFigures: [
        { hanzi: "李元昊（西夏景宗）", pinyin: "Lǐ Yuánhào", hanViet: "Lý Nguyên Hạo", lifespan: "1003–1048", contribution: "Vị hoàng đế khai quốc vương triều Đại Hạ (Tây Hạ) tại Hưng Khánh Phủ (Ngân Xuyên), chỉ đạo sáng chế hệ thống văn tự Tây Hạ độc lập với Hán tự." },
        { hanzi: "郭守敬（西夏古渠修复）", pinyin: "Guō Shǒujìng", hanViet: "Quách Thủ Kính", lifespan: "1231–1316", contribution: "Nhà thiên văn – thủy lợi kiệt xuất đời Nguyên tái thiết hoàn toàn hệ thống cống kênh tưới tiêu Hoàng Hà tại Ninh Hạ năm 1264." },
        { hanzi: "张贤亮（镇北堡影城创立者）", pinyin: "Zhāng Xiánliàng", hanViet: "Trương Hiền Lượng", lifespan: "1936–2014", contribution: "Văn hào đương đại sống và viết nhiều tiểu thuyết tại Ninh Hạ, sáng lập phim trường Trấn Bắc Bảo đưa văn hóa Tây Bắc ra thế giới." }
      ],
      travelAndLogistics: "Tháng 5–10 đẹp nhất (tránh mùa bão cát tháng 3–4; riêng tháng 9–10 mùa thu hoạch nho vang và kỷ tử trời trong xanh tuyệt đẹp). Sân bay Quốc tế Hà Đông Ngân Xuyên (INC); cao tốc Ngân–Lan kết nối Ngân Xuyên – Trung Vệ (1h15) – Lan Châu (2h50) và nối thẳng Tây An (3h30). Gợi ý 4 ngày: Ngày 1 Ngân Xuyên (Lăng Tây Hạ – Tranh đá Hạ Lan Sơn – Phim trường Trấn Bắc Bảo); Ngày 2 Hầm rượu Vang chân núi Hạ Lan – Thủy Động Câu; Ngày 3–4 Sa mạc Sa Pha Đầu Trung Vệ (cưỡi lạc đà, trượt cát, khách sạn Sa mạc Tinh Tinh).",
      mapCoordinates: { mapX: 404, mapY: 232, historicalCapitalEra: "Kinh đô Tây Hạ (Hưng Khánh Phủ) · Hạ Lan Sơn", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-xinjiang": {
      identity: {
        hanziSimplified: "新疆维吾尔自治区",
        hanziTraditional: "新疆維吾爾自治區",
        pinyin: "Xīnjiāng Wéiwú'ěr Zìzhìqū",
        hanViet: "Tân Cương Duy Ngô Nhĩ Tự Trị Khu",
        adminCategory: "autonomous",
        adminTypeFull: "Khu tự trị dân tộc (自治区 Zìzhìqū)",
        abbreviation: "新",
        abbreviationPinyin: "Xīn (Tân)",
        abbreviationOrigin: "Thời nhà Thanh sau khi bình định vùng Tây Vực năm 1759 gọi là 'Tân Tích Cương Thổ' (Cố thổ mới mở / quy về – 新疆, chính thức lập tỉnh Tân Cương năm 1884 theo kiến nghị của Tả Tông Đường); chữ 新 được giữ làm ký hiệu viết tắt.",
        capitalCity: "Ô Lỗ Mộc Tề / Urumqi (乌鲁木齐市 Wūlǔmùqí Shì – 'Đồng cỏ Xinh đẹp', thành phố xa đại dương nhất thế giới)"
      },
      geographyAndClimate: {
        summary: "Là đơn vị hành chính cấp tỉnh **lớn nhất Trung Quốc (1,66 triệu km² – chiếm 1/6 toàn lãnh thổ)** và giáp biên giới tới 8 quốc gia! Địa hình bậc thềm thứ hai sở hữu cấu trúc đối xứng huyền thoại **'Tam sơn giáp lưỡng bồn' (三山夹两盆)**: từ bắc xuống nam lần lượt là Dãy Altai -> Bồn địa Chuẩn Cát Nhĩ (có vùng Y Lê xanh tươi 'Tái Ngoại Giang Nam') -> Dãy Thiên Sơn (ngăn đôi Bắc Cương Thảo Nguyên với Nam Cương Lịch Sử) -> Bồn địa Tháp Lý Mộc khổng lồ chứa Sa mạc Taklamakan lớn thứ hai thế giới (và Hõm Thổ Lỗ Phồn sâu nhất Trung Quốc ở -154 m dưới mực nước biển!) -> Dãy Côn Lôn. Khí hậu ôn đới lục địa cực khô cằn nhưng nắng bức xạ cực cao.",
        causality: "Nước băng tan từ đỉnh Thiên Sơn và Côn Lôn thấm qua tầng cuội đá ngầm chảy vào các mương ngầm **Khảm Nhi Tỉnh (坎儿井 – Karez)** không bốc hơi dưới nắng 45°C ở Thổ Lỗ Phồn biến những ốc đảo ven rìa sa mạc Taklamakan (Kashgar, Khotan, Kucha, Turpan) thành vựa nho, dưa lưới Hami, lựu đỏ và bông dài sợi ngọt đậm bậc nhất địa cầu! Nằm chính giữa trục giao lưu văn minh Đông–Tây, Bắc Cương – Nam Cương tiếp thu âm nhạc Mộc Khải Mỗ, kiến trúc gạch đất nện, và nghề thủ công dệt thảm – rèn đồng tạo nên bản sắc đa văn hóa rực rỡ."
      },
      historicalEvolution: "Mảnh đất Tây Vực cổ đại (Tam Thập Lục Quốc Tây Vực thời Hán: Lâu Lan, Quy Từ, Cao Xương, Vu Điền...). Năm 60 TCN nhà Hán thiết lập Tây Vực Đô Hộ Phủ tại Luân Đài (đánh dấu chủ quyền hành chính đầu tiên của triều đình trung ương Trung Nguyên tại đây); thời Đường đặt An Tây Đô Hộ Phủ ('An Tây Tứ Trấn') và Bắc Đình Đô Hộ Phủ (lưu dấu bài thơ biên tái lừng danh của Sầm Tham và Cao Thích). Thế kỷ X–XI vương triều Khách Lạt Hãn tại Kashgar truyền bá Hồi giáo kết hợp truyền thống Duy Ngô Nhĩ Cao Xương; triều Thanh 1759 bình định Chuẩn Cát Nhĩ; năm 1955 thành lập Khu tự trị Duy Ngô Nhĩ Tân Cương.",
      culturalIdentity: "Sự giao hòa rực rỡ của hơn 47 thành phần dân tộc — nòng cốt là người Duy Ngô Nhĩ (ca múa say đắm, nhạc cụ Nhiệt Ngõa Phủ, mũ hoa Tiểu Hoa Mạo), người Kazakh du mục vùng Altai–Y Lê (sống lều tròn lợp nỉ, săn đại bàng), người Hán, người Hồi, người Mông Cổ và người Tajik (giữa dãy Pamir 'Nóc nhà Cận Tây'). Khẩu hiệu tự hào là 'Núi tuyết, Hồ biếc, Ca múa và Chợ đêm Thập Tự Phố'.",
      heritageAndLandmarks: [
        { hanzi: "天山天池与喀纳斯湖（阿勒泰）", pinyin: "Tiānshān Tiānchí · Kānàsīhú", hanViet: "Thiên Trì Thiên Sơn & Hồ Kanas (Altai)", nameVi: "Thiên Sơn Tân Cương (UNESCO) & Hồ Tiên Kanas – Làng Hòa Mộc", significance: "Thiên Sơn dài 2.500 km tuyết phủ cùng thảo nguyên Na Lạp Đề – Khảo Lạp Thôn và rừng thông mùa thu vàng Kanas đẹp tựa Thụy Sĩ." },
        { hanzi: "喀什古城与艾提尕尔清真寺", pinyin: "Kāshí Gǔchéng", hanViet: "Thành Cổ Kashgar (Khách Thập) & Thánh đường Id Kah", nameVi: "Thành cổ Đất nện Kashgar (2.000 năm)", significance: "Khu phố mê cung đất vàng sáp sống lớn nhất thế giới còn người dân sinh sống buôn bán dọc Con đường Tơ lụa Nam Cương." },
        { hanzi: "吐鲁番交河故城与坎儿井", pinyin: "Jiāohé Gùchéng · Kǎn'érjǐng", hanViet: "Cố thành Giao Hà & Hệ thống Dẫn thủy Ngầm Khảm Nhi Tỉnh", nameVi: "Phế tích Cổ thành Giao Hà (UNESCO) & Kỳ quan Khảm Nhi Tỉnh", significance: "Thành phố cổ 2.300 năm đục trực tiếp xuống đảo đất hoàng thổ và hệ thống 5.000 km kênh ngầm chống bốc hơi sa mạc." },
        { hanzi: "克孜尔千佛洞（拜城）", pinyin: "Kèzī'ěr Qiānfódòng", hanViet: "Hang đá Ngàn Phật Kizil (Bái Thành – Quy Từ)", nameVi: "Thạch quật Kizil (UNESCO Tơ lụa)", significance: "Quần thể hang đá Phật giáo sớm nhất Trung Quốc (thế kỷ III–VIII), tiền thân trực tiếp của nghệ thuật Đôn Hoàng." },
        { hanzi: "独库公路与帕米尔高原（慕士塔格峰）", pinyin: "Dúkù Gōnglù · Pàmǐ'ěr", hanViet: "Cung Đường Huyền Thoại Độc Khố & Cao nguyên Pamir", nameVi: "Cung đường Độc Khố 'Một ngày Bốn mùa' & Hồ Bạch Sa – Karakul", significance: "Đường đèo xuyên dãy Thiên Sơn nối Bắc–Nam Cương chiêm ngưỡng sông băng đỉnh Muztagh Ata (7.509 m)." }
      ],
      intangibleHeritage: "Nghệ thuật Mộc Khải Mỗ Duy Ngô Nhĩ Tân Cương (十二木卡姆 Twelve Muqam – bộ đại hợp xướng, múa và sử thi 12 chương được UNESCO ghi danh Kiệt tác Phi vật thể 2005); Đấu vật cổ và Nhảy Săn Đại bàng – Đàn Đông Bất Lạp của người Kazakh; Sử thi anh hùng *Mã Nạp Tư* (Manas) của người Khắc Tư Lặc Tô; và Nghề dệt lụa hoa văn rực rỡ Etles (Ngải Đức Lai Tư) vùng Hòa Điền.",
      culinaryCulture: {
        styleOverview: "Tân Cương Thái mang linh hồn đại tiệc nướng và bột mì Thanh Chân Tơ Lụa: thịt cừu sữa sạch ngọt lừng không hôi (chỉ dùng muối biển và hạt thì là Ai Cập Zīrán làm dậy hương thơm), bánh mì nướng lò đất Nang ăn cùng hoa quả ngọt nhất thế giới (Nho Turpan, Dưa lưới Hami).",
        signatureDishes: [
          { hanzi: "新疆大盘鸡配皮带面", pinyin: "Xīnjiāng dàpánjī", hanViet: "Tân Cương đại bàn kê (Đĩa gà lớn xào khoai bia)", description: "Khay đĩa khổng lồ gà thịt săn nấu sốt cà chua, ớt khô An Tập Hải, khoai tây bở và hồi quế cùng dải mì dẹt Bì Đới Diện kéo tay thấm nước xốt." },
          { hanzi: "红柳枝烤羊肉串 & 烤包子", pinyin: "Kǎo yángròuchuàn · Kǎobāozi", hanViet: "Xiên cừu nướng cành liễu đỏ & Bánh bao nướng lò đất", description: "Thịt cừu tươi xiên trên cành cây liễu đỏ sa mạc thơm nhựa nướng than hoa, kèm bánh bột ngàn lớp nướng áp vách lò đất (Samsa) giòn tan nhân thịt cừu hành tây." },
          { hanzi: "新疆手抓饭", pinyin: "Xīnjiāng shǒuzhuāfàn (Polo)", hanViet: "Cơm trộn Thịt cừu Cà rốt Nho khô (Polo)", description: "Gạo dẻo nấu cùng thịt sườn cừu xào mỡ cừu, cà rốt vàng, cà rốt cam ngọt lịm, nho khô xanh và hành tây bóng bẩy cực kỳ bổ dưỡng." },
          { hanzi: "新疆拌面（拉条子）", pinyin: "Xīnjiāng bànmiàn (Lātiáozi)", hanViet: "Mì kéo sợi Lạp Điều Tử xào thịt quá dầu", description: "Mì tự vê tay sợi tròn siêu dai mịn (không cắt dao) ăn cùng xào thịt cừu ớt xanh cà chua bằm." },
          { hanzi: "馕包肉 · 酸奶粽子 · 瓜果", pinyin: "Nángbāoròu", hanViet: "Bánh Nang ôm thịt hầm & Hoa quả Turpan", description: "Bánh mì tròn dẹt Nang nướng lò chấm đẫm nước thịt cừu om hoặc nhấm nháp nho không hạt Turpan, lựu Kashgar và dưa Hami." }
        ]
      },
      economyAndIndustry: "Số 1 Trung Quốc (chiếm >90% sản lượng cả nước) về **Bông dài sợi (Cotton)** thượng hạng và cà chua công nghiệp; đứng top đầu cả nước về dầu khí (Bồn địa Tarim – Karamay), than đá, polysilicon năng lượng mặt trời (lớn nhất thế giới), trung tâm vận chuyển tuyến **Đường sắt Trung – Âu qua cửa khẩu Alashankou và Horgos** (trên 50% tàu hàng đi châu Âu đi qua hai cảng cạn này!) cùng chuỗi du lịch tự lái cao cấp đang bùng nổ.",
      vietnamConnectivity: "Tân Cương là đối tác xuất khẩu quả óc chó, táo đỏ Nhược Khương, nho khô Turpan và sản phẩm sợi bông – nguyên phụ liệu dệt may sang các khu công nghiệp dệt may Việt Nam; ngược lại nông sản nhiệt đới Việt Nam qua đường sắt nối Côn Minh/Thành Đô lên tới thị trường Tây Bắc và Trung Á qua cảng cạn Urumqi – Kashgar. Đại học Tân Cương (新疆大学 – 211/Song Nhất Lưu) và Đại học Thạch Hà Tử có hợp tác học thuật về nông nghiệp tưới nhỏ giọt chống hạn và ngôn ngữ học Tơ Lụa.",
      notableFigures: [
        { hanzi: "班超（投笔从戎 · 西域都护）", pinyin: "Bān Chāo", hanViet: "Ban Siêu", lifespan: "32–102", contribution: "Danh tướng nhà Đông Hán 'ném bút tòng quân' trấn giữ Tây Vực hơn 30 năm tại Quy Từ – Kashgar, bảo vệ trọn vẹn Con đường Tơ lụa." },
        { hanzi: "鸠摩罗什（龟兹高僧）", pinyin: "Jiūmóluóshí (Kumārajīva)", hanViet: "Đại sư Cưu Ma La Thập", lifespan: "344–413", contribution: "Dịch giả kinh Phật kiệt xuất sinh tại nước Quy Từ (Khố Xa, Tân Cương), dịch *Kinh Kim Cang*, *Kinh Pháp Hoa*, *Kinh Duy Ma Cật* sang Hán văn chuẩn mực cho toàn Đông Á (kể cả Phật giáo Việt Nam)." },
        { hanzi: "马赫穆德·喀什噶里", pinyin: "Mǎhèmùdé·Kāshígélǐ (Mahmud al-Kashgari)", hanViet: "Mã Hách Mục Đức · Khách Thập Cát Nhĩ (Mahmud al-Kashgari)", lifespan: "1005–1102", contribution: "Nhà ngôn ngữ học vĩ đại thế kỷ XI quê Kashgar biên soạn *Đại Từ điển Ngữ hệ Turk* (Diwan Lughat al-Turk)." }
      ],
      travelAndLogistics: "Tân Cương mênh mông phải đi theo từng cung (Bắc Cương tháng 6 thảo nguyên Y Lê xanh hoa oải hương; tháng 9 lá thông vàng Kanas đẹp nhất châu Á; Nam Cương Kashgar – Pamir tháng 9–11 nắng vàng rực rỡ quả chín!). Sân bay Địa Oa Bảo Urumqi (URC); đường sắt cao tốc Lan–Tân đưa tới Thổ Lỗ Phồn (50p) và Urumqi, cùng mạng bay nội tỉnh dày đặc tới Kashgar, Y Ninh, Altai. Gợi ý Bắc Cương 6 ngày: Ngày 1 Urumqi (Bảo tàng Tân Cương xem Xác ướp Lâu Lan – Chợ Quốc tế Grand Bazaar); Ngày 2 Thiên Sơn Thiên Trì; Ngày 3–5 Thảo nguyên Na Lạp Đề – Sông Bạch Sa – Hồ Tái Lý Mộc (Sayram Lake); Ngày 6 Cung Độc Khố hoặc Hỏa Diệm Sơn – Khảm Nhi Tỉnh Turpan.",
      mapCoordinates: { mapX: 162, mapY: 172, historicalCapitalEra: "Tây Vực Đô Hộ Phủ · Quy Từ · Thành cổ Kashgar", economicCorridor: "Con đường Tơ lụa & Á–Âu" }
    },
    "prov-hongkong": {
      identity: {
        hanziSimplified: "香港特别行政区",
        hanziTraditional: "香港特別行政區",
        pinyin: "Xiānggǎng Tèbié Xíngzhèngqū",
        hanViet: "Hương Cảng Đặc Biệt Hành Chính Khu",
        adminCategory: "sar",
        adminTypeFull: "Đặc khu Hành chính (特别行政区 Tèbié Xíngzhèngqū)",
        abbreviation: "港",
        abbreviationPinyin: "Gǎng (Cảng)",
        abbreviationOrigin: "Tên Hồng Kông (Hương Cảng – Bến cảng Thơm) xuất phát từ bến cảng ở khu vực Aberdeen / Thạch Bài Loan phía nam Đảo Hồng Kông thời Minh–Thanh, nơi tập kết xuất khẩu gỗ trầm hương thơm (Thổ trầm hương) trồng tại Tân Giới – Đông Quản đi khắp cảng biển; giữ chữ 港 (Cảng) viết tắt theo chuẩn Phổ thông Pinyin Gǎng (tuyệt đối không dùng phiên âm Quảng Đông).",
        capitalCity: "Hương Cảng (Trung Hoàn & Vượng Giác – Cảng Victoria)"
      },
      geographyAndClimate: {
        summary: "Nằm ở phía đông Cửa sông Châu Giang bên bờ Biển Đông trên bậc thềm thứ ba, gồm Ba khối địa lý chính: Đảo Hồng Kông, Bán đảo Cửu Long và vùng Tân Giới cùng hơn 260 hòn đảo (Đại Nhĩ Sơn, Nam Nha Đảo...). Địa hình 75% là đồi núi đá hoa cương và núi lửa dốc đứng (Đỉnh Thái Bình cao 552 m) ôm gọn lấy **Cảng nước sâu tự nhiên Victoria** hiếm có không đóng băng, ít bồi lắng, sâu đủ cho siêu tàu viễn dương cập sát bờ. Khí hậu cận nhiệt đới hải dương nóng ẩm mùa hè và mát khô dễ chịu tháng 10–12.",
        causality: "Chính địa hình núi dốc chật hẹp chỉ có chưa tới 25% diện tích xây dựng được bao quanh bởi cảng biển sâu tuyệt vời đã buộc Hồng Kông phát triển cấu trúc đô thị mật độ cực cao theo chiều thẳng đứng ('Rừng cao ốc chọc trời dày đặc nhất thế giới'), hệ thống giao thông công cộng MTR và thang cuốn leo núi Trung Hoàn cực kỳ hiệu quả, cùng nghệ thuật ẩm thực đường phố – Trà Sữa Chà Chán Thính (Tea Restaurant) ăn nhanh tiết kiệm thời gian nhưng vẫn giữ trọn chất tinh hoa Quảng Đông – Tây phương."
      },
      historicalEvolution: "Quê hương cổ của ngư dân Tần–Hán (mộ gạch Lý Trịnh Ốc thời Đông Hán tại Cửu Long) và trạm muối Đại Hề thời Tống–Nguyên (Tống Vương Đài ghi dấu hai tiểu đế cuối Nam Tống lánh nạn năm 1277). Sau 1842/1860/1898 bị Anh thuê chiếm, cảng tự do biến Hồng Kông thành điểm trung chuyển Đông–Tây, bứt phá thần kỳ thập niên 1960–1990 thành một trong Bốn Con Rồng Kinh Tế Châu Á, trung tâm tài chính thứ 3 thế giới và kinh đô điện ảnh ('Hollywood Phương Đông'). Ngày 01/07/1997, Hồng Kông chính thức trở về chủ quyền Trung Quốc theo mô hình 'Một quốc gia, Hai chế độ' (一国两制), trở thành cực động lực của Vùng Vịnh Lớn (GBA).",
      culturalIdentity: "Sự dung hợp độc đáo giữa đạo lý gia đình Nho gia – tín ngưỡng Hoàng Đại Tiên / Thiên Hậu đậm chất Lĩnh Nam với hệ thống pháp trị thông luật (Common Law) chuyên nghiệp, văn hóa kinh doanh tốc độ cao ('Đoạn cốc tinh thần' Sư Tử Sơn – phấn đấu kiên cường từ con số 0), kiến trúc rạp chiếu phim – điện ảnh kinh điển Kim Dung / Châu Tinh Trì / Vương Gia Vệ và văn hóa ẩm thực pha trộn Đông–Tây.",
      heritageAndLandmarks: [
        { hanzi: "维多利亚港与太平山顶", pinyin: "Wéiduōlìyàgǎng · Tàipíng Shāndǐng", hanViet: "Cảng Victoria & Đỉnh Thái Bình (The Peak)", nameVi: "Đường chân trời Cảng Victoria & Tàu điện Peak Tram (1888)", significance: "Một trong ba cảng biển đêm lộng lẫy nhất hành tinh và tuyến đường sắt leo núi cổ nhất châu Á." },
        { hanzi: "天坛大佛与大澳渔村", pinyin: "Tiāntán Dàfó · Dà'ào", hanViet: "Đại Phật Thiên Đàn (Ngong Ping) & Làng chài Đại Áo", nameVi: "Tượng Phật Đồng Ngồi Lớn & Nhà sàn Làng chài Đại Áo", significance: "Bảo Liên Thiền Tự trên Đảo Đại Nhĩ Sơn với tượng đồng ngoài trời cao 34 m và làng chài trên sông trăm năm tuổi." },
        { hanzi: "香港故宫文化博物馆与M+博物馆（西九文化区）", pinyin: "Xiānggǎng Gùgōng Bówùguǎn", hanViet: "Bảo tàng Cố Cung Hồng Kông & M+", nameVi: "Khu Văn hóa Tây Cửu Long & Bảo tàng Cố Cung Hồng Kông", significance: "Quần thể bảo tàng đẳng cấp thế giới trưng bày hơn 900 bảo vật từ Cố Cung Bắc Kinh kết nối nghệ thuật đương đại." },
        { hanzi: "黄大仙祠与文武庙（上环）", pinyin: "Huángdàxiāncí · Wénwǔmiào", hanViet: "Miếu Hoàng Đại Tiên & Miếu Văn Võ (1847)", nameVi: "Đạo quán Hoàng Đại Tiên & Văn Võ Miếu Thượng Hoàn", significance: "Hai trung tâm tín ngưỡng dân gian nổi tiếng nhất phản ánh lòng cầu phúc lộc – khoa cử thịnh vượng giữa đô thị hiện đại." },
        { hanzi: "大馆古迹及艺术馆与天星小轮", pinyin: "Dàguǎn · Tiānxīng Xiǎolún", hanViet: "Quần thể Di sản Đại Quán (Tai Kwun) & Phà Ngôi Sao", nameVi: "Quần thể Kiến trúc Cảnh sát Cổ Đại Quán & Phà Star Ferry (1888)", significance: "Không gian bảo tồn kiến trúc Victoria tại Trung Hoàn kết hợp bảo tàng nghệ thuật đương đại." }
      ],
      intangibleHeritage: "Lễ hội Bánh Bao Trường Châu (长洲太平清醮 – UNESCO/Di sản Quốc gia với tháp bánh bao cao 14 m và đoàn diễu hành trên không 'Phiêu Sắc'); Múa Rồng Lửa Đại Khanh (大坑舞火龙) dịp Tết Trung Thu; Nghệ thuật May áo Sườn Xám Hồng Kông; Chế tác Trà Sữa Tất Lụa; và Kỹ nghệ Đóng Giàn giáo Tre thủ công chọc trời độc nhất thế giới.",
      culinaryCulture: {
        styleOverview: "Mệnh danh 'Thiên đường Ẩm thực Châu Á' giữ danh hiệu nhiều sao Michelin nhất châu Á tính trên đầu người: nơi hội tụ tinh hoa điểm tâm Cảng Thức Quảng Đông truyền thống (độ tinh xảo đỉnh cao), hải sản Đảo Nam Nha – Tây Cống và thực đơn Trà Thính (Chá Cāntīng) pha trộn Trung–Anh (trà sữa tất lụa, bánh dứa bơ lạnh).",
        signatureDishes: [
          { hanzi: "港式丝袜奶茶 & 冰火菠萝油", pinyin: "Gǎngshì nǎichá & Bōluóyóu", hanViet: "Trà sữa tất lụa Hồng Kông & Bánh Bơ Dứa Nóng Lạnh", description: "Trà đen Ceylon ủ nhiều vòng qua túi vải lọc mịn quyện sữa đặc bay hơi, thưởng thức kèm bánh mì dứa vỏ giòn vừa ra lò kẹp miếng bơ lạnh ngắt tan ngay trên lưỡi." },
          { hanzi: "港式烧腊（深井烧鹅 · 蜜汁叉烧）", pinyin: "Gǎngshì shāolà (Shāo'é · Chāshāo)", hanViet: "Quay Xá Lạp Hồng Kông (Ngỗng quay Thâm Tỉnh · Xá xíu mật ong)", description: "Nghệ thuật quay thịt lên tầm di sản Michelin với thịt lợn xá xíu nạc dăm cháy cạnh óng mật ong và ngỗng quay vỏ giòn tan ăn cơm trắng." },
          { hanzi: "港式云吞面", pinyin: "Gǎngshì yúntūnmiàn", hanViet: "Mì hoành thánh tôm tươi nước dùng cá bơn khô", description: "Mì trứng vịt giòn sần sật xếp lên trên viên hoành thánh tôm nguyên con bọc mỏng, chan nước dùng trong vắt ninh từ xương heo và cá bơn nướng thơm ngào ngạt." },
          { hanzi: "避风塘炒蟹", pinyin: "Bìfēngtáng chǎoxiè", hanViet: "Cua xào tỏi ớt phi Vịnh Tị Phong Đường", description: "Cua thịt nặng mai xào bùng lửa cùng hàng chục thìa tỏi băm phi giòn rụm, đậu xị đen và ớt khô từ truyền thống thuyền ẩm thực cảng Đồng La Loan." },
          { hanzi: "港式蛋挞 · 杨枝甘露", pinyin: "Gǎngshì dàntà · Yángzhī gānlù", hanViet: "Bánh trứng ngàn lớp & Chè Dương Chi Cam Lộ", description: "Hai kiệt tác tráng miệng nổi danh toàn cầu với cốt bánh quy/ngàn lớp nóng thơm sữa trứng và chè xoài bưởi hồng bột báng mát lành." }
        ]
      },
      economyAndIndustry: "Trung tâm Tài chính Quốc tế hàng đầu Châu Á – Thái Bình Dương (Sở Giao dịch Chứng khoán HKEX – cầu nối huy động vốn quốc tế số 1 cho doanh nghiệp Đại lục và châu Á, trung tâm giao dịch Nhân dân tệ ngoài biên lớn nhất thế giới, cảng tự do thuế suất 0% với hàng hóa thông thường, logistics hàng không Số 1 thế giới tại Sân bay Quốc tế Hồng Kông HKG), trọng điểm dịch vụ luật quốc tế – trọng tài thương mại HKIAC và trụ cột phía Đông của Vùng Vịnh Lớn (GBA).",
      vietnamConnectivity: "Trong lịch sử, Hồng Kông là địa danh gắn bó mật thiết với bước ngoặt cách mạng Việt Nam: tại Cửu Long ngày 03/02/1930, lãnh tụ Nguyễn Ái Quốc (Hồ Chí Minh) chủ trì **Hội nghị Thành lập Đảng Cộng sản Việt Nam**! Trong kinh tế đương đại, Hồng Kông là **kênh trung chuyển tài chính – hàng hóa lớn bậc nhất** giữa Việt Nam và Trung Quốc (chiếm tỷ trọng hàng đầu trong tổng giá trị 'Hiệu ứng Rotterdam/Hong Kong' thuộc Mirror Gap thương mại Việt–Trung!) và top 5 nhà đầu tư FDI trực tiếp hàng đầu tại Việt Nam. Giáo dục tinh hoa có tới **5 trường lọt Top 100 Thế giới**: Đại học Hồng Kông (HKU 香港大学), ĐH Khoa học Công nghệ (HKUST), ĐH Trung Văn Hồng Kông (CUHK), ĐH Thành phố (CityU) và ĐH Bách khoa (PolyU) cấp nhiều học bổng tiến sĩ HKPFS cho tài năng Việt Nam.",
      notableFigures: [
        { hanzi: "蔡元培（长眠香港）· 饶宗颐", pinyin: "Ráo Zōngyí", hanViet: "Đại học giả Nhiêu Tông Di (Quốc học Đại sư)", lifespan: "1917–2018", contribution: "Học giả bách khoa vĩ đại sánh ngang Tiền Chung Thư – Quý Tiễn Lâm ('Nam Nhiêu Bắc Quý'), giảng dạy hơn nửa thế kỷ tại Đại học Hồng Kông và Đại học Trung Văn HK." },
        { hanzi: "金庸（查良镛）", pinyin: "Jīn Yōng (Zhā Liángyōng)", hanViet: "Kim Dung (Tra Lương Dung)", lifespan: "1924–2018", contribution: "Nhà văn tiểu thuyết kiếm hiệp có tầm ảnh hưởng văn hóa rộng lớn nhất châu Á thế kỷ XX, sáng lập *Minh Báo* và sáng tác *Anh Hùng Xạ Điêu*, *Thiên Long Bát Bộ* ngay tại Hồng Kông." },
        { hanzi: "李小龙 · 高锟（光纤之父）", pinyin: "Lǐ Xiǎolóng · Gāo Kūn (Charles Kao)", hanViet: "Lý Tiểu Long & Cha đẻ Cáp Quang Cao Côn (Nobel Vật lý 2009)", lifespan: "1940–1973 / 1933–2018", contribution: "Hai biểu tượng văn hóa – khoa học vĩ đại: đưa võ thuật triết học Trung Hoa ra toàn cầu và phát minh truyền dẫn sợi quang tạo nên kỷ nguyên Internet." }
      ],
      travelAndLogistics: "Tháng 10 đến tháng 3 mát ráo dễ chịu (đặc biệt tháng 11–12 nắng đẹp, mùa Giáng sinh rực rỡ). Sân bay Quốc tế Hồng Kông (HKG) có hàng chục chuyến bay thẳng mỗi ngày tới Hà Nội, TP.HCM, Đà Nẵng, Phú Quốc; ga đường sắt cao tốc Tây Cửu Long (West Kowloon) kết nối Hồng Kông thẳng tới Thâm Quyến (14 phút), Quảng Châu (47 phút) và Bắc Kinh/Thượng Hải! Gợi ý 4 ngày: Ngày 1 Trung Hoàn – Peak Tram – Lan Quế Phường – Phà Star Ferry Cảng Victoria; Ngày 2 Bảo tàng Cố Cung HK & M+ Tây Cửu Long – Chợ Đêm Miếu Nhai; Ngày 3 Đại Nhĩ Sơn Thiên Đàn Đại Phật – Làng chài Đại Áo; Ngày 4 Phố mua sắm Tiêm Sa Chủy / Vượng Giác.",
      mapCoordinates: { mapX: 612, mapY: 526, historicalCapitalEra: "Tống Vương Đài · Cảng Victoria · Trung tâm Tài chính", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
    },
    "prov-macau": {
      identity: {
        hanziSimplified: "澳门特别行政区",
        hanziTraditional: "澳門特別行政區",
        pinyin: "Àomén Tèbié Xíngzhèngqū",
        hanViet: "Áo Môn Đặc Biệt Hành Chính Khu (Ma Cao)",
        adminCategory: "sar",
        adminTypeFull: "Đặc khu Hành chính (特别行政区 Tèbié Xíngzhèngqū)",
        abbreviation: "澳",
        abbreviationPinyin: "Ào (Áo)",
        abbreviationOrigin: "Trong cổ sử gọi là Hào Kính Áo (濠镜澳 – Vịnh nước trong như gương kẹp giữa hai dãy núi); chữ 'Áo' (澳) nghĩa là bến đỗ nước sâu, còn danh xưng phương Tây Macau bắt nguồn từ tiếng đọc âm miếu 'A-Ma-Các' (Miếu Bà Thiên Hậu Ma Tổ – 妈阁庙) khi thủy thủ Bồ Đào Nha đổ bộ năm 1553–1557 hỏi tên bến; dùng hoàn toàn chuẩn Phổ thông Pinyin Ào (Hán-Việt: Áo).",
        capitalCity: "Áo Môn (Bán đảo Ma Cao & Đảo Lộ Đãng – Đãng Tể)"
      },
      geographyAndClimate: {
        summary: "Nằm ở bờ tây Cửa sông Châu Giang đối diện Hồng Kông qua Eo biển Lăng Đinh, liền kề Đặc khu Chu Hải (Quảng Đông), với tổng diện tích chỉ ~33,3 km² (nhỏ nhất trong 34 đơn vị nhưng mật độ dân số cao nhất hành tinh!) gồm Bán đảo Ma Cao và cụm đảo Đãng Tể (Taipa) – Lộ Hoàn (Coloane) nay nối liền bởi vùng đất lấn biển Lộ Đãng (Cotai). Địa hình gò đá hoa cương thấp xen vùng biển nông nhiều phù sa sông Tây Giang. Khí hậu cận nhiệt đới hải dương ấm áp nhiều gió biển.",
        causality: "Vị thế bán đảo hẹp bên bờ tây Cửa sông Châu Giang khiến Ma Cao trở thành **cảng giao thương Á–Âu ĐẦU TIÊN ở Đông Á suốt 450 năm liên tục** (từ 1557 trước cả Thượng Hải và Hồng Kông gần 300 năm!). Chính dòng chảy chung sống hòa bình giữa văn hóa Lĩnh Nam (ngư dân thờ Ma Tổ, nhà gỗ Tam Ba Tử) với kiến trúc giáo đường Baroque Bồ Đào Nha lát sỏi đen trắng đã kiến tạo nên nền văn hóa 'Áo Môn Trung Tây Hợp Bích' êm đềm quyến rũ và món ẩm thực Ma Cao ('Macanese Cuisine') — một trong những nền ẩm thực lai hợp (Fusion) lâu đời nhất thế giới."
      },
      historicalEvolution: "Từ thời Tần là thuộc huyện Phiên Ngung, Nam Hải quận; năm 1277 người dân Trung Nguyên dạt về định cư cạnh Bến cảng Hào Kính. Năm 1553–1557, thương nhân Bồ Đào Nha được quan địa phương Quảng Đông cho phép thuê dựng kho bãi phơi hàng tại Hào Kính Áo với điều kiện nộp tô đất 500 lạng bạc mỗi năm (lưu dấu trạm truyền giáo của Matteo Ricci, Thang Nhược Vọng vào Trung Hoa và Alexandre de Rhodes trên đường tới Đông Á!). Từ 1557–1640, tuyến tàu biển **Ma Cao – Goa – Lisbon** và **Ma Cao – Nagasaki** là mạch máu bạc trắng toàn cầu. Ngày 20/12/1999, Ma Cao chính thức trở về Trung Quốc theo công thức 'Một quốc gia, Hai chế độ', hợp nhất phát triển khu hợp tác Hoành Cầm – Áo Môn.",
      culturalIdentity: "Trái ngược hoàn toàn sự hối hả của Hồng Kông, văn hóa Ma Cao giữ nhịp sống khoan thai ấm áp đậm chất nhân văn cộng đồng nhỏ: người dân nói tiếng Phổ thông – tiếng Quảng Đông song song ký hiệu đường phố hai thứ tiếng Hán – Bồ Đào Nha (đá lát Calçada Portuguesa xanh trắng dịu mắt), trân trọng di sản giáo hội cổ (Đại Học Thánh Phaolô 1594 – đại học kiểu Tây phương đầu tiên ở Viễn Đông) lẫn tín ngưỡng Miếu Bà Thiên Hậu Ma Các và Na Tra Cổ Miếu đứng sát ngay bên cạnh nhà thờ Công giáo!",
      heritageAndLandmarks: [
        { hanzi: "澳门历史城区（大三巴牌坊）", pinyin: "Dàsānbā Páifāng · Àomén Lìshǐ Chéngqū", hanViet: "Khu Di tích Lịch sử Ma Cao & Mặt tiền Nhà thờ Thánh Paul", nameVi: "Quần thể Di sản Lịch sử Ma Cao (UNESCO 2005)", significance: "22 tòa nhà lịch sử và quảng trường Nghị Sự Đình nối liền nhau, nổi bật nhất là bức tường đá hoa cương chạm khắc Á–Âu của Đại Tam Ba Bài Phường (1602–1640)." },
        { hanzi: "妈阁庙（妈祖阁）", pinyin: "Māgémào (Māzǔgé)", hanViet: "Miếu Bà Thiên Hậu Ma Các (1488)", nameVi: "Miếu Ma Các (Lâu đời nhất Ma Cao trước cả khi người Bồ tới)", significance: "Ngôi miếu đá tựa sườn núi bên cảng cổ khởi nguồn cho tên gọi quốc tế 'Macau'." },
        { hanzi: "议事亭前地与玫瑰圣母堂", pinyin: "Yìshìtíng Qiándì", hanViet: "Quảng trường Nghị Sự Đình & Nhà thờ Đức Mẹ Mân Côi", nameVi: "Quảng trường Senado lát đá sóng biển Bồ Đào Nha", significance: "Trái tim kiến trúc Nam Âu sắc vàng pastel rực rỡ giữa bán đảo Ma Cao." },
        { hanzi: "大炮台与东望洋灯塔", pinyin: "Dàpàotái · Dōngwàngyáng Dēngtǎ", hanViet: "Pháo đài Đồi Mông Đặc & Ngọn Hải đăng Guia (1865)", nameVi: "Pháo đài Monte & Hải đăng Đầu tiên Bờ biển Trung Hoa", significance: "Ngọn hải đăng cổ nhất bờ biển Trung Quốc hướng dẫn tàu bè xuyên Thái Bình Dương hơn 150 năm." },
        { hanzi: "官也街与路环圣方济各圣堂", pinyin: "Guānyějiē · Lùhuán", hanViet: "Phố Ẩm thực Quan Dã & Làng chài Thanh bình Lộ Hoàn", nameVi: "Phố ẩm thực Quan Dã Nhai (Taipa) & Làng Lộ Hoàn", significance: "Nơi lưu giữ không gian nhà thờ ven biển yên ả và tiệm bánh trứng Bồ Đào Nha gốc An Đức Lỗ (Lord Stow's)." }
      ],
      intangibleHeritage: "Nền ẩm thực Thổ Sinh Bồ Đào Nha (Macanese Cuisine – 450 năm giao thoa Đông–Tây được UNESCO ghi danh Thành phố Sáng tạo Ẩm thực); Nghệ thuật Đá lát Sóng Bồ Đào Nha; Lễ hội Tế Tổ Say Rượu 'Ngư Hành Túy Long Tiết' (舞醉龙节 – Di sản cấp Quốc gia); Hí kịch Na Tra; và Nhạc tế lễ Miếu Ma Các.",
      culinaryCulture: {
        styleOverview: "Là **'Thành phố Sáng tạo Ẩm thực UNESCO'** thứ hai của Trung Quốc (sau Thành Đô): kết hợp tinh hoa ẩm thực Quảng Đông truyền thống với kỹ thuật hầm – nướng kiểu Bồ Đào Nha dùng dầu ô liu, nghệ, nước cốt dừa, quế hồi và rượu cảng tạo nên trường phái Ẩm thực Thổ Sinh Ma Cao độc nhất vô nhị.",
        signatureDishes: [
          { hanzi: "葡式蛋挞（玛嘉烈 / 安德鲁）", pinyin: "Púshì dàntà", hanViet: "Bánh Trứng Nướng Caramel Kiểu Bồ (Egg Tart Ma Cao)", description: "Biểu tượng không thể bỏ qua của Ma Cao: đế bánh ngàn lớp giòn tan ôm trọn kem trứng béo mượt nướng cháy nhẹ caramel vàng nâu hấp dẫn." },
          { hanzi: "猪扒包", pinyin: "Zhūpábāo", hanViet: "Trư bài bao (Bánh mì kẹp cốt lết sườn heo)", description: "Chiếc bánh mì vỏ giòn nóng nướng than kẹp cả miếng sườn cốt lết có xương ướp xì dầu ngũ vị chiên vàng mọng nước, hoàn toàn không cần xốt vẫn đậm đà." },
          { hanzi: "葡国鸡 & 非洲鸡", pinyin: "Púguójī · Fēizhōujī", hanViet: "Gà Đút Lò Xốt Cà Ri Dừa (Gà Bồ) & Gà Châu Phi", description: "Đặc sản Ẩm thực Thổ Sinh đích thực: gà nướng khoai tây, ô liu đen, lạp xưởng rưới ngập xốt cà ri vàng nghệ nước cốt dừa béo ngậy thơm nức." },
          { hanzi: "水蟹粥", pinyin: "Shuǐxièzhōu", hanViet: "Thủy giải chúc (Cháo cua nguyên con Ma Cao)", description: "Gạo tám thơm ninh nhừ tan hạt cùng cua thịt tươi sống Cửa sông Châu Giang và chút vỏ quýt trần bì tạo màu vàng óng ngọt thanh tuyệt đối." },
          { hanzi: "木糠布甸 · 杏仁饼", pinyin: "Mùkāng bùdiān · Xìngrénbǐng", hanViet: "Bánh Pudding Mạt Cưa (Serradura) & Bánh Hạnh Nhân Tụ Hương Viên", description: "Tráng miệng lớp kem đánh bông mịn xen vụn bánh quy Marie giòn tan cùng món quà đặc sản bánh đậu xanh hạnh nhân nướng than củi trên Phố Tay Tấn." }
        ]
      },
      economyAndIndustry: "GDP bình quân đầu người luôn thuộc Top cao nhất châu Á–Thái Bình Dương nhờ trụ cột du lịch – hội nghị triển lãm MICE đẳng cấp thế giới (Mũi đất Lộ Đãng Cotai Strip) và đang chuyển dịch đa dạng hóa '1+4' tập trung vào Trung y dược hợp tác Quảng Đông–Ma Cao tại Hoành Cầm, tài chính xanh trái phiếu Á–Âu và du lịch di sản lịch sử.",
      vietnamConnectivity: "Hàng trăm năm trước, Ma Cao từng là điểm trung chuyển tàu buồm nối Đàng Trong (Hội An) và Đàng Ngoài (Kẻ Chợ) với phương Tây và Nhật Bản (Alexandre de Rhodes từng dừng chân học hỏi và in ấn nhiều năm tại Ma Cao trước khi hoàn thiện chữ Quốc ngữ ở châu Âu!). Hiện nay có lượng lao động dịch vụ – khách sạn người Việt làm việc ổn định tại Ma Cao và sự gắn kết đại học qua Đại học Ma Cao (University of Macau – ngôi trường công lập hàng đầu tọa lạc ngay trên khuôn viên đảo Hoành Cầm nổi bật ngành Chip Thiết kế Analog/RF đứng top thế giới) và Đại học Khoa học Kỹ thuật Ma Cao (MUST).",
      notableFigures: [
        { hanzi: "利玛窦（驻留澳门开启中西交流）", pinyin: "Lì Mǎdòu (Matteo Ricci)", hanViet: "Lợi Mã Đậu", lifespan: "1552–1610", contribution: "Vào Ma Cao năm 1582 học tiếng Hán và Lễ nghi Nho gia tại Tu viện Thánh Phaolô trước khi bước vào nội địa truyền bá Khoa học Thiên văn – Toán học phương Tây." },
        { hanzi: "郑观应（《盛世危言》作者）", pinyin: "Zhèng Guānyìng", hanViet: "Trịnh Quan Ứng (Tác giả Thịnh Thế Nguy Ngôn)", lifespan: "1842–1922", contribution: "Nhà tư tưởng khai sáng thương chiến hàng đầu cuối thế kỷ XIX sinh sống và viết bộ kiệt tác *Thịnh Thế Nguy Ngôn* ngay tại Phủ Trịnh Gia (Đại Viện Họ Trịnh – Di sản UNESCO ở Ma Cao)." },
        { hanzi: "冼星海", pinyin: "Xiǎn Xīnghǎi", hanViet: "Tiển Tinh Hải", lifespan: "1905–1945", contribution: "Nhạc sĩ thiên tài sinh trưởng từ gia đình ngư dân vùng biển Đản Gia Ma Cao, tác giả bản hợp xướng bất hủ *Hoàng Hà Đại Hợp Xướng*." }
      ],
      travelAndLogistics: "Tháng 10 đến tháng 12 trời mát khô cực đẹp đi bộ ngắm phố cổ; kết nối dễ dàng từ Sân bay Quốc tế Ma Cao (MFM), từ Hồng Kông qua **Cầu Hồng Kông – Chu Hải – Ma Cao (dài 55 km – cầu vượt biển dài nhất hành tinh)** chỉ trong 40 phút xe buýt, hoặc tàu cao tốc Thuyền Ngòi TurboJet trong 55 phút, hoặc đi bộ qua cửa khẩu Củng Bắc – Hoành Cầm sang thẳng Ga Cao tốc Chu Hải! Gợi ý 2–3 ngày: Ngày 1 Đại Tam Ba – Nghị Sự Đình – Pháo đài Monte – Tháp Ma Cao; Ngày 2 Làng Taipa – Phố Quan Dã – Bảo tàng Nhà Taipa – Cotai Strip; Ngày 3 Lộ Hoàn (Coloane) ăn bánh trứng gốc & Miếu Ma Các.",
      mapCoordinates: { mapX: 562, mapY: 534, historicalCapitalEra: "Hào Kính Áo · Giao thương Á–Âu thế kỷ XVI", economicCorridor: "Vùng Vịnh Lớn & Lĩnh Nam (粤港澳)" }
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
