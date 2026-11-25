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

  var ARTICLES_V3_PART1A = [
    {
      id: 'xia-shang-zhou-oracle-bones-rituals',
      number: 66,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Văn minh Hạ–Thương–Chu: Giáp Cốt Văn Ân Khư & Chế độ Tông pháp – Lễ nhạc Tây Chu',
      titleZh: '夏商周文明：殷墟甲骨文与西周宗法礼乐制度',
      titleZhTrad: '夏商周文明：殷墟甲骨文與西周宗法禮樂制度',
      titleEn: 'Xia–Shang–Zhou Civilization: Yinxu Oracle Bone Script and Western Zhou Lineage–Ritual Institutions',
      readMinutes: 14,
      epistemicTag: 'Khảo cổ học & Cổ văn tự học',
      abstract: 'Chuyên luận khảo sát quá trình hình thành nhà nước sơ khai ở lưu vực Hoàng Hà qua ba triều đại Hạ–Thương–Chu (khoảng 2070–771 TCN), tập trung vào hệ thống văn tự Giáp Cốt tại di chỉ Ân Khư (An Dương, Hà Nam) và bước ngoặt thể chế từ thần quyền nhà Thương sang Tông pháp – Lễ nhạc và học thuyết Thiên Mệnh thời Tây Chu.',
      keyTakeaways: [
        'Di chỉ Nhị Lý Đầu (Yển Sư, Hà Nam) và Ân Khư (An Dương, Hà Nam) chứng thực bước chuyển từ xã hội thủ lĩnh sang nhà nước đô thành sử dụng thanh đồng lễ khí và văn tự hoàn chỉnh.',
        'Hơn 150.000 mảnh Giáp Cốt Văn thời vãn Thương (khoảng 1300–1046 TCN) đã định hình đầy đủ các nguyên lý cấu tạo chữ Hán (tượng hình, chỉ sự, hội ý, hình thanh) và cho thấy thần quyền chi phối mọi quyết sách triều chính.',
        'Sau trận Mục Dã (1046 TCN), Chu Công Đán kiến tạo hệ thống Phân phong – Tông pháp – Lễ nhạc cùng khái niệm "Kính đức bảo dân", đặt nền tảng luân lý chính trị cho suốt hai thiên niên kỷ tiếp theo.'
      ],
      introduction: 'Trong lịch sử văn minh Đông Á, giai đoạn Tam Đại (Hạ, Thương, Tây Chu) giữ vai trò phôi thai của cả chữ viết, nghệ thuật đúc đồng lẫn cấu trúc chính trị. Nếu di chỉ Nhị Lý Đầu (khai quật từ năm 1959 tại Yển Sư, Hà Nam) phản ánh bước định hình đô thành và lễ khí đồng thau sơ kỳ khoảng thế kỷ XIX–XVI TCN, thì cuộc phát hiện Giáp Cốt Văn năm 1899 bởi học giả Vương Ý Vinh và các đợt khai quật Ân Khư từ năm 1928 đã đưa nhà Thương từ phạm vi truyền thuyết trong "Sử Ký" của Tư Mã Thiên bước vào lịch sử có chứng tích văn bản trực tiếp. Từ nền tảng đó, nhà Tây Chu (1046–771 TCN) tiến hành cuộc cải tổ mang tính bước ngoặt: thay thế trật tự lấy bói toán và hiến tế thần linh làm trung tâm bằng một thể chế chính trị dựa trên huyết thống tông tộc và quy phạm lễ nhạc.',
      historicalBackground: 'Lưu vực trung và hạ du Hoàng Hà giai đoạn thiên niên kỷ II TCN chứng kiến sự tập trung nguồn lực nông nghiệp và luyện kim quy mô lớn. Nhà Thương sau nhiều lần thiên đô đã định đô ổn định tại Ân (nay thuộc An Dương, tỉnh Hà Nam) dưới thời vua Bàn Canh (khoảng năm 1300 TCN), duy trì liên tục 12 đời vua trong 273 năm. Xã hội nhà Thương vận hành theo mô hình "Nội phục – Ngoại phục", nơi vương thất kiểm soát trực tiếp vùng trung tâm và thiết lập quan hệ triều cống linh hoạt với các phương quốc xung quanh. Năm 1046 TCN, liên quân do Chu Vũ Vương lãnh đạo đánh bại Thương Trụ Vương tại Mục Dã. Trước thách thức cai trị một lãnh thổ rộng lớn hơn nhiều so với căn cứ Quan Trung, nhiếp chính Chu Công Đán đã tiến hành Đông chinh dẹp loạn Tam Giám, xây dựng Lạc Ấp (Lạc Dương) làm đông đô và ban bố hệ thống thể chế thống nhất trên toàn vương quốc.',
      mainContent: [
        {
          heading: '1. Giáp Cốt Văn Ân Khư và cấu trúc chính trị thần quyền nhà Thương',
          body: 'Giáp Cốt Văn (khắc trên mai rùa và xương bả vai trâu bò) là kho lưu trữ hoàng gia sớm nhất được biết đến tại Trung Quốc. Một bản bốc từ (lời bói) đầy đủ gồm bốn phần: tự từ (ghi ngày can chi và tên quan trinh nhân), mệnh từ (nội dung thỉnh vấn về tế tự, mùa màng, chinh phạt, thời tiết hay bệnh tật của nhà vua), chiêm từ (lời đoán của Thương vương) và nghiệm từ (kết quả thực tế kiểm chứng). Trên bình diện văn tự học, khoảng 4.500 tự dạng đơn lẻ đã được thống kê (trong đó hơn 1.500 chữ đã giải mã chắc chắn), chứng tỏ chữ Hán thời Vũ Đinh (khoảng 1250–1192 TCN) đã vượt xa giai đoạn ký hiệu sơ khai để đạt tới trình độ ghi chép cú pháp hoàn chỉnh. Đỉnh đồng Hậu Mẫu Mậu (nặng 832,84 kg, khai quật năm 1939 tại Vũ Quan Thôn, An Dương) cùng hàng trăm thanh đồng khí tại mộ Phụ Hảo (khai quật năm 1976) cho thấy quyền lực nhà Thương gắn chặt với độc quyền nghi lễ tế tổ và luyện kim.'
        },
        {
          heading: '2. Phân phong chế và Tông pháp chế thời Tây Chu',
          body: 'Để tránh sự lỏng lẻo của mạng lưới phương quốc thời Thương, Tây Chu thiết lập Chế độ Phân phong (Phong kiến thân thích) kết hợp chặt chẽ với Tông pháp chế. Chu Thiên tử phong đất và dân cho các hoàng thân quốc thích (như Lỗ, Tề, Tấn, Vệ, Yên) và công thần (như Khương Tử Nha ở nước Tề), gọi là chư hầu, với nghĩa vụ triều cận, nộp cống và xuất quân bảo vệ vương thất. Trục xương sống điều phối mạng lưới này là nguyên tắc "Đích trưởng tử kế thừa" (con trai trưởng do chính thất sinh ra kế vị): Thiên tử là Đại tông của thiên hạ; các thứ tử được phong chư hầu là Tiểu tông đối với Thiên tử nhưng lại là Đại tông trong nước mình; tiếp xuống là Khanh đại phu và Sĩ. Nhờ đó, quan hệ chính trị "quân – thần" được đồng nhất hóa với quan hệ gia tộc "phụ – tử", biến toàn bộ vương quốc thành một mạng lưới huyết thống phân tầng chặt chẽ.'
        },
        {
          heading: '3. Chế tác Lễ Nhạc và học thuyết Thiên Mệnh hữu đức',
          body: 'Một đóng góp tư tưởng quyết định của Tây Chu là việc tái định nghĩa tính chính danh của quyền lực. Nếu nhà Thương xem Thượng Đế là vị thần bảo hộ tuyệt đối cho dòng họ Tử của mình, thì các văn bản Kim văn (khắc trên đồ đồng như Đại Vu Đỉnh, Hà Tôn) và thiên "Khang Cáo", "Thiệu Cáo" trong Thượng Thư lại khẳng định "Thiên mệnh bất thường" (Mệnh trời không cố định ở một họ nào) mà chỉ trao cho người "Kính đức bảo dân" (trọng đạo đức, che chở dân chúng). Để cụ thể hóa trật tự đẳng cấp ấy vào đời sống thường nhật, Tây Chu hệ thống hóa Lễ và Nhạc: Lễ phân định ranh giới trên dưới (ví dụ chế độ dùng đỉnh trong tế lễ: Thiên tử chín đỉnh tám quỹ, chư hầu bảy đỉnh sáu quỹ, đại phu năm đỉnh bốn quỹ), còn Nhạc dùng bộ biên chung thanh đồng (như bộ 65 chuông ở mộ Tăng Hầu Ất thời đầu Chiến Quốc kế thừa truyền thống Chu nhạc) để điều hòa cảm xúc và gắn kết cộng đồng quý tộc.'
        },
        {
          heading: '4. Từ Kim văn Tây Chu đến sự rạn vỡ trật tự Lễ Nhạc',
          body: 'Khác với Giáp Cốt Văn ngắn gọn thời Thương, Kim văn (Chung Đỉnh văn) Tây Chu thường dài hàng trăm chữ — tiêu biểu như Mao Công Đỉnh (497 chữ) hay Tán Thị Bàn (357 chữ) — ghi lại sắc phong, tranh chấp ruộng đất, hiệp ước và công trạng quân sự. Đây là nguồn sử liệu sơ cấp vô giá cho thấy pháp lý và văn bản hành chính đã bắt đầu tách khỏi bói toán. Tuy nhiên, sau nhiều thế hệ, quan hệ huyết thống giữa Thiên tử và chư hầu dần phai nhạt. Năm 771 TCN, Khuyển Nhung đánh chiếm Hạo Kinh (Tây An), Chu Bình Vương phải dời đô sang Lạc Ấp (770 TCN), mở đầu thời kỳ Đông Chu (Xuân Thu – Chiến Quốc) với hiện tượng "Lễ băng nhạc hoại", nhưng chính những thiết chế và khái niệm của Tây Chu lại trở thành lý tưởng phục cổ để Khổng Tử hệ thống hóa Nho học hai thế kỷ sau đó.'
        }
      ],
      theoreticalFramework: 'Trục lý thuyết cốt lõi của giai đoạn Hạ–Thương–Chu là bước chuyển hình thái quyền lực từ "Thần quyền – Hiến tế" (Theocratic-Sacrificial State thời Thương) sang "Huyết thống – Lễ chế – Đạo đức hóa Thiên mệnh" (Kinship-Ritual Polity thời Tây Chu). Triết gia Vương Quốc Duy trong tác phẩm "Ân Chu chế độ luận" (1917) nhận định cuộc chuyển giao Thương–Chu là biến đổi thể chế sâu sắc nhất trong cổ sử Trung Hoa, khi nguyên tắc kế vị đích trưởng, chế độ tông pháp và lễ nghi đã biến trật tự chính trị thành một cấu trúc văn hóa có khả năng tự tái sản xuất ngay cả khi quyền lực quân sự suy yếu.',
      terminologyAndLiushu: [
        {
          hanzi: '卜',
          pinyin: 'bǔ',
          hanViet: 'Bốc',
          liushu: 'Tượng hình',
          gloss: 'Mô phỏng vết nứt chữ Y xuất hiện trên mai rùa hoặc xương thú sau khi hơ lửa trong nghi lễ chiêm bốc thời Thương.'
        },
        {
          hanzi: '鼎',
          pinyin: 'dǐng',
          hanViet: 'Đỉnh',
          liushu: 'Tượng hình',
          gloss: 'Vẽ chiếc vạc đồng ba chân hai tai; từ dụng cụ nấu nướng tế tự trở thành biểu tượng tối cao của vương quyền và đẳng cấp lễ chế.'
        },
        {
          hanzi: '宗',
          pinyin: 'zōng',
          hanViet: 'Tông',
          liushu: 'Hội ý',
          gloss: 'Gồm bộ Miên (宀: mái nhà) và bộ Thị (示: bàn thờ tế tự), nghĩa gốc là tông miếu thờ tổ tiên, mở rộng thành hệ thống huyết thống Đại tông – Tiểu tông.'
        },
        {
          hanzi: '礼',
          pinyin: 'lǐ',
          hanViet: 'Lễ',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Dạng phồn thể 禮 gồm bộ Thị (示: tế thần) và chữ Phong (豊: khí cụ đựng ngọc dâng tế), từ nghi thức tế lễ chuyển hóa thành quy phạm trật tự xã hội.'
        },
        {
          hanzi: '德',
          pinyin: 'dé',
          hanViet: 'Đức',
          liushu: 'Hội ý',
          gloss: 'Trong Giáp Cốt Văn và Kim văn gồm bộ Xích (彳: bước đi) và chữ Trực (直: nhìn thẳng), thời Tây Chu thêm bộ Tâm (心), chỉ phẩm hạnh chính trực để giữ Thiên mệnh.'
        }
      ],
      primarySources: [
        PQ(
          '《礼记·表记》',
          'Lễ Ký — Thiên Biểu Ký',
          'Book of Rites (Liji), Chapter Biaoji',
          '殷人尊神，率民以事神，先鬼而后礼。周人尊礼尚施，事鬼敬神而远之，近人而忠焉。',
          'Yīnrén zūnshén, shuàimín yǐ shìshén, xiāngguǐ ér hòulǐ. Zhōurén zūnlǐ shàngshī, shìguǐ jìngshén ér yuǎnzhī, jìnrén ér zhōng yān.',
          'Ân nhân tôn thần, suất dân dĩ sự thần, tiên quỷ nhi hậu lễ. Chu nhân tôn lễ thượng thí, sự quỷ kính thần nhi viễn chi, cận nhân nhi trung yên.',
          'Người nhà Ân (Thương) tôn sùng thần linh, dẫn dắt dân chúng phụng sự thần linh, đặt quỷ thần lên trước lễ nghi. Người nhà Chu tôn trọng lễ nghi và đề cao ân đức, thờ quỷ kính thần nhưng giữ khoảng cách, gần gũi con người và chuộng lòng trung tín.',
          'The people of Yin (Shang) revered spirits and led the populace to serve them, placing ghosts before ritual. The people of Zhou revered ritual and prized benevolence; they respected spirits yet kept them at a distance, drawing close to human affairs with loyalty.'
        ),
        PQ(
          '《尚书·康诰》',
          'Thượng Thư — Thiên Khang Cáo',
          'Book of Documents (Shangshu), Announcement to Kang',
          '惟命不于常。道善则得之，不善则失之矣。',
          'Wéi mìng bù yú cháng. Dào shàn zé dé zhī, bù shàn zé shī zhī yǐ.',
          'Duy mệnh bất vu thường. Đạo thiện tắc đắc chi, bất thiện tắc thất chi hỹ.',
          'Mệnh trời không cố định mãi ở một nơi. Hành đạo thiện thì được mệnh trời, làm điều bất thiện thì đánh mất mệnh trời.',
          'The Mandate of Heaven is not constant. By following the good way one obtains it; by failing to do so one loses it.'
        )
      ],
      sinoVietnameseComparison: 'Tại lưu vực sông Hồng, văn hóa Đông Sơn (khoảng thế kỷ VII TCN – thế kỷ I SCN) phát triển song song với giai đoạn Đông Chu và Tần–Hán, cũng đạt tới đỉnh cao luyện kim thanh đồng với trống đồng Ngọc Lũ, thạp Đào Thịnh nhưng mang cấu trúc nghi lễ và thẩm mỹ nông nghiệp lúa nước bản địa khác biệt rõ rệt với bộ đỉnh–quỹ tế tổ của Trung Nguyên. Về mặt thể chế, các triều đại quân chủ tự chủ Việt Nam về sau (đặc biệt từ thời Lê sơ thế kỷ XV) đã tiếp thu trực tiếp nguyên tắc "Đích trưởng tử kế thừa", chế độ Tông pháp và học thuyết Thiên mệnh từ truyền thống Chu lễ, đồng thời Việt hóa qua hệ thống hương ước làng xã và tín ngưỡng thờ Thành hoàng.',
      additionalReferences: [
        'Vương Quốc Duy (1917), Ân Chu chế độ luận (殷周制度论), trong Quan Đường Tập Lâm.',
        'Trương Quang Trực / K. C. Chang (1980), Shang Civilization, Yale University Press.',
        'Lý Phong / Li Feng (2008), Bureaucracy and the State in Early China: Governing the Western Zhou, Cambridge University Press.'
      ],
      conclusion: 'Ba triều đại Hạ–Thương–Chu đã định hình bộ mã văn hóa nền tảng của Trung Hoa: chữ Hán khắc trên giáp cốt và kim văn làm phương tiện lưu trữ ký ức, thanh đồng làm vật tải nghi lễ, và bộ ba Tông pháp – Lễ nhạc – Thiên mệnh làm khung hợp thức hóa quyền lực. Mọi cuộc cải cách thể chế hay tranh luận tư tưởng suốt các thời kỳ Tần–Hán đến Minh–Thanh đều đối thoại trực tiếp với di sản này.'
    },
    {
      id: 'qin-institutional-standardization',
      number: 67,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Tần Thủy Hoàng & Cách mạng Thể chế: Quận Huyện chế, Thư Đồng Văn, Xa Đồng Quỹ & Tần giản',
      titleZh: '秦始皇与制度革命：郡县制、书同文、车同轨与秦简',
      titleZhTrad: '秦始皇與制度革命：郡縣制、書同文、車同軌與秦簡',
      titleEn: 'Qin Shi Huang and Institutional Revolution: Commandery–County System, Script Standardization, Axle Uniformity, and Qin Bamboo Slips',
      readMinutes: 14,
      epistemicTag: 'Lịch sử Thể chế & Khảo cổ Văn bản',
      abstract: 'Chuyên luận phân tích cuộc tái cấu trúc toàn diện nhà nước Trung Hoa sau năm 221 TCN dưới thời Tần Thủy Hoàng, đối chiếu giữa ghi chép chính sử ("Sử Ký") với các phát hiện khảo cổ văn bản hành chính trên thẻ tre như Thụy Hổ Địa Tần giản (1975) và Lý Gia Tần giản (2002).',
      keyTakeaways: [
        'Quận Huyện chế và hệ thống Tam Công Cửu Khanh thay thế hoàn toàn chế độ phân phong quý tộc thế tập bằng bộ máy quan lại bổ nhiệm theo năng lực và chịu trách nhiệm trực tiếp trước Hoàng đế.',
        'Các chuẩn hóa Thư Đồng Văn (Tiểu Triện), Xa Đồng Quỹ, tiền Bán Lượng và đo lường (Độ–Lượng–Hành) giảm chi phí giao dịch hành chính và tạo nền tảng thị trường thống nhất liên vùng.',
        'Thụy Hổ Địa Tần giản (Hồ Bắc) và Lý Gia Tần giản (Hồ Nam) chứng minh pháp luật nhà Tần vận hành bằng quy trình hồ sơ cực kỳ chi tiết về thuế khóa, kho tàng và giám định tư pháp, thay vì hình phạt tàn bạo một chiều như hình ảnh đơn giản hóa trong sử liệu đời sau.'
      ],
      introduction: 'Trong lịch sử chính trị Trung Hoa, năm 221 TCN đánh dấu ranh giới giữa hai kỷ nguyên: từ trật tự phong kiến phân tán kéo dài tám thế kỷ của nhà Chu sang nhà nước đế quốc tập quyền thống nhất. Dù triều Tần chỉ tồn tại 15 năm (221–206 TCN), mô hình quản trị do Doanh Chính (Tần Thủy Hoàng) và thừa tướng Lý Tư thiết lập — bắt nguồn từ cuộc biến pháp Thương Ưởng năm 356 TCN — đã quy định kiến trúc hành chính của các đế quốc Trung Hoa suốt hơn hai nghìn năm, đúng như nhận xét nổi tiếng của Đàm Tự Đồng cuối đời Thanh: "Hai nghìn năm chính trị đều là chính trị nhà Tần" (Nhị thiên niên lai chi chính, Tần chính dã).',
      historicalBackground: 'Xuất phát là một chư hầu vùng biên viễn phía Tây (Quan Trung), nước Tần từ giữa thế kỷ IV TCN đã triệt để thực thi tư tưởng Pháp gia qua hai đợt biến pháp của Thương Ưởng (356 TCN và 350 TCN): bãi bỏ chế độ tỉnh điền, thưởng quân công theo 20 bậc tước vị, lập hệ thống hộ khẩu liên đới (Thập ngũ liên tọa) và xây dựng nền kinh tế canh chiến. Nhờ nguồn lực nông nghiệp ổn định từ đồng bằng Quan Trung (với kênh Trịnh Quốc) và bồn địa Tứ Xuyên (với Đô Giang Yển), nước Tần lần lượt chinh phục sáu nước Hàn (230 TCN), Triệu (228 TCN), Ngụy (225 TCN), Sở (223 TCN), Yên (222 TCN) và Tề (221 TCN). Ngay sau khi thống nhất, cuộc tranh luận lịch sử tại triều đình Hàm Dương giữa thừa tướng Vương Quán (chủ trương phân phong hoàng tử ở các vùng xa như Yên, Tề, Sở) và đình úy Lý Tư (chủ trương áp dụng Quận Huyện chế trên toàn quốc) đã quyết định vận mệnh thể chế đế quốc.',
      mainContent: [
        {
          heading: '1. Hoàng đế chế, Tam Công Cửu Khanh và Quận Huyện chế',
          body: 'Tần Thủy Hoàng ghép danh hiệu "Tam Hoàng" và "Ngũ Đế" để đặt ra tước hiệu "Hoàng đế", tự xưng "Thủy Hoàng đế", xác lập nguyên tắc tối thượng của vương quyền tập trung. Ở trung ương, bộ máy phân quyền chức năng theo mô hình Tam Công: Thừa tướng phụ trách hành chính, Thái úy phụ trách quân sự, Ngự sử đại phu phụ trách giám sát và văn thư — giúp Hoàng đế kiểm soát lẫn nhau giữa các nhánh quyền lực. Ở địa phương, cả nước được chia thành 36 quận (sau mở rộng lên hơn 40 quận), dưới quận là huyện, hương, đình, lý. Mọi quan lại từ Quận thủ, Quận úy đến Huyện lệnh đều do triều đình bổ nhiệm, hưởng bổng lộc bằng thóc gạo và có thể bị điều chuyển hoặc bãi nhiệm bất cứ lúc nào, chấm dứt quyền lực cát cứ cha truyền con nối của tầng lớp quý tộc cổ.'
        },
        {
          heading: '2. Thư Đồng Văn, Xa Đồng Quỹ và chuẩn hóa đo lường – tiền tệ',
          body: 'Trước năm 221 TCN, sáu nước Sơn Đông sử dụng hệ thống chữ viết, tiền tệ (đao tệ, bố tệ, nghĩ tị tiền), đơn vị đo lường và khổ trục xe khác nhau, cản trở nghiêm trọng việc truyền đạt công văn và vận chuyển quân lương. Nhà Tần chọn chữ Đại Triện của nước Tần làm cơ sở, giao Lý Tư, Triệu Cao và Hồ Mẫu Kính giản hóa thành chữ Tiểu Triện (cùng bộ mẫu chữ "Thương Hiệt thiên"), đồng thời cho phép sử dụng chữ Lệ sơ khai (Tần Lệ) trong văn thư tốc ký hành chính. Song song đó, triều đình thống nhất đồng tiền tròn lỗ vuông "Bán Lượng" (nặng 12 thù), ban hành các quả cân (Tần quyền) và đấu đong (Tần lượng) có khắc chiếu thư chuẩn hóa năm 221 TCN, cùng mạng lưới Trì đạo (đường lớn rộng 50 bộ) phục vụ chuẩn "Xa đồng quỹ" (khổ trục xe thống nhất khoảng 6 thước Tần).'
        },
        {
          heading: '3. Giải mã bộ máy hành chính qua Thụy Hổ Địa và Lý Gia Tần giản',
          body: 'Hai phát hiện khảo cổ lớn nửa sau thế kỷ XX đã làm thay đổi tận gốc nhận thức về nhà Tần. Năm 1975, tại mộ số 11 Thụy Hổ Địa (Vân Mộng, Hồ Bắc), các nhà khảo cổ tìm thấy 1.155 thẻ tre thuộc về viên lại tư pháp tên Hỉ (mất năm 217 TCN), chứa các bộ luật chi tiết như Điền luật (quy định bảo vệ rừng mùa xuân và báo cáo lượng mưa), Thương luật (quản lý kho thóc), Hiệu luật (kiểm kê tài sản công) và Phong chẩn thức (biên bản khám nghiệm hiện trường và pháp y sớm nhất lịch sử Trung Quốc). Năm 2002, hơn 37.000 thẻ tre khai quật từ giếng cổ số 1 tại Lý Gia (Long Sơn, Hồ Nam) — hồ sơ lưu trữ thực tế của huyện Thiên Lăng thuộc quận Động Đình giai đoạn 222–208 TCN — cho thấy mọi công văn giữa quận và huyện đều ghi rõ ngày giờ gửi–nhận, tên người chuyển phát và thời hạn phản hồi, phản ánh một nhà nước quan liêu vận hành bằng văn bản ở cấp cơ sở.'
        },
        {
          heading: '4. Giới hạn của mô hình cưỡng chế tốc độ cao',
          body: 'Chính sức mạnh huy động tổng lực của bộ máy hành chính Tần lại trở thành nguyên nhân khiến triều đại sụp đổ nhanh chóng. Trong vòng chưa đầy một thập kỷ, triều đình huy động hàng trăm nghìn nhân công đồng thời cho bốn đại công trình: nối dài Trường Thành phía Bắc (chống Hung Nô), xây dựng Lăng Ly Sơn và cung A Phòng, mở đường Trực đạo từ Hàm Dương lên Cửu Nguyên và nam chinh Bách Việt (đào kênh Linh Cừ nối sông Tương và sông Ly). Khi sức chịu đựng của dân chúng vùng sáu nước cũ chạm ngưỡng và cuộc khởi nghĩa Trần Thắng – Ngô Quảng bùng nổ tại Đại Trạch Hương năm 209 TCN do luật chậm kỳ chém đầu, nhà Tần nhanh chóng tan rã. Tuy vậy, nhà Hán kế tục ngay sau đó vẫn giữ nguyên bộ khung thể chế Tần ("Hán thừa Tần chế"), chỉ điều chỉnh phần ý thức hệ bằng cách kết hợp Pháp gia với Nho gia ("Ngoại Nho nội Pháp").'
        }
      ],
      theoreticalFramework: 'Từ góc độ kinh tế học thể chế và xã hội học lịch sử (Max Weber), nhà Tần là một trong những nhà nước "quan liêu văn bản" (bureaucratic-documentary state) xuất hiện sớm nhất thế giới. Cuộc chuẩn hóa Thư–Xa–Tiền–Độ–Lượng về bản chất là nỗ lực tối ưu hóa năng lực thu thuế và kiểm soát thông tin trên diện rộng ("legibility of the state" theo khái niệm của James C. Scott). Sự sụp đổ của nhà Tần chứng minh rằng một thể chế quan liêu dù hiệu quả về mặt kỹ thuật hành chính vẫn không thể bền vững nếu thiếu cơ chế giảm xóc xã hội và sự đồng thuận văn hóa.',
      terminologyAndLiushu: [
        {
          hanzi: '郡',
          pinyin: 'jùn',
          hanViet: 'Quận',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Ấp (阝 bên phải: khu cư trú) chỉ nghĩa và chữ Quân (君) chỉ âm; thời Tần trở thành đơn vị hành chính địa phương cấp cao nhất dưới trung ương.'
        },
        {
          hanzi: '县',
          pinyin: 'xiàn',
          hanViet: 'Huyện',
          liushu: 'Hội ý / Giả tá',
          gloss: 'Dạng phồn thể 縣 vốn mang nghĩa treo lên (huyền), sau giả tá chỉ đơn vị hành chính trực thuộc vương thất hoặc quận thủ.'
        },
        {
          hanzi: '篆',
          pinyin: 'zhuàn',
          hanViet: 'Triện',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Trúc (竹: thẻ tre) và chữ Thoán (彖) chỉ âm; chỉ thể chữ chuẩn hóa thời Tần (Tiểu Triện) dùng trong văn khắc chính thức.'
        },
        {
          hanzi: '律',
          pinyin: 'lǜ',
          hanViet: 'Luật',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Xích (彳: đi lại, quy phạm) và chữ Duật (聿: cây bút); nghĩa gốc là ống sáo chuẩn âm, mở rộng thành pháp luật thành văn thống nhất.'
        },
        {
          hanzi: '轨',
          pinyin: 'guǐ',
          hanViet: 'Quỹ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Xa (车: xe) và chữ Cửu (九) chỉ âm; chỉ khoảng cách giữa hai bánh xe (vết bánh xe), cốt lõi của chính sách Xa Đồng Quỹ.'
        }
      ],
      primarySources: [
        PQ(
          '《史记·秦始皇本纪》',
          'Sử Ký — Tần Thủy Hoàng Bản Kỷ',
          'Records of the Grand Historian (Shiji), Basic Annals of Qin Shi Huang',
          '一法度衡石丈尺。车同轨。书同文字。',
          'Yī fǎdù héngshí zhàngchǐ. Chē tóngguǐ. Shū tóng wénzì.',
          'Nhất pháp độ hành thạch trượng xích. Xa đồng quỹ. Thư đồng văn tự.',
          'Thống nhất pháp luật, cân đong đo lường (hành, thạch, trượng, xích). Xe cùng một khổ trục. Sách vở dùng chung một hệ thống chữ viết.',
          'He unified the laws, weights, and measures (scales, stones, zhang, and chi); standardized the axle width of carriages; and unified the written script.'
        ),
        PQ(
          '《睡虎地秦墓竹简·田律》',
          'Thụy Hổ Địa Tần Mộ Trúc Giản — Điền Luật',
          'Shuihudi Qin Bamboo Slips, Statutes on Agriculture',
          '春二月，毋敢伐材木山林及雍堤水。',
          'Chūn èryuè, wú gǎn fá cáimù shānlín jí yōng dīshuǐ.',
          'Xuân nhị nguyệt, vô cảm phạt tài mộc sơn lâm cập ung đê thủy.',
          'Vào tháng Hai mùa xuân, không ai được phép chặt phá gỗ rừng trên núi hay đắp chặn dòng chảy đê nước.',
          'In the second month of spring, none shall dare to fell timber in the mountain forests or dam up waterways and dikes.'
        )
      ],
      sinoVietnameseComparison: 'Sau cuộc nam chinh Bách Việt năm 214 TCN, nhà Tần lập ba quận Nam Hải, Quế Lâm và Tượng Quận ở phía Nam Ngũ Lĩnh, đặt nền móng tiếp xúc trực tiếp giữa bộ máy Quận Huyện chế Trung Nguyên với cư dân Lạc Việt và Âu Việt. Về sau, khi Đại Việt giành độc lập tự chủ từ thế kỷ X, các triều đại Lý–Trần–Lê–Nguyễn tiếp tục kế thừa khung hành chính tập quyền theo cấp lộ/trấn/tỉnh – phủ – huyện và luật thành văn (như Quốc triều Hình luật), nhưng vẫn duy trì quyền tự trị tương đối của cấp xã ("phép vua thua lệ làng"), khác với sự xuyên thấu trực tiếp xuống tận hộ gia đình kiểu Lý Gia Tần giản.',
      additionalReferences: [
        'Tư Mã Thiên, Sử Ký — Tần Thủy Hoàng Bản Kỷ và Lý Tư Liệt Truyện.',
        'Đoàn Nghiệp / A. F. P. Hulsewé (1985), Remnants of Ch\'in Law, E. J. Brill.',
        'Hồ Nam Tỉnh Văn Vật Khảo Cổ Nghiên Cứu Sở (2012), Lý Gia Tần Giản (里耶秦简), Văn Vật Xuất Bản Xã.'
      ],
      conclusion: 'Cách mạng thể chế thời Tần chứng tỏ sự thống nhất của một đế quốc rộng lớn bên cạnh vũ lực còn phụ thuộc vào hạ tầng chuẩn hóa hành chính, văn tự và đo lường. Sự kết hợp giữa tài liệu chính sử và hàng vạn thẻ tre khai quật tại Thụy Hổ Địa và Lý Gia cho phép nhìn nhận nhà Tần như kiến trúc sư của bộ máy quản trị quan liêu Đông Á, đồng thời là bài học lịch sử kinh điển về giới hạn của cai trị thuần cưỡng chế.'
    },
    {
      id: 'song-dynasty-urban-science-renaissance',
      number: 68,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Thời đại Lưỡng Tống: Phục hưng Đô thị Biện Kinh–Lâm An, Tiền giấy Giao Tử, Mộng Khê Bút Đàm & Hải thương Tuyền Châu',
      titleZh: '两宋时代：汴京临安城市复兴、交子、《梦溪笔谈》与泉州海商',
      titleZhTrad: '兩宋時代：汴京臨安城市復興、交子、《夢溪筆談》與泉州海商',
      titleEn: 'The Song Dynasty Era: Urban Renaissance in Bianjing and Lin\'an, Jiaozi Paper Currency, Dream Pool Essays, and Quanzhou Maritime Trade',
      readMinutes: 15,
      epistemicTag: 'Lịch sử Kinh tế & Khoa học Kỹ thuật',
      abstract: 'Chuyên luận khảo cứu chuyển biến kinh tế–xã hội và khoa học kỹ thuật thời Bắc Tống (960–1127) và Nam Tống (1127–1279): sự sụp đổ của chế độ Phường–Thị khép kín tại Biện Kinh và Lâm An, sự ra đời của tiền giấy Giao Tử (1024), thành tựu thực nghiệm trong "Mộng Khê Bút Đàm" của Thẩm Quát và mạng lưới thương cảng Tuyền Châu trên Con đường Tơ lụa trên biển.',
      keyTakeaways: [
        'Sự xóa bỏ giới hạn không gian (Phường–Thị) và thời gian (giờ giới nghiêm ban đêm) tại Biện Kinh và Lâm An đã sản sinh nền kinh tế thị dân, chợ đêm và khu giải trí Ngõa Tử sớm bậc nhất thế giới trung đại.',
        'Tiền giấy Giao Tử ra đời tại Thành Đô (Tứ Xuyên) và được triều đình Bắc Tống chính thức phát hành năm 1024 đánh dấu bước chuyển từ tiền tệ kim loại sang tiền tệ tín dụng có dự trữ bảo chứng.',
        'Bốn phát minh kỹ thuật trọng yếu (chữ in rời đất nung của Tất Thăng, la bàn định hướng hàng hải, thuốc súng quân sự) cùng hệ thống Thị Bạc Ty tại Tuyền Châu và Quảng Châu đã đưa kinh tế hàng hải Nam Tống trở thành nguồn thu tài khóa trụ cột.'
      ],
      introduction: 'Trong sử học Đông Á hiện đại, học giả Nhật Bản Naitō Konan từng đề xuất "Luận điểm Đường–Tống biến cách" (Đường–Tống chi tế), cho rằng xã hội cận đại sớm của Trung Quốc thực chất bắt đầu từ thời Tống chứ không phải thế kỷ XIX. Dù thường xuyên chịu áp lực quân sự từ các vương triều phương Bắc (Liêu, Tây Hạ, Kim, Mông Cổ), nhà Tống lại đạt tới độ chín muồi hiếm có về thể chế văn trị, kinh tế thị trường, công nghệ in ấn và giao thương hàng hải. Bức họa cuộn "Thanh Minh Thượng Hà Đồ" của Trương Trạch Đoan (đầu thế kỷ XII) và bút ký "Đông Kinh Mộng Hoa Lục" của Mạnh Nguyên Lão (1147) là những tư liệu trực quan ghi lại nhịp sống đô thị thương mại sôi động chưa từng có trước đó.',
      historicalBackground: 'Sau gần một thế kỷ phân liệt thời Ngũ Đại Thập Quốc, Tống Thái Tổ Triệu Khuông Dẫn lập ra nhà Bắc Tống năm 960 tại Khai Phong (Biện Kinh) và thực hiện chính sách "Trọng văn khinh võ" cùng "Bôi tửu thích binh quyền" để chấm dứt nạn phiên trấn cát cứ. Hệ thống khoa cử được mở rộng mạnh mẽ với quy chế hồ danh (bịt tên) và đằng lục (chép lại bài thi), tạo ra tầng lớp sĩ đại phu xuất thân bình dân. Sau biến cố Tĩnh Khang (1127), nhà Tống dời đô về Lâm An (Hàng Châu), lập ra nhà Nam Tống. Mất đi vùng Hoa Bắc và con đường tơ lụa lục địa, triều đình Nam Tống đẩy mạnh khai phá nông nghiệp vùng Giang Nam (phổ biến giống lúa Chiêm Thành chín sớm từ Đại Việt/Chăm Pa) và phát triển mạnh thương mại đường biển.',
      mainContent: [
        {
          heading: '1. Phá vỡ chế độ Phường–Thị và nền kinh tế thị dân Biện Kinh – Lâm An',
          body: 'Khác với kinh đô Trường An thời Đường được quy hoạch theo ô bàn cờ khép kín với tường bao tách biệt khu dân cư (Phường) và khu buôn bán (Thị) đóng cửa lúc hoàng hôn, Biện Kinh thời Bắc Tống và Lâm An thời Nam Tống (dân số đều vượt mốc một triệu người) đã dỡ bỏ hoàn toàn bức tường ngăn cách đó. Cửa hiệu, tửu lâu, trà quán mở dọc các đại lộ và bờ sông Biện Hà, hoạt động thâu đêm thành "Dạ thị" (chợ đêm) và "Quỷ thị" (chợ rạng sáng). Trong các đô thị này xuất hiện hệ thống "Ngõa Tử" (khu giải trí thương mại) và "Câu Lan" (nhà hát) phục vụ bình dân với các loại hình tạp kịch, thuyết thư (thoại bản), múa rối — đặt nền móng cho văn học Bạch thoại và tiểu thuyết chương hồi các đời sau.'
        },
        {
          heading: '2. Cách mạng tiền tệ tín dụng: Từ Giao Tử Tứ Xuyên đến Hội Tử Nam Tống',
          body: 'Kinh tế thương phẩm bùng nổ thời Tống làm phát sinh tình trạng thiếu hụt tiền đồng ("Tiền hoang"), đặc biệt tại Tứ Xuyên nơi lưu hành tiền sắt nặng nề và bất tiện cho giao dịch đường dài. Đầu thế kỷ XI, 16 phú thương tại Thành Đô liên kết phát hành chứng chỉ ký gửi gọi là "Giao Tử" (giấy đổi tiền). Năm Thiên Thánh nguyên niên (1023–1024), triều đình Bắc Tống thành lập Ích Châu Giao Tử Vụ, chính thức tiếp quản việc phát hành tiền giấy nhà nước đầu tiên trong lịch sử nhân loại với hạn mức phát hành cố định theo kỳ hạn ba năm (mỗi giới 1.256.340 quán) và có quỹ dự trữ tiền kim loại bảo chứng. Sang thời Nam Tống, tiền giấy "Hội Tử" tiếp tục được phổ biến rộng rãi tại vùng Đông Nam, dù về cuối triều đại bị lạm phát nghiêm trọng do in quá mức để chi trả chiến phí chống quân Mông Cổ.'
        },
        {
          heading: '3. Mộng Khê Bút Đàm và đỉnh cao khoa học thực nghiệm',
          body: 'Cuối thế kỷ XI, nhà bác học kiêm quan đại thần Thẩm Quát (1031–1095) biên soạn "Mộng Khê Bút Đàm" tại trấn Nhuận Châu (nay là Trấn Giang, Giang Tô), gồm 609 ghi chép bao quát thiên văn, toán học, địa chất, y dược, âm luật và kỹ nghệ. Tác phẩm này ghi lại sớm nhất quy trình chế tạo và sắp chữ in rời bằng đất sét nung của thợ thủ công Tất Thăng vào niên hiệu Khánh Lịch (1041–1048), mô tả hiện tượng độ lệch từ trường của kim nam châm (la bàn chỉ nam lệch nhẹ về phía Đông), đề xuất giả thuyết hình thành địa tầng trầm tích từ hóa thạch vỏ sò trên núi Thái Hành, và ghi chép việc sử dụng dầu mỏ ("Thạch du") để chế mực in. Đồng thời, Tô Tụng hoàn thành Tháp đồng hồ thiên văn vận hành bằng sức nước (Thủy vận nghi tượng đài) tại Khai Phong năm 1088, thể hiện trình độ cơ khí chính xác bậc cao của thời đại.'
        },
        {
          heading: '4. Hải thương Tuyền Châu và thể chế Thị Bạc Ty',
          body: 'Để quản lý và thu thuế ngoại thương đường biển, nhà Tống thiết lập mạng lưới "Thị Bạc Ty" (cơ quan hải quan – thương vụ) tại Quảng Châu (971), Hàng Châu (989), Minh Châu/Ninh Ba (999) và đặc biệt là Tuyền Châu (1087). Dưới thời Nam Tống, nguồn thuế hải quan chiếm tỷ trọng lớn trong ngân sách quốc gia. Thuyền buồm lớn đóng theo kỹ thuật khoang kín chống chìm (được xác nhận qua xác tàu đắm Nam Hải số 1 tại Dương Giang, Quảng Đông và tàu đắm Hậu Chữ Cảng tại Tuyền Châu năm 1974) sử dụng la bàn hàng hải chở gốm sứ Long Tuyền, Cảnh Đức Trấn, tơ lụa và tiền đồng sang Đông Nam Á, Ấn Độ và thế giới Ả Rập, đổi lấy hương liệu, ngà voi, ngọc trai và dược liệu. Cộng đồng thương nhân ngoại quốc ("Phiên phường") tại Tuyền Châu đã để lại các di tích đa tôn giáo như Thanh Tịnh Tự (nhà thờ Hồi giáo xây năm 1009).'
        }
      ],
      theoreticalFramework: 'Kinh tế học lịch sử (như nghiên cứu của Mark Elvin về "cuộc cách mạng kinh tế trung đại" và Richard von Glahn) lý giải sự trỗi dậy của nhà Tống qua bốn động lực liên hoàn: (1) Cách mạng nông nghiệp Giang Nam với lúa chín sớm và phân hóa chuyên canh; (2) Giảm mạnh chi phí vận tải nhờ mạng lưới kênh rạch và đóng tàu khoang kín; (3) Mở rộng cung tiền qua khai thác đồng quy mô lớn và phát minh tiền giấy tín dụng; (4) Công nghệ in khắc gỗ và in chữ rời làm hạ giá sách, phổ cập tri thức kỹ thuật và mở rộng tầng lớp đọc viết.',
      terminologyAndLiushu: [
        {
          hanzi: '坊',
          pinyin: 'fāng',
          hanViet: 'Phường',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土: tường đất) chỉ nghĩa và chữ Phương (方) chỉ âm; chỉ khu dân cư khép kín có tường bao thời Đường, dần tan rã thành phố mở thời Tống.'
        },
        {
          hanzi: '钞',
          pinyin: 'chāo',
          hanViet: 'Sao',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Kim (钅/金: tiền tệ) và chữ Thiểu (少) chỉ âm; chỉ chứng từ giấy tờ có giá trị lưu thông thay tiền kim loại (tiền giấy).'
        },
        {
          hanzi: '舶',
          pinyin: 'bó',
          hanViet: 'Bạc',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Chu (舟: thuyền) và chữ Bạch (白) chỉ âm; chỉ thuyền buồm viễn dương cỡ lớn, xuất hiện trong tên cơ quan hải quan Thị Bạc Ty (市舶司).'
        },
        {
          hanzi: '瓷',
          pinyin: 'cí',
          hanViet: 'Từ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Ngõa (瓦: đồ gốm nung) và chữ Thứ (次) chỉ âm; chỉ đồ sứ nung nhiệt độ cao — mặt hàng xuất khẩu chủ lực của Ngũ Đại Danh Diêu thời Tống.'
        },
        {
          hanzi: '磁',
          pinyin: 'cí',
          hanViet: 'Từ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thạch (石: đá) và chữ Tư (兹) chỉ âm; chỉ đá nam châm hút sắt, nền tảng của la bàn hàng hải được Thẩm Quát khảo cứu.'
        }
      ],
      primarySources: [
        PQ(
          '《梦溪笔谈·卷十八·技艺》',
          'Mộng Khê Bút Đàm — Quyển 18 (Kỹ Nghệ)',
          'Dream Pool Essays (Mengxi Bitan), Chapter 18: Crafts',
          '庆历中，有布衣毕升，又为活板。其法：用胶泥刻字，薄如钱唇，每字为一印，火烧令坚。',
          'Qìnglì zhōng, yǒu bùyī Bì Shēng, yòu wéi huóbǎn. Qí fǎ: yòng jiāoní kèzì, báo rú qiánchún, měizì wéi yī yìn, huǒshāo lìng jiān.',
          'Khánh Lịch trung, hữu bố y Tất Thăng, hựu vi hoạt bản. Kỳ pháp: dụng giao nê khắc tự, bạc như tiền thần, mỗi tự vi nhất ấn, hỏa thiêu lệnh kiên.',
          'Vào niên hiệu Khánh Lịch (1041–1048), có người áo vải tên Tất Thăng sáng chế ra bản in chữ rời. Phương pháp là dùng đất sét dẻo khắc chữ, mỏng như vành đồng tiền, mỗi chữ làm một con dấu, nung lửa cho rắn chắc.',
          'During the Qingli era (1041–1048), a commoner named Bi Sheng invented movable type. His method was to carve characters into sticky clay, thin as the rim of a coin, making each character an individual stamp, and firing them until hard.'
        ),
        PQ(
          '《东京梦华录·卷三·马行街铺席》',
          'Đông Kinh Mộng Hoa Lục — Quyển 3',
          'Dreams of Splendor of the Eastern Capital, Chapter 3',
          '夜市直至三更尽，才五更又复开张。如要闹去处，通晓不绝。',
          'Yèshì zhízhì sāngēng jìn, cái wǔgēng yòu fù kāizhāng. Rú yàonào qùchù, tōngxiǎo bùjué.',
          'Dạ thị trực chí tam canh tận, tài ngũ canh hựu phục khai trương. Như yếu náo khứ xứ, thông hiểu bất tuyệt.',
          'Chợ đêm mở tới hết canh ba mới vãn, vừa sang canh năm lại mở cửa trở lại. Tại những khu phố náo nhiệt, hoạt động mua bán kéo dài suốt đêm tới sáng không dứt.',
          'The night markets continued until the end of the third watch, and reopened again by the fifth watch. In the liveliest quarters, bustling trade went on without interruption until dawn.'
        )
      ],
      sinoVietnameseComparison: 'Thời Lưỡng Tống (960–1279) tương ứng trực tiếp với giai đoạn Đinh – Tiền Lê – Lý – đầu Trần tại Đại Việt. Trong khi giao thương hàng hải trên Biển Đông kết nối chặt chẽ giữa Tuyền Châu, Quảng Châu với thương cảng Vân Đồn (lập năm 1149 dưới thời Lý Anh Tông) và trao đổi giống lúa Chiêm Thành làm thay đổi nông nghiệp Giang Nam, Đại Việt cũng tiếp nhận mạnh mẽ kỹ nghệ gốm men ngọc (celadon) và chế độ khoa cử Nho học (khoa thi đầu tiên năm 1075 thời Lý Nhân Tông), đồng thời giữ vững thế cân bằng độc lập qua cuộc kháng chiến chống Tống trên phòng tuyến Như Nguyệt (1077).',
      additionalReferences: [
        'Thẩm Quát (thế kỷ XI), Mộng Khê Bút Đàm (梦溪笔谈), Hồ Đạo Tĩnh hiệu chú.',
        'Mạnh Nguyên Lão (1147), Đông Kinh Mộng Hoa Lục (东京梦华录).',
        'Richard von Glahn (2016), The Economic History of China: From Antiquity to the Nineteenth Century, Cambridge University Press.'
      ],
      conclusion: 'Thời đại Lưỡng Tống chứng minh rằng năng lực đổi mới thể chế đô thị, tài chính tín dụng và khoa học thực nghiệm có thể tạo ra bước nhảy vọt về mức sống ngay trong khung cảnh xã hội tiền công nghiệp. Những thành tựu từ Giao Tử, bản in chữ rời đến mạng lưới Thị Bạc Ty đã để lại dấu ấn lâu dài cho thương mại khu vực Đông Á và tuyến hàng hải nối liền Trung Quốc với Đại Việt.'
    },
    {
      id: 'grand-canal-dujiangyan-hydraulic-empire',
      number: 69,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Đại Vận Hà Kinh–Hàng & Thủy lợi Đô Giang Yển (Lý Băng): Địa kinh tế Nam–Bắc của Đế quốc Thủy lợi',
      titleZh: '京杭大运河与都江堰：水利帝国的南北地缘经济',
      titleZhTrad: '京杭大運河與都江堰：水利帝國的南北地緣經濟',
      titleEn: 'The Beijing–Hangzhou Grand Canal and Dujiangyan Irrigation System: North–South Geoeconomics of a Hydraulic Empire',
      readMinutes: 14,
      epistemicTag: 'Lịch sử Công trình & Địa lý Kinh tế',
      abstract: 'Chuyên luận phân tích hai hệ thống công trình thủy lợi – giao thông thủy mang tính định hình lãnh thổ Trung Hoa: hệ thống phân thủy không đập Đô Giang Yển (khoảng 256 TCN) tại Tứ Xuyên và tuyến Đại Vận Hà nối thông năm lưu vực sông lớn từ thời Tùy–Đường đến Minh–Thanh, cùng vai trò của hệ thống Tào vận trong việc duy trì trục địa kinh tế Nam–Bắc.',
      keyTakeaways: [
        'Đô Giang Yển do Lý Băng thiết kế (khoảng 256 TCN) ứng dụng nguyên lý dòng chảy tự nhiên với ba hạng mục Ngư Chủy, Phi Sa Yển và Bảo Bình Khẩu, giúp điều tiết lũ và tưới tiêu bồn địa Thành Đô liên tục hơn 2.200 năm mà không cần đập ngăn dòng.',
        'Đại Vận Hà thời Tùy Dạng Đế (605–610) nối thông Hải Hà, Hoàng Hà, Hoài Hà, Trường Giang và Tiền Đường Giang; đến thời Nguyên (Hốt Tất Liệt) được nắn thẳng qua Sơn Đông thành tuyến Kinh–Hàng dài gần 1.800 km.',
        'Cơ chế Tào vận (vận chuyển thuế lương từ Giang Nam ra kinh đô phương Bắc) là sợi dây sinh mệnh giải quyết độ lệch giữa "trung tâm quân sự – chính trị ở phía Bắc" và "trung tâm kinh tế – lương thực ở phía Nam".'
      ],
      introduction: 'Đặc trưng địa lý tự nhiên của Trung Quốc là các con sông lớn (Hoàng Hà, Hoài Hà, Trường Giang, Châu Giang) đều chảy theo hướng Tây sang Đông, tạo thuận lợi cho giao thông ngang nhưng lại chia cắt giao lưu dọc giữa miền Bắc và miền Nam. Trong lịch sử hơn hai thiên niên kỷ, khả năng tổ chức nhân lực và kỹ thuật trị thủy để khắc phục giới hạn tự nhiên này đã trực tiếp quyết định sức mạnh tài khóa và sự thống nhất của các triều đại. Hai công trình tiêu biểu nhất — Đô Giang Yển (Di sản Thế giới UNESCO năm 2000) và Đại Vận Hà (Di sản Thế giới UNESCO năm 2014) — đại diện cho hai cấp độ trị thủy khác nhau: tối ưu hóa sinh thái nông nghiệp lưu vực và kiến tạo hành lang logistics liên vùng xuyên đế quốc.',
      historicalBackground: 'Vào cuối thời Chiến Quốc, nước Tần chiếm được đất Thục (Tứ Xuyên) năm 316 TCN nhưng thường xuyên chịu cảnh lũ lụt mùa hè và hạn hán mùa đông từ sông Dân Giang. Khoảng năm 256 TCN, Tần Chiêu Tương Vương cử Lý Băng làm Thục quận thủ để trị thủy, biến đồng bằng Thành Đô thành "Thiên Phủ chi quốc" cung cấp hậu cần cho cuộc thống nhất của nhà Tần. Bảy thế kỷ sau, sau gần 400 năm Nam–Bắc phân liệt thời Ngụy–Tấn–Nam Bắc Triều, trọng tâm kinh tế dần dịch chuyển về vùng Giang Nam trong khi trung tâm chính trị – quân sự vẫn nằm ở Quan Trung và Hoa Bắc. Năm 605, Tùy Dạng Đế khởi công nối liền các đoạn kênh cổ (như Hàn Câu thời Ngô Phù Sai năm 486 TCN) thành mạng lưới Đại Vận Hà lấy Lạc Dương làm trung tâm, chạy từ Trác Quận (Bắc Kinh ngày nay) xuống Dư Hàng (Hàng Châu).',
      mainContent: [
        {
          heading: '1. Nguyên lý thủy lực không đập của Đô Giang Yển',
          body: 'Thay vì đắp đập ngăn dòng sông Dân Giang vốn nhiều phù sa và đá cuội dễ gây vỡ đập, Lý Băng cùng con trai thiết kế hệ thống phân thủy tự điều tiết gồm ba bộ phận liên hoàn. Thứ nhất, Ngư Chủy (Mõm Cá) là đê chia nước hình đầu cá đặt ngay khúc cong sông Dân Giang, tận dụng lực ly tâm dòng chảy để chia nước thành Ngoại Giang (thoát lũ) và Nội Giang (tưới tiêu): mùa khô 60% nước vào Nội Giang, mùa lũ 60% nước và 80% sỏi cát bị đẩy ra Ngoại Giang (nguyên tắc "Tứ lục phân thủy, Nhị bát bài sa"). Thứ hai, Phi Sa Yển là đoạn đê tràn thấp giúp xả tự động lượng nước dư và phù sa thừa từ Nội Giang sang Ngoại Giang khi lũ lớn. Thứ ba, Bảo Bình Khẩu là cửa đá đục xuyên qua núi Ngọc Lũy (rộng khoảng 20 m) đóng vai trò van tiết lưu tự nhiên dẫn nước vào mạng lưới kênh tưới đồng bằng Thành Đô. Nguyên tắc bảo dưỡng hằng năm được Lý Băng đúc kết trong sáu chữ "Thâm đào than, đê tác yển" (nạo vét lòng sông cho sâu, đắp đê tràn cho thấp).'
        },
        {
          heading: '2. Từ mạng lưới hình chữ Y thời Tùy–Đường đến trục thẳng Kinh–Hàng thời Nguyên–Minh–Thanh',
          body: 'Đại Vận Hà thời Tùy (gồm bốn đoạn chính: Vĩnh Tế Cừ, Thông Tế Cừ, Hàn Câu và Giang Nam Hà) dài hơn 2.700 km, uốn cong về phía Tây qua Lạc Dương để tiếp tế cho Trường An và Đông Đô. Đến thế kỷ XIII, khi nhà Nguyên định đô tại Đại Đô (Bắc Kinh), tuyến cũ đi vòng qua Lạc Dương trở nên quá dài và bị bồi lấp nặng. Từ năm 1283 đến 1293, nhà thủy lợi Quách Thủ Kính cùng các công trình sư triều Nguyên đào kênh Hội Thông Hà qua vùng đồi Sơn Đông và kênh Thông Huệ Hà nối Thông Châu vào nội đô Bắc Kinh, rút ngắn hành trình hơn 900 km thành trục Bắc–Nam gần như thẳng tắp gọi là Đại Vận Hà Kinh–Hàng. Sang thời Minh Vĩnh Lạc (1411), công bộ thượng thư Tống Lễ xây dựng công trình phân thủy Nam Vượng tại Vấn Thượng (Sơn Đông) dựa trên sáng kiến của dân công Bạch Anh, giải quyết bài toán cấp nước cho điểm cao nhất ("Thủy tích") của toàn tuyến kênh.'
        },
        {
          heading: '3. Tào vận và sự trỗi dậy của chuỗi đô thị ven kênh',
          body: 'Chức năng cốt lõi của Đại Vận Hà là "Tào vận" — hệ thống nhà nước vận chuyển thuế lương (đặc biệt là gạo Giang Nam, có thời kỳ lên tới 4 triệu thạch mỗi năm thời Minh–Thanh), tơ lụa, gỗ xây dựng Tử Cấm Thành và gốm sứ từ phương Nam ra Bắc Kinh. Bên cạnh dòng chảy tài khóa, tuyến kênh trở thành hành lang thương mại tư nhân sầm uất nhất đế quốc, nuôi sống hàng loạt đô thị thương mại giàu có như Hàng Châu, Tô Châu, Dương Châu (trung tâm muối Lưỡng Hoài), Hoài An, Tế Ninh, Lâm Thanh và Thiên Tân. Sự giao lưu dọc kênh còn thúc đẩy hội tụ văn hóa: đoàn kịch Huy Ban theo thuyền buôn từ An Huy lên Bắc Kinh cuối thế kỷ XVIII đã góp phần trực tiếp hình thành nghệ thuật Kinh Kịch.'
        },
        {
          heading: '4. Chuyển dịch lịch sử thế kỷ XIX–XXI: Từ tuyến đường sắt đến dự án Nam Thủy Bắc Điều',
          body: 'Từ giữa thế kỷ XIX, hai biến cố lớn làm suy giảm vai trò Tào vận của Đại Vận Hà: sông Hoàng Hà đổi dòng về phía Bắc năm 1855 làm bồi lấp đoạn kênh qua Sơn Đông, và sự phát triển của vận tải hơi nước đường biển cùng tuyến đường sắt Tân–Phổ (Thiên Tân – Phố Khẩu, khánh thành năm 1912) khiến nhà Thanh chính thức bãi bỏ chế độ Tào vận năm 1901. Tuy nhiên, bước sang thế kỷ XXI, đoạn phía Nam từ Tế Ninh đến Hàng Châu vẫn là tuyến đường thủy nội địa vận chuyển than đá, vật liệu xây dựng quy mô lớn, đồng thời hành lang phía Đông của Đại Vận Hà được tái sử dụng làm tuyến dẫn nước chính cho công trình chuyển nước Nam Thủy Bắc Điều (tuyến Đông thông nước năm 2013).'
        }
      ],
      theoreticalFramework: 'Tranh luận kinh điển về "Xã hội thủy lợi" (Hydraulic Society) của Karl Wittfogel (1957) từng cho rằng yêu cầu huy động nhân lực trị thủy quy mô lớn đã trực tiếp sinh ra chế độ chuyên chế phương Đông. Tuy nhiên, sử học hiện đại (như Joseph Needham và Mark Elvin) điều chỉnh quan điểm này qua thực chứng lịch sử: trong khi các đại dự án liên vùng như Đại Vận Hà thực sự cần năng lực điều phối của nhà nước trung ương, thì nhiều hệ thống tưới tiêu bền vững nhất như Đô Giang Yển hay mạng lưới đê bao vùng Thái Hồ lại vận hành hiệu quả nhờ sự phối hợp giữa kỹ thuật thuận tự nhiên và tổ chức cộng đồng địa phương (tu sửa định kỳ hằng năm).',
      terminologyAndLiushu: [
        {
          hanzi: '堰',
          pinyin: 'yàn',
          hanViet: 'Yển',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土: đất đắp) và chữ Yến (匽) chỉ âm; chỉ đê thấp hoặc đập tràn điều tiết dòng chảy nước (như Đô Giang Yển, Phi Sa Yển).'
        },
        {
          hanzi: '漕',
          pinyin: 'cáo',
          hanViet: 'Tào',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thủy (氵: nước) và chữ Tào (曹) chỉ âm; chỉ hệ thống vận tải đường thủy do nhà nước tổ chức để chuyển thuế lương về kinh đô.'
        },
        {
          hanzi: '闸',
          pinyin: 'zhá',
          hanViet: 'Áp / Tráp',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Môn (门: cửa) và chữ Giáp (甲) chỉ âm; chỉ âu tàu hoặc cửa cống điều tiết mực nước trên kênh đào (phát minh âu tàu hai cửa từ thời Bắc Tống bởi Kiều Duy Nhạc năm 984).'
        },
        {
          hanzi: '渠',
          pinyin: 'qú',
          hanViet: 'Cừ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thủy (氵) và chữ Cự (巨/矩) chỉ âm; chỉ kênh đào nhân tạo dẫn nước tưới tiêu hoặc giao thông thủy (như Linh Cừ, Thông Tế Cừ).'
        },
        {
          hanzi: '坝',
          pinyin: 'bà',
          hanViet: 'Bá / Đập',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土) và chữ Bối/Bá (贝/霸) chỉ âm; chỉ công trình chắn ngang dòng nước hoặc dốc kéo thuyền qua chênh lệch mực nước.'
        }
      ],
      primarySources: [
        PQ(
          '《史记·河渠书》',
          'Sử Ký — Hà Cừ Thư',
          'Records of the Grand Historian (Shiji), Treatise on Rivers and Canals',
          '蜀守冰凿离堆，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。',
          'Shǔshǒu Bīng záo Líduī, bì Mòshuǐ zhī hài, chuān èrjiāng Chéngdū zhī zhōng. Cǐ qú jiē kě xíngzhōu, yǒuyú zé yòng gàijìn, bǎixìng xiǎng qí lì.',
          'Thục thủ Băng tạc Ly Đôi, tị Mạt thủy chi hại, xuyên nhị giang Thành Đô chi trung. Thử cừ giai khả hành chu, hữu dư tắc dụng khái tẩm, bách tính hưởng kỳ lợi.',
          'Thái thú quận Thục là Lý Băng đục núi Ly Đôi, trừ mối họa nước lũ, dẫn hai nhánh sông chảy qua giữa đất Thành Đô. Các kênh này đều đi thuyền được, nước thừa thì dùng để tưới tiêu, trăm họ đều hưởng lợi.',
          'Li Bing, Governor of Shu, cut through Mount Lidui to avert the perils of floodwaters and channeled two rivers through the plain of Chengdu. These canals were navigable by boat, and their surplus water served for irrigation, bringing enduring benefit to the people.'
        ),
        PQ(
          '《都江堰治水六字诀》',
          'Lục Tự Quyết Trị Thủy Đô Giang Yển',
          'Six-Character Hydraulic Maxim of Dujiangyan',
          '深淘滩，低作堰。',
          'Shēn táo tān, dī zuò yàn.',
          'Thâm đào than, đê tác yển.',
          'Nạo vét bãi bồi lòng sông cho sâu, đắp đê tràn cho thấp (để mùa khô đủ nước dẫn vào kênh và mùa lũ nước thừa tự tràn thoát ra sông ngoài).',
          'Dredge the riverbed deep; build the spillway weir low.'
        )
      ],
      sinoVietnameseComparison: 'Lịch sử trị thủy Đại Việt có nhiều tương đồng về bài toán sinh tồn nông nghiệp nhưng mang sắc thái địa hình đồng bằng châu thổ đặc thù. Trong khi Trung Nguyên xây dựng trục vận tải xuyên lưu vực Bắc–Nam (Đại Vận Hà), đồng bằng sông Hồng thời Lý–Trần–Lê–Nguyễn tập trung vào hệ thống đê điều phòng lũ ("Đê Đỉnh Nhĩ" thời Trần Thái Tông năm 1248, cơ quan Hà đê sứ) kết hợp với đào kênh chiến lược kết nối Bắc–Trung–Nam về sau (như kênh Nhà Lê từ Thanh Hóa vào Hà Tĩnh hay kênh Vĩnh Tế dài hơn 90 km do Thoại Ngọc Hầu chỉ huy đào năm 1819–1824 ở Nam Bộ). Cả hai truyền thống đều xem trị thủy là thước đo năng lực tổ chức nhà nước.',
      additionalReferences: [
        'Tư Mã Thiên, Sử Ký — Hà Cừ Thư (河渠书).',
        'Joseph Needham (1971), Science and Civilisation in China, Vol. 4, Part 3: Civil Engineering and Nautics, Cambridge University Press.',
        'UNESCO World Heritage Centre, The Grand Canal (2014) & Mount Qingcheng and the Dujiangyan Irrigation System (2000).'
      ],
      conclusion: 'Đô Giang Yển và Đại Vận Hà cho thấy sức mạnh bền bỉ của nền văn minh nông nghiệp Đông Á không nằm ở việc đối đầu cưỡng ép với tự nhiên mà ở năng lực thiết kế hạ tầng kết nối địa lý. Khi giải được bài toán phân phối nước ở cấp lưu vực và vận chuyển lương thực ở cấp đế quốc, các công trình thủy lợi này đã tái định hình bản đồ đô thị và cấu trúc kinh tế Nam–Bắc của Trung Quốc suốt hơn hai thiên niên kỷ.'
    },
    {
      id: 'modern-china-transformation-1840-1949',
      number: 70,
      category: 'history',
      categoryLabel: 'Lịch sử & Thể chế',
      titleVi: 'Biến đổi Cận đại Trung Hoa (1840–1949): Dương Vụ Vận Động, Mậu Tuất Biến Pháp, Ngũ Tứ & Văn học Bạch thoại',
      titleZh: '中国近代转型（1840—1949）：洋务运动、戊戌变法、五四与白话文运动',
      titleZhTrad: '中國近代轉型（1840—1949）：洋務運動、戊戌變法、五四與白話文運動',
      titleEn: 'Modern Transformation of China (1840–1949): Self-Strengthening Movement, Hundred Days\' Reform, May Fourth, and the Vernacular Literature Movement',
      readMinutes: 15,
      epistemicTag: 'Lịch sử Cận đại & Tư tưởng',
      abstract: 'Chuyên luận hệ thống hóa lộ trình chuyển đổi ba tầng nấc của Trung Quốc từ sau Chiến tranh Nha phiến lần thứ nhất (1840) đến năm 1949: từ cải cách kỹ thuật – công nghiệp (Dương Vụ Vận Động), cải cách thể chế chính trị (Mậu Tuất Biến Pháp và Cách mạng Tân Hợi 1911), đến cách mạng tư tưởng và ngôn ngữ (Phong trào Tân Văn Hóa, Ngũ Tứ 1919 và Văn học Bạch thoại).',
      keyTakeaways: [
        'Quá trình hiện đại hóa cận đại Trung Quốc diễn ra theo ba tầng nấc tuần tự: tầng Khí vật/Kỹ thuật (1861–1895), tầng Thể chế chính trị (1898–1912) và tầng Tư tưởng – Ngôn ngữ (1915–1920s).',
        'Thất bại trong Chiến tranh Giáp Ngọ (1894–1895) phơi bày giới hạn của mô hình "Trung học vi thể, Tây học vi dụng", trực tiếp thúc đẩy Mậu Tuất Biến Pháp (1898) và việc bãi bỏ chế độ khoa cử nghìn năm vào năm 1905.',
        'Cách mạng Bạch thoại (Hồ Thích, Trần Độc Tú, Lỗ Tấn) gắn liền với Phong trào Ngũ Tứ (1919) đã phá vỡ độc quyền của văn ngôn cổ điển, tạo ra công cụ ngôn ngữ phổ thông cho giáo dục đại chúng và tư duy hiện đại.'
      ],
      introduction: 'Giai đoạn 1840–1949 là thế kỷ biến động sâu sắc nhất trong lịch sử Trung Quốc, khi mô hình "Thiên hạ" và trật tự triều cống kéo dài hai nghìn năm va chạm trực diện với hệ thống quốc gia – dân tộc và chủ nghĩa đế quốc công nghiệp phương Tây. Dưới áp lực của các hiệp ước bất bình đẳng khởi đầu từ Điều ước Nam Kinh (1842), giới trí thức và quan lại cải cách Trung Quốc đã trải qua một mạch tiến trình tự vấn đau đớn nhưng đầy tính sáng tạo: đi từ việc học đóng tàu, đúc súng, đến cải tổ hiến pháp, lật đổ quân chủ chuyên chế, và cuối cùng là tái tạo tận gốc ngôn ngữ, văn học và hệ giá trị xã hội.',
      historicalBackground: 'Chiến tranh Nha phiến lần thứ nhất (1840–1842) và lần thứ hai (1856–1860), cùng cuộc khởi nghĩa Thái Bình Thiên Quốc (1851–1864) tàn phá vùng Giang Nam, đẩy triều Thanh vào khủng hoảng kép cả nội trị lẫn ngoại giao. Các thương cảng mở cửa theo điều ước (Quảng Châu, Hạ Môn, Phúc Châu, Ninh Ba, Thượng Hải) nhanh chóng trở thành điểm tiếp xúc trực tiếp với báo chí in ấn hiện đại, ngân hàng, luật quốc tế và công nghệ hơi nước. Trong bối cảnh đó, tầng lớp quan lại địa phương như Tăng Quốc Phiên, Lý Hồng Chương, Tả Tông Đường và Trương Chi Động khởi xướng làn sóng cải cách đầu tiên, mở đầu cho gần một thế kỷ tìm kiếm con đường tự cường và hiện đại hóa.',
      mainContent: [
        {
          heading: '1. Dương Vụ Vận Động (1861–1895): Cải cách tầng Khí vật và giới hạn "Trung thể Tây dụng"',
          body: 'Với khẩu hiệu "Tự cường" (thập niên 1860–1870) và "Cầu phú" (thập niên 1870–1890), phái Dương Vụ thành lập Tổng lý Nha môn (1861), trường ngoại ngữ Kinh Sư Đồng Văn Quán (1862), cùng hàng loạt cơ sở công nghiệp hiện đại đầu tiên: Cục Chế tạo Giang Nam tại Thượng Hải (1865), Xưởng Đóng tàu Phúc Châu (1866), Công ty Luân thuyền Chiêu Thương Cục (1872), Mỏ than Khai Bình và Hán Dương Thiết Xưởng. Triều đình cũng cử 120 thiếu niên sang Hoa Kỳ du học (1872–1881, trong đó có kỹ sư đường sắt Chiêm Thiên Hựu). Tuy nhiên, tư tưởng chủ đạo "Trung học vi thể, Tây học vi dụng" (lấy đạo lý và thể chế Nho gia làm gốc, chỉ vay mượn kỹ thuật phương Tây làm công cụ) giữ nguyên bộ máy quan liêu tham nhũng và phân tán quyền lực. Khi Hạm đội Bắc Dương bị Hải quân Đế quốc Nhật Bản đánh bại trong Chiến tranh Giáp Ngọ (1894–1895) và Hòa ước Mã Quan được ký kết, giới sĩ phu nhận ra chỉ cải cách kỹ thuật là không đủ.'
        },
        {
          heading: '2. Từ Mậu Tuất Biến Pháp (1898) đến Cách mạng Tân Hợi (1911)',
          body: 'Tháng 6 năm 1898, Quang Tự Đế tiếp nhận kiến nghị của Khang Hữu Vi và Lương Khải Siêu, ban hành loạt chiếu thư cải cách trong 103 ngày (Bách Nhật Duy Tân): cải tổ chế độ bát cổ, lập Kinh Sư Đại Học Đường (tiền thân Đại học Bắc Kinh), khuyến khích báo chí và bảo hộ công thương. Dù bị Từ Hi Thái Hậu đảo chính dập tắt tháng 9/1898 (Lục Quân Tử bị xử tử), áp lực sau sự kiện Nghĩa Hòa Đoàn và Điều ước Tân Sửu (1901) buộc triều Thanh phải thực hiện "Tân Chính", đáng chú ý nhất là quyết định bãi bỏ hoàn toàn chế độ khoa cử tồn tại hơn 1.300 năm vào tháng 9/1905. Sự chậm trễ trong cải cách lập hiến đã mở đường cho phong trào cách mạng cộng hòa của Tôn Trung Sơn (Đồng Minh Hội, 1905). Khởi nghĩa Vũ Xương bùng nổ ngày 10/10/1911 (Cách mạng Tân Hợi), dẫn tới sự ra đời của Trung Hoa Dân Quốc (1/1/1912) và việc Hoàng đế Phổ Nghi thoái vị (12/2/1912), chấm dứt hơn hai nghìn năm chế độ quân chủ chuyên chế.'
        },
        {
          heading: '3. Phong trào Tân Văn Hóa (1915) và bước ngoặt Ngũ Tứ (1919)',
          body: 'Nền cộng hòa non trẻ nhanh chóng rơi vào cục diện quân phiệt cát cứ sau khi Viên Thế Khải mưu toan phục bích đế chế thất bại (1916). Nhiều trí thức nhận định rằng nếu không cải tạo tư tưởng và văn hóa nền tảng, thể chế cộng hòa chỉ còn là vỏ rỗng. Năm 1915, Trần Độc Tú sáng lập tạp chí "Thanh Niên" (sau đổi thành "Tân Thanh Niên") tại Thượng Hải, cùng Thái Nguyên Bồi (Hiệu trưởng Đại học Bắc Kinh từ 1917 chủ trương "tư tưởng tự do, tương dung tính bao"), Lý Đại Chiêu, Hồ Thích và Lỗ Tấn giương cao ngọn cờ "Dân chủ" (Đức tiên sinh) và "Khoa học" (Tái tiên sinh). Ngày 4/5/1919, hơn 3.000 sinh viên Bắc Kinh biểu tình phản đối quyết định của Hội nghị Hòa bình Paris chuyển nhượng đặc quyền của Đức tại Sơn Đông cho Nhật Bản. Phong trào Ngũ Tứ nhanh chóng lan sang giới thương nhân và công nhân toàn quốc, buộc đoàn đại biểu Trung Quốc từ chối ký Hòa ước Versailles và trở thành cột mốc chuyển tiếp từ lịch sử cận đại sang lịch sử hiện đại Trung Quốc.'
        },
        {
          heading: '4. Cách mạng Văn học Bạch thoại và sự định hình tiếng Trung hiện đại',
          body: 'Một di sản bền vững và sâu rộng nhất của giai đoạn này là cuộc cách mạng ngôn ngữ. Tháng 1/1917, Hồ Thích công bố bài "Văn học cải lương sô nghị" trên "Tân Thanh Niên" với tám nguyên tắc ("Bát bất chủ nghĩa": nói có nội dung, không mô phỏng cổ nhân, chú trọng ngữ pháp, không rên rỉ vô cớ, bỏ sáo ngữ, không dùng điển cố, không câu nệ đối ngẫu, không né tránh từ ngữ thông tục), tiếp theo là bài "Văn học cách mạng luận" của Trần Độc Tú. Tháng 5/1918, Lỗ Tấn công bố truyện ngắn "Cuồng nhân nhật ký" (Nhật ký người điên) — tác phẩm văn học hiện đại đầu tiên viết bằng Bạch thoại sắc bén phê phán "lễ giáo ăn thịt người". Đến năm 1920, Bộ Giáo dục Chính phủ Bắc Dương chính thức ban hành lệnh đưa Quốc ngữ Bạch thoại vào sách giáo khoa tiểu học, đánh dấu sự thay thế mang tính lịch sử của tiếng nói đại chúng đối với văn ngôn cổ điển trong giáo dục, báo chí và tư duy học thuật.'
        }
      ],
      theoreticalFramework: 'Sử gia cận đại Trung Quốc thường phân tích giai đoạn 1840–1949 bằng khung "Ba tầng chuyển đổi hiện đại hóa" (Khí vật → Thể chế → Văn hóa/Tư tưởng) do Lương Khải Siêu phác thảo sớm từ năm 1922 trong bài "Ngũ thập niên Trung Quốc tiến hóa khái luận". Khung phân tích này cho thấy quá trình chuyển từ một "đế quốc văn hóa" (cultural empire) sang một "quốc gia – dân tộc hiện đại" (modern nation-state) đòi hỏi đồng thời công nghiệp hóa vật chất, cải tổ chủ quyền chính trị và phổ cập ngôn ngữ – tri thức đại chúng.',
      terminologyAndLiushu: [
        {
          hanzi: '洋',
          pinyin: 'yáng',
          hanViet: 'Dương',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thủy (氵) và chữ Dương (羊) chỉ âm; nghĩa gốc là vùng nước rộng, thế kỷ XIX dùng chỉ phương Tây vượt biển tới ("Dương vụ", "Dương học").'
        },
        {
          hanzi: '宪',
          pinyin: 'xiàn',
          hanViet: 'Hiến',
          liushu: 'Hội ý',
          gloss: 'Dạng phồn thể 憲 gồm bộ Miên (宀), Mục (目) và Tâm (心), vốn chỉ phép tắc gương mẫu; cận đại dịch khái niệm "Constitution" (Hiến pháp).'
        },
        {
          hanzi: '白',
          pinyin: 'bái',
          hanViet: 'Bạch',
          liushu: 'Tượng hình / Chỉ sự',
          gloss: 'Nghĩa gốc là sắc trắng, rõ ràng; trong "Bạch thoại" (白话) mang nghĩa lời nói minh bạch, thông tục đối lập với Văn ngôn cổ điển.'
        },
        {
          hanzi: '革',
          pinyin: 'gé',
          hanViet: 'Cách',
          liushu: 'Tượng hình',
          gloss: 'Vẽ tấm da thú đã cạo lông, mở rộng thành "cải biến, thay đổi tận gốc"; trong "Cách mạng" (革命, vốn từ Chu Dịch "Thang Vũ cách mạng") mang nghĩa hiện đại là revolution.'
        },
        {
          hanzi: '科',
          pinyin: 'kē',
          hanViet: 'Khoa',
          liushu: 'Hội ý',
          gloss: 'Gồm bộ Hòa (禾: lúa) và Đấu (斗: dụng cụ đong), chỉ phân loại hạng mục; chuyển từ "Khoa cử" (thi tuyển quan lại) sang "Khoa học" (科学, science).'
        }
      ],
      primarySources: [
        PQ(
          '《新青年》第6卷第1号（陈独秀，1919）',
          'Tân Thanh Niên, Quyển 6, Số 1 — Trần Độc Tú (1919)',
          'New Youth (Xin Qingnian), Vol. 6, No. 1 — Chen Duxiu (1919)',
          '我们现在认定只有这两位先生，可以救治中国政治上道德上学术上思想上一切的黑暗。',
          'Wǒmen xiànzài rèndìng zhǐyǒu zhè liǎngwèi xiānshēng, kěyǐ jiùzhì Zhōngguó zhèngzhì shàng dàodé shàng xuéshù shàng sīxiǎng shàng yīqiè de hēiàn.',
          'Ngã môn hiện tại nhận định chỉ hữu giá lưỡng vị tiên sinh, khả dĩ cứu trị Trung Quốc chính trị thượng đạo đức thượng học thuật thượng tư tưởng thượng nhất thiết đích hắc ám.',
          'Chúng ta hiện nay xác định chỉ có hai vị tiên sinh này (Dân chủ và Khoa học) mới có thể cứu chữa mọi bóng tối về chính trị, đạo đức, học thuật và tư tưởng của Trung Quốc.',
          'We now recognize that only these two gentlemen (Mr. Democracy and Mr. Science) can cure all the darkness in China\'s politics, morality, scholarship, and thought.'
        ),
        PQ(
          '《文学改良刍议》（胡适，1917）',
          'Văn Học Cải Lương Sô Nghị — Hồ Thích (1917)',
          'A Modest Proposal for the Reform of Literature — Hu Shi (1917)',
          '一曰，须言之有物。二曰，不摹仿古人。三曰，须讲求文法。',
          'Yī yuē, xū yánzhī yǒuwù. Èr yuē, bù mófǎng gǔrén. Sān yuē, xū jiǎngqiú wénfǎ.',
          'Nhất viết, tu ngôn chi hữu vật. Nhị viết, bất mô phỏng cổ nhân. Tam viết, tu giảng cầu văn pháp.',
          'Một là, lời nói phải có nội dung thực chất. Hai là, không mô phỏng cổ nhân. Ba là, phải chú trọng ngữ pháp.',
          'First, write with substance. Second, do not imitate the ancients. Third, pay close attention to grammar.'
        )
      ],
      sinoVietnameseComparison: 'Tiến trình biến đổi cận đại Trung Quốc có sự cộng hưởng trực tiếp và mạnh mẽ với phong trào duy tân tại Việt Nam đầu thế kỷ XX. Các "Tân thư" của Khang Hữu Vi và Lương Khải Siêu (như "Ẩm Băng Thất hợp tập") đã truyền cảm hứng trực tiếp cho Phan Bội Châu (phong trào Đông Du), Phan Châu Trinh và Đông Kinh Nghĩa Thục (1907). Nếu Trung Quốc tiến hành Cách mạng Bạch thoại để thay thế văn ngôn bằng tiếng nói phổ thông nhưng vẫn giữ hệ thống chữ Hán, thì Việt Nam trong cùng giai đoạn đã phổ cập chữ Quốc ngữ ký âm Latinh qua báo chí (Đông Dương Tạp Chí, Nam Phong Tạp Chí) và phong trào Thơ Mới – Tự Lực Văn Đoàn thập niên 1930, tạo nên bước chuyển ngôn ngữ – văn học hiện đại song hành đầy thú vị.',
      additionalReferences: [
        'Trần Húc Lộc (1992), Cận đại Trung Quốc xã hội đích tân trần đại tạ (近代中国社会的新陈代谢), Thượng Hải Nhân Dân Xuất Bản Xã.',
        'Chow Tse-tsung (1960), The May Fourth Movement: Intellectual Revolution in Modern China, Harvard University Press.',
        'Jonathan D. Spence (1990), The Search for Modern China, W. W. Norton & Company.'
      ],
      conclusion: 'Thế kỷ 1840–1949 khép lại trật tự đế quốc cổ điển và đặt nền móng cho toàn bộ cấu trúc nhà nước, giáo dục và ngôn ngữ của Trung Quốc đương đại. Từ các xưởng đóng tàu thời Dương Vụ đến lớp học Bạch thoại sau Ngũ Tứ, hành trình chuyển đổi ba tầng nấc này là chìa khóa để lý giải tâm thức lịch sử và động lực hiện đại hóa của Trung Quốc thế kỷ XX–XXI.'
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
    "xiqu-stagecraft-face-masks-tuong": "assets/images/articles/hero-spring-festival.jpg",
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
  for (i = 0; i < window.CCE_ARTICLES.length; i++) {
    if (window.CCE_ARTICLES[i] && window.CCE_ARTICLES[i].id) {
      existingIds[window.CCE_ARTICLES[i].id] = true;
    }
  }
  for (i = 0; i < ARTICLES_V3_PART1A.length; i++) {
    if (!existingIds[ARTICLES_V3_PART1A[i].id]) {
      window.CCE_ARTICLES.push(ARTICLES_V3_PART1A[i]);
      existingIds[ARTICLES_V3_PART1A[i].id] = true;
    }
  }
})();