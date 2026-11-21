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
      id: 'east-asian-woodblock-printing-encyclopedias',
      number: 105,
      category: 'literature',
      categoryLabel: 'Văn học & Thư tịch',
      titleVi: 'Kỹ nghệ Khắc ván In Cổ (Kinh Kim Cương 868) và Đại Tùng Thư Trung Hoa: Từ Vĩnh Lạc Đại Điển đến Tứ Khố Toàn Thư',
      titleZh: '东亚雕版印刷史（868年《金刚经》）与大型类书丛书：《永乐大典》与《四库全书》',
      titleZhTrad: '東亞雕版印刷史（868年《金剛經》）與大型類書叢書：《永樂大典》與《四庫全書》',
      titleEn: 'East Asian Woodblock Printing (868 Diamond Sutra) and Imperial Encyclopedias: Yongle Dadian and Siku Quanshu',
      readMinutes: 14,
      epistemicTag: 'Lịch sử Công nghệ · Thư tịch Học',
      abstract: 'Sáu thế kỷ trước máy in chữ kim loại của Gutenberg tại châu Âu, kỹ nghệ khắc ván in (Điêu bản ấn loát) đã ra đời tại Trung Quốc thời Đường, mà cột mốc còn niên đại rõ ràng sớm nhất thế giới là bản Kinh Kim Cương năm 868 phát hiện tại Hang số 17 Đôn Hoàng. Song hành với bước nhảy vọt in ấn và phân loại tri thức là hai công trình tổng tập đồ sộ nhất thời tiền hiện đại: Vĩnh Lạc Đại Điển (triều Minh) và Tứ Khố Toàn Thư (triều Thanh).',
      keyTakeaways: [
        'Bản khắc ván Kinh Kim Cương đề ngày 15 tháng 4 năm Hàm Thông thứ 9 đời Đường (11/05/868) do Vương Giới xuất tiền khắc in cho thấy trình độ điêu khắc chữ Hán và minh họa mặt trước đã đạt độ thuần thục cao.',
        'Dù Tất Thăng phát minh chữ in rời đất sét nung vào thập niên 1040 (đời Bắc Tống), kỹ nghệ khắc ván gỗ (gỗ lê, gỗ táo) vẫn giữ ưu thế chủ đạo suốt nhiều thế kỷ nhờ phù hợp với kho hàng vạn chữ Hán và dễ tái bản bổ sung.',
        'Vĩnh Lạc Đại Điển (1408, hơn 22.800 quyển theo vận mục Hồng Vũ Chính Vận) và Tứ Khố Toàn Thư (1782, phân 4 bộ Kinh – Sử – Tử – Tập gồm hơn 3.400 nhan đề) đại diện cho đỉnh cao lưu trữ tri thức đồng thời phản ánh cơ chế kiểm duyệt tư tưởng của đế chế.'
      ],
      introduction: 'Nếu giấy của Thái Luân thời Đông Hán giải phóng tri thức khỏi thẻ tre nặng nề và lụa đắt đỏ, thì kỹ nghệ khắc ván in thời Đường – Tống đã dân chủ hóa sách vở trên quy mô đại lục. Nhờ bản khắc gỗ và hệ thống thư viện triều đình – tư nhân, các bộ kinh điển, y thư, nông thư và sử liệu Đông Á được bảo tồn qua bao biến thiên chiến loạn.',
      historicalBackground: 'Kỹ thuật in mộc bản phát triển từ truyền thống khắc dấu ấn triện và dập bia đá (Thác bản 拓本) thời Lục Triều – Tùy – Đường. Dưới triều Tống, các xưởng in lớn tại Khai Phong, Hàng Châu, Kiến Dương (Phúc Kiến) và Thành Đô (Tứ Xuyên) tạo nên thị trường sách thương mại bùng nổ; sách in đời Tống ("Tống bản thư") được giới sưu tầm các thế kỷ sau quý như vàng ("Nhất trang Tống bản, nhất lưỡng hoàng kim"). Sang thời Minh – Thanh, triều đình huy động hàng nghìn học giả biên tập các bộ đại loại thư và đại tùng thư chưa từng có trong lịch sử nhân loại.',
      mainContent: [
        {
          heading: '1. Bản Kinh Kim Cương năm 868 và Quy trình Khắc ván In Mộc bản',
          body: 'Cuộn Kinh Kim Cương (Hàm Thông cửu niên bản, dài khoảng 5 mét, hiện lưu giữ tại Thư viện Anh) mở đầu bằng bức tranh khắc gỗ tinh xảo Đức Phật thuyết pháp tại Kỳ Viên và kết thúc bằng dòng lạc khoản ngày 11/05/868. Quy trình khắc ván kinh điển đòi hỏi nghệ nhân viết chữ lên giấy mỏng trong suốt, dán úp ngược lên mặt ván gỗ lê hoặc gỗ táo đã bào phẳng, dùng dao khắc nổi từng nét chữ ngược, quét mực nho lên ván rồi đặt giấy Tuyên hoặc giấy dó lên trên và dùng chổi xơ cọ nhẹ mặt sau.'
        },
        {
          heading: '2. Vì sao Khắc ván Gỗ song hành lâu dài cùng Chữ in Rời (Tất Thăng)',
          body: 'Trong Mộng Khê Bút Đàm, Thẩm Quát mô tả chi tiết phát minh chữ in rời bằng đất sét nung của Tất Thăng khoảng năm 1041–1048, tiếp nối bằng chữ rời gỗ của Vương Trinh (đời Nguyên) và chữ rời đồng (đời Minh – Thanh và Triều Tiên). Tuy nhiên, khác với bảng chữ cái Latinh chỉ có vài chục ký tự, hệ thống chữ Hán cần hàng chục nghìn con chữ rời, chi phí đúc và sắp chữ cho đơn hàng nhỏ rất lớn. Ngược lại, một bộ ván gỗ khắc xong có thể cất kho hàng chục năm, cần bao nhiêu bản thì in ngay bấy nhiêu mà không tốn vốn tồn kho giấy.'
        },
        {
          heading: '3. Vĩnh Lạc Đại Điển (1408): Đại Loại Thư đồ sộ nhất thời Minh',
          body: 'Do Minh Thành Tổ Chu Đệ hạ chiếu biên soạn từ năm 1403 đến năm 1408 dưới sự tổng tài của Giải Tấn và Diêu Quảng Hiếu cùng hơn 2.000 học giả, Vĩnh Lạc Đại Điển gom hơn 7.000–8.000 đầu sách cổ thành 22.877 quyển (cộng 60 quyển mục lục) đóng thành 11.095 sách chép tay, ước tính khoảng 370 triệu chữ. Bộ sách sắp xếp theo vần (loại thư) chứ không in mộc bản vì quy mô quá lớn; bản chính thất lạc cuối thời Minh và bản phó Gia Tĩnh chịu tổn thất nặng nề trong biến loạn năm 1900, nay chỉ còn khoảng hơn 400 sách (khoảng 800 quyển) rải rác trên thế giới.'
        },
        {
          heading: '4. Tứ Khố Toàn Thư (1773–1782): Phân loại Tứ Bộ và Mặt trái Kiểm duyệt',
          body: 'Dưới triều Càn Long, hơn 360 học giả đầu ngành (đứng đầu là Kỷ Quân) biên soạn Tứ Khố Toàn Thư trong gần một thập kỷ, chép tay 7 bộ đặt tại các thư các (như Văn Uyên Các trong Tử Cấm Thành, Văn Lan Các ở Hàng Châu). Bộ tùng thư chia toàn bộ di sản học thuật thành bốn kho Kinh – Sử – Tử – Tập (thu nhận khoảng 3.461 tác phẩm, hơn 79.000 quyển). Tuy nhiên, song song với công lao bảo tồn đồ sộ, chiến dịch thu thập sách cũng đi kèm chính sách kiểm duyệt và tiêu hủy hàng nghìn đầu sách bị coi là bất lợi cho triều Thanh.'
        }
      ],
      theoreticalFramework: 'Dưới góc độ Lịch sử Công nghệ Thông tin và Truyền thông (Media History), kỹ nghệ khắc ván và hệ thống Tứ Bộ của Tứ Khố Toàn Thư chính là "kiến trúc cơ sở dữ liệu tri thức" của Đông Á tiền hiện đại — xác lập cách tổ chức thư mục, tiêu chuẩn hóa phiên bản văn bản và kiểm soát luồng tri thức trên quy mô đế chế.',
      terminologyAndLiushu: [
        { hanzi: '雕版', pinyin: 'diāobǎn', hanViet: 'Điêu bản', liushu: 'Điêu: Hình thanh; Bản: Hình thanh (bộ Phiến)', gloss: 'Kỹ thuật khắc ngược chữ và hình lên ván gỗ nguyên khối để in ấn sách vở.' },
        { hanzi: '活字', pinyin: 'huózì', hanViet: 'Hoạt tự', liushu: 'Hoạt: Hình thanh (bộ Thủy); Tự: Hội ý', gloss: 'Chữ in rời có thể tháo lắp sắp xếp lại nhiều lần, do Tất Thăng sáng chế thời Bắc Tống.' },
        { hanzi: '类书', pinyin: 'lèishū', hanViet: 'Loại thư', liushu: 'Loại: Hình thanh; Thư: Hình thanh', gloss: 'Sách tra cứu bách khoa phân loại trích đoạn từ nhiều thư tịch theo chủ đề hoặc vần (như Vĩnh Lạc Đại Điển).' },
        { hanzi: '丛书', pinyin: 'cóngshū', hanViet: 'Tùng thư', liushu: 'Tùng: Hội ý; Thư: Hình thanh', gloss: 'Bộ sách tổng tập giữ nguyên vẹn từng tác phẩm độc lập theo hệ thống phân loại (như Tứ Khố Toàn Thư).' },
        { hanzi: '宋版', pinyin: 'Sòngbǎn', hanViet: 'Tống bản', liushu: 'Thuật ngữ phiên bản học cổ tịch', gloss: 'Sách khắc in thời Tống nổi tiếng với nét chữ tinh xảo, giấy đẹp và độ hiệu đính chính xác cao.' }
      ],
      primarySources: [
        PQ('唐咸通九年《金刚般若波罗蜜经》卷末题记（868年）', 'Lạc khoản cuối cuộn Kinh Kim Cương bản khắc gỗ năm Hàm Thông thứ 9 đời Đường (11/05/868)', 'Colophon of the Tang Woodblock Diamond Sutra (May 11, 868 CE)', '咸通九年四月十五日王玠为二亲敬造普施。', 'Xiántōng jiǔ nián sìyuè shíwǔ rì Wáng Jiè wèi èrqīn jìngzào pǔshī.', 'Hàm Thông cửu niên tứ nguyệt thập ngũ nhật Vương Giới vị nhị thân kính tạo phổ thí.', 'Ngày 15 tháng 4 năm Hàm Thông thứ 9, Vương Giới kính cẩn tạo in vì song thân để phổ thí rộng khắp.', 'Reverently made for universal free distribution by Wang Jie on behalf of his two parents on the fifteenth day of the fourth moon of the ninth year of Xiantong (May 11, 868).'),
        PQ('沈括《梦溪笔谈·技艺》（北宋·约1088年）', 'Thẩm Quát, Mộng Khê Bút Đàm, thiên Kỹ Nghệ (Bắc Tống, khoảng năm 1088)', 'Shen Kuo, Dream Pool Essays (c. 1088 CE)', '庆历中，有布衣毕昇，又为活板。其法用胶泥刻字，薄如钱唇，每字为一印，火烧令坚。', 'Qìnglì zhōng, yǒu bùyī Bì Shēng, yòu wéi huóbǎn. Qí fǎ yòng jiāoní kèzì, báo rú qiánchún, měizì wéi yī yìn, huǒshāo lìng jiān.', 'Khánh Lịch trung, hữu bố y Tất Thăng, hựu vi hoạt bản. Kỳ pháp dụng giao nê khắc tự, bạc như tiền thần, mỗi tự vi nhất ấn, hỏa thiêu lệnh kiên.', 'Trong niên hiệu Khánh Lịch, có người áo vải tên Tất Thăng sáng chế bản in chữ rời. Phép ấy dùng đất sét dẻo khắc chữ mỏng như mép đồng tiền, mỗi chữ làm một con dấu, đem nung lửa cho cứng.', 'During the Qingli reign, a commoner named Bi Sheng invented movable type. He carved characters into sticky clay as thin as the edge of a coin, one seal per character, and fired them until hard.')
      ],
      sinoVietnameseComparison: 'Việt Nam kế thừa và bản địa hóa xuất sắc kỹ nghệ khắc ván in (tiêu biểu là làng khắc in Liễu Tràng – Hồng Lục ở Hải Dương thời Lê sơ do Lương Nhữ Hộc truyền nghề). Bộ Mộc bản Triều Nguyễn (hơn 34.000 tấm gỗ thị, gỗ nha đồng lưu giữ tại Đà Lạt) và Mộc bản Kinh Phật chùa Vĩnh Nghiêm (Bắc Giang) đã được UNESCO ghi danh Di sản Tư liệu Ký ức Thế giới, cho thấy tầm vóc ấn loát cổ truyền của Việt Nam trong không gian Đông Á.',
      additionalReferences: 'Tsien Tsuen-Hsuin (Tiền Tồn Huấn), Paper and Printing (Science and Civilisation in China, Vol. 5, Part 1); Thư viện Anh (British Library) - Hồ sơ Kinh Kim Cương 868; Trung tâm Lưu trữ Quốc gia IV - Mộc bản Triều Nguyễn.',
      conclusion: 'Từ bản khắc gỗ Kinh Kim Cương năm 868 đến hai bộ đại thư Vĩnh Lạc Đại Điển và Tứ Khố Toàn Thư, kỹ nghệ ấn loát Đông Á đã định hình cách loài người lưu trữ, phân loại và truyền trao di sản trí tuệ qua nhiều thế kỷ.'
    },
    {
      id: 'temple-of-heaven-tiantan-cosmology-3d',
      number: 106,
      category: 'traditional',
      categoryLabel: 'Kiến trúc & Vũ trụ luận',
      titleVi: 'Thiên Đàn Bắc Kinh (天坛): Vũ trụ luận Thiên Viên Địa Phương, Hình học Số 9, 28 Cột Gỗ Kỳ Niên Điện, Hồi Âm Bích và Đối chiếu Đàn Nam Giao Huế',
      titleZh: '北京天坛空间宇宙论：天圆地方、九数几何、祈年殿二十八柱、回音壁与顺化南郊坛比较',
      titleZhTrad: '北京天壇空間宇宙論：天圓地方、九數幾何、祈年殿二十八柱、回音壁與順化南郊壇比較',
      titleEn: 'Temple of Heaven (Tiantan) 3D Cosmology: Round Heaven Square Earth, Number-9 Geometry, 28 Columns, Echo Wall, and Hue Nam Giao Comparison',
      readMinutes: 15,
      epistemicTag: 'Kiến trúc 3D · Vũ trụ luận Cổ đại',
      abstract: 'Khởi dựng năm 1420 dưới thời Minh Vĩnh Lạc (cùng năm hoàn thành Tử Cấm Thành) tại phía nam kinh thành Bắc Kinh, Thiên Đàn (天坛) là quần thể tế Trời lớn nhất và hoàn chỉnh nhất còn tồn tại của Trung Hoa. Toàn bộ diện tích khoảng 273 ha của Thiên Đàn là một bản đồ vũ trụ ba chiều sống động: tường ngoài phía Bắc cong tròn tượng trưng Trời, phía Nam vuông góc tượng trưng Đất ("Thiên viên địa phương"), Viên Khâu Đàn mã hóa tuyệt đối bội số của 9, Kỳ Niên Điện dựng bằng 28 cột gỗ theo chu kỳ bốn mùa – 12 tháng – 12 canh giờ, cùng kiệt tác âm học Hồi Âm Bích.',
      keyTakeaways: [
        'Mặt bằng tổng thể Thiên Đàn hiện thực hóa nguyên lý "Thiên viên địa phương" (Trời tròn Đất vuông) với hai vòng tường bao phía Bắc uốn cung tròn, phía Nam vuông góc, đặt trên trục thần đạo Đan Bệ Kiều cao dần về phía Bắc.',
        'Kỳ Niên Điện (cao khoảng 38 mét, mái ngói lưu ly xanh lam 3 tầng tượng trưng bầu trời) hoàn toàn không dùng xà ngang lớn hay đinh thép, nâng đỡ bằng 28 cột gỗ nam mộc phân tầng: 4 cột Long Tỉnh (4 mùa), 12 cột Kim (12 tháng) và 12 cột Diêm (12 canh giờ).',
        'Viên Khâu Đàn (bệ đá cẩm thạch 3 tầng lộ thiên tế Đông chí) mã hóa toàn diện số Dương cực đại 9 (từ 9 phiến đá vòng trong cùng đến 81 phiến vòng ngoài cùng mỗi tầng), đối ứng thú vị với cấu trúc ba tầng Đàn Nam Giao triều Nguyễn tại Huế.'
      ],
      introduction: 'Nếu Tử Cấm Thành là trung tâm quyền lực nhân thế của Hoàng đế ("Thiên tử"), thì Thiên Đàn là cầu nối thiêng liêng giữa Hoàng đế và Thượng Đế (Trời). Hằng năm vào tiết Đông chí (cầu tạ Trời tại Viên Khâu Đàn) và tháng Giêng đầu xuân (cầu mùa màng bội thu tại Kỳ Niên Điện), hoàng đế Minh – Thanh phải trai giới tại Trai Cung trước khi bước lên trục đá trắng Đan Bệ Kiều thực hiện đại lễ quốc gia tối cao.',
      historicalBackground: 'Thiên Đàn ban đầu mang tên Thiên Địa Đàn, xây dựng năm Vĩnh Lạc thứ 18 (1420) theo nghi thức hợp tế Trời và Đất. Đến năm Gia Tĩnh thứ 9 (1530), Minh Thế Tông cải cách nghi lễ tách riêng tứ giao (Thiên Đàn ở phía Nam, Địa Đàn ở phía Bắc, Nhật Đàn ở phía Đông, Nguyệt Đàn ở phía Tây) và cho xây Viên Khâu Đàn chuyên tế Trời. Năm Càn Long thứ 16 (1751), mái ngói Kỳ Niên Điện được thống nhất toàn bộ sang sắc xanh lưu ly (thay cho ba màu xanh – vàng – lục trước đó). Sau trận sét đánh gây hỏa hoạn năm 1889, Kỳ Niên Điện được phục dựng nguyên mẫu hoàn chỉnh vào năm 1890 và toàn bộ quần thể được UNESCO công nhận Di sản Thế giới năm 1998.',
      mainContent: [
        {
          heading: '1. Hình học Vũ trụ "Thiên Viên Địa Phương" và Trục Đan Bệ Kiều',
          body: 'Khi nhìn từ trên cao (hoặc trong mô hình 3D), cả vòng tường ngoại đàn lẫn nội đàn của Thiên Đàn đều uốn cong bán nguyệt ở phía Bắc (biểu trưng Trời cao tròn đầy) và vuông thành sắc cạnh ở phía Nam (biểu trưng Đất dày vuông vức), đồng thời địa thế phía Bắc cao hơn phía Nam. Con đường Đan Bệ Kiều (cầu đá dài khoảng 360 mét, rộng gần 30 mét, cao dần từ Nam lên Bắc) nối Viên Khâu Đàn, Hoàng Khung Vũ và Kỳ Niên Điện, tạo cảm giác bước đi từ trần thế vươn dần lên cõi Trời.'
        },
        {
          heading: '2. Viên Khâu Đàn và Hình học Số 9 Tuyệt đối',
          body: 'Viên Khâu Đàn là bệ đá trắng hình tròn ba tầng lộ thiên (không có mái che để thông trực tiếp với bầu trời). Tâm điểm tầng trên cùng là phiến đá tròn Thiên Tâm Thạch (天心石); bao quanh Thiên Tâm Thạch là 9 vòng đá đồng tâm: vòng thứ nhất có 9 phiến đá, vòng thứ hai 18 phiến, tăng đều theo cấp số cộng bội 9 đến vòng thứ chín có 81 phiến. Tầng giữa nối tiếp từ vòng 10 (90 phiến) đến vòng 18 (162 phiến); tầng dưới từ vòng 19 (171 phiến) đến vòng 27 (243 phiến). Tổng số lan can đá chạm khắc của ba tầng cũng là bội số của 9 (360 tấm, ứng với 360 độ chu thiên).'
        },
        {
          heading: '3. Kỳ Niên Điện (祈年殿): 28 Cột Gỗ Nam Mộc và Lịch pháp 3D',
          body: 'Kỳ Niên Điện dựng trên bệ đá Kỳ Cốc Đàn ba tầng tròn, kết cấu gỗ hoàn toàn bằng khớp mộng không đinh sắt, cao khoảng 38 mét với ba tầng mái ngói lưu ly xanh lam đỉnh chóp mạ vàng. Hệ thống 28 cột gỗ đỡ mái mã hóa chính xác vũ trụ – lịch pháp cổ đại: vòng trong cùng gồm 4 cột Long Tỉnh cao lớn nhất (cao khoảng 19,2 mét) tượng trưng 4 mùa Xuân – Hạ – Thu – Đông; vòng giữa gồm 12 cột Kim tượng trưng 12 tháng trong năm; vòng ngoài cùng gồm 12 cột Diêm tượng trưng 12 canh giờ trong ngày. Cộng hai vòng ngoài là 24 cột (ứng với 24 Tiết khí), cộng cả ba vòng là 28 cột (ứng với Nhị thập bát tú — 28 chòm sao trên bầu trời).'
        },
        {
          heading: '4. Kiệt tác Âm học: Hồi Âm Bích (回音壁) và Tam Âm Thạch',
          body: 'Bao quanh điện Hoàng Khung Vũ (nơi đặt bài vị Hoàng Thiên Thượng Đế) là bức tường gạch tròn Hồi Âm Bích cao khoảng 3,72 mét, dày khoảng 0,9 mét, đường kính khoảng 61,5 mét. Nhờ bề mặt tường gạch mài phẳng nhẵn uốn cong đều đặn theo hình tròn chính xác, sóng âm phát ra sát mặt tường bị phản xạ liên tiếp dọc theo chu vi vòng tròn (hiệu ứng "phòng thì thầm" — Whispering Gallery), giúp hai người đứng cách nhau hơn 60 mét ở hai đầu tường vẫn nghe rõ tiếng nói nhỏ của nhau. Ngay trước bậc thềm Hoàng Khung Vũ là ba phiến đá Tam Âm Thạch tạo lần lượt 1, 2 và 3 tiếng vang rõ rệt khi vỗ tay.'
        }
      ],
      theoreticalFramework: 'Dưới lăng kính Kiến trúc Vũ trụ luận (Architectural Cosmology) và Âm học Kiến trúc, Thiên Đàn là công trình hiếm hoi kết hợp trọn vẹn ba lớp khoa học cổ điển: hình học số học (toán học bội số 9), kỹ thuật kết cấu gỗ nhịp lớn không đinh (Kỳ Niên Điện) và vật lý phản xạ sóng âm (Hồi Âm Bích và Thiên Tâm Thạch khuếch đại giọng đọc chúc văn của hoàng đế).',
      terminologyAndLiushu: [
        { hanzi: '天圆地方', pinyin: 'tiānyuán dìfāng', hanViet: 'Thiên viên địa phương', liushu: 'Cụm thành ngữ vũ trụ luận cổ đại', gloss: 'Quan niệm vũ trụ Trời tròn Đất vuông chi phối mặt bằng quy hoạch Thiên Đàn và hình thái ngọc Tông.' },
        { hanzi: '圜丘', pinyin: 'Huánqiū', hanViet: 'Viên Khâu', liushu: 'Viên: Hình thanh (hình tròn); Khâu: Tượng hình (gò đất)', gloss: 'Đàn tròn lộ thiên ba tầng tế Trời vào tiết Đông chí, mã hóa hoàn chỉnh hệ số 9.' },
        { hanzi: '祈年殿', pinyin: 'Qíniándiàn', hanViet: 'Kỳ Niên Điện', liushu: 'Kỳ: Hình thanh (bộ Thị - cầu khấn); Niên: Hội ý (mùa màng)', gloss: 'Ngôi điện tròn ba tầng mái xanh lam nổi tiếng nhất Thiên Đàn nơi hoàng đế cầu mùa đầu năm.' },
        { hanzi: '回音壁', pinyin: 'Huíyīnbì', hanViet: 'Hồi Âm Bích', liushu: 'Hồi: Tượng hình; Âm: Chỉ sự; Bích: Hình thanh (bộ Thổ)', gloss: 'Bức tường tròn quanh Hoàng Khung Vũ tạo hiệu ứng truyền âm dọc chu vi tường.' },
        { hanzi: '斋宫', pinyin: 'Zhāigōng', hanViet: 'Trai Cung', liushu: 'Trai: Hội ý (tĩnh tâm trai giới); Cung: Tượng hình', gloss: 'Cung điện nơi hoàng đế ăn chay, tắm gội và tịnh tâm ba ngày trước khi bước vào lễ tế Trời.' }
      ],
      primarySources: [
        PQ('《周礼·春官·大司乐》', 'Chu Lễ, Xuân Quan, Đại Tư Nhạc (nguyên tắc tế Trời tại Viên Khâu)', 'Rites of Zhou (Zhouli), Office of Spring: Grand Director of Music', '冬日至，于地上之圜丘奏之。', 'Dōngrì zhì, yú dìshàng zhī huánqiū zòu zhī.', 'Đông nhật chí, ư địa thượng chi viên khâu tấu chi.', 'Vào ngày Đông chí, cử hành nhã nhạc tế Trời trên gò tròn (Viên Khâu) giữa mặt đất.', 'On the day of the Winter Solstice, perform the ceremonial music upon the Circular Mound (Huanqiu) on the ground.'),
        PQ('《大明会典·礼部·郊祀》', 'Đại Minh Hội Điển, Lễ Bộ, Giao Tự (quy chế tách riêng Thiên Đàn thời Gia Tĩnh)', 'Collected Statutes of the Great Ming, Ministry of Rites: Suburban Sacrifices', '嘉靖九年，建圜丘于大祀殿南，冬至祀昊天上帝。', 'Jiājìng jiǔ nián, jiàn Huánqiū yú Dàsìdiàn nán, dōngzhì sì Hàotiān Shàngdì.', 'Gia Tĩnh cửu niên, kiến Viên Khâu ư Đại Tự Điện nam, đông chí tự Hạo Thiên Thượng Đế.', 'Năm Gia Tĩnh thứ 9 (1530), dựng Viên Khâu ở phía nam Đại Tự Điện, ngày Đông chí tế Hạo Thiên Thượng Đế.', 'In the ninth year of Jiajing (1530), the Circular Mound was constructed south of the Great Sacrifice Hall to sacrifice to August Heaven on the Winter Solstice.')
      ],
      sinoVietnameseComparison: 'Tại Việt Nam, Đàn Nam Giao triều Nguyễn ở Huế (xây năm 1806 dưới thời Gia Long, quy mô gần 10 ha giữa rừng thông) cũng hiện thực hóa nguyên lý "Thiên viên địa phương" nhưng theo bố cục cô đọng và hòa thiên nhiên đặc sắc: ba tầng đàn chồng lên nhau ngay tại một điểm — tầng trên cùng Viên Đàn hình tròn (biểu trưng Trời, dựng Thanh ốc khi tế), tầng giữa Phương Đàn hình vuông (biểu trưng Đất, dựng Hoàng ốc) và tầng dưới hình vuông cho các quan dự lễ. Khác với Thiên Đàn Bắc Kinh tách riêng lễ tế Trời và tế Đất từ năm 1530, Đàn Nam Giao Huế duy trì truyền thống hợp tế Trời – Đất trang nghiêm giữa không gian rừng thông bản địa.',
      additionalReferences: 'UNESCO World Heritage Centre - Temple of Heaven: an Imperial Sacrificial Altar in Beijing (1998); Trung tâm Bảo tồn Di tích Cố đô Huế - Hồ sơ Đàn Nam Giao; Lương Tư Thành, Trung Quốc Kiến trúc Sử.',
      conclusion: 'Thiên Đàn Bắc Kinh — đặc biệt khi khảo sát qua mô hình 3D trục Đan Bệ Kiều, 28 cột gỗ Kỳ Niên Điện và hình học số 9 Viên Khâu Đàn — cho thấy cách nền văn minh cổ đại biến toán học, lịch pháp và âm học thành một nghi lễ không gian vĩnh cửu.'
    },
    {
      id: 'jiuzhaigou-travertine-karst',
      number: 107,
      category: 'regions',
      categoryLabel: 'Địa lý & Di sản Thiên nhiên',
      titleVi: 'Cửu Trại Câu (九寨沟): Địa chất Đá vôi Travertine, Thung lũng Chữ Y, Ngũ Hoa Hải và Chín Bản Làng Tạng – Khương',
      titleZh: '九寨沟自然与人文志：钙华喀斯特地貌、Y字形沟谷、五花海与藏羌九寨',
      titleZhTrad: '九寨溝自然與人文誌：鈣華喀斯特地貌、Y字形溝谷、五花海與藏羌九寨',
      titleEn: 'Jiuzhaigou Valley: Travertine Karst Geology, Y-Shaped Basins, Five Flower Lake, and Nine Tibetan-Qiang Villages',
      readMinutes: 13,
      epistemicTag: 'Địa chất Học · Dân tộc Học Tây Nam',
      abstract: 'Nằm ở vùng chuyển tiếp từ rìa đông bắc cao nguyên Thanh Tạng xuống bồn địa Tứ Xuyên (Châu tự trị dân tộc Tạng – Khương A Bá), Cửu Trại Câu được UNESCO ghi danh Di sản Thiên nhiên Thế giới năm 1992 nhờ hệ thống hơn 100 hồ nước bậc thang xanh ngọc bích hình thành từ trầm tích đá vôi Travertine (Calcite). Chuyên luận này giải mã cơ chế địa chất tạo nên sắc màu kỳ ảo của Ngũ Hoa Hải, cấu trúc địa hình thung lũng chữ Y và đời sống sinh thái – tín ngưỡng Bön/Phật giáo Tạng của chín bản làng bản địa.',
      keyTakeaways: [
        'Cửu Trại Câu tọa lạc ở độ cao khoảng 2.000 đến hơn 4.500 mét, cấu trúc địa hình hình chữ Y gồm ba thung lũng chính: Nhật Tắc Câu (phía Đông), Tắc Tra Oa Câu (phía Tây) và Thụ Chính Câu (trục phía Bắc hợp lưu tại Nặc Nhật Lãng).',
        'Hệ hồ bậc thang và thác nước (như Ngũ Hoa Hải, Trường Hải, Thác Nặc Nhật Lãng) được ngăn bởi các đập tự nhiên bằng đá vôi Travertine (Canxi cacbonat kết tủa từ nước karst giàu khoáng chất suốt hàng chục nghìn năm).',
        'Tên gọi "Cửu Trại Câu" (Thung lũng Chín Bản) bắt nguồn từ 9 bản làng người Tạng bản địa sinh sống hài hòa giữa rừng nguyên sinh, cờ kinh Lungta, thủy luân kinh và tín ngưỡng tôn thờ núi thiêng.'
      ],
      introduction: 'Trong câu ngạn ngữ du khảo nổi tiếng của Trung Quốc "Hoàng Sơn quy lai bất khán nhạc, Cửu Trại quy lai bất khán thủy" (Về từ Hoàng Sơn không cần xem núi khác, về từ Cửu Trại không cần xem nước khác), Cửu Trại Câu được tôn vinh là chuẩn mực tối thượng của cảnh quan thủy vực. Điều làm nên vẻ đẹp gần như siêu thực ấy không phải phép màu ngẫu nhiên mà là một phòng thí nghiệm địa chất karst vùng cao nguyên hoạt động suốt kỷ Đệ Tứ.',
      historicalBackground: 'Tên gọi "Cửu Trại Câu" xuất phát từ chín bản làng người Tạng (bao gồm Thụ Chính Trại, Tắc Tra Oa Trại, Hà Diệp Trại…) nằm rải rác trong thung lũng rừng sâu của dãy núi Mân Sơn (Tứ Xuyên). Mãi đến thập niên 1970, khu vực này mới được giới lâm nghiệp và địa chất ghi nhận rộng rãi; năm 1978 chính phủ lập khu bảo tồn thiên nhiên (chấm dứt khai thác gỗ) và năm 1992 UNESCO công nhận Di sản Thiên nhiên Thế giới. Sau trận động đất mạnh 7,0 độ tháng 8/2017 làm hư hại một số đập đá vôi (đặc biệt tại Hỏa Hoa Hải), công tác phục hồi tự nhiên kết hợp bảo tồn địa chất đã giúp hồ nước tái lập dòng chảy và mở cửa trở lại theo cơ chế kiểm soát lượng khách nghiêm ngặt.',
      mainContent: [
        {
          heading: '1. Địa chất Travertine (Canxi Cacbonat) và Quá trình Tạo Hồ Bậc Thang',
          body: 'Nền địa chất Cửu Trại Câu là tầng đá vôi trầm tích dày hình thành từ đại Cổ sinh và Trung sinh, sau đó được nâng cao bởi quá trình kiến tạo Himalaya và bào mòn bởi sông băng kỷ Đệ Tứ. Nước tuyết tan thấm qua khe nứt đá vôi hòa tan lượng lớn Canxi bicacbonat; khi chảy ra bề mặt gặp ánh nắng, nhiệt độ tăng và độ khuấy động tại các thân cây cổ thụ đổ xuống lòng suối, khí CO2 thoát ra làm kết tủa tinh thể Canxi cacbonat (Travertine / Cái hoa 钙华). Qua hàng nghìn năm, lớp kết tủa này bồi đắp thành hàng loạt đập chắn tự nhiên vững chắc, tạo nên chuỗi hồ bậc thang (Hải tử) và thác nước tầng tầng lớp lớp.'
        },
        {
          heading: '2. Cấu trúc Thung lũng Chữ Y và Tọa độ Ngũ Hoa Hải',
          body: 'Ba nhánh thung lũng của Cửu Trại Câu hợp nhau tại Trung tâm Nặc Nhật Lãng (Nuorilang) tạo thành hình chữ Y dài hơn 50 km. Nhánh Tây (Tắc Tra Oa Câu) chứa Trường Hải (hồ lớn nhất và cao nhất Cửu Trại Câu ở độ cao hơn 3.060 m) và Ngũ Thải Trì nhỏ bé rực rỡ. Nhánh Đông (Nhật Tắc Câu) là nơi hội tụ tinh hoa cảnh quan gồm Rừng Nguyên Sinh, Hồ Gấu Trúc, Thác Trân Châu và đặc biệt là Ngũ Hoa Hải (五花海): dưới làn nước tinh khiết thấy rõ từng thân cây cổ thụ hóa vôi dưới đáy, sự cộng hưởng giữa nền Travertine trắng, tảo nước ngọt, vi khoáng và tán rừng lá đỏ mùa thu tạo nên bảng màu lam – ngọc – vàng – lục biến đổi theo góc nắng.'
        },
        {
          heading: '3. Hệ sinh thái Vành đai Độ cao và Bảo tồn Gấu Trúc Lớn',
          body: 'Nhờ biên độ độ cao trải rộng từ 2.000 m lên tới trên 4.500 m, Cửu Trại Câu sở hữu thảm thực vật phân tầng rõ nét từ rừng hỗn giao lá rộng – lá kim đến đồng cỏ núi cao. Đây là vùng cư trú tự nhiên quan trọng của nhiều loài quý hiếm nằm trong danh mục bảo vệ cấp quốc gia như Gấu trúc lớn (Giant Panda), Voọc mũi hếch vàng Tứ Xuyên (Golden Snub-nosed Monkey) và Linh ngưu Takin.'
        },
        {
          heading: '4. Chín Bản Làng Tạng – Khương và Đạo đức Sinh thái Bản địa',
          body: 'Sự nguyên sơ của Cửu Trại Câu có đóng góp lớn từ truyền thống văn hóa của cư dân Tạng (hệ Tạng Amdo/Bạch Mã) và người Khương lân cận. Trong tín ngưỡng Bön và Phật giáo Tạng, núi non, rừng già và mặt hồ đều có thần linh cư ngụ; việc chặt phá rừng thiêng hay làm ô uế nguồn nước bị coi là điều cấm kỵ. Kiến trúc nhà sàn gỗ tường đá hai đến ba tầng, bánh xe cầu nguyện xoay bằng sức nước suối (Thủy chuyển kinh luân) và những dải cờ kinh ngũ sắc bay trên sườn núi tạo nên diện mạo văn hóa đặc thù của vùng biên viễn Tạng – Hán.'
        }
      ],
      theoreticalFramework: 'Dưới góc độ Địa mạo học Karst và Bảo tồn Di sản Tự nhiên, Cửu Trại Câu là hình mẫu về "tương tác địa chất – sinh học – văn hóa" (Geo-Bio-Cultural Coupling): chính sự kết hợp giữa kết tủa khoáng vật Travertine, rêu tảo giữ trầm tích và tập quán bảo vệ rừng thiêng của người Tạng đã tạo nên hệ sinh thái thủy vực cực kỳ mong manh nhưng giàu sức tự phục hồi.',
      terminologyAndLiushu: [
        { hanzi: '钙华', pinyin: 'gàihuá', hanViet: 'Cái hoa', liushu: 'Thuật ngữ địa chất học hiện đại (Travertine / Tufa)', gloss: 'Đá vôi trầm tích hóa học hình thành do kết tủa Canxi cacbonat từ nguồn nước giàu khoáng chất tạo đập hồ tự nhiên.' },
        { hanzi: '海子', pinyin: 'hǎizi', hanViet: 'Hải tử', liushu: 'Phương ngữ cao nguyên Tây Nam Trung Quốc', gloss: 'Cách gọi địa phương giàu thi vị của người Tạng – Tứ Xuyên dành cho các hồ nước trong xanh trên núi cao.' },
        { hanzi: '五花海', pinyin: 'Wǔhuāhǎi', hanViet: 'Ngũ Hoa Hải', liushu: 'Địa danh cảnh quan tiêu biểu tại Nhật Tắc Câu', gloss: 'Hồ nước nổi tiếng nhất Cửu Trại Câu có sắc nước đa tầng lam – ngọc – vàng nhờ tảo, khoáng chất và gỗ chìm hóa vôi.' },
        { hanzi: '藏寨', pinyin: 'Zàngzhài', hanViet: 'Tạng trại', liushu: 'Tạng: Hình thanh; Trại: Hình thanh (làng bản vùng núi)', gloss: 'Bản làng định cư truyền thống của người Tạng với nhà gỗ – đá và tháp trắng cầu an.' },
        { hanzi: '经幡', pinyin: 'jīngfān', hanViet: 'Kinh phan', liushu: 'Kinh: Hình thanh (bộ Mịch); Phan: Hình thanh (bộ Cân)', gloss: 'Cờ kinh ngũ sắc (xanh, trắng, đỏ, lục, vàng) in chú nguyện treo trên đèo núi và bản làng Tạng.' }
      ],
      primarySources: [
        PQ('UNESCO《世界遗产名录：九寨沟风景名胜区》（1992年）', 'Hồ sơ Di sản Thiên nhiên Thế giới UNESCO: Khu Thắng cảnh Cửu Trại Câu (1992)', 'UNESCO World Heritage List: Jiuzhaigou Valley Scenic and Historic Interest Area (1992)', '九寨沟以高原喀斯特钙华彩池、叠瀑群与原始森林生态系统闻名于世。', 'Jiǔzhàigōu yǐ gāoyuán kāsītè gàihuá cǎichí, diépùqún yǔ yuánshǐ sēnlín shēngtài xìtǒng wénmíng yú shì.', 'Cửu Trại Câu dĩ cao nguyên Ca-tư-tơ cái hoa thải trì, điệp bộc quần dữ nguyên thủy sâm lâm sinh thái hệ thống văn danh ư thế.', 'Cửu Trại Câu nổi tiếng toàn cầu nhờ hệ thống hồ sắc màu đá vôi Travertine cao nguyên, quần thể thác bậc thang và hệ sinh thái rừng nguyên sinh.', 'Jiuzhaigou is renowned worldwide for its high-altitude karst travertine polychrome pools, cascading waterfalls, and old-growth forest ecosystems.'),
        PQ('《阿坝藏族羌族自治州志·地理编》', 'Địa chí Châu tự trị dân tộc Tạng – Khương A Bá, phần Địa lý', 'Gazetteer of Aba Tibetan and Qiang Autonomous Prefecture, Geography Section', '沟内原有九个藏族村寨分布于树正、则查洼、日则三条主沟之中，故名九寨沟。', 'Gōunèi yuányǒu jiǔ gè Zàngzú cūnzhài fēnbù yú Shùzhèng, Zécháwā, Rìzé sāntiáo zhǔgōu zhī zhōng, gù míng Jiǔzhàigōu.', 'Câu nội nguyên hữu cửu cá Tạng tộc thôn trại phân bố ư Thụ Chính, Tắc Tra Oa, Nhật Tắc tam điều chủ câu chi trung, cố danh Cửu Trại Câu.', 'Trong thung lũng vốn có chín bản làng người Tạng phân bố dọc ba nhánh chính Thụ Chính, Tắc Tra Oa và Nhật Tắc, do đó mang tên Cửu Trại Câu.', 'Nine Tibetan villages originally lay dispersed across the three main valleys of Shuzheng, Zechawa, and Rize, giving rise to the name Jiuzhaigou.')
      ],
      sinoVietnameseComparison: 'Việt Nam cũng sở hữu các di sản địa chất karst đẳng cấp thế giới như Vịnh Hạ Long, Phong Nha – Kẻ Bàng, Tràng An và Cao nguyên đá Đồng Văn; điểm khác biệt nổi bật là karst Việt Nam chủ yếu thuộc vùng nhiệt đới thấp và ven biển, trong khi Cửu Trại Câu là karst cao nguyên lạnh giàu trầm tích Travertine lộ thiên tạo hồ bậc thang màu ngọc lam. Cả hai cùng chia sẻ bài toán quản trị du lịch bền vững và bảo vệ bản sắc cộng đồng dân tộc bản địa.',
      additionalReferences: 'UNESCO World Heritage Centre - Jiuzhaigou Valley (Ref. 637); Viện Hàn lâm Khoa học Trung Quốc (CAS) - Báo cáo phục hồi địa chất Travertine sau động đất 2017; Đường sắt cao tốc Xuyên – Thanh đoạn Thành Đô – Hoàng Long Cửu Trại.',
      conclusion: 'Cửu Trại Câu cho thấy vẻ đẹp kỳ vĩ của tự nhiên là kết quả cộng hưởng hàng vạn năm giữa địa chất đá vôi Travertine, hệ sinh thái rừng cao nguyên và đạo đức tôn kính núi sông của chín bản làng Tạng – Khương.'
    },
    {
      id: 'zhangjiajie-wulingyuan-sandstone-pillars',
      number: 108,
      category: 'regions',
      categoryLabel: 'Địa lý & Di sản Thiên nhiên',
      titleVi: 'Trương Gia Giới – Vũ Lăng Nguyên (张家界): Cột Sa thạch Thạch anh 380 Triệu Năm, Thiên Môn Sơn và Nhà sàn Điếu Cước Lâu Thổ Gia – Miêu',
      titleZh: '张家界—武陵源地质与人文志：三点八亿年石英砂岩峰林、天门山与土家苗族吊脚楼',
      titleZhTrad: '張家界—武陵源地質與人文誌：三點八億年石英砂岩峰林、天門山與土家苗族吊腳樓',
      titleEn: 'Zhangjiajie and Wulingyuan: 380-Million-Year Quartz-Sandstone Pillars, Tianmen Mountain, and Tujia-Miao Diaojiaolou',
      readMinutes: 14,
      epistemicTag: 'Địa mạo Học · Văn hóa Tương Tây',
      abstract: 'Tọa lạc tại vùng núi Tương Tây (tây bắc tỉnh Hồ Nam), Khu thắng cảnh Vũ Lăng Nguyên – Trương Gia Giới (Di sản Thiên nhiên Thế giới UNESCO năm 1992 và Công viên Địa chất Toàn cầu đầu tiên) sở hữu hơn 3.000 cột đá sa thạch thạch anh dựng đứng chọc trời — địa mạo đặc hữu được địa chất học quốc tế định danh riêng là "Địa mạo Trương Gia Giới". Chuyên luận khép lại bộ 108 chuyên luận này phân tích hành trình địa chất 380 triệu năm từ đáy biển cổ đại, kiến tạo karst vòm đá Thiên Môn Sơn và kiến trúc nhà sàn gỗ Điếu Cước Lâu của người Thổ Gia – Miêu.',
      keyTakeaways: [
        'Khác với núi đá vôi karst thông thường (như Quế Lâm), hơn 3.000 cột đá cao trên 200 mét tại Vũ Lăng Nguyên cấu tạo từ sa thạch thạch anh kỷ Devon (hình thành khoảng 380 triệu năm trước), bị nâng kiến tạo và cắt xẻ dọc theo khe nứt thẳng đứng tạo nên "Địa mạo Trương Gia Giới".',
        'Thiên Môn Sơn nằm tách biệt phía nam thành phố lại mang cấu trúc địa chất karst đá vôi cổ đại với cổng vòm tự nhiên khổng lồ Thiên Môn Động (hình thành sau vụ sập vách đá được sử sách ghi nhận từ năm 263 CN thời Tam Quốc).',
        'Vùng Tương Tây là cái nôi của nhà sàn Điếu Cước Lâu (吊脚楼) bằng gỗ sam dựng trên sườn dốc không cần san phẳng đất, gắn với đời sống và điệu múa Bãi Thủ Vũ của người Thổ Gia và người Miêu.'
      ],
      introduction: 'Những cột đá mảnh khảnh vươn thẳng giữa biển mây Vũ Lăng Nguyên không chỉ trở thành nguồn cảm hứng cho núi bay Hallelujah trong điện ảnh hiện đại mà còn từng hiện diện suốt nhiều thế kỷ trong tranh sơn thủy Trung Hoa. Đằng sau cảnh quan siêu thực ấy là hai hệ thống địa chất hoàn toàn khác nhau nằm kề bên nhau: rừng cột sa thạch thạch anh tại Vũ Lăng Nguyên và khối núi karst đá vôi Thiên Môn Sơn.',
      historicalBackground: 'Tên gọi "Trương Gia Giới" gắn với truyền thuyết Trương Lương (mưu sĩ khai quốc nhà Hán) ẩn cư tại Thanh Nham Sơn vùng Vũ Lăng thời Tây Hán. Năm 1982, Công viên Rừng Quốc gia Trương Gia Giới trở thành công viên rừng quốc gia đầu tiên của Trung Quốc. Năm 1992, quần thể Vũ Lăng Nguyên (gồm Công viên Rừng Trương Gia Giới, Thung lũng Sách Khê và Núi Thiên Tử) được UNESCO công nhận Di sản Thiên nhiên Thế giới; năm 2004 gia nhập mạng lưới Công viên Địa chất Toàn cầu UNESCO. Năm 2010, hội nghị địa mạo học quốc tế chính thức đặt thuật ngữ khoa học "Zhangjiajie Landform" (Địa mạo Trương Gia Giới) để chỉ kiểu rừng cột sa thạch thạch anh độc nhất vô nhị này.',
      mainContent: [
        {
          heading: '1. Hành trình 380 Triệu Năm của Rừng Cột Sa thạch Thạch anh',
          body: 'Khoảng 380 triệu năm trước (kỷ Devon giữa – muộn), khu vực Vũ Lăng Nguyên là một vịnh biển cổ nông nơi cát thạch anh tinh khiết lắng đọng dày hàng trăm mét, nén chặt thành tầng đá sa thạch thạch anh rất cứng và đồng nhất (hàm lượng SiO2 cao). Trải qua vận động kiến tạo nâng khối lục địa (vận động Yến Sơn và Himalaya), khối đá bị nứt nẻ theo mạng lưới khe nứt thẳng đứng (Vertical Joints). Nước mưa, sương giá và thực vật len vào khe nứt bào mòn dần qua hàng chục triệu năm, cắt khối cao nguyên thành hơn 3.000 cột đá dựng đứng (như cột Càn Khôn Trụ ở Viên Gia Giới, Thiên Tử Sơn) mà vẫn giữ được đỉnh bằng và vách thẳng.'
        },
        {
          heading: '2. Thiên Môn Sơn và Cổng Vòm Tự nhiên Thiên Môn Động',
          body: 'Cách Vũ Lăng Nguyên khoảng 30 km về phía nam, Thiên Môn Sơn (độ cao trên 1.500 m) lại thuộc cấu trúc đá vôi karst hùng vĩ. Điểm nhấn nổi tiếng nhất là Thiên Môn Động — vòm đá xuyên núi tự nhiên cao khoảng 131,5 mét, rộng 57 mét và sâu 60 mét. Sử liệu thời Tam Quốc (năm 263 CN dưới thời Ngô Cảnh Đế Tôn Hưu) ghi nhận vách núi Tung Lương đột ngột sập mở thành cổng thông thiên, từ đó núi đổi tên thành Thiên Môn Sơn. Để tiếp cận đỉnh núi, tuyến cáp treo dài hơn 7,4 km nối trực tiếp từ trung tâm đô thị Trương Gia Giới cùng cung đường đèo 99 khúc cua Thông Thiên Đại Đạo trở thành dấu ấn kỹ thuật giao thông miền núi nổi bật.'
        },
        {
          heading: '3. Kiến trúc Bản địa Điếu Cước Lâu (吊脚楼) của Người Thổ Gia và Miêu',
          body: 'Tại vùng núi dốc Tương Tây (Trương Gia Giới và cổ trấn Phượng Hoàng lân cận), người Thổ Gia và người Miêu phát triển kiểu nhà sàn gỗ Điếu Cước Lâu ("nhà chân treo"). Khác với cách san ủi mặt bằng làm phá vỡ kết cấu đất núi, người thợ dùng khung gỗ sam dựng cột dài ngắn khác nhau bám trực tiếp vào sườn đồi hoặc bờ suối, đỡ tầng sàn chính nhô ra không trung. Tầng dưới thoáng khí dùng chứa nông cụ và tránh ẩm thấp rắn rết; tầng trên thông gió mát mẻ làm không gian sinh hoạt, ban công chạm hoa văn gỗ tinh xảo nhìn ra thung lũng.'
        },
        {
          heading: '4. Văn hóa Tương Tây: Múa Bãi Thủ Vũ, Thổ Cẩm Tây Lan Kháp Phổ và Di sản Sống',
          body: 'Cư dân Thổ Gia và Miêu tại Trương Gia Giới bảo lưu kho tàng văn hóa phi vật thể giàu bản sắc: điệu múa tập thể Bãi Thủ Vũ (vung tay nhịp nhàng mô phỏng động tác cày cấy, săn bắn và lễ hội đón năm mới sớm hơn Tết Nguyên Đán một ngày — Cản Niên), nghề dệt thổ cẩm Tây Lan Kháp Phổ (Xilankapu) bằng sợi tơ và bông nhiều màu với hình học trừu tượng, cùng những làn điệu dân ca Tang Thực đối đáp giữa núi rừng Vũ Lăng.'
        }
      ],
      theoreticalFramework: 'Từ góc nhìn Địa mạo học so sánh, Vũ Lăng Nguyên chứng minh vai trò quyết định của thạch học (Lithology) và hệ khe nứt kiến tạo đối với hình thái cảnh quan: trong khi đá vôi hòa tan hóa học tạo nên các đỉnh chóp nón mềm mại tại Quế Lâm hay Ninh Bình, thì sa thạch thạch anh bền hóa học nhưng nứt thẳng đứng lại tạo nên "rừng cột thẳng đứng" có một không hai tại Trương Gia Giới.',
      terminologyAndLiushu: [
        { hanzi: '石英砂岩', pinyin: 'shíyīng shāyán', hanViet: 'Thạch anh sa nham', liushu: 'Thuật ngữ địa chất học', gloss: 'Đá sa thạch giàu tinh thể thạch anh độ cứng cao, vật liệu kiến tạo nên hơn 3.000 cột đá Vũ Lăng Nguyên.' },
        { hanzi: '张家界地貌', pinyin: 'Zhāngjiājiè dìmào', hanViet: 'Trương Gia Giới địa mạo', liushu: 'Thuật ngữ địa mạo học quốc tế định danh năm 2010', gloss: 'Kiểu địa hình cột và tường sa thạch thạch anh dựng đứng độc hữu của vùng Vũ Lăng Nguyên.' },
        { hanzi: '吊脚楼', pinyin: 'diàojiǎolóu', hanViet: 'Điếu cước lâu', liushu: 'Điếu: treo lơ lửng; Cước: chân cột; Lâu: nhà sàn tầng', gloss: 'Kiến trúc nhà sàn gỗ truyền thống bám sườn núi dốc của người Thổ Gia và người Miêu vùng Tương Tây.' },
        { hanzi: '摆手舞', pinyin: 'Bǎishǒuwǔ', hanViet: 'Bãi Thủ vũ', liushu: 'Tên điệu múa nghi lễ dân tộc Thổ Gia', gloss: 'Điệu múa cộng đồng truyền thống của người Thổ Gia tái hiện lao động nông nghiệp và ký ức lịch sử.' },
        { hanzi: '西兰卡普', pinyin: 'Xīlánkǎpǔ', hanViet: 'Tây Lan Kháp Phổ', liushu: 'Phiên âm tiếng Thổ Gia ("chăn hoa dệt tay")', gloss: 'Nghệ thuật dệt thổ cẩm truyền thống nổi tiếng của phụ nữ Thổ Gia vùng Hồ Nam – Hồ Bắc.' }
      ],
      primarySources: [
        PQ('UNESCO《世界遗产名录：武陵源风景名胜区》（1992年）', 'Hồ sơ Di sản Thiên nhiên Thế giới UNESCO: Khu Thắng cảnh Vũ Lăng Nguyên (1992)', 'UNESCO World Heritage List: Wulingyuan Scenic and Historic Interest Area (1992)', '武陵源以其三千余座拔地而起的石英砂岩峰柱群与深邃峡谷著称于世。', 'Wǔlíngyuán yǐ qí sānqiān yú zuò bádì ér qǐ de shíyīng shāyán fēngzhùqún yǔ shēnsuì xiágǔ zhùchēng yú shì.', 'Vũ Lăng Nguyên dĩ kỳ tam thiên dư tọa bạt địa nhi khởi đích thạch anh sa nham phong trụ quần dữ thâm thúy hiệp cốc trứ xưng ư thế.', 'Vũ Lăng Nguyên nổi tiếng toàn cầu với hơn ba nghìn cột đỉnh sa thạch thạch anh vươn thẳng từ mặt đất cùng các hẻm núi sâu thẳm.', 'Wulingyuan is celebrated worldwide for its more than 3,000 towering quartz-sandstone pillars and deep ravines.'),
        PQ('《永定县志·山川志》关于天门洞史料', 'Vĩnh Định Huyện Chí (phần Sơn Xuyên) ghi chép truyền tích Thiên Môn Sơn thời Tam Quốc', 'Yongding County Gazetteer, Mountains and Rivers Section (on Tianmen Cave)', '吴永安六年，嵩梁山峭壁忽开，玄朗如门，因改名天门山。', 'Wú Yǒng\'ān liù nián, Sōngliángshān qiàobì hū kāi, xuánlǎng rú mén, yīn gǎimíng Tiānménshān.', 'Ngô Vĩnh An lục niên, Tung Lương sơn tiễu bích hốt khai, huyền lãng như môn, nhân cải danh Thiên Môn Sơn.', 'Năm Vĩnh An thứ 6 nước Ngô (263 CN), vách đá núi Tung Lương bỗng mở thông sáng tỏ như cánh cổng trời, nhân đó đổi tên thành Thiên Môn Sơn.', 'In the sixth year of Yong\'an under Wu (263 CE), the sheer cliff of Mount Songliang suddenly opened clear as a gateway, whereupon it was renamed Tianmen Mountain.')
      ],
      sinoVietnameseComparison: 'Nhà sàn Điếu Cước Lâu vùng Tương Tây có mối liên hệ gần gũi về triết lý thích nghi địa hình với nhà sàn của người Thái, Tày, Mường, Dao tại miền núi phía Bắc Việt Nam: đều tận dụng gỗ bản địa, nâng sàn khỏi mặt đất ẩm và tôn trọng độ dốc tự nhiên thay vì san phẳng núi đồi. Về địa chất, đối chiếu cột sa thạch thạch anh Vũ Lăng Nguyên với các tháp đá vôi karst Vịnh Hạ Long và Tràng An mang lại bài học trực quan sinh động về tác động của loại đá lên hình thái cảnh quan.',
      additionalReferences: 'UNESCO World Heritage Centre - Wulingyuan Scenic and Historic Interest Area (Ref. 640); Trương Gia Giới Global Geopark Scientific Monograph; Hồ Nam Tỉnh Chí - Dân tộc Thổ Gia & Miêu.',
      conclusion: 'Khép lại hành trình 108 chuyên luận tại Trương Gia Giới – Vũ Lăng Nguyên, ta thấy rõ sợi chỉ đỏ xuyên suốt văn minh và tự nhiên Trung Hoa: từ những tầng đá sa thạch 380 triệu năm đến kiến trúc gỗ Điếu Cước Lâu trên sườn núi, thiên nhiên và con người luôn không ngừng đối thoại để tạo nên di sản trường tồn.'
    }
  ];

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
  for (i = 0; i < NEW_ARTICLES.length; i++) {
    if (!existingIds[NEW_ARTICLES[i].id]) {
      window.CCE_ARTICLES.push(NEW_ARTICLES[i]);
      existingIds[NEW_ARTICLES[i].id] = true;
    }
  }
})();
