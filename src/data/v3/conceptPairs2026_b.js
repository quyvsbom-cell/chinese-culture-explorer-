(function () {
  'use strict';

  window.CCE_CONCEPT_PAIRS_V3 = window.CCE_CONCEPT_PAIRS_V3 || [];

  var PAIRS_B = [
    {
      id: 'pair-13-fengjian-vs-junxian',
      category: 'history',
      termA_Vi: 'Chế độ Phong kiến (Tây Chu)',
      termA_Zh: '分封制',
      termA_En: 'Fenfeng (Zhou Enfeoffment System)',
      termB_Vi: 'Chế độ Quận huyện (Tần – Hán)',
      termB_Zh: '郡县制',
      termB_En: 'Junxian (Commandery-County Bureaucracy)',
      originalDefVi: 'Phân phong là chế độ thiên tử Tây Chu chia đất phong tước cha truyền con nối cho tông thất và công thần; Quận huyện là hệ thống hành chính trung ương tập quyền do Tần Thủy Hoàng áp dụng toàn quốc năm 221 TCN, quan lại do triều đình bổ nhiệm và bãi miễn.',
      originalDefEn: 'Fenfeng granted hereditary fiefs to royal kin and allies under the Western Zhou; Junxian replaced hereditary domains nationwide in 221 BCE under Qin Shi Huang with centrally appointed, removable officials.',
      sourceText: '《左传》 / 《史记·秦始皇本纪》',
      coreDiffVi: 'Phân phong dựa trên huyết thống tông pháp và quyền tự trị chư hầu; Quận huyện dựa trên hành chính quan liêu phi thế tập trực thuộc hoàng đế.',
      coreDiffEn: 'Fenfeng rested on kinship lineage and regional autonomy; Junxian established non-hereditary bureaucratic administration under central authority.',
      modernAppVi: 'Kiến trúc Quận huyện đặt nền móng hơn 2.200 năm cho quản trị hành chính địa phương thống nhất tại Trung Quốc và mô hình châu – huyện tại Việt Nam.',
      modernAppEn: 'Junxian laid a 2,200-year foundation for unified provincial-county administration in China and comparable territorial governance in Vietnam.'
    },
    {
      id: 'pair-14-gongbi-vs-xieyi',
      category: 'arts',
      termA_Vi: 'Công bút (Tả thực tinh tế)',
      termA_Zh: '工笔',
      termA_En: 'Gongbi (Meticulous Realism)',
      termB_Vi: 'Tả ý (Phóng khoáng truyền thần)',
      termB_Zh: '写意',
      termB_En: 'Xieyi (Expressive Freehand Brushwork)',
      originalDefVi: 'Công bút là kỹ pháp vẽ nét mảnh đều, tô nhiều lớp màu tỉ mỉ tái hiện chính xác hình thể; Tả ý là lối vẽ ít nét, phóng khoáng bằng bút mực linh hoạt để nắm bắt thần thái và tâm ý thay vì chi tiết bề mặt.',
      originalDefEn: 'Gongbi employs fine, disciplined line work and layered pigment washes for exact detail; Xieyi uses economical, spontaneous ink strokes to capture inner spirit rather than surface likeness.',
      sourceText: '张彦远《历代名画记》 / 苏轼题画诗',
      coreDiffVi: 'Công bút đề cao kỹ nghệ điêu luyện, hình chuẩn xác (hình tự 形似); Tả ý đề cao khí vận, thần thái và cá tính bút pháp (thần tự 神似).',
      coreDiffEn: 'Gongbi prioritizes technical precision and formal likeness (xingsi); Xieyi prioritizes rhythmic vitality and spiritual resonance (shensi).',
      modernAppVi: 'Trong thiết kế thị giác đương đại, Công bút tương ứng minh họa khoa học – bảo tồn chi tiết, còn Tả ý truyền cảm hứng cho nghệ thuật tối giản và nhận diện thương hiệu giàu bản sắc.',
      modernAppEn: 'In contemporary visual design, Gongbi parallels detailed illustration while Xieyi inspires minimalist art direction and expressive branding.'
    },
    {
      id: 'pair-15-kaishu-vs-caoshu',
      category: 'arts',
      termA_Vi: 'Khải thư (Chân thư)',
      termA_Zh: '楷书',
      termA_En: 'Kaishu (Regular Script)',
      termB_Vi: 'Thảo thư',
      termB_Zh: '草书',
      termB_En: 'Caoshu (Cursive Script)',
      originalDefVi: 'Khải thư định hình hoàn chỉnh thời Ngụy – Tấn – Đường với kết cấu vuông vức, nét gãy gọn chuẩn mực làm thước đo giáo dục và in ấn; Thảo thư tỉnh lược và nối liền nét theo tiết tấu khí mạch cao độ để biểu đạt cảm xúc.',
      originalDefEn: 'Kaishu matured across the Wei, Jin, and Tang eras with crisp square geometry serving as the standard script for education and printing; Caoshu abbreviates and links strokes into fluid rhythmic expression.',
      sourceText: '颜真卿《多宝塔碑》 / 怀素《自叙帖》',
      coreDiffVi: 'Khải thư ưu tiên tính dễ đọc, trật tự pháp độ và sự đoan trang; Thảo thư ưu tiên tốc độ, nhịp điệu âm nhạc của đường nét và tự do thẩm mỹ.',
      coreDiffEn: 'Kaishu prioritizes legibility, structural balance, and formal discipline; Caoshu prioritizes rhythmic velocity and expressive freedom.',
      modernAppVi: 'Khải thư là nền tảng thiết kế phông chữ đọc văn bản (Serif/Kai), còn Thảo thư tạo chất liệu thị giác cho nghệ thuật trình diễn và thiết kế bìa sách.',
      modernAppEn: 'Kaishu anchors readable digital typography, while Caoshu informs performance calligraphy and editorial cover art.'
    },
    {
      id: 'pair-16-wenyan-vs-baihua',
      category: 'language',
      termA_Vi: 'Văn ngôn văn',
      termA_Zh: '文言文',
      termA_En: 'Wenyan (Classical Literary Chinese)',
      termB_Vi: 'Bạch thoại văn',
      termB_Zh: '白话文',
      termB_En: 'Baihua (Vernacular Written Chinese)',
      originalDefVi: 'Văn ngôn là ngôn ngữ viết cô đọng dựa trên ngữ pháp Tiên Tần – Hán, từng là văn tự hành chính và học thuật chung của toàn vùng Đông Á; Bạch thoại là văn viết sát khẩu ngữ, trở thành chuẩn mực hiện đại sau Phong trào Tân Văn hóa 1919.',
      originalDefEn: 'Wenyan is the concise literary register grounded in pre-Qin and Han syntax that unified East Asian scholarship; Baihua is vernacular written Chinese standardized following the 1919 New Culture Movement.',
      sourceText: '《史记》 / 胡适《文学改良刍议》（1917）',
      coreDiffVi: 'Văn ngôn dùng nhiều từ đơn âm tiết, tinh giản tối đa và tách biệt khẩu ngữ hiện đại; Bạch thoại dùng từ song âm tiết phong phú, cấu trúc câu rõ ràng và phổ cập giáo dục đại chúng.',
      coreDiffEn: 'Wenyan relies on compact monosyllabic syntax detached from modern speech; Baihua uses disyllabic clarity suited to mass literacy and modern science.',
      modernAppVi: 'Tiếng Trung hiện đại viết bằng Bạch thoại nhưng vẫn lồng ghép dày đặc thành ngữ và cấu trúc Văn ngôn trong văn bản ngoại giao, pháp luật và báo chí.',
      modernAppEn: 'Modern Chinese is written in Baihua yet retains dense Wenyan idioms and phrasing across diplomacy, law, and journalism.'
    },
    {
      id: 'pair-17-simplified-vs-traditional',
      category: 'language',
      termA_Vi: 'Chữ Hán Giản thể',
      termA_Zh: '简体字',
      termA_En: 'Simplified Chinese Characters',
      termB_Vi: 'Chữ Hán Phồn thể',
      termB_Zh: '繁体字',
      termB_En: 'Traditional Chinese Characters',
      originalDefVi: 'Giản thể là hệ tự dạng chuẩn hóa tại Trung Quốc Đại lục (từ 1956, hoàn chỉnh qua Bảng chữ Hán thông dụng 2013) bằng cách giảm nét theo tiền lệ thảo thư và tục tự; Phồn thể bảo lưu cấu trúc nét truyền thống sử dụng chính thức tại Đài Loan, Hồng Kông và Ma Cao.',
      originalDefEn: 'Simplified characters were standardized in Mainland China (from 1956, codified in the 2013 Table of General Standard Chinese Characters) by reducing strokes; Traditional characters preserve classical forms used in Taiwan, Hong Kong, and Macau.',
      sourceText: '《通用规范汉字表》（2013） / 《康熙字典》',
      coreDiffVi: 'Giản thể giúp tăng tốc độ viết tay và phổ cập chữ viết nhanh hơn; Phồn thể giữ rõ hơn cấu trúc bộ thủ Lục thư và liên hệ trực tiếp với thư tịch cổ đại.',
      coreDiffEn: 'Simplified forms accelerate handwriting and literacy acquisition; Traditional forms more transparently preserve classical Liushu radicals and archival continuity.',
      modernAppVi: 'Người làm học thuật, thương mại và bản địa hóa phần mềm (zh-CN vs zh-TW) cần đọc thông cả hai hệ chữ cùng khác biệt thuật ngữ vùng miền.',
      modernAppEn: 'Scholars, trade practitioners, and software localizers (zh-CN vs zh-TW) need fluency across both scripts and their regional vocabularies.'
    },
    {
      id: 'pair-18-siheyuan-vs-tulou',
      category: 'architecture',
      termA_Vi: 'Tứ Hợp Viện (Hoa Bắc)',
      termA_Zh: '四合院',
      termA_En: 'Siheyuan (Beijing Courtyard House)',
      termB_Vi: 'Thổ Lâu (Phúc Kiến)',
      termB_Zh: '福建土楼',
      termB_En: 'Fujian Tulou (Earthen Clan Compound)',
      originalDefVi: 'Tứ Hợp Viện là nhà vườn một tầng hình chữ nhật khép kín bốn phía quanh sân trung tâm theo trục Bắc – Nam tại Bắc Kinh; Thổ Lâu là pháo đài nhà ở nhiều tầng bằng tường đất nện dày của người Khách Gia và Mân Nam tại vùng núi Phúc Kiến.',
      originalDefEn: 'Siheyuan is a single-story rectangular courtyard residence arranged along a North-South axis in Beijing; Tulou is a multi-story rammed-earth communal fortress built by Hakka and Minnan clans in mountainous Fujian.',
      sourceText: '北京传统民居规制 / UNESCO World Heritage (Fujian Tulou, 2008)',
      coreDiffVi: 'Tứ Hợp Viện phục vụ gia đình mở rộng đơn lẻ với phân tầng trưởng – thứ rõ ràng theo Chính phòng và Sương phòng; Thổ Lâu phục vụ cả đại tông tộc hàng trăm người với tính phòng thủ tập thể và phân chia phòng đồng đều theo hình tròn.',
      coreDiffEn: 'Siheyuan houses a single extended family with strict hierarchical room allocation; Tulou shelters entire clans in egalitarian circular rings engineered for collective defense.',
      modernAppVi: 'Minh họa hai giải pháp kiến trúc khí hậu bản địa xuất sắc: chắn gió cát mùa đông Hoa Bắc bằng sân kín và điều hòa nhiệt ẩm miền núi bằng tường đất dày.',
      modernAppEn: 'Illustrates two distinct vernacular climate solutions: sheltered winter courtyards in North China versus high-thermal-mass rammed-earth walls in humid southern hills.'
    },
    {
      id: 'pair-19-tang-poetry-vs-song-ci',
      category: 'literature',
      termA_Vi: 'Đường thi (Thi ca Đường)',
      termA_Zh: '唐诗',
      termA_En: 'Tang Shi Poetry',
      termB_Vi: 'Tống từ (Từ khúc Tống)',
      termB_Zh: '宋词',
      termB_En: 'Song Ci Lyric Poetry',
      originalDefVi: 'Đường thi đạt đỉnh cao với thể ngũ ngôn, thất ngôn luật thi và tuyệt cú đều đặn số chữ, giàu hào khí tráng ca (Lý Bạch, Đỗ Phủ, Vương Duy); Tống từ là thể thơ trường đoản cú điền theo từ bài âm nhạc, tinh tế chiều sâu nội tâm (Tô Thức, Lý Thanh Chiếu, Tân Khí Tật).',
      originalDefEn: 'Tang Shi perfected uniform five- and seven-character regulated verse rich in heroic grandeur (Li Bai, Du Fu, Wang Wei); Song Ci set irregular-line lyrics to musical tune patterns exploring intimate emotion (Su Shi, Li Qingzhao, Xin Qiji).',
      sourceText: '《全唐诗》 / 《全宋词》',
      coreDiffVi: 'Đường thi thiên về chí hướng công danh, biên tái và cảnh giới khoáng đạt; Tống từ thiên về sắc thái tâm lý tinh vi, đời sống đô thị và nhịp điệu âm nhạc.',
      coreDiffEn: 'Tang Shi emphasizes public ambition, frontier vistas, and cosmic breadth; Song Ci emphasizes psychological nuance, urban life, and musical cadence.',
      modernAppVi: 'Tạo thành nguồn cảm hứng bất tận cho thi ca Việt Nam trung đại (thơ Đường luật) cũng như âm nhạc, điện ảnh và thẩm mỹ ngôn từ hiện đại.',
      modernAppEn: 'Shaped classical Vietnamese regulated poetry and continues to inspire contemporary music, cinema, and literary aesthetics.'
    },
    {
      id: 'pair-20-shiji-vs-zizhitongjian',
      category: 'history',
      termA_Vi: 'Kỷ truyện thể (Sử Ký)',
      termA_Zh: '纪传体（《史记》）',
      termA_En: 'Biographical-Annals Format (Shiji)',
      termB_Vi: 'Biên niên thể (Tư Trị Thông Giám)',
      termB_Zh: '编年体（《资治通鉴》）',
      termB_En: 'Chronological Format (Zizhi Tongjian)',
      originalDefVi: 'Kỷ truyện thể do Tư Mã Thiên sáng lập trong Sử Ký tổ chức lịch sử theo Bản kỷ, Biểu, Thư, Thế gia và Liệt truyện xoay quanh nhân vật; Biên niên thể do Tư Mã Quang hoàn thiện trong Tư Trị Thông Giám chép sự kiện liên tục theo trục năm tháng để rút bài học trị quốc.',
      originalDefEn: 'Sima Qian\'s Shiji pioneered the biographical-annals format organizing history around emperors, treatises, and individual biographies; Sima Guang\'s Zizhi Tongjian mastered chronological year-by-year synthesis for statecraft lessons.',
      sourceText: '司马迁《史记》 / 司马光《资治通鉴》',
      coreDiffVi: 'Kỷ truyện nổi bật chân dung đa chiều của từng nhân vật và chuyên khảo chế độ; Biên niên nổi bật mạch nhân quả liên tục của các biến cố chính trị – quân sự qua từng năm.',
      coreDiffEn: 'The biographical format excels at vivid character portraits and institutional essays; the chronological format excels at tracing unbroken political-military causality across time.',
      modernAppVi: 'Cả hai cấu trúc vẫn song hành trong sử học Việt Nam (như Đại Việt Sử Ký Toàn Thư theo biên niên) và các hệ thống dữ liệu lịch sử số hiện đại.',
      modernAppEn: 'Both architectures endure in Vietnamese historiography (such as the chronological Dai Viet Su Ky Toan Thu) and modern digital history timelines.'
    },
    {
      id: 'pair-21-huishang-vs-jinshang',
      category: 'business',
      termA_Vi: 'Huy Thương (An Huy)',
      termA_Zh: '徽商',
      termA_En: 'Huizhou Merchants (Huishang)',
      termB_Vi: 'Tấn Thương (Sơn Tây)',
      termB_Zh: '晋商',
      termB_En: 'Shanxi Merchants (Jinshang)',
      originalDefVi: 'Huy Thương là thương bang vùng Huy Châu (An Huy) nổi tiếng với tinh thần "Giả nhi ưu tắc sĩ" (làm buôn gắn liền Nho học), kinh doanh muối, trà, gỗ và mực giấy; Tấn Thương là thương bang Sơn Tây tiên phong lập Phiếu hiệu (ngân hàng hối đoái Nhật Thăng Xương) và tuyến trà Nga – Hoa.',
      originalDefEn: 'Huizhou merchants combined Confucian scholarship with salt, tea, timber, and stationery trade; Shanxi merchants pioneered draft banks (Piaohao such as Rishengchang) and the overland China-Russia tea route.',
      sourceText: '明清徽州文书 / 平遥日昇昌票号史料',
      coreDiffVi: 'Huy Thương mạnh về văn hóa tông tộc, bảo trợ nghệ thuật và tài trợ khoa cử; Tấn Thương mạnh về sáng chế công cụ tài chính xuyên vùng (hối phiếu, kiểm soát nội bộ bằng mật mã và chế độ cổ phần thân cổ 顶身股).',
      coreDiffEn: 'Huishang excelled in lineage solidarity and cultural patronage; Jinshang excelled in interregional financial innovation, coded draft bills, and manager-equity incentives.',
      modernAppVi: 'Cung cấp tiền lệ lịch sử sâu sắc về quản trị tín nhiệm, khuyến khích nhân tài quản lý bằng cổ phần thưởng và xây dựng thương hiệu gắn với văn hóa.',
      modernAppEn: 'Offers historical precedents for trust governance, managerial profit-sharing equity, and culture-anchored brand stewardship.'
    },
    {
      id: 'pair-22-oem-vs-obm',
      category: 'business',
      termA_Vi: 'Gia công OEM',
      termA_Zh: '代工生产（OEM）',
      termA_En: 'OEM (Original Equipment Manufacturing)',
      termB_Vi: 'Thương hiệu Độc lập OBM',
      termB_Zh: '自主品牌（OBM）',
      termB_En: 'OBM (Original Brand Manufacturing)',
      originalDefVi: 'OEM là mô hình nhà máy sản xuất hoàn toàn theo bản vẽ kỹ thuật và gắn nhãn hiệu của đối tác đặt hàng; OBM là mô hình doanh nghiệp tự chủ đồng bộ R&D, thiết kế, sản xuất, sở hữu thương hiệu và mạng lưới phân phối trực tiếp tới người tiêu dùng.',
      originalDefEn: 'OEM manufactures products strictly to a client\'s specifications under the client\'s label; OBM integrates proprietary R&D, design, manufacturing, brand ownership, and end-market distribution.',
      sourceText: '施振荣“微笑曲线”理论（Smiling Curve）',
      coreDiffVi: 'OEM giúp nhanh chóng tích lũy quy mô sản xuất và dòng tiền nhưng biên lợi nhuận mỏng và phụ thuộc đơn hàng; OBM đòi hỏi vốn đầu tư lớn vào R&D và marketing nhưng làm chủ quyền định giá và thị trường.',
      coreDiffEn: 'OEM builds scale and cash flow quickly on thin margins and client dependence; OBM demands heavy R&D and brand investment in exchange for pricing power and market ownership.',
      modernAppVi: 'Là trục phân tích cốt lõi cho hành trình nâng cấp chuỗi giá trị của cả doanh nghiệp Trung Quốc lẫn doanh nghiệp sản xuất xuất khẩu Việt Nam.',
      modernAppEn: 'Forms the central strategic axis for value-chain upgrading among both Chinese and Vietnamese export manufacturers.'
    },
    {
      id: 'pair-23-fob-vs-cif',
      category: 'business',
      termA_Vi: 'FOB (Giao hàng lên tàu)',
      termA_Zh: '装运港船上交货（FOB）',
      termA_En: 'FOB (Free On Board · Incoterms 2020)',
      termB_Vi: 'CIF (Tiền hàng, Bảo hiểm và Cước)',
      termB_Zh: '成本、保险费加运费（CIF）',
      termB_En: 'CIF (Cost, Insurance and Freight · Incoterms 2020)',
      originalDefVi: 'Theo Incoterms 2020, cả FOB và CIF đều dùng cho vận tải đường biển và chuyển giao rủi ro khi hàng đặt an toàn lên boong tàu tại cảng xếp; nhưng FOB để người mua thuê tàu và mua bảo hiểm, còn CIF buộc người bán trả cước biển và mua bảo hiểm tối thiểu (điều kiện C) tới cảng đích.',
      originalDefEn: 'Under Incoterms 2020, both FOB and CIF apply to sea freight and transfer risk when cargo is loaded on board at the port of shipment; under FOB the buyer arranges freight and insurance, whereas under CIF the seller pays ocean freight and minimum Clause C insurance to destination.',
      sourceText: 'ICC Incoterms® 2020 Rules',
      coreDiffVi: 'Người mua Việt Nam chọn FOB (như FOB Thâm Quyến/Ninh Ba) để chủ động hãng tàu và kiểm soát phụ phí cảng đích (Local Charges); chọn CIF tiện báo giá trọn gói nhưng dễ chịu phụ phí địa phương cao từ đại lý chỉ định của người bán.',
      coreDiffEn: 'Vietnamese importers favor FOB to control carrier selection and avoid inflated destination local charges; CIF simplifies quoting but can expose buyers to high seller-nominated agent fees.',
      modernAppVi: 'Hiểu đúng điểm chuyển giao rủi ro (vẫn tại cảng xếp ngay cả khi dùng CIF) giúp doanh nghiệp mua đúng phạm vi bảo hiểm hàng hóa và tránh tranh chấp bồi thường tổn thất biển.',
      modernAppEn: 'Recognizing that risk transfers at the loading port even under CIF prevents cargo-insurance gaps and marine-claim disputes.'
    },
    {
      id: 'pair-24-cietac-vs-viac',
      category: 'business',
      termA_Vi: 'Trọng tài CIETAC (Trung Quốc)',
      termA_Zh: '中国国际经济贸易仲裁委员会（CIETAC）',
      termA_En: 'CIETAC (China International Economic and Trade Arbitration Commission)',
      termB_Vi: 'Trọng tài VIAC (Việt Nam)',
      termB_Zh: '越南国际仲裁中心（VIAC）',
      termB_En: 'VIAC (Vietnam International Arbitration Centre)',
      originalDefVi: 'CIETAC (thành lập 1956, trụ sở Bắc Kinh) là tổ chức trọng tài thương mại quốc tế lớn nhất Trung Quốc; VIAC (thành lập 1993, gắn với VCCI tại Hà Nội và TP.HCM) là trung tâm trọng tài thương mại hàng đầu Việt Nam.',
      originalDefEn: 'CIETAC (founded 1956, headquartered in Beijing) is China\'s largest international commercial arbitration institution; VIAC (founded 1993 in Hanoi and HCMC) is Vietnam\'s premier commercial arbitration center.',
      sourceText: '1958 New York Convention / CIETAC & VIAC Arbitration Rules',
      coreDiffVi: 'Phán quyết CIETAC thi hành trực tiếp thuận lợi hơn nếu tài sản bên phải thi hành nằm tại Trung Quốc (và có thể xin biện pháp khẩn cấp tạm thời tại tòa án Trung Quốc); phán quyết VIAC thuận tiện chi phí và ngôn ngữ cho doanh nghiệp Việt Nam và thi hành ngay trong nước nếu bên vi phạm có tài sản tại Việt Nam.',
      coreDiffEn: 'CIETAC awards enforce domestically in China and facilitate PRC interim asset-preservation orders; VIAC offers lower local costs and direct domestic enforcement when respondent assets sit in Vietnam.',
      modernAppVi: 'Cả hai đều được bảo hộ công nhận xuyên biên giới theo Công ước New York 1958; lựa chọn cơ quan nào cần cân nhắc vị thế hợp đồng và nơi đối tác nắm giữ tài sản thực tế.',
      modernAppEn: 'Both enjoy cross-border recognition under the 1958 New York Convention; choosing between them should reflect bargaining leverage and where enforceable counterparty assets reside.'
    }
  ];

  var existing = {};
  var i;
  for (i = 0; i < window.CCE_CONCEPT_PAIRS_V3.length; i++) {
    if (window.CCE_CONCEPT_PAIRS_V3[i] && window.CCE_CONCEPT_PAIRS_V3[i].id) {
      existing[window.CCE_CONCEPT_PAIRS_V3[i].id] = true;
    }
  }
  for (i = 0; i < PAIRS_B.length; i++) {
    if (!existing[PAIRS_B[i].id]) {
      window.CCE_CONCEPT_PAIRS_V3.push(PAIRS_B[i]);
      existing[PAIRS_B[i].id] = true;
    }
  }
})();
