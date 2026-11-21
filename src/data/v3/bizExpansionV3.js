(function () {
  'use strict';

  window.CCE_BIZ_EXPANSION_V3 = window.CCE_BIZ_EXPANSION_V3 || {};

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

  var INDUSTRIAL_CLUSTERS = [
    {
      id: 'cluster-shenzhen-dongguan',
      nameVi: 'Cụm Thâm Quyến – Đông Hoản',
      nameZh: '深圳—东莞电子与智能硬件集群',
      nameEn: 'Shenzhen–Dongguan Electronics & Smart Hardware Cluster',
      provinceId: 'prov-guangdong',
      hsrStation: '深圳北站 (Shenzhenbei) / 虎门站 (Humen)',
      sectorsVi: 'Điện tử tiêu dùng, bo mạch PCB/PCBA, thiết bị viễn thông, drone, khuôn mẫu chính xác và phần cứng thông minh (chợ linh kiện Hoa Cường Bắc).',
      sectorsEn: 'Consumer electronics, PCB/PCBA assembly, telecom equipment, drones, precision tooling, and smart hardware anchored by Huaqiangbei.',
      vnSupplyLinkVi: 'Cung cấp linh kiện bán thành phẩm, bo mạch và phụ kiện điện tử cho các khu công nghiệp lắp ráp tại Bắc Ninh, Bắc Giang và Hải Phòng qua tuyến cảng Diêm Điền/Xà Khẩu và cửa khẩu đường bộ Hữu Nghị.',
      vnSupplyLinkEn: 'Supplies sub-assemblies, PCBs, and electronic components to assembly hubs in Bac Ninh, Bac Giang, and Hai Phong via Yantian/Shekou ports and the Huu Nghi land border.'
    },
    {
      id: 'cluster-foshan',
      nameVi: 'Cụm Phật Sơn (Thuận Đức – Nam Hải)',
      nameZh: '佛山家电与建材家居集群',
      nameEn: 'Foshan Home Appliances, Ceramics & Furniture Cluster',
      provinceId: 'prov-guangdong',
      hsrStation: '佛山西站 (Foshanxi) / 广州南站 (Guangzhounan)',
      sectorsVi: 'Thiết bị gia dụng (Thuận Đức), gốm sứ xây dựng, nhôm định hình kiến trúc, thiết bị vệ sinh và nội thất quy mô lớn (Lạc Tòng).',
      sectorsEn: 'Home appliances (Shunde), architectural ceramics, aluminum extrusions, sanitary ware, and large-scale furniture hubs (Lecong).',
      vnSupplyLinkVi: 'Nguồn cung trực tiếp vật liệu hoàn thiện, phụ kiện nội thất, linh kiện điện gia dụng và dây chuyền máy chế biến gỗ cho các dự án bất động sản và nhà máy nội thất Việt Nam.',
      vnSupplyLinkEn: 'Direct sourcing hub for finishing materials, furniture hardware, appliance components, and woodworking machinery supplying Vietnamese construction and furniture factories.'
    },
    {
      id: 'cluster-yiwu',
      nameVi: 'Cụm Nghĩa Ô (Chiết Giang)',
      nameZh: '义乌小商品与跨境电商集群',
      nameEn: 'Yiwu Small Commodities & Cross-Border E-Commerce Cluster',
      provinceId: 'prov-zhejiang',
      hsrStation: '义乌站 (Yiwu)',
      sectorsVi: 'Hàng tiêu dùng nhanh, phụ kiện thời trang, văn phòng phẩm, đồ chơi, bao bì quà tặng, phụ kiện gia dụng và trung tâm gom hàng xuất khẩu MOQ linh hoạt.',
      sectorsEn: 'Fast-moving consumer goods, fashion accessories, stationery, toys, gift packaging, household sundries, and flexible-MOQ export consolidation.',
      vnSupplyLinkVi: 'Đầu mối ghép container (LCL) và nguồn hàng thương mại điện tử lớn cho nhà phân phối Việt Nam, kết nối cảng Ninh Ba – Chu Sơn về Hải Phòng và Cát Lái.',
      vnSupplyLinkEn: 'Primary LCL consolidation and e-commerce sourcing hub for Vietnamese distributors, linked via Ningbo-Zhoushan Port to Hai Phong and Cat Lai.'
    },
    {
      id: 'cluster-suzhou-wuxi',
      nameVi: 'Cụm Tô Châu – Vô Tích (Giang Tô)',
      nameZh: '苏州—无锡精密制造与半导体集群',
      nameEn: 'Suzhou–Wuxi Precision Manufacturing & Semiconductor Cluster',
      provinceId: 'prov-jiangsu',
      hsrStation: '苏州北站 (Suzhoubei) / 无锡东站 (Wuxidong)',
      sectorsVi: 'Đóng gói kiểm thử bán dẫn, tự động hóa công nghiệp, thiết bị y sinh, vật liệu mới và cơ khí chính xác cao.',
      sectorsEn: 'Semiconductor packaging and testing, industrial automation, biomedical devices, advanced materials, and high-precision engineering.',
      vnSupplyLinkVi: 'Nhiều nhà cung cấp thiết bị tự động hóa và linh kiện chính xác tại Tô Châu – Vô Tích đang đặt nhà máy vệ tinh tại Hải Phòng, Quảng Ninh và Bắc Ninh.',
      vnSupplyLinkEn: 'Numerous Suzhou–Wuxi automation equipment and precision component vendors operate satellite plants across Hai Phong, Quang Ninh, and Bac Ninh.'
    },
    {
      id: 'cluster-hangzhou',
      nameVi: 'Cụm Hàng Châu (Chiết Giang)',
      nameZh: '杭州数字经济与跨境电商集群',
      nameEn: 'Hangzhou Digital Economy & Cross-Border E-Commerce Cluster',
      provinceId: 'prov-zhejiang',
      hsrStation: '杭州东站 (Hangzhoudong)',
      sectorsVi: 'Thương mại điện tử xuyên biên giới, điện toán đám mây, thiết bị an ninh hình ảnh, phần mềm quản trị chuỗi cung ứng và dệt lụa cao cấp.',
      sectorsEn: 'Cross-border e-commerce platforms, cloud computing, vision-security hardware, supply-chain SaaS, and premium silk textiles.',
      vnSupplyLinkVi: 'Trung tâm kết nối công nghệ thương mại điện tử, giải pháp logistics số và hệ sinh thái bán hàng trực tuyến cho doanh nghiệp xuất nhập khẩu Việt Nam.',
      vnSupplyLinkEn: 'Hub for cross-border e-commerce infrastructure, digital logistics platforms, and online distribution ecosystems adopted by Vietnamese trading firms.'
    },
    {
      id: 'cluster-chongqing-chengdu',
      nameVi: 'Cụm Trùng Khánh – Thành Đô',
      nameZh: '成渝双城汽车电子与内陆枢纽集群',
      nameEn: 'Chongqing–Chengdu Automotive, Laptops & Inland Hub Cluster',
      provinceId: 'prov-chongqing',
      hsrStation: '重庆北站 (Chongqingbei) / 成都东站 (Chengdudong)',
      sectorsVi: 'Sản xuất ô tô và xe năng lượng mới, lắp ráp máy tính xách tay, cơ khí động lực và trung tâm vận tải đa phương thức Hành lang Đường bộ – Đường biển mới miền Tây.',
      sectorsEn: 'Automobiles and new-energy vehicles, laptop assembly, powertrain engineering, and the New International Land-Sea Trade Corridor multimodal hub.',
      vnSupplyLinkVi: 'Kết nối trực tiếp đường sắt liên vận quốc tế qua Quảng Tây – Đồng Đăng – Yên Viên, rút ngắn tuyến vận chuyển linh kiện và nông sản sâu vào nội địa Tây Nam Trung Quốc.',
      vnSupplyLinkEn: 'Connected via international rail-sea intermodal corridors through Guangxi and Dong Dang–Yen Vien, opening direct inland routes into Southwest China.'
    },
    {
      id: 'cluster-keqiao',
      nameVi: 'Cụm Kha Kiều (Thiệu Hưng, Chiết Giang)',
      nameZh: '绍兴柯桥轻纺面料集群',
      nameEn: 'Keqiao (Shaoxing) Textile & Fabric Cluster',
      provinceId: 'prov-zhejiang',
      hsrStation: '绍兴北站 (Shaoxingbei)',
      sectorsVi: 'Dệt thoi, dệt kim, nhuộm hoàn tất công nghệ cao và trung tâm giao dịch vải sỉ quy mô lớn nhất châu Á (Thành phố Dệt may Trung Quốc).',
      sectorsEn: 'Woven and knitted fabrics, advanced dyeing and finishing, and Asia\'s largest wholesale fabric trading center (China Textile City).',
      vnSupplyLinkVi: 'Nguồn cung vải nguyên liệu chủ lực cho các doanh nghiệp may mặc xuất khẩu Việt Nam, đặc biệt liên quan trực tiếp đến bài toán đáp ứng quy tắc xuất xứ RCEP và ACFTA.',
      vnSupplyLinkEn: 'Core fabric sourcing base for Vietnam\'s export garment sector, directly central to meeting RCEP and ACFTA rules of origin.'
    },
    {
      id: 'cluster-guangxi-pingxiang',
      nameVi: 'Cụm Quảng Tây – Bằng Tường (Cửa khẩu Hữu Nghị Quan)',
      nameZh: '广西凭祥口岸物流与东盟农产集散集群',
      nameEn: 'Guangxi–Pingxiang Border Logistics & ASEAN Agri-Hub Cluster',
      provinceId: 'prov-guangxi',
      hsrStation: '凭祥东站 (Pingxiangdong) / 南宁东站 (Nanningdong)',
      sectorsVi: 'Logistics cửa khẩu thông minh, kho lạnh kiểm dịch trái cây ASEAN, chế biến nông sản biên mậu và trung chuyển hàng cơ khí – điện tử.',
      sectorsEn: 'Smart border-port logistics, cold-chain fruit quarantine terminals, border-zone agro-processing, and electronics-machinery transshipment.',
      vnSupplyLinkVi: 'Cửa ngõ đường bộ và đường sắt quan trọng bậc nhất giữa Việt Nam (Lạng Sơn) và Trung Quốc, xử lý tỷ trọng lớn trái cây tươi chính ngạch và linh kiện sản xuất.',
      vnSupplyLinkEn: 'Primary land and rail gateway linking Vietnam (Lang Son) with China, handling major volumes of formal fresh-fruit exports and industrial components.'
    },
    {
      id: 'cluster-qingdao',
      nameVi: 'Cụm Thanh Đảo (Sơn Đông)',
      nameZh: '青岛家电海洋装备与港口物流集群',
      nameEn: 'Qingdao Appliances, Marine Engineering & Port Logistics Cluster',
      provinceId: 'prov-shandong',
      hsrStation: '青岛北站 (Qingdaobei)',
      sectorsVi: 'Thiết bị gia dụng lớn, lốp xe cao su công nghiệp, toa xe đường sắt, kinh tế biển và cảng nước sâu tự động hóa cao.',
      sectorsEn: 'Major home appliances, industrial rubber tires, rail rolling stock, marine engineering, and highly automated deep-water port operations.',
      vnSupplyLinkVi: 'Cung cấp máy móc chế biến thực phẩm, cao su công nghiệp và kết nối tuyến vận tải biển trực tiếp Hoa Bắc – Hải Phòng/Cái Mép.',
      vnSupplyLinkEn: 'Supplies food-processing machinery and industrial tires while linking North China shipping lanes directly with Hai Phong and Cai Mep.'
    },
    {
      id: 'cluster-ningbo',
      nameVi: 'Cụm Ninh Ba (Chiết Giang)',
      nameZh: '宁波模具汽配与深水港外贸集群',
      nameEn: 'Ningbo Tooling, Auto Parts & Deep-Water Port Trade Cluster',
      provinceId: 'prov-zhejiang',
      hsrStation: '宁波站 (Ningbo)',
      sectorsVi: 'Khuôn ép nhựa chính xác, phụ tùng ô tô, thiết bị gia dụng nhỏ, văn phòng phẩm và cụm cảng Ninh Ba – Chu Sơn sản lượng hàng hóa hàng đầu thế giới.',
      sectorsEn: 'Precision injection molds, automotive components, small appliances, stationery, and the Ningbo-Zhoushan deep-water port complex.',
      vnSupplyLinkVi: 'Cảng xuất hàng chính cho tuyến Chiết Giang – Việt Nam và nguồn cung khuôn mẫu, máy ép nhựa cho công nghiệp hỗ trợ Việt Nam.',
      vnSupplyLinkEn: 'Primary maritime export gateway for Zhejiang–Vietnam trade and a key supplier of molds and injection-molding machines to Vietnamese supporting industries.'
    },
    {
      id: 'cluster-hefei',
      nameVi: 'Cụm Hợp Phì (An Huy)',
      nameZh: '合肥新能源汽车显示面板与科创集群',
      nameEn: 'Hefei New-Energy Vehicles, Display Panels & Sci-Tech Cluster',
      provinceId: 'prov-anhui',
      hsrStation: '合肥南站 (Hefeinan)',
      sectorsVi: 'Xe điện thông minh, tấm nền hiển thị, pin lưu trữ năng lượng, thiết bị điện mặt trời và trí tuệ nhân tạo ứng dụng.',
      sectorsEn: 'Smart electric vehicles, flat-panel displays, energy-storage batteries, photovoltaic manufacturing, and applied artificial intelligence.',
      vnSupplyLinkVi: 'Hình mẫu công nghiệp hóa dựa trên đầu tư dẫn dắt theo cụm và là nguồn cung thiết bị năng lượng mới, linh kiện hiển thị cho thị trường Đông Nam Á.',
      vnSupplyLinkEn: 'Benchmark for cluster-led industrial policy and an expanding supplier of new-energy equipment and display components into Southeast Asia.'
    },
    {
      id: 'cluster-zhengzhou',
      nameVi: 'Cụm Trịnh Châu (Hà Nam)',
      nameZh: '郑州航空港智能手机与中原物流集群',
      nameEn: 'Zhengzhou Airport Economy, Smartphone & Central Plains Logistics Cluster',
      provinceId: 'prov-henan',
      hsrStation: '郑州东站 (Zhengzhoudong)',
      sectorsVi: 'Lắp ráp điện thoại thông minh quy mô lớn, Khu kinh tế Cảng hàng không, máy móc khai khoáng, chế biến thực phẩm và đầu mối tàu hàng Á – Âu.',
      sectorsEn: 'Large-scale smartphone assembly, Airport Economy Zone logistics, mining equipment, food processing, and China–Europe rail freight hub.',
      vnSupplyLinkVi: 'Cung cấp máy móc chế biến nông sản, bao bì thực phẩm và kết nối chuỗi vận tải hàng không – đường sắt liên vùng Hoa Trung.',
      vnSupplyLinkEn: 'Supplies agro-processing machinery and food packaging while connecting Central China air-rail multimodal logistics corridors.'
    }
  ];

  var ENTERPRISE_CASES = [
    {
      id: 'case-dji',
      name: 'DJI (Đại Cương · 大疆创新)',
      provinceId: 'prov-guangdong',
      modelVi: 'Khởi nghiệp kỹ thuật tại Thâm Quyến năm 2006, tự chủ đồng bộ hệ thống điều khiển bay, cảm biến gimbal chống rung và phần mềm xử lý hình ảnh thay vì chỉ lắp ráp linh kiện rời, vươn lên dẫn đầu toàn cầu về thiết bị bay không người lái dân dụng và nông nghiệp.',
      modelEn: 'Founded in Shenzhen in 2006, DJI achieved vertical mastery over flight controllers, stabilized gimbals, and imaging software rather than mere component assembly, becoming the global leader in civil and agricultural drones.',
      lessonVi: 'Lợi thế cụm phần cứng Thâm Quyến cho phép lặp mẫu phần cứng với tốc độ cao, nhưng hào kinh tế bền vững đến từ đầu tư R&D chuyên sâu vào thuật toán điều khiển và hệ sinh thái phần mềm khép kín.',
      lessonEn: 'Shenzhen\'s hardware cluster enables rapid prototyping cycles, yet durable competitive moats come from deep R&D in control algorithms and tightly integrated software ecosystems.'
    },
    {
      id: 'case-midea',
      name: 'Midea (Mỹ Đích · 美的集团)',
      provinceId: 'prov-guangdong',
      modelVi: 'Xuất phát từ xưởng sản xuất nắp chai tại Thuận Đức (Phật Sơn) năm 1968, chuyển dịch thành tập đoàn công nghệ gia dụng, điều hòa công nghiệp và tự động hóa robot (mua lại KUKA của Đức), đồng thời vận hành mạng lưới nhà máy bản địa hóa tại nhiều quốc gia trong đó có Việt Nam.',
      modelEn: 'Evolving from a 1968 bottle-cap workshop in Shunde (Foshan), Midea scaled into a global home-appliance, HVAC, and industrial-robotics group (acquiring Germany\'s KUKA) with localized factories worldwide including Vietnam.',
      lessonVi: 'Kết hợp kỷ luật sản xuất tinh gọn (T+3 đặt hàng theo nhu cầu thực), M&A có chọn lọc để nâng cấp công nghệ và mở rộng nhà máy bản địa giúp doanh nghiệp vượt qua giới hạn của ngành gia dụng truyền thống.',
      lessonEn: 'Combining lean demand-driven manufacturing (T+3), selective technology M&A, and localized overseas plants enables legacy manufacturers to break out of low-margin commodity ceilings.'
    },
    {
      id: 'case-crrc',
      name: 'CRRC (Trung Quốc Trung Xa · 中国中车)',
      provinceId: 'prov-beijing',
      modelVi: 'Hình thành năm 2015 từ sáp nhập hai tập đoàn đầu máy toa xe Nam Xa và Bắc Xa, tiến hành chu trình "nhập khẩu công nghệ nền – tiêu hóa cải tiến – chuẩn hóa thiết kế nội địa" với dòng tàu cao tốc Phục Hưng (Fuxing) và xuất khẩu thiết bị đường sắt đô thị ra nhiều châu lục.',
      modelEn: 'Formed in 2015 via the merger of CSR and CNR, CRRC executed a cycle of technology absorption, domestic standardization (the Fuxing high-speed train platform), and international urban-rail equipment exports.',
      lessonVi: 'Đối với ngành cơ khí hạng nặng đòi hỏi vốn lớn và chuẩn an toàn nghiêm ngặt, tích lũy năng lực thiết kế hệ thống (System Integration) và chuẩn hóa chuỗi cung ứng nội địa là nền tảng để cạnh tranh đấu thầu quốc tế.',
      lessonEn: 'In capital-intensive heavy engineering with strict safety standards, mastering system integration and standardized domestic component chains is essential for international tender competitiveness.'
    },
    {
      id: 'case-smic',
      name: 'SMIC (Trung Tâm Quốc Tế · 中芯国际)',
      provinceId: 'prov-shanghai',
      modelVi: 'Thành lập tại Thượng Hải năm 2000 theo mô hình đúc chip bán dẫn thuần túy (Pure-play Foundry), tập trung mở rộng công suất ở các tiến trình trưởng thành phục vụ công nghiệp ô tô, quản lý nguồn và thiết bị IoT đồng thời nỗ lực tự chủ chuỗi vật liệu trong bối cảnh kiểm soát xuất khẩu công nghệ.',
      modelEn: 'Established in Shanghai in 2000 as a pure-play semiconductor foundry, SMIC focuses on scaling mature-node capacity for automotive, power-management, and IoT chips while strengthening domestic material autonomy under export controls.',
      lessonVi: 'Ngành bán dẫn đòi hỏi chu kỳ đầu tư dài hạn, đội ngũ kỹ sư quy trình bền bỉ và chiến lược định vị phân khúc thực tế (như chip công nghiệp và ô tô) nhằm duy trì dòng tiền tái đầu tư R&D.',
      lessonEn: 'Semiconductor manufacturing requires multi-decade capital discipline, deep process-engineering talent, and pragmatic segment positioning (such as automotive and industrial nodes) to fund continuous R&D.'
    },
    {
      id: 'case-tongrentang',
      name: 'Đồng Nhân Đường (同仁堂)',
      provinceId: 'prov-beijing',
      modelVi: 'Thành lập tại Bắc Kinh năm 1669 dưới thời Khang Hy, từng phục vụ Thái y viện triều Thanh, hiện đại hóa mô hình Trung y dược lâu đời (Lão Tự Hiệu) bằng tiêu chuẩn GMP, kiểm soát vùng dược liệu và chuỗi phòng khám – nhà thuốc tại nhiều quốc gia.',
      modelEn: 'Founded in Beijing in 1669 during the Kangxi reign as an imperial pharmacy supplier, Tong Ren Tang modernized its heritage brand (Laozihao) through GMP manufacturing, traceable herb sourcing, and international clinics.',
      lessonVi: 'Di sản thương hiệu trăm năm chỉ sống tiếp trong kinh tế hiện đại khi chuyển hóa triết lý đạo đức nghề ("pháo chế tuy phiền, tất bất cảm tỉnh nhân công") thành tiêu chuẩn kiểm định chất lượng đo lường được.',
      lessonEn: 'Centuries-old heritage brands endure in modern commerce only when traditional craftsmanship ethics are translated into auditable quality and GMP compliance standards.'
    },
    {
      id: 'case-kweichow-moutai',
      name: 'Quý Châu Mao Đài (贵州茅台)',
      provinceId: 'prov-guizhou',
      modelVi: 'Bắt nguồn từ trấn Mao Đài bên sông Xích Thủy (Quý Châu), gắn chặt quy trình chưng cất tương hương (Jiangxiang) với hệ vi sinh vật đặc hữu không thể sao chép địa lý, định vị ở phân khúc biểu tượng văn hóa – tiếp khách cao cấp và kiểm soát chặt sản lượng.',
      modelEn: 'Rooted in Maotai Town along the Chishui River in Guizhou, Kweichow Moutai anchors its sauce-aroma distilling in a geographically irreproducible microbial terroir, positioning itself as a high-culture ceremonial brand with disciplined supply.',
      lessonVi: 'Chỉ dẫn địa lý, câu chuyện lịch sử xác thực và kỷ luật kiểm soát nguồn cung tạo ra năng lực định giá vượt trội mà quảng cáo ngắn hạn không thể thay thế.',
      lessonEn: 'Geographical indication, authentic historical provenance, and disciplined supply governance create durable pricing power that short-term marketing cannot replicate.'
    }
  ];

  var NEGOTIATION_SCENARIOS = [
    {
      id: 'neg-north-01-banquet-seating',
      regionStyle: 'Hoa Bắc',
      situationVi: 'Trong bữa tiệc tiếp đón đoàn Việt Nam tại Bắc Kinh trước ngày ký biên bản ghi nhớ, chủ nhà mời bạn ngồi ghế đối diện cửa ra vào (chủ vị khách chính) và rót rượu Bạch tửu (Baijiu) để chúc rượu mở màn.',
      situationEn: 'At a Beijing welcome banquet prior to signing an MOU, your host gestures for you to take the seat facing the entrance (guest of honor) and pours Baijiu for the opening toast.',
      choices: [
        {
          id: 'a',
          labelVi: 'Nhũn nhặn từ chối ghế chính một lượt rồi vui vẻ nhận lời theo sự sắp xếp của chủ nhà, nâng ly thấp hơn miệng ly chủ nhà khi cụng.',
          labelEn: 'Politely demur once before graciously accepting the host\'s arrangement, and hold your glass slightly lower than the host\'s rim when clinking.',
          outcomeVi: 'Chủ nhà đánh giá cao sự am hiểu lễ nghi và tinh thần tôn trọng lẫn nhau; không khí bàn tiệc cởi mở, thuận lợi cho phiên đàm phán điều khoản hôm sau.',
          outcomeEn: 'The host appreciates your mastery of etiquette and mutual respect, creating warm rapport for the next day\'s contract session.',
          culturalRootVi: 'Văn hóa bàn tiệc Hoa Bắc đề cao thứ bậc chủ – khách (Chủ tọa hướng cửa) và sự khiêm nhường (Khiêm nhượng 谦让) qua động tác hạ miệng ly.',
          culturalRootEn: 'Northern Chinese banquet etiquette emphasizes host-guest seating hierarchy and humility (qianrang) signaled by lowering one\'s glass rim.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Lập tức mở tài liệu hợp đồng và yêu cầu chốt chiết khấu giá ngay trước khi món khai vị được dọn ra.',
          labelEn: 'Immediately pull out contract sheets and press for a price discount before the appetizers are served.',
          outcomeVi: 'Đối tác cảm thấy gượng gạo và cho rằng đoàn Việt Nam quá vội vã, thiếu thiện chí xây dựng quan hệ lâu dài.',
          outcomeEn: 'The hosts feel uncomfortable and perceive the delegation as overly transactional and uninterested in long-term trust.',
          culturalRootVi: 'Ở Hoa Bắc, bàn tiệc là không gian xây dựng lòng tin cá nhân (Giao tình 交情) trước khi đi vào chi tiết thương mại cứng rắn.',
          culturalRootEn: 'In Northern China, the banquet serves to cultivate personal trust (jiaoqing) before addressing hard commercial terms.',
          scoreImpact: -15
        },
        {
          id: 'c',
          labelVi: 'Khẳng định mình hoàn toàn không uống rượu theo cách cứng nhắc và bỏ trống ly không tham gia cụng ly.',
          labelEn: 'Bluntly refuse alcohol and leave your glass empty without joining the toast.',
          outcomeVi: 'Không khí bàn tiệc bị chững lại; bạn có thể giữ nguyên tắc sức khỏe nhưng nên chủ động xin phép dùng trà hoặc nước thay rượu để giữ thể diện cho chủ nhà.',
          outcomeEn: 'The table atmosphere cools; declining alcohol is acceptable, but requesting tea as a substitute toast is essential to preserve the host\'s face.',
          culturalRootVi: 'Lễ nghi kính rượu coi trọng thành ý tham dự nghi thức hơn là lượng cồn tiêu thụ; "dĩ trà đại tửu" (lấy trà thay rượu) là lối ứng xử chuẩn mực.',
          culturalRootEn: 'Toasting rituals value sincere participation over alcohol volume; "substituting tea for liquor" (yi cha dai jiu) is the accepted gracious solution.',
          scoreImpact: -5
        }
      ]
    },
    {
      id: 'neg-north-02-indirect-refusal',
      regionStyle: 'Hoa Bắc',
      situationVi: 'Khi bạn đề xuất giảm 15% đơn giá và kéo dài thời hạn trả chậm 60 ngày với một doanh nghiệp cơ khí lớn tại Thiên Tân, giám đốc phía bạn mỉm cười đáp: "Đề xuất này rất thú vị, chúng tôi cần nghiên cứu thêm một chút" (我们再研究研究).',
      situationEn: 'When you request a 15% price cut and 60-day deferred payment from a major Tianjin machinery firm, the director smiles and replies, "This is an interesting proposal; we need to study it further" (我们再研究研究).',
      choices: [
        {
          id: 'a',
          labelVi: 'Hiểu đây là tín hiệu từ chối mềm để giữ thể diện; chủ động hỏi về cơ cấu chi phí và đề xuất phương án trao đổi lại (tăng sản lượng cam kết hoặc chia mốc thanh toán).',
          labelEn: 'Recognize this as a polite face-saving refusal; inquire about cost drivers and propose a trade-off such as higher volume commitments or milestone payments.',
          outcomeVi: 'Đối tác cởi mở chia sẻ biên độ giá thực tế của nguyên liệu thép và mở ra phương án giảm giá theo bậc sản lượng.',
          outcomeEn: 'The counterpart openly shares real steel-input constraints and offers a tiered volume discount.',
          culturalRootVi: 'Giao tiếp ngữ cảnh cao (High-context) tránh nói "không" trực diện để giữ Thể diện (Mianzi 面子) cho cả hai bên.',
          culturalRootEn: 'High-context communication avoids blunt "no" statements to protect face (Mianzi) for both sides.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Tin rằng họ đã gần đồng ý và gửi hợp đồng đã sửa sẵn giá giảm 15% yêu cầu họ ký ngay trong chiều cùng ngày.',
          labelEn: 'Assume they are close to agreeing and email a revised contract with the 15% cut demanding signature that afternoon.',
          outcomeVi: 'Đàm phán rơi vào im lặng kéo dài vì đối tác cảm thấy bị ép buộc và không được lắng nghe.',
          outcomeEn: 'Negotiations stall into prolonged silence as the counterpart feels pressured and unheard.',
          culturalRootVi: 'Hiểu nhầm "nghiên cứu thêm" (研究研究) theo nghĩa đen là lỗi phổ biến nhất của người đàm phán ít kinh nghiệm tại Trung Quốc.',
          culturalRootEn: 'Taking "we will study it" literally is one of the most frequent misreadings by inexperienced negotiators in China.',
          scoreImpact: -15
        },
        {
          id: 'c',
          labelVi: 'Phản ứng gay gắt ngay tại phòng họp rằng giá của họ quá cao so với đối thủ khác.',
          labelEn: 'React sharply in the meeting room by declaring their pricing uncompetitive compared to rivals.',
          outcomeVi: 'Giám đốc mất thể diện trước nhân viên cấp dưới và chuyển sang giữ lập trường cứng nhắc.',
          outcomeEn: 'The director loses face in front of subordinates and hardens into an inflexible stance.',
          culturalRootVi: 'Tuyệt đối tránh làm lãnh đạo đối tác mất mặt trước đội ngũ nội bộ của họ trong văn hóa công sở Hoa Bắc.',
          culturalRootEn: 'Never cause a senior counterpart to lose face in front of their own team in Northern Chinese corporate culture.',
          scoreImpact: -20
        }
      ]
    },
    {
      id: 'neg-north-03-hierarchy-approval',
      regionStyle: 'Hoa Bắc',
      situationVi: 'Bạn đã làm việc rất ăn ý với trưởng phòng xuất khẩu của một nhà máy tại Sơn Đông về toàn bộ thông số kỹ thuật, nhưng khi đề nghị chốt giá cuối cùng, anh ấy liên tục trì hoãn.',
      situationEn: 'You have aligned smoothly on all technical specs with the export manager of a Shandong factory, yet he repeatedly delays confirming the final price.',
      choices: [
        {
          id: 'a',
          labelVi: 'Hiểu rằng quyền phê duyệt giá nằm ở cấp lãnh đạo cao hơn; đề nghị một cuộc gặp ngắn có sự tham dự của Tổng giám đốc nhà máy kèm bản tóm tắt lợi ích hợp tác dài hạn.',
          labelEn: 'Recognize that pricing authority sits higher up; request a brief executive meeting with the General Manager supported by a concise long-term partnership summary.',
          outcomeVi: 'Trưởng phòng cảm thấy được tôn trọng vai trò cầu nối và chủ động sắp xếp lịch gặp Tổng giám đốc, giúp chốt khung giá ngay trong tuần.',
          outcomeEn: 'The manager appreciates your respect for internal channels and arranges the executive meeting, closing pricing within the week.',
          culturalRootVi: 'Cấu trúc ra quyết định tại nhiều doanh nghiệp Hoa Bắc mang tính tập trung theo thứ bậc (Tôn ty trật tự), cấp trung hiếm khi tự quyết vượt khung.',
          culturalRootEn: 'Decision-making in many Northern enterprises is hierarchically centralized; middle managers rarely override pricing floors unilaterally.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Bỏ qua trưởng phòng, tự tìm số điện thoại Tổng giám đốc để phàn nàn rằng cấp dưới làm việc chậm chạp.',
          labelEn: 'Bypass the export manager, locate the General Manager\'s phone number, and complain about the manager\'s slowness.',
          outcomeVi: 'Bạn phá vỡ niềm tin nội bộ; trưởng phòng trở nên bất hợp tác trong toàn bộ quá trình theo dõi sản xuất sau này.',
          outcomeEn: 'You alienate the internal point of contact, causing friction throughout production follow-up.',
          culturalRootVi: 'Vượt cấp và tố cáo người phụ trách trực tiếp vi phạm nghiêm trọng nguyên tắc giữ thể diện và quan hệ đồng thuận nội bộ.',
          culturalRootEn: 'Bypassing and criticizing a direct liaison violates face-preservation norms and disrupts internal consensus.',
          scoreImpact: -20
        },
        {
          id: 'c',
          labelVi: 'Gửi email nhắc giá mỗi hai giờ một lần để tạo áp lực tâm lý.',
          labelEn: 'Send follow-up emails every two hours to apply psychological pressure.',
          outcomeVi: 'Không đẩy nhanh được quy trình duyệt nội bộ mà còn tạo ấn tượng thiếu kiên nhẫn.',
          outcomeEn: 'Fails to speed up internal sign-off while projecting impatience.',
          culturalRootVi: 'Quy trình phê duyệt nội bộ (Thẩm phê 审批) cần thời gian đi qua các phòng ban tài chính và ban giám đốc.',
          culturalRootEn: 'Internal approval workflows (shenpi) require formal sign-off across finance and senior leadership.',
          scoreImpact: -5
        }
      ]
    },
    {
      id: 'neg-north-04-gift-protocol',
      regionStyle: 'Hoa Bắc',
      situationVi: 'Đoàn Việt Nam chuẩn bị tặng quà lưu niệm cho lãnh đạo một tập đoàn quốc doanh tại Bắc Kinh trong buổi gặp mặt chính thức đầu tiên.',
      situationEn: 'Your Vietnamese delegation is preparing corporate gifts for executives of a state-owned enterprise in Beijing at the first formal meeting.',
      choices: [
        {
          id: 'a',
          labelVi: 'Chọn đặc sản văn hóa tinh tế mang dấu ấn Việt Nam (như trà sen hoặc sơn mài hộp lịch sự, giá trị vừa phải), trao bằng hai tay sau khi kết thúc cuộc họp chính.',
          labelEn: 'Select refined Vietnamese cultural specialties of modest value (such as lotus tea or lacquerware in tasteful packaging) and present them with both hands after the main meeting.',
          outcomeVi: 'Món quà vừa thể hiện sự trân trọng văn hóa vừa tuân thủ quy định liêm chính của doanh nghiệp nhà nước, tạo thiện cảm sâu sắc.',
          outcomeEn: 'The gift conveys cultural thoughtfulness while complying with SOE anti-corruption rules, leaving a strong positive impression.',
          culturalRootVi: 'Văn hóa tặng quà chuẩn mực coi trọng "lễ nhẹ tình nặng" (礼轻情意重), tránh quà quá đắt gây khó xử về quy định tuân thủ và tránh vật kiêng kỵ (đồng hồ, đồ sắc nhọn).',
          culturalRootEn: 'Proper gifting values symbolic thoughtfulness over extravagant cost, avoiding compliance embarrassment and taboo items (such as clocks or sharp objects).',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Tặng đồng hồ để bàn cao cấp đắt tiền để thể hiện đẳng cấp đối tác.',
          labelEn: 'Present an expensive luxury desk clock to signal high corporate status.',
          outcomeVi: 'Đối tác từ chối khéo và bầu không khí trở nên ngượng ngập do cả yếu tố kiêng kỵ ngôn ngữ lẫn quy định chống tham nhũng.',
          outcomeEn: 'The host politely declines amid awkwardness caused by both linguistic taboo and compliance rules.',
          culturalRootVi: 'Trong tiếng Trung, "tặng đồng hồ" (送钟 sòngzhōng) đồng âm với "đưa tang" (送终), là điều đại kỵ trong giao tiếp.',
          culturalRootEn: 'In Chinese, "gifting a clock" (songzhong 送钟) is a homophone for attending a funeral (送终), a major cultural taboo.',
          scoreImpact: -20
        },
        {
          id: 'c',
          labelVi: 'Chỉ tặng quà cho riêng người trưởng đoàn mà bỏ qua các lãnh đạo cấp phó cùng dự họp.',
          labelEn: 'Give a gift solely to the lead executive while ignoring deputy directors attending the meeting.',
          outcomeVi: 'Tạo cảm giác thiếu tinh tế về lễ nghi ngoại giao tập thể.',
          outcomeEn: 'Creates an impression of uneven diplomatic courtesy.',
          culturalRootVi: 'Nên chuẩn bị quà chính cho lãnh đạo cao nhất và quà đồng bộ gọn nhẹ cho các thành viên chủ chốt cùng dự.',
          culturalRootEn: 'Best practice pairs a primary gift for the chief host with modest uniform tokens for key attending colleagues.',
          scoreImpact: -5
        }
      ]
    },
    {
      id: 'neg-south-01-guangdong-pragmatism',
      regionStyle: 'Hoa Nam',
      situationVi: 'Bạn làm việc với chủ một nhà máy điện tử tư nhân tại Thâm Quyến. Ngay phút thứ 10 của cuộc họp, ông ấy hỏi thẳng mục tiêu sản lượng năm, mức giá mục tiêu (Target Price) và tiến độ đặt mẫu.',
      situationEn: 'Ten minutes into a meeting with the founder of a private Shenzhen electronics factory, he asks directly for your annual volume forecast, target unit price, and prototyping timeline.',
      choices: [
        {
          id: 'a',
          labelVi: 'Trình bày thẳng vào dữ liệu cụ thể: sản lượng thử nghiệm, lộ trình tăng đơn theo quý, thông số kỹ thuật cốt lõi và khoảng giá mục tiêu có căn cứ.',
          labelEn: 'Respond directly with structured data: trial volume, quarterly ramp-up roadmap, core specs, and a grounded target price range.',
          outcomeVi: 'Chủ xưởng đánh giá bạn là người mua chuyên nghiệp, lập tức gọi kỹ sư trưởng vào tính bảng giá BOM và đề xuất phương án tối ưu linh kiện.',
          outcomeEn: 'The founder views you as a serious buyer, immediately brings in the chief engineer to review the BOM, and proposes component optimizations.',
          culturalRootVi: 'Văn hóa kinh doanh Hoa Nam (Quảng Đông, Chiết Giang) đề cao tính thực dụng (Vụ thực 务实), tốc độ phản ứng và hiệu quả thương mại trực diện.',
          culturalRootEn: 'Southern Chinese business culture (Guangdong, Zhejiang) prizes pragmatism (wushi), speed, and direct commercial clarity.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Nói vòng vo về tầm nhìn chiến lược chung chung trong hai giờ mà không đưa ra con số sản lượng hay bản vẽ nào.',
          labelEn: 'Speak vaguely about grand strategic vision for two hours without sharing volumes or technical drawings.',
          outcomeVi: 'Chủ xưởng kết thúc cuộc họp sớm và giao bạn lại cho nhân viên kinh doanh mới theo dõi qua loa.',
          outcomeEn: 'The owner wraps up early and delegates your account to a junior sales rep.',
          culturalRootVi: 'Tại các cụm sản xuất tư nhân Hoa Nam, thời gian là chi phí cơ hội; sự rõ ràng về đơn hàng mới tạo ra thiện chí đàm phán sâu.',
          culturalRootEn: 'In Southern private manufacturing clusters, time equals opportunity cost; concrete order clarity earns serious negotiation focus.',
          scoreImpact: -15
        },
        {
          id: 'c',
          labelVi: 'Thổi phồng sản lượng cam kết gấp 10 lần năng lực nhập khẩu thực tế để ép giá thật thấp.',
          labelEn: 'Inflate projected order volume tenfold beyond real import capacity to force rock-bottom pricing.',
          outcomeVi: 'Bạn có thể nhận báo giá thấp ban đầu, nhưng khi đặt đơn thật nhỏ hơn nhiều, nhà máy sẽ hủy ưu đãi hoặc giảm chất lượng linh kiện để bù lỗ.',
          outcomeEn: 'You may get a low initial quote, but when real orders fall far short, the factory either retracts pricing or quietly downgrades components.',
          culturalRootVi: 'Thương nhân Hoa Nam rất nhạy bén với tính khả thi của đơn hàng; mất chữ Tín (信) từ đơn đầu sẽ đóng cửa hợp tác lâu dài.',
          culturalRootEn: 'Southern merchants quickly gauge order realism; losing credibility (xin 信) on the first order destroys long-term cooperation.',
          scoreImpact: -15
        }
      ]
    },
    {
      id: 'neg-south-02-tea-table-negotiation',
      regionStyle: 'Hoa Nam',
      situationVi: 'Tại Phật Sơn hoặc Hạ Môn, chủ xưởng mời bạn ngồi vào bàn trà Công Phu (Gongfu Tea) ngay trong văn phòng để trao đổi lại điều khoản giao hàng đang bị bế tắc.',
      situationEn: 'In Foshan or Xiamen, the factory owner invites you to sit at the office Gongfu tea table to revisit a deadlocked delivery schedule.',
      choices: [
        {
          id: 'a',
          labelVi: 'Vui vẻ tham dự bàn trà, gõ nhẹ hai ngón tay lên mặt bàn cảm ơn khi được rót trà (Khấu thủ lễ), lắng nghe khó khăn thực tế về lịch chuyền rồi cùng tìm giải pháp chia lô giao từng phần.',
          labelEn: 'Join the tea table warmly, tap two fingers lightly to thank the host when poured (finger kowtow), listen to actual line-scheduling constraints, and co-design a split-shipment solution.',
          outcomeVi: 'Không khí căng thẳng tan biến; chủ xưởng đồng ý ưu tiên ghép chuyền cho lô đầu tiên để kịp lịch bán hàng của bạn.',
          outcomeEn: 'Tension dissolves; the owner agrees to prioritize your first partial shipment to meet your retail launch window.',
          culturalRootVi: 'Tại Mân Nam và Quảng Đông, bàn trà (Công Phu Trà) là nơi giải quyết mâu thuẫn mềm dẻo; cử chỉ gõ nhẹ hai ngón tay biểu thị sự am hiểu văn hóa bản địa.',
          culturalRootEn: 'In Minnan and Guangdong, the Gongfu tea table functions as a flexible problem-solving space; the finger-tap gesture signals deep local cultural fluency.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Từ chối uống trà và yêu cầu quay lại bàn họp lập biên bản phạt vi phạm ngay lập tức.',
          labelEn: 'Decline tea and demand returning to the conference table to draft a penalty notice immediately.',
          outcomeVi: 'Đối tác chuyển sang thế phòng thủ pháp lý cứng rắn, kéo dài tranh cãi và làm chậm thêm tiến độ giao hàng.',
          outcomeEn: 'The supplier shifts into rigid defensive mode, escalating disputes and further delaying shipment.',
          culturalRootVi: 'Bàn trà là tín hiệu chủ xưởng muốn tháo gỡ vấn đề bằng thiện chí (Hòa khí sinh tài 和气生财) trước khi dùng biện pháp chế tài.',
          culturalRootEn: 'Inviting you for tea signals willingness to resolve bottlenecks amicably (heqi shengcai) before invoking formal penalties.',
          scoreImpact: -15
        },
        {
          id: 'c',
          labelVi: 'Uống trà xã giao nhưng hoàn toàn không nhắc lại vấn đề tiến độ giao hàng vì ngại làm mất hòa khí.',
          labelEn: 'Drink tea politely while avoiding any mention of the delivery deadline to keep the peace.',
          outcomeVi: 'Cuộc gặp vui vẻ nhưng lịch giao hàng vẫn không có mốc cam kết rõ ràng.',
          outcomeEn: 'The session stays pleasant, yet the shipment timeline remains unresolved.',
          culturalRootVi: 'Khéo léo ở bàn trà là mềm trong thái độ nhưng rõ ràng và kiên định trong mục tiêu giải pháp.',
          culturalRootEn: 'Effective tea-table diplomacy pairs warmth in tone with clarity and firmness on actionable milestones.',
          scoreImpact: -5
        }
      ]
    },
    {
      id: 'neg-south-03-wechat-follow-up',
      regionStyle: 'Hoa Nam',
      situationVi: 'Sau cuộc gặp trực tiếp tại Nghĩa Ô, đối tác đề nghị lập nhóm WeChat chung gồm bạn, nhân viên kinh doanh và quản đốc xưởng để cập nhật tiến độ làm mẫu và đóng gói.',
      situationEn: 'Following an in-person meeting in Yiwu, the supplier proposes a shared WeChat group with you, the sales rep, and the workshop supervisor to track sampling and packaging.',
      choices: [
        {
          id: 'a',
          labelVi: 'Tham gia nhóm WeChat để phối hợp tiến độ nhanh, nhưng quy định rõ mọi thay đổi về giá, thông số kỹ thuật và lịch giao hàng cuối cùng phải xác nhận lại bằng văn bản email hoặc phụ lục hợp đồng có dấu.',
          labelEn: 'Join the WeChat group for rapid day-to-day coordination, while stipulating that any final changes to price, technical specs, or delivery dates must be confirmed via formal email or stamped contract addendum.',
          outcomeVi: 'Bạn vừa tận dụng được tốc độ phản hồi thời gian thực của hệ sinh thái Trung Quốc vừa bảo toàn hồ sơ chứng cứ pháp lý minh bạch.',
          outcomeEn: 'You capture China\'s real-time operational speed while preserving a clean, enforceable legal audit trail.',
          culturalRootVi: 'WeChat là công cụ vận hành thương mại cốt lõi tại Trung Quốc, nhưng tách bạch giữa "trao đổi tác nghiệp nhanh" và "xác nhận pháp lý chuẩn" giúp tránh tranh chấp về sau.',
          culturalRootEn: 'WeChat powers daily Chinese commerce, yet separating rapid operational chat from formal legal confirmation prevents downstream disputes.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Chốt toàn bộ sửa đổi thiết kế, tăng đơn giá và gia hạn giao hàng chỉ bằng tin nhắn thoại (Voice message) trên WeChat.',
          labelEn: 'Approve all design revisions, price hikes, and delivery extensions purely via WeChat voice messages.',
          outcomeVi: 'Khi hàng về bị sai màu hoặc thiếu phụ kiện, không có bản đặc tả chốt cuối rõ ràng để đối chiếu nghiệm thu và khiếu nại.',
          outcomeEn: 'When goods arrive with wrong colors or missing parts, no unified specification exists to substantiate a claim.',
          culturalRootVi: 'Tin nhắn thoại dễ gây hiểu nhầm phiên âm, khó trích xuất làm chứng cứ chuẩn trong kiểm định chất lượng và trọng tài.',
          culturalRootEn: 'Voice notes invite transcription misunderstandings and make poor evidentiary records in QC audits or arbitration.',
          scoreImpact: -15
        },
        {
          id: 'c',
          labelVi: 'Từ chối dùng WeChat và yêu cầu toàn bộ ảnh kiểm hàng chỉ gửi qua thư bảo đảm bưu điện.',
          labelEn: 'Refuse WeChat entirely and demand all production photos be sent by postal mail.',
          outcomeVi: 'Phản hồi chậm trễ nhiều tuần, bỏ lỡ thời điểm vàng sửa lỗi ngay trên dây chuyền sản xuất.',
          outcomeEn: 'Communication lags by weeks, missing the critical window to correct defects on the assembly line.',
          culturalRootVi: 'Từ chối kênh kết nối phổ biến tại thực địa làm đứt gãy nhịp phối hợp với quản đốc xưởng Hoa Nam.',
          culturalRootEn: 'Rejecting local operational channels breaks real-time coordination with Southern workshop supervisors.',
          scoreImpact: -15
        }
      ]
    },
    {
      id: 'neg-south-04-quality-drift-renegotiation',
      regionStyle: 'Hoa Nam',
      situationVi: 'Đơn hàng mẫu đầu tiên tại Đông Hoản đạt chuẩn xuất sắc, nhưng đến lô hàng lớn thứ hai, bên kiểm định độc lập (PSI) báo tỷ lệ lỗi ngoại quan vượt ngưỡng AQL do xưởng tự ý đổi nhà cung cấp hạt nhựa rẻ hơn.',
      situationEn: 'Your initial Dongguan pilot batch passed flawlessly, but on the second bulk order, your third-party PSI inspector reports cosmetic defects exceeding AQL limits because the factory quietly switched to cheaper resin.',
      choices: [
        {
          id: 'a',
          labelVi: 'Tạm dừng giải ngân phần thanh toán còn lại theo đúng điều khoản hợp đồng, gửi báo cáo PSI có ảnh định lượng cụ thể, yêu cầu tái sản xuất hoặc phân loại sửa lỗi (Rework) tại xưởng trước khi xuất tàu và tái kiểm tra.',
          labelEn: 'Hold the balance payment strictly per contract terms, share the documented PSI report with defect photos, and require sorting/rework or replacement at the factory followed by re-inspection before shipment.',
          outcomeVi: 'Nhà máy nhận thấy hệ thống kiểm soát của bạn nghiêm ngặt và có căn cứ hợp đồng rõ ràng, chấp nhận chi phí tái phân loại và cam kết khóa nguồn vật liệu cho các lô sau.',
          outcomeEn: 'Recognizing your disciplined, contract-backed enforcement, the factory absorbs rework costs and locks approved resin sourcing for future runs.',
          culturalRootVi: 'Hiện tượng "trượt chất lượng" (Quality Fade) chỉ được chặn đứng bằng cơ chế kiểm định khách quan gắn chặt với dòng tiền thanh toán thay vì chỉ tin vào lời hứa miệng.',
          culturalRootEn: 'Preventing "quality fade" requires objective third-party inspection linked directly to payment milestones rather than verbal assurances.',
          scoreImpact: 20
        },
        {
          id: 'b',
          labelVi: 'Chấp nhận cho tàu chạy trước để kịp tiến độ bán hàng và tin lời hứa "lô sau sẽ làm bù kỹ hơn".',
          labelEn: 'Release shipment to meet sales dates while accepting a verbal promise that "the next batch will be better."',
          outcomeVi: 'Hàng lỗi vào đến kho Việt Nam không thể đổi trả, chi phí khiếu nại khách hàng và tổn thất thương hiệu vượt xa chi phí chờ sửa lỗi tại xưởng.',
          outcomeEn: 'Defective cargo lands in Vietnam with no practical return path, causing customer claims and brand damage far exceeding rework delays.',
          culturalRootVi: 'Nhượng bộ tiêu chuẩn chất lượng ở lô lớn gửi tín hiệu sai rằng người mua dễ dãi với việc cắt giảm nguyên liệu.',
          culturalRootEn: 'Conceding quality standards on bulk runs signals that material substitution will go unchecked.',
          scoreImpact: -20
        },
        {
          id: 'c',
          labelVi: 'Hủy toàn bộ quan hệ mà không gửi bằng chứng kỹ thuật và không thương lượng phương án xử lý tiền cọc.',
          labelEn: 'Cut off all communication without sending technical evidence or negotiating deposit recovery.',
          outcomeVi: 'Bạn mất trắng tiền đặt cọc và tốn thêm nhiều tháng tìm và đánh giá lại nhà máy mới từ đầu.',
          outcomeEn: 'You forfeit your deposit and lose months qualifying a replacement manufacturer from scratch.',
          culturalRootVi: 'Xử lý sự cố chuỗi cung ứng hiệu quả cần kết hợp sự kiên quyết về hợp đồng với quy trình khắc phục kỹ thuật (CAPA) rõ ràng.',
          culturalRootEn: 'Effective supply-chain recovery pairs contractual firmness with structured corrective action (CAPA).',
          scoreImpact: -10
        }
      ]
    }
  ];

  window.CCE_BIZ_EXPANSION_V3.industrialClusters = window.CCE_BIZ_EXPANSION_V3.industrialClusters || [];
  window.CCE_BIZ_EXPANSION_V3.enterpriseCases = window.CCE_BIZ_EXPANSION_V3.enterpriseCases || [];
  window.CCE_BIZ_EXPANSION_V3.negotiationScenarios = window.CCE_BIZ_EXPANSION_V3.negotiationScenarios || [];

  mergeById(window.CCE_BIZ_EXPANSION_V3.industrialClusters, INDUSTRIAL_CLUSTERS);
  mergeById(window.CCE_BIZ_EXPANSION_V3.enterpriseCases, ENTERPRISE_CASES);
  mergeById(window.CCE_BIZ_EXPANSION_V3.negotiationScenarios, NEGOTIATION_SCENARIOS);
})();
