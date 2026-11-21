(function () {
  'use strict';

  window.CCE_CUSTOMS_V3 = window.CCE_CUSTOMS_V3 || {};

  function mergeById(targetArr, newItems) {
    var existing = {};
    var i;
    for (i = 0; i < targetArr.length; i++) {
      if (targetArr[i] && targetArr[i].id) {
        existing[targetArr[i].id] = true;
      }
    }
    for (i = 0; i < newItems.length; i++) {
      if (!existing[newItems[i].id]) {
        targetArr.push(newItems[i]);
        existing[newItems[i].id] = true;
      }
    }
  }

  var TOP_TEN_TEAS = [
    {
      id: 'tea-xihu-longjing',
      nameVi: 'Tây Hồ Long Tỉnh',
      nameZh: '西湖龙井',
      nameEn: 'West Lake Longjing (Dragon Well)',
      provinceId: 'prov-zhejiang',
      teaTypeVi: 'Lục trà sao chảo không lên men',
      teaTypeEn: 'Unfermented pan-fired green tea',
      brewTempC: '80-85',
      teawareVi: 'Ly thủy tinh cao thành hoặc chén khải sứ trắng thành mỏng',
      teawareEn: 'Tall glass tumbler or thin-walled white porcelain gaiwan',
      notesVi: 'Đứng đầu danh trà Hàng Châu với bốn phẩm chất "sắc xanh, hương đậu rang, vị ngọt thanh, dáng phẳng mịn"; vùng lõi Sư Phong – Long Tỉnh – Vân Tê – Hổ Bào – Mai Gia Ổ nổi danh từ thời Minh – Thanh.',
      notesEn: 'Hangzhou\'s premier green tea famed for emerald hue, toasted-chestnut aroma, brisk sweetness, and flat spear-shaped leaves from the five core West Lake terroirs.'
    },
    {
      id: 'tea-dongting-biluochun',
      nameVi: 'Động Đình Bích Loa Xuân',
      nameZh: '洞庭碧螺春',
      nameEn: 'Dongting Biluochun (Green Snail Spring)',
      provinceId: 'prov-jiangsu',
      teaTypeVi: 'Lục trà búp non cuộn xoắn ốc',
      teaTypeEn: 'Tightly curled downy green tea',
      brewTempC: '75-80',
      teawareVi: 'Ly thủy tinh (phương pháp rót nước trước thả trà sau "Thượng đầu pháp")',
      teawareEn: 'Glass tumbler using the water-first top-drop infusion method',
      notesVi: 'Trồng xen canh với cây ăn quả (tỳ bà, đào, mận, dương mai) tại Đông Sơn và Tây Sơn hồ Thái Hồ (Tô Châu), tạo hương hoa quả tự nhiên thanh khiết và lớp lông tơ trắng mịn dày.',
      notesEn: 'Intercropped with orchard trees on Dongshan and Xishan by Lake Tai (Suzhou), yielding delicate floral-fruit aromatics and dense silvery trichomes.'
    },
    {
      id: 'tea-huangshan-maofeng',
      nameVi: 'Hoàng Sơn Mao Phong',
      nameZh: '黄山毛峰',
      nameEn: 'Huangshan Maofeng (Yellow Mountain Fur Peak)',
      provinceId: 'prov-anhui',
      teaTypeVi: 'Lục trà sấy thanh (Hồng thanh lục trà)',
      teaTypeEn: 'Baked green tea',
      brewTempC: '80-85',
      teawareVi: 'Chén khải sứ trắng hoặc cốc thủy tinh',
      teawareEn: 'White porcelain gaiwan or tall glass',
      notesVi: 'Hái từ vườn trà núi cao quanh năm mây phủ tại Hoàng Sơn (An Huy), búp hình lưỡi chim sẻ ánh vàng ngà (tượng nha sắc), hương lan núi dịu nhẹ và hậu vị ngọt sâu.',
      notesEn: 'Harvested from mist-shrouded high-elevation gardens on Mount Huangshan (Anhui), featuring ivory-tipped sparrow-tongue buds with orchid notes and clean sweetness.'
    },
    {
      id: 'tea-anxi-tieguanyin',
      nameVi: 'An Khê Thiết Quan Âm',
      nameZh: '安溪铁观音',
      nameEn: 'Anxi Tieguanyin (Iron Goddess of Mercy)',
      provinceId: 'prov-fujian',
      teaTypeVi: 'Ô Long bán lên men (Thanh hương / Nồng hương)',
      teaTypeEn: 'Semi-oxidized oolong tea (light or charcoal-roasted)',
      brewTempC: '95-100',
      teawareVi: 'Chén khải sứ Đức Hóa hoặc ấm tử sa dung tích nhỏ (100-150 ml)',
      teawareEn: 'Dehua porcelain gaiwan or small Yixing clay teapot (100-150 ml)',
      notesVi: 'Đặc sản huyện An Khê (Tuyền Châu, Phúc Kiến), lá vo tròn nặng chìm đáy chén; nổi tiếng với "Quan Âm vận" (hương lan chín và hậu vị khoáng thanh bền qua bảy lần nước).',
      notesEn: 'Signature oolong of Anxi (Quanzhou, Fujian) rolled into dense pearls prized for its signature Guanyin Yun—orchid fragrance and enduring mineral finish across seven infusions.'
    },
    {
      id: 'tea-wuyi-dahongpao',
      nameVi: 'Vũ Di Đại Hồng Bào',
      nameZh: '武夷大红袍',
      nameEn: 'Wuyi Da Hong Pao (Big Red Robe)',
      provinceId: 'prov-fujian',
      teaTypeVi: 'Ô Long nham trà (Nham trà Vũ Di sao than)',
      teaTypeEn: 'Charcoal-roasted Wuyi rock oolong',
      brewTempC: '98-100',
      teawareVi: 'Ấm tử sa Chu Nê hoặc chén khải sứ mỏng pha kiểu Công Phu',
      teawareEn: 'Zhuni Yixing teapot or thin porcelain gaiwan in Gongfu style',
      notesVi: 'Sinh trưởng trên khe đá phong hóa Đan Hà núi Vũ Di (Phúc Kiến), mang đặc trưng "Nham cốt hoa hương" (vị khoáng đá mạnh mẽ kết hợp hương hoa và nốt rang than ấm áp).',
      notesEn: 'Rooted in weathered Danxia rock crevices of Mount Wuyi (Fujian), celebrated for Yan Yun ("rock rhyme") uniting mineral depth, floral lift, and warm charcoal roast.'
    },
    {
      id: 'tea-qimen-hongcha',
      nameVi: 'Kỳ Môn Hồng Trà (Keemun)',
      nameZh: '祁门红茶',
      nameEn: 'Qimen Black Tea (Keemun)',
      provinceId: 'prov-anhui',
      teaTypeVi: 'Hồng trà lên men hoàn toàn (Công phu hồng trà)',
      teaTypeEn: 'Fully oxidized Gongfu black tea',
      brewTempC: '90-95',
      teawareVi: 'Ấm sứ trắng thành vừa hoặc ấm tử sa Đoạn Nê/Tử Nê',
      teawareEn: 'White porcelain teapot or Zini clay teapot',
      notesVi: 'Ra đời thập niên 1870 tại huyện Kỳ Môn (An Huy), nổi danh quốc tế nhờ "Kỳ Môn hương" — tổ hợp hương hoa hồng, mật ong, táo chín và gỗ thông thanh thoát.',
      notesEn: 'Developed in the 1870s in Qimen County (Anhui), internationally renowned for its Keemun aroma blending rose, honeyed fruit, and subtle pine notes.'
    },
    {
      id: 'tea-junshan-yinzhen',
      nameVi: 'Quân Sơn Ngân Châm',
      nameZh: '君山银针',
      nameEn: 'Junshan Yinzhen (Silver Needle)',
      provinceId: 'prov-hunan',
      teaTypeVi: 'Hoàng trà lên men nhẹ (kỹ thuật Mộn hoàng)',
      teaTypeEn: 'Lightly fermented yellow tea (menhuang)',
      brewTempC: '85-90',
      teawareVi: 'Ly thủy tinh trong suốt có nắp đậy để thưởng ngoạn "Tam khởi tam lạc"',
      teawareEn: 'Clear lidded glass tumbler to view the rising-and-falling needle dance',
      notesVi: 'Sản xuất trên đảo Quân Sơn giữa hồ Động Đình (Nhạc Dương, Hồ Nam); búp đơn phủ lông bạc chuyển sắc vàng nhạt qua kỹ thuật ủ ấm Mộn hoàng, dựng đứng đẹp mắt trong nước.',
      notesEn: 'Crafted on Junshan Island in Lake Dongting (Hunan); single downy buds undergo gentle yellow-wrapping fermentation and stand vertically in glass infusions.'
    },
    {
      id: 'tea-yunnan-puerh',
      nameVi: 'Trà Phổ Nhĩ Vân Nam',
      nameZh: '云南普洱茶',
      nameEn: 'Yunnan Pu-erh Tea (Sheng & Shou)',
      provinceId: 'prov-yunnan',
      teaTypeVi: 'Hắc trà hậu lên men (Phổ Nhĩ Sống và Phổ Nhĩ Chín)',
      teaTypeEn: 'Post-fermented dark tea (Raw Sheng & Ripe Shou)',
      brewTempC: '95-100',
      teawareVi: 'Ấm tử sa Tử Nê (cho Phổ Nhĩ Chín/lão trà) hoặc chén khải sứ (cho Phổ Nhĩ Sống trẻ)',
      teawareEn: 'Zini Yixing teapot (ripe/aged) or porcelain gaiwan (young raw Sheng)',
      notesVi: 'Chế biến từ lá chè cổ thụ đại diệp Vân Nam phơi nắng (Sái thanh), ép bánh; Phổ Nhĩ Sống lên men tự nhiên theo năm tháng còn Phổ Nhĩ Chín ứng dụng kỹ thuật ủ đống Ốc đỗi từ thập niên 1970.',
      notesEn: 'Made from sun-dried Yunnan large-leaf tea pressed into cakes; Raw Sheng ages slowly over decades while Ripe Shou uses wet-piling (wodui) fermentation perfected in the 1970s.'
    },
    {
      id: 'tea-liuan-guapian',
      nameVi: 'Lục An Qua Phiến',
      nameZh: '六安瓜片',
      nameEn: 'Lu\'an Guapian (Melon Seed Green Tea)',
      provinceId: 'prov-anhui',
      teaTypeVi: 'Lục trà đơn phiến không búp không cọng',
      teaTypeEn: 'Single-leaf budless and stemless green tea',
      brewTempC: '85-90',
      teawareVi: 'Chén khải sứ trắng hoặc ấm thủy tinh',
      teawareEn: 'White porcelain gaiwan or glass pitcher',
      notesVi: 'Danh trà duy nhất trong Thập Đại Danh Trà loại bỏ hoàn toàn búp non và cọng, chỉ giữ phiến lá đơn chín tới sao trên lửa than tạo hình hạt dưa xanh ngọc, vị đậm mà không chát.',
      notesEn: 'Unique among China\'s top teas for stripping away buds and stems to roast solely mature single leaves over charcoal into melon-seed shapes with rich, non-astringent body.'
    },
    {
      id: 'tea-xinyang-maojian',
      nameVi: 'Tín Dương Mao Tiêm',
      nameZh: '信阳毛尖',
      nameEn: 'Xinyang Maojian (Fur Tip Green Tea)',
      provinceId: 'prov-henan',
      teaTypeVi: 'Lục trà sao tròn miền Bắc',
      teaTypeEn: 'Northern pan-rolled green tea',
      brewTempC: '80-85',
      teawareVi: 'Ly thủy tinh trong suốt hoặc chén sứ trắng',
      teawareEn: 'Clear glass tumbler or white porcelain cup',
      notesVi: 'Danh trà tiêu biểu vùng núi Đại Biệt – Đồng Bách (Tín Dương, Hà Nam), sợi trà mảnh thẳng phủ tuyết trắng, nước xanh sáng, hương hạt dẻ thanh và hậu vị ngọt mát.',
      notesEn: 'Flagship northern green tea from the Dabie–Tongbai hills of Xinyang (Henan), yielding slender white-tipped needles, luminous pale-green liquor, and crisp sweetness.'
    }
  ];

  var SIX_ARTS = [
    {
      id: 'sixart-li',
      nameVi: 'Lễ (Nghi lễ & Chuẩn mực Đạo đức)',
      nameZh: '礼',
      nameEn: 'Li (Rites and Ritual Propriety)',
      westernZhouOriginVi: 'Hệ thống Ngũ Lễ Tây Chu (Cát lễ, Hung lễ, Tân lễ, Quân lễ, Gia lễ) do Chu Công Đán định chế nhằm điều hòa trật tự tông pháp và giao tế quốc gia.',
      westernZhouOriginEn: 'Codified under the Western Zhou into Five Rites (auspicious, mourning, diplomatic, military, and celebratory) to anchor lineage and state harmony.',
      scholarSignificanceVi: 'Đặt nền tảng nhân cách quân tử ("Bất học Lễ, vô dĩ lập"), biến kỷ luật xã hội thành phong thái ứng xử tự giác và tôn trọng lẫn nhau.',
      scholarSignificanceEn: 'Formed the bedrock of gentlemanly character ("Without studying Rites, one cannot take one\'s stand"), transforming civic discipline into voluntary mutual respect.'
    },
    {
      id: 'sixart-yue',
      nameVi: 'Nhạc (Âm nhạc & Vũ đạo Hài hòa)',
      nameZh: '乐',
      nameEn: 'Yue (Music and Ceremonial Dance)',
      westernZhouOriginVi: 'Bộ Lục Đại Nhạc Vũ dùng chuông biên chung, khánh đá và vũ đạo tế lễ thời Tây Chu nhằm nuôi dưỡng cảm xúc hòa mục đồng hành với Lễ.',
      westernZhouOriginEn: 'Six Great Ceremonial Dances accompanied by chime bells and lithophones in the Western Zhou to cultivate emotional harmony alongside ritual.',
      scholarSignificanceVi: 'Theo Nhạc Ký, "Lễ biệt dị, Nhạc thống đồng" — nếu Lễ phân định trật tự thì Nhạc gắn kết lòng người và điều tiết tình chí của sĩ phu qua Cổ Cầm.',
      scholarSignificanceEn: 'As the Record of Music states, rites distinguish roles while music unites hearts, culminating later in literati self-cultivation through the Guqin.'
    },
    {
      id: 'sixart-she',
      nameVi: 'Xạ (Bắn cung & Lễ Xạ)',
      nameZh: '射',
      nameEn: 'She (Archery and Ritual Contests)',
      westernZhouOriginVi: 'Kỹ năng quân sự thiết yếu của tầng lớp quý tộc Sĩ thời Tây Chu, tổ chức qua nghi lễ Đại Xạ và Hương Xạ có nhạc điệu tiết chế.',
      westernZhouOriginEn: 'Essential martial skill of Western Zhou Shi nobles, institutionalized in Great and District Archery rites accompanied by ceremonial music.',
      scholarSignificanceVi: 'Khổng Tử coi bắn cung là phép rèn tâm tính: "Xạ hữu tự hồ quân tử, thất chư chính hộc, phản cầu chư kỳ thân" (bắn trượt đích thì tự xét lỗi mình).',
      scholarSignificanceEn: 'Confucius viewed archery as moral training: when missing the bullseye, the exemplary person turns inward to examine personal alignment.'
    },
    {
      id: 'sixart-yu',
      nameVi: 'Ngự (Đánh chiến xa & Điều khiển Ngựa)',
      nameZh: '御',
      nameEn: 'Yu (Charioteering)',
      westernZhouOriginVi: 'Nghệ thuật điều khiển chiến xa bốn ngựa theo năm phép (Ngũ Ngự) trên chiến trường và lễ săn bắn vương thất thời Chu.',
      westernZhouOriginEn: 'Mastery of driving four-horse war chariots according to five canonical maneuvers in Western Zhou warfare and royal hunts.',
      scholarSignificanceVi: 'Biểu trưng năng lực phối hợp nhịp nhàng, kiểm soát tốc độ và dẫn dắt tổ chức — nền tảng ẩn dụ cho nghệ thuật trị quốc và quản trị.',
      scholarSignificanceEn: 'Symbolized poised coordination, control under pressure, and balanced leadership—becoming an enduring metaphor for statecraft.'
    },
    {
      id: 'sixart-shu',
      nameVi: 'Thư (Văn tự, Lục thư & Thư pháp)',
      nameZh: '书',
      nameEn: 'Shu (Literacy, Script, and Calligraphy)',
      westernZhouOriginVi: 'Giáo dục nhận mặt chữ, hiểu nguyên lý cấu tạo chữ Hán (Lục thư) và ghi chép văn kiện hành chính trên thẻ tre, giáp cốt và đồ đồng.',
      westernZhouOriginEn: 'Instruction in reading, character-formation principles (Liushu), and administrative drafting on bamboo slips and bronze inscriptions.',
      scholarSignificanceVi: 'Mở cửa tiếp cận kinh điển cổ đại và phát triển thành nghệ thuật Thư pháp — thước đo tu dưỡng tâm khí và học lực của trí thức Đông Á.',
      scholarSignificanceEn: 'Unlocked classical texts and evolved into calligraphy—the premier visual gauge of scholarly refinement across East Asia.'
    },
    {
      id: 'sixart-shu-math',
      nameVi: 'Số (Toán học, Lịch pháp & Đo lường)',
      nameZh: '数',
      nameEn: 'Shu (Mathematics, Calendrics, and Measurement)',
      westernZhouOriginVi: 'Hệ thống Cửu Số phục vụ đo đạc ruộng đất, tính thuế lương thực, thiên văn lịch pháp và kỹ thuật công trình thời Chu – Hán (đúc kết trong Cửu Chương Toán Thuật).',
      westernZhouOriginEn: 'Nine Branches of Mathematics supporting land surveying, grain taxation, calendrical astronomy, and engineering (later compiled in the Nine Chapters on the Mathematical Art).',
      scholarSignificanceVi: 'Khẳng định truyền thống giáo dục khai phóng cổ điển không tách rời nhân văn khỏi tư duy định lượng, quản trị tài chính và kỹ thuật thực tế.',
      scholarSignificanceEn: 'Demonstrates that classical education united humanities with quantitative reasoning, fiscal stewardship, and practical engineering.'
    }
  ];

  var ETHNIC_MINORITIES = [
    {
      id: 'ethnic-zhuang',
      nameVi: 'Dân tộc Tráng (Choang)',
      nameZh: '壮族',
      nameEn: 'Zhuang Ethnic Group',
      provinceIds: ['prov-guangxi', 'prov-yunnan', 'prov-guangdong'],
      scriptVi: 'Chữ Tráng cổ (Cổ Tráng tự cấu tạo theo nguyên lý Lục thư gần gũi chữ Nôm Việt) và chữ Tráng Latinh hóa chuẩn năm 1957.',
      scriptEn: 'Old Zhuang script (Sawndip, built on Han-derived principles akin to Vietnamese Chu Nom) and standardized 1957 Latin orthography.',
      attireVi: 'Trang phục vải chàm dệt thổ cẩm Tráng Cẩm (Zhuangjin) với hoa văn trống đồng, phượng hoàng và họa tiết hình học đối xứng.',
      attireEn: 'Indigo-dyed garments accented with Zhuangjin brocade depicting bronze-drum motifs, phoenixes, and geometric patterns.',
      festivalVi: 'Hội hát đối đáp Tam Nguyệt Tam (mùng 3 tháng 3 âm lịch — Ca Vu) với ném còn, cơm ngũ sắc và nghệ thuật trống đồng cổ.',
      festivalEn: 'Sanyuesan Song Festival (3rd day of the 3rd lunar month) featuring antiphonal folk singing, embroidered-ball tossing, and five-color glutinous rice.'
    },
    {
      id: 'ethnic-tibetan',
      nameVi: 'Dân tộc Tạng',
      nameZh: '藏族',
      nameEn: 'Tibetan Ethnic Group',
      provinceIds: ['prov-tibet', 'prov-sichuan', 'prov-qinghai', 'prov-gansu', 'prov-yunnan'],
      scriptVi: 'Chữ Tạng (hệ chữ âm tiết phát triển từ thế kỷ 7 dưới thời Tùng Tán Cán Bố dựa trên chữ Phạn Gupta).',
      scriptEn: 'Tibetan script, an abugida developed in the 7th century under Songtsen Gampo derived from Indic Gupta script.',
      attireVi: 'Áo choàng Chuba dài tay rộng viền gấm hoặc lông cừu thích nghi biên độ nhiệt lớn trên cao nguyên, kết hợp tạp dề kẻ sọc Pangden.',
      attireEn: 'Long-sleeved Chuba robes trimmed in brocade or fleece suited to high-altitude temperature swings, paired with striped Pangden aprons.',
      festivalVi: 'Tết Losar (Tết Tạng) và Lễ hội Shoton (Lễ hội Sữa chua, phơi tranh Thangka khổng lồ và diễn Tạng kịch tại Lhasa).',
      festivalEn: 'Losar (Tibetan New Year) and the Shoton Festival featuring giant Thangka unveilings and traditional Tibetan opera in Lhasa.'
    },
    {
      id: 'ethnic-uyghur',
      nameVi: 'Dân tộc Duy Ngô Nhĩ',
      nameZh: '维吾尔族',
      nameEn: 'Uyghur Ethnic Group',
      provinceIds: ['prov-xinjiang'],
      scriptVi: 'Chữ Duy Ngô Nhĩ hiện đại dựa trên hệ chữ Ả Rập cải tiến (lịch sử từng dùng chữ Hồi Hột cổ thời Trung cổ).',
      scriptEn: 'Modern Uyghur Perso-Arabic script (historically preceded by the Old Uyghur alphabet along the Silk Road).',
      attireVi: 'Vải lụa nhuộm buộc Etles rực rỡ nhiều sắc độ kết hợp mũ thêu bốn góc Doppa đặc trưng từng ốc đảo.',
      attireEn: 'Active ikat-dyed Etles silk paired with embroidered four-cornered Doppa skullcaps distinct to each oasis.',
      festivalVi: 'Lễ hội âm nhạc – vũ đạo Thập Nhị Mộc Khạp Mỗ (Twelve Muqam, Di sản Văn hóa Phi vật thể UNESCO) cùng lễ Eid al-Fitr và lễ thu hoạch nho Turpan.',
      festivalEn: 'Performances of the UNESCO-listed Twelve Muqam musical suite alongside Eid celebrations and Turpan grape harvests.'
    },
    {
      id: 'ethnic-miao',
      nameVi: 'Dân tộc Miêu',
      nameZh: '苗族',
      nameEn: 'Miao Ethnic Group',
      provinceIds: ['prov-guizhou', 'prov-hunan', 'prov-yunnan', 'prov-chongqing'],
      scriptVi: 'Truyền khẩu sử thi qua hoa văn thêu và hệ chữ Miêu Latinh hóa xây dựng theo các phương ngữ chính từ thập niên 1950.',
      scriptEn: 'Oral epics encoded in embroidery motifs alongside standardized Latin-based orthographies created in the 1950s.',
      attireVi: 'Váy xếp ly nhuộm sáp ong (Batik), thêu nổi cầu kỳ và bộ trang sức bạc chế tác thủ công tinh xảo (vương miện bạc sừng trâu tại Kiềm Đông Nam).',
      attireEn: 'Pleated indigo batik skirts, intricate cross-stitch embroidery, and elaborate hand-forged silver headdresses and torques (notably in Qiandongnan).',
      festivalVi: 'Tết Miêu Niên, Lễ hội Cơm Chị Em (Tỷ Muội Phạn) và hội thổi khèn Lô Sanh (Lusheng) tại Tây Giang Thiên Hộ Miêu Trại.',
      festivalEn: 'Miao New Year, the Sisters\' Meal Festival, and Lusheng reed-pipe gatherings in Xijiang Thousand-Household Miao Village.'
    },
    {
      id: 'ethnic-naxi',
      nameVi: 'Dân tộc Nạp Tây',
      nameZh: '纳西族',
      nameEn: 'Naxi Ethnic Group',
      provinceIds: ['prov-yunnan', 'prov-sichuan'],
      scriptVi: 'Chữ tượng hình Đông Ba (Dongba script — hệ văn tự tượng hình sống hiếm hoi còn được lưu giữ, di sản Ký ức Thế giới UNESCO).',
      scriptEn: 'Dongba pictographic script—one of the world\'s few living pictographic systems, inscribed in UNESCO\'s Memory of the World Register.',
      attireVi: 'Áo khoác choàng lưng da cừu "Phi tinh đới nguyệt" (khoác sao đeo trăng) với bảy vòng tròn thêu tượng trưng sao Bắc Đẩu.',
      attireEn: 'Sheepskin cape ("wearing the stars and moon") embroidered with seven discs symbolizing the Big Dipper and industrious labor.',
      festivalVi: 'Lễ hội Tam Đóa (Sanduo) tháng 2 âm lịch tôn vinh vị thần hộ mệnh núi tuyết Ngọc Long cùng dàn cổ nhạc Nạp Tây Lệ Giang.',
      festivalEn: 'Sanduo Festival in the 2nd lunar month honoring the guardian deity of Jade Dragon Snow Mountain, paired with Naxi ancient orchestra music.'
    },
    {
      id: 'ethnic-yi',
      nameVi: 'Dân tộc Di',
      nameZh: '彝族',
      nameEn: 'Yi Ethnic Group',
      provinceIds: ['prov-sichuan', 'prov-yunnan', 'prov-guizhou'],
      scriptVi: 'Chữ Di âm tiết chuẩn hóa (gốc từ chữ Di cổ có lịch sử hàng thiên niên kỷ tại Lương Sơn và Vân Nam).',
      scriptEn: 'Standardized syllabic Yi script descended from millennia-old classical Yi inscriptions across Liangshan and Yunnan.',
      attireVi: 'Áo choàng len dệt Chả Nhĩ Ngõa (Chaerwa) chống gió núi và trang phục ba tông màu đen – đỏ – vàng biểu trưng đất, lửa và ánh sáng.',
      attireEn: 'Woven wool Chaerwa capes and black-red-yellow garments symbolizing earth, fire, and sunlight.',
      festivalVi: 'Lễ hội Đuốc (Hỏa Bả Tiết — ngày 24 tháng 6 âm lịch) với rước đuốc cầu mùa, đấu vật, đua ngựa và nhảy vòng Đạt Thể Vũ.',
      festivalEn: 'Torch Festival (24th day of the 6th lunar month) featuring nighttime torch processions, wrestling, horse racing, and circle dances.'
    },
    {
      id: 'ethnic-mongol',
      nameVi: 'Dân tộc Mông Cổ',
      nameZh: '蒙古族',
      nameEn: 'Mongol Ethnic Group',
      provinceIds: ['prov-inner-mongolia', 'prov-xinjiang', 'prov-qinghai', 'prov-liaoning'],
      scriptVi: 'Chữ Mông Cổ truyền thống viết dọc từ trên xuống dưới (kế thừa từ chữ Hồi Hột cổ từ thế kỷ 13).',
      scriptEn: 'Traditional vertical Mongolian script descending top-to-bottom, adapted from Old Uyghur in the 13th century.',
      attireVi: 'Áo bào thảo nguyên (Deel) thắt đai lụa ngang hông, mũ chóp và ủng da cưỡi ngựa.',
      attireEn: 'Long belted Deel robes secured with silk sashes, peaked hats, and leather riding boots.',
      festivalVi: 'Đại hội thảo nguyên Naadam (Na Đạt Mộ) với ba môn truyền thống: đấu vật Mông Cổ (Bökhe), đua ngựa và bắn cung, hòa cùng tiếng đàn Mã Đầu Cầm và trường điệu (Khoomei).',
      festivalEn: 'Naadam Grassland Fair featuring the "Three Manly Games" of wrestling, horse racing, and archery accompanied by Morin Khuur horsehead fiddle and long-song music.'
    },
    {
      id: 'ethnic-manchu',
      nameVi: 'Dân tộc Mãn',
      nameZh: '满族',
      nameEn: 'Manchu Ethnic Group',
      provinceIds: ['prov-liaoning', 'prov-jilin', 'prov-heilongjiang', 'prov-hebei', 'prov-beijing'],
      scriptVi: 'Chữ Mãn viết dọc (sáng chế năm 1599 dưới thời Nỗ Nhĩ Cáp Xích dựa trên chữ Mông Cổ và hoàn thiện có chấm khuyên năm 1632).',
      scriptEn: 'Vertical Manchu script created in 1599 under Nurhaci from Mongolian script and refined with diacritical dots and circles in 1632.',
      attireVi: 'Áo dài Kỳ Bào (Qipao tiền thân của sườn xám hiện đại), áo khoác Mã Quái và giày đế cao Hoa Bồn Để thời Thanh.',
      attireEn: 'Long Qipao robes (forerunner of the modern cheongsam), Magua riding jackets, and elevated flowerpot-sole shoes of the Qing era.',
      festivalVi: 'Lễ Ban Kim (Banjin Festival, 13/10 âm lịch kỷ niệm ngày định danh dân tộc Mãn năm 1635) cùng di sản văn khố song ngữ Mãn – Hán tại Cố Cung Bắc Kinh và Thẩm Dương.',
      festivalEn: 'Banjin Festival (13th day of the 10th lunar month commemorating the 1635 naming of the Manchu people) and bilingual Manchu-Chinese archival heritage in Beijing and Shenyang.'
    }
  ];

  window.CCE_CUSTOMS_V3.topTenTeas = window.CCE_CUSTOMS_V3.topTenTeas || [];
  window.CCE_CUSTOMS_V3.sixArts = window.CCE_CUSTOMS_V3.sixArts || [];
  window.CCE_CUSTOMS_V3.ethnicMinorities = window.CCE_CUSTOMS_V3.ethnicMinorities || [];

  mergeById(window.CCE_CUSTOMS_V3.topTenTeas, TOP_TEN_TEAS);
  mergeById(window.CCE_CUSTOMS_V3.sixArts, SIX_ARTS);
  mergeById(window.CCE_CUSTOMS_V3.ethnicMinorities, ETHNIC_MINORITIES);
})();
