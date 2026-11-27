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

  var ARTICLES_V3_PART1B = [
    {
      id: 'sixteen-ancient-capitals-geopolitics',
      number: 71,
      category: 'regions',
      categoryLabel: 'Địa văn hóa & Vùng miền',
      titleVi: '16 Cố đô Lịch sử Trung Hoa: Quy luật Dịch chuyển Kinh đô Trục Tây–Đông & Nam–Bắc',
      titleZh: '中国古都地理政治：东西轴线与南北迁移规律',
      titleZhTrad: '中國古都地理政治：東西軸線與南北遷移規律',
      titleEn: 'Geopolitics of China\'s Ancient Capitals: The East–West and North–South Imperial Axes',
      readMinutes: 15,
      epistemicTag: 'Địa lý Lịch sử & Địa chính trị',
      abstract: 'Chuyên luận phân tích quy luật chọn và dời kinh đô suốt hơn ba thiên niên kỷ lịch sử Trung Hoa — từ trục Tây–Đông thời thượng cổ và trung cổ (Tây An, Lạc Dương, Khai Phong) đến trục Bắc–Nam hậu kỳ đế quốc (Bắc Kinh, Nam Kinh, Hàng Châu), dưới tác động đồng thời của phòng thủ biên cương, vận tải lương thực và biến đổi sinh thái.',
      keyTakeaways: [
        'Từ Tây Chu đến nhà Đường, kinh đô chủ yếu dịch chuyển dọc trục Tây–Đông (Tây An – Lạc Dương – Khai Phong) nhờ lợi thế phòng thủ "Tứ tắc chi quốc" của Quan Trung và vị trí trung tâm thủy lộ của Hà Lạc.',
        'Từ thời Bắc Tống về sau, sự suy thoái sinh thái Quan Trung và trỗi dậy của kinh tế Giang Nam buộc các triều đại chọn Khai Phong (nút giao Biện Hà), rồi tách thành cặp cực Bắc Kinh (quân sự – biên cương) và Nam Kinh / Hàng Châu (kinh tế – văn hóa).',
        'Trong lịch sử cổ đô học Trung Quốc (Đàm Kỳ Tương, Sử Niệm Hải), tám đến mười đại cố đô chủ chốt (Tây An, Lạc Dương, Bắc Kinh, Nam Kinh, Khai Phong, Hàng Châu, An Dương, Trịnh Châu, Đại Đồng, Thành Đô…) phản ánh trực tiếp bản đồ quyền lực giữa nông canh Trung Nguyên và du mục thảo nguyên.'
      ],
      introduction: 'Việc lựa chọn kinh đô của các triều đại Trung Hoa chưa bao giờ là quyết định ngẫu hứng của cá nhân Hoàng đế, mà là bài toán tối ưu hóa giữa ba biến số sinh tử: an ninh quân sự (khả năng chống kỵ binh thảo nguyên và kiểm soát chư hầu), hậu cần lương thực (độ gần với vùng lúa gạo và đường thủy) và tính chính danh địa – văn hóa ("Trạch trung lập quốc"). Khi đặt hệ thống các cố đô lịch sử — từ An Dương, Trịnh Châu, Tây An, Lạc Dương, Khai Phong đến Nam Kinh, Hàng Châu, Bắc Kinh, Đại Đồng, Thành Đô, Nghiệp Thành — lên bản đồ địa hình, người nghiên cứu nhận thấy hai quy luật dịch chuyển rõ rệt: dịch chuyển từ Tây sang Đông trước thế kỷ X, và dịch chuyển dọc trục Nam–Bắc từ thế kỷ XII đến thế kỷ XX.',
      historicalBackground: 'Trong thiên niên kỷ II–I TCN, các kinh đô sớm nhất như Nhị Lý Đầu, Trịnh Châu Thương Thành và Ân Khư (An Dương) đều nằm ở vùng chuyển tiếp giữa cao nguyên Hoàng Thổ và bình nguyên Hoa Bắc — nơi đất hoàng thổ tơi xốp dễ canh tác và ít ngập úng hơn vùng hạ lưu Hoàng Hà. Bước sang thời Chu–Tần–Hán–Tùy–Đường, hai đô thị song sinh Trường An (Tây An, vùng Quan Trung) và Lạc Dương (vùng Hà Lạc) thay nhau giữ vai trò kinh đô chính và đông đô suốt gần hai thiên niên kỷ. Tuy nhiên, từ sau Loạn An Sử (755–763), nguồn lương thực nuôi triều đình ngày càng phụ thuộc vào vùng Giang Hoài, mở đầu quá trình ly khai vĩnh viễn khỏi vùng Quan Trung để tiến về phía Đông (Biện Kinh) và phía Bắc (Đại Đô / Bắc Kinh).',
      mainContent: [
        {
          heading: '1. Trục Tây–Đông (Tây An – Lạc Dương – Khai Phong): Từ "Đế đô Quan Trung" đến nút giao Vận Hà',
          body: 'Tây An (Hạo Kinh thời Tây Chu, Hàm Dương thời Tần, Trường An thời Tây Hán – Tùy – Đường) sở hữu địa thế "Tứ tắc chi quốc" hiếm có: phía Đông có Hàm Cốc Quan và Đồng Quan, phía Nam có dãy Tần Lĩnh, phía Tây và Bắc có cao nguyên Lũng Sơn và Hoàng Thổ bảo bọc, tạo thành pháo đài tự nhiên "tiến khả công, thoái khả thủ". Tuy nhiên, khi dân số Trường An thời Thịnh Đường vượt mốc một triệu người trong lúc rừng núi Quan Trung bị khai thác cạn kiệt và sông Vị Hà bồi lấp, chi phí vận chuyển gạo Giang Nam qua hẻm Tam Môn Hiệp trở nên quá đắt đỏ — nhiều đời Hoàng đế Đường thậm chí phải dẫn triều đình sang Lạc Dương ("Trục lương thực"). Sau nhà Đường, Bắc Tống chọn Khai Phong (Biện Kinh) — nằm ở đồng bằng trống trải không có núi hiểm — đơn thuần vì đây là đầu mối của sông Biện Hà nối thẳng xuống Trường Giang, cho thấy ưu tiên hậu cần đã lấn át ưu tiên địa hình phòng thủ.'
        },
        {
          heading: '2. Đột phá trục Bắc–Nam: Bắc Kinh và thế trận "Thiên tử thủ quốc môn"',
          body: 'Từ thế kỷ X–XIII, sự trỗi dậy của các vương triều phương Bắc (Liêu lập Nam Kinh tại Bắc Kinh năm 938, Kim định Trung Đô năm 1153, Nguyên lập Đại Đô năm 1272) đã đưa Bắc Kinh từ một trọng trấn biên viễn (U Châu) lên vị trí trung tâm chính trị của toàn Trung Quốc. Nằm ở rìa Bắc bình nguyên Hoa Bắc, lưng tựa dãy Yên Sơn và cửa ải Cư Dung Quan, mặt hướng ra biển Bột Hải và thông với Giang Nam qua Đại Vận Hà Kinh–Hàng, Bắc Kinh vừa kiểm soát thảo nguyên Mông Cổ và vùng Đông Bắc Mãn Châu vừa cai quản nội địa Hán tộc. Năm 1421, Minh Thành Tổ Chu Đệ quyết định dời đô từ Nam Kinh ra Bắc Kinh theo chiến lược "Thiên tử thủ quốc môn" (Vua trực tiếp trấn giữ cửa ngõ quốc gia), và nhà Thanh kế thừa trọn vẹn cấu trúc này suốt gần ba thế kỷ.'
        },
        {
          heading: '3. Cực đối trọng phương Nam: Nam Kinh "Long bàn Hổ cứ" và Hàng Châu Lâm An',
          body: 'Mỗi khi chính quyền Hoa Bắc sụp đổ hoặc suy yếu, trung tâm chính trị lại lùi xuống phía Nam Trường Giang với hai hình mẫu tiêu biểu là Nam Kinh và Hàng Châu. Nam Kinh (Kiến Nghiệp thời Đông Ngô, Kiến Khang thời Đông Tấn – Nam Triều, Ứng Thiên Phủ thời Minh sơ và thủ đô Trung Hoa Dân Quốc năm 1912, 1927) được Gia Cát Lượng ca ngợi là "Chung Sơn long bàn, Thạch Đầu hổ cứ" (núi Tử Kim như rồng cuộn, thành Thạch Đầu như hổ ngồi), lấy thiên hiểm Trường Giang làm phòng tuyến. Trong khi đó, Hàng Châu (kinh đô Ngô Việt và Lâm An thời Nam Tống 1138–1276) nằm sâu trong vùng lúa gạo và thương cảng giàu có nhất Giang Nam, tuy thuận lợi phát triển kinh tế – nghệ thuật nhưng lại thiếu chiều sâu chiến lược để phản công lên Hoa Bắc.'
        },
        {
          heading: '4. Các cố đô vùng đệm và khu vực: An Dương, Đại Đồng, Thành Đô, Nghiệp Thành',
          body: 'Bên cạnh các kinh đô đại thống nhất, mạng lưới 16 cố đô lịch sử còn bao gồm các trung tâm đặc thù theo từng giai đoạn: An Dương và Trịnh Châu đánh dấu bình minh đô thị thời Thương; Hàm Đan, Lâm Truy, Dĩnh Đô phản ánh đa cực thời Chiến Quốc; Đại Đồng (Bình Thành thời Bắc Ngụy) và Nghiệp Thành (tỉnh Hà Bắc, kinh đô Tào Ngụy – Bắc Tề — nơi khởi phát quy hoạch trục trung tâm đối xứng cho Trường An và Bắc Kinh sau này) đóng vai trò phòng tuyến giao thoa Hán–Hồ; còn Thành Đô (kinh đô Thục Hán và Tiền–Hậu Thục) chứng minh sức sống của vùng bồn địa khép kín có thể tự cung tự cấp trong thời loạn lạc.'
        }
      ],
      theoreticalFramework: 'Sử gia địa lý Đàm Kỳ Tương (1911–1992) và Sử Niệm Hải (1912–2001) đã khái quát quy luật kinh đô Trung Hoa qua mô hình "Lưỡng cực An ninh – Hậu cần": chừng nào đường đẳng vũ lượng 400 mm phía Bắc còn là chiến tuyến sống còn với các tộc du mục và vùng Giang Nam là vựa thuế chính, thì kinh đô của một đế quốc thống nhất buộc phải đặt ở điểm cân bằng giữa hai cực đó — ban đầu là Trường An – Lạc Dương (khi Hoàng Hà còn đủ nuôi kinh đô), sau cùng hội tụ tại Bắc Kinh nối với Giang Nam bằng Đại Vận Hà.',
      terminologyAndLiushu: [
        {
          hanzi: '都',
          pinyin: 'dū',
          hanViet: 'Đô',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Ấp (阝 bên phải: thành thị) và chữ Giả (者) chỉ âm; thời Chu chỉ thành ấp có tông miếu tiên quân, sau chỉ kinh đô quốc gia.'
        },
        {
          hanzi: '京',
          pinyin: 'jīng',
          hanViet: 'Kinh',
          liushu: 'Tượng hình',
          gloss: 'Mô phỏng tòa nhà cao dựng trên gò đất cao; chỉ nơi đặt cung điện Hoàng đế và trung tâm quyền lực tối cao.'
        },
        {
          hanzi: '关',
          pinyin: 'guān',
          hanViet: 'Quan',
          liushu: 'Hội ý',
          gloss: 'Dạng phồn thể 關 vẽ hai cánh cửa có then cài ngang; chỉ cửa ải hiểm yếu bảo vệ kinh đô (như Hàm Cốc Quan, Đồng Quan, Cư Dung Quan).'
        },
        {
          hanzi: '畿',
          pinyin: 'jī',
          hanViet: 'Kỳ',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Điền (田: ruộng đất) và chữ Kỷ (几/幾); chỉ vùng đất trong phạm vi nghìn dặm quanh kinh đô trực thuộc Thiên tử ("Kinh kỳ").'
        },
        {
          hanzi: '轴',
          pinyin: 'zhóu',
          hanViet: 'Trục',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Xa (车) và chữ Do (由) chỉ âm; trong quy hoạch cố đô chỉ "Trung trục tuyến" (trục đối xứng Bắc–Nam định hình Bắc Kinh và Nghiệp Thành).'
        }
      ],
      primarySources: [
        PQ(
          '《史记·留侯世家》',
          'Sử Ký — Lưu Hầu Thế Gia',
          'Records of the Grand Historian (Shiji), Hereditary House of Marquis Liu (Zhang Liang)',
          '关中左殽函，右陇蜀，沃野千里，南有巴蜀之饶，北有胡苑之利，阻三面而守，独以一面东制诸侯。',
          'Guānzhōng zuǒ Yáo Hán, yòu Lǒng Shǔ, wòyě qiānlǐ, nán yǒu Bā Shǔ zhī ráo, běi yǒu Húyuàn zhī lì, zǔ sānmiàn ér shǒu, dú yǐ yīmiàn dōng zhì zhūhóu.',
          'Quan Trung tả Hào Hàm, hữu Lũng Thục, ốc dã thiên lý, nam hữu Ba Thục chi nhiêu, bắc hữu Hồ Uyển chi lợi, trở tam diện nhi thủ, độc dĩ nhất diện đông chế chư hầu.',
          'Đất Quan Trung bên trái có núi Hào và ải Hàm Cốc, bên phải có Lũng Tây và đất Thục, đồng ruộng phì nhiêu nghìn dặm; phía Nam có sự trù phú của Ba Thục, phía Bắc có lợi chăn nuôi vùng thảo nguyên; dựa ba mặt hiểm trở để phòng thủ, chỉ mở một mặt phía Đông để khống chế chư hầu.',
          'Guanzhong has Mount Xiao and Hangu Pass to the east, Longxi and Shu to the west, and a thousand li of fertile plains; flanked by abundant Ba–Shu to the south and northern pastures, it defends on three sides while controlling the eastern lords from a single front.'
        ),
        PQ(
          '《吕氏春秋·慎势》',
          'Lã Thị Xuân Thu — Thiên Thận Thế',
          'Master Lü\'s Spring and Autumn Annals, Chapter Shenshi',
          '古之王者，择天下之中而立国，择国之中而立宫。',
          'Gǔ zhī wángzhě, zé tiānxià zhī zhōng ér lìguó, zé guó zhī zhōng ér lìgōng.',
          'Cổ chi vương giả, trạch thiên hạ chi trung nhi lập quốc, trạch quốc chi trung nhi lập cung.',
          'Bậc đế vương thời xưa chọn trung tâm thiên hạ để dựng nước, chọn trung tâm đất nước để dựng cung điện.',
          'The kings of antiquity chose the center of All-under-Heaven to establish the capital, and the center of the capital to build the palace.'
        )
      ],
      sinoVietnameseComparison: 'Quy luật dịch chuyển kinh đô Việt Nam cũng tuân theo bài toán an ninh – hậu cần tương tự nhưng dọc theo trục Bắc–Nam của dải đất hình chữ S: từ thành ốc quân sự Cổ Loa và núi đá phòng thủ Hoa Lư (thế kỷ X), năm 1010 Lý Công Uẩn ban "Chiếu dời đô" chuyển về Đại La – Thăng Long (tương đồng với tư duy "trạch trung lập quốc" ở trung tâm châu thổ sông Hồng, giao điểm thủy lộ). Đến khi lãnh thổ mở rộng sâu về phương Nam, nhà Tây Sơn và nhà Nguyễn chọn Phú Xuân – Huế (1802) làm kinh đô nhằm cân bằng khoảng cách địa chính trị giữa hai châu thổ sông Hồng và sông Cửu Long.',
      additionalReferences: [
        'Sử Niệm Hải (1998), Trung Quốc Cổ Đô Hòa Văn Hóa (中国古都和文化), Trung Hoa Thư Cục.',
        'Đàm Kỳ Tương (1982), Trung Quốc Lịch Sử Địa Đồ Tập (中国历史地图集), Trung Quốc Địa Đồ Xuất Bản Xã.',
        'Nancy Shatzman Steinhardt (1990), Chinese Imperial City Planning, University of Hawaii Press.'
      ],
      conclusion: 'Bản đồ các cố đô Trung Hoa là biên niên sử bằng đá và địa hình về sức ép biên cương, thủy lợi và kinh tế vùng miền chứ ít mang tính danh sách địa danh du lịch đơn lẻ. Từ thế phòng thủ "tứ tắc" của Trường An đến trục Trung tâm Bắc Kinh nối với Đại Vận Hà, mỗi lần dời đô đều đánh dấu một cuộc tái cấu trúc không gian của cả nền văn minh.'
    },
    {
      id: 'tea-horse-road-southwest-corridor',
      number: 72,
      category: 'regions',
      categoryLabel: 'Địa văn hóa & Vùng miền',
      titleVi: 'Trà Mã Cổ Đạo: Hành lang Giao thương Trà Phổ Nhĩ – Ngựa Chiến Vân Nam – Tứ Xuyên – Tây Tạng',
      titleZh: '茶马古道：滇川藏普洱与战马贸易走廊',
      titleZhTrad: '茶馬古道：滇川藏普洱與戰馬貿易走廊',
      titleEn: 'The Ancient Tea Horse Road: The Yunnan–Sichuan–Tibet Corridor of Pu\'er Tea and Warhorses',
      readMinutes: 14,
      epistemicTag: 'Lịch sử Thương mại & Nhân học Vùng cao',
      abstract: 'Chuyên luận khảo cứu mạng lưới giao thương miền núi cao bậc nhất châu Á — Trà Mã Cổ Đạo (Điền–Tạng và Xuyên–Tạng) từ thời Đường–Tống đến giữa thế kỷ XX, giải mã cơ chế kinh tế bổ trợ "Trà Mã hỗ thị", kỹ thuật ép bánh trà Phổ Nhĩ lên men tự nhiên và sự hình thành văn hóa giao thoa Nạp Tây – Bạch – Tạng.',
      keyTakeaways: [
        'Khác với Con đường Tơ lụa phía Bắc trao đổi hàng xa xỉ, Trà Mã Cổ Đạo dựa trên nhu cầu sinh tồn thiết yếu hai chiều: cư dân cao nguyên Tây Tạng cần trà ép để tiêu hóa khẩu phần giàu thịt–bơ thiếu rau xanh, còn triều đình Trung Nguyên cần ngựa chiến cao nguyên.',
        'Hai tuyến chính — Xuyên–Tạng (từ Nhã An qua Khang Định vào Lhasa) và Điền–Tạng (từ Tây Song Bản Nạp – Phổ Nhĩ qua Đại Lý, Lệ Giang, Shangri-La vào Lhasa) — vận hành bằng đoàn ngựa thồ (Mã Bang) và phu gánh trà (Bối Phu) vượt các đèo tuyết trên 4.500 m.',
        'Sự phồn thịnh của các trạm trung chuyển như Lệ Giang (người Nạp Tây), Hỷ Châu – Sa Khê (người Bạch) và Khang Định đã bảo tồn hệ thống cổ trấn, chữ tượng hình Đông Ba và nghệ thuật bích họa dung hợp Phật–Đạo–Tạng.'
      ],
      introduction: 'Trong khi Con đường Tơ lụa qua hành lang Hà Tây đã được thế giới biết đến rộng rãi từ thế kỷ XIX, thì mạng lưới giao thương bằng đường mòn vách đá xuyên qua dãy Hoành Đoạn Sơn ở Tây Nam Trung Quốc — được nhóm học giả Vân Nam (Mộc Tễ Xuân và cộng sự) định danh hệ thống là "Trà Mã Cổ Đạo" đầu thập niên 1990 — lại có lịch sử bền bỉ không kém và còn hoạt động thực tế tới tận thập niên 1950. Trải dài hơn 4.000 km vượt qua bốn con sông lớn (Kim Sa Giang, Lan Thương Giang, Nộ Giang và Nhã Lỗ Tạng Bố Giang), tuyến đường này là mạch máu sinh học và văn hóa kết nối thế giới nông canh ẩm ướt phía Nam với thế giới du mục cao nguyên Thanh–Tạng.',
      historicalBackground: 'Truyền thống uống trà thâm nhập vào Tây Tạng từ thế kỷ VII gắn với cuộc hôn nhân giữa Tùng Tán Cán Bố và Công chúa Văn Thành thời Đường Thái Tông. Do khí hậu cao nguyên trên 3.500 m hầu như không trồng được rau xanh, bữa ăn của người Tạng chủ yếu gồm thịt bò Yak, thịt cừu, bơ sữa và bột lúa mạch Tản Ba; chất tannin, caffeine và vitamin trong trà bánh trở thành yếu tố không thể thiếu giúp tiêu hóa chất béo ("Thà ba ngày không lương, không thể một ngày không trà"). Ngược lại, từ thời Bắc Tống (đặc biệt sau khi mất bãi chăn ngựa phía Bắc vào tay Liêu và Tây Hạ), triều đình Trung Nguyên rơi vào cơn khát ngựa chiến. Năm Hy Ninh thứ 7 (1074), nhà Tống thiết lập "Trà Mã Ty" tại Tứ Xuyên và Thiểm Tây, chính thức thể chế hóa cơ chế nhà nước độc quyền đổi trà lấy ngựa ("Dĩ trà dịch mã").',
      mainContent: [
        {
          heading: '1. Hai huyết mạch Xuyên–Tạng và Điền–Tạng: Phu gánh Bối Phu và Mã Bang',
          body: 'Trà Mã Cổ Đạo gồm hai trục chính bổ trợ nhau. Tuyến Xuyên–Tạng khởi phát từ vùng chè Nhã An (Tứ Xuyên), nơi các phu gánh trà ("Bối Phu") mang trên lưng những kiện trà bánh nặng từ 60 đến hơn 100 kg đi bộ hơn 20 ngày qua đèo Nhị Lang Sơn tới Khang Định (Đả Tiễn Lô) để chuyển giao cho đoàn bò Yak của thương nhân Tạng đưa vào Lhasa. Tuyến Điền–Tạng khởi nguồn từ Lục Đại Trà Sơn (Tây Song Bản Nạp và Phổ Nhĩ, Vân Nam), đi qua Đại Lý, Sa Khê, Lệ Giang, Địch Khánh (Shangri-La), Xương Đô tới Lhasa, rồi nối tiếp qua biên giới xuống Nepal và Ấn Độ. Trên tuyến Điền–Tạng, các đoàn ngựa thồ ("Mã Bang") do thủ lĩnh "Mã Quá Đầu" chỉ huy gồm hàng chục đến hàng trăm con la, ngựa có gắn chuông đồng, vận hành theo kỷ luật chặt chẽ chống thú dữ và thổ phỉ trên các vách đá hẹp.'
        },
        {
          heading: '2. Trà Phổ Nhĩ và quá trình "Hậu lên men" sinh ra từ chính hành trình đường dài',
          body: 'Một phát hiện kỹ thuật thú vị của Trà Mã Cổ Đạo là chính điều kiện vận chuyển khắc nghiệt đã định hình hương vị đặc trưng của trà Phổ Nhĩ (Pu\'er) và Biên Trà Tứ Xuyên. Để giảm thể tích và chống vụn vỡ trên lưng ngựa suốt nhiều tháng, lá trà tươi (trà xanh phơi nắng đại diệp Vân Nam) được hấp mềm và ép chặt thành bánh tròn (Thất Tử Bính Trà, 357 g/bánh), hình bát (Đà Trà) hoặc viên gạch (Chuyên Trà). Khi đoàn Mã Bang di chuyển qua các vùng tiểu khí hậu nóng ẩm của thung lũng sông Lan Thương rồi lên gió lạnh khô của cao nguyên Tạng, hệ vi sinh vật tự nhiên bên trong bánh trà kích hoạt quá trình hậu lên men chậm, làm giảm vị chát gắt và tạo nên nước trà đỏ hổ phách êm dịu — nền tảng cho kỹ thuật ủ trà Phổ Nhĩ chín hiện đại từ thập niên 1970.'
        },
        {
          heading: '3. Các thị trấn trung chuyển đa tộc người: Lệ Giang, Sa Khê và Khang Định',
          body: 'Dọc theo hành lang Điền–Tạng, thương mại trà–ngựa đã nuôi dưỡng các đô thị bản địa giàu bản sắc mà không cần tường thành quân sự kiểu Trung Nguyên. Cổ trấn Lệ Giang (Đại Nghiên, Di sản UNESCO năm 1997) dưới sự cai trị của dòng họ Mộc (người Nạp Tây) trở thành trung tâm đúc đồ đồng, thuộc da và giao dịch của Mã Bang; chữ tượng hình Đông Ba (Dongba) và Bích họa Bạch Sa lưu giữ dấu ấn dung hợp hiếm có giữa Phật giáo Tạng, Phật giáo Hán, Đạo giáo và tín ngưỡng bản địa. Tại thung lũng Kiếm Xuyên (Đại Lý), cổ trấn Sa Khê (Chợ Tự Đăng Nhai) là khu chợ giao dịch cổ duy nhất còn giữ nguyên cấu trúc sân khấu kịch cổ, chùa Hưng Giáo (1415) và cổng thành đất của Trà Mã Cổ Đạo.'
        },
        {
          heading: '4. Từ đường mòn đá cổ đến tuyến Đường sắt Xuyên–Tạng và Hành lang Tây Nam',
          body: 'Vai trò chiến lược của Trà Mã Cổ Đạo từng được thắp lại trong Thế chiến II (1942–1945), khi tuyến đường Miến Điện bị quân Nhật cắt đứt, hàng nghìn đoàn Mã Bang lại gánh hàng tiếp tế vượt Himalaya từ Ấn Độ qua Tây Tạng về hậu phương Trùng Khánh. Chỉ đến khi hai tuyến quốc lộ Xuyên–Tạng và Thanh–Tạng thông xe năm 1954, các đoàn ngựa thồ thương mại mới dần chấm dứt sứ mệnh lịch sử. Ngày nay, tuyến Đường sắt Lệ Giang – Shangri-La (khai thông cuối năm 2023) và đại dự án Đường sắt Xuyên–Tạng đang tiếp nối đúng hành lang địa kinh tế nghìn năm ấy ở quy mô kỹ thuật hiện đại.'
        }
      ],
      theoreticalFramework: 'Dưới góc độ nhân học kinh tế và địa lý thương mại (như nghiên cứu của Bin Yang về Tây Nam Trung Quốc), Trà Mã Cổ Đạo là ví dụ kinh điển của "hệ thống trao đổi sinh thái bổ trợ theo độ cao" (vertical ecological complementarity). Khác với thương mại biển phụ thuộc gió mùa hay đường bộ thảo nguyên phụ thuộc sự ổn định chính trị đế quốc, mạng lưới trà–ngựa bền bỉ qua mọi biến động triều đại vì nó gắn trực tiếp vào nhu cầu sinh lý hằng ngày của cộng đồng cao nguyên và nhu cầu an ninh của đồng bằng.',
      terminologyAndLiushu: [
        {
          hanzi: '茶',
          pinyin: 'chá',
          hanViet: 'Trà',
          liushu: 'Hình thanh',
          gloss: 'Tách ra từ chữ Đồ (荼) thời Trung Đường (từ "Trà Kinh" của Lục Vũ): gồm bộ Thảo (艹) chỉ thực vật, nhân (人) và mộc (木), chỉ cây trà.'
        },
        {
          hanzi: '马',
          pinyin: 'mǎ',
          hanViet: 'Mã',
          liushu: 'Tượng hình',
          gloss: 'Dạng phồn thể 馬 vẽ hình đầu, bờm, bốn chân và đuôi ngựa; hàng hóa chiến lược đổi ngang giá với trà tại các Trà Mã Ty Tống–Minh.'
        },
        {
          hanzi: '帮',
          pinyin: 'bāng',
          hanViet: 'Bang',
          liushu: 'Hình thanh',
          gloss: 'Dạng phồn thể 幫 gồm bộ Cân (巾: vải buộc) và chữ Phong (封/邦) chỉ âm; chỉ tổ chức liên kết tương trợ như Mã Bang (đoàn ngựa thồ).'
        },
        {
          hanzi: '驿',
          pinyin: 'yì',
          hanViet: 'Dịch',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Mã (马: ngựa) và chữ Dịch (泽/睪); chỉ trạm dừng chân thay ngựa, truyền công văn và kho chứa trà dọc đường núi.'
        },
        {
          hanzi: '坨',
          pinyin: 'tuó',
          hanViet: 'Đà',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thổ (土) và chữ Tha (它) chỉ âm; chỉ khối trà ép hình chén (Đà Trà Hạ Quan) tối ưu cho việc xếp sọt thồ trên lưng la ngựa.'
        }
      ],
      primarySources: [
        PQ(
          '《明史·食货志四·茶法》',
          'Minh Sử — Thực Hóa Chí (Quyển 4: Trà Pháp)',
          'History of Ming (Mingshi), Treatise on Food and Money: Tea Monopoly',
          '番人嗜乳酪，不得茶，则困以病。故唐、宋以来，行以茶易马法，用制羌、戎。',
          'Fānrén shì rǔlào, bùdé chá, zé kùn yǐ bìng. Gù Táng, Sòng yǐlái, xíng yǐ chá yì mǎ fǎ, yòng zhì Qiāng, Róng.',
          'Phiên nhân thị nhũ lạc, bất đắc trà, tắc khốn dĩ bệnh. Cố Đường, Tống dĩ lai, hành dĩ trà dịch mã pháp, dụng chế Khương, Nhung.',
          'Người vùng cao nguyên ưa dùng sữa và bơ, nếu không có trà thì dễ sinh mệt mỏi, bệnh tật. Bởi vậy từ thời Đường, Tống trở đi, triều đình thi hành phép lấy trà đổi ngựa để quản lý và giao thương với các bộ tộc Khương, Nhung.',
          'The frontier peoples rely heavily on dairy; without tea they fall ill and grow weak. Hence since the Tang and Song dynasties, the court practiced exchanging tea for horses to regulate frontier relations.'
        ),
        PQ(
          '《宋史·食货志下六·茶下》',
          'Tống Sử — Thực Hóa Chí (Trà Hạ)',
          'History of Song (Songshi), Treatise on Tea',
          '蜀茶之出，岁约三千万斤，以易番马。',
          'Shǔchá zhī chū, suì yuē sānqiānwàn jīn, yǐ yì fānmǎ.',
          'Thục trà chi xuất, tuế ước tam thiên vạn cân, dĩ dịch phiên mã.',
          'Sản lượng trà xuất từ đất Thục mỗi năm ước khoảng ba mươi triệu cân, dùng để trao đổi lấy ngựa vùng biên.',
          'Annual tea output from Sichuan reached roughly thirty million jin, employed to trade for frontier horses.'
        )
      ],
      sinoVietnameseComparison: 'Vùng núi Tây Bắc Việt Nam (Hà Giang, Sơn La, Lai Châu, Yên Bái) nằm chung dải sinh thái rừng chè cổ thụ Shan Tuyết (Camellia sinensis var. assamica) với vùng Phổ Nhĩ – Tây Song Bản Nạp (Vân Nam) qua lưu vực sông Hồng và sông Đà. Trước khi đường bộ hiện đại hình thành, cư dân Mông, Dao, Thái tại vùng cao Bắc Bộ cũng duy trì các tuyến đường ngựa thồ kết nối với Vân Nam và Lào để trao đổi chè cổ thụ, muối ăn, thảo quả và dược liệu, chia sẻ nhiều nét tương đồng về kỹ nghệ ép trà bánh và tổ chức chợ phiên vùng cao.',
      additionalReferences: [
        'Mộc Tễ Xuân / Mu Jichun (1992), Điền–Tạng Trà Mã Cổ Đạo Văn Hóa (滇藏茶马古道文化), Vân Nam Đại Học Xuất Bản Xã.',
        'Jeff Fuchs (2008), The Ancient Tea Horse Road: Travels with the Last of the Himalayan Muleteers, Viking Canada.',
        'Bin Yang (2009), Between Winds and Clouds: The Making of Yunnan (Second Century BCE to Twentieth Century CE), Columbia University Press.'
      ],
      conclusion: 'Trà Mã Cổ Đạo cho thấy địa hình hiểm trở nhất hành tinh không ngăn cản được giao thương khi tồn tại sự bổ trợ sinh học và kinh tế sâu sắc. Qua hàng thế kỷ dấu chân ngựa thồ in hằn trên đá xanh Hoành Đoạn Sơn, tuyến đường này vừa trao đổi bánh trà và chiến mã vừa dệt nên mạng lưới văn hóa đa tộc người bền vững ở Tây Nam Trung Quốc.'
    },
    {
      id: 'chinese-fermentation-spices-culinary-geography',
      number: 73,
      category: 'cuisine',
      categoryLabel: 'Ẩm thực & Địa lý Vị giác',
      titleVi: 'Địa lý Gia vị & Lên men Trung Hoa: Tương Đậu Tứ Xuyên, Giấm Trấn Giang, Rượu Thiệu Hưng & Phân tầng Vị Vùng Miền',
      titleZh: '中国发酵与调味地理：郫县豆瓣、镇江香醋、绍兴黄酒与风味分层',
      titleZhTrad: '中國發酵與調味地理：郫縣豆瓣、鎮江香醋、紹興黃酒與風味分層',
      titleEn: 'Geography of Chinese Fermentation and Spices: Pixian Doubanjiang, Zhenjiang Vinegar, Shaoxing Wine, and Regional Flavor Strata',
      readMinutes: 14,
      epistemicTag: 'Nhân học Ẩm thực & Công nghệ Thực phẩm Cổ truyền',
      abstract: 'Thay vì lặp lại mô tả tổng quan về Bát Đại Thái Hệ, chuyên luận đi thẳng vào "hệ điều hành hóa sinh" bên dưới ẩm thực Trung Hoa: công nghệ lên men bằng nấm mốc (Khúc/Qu) được ghi nhận từ "Tề Dân Yếu Thuật" (544), địa lý vi sinh của tương đậu Tì Huyện, giấm thơm Trấn Giang, rượu Thiệu Hưng, đậu phụ và bước ngoặt nhập khẩu ớt châu Mỹ thế kỷ XVII.',
      keyTakeaways: [
        'Cốt lõi phân biệt ẩm thực Trung Hoa với nhiều nền ẩm thực khác là công nghệ lên men đa chủng bằng "Khúc" (Qu / Aspergillus oryzae), giúp phân giải tinh bột và protein thực vật thành axit amin tự do (vị umami) trong nước tương, tàu xì và tương đậu.',
        'Bản đồ vị giác vùng miền gắn trực tiếp với điều kiện thủy thổ và hệ vi sinh địa phương: độ ẩm bồn địa Tứ Xuyên tạo nên tương đậu Tì Huyện (kết hợp hoa tiêu bản địa và ớt Nhị Kinh Điều du nhập từ châu Mỹ); nước hồ Giám Hồ tạo nên rượu nấu ăn Thiệu Hưng; lên men rắn theo tầng tạo nên giấm Trấn Giang và giấm Sơn Tây.',
        'Đậu phụ (ghi nhận từ thời Tây Hán trên tranh khắc đá mộ Đả Hổ Đình, Hà Nam) và các chế phẩm lên men từ đậu nành (chao/đậu phụ nhũ, tàu xì) là giải pháp cung cấp đạm và bảo quản thực phẩm mang tính cách mạng của nền văn minh nông canh.'
      ],
      introduction: 'Nếu các món ăn nổi tiếng chỉ là bề mặt thị giác của ẩm thực Trung Hoa, thì tầng sâu quyết định bản sắc từng vùng miền lại nằm trong chum vại lên men và hộp gia vị trong gian bếp. Từ hơn hai thiên niên kỷ trước, cư dân lưu vực Hoàng Hà và Trường Giang đã làm chủ công nghệ nuôi cấy nấm mốc ("Khúc") để biến đậu nành, lúa mì, gạo nếp và cao lương thành kho gia vị giàu vị ngọt đạm (umami) mà không cần phụ thuộc vào sữa hay thịt. Khảo cứu "địa lý gia vị và lên men" giúp giải mã vì sao cùng một nguyên liệu thịt hay rau nhưng chỉ cần đổi từ tương đậu Tì Huyện sang rượu Thiệu Hưng hay giấm lão Sơn Tây là toàn bộ cấu trúc hương vị lập tức đổi sang một vùng văn hóa khác.',
      historicalBackground: 'Các hũ đựng "Tương" (tương thịt và tương cá lên men) đã xuất hiện trong "Chu Lễ" và "Luận Ngữ" ("Bất đắc kỳ tương, bất thực" — không đúng loại tương thì không ăn). Đến thời Tây Hán, việc ép sữa đậu nành đông tụ bằng thạch cao hoặc nước ót muối đã sản sinh ra đậu phụ, đồng thời đậu nành lên men (đậu xì / Đạm đậu xì khai quật được ngay trong mộ số 1 Mã Vương Đôi năm 168 TCN tại Trường Sa) dần thay thế tương thịt đắt đỏ. Năm 544 thời Bắc Ngụy, Giả Tư Hiệp hoàn thành bộ nông thư "Tề Dân Yếu Thuật", dành hẳn nhiều quyển mô tả định lượng quy trình làm khúc, ủ giấm, làm tương đậu và ủ rượu — bộ cẩm nang vi sinh thực phẩm sớm bậc nhất lịch sử thế giới. Đến cuối thời Minh – đầu Thanh (thế kỷ XVII), cây ớt (Capsicum) từ châu Mỹ theo tuyến hàng hải Bồ Đào Nha – Tây Ban Nha truyền vào vùng ven biển rồi ngược lên Tứ Xuyên, Hồ Nam, Quý Châu, làm thay đổi vĩnh viễn bản đồ vị cay Trung Quốc.',
      mainContent: [
        {
          heading: '1. Tương đậu Tì Huyện (Pixian Doubanjiang) và sự kết hợp Hoa tiêu – Ớt',
          body: 'Được mệnh danh "linh hồn của ẩm thực Tứ Xuyên", tương đậu Tì Huyện (nay thuộc quận Tì Đô, Thành Đô) hình thành cuối thế kỷ XVII từ cuộc di cư "Hồ Quảng điền Tứ Xuyên" (họ Trần từ Phúc Kiến mang kỹ thuật ủ tương kết hợp đậu tằm bản địa và ớt mới du nhập). Điểm đặc biệt của tương đậu Tì Huyện là lên men mở ngoài trời theo nguyên tắc "Tình thiên phiên, vũ thiên cái, nhật phơi dạ lộ" (ngày nắng đảo trộn, trời mưa đậy nắp, phơi nắng ban ngày hứng sương ban đêm) từ 1 đến 3 năm mà không cần gia nhiệt, tạo màu đỏ nâu bóng tự nhiên và hương thơm phức hợp. Khi kết hợp với hoa tiêu Hán Nguyên (Zanthoxylum bungeanum — gia vị bản địa xuất hiện từ Kinh Thi tạo cảm giác tê nhẹ nhờ hợp chất hydroxy-alpha-sanshool), cặp đôi "Ma – Lạt" (tê – cay) trở thành dấu ấn không thể nhầm lẫn của vùng Tây Nam ẩm ướt.'
        },
        {
          heading: '2. Hai thái cực Giấm cổ truyền: Giấm thơm Trấn Giang và Giấm lão Sơn Tây',
          body: 'Trung Quốc sở hữu truyền thống lên men giấm ngũ cốc thể rắn (Solid-State Fermentation) khác hẳn giấm rượu vang thể lỏng của châu Âu. Ở phương Nam, giấm thơm Trấn Giang (Giang Tô, thương hiệu Hằng Thuận từ năm 1840) dùng gạo nếp làm nguyên liệu chính, lên men nhiều tầng và ủ chượp trong chum sành hơn 6 tháng, cho vị chua dịu, ngọt hậu và hương thơm nhẹ đặc trưng, rất hợp chấm bánh bao súp và cua lông. Ở phương Bắc, giấm lão trần Sơn Tây (Thanh Từ) dùng cao lương, cám lúa mì và đậu Hà Lan, trải qua quy trình "Hạ phục phơi nắng, đông chí lấy băng" (lọc bỏ nước đá mùa đông để cô đặc giấm tự nhiên qua nhiều năm), cho màu đen sẫm, vị chua gắt đậm đà giúp cân bằng chế độ ăn giàu tinh bột mì và nguồn nước cứng nhiều khoáng chất vùng cao nguyên Hoàng Thổ.'
        },
        {
          heading: '3. Rượu Thiệu Hưng (Hoàng Tửu nấu ăn) và nghệ thuật khử tanh Giang Nam',
          body: 'Tại vùng châu thổ Trường Giang giàu thủy sản nước ngọt, rượu gạo nếp Thiệu Hưng (Chiết Giang) — ủ từ gạo nếp tinh, lúa mì làm khúc và nguồn nước hồ Giám Hồ giàu khoáng vi lượng — vừa là thức uống vừa giữ vai trò gia vị nền tảng (Liệu Tửu). Quá trình lên men tạo ra hơn 20 loại axit amin và hợp chất este thơm; khi cho vào chảo nóng, cồn bay hơi kéo theo các amin gây mùi tanh của cá, cua (phản ứng este hóa tạo hương thơm ngọt dịu). Chính sự phối hợp giữa rượu Thiệu Hưng, nước tương đậm ủ nắng tự nhiên và đường phèn đã tạo nên phổ vị "Nồng du xích tương" (sốt đỏ óng ánh, mặn ngọt hài hòa) đặc trưng của Thượng Hải, Chiết Giang và Giang Tô.'
        },
        {
          heading: '4. Hệ sinh thái Đậu phụ và phân tầng bản đồ vị giác địa lý',
          body: 'Từ một hạt đậu nành, kỹ nghệ thực phẩm Trung Hoa tạo ra chuỗi biến thể theo vùng khí hậu: đậu phụ non dùng thạch cao ở miền Nam mịn mượt, đậu phụ chắc dùng nước ót muối (Lỗ thủy) ở miền Bắc giữ nguyên khối khi hầm; đậu phụ lên men mốc (Đậu phụ nhũ / Chao) đỏ ở Bắc Kinh (Vương Trí Hòa, 1669), chao trắng ở Quế Lâm, đậu phụ thối Trường Sa (ngâm nước ót măng – nấm đông cô) và đậu phụ lông (Mao đậu phụ) An Huy. Tổng thể, bản đồ vị giác Trung Hoa phân tầng theo địa lý – khí hậu rất rõ: Nam ngọt (Giang Nam nhiều mía đường và thương mại), Bắc mặn (Hoa Bắc cần bảo quản thực phẩm qua mùa đông dài), Đông cay nồng thanh/hải vị, Tây chua–tê–cay (Tứ Xuyên, Quý Châu, Hồ Nam dùng vị chua lên men và cay để kích thích vị giác trong khí hậu sương mù ẩm lạnh).'
        }
      ],
      theoreticalFramework: 'Học giả nhân học thực phẩm K. C. Chang (Trương Quang Trực) phân tích ẩm thực Trung Hoa qua cặp phạm trù cấu trúc "Phạn" (ngũ cốc chủ thực) và "Thái" (thức ăn kèm giàu gia vị). Trong bối cảnh mật độ dân số cao khiến diện tích chăn nuôi hạn chế, công nghệ lên men đậu nành và ngũ cốc bằng nấm mốc Khúc (Qu) đã đóng vai trò "nhà máy đạm và hương vị vi sinh", cho phép một lượng nhỏ gia vị lên men nâng tầm giá trị cảm quan và dinh dưỡng của khẩu phần chủ yếu từ thực vật.',
      terminologyAndLiushu: [
        {
          hanzi: '酱',
          pinyin: 'jiàng',
          hanViet: 'Tương',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Dạng phồn thể 醬 gồm bộ Dậu (酉: bình ủ rượu/lên men) biểu nghĩa lên men và chữ Tương (將) chỉ âm; chỉ các loại nước chấm, tương đặc lên men.'
        },
        {
          hanzi: '醋',
          pinyin: 'cù',
          hanViet: 'Thố / Giấm',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Dậu (酉: bình ủ lên men) và chữ Tích (昔) chỉ âm; cổ văn vốn gọi là "Tạc" (酢) hoặc "Hải" (醯), sau thống nhất dùng 醋 chỉ giấm ăn.'
        },
        {
          hanzi: '曲',
          pinyin: 'qū',
          hanViet: 'Khúc (Men)',
          liushu: 'Hình thanh (dạng gốc 麴)',
          gloss: 'Dạng phồn thể 麴 gồm bộ Mạch (麥: lúa mì) và chữ Cúc (匊) chỉ âm; chỉ bánh men mốc dùng để đường hóa tinh bột trong sản xuất rượu, giấm và tương.'
        },
        {
          hanzi: '椒',
          pinyin: 'jiāo',
          hanViet: 'Tiêu',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Mộc (木: cây gỗ) và chữ Thúc (叔) chỉ âm; nghĩa cổ chỉ cây hoa tiêu bản địa (花椒), về sau mở rộng ghép cho ớt (辣椒) và hồ tiêu (胡椒).'
        },
        {
          hanzi: '豉',
          pinyin: 'chǐ',
          hanViet: 'Xì (Tàu xì)',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Đậu (豆) và chữ Chi (支) chỉ âm; chỉ hạt đậu nành đen hoặc vàng đã lên men muối (đậu xì), tìm thấy từ mộ Mã Vương Đôi thời Hán.'
        }
      ],
      primarySources: [
        PQ(
          '《齐民要术·卷八·作酱法》',
          'Tề Dân Yếu Thuật — Quyển 8 (Phép làm Tương)',
          'Essential Techniques for the Welfare of the People (Qimin Yaoshu, 544 CE), Ch. 8',
          '十二月、正月为上时，二月为中时，三月为下时。用豆，皆须炒令黄黑，煮令极熟。',
          'Shíèryuè, zhēngyuè wéi shàngshí, èryuè wéi zhōngshí, sānyuè wéi xiàshí. Yòng dòu, jiē xū chǎo lìng huánghēi, zhǔ lìng jíshú.',
          'Thập nhị nguyệt, chính nguyệt vi thượng thời, nhị nguyệt vi trung thời, tam nguyệt vi hạ thời. Dụng đậu, giai tu sao lệnh hoàng hắc, chử lệnh cực thục.',
          'Tháng Chạp và tháng Giêng là thời điểm tốt nhất để làm tương, tháng Hai là mức trung bình, tháng Ba là muộn. Đậu đem dùng đều phải rang cho vàng sẫm rồi nấu cho thật chín mềm.',
          'The twelfth and first months are the best season for making fermented paste, the second month is middling, and the third month is late. All beans used must be roasted until dark golden-brown and boiled until thoroughly tender.'
        ),
        PQ(
          '《论语·乡党》',
          'Luận Ngữ — Thiên Hương Đảng',
          'The Analects of Confucius, Chapter Xiangdang',
          '不得其酱，不食。',
          'Bùdé qí jiàng, bù shí.',
          'Bất đắc kỳ tương, bất thực.',
          'Món ăn nếu không có đúng loại tương chấm tương ứng thì không ăn.',
          'If a dish was not accompanied by its proper fermented sauce, he would not eat it.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam và Trung Quốc đều thuộc "vành đai văn minh lên men Đông Á" nhưng phân nhánh rõ rệt về nguyên liệu lõi: Trung Quốc lấy lên men thực vật bằng nấm mốc Khúc (nước tương đậu nành, tương đậu Tì Huyện, giấm gạo) làm trục chính, trong khi Việt Nam phát triển đỉnh cao công nghệ lên men thủy sản tự phân bằng muối biển (nước mắm, mắm tôm, mắm cá linh) song song với tương gạo nếp – đậu nành truyền thống vùng đồng bằng Bắc Bộ (tương Bần, tương Cự Đà, tương Nam Đàn). Cả hai đều dùng sản phẩm lên men làm nền tạo vị umami tự nhiên thay cho bơ sữa.',
      additionalReferences: [
        'Giả Tư Hiệp (544), Tề Dân Yếu Thuật (齐民要术), Mậu Khải Du hiệu thích.',
        'H. T. Huang (2000), Science and Civilisation in China, Vol. 6, Part 5: Fermentations and Food Science, Cambridge University Press.',
        'Fuchsia Dunlop (2023), Invitation to a Banquet: The Story of Chinese Food, W. W. Norton & Company.'
      ],
      conclusion: 'Bản đồ ẩm thực Trung Hoa thực chất là bản đồ vi sinh học và địa lý gia vị tích lũy qua hơn hai nghìn năm. Khi hiểu cách bánh men Khúc, đậu nành, hạt gạo nếp, hoa tiêu và ớt kết hợp với khí hậu từng vùng, người quan sát sẽ thấy đằng sau mỗi món ăn vùng miền là một hệ thống tri thức khoa học thực phẩm dân gian chặt chẽ.'
    },
    {
      id: 'chinese-liquor-culture-baijiu-huangjiu',
      number: 74,
      category: 'customs',
      categoryLabel: 'Tập tục & Văn hóa Đời sống',
      titleVi: 'Văn hóa Tửu Đạo Trung Hoa: 12 Hương hình Bạch Tửu, Hoàng Tửu Cổ Truyền & Thi Ca',
      titleZh: '中国酒道文化：白酒十二香型、传统黄酒与诗酒美学',
      titleZhTrad: '中國酒道文化：白酒十二香型、傳統黃酒與詩酒美學',
      titleEn: 'Chinese Liquor Culture: The Twelve Aroma Styles of Baijiu, Traditional Huangjiu, and Poetic Aesthetics',
      readMinutes: 14,
      epistemicTag: 'Văn hóa Vật chất & Lịch sử Kỹ nghệ',
      abstract: 'Chuyên luận khảo sát hai trụ cột lớn của văn hóa rượu Trung Hoa — Hoàng Tửu (rượu gạo lên men cổ truyền 9.000 năm di sản) và Bạch Tửu (rượu chưng cất ngũ cốc thể rắn phát triển từ thời Nguyên–Minh với 12 hương hình tiêu chuẩn), cùng vai trò nghi lễ, thi ca (Đào Uyên Minh, Lý Bạch) và quy tắc giao tiếp bàn tiệc đương đại.',
      keyTakeaways: [
        'Rượu lên men ngũ cốc (tiền thân Hoàng Tửu) đã xuất hiện từ thời đồ đá mới (di chỉ Giả Hồ, Hà Nam, khoảng 7000 TCN) và giữ vị trí tối thượng trong lễ tế tông miếu thời Thương–Chu với hệ thống tước, cô, tôn bằng thanh đồng.',
        'Bạch Tửu chưng cất thể rắn hiện đại được chuẩn hóa quốc gia thành 12 hương hình, trong đó ba trụ cột chủ đạo là Tương hương (Mao Đài, Quý Châu), Nồng hương (Ngũ Lương Dịch – Lô Châu Lão Diêu, Tứ Xuyên) và Thanh hương (Phần Tửu, Sơn Tây).',
        'Trong văn hóa sĩ đại phu và giao tiếp xã hội, rượu vận hành hai chiều: là môi chất giải phóng cảm hứng sáng tạo trong thi ca thư họa (Tửu trung bát tiên, Lan Đình tu khế) đồng thời là thước đo lễ tiết tôn ti trên bàn tiệc.'
      ],
      introduction: 'Trong tiếng Hán, chữ "Y" (醫 — y học) dạng phồn thể chứa bộ "Dậu" (酉 — bình rượu) ở phía dưới, phản ánh nhận thức cổ đại rằng rượu vừa là lễ vật giao cảm với tổ tiên, vừa là dược dẫn trong y học cổ truyền ("Tửu vi bách dược chi trưởng"). Trải qua nhiều thiên niên kỷ, rượu Trung Hoa phân hóa thành hai dòng chảy song song: Hoàng Tửu lên men độ cồn nhẹ gắn với tầng lớp văn nhân Giang Nam, và Bạch Tửu chưng cất nồng độ cao nổi lên từ thời Nguyên–Minh trở thành biểu tượng của ngành công nghiệp đồ uống và lễ nghi ngoại giao Trung Quốc hiện đại.',
      historicalBackground: 'Phân tích hóa học dư lượng trên mảnh gốm tại di chỉ Giả Hồ (Vũ Dương, Hà Nam, khoảng 7000–6600 TCN) phát hiện hỗn hợp lên men từ gạo, mật ong và sơn tra — một trong những đồ uống có cồn sớm nhất thế giới. Thời nhà Thương, văn hóa uống rượu đạt mức phổ biến đến nỗi Chu Công Đán sau khi diệt Thương đã phải ban bố thiên "Tửu Cáo" trong "Thượng Thư" cảnh báo nạn say xỉn làm mất nước. Suốt từ thời Hán đến thời Tống, loại rượu phổ biến nhất vẫn là rượu lên men (Hoàng Tửu và rượu đục Trọc Tửu), độ cồn thường dưới 18%. Đến thời Nguyên–Minh (thế kỷ XIII–XVI), công nghệ chưng cất ("Thiêu tửu" — rượu đốt) được hoàn thiện, mở ra kỷ nguyên của Bạch Tửu chưng cất thể rắn từ cao lương và ngũ cốc.',
      mainContent: [
        {
          heading: '1. Hoàng Tửu cổ truyền: Thiệu Hưng Nữ Nhi Hồng và thẩm mỹ văn nhân Giang Nam',
          body: 'Hoàng Tửu (rượu vàng) là đại diện trực tiếp nhất của truyền thống ủ rượu 3.000 năm của Trung Quốc, được xếp vào nhóm ba loại rượu lên men cổ nhất thế giới cùng bia và rượu vang. Tiêu biểu nhất là Hoàng Tửu Thiệu Hưng (Chiết Giang), sản xuất theo quy trình "đông ủ xuân ép" từ gạo nếp, men lúa mì và nước hồ Giám Hồ. Theo độ ngọt–khô, Hoàng Tửu chia bốn loại: Nguyên Hồng (khô), Gia Phạn (bán khô — trong đó loại ủ chôn đất khi sinh con gái gọi là Nữ Nhi Hồng, sinh con trai gọi là Trạng Nguyên Hồng), Thiện Nhưỡng (bán ngọt) và Hương Tuyết (ngọt). Rượu thường được hâm ấm khoảng 40°C trong bình sứ vào mùa thu–đông, uống kèm cua lông và đậu hồi hương — đúng như hình ảnh quen thuộc trong truyện ngắn "Khổng Ất Kỷ" của Lỗ Tấn.'
        },
        {
          heading: '2. Bạch Tửu và 12 hương hình tiêu chuẩn: Tương – Nồng – Thanh làm trụ cột',
          body: 'Khác với whisky hay vodka phương Tây chưng cất từ dịch lỏng, Bạch Tửu Trung Quốc sử dụng kỹ thuật lên men thể rắn kết hợp chưng cất hơi nước bằng bã hèm ngũ cốc trong hầm đất (diêu trì) hoặc hố đá. Hệ thống tiêu chuẩn quốc gia Trung Quốc hiện phân loại 12 hương hình, xoay quanh ba trụ cột lớn nhất: (1) Thanh hương (đại diện là Phần Tửu ở Hạnh Hoa Thôn, Sơn Tây): lên men trong vò gốm chôn đất, vị trong trẻo, thuần khiết, hậu ngọt sạch; (2) Nồng hương (chiếm thị phần lớn nhất, đại diện là Lô Châu Lão Diêu, Ngũ Lương Dịch ở Tứ Xuyên và Dương Hà ở Giang Tô): lên men trong hầm bùn cổ giàu hệ vi sinh, hương trái cây chín đậm và vị êm dày; (3) Tương hương (đại diện là Mao Đài bên sông Xích Thủy, Quý Châu): quy trình "12987" (1 năm chu kỳ sản xuất, 2 lần nạp nguyên liệu, 9 lần hấp, 8 lần lên men, 7 lần lấy rượu), ủ tối thiểu 3 năm tạo hương tương đậu – khói nhẹ phức hợp kéo dài. Chín hương hình còn lại (Mễ hương Quế Lâm, Phượng hương Tây Phượng, Đổng hương, Chi ma hương, Độc hương, Kiêm hương…) là biến thể tiếp biến giữa ba gốc này.'
        },
        {
          heading: '3. Thi ca, Thư pháp và Mỹ học "Tửu trung chân ý"',
          body: 'Trong lịch sử nghệ thuật Trung Hoa, rượu là chất xúc tác giải phóng tâm thức khỏi ràng buộc lễ giáo cứng nhắc để đạt tới trạng thái "Tự nhiên" của Đạo gia. Đào Uyên Minh (365–427) viết chùm 20 bài "Ẩm Tửu" khi về ẩn dật, Vương Hy Chi trong trạng thái ngà say buổi tụ hội Lan Đình năm 353 đã viết nên "Lan Đình Tập Tự" mà khi tỉnh táo không thể viết lại đẹp hơn. Thời Thịnh Đường, Đỗ Phủ ghi lại hình ảnh "Ẩm Trung Bát Tiên Ca" (trong đó có Lý Bạch "đấu tửu thi bách thiên" và Trương Húc "say viết Cuồng Thảo"). Đến thời Bắc Tống, Tô Thức trong "Thủy Điều Ca Đầu" ("Minh nguyệt kỷ thời hữu, bả tửu vấn thanh thiên") biến chén rượu thành phương tiện đối thoại với trăng và thời gian.'
        },
        {
          heading: '4. Nghi lễ Tửu Đạo và Văn hóa Bàn tiệc Giao tiếp',
          body: 'Trái ngược với vẻ phóng khoáng trong thơ ca, rượu trong không gian xã giao và kinh doanh Trung Quốc lại tuân thủ hệ thống quy tắc chặt chẽ về thứ bậc ("Tửu lễ"). Khi cụng ly (Cạn ly / Kính tửu), người nhỏ tuổi hoặc cấp dưới luôn đặt miệng ly của mình thấp hơn người lớn tuổi hoặc đối tác chính để bày tỏ sự tôn kính; chủ tiệc ngồi vị trí chủ tọa quay mặt ra cửa, khách quý ngồi bên phải chủ tiệc; ly rượu Bạch Tửu truyền thống có dung tích rất nhỏ (10–15 ml) nhằm phục vụ nhiều lượt chúc tụng suốt bữa tiệc. Việc hiểu đúng sự khác biệt giữa phong cách tiếp khách trực diện nồng nhiệt của Hoa Bắc (chuộng Bạch Tửu) và phong cách mềm mỏng tinh tế hơn của Hoa Nam (kết hợp trà, Hoàng Tửu hoặc rượu vang) là kỹ năng văn hóa thiết yếu trong giao lưu và đàm phán.'
        }
      ],
      theoreticalFramework: 'Từ góc độ xã hội học nghi lễ (Émile Durkheim và nhân học lễ tiệc Trung Quốc), rượu vận hành như một "công cụ chuyển hóa ranh giới xã hội": trong nghi lễ tôn giáo cổ đại, men rượu làm cầu nối giữa người sống và tổ tiên; trong văn hóa bàn tiệc hiện đại, hành vi mời rượu luân phiên (Kính tửu) có chức năng xác nhận vị thế thứ bậc, thử thách sự chân thành và chuyển đổi quan hệ từ người ngoài ("Ngoại nhân") sang vòng kết nối tin cậy ("Nội nhân").',
      terminologyAndLiushu: [
        {
          hanzi: '酒',
          pinyin: 'jiǔ',
          hanViet: 'Tửu',
          liushu: 'Hội ý / Hình thanh',
          gloss: 'Gồm bộ Thủy (氵: chất lỏng) và bộ Dậu (酉: hình bình đáy nhọn ủ rượu trong Giáp Cốt Văn); chỉ đồ uống có cồn nói chung.'
        },
        {
          hanzi: '爵',
          pinyin: 'jué',
          hanViet: 'Tước',
          liushu: 'Tượng hình',
          gloss: 'Mô phỏng chén rượu thanh đồng ba chân có vòi rót thời Thương–Chu; từ đồ đựng rượu lễ tế mở rộng thành danh từ chỉ phẩm hàm quý tộc ("tước vị").'
        },
        {
          hanzi: '酿',
          pinyin: 'niàng',
          hanViet: 'Nhưỡng',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Dậu (酉: bình rượu) và chữ Tương/Lương (襄/良) chỉ âm; chỉ quá trình ủ men biến ngũ cốc thành rượu hoặc giấm.'
        },
        {
          hanzi: '窖',
          pinyin: 'jiào',
          hanViet: 'Diêu / Hầm',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Huyệt (穴: hố đào) và chữ Cáo (告) chỉ âm; chỉ hầm bùn lên men chôn dưới đất — nhân tố quyết định hệ vi sinh của Bạch Tửu Nồng hương.'
        },
        {
          hanzi: '醉',
          pinyin: 'zuì',
          hanViet: 'Túy',
          liushu: 'Hình thanh / Hội ý',
          gloss: 'Gồm bộ Dậu (酉) và chữ Tốt (卒: dừng lại ở giới hạn); nghĩa gốc là uống vừa đủ độ không quá chén, sau chỉ trạng thái say rượu.'
        }
      ],
      primarySources: [
        PQ(
          '《尚书·酒诰》',
          'Thượng Thư — Thiên Tửu Cáo',
          'Book of Documents (Shangshu), Announcement about Drunkenness',
          '饮惟祀，德将无醉。',
          'Yǐn wéi sì, dé jiāng wú zuì.',
          'Ẩm duy tự, đức tương vô túy.',
          'Chỉ uống rượu trong dịp tế lễ, lấy đức hạnh tiết chế để không sa vào say xỉn.',
          'Drink wine only at sacrificial rites, and let virtue guide you so that you do not fall into drunkenness.'
        ),
        PQ(
          '《将进酒》（李白）',
          'Tương Tiến Tửu — Lý Bạch',
          'Bringing in the Wine — Li Bai',
          '人生得意须尽欢，莫使金樽空对月。',
          'Rénshēng déyì xū jìnhuān, mò shǐ jīnzūn kōng duì yuè.',
          'Nhân sinh đắc ý tu tận hoan, mạc sử kim tôn không đối nguyệt.',
          'Đời người lúc đắc ý hãy hưởng trọn niềm vui, chớ để chén vàng trơ trọi trước ánh trăng.',
          'When life brings joy, drink it to the full; never let the golden goblet stand empty before the moon.'
        )
      ],
      sinoVietnameseComparison: 'Văn hóa rượu Việt Nam có điểm gặp gỡ rõ nét với truyền thống lên men ngũ cốc và chưng cất của Trung Quốc: từ rượu cần lên men nguyên hạt vùng núi Tây Bắc – Tây Nguyên, rượu nếp cái hoa vàng (tương đồng về cơ chế lên men gạo nếp với Hoàng Tửu nhưng dùng men lá/men thuốc bắc bản địa) đến các dòng rượu gạo chưng cất truyền thống như Làng Vân, Kim Sơn, Gò Đen, Bầu Đá. Trên bàn tiệc giao tế, cả hai nền văn hóa đều đề cao nghi thức hạ thấp miệng ly khi cụng với bậc trưởng thượng, song quy tắc phân vị ngồi và chu kỳ chúc rượu từng cá nhân trên bàn tiệc B2B Trung Quốc mang tính nghi thức hóa cao hơn.',
      additionalReferences: [
        'Patrick E. McGovern et al. (2004), "Fermented beverages of pre- and proto-historic China," Proceedings of the National Academy of Sciences (PNAS).',
        'Derek Sandhaus (2019), Drunk in China: Baijiu and the World\'s Oldest Drinking Culture, University of Nebraska Press.',
        'Lý Hoa & cộng sự (2018), Trung Quốc Tửu Văn Hóa Sử (中国酒文化史).'
      ],
      conclusion: 'Từ những mảnh gốm lên men 9.000 năm tại Giả Hồ đến hệ thống 12 hương hình Bạch Tửu hiện đại, rượu Trung Hoa vượt xa sản phẩm kỹ nghệ lên men để làm tấm gương phản chiếu nghi lễ tôn giáo, thẩm mỹ thi ca và cấu trúc quan hệ xã hội. Hiểu đúng bản chất Hoàng Tửu, Bạch Tửu và lễ tiết bàn tiệc giúp người học văn hóa lẫn người làm thương mại đọc vị sâu hơn ứng xử của người Trung Quốc.'
    },
    {
      id: 'five-sacred-mountains-buddhist-peaks',
      number: 75,
      category: 'regions',
      categoryLabel: 'Địa văn hóa & Vùng miền',
      titleVi: 'Ngũ Nhạc & Tứ Đại Phật Giáo Danh Sơn: Bản đồ Không gian Linh thiêng của Văn minh Trung Hoa',
      titleZh: '五岳与四大佛教名山：中华文明的神圣空间地图',
      titleZhTrad: '五嶽與四大佛教名山：中華文明的神聖空間地圖',
      titleEn: 'The Five Great Mountains and Four Sacred Buddhist Peaks: Mapping China\'s Sacred Geography',
      readMinutes: 15,
      epistemicTag: 'Địa lý Tôn giáo & Lịch sử Văn hóa',
      abstract: 'Chuyên luận giải mã hai hệ thống núi thiêng định hình không gian tinh thần Trung Hoa: Ngũ Nhạc (Thái Sơn, Hoa Sơn, Hành Sơn, Hằng Sơn, Tung Sơn) gắn với học thuyết Ngũ Hành, nghi lễ Phong Thiện đế quốc và Đạo giáo, cùng Tứ Đại Phật Giáo Danh Sơn (Ngũ Đài, Nga Mi, Phổ Đà, Cửu Hoa) gắn với tín ngưỡng Tứ Đại Bồ Tát.',
      keyTakeaways: [
        'Hệ thống Ngũ Nhạc được định hình hoàn chỉnh từ thời Hán Vũ Đế theo khung vũ trụ luận Ngũ Phương – Ngũ Hành, trong đó Đông Nhạc Thái Sơn giữ vị trí "Ngũ Nhạc Độc Tôn" nhờ gắn với nghi lễ Phong Thiện của các bậc đế vương.',
        'Tứ Đại Phật Giáo Danh Sơn hình thành từ thời Đường–Tống đến Minh–Thanh, phân bố đạo tràng bốn vị đại Bồ Tát (Văn Thù – Trí tuệ, Phổ Hiền – Hạnh nguyện, Quan Âm – Từ bi, Địa Tạng – Đại nguyện), đánh dấu quá trình bản địa hóa hoàn toàn Phật giáo Ấn Độ vào cảnh quan núi non Trung Hoa.',
        'Cả hai hệ thống núi thiêng vừa là trung tâm hành hương tôn giáo vừa là bảo tàng sống về thư pháp khắc đá Ma Nhai, kiến trúc gỗ cổ (như Đông Đại Điện chùa Phật Quang tại Ngũ Đài Sơn) và văn học du ký (Từ Hà Khách).'
      ],
      introduction: 'Trong vũ trụ quan cổ đại Trung Hoa, núi cao vượt ra khỏi vai trò thực thể địa chất thông thường để làm trục nối giữa đất và trời ("Thông thiên chi trụ"), nơi hội tụ linh khí, mây mưa và sinh mệnh quốc gia. Từ nền tảng tín ngưỡng thờ thần núi thời Tiên Tần, văn minh Trung Hoa đã kiến tạo hai hệ thống tọa độ linh thiêng song hành trên toàn lãnh thổ: hệ thống Ngũ Nhạc mang tính chính trị – vương quyền và Đạo giáo, cùng hệ thống Tứ Đại Phật Giáo Danh Sơn mang tính cứu độ và phổ cập đại chúng. Cùng nhau, chín ngọn danh sơn này vẽ nên một "bản đồ tâm linh" bao trùm từ Hoa Bắc, Quan Trung xuống Giang Nam, Tứ Xuyên và Đông Hải.',
      historicalBackground: 'Khái niệm thờ bốn phương núi lớn ("Tứ Nhạc") đã xuất hiện trong "Thượng Thư" (thiên Thuấn Điển) và "Chu Lễ", phản ánh lễ tuần thú phương hướng của Thiên tử cổ đại. Khi học thuyết Âm Dương Ngũ Hành thịnh hành thời Chiến Quốc – Tây Hán, Hán Vũ Đế (trị vì 141–87 TCN) chính thức chuẩn hóa năm ngọn núi tương ứng năm phương Đông–Tây–Nam–Bắc–Trung gọi là "Ngũ Nhạc". Song song đó, sau khi Phật giáo truyền vào Trung Quốc từ thế kỷ I SCN và đạt độ chín thời Đường–Tống, các tín đồ kết hợp kinh điển Đại thừa (như "Kinh Hoa Nghiêm" chép núi Thanh Lương ở Đông Bắc là nơi Văn Thù Bồ Tát thuyết pháp) với địa lý thực tế Trung Quốc, dần hình thành bốn trung tâm hành hương Bồ Tát hoàn chỉnh vào thời Minh–Thanh.',
      mainContent: [
        {
          heading: '1. Đông Nhạc Thái Sơn và nghi lễ Phong Thiện hợp thức hóa Vương quyền',
          body: 'Đứng đầu Ngũ Nhạc là Đông Nhạc Thái Sơn (Sơn Đông, cao 1.545 m), đại diện cho phương Đông — nơi mặt trời mọc và hành Mộc (sự khởi sinh). Từ Tần Thủy Hoàng (219 TCN), Hán Vũ Đế (110 TCN), Đường Cao Tông – Võ Tắc Thiên, Đường Huyền Tông đến Tống Chân Tông, các vị Hoàng đế thời thịnh trị đã thực hiện nghi lễ "Phong Thiện" tối mật và long trọng nhất lịch sử đế quốc: đắp đàn tế Trời trên đỉnh Thái Sơn ("Phong") và tế Đất ở gò Lương Phụ dưới chân núi ("Thiện") để báo công thái bình. Nhờ đó, dọc tuyến 6.000 bậc đá lên đỉnh Thái Sơn lưu giữ hơn 2.200 bia ký và khắc đá Ma Nhai từ thời Tần (bia Lý Tư) tới thời Thanh, trở thành kho tư liệu lịch sử và thư pháp ngoài trời vô giá.'
        },
        {
          heading: '2. Bốn ngọn núi còn lại của Ngũ Nhạc: Hiểm – Tú – Kỳ – Trung',
          body: 'Bốn đỉnh còn lại mỗi ngọn mang một cá tính địa mạo và văn hóa riêng biệt. Tây Nhạc Hoa Sơn (Thiểm Tây, 2.154,9 m) nổi danh "Kỳ hiểm thiên hạ đệ nhất sơn" với năm đỉnh hoa sen đá hoa cương dựng đứng, là trọng trấn Đạo giáo phái Toàn Chân gắn với Trần Đoàn lão tổ. Nam Nhạc Hành Sơn (Hồ Nam, 1.300,2 m) được gọi là "Ngũ Nhạc độc tú" nhờ thảm rừng xanh quanh năm, nơi Đạo giáo và Phật giáo cùng tồn tại hài hòa qua Đại Miếu Nam Nhạc. Bắc Nhạc Hằng Sơn (Sơn Tây, 2.016,1 m) giữ vai trò tường thành tự nhiên phòng thủ phương Bắc với kỳ quan Chùa Treo Huyền Không Tự bám vách đá gần 1.500 năm. Trung Nhạc Tung Sơn (Hà Nam, 1.491,7 m) nằm ở trung tâm Trung Nguyên, quy tụ tam giáo Nho–Phật–Đạo qua Thư viện Tung Dương, chùa Thiếu Lâm và miếu Trung Nhạc.'
        },
        {
          heading: '3. Tứ Đại Phật Giáo Danh Sơn: Bốn Đạo tràng Bồ Tát và tiến trình Hán hóa Phật giáo',
          body: 'Nếu Ngũ Nhạc gắn với trục quyền lực đế quốc và Đạo giáo, thì Tứ Đại Phật Giáo Danh Sơn đại diện cho bốn hạnh nguyện cốt lõi của Phật giáo Đại thừa Trung Hoa. (1) Ngũ Đài Sơn (Sơn Tây) là đạo tràng của Văn Thù Sư Lợi Bồ Tát (đại diện Trí tuệ), hội tụ cả Phật giáo Hán truyền và Mật tông Tạng truyền, lưu giữ các công trình gỗ thời Đường cổ nhất còn sót lại như chùa Nam Thiền (782) và Đông Đại Điện chùa Phật Quang (857). (2) Nga Mi Sơn (Tứ Xuyên, đỉnh Kim Đỉnh 3.079 m) là đạo tràng của Phổ Hiền Bồ Tát (đại diện Hạnh nguyện thực hành), nổi tiếng với hiện tượng quang học "Phật quang" trên biển mây. (3) Phổ Đà Sơn (hòn đảo thuộc Chu Sơn, Chiết Giang) là đạo tràng của Quán Thế Âm Bồ Tát (đại diện Từ bi), được định hình từ truyền thuyết nhà sư Nhật Bản Huệ Ngạc dựng "Bất Khẳng Khứ Quan Âm Viện" năm 863. (4) Cửu Hoa Sơn (An Huy) là đạo tràng của Địa Tạng Vương Bồ Tát (đại diện Đại nguyện hiếu đạo), gắn với hoàng tử Tân La Kim Kiều Giác tu hành 75 năm vào thế kỷ VIII.'
        },
        {
          heading: '4. Từ không gian hành hương đến cảm hứng Sơn Thủy và Du ký',
          body: 'Việc tổ chức các tuyến đường bậc đá, trà quán, chùa chiền và văn bia trên Ngũ Nhạc cùng Tứ Đại Danh Sơn đã biến núi non hiểm trở thành không gian văn hóa mở cho cả sĩ đại phu lẫn bình dân. Nhà địa lý học thời Minh Từ Hà Khách (1587–1641) đã trực tiếp khảo sát thực địa cả Ngũ Nhạc lẫn nhiều danh sơn Tây Nam, đặt nền móng cho địa lý học karst thực nghiệm qua bộ "Từ Hà Khách Du Ký". Đồng thời, các hình thái vách đá Hoa Sơn, mây mù Nga Mi và rừng thông Tung Sơn đã nuôi dưỡng trực tiếp bút pháp thuân pháp trong hội họa Sơn Thủy Trung Hoa.'
        }
      ],
      theoreticalFramework: 'Nhà sử học tôn giáo James Robson và Susan Naquin chỉ ra rằng khái niệm "Địa lý linh thiêng" (Sacred Geography) ở Trung Quốc vận hành theo cơ chế "cộng hưởng địa điểm – văn bản – nghi lễ": một ngọn núi trở nên thiêng bên cạnh độ cao địa chất còn nhờ các lớp văn bia, truyền thuyết Bồ Tát/tiên nhân, thơ đề vịnh và nghi thức hành hương chồng xếp qua hàng thế kỷ. Đặc biệt, sự phân bố trải đều của Ngũ Nhạc và Tứ Đại Danh Sơn còn có chức năng địa – văn hóa gắn kết các vùng miền khác biệt vào một bản đồ biểu tượng chung.',
      terminologyAndLiushu: [
        {
          hanzi: '岳',
          pinyin: 'yuè',
          hanViet: 'Nhạc',
          liushu: 'Hội ý',
          gloss: 'Gồm chữ Khâu (丘: gò lớn) và bộ Sơn (山: núi); dạng phồn thể 嶽 gồm 狱 và 山; chỉ những ngọn núi cao linh thiêng đại diện cho phương hướng quốc gia.'
        },
        {
          hanzi: '禅',
          pinyin: 'shàn / chán',
          hanViet: 'Thiện / Thiền',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thị (礻/示: tế tự) và chữ Đơn (单/單); đọc "shàn" trong "Phong Thiện" (tế đất tại Thái Sơn), đọc "chán" khi phiên âm "Dhyana" (Thiền định Phật giáo).'
        },
        {
          hanzi: '碑',
          pinyin: 'bēi',
          hanViet: 'Bi (Bia)',
          liushu: 'Hình thanh',
          gloss: 'Gồm bộ Thạch (石: đá) và chữ Ti (卑) chỉ âm; vốn là trụ đá xem bóng mặt trời trong miếu cổ, sau chỉ tấm bia đá khắc ghi công đức và lịch sử trên danh sơn.'
        },
        {
          hanzi: '刹',
          pinyin: 'chà',
          hanViet: 'Sát',
          liushu: 'Hình thanh (phiên âm Phạn ngữ)',
          gloss: 'Phiên âm từ tiếng Phạn "ksetra" (đất nước, cõi Phật); chỉ cột phướn trước chùa rồi dùng chỉ ngôi chùa cổ ("Cổ sát", "Danh sát").'
        },
        {
          hanzi: '香',
          pinyin: 'xiāng',
          hanViet: 'Hương',
          liushu: 'Hội ý',
          gloss: 'Giáp Cốt Văn gồm bộ Thử/Hòa (禾: ngũ cốc) và Cam/Khẩu, chỉ mùi thơm lúa chín; mở rộng thành "Hương hỏa" (nhang đèn hành hương trên núi thiêng).'
        }
      ],
      primarySources: [
        PQ(
          '《望岳》（杜甫）',
          'Vọng Nhạc — Đỗ Phủ (viết về Thái Sơn)',
          'Gazing at the Sacred Peak (Mount Tai) — Du Fu',
          '会当凌绝顶，一览众山小。',
          'Huì dāng líng juédǐng, yī lǎn zhòngshān xiǎo.',
          'Hội đương lăng tuyệt đỉnh, nhất lãm chúng sơn tiểu.',
          'Ắt sẽ có ngày bước lên đỉnh cao nhất, phóng tầm mắt nhìn xuống thấy muôn núi đều nhỏ bé.',
          'One day I must ascend to the highest summit, and with a single glance behold all other mountains as small.'
        ),
        PQ(
          '《尚书·舜典》',
          'Thượng Thư — Thiên Thuấn Điển',
          'Book of Documents (Shangshu), Canon of Shun',
          '岁二月，东巡守，至于岱宗，柴。',
          'Suì èryuè, dōng xúnshǒu, zhìyú Dàizōng, chái.',
          'Tuế nhị nguyệt, đông tuần thú, chí vu Đại Tông, sài.',
          'Vào tháng Hai hằng năm, Thiên tử tuần thú phương Đông, đến núi Đại Tông (Thái Sơn) thì đốt củi làm lễ tế Trời.',
          'In the second month of the year, he made a tour of inspection eastward as far as Mount Tai (Daizong), where he presented a burnt offering to Heaven.'
        )
      ],
      sinoVietnameseComparison: 'Việt Nam cũng định hình hệ thống núi thiêng gắn chặt với lịch sử dựng nước và Phật giáo bản địa: núi Nghĩa Lĩnh (Đền Hùng, Phú Thọ) mang chức năng trục nguồn cội dân tộc tương đồng về ý nghĩa biểu tượng với Thái Sơn; núi Tản Viên (Ba Vì) gắn với tín ngưỡng Sơn Tinh – Tứ Bất Tử; đặc biệt quần thể núi Yên Tử (Quảng Ninh) trở thành "Tổ đình Thiền phái Trúc Lâm" do Phật hoàng Trần Nhân Tông khai sáng năm 1299 — tương đồng với cách Tứ Đại Phật Giáo Danh Sơn Trung Hoa gắn cảnh quan núi non bản địa với một truyền thống tu tập cụ thể.',
      additionalReferences: [
        'Từ Hà Khách (thế kỷ XVII), Từ Hà Khách Du Ký (徐霞客游记).',
        'Susan Naquin & Chün-fang Yü, eds. (1992), Pilgrims and Sacred Sites in China, University of California Press.',
        'James Robson (2009), Power of Place: The Religious Landscape of the Southern Sacred Peak (Nanyue) in Medieval China, Harvard University Asia Center.'
      ],
      conclusion: 'Ngũ Nhạc và Tứ Đại Phật Giáo Danh Sơn chứng minh cách văn minh Trung Hoa biến địa hình tự nhiên thành không gian văn hóa có cấu trúc chặt chẽ. Dù bước lên bậc đá Thái Sơn để đọc dấu ấn vương quyền hay hành hương giữa đại điện gỗ thời Đường trên Ngũ Đài Sơn, người lữ hành đều đang đi xuyên qua một hệ thống ký ức lịch sử, tôn giáo và thẩm mỹ đã vận hành liên tục hơn hai thiên niên kỷ.'
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
    "xiqu-stagecraft-face-masks-tuong": "assets/images/opera/op-16.jpg",
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
  var existingIdxById = {};
  for (i = 0; i < window.CCE_ARTICLES.length; i++) {
    if (window.CCE_ARTICLES[i] && window.CCE_ARTICLES[i].id) {
      existingIds[window.CCE_ARTICLES[i].id] = true;
      existingIdxById[window.CCE_ARTICLES[i].id] = i;
    }
  }
  for (i = 0; i < ARTICLES_V3_PART1B.length; i++) {
    var na = ARTICLES_V3_PART1B[i];
    if (!existingIds[na.id]) {
      window.CCE_ARTICLES.push(na);
      existingIds[na.id] = true;
      existingIdxById[na.id] = window.CCE_ARTICLES.length - 1;
    } else if (window.CCE_ARTICLES[existingIdxById[na.id]] && (window.CCE_ARTICLES[existingIdxById[na.id]]._v23Stub || window.CCE_ARTICLES[existingIdxById[na.id]]._v104Stub)) {
      window.CCE_ARTICLES[existingIdxById[na.id]] = na;
    }
  }
})();