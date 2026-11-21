(function () {
  'use strict';

  var ATLAS_PART2_3A = [
    {
      id: 'dest-jiangsu',
      provinceId: 'prov-jiangsu',
      nameVi: 'Giang Tô',
      nameZh: '江苏',
      nameEn: 'Jiangsu',
      overviewVi: 'Vùng đất hạ lưu Trường Giang và trục Đại Vận Hà, hội tụ di sản cố đô Lục Triều–Minh sơ tại Nam Kinh cùng nghệ thuật viên lâm cổ điển Tô Châu và ẩm thực Hoài Dương tinh tế.',
      overviewEn: 'Located along the lower Yangtze and the Grand Canal, Jiangsu unites the Six Dynasties and early Ming imperial heritage of Nanjing with Suzhou classical gardens and refined Huaiyang cuisine.',
      bestSeasonVi: 'Mùa xuân (tháng 3–5) khi hoa đào và liễu rủ dọc kênh đào nở rộ, và mùa thu (tháng 9–11) tiết trời mát, mùa cua lông Dương Trừng.',
      bestSeasonEn: 'Spring (March–May) for canal-side blossoms and willow foliage, and autumn (September–November) for mild weather and Yangcheng Lake hairy crab season.',
      hsrHubs: [
        { nameZh: '南京南站', pinyin: 'Nanjingnan', cityVi: 'Nam Kinh', cityEn: 'Nanjing' },
        { nameZh: '苏州站', pinyin: 'Suzhou', cityVi: 'Tô Châu', cityEn: 'Suzhou' },
        { nameZh: '苏州北站', pinyin: 'Suzhoubei', cityVi: 'Tô Châu', cityEn: 'Suzhou' },
        { nameZh: '扬州东站', pinyin: 'Yangzhoudong', cityVi: 'Dương Châu', cityEn: 'Yangzhou' }
      ],
      zones: [
        {
          id: 'zone-js-nanjing',
          nameVi: 'Nam Kinh — Cố đô Lục Triều & Minh Sơ',
          nameZh: '南京六朝明初古都区',
          nameEn: 'Nanjing — Six Dynasties & Early Ming Capital',
          summaryVi: 'Trung tâm quyền lực phương Nam suốt hơn mười triều đại, gắn liền với tường thành gạch Minh dài nhất còn tồn tại và quần thể lăng tẩm núi Tử Kim.',
          summaryEn: 'Historic southern capital of over ten regimes, anchored by the world\'s longest surviving Ming brick city wall and the Purple Mountain mausoleum complex.',
          spots: [
            {
              id: 'spot-js-mingxiaoling',
              nameVi: 'Minh Hiếu Lăng (Núi Tử Kim)',
              nameZh: '明孝陵',
              nameEn: 'Ming Xiaoling Mausoleum',
              category: 'UNESCO / 5A',
              highlightVi: 'Lăng mộ Minh Thái Tổ Chu Nguyên Chương (xây từ 1381), mở ra quy chuẩn Thần đạo tượng đá uốn lượn và bố cục lăng tẩm Minh–Thanh.',
              highlightEn: 'Tomb of Ming founder Zhu Yuanzhang (begun 1381), setting the canonical layout and winding stone-sculpted Sacred Way for Ming and Qing imperial tombs.',
              localDishVi: 'Vịt muối Kim Lăng (Kim Lăng Diêm Thủy Áp)',
              localDishEn: 'Nanjing Salted Duck (Jinling Yanshui Ya)'
            },
            {
              id: 'spot-js-fuzimiao-qinhuai',
              nameVi: 'Phu Tử Miếu & Dải sông Tần Hoài',
              nameZh: '夫子庙—秦淮风光带',
              nameEn: 'Confucius Temple & Qinhuai River Belt',
              category: '5A',
              highlightVi: 'Không gian trường thi Giang Nam Cống Viện lớn nhất thời Minh–Thanh gắn với văn hóa sĩ tử và đèn hoa đăng trên sông Tần Hoài.',
              highlightEn: 'Site of the Jiangnan Examination Hall—the largest imperial exam compound of the Ming–Qing eras—paired with Qinhuai lantern culture.',
              localDishVi: 'Miến tiết vịt Nam Kinh (Áp Huyết Phấn Ti Thang)',
              localDishEn: 'Duck Blood and Vermicelli Soup'
            }
          ]
        },
        {
          id: 'zone-js-suzhou',
          nameVi: 'Tô Châu — Viên Lâm Cổ Điển & Thủy Trấn',
          nameZh: '苏州古典园林与水乡区',
          nameEn: 'Suzhou — Classical Gardens & Canal Towns',
          summaryVi: 'Đỉnh cao tạo cảnh "mượn cảnh, dời bước đổi hình" của tầng lớp văn nhân Minh–Thanh kết hợp mạng lưới kênh đào bàn cờ 2.500 năm tuổi.',
          summaryEn: 'Apex of Ming–Qing scholar-official garden design ("borrowed scenery") woven into a 2,500-year-old gridded canal city.',
          spots: [
            {
              id: 'spot-js-zhuozhengyuan',
              nameVi: 'Chuyết Chính Viên',
              nameZh: '拙政园',
              nameEn: 'Humble Administrator\'s Garden',
              category: 'UNESCO / 5A',
              highlightVi: 'Viên lâm lớn nhất Tô Châu (khởi dựng khoảng 1509), lấy mặt nước chiếm ba phần năm diện tích làm trung tâm nối liền đình tạ, cầu hành lang.',
              highlightEn: 'Suzhou\'s largest classical garden (begun c. 1509), centering pavilions and winding corridors around water surfaces occupying three-fifths of its grounds.',
              localDishVi: 'Cá quế chiên hình sóc sốt chua ngọt (Tùng Thử Quế Ngư)',
              localDishEn: 'Squirrel-Shaped Mandarin Fish (Songshu Guiyu)'
            },
            {
              id: 'spot-js-zhouzhuang',
              nameVi: 'Cổ trấn Chu Trang',
              nameZh: '周庄古镇',
              nameEn: 'Zhouzhuang Water Town',
              category: '5A',
              highlightVi: 'Thủy trấn xây dựng từ thời Bắc Tống (1086) với 14 cây cầu đá cổ Nguyên–Minh–Thanh và nhà cổ Thẩm Thính.',
              highlightEn: 'Northern Song–era canal town (founded 1086) preserving 14 Yuan–Ming–Qing stone arch bridges and Shen House.',
              localDishVi: 'Chân giò hầm Vạn Tam (Vạn Tam Đề)',
              localDishEn: 'Wansan Braised Pork Hock'
            }
          ]
        },
        {
          id: 'zone-js-yangzhou',
          nameVi: 'Dương Châu — Đô thị Muối & Đại Vận Hà',
          nameZh: '扬州运河盐商文化区',
          nameEn: 'Yangzhou — Grand Canal & Salt Merchant Heritage',
          summaryVi: 'Giao điểm chiến lược giữa sông Trường Giang và Đại Vận Hà, trung tâm của phái hội họa Dương Châu Bát Quái và trà điểm buổi sáng.',
          summaryEn: 'Strategic junction of the Yangtze and Grand Canal, famed for the Eight Eccentrics of Yangzhou painters and morning tea culture.',
          spots: [
            {
              id: 'spot-js-shouxihu',
              nameVi: 'Sấu Tây Hồ',
              nameZh: '瘦西湖',
              nameEn: 'Slender West Lake',
              category: '5A',
              highlightVi: 'Hành lang mặt nước hẹp uốn lượn mang dấu ấn vườn thương nhân muối thời Thanh với cầu Ngũ Đình (1757) và Bạch Tháp.',
              highlightEn: 'Narrow winding waterway lined with Qing salt-merchant gardens, anchored by the Five-Pavilion Bridge (1757) and White Pagoda.',
              localDishVi: 'Cơm chiên Dương Châu & Đậu phụ thái sợi (Đại Chử Can Ti)',
              localDishEn: 'Yangzhou Fried Rice and Shredded Tofu in Broth (Dazhu Gansi)'
            },
            {
              id: 'spot-js-geyuen',
              nameVi: 'Cá Viên',
              nameZh: '个园',
              nameEn: 'Ge Garden',
              category: '4A / Di tích trọng điểm quốc gia',
              highlightVi: 'Xây năm 1818 bởi thương nhân muối Hoàng Chí Quân, nổi tiếng với nghệ thuật xếp giả sơn Tứ Quý bằng bốn loại đá khác nhau.',
              highlightEn: 'Built in 1818 by salt merchant Huang Zhijun, renowned for its Four Seasons rockeries sculpted from four distinct stone types.',
              localDishVi: 'Sủi cảo cua hấp (Giải Hoàng Thang Bao)',
              localDishEn: 'Crab-Roe Soup Dumplings'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-fujian',
      provinceId: 'prov-fujian',
      nameVi: 'Phúc Kiến',
      nameZh: '福建',
      nameEn: 'Fujian',
      overviewVi: 'Miền đất "bát sơn nhất thủy nhất phân điền" hướng ra eo biển Đài Loan, cái nôi của Con đường Tơ lụa trên biển (Tuyền Châu), kiến trúc phòng thủ Thổ Lâu Khách Gia và văn hóa trà Ô Long Vũ Di.',
      overviewEn: 'A mountainous coastal province facing the Taiwan Strait, famed as the Maritime Silk Road hub of Quanzhou, home to Hakka Tulou earthen fortresses, and birthplace of Wuyi oolong tea.',
      bestSeasonVi: 'Mùa thu–đông (tháng 10–12) và mùa xuân (tháng 3–5), khí hậu ôn hòa, tránh mùa bão duyên hải tháng 7–9.',
      bestSeasonEn: 'Autumn–winter (October–December) and spring (March–May) for mild weather outside the July–September coastal typhoon season.',
      hsrHubs: [
        { nameZh: '厦门北站', pinyin: 'Xiamenbei', cityVi: 'Hạ Môn', cityEn: 'Xiamen' },
        { nameZh: '福州站', pinyin: 'Fuzhou', cityVi: 'Phúc Châu', cityEn: 'Fuzhou' },
        { nameZh: '泉州站', pinyin: 'Quanzhou', cityVi: 'Tuyền Châu', cityEn: 'Quanzhou' },
        { nameZh: '南平市站', pinyin: 'Nanpingshi', cityVi: 'Vũ Di Sơn', cityEn: 'Wuyishan' }
      ],
      zones: [
        {
          id: 'zone-fj-quanzhou-xiamen',
          nameVi: 'Tuyền Châu & Hạ Môn — Hải Cảng Cổ & Đảo Cổ Lãng Tự',
          nameZh: '泉州古港与厦门鼓浪屿',
          nameEn: 'Quanzhou Maritime Port & Xiamen Gulangyu',
          summaryVi: 'Dấu tích thương cảng quốc tế Tống–Nguyên được UNESCO công nhận cùng kiến trúc giao thoa Hoa–Âu trên đảo không xe cơ giới Cổ Lãng Tự.',
          summaryEn: 'UNESCO-listed Song–Yuan international port heritage paired with Sino-European historic architecture on pedestrian-only Gulangyu Island.',
          spots: [
            {
              id: 'spot-fj-kaiyuan-qingjing',
              nameVi: 'Chùa Khai Nguyên & Thanh Tịnh Tự (Tuyền Châu)',
              nameZh: '泉州开元寺与清净寺',
              nameEn: 'Kaiyuan Temple & Ashab Mosque (Quanzhou)',
              category: 'UNESCO',
              highlightVi: 'Cặp tháp đá Đông–Tây thời Tống cao hơn 40 m và nhà thờ Hồi giáo bằng đá hoa cương xây năm 1009, minh chứng cộng đồng đa tôn giáo cảng Zaytun.',
              highlightEn: 'Twin Song-era stone pagodas over 40 m tall and the 1009 granite Ashab Mosque, witnessing the multi-faith community of medieval Zaytun.',
              localDishVi: 'Bánh thạch giun biển (Thổ Duẩn Đống) & Mì sợi Hồ (Miện Tuyến Hồ)',
              localDishEn: 'Sea Worm Jelly (Tusun Dong) and Thin Vermicelli Paste'
            },
            {
              id: 'spot-fj-gulangyu',
              nameVi: 'Đảo Cổ Lãng Tự (Hạ Môn)',
              nameZh: '鼓浪屿',
              nameEn: 'Gulangyu Island',
              category: 'UNESCO / 5A',
              highlightVi: 'Quần thể kiến trúc lãnh sự quán, biệt thự Hoa kiều Nam Dương cuối thế kỷ XIX–đầu XX và Bảo tàng Dương cầm.',
              highlightEn: 'Historic settlement of late-19th and early-20th-century consulates, overseas-Chinese villas, and the Piano Museum.',
              localDishVi: 'Mì Sa Trà (Sa Trà Miện)',
              localDishEn: 'Shacha Noodle Soup'
            }
          ]
        },
        {
          id: 'zone-fj-tulou',
          nameVi: 'Nam Tĩnh & Vĩnh Định — Quần thể Thổ Lâu Phúc Kiến',
          nameZh: '南靖与永定福建土楼群',
          nameEn: 'Nanjing & Yongding — Fujian Tulou Clusters',
          summaryVi: 'Kỳ quan kiến trúc đất nện cộng cư của người Khách Gia và Mân Nam xây dựng từ thế kỷ XV–XX giữa thung lũng núi.',
          summaryEn: 'Rammed-earth communal dwellings of Hakka and Minnan clans built between the 15th and 20th centuries across mountain valleys.',
          spots: [
            {
              id: 'spot-fj-tianluokeng',
              nameVi: 'Cụm Thổ Lâu Điền Loa Khanh',
              nameZh: '田螺坑土楼群',
              nameEn: 'Tianluokeng Tulou Cluster',
              category: 'UNESCO / 5A',
              highlightVi: 'Bố cục "Tứ thái nhất thang" gồm một tòa vuông ở giữa và bốn tòa tròn–bầu dục vây quanh theo triết lý phong thủy ngũ hành.',
              highlightEn: 'Iconic "four dishes and one soup" layout comprising a central square earthen building flanked by four round and oval structures.',
              localDishVi: 'Thịt khâu nhục măng khô Khách Gia (Khách Gia Khấu Nhục)',
              localDishEn: 'Hakka Braised Pork Belly with Preserved Mustard Greens'
            },
            {
              id: 'spot-fj-chengqilou',
              nameVi: 'Thừa Khải Lâu (Vĩnh Định)',
              nameZh: '承启楼',
              nameEn: 'Chengqi Lou (Yongding)',
              category: 'UNESCO / 5A',
              highlightVi: 'Được mệnh danh "Thổ Lâu Vương", hoàn thành năm 1709 với bốn vòng đồng tâm, 400 gian phòng từng nuôi sống hơn 600 người cùng dòng tộc.',
              highlightEn: 'Known as the "King of Tulou," completed in 1709 with four concentric rings and 400 rooms housing over 600 clan members.',
              localDishVi: 'Đậu phụ nhồi thịt Khách Gia (Khách Gia Nhưỡng Đậu Phụ)',
              localDishEn: 'Hakka Stuffed Tofu'
            }
          ]
        },
        {
          id: 'zone-fj-wuyishan',
          nameVi: 'Vũ Di Sơn — Địa mạo Đan Hà & Nham Trà',
          nameZh: '武夷山丹霞与岩茶区',
          nameEn: 'Mount Wuyi — Danxia Landforms & Rock Tea',
          summaryVi: 'Di sản kép văn hóa – thiên nhiên gắn với thư viện của Chu Hy thời Nam Tống và quê hương trà Đại Hồng Bào.',
          summaryEn: 'UNESCO mixed cultural and natural heritage linked to Zhu Xi\'s Southern Song academy and Da Hong Pao rock oolong tea.',
          spots: [
            {
              id: 'spot-fj-jiuquxi',
              nameVi: 'Suối Cửu Khúc & Đỉnh Thiên Du',
              nameZh: '九曲溪与天游峰',
              nameEn: 'Nine-Bend Stream & Tianyou Peak',
              category: 'UNESCO / 5A',
              highlightVi: 'Đi bè tre xuôi dòng suối 9 khúc xuyên qua vách đá Đan Hà đỏ thẫm, ngắm mộ thuyền treo (Huyền Quan) hơn 3.000 năm tuổi.',
              highlightEn: 'Bamboo rafting along nine river bends through red Danxia cliffs past 3,000-year-old ancient hanging boat coffins.',
              localDishVi: 'Ngỗng hun khói Vũ Di (Lam Cốc Huân Nga)',
              localDishEn: 'Wuyi Smoked Goose (Langu Xun\'e)'
            },
            {
              id: 'spot-fj-dahongpao',
              nameVi: 'Vườn Trà Cổ Đại Hồng Bào & Thư viện Vũ Di Tinh Xá',
              nameZh: '大红袍母树与武夷精舍',
              nameEn: 'Da Hong Pao Mother Trees & Wuyi Academy',
              category: 'UNESCO / 5A',
              highlightVi: 'Sáu gốc trà cổ mọc trên vách đá Cửu Long Sào (được bảo tồn ngừng hái từ 2006) và di chỉ nơi Chu Hy giảng học cuối thế kỷ XII.',
              highlightEn: 'Six ancient tea shrubs on Jiulongke cliff (protected from harvesting since 2006) near the site of Zhu Xi\'s late-12th-century academy.',
              localDishVi: 'Trà Ô Long Nham Trà & Bánh trà Vũ Di',
              localDishEn: 'Wuyi Rock Oolong Tea and Tea-Infused Pastries'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-shandong',
      provinceId: 'prov-shandong',
      nameVi: 'Sơn Đông',
      nameZh: '山东',
      nameEn: 'Shandong',
      overviewVi: 'Đất Tề–Lỗ cổ đại nơi phát tích Nho giáo, hội tụ Ngũ Nhạc Độc Tôn Thái Sơn, hệ thống suối ngầm Tế Nam và di sản cảng biển kiến trúc Đức tại Thanh Đảo.',
      overviewEn: 'Ancient homeland of Qi and Lu where Confucianism arose, uniting Mount Tai, Jinan\'s artesian springs, and Qingdao\'s coastal maritime architecture.',
      bestSeasonVi: 'Mùa xuân (tháng 4–5) và mùa thu (tháng 9–10) thuận lợi leo núi Thái Sơn và tham quan duyên hải Thanh Đảo.',
      bestSeasonEn: 'Spring (April–May) and autumn (September–October) for climbing Mount Tai and touring the Qingdao coast.',
      hsrHubs: [
        { nameZh: '济南西站', pinyin: 'Jinanxi', cityVi: 'Tế Nam', cityEn: 'Jinan' },
        { nameZh: '曲阜东站', pinyin: 'Qufudong', cityVi: 'Khúc Phụ', cityEn: 'Qufu' },
        { nameZh: '泰安站', pinyin: 'Taian', cityVi: 'Thái An (Thái Sơn)', cityEn: 'Tai\'an (Mount Tai)' },
        { nameZh: '青岛站', pinyin: 'Qingdao', cityVi: 'Thanh Đảo', cityEn: 'Qingdao' }
      ],
      zones: [
        {
          id: 'zone-sd-qufu-taishan',
          nameVi: 'Khúc Phụ & Thái An — Thánh địa Nho giáo & Thái Sơn',
          nameZh: '曲阜三孔与泰山封禅区',
          nameEn: 'Qufu & Tai\'an — Confucian Heartland & Mount Tai',
          summaryVi: 'Trục nghi lễ vương quyền – Nho học quan trọng bậc nhất Trung Hoa nối quê hương Khổng Tử với ngọn núi phong thiện của các Hoàng đế.',
          summaryEn: 'China\'s foremost Confucian and imperial-sacrifice corridor connecting Confucius\'s hometown with the sacred peak of Fengshan rites.',
          spots: [
            {
              id: 'spot-sd-sankong',
              nameVi: 'Tam Khổng Khúc Phụ (Khổng Miếu – Khổng Phủ – Khổng Lâm)',
              nameZh: '曲阜三孔（孔庙、孔府、孔林）',
              nameEn: 'Temple, Mansion, and Cemetery of Confucius (San Kong)',
              category: 'UNESCO / 5A',
              highlightVi: 'Khổng Miếu khởi lập từ năm 478 TCN với Đại Thành Điện chín gian, hơn 2.000 văn bia cổ và khu mộ dòng họ Khổng kéo dài hơn hai thiên niên kỷ.',
              highlightEn: 'Temple founded in 478 BCE featuring the nine-bay Hall of Great Completion, over 2,000 steles, and the world\'s longest-maintained family cemetery.',
              localDishVi: 'Đậu phụ Khổng Phủ (Khổng Phủ Đậu Phụ)',
              localDishEn: 'Kong Family Style Braised Tofu'
            },
            {
              id: 'spot-sd-taishan',
              nameVi: 'Núi Thái Sơn & Đền Đại Miếu',
              nameZh: '泰山与岱庙',
              nameEn: 'Mount Tai & Dai Temple',
              category: 'UNESCO / 5A',
              highlightVi: 'Đỉnh Ngọc Hoàng cao 1.545 m, tuyến bậc đá Thập Bát Bàn, khắc đá Ma Nhai từ thời Tần–Hán–Đường và đền Đại Miếu nơi Hoàng đế tế lễ trước khi đăng sơn.',
              highlightEn: '1,545 m Jade Emperor Peak, the Eighteen Bends stone stairway, Qin–Han–Tang cliff inscriptions, and Dai Temple where emperors began Fengshan rites.',
              localDishVi: 'Canh Tam Mỹ Thái Sơn (Cải thảo, đậu phụ, nước suối Thái Sơn)',
              localDishEn: 'Mount Tai Three-Delicacy Soup (Cabbage, Tofu, Spring Water)'
            }
          ]
        },
        {
          id: 'zone-sd-jinan-qingdao',
          nameVi: 'Tế Nam & Thanh Đảo — Thành phố Suối & Cảng Biển',
          nameZh: '济南泉城与青岛海滨区',
          nameEn: 'Jinan Spring City & Qingdao Coast',
          summaryVi: 'Kết hợp giữa văn hóa 72 danh tuyền vùng nội địa Tế Nam và di sản đô thị thuộc địa Đức đầu thế kỷ XX tại Thanh Đảo.',
          summaryEn: 'Pairs Jinan\'s 72 natural artesian springs with Qingdao\'s early-20th-century coastal urban heritage.',
          spots: [
            {
              id: 'spot-sd-baotuquan',
              nameVi: 'Suối Báo Đột & Hồ Đại Minh (Tế Nam)',
              nameZh: '趵突泉与大明湖',
              nameEn: 'Baotu Spring & Daming Lake',
              category: '5A',
              highlightVi: 'Ba mạch nước ngầm phun trào tự nhiên được ghi chép từ "Xuân Thu" và "Thủy Kinh Chú", đổ vào hồ Đại Minh giữa lòng phố cổ.',
              highlightEn: 'Three natural artesian springs recorded since the "Spring and Autumn Annals" and "Commentary on the Water Classic," feeding Daming Lake.',
              localDishVi: 'Cá chép Hoàng Hà sốt chua ngọt (Đường Thố Lý Ngư)',
              localDishEn: 'Sweet and Sour Yellow River Carp (Tangcu Liyu)'
            },
            {
              id: 'spot-sd-badaguan',
              nameVi: 'Khu Bát Đại Quan & Bảo tàng Bia Thanh Đảo',
              nameZh: '八大关与青岛啤酒博物馆',
              nameEn: 'Badaguan Historic District & Tsingtao Beer Museum',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Hơn 200 biệt thự đa phong cách châu Âu – Trung Hoa đầu thế kỷ XX và nhà máy bia xây dựng năm 1903.',
              highlightEn: 'Over 200 early-20th-century villas blending European and Chinese styles alongside the 1903 historic brewery.',
              localDishVi: 'Nghêu xào cay Thanh Đảo (Lạt Sao Cáp Lợi)',
              localDishEn: 'Spicy Stir-Fried Clams (Lachao Gali)'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-shanxi',
      provinceId: 'prov-shanxi',
      nameVi: 'Sơn Tây',
      nameZh: '山西',
      nameEn: 'Shanxi',
      overviewVi: 'Được mệnh danh "Bảo tàng kiến trúc gỗ cổ lộ thiên của Trung Quốc", lưu giữ hơn 70% công trình gỗ thời Đường–Liêu–Tống–Kim còn sót lại, cùng thành cổ Bình Dao và thương bang Tấn Thương.',
      overviewEn: 'Known as China\'s open-air museum of timber architecture, preserving over 70% of surviving Tang–Liao–Song–Jin wooden structures alongside Pingyao Ancient City and Shanxi merchant banking heritage.',
      bestSeasonVi: 'Mùa hè–thu (tháng 5–10) khô ráo, nắng đẹp, rất thuận lợi cho tuyến khảo cổ kiến trúc gỗ Đại Đồng – Ngũ Đài – Bình Dao.',
      bestSeasonEn: 'May to October offers dry, clear weather ideal for the Datong–Wutai–Pingyao timber architecture and grotto circuit.',
      hsrHubs: [
        { nameZh: '太原南站', pinyin: 'Taiyuannan', cityVi: 'Thái Nguyên', cityEn: 'Taiyuan' },
        { nameZh: '大同南站', pinyin: 'Datongnan', cityVi: 'Đại Đồng', cityEn: 'Datong' },
        { nameZh: '平遥古城站', pinyin: 'Pingyaogucheng', cityVi: 'Bình Dao', cityEn: 'Pingyao' }
      ],
      zones: [
        {
          id: 'zone-sx-datong',
          nameVi: 'Đại Đồng — Thạch Quật Bắc Ngụy & Kiến trúc Gỗ Liêu',
          nameZh: '大同北魏石窟与辽代木构区',
          nameEn: 'Datong — Northern Wei Grottoes & Liao Timber Heritage',
          summaryVi: 'Cố đô Bình Thành của nhà Bắc Ngụy và Tây Kinh của nhà Liêu, lưu giữ tượng Phật đá quy mô lớn và tháp gỗ cao nhất cổ đại.',
          summaryEn: 'Former Northern Wei capital (Pingcheng) and Liao Western Capital, housing colossal stone Buddhas and the world\'s tallest surviving ancient wooden pagoda.',
          spots: [
            {
              id: 'spot-sx-yungang',
              nameVi: 'Thạch Quật Vân Cương',
              nameZh: '云冈石窟',
              nameEn: 'Yungang Grottoes',
              category: 'UNESCO / 5A',
              highlightVi: 'Khởi đào từ năm 460 dưới thời Bắc Ngụy với 45 hang động chính và hơn 51.000 pho tượng, nổi bật là tượng Phật lộ thiên Hang 20 cao 13,7 m.',
              highlightEn: 'Begun in 460 CE under Northern Wei with 45 major caves and over 51,000 statues, anchored by the 13.7 m open-air Buddha of Cave 20.',
              localDishVi: 'Mì cắt dao Sơn Tây (Đao Tiêu Miện)',
              localDishEn: 'Shanxi Knife-Cut Noodles (Daoxiao Mian)'
            },
            {
              id: 'spot-sx-yingxian-xuankong',
              nameVi: 'Tháp Gỗ Ứng Huyện & Chùa Treo Huyền Không Tự',
              nameZh: '应县木塔与悬空寺',
              nameEn: 'Yingxian Wooden Pagoda & Hanging Temple',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Tháp Thích Ca xây năm 1056 thời Liêu cao 67,31 m hoàn toàn bằng mộng gỗ Đấu Củng không dùng đinh sắt; Chùa Treo bám trên vách đá Hằng Sơn.',
              highlightEn: '1056 Liao-dynasty Sakyamuni Pagoda standing 67.31 m tall using pure timber dougong joinery without iron nails, paired with the cliffside Hanging Temple on Mount Heng.',
              localDishVi: 'Thịt cừu hầm Đại Đồng (Hồn Nguyên Lương Phấn & Dương Nhục)',
              localDishEn: 'Hunyuan Mung-Bean Jelly and Datong Braised Lamb'
            }
          ]
        },
        {
          id: 'zone-sx-pingyao-wutai',
          nameVi: 'Bình Dao & Ngũ Đài Sơn — Phiếu Hiệu Tấn Thương & Phật Giáo Danh Sơn',
          nameZh: '平遥晋商古城与五台山',
          nameEn: 'Pingyao Merchant City & Mount Wutai',
          summaryVi: 'Hội tụ pháo đài tài chính Phiếu Hiệu đầu tiên của Trung Quốc và trung tâm Phật giáo Văn Thù với các đại điện gỗ thời Đường.',
          summaryEn: 'Unites China\'s first draft-bank (Piaohao) walled city with Mount Wutai\'s Tang-dynasty wooden halls.',
          spots: [
            {
              id: 'spot-sx-pingyao',
              nameVi: 'Thành cổ Bình Dao & Phiếu Hiệu Nhật Thăng Xương',
              nameZh: '平遥古城与日升昌票号',
              nameEn: 'Ancient City of Pingyao & Rishengchang Draft Bank',
              category: 'UNESCO / 5A',
              highlightVi: 'Hệ thống tường thành chu vi hơn 6 km nguyên vẹn thời Minh–Thanh và trụ sở ngân hàng hối phiếu đầu tiên của Trung Quốc thành lập năm 1823.',
              highlightEn: 'Intact 6 km Ming–Qing city walls enclosing Rishengchang, China\'s earliest interregional draft bank founded in 1823.',
              localDishVi: 'Thịt bò muối Bình Dao (Bình Dao Ngưu Nhục)',
              localDishEn: 'Pingyao Cured Beef'
            },
            {
              id: 'spot-sx-wutaishan',
              nameVi: 'Ngũ Đài Sơn & Chùa Phật Quang (Đông Đại Điện)',
              nameZh: '五台山与佛光寺东大殿',
              nameEn: 'Mount Wutai & Foguang Temple East Hall',
              category: 'UNESCO / 5A',
              highlightVi: 'Đứng đầu Tứ Đại Phật Giáo Danh Sơn; Đông Đại Điện Chùa Phật Quang xây năm 857 được Lương Tư Thành và Lâm Huy Nhân phát hiện năm 1937.',
              highlightEn: 'Foremost of the Four Sacred Buddhist Mountains; Foguang Temple\'s 857 CE East Hall was identified by Liang Sicheng and Lin Huiyin in 1937.',
              localDishVi: 'Nấm Đài Ma hầm đậu phụ (Đài Ma Độn Đậu Phụ)',
              localDishEn: 'Braised Mount Wutai Mushrooms with Tofu'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-hebei',
      provinceId: 'prov-hebei',
      nameVi: 'Hà Bắc',
      nameZh: '河北',
      nameEn: 'Hebei',
      overviewVi: 'Vùng đất Yên–Triệu bao quanh Bắc Kinh và Thiên Tân, hội tụ quần thể hành cung nghỉ mát nhà Thanh tại Thừa Đức, cực Đông Vạn Lý Trường Thành Sơn Hải Quan và kiệt tác cầu đá thời Tùy.',
      overviewEn: 'The ancient Yan–Zhao ring surrounding Beijing and Tianjin, home to the Qing Mountain Resort at Chengde, the eastern terminus of the Great Wall at Shanhaiguan, and Sui-era stone engineering.',
      bestSeasonVi: 'Mùa hè (tháng 6–8) tránh nóng tại Thừa Đức và mùa thu (tháng 9–10) ngắm lá đỏ trên Trường Thành Kim Sơn Lĩnh.',
      bestSeasonEn: 'Summer (June–August) for Chengde\'s cool mountain retreat and autumn (September–October) for foliage along Jinshanling Great Wall.',
      hsrHubs: [
        { nameZh: '石家庄站', pinyin: 'Shijiazhuang', cityVi: 'Thạch Gia Trang', cityEn: 'Shijiazhuang' },
        { nameZh: '承德南站', pinyin: 'Chengdenan', cityVi: 'Thừa Đức', cityEn: 'Chengde' },
        { nameZh: '秦皇岛站', pinyin: 'Qinhuangdao', cityVi: 'Tần Hoàng Đảo', cityEn: 'Qinhuangdao' },
        { nameZh: '保定东站', pinyin: 'Baodingdong', cityVi: 'Bảo Định', cityEn: 'Baoding' }
      ],
      zones: [
        {
          id: 'zone-hb-chengde',
          nameVi: 'Thừa Đức — Tị Thử Sơn Trang & Ngoại Bát Miếu',
          nameZh: '承德避暑山庄与外八庙',
          nameEn: 'Chengde — Mountain Resort & Outlying Temples',
          summaryVi: 'Trung tâm chính trị mùa hè của các Hoàng đế Khang Hy – Càn Long, thể hiện chiến lược hòa hợp Hán – Mãn – Mông – Tạng qua kiến trúc.',
          summaryEn: 'Summer political capital of the Kangxi and Qianlong emperors, expressing Manchu–Han–Mongol–Tibetan integration through architecture.',
          spots: [
            {
              id: 'spot-hb-bishushanzhuang',
              nameVi: 'Tị Thử Sơn Trang',
              nameZh: '承德避暑山庄',
              nameEn: 'Chengde Mountain Resort',
              category: 'UNESCO / 5A',
              highlightVi: 'Viên lâm hoàng gia lớn nhất Trung Quốc (5,64 km², xây dựng 1703–1792), tái hiện thu nhỏ địa hình thảo nguyên, hồ Giang Nam và núi non Trung Hoa.',
              highlightEn: 'China\'s largest imperial garden (5.64 sq km, built 1703–1792), miniaturizing China\'s steppes, Jiangnan lakes, and mountains.',
              localDishVi: 'Bánh nhân thịt lừa Bảo Định / Bánh nướng Thừa Đức',
              localDishEn: 'Chengde Imperial Sesame Pastry and Braised Venison-Style Dishes'
            },
            {
              id: 'spot-hb-putuozongcheng',
              nameVi: 'Chùa Phổ Đà Tông Thừa (Tiểu Potala)',
              nameZh: '普陀宗乘之庙',
              nameEn: 'Putuo Zongcheng Temple',
              category: 'UNESCO / 5A',
              highlightVi: 'Xây năm 1767–1771 phỏng theo Cung điện Potala ở Lhasa để đón tiếp các thủ lĩnh Mông Cổ – Tây Tạng mừng thọ Càn Long.',
              highlightEn: 'Constructed 1767–1771 after Lhasa\'s Potala Palace to receive Mongol and Tibetan leaders celebrating Emperor Qianlong\'s 60th birthday.',
              localDishVi: 'Kê nướng hạt dẻ Yên Sơn (Yên Sơn Bản Lật)',
              localDishEn: 'Yanshan Roasted Chestnuts'
            }
          ]
        },
        {
          id: 'zone-hb-greatwall-zhaozhou',
          nameVi: 'Sơn Hải Quan, Kim Sơn Lĩnh & Cầu Triệu Châu',
          nameZh: '山海关、金山岭与赵州桥',
          nameEn: 'Shanhaiguan, Jinshanling & Zhaozhou Bridge',
          summaryVi: 'Trục phòng thủ quân sự nhà Minh tiếp giáp biển Bột Hải kết hợp kiệt tác kỹ thuật cầu vòm đá cổ nhất còn nguyên vẹn.',
          summaryEn: 'Ming frontier defense corridor meeting the Bohai Sea, paired with the world\'s oldest surviving open-spandrel stone arch bridge.',
          spots: [
            {
              id: 'spot-hb-shanhaiguan',
              nameVi: 'Sơn Hải Quan & Lão Long Đầu',
              nameZh: '山海关与老龙头',
              nameEn: 'Shanhaiguan Pass & Old Dragon\'s Head',
              category: 'UNESCO / 5A',
              highlightVi: '"Thiên Hạ Đệ Nhất Quan" do đại tướng Từ Đạt xây năm 1381 cùng đoạn Trường Thành vươn thẳng xuống biển Bột Hải.',
              highlightEn: '"First Pass Under Heaven," built by General Xu Da in 1381, paired with the Great Wall bastion extending directly into the Bohai Sea.',
              localDishVi: 'Hải sản Tần Hoàng Đảo & Bánh hấp tứ bảo',
              localDishEn: 'Qinhuangdao Coastal Seafood and Four-Filling Steamed Buns'
            },
            {
              id: 'spot-hb-zhaozhouqiao',
              nameVi: 'Cầu Triệu Châu (An Tế Kiều)',
              nameZh: '赵州桥（安济桥）',
              nameEn: 'Zhaozhou Bridge (Anji Bridge)',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Do thợ đá Lý Xuân xây thời Tùy (khoảng 595–605) với nhịp vòm đơn dài 37,02 m và bốn vòm phụ thoát lũ hai bên vai cầu.',
              highlightEn: 'Built by Li Chun in the Sui dynasty (c. 595–605) with a 37.02 m single stone arch and four open spandrel flood-relief arches.',
              localDishVi: 'Bánh kẹp thịt lừa (Lư Nhục Hỏa Thiêu)',
              localDishEn: 'Hebei Donkey Burger (Lurou Huoshao)'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-henan',
      provinceId: 'prov-henan',
      nameVi: 'Hà Nam',
      nameZh: '河南',
      nameEn: 'Henan',
      overviewVi: 'Vùng Trung Nguyên ("Thiên hạ chi trung"), nơi tập trung mật độ cố đô dày đặc nhất lịch sử Trung Hoa gồm An Dương (Ân Khư), Lạc Dương, Trịnh Châu và Khai Phong (Biện Kinh).',
      overviewEn: 'The Central Plains ("Center of All Under Heaven"), holding China\'s highest concentration of ancient capitals: Anyang (Yinxu), Luoyang, Zhengzhou, and Kaifeng (Bianjing).',
      bestSeasonVi: 'Tháng 4 (mùa hoa mẫu đơn Lạc Dương) và tháng 9–11 (mùa hoa cúc Khai Phong, tiết trời thu khô thoáng).',
      bestSeasonEn: 'April (Luoyang peony festival) and September–November (Kaifeng chrysanthemum season with crisp autumn weather).',
      hsrHubs: [
        { nameZh: '郑州东站', pinyin: 'Zhengzhoudong', cityVi: 'Trịnh Châu', cityEn: 'Zhengzhou' },
        { nameZh: '洛阳龙门站', pinyin: 'Luoyanglongmen', cityVi: 'Lạc Dương', cityEn: 'Luoyang' },
        { nameZh: '安阳东站', pinyin: 'Anyangdong', cityVi: 'An Dương', cityEn: 'Anyang' },
        { nameZh: '开封北站', pinyin: 'Kaifengbei', cityVi: 'Khai Phong', cityEn: 'Kaifeng' }
      ],
      zones: [
        {
          id: 'zone-hn-luoyang-dengfeng',
          nameVi: 'Lạc Dương & Đăng Phong — Thạch Quật Long Môn & Tung Sơn',
          nameZh: '洛阳龙门与登封嵩山古迹区',
          nameEn: 'Luoyang & Dengfeng — Longmen Grottoes & Mount Song',
          summaryVi: 'Cố đô của 13 triều đại nối liền với Trung Nhạc Tung Sơn — nơi đặt Thiếu Lâm Tự và Đài Thiên Văn cổ của Quách Thủ Kính.',
          summaryEn: 'Capital of 13 dynasties linked to Central Peak Mount Song, home to Shaolin Monastery and Guo Shoujing\'s Yuan-era observatory.',
          spots: [
            {
              id: 'spot-hn-longmen',
              nameVi: 'Thạch Quật Long Môn',
              nameZh: '龙门石窟',
              nameEn: 'Longmen Grottoes',
              category: 'UNESCO / 5A',
              highlightVi: 'Hơn 2.300 khám tượng và 100.000 tượng Phật khắc dọc sông Y từ năm 493 đến thời Đường, đỉnh cao là tượng Phật Lô Xá Na cao 17,14 m tại Phụng Tiên Tự.',
              highlightEn: 'Over 2,300 niches and 100,000 Buddhist statues carved along the Yi River from 493 CE through the Tang, crowned by the 17.14 m Vairocana Buddha at Fengxian Temple.',
              localDishVi: 'Thủy Tịch Lạc Dương (Yến Thái — 24 món canh luân phiên)',
              localDishEn: 'Luoyang Water Banquet (Shuixi)'
            },
            {
              id: 'spot-hn-shaolin-dengfeng',
              nameVi: 'Thiếu Lâm Tự & Quần thể "Thiên Địa Chi Trung" Đăng Phong',
              nameZh: '少林寺与登封“天地之中”历史建筑群',
              nameEn: 'Shaolin Temple & Historic Monuments of Dengfeng',
              category: 'UNESCO / 5A',
              highlightVi: 'Tổ đình Thiền Tông và võ thuật Thiếu Lâm (lập năm 495), Rừng Tháp hơn 240 ngôi mộ tháp cùng Đài Thiên Văn Đăng Phong (1276).',
              highlightEn: 'Cradle of Chan Buddhism and Shaolin martial arts (founded 495), its Pagoda Forest of 240+ stupas, and the 1276 Dengfeng Astronomical Observatory.',
              localDishVi: 'Mì hầm thịt cừu Hà Nam (Hà Nam Hối Miện)',
              localDishEn: 'Henan Braised Lamb Noodles (Huimian)'
            }
          ]
        },
        {
          id: 'zone-hn-anyang-kaifeng',
          nameVi: 'An Dương & Khai Phong — Ân Khư Giáp Cốt & Cố đô Bắc Tống',
          nameZh: '安阳殷墟与开封汴京文化区',
          nameEn: 'Anyang Yinxu & Kaifeng Northern Song Capital',
          summaryVi: 'Hành trình xuyên 2.300 năm từ kinh đô chữ Giáp Cốt nhà Thương đến cố đô thương mại sầm uất nhất thế kỷ XI.',
          summaryEn: 'A 2,300-year arc from the Shang oracle-bone capital to the bustling 11th-century Northern Song metropolis.',
          spots: [
            {
              id: 'spot-hn-yinxu',
              nameVi: 'Di chỉ Ân Khư & Bảo tàng Chữ viết Trung Quốc',
              nameZh: '殷墟遗址与中国文字博物馆',
              nameEn: 'Yinxu Ruins & National Museum of Chinese Writing',
              category: 'UNESCO / 5A',
              highlightVi: 'Di chỉ kinh đô vãn Thương (khoảng 1300–1046 TCN) với hố xe ngựa, mộ Phụ Hảo nguyên vẹn và kho tư liệu Giáp Cốt Văn.',
              highlightEn: 'Late Shang capital ruins (c. 1300–1046 BCE) featuring chariot pits, the intact Tomb of Lady Fu Hao, and oracle bone archives.',
              localDishVi: 'Cháo cay Hồ Lạt Thang (Hồ Lạt Thang)',
              localDishEn: 'Spicy Pepper Soup (Hulatang)'
            },
            {
              id: 'spot-hn-kaifeng-qingming',
              nameVi: 'Tháp Sắt Khai Phong & Phủ Khai Phong – Thanh Minh Thượng Hà Viên',
              nameZh: '开封铁塔与清明上河园',
              nameEn: 'Iron Pagoda of Kaifeng & Millennium City Park',
              category: '5A',
              highlightVi: 'Tháp lưu ly màu nâu gỉ sắt cao 55,88 m xây năm 1049 thời Bắc Tống cùng không gian tái hiện quy hoạch đô thị Biện Kinh thế kỷ XII.',
              highlightEn: '55.88 m glazed-brick pagoda built in 1049 alongside a reconstructed Northern Song urban landscape modeled on Zhang Zeduan\'s scroll.',
              localDishVi: 'Bánh bao nước súp Khai Phong (Quán Thang Bao)',
              localDishEn: 'Kaifeng Soup Dumplings (Guantang Bao)'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-hubei',
      provinceId: 'prov-hubei',
      nameVi: 'Hồ Bắc',
      nameZh: '湖北',
      nameEn: 'Hubei',
      overviewVi: 'Xứ sở văn hóa Kinh–Sở cổ đại tại trung lưu Trường Giang ("Cửu tỉnh thông cù"), nổi tiếng với kho báu thanh đồng Bảo tàng Hồ Bắc, Đạo giáo núi Võ Đang và kỳ quan hẻm núi Tam Hiệp.',
      overviewEn: 'Heartland of ancient Chu culture along the middle Yangtze ("Thoroughfare to Nine Provinces"), famed for the Hubei Provincial Museum bronzes, Wudang Daoist peaks, and the Three Gorges.',
      bestSeasonVi: 'Mùa xuân (tháng 3–4, mùa hoa anh đào Vũ Hán) và mùa thu (tháng 9–11, thời tiết mát mẻ tại Võ Đang và Ân Thi).',
      bestSeasonEn: 'Spring (March–April for Wuhan cherry blossoms) and autumn (September–November for mild trekking in Wudang and Enshi).',
      hsrHubs: [
        { nameZh: '武汉站', pinyin: 'Wuhan', cityVi: 'Vũ Hán', cityEn: 'Wuhan' },
        { nameZh: '汉口站', pinyin: 'Hankou', cityVi: 'Vũ Hán', cityEn: 'Wuhan' },
        { nameZh: '宜昌东站', pinyin: 'Yichangdong', cityVi: 'Nghi Xương (Tam Hiệp)', cityEn: 'Yichang (Three Gorges)' },
        { nameZh: '武当山西站', pinyin: 'Wudangshanxi', cityVi: 'Võ Đang Sơn', cityEn: 'Mount Wudang' }
      ],
      zones: [
        {
          id: 'zone-hub-wuhan',
          nameVi: 'Vũ Hán — Tam Trấn Trường Giang & Văn hóa Kinh Sở',
          nameZh: '武汉三镇与荆楚文化区',
          nameEn: 'Wuhan — Yangtze Tri-Cities & Chu Heritage',
          summaryVi: 'Hội lưu sông Hán Thủy và Trường Giang, lưu giữ bộ biên chung Tăng Hầu Ất, kiếm Việt Vương Câu Tiễn và Hoàng Hạc Lâu.',
          summaryEn: 'Confluence of the Han and Yangtze rivers, safeguarding the Marquis Yi chime bells, Sword of Goujian, and Yellow Crane Tower.',
          spots: [
            {
              id: 'spot-hub-museum',
              nameVi: 'Bảo tàng Tỉnh Hồ Bắc',
              nameZh: '湖北省博物馆',
              nameEn: 'Hubei Provincial Museum',
              category: 'Bảo tàng hạng Nhất quốc gia',
              highlightVi: 'Trưng bày bộ 65 chuông đồng Tăng Hầu Ất (433 TCN), Việt Vương Câu Tiễn Kiếm và cổ vật sơn mài nước Sở.',
              highlightEn: 'Houses the 65-piece bronze chime-bell set of Marquis Yi of Zeng (433 BCE), the Sword of Goujian, and Chu lacquerware.',
              localDishVi: 'Mì khô sốt mè Vũ Hán (Nhiệt Can Miện)',
              localDishEn: 'Wuhan Hot Dry Noodles (Reganmian)'
            },
            {
              id: 'spot-hub-huanghelou',
              nameVi: 'Hoàng Hạc Lâu & Cầu Trường Giang Vũ Hán',
              nameZh: '黄鹤楼与武汉长江大桥',
              nameEn: 'Yellow Crane Tower & Wuhan Yangtze River Bridge',
              category: '5A',
              highlightVi: 'Danh lâu gắn với bài thơ Thôi Hiệu và Lý Bạch (khởi dựng từ năm 223 thời Tam Quốc, bản hiện tại khánh thành năm 1985), nhìn thẳng ra cây cầu đường sắt–đường bộ đầu tiên bắc qua Trường Giang (1957).',
              highlightEn: 'Famed tower immortalized by Cui Hao and Li Bai (originally 223 CE; current structure 1985), overlooking China\'s first road-rail bridge across the Yangtze (1957).',
              localDishVi: 'Cá Vũ Xương hấp (Thanh Chưng Vũ Xương Ngư)',
              localDishEn: 'Steamed Wuchang Bream'
            }
          ]
        },
        {
          id: 'zone-hub-wudang-yichang',
          nameVi: 'Võ Đang Sơn & Nghi Xương — Đạo Quán Minh Triều & Tam Hiệp',
          nameZh: '武当山古建筑群与宜昌三峡',
          nameEn: 'Mount Wudang & Yichang Three Gorges',
          summaryVi: 'Quần thể kiến trúc Đạo giáo hoàng gia thời Minh Vĩnh Lạc kết hợp cửa ngõ Tây Lăng Hiệp trên dòng Trường Giang.',
          summaryEn: 'Ming Yongle imperial Daoist mountain complexes paired with the Xiling Gorge gateway on the Yangtze.',
          spots: [
            {
              id: 'spot-hub-wudang',
              nameVi: 'Quần thể Kiến trúc Cổ Núi Võ Đang',
              nameZh: '武当山古建筑群',
              nameEn: 'Ancient Building Complex in the Wudang Mountains',
              category: 'UNESCO / 5A',
              highlightVi: 'Minh Thành Tổ huy động hơn 300.000 thợ xây dựng 9 cung 8 quán (1412–1424), đỉnh cao là Kim Điện bằng đồng mạ vàng trên đỉnh Thiên Trụ cao 1.612 m.',
              highlightEn: 'Built 1412–1424 under Emperor Yongle by over 300,000 artisans, crowned by the gilded-bronze Golden Hall atop 1,612 m Tianzhu Peak.',
              localDishVi: 'Canh gà hầm hạt sen & Cơm chay Đạo quán Võ Đang',
              localDishEn: 'Wudang Daoist Vegetarian Cuisine and Lotus-Seed Soup'
            },
            {
              id: 'spot-hub-sanxia',
              nameVi: 'Tây Lăng Hiệp & Khu thắng cảnh Đập Tam Hiệp',
              nameZh: '西陵峡与三峡大坝旅游区',
              nameEn: 'Xiling Gorge & Three Gorges Dam Scenic Area',
              category: '5A',
              highlightVi: 'Đoạn hẻm núi dài nhất và hiểm trở nhất của Trường Giang Tam Hiệp cùng hệ thống âu tàu 5 bậc của công trình thủy điện lớn nhất thế giới.',
              highlightEn: 'Longest of the Three Gorges alongside the five-tier ship locks of the world\'s largest hydroelectric dam.',
              localDishVi: 'Cá trê sông Trường Giang hấp nồi đất (Phì Ngư Hỏa Oa)',
              localDishEn: 'Yangtze River Catfish Hotpot (Feiyu Huoguo)'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-jiangxi',
      provinceId: 'prov-jiangxi',
      nameVi: 'Giang Tây',
      nameZh: '江西',
      nameEn: 'Jiangxi',
      overviewVi: 'Miền đất núi sông bao quanh hồ Bà Dương, nổi danh với "Sứ Đô" Cảnh Đức Trấn hơn một thiên niên kỷ, núi Lư Sơn gắn với thi ca Đường–Tống và kiến trúc làng cổ Huy Phái tại Vụ Nguyên.',
      overviewEn: 'Centered around Poyang Lake, Jiangxi is renowned for Jingdezhen\'s millennial "Porcelain Capital," Mount Lu\'s poetic heritage, and Huizhou-style ancestral villages in Wuyuan.',
      bestSeasonVi: 'Mùa xuân (tháng 3–4, mùa hoa cải vàng Vụ Nguyên) và mùa hè–thu (tháng 6–10 tránh nóng Lư Sơn và ngắm phơi nông sản Thu Sái tại Hoàng Lĩnh).',
      bestSeasonEn: 'Spring (March–April for Wuyuan rapeseed blossoms) and summer–autumn (June–October for Mount Lu\'s cool climate and Huangling\'s autumn harvest drying).',
      hsrHubs: [
        { nameZh: '南昌西站', pinyin: 'Nanchangxi', cityVi: 'Nam Xương', cityEn: 'Nanchang' },
        { nameZh: '景德镇北站', pinyin: 'Jingdezhenbei', cityVi: 'Cảnh Đức Trấn', cityEn: 'Jingdezhen' },
        { nameZh: '婺源站', pinyin: 'Wuyuan', cityVi: 'Vụ Nguyên', cityEn: 'Wuyuan' },
        { nameZh: '庐山站', pinyin: 'Lushan', cityVi: 'Cửu Giang (Lư Sơn)', cityEn: 'Jiujiang (Mount Lu)' }
      ],
      zones: [
        {
          id: 'zone-jx-jingdezhen-wuyuan',
          nameVi: 'Cảnh Đức Trấn & Vụ Nguyên — Sứ Đô & Cổ Thôn Huy Phái',
          nameZh: '景德镇瓷都与婺源古村区',
          nameEn: 'Jingdezhen Porcelain Capital & Wuyuan Villages',
          summaryVi: 'Hành lang thủ công mỹ nghệ bậc nhất miền Đông Nam, kết nối lò quan ngự dụng Minh–Thanh với các làng cổ tường đầu ngựa ven núi.',
          summaryEn: 'Premier craft and vernacular corridor uniting Ming–Qing imperial porcelain kilns with white-walled Huizhou-style mountain villages.',
          spots: [
            {
              id: 'spot-jx-imperial-kiln',
              nameVi: 'Bảo tàng Di chỉ Ngự Diêu Cảnh Đức Trấn & Phố Sáng tạo Đào Khê Xuyên',
              nameZh: '景德镇御窑厂遗址博物馆与陶溪川',
              nameEn: 'Jingdezhen Imperial Kiln Museum & Taoxichuan',
              category: '5A / Di tích trọng điểm quốc gia',
              highlightVi: 'Di chỉ lò gốm hoàng gia Minh–Thanh khai quật hàng triệu mảnh sứ thanh hoa, đấu thái cùng khu bảo tồn công nghiệp gốm chuyển đổi thành trung tâm thiết kế đương đại.',
              highlightEn: 'Ming–Qing imperial kiln archaeological site exhibiting reconstructed blue-and-white and doucai porcelains alongside a revitalized ceramic design district.',
              localDishVi: 'Bánh sủi cảo bột gạo hấp (Giảo Tử Ba) & Gà hầm sứ',
              localDishEn: 'Jingdezhen Rice-Flour Dumplings (Jiaozi Ba)'
            },
            {
              id: 'spot-jx-huangling',
              nameVi: 'Cổ thôn Hoàng Lĩnh (Vụ Nguyên)',
              nameZh: '婺源篁岭古村',
              nameEn: 'Huangling Ancient Village (Wuyuan)',
              category: '4A / Di sản làng cổ tiêu biểu',
              highlightVi: 'Làng cổ xây bậc thang bám sườn núi hơn 500 năm tuổi, nổi tiếng với tập tục phơi ớt đỏ, ngô vàng trên sào tre trước mái nhà Huy Phái ("Thu Sái").',
              highlightEn: '500-year-old terraced mountain village famed for "Shaiqiu"—drying red chilies and golden corn on bamboo trays extending from Huizhou-style gables.',
              localDishVi: 'Cá chép đỏ hấp lá sen (Hà Bao Hồng Lý Ngư)',
              localDishEn: 'Steamed Wuyuan Red Carp'
            }
          ]
        },
        {
          id: 'zone-jx-lushan-nanchang',
          nameVi: 'Lư Sơn & Nam Xương — Danh Sơn Văn Nhân & Đằng Vương Các',
          nameZh: '庐山人文名山与南昌滕王阁',
          nameEn: 'Mount Lu & Nanchang Tengwang Pavilion',
          summaryVi: 'Nơi hội tụ Thư viện Bạch Lộc Động của Chu Hy, hơn 1.000 bài thơ cổ và một trong Giang Nam Tam Đại Danh Lâu.',
          summaryEn: 'Home to Zhu Xi\'s White Deer Grotto Academy, centuries of mountain poetry, and one of Jiangnan\'s Three Great Towers.',
          spots: [
            {
              id: 'spot-jx-lushan',
              nameVi: 'Vườn Quốc gia Lư Sơn & Thư viện Bạch Lộc Động',
              nameZh: '庐山风景名胜区与白鹿洞书院',
              nameEn: 'Mount Lu National Park & White Deer Grotto Academy',
              category: 'UNESCO / 5A',
              highlightVi: 'Ngọn núi gắn với Đào Uyên Minh, Lý Bạch, Tô Thức cùng Thư viện Bạch Lộc Động do Chu Hy trùng tu năm 1179 — đứng đầu Tứ Đại Thư Viện thời Tống.',
              highlightEn: 'Mountain celebrated by Tao Yuanming, Li Bai, and Su Shi, anchored by White Deer Grotto Academy restored by Zhu Xi in 1179.',
              localDishVi: 'Gà đá Lư Sơn hầm (Lư Sơn Thạch Kê) & Cá ngân ngư hồ Bà Dương',
              localDishEn: 'Mount Lu Stone Frog Stew and Poyang Lake Whitebait'
            },
            {
              id: 'spot-jx-tengwangge',
              nameVi: 'Đằng Vương Các (Nam Xương)',
              nameZh: '滕王阁',
              nameEn: 'Pavilion of Prince Teng (Tengwangge)',
              category: '5A',
              highlightVi: 'Khởi dựng năm 653 thời Đường bên sông Cám Giang, bất tử hóa qua bài biền văn "Đằng Vương Các Tự" của Vương Bột.',
              highlightEn: 'Originally built in 653 CE overlooking the Gan River and immortalized by Tang poet Wang Bo\'s "Preface to the Pavilion of Prince Teng."',
              localDishVi: 'Bún trộn Nam Xương & Canh tiềm thố sành (Ngõa Quán Thang)',
              localDishEn: 'Nanchang Mixed Rice Noodles and Clay-Pot Slow-Simmered Soup'
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
  var i, j, k;
  for (i = 0; i < hubs.length; i++) { if (hubs[i] && hubs[i].id) seenHub[hubs[i].id] = true; }
  for (i = 0; i < srcList.length; i++) {
    var item = srcList[i];
    if (!item || seenHub[item.id]) continue;
    var fallbackImg = PROV_HERO_IMGS[item.provinceId] || "assets/images/provinces/beijing-temple-of-heaven.jpg";
    var areas = [];
    var zones = item.zones || item.areas || [];
    for (j = 0; j < zones.length; j++) {
      var z = zones[j];
      var mappedSpots = [];
      var rawSpots = z.spots || [];
      for (k = 0; k < rawSpots.length; k++) {
        var sp = rawSpots[k];
        mappedSpots.push({
          id: sp.id,
          rating: sp.category || "5A / UNESCO",
          nameVi: sp.nameVi,
          nameEn: sp.nameEn || sp.nameVi,
          nameZh: sp.nameZh || "",
          img: sp.img || fallbackImg,
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
      gatewayVi: item.hsrHubs || "",
      gatewayEn: item.hsrHubs || "",
      overviewVi: item.overviewVi || "",
      overviewEn: item.overviewEn || "",
      passportNoteVi: "Sử dụng hộ chiếu gốc để mua vé tàu 12306 và đặt vé danh thắng 5A chính quy.",
      passportNoteEn: "Use your original passport for 12306 rail tickets and official 5A attraction entry.",
      areas: areas
    });
    seenHub[item.id] = true;
  }
})();
