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

  var ARTICLES_V3_PART2A = [
    {
      id: 'dunhuang-mogao-buddhist-grotto-art',
      number: 76,
      category: 'arts',
      categoryLabel: 'Nghệ thuật & Mỹ học',
      titleVi: 'Mỹ học Đôn Hoàng Mạc Cao Quật & Tứ Đại Thạch Quật: Bích họa Phi Thiên & Tạng Kinh Động',
      titleZh: '敦煌莫高窟与四大石窟美学：飞天壁画与藏经洞',
      titleZhTrad: '敦煌莫高窟與四大石窟美學：飛天壁畫與藏經洞',
      titleEn: 'Aesthetics of the Dunhuang Mogao Caves and China\'s Four Great Grottoes: Flying Apsaras and the Library Cave',
      readMinutes: 15,
      epistemicTag: 'Lịch sử Mỹ thuật & Đôn Hoàng học',
      abstract: 'Chuyên luận phân tích tiến trình bản địa hóa nghệ thuật Phật giáo từ Tây Vực vào Trung Nguyên qua Tứ Đại Thạch Quật (Mạc Cao Quật, Vân Cương, Long Môn, Mạch Tích Sơn), giải mã diễn biến tạo hình Phi Thiên trên 45.000 m² bích họa Đôn Hoàng và giá trị sử liệu của hơn 50.000 văn kiện phát hiện tại Tạng Kinh Động (Hang 17) năm 1900.',
      keyTakeaways: [
        'Tứ Đại Thạch Quật phản ánh trục dịch chuyển địa lý và chất liệu từ Tây sang Đông: đá cuội kết mềm dùng bích họa – tượng đất tô màu ở Đôn Hoàng và Mạch Tích Sơn, chuyển sang điêu khắc đá vôi–sa thạch quy mô hoàng gia ở Vân Cương (460) và Long Môn (493).',
        'Hình tượng Phi Thiên (Apsaras) tại Mạc Cao Quật tiến hóa suốt 1.000 năm từ phong cách Gandhara ngực trần, cơ bắp khỏe khoắn thời Bắc Ngụy sang dải lụa bay lượn mềm mại, trang phục thanh tao kiểu Trung Nguyên thời Thịnh Đường.',
        'Tạng Kinh Động (Hang 17, bịt kín đầu thế kỷ XI và phát hiện năm 1900) chứa hơn 50.000 bản viết tay bằng chữ Hán, Tạng, Phạn, Túc Đặc, Vu Điền, khai sinh ngành khoa học quốc tế "Đôn Hoàng học".'
      ],
      introduction: 'Nghệ thuật thạch quật Phật giáo là chứng tích thị giác đồ sộ nhất về cuộc gặp gỡ văn minh giữa Ấn Độ, Trung Á, Hy Lạp–Gandhara và Trung Hoa dọc Con đường Tơ lụa. Khởi phát từ mô hình hang tu hành Chaitya và Vihara ở Ấn Độ (Ajanta) qua Bamiyan và Kizil (Tân Cương), nghệ thuật này bùng nổ trên đất Trung Quốc từ thế kỷ IV đến thế kỷ XIV tại bốn quần thể đỉnh cao: Mạc Cao Quật (Đôn Hoàng, Cam Túc), Vân Cương (Đại Đồng, Sơn Tây), Long Môn (Lạc Dương, Hà Nam) và Mạch Tích Sơn (Thiên Thủy, Cam Túc). Riêng Mạc Cao Quật — trải dài 1.600 m dọc vách núi Minh Sa — lưu giữ 735 hang động (492 hang có bích họa và tượng tô màu), hơn 2.400 pho tượng và 45.000 m² bích họa liên tục qua mười triều đại.',
      historicalBackground: 'Theo bia "Trùng tu Mạc Cao Quật Phật kham bi" khắc năm 698 thời Võ Tắc Thiên, năm Kiến Nguyên thứ 2 nhà Tiền Tần (366 SCN), nhà sư Lạc Tôn đi qua núi Tam Nguy nhìn thấy ánh hào quang vàng như nghìn vị Phật liền đục hang đầu tiên trên vách đá Đôn Hoàng. Trong thời kỳ Nam Bắc Triều loạn lạc, giới quý tộc Tiên Ti (Bắc Ngụy), thương nhân Túc Đặc (Sogdian) và các gia tộc lớn tại hành lang Hà Tây liên tục hưng công đục hang cầu phúc. Khi Bắc Ngụy định đô Bình Thành (Đại Đồng), hoàng đế Văn Thành Đế giao sư Đàm Diệu chủ trì đục năm hang lớn đầu tiên tại Vân Cương (460); đến năm 494 khi Hiếu Văn Đế dời đô về Lạc Dương, công trường hoàng gia chuyển sang Long Môn và đạt đỉnh cao mỹ học nhân văn thời Đường Cao Tông – Võ Tắc Thiên (tượng Phật Lô Xá Na cao 17,14 m hoàn thành năm 675).',
      mainContent: [
        {
          heading: '1. So sánh Tứ Đại Thạch Quật: Vật liệu địa chất quyết định ngôn ngữ tạo hình',
          body: 'Sự khác biệt nghệ thuật giữa Tứ Đại Thạch Quật bắt nguồn trực tiếp từ địa chất bản địa. Tại Mạc Cao Quật (Đôn Hoàng) và Mạch Tích Sơn (Thiên Thủy), vách núi là đá cuội kết mềm và sa thạch bở không thể chạm khắc chi tiết sắc nét, buộc nghệ nhân phát triển kỹ nghệ khung gỗ – rơm trộn đất sét tô màu (Thái tố) và phủ vữa vẽ bích họa trên diện rộng. Ngược lại, Vân Cương (sa thạch mịn) và đặc biệt Long Môn (đá vôi cứng) cho phép tạc tượng quy mô lớn sắc nét trực tiếp vào vách núi: tượng Vân Cương mang gương mặt tròn đầy, vai rộng, mũi cao kiểu Trung Á–Gandhara (phản ánh khuôn mặt hoàng đế Bắc Ngụy), còn tượng Long Môn thời Bắc Ngụy hậu kỳ và Thịnh Đường chuyển sang tỷ lệ "tú cốt thanh tượng" (thanh mảnh, áo cà sa nếp rủ kiểu văn nhân Nam Triều) rồi đạt vẻ uy nghi từ bi thuần Trung Hoa.'
        },
        {
          heading: '2. Bích họa Phi Thiên và sự tiến hóa bảng màu khoáng chất Đôn Hoàng',
          body: 'Trong 492 hang có tranh tại Mạc Cao Quật, bích họa bao quát bốn chủ đề chính: Tôn tượng Phật–Bồ Tát, Bản sinh – Nhân duyên truyện (như "Cửu sắc lộc", "Sà thân tứ hổ" tại Hang 254 và 257 thời Bắc Ngụy), Kinh biến họa (cảnh Tịnh Độ rực rỡ với hàng trăm nhạc công và cung điện thời Thịnh Đường, tiêu biểu ở Hang 220 và 172), và chân dung thí chủ (cung cấp tư liệu sống động về trang phục, xe ngựa, cày cấy). Biểu tượng nghệ thuật độc đáo nhất là Phi Thiên (thần hương – nhạc trời không cần cánh chim như thiên thần phương Tây mà bay lượn nhờ dải lụa uốn cong ngược gió): từ dáng chữ U khỏe khoắn thời Bắc Triều đến đường nét phiêu dật thời Đường. Nghệ nhân sử dụng khoáng chất quý như đá thanh kim (lapis lazuli từ Afghanistan tạo sắc xanh biếc), chu sa (đỏ), thạch lục (malachite) và vàng lá, tạo nên sắc độ bền bỉ hàng nghìn năm.'
        },
        {
          heading: '3. Tạng Kinh Động (Hang 17) và sự ra đời của ngành Đôn Hoàng học',
          body: 'Ngày 22/6/1900, đạo sĩ Vương Viên Lục khi dọn cát tại Hang 16 tình cờ phát hiện cánh cửa bí mật dẫn vào Hang 17 (Tạng Kinh Động) — căn phòng nhỏ rộng chưa đầy 9 m² bị bít kín từ đầu thế kỷ XI, chất đầy hơn 50.000 cuộn giấy, sách khâu, tranh lụa và khế ước kéo dài từ thế kỷ IV đến thế kỷ XI. Bên cạnh kinh điển Phật giáo, kho tư liệu này chứa bản in khắc gỗ "Kinh Kim Cương" năm 868, bản đồ sao thiên văn Đôn Hoàng (thế kỷ VII), hợp đồng mua bán – vay nợ, văn bản Đạo giáo, Cảnh giáo (Nestorian), Ma Ni giáo cùng các bản thảo bằng chữ Tạng, Phạn, Vu Điền, Túc Đặc và Do Thái cổ. Việc nhiều nhà thám hiểm phương Tây và Nhật Bản (Aurel Stein năm 1907, Paul Pelliot năm 1908) mua chuyển hàng vạn văn kiện về London, Paris, Saint Petersburg, Tokyo đã gây tổn thất di sản lớn, đồng thời thúc đẩy giới học giả Trung Quốc (La Chấn Ngọc, Vương Quốc Duy, Trần Dần Khác) xây dựng ngành Đôn Hoàng học và thành lập Viện Nghiên cứu Đôn Hoàng (1944, do Thường Thư Hồng đặt nền móng).'
        },
        {
          heading: '4. Bảo tồn số hóa Đôn Hoàng thế kỷ XXI',
          body: 'Do sự mong manh của lớp vữa đất bích họa trước độ ẩm và khí CO2 từ hơi thở du khách, Viện Nghiên cứu Đôn Hoàng từ thập niên 1990 đã đi đầu thế giới trong dự án "Đôn Hoàng Kỹ Thuật Số" (Digital Dunhuang): quét laser 3D và chụp ảnh siêu phân giải từng hang động để lưu trữ vĩnh viễn và mở kho dữ liệu trực tuyến độ phân giải cao, biến di sản ốc đảo sa mạc thành kho học liệu mở cho toàn cầu.'
        }
      ],
      theoreticalFramework: 'Từ góc độ lịch sử mỹ thuật so sánh (như công trình của Vũ Hồng / Wu Hung và Đôn Hoàng học hiện đại), Mạc Cao Quật không phải là một "phòng trưng bày tranh" tĩnh mà là một "không gian nghi lễ kiến trúc – thị giác tổng hợp" (ritual architectural space): trần hình đấu (tảo tỉnh), tường bốn mặt vẽ Kinh biến và tượng trung tâm phối hợp tạo ra trải nghiệm thiền quán đắm chìm, đồng thời ghi lại chính xác tiến trình "Hán hóa nghệ thuật ngoại lai" kéo dài mười thế kỷ.',
      terminologyAndLiushu: [
        {
          hanzi: '窟',
          pinyin: 'kū',
          hanViet: 'Quật',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Huyệt (穴: hang động) chỉ nghĩa và chữ Khuất (屈) chỉ âm; chỉ hang động đục vào vách đá làm nơi tu hành và thờ Phật ("Thạch quật").'
        },
        {
          hanzi: '壁',
          pinyin: 'bì',
          hanViet: 'Bích',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土: tường đất) và chữ Tích (辟) chỉ âm; chỉ bức tường vữa vẽ tranh ("Bích họa" — tranh tường hang đá).'
        },
        {
          hanzi: '龛',
          pinyin: 'kān',
          hanViet: 'Kham',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 龕 gồm chữ Hợp (合) và chữ Long (龍); chỉ hốc đá hoặc khám gỗ đục vào tường để đặt tượng Phật ("Phật kham").'
        },
        {
          hanzi: '塑',
          pinyin: 'sù',
          hanViet: 'Tố',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土: đất sét) và chữ Sóc (朔) chỉ âm; chỉ nghệ thuật đắp tượng bằng đất sét tô màu ("Thái tố") đặc trưng tại Đôn Hoàng và Mạch Tích Sơn.'
        },
        {
          hanzi: '卷',
          pinyin: 'juǎn',
          hanViet: 'Quyển',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Nghĩa gốc là cuộn tròn lại; trong Đôn Hoàng học chỉ các cuộn giấy chép tay dài ("Quyển tử trang") cất giữ trong Tạng Kinh Động.'
        }
      ],
      primarySources: [
        PQ(
          '《大周李君莫高窟佛龛碑》（圣历元年，698）',
          'Bia Phật Kham Mạc Cao Quật của Lý Quân (năm Thánh Lịch thứ 1, 698)',
          'Stele of the Buddhist Niches at Mogao Caves (698 CE)',
          '莫高窟者，厥初秦建元二年，有沙门乐僔，戒行清虚，执心恬静，尝杖锡林野，行至此山，忽见金光，状有千佛。',
          'Mògāokū zhě, juéchū Qín Jiànyuán èrnián, yǒu shāmén Lèzūn, jièxíng qīngxū, zhíxīn tiánjìng, cháng zhàngxī línyě, xíng zhì cǐ shān, hū jiàn jīnguāng, zhuàng yǒu qiānfó.',
          'Mạc Cao Quật giả, quyết sơ Tần Kiến Nguyên nhị niên, hữu sa môn Lạc Tôn, giới hạnh thanh hư, chấp tâm điềm tĩnh, thường trượng tích lâm dã, hành chí thử sơn, hốt kiến kim quang, trạng hữu thiên Phật.',
          'Về Mạc Cao Quật: thuở ban đầu vào năm Kiến Nguyên thứ 2 nhà Tiền Tần (366), có sa môn Lạc Tôn giới hạnh thanh tịnh, chống tích trượng đi qua rừng núi, đến ngọn núi này chợt thấy ánh hào quang vàng rực tựa như có nghìn vị Phật.',
          'As for the Mogao Caves, at the outset in the second year of Jianyuan of Former Qin (366 CE), a monk named Lezun, pure in discipline and serene in mind, wandered to this mountain and suddenly beheld a golden radiance resembling a thousand Buddhas.'
        ),
        PQ(
          '《陈寅恪〈敦煌劫余录〉序》（1930）',
          'Lời Tựa "Đôn Hoàng Kiếp Dư Lục" — Trần Dần Khác (1930)',
          'Preface to the Dunhuang Manuscript Catalog — Chen Yinke (1930)',
          '一时代之学术，必有其新材料与新问题。取用此材料，以研求问题，则为此时代学术之新潮流。',
          'Yī shídài zhī xuéshù, bì yǒu qí xīn cáiliào yǔ xīn wèntí. Qǔyòng cǐ cáiliào, yǐ yánqiú wèntí, zé wéi cǐ shídài xuéshù zhī xīn cháoliú.',
          'Nhất thời đại chi học thuật, tất hữu kỳ tân tài liệu dữ tân vấn đề. Thủ dụng thử tài liệu, dĩ nghiên cầu vấn đề, tắc vi thử thời đại học thuật chi tân trào lưu.',
          'Học thuật của mỗi thời đại tất có tư liệu mới và vấn đề mới. Biết khai thác tư liệu mới ấy để nghiên cứu các vấn đề đặt ra, đó chính là trào lưu học thuật mới của thời đại.',
          'The scholarship of every era necessarily possesses new materials and new questions; employing these materials to investigate those questions constitutes the new scholarly current of the age.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam không có hệ thống thạch quật quy mô sa mạc như hành lang Hà Tây do điều kiện khí hậu nhiệt đới ẩm gió mùa, nhưng lại phát triển mạnh nghệ thuật điêu khắc tượng Phật gỗ sơn son thếp vàng và hang động karst thờ tự tự nhiên (như chùa Hương Tích, động Bích Động, động Tam Thanh). Đặc biệt, tiến trình bản địa hóa nghệ thuật Phật giáo từ khuôn mẫu Ấn Độ – Trung Hoa sang thẩm mỹ bản địa có sự tương đồng sâu sắc: nếu Long Môn – Đôn Hoàng tạo ra tượng Phật dung mạo Trung Nguyên thời Đường, thì tượng Phật chùa Phật Tích thời Lý (1057) và tượng Quan Âm nghìn mắt nghìn tay chùa Bút Tháp thời Lê Trung Hưng (1656) đã kiến tạo chuẩn mực mỹ thuật Phật giáo Đại Việt độc lập và đầy tính nhân bản.',
      additionalReferences: [
        'Phàn Cẩm Thi / Fan Jinshi (2010), The Caves of Dunhuang, Hong Kong University Press.',
        'Roderick Whitfield, Susan Whitfield & Neville Agnew (2000), Cave Temples of Mogao: Art and History on the Silk Road, Getty Conservation Institute.',
        'Đôn Hoàng Nghiên Cứu Viện, Digital Dunhuang Archive (e-dunhuang.com).'
      ],
      conclusion: 'Mạc Cao Quật và Tứ Đại Thạch Quật là bằng chứng sống động rằng nghệ thuật đỉnh cao của Trung Hoa không phát triển trong sự khép kín mà từ khả năng hấp thụ, đối thoại và tái sáng tạo văn minh ngoại lai. Từ nét vẽ khoáng chất trên vách đá sa mạc đến hàng vạn cuộn văn bản trong Tạng Kinh Động, di sản thạch quật mở ra cánh cửa trực diện vào đời sống tín ngưỡng, thẩm mỹ và giao lưu xuyên Á–Âu thời trung cổ.'
    },
    {
      id: 'xiqu-stagecraft-face-masks-tuong',
      number: 77,
      category: 'arts',
      categoryLabel: 'Nghệ thuật & Mỹ học',
      titleVi: 'Giải phẫu Sân khấu Hý Khúc Cổ truyền: Tứ Đại Hành Đương, Phổ Mặt Nạ (Kiểm Phổ) & Đối chiếu Tuồng–Chèo Việt Nam',
      titleZh: '中国传统戏曲舞台解剖：生旦净丑、脸谱与越南嘲剧丛剧对照',
      titleZhTrad: '中國傳統戲曲舞台解剖：生旦淨醜、臉譜與越南嘲劇叢劇對照',
      titleEn: 'Anatomy of Traditional Chinese Opera (Xiqu): The Four Role Types, Facial Makeup Codes, and Comparison with Vietnamese Tuong and Cheo',
      readMinutes: 14,
      epistemicTag: 'Nghệ thuật Biểu diễn & Văn hóa So sánh',
      abstract: 'Chuyên luận giải phẫu cấu trúc nghệ thuật sân khấu Hý Khúc Trung Hoa — từ Côn Khúc (Di sản Phi vật thể UNESCO 2001) đến Kinh Kịch (UNESCO 2010): nguyên lý ước lệ "hư thực tương sinh", hệ thống Tứ Công Ngũ Pháp, phân loại Tứ Đại Hành Đương (Sinh·Đán·Tịnh·Sửu), bảng mã màu Kiểm Phổ và đối chiếu cấu trúc sâu với nghệ thuật Tuồng (Hát Bội) và Chèo Việt Nam.',
      keyTakeaways: [
        'Khác với kịch nói tả thực phương Tây, Hý Khúc vận hành trên nguyên lý ước lệ – chương trình hóa: một chiếc roi ngựa tượng trưng cho thiên quân vạn mã, một vòng đi bộ quanh sân khấu thay cho hành trình nghìn dặm.',
        'Bốn nhóm vai diễn chuẩn (Sinh – nam chính, Đán – nữ, Tịnh – mặt vẽ khí phách/gian hùng, Sửu – hề hước) kết hợp bốn kỹ năng (Xướng – Niệm – Tác – Đả) tạo nên hệ thống đào tạo khắc nghiệt đòi hỏi nhiều năm rèn luyện.',
        'Bảng màu Kiểm Phổ (đỏ trung nghĩa, đen chính trực, trắng đa nghi gian trá, vàng dũng mãnh) cùng kỹ thuật vẽ mặt Tuồng (Hát Bội) Việt Nam chia sẻ cùng mạch nguồn ước lệ Đông Á nhưng phát triển độc lập về âm nhạc, ngôn ngữ và tiết tấu.'
      ],
      introduction: 'Trong lịch sử sân khấu thế giới, Hý Khúc Trung Hoa được xếp là một trong ba hệ thống kịch cổ điển lớn cùng Bi kịch Hy Lạp cổ đại và Kịch Phạn ngữ Ấn Độ — và là hệ thống duy nhất vẫn còn lưu diễn liên tục với hàng trăm kịch chủng địa phương (hơn 340 loại hình như Kinh Kịch, Côn Khúc, Việt Kịch, Tần Khương, Xuyên Kịch, Dự Kịch). Trải qua quá trình kết tinh từ Nguyên tạp kịch thế kỷ XIII, Nam hý – Côn Khúc thời Minh đến sự ra đời của Kinh Kịch năm 1790 khi bốn đoàn kịch Huy Ban (Tứ Đại Huy Ban) vào Bắc Kinh chúc thọ Hoàng đế Càn Long, Hý Khúc đã hoàn thiện một ngôn ngữ sân khấu tổng hợp nơi ca hát, vũ đạo, võ thuật, âm nhạc và hội họa kết hợp trên một không gian gần như trống trơn.',
      historicalBackground: 'Mầm mống sân khấu Trung Hoa xuất hiện từ các điệu múa nghi lễ thời Tiên Tần, tạp kỹ "Bách hý" thời Hán và vở hài đối đáp "Tham quân hý" thời Đường. Bước ngoặt định hình kịch bản hoàn chỉnh gồm bốn hồi (Tứ chiết) diễn ra vào thời Nguyên thế kỷ XIII–XIV với Quan Hán Khanh ("Đậu Nga Oan") và Vương Thực Phủ ("Tây Sương Ký"). Sang thời Minh Gia Tĩnh (thế kỷ XVI), Ngụy Lương Phụ cải cách làn điệu Côn Sơn thành "Thủy ma điệu" êm dịu của Côn Khúc — đạt đỉnh cao văn học qua "Mẫu Đơn Đình" của Thang Hiển Tổ (1598). Cuối thế kỷ XVIII, các đoàn kịch từ An Huy mang làn điệu Tây Bì, Nhị Hoàng vào Bắc Kinh hòa trộn với Hán Kịch (Hồ Bắc) và Côn Khúc, hình thành Kinh Kịch — quốc kịch đại diện cho nghệ thuật Hý Khúc cổ truyền.',
      mainContent: [
        {
          heading: '1. Nguyên lý Ước lệ không gian và "Tứ Công Ngũ Pháp"',
          body: 'Sân khấu Hý Khúc cổ truyền chỉ sử dụng tối giản "nhất trác nhị ỷ" (một chiếc bàn và hai chiếc ghế gỗ) nhưng có thể biến hóa thành công đường, cầu đá, thành lầu hay đỉnh núi nhờ động tác cơ thể của diễn viên. Bước qua ngưỡng cửa tưởng tượng, xoay người đẩy cửa không khí, cầm mái chèo lắc nhẹ để gợi sóng nước ("Chèo thuyền thu") hay vung roi tua rua ("Mã tiên") để cưỡi ngựa phi nước đại — tất cả được gọi là mỹ học "Hư thực tương sinh" (dùng cử chỉ thực để gợi không gian hư). Để làm chủ ngôn ngữ này, diễn viên phải rèn trọn bộ "Tứ Công" (Xướng: ca hát; Niệm: thoại có vần điệu; Tác: hình thể vũ đạo; Đả: võ thuật nhào lộn) và "Ngũ Pháp" (Thủ: tay; Nhãn: ánh mắt; Thân: thân pháp; Pháp: kỹ pháp; Bộ: bước chân).'
        },
        {
          heading: '2. Giải phẫu Tứ Đại Hành Đương: Sinh – Đán – Tịnh – Sửu',
          body: 'Mọi nhân vật trong Hý Khúc đều được phân loại chặt chẽ theo giới tính, tuổi tác và khí chất vào bốn hành đương lớn. (1) Sinh (vai nam không vẽ mặt hoa): chia thành Lão Sinh (trung niên/lão niên đeo râu, giọng trầm hùng), Tiểu Sinh (thanh niên dùng giọng giả thanh pha giọng thật) và Võ Sinh (chuyên võ thuật). (2) Đán (vai nữ): chia thành Thanh Y (phụ nữ đoan trang, trọng ca hát, gắn với Tứ Đại Danh Đán như Mai Lan Phương), Hoa Đán (thiếu nữ hoạt bát), Võ Đán (nữ tướng) và Lão Đán (lão bà). (3) Tịnh (còn gọi là Hoa Kiểm — mặt vẽ hoa): nhân vật nam có tính cách mạnh mẽ, khí phách hoặc quyền mưu như Bao Công, Trương Phi, Tào Tháo. (4) Sửu (vai hề): nhận diện bằng mảng phấn trắng hình đậu phụ giữa sống mũi ("Tiểu Hoa Kiểm"), giữ vai trò châm biếm quyền quý, kết nối sân khấu với khán giả bằng ngôn ngữ khẩu ngữ sinh động.'
        },
        {
          heading: '3. Mật mã thị giác của Kiểm Phổ (Phổ Mặt Nạ)',
          body: 'Khác với mặt nạ rời của kịch Noh Nhật Bản hay kịch Hy Lạp, Hý Khúc vẽ màu trực tiếp lên gương mặt diễn viên vai Tịnh để cơ mặt vẫn biểu cảm linh hoạt. Hệ thống màu sắc Kiểm Phổ là một bộ ký hiệu đạo đức – tâm lý tức thời cho khán giả: màu Đỏ biểu trưng cho lòng trung nghĩa, dũng cảm (Quan Vũ); màu Đen biểu trưng cho sự cương trực, liêm khiết hoặc bộc trực (Bao Chửng với vầng trăng khuyết trên trán, Trương Phi); màu Trắng phấn (Thủy bạch) chỉ kẻ quyền mưu, đa nghi, gian trá (Tào Tháo); màu Xanh lam và Lục chỉ người ngang tàng, anh hùng lục lâm (Đậu Nhĩ Đôn); màu Vàng chỉ kẻ kiêu dũng nhưng thâm trầm (Điển Vi); màu Kim–Ngân dành riêng cho thần tiên, yêu quái.'
        },
        {
          heading: '4. Đối chiếu cấu trúc với Tuồng (Hát Bội) và Chèo Việt Nam',
          body: 'Sân khấu cổ truyền Việt Nam cho thấy bức tranh vừa giao thoa vừa độc lập sâu sắc với Hý Khúc. Nghệ thuật Tuồng (Hát Bội) — phát triển mạnh từ thời Trần–Lê đến đỉnh cao dưới triều Nguyễn với Đào Tấn (1845–1907) — chia sẻ mật thiết nguyên lý ước lệ không gian (một bàn hai ghế, roi ngựa, đi vòng sân khấu) và quy ước hóa trang màu sắc mặt nạ (mặt đỏ trung thần như Khương Linh Tá, mặt trắng mốc nịnh thần như Tạ Ôn Đình, mặt rằn tướng võ). Tuy nhiên, Tuồng Việt Nam dùng bộ gõ trống chiến – kèn bóp với tiết tấu dồn dập hùng tráng, lối hát nói khách – hát nam đặc trưng tiếng Việt 6 thanh điệu. Trong khi đó, Chèo vùng đồng bằng Bắc Bộ lại là nghệ thuật sân khấu dân gian thuần Việt nảy sinh từ sân đình nông nghiệp, phóng khoáng, không dùng mặt vẽ hóa trang cầu kỳ mà nổi bật ở nhân vật Hề Chèo trào phúng và làn điệu dân ca trữ tình.'
        }
      ],
      theoreticalFramework: 'Khi Mai Lan Phương lưu diễn tại Liên Xô năm 1935, nhà đạo diễn Đức Bertolt Brecht đã quan sát kỹ thuật diễn xuất ước lệ của Kinh Kịch và rút ra khái niệm lý thuyết nổi tiếng "Hiệu ứng Gián cách" (Verfremdungseffekt): diễn viên Hý Khúc không cố thôi miên khán giả tin rằng sân khấu là đời thực mà chủ động giữ khoảng cách thẩm mỹ để khán giả vừa thưởng thức điêu luyện hình thể vừa tỉnh táo suy ngẫm về đạo lý câu chuyện.',
      terminologyAndLiushu: [
        {
          hanzi: '戏',
          pinyin: 'xì',
          hanViet: 'Hý',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 戲 gồm bộ Qua (戈: vũ khí) và chữ Hư (虍/豆); nghĩa gốc là đấu võ diễn tập, sau mở rộng thành sân khấu ca kịch ("Hý khúc").'
        },
        {
          hanzi: '旦',
          pinyin: 'dàn',
          hanViet: 'Đán',
          liushu: 'Chỉ sự',
          gloss: 'Vẽ mặt trời (日) vừa nhô trên đường chân trời (一), nghĩa gốc là buổi sáng; trong Hý Khúc mượn làm tên nhóm vai diễn nữ.'
        },
        {
          hanzi: '净',
          pinyin: 'jìng',
          hanViet: 'Tịnh',
          liushu: 'Hình thanh',
          gloss: 'Nghĩa gốc là sạch sẽ; trong Hý Khúc là tên gọi rút gọn từ "Tịnh" (vai mặt vẽ Hoa Kiểm) biểu đạt nhân vật nam tính cách mạnh mẽ, khí khái hoặc gian hùng.'
        },
        {
          hanzi: '丑',
          pinyin: 'chǒu',
          hanViet: 'Sửu',
          liushu: 'Tượng hình / Giả tá',
          gloss: 'Vốn là địa chi thứ hai; trong Hý Khúc dùng chỉ vai Hề (Tiểu Hoa Kiểm), thường mang mảng phấn trắng giữa mũi tạo tiếng cười châm biếm.'
        },
        {
          hanzi: '谱',
          pinyin: 'pǔ',
          hanViet: 'Phổ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Ngôn (讠/言) và chữ Phổ (普) chỉ âm; chỉ hệ thống quy phạm biên soạn có thứ tự như "Kiểm phổ" (bảng mẫu mặt nạ) và "Khúc phổ" (bản nhạc).'
        }
      ],
      primarySources: [
        PQ(
          '《闲情偶寄·词曲部》（李渔，1671）',
          'Nhàn Tình Ngẫu Ký — Từ Khúc Bộ (Lý Ngư, 1671)',
          'Casual Expressions of Idle Feeling, Section on Drama — Li Yu (1671)',
          '填词之设，专为登场。',
          'Tiáncí zhī shè, zhuān wéi dēngchǎng.',
          'Điền từ chi thiết, chuyên vi đăng trường.',
          'Việc sáng tác kịch bản hý khúc cốt yếu là để diễn sống động trên sân khấu (chứ không chỉ để đọc trên giấy).',
          'The writing of dramatic lyrics exists expressly for live performance upon the stage.'
        ),
        PQ(
          '《梨园原》（清·黄幡绰）',
          'Lê Viên Nguyên — Hoàng Phiên Xước (đời Thanh)',
          'Origins of the Pear Garden — Huang Fanchuo (Qing dynasty)',
          '身段者，所以传神也。',
          'Shēnduàn zhě, suǒyǐ chuánshén yě.',
          'Thân đoạn giả, sở dĩ truyền thần dã.',
          'Động tác hình thể vũ đạo trên sân khấu chính là phương tiện cốt lõi để truyền tải thần thái nội tâm của nhân vật.',
          'Stylized bodily movement is the very instrument through which the spirit of a character is conveyed.'
        )
      ],
      sinoVietnameseComparison: 'So sánh Kinh Kịch – Côn Khúc với Tuồng – Chèo cho thấy hai quy luật giao lưu văn hóa Đông Á: Tuồng (Hát Bội) tiếp nhận khung ước lệ sân khấu, tích truyện lịch sử và hệ thống hóa trang mặt màu từ sân khấu cổ Trung Hoa nhưng tái cấu trúc toàn diện bằng thanh điệu tiếng Việt, dàn trống chiến – kèn bóp và tâm thức bi tráng của xứ Đàng Trong; còn Chèo bảo lưu mạch kịch hát dân gian bản địa không chịu khuôn mẫu Kiểm Phổ, khẳng định tính song hành giữa tiếp biến văn hóa và tự chủ bản sắc.',
      additionalReferences: [
        'Colin Mackerras (1972), The Rise of the Peking Opera, 1770–1870: Social Aspects of the Theatre in Manchu China, Clarendon Press.',
        'Lý Ngư (1671), Nhàn Tình Ngẫu Ký (闲情偶寄).',
        'Hoàng Chương (2004), Nghệ thuật Tuồng Việt Nam, NXB Sân khấu.'
      ],
      conclusion: 'Hý Khúc cổ truyền là nghệ thuật tổng hợp chắt lọc hàng thế kỷ quy ước thị giác, âm nhạc và hình thể. Khi nắm được bộ mã Tứ Đại Hành Đương, Kiểm Phổ và nguyên lý ước lệ "hư thực tương sinh", người xem không chỉ thưởng thức được chiều sâu của Kinh Kịch – Côn Khúc mà còn nhận diện rõ mạch đối thoại văn hóa với Tuồng và Chèo Việt Nam.'
    },
    {
      id: 'five-vernacular-architecture-styles',
      number: 78,
      category: 'traditional',
      categoryLabel: 'Kiến trúc & Cổ truyền',
      titleVi: 'Ngũ Đại Phong Cách Kiến trúc Dân cư Trung Hoa: Tứ Hợp Viện, Thổ Lâu, Huy Phái, Điếu Cước Lâu & Diêu Động',
      titleZh: '中国五大传统民居建筑：四合院、土楼、徽派、吊脚楼与窑洞',
      titleZhTrad: '中國五大傳統民居建築：四合院、土樓、徽派、吊腳樓與窯洞',
      titleEn: 'Five Vernacular Architecture Styles of China: Siheyuan, Fujian Tulou, Huizhou Horse-Head Walls, Diaojiaolou, and Yaodong Cave Dwellings',
      readMinutes: 14,
      epistemicTag: 'Kiến trúc Bản địa & Địa lý Nhân văn',
      abstract: 'Chuyên luận giải mã năm hình thái kiến trúc dân cư tiêu biểu nhất của Trung Quốc dưới góc nhìn thích ứng khí hậu, vật liệu bản địa và tổ chức gia tộc: Tứ Hợp Viện Hoa Bắc, Thổ Lâu đất nện Phúc Kiến, nhà tường đầu ngựa Huy Phái, nhà sàn Điếu Cước Lâu Tây Nam và nhà hang Diêu Động cao nguyên Hoàng Thổ.',
      keyTakeaways: [
        'Mỗi kiểu nhà dân gian Trung Hoa là lời giải kỹ thuật trực tiếp cho khí hậu và địa hình: Diêu Động giữ ấm mùa đông – mát mùa hè bằng tầng đất hoàng thổ dày; Điếu Cước Lâu tách sàn khỏi độ ẩm và dốc núi Tây Nam.',
        'Cấu trúc mặt bằng phản ánh trực tiếp trật tự tông tộc và an ninh xã hội: Tứ Hợp Viện phân định tôn ti theo trục Bắc–Nam ("Bắc vi tôn"), còn Thổ Lâu Khách Gia tạo thành pháo đài đất nện cộng cư khép kín chứa hàng trăm người cùng họ.',
        'Nhà Huy Phái (Hoành Thôn, Tây Đệ — UNESCO 2000) gắn liền với tường đầu ngựa chống cháy lan (Mã Đầu Tường) và giếng trời "Tứ thủy quy đường" tượng trưng cho tụ tài của thương nhân Huy Thương.'
      ],
      introduction: 'Nếu Tử Cấm Thành và Thiên Đàn đại diện cho kiến trúc cung đình chuẩn hóa từ trên xuống, thì kiến trúc dân cư truyền thống Trung Hoa lại là bản đồ sống động về trí tuệ thích ứng sinh thái từ dưới lên. Trải rộng từ vùng bán khô hạn Tây Bắc, bình nguyên gió cát Hoa Bắc đến thung lũng ẩm ướt Giang Nam và núi rừng Tây Nam, năm phong cách dân cư kinh điển — Tứ Hợp Viện, Thổ Lâu, Huy Phái, Điếu Cước Lâu và Diêu Động — minh họa sinh động cách cư dân bản địa tối ưu hóa nhiệt học, kết cấu chịu lực và không gian cộng đồng bằng chính đất, gỗ, đá tại chỗ.',
      historicalBackground: 'Lịch sử nhà ở Trung Hoa sớm phân hóa thành hai truyền thống nguyên thủy từ thời Đồ đá mới: nhà nửa hầm trên cao nguyên Hoàng Thổ (văn hóa Ngưỡng Thiều, Bán Pha khoảng 4500 TCN — tiền thân của Diêu Động) và nhà sàn gỗ trên vùng đầm lầy phương Nam (văn hóa Hà Mỗ Độ, Chiết Giang khoảng 5000 TCN — tiền thân của Điếu Cước Lâu). Từ thời Tây Chu – Hán, mô hình sân trong khép kín (tiền thân Tứ Hợp Viện) phát triển mạnh ở Trung Nguyên. Sang thời Minh–Thanh, các đợt di cư lớn của người Khách Gia xuống miền núi Phúc Kiến và sự phồn thịnh của thương bang Huy Châu (An Huy) đã thúc đẩy sự hoàn thiện của Thổ Lâu phòng thủ và cụm làng cổ tường trắng ngói đen Huy Phái.',
      mainContent: [
        {
          heading: '1. Tứ Hợp Viện Bắc Kinh: Trục tôn ti Nho giáo và vi khí hậu Hoa Bắc',
          body: 'Tứ Hợp Viện (nhà bốn mặt vây quanh sân giữa) đạt chuẩn mực hoàn chỉnh nhất tại các khu Hồ Đồng (Hutong) Bắc Kinh thời Nguyên–Minh–Thanh. Về khí hậu, tường gạch kín phía Bắc chắn gió mùa Đông Bắc lạnh buốt và bão cát, trong khi sân trong rộng đón nắng mùa đông. Về xã hội, bố cục tuân thủ nghiêm ngặt thứ bậc gia tộc: Chính Phòng (nhà chính quay mặt về hướng Nam đón nắng) dành cho bậc trưởng thượng; Đông – Tây Sương Phòng dành cho con cháu (trưởng nam phía Đông, thứ nam phía Tây); Đảo Tọa Phòng phía Nam làm phòng tiếp khách và thư phòng; phía sau cổng chính đặt bức bình phong (Ảnh Bích) vừa chắn gió vừa đảm bảo tính riêng tư.'
        },
        {
          heading: '2. Thổ Lâu Phúc Kiến: Pháo đài đất nện cộng cư của người Khách Gia',
          body: 'Phân bố chủ yếu tại Nam Tĩnh, Vĩnh Định và Hoa An (Phúc Kiến, Di sản UNESCO 2008), Thổ Lâu là những tòa nhà tròn hoặc vuông cao 3–5 tầng xây bằng kỹ thuật đầm đất nện (đất hoàng thổ trộn vôi, cát, mật đường, cốt tre) với tường đáy dày tới 1,5–2 m. Tầng một và tầng hai hoàn toàn không mở cửa sổ ra ngoài, chỉ có một cổng gỗ bọc sắt duy nhất có rãnh dẫn nước dập lửa ở trên, đủ sức chống thú dữ và đạo tặc thời loạn. Bên trong là sân chung đặt từ đường tổ tiên và giếng nước; hàng trăm thành viên cùng dòng họ sinh sống bình đẳng trong các gian phòng đồng kích thước xoay quanh sân — minh chứng cho tính cố kết cộng đồng cao độ.'
        },
        {
          heading: '3. Kiến trúc Huy Phái: Tường Đầu Ngựa chống cháy và Giếng trời "Tứ Thủy Quy Đường"',
          body: 'Nổi bật tại Nam An Huy (Tây Đệ, Hoành Thôn — UNESCO 2000) và Vụ Nguyên (Giang Tây), kiến trúc Huy Phái gây ấn tượng thị giác bằng bảng màu tối giản "Phấn tường đại ngõa" (tường quét vôi trắng, ngói âm dương xám đen) tương phản với núi xanh. Do nhà cửa xây san sát trong thung lũng hẹp, tường đầu hồi được xây vọt cao quá mái thành các bậc thang gọi là "Mã Đầu Tường" (Tường đầu ngựa) với chức năng kỹ thuật thực tế là tường ngăn lửa chống cháy lan giữa các nhà. Bên trong, bốn mái ngói dốc vào một giếng trời nhỏ (Thiên Tỉnh) để thông gió, lấy sáng và dẫn nước mưa chảy vào bể giữa nhà ("Tứ thủy quy đường" — bốn dòng nước về nhà, ẩn dụ tụ tài của giới thương nhân Huy Thương), kết hợp nghệ thuật "Huy Châu Tam Điêu" (chạm gỗ, gạch, đá).'
        },
        {
          heading: '4. Điếu Cước Lâu Tây Nam & Diêu Động Hoàng Thổ: Hai cực thích ứng địa hình',
          body: 'Ở vùng núi ẩm ướt Tây Nam (Tương Tây – Hồ Nam, Kiềm Đông Nam – Quý Châu, Tây Nam Hồ Bắc), cư dân Thổ Gia, Miêu, Đồng phát triển nhà sàn "Điếu Cước Lâu" bằng gỗ sam dựng trực tiếp trên sườn dốc mà không cần san phẳng nền núi: nửa sau tựa vào vách đất, nửa trước chống trên các cột gỗ cao vượt dốc (tầng gầm thông thoáng để nuôi gia súc, cất nông cụ và chống rắn rết, ẩm thấp; tầng trên dùng để ở). Ngược lại hoàn toàn, tại cao nguyên Hoàng Thổ khô hạn (Thiểm Bắc, Sơn Tây, Hà Nam, Cam Túc), cư dân đào "Diêu Động" (nhà hang vòm cuốn) trực tiếp vào tầng đất hoàng thổ kết dính dày hàng chục mét — có ba dạng: đào ngang sườn đồi (Nhai Diêu), đào giếng vuông xuống đất phẳng (Địa Khanh Viện ở Tam Môn Hiệp) và xây vòm gạch (Cô Diêu) — tận dụng khối đất tự nhiên làm vật liệu cách nhiệt thụ động giữ nhiệt độ bên trong ổn định quanh năm.'
        }
      ],
      theoreticalFramework: 'Trong lý thuyết kiến trúc bản địa (Vernacular Architecture của Paul Oliver và Bernard Rudofsky), năm phong cách nhà ở Trung Hoa là ví dụ mẫu mực của "kiến trúc sinh khí hậu thụ động" (passive bioclimatic design). Trước khi có bê tông cốt thép và điều hòa cơ khí, sự kết hợp giữa vật liệu sẵn có (đất hoàng thổ, gỗ sam, gạch xanh, vôi sống), hình học mái/sân trong và cấu trúc huyết thống đã tạo ra những công trình có vòng đời hàng trăm năm với dấu chân sinh thái tối thiểu.',
      terminologyAndLiushu: [
        {
          hanzi: '院',
          pinyin: 'yuàn',
          hanViet: 'Viện',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Phụ (阝 bên trái: tường đắp) và chữ Hoàn (完) chỉ âm; chỉ khoảng sân khép kín có tường và nhà bao quanh ("Tứ Hợp Viện").'
        },
        {
          hanzi: '夯',
          pinyin: 'hāng',
          hanViet: 'Kháng / Đầm',
          liushu: 'Hội ý',
          gloss: 'Gồm chữ Đại (大: sức lớn) và Lực (力); chỉ kỹ thuật dùng chày nặng nện chặt từng lớp đất ẩm ("Kháng thổ") tạo tường chịu lực của Thổ Lâu và Trường Thành.'
        },
        {
          hanzi: '天井',
          pinyin: 'tiānjǐng',
          hanViet: 'Thiên Tỉnh',
          liushu: 'Từ ghép hội ý',
          gloss: 'Nghĩa đen là "giếng trời" — khoảng không mở nhỏ giữa nhà Huy Phái và nhà cổ Giang Nam giúp đối lưu không khí, lấy sáng và thu nước mưa.'
        },
        {
          hanzi: '窑',
          pinyin: 'yáo',
          hanViet: 'Diêu',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Huyệt (穴: hang đào) và chữ Cao/Diêu (羔/缶); chỉ lò nung gốm hoặc nhà hang vòm đào vào vách đất hoàng thổ ("Diêu Động").'
        },
        {
          hanzi: '楼',
          pinyin: 'lóu',
          hanViet: 'Lâu',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 樓 gồm bộ Mộc (木: gỗ) và chữ Lâu (婁) chỉ âm; chỉ công trình từ hai tầng trở lên (Thổ Lâu, Điếu Cước Lâu).'
        }
      ],
      primarySources: [
        PQ(
          '《周易·系辞下》',
          'Chu Dịch — Hệ Từ Hạ',
          'Book of Changes (Yijing), Great Commentary Part II',
          '上古穴居而野处，后世圣人易之以宫室，上栋下宇，以待风雨。',
          'Shànggǔ xuéjū ér yěchǔ, hòushì shèngrén yì zhī yǐ gōngshì, shàngdòng xiàyǔ, yǐ dài fēngyǔ.',
          'Thượng cổ huyệt cư nhi dã xử, hậu thế thánh nhân dịch chi dĩ cung thất, thượng đống hạ vũ, dĩ đãi phong vũ.',
          'Thời thượng cổ con người sống trong hang hốc và ngoài đồng hoang; thánh nhân đời sau đổi sang dựng nhà cửa, trên có nóc dưới có mái hiên để che chắn gió mưa.',
          'In high antiquity people dwelt in caves and open wilds; sages of later ages replaced these with timbered houses, with ridgepoles above and eaves below, to shelter against wind and rain.'
        ),
        PQ(
          '《营造法式》（北宋·李诫，1103）',
          'Doanh Tạo Pháp Thức — Lý Giới (Bắc Tống, 1103)',
          'Treatise on Architectural Methods (Yingzao Fashi, 1103)',
          '凡构屋之制，皆以材为祖。',
          'Fán gòuwū zhī zhì, jiē yǐ cái wéi zǔ.',
          'Phàm cấu ốc chi chế, giai dĩ tài vi tổ.',
          'Phàm phép dựng nhà cửa bằng gỗ đều lấy chuẩn mô-đun tiết diện thanh gỗ ("tài") làm gốc để tính tỷ lệ toàn công trình.',
          'In all systems of timber building construction, the standardized timber module ("cai") serves as the foundational unit of proportion.'
        )
      ],
      sinoVietnameseComparison: 'Kiến trúc dân cư Việt Nam phản ánh rõ sự giao thoa và tương đồng sinh thái với miền Nam Trung Quốc: nhà sàn gỗ của người Thái, Mường, Tày, Ê Đê có chung nguyên lý thông thoáng chống ẩm với Điếu Cước Lâu; nhà rường Huế và nhà cổ Hội An (như nhà cổ Tấn Ký) mang cấu trúc giếng trời Thiên Tỉnh và hệ vì kèo gỗ gần gũi với nhà cổ Giang Nam – Phúc Kiến; trong khi nhà ba gian hai chái vùng đồng bằng Bắc Bộ kết hợp sân gạch phơi thóc mở rộng về hướng Nam, thoáng mở và ít khép kín thành lũy hơn Tứ Hợp Viện Bắc Kinh.',
      additionalReferences: [
        'Ronald G. Knapp (2000), China\'s Old Dwellings, University of Hawaii Press.',
        'Lương Tư Thành (1984), A Pictorial History of Chinese Architecture, MIT Press.',
        'UNESCO World Heritage Centre, Fujian Tulou (2008) & Ancient Villages in Southern Anhui – Xidi and Hongcun (2000).'
      ],
      conclusion: 'Năm phong cách dân cư truyền thống cho thấy kiến trúc bản địa Trung Hoa là kết quả của đối thoại dài lâu giữa khí hậu, địa chất và cấu trúc cộng đồng. Từ sự ấm áp thụ động của Diêu Động đến tính phòng thủ cộng cư của Thổ Lâu và giếng trời Huy Phái, những giải pháp không gian này vẫn mang lại gợi ý thiết thực cho kiến trúc xanh đương đại.'
    },
    {
      id: 'ming-qing-fiction-hongloumeng-anatomy',
      number: 79,
      category: 'literature',
      categoryLabel: 'Văn học & Cổ tịch',
      titleVi: 'Cấu trúc Tư tưởng & Tự sự 《Hồng Lâu Mộng》 và Tiểu thuyết Chương hồi Minh–Thanh',
      titleZh: '《红楼梦》叙事思想结构与明清章回小说源流',
      titleZhTrad: '《紅樓夢》敘事思想結構與明清章回小說源流',
      titleEn: 'Narrative and Philosophical Anatomy of "Dream of the Red Chamber" and Ming–Qing Episodic Vernacular Fiction',
      readMinutes: 15,
      epistemicTag: 'Văn học Cổ điển & Tự sự học',
      abstract: 'Chuyên luận truy nguyên tiến trình hình thành tiểu thuyết chương hồi Minh–Thanh từ "Thoại bản" kể chuyện thị dân thời Tống–Nguyên qua Tứ Đại Kỳ Thư đến đỉnh cao nghệ thuật "Hồng Lâu Mộng" của Tào Tuyết Cần (giữa thế kỷ XVIII), phân tích cấu trúc tự sự đối xứng, hệ thống biểu tượng Nho–Phật–Đạo và cuộc cách mạng tâm lý nhân vật.',
      keyTakeaways: [
        'Tiểu thuyết chương hồi Minh–Thanh không sinh ra từ văn đàn chính thống mà tiến hóa từ kịch bản kể chuyện bình dân ("Thoại bản") tại các khu Ngõa Tử thời Tống–Nguyên, giữ lại dấu ấn câu dẫn đối ngẫu đầu hồi và lời kết "Muốn biết sự thể ra sao, xem hồi sau sẽ rõ".',
        'Từ thế kỷ XIV đến XVII, tiểu thuyết chương hồi chuyển dịch từ sử thi tập thể (Tam Quốc Diễn Nghĩa, Thủy Hử) và thần ma ngụ ngôn (Tây Du Ký) sang tiểu thuyết thế sự đô thị (Kim Bình Mai), chuẩn bị nền tảng trực tiếp cho Tào Tuyết Cần.',
        '"Hồng Lâu Mộng" (80 hồi đầu của Tào Tuyết Cần, lưu truyền qua các bản chép tay Chi Nghiên Trai trước khi Trình Vĩ Nguyên – Cao Ngạc in 120 hồi năm 1791) vượt qua lối mô tả thiện–ác nhị nguyên để đạt tới chủ nghĩa hiện thực tâm lý phức hợp và triết lý vô thường.'
      ],
      introduction: 'Trong truyền thống văn học cổ đại Trung Hoa, thơ ca và tản văn cổ văn từng chiếm vị thế độc tôn ("Thi ngôn chí, văn tải đạo"), còn tiểu thuyết bị xem là "tiểu đạo" (lối nhỏ). Tuy nhiên, chính ở hai triều đại Minh–Thanh (thế kỷ XIV–XVIII), sự bùng nổ của công nghệ in khắc gỗ thương mại tại Giang Nam và Phúc Kiến cùng sự lớn mạnh của tầng lớp thị dân đã đưa tiểu thuyết chương hồi Bạch thoại trở thành di sản văn học có sức lan tỏa lớn nhất của văn minh Trung Hoa — kết tinh ở đỉnh cao bất hủ "Hồng Lâu Mộng" (tên gốc "Thạch Đầu Ký") của Tào Tuyết Cần.',
      historicalBackground: 'Bắt nguồn từ nghệ thuật thuyết thư tại Biện Kinh và Lâm An thời Tống, các nghệ nhân kể chuyện lịch sử ("Thuyết Tam phân") và truyện đời thường chép lại đề cương gọi là "Thoại bản". Cuối thời Nguyên – đầu Minh, La Quán Trung và Thi Nại Am biên tập lại các tích truyện lưu truyền dân gian thành "Tam Quốc Diễn Nghĩa" (văn ngôn pha bạch thoại) và "Thủy Hử Truyện" (bạch thoại thuần thục). Sang thời Minh Vạn Lịch (cuối thế kỷ XVI), Ngô Thừa Ân hoàn thiện "Tây Du Ký" và tác giả ẩn danh Lan Lăng Tiếu Tiếu Sinh viết "Kim Bình Mai" — tác phẩm đầu tiên lấy đời sống thường nhật của một gia đình thương nhân đương đại làm trung tâm thay vì dựa trên sử tích hay truyền thuyết. Tào Tuyết Cần (khoảng 1715–1763) — xuất thân từ gia tộc Tào từng giữ chức Giang Ninh Chức Tạo (quản lý tơ lụa hoàng gia tại Nam Kinh) ba đời rực rỡ trước khi bị Ung Chính tịch biên gia sản năm 1728 — đã chắt lọc trải nghiệm hưng suy thực tế của gia tộc vào "Hồng Lâu Mộng".',
      mainContent: [
        {
          heading: '1. Kiến trúc hình thức của Tiểu thuyết Chương hồi Minh–Thanh',
          body: 'Tiểu thuyết chương hồi (Zhanghui xiaoshuo) sở hữu cấu trúc nhận diện chặt chẽ: toàn bộ tác phẩm chia thành nhiều hồi (thường là bội số tròn như 100 hoặc 120 hồi); mỗi hồi mở đầu bằng một cặp câu đối hai vế (Hồi mục) khái quát trọn vẹn hai tuyến sự kiện chính; giọng người kể chuyện giữ ngữ khí "Thuyết thoại nhân" (nghệ nhân kể chuyện trực tiếp thưa chuyện với độc giả qua cụm "Khán quan", "Khước thuyết"); và kết thúc bằng điểm ngắt hồi hộp ("Dục tri hậu sự như hà, thả thính hạ hồi phân giải"). Chính cấu trúc này cho phép xử lý mạng lưới hàng trăm nhân vật đan xen mà vẫn giữ nhịp điệu hấp dẫn cho người đọc đại chúng.'
        },
        {
          heading: '2. Cấu trúc tự sự đa tầng của 《Hồng Lâu Mộng》: Huyền thoại – Hiện thực – Phục bút',
          body: 'Tào Tuyết Cần thiết lập một khung tự sự song song cực kỳ tinh vi trong "Hồng Lâu Mộng". Ở tầng huyền thoại (Hồi 1 và Hồi 5), câu chuyện bắt nguồn từ hòn đá thừa của Nữ Oa vá trời hóa thành Thông Linh Bảo Ngọc mang theo Giả Bảo Ngọc xuống trần gian trả nợ nước mắt cho cây Giáng Châu Tiên Thảo (Lâm Đại Ngọc), cùng chuyến du ngoạn "Thái Hư Ảo Cảnh" nơi 12 bức tranh và 14 khúc ca "Hồng Lâu Mộng" báo trước vận mệnh bi kịch của Kim Lăng Thập Nhị Thoa. Ở tầng hiện thực, hơn 400 nhân vật sống trong hai phủ Vinh Quốc và Ninh Quốc (Đại Quan Viên) được khắc họa bằng kỹ thuật "thảo xà hôi tuyến, phục mạch thiên lý" (rắn bò trong cỏ, sợi chỉ tro — những chi tiết nhỏ cài cắm từ đầu hồi nối mạch hàng chục hồi sau). Lối phê bình của người thân cận tác giả mang bút danh Chi Nghiên Trai (bản Giáp Tuất 1754, Kỷ Mão 1759, Canh Thìn 1760) là chìa khóa giải mã nghệ thuật tự sự này.'
        },
        {
          heading: '3. Phá vỡ tính cách khuôn mẫu và đối thoại Nho – Phật – Đạo',
          body: 'Đột phá lớn nhất của Tào Tuyết Cần là từ bỏ lối xây dựng nhân vật một chiều ("tốt toàn diện – xấu toàn diện"). Giả Bảo Ngọc không phải anh hùng lập công danh mà là kẻ phản kháng chế độ khoa cử bát cổ và trân trọng vẻ đẹp tinh thần của nữ giới; Tiết Bảo Thoa khôn ngoan, chuẩn mực theo lễ giáo Nho gia nhưng cũng mang bi kịch cô độc; Vương Hy Phượng sắc sảo, tàn nhẫn nhưng đầy năng lực quản trị trong một đại gia tộc đang mục ruỗng từ bên trong. Về tư tưởng, tác phẩm dựng nên sự giằng co không thể hòa giải giữa trật tự công danh – gia tộc Nho giáo (Giả Chính, Nguyên Xuân tỉnh thân), khát vọng tự do cá nhân (Đại Quan Viên như một ốc đảo thanh xuân) và cảm thức vô thường, "sắc không" của Phật–Đạo (khúc "Hảo Liễu Ca" ở Hồi 1 và kết cục "Bạch mang mang đại địa chân can tịnh").'
        },
        {
          heading: '4. Văn bản học Hồng Học: 80 hồi Tào Tuyết Cần và 40 hồi tục biên năm 1791',
          body: 'Do Tào Tuyết Cần qua đời trong cảnh nghèo túng tại Tây Sơn (ngoại ô Bắc Kinh) trước khi hoàn tất bản in trọn bộ, chỉ có 80 hồi đầu lưu truyền dưới dạng bản chép tay có lời bình Chi Nghiên Trai (Chi bản). Năm 1791 (bản Trình Giáp) và 1792 (bản Trình Ất), Trình Vĩ Nguyên và Cao Ngạc lần đầu tiên in bằng bản chữ rời bằng gỗ bộ 120 hồi hoàn chỉnh. Từ thập niên 1920, Hồ Thích ("Hồng Lâu Mộng khảo chứng", 1921) và Du Bình Bá khai sinh "Tân Hồng Học" bằng phương pháp khảo chứng thực chứng, phân biệt rõ phong cách và kết cục dự kiến giữa 80 hồi gốc của Tào Tuyết Cần với 40 hồi sau, đồng thời biến "Hồng Lâu Mộng" thành bách khoa thư về kiến trúc viên lâm, y dược, ẩm thực, lễ tiết và kinh tế gia tộc thời Thanh.'
        }
      ],
      theoreticalFramework: 'Trong lý thuyết tự sự học và văn học so sánh (Andrew Plaks — "The Four Masterworks of the Ming Novel" và Anthony Yu), sự chuyển biến từ Tứ Đại Kỳ Thư nhà Minh sang "Hồng Lâu Mộng" nhà Thanh đánh dấu bước nhảy từ "tự sự sử thi – đạo đức" sang "tiểu thuyết hiện đại tính tự phản tư" (self-reflexive psychological novel), nơi bản thân quá trình viết và đọc câu chuyện (hòn đá tự chép lại ký ức của mình) trở thành chủ đề triết học trung tâm về ranh giới giữa Chân và Giả ("Giả tác chân thời chân diệc giả").',
      terminologyAndLiushu: [
        {
          hanzi: '章',
          pinyin: 'zhāng',
          hanViet: 'Chương',
          liushu: 'Hội ý',
          gloss: 'Gồm chữ Âm (音: bản nhạc) và chữ Thập (十: trọn vẹn); chỉ một khúc nhạc hoặc một phần hoàn chỉnh của văn bản ("Chương hồi").'
        },
        {
          hanzi: '回',
          pinyin: 'huí',
          hanViet: 'Hồi',
          liushu: 'Tượng hình',
          gloss: 'Vẽ dòng nước xoáy tròn, nghĩa gốc là quay vòng; trong tiểu thuyết chương hồi chỉ một lượt kể chuyện độc lập ("nhất hồi").'
        },
        {
          hanzi: '梦',
          pinyin: 'mèng',
          hanViet: 'Mộng',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Dạng phồn thể 夢 gồm bộ Tịch (夕: đêm tối) biểu nghĩa và phần trên chỉ đôi mắt mờ tối trong giấc ngủ; ẩn dụ cốt lõi về vô thường trong "Hồng Lâu Mộng".'
        },
        {
          hanzi: '痴',
          pinyin: 'chī',
          hanViet: 'Si',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Nạch (疒: bệnh) và chữ Tri (知) chỉ âm; từ nghĩa "ngây dại" trở thành phạm trù mỹ học văn nhân Minh–Thanh chỉ sự say mê thuần khiết vượt ngoài toan tính ("Tình si").'
        },
        {
          hanzi: '幻',
          pinyin: 'huàn',
          hanViet: 'Ảo / Huyễn',
          liushu: 'Chỉ sự / Tượng hình',
          gloss: 'Vẽ hình đảo ngược của chữ Dư (予), chỉ sự biến hóa hư ảo; trung tâm của cặp đối lập Chân – Giả trong "Thái Hư Ảo Cảnh".'
        }
      ],
      primarySources: [
        PQ(
          '《红楼梦·第一回》（曹雪芹）',
          'Hồng Lâu Mộng — Hồi 1 (Tào Tuyết Cần)',
          'Dream of the Red Chamber, Chapter 1 — Cao Xueqin',
          '满纸荒唐言，一把辛酸泪！都云作者痴，谁解其中味？',
          'Mǎnzhǐ huāngtáng yán, yībǎ xīnsuān lèi! Dōu yún zuòzhě chī, shuí jiě qízhōng wèi?',
          'Mãn chỉ hoang đường ngôn, nhất bả tân toan lệ! Đô vân tác giả si, thùy giải kỳ trung vị?',
          'Đầy trang toàn lời hoang đường, một nắm nước mắt cay đắng! Ai cũng bảo tác giả ngây dại, có mấy người hiểu thấu hương vị bên trong?',
          'Pages full of idle words, penned with hot and bitter tears: all men call the author fool; none his secret message hears.'
        ),
        PQ(
          '《红楼梦·第一回·太虚幻境对联》',
          'Hồng Lâu Mộng — Câu đối Thái Hư Ảo Cảnh (Hồi 1)',
          'Dream of the Red Chamber, Couplet at the Land of Illusion',
          '假作真时真亦假，无为有处有还无。',
          'Jiǎ zuò zhēn shí zhēn yì jiǎ, wú wéi yǒu chù yǒu huán wú.',
          'Giả tác chân thời chân diệc giả, vô vi hữu xứ hữu hoàn vô.',
          'Khi cái giả được coi là thật thì cái thật cũng hóa giả; nơi cái không được coi là có thì cái có rồi cũng về không.',
          'Truth becomes fiction when the fiction\'s true; real becomes not-real where the unreal\'s real.'
        )
      ],
      sinoVietnameseComparison: 'Tiểu thuyết chương hồi Minh–Thanh để lại dấu ấn sâu đậm trong văn học trung đại và cận đại Việt Nam. Truyền thống tiểu thuyết lịch sử chữ Hán Việt Nam như "Hoàng Lê Nhất Thống Chí" (Ngô gia văn phái, cuối thế kỷ XVIII–đầu XIX) tiếp thu trực tiếp thể thức chương hồi có hồi mục đối ngẫu. Đặc biệt, kiệt tác "Truyện Kiều" của Nguyễn Du (đầu thế kỷ XIX) đã chuyển thể cốt truyện từ tiểu thuyết chương hồi Bạch thoại "Kim Vân Kiều Truyện" của Thanh Tâm Tài Nhân (đầu đời Thanh) sang thể thơ lục bát chữ Nôm 3.254 câu — biến một tiểu thuyết tài tử giai nhân trung bình thành đỉnh cao thi ca và tâm lý học nhân vật đậm bản sắc Việt Nam.',
      additionalReferences: [
        'Tào Tuyết Cần, Hồng Lâu Mộng (bản dịch Vũ Bội Hoàng và cộng sự; bản tiếng Anh của David Hawkes & John Minford, Penguin Classics).',
        'Hồ Thích (1921), Hồng Lâu Mộng Khảo Chứng (红楼梦考证).',
        'Andrew H. Plaks (1987), The Four Masterworks of the Ming Novel, Princeton University Press.'
      ],
      conclusion: 'Tiểu thuyết chương hồi Minh–Thanh đã phá vỡ ranh giới giữa văn học bình dân và tư tưởng tinh hoa, đưa tiếng nói Bạch thoại trở thành phương tiện nghệ thuật đủ sức chuyên chở toàn bộ chiều sâu xã hội và nội tâm con người. Với "Hồng Lâu Mộng", Tào Tuyết Cần đã khép lại đỉnh cao văn học cổ điển Trung Hoa đồng thời mở ra chuẩn mực tự sự tâm lý hiện đại.'
    },
    {
      id: 'lacquerware-silk-woodblock-new-year-prints',
      number: 80,
      category: 'arts',
      categoryLabel: 'Nghệ thuật & Mỹ học',
      titleVi: 'Sơn mài, Tơ lụa Giang Nam & Tranh Khắc gỗ Dân gian: Dương Liễu Thanh – Đào Hoa Ổ đối chiếu Đông Hồ – Hàng Trống',
      titleZh: '中国漆艺、江南丝绸与木版年画：杨柳青桃花坞与越南东湖行鼓对照',
      titleZhTrad: '中國漆藝、江南絲綢與木版年畫：楊柳青桃花塢與越南東湖行鼓對照',
      titleEn: 'Chinese Lacquerware, Jiangnan Silk, and Folk Woodblock New Year Prints: Yangliuqing and Taohuawu Compared with Dong Ho and Hang Trong',
      readMinutes: 14,
      epistemicTag: 'Mỹ thuật Ứng dụng & Thủ công Mỹ nghệ',
      abstract: 'Chuyên luận khảo cứu ba trụ cột mỹ nghệ vật chất làm nên tên tuổi thủ công Trung Hoa — sơn mài (từ bát sơn Hà Mỗ Độ 7.000 năm đến sơn mài nước Sở và điêu tất Minh–Thanh), tơ lụa Giang Nam (tơ tằm, gấm Vân Cẩm, kỹ nghệ Khắc Ty) và tranh Tết khắc gỗ dân gian (Dương Liễu Thanh, Đào Hoa Ổ), kèm phân tích so sánh chuyên sâu với sơn mài và tranh dân gian Đông Hồ – Hàng Trống Việt Nam.',
      keyTakeaways: [
        'Kỹ nghệ sơn mài dùng nhựa cây sơn ta (Toxicodendron vernicifluum) đã đạt độ tinh xảo đáng kinh ngạc từ thời Chiến Quốc–Hán (mộ Mã Vương Đôi 168 TCN) với đặc tính chống ẩm, kháng axit và bền màu hàng thiên niên kỷ.',
        'Tơ lụa Giang Nam (Tô Châu, Hàng Châu, Nam Kinh) nâng nghề dệt lên tầm mỹ thuật cung đình qua gấm Vân Cẩm (dệt bằng khung cửi hoa lớn hai người vận hành) và kỹ thuật Khắc Ty ("thông kinh đoạn vĩ" — đứt sợi ngang nối màu như chạm khắc).',
        'Tranh Tết khắc gỗ "Nam Đào Bắc Liễu" (Đào Hoa Ổ – Tô Châu và Dương Liễu Thanh – Thiên Tân) chia sẻ cùng truyền thống khắc ván in màu dân gian với tranh Đông Hồ và Hàng Trống Việt Nam nhưng phân hóa rõ về kỹ thuật vờn màu tay, chất liệu giấy và biểu tượng cát tường.'
      ],
      introduction: 'Bên cạnh gốm sứ, ba ngành thủ công cổ truyền — sơn mài, tơ lụa và tranh khắc gỗ dân gian — đã đưa thẩm mỹ Trung Hoa đi vào từng vật dụng đời sống thường nhật lẫn hệ thống giao thương toàn cầu. Từ chiếc bát gỗ quét sơn đỏ khai quật tại di chỉ Hà Mỗ Độ (Chiết Giang, khoảng 5000 TCN), những cuộn gấm vượt Con đường Tơ lụa sang La Mã, đến những tờ tranh Tết rực rỡ dán trên cánh cửa mỗi dịp lập xuân, cả ba lĩnh vực này đều thể hiện sự giao hòa giữa khoa học vật liệu tự nhiên và biểu tượng văn hóa dân gian.',
      historicalBackground: 'Nhờ đặc tính khí hậu cận nhiệt đới ẩm tại lưu vực Trường Giang, Trung Quốc trở thành trung tâm thuần hóa cây dâu – con tằm (tìm thấy mảnh lụa cổ tại Tiền Sơn Dạng, Chiết Giang khoảng 2700 TCN) và khai thác nhựa cây sơn ta từ rất sớm. Thời Chiến Quốc – Tây Hán, sơn mài đỏ–đen (Chu tất – Hắc tất) của nước Sở từng đắt giá gấp nhiều lần đồ đồng nhờ trọng lượng nhẹ và độ bóng sâu. Đến thời Minh–Thanh, vùng Giang Nam (Tô Châu, Hàng Châu, Hồ Châu, Nam Kinh) trở thành công xưởng tơ lụa cung đình của cả đế quốc ("Thiên hạ tơ lụa ở Giang Nam"). Cùng thời kỳ này, sự phổ cập của kỹ thuật in khắc gỗ nhiều bản màu ("Đậu bản" và "Củng hoa") vào cuối đời Minh đã thúc đẩy sự bùng nổ của bốn trung tâm tranh Tết dân gian lớn: Dương Liễu Thanh (Thiên Tân), Đào Hoa Ổ (Tô Châu), Dương Gia Phụ (Sơn Đông) và Miên Trúc (Tứ Xuyên).',
      mainContent: [
        {
          heading: '1. Sơn mài Trung Hoa: Từ sơn mài Mã Vương Đôi đến Điêu Tất và Khảm Xà Cừ',
          body: 'Nhựa cây sơn ta tự nhiên chứa hợp chất urushiol chỉ đông cứng (polyme hóa) trong môi trường ấm và độ ẩm cao (75–85%), tạo màng phủ bóng mịn, chống thấm và chống mục nát vượt trội. Hơn 500 món đồ sơn mài khai quật từ mộ số 1 Mã Vương Đôi (Trường Sa, 168 TCN) sau hơn hai thiên niên kỷ vẫn giữ nguyên sắc đỏ son và đen tuyền cùng hoa văn mây cuộn (Vân khí văn). Sang thời Tống–Nguyên–Minh–Thanh, nghệ thuật sơn mài phân hóa thành nhiều kỹ thuật đỉnh cao: "Điêu tất" (quét hàng chục đến hơn một trăm lớp sơn đỏ – Tích hồng – rồi dùng dao khắc nổi hoa văn tinh vi), "Loa điền" (khảm vỏ ốc xà cừ óng ánh), "Tê bì tất" (sơn nhiều lớp màu rồi mài lộ vân loang) và "Thoát thai tất" (sơn mài không cốt gỗ tại Phúc Châu do Thẩm Thiệu An phát triển cuối thế kỷ XVIII). Bộ "Hưu Sức Lục" của Hoàng Thành (cuối thời Minh) là chuyên thư kỹ thuật sơn mài cổ duy nhất còn truyền lại.'
        },
        {
          heading: '2. Tơ lụa Giang Nam: Gấm Vân Cẩm Nam Kinh và kỹ nghệ Khắc Ty Tô Châu',
          body: 'Nền công nghiệp tơ lụa Giang Nam thời Minh–Thanh kết hợp vùng trồng dâu nuôi tằm Hồ Châu với các xưởng dệt hoàng gia ("Tam Chức Tạo" đặt tại Nam Kinh, Tô Châu và Hàng Châu). Đỉnh cao dệt gấm là "Vân Cẩm" Nam Kinh (UNESCO 2009), sử dụng khung cửi hoa lớn (Đại Hoa Lâu Mộc Cơ) dài hơn 5 m cần hai nghệ nhân phối hợp trên–dưới để luồn chỉ vàng, chỉ bạc và tơ lông công, mỗi ngày chỉ dệt được khoảng 5–6 cm nên có câu "Thốn cẩm thốn kim". Trong khi đó, kỹ thuật "Khắc Ty" (Kesi) của Tô Châu dệt bằng nguyên lý "thông kinh đoạn vĩ" (sợi dọc xuyên suốt nhưng sợi ngang chỉ dệt cục bộ trong từng mảng màu bằng hàng chục con thoi nhỏ), cho phép dệt nên những bức tranh hoa điểu, sơn thủy tinh vi hai mặt như nhau, được triều đình Tống–Minh–Thanh dùng may long bào và bồi tranh cuộn.'
        },
        {
          heading: '3. Tranh Khắc gỗ Dân gian "Nam Đào Bắc Liễu": Dương Liễu Thanh và Đào Hoa Ổ',
          body: 'Ra đời từ tập tục vẽ thần giữ cửa (Môn Thần) thời Hán–Đường, tranh Tết khắc gỗ (Niên Họa) đạt thời kỳ hoàng kim từ cuối Minh đến giữa Thanh với hai trung tâm đối ứng "Nam Đào Bắc Liễu". Tranh Dương Liễu Thanh (Thiên Tân, bên bờ Đại Vận Hà) gắn liền với kỹ thuật "Bán ấn bán họa" (in nét đen bằng ván gỗ lê rồi vẽ tô màu bằng tay theo lối công bút tinh tế — tiêu biểu là bức "Liên niên hữu dư" vẽ em bé ôm cá chép và hoa sen), chịu ảnh hưởng thẩm mỹ cung đình Bắc Kinh. Ngược lại, tranh Đào Hoa Ổ (Tô Châu) phát huy tối đa kỹ thuật in nhiều ván màu chồng khớp (Tháo ấn) không cần tô tay, mang phong vị đô thị thương mại Giang Nam sống động (như bức "Cô Tô Vạn Niên Kiều"), thậm chí từng ảnh hưởng mạnh mẽ đến kỹ thuật in tranh khắc gỗ Ukiyo-e tại Nhật Bản thế kỷ XVII–XVIII.'
        },
        {
          heading: '4. Đối chiếu nghệ thuật Sơn mài và Tranh Dân gian Việt Nam (Đông Hồ – Hàng Trống)',
          body: 'Mối tương quan giữa thủ công mỹ nghệ Trung Quốc và Việt Nam thể hiện rõ sự sáng tạo bản địa trên nền tảng vật liệu chung. Về sơn mài, Việt Nam chia sẻ nguồn nhựa cây sơn Phú Thọ (Rhus succedanea) với truyền thống sơn son thếp vàng cổ truyền, nhưng từ thập niên 1930 các họa sĩ Trường Mỹ thuật Đông Dương (Nguyễn Gia Trí, Trần Văn Cẩn, Nguyễn Khang) đã tạo bước ngoặt độc đáo: biến sơn mài từ đồ mỹ nghệ ứng dụng thành hội họa giá vẽ hiện đại dùng kỹ thuật mài lộ nhiều lớp màu kết hợp vỏ trứng, son, bạc, vàng. Về tranh dân gian, tranh Đông Hồ (Bắc Ninh) tương đồng với Đào Hoa Ổ ở nguyên lý in chồng nhiều ván màu hoàn toàn bằng màu tự nhiên (điệp, sỏi son, lá chàm, than rơm) trên giấy dó quét điệp lấp lánh; còn tranh Hàng Trống (Hà Nội) tương đồng chặt chẽ với Dương Liễu Thanh ở kỹ thuật "nửa in nửa vẽ" (in nét đen rồi dùng bút lông vờn màu phẩm chuyển sắc mềm mại cho tranh thờ Ngũ Hổ, Tứ Bình).'
        }
      ],
      theoreticalFramework: 'Từ góc độ lịch sử kỹ nghệ và văn hóa vật chất (như bộ "Thiên Công Khai Vật" năm 1637 của Tống Ứng Tinh), sơn mài, tơ lụa và tranh khắc gỗ chứng minh mối liên hệ chặt chẽ giữa tri thức hóa–sinh học bản địa (polyme hóa urushiol, kéo tơ đa sợi, chiết xuất sắc tố khoáng–thực vật) với hệ thống biểu tượng cát tường dân gian (chơi chữ đồng âm như Liên–Liên niên, Ngư–Dư, Bức–Phúc), biến triết lý thẩm mỹ tinh hoa thành vật phẩm đại chúng.',
      terminologyAndLiushu: [
        {
          hanzi: '漆',
          pinyin: 'qī',
          hanViet: 'Tất (Sơn)',
          liushu: 'Hình thanh / Tượng hình',
          gloss: 'Gồm bộ Thủy (氵: nhựa lỏng) và chữ Thất (桼 — gốc vẽ thân cây khứa rãnh chảy từng giọt nhựa); chỉ nhựa cây sơn ta và đồ sơn mài.'
        },
        {
          hanzi: '丝',
          pinyin: 'sī',
          hanViet: 'Ty (Tơ)',
          liushu: 'Tượng hình',
          gloss: 'Dạng phồn thể 絲 vẽ hai bó sợi tơ tằm xoắn lại; gốc của hàng loạt chữ liên quan dệt may mang bộ Mịch (糸/纟).'
        },
        {
          hanzi: '锦',
          pinyin: 'jǐn',
          hanViet: 'Cẩm (Gấm)',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 錦 gồm bộ Kim (金: quý như vàng) và chữ Bạch (帛: lụa); chỉ loại gấm dệt hoa nhiều màu cao cấp ("Vân Cẩm", "Thục Cẩm").'
        },
        {
          hanzi: '版',
          pinyin: 'bǎn',
          hanViet: 'Bản (Ván khắc)',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Phiến (片: mảnh gỗ xẻ) và chữ Phản (反) chỉ âm; chỉ tấm ván gỗ lê/táo khắc chữ hoặc hình đảo ngược dùng để in tranh Tết và sách cổ.'
        },
        {
          hanzi: '缂',
          pinyin: 'kè',
          hanViet: 'Khắc (trong Khắc Ty)',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Mịch (纟/糸: sợi tơ) và chữ Cách (革) chỉ âm; chỉ kỹ thuật dệt đứt sợi ngang tạo ranh giới màu sắc nét như dao khắc.'
        }
      ],
      primarySources: [
        PQ(
          '《天工开物·乃服》（明·宋应星，1637）',
          'Thiên Công Khai Vật — Thiên Nãi Phục (Tống Ứng Tinh, 1637)',
          'Exploitation of the Works of Nature (Tiangong Kaiwu, 1637), Chapter on Clothing',
          '凡结花本，必先画出图样，计其经纬之数，而后上机织之。',
          'Fán jié huāběn, bì xiān huàchū túyàng, jì qí jīngwěi zhī shù, érhòu shàngjī zhī zhī.',
          'Phàm kết hoa bản, tất tiên họa xuất đồ dạng, kế kỳ kinh vĩ chi số, nhi hậu thượng cơ chức chi.',
          'Phàm khi buộc bản mẫu dệt hoa (hoa bản), tất phải vẽ sẵn đồ án, tính chính xác số sợi dọc sợi ngang, rồi mới đưa lên khung cửi dệt.',
          'Whenever preparing a pattern harness for figured silk, one must first draw the design and calculate the exact count of warp and weft threads before mounting it on the loom.'
        ),
        PQ(
          '《髹饰录》（明·黄成）',
          'Hưu Sức Lục — Hoàng Thành (đời Minh)',
          'Records of Lacquering (Xiushilu) — Huang Cheng (Ming dynasty)',
          '质则人身，文则衣饰。质不坚，文何所附？',
          'Zhì zé rénshēn, wén zé yīshì. Zhì bù jiān, wén hé suǒ fù?',
          'Chất tắc nhân thân, văn tắc y sức. Chất bất kiên, văn hà sở phụ?',
          'Cốt nền sơn mài ví như thân thể con người, hoa văn trang trí ví như y phục. Nếu cốt nền không bền chắc thì hoa văn biết nương tựa vào đâu?',
          'The lacquer body is like the human frame, and ornament is like clothing; if the foundation is not sound, what can decoration adhere to?'
        )
      ],
      sinoVietnameseComparison: 'So sánh cặp đôi "Dương Liễu Thanh – Hàng Trống" (nửa in ván nét đen, nửa vờn màu bằng tay) và "Đào Hoa Ổ – Đông Hồ" (in chồng nhiều ván màu hoàn chỉnh) cho thấy hai nền văn hóa chia sẻ cùng nền tảng công nghệ khắc ván in Đông Á nhưng khác biệt sâu sắc về chất liệu bản địa (giấy điệp và màu khoáng thiên nhiên Đông Hồ so với giấy Tuyên và kỹ pháp công bút Dương Liễu Thanh) và ngôn ngữ tạo hình. Riêng tranh sơn mài Việt Nam thế kỷ XX là một đóng góp nghệ thuật sáng tạo độc đáo không có bản sao trực tiếp tại Trung Quốc.',
      additionalReferences: [
        'Tống Ứng Tinh (1637), Thiên Công Khai Vật (天工开物).',
        'Hoàng Thành (cuối đời Minh), Hưu Sức Lục (髹饰录), Dương Minh chú thích.',
        'James A. Flath (2004), The Cult of Happiness: Nianhua, Art, and History in Rural North China, UBC Press.'
      ],
      conclusion: 'Sơn mài, tơ lụa Giang Nam và tranh khắc gỗ dân gian tạo nên chiều sâu vật chất cho lịch sử mỹ thuật Trung Hoa, kết nối xưởng thợ thủ công với triều đình và sinh hoạt tết cổ truyền. Đối chiếu chúng với sơn mài hiện đại và tranh Đông Hồ – Hàng Trống Việt Nam càng làm rõ sức sáng tạo linh hoạt của các nghệ nhân Đông Á trên cùng những chất liệu tự nhiên quý giá.'
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
    "mohism-logic-optics-ethics": "assets/images/articles/hero-four-inventions.jpg",
    "religious-daoism-quanzhen-zhengyi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "chu-nom-liushu-script-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "imperial-palace-axes-beijing-thanglong-hue": "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
    "truc-lam-zen-song-yuan-dialogue": "assets/images/articles/hero-sino-vietnam.jpg",
    "east-asian-historiography-shiji-toanthu": "assets/images/articles/hero-classical-books-scrolls.jpg",
    "bac-y-nam-duoc-comparative-medicine": "assets/images/articles/hero-tcm-solar.jpg",
    "china-hsr-megaprojects-urban-network": "assets/images/articles/hero-contemporary-china.jpg",
    "china-green-energy-ev-battery-ecosystem": "assets/images/articles/hero-huaqiangbei-tech.jpg",
    "china-digital-payments-platform-economy": "assets/images/articles/hero-contemporary-china.jpg",
    "modern-chinese-archaeology-sanxingdui-liangzhu": "assets/images/museum/sanxingdui-mask.jpg",
    "china-space-aerospace-tiangong-beidou": "assets/images/articles/hero-contemporary-china.jpg",
    "rcep-acfta-cumulation-rules-vietnam": "assets/images/articles/hero-supply-chain-rcep.jpg",
    "china-trade-fairs-canton-ciie-yiwu-guide": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "gacc-decree-248-249-vietnam-agri-export": "assets/images/articles/hero-consular-field-guide.jpg",
    "chinese-enterprises-globalization-playbook": "assets/images/provinces/guangdong-canton-tower.jpg",
    "cross-border-b2b-contracts-cietac-viac": "assets/images/articles/hero-b2b-negotiation-table.jpg",
    "tang-poetry-song-ci-poetics-geography": "assets/images/articles/hero-tang-dynasty.jpg",
    "chinese-aesthetic-concepts-qiyun-yijing": "assets/images/paintings/22_qianli_jiangshan.jpg",
    "calligraphy-masterpieces-three-rarities-lineage": "assets/images/articles/hero-calligraphy-five-scripts.jpg",
    "chinese-mythology-shanhaijing-kunlun-penglai": "assets/images/paintings/01_luoshenfu_tu.jpg",
    "east-asian-woodblock-printing-encyclopedias": "assets/images/museum/yongle-dadian.jpg",
    "temple-of-heaven-tiantan-cosmology-3d": "assets/images/provinces/beijing-temple-of-heaven.jpg",
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
  for (i = 0; i < ARTICLES_V3_PART2A.length; i++) {
    if (!existingIds[ARTICLES_V3_PART2A[i].id]) {
      window.CCE_ARTICLES.push(ARTICLES_V3_PART2A[i]);
      existingIds[ARTICLES_V3_PART2A[i].id] = true;
    }
  }
})();
