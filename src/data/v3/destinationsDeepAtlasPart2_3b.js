(function () {
  'use strict';

  var ATLAS_PART2_3B = [
    {
      id: 'dest-guangdong',
      provinceId: 'prov-guangdong',
      nameVi: 'Quảng Đông',
      nameZh: '广东',
      nameEn: 'Guangdong',
      overviewVi: 'Cửa ngõ thương mại hàng hải phương Nam suốt từ thời Đường–Tống đến kỷ nguyên Cải cách Mở cửa, kết tinh văn hóa Lĩnh Nam (Quảng Phủ, Triều Sán, Khách Gia), ẩm thực Quảng Đông và tháp canh điêu lâu Khai Bình.',
      overviewEn: 'China\'s southern maritime gateway from the Tang–Song eras to Reform and Opening-up, uniting Lingnan cultures (Cantonese, Chaoshan, Hakka), Cantonese culinary heritage, and Kaiping watchtowers.',
      bestSeasonVi: 'Mùa thu–đông (tháng 10–12) trời mát khô, thích hợp khám phá phố cổ Quảng Châu, Triều Châu và các điêu lâu Khai Bình.',
      bestSeasonEn: 'Autumn and winter (October–December) bring mild, dry weather ideal for touring historic Guangzhou, Chaozhou, and Kaiping\'s villages.',
      hsrHubs: [
        { nameZh: '广州南站', pinyin: 'Guangzhounan', cityVi: 'Quảng Châu', cityEn: 'Guangzhou' },
        { nameZh: '深圳北站', pinyin: 'Shenzhenbei', cityVi: 'Thâm Quyến', cityEn: 'Shenzhen' },
        { nameZh: '潮汕站', pinyin: 'Chaoshan', cityVi: 'Triều Châu – Sán Đầu', cityEn: 'Chaozhou–Shantou' },
        { nameZh: '开平南站', pinyin: 'Kaipingnan', cityVi: 'Khai Bình', cityEn: 'Kaiping' }
      ],
      zones: [
        {
          id: 'zone-gd-guangzhou-foshan',
          nameVi: 'Quảng Châu & Phật Sơn — Trung tâm Văn hóa Quảng Phủ',
          nameZh: '广州与佛山广府文化区',
          nameEn: 'Guangzhou & Foshan — Cantonese Heartland',
          summaryVi: 'Hội tụ di sản thương cảng cổ Thập Tam Hành, kiến trúc từ đường điêu khắc Lĩnh Nam và cái nôi của võ thuật Nam Quyền – Việt Kịch.',
          summaryEn: 'Unites historic Thirteen Factories port heritage, ornate Lingnan ancestral hall carvings, and the cradle of Cantonese Opera and Southern martial arts.',
          spots: [
            {
              id: 'spot-gd-chenjiaci',
              nameVi: 'Trần Gia Từ & Đảo Sa Diện (Quảng Châu)',
              nameZh: '陈家祠与沙面岛',
              nameEn: 'Chen Clan Ancestral Hall & Shamian Island',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Trần Gia Từ xây năm 1888–1894 quy tụ đỉnh cao "Tam điêu Nhị tố" (điêu khắc gỗ, đá, gạch và đắp gốm, vôi) của nghệ thuật Lĩnh Nam; đảo Sa Diện lưu giữ khu kiến trúc tô giới thế kỷ XIX.',
              highlightEn: 'Built 1888–1894, Chen Clan Hall presents Lingnan wood, stone, brick, and ceramic relief craftsmanship; nearby Shamian Island preserves 19th-century concession architecture.',
              localDishVi: 'Trà sáng Điểm Tâm Quảng Đông (Tảo Trà: Há cảo, xíu mại, bánh cuốn)',
              localDishEn: 'Cantonese Morning Dim Sum (Yum Cha)'
            },
            {
              id: 'spot-gd-foshan-zumiao',
              nameVi: 'Tổ Miếu Phật Sơn & Lò gốm Nam Phong Cổ Táo',
              nameZh: '佛山祖庙与南风古灶',
              nameEn: 'Foshan Ancestral Temple & Nanfeng Ancient Kiln',
              category: '4A / Di tích trọng điểm quốc gia',
              highlightVi: 'Tổ Miếu có nguồn gốc từ thời Bắc Tống lưu giữ gốm trang trí Thạch Loan; Nam Phong Cổ Táo đốt lò rồng liên tục từ niên hiệu Chính Đức thời Minh (1506).',
              highlightEn: 'Song-origin Ancestral Temple crowned with Shiwan ceramic roof figures, paired with the Nanfeng dragon kiln firing continuously since 1506.',
              localDishVi: 'Sữa chưng hai lớp Thuận Đức (Song Bì Nãi) & Cá lát Thuận Đức',
              localDishEn: 'Shunde Double-Skin Milk Pudding and Raw-Style Poached Fish'
            }
          ]
        },
        {
          id: 'zone-gd-kaiping-chaozhou',
          nameVi: 'Khai Bình & Triều Châu — Điêu Lâu Hoa Kiều & Cổ Thành Triều Sán',
          nameZh: '开平碉楼与潮州古城',
          nameEn: 'Kaiping Diaolou & Chaozhou Ancient City',
          summaryVi: 'Hai biểu tượng nổi bật của cộng đồng Hoa kiều hải ngoại và văn hóa trà Công Phu – kiến trúc cầu phao cổ miền Đông Quảng Đông.',
          summaryEn: 'Highlights overseas Chinese fortified watchtowers alongside eastern Guangdong\'s Gongfu tea and ancient pontoon-bridge city.',
          spots: [
            {
              id: 'spot-gd-kaiping',
              nameVi: 'Điêu Lâu và Thôn Làng Khai Bình',
              nameZh: '开平碉楼与村落',
              nameEn: 'Kaiping Diaolou and Villages',
              category: 'UNESCO / 5A',
              highlightVi: 'Hơn 1.800 tháp nhà nhiều tầng xây bằng bê tông cốt thép đầu thế kỷ XX bởi Hoa kiều hồi hương, kết hợp phòng thủ chống trộm cướp với chi tiết kiến trúc Hy Lạp–La Mã và Lĩnh Nam.',
              highlightEn: 'Over 1,800 multi-story reinforced-concrete watchtowers built in the early 20th century by returning emigrants, blending defensive design with Greco-Roman and Lingnan motifs.',
              localDishVi: 'Cơm niêu lươn Hoàng Thiện (Hoàng Thiện Bảo Tử Phạn)',
              localDishEn: 'Claypot Rice with Swamp Eel (Huangshan Baozifan)'
            },
            {
              id: 'spot-gd-guangjiqiao',
              nameVi: 'Cầu Quảng Tế & Phố Cổ Bài Phường (Triều Châu)',
              nameZh: '潮州广济桥与牌坊街',
              nameEn: 'Guangji Bridge & Paifang Street (Chaozhou)',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Khởi dựng năm 1171 thời Nam Tống, là cây cầu mở đóng bằng 18 thuyền gỗ ghép nối giữa hai dãy trụ đá ("Quá hà sách kiều"), kết hợp 23 cổng chào đá cổ.',
              highlightEn: 'Begun in 1171, one of China\'s Four Great Ancient Bridges, featuring a central removable pontoon section of 18 wooden boats linking stone piers.',
              localDishVi: 'Lẩu bò tươi Triều Sán (Triều Sán Ngưu Nhục Hỏa Oa) & Trà Công Phu Phượng Hoàng Đơn Tùng',
              localDishEn: 'Chaoshan Fresh Beef Hotpot and Fenghuang Dancong Gongfu Tea'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-hainan',
      provinceId: 'prov-hainan',
      nameVi: 'Hải Nam',
      nameZh: '海南',
      nameEn: 'Hainan',
      overviewVi: 'Tỉnh đảo nhiệt đới duy nhất của Trung Quốc, kết hợp đường sắt cao tốc chạy vòng quanh đảo, phố cổ kỵ lâu Hoa kiều tại Hải Khẩu, văn hóa dân tộc Lê–Miêu và hệ sinh thái biển Tam Á.',
      overviewEn: 'China\'s sole tropical island province, connected by a loop high-speed railway linking Haikou\'s overseas-Chinese arcade streets, Li–Miao indigenous heritage, and Sanya\'s coastal bays.',
      bestSeasonVi: 'Mùa khô (tháng 11–tháng 4 năm sau) nắng ấm ổn định, lý tưởng tránh rét mùa đông và tham quan biển đảo.',
      bestSeasonEn: 'Dry season (November–April) provides warm, sunny conditions ideal for winter escapes and coastal exploration.',
      hsrHubs: [
        { nameZh: '海口东站', pinyin: 'Haikoudong', cityVi: 'Hải Khẩu', cityEn: 'Haikou' },
        { nameZh: '三亚站', pinyin: 'Sanya', cityVi: 'Tam Á', cityEn: 'Sanya' },
        { nameZh: '琼海站', pinyin: 'Qionghai', cityVi: 'Quỳnh Hải (Bác Ngao)', cityEn: 'Qionghai (Boao)' }
      ],
      zones: [
        {
          id: 'zone-hi-haikou-wenchang',
          nameVi: 'Hải Khẩu & Văn Xương — Kỵ Lâu Nam Dương & Di tích Tô Đông Pha',
          nameZh: '海口骑楼与文昌文化区',
          nameEn: 'Haikou Qilou & Wenchang Heritage',
          summaryVi: 'Dấu ấn kiến trúc hành lang mái vòm của Hoa kiều trở về từ Đông Nam Á đầu thế kỷ XX và di sản văn nhân bị biếm trích thời Đường–Tống.',
          summaryEn: 'Early-20th-century Nanyang-style shophouse arcades paired with Tang–Song exiled-scholar monuments.',
          spots: [
            {
              id: 'spot-hi-qilou',
              nameVi: 'Phố Cổ Kỵ Lâu Hải Khẩu & Ngũ Công Từ',
              nameZh: '海口骑楼老街与五公祠',
              nameEn: 'Haikou Qilou Old Street & Temple of Five Lords',
              category: 'Khu phố lịch sử văn hóa quốc gia',
              highlightVi: 'Hơn 600 ngôi nhà phố có hành lang che nắng mưa mang phong cách Nam Dương và cụm đền Ngũ Công Từ tưởng niệm năm danh thần Đường–Tống (như Lý Đức Dụ, Lý Cương) bị đày ra đảo.',
              highlightEn: 'Over 600 Nanyang-style covered shophouses alongside the Temple of Five Lords honoring five Tang–Song statesmen exiled to Hainan.',
              localDishVi: 'Cơm gà Văn Xương (Văn Xương Kê Phạn) & Chè Thanh Bổ Lương',
              localDishEn: 'Wenchang Chicken Rice and Qingbuliang Coconut Dessert'
            },
            {
              id: 'spot-hi-dongpo-shuyuan',
              nameVi: 'Thư viện Đông Pha (Đam Châu)',
              nameZh: '东坡书院',
              nameEn: 'Dongpo Academy (Danzhou)',
              category: 'Di tích trọng điểm quốc gia',
              highlightVi: 'Khởi dựng năm 1098 tại nơi Tô Thức cư trú và giảng học suốt ba năm cuối đời bị biếm trích, góp phần khai mở truyền thống Nho học trên đảo.',
              highlightEn: 'Founded in 1098 where Su Shi lived and taught during his three-year exile, nurturing Confucian scholarship on the island.',
              localDishVi: 'Bún Hải Nam (Hải Nam Phấn) & Lẩu gà nước dừa (Gia Tử Kê)',
              localDishEn: 'Hainan Rice Noodles and Coconut Chicken Hotpot'
            }
          ]
        },
        {
          id: 'zone-hi-sanya-wuzhishan',
          nameVi: 'Tam Á & Vùng Núi Trung Tâm — Văn hóa Lê–Miêu & Biển Nhiệt Đới',
          nameZh: '三亚海岸与黎苗雨林区',
          nameEn: 'Sanya Coast & Li–Miao Rainforest',
          summaryVi: 'Kết hợp vịnh biển nhiệt đới phía Nam với không gian rừng mưa và kỹ nghệ dệt thổ cẩm Lê Cẩm được UNESCO bảo vệ.',
          summaryEn: 'Combines southern tropical bays with rainforest valleys preserving UNESCO-listed Li brocade weaving.',
          spots: [
            {
              id: 'spot-hi-nanshan',
              nameVi: 'Khu Văn hóa Du lịch Nam Sơn & Vịnh Á Long',
              nameZh: '三亚南山文化旅游区与亚龙湾',
              nameEn: 'Nanshan Cultural Tourism Zone & Yalong Bay',
              category: '5A',
              highlightVi: 'Tượng Quan Âm Nam Hải trên biển cao 108 m hoàn thành năm 2005 và dải vịnh cát trắng dài 7 km với hệ sinh thái san hô.',
              highlightEn: '108 m Guanyin of Nanshan statue completed in 2005 and Yalong Bay\'s 7 km coral-fringed coastline.',
              localDishVi: 'Lẩu chua Hải Nam (Tảo Phách Thố Hỏa Oa)',
              localDishEn: 'Hainan Fermented Rice-Vinegar Hotpot (Zaopocu)'
            },
            {
              id: 'spot-hi-binglanggu',
              nameVi: 'Thung lũng Văn hóa Lê–Miêu Binh Lang Cốc',
              nameZh: '槟榔谷黎苗文化旅游区',
              nameEn: 'Binglanggu Li and Miao Cultural Heritage Park',
              category: '5A',
              highlightVi: 'Bảo tồn nhà hình thuyền truyền thống, tập tục xăm mặt cổ và kỹ nghệ quay sợi – dệt thổ cẩm Lê Cẩm hơn 3.000 năm tuổi của người Lê.',
              highlightEn: 'Preserves traditional boat-shaped dwellings and the 3,000-year-old Li textile spinning, dyeing, and brocade weaving craft.',
              localDishVi: 'Cơm ống tre dân tộc Lê (Lê Gia Trúc Đồng Phạn)',
              localDishEn: 'Li-Style Bamboo-Tube Sticky Rice'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-guizhou',
      provinceId: 'prov-guizhou',
      nameVi: 'Quý Châu',
      nameZh: '贵州',
      nameEn: 'Guizhou',
      overviewVi: 'Cao nguyên đá vôi karst Tây Nam nổi tiếng với mật độ cầu dây văng cao nhất thế giới, bản làng người Miêu–Đồng nguyên bản, thác Hoàng Quả Thụ và cái nôi của Bạch Tửu Tương hương Mao Đài.',
      overviewEn: 'A southwestern karst plateau famed for record-breaking high bridges, intact Miao and Dong wooden villages, Huangguoshu Waterfall, and Maotai sauce-aroma baijiu.',
      bestSeasonVi: 'Mùa hè–thu (tháng 5–10) khí hậu cao nguyên mát mẻ, thác nước dồi dào và các lễ hội dân tộc Miêu–Đồng diễn ra sôi động.',
      bestSeasonEn: 'May to October offers cool highland temperatures, full waterfall flow, and major Miao and Dong cultural festivals.',
      hsrHubs: [
        { nameZh: '贵阳北站', pinyin: 'Guiyangbei', cityVi: 'Quý Dương', cityEn: 'Guiyang' },
        { nameZh: '凯里南站', pinyin: 'Kailinan', cityVi: 'Khải Lý (Kiềm Đông Nam)', cityEn: 'Kaili (Qiandongnan)' },
        { nameZh: '安顺西站', pinyin: 'Anshunxi', cityVi: 'An Thuận (Hoàng Quả Thụ)', cityEn: 'Anshun (Huangguoshu)' },
        { nameZh: '铜仁站', pinyin: 'Tongren', cityVi: 'Đồng Nhân (Phạm Tịnh Sơn)', cityEn: 'Tongren (Mount Fanjing)' }
      ],
      zones: [
        {
          id: 'zone-gz-qiandongnan',
          nameVi: 'Kiềm Đông Nam — Bản Làng Miêu & Kiến trúc Cổ Lâu Người Đồng',
          nameZh: '黔东南苗寨与侗寨区',
          nameEn: 'Qiandongnan — Miao & Dong Villages',
          summaryVi: 'Không gian sống nguyên bản của nhà sàn Điếu Cước Lâu, Tháp Trống không đinh sắt và hợp xướng Đại Ca người Đồng.',
          summaryEn: 'Living landscape of wooden stilt houses, nail-free Dong Drum Towers, and UNESCO-listed Dong Grand Choir polyphony.',
          spots: [
            {
              id: 'spot-gz-xijiang-zhaoxing',
              nameVi: 'Thiên Hộ Miêu Trại Tây Giang & Đồng Trại Triệu Hưng',
              nameZh: '西江千户苗寨与肇兴侗寨',
              nameEn: 'Xijiang Thousand-Household Miao Village & Zhaoxing Dong Village',
              category: '4A / Di sản làng cổ tiêu biểu',
              highlightVi: 'Quần thể hơn 1.000 nếp nhà sàn gỗ bám sườn núi tại Tây Giang và 5 cụm Tháp Trống – Cầu Phong Vũ (Cầu Mưa Gió) đại diện cho Ngũ Thường Nhân–Nghĩa–Lễ–Trí–Tín tại Triệu Hưng.',
              highlightEn: 'Over 1,000 hillside timber stilt houses in Xijiang and five Drum Tower–Wind-and-Rain Bridge clusters in Zhaoxing.',
              localDishVi: 'Cá nấu canh chua Kiềm Đông Nam (Toan Thang Ngư)',
              localDishEn: 'Guizhou Sour-Broth Fish (Suantang Yu)'
            },
            {
              id: 'spot-gz-zhenyuan',
              nameVi: 'Cổ trấn Trấn Viễn',
              nameZh: '镇远古镇',
              nameEn: 'Zhenyuan Ancient Town',
              category: '5A',
              highlightVi: 'Thị trấn hơn 2.200 năm tuổi nằm uốn lượn hình chữ S bên sông Vũ Dương với quần thể kiến trúc treo Thanh Long Động gắn liền vách đá.',
              highlightEn: '2,200-year-old town along an S-shaped bend of the Wuyang River featuring the cliff-clinging Qinglong Cave temple complex.',
              localDishVi: 'Đậu phụ hoa Trấn Viễn & Cá nướng nước tương ớt',
              localDishEn: 'Zhenyuan Soft Tofu Custard and Chili-Braised River Fish'
            }
          ]
        },
        {
          id: 'zone-gz-karst-fanjing',
          nameVi: 'An Thuận, Lệ Ba & Phạm Tịnh Sơn — Kỳ Quan Karst & Rừng Nguyên Sinh',
          nameZh: '黄果树、荔波喀斯特与梵净山',
          nameEn: 'Huangguoshu, Libo Karst & Mount Fanjing',
          summaryVi: 'Hệ thống thác nước, rừng đá vôi hình nón và đỉnh núi Phật giáo nguyên sinh của dãy Vũ Lăng.',
          summaryEn: 'Dramatic waterfalls, cone-karst forests, and a biodiversity-rich Buddhist peak in the Wuling Range.',
          spots: [
            {
              id: 'spot-gz-huangguoshu',
              nameVi: 'Thác Hoàng Quả Thụ & Địa mạo Karst Lệ Ba (Tiểu Thất Khổng)',
              nameZh: '黄果树瀑布与荔波小七孔',
              nameEn: 'Huangguoshu Waterfall & Libo Xiaoqikong Karst',
              category: 'UNESCO / 5A',
              highlightVi: 'Thác chính cao 77,8 m rộng 101 m có hang Thủy Liêm xuyên sau màn nước (được Từ Hà Khách ghi chép năm 1638) cùng hệ hồ ngọc bích Lệ Ba.',
              highlightEn: '77.8 m tall, 101 m wide waterfall with a natural cave behind the curtain (recorded by Xu Xiake in 1638) paired with Libo\'s emerald karst pools.',
              localDishVi: 'Cuốn bánh bột gạo Quý Dương (Tư Oa Oa)',
              localDishEn: 'Guiyang Fresh Vegetable Wraps (Siwawa)'
            },
            {
              id: 'spot-gz-fanjingshan',
              nameVi: 'Núi Phạm Tịnh Sơn',
              nameZh: '梵净山',
              nameEn: 'Mount Fanjing',
              category: 'UNESCO / 5A',
              highlightVi: 'Đỉnh Hồng Vân Kim Đỉnh cao 2.336 m tách làm hai khối đá nối bằng cầu vòm đá trên mây, là môi trường sống duy nhất của loài voọc mũi hếch xám Quý Châu.',
              highlightEn: '2,336 m Red Cloud Golden Summit split into twin spires linked by a stone bridge, sole habitat of the Guizhou golden snub-nosed monkey.',
              localDishVi: 'Bún thịt bò Hoa Khê (Hoa Khê Ngưu Nhục Phấn)',
              localDishEn: 'Huaxi Spiced Beef Rice Noodles'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-gansu',
      provinceId: 'prov-gansu',
      nameVi: 'Cam Túc',
      nameZh: '甘肃',
      nameEn: 'Gansu',
      overviewVi: 'Hành lang Hà Tây dài hơn 1.000 km — yết hầu của Con đường Tơ lụa nối Trung Nguyên với Tây Vực, quy tụ Mạc Cao Quật Đôn Hoàng, Thạch Quật Mạch Tích Sơn, cực Tây Trường Thành Gia Dụ Quan và địa mạo Đan Hà Trương Dịch.',
      overviewEn: 'Home to the 1,000 km Hexi Corridor—the Silk Road bottleneck linking the Central Plains to Central Asia—spanning Dunhuang\'s Mogao Grottoes, Maijishan, Jiayuguan Pass, and Zhangye Danxia.',
      bestSeasonVi: 'Tháng 5–10 trời khô thoáng, ánh nắng đẹp cho sa mạc Đôn Hoàng và đồi màu Trương Dịch; tránh gió cát mùa xuân sớm và giá rét mùa đông.',
      bestSeasonEn: 'May to October delivers clear skies for Dunhuang dunes and Zhangye\'s rainbow hills, avoiding early spring sandstorms and deep winter cold.',
      hsrHubs: [
        { nameZh: '兰州西站', pinyin: 'Lanzhouxi', cityVi: 'Lan Châu', cityEn: 'Lanzhou' },
        { nameZh: '张掖西站', pinyin: 'Zhangyexi', cityVi: 'Trương Dịch', cityEn: 'Zhangye' },
        { nameZh: '嘉峪关南站', pinyin: 'Jiayuguannan', cityVi: 'Gia Dụ Quan', cityEn: 'Jiayuguan' },
        { nameZh: '敦煌站', pinyin: 'Dunhuang', cityVi: 'Đôn Hoàng', cityEn: 'Dunhuang' }
      ],
      zones: [
        {
          id: 'zone-gs-dunhuang-jiayuguan',
          nameVi: 'Đôn Hoàng & Gia Dụ Quan — Kho Báu Con Đường Tơ Lụa',
          nameZh: '敦煌莫高窟与嘉峪关',
          nameEn: 'Dunhuang & Jiayuguan — Silk Road Gateway',
          summaryVi: 'Hội tụ nghìn năm nghệ thuật Phật giáo xuyên Á–Âu và pháo đài cực Tây của Vạn Lý Trường Thành nhà Minh.',
          summaryEn: 'Unites a millennium of trans-Eurasian Buddhist art with the westernmost fortress of the Ming Great Wall.',
          spots: [
            {
              id: 'spot-gs-mogao',
              nameVi: 'Hang Đá Mạc Cao Quật & Núi Cát Minh Sa – Hồ Nguyệt Nha',
              nameZh: '敦煌莫高窟与鸣沙山月牙泉',
              nameEn: 'Mogao Caves & Mingsha Mountain–Crescent Spring',
              category: 'UNESCO / 5A',
              highlightVi: '735 hang động khắc từ năm 366 đến thời Nguyên với 45.000 m² bích họa và Hang Tạng Kinh (Hang 17) phát hiện năm 1900, liền kề ốc đảo Nguyệt Nha giữa sa mạc.',
              highlightEn: '735 caves spanning 366 CE to the Yuan with 45,000 sq m of murals and the Library Cave (Cave 17), paired with Crescent Spring oasis.',
              localDishVi: 'Mì thịt lừa Đôn Hoàng (Lư Nhục Hoàng Miện) & Nước mơ Lý Quảng',
              localDishEn: 'Dunhuang Yellow Noodles with Braised Meat and Liguang Apricot Drink'
            },
            {
              id: 'spot-gs-jiayuguan',
              nameVi: 'Thành cổ Gia Dụ Quan',
              nameZh: '嘉峪关关城',
              nameEn: 'Jiayuguan Fortress',
              category: 'UNESCO / 5A',
              highlightVi: 'Khởi xây năm 1372 thời Minh Thái Tổ, gồm nội thành, ngoại thành và hào bảo vệ ba lớp khống chế hẻm núi giữa dãy Kỳ Liên và núi Hắc Sơn.',
              highlightEn: 'Begun in 1372 under Ming founder Zhu Yuanzhang, a triple-walled bastion guarding the strategic pass between the Qilian and Heishan ranges.',
              localDishVi: 'Thịt cừu nướng Gia Dụ Quan (Gia Dụ Quan Khảo Nhục)',
              localDishEn: 'Jiayuguan Charcoal-Grilled Lamb Skewers'
            }
          ]
        },
        {
          id: 'zone-gs-zhangye-tianshui',
          nameVi: 'Trương Dịch, Lan Châu & Thiên Thủy — Đan Hà & Mạch Tích Sơn',
          nameZh: '张掖丹霞与天水麦积山',
          nameEn: 'Zhangye Danxia & Tianshui Maijishan',
          summaryVi: 'Trải dọc từ kỳ quan địa chất tầng đá sa thạch ngũ sắc đến một trong Tứ Đại Thạch Quật nổi tiếng về tượng đất nung.',
          summaryEn: 'Stretches from polychrome sandstone ridges to one of China\'s Four Great Grottoes famed for clay sculpture.',
          spots: [
            {
              id: 'spot-gs-zhangye-danxia',
              nameVi: 'Công viên Địa chất Toàn cầu Đan Hà Trương Dịch',
              nameZh: '张掖七彩丹霞景区',
              nameEn: 'Zhangye Colorful Danxia Geopark',
              category: 'UNESCO Geopark / 5A',
              highlightVi: 'Các lớp sa thạch đỏ, vàng, cam bồi tụ từ kỷ Phấn Trắng bị kiến tạo Himalaya nâng lên tạo nên dải đồi màu sống động nhất dưới nắng hoàng hôn.',
              highlightEn: 'Cretaceous mineral-layered sandstone formations uplifted by Himalayan tectonics into vivid striated ridges.',
              localDishVi: 'Mì kéo tay thịt bò Lan Châu (Lan Châu Ngưu Nhục Lạp Miện)',
              localDishEn: 'Lanzhou Hand-Pulled Beef Noodles'
            },
            {
              id: 'spot-gs-maijishan',
              nameVi: 'Thạch Quật Mạch Tích Sơn (Thiên Thủy)',
              nameZh: '麦积山石窟',
              nameEn: 'Maijishan Grottoes (Tianshui)',
              category: 'UNESCO / 5A',
              highlightVi: '221 hang động và hơn 10.600 pho tượng đất nung tô màu đục trên vách núi hình đụn rơm thẳng đứng, mệnh danh "Bảo tàng điêu khắc phương Đông".',
              highlightEn: '221 caves and over 10,600 painted clay sculptures carved into a vertical haystack-shaped cliff, dubbed the "Museum of Oriental Sculpture."',
              localDishVi: 'Thịt cừu luộc cầm tay (Thủ Trảo Dương Nhục) & Bột lọc Thiên Thủy',
              localDishEn: 'Hand-Pulled Boiled Mutton (Shouzhua Yangrou) and Tianshui Guagua'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-qinghai',
      provinceId: 'prov-qinghai',
      nameVi: 'Thanh Hải',
      nameZh: '青海',
      nameEn: 'Qinghai',
      overviewVi: 'Cửa ngõ Đông Bắc cao nguyên Thanh–Tạng ("Tam Giang Nguyên" — nơi khởi nguồn Trường Giang, Hoàng Hà và Lan Thương/Mê Kông), gắn liền với hồ nước mặn Thanh Hải, hồ muối Trà Khải và chùa Tháp Nhĩ.',
      overviewEn: 'Northeastern gateway to the Qinghai–Tibet Plateau ("Source of Three Rivers": Yangtze, Yellow, and Mekong), highlighted by Qinghai Lake, Chaka Salt Lake, and Kumbum Monastery.',
      bestSeasonVi: 'Tháng 6–9 ấm áp nhất trong năm; tháng 7–8 hoa cải dầu nở vàng rực quanh bờ hồ Thanh Hải.',
      bestSeasonEn: 'June to September is the warmest window, with golden rapeseed fields blooming around Qinghai Lake in July and August.',
      hsrHubs: [
        { nameZh: '西宁站', pinyin: 'Xining', cityVi: 'Tây Ninh', cityEn: 'Xining' },
        { nameZh: '门源站', pinyin: 'Menyuan', cityVi: 'Môn Nguyên', cityEn: 'Menyuan' }
      ],
      zones: [
        {
          id: 'zone-qh-xining-tar',
          nameVi: 'Tây Ninh — Tháp Nhĩ Tự & Hành lang Hán–Tạng–Hồi',
          nameZh: '西宁塔尔寺与多民族文化区',
          nameEn: 'Xining — Kumbum Monastery & Multi-Ethnic Crossroads',
          summaryVi: 'Điểm giao thoa của Phật giáo Tây Tạng phái Hoàng Mạo (Cách Lỗ), văn hóa Hồi giáo Tây Bắc và tuyến đường sắt Thanh–Tạng.',
          summaryEn: 'Crossroads of Gelugpa Tibetan Buddhism, northwestern Hui culture, and the Qinghai–Tibet Railway.',
          spots: [
            {
              id: 'spot-qh-taersi',
              nameVi: 'Chùa Tháp Nhĩ (Kumbum Monastery)',
              nameZh: '塔尔寺',
              nameEn: 'Kumbum Monastery (Ta\'er Temple)',
              category: '5A',
              highlightVi: 'Một trong sáu đại tự viện phái Cách Lỗ, khởi dựng năm 1560 tại nơi sinh Đại sư Tông Khách Ba, nổi tiếng với ba nghệ thuật: hoa bơ (Tô Du Hoa), bích họa và thêu đắp nổi.',
              highlightEn: 'One of the six great Gelugpa monasteries, begun in 1560 at Tsongkhapa\'s birthplace, celebrated for butter sculptures, murals, and barbola embroidery.',
              localDishVi: 'Sữa chua bò Yak Tây Ninh (Lão Toan Nãi) & Thịt cừu nướng tảng',
              localDishEn: 'Xining Yak-Milk Yogurt and Roasted Highland Lamb'
            },
            {
              id: 'spot-qh-dongguan',
              nameVi: 'Thanh Chân Đại Tự Đông Quan & Bảo tàng Thanh Hải',
              nameZh: '东关清真大寺与青海省博物馆',
              nameEn: 'Dongguan Great Mosque & Qinghai Provincial Museum',
              category: 'Di tích lịch sử văn hóa trọng điểm',
              highlightVi: 'Nhà thờ Hồi giáo xây từ năm 1380 thời Minh kết hợp kiến trúc điện đường gỗ Trung Hoa với họa tiết Hồi giáo, cùng bộ sưu tập gốm vẽ văn hóa Mã Gia Diêu.',
              highlightEn: '1380 Ming-era mosque fusing Chinese timber hall architecture with Islamic ornament, alongside Majiayao painted pottery at the provincial museum.',
              localDishVi: 'Bánh bột mì chiên nhân thịt cừu & Lẩu đất Thanh Hải (Thanh Hải Thổ Hỏa Oa)',
              localDishEn: 'Qinghai Copper-Pot Highland Hotpot (Tuhuoguo)'
            }
          ]
        },
        {
          id: 'zone-qh-lake-chaka',
          nameVi: 'Hồ Thanh Hải & Hồ Muối Trà Khải — Gương Trời Cao Nguyên',
          nameZh: '青海湖与茶卡盐湖区',
          nameEn: 'Qinghai Lake & Chaka Salt Lake',
          summaryVi: 'Hồ nước mặn nội địa lớn nhất Trung Quốc ở độ cao trên 3.100 m và cánh đồng muối phẳng phản chiếu bầu trời.',
          summaryEn: 'China\'s largest inland saltwater lake above 3,100 m elevation paired with mirror-like salt flats.',
          spots: [
            {
              id: 'spot-qh-lake',
              nameVi: 'Hồ Thanh Hải (Khu Nhị Lang Kiếm & Đảo Tiên Nữ Loan)',
              nameZh: '青海湖景区',
              nameEn: 'Qinghai Lake Scenic Area',
              category: '5A',
              highlightVi: 'Diện tích mặt nước hơn 4.500 km² bao quanh bởi thảo nguyên bò Yak và núi tuyết Nhật Nguyệt Sơn — nơi Công chúa Văn Thành dừng chân trên đường vào Tây Tạng năm 641.',
              highlightEn: 'Over 4,500 sq km alpine lake bordered by yak pastures and Riyue Pass, where Princess Wencheng crossed toward Tibet in 641 CE.',
              localDishVi: 'Thịt bò Yak hầm củ cải & Trà bơ Tây Tạng (Tô Du Trà)',
              localDishEn: 'Braised Yak Meat and Tibetan Butter Tea'
            },
            {
              id: 'spot-qh-chaka',
              nameVi: 'Hồ Muối Trà Khải',
              nameZh: '茶卡盐湖',
              nameEn: 'Chaka Salt Lake',
              category: '4A / Kỳ quan địa chất',
              highlightVi: 'Bồn địa muối tự nhiên thuộc bồn địa Sài Đạt Mộc có lịch sử khai thác muối hơn 3.000 năm, tạo hiệu ứng mặt gương khi mực nước mỏng tĩnh lặng.',
              highlightEn: 'Qaidam Basin salt flat with over 3,000 years of salt harvesting, producing a sky-mirror reflection under calm shallow brine.',
              localDishVi: 'Cơm trộn lúa mạch Thanh Khoa (Thanh Khoa Tản Ba)',
              localDishEn: 'Highland Barley Tsampa and Roasted Mutton'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-liaoning',
      provinceId: 'prov-liaoning',
      nameVi: 'Liêu Ninh',
      nameZh: '辽宁',
      nameEn: 'Liaoning',
      overviewVi: 'Cửa ngõ vùng Đông Bắc và cái nôi lập quốc của triều Thanh (Hậu Kim), gắn liền với Cố Cung Thẩm Dương, Lăng Thanh Chiêu–Thanh Phúc và thành phố cảng Đại Liên.',
      overviewEn: 'Gateway to Northeast China and early stronghold of the Manchu Qing dynasty, featuring Shenyang Imperial Palace, early Qing mausoleums, and the port city of Dalian.',
      bestSeasonVi: 'Mùa hè–thu (tháng 5–10) mát mẻ dễ chịu tại Đại Liên và Thẩm Dương; tháng 10 nổi bật bãi biển cỏ đỏ Bàn Cẩm.',
      bestSeasonEn: 'May to October offers pleasant coastal weather in Dalian and Shenyang, culminating in Panjin\'s crimson Suaeda wetlands in October.',
      hsrHubs: [
        { nameZh: '沈阳北站', pinyin: 'Shenyangbei', cityVi: 'Thẩm Dương', cityEn: 'Shenyang' },
        { nameZh: '大连北站', pinyin: 'Dalianbei', cityVi: 'Đại Liên', cityEn: 'Dalian' },
        { nameZh: '丹东站', pinyin: 'Dandong', cityVi: 'Đan Đông', cityEn: 'Dandong' }
      ],
      zones: [
        {
          id: 'zone-ln-shenyang',
          nameVi: 'Thẩm Dương — Kinh Đô Tiền Thanh (Thịnh Kinh)',
          nameZh: '沈阳清初盛京遗产区',
          nameEn: 'Shenyang — Early Qing Capital Heritage',
          summaryVi: 'Nơi Nỗ Nhĩ Cáp Xích và Hoàng Thái Cực định đô trước khi nhập quan năm 1644, giao thoa kiến trúc cung đình Mãn–Mông–Hán.',
          summaryEn: 'Pre-1644 Manchu capital of Nurhaci and Hong Taiji, blending Manchu, Mongol, and Han palace architecture.',
          spots: [
            {
              id: 'spot-ln-gugong',
              nameVi: 'Cố Cung Thẩm Dương',
              nameZh: '沈阳故宫',
              nameEn: 'Shenyang Imperial Palace',
              category: 'UNESCO / 4A',
              highlightVi: 'Khởi xây năm 1625, là cung điện hoàng gia duy nhất còn nguyên vẹn ngoài Tử Cấm Thành Bắc Kinh, gắn liền với Đại Chính Điện hình bát giác phỏng theo lều trướng Bát Kỳ.',
              highlightEn: 'Begun in 1625, China\'s only intact imperial palace outside Beijing, centered on the octagonal Dazheng Hall inspired by Eight Banners tents.',
              localDishVi: 'Thịt heo chiên giòn sốt chua ngọt (Quách Bao Nhục) & Bánh bao Lão Biên',
              localDishEn: 'Sweet-and-Sour Crispy Pork (Guobaorou) and Laobian Dumplings'
            },
            {
              id: 'spot-ln-zhaoling',
              nameVi: 'Thanh Chiêu Lăng (Bắc Lăng) & Bảo tàng Tỉnh Liêu Ninh',
              nameZh: '清昭陵与辽宁省博物馆',
              nameEn: 'Zhaoling Tomb & Liaoning Provincial Museum',
              category: 'UNESCO / Bảo tàng hạng Nhất quốc gia',
              highlightVi: 'Lăng mộ Hoàng Thái Cực (1643–1651) và Bảo tàng Liêu Ninh lưu giữ nhiều kiệt tác thư họa cổ như "Lạc Thần Phú Đồ" (bản Tống), "Trâm Hoa Sĩ Nữ Đồ".',
              highlightEn: 'Mausoleum of Hong Taiji (1643–1651) paired with Liaoning Provincial Museum\'s famed Song–Tang paintings and calligraphy.',
              localDishVi: 'Bánh kẹp thịt xông khói Lý Liên Quý (Huân Nhục Đại Bính)',
              localDishEn: 'Shenyang Smoked Pork Pancake (Xunrou Dabing)'
            }
          ]
        },
        {
          id: 'zone-ln-dalian-panjin',
          nameVi: 'Đại Liên & Bàn Cẩm — Hải Cảng Bán Đảo Liêu Đông & Bãi Biển Đỏ',
          nameZh: '大连海港与盘锦红海滩',
          nameEn: 'Dalian Port & Panjin Red Beach',
          summaryVi: 'Thành phố cảng không đóng băng với dấu ấn kiến trúc đầu thế kỷ XX kết hợp vùng đất ngập nước cửa sông Liêu Hà.',
          summaryEn: 'Ice-free port city with early-20th-century urban squares alongside the Liao River delta wetlands.',
          spots: [
            {
              id: 'spot-ln-dalian-xinghai',
              nameVi: 'Quảng trường Tinh Hải & Đường ven biển Tân Hải Lộ (Đại Liên)',
              nameZh: '大连星海广场与滨海路',
              nameEn: 'Xinghai Square & Binhai Coastal Road (Dalian)',
              category: '4A / Di sản đô thị cảng',
              highlightVi: 'Tuyến đường ven biển dài hơn 30 km nối cầu vượt biển Tinh Hải với các quảng trường quy hoạch hình sao và tàu điện cổ lưu hành từ năm 1909.',
              highlightEn: '30+ km scenic coastal drive linking Xinghai Bay Bridge with radial historic squares and heritage trams running since 1909.',
              localDishVi: 'Hải sâm hầm hành (Thông Thiêu Hải Sâm) & Bánh bao nhân nhím biển',
              localDishEn: 'Braised Sea Cucumber with Scallions and Sea Urchin Dumplings'
            },
            {
              id: 'spot-ln-panjin',
              nameVi: 'Khu Bảo tồn Bãi Biển Đỏ Bàn Cẩm',
              nameZh: '盘锦红海滩国家风景廊道',
              nameEn: 'Panjin Red Beach National Scenic Corridor',
              category: '5A',
              highlightVi: 'Thảm thực vật cỏ kiềm Suaeda salsa chuyển sắc đỏ thẫm mỗi độ tháng 9–10 trên vùng đất ngập nước, nơi trú đông của sếu đầu đỏ quý hiếm.',
              highlightEn: 'Alkaline coastal wetlands turning crimson every September–October with Suaeda salsa, providing a stopover for red-crowned cranes.',
              localDishVi: 'Cua đồng Bàn Cẩm hấp (Bàn Cẩm Hà Giải)',
              localDishEn: 'Steamed Panjin River Crab'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-jilin',
      provinceId: 'prov-jilin',
      nameVi: 'Cát Lâm',
      nameZh: '吉林',
      nameEn: 'Jilin',
      overviewVi: 'Miền đất rừng núi và băng tuyết vùng Đông Bắc, nổi tiếng với núi lửa Trường Bạch Sơn (hồ Thiên Trì), hiện tượng sương giá Đảo Vụ Tùng bên sông Tùng Hoa và di sản công nghiệp – lịch sử cận đại tại Trường Xuân.',
      overviewEn: 'A forested northeastern province anchored by volcanic Changbai Mountain (Heaven Lake), Songhua River rime-frost islands, and Changchun\'s modern industrial and historical heritage.',
      bestSeasonVi: 'Mùa hè (tháng 7–8) ngắm hồ Thiên Trì không đóng băng và mùa đông (tháng 12–2) trải nghiệm Đảo Vụ Tùng, trượt tuyết Trường Bạch.',
      bestSeasonEn: 'Summer (July–August) for ice-free views of Heaven Lake, and winter (December–February) for Songhua rime frost and alpine snow.',
      hsrHubs: [
        { nameZh: '长春站', pinyin: 'Changchun', cityVi: 'Trường Xuân', cityEn: 'Changchun' },
        { nameZh: '吉林站', pinyin: 'Jilin', cityVi: 'Cát Lâm', cityEn: 'Jilin City' },
        { nameZh: '长白山站', pinyin: 'Changbaishan', cityVi: 'Trường Bạch Sơn', cityEn: 'Changbai Mountain' },
        { nameZh: '延吉西站', pinyin: 'Yanjixi', cityVi: 'Diên Cát (Diên Biên)', cityEn: 'Yanji (Yanbian)' }
      ],
      zones: [
        {
          id: 'zone-jl-changbaishan-yanbian',
          nameVi: 'Trường Bạch Sơn & Diên Biên — Hồ Miệng Núi Lửa & Văn hóa Triều Tiên',
          nameZh: '长白山天池与延边朝鲜族区',
          nameEn: 'Changbai Mountain & Yanbian Korean Prefecture',
          summaryVi: 'Núi thiêng nguồn gốc của người Mãn cùng khu tự trị dân tộc Triều Tiên sôi động bậc nhất Trung Quốc.',
          summaryEn: 'Sacred volcanic peak of Manchu tradition paired with China\'s active Yanbian Korean Autonomous Prefecture.',
          spots: [
            {
              id: 'spot-jl-changbaishan',
              nameVi: 'Khu Bảo tồn Thiên nhiên Trường Bạch Sơn & Hồ Thiên Trì',
              nameZh: '长白山景区与天池',
              nameEn: 'Changbai Mountain & Heaven Lake (Tianchi)',
              category: 'UNESCO Geopark / 5A',
              highlightVi: 'Hồ miệng núi lửa sâu nhất Trung Quốc (độ sâu tối đa 373 m) ở cao độ 2.189 m, khởi nguồn sông Tùng Hoa, Áp Lục và Đồ Môn cùng suối nước nóng Tụ Long.',
              highlightEn: 'China\'s deepest crater lake (373 m maximum depth) at 2,189 m elevation, source of the Songhua, Yalu, and Tumen rivers alongside volcanic hot springs.',
              localDishVi: 'Trứng luộc suối khoáng nóng & Gà hầm nhân sâm Trường Bạch',
              localDishEn: 'Hot-Spring Boiled Eggs and Changbai Ginseng Chicken Soup'
            },
            {
              id: 'spot-jl-yanji',
              nameVi: 'Vườn Văn hóa Dân tộc Triều Tiên Diên Cát & Bảo tàng Diên Biên',
              nameZh: '中国朝鲜族民俗园与延边博物馆',
              nameEn: 'Chinese Korean Folk Park & Yanbian Museum',
              category: 'Di sản văn hóa dân tộc tiêu biểu',
              highlightVi: 'Lưu giữ kiến trúc nhà ngói cong dân tộc Triều Tiên, thư tịch song ngữ Trung–Triều và đời sống chợ nổi buổi sáng Diên Cát.',
              highlightEn: 'Preserves curved-tile Korean vernacular dwellings, bilingual heritage, and Yanji\'s lively riverside morning market.',
              localDishVi: 'Mì lạnh Diên Cát (Diên Cát Lãnh Miện) & Canh sâm gà (Sâm Kê Thang)',
              localDishEn: 'Yanji Cold Buckwheat Noodles and Ginseng Chicken Soup'
            }
          ]
        },
        {
          id: 'zone-jl-changchun-jilin',
          nameVi: 'Trường Xuân & Thành phố Cát Lâm — Di tích Cận đại & Đảo Vụ Tùng',
          nameZh: '长春历史建筑与吉林雾凇岛',
          nameEn: 'Changchun Heritage & Jilin Rime Island',
          summaryVi: 'Chứng tích lịch sử nửa đầu thế kỷ XX tại Trường Xuân kết hợp kỳ quan băng giá tự nhiên trên sông Tùng Hoa.',
          summaryEn: 'Early-20th-century historical museums in Changchun paired with natural winter rime frost along the Songhua River.',
          spots: [
            {
              id: 'spot-jl-puppet-palace',
              nameVi: 'Bảo tàng Cung điện Ngụy Mãn Châu Quốc (Trường Xuân)',
              nameZh: '伪满皇宫博物院',
              nameEn: 'Museum of the Imperial Palace of Manchukuo',
              category: '5A',
              highlightVi: 'Khu dinh thự nơi Phổ Nghi sinh sống giai đoạn 1932–1945, hiện là bảo tàng lịch sử cận đại quy mô lớn giáo dục về chiến tranh kháng Nhật.',
              highlightEn: '1932–1945 residence of Puyi, preserved as a major modern-history museum documenting Northeast China\'s wartime past.',
              localDishVi: 'Cốt lết chiên xù & Nồi sắt hầm cá sông Tùng Hoa (Thiết Quách Độn)',
              localDishEn: 'Iron-Pot Braised Songhua River Fish (Tieguodun)'
            },
            {
              id: 'spot-jl-wusongdao',
              nameVi: 'Đảo Vụ Tùng (Sông Tùng Hoa)',
              nameZh: '吉林雾凇岛',
              nameEn: 'Wusong (Rime Frost) Island',
              category: 'Thắng cảnh tự nhiên mùa đông',
              highlightVi: 'Nhờ nước ấm xả từ nhà máy thủy điện Phong Mãn khiến đoạn sông không đóng băng dưới âm 20°C, hơi nước ngưng tụ tạo băng tuyết trắng xóa phủ kín hàng liễu ven sông.',
              highlightEn: 'Unfrozen river water downstream of Fengman Dam meets sub-minus-20°C air, coating riverside willows in dense crystalline rime frost.',
              localDishVi: 'Lẩu thịt trắng cải chua Đông Bắc (Toan Thái Bạch Nhục)',
              localDishEn: 'Northeastern Pickled-Cabbage and Pork Belly Hotpot'
            }
          ]
        }
      ]
    },
    {
      id: 'dest-inner-mongolia',
      provinceId: 'prov-inner-mongolia',
      nameVi: 'Nội Mông',
      nameZh: '内蒙古',
      nameEn: 'Inner Mongolia',
      overviewVi: 'Khu tự trị trải dài hơn 2.400 km từ Đông sang Tây dọc biên giới phía Bắc, chuyển tiếp mượt mà từ thảo nguyên Hô Luân Bối Nhĩ xanh thẳm đến sa mạc Vang Sa Loan và di sản du mục Mông Cổ.',
      overviewEn: 'An autonomous region spanning over 2,400 km east to west along China\'s northern frontier, transitioning from the lush Hulunbuir grasslands to the Xiangshawan dunes and Mongol nomadic heritage.',
      bestSeasonVi: 'Mùa hè (tháng 6–8) thảo nguyên xanh mướt và mùa lễ hội Naadam; tháng 9 lá rừng bạch dương Đại Hưng An Lĩnh chuyển vàng.',
      bestSeasonEn: 'June to August brings peak green grasslands and Naadam festivals; September turns the Greater Khingan birch forests golden.',
      hsrHubs: [
        { nameZh: '呼和浩特东站', pinyin: 'Huhehaotedong', cityVi: 'Hô Hòa Hạo Đặc (Hohhot)', cityEn: 'Hohhot' },
        { nameZh: '包头站', pinyin: 'Baotou', cityVi: 'Bao Đầu', cityEn: 'Baotou' },
        { nameZh: '乌兰察布站', pinyin: 'Wulanchabu', cityVi: 'Ô Lan Sát Bố', cityEn: 'Ulanqab' }
      ],
      zones: [
        {
          id: 'zone-nm-hohhot-ordos',
          nameVi: 'Hô Hòa Hạo Đặc & Ngạc Nhĩ Đa Tư — Văn hóa Thảo Nguyên & Sa Mạc',
          nameZh: '呼和浩特与鄂尔多斯文化区',
          nameEn: 'Hohhot & Ordos — Steppe & Desert Heritage',
          summaryVi: 'Hành lang kết nối chùa Phật giáo Mông–Tạng cổ nhất nội đô Hohhot với lăng tưởng niệm Thành Cát Tư Hãn và sa mạc Khố Bố Tề.',
          summaryEn: 'Corridor linking Hohhot\'s oldest Gelugpa monastery with the Mausoleum of Genghis Khan and the Kubuqi Desert.',
          spots: [
            {
              id: 'spot-nm-dazhao-museum',
              nameVi: 'Chùa Đại Chiêu & Bảo tàng Khu Tự trị Nội Mông',
              nameZh: '大召寺与内蒙古博物院',
              nameEn: 'Dazhao Temple & Inner Mongolia Museum',
              category: 'Bảo tàng hạng Nhất quốc gia / 4A',
              highlightVi: 'Chùa Đại Chiêu xây năm 1579 bởi A Lặc Thản Hãn lưu giữ tượng Phật Thích Ca bằng bạc nguyên khối; Bảo tàng trưng bày cổ vật Hung Nô, Khiết Đan (Liêu) và Đế quốc Mông Cổ.',
              highlightEn: 'Founded in 1579 by Altan Khan housing a solid silver Buddha statue; the museum presents Xiongnu, Khitan Liao, and Mongol Empire artifacts.',
              localDishVi: 'Bánh bao nhân thịt cừu (Thao Mại) & Trà sữa mặn Mông Cổ',
              localDishEn: 'Hohhot Lamb Shaomai Dumplings and Salted Mongol Milk Tea'
            },
            {
              id: 'spot-nm-xiangshawan-genghis',
              nameVi: 'Sa mạc Vang Sa Loan & Lăng Tưởng niệm Thành Cát Tư Hãn',
              nameZh: '响沙湾与成吉思汗陵旅游区',
              nameEn: 'Xiangshawan Desert & Mausoleum of Genghis Khan',
              category: '5A',
              highlightVi: 'Cồn cát khô phát ra tiếng vang trầm khi trượt trên rìa sa mạc Khố Bố Tề cùng quần thể đền thờ ba mái vòm lều Mông Cổ bảo tồn nghi lễ tế tự cổ truyền của bộ tộc Đạt Nhĩ Hỗ Đặc.',
              highlightEn: 'Resonant singing dunes on the edge of the Kubuqi Desert paired with the yurt-domed ceremonial sanctuary maintained by the Darhad guardians.',
              localDishVi: 'Thịt cừu luộc thảo nguyên (Thủ Bả Nhục) & Phô mai sữa khô',
              localDishEn: 'Steppe Boiled Mutton (Shouba Rou) and Dried Milk Curd'
            }
          ]
        },
        {
          id: 'zone-nm-hulunbuir',
          nameVi: 'Hô Luân Bối Nhĩ — Thảo Nguyên Rộng Lớn & Rừng Bạch Dương',
          nameZh: '呼伦贝尔大草原与额尔古纳湿地',
          nameEn: 'Hulunbuir Grasslands & Erguna Wetlands',
          summaryVi: 'Vùng đồng cỏ tự nhiên lớn bậc nhất Á–Âu giáp sông Ngạch Nhĩ Cổ Nạp và cộng đồng chăn tuần lộc Ngạc Ôn Khắc.',
          summaryEn: 'One of Eurasia\'s grandest intact steppe ecosystems bordering the Argun River wetlands and Evenki reindeer herders.',
          spots: [
            {
              id: 'spot-nm-morigele',
              nameVi: 'Thảo nguyên Mạc Nhật Cách Lặc & Đất ngập nước Ngạch Nhĩ Cổ Nạp',
              nameZh: '莫日格勒河草原与额尔古纳湿地',
              nameEn: 'Morigele River Steppe & Erguna Wetland',
              category: '5A / 4A',
              highlightVi: 'Dòng sông uốn khúc dày đặc được nhà văn Lão Xá gọi là "Thiên hạ đệ nhất khúc thủy" chảy qua đồng cỏ nguyên sinh đến vùng đất ngập nước lớn nhất châu Á.',
              highlightEn: 'Intricately meandering river praised by Lao She as the "First Winding River Under Heaven," flowing toward Asia\'s largest wetland.',
              localDishVi: 'Thịt cừu nướng nguyên con (Khảo Toàn Dương) & Lẩu đồng thịt cừu',
              localDishEn: 'Whole Roasted Grassland Lamb and Copper-Pot Mutton Hotpot'
            },
            {
              id: 'spot-nm-manzhouli',
              nameVi: 'Thành phố Cửa khẩu Mãn Châu Lý & Hồ Hô Luân',
              nameZh: '满洲里国门与呼伦湖',
              nameEn: 'Manzhouli Border Gate & Hulun Lake',
              category: '5A',
              highlightVi: 'Cửa khẩu đường sắt xuyên Á–Âu lớn nhất giữa Trung Quốc và Nga từ tuyến Đường sắt Đông Thanh (1901), giao thoa văn hóa Trung–Nga–Mông.',
              highlightEn: 'China\'s largest rail port to Russia since the 1901 Chinese Eastern Railway, blending Chinese, Russian, and Mongol heritage.',
              localDishVi: 'Bánh mì nướng Nga – Thịt bò hầm thảo nguyên',
              localDishEn: 'Borderland Russian Rye Bread and Steppe Beef Stew'
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
