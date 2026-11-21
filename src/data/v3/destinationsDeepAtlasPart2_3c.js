(function () {
  'use strict';

  var ATLAS_PART2_3C = [
    {
      id: 'dest-tibet',
      provinceId: 'prov-tibet',
      nameVi: 'Tây Tạng',
      nameZh: '西藏',
      nameEn: 'Tibet (Xizang)',
      overviewVi: 'Nóc nhà thế giới trên cao nguyên Thanh–Tạng độ cao trung bình hơn 4.000 m, trung tâm Phật giáo Tây Tạng với Cung điện Potala, Chùa Đại Chiêu và tuyến đường sắt cao nguyên Thanh–Tạng kỳ vĩ.',
      overviewEn: 'The "Roof of the World" on the Qinghai–Tibet Plateau averaging over 4,000 m elevation, heartland of Tibetan Buddhism anchored by the Potala Palace, Jokhang Temple, and the Qinghai–Tibet Railway.',
      bestSeasonVi: 'Tháng 5–10 hàm lượng oxy cao hơn và đường đèo thông thoáng; riêng tháng 3–4 thung lũng Lâm Chi nở rộ hoa đào hoang dã.',
      bestSeasonEn: 'May to October offers milder temperatures, higher oxygen levels, and clear mountain passes; March–April brings wild peach blossoms in Nyingchi.',
      hsrHubs: [
        { nameZh: '拉萨站', pinyin: 'Lasa', cityVi: 'Lhasa', cityEn: 'Lhasa' },
        { nameZh: '日喀则站', pinyin: 'Rikaze', cityVi: 'Shigatse (Nhật Khách Tắc)', cityEn: 'Shigatse' },
        { nameZh: '林芝站', pinyin: 'Linzhi', cityVi: 'Lâm Chi (Nyingchi)', cityEn: 'Nyingchi' }
      ],
      zones: [
        {
          id: 'zone-xz-lhasa',
          nameVi: 'Lhasa — Cung Điện Potala & Trục Hành Hương Bát Giác',
          nameZh: '拉萨布达拉宫与八廓街区',
          nameEn: 'Lhasa — Potala Palace & Barkhor Circuit',
          summaryVi: 'Thủ phủ văn hóa–tôn giáo ở độ cao 3.650 m, nơi giao lưu Hán–Tạng từ thế kỷ VII thời Tùng Tán Cán Bố và Công chúa Văn Thành.',
          summaryEn: 'Cultural and religious capital at 3,650 m, preserving Sino-Tibetan heritage dating back to Songtsen Gampo and Princess Wencheng in the 7th century.',
          spots: [
            {
              id: 'spot-xz-potala',
              nameVi: 'Cung điện Potala',
              nameZh: '布达拉宫',
              nameEn: 'Potala Palace',
              category: 'UNESCO / 5A',
              highlightVi: 'Khởi dựng thế kỷ VII trên đồi Hồng Sơn và tái thiết quy mô lớn thế kỷ XVII với Bạch Cung (hành chính) và Hồng Cung (linh tháp), cao 13 tầng bám vách đá.',
              highlightEn: 'Founded in the 7th century on Red Hill and expanded in the 17th century into the 13-story White Palace (administrative) and Red Palace (sacred stupas).',
              localDishVi: 'Trà bơ (Tô Du Trà), Trà ngọt Lhasa & Bánh bột lúa mạch Tản Ba',
              localDishEn: 'Tibetan Butter Tea, Lhasa Sweet Tea, and Barley Tsampa'
            },
            {
              id: 'spot-xz-jokhang',
              nameVi: 'Chùa Đại Chiêu (Jokhang) & Phố Bát Khuếch (Barkhor)',
              nameZh: '大昭寺与八廓街',
              nameEn: 'Jokhang Temple & Barkhor Street',
              category: 'UNESCO / 5A',
              highlightVi: 'Ngôi chùa linh thiêng nhất Tây Tạng xây năm 647 lưu giữ pho tượng Phật Thích Ca 12 tuổi do Công chúa Văn Thành mang từ Trường An sang, bao quanh bởi vòng kinh luân Bát Khuếch.',
              highlightEn: 'Tibet\'s most revered temple (647 CE), housing the life-size Jowo Sakyamuni statue brought from Tang Chang\'an, encircled by the Barkhor pilgrimage kora.',
              localDishVi: 'Thịt bò Yak khô (Phong Can Mao Ngưu Nhục) & Sủi cảo Tạng (Momo)',
              localDishEn: 'Air-Dried Yak Jerky and Tibetan Momo Dumplings'
            }
          ]
        },
        {
          id: 'zone-xz-shigatse-nyingchi',
          nameVi: 'Shigatse & Lâm Chi — Hồ Thánh Yamdrok & Hẻm Núi Yarlung Tsangpo',
          nameZh: '日喀则羊卓雍措与林芝大峡谷',
          nameEn: 'Shigatse Yamdrok Lake & Nyingchi Grand Canyon',
          summaryVi: 'Hành lang cảnh quan kết nối một trong ba hồ thánh Tây Tạng với vùng thung lũng xanh ôn hòa ở độ cao thấp nhất cao nguyên.',
          summaryEn: 'Scenic corridor linking one of Tibet\'s three sacred lakes with the lush, lower-altitude river valleys of southeastern Tibet.',
          spots: [
            {
              id: 'spot-xz-yamdrok-tashilhunpo',
              nameVi: 'Hồ Yamdrok (Dương Trác Ung Thác) & Chùa Trát Thập Luân Bố',
              nameZh: '羊卓雍措与扎什伦布寺',
              nameEn: 'Yamdrok Lake & Tashilhunpo Monastery',
              category: '5A / Di tích trọng điểm quốc gia',
              highlightVi: 'Hồ nước ngọt màu xanh ngọc ở độ cao 4.441 m và đại tự viện phái Cách Lỗ thành lập năm 1447 tại Shigatse — trụ sở truyền thống của các đời Ban Thiền Lạt Ma.',
              highlightEn: 'Turquoise alpine lake at 4,441 m paired with the 1447 Gelugpa monastery in Shigatse, traditional seat of the Panchen Lamas.',
              localDishVi: 'Mì nước Tây Tạng (Tạng Miện) & Rượu lúa mạch Thanh Khoa',
              localDishEn: 'Tibetan Broth Noodles and Highland Barley Wine (Chang)'
            },
            {
              id: 'spot-xz-yarlung-canyon',
              nameVi: 'Đại Hẻm Núi Yarlung Tsangpo & Đỉnh Namcha Barwa',
              nameZh: '雅鲁藏布大峡谷与南迦巴瓦峰',
              nameEn: 'Yarlung Tsangpo Grand Canyon & Namcha Barwa',
              category: '5A',
              highlightVi: 'Hẻm núi sâu nhất trên đất liền thế giới uốn quanh ngọn núi tuyết Namcha Barwa cao 7.782 m giữa rừng thông và bản làng người Môn Ba–Tạng.',
              highlightEn: 'The world\'s deepest terrestrial canyon curving around 7,782 m Mount Namcha Barwa amid spruce forests and Monpa–Tibetan villages.',
              localDishVi: 'Gà hầm nồi đá Mặc Thoát (Lỗ Lãng Thạch Quách Kê)',
              localDishEn: 'Lulang Stone-Pot Braised Chicken'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-ningxia',
      provinceId: 'prov-ningxia',
      nameVi: 'Ninh Hạ',
      nameZh: '宁夏',
      nameEn: 'Ningxia',
      overviewVi: 'Được mệnh danh "Tái Thượng Giang Nam" nhờ hệ thống kênh dẫn nước Hoàng Hà có từ thời Tần–Hán, lưu giữ di sản vương triều Tây Hạ bí ẩn, sa mạc Sa Pha Đầu và vùng rượu vang chân núi Hạ Lan.',
      overviewEn: 'Dubbed "Jiangnan Beyond the Great Wall" thanks to Qin–Han Yellow River irrigation canals, preserving enigmatic Western Xia tombs, Shapotou dunes, and Helan Mountain vineyards.',
      bestSeasonVi: 'Tháng 5–10 khí hậu khô ráo, nắng ấm, mùa thu hoạch nho và kỷ tử Ninh Hạ vào tháng 8–9.',
      bestSeasonEn: 'May to October offers dry sunny weather, peaking with the Ningxia goji berry and Helan vineyard harvest in August–September.',
      hsrHubs: [
        { nameZh: '银川站', pinyin: 'Yinchuan', cityVi: 'Ngân Xuyên', cityEn: 'Yinchuan' },
        { nameZh: '中卫南站', pinyin: 'Zhongweinan', cityVi: 'Trung Vệ (Sa Pha Đầu)', cityEn: 'Zhongwei (Shapotou)' }
      ],
      zones: [
        {
          id: 'zone-nx-yinchuan',
          nameVi: 'Ngân Xuyên & Núi Hạ Lan — Di sản Vương triều Tây Hạ',
          nameZh: '银川西夏陵与贺兰山岩画区',
          nameEn: 'Yinchuan & Helan Mountains — Western Xia Heritage',
          summaryVi: 'Cố đô Hưng Khánh Phủ của vương quốc Tây Hạ (1038–1227) với hệ thống chữ viết độc lập và hàng nghìn bức khắc đá tiền sử.',
          summaryEn: 'Former capital of the Western Xia dynasty (1038–1227), featuring a distinct Tangut script and thousands of prehistoric petroglyphs.',
          spots: [
            {
              id: 'spot-nx-xixia-tombs',
              nameVi: 'Lăng Mộ Hoàng Gia Tây Hạ & Bảo tàng Tây Hạ',
              nameZh: '西夏陵与西夏博物馆',
              nameEn: 'Western Xia Imperial Tombs & Museum',
              category: '4A / Di tích trọng điểm quốc gia',
              highlightVi: '9 lăng đế vương và hơn 250 mộ bồi táng xây bằng đất nện hình tháp bát giác dưới chân núi Hạ Lan, trưng bày văn bia song ngữ Hán–Tây Hạ.',
              highlightEn: 'Nine imperial mausoleums and over 250 satellite rammed-earth tombs beneath the Helan Mountains, showcasing bilingual Chinese–Tangut steles.',
              localDishVi: 'Thịt cừu luộc cầm tay Diêm Trì (Diêm Trì Than Dương Nhục)',
              localDishEn: 'Yanchi Tan-Sheep Boiled Mutton'
            },
            {
              id: 'spot-nx-helanshan-rockart',
              nameVi: 'Tranh Khắc Đá Núi Hạ Lan & Phim trường Trấn Bắc Bảo',
              nameZh: '贺兰山岩画与镇北堡西部影城',
              nameEn: 'Helan Mountain Petroglyphs & Zhenbeipu Film Studios',
              category: '5A / 4A',
              highlightVi: 'Hơn 6.000 hình khắc đá của các bộ tộc du mục cổ (tiêu biểu là hình Thần Mặt Trời) gần hai tòa thành đất phòng biên thời Minh–Thanh.',
              highlightEn: 'Over 6,000 ancient nomadic rock carvings (notably the Sun God motif) near two Ming–Qing rammed-earth frontier forts.',
              localDishVi: 'Trà Bát Bảo Ninh Hạ (Kỷ tử, táo đỏ, long nhãn, đường phèn)',
              localDishEn: 'Ningxia Eight-Treasure Tea (Goji Berry, Jujube, Longan)'
            }
          ]
        },
        {
          id: 'zone-nx-zhongwei',
          nameVi: 'Trung Vệ — Sa Mạc Tengger Gặp Sông Hoàng Hà',
          nameZh: '中卫沙坡头黄河沙漠区',
          nameEn: 'Zhongwei — Tengger Desert Meets Yellow River',
          summaryVi: 'Điểm giao độc đáo giữa cồn cát sa mạc, dòng Hoàng Hà và hệ thống lưới rơm cố định cát bảo vệ tuyến đường sắt Bao–Lan.',
          summaryEn: 'Striking convergence of Tengger sand dunes, the Yellow River, and straw-checkerboard desertification barriers protecting the Baotou–Lanzhou Railway.',
          spots: [
            {
              id: 'spot-nx-shapotou',
              nameVi: 'Khu Thắng cảnh Sa Pha Đầu',
              nameZh: '沙坡头旅游景区',
              nameEn: 'Shapotou Scenic Area',
              category: '5A',
              highlightVi: 'Trải nghiệm bè da cừu cổ truyền vượt sông Hoàng Hà ngay dưới chân đồi cát cao 100 m và tham quan mô hình chống sa mạc hóa "Mạch Thảo Phương Cách" nổi tiếng thế giới.',
              highlightEn: 'Traditional sheepskin rafting on the Yellow River beneath 100 m dunes alongside the globally recognized straw-grid sand-fixation engineering.',
              localDishVi: 'Mì kéo thịt cừu Trung Vệ (Hao Tử Miện) & Bánh chiên Youxiang',
              localDishEn: 'Zhongwei Spiced Lamb Noodles (Haozimian)'
            },
            {
              id: 'spot-nx-shuidonggou',
              nameVi: 'Di chỉ Khảo cổ Thủy Động Câu',
              nameZh: '水洞沟旅游区',
              nameEn: 'Shuidonggou Archaeological Site',
              category: '5A',
              highlightVi: 'Di chỉ thời đại Đồ đá cũ đầu tiên được khai quật có hệ thống tại Trung Quốc (1923) kết hợp đoạn Trường Thành đất nện nhà Minh và địa đạo Tàng Binh Động.',
              highlightEn: 'China\'s earliest systematically excavated Paleolithic site (1923) paired with Ming earthen Great Wall ramparts and subterranean troop tunnels.',
              localDishVi: 'Thịt cừu nướng đá sa mạc & Rượu vang đỏ chân núi Hạ Lan',
              localDishEn: 'Desert Stone-Roasted Lamb and Helan Mountain East Foothill Red Wine'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-xinjiang',
      provinceId: 'prov-xinjiang',
      nameVi: 'Tân Cương',
      nameZh: '新疆',
      nameEn: 'Xinjiang',
      overviewVi: 'Vùng đất lớn nhất Trung Quốc mang địa hình "Tam sơn giáp lưỡng bồn" (Altai – Thiên Sơn – Côn Lôn kẹp bồn địa Chuẩn Cát Nhĩ và Tarim), nơi gặp gỡ các nền văn minh Á–Âu trên Con đường Tơ lụa.',
      overviewEn: 'China\'s largest region, shaped by three mountain ranges (Altai, Tianshan, Kunlun) framing the Junggar and Tarim basins—historic crossroads of Eurasian Silk Road civilizations.',
      bestSeasonVi: 'Tháng 6–8 thảo nguyên Y Lê xanh mướt hoa oải hương; tháng 9–10 lá rừng bạch dương Kanas và rừng dương liễu Tarim chuyển vàng rực, mùa nho – dưa lưới chín rộ.',
      bestSeasonEn: 'June–August for Ili lavender and alpine meadows; September–October for golden Kanas birches, Tarim poplars, and peak grape and melon harvests.',
      hsrHubs: [
        { nameZh: '乌鲁木齐站', pinyin: 'Wulumuqi', cityVi: 'Urumqi (Ô Lỗ Mộc Tề)', cityEn: 'Urumqi' },
        { nameZh: '吐鲁番北站', pinyin: 'Tulufanbei', cityVi: 'Turpan (Thổ Lỗ Phiên)', cityEn: 'Turpan' },
        { nameZh: '哈密站', pinyin: 'Hami', cityVi: 'Hami (Cáp Mật)', cityEn: 'Hami' }
      ],
      zones: [
        {
          id: 'zone-xj-urumqi-turpan',
          nameVi: 'Urumqi & Turpan — Thiên Trì Thiên Sơn & Kênh Ngầm Khảm Nhi Tỉnh',
          nameZh: '乌鲁木齐天池与吐鲁番丝路区',
          nameEn: 'Urumqi & Turpan — Tianshan & Silk Road Oases',
          summaryVi: 'Hành lang kết nối hồ núi tuyết Thiên Sơn với vùng trũng sâu nhất Trung Quốc lưu giữ thành cổ Giao Hà và thủy lợi ngầm nghìn năm.',
          summaryEn: 'Corridor linking Tianshan\'s alpine lake with China\'s lowest depression, preserving Jiaohe ruins and ancient subterranean karez canals.',
          spots: [
            {
              id: 'spot-xj-tianshan-tianchi',
              nameVi: 'Hồ Thiên Trì Thiên Sơn & Bảo tàng Khu Tự trị Tân Cương',
              nameZh: '天山天池与新疆维吾尔自治区博物馆',
              nameEn: 'Heavenly Lake of Tianshan & Xinjiang Regional Museum',
              category: 'UNESCO / 5A',
              highlightVi: 'Hồ băng hà ở độ cao 1.910 m dưới đỉnh Bác Cách Đạt (5.445 m) và bảo tàng lưu giữ tấm gấm Hán "Ngũ Tinh Xuất Đông Phương Lợi Trung Quốc" cùng cổ vật Lâu Lan.',
              highlightEn: 'Glacial lake at 1,910 m beneath Bogda Peak (5,445 m) paired with the museum\'s Han brocade armband and Loulan Silk Road textiles.',
              localDishVi: 'Cơm thập cẩm nấu thịt cừu (Thủ Trảo Phạn) & Gà kho đĩa lớn (Đại Bàn Kê)',
              localDishEn: 'Xinjiang Lamb Pilaf (Polo) and Big Plate Chicken (Dapanji)'
            },
            {
              id: 'spot-xj-jiaohe-karez',
              nameVi: 'Thành cổ Giao Hà & Hệ thống Kênh Ngầm Khảm Nhi Tỉnh (Turpan)',
              nameZh: '交河故城与吐鲁番坎儿井',
              nameEn: 'Jiaohe Ancient City & Turpan Karez Irrigation',
              category: 'UNESCO / 5A',
              highlightVi: 'Thành cổ hơn 2.000 năm đục trực tiếp vào cao nguyên đất hoàng thổ giữa hai nhánh sông cùng mạng lưới dẫn nước băng tan ngầm chống bay hơi giữa sa mạc.',
              highlightEn: '2,000-year-old earthen city carved directly into a river-island plateau alongside subterranean karez tunnels channeling snowmelt beneath the desert.',
              localDishVi: 'Bánh mì nướng lò đất Nang & Nho không hạt Turpan',
              localDishEn: 'Tandoor-Baked Naan Bread and Turpan Seedless Grapes'
            }
          ]
        },
        {
          id: 'zone-xj-kanas-kashgar',
          nameVi: 'Kanas (Bắc Cương) & Kashgar (Nam Cương) — Hồ Băng Hà & Cổ Thành Con Đường Tơ Lụa',
          nameZh: '喀纳斯与喀什古城',
          nameEn: 'Kanas (Northern Xinjiang) & Kashgar (Southern Xinjiang)',
          summaryVi: 'Hai cực đối lập tạo nên sức hút của Tân Cương: rừng thông hồ băng kiểu Siberia ở phía Bắc và phố cổ gạch bùn Duy Ngô Nhĩ 2.000 năm ở phía Nam.',
          summaryEn: 'Contrasting poles of Xinjiang: taiga lakes in the Altai north and a 2,000-year-old Uyghur mud-brick Silk Road crossroads in the south.',
          spots: [
            {
              id: 'spot-xj-kanas',
              nameVi: 'Khu Thắng cảnh Hồ Kanas & Làng Hòa Mộc (Hemu)',
              nameZh: '喀纳斯景区与禾木村',
              nameEn: 'Kanas Lake & Hemu Village',
              category: '5A',
              highlightVi: 'Hồ băng hà hình trăng lưỡi liềm đổi màu theo mùa khoáng chất và bản làng nhà gỗ thông của người Tuva giữa rừng bạch dương dãy Altai.',
              highlightEn: 'Mineral-tinted crescent glacial lake and log-cabin Tuva villages nestled in Altai birch forests.',
              localDishVi: 'Thịt cừu xiên nướng gỗ hồng liễu (Hồng Liễu Khảo Nhục)',
              localDishEn: 'Tamarisk-Skewered Charcoal Lamb'
            },
            {
              id: 'spot-xj-kashgar',
              nameVi: 'Cổ Thành Kashgar & Nhà thờ Hồi giáo Id Kah',
              nameZh: '喀什古城与艾提尕尔清真寺',
              nameEn: 'Kashgar Old City & Id Kah Mosque',
              category: '5A',
              highlightVi: 'Mê cung kiến trúc đất nện–gỗ sống động bên rìa cao nguyên Pamir cùng nhà thờ Hồi giáo xây năm 1442 và chợ gia súc Chủ nhật truyền thống.',
              highlightEn: 'Living labyrinth of mud-brick and timber courtyard lanes at the foot of the Pamirs, anchored by the 1442 Id Kah Mosque.',
              localDishVi: 'Bánh bao nướng lò đất (Khảo Bao Tử) & Mì kéo trộn (Bàn Miện)',
              localDishEn: 'Oven-Baked Samsa Buns (Kaobaozi) and Laghman Hand-Pulled Noodles'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-tianjin',
      provinceId: 'prov-tianjin',
      nameVi: 'Thiên Tân',
      nameZh: '天津',
      nameEn: 'Tianjin',
      overviewVi: 'Trực hạt thị cảng biển sát Bắc Kinh ("Cửu hà hạ tiêu"), nơi sông Hải Hà gặp Đại Vận Hà, lưu giữ quần thể kiến trúc tô giới đa quốc gia nguyên vẹn nhất Trung Quốc và nghệ thuật Tương Thanh – tranh gỗ Dương Liễu Thanh.',
      overviewEn: 'Coastal municipality adjacent to Beijing where the Hai River meets the Grand Canal, preserving China\'s most intact ensemble of historic international concessions alongside Xiangsheng comedy and Yangliuqing woodblock prints.',
      bestSeasonVi: 'Mùa xuân (tháng 4–5) và mùa thu (tháng 9–10) thời tiết ôn hòa, thích hợp dạo bộ ven sông Hải Hà và Khu Ngũ Đại Đạo.',
      bestSeasonEn: 'Spring (April–May) and autumn (September–October) bring pleasant weather for walking along the Hai River and Five Great Avenues.',
      hsrHubs: [
        { nameZh: '天津站', pinyin: 'Tianjin', cityVi: 'Thiên Tân', cityEn: 'Tianjin' },
        { nameZh: '天津南站', pinyin: 'Tianjinnan', cityVi: 'Thiên Tân', cityEn: 'Tianjin' },
        { nameZh: '天津西站', pinyin: 'Tianjinxi', cityVi: 'Thiên Tân', cityEn: 'Tianjin' }
      ],
      zones: [
        {
          id: 'zone-tj-haihe-wudadao',
          nameVi: 'Sông Hải Hà & Khu Ngũ Đại Đạo — Bảo Tàng Kiến Trúc Cận Đại',
          nameZh: '海河沿岸与五大道历史区',
          nameEn: 'Hai River & Five Great Avenues Historic District',
          summaryVi: 'Hơn 2.000 công trình kiến trúc Anh, Ý, Pháp, Đức cuối thế kỷ XIX–đầu XX kết hợp với di sản cảng sông Bắc Trung Quốc.',
          summaryEn: 'Over 2,000 late-19th and early-20th-century British, Italian, French, and German buildings framing Tianjin\'s historic river port.',
          spots: [
            {
              id: 'spot-tj-wudadao',
              nameVi: 'Khu Kiến trúc Lịch sử Ngũ Đại Đạo & Khu Phong tình Ý',
              nameZh: '五大道文化旅游区与意式风情区',
              nameEn: 'Five Great Avenues & Former Italian Concession',
              category: '4A / Di sản kiến trúc cận đại',
              highlightVi: 'Tập trung hàng trăm biệt thự cũ của các chính khách và học giả cận đại (như nhà cũ Lương Khải Siêu – Ẩm Băng Thất, Tào Ngu) với đủ phong cách Phục Hưng, Gothic và chiết trung.',
              highlightEn: 'Hundreds of historic residences of modern statesmen and scholars—including Liang Qichao\'s Ice-Drinker\'s Studio—spanning Renaissance, Gothic, and eclectic styles.',
              localDishVi: 'Bánh kếp giòn Thiên Tân (Tiên Bính Quả Tử) & Bánh bao Cẩu Bất Lý',
              localDishEn: 'Tianjin Savory Crepe (Jianbing Guozi) and Goubuli Steamed Buns'
            },
            {
              id: 'spot-tj-guwenhuajie',
              nameVi: 'Phố Cổ Văn Hóa (Thiên Hậu Cung) & Cổ trấn Dương Liễu Thanh',
              nameZh: '古文化街（天后宫）与杨柳青古镇',
              nameEn: 'Ancient Culture Street (Tianhou Temple) & Yangliuqing Town',
              category: '5A / Di sản phi vật thể',
              highlightVi: 'Thiên Hậu Cung xây năm 1326 thời Nguyên thờ Ma Tổ bảo hộ thương thuyền Tào vận, cùng làng nghề tranh Tết khắc gỗ Dương Liễu Thanh và nhà cổ Thạch Gia Đại Viện.',
              highlightEn: '1326 Yuan-era Tianhou Temple honoring sea goddess Mazu for grain-tribute ships, paired with Yangliuqing\'s New Year woodblock-print workshops and Shi Family Mansion.',
              localDishVi: 'Bánh quẩy xoắn Thập Bát Nhai (Thập Bát Nhai Ma Hoa) & Bánh rán Nhĩ Đóa Nhãn',
              localDishEn: 'Eighteenth Street Fried Dough Twists (Mahua) and Erduoyan Fried Rice Cake'
            }
          ]
        },
        {
          id: 'zone-tj-jizhou',
          nameVi: 'Kế Châu — Chùa Độc Lạc Thời Liêu & Trường Thành Hoàng Nhai Quan',
          nameZh: '蓟州独乐寺与黄崖关长城',
          nameEn: 'Jizhou — Liao-Dynasty Dule Temple & Huangyaguan Great Wall',
          summaryVi: 'Lưu giữ một trong ba quần thể kiến trúc gỗ thời Liêu cổ nhất Trung Quốc ngay phía Bắc Thiên Tân.',
          summaryEn: 'Preserves one of China\'s three oldest surviving Liao-dynasty timber structures in northern Tianjin.',
          spots: [
            {
              id: 'spot-tj-dulesi',
              nameVi: 'Chùa Độc Lạc (Quan Âm Các)',
              nameZh: '独乐寺（观音阁）',
              nameEn: 'Dule Temple (Guanyin Pavilion)',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Quan Âm Các tái dựng năm 984 thời Liêu là công trình lầu gỗ đa tầng cổ nhất còn nguyên vẹn tại Trung Quốc, dùng 24 loại Đấu Củng ôm trọn tượng Quan Âm đất sét cao 16 m.',
              highlightEn: 'Rebuilt in 984 CE under the Liao dynasty, China\'s oldest surviving multi-story timber pavilion uses 24 dougong bracket types around a 16 m clay Guanyin statue.',
              localDishVi: 'Cá nướng hồ Thúy Bình & Bánh ngô áp chảo Kế Châu',
              localDishEn: 'Cuiping Lake Braised Fish and Jizhou Griddle Cornbread'
            },
            {
              id: 'spot-tj-huangyaguan',
              nameVi: 'Trường Thành Hoàng Nhai Quan',
              nameZh: '黄崖关长城',
              nameEn: 'Huangyaguan Great Wall',
              category: 'UNESCO / 4A',
              highlightVi: 'Khởi xây thời Bắc Tề (557) và gia cố quy mô lớn bởi danh tướng Thích Kế Quang thời Minh với thành Bát Quái độc đáo.',
              highlightEn: 'Originally built under Northern Qi (557) and fortified by Ming general Qi Jiguang, featuring an unusual Bagua-plan garrison town.',
              localDishVi: 'Cơm hầm nồi sắt Kế Châu & Lê vàng Bàn Sơn',
              localDishEn: 'Jizhou Iron-Pot Farmhouse Stew and Panshan Pears'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-hong-kong',
      provinceId: 'prov-hongkong',
      nameVi: 'Hồng Kông',
      nameZh: '香港',
      nameEn: 'Hong Kong',
      overviewVi: 'Đặc khu hành chính giao thoa Đông–Tây bên Cảng Victoria, gắn liền với Bảo tàng Cố Cung Hồng Kông, khu văn hóa Tây Cửu Long, phố cổ di sản Lĩnh Nam và hơn 70% diện tích là công viên địa chất – núi biển.',
      overviewEn: 'An East–West Special Administrative Region around Victoria Harbour, pairing the Hong Kong Palace Museum and West Kowloon Cultural District with Lingnan clan heritage and coastal geoparks.',
      bestSeasonVi: 'Mùa thu–đông (tháng 10–12) trời xanh khô ráo, lý tưởng đi bộ đường núi và dạo quanh Cảng Victoria.',
      bestSeasonEn: 'Autumn and early winter (October–December) offer crisp, clear skies ideal for harbour walks and ridge hikes.',
      hsrHubs: [
        { nameZh: '香港西九龙站', pinyin: 'Xianggangxijiulong', cityVi: 'Hồng Kông (Cửu Long)', cityEn: 'Hong Kong (West Kowloon)' }
      ],
      zones: [
        {
          id: 'zone-hk-westkowloon-central',
          nameVi: 'Tây Cửu Long & Trung Hoàn — Bảo Tàng Nghệ Thuật & Di Sản Đô Thị',
          nameZh: '西九龙文化区与中环历史区',
          nameEn: 'West Kowloon Cultural District & Central Heritage',
          summaryVi: 'Trục kết nối trung tâm nghệ thuật mới bên Cảng Victoria với các công trình lịch sử thế kỷ XIX tại đảo Hồng Kông.',
          summaryEn: 'Links the waterfront museum hub at West Kowloon with 19th-century civic heritage across Central on Hong Kong Island.',
          spots: [
            {
              id: 'spot-hk-palace-mplus',
              nameVi: 'Bảo tàng Cố Cung Hồng Kông & Bảo tàng Nghệ thuật Thị giác M+',
              nameZh: '香港故宫文化博物馆与M+博物馆',
              nameEn: 'Hong Kong Palace Museum & M+ Museum',
              category: 'Tổ hợp bảo tàng quốc tế',
              highlightVi: 'Trưng bày luân phiên hàng trăm bảo vật quốc gia từ Bảo tàng Cố Cung Bắc Kinh kết hợp không gian kiến trúc đương đại M+ về nghệ thuật thị giác châu Á thế kỷ XX–XXI.',
              highlightEn: 'Rotates hundreds of national treasures on loan from Beijing\'s Palace Museum alongside M+\'s landmark collection of 20th–21st-century Asian visual culture.',
              localDishVi: 'Mì hoành thánh tôm tươi (Vân Thôn Miện) & Trà sữa tất lụa Hồng Kông',
              localDishEn: 'Shrimp Wonton Noodles and Silk-Stocking Milk Tea'
            },
            {
              id: 'spot-hk-taikwun-manmo',
              nameVi: 'Tổ hợp Di sản Đại Quán (Tai Kwun) & Miếu Văn Võ (Man Mo Temple)',
              nameZh: '大馆与文武庙',
              nameEn: 'Tai Kwun Heritage Complex & Man Mo Temple',
              category: 'Di sản kiến trúc & tôn giáo',
              highlightVi: 'Đại Quán phục dựng nguyên vẹn cụm Sở Cảnh sát và Tòa án Trung ương thời thuộc địa (1841–1925) bên cạnh Miếu Văn Võ xây năm 1847 treo hàng trăm vòng nhang xoắn.',
              highlightEn: 'Restored 19th-century Central Police Station compound near the 1847 Man Mo Temple draped with giant spiral incense coils.',
              localDishVi: 'Ngỗng quay da giòn (Thiêu Nga) & Bánh dứa bơ (Ba La Du)',
              localDishEn: 'Cantonese Roast Goose and Pineapple Bun with Butter (Bolo Yau)'
            }
          ]
        },
        {
          id: 'zone-hk-lantau-newterritories',
          nameVi: 'Đảo Lantau & Tân Giới — Làng Chài Nhà Sàn & Đường Mòn Di Sản',
          nameZh: '大屿山大澳与新界围村',
          nameEn: 'Lantau Island & New Territories Walled Villages',
          summaryVi: 'Góc nhìn truyền thống ít người biết của Hồng Kông với làng chài nhà sàn Đại Úc và các thành lũy dòng họ Tống–Minh tại Tân Giới.',
          summaryEn: 'Traditional counterpoint to the skyline, preserving Tai O\'s stilt-house fishing village and Song–Ming walled clan villages.',
          spots: [
            {
              id: 'spot-hk-taio-ngongping',
              nameVi: 'Làng chài Đại Úc (Tai O) & Tượng Đại Phật Thiên Đàn',
              nameZh: '大澳水乡与天坛大佛',
              nameEn: 'Tai O Stilt Village & Tian Tan Buddha',
              category: 'Di sản văn hóa bản địa',
              highlightVi: 'Làng chài lâu đời của cư dân Đản Gia với nhà sàn gỗ (Bằng Ốc) dọc rạch nước mặn kết nối với Thiền viện Bảo Liên và tượng Phật đồng ngoài trời cao 34 m.',
              highlightEn: 'Historic Tanka fishing community of timber stilt houses (Pang Uk) linked with Po Lin Monastery and the 34 m bronze Buddha.',
              localDishVi: 'Mắm tôm Đại Úc, Bánh trứng gà non (Kê Đản Tử) & Chè đậu phụ nóng',
              localDishEn: 'Tai O Shrimp Paste Dishes, Egg Waffles, and Warm Tofu Pudding'
            },
            {
              id: 'spot-hk-ping-shan',
              nameVi: 'Đường mòn Di sản Bình Sơn (Ping Shan Heritage Trail)',
              nameZh: '屏山文物径',
              nameEn: 'Ping Shan Heritage Trail',
              category: 'Di sản văn hóa Lĩnh Nam',
              highlightVi: 'Tuyến đi bộ kết nối Tụ Tinh Lâu (tháp cổ nhất Hồng Kông, hơn 600 năm tuổi), Đặng Thị Tông Từ và Thư thất Du Canh của dòng họ Đặng định cư từ thế kỷ XII.',
              highlightEn: 'Walk linking Tsui Sing Lau (Hong Kong\'s oldest pagoda, 600+ years old), Tang Ancestral Hall, and study halls of the Tang clan settled since the 12th century.',
              localDishVi: 'Bồn Thái truyền thống Tân Giới (Bồn Thái — tiệc nồi lớn nhiều tầng)',
              localDishEn: 'New Territories Traditional Poon Choi (Layered Festive Basin Feast)'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-macau',
      provinceId: 'prov-macau',
      nameVi: 'Ma Cao',
      nameZh: '澳门',
      nameEn: 'Macau',
      overviewVi: 'Đặc khu hành chính hơn 450 năm giao lưu thương mại và văn hóa Trung Hoa – Bồ Đào Nha, gắn liền với Khu Trung tâm Lịch sử UNESCO gồm 22 công trình kiến trúc và 8 quảng trường lát đá hoa văn.',
      overviewEn: 'A Special Administrative Region shaped by over 450 years of Sino-Portuguese maritime exchange, anchored by a UNESCO Historic Centre comprising 22 buildings and 8 cobblestone squares.',
      bestSeasonVi: 'Tháng 10–12 trời mát khô, ánh nắng đẹp cho các tuyến đi bộ khảo cứu di sản bán đảo Ma Cao và làng cổ Coloane.',
      bestSeasonEn: 'October to December brings mild, dry skies ideal for walking tours across the Macau Peninsula and Coloane Village.',
      hsrHubs: [
        { nameZh: '珠海站（拱北口岸接驳澳门）', pinyin: 'Zhuhai (Gongbei Port to Macau)', cityVi: 'Chu Hải (kết nối cửa khẩu Củng Bắc sang Ma Cao)', cityEn: 'Zhuhai (Gongbei Border Gateway to Macau)' }
      ],
      zones: [
        {
          id: 'zone-mo-historic-centre',
          nameVi: 'Bán đảo Ma Cao — Trung tâm Lịch sử Giao thoa Hoa – Bồ',
          nameZh: '澳门历史城区',
          nameEn: 'Historic Centre of Macau',
          summaryVi: 'Quần thể di sản thế giới UNESCO nơi miếu Ma Tổ thời Minh nằm chung hành lang đi bộ với nhà thờ Baroque và dinh thự thương nhân Hoa kiều.',
          summaryEn: 'UNESCO World Heritage corridor where a Ming-era Mazu temple shares pedestrian lanes with Baroque churches and Cantonese merchant mansions.',
          spots: [
            {
              id: 'spot-mo-stpaul-senado',
              nameVi: 'Di tích Đại Tam Ba (Nhà thờ Thánh Paul) & Quảng trường Nghị Sự Đình',
              nameZh: '大三巴牌坊与议事亭前地',
              nameEn: 'Ruins of St. Paul\'s & Senado Square',
              category: 'UNESCO',
              highlightVi: 'Mặt tiền đá hoa cương xây năm 1602–1640 chạm khắc song song biểu tượng Thiên Chúa giáo với chữ Hán, hoa cúc và sư tử đá Trung Hoa, liền kề Pháo đài Đại Pháo Đài.',
              highlightEn: '1602–1640 granite facade combining Jesuit Baroque iconography with Chinese characters, chrysanthemums, and guardian lions beside Mount Fortress.',
              localDishVi: 'Bánh tart trứng Bồ Đào Nha (Bồ Thức Đản Tháp) & Bánh mì kẹp sườn heo',
              localDishEn: 'Macanese Portuguese Egg Tart and Pork Chop Bun'
            },
            {
              id: 'spot-mo-ama-mandarin',
              nameVi: 'Miếu Ma Các (A-Ma Temple) & Nhà Trịnh Gia Đại Ốc',
              nameZh: '妈阁庙与郑家大屋',
              nameEn: 'A-Ma Temple & Mandarin\'s House',
              category: 'UNESCO',
              highlightVi: 'Miếu Ma Các khởi lập năm 1488 — nguồn gốc tên gọi quốc tế "Macau"; Nhà Trịnh Gia Đại Ốc xây năm 1869 là nơi nhà tư tưởng cải cách Trịnh Quan Ứng viết "Thịnh Thế Nguy Ngôn".',
              highlightEn: '1488 A-Ma Temple—origin of the name "Macau"—and the 1869 Mandarin\'s House where reformer Zheng Guanying wrote "Words of Warning in Times of Prosperity."',
              localDishVi: 'Gà nướng kiểu Phi Châu (Phi Châu Kê) & Bánh hạnh nhân Ma Cao',
              localDishEn: 'Macanese African Chicken and Almond Cookies'
            }
          ]
        },
        {
          id: 'zone-mo-taipa-coloane',
          nameVi: 'Taipa & Coloane — Làng Cổ Phía Nam & Ẩm thực Thổ Sinh',
          nameZh: '氹仔官也街与路环渔村',
          nameEn: 'Taipa & Coloane — Old Villages & Macanese Cuisine',
          summaryVi: 'Không gian sinh hoạt bình dị của những dãy nhà xanh bạc hà Bồ Đào Nha và làng chài lâu đời tách biệt khỏi khu giải trí hiện đại.',
          summaryEn: 'Relaxed southern islands preserving pastel-green Portuguese villas and quiet coastal fishing streets.',
          spots: [
            {
              id: 'spot-mo-taipa-houses',
              nameVi: 'Bảo tàng Nhà Taipa (Long Hoàn Phồ Vận) & Phố Quan Dã',
              nameZh: '龙环葡韵住宅式博物馆与官也街',
              nameEn: 'Taipa Houses Museum & Rua do Cunha',
              category: 'Di sản kiến trúc văn hóa',
              highlightVi: 'Năm ngôi biệt thự màu xanh ngọc xây năm 1921 tái hiện đời sống cộng đồng người Ma Cao gốc Bồ–Hoa (Macanese) đầu thế kỷ XX.',
              highlightEn: 'Five 1921 mint-green waterfront villas illustrating early-20th-century Macanese community life.',
              localDishVi: 'Cơm vịt nướng Bồ Đào Nha (Áp Phạn) & Cháo cua thủy sản (Thủy Giải Chúc)',
              localDishEn: 'Macanese Baked Duck Rice and Crab Congee'
            },
            {
              id: 'spot-mo-coloane',
              nameVi: 'Làng Cổ Coloane & Nhà thờ Thánh Phanxicô Xaviê',
              nameZh: '路环渔村与圣方济各圣堂',
              nameEn: 'Coloane Village & Chapel of St. Francis Xavier',
              category: 'Di sản làng chài lịch sử',
              highlightVi: 'Ngôi làng chài yên tĩnh ven biển với xưởng đóng thuyền gỗ cổ Lệ Chi Oản và nhà thờ tường vàng xây năm 1928.',
              highlightEn: 'Quiet seaside fishing village preserving historic Lai Chi Vun wooden shipyards and the 1928 yellow-facade chapel.',
              localDishVi: 'Bánh tart trứng Lord Stow bản gốc & Mì cá viên cà ri',
              localDishEn: 'Original Coloane Egg Tarts and Curry Fishball Noodles'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-taiwan',
      provinceId: 'prov-taiwan',
      nameVi: 'Đài Loan',
      nameZh: '台湾',
      nameEn: 'Taiwan',
      overviewVi: 'Hòn đảo giàu bản sắc lưu giữ chữ Hán phồn thể, kho báu Bảo tàng Cố Cung Đài Bắc, di sản kiến trúc Mân Nam – Khách Gia – Nhật Bản, cảnh quan núi biển hùng vĩ và văn hóa chợ đêm đặc sắc.',
      overviewEn: 'An island preserving Traditional Chinese script, the National Palace Museum collection in Taipei, Minnan–Hakka–Japanese heritage, alpine-coastal scenery, and active night markets.',
      bestSeasonVi: 'Mùa thu (tháng 10–11) trời mát nắng đẹp và mùa xuân (tháng 3–4, mùa hoa anh đào A Lý Sơn); tránh mùa bão tháng 7–9.',
      bestSeasonEn: 'Autumn (October–November) for mild clear skies and spring (March–April) for Alishan cherry blossoms, outside the July–September typhoon peak.',
      hsrHubs: [
        { nameZh: '台北高铁站', pinyin: 'Taibei Gaotie', cityVi: 'Đài Bắc', cityEn: 'Taipei' },
        { nameZh: '台中高铁站', pinyin: 'Taizhong Gaotie', cityVi: 'Đài Trung', cityEn: 'Taichung' },
        { nameZh: '台南高铁站', pinyin: 'Tainan Gaotie', cityVi: 'Đài Nam', cityEn: 'Tainan' },
        { nameZh: '左营高铁站', pinyin: 'Zuoying Gaotie', cityVi: 'Cao Hùng', cityEn: 'Kaohsiung' }
      ],
      zones: [
        {
          id: 'zone-tw-taipei-newtaipei',
          nameVi: 'Đài Bắc & Tân Bắc — Bảo Tàng Cố Cung & Phố Cổ Cửu Phần',
          nameZh: '台北故宫与九份山城区',
          nameEn: 'Taipei & New Taipei — Palace Museum & Jiufen',
          summaryVi: 'Nơi lưu giữ gần 700.000 cổ vật hoàng gia Trung Hoa kết hợp phố cổ trà đạo Đại Đạo Trình và thị trấn mỏ vàng ven biển Cửu Phần.',
          summaryEn: 'Houses nearly 700,000 imperial Chinese artifacts alongside Dadaocheng\'s historic tea lanes and the hillside mining town of Jiufen.',
          spots: [
            {
              id: 'spot-tw-npm',
              nameVi: 'Bảo tàng Cố Cung Đài Bắc & Khu phố cổ Đại Đạo Trình',
              nameZh: '台北故宫博物院与大稻埕',
              nameEn: 'National Palace Museum (Taipei) & Dadaocheng',
              category: 'Bảo tàng tầm cỡ thế giới',
              highlightVi: 'Trưng bày các kiệt tác quốc bảo như Mao Công Đỉnh, Thúy Ngọc Bạch Thái, Nhục Hình Thạch, "Khê Sơn Hành Lữ Đồ" (Phạm Khoan) và "Tảo Xuân Đồ" (Quách Hy).',
              highlightEn: 'Exhibits treasures including the Mao Gong Ding, Jadeite Cabbage, Meat-Shaped Stone, Fan Kuan\'s "Travelers Among Mountains and Streams," and Guo Xi\'s "Early Spring."',
              localDishVi: 'Mì bò hầm Đài Bắc (Ngưu Nhục Miện) & Bánh bao Tiểu Long Bao',
              localDishEn: 'Taipei Braised Beef Noodle Soup and Xiaolongbao'
            },
            {
              id: 'spot-tw-jiufen-pingxi',
              nameVi: 'Phố Cổ Cửu Phần & Tuyến đường sắt cổ Bình Khê',
              nameZh: '九份老街与平溪线',
              nameEn: 'Jiufen Old Street & Pingxi Rail Line',
              category: 'Di sản thị trấn núi biển',
              highlightVi: 'Thị trấn bậc thang ven biển hình thành từ cơn sốt vàng cuối thế kỷ XIX với trà quán nhìn ra Thái Bình Dương và tục thả đèn trời Bình Khê.',
              highlightEn: 'Late-19th-century terraced hillside gold-mining town featuring cliffside teahouses overlooking the Pacific and Pingxi sky-lantern traditions.',
              localDishVi: 'Chè khoai môn Cửu Phần (Vu Viên) & Trà Ô Long núi cao',
              localDishEn: 'Jiufen Taro Balls (Yuyuan) and High-Mountain Oolong Tea'
            }
          ]
        },
        {
          id: 'zone-tw-tainan-alishan',
          nameVi: 'Đài Nam & Gia Nghĩa (A Lý Sơn) — Phủ Thành Cổ & Đường Sắt Rừng Núi',
          nameZh: '台南府城古迹与阿里山森林铁路',
          nameEn: 'Tainan Historic Capital & Alishan Forest Railway',
          summaryVi: 'Cố đô lâu đời nhất Đài Loan từ thế kỷ XVII gắn với Trịnh Thành Công cùng tuyến tàu hỏa leo núi cổ xuyên rừng bách nghìn năm.',
          summaryEn: 'Taiwan\'s oldest 17th-century capital associated with Koxinga paired with a historic narrow-gauge alpine forest railway.',
          spots: [
            {
              id: 'spot-tw-tainan-chihkan',
              nameVi: 'Pháo đài Xích Khảm Lâu & Thành cổ An Bình (Đài Nam)',
              nameZh: '赤崁楼与安平古堡',
              nameEn: 'Chihkan Tower & Anping Fort (Tainan)',
              category: 'Di tích lịch sử cấp quốc gia',
              highlightVi: 'Di tích giao thoa kiến trúc Hà Lan thế kỷ XVII (Fort Provintia, Fort Zeelandia) với đền miếu Mân Nam và Văn Miếu Đài Nam xây năm 1665 — Khổng Miếu đầu tiên trên đảo.',
              highlightEn: '17th-century Dutch fort foundations overlaid with Minnan pavilions near the 1665 Tainan Confucius Temple—the island\'s oldest.',
              localDishVi: 'Mì Đảm Tử Đài Nam (Đảm Tử Miện) & Canh cá măng biển',
              localDishEn: 'Tainan Danzai Noodles and Milkfish Soup'
            },
            {
              id: 'spot-tw-alishan',
              nameVi: 'Khu Rừng Quốc gia A Lý Sơn & Đường sắt Rừng A Lý Sơn',
              nameZh: '阿里山国家森林游乐区与森林铁路',
              nameEn: 'Alishan National Forest & Historic Forest Railway',
              category: 'Di sản rừng núi & đường sắt cổ',
              highlightVi: 'Tuyến đường sắt khổ hẹp leo dốc chữ Z khai thông năm 1912 xuyên qua rừng bách đỏ cổ thụ hơn 2.000 năm tuổi, biển mây và đồi trà Ô Long cao nguyên.',
              highlightEn: '1912 switchback narrow-gauge railway climbing through 2,000-year-old red cypress groves, seas of clouds, and alpine oolong tea estates.',
              localDishVi: 'Cơm gà xé Gia Nghĩa (Hỏa Kê Nhục Phạn) & Trà Ô Long A Lý Sơn',
              localDishEn: 'Chiayi Shredded Turkey Rice and Alishan High-Mountain Oolong'
            }
          ]
        }
      ]
    }
  ];

  var PROV_HERO_IMGS = {
    "prov-anhui": "assets/images/provinces/anhui-huangshan-cloudsea.jpg",
    "prov-beijing": "assets/images/provinces/beijing-temple-of-heaven.jpg",
    "prov-chongqing": "assets/images/provinces/chongqing-hongyadong.jpg",
    "prov-fujian": "assets/images/provinces/fujian-tulou.jpg",
    "prov-gansu": "assets/images/provinces/gansu-dunhuang-mogao.jpg",
    "prov-guangdong": "assets/images/provinces/guangdong-canton-tower.jpg",
    "prov-guangxi": "assets/images/provinces/guangxi-guilin-li-river.jpg",
    "prov-guizhou": "assets/images/provinces/guizhou-huangguoshu.jpg",
    "prov-hainan": "assets/images/provinces/hainan-sanya-guanyin.jpg",
    "prov-hebei": "assets/images/provinces/hebei-chengde-resort.jpg",
    "prov-heilongjiang": "assets/images/provinces/heilongjiang-saint-sophia.jpg",
    "prov-henan": "assets/images/provinces/henan-longmen-grottoes.jpg",
    "prov-hongkong": "assets/images/provinces/hongkong-victoria-harbour.jpg",
    "prov-hubei": "assets/images/provinces/hubei-yellow-crane-tower.jpg",
    "prov-hunan": "assets/images/provinces/hunan-zhangjiajie.jpg",
    "prov-inner-mongolia": "assets/images/provinces/inner-mongolia-hulunbuir.jpg",
    "prov-jiangsu": "assets/images/provinces/jiangsu-suzhou-garden.jpg",
    "prov-jiangxi": "assets/images/provinces/jiangxi-wuyuan-village.jpg",
    "prov-jilin": "assets/images/provinces/jilin-changbai-tianchi.jpg",
    "prov-liaoning": "assets/images/provinces/liaoning-mukden-palace.jpg",
    "prov-macau": "assets/images/provinces/macau-ruins-st-paul.jpg",
    "prov-ningxia": "assets/images/provinces/ningxia-western-xia-tombs.jpg",
    "prov-qinghai": "assets/images/provinces/qinghai-lake.jpg",
    "prov-shaanxi": "assets/images/provinces/shaanxi-terracotta-army.jpg",
    "prov-shandong": "assets/images/provinces/shandong-taishan.jpg",
    "prov-shanghai": "assets/images/provinces/shanghai-bund-skyline.jpg",
    "prov-shanxi": "assets/images/provinces/shanxi-hanging-temple.jpg",
    "prov-sichuan": "assets/images/provinces/sichuan-jiuzhaigou.jpg",
    "prov-taiwan": "assets/images/provinces/taiwan-sun-moon-lake.jpg",
    "prov-tianjin": "assets/images/provinces/tianjin-eye.jpg",
    "prov-tibet": "assets/images/provinces/tibet-potala-palace.jpg",
    "prov-xinjiang": "assets/images/provinces/xinjiang-kanas-lake.jpg",
    "prov-yunnan": "assets/images/provinces/yunnan-lijiang-old-town.jpg",
    "prov-zhejiang": "assets/images/provinces/zhejiang-hangzhou-westlake.jpg"
  };
  var srcList = typeof ATLAS_PART2_3A !== "undefined" ? ATLAS_PART2_3A
    : typeof ATLAS_PART2_3B !== "undefined" ? ATLAS_PART2_3B
    : typeof ATLAS_PART2_3C !== "undefined" ? ATLAS_PART2_3C : [];
  window.CCE_DESTINATIONS_ATLAS = window.CCE_DESTINATIONS_ATLAS || { hubs: [], corridors: [] };
  if (Array.isArray(window.CCE_DESTINATIONS_ATLAS)) {
    window.CCE_DESTINATIONS_ATLAS = { hubs: window.CCE_DESTINATIONS_ATLAS, corridors: [] };
  }
  var hubs = window.CCE_DESTINATIONS_ATLAS.hubs = window.CCE_DESTINATIONS_ATLAS.hubs || [];
  var seenHub = {};
  var formatHsr = function (arr, isEn) {
    if (!arr) return "";
    if (typeof arr === "string") return arr;
    if (!Array.isArray(arr)) return String(arr);
    return arr.map(function (h) {
      if (typeof h === "string") return h;
      var city = isEn ? (h.cityEn || h.cityVi || "") : (h.cityVi || h.cityEn || "");
      return [h.nameZh || "", h.pinyin ? "(" + h.pinyin + (city ? " · " + city : "") + ")" : city].filter(Boolean).join(" ");
    }).join(" • ");
  };
  var i, j, k;
  for (i = 0; i < hubs.length; i++) { if (hubs[i] && hubs[i].id) seenHub[hubs[i].id] = true; }
  for (i = 0; i < srcList.length; i++) {
    var item = srcList[i];
    if (!item || seenHub[item.id]) continue;
    var visObj = (window.CCE_PROVINCE_ITEM_VISUALS && window.CCE_PROVINCE_ITEM_VISUALS[item.provinceId]) || {};
    var hImgs = Array.isArray(visObj.heritage) ? visObj.heritage : [];
    var fallbackImg = PROV_HERO_IMGS[item.provinceId] || hImgs[0] || "assets/images/provinces/beijing-temple-of-heaven.jpg";
    var areas = [];
    var zones = item.zones || item.areas || [];
    var spotCursor = 0;
    for (j = 0; j < zones.length; j++) {
      var z = zones[j];
      var mappedSpots = [];
      var rawSpots = z.spots || [];
      for (k = 0; k < rawSpots.length; k++) {
        var sp = rawSpots[k];
        var autoImg = hImgs.length ? hImgs[spotCursor % hImgs.length] : fallbackImg;
        spotCursor++;
        mappedSpots.push({
          id: sp.id,
          rating: sp.category || "5A / UNESCO",
          nameVi: sp.nameVi,
          nameEn: sp.nameEn || sp.nameVi,
          nameZh: sp.nameZh || "",
          img: sp.img || autoImg || fallbackImg,
          expVi: sp.highlightVi || "",
          expEn: sp.highlightEn || sp.highlightVi || "",
          foodVi: sp.localDishVi || "Đặc sản địa phương bản địa",
          foodEn: sp.localDishEn || sp.localDishVi || "Regional specialty dish",
          bookingVi: "Đặt trước qua kênh chính thức / mang theo Hộ chiếu gốc khi qua cổng kiểm soát.",
          bookingEn: "Reserve via official mini-programs when required; bring physical passport for entry."
        });
      }
      areas.push({
        id: z.id,
        nameVi: z.nameVi,
        nameEn: z.nameEn || z.nameVi,
        nameZh: z.nameZh || "",
        transitVi: z.summaryVi || "",
        transitEn: z.summaryEn || z.summaryVi || "",
        spots: mappedSpots
      });
    }
    hubs.push({
      id: item.id,
      provinceId: item.provinceId,
      tierBadgeVi: "Hồ sơ Địa văn hóa",
      tierBadgeEn: "Destination Dossier",
      nameVi: item.nameVi,
      nameEn: item.nameEn || item.nameVi,
      nameZh: item.nameZh || "",
      heroImg: fallbackImg,
      bestSeasonVi: item.bestSeasonVi || "",
      bestSeasonEn: item.bestSeasonEn || "",
      gatewayVi: formatHsr(item.hsrHubs || item.gatewayVi, false),
      gatewayEn: formatHsr(item.hsrHubs || item.gatewayEn, true),
      overviewVi: item.overviewVi || "",
      overviewEn: item.overviewEn || "",
      passportNoteVi: "Sử dụng hộ chiếu gốc để mua vé tàu 12306 và đặt vé danh thắng 5A chính quy.",
      passportNoteEn: "Use your original passport for 12306 rail tickets and official 5A attraction entry.",
      areas: areas
    });
    seenHub[item.id] = true;
  }
})();
