# -*- coding: utf-8 -*-
"""
Paintings Catalog Builder (Part 3: Eras 4-7 - Yuan, Ming, Qing & Modern)
Contains remaining 25 masterpieces completing the full 54 Masterpiece Collection.
"""

PAINTINGS_PART3 = [
    # -------------------------------------------------------------------------
    # ERA 4: YUAN DYNASTY (元朝)
    # -------------------------------------------------------------------------
    {
        "id": "quehua-qiuse",
        "titleZh": "鹊华秋色图",
        "pinyin": "Què Huá Qiū Sè Tú",
        "titleEn": "Autumn Colors on the Qiao and Hua Mountains",
        "titleVi": "Tước Hoa Thu Sắc Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "赵孟頫",
            "pinyin": "Zhào Mèngfǔ",
            "nameVi": "Triệu Mạnh Phủ",
            "alias": "Tử Ngang (子昂), Tùng Tuyết Đạo Nhân (松雪道人)",
            "dates": "1254–1322 CN",
            "era": "Nguyên triều (元朝)",
            "school": "Nguyên Đại Thư Họa Tông Sư (元代文人画领袖)",
            "bio": "Hậu duệ hoàng tộc nhà Tống ra làm quan thời Nguyên, đại tông sư thư họa kiệt xuất bậc nhất Đông Á. Người đề xướng thuyết 'Thư họa đồng nguyên' (Thơ họa cùng gốc) và đề cao 'Cổ ý' (古意)."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元代", "nameVi": "Nguyên triều (1295 CN)"},
        "creationDate": "Năm Ất Mùi 1295 CN (Thời Nguyên Thành Tông)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Văn nhân sơn thủy • Cổ ý thanh đạm (文人山水)",
        "material": "Quyển trục ngang giấy, màu khoáng đạm sắc (纸本设色)",
        "dimensions": "28.4 × 90.2 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích bảo chứng tuyệt đối (真迹) — Có lạc khoản đề tự của Triệu Mạnh Phủ gửi tặng bạn thân Châu Mật (Chu Mật).",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "作画贵有古意，若无古意，虽工无益。书画本来同，简率见天真。",
            "vi": "Làm họa quý ở chỗ có Cổ ý, nhược bằng không có cổ ý, dẫu khéo léo tỉ mỉ cũng vô ích. Thư pháp và hội họa vốn dĩ tương đồng, giản dị khoáng đạt mới thấy được thiên chân.",
            "author": "Triệu Mạnh Phủ (赵孟頫)",
            "source": "Tùng Tuyết Trai Văn Tập (松雪斋文集)"
        },
        "analysis": {
            "historicalBackground": "Triệu Mạnh Phủ vẽ bức tranh này tại kinh đô Đại Đô (Bắc Kinh) tặng cho người bạn thân là danh sĩ Châu Mật vốn quê gốc ở Tế Nam (Sơn Đông) nhưng sinh ra ở phương Nam chưa từng được thấy quê cha đất tổ.",
            "artistBiography": "Triệu Mạnh Phủ là người xoay chuyển toàn bộ dòng chảy hội họa Trung Hoa từ lối tả thực tinh vi sang lối biểu đạt tâm cảnh văn nhân mộc mạc mang đầy tính thư pháp.",
            "artisticComposition": "Bố cục cuộn ngang bình đạm: hai ngọn núi Tước Sơn (đỉnh tròn như lưng trâu) và Hoa Bất Chú Sơn (đỉnh nhọn như búp sen) sừng sững đối diện nhau bên bờ sông đầm lầy; ở giữa là xóm chài nhỏ, rặng liễu đỏ và thuyền nan.",
            "brushwork": "Sáng tạo mang tính bước ngoặt: dùng bút pháp Trung phong tròn trịa của Triện thư và Lệ thư để vẽ cây đá, đường nét mộc mạc ngây ngô cố ý ('Chuyết' - 拙) nhằm thoát khỏi sự khéo léo tầm thường của thợ vẽ.",
            "inkAndColor": "Màu sắc thanh đạm vô ngần: sắc đỏ gạch của lá thu (Đan phong), sắc xanh nhạt pha mực loãng trên đồi cát, toát lên vẻ cô tịch mà ấm áp của mùa thu phương Bắc.",
            "spatialPerspective": "Sắp đặt không gian phẳng dẹp tự nhiên, không áp đặt quy luật thị giác cơ giới, mở ra chiều sâu tâm tưởng hoài cổ thâm trầm.",
            "symbolism": "Hai ngọn núi vĩnh cửu bên dòng sông biểu trưng cho ký ức quê hương bất diệt và tình bằng hữu tri kỷ son sắt của kẻ sĩ lưu lạc.",
            "philosophicalMeaning": "Triết lý 'Cổ ý': hướng về sự thuần khiết phác thực thời cổ xưa để gột rửa tâm hồn trước hiện thực chính trị khắc nghiệt của thời ngoại tộc thống trị.",
            "artisticLegacy": "Mở đầu kỷ nguyên vàng son của Văn nhân họa thời Nguyên, mẫu mực cho các đại danh họa Hoàng Công Vọng và Đổng Kỳ Xương suy tôn."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc định danh là bảo vật tối cao. Trên tranh có chi chít hơn 40 con dấu ngự lãm và thơ đề của hoàng đế Càn Long, người vô cùng sùng kính bức họa này.",
            "debatedIssues": "Vị trí địa lý thực tế của hai ngọn núi Tước Sơn và Hoa Bất Chú Sơn ở Tế Nam ngày nay có góc nhìn khác với bức tranh, chứng minh Triệu Mạnh Phủ vẽ bằng 'tâm tượng' chứ không đơn thuần sao chép quang học.",
            "comparativeContext": "So với 'Thiên Lý Giang Sơn Đồ' (phú quý lộng lẫy), bức này đại diện cho sự chuyển mình triệt để sang vẻ đẹp thanh nhã, tao nhã mộc mạc của trí thức.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Triệu Mạnh Phủ Thư Họa Đặc Triển Đồ Lục'.",
                "Trần Cao Hoa, 'Triệu Mạnh Phủ dữ Nguyên Đại Văn Nhân Họa'."
            ]
        }
    },
    {
        "id": "xiushi-shulin",
        "titleZh": "秀石疏林图",
        "pinyin": "Xiù Shí Shū Lín Tú",
        "titleEn": "Elegant Rocks and Sparse Trees",
        "titleVi": "Tú Thạch Sơ Lâm Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "赵孟頫",
            "pinyin": "Zhào Mèngfǔ",
            "nameVi": "Triệu Mạnh Phủ",
            "alias": "Tùng Tuyết Đạo Nhân",
            "dates": "1254–1322 CN",
            "era": "Nguyên triều (元朝)",
            "school": "Thư Họa Đồng Nguyên Phái",
            "bio": "Đại tông sư đặt nền móng vĩnh cửu cho lý luận Thư họa đồng nhất trong hội họa Á Đông."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元代", "nameVi": "Nguyên triều (thế kỷ XIV CN)"},
        "creationDate": "Khoảng năm 1300–1310 CN",
        "genreId": "literati",
        "genres": ["literati", "ink-wash", "freehand"],
        "genreLabel": "Thư họa đồng nguyên • Văn nhân mặc hí (书画同源)",
        "material": "Quyển trục giấy, mực nho thuần khiết (纸本水墨)",
        "dimensions": "27.5 × 62.8 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích có bài thơ tuyên ngôn kinh điển (真迹) — Lưu giữ tại Bảo tàng Cố Cung Bắc Kinh.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "石如飞白木如籀，写竹还应八法通。若也有人能会此，须知书画本来同。",
            "vi": "Đá vẽ như Phi Bạch cây như Triện thư, Vẽ trúc ắt phải thông suốt Vĩnh tự bát pháp. Nhược bằng có kẻ thấu suốt điều này, Mới hay xưa nay Thư và Họa vốn cùng một gốc.",
            "author": "Triệu Mạnh Phủ (赵孟頫)",
            "source": "Thơ đề trên bức Tú Thạch Sơ Lâm Đồ"
        },
        "analysis": {
            "historicalBackground": "Tác phẩm được xem là bản 'Tuyên ngôn học thuật' vĩ đại nhất của Triệu Mạnh Phủ nhằm chứng minh thực tiễn lý luận Thư họa đồng nguyên cho giới sĩ phu thời Nguyên.",
            "artistBiography": "Triệu Mạnh Phủ tinh thông cả ngũ thể thư pháp (Triện, Lệ, Khải, Hành, Thảo), vận dụng toàn bộ kỹ xảo đầu ngọn bút lông của thư pháp vào hội họa.",
            "artisticComposition": "Bố cục đơn sơ khúc chiết: một tảng đá góc cạnh sừng sững, vài nhánh trúc thanh mảnh đâm chồi, và những thân cây thưa trơ cành trong tiết thu.",
            "brushwork": "Thực hành chính xác bài thơ đề: Tảng đá vẽ bằng nét bút khô 'Phi bạch' (xước trắng); thân cây uốn lượn bằng nét bút tròn trịa 'Trụ thư' (Đại triện); lá trúc điểm bằng các nét 'Bát pháp' của Khải thư dứt khoát.",
            "inkAndColor": "Chỉ dùng một ngọn bút lông và mực đen thuần túy, lột tả trọn vẹn hồn cốt của đá và sức sống dẻo dai của trúc.",
            "spatialPerspective": "Không gian giải phóng khỏi mọi quy ước hình thức, người thưởng ngoạn nhìn thấy trực tiếp nhịp đập tâm can và khí lực vận động nơi cổ tay họa sĩ.",
            "symbolism": "Đá kiên cố biểu trưng cho tiết tháo; trúc rỗng ruột biểu trưng cho đức khiêm nhường; cây cằn biểu trưng cho phẩm hạnh thanh cao không màng thế tục.",
            "philosophicalMeaning": "Đỉnh cao của sự hợp nhất giữa Hình và Ý: nghệ thuật không còn là công cụ mô phỏng ngoại giới mà là phương tiện tu dưỡng nhân cách nội tại.",
            "artisticLegacy": "Câu thơ đề của bức tranh trở thành định lý kinh điển được mọi thế hệ nghệ sĩ thư họa Trung Hoa, Việt Nam, Nhật Bản trích dẫn suốt 700 năm qua."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh xác định đây là di sản lý luận hội họa có giá trị cao nhất thời Nguyên.",
            "debatedIssues": "Phân tích vi mô dấu ấn ngọn bút cho thấy sự chuẩn xác tuyệt đối giữa nét vẽ tảng đá và các đại tự bia ký thời Tần–Hán mà Triệu Mạnh Phủ dày công mô phỏng.",
            "comparativeContext": "So với lối vẽ trúc thời Tống của Văn Đồng, tác phẩm của Triệu Mạnh Phủ đậm đặc tính thư pháp tự giác hơn hẳn.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Triệu Mạnh Phủ Tú Thạch Sơ Lâm Đồ Chuyên Khảo'.",
                "Trần Chấn Luyện, 'Thư Họa Đồng Nguyên Mỹ Học'."
            ]
        }
    },
    {
        "id": "fuchun-shanju",
        "titleZh": "富春山居图",
        "pinyin": "Fù Chūn Shān Jū Tú",
        "titleEn": "Dwelling in the Fuchun Mountains",
        "titleVi": "Phú Xuân Sơn Cư Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "黄公望",
            "pinyin": "Huáng Gōngwàng",
            "nameVi": "Hoàng Công Vọng",
            "alias": "Tử Cửu (子久), Đại Si Đạo Nhân (大痴道人)",
            "dates": "1269–1354 CN",
            "era": "Nguyên triều (元朝)",
            "school": "Nguyên Tứ Gia Chi Thủ (元四家之首)",
            "bio": "Họa gia đứng đầu Nguyên Tứ Gia, từng ngồi tù vì oan án thời trẻ, sau gia nhập Toàn Chân Giáo hành nghề bói toán chu du, ngoài năm mươi tuổi mới dốc tâm vẽ tranh, để lại kiệt tác chấn động thiên cổ."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元代", "nameVi": "Nguyên triều Chí Chính (1350 CN)"},
        "creationDate": "Năm 1347–1350 CN (Thời kỳ ẩn cư Phú Xuân giang)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Văn nhân sơn thủy đỉnh cao • Thần phẩm thiên thu",
        "material": "Cuộn trục dài giấy, mực nho thủy mặc đạm sắc (纸本水墨)",
        "dimensions": "Phần Vô Dụng Sư: 33 × 636.9 cm / Phần Thặng Sơn Đồ: 31.8 × 51.4 cm",
        "museum": "台北故宫博物院 (Bản Vô Dụng Sư) & 浙江省博物馆 (Bản Thặng Sơn Đồ)",
        "attribution": "Chân tích độc bản lịch sử (真迹) — Bị cháy đứt làm hai đoạn năm 1650 do chủ nhân Ngô Hồng Dụ hỏa thiêu tuẫn táng, hiện lưu giữ ở hai bờ eo biển.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "大痴画格，超然尘表。山川磅礴，意境苍茫。董巨之法，至此而大备矣。",
            "vi": "Họa cách của Đại Si siêu nhiên thoát tục khỏi cõi trần. Non sông bàng bạc hùng vĩ, ý cảnh thương mang bát ngát. Pháp tắc Đổng–Cự đến đây mới thực sự đại bị viên mãn.",
            "author": "Đổng Kỳ Xương (董其昌)",
            "source": "Họa Thiền Thất Tùy Bút"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào những năm cuối đời ở tuổi tám mươi khi Hoàng Công Vọng lui về ẩn cư bên dòng sông Phú Xuân ở Chiết Giang. Ông dành hơn 3 năm trời mang giấy bút chu du khắp các khe núi ngắm nghía biến ảo của thiên nhiên mới hoàn thành cuộn họa.",
            "artistBiography": "Đại Si Đạo Nhân sống cuộc đời phong trần tiêu dao, am tường âm luật, thi từ và đạo pháp Toàn Chân, vẽ tranh với tâm thế vô cầu thuần tịnh tuyệt đối.",
            "artisticComposition": "Trường thiên đại tác cuộn dài hơn 6 mét miêu tả non nước đôi bờ sông Phú Xuân: ngọn đồi thoai thoải mở đầu, chuyển tiếp sang núi non trùng điệp hùng vĩ, rồi kết thúc bằng bãi bồi ven sông phẳng lặng mênh mông.",
            "brushwork": "Khai phá kỹ thuật đỉnh cao: kết hợp giữa 'Phi mạ thuấn' biến thể mềm mại và nét cọ khô 'Khát bút đái thấp' (bút khô mang theo nước), nét vẽ biến ảo tùy tâm ứng biến khôn lường.",
            "inkAndColor": "Sử dụng thủy mặc thượng thừa: lúc đậm lúc nhạt, mực tích tụ tầng tầng lớp lớp (Tích mặc pháp) tạo độ sâu dày dặn mà vẫn trong trẻo như ngọc bích.",
            "spatialPerspective": "Điểm nhìn di động liên tục dọc theo dòng sông, người xem như ngồi trên chiếc thuyền nan trôi theo dòng nước, thưởng ngoạn bốn mùa và từng khoảnh khắc biến dịch của trời mây.",
            "symbolism": "Dòng sông Phú Xuân và bóng dáng người câu cá đơn độc biểu trưng cho sự giải thoát rốt ráo của tâm hồn khỏi mọi trói buộc thế tục và khổ lụy trần gian.",
            "philosophicalMeaning": "Đạt tới cảnh giới tối cao của mỹ học Trung Hoa: 'Thiên nhân hợp nhất' và tinh thần Toàn Chân Đạo gia — hòa tan cái tôi nhỏ bé vào sự vĩnh hằng bao la của đại tự nhiên.",
            "artisticLegacy": "Được tôn xưng là 'Họa Trung Chi Lan Đình' (Như Lan Đình Tự của giới hội họa), kiệt tác văn nhân họa có giá trị và sức lôi cuốn huyền thoại nhất trong lịch sử nghệ thuật Đông Á."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Năm 2011, hai phần của bức tranh bị chia cắt suốt 360 năm (phần 'Thặng Sơn Đồ' tại Bảo tàng Chiết Giang và phần 'Vô Dụng Sư Bản' tại Cố Cung Đài Bắc) đã được hợp nhất triển lãm lịch sử tại Đài Bắc, thu hút hàng triệu lượt khách toàn cầu.",
            "debatedIssues": "Cuộc thẩm định nổi tiếng của Càn Long: Hoàng đế từng say mê một bản sao (Bản Tử Minh) coi là chân tích và đề kín thơ ngự phê, trong khi bản chân tích thực sự (Bản Vô Dụng Sư) lại bị ông coi là đồ giả, tạo nên giai thoại giám định kinh điển.",
            "comparativeContext": "So với sự công phu nghiêm ngặt của tranh viện thể đời Tống, 'Phú Xuân Sơn Cư Đồ' phóng khoáng, thanh nhã và giải phóng hoàn toàn tâm thức người trí thức.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Sơn Thủy Hợp Bích: Hoàng Công Vọng dữ Phú Xuân Sơn Cư Đồ Đặc Triển', 2011.",
                "Trần Truyền Tịch, 'Hoàng Công Vọng Phú Xuân Sơn Cư Đồ Thiên Niên Khảo'."
            ]
        }
    },
    {
        "id": "dongting-yuyin",
        "titleZh": "洞庭渔隐图",
        "pinyin": "Dòng Tíng Yú Yǐn Tú",
        "titleEn": "Hermit Fisherman on Lake Dongting",
        "titleVi": "Động Đình Ngư Ẩn Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "吴镇",
            "pinyin": "Wú Zhèn",
            "nameVi": "Ngô Trấn",
            "alias": "Trọng Khuê (仲圭), Mai Hoa Đạo Nhân (梅花道人)",
            "dates": "1280–1354 CN",
            "era": "Nguyên triều (元朝)",
            "school": "Nguyên Tứ Gia (元四家)",
            "bio": "Đại danh họa Nguyên Tứ Gia, sống ẩn dật cả đời ở Gia Hưng, hành nghề bói toán kiếm sống, yêu hoa mai, chuyên vẽ sơn thủy và mặc trúc với phong cách mực đen đặc đẫm đầy nội lực."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元代", "nameVi": "Nguyên triều Chí Chính (1341 CN)"},
        "creationDate": "Năm Tân Tỵ 1341 CN",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Văn nhân ngư ẩn • Thủy mặc trầm hậu (渔隐山水)",
        "material": "Trục đứng giấy, mực nho thủy mặc (纸本水墨)",
        "dimensions": "146.6 × 58.6 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích có thơ họa chuẩn xác (真迹) — Có bài thơ tự đề và lạc khoản của Ngô Trấn năm 1341.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "洞庭湖上晚风生，风借湖水浪脚轻。一叶渔舟一竿竹，几多江浪得平生。",
            "vi": "Hồ Động Đình dâng gió chiều mát rượi, Gió nương sóng biếc vỗ nhẹ mạn thuyền. Một chiếc thuyền nan một cần câu trúc, Bao phen sóng gió đặng trọn bình sinh.",
            "author": "Ngô Trấn (吴镇)",
            "source": "Thơ đề trên bức Động Đình Ngư Ẩn Đồ"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ các trí thức Hán tộc thất vọng trước sự phân biệt đẳng cấp của triều Nguyên, lui về ẩn thân làm ngư tiều nơi sông hồ để bảo tồn khí tiết.",
            "artistBiography": "Ngô Trấn cô độc thanh bần suốt đời, không bao giờ xu nịnh quyền quý, tự xưng Mai Hoa Đạo Nhân, lấy hình tượng 'Ngư phụ' (ông chài) làm hóa thân tâm linh của chính mình.",
            "artisticComposition": "Bố cục trục đứng thanh nhã: tiền cảnh là bờ đất với hai cây tùng cổ thụ vươn cành giao nhau; trung cảnh là mặt hồ Động Đình phẳng lặng có chiếc thuyền câu trôi dạt; viễn cảnh là rặng núi mờ xa.",
            "brushwork": "Bút pháp viên nhuần, gân guốc, kế thừa sâu sắc Đổng Nguyên và Cự Nhiên; dùng nét bút ẩm ướt đầy mực vẽ cành lá và thân tùng già xù xì kiên định.",
            "inkAndColor": "Đặc trưng 'Mặc sắc trầm hậu' (màu mực thâm trầm nặng trĩu): mực ướt nhuần nhụy, tầng tầng lớp lớp đen láy nhưng không hề đục, toát lên sự mát lành của khí nước hồ thu.",
            "spatialPerspective": "Khoảng trống mặt nước chiếm trọn phần lớn bức tranh, tạo cảm giác khoáng đạt vô biên của hồ Động Đình nghìn dặm.",
            "symbolism": "Chiếc thuyền câu đơn độc không mồi câu biểu trưng cho tự do tuyệt đối, không màng danh lợi bổng lộc trần ai.",
            "philosophicalMeaning": "Triết lý Đạo gia Trang Tử 'Ngư phụ thiên': ngư ông là biểu tượng của bậc giác ngộ đứng ngoài mọi vòng xoáy tranh đoạt thế gian.",
            "artisticLegacy": "Định hình đề tài 'Ngư ẩn' thành một trong những chủ đề thiêng liêng nhất của mỹ thuật văn nhân Đông Á."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc khẳng định đây là bức họa sơn thủy trục đứng hoàn mỹ nhất của Ngô Trấn còn lưu truyền.",
            "debatedIssues": "Khảo cứu phong cách chữ thảo phóng khoáng trong bài thơ đề phía trên, thể hiện sự hòa quyện hoàn hảo giữa thơ ca và nét vẽ.",
            "comparativeContext": "So với Nghê Toản (khô khốc lạnh lẽo), Ngô Trấn đẫm ướt và đôn hậu, ấm áp hơn nhiều.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Nguyên Tứ Gia Đặc Triển: Ngô Trấn Chi Bộ'.",
                "Phan Vận Cáo, 'Nguyên Đại Họa Luận'."
            ]
        }
    },
    {
        "id": "liujunzi-tu",
        "titleZh": "六君子图",
        "pinyin": "Liù Jūn Zǐ Tú",
        "titleEn": "Six Gentlemen",
        "titleVi": "Lục Quân Tử Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "倪瓒",
            "pinyin": "Ní Zàn",
            "nameVi": "Nghê Toản",
            "alias": "Vân Lâm (云林), Nghê Vu (倪迂)",
            "dates": "1301–1374 CN",
            "era": "Nguyên mạt Minh sơ",
            "school": "Nguyên Tứ Gia • Tiêu Sơ Đạm Bạc (萧疏简淡)",
            "bio": "Đại danh họa Nguyên Tứ Gia xuất thân cự phú Vô Tích. Nổi tiếng mắc bệnh sạch sẽ tột bực (Khiết phích), phân phát toàn bộ gia sản rồi cùng vợ con sống trên thuyền nan ngao du Ngũ Hồ, vẽ tranh với phong cách khô khốc cô liêu vô song."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元末", "nameVi": "Nguyên triều Chí Chính (1345 CN)"},
        "creationDate": "Năm Ất Dậu 1345 CN",
        "genreId": "literati",
        "genres": ["literati", "ink-wash", "landscape"],
        "genreLabel": "Văn nhân dã dật • Nhất thủy lưỡng ngạn (一水两岸)",
        "material": "Trục đứng giấy, mực khô thủy mặc (纸本水墨)",
        "dimensions": "61.9 × 33.3 cm",
        "museum": "上海博物馆 (Bảo tàng Thượng Hải)",
        "attribution": "Chân tích độc bảo (真迹) — Có lạc khoản của Nghê Toản và bài thơ đề của danh sĩ Hoàng Công Vọng bảo chứng.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "仆之所谓画者，不过逸笔草草，不求形似，聊以写胸中逸气耳。",
            "vi": "Cái mà kẻ hèn này gọi là vẽ, chẳng qua là nét bút phiêu dật qua loa, chẳng cầu hình thể giống hệt, cốt để giãi bày khí dã dật trong lồng ngực mà thôi.",
            "author": "Nghê Toản (倪瓒)",
            "source": "Thanh Mật Các Tập (清閟阁集)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ cuối triều Nguyên nông dân khởi nghĩa khắp nơi, chiến tranh tàn phá cướp bóc, Nghê Toản dứt khoát rời bỏ dinh thự lầu son sống phiêu bạt trên mặt nước để giữ tâm hồn thuần khiết.",
            "artistBiography": "Nghê Toản là nhân vật kỳ dị nhất lịch sử mỹ thuật: yêu sự sạch sẽ đến mức lau rửa từng gốc ngô đồng, tranh tuyệt đối không bao giờ vẽ bóng dáng con người ('Thế gian hà xứ hữu thanh nhân?' - Cõi đời tìm đâu ra kẻ thanh sạch?).",
            "artisticComposition": "Khai sáng bố cục kinh điển 'Nhất thủy lưỡng ngạn' (Một dòng nước hai bờ): Tầng dưới là bờ gần có 6 gốc cây cổ thụ (tùng, bách, ngô đồng, quế...); Tầng giữa là khoảng nước phẳng lặng trống rỗng mênh mông; Tầng trên là dãy núi xa xôi hiu quạnh.",
            "brushwork": "Đặc trưng cọ vẽ 'Chiết đái thuấn' (折带皴 - vân dây đai gãy): nghiêng đầu bút vẽ ngang rồi gập vuông góc, dùng mực khô khát kiệt (tích mực như vàng) tạo nên nét cọ lạnh lùng khô sắc.",
            "inkAndColor": "Thuần túy mực khô thanh đạm, không một giọt nước thừa, không một bóng màu, toát lên sự băng thanh ngọc khiết.",
            "spatialPerspective": "Không gian trống rỗng tịch mịch đến nghẹt thở, người xem cảm nhận sự tĩnh lặng tuyệt đối nơi không một tiếng động trần gian nào có thể lọt vào.",
            "symbolism": "6 gốc cây cổ thụ tượng trưng cho 'Lục Quân Tử' (Sáu bậc quân tử) cùng đứng kề vai hiên ngang bên dòng đời biến động.",
            "philosophicalMeaning": "Đỉnh cao tuyệt đỉnh của khái niệm 'Dật khí' (逸气) trong Văn nhân họa: tranh là nơi lưu giữ phẩm giá trong sạch tối thượng của con người trước sự ô trọc của xã hội thời loạn.",
            "artisticLegacy": "Ảnh hưởng sâu sắc và được tôn sùng tột bực bởi giới văn nhân sĩ phu đời Minh và Thanh; Đổng Kỳ Xương coi phong cách của Nghê Toản là tiêu chuẩn tối thượng của họa phẩm."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Thượng Hải trân quý bức tranh như một trong những báu vật tinh thần cốt lõi của hội họa Nguyên triều.",
            "debatedIssues": "Bài thơ đề tiếp nối của đại danh họa Hoàng Công Vọng trên góc tranh khẳng định tên gọi 'Lục Quân Tử Đồ' và tình bạn thâm giao giữa hai đại sư.",
            "comparativeContext": "Khác hẳn sự rậm rạp trùng điệp của Vương Mông, tranh của Nghê Toản là sự tối giản triệt để đến tận cùng của đường nét.",
            "academicCitations": [
                "Bảo tàng Thượng Hải, 'Nghê Toản Lục Quân Tử Đồ Nghiên Cứu Chuyên Đề'.",
                "Trần Truyền Tịch, 'Nghê Vân Lâm Họa Phong dữ Khiết Phích'."
            ]
        }
    },
    {
        "id": "qingbian-yinju",
        "titleZh": "青卞隐居图",
        "pinyin": "Qīng Biàn Yǐn Jū Tú",
        "titleEn": "Dwelling in Reclusion in the Qingbian Mountains",
        "titleVi": "Thanh Biện Ẩn Cư Đồ",
        "eraId": "yuan",
        "artist": {
            "nameZh": "王蒙",
            "pinyin": "Wáng Méng",
            "nameVi": "Vương Mông",
            "alias": "Thúc Minh (叔明), Hoàng Hạc Sơn Tiều (黄鹤山樵)",
            "dates": "1308–1385 CN",
            "era": "Nguyên mạt Minh sơ",
            "school": "Nguyên Tứ Gia • Trọng Điệp Hùng Mật (繁密重叠)",
            "bio": "Cháu ngoại của đại danh họa Triệu Mạnh Phủ, xếp hàng Nguyên Tứ Gia. Phong cách đối lập hoàn toàn với Nghê Toản: bố cục rậm rạp tầng tầng lớp lớp, vân cọ xoắn bện cuồn cuộn sức sống."
        },
        "dynasty": {"eraId": "yuan", "nameZh": "元末", "nameVi": "Nguyên mạt Chí Chính (1366 CN)"},
        "creationDate": "Năm Bính Ngọ 1366 CN (Cuối triều Nguyên)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Văn nhân sơn thủy phồn mật • Thần phẩm thiên thu",
        "material": "Trục đứng giấy dài, mực nho thủy mặc (纸本水墨)",
        "dimensions": "140.6 × 42.2 cm",
        "museum": "上海博物馆 (Bảo tàng Thượng Hải)",
        "attribution": "Chân tích độc bản đệ nhất (真迹) — Được Đổng Kỳ Xương suy tôn là 'Thiên hạ đệ nhất Vương Thúc Minh'.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "王叔明画，从董源巨然得来，繁线密点，苍茫沉郁，自成一家。此图为天下第一神品。",
            "vi": "Họa của Vương Thúc Minh bắt nguồn từ Đổng Nguyên và Cự Nhiên, nét chỉ chằng chịt chấm mực rậm rạp, thương mang trầm uất, tự thành một nhà. Bức này xứng danh thần phẩm đệ nhất thiên hạ.",
            "author": "Đổng Kỳ Xương (董其昌)",
            "source": "Họa Thiền Thất Tùy Bút"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời điểm các tập đoàn quân khởi nghĩa Chu Nguyên Chương và Trương Sĩ Thành đang giao chiến ác liệt quanh vùng Thái Hồ, Vương Mông vẽ cảnh ngọn núi Biện Sơn quê ngoại để tặng người anh em họ đang ẩn cư tránh nạn đao binh.",
            "artistBiography": "Vương Mông tiếp thu gia học uyên bác từ Triệu Mạnh Phủ, có kỹ năng cọ vẽ dẻo dai phi thường, có thể đan cài hàng ngàn đường nét phức tạp mà khí vận vẫn thông suốt không tắc nghẽn.",
            "artisticComposition": "Bố cục trục đứng hẹp và cao vút, không gian dồn nén từ chân núi lên đỉnh trời; hẻm sâu uốn lượn, nhà tranh ẩn hiện giữa rặng tùng rậm rạp, vách đá dựng đứng xoắn bện mãnh liệt.",
            "brushwork": "Khai sáng hai kỹ thuật độc môn: 'Giải tác thuấn' (解索皴 - vân dây thừng tháo mở) uốn lượn như sợi dây thừng và 'Ngưu mao thuấn' (牛毛皴 - vân lông bò) mềm mại đan cài chằng chịt, kết hợp chấm rêu mực đượm dày đặc.",
            "inkAndColor": "Vận dụng mực khô và mực ẩm xen kẽ tinh vi, tạo nên cấu trúc bề mặt nhấp nhô sống động của địa tầng núi đá sa thạch miền Nam.",
            "spatialPerspective": "Không gian chật kín không để lại nhiều khoảng trống ('Phồn mật bố cục'), dẫn dắt thị giác người xem đi qua mê cung của tự nhiên hùng vĩ.",
            "symbolism": "Ngọn núi Biện Sơn cao vút sừng sững như thành trì kiên cố bảo bọc tâm hồn người ẩn sĩ trước sự tàn phá hỗn loạn của thế giới chiến tranh bên ngoài.",
            "philosophicalMeaning": "Phản ánh thế giới nội tâm giằng xé, âu lo nhưng tràn đầy năng lượng sinh tồn mãnh liệt của giới trí thức cuối thời Nguyên.",
            "artisticLegacy": "Cột trụ vĩ đại của trường phái sơn thủy phồn mật, ảnh hưởng quyết định đến Thẩm Chu, Văn Trưng Minh thời Minh và Thạch Đào, Hoàng Tân Hồng thời hiện đại."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Thượng Hải coi đây là tác phẩm hạt nhân tiêu biểu nhất cho sự biến đổi phong cách cọ vẽ thời Nguyên mạt.",
            "debatedIssues": "Bi kịch số phận của Vương Mông: đầu thời Minh ông ra làm tri phủ Thái An, sau dính vào án ngục Hồ Duy Dung và chết thảm trong ngục ngục giam Kim Lăng năm 1385.",
            "comparativeContext": "Tương phản 180 độ với sự vắng lặng thưa thớt của Nghê Toản, tranh Vương Mông là sự bùng nổ của năng lượng và sự sống.",
            "academicCitations": [
                "Bảo tàng Thượng Hải, 'Vương Mông Thanh Biện Ẩn Cư Đồ Khảo Thích'.",
                "Cao Cư Hàn, 'Cách Giang Sơn Sắc: Nguyên Đại Nghệ Thuật'."
            ]
        }
    },

    # -------------------------------------------------------------------------
    # ERA 5: MING DYNASTY (明朝)
    # -------------------------------------------------------------------------
    {
        "id": "lushan-gao",
        "titleZh": "庐山高图",
        "pinyin": "Lú Shān Gāo Tú",
        "titleEn": "Lofty Mount Lu",
        "titleVi": "Lư Sơn Cao Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "沈周",
            "pinyin": "Shěn Zhōu",
            "nameVi": "Thẩm Chu",
            "alias": "Khải Nam (启南), Thạch Điền (石田), Bạch Thạch Ông",
            "dates": "1427–1509 CN",
            "era": "Minh triều (明朝)",
            "school": "Ngô Môn Họa Phái Khai Tổ (吴门画派领袖 / Minh Tứ Gia)",
            "bio": "Minh Tứ Gia chi thủ, người sáng lập Ngô Môn họa phái lừng danh tại Tô Châu. Suốt đời không ra làm quan, hiếu thảo đức độ, tài thơ văn thư họa chấn động cõi Giang Nam."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh Thành Hóa (1467 CN)"},
        "creationDate": "Năm Đinh Hợi 1467 CN (Thời Minh Hiến Tông)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Ngô Môn sơn thủy • Thọ lễ văn nhân (吴门山水)",
        "material": "Trục đứng giấy lớn, mực nho đạm sắc (纸本水墨设色)",
        "dimensions": "193.8 × 98.1 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích bảo vật trấn viện (真迹) — Có bài thơ trường thiên tự đề ca ngợi ân sư Trần Khoan tròn 70 tuổi thọ.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "庐山高，高崔嵬，仰睇削壁摩天开。崇峦绝磴下见底，万壑奔注如奔雷。",
            "vi": "Lư Sơn cao chót vót uy nghiêm, Ngước trông vách đá dựng đứng chọc thủng trời xanh. Núi non chót vót vực sâu thăm thẳm, Ngàn thung lũng nước tuôn gầm thét tựa sấm ran.",
            "author": "Thẩm Chu (沈周)",
            "source": "Bài thơ trường thiên đề trên Lư Sơn Cao Đồ"
        },
        "analysis": {
            "historicalBackground": "Sáng tác năm 1467 nhân dịp mừng đại thọ 70 tuổi của người thầy kính yêu Trần Khoan (quê gốc Lư Sơn). Thẩm Chu chưa từng đến Lư Sơn nhưng đã dùng trí tưởng tượng và sự tôn kính vô bờ để tạo nên một kỳ quan hội họa.",
            "artistBiography": "Thẩm Chu là bậc minh chủ của giới văn nhân Tô Châu thời phồn vinh nhất, dung hợp phong cách rậm rạp của Vương Mông với nét bút đôn hậu phóng khoáng của Ngô Trấn.",
            "artisticComposition": "Trục đứng đồ sộ hùng vĩ: chân núi có người hiền sĩ đứng chiêm ngưỡng dòng thác nước tuôn trào từ mây biếc; vách núi Lư Sơn trùng điệp uốn lượn vươn thẳng lên tận trời mây.",
            "brushwork": "Kế thừa kỹ thuật 'Ngưu mao thuấn' và 'Giải tác thuấn' của Vương Mông nhưng ngọn bút cứng cáp, gãy gọn, dứt khoát hơn; các chấm rêu mực đượm tạo cảm giác cây rừng tốt tươi rậm rạp.",
            "inkAndColor": "Phối sắc tao nhã: mực đen làm nền tảng, phủ lớp màu nâu son nhạt và xanh lục lam trong trẻo trên sườn núi đá.",
            "spatialPerspective": "Phối cảnh 'Cao viễn' tuyệt đối, đẩy ngọn Lư Sơn lên tầng mây chót vót, làm nổi bật sự nhỏ bé của người đứng ngắm bên dưới.",
            "symbolism": "Ngọn núi Lư Sơn hùng vĩ cao chọc trời là ẩn dụ tôn vinh nhân cách, học vấn và đạo đức cao vời vợi tựa 'Cao sơn ngưỡng chỉ' của người thầy giáo dục.",
            "philosophicalMeaning": "Đạo hiếu và lòng tri ân của Nho gia kết hợp hoàn mỹ với tinh thần siêu nhiên của hội họa sơn thủy: đạo học và tự nhiên cùng chung một phẩm tính cao cả.",
            "artisticLegacy": "Được coi là cột mốc khai sinh chính thức sự thống trị của Ngô Môn họa phái trên kỳ đàn hội họa thời Minh, mở đường cho Văn Trưng Minh và Đường Dần."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc khẳng định đây là kiệt tác có quy mô lớn nhất và bút lực hùng hậu nhất trong toàn bộ cuộc đời sáng tác của Thẩm Chu.",
            "debatedIssues": "Nghiên cứu về việc Thẩm Chu học tập Vương Mông: bức tranh cho thấy khả năng làm chủ hoàn hảo kỹ xảo thời Nguyên để phục vụ cho tinh thần Nho học đời Minh.",
            "comparativeContext": "So với 'Thanh Biện Ẩn Cư Đồ' của Vương Mông, bức tranh của Thẩm Chu khoáng đạt, quang minh lỗi lạc và tràn đầy niềm lạc quan hơn.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Ngô Môn Tứ Gia Đặc Triển: Thẩm Chu Chi Bộ'.",
                "Trần Truyền Tịch, 'Thẩm Chu Lư Sơn Cao Đồ Dữ Minh Đại Văn Nhân Tâm Thái'."
            ]
        }
    },
    {
        "id": "gumu-youquan",
        "titleZh": "古木幽泉图",
        "pinyin": "Gǔ Mù Yōu Quán Tú",
        "titleEn": "Old Trees and Secluded Springs",
        "titleVi": "Cổ Mộc U Tuyền Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "文徵明",
            "pinyin": "Wén Zhēngmíng",
            "nameVi": "Văn Trưng Minh",
            "alias": "Trưng Trọng (徵仲), Hành Sơn Cư Sĩ (衡山居士)",
            "dates": "1470–1559 CN",
            "era": "Minh triều (明朝)",
            "school": "Ngô Môn Họa Phái (Minh Tứ Gia)",
            "bio": "Học trò xuất sắc nhất kế thừa Thẩm Chu, thọ 90 tuổi, lãnh tụ văn hóa Tô Châu suốt nửa thế kỷ. Nổi tiếng với phong cách 'Tế Văn' (nét vẽ tinh tế, thanh nhã tột cùng) và nhân phẩm thanh khiết."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh Gia Tĩnh (1549 CN)"},
        "creationDate": "Năm Kỷ Dậu 1549 CN (Lúc tác giả 80 tuổi)",
        "genreId": "literati",
        "genres": ["literati", "ink-wash", "landscape"],
        "genreLabel": "Văn nhân sơn thủy • Tế Văn thanh đạm (细文流派)",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本水墨)",
        "dimensions": "154.5 × 47.8 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích tuổi già tuyệt đỉnh (真迹) — Có lạc khoản đề tự năm 80 tuổi của Văn Trưng Minh.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "文待诏画，温润秀逸，苍茫简远。人品既高，画格自超。",
            "vi": "Họa của Văn Đãi chiếu ấm áp nhuận nhụy, tú dật thanh tao, thương mang giản viễn. Nhân phẩm đã cao thì họa cách tự khắc siêu phàm.",
            "author": "Vương Thế Trinh (王世贞)",
            "source": "Nghệ Uyển Chi Ngôn (艺苑卮言)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào những năm tháng thanh thản lúc đại thọ 80 tuổi tại Tô Châu, sau khi ông đã từ bỏ chức quan chốn kinh sư để về sống trọn vẹn với hoa cỏ vườn nhà.",
            "artistBiography": "Văn Trưng Minh thuở nhỏ chậm chạp nhưng kiên trì phi thường, khổ luyện thơ thư họa đến mức 'lão nhi ích tráng', trở thành ngọn cờ đầu của thẩm mỹ thanh nhã Giang Nam.",
            "artisticComposition": "Trục đứng hẹp và thanh thoát: tiền cảnh là hai gốc tùng già vặn xoắn gân guốc buông rủ; dòng suối trong vắt từ khe đá sâu tuôn chảy róc rách; đỉnh núi đá cao vút trầm lặng.",
            "brushwork": "Đỉnh cao của phong cách 'Tế Văn' (nét nhỏ thanh mảnh): đường nét như sợi tơ tằm nhưng dẻo dai như dây thép gai, từng chiếc kim tùng đều được tỉa tót với sự điềm tĩnh tuyệt đối.",
            "inkAndColor": "Mực nho trong vắt như nước giếng mùa thu, biến ảo nhẹ nhàng từ xám bạc đến đen nhánh, không một vương vấn bụi trần.",
            "spatialPerspective": "Không gian sâu lắng tĩnh mịch, tạo cảm giác một góc ẩn cư thanh vắng chỉ có tiếng suối reo và gió thổi qua kẽ lá thông.",
            "symbolism": "Cây tùng cổ thụ trăm năm vẫn xanh tươi bên dòng suối biểu trưng cho sinh mệnh trường thọ và phẩm cách kiên trung của bậc túc nho lão thành.",
            "philosophicalMeaning": "Triết lý 'Thanh tĩnh vô vi' của Đạo gia dung hòa với cốt cách tự tại của Nho gia: tâm hồn an định thì dẫu ở chốn thị thành cũng như ở chốn bồng lai.",
            "artisticLegacy": "Khuôn mẫu vàng cho phong cách hội họa văn nhân Tô Châu, đào tạo nên một thế hệ học trò đông đảo lan tỏa khắp cõi Giang Nam."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc đánh giá bức họa là tiêu bản hoàn mỹ nhất thể hiện cảnh giới 'Nhân Họa Câu Lão' (Người và tranh cùng đạt độ chín muồi) của Văn Trưng Minh.",
            "debatedIssues": "Nghiên cứu về phong cách chữ ký 'Hành Sơn' cuối đời của ông: nét chữ thanh mảnh nhưng nội lực hùng hậu không hề run rẩy ở tuổi bát tuần.",
            "comparativeContext": "So với sự thô mộc mạnh mẽ của Thẩm Chu, tranh Văn Trưng Minh tinh xảo, nhã nhặn và giàu nữ tính mỹ học hơn.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Văn Trưng Minh Thư Họa Đặc Triển'.",
                "Trần Cao Hoa, 'Minh Đại Ngô Môn Họa Phái Nghiên Cứu'."
            ]
        }
    },
    {
        "id": "shanlu-songsheng",
        "titleZh": "山路松声图",
        "pinyin": "Shān Lù Sōng Shēng Tú",
        "titleEn": "Whispering Pines on a Mountain Path",
        "titleVi": "Sơn Lộ Tùng Thanh Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "唐寅 (唐伯虎)",
            "pinyin": "Táng Yín",
            "nameVi": "Đường Dần (Đường Bá Hổ)",
            "alias": "Bá Hổ (伯虎), Lục Như Cư Sĩ (六如居士)",
            "dates": "1470–1524 CN",
            "era": "Minh triều (明朝)",
            "school": "Minh Tứ Gia • Dung Hợp Nam Bắc (南台北宗合流)",
            "bio": "Thiên tài trác tuyệt đất Tô Châu, đỗ Giải nguyên kỳ thi Hương nhưng bị vu oan trong khoa cử đồ trung, suốt đời sống bán tranh kiếm rượu, tự xưng 'Giang Nam đệ nhất phong lưu tài tử'."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh triều (đầu thế kỷ XVI CN)"},
        "creationDate": "Khoảng năm 1516 CN (Thời Minh Vũ Tông)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "court"],
        "genreLabel": "Sơn thủy văn nhân dung hợp Nam Bắc (南北宗融合)",
        "material": "Trục đứng lụa lớn, mực nho đạm sắc (绢本水墨设色)",
        "dimensions": "194.5 × 102.8 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích thần phẩm (真迹) — Có bài thơ tự đề và triện ấn 'Đào Hoa Am Chủ' của Đường Bá Hổ.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "治下泉声客到稀，开门但见野云飞。松风满耳清人骨，更着山头好雨微。",
            "vi": "Dưới núi tiếng suối reo khách đến hiếm hoi, Mở cửa chỉ thấy mây nội bay lượn. Gió thông đầy tai gột sạch xương trần, Lại thêm trên đỉnh núi mưa bụi bay nhẹ.",
            "author": "Đường Dần (唐寅)",
            "source": "Thơ đề trên bức Sơn Lộ Tùng Thanh Đồ"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào giai đoạn chín muồi của sự nghiệp sau những biến cố thăng trầm tủi nhục nơi quan trường, Đường Dần lui về Đào Hoa Am uống rượu vẽ tranh tìm sự giải thoát tâm linh.",
            "artistBiography": "Đường Dần có tài năng dung hợp phi thường: vừa học phong cách văn nhân nho nhã của Thẩm Chu, vừa kế thừa kỹ thuật viện thể sắc bén của Chu Thần và Lý Đường.",
            "artisticComposition": "Trục đứng hoành tráng: chân núi có cầu gỗ nơi ẩn sĩ chống gậy đứng lắng nghe tiếng thông reo; vách núi dựng đứng nhấp nhô theo phong cách Lý Đường; thác nước đổ trắng xóa xuyên qua rừng tùng cổ thụ.",
            "brushwork": "Sự kết hợp hoàn hảo giữa 'Tiểu phủ phách thuấn' sắc bén của viện thể Nam Tống và nét cọ tròn nhuần nhuyễn của văn nhân Tô Châu; tán thông vẽ mềm mại đối lập với đá sắc cạnh.",
            "inkAndColor": "Mực nho phong phú biến ảo, điểm sắc màu nâu đất và lam ngọc đạm bạc, tạo không gian rừng núi thanh u mát rượi.",
            "spatialPerspective": "Bố cục ba tầng chặt chẽ mở rộng chiều sâu theo phương thẳng đứng, gợi tả âm thanh tiếng thông reo rền vang khắp núi đồi.",
            "symbolism": "Tiếng gió thông (tùng thanh) biểu trưng cho khúc nhạc thanh cao của đại tự nhiên có khả năng gột rửa mọi uất ức bụi trần nơi cõi thế tục.",
            "philosophicalMeaning": "Tư tưởng Phật giáo 'Lục Như' (Như mộng, như huyễn, như bọt nước, như bóng ảnh, như sương, như chớp): coi vinh hoa phú quý như mây khói, tìm thấy chân giá trị trong sự tĩnh lặng của tâm hồn.",
            "artisticLegacy": "Đỉnh cao tuyệt mỹ của nghệ thuật Đường Dần, minh chứng cho sự dung hợp hoàn hảo giữa hai dòng chảy Nam Tông và Bắc Tông hội họa."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc suy tôn đây là bức tranh sơn thủy có giá trị nghệ thuật cao nhất còn lưu lại của Đường Bá Hổ.",
            "debatedIssues": "Khảo cứu sự ảnh hưởng của người thầy Chu Thần đối với kỹ thuật chém vát vách đá của Đường Dần trong bức họa này.",
            "comparativeContext": "So với những bức tranh sĩ nữ nổi tiếng của ông, tranh sơn thủy của Đường Dần đạt tới chiều sâu triết học và bi kịch nội tâm sâu sắc hơn nhiều.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Đường Dần Thư Họa Đặc Triển', 2014.",
                "Giang Triệu Thân (江兆申), 'Văn Trưng Minh Dữ Đường Dần Nghiên Cứu'."
            ]
        }
    },
    {
        "id": "hangong-chunxiao",
        "titleZh": "汉宫春晓图",
        "pinyin": "Hàn Gōng Chūn Xiǎo Tú",
        "titleEn": "Spring Morning in the Han Palace",
        "titleVi": "Hán Cung Xuân Hiểu Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "仇英",
            "pinyin": "Qiú Yīng",
            "nameVi": "Cừu Anh",
            "alias": "Thực Phụ (实父), Thập Châu (十洲)",
            "dates": "c. 1494–1552 CN",
            "era": "Minh triều (明朝)",
            "school": "Minh Tứ Gia • Công Bút Trọng Thái (青绿工笔大师)",
            "bio": "Họa gia xuất thân thợ sơn mài bình dân ở Thái Thương, nhờ thiên bẩm phi thường được Châu Thần và Văn Trưng Minh nâng đỡ, trở thành bậc thầy công bút thanh lục số một thời Minh."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh Gia Tĩnh (giữa thế kỷ XVI CN)"},
        "creationDate": "Khoảng năm 1530–1540 CN",
        "genreId": "court",
        "genres": ["court", "figure", "architectural"],
        "genreLabel": "Cung đình nhân vật • Giới họa thanh lục (重彩工笔人物)",
        "material": "Cuộn trục dài lụa khổng lồ, màu khoáng rực rỡ (绢本重彩设色)",
        "dimensions": "30.6 × 574.1 cm",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích tuyệt tác (真迹) — Quốc bảo trấn quán của Cố Cung Đài Bắc, kiệt tác công bút nhân vật dài nhất của thời Minh.",
        "image": "assets/images/academic/ming-forbidden-city.jpg",
        "featuredQuote": {
            "zh": "仇英字实父，号十洲。画师周臣，而发翠毫金，丝丹缕素，精丽艳逸，力齐古人。",
            "vi": "Cừu Anh tự Thực Phụ, hiệu Thập Châu. Học vẽ theo Chu Thần, mà phát tiết ngọc biếc dát vàng, tơ đỏ the trắng, tinh lệ diễm dật, sức sánh ngang cổ nhân.",
            "author": "Đổng Kỳ Xương (董其昌)",
            "source": "Họa Nhãn (画眼)"
        },
        "analysis": {
            "historicalBackground": "Mượn đề tài cung đình thời Tây Hán để miêu tả cuộc sống xa hoa thanh bình chốn hoàng gia, lồng ghép tích họa sư Mao Diên Thọ vẽ chân dung người đẹp Vương Chiêu Quân.",
            "artistBiography": "Cừu Anh từng dành hàng chục năm sống trong dinh thự các nhà sưu tập lớn như Hạng Nguyên Biện để lâm mô hàng trăm kiệt tác Tống, Đường, đạt đến kỹ thuật tả thực siêu phàm.",
            "artisticComposition": "Trường thiên đại tác cuộn dài gần 6 mét với hơn 115 nhân vật cung phi, thái giám, họa sư, thị vệ trong quần thể cung điện lầu gác nguy nga tráng lệ; cảnh chơi cờ, gảy đàn, khiêu vũ, tỉa hoa, vẽ chân dung diễn ra liên hoàn nhịp nhàng.",
            "brushwork": "Đỉnh cao tuyệt luân của nghệ thuật Giới họa và Công bút: các cột cung điện, hoa văn lan can ngọc, tà áo gấm the đều được tỉa tót bằng ngọn bút lông mảnh như tơ tằm mà không hề run rẩy.",
            "inkAndColor": "Vận dụng kỹ thuật 'Thanh lục trùng thái' (màu khoáng dày đặc): thạch thanh, thạch lục, chu sa, phấn ngọc và vàng dát rực rỡ lộng lẫy nhưng vẫn giữ được vẻ tao nhã cung đình.",
            "spatialPerspective": "Sử dụng phối cảnh chim bay (bird's-eye view) nhìn xuyên qua từng lớp sân trong tứ hợp viện, mở ra một thế giới cung điện tráng lệ nhiều chiều kích.",
            "symbolism": "Mùa xuân trong cung điện biểu trưng cho sự thịnh trị an khang của đế quốc; chi tiết họa sư vẽ tranh Chiêu Quân nhắc nhở về vẻ đẹp và sự trớ trêu của định mệnh.",
            "philosophicalMeaning": "Tôn vinh cuộc sống hoan lạc trần thế và sự trân trọng tột bậc đối với cái đẹp hình thể, nghệ thuật và văn hóa tao nhã cung đình.",
            "artisticLegacy": "Được xếp vào hàng 'Thập Đại Danh Họa' kinh điển của Trung Hoa, đỉnh cao không thể vượt qua của dòng tranh cung đình sĩ nữ thời Minh."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc định vị là một trong những cuộn tranh có kỹ thuật thể hiện tinh xảo và bảo quản hoàn hảo nhất thế giới.",
            "debatedIssues": "Cuộc phân tích về tính chất thương mại hóa thời Minh: Cừu Anh vẽ bức tranh này theo đơn đặt hàng của các cự phú sưu tập vùng Giang Nam, mở đường cho thị trường nghệ thuật chuyên nghiệp.",
            "comparativeContext": "So với 'Đao Luyện Đồ' thời Đường, tác phẩm của Cừu Anh phức tạp hơn về mặt không gian kiến trúc và số lượng nhân vật.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Cừu Anh Hán Cung Xuân Hiểu Đồ Triển Lãm Lục'.",
                "Dương Tân, 'Minh Đại Cung Đình Họa Dữ Cừu Anh'."
            ]
        }
    },
    {
        "id": "qiuxing-bajing",
        "titleZh": "秋兴八景图",
        "pinyin": "Qiū Xìng Bā Jǐng Tú",
        "titleEn": "Eight Scenes of Autumn Moods",
        "titleVi": "Thu Hưng Bát Cảnh Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "董其昌",
            "pinyin": "Dǒng Qíchāng",
            "nameVi": "Đổng Kỳ Xương",
            "alias": "Huyền Tể (玄宰), Tư Ông (思翁), Hương Quang Cư Sĩ",
            "dates": "1555–1636 CN",
            "era": "Minh triều (Minh mạt)",
            "school": "Hoa Đình Họa Phái (Nam Bắc Tông Luận Khai Tổ)",
            "bio": "Đại quan Nam Kinh Lễ bộ Thượng thư thời Minh mạt, nhà lý luận và giám định mỹ thuật có quyền lực tối thượng. Người đề xướng học thuyết 'Nam Bắc Tông Luận' (南北宗论) định hình lịch sử hội họa Trung Hoa suốt 400 năm."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明末", "nameVi": "Minh Vạn Lịch (1620 CN)"},
        "creationDate": "Năm Canh Thân 1620 CN (Thời Minh Thần Tông)",
        "genreId": "literati",
        "genres": ["literati", "ink-wash", "landscape"],
        "genreLabel": "Văn nhân sơn thủy tập sách • Nam Tông điển phạm",
        "material": "Tập sách (sách diệp) 8 bức, mực nho đạm sắc (纸本设色)",
        "dimensions": "Mỗi trang 53.8 × 31.7 cm (Gồm 8 bức cảnh thu)",
        "museum": "上海博物馆 (Bảo tàng Thượng Hải)",
        "attribution": "Chân tích thần phẩm tối cao (真迹) — Đỉnh cao thực hành lý luận của Đổng Kỳ Xương, lưu giữ tại Bảo tàng Thượng Hải.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "禅家有南北二宗，唐时始分；画之南北二宗，亦唐时分也。北宗则李思训父子，南宗则王摩诘始用渲晕，一变钩斫之法。",
            "vi": "Thiền gia có hai tông Nam Bắc, bắt đầu phân chia từ thời Đường; Hội họa cũng có hai tông Nam Bắc phân chia từ đời Đường vậy. Bắc Tông là cha con Lý Tư Huấn, Nam Tông do Vương Ma Cật khởi đầu dùng lối nhuộm loang, đổi mới hoàn toàn phép câu chém.",
            "author": "Đổng Kỳ Xương (董其昌)",
            "source": "Họa Thiền Thất Tùy Bút (画禅室随笔)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào mùa thu năm 1620 khi Đổng Kỳ Xương đi thuyền dọc theo dòng sông từ Kinh Khẩu đến Tây Hồ. Ông mượn cảnh sắc mùa thu Giang Nam để biểu hiện trực tiếp hệ thống lý luận Nam Tông của mình.",
            "artistBiography": "Đổng Kỳ Xương là nhân vật nắm quyền lực văn hóa thống trị triều Minh mạt, tôn sùng phong cách dã dật của Đổng Nguyên, Cự Nhiên, Hoàng Công Vọng và Nghê Toản.",
            "artisticComposition": "Gồm 8 trang sách cảnh thu độc lập: mỗi trang là một thử nghiệm trừu tượng hóa không gian tự nhiên thành các mảng hình học nhịp điệu tương tác lẫn nhau.",
            "brushwork": "Bút pháp biến ảo kỳ tài: ngọn bút tròn trịa (Trung phong), nét cọ mềm mại lướt nhẹ trên giấy xuyến, không chú trọng tả thực hình khối mà chú trọng cấu trúc thư pháp nội tại.",
            "inkAndColor": "Phối sắc đột phá: kết hợp màu mực nho đen tuyền với màu đỏ son nhạt, vàng thổ hoàng và xanh ngọc lam cực nhạt, tạo vẻ đẹp thanh quý thoát tục.",
            "spatialPerspective": "Bác bỏ hoàn toàn không gian ba chiều cơ học phương Tây (lúc bấy giờ bắt đầu du nhập qua các giáo sĩ phương Tây), tái khẳng định không gian ước lệ tự do của phương Đông.",
            "symbolism": "Mùa thu không còn là biểu tượng u buồn mà là sự chín muồi thanh thản của tâm thức văn nhân đạt tới độ viên mãn.",
            "philosophicalMeaning": "Đỉnh cao của sự dung hợp giữa Thiền tông Nam phái (Đốn ngộ) và mỹ học hội họa: vẽ tranh là hành vi ngộ Đạo trực tiếp, vượt qua mọi trói buộc hình tướng.",
            "artisticLegacy": "Tác phẩm mẫu mực đặt nền móng cho toàn bộ trường phái 'Tứ Vương' thời Thanh và định hình quy phạm thẩm mỹ cho mỹ thuật cổ điển Trung Hoa."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Thượng Hải coi đây là báu vật đại diện tiêu biểu nhất cho cuộc cách mạng ý niệm của Đổng Kỳ Xương trong hội họa thế kỷ XVII.",
            "debatedIssues": "Cuộc tranh luận lịch sử mỹ thuật về học thuyết 'Nam Bắc Tông': phê phán sự thiên vị của Đổng Kỳ Xương đối với Văn nhân họa và hạ thấp dòng họa viện tả thực.",
            "comparativeContext": "So với các họa gia cùng thời, nét cọ của Đổng Kỳ Xương mang tính trừu tượng và hiện đại tương đồng với các bậc thầy hội họa thế kỷ XX.",
            "academicCitations": [
                "Celia Carrington Riely, 'Tung Ch'i-ch'ang's Autumn Landscape Albums', 1992.",
                "Trần Truyền Tịch, 'Đổng Kỳ Xương Họa Luận Phê Phán'."
            ]
        }
    },
    {
        "id": "mo-putao",
        "titleZh": "墨葡萄图",
        "pinyin": "Mò Pú Tao Tú",
        "titleEn": "Grapes in Ink",
        "titleVi": "Mặc Bồ Đào Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "徐渭",
            "pinyin": "Xú Wèi",
            "nameVi": "Từ Vị",
            "alias": "Văn Trường (文长), Thanh Đằng Đạo Sĩ (青藤道士)",
            "dates": "1521–1593 CN",
            "era": "Minh triều (明朝)",
            "school": "Đại Tả Ý Hoa Điểu Khởi Tổ (大写意花鸟鼻祖)",
            "bio": "Thiên tài bi kịch số một thời Minh, thi nhân kiêm hý kịch gia đại tài. Tám lần thi Hương đều trượt, từng tự sát 9 lần, ngồi tù 7 năm vì ngộ sát; sáng tạo trường phái Đại Tả Ý cuồng bạo làm chấn động hậu thế."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh Vạn Lịch (cuối thế kỷ XVI CN)"},
        "creationDate": "Khoảng năm 1580–1590 CN",
        "genreId": "freehand",
        "genres": ["freehand", "flower-bird", "ink-wash"],
        "genreLabel": "Đại tả ý hoa điểu • Mực tóe cuồng phong (大写意泼墨)",
        "material": "Trục đứng giấy dài, mực nho thủy mặc (纸本水墨)",
        "dimensions": "165.7 × 64.5 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích thần phẩm (真迹) — Có bài thơ tự than khóc số phận bi tráng của Từ Văn Trường.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "半生落魄已成翁，独立书斋啸晚风。笔底明珠无处卖，闲抛闲掷野藤中。",
            "vi": "Nửa đời lận đận đã thành ông lão, Đứng trơ thư phòng gầm gào trước gió chiều. Hạt ngọc đáy bút không nơi bán, Đành vứt bỏ bừa bãi giữa đám dây leo hoang dại.",
            "author": "Từ Vị (徐渭)",
            "source": "Thơ đề trên bức Mặc Bồ Đào Đồ"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào những năm cuối đời nghèo đói cùng cực sau khi ra tù. Bức tranh là tiếng thét uất ức tột cùng của một bậc kỳ tài bị xã hội phong kiến chà đạp vứt bỏ.",
            "artistBiography": "Từ Vị là bậc thầy giải phóng sức mạnh của mực nho khỏi mọi khuôn phép lễ giáo, mở ra dòng chảy Đại Tả Ý cho Bát Đại Sơn Nhân và Tề Bạch Thạch noi theo.",
            "artisticComposition": "Bố cục thác đổ cuồng phong: cành nho hoang dại buông rủ từ đỉnh tranh đổ ập xuống như dòng thác cuồng nộ; những chùm nho đẫm mực rơi rụng tự do giữa không trung.",
            "brushwork": "Khai sáng kỹ thuật 'Phá mặc' (墨破) và 'Bát mặc' (vẩy mực) hoang dã: ngọn bút quét ngang bổ dọc cuồng loạn tựa đao kiếm múa trong cơn say, không câu nệ ranh giới hình thể.",
            "inkAndColor": "Nước và mực hòa quyện loang lổ trên mặt giấy xuyến chưa ráo: hạt nho mọng nước bóng loáng lấp lánh như những hạt ngọc trai đen giữa đám lá nho khô héo.",
            "spatialPerspective": "Không gian nghiêng ngả chao đảo, phản ánh trực tiếp trạng thái tâm thần cuồng loạn và nỗi bi thương cuộn trào trong huyết quản nghệ sĩ.",
            "symbolism": "Từng chùm nho mọng nước lấp lánh tựa hạt ngọc châu (minh châu) dưới ngòi bút biểu trưng cho tài năng trác tuyệt của kẻ sĩ nhưng không ai thấu hiểu, đành vứt bỏ chốn đồng hoang cỏ dại.",
            "philosophicalMeaning": "Tiếng kêu xé ruột của tự do cá nhân: nghệ thuật trở thành vũ khí giải tỏa nỗi đau sinh tồn và chống lại sự tàn bạo của hiện thực xã hội.",
            "artisticLegacy": "Khai sinh trường phái Đại Tả Ý vĩ đại của Trung Hoa. Tề Bạch Thạch từng kính cẩn thốt lên: 'Nguyện làm con chó trước cửa nhà Thanh Đằng (Từ Vị), dẫu bị xua đuổi cũng cam lòng!'."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh tôn vinh đây là bức họa hoa điểu có sức biểu cảm biểu hiện chủ nghĩa (expressionism) mạnh mẽ nhất trong toàn bộ lịch sử mỹ thuật cổ điển.",
            "debatedIssues": "Cuộc phân tích tâm lý học nghệ thuật hiện đại về mối liên hệ giữa chứng rối loạn lưỡng cực và năng lực sáng tạo bộc phát thiên tài của Từ Vị trong tác phẩm.",
            "comparativeContext": "So với Vincent van Gogh thời kỳ 'Đêm đầy sao', Từ Vị có sự đồng điệu kinh ngạc về nỗi đau khổ tâm thần và sức mạnh biểu cảm bùng nổ của nét vẽ.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Từ Vị Mặc Bồ Đào Đồ Dữ Đại Tả Ý Mỹ Học'.",
                "Viên Hoằng Đạo (袁宏道), 'Từ Văn Trường Truyền'."
            ]
        }
    },
    {
        "id": "huishan-chahui",
        "titleZh": "惠山茶会图",
        "pinyin": "Huì Shān Chá Huì Tú",
        "titleEn": "Tea Gathering at Mount Hui",
        "titleVi": "Huệ Sơn Trà Hội Đồ",
        "eraId": "ming",
        "artist": {
            "nameZh": "文徵明",
            "pinyin": "Wén Zhēngmíng",
            "nameVi": "Văn Trưng Minh",
            "alias": "Hành Sơn Cư Sĩ",
            "dates": "1470–1559 CN",
            "era": "Minh triều (Chính Đức)",
            "school": "Ngô Môn Văn Nhân Trà Đạo (茶道文化经典)",
            "bio": "Bậc thầy thể hiện phong vị thanh đạm tao nhã của văn hóa Trà đạo và tao đàn Giang Nam thời Minh."
        },
        "dynasty": {"eraId": "ming", "nameZh": "明朝", "nameVi": "Minh Chính Đức (1518 CN)"},
        "creationDate": "Năm Mậu Dần 1518 CN",
        "genreId": "literati",
        "genres": ["literati", "figure", "landscape"],
        "genreLabel": "Văn nhân nhã tập • Trà đạo sơn thủy (茶事文人画)",
        "material": "Quyển trục lụa, màu khoáng đạm sắc (绢本设色)",
        "dimensions": "21.9 × 67 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích bảo vật (真迹) — Lưu giữ nguyên vẹn tại Bảo tàng Cố Cung Bắc Kinh.",
        "image": "assets/images/academic/suzhou-garden.jpg",
        "featuredQuote": {
            "zh": "汲惠山泉，烹旗枪茶。高士雅集，松下清谈，此文人第一快事也。",
            "vi": "Múc nước suối Huệ Sơn, đun pha trà búp Kỳ Thương. Bậc cao sĩ họp mặt tao nhã, dưới tán tùng thanh đàm, ấy là điều sướng khoái đệ nhất của bậc văn nhân vậy.",
            "author": "Văn Trưng Minh (文徵明)",
            "source": "Đề bạt Huệ Sơn Trà Hội Đồ"
        },
        "analysis": {
            "historicalBackground": "Ghi lại cuộc hội ngộ trà đạo tao nhã vào ngày tiết Thanh Minh năm 1518 của Văn Trưng Minh cùng các tri kỷ tại giếng nước 'Thiên hạ đệ nhị tuyền' trên núi Huệ Sơn ở Vô Tích.",
            "artistBiography": "Văn Trưng Minh là người am tường tường tận nghệ thuật pha trà và nghi thức thưởng ngoạn của tầng lớp sĩ đại phu Tô Châu thời kỳ cực thịnh.",
            "artisticComposition": "Cuộn ngang thanh thoát: giếng đá cổ Huệ Sơn nằm dưới chân núi; đình trà có người nhóm bếp đun nước sôi; dưới bóng thông râm mát các văn nhân ngồi đàm đạo ngâm thơ.",
            "brushwork": "Nét cọ công bút kết hợp tả ý tinh vi thanh nhã: cành thông xanh mướt, trang phục sĩ phu trắng tinh tươm buông rủ thanh tú.",
            "inkAndColor": "Phối sắc lục nhạt, nâu son và mực đen trong trẻo, toát lên hương thơm thoang thoảng của búp trà tươi và không khí trong lành của tiết xuân.",
            "spatialPerspective": "Không gian thân mật ấm cúng (intimate space), kéo người xem vào bàn trà thanh đàm cùng các bậc hiền triết.",
            "symbolism": "Bát nước trà thanh khiết múc từ nguồn suối mát biểu trưng cho tình bằng hữu trong sạch, không màng danh lợi ô trọc.",
            "philosophicalMeaning": "Hòa quyện giữa Trà đạo và Thiền đạo: trong chén trà nhỏ nhoi hàm chứa trọn vẹn sự tĩnh lặng của vũ trụ và niềm an lạc hiện tiền.",
            "artisticLegacy": "Tác phẩm kinh điển số một về lịch sử văn hóa Trà đạo Trung Hoa, tư liệu quý giá về dụng cụ pha trà thời Minh."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh xác định đây là di sản nghệ thuật trà sự có giá trị văn hóa sử cao nhất thời trung kỳ nhà Minh.",
            "debatedIssues": "Đối chiếu danh tính các nhân vật trong tranh với các tư liệu thi tập của nhóm văn nhân Tô Châu thời Chính Đức.",
            "comparativeContext": "So với các bức tranh tiệc tùng xa hoa thời Đường, tranh trà hội của Văn Trưng Minh đại diện cho sự thanh lọc tinh thần tối thượng của tầng lớp trí thức.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Văn Trưng Minh dữ Minh Đại Trà Sự Văn Hóa'.",
                "Trịnh Khiêm, 'Trung Quốc Trà Đạo Họa Thư'."
            ]
        }
    },

    # -------------------------------------------------------------------------
    # ERA 6: QING DYNASTY (清朝)
    # -------------------------------------------------------------------------
    {
        "id": "luomu-qiuse",
        "titleZh": "落木秋色图",
        "pinyin": "Luò Mù Qiū Sè Tú",
        "titleEn": "Autumn Colors of Falling Leaves",
        "titleVi": "Lạc Mộc Thu Sắc Đồ",
        "eraId": "qing",
        "artist": {
            "nameZh": "王时敏",
            "pinyin": "Wáng Shímǐn",
            "nameVi": "Vương Thời Mẫn",
            "alias": "Tốn Chi (逊之), Yên Khách (烟客), Tây Lư lão nhân",
            "dates": "1592–1680 CN",
            "era": "Minh mạt Thanh sơ",
            "school": "Thanh Đại Lục Gia • Tứ Vương Chi Thủ (四王之首)",
            "bio": "Đại danh họa đứng đầu nhóm 'Tứ Vương' phái Chính Thống triều Thanh, học trò chân truyền đắc ý nhất của Đổng Kỳ Xương, người định hình trường phái hội họa viện thể cung đình nhà Thanh."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清初", "nameVi": "Thanh Khang Hy (1666 CN)"},
        "creationDate": "Năm Bính Ngọ 1666 CN",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "court"],
        "genreLabel": "Chính thống phái sơn thủy • Điển phạm Tứ Vương (娄东画派)",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本水墨设色)",
        "dimensions": "103.5 × 49.3 cm",
        "museum": "上海博物馆 (Bảo tàng Thượng Hải)",
        "attribution": "Chân tích bảo chứng mẫu mực (真迹) — Có lạc khoản của Vương Thời Mẫn năm 75 tuổi.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "画学正宗，自董巨、二米、元四家，至董宗伯而大成。奉常先生接其衣钵，规矩严明，一代正印。",
            "vi": "Họa học chính tông, từ Đổng–Cự, Nhị Mễ, Nguyên Tứ Gia, đến Đổng Tông Bá (Đổng Kỳ Xương) mà đại thành. Phụng Thường tiên sinh (Vương Thời Mẫn) tiếp nhận y bát, quy củ nghiêm minh, là quả ấn chính thống của một thời đại.",
            "author": "Vương Huy (王翚)",
            "source": "Thanh Khê Họa Bạt (清溪画跋)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ đầu triều Khang Hy, khi xã hội dần ổn định sau biến cố triều đại thay đổi, giới sĩ đại phu tìm kiếm một trật tự thẩm mỹ quy củ, nghiêm cẩn để củng cố nền tảng văn hóa chính thống.",
            "artistBiography": "Vương Thời Mẫn xuất thân gia đình thế tộc quyền quý Thái Thương, giữ gìn trọn vẹn gia phong học thuật và bộ sưu tập tranh cổ của Đổng Kỳ Xương.",
            "artisticComposition": "Bố cục trục đứng nghiêm cẩn mẫu mực: chân núi có rặng cây rụng lá mùa thu soi bóng dòng suối; sườn đồi thoai thoải uốn lượn; đỉnh núi xếp tầng lớp lớp theo đúng quy tắc Hoàng Công Vọng.",
            "brushwork": "Bút pháp viên đôn, câu tuyến và thuấn vân tỉ mỉ từng nét; nét cọ dày dặn, đôn hậu, không để lộ bất kỳ sự phóng túng vội vã nào.",
            "inkAndColor": "Phối sắc nhã nhặn ôn hòa: sắc xám tro của mực nho hòa với màu nâu son nhạt của lá thu, tạo không khí mùa thu yên ả thanh bình.",
            "spatialPerspective": "Tuân thủ chặt chẽ phép tắc Tam viễn cổ điển, lớp lang trật tự phân minh, mang lại cảm giác an định tuyệt đối.",
            "symbolism": "Rừng cây rụng lá nhưng cành nhánh vững chãi tượng trưng cho sự trường tồn của văn hóa đạo thống dẫu qua bao cuộc hưng phế dâu bể.",
            "philosophicalMeaning": "Đề cao tinh thần Nho gia 'Ôn nhu đôn hậu' và sự tôn sùng tuyệt đối đối với di sản cổ nhân: sáng tạo trong khuôn khổ của quy củ thánh hiền.",
            "artisticLegacy": "Khai sinh họa phái Lâu Đông (Lâu Đông phái), chi phối tuyệt đối gu thẩm mỹ của hoàng gia và viện họa triều đình nhà Thanh suốt hai thế kỷ."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Thượng Hải tôn vinh đây là tác phẩm mẫu mực nhất thể hiện kỹ năng dung hợp Hoàng Công Vọng của Vương Thời Mẫn.",
            "debatedIssues": "Cuộc tranh luận hiện đại về phái Tứ Vương: từng bị phong trào Ngũ Tứ phê phán là thủ cựu, nhưng mỹ thuật học đương đại đã phục hồi đánh giá cao tính chuẩn mực cấu trúc của họ.",
            "comparativeContext": "Đối lập hoàn toàn với sự nổi loạn phá cách của Thạch Đào, tranh Vương Thời Mẫn đại diện cho sự bảo tồn trật tự kinh điển.",
            "academicCitations": [
                "Bảo tàng Thượng Hải, 'Thanh Sơ Tứ Vương Họa Triển Đồ Lục'.",
                "Trần Truyền Tịch, 'Thanh Đại Lâu Đông Họa Phái Phê Bình'."
            ]
        }
    },
    {
        "id": "kangxi-nanxun",
        "titleZh": "康熙南巡图",
        "pinyin": "Kāng Xī Nán Xún Tú",
        "titleEn": "The Kangxi Emperor's Southern Inspection Tour",
        "titleVi": "Khang Hy Nam Tuần Đồ",
        "eraId": "qing",
        "artist": {
            "nameZh": "王翚 (领衔主笔)",
            "pinyin": "Wáng Huī",
            "nameVi": "Vương Huy (Chủ biên)",
            "alias": "Thạch Cốc (石谷), Canh Khê Tiêu Khách, Thanh Khê Hậu Nhân",
            "dates": "1632–1717 CN",
            "era": "Thanh triều (Khang Hy)",
            "school": "Ngu Sơn Họa Phái (Tứ Vương Chính Thống)",
            "bio": "Họa gia kiệt xuất trong nhóm Tứ Vương, người Thường Thục. Được tôn là 'Họa thánh triều Thanh', chủ biên bức đại tác cung đình đồ sộ nhất lịch sử vương triều Khang Hy."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清朝", "nameVi": "Thanh Khang Hy (1691–1698 CN)"},
        "creationDate": "Năm 1691–1698 CN (Mất 7 năm hoàn thành)",
        "genreId": "court",
        "genres": ["court", "landscape", "architectural"],
        "genreLabel": "Đại hình cung đình ký thực • Cự quyển lịch sử (巨幅历史长卷)",
        "material": "Bộ cuộn lụa khổng lồ 12 quyển, màu khoáng rực rỡ (绢本设色)",
        "dimensions": "Mỗi quyển cao 67.8 cm, dài từ 14 đến 26 mét (Tổng chiều dài hơn 200 mét)",
        "museum": "故宫博物院 (Bắc Kinh), Musée Guimet (Paris), The Met (New York)",
        "attribution": "Cung đình ngự chế bảo vật (御制真迹) — Đích thân Khang Hy hoàng đế ngự ban 4 chữ 'Sơn Xuyên Quang Huy' (山川光辉) khen ngợi Vương Huy.",
        "image": "assets/images/academic/qing-summer-palace.jpg",
        "featuredQuote": {
            "zh": "以元人笔墨，运宋人丘壑，而泽以唐人气韵，乃为大成。",
            "vi": "Lấy bút mực của người đời Nguyên, vận dụng đồi gò non nước của người đời Tống, mà thấm đượm khí vận của người đời Đường, ấy mới thực là bực đại thành.",
            "author": "Vương Huy (王翚)",
            "source": "Thanh Khê Họa Bạt (清溪画跋)"
        },
        "analysis": {
            "historicalBackground": "Ghi lại chuyến tuần du phương Nam lịch sử lần thứ hai của hoàng đế Khang Hy năm 1689 nhằm thị sát đê điều sông Hoàng Hà, kinh tế Giang Nam và thu phục lòng sĩ phu phương Nam.",
            "artistBiography": "Vương Huy là bậc thầy 'Tập đại thành' có năng lực sao chép và tổng hợp bút pháp của tất cả các danh gia từ Đường, Tống đến Nguyên, được triều đình tuyển chọn làm tổng công trình sư bức đại họa.",
            "artisticComposition": "Bộ tác phẩm gồm 12 cuộn cuộn dài tổng cộng hơn 200 mét trải dài từ Bắc Kinh qua Sơn Đông, sông Hoàng Hà, Dương Châu, Tô Châu, Hàng Châu đến Thiệu Hưng; đặc biệt quyển thứ ba tả cảnh núi Thái Sơn và quyển thứ bảy tả cảnh phồn hoa Tô Châu.",
            "brushwork": "Sự kết hợp hoàn hảo giữa Giới họa kiến trúc chuẩn xác đến từng mái ngói, lối vẽ chân dung hàng vạn nhân vật sống động và bút pháp sơn thủy hùng vĩ.",
            "inkAndColor": "Màu khoáng rực rỡ lộng lẫy theo phong cách Thanh lục kết hợp mực nho, tái hiện non sông Trung Hoa tươi đẹp như gấm hoa.",
            "spatialPerspective": "Trường thiên phối cảnh tán điểm vĩ đại nhất lịch sử, kết nối hàng nghìn dặm bờ cõi giang sơn vào một dải lụa liên tục.",
            "symbolism": "Đoàn ngự giá của hoàng đế đi tới đâu là mưa thuận gió hòa, trăm họ hoan hỉ nghênh đón biểu trưng cho sự quy phục của muôn dân trước thiên mệnh Đại Thanh.",
            "philosophicalMeaning": "Tuyên ngôn vương quyền và sự thống nhất địa lý, chính trị và văn hóa của một đế quốc đa dân tộc thịnh trị thời Khang Càn.",
            "artisticLegacy": "Đỉnh cao tuyệt đỉnh của thể loại tranh ký thực lịch sử cung đình cổ đại, mẫu mực cho các bộ tranh Nam tuần thời Càn Long noi theo."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Là một trong những công trình mỹ thuật quy mô lớn nhất thế giới, tư liệu độc nhất vô nhị về địa lý, thủy lợi, kiến trúc và phong tục thế kỷ XVII.",
            "debatedIssues": "Lịch sử lưu lạc của 12 cuộn tranh: bị liên quân tám nước cướp phá năm 1900, hiện các cuộn phân tán tại Bảo tàng Cố Cung Bắc Kinh, Bảo tàng Guimet (Pháp), Bảo tàng Met (Mỹ) và các bộ sưu tập tư nhân.",
            "comparativeContext": "So với 'Thanh Minh Thượng Hà Đồ' (thời Tống), bức tranh này có quy mô địa lý và độ dài gấp hàng chục lần.",
            "academicCitations": [
                "Maxwell K. Hearn, 'The Kangxi Emperor's Southern Inspection Tour', The Metropolitan Museum of Art.",
                "Cố Cung Bác Vật Viện, 'Thanh Đại Cung Đình Họa Viện Dữ Khang Hy Nam Tuần Đồ'."
            ]
        }
    },
    {
        "id": "wanhe-songfeng-qing",
        "titleZh": "万壑松风图",
        "pinyin": "Wàn Hè Sōng Fēng Tú",
        "titleEn": "Wind in Pines Among a Myriad Valleys (Qing Dynasty)",
        "titleVi": "Vạn Hác Tùng Phong Đồ (Thanh triều)",
        "eraId": "qing",
        "artist": {
            "nameZh": "王原祁",
            "pinyin": "Wáng Yuánqí",
            "nameVi": "Vương Nguyên Kỳ",
            "alias": "Mậu Kinh (茂京), Lộc Đài (麓台)",
            "dates": "1642–1715 CN",
            "era": "Thanh triều (Khang Hy)",
            "school": "Lâu Đông Họa Phái Cốt Trụ (Tứ Vương Chính Thống)",
            "bio": "Cháu nội của Vương Thời Mẫn, đỗ Tiến sĩ, làm quan tới Hộ bộ Tả thị lang kiêm Giám đốc Họa viện thời Khang Hy. Người đưa lý luận cấu trúc cọ vẽ 'Bút đoạn ý liên' lên đỉnh cao hình thức trừu tượng."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清朝", "nameVi": "Thanh Khang Hy (đầu thế kỷ XVIII CN)"},
        "creationDate": "Khoảng năm 1705–1710 CN",
        "genreId": "landscape",
        "genres": ["landscape", "court", "literati"],
        "genreLabel": "Sơn thủy cấu trúc trừu tượng • Lâu Đông chính tông",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本设色)",
        "dimensions": "105.8 × 52.4 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích bảo vật hoàng cung (真迹) — Có ngự phê bảo chứng của hoàng đế Khang Hy.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "画中龙脉，开合起伏，全在用笔。熟而不甜，生而兼熟，乃得石涛所不能至之妙。",
            "vi": "Long mạch trong tranh, mở đóng nhấp nhô, trọn vẹn nằm nơi cách dùng bút. Chín thuần mà không ngọt lịm, sống sượng mà kiêm thuần thục, ấy mới đắc được điều huyền diệu mà Thạch Đào không thể với tới.",
            "author": "Vương Nguyên Kỳ (王原祁)",
            "source": "Vũ Cương Tạp Trí (雨窗杂录)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ Khang Hy thịnh trị, khi Vương Nguyên Kỳ giữ chức vụ cao trong triều đình, hàng ngày cùng hoàng đế đàm đạo nghệ thuật và biên soạn bộ đại từ điển 'Bội Văn Trai Thư Họa Phổ'.",
            "artistBiography": "Lộc Đài tiên sinh là nhà cấu trúc luận vĩ đại của hội họa cổ điển phương Đông, coi việc vẽ tranh như việc sắp đặt những viên gạch hình khối theo quy luật long mạch vũ trụ.",
            "artisticComposition": "Khác với Lý Đường thời Tống, Vương Nguyên Kỳ tái cấu trúc lại đề tài 'Vạn hác tùng phong': các khối đá được phân mảnh thành những khối lập phương nhỏ chồng chất lên nhau theo quy luật 'Khai - Hợp - Khởi - Phục'.",
            "brushwork": "Kỹ thuật cọ vẽ độc nhất vô nhị: dùng bút khô (khát bút) chà xát nhiều lớp, nét bút ngắt quãng nhưng ý tứ liền mạch ('Bút đoạn ý liên'), lớp sau đè lên lớp trước tạo độ đanh chắc như đá hóa thạch.",
            "inkAndColor": "Kỹ thuật 'Sắc trung hữu mặc, mặc trung hữu sắc': pha màu hổ phách, thổ hoàng quyện lẫn mực nho, chưng cất màu sắc thành một thể ánh sáng lung linh trầm ấm.",
            "spatialPerspective": "Bác bỏ lối phối cảnh tả thực thông thường, tạo dựng một không gian kiến trúc trừu tượng thuần khiết từ nội tâm.",
            "symbolism": "Thế núi long mạch cuồn cuộn không dứt biểu trưng cho mạch sống vững bền trường cửu của quốc thống và đạo học.",
            "philosophicalMeaning": "Đạt tới triết lý Chu Dịch âm dương biến hóa: vạn vật thiên biến vạn hóa nhưng không bao giờ rời khỏi trục trật tự cốt lõi của Đạo.",
            "artisticLegacy": "Được các sử gia nghệ thuật hiện đại phương Tây so sánh với Paul Cézanne (cha đẻ hội họa hiện đại) về tư duy phân tích hình khối cấu trúc không gian."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh định danh là tác phẩm thể hiện tư duy lý luận sâu sắc nhất của Vương Nguyên Kỳ.",
            "debatedIssues": "Sự tương đồng kinh ngạc giữa học thuyết 'Long mạch' của Vương Nguyên Kỳ và mỹ học cấu trúc lập thể (Cubism) phương Tây thế kỷ XX.",
            "comparativeContext": "So với 'Vạn Hác Tùng Phong Đồ' của Lý Đường thời Tống (hùng tráng kịch tính), tranh của Vương Nguyên Kỳ điềm đạm, thuần lý trí và mang tính cấu trúc triết học.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Vương Nguyên Kỳ Lâu Đông Họa Phái Chuyên Khảo'.",
                "James Cahill, 'The Painter's Practice: How Artists Lived and Worked in Traditional China'."
            ]
        }
    },
    {
        "id": "huaiyang-jieqiu",
        "titleZh": "淮扬洁秋图",
        "pinyin": "Huái Yáng Jié Qiū Tú",
        "titleEn": "Clean Autumn in Huaiyang",
        "titleVi": "Hoài Dương Khiết Thu Đồ",
        "eraId": "qing",
        "artist": {
            "nameZh": "石涛",
            "pinyin": "Shí Tāo",
            "nameVi": "Thạch Đào",
            "alias": "Khổ Qua Hòa Thượng (苦瓜和尚), Đại Thiên Căn, Thanh Tương lão nhân",
            "dates": "1642–1707 CN",
            "era": "Thanh triều (Thanh sơ)",
            "school": "Thanh Sơ Tứ Tăng • Cách Tân Chi Tổ (四僧之冠)",
            "bio": "Hậu duệ hoàng tộc nhà Minh mất nước, xuất gia làm sư chu du khắp danh sơn, tác giả trước tác mỹ học thiên tài 'Khổ Qua Hòa Thượng Họa Ngữ Lục' (苦瓜和尚画语录) với học thuyết 'Nhất họa luận' (一画论) chấn động thiên cổ."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清朝", "nameVi": "Thanh Khang Hy (1705 CN)"},
        "creationDate": "Năm Ất Dậu 1705 CN (Những năm cuối đời ở Dương Châu)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "freehand"],
        "genreLabel": "Tả ý sơn thủy cách tân • Nhất họa luận (一画论神品)",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本水墨设色)",
        "dimensions": "89 × 57 cm",
        "museum": "南京博物院 (Bảo tàng Nam Kinh)",
        "attribution": "Chân tích đỉnh cao cách tân (真迹) — Quốc bảo trấn quán của Bảo tàng Nam Kinh.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "一画者，众有之本，万象之根。古人未立法之前，不知古人法何法？我自用我法！",
            "vi": "Một nét vẽ (Nhất họa) là cội gốc của muôn cái có, là rễ rễ của vạn hình tượng. Trước khi cổ nhân lập ra phép tắc, chẳng hay cổ nhân theo phép tắc của ai? Ta tự dùng phép tắc của chính ta!",
            "author": "Thạch Đào (石涛)",
            "source": "Khổ Qua Hòa Thượng Họa Ngữ Lục (苦瓜和尚画语录)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào những năm tháng cuối đời khi Thạch Đào định cư tại Dương Châu, gột rửa mọi uất ức mất nước của dòng dõi hoàng tộc Minh triều để hòa nhập vào cõi sáng tạo tự do tuyệt đối.",
            "artistBiography": "Thạch Đào là thiên tài cách tân vĩ đại nhất triều Thanh, dũng cảm đập tan gông cùm sao chép cổ nhân của phái Chính thống, đề xướng châm ngôn bất hủ: 'Bút mặc đương tùy thời đại' (Bút mực phải thuận theo thời đại).",
            "artisticComposition": "Bố cục táo bạo phi quy ước: ngọn núi nghiêng ngả như chuyển động trong gió thu; một dòng sông trong vắt uốn lượn chia cắt không gian; ngôi nhà tranh đơn sơ và chiếc cầu nhỏ nối liền cõi thực và cõi mộng.",
            "brushwork": "Thực hành hoàn hảo học thuyết 'Nhất họa': nhát cọ biến ảo khôn lường từ khô sang ướt, từ tròn sang vẹt, chấm mực tóe tung như mưa rào mùa thu làm rung chuyển mặt giấy xuyến.",
            "inkAndColor": "Phối sắc kỳ ảo tân kỳ: dùng màu thạch lục và son tươi chấm phá trên nền mực đen tuyền ẩm ướt, tạo nên vẻ đẹp mùa thu tươi mới, thanh sạch ('Khiết thu') chưa từng thấy trong tranh cổ.",
            "spatialPerspective": "Không gian động (dynamic perspective), người xem cảm nhận rõ luồng gió thu mát lạnh và hơi thở phóng khoáng cuồn cuộn trong từng tấc đất ngọn cây.",
            "symbolism": "Mùa thu thanh sạch không một vết nhơ biểu trưng cho sự giải thoát thanh thản của tâm hồn sau bao kiếp nạn lưu lạc hồng trần.",
            "philosophicalMeaning": "Đỉnh cao của triết lý Thiền tông kết hợp Đạo giáo: con người là trung tâm của hành vi sáng tạo, vũ trụ tái sinh trong từng nhát cọ hạ xuống mặt giấy.",
            "artisticLegacy": "Khai sơn phá thạch cho toàn bộ phong trào cách tân mỹ thuật cận hiện đại Trung Hoa, nguồn cảm hứng bất tận cho Tề Bạch Thạch, Hoàng Tân Hồng, Trương Đại Thiên."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Nam Kinh coi đây là tác phẩm hoàn mỹ nhất chứng minh cho sự thống nhất tuyệt đối giữa lý luận 'Họa Ngữ Lục' và thực tiễn của Thạch Đào.",
            "debatedIssues": "Cuộc tranh luận về mối quan hệ giữa Thạch Đào và hoàng đế Khang Hy (ông từng hai lần nghênh kiến Khang Hy tại Dương Châu nhưng cuối đời lại rút về giữ khí tiết ẩn sĩ).",
            "comparativeContext": "So với sự lạnh lùng cô tịch của Bát Đại Sơn Nhân, tranh Thạch Đào ấm áp, tràn trề sinh lực và tha thiết yêu mến sự sống trần gian hơn.",
            "academicCitations": [
                "Bảo tàng Nam Kinh, 'Thạch Đào Sơn Thủy Thần Phẩm Triển Lãm Đồ Lục'.",
                "Chu Lương Chí (朱良志), 'Thạch Đào Nghiên Cứu', Bắc Kinh Đại Học Xuất Bản Xã."
            ]
        }
    },
    {
        "id": "kongque-zhushi",
        "titleZh": "孔雀竹石图",
        "pinyin": "Kǒng Què Zhú Shí Tú",
        "titleEn": "Peacocks, Bamboo and Rocks",
        "titleVi": "Khổng Tước Trúc Thạch Đồ",
        "eraId": "qing",
        "artist": {
            "nameZh": "八大山人 (朱耷)",
            "pinyin": "Bā Dà Shān Rén (Zhū Dā)",
            "nameVi": "Bát Đại Sơn Nhân (Chu Đáp)",
            "alias": "Tuyết Náp (雪个), Nhân Ốc, Bát Đại Sơn Nhân",
            "dates": "1626–1705 CN",
            "era": "Thanh triều (Thanh sơ)",
            "school": "Thanh Sơ Tứ Tăng • Đại Tả Ý Đỉnh Cao",
            "bio": "Hậu duệ Ninh Vương Chu Quyền (nhà Minh), sau khi triều Minh sụp đổ giả câm giả điên xuất gia làm sư lánh nạn. Chữ ký 'Bát Đại Sơn Nhân' viết liền nhìn như hai chữ 'Khốc chi' (Khóc than) hoặc 'Tiếu chi' (Cười cợt)."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清朝", "nameVi": "Thanh Khang Hy (1690 CN)"},
        "creationDate": "Năm Canh Ngọ 1690 CN",
        "genreId": "freehand",
        "genres": ["freehand", "flower-bird", "ink-wash"],
        "genreLabel": "Đại tả ý trào phúng • Lãnh nhãn khán thế giới",
        "material": "Trục đứng giấy dài, mực nho thủy mặc (纸本水墨)",
        "dimensions": "153.5 × 79 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích độc bảo (真迹) — Lưu giữ tại Bảo tàng Cố Cung Bắc Kinh, kiệt tác trào phúng số một của Chu Đáp.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "墨点无多泪点多，山河仍是旧山河。横流乱世分明在，何必开颜向客歌？",
            "vi": "Mực điểm không nhiều lệ điểm nhiều, Non sông vẫn đó bóng tiêu điều. Loạn lạc ngang trời rành rành đó, Cần chi cười cợt hát vui tai?",
            "author": "Bát Đại Sơn Nhân (朱耷)",
            "source": "Đề Họa Thi (题画诗)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ triều Thanh đã củng cố xong nền thống trị, các hàng thần Hán tộc đua nhau tranh giành chiếc mũ lông công (Khổng tước linh) do hoàng đế Mãn Thanh ban thưởng, Chu Đáp vẽ bức họa để mỉa mai cay độc thế thái nhân tình.",
            "artistBiography": "Chu Đáp sống cuộc đời u uất cùng cực, vẽ chim muông cá nước con nào cũng mang đôi mắt tròn xoe trắng trợn trợn ngược lên trời (Bạch nhãn khán thiên) biểu hiện sự khinh miệt tột độ đối với thực tại.",
            "artisticComposition": "Bố cục hiểm hóc kỳ quái: một tảng đá khổng lồ trên to dưới nhỏ chênh vênh như sắp đổ sụp; trên mỏm đá có hai con chim công lông đuôi xơ xác trơ trọi chỉ có ba chiếc lông công cắm lơ thơ; bên cạnh là vài cành tre khẳng khiu.",
            "brushwork": "Đỉnh cao tuyệt đỉnh của kỹ thuật cọ vẽ tinh giản: nét bút như đao kiếm chém gọt, dùng ngọn bút cùn tròn trịa nhưng lạnh lùng sắc bén khôn cùng.",
            "inkAndColor": "Mực nho khô đạm tuyệt đối, từng vết mực loang như những giọt nước mắt khô cằn khóc than cho số phận non sông mất nước.",
            "spatialPerspective": "Thế cân bằng động bất an: tảng đá chực đổ tạo cảm giác nguy nan tột cùng, thách thức mọi quy luật tĩnh học cổ điển.",
            "symbolism": "Hai con chim công xấu xí đứng run rẩy trên mỏm đá chênh vênh biểu trưng cho những kẻ xu nịnh ham danh mũ lông công của triều đình mới nhưng số phận bấp bênh như trứng để đầu đẳng.",
            "philosophicalMeaning": "Thái độ ngạo nghễ và bi tráng của nhân cách: thà làm kẻ điên cuồng cô độc đứng ngoài lề xã hội chứ quyết không chịu quỳ gối thỏa hiệp với bất công bạo quyền.",
            "artisticLegacy": "Một trong những đỉnh cao chấn động nhất của chủ nghĩa biểu hiện tả ý phương Đông, ảnh hưởng trực tiếp và quyết định đến phong cách của Tề Bạch Thạch và Phan Thiên Thọ."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh tôn vinh đây là kiệt tác hoa điểu mang tính phê phán chính trị xã hội gay gắt và sâu sắc nhất trong lịch sử hội họa Trung Hoa.",
            "debatedIssues": "Giải mã bài thơ đề hiểm hóc góc trên bức tranh: ẩn giấu nhiều chữ đố về sự tha hóa của tầng lớp trí thức quy hàng nhà Thanh.",
            "comparativeContext": "So với chim công hoa lệ phú quý của Họa viện Tống triều, chim công của Chu Đáp là sự lật đổ thẩm mỹ toàn diện, biến cái đẹp diêm dúa thành nỗi bi thương trần trụi.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Bát Đại Sơn Nhân Thư Họa Nghiên Cứu', 2006.",
                "Vương Phương Vũ (Wang Fangyu), 'Master of the Lotus Garden: The Life and Art of Bada Shanren'."
            ]
        }
    },
    {
        "id": "zhushi-tu",
        "titleZh": "竹石图",
        "pinyin": "Zhú Shí Tú",
        "titleEn": "Bamboo and Rocks",
        "titleVi": "Trúc Thạch Đồ",
        "eraId": "qing",
        "artist": {
            "nameZh": "郑板桥 (郑燮)",
            "pinyin": "Zhèng Bǎnqiáo (Zhèng Xiè)",
            "nameVi": "Trịnh Bản Kiều (Trịnh Tiếp)",
            "alias": "Bản Kiều Đạo Nhân (板桥道人)",
            "dates": "1693–1765 CN",
            "era": "Thanh triều (Càn Long)",
            "school": "Dương Châu Bát Quái Chi Thủ (扬州八怪之首)",
            "bio": "Đại danh họa đứng đầu Dương Châu Bát Quái, làm quan tri huyện thanh liêm vì cứu đói cho dân mà bị cách chức, về Dương Châu bán tranh mưu sinh. Nổi tiếng với thư pháp 'Lục phân bán thư' và tài vẽ trúc đá tuyệt thế."
        },
        "dynasty": {"eraId": "qing", "nameZh": "清朝", "nameVi": "Thanh Càn Long (thế kỷ XVIII CN)"},
        "creationDate": "Khoảng năm 1750–1760 CN",
        "genreId": "literati",
        "genres": ["literati", "ink-wash", "freehand"],
        "genreLabel": "Văn nhân mặc trúc • Khí tiết quân tử (文人墨竹)",
        "material": "Trục đứng giấy dài, mực nho thủy mặc (纸本水墨)",
        "dimensions": "162.5 × 84.5 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích thần phẩm (真迹) — Có bài thơ tự đề khắc đá bất hủ 'Trúc Thạch' nổi tiếng toàn cầu.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "咬定青山不放松，立根原在破岩中。千磨万击还坚劲，任尔东西南北风。",
            "vi": "Cắn chặt núi xanh chẳng thả buông, Cắm rễ sâu trong đá nứt gầy. Ngàn đập muôn mài càng cứng cáp, Mặc cho bão táp ngọn đông tây.",
            "author": "Trịnh Bản Kiều (郑板桥)",
            "source": "Bài thơ đề Trúc Thạch Đồ (Bảo tàng Cố Cung Bắc Kinh)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác sau khi Trịnh Bản Kiều từ quan về sống giữa chợ đời Dương Châu, mượn hình tượng cây trúc mọc trên khe đá cằn cỗi để biểu đạt khí tiết thanh cao bất khuất và tấm lòng thương dân nghèo khổ.",
            "artistBiography": "Trịnh Bản Kiều cả đời chỉ chuyên tâm vẽ ba thứ: Trúc, Thạch, Lan (ấm no cho đời, cứng cáp cho người, thơm tho cho mình), sáng tạo thư pháp kết hợp Triện, Lệ, Khải, Hành gọi là 'Lục phân bán thư' (Chữ sáu phần rưỡi).",
            "artisticComposition": "Bố cục gân guốc thanh bạt: một vách đá sa thạch cao vút thẳng đứng sừng sững bên cạnh; vài nhánh trúc gầy guộc nhưng đâm chồi xanh tốt bám chặt lấy khe nứt của đá.",
            "brushwork": "Bút pháp vẽ trúc dứt khoát như thư pháp: thân trúc vẽ thẳng tắp bằng nét Trung phong, lá trúc vẽ sắc nhọn như đao kiếm chém gọt theo thế chữ 'Nhất', chữ 'Nhân' và chữ 'Cá'.",
            "inkAndColor": "Thuần túy mực đen ngũ sắc: lá trúc phía trước mực đậm bóng bẩy, lá trúc phía sau mực nhạt sương khói, tạo không gian ba chiều sống động trong gió lốc.",
            "spatialPerspective": "Thế đứng hiên ngang vững chãi vươn thẳng lên trời cao, thách thức mọi khoảng không giông bão xung quanh.",
            "symbolism": "Cây trúc gầy guộc bám rễ trong đá nứt biểu trưng cho phẩm giá kiên cường của kẻ sĩ chân chính: càng qua muôn ngàn đày ải gian truân thì ý chí càng thêm sắt đá.",
            "philosophicalMeaning": "Đỉnh cao của đạo đức Nho gia bình dân: nghệ thuật hướng về nỗi đau của muôn dân lao khổ ('Nghe tiếng trúc reo ngỡ tiếng dân than thở').",
            "artisticLegacy": "Bài thơ đề và bức họa trở thành biểu tượng tinh thần kiên cường bất khuất nổi tiếng nhất trong văn hóa Trung Hoa, được mọi tầng lớp nhân dân tôn kính."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh xác nhận đây là bức họa Trúc Thạch hoàn hảo nhất còn lưu giữ đầy đủ cả ba đỉnh cao Thơ – Thư – Họa của Trịnh Bản Kiều.",
            "debatedIssues": "Khảo cứu phong cách thư pháp 'Lục phân bán thư' độc đáo được bố trí xen kẽ giữa các khoảng trống của cành trúc tạo nên sự kết dính thị giác hoàn hảo.",
            "comparativeContext": "So với trúc quý tộc thời Tống của Văn Đồng, trúc của Trịnh Bản Kiều mang tính xã hội, bình dân và khí phách phản kháng mãnh liệt hơn nhiều.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Trịnh Bản Kiều Thư Họa Nghiên Cứu Tập'.",
                "Trần Truyền Tịch, 'Dương Châu Bát Quái Triết Học Dữ Nghệ Thuật'."
            ]
        }
    },

    # -------------------------------------------------------------------------
    # ERA 7: MODERN & CONTEMPORARY (近现代)
    # -------------------------------------------------------------------------
    {
        "id": "moxia-tu",
        "titleZh": "墨虾图",
        "pinyin": "Mò Xiā Tú",
        "titleEn": "Shrimp in Ink",
        "titleVi": "Mặc Hà Đồ",
        "eraId": "modern",
        "artist": {
            "nameZh": "齐白石",
            "pinyin": "Qí Báishí",
            "nameVi": "Tề Bạch Thạch",
            "alias": "Bạch Thạch Lão Nhân (白石老人), Ký Bình Đường Chủ",
            "dates": "1864–1957 CN",
            "era": "Cận đại & Hiện đại (近现代)",
            "school": "Hồng Hoa Mặc Diệp • Đại Tả Ý Hiện Đại",
            "bio": "Đại danh họa bậc thầy của hội họa hiện đại Trung Hoa, danh nhân văn hóa thế giới. Xuất thân thợ mộc nghèo khó ở Hồ Nam, ngoài năm mươi tuổi sang Bắc Kinh 'Suy niên biến pháp', đưa nghệ thuật bình dân lên đỉnh cao nhân loại."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại thế kỷ XX (1948 CN)"},
        "creationDate": "Năm 1948 CN (Giai đoạn đỉnh cao lúc 88 tuổi)",
        "genreId": "freehand",
        "genres": ["freehand", "flower-bird", "ink-wash"],
        "genreLabel": "Đại tả ý thủy mặc trùng ngư • Thần phẩm hiện đại",
        "material": "Trục đứng giấy xuyến sống, mực nho và nước (纸本水墨)",
        "dimensions": "102 × 34.5 cm",
        "museum": "中国美术馆 (Bảo tàng Mỹ thuật Trung Quốc, Bắc Kinh)",
        "attribution": "Chân tích độc bảo (真迹) — Đỉnh cao tuyệt nghệ vẽ tôm của Bạch Thạch lão nhân lúc 88 tuổi.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "作画妙在似与不似之间，太似为媚俗，不似为欺世。余画虾数十年始得其神。",
            "vi": "Làm tranh điều huyền diệu nằm ở khoảng giữa 'Giống và Không giống'. Giống hệt quá thì hóa mị tục tầm thường, không giống chút nào thì thành lừa dối người đời. Ta vẽ tôm suốt mấy mươi năm mới bắt được cái thần của nó.",
            "author": "Tề Bạch Thạch (齐白石)",
            "source": "Bạch Thạch Lão Nhân Tự Thuật (白石老人自述)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ đỉnh cao sự nghiệp sau hơn 60 năm quan sát loài tôm suối từ quê nhà Tương Đàm đến chum nuôi tôm tại sân nhà Bắc Kinh, đưa loài sinh vật bình dị nhất trở thành kiệt tác thẩm mỹ của thế giới.",
            "artistBiography": "Tề Bạch Thạch dung hợp tinh hoa tả ý phóng khoáng của Từ Vị, Bát Đại Sơn Nhân với tình yêu tha thiết mộc mạc của người nông dân lao động, sáng tạo phong cách 'Hồng hoa mặc diệp' tươi sáng độc bộ.",
            "artisticComposition": "Bố cục bơi lội sinh động: vài chú tôm bơi lội ngược xuôi tự do trên trang giấy trắng; có con đang vươn râu búng càng lao nhanh, có con đang thong thả trôi nổi; không hề vẽ một giọt nước mà toàn bộ mặt giấy tràn ngập nước trong veo.",
            "brushwork": "Kỹ thuật dùng ngọn cọ vẽ độc nhất vô nhị: thân tôm vẽ bằng 5 nhát bút đè mực nhạt uốn cong khớp vỏ; đầu tôm điểm một nét mực đặc biểu hiện khối óc; râu tôm vẽ bằng đầu bút mảnh vươn dài đầy tính đàn hồi co giãn.",
            "inkAndColor": "Nghệ thuật vận dụng độ ẩm của nước và mực nho đạt tới cảnh giới ảo thuật: thân tôm trong suốt như thủy tinh, khúc ngực có độ bóng mờ mờ phản chiếu ánh sáng tự nhiên.",
            "spatialPerspective": "Khoảng trắng lưu bạch của tờ giấy xuyến sống biến thành dòng nước mát rượi trong vắt của suối nguồn tự nhiên.",
            "symbolism": "Chú tôm nhỏ bé nhưng búng càng bơi lội kiêu hãnh biểu trưng cho sức sống dẻo dai, trong sáng và tự do tự tại của tầng lớp nhân dân lao động bình dân.",
            "philosophicalMeaning": "Định lý mỹ học bất hủ 'Tự dữ bất tự chi gian' (Ở giữa giống và không giống): nghệ thuật là sự chưng cất bản chất sinh mệnh chứ không phải sự sao chép nô lệ máy móc của ống kính quang học.",
            "artisticLegacy": "Biểu tượng kinh điển của hội họa thủy mặc Trung Hoa hiện đại trên vũ đài quốc tế, đưa Tề Bạch Thạch nhận Giải thưởng Hòa bình Quốc tế năm 1955."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Mỹ thuật Trung Quốc và Cố Cung Bắc Kinh bảo tồn nhiều bức vẽ tôm, khẳng định giai đoạn 80–88 tuổi là thời điểm nghệ thuật vẽ tôm của Tề Bạch Thạch đạt độ toàn bích nhất.",
            "debatedIssues": "Quá trình tiến hóa kỹ thuật vẽ tôm của ông trải qua 4 giai đoạn lớn: từ tả thực rườm rà nhiều râu chân sang tinh giản thần diệu chỉ còn 6 chiếc râu đàn hồi.",
            "comparativeContext": "So với các họa gia vẽ thủy tộc phương Tây, kỹ thuật thể hiện độ trong suốt của vỏ tôm bằng mực đen thuần túy của Tề Bạch Thạch là một kỳ tích vô song.",
            "academicCitations": [
                "Vương Triều Văn (王朝闻), 'Tề Bạch Thạch Hội Họa Mỹ Học Nghiên Cứu'.",
                "Lang Thiệu Quân (郎绍君), 'Tề Bạch Thạch Nhân Sinh Dữ Nghệ Thuật'."
            ]
        }
    },
    {
        "id": "benma-tu",
        "titleZh": "奔马图",
        "pinyin": "Bēn Mǎ Tú",
        "titleEn": "Galloping Horse",
        "titleVi": "Bôn Mã Đồ",
        "eraId": "modern",
        "artist": {
            "nameZh": "徐悲鸿",
            "pinyin": "Xú Bēihóng",
            "nameVi": "Từ Bi Hồng",
            "alias": "Bi Hồng",
            "dates": "1895–1953 CN",
            "era": "Cận đại & Hiện đại",
            "school": "Trung Tây Dung Hợp Tiên Phong (中西融合派)",
            "bio": "Bậc thầy tiên phong du học Pháp, Hiệu trưởng đầu tiên của Học viện Mỹ thuật Trung ương Bắc Kinh. Người khởi xướng cuộc cách mạng dung hợp giải phẫu học, ánh sáng phương Tây vào nét bút thủy mặc truyền thống Trung Hoa."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại thế kỷ XX (1941 CN)"},
        "creationDate": "Năm 1941 CN (Thời kỳ Kháng chiến chống phát xít)",
        "genreId": "freehand",
        "genres": ["freehand", "figure", "ink-wash"],
        "genreLabel": "Thủy mặc dung hợp Tây phương • Hùng khí dân tộc",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本水墨)",
        "dimensions": "130.1 × 62.6 cm",
        "museum": "徐悲鸿纪念馆 (Nhà tưởng niệm Từ Bi Hồng, Bắc Kinh)",
        "attribution": "Chân tích bảo vật quốc gia (真迹) — Sáng tác tại Trường Sa thời kỳ Kháng chiến dâng tặng tiền tuyến.",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "古法之佳者守之，垂绝者继之，不佳者改之，未足者增之，西方画之可采入者融之。",
            "vi": "Phép cổ điều gì hay thì giữ lấy, điều gì sắp dứt thì nối tiếp, điều gì chưa hay thì sửa đổi, điều gì chưa đủ thì thêm vào, điều gì của hội họa phương Tây dùng được thì dung hợp vào.",
            "author": "Từ Bi Hồng (徐悲鸿)",
            "source": "Trung Quốc Họa Cải Lương Luận (中国画改良论)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào mùa thu năm 1941 trong bối cảnh cuộc chiến tranh kháng chiến chống phát xít Nhật diễn ra vô cùng khốc liệt, quân dân Trung Hoa giành thắng lợi trong chiến dịch Trường Sa lần thứ hai, Từ Bi Hồng mượn hình tượng tuấn mã phi nước đại để cổ vũ sĩ khí toàn dân tộc.",
            "artistBiography": "Từ Bi Hồng du học tại École des Beaux-Arts Paris, nắm vững giải phẫu học cơ bắp và khối lập thể, cống hiến trọn đời để hiện đại hóa quốc họa truyền thống.",
            "artisticComposition": "Góc nhìn chính diện ba phần tư (three-quarter frontal view) vô cùng hiểm hóc: con tuấn mã tung vó phi thẳng về phía trước như chuẩn bị lao ra khỏi mặt tranh; bờm ngựa và đuôi ngựa bay lộng trong bão gió.",
            "brushwork": "Kết hợp tài tình giữa nhát chổi đại đao quét mực tả khối cơ bắp rắn rỏi và nét vẽ thư pháp dứt khoát; vó ngựa được nhấn bằng mực tiêu đen nhánh như thép nguội.",
            "inkAndColor": "Vận dụng sáng tối (chiaroscuro) phương Tây vào thủy mặc: chừa trắng tự nhiên trên sống mũi và ngực ngựa tạo cảm giác khối cơ bắp căng tràn ánh sáng mặt trời.",
            "spatialPerspective": "Góc nhìn cận cảnh mang tính điện ảnh hiện đại tạo hiệu ứng thị giác chấn động, người xem như nghe thấy tiếng vó ngựa rền vang mặt đất.",
            "symbolism": "Con tuấn mã phi nước đại là biểu tượng quật khởi hào hùng của dân tộc Trung Hoa đang vươn mình đập tan xiềng xích nô lệ và áp bức xâm lăng.",
            "philosophicalMeaning": "Sự kết hợp giữa tinh thần tự cường bất khuất Nho gia ('Thiên hành kiện, quân tử dĩ tự cường bất tức') và chủ nghĩa anh hùng hiện đại.",
            "artisticLegacy": "Biểu tượng kinh điển nhất của mỹ thuật hiện đại Trung Hoa, khai sáng trường phái 'Trung Tây dung hợp' định hình giáo dục mỹ thuật Đông Á thế kỷ XX."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Nhà tưởng niệm Từ Bi Hồng tại Bắc Kinh bảo tồn bức họa như di sản tinh thần quốc gia vô giá.",
            "debatedIssues": "Cuộc tranh luận giữa trường phái truyền thống thuần túy và trường phái cách tân dung hợp Tây phương của Từ Bi Hồng trong lịch sử mỹ thuật thế kỷ XX.",
            "comparativeContext": "So với ngựa thanh tao tĩnh lặng của Lý Công Lân thời Tống, ngựa của Từ Bi Hồng ngập tràn sức mạnh thể chất cơ bắp và khí thế sục sôi thời đại.",
            "academicCitations": [
                "Liao Jingwen (Liêu Tĩnh Văn), 'Từ Bi Hồng Nhất Sinh', Trung Quốc Thanh Niên Xuất Bản Xã.",
                "Vương Chấn Đạc, 'Từ Bi Hồng Nghệ Thuật Dữ Trung Tây Mỹ Học'."
            ]
        }
    },
    {
        "id": "lushan-tu-daqian",
        "titleZh": "庐山图",
        "pinyin": "Lú Shān Tú",
        "titleEn": "Mount Lu (Splashed Color Landscape)",
        "titleVi": "Lư Sơn Đồ",
        "eraId": "modern",
        "artist": {
            "nameZh": "张大千",
            "pinyin": "Zhāng Dàqiān",
            "nameVi": "Trương Đại Thiên",
            "alias": "Đại Thiên Cư Sĩ (大千居士)",
            "dates": "1899–1983 CN",
            "era": "Cận đại & Hiện đại",
            "school": "Phá Mặc Bát Thái Sơn Thủy Tiên Phong (泼墨泼彩宗师)",
            "bio": "Huyền thoại nghệ thuật trác tuyệt thế kỷ XX, được Picasso tôn kính xưng tụng là đại sư hội họa phương Đông. Trải qua biến cố suy giảm thị lực cuối đời, ông đã khai sáng trường phái 'Bát mặc bát thái' (Đổ mực vẩy màu) chấn động địa cầu."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại (1981–1983 CN)"},
        "creationDate": "Năm 1981–1983 CN (Tuyệt phẩm cuối cùng trước khi tạ thế ở tuổi 84)",
        "genreId": "landscape",
        "genres": ["landscape", "freehand", "court"],
        "genreLabel": "Đại hình bát mặc bát thái sơn thủy (泼墨泼彩长卷)",
        "material": "Cuộn trục dài lụa khổng lồ, khoáng sắc Thạch thanh Thạch lục kết hợp mực nho (绢本设色)",
        "dimensions": "178.5 × 998.5 cm (Dài gần 10 mét, cao gần 2 mét)",
        "museum": "台北故宫博物院 (Bảo tàng Cố Cung Đài Bắc)",
        "attribution": "Chân tích tuyệt tác cuối đời (绝笔真迹) — Quốc bảo số một thời hiện đại lưu giữ tại Cố Cung Đài Bắc.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "老夫眼暗笔生花，泼墨泼彩写烟霞。平生未历庐山险，化作峰峦入画图。",
            "vi": "Lão phu mắt mờ bút nở hoa, Đổ mực vẩy màu vẽ khói sương. Bình sinh chưa từng vượt hiểm nguy Lư Sơn, Hóa thành non nước nhập vào tranh.",
            "author": "Trương Đại Thiên (张大千)",
            "source": "Thơ đề Lư Sơn Đồ (1983)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác tại Ma Gia Da Nhĩ (Đài Bắc) trong suốt hai năm cuối đời từ 1981 đến 1983 theo lời thỉnh cầu của người bạn thân ở Nhật Bản. Trương Đại Thiên dốc cạn sinh lực cuối cùng hoàn thành bức đại họa gần 10 mét dẫu mắt đã gần mù lòa.",
            "artistBiography": "Trương Đại Thiên từng dành 3 năm sao chép bích họa Đôn Hoàng, nắm trọn tinh hoa của mọi đại sư từ Ngũ Đại đến Tứ Tăng, dung hợp thẩm mỹ trừu tượng phương Tây tạo nên bước ngoặt vĩ đại nhất của quốc họa thế kỷ XX.",
            "artisticComposition": "Trường thiên đại tác cuộn dài gần 10 mét hùng vĩ tráng lệ: núi Lư Sơn thoắt ẩn thoắt hiện giữa biển mây mù mịt; vách đá sừng sững, thác nước tuôn trào, thung lũng sâu thẳm hòa quyện vào một vũ điệu cuồng nhiệt của màu sắc.",
            "brushwork": "Kỹ thuật 'Bát mặc bát thái' (泼墨泼彩) đỉnh cao: trực tiếp đổ bát mực và khoáng sắc nguyên chất thạch thanh, thạch lục lên mặt lụa rồi dùng chổi dẫn dòng chảy tự nhiên, sau đó điểm xuyết nét vẽ tinh xảo lầu gác, cổ thụ.",
            "inkAndColor": "Sự bùng nổ của màu sắc lộng lẫy: sắc xanh lam ngọc thạch thanh và xanh lục khổng tước bốc sáng rực rỡ trên nền mực đen tuyền bí ẩn, tạo hiệu ứng thị giác huyền ảo tựa chốn tiên bồng.",
            "spatialPerspective": "Không gian siêu thực đa chiều xóa nhòa ranh giới giữa trừu tượng và cụ thể, đưa người xem vào một cõi vũ trụ sơ khai hùng vĩ.",
            "symbolism": "Ngọn núi Lư Sơn chốn quê nhà mà cả đời ông lưu lạc hải ngoại chưa một lần đặt chân tới biểu trưng cho nỗi nhớ thương quê hương đất mẹ da diết nghìn trùng của người con viễn xứ.",
            "philosophicalMeaning": "Đỉnh cao của sự tự do sáng tạo tuyệt đối: khi mắt trần không còn nhìn rõ chi tiết vụn vặt trần gian, con mắt tâm thức đã mở ra nhìn thấy vẻ đẹp vĩnh hằng nguyên sơ của Đạo.",
            "artisticLegacy": "Được tôn vinh là kiệt tác sơn thủy vĩ đại nhất của thế kỷ XX, bản trường ca tuyệt tác khép lại thiên niên kỷ hội họa cổ điển Trung Hoa."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Đài Bắc bảo quản bức họa như báu vật đặc biệt quý giá, tác phẩm ghi dấu sự thăng hoa tột đỉnh của nghệ thuật Trương Đại Thiên.",
            "debatedIssues": "Bức tranh còn dang dở chưa kịp viết xong bài thơ đề lạc khoản cuối cùng thì họa sĩ đột quỵ qua đời, để lại sự tiếc nuối vô hạn cho giới mỹ thuật toàn cầu.",
            "comparativeContext": "So với tranh trừu tượng phương Tây của Jackson Pollock, lối đổ màu của Trương Đại Thiên vẫn giữ trọn linh hồn cốt cách sơn thủy phương Đông.",
            "academicCitations": [
                "Bảo tàng Cố Cung Đài Bắc, 'Trương Đại Thiên Lư Sơn Đồ Triển Lãm Đồ Lục', 1983.",
                "Thạch Thủ Khiêm (Shi Shou-chien), 'Tùng Phong Cách Đáo Khoa Tác: Trương Đại Thiên dữ Hiện Đại Thủy Mặc'."
            ]
        }
    },
    {
        "id": "shujiang-bishitu",
        "titleZh": "蜀江碧石图",
        "pinyin": "Shǔ Jiāng Bì Shí Tú",
        "titleEn": "Emerald Rocks on the Shu River",
        "titleVi": "Thục Giang Bích Thạch Đồ",
        "eraId": "modern",
        "artist": {
            "nameZh": "黄宾虹",
            "pinyin": "Huáng Bīnhóng",
            "nameVi": "Hoàng Tân Hồng",
            "alias": "Bân Hồng (宾虹), Phác Tồn, Hắc Tân Hồng",
            "dates": "1865–1955 CN",
            "era": "Cận đại & Hiện đại",
            "school": "Hắc Mật Hậu Trọng • Ngũ Bút Thất Mặc Tông Sư",
            "bio": "Học giả kiêm đại danh họa uyên bác bậc nhất thế kỷ XX, tác giả học thuyết 'Ngũ bút Thất mặc' (5 phép dùng bút, 7 phép dùng mực). Nổi tiếng với phong cách 'Hắc - Mật - Hậu - Trọng' (Đen đặc, rậm rạp, dày dặn, nặng trĩu)."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại thế kỷ XX (1953 CN)"},
        "creationDate": "Năm Quý Tỵ 1953 CN (Lúc đại thọ 89 tuổi)",
        "genreId": "landscape",
        "genres": ["landscape", "literati", "ink-wash"],
        "genreLabel": "Văn nhân sơn thủy hiện đại • Hắc mật hậu trọng",
        "material": "Trục đứng giấy, mực nho đạm sắc (纸本水墨设色)",
        "dimensions": "108.5 × 48.6 cm",
        "museum": "中国美术馆 (Bảo tàng Mỹ thuật Trung Quốc, Bắc Kinh)",
        "attribution": "Chân tích bảo vật (真迹) — Đỉnh cao thời kỳ 'Bạch biến Hắc' của Hoàng Tân Hồng tuổi chín mươi.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "五笔：平、留、圆、重、变；七墨：浓、淡、破、积、泼、焦、宿。古人论墨，有浓淡二字，余参透七墨，方悟墨法之妙。",
            "vi": "Năm phép dùng bút: Bình, Lưu, Viên, Trọng, Biến; Bảy phép dùng mực: Nồng, Đạm, Phá, Tích, Bát, Tiêu, Túc. Cổ nhân bàn về mực chỉ có hai chữ nùng đạm, ta thấu suốt bảy phép mực mới ngộ ra chỗ huyền diệu của mặc pháp.",
            "author": "Hoàng Tân Hồng (黄宾虹)",
            "source": "Họa Pháp Diễm Ngôn (画法简言)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào những năm tháng cuối đời khi Hoàng Tân Hồng sống bên bờ Tây Hồ Hàng Châu. Sau chuyến đi thực tế vẽ ký họa dọc sông Ba Thục (Tứ Xuyên), ông đúc kết toàn bộ chiêm nghiệm về non nước kỳ vĩ vào tác phẩm.",
            "artistBiography": "Hoàng Tân Hồng dành trọn đời khảo cứu kim thạch văn tự và lịch sử hội họa cổ, tự tin tuyên bố: 'Năm mươi năm sau ngày ta mất, người đời mới thực sự hiểu được tranh của ta!'.",
            "artisticComposition": "Trục đứng ken dày đặc: núi non Ba Thục hiểm trở trùng điệp bốc cao cuồn cuộn; dòng sông Thục Giang màu ngọc bích len lỏi qua khe đá; bóng dáng ngôi nhà sàn thấp thoáng trong rừng cây rậm rạp.",
            "brushwork": "Thực hành tuyệt đối học thuyết 'Ngũ bút': nét cọ 'Trọng' như đao chém, 'Lưu' như nước chảy có sức níu giữ, gân guốc tựa chữ khắc trên đỉnh đồng Chu–Tần.",
            "inkAndColor": "Đỉnh cao tuyệt luân của kỹ thuật 'Tích mặc pháp' (chồng mực nhiều lớp) và 'Túc mặc' (mực để qua đêm): mực đen đặc quánh tầng tầng lớp lớp nhưng vẫn ngời sáng, điểm màu thạch lục và thạch thanh lấp lánh như ngọc bích giữa bóng tối.",
            "spatialPerspective": "Không gian dồn nén đến ngột ngạt nhưng lại tỏa ra ánh sáng huyền bí từ bên trong cấu trúc của đá ('Hắc đoàn đoàn lý phóng quang minh').",
            "symbolism": "Màu đen thâm trầm của núi đá biểu trưng cho sức nặng ngàn năm của văn hóa và cội nguồn dân tộc bất biến trước thời gian.",
            "philosophicalMeaning": "Triết lý 'Hỗn độn khai minh': đi xuyên qua sự hỗn độn tối tăm dày đặc nhất của mực để tìm thấy ánh sáng chân lý thuần khiết.",
            "artisticLegacy": "Được tôn vinh là ngọn núi cao nhất của hội họa văn nhân Trung Hoa thế kỷ XX, người khai sinh ngôn ngữ hội họa thủy mặc hiện đại thuần túy Đông phương."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Mỹ thuật Trung Quốc xác định đây là tác phẩm hoàn mỹ nhất thể hiện thời kỳ đỉnh cao 'Hắc Tân Hồng' có giá trị học thuật cao nhất của thế kỷ XX.",
            "debatedIssues": "Cuộc phân tích về hiện tượng thị lực suy giảm do đục thủy tinh thể đã giải phóng họa sĩ khỏi sự trói buộc của chi tiết để đạt tới sự tự do trừu tượng hóa.",
            "comparativeContext": "So với nét thanh tao của Văn Trưng Minh, tranh Hoàng Tân Hồng thâm trầm, nặng trĩu nội lực tựa đỉnh đồng nghìn năm vớt lên từ lòng đất.",
            "academicCitations": [
                "Bảo tàng Mỹ thuật Trung Quốc, 'Hoàng Tân Hồng Bách Niên Đản Thần Triển Lãm Đồ Lục'.",
                "Vương Bá Mẫn, 'Hoàng Tân Hồng Họa Ngữ Lục Giải Thích'."
            ]
        }
    },
    {
        "id": "jiangshan-duojiao-1959",
        "titleZh": "江山如此多娇",
        "pinyin": "Jiāng Shān Rú Cǐ Duō Jiāo",
        "titleEn": "Such Great Beauty in Our Land (1959)",
        "titleVi": "Giang Sơn Như Thử Đa Kiều (1959)",
        "eraId": "modern",
        "artist": {
            "nameZh": "傅抱石、关山月",
            "pinyin": "Fù Bàoshí, Guān Shānyuè",
            "nameVi": "Phó Bão Thạch & Quan Sơn Nguyệt",
            "alias": "Đại sư Thủy Mặc & Lĩnh Nam Họa Phái",
            "dates": "Phó Bão Thạch (1904–1965), Quan Sơn Nguyệt (1912–2000)",
            "era": "Hiện đại thế kỷ XX (1959)",
            "school": "Tân Trung Quốc Quốc Họa Cung Đình (Tân Quốc Họa Phong)",
            "bio": "Hai đại danh sư hàng đầu phối hợp sáng tác. Phó Bão Thạch khai sáng 'Bão Thạch thuấn' bão táp, Quan Sơn Nguyệt là học trò xuất chúng của Lĩnh Nam họa phái (Cao Kiếm Phụ)."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại thế kỷ XX (1959 CN)"},
        "creationDate": "Tháng 9 năm 1959 CN (Kỷ niệm 10 năm Quốc khánh)",
        "genreId": "landscape",
        "genres": ["landscape", "court", "fine-brush"],
        "genreLabel": "Quốc gia đại điện sơn thủy • Kiệt tác thế kỷ",
        "material": "Bức đại họa lụa khổng lồ trên giấy bồi, màu khoáng kết hợp mực nho (巨幅绢本设色)",
        "dimensions": "565 × 900 cm (Diện tích hơn 50 mét vuông)",
        "museum": "北京人民大会堂 (Đại lễ đường Nhân dân Bắc Kinh)",
        "attribution": "Chân tích độc bản quốc gia (真迹) — Bức tranh hoành tráng nhất lịch sử, đích thân Mao Trạch Đông ngự bút viết đại tự tiêu đề.",
        "image": "assets/images/jiangshan-ruci-duojiao.jpg",
        "featuredQuote": {
            "zh": "江山如此多娇，引无数英雄竞折腰。惜秦皇汉武，略输文采；唐宗宋祖，稍逊风骚。俱往矣，数风流人物，还看今朝。",
            "vi": "Giang sơn tươi đẹp dường bao, Khiến muôn anh kiệt biết bao cúi đầu. Tiếc Tần Hoàng Hán Vũ, Kém phần văn thải; Đường Tông Tống Tổ, Thiếu nét phong tao. Đều qua cả rồi, Đếm bậc phong lưu, Còn xem hôm nay.",
            "author": "Mao Trạch Đông (毛泽东)",
            "source": "Thấm Viên Xuân • Tuyết (沁园春·雪, 1936)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào mùa thu năm 1959 nhằm khánh thành Đại lễ đường Nhân dân Bắc Kinh nhân dịp kỷ niệm 10 năm thành lập nước CHND Trung Hoa. Chu Ân Lai đích thân chỉ định hai danh họa Phó Bão Thạch và Quan Sơn Nguyệt hợp tác sáng tác theo ý thơ bài 'Thấm Viên Xuân • Tuyết'.",
            "artistBiography": "Phó Bão Thạch am tường lịch sử mỹ thuật sâu sắc, phụ trách vẽ phần núi non trùng điệp, thác nước và sông biển phía dưới; Quan Sơn Nguyệt phụ trách vẽ rặng thông tuyết phương Bắc, mặt trời đỏ và thảo nguyên phương Nam bên trên.",
            "artisticComposition": "Quy mô không gian đại vũ trụ chưa từng có: gói trọn toàn bộ địa lý bốn mùa của Trung Hoa vào một bức tranh: Phương Bắc tuyết phủ trắng xóa ngàn dặm (Trường Thành mùa đông), Phương Nam hoa nở suối reo (Giang Nam mùa xuân), sông Hoàng Hà - Trường Giang cuộn sóng, và trên cùng là vầng thái dương đỏ rực tỏa ánh hào quang vạn trượng.",
            "brushwork": "Sự kết hợp hoàn hảo giữa 'Bão Thạch thuấn' (抱石皴) tung hoành dồn dập như sấm chớp và nét cọ điêu luyện tươi sáng của Lĩnh Nam họa phái; cây tùng phương Bắc cắm rễ uy nghiêm giữa trời tuyết.",
            "inkAndColor": "Phối sắc hoành tráng tráng lệ: sắc đỏ son rực rỡ của mặt trời bình minh, sắc trắng muốt tinh khôi của băng tuyết ngàn dặm và sắc xanh thạch thanh thạch lục của non sông gấm vóc.",
            "spatialPerspective": "Góc nhìn từ tầng thượng khí quyển bao quát toàn bộ cương vực non sông hùng vĩ, vượt qua mọi giới hạn không gian và thời gian thông thường.",
            "symbolism": "Mặt trời đỏ mọc ở hướng đông tượng trưng cho tương lai xán lạn và sự trỗi dậy của đất nước; Trường Thành và rặng thông biểu trưng cho tinh thần kiên cường bất khuất muôn đời.",
            "philosophicalMeaning": "Bản anh hùng ca hiện đại về tình yêu giang sơn đất nước và niềm tự hào dân tộc, dung hợp mỹ học thi ca cổ điển với tinh thần thời đại thế kỷ XX.",
            "artisticLegacy": "Bức quốc họa có quy mô lớn nhất và vị thế chính trị - nghệ thuật cao nhất của thế kỷ XX, biểu tượng thị giác của văn hóa Trung Hoa hiện đại trong các nghi lễ quốc gia long trọng nhất."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bức tranh treo trang trọng tại sảnh chính Đại lễ đường Nhân dân Bắc Kinh, nơi đón tiếp các nguyên thủ quốc gia toàn cầu. Bản gốc hiện được bảo quản nghiêm ngặt, bức treo tại sảnh là bản phục chế chuẩn xác tỷ lệ 1:1 bảo vệ di sản.",
            "debatedIssues": "Giai thoại sáng tác trong 4 tháng ròng tại lữ quán Đông Giao, Chu Ân Lai đã đưa ra lời góp ý lịch sử: mặt trời phải vẽ to hơn và tươi sáng hơn để thể hiện câu thơ 'Hồng trang tố khỏa'.",
            "comparativeContext": "Kế thừa trực tiếp quy mô hoành tráng của 'Thiên Lý Giang Sơn Đồ' thời Bắc Tống, bức tranh này nâng tầm khái niệm non sông thành biểu tượng quốc gia hiện đại.",
            "academicCitations": [
                "Quan Sơn Nguyệt, 'Hồi Ức Sáng Tác Giang Sơn Như Thử Đa Kiều', Nhân Dân Nhật Báo.",
                "Phó Nhị Thạch, 'Phó Bão Thạch Nghệ Thuật Dữ Giang Sơn Đa Kiều'."
            ]
        }
    },
    {
        "id": "wanshan-hongbian",
        "titleZh": "万山红遍",
        "pinyin": "Wàn Shān Hóng Biàn",
        "titleEn": "Ten Thousand Crimson Hills",
        "titleVi": "Vạn Sơn Hồng Biến",
        "eraId": "modern",
        "artist": {
            "nameZh": "李可染",
            "pinyin": "Lǐ Kěrǎn",
            "nameVi": "Lý Khả Nhiễm",
            "alias": "Khả Nhiễm",
            "dates": "1907–1989 CN",
            "era": "Hiện đại thế kỷ XX",
            "school": "Lý Gia Sơn Thủy • Nghịch Quang Thủy Mặc Đỉnh Cao",
            "bio": "Học trò xuất sắc của Tề Bạch Thạch và Hoàng Tân Hồng, Giáo sư Học viện Mỹ thuật Trung ương. Người khai sáng trường phái 'Lý gia sơn thủy', đưa ánh sáng ngược (nghịch quang) và sắc đỏ chu sa vào hội họa thủy mặc."
        },
        "dynasty": {"eraId": "modern", "nameZh": "现代", "nameVi": "Hiện đại thế kỷ XX (1964 CN)"},
        "creationDate": "Năm 1964 CN (Thời kỳ đỉnh cao tại Bắc Kinh)",
        "genreId": "landscape",
        "genres": ["landscape", "court", "ink-wash"],
        "genreLabel": "Sơn thủy cách tân • Nghịch quang chu sa độc bộ",
        "material": "Trục đứng giấy xuyến, màu chu sa khoáng chất quý phủ trên mực đen (纸本设色)",
        "dimensions": "131 × 84 cm",
        "museum": "中国美术馆 (Bảo tàng Mỹ thuật Trung Quốc) & Sưu tập tư nhân",
        "attribution": "Chân tích thần phẩm (真迹) — Một trong 7 bức họa kinh điển cùng đề tài do Lý Khả Nhiễm sáng tác giai đoạn 1962–1964.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "看万山红遍，层林尽染；漫江碧透，百舸争流。鹰击长空，鱼翔浅底，万类霜天竞自由。",
            "vi": "Ngắm vạn núi đỏ rực khắp nơi, Tầng tầng rừng thắm sắc; Sông biếc chảy trong veo, Trăm thuyền đua nhau lướt. Chim ưng vút trời cao, Cá lượn đáy nước cạn, Muôn loài dưới trời sương đua nhau tự do.",
            "author": "Mao Trạch Đông (毛泽东)",
            "source": "Thấm Viên Xuân • Trường Sa (沁园春·长沙, 1925)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác dựa trên cảm hứng từ câu thơ bất hủ 'Khán vạn sơn hồng biến, tầng lâm tận nhiễm' của bài từ 'Thấm Viên Xuân • Trường Sa'. Lý Khả Nhiễm đã sử dụng loại chu sa ngọc quý cổ truyền mà ông may mắn có được để tạo nên bước đột phá thế kỷ.",
            "artistBiography": "Lý Khả Nhiễm chủ trương: 'Khả quý giả đạm, sở yếu giả hồn' (Quý ở chỗ thanh đạm, cốt lõi ở chỗ hùng hậu), đi thực tế vẽ ký họa hàng nghìn bức trên khắp núi đồi non sông Trung Hoa.",
            "artisticComposition": "Bố cục dồn nén nghẹt thở theo phong cách cự bi sơn thủy thời Bắc Tống: các dãy núi đỏ thẫm dựng đứng chiếm trọn 9/10 diện tích bức tranh; chân núi có dòng suối trắng muốt chảy qua ngôi làng mái đen tường trắng; rặng cây đỏ thắm tầng tầng lớp lớp.",
            "brushwork": "Kỹ thuật cọ vẽ đanh thép kế thừa Hoàng Tân Hồng: nét mực đen quánh làm bộ xương cốt vững chắc, sau đó phủ từng lớp bột chu sa nguyên chất bằng đầu bút vỗ nhẹ.",
            "inkAndColor": "Khai sáng kỹ thuật 'Nghịch quang' (backlighting) kỳ tài: màu đỏ chu sa rực rỡ tương phản với những mảng chừa trắng lưu bạch của dòng thác và những bức tường nhà trắng phau, tạo cảm giác ánh nắng chiều tà đang rọi xuyên qua tán lá rừng đỏ rực bừng sáng từ bên trong.",
            "spatialPerspective": "Điểm nhìn cận cảnh hoành tráng, người xem có cảm giác đang đứng trước một biển lửa đỏ rực tráng lệ của thiên nhiên và cách mạng.",
            "symbolism": "Màu đỏ chu sa thắm đượm biểu trưng cho sự hy sinh hào hùng, nhiệt huyết cách mạng và vận hội bừng sáng của kỷ nguyên mới.",
            "philosophicalMeaning": "Dung hợp giữa triết lý mỹ học Mác xít hiện đại và tinh thần sơn thủy cổ điển: thiên nhiên không còn là nơi ẩn dật tiêu cực mà là chiến trường bừng sáng sinh lực của con người thời đại mới.",
            "artisticLegacy": "Một trong những tác phẩm hội họa hiện đại đắt giá nhất lịch sử mỹ thuật châu Á (năm 2015 một bức trong bộ này được gõ búa đấu giá hơn 184 triệu Nhân dân tệ tại Bắc Kinh, tương đương gần 30 triệu USD)."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Mỹ thuật Trung Quốc xác định bộ tranh 7 bức 'Vạn Sơn Hồng Biến' là đỉnh cao tột bực trong toàn bộ sự nghiệp hội họa của Lý Khả Nhiễm và là biểu tượng của mỹ thuật Trung Hoa những năm 1960.",
            "debatedIssues": "Lịch sử của số lượng chu sa quý thời Càn Long mà Lý Khả Nhiễm sử dụng: loại chu sa tự nhiên này đem lại độ phản quang sâu thẳm mà màu công nghiệp hiện đại không thể nào đạt tới.",
            "comparativeContext": "So với các bức tranh phong cảnh truyền thống dùng màu khoáng thanh lục, cách xử lý đơn sắc đỏ - đen - trắng của Lý Khả Nhiễm tạo nên hiệu quả thị giác cách mạng và xúc cảm mãnh liệt.",
            "academicCitations": [
                "Bảo tàng Mỹ thuật Trung Quốc, 'Lý Khả Nhiễm Hội Họa Nghệ Thuật Toàn Tập'.",
                "Lang Thiệu Quân, 'Lý Khả Nhiễm Dữ Vạn Sơn Hồng Biến'."
            ]
        }
    }
]

print(f"Part 3 ready with {len(PAINTINGS_PART3)} masterpieces.")
