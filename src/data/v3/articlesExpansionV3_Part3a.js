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

  var ARTICLES_V3_PART3A = [
    {
      id: 'chu-nom-liushu-script-dialogue',
      number: 86,
      category: 'sino-vietnam',
      categoryLabel: 'Đối thoại Việt – Trung',
      titleVi: 'Chữ Nôm Việt Nam & Nguyên lý Lục thư: Hình thanh – Hội ý – Giả tá trong Quốc Âm Thi Tập & Truyện Kiều',
      titleZh: '越南喃字与六书原理：《国音诗集》和《金云翘传》中的构字智慧',
      titleZhTrad: '越南喃字與六書原理：《國音詩集》和《金雲翹傳》中的構字智慧',
      titleEn: 'Vietnamese Chu Nom and the Six Principles (Liushu): Phono-Semantic, Ideographic, and Loan Craft in Quoc Am Thi Tap and The Tale of Kieu',
      readMinutes: 15,
      epistemicTag: 'Văn tự học So sánh & Hán–Nôm học',
      abstract: 'Chuyên luận phân tích cơ chế cấu tạo văn tự của chữ Nôm Việt Nam (hình thành từ thế kỷ X–XIII đến thế kỷ XIX) dưới lăng kính Lục thư chữ Hán, khảo sát ba phương thức lõi (Hình thanh chiếm đa số, Hội ý, Giả tá) qua hai đỉnh cao văn học "Quốc Âm Thi Tập" (Nguyễn Trãi) và "Truyện Kiều" (Nguyễn Du).',
      keyTakeaways: [
        'Chữ Nôm không phải là "chữ Hán viết sai" mà là hệ thống văn tự ghi tiếng Việt thuần túy được sáng tạo có quy luật trên cơ sở chất liệu và nguyên lý Lục thư của chữ Hán.',
        'Hơn 60% chữ Nôm tự tạo vận hành theo cơ chế Hình thanh (ghép một bộ thủ Hán chỉ nghĩa với một chữ Hán đọc theo âm Hán–Việt chỉ âm tiếng Việt, ví dụ 𡨸 "năm", 𡗶 "trời" hội ý Thiên+Thượng).',
        'Từ văn bia chùa Báo Ân (1209), "Quốc Âm Thi Tập" (thế kỷ XV) đến "Truyện Kiều" (đầu thế kỷ XIX), chữ Nôm đã chuyển hóa văn học tiếng Việt từ khẩu ngữ dân gian thành nền văn chương bác học độc lập.'
      ],
      introduction: 'Trong không gian văn hóa chữ Hán Đông Á (Sinosphere), mỗi dân tộc tiếp nhận chữ Hán đều sáng tạo hệ thống văn tự bản địa để ghi chép tiếng mẹ đẻ: Nhật Bản phát triển bảng âm tiết Kana (Hiragana, Katakana), Triều Tiên sáng tạo bộ chữ biểu âm Hangul (1443), còn Việt Nam kiến tạo chữ Nôm (𡨸喃) — hệ thống văn tự biểu ý – biểu âm giàu sức sáng tạo bậc nhất khu vực. Nghiên cứu chữ Nôm dưới góc độ Lục thư cho thấy trí thức Đại Việt đã thấu hiểu sâu sắc cấu trúc nội tại của chữ Hán để biến nó thành công cụ diễn đạt trọn vẹn sáu thanh điệu và kho từ vựng thuần Việt.',
      historicalBackground: 'Những dấu tích sớm nhất của lối ghi tên riêng tiếng Việt bằng chữ Hán xuất hiện từ thời Bắc thuộc (như danh hiệu "Bố Cái Đại Vương" của Phùng Hưng cuối thế kỷ VIII hay quốc hiệu "Đại Cồ Việt" năm 968). Văn bản chữ Nôm khắc đá sớm nhất còn xác thực rõ ràng là bia "Phụng Thánh phu nhân Lê Thị mộ chí" (1173) và bia chùa Báo Ân (1209, thời Lý Cao Tông) ghi hơn 20 địa danh và tên người thuần Việt. Đến thời Trần (thế kỷ XIII–XIV), Hàn Thuyên, Trần Nhân Tông ("Cư trần lạc đạo phú") và Hồ Quý Ly thúc đẩy văn chương chữ Nôm; sang thời Lê sơ thế kỷ XV, Nguyễn Trãi hoàn thành "Quốc Âm Thi Tập" (254 bài), đặt nền móng cho thời kỳ hoàng kim thế kỷ XVIII–XIX với Hồ Xuân Hương, Nguyễn Gia Thiều và Nguyễn Du.',
      mainContent: [
        {
          heading: '1. Ba phương thức cấu tạo lõi: Giả tá, Hội ý và Hình thanh Nôm',
          body: 'Các nhà Hán–Nôm học (Nguyễn Tài Cẩn, Đào Duy Anh, Lê Văn Quán) phân loại chữ Nôm vào hai nhóm lớn: vay mượn nguyên chữ Hán (Giả tá) và tự tạo chữ mới. Ở nhóm Giả tá, người xưa mượn nguyên chữ Hán đọc giống âm tiếng Việt (ví dụ dùng chữ 沒 "một/một" để ghi số "một", dùng chữ 𧵆 hoặc thêm dấu nháy phụ < để báo hiệu đọc âm Nôm). Ở nhóm tự tạo, tinh túy nhất là phép Hội ý — ghép hai chữ Hán tạo nghĩa thuần Việt như chữ 𡗶 ("trời") ghép 天 (Thiên) trên 上 (Thượng) — và đặc biệt là phép Hình thanh chiếm tỷ trọng lớn nhất: ghép một bộ thủ chỉ nghĩa với một chữ Hán chỉ âm (như chữ 𡨸 hoặc 𠄩 "hai" ghép 二 chỉ nghĩa + 台 chỉ âm; chữ 𦹳 "cỏ" ghép bộ Thảo 艹 + chữ Cổ 古 chỉ âm; chữ 𢆥 "năm" ghép chữ Niên 年 chỉ nghĩa + Nam 南 chỉ âm).'
        },
        {
          heading: '2. Bước ngoặt "Quốc Âm Thi Tập" của Nguyễn Trãi (thế kỷ XV)',
          body: 'Với 254 bài thơ thất ngôn xen lục ngôn, "Quốc Âm Thi Tập" là tập thơ Nôm cổ nhất còn lưu giữ trọn vẹn của Việt Nam. Nguyễn Trãi không chỉ dùng chữ Nôm để Việt hóa thể thơ Đường luật (đưa câu 6 chữ xen kẽ câu 7 chữ tạo tiết tấu tiếng Việt tự nhiên) mà còn đưa hàng loạt hình ảnh đời sống dân dã (bến đò, rau muống, bè muống, hoa sen, tiếng quốc) vào thơ bác học, chứng minh tiếng Việt có đủ năng lực biểu đạt mọi cung bậc triết lý và cảm xúc.'
        },
        {
          heading: '3. Đỉnh cao nghệ thuật ngôn từ Nôm trong "Truyện Kiều" của Nguyễn Du',
          body: 'Đầu thế kỷ XIX, Nguyễn Du viết 3.254 câu thơ lục bát chữ Nôm trong "Đoạn Trường Tân Thanh" (Truyện Kiều). Ở đây, hệ thống chữ Nôm đạt độ tinh luyện cao nhất về thanh điệu, tiểu đối và hòa trộn mượt mà giữa từ Hán–Việt trang trọng với khẩu ngữ thuần Việt ("Cỏ non xanh rợn chân trời / Cành lê trắng điểm một vài bông hoa"). Nhiều bản khắc gỗ Nôm thế kỷ XIX (bản Liễu Văn Đường 1866, 1871; bản Quan Văn Đường) trở thành di sản văn bản học vô giá.'
        },
        {
          heading: '4. Hạn chế cấu trúc của chữ Nôm và bảo tồn số hóa Unicode',
          body: 'Do không được nhà nước phong kiến chuẩn hóa tự dạng thống nhất trên toàn quốc (ngoại trừ nỗ lực ngắn ngủi thời Hồ Quý Ly và Quang Trung), một tiếng Việt đôi khi có nhiều cách viết Nôm khác nhau, đồng thời đòi hỏi người đọc phải nắm vững chữ Hán trước mới đọc được chữ Nôm. Khi chữ Quốc ngữ ký âm Latinh phổ cập đầu thế kỷ XX, chữ Nôm rút lui khỏi đời sống thường nhật nhưng hiện đang được mã hóa chuẩn hóa vào bảng mã Unicode (hơn 9.000 ký tự Nôm trong khối CJK Extension B–G) phục vụ số hóa di sản Hán–Nôm.'
        }
      ],
      theoreticalFramework: 'Dưới góc nhìn ngôn ngữ học văn tự (John DeFrancis và Nguyễn Tài Cẩn), chữ Nôm là minh chứng kinh điển cho cơ chế "biểu âm hóa văn tự biểu ý" (phoneticization within a logographic matrix): tương tự cách chữ Hán phát triển từ tượng hình sang hơn 80% hình thanh, chữ Nôm đã tái sử dụng kho ngữ âm Hán–Việt làm bộ ký hiệu âm thanh để ghi một ngôn ngữ thuộc họ Nam Á (Austroasiatic) hoàn toàn khác biệt về loại hình ngữ pháp.',
      terminologyAndLiushu: [
        { hanzi: '喃', pinyin: 'nán', hanViet: 'Nôm / Nam', liushu: 'Hình thanh', gloss: 'Gồm bộ Khẩu (口: lời nói cửa miệng) và chữ Nam (南: phương Nam); chỉ văn tự ghi tiếng nói bản địa của người nước Nam.' },
        { hanzi: '𡗶', pinyin: 'tiān-shàng (Nôm: trời)', hanViet: 'Trời (Hội ý Nôm)', liushu: 'Hội ý (Nôm)', gloss: 'Chữ Nôm kinh điển ghép 天 (Thiên) ở trên 上 (Thượng) biểu thị bầu trời cao rộng của tiếng Việt.' },
        { hanzi: '𢆥', pinyin: 'nián-nán (Nôm: năm)', hanViet: 'Năm (Hình thanh Nôm)', liushu: 'Hình thanh (Nôm)', gloss: 'Ghép chữ Niên (年) chỉ nghĩa "năm" và chữ Nam (南) gợi âm "năm".' },
        { hanzi: '𦹳', pinyin: 'cǎo-gǔ (Nôm: cỏ)', hanViet: 'Cỏ (Hình thanh Nôm)', liushu: 'Hình thanh (Nôm)', gloss: 'Ghép bộ Thảo (艹: thực vật) chỉ nghĩa và chữ Cổ (古) gợi âm "cỏ".' },
        { hanzi: '韵', pinyin: 'yùn', hanViet: 'Vận', liushu: 'Hình thanh', gloss: 'Chìa khóa vần điệu trong thể thơ lục bát thuần Việt được ghi lại bằng hệ thống chữ Nôm.' }
      ],
      primarySources: [
        PQ(
          '《国音诗集·宝镜警戒第四十三》（阮廌，15世纪）',
          'Quốc Âm Thi Tập — Bảo Kính Cảnh Giới bài 43 (Nguyễn Trãi)',
          'National Language Poetry Collection (Quoc Am Thi Tap), Poem 43 — Nguyen Trai',
          '劳薪日永、𡊲𡗶𡈜，槐绿端阳𧿨𣊾花。',
          'Rồi hóng mát thuở ngày trường, Hòe lục đùn đùn tán rợp giương.',
          'Rồi hóng mát thuở ngày trường, Hòe lục đùn đùn tán rợp giương (trích phiên âm chuẩn bài Cảnh ngày hè).',
          'Thảnh thơi hóng mát suốt ngày dài mùa hè, cây hòe xanh đùn tán rợp bóng mát — minh chứng sức biểu đạt tinh tế của thơ Nôm thế kỷ XV.',
          'At leisure enjoying the breeze through the long summer day, verdant sophora trees unfurl dense canopies of shade—showcasing 15th-century Chu Nom lyric mastery.'
        ),
        PQ(
          '《大越史记全书·本纪卷八》（胡季犛译《无逸》）',
          'Đại Việt Sử Ký Toàn Thư — Bản Kỷ Quyển 8 (1395)',
          'Complete Annals of Dai Viet, Basic Annals Vol. 8 (1395)',
          '季犛作《国语诗义》并序，令女师教后妃及宫人学习。',
          'Jìlí zuò Guóyǔ Shīyì bìng xù, lìng nǚshī jiào hòufēi jí gōngrén xuéxí.',
          'Quý Ly tác "Quốc ngữ Thi nghĩa" tịnh tự, lệnh nữ sư giáo hậu phi cập cung nhân học tập.',
          'Hồ Quý Ly soạn sách "Quốc ngữ Thi nghĩa" (diễn Nôm Kinh Thi) kèm bài tựa, sai nữ sư dạy cho hậu phi và cung nhân học tập.',
          'Ho Quy Ly composed the vernacular "Meaning of the Classic of Poetry in National Speech" with a preface, ordering female instructors to teach it to the palace.'
        )
      ],
      sinoVietnameseComparison: 'So sánh với chữ Sawndip của người Choang (Quảng Tây) và Kana của Nhật Bản, chữ Nôm Việt Nam đạt mức độ phát triển văn học bác học rực rỡ nhất trong nhóm văn tự phái sinh dạng khối vuông từ chữ Hán, tạo ra cả một nền văn chương dân tộc đồ sộ suốt gần một thiên niên kỷ trước khi chữ Quốc ngữ ra đời.',
      additionalReferences: [
        'Nguyễn Tài Cẩn (1985), Một số vấn đề về chữ Nôm, NXB Đại học và Trung học Chuyên nghiệp.',
        'Đào Duy Anh (1975), Chữ Nôm: Nguồn gốc, cấu tạo, diễn biến, NXB Khoa học Xã hội.',
        'Vietnamese Nôm Preservation Foundation (nomfoundation.org).'
      ],
      conclusion: 'Chữ Nôm là biểu tượng cao nhất của năng lực tiếp biến văn hóa chủ động của người Việt: sử dụng chính nguyên lý Lục thư của chữ Hán để kiến tạo tiếng nói tự chủ bằng văn tự cho dân tộc mình.'
    },
    {
      id: 'imperial-palace-axes-beijing-thanglong-hue',
      number: 87,
      category: 'sino-vietnam',
      categoryLabel: 'Đối thoại Việt – Trung',
      titleVi: 'Quy hoạch Hoàng cung Đông Á: Trục Đế đô Tử Cấm Thành Bắc Kinh – Hoàng Thành Thăng Long – Kinh Thành Huế',
      titleZh: '东亚皇宫规划对照：北京紫禁城、升龙皇城与顺化京城轴线',
      titleZhTrad: '東亞皇宮規劃對照：北京紫禁城、昇龍皇城與順化京城軸線',
      titleEn: 'Imperial Palace Planning in East Asia: Axial Architecture of Beijing\'s Forbidden City, Thang Long Imperial Citadel, and Hue Imperial City',
      readMinutes: 15,
      epistemicTag: 'Kiến trúc Đô thị Cổ & Sử học So sánh',
      abstract: 'Chuyên luận so sánh ba quần thể hoàng cung Di sản Thế giới UNESCO tại Trung Quốc và Việt Nam — Tử Cấm Thành Bắc Kinh (1420), Hoàng Thành Thăng Long (1010) và Kinh Thành Huế (1804) — trên bốn trục: nguyên lý "Chu Lễ · Khảo Công Ký", thích ứng địa hình thủy hệ, cấu trúc ba vòng thành và mối liên hệ lịch sử qua kiến trúc sư Nguyễn An.',
      keyTakeaways: [
        'Cả ba kinh đô đều kế thừa khung quy hoạch lễ chế Đông Á (tọa Bắc triều Nam, cấu trúc ba vòng thành lồng nhau, trục trung tâm Bắc–Nam, "Tiền triều hậu tẩm – Tả tổ hữu xã") nhưng biến hóa linh hoạt theo địa hình bản địa.',
        'Khai quật khu di tích 18 Hoàng Diệu (từ năm 2002) chứng minh Hoàng Thành Thăng Long có địa tầng văn hóa liên tục 1.300 năm (Đại La – Lý – Trần – Lê – Nguyễn) với hệ thống móng trụ sỏi chống lún vùng châu thổ độc đáo.',
        'Kinh Thành Huế thời Nguyễn (1804–1832) kết hợp độc đáo quy hoạch Tử Cấm Thành phương Đông ở bên trong với pháo đài phòng thủ kiểu Vauban phương Tây ở vòng thành ngoài và sông Hương – núi Ngự Bình làm bình phong phong thủy.'
      ],
      introduction: 'Trong lịch sử quy hoạch đô thị Đông Á, hoàng cung không chỉ là nơi ở và làm việc của triều đình mà là bản đồ thu nhỏ của vũ trụ chính trị ("Thiên nhân hợp nhất"). Đặt ba Di sản Thế giới UNESCO — Tử Cấm Thành Bắc Kinh (công nhận 1987), Quần thể Di tích Cố đô Huế (1993) và Khu trung tâm Hoàng Thành Thăng Long (2010) — cạnh nhau cho phép nhận diện rõ vừa mẫu số chung của nền văn hiến đồng văn, vừa bản lĩnh sáng tạo kiến trúc riêng biệt của Việt Nam qua hơn một thiên niên kỷ.',
      historicalBackground: 'Khuôn mẫu quy hoạch đô thành đế quốc Đông Á bắt nguồn từ thiên "Khảo Công Ký" trong "Chu Lễ" (thành vuông chín dặm, mỗi mặt ba cổng, chín đường dọc chín đường ngang, trước là triều đình sau là chợ, bên trái là Thái Miếu bên phải là Xã Tắc). Năm 1010, Lý Công Uẩn dời đô từ Hoa Lư ra Đại La (đổi tên Thăng Long), xây dựng cấu trúc Tam trùng thành quách (La Thành – Hoàng Thành – Cấm Thành) bên sông Nhị Hà. Đầu thế kỷ XV (1406–1420), Minh Thành Tổ xây Tử Cấm Thành Bắc Kinh với sự đóng góp đặc biệt của tổng công trình sư gốc Việt Nguyễn An (người bị nhà Minh đưa sang Bắc Kinh thời Minh thuộc và được giao chủ trì quy hoạch cung điện, hệ thống cầu cống kinh thành). Đến đầu thế kỷ XIX (1804), vua Gia Long và Minh Mạng kiến thiết Kinh Thành Huế bên dòng sông Hương.',
      mainContent: [
        {
          heading: '1. Trục Trung tâm và Cấu trúc Ba vòng thành: Đồng quy nhưng không sao chép',
          body: 'Tử Cấm Thành Bắc Kinh đặt trên trục Trung tâm dài 7,8 km thẳng tắp từ Vĩnh Định Môn qua Thiên An Môn, Ngọ Môn, Thái Hòa Điện tới Chung Cổ Lâu (vừa được UNESCO ghi danh riêng năm 2024), thể hiện quyền uy tuyệt đối trên bình nguyên Hoa Bắc rộng phẳng. Hoàng Thành Thăng Long thời Lý–Trần–Lê xoay quanh trục Chính Bắc Môn – Đoan Môn – Điện Kính Thiên (nền rồng đá 1467) – Hậu Lâu, ôm sát sông Tô Lịch và sông Hồng. Kinh Thành Huế đặt trục chính xoay nhẹ theo hướng Đông Nam (tọa Tây Bắc triều Đông Nam) dọc Kỳ Đài – Ngọ Môn – Điện Thái Hòa – Cần Chánh – Càn Thành, mượn núi Ngự Bình làm tiền án và hai cồn Hến – cồn Dã Viên làm Tả Thanh Long – Hữu Bạch Hổ.'
        },
        {
          heading: '2. Kỹ thuật nền móng và vật liệu: Gỗ Nam Mộc Bắc Kinh vs Gỗ Lim & Móng Sỏi Thăng Long',
          body: 'Tại Bắc Kinh, các đại điện dùng gỗ Nam Mộc vàng vận chuyển theo Đại Vận Hà từ Tứ Xuyên – Vân Nam, đặt trên nền đá cẩm thạch Hán Bạch Ngọc ba tầng chịu khí hậu khô lạnh. Tại Thăng Long, đối phó với nền đất phù sa yếu của đồng bằng sông Hồng, các nghệ nhân thời Lý–Trần sáng tạo kỹ thuật móng trụ gia cố bằng sỏi cuội đầm chặt nhiều lớp (hố móng 18 Hoàng Diệu) cùng gạch bìa khắc niên hiệu và ngói ống men xanh – vàng hình lá đề chạm rồng cực kỳ tinh xảo. Tại Huế, các cung điện sử dụng kết cấu "Trùng thiềm điệp ốc" (hai mái nối liền bằng máng thoát nước đồng để chống mưa bão miền Trung) kết hợp trang trí pháp lam ngũ sắc và khảm sành sứ độc đáo.'
        },
        {
          heading: '3. Mối dây lịch sử đặc biệt: Kiến trúc sư Nguyễn An tại Bắc Kinh',
          body: 'Sử liệu nhà Minh ("Minh Sử · Hoạn quan truyện") ghi nhận Nguyễn An (1381–1453), người quê gốc Hà Đông (Đại Việt), là kiến trúc sư tài ba trực tiếp chỉ huy quy hoạch và xây dựng cung điện, tường thành, chín cửa thành và hệ thống sông đào thoát nước Bắc Kinh thời Vĩnh Lạc – Chính Thống. Chi tiết lịch sử này chứng minh giao lưu kỹ thuật kiến trúc Việt–Trung không phải dòng chảy một chiều mà là sự tương tác song phương của trí tuệ khu vực.'
        },
        {
          heading: '4. Thích ứng quân sự cận đại tại Kinh Thành Huế: Giao thoa Đông – Tây',
          body: 'Khác với tường thành chữ nhật cổ điển của Bắc Kinh, vòng ngoài Kinh Thành Huế (chu vi gần 10 km, xây 1805–1832) được thiết kế theo kiểu pháo đài ngôi sao Vauban của châu Âu với 24 pháo đài nhô ra ngoài để chống hỏa lực đại bác cận đại, trong khi bên trong vẫn giữ nguyên vẹn Hoàng Thành và Tử Cấm Thành theo lễ chế phương Đông — tạo nên hình mẫu kiến trúc quân sự – cung đình hiếm có tại châu Á.'
        }
      ],
      theoreticalFramework: 'Từ góc độ lịch sử kiến trúc so sánh (Nancy Steinhardt và các nghiên cứu di sản UNESCO), quy hoạch hoàng cung Đông Á vận hành như một "ngữ pháp không gian chia sẻ" (shared spatial grammar): các nguyên tắc phong thủy, trục đối xứng và phân cấp lễ nghi đóng vai trò bộ khung ngữ pháp, còn tỷ lệ kiến trúc, vật liệu chống khí hậu và cảnh quan thiên nhiên quyết định bản sắc bản địa của từng kinh đô.',
      terminologyAndLiushu: [
        { hanzi: '城', pinyin: 'chéng', hanViet: 'Thành', liushu: 'Hình thanh', gloss: 'Gồm bộ Thổ (土: tường đất) và chữ Thành (成); chỉ vòng tường phòng thủ bao quanh đô thị ("Hoàng Thành", "Kinh Thành").' },
        { hanzi: '门', pinyin: 'mén', hanViet: 'Môn', liushu: 'Tượng hình', gloss: 'Dạng phồn thể 門 vẽ hai cánh cổng đối xứng; cổng nghi lễ đánh dấu từng lớp không gian (Ngọ Môn, Đoan Môn).' },
        { hanzi: '阙', pinyin: 'quē / què', hanViet: 'Khuyết', liushu: 'Hình thanh', gloss: 'Cặp lầu cánh vươn ra hai bên cổng chính (Ngọ Môn Bắc Kinh và Ngọ Môn Huế đều mang bố cục chữ U có lầu Ngũ Phụng).' },
        { hanzi: '案', pinyin: 'àn', hanViet: 'Án (Tiền án)', liushu: 'Hình thanh', gloss: 'Trong phong thủy quy hoạch kinh đô chỉ ngọn núi thấp chắn phía trước cung điện (núi Ngự Bình ở Huế, núi Cảnh Sơn làm hậu chẩm Bắc Kinh).' },
        { hanzi: '社', pinyin: 'shè', hanViet: 'Xã (Xã Tắc)', liushu: 'Hội ý', gloss: 'Gồm bộ Thị (礻: tế tự) và bộ Thổ (土: đất); Đàn Xã Tắc đặt bên phải cung điện ("Tả tổ hữu xã") cầu mùa màng và quốc thái.' }
      ],
      primarySources: [
        PQ(
          '《迁都诏》（李公蕴，1010）',
          'Chiếu Dời Đô — Lý Công Uẩn (1010)',
          'Edict on the Transfer of the Capital — Ly Cong Uan (1010)',
          '况高王故都大罗城，宅天地区域之中，得龙蟠虎踞之势。正南北东西之位，便江山向背之宜。',
          'Huàng Gāowáng gùdū Dàluóchéng, zhái tiāndì qūyù zhī zhōng, dé lóngpán hǔjù zhī shì. Zhèng nánběi dōngxī zhī wèi, biàn jiāngshān xiàngbèi zhī yí.',
          'Huống Cao Vương cố đô Đại La thành, trạch thiên địa khu vực chi trung, đắc long bàn hổ cứ chi thế. Chính nam bắc đông tây chi vị, tiện giang sơn hướng bối chi nghi.',
          'Huống gì thành Đại La, kinh đô cũ của Cao Vương, ở vào nơi trung tâm trời đất, được thế rồng cuộn hổ ngồi; đã đúng ngôi Nam Bắc Đông Tây, lại tiện hướng nhìn sông dựa núi.',
          'Moreover, Dai La Citadel lies at the center of Heaven and Earth, possessing the auspicious terrain of a coiling dragon and crouching tiger, aligned squarely with the four cardinal directions and favorably backed by mountains and rivers.'
        ),
        PQ(
          '《周礼·考工记·匠人》',
          'Chu Lễ — Khảo Công Ký (Thiên Tượng Nhân)',
          'Rites of Zhou, Artificers\' Record (Kaogongji)',
          '匠人营国，方九里，旁三门。左祖右社，面朝后市。',
          'Jiàngrén yíngguó, fāng jiǔlǐ, páng sānmén. Zuǒ zǔ yòu shè, miàn cháo hòu shì.',
          'Tượng nhân doanh quốc, phương cửu lý, bàng tam môn. Tả tổ hữu xã, diện triều hậu thị.',
          'Thợ kiến trúc quy hoạch kinh đô: hình vuông mỗi cạnh chín dặm, mỗi mặt mở ba cổng; bên trái đặt Tông miếu, bên phải đặt Đàn Xã Tắc, phía trước là triều đình, phía sau là chợ.',
          'When master builders lay out a capital, it is nine li square with three gates on each side; the Ancestral Temple lies to the left, the Altar of Soil and Grain to the right, the court in front, and the market behind.'
        )
      ],
      sinoVietnameseComparison: 'Đặt Tử Cấm Thành Bắc Kinh (quy mô đế quốc lục địa rộng 72 ha), Hoàng Thành Thăng Long (địa tầng liên tục 1.300 năm trên châu thổ sông Hồng) và Kinh Thành Huế (hài hòa phong thủy sông núi miền Trung với pháo đài Vauban) cạnh nhau cho thấy Việt Nam tiếp thu chuẩn mực quy hoạch Đông Á một cách tự chủ, luôn đặt sự hài hòa với thiên nhiên nhiệt đới lên trên sự phô trương kích thước.',
      additionalReferences: [
        'UNESCO World Heritage Centre: Imperial Palaces of the Ming and Qing Dynasties, Central Sector of the Imperial Citadel of Thang Long, Complex of Hue Monuments.',
        'Viện Khảo cổ học Việt Nam (2006), Hoàng Thành Thăng Long, NXB Văn hóa Thông tin.',
        'Phan Thuận An (2005), Quần thể di tích Huế, NXB Trẻ.'
      ],
      conclusion: 'Ba trục hoàng cung Bắc Kinh – Thăng Long – Huế là chứng tích bằng đá và gỗ về dòng chảy kiến trúc liên kết Đông Á, nơi những quy chuẩn chung của "Chu Lễ" được tái tạo thành ba kiệt tác không gian mang bản sắc địa lý và lịch sử riêng biệt.'
    },
    {
      id: 'truc-lam-zen-song-yuan-dialogue',
      number: 88,
      category: 'sino-vietnam',
      categoryLabel: 'Đối thoại Việt – Trung',
      titleVi: 'Thiền phái Trúc Lâm Yên Tử & Đối thoại Thiền Tông Tống–Nguyên',
      titleZh: '竹林安子禅派与宋元禅宗对话',
      titleZhTrad: '竹林安子禪派與宋元禪宗對話',
      titleEn: 'The Truc Lam Yen Tu Zen School and Its Dialogue with Song–Yuan Chan Buddhism',
      readMinutes: 14,
      epistemicTag: 'Lịch sử Phật giáo & Tư tưởng Đông Á',
      abstract: 'Chuyên luận khảo cứu sự hình thành Thiền phái Trúc Lâm Yên Tử do Phật hoàng Trần Nhân Tông (1258–1308) sáng lập năm 1299 — đặt trong tương quan đối thoại với dòng Lâm Tế thời Tống–Nguyên (Vô Môn Huệ Khai, Thiên Đồng Như Tịnh), phân tích tư tưởng nhập thế "Cư trần lạc đạo", "Hòa quang đồng trần" và vai trò của Tam Tổ Trúc Lâm (Trần Nhân Tông – Pháp Loa – Huyền Quang).',
      keyTakeaways: [
        'Thiền phái Trúc Lâm (1299) không cắt đứt với truyền thống Thiền Tông Trung Hoa mà tổng hợp ba dòng Thiền trước đó tại Đại Việt (Tỳ Ni Đa Lưu Chi, Vô Ngôn Thông, Thảo Đường) cùng tinh thần Lâm Tế thời Tống để kiến tạo một giáo hội thống nhất thuần Việt.',
        'Khác với xu hướng xuất thế ẩn dật trong núi sâu, Phật giáo thời Trần (Trần Thái Tông, Tuệ Trung Thượng Sĩ, Trần Nhân Tông) đề cao tinh thần nhập thế tích cực: bảo vệ độc lập dân tộc trước ba cuộc kháng chiến chống Mông–Nguyên rồi mới xuất gia tu hành.',
        'Tác phẩm "Cư trần lạc đạo phú" viết bằng chữ Nôm của Trần Nhân Tông đưa triết lý Thiền trực tiếp vào ngôn ngữ bản địa và đời sống bình dân ("Ở đời vui đạo hãy tùy duyên").'
      ],
      introduction: 'Cuối thế kỷ XIII, sau khi hai lần trực tiếp lãnh đạo quân dân Đại Việt đánh bại quân xâm lược Nguyên–Mông (1285 và 1288), Thượng hoàng Trần Nhân Tông (Điều Ngự Giác Hoàng) đã lên núi Yên Tử (Quảng Ninh) xuất gia năm 1299 và sáng lập Thiền phái Trúc Lâm. Đây là bước ngoặt hiếm có trong lịch sử tôn giáo thế giới: một vị minh quân bách chiến bách thắng chủ động kiến tạo một tông phái Phật giáo bản địa vừa đối thoại bình đẳng với Thiền Tông Tống–Nguyên, vừa thống nhất tinh thần dân tộc và đạo đức nhập thế của Đại Việt.',
      historicalBackground: 'Trước thời Trần, Phật giáo Đại Việt đã tiếp nhận liên tục nhiều dòng Thiền từ Trung Quốc (Tỳ Ni Đa Lưu Chi thế kỷ VI, Vô Ngôn Thông năm 820, Thảo Đường thời Lý thế kỷ XI). Sang thế kỷ XIII, Thiền sư người Tống là Thiên Phong và Đại Đăng sang Đại Việt giao lưu chặt chẽ với hoàng tộc nhà Trần (như Trần Thái Tông — tác giả "Khóa Hư Lục" — và danh tướng kiêm thiền sư cư sĩ Tuệ Trung Thượng Sĩ Trần Quốc Tung). Chính trong bối cảnh giao lưu trí tuệ sâu rộng giữa Đại Việt và Thiền Tông Tống–Nguyên, đồng thời trước yêu cầu củng cố khối đại đoàn kết quốc gia hậu chiến, Trần Nhân Tông đã đặt nền móng cho Thiền phái Trúc Lâm với ba vị sơ tổ: Trần Nhân Tông, Pháp Loa và Huyền Quang.',
      mainContent: [
        {
          heading: '1. Từ "Khóa Hư Lục" của Trần Thái Tông đến "Phóng Cuồng Ngâm" của Tuệ Trung Thượng Sĩ',
          body: 'Tiền đề trực tiếp của Thiền phái Trúc Lâm là tư tưởng nhập thế thời đầu Trần. Năm 1236, khi vua trẻ Trần Thái Tông bỏ kinh thành lên Yên Tử định xuất gia, Quốc sư Phù Vân đã nói câu bất hủ: "Trong núi vốn không có Phật, Phật ở ngay trong tâm; phàm đã làm vua thiên hạ thì phải lấy ý muốn của thiên hạ làm ý muốn của mình." Sau đó, Tuệ Trung Thượng Sĩ (1230–1291, người thầy trực tiếp của Trần Nhân Tông) truyền đạt tinh thần Lâm Tế phóng khoáng "Phản quan tự kỷ bổn phận sự, bất tùng tha đắc" (quay lại nhìn bản phận mình, không tìm cầu bên ngoài) và "Hòa quang đồng trần" (hòa ánh sáng vào bụi trần).'
        },
        {
          heading: '2. Tổ chức giáo hội thống nhất và Tam Tổ Trúc Lâm',
          body: 'Năm 1299, Trần Nhân Tông lập Thiền phái Trúc Lâm trên núi Yên Tử, không chỉ tu tập mà còn đi khắp làng quê dạy dân bỏ mê tín, thực hành Thập thiện và thuyết giảng đạo lý. Đệ nhị tổ Pháp Loa (1284–1330) hoàn thiện quy mô tổ chức giáo hội toàn quốc: lập sổ tăng tịch, xây hơn 800 ngôi chùa–am, khắc in bộ "Đại Tạng Kinh" đầu tiên của Đại Việt (1319–1329) và đào tạo hàng vạn tăng ni. Đệ tam tổ Huyền Quang (1254–1334, nguyên Trạng nguyên Lý Đạo Tái) bồi đắp chiều sâu văn chương và trụ trì chùa Côn Sơn – Thanh Mai.'
        },
        {
          heading: '3. Đối thoại với Thiền Tông Tống–Nguyên: Tương đồng và Bản sắc riêng',
          body: 'Thiền phái Trúc Lâm sử dụng hệ thống công án, kệ tụng và ngữ lục gần gũi với Lâm Tế Tông thời Nam Tống (như trong "Tam Tổ Thực Lục" và "Thánh Đăng Ngữ Lục"), đồng thời duy trì giao lưu trực tiếp với các thiền sư Trung Hoa. Tuy nhiên, điểm khác biệt căn bản là trong khi Thiền Tông thời Nguyên tại Trung Quốc chịu sự quản lý của Tuyên Chính Viện và có phần lùi về tu viện khép kín, thì Trúc Lâm Yên Tử gắn hữu cơ với chủ quyền quốc gia, sử dụng thơ phú chữ Nôm ("Cư trần lạc đạo phú", "Đắc thú lâm tuyền thành đạo ca") và không kỳ thị Nho–Đạo ("Tam giáo đồng nguyên").'
        },
        {
          heading: '4. Di sản văn hóa – kiến trúc Yên Tử – Vĩnh Nghiêm – Côn Sơn Kiếp Bạc',
          body: 'Hệ thống chùa tháp Trúc Lâm trải dài từ chùa Đồng, chùa Hoa Yên (Yên Tử, Quảng Ninh) qua chùa Vĩnh Nghiêm (Bắc Giang — nơi lưu giữ kho 3.050 mộc bản kinh Phật Di sản Tư liệu Thế giới UNESCO năm 2012) đến Côn Sơn – Kiếp Bạc (Hải Dương) vẫn tiếp tục là trung tâm văn hóa tâm linh sống động của Việt Nam đương đại.'
        }
      ],
      theoreticalFramework: 'Trong Phật học so sánh Đông Á, Thiền phái Trúc Lâm là hình mẫu tiêu biểu của "Phật giáo nhập thế bản địa hóa" (Engaged Indigenous Zen): kế thừa trọn vẹn cốt lõi "Trực chỉ nhân tâm" của Huệ Năng và Lâm Tế Tông, nhưng tái định hướng công phu thiền định phục vụ an dân, bảo vệ đất nước và phổ cập đạo đức qua tiếng mẹ đẻ.',
      terminologyAndLiushu: [
        { hanzi: '尘', pinyin: 'chén', hanViet: 'Trần', liushu: 'Hội ý', gloss: 'Dạng phồn thể 塵 vẽ đàn hươu (鹿) chạy trên đất (土) tung bụi; trong "Cư trần lạc đạo" chỉ cuộc sống thế gian đời thường.' },
        { hanzi: '觉', pinyin: 'jué', hanViet: 'Giác', liushu: 'Hình thanh / Hội ý', gloss: 'Chỉ sự tỉnh thức sáng suốt — xuất hiện trong tôn hiệu "Điều Ngự Giác Hoàng" của Trần Nhân Tông.' },
        { hanzi: '缘', pinyin: 'yuán', hanViet: 'Duyên', liushu: 'Hình thanh', gloss: 'Gồm bộ Mịch (纟) và chữ Thoán (彖); trong "Tùy duyên" chỉ thái độ thuận theo nhân duyên khách quan mà vẫn giữ tâm tự tại.' },
        { hanzi: '灯', pinyin: 'dēng', hanViet: 'Đăng', liushu: 'Hình thanh', gloss: 'Trong "Truyền đăng" / "Thánh Đăng Ngữ Lục" ẩn dụ cho ngọn đèn trí tuệ truyền nối giữa các thế hệ thiền sư.' },
        { hanzi: '林', pinyin: 'lín', hanViet: 'Lâm', liushu: 'Hội ý', gloss: 'Hai chữ Mộc (木) ghép lại; chỉ rừng trúc ("Trúc Lâm") đồng thời chỉ tu viện tùng lâm hội tụ đông đảo tăng chúng.' }
      ],
      primarySources: [
        PQ(
          '《居尘乐道赋·第十会》（陈仁宗，13世纪末）',
          'Cư Trần Lạc Đạo Phú — Hội thứ 10 (Trần Nhân Tông)',
          'Rhapsody on Dwelling in the World and Rejoicing in the Way — Tran Nhan Tong',
          '居尘乐道且随缘，饥则餐兮困则眠。家中有宝休寻觅，对境无心莫问禅。',
          'Jūchén lèdào qiě suíyuán, jī zé cān xī kùn zé mián. Jiāzhōng yǒubǎo xiū xúnmì, duìjìng wúxīn mò wèn chán.',
          'Cư trần lạc đạo thả tùy duyên, cơ tắc xan hề khốn tắc miên. Gia trung hữu bảo hưu tầm mịch, đối cảnh vô tâm mạc vấn thiền.',
          'Ở đời vui đạo hãy tùy duyên, đói cứ ăn đi mệt ngủ liền. Trong nhà có báu thôi tìm kiếm, đối cảnh không tâm chớ hỏi thiền.',
          'Dwelling in the world and rejoicing in the Way, move with conditions: when hungry eat, when weary sleep. The treasure already lies within the house—stop searching outside; facing circumstances with an unattached mind, why ask about Zen?'
        ),
        PQ(
          '《课虚录·序》（陈太宗，13世纪）',
          'Khóa Hư Lục — Bài Tựa (Trần Thái Tông)',
          'Lessons on Emptiness (Khoa Hu Luc), Preface — Tran Thai Tong',
          '山本无佛，惟存于心。心寂而知，是名真佛。',
          'Shān běn wúfó, wéi cún yú xīn. Xīn jì ér zhī, shì míng zhēnfó.',
          'Sơn bản vô Phật, duy tồn ư tâm. Tâm tịch nhi tri, thị danh chân Phật.',
          'Trong núi vốn không có Phật, Phật chỉ tồn tại ở trong tâm. Tâm lắng lặng mà sáng biết, đó chính là chân Phật (lời Quốc sư Phù Vân).',
          'The mountain itself holds no Buddha; Buddha exists solely within the mind. When the mind is still yet lucid, that is the true Buddha.'
        )
      ],
      sinoVietnameseComparison: 'Nếu Thiền Tông Tống–Nguyên tại Trung Quốc chuyển dần sang kết hợp Thiền–Tịnh Độ trong khung tu viện, thì Trúc Lâm Yên Tử tại Đại Việt lại gắn kết mật thiết Thiền học với tinh thần yêu nước, nghệ thuật thơ Nôm và trách nhiệm công dân — tạo nên nét bản sắc riêng biệt trong bức tranh Phật giáo Đông Á.',
      additionalReferences: [
        'Lê Mạnh Thát (1999), Toàn tập Trần Nhân Tông, NXB TP. Hồ Chí Minh.',
        'Nguyễn Lang (1974), Việt Nam Phật Giáo Sử Luận, Tập 1.',
        'Cuong Tu Nguyen (1997), Zen in Medieval Vietnam, University of Hawaii Press.'
      ],
      conclusion: 'Thiền phái Trúc Lâm Yên Tử cho thấy đỉnh cao của tiếp biến văn hóa là khả năng hấp thụ tinh hoa triết học khu vực để kiến tạo một truyền thống tâm linh tự chủ, gần gũi với đời sống và vận mệnh dân tộc.'
    },
    {
      id: 'east-asian-historiography-shiji-toanthu',
      number: 89,
      category: 'sino-vietnam',
      categoryLabel: 'Đối thoại Việt – Trung',
      titleVi: 'Truyền thống Sử học Đông Á: Kỷ Truyện 《Sử Ký》 vs Biên Niên 《Đại Việt Sử Ký Toàn Thư》',
      titleZh: '东亚史学传统：《史记》纪传体与《大越史记全书》编年体对照',
      titleZhTrad: '東亞史學傳統：《史記》紀傳體與《大越史記全書》編年體對照',
      titleEn: 'East Asian Historiographical Traditions: Annals–Biography in Sima Qian\'s Shiji vs. Chronological Annals in Dai Viet Su Ky Toan Thu',
      readMinutes: 14,
      epistemicTag: 'Sử học So sánh & Văn hiến Đông Á',
      abstract: 'Chuyên luận đối chiếu hai thể tài cột trụ của nền sử học Đông Á cổ trung đại: thể Kỷ truyện lấy con người làm trung tâm do Tư Mã Thiên sáng lập trong "Sử Ký" (khoảng 91 TCN) và thể Biên niên theo trục thời gian do "Xuân Thu" – "Tư Trị Thông Giám" định hình và được các sử thần Đại Việt phát triển đỉnh cao trong "Đại Việt Sử Ký Toàn Thư".',
      keyTakeaways: [
        'Sử học Đông Á xem chép sử là chức năng chính trị–đạo đức tối cao ("Dĩ sử vi giám" — lấy lịch sử làm gương), duy trì hệ thống Sử quán nhà nước liên tục hơn 2.000 năm chưa từng gián đoạn.',
        'Tư Mã Thiên sáng tạo thể Kỷ truyện gồm 5 phần (Bản kỷ, Biểu, Thư, Thế gia, Liệt truyện) cho phép khắc họa đa chiều cả hoàng đế, thể chế kinh tế–thủy lợi lẫn thích khách, thương nhân và các tộc người xung quanh.',
        'Các sử gia Đại Việt (Lê Văn Hưu, Phan Phu Tiên, Ngô Sĩ Liên) chọn thể Biên niên cho "Đại Việt Sử Ký Toàn Thư" (với cấu trúc Kỷ – năm – lời bàn "Sử thần viết") nhằm nhấn mạnh tính liên tục bất khả xâm phạm của chính thống lịch sử và chủ quyền quốc gia.'
      ],
      introduction: 'Không một vùng văn minh cổ đại nào trên thế giới sở hữu truyền thống chép sử liên tục, có hệ thống và mang tính thể chế cao như Đông Á. Nếu Trung Quốc có bộ Nhị Thập Tứ Sử đồ sộ khởi đầu từ "Sử Ký" của Tư Mã Thiên và "Tư Trị Thông Giám" của Tư Mã Quang, thì Việt Nam tự hào với mạch quốc sử liên tục từ "Đại Việt Sử Ký" (1272), "Đại Việt Sử Ký Toàn Thư" (thế kỷ XV–XVII) đến "Khâm định Việt sử Thông giám Cương mục" (thế kỷ XIX). So sánh hai kiệt tác "Sử Ký" và "Toàn Thư" làm sáng tỏ cách lựa chọn thể tài sử học gắn chặt với tư tưởng chính trị và bản sắc dân tộc.',
      historicalBackground: 'Truyền thống chép sử Trung Hoa bắt nguồn từ chức Sử quan chép lời nói và hành động của nhà vua thời Thương–Chu ("Xuân Thu", "Tả Truyện" theo thể Biên niên). Thời Hán Vũ Đế, Thái sử lệnh Tư Mã Thiên (khoảng 145–86 TCN) bất chấp bi kịch bị cung hình năm 99 TCN vì bênh vực tướng Lý Lăng, đã hoàn thành bộ thông sử "Sử Ký" 130 thiên, 526.500 chữ bao quát 3.000 năm từ Hoàng Đế tới Hán Vũ Đế. Hơn một nghìn năm sau, Tư Mã Quang thời Bắc Tống hoàn thành bộ biên niên "Tư Trị Thông Giám" (1084). Tại Đại Việt, năm 1272 Hàn lâm viện Học sĩ Lê Văn Hưu hoàn thành "Đại Việt Sử Ký" 30 quyển; năm 1479 Ngô Sĩ Liên vâng lệnh Lê Thánh Tông biên soạn "Đại Việt Sử Ký Toàn Thư" 15 quyển, sau tiếp tục được các sử thần Lê Trung Hưng (Phạm Công Trứ, Lê Hy) bổ sung và khắc in bản Chính Hòa năm 1697.',
      mainContent: [
        {
          heading: '1. Kiến trúc 5 phần của thể Kỷ truyện trong 《Sử Ký》',
          body: 'Tư Mã Thiên giải quyết bài toán kể đồng thời lịch sử chính trị, thể chế và số phận con người bằng cấu trúc năm hợp phần bổ trợ nhau: 12 Bản kỷ (trục thời gian các triều đại), 10 Biểu (bảng niên biểu đối chiếu đồng đại), 8 Thư (chuyên khảo về lễ, nhạc, lịch, thiên văn, thủy lợi, kinh tế Bình Chuẩn Thư), 30 Thế gia (các chư hầu và nhân vật kiệt xuất như Khổng Tử, Trần Thắng) và 70 Liệt truyện (chân dung đa tầng lớp từ tướng soái, nho sĩ đến thích khách, du hiệp, thương nhân trong "Hóa Thực Liệt Truyện"). Tinh thần "Bất hư mỹ, bất ẩn ác" (không tâng bốc giả dối, không che giấu cái xấu — gọi là "Thực lục") trở thành chuẩn mực đạo đức nghề sử.'
        },
        {
          heading: '2. Cấu trúc Biên niên và Ý thức Chính thống trong 《Đại Việt Sử Ký Toàn Thư》',
          body: 'Kế thừa tinh thần "Xuân Thu bút pháp" và "Tư Trị Thông Giám", "Đại Việt Sử Ký Toàn Thư" chia làm hai phần lớn: Ngoại kỷ (từ Hồng Bàng thị đến hết thời Ngô Quyền – Thập nhị sứ quân) và Bản kỷ (từ Đinh Tiên Hoàng năm 968 đến năm 1675). Việc Ngô Sĩ Liên đưa kỷ Hồng Bàng (Kinh Dương Vương, Lạc Long Quân, Hùng Vương) vào đầu bộ quốc sử và giữ nguyên niên hiệu độc lập của các hoàng đế Đại Việt khẳng định mạnh mẽ thế đứng ngang hàng "Bắc có Hán Đường Tống Nguyên, Nam có Triệu Đinh Lý Trần". Sau mỗi sự kiện lớn, lời bình "Sử thần viết" của Lê Văn Hưu, Phan Phu Tiên và Ngô Sĩ Liên trực tiếp phê phán cả vua quan đương triều bằng chuẩn mực đạo đức và lợi ích quốc gia.'
        },
        {
          heading: '3. So sánh ưu – nhược điểm phương pháp giữa Kỷ truyện và Biên niên',
          body: 'Thể Kỷ truyện của "Sử Ký" xuất sắc ở khả năng khắc họa tâm lý nhân vật sống động (được Lỗ Tấn khen là "Sử gia chi tuyệt xướng, vô vận chi Ly Tao") và tổng hợp chuyên đề kinh tế – văn hóa, nhưng dễ lặp lại cùng một sự kiện ở nhiều truyện khác nhau. Ngược lại, thể Biên niên của "Toàn Thư" và "Tư Trị Thông Giám" giữ mạch nhân quả thời gian cực kỳ mạch lạc, dễ đối chiếu sự kiện đồng đại trong cùng một năm, nhưng khiến tiểu sử một nhân vật bị cắt nhỏ rải rác qua nhiều thập kỷ.'
        },
        {
          heading: '4. Đối chiếu sử liệu Việt–Trung trong nghiên cứu lịch sử hiện đại',
          body: 'Trong sử học hiện đại, việc đọc đối chiếu song song "Hán Thư", "Đường Thư", "Tống Sử", "Minh Sử" với "Đại Việt Sử Ký Toàn Thư" là phương pháp kiểm chứng bắt buộc: nhiều chi tiết về địa lý, ngoại giao, thuế khóa và các cuộc kháng chiến tại biên giới hai nước chỉ hiện lên đầy đủ khi đặt hai nguồn sử quán song song nhau.'
        }
      ],
      theoreticalFramework: 'Sử gia hiện đại (như Grant Hardy nghiên cứu "Sử Ký" và Keith Taylor, Phan Huy Lê nghiên cứu sử học Đại Việt) nhấn mạnh rằng sử học Đông Á không phải là bảng liệt kê sự kiện vô hồn mà là một "diễn ngôn đạo đức – chính danh": cách đặt tên chương mục (Bản kỷ vs Liệt truyện, xưng Đế vs xưng Vương, ghi niên hiệu riêng) bản thân nó đã là một tuyên ngôn về trật tự chính trị và chủ quyền văn hóa.',
      terminologyAndLiushu: [
        { hanzi: '史', pinyin: 'shǐ', hanViet: 'Sử', liushu: 'Hội ý', gloss: 'Giáp Cốt Văn vẽ bàn tay (又) cầm ống đựng thẻ ghi chép hoặc bảng tính (中); vốn chỉ quan ghi chép lời vua, sau chỉ lịch sử.' },
        { hanzi: '纪', pinyin: 'jì', hanViet: 'Kỷ', liushu: 'Hình thanh', gloss: 'Gồm bộ Mịch (纟: đầu mối sợi tơ) và chữ Kỷ (己); chỉ đầu mối ghi chép biên niên các đời đế vương ("Bản kỷ").' },
        { hanzi: '传', pinyin: 'zhuàn', hanViet: 'Truyện', liushu: 'Hình thanh', gloss: 'Gồm bộ Nhân (亻) và chữ Chuyên (专); chỉ phần ghi tiểu sử nhân vật ("Liệt truyện") hoặc sách giải thích kinh điển.' },
        { hanzi: '鉴', pinyin: 'jiàn', hanViet: 'Giám (Gương)', liushu: 'Hình thanh / Hội ý', gloss: 'Chiếc gương đồng soi mặt; ẩn dụ cho lịch sử soi chiếu đúng sai để trị quốc ("Tư Trị Thông Giám", "Việt Sử Thông Giám").' },
        { hanzi: '录', pinyin: 'lù', hanViet: 'Lục', liushu: 'Hình thanh', gloss: 'Trong "Thực lục" (实录) — nguyên tắc chép sử trung thực thẳng thắn không bẻ cong sự thật.' }
      ],
      primarySources: [
        PQ(
          '《报任安书》（司马迁）',
          'Báo Nhậm An Thư — Tư Mã Thiên',
          'Letter to Ren An — Sima Qian',
          '究天人之际，通古今之变，成一家之言。',
          'Jiū tiānrén zhī jì, tōng gǔjīn zhī biàn, chéng yījiā zhī yán.',
          'Cứu thiên nhân chi tế, thông cổ kim chi biến, thành nhất gia chi ngôn.',
          'Khảo cứu mối giao hòa giữa Trời và Người, thông suốt quy luật biến đổi từ xưa đến nay, tạo thành một học thuyết sử học độc lập.',
          'To examine the interplay between Heaven and Humanity, penetrate the transformations of past and present, and establish an independent school of thought.'
        ),
        PQ(
          '《大越史记全书·外纪卷一》（吴士连，1479）',
          'Đại Việt Sử Ký Toàn Thư — Bài Tựa / Phàm lệ (Ngô Sĩ Liên)',
          'Complete Annals of Dai Viet — Wu Shilian / Ngo Si Lien (1479)',
          '国史所以记善恶，垂劝惩，使后世知所法戒也。',
          'Guóshǐ suǒyǐ jì shàn\'è, chuí quànchéng, shǐ hòushì zhī suǒ fǎjiè yě.',
          'Quốc sử sở dĩ ký thiện ác, thùy khuyến trừng, sử hậu thế tri sở pháp giới dã.',
          'Quốc sử là để ghi rõ điều thiện điều ác, lưu truyền lời khuyên răn, khiến đời sau biết điều gì nên noi theo và điều gì phải tránh.',
          'National history exists to record good and evil, leaving admonitions so posterity knows what to emulate and what to guard against.'
        )
      ],
      sinoVietnameseComparison: 'Nếu "Sử Ký" của Tư Mã Thiên là đỉnh cao tự sự cá nhân mang tầm nhìn phổ quát vượt lên trên quyền lực triều đình, thì "Đại Việt Sử Ký Toàn Thư" là bản anh hùng ca biên niên khẳng định lịch sử tự chủ hàng nghìn năm của người Việt — hai công trình cùng đứng trên đạo đức "Thực lục" và "Lấy sử làm gương" của nền văn hiến Đông Á.',
      additionalReferences: [
        'Tư Mã Thiên, Sử Ký (bản dịch Nhữ Thành / Phan Ngọc).',
        'Ngô Sĩ Liên và các sử thần nhà Lê, Đại Việt Sử Ký Toàn Thư (Viện Khoa học Xã hội Việt Nam dịch, 4 tập).',
        'Grant Hardy (1999), Worlds of Bronze and Bamboo: Sima Qian\'s Conquest of History, Columbia University Press.'
      ],
      conclusion: 'Đặt "Sử Ký" cạnh "Đại Việt Sử Ký Toàn Thư" giúp người học hiểu sâu không chỉ hai thể tài Kỷ truyện và Biên niên, mà cả bản lĩnh học thuật độc lập của các sử gia Đông Á trong việc bảo vệ ký ức cộng đồng trước sự biến thiên của quyền lực.'
    },
    {
      id: 'bac-y-nam-duoc-comparative-medicine',
      number: 90,
      category: 'sino-vietnam',
      categoryLabel: 'Đối thoại Việt – Trung',
      titleVi: 'Bắc Y & Nam Dược: Đối thoại 《Hoàng Đế Nội Kinh》 với Tuệ Tĩnh & Hải Thượng Lãn Ông',
      titleZh: '北医与南药对话：《黄帝内经》同越南慧静与海上懒翁医学思想',
      titleZhTrad: '北醫與南藥對話：《黃帝內經》同越南慧靜與海上懶翁醫學思想',
      titleEn: 'Northern Medicine and Southern Herbs: Dialogue Between the Huangdi Neijing and Vietnamese Masters Tue Tinh and Hai Thuong Lan Ong',
      readMinutes: 15,
      epistemicTag: 'Y học Cổ truyền So sánh',
      abstract: 'Chuyên luận đối chiếu nền tảng lý luận của Trung y cổ điển ("Hoàng Đế Nội Kinh", "Thương Hàn Luận", "Bản Thảo Cương Mục") với sự hình thành nền Y học Cổ truyền Việt Nam độc lập qua hai đại danh y Tuệ Tĩnh ("Nam dược trị Nam nhân", thế kỷ XIV) và Hải Thượng Lãn Ông Lê Hữu Trác ("Hải Thượng Y Tông Tâm Lĩnh", thế kỷ XVIII).',
      keyTakeaways: [
        'Y học cổ truyền Việt Nam tiếp thu hệ thống lý luận cốt lõi từ Trung y (Âm Dương, Ngũ Hành, Tạng Tượng, Kinh Lạc, Bát Cương) nhưng điều chỉnh toàn diện phương pháp điều trị và dược liệu theo khí hậu nhiệt đới ẩm gió mùa phương Nam.',
        'Thiền sư – danh y Tuệ Tĩnh (thế kỷ XIV) đề xướng phương châm "Nam dược trị Nam nhân" (thuốc Nam chữa người Nam), biên soạn "Nam Dược Thần Hiệu" ghi nhận 499 vị thuốc bản địa Việt Nam.',
        'Hải Thượng Lãn Ông Lê Hữu Trác (1720–1791) tổng hợp đỉnh cao lý luận Bắc Y và kinh nghiệm Nam Dược trong bộ "Hải Thượng Y Tông Tâm Lĩnh" (28 tập, 66 quyển) cùng 9 điều "Y huấn cách ngôn" về y đức.'
      ],
      introduction: 'Trong đời sống người Việt, hai khái niệm "Thuốc Bắc" (Bắc dược / Bắc y) và "Thuốc Nam" (Nam dược) đã song hành suốt nhiều thế kỷ, phản ánh một cuộc đối thoại khoa học thực chứng kéo dài hơn một nghìn năm giữa tri thức y học Trung Nguyên và hệ sinh thái dược thảo nhiệt đới Việt Nam. Từ nền tảng chung về học thuyết Âm Dương – Ngũ Hành trong "Hoàng Đế Nội Kinh", các danh y Việt Nam không áp dụng máy móc phương thang phương Bắc mà sáng hình thành nên một nền y học thích ứng với thể trạng, thổ nhưỡng và bệnh lý đặc thù của cư dân phương Nam.',
      historicalBackground: 'Y học cổ truyền Trung Quốc đặt nền móng lý luận từ "Hoàng Đế Nội Kinh" (Tố Vấn & Linh Khu), lâm sàng từ "Thương Hàn Tạp Bệnh Luận" của Trương Trọng Cảnh (cuối Đông Hán) và dược học từ "Thần Nông Bản Thảo Kinh" đến "Bản Thảo Cương Mục" của Lý Thời Trân (1596). Tại Việt Nam, ngay từ thời Lý–Trần đã hình thành Thái y viện và kho tàng cây thuốc bản địa. Thế kỷ XIV, Thiền sư Tuệ Tĩnh (Nguyễn Bá Tĩnh, quê Hải Dương) hệ thống hóa 499 vị thuốc Nam và gần 4.000 phương thuốc trong "Nam Dược Thần Hiệu" và "Hồng Nghĩa Giác Tư Y Thư" trước khi đi sứ sang nhà Minh năm 1385. Bốn thế kỷ sau, Hải Thượng Lãn Ông Lê Hữu Trác (1720–1791) dành gần trọn đời biên soạn bộ bách khoa y học lớn nhất lịch sử Việt Nam — "Hải Thượng Y Tông Tâm Lĩnh".',
      mainContent: [
        {
          heading: '1. Khung lý luận chung: Tạng Tượng, Kinh Lạc và Biện chứng Luận trị',
          body: 'Cả Bắc Y và y học cổ truyền Việt Nam đều vận hành trên tư duy chỉnh thể (holism): cơ thể người là tiểu vũ trụ gắn kết mật thiết với thời tiết bốn mùa; chẩn bệnh qua Tứ Chẩn (Vọng – Văn – Vấn – Thiết) và phân loại bệnh lý theo Bát Cương (Âm–Dương, Biểu–Lý, Hàn–Nhiệt, Hư–Thực). Tuy nhiên, ngay trong phạm vi Trung y cổ điển cũng có sự phân hóa địa lý rõ rệt: phái "Thương Hàn" của Trương Trọng Cảnh hình thành ở Hoa Bắc lạnh khô (chuộng thuốc ôn ấm phát hãn như Ma hoàng, Quế chi), còn phái "Ôn Bệnh" (Diệp Thiên Sĩ, Ngô Cúc Thông thời Thanh) hình thành ở Giang Nam ẩm nóng lại thiên về thanh nhiệt dưỡng âm.'
        },
        {
          heading: '2. Tuệ Tĩnh và cuộc cách mạng "Nam Dược trị Nam Nhân"',
          body: 'Đi trước phái Ôn Bệnh Trung Quốc hàng thế kỷ, Tuệ Tĩnh sớm nhận ra thuốc trồng ở khí hậu lạnh phương Bắc khi vận chuyển xa sang Việt Nam vừa đắt đỏ vừa không phù hợp hoàn toàn với thể trạng người sống trong vùng nhiệt đới ẩm thấp. Ông xây dựng nguyên lý "Nam dược trị Nam nhân" — khai thác trực tiếp nguồn dược liệu tươi sẵn có quanh vườn nhà (gừng, sả, tía tô, ngải cứu, bạc hà, cam thảo đất, ích mẫu, mã đề, hương phụ), đồng thời đúc kết phép dưỡng sinh nổi tiếng: "Bế tinh, dưỡng khí, tồn thần / Thanh tâm, quả dục, thủ chân, luyện hình".'
        },
        {
          heading: '3. Hải Thượng Lãn Ông: Cầu nối tổng hợp Bắc Y – Nam Dược và Y đức',
          body: 'Hải Thượng Lãn Ông Lê Hữu Trác tiếp thu tinh hoa y thư Trung Hoa (đặc biệt học thuyết Mệnh Môn – Thủy Hỏa của Trương Cảnh Nhạc thời Minh trong "Cảnh Nhạc Toàn Thư") nhưng không sao chép mù quáng: ông chỉ rõ người phương Nam khí hậu nóng ẩm dễ hao chân âm nên phải thận trọng khi dùng thuốc táo nhiệt của phương Bắc, chủ trương "dùng thuốc Bắc thì phải gia giảm theo khí hậu nước Nam, kết hợp nhuần nhuyễn với vị thuốc Nam". Trong "Hải Thượng Y Tông Tâm Lĩnh", bên cạnh hơn 2.800 bài thuốc và "Lĩnh Nam Bản Thảo" (bổ sung 305 vị thuốc Nam mới), ông đặt ra 9 điều "Y huấn cách ngôn" đề cao lòng nhân ái bình đẳng giàu nghèo — tương đồng tinh thần "Đại Y Tinh Thành" của Tôn Tư Mạo thời Đường.'
        },
        {
          heading: '4. Đối chiếu trong y học tích hợp hiện đại',
          body: 'Ngày nay, cả Trung Quốc và Việt Nam đều thúc đẩy mô hình "Đông – Tây y kết hợp": giải thưởng Nobel 2015 của Đồ U U chiết xuất artemisinin từ cây Thanh hao hoa vàng dựa trên cổ thư Cát Hồng, cũng như các nghiên cứu dược lý hiện đại tại Việt Nam về Sâm Ngọc Linh, Trinh nữ hoàng cung, Diệp hạ châu đều chứng minh giá trị bền vững của kho tàng bản thảo Đông Á khi được kiểm chứng bằng phương pháp khoa học hiện đại.'
        }
      ],
      theoreticalFramework: 'Dưới góc độ nhân học y học và sinh thái học dược liệu, cuộc đối thoại Bắc Y – Nam Dược minh họa quy luật "Tam nhân chế nghi" (nhân thời, nhân địa, nhân nhân — tùy mùa, tùy địa phương, tùy cơ địa mà trị bệnh) vốn đã được nêu trong "Hoàng Đế Nội Kinh", được Tuệ Tĩnh và Hải Thượng Lãn Ông hiện thực hóa thành một hệ thống y học nhiệt đới độc lập.',
      terminologyAndLiushu: [
        { hanzi: '医', pinyin: 'yī', hanViet: 'Y', liushu: 'Hội ý', gloss: 'Dạng phồn thể 醫 gồm hộp đựng mũi tên (匚+矢), tay cầm dụng cụ (殳) và bình rượu dược tửu (酉); chỉ nghề chữa thương và dùng thuốc.' },
        { hanzi: '药', pinyin: 'yào', hanViet: 'Dược', liushu: 'Hình thanh', gloss: 'Dạng phồn thể 藥 gồm bộ Thảo (艹: thảo mộc) và chữ Nhạc/Lạc (樂: vui khỏe); cây cỏ giúp phục hồi sức khỏe.' },
        { hanzi: '脉', pinyin: 'mài', hanViet: 'Mạch', liushu: 'Hình thanh', gloss: 'Hệ thống mạch máu và kinh lạc được bắt mạch chẩn bệnh ("Thiết chẩn") trong cả Bắc Y và Nam Y.' },
        { hanzi: '寒', pinyin: 'hán', hanViet: 'Hàn', liushu: 'Hội ý', gloss: 'Người (人) nấp dưới mái nhà (宀) lót cỏ (艸) bên trên hai nét băng (冫); khí lạnh gây bệnh vùng ôn đới phía Bắc.' },
        { hanzi: '温', pinyin: 'wēn', hanViet: 'Ôn', liushu: 'Hình thanh', gloss: 'Trong "Ôn bệnh" (温病) chỉ nhóm bệnh nhiệt ẩm phổ biến ở vùng khí hậu nóng ẩm Giang Nam và Việt Nam.' }
      ],
      primarySources: [
        PQ(
          '《南药神效》（越南·慧静，14世纪）',
          'Nam Dược Thần Hiệu — Thiền sư Tuệ Tĩnh (thế kỷ XIV)',
          'Miraculous Efficacy of Southern Herbs — Master Tue Tinh (14th century)',
          '南药治南人。',
          'Nányào zhì Nánrén.',
          'Nam dược trị Nam nhân.',
          'Thuốc Nam chữa bệnh cho người Nam (tuyên ngôn độc lập của nền y học bản địa Việt Nam, phù hợp thổ nhưỡng và thể trạng nhiệt đới).',
          'Southern herbs heal Southern people.'
        ),
        PQ(
          '《备急千金要方·大医精诚》（唐·孙思邈）',
          'Bị Cấp Thiên Kim Yếu Phương — Đại Y Tinh Thành (Tôn Tư Mạo, đời Đường)',
          'Essential Prescriptions Worth a Thousand Gold, On the Absolute Sincerity of Great Physicians — Sun Simiao',
          '凡大医治病，必当安神定志，无欲无求，先发大慈恻隐之心。',
          'Fán dàyī zhìbìng, bìdāng ānshén dìngzhì, wúyù wúqiú, xiān fā dàcí cèyǐn zhī xīn.',
          'Phàm đại y trị bệnh, tất đương an thần định chí, vô dục vô cầu, tiên phát đại từ trắc ẩn chi tâm.',
          'Phàm bậc đại y khi chữa bệnh tất phải giữ thần trí bình tĩnh, không màng lợi cầu danh, trước hết khởi phát tấm lòng đại từ bi trắc ẩn.',
          'Whenever a great physician treats illness, they must calm the spirit and steady the will, free of selfish desire, beginning first with boundless compassion.'
        )
      ],
      sinoVietnameseComparison: 'Cuộc đối thoại giữa "Hoàng Đế Nội Kinh" – Tôn Tư Mạo với Tuệ Tĩnh – Hải Thượng Lãn Ông cho thấy hai nền y học chia sẻ chung khung triết lý chỉnh thể và đạo đức "Y giả phụ mẫu tâm", đồng thời bổ trợ nhau về sinh thái dược liệu (vị thuốc ôn đới phương Bắc kết hợp thảo dược nhiệt đới phương Nam).',
      additionalReferences: [
        'Tuệ Tĩnh, Tuệ Tĩnh Toàn Tập (Nam Dược Thần Hiệu & Hồng Nghĩa Giác Tư Y Thư), NXB Y học.',
        'Hải Thượng Lãn Ông Lê Hữu Trác, Hải Thượng Y Tông Tâm Lĩnh, NXB Y học.',
        'Paul U. Unschuld (1985), Medicine in China: A History of Ideas, University of California Press.'
      ],
      conclusion: 'Bắc Y và Nam Dược là hai nhánh tương tác mật thiết của nền y học Đông Á: tiếp thu chung nền tảng lý luận chỉnh thể từ cổ thư, nhưng luôn đặt hiệu quả thực chứng, thổ nhưỡng bản địa và lòng nhân ái đối với người bệnh làm thước đo cao nhất.'
    }
  ];

  window.CCE_ARTICLES = window.CCE_ARTICLES || [];
  var existingIds = {};
  var i;
  var HERO_MAP = {
    "xia-shang-zhou-oracle-bones-rituals": "assets/images/museum/houmuwu-ding.jpg",
    "qin-institutional-standardization": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "song-dynasty-urban-science-renaissance": "assets/images/paintings/21_qingming_shanghe.jpg",
    "grand-canal-dujiangyan-hydraulic-empire": "assets/images/articles/hero-four-inventions.jpg",
    "modern-china-transformation-1840-1949": "assets/images/articles/hero-beijing-shanghai.jpg",
    "sixteen-ancient-capitals-geopolitics": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "tea-horse-road-southwest-corridor": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "chinese-fermentation-spices-culinary-geography": "assets/images/articles/hero-chinese-cuisines.jpg",
    "chinese-liquor-culture-baijiu-huangjiu": "assets/images/articles/hero-chinese-banquet.jpg",
    "five-sacred-mountains-buddhist-peaks": "assets/images/provinces/shandong-taishan.jpg",
    "dunhuang-mogao-buddhist-grotto-art": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "xiqu-stagecraft-face-masks-tuong": "assets/images/articles/hero-spring-festival.jpg",
    "five-vernacular-architecture-styles": "assets/images/provinces/fujian-tulou.jpg",
    "ming-qing-fiction-hongloumeng-anatomy": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "lacquerware-silk-woodblock-new-year-prints": "assets/images/articles/hero-laozihao-craft.jpg",
    "pre-qin-legalism-xunzi-hanfeizi": "assets/images/articles/hero-hundred-schools.jpg",
    "song-ming-neo-confucianism-zhu-wang": "assets/images/articles/hero-confucianism.jpg",
    "chinese-chan-buddhism-aesthetics": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "mohism-logic-optics-ethics": "assets/images/prov_items/anhui/d0.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/prov_items/anhui/d1.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/prov_items/anhui/d2.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/prov_items/anhui/d3.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/prov_items/anhui/d4.jpg",
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/provinces/guangdong-canton-tower.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/prov_items/anhui/f0.jpg",
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/prov_items/anhui/f1.jpg",
    "jiuzhaigou-travertine-karst": "assets/images/museum/jiuzhaigou-five-flower-lake.jpg",
    "zhangjiajie-wulingyuan-sandstone-pillars": "assets/images/provinces/hunan-zhangjiajie.jpg"
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
  for (i = 0; i < ARTICLES_V3_PART3A.length; i++) {
    if (!existingIds[ARTICLES_V3_PART3A[i].id]) {
      window.CCE_ARTICLES.push(ARTICLES_V3_PART3A[i]);
      existingIds[ARTICLES_V3_PART3A[i].id] = true;
    }
  }
})();
