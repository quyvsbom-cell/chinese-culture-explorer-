(function () {
  'use strict';

  window.CCE_COMPREHENSION_V3 = window.CCE_COMPREHENSION_V3 || {};

  function Q(qVi, optionsVi, correctIndex, rationaleVi) {
    return {
      qVi: qVi,
      optionsVi: optionsVi,
      correctIndex: correctIndex,
      rationaleVi: rationaleVi
    };
  }

  function F(promptVi, keyCriteriaVi) {
    return {
      promptVi: promptVi,
      keyCriteriaVi: keyCriteriaVi
    };
  }

  var BATCH_P1 = {
    'comparative-timber-architecture-dougong': {
      mcqs: [
        Q('Chức năng cơ học trọng yếu nhất của hệ Đấu Củng (斗拱) trong kiến trúc gỗ cung đình Trung Hoa là gì?', ['Trang trí thuần túy không chịu lực', 'Truyền tải trọng mái hiên vươn xa xuống cột và tiêu tán năng lượng địa chấn qua khớp mộng đàn hồi', 'Thay thế hoàn toàn móng đá phía dưới', 'Ngăn ẩm mốc bằng lớp sơn dầu'], 1, 'Theo Doanh Tạo Pháp Thức (1103), Đấu Củng vừa đỡ mái hiên vươn sâu vừa hoạt động như bộ giảm chấn linh hoạt khi động đất.'),
        Q('Hệ thống mô-đun đo lường "Tài phân" (材分) trong Doanh Tạo Pháp Thức của Lý Giới dùng làm chuẩn cho điều gì?', ['Xác định kích thước đồng bộ của toàn bộ kết cấu gỗ dựa trên tiết diện thanh củng', 'Tính thuế ruộng đất triều Tống', 'Đo tốc độ dòng chảy kênh đào', 'Định cỡ gạch lát sân'], 0, 'Tài phân quy chuẩn hóa tỷ lệ mọi bộ phận kiến trúc theo 8 cấp bậc công trình.')
      ],
      feynman: F('Hãy giải thích bằng ngôn ngữ dễ hiểu vì sao một ngôi điện gỗ cổ Trung Hoa không dùng đinh thép vẫn có thể đứng vững qua nhiều trận động đất lớn.', ['Nêu vai trò liên kết mộng âm dương và khớp Đấu Củng hấp thụ rung chấn.', 'Chỉ ra cơ chế truyền tải trọng mái nặng xuống hệ cột độc lập với tường bao.', 'So sánh ngắn với kết cấu Kẻ chuyền / Chồng rường của đình làng Việt Nam.'])
    },
    'suzhou-classical-gardens-aesthetics': {
      mcqs: [
        Q('Thủ pháp "Tá cảnh" (借景) trong Viên Trị của Kế Thành đề cập đến kỹ thuật thiết kế nào?', ['Mượn cảnh quan bên ngoài tường vườn (như tháp chùa, ngọn núi xa) đưa vào khung tầm nhìn nội viên', 'Đắp núi giả bằng gạch nung', 'Chỉ trồng duy nhất một loại tre', 'Che kín toàn bộ tầm nhìn ra bên ngoài'], 0, 'Tá cảnh mở rộng không gian tâm lý của khu vườn nhỏ hẹp bằng cách kết nối thị giác với cảnh quan ngoài ranh giới.'),
        Q('Vật liệu đá nào được ưa chuộng nhất để xếp hòn non bộ trong lâm viên Tô Châu nhờ đặc tính "sấu, trứu, lậu, thấu"?', ['Đá hoa cương xám', 'Đá Thái Hồ (Thái Hồ thạch)', 'Đá bazan núi lửa', 'Đá sa thạch đỏ'], 1, 'Đá vôi Thái Hồ bị nước bào mòn tự nhiên tạo các hốc xuyên thấu đáp ứng bốn chuẩn thẩm mỹ kinh điển của văn nhân Giang Nam.')
      ],
      feynman: F('Trình bày cách một lâm viên Tô Châu diện tích nhỏ tạo cảm giác "bước đổi cảnh thay" (Bộ di cảnh dị) như đang du ngoạn giữa núi sông rộng lớn.', ['Giải thích kỹ thuật hành lang uốn khúc, tường hoa và cửa sổ khung tranh (Lậu song).', 'Phân tích nguyên tắc "Tá cảnh" và bố cục "dục dương tiên ức" (thu hẹp rồi mở rộng).', 'Nêu mối liên hệ giữa mỹ học sơn thủy họa và thiết kế lâm viên.'])
    },
    'four-treasures-of-the-scholar-study': {
      mcqs: [
        Q('Bộ tứ "Văn phòng Tứ bảo" kinh điển trong thư phòng sĩ phu Trung Hoa gồm những vật phẩm nào?', ['Bút, Mực, Giấy, Nghiên', 'Đàn, Cờ, Thi, Họa', 'Trà, Hương, Hoa, Cầm', 'Ấn triện, Thước gỗ, Đèn dầu, Lư hương'], 0, 'Hồ bút (Chiết Giang), Huy mặc (An Huy), Tuyên chỉ (An Huy) và Đoan nghiên (Quảng Đông) là bốn danh phẩm tiêu biểu nhất.'),
        Q('Đặc tính nổi trội của Giấy Tuyên (Tuyên chỉ) sản xuất tại Kính Huyện (An Huy) giúp tác phẩm thư họa lưu giữ hàng trăm năm là gì?', ['Độ trắng nhân tạo từ thuốc tẩy', 'Sợi vỏ cây Thanh Đàn kết hợp rơm lúa tạo độ dai, thấm mực phân tầng tốt và chống mối mọt', 'Phủ nhựa bóng chống nước hoàn toàn', 'Làm hoàn toàn từ bột gỗ thông'], 1, 'Giấy Tuyên được mệnh danh là "chỉ thọ thiên niên" nhờ sợi tự nhiên bền vững và khả năng tạo sắc độ mực năm tầng.')
      ],
      feynman: F('Giải thích mối quan hệ tương hỗ vật lý giữa Bút lông, Mực tùng/du yên, Giấy Tuyên và Nghiên đá trong việc tạo nên thần thái của bức thư pháp.', ['Mô tả vai trò giữ ẩm và mài mịn mực của đá Nghiên.', 'Giải thích cách độ thấm của Giấy Tuyên phản hồi trực tiếp tốc độ và lực nhấn của Bút lông.', 'Nêu ý nghĩa tu tâm dưỡng tính của nghi thức mài mực trước khi viết.'])
    },
    'solar-terms-huangdi-neijing': {
      mcqs: [
        Q('Hệ thống 24 Tiết khí (Nhị thập tứ tiết khí) được xác định dựa trên cơ sở thiên văn nào?', ['Chu kỳ trăng tròn trăng khuyết hằng tháng', 'Vị trí kinh độ hoàng đạo của Mặt Trời cứ mỗi 15 độ trên quỹ đạo quanh năm', 'Chu kỳ thủy triều biển Đông', 'Sự xuất hiện của sao chổi'], 1, '24 Tiết khí thuộc phần Dương lịch trong Âm dương lịch Trung Hoa, chia vòng hoàng đạo 360 độ thành 24 mốc 15 độ.'),
        Q('Nguyên tắc dưỡng sinh cốt lõi của Hoàng Đế Nội Kinh liên quan đến bốn mùa là gì?', ['Tách biệt hoàn toàn nhịp sinh học con người khỏi thời tiết', 'Thuận ứng quy luật Sinh – Trưởng – Thu – Tàng của tự nhiên (Thiên nhân tương ứng)', 'Chỉ dùng thuốc bổ vào mùa hạ', 'Nhịn ăn vào mọi tiết khí'], 1, 'Thiên Tứ Khí Điều Thần Đại Luận nhấn mạnh điều chỉnh giấc ngủ, ăn uống và tình chí theo chu kỳ Xuân sinh, Hạ trưởng, Thu thu, Đông tàng.')
      ],
      feynman: F('Giải thích vì sao 24 Tiết khí là lịch Mặt Trời chứ không phải lịch Mặt Trăng, và chúng định hướng sản xuất nông nghiệp cũng như dưỡng sinh ra sao.', ['Nêu cách tính 15 độ kinh độ hoàng đạo và các mốc Xuân phân, Hạ chí, Thu phân, Đông chí.', 'Trình bày ứng dụng trực tiếp vào mùa vụ (như Cốc Vũ, Mang Chủng).', 'Liên hệ nguyên lý dưỡng sinh thuận mùa trong Hoàng Đế Nội Kinh.'])
    },
    'imperial-academies-temple-of-literature': {
      mcqs: [
        Q('Quốc Tử Giám và Văn Miếu tại Thăng Long (Hà Nội) được nhà Lý khởi dựng vào những năm nào?', ['Năm 1010 và 1015', 'Văn Miếu năm 1070 và Quốc Tử Giám năm 1076', 'Năm 1225 và 1253', 'Năm 1428 và 1484'], 1, 'Vua Lý Thánh Tông lập Văn Miếu năm 1070 và Lý Nhân Tông mở Quốc Tử Giám năm 1076, tạo nên trường đại học đầu tiên của Đại Việt.'),
        Q('Tứ Đại Thư Viện nổi tiếng thời Tống đóng vai trò gì bên cạnh hệ thống quan học triều đình?', ['Chỉ lưu trữ sổ thuế địa phương', 'Trung tâm giảng học tự do, biện luận học thuật và in ấn kinh điển của các đại nho như Chu Hy', 'Nơi huấn luyện võ sĩ triều đình', 'Xưởng đúc tiền đồng'], 1, 'Bạch Lộc Động, Nhạc Lộc, Ưng Thiên và Tung Dương thư viện là trụ cột của học thuật Tống Nho.')
      ],
      feynman: F('So sánh vai trò và cấu trúc giáo dục của hệ thống Thư viện / Quốc Tử Giám Trung Hoa với Văn Miếu – Quốc Tử Giám Thăng Long.', ['Chỉ ra điểm chung về tôn thờ Khổng Tử, khoa cử và đào tạo quan lại.', 'Nêu nét riêng của Thư viện tư thục thời Tống trong việc cổ vũ tranh biện học thuật.', 'Nhấn mạnh truyền thống khắc Bia Tiến sĩ tôn vinh hiền tài tại Thăng Long từ thời Lê Thánh Tông.'])
    },
    'ganzhi-calendar-bazi-system': {
      mcqs: [
        Q('Chu kỳ Lục Thập Hoa Giáp (60 năm/ngày) hình thành từ sự kết hợp của hai hệ thống nào?', ['10 Thiên Can và 12 Địa Chi theo nguyên tắc dương phối dương, âm phối âm', '8 Quái và 5 Hành', '24 Tiết khí và 12 tháng', '28 Tú và 7 hành tinh'], 0, 'Bội số chung nhỏ nhất của 10 Thiên Can và 12 Địa Chi là 60, tạo chu kỳ từ Giáp Tý đến Quý Hợi.'),
        Q('Trong cấu trúc Tứ Trụ (Bát Tự), yếu tố nào được lấy làm trục trung tâm (Nhật chủ) để phân tích cân bằng Ngũ hành?', ['Địa chi của năm sinh', 'Thiên can của ngày sinh', 'Thiên can của giờ sinh', 'Địa chi của tháng sinh'], 1, 'Từ thời Từ Tử Bình (đời Tống), Nhật chủ (Thiên can ngày) trở thành tâm điểm luận giải tương sinh tương khắc của tám chữ.')
      ],
      feynman: F('Giải thích nguyên lý toán học tạo nên chu kỳ 60 Can Chi và cách người xưa dùng hệ thống này để ghi chép lịch pháp trước khi ứng dụng vào học thuật Tứ Trụ.', ['Trình bày cặp đôi 10 Thiên Can và 12 Địa Chi không ghép chéo âm dương.', 'Nêu ứng dụng ghi năm, tháng, ngày, giờ trong chính sử và văn bia.', 'Phân biệt rõ vai trò lịch pháp khách quan với hệ thống biểu tượng luận giải của Bát Tự.'])
    },
    'ziwei-doushu-star-architecture': {
      mcqs: [
        Q('Cấu trúc bàn số Tử Vi Đẩu Số gồm bao nhiêu cung chức năng xoay quanh 12 Địa Chi?', ['8 cung', '10 cung', '12 cung (từ Mệnh, Huynh Đệ đến Phụ Mẫu)', '24 cung'], 2, '12 cung cố định theo vòng Địa Chi phản ánh các phương diện nhân sinh và liên kết qua tam phương tứ chính.'),
        Q('Hai đại trường phái kỹ thuật chính trong nghiên cứu Tử Vi Đẩu Số là gì?', ['Nam phái Tam Hợp (trọng tinh hệ và cách cục) và Bắc phái Tứ Hóa / Phi Tinh (trọng Hóa Lộc, Quyền, Khoa, Kỵ)', 'Đông phái và Tây phái', 'Thiên văn phái và Địa lý phái', 'Cổ văn phái và Kim văn phái'], 0, 'Kết hợp cấu trúc tinh hệ của Tam Hợp với động lực biến chuyển của Tứ Hóa tạo thành khung phân tích song chiếu.')
      ],
      feynman: F('Mô tả kiến trúc 12 cung của Tử Vi Đẩu Số như một hệ thống mô hình hóa quan hệ giữa các yếu tố tinh tượng và cung vị.', ['Giải thích cấu trúc Mệnh – Thân và tam phương tứ chính.', 'Phân biệt trọng tâm phân tích giữa Tam Hợp và Tứ Hóa.', 'Định vị đây là một hệ thống biểu tượng văn hóa – triết lý cổ truyền hơn là khoa học thực nghiệm.'])
    },
    'yijing-hexagrams-strategy-timing': {
      mcqs: [
        Q('64 quẻ trùng quái trong Chu Dịch được tạo thành bằng cách nào?', ['Xếp chồng 8 quẻ đơn (Bát Quái) làm nội quái và ngoại quái (8 × 8 = 64)', 'Gom ngẫu nhiên 64 bài thơ cổ', 'Chia 365 ngày cho 6', 'Ghép 12 Địa Chi với 5 Hành'], 0, 'Mỗi quẻ gồm 6 hào Âm (--) hoặc Dương (—), biểu thị trạng thái biến dịch theo thời vị.'),
        Q('Ba nguyên lý nền tảng trong Dịch học cổ điển là gì?', ['Bất dịch, Biến dịch và Giản dịch', 'Nhân, Nghĩa và Lễ', 'Thiên, Địa và Nhân', 'Tĩnh, Động và Không'], 0, 'Dịch gồm sự biến đổi không ngừng (Biến dịch), quy luật bất biến ẩn sau biến đổi (Bất dịch) và tính cô đọng dễ nắm bắt (Giản dịch).')
      ],
      feynman: F('Giải thích khái niệm "Thời" (thời điểm) và "Vị" (vị thế) trong tư duy chiến lược của Chu Dịch bằng một ví dụ cụ thể từ quẻ Càn hoặc quẻ Thái/Bĩ.', ['Trình bày tiến trình biến hóa từ Tiềm long vật dụng đến Kháng long hữu hối.', 'Chỉ ra quy luật vật cực tất phản (hết Bĩ đến Thái và ngược lại).', 'Liên hệ ứng dụng vào nhận diện chu kỳ và quản trị rủi ro hiện đại.'])
    },
    'maritime-merchants-fujian-guangdong': {
      mcqs: [
        Q('Cảng thị nào ở Phúc Kiến thời Tống – Nguyên được Marco Polo và Ibn Battuta ghi nhận là một trong những thương cảng biển sầm uất nhất thế giới?', ['Thiên Tân', 'Tuyền Châu (Zaytun)', 'Thanh Đảo', 'Đại Liên'], 1, 'Tuyền Châu là đầu mối trọng yếu của Con đường Tơ lụa trên biển, lưu giữ di tích Hồi giáo, Ấn Độ giáo và Phật giáo đa văn hóa.'),
        Q('Mạng lưới thương nhân Phúc Kiến – Quảng Đông đã gắn kết mật thiết với thương cảng lịch sử nào của Việt Nam thế kỷ 17–18?', ['Hội An (Faifo) và Phố Hiến', 'Sa Pa', 'Đà Lạt', 'Buôn Ma Thuột'], 0, 'Các hội quán Phúc Kiến, Quảng Đông, Triều Châu tại Hội An là minh chứng trực tiếp cho mạng lưới giao thương Biển Đông.')
      ],
      feynman: F('Phân tích cách cộng đồng thương nhân Phúc Kiến – Quảng Đông xây dựng lòng tin xuyên biên giới thông qua Hội quán và tín ngưỡng Thiên Hậu (Ma Tổ).', ['Nêu vai trò của tín ngưỡng Ma Tổ trong việc gắn kết thủy thủ và thương nhân biển.', 'Giải thích chức năng kinh tế – xã hội của Hội quán đồng hương tại Hội An và Đông Nam Á.', 'Liên hệ sự tiếp nối sang hệ sinh thái thương mại Hoa Nam hiện đại.'])
    },
    'guqin-zither-silent-sound-aesthetics': {
      mcqs: [
        Q('Đàn Cổ Cầm (Guqin) truyền thống chuẩn mực có bao nhiêu dây và bao nhiêu huy (nốt mốc trên mặt đàn)?', ['5 dây và 10 huy', '7 dây và 13 huy', '21 dây và 21 nhạn đàn', '4 dây và 12 phím'], 1, 'Cổ Cầm có 7 dây tơ (nay có dây bọc nylon) và 13 huy tượng trưng 12 tháng cộng tháng nhuận, khác hẳn đàn Cổ Tranh (Guzheng) 21 dây.'),
        Q('Hệ thống ký âm độc đáo của Cổ Cầm mang tên "Giảm tự phổ" (减字谱) ghi chép điều gì?', ['Cao độ tuyệt đối theo khuông nhạc phương Tây', 'Tổ hợp ký hiệu giản lược chỉ chính xác vị trí ngón tay trái, kỹ thuật gảy tay phải và dây đàn', 'Lời bài hát bằng văn bạch thoại', 'Nhịp trống đi kèm'], 1, 'Giảm tự phổ để ngỏ tiết tấu cho nghệ sĩ tự diễn giải ("đả phổ"), đề cao cá tính tu dưỡng của người chơi.')
      ],
      feynman: F('Giải thích mỹ học "Hi thanh" (tiếng nhỏ, khoảng lặng) của Cổ Cầm và lý do Cổ Cầm đứng đầu bộ tứ "Cầm – Kỳ – Thi – Họa" của văn nhân.', ['Phân biệt cấu tạo Cổ Cầm 7 dây với Cổ Tranh 21 dây.', 'Phân tích giá trị của âm dư (vận) và khoảng lặng giữa các tiếng đàn.', 'Nêu ý nghĩa giao cảm tri âm qua điển tích Bá Nha – Tử Kỳ.'])
    },
    'artisan-kilns-to-industrial-clusters': {
      mcqs: [
        Q('Địa danh nào được mệnh danh là "Đô thị Sứ" (Từ Đô) suốt hơn một thiên niên kỷ từ thời Tống – Minh – Thanh nhờ mỏ cao lanh và quy trình phân công lao động hàng chục công đoạn?', ['Cảnh Đức Trấn (Giang Tây)', 'Trường Sa', 'Lạc Dương', 'Hợp Phì'], 0, 'Cảnh Đức Trấn đã hình thành dây chuyền phân công chuyên môn hóa sâu (72 công đoạn) từ thời Minh – Thanh trước cả cách mạng công nghiệp hiện đại.'),
        Q('Mối liên hệ cấu trúc giữa các làng nghề thủ công cổ truyền và mô hình "Nhất trấn nhất phẩm" (mỗi thị trấn một sản phẩm) hiện đại của Trung Quốc là gì?', ['Hoàn toàn không liên quan', 'Kế thừa văn hóa chuyên môn hóa địa phương, mạng lưới xưởng vệ tinh dày đặc và tri thức ngầm truyền đời', 'Chỉ sao chép mô hình nông trại phương Tây', 'Dựa vào duy nhất một nhà máy quốc doanh'], 1, 'Các cụm công nghiệp hiện đại như Phật Sơn (gốm sứ/gia dụng), Tô Châu (tơ lụa/chính xác) hay Nghĩa Ô kế thừa mật độ hợp tác liên xưởng lâu đời.')
      ],
      feynman: F('Trình bày sự tiến hóa từ hệ thống lò gốm phân công lao động tại Cảnh Đức Trấn đến các cụm công nghiệp chuyên biệt hiện đại của Trung Quốc.', ['Mô tả cơ chế phân công chuyên sâu giảm chi phí và tăng chất lượng tại lò thủ công cổ.', 'Giải thích lợi ích tích tụ cụm (Cluster Economies) ở quy mô huyện/trấn ngày nay.', 'Liên hệ bài học phát triển làng nghề và cụm công nghiệp hỗ trợ tại Việt Nam.'])
    },
    'lu-yu-tea-classic-evolution': {
      mcqs: [
        Q('Tác phẩm "Trà Kinh" (茶经) — chuyên luận hệ thống đầu tiên về trà trên thế giới — do ai biên soạn vào thời Đường?', ['Lục Vũ', 'Tô Thức', 'Lý Bạch', 'Thẩm Quát'], 0, 'Lục Vũ hoàn thành Trà Kinh khoảng năm 760–780, hệ thống hóa từ nguồn gốc cây trà, dụng cụ, chế biến đến cách đun nước và thưởng trà.'),
        Q('Phương thức thưởng trà chủ đạo đã chuyển đổi qua ba triều đại Đường – Tống – Minh theo trình tự nào?', ['Pha lá rời → Đánh bột → Đun bánh trà', 'Đun trà bánh (Tiễn trà · Đường) → Đánh trà bột tạo bọt (Điểm trà · Tống) → Hãm trà lá rời bằng ấm (Pháo trà · Minh)', 'Uống trà lạnh cả ba thời kỳ', 'Chỉ dùng túi lọc từ thời Đường'], 1, 'Lệnh bãi bỏ trà bánh cống phẩm đầu thời Minh (Chu Nguyên Chương năm 1391) đã thúc đẩy văn hóa pha trà lá rời bằng ấm tử sa Nghi Hưng.')
      ],
      feynman: F('Tóm lược ba cuộc cách mạng kỹ thuật uống trà qua các thời Đường, Tống và Minh và chỉ ra dấu ấn của chúng trong văn hóa trà Đông Á ngày nay.', ['Phân biệt Tiễn trà thời Đường, Điểm trà thời Tống và Pháo trà thời Minh.', 'Nêu vai trò của Trà Kinh trong việc nâng trà từ thức uống giải khát thành đạo lý thẩm mỹ.', 'Liên hệ sự truyền lưu của Điểm trà sang Trà đạo Nhật Bản và Pháo trà với văn hóa trà Việt Nam.'])
    },
    'envoy-poetry-bac-hanh-tap-luc': {
      mcqs: [
        Q('Tác phẩm "Bắc Hành Tạp Lục" gồm hơn 130 bài thơ chữ Hán ghi chép hành trình đi sứ sang nhà Thanh năm 1813–1814 là sáng tác của đại thi hào nào?', ['Nguyễn Trãi', 'Nguyễn Du', 'Cao Bá Quát', 'Lê Quý Đôn'], 1, 'Nguyễn Du sáng tác Bắc Hành Tạp Lục trong chuyến đi sứ nhà Thanh, thể hiện tầm nhìn nhân đạo sâu sắc và đối thoại văn hóa vượt biên giới.'),
        Q('Trong các chuyến đi sứ Trung Hoa, sứ thần Đại Việt thường sử dụng phương thức giao tiếp nào để đàm đạo học thuật với sĩ phu Trung Quốc và Triều Tiên bất chấp khác biệt phát âm?', ['Phiên dịch máy móc', 'Bút đàm (viết văn ngôn chữ Hán trực tiếp trên giấy)', 'Tiếng Latinh', 'Ngôn ngữ ký hiệu'], 1, 'Chữ Hán văn ngôn đóng vai trò ngôn ngữ viết liên quốc gia (Scripta Franca) giúp trí thức Đông Á giao lưu thơ văn và học thuật sâu sắc.')
      ],
      feynman: F('Phân tích ý nghĩa ngoại giao và văn hóa của dòng "Thơ đi sứ" Việt Nam qua trường hợp Bắc Hành Tạp Lục của Nguyễn Du.', ['Nêu bối cảnh các đoàn sứ bộ Đại Việt đi qua các danh thắng và trung tâm học thuật Trung Hoa.', 'Giải thích vai trò của bút đàm chữ Hán trong giao lưu sĩ phu Đông Á.', 'Làm rõ tinh thần tự tôn dân tộc song hành với sự đồng cảm nhân văn trong thơ sứ thần.'])
    },
    'merchant-ethics-xin-yi-li': {
      mcqs: [
        Q('Chuỗi giá trị "Nghĩa – Lợi – Tín" trong đạo đức Nho thương (儒商) truyền thống đặt nguyên tắc nào làm ranh giới kiếm lời bền vững?', ['Đạt lợi nhuận tối đa bằng mọi giá', 'Kiến lợi tư nghĩa (thấy lợi phải nghĩ tới điều nghĩa) và lấy chữ Tín làm gốc hợp tác lâu dài', 'Cấm hoàn toàn hoạt động thương mại', 'Chỉ giao dịch trong phạm vi một ngày'], 1, 'Nho thương kế thừa tư tưởng Luận Ngữ và Mạnh Tử, coi uy tín và công bằng là tài sản vô hình lớn nhất của thương hội.'),
        Q('Thương nhân xưa sử dụng cơ chế cộng đồng nào để bảo đảm chữ Tín khi chưa có hệ thống chấm điểm tín dụng điện tử?', ['Hội quán thương nghiệp, sổ sách minh bạch, bảo lãnh đồng hương và chế tài tẩy chay uy tín', 'Quảng cáo truyền hình', 'Hợp đồng thông minh blockchain', 'Chỉ giao dịch tiền mặt không ghi chép'], 0, 'Mạng lưới thương hội (Huy Thương, Tấn Thương) biến danh dự tông tộc và đồng hương thành tài sản thế chấp đạo đức.')
      ],
      feynman: F('Giải thích vì sao triết lý "Tín – Nghĩa – Lợi" của thương nhân cổ truyền vẫn có giá trị thực tiễn trong quản trị chuỗi cung ứng và đàm phán B2B hiện đại.', ['Định nghĩa rõ mối quan hệ giữa Nghĩa (chuẩn mực đạo đức), Tín (cam kết) và Lợi (lợi ích kinh tế).', 'Nêu cách thương hội xưa dùng cơ chế danh tiếng để giảm chi phí giao dịch.', 'Liên hệ với nguyên tắc tuân thủ hợp đồng và quản trị ESG của doanh nghiệp ngày nay.'])
    },
    'han-viet-phonology-middle-chinese': {
      mcqs: [
        Q('Hệ thống âm đọc Hán – Việt chuẩn hình thành chủ yếu từ lớp ngữ âm tiếng Hán của giai đoạn lịch sử nào?', ['Tiếng Bắc Kinh hiện đại thế kỷ 20', 'Tiếng Hán Trung cổ (cuối Đường – đầu Tống, khoảng thế kỷ 8–10)', 'Tiếng Hán thời Thương', 'Tiếng Quảng Đông thế kỷ 19'], 1, 'Âm Hán – Việt bảo lưu rất rõ hệ thống phụ âm cuối -p, -t, -k (nhập thanh) và nhiều nét ngữ âm Đường – Tống đã tiêu biến trong tiếng Phổ thông hiện đại.'),
        Q('Vì sao thanh Nhập (các âm tiết kết thúc bằng -p, -t, -c, -ch như học 学, quốc 国, pháp 法) trong âm Hán – Việt lại quý giá đối với giới ngôn ngữ học lịch sử?', ['Vì chúng hoàn toàn giống tiếng Anh', 'Vì tiếng Quan Thoại Bắc Kinh đã rụng các phụ âm tắc cuối này, còn âm Hán – Việt giúp tái dựng âm cổ', 'Vì chúng chỉ xuất hiện sau năm 1950', 'Vì không có nghĩa'], 1, 'Âm Hán – Việt cùng với tiếng Quảng Đông, Mân Nam và âm Hán – Hàn/Hán – Nhật là tư liệu sống quan trọng để phục dựng Hán ngữ Trung cổ.')
      ],
      feynman: F('Giải thích vì sao người Việt biết âm Hán – Việt có lợi thế tự nhiên khi học từ vựng học thuật tiếng Trung, nhưng đồng thời cần thận trọng trước biến đổi ngữ âm.', ['Nêu mối liên hệ lịch sử giữa âm Hán – Việt và Hán ngữ Trung cổ thời Đường – Tống.', 'Chỉ ra quy luật tương ứng âm cuối (như -p/-t/-k còn giữ ở tiếng Việt nhưng rụng ở Phổ thông).', 'Đưa ví dụ cụ thể về từ đồng nguyên giúp suy luận nghĩa nhanh.'])
    },
    'ten-merchant-guilds-huizhou-shanxi': {
      mcqs: [
        Q('Phiếu hiệu Nhật Thăng Xương (日昇昌) tại Bình Dao (Sơn Tây) do Tấn Thương sáng lập năm 1823 nổi tiếng với sáng kiến tài chính nào?', ['Phát hành tiền điện tử', 'Chuyển tiền liên vùng bằng hối phiếu (Hối đoái) kèm hệ thống mật mã chống giả thay cho vận chuyển bạc nén', 'Chỉ cho vay nông nghiệp nội huyện', 'Đúc tiền vàng châu Âu'], 1, 'Nhật Thăng Xương được xem là mô hình ngân hàng hối đoái hiện đại sơ khai đầu tiên của Trung Quốc với mạng lưới chi nhánh khắp cả nước.'),
        Q('Chế độ "Đỉnh thân cổ" (顶身股) của Tấn Thương có ý nghĩa quản trị hiện đại nào?', ['Cấp cổ phần năng lực (chia lợi nhuận theo đóng góp quản lý) cho chưởng quầy không góp vốn tiền mặt, tương tự cổ phiếu thưởng ESOP', 'Bắt buộc nhân viên làm việc không lương', 'Chỉ chia cổ phần cho quan lại triều đình', 'Đánh thuế lên hàng vận chuyển'], 0, 'Cơ chế tách biệt quyền sở hữu (Ngân cổ) và quyền quản lý (Thân cổ) giúp Tấn Thương giữ chân nhân tài và hạn chế gian lận từ xa.')
      ],
      feynman: F('So sánh mô hình tổ chức kinh doanh của hai đại thương bang Minh – Thanh là Tấn Thương (Sơn Tây) và Huy Thương (An Huy).', ['Nêu thế mạnh tài chính, hối phiếu và cơ chế Thân cổ của Tấn Thương.', 'Nêu đặc trưng "Nho thương", kinh doanh muối – trà – văn phòng tứ bảo và bảo trợ văn hóa của Huy Thương.', 'Rút ra bài học về quản trị nhân sự và mở rộng chi nhánh thời đại chưa có viễn thông.'])
    },
    'forbidden-city-3d-dissection': {
      mcqs: [
        Q('Tử Cấm Thành Bắc Kinh (khởi công năm 1406 dưới thời Minh Vĩnh Lạc) được quy hoạch theo nguyên tắc không gian cổ điển nào trong Chu Lễ · Khảo Công Ký?', ['Tiền triều hậu tẩm (phía trước thiết triều, phía sau nội cung) và trục đối xứng Bắc – Nam', 'Xây hoàn toàn hình tròn không có trục', 'Đặt khu nội cung ở phía Nam cửa Ngọ Môn', 'Không xây tường hào bảo vệ'], 0, 'Ngoại triều (Thái Hòa, Trung Hòa, Bảo Hòa) nằm phía Nam phục vụ nghi lễ quốc gia; Nội đình (Càn Thanh, Giao Thái, Khôn Ninh) nằm phía Bắc.'),
        Q('Con số nào được mã hóa dày đặc trong kiến trúc Tử Cấm Thành (như đinh cửa 9×9, 9.999,5 gian theo truyền ngôn, bậc thềm bội số 9) để biểu trưng hoàng quyền tối thượng?', ['Số 4', 'Số 6', 'Số 9 (Cửu ngũ chi tôn — cực dương)', 'Số 10'], 2, 'Trong Kinh Dịch, số 9 là số dương lớn nhất; cửu ngũ tượng trưng ngôi vị thiên tử.')
      ],
      feynman: F('Phân tích kiến trúc Tử Cấm Thành như một bản đồ vũ trụ luận và trật tự quyền lực thể hiện bằng gỗ, đá và trục không gian.', ['Mô tả trục thần đạo Bắc – Nam từ Ngọ Môn qua Tam Đại Điện tới Càn Thanh Cung.', 'Giải thích ý nghĩa biểu tượng của mái ngói lưu ly vàng, tường son đỏ và con số 9.', 'Liên hệ sự tiếp biến sáng tạo tại Hoàng thành Thăng Long và Kinh thành Huế.'])
    },
    'traditional-architecture-gardens': {
      mcqs: [
        Q('Sự tương phản bổ sung giữa kiến trúc cung đình phương Bắc (như Tử Cấm Thành) và lâm viên văn nhân phương Nam (như Chuyết Chính Viên) phản ánh hai hệ tư tưởng nào?', ['Nho gia (trật tự, đối xứng, lễ nghi) và Đạo gia / Thiền tông (tự nhiên, bất đối xứng, u tịch)', 'Chỉ có Pháp gia', 'Kiến trúc Gothic và Baroque', 'Hoàn toàn tách rời triết học'], 0, 'Trục thẳng đối xứng của cung điện hiện thực hóa lễ giáo Nho gia, còn đường cong tự nhiên của lâm viên phản ánh tinh thần Đạo gia và Thiền.'),
        Q('Yếu tố nào luôn đóng vai trò linh hồn kết nối mọi công trình (đình, đài, lâu, các, tạ) trong cả lâm viên lẫn kiến trúc cảnh quan cổ truyền?', ['Thủy (mặt nước) và Sơn (đá/núi)', 'Kính cường lực', 'Bê tông cốt thép', 'Đèn chiếu sáng công nghiệp'], 0, 'Nguyên lý "Nhân giả lạc sơn, trí giả lạc thủy" biến sự hòa hợp Sơn – Thủy thành cấu trúc trung tâm của cảnh quan phương Đông.')
      ],
      feynman: F('So sánh ngôn ngữ không gian giữa một cung điện Nho giáo đối xứng và một khu vườn văn nhân bất đối xứng để cho thấy cách người xưa cân bằng "nhập thế" và "xuất thế".', ['Đối chiếu trục thẳng – đối xứng của cung đình với lối đi quanh co – mở đóng của lâm viên.', 'Nêu ý nghĩa triết học của vật liệu và màu sắc giữa hai không gian.', 'Chỉ ra cách hai thẩm mỹ này cùng tồn tại trong đời sống tinh thần của sĩ phu.'])
    },
    'xia-shang-zhou-oracle-bones-rituals': {
      mcqs: [
        Q('Khảo cổ học xác nhận triều đại đầu tiên của Trung Quốc có hệ thống chữ viết thành văn hoàn chỉnh (Giáp cốt văn) được khai quật tại Ân Khư (An Dương, Hà Nam) là triều đại nào?', ['Nhà Hạ', 'Nhà Thương (Ân Thương)', 'Nhà Tần', 'Nhà Hán'], 1, 'Hơn 150.000 mảnh giáp cốt khai quật từ Ân Khư chứng thực vương triều Thương muộn từ thời Vũ Đinh (khoảng thế kỷ 13 TCN).'),
        Q('Bước chuyển tư tưởng lớn nhất từ nhà Thương sang nhà Tây Chu trong nghi lễ và chính trị là gì?', ['Chuyển từ tín ngưỡng bói toán thần quyền tuyệt đối sang học thuyết "Thiên mệnh duy đức" và hệ thống Lễ Nhạc tông pháp', 'Xóa bỏ hoàn toàn chữ viết', 'Bỏ đồ đồng thanh sang dùng sắt ngay lập tức', 'Áp dụng chế độ quận huyện toàn quốc'], 0, 'Chu Công Đán hệ thống hóa Lễ Nhạc và khẳng định Trời chỉ trao mệnh cho bậc có đức, đặt nền móng nhân bản cho Nho gia sau này.')
      ],
      feynman: F('Giải thích giá trị kép của Giáp cốt văn và đồ đồng thanh thời Thương – Chu đối với việc biến truyền thuyết cổ sử thành lịch sử khả tín.', ['Nêu cách Giáp cốt văn xác chứng danh sách vua Thương ghi trong Sử Ký của Tư Mã Thiên.', 'Trình bày vai trò của minh văn trên đỉnh đồng Tây Chu như văn bản pháp lý và ký ức gia tộc.', 'Chỉ ra bước chuyển từ "thần quyền" sang "đức trị" và "Lễ Nhạc" của nhà Chu.'])
    },
    'qin-institutional-standardization': {
      mcqs: [
        Q('Sau khi thống nhất Trung Hoa năm 221 TCN, nhà Tần đã thay thế chế độ phân phong Tây Chu bằng hệ thống hành chính nào trên toàn quốc?', ['Chế độ Quận huyện (36 quận ban đầu) do trung ương trực tiếp bổ nhiệm quan lại', 'Liên bang các tiểu quốc tự trị', 'Chế độ công xã nguyên thủy', 'Chế độ thành bang độc lập'], 0, 'Lý Tư tham mưu Tần Thủy Hoàng bãi bỏ phân phong, áp dụng chế độ Quận huyện đặt nền móng thể chế tập quyền hai thiên niên kỷ.'),
        Q('Chính sách "Thư đồng văn" của nhà Tần đã chuẩn hóa chữ viết toàn quốc theo kiểu chữ nào?', ['Giáp cốt văn', 'Tiểu Triện (do Lý Tư chuẩn hóa trên nền chữ nước Tần)', 'Thảo thư', 'Chữ Giản thể hiện đại'], 1, 'Chuẩn hóa Tiểu Triện (và sự ra đời song song của Lệ thư cho công vụ) đảm bảo sự thống nhất văn hóa và hành chính dù phương ngữ các vùng rất khác nhau.')
      ],
      feynman: F('Phân tích lý do nhà Tần sụp đổ nhanh chóng chỉ sau 15 năm nhưng bộ khung thể chế ("Tần chế") lại tồn tại hơn 2.000 năm qua các triều đại sau.', ['Liệt kê các chuẩn hóa mang tính hạ tầng: Quận huyện, Thư đồng văn, Xa đồng quỹ, đo lường và tiền Bán Lượng.', 'Giải thích nguyên nhân sụp đổ do lạm dụng hình phạt Pháp gia hà khắc và huy động lao dịch kiệt quệ.', 'Chỉ ra cách nhà Hán kế thừa bộ khung hành chính Tần nhưng mềm hóa bằng Nho giáo ("ngoại Nho nội Pháp").'])
    },
    'song-dynasty-urban-science-renaissance': {
      mcqs: [
        Q('Bức tranh cuộn "Thanh Minh Thượng Hà Đồ" của Trương Trạch Đoan phản ánh trực tiếp cuộc cách mạng đô thị nào của thời Bắc Tống?', ['Sự sụp đổ của hệ thống phường – thị khép kín và cấm đêm, hình thành phố thị thương mại nhộn nhịp cả ngày lẫn đêm tại Biện Kinh', 'Đô thị chỉ dành cho quân đội đóng đồn', 'Việc đóng cửa hoàn toàn mọi cửa hiệu buôn bán', 'Cuộc di cư khỏi đồng bằng'], 0, 'Khác với Trường An thời Đường phân khu Phường – Thị nghiêm ngặt, Biện Kinh thời Tống mở cửa hàng dọc phố và hình thành chợ đêm (Dạ thị).'),
        Q('Bốn phát minh kỹ thuật nào đạt bước ngoặt hoàn thiện hoặc ứng dụng đại trà trong giai đoạn Tống (bao gồm tiền giấy đầu tiên trên thế giới)?', ['Máy hơi nước, điện báo, máy bay, internet', 'Chữ in rời (Tất Thăng), la bàn hàng hải, thuốc súng quân sự và tiền giấy Giao Tử', 'Chỉ có nghề đan lát', 'Bê tông cốt thép và thép không gỉ'], 1, 'Tất Thăng chế chữ in rời bằng đất sét nung thập niên 1040, Thẩm Quát mô tả kim từ độ lệch trong Mộng Khê Bút Đàm, và Tứ Xuyên phát hành Giao Tử.')
      ],
      feynman: F('Chứng minh nhận định của nhiều sử gia rằng triều Tống là một "thời kỳ tiền hiện đại" (Early Modern) về kinh tế thị trường, đô thị và khoa học kỹ thuật.', ['Nêu đột phá phá bỏ giới nghiêm phường – thị và sự ra đời của tiền giấy Giao Tử.', 'Trích dẫn các thành tựu khoa học tiêu biểu của Thẩm Quát, Tô Tụng và Tất Thăng.', 'Giải thích mối liên hệ giữa mở rộng khoa cử, kỹ nghệ in ấn và sự phát triển văn hóa văn nhân thời Tống.'])
    },
    'grand-canal-dujiangyan-hydraulic-empire': {
      mcqs: [
        Q('Đặc điểm kỹ thuật xuất sắc nhất của hệ thống thủy lợi Đô Giang Yển do Lý Băng xây dựng năm 256 TCN tại Tứ Xuyên là gì?', ['Đắp đập bê tông khổng lồ chặn hoàn toàn dòng sông Dân Giang', 'Không đắp đập chắn dòng mà dùng đê phân thủy Ngư Chủy, tràn xả lũ Phi Sa Yển và cửa dẫn Bảo Bình Khẩu tự điều tiết nước và cát', 'Dùng máy bơm hơi nước', 'Chỉ tích nước mưa mùa đông'], 1, 'Cơ chế phân thủy thuận tự nhiên giúp Đô Giang Yển vận hành bền vững hơn 2.200 năm, biến đồng bằng Thành Đô thành "Thiên phủ chi quốc".'),
        Q('Đại Vận Hà (khai thông quy mô lớn từ thời Tùy Dạng Đế, nắn thẳng nối trực tiếp Bắc Kinh – Hàng Châu thời Nguyên) giữ vai trò sống còn nào đối với đế chế?', ['Chỉ dùng cho du lịch hoàng gia', 'Chuyển vận lương thực (Tào vận) và thuế khóa từ vùng nông nghiệp trù phú Giang Nam lên nuôi sống kinh đô chính trị – quân sự phương Bắc', 'Ngăn tàu biển vào nội địa', 'Thay thế hoàn toàn đường bộ tơ lụa'], 1, 'Đại Vận Hà kết nối năm lưu vực sông lớn (Hải Hà, Hoàng Hà, Hoài Hà, Trường Giang, Tiền Đường) tạo trục kinh tế Bắc – Nam.')
      ],
      feynman: F('So sánh triết lý trị thủy của Đô Giang Yển (điều tiết tự nhiên cấp lưu vực) với vai trò địa – kinh tế của Đại Vận Hà (kết nối Bắc – Nam đế chế).', ['Mô tả cấu trúc 3 bộ phận Ngư Chủy – Phi Sa Yển – Bảo Bình Khẩu của Đô Giang Yển.', 'Giải thích bài toán mất cân đối Bắc (trung tâm chính trị) – Nam (trung tâm kinh tế) mà Đại Vận Hà giải quyết.', 'Rút ra ý nghĩa của hạ tầng thủy lợi đối với năng lực tổ chức nhà nước cổ đại.'])
    },
    'modern-china-transformation-1840-1949': {
      mcqs: [
        Q('Quá trình hiện đại hóa nhận thức của trí thức Trung Quốc giai đoạn 1840–1919 thường được sử học khái quát theo lộ trình ba tầng sâu dần nào?', ['Văn hóa → Thể chế → Khí cụ', 'Khí cụ/kỹ thuật (Dương vụ vận động) → Thể chế chính trị (Bách nhật duy tân / Tân Hợi 1911) → Tư tưởng văn hóa (Tân Văn hóa & Ngũ Tứ 1919)', 'Chỉ cải cách quân sự không đổi tư tưởng', 'Đóng cửa hoàn toàn suốt 100 năm'], 1, 'Từ khẩu hiệu "Trung thể Tây dụng" đến cải cách thể chế và cuối cùng là cách mạng văn hóa – bạch thoại thời Ngũ Tứ.'),
        Q('Cuộc Cách mạng Tân Hợi năm 1911 (khởi phát từ khởi nghĩa Vũ Xương) tạo ra bước ngoặt thể chế nào trong lịch sử Trung Quốc?', ['Thiết lập lại chế độ phân phong Tây Chu', 'Chấm dứt hơn hai thiên niên kỷ chế độ quân chủ chuyên chế hoàng đế và lập nên Trung Hoa Dân Quốc', 'Đưa nhà Minh trở lại ngôi vị', 'Xóa bỏ hoàn toàn chữ Hán'], 1, 'Cách mạng Tân Hợi năm 1911 chấm dứt triều Thanh và nền quân chủ đế chế kéo dài từ thời Tần Thủy Hoàng.')
      ],
      feynman: F('Phân tích ba giai đoạn chuyển mình (Kỹ thuật – Thể chế – Văn hóa) của Trung Quốc từ Chiến tranh Nha phiến 1840 đến Phong trào Ngũ Tứ 1919.', ['Nêu hạn chế của Dương vụ vận động khi chỉ học kỹ thuật quân sự mà giữ nguyên thể chế cũ.', 'Trình bày ý nghĩa của Cách mạng Tân Hợi 1911 và Phong trào Tân Văn hóa – Ngũ Tứ 1919.', 'Liên hệ sự tương đồng với các phong trào Duy Tân và Đông Du đầu thế kỷ 20 tại Việt Nam.'])
    },
    'sixteen-ancient-capitals-geopolitics': {
      mcqs: [
        Q('Xu hướng dịch chuyển địa – chính trị dài hạn của các kinh đô Trung Quốc từ Tây sang Đông và sau đó lên Đông Bắc (Trường An → Lạc Dương → Khai Phong → Bắc Kinh) phản ánh điều gì?', ['Sự thay đổi ngẫu nhiên theo sở thích cá nhân', 'Sự dịch chuyển trọng tâm kinh tế về Giang Nam, nhu cầu kết nối Đại Vận Hà và yêu cầu phòng thủ biên giới thảo nguyên phương Bắc', 'Cạn kiệt hoàn toàn nước sông Hoàng Hà', 'Sức ép của thủy triều biển Đông'], 1, 'Khi Quan Trung suy giảm tài nguyên và đường Tào vận trở nên quyết định, kinh đô dời dần sang trục vận tải phía Đông và lên Bắc Kinh thời Nguyên – Minh – Thanh.'),
        Q('Bốn kinh đô lớn nhất trong lịch sử Trung Hoa ("Tứ Đại Cổ Đô") thường được nhắc đến gồm những đô thị nào?', ['Thượng Hải, Thâm Quyến, Trùng Khánh, Thành Đô', 'Tây An (Trường An), Lạc Dương, Nam Kinh và Bắc Kinh', 'Thanh Đảo, Cáp Nhĩ Tân, Côn Minh, Lhasa', 'Quảng Châu, Hạ Môn, Ninh Ba, Hợp Phì'], 1, 'Tây An, Lạc Dương, Nam Kinh và Bắc Kinh là bốn trung tâm quyền lực lưu giữ dày đặc nhất di sản đế chế.')
      ],
      feynman: F('Giải thích lô-gic địa lý – quân sự – kinh tế khiến các triều đại Trung Quốc nhiều lần thay đổi kinh đô giữa Trường An, Lạc Dương, Khai Phong, Nam Kinh và Bắc Kinh.', ['Phân tích lợi thế phòng thủ "Tứ tắc chi quốc" của Trường An thời Hán – Đường và hạn chế hậu cần về sau.', 'Chỉ ra vai trò của Đại Vận Hà đối với Khai Phong và Bắc Kinh.', 'Nêu vị thế chiến lược "long bàn hổ cứ" của Nam Kinh trong các giai đoạn chia cắt Bắc – Nam.'])
    },
    'tea-horse-road-southwest-corridor': {
      mcqs: [
        Q('Cơ chế bổ trợ sinh thái – kinh tế cốt lõi tạo nên Trà Mã Cổ Đạo (茶马古道) nối Vân Nam – Tứ Xuyên lên cao nguyên Thanh Tạng là gì?', ['Người Tạng cần trà ép bánh để tiêu hóa khẩu phần nhiều thịt – bơ và bổ sung vi chất, còn triều đình Trung Nguyên cần ngựa chiến cao nguyên', 'Chỉ để vận chuyển lụa sang châu Âu', 'Vận chuyển muối từ biển lên Tây Tạng', 'Đường hành hương không có thương mại'], 0, 'Trao đổi "trà đổi ngựa" (Trà Mã hỗ thị) kéo dài từ thời Đường – Tống đến thế kỷ 20 là huyết mạch kinh tế vùng Tây Nam.'),
        Q('Loại trà nào của Vân Nam đạt độ lên men hậu kỳ độc đáo chính nhờ hành trình vận chuyển dài ngày bằng đoàn ngựa thồ qua nhiều đới khí hậu trên Trà Mã Cổ Đạo?', ['Trà Long Tỉnh', 'Trà Phổ Nhĩ (Pu-erh)', 'Trà Bích Loa Xuân', 'Trà Thiết Quan Âm'], 1, 'Độ ẩm và thay đổi nhiệt độ trên đường vận chuyển đã vô tình thúc đẩy quá trình lên men vi sinh tạo nên bản sắc Trà Phổ Nhĩ.')
      ],
      feynman: F('Mô tả Trà Mã Cổ Đạo như một mạng lưới giao lưu sinh thái, tôn giáo và dân tộc của vùng Tây Nam Trung Quốc chứ không chỉ là một con đường thương mại đơn thuần.', ['Giải thích nhu cầu trao đổi bổ sung giữa trà bánh vùng ẩm và chiến mã vùng cao nguyên.', 'Nêu vai trò của các cổ trấn trung chuyển như Lệ Giang, Đại Lý, Địch Khánh.', 'Chỉ ra di sản văn hóa đa tộc người (Tạng, Nạp Tây, Bạch, Di, Hán) dọc tuyến đường.'])
    },
    'chinese-fermentation-spices-culinary-geography': {
      mcqs: [
        Q('Trong Bát Đại Thái Hệ (8 trường phái ẩm thực lớn Trung Hoa), cặp hương vị "Ma – Lạt" (tê đầu lưỡi của hoa tiêu và cay nồng của ớt) là dấu ấn đặc trưng của vùng nào?', ['Quảng Đông (Việt thái)', 'Tứ Xuyên (Xuyên thái)', 'Giang Tô (Tô thái)', 'Sơn Đông (Lỗ thái)'], 1, 'Khí hậu ẩm ướt vùng bồn địa Tứ Xuyên kết hợp hoa tiêu bản địa và ớt du nhập từ châu Mỹ thế kỷ 16–17 tạo nên bản sắc Xuyên thái.'),
        Q('Loại nấm men cốt lõi tạo nên sự khác biệt căn bản của hệ thống lên men Đông Á (xì dầu, tương đậu, giấm đen, rượu gạo) so với lên men bia mạch nha châu Âu là gì?', ['Khúc (Qu / 曲) chứa hệ nấm mốc Aspergillus (như Aspergillus oryzae) vừa đường hóa tinh bột vừa lên men', 'Chỉ dùng muối biển không có vi sinh vật', 'Dùng axit tổng hợp công nghiệp', 'Phơi khô dưới nắng không cần nấm men'], 0, 'Kỹ nghệ làm Khúc (mốc giống) cho phép chuyển hóa trực tiếp ngũ cốc và đậu tương thành hệ gia vị giàu vị Umami.')
      ],
      feynman: F('Giải thích vì sao ẩm thực Trung Quốc phân hóa mạnh theo địa lý khí hậu ("Nam điềm Bắc hàm, Đông lạt Tây toan") và vai trò của công nghệ lên men đậu – ngũ cốc.', ['Nêu mối quan hệ giữa khí hậu – sản vật địa phương với 4 trục ẩm thực lớn Lỗ, Xuyên, Việt, Hoài Dương.', 'Phân tích vai trò của kỹ thuật lên men Khúc (xì dầu, tương đậu, giấm) trong bảo quản thực phẩm cổ đại.', 'Liên hệ sự tương đồng và khác biệt với văn hóa nước mắm và tương bần của Việt Nam.'])
    },
    'chinese-liquor-culture-baijiu-huangjiu': {
      mcqs: [
        Q('Sự khác biệt căn bản về quy trình chế biến giữa Hoàng tửu (như Thiệu Hưng Hoa Điêu) và Bạch tửu (như Mao Đài, Ngũ Lương Dịch) là gì?', ['Hoàng tửu là rượu lên men gạo nếp không chưng cất có độ cồn vừa phải; Bạch tửu là rượu chưng cất ngũ cốc lên men rắn có độ cồn cao', 'Hoàng tửu làm từ nho còn Bạch tửu làm từ táo', 'Cả hai đều là rượu chưng cất trên 60 độ', 'Hoàng tửu chỉ xuất hiện từ thế kỷ 20'], 0, 'Hoàng tửu có lịch sử hơn 3.000 năm tại Giang Nam, còn kỹ thuật chưng cất Bạch tửu phổ biến mạnh từ thời Nguyên – Minh.'),
        Q('Ba nhóm hương vị nền tảng lớn nhất trong phân loại Bạch tửu Trung Quốc là gì?', ['Ngọt, Chua, Đắng', 'Tương hương (Mao Đài), Nồng hương (Ngũ Lương Dịch/Lô Châu) và Thanh hương (Phần tửu)', 'Vị cà phê, vị cacao và vị mật ong', 'Chỉ có duy nhất một loại hương vị'], 1, 'Loại khúc men, chất liệu hầm ủ (đất sét hay hũ gốm) và hệ vi sinh vật địa phương quyết định ba nhóm hương vị kinh điển này.')
      ],
      feynman: F('Phân biệt Hoàng tửu và Bạch tửu về lịch sử, kỹ thuật sản xuất và vai trò trong lễ nghi giao tiếp Trung Hoa.', ['So sánh quy trình lên men gạo nếp của Hoàng tửu với lên men rắn – chưng cất của Bạch tửu.', 'Giải thích yếu tố terroir vi sinh vật tại các lưu vực sông như Xích Thủy (Quý Châu).', 'Nêu lễ nghi chúc rượu và nguyên tắc tôn trọng thứ bậc trên bàn tiệc.'])
    }
  };

  var key;
  for (key in BATCH_P1) {
    if (Object.prototype.hasOwnProperty.call(BATCH_P1, key)) {
      window.CCE_COMPREHENSION_V3[key] = BATCH_P1[key];
    }
  }
})();
