# -*- coding: utf-8 -*-
"""
Paintings Catalog Builder (Part 1: Eras 1-3)
Contains full academic research, provenance, 9-point art analysis, and quotes.
"""

PAINTINGS_PART1 = [
    # -------------------------------------------------------------------------
    # ERA 1: WEI-JIN & NORTHERN/SOUTHERN DYNASTIES (魏晋南北朝)
    # -------------------------------------------------------------------------
    {
        "id": "luoshenfu-tu",
        "titleZh": "洛神赋图",
        "pinyin": "Luò Shén Fù Tú",
        "titleEn": "Nymph of the Luo River",
        "titleVi": "Lạc Thần Phú Đồ",
        "eraId": "weijin",
        "artist": {
            "nameZh": "顾恺之",
            "pinyin": "Gù Kǎizhī",
            "nameVi": "Cố Khải Chi",
            "alias": "Trường Khang (长康), Hổ Đầu (虎头)",
            "dates": "c. 344–406 CN",
            "era": "Đông Tấn (东晋)",
            "school": "Lục Triều Cổ Phái (六朝古派)",
            "bio": "Họa thánh thời Đông Tấn, xuất thân dòng dõi sĩ tộc Vô Tích. Tác giả của các luận điểm mỹ học thiên tài 'Dĩ hình tả thần' (以形写神), 'Thiên tưởng diệu đắc' (迁想妙得) và 'Truyền thần tả chiếu' (传神写照)."
        },
        "dynasty": {"eraId": "weijin", "nameZh": "东晋", "nameVi": "Đông Tấn (317–420 CN)"},
        "creationDate": "Ước tính thế kỷ IV (Bản lưu giữ là bản Tống mô thế kỷ XII)",
        "genreId": "figure",
        "genres": ["figure", "fine-brush", "court"],
        "genreLabel": "Nhân vật họa • Công bút (人物画 • 工笔)",
        "material": "Quyển trục lụa, màu khoáng tự nhiên (绢本设色)",
        "dimensions": "27.1 × 572.8 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh) & 辽宁省博物馆 (Bảo tàng Liêu Ninh)",
        "attribution": "Tống triều mô bản (宋摹本) — Bản sao hoàng cung thời Nam Tống bảo tồn trọn vẹn nét bút 'Xuân tằm thổ ty' (春蚕吐丝) và không gian sơ khởi thời Tấn.",
        "image": "assets/images/academic/han-silk-banner.jpg",
        "featuredQuote": {
            "zh": "四体妍蚩，本无关于妙处；传神写照，正在阿堵中。",
            "vi": "Vẻ đẹp hay xấu của tứ chi vốn không quyết định điều huyền diệu; việc truyền thần khắc họa cốt cách nằm trọn nơi đôi mắt.",
            "author": "Cố Khải Chi (顾恺之)",
            "source": "Lịch Đại Danh Họa Ký (历代名画记)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác dựa trên bài phú kinh điển 'Lạc Thần Phú' của Tào Thực thời Tam Quốc. Bức họa chuyển thể mối tình hư ảo và đau thương giữa Tào Thực và thần nữ sông Lạc (tượng trưng cho Chân phi) thành thiên trường ca hội họa cuộn ngang liên hoàn.",
            "artistBiography": "Cố Khải Chi giữ chức Tán kỵ thường thị thời Đông Tấn, được người đương thời xưng tụng là 'Tam tuyệt': Tài tuyệt, Họa tuyệt, Si tuyệt. Ông là nhân vật khai tông lập phái đặt nền móng lý luận hội họa đầu tiên trong lịch sử mỹ thuật Trung Hoa.",
            "artisticComposition": "Áp dụng kết cấu tự sự không gian liên hoàn (continuous narrative). Nhân vật chính Tào Thực và Lạc Thần xuất hiện lặp lại ở nhiều phân cảnh từ lúc sơ ngộ bên bờ Lạc Thủy, lúc tương tư trao gửi bảo vật, đến cảnh biệt ly thê lương khi thần nữ cưỡi xe rồng bay về mây biếc.",
            "brushwork": "Đặc trưng bút pháp 'Xuân tằm thổ ty' (tơ tằm mùa xuân) hoặc 'Thiết tuyến miêu' (đường sắt cuộn): đường nét tròn trịa, thanh mảnh, liên tục không đứt đoạn, vận động uyển chuyển như mây bay nước chảy, toát lên phong cốt Lục triều.",
            "inkAndColor": "Sử dụng khoáng sắc cổ truyền gồm chu sa, thạch thanh, thạch lục kết hợp mực nho. Màu sắc rực rỡ nhưng trầm tĩnh, tôn vinh sắc thái thần tiên thanh thoát và vẻ lộng lẫy của cỗ xe chim sếu thần thoại.",
            "spatialPerspective": "Thể hiện giai đoạn ấu trĩ sơ khởi của Sơn thủy học: 'Nhân đại ư sơn, thủy bất dung phiếm' (Người lớn hơn núi, nước sông không đủ thả thuyền). Núi non, cây cỏ chỉ đóng vai trò phân chia phông nền không gian cho tấn kịch nhân vật.",
            "symbolism": "Lạc Thần phiêu dạt tựa 'phiêu nhược kinh hồng, uyển nhược du long' biểu trưng cho cái đẹp lý tưởng vĩnh hằng mà con người trần thế khao khát nhưng không bao giờ với tới. Dòng Lạc Thủy biểu trưng cho sự ngăn cách định mệnh giữa cõi tục và cõi tiên.",
            "philosophicalMeaning": "Thấm đẫm tinh thần Huyền học thời Ngụy Tấn: sự dung hòa giữa Đạo gia 'Tiêu dao du' và nỗi bi thương thế sự của Nho gia. Tác phẩm biểu hiện nỗi u uất siêu thoát khỏi những hỗn loạn chính trị tàn khốc thời Lục triều.",
            "artisticLegacy": "Là tác phẩm hội họa tự sự trữ tình đầu tiên lưu danh trong lịch sử mỹ thuật Đông Á. Bút pháp và thủ pháp liên hoàn của Cố Khải Chi đã định hình quy phạm nhân vật họa cho suốt các triều đại Tùy, Đường và Tống."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Giới học giả quốc tế đồng thuận rằng các bản cuộn hiện lưu tại Cố Cung Bắc Kinh, Cố Cung Đài Bắc, Bảo tàng Liêu Ninh và Freer Gallery (Mỹ) đều là bản mô phỏng thời Tống, nhưng bảo lưu trung thực nhất phong mạo hội họa thế kỷ IV.",
            "debatedIssues": "Cuộc tranh luận học thuật giữa các học giả Từ Bang Đạt, Trương Hanh Tư và James Cahill xoay quanh việc phân định niên đại chính xác giữa bản Bắc Kinh (sớm hơn, đậm tính cổ phác) và bản Liêu Ninh (vẽ thêm nhiều chi tiết cảnh vật Nam Tống).",
            "comparativeContext": "So sánh với bích họa Mạc Cao Quật Đôn Hoàng thời Bắc Ngụy, 'Lạc Thần Phú Đồ' vượt trội về tính văn nhân quý tộc và sự tinh tế trong biểu cảm tâm lý.",
            "academicCitations": [
                "Trần Sư Tăng (陈师曾), 'Trung Quốc Hội Họa Sử' (中国绘画史), Thương Vụ Ấn Thư Quán.",
                "James Cahill, 'Chinese Painting', Skira Crown Publishers, 1960.",
                "Phan Vận Cáo (潘运告), 'Ngụy Tấn Nam Bắc Triều Họa Luận' (魏晋南北朝画论), Hồ Nam Mỹ Thuật Xuất Bản Xã."
            ]
        }
    },
    {
        "id": "nvshi-zhentu",
        "titleZh": "女史箴图",
        "pinyin": "Nǚ Shǐ Zhēn Tú",
        "titleEn": "Admonitions of the Instructress to the Court Ladies",
        "titleVi": "Nữ Sử Châm Đồ",
        "eraId": "weijin",
        "artist": {
            "nameZh": "顾恺之",
            "pinyin": "Gù Kǎizhī",
            "nameVi": "Cố Khải Chi",
            "alias": "Trường Khang (长康)",
            "dates": "c. 344–406 CN",
            "era": "Đông Tấn (东晋)",
            "school": "Lục Triều Cổ Phái (六朝古派)",
            "bio": "Họa sư hàng đầu Đông Tấn, bậc thầy khắc họa thần thái nội tâm quý tộc qua nét vẽ thanh tú và mực sắc trang nghiêm."
        },
        "dynasty": {"eraId": "weijin", "nameZh": "东晋", "nameVi": "Đông Tấn (317–420 CN)"},
        "creationDate": "Thế kỷ IV (Bản lưu giữ là bản Đường mô thế kỷ VII)",
        "genreId": "figure",
        "genres": ["figure", "court", "fine-brush"],
        "genreLabel": "Nhân vật họa • Cung đình (人物画 • 宫廷)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "24.8 × 348.2 cm",
        "museum": "The British Museum (Đại Anh Bảo Tàng Viện, London)",
        "attribution": "Đường triều mô bản (唐摹本) — Bản sao hoàng cung thời sơ Đường, được đánh giá là bản sao cổ nhất và trung thực nhất với nét vẽ của Cố Khải Chi.",
        "image": "assets/images/academic/han-silk-banner.jpg",
        "featuredQuote": {
            "zh": "人咸知修其容，而莫知饰其性。性之不饰，或愆礼法。",
            "vi": "Người đời ai cũng biết trau chuốt dung mạo, mà chẳng ai biết tu dưỡng tính tình. Tính nết không sửa trị, ắt làm tổn hại lễ pháp.",
            "author": "Trương Hoa (张华)",
            "source": "Nữ Sử Châm (女史箴 văn bia khắc trong họa phẩm)"
        },
        "analysis": {
            "historicalBackground": "Dựa trên bài văn giáo huấn 'Nữ Sử Châm' của thi nhân Trương Hoa thời Tây Tấn, nhằm răn đe Giả hoàng hậu lộng quyền hoang dâm, đề cao phẩm hạnh phụ nữ chốn cung đình theo quy chuẩn đạo đức Nho gia.",
            "artistBiography": "Cố Khải Chi qua tác phẩm đã thể hiện tài năng bậc thầy trong việc biến một văn bản giáo huấn khô khan thành những trường đoạn kịch tính sống động về đời sống sinh hoạt nội cung Lục triều.",
            "artisticComposition": "Gồm 9 phân đoạn tự sự độc lập minh họa các đức tính công dung ngôn hạnh: đoạn Phùng tiệp dư dũng cảm chặn gấu cứu Hán Nguyên Đế, đoạn từ chối đi chung kiệu với vua, cảnh chải tóc soi gương, cảnh gia đình sum vầy.",
            "brushwork": "Đỉnh cao của bút pháp 'Cao cổ du ty miêu' (高古游丝描): sợi tơ thanh thoát, nhịp điệu dồn dập nhưng chuẩn xác tuyệt đối, nếp áo buông rủ bay lượn tạo cảm giác nhân vật như đang nhẹ bước giữa thinh không.",
            "inkAndColor": "Sắc điệu nhã nhặn, phối hợp hài hòa giữa màu đất son, đen tuyền và trắng phấn. Mực đen của mái tóc và lông mày làm nổi bật làn da ngọc ngà của các mệnh phụ quý tộc.",
            "spatialPerspective": "Các nhân vật được đặt trong không gian đa điểm, phối hợp đồ nội thất như sập gụ, gương soi tròn và rèm che để tạo chiều sâu ước lệ mà không cần quy luật tụ điểm cơ học.",
            "symbolism": "Cảnh phụ nữ ngồi trước gương soi: tấm gương không chỉ phản chiếu dung nhan thể xác mà biểu trưng cho tấm gương đạo đức tâm linh răn mình mỗi ngày.",
            "philosophicalMeaning": "Sự kết hợp mẫu mực giữa luân lý chính danh Nho gia và cốt cách phong lưu 'Thanh đàm' Đạo gia của giới sĩ đại phu Giang Nam thời kỳ di cư sang phương Nam sau biến loạn Vĩnh Gia.",
            "artisticLegacy": "Được xếp vào hàng bảo vật hội họa cổ nhất thế giới còn tồn tại. Năm 1900 bị liên quân tám nước cướp khỏi Di Hòa Viên Bắc Kinh, hiện là tiêu điểm nghiên cứu mỹ thuật Trung Hoa tại phương Tây."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Nghiên cứu của Bảo tàng Anh và các nhà giám định Cố Cung khẳng định đây là bản Đường mô chuẩn xác thực hiện vào khoảng thời Trinh Quán (Lý Thế Dân), trên lụa còn lưu giữ ngự ấn của hoàng đế Tống Huy Tông và Càn Long.",
            "debatedIssues": "Kỹ thuật phục chế bảo quản tranh cuộn theo phong cách phương Tây (cắt rời dán lên bảng gỗ phẳng thập niên 1910) từng gây tranh cãi lớn về phương pháp bảo tồn di sản phương Đông.",
            "comparativeContext": "So với các họa phẩm cùng thời ở La Mã hay Ba Tư, tác phẩm thể hiện trình độ biểu cảm tâm lý nhân vật và sự thanh tao của đường nét vượt trước nhiều thế kỷ.",
            "academicCitations": [
                "Shane McCausland, 'First Masterpiece of Chinese Painting: The Admonitions Scroll', British Museum Press, 2003.",
                "Dương Tân (杨新), 'Cố Khải Chi dữ Nữ Sử Châm Đồ' (顾恺之与女史箴图), Cố Cung Bác Vật Viện Viện San."
            ]
        }
    },
    {
        "id": "ershiba-xiu",
        "titleZh": "二十八宿神形图",
        "pinyin": "Èr Shí Bā Xiù Shén Xíng Tú",
        "titleEn": "The Spirits of the Twenty-Eight Lunar Mansions",
        "titleVi": "Nhị Thập Bát Tú Thần Hình Đồ",
        "eraId": "weijin",
        "artist": {
            "nameZh": "张僧繇",
            "pinyin": "Zhāng Sēngyáo",
            "nameVi": "Trương Tăng Diêu",
            "alias": "Tăng Diêu",
            "dates": "Hoạt động khoảng 502–557 CN",
            "era": "Nam triều Lương (南朝梁)",
            "school": "Lương Họa Viện (梁朝宫廷派)",
            "bio": "Họa gia trứ danh Nam triều Lương thời Lương Vũ Đế, giữ chức Hữu quân tướng quân. Nổi tiếng với kỹ thuật 'Một cốt pháp' (没骨法) và điển tích vẽ rồng điểm mắt 'Họa long điểm tinh' (画龙点睛)."
        },
        "dynasty": {"eraId": "weijin", "nameZh": "南朝梁", "nameVi": "Nam triều Lương (502–557 CN)"},
        "creationDate": "Thế kỷ VI (Bản truyền thế thời Tống / Đường)",
        "genreId": "figure",
        "genres": ["figure", "court", "fine-brush"],
        "genreLabel": "Đạo giáo thần hình • Nhân vật họa (道教神像 • 人物画)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "27.5 × 489.7 cm",
        "museum": "大阪市立美术馆 (Bảo tàng Mỹ thuật Thành phố Osaka, Nhật Bản)",
        "attribution": "Truyền bản (传本) — Truyền bản quy thuộc Trương Tăng Diêu, tiêu biểu cho phong cách 'Trương gia dạng' (张家样).",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "僧繇善画，金陵安乐寺画白龙，不点睛。点之，雷电破壁，一龙乘云上天。",
            "vi": "Tăng Diêu giỏi họa, vẽ rồng trắng chùa An Lạc ở Kim Lăng mà không điểm mắt. Vừa điểm mắt xong, sấm sét xé toang vách chùa, một con rồng cưỡi mây bay vút lên trời.",
            "author": "Trương Ngạn Viễn (张彦远)",
            "source": "Lịch Đại Danh Họa Ký (历代名画记)"
        },
        "analysis": {
            "historicalBackground": "Minh họa 28 chòm sao thiên văn trong thiên văn học và Đạo giáo Trung Hoa cổ đại dưới hình dạng nhân cách hóa thần linh, nửa người nửa linh thú, kết hợp tư duy chiêm tinh và tôn giáo thời Nam triều.",
            "artistBiography": "Trương Tăng Diêu là nhân vật tiếp nhận luồng gió mỹ thuật Ấn Độ từ con đường Phật giáo Nam triều, sáng tạo kỹ thuật vẽ hoa lõm lồi 'Lõm lồi hoa' (凹凸花) tạo cảm giác lập thể thị giác.",
            "artisticComposition": "Cuộn thư họa trải dài miêu tả lần lượt từng vị tinh tú: có vị ngồi uy nghiêm như đế vương, có vị mang đầu chim trĩ, đầu hươu, đầu rắn, kết hợp khí cụ hộ pháp tinh tế.",
            "brushwork": "Sử dụng lối vẽ 'Trương gia dạng': đường viền thanh tú nhưng gân guốc, cơ bắp và nếp lụa mang khối tròn mềm mại, khác biệt rõ với nét mảnh mai của Cố Khải Chi.",
            "inkAndColor": "Màu sắc huyền bí với tông xanh chàm, son điều và vàng thổ hoàng, toát lên vẻ kỳ vĩ của tinh tú vũ trụ.",
            "spatialPerspective": "Các vị thần đứng hoặc ngự trên mây phiêu hốt giữa khoảng không vô tận, gợi không gian thiên hà bao la theo quan niệm vũ trụ quan cổ đại.",
            "symbolism": "Mỗi tinh quân cai quản một cung trời Đông Tây Nam Bắc (Thanh Long, Bạch Hổ, Chu Tước, Huyền Vũ), phản ánh sự an bài trật tự vũ trụ và thiên mệnh đế vương.",
            "philosophicalMeaning": "Biểu thị sâu sắc triết lý Thiên Nhân Tương Ứng (天人相应) và Đạo giáo vũ trụ học: con người, vạn vật và tinh tú cùng chung một nhịp thở sinh hóa của Khí.",
            "artisticLegacy": "Là chuẩn mực tạo hình nhân vật thần thoại Đạo giáo suốt nghìn năm, ảnh hưởng trực tiếp tới tượng pháp Đôn Hoàng thời Tùy Đường."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Tác phẩm thể hiện bước chuyển mình vĩ đại của hội họa Trung Hoa khi dung nạp kỹ thuật tạo khối ngoại lai vào lòng mỹ học đường nét truyền thống.",
            "debatedIssues": "Một số chuyên gia suy đoán cuộn thư có thể do họa sĩ Lương Lệnh Tán thời Đường mô phỏng dựa trên nguyên tác Nam triều của Trương Tăng Diêu.",
            "comparativeContext": "Đối chiếu với tượng đá Lăng mộ Tiêu Lương ở Nam Kinh, phong cách hình thể có sự đồng điệu mật thiết về tinh thần hùng tráng kỳ vĩ.",
            "academicCitations": [
                "Vương Bá Mẫn (王伯敏), 'Trung Quốc Hội Họa Thông Sử' (中国绘画通史).",
                "Phan Vận Cáo, 'Lục Triều Họa Luận Nghiên Cứu'."
            ]
        }
    },

    # -------------------------------------------------------------------------
    # ERA 2: SUI & TANG DYNASTIES (隋唐)
    # -------------------------------------------------------------------------
    {
        "id": "you-chun-tu",
        "titleZh": "游春图",
        "pinyin": "Yóu Chūn Tú",
        "titleEn": "Strolling About in Spring",
        "titleVi": "Du Xuân Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "展子虔",
            "pinyin": "Zhǎn Zǐqián",
            "nameVi": "Triển Tử Kiền",
            "alias": "Tử Kiền",
            "dates": "c. 550–604 CN",
            "era": "Tùy triều (隋朝)",
            "school": "Kim Bích Sơn Thủy Khai Tổ (金碧山水开祖)",
            "bio": "Họa sư cung đình triều Tùy, được tôn là 'Đường họa chi tổ'. Người đầu tiên đưa Sơn thủy họa tách khỏi vai trò phụ trợ nhân vật để trở thành một dòng họa độc lập hoàn chỉnh."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "隋朝", "nameVi": "Tùy triều (581–618 CN)"},
        "creationDate": "Khoảng năm 600 CN (Thời Tùy Văn Đế)",
        "genreId": "landscape",
        "genres": ["landscape", "fine-brush", "court"],
        "genreLabel": "Kim bích Sơn thủy • Công bút (金碧山水 • 工笔)",
        "material": "Quyển trục lụa, khoáng sắc Thanh lục Kim bích (绢本设色)",
        "dimensions": "43 × 80.5 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Chân tích hoặc Tùy-Đường bản (隋唐传世孤品) — Được Tống Huy Tông ngự đề tiêu đề, là tác phẩm sơn thủy cuộn tròn cổ nhất còn nguyên vẹn trên thế giới.",
        "image": "assets/images/museum/qianli-jiangshan.jpg",
        "featuredQuote": {
            "zh": "触物留情，备皆奇绝。尤神于山水，远近山川，咫尺千里。",
            "vi": "Chạm vào vạn vật đều gửi trọn tình ý, nét bút kỳ tuyệt khôn cùng. Thần diệu nhất là cảnh sơn thủy, non sông xa gần trải dài nghìn dặm chỉ trong gang tấc.",
            "author": "Lý Tự Chân (李嗣真)",
            "source": "Tục Họa Phẩm Lục (续画品录)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ Tùy thống nhất non sông sau hơn ba thế kỷ chia cắt Nam Bắc. Không khí thái bình thịnh trị thúc đẩy giới quý tộc mở hội ngoạn cảnh mùa xuân, khơi nguồn cho bức tranh du xuân tráng lệ.",
            "artistBiography": "Triển Tử Kiền trải qua các triều Bắc Tề, Bắc Chu đến Tùy, giữ chức Triêu tán đại phu. Ông am hiểu cả phong cách hùng vĩ phương Bắc lẫn nét mềm mại phương Nam.",
            "artisticComposition": "Bố cục 'Chỉ xích thiên lý' (chiếc chiếu con thu trọn nghìn dặm): dòng sông rộng lớn ngăn cách đôi bờ; bờ gần có quan khách cưỡi ngựa thưởng hoa; bờ xa trùng điệp núi xanh mây trắng.",
            "brushwork": "Câu tuyến tỉ mỉ bằng mực đen tinh vi, không dùng kỹ thuật thuấn (皴 - chà xát vân đá) phức tạp của thời Tống mà dùng nét viền dứt khoát rồi tô màu phẳng.",
            "inkAndColor": "Khai sáng phong cách 'Thanh lục Kim bích' (青绿金碧): dùng bột khoáng thạch thạch thanh (xanh lam), thạch lục (xanh lục ngọc) và viền nhũ vàng, tạo sắc diện rực rỡ tươi sáng đón xuân.",
            "spatialPerspective": "Giải quyết dứt điểm khiếm khuyết 'người lớn hơn núi' của thời Lục triều: người và ngựa nhỏ nhắn tương xứng với tỷ lệ thiên nhiên, tạo cảm giác khoáng đạt vô biên.",
            "symbolism": "Sắc xuân hồi sinh cỏ cây tượng trưng cho sự tái sinh thịnh vượng của đế chế thống nhất; mặt nước mênh mông tượng trưng cho tâm cảnh an định thái hòa.",
            "philosophicalMeaning": "Thể hiện tư tưởng Đạo gia 'Lạc sơn lạc thủy' và niềm hoan lạc tự nhiên, con người hòa nhập trọn vẹn vào vòng tuần hoàn tạo hóa.",
            "artisticLegacy": "Được mệnh danh là 'Khai sơn tị tổ' của Sơn thủy họa Trung Hoa, đặt nền móng trực tiếp cho trường phái Đại Tiểu Lý Tướng Quân (Lý Tư Huấn, Lý Chiêu Đạo) thời Thịnh Đường."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Nhà giám định Trương Bá Câu đã bán cả dinh thự của mình để chuộc bức 'Du Xuân Đồ' khỏi rơi vào tay thương nhân ngoại quốc năm 1946 rồi hiến tặng quốc gia, khẳng định vị thế quốc bảo đệ nhất.",
            "debatedIssues": "Một số học giả như Phó Hi Niên dựa trên trang phục và yên cương ngựa cho rằng đây có thể là bản phục chế chuẩn xác thời Trung Đường, song giá trị mỹ thuật vẫn mang tính mẫu mực tuyệt đối.",
            "comparativeContext": "So với các bức bích họa cảnh vật tại hang Mạc Cao số 217 Đôn Hoàng thời Đường, 'Du Xuân Đồ' có sự thanh thoát quý phái vượt bậc.",
            "academicCitations": [
                "Phó Hi Niên (傅熹年), 'Về Niên Đại và Tác Giả Du Xuân Đồ' (关于展子虔游春图的年代问题), Văn Vật.",
                "Trịnh Chấn Đạc (郑振铎), 'Thực Am Tàng Họa Lục'."
            ]
        }
    },
    {
        "id": "bu-nian-tu",
        "titleZh": "步辇图",
        "pinyin": "Bù Niǎn Tú",
        "titleEn": "Emperor Taizong Receiving the Tibetan Envoy",
        "titleVi": "Bộ Liễn Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "阎立本",
            "pinyin": "Yán Lìběn",
            "nameVi": "Diêm Lập Bản",
            "alias": "Lập Bản",
            "dates": "c. 601–673 CN",
            "era": "Đường triều (唐朝)",
            "school": "Đường Cung Đình Điển Phạm (唐代宫廷典范)",
            "bio": "Đại danh họa kiêm Tể tướng thời sơ Đường (Hữu thừa tướng thời Đường Cao Tông). Bậc thầy vĩ đại về tranh chân dung lịch sử, chính trị và nhân vật cung đình."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "唐朝", "nameVi": "Đường triều (618–907 CN)"},
        "creationDate": "Năm 640–641 CN (Thời Đường Thái Tông Trinh Quán)",
        "genreId": "court",
        "genres": ["court", "figure", "fine-brush"],
        "genreLabel": "Cung đình nhân vật • Chính trị lịch sử (宫廷人物 • 历史)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "38.5 × 129.6 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Tống mô bản (宋摹本) — Bản sao hoàng cung Bắc Tống mô phỏng trực tiếp từ chân tích của Diêm Lập Bản, bảo tồn chuẩn xác khí phách thời Thịnh Đường.",
        "image": "assets/images/articles/hero-tang-dynasty.jpg",
        "featuredQuote": {
            "zh": "太宗威容俨肃，顾盼多 uy；赞普使节，肃穆虔恭。",
            "vi": "Thái Tông uy nghi túc mục, ánh mắt nhìn toát vẻ hùng tài; sứ tiết Thổ Phiên cung kính trang nghiêm đảnh lễ thiên triều.",
            "author": "Mễ Phất (米芾)",
            "source": "Họa Sử (画史)"
        },
        "analysis": {
            "historicalBackground": "Ghi lại sự kiện ngoại giao lịch sử năm 640 CN: Đường Thái Tông Lý Thế Dân tiếp kiến Lộc Đông Tán (Gar Tongtsen Yulsung), đại thần sứ giả của Tán Phổ Tùng Tán Cán Bố (Songtsen Gampo) Thổ Phiên sang cầu hôn, dẫn đến cuộc hôn nhân lịch sử của Văn Thành Công Chúa.",
            "artistBiography": "Diêm Lập Bản xuất thân gia đình nghệ thuật kiến trúc danh giá bậc nhất sơ Đường, từng vẽ 24 công thần Lăng Yên Các. Nét vẽ của ông là biểu tượng thị giác cho quyền lực đế quốc Đại Đường.",
            "artisticComposition": "Bố cục đối lập nhịp nhàng: bên phải là Đường Thái Tông ngồi trên bộ liễn khiêng bởi 6 cung nữ, bao quanh bởi lọng che và quạt lông phượng; bên trái là viên quan điển lễ dẫn đường, sứ giả Lộc Đông Tán và viên thông dịch viên.",
            "brushwork": "Kỹ thuật 'Thiết tuyến miêu' (đường sắt cuộn) cứng cáp, gãy gọn, dứt khoát. Nét bút miêu tả trang phục hoa văn gấm của Lộc Đông Tán thể hiện kỹ năng quan sát ngoại giao dị chủng bậc thầy.",
            "inkAndColor": "Màu đỏ chu sa, trắng phấn, đen tuyền và vàng nâu tạo nên không khí ngoại giao cung đình uy nghiêm, vương giả mà không lòe loẹt.",
            "spatialPerspective": "Áp dụng thủ pháp tỷ lệ tôn ti đặc trưng phương Đông: Đường Thái Tông có vóc dáng to lớn vượt trội hơn hẳn các cung nữ và sứ thần, khẳng định vị thế 'Thiên Khả Hãn' tối thượng.",
            "symbolism": "Bộ liễn và chiếc quạt lông phượng biểu trưng cho sự che chở thái bình; thái độ điềm tĩnh của Thái Tông đối nghịch với sự kính sợ của sứ giả Thổ Phiên phản ánh hào khí vạn quốc triều cống.",
            "philosophicalMeaning": "Thể hiện tư tưởng 'Hoài nhu viễn nhân' (lấy ân đức vỗ về biên cương) của Nho gia và chính trị vương đạo thời Trinh Quán.",
            "artisticLegacy": "Kiệt tác hàng đầu về hội họa lịch sử chính trị cổ đại phương Đông, tư liệu quý giá về ngoại giao Đường–Tạng và trang phục thời sơ Đường."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Tác phẩm là bản sao thời Bắc Tống dựa trên bức vẽ của Diêm Lập Bản, được các hoàng đế Tống Huy Tông, Chương Tông Kim và Càn Long Thanh trân quý đóng ngự ấn bảo chứng.",
            "debatedIssues": "Cuộc tranh luận về việc liệu bản cuộn này có phải là một phần của bộ tranh đồ sộ hơn về các sứ thần phiên vương hay là một bức tranh độc lập hoàn chỉnh.",
            "comparativeContext": "So sánh với chân dung các đế vương trong 'Lịch Đại Đế Vương Đồ' (Bảo tàng Boston), nét mặt của Thái Tông ở đây mang tính nhân văn và ấm áp hơn.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Đường Diêm Lập Bản Bộ Liễn Đồ Nghiên Cứu' (唐阎立本步辇图研究).",
                "Trần Cao Hoa (陈高华), 'Tùy Đường Họa Gia Sử Liệu'."
            ]
        }
    },
    {
        "id": "lidai-diwang-tu",
        "titleZh": "历代帝王图",
        "pinyin": "Lì Dài Dì Wáng Tú",
        "titleEn": "Thirteen Emperors Scroll",
        "titleVi": "Lịch Đại Đế Vương Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "阎立本",
            "pinyin": "Yán Lìběn",
            "nameVi": "Diêm Lập Bản",
            "alias": "Lập Bản",
            "dates": "c. 601–673 CN",
            "era": "Đường triều (唐朝)",
            "school": "Đường Cung Đình Điển Phạm (唐代宫廷典范)",
            "bio": "Họa thánh thời sơ Đường, bậc thầy khắc họa tính cách và số phận lịch sử qua dung mạo chân dung."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "唐朝", "nameVi": "Đường triều (618–907 CN)"},
        "creationDate": "Khoảng năm 650–670 CN",
        "genreId": "figure",
        "genres": ["figure", "court", "fine-brush"],
        "genreLabel": "Đế vương chân dung • Nhân vật họa (帝王肖像 • 人物画)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "51.3 × 531 cm",
        "museum": "Museum of Fine Arts, Boston (Bảo tàng Mỹ thuật Boston, Hoa Kỳ)",
        "attribution": "Đường-Tống truyền bản (唐宋传本) — Nửa đầu cuộn vẽ từ thời Đường, nửa sau được tu bổ/mô phỏng thời Bắc Tống.",
        "image": "assets/images/articles/hero-tang-dynasty.jpg",
        "featuredQuote": {
            "zh": "观其像，知其人；存亡理乱，一目了然。",
            "vi": "Xem hình tượng biết ngay con người; lẽ hưng vong hay loạn trị của từng triều đại hiện rõ rệt chỉ trong một ánh nhìn.",
            "author": "Chu Cảnh Huyền (朱景玄)",
            "source": "Đường Triều Danh Họa Lục (唐朝名画录)"
        },
        "analysis": {
            "historicalBackground": "Miêu tả chân dung 13 vị hoàng đế từ thời Tây Hán qua Tam Quốc, Tấn, Nam Bắc triều đến Tùy (từ Tiền Hán Chiêu Đế đến Tùy Dạng Đế). Tác phẩm mang chức năng giáo huấn chính trị răn đe các hoàng tử nhà Đường.",
            "artistBiography": "Diêm Lập Bản vận dụng tài năng chân dung siêu việt để biến lịch sử thành gương soi đạo đức, phân định rõ minh quân và hôn quân qua ánh mắt và thần thái.",
            "artisticComposition": "13 nhóm nhân vật sắp đặt độc lập theo trục thời gian, mỗi hoàng đế đi kèm 2 thị tòng nâng đỡ hoặc cầm quạt, tạo nhịp điệu trang nghiêm tựa một buổi lâm triều lịch sử thiên thu.",
            "brushwork": "Nét vẽ gân guốc, y phục dùng nét 'Chiết lô miêu' (折芦描 - nét sậy bẻ) sắc bén, nếp áo rủ tự nhiên biểu thị quyền lực quân vương.",
            "inkAndColor": "Sử dụng màu đen huyền, đỏ son và vàng thẫm làm chủ đạo, khắc họa mũ miện cửu lưu và long bào theo đúng quy chế điển lễ từng triều.",
            "spatialPerspective": "Hình tượng không gian phẳng ước lệ, tập trung toàn bộ năng lượng thị giác vào biểu cảm khuôn mặt và khí chất tâm linh của từng đế vương.",
            "symbolism": "Minh quân như Hán Quang Vũ Đế, Hán Văn Đế có nét mặt đĩnh đạc, từ hòa; hôn quân mất nước như Trần Hậu Chủ, Tùy Dạng Đế nét mặt ti tiện, hoang mang, biểu trưng cho luật nhân quả lịch sử.",
            "philosophicalMeaning": "Đậm đặc tinh thần Nho gia 'Dĩ sử vi giám' (Lấy lịch sử làm gương), tôn vinh đức trị và cảnh tỉnh bạo chính.",
            "artisticLegacy": "Bộ sưu tập chân dung đế vương quy mô và có giá trị sử liệu, mỹ thuật cao nhất còn lưu lại của nền văn minh Trung Hoa cổ đại."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Mỹ thuật Boston sở hữu kiệt tác này từ năm 1931. Giám định hiện đại khẳng định đây là di sản vô giá phản ánh trực tiếp mỹ học cung đình thời Đường.",
            "debatedIssues": "Các nhà nghiên cứu phân định rõ phần 6 đế vương đầu do chính Diêm Lập Bản hoặc họa sĩ sơ Đường thực hiện, còn 7 đế vương sau do họa sư Bắc Tống hoàn thiện tiếp.",
            "comparativeContext": "So với bích họa các vua chúa trong lăng mộ Lý Hiền, tác phẩm đạt tới sự tinh tế biểu cảm nội tâm ở đẳng cấp cao hơn nhiều.",
            "academicCitations": [
                "Kojiro Tomita, 'Portraits of the Emperors: A Chinese Scroll-Painting Attributed to Yen Li-pen', Bulletin of the MFA Boston, 1932.",
                "Trần Dần Khác (陈寅恪), 'Tùy Đường Chế Độ Dục Nguyên Luận Cảo'."
            ]
        }
    },
    {
        "id": "tianwang-songzi-tu",
        "titleZh": "天王送子图",
        "pinyin": "Tiān Wáng Sòng Zǐ Tú",
        "titleEn": "Heavenly King Bringing a Son (Shakyamuni's Birth)",
        "titleVi": "Thiên Vương Tống Tử Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "吴道子",
            "pinyin": "Wú Dàozǐ",
            "nameVi": "Ngô Đạo Tử",
            "alias": "Đạo Huyền (道玄)",
            "dates": "c. 685–758 CN",
            "era": "Đường triều (Thịnh Đường)",
            "school": "Ngô Đới Đương Phong (吴带当风)",
            "bio": "Họa thánh số một trong lịch sử hội họa Trung Hoa, được cả Nho, Phật, Đạo tôn sùng. Khai sáng phong cách 'Ngô đới đương phong', nét bút phóng khoáng như vũ bão, khí phách kinh thiên động địa."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "盛唐", "nameVi": "Thịnh Đường (thế kỷ VIII CN)"},
        "creationDate": "Thế kỷ VIII (Bản lưu giữ là bản Tống mô tinh phẩm)",
        "genreId": "figure",
        "genres": ["figure", "freehand", "ink-wash"],
        "genreLabel": "Phật giáo điển tích • Thủy mặc bạch miêu (佛教典籍 • 白描)",
        "material": "Quyển trục giấy, mực nho thuần túy (纸本水墨)",
        "dimensions": "35.5 × 338.1 cm",
        "museum": "大阪市立美术馆 (Bảo tàng Mỹ thuật Thành phố Osaka, Nhật Bản)",
        "attribution": "Tống triều mô bản (宋摹本) — Bản sao hoàng cung thời Bắc Tống mô phỏng lại kiệt tác của Ngô Đạo Tử, bảo lưu hoàn hảo kỹ thuật 'Ngô gia dạng' (吴家样).",
        "image": "assets/images/academic/laozi-portrait.jpg",
        "featuredQuote": {
            "zh": "道子画人物，如狂风下雨，挥毫立就。吴带当风，曹衣出水，古今两绝。",
            "vi": "Đạo Tử vẽ nhân vật như gió cuồng mưa bão, vung bút liền thành. Áo Ngô đón gió, xiêm Tào nhô nước, nghìn thu hai cõi tuyệt tác.",
            "author": "Quách Nhược Hư (郭若虚)",
            "source": "Đồ Họa Kiến Văn Chí (图画见闻志)"
        },
        "analysis": {
            "historicalBackground": "Minh họa điển tích Đức Phật Thích Ca Mâu Ni đản sinh tại thành Ca Tỳ La Vệ, được phụ vương Tịnh Phạn mang tới đền bái tạ chư thiên, nhưng các tượng thần Thiên vương đều cúi đầu đảnh lễ ngài.",
            "artistBiography": "Ngô Đạo Tử xuất thân bình dân ở Hà Nam, từ trẻ đã nổi danh kinh đô Lạc Dương, được Đường Minh Hoàng triệu vào cung làm Hàn lâm viện đại chiếu, vẽ hơn 300 bức bích họa tại các ngôi chùa tráng lệ nhất Trường An.",
            "artisticComposition": "Chia làm hai phân cảnh lớn: cảnh thứ nhất là Thiên vương ngự trên ngai báu đầy vẻ phẫn nộ uy linh cùng chư thần hộ pháp; cảnh thứ hai là Tịnh Phạn vương thành kính bế ấu chúa Thích Ca cùng hoàng hậu Ma Gia.",
            "brushwork": "Đỉnh cao tuyệt đối của nét bút 'Thuần thái điều' (莼菜条 - sợi rau thuần): nét bút lúc to lúc nhỏ, khi nhấn khi buông, chuyển hướng đột ngột mang năng lượng cuồn cuộn tựa sấm sét, vạt áo bay phấp phới đón gió ('Ngô đới đương phong').",
            "inkAndColor": "Vận dụng xuất sắc phong cách 'Bạch miêu tả ý' và 'Tiêu mặc' (焦墨) nhạt khô, dùng mực đặc gợi hình khối cơ bắp mà không cần tô nhiều màu ('Ngô trang' - 吴装).",
            "spatialPerspective": "Nhân vật vận động mãnh liệt trong không gian ba chiều vô hình, con quái thú và các thiên thần như chuẩn bị lao ra khỏi mặt tranh giấy cuộn.",
            "symbolism": "Tượng thần Thiên vương cúi mình quy phục trước hài nhi sơ sinh biểu trưng cho sự đắc thắng của Phật tính và Chân lý giác ngộ trước sức mạnh cơ bắp thần quyền trần thế.",
            "philosophicalMeaning": "Dung hợp hoàn mỹ giữa giáo lý Phật giáo Đại thừa và khí phách khai phóng khoáng đạt vô song của thời đại Thịnh Đường.",
            "artisticLegacy": "Khai sáng ra trường phái 'Bạch miêu' (chỉ dùng nét mực không tô màu) cho toàn bộ nền mỹ thuật Đông Á, ảnh hưởng sâu xa đến Lý Công Lân thời Tống và hội họa Nhật Bản."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bản Osaka được các chuyên gia định vị là tác phẩm thể hiện trung thực nhất phong cách của Ngô Đạo Tử còn truyền lại trên trần gian, mang tính bản lề giữa tranh bích họa và tranh cuộn văn nhân.",
            "debatedIssues": "Vấn đề phân định giữa nét bút thời Bắc Tống và phong cốt Đường: một số học giả cho rằng kỹ xảo vẽ nét đã có thêm tính thư pháp của giới sĩ đại phu thời Tống.",
            "comparativeContext": "Đối sánh với bích họa cảnh biến Lăng Già Kinh ở Đôn Hoàng thời Thịnh Đường, bút lực của bức này vượt trội về độ mãnh liệt và phóng khoáng.",
            "academicCitations": [
                "Trương Ngạn Viễn (张彦远), 'Lịch Đại Danh Họa Ký - Quyển cửu: Ngô Đạo Tử'.",
                "Lạc Tân Cương (罗新岗), 'Ngô Đạo Tử Thần Phẩm Nghiên Cứu'."
            ]
        }
    },
    {
        "id": "guoguo-furen-youchun",
        "titleZh": "虢国夫人游春图",
        "pinyin": "Guó Guó Fū Rén Yóu Chūn Tú",
        "titleEn": "Lady Guoguo's Spring Outing",
        "titleVi": "Quắc Quốc Phu Nhân Du Xuân Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "张萱",
            "pinyin": "Zhāng Xuān",
            "nameVi": "Trương Huyên",
            "alias": "Trương Cung Ban",
            "dates": "Hoạt động khoảng 713–755 CN",
            "era": "Đường triều (Thịnh Đường)",
            "school": "Thịnh Đường Quý Tộc Sĩ Nữ Phái (盛唐贵族仕女派)",
            "bio": "Họa gia cung đình thời Khai Nguyên Thiên Bảo thời Đường Minh Hoàng, chuyên vẽ đề tài sinh hoạt xa hoa của hoàng thất và quý tộc sĩ nữ Trường An."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "盛唐", "nameVi": "Thịnh Đường (thế kỷ VIII CN)"},
        "creationDate": "Khoảng năm 750 CN (Bản Tống mô lưu giữ thế kỷ XI)",
        "genreId": "court",
        "genres": ["court", "figure", "fine-brush"],
        "genreLabel": "Quý tộc nhân vật • Phong tục cung đình (贵族人物 • 宫廷)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "51.8 × 148 cm",
        "museum": "辽宁省博物馆 (Bảo tàng tỉnh Liêu Ninh)",
        "attribution": "Tống mô bản (宋摹本) — Bản sao tinh xảo tuyệt luân của Viện Họa triều Tống (được cho là do Tống Huy Tông đích thân lâm mô).",
        "image": "assets/images/articles/hero-spring-festival.jpg",
        "featuredQuote": {
            "zh": "虢国夫人承主恩，平明骑马入宫门。却嫌脂粉污颜色，淡扫蛾眉朝至尊。",
            "vi": "Quắc quốc phu nhân ơn chúa ban, Tờ mờ phi ngựa thẳng cung đàn. Chê lấm phấn son làm bẩn nét, Mày ngài quét nhạt viếng minh nhan.",
            "author": "Trương Hỗ (张祜)",
            "source": "Tập Linh Đài (集灵台)"
        },
        "analysis": {
            "historicalBackground": "Miêu tả cảnh Quắc Quốc phu nhân (tam tỷ của Dương Quý Phi) cùng đoàn tùy tùng cưỡi ngựa du xuân vào một buổi sáng sớm mùa xuân tháng Ba thời Đường Huyền Tông thịnh trị.",
            "artistBiography": "Trương Huyên là bậc thầy sáng tạo hình mẫu phụ nữ 'Phong phì cốt lệ' (thân hình đẫy đà, xương cốt yêu kiều), biểu trưng cho chuẩn mực cái đẹp hoàng gia Thịnh Đường.",
            "artisticComposition": "Bố cục thong dong trải dài từ phải qua trái với 8 thớt ngựa và 9 nhân vật. Đoàn người thong thả tiến bước, khoảng trống lưu bạch phía sau tạo cảm giác gió xuân mơn man tràn ngập.",
            "brushwork": "Đường nét 'Thiết tuyến miêu' mềm mại, nếp váy áo lụa là bay nhẹ; bờm ngựa được tỉa tót từng sợi bằng lối vẽ 'Tam tiêm bính' vô cùng điêu luyện.",
            "inkAndColor": "Sắc màu rực rỡ tươi sáng: sắc hồng đào, lục thạch, đen tuyền của yên ngựa và màu lông ngựa bạch, tạo không khí lễ hội xuân sang trọng quyền quý.",
            "spatialPerspective": "Không cần vẽ một cành cây ngọn cỏ hay phong cảnh nền nào, nhưng người xem vẫn cảm nhận rõ mùa xuân căng tràn qua dáng ngựa khoan thai và trang phục mỏng nhẹ của các mệnh phụ.",
            "symbolism": "Ngựa béo tốt, người đẫy đà thể hiện sự sung túc tột bực của kỷ nguyên Khai Nguyên; việc phu nhân cưỡi ngựa không son phấn biểu thị sự tự tin tột cùng của giai cấp thống trị.",
            "philosophicalMeaning": "Phản ánh mỹ học thế tục lạc quan của thời Thịnh Đường: con người say đắm tận hưởng vẻ đẹp hiện sinh và hoan lạc của cuộc sống trần thế.",
            "artisticLegacy": "Là đỉnh cao kiệt xuất của dòng tranh Sĩ nữ cổ điển Trung Hoa, tư liệu số một về thú chơi ngựa và thời trang phụ nữ thời Đường."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bức tranh tại Bảo tàng Liêu Ninh là bản sao hoàn mỹ nhất thế giới, thể hiện đỉnh cao kỹ thuật sao chép của Họa viện Bắc Tống dưới thời Tống Huy Tông.",
            "debatedIssues": "Cuộc tranh luận sôi nổi giữa các nhà nghiên cứu về việc ai trong đoàn người mới thực sự là Quắc Quốc phu nhân (người phụ nữ trung niên mặc áo lam cưỡi ngựa bạch hay nhân vật trẻ tuổi dẫn đầu).",
            "comparativeContext": "So với 'Đao Luyện Đồ' cùng tác giả, bức tranh này sống động hơn về vận động và nhịp điệu ngoài trời.",
            "academicCitations": [
                "Dương Nhân Khải (杨仁恺), 'Đường Trương Huyên Quắc Quốc Phu Nhân Du Xuân Đồ Khảo Biện' (国宝沉浮录).",
                "Phùng Kỳ Ngũ, 'Trung Quốc Sĩ Nữ Họa Sử'."
            ]
        }
    },
    {
        "id": "daolian-tu",
        "titleZh": "捣练图",
        "pinyin": "Dǎo Liàn Tú",
        "titleEn": "Court Ladies Preparing Newly Woven Silk",
        "titleVi": "Đao Luyện Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "张萱",
            "pinyin": "Zhāng Xuān",
            "nameVi": "Trương Huyên",
            "alias": "Trương Cung Ban",
            "dates": "Hoạt động khoảng 713–755 CN",
            "era": "Đường triều (Thịnh Đường)",
            "school": "Thịnh Đường Quý Tộc Sĩ Nữ Phái",
            "bio": "Họa sư hàng đầu triều Khai Nguyên, bậc thầy miêu tả đời sống nội cung và lao động nghệ thuật dệt may của phụ nữ cung đình Đường triều."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "盛唐", "nameVi": "Thịnh Đường (thế kỷ VIII CN)"},
        "creationDate": "Thế kỷ VIII (Bản lưu giữ là bản do Tống Huy Tông lâm mô năm 1112 CN)",
        "genreId": "court",
        "genres": ["court", "figure", "fine-brush"],
        "genreLabel": "Cung đình sinh hoạt • Phong tục (宫廷风俗 • 工笔)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "37 × 145.3 cm",
        "museum": "Museum of Fine Arts, Boston (Bảo tàng Mỹ thuật Boston, Hoa Kỳ)",
        "attribution": "Tống Huy Tông ngự mô bản (宋徽宗御摹本) — Bản sao đích thân Tống Huy Tông vẽ và đề thơ lạc khoản, đạt độ hoàn mỹ tột đỉnh về kỹ thuật công bút.",
        "image": "assets/images/articles/hero-tang-dynasty.jpg",
        "featuredQuote": {
            "zh": "捣练篇，吴縑练，秋月照练光如霰。罗帏织罗春已去，捣练秋砧捣寒玉。",
            "vi": "Khúc đập lụa, dải lụa Ngô, trăng thu soi lụa sáng tựa hoa tuyết. Trong màn là dệt xong xuân đã qua, tiếng chày thu đập lụa lạnh tựa đập ngọc.",
            "author": "Lý Bạch (李白)",
            "source": "Đao Luyện Thiên (捣练篇)"
        },
        "analysis": {
            "historicalBackground": "Tái hiện quá trình gia công lụa sống thành thục lụa (luyện lụa mềm mượt) của các nữ quan cung đình thời Thịnh Đường chuẩn bị may trang phục mùa đông cho hoàng thất.",
            "artistBiography": "Trương Huyên qua bàn tay lâm mô tuyệt hảo của Tống Huy Tông đã biến một công đoạn thủ công thành những động tác múa duyên dáng đầy nhịp điệu thi ca.",
            "artisticComposition": "Kết cấu gồm ba nhóm nhân vật liên hoàn theo trình tự kỹ thuật: Nhóm đập lụa (4 phụ nữ dùng chày gỗ đối xứng), Nhóm se chỉ khâu vá (2 người ngồi tỉ mỉ trên chiếu), và Nhóm căng lụa là ủi (4 người kéo căng dải lụa trắng và cô bé tinh nghịch lách qua rèm lụa).",
            "brushwork": "Nét vẽ gãy gọn, tinh vi không một tì vết; chuyển động kéo người ra phía sau của người phụ nữ ủi lụa được diễn tả với trọng lực cơ thể vô cùng chân xác.",
            "inkAndColor": "Sử dụng kỹ thuật phân nhiễm nhiều lớp màu khoáng chu sa, thạch lục, thạch thanh rực rỡ trên nền lụa đã qua xử lý phấn trắng lấp lánh.",
            "spatialPerspective": "Không gian ước lệ không vẽ phông nền nhưng tạo cảm giác thoáng đãng của một gian tiền sảnh cung điện mùa thu tràn ngập ánh sáng.",
            "symbolism": "Tấm lụa trắng muốt tượng trưng cho phẩm hạnh trinh bạch; hành động kéo căng tấm lụa biểu trưng cho sự trật tự, chuẩn mực hài hòa của xã hội lễ nhạc.",
            "philosophicalMeaning": "Đề cao giá trị của lao động thủ công mỹ nghệ trong văn hóa Nho giáo: 'Nam canh nữ chức' (trai cày gái dệt) là cội nguồn của trật tự luân lý quốc gia.",
            "artisticLegacy": "Một trong những báu vật tranh lụa Trung Hoa nổi tiếng nhất tại Mỹ, ảnh hưởng sâu sắc đến nghệ thuật tạo hình thời trang Đông Á."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Thư pháp đề tự trên tranh khẳng định chính hoàng đế nghệ sĩ Triệu Cát (Tống Huy Tông) đã đích thân sao chép bức này năm Đại Quan nguyên niên, lưu giữ kỹ thuật vẽ lụa đỉnh cao cả thời Đường lẫn thời Tống.",
            "debatedIssues": "Lịch sử lưu lạc của bức tranh: từng thuộc Cố Cung Bắc Kinh, bị viên tướng Nhật Bản mua lại thời Dân quốc rồi chuyển nhượng cho Bảo tàng Boston năm 1912.",
            "comparativeContext": "So với các tượng gốm tam thái nữ quan thời Đường khai quật tại Tây An, hình thể nhân vật trong tranh có độ tương đồng hoàn toàn về trang phục và thẩm mỹ.",
            "academicCitations": [
                "Wu Hung (Vu Hồng), 'The Double Screen: Medium and Representation in Chinese Painting', Reaktion Books.",
                "Trịnh Khiêm (郑谦), 'Đường Đại Sĩ Nữ Phục Sức dữ Đao Luyện Đồ'."
            ]
        }
    },
    {
        "id": "zhanhua-shinv-tu",
        "titleZh": "簪花仕女图",
        "pinyin": "Zān Huā Shì Nǚ Tú",
        "titleEn": "Court Ladies Adorning Their Hair with Flowers",
        "titleVi": "Trâm Hoa Sĩ Nữ Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "周昉",
            "pinyin": "Zhōu Fǎng",
            "nameVi": "Chu Phưởng",
            "alias": "Trọng Lãng (仲朗)",
            "dates": "c. 730–800 CN",
            "era": "Đường triều (Trung Đường)",
            "school": "Chu Gia Dạng (周家样)",
            "bio": "Họa gia quý tộc Trường An thời Trung Đường, kế thừa Trương Huyên nhưng đi sâu vào thế giới nội tâm u hoài, tĩnh lặng của người phụ nữ chốn thâm cung."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "中唐", "nameVi": "Trung Đường (thế kỷ VIII–IX CN)"},
        "creationDate": "Cuối thế kỷ VIII CN",
        "genreId": "court",
        "genres": ["court", "figure", "fine-brush"],
        "genreLabel": "Cung đình sĩ nữ • Công bút (宫廷仕女 • 工笔)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "46 × 180 cm",
        "museum": "辽宁省博物馆 (Bảo tàng tỉnh Liêu Ninh)",
        "attribution": "Chân tích hoặc Tống mô bản (传世名迹) — Quốc bảo đệ nhất về tranh sĩ nữ cung đình Đường triều.",
        "image": "assets/images/articles/hero-tang-dynasty.jpg",
        "featuredQuote": {
            "zh": "周昉之佛像与仕女，皆全德也。衣裳简劲，彩色柔丽，世称周家样。",
            "vi": "Tượng Phật và tranh sĩ nữ của Chu Phưởng đều đạt đức vẹn toàn. Xiêm y gãy gọn, sắc màu nhu lệ, người đời xưng tụng là Chu gia dạng.",
            "author": "Trương Ngạn Viễn (张彦远)",
            "source": "Lịch Đại Danh Họa Ký (历代名画记)"
        },
        "analysis": {
            "historicalBackground": "Sáng tác vào thời kỳ Trung Đường sau loạn An Sử. Đế quốc dần suy vi, chốn cung đình phủ bóng buồn thương, những mệnh phụ quý tộc sống trong giàu sang nhàn hạ nhưng cô đơn vô vọng.",
            "artistBiography": "Chu Phưởng giữ chức Biệt giá Việt Châu, xuất thân gia đình thế tộc Trường An, thấu hiểu tường tận thế giới tâm lý u uất sau rèm the của các cung phi.",
            "artisticComposition": "Miêu tả 6 nhân vật gồm 5 vị quý phu nhân và một tỳ nữ theo hầu, cùng chú chó cảnh lông xù và chú chim hạc trắng dạo bước thong thả trong hoa viên cung điện.",
            "brushwork": "Nét vẽ mảnh như tơ nhưng mềm mại hơn hẳn nét vẽ thời sơ Đường. Kỹ thuật vẽ lớp sa mỏng xuyên thấu da thịt (thấu thị lụa voan) đạt tới trình độ ảo diệu vô song.",
            "inkAndColor": "Phối sắc lộng lẫy nhưng trầm mặc: hoa mẫu đơn đỏ son, đóa sen cài tóc màu lam thẫm, làn da trắng ngọc ngà tương phản với sắc voan mỏng màu cánh dán.",
            "spatialPerspective": "Bố cục hàng ngang phiêu dật, khoảng cách giữa các nhân vật xa cách, không ai nhìn ai, tạo cảm giác chia cắt tâm lý dù cùng đứng chung một mảnh sân vườn.",
            "symbolism": "Đóa hoa mẫu đơn khổng lồ cài trên mái tóc bới cao biểu trưng cho sự xa hoa cực điểm; chú chó nhỏ đùa giỡn ngọn cỏ tượng trưng cho sự tẻ nhạt vô vị của tháng ngày trôi qua chốn cấm cung.",
            "philosophicalMeaning": "Ẩn chứa nỗi u sầu hiện sinh sâu sắc: vẻ đẹp thể xác kiều diễm rực rỡ nhất lại đang lặng lẽ tàn phai trong cảnh cô đơn tột cùng.",
            "artisticLegacy": "Được coi là đỉnh cao tuyệt đỉnh của nghệ thuật vẽ sĩ nữ Trung Hoa, quy chuẩn thẩm mỹ cho tạo hình cung đình các thời kỳ sau."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Liêu Ninh bảo quản nguyên vẹn kiệt tác này, được công nhận là quốc bảo tuyệt đối không được phép đưa ra nước ngoài triển lãm.",
            "debatedIssues": "Nhà khảo cổ Tạ Trĩ Liễu từng đề xuất bức tranh có thể được vẽ vào thời Nam Đường do trang phục có phần trễ nải, song phần lớn học giới vẫn khẳng định cốt cách Trung Đường.",
            "comparativeContext": "So với tranh sĩ nữ của Trương Huyên, nhân vật của Chu Phưởng bớt đi vẻ rạng rỡ hồn nhiên mà thấm đẫm vẻ đẹp u hoài quý phái.",
            "academicCitations": [
                "Tạ Trĩ Liễu (谢稚柳), 'Giám Họa Tạp Ức' (鉴画杂忆).",
                "Dương Nhân Khải, 'Trâm Hoa Sĩ Nữ Đồ Chân Ngụy Khảo'."
            ]
        }
    },
    {
        "id": "huishan-shinv-tu",
        "titleZh": "挥扇仕女图",
        "pinyin": "Huī Shàn Shì Nǚ Tú",
        "titleEn": "Court Ladies Holding Fans",
        "titleVi": "Huy Phiến Sĩ Nữ Đồ",
        "eraId": "suitang",
        "artist": {
            "nameZh": "周昉",
            "pinyin": "Zhōu Fǎng",
            "nameVi": "Chu Phưởng",
            "alias": "Trọng Lãng (仲朗)",
            "dates": "c. 730–800 CN",
            "era": "Đường triều (Trung Đường)",
            "school": "Chu Gia Dạng",
            "bio": "Bậc thầy lột tả sự cô đơn tịch mịch chốn hậu cung Trung Đường qua ánh mắt vô thần và cử chỉ hờ hững."
        },
        "dynasty": {"eraId": "suitang", "nameZh": "中唐", "nameVi": "Trung Đường (thế kỷ VIII CN)"},
        "creationDate": "Cuối thế kỷ VIII CN",
        "genreId": "court",
        "genres": ["court", "figure", "fine-brush"],
        "genreLabel": "Cung đình sĩ nữ • Công bút (宫廷仕女 • 工笔)",
        "material": "Quyển trục lụa, màu khoáng (绢本设色)",
        "dimensions": "33.7 × 204.8 cm",
        "museum": "故宫博物院 (Bảo tàng Cố Cung Bắc Kinh)",
        "attribution": "Tống triều mô bản (宋摹本) — Bản sao thời Bắc Tống bảo tồn chân thực nét cọ u sầu thâm cung của Chu Phưởng.",
        "image": "assets/images/articles/hero-tang-dynasty.jpg",
        "featuredQuote": {
            "zh": "新裂齐纨素，鲜洁如霜雪。裁为合欢扇，团团似明月。出入君怀袖，动摇微风发。常恐秋节至，凉飙夺炎热。弃捐箧笥中，恩情中道绝。",
            "vi": "Mới cắt the trắng đất Tề, Sạch trong như sương tuyết. May thành quạt hợp hoan, Vành vạnh tựa trăng vạt. Ra vào tay áo chàng, Lắc nhẹ sinh gió mát. Thường sợ tiết thu sang, Gió lạnh cướp oi nồng. Bị vứt vào rương kín, Tình quân dứt nửa chừng.",
            "author": "Ban Tiệp Dư (班婕妤)",
            "source": "Oán Ca Hành (怨歌行)"
        },
        "analysis": {
            "historicalBackground": "Tái hiện cảnh hậu phi ngày hè oi ả cầm quạt lụa ngồi thẫn thờ đợi ân sủng hoàng đế, mượn điển tích 'Chiếc quạt mùa thu' của Ban Tiệp Dư thời Tây Hán.",
            "artistBiography": "Chu Phưởng vận dụng năng lực trực giác tâm lý nhạy bén để khắc họa nỗi u buồn của 13 phụ nữ cung đình qua các hoạt động chải tóc, gảy đàn, phe phẩy quạt.",
            "artisticComposition": "Trải dài theo chiều ngang gồm 5 tiểu phân đoạn: Khởi đầu bằng cảnh ngồi trầm ngâm bên sập gỗ, soi gương chỉnh trang, tựa quạt lười biếng, gảy đàn tranh và nữ tỳ quạt mát.",
            "brushwork": "Nét bút đĩnh đạc tròn đầy, đường nét lụa là chảy xuôi buông thõng biểu thị trạng thái uể oải, mất hết sinh lực của những kiếp sống bị giam hãm.",
            "inkAndColor": "Màu sắc tao nhã, xen kẽ giữa các gam màu lạnh lam nhạt, trắng xà cừ và những điểm nhấn đỏ gạch trầm tĩnh.",
            "spatialPerspective": "Sắp đặt nhân vật với sự tĩnh lặng gần như tuyệt đối, thời gian như đông cứng lại trong từng khung hình.",
            "symbolism": "Chiếc quạt tròn đoàn phiến biểu trưng cho thân phận người phụ nữ cung đình: được cưng chiều khi mùa hạ đến nhưng nhanh chóng bị bỏ rơi khi tiết thu sang.",
            "philosophicalMeaning": "Suy ngẫm triết học về sự vô thường của nhan sắc và ân sủng trần tục, bi kịch của tự do con người trong lồng son cung điện.",
            "artisticLegacy": "Một trong những kiệt tác tranh sĩ nữ trữ tình nhất của mỹ thuật thế giới, tư liệu kinh điển về nội thất và trang phục cung đình nhà Đường."
        },
        "scholarlyResearch": {
            "scholarlyConsensus": "Bảo tàng Cố Cung Bắc Kinh định danh là một trong những bảo vật cốt lõi của hội họa Đường triều.",
            "debatedIssues": "So sánh niên đại thực hiện giữa bức này và 'Trâm Hoa Sĩ Nữ Đồ' cho thấy kỹ thuật thể hiện đồ đạc nội thất ở bức này có nhiều nét sơ khởi hơn.",
            "comparativeContext": "So với thơ cung oán của Bạch Cư Dị hay Lý Thương Ẩn, bức tranh là sự chuyển ngữ thị giác hoàn mỹ nhất của dòng thi ca bi thương này.",
            "academicCitations": [
                "Cố Cung Bác Vật Viện, 'Chu Phưởng Huy Phiến Sĩ Nữ Đồ Chuyên Đề Nghiên Cứu'.",
                "Trần Thụ Hương, 'Đường Đại Cung Đình Bích Họa dữ Phong Tục Họa'."
            ]
        }
    }
]

print(f"Part 1 ready with {len(PAINTINGS_PART1)} masterpieces.")
