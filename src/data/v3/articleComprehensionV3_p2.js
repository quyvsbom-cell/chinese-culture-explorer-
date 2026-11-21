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

  var BATCH_P2 = {
    'five-sacred-mountains-buddhist-peaks': {
      mcqs: [
        Q('Trong hệ thống Ngũ Nhạc (Năm ngọn núi thiêng theo phương vị Ngũ hành), ngọn núi nào ở Sơn Đông giữ vị thế đứng đầu là nơi các hoàng đế tổ chức đại lễ Phong Thiền?', ['Hoa Sơn', 'Thái Sơn (Đông Nhạc)', 'Tung Sơn', 'Hành Sơn'], 1, 'Thái Sơn thuộc phương Đông (hành Mộc, khởi đầu sinh mệnh), là nơi Tần Thủy Hoàng, Hán Vũ Đế và nhiều hoàng đế hành lễ Phong Thiền.'),
        Q('Tứ Đại Danh Sơn Phật giáo Trung Hoa (Ngũ Đài, Nga Mi, Phổ Đà, Cửu Hoa) lần lượt gắn với đạo tràng của bốn vị Bồ Tát nào?', ['Văn Thù, Phổ Hiền, Quán Thế Âm, Địa Tạng', 'Chỉ thờ duy nhất Di Lặc', 'Thờ Tứ Đại Thiên Vương', 'Gắn với bốn vị hoàng đế nhà Đường'], 0, 'Ngũ Đài (Văn Thù), Nga Mi (Phổ Hiền), Phổ Đà (Quán Thế Âm) và Cửu Hoa (Địa Tạng) tạo nên bản đồ hành hương Phật giáo kinh điển.')
      ],
      feynman: F('Giải thích cách người Trung Hoa cổ đại biến địa hình núi non tự nhiên thành bản đồ thiêng liêng kết hợp giữa Ngũ Nhạc (vương quyền/Đạo giáo) và Tứ Đại Danh Sơn (Phật giáo).', ['Nêu mối liên hệ phương vị Ngũ hành của Ngũ Nhạc và ý nghĩa lễ Phong Thiền tại Thái Sơn.', 'Trình bày hệ thống Tứ Đại Danh Sơn gắn với bốn vị Bồ Tát.', 'Chỉ ra sự tiếp biến giữa văn hóa sơn thủy, bia khắc đá và hành hương tôn giáo.'])
    },
    'dunhuang-mogao-buddhist-grotto-art': {
      mcqs: [
        Q('Phát hiện khảo cổ năm 1900 tại Hang số 17 (Tàng Kinh Động) ở Mạc Cao Quật Đôn Hoàng đã mở ra ngành Đôn Hoàng học nhờ kho tư liệu nào?', ['Hơn 50.000 cuộn kinh sách, khế ước, tranh lụa đa ngôn ngữ niêm phong từ đầu thế kỷ 11', 'Hàng nghìn pho tượng đồng thời Thương', 'Bản đồ đường sắt thế kỷ 19', 'Kho vũ khí nhà Thanh'], 0, 'Tàng Kinh Động lưu giữ kinh Phật, văn bản Hán, Tạng, Túc Đặc, Khư Lư và bản in Kinh Kim Cương năm 868.'),
        Q('Nghệ thuật bích họa và tượng đắp tại Mạc Cao Quật kéo dài suốt một thiên niên kỷ (từ thế kỷ 4 đến thế kỷ 14) thể hiện tiến trình biến chuyển thẩm mỹ nào?', ['Giữ nguyên hoàn toàn phong cách Ấn Độ không thay đổi', 'Từ ảnh hưởng Gandhara – Tây Vực thời Bắc Ngụy chuyển hóa dần sang phong cách Trung Hoa tráng lệ thời Thịnh Đường', 'Chỉ vẽ tranh thủy mặc đen trắng', 'Chỉ chạm khắc trên đá hoa cương'], 1, 'Sự Hán hóa hình tượng Phật, Bồ Tát và Phi thiên qua các triều đại là tư liệu sống về giao lưu Con đường Tơ lụa.')
      ],
      feynman: F('Phân tích vì sao Mạc Cao Quật Đôn Hoàng được ví như "bảo tàng trên vách sa mạc" ghi lại lịch sử giao lưu Đông – Tây suốt 1.000 năm.', ['Nêu vị trí ngã ba Con đường Tơ lụa của ốc đảo Đôn Hoàng.', 'Trình bày giá trị nghệ thuật của bích họa – tượng đắp và giá trị thư tịch của Hang số 17.', 'Liên hệ bài toán bảo tồn số hóa di sản (Digital Dunhuang) trước tác động của khí hậu sa mạc.'])
    },
    'xiqu-stagecraft-face-masks-tuong': {
      mcqs: [
        Q('Bốn nhóm vai diễn chuẩn hóa trong Kinh Kịch (và nhiều dòng Hí khúc Trung Hoa) gồm những loại hình nào?', ['Sinh (nam chính), Đán (nữ chính), Tịnh (mặt vẽ rằn), Sửu (vai hề)', 'Vua, Quan, Lính, Nông dân', 'Hát, Nói, Múa, Đánh', 'Nhạc công, Đạo diễn, Họa sĩ, Soạn giả'], 0, 'Bốn hành đương Sinh – Đán – Tịnh – Sửu kết hợp bốn kỹ năng Xướng – Niệm – Tác – Đả tạo nên ngữ pháp ước lệ của sân khấu cổ điển.'),
        Q('Trong nghệ thuật vẽ mặt (Kiểm phổ 脸谱) của Kinh Kịch và Hát Bội/Tuồng Việt Nam, sắc đỏ (như mặt Quan Vũ) chủ yếu biểu trưng cho phẩm chất nhân vật nào?', ['Gian xảo, đa nghi', 'Trung nghĩa, dũng cảm và chính trực', 'Nhút nhát, yếu đuối', 'Hài hước, láu lỉnh'], 1, 'Bảng màu ước lệ (đỏ trung nghĩa, trắng gian hùng như Tào Tháo, đen cương trực như Bao Công) giúp khán giả nhận diện tính cách ngay khi nhân vật xuất hiện.')
      ],
      feynman: F('So sánh ngôn ngữ sân khấu ước lệ của Kinh Kịch Trung Hoa và Nghệ thuật Tuồng (Hát Bội) Việt Nam.', ['Giải thích nguyên lý ước lệ không gian (một roi ngựa tượng trưng thiên quân vạn mã, hai lá cờ biểu thị cỗ xe).', 'Đối chiếu hệ thống màu mặt nạ và phân vai giữa Kinh Kịch và Tuồng.', 'Nêu những nét bản địa hóa về âm nhạc, ngôn ngữ và đề tài anh hùng dân tộc của Tuồng Việt Nam.'])
    },
    'five-vernacular-architecture-styles': {
      mcqs: [
        Q('Đặc điểm kiến trúc nổi bật nhất của nhà dân cư Huy Phái (An Huy – Giang Tây) giúp chống cháy lan giữa các nhà liền kề là gì?', ['Mái tranh dốc đứng', 'Tường đầu hồi giật cấp hình đầu ngựa (Mã đầu tường 马头墙) quét vôi trắng kết hợp ngói âm dương đen', 'Tường kính toàn bộ', 'Nhà sàn tre không có tường'], 1, 'Mã đầu tường vừa ngăn lửa cháy lan trong ngõ hẹp vừa tạo nhịp điệu đường viền trắng – đen hài hòa với sương núi Huy Châu.'),
        Q('Nhà hang Diêu Động (窑洞) tại cao nguyên Hoàng Thổ (Thiểm Tây – Sơn Tây) thích nghi với tự nhiên dựa trên đặc tính vật lý nào?', ['Tầng đất hoàng thổ dày đặc, khô ráo có độ đứng vững cao và khả năng cách nhiệt tự nhiên (đông ấm hạ mát)', 'Vùng có lượng mưa lớn nhất Trung Quốc', 'Khai thác đá cẩm thạch trắng', 'Đóng cọc gỗ trên đầm lầy'], 0, 'Diêu Động là giải pháp sinh thái bản địa tiết kiệm gỗ và năng lượng tại vùng bán khô hạn Tây Bắc.')
      ],
      feynman: F('Giải thích cách năm dòng kiến trúc dân gian tiêu biểu (Tứ Hợp Viện, Huy Phái, Giang Nam thủy hương, Thổ Lâu, Diêu Động) phản ánh trực tiếp khí hậu và cấu trúc xã hội từng vùng.', ['Chỉ ra yếu tố khí hậu chi phối hình thái vật liệu (đất nện, gỗ, tường vôi, đất hoàng thổ).', 'Nêu mối liên hệ giữa mặt bằng ngôi nhà và tổ chức gia tộc (gia đình đơn lẻ vs đại tông tộc).', 'Liên hệ với kiến trúc nhà ba gian hai chái hoặc nhà rường miền Trung Việt Nam.'])
    },
    'ming-qing-fiction-hongloumeng-anatomy': {
      mcqs: [
        Q('Vì sao Hồng Lâu Mộng của Tào Tuyết Cần được coi là đỉnh cao của tiểu thuyết chương hồi cổ điển và hình thành hẳn ngành "Hồng học"?', ['Chỉ kể chuyện đánh trận kỳ ảo', 'Kết hợp tự sự tâm lý hiện thực sâu sắc với kết cấu biểu tượng đa tầng phản ánh toàn diện đời sống, kiến trúc, y dược, thi ca và suy vong của quý tộc thế kỷ 18', 'Là tác phẩm ngắn nhất trong Tứ Đại Danh Tác', 'Viết hoàn toàn bằng tiếng Latinh'], 1, 'Hồng Lâu Mộng vượt khỏi khuôn mẫu anh hùng truyền kỳ để đạt tới chiều sâu bi kịch nhân sinh và bách khoa văn hóa thời Càn Long.'),
        Q('Bốn tác phẩm hợp thành "Tứ Đại Danh Tác" của văn học bạch thoại Minh – Thanh gồm những bộ nào?', ['Tam Quốc Diễn Nghĩa, Thủy Hử, Tây Du Ký và Hồng Lâu Mộng', 'Sử Ký, Hán Thư, Tấn Thư, Minh Sử', 'Kinh Thi, Sở Từ, Toàn Đường Thi, Toàn Tống Từ', 'Luận Ngữ, Mạnh Tử, Đại Học, Trung Dung'], 0, 'Bốn bộ tiểu thuyết chương hồi này kế thừa nghệ thuật kể chuyện dân gian (Thoại bản) và nâng bạch thoại lên tầm nghệ thuật lớn.')
      ],
      feynman: F('Phân tích bước ngoặt từ văn ngôn bác học sang tiểu thuyết chương hồi bạch thoại thời Minh – Thanh thông qua cấu trúc của Hồng Lâu Mộng.', ['Giải thích sự trỗi dậy của thị dân đô thị và kỹ nghệ khắc in giúp tiểu thuyết chương hồi lan rộng.', 'Nêu cấu trúc song hành giữa hiện thực Phủ Giả và tầng biểu tượng Thái Hư Ảo Cảnh trong Hồng Lâu Mộng.', 'Chỉ ra ảnh hưởng của tiểu thuyết chương hồi Minh – Thanh tới văn học trung đại Việt Nam.'])
    },
    'lacquerware-silk-woodblock-new-year-prints': {
      mcqs: [
        Q('Chất liệu nền tạo nên độ bền hàng nghìn năm (như đồ sơn mài khai quật tại mộ Mã Vương Đôi đời Hán) của nghề sơn mài cổ truyền Đông Á là gì?', ['Sơn tổng hợp gốc dầu mỏ', 'Nhựa tự nhiên từ cây Sơn (Toxicodendron vernicifluum) đông cứng nhờ phản ứng trùng hợp trong môi trường ẩm', 'Sáp ong trộn bột đá', 'Keo da trâu pha phẩm màu'], 1, 'Nhựa sơn tự nhiên kháng axit, kháng ẩm và chống mối mọt tuyệt vời, cho phép hiện vật từ thời Chiến Quốc – Tây Hán vẫn giữ màu son đen bóng.'),
        Q('Hai trung tâm tranh khắc gỗ Tết (Niên họa) nổi tiếng hàng đầu theo hai cực Bắc – Nam Trung Quốc là địa danh nào?', ['Dương Liễu Thanh (Thiên Tân) và Đào Hoa Ổ (Tô Châu)', 'Thâm Quyến và Hải Khẩu', 'Cáp Nhĩ Tân và Urumqi', 'Lhasa và Tây Ninh'], 0, 'Dương Liễu Thanh (kết hợp khắc in và tô vẽ tay tinh xảo) cùng Đào Hoa Ổ (cùng Vũ Cường, Duy Phường) tạo nên mỹ thuật dân gian mừng xuân đặc sắc.')
      ],
      feynman: F('So sánh kỹ thuật và giá trị văn hóa của ba thủ công mỹ nghệ truyền thống: Sơn mài, Tơ lụa và Tranh khắc gỗ Niên họa, đồng thời liên hệ với truyền thống Việt Nam.', ['Giải thích đặc tính tự nhiên của nhựa sơn và sự phát triển nghệ thuật tranh sơn mài Việt Nam thế kỷ 20.', 'So sánh tranh Tết Dương Liễu Thanh / Đào Hoa Ổ với tranh Đông Hồ và Hàng Trống.', 'Nêu ý nghĩa bảo tồn nghề thủ công trước sản xuất công nghiệp hàng loạt.'])
    },
    'pre-qin-legalism-xunzi-hanfeizi': {
      mcqs: [
        Q('Hàn Phi Tử tổng hợp ba dòng tư tưởng Pháp gia trước ông thành hệ thống quyền lực gồm ba trụ cột nào?', ['Pháp (luật lệ minh bạch), Thuật (kỹ thuật kiểm soát quan lại của quân chủ) và Thế (uy thế địa vị thể chế)', 'Nhân, Nghĩa và Trí', 'Thiên, Địa và Thủy', 'Đạo, Đức và Khí'], 0, 'Hàn Phi Tử hợp nhất Pháp của Thương Ưởng, Thuật của Thân Bất Hại và Thế của Thận Đáo thành lý luận nhà nước tập quyền.'),
        Q('Luận điểm "Nhân tính ác" (tính người vốn thiên về tư lợi, cần Lễ – Pháp uốn nắn) là quan điểm của triết gia Nho gia nào, người thầy trực tiếp của Hàn Phi Tử và Lý Tư?', ['Mạnh Tử', 'Tuân Tử', 'Trang Tử', 'Mặc Tử'], 1, 'Tuân Tử chủ trương "hóa tính khởi ngụy" bằng giáo dục Lễ và chế tài Pháp, tạo cầu nối trí tuệ giữa Nho gia và Pháp gia.')
      ],
      feynman: F('Giải thích vì sao triết học Pháp gia giúp nước Tần thống nhất Trung Hoa nhưng lại gây khủng hoảng khi cai trị thời bình.', ['Phân tích sự phối hợp giữa Pháp, Thuật và Thế trong việc huy động nguồn lực chiến tranh và chống đặc quyền quý tộc.', 'Chỉ ra điểm mù của giả định thuần túy về lợi ích và hình phạt khi thiếu nền tảng đồng thuận đạo đức.', 'Liên hệ mô hình dung hợp "ngoại Nho nội Pháp" của các triều đại Hán – Đường – Minh – Thanh.'])
    },
    'song-ming-neo-confucianism-zhu-wang': {
      mcqs: [
        Q('Bộ "Tứ Thư" mà Chu Hy tuyển chọn và chú giải làm chuẩn mực thi cử suốt từ đời Nguyên đến cuối đời Thanh gồm những tác phẩm nào?', ['Đại Học, Trung Dung, Luận Ngữ và Mạnh Tử', 'Kinh Thi, Kinh Thư, Kinh Lễ và Kinh Dịch', 'Đạo Đức Kinh, Nam Hoa Kinh, Mặc Tử và Hàn Phi Tử', 'Sử Ký, Hán Thư, Tam Quốc Chí và Hậu Hán Thư'], 0, 'Tứ Thư Chương Cú Tập Chú của Chu Hy trở thành sách giáo khoa chính thống của khoa cử Đông Á suốt hơn 600 năm.'),
        Q('Mệnh đề trung tâm "Tri hành hợp nhất" (知行合一) của Vương Dương Minh khẳng định điều gì?', ['Biết rồi để đó cũng đủ', 'Nhận thức đạo đức đích thực phải thể hiện ngay trong hành động thực tiễn; biết mà không làm thực chất là chưa biết', 'Chỉ cần hành động mù quáng không cần học hỏi', 'Đạo lý chỉ tồn tại trong sách vở'], 1, 'Vương Dương Minh phê phán thói học từ chương tách rời thực tiễn của khoa cử đương thời, đề cao lương tri chủ động.')
      ],
      feynman: F('Đối chiếu con đường nhận thức "Cách vật trí tri" của Chu Hy với "Trí lương tri – Tri hành hợp nhất" của Vương Dương Minh.', ['Trình bày cặp khái niệm Lý – Khí và phương pháp học từ ngoài vào trong của Lý học Trình – Chu.', 'Giải thích bước ngoặt "Tâm tức Lý" và đề cao chủ thể đạo đức của Tâm học Vương Dương Minh.', 'Nêu ảnh hưởng sâu rộng của hai trường phái này tới khoa cử Đại Việt và tư tưởng Minh Trị Nhật Bản.'])
    },
    'chinese-chan-buddhism-aesthetics': {
      mcqs: [
        Q('Bước ngoặt bản địa hóa lớn nhất của Thiền tông Trung Quốc gắn với Lục tổ Huệ Năng (thế kỷ 7–8) trong Pháp Bảo Đàn Kinh là gì?', ['Chủ trương "Đốn ngộ" (trực chỉ nhân tâm, kiến tính thành Phật) ngay giữa sinh hoạt đời thường, kết hợp tinh thần "Nhất nhật bất tác, nhất nhật bất thực"', 'Chỉ tu tập bằng cách dịch kinh Phạn', 'Cấm hoàn toàn lao động sản xuất trong chùa', 'Bắt buộc ngồi thiền suốt 20 năm không nói chuyện'], 0, 'Thiền tông Nam tông dung hợp triết lý Bát Nhã Ấn Độ với tinh thần tự nhiên Đạo gia và thực tiễn đời sống Trung Hoa.'),
        Q('Ảnh hưởng sâu đậm nhất của Thiền tông lên hội họa và thi ca thời Đường – Tống thể hiện qua cặp khái niệm thẩm mỹ nào?', ['Rực rỡ và dày đặc chi tiết', 'Lưu bạch (khoảng trống gợi mở), Đạm bạc và "thi trung hữu họa" (Vương Duy)', 'Tượng đá khổng lồ mạ vàng', 'Văn biền ngẫu cầu kỳ'], 1, 'Tinh thần buông bỏ chấp niệm và trực giác tức thời của Thiền định hình mỹ học thủy mặc và khoảng lặng trong nghệ thuật Đông Á.')
      ],
      feynman: F('Giải thích cách Thiền tông chuyển hóa từ Phật giáo Ấn Độ thành một dòng văn hóa – thẩm mỹ đặc trưng của Đông Á.', ['Phân biệt khuynh hướng Tiệm ngộ và Đốn ngộ trong lịch sử Thiền tông.', 'Nêu vai trò của công án, lao tác thường nhật (Bách Trượng thanh quy) và sự gần gũi với Đạo gia.', 'Minh họa ảnh hưởng của Thiền tới thơ Vương Duy hoặc tranh thủy mặc Tống – Nguyên.'])
    },
    'mohism-logic-optics-ethics': {
      mcqs: [
        Q('Hai khẩu hiệu xã hội nổi tiếng nhất của Mặc gia (Mặc Tử, thế kỷ 5 TCN) nhằm phản đối chiến tranh xâm lược và thứ bậc thân sơ cực đoan là gì?', ['Kiêm ái (yêu thương không phân biệt thân sơ) và Phi công (chống chiến tranh phi nghĩa)', 'Vô vi và Tiêu dao', 'Pháp trị và Nghiêm hình', 'Khắc kỷ và Phục lễ'], 0, 'Mặc gia đại diện cho tầng lớp thợ thủ công và hiệp sĩ bình dân, chủ trương tiết kiệm (Tiết dụng) và phòng thủ hòa bình.'),
        Q('Trong phần "Mặc Kinh", các học giả Mặc gia đã ghi nhận sớm hiện tượng vật lý quang học nào trước công nguyên?', ['Hiện tượng ảnh ngược qua lỗ nhỏ (Camera Obscura) và tính chất phản xạ của gương phẳng, gương cầu lõm – lồi', 'Lý thuyết tương đối rộng', 'Cấu trúc hạt nhân nguyên tử', 'Sóng vô tuyến điện'], 0, 'Mặc Kinh chứa những ghi chép sớm bậc nhất thế giới về hình học định nghĩa điểm – đường thẳng, cơ học đòn bẩy và quang học lỗ kim.')
      ],
      feynman: F('Trình bày vì sao Mặc gia được xem là "nhánh khoa học và lô-gic bị lãng quên" của thời Tiên Tần và lý do học phái này suy giảm từ thời Hán.', ['Nêu ba trụ cột: đạo đức Kiêm ái – Phi công, kỹ thuật thủ thành và khoa học quang học – lô-gic (Tam biểu pháp).', 'Giải thích sự đối lập giữa Kiêm ái (bình đẳng) của Mặc gia với Ái hữu sai đẳng (yêu theo thứ bậc) của Nho gia.', 'Chỉ ra bối cảnh Hán Vũ Đế độc tôn Nho thuật khiến truyền thống thực nghiệm Mặc gia đứt đoạn hàng thế kỷ.'])
    },
    'religious-daoism-quanzhen-zhengyi': {
      mcqs: [
        Q('Hai tông phái lớn còn duy trì hệ thống tổ chức chính thống của Đạo giáo Trung Quốc hiện đại là gì?', ['Chính Nhất phái (thờ Trương Đạo Lăng, cư gia lập thất, trọng khoa nghi phù lục) và Toàn Chân phái (Vương Trùng Dương sáng lập, xuất gia ăn chay, trọng nội đan)', 'Nam phái và Đông phái', 'Bạch Liên và Thái Bình', 'Nho phái và Mặc phái'], 0, 'Chính Nhất thịnh hành tại phương Nam (Long Hổ Sơn) gắn với nghi lễ dân gian; Toàn Chân thịnh hành tại phương Bắc (Bạch Vân Quán Bắc Kinh) nhấn mạnh tu luyện nội đan và Tam giáo hợp nhất.'),
        Q('Sự chuyển dịch kỹ thuật tu luyện Đạo giáo từ thời Đường sang thời Tống – Kim thể hiện qua bước ngoặt nào?', ['Từ Ngoại đan (luyện khoáng chất thủy ngân, chu sa dễ ngộ độc) sang Nội đan (tu luyện Tinh – Khí – Thần bên trong cơ thể)', 'Từ Nội đan quay lại Ngoại đan', 'Bỏ hoàn toàn dưỡng sinh khí công', 'Chỉ đọc sách lịch sử'], 0, 'Nội đan kết hợp lý thuyết Dịch học, Trung y và khí công dưỡng sinh, trở thành nền tảng của nhiều môn thái cực và dưỡng sinh sau này.')
      ],
      feynman: F('Phân biệt Triết học Đạo gia (Lão – Trang) với Tôn giáo Đạo giáo (Chính Nhất – Toàn Chân) để tránh nhầm lẫn phổ biến khi nghiên cứu văn hóa Trung Hoa.', ['Chỉ ra điểm khác biệt về mục tiêu và thực hành giữa triết lý Vô vi của Lão – Trang và hệ thống thần điện, khoa nghi, tu luyện của Đạo giáo.', 'So sánh đặc trưng sinh hoạt và tu tập của Chính Nhất phái và Toàn Chân phái.', 'Nêu đóng góp khách quan của Đạo giáo vào lịch sử hóa học sơ khai (thuốc súng), y dược và bảo tồn sinh thái núi thiêng.'])
    },
    'chu-nom-liushu-script-dialogue': {
      mcqs: [
        Q('Phương pháp cấu tạo phổ biến nhất để tạo ra chữ Nôm (như chữ "trời" 𡗶 ghép Thiên 天 và Thượng 上, hay chữ "năm" 𢆥 ghép Niên 年 và Nam 南) dựa trên nguyên lý nào của Lục thư chữ Hán?', ['Hội ý và Hình thanh (kết hợp một bộ phận biểu nghĩa và một bộ phận mượn âm Hán – Việt gợi âm tiếng Việt)', 'Hoàn toàn vẽ tranh tự do không dùng bộ thủ Hán', 'Mượn bảng chữ cái Latinh', 'Chỉ dùng ký hiệu toán học'], 0, 'Người Việt làm chủ quy luật cấu tạo chữ Hán để sáng tạo hệ văn tự riêng ghi lại trọn vẹn tiếng nói và tâm hồn dân tộc.'),
        Q('Tác phẩm thơ Nôm đầu tiên còn lưu truyền quy mô lớn (254 bài) đánh dấu sự trưởng thành của văn học chữ Nôm thế kỷ 15 là gì?', ['Quốc Âm Thi Tập của Nguyễn Trãi', 'Truyện Kiều của Nguyễn Du', 'Lục Vân Tiên của Nguyễn Đình Chiểu', 'Cung Oán Ngâm Khúc'], 0, 'Quốc Âm Thi Tập đặt nền móng vững chắc cho văn học chữ Nôm, dẫn tới đỉnh cao Truyện Kiều và Hồ Xuân Hương thế kỷ 18–19.')
      ],
      feynman: F('Giải thích cách chữ Nôm minh họa rõ nhất tinh thần "tiếp biến chủ động" của văn hóa Việt Nam trước chữ Hán.', ['Phân tích 2–3 ví dụ cụ thể về cách ghép bộ ý và bộ âm để tạo chữ Nôm.', 'Trình bày vai trò của chữ Nôm trong việc bảo lưu tiếng Việt cổ và sáng tác văn học dân tộc.', 'Nêu thách thức về chuẩn hóa và độ khó học chữ khiến chữ Quốc ngữ dần thay thế từ đầu thế kỷ 20.'])
    },
    'imperial-palace-axes-beijing-thanglong-hue': {
      mcqs: [
        Q('Điểm giống nhau nền tảng trong quy hoạch hoàng thành giữa Tử Cấm Thành Bắc Kinh, Hoàng thành Thăng Long và Kinh thành Huế là gì?', ['Cùng tuân thủ cấu trúc ba vòng thành lồng nhau (Kinh thành – Hoàng thành – Tử Cấm Thành), trục thần đạo chính và mô hình "Tiền triều hậu tẩm"', 'Cùng xây trên đảo giữa biển', 'Cùng có diện tích y hệt nhau', 'Cùng không sử dụng vật liệu gỗ'], 0, 'Ba kinh đô chia sẻ ngữ pháp quy hoạch đô thị Đông Á theo Chu Lễ và phong thủy sơn thủy.'),
        Q('Điểm sáng tạo bản địa nổi bật của Kinh thành Huế thời Nguyễn (1805–1832) so với Tử Cấm Thành Bắc Kinh là gì?', ['Xây hoàn toàn theo hình tam giác', 'Kết hợp bố cục cung điện truyền thống phương Đông với thành lũy phòng thủ kiểu Vauban phương Tây, tựa sông Hương lấy núi Ngự Bình làm tiền án và dùng hệ nhà rường "trùng thiềm điệp ốc"', 'Không có Ngọ Môn', 'Bỏ hoàn toàn yếu tố sông nước'], 1, 'Kinh thành Huế là minh chứng độc đáo cho sự dung hợp kỹ thuật phòng thủ Vauban với triết lý phong thủy và quy mô gần gũi thiên nhiên Việt Nam.')
      ],
      feynman: F('Đối chiếu trục không gian hoàng cung giữa Bắc Kinh, Thăng Long và Huế để chỉ ra phần "ngữ pháp chung Đông Á" và phần "bản sắc bản địa Việt Nam".', ['Nêu cấu trúc chung ba vòng thành và trục Bắc – Nam / Đông Nam.', 'Chỉ ra quy mô tinh tế, kiến trúc trùng thiềm điệp ốc và thành Vauban của Huế cùng dấu tích khảo cổ 18 Hoàng Diệu của Thăng Long.', 'Giải thích ý nghĩa tuyên ngôn chủ quyền văn hóa ("Đế vương Nam quốc") qua kiến trúc cung đình.'])
    },
    'truc-lam-zen-song-yuan-dialogue': {
      mcqs: [
        Q('Thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông sáng lập cuối thế kỷ 13 có đặc trưng tư tưởng nổi bật nào?', ['Hợp nhất các dòng Thiền trước đó thành một giáo hội thống nhất mang tinh thần nhập thế "Cư trần lạc đạo", gắn đạo pháp với bảo vệ độc lập dân tộc', 'Tách biệt hoàn toàn khỏi đời sống xã hội và triều chính', 'Chỉ truyền bá tại Trung Quốc', 'Bác bỏ hoàn toàn Nho và Đạo'], 0, 'Trần Nhân Tông sau hai lần lãnh đạo kháng chiến chống Nguyên – Mông đã lên Yên Tử xuất gia nhưng vẫn đi khắp nước khuyên dân giữ thập thiện.'),
        Q('Trong lịch sử giao lưu Phật giáo Việt – Trung, Thiền phái Trúc Lâm đối thoại trực tiếp với bối cảnh Phật giáo giai đoạn nào của Trung Quốc?', ['Phật giáo thời Thương', 'Thiền tông Tống – Nguyên (như Lâm Tế, Tào Động) với tư tưởng Tam giáo đồng nguyên', 'Phật giáo thời Tần', 'Phật giáo cận đại thế kỷ 20'], 1, 'Trần Thái Tông và Trần Nhân Tông kế thừa sâu sắc ngữ lục Thiền thời Tống nhưng tự chủ xây dựng hệ thống tổ đình và bản sắc nhập thế Đại Việt.')
      ],
      feynman: F('Phân tích tinh thần "Cư trần lạc đạo" của Thiền phái Trúc Lâm và lý do đây được xem là biểu tượng tự chủ tinh thần của Đại Việt thời Trần.', ['Tóm lược bối cảnh lịch sử sau kháng chiến chống Nguyên – Mông và vai trò của Tam tổ Trúc Lâm (Trần Nhân Tông, Pháp Loa, Huyền Quang).', 'Giải thích ý nghĩa sống giữa đời thường vẫn giữ tâm thanh tịnh (Hòa quang đồng trần).', 'So sánh nét nhập thế cộng đồng của Trúc Lâm với truyền thống Thiền sơn lâm thời Tống – Nguyên.'])
    },
    'east-asian-historiography-shiji-toanthu': {
      mcqs: [
        Q('Cấu trúc biên soạn của "Đại Việt Sử Ký Toàn Thư" (Ngô Sĩ Liên và các sử thần nhà Lê) tuân theo thể loại sử học nào?', ['Biên niên thể (chép sự kiện theo thứ tự năm tháng kèm lời bàn "Sử thần viết")', 'Từ điển bách khoa theo bảng chữ cái', 'Kịch bản sân khấu', 'Hồi ký cá nhân'], 0, 'Đại Việt Sử Ký Toàn Thư kết hợp chuẩn mực biên niên nghiêm cẩn kiểu Tư Trị Thông Giám với truyền thống bình luận đạo lý Xuân Thu.'),
        Q('Ý nghĩa lớn nhất của lời tựa và kỷ Hồng Bàng – Triệu – Đinh – Lý – Trần – Lê trong Đại Việt Sử Ký Toàn Thư so với chính sử Trung Quốc là gì?', ['Sao chép hoàn toàn quan điểm quận huyện của sử nhà Hán', 'Xác lập chính thống lịch sử độc lập ngang hàng ("Bắc triều – Nam quốc") với nguồn gốc văn hiến lâu đời riêng biệt của Đại Việt', 'Chỉ ghi chép lịch sử từ thế kỷ 19', 'Không ghi nhận các cuộc kháng chiến'], 1, 'Sử gia Đại Việt dùng chính công cụ sử học kinh điển Đông Á để khẳng định quốc thống độc lập của nước Nam.')
      ],
      feynman: F('So sánh phương pháp chép sử và tinh thần "trực bút" (chép thẳng không giấu sự thật) giữa Sử Ký của Tư Mã Thiên và Đại Việt Sử Ký Toàn Thư.', ['Phân biệt Kỷ truyện thể của Sử Ký và Biên niên thể của Toàn Thư.', 'Nêu nguyên tắc tôn trọng sự thực lịch sử và truyền thống lời bình "Thái sử công viết" / "Sử thần viết".', 'Làm rõ cách các sử gia Đại Việt khẳng định quốc thống độc lập trong khuôn khổ sử học Đông Á.'])
    },
    'bac-y-nam-duoc-comparative-medicine': {
      mcqs: [
        Q('Hai danh y kiệt xuất đặt nền móng lý luận và thực hành cho nền Y học Cổ truyền Việt Nam (Nam Dược) là ai?', ['Thiền sư Tuệ Tĩnh (thế kỷ 14, Nam Dược Thần Hiệu) và Hải Thượng Lãn Ông Lê Hữu Trác (thế kỷ 18, Hải Thượng Y Tông Tâm Lĩnh)', 'Hoa Đà và Trương Trọng Cảnh', 'Lý Thời Trân và Tôn Tư Mạo', 'Biển Thước và Tần Việt Nhân'], 0, 'Tuệ Tĩnh đề xướng "Nam dược trị Nam nhân", còn Hải Thượng Lãn Ông hoàn thiện bộ y thư đồ sộ 28 tập 66 quyển kèm 9 điều Y huấn cách ngôn.'),
        Q('Vì sao Hải Thượng Lãn Ông nhấn mạnh việc gia giảm bài thuốc Bắc Y khi chữa bệnh cho người Việt?', ['Vì người Việt không mắc bệnh bao giờ', 'Do khác biệt về khí hậu nhiệt đới nóng ẩm, thổ nhưỡng và thể trạng người phương Nam so với khí hậu lạnh khô phương Bắc', 'Vì thuốc Bắc không có tác dụng ở bất cứ đâu', 'Chỉ để tiết kiệm giấy chép sách'], 1, 'Nguyên tắc "Nhân thời, nhân địa, nhân nhân chế nghi" đòi hỏi bản địa hóa phương tễ theo môi trường sinh thái và thể chất thực tế.')
      ],
      feynman: F('Giải thích tôn chỉ "Nam dược trị Nam nhân" như một tư duy sinh thái – y học hiện đại thay vì sự bài xích cực đoan.', ['Chỉ ra mối liên hệ lý luận âm dương – ngũ hành – tạng phủ chung giữa Bắc Y và Nam Dược.', 'Giải thích lý do dược liệu bản địa nhiệt đới (sả, gừng, tía tô, diếp cá, nghệ) phù hợp bệnh lý vùng thấp nhiệt.', 'Nêu giá trị y đức vượt thời đại trong Y huấn cách ngôn của Hải Thượng Lãn Ông.'])
    },
    'china-hsr-megaprojects-urban-network': {
      mcqs: [
        Q('Cấu trúc quy hoạch mạng lưới đường sắt cao tốc (HSR) quốc gia Trung Quốc hiện đại thường được gọi là gì?', ['Một trục đơn Bắc – Nam', 'Bát Tung Bát Hoành (8 tuyến dọc Bắc – Nam và 8 tuyến ngang Đông – Tây)', 'Mạng lưới hình tròn duy nhất quanh Bắc Kinh', 'Chỉ kết nối 3 thành phố ven biển'], 1, 'Khung Bát Tung Bát Hoành kết nối hầu hết các đô thị lớn trên 500.000 dân, tạo nên hiệu ứng "hội nhập vùng đô thị 1–2 giờ".'),
        Q('Dòng tàu cao tốc tiêu chuẩn nội địa thế hệ mới (vận tốc vận hành thương mại tối đa 350 km/h trên các tuyến chuẩn) do CRRC phát triển mang tên gì?', ['Phục Hưng (Fuxing · 复兴号)', 'Hòa Bình 1', 'Đông Phương 1950', 'Thần Châu'], 0, 'Tàu Phục Hưng (CR400AF/BF) chuẩn hóa thiết kế và linh kiện nội địa tiếp nối thế hệ Hài Hòa (Hexie) trước đó.')
      ],
      feynman: F('Phân tích tác động kinh tế – không gian của mạng lưới đường sắt cao tốc Trung Quốc đối với cấu trúc chuỗi cung ứng và du lịch liên tỉnh.', ['Giải thích hiệu ứng nén không gian – thời gian giữa các siêu vùng đô thị (Trường Giang, Châu Giang, Kinh Tân Ký).', 'Nêu vai trò của tàu cao tốc trong việc tách dòng hành khách để giải phóng năng lực vận tải hàng hóa trên đường sắt thường.', 'Chỉ ra những thách thức về chi phí đầu tư, khấu hao và cân bằng mật độ khai thác giữa miền Đông và miền Tây.'])
    },
    'china-green-energy-ev-battery-ecosystem': {
      mcqs: [
        Q('Cụm thuật ngữ "Tân Tam Dạng" (新三样 — Ba mặt hàng xuất khẩu mới) đánh dấu sự chuyển dịch cơ cấu công nghiệp xanh của Trung Quốc gồm những nhóm sản phẩm nào?', ['Quần áo, đồ chơi và nội thất gỗ', 'Xe điện (EV), pin lithium-ion và tấm pin năng lượng mặt trời (quang điện)', 'Than đá, dầu thô và quặng sắt', 'Gạo, trà và tơ lụa'], 1, 'Tân Tam Dạng thay thế nhóm xuất khẩu thâm dụng lao động cũ ("Lão Tam Dạng") nhờ tích tụ chuỗi cung ứng vật liệu và quy mô sản xuất.'),
        Q('Lợi thế cốt lõi giúp hệ sinh thái xe điện Trung Quốc giảm mạnh giá thành và tăng tốc đổi mới sản phẩm là gì?', ['Tích hợp theo chiều dọc từ tinh luyện vật liệu pin, sản xuất cell pin (LFP/NCM), động cơ điện đến phần mềm buồng lái thông minh ngay trong nội địa', 'Không cần tuân thủ tiêu chuẩn an toàn', 'Chỉ sản xuất thủ công từng chiếc', 'Miễn phí hoàn toàn nguyên liệu kim loại'], 0, 'Sự tập trung dày đặc của chuỗi cung ứng pin (CATL, BYD) và linh kiện tại Giang Tô, Phúc Kiến, Quảng Đông, An Huy rút ngắn chu kỳ ra mắt mẫu xe mới.')
      ],
      feynman: F('Giải thích cơ chế hình thành lợi thế chuỗi cung ứng toàn diện của Trung Quốc trong bộ ba Xe điện – Pin lưu trữ – Điện mặt trời.', ['Phân tích vai trò kết hợp giữa chính sách trợ cấp kích cầu giai đoạn đầu, cạnh tranh nội địa khốc liệt và tích hợp dọc chuỗi pin.', 'Nêu tác động của công nghệ pin LFP (Lithium Iron Phosphate) đối với an toàn và giá thành xe điện phổ thông.', 'Liên hệ cơ hội và thách thức cho ngành công nghiệp phụ trợ và chuyển dịch xanh tại Việt Nam.'])
    },
    'china-digital-payments-platform-economy': {
      mcqs: [
        Q('Trung Quốc đã "nhảy cóc" qua giai đoạn thống trị của thẻ tín dụng nhựa để tiến thẳng sang xã hội không tiền mặt nhờ công nghệ phổ cập nào từ thập niên 2010?', ['Thanh toán mã QR trên hai siêu ứng dụng Alipay và WeChat Pay kết hợp hạ tầng 4G/5G và tài khoản ngân hàng nội địa', 'Séc giấy viết tay', 'Tiền xu kim loại tự động', 'Chuyển khoản qua fax'], 0, 'Mã QR chi phí triển khai gần như bằng không giúp cả tiểu thương vỉa hè lẫn siêu thị lớn chấp nhận thanh toán số đồng bộ.'),
        Q('Khách du lịch và doanh nhân Việt Nam hiện nay có thể sử dụng Alipay và WeChat Pay tại Trung Quốc Đại lục bằng giải pháp thuận tiện nào?', ['Bắt buộc phải mua nhà tại Trung Quốc mới mở được', 'Liên kết trực tiếp thẻ Visa/Mastercard quốc tế vào tài khoản Alipay/WeChat Pay đã xác thực hộ chiếu (lưu ý giới hạn giao dịch và phí theo quy định hiện hành)', 'Chỉ dùng được tiền mặt USD', 'Không có cách nào dùng cho người nước ngoài'], 1, 'Từ năm 2023–2024, Ngân hàng Nhân dân Trung Quốc thúc đẩy mở rộng liên kết thẻ quốc tế giúp khách nước ngoài thanh toán mã QR thuận tiện hơn nhiều.')
      ],
      feynman: F('Phân tích cách mô hình "Siêu ứng dụng" (Super-App) tích hợp thanh toán QR, giao vận và dịch vụ công đã tái cấu trúc đời sống đô thị và thương mại Trung Quốc.', ['Giải thích hiệu ứng nhảy cóc hạ tầng từ tiền mặt thẳng lên thanh toán di động mã QR.', 'Nêu sự kết nối liền mạch giữa thanh toán, gọi xe, đặt vé tàu và thương mại điện tử trong một ứng dụng.', 'Đánh giá mặt trái cần quản trị như quyền riêng tư dữ liệu, phụ thuộc nền tảng và khoảng cách số với người cao tuổi.'])
    },
    'modern-chinese-archaeology-sanxingdui-liangzhu': {
      mcqs: [
        Q('Hai phát hiện khảo cổ lớn — Văn hóa Lương Chử (Chiết Giang, 3300–2300 TCN) và Văn hóa Tam Tinh Đôi (Tứ Xuyên) — đã thay đổi nhận thức sử học truyền thống về nguồn gốc văn minh Trung Hoa như thế nào?', ['Chứng minh văn minh Trung Hoa chỉ xuất phát từ một điểm duy nhất bên sông Hoàng Hà', 'Củng cố mô hình "Đa nguyên nhất thể" (nhiều trung tâm văn minh rực rỡ đồng thời tại lưu vực Trường Giang, Tứ Xuyên và Hoàng Hà kết hợp thành văn minh Hoa Hạ)', 'Chứng minh không có nghề đúc đồng cổ đại', 'Xác nhận chữ viết xuất hiện muộn hơn thế kỷ 10'], 1, 'Thành cổ và hệ thống đê đập Lương Chử cùng tượng đồng mắt lồi – mặt nạ vàng Tam Tinh Đôi cho thấy sự đa dạng rực rỡ ngoài vùng Trung Nguyên.'),
        Q('Hiện vật biểu tượng đặc trưng nhất của Văn hóa Lương Chử (được UNESCO công nhận Di sản Thế giới năm 2019) thể hiện tín ngưỡng vũ trụ "Thiên viên địa phương" là gì?', ['Ngọc Tông (玉琮 — khối ngọc ngoài vuông trong tròn khắc mặt thần nhân thú) và Ngọc Bích', 'Tiền xu đồng', 'Áo giáp sắt', 'Sứ thanh hoa'], 0, 'Ngọc Tông Lương Chử chứng tỏ trình độ chế tác ngọc tinh xảo và tổ chức xã hội có phân tầng sớm hơn nhà Thương hàng nghìn năm.')
      ],
      feynman: F('Giải thích khái niệm "Đa nguyên nhất thể" (Phí Hiếu Thông / Tô Bỉnh Kỳ) qua bằng chứng khảo cổ từ Lương Chử và Tam Tinh Đôi.', ['Mô tả quy mô công trình thủy lợi, thành cổ và nghệ thuật ngọc của Lương Chử ở hạ lưu Trường Giang.', 'Trình bày nét tạo hình đồng thanh độc đáo không giống Trung Nguyên của Tam Tinh Đôi tại bồn địa Tứ Xuyên.', 'Kết luận cách các trung tâm vùng miền này đóng góp vào dòng chảy văn minh Trung Hoa thống nhất.'])
    },
    'china-space-aerospace-tiangong-beidou': {
      mcqs: [
        Q('Hệ thống định vị vệ tinh toàn cầu độc lập do Trung Quốc phát triển hoàn chỉnh phủ sóng toàn cầu từ năm 2020 mang tên gì?', ['GPS', 'Bắc Đẩu (BeiDou · 北斗)', 'Galileo', 'GLONASS'], 1, 'Bắc Đẩu-3 cung cấp dịch vụ định vị, dẫn đường, định thời gian toàn cầu và tích hợp tin nhắn ngắn vệ tinh độc đáo.'),
        Q('Hai cột mốc khoa học nổi bật của chương trình thám hiểm không gian Trung Quốc trong thập niên 2020 là gì?', ['Đưa trạm vũ trụ Thiên Cung (Tiangong) vào vận hành thường trực và các sứ mệnh Hằng Nga (Chang\'e) thu mẫu đất đá từ cả mặt gần lẫn mặt xa của Mặt Trăng', 'Chỉ phóng vệ tinh khí tượng độ cao thấp', 'Chưa từng đưa phi hành gia lên quỹ đạo', 'Dừng toàn bộ chương trình từ năm 2010'], 0, 'Trạm Thiên Cung hoàn thành cấu hình chữ T năm 2022 và Hằng Nga-6 năm 2024 lần đầu tiên mang mẫu vật từ vùng khuất Mặt Trăng về Trái Đất.')
      ],
      feynman: F('Phân tích ý nghĩa khoa học và ứng dụng kinh tế – logistics của hệ thống vệ tinh Bắc Đẩu và chương trình không gian Thiên Cung – Hằng Nga.', ['Giải thích vai trò của Bắc Đẩu trong vận tải cảng biển tự động, nông nghiệp chính xác và định vị logistics khu vực châu Á – Thái Bình Dương.', 'Nêu điểm đặc sắc văn hóa trong cách đặt tên các sứ mệnh không gian từ thần thoại cổ (Thiên Cung, Hằng Nga, Chúc Dung, Thiên Vấn).', 'Đánh giá tác động lan tỏa công nghệ vật liệu và viễn thông từ hàng không vũ trụ sang công nghiệp dân dụng.'])
    },
    'rcep-acfta-cumulation-rules-vietnam': {
      mcqs: [
        Q('Lợi thế lớn nhất về quy tắc xuất xứ của Hiệp định RCEP so với ACFTA (Form E) đối với doanh nghiệp sản xuất Việt Nam sử dụng nguyên liệu từ Nhật Bản hoặc Hàn Quốc là gì?', ['Miễn hoàn toàn mọi thủ tục hải quan', 'Cho phép cộng gộp nguyên liệu có xuất xứ từ toàn bộ 15 nước thành viên RCEP (gồm cả Nhật, Hàn, Úc, New Zealand) vào tiêu chí xuất xứ', 'Không cần chứng từ chứng minh nguồn gốc', 'Chỉ áp dụng cho nông sản tươi'], 1, 'Dưới ACFTA, vải hoặc linh kiện từ Nhật/Hàn bị tính là nguyên liệu không có xuất xứ, còn dưới RCEP chúng được cộng gộp hợp lệ.'),
        Q('Khi lựa chọn sử dụng C/O RCEP thay vì C/O Form E, doanh nghiệp cần đặc biệt kiểm tra quy định kỹ thuật nào tại Điều 2.6 của RCEP?', ['Quy tắc Khác biệt Thuế quan (Tariff Differentials) và yêu cầu tỷ lệ giá trị gia tăng nội địa tối thiểu tại nước xuất khẩu', 'Màu sắc của thùng carton', 'Số lượng nhân viên văn phòng', 'Thời tiết tại cảng xếp hàng'], 0, 'Do một số nước RCEP áp dụng biểu thuế khác nhau cho từng đối tác, Điều 2.6 ngăn chặn việc lợi dụng nước trung gian có thuế thấp nhất mà không tạo đủ giá trị gia tăng.')
      ],
      feynman: F('Giải thích ngắn gọn ba tiêu chí xuất xứ WO, RVC 40% và CTC/CTH, đồng thời trình bày cách một doanh nghiệp Việt Nam quyết định giữa C/O Form E và C/O RCEP.', ['Định nghĩa rõ WO (thuần túy), RVC 40% (hàm lượng giá trị khu vực) và CTC/CTH (chuyển đổi mã HS).', 'Chỉ ra lợi ích cộng gộp 15 nước của RCEP khi chuỗi cung ứng dùng nguyên liệu Nhật – Hàn.', 'Nhắc rõ nguyên tắc luôn đối chiếu biểu thuế và danh mục PSR hiện hành trước khi chốt C/O.'])
    },
    'china-trade-fairs-canton-ciie-yiwu-guide': {
      mcqs: [
        Q('Điểm khác biệt cốt lõi về chức năng thương mại giữa Hội chợ Quảng Giao (Canton Fair, Quảng Châu) và Hội chợ CIIE (Thượng Hải) là gì?', ['Canton Fair chủ yếu phục vụ tìm nguồn hàng xuất khẩu từ Trung Quốc theo 3 pha ngành hàng; CIIE chuyên biệt cho doanh nghiệp nước ngoài trưng bày và bán hàng nhập khẩu vào thị trường Trung Quốc', 'Cả hai đều chỉ bán lẻ trực tiếp cho du khách', 'CIIE chỉ tổ chức cho ngành gốm sứ', 'Canton Fair chỉ diễn ra 5 năm một lần'], 0, 'Hiểu đúng chức năng giúp doanh nghiệp Việt Nam chọn Canton Fair/Yiwu khi đi nhập hàng và chọn CIIE khi xúc tiến xuất khẩu nông sản – thực phẩm vào Trung Quốc.'),
        Q('Dấu hiệu pháp lý quan trọng nhất trên Giấy phép Kinh doanh (营业执照) giúp phân biệt bước đầu nhà máy sản xuất gốc với công ty thương mại thuần túy là gì?', ['Màu mực in logo trên danh thiếp', 'Phạm vi kinh doanh (经营范围) có ghi từ khóa sản xuất/gia công/chế tạo (生产, 加工, 制造) và địa chỉ đăng ký tại khu công nghiệp', 'Nhân viên kinh doanh nói tiếng Anh lưu loát', 'Gian hàng tại hội chợ trang trí lớn'], 1, 'Thẩm định giấy phép kết hợp khảo sát xưởng thực địa (IQC/IPQC/OQC và máy móc vận hành thực) là bước kiểm soát rủi ro không thể thiếu.')
      ],
      feynman: F('Thiết kế một quy trình 4 bước từ lúc sàng lọc gian hàng tại Canton Fair hoặc Nghĩa Ô đến khi hoàn tất thẩm định nhà máy (Factory Audit) trước khi đặt cọc.', ['Nêu cách chọn đúng pha hội chợ và chuẩn bị Tech Pack/mẫu đối chiếu.', 'Trình bày cách đọc Giấy phép Kinh doanh 18 ký tự để phân biệt xưởng gốc và công ty thương mại.', 'Liệt kê các hạng mục kiểm tra thực địa tại xưởng (dây chuyền hoạt động thực, IQC/OQC, kho thành phẩm).'])
    },
    'gacc-decree-248-249-vietnam-agri-export': {
      mcqs: [
        Q('Theo Lệnh 248 của Tổng cục Hải quan Trung Quốc (GACC), doanh nghiệp sản xuất thực phẩm nước ngoài thuộc danh mục 18 nhóm hàng rủi ro cao phải đăng ký mã số CIFER theo tuyến nào?', ['Tự nộp trực tiếp không cần qua cơ quan nhà nước', 'Phải được cơ quan có thẩm quyền của nước xuất khẩu (như Bộ NN&PTNT, Bộ Công Thương hoặc Bộ Y tế Việt Nam) thẩm định và giới thiệu hồ sơ lên GACC', 'Chỉ cần khai báo bằng miệng tại cửa khẩu', 'Đăng ký thông qua công ty vận tải'], 1, 'Lệnh 248 phân tầng rõ 18 nhóm thực phẩm chịu giám sát chặt (cần giới thiệu của cơ quan thẩm quyền) và nhóm còn lại được tự đăng ký trên CIFER.'),
        Q('Đối với trái cây tươi Việt Nam xuất khẩu chính ngạch sang Trung Quốc (như sầu riêng, thanh long, chuối), ngoài quy định chung, doanh nghiệp cần đáp ứng điều kiện bắt buộc nào?', ['Nghị định thư kiểm dịch thực vật song phương cùng Mã số vùng trồng (PUC) và Mã số cơ sở đóng gói (PHC) được GACC phê duyệt', 'Chỉ cần hóa đơn bán lẻ địa phương', 'Không cần kiểm soát dư lượng hay sinh vật gây hại', 'Chỉ được vận chuyển bằng đường hàng không'], 0, 'Cơ chế PUC và PHC bảo đảm truy xuất ngược toàn chuỗi và phòng ngừa đình chỉ mã số khi có cảnh báo dịch hại.')
      ],
      feynman: F('Giải thích ý nghĩa của Lệnh 248, Lệnh 249 GACC và hệ thống mã số PUC/PHC trong bước chuyển từ xuất khẩu tiểu ngạch sang chính ngạch của nông sản Việt Nam.', ['Phân biệt phạm vi của Lệnh 248 (đăng ký cơ sở sản xuất trên CIFER) và Lệnh 249 (quản lý an toàn thực phẩm và ghi nhãn).', 'Làm rõ vai trò của Nghị định thư kiểm dịch, Mã số vùng trồng (PUC) và Cơ sở đóng gói (PHC).', 'Phân tích rủi ro bị đình chỉ mã số nếu để xảy ra tình trạng mượn mã hoặc vi phạm dư lượng/sinh vật gây hại.'])
    },
    'chinese-enterprises-globalization-playbook': {
      mcqs: [
        Q('Khung lý thuyết LLL của John Mathews giải thích quá trình vươn ra toàn cầu nhanh chóng của các doanh nghiệp đa quốc gia đến sau (như doanh nghiệp Trung Quốc) qua ba cơ chế nào?', ['Linkage (Liên kết), Leverage (Đòn bẩy) và Learning (Học hỏi)', 'Low-cost, Local-only và Luck', 'Loan, Lease và Liquidate', 'Law, Labor và Land'], 0, 'Doanh nghiệp đến sau liên kết vào chuỗi cung ứng toàn cầu, tận dụng đòn bẩy quy mô cụm nội địa để học nhanh công nghệ và nâng cấp lên OBM.'),
        Q('Xu hướng "Xuất khẩu năng lực chuỗi cung ứng" (Supply Chain Globalization) của doanh nghiệp Trung Quốc sang Đông Nam Á hiện nay thể hiện rõ nhất qua hiện tượng nào?', ['Chỉ mở văn phòng đại diện bán lẻ nhỏ', 'Doanh nghiệp đầu tàu di chuyển đồng thời cùng các nhà cung cấp vệ tinh cấp 1 và cấp 2 về khuôn mẫu, linh kiện, bao bì tới gần nhà máy lắp ráp tại nước sở tại', 'Đóng cửa hoàn toàn các nhà máy ở nước ngoài', 'Ngừng toàn bộ hoạt động R&D'], 1, 'Mô hình di chuyển theo cụm giúp duy trì tốc độ cung ứng linh kiện nhanh đồng thời đáp ứng quy tắc xuất xứ tại thị trường đích.')
      ],
      feynman: F('Phân tích lộ trình chuyển hóa OEM → ODM → OBM của doanh nghiệp Trung Quốc và rút ra 2 bài học thực tiễn cho doanh nghiệp sản xuất Việt Nam.', ['Giải thích đường cong giá trị gia tăng (Smiling Curve) giữa gia công lắp ráp và R&D – thương hiệu.', 'Nêu ba lớp bản địa hóa (sản phẩm, tuân thủ pháp lý/ESG, nhân sự quản trị) quyết định thành bại khi ra nước ngoài.', 'Liên hệ cơ hội tham gia sâu hơn vào chuỗi cung ứng đa điểm của doanh nghiệp hỗ trợ Việt Nam.'])
    },
    'cross-border-b2b-contracts-cietac-viac': {
      mcqs: [
        Q('Trong pháp luật thương mại Trung Quốc, yếu tố nào mang giá trị chứng cứ quyết định nhất để ràng buộc trách nhiệm pháp lý của công ty đối tác trên hợp đồng mua bán B2B?', ['Chữ ký viết tay của nhân viên kinh doanh và dấu bầu dục tiếng Anh tự khắc', 'Dấu tròn Công chương (公章) hoặc Dấu chuyên dụng hợp đồng (合同专用章) đã đăng ký chính thức với cơ quan công an', 'Tin nhắn đồng ý trên mạng xã hội không có hợp đồng', 'Danh thiếp công ty'], 1, 'Theo Bộ luật Dân sự và thực tiễn xét xử Trung Quốc, Công chương hoặc Dấu hợp đồng hợp lệ trùng khớp pháp nhân là trụ cột xác lập hiệu lực hợp đồng.'),
        Q('Vì sao điều khoản Trọng tài thương mại quốc tế (như CIETAC hoặc VIAC) thường được ưu tiên hơn Tòa án dân sự trong hợp đồng B2B Trung – Việt?', ['Vì trọng tài không cần hợp đồng bằng văn bản', 'Vì cả Việt Nam và Trung Quốc đều là thành viên Công ước New York 1958, giúp phán quyết trọng tài có khả năng công nhận và thi hành xuyên biên giới cao hơn nhiều so với bản án tòa án nước ngoài', 'Vì trọng tài hoàn toàn miễn phí', 'Vì phán quyết trọng tài không có tính ràng buộc'], 1, 'Thiết kế điều khoản trọng tài rõ ràng (tên trung tâm, địa điểm, ngôn ngữ) kết hợp điều khoản QC độc lập và Ngôn ngữ ưu tiên bảo vệ hiệu quả quyền lợi doanh nghiệp.')
      ],
      feynman: F('Trình bày 4 hàng rào pháp lý bắt buộc phải kiểm tra trước khi chuyển tiền đặt cọc cho một hợp đồng nhập khẩu B2B từ Trung Quốc.', ['Kiểm tra pháp nhân trên GSXT, Công chương (公章) và sự trùng khớp tên tài khoản thụ hưởng ngân hàng.', 'Quy định rõ Ngôn ngữ ưu tiên, luật áp dụng (CISG 1980) và Phụ lục thông số kỹ thuật.', 'Gắn điều khoản thanh toán phần còn lại với kiểm định độc lập (PSI/AQL) và chọn điều khoản trọng tài CIETAC/VIAC theo Công ước New York 1958.'])
    }
  };

  var key;
  for (key in BATCH_P2) {
    if (Object.prototype.hasOwnProperty.call(BATCH_P2, key)) {
      window.CCE_COMPREHENSION_V3[key] = BATCH_P2[key];
    }
  }
})();
