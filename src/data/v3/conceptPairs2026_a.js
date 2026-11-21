(function () {
  'use strict';

  window.CCE_CONCEPT_PAIRS_V3 = window.CCE_CONCEPT_PAIRS_V3 || [];

  var PAIRS_A = [
    {
      id: 'pair-01-ren-vs-dao',
      category: 'philosophy',
      termA_Vi: 'Nhân (Nho gia)',
      termA_Zh: '仁',
      termA_En: 'Ren (Humaneness / Benevolence)',
      termB_Vi: 'Đạo (Đạo gia)',
      termB_Zh: '道',
      termB_En: 'Dao (The Way / Cosmic Order)',
      originalDefVi: 'Nhân trong Luận Ngữ là tình yêu thương con người có thứ bậc khởi nguồn từ hiếu đễ (Khắc kỷ phục lễ vi nhân). Đạo trong Đạo Đức Kinh là bản thể vận hành tự nhiên vô hình sinh thành vạn vật (Đạo pháp tự nhiên).',
      originalDefEn: 'In the Analects, Ren denotes graded humaneness rooted in filial reciprocity; in the Daodejing, Dao designates the ineffable self-so cosmic process generating all things.',
      sourceText: '《论语·颜渊》 / 《道德经》第二十五章',
      coreDiffVi: 'Nhân đặt trọng tâm vào đạo đức nhân luân và nhập thế kiến tạo xã hội; Đạo đặt trọng tâm vào bản thể vũ trụ và thuận theo quy luật tự nhiên vượt ngoài quy phạm nhân tạo.',
      coreDiffEn: 'Ren centers on interpersonal ethics and social engagement; Dao centers on cosmic ontology and spontaneous alignment beyond artificial conventions.',
      modernAppVi: 'Bổ trợ nhau trong quản trị và dưỡng sinh: lấy Nhân làm chuẩn mực trách nhiệm cộng đồng, lấy Đạo làm tư duy hệ thống và cân bằng dài hạn.',
      modernAppEn: 'Complementary in modern leadership and well-being: Ren anchors civic ethics while Dao guides systemic balance and non-coercive strategy.'
    },
    {
      id: 'pair-02-li-vs-fa',
      category: 'philosophy',
      termA_Vi: 'Lễ (Đức trị · Nho gia)',
      termA_Zh: '礼',
      termA_En: 'Li (Ritual Propriety)',
      termB_Vi: 'Pháp (Pháp trị · Pháp gia)',
      termB_Zh: '法',
      termB_En: 'Fa (Codified Law / Penal Statute)',
      originalDefVi: 'Lễ là hệ thống nghi thức, chuẩn mực luân lý tự giác nhằm điều hòa trật tự xã hội từ bên trong; Pháp là luật lệ thành văn công khai, thưởng phạt nghiêm minh bất kể thân sơ (Hàn Phi Tử).',
      originalDefEn: 'Li represents internalized ritual norms cultivating voluntary harmony, whereas Fa represents explicit public statutes enforced uniformly regardless of rank (Hanfeizi).',
      sourceText: '《礼记·曲礼》 / 《韩非子·有度》',
      coreDiffVi: 'Lễ cảm hóa trước khi sai phạm xảy ra và phân biệt tôn ti thân sơ; Pháp răn đe bằng chế tài khách quan và áp dụng đồng nhất cho mọi đối tượng.',
      coreDiffEn: 'Li prevents transgression through moral cultivation and relational roles; Fa deters misconduct through impersonal, standardized enforcement.',
      modernAppVi: 'Mô hình quản trị doanh nghiệp hiện đại kết hợp cả hai: văn hóa tổ chức và đạo đức nghề nghiệp (Lễ) song hành với quy chế tuân thủ và hợp đồng minh bạch (Pháp).',
      modernAppEn: 'Modern corporate governance integrates both: organizational ethics and culture (Li) paired with auditable compliance frameworks and contracts (Fa).'
    },
    {
      id: 'pair-03-junzi-vs-shengren',
      category: 'philosophy',
      termA_Vi: 'Quân tử',
      termA_Zh: '君子',
      termA_En: 'Junzi (Exemplary Person)',
      termB_Vi: 'Thánh nhân',
      termB_Zh: '圣人',
      termB_En: 'Shengren (Sage)',
      originalDefVi: 'Quân tử vốn chỉ tầng lớp quý tộc, được Khổng Tử chuyển hóa thành mẫu người tu dưỡng nhân nghĩa có thể phấn đấu đạt tới; Thánh nhân là bậc đại giác đạt tới cảnh giới đức trí viên mãn, hóa dục vạn vật.',
      originalDefEn: 'Originally denoting nobility, Junzi was redefined by Confucius as an attainable moral exemplar; Shengren represents the perfected sage whose wisdom harmonizes Heaven and humanity.',
      sourceText: '《论语·雍也》 / 《孟子·尽心下》',
      coreDiffVi: 'Quân tử là mục tiêu tu thân thực tiễn mà mọi sĩ phu đều có thể rèn luyện hằng ngày; Thánh nhân là lý tưởng tối cao hiếm có trong lịch sử như Nghiêu, Thuấn, Chu Công.',
      coreDiffEn: 'Junzi is a practical daily ethical standard accessible through cultivation; Shengren is a rare historical apex exemplified by Yao, Shun, and the Duke of Zhou.',
      modernAppVi: 'Tạo nên tinh thần tự hoàn thiện không ngừng trong giáo dục khai phóng và lãnh đạo chính trực mà không rơi vào chủ nghĩa hoàn hảo bất khả thi.',
      modernAppEn: 'Inspires continuous ethical self-cultivation in education and leadership without demanding unattainable perfection.'
    },
    {
      id: 'pair-04-zhuxi-vs-wangyangming',
      category: 'philosophy',
      termA_Vi: 'Lý học Chu Hy (Trình – Chu)',
      termA_Zh: '程朱理学',
      termA_En: 'Cheng-Zhu School of Principle (Lixue)',
      termB_Vi: 'Tâm học Vương Dương Minh (Lục – Vương)',
      termB_Zh: '陆王心学',
      termB_En: 'Lu-Wang School of Mind (Xinxue)',
      originalDefVi: 'Chu Hy chủ trương "Tính tức Lý" và "Cách vật trí tri" — khảo sát sự vật và kinh điển bên ngoài để thấu hiểu Thiên lý; Vương Dương Minh chủ trương "Tâm tức Lý", "Trí lương tri" và "Tri hành hợp nhất".',
      originalDefEn: 'Zhu Xi taught "Nature is Principle" and "investigating things" (gewu) to apprehend cosmic order; Wang Yangming taught "Mind is Principle", "extending innate moral knowing", and "unity of knowledge and action".',
      sourceText: '《四书章句集注》 / 《传习录》',
      coreDiffVi: 'Lý học đi từ tri thức khách quan bên ngoài vào nội tâm (tiên tri hậu hành); Tâm học đi từ lương tri chủ thể trực tiếp hiện thực hóa qua hành động (tri hành hợp nhất).',
      coreDiffEn: 'Lixue moves from external scholarly inquiry inward; Xinxue activates innate moral consciousness directly through committed action.',
      modernAppVi: 'Gợi mở sự cân bằng giữa nghiên cứu thực nghiệm dựa trên dữ liệu (Cách vật) và năng lực thực thi quyết đoán gắn với đạo đức chủ thể (Tri hành hợp nhất).',
      modernAppEn: 'Frames the balance between empirical evidence-based study (gewu) and decisive ethical execution (unity of knowledge and action).'
    },
    {
      id: 'pair-05-tianming-vs-wuwei',
      category: 'philosophy',
      termA_Vi: 'Thiên mệnh',
      termA_Zh: '天命',
      termA_En: 'Tianming (Mandate of Heaven)',
      termB_Vi: 'Vô vi',
      termB_Zh: '无为',
      termB_En: 'Wuwei (Effortless / Non-Coercive Action)',
      originalDefVi: 'Thiên mệnh khởi phát từ nhà Chu nhằm biện minh tính chính danh đạo đức của quyền cai trị (Hoàng thiên vô thân, duy đức thị phụ); Vô vi là nguyên tắc trị quốc và ứng thế không cưỡng ép trái quy luật tự nhiên.',
      originalDefEn: 'Tianming emerged under the Zhou to ground political legitimacy in moral virtue; Wuwei denotes governance and action free from coercive interference against natural rhythms.',
      sourceText: '《尚书·蔡仲之命》 / 《道德经》第三十七章',
      coreDiffVi: 'Thiên mệnh nhấn mạnh trách nhiệm lịch sử và tính chính danh có điều kiện của người cầm quyền; Vô vi nhấn mạnh giảm thiểu can thiệp cưỡng bức để hệ thống tự vận hành hài hòa.',
      coreDiffEn: 'Tianming stresses conditional moral accountability in leadership; Wuwei stresses minimizing forced intervention so systems self-regulate smoothly.',
      modernAppVi: 'Trong quản trị công và tổ chức, Thiên mệnh tương ứng với tính chính danh và tín nhiệm xã hội, còn Vô vi gợi ý thiết kế cơ chế khuyến khích tự vận hành thay vì vi quản lý.',
      modernAppEn: 'In governance, Tianming parallels institutional legitimacy and public trust, while Wuwei parallels incentive-aligned design over micromanagement.'
    },
    {
      id: 'pair-06-nho-trung-hoa-vs-dai-viet',
      category: 'sino-viet',
      termA_Vi: 'Nho học Trung Hoa',
      termA_Zh: '中华儒学',
      termA_En: 'Chinese Confucianism',
      termB_Vi: 'Nho học Đại Việt',
      termB_Zh: '大越儒学',
      termB_En: 'Dai Viet Confucianism',
      originalDefVi: 'Nho học Trung Hoa phát triển liên tục qua các trường phái Hán học, Tống Nho, Tâm học Minh và Khảo chứng học Thanh; Nho học Đại Việt tiếp nhận chọn lọc từ thời Lý – Trần – Lê Sơ, kết hợp chặt với ý thức độc lập dân tộc và tập quán làng xã.',
      originalDefEn: 'Chinese Confucianism evolved through Han exegesis, Song Neo-Confucianism, Ming Xinxue, and Qing evidential scholarship; Dai Viet Confucianism adapted classical institutions while integrating national sovereignty and village customs.',
      sourceText: '《四书五经》 / 《大越史记全书》 · 《洪德律》',
      coreDiffVi: 'Nho học Đại Việt thực dụng và linh hoạt hơn trong Luật Hồng Đức (bảo vệ quyền thừa kế của phụ nữ rõ hơn luật Minh – Thanh) và song hành với tín ngưỡng thờ Thành hoàng, Mẫu và Thiền Trúc Lâm.',
      coreDiffEn: 'Dai Viet Confucianism remained more pragmatic—notably protecting women\'s property rights in the Hong Duc Code—and coexisted closely with village tutelary cults and Truc Lam Zen.',
      modernAppVi: 'Giải thích vì sao Việt Nam và Trung Quốc chia sẻ nhiều giá trị hiếu học và tôn sư trọng đạo nhưng vẫn có sắc thái ứng xử gia đình và cộng đồng khác biệt rõ rệt.',
      modernAppEn: 'Explains why Vietnam and China share scholarly reverence and filial values while preserving distinct family and community norms.'
    },
    {
      id: 'pair-07-bac-y-vs-nam-duoc',
      category: 'sino-viet',
      termA_Vi: 'Bắc Y (Trung y dược)',
      termA_Zh: '北医（中医药）',
      termA_En: 'Northern Medicine (Traditional Chinese Medicine)',
      termB_Vi: 'Nam Dược (Y học Cổ truyền Việt Nam)',
      termB_Zh: '南药（越南传统医药）',
      termB_En: 'Southern Medicine (Vietnamese Traditional Medicine)',
      originalDefVi: 'Bắc Y xây dựng trên nền tảng Hoàng Đế Nội Kinh, Thương Hàn Luận và hệ dược liệu ôn đới phương Bắc; Nam Dược do Tuệ Tĩnh và Hải Thượng Lãn Ông hệ thống hóa với tôn chỉ "Nam dược trị Nam nhân".',
      originalDefEn: 'Northern Medicine rests on the Huangdi Neijing, Shanghan Lun, and temperate-climate materia medica; Southern Medicine, systematized by Tue Tinh and Hai Thuong Lan Ong, centers on "Southern herbs for Southern people".',
      sourceText: '《黄帝内经》 / 《南药神效》 · 《海上医宗心领》',
      coreDiffVi: 'Bắc Y thiên về phép biện chứng tạng phủ và vị thuốc vùng ôn đới; Nam Dược tối ưu hóa dược liệu nhiệt đới gió mùa bản địa (như tía tô, kinh giới, sả, nghệ, gừng) phù hợp thể chất và bệnh lý nhiệt thấp vùng Nam.',
      coreDiffEn: 'Northern Medicine draws on temperate herbs and classical formulas; Southern Medicine adapts theory to humid tropical flora and local constitutions.',
      modernAppVi: 'Thúc đẩy nghiên cứu chuẩn hóa dược liệu bản địa theo chuẩn thực hành tốt (GACP-WHO) và kết hợp y học cổ truyền với y học hiện đại.',
      modernAppEn: 'Guides modern pharmacological standardization of indigenous herbs alongside evidence-based integrative medicine.'
    },
    {
      id: 'pair-08-chu-han-vs-chu-nom',
      category: 'language',
      termA_Vi: 'Chữ Hán',
      termA_Zh: '汉字',
      termA_En: 'Hanzi (Chinese Characters)',
      termB_Vi: 'Chữ Nôm',
      termB_Zh: '喃字',
      termB_En: 'Chu Nom (Vietnamese Demotic Script)',
      originalDefVi: 'Chữ Hán là văn tự biểu ý – hình thanh hình thành từ Giáp cốt văn dùng ghi tiếng Hán và văn ngôn Đông Á; Chữ Nôm là hệ văn tự do người Việt sáng tạo dựa trên nguyên lý Lục thư của chữ Hán để ghi âm tiếng Việt thuần.',
      originalDefEn: 'Hanzi is the logographic script originating in oracle-bone inscriptions for Chinese and Literary Sinitic; Chu Nom is the Vietnamese script devised using Hanzi structural principles to write vernacular Vietnamese.',
      sourceText: '《说文解字》 / 《国音诗集》 · 《金云翘传》',
      coreDiffVi: 'Chữ Hán có chuẩn hóa tự điển triều đình thống nhất qua nhiều thiên niên kỷ; Chữ Nôm giàu tính sáng tạo địa phương (như ghép hai chữ Hán: một biểu nghĩa, một biểu âm Việt như 𡗶 = 天+上 đọc là "trời") và ít chịu cưỡng chế chuẩn hóa nhà nước.',
      coreDiffEn: 'Hanzi underwent millennia of imperial standardization; Chu Nom featured flexible vernacular compounding (combining semantic and phonetic Han components) with diverse orthographic variants.',
      modernAppVi: 'Nghiên cứu song song chữ Hán và chữ Nôm giúp giải mã trực tiếp bia đá, gia phả, văn bản hành chính cổ và văn học trung đại Việt Nam.',
      modernAppEn: 'Parallel literacy in Hanzi and Chu Nom unlocks Vietnamese steles, genealogies, archival decrees, and classical vernacular literature.'
    },
    {
      id: 'pair-09-dougong-vs-ke-chuyen',
      category: 'architecture',
      termA_Vi: 'Đấu Củng (Kiến trúc Gỗ Trung Hoa)',
      termA_Zh: '斗拱',
      termA_En: 'Dougong (Interlocking Bracket Sets)',
      termB_Vi: 'Kẻ chuyền / Chồng rường (Đình làng Việt)',
      termB_Zh: '越南亭堂梁架结构',
      termB_En: 'Ke Chuyen / Chong Ruong (Vietnamese Timber Framing)',
      originalDefVi: 'Đấu Củng là cụm đấu vuông và củng cong xếp tầng tại đầu cột cung điện Trung Hoa giúp đỡ mái hiên vươn xa và giảm chấn động đất; Kẻ chuyền và Chồng rường là hệ liên kết xà – bẩy – kẻ uốn lượn đặc trưng của đình chùa Việt Nam.',
      originalDefEn: 'Dougong are tiered interlocking wooden brackets atop Chinese palace columns supporting deep eaves and absorbing seismic shock; Ke Chuyen and Chong Ruong are curved tie-beam timber trusses defining Vietnamese communal halls.',
      sourceText: '《营造法式》 / Di sản Đình Tây Đằng · Đình Bảng',
      coreDiffVi: 'Đấu Củng chuẩn hóa thành mô-đun cấp bậc (tài phân 材分) mang tính uy nghi cung đình; Kẻ chuyền đình Việt thanh thoát, chạm khắc rồng phượng sinh hoạt dân gian trực tiếp lên thân kẻ và tạo mái đao cong mềm mại.',
      coreDiffEn: 'Dougong evolved into modular rank-coded palace units; Vietnamese Ke Chuyen favors fluid carved rafters directly integrating structural beams with folk relief sculpture.',
      modernAppVi: 'Cả hai đều truyền cảm hứng cho kiến trúc gỗ bền vững không dùng đinh thép và kỹ thuật bảo tồn di tích bằng mô hình hóa 3D.',
      modernAppEn: 'Both inspire nail-free sustainable timber architecture and 3D digital heritage conservation.'
    },
    {
      id: 'pair-10-qinglv-vs-shuimo',
      category: 'arts',
      termA_Vi: 'Thanh Lục Sơn Thủy',
      termA_Zh: '青绿山水',
      termA_En: 'Blue-and-Green Landscape Painting',
      termB_Vi: 'Thủy Mặc Văn Nhân',
      termB_Zh: '文人水墨山水',
      termB_En: 'Literati Ink-Wash Landscape Painting',
      originalDefVi: 'Thanh Lục Sơn Thủy sử dụng khoáng sắc thạch thanh và thạch lục rực rỡ với nét công bút tỉ mỉ (tiêu biểu là Thiên Lý Giang Sơn Đồ của Vương Hy Mạnh); Thủy Mặc Văn Nhân chỉ dùng mực nho đậm nhạt trên giấy tuyên để truyền tải tâm cảnh.',
      originalDefEn: 'Blue-and-green landscapes employ rich azurite and malachite mineral pigments with meticulous brushwork (e.g., Wang Ximeng\'s A Thousand Li of Rivers and Mountains); literati ink-wash uses monochrome ink gradations to express inner cultivation.',
      sourceText: '王希孟《千里江山图》 / 黄公望《富春山居图》',
      coreDiffVi: 'Thanh Lục gắn với mỹ học cung đình rực rỡ, tráng lệ và trường tồn vật chất; Thủy Mặc gắn với mỹ học văn nhân Đạm bạc, Lưu bạch và tinh thần "ý tại bút tiên".',
      coreDiffEn: 'Blue-and-green embodies imperial splendor and mineral brilliance; ink-wash embodies scholar-official restraint, negative space (liubai), and spontaneous brushwork.',
      modernAppVi: 'Định hình hai trường phái thị giác đối lập nhưng bổ sung trong thiết kế triển lãm bảo tàng, điện ảnh lịch sử và nghệ thuật đồ họa đương đại.',
      modernAppEn: 'Defines two complementary visual languages across modern museum exhibition design, historical cinema, and graphic art.'
    },
    {
      id: 'pair-11-guanxi-vs-mianzi',
      category: 'business',
      termA_Vi: 'Quan hệ (Guanxi)',
      termA_Zh: '关系',
      termA_En: 'Guanxi (Reciprocal Relational Network)',
      termB_Vi: 'Thể diện (Mianzi)',
      termB_Zh: '面子',
      termB_En: 'Mianzi (Social Prestige / Face)',
      originalDefVi: 'Quan hệ (Guanxi) là mạng lưới tín nhiệm và nghĩa vụ có đi có lại (nhân tình 人情) xây dựng qua thời gian; Thể diện (Mianzi) là uy tín, vị thế xã hội và sự công nhận mà một cá nhân nắm giữ trước cộng đồng.',
      originalDefEn: 'Guanxi is a long-term network of interpersonal trust and reciprocal obligation (renqing); Mianzi is the social prestige, dignity, and public standing an individual holds before others.',
      sourceText: '费孝通《乡土中国》 / 林语堂《吾国与吾民》',
      coreDiffVi: 'Guanxi là cấu trúc mạng lưới kết nối giúp mở cửa cơ hội và giảm ma sát thông tin; Mianzi là "đồng tiền danh dự" điều tiết hành vi giao tiếp (cho thể diện, giữ thể diện, tránh làm mất thể diện).',
      coreDiffEn: 'Guanxi is the relational infrastructure unlocking access and trust; Mianzi is the currency of dignity governing interpersonal conduct and negotiation etiquette.',
      modernAppVi: 'Trong đàm phán B2B, xây dựng Guanxi hợp pháp giúp đối tác ưu tiên hỗ trợ khi chuỗi cung ứng biến động, còn bảo vệ Mianzi giúp hóa giải bất đồng mà không phá vỡ hợp đồng.',
      modernAppEn: 'In B2B trade, ethical Guanxi secures priority support during disruptions, while safeguarding Mianzi resolves deadlocks without burning bridges.'
    },
    {
      id: 'pair-12-acfta-forme-vs-rcep',
      category: 'business',
      termA_Vi: 'ACFTA · C/O Form E',
      termA_Zh: '中国—东盟自贸区（Form E）',
      termA_En: 'ACFTA (C/O Form E)',
      termB_Vi: 'RCEP · C/O mẫu RCEP',
      termB_Zh: '区域全面经济伙伴关系协定（RCEP）',
      termB_En: 'RCEP (Certificate / Declaration of Origin)',
      originalDefVi: 'ACFTA là khu vực thương mại tự do giữa 10 nước ASEAN và Trung Quốc (nâng cấp lên 3.0) sử dụng C/O Form E; RCEP là hiệp định 15 nước (ASEAN + 5 đối tác Trung, Nhật, Hàn, Úc, New Zealand) có hiệu lực từ 2022.',
      originalDefEn: 'ACFTA links the 10 ASEAN states and China (upgraded toward 3.0) using C/O Form E; RCEP unites 15 Asia-Pacific members (ASEAN plus China, Japan, South Korea, Australia, and New Zealand) since 2022.',
      sourceText: '《中国—东盟全面经济合作框架协议》 / 《区域全面经济伙伴关系协定》',
      coreDiffVi: 'ACFTA có lộ trình cắt giảm thuế sâu đã triển khai nhiều năm nhưng chỉ cộng gộp nguyên liệu ASEAN – Trung Quốc; RCEP mở rộng cộng gộp sang nguyên liệu Nhật, Hàn, Úc, New Zealand nhưng cần lưu ý Quy tắc Khác biệt Thuế quan (Điều 2.6).',
      coreDiffEn: 'ACFTA offers mature deep tariff elimination limited to ASEAN-China cumulation; RCEP enables 15-member cumulation including Japanese and Korean inputs but requires checking Article 2.6 Tariff Differentials.',
      modernAppVi: 'Doanh nghiệp xuất nhập khẩu Việt – Trung so sánh đồng thời hai biểu thuế và định mức BOM để chọn chứng từ xuất xứ tối ưu cho từng mã HS cụ thể (cần đối chiếu biểu thuế hiện hành của cơ quan hải quan).',
      modernAppEn: 'Vietnam-China traders compare both schedules and BOM structures to select the optimal origin certificate per HS code (always verifying prevailing customs tariffs).'
    }
  ];

  var existing = {};
  var i;
  for (i = 0; i < window.CCE_CONCEPT_PAIRS_V3.length; i++) {
    if (window.CCE_CONCEPT_PAIRS_V3[i] && window.CCE_CONCEPT_PAIRS_V3[i].id) {
      existing[window.CCE_CONCEPT_PAIRS_V3[i].id] = true;
    }
  }
  for (i = 0; i < PAIRS_A.length; i++) {
    if (!existing[PAIRS_A[i].id]) {
      window.CCE_CONCEPT_PAIRS_V3.push(PAIRS_A[i]);
      existing[PAIRS_A[i].id] = true;
    }
  }
})();
