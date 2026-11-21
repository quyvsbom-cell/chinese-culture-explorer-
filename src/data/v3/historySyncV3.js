(function () {
  'use strict';

  var PARALLEL_TIMELINE = [
    {
      eraId: 'xia-shang-zhou',
      eraNameVi: 'Hạ – Thương – Tây Chu',
      eraNameZh: '夏商西周',
      eraNameEn: 'Xia, Shang, and Western Zhou',
      periodSpan: 'c. 2070–771 BCE',
      chinaMilestonesVi: [
        'Khoảng 1900–1600 TCN: Văn hóa Nhị Lý Đầu (Hà Nam) định hình đô thành và lễ khí thanh đồng sơ kỳ.',
        'Khoảng 1300 TCN: Vua Bàn Canh dời đô về Ân (An Dương), hình thành kho lưu trữ Giáp Cốt Văn.',
        '1046 TCN: Trận Mục Dã lập nên nhà Tây Chu; Chu Công Đán chế tác hệ thống Phân phong – Tông pháp – Lễ nhạc.'
      ],
      chinaMilestonesEn: [
        'c. 1900–1600 BCE: Erlitou culture (Henan) establishes early palatial urbanism and ritual bronze metallurgy.',
        'c. 1300 BCE: King Pan Geng relocates the Shang capital to Yin (Anyang), initiating the oracle bone archive.',
        '1046 BCE: Battle of Muye founds the Western Zhou; the Duke of Zhou codifies Enfeoffment, Lineage Law, and Ritual–Music.'
      ],
      vietnamParallelVi: 'Thời đại Hùng Vương dựng nước Văn Lang gắn với các giai đoạn văn hóa Phùng Nguyên – Đồng Đậu – Gò Mun tại lưu vực sông Hồng.',
      vietnamParallelEn: 'Era of the Hung Kings and Van Lang polity, aligned with the Phung Nguyen, Dong Dau, and Go Mun Bronze Age cultures in the Red River basin.',
      worldParallelVi: 'Trung và Tân Vương quốc Ai Cập, Bộ luật Hammurabi tại Babylon (khoảng 1750 TCN), văn minh Mycenae ở Hy Lạp và sự suy tàn cuối Thời đại Đồ đồng Địa Trung Hải.',
      worldParallelEn: 'Middle and New Kingdom Egypt, Code of Hammurabi in Babylon (c. 1750 BCE), Mycenaean Greece, and the Late Bronze Age Collapse in the Mediterranean.'
    },
    {
      eraId: 'spring-autumn-warring-states',
      eraNameVi: 'Xuân Thu – Chiến Quốc',
      eraNameZh: '春秋战国',
      eraNameEn: 'Spring and Autumn & Warring States',
      periodSpan: '770–221 BCE',
      chinaMilestonesVi: [
        '770 TCN: Chu Bình Vương dời đô sang Lạc Ấp; Bách Gia Chư Tử (Nho, Đạo, Mặc, Pháp) nở rộ.',
        '356 TCN: Thương Ưởng biến pháp tại nước Tần, xây dựng nền tảng quân công và pháp trị.',
        'Khoảng 256 TCN: Lý Băng xây dựng công trình thủy lợi Đô Giang Yển tại Tứ Xuyên.'
      ],
      chinaMilestonesEn: [
        '770 BCE: King Ping of Zhou moves the capital east to Luoyi; the Hundred Schools of Thought (Confucianism, Daoism, Mohism, Legalism) flourish.',
        '356 BCE: Shang Yang launches Legalist reforms in Qin, establishing meritocratic ranks and agrarian-military administration.',
        'c. 256 BCE: Li Bing constructs the Dujiangyan damless irrigation system in Sichuan.'
      ],
      vietnamParallelVi: 'Văn hóa Đông Sơn đạt đỉnh cao đúc đồng (trống đồng Ngọc Lũ); khoảng năm 257 TCN Thục Phán lập nước Âu Lạc và xây thành Cổ Loa.',
      vietnamParallelEn: 'Dong Son culture reaches its bronze-casting apex (Ngoc Lu drum); c. 257 BCE Thuc Phan founds Au Lac and builds the Co Loa Citadel.',
      worldParallelVi: 'Kỷ nguyên Trục (Axial Age): Triết học Hy Lạp cổ đại (Socrates, Plato, Aristotle), Đức Phật Thích Ca tại Ấn Độ, Đế quốc Ba Tư Achaemenid và Alexander Đại đế.',
      worldParallelEn: 'The Axial Age: Classical Greek philosophy (Socrates, Plato, Aristotle), the Buddha in India, the Achaemenid Persian Empire, and Alexander the Great.'
    },
    {
      eraId: 'qin',
      eraNameVi: 'Nhà Tần',
      eraNameZh: '秦朝',
      eraNameEn: 'Qin Dynasty',
      periodSpan: '221–206 BCE',
      chinaMilestonesVi: [
        '221 TCN: Doanh Chính thống nhất sáu nước, xưng Tần Thủy Hoàng, thiết lập Quận Huyện chế và chuẩn hóa Thư Đồng Văn, Xa Đồng Quỹ.',
        '214 TCN: Nối dài Trường Thành phía Bắc và đào kênh Linh Cừ phục vụ cuộc nam chinh Bách Việt.',
        '209 TCN: Khởi nghĩa Trần Thắng – Ngô Quảng bùng nổ tại Đại Trạch Hương.'
      ],
      chinaMilestonesEn: [
        '221 BCE: Ying Zheng unifies the six states as Qin Shi Huang, instituting the Commandery–County system, script standardization, and uniform axle gauges.',
        '214 BCE: Links northern frontier walls into the Great Wall and excavates the Lingqu Canal for southern campaigns.',
        '209 BCE: Chen Sheng and Wu Guang launch the Dazexiang uprising against Qin rule.'
      ],
      vietnamParallelVi: 'Quân Tần tiến xuống phía Nam Ngũ Lĩnh (214 TCN), đối đầu cuộc kháng chiến của cư dân Lạc Việt – Âu Việt; năm 207 TCN Triệu Đà lập nước Nam Việt.',
      vietnamParallelEn: 'Qin armies advance south of the Nanling range (214 BCE), meeting resistance from Lac Viet and Au Viet communities; in 207 BCE Zhao Tuo establishes Nanyue.',
      worldParallelVi: 'Chiến tranh Punic lần thứ nhất và thứ hai giữa Cộng hòa La Mã và Carthage (Hannibal vượt dãy Alps năm 218 TCN); Đế quốc Maurya tại Ấn Độ dưới thời Ashoka.',
      worldParallelEn: 'First and Second Punic Wars between the Roman Republic and Carthage (Hannibal crosses the Alps in 218 BCE); Maurya Empire in India under Ashoka.'
    },
    {
      eraId: 'han',
      eraNameVi: 'Lưỡng Hán (Tây Hán & Đông Hán)',
      eraNameZh: '两汉',
      eraNameEn: 'Western and Eastern Han Dynasties',
      periodSpan: '202 BCE–220 CE',
      chinaMilestonesVi: [
        '138 TCN: Hán Vũ Đế cử Trương Khiên đi sứ Tây Vực, khai thông Con đường Tơ lụa lục địa.',
        'Khoảng 91 TCN: Tư Mã Thiên hoàn thành bộ thông sử "Sử Ký" gồm 130 thiên.',
        '105 SCN: Thái Luân cải tiến kỹ thuật làm giấy thời Đông Hán; Hứa Thận hoàn thành "Thuyết Văn Giải Tự" (100–121 SCN).'
      ],
      chinaMilestonesEn: [
        '138 BCE: Emperor Wu of Han dispatches Zhang Qian to the Western Regions, opening the overland Silk Road.',
        'c. 91 BCE: Sima Qian completes the 130-chapter universal history "Shiji" (Records of the Grand Historian).',
        '105 CE: Cai Lun refines papermaking under the Eastern Han; Xu Shen compiles the etymological dictionary "Shuowen Jiezi" (100–121 CE).'
      ],
      vietnamParallelVi: 'Năm 111 TCN nhà Hán thôn tính Nam Việt, mở đầu thời kỳ Bắc thuộc lần thứ nhất; năm 40–43 SCN Hai Bà Trưng khởi nghĩa lập chính quyền tự chủ tại Mê Linh.',
      vietnamParallelEn: 'In 111 BCE Han annexes Nanyue, beginning the First Era of Northern Domination; in 40–43 CE the Trung Sisters lead an uprising and rule from Me Linh.',
      worldParallelVi: 'Sự chuyển mình từ Cộng hòa sang Đế quốc La Mã (Augustus năm 27 TCN), kỷ nguyên Pax Romana và sự hình thành Đế quốc Kushan tại Trung Á – Bắc Ấn.',
      worldParallelEn: 'Transition from Roman Republic to Roman Empire (Augustus in 27 BCE), the Pax Romana, and the rise of the Kushan Empire across Central Asia and northern India.'
    },
    {
      eraId: 'wei-jin-southern-northern',
      eraNameVi: 'Tam Quốc – Ngụy Tấn – Nam Bắc Triều',
      eraNameZh: '魏晋南北朝',
      eraNameEn: 'Three Kingdoms, Wei–Jin, and Northern–Southern Dynasties',
      periodSpan: '220–589 CE',
      chinaMilestonesVi: [
        '220–280: Cục diện Tam Quốc (Ngụy – Thục – Ngô); Huyền học và thư pháp đạt đỉnh cao với Vương Hy Chi ("Lan Đình Tập Tự", 353).',
        '366: Khởi đào các hang đá Phật giáo đầu tiên tại Mạc Cao Quật (Đôn Hoàng), sau đó mở rộng sang Vân Cương và Long Môn.',
        '494: Bắc Ngụy Hiếu Văn Đế dời đô về Lạc Dương, thực thi cải cách Hán hóa sâu rộng.'
      ],
      chinaMilestonesEn: [
        '220–280: Three Kingdoms era (Wei, Shu, Wu); Neo-Daoist Xuanxue and calligraphy peak with Wang Xizhi ("Orchid Pavilion Preface," 353).',
        '366: Excavation begins at the Mogao Buddhist grottoes in Dunhuang, later expanded at Yungang and Longmen.',
        '494: Emperor Xiaowen of Northern Wei relocates the capital to Luoyang and enacts sweeping Sinicization reforms.'
      ],
      vietnamParallelVi: 'Khởi nghĩa Bà Triệu (248); năm 544 Lý Bí khởi nghĩa lập nhà Tiền Lý và quốc hiệu Vạn Xuân (544–602), xây chùa Khai Quốc (Trấn Quốc).',
      vietnamParallelEn: 'Lady Trieu\'s rebellion (248); in 544 Ly Bi establishes the Early Ly dynasty and the state of Van Xuan (544–602), founding Khai Quoc (Tran Quoc) Pagoda.',
      worldParallelVi: 'Đế quốc Tây La Mã sụp đổ (476), Đế quốc Đông La Mã (Byzantium) cực thịnh dưới thời Justinian I (527–565) và Triều đại Gupta tại Ấn Độ.',
      worldParallelEn: 'Fall of the Western Roman Empire (476), Byzantine zenith under Justinian I (527–565), and the Gupta Empire in India.'
    },
    {
      eraId: 'sui',
      eraNameVi: 'Nhà Tùy',
      eraNameZh: '隋朝',
      eraNameEn: 'Sui Dynasty',
      periodSpan: '581–618 CE',
      chinaMilestonesVi: [
        '581–589: Tùy Văn Đế Dương Kiên tái thống nhất Trung Quốc, thiết lập chế độ Tam Tỉnh Lục Bộ và khởi đầu chế độ khoa cử.',
        '605–610: Tùy Dạng Đế xây dựng mạng lưới Đại Vận Hà nối thông năm lưu vực sông lớn.',
        'Khoảng 595–605: Thợ đá Lý Xuân xây dựng Cầu Triệu Châu (An Tế Kiều) tại Hà Bắc bằng kỹ thuật vòm mở.'
      ],
      chinaMilestonesEn: [
        '581–589: Emperor Wen of Sui reunifies China, institutionalizing the Three Departments and Six Ministries and initiating civil service examinations.',
        '605–610: Emperor Yang constructs the Grand Canal network linking five major river systems.',
        'c. 595–605: Master builder Li Chun constructs the open-spandrel stone arch Zhaozhou (Anji) Bridge in Hebei.'
      ],
      vietnamParallelVi: 'Năm 602 nhà Tùy đưa quân đánh bại Hậu Lý Nam Đế (Lý Phật Tử), chấm dứt nhà nước Vạn Xuân và mở đầu Bắc thuộc lần thứ ba.',
      vietnamParallelEn: 'In 602 Sui forces defeat Ly Phat Tu, ending the Van Xuan polity and beginning the Third Era of Northern Domination.',
      worldParallelVi: 'Thời kỳ Asuka tại Nhật Bản (Thái tử Shotoku ban hành Hiến pháp 17 điều năm 604) và sự khởi phát của Hồi giáo tại bán đảo Ả Rập (610).',
      worldParallelEn: 'Asuka period in Japan (Prince Shotoku\'s Seventeen-Article Constitution in 604) and the emergence of Islam in the Arabian Peninsula (610).'
    },
    {
      eraId: 'tang',
      eraNameVi: 'Nhà Đường',
      eraNameZh: '唐朝',
      eraNameEn: 'Tang Dynasty',
      periodSpan: '618–907 CE',
      chinaMilestonesVi: [
        '627–649: Trinh Quán chi trị dưới thời Đường Thái Tông; Pháp sư Huyền Trang thỉnh kinh Ấn Độ (629–645).',
        '713–755: Khai Nguyên thịnh thế, đỉnh cao Đường thi (Lý Bạch, Đỗ Phủ) trước biến cố Loạn An Sử (755–763).',
        '868: Kinh Kim Cương khắc ván in tại Đôn Hoàng — cuốn sách in có niên đại sớm nhất thế giới còn lưu giữ.'
      ],
      chinaMilestonesEn: [
        '627–649: Zhenguan Reign under Emperor Taizong; monk Xuanzang journeys to India for Buddhist scriptures (629–645).',
        '713–755: Kaiyuan Golden Age and the apex of Tang poetry (Li Bai, Du Fu), disrupted by the An Lushan Rebellion (755–763).',
        '868: Woodblock-printed Diamond Sutra from Dunhuang—the world\'s earliest dated complete printed book.'
      ],
      vietnamParallelVi: 'Nhà Đường lập An Nam Đô Hộ Phủ (679); nổ ra các cuộc khởi nghĩa Mai Thúc Loan (713–722), Phùng Hưng (766–791) và bước ngoặt tự chủ của Khúc Thừa Dụ (905).',
      vietnamParallelEn: 'Tang establishes the Protectorate of Annam (679); uprisings by Mai Thuc Loan (713–722) and Phung Hung (766–791) culminate in Khuc Thua Du\'s autonomous rule (905).',
      worldParallelVi: 'Kỷ nguyên Vàng Hồi giáo dưới Triều đại Abbasid tại Baghdad (Nhà Trí Tuệ), Đế quốc Charlemagne ở Tây Âu và thời kỳ Nara–Heian tại Nhật Bản.',
      worldParallelEn: 'Islamic Golden Age under the Abbasid Caliphate in Baghdad (House of Wisdom), Charlemagne\'s Carolingian Empire in Europe, and Nara–Heian Japan.'
    },
    {
      eraId: 'five-dynasties-ten-kingdoms',
      eraNameVi: 'Ngũ Đại Thập Quốc',
      eraNameZh: '五代十国',
      eraNameEn: 'Five Dynasties and Ten Kingdoms',
      periodSpan: '907–960 CE',
      chinaMilestonesVi: [
        '907–960: Năm triều đại kế tiếp nhau tại Hoa Bắc (Hậu Lương, Hậu Đường, Hậu Tấn, Hậu Hán, Hậu Chu) và mười chính quyền cát cứ ở miền Nam.',
        'Kinh tế và văn hóa nghệ thuật dịch chuyển mạnh về Giang Nam (Nam Đường, Ngô Việt) với sự phát triển của từ khúc và tranh sơn thủy.',
        '955: Hậu Chu Thế Tông tiến hành cải cách tài khóa – quân sự, đặt nền móng tái thống nhất cho nhà Bắc Tống.'
      ],
      chinaMilestonesEn: [
        '907–960: Five successive regimes in North China (Later Liang, Tang, Jin, Han, Zhou) alongside ten regional kingdoms in the South.',
        'Economic and artistic vitality shifts toward Jiangnan (Southern Tang, Wuyue), advancing ci lyric poetry and landscape painting.',
        '955: Emperor Shizong of Later Zhou conducts fiscal and military reforms paving the way for Northern Song reunification.'
      ],
      vietnamParallelVi: 'Năm 938 Ngô Quyền đại thắng quân Nam Hán trên sông Bạch Đằng, chấm dứt hơn 1.000 năm Bắc thuộc và mở ra kỷ nguyên độc lập lâu dài của dân tộc Việt Nam.',
      vietnamParallelEn: 'In 938 Ngo Quyen defeats Southern Han forces at the Bach Dang River, ending over a millennium of Northern Domination and inaugurating enduring Vietnamese independence.',
      worldParallelVi: 'Vương triều Goryeo thống nhất bán đảo Triều Tiên (918–936); Đế quốc La Mã Thần thánh thành lập tại Trung Âu (962); Đế quốc Khmer mở rộng tại Angkor.',
      worldParallelEn: 'Goryeo dynasty unifies the Korean Peninsula (918–936); Holy Roman Empire emerges in Central Europe (962); Khmer Empire expands at Angkor.'
    },
    {
      eraId: 'song',
      eraNameVi: 'Lưỡng Tống (Bắc Tống & Nam Tống)',
      eraNameZh: '两宋',
      eraNameEn: 'Northern and Southern Song Dynasties',
      periodSpan: '960–1279 CE',
      chinaMilestonesVi: [
        '1024: Nhà Bắc Tống chính thức phát hành tiền giấy Giao Tử tại Tứ Xuyên; Tất Thăng sáng chế bản in chữ rời đất nung (1041–1048).',
        '1088: Thẩm Quát biên soạn "Mộng Khê Bút Đàm"; Tô Tụng dựng Tháp đồng hồ thiên văn chạy bằng sức nước tại Biện Kinh.',
        '1127: Biến cố Tĩnh Khang lập ra nhà Nam Tống tại Lâm An; Chu Hy hệ thống hóa Tống học và hải thương Tuyền Châu cực thịnh.'
      ],
      chinaMilestonesEn: [
        '1024: Northern Song issues Jiaozi, the first state paper currency, in Sichuan; Bi Sheng invents ceramic movable type (1041–1048).',
        '1088: Shen Kuo compiles "Dream Pool Essays"; Su Song completes his water-driven astronomical clock tower in Bianjing.',
        '1127: Jingkang Incident establishes the Southern Song at Lin\'an; Zhu Xi synthesizes Neo-Confucianism as Quanzhou maritime trade thrives.'
      ],
      vietnamParallelVi: 'Các triều Đinh – Tiền Lê – Lý – đầu Trần: Lý Công Uẩn dời đô về Thăng Long (1010), mở khoa thi Nho học đầu tiên (1075), kháng chiến thắng lợi trên sông Như Nguyệt (1077) và lập thương cảng Vân Đồn (1149).',
      vietnamParallelEn: 'Dinh, Early Le, Ly, and early Tran dynasties: Ly Cong Uan moves the capital to Thang Long (1010), holds the first imperial exam (1075), wins at Nhu Nguyet (1077), and opens Van Don port (1149).',
      worldParallelVi: 'Các trường đại học đầu tiên tại châu Âu (Bologna 1088, Oxford), các cuộc Thập Tự Chinh, Hiến chương Magna Carta (1215) và sự trỗi dậy của Đế quốc Mông Cổ (1206).',
      worldParallelEn: 'Founding of Europe\'s earliest universities (Bologna 1088, Oxford), the Crusades, Magna Carta (1215), and the rise of the Mongol Empire (1206).'
    },
    {
      eraId: 'yuan',
      eraNameVi: 'Nhà Nguyên',
      eraNameZh: '元朝',
      eraNameEn: 'Yuan Dynasty',
      periodSpan: '1271–1368 CE',
      chinaMilestonesVi: [
        '1271–1279: Hốt Tất Liệt định đô tại Đại Đô (Bắc Kinh), thiết lập chế độ Hành tỉnh (tiền thân hệ thống tỉnh thành hiện đại).',
        '1281–1293: Quách Thủ Kính soạn lịch "Thụ Thời Lịch" chính xác cao và hoàn thiện trục thẳng Đại Vận Hà Kinh–Hàng.',
        'Nguyên khúc (tạp kịch của Quan Hán Khanh, Vương Thực Phủ) và gốm hoa lam Cảnh Đức Trấn đạt bước đột phá lớn.'
      ],
      chinaMilestonesEn: [
        '1271–1279: Kublai Khan establishes Dadu (Beijing) and introduces the Branch Secretariat (Province) administrative system.',
        '1281–1293: Guo Shoujing compiles the highly accurate Shoushi Calendar and completes the direct Beijing–Hangzhou Grand Canal.',
        'Yuan zaju drama (Guan Hanqing, Wang Shifu) and Jingdezhen blue-and-white porcelain achieve major artistic breakthroughs.'
      ],
      vietnamParallelVi: 'Nhà Trần ba lần đánh bại quân xâm lược Mông–Nguyên (1258, 1285, 1288 với chiến thắng Bạch Đằng); Trần Nhân Tông sáng lập Thiền phái Trúc Lâm Yên Tử (1299).',
      vietnamParallelEn: 'The Tran dynasty defeats three Mongol–Yuan invasions (1258, 1285, and the 1288 Battle of Bach Dang); Tran Nhan Tong founds the Truc Lam Zen school at Yen Tu (1299).',
      worldParallelVi: 'Hành trình Marco Polo sang Đông Á (1271–1295), thời kỳ Pax Mongolica kết nối Á–Âu, và đại dịch Cái Chết Đen tại châu Âu giữa thế kỷ XIV.',
      worldParallelEn: 'Marco Polo\'s journey to East Asia (1271–1295), trans-Eurasian exchange under the Pax Mongolica, and the Black Death in 14th-century Europe.'
    },
    {
      eraId: 'ming',
      eraNameVi: 'Nhà Minh',
      eraNameZh: '明朝',
      eraNameEn: 'Ming Dynasty',
      periodSpan: '1368–1644 CE',
      chinaMilestonesVi: [
        '1405–1433: Trịnh Hòa dẫn bảy chuyến hải hành quy mô lớn tới Đông Nam Á, Ấn Độ Dương và Đông Phi.',
        '1406–1420: Minh Thành Tổ xây dựng Tử Cấm Thành và Thiên Đàn tại Bắc Kinh; biên soạn bộ đại tùng thư "Vĩnh Lạc Đại Điển" (1408).',
        'Thế kỷ XVI: Vương Dương Minh phát triển Tâm học; tiểu thuyết chương hồi ("Tam Quốc Diễn Nghĩa", "Thủy Hử", "Tây Du Ký") và kinh tế bạc Giang Nam bùng nổ.'
      ],
      chinaMilestonesEn: [
        '1405–1433: Zheng He commands seven massive maritime voyages across Southeast Asia, the Indian Ocean, and East Africa.',
        '1406–1420: Emperor Yongle builds the Forbidden City and Temple of Heaven in Beijing and commissions the "Yongle Encyclopedia" (1408).',
        '16th century: Wang Yangming advances the School of Mind; vernacular novels and Jiangnan silver-monetized commerce expand rapidly.'
      ],
      vietnamParallelVi: 'Khởi nghĩa Lam Sơn thắng lợi (1418–1427), Nguyễn Trãi viết "Bình Ngô Đại Cáo"; thời Lê Thánh Tông ban hành Luật Hồng Đức (1483); giai đoạn Nam–Bắc triều và Trịnh–Nguyễn phân tranh.',
      vietnamParallelEn: 'Victory of the Lam Son Uprising (1418–1427) and Nguyen Trai\'s "Binh Ngo Dai Cao"; Emperor Le Thanh Tong promulgates the Hong Duc Code (1483); subsequent Trinh–Nguyen division.',
      worldParallelVi: 'Thời kỳ Phục Hưng châu Âu, máy in Gutenberg (khoảng 1450), các cuộc Phát kiến Địa lý (Columbus 1492, Magellan 1519) và Cải cách Tôn giáo.',
      worldParallelEn: 'European Renaissance, Gutenberg\'s printing press (c. 1450), Age of Discovery (Columbus 1492, Magellan 1519), and the Protestant Reformation.'
    },
    {
      eraId: 'qing',
      eraNameVi: 'Nhà Thanh',
      eraNameZh: '清朝',
      eraNameEn: 'Qing Dynasty',
      periodSpan: '1644–1912 CE',
      chinaMilestonesVi: [
        '1661–1796: Thời kỳ Khang – Ung – Càn định hình bản đồ lãnh thổ đa dân tộc; biên soạn "Tứ Khố Toàn Thư" (1773–1782) và kiệt tác "Hồng Lâu Mộng".',
        '1840–1842: Chiến tranh Nha phiến lần thứ nhất và Điều ước Nam Kinh mở đầu kỷ nguyên cận đại đầy biến động.',
        '1861–1905: Dương Vụ Vận Động, Mậu Tuất Biến Pháp (1898) và việc bãi bỏ chế độ khoa cử (1905).'
      ],
      chinaMilestonesEn: [
        '1661–1796: Kangxi–Yongzheng–Qianlong era consolidates multi-ethnic borders; compilation of the "Siku Quanshu" (1773–1782) and Cao Xueqin\'s "Dream of the Red Chamber."',
        '1840–1842: First Opium War and Treaty of Nanjing inaugurate China\'s turbulent modern era.',
        '1861–1905: Self-Strengthening Movement, Hundred Days\' Reform (1898), and abolition of the imperial examination system (1905).'
      ],
      vietnamParallelVi: 'Phong trào Tây Sơn đại phá quân Thanh tại Ngọc Hồi – Đống Đa (1789); nhà Nguyễn thống nhất đất nước lập kinh đô Huế (1802); Pháp xâm lược (1858) và các phong trào Cần Vương, Đông Du.',
      vietnamParallelEn: 'Tay Son victory over Qing forces at Ngoc Hoi–Dong Da (1789); Nguyen dynasty unifies Vietnam with its capital at Hue (1802); French colonization (1858) and Can Vuong / Dong Du movements.',
      worldParallelVi: 'Cách mạng Công nghiệp Anh, Tuyên ngôn Độc lập Hoa Kỳ (1776), Cách mạng Pháp (1789) và Minh Trị Duy Tân tại Nhật Bản (1868).',
      worldParallelEn: 'British Industrial Revolution, U.S. Declaration of Independence (1776), French Revolution (1789), and the Meiji Restoration in Japan (1868).'
    },
    {
      eraId: 'republic-of-china',
      eraNameVi: 'Trung Hoa Dân Quốc',
      eraNameZh: '中华民国',
      eraNameEn: 'Republic of China Era',
      periodSpan: '1912–1949 CE',
      chinaMilestonesVi: [
        '1912: Thành lập Trung Hoa Dân Quốc sau Cách mạng Tân Hợi, chấm dứt hơn 2.000 năm quân chủ chuyên chế.',
        '1915–1919: Phong trào Tân Văn Hóa, Ngũ Tứ (4/5/1919) và Cách mạng Văn học Bạch thoại định hình tiếng Trung hiện đại.',
        '1937–1945: Kháng chiến toàn quốc chống phát xít Nhật, tiếp nối bằng nội chiến Quốc–Cộng (1946–1949).'
      ],
      chinaMilestonesEn: [
        '1912: Founding of the Republic of China following the Xinhai Revolution, ending over two millennia of imperial monarchy.',
        '1915–1919: New Culture Movement, May Fourth Movement (May 4, 1919), and Vernacular Literature Revolution shape modern Chinese.',
        '1937–1945: War of Resistance against Japan, followed by the Chinese Civil War (1946–1949).'
      ],
      vietnamParallelVi: 'Sự phát triển của báo chí Quốc ngữ và Tự Lực Văn Đoàn; thành lập Đảng Cộng sản Việt Nam (1930); Cách mạng Tháng Tám và Tuyên ngôn Độc lập lập nước Việt Nam Dân chủ Cộng hòa (2/9/1945).',
      vietnamParallelEn: 'Rise of Quoc Ngu journalism and the Self-Reliant Literary Group; founding of the Communist Party of Vietnam (1930); August Revolution and Declaration of Independence (September 2, 1945).',
      worldParallelVi: 'Chiến tranh Thế giới thứ nhất (1914–1918), Cách mạng Tháng Mười Nga (1917), Đại Khủng hoảng 1929 và Chiến tranh Thế giới thứ hai (1939–1945).',
      worldParallelEn: 'World War I (1914–1918), Russian Revolution (1917), the Great Depression (1929), and World War II (1939–1945).'
    },
    {
      eraId: 'modern-prc',
      eraNameVi: 'Cộng hòa Nhân dân Trung Hoa',
      eraNameZh: '中华人民共和国',
      eraNameEn: 'People\'s Republic of China',
      periodSpan: '1949–nay / Present',
      chinaMilestonesVi: [
        '1/10/1949: Thành lập nước Cộng hòa Nhân dân Trung Hoa; thực thi cải cách chữ Hán giản thể và hệ thống phiên âm Pinyin (1958).',
        '1978: Công cuộc Cải cách Mở cửa khởi động; lập các đặc khu kinh tế (Thâm Quyến, Chu Hải, Sán Đầu, Hạ Môn) và gia nhập WTO (2001).',
        'Thế kỷ XXI: Phát triển mạng lưới đường sắt cao tốc lớn nhất thế giới, kinh tế số, năng lượng xanh và trạm vũ trụ Thiên Cung.'
      ],
      chinaMilestonesEn: [
        'Oct 1, 1949: Founding of the People\'s Republic of China; character simplification and Hanyu Pinyin romanization adopted (1958).',
        '1978: Reform and Opening-up begins; Special Economic Zones (Shenzhen, Zhuhai, Shantou, Xiamen) established, followed by WTO accession (2001).',
        '21st century: Expansion of the world\'s largest high-speed rail network, digital platform economy, green energy, and the Tiangong Space Station.'
      ],
      vietnamParallelVi: 'Chiến thắng Điện Biên Phủ (1954), thống nhất đất nước (1975), công cuộc Đổi Mới (1986), gia nhập ASEAN (1995), WTO (2007) và đẩy mạnh kết nối thương mại–chuỗi cung ứng Việt–Trung (ACFTA, RCEP).',
      vietnamParallelEn: 'Dien Bien Phu victory (1954), national reunification (1975), Doi Moi reforms (1986), ASEAN (1995) and WTO (2007) accession, and deepened Vietnam–China trade integration (ACFTA, RCEP).',
      worldParallelVi: 'Chiến tranh Lạnh, cuộc cách mạng công nghệ thông tin – Internet, toàn cầu hóa kinh tế và làn sóng chuyển đổi xanh – trí tuệ nhân tạo đầu thế kỷ XXI.',
      worldParallelEn: 'The Cold War, the Information and Internet revolutions, economic globalization, and the 21st-century green energy and artificial intelligence transitions.'
    }
  ];

  var KEY_FIGURES = [
    {
      id: 'wu-ding',
      nameVi: 'Thương Vương Vũ Đinh',
      nameZh: '武丁',
      nameEn: 'King Wu Ding of Shang',
      years: 'c. 1250–1192 BCE',
      era: 'xia-shang-zhou',
      provinceId: 'prov-henan',
      roleVi: 'Vị vua trung hưng nhà Thương',
      roleEn: 'Revitalizing Monarch of the Shang Dynasty',
      significanceVi: 'Trị vì hơn 50 năm thời "Vũ Đinh trung hưng"; phần lớn kho Giáp Cốt Văn Ân Khư và mộ nữ tướng Phụ Hảo đều thuộc triều đại ông.',
      significanceEn: 'Reigned over 50 years during the Shang zenith; the majority of surviving Yinxu oracle bone inscriptions and the Tomb of Lady Fu Hao date to his reign.'
    },
    {
      id: 'duke-of-zhou',
      nameVi: 'Chu Công Đán',
      nameZh: '周公旦',
      nameEn: 'Duke of Zhou (Zhou Gong Dan)',
      years: 'c. 11th century BCE',
      era: 'xia-shang-zhou',
      provinceId: 'prov-shaanxi',
      roleVi: 'Nhiếp chính vương & nhà kiến tạo thể chế Tây Chu',
      roleEn: 'Regent and Institutional Architect of Western Zhou',
      significanceVi: 'Xây dựng hệ thống Phân phong, Tông pháp, Lễ nhạc và học thuyết Kính đức bảo dân; được Khổng Tử tôn làm mẫu mực chính trị lý tưởng.',
      significanceEn: 'Architected the Western Zhou Enfeoffment, Lineage Law, and Ritual–Music institutions and the doctrine of virtuous governance; revered by Confucius as the ideal statesman.'
    },
    {
      id: 'confucius',
      nameVi: 'Khổng Tử',
      nameZh: '孔子',
      nameEn: 'Confucius (Kongzi)',
      years: '551–479 BCE',
      era: 'spring-autumn-warring-states',
      provinceId: 'prov-shandong',
      roleVi: 'Nhà tư tưởng & nhà giáo dục sáng lập Nho gia',
      roleEn: 'Philosopher and Educator, Founder of Confucianism',
      significanceVi: 'Hệ thống hóa tư tưởng Nhân – Lễ – Trung Dung, mở nền giáo dục tư thục "Hữu giáo vô loại" và để lại bộ "Luận Ngữ" định hình luân lý Đông Á.',
      significanceEn: 'Systematized the ethics of Ren (humaneness) and Li (ritual), pioneered private education open to all classes, and shaped East Asian moral philosophy through the "Analects."'
    },
    {
      id: 'laozi',
      nameVi: 'Lão Tử',
      nameZh: '老子',
      nameEn: 'Laozi',
      years: 'c. 6th–5th century BCE',
      era: 'spring-autumn-warring-states',
      provinceId: 'prov-henan',
      roleVi: 'Nhà triết học đặt nền móng Đạo gia',
      roleEn: 'Foundational Philosopher of Daoism',
      significanceVi: 'Tác giả truyền thống của "Đạo Đức Kinh", đề xuất khái niệm Đạo, Tự nhiên và Vô vi, ảnh hưởng sâu rộng tới triết học, chính trị và mỹ học thủy mặc.',
      significanceEn: 'Traditional author of the "Daodejing," articulating Dao, spontaneity (Ziran), and non-coercive action (Wuwei), profoundly influencing philosophy, statecraft, and ink-wash aesthetics.'
    },
    {
      id: 'qin-shi-huang',
      nameVi: 'Tần Thủy Hoàng',
      nameZh: '秦始皇',
      nameEn: 'Qin Shi Huang',
      years: '259–210 BCE',
      era: 'qin',
      provinceId: 'prov-shaanxi',
      roleVi: 'Hoàng đế đầu tiên thống nhất Trung Quốc',
      roleEn: 'First Emperor of a Unified China',
      significanceVi: 'Thống nhất sáu nước năm 221 TCN, thiết lập Quận Huyện chế, chuẩn hóa chữ viết, tiền tệ, đo lường, trục xe và nối dài Trường Thành.',
      significanceEn: 'Unified the six Warring States in 221 BCE, instituted the Commandery–County system, standardized script, currency, metrology, and axle widths, and linked the Great Wall.'
    },
    {
      id: 'li-si',
      nameVi: 'Lý Tư',
      nameZh: '李斯',
      nameEn: 'Li Si',
      years: 'c. 280–208 BCE',
      era: 'qin',
      provinceId: 'prov-henan',
      roleVi: 'Thừa tướng nhà Tần & nhà thư pháp Tiểu Triện',
      roleEn: 'Chancellor of Qin and Codifier of Small Seal Script',
      significanceVi: 'Bảo vệ thành công mô hình Quận Huyện chế trước triều đình Hàm Dương và trực tiếp chủ trì cuộc chuẩn hóa văn tự Tiểu Triện ("Thư Đồng Văn").',
      significanceEn: 'Successfully championed the Commandery–County system at the Xianyang court and oversaw the nationwide codification of Small Seal script.'
    },
    {
      id: 'sima-qian',
      nameVi: 'Tư Mã Thiên',
      nameZh: '司马迁',
      nameEn: 'Sima Qian',
      years: 'c. 145–86 BCE',
      era: 'han',
      provinceId: 'prov-shaanxi',
      roleVi: 'Thái sử lệnh thời Tây Hán & cha đẻ sử học Trung Hoa',
      roleEn: 'Grand Historian of Western Han',
      significanceVi: 'Biên soạn bộ "Sử Ký" gồm 130 thiên theo thể Kỷ truyện (Bản kỷ, Biểu, Thư, Thế gia, Liệt truyện), đặt chuẩn mực cho toàn bộ Nhị Thập Tứ Sử.',
      significanceEn: 'Authored the 130-chapter "Shiji" in the annals-biography format, setting the historiographical template for China\'s Twenty-Four Official Histories.'
    },
    {
      id: 'zhang-qian',
      nameVi: 'Trương Khiên',
      nameZh: '张骞',
      nameEn: 'Zhang Qian',
      years: 'c. 164–114 BCE',
      era: 'han',
      provinceId: 'prov-shaanxi',
      roleVi: 'Sứ giả & nhà thám hiểm thời Hán Vũ Đế',
      roleEn: 'Imperial Envoy and Explorer under Emperor Wu of Han',
      significanceVi: 'Hai lần đi sứ Tây Vực (138 và 119 TCN), mang về tri thức địa lý Trung Á và khai mở hành lang giao thương Á–Âu của Con đường Tơ lụa.',
      significanceEn: 'Led two diplomatic missions to the Western Regions (138 and 119 BCE), gathering geographical intelligence across Central Asia and inaugurating the Silk Road.'
    },
    {
      id: 'zhuge-liang',
      nameVi: 'Gia Cát Lượng',
      nameZh: '诸葛亮',
      nameEn: 'Zhuge Liang',
      years: '181–234',
      era: 'wei-jin-southern-northern',
      provinceId: 'prov-shandong',
      roleVi: 'Thừa tướng Thục Hán & nhà chiến lược',
      roleEn: 'Chancellor of Shu Han and Strategist',
      significanceVi: 'Tác giả "Long Trung Đối" và "Xuất Sư Biểu", kiến tạo liên minh Tôn–Lưu, ổn định kinh tế–pháp trị đất Thục và trở thành biểu tượng trí tuệ, trung nghĩa.',
      significanceEn: 'Formulated the Longzhong Plan and "Memorial on Dispatching the Troops," stabilized Shu Han administration, and became an enduring archetype of strategic wisdom and loyalty.'
    },
    {
      id: 'wang-xizhi',
      nameVi: 'Vương Hy Chi',
      nameZh: '王羲之',
      nameEn: 'Wang Xizhi',
      years: '303–361',
      era: 'wei-jin-southern-northern',
      provinceId: 'prov-zhejiang',
      roleVi: 'Thư Thánh thời Đông Tấn',
      roleEn: 'Sage of Calligraphy of the Eastern Jin',
      significanceVi: 'Hoàn thiện vẻ đẹp tự nhiên của Hành thư và Khải thư qua kiệt tác "Lan Đình Tập Tự" (353), đặt chuẩn mực thẩm mỹ cho hơn 1.600 năm thư pháp Đông Á.',
      significanceEn: 'Perfected running and regular scripts in his 353 masterpiece "Preface to the Poems Collected from the Orchid Pavilion," setting the canonical standard of East Asian calligraphy.'
    },
    {
      id: 'emperor-wen-of-sui',
      nameVi: 'Tùy Văn Đế (Dương Kiên)',
      nameZh: '隋文帝',
      nameEn: 'Emperor Wen of Sui (Yang Jian)',
      years: '541–604',
      era: 'sui',
      provinceId: 'prov-shaanxi',
      roleVi: 'Hoàng đế khai quốc nhà Tùy',
      roleEn: 'Founding Emperor of the Sui Dynasty',
      significanceVi: 'Chấm dứt gần bốn thế kỷ phân liệt Nam–Bắc, ban hành luật Khai Hoàng, hoàn thiện chế độ Tam Tỉnh Lục Bộ và khởi xướng tuyển quan qua khoa cử.',
      significanceEn: 'Ended nearly four centuries of North–South division, promulgated the Kaihuang Code, institutionalized the Three Departments and Six Ministries, and initiated civil examinations.'
    },
    {
      id: 'li-bai',
      nameVi: 'Lý Bạch',
      nameZh: '李白',
      nameEn: 'Li Bai',
      years: '701–762',
      era: 'tang',
      provinceId: 'prov-sichuan',
      roleVi: 'Thi Tiên thời Thịnh Đường',
      roleEn: 'Immortal Poet of the High Tang',
      significanceVi: 'Đại diện đỉnh cao của chủ nghĩa lãng mạn trong Đường thi với phong cách phóng khoáng chịu ảnh hưởng Đạo gia qua các tác phẩm như "Tương Tiến Tử", "Thục Đạo Nan".',
      significanceEn: 'Pinnacle of High Tang romantic poetry, infusing Daoist transcendence into classics such as "Bringing in the Wine" and "Hard Roads in Shu."'
    },
    {
      id: 'du-fu',
      nameVi: 'Đỗ Phủ',
      nameZh: '杜甫',
      nameEn: 'Du Fu',
      years: '712–770',
      era: 'tang',
      provinceId: 'prov-henan',
      roleVi: 'Thi Thánh thời Đường',
      roleEn: 'Poet-Sage of the Tang Dynasty',
      significanceVi: 'Nâng thơ luật Đường lên độ điêu luyện cao nhất và phản ánh chân thực nỗi đau xã hội thời Loạn An Sử ("Thi sử") qua "Tam Lại", "Tam Biệt" và "Thu Hứng".',
      significanceEn: 'Perfected Tang regulated verse while chronicling the human toll of the An Lushan Rebellion as "poetic history" in works like "Autumn Meditations."'
    },
    {
      id: 'li-yu',
      nameVi: 'Lý Dục (Nam Đường Hậu Chủ)',
      nameZh: '李煜',
      nameEn: 'Li Yu (Last Ruler of Southern Tang)',
      years: '937–978',
      era: 'five-dynasties-ten-kingdoms',
      provinceId: 'prov-jiangsu',
      roleVi: 'Hoàng đế cuối nhà Nam Đường & bậc thầy Từ khúc',
      roleEn: 'Last Monarch of Southern Tang and Master of Ci Poetry',
      significanceVi: 'Giải phóng thể Từ khỏi khuôn khổ ca lâu tiệc rượu để biểu đạt nỗi đau mất nước sâu sắc ("Ngu Mỹ Nhân"), mở đường trực tiếp cho Tống từ.',
      significanceEn: 'Elevated the ci lyric beyond banquet entertainment into deeply personal meditations on loss ("To the Tune of Yu Meiren"), paving the way for Song ci poetry.'
    },
    {
      id: 'su-shi',
      nameVi: 'Tô Thức (Tô Đông Pha)',
      nameZh: '苏轼',
      nameEn: 'Su Shi (Su Dongpo)',
      years: '1037–1101',
      era: 'song',
      provinceId: 'prov-sichuan',
      roleVi: 'Đại văn hào, nhà thư pháp, họa sĩ & quan lại Bắc Tống',
      roleEn: 'Northern Song Polymath, Poet, Calligrapher, and Statesman',
      significanceVi: 'Sáng lập phái Từ hào phóng ("Niệm Nô Kiều · Xích Bích Hoài Cổ"), tác giả "Hàn Thực Thiếp" và là hình mẫu lý tưởng của văn nhân toàn tài thời Tống.',
      significanceEn: 'Pioneered the heroic school of ci poetry ("Red Cliffs"), brushed the calligraphic masterpiece "Cold Food Observance," and embodied the Song literati ideal.'
    },
    {
      id: 'shen-kuo',
      nameVi: 'Thẩm Quát',
      nameZh: '沈括',
      nameEn: 'Shen Kuo',
      years: '1031–1095',
      era: 'song',
      provinceId: 'prov-zhejiang',
      roleVi: 'Nhà bác học, thiên văn học & chính trị gia Bắc Tống',
      roleEn: 'Northern Song Polymath, Astronomer, and Statesman',
      significanceVi: 'Tác giả "Mộng Khê Bút Đàm" (609 mục), ghi chép kỹ thuật in chữ rời Tất Thăng, độ lệch từ trường la bàn và địa chất học trầm tích sớm hàng thế kỷ so với châu Âu.',
      significanceEn: 'Author of "Dream Pool Essays" (609 entries), documenting Bi Sheng\'s movable type, magnetic declination, and sedimentary geology centuries ahead of Europe.'
    },
    {
      id: 'zhu-xi',
      nameVi: 'Chu Hy',
      nameZh: '朱熹',
      nameEn: 'Zhu Xi',
      years: '1130–1200',
      era: 'song',
      provinceId: 'prov-fujian',
      roleVi: 'Nhà đại tổng hợp Tống Nho (Lý học)',
      roleEn: 'Great Synthesizer of Song Neo-Confucianism',
      significanceVi: 'Biên định bộ "Tứ Thư Chương Cú Tập Chú" và hoàn thiện hệ thống Lý – Khí – Cách Vật Trí Tri, trở thành giáo trình khoa cử chính thống ở Trung Quốc, Triều Tiên và Đại Việt suốt hơn 600 năm.',
      significanceEn: 'Compiled the "Collected Commentaries on the Four Books" and systematized Principle–Qi metaphysics, serving as the orthodox examination curriculum across China, Korea, and Dai Viet for over six centuries.'
    },
    {
      id: 'guo-shoujing',
      nameVi: 'Quách Thủ Kính',
      nameZh: '郭守敬',
      nameEn: 'Guo Shoujing',
      years: '1231–1316',
      era: 'yuan',
      provinceId: 'prov-hebei',
      roleVi: 'Nhà thiên văn, toán học & kỹ sư thủy lợi thời Nguyên',
      roleEn: 'Yuan Astronomer, Mathematician, and Hydraulic Engineer',
      significanceVi: 'Chế tạo Giản Nghi, tính độ dài năm mặt trời 365,2425 ngày trong "Thụ Thời Lịch" (1281, trùng lịch Gregory 300 năm sau) và thiết kế kênh Thông Huệ nối Đại Vận Hà vào Bắc Kinh.',
      significanceEn: 'Invented the simplified armilla, calculated the tropical year at 365.2425 days in the 1281 Shoushi Calendar (matching the Gregorian calendar three centuries early), and engineered the Tonghui Canal.'
    },
    {
      id: 'guan-hanqing',
      nameVi: 'Quan Hán Khanh',
      nameZh: '关汉卿',
      nameEn: 'Guan Hanqing',
      years: 'c. 1241–1320',
      era: 'yuan',
      provinceId: 'prov-beijing',
      roleVi: 'Nhà soạn kịch tiên phong của Nguyên tạp kịch',
      roleEn: 'Pioneering Playwright of Yuan Zaju Drama',
      significanceVi: 'Sáng tác hơn 60 vở tạp kịch, tiêu biểu là "Đậu Nga Oan", đưa nghệ thuật sân khấu hý khúc Trung Hoa đạt độ chín về kết cấu bi kịch và ngôn ngữ bình dân.',
      significanceEn: 'Composed over 60 zaju plays—most famously "The Injustice to Dou E"—bringing Chinese theatrical structure and vernacular drama to maturity.'
    },
    {
      id: 'zheng-he',
      nameVi: 'Trịnh Hòa',
      nameZh: '郑和',
      nameEn: 'Zheng He',
      years: '1371–1433',
      era: 'ming',
      provinceId: 'prov-yunnan',
      roleVi: 'Đô đốc hải quân & nhà hàng hải thời Minh',
      roleEn: 'Ming Fleet Admiral and Maritime Explorer',
      significanceVi: 'Chỉ huy bảy chuyến viễn chinh "Hạ Tây Dương" (1405–1433) với hạm đội bảo thuyền lớn nhất thế giới tiền hiện đại, mở rộng giao lưu ngoại giao – thương mại tới hơn 30 nước Á–Phi.',
      significanceEn: 'Commanded seven Indian Ocean treasure-fleet expeditions (1405–1433), projecting Ming diplomacy and maritime trade across more than 30 polities from Southeast Asia to East Africa.'
    },
    {
      id: 'wang-yangming',
      nameVi: 'Vương Dương Minh (Vương Thủ Nhân)',
      nameZh: '王阳明',
      nameEn: 'Wang Yangming (Wang Shouren)',
      years: '1472–1529',
      era: 'ming',
      provinceId: 'prov-zhejiang',
      roleVi: 'Triết gia Tâm học, nhà giáo dục & quân sự thời Minh',
      roleEn: 'Ming Philosopher of Mind, Educator, and General',
      significanceVi: 'Đề xuất học thuyết "Tâm tức Lý", "Tri Hành Hợp Nhất" và "Trí Lương Tri", phá vỡ tính giáo điều của Lý học và có ảnh hưởng lớn đến tư tưởng duy tân Đông Á.',
      significanceEn: 'Formulated the doctrines of "Mind is Principle," "Unity of Knowledge and Action," and "Extending Innate Moral Knowing," invigorating East Asian reformist thought.'
    },
    {
      id: 'kangxi-emperor',
      nameVi: 'Khang Hy Đế (Ái Tân Giác La Huyền Diệp)',
      nameZh: '康熙帝',
      nameEn: 'Kangxi Emperor',
      years: '1654–1722',
      era: 'qing',
      provinceId: 'prov-beijing',
      roleVi: 'Hoàng đế trị vì lâu nhất lịch sử Trung Quốc (61 năm)',
      roleEn: 'Longest-Reigning Emperor in Chinese History (61 Years)',
      significanceVi: 'Ổn định biên cương đa dân tộc, trị thủy Hoàng Hà – Đại Vận Hà, chủ trì biên soạn "Khang Hy Tự Điển" (1716) và khuyến khích tiếp xúc khoa học thiên văn – toán học phương Tây.',
      significanceEn: 'Consolidated multi-ethnic frontiers, oversaw Yellow River and Grand Canal hydraulics, sponsored the "Kangxi Dictionary" (1716), and engaged with Western astronomy and mathematics.'
    },
    {
      id: 'cao-xueqin',
      nameVi: 'Tào Tuyết Cần',
      nameZh: '曹雪芹',
      nameEn: 'Cao Xueqin',
      years: 'c. 1715–1763',
      era: 'qing',
      provinceId: 'prov-jiangsu',
      roleVi: 'Tiểu thuyết gia vĩ đại thời Thanh',
      roleEn: 'Master Novelist of the Qing Dynasty',
      significanceVi: 'Tác giả 80 hồi đầu kiệt tác "Hồng Lâu Mộng", đạt đỉnh cao nghệ thuật tự sự, phân tích tâm lý và phê phán xã hội gia tộc quý tộc cuối thời phong kiến.',
      significanceEn: 'Author of the first 80 chapters of "Dream of the Red Chamber," attaining the pinnacle of classical Chinese narrative craft, psychological realism, and aristocratic social critique.'
    },
    {
      id: 'sun-yat-sen',
      nameVi: 'Tôn Trung Sơn (Tôn Dật Tiên)',
      nameZh: '孙中山',
      nameEn: 'Sun Yat-sen',
      years: '1866–1925',
      era: 'republic-of-china',
      provinceId: 'prov-guangdong',
      roleVi: 'Nhà cách mạng & Tổng thống lâm thời đầu tiên của Trung Hoa Dân Quốc',
      roleEn: 'Revolutionary Leader and First Provisional President of the Republic of China',
      significanceVi: 'Sáng lập Đồng Minh Hội (1905) và học thuyết "Chủ nghĩa Tam Dân" (Dân tộc – Dân quyền – Dân sinh), giữ vai trò trung tâm trong cuộc Cách mạng Tân Hợi chấm dứt chế độ quân chủ.',
      significanceEn: 'Founded the Tongmenghui (1905) and articulated the Three Principles of the People, playing the central role in the 1911 Xinhai Revolution ending imperial rule.'
    },
    {
      id: 'lu-xun',
      nameVi: 'Lỗ Tấn (Chu Thụ Nhân)',
      nameZh: '鲁迅',
      nameEn: 'Lu Xun (Zhou Shuren)',
      years: '1881–1936',
      era: 'republic-of-china',
      provinceId: 'prov-zhejiang',
      roleVi: 'Nhà văn, nhà tư tưởng đặt nền móng văn học hiện đại Trung Quốc',
      roleEn: 'Founding Figure of Modern Chinese Literature',
      significanceVi: 'Tác giả "Cuồng nhân nhật ký" (1918) và "AQ chính truyện" (1921), tiên phong dùng văn Bạch thoại hiện đại giải phẫu tâm lý xã hội và thúc đẩy canh tân văn hóa.',
      significanceEn: 'Author of "Diary of a Madman" (1918) and "The True Story of Ah Q" (1921), pioneering modern vernacular fiction to dissect national character and advance cultural renewal.'
    },
    {
      id: 'hu-shi',
      nameVi: 'Hồ Thích',
      nameZh: '胡适',
      nameEn: 'Hu Shi',
      years: '1891–1962',
      era: 'republic-of-china',
      provinceId: 'prov-anhui',
      roleVi: 'Học giả, nhà ngôn ngữ & lãnh tụ Cách mạng Bạch thoại',
      roleEn: 'Scholar, Linguist, and Leader of the Vernacular Movement',
      significanceVi: 'Công bố "Văn học cải lương sô nghị" (1917), đưa tiếng nói phổ thông Bạch thoại vào giáo dục quốc gia và ứng dụng phương pháp thực chứng hiện đại vào khảo cứu cổ tịch.',
      significanceEn: 'Published "A Modest Proposal for the Reform of Literature" (1917), championed vernacular Chinese in national education, and applied modern empirical methods to classical textual criticism.'
    },
    {
      id: 'qian-xuesen',
      nameVi: 'Tiền Học Sâm',
      nameZh: '钱学森',
      nameEn: 'Qian Xuesen',
      years: '1911–2009',
      era: 'modern-prc',
      provinceId: 'prov-zhejiang',
      roleVi: 'Nhà khoa học khí động học & cha đẻ ngành hàng không vũ trụ Trung Quốc',
      roleEn: 'Aerodynamicist and Founder of China\'s Space Program',
      significanceVi: 'Đặt nền móng lý thuyết điều khiển học kỹ thuật và dẫn dắt chương trình tên lửa – vệ tinh nhân tạo đầu tiên Đông Phương Hồng 1 (1970) của Trung Quốc.',
      significanceEn: 'Pioneered engineering cybernetics and led China\'s rocketry and space initiatives, culminating in the launch of its first satellite, Dong Fang Hong 1 (1970).'
    },
    {
      id: 'tu-youyou',
      nameVi: 'Đồ U U',
      nameZh: '屠呦呦',
      nameEn: 'Tu Youyou',
      years: '1930–',
      era: 'modern-prc',
      provinceId: 'prov-zhejiang',
      roleVi: 'Nhà dược học đoạt giải Nobel Sinh lý học hoặc Y học năm 2015',
      roleEn: 'Pharmaceutical Chemist and 2015 Nobel Laureate in Physiology or Medicine',
      significanceVi: 'Từ gợi ý trong cổ thư "Trửu Hậu Bị Cấp Phương" của Cát Hồng (thế kỷ IV), chiết xuất thành công hoạt chất artemisinin (Thanh hao tố) cứu sống hàng triệu bệnh nhân sốt rét toàn cầu.',
      significanceEn: 'Guided by Ge Hong\'s 4th-century medical classic "Emergency Prescriptions Kept up One\'s Sleeve," isolated artemisinin, saving millions of malaria patients worldwide.'
    }
  ];

  window.CCE_HISTORY_SYNC_V3 = window.CCE_HISTORY_SYNC_V3 || {};
  window.CCE_HISTORY_SYNC_V3.parallelTimeline = PARALLEL_TIMELINE;
  window.CCE_HISTORY_SYNC_V3.keyFigures = KEY_FIGURES;
})();