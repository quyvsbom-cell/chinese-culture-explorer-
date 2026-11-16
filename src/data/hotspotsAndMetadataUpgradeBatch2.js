// ============================================================================
// BẢO TÀNG SỐ & KIỆT TÁC QUỐC HỌA – TỌA ĐỘ HOTSPOT & TƯ LIỆU HIỆN VẬT (TẬP 2)
// Enriches Paintings #28–#54 via shared window.CCE_APPLY_HOTSPOTS_AND_META.
// Completes 100% coverage: 21/21 museum artifacts + 54/54 masterpieces.
// Zero lazy truncation. Standard Mandarin Pinyin + Han-Viet + Vietnamese.
// ============================================================================

(function () {
  "use strict";

  var PAINTINGS_BATCH2 = {
    "libai-hangyin": {
      material: "Thủy mặc giản bút ('Giảm bút họa') thuần túy trên giấy (81,2 × 30,4 cm)",
      attribution: "Lương Khải (đời Nam Tống, đầu TK XIII) • Bảo tàng Quốc lập Tokyo",
      hotspotAnnotations: [
        { id: "p28-1", x: 52, y: 26, titleVi: "Khuôn Mặt Ngẩng Lên Trời & Nét Bút Tối Giản 'Giảm Bút Pháp'", titleZh: "寥寥十数笔减笔传神", pinyin: "Jiǎnbǐ chuánshén", category: "Thiền họa Nam Tống", detail: "Thiền họa gia Lương Khải lược bỏ gần hết chi tiết rườm rà, chỉ giữ lại đôi mắt khép hờ nhìn lên vầng trăng tưởng tượng với khí phách 'Thi tiên' ngạo nghễ." },
        { id: "p28-2", x: 50, y: 54, titleVi: "Ba Nét Quét Rộng Tạo Hình Áo Bào Bay Ngược Gió", titleZh: "大泼墨衣褶动势", pinyin: "Dàpōmò yīzhě", category: "Bút pháp Phá mực", detail: "Áo choàng rộng được vạch bằng vài nét mực ướt dứt khoát tốc độ cao, tạo ảo giác thi nhân đang bước chậm ngâm thơ giữa khoảng không vô tận." },
        { id: "p28-3", x: 50, y: 78, titleVi: "Hai Mũi Hài Hớ Hênh & Khoảng Lưu Bạch Chiếm 75% Giấy", titleZh: "大面积留白衬孤高", pinyin: "Liúbái gūgāo", category: "Thẩm mỹ Thiền tông", detail: "Không vẽ cây cối hay mặt đất dưới chân; hơn ba phần tư tờ giấy để trắng hoàn toàn nhằm biến hư không thành vũ trụ thơ ca." }
      ]
    },
    "dage-tu": {
      material: "Thủy mặc và đạm sắc khoáng nhẹ trên lụa trục dọc (191,8 × 104,5 cm)",
      attribution: "Mã Viễn (đời Nam Tống) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p29-1", x: 52, y: 28, titleVi: "Bố cục 'Mã Nhất Giác' & Cụm Đỉnh Đá Nhuốm Sương Phủ Phách", titleZh: "马一角斧劈山峰", pinyin: "Mǎ yījiǎo", category: "Thi pháp Nam Tống", detail: "Khác với đỉnh núi choáng ngợp chính giữa thời Bắc Tống, Mã Viễn dồn khối núi về một góc, để khoảng mây mù mờ ảo mở ra không gian thoáng đãng." },
        { id: "p29-2", x: 46, y: 76, titleVi: "Bốn Lão Nông Gõ Nhịp Hát Ca Mừng Được Mùa Dưới Chân Ruộng", titleZh: "乡野农夫踏歌图", pinyin: "Nóngfū tàgē", category: "Nhân sinh Phong tục", detail: "Dưới tiền cảnh tảng đá gồ ghề, các nông phu chân trần tay vung gậy trúc nhịp phách bước đi trong điệu múa Đạp Ca rộn ràng sau mưa thuận gió hòa." },
        { id: "p29-3", x: 64, y: 18, titleVi: "Bài Thơ Khâm Đề Của Tống Ninh Tông Ở Góc Trên Phải", titleZh: "宋宁宗题《踏歌》诗", pinyin: "Sòng Níngzōng tíshī", category: "Cung đình Ngự đề", detail: "Vua Nam Tống Tống Ninh Tông tự tay viết bài thơ thất ngôn tứ tuyệt ngợi ca cảnh thái bình nơi hương dã, chứng minh vị thế Họa viện đỉnh cao của họ Mã." }
      ]
    },
    "quehua-qiuse": {
      material: "Mực nho và màu khoáng lam – nâu thu đạm trên giấy cuộn ngang (28,4 × 90,2 cm)",
      attribution: "Triệu Mạnh Phủ (đời Nguyên, 1295) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p30-1", x: 68, y: 42, titleVi: "Ngọn Hoa Bất Chú Nhọn Hoắt (Trọng Tâm Tưởng Nhớ Cố Hương)", titleZh: "华不注山尖峰象征", pinyin: "Huàbúzhù shān", category: "Phục cổ Đường–Tấn", detail: "Vẽ từ trí nhớ cho người bạn Chu Mật quê gốc Sơn Đông đang sống lưu lạc phương Nam: ngọn Hoa Bất Chú hình tam giác xanh lam nhô vút giữa đầm lầy Tế Nam." },
        { id: "p30-2", x: 26, y: 48, titleVi: "Hòn Tước Sơn Tròn Mịn & Thủ Pháp 'Thư Pháp Nhập Họa'", titleZh: "鹊山青绿与书画同源", pinyin: "Quèshān qīnglǜ", category: "Cách mạng Nguyên triều", detail: "Dùng đường nét Triện–Lệ vẽ thân cây thông khô và bờ đầm lầy, hiện thực hóa câu thơ bất hủ 'Thạch như Phi bạch mộc như Trụ, Tả trúc hoàn ưng Bát phân pháp'." },
        { id: "p30-3", x: 48, y: 66, titleVi: "Khóm Cây Lá Đỏ Mùa Thu & Thuyền Chài Tĩnh Lặng", titleZh: "秋林红叶与渔舟", pinyin: "Qiūlín hóngyè", category: "Màu sắc Cổ điển", detail: "Lá thông xanh đan xen chấm lá thu cam đỏ gợi sắc thái cổ nhã thời Đường, mở màn kỷ nguyên Văn nhân họa triều Nguyên." }
      ]
    },
    "xiushi-shulin": {
      material: "Bút pháp 'Phi bạch' kết hợp Thủy mặc thuần trên giấy cuộn ngang (27,5 × 62,8 cm)",
      attribution: "Triệu Mạnh Phủ (đời Nguyên) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p31-1", x: 52, y: 46, titleVi: "Tảng Đá 'Phi Bạch Pháp' Khô Xước Lộ Thớ Giấy Trắng", titleZh: "飞白法画奇石", pinyin: "Fēibáifǎ", category: "Thư–Họa Hợp nhất", detail: "Triệu Mạnh Phủ cầm cây bút lông ít mực quét nhanh ngang mặt đá, để lại những vệt trắng rỗng tựa chữ 'Phi bạch' thời Hán." },
        { id: "p31-2", x: 38, y: 58, titleVi: "Khóm Trúc Mảnh Dùng Nét Triện–Lệ Đều Đặn Uyển Chuyển", titleZh: "八分法写翠竹", pinyin: "Bāfēnfǎ xiězhú", category: "Văn nhân Khí tiết", detail: "Thân trúc vươn thanh thoát bằng kỹ thuật chuyển bút chữ Triện, lá trúc sắc nhọn như nét bút Bát phân của chữ Lệ." },
        { id: "p31-3", x: 76, y: 36, titleVi: "Bài Thơ Bạt Giải Thích Nguồn Gốc Thư Pháp Trong Hội Họa", titleZh: "赵孟頫“书画同源”题跋", pinyin: "Shūhuà tóngyuán", category: "Mỹ học Kinh điển", detail: "Đoạn thơ tự đề bên phải khắc sâu bản tuyên ngôn mỹ học quan trọng nhất lịch sử hội họa Trung Hoa về sự thống nhất giữa viết chữ và vẽ tranh." }
      ]
    },
    "fuchun-shanju": {
      material: "Thủy mặc thuần túy trên giấy da dâu Tuyên (Phần Vô Dụng Sư: 33 × 636,9 cm; Thặng Sơn Đồ: 31,8 × 51,4 cm)",
      attribution: "Hoàng Công Vọng (đời Nguyên, 1347–1350) • Bảo tàng Cố Cung Đài Bắc & Bảo tàng Chiết Giang",
      hotspotAnnotations: [
        { id: "p32-1", x: 24, y: 45, titleVi: "Mạch Núi Sông Phú Xuân & Nét 'Hoàng Bút Mực Tương Sinh'", titleZh: "披麻长皴与墨分五色", pinyin: "Pīmácūn mòfēn wǔsè", category: "Lan Đình Trong Hội họa", detail: "Hoàng Công Vọng vẽ ngẫu hứng trong suốt 3–4 năm ở tuổi ngoài 80, dùng mực khô–ướt–đậm–nhạt đan xen tạo độ sáng trong tựa âm nhạc cổ cầm dọc 6 mét trường quyển." },
        { id: "p32-2", x: 54, y: 58, titleVi: "Phần 'Thặng Sơn Đồ' Bị Lửa Thiêu Đứt Năm 1650", titleZh: "剩山图焚画劫余", pinyin: "Shèngshāntú", category: "Truyền kỳ Tuẫn Họa", detail: "Nhà sưu tầm Ngô Hồng Dụ trước lúc lâm chung đem bức tranh đốt làm đồ tùy táng (1650); cháu ông giật ra kịp khỏi lò lửa nhưng đầu cuộn đã bị cháy thành 2 mảnh (nay hợp bích ở Chiết Giang và Đài Bắc)." },
        { id: "p32-3", x: 80, y: 32, titleVi: "Hơn 55 Ấn Triện & Bút Phê Của Càn Long (Mâu Thuẫn Bản Thật–Giả)", titleZh: "子明卷与无用师卷真伪公案", pinyin: "Wúyòngshī juàn", category: "Giám định Sử học", detail: "Cuộn 'Vô Dụng Sư' là chân tích còn trọn vẹn nhưng bị Càn Long cho là giả, nhờ đó tránh được nạn viết đè chi chít khắp khoảng trời trống trên tranh." }
      ]
    },
    "dongting-yuyin": {
      material: "Thủy mặc thuần sắc trên giấy trúc trục dọc (146,6 × 58,6 cm)",
      attribution: "Ngô Trấn / Mai Hoa Đạo Nhân (đời Nguyên, 1341) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p33-1", x: 52, y: 32, titleVi: "Ngọn Núi Sương Hồ Động Đình Vẽ Bằng Bút Ướt 'Thấp Bút Pháp'", titleZh: "湿笔重墨披麻山色", pinyin: "Shībǐ zhòngmò", category: "Kỹ pháp Ngô Trấn", detail: "Khác với vẻ khô ráo của Nghê Toản, Ngô Trấn nạp no mực đen ướt vào đầu bút lông tròn ('Trung phong') tạo dải núi mềm ẩm đậm chất giang hồ ẩn sĩ." },
        { id: "p33-2", x: 42, y: 74, titleVi: "Thuyền Câu Cá Lẻ Loi Trong Đầm Sậy Chuyển Mùa", titleZh: "一叶渔舟芦苇岸", pinyin: "Yīyè yúzhōu", category: "Biểu tượng Ngư Phủ", detail: "Chiếc thuyền gỗ nhỏ với ông lão câu cá thả cần giữa khoảng nước trống trải biểu trưng khát vọng thoát ly quan trường thời Mông Cổ." },
        { id: "p33-3", x: 76, y: 20, titleVi: "Bài Từ *Ngư Phủ* Viết Bằng Thảo Thư Nối Liền Bố Cục", titleZh: "渔父词行草题咏", pinyin: "Yúfǔcí", category: "Thi–Thư–Họa Hợp nhất", detail: "Bài từ tự đề bên góc trên giúp văn tự trực tiếp tham gia cân bằng trọng lượng thị giác với khối núi nặng bên trái." }
      ]
    },
    "liujunzi-tu": {
      material: "Thủy mặc thuần khô trên giấy trúc khổ đứng (61,9 × 33,3 cm, 1345)",
      attribution: "Nghê Toản (đời Nguyên, 1345) • Bảo tàng Thượng Hải",
      hotspotAnnotations: [
        { id: "p34-1", x: 48, y: 66, titleVi: "Sáu Loài Cây Quân Tử Đứng Vững Trên Gò Đất Thấp", titleZh: "松柏樟楠槐榆六树", pinyin: "Liù jūnzi shù", category: "Ẩn dụ Nhân cách", detail: "Gồm Tùng, Bách, Chương, Nam, Hòe, Du (họ nhà Du/Mục) vươn thẳng đứng song song nhau — Hoàng Công Vọng đặt tên nhóm cây này là 'Lục Quân Tử' tượng trưng phẩm tiết quân tử." },
        { id: "p34-2", x: 50, y: 22, titleVi: "Bố cục 'Nhất Hà Lưỡng Ngạn' & Nét 'Chiết Đới Thuẫn'", titleZh: "折带皴与一河两岸", pinyin: "Zhédaìcūn", category: "Tối giản Kinh điển", detail: "Mặt nước Thái Hồ để trắng hoàn toàn (không vẽ một gợn sóng), chia đôi bờ gần và dãy núi xa thấp vẽ bằng nét bút gập góc như dải thắt lưng gấp nếp ('Chiết đới thuẫn')." },
        { id: "p34-3", x: 64, y: 18, titleVi: "Tuyên ngôn Tuyệt Đối: 'Quý Ở Sự Dạt Dào Khí Vận Tiêu Sái'", titleZh: "倪瓒逸气说题诗", pinyin: "Yìqì shuō", category: "Mỹ học 'Tiết Bút Tích Mặc'", detail: "Quý mực như vàng; trong tranh tuyệt nhiên không một bóng người, không đình tạ hoa mỹ — đỉnh cao của cảnh giới 'Tĩnh – Lãnh – Tiêu sơ'." }
      ]
    },
    "qingbian-yinju": {
      material: "Thủy mặc thuần trên giấy khổ hẹp dựng đứng (140,6 × 42,2 cm, 1366)",
      attribution: "Vương Mông (Nguyên mạt Minh sơ, 1366) • Bảo tàng Thượng Hải",
      hotspotAnnotations: [
        { id: "p35-1", x: 50, y: 34, titleVi: "Mê Cung Đá Cuộn Bút Pháp 'Ngưu Mao Thuẫn' & 'Giải Sách Thuẫn'", titleZh: "牛毛皴繁密山体", pinyin: "Niúmáocūn", category: "Đỉnh cao Mật Thể", detail: "Đối lập hoàn toàn với sự trống vắng của Nghê Toản, Vương Mông phủ kín bề mặt giấy bằng hàng vạn nét uốn xoắn như lông bò rối ('Ngưu mao thuẫn') tạo cảm giác núi non đang chuyển động xoáy ốc." },
        { id: "p35-2", x: 42, y: 74, titleVi: "Ngôi Nhà Ẩn Sĩ Nhỏ Bé Lọt Thỏm Giữa Khe Núi Chật Hẹp", titleZh: "山谷隐居读书人", pinyin: "Shāngǔ yǐnjū", category: "Tâm trạng Thời Loạn", detail: "Hoàn thành năm 1366 giữa lúc chiến tranh lật đổ nhà Nguyên khốc liệt ở Giang Nam, ẩn sĩ đọc sách bên khe nước vừa khao khát bình yên vừa cảm thấy bất an trước biến động." },
        { id: "p35-3", x: 64, y: 48, titleVi: "Dải Sương Chéo & Ánh Sáng Nội Tại Từ Đường Mực Trắng", titleZh: "气脉蜿蜒通透感", pinyin: "Qìmài wānyán", category: "Cấu trúc Năng lượng", detail: "Đổng Kỳ Xương đời Minh ca ngợi bức tranh là 'Thiên hạ đệ nhất Vương Thúc Minh' nhờ cách chừa khe sáng hẹp xuyên qua khối mực đen kịt." }
      ]
    },
    "lushan-gao": {
      material: "Thủy mặc và đạm sắc khoáng nhẹ trên giấy trục đứng khổng lồ (193,8 × 98,1 cm, 1467)",
      attribution: "Thẩm Chu (Minh triều, Ngô Môn Phái, 1467) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p36-1", x: 50, y: 30, titleVi: "Đỉnh Lư Sơn Ngút Trời Chúc Thọ Thầy Trần Khoan Tuổi 70", titleZh: "祝寿尊师高山仰止", pinyin: "Gāoshān yǎngzhǐ", category: "Đạo Tôn Sư Trọng Đạo", detail: "Thẩm Chu vẽ ở tuổi 41 mừng thượng thọ 70 người thầy đáng kính Trần Khoan (quê gốc vùng Lư Sơn), dùng hình tượng núi cao chót vót ẩn dụ ân đức thầy tựa núi Lư." },
        { id: "p36-2", x: 52, y: 54, titleVi: "Dòng Thác Trắng Đổ Thẳng & Lối Vẽ Chồng Nét Vương Mông", titleZh: "悬瀑白练师法王蒙", pinyin: "Xuánpù báiliàn", category: "Kế thừa Nguyên Tứ Gia", detail: "Kết hợp nét Giải sách thuẫn cuộn xoáy của Vương Mông với nét mực đậm chắc khỏe ('Thẩm Thạch Điền') mở đường cho Ngô Môn Tứ Gia Tô Châu." },
        { id: "p36-3", x: 46, y: 84, titleVi: "Chân Dung Trần Khoan Đứng Đón Suối Ngước Nhìn Đỉnh Núi", titleZh: "隐士立石仰望图", pinyin: "Yǐnshì yǎngwàng", category: "Điểm Nhãn Nhân văn", detail: "Dưới chân đá rìa suối, hình bóng bậc trưởng giả chống gậy nhìn dòng chảy tạo tỷ lệ hoành tráng cho toàn bộ gần 2 mét tranh lụa." }
      ]
    },
    "gumu-youquan": {
      material: "Thủy mặc thuần sắc trên giấy trắng trúc mịn (154,5 × 47,8 cm)",
      attribution: "Văn Trưng Minh (Minh triều, Ngô Môn Phái) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p37-1", x: 44, y: 46, titleVi: "Cây Bách Cổ Thụ Uốn Khúc Lộ Mắt Khô Cằn", titleZh: "古柏苍枝铁画银钩", pinyin: "Gǔbǎi cāngzhī", category: "Tinh tế Ngô Môn", detail: "Khác với sự gồ ghề phóng đại của thầy Thẩm Chu, Văn Trưng Minh chải chuốt từng vòng vỏ cây xoắn ốc thanh tao tựa nét Tiểu Khải." },
        { id: "p37-2", x: 64, y: 74, titleVi: "Suối Lạnh Mỏng Manh Róc Rách Qua Đá Rêu Xám Nhạt", titleZh: "幽泉细流淡墨渲染", pinyin: "Yōuquán xìliú", category: "Âm sắc Văn nhân", detail: "Nước suối và sương lạnh không đổ mực đen gắt mà vờn mực tro rất nhạt gợi khí chất thanh liêm không màng danh lợi quan trường của Văn Trưng Minh." },
        { id: "p37-3", x: 32, y: 20, titleVi: "Lạc khoản Hành Khải Thanh Tú Đóng Triện Văn Trưng Minh", titleZh: "文徵明小楷题识", pinyin: "Wén Zhēngmíng tíshī", category: "Thư Họa Song Tuyệt", detail: "Chữ đề góc trên kết hợp hài hòa với không gian dọc hẹp, kéo dài trục thẳng đứng của cây tùng bách." }
      ]
    },
    "shanlu-songsheng": {
      material: "Thủy mặc kết hợp đạm sắc thanh nhạt trên lụa (194,5 × 102,8 cm)",
      attribution: "Đường Dần / Đường Bá Hổ (Minh triều, c. 1516) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p38-1", x: 54, y: 38, titleVi: "Thủn Pháp Phủ Phách Dung Hợp Mềm Mại 'Đại–Tiểu Phủ Phách'", titleZh: "南北合璧斧劈皴", pinyin: "Fǔpīcūn rónghé", category: "Bậc thầy Dung hợp", detail: "Đường Dần kết hợp tài tình nét rìu chém sắc sảo của Lý Đường (Họa viện Nam Tống) với sự bay bổng thi vị của Văn nhân Tô Châu trên mặt lụa bóng." },
        { id: "p38-2", x: 38, y: 74, titleVi: "Kẻ Sĩ Đứng Trên Cầu Gỗ Nghe Tiếng Gió Thông & Thác Nước", titleZh: "策杖聆听松风泉响", pinyin: "Língtīng sōngfēng", category: "Chủ đề Tâm cảnh", detail: "Chú đồng tử ôm đàn đứng sau bậc sĩ phu ngoái nghe gió reo qua ba gốc tùng lớn — hình ảnh ẩn dụ chính cuộc đời Đường Bá Hổ lỡ dở khoa trường." },
        { id: "p38-3", x: 26, y: 24, titleVi: "Bài Thơ Thất Ngôn Tứ Tuyệt Tự Họa Tâm Sự Giang Nam Tài Tử", titleZh: "唐伯虎狂放行书题诗", pinyin: "Táng Bóhǔ tíshī", category: "Thi Ca & Cuộc đời", detail: "Bốn câu thơ trên vách trắng ghi cảm xúc 'Nữ hoa tùng trướng gió lùa qua cầu gỗ / Sớm chiều lòng người vẫn nghe tiếng thông reo'." }
      ]
    },
    "hangong-chunxiao": {
      material: "Màu khoáng chất Công bút Thanh Lục lộng lẫy trên lụa quyển dài 5,74 mét",
      attribution: "Cừu Anh (Minh triều, c. 1542) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p39-1", x: 46, y: 50, titleVi: "Cảnh 'Mao Diên Thọ Vẽ Chân Dung Vương Chiêu Quân'", titleZh: "毛延寿写照王昭君", pinyin: "Máo Yánshòu", category: "Điển cố Lịch sử Hán", detail: "Cảnh nổi tiếng nhất toàn cuộn dài gần 6 mét: họa sĩ cung đình đang cầm bút vẽ chân dung mỹ nhân bên màn trướng son trước khi Chiêu Quân lên đường hòa thân Hung Nô." },
        { id: "p39-2", x: 24, y: 48, titleVi: "Kiến Trúc Cung Điện 'Giới Họa' Kèm Vườn Đào – Khổng Tước", titleZh: "宫阙界画极微细节", pinyin: "Gōngquè jièhuà", category: "Tư liệu Đời sống Minh", detail: "Vẽ tới 115 nhân vật (chủ yếu cung nữ) chơi đàn cổ cầm, đánh cờ vây, thêu thùa, đá cầu — mô tả lối sống xa hoa thực chất của giới thượng lưu Giang Nam triều Minh." },
        { id: "p39-3", x: 78, y: 52, titleVi: "Kỹ thuật 'Tam Phàn Cửu Nhiễm' Màu Đỏ Son – Vàng Kim – Xanh Ngọc", titleZh: "重彩宫廷审美极致", pinyin: "Zhòngcǎi shěnměi", category: "Mỹ thuật Công bút Đỉnh cao", detail: "Dù xuất thân thợ sơn sửa kiến trúc không đỗ đạt khoa bảng, Cừu Anh sánh vai 'Minh Tứ Gia' nhờ độ tinh xảo tuyệt đối của từng nan quạt, sợi tơ áo gấm." }
      ]
    },
    "qiuxing-bajing": {
      material: "Thủy mặc kết hợp sắc nâu thu trên giấy quyển sách 8 tờ (Mỗi trang 53,8 × 31,7 cm)",
      attribution: "Đổng Kỳ Xương (Minh mạt, 1620) • Bảo tàng Thượng Hải",
      hotspotAnnotations: [
        { id: "p40-1", x: 50, y: 45, titleVi: "Cấu Trúc 'Thế Đá Đổi Chiều' (Nghịch Lý Không Gian Hiện Đại)", titleZh: "几何构图势态扭转", pinyin: "Gòutú niǔzhuǎn", category: "Tiền Trừu tượng", detail: "Đổng Kỳ Xương chủ ý bỏ qua tỷ lệ vật lý, sắp xếp các khối núi phẳng nghiêng ngả tựa mảng khối lập phương — tiên phong cho nghệ thuật hiện đại phương Tây trước Cézanne hàng trăm năm." },
        { id: "p40-2", x: 30, y: 66, titleVi: "Kỹ pháp 'Mực Chia Ngũ Sắc' & 'Nam Tông – Bắc Tông Luận'", titleZh: "南北宗论实践样本", pinyin: "Nán-Běizōng lùn", category: "Cách mạng Lý luận Minh", detail: "Mỗi bức trong tập sách 8 trang là một bài 'tập biến thể' mô phỏng Lý Thành, Nghê Toản, Đổng Nguyên nhưng tái tạo hoàn toàn thành cấu trúc mực – giấy thuần túy." },
        { id: "p40-3", x: 72, y: 24, titleVi: "Các Đoạn Tự Bình Phẩm & Thơ Đề Thời Minh Thanh", titleZh: "董其昌书法题咏", pinyin: "Dǒng Qíchāng tíyǒng", category: "Học thuyết Chính thống", detail: "Tạo ảnh hưởng sâu rộng nhất lên hội họa Thanh sơ (Tứ Vương) qua học thuyết đề cao Văn nhân 'Nam Tông' và hạ thấp họa công cung đình 'Bắc Tông'." }
      ]
    },
    "mo-putao": {
      material: "Thủy mặc Đại Tả Ý thấm ướt trên giấy Tuyên khổ đứng (165,7 × 64,5 cm)",
      attribution: "Từ Vị / Thanh Đằng Đạo Sĩ (Minh triều, TK XVI) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p41-1", x: 46, y: 46, titleVi: "Nét Phá Mực Phóng Khoáng Tả Chùm Nho Tan Loang Như Nước Mắt", titleZh: "泼墨写意明珠葡萄", pinyin: "Pōmò xiěyì", category: "Khởi tổ Đại Tả Ý", detail: "Từ Vị vẩy cả ngọn bút no nước đầy mực xuống giấy trắng tạo mảng lá nho loang lổ ướt rượt, dùng ngón tay hoặc chóp bút vạch vài cuống nho quằn quại bằng nét Cuồng Thảo." },
        { id: "p41-2", x: 64, y: 30, titleVi: "Khí Thế Thân Nho Đứt Quãng & Chuyển Động Cuồng Nộ", titleZh: "藤蔓狂草笔势", pinyin: "Téngmàn cǎoshū", category: "Biểu hiện Chủ nghĩa", detail: "Biến tĩnh vật hoa quả thành bức chân dung tự sự đầy bi phẫn của một thiên tài văn học bị cầm tù và gạt bỏ bên lề thời đại." },
        { id: "p41-3", x: 32, y: 20, titleVi: "Bài Thơ Bạt 'Bút Để Minh Châu Vô Xứ Mại': Tiếng Khóc Kẻ Sĩ", titleZh: "“笔底明珠无处卖”自题", pinyin: "Míngzhū wúchù mài", category: "Thi Ca Bất Hủ", detail: "Hai câu tuyệt mệnh nổi tiếng góc trên trái: 'Nửa đời rơi lệ giữa lều tranh / Ngọc châu dưới bút chẳng nơi nào bán — đành ném vào giữa đám dây leo hoang dại'." }
      ]
    },
    "huishan-chahui": {
      material: "Mực nho và đạm sắc xanh nhẹ trên giấy cuộn ngang (21,9 × 67 cm, 1518)",
      attribution: "Văn Trưng Minh (Minh triều, năm Chính Đức 13 – 1518) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p42-1", x: 52, y: 54, titleVi: "Đỉnh Ấm Đun Nước Pha Trà Suối Nhị Tuyền Đồi Huệ Sơn", titleZh: "烹泉品茗茶会雅集", pinyin: "Pēngquán pǐnmíng", category: "Trà Đạo Văn Nhân", detail: "Khắc họa buổi nhã tập mùa xuân năm 1518 bên 'Thiên hạ đệ nhị tuyền' tại Vô Tích: Văn Trưng Minh, Thang Trân, Thái Vũ đàm đạo văn chương trong khi tiểu đồng nhóm bếp đun nước trúc." },
        { id: "p42-2", x: 26, y: 42, titleVi: "Lối Sắp Xếp Tùng Bách Vây Khép Tạo Không Gian Nhã Tập", titleZh: "松影亭泉恬静布局", pinyin: "Sōngyǐng tíngquán", category: "Mỹ học Ngô Môn", detail: "Hai cụm cây tùng rợp bóng ôm lấy giếng suối vuông khắc đá, tạo sự tĩnh tại sâu lắng giữa cuộc đời văn nhân Tô Châu." },
        { id: "p42-3", x: 78, y: 46, titleVi: "Bài Tự Ký Bằng Tiểu Khải Kèm Thi Tập Lưu Bút Đồng Đạo", titleZh: "诗画合璧茶事纪实", pinyin: "Cháshì jìshí", category: "Tư liệu Trà Sử Minh", detail: "Phần hậu đề gồm loạt bài thơ xướng họa của các nhân vật có mặt, xác chứng nét sinh hoạt thưởng trà tinh hoa của giới trí thức Giang Nam đầu thế kỷ XVI." }
      ]
    },
    "luomu-qiuse": {
      material: "Thủy mặc thuần sắc trên giấy trúc trục dọc (103,5 × 49,3 cm)",
      attribution: "Vương Thời Mẫn (Minh mạt Thanh sơ, Tổ Tứ Vương) • Bảo tàng Thượng Hải",
      hotspotAnnotations: [
        { id: "p43-1", x: 50, y: 36, titleVi: "Kỹ pháp Đỉnh Hoàng Công Vọng: Chồng Nét Đậm – Nhạt Nhịp Nhàng", titleZh: "拟大痴笔意山体", pinyin: "Nǐ Dàchī bǐyì", category: "Phái Chính Thống Tứ Vương", detail: "Là học trò chân truyền của Đổng Kỳ Xương, Vương Thời Mẫn hệ thống hóa phương pháp 'Lâm mô cổ nhân' (phỏng Hoàng Công Vọng) bằng đường nét Phi ma thuẫn kỷ luật và mực chấm dày dặn." },
        { id: "p43-2", x: 42, y: 70, titleVi: "Khóm Cây Trút Lá (Lạc Mộc) & Thảo Đình Ven Đầm", titleZh: "落木疏林秋亭图", pinyin: "Luòmù shūlín", category: "Chủ đề Thu Đạm", detail: "Rừng cây lá rụng và thảo đường mái tranh giữ tinh thần an nhiên giữa biến thiên Minh – Thanh." },
        { id: "p43-3", x: 26, y: 20, titleVi: "Ấn Triện Vương Thời Mẫn & Chuỗi Bút Tích Tứ Vương", titleZh: "王时敏自题诗印", pinyin: "Wáng Shímǐn", category: "Lưu truyền Kinh điển", detail: "Tiểu sử nghệ thuật đánh dấu bước chuyển giao giữa Ngô Môn – Hoa Đình cuối Minh và hệ phái cung đình Tứ Vương triều Thanh." }
      ]
    },
    "kangxi-nanxun": {
      material: "Khoáng sắc rực rỡ, mực và vàng kim trên lụa 12 đại quyển (Mỗi cuộn dài 14–26 mét)",
      attribution: "Vương Huy chủ biên (1691–1698) • Bảo tàng Cố Cung Bắc Kinh, Musée Guimet, The Met",
      hotspotAnnotations: [
        { id: "p44-1", x: 48, y: 50, titleVi: "Toàn Cảnh Chuyến Nam Tuần Năm 1689 Từ Kinh Thành Đến Giang Nam", titleZh: "康熙南巡实录长卷", pinyin: "Kāngxī nánxún", category: "Bức Tranh Phóng Sự Hoàng Gia", detail: "Ghi lại hành trình kiểm tra đê Hoàng Hà và tuần du Nam Kinh – Tô Châu – Hàng Châu của Khang Hy năm 1689 với hàng chục nghìn quân dân, thuyền ngự và cửa hàng buôn bán." },
        { id: "p44-2", x: 26, y: 44, titleVi: "Hội Tụ Hai Truyền Thống Bắc–Nam & Phối Cảnh Tây Dương Sơ Khai", titleZh: "集大成山水与界画人物", pinyin: "Jídàchéng shānshuǐ", category: "Tài Ba Vương Huy", detail: "Vương Huy huy động các họa công vẽ nhân vật cung đình kết hợp kỹ thuật sơn thủy hợp bích Đường–Tống–Nguyên, tạo kiệt tác hành chính – lịch sử đồ sộ bậc nhất Thanh triều." },
        { id: "p44-3", x: 78, y: 54, titleVi: "Quyển VII – Đô Thị Tô Châu & Đường Phố Thương Mại Thế Kỷ XVII", titleZh: "苏州闾门繁华街景", pinyin: "Sūzhōu lǘmén", category: "Kinh tế Thanh Sơ", detail: "Tư liệu hình ảnh vô giá về thị trường tơ lụa, hiệu thuốc, thương thuyền Giang Nam trong thời kỳ Khang–Càn thịnh thế." }
      ]
    },
    "wanhe-songfeng-qing": {
      material: "Thủy mặc thuần kết hợp đạm sắc nâu nhẹ trên giấy (105,8 × 52,4 cm)",
      attribution: "Vương Nguyên Kỳ (đời Khang Hy, Thanh triều) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p45-1", x: 50, y: 40, titleVi: "Cấu Trúc 'Long Mạch' Vặn Xoắn Toàn Bức Theo Năng Lượng Khí", titleZh: "龙脉开合气势架构", pinyin: "Lóngmài kāihé", category: "Triết lý Bố cục Vương Nguyên Kỳ", detail: "Khác với phong cảnh tĩnh, Vương Nguyên Kỳ xoay chuyển các khối núi như xương sống rồng chuyển động liên hoàn theo nguyên tắc Khí–Mạch Phong thủy học." },
        { id: "p45-2", x: 46, y: 66, titleVi: "Kỹ pháp 'Càn Bút Thu Cốt, Mực Nhuận Chiêu Thần' Chồng 7 Lớp Mực", titleZh: "干笔积墨千锤百炼", pinyin: "Gānbǐ jīmò", category: "Tích Mặc Đỉnh Cao", detail: "Chồng đè hàng chục lớp nét khô từ nhạt sang đậm rồi mới chấm mực đen tuyền ở kẽ khe đá tạo bề mặt đá nặng chắc phi thường." },
        { id: "p45-3", x: 74, y: 24, titleVi: "Tự Đề Nêu Rõ Lý Thuyết 'Tứ Vương' Cải Tạo Từ Nguyên Tứ Gia", titleZh: "娄东派论画跋语", pinyin: "Lóudōngpài", category: "Lý luận Hội họa Thanh", detail: "Đại diện đỉnh cao cho trường phái Lâu Đông, mở đường cho tư duy kết cấu trừu tượng sau này." }
      ]
    },
    "huaiyang-jieqiu": {
      material: "Thủy mặc và sắc cam – lam thu nhẹ trên giấy (89 × 57 cm, 1702)",
      attribution: "Thạch Đào / Khổ Qua Hòa Thượng (Thanh sơ, 1702) • Bảo tàng Nam Kinh",
      hotspotAnnotations: [
        { id: "p46-1", x: 48, y: 48, titleVi: "Thực Chứng 'Nhất Họa Luận' – Nét Bút Khởi Nguyên Vũ Trụ", titleZh: "一画论自由生发", pinyin: "Yīhuà lùn", category: "Cách mạng Phản Chính thống", detail: "Thạch Đào bác bỏ rập khuôn 'mô phỏng cổ nhân', tuyên bố 'Bút mặc đương tùy thời đại' — dùng nét cọ phóng khoáng phả trực tiếp cảm xúc đứng trước cảnh sông Hoài mùa thu." },
        { id: "p46-2", x: 54, y: 66, titleVi: "Khóm Lau Sậy Nhuộm Sương Đỏ & Bờ Đê Mùa Nước Trong", titleZh: "苇岸霜红浅绛设色", pinyin: "Wěi'àn shuānghóng", category: "Sắc Màu Tươi Sáng", detail: "Thay lối dùng màu cũ kỹ, chấm phá vài nét son cam rực trên lau sậy bờ đê Hoài Dương khiến bức tranh thu trở nên trong trẻo và hiện đại lạ thường." },
        { id: "p46-3", x: 26, y: 26, titleVi: "Bài Tự Đề Nêu Khẩu Hiệu 'Ta Dùng Pháp Của Riêng Ta'", titleZh: "“我用我法”石涛狂题", pinyin: "Wǒ yòng wǒ fǎ", category: "Tuyên ngôn Cá tính", detail: "Hậu duệ hoàng tộc nhà Minh đi tu này trở thành ngọn cờ tiên phong của chủ nghĩa hiện đại trong mỹ thuật Trung Quốc." }
      ]
    },
    "kongque-zhushi": {
      material: "Thủy mặc Tả ý cực giản trên giấy Tuyên khổ lớn (153,5 × 79 cm)",
      attribution: "Bát Đại Sơn Nhân / Chu Đáp (Thanh sơ) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p47-1", x: 42, y: 64, titleVi: "Đôi Chim Khổng Tước Đứng Độc Chân — Con Mắt Trắng Dã Nhìn Đời", titleZh: "白眼向人孤傲孔雀", pinyin: "Báiyǎn xiàngrén", category: "Biểu Tượng Phẫn Uất", detail: "Là hoàng tôn triều Minh ẩn danh xuất gia, Chu Đáp vẽ đôi công đứng co ro trên phiến đá trơ trọi với tròng mắt trắng dã khinh bạc nhìn thẳng thừng vào sự suy tàn quyền lực ngoại tộc." },
        { id: "p47-2", x: 64, y: 40, titleVi: "Lông Đuôi 3 Cọng Lỏng Lẻo Châm Biếm Mũ Quan Mãn Thanh", titleZh: "三根翎毛讽刺清廷", pinyin: "Sāngēn língmáo", category: "Mật Mã Chính trị Kín", detail: "Ba sợi lông công thưa thớt rủ buồn ám chỉ chiếc mũ 'Hoa linh tam nhãn' của đại thần nhà Thanh, biến họa điểu truyền thống thành bản cáo trạng thời thế." },
        { id: "p47-3", x: 28, y: 24, titleVi: "Chữ Ký Ký Hiệu Giống Chữ 'Khóc' & 'Cười' (Bát Đại Sơn Nhân)", titleZh: "八大山人哭之笑之款", pinyin: "Kūzhī xiàozhī", category: "Mật ngữ Văn tự", detail: "Cách viết liền bốn chữ 'Bát Đại Sơn Nhân' có hình dạng như chữ 哭之 (khóc vậy) hoặc 笑之 (cười vậy) — kiệt tác ẩn ngữ của nghệ thuật Đông Á." }
      ]
    },
    "zhushi-tu": {
      material: "Thủy mặc thuần chất với nét chữ Lệ–Khải trên giấy (162,5 × 84,5 cm)",
      attribution: "Trịnh Bản Kiều (Dương Châu Bát Quái, đời Càn Long) • Bảo tàng Cố Cung Bắc Kinh",
      hotspotAnnotations: [
        { id: "p48-1", x: 46, y: 50, titleVi: "Khóm Trúc Mọc Khe Đá Khổ Hạnh ('Giảo Định Thanh Sơn Bất Phóng Tùng')", titleZh: "石隙翠竹刚劲风骨", pinyin: "Shíxì cuìzhú", category: "Khí Tiết Dương Châu", detail: "Thân trúc vươn thẳng tắp từ kẽ đá đứng cheo leo, nét lá trúc sắc gọn như lưỡi dao phả ra từ bút pháp thư pháp 'Lục phân bán thư' độc sáng." },
        { id: "p48-2", x: 62, y: 64, titleVi: "Khối Đá Vuông Vức Dùng Nét Mực Chuyển Bút Gãy Gọn", titleZh: "方折瘦石骨力洞达", pinyin: "Fāngzhé shòushí", category: "Tương phản Hình khối", detail: "Tảng đá không vẽ theo lối vờn khối Tống–Nguyên mà cắt phẳng bằng đường viền sắc mạnh làm bệ phóng cho những đốt trúc cứng cáp." },
        { id: "p48-3", x: 28, y: 26, titleVi: "Chùm Thơ Lục Phân Bán Thư 'Trúc Thạch' Dọc Khung Trái", titleZh: "郑板桥“六分半书”题诗", pinyin: "Liùfēn bànshū", category: "Thư–Họa–Thi Tam Tuyệt", detail: "Lối chữ pha trộn giữa Lệ thư, Khải thư và Hành thư xô lệch đầy nhạc điệu ('Loạn thạch phô nhai'), bày tỏ tấm lòng quan thanh liêm lo cho dân nghèo." }
      ]
    },
    "moxia-tu": {
      material: "Thủy mặc Đại Tả Ý trên giấy Tuyên sống thấm mực (102 × 34,5 cm)",
      attribution: "Tề Bạch Thạch (TK XX) • Bảo tàng Mỹ thuật Trung Quốc, Bắc Kinh",
      hotspotAnnotations: [
        { id: "p49-1", x: 52, y: 46, titleVi: "Vỏ Tôm Trong Suốt Như Kính Bằng Kỹ thuật 'Đạm Mực Giao Đậm'", titleZh: "半透明虾壳墨韵", pinyin: "Tòumíng xiāké", category: "Đỉnh cao Hiện đại", detail: "Chỉ qua vài nét bút ngang đầy nước nhạt kết hợp một chấm mực đen đậm ở đầu tôm, Tề Bạch Thạch tả chuẩn xác vỏ tôm kitin trong suốt ánh nước ở tuổi ngoài 80." },
        { id: "p49-2", x: 35, y: 30, titleVi: "Đôi Râu Tôm Dài Đàn Hồi Vươn Chéo Cắt Không Gian Trắng", titleZh: "灵动长须飞驰水间", pinyin: "Língdòng chángxū", category: "Tốc độ & Lực Bút", detail: "Sợi râu dài mảnh mà dẻo dai vươn ra tạo cảm giác mặt nước sống động dù bức tranh không hề vẽ một gợn sóng nào." },
        { id: "p49-3", x: 24, y: 74, titleVi: "Lạc khoản Triện–Hành & Triện Đá Đỏ Khắc Bằng Đao Gỗ", titleZh: "齐白石印章题款", pinyin: "Qí Báishí yìnzhāng", category: "Thi Thư Họa Ấn Toàn Tài", detail: "Chữ viết rắn rỏi đậm chất Bắc Bi kết hợp dấu triện đá Chu sa tự khắc bằng kỹ thuật 'Đơn đao trực nhập' tạo điểm đỏ thắp sáng bức thủy mặc." }
      ]
    },
    "benma-tu": {
      material: "Thủy mặc phá cách kết hợp giải phẫu học Phương Tây trên giấy (130,1 × 62,6 cm, 1941)",
      attribution: "Từ Bi Hồng (1941, Thời kỳ Kháng chiến) • Nhà tưởng niệm Từ Bi Hồng, Bắc Kinh",
      hotspotAnnotations: [
        { id: "p50-1", x: 50, y: 42, titleVi: "Cơ Bắp & Xương Ngực Ngựa Chiến Theo Chuẩn Giải Phẫu Paris", titleZh: "中西合璧马体解剖", pinyin: "Zhōng-Xī hébì", category: "Cách mạng Hiện đại", detail: "Từ Bi Hồng kết hợp kiến thức giải phẫu khối sáng–tối học tại Trường Mỹ thuật Paris với tốc độ vung bút lông Trung Hoa tạo con tuấn mã phi nước đại đầy gân guốc." },
        { id: "p50-2", x: 34, y: 28, titleVi: "Bờm Ngựa & Đuôi Dài Bằng Bút Khô 'Tiêu Mặc Phi Bạch'", titleZh: "焦墨飞白狂鬃尾", pinyin: "Jiāomò fēibái", category: "Khí phách Dân tộc", detail: "Bờm và đuôi ngựa quét bằng ngọn bút đại tự chẻ tòe mực đen kịt bay tạt về sau trước gió bão lịch sử năm 1941." },
        { id: "p50-3", x: 76, y: 26, titleVi: "Bài Tự Đề Bi Hùng Thời Chiến Tranh Vệ Quốc (1941)", titleZh: "1941年悲壮抗战题款", pinyin: "Kàngzhàn tíkuǎn", category: "Lịch sử Mỹ thuật TK XX", detail: "Ghi hoàn cảnh vẽ ngay khi nghe tin thất thủ Trường Sa lần hai, mượn hình tượng chiến mã không yên cương kêu vang giữa đồng hoang để cổ vũ tinh thần quật cường." }
      ]
    },
    "lushan-tu-daqian": {
      material: "Kỹ thuật 'Phát Mặc Phóng Sắc' (Splash-Ink-and-Color) trên lụa rộng gần 10 mét (178,5 × 998,5 cm, 1981–1983)",
      attribution: "Trương Đại Thiên (1983, kiệt tác cuối đời) • Bảo tàng Cố Cung Đài Bắc",
      hotspotAnnotations: [
        { id: "p51-1", x: 46, y: 48, titleVi: "Kỹ thuật 'Phát Mặc Phóng Thái' Tráng Lệ Đổ Mực & Thanh Lục", titleZh: "泼墨泼彩交融山岚", pinyin: "Pōmò pōcǎi", category: "Cách tân Cuối Đời", detail: "Khi thị lực suy giảm ở tuổi 84, Trương Đại Thiên đổ trực tiếp chậu mực loãng và sắc xanh ngọc Thạch thanh – Thạch lục lên tấm lụa khổng lồ để màu tự loang hòa trước khi dùng bút tỉa lại đỉnh đá." },
        { id: "p51-2", x: 24, y: 58, titleVi: "Dải Mây Trắng Phủ Ngang Sườn Lư Sơn Từ Trí Nhớ", titleZh: "云海迷蒙意象庐山", pinyin: "Yúnhǎi Lúshān", category: "Nghịch lý Tưởng tượng", detail: "Kỳ lạ ở chỗ suốt đời Trương Đại Thiên chưa từng leo lên Lư Sơn thực tế — ông vẽ bằng ký ức tinh thần từ hàng nghìn kiệt tác cổ xưa hòa với trường phái Biểu hiện Trừu tượng." },
        { id: "p51-3", x: 78, y: 38, titleVi: "Chùa Cổ Đáy Hẻm Núi Trong Điểm Tĩnh Truyền Thống", titleZh: "细笔古寺点景", pinyin: "Xìbǐ gǔsì", category: "Giao điểm Đông–Tây", detail: "Giữa biển màu khoáng trừu tượng cuồn cuộn vẫn ẩn hiện ngôi chùa cổ nét nhỏ tinh xảo — neo giữ linh hồn sơn thủy Trung Hoa." }
      ]
    },
    "shujiang-bishitu": {
      material: "Kỹ pháp 'Tích Mặc – Túc Mặc' (Chồng Hàng Chục Lớp Mực) trên giấy (108,5 × 48,6 cm)",
      attribution: "Hoàng Tân Hồng (đầu–giữa TK XX) • Bảo tàng Mỹ thuật Trung Quốc, Bắc Kinh",
      hotspotAnnotations: [
        { id: "p52-1", x: 52, y: 42, titleVi: "Kỳ Tích 'Hắc Trung Hựu Hắc' – Tối Đen Mà Vẫn Thấu Sáng", titleZh: "黑密厚重积墨法", pinyin: "Hēimì hòuzhòng", category: "Thánh Mực Hiện đại", detail: "Hoàng Tân Hồng chồng tới 7–10 lớp mực (Nùng – Đạm – Túc – Phá – Tiêu) làm vách núi Ba Thục đen thẫm nặng trịch nhưng bên trong vẫn giữ hàng nghìn khe trắng thở ánh sáng ('Ám trung thấu minh')." },
        { id: "p52-2", x: 38, y: 66, titleVi: "Cảnh Đêm Đầm Lầy & Đường Viền 'Ngũ Bút Thất Mặc'", titleZh: "五笔七墨夜山感", pinyin: "Wǔbǐ qīmò", category: "Học thuật Mỹ học", detail: "Đặt nền cho câu nói bất hủ về thực chứng cảnh đêm Tam Hiệp Trường Giang: 'Thân ở trong đêm núi sâu mà mắt thấy ánh trăng vằng vặc trong nét mực'." },
        { id: "p52-3", x: 74, y: 24, titleVi: "Nét Chữ Lớn Ngược Gió & Dấu Ấn Giáo Sư Mỹ Thuật", titleZh: "浑厚华滋书风", pinyin: "Húnhòu huázī", category: "Khí Tượng 'Hồn Hậu Hoa Tư'", detail: "Định hình chuẩn mực thẩm mỹ 'Hồn hậu Hoa tư' (chín muồi, đầm thắm nhưng tràn đầy sinh lực nội tại) của hội họa Trung Quốc thế kỷ XX." }
      ]
    },
    "jiangshan-duojiao-1959": {
      material: "Thủy mặc và sắc đỏ–xanh khoáng trên giấy Tuyên khổ tường khổng lồ (565 × 900 cm, 1959)",
      attribution: "Phó Bão Thạch & Quan Sơn Nguyệt (1959) • Đại lễ đường Nhân dân Bắc Kinh",
      hotspotAnnotations: [
        { id: "p53-1", x: 74, y: 28, titleVi: "Mặt Trời Đỏ Bình Minh Rọi Bốn Mùa Đất Nước", titleZh: "东方红日全景统摄", pinyin: "Dōngfāng hóngrì", category: "Biểu tượng Cộng hòa 1959", detail: "Quy tụ bốn mùa trong một bức tranh tường dài 9 mét: tuyết phủ phía Bắc mùa đông góc phải trên đối ứng rừng tùng phương Nam mùa xuân xanh ngát." },
        { id: "p53-2", x: 48, y: 60, titleVi: "Sông Trường Giang – Hoàng Hà Hòa Dòng & Bút 'Bão Thạch Thuẫn'", titleZh: "抱石皴与岭南青松", pinyin: "Bàoshícūn", category: "Hợp Bích Hai Trường Phái", detail: "Phó Bão Thạch (Trường phái Tân Kim Lăng) đảm nhiệm dãy núi thác đổ gầm vang, còn Quan Sơn Nguyệt (Trường phái Lĩnh Nam) phụ trách khóm tùng tiên phong đầy sức sống." },
        { id: "p53-3", x: 24, y: 20, titleVi: "Năm Chữ Vàng Ngự Đề 'Giang Sơn Như Thử Đa Kiều'", titleZh: "毛泽东手书题额", pinyin: "Jiāngshān duōjiāo", category: "Sử liệu Mỹ thuật Hiện đại", detail: "Trích trực tiếp câu thơ của Mao Trạch Đông viết năm 1936, trở thành tác phẩm biểu tượng đặt tại sảnh chính Đại lễ đường Nhân dân Bắc Kinh." }
      ]
    },
    "wanshan-hongbian": {
      material: "Khoáng sắc Chu Sa đậm đặc kết hợp Tích Mặc tối trên giấy (131 × 84 cm, 1964)",
      attribution: "Lý Khả Nhiễm (1964) • Bảo tàng Mỹ thuật Trung Quốc & Bộ sưu tập Bảo Lợi",
      hotspotAnnotations: [
        { id: "p54-1", x: 50, y: 36, titleVi: "Nghịch Chuyển Sáng Tối Bằng Đỉnh Chu Sa rực Trên Nền Đen 'Nghịch Quang Pháp'", titleZh: "逆光法朱砂染千山", pinyin: "Nìguāng zhūshā", category: "Cách mạng Lý Khả Nhiễm", detail: "Phá bỏ luật thuận sáng cổ điển, Lý Khả Nhiễm áp dụng ánh sáng ngược ('Nghịch quang') phương Tây phủ lớp chu sa khoáng chất đắt giá lên toàn bộ dãy núi đen kịt tạo sắc đỏ rực thiêng liêng." },
        { id: "p54-2", x: 64, y: 66, titleVi: "Thác Bạc Sáng Chói Rạch Ngang Khối Đỏ – Đen", titleZh: "白练飞流破沉闷", pinyin: "Báiliàn fēiliú", category: "Nhịp Thở Thị giác", detail: "Hai dải suối trắng để mộc tự nhiên uốn lượn từ khe núi xuống chân làng mái ngói đen, cứu toàn bức tranh khỏi cảm giác bít bùng sắc đỏ." },
        { id: "p54-3", x: 30, y: 80, titleVi: "Cụm Nhà Mái Ngói Trường Sa Dựng Bằng Nét Đen 'Lý Gia Sơn Thủy'", titleZh: "黑瓦民居重墨法", pinyin: "Lǐjiā shānshuǐ", category: "Giao điểm Tương Phản", detail: "Cụm kiến trúc nhỏ dưới chân núi lấy cảm hứng từ câu thơ 'Khán vạn sơn hồng biến, tầng lâm tận nhiễm' (Nhìn muôn non rực đỏ, tầng rừng thảy nhuộm son)." }
      ]
    }
  };

  const ARTIFACTS_BATCH2 = {
    "ma-dap-phi-yen": {
      attribution: "Bảo tàng Tỉnh Cam Túc (Lan Châu) — Quốc bảo cấp 1 Đông Hán khai quật tại Lôi Đài, Võ Uy (1969)",
      hotspotAnnotations: [
        { id: "mpy-1", x: 52, y: 72, titleVi: "Điểm Tựa Đơn Nhất Trên Lưng Chim Én Đang Bay", titleZh: "一足踏飞燕力学奇迹", pinyin: "Yìzú tà fēiyàn", category: "Cơ học & Thẩm mỹ Đông Hán", detail: "Trọng tâm toàn khối đồng 7,15 kg quy về đúng một móng chân sau phải giẫm nhẹ lên lưng én đang quay đầu kinh ngạc." },
        { id: "mpy-2", x: 64, y: 34, titleVi: "Thủ Pháp 'Đôi Chéo Bay Bổng' (Đối Giác Tẩu Bộ)", titleZh: "对侧步飞奔姿态", pinyin: "Fēibēn zītài", category: "Điêu khắc Hiện thực Hán", detail: "Hai chân cùng bên co duỗi nhịp nhàng tạo cảm giác phi nhanh như gió vượt qua mây trắng trên Hành lang Hà Tây." },
        { id: "mpy-3", x: 35, y: 52, titleVi: "Giống Tuấn Mã Tây Vực Thời Hán Vũ Đế", titleZh: "丝路天马历史见证", pinyin: "Sīlù tiānmǎ", category: "Con đường Tơ lụa", detail: "Chứng tích hình tượng Thiên mã Đại Uyển thúc đẩy đội kỵ binh nhà Hán trấn giữ Cửa ải Hà Tây." }
      ]
    },
    "mao-gong-ding": {
      attribution: "Bảo tàng Cố Cung Đài Bắc — Trấn quán chi bảo Tây Chu với bài Kim văn dài nhất lịch sử",
      hotspotAnnotations: [
        { id: "mgd-1", x: 50, y: 56, titleVi: "Bài Minh Văn 497 Chữ Kim Văn Khắc Trong Lòng Đỉnh", titleZh: "497字西周册命金文", pinyin: "Jīnwén sìbǎi jiǔshíqī zì", category: "Sử liệu Đương đại Hạng I", detail: "Ghi nguyên văn lời Chu Tuyên Vương răn dạy và ban lễ phục, xe ngựa cho Mao Công Âm — giá trị sử liệu ngang một thiên 《Thượng Thư》." },
        { id: "mgd-2", x: 24, y: 36, titleVi: "Quai Đỉnh Dựng Đứng & Hoa Văn Trọng Hoàn Điển Hình Hậu Tây Chu", titleZh: "立耳深腹重环纹", pinyin: "Zhònghuánwén", category: "Mỹ thuật Đồng Thau Tây Chu", detail: "Kiểu dáng thu gọn bệ vệ chuyển từ phong cách quái thú Thao Thiết sang nhịp điệu hình học trang nghiêm." },
        { id: "mgd-3", x: 45, y: 80, titleVi: "Ba Chân Đề Thú Vững Chãi Trải Qua Gần 2.900 Năm", titleZh: "三兽蹄足鼎立威严", pinyin: "Sān shòutízú", category: "Kỹ nghệ Đúc đồng Chu", detail: "Kỹ thuật đúc hợp khối giữ nguyên độ cân đối và vang âm lễ khí tông miếu suốt gần ba thiên niên kỷ." }
      ]
    },
    "ru-yao-tianqing": {
      attribution: "Bảo tàng Cố Cung Bắc Kinh / Đài Bắc — Đứng đầu Ngũ Đại Danh Diêu thời Bắc Tống",
      hotspotAnnotations: [
        { id: "ry-1", x: 50, y: 46, titleVi: "Sắc Men 'Vũ Quá Thiên Thanh' Pha Bột Mã Não", titleZh: "雨过天青玛瑙入釉", pinyin: "Yǔguò tiānqīng", category: "Đỉnh cao Sứ Tống", detail: "Ánh xanh dịu không chói không đục tái hiện khoảnh khắc bầu trời rạng sáng sau mưa theo thẩm mỹ Tống Huy Tông." },
        { id: "ry-2", x: 42, y: 52, titleVi: "Vết Rạn Băng Nhẹ 'Tiền Văn Khai Phiến'", titleZh: "蝉翼纹开片", pinyin: "Chányìwén", category: "Kỹ nghệ Nung Khử", detail: "Mạng rạn mịn như cánh ve sầu tạo nên vẻ cổ kính trầm tĩnh nội liễm đậm chất Đạo – Nho Tống triều." },
        { id: "ry-3", x: 64, y: 68, titleVi: "Kỹ thuật Nung Đế Đinh Vừng 'Chi Ma Đinh'", titleZh: "芝麻钉支烧满釉", pinyin: "Zhīmadīng", category: "Nhận diện Giám định", detail: "Phủ men kín cả đáy đĩa và chống nung trên 3–5 chốt gốm nhọn li ti bằng hạt vừng — dấu ấn đặc trưng của quan diêu Nhữ." }
      ]
    }
  };

  if (typeof window.CCE_APPLY_HOTSPOTS_AND_META === "function") {
    window.CCE_APPLY_HOTSPOTS_AND_META({
      artifactsMap: ARTIFACTS_BATCH2,
      paintingsMap: PAINTINGS_BATCH2
    });
  }
})();