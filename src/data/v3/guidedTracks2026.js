(function () {
  'use strict';

  window.CCE_GUIDED_TRACKS_V3 = window.CCE_GUIDED_TRACKS_V3 || [];

  function S(stepNumber, targetType, targetId, titleVi, titleEn, goalVi, goalEn) {
    return {
      stepNumber: stepNumber,
      targetType: targetType,
      targetId: targetId,
      titleVi: titleVi,
      titleEn: titleEn,
      goalVi: goalVi,
      goalEn: goalEn
    };
  }

  var TRACKS = [
    {
      id: 'track-01-civilization-4000-years',
      titleVi: 'Lộ trình 1: Nhập môn Văn minh Trung Hoa 4.000 Năm',
      titleEn: 'Track 1: Foundations of 4,000 Years of Chinese Civilization',
      descVi: 'Đi từ khảo cổ Lương Chử – Tam Tinh Đôi, Giáp cốt văn Thương – Chu, thể chế Tần – Hán, phồn vinh đô thị Tống đến chuyển mình cận đại và khoa học đương đại.',
      descEn: 'Trace Chinese civilization from Liangzhu–Sanxingdui archaeology, Shang–Zhou oracle bones, Qin–Han statecraft, and Song urban science to modern transformation.',
      steps: [
        S(1, 'article', 'modern-chinese-archaeology-sanxingdui-liangzhu', 'Khảo cổ học hiện đại: Lương Chử & Tam Tinh Đôi', 'Modern Archaeology: Liangzhu & Sanxingdui', 'Nắm mô hình "Đa nguyên nhất thể" của văn minh Hoa Hạ.', 'Grasp the Pluralistic Unity model of early Chinese civilization.'),
        S(2, 'museum', 'sanxingdui-bronze-tree', 'Bảo vật: Thần thụ đồng thanh Tam Tinh Đôi', 'Artifact: Sanxingdui Bronze Sacred Tree', 'Quan sát kỹ nghệ đúc đồng cổ vùng Thục ngoài Trung Nguyên.', 'Examine ancient Shu bronze casting beyond the Central Plains.'),
        S(3, 'article', 'xia-shang-zhou-oracle-bones-rituals', 'Hạ – Thương – Chu: Giáp cốt văn & Lễ Nhạc', 'Xia–Shang–Zhou: Oracle Bones & Ritual Order', 'Hiểu bước chuyển từ thần quyền Thương sang Thiên mệnh Tây Chu.', 'Trace the shift from Shang divination to Zhou Mandate of Heaven.'),
        S(4, 'museum', 'fuhao-owl-zun', 'Bảo vật: Tôn đồng hình cú Phụ Hảo', 'Artifact: Fu Hao Owl-Shaped Zun', 'Khảo sát nghệ thuật đồng thanh thời Thương Vũ Đinh.', 'Inspect late Shang bronze craftsmanship from Tomb of Fu Hao.'),
        S(5, 'article', 'qin-institutional-standardization', 'Nhà Tần: Quận huyện & Thư đồng văn', 'Qin Dynasty: Institutional Standardization', 'Phân tích bộ khung thể chế tồn tại hơn 2.000 năm.', 'Analyze the centralized institutional template enduring two millennia.'),
        S(6, 'article', 'grand-canal-dujiangyan-hydraulic-empire', 'Đế chế Thủy lợi: Đô Giang Yển & Đại Vận Hà', 'Hydraulic Empire: Dujiangyan & Grand Canal', 'Giải mã vai trò hạ tầng thủy lợi với sự thống nhất Bắc – Nam.', 'Understand how water infrastructure sustained imperial unity.'),
        S(7, 'article', 'song-dynasty-urban-science-renaissance', 'Triều Tống: Đô thị, Tiền giấy & Khoa học', 'Song Dynasty: Urban & Scientific Renaissance', 'Đánh giá bước ngoặt thị trường và kỹ thuật thời Bắc – Nam Tống.', 'Evaluate Song breakthroughs in markets, printing, and science.'),
        S(8, 'article', 'modern-china-transformation-1840-1949', 'Chuyển mình Cận đại 1840–1949', 'Modern China Transformation 1840–1949', 'Tổng hợp 3 tầng hiện đại hóa: Khí cụ – Thể chế – Văn hóa.', 'Synthesize the three modernization tiers from 1840 to 1949.'),
        S(9, 'lab', 'history-sync-v3', 'Thực hành: Bảng đồng bộ lịch sử 3 trục Trung – Việt – Thế giới', 'Lab: Three-Track History Sync Timeline', 'Đối chiếu các mốc triều đại song song giữa Trung Quốc, Việt Nam và Thế giới.', 'Cross-reference parallel milestones across China, Vietnam, and World history.')
      ]
    },
    {
      id: 'track-02-sinology-liushu-classics',
      titleVi: 'Lộ trình 2: Hán học, Lục thư & Cổ tịch Tứ Khố',
      titleEn: 'Track 2: Sinology, Liushu Etymology & Siku Quanshu Classics',
      descVi: 'Xây dựng nền tảng đọc hiểu cấu trúc chữ Hán theo Lục thư, âm vận Hán – Việt, hệ thống Tứ Khố Toàn Thư và kỹ nghệ khắc ván in cổ đại.',
      descEn: 'Build fluency in Liushu character structure, Sino-Vietnamese phonology, Four Treasuries classics, and East Asian woodblock printing history.',
      steps: [
        S(1, 'classic', 'shuowen-jiezi', 'Cổ tịch: Thuyết Văn Giải Tự (Hứa Thận)', 'Classic: Shuowen Jiezi (Xu Shen)', 'Nắm 6 quy luật tạo chữ Lục thư và hệ 540 bộ thủ gốc.', 'Master the Six Categories (Liushu) and 540 foundational radicals.'),
        S(2, 'lab', 'liushu-dictionary', 'Thực hành: Từ điển Lục thư Mở rộng', 'Lab: Expanded Liushu Hanzi Dictionary', 'Tra cứu cấu trúc bộ thủ, âm Hán – Việt và từ nguyên 500+ chữ.', 'Explore radicals, Han-Viet readings, and etymologies across 500+ characters.'),
        S(3, 'article', 'han-viet-phonology-middle-chinese', 'Âm vận Hán – Việt & Hán ngữ Trung cổ', 'Sino-Vietnamese Phonology & Middle Chinese', 'Hiểu lý do âm Hán – Việt bảo lưu nhập thanh Đường – Tống.', 'Understand how Han-Viet preserves Tang-Song Middle Chinese codas.'),
        S(4, 'lab', 'false-friends-v3', 'Thực hành: 64 Cặp Từ Đồng tự Dị nghĩa (False Friends)', 'Lab: 64 Sino-Vietnamese False Friends', 'Tránh bẫy dịch sai giữa tiếng Trung hiện đại và từ Hán – Việt.', 'Avoid semantic traps between modern Chinese and Han-Viet words.'),
        S(5, 'classic', 'xiaojing', 'Cổ tịch Kinh bộ: Hiếu Kinh', 'Classic (Jing): Classic of Filial Piety', 'Đọc văn ngôn kinh điển nền tảng đạo đức Nho gia.', 'Read foundational Confucian ethical prose in Literary Sinitic.'),
        S(6, 'article', 'pre-qin-legalism-xunzi-hanfeizi', 'Pháp gia Tiên Tần: Tuân Tử & Hàn Phi Tử', 'Pre-Qin Legalism: Xunzi & Han Feizi', 'Đối chiếu Pháp – Thuật – Thế với Lễ trị Nho gia.', 'Compare Legalist Fa-Shu-Shi with Confucian ritual governance.'),
        S(7, 'article', 'song-ming-neo-confucianism-zhu-wang', 'Tống – Minh Lý học & Tâm học', 'Song-Ming Neo-Confucianism: Zhu Xi & Wang Yangming', 'Phân biệt Cách vật trí tri và Tri hành hợp nhất.', 'Contrast Zhu Xi\'s Lixue with Wang Yangming\'s Xinxue.'),
        S(8, 'article', 'east-asian-woodblock-printing-encyclopedias', 'Khắc ván In Cổ (868) & Vĩnh Lạc – Tứ Khố', 'Woodblock Printing & Imperial Encyclopedias', 'Hiểu lịch sử lưu trữ và phân loại tri thức Kinh – Sử – Tử – Tập.', 'Trace East Asian xylography and Four Treasuries bibliography.'),
        S(9, 'lab', 'concept-pairs-v3', 'Thực hành: Ma trận Đối chiếu 24 Cặp Khái niệm', 'Lab: 24 Interdisciplinary Concept Pairs', 'Tổng hợp so sánh Nhân/Đạo, Lễ/Pháp, Văn ngôn/Bạch thoại.', 'Synthesize core philosophical and linguistic concept pairs.')
      ]
    },
    {
      id: 'track-03-aesthetics-museum-architecture',
      titleVi: 'Lộ trình 3: Mỹ học Quốc họa, Bảo tàng & Kiến trúc Cổ',
      titleEn: 'Track 3: Classical Aesthetics, Paintings, Museum & Timber Architecture',
      descVi: 'Giải mã hệ phạm trù mỹ học Khí vận – Ý cảnh – Lưu bạch, phả hệ thư pháp, kiệt tác quốc họa và kỹ thuật kiến trúc gỗ 3D từ Tử Cấm Thành đến Thiên Đàn.',
      descEn: 'Decode Qiyun, Yijing, and Liubai aesthetics, calligraphy lineages, master paintings, and 3D timber cosmology from the Forbidden City to Tiantan.',
      steps: [
        S(1, 'article', 'chinese-aesthetic-concepts-qiyun-yijing', 'Phạm trù Mỹ học: Khí Vận, Ý Cảnh, Lưu Bạch', 'Classical Aesthetics: Qiyun, Yijing & Liubai', 'Trang bị bộ thấu kính thưởng lãm nghệ thuật Đông Á.', 'Acquire the core conceptual lenses of East Asian art theory.'),
        S(2, 'painting', 'wuniu-tu', 'Quốc họa: Ngũ Ngưu Đồ (Hàn Hoảng · Đường)', 'Painting: Five Oxen (Han Huang, Tang)', 'Quan sát kỹ pháp tả thực và tạo hình mực giấy cổ nhất còn lại.', 'Study expressive linework on the oldest surviving paper painting.'),
        S(3, 'painting', 'hanjiang-dudiao-tu', 'Quốc họa: Hàn Giang Độc Điếu Đồ (Mã Viễn · Nam Tống)', 'Painting: Angler on a Wintry River (Ma Yuan)', 'Trải nghiệm đỉnh cao thủ pháp Lưu bạch trong tranh văn nhân.', 'Experience peak Liubai negative space in Southern Song painting.'),
        S(4, 'article', 'calligraphy-masterpieces-three-rarities-lineage', 'Phả hệ Thư pháp: Tam Hy Đường đến Bi học', 'Calligraphy Lineage: Sanxitang to Qing Stele School', 'Phân biệt Thiếp học và Bi học qua 1.600 năm thư pháp.', 'Distinguish Copybook (Tiexue) and Stele (Beixue) aesthetics.'),
        S(5, 'article', 'dunhuang-mogao-buddhist-grotto-art', 'Nghệ thuật Hang đá Đôn Hoàng Mạc Cao', 'Dunhuang Mogao Buddhist Grotto Art', 'Theo dõi tiến trình Hán hóa mỹ thuật Phật giáo dọc Con đường Tơ lụa.', 'Trace Silk Road Buddhist art synthesis across a millennium.'),
        S(6, 'article', 'comparative-timber-architecture-dougong', 'Kiến trúc Gỗ & Hệ thống Đấu Củng', 'Timber Architecture & Dougong Joinery', 'Hiểu cơ chế chống động đất và mô-đun Tài phân không đinh thép.', 'Understand seismic mortise-and-tenon joinery and Caifen modules.'),
        S(7, 'article', 'forbidden-city-3d-dissection', 'Giải phẫu 3D Tử Cấm Thành Bắc Kinh', 'Forbidden City 3D Architectural Dissection', 'Đọc trục thần đạo Bắc – Nam và biểu tượng số 9 hoàng quyền.', 'Decode the North-South ceremonial axis and imperial number-9 code.'),
        S(8, 'article', 'temple-of-heaven-tiantan-cosmology-3d', 'Thiên Đàn 3D: 28 Cột Gỗ & Hồi Âm Bích', 'Temple of Heaven 3D Cosmology & Acoustics', 'Khám phá vũ trụ luận Thiên Viên Địa Phương và đối chiếu Đàn Nam Giao Huế.', 'Explore Tiantan\'s 28 calendrical columns and Hue Nam Giao comparison.'),
        S(9, 'article', 'suzhou-classical-gardens-aesthetics', 'Mỹ học Lâm viên Cổ điển Tô Châu', 'Suzhou Classical Gardens Aesthetics', 'Nắm thủ pháp Tá cảnh và đối cực giữa cung điện với vườn văn nhân.', 'Master Borrowed Scenery and palace-versus-garden spatial contrast.')
      ]
    },
    {
      id: 'track-04-34-provinces-culinary-atlas',
      titleVi: 'Lộ trình 4: Khảo cứu Thực địa 34 Tỉnh & Ẩm thực Bát Đại Thái Hệ',
      titleEn: 'Track 4: 34-Province Field Atlas & Eight Culinary Traditions',
      descVi: 'Kết hợp địa lý nhân văn 34 đơn vị hành chính, 16 cổ đô, tuyến Trà Mã Cổ Đạo, kỳ quan địa chất Cửu Trại Câu – Trương Gia Giới với bản đồ ẩm thực và trà đạo.',
      descEn: 'Integrate the 34-province cultural atlas, 16 ancient capitals, Tea-Horse Road, Jiuzhaigou and Zhangjiajie geology, and China\'s culinary and tea heritage.',
      steps: [
        S(1, 'article', 'sixteen-ancient-capitals-geopolitics', 'Địa – Chính trị 16 Cổ đô Trung Hoa', 'Geopolitics of China\'s Sixteen Ancient Capitals', 'Hiểu quy luật dịch chuyển kinh đô từ Tây sang Đông và lên Bắc Kinh.', 'Grasp the strategic shifts from Chang\'an to Luoyang, Nanjing, and Beijing.'),
        S(2, 'article', 'five-sacred-mountains-buddhist-peaks', 'Ngũ Nhạc & Tứ Đại Danh Sơn Phật giáo', 'Five Sacred Mountains & Four Buddhist Peaks', 'Nắm bản đồ địa lý thiêng gắn với Ngũ hành và hành hương.', 'Map China\'s sacred mountain geography and pilgrimage corridors.'),
        S(3, 'article', 'five-vernacular-architecture-styles', 'Năm dòng Kiến trúc Dân gian Vùng miền', 'Five Vernacular Architecture Traditions', 'Liên hệ Tứ Hợp Viện, Huy Phái, Thổ Lâu và Diêu Động với khí hậu.', 'Connect regional vernacular homes directly to climate and kinship.'),
        S(4, 'article', 'tea-horse-road-southwest-corridor', 'Trà Mã Cổ Đạo: Hành lang Tây Nam', 'Ancient Tea-Horse Road Southwest Corridor', 'Hiểu bổ trợ sinh thái trà – ngựa nối Vân Nam, Tứ Xuyên và Tây Tạng.', 'Understand the ecological tea-for-horses network across Southwest China.'),
        S(5, 'article', 'jiuzhaigou-travertine-karst', 'Cửu Trại Câu: Địa chất Travertine & 9 Bản Tạng', 'Jiuzhaigou: Travertine Karst & Nine Villages', 'Giải mã cơ chế kết tủa Canxi tạo Ngũ Hoa Hải và văn hóa Tạng – Khương.', 'Decode calcite dam formation and Tibetan-Qiang forest stewardship.'),
        S(6, 'article', 'zhangjiajie-wulingyuan-sandstone-pillars', 'Trương Gia Giới: Cột Sa thạch 380 Triệu Năm', 'Zhangjiajie: 380-Million-Year Sandstone Pillars', 'Phân biệt Địa mạo Trương Gia Giới với núi đá vôi karst thông thường.', 'Distinguish quartz-sandstone pillars from classic limestone karst.'),
        S(7, 'article', 'chinese-fermentation-spices-culinary-geography', 'Địa lý Ẩm thực, Lên men Khúc & Bát Đại Thái Hệ', 'Culinary Geography, Qu Fermentation & Eight Cuisines', 'Hiểu nền tảng khoa học lên men và phân vùng hương vị địa lý.', 'Understand Qu fermentation science and regional flavor geography.'),
        S(8, 'article', 'chinese-liquor-culture-baijiu-huangjiu', 'Văn hóa Tửu đạo: Hoàng tửu & Bạch tửu', 'Liquor Culture: Huangjiu & Baijiu', 'Phân biệt kỹ thuật sản xuất và lễ nghi bàn tiệc Hoa Bắc – Hoa Nam.', 'Distinguish rice-wine fermentation, Baijiu distillation, and toasting norms.'),
        S(9, 'lab', 'customs-tea-ethnic', 'Thực hành: Thập Đại Danh Trà & 8 Dân tộc Thiểu số', 'Lab: Top Ten Teas & Eight Ethnic Minorities', 'Tổng hợp thông số pha 10 danh trà và di sản đa tộc người.', 'Review brewing profiles for ten iconic teas and ethnic heritage.')
      ]
    },
    {
      id: 'track-05-sino-vietnamese-dialogue',
      titleVi: 'Lộ trình 5: Đối thoại Văn hiến & Sử học Việt – Trung',
      titleEn: 'Track 5: Sino-Vietnamese Cultural & Historiographical Dialogue',
      descVi: 'Khảo cứu toàn diện chiều sâu tiếp biến tự chủ của Việt Nam trong không gian Đông Á qua chữ Nôm, sử học, Thiền Trúc Lâm, hoàng thành Huế – Thăng Long, thơ đi sứ và Nam Dược.',
      descEn: 'Examine Vietnam\'s sovereign cultural dialogue within East Asia across Chu Nom, historiography, Truc Lam Zen, imperial capitals, envoy poetry, and Nam Duoc medicine.',
      steps: [
        S(1, 'article', 'chu-nom-liushu-script-dialogue', 'Chữ Nôm & Đối thoại Lục thư với Chữ Hán', 'Chu Nom & Liushu Script Dialogue', 'Hiểu cách người Việt làm chủ cấu trúc chữ Hán để tạo văn tự dân tộc.', 'See how Vietnamese scholars adapted Liushu principles to forge Chu Nom.'),
        S(2, 'classic', 'daiviet-suky-toanthu', 'Cổ tịch Sử bộ: Đại Việt Sử Ký Toàn Thư', 'Classic (Shi): Complete Annals of Dai Viet', 'Đọc nguyên văn chính sử khẳng định quốc thống độc lập Đại Việt.', 'Read primary annals asserting Dai Viet\'s co-equal sovereign lineage.'),
        S(3, 'article', 'east-asian-historiography-shiji-toanthu', 'Sử học Đông Á: Từ Sử Ký đến Toàn Thư', 'East Asian Historiography: Shiji to Toan Thu', 'So sánh Kỷ truyện thể, Biên niên thể và tinh thần trực bút.', 'Compare biographical versus chronological formats and historian ethics.'),
        S(4, 'article', 'imperial-palace-axes-beijing-thanglong-hue', 'Trục Hoàng cung: Bắc Kinh – Thăng Long – Huế', 'Imperial Palace Axes: Beijing, Thang Long & Hue', 'Phân biệt ngữ pháp chung Đông Á và sáng tạo bản địa Việt Nam.', 'Separate shared East Asian urbanism from Vietnamese royal innovation.'),
        S(5, 'article', 'truc-lam-zen-song-yuan-dialogue', 'Thiền phái Trúc Lâm & Thiền Tống – Nguyên', 'Truc Lam Zen & Song-Yuan Chan Dialogue', 'Khám phá tinh thần nhập thế "Cư trần lạc đạo" thời Trần.', 'Explore the engaged Buddhist ethos of Tran-dynasty Truc Lam Zen.'),
        S(6, 'article', 'envoy-poetry-bac-hanh-tap-luc', 'Thơ Đi sứ & Bắc Hành Tạp Lục (Nguyễn Du)', 'Envoy Poetry & Nguyen Du\'s Northern Journey', 'Cảm nhận nghệ thuật bút đàm ngoại giao và nhân văn của sứ thần Đại Việt.', 'Appreciate Literary Sinitic brush-talk diplomacy and humanism.'),
        S(7, 'article', 'bac-y-nam-duoc-comparative-medicine', 'Đối chiếu Bắc Y & Nam Dược (Tuệ Tĩnh – Lãn Ông)', 'Comparative Medicine: Northern vs Southern Herbs', 'Hiểu tôn chỉ "Nam dược trị Nam nhân" dưới góc nhìn sinh thái nhiệt đới.', 'Understand localized tropical pharmacology and medical ethics.'),
        S(8, 'article', 'xiqu-stagecraft-face-masks-tuong', 'Hí khúc Kinh Kịch & Nghệ thuật Tuồng Việt Nam', 'Xiqu Stagecraft & Vietnamese Tuong Opera', 'Đối chiếu ngôn ngữ ước lệ sân khấu và hệ màu mặt nạ hai nước.', 'Compare stylized stage conventions and mask color symbolism.'),
        S(9, 'lab', 'quiz-arena-v3', 'Kiểm tra tổng hợp: Trụ cột Việt – Trung & Lục thư', 'Lab: Quiz Arena Sino-Vietnamese & Liushu Pillars', 'Củng cố kiến thức qua bộ câu hỏi trắc nghiệm học thuật.', 'Test mastery through academic multiple-choice verification.')
      ]
    },
    {
      id: 'track-06-trade-supply-chain-customs-b2b',
      titleVi: 'Lộ trình 6: Thương mại, Chuỗi cung ứng, Hải quan & Đàm phán B2B',
      titleEn: 'Track 6: Trade, Supply Chains, Customs & B2B Negotiation',
      descVi: 'Kết nối chiều sâu văn hóa thương nhân lịch sử (Huy Thương, Tấn Thương) với thực chiến thương mại hiện đại: RCEP/ACFTA 3.0, GACC 248/249, hội chợ, cụm công nghiệp và pháp chế hợp đồng.',
      descEn: 'Bridge historic merchant guilds with modern Sino-Vietnamese trade practice: RCEP/ACFTA 3.0, GACC Decrees 248/249, trade fairs, clusters, and B2B contract law.',
      steps: [
        S(1, 'article', 'ten-merchant-guilds-huizhou-shanxi', 'Thập Đại Thương Bang: Huy Thương & Tấn Thương', 'Ten Merchant Guilds: Huizhou & Shanxi', 'Tìm hiểu di sản quản trị tín nhiệm, Phiếu hiệu và cổ phần Thân cổ.', 'Learn historical trust governance, draft banking, and managerial equity.'),
        S(2, 'article', 'merchant-ethics-xin-yi-li', 'Đạo đức Nho thương: Tín – Nghĩa – Lợi', 'Confucian Merchant Ethics: Xin, Yi & Li', 'Hiểu nền tảng văn hóa đằng sau Guanxi và uy tín dài hạn.', 'Grasp the cultural foundation behind Guanxi and long-term trust.'),
        S(3, 'article', 'china-trade-fairs-canton-ciie-yiwu-guide', 'Hệ thống Hội chợ: Canton Fair, CIIE, Nghĩa Ô & Nghiệm xưởng', 'Trade Fairs: Canton, CIIE, Yiwu & Factory Audits', 'Phân biệt chức năng 3 hội chợ lớn và quy trình thẩm định nhà máy.', 'Match sourcing goals to major fairs and execute rigorous factory audits.'),
        S(4, 'article', 'rcep-acfta-cumulation-rules-vietnam', 'Quy tắc Xuất xứ RCEP vs ACFTA 3.0 (Form E)', 'RCEP vs ACFTA 3.0 Rules of Origin & Cumulation', 'Nắm WO, RVC 40%, CTC/CTH và lợi thế cộng gộp 15 nước.', 'Master WO, RVC 40%, CTC/CTH, and 15-member cumulation strategy.'),
        S(5, 'article', 'gacc-decree-248-249-vietnam-agri-export', 'Lệnh 248/249 GACC & Nông sản Chính ngạch', 'GACC Decrees 248/249 & Formal Agri-Exports', 'Hiểu phân tầng 18 nhóm hàng CIFER, PUC và PHC xuất khẩu nông sản.', 'Navigate CIFER registration tiers, orchard PUC, and packing-house PHC.'),
        S(6, 'article', 'chinese-enterprises-globalization-playbook', 'Chiến lược Toàn cầu hóa (OEM → OBM & China+1)', 'Chinese Corporate Globalization Playbook', 'Phân tích mô hình LLL và dịch chuyển cụm chuỗi cung ứng sang Đông Nam Á.', 'Analyze LLL upgrading and multi-node supply-chain relocation.'),
        S(7, 'article', 'cross-border-b2b-contracts-cietac-viac', 'Pháp chế Hợp đồng B2B: Công chương & CIETAC/VIAC', 'Cross-Border B2B Contracts: Chop & Arbitration', 'Nắm 4 hàng rào pháp lý bắt buộc trước khi đặt cọc giao dịch.', 'Master corporate chops, prevailing language, QC, and arbitration clauses.'),
        S(8, 'lab', 'biz-expansion-v3', 'Thực hành: 12 Cụm Công nghiệp & 8 Kịch bản Đàm phán B2B', 'Lab: 12 Industrial Clusters & 8 B2B Scenarios', 'Rèn phản xạ xử lý bàn tiệc Hoa Bắc và đàm phán thực dụng Hoa Nam.', 'Practice Northern banquet protocol and Southern pragmatic negotiation.'),
        S(9, 'lab', 'survival-packs-v3', 'Thực hành: Gói Sinh tồn Hội chợ Quảng Châu & Hải quan', 'Lab: Canton Factory & Customs Survival Packs', 'Áp dụng ngay 72 mẫu câu tác nghiệp thực địa song ngữ Việt – Trung – Anh.', 'Apply field-ready bilingual survival phrases for factories and customs.')
      ]
    }
  ];

  var existing = {};
  var i;
  for (i = 0; i < window.CCE_GUIDED_TRACKS_V3.length; i++) {
    if (window.CCE_GUIDED_TRACKS_V3[i] && window.CCE_GUIDED_TRACKS_V3[i].id) {
      existing[window.CCE_GUIDED_TRACKS_V3[i].id] = true;
    }
  }
  for (i = 0; i < TRACKS.length; i++) {
    if (!existing[TRACKS[i].id]) {
      window.CCE_GUIDED_TRACKS_V3.push(TRACKS[i]);
      existing[TRACKS[i].id] = true;
    }
  }
})();
