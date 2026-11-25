(function () {
  'use strict';

  window.CCE_ARTICLES = window.CCE_ARTICLES || [];

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

  var NEW_ARTICLES = [
    {
      id: 'tang-poetry-song-ci-poetics-geography',
      number: 101,
      category: 'literature',
      categoryLabel: 'Văn học & Thi ca',
      titleVi: 'Thi ca Đường – Tống và Địa lý Thi nhân: Từ Tráng ca Trường An, Xích Bích đến Mỹ học Tây Hồ',
      titleZh: '唐诗宋词与诗人地理：从长安壮歌、黄州赤壁到西湖美学',
      titleZhTrad: '唐詩宋詞與詩人地理：從長安壯歌、黃州赤壁到西湖美學',
      titleEn: 'Tang Poetry, Song Ci, and Literary Geography: From Chang\'an and Red Cliffs to West Lake',
      readMinutes: 14,
      epistemicTag: 'Văn học Cổ điển · Địa lý Nhân văn',
      abstract: 'Đường thi và Tống từ vừa là hai đỉnh cao ngôn từ kế tiếp nhau vừa hình thành một "bản đồ địa lý tinh thần" phủ khắp không gian Trung Hoa. Từ khí phách đế đô đa văn hóa Trường An và biên tái Tây Vực thời Thịnh Đường, qua dòng Trường Giang nơi Tô Thức viết Xích Bích giữa biến cố biếm trích, đến sắc nước Tây Hồ Hàng Châu thời Tống, chuyên luận này giải mã cách cảnh quan địa lý định hình thi pháp và cách thi ca ngược lại ban cho núi sông ký ức vĩnh cửu.',
      keyTakeaways: [
        'Đường thi (đỉnh cao với Lý Bạch, Đỗ Phủ, Vương Duy, Bạch Cư Dị) kết tinh quy phạm cận thể thi ngũ ngôn và thất ngôn (Luật thi, Tuyệt cú) gắn với hào khí khai phóng của đế quốc Đường.',
        'Tống từ (Tô Thức, Lý Thanh Chiếu, Tân Khí Tật, Liễu Vĩnh) phát triển thể trường đoản cú gắn với âm nhạc đô thị (Yến nhạc), phân hóa thành hai dòng lớn Uyển ước (tinh tế nội tâm) và Hào phóng (tráng khí lịch sử).',
        'Trục địa lý Trường An – Lạc Dương – Hoàng Châu (Xích Bích) – Tây Hồ (Hàng Châu) là minh chứng cho truyền thống "biếm trích văn học": chính những chuyến lưu đày xa kinh đô lại sản sinh những kiệt tác bất hủ nhất.'
      ],
      introduction: 'Trong lịch sử văn học thế giới, hiếm có nền thi ca nào gắn bó mật thiết với địa danh thực địa sâu sắc như Đường thi và Tống từ. Người đọc thơ Trung Hoa cổ điển vừa cảm thụ nhịp thanh điệu vừa bước qua những tọa độ địa lý cụ thể: cầu Bá Kiều tiễn khách phía đông Trường An, gác Hoàng Hạc nhìn ra Hán Dương, ghềnh đá Xích Bích ở Hoàng Châu hay đê Tô Công vắt ngang mặt nước Tây Hồ.',
      historicalBackground: 'Thế kỷ 7 đến thế kỷ 10 dưới triều Đường chứng kiến sự hoàn thiện luật bằng trắc và đối ngẫu (Cận thể thi), được thúc đẩy trực tiếp bởi việc đưa thi phú vào khoa cử Tiến sĩ. Toàn Đường Thi biên tập thời Khang Hy ghi nhận gần 49.000 bài thơ của hơn 2.200 tác giả. Bước sang triều Tống (960–1279), sự phồn thịnh của đô thị thương nghiệp Biện Kinh và Lâm An cùng âm nhạc thị dân thúc đẩy thể Từ (ban đầu là ca từ điền theo các Từ bài như Niệm Nô Kiều, Thủy Điệu Ca Đầu), trước khi Tô Thức giải phóng Từ khỏi khuôn khổ tình ái nhẹ nhàng để chuyên chở triết lý nhân sinh và hào khí lịch sử.',
      mainContent: [
        {
          heading: '1. Trường An và Biên tái: Không gian hào khí của Đường thi',
          body: 'Trường An thời Thịnh Đường là siêu đô thị quốc tế nơi hội tụ thương nhân Túc Đặc, tăng lữ Ấn Độ và sứ giả Nhật Bản, Tân La, Đại Việt. Không gian ấy sản sinh hào khí "Thiên sinh ngã tài tất hữu dụng" của Lý Bạch, nhãn quan hiện thực bi tráng trước loạn An Sử của Đỗ Phủ ("Quốc phá sơn hà tại") và cảnh giới thiền tĩnh "Thi trung hữu họa" của Vương Duy tại Võng Xuyên. Song song đó, dòng thơ Biên tái (Sầm Tham, Cao Thích, Vương Xương Linh) đưa sa mạc Gobi, ải Ngọc Môn và tuyết núi Thiên Sơn vào thi ca như biểu tượng của chí nam nhi và bi kịch chiến tranh.'
        },
        {
          heading: '2. Xích Bích và Hoàng Châu: Sự thăng hoa của "Biếm trích văn học"',
          body: 'Một quy luật đặc thù của văn học sử Trung Hoa là nghịch lý biếm trích: khi các văn nhân đại tài bị giáng chức ra vùng biên viễn (như Liễu Tông Nguyên đến Vĩnh Châu, Bạch Cư Dị đến Giang Châu, Tô Thức đến Hoàng Châu năm 1080 sau vụ án Ô Đài Thi Án), sự cắt đứt khỏi vòng xoáy quan trường lại mở ra chiều sâu triết học chưa từng có. Tại Hoàng Châu (Hồ Bắc), Tô Thức viết Niệm Nô Kiều · Xích Bích Hoài Cổ cùng Tiền – Hậu Xích Bích Phú, biến một vách đá ven sông Trường Giang thành biểu tượng vĩnh hằng về sự nhỏ bé của kiếp người trước dòng chảy lịch sử và thái độ khoáng đạt "nhất thoa yên vũ nhậm bình sinh".'
        },
        {
          heading: '3. Tây Hồ Hàng Châu và Đô thị Giang Nam trong Tống từ',
          body: 'Nếu Trường An là kinh đô của thơ Đường thì Hàng Châu (Lâm An) và Tây Hồ là linh hồn của thẩm mỹ Tống từ. Từ Bạch Cư Dị đắp đê Bạch thời Đường đến Tô Thức nạo vét bùn đắp đê Tô thời Bắc Tống và biến Tây Hồ thành hình ảnh "Dục bả Tây Hồ tỷ Tây Tử, đạm trang nồng mạt tổng tương nghi", cảnh quan nhân văn Giang Nam bước vào từ khúc của Liễu Vĩnh, Khương Quỳ và nữ từ nhân kiệt xuất Lý Thanh Chiếu (với nỗi đau mất nước sau biến cố Tĩnh Khang 1127).'
        },
        {
          heading: '4. Quy phạm âm luật: Cận thể thi và Từ bài',
          body: 'Đường thi cận thể đạt sự cân xứng kiến trúc chặt chẽ qua luật bằng trắc (Bình – Trắc), niêm, vần một âm cuối và hai cặp câu đối ngẫu ở câu 3–4, 5–6 trong thất ngôn bát cú. Ngược lại, Tống từ tuân theo Từ phổ (nhịp dài ngắn không đều theo giai điệu gốc, như Thanh Bình Nhạc, Mãn Giang Hồng), tạo độ co giãn cảm xúc tinh tế giúp khắc họa những biến chuyển tâm lý vi tế nhất.'
        }
      ],
      theoreticalFramework: 'Trong nghiên cứu Địa lý Văn học (Literary Geography) hiện đại, các địa danh như Xích Bích, Hoàng Hạc Lâu hay Tây Hồ là những "không gian văn bản hóa" (Textualized Landscapes): cảnh quan địa chất ban đầu được bồi đắp liên tục bởi nhiều lớp điển tích của các thế hệ thi nhân đi sau, khiến trải nghiệm thực địa luôn là một cuộc đối thoại đồng thời với thiên nhiên và ký ức thi ca hàng nghìn năm.',
      terminologyAndLiushu: [
        { hanzi: '近体诗', pinyin: 'jìntǐshī', hanViet: 'Cận thể thi', liushu: 'Thuật ngữ thi pháp học thời Đường', gloss: 'Thể thơ cách luật chặt chẽ về số câu, số chữ, bằng trắc và đối ngẫu (Luật thi, Tuyệt cú) hoàn thiện thời Đường.' },
        { hanzi: '词牌', pinyin: 'cípái', hanViet: 'Từ bài', liushu: 'Từ: Hình thanh (bộ Ngôn); Bài: Hình thanh (bộ Phiến)', gloss: 'Tên khuôn mẫu âm nhạc và nhịp điệu cố định (như Thủy Điệu Ca Đầu) dùng để sáng tác Tống từ.' },
        { hanzi: '豪放', pinyin: 'háofàng', hanViet: 'Hào phóng', liushu: 'Hào: Hình thanh; Phóng: Hình thanh (bộ Phộc)', gloss: 'Trường phái Tống từ mang khí phách rộng lớn, khoáng đạt do Tô Thức mở đầu và Tân Khí Tật phát triển.' },
        { hanzi: '婉约', pinyin: 'wǎnyuē', hanViet: 'Uyển ước', liushu: 'Uyển: Hình thanh (bộ Nữ); Ước: Hình thanh (bộ Mịch)', gloss: 'Trường phái Tống từ thiên về sự mềm mại, hàm súc và tinh tế nội tâm (Liễu Vĩnh, Lý Thanh Chiếu).' },
        { hanzi: '贬谪', pinyin: 'biǎnzhé', hanViet: 'Biếm trích', liushu: 'Hình thanh (Biếm: bộ Bối; Trích: bộ Ngôn)', gloss: 'Hình phạt giáng chức và đày quan lại ra địa phương xa kinh đô, nguồn cảm hứng lớn của văn học trung đại.' }
      ],
      primarySources: [
        PQ('杜甫《春望》（唐·757年）', 'Đỗ Phủ, Xuân Vọng (sáng tác tại Trường An năm 757 giữa loạn An Sử)', 'Du Fu, Spring View (composed in occupied Chang\'an, 757 CE)', '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。', 'Guó pò shānhé zài, chéng chūn cǎomù shēn. Gǎn shí huā jiàn lèi, hèn bié niǎo jīngxīn.', 'Quốc phá sơn hà tại, thành xuân thảo mộc thâm. Cảm thời hoa tiễn lệ, hận biệt điểu kinh tâm.', 'Nước mất núi sông còn đó, thành vào xuân cỏ cây mọc rậm. Cảm thương thời cuộc nhìn hoa mà rơi lệ, buồn chia ly nghe chim hót cũng giật mình.', 'The state is shattered, yet mountains and rivers remain; spring in the city deepens grass and trees. Moved by the times, blossoms draw tears; hating separation, birds startle the heart.'),
        PQ('苏轼《念奴娇·赤壁怀古》（北宋·1082年）', 'Tô Thức, Niệm Nô Kiều · Xích Bích Hoài Cổ (sáng tác tại Hoàng Châu năm 1082)', 'Su Shi, Charm of a Maiden Singer: Meditating on the Past at Red Cliffs (1082)', '大江东去，浪淘尽，千古风流人物。', 'Dàjiāng dōng qù, làng táo jìn, qiāngǔ fēngliú rénwù.', 'Đại giang đông khứ, lãng đào tận, thiên cổ phong lưu nhân vật.', 'Sông lớn chảy về đông, sóng cuộn cuốn đi hết bao bậc anh hùng hào kiệt ngàn xưa.', 'The great river flows eastward, its waves washing away the gallant heroes of a thousand ages.')
      ],
      sinoVietnameseComparison: 'Việt Nam tiếp nhận sâu sắc thi pháp Đường luật và sáng tạo nên thể thơ Nôm Đường luật độc đáo (với những câu lục ngôn xen thất ngôn của Nguyễn Trãi trong Quốc Âm Thi Tập, hay thơ Nôm sắc sảo của Hồ Xuân Hương và Bà Huyện Thanh Quan). Đồng thời, các địa danh lịch sử Việt Nam như Bạch Đằng Giang (Trương Hán Siêu), Côn Sơn (Nguyễn Trãi) hay Đèo Ngang cũng trở thành những không gian văn bản hóa tương đồng với Xích Bích và Hoàng Hạc Lâu.',
      additionalReferences: 'Bành Định Cầu chủ biên, Toàn Đường Thi; Đường Khuê Chương biên soạn, Toàn Tống Từ; Stephen Owen, The Great Age of Chinese Poetry: The High T\'ang.',
      conclusion: 'Đọc Đường thi và Tống từ gắn với tọa độ địa lý giúp người học bước qua ranh giới văn bản giấy để thấy cả một bản đồ cảm xúc lịch sử còn sống động dọc các đô thị cổ Trường An, Hoàng Châu và Hàng Châu.'
    },
    {
      id: 'chinese-aesthetic-concepts-qiyun-yijing',
      number: 102,
      category: 'arts',
      categoryLabel: 'Nghệ thuật & Mỹ học',
      titleVi: 'Hệ thống Phạm trù Mỹ học Trung Hoa: Khí Vận Sinh Động, Ý Cảnh, Lưu Bạch và Truyền Thần',
      titleZh: '中国古典美学范畴体系：气韵生动、意境、留白与传神写照',
      titleZhTrad: '中國古典美學範疇體系：氣韻生動、意境、留白與傳神寫照',
      titleEn: 'Core Categories of Classical Chinese Aesthetics: Qiyun Shengdong, Yijing, Liubai, and Chuanshen',
      readMinutes: 13,
      epistemicTag: 'Mỹ học Cổ điển · Lý luận Nghệ thuật',
      abstract: 'Khác với truyền thống mỹ học phương Tây cổ đại vốn khởi đầu từ khái niệm "mô phỏng tự nhiên" (Mimesis của Plato và Aristotle), mỹ học cổ điển Trung Hoa lấy sự giao cảm sinh mệnh giữa chủ thể và vũ trụ làm trục trung tâm. Chuyên luận này giải phẫu bốn phạm trù trụ cột chi phối hội họa, thi ca, thư pháp, âm nhạc và lâm viên suốt hơn 1.500 năm: Khí Vận Sinh Động (Tạ Hách), Truyền Thần Tả Chiếu (Cố Khải Chi), Ý Cảnh (Vương Xương Linh – Vương Quốc Duy) và Lưu Bạch.',
      keyTakeaways: [
        '"Khí Vận Sinh Động" (气韵生动) đứng đầu Lục Pháp của Tạ Hách (thế kỷ 6), đặt sức sống nội tại và nhịp điệu tinh thần cao hơn sự giống nhau cơ học về hình khối.',
        '"Truyền Thần Tả Chiếu" (传神写照) của Cố Khải Chi khẳng định nghệ thuật chân dung không nhằm sao chép da thịt mà bắt trọn thần thái tinh thần qua đôi mắt ("A đổ trung").',
        '"Ý Cảnh" (意境 — giao hòa tình ý chủ thể và cảnh vật khách thể) cùng "Lưu Bạch" (留白 — nghệ thuật chừa khoảng trống gợi mở) biến người thưởng lãm thành đồng tác giả hoàn thiện tác phẩm.'
      ],
      introduction: 'Khi đứng trước một bức tranh thủy mặc Tống – Nguyên chỉ vẽ vài nét núi mờ và một con thuyền nhỏ giữa khoảng giấy trắng mênh mông, khán giả quen với lối tả thực phối cảnh tụ điểm thời Phục Hưng phương Tây thường tự hỏi: vì sao họa sĩ lại bỏ trống hơn nửa bức tranh? Câu trả lời nằm trong bộ từ vựng mỹ học độc đáo được các nhà lý luận hội họa và thi học Trung Hoa đúc kết suốt từ thời Lục Triều đến cận đại.',
      historicalBackground: 'Thời Ngụy – Tấn – Nam Bắc Triều (thế kỷ 3–6) được học giả Tông Bạch Hoa gọi là "thời đại tự giác của nghệ thuật Trung Quốc". Trong bối cảnh Huyền học Đạo gia và Phật học hưng thịnh, họa sĩ Cố Khải Chi (344–406) đề xuất "Dĩ hình tả thần" (mượn hình để tả thần) và "Truyền thần tả chiếu". Đến khoảng năm 500–530, Tạ Hách viết Cổ Họa Phẩm Lục, xác lập "Hội họa Lục pháp" với Khí Vận Sinh Động đứng đầu. Sang thời Đường – Tống, khái niệm "Ý Cảnh" định hình trong thi luận (Vương Xương Linh, Tư Không Đồ) rồi được Vương Quốc Duy hệ thống hóa đỉnh cao trong Nhân Gian Từ Thoại (1908).',
      mainContent: [
        {
          heading: '1. Khí Vận Sinh Động (气韵生动) — Đệ nhất pháp của Tạ Hách',
          body: 'Trong sáu phép vẽ (Lục pháp) của Tạ Hách — Khí vận sinh động, Cốt pháp dụng bút, Ứng vật tượng hình, Tùy loại phú thái, Kinh doanh vị trí và Truyền di mô tả — phép đầu tiên "Khí vận sinh động" bao trùm toàn bộ năm phép kỹ thuật còn lại. "Khí" là sinh lực vận hành trong vũ trụ và trong nét bút; "Vận" là dư âm hài hòa mềm mại lan tỏa sau nét vẽ. Một bức tranh dù đúng tỷ lệ giải phẫu nhưng thiếu "Khí vận" vẫn bị xem là xác chết vô hồn.'
        },
        {
          heading: '2. Truyền Thần Tả Chiếu (传神写照) — Từ Hình tự tới Thần tự',
          body: 'Họa sĩ Đông Tấn Cố Khải Chi nổi tiếng với câu chuyện vẽ chân dung suốt nhiều năm không điểm tròng mắt, bởi theo ông "tứ chi đẹp xấu vốn không quan hệ đến chỗ vi diệu; chỗ truyền thần tả chiếu chính ở trong đôi mắt ấy" (Truyền thần tả chiếu, chính tại a đổ trung). Quan niệm này định hướng toàn bộ hội họa văn nhân về sau: Tô Thức viết "Luận họa dĩ hình tự, kiến dữ nhi đồng lân" (bàn tranh chỉ lấy giống hình thì tầm nhìn như trẻ nhỏ), khẳng định thần thái (Thần tự) vượt lên trên hình thức bề mặt (Hình tự).'
        },
        {
          heading: '3. Ý Cảnh (意境) — Cảnh giới Tình – Cảnh giao dung',
          body: 'Ý Cảnh là sự kết hợp hoàn mỹ giữa "Ý" (tình cảm, tâm thế, tư tưởng chủ quan của nghệ sĩ) và "Cảnh" (thiên nhiên, hình tượng khách quan), hình thành nên một không gian thẩm mỹ "tượng ngoại chi tượng, cảnh ngoại chi cảnh" (hình tượng ngoài hình tượng, cảnh giới ngoài cảnh giới). Vương Quốc Duy trong Nhân Gian Từ Thoại phân chia hai tầng bậc kinh điển: "Hữu ngã chi cảnh" (cảnh nhuốm màu cảm xúc bản ngã, lấy ta nhìn vật) và "Vô ngã chi cảnh" (chủ thể hòa tan thanh tĩnh vào vạn vật, lấy vật nhìn vật).'
        },
        {
          heading: '4. Lưu Bạch (留白) — "Kế bạch đương hắc" và Quyền đồng sáng tạo',
          body: 'Kỹ pháp "Lưu bạch" (chừa trắng) và nguyên tắc "Kế bạch đương hắc" (tính phần trắng quan trọng ngang phần mực đen) bắt nguồn từ triết lý "Hữu vô tương sinh" của Lão Tử và tinh thần Không tính của Thiền tông. Trong tranh của Mã Viễn, Hạ Khuê thời Nam Tống ("Mã nhất giác, Hạ bán biên"), mảng giấy trắng không phải chỗ trống bị bỏ quên mà chính là mây mù, mặt hồ, bầu trời và khoảng lặng để trí tưởng tượng của người xem tự lấp đầy.'
        }
      ],
      theoreticalFramework: 'Từ góc độ Mỹ học So sánh (Lý Trạch Hậu, Tông Bạch Hoa, François Jullien), mỹ học Trung Hoa không xây dựng trên nhị nguyên đối lập chủ thể – khách thể mà vận hành theo cấu trúc "Thiên nhân hợp nhất" và "Hư thực tương sinh". Chính vì vậy, một tác phẩm xuất sắc luôn giữ độ mở ("ý tại ngôn ngoại"), biến thưởng ngoạn nghệ thuật thành một trải nghiệm đối thoại tinh thần liên tục.',
      terminologyAndLiushu: [
        { hanzi: '气韵', pinyin: 'qìyùn', hanViet: 'Khí vận', liushu: 'Khí: Tượng hình; Vận: Hình thanh (bộ Âm)', gloss: 'Sinh khí và dư âm thẩm mỹ sống động toát ra từ toàn thể tác phẩm nghệ thuật.' },
        { hanzi: '意境', pinyin: 'yìjìng', hanViet: 'Ý cảnh', liushu: 'Ý: Hội ý (Âm + Tâm); Cảnh: Hình thanh (bộ Thổ)', gloss: 'Cảnh giới thẩm mỹ giao hòa giữa tâm ý nghệ sĩ và hình tượng ngoại cảnh, gợi mở dư vị vượt ngoài khung hình.' },
        { hanzi: '留白', pinyin: 'liúbái', hanViet: 'Lưu bạch', liushu: 'Lưu: Hình thanh; Bạch: Tượng hình', gloss: 'Nghệ thuật chủ động chừa khoảng trống không đặt nét mực để biểu đạt mây, nước, không gian và độ mở tư tưởng.' },
        { hanzi: '传神', pinyin: 'chuánshén', hanViet: 'Truyền thần', liushu: 'Truyền: Hình thanh (bộ Nhân); Thần: Hình thanh (bộ Thị)', gloss: 'Nắm bắt và chuyển tải trọn vẹn linh hồn, thần thái nội tâm của đối tượng thay vì sao chép cơ học.' },
        { hanzi: '虚实', pinyin: 'xūshí', hanViet: 'Hư thực', liushu: 'Hư: Hình thanh; Thực: Hội ý', gloss: 'Cặp phạm trù đối lập bổ trợ giữa phần hiện hữu rõ nét (Thực) và phần ẩn tàng, gợi mở (Hư).' }
      ],
      primarySources: [
        PQ('谢赫《古画品录》（南齐·约6世纪初）', 'Tạ Hách, Cổ Họa Phẩm Lục (Nam Tề, đầu thế kỷ 6)', 'Xie He, Classified Record of Painters of Former Times (c. early 6th century)', '六法者何？一气韵生动是也，二骨法用笔是也。', 'Liùfǎ zhě hé? Yī qìyùn shēngdòng shì yě, èr gǔfǎ yòngbǐ shì yě.', 'Lục pháp giả hà? Nhất khí vận sinh động thị dã, nhị cốt pháp dụng bút thị dã.', 'Sáu phép vẽ là gì? Thứ nhất là Khí vận sinh động, thứ hai là Cốt pháp dụng bút.', 'What are the Six Principles? First, spirit resonance and life movement; second, bone method in using the brush.'),
        PQ('王国维《人间词话》（1908年）', 'Vương Quốc Duy, Nhân Gian Từ Thoại (1908)', 'Wang Guowei, Poetic Remarks in the Human World (1908)', '有有我之境，有无我之境。有我之境，以我观物，故物皆著我之色彩。', 'Yǒu yǒuwǒ zhī jìng, yǒu wúwǒ zhī jìng. Yǒuwǒ zhī jìng, yǐ wǒ guān wù, gù wù jiē zhuó wǒ zhī sècǎi.', 'Hữu hữu ngã chi cảnh, hữu vô ngã chi cảnh. Hữu ngã chi cảnh, dĩ ngã quan vật, cố vật giai trước ngã chi sắc thái.', 'Có cảnh giới hữu ngã, có cảnh giới vô ngã. Cảnh giới hữu ngã lấy ta nhìn vật, nên vạn vật đều mang sắc thái tâm trạng của ta.', 'There is a realm with the self and a realm without the self. In the realm with the self, one views things through the self, so all things take on the coloring of the self.')
      ],
      sinoVietnameseComparison: 'Mỹ học thơ văn và nghệ thuật cổ truyền Việt Nam tiếp thu sâu sắc tinh thần Ý Cảnh và Lưu Bạch (thể hiện rõ qua thơ mùa thu của Nguyễn Khuyến, tranh lụa Nguyễn Phan Chánh hay kiến trúc mở hòa thiên nhiên của chùa Keo và lăng Tự Đức). Ngày nay, nguyên lý Lưu Bạch và Hư – Thực cũng được ứng dụng rộng rãi trong thiết kế giao diện biên tập tối giản (Editorial UI) và nghệ thuật trưng bày bảo tàng.',
      additionalReferences: 'Tông Bạch Hoa, Mỹ học Tản bộ; Lý Trạch Hậu, Mỹ đích Lịch trình (Con đường của Cái Đẹp); François Jullien, In Praise of Blandness.',
      conclusion: 'Bốn phạm trù Khí Vận, Truyền Thần, Ý Cảnh và Lưu Bạch không phải lý thuyết trừu tượng nằm trên giấy mà là bộ thấu kính thiết thực giúp người thưởng lãm hiện đại đọc hiểu sâu sắc mọi bức quốc họa, bản thư pháp và không gian kiến trúc Đông Á.'
    },
    {
      id: 'calligraphy-masterpieces-three-rarities-lineage',
      number: 103,
      category: 'arts',
      categoryLabel: 'Nghệ thuật & Mỹ học',
      titleVi: 'Phả hệ Thư pháp Trung Hoa: Từ "Tam Hy Đường" đời Tấn, Bút pháp Đường – Tống đến Phong trào Bi Học Nhà Thanh',
      titleZh: '中国书法谱系：从晋代“三希堂”、唐楷宋意到清代碑学复兴',
      titleZhTrad: '中國書法譜系：從晉代「三希堂」、唐楷宋意到清代碑學復興',
      titleEn: 'Lineage of Chinese Calligraphy: From the Jin "Three Rarities" and Tang-Song Masters to Qing Stele Scholarship',
      readMinutes: 14,
      epistemicTag: 'Thư pháp Cổ điển · Lịch sử Nghệ thuật',
      abstract: 'Thư pháp được mệnh danh là "nghệ thuật trừu tượng tối cao" của văn minh Trung Hoa, nơi mỗi nét bút vừa mang nghĩa ngôn từ vừa ghi lại trực tiếp nhịp thở, tốc độ và khí chất của người viết. Chuyên luận này lần theo mạch phả hệ xuyên suốt 1.600 năm: từ ba báu vật thư pháp thời Đông Tấn trong Tam Hy Đường của vua Càn Long, kỷ nguyên pháp độ Khải thư thời Đường (Nhan – Liễu – Âu), trào lưu "Tống thượng ý" (Tô – Hoàng – Mễ – Thái) đến cuộc cách mạng Bi học (khảo cứu văn bia cổ) thời Thanh.',
      keyTakeaways: [
        '"Tam Hy Đường" tại Dưỡng Tâm Điện (Tử Cấm Thành) lưu giữ ba kiệt tác Hành – Thảo thời Đông Tấn: Khoái Tuyết Thời Tình Thiếp (Vương Hy Chi), Trung Thu Thiếp (Vương Hiến Chi) và Bá Viễn Thiếp (Vương Tuân).',
        'Lịch sử thư pháp thường được khái quát thành "Tấn thượng vận (trọng phong thái), Đường thượng pháp (trọng chuẩn mực Khải thư), Tống thượng ý (trọng cá tính văn nhân), Minh – Thanh thượng thái và phục hưng Bi học".',
        'Phong trào Bi học (碑学) thời Thanh (Nguyễn Nguyên, Bao Thế Thần, Khang Hữu Vi) phá vỡ sự độc tôn của Thiếp học (mẫu chữ khắc gỗ sao chép qua nhiều đời) bằng cách trực tiếp học nét đục mạnh mẽ từ bia đá Bắc Ngụy và Hán Lệ.'
      ],
      introduction: 'Trong truyền thống văn nhân Trung Hoa, "thư như kỳ nhân" (nét chữ biểu lộ con người). Không thể xóa sửa như sơn dầu phương Tây, từng đường mực trên giấy Tuyên lưu lại vĩnh viễn tốc độ, lực nhấn, độ khô ướt và tâm thế tức thời của thư gia. Chính vì thế, các bậc đế vương từ Đường Thái Tông đến Thanh Càn Long đều coi việc sưu tầm và giám định pháp thiếp cổ là biểu tượng tối cao của chính thống văn hóa.',
      historicalBackground: 'Sau giai đoạn hình thành văn tự (Giáp cốt, Kim văn, Tiểu Triện, Hán Lệ), thế kỷ 4 thời Đông Tấn đánh dấu bước ngoặt biến chữ viết từ công cụ ghi chép thành nghệ thuật tự giác đỉnh cao với "Thư Thánh" Vương Hy Chi (303–361, tác giả Lan Đình Tự — Thiên hạ đệ nhất Hành thư) và con trai Vương Hiến Chi. Năm 1746, hoàng đế Càn Long cho lập thư phòng nhỏ diện tích chưa đầy 8 mét vuông ở góc tây nam Dưỡng Tâm Điện, đặt tên là "Tam Hy Đường" (Phòng Ba Báu Vật) để trân tàng ba tác phẩm Đông Tấn quý hiếm nhất.',
      mainContent: [
        {
          heading: '1. Tấn thượng vận và Ba kiệt tác Tam Hy Đường',
          body: 'Ba pháp thiếp tạo nên danh xưng Tam Hy Đường gồm: (1) Khoái Tuyết Thời Tình Thiếp (快雪时晴帖, 28 chữ, bản mô đời Đường theo nguyên tác Vương Hy Chi, hiện lưu giữ tại Bảo tàng Cố Cung Đài Bắc), thể hiện phong thái ung dung ấm áp sau trận tuyết; (2) Trung Thu Thiếp (中秋帖, truyền tác phẩm của Vương Hiến Chi, bản lâm đời Tống, hiện tại Bảo tàng Cố Cung Bắc Kinh) gắn liền với kỹ pháp "Nhất bút thư" liền mạch; và (3) Bá Viễn Thiếp (伯远帖, 47 chữ, nguyên tác chân tích duy nhất còn tồn tại của gia tộc họ Vương thời Đông Tấn do Vương Tuân viết, hiện tại Bảo tàng Cố Cung Bắc Kinh).'
        },
        {
          heading: '2. Đường thượng pháp: Nhan – Liễu – Âu và Đỉnh cao Thảo thư',
          body: 'Thời Đường hoàn thiện chuẩn mực Khải thư làm thước đo giáo dục suốt hơn một nghìn năm: Âu Dương Tuân (Cửu Thành Cung Lễ Tuyền Minh) nghiêm cẩn sắc sảo, Nhan Chân Khanh (Đa Bảo Tháp Bi, Tế Điệt Văn Cảo — Thiên hạ đệ nhị Hành thư) hùng tráng đôn hậu ("Nhan cân"), Liễu Công Quyền (Huyền Bí Tháp Bi) gân cốt cứng cỏi ("Liễu cốt"). Song song đó, Trương Húc và Hoài Tố (Tự Tự Thiếp) đẩy Cuồng thảo lên đỉnh cao giải phóng cảm xúc như vũ điệu kiếm pháp.'
        },
        {
          heading: '3. Tống thượng ý: Tứ Đại Gia Tô – Hoàng – Mễ – Thái',
          body: 'Đối mặt với đỉnh cao pháp độ không thể vượt qua của Khải thư đời Đường, các đại thư gia Bắc Tống chuyển trọng tâm sang "Ý" (cá tính học vấn và khí độ văn nhân). Bốn bậc thầy lớn gồm Tô Thức (Hàn Thực Thiếp — Thiên hạ đệ tam Hành thư), Hoàng Đình Kiên (bút pháp vươn dài phóng khoáng lấy cảm hứng từ mái chèo), Mễ Phất ("bát diện xuất phong" biến hóa thần tốc) và Thái Tương đặt nền móng cho dòng thư pháp văn nhân giàu bản sắc cá nhân.'
        },
        {
          heading: '4. Cuộc cách mạng Bi học (碑学) thời Thanh: Giải phóng bút pháp từ Bia đá',
          body: 'Đến cuối thời Minh – đầu thời Thanh, việc sao chép đi sao chép lại các bộ pháp thiếp khắc gỗ (Thiếp học 帖学) và lối viết "Quán các thể" tròn trịa đồng phục phục vụ thi cử đã làm thư pháp mất dần sinh khí. Được tiếp sức bởi Khảo chứng học và hàng loạt phát hiện bia đá Hán – Ngụy (như Trương Mãnh Long Bi, Trịnh Văn Công Bi), các học giả Nguyễn Nguyên (Nam Bắc Thư Phái Luận), Bao Thế Thần và Khang Hữu Vi phát động phong trào Bi học, đưa nét khắc vuông vức, cổ kính, giàu lực kim thạch vào bút lông, mở đường cho các đại sư cận đại như Triệu Chi Khiêm, Ngô Xương Thạc và Vu Hữu Nhậm.'
        }
      ],
      theoreticalFramework: 'Dưới góc nhìn lịch sử nghệ thuật, sự vận động giữa Thiếp học (mềm mại, uyển chuyển trên giấy lụa) và Bi học (mạnh mẽ, góc cạnh trên bia đá) minh họa quy luật biện chứng của truyền thống: mỗi khi một chuẩn mực thẩm mỹ trở nên xơ cứng vì sao chép lặp lại, giới nghệ sĩ lại quay về khai thác tầng cổ xưa hơn của lịch sử để tái tạo năng lượng sáng tạo mới.',
      terminologyAndLiushu: [
        { hanzi: '行书', pinyin: 'xíngshū', hanViet: 'Hành thư', liushu: 'Hành: Tượng hình (ngã tư đường); Thư: Hình thanh', gloss: 'Thể chữ trung gian giữa Khải thư và Thảo thư, vừa trôi chảy giàu nhịp điệu vừa giữ độ rõ ràng dễ đọc.' },
        { hanzi: '法帖', pinyin: 'fǎtiè', hanViet: 'Pháp thiếp', liushu: 'Pháp: Hội ý; Thiếp: Hình thanh (bộ Cân)', gloss: 'Tác phẩm thư pháp mẫu mực của các danh gia xưa được lưu truyền hoặc khắc in làm chuẩn để hậu thế học theo.' },
        { hanzi: '碑学', pinyin: 'bēixué', hanViet: 'Bi học', liushu: 'Bi: Hình thanh (bộ Thạch); Học: Hội ý', gloss: 'Trường phái thư pháp thời Thanh lấy bia đá cổ Hán – Ngụy – Lục Triều làm mẫu mực thay cho Thiếp học truyền thống.' },
        { hanzi: '馆阁体', pinyin: 'guǎngétǐ', hanViet: 'Quán các thể', liushu: 'Thuật ngữ lịch sử khoa cử Minh – Thanh', gloss: 'Lối viết Khải thư đen bóng, vuông đều chuẩn mực tuyệt đối dùng trong thi đình Minh – Thanh nhưng bị phê phán thiếu cá tính.' },
        { hanzi: '临摹', pinyin: 'línmó', hanViet: 'Lâm mô', liushu: 'Lâm: Hội ý (nhìn mẫu viết theo); Mô: Hình thanh (đồ trực tiếp qua giấy mỏng)', gloss: 'Hai phương pháp học thư pháp cổ điển: Mô để nắm cấu trúc hình nét, Lâm để hấp thu khí vận và bút pháp.' }
      ],
      primarySources: [
        PQ('王羲之《兰亭集序》（东晋·353年）', 'Vương Hy Chi, Lan Đình Tập Tự (Đông Tấn, năm 353)', 'Wang Xizhi, Preface to the Poems Composed at the Orchid Pavilion (353 CE)', '永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。', 'Yǒnghé jiǔ nián, suì zài guǐchǒu, mùchūn zhī chū, huì yú Kuàijī Shānyīn zhī Lántíng, xiūxì shì yě.', 'Vĩnh Hòa cửu niên, tuế tại Quý Sửu, mộ xuân chi sơ, hội ư Cối Kê Sơn Âm chi Lan Đình, tu hý sự dã.', 'Năm Vĩnh Hòa thứ 9, năm Quý Sửu, đầu cuối xuân, tụ họp tại Lan Đình đất Sơn Âm quận Cối Kê để làm lễ thanh tẩy cầu phúc.', 'In the ninth year of Yonghe, the year of Guichou, at the beginning of late spring, we gathered at the Orchid Pavilion in Shanyin, Kuaiji, to perform the purification rite.'),
        PQ('颜真卿《祭侄文稿》（唐·758年）', 'Nhan Chân Khanh, Tế Điệt Văn Cảo (nhà Đường, năm 758)', 'Yan Zhenqing, Draft of a Requiem to My Nephew (758 CE)', '呜呼哀哉！尚飨！', 'Wūhū āizāi! Shàngxiǎng!', 'Ô hô ai tai! Thượng hưởng!', 'Than ôi đau xót biết bao! Xin hãy chứng giám hưởng lễ!', 'Alas, how grievous! May you partake of this offering!')
      ],
      sinoVietnameseComparison: 'Việt Nam sở hữu truyền thống thư pháp Hán – Nôm sâu dày gắn với văn bia (như Bia Vĩnh Lăng do Nguyễn Trãi soạn văn, Bia Tiến sĩ Văn Miếu Thăng Long) và các bậc danh sĩ nổi tiếng về bút pháp như Cao Bá Quát ("Văn như Siêu, Quát vô tiền Hán"). Ngày nay, nghệ thuật thư pháp Việt còn phát triển song song cả dòng thư pháp Hán – Nôm cổ điển lẫn dòng thư pháp chữ Quốc ngữ sáng tạo trên nền bút lông và giấy dó bản địa.',
      additionalReferences: 'Nguyễn Nguyên, Nam Bắc Thư Phái Luận; Khang Hữu Vi, Quảng Nghệ Chu Song Tiếp; Bảo tàng Cố Cung Bắc Kinh & Bảo tàng Cố Cung Đài Bắc - Hồ sơ Tam Hy Đường.',
      conclusion: 'Nhìn lại phả hệ thư pháp từ Tam Hy Đường đến Bi học nhà Thanh cho thấy chữ Hán vượt lên công cụ truyền tin thuần túy để trở thành không gian nơi kỹ thuật cầm bút, lịch sử văn bia và nhân cách người viết hòa làm một.'
    },
    {
      id: 'chinese-mythology-shanhaijing-kunlun-penglai',
      number: 104,
      category: 'literature',
      categoryLabel: 'Văn học & Thi ca',
      titleVi: 'Thần thoại Khởi nguyên Trung Hoa trong 《Sơn Hải Kinh》 và 《Hoài Nam Tử》: Không gian Côn Lôn, Bồng Lai và Thần linh Khai thiên',
      titleZh: '中国创世神话谱系：《山海经》《淮南子》中的昆仑、蓬莱与开天辟地',
      titleZhTrad: '中國創世神話譜系：《山海經》《淮南子》中的昆崙、蓬萊與開天闢地',
      titleEn: 'Foundational Chinese Mythology in the Shanhaijing and Huainanzi: Kunlun, Penglai, and Cosmic Creation',
      readMinutes: 13,
      epistemicTag: 'Thần thoại Học · Văn hiến Cổ đại',
      abstract: 'Khác với thần thoại Hy Lạp được hệ thống hóa sớm thành một gia phả thống nhất trên đỉnh Olympus qua sử thi Homer và Hesiod, thần thoại Trung Hoa cổ đại tồn tại phân tán trong các thư tịch địa lý – vu thuật, triết học và sử học như Sơn Hải Kinh, Hoài Nam Tử, Sở Từ · Thiên Vấn và Tam Ngũ Lịch Ký. Chuyên luận này phục dựng cấu trúc vũ trụ thần thoại xoay quanh hai cực không gian thiêng (Côn Lôn phương Tây và Bồng Lai phương Đông) cùng tinh thần nhân bản kiên cường của các hình tượng Nữ Oa, Hậu Nghệ, Tinh Vệ, Khoa Phụ và Đại Vũ.',
      keyTakeaways: [
        'Sơn Hải Kinh (18 quyển: Sơn Kinh và Hải Kinh) là kho tàng thần thoại – địa lý tưởng tượng và tín ngưỡng vu thuật cổ xưa bậc nhất thời Chiến Quốc – Tần Hán, lưu giữ hình tượng Tây Vương Mẫu, Tinh Vệ, Khoa Phụ và Hình Thiên.',
        'Hoài Nam Tử (biên soạn dưới sự bảo trợ của Hoài Nam Vương Lưu An thời Tây Hán) bảo lưu đầy đủ bốn đại thần thoại trụ cột: Nữ Oa vá trời, Hậu Nghệ bắn chín mặt trời, Cộng Công húc gãy núi Bất Chu và Hằng Nga bay lên cung trăng.',
        'Vũ trụ thần thoại Trung Hoa chia theo hai trục thiêng đối ứng: trục Tây Bắc — núi Côn Lôn (trục nối Trời Đất của Tây Vương Mẫu) và trục Đông Hải — ba đảo tiên Bồng Lai, Phương Trượng, Doanh Châu.'
      ],
      introduction: 'Đọc thần thoại khởi nguyên Trung Hoa là đọc những mảnh ghép rực rỡ phản ánh cách cư dân thượng cổ vùng Hoàng Hà và Trường Giang đối diện với thiên tai, lũ lụt, hạn hán và khát vọng trường sinh. Một đặc trưng sâu sắc của thần thoại Trung Hoa là "lịch sử hóa thần thoại" (cách các nhà Nho biến thần linh thành các bậc thánh đế thời cổ) kết hợp với tinh thần đề cao ý chí con người chinh phục nghịch cảnh tự nhiên.',
      historicalBackground: 'Các mảnh thần thoại sớm nhất xuất hiện trên đồ ngọc, đồ đồng và trong Sở Từ · Thiên Vấn của Khuất Nguyên (thế kỷ 4–3 TCN), nơi nhà thơ đặt hơn 170 câu hỏi dồn dập về nguồn gốc vũ trụ và cổ sử. Bộ Sơn Hải Kinh được Lưu Hâm thời Tây Hán chỉnh lý thành 18 quyển (5 quyển Sơn Kinh và 13 quyển Hải Kinh). Sang thời Tây Hán (năm 139 TCN), Hoài Nam Tử hệ thống hóa nhiều tích thần thoại để luận giải triết lý vũ trụ. Đến thời Tam Quốc (thế kỷ 3 CN), Từ Chỉnh ghi chép hoàn chỉnh thần thoại Bàn Cổ khai thiên lập địa trong Tam Ngũ Lịch Ký.',
      mainContent: [
        {
          heading: '1. Sơn Hải Kinh: Địa lý Huyền thoại và Sinh vật Biểu tượng',
          body: 'Sơn Hải Kinh không phải sách kể chuyện liên tục mà là bản đồ mô tả các dãy núi, dòng sông, dược thảo, khoáng sản và thần thú cổ đại (như Cửu Vĩ Hồ ở núi Thanh Khâu, Ứng Long, Chúc Long mở mắt thành ngày nhắm mắt thành đêm). Chính trong Bắc Sơn Kinh và Hải Ngoại Bắc Kinh xuất hiện hai biểu tượng bất khuất kinh điển: chim Tinh Vệ (con gái Viêm Đế chết đuối ở Đông Hải) ngày ngày ngậm đá lấp biển, và người khổng lồ Khoa Phụ đuổi theo Mặt Trời đến chết khát, gậy chống hóa thành rừng đào Đặng Lâm.'
        },
        {
          heading: '2. Hoài Nam Tử và Bốn đại tự sự cứu thế',
          body: 'Thiên Lãm Minh Huấn, Thiên Văn Huấn và Bản Kinh Huấn trong Hoài Nam Tử bảo lưu sống động nhất tinh thần anh hùng trị thủy – cứu dân của thần thoại Hoa Hạ. Khi Cộng Công tranh ngôi Chuyên Húc húc gãy cột trời núi Bất Chu làm trời nghiêng Tây Bắc, đất lún Đông Nam (giải thích hiện tượng sông Trung Quốc đều chảy về Đông), Nữ Oa luyện đá ngũ sắc vá trời và chặt chân rùa ngao chống bốn cực. Khi mười mặt trời cùng xuất hiện thiêu cháy mùa màng, Hậu Nghệ giương cung bắn rụng chín mặt trời và trừ ác thú, giữ lại một mặt trời cho muôn dân.'
        },
        {
          heading: '3. Hai cực không gian thiêng: Côn Lôn phương Tây và Bồng Lai phương Đông',
          body: 'Trong tưởng tượng địa lý cổ đại, phía Tây cao nguyên là hệ thống thần thoại Côn Lôn (昆仑) — "Đế chi hạ đô" (kinh đô dưới trần của Thiên Đế), nơi Tây Vương Mẫu cai quản vườn đào bất tử và thuốc trường sinh. Đối xứng sang phía Đông ngoài biển Bột Hải – Hoàng Hải là hệ thống thần thoại Bồng Lai (蓬莱) gồm ba hòn đảo tiên Bồng Lai, Phương Trượng và Doanh Châu, nơi Tần Thủy Hoàng và Hán Vũ Đế từng phái phương sĩ Từ Phúc ra khơi tìm tiên dược, tạo nguồn cảm hứng bất tận cho văn học và nghệ thuật Đạo giáo.'
        },
        {
          heading: '4. Tinh thần nhân bản và sự chuyển hóa sang Văn hóa Đương đại',
          body: 'Điểm chung nổi bật ở hầu hết các nhân vật thần thoại Trung Hoa — từ Nữ Oa, Đại Vũ trị thủy 13 năm ba lần qua cửa nhà không vào, đến Hậu Nghệ, Tinh Vệ — là tinh thần hy sinh vì cộng đồng và ý chí không khuất phục trước định mệnh. Ngày nay, toàn bộ kho tàng tên gọi thần thoại này được Trung Quốc tái sinh thành hệ thống danh xưng cho chương trình khoa học hiện đại: Hằng Nga (thám hiểm Mặt Trăng), Chúc Dung (xe tự hành Sao Hỏa), Thiên Cung (trạm vũ trụ), Khoa Phụ (vệ tinh quan sát Mặt Trời) và Côn Lôn (trạm nghiên cứu Nam Cực).'
        }
      ],
      theoreticalFramework: 'Các nhà thần thoại học hiện đại như Viên Kha và Mao Thuẫn chỉ ra cơ chế "Nhân hóa thần linh và Lịch sử hóa thần thoại" (Historicization of Myth) trong văn hóa Trung Hoa: tầng lớp sử gia Nho giáo đã gọt bỏ yếu tố kỳ dị của Sơn Hải Kinh để biến Hoàng Đế, Viêm Đế, Nghiêu, Thuấn, Đại Vũ thành các minh quân mẫu mực, làm mờ đi tính sử thi tôn giáo nhưng lại củng cố truyền thống lý tính nhân văn rất sớm.',
      terminologyAndLiushu: [
        { hanzi: '昆仑', pinyin: 'Kūnlún', hanViet: 'Côn Lôn', liushu: 'Từ liên miên cổ chỉ ngọn núi thiêng cao vút', gloss: 'Dãy núi thần thoại trung tâm vũ trụ phương Tây, nơi kết nối Trời – Đất và cư ngụ của Tây Vương Mẫu.' },
        { hanzi: '蓬莱', pinyin: 'Pénglái', hanViet: 'Bồng Lai', liushu: 'Bồng & Lai: Hình thanh (bộ Thảo)', gloss: 'Một trong ba hòn đảo tiên ngoài Đông Hải trong truyền thuyết phương sĩ Tần – Hán.' },
        { hanzi: '补天', pinyin: 'bǔtiān', hanViet: 'Bổ thiên', liushu: 'Bổ: Hình thanh (bộ Y); Thiên: Hội ý/Tượng hình', gloss: 'Điển tích Nữ Oa luyện đá ngũ sắc vá trời, biểu tượng cho tinh thần cứu thế và tái lập trật tự vũ trụ.' },
        { hanzi: '精卫', pinyin: 'Jīngwèi', hanViet: 'Tinh Vệ', liushu: 'Tên loài chim thần thoại mô phỏng tiếng kêu trong Sơn Hải Kinh', gloss: 'Điển tích chim Tinh Vệ ngậm đá lấp biển Đông, biểu trưng ý chí bền bỉ không chịu khuất phục.' },
        { hanzi: '天问', pinyin: 'Tiānwèn', hanViet: 'Thiên Vấn', liushu: 'Thiên: Hội ý; Vấn: Hình thanh', gloss: 'Trường thi nổi tiếng của Khuất Nguyên đặt hàng trăm câu hỏi về tạo hóa, thiên văn và thần thoại cổ sử.' }
      ],
      primarySources: [
        PQ('《山海经·北山经》（战国至秦汉）', 'Sơn Hải Kinh, Bắc Sơn Kinh (Chiến Quốc – Tần Hán)', 'Classic of Mountains and Seas (Shanhaijing), Classic of the Northern Mountains', '炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。', 'Yándì zhī shàonǚ, míng yuē Nǚwá. Nǚwá yóu yú Dōnghǎi, nì ér bù fǎn, gù wéi Jīngwèi, cháng xián Xīshān zhī mùshí, yǐ yīn yú Dōnghǎi.', 'Viêm Đế chi thiếu nữ, danh viết Nữ Oa. Nữ Oa du ư Đông Hải, nịch nhi bất phản, cố vi Tinh Vệ, thường hàm Tây Sơn chi mộc thạch, dĩ nhân ư Đông Hải.', 'Con gái út của Viêm Đế tên là Nữ Oa, ra chơi biển Đông bị chết đuối không trở về, bèn hóa thành chim Tinh Vệ, thường ngậm cành cây hòn đá từ núi Tây để lấp biển Đông.', 'The youngest daughter of the Flame Emperor, named Nüwa, drowned while swimming in the Eastern Sea and never returned; transformed into the Jingwei bird, she forever carries twigs and stones from the Western Mountains to fill the Eastern Sea.'),
        PQ('《淮南子·览冥训》（西汉·前139年）', 'Hoài Nam Tử, Lãm Minh Huấn (Tây Hán, năm 139 TCN)', 'Huainanzi, Chapter 6: Peering into the Obscure (139 BCE)', '于是女娲炼五色石以补苍天，断鳌足以立四极。', 'Yúshì Nǚwā liàn wǔsèshí yǐ bǔ cāngtiān, duàn áozú yǐ lì sìjí.', 'Ư thị Nữ Oa luyện ngũ sắc thạch dĩ bổ thương thiên, đoạn ngao túc dĩ lập tứ cực.', 'Bấy giờ Nữ Oa luyện đá năm màu để vá trời xanh, chặt chân rùa ngao khổng lồ để dựng bốn cột chống trời.', 'Thereupon Nüwa smelted five-colored stones to mend the azure sky, and cut off the legs of the giant sea turtle to prop up the four poles of the earth.')
      ],
      sinoVietnameseComparison: 'Thần thoại khởi nguyên Việt Nam trong Lĩnh Nam Chích Quái cũng chia sẻ tinh thần trị thủy, chống thiên tai và nguồn cội anh hùng (như Lạc Long Quân – Âu Cơ với bọc trăm trứng, Sơn Tinh – Thủy Tinh trị thủy sông Hồng, Thánh Gióng chống ngoại xâm), đồng thời lưu giữ sắc thái giao thoa biển – núi vùng Đông Nam Á, tạo nên cuộc đối thoại thần thoại học phong phú với khu vực Hoa Hạ.',
      additionalReferences: 'Viên Kha, Trung Quốc Thần thoại Truyền thuyết; Anne Birrell, Chinese Mythology: An Introduction; Khuất Nguyên, Sở Từ · Thiên Vấn.',
      conclusion: 'Thần thoại Sơn Hải Kinh và Hoài Nam Tử là tầng trầm tích tưởng tượng nguyên sơ nhất của văn minh Trung Hoa — nơi nỗi sợ trước thiên nhiên được chuyển hóa thành bản lĩnh kiến tạo và nguồn cảm hứng đặt tên cho cả các con tàu vũ trụ thế kỷ 21.'
    }
  ];

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
  for (i = 0; i < NEW_ARTICLES.length; i++) {
    if (!existingIds[NEW_ARTICLES[i].id]) {
      window.CCE_ARTICLES.push(NEW_ARTICLES[i]);
      existingIds[NEW_ARTICLES[i].id] = true;
    }
  }
})();
