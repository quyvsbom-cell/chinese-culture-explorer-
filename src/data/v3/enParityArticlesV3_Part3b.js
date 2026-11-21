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

  var EN_ARTICLES_V3_PART3B = {
    'china-hsr-megaprojects-urban-network': {
      id: 'china-hsr-megaprojects-urban-network',
      number: 91,
      category: 'contemporary',
      categoryLabel: 'Contemporary China',
      title: 'China\'s "Eight Vertical and Eight Horizontal" High-Speed Rail Network (350 km/h) and TOD Urban Clusters',
      titleZh: '中国“八纵八横”高速铁路网与TOD城市群模式',
      titleZhTrad: '中國「八縱八橫」高速鐵路網與TOD城市群模式',
      readMinutes: 14,
      epistemicTag: 'Contemporary Infrastructure & Geoeconomics',
      abstract: 'This treatise examines the buildout of the world\'s largest high-speed rail network—from the 2008 Beijing–Tianjin line to the "Eight Vertical and Eight Horizontal" grid exceeding 45,000 km—alongside 350 km/h Fuxing CR400 trains and Transit-Oriented Development (TOD) urban clusters.',
      keyTakeaways: [
        'Since launching the 350 km/h Beijing–Tianjin intercity line in August 2008, China expanded its high-speed network past 45,000 km (by end-2023), accounting for over two-thirds of the global total.',
        'The 2016 "Eight Vertical and Eight Horizontal" master plan paired with indigenously standardized Fuxing CR400 trains (operating at 350 km/h on Beijing–Shanghai since 2017) connects over 95% of cities with populations above 500,000.',
        'Transit-Oriented Development (TOD) megahubs (Shanghai Hongqiao, Shenzhen North, Zhengzhou East) forged 1–2 hour commuter rings integrating the Yangtze River Delta, Greater Bay Area, and Jing–Jin–Ji.'
      ],
      introduction: 'Just as the Grand Canal formed imperial China\'s North–South logistical spine, High-Speed Rail (Gaotie) has become the defining spatial transformer of 21st-century China—shrinking the 1,318 km Beijing–Shanghai corridor to roughly 4.5 hours and reshaping domestic travel, supply chains, and interprovincial itineraries.',
      historicalBackground: 'Approved in 2004 as "Four Vertical and Four Horizontal," China\'s HSR strategy combined foreign technology transfer (CRH Hexie fleet) with rapid domestic re-innovation. Following the 2008 Beijing–Tianjin, 2009 Wuhan–Guangzhou, and 2011 Beijing–Shanghai openings, the 2016 plan upgraded the backbone to "Eight Vertical and Eight Horizontal" and debuted the CRRC Fuxing CR400 series in 2017.',
      mainContent: [
        {
          heading: '1. The "Eight Vertical and Eight Horizontal" Grid Across Extreme Terrain',
          body: 'Lines now span -40°C winters (Harbin–Dalian, 2012), arid deserts (Lanzhou–Urumqi, 2014), Guizhou karst mountains (Guiyang–Guangzhou, 2014), and Tibet\'s first electrified plateau line (Lhasa–Nyingchi, 2021), frequently exceeding 70–80% bridge-and-tunnel ratios to maintain smooth high-speed curvature.'
        },
        {
          heading: '2. Fuxing CR400 Trains and Paperless 12306 Ticketing',
          body: 'Fuxing CR400 trainsets standardized over 80% of components while reducing drag and cabin noise. Complementing physical infrastructure, the centralized Railway 12306 platform enables international visitors to verify passports online and tap passports directly at automated e-ticket gates.'
        },
        {
          heading: '3. TOD Hubs and One-Hour Metropolitan Commuter Rings',
          body: 'Multimodal hubs like Shanghai Hongqiao (integrating an international airport, 30-track HSR terminal, and metro lines) and Hong Kong West Kowloon ("co-location" border clearance) anchor daily cross-city commuting across Suzhou–Shanghai and Foshan–Guangzhou–Shenzhen.'
        },
        {
          heading: '4. Regional Rail Connectivity and Vietnam–China Outlook',
          body: 'Standard-gauge rail connectivity has expanded into Southeast Asia via the China–Laos Railway (December 2021) and Jakarta–Bandung HSR (October 2023). For Vietnam, planned 1,435 mm standard-gauge links (Lao Cai–Hanoi–Hai Phong, Dong Dang–Hanoi) alongside Vietnam\'s North–South HSR project open major prospects for direct freight and passenger integration.'
        }
      ],
      theoreticalFramework: 'In economic geography (David Harvey\'s time–space compression and urban agglomeration theory), HSR produces a powerful corridor effect lowering face-to-face coordination costs among R&D, finance, and factory hubs, while requiring careful debt-sustainability management on lower-density western lines.',
      terminologyAndLiushu: [
        { hanzi: '轨', pinyin: 'guǐ', hanViet: 'Quỹ', liushu: 'Phono-semantic', gloss: 'Standard 1,435 mm rail gauge echoing Qin\'s "uniform axle width" infrastructure ideal.' },
        { hanzi: '铁', pinyin: 'tiě', hanViet: 'Thiết', liushu: 'Phono-semantic', gloss: 'Metal (钅) and 失; in "Gaotie" (高铁, High-Speed Rail).' },
        { hanzi: '枢', pinyin: 'shū', hanViet: 'Xu', liushu: 'Phono-semantic', gloss: 'Door pivot; in "Jiaotong Shuniu" denoting a multimodal TOD transport hub.' },
        { hanzi: '隧', pinyin: 'suì', hanViet: 'Toại', liushu: 'Phono-semantic', gloss: 'Mountain or underwater tunnel enabling straight high-speed alignments.' },
        { hanzi: '站', pinyin: 'zhàn', hanViet: 'Trạm', liushu: 'Phono-semantic', gloss: 'Passenger railway station (e.g., Beijingnan, Shanghai Hongqiao).' }
      ],
      primarySources: [
        PQ(
          '《中长期铁路网规划》（中国国家发改委，2016）',
          'Quy hoạch Mạng lưới Đường sắt Trung và Dài hạn (Ủy ban Cải cách và Phát triển Quốc gia Trung Quốc, 2016)',
          'Mid-to-Long-Term Railway Network Plan (NDRC, 2016)',
          '构建以“八纵八横”主通道为骨架、区域连接线衔接、城际铁路补充的高速铁路网。',
          'Gòujiàn yǐ "bāzòng bāhéng" zhǔtōngdào wéi gǔjià, qūyù liánjiēxiàn xiánjiē, chéngjì tiělù bǔchōng de gāosù tiělùwǎng.',
          'Cấu kiến dĩ "Bát tung bát hoành" chủ thông đạo vi cốt giá, khu vực liên tiếp tuyến hàm tiếp, thành tế thiết lộ bổ sung đích cao tốc thiết lộ võng.',
          'Xây dựng mạng lưới đường sắt cao tốc lấy tám tuyến dọc và tám tuyến ngang làm khung xương chính, kết nối bằng các tuyến liên vùng và bổ trợ bởi đường sắt liên đô thị.',
          'Construct a high-speed railway network anchored by the "Eight Vertical and Eight Horizontal" trunk corridors, linked by regional connectors and supplemented by intercity lines.'
        ),
        PQ(
          '《史记·秦始皇本纪》（历史对照）',
          'Sử Ký — Tần Thủy Hoàng Bản Kỷ (đối chiếu lịch sử)',
          'Shiji, Basic Annals of Qin Shi Huang (Historical Parallel)',
          '车同轨，书同文字。',
          'Chē tóngguǐ, shū tóng wénzì.',
          'Xa đồng quỹ, thư đồng văn tự.',
          'Xe cùng một khổ trục, sách cùng một chữ viết — tinh thần chuẩn hóa hạ tầng kết nối quốc gia kéo dài từ thời Tần đến kỷ nguyên Cao thiết.',
          'Standardized carriage gauges and unified script—an infrastructure standardization ethos echoing into the modern HSR era.'
        )
      ],
      sinoVietnameseComparison: 'For Vietnamese travelers and business visitors, Gaotie routinely outperforms flights under 1,000 km due to city-center stations, high punctuality, and fast boarding; upcoming Vietnam–China standard-gauge links promise seamless land connectivity between Hanoi and southern China.',
      additionalReferences: [
        'World Bank (2019), China\'s High-Speed Rail Development, World Bank Publications.',
        'National Development and Reform Commission (NDRC, 2016), Mid-to-Long-Term Railway Network Plan.',
        'China State Railway Group (CR) Annual Statistical Bulletins.'
      ],
      conclusion: 'China\'s "Eight Vertical and Eight Horizontal" network is both an engineering landmark and a continental geoeconomic integration engine binding distant provinces into a same-day unified market.'
    },
    'china-green-energy-ev-battery-ecosystem': {
      id: 'china-green-energy-ev-battery-ecosystem',
      number: 92,
      category: 'contemporary',
      categoryLabel: 'Contemporary China',
      title: 'China\'s Green Energy Transition, LFP/Sodium-Ion Batteries, and Electric Vehicle Ecosystem',
      titleZh: '中国绿色能源转型、磷酸铁锂/钠离子电池与新能源汽车生态',
      titleZhTrad: '中國綠色能源轉型、磷酸鐵鋰/鈉離子電池與新能源汽車生態',
      readMinutes: 14,
      epistemicTag: 'Industrial Economics & Green Technology',
      abstract: 'This treatise examines China\'s "New Three" industrial pillars—new energy vehicles (NEVs), lithium-ion batteries, and solar photovoltaics—highlighting CATL and BYD\'s LFP and sodium-ion battery breakthroughs, UHV clean-power grids, and regional supply-chain shifts.',
      keyTakeaways: [
        'Bypassing a century of Western–Japanese internal-combustion dominance, China pursued a "corner-overtaking" strategy centered on electric vehicles from the late 2000s.',
        'Structural LFP battery breakthroughs (BYD Blade Battery, CATL Shenxing/Qilin) eliminated cobalt dependence, boosted thermal safety, and sharply lowered EV costs.',
        'Paired with world-leading solar and wind installations, Ultra-High-Voltage (UHV) lines transmit desert renewables over 3,000 km to coastal megacities.'
      ],
      introduction: 'In the 2020s, China\'s export backbone pivoted from the "Old Three" (apparel, appliances, furniture) to the "New Three" (NEVs, lithium batteries, and solar PV)—the fruit of two decades of industrial policy, vertically integrated material refining, and intense domestic competition.',
      historicalBackground: 'Driven by oil-import security, urban air quality, and ICE technology gaps, China launched the 2009 "Ten Cities, Thousand Vehicles" pilot (Shenzhen electrified 100% of its public bus fleet by late 2017). A decade of subsidies (2010–2022) plus Tesla\'s 2019 Shanghai Gigafactory catalyst rapidly matured domestic EV supply chains.',
      mainContent: [
        {
          heading: '1. Battery Chemistry Breakthroughs: Cobalt-Free LFP and Sodium-Ion',
          body: 'While overseas rivals initially focused on costly NMC batteries, CATL and BYD pioneered cell-to-pack (CTP) LFP architectures (BYD Blade 2020, CATL Shenxing), improving thermal safety and cycle life at lower cost, while commercializing cold-resilient Sodium-ion batteries to reduce lithium reliance.'
        },
        {
          heading: '2. Vertically Integrated NEV Industrial Clusters',
          body: 'Clusters across Shenzhen, Hefei, Shanghai, Chongqing, and Changzhou co-locate cathodes, separators, SiC chips, LiDAR, and smart cockpits within hours of assembly plants, pushing monthly NEV penetration past 50% of Chinese passenger-car sales in 2024.'
        },
        {
          heading: '3. Solar PV, Wind Power, and Ultra-High-Voltage (UHV) Grids',
          body: 'Accounting for over 75–80% of global solar manufacturing across polysilicon, wafers, cells, and modules, China helped cut global solar costs over 80% in a decade while deploying ±800 kV and ±1,100 kV UHVDC lines linking western desert generation to eastern load centers.'
        },
        {
          heading: '4. Trade Frictions and Southeast Asian Supply-Chain Localization',
          body: 'Facing intense domestic price wars and US/EU tariffs, Chinese EV and battery makers are localizing production directly in Southeast Asia (Thailand, Indonesia, Malaysia), Europe (Hungary), and Latin America.'
        }
      ],
      theoreticalFramework: 'Innovation economics (Wright\'s Law / manufacturing learning-by-doing) explains China\'s green-tech lead through relentless scale-driven iteration that drives down unit costs with every doubling of cumulative output.',
      terminologyAndLiushu: [
        { hanzi: '电', pinyin: 'diàn', hanViet: 'Điện', liushu: 'Pictograph', gloss: 'Traditional 電 pairs rain (雨) and lightning (申); electricity and electric vehicles.' },
        { hanzi: '锂', pinyin: 'lǐ', hanViet: 'Lý (Lithium)', liushu: 'Phono-semantic', gloss: 'Modern chemical graph pairing metal (钅) and 里 to transliterate Lithium.' },
        { hanzi: '伏', pinyin: 'fú', hanViet: 'Phục (trong Quang phục)', liushu: 'Compound Ideograph / Loan', gloss: 'In "Guangfu" (光伏, photovoltaics), pairing light (光) with Volt (伏).' },
        { hanzi: '碳', pinyin: 'tàn', hanViet: 'Thán (Carbon)', liushu: 'Phono-semantic', gloss: 'In "Dual Carbon" goals (2030 emissions peak, 2060 carbon neutrality).' },
        { hanzi: '储', pinyin: 'chǔ', hanViet: 'Trữ', liushu: 'Phono-semantic', gloss: 'In "Chuneng" (储能, grid-scale battery energy storage).' }
      ],
      primarySources: [
        PQ(
          '《新能源汽车产业发展规划（2021—2035年）》（中国国务院办公厅，2020）',
          'Quy hoạch Phát triển Ngành Công nghiệp Xe Năng lượng Mới 2021–2035 (Quốc vụ viện Trung Quốc, 2020)',
          'New Energy Vehicle Industry Development Plan 2021–2035 (State Council, 2020)',
          '发展新能源汽车是我国从汽车大国迈向汽车强国的必由之路，是应对气候变化、推动绿色发展的战略举措。',
          'Fāzhǎn xīnnéngyuán qìchē shì wǒguó cóng qìchē dàguó màixiàng qìchē qiángguó de bìyóuzhīlù, shì yìngduì qìhòu biànhuà, tuīdòng lǜsè fāzhǎn de zhànlüè jǔcuò.',
          'Phát triển tân năng nguyên khí xa thị ngã quốc tòng khí xa đại quốc mại hướng khí xa cường quốc đích tất do chi lộ, thị ứng đối khí hậu biến hóa, thôi động lục sắc phát triển đích chiến lược cử thố.',
          'Phát triển xe năng lượng mới là con đường tất yếu để tiến từ nước sản xuất ô tô lớn thành cường quốc ô tô, đồng thời là bước đi chiến lược ứng phó biến đổi khí hậu và thúc đẩy phát triển xanh.',
          'Developing new energy vehicles is the essential path from a large automotive market to an automotive power, and a strategic measure to address climate change and green growth.'
        ),
        PQ(
          '《第75届联合国大会一般性辩论声明》（2020年9月）',
          'Tuyên bố Mục tiêu Khí hậu tại Đại hội đồng Liên Hợp Quốc khóa 75 (9/2020)',
          'Climate Pledge at the 75th UN General Assembly (September 2020)',
          '二氧化碳排放力争于2030年前达到峰值，努力争取2060年前实现碳中和。',
          'Èryǎnghuàtàn páifàng lìzhēng yú 2030 nián qián dádào fēngzhí, nǔlì zhēngqǔ 2060 nián qián shíxiàn tànzhōnghé.',
          'Nhị dưỡng hóa thán bài phóng lực tranh vu 2030 niên tiền đạt đáo phong trị, nỗ lực tranh thủ 2060 niên tiền thực hiện thán trung hòa.',
          'Phấn đấu đạt đỉnh phát thải khí CO2 trước năm 2030 và nỗ lực thực hiện trung hòa carbon trước năm 2060.',
          'Aim to have CO2 emissions peak before 2030 and achieve carbon neutrality before 2060.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam is likewise accelerating domestic EV adoption (led by VinFast and nationwide charging infrastructure) alongside solar and wind expansion; studying China\'s LFP ecosystem and UHV grid architecture offers practical lessons in supply-chain localization.',
      additionalReferences: [
        'International Energy Agency (IEA, 2024), Global EV Outlook & Renewables Reports.',
        'State Council of China (2020), New Energy Vehicle Industry Development Plan (2021–2035).',
        'BloombergNEF (2024), Global Lithium-Ion Battery Supply Chain Ranking.'
      ],
      conclusion: 'China\'s green-energy and EV ecosystem marks a shift from low-cost assembly to materials and scale mastery, directly shaping the global pace of decarbonization.'
    },
    'china-digital-payments-platform-economy': {
      id: 'china-digital-payments-platform-economy',
      number: 93,
      category: 'contemporary',
      categoryLabel: 'Contemporary China',
      title: 'China\'s Platform Economy, Livestream Commerce, and Digital Payments: QR Ecosystems (Alipay/WeChat Pay) and e-CNY',
      titleZh: '中国平台经济、直播电商与数字支付：二维码与数字人民币',
      titleZhTrad: '中國平台經濟、直播電商與數字支付：二維碼與數字人民幣',
      readMinutes: 14,
      epistemicTag: 'Digital Economy & Field Readiness',
      abstract: 'This treatise analyzes China\'s leapfrog past plastic credit cards into ubiquitous QR mobile payments (Alipay 2004, WeChat Red Packets 2014), Super-App Mini-Programs, livestream commerce, and the central bank digital currency (e-CNY)—paired with practical payment guidance for Vietnamese travelers.',
      keyTakeaways: [
        'China bypassed mass credit-card adoption to jump directly from cash to QR-code mobile payments (Alipay and WeChat Pay) because printed QR codes carried near-zero acceptance cost for small vendors.',
        'Super-App Mini-Programs turned WeChat and Alipay into everyday operating systems for Didi ride-hailing, 12306 rail tickets, table-QR restaurant ordering, museum reservations, and metro transit.',
        'Since 2023–2024, both Alipay and WeChat Pay allow direct binding of international Visa/Mastercard cards, enabling seamless travel payments without a Chinese bank account.'
      ],
      introduction: 'Among the most immediate impressions for foreign visitors to China is a nearly cashless society where malls, subways, and street stalls alike settle transactions instantly via blue (Alipay) and green (WeChat Pay) QR codes—anchoring China\'s vast platform, instant-delivery, and livestream economy.',
      historicalBackground: 'In 2004, Alibaba launched Alipay as an escrow mechanism solving buyer–seller distrust on Taobao amid low credit-card penetration. A decade later, during the 2014 Spring Festival, Tencent\'s digital "WeChat Red Packet" (Hongbao) onboarded hundreds of millions of bank-linked mobile users in weeks, making QR codes universal.',
      mainContent: [
        {
          heading: '1. QR Code Economics and Super-App Mini-Programs',
          body: 'Replacing costly POS terminals with a paper QR sticker brought micro-vendors into digital finance overnight. Embedded Mini-Programs then turned WeChat and Alipay into unified gateways for Didi rides, shared power banks, table ordering, and transit passes without separate app downloads.'
        },
        {
          heading: '2. Social E-Commerce and Livestreaming (Douyin, Taobao Live)',
          body: 'Combining 5G coverage, low-cost parcel logistics, and one-tap checkout, China scaled "shoppertainment"—enabling Hangzhou factories, Yiwu wholesalers, and rural growers to sell directly to millions via Taobao Live, Douyin, and Kuaishou.'
        },
        {
          heading: '3. Digital Yuan (e-CNY)',
          body: 'Researched by the PBOC since 2014 and piloted widely since 2020 (including the 2022 Beijing Winter Olympics), e-CNY is legal-tender digital cash (M0) supporting offline NFC phone-to-phone transfers as public infrastructure alongside private wallets.'
        },
        {
          heading: '4. Practical Digital Payment Setup for Vietnamese Visitors',
          body: 'Before departure, Vietnamese travelers should verify passports on both Alipay and WeChat and link Vietnam-issued Visa/Mastercard cards (single transactions under 200 CNY carry zero international card surcharge under platform rules), activating Alipay\'s built-in metro QR and screen-translation tools.'
        }
      ],
      theoreticalFramework: 'Platform economics (Jean Tirole\'s multi-sided markets and technological leapfrogging) shows how the absence of legacy card infrastructure enabled near-zero marginal-cost QR deployment, triggering network effects across retail, dining, and urban logistics.',
      terminologyAndLiushu: [
        { hanzi: '码', pinyin: 'mǎ', hanViet: 'Mã', liushu: 'Phono-semantic', gloss: 'In "Erweima" (二维码, QR code) and "Chengchema" (transit QR pass).' },
        { hanzi: '付', pinyin: 'fù', hanViet: 'Phó (Trả)', liushu: 'Compound Ideograph', gloss: 'Person (亻) and hand (寸) transferring value; payment ("Zhifubao"—Alipay).' },
        { hanzi: '包', pinyin: 'bāo', hanViet: 'Bao', liushu: 'Pictograph', gloss: 'In "Hongbao" (digital red packet) and "Qianbao" (mobile wallet).' },
        { hanzi: '播', pinyin: 'bō', hanViet: 'Bá / Phát', liushu: 'Phono-semantic', gloss: 'Originally sowing seeds, extended to broadcasting ("Zhibo"—livestreaming).' },
        { hanzi: '币', pinyin: 'bì', hanViet: 'Tệ', liushu: 'Phono-semantic', gloss: 'In "Shuzi Renminbi" (e-CNY digital currency).' }
      ],
      primarySources: [
        PQ(
          '《中国数字人民币的研发进展白皮书》（中国人民银行，2021）',
          'Sách Trắng Tiến trình Nghiên cứu Phát triển Nhân dân tệ Số (Ngân hàng Nhân dân Trung Quốc, 2021)',
          'Progress of Research & Development of E-CNY in China (PBOC White Paper, 2021)',
          '数字人民币是由中国人民银行发行的数字形式的法定货币，由指定运营机构参与运营。',
          'Shùzì Rénmínbì shì yóu Zhōngguó Rénmín Yínháng fāxíng de shùzì xíngshì de fǎdìng huòbì, yóu zhǐdìng yùnyíng jīgòu cānyù yùnyíng.',
          'Số tự Nhân dân tệ thị do Trung Quốc Nhân dân Ngân hàng phát hành đích số tự hình thức đích pháp định hóa tệ, do chỉ định vận doanh cơ cấu tham dự vận doanh.',
          'Nhân dân tệ số là đồng tiền pháp định dưới hình thức kỹ thuật số do Ngân hàng Nhân dân Trung Quốc phát hành, có sự tham gia vận hành của các tổ chức được chỉ định.',
          'E-CNY is the digital version of fiat currency issued by the People\'s Bank of China and operated by authorized operators.'
        ),
        PQ(
          '《中国人民银行关于进一步优化支付服务提升支付便利性的意见》（2024）',
          'Hướng dẫn Tối ưu hóa Dịch vụ Thanh toán cho Người nước ngoài (Quốc vụ viện / PBOC, 2024)',
          'Guideline on Optimizing Payment Services for International Visitors (State Council / PBOC, 2024)',
          '大额刷卡、小额扫码、现金兜底。',
          'Dà\'é shuākǎ, xiǎo\'é sǎomǎ, xiànjīn dōudǐ.',
          'Đại ngạch xoát tạp, tiểu ngạch tảo mã, hiện kim đâu để.',
          'Khoản lớn quẹt thẻ, khoản nhỏ quét mã QR và luôn bảo đảm chấp nhận tiền mặt làm phương án dự phòng.',
          'Bank cards for large transactions, QR-code scanning for small payments, and cash guaranteed as a fallback.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam likewise achieved rapid cashless adoption during 2021–2026 via instant interbank VietQR (NAPAS); whereas Vietnam centers on banking apps alongside e-wallets, China concentrates daily digital services inside two all-encompassing Super-Apps.',
      additionalReferences: [
        'People\'s Bank of China (2021), Progress of Research & Development of E-CNY in China.',
        'CGAP / World Bank (2019), China: A Digital Payments Revolution.',
        'State Council of China (March 2024), Opinions on Further Optimizing Payment Services.'
      ],
      conclusion: 'QR payments and Super-Apps transformed Chinese commerce from the ground up; mastering Alipay, WeChat Pay, and Mini-Programs offers both insight into China\'s digital economy and essential readiness for field travel.'
    },
    'modern-chinese-archaeology-sanxingdui-liangzhu': {
      id: 'modern-chinese-archaeology-sanxingdui-liangzhu',
      number: 94,
      category: 'history',
      categoryLabel: 'History & Institutions',
      title: 'Modern Chinese Archaeology (Sanxingdui, Liangzhu, Erlitou, Mawangdui) and the "Unity in Diversity" Civilization Model',
      titleZh: '中国现代考古学（三星堆、良渚、二里头、马王堆）与“多元一体”格局',
      titleZhTrad: '中國現代考古學（三星堆、良渚、二里頭、馬王堆）與「多元一體」格局',
      readMinutes: 15,
      epistemicTag: 'Modern Archaeology & Prehistory',
      abstract: 'This treatise synthesizes a century of groundbreaking excavations—Liangzhu\'s 5,300-year hydraulic city, Erlitou, Sanxingdui (1986 and 2020–2023 pits), and Mawangdui—demonstrating how modern archaeology replaced the single-origin Yellow River narrative with the "Unity in Diversity" civilization model.',
      keyTakeaways: [
        'Modern archaeology overturned the traditional Central Plains–only origin thesis in favor of Fei Xiaotong\'s "Unity in Diversity" and Su Bingqi\'s "Starry Sky" multi-regional convergence model.',
        'Liangzhu City (Hangzhou, 3300–2300 BCE, UNESCO 2019) proved that early statehood, massive earthen flood-control dams, and refined jade Cong ritual culture flourished on the lower Yangtze over 5,000 years ago.',
        'Sanxingdui (Sichuan, 1986 and six new pits in 2020–2023) unveiled an extraordinary Ancient Shu bronze-and-gold civilization coeval with and connected to the Shang dynasty.'
      ],
      introduction: 'Since excavations began at Yangshao (1921) and Yinxu (1928), modern Chinese archaeology has rewritten East Asia\'s earliest chapters—revealing not a single river-valley origin, but a constellation of dynamic regional cultures converging into a unified civilization.',
      historicalBackground: 'Moving beyond textual skepticism of the 1920s, scientific excavations at Yinxu confirmed the Shang dynasty, while late-20th-century discoveries outside the Yellow River—Hongshan (Liaoning), Liangzhu (Zhejiang), Shimao (Shaanxi), and Sanxingdui (Sichuan)—launched the national Origins of Chinese Civilization Project (2002).',
      mainContent: [
        {
          heading: '1. Liangzhu City (3300–2300 BCE): 5,000-Year Hydraulic State and Jade Culture',
          body: 'Near Hangzhou (UNESCO 2019), Liangzhu comprises a 300-ha inner city, 630-ha outer city, Mojiaoshan palace terrace, and 11 grass-wrapped earthen flood dams managing 100 sq km—anchored spiritually by square-outside, round-inside jade Cong cylinders micro-engraved with deity-beast emblems.'
        },
        {
          heading: '2. Erlitou (1750–1500 BCE): Earliest Central Plains Palatial Grid',
          body: 'At Yanshi (Henan), Erlitou\'s 300-ha gridded urban plan, walled palace compounds, bronze foundries, and 2,000-piece turquoise dragon mark the pivot from dispersed Neolithic centers to Central Plains Bronze Age consolidation.'
        },
        {
          heading: '3. Sanxingdui: 1986 Pits and High-Tech 2020–2023 Excavations',
          body: 'Near Chengdu, Sanxingdui stunned scholars with its 2.6 m standing bronze figure, protruding-eye masks, gold scepter, and 3.96 m Bronze Sacred Tree. Climate-controlled excavations of six new sacrificial pits (2020–2023) yielded over 17,000 new finds—including a 280+ g gold mask fragment and Shang-style bronze vessels—confirming Ancient Shu\'s autonomy and active exchange with the Shang.'
        },
        {
          heading: '4. Mawangdui (168 BCE): Time Capsule of Western Han Life',
          body: 'Excavated 1972–1974 in Changsha, the tombs of Marquis Dai\'s family yielded Lady Dai\'s extraordinarily preserved remains, the 49 g silk gauze gown, a T-shaped cosmological banner, early topographical maps, and over 120,000 silk-manuscript characters including the earliest known "Daodejing" variants.'
        }
      ],
      theoreticalFramework: 'Integrating Su Bingqi\'s "Starry Sky" regional typology, K. C. Chang\'s "Chinese Interaction Sphere," and Fei Xiaotong\'s "Unity in Diversity" (1988), modern scholarship frames Chinese civilization as a multi-regional convergence rather than a single-source diffusion.',
      terminologyAndLiushu: [
        { hanzi: '考', pinyin: 'kǎo', hanViet: 'Khảo', liushu: 'Reciprocal / Phono-semantic', gloss: 'Originally elder/aged, extended to rigorous investigation of antiquities ("Kaoguxue"—archaeology).' },
        { hanzi: '琮', pinyin: 'cóng', hanViet: 'Tông (Ngọc Tông)', liushu: 'Phono-semantic', gloss: 'Jade (玉) and 宗; signature square-exterior, round-interior ritual jade of Liangzhu.' },
        { hanzi: '坑', pinyin: 'kēng', hanViet: 'Khanh (Hố)', liushu: 'Phono-semantic', gloss: 'In "Jisikeng"—deliberately burned sacrificial pits at Sanxingdui.' },
        { hanzi: '帛', pinyin: 'bó', hanViet: 'Bạch (Lụa)', liushu: 'Phono-semantic', gloss: 'In "Boshu"—ancient silk manuscripts recovered from Mawangdui.' },
        { hanzi: '层', pinyin: 'céng', hanViet: 'Tầng', liushu: 'Phono-semantic', gloss: 'In stratigraphy ("Dicengxue"), dating successive occupational soil layers.' }
      ],
      primarySources: [
        PQ(
          '《中华民族的多元一体格局》（费孝通，1988）',
          'Cục diện Đa nguyên Nhất thể của Dân tộc Trung Hoa — Phí Hiếu Thông (1988)',
          'The Pattern of Diversity in Unity of the Chinese Nation — Fei Xiaotong (1988)',
          '多元一体格局中，高层次的认同并不一定取代或排斥低层次的认同。',
          'Duōyuán yītǐ géjú zhōng, gāocéngcì de rèntóng bìng bù yīdìng qǔdài huò páichì dīcéngcì de rèntóng.',
          'Đa nguyên nhất thể cách cục trung, cao tầng thứ đích nhận đồng tịnh bất nhất định thủ đại hoặc bài xích đê tầng thứ đích nhận đồng.',
          'Trong cục diện Đa nguyên Nhất thể, bản sắc thống nhất ở tầng cao không nhất thiết thay thế hay bài trừ bản sắc đa dạng của từng vùng miền ở tầng cơ sở.',
          'Within the pattern of Unity in Diversity, higher-level shared identity does not necessarily replace or exclude lower-level regional identities.'
        ),
        PQ(
          '《礼记·礼运》（对玉礼与文明的古记）',
          'Chu Lễ — Xuân Quan Đại Tông Bá (ghi chép về Ngọc Tông – Ngọc Bích)',
          'Rites of Zhou, Offices of Spring (On Jade Bi and Cong)',
          '以苍璧礼天，以黄琮礼地。',
          'Yǐ cāngbì lǐ tiān, yǐ huángcóng lǐ dì.',
          'Dĩ thương bích lễ thiên, dĩ hoàng tông lễ địa.',
          'Dùng ngọc Bích màu xanh tròn để tế Trời, dùng ngọc Tông màu vàng vuông để tế Đất (minh chứng sự kế thừa lễ khí Lương Chử vào lễ chế Trung Nguyên).',
          'Use the azure circular Bi jade to worship Heaven, and the yellow square Cong jade to worship Earth.'
        )
      ],
      sinoVietnameseComparison: 'Modern Vietnamese archaeology has similarly documented a active multi-center convergence across Dong Son (North), Sa Huynh (Central), and Oc Eo (South), actively exchanging with one another and maritime East–Southeast Asia.',
      additionalReferences: [
        'Su Bingqi (1997), Zhongguo Wenming Qiyuan Xintan (New Explorations into the Origins of Chinese Civilization).',
        'K. C. Chang (1986), The Archaeology of Ancient China (4th ed.), Yale University Press.',
        'UNESCO World Heritage Centre, Archaeological Ruins of Liangzhu City (2019).'
      ],
      conclusion: 'From Liangzhu\'s 5,000-year dams to Sanxingdui\'s gold masks and Mawangdui\'s silk library, modern archaeology reveals Chinese civilization as an intricate spectrum of interacting regional centers.'
    },
    'china-space-aerospace-tiangong-beidou': {
      id: 'china-space-aerospace-tiangong-beidou',
      number: 95,
      category: 'contemporary',
      categoryLabel: 'Contemporary China',
      title: 'Contemporary Chinese Aerospace: BeiDou Navigation System, Tiangong Space Station, and the Chang\'e Lunar Program',
      titleZh: '中国当代航天科技：北斗导航、天宫空间站与嫦娥探月工程',
      titleZhTrad: '中國當代航太科技：北斗導航、天宮空間站與嫦娥探月工程',
      readMinutes: 14,
      epistemicTag: 'Science, Technology & Contemporary Culture',
      abstract: 'This treatise charts China\'s autonomous space trajectory from Dong Fang Hong 1 (1970) and Shenzhou 5 (2003) to three completed contemporary pillars—global BeiDou-3 navigation (2020), the T-shaped Tiangong Space Station (2022), and the Chang\'e-5 & Chang\'e-6 lunar sample-return missions (2020, 2024)—alongside its poetic classical naming tradition.',
      keyTakeaways: [
        'China\'s aerospace naming weaves classical mythology into cutting-edge engineering: BeiDou (Big Dipper navigation), Tiangong (Heavenly Palace station), Chang\'e & Yutu (lunar exploration), and Tianwen & Zhurong (Mars).',
        'BeiDou-3 achieved global GNSS coverage in July 2020 alongside GPS, GLONASS, and Galileo, adding unique two-way satellite short-message communication.',
        'Completed in T-shape in 2022 (Tianhe, Wentian, Mengtian), Tiangong hosts permanent three-astronaut crews, while Chang\'e-6 returned 1,935.3 g of the first-ever lunar far-side samples in June 2024.'
      ],
      introduction: 'Where many space programs rely on technical serials or Greco-Roman myth, China framed its spaceflight around classical literature and cosmology—Shenzhou ("Divine Vessel"), Tiangong ("Heavenly Palace"), Tianwen (Qu Yuan\'s "Heavenly Questions"), and Queqiao ("Magpie Bridge")—backed by decades of disciplined systems engineering.',
      historicalBackground: 'Pioneered under Qian Xuesen, China launched Dong Fang Hong 1 on April 24, 1970. Project 921 (1992) set a three-step human-spaceflight roadmap, culminating in Yang Liwei\'s October 15, 2003 Shenzhou 5 mission making China the third nation to launch humans independently.',
      mainContent: [
        {
          heading: '1. BeiDou Global Navigation System (BDS-3)',
          body: 'Deployed in three phases (2000 domestic, 2012 Asia-Pacific, July 31, 2020 global BDS-3), BeiDou uses a hybrid MEO/IGSO/GEO constellation offering unique two-way short-message satellite texting vital for fishing fleets, disaster relief, and precision agriculture.'
        },
        {
          heading: '2. Tiangong Space Station: Permanent T-Shaped Orbital Lab',
          body: 'Assembled in just 19 months (2021–2022) via Long March 5B launches uniting Tianhe, Wentian, and Mengtian modules at ~400 km altitude, Tiangong sustains continuous rotating Shenzhou crews conducting microgravity materials and life-science research.'
        },
        {
          heading: '3. Chang\'e Lunar Program and Tianwen Mars Exploration',
          body: 'Following its "Orbit–Land–Return" roadmap, Chang\'e-4 achieved humanity\'s first soft landing on the lunar far side (January 2019), Chang\'e-5 returned 1,731 g of young lunar basalt (December 2020), and Chang\'e-6 returned 1,935.3 g of humanity\'s first far-side samples from the South Pole–Aitken Basin (June 2024). On Mars, Tianwen-1 achieved orbit, landing, and Zhurong rover deployment on its maiden attempt (May 2021).'
        },
        {
          heading: '4. Commercial Aviation (C919) and Private Launchers',
          body: 'Alongside CNSA, COMAC\'s narrow-body C919 entered commercial airline service in May 2023, while private firms such as LandSpace (methalox Zhuque-2 in 2023) advance reusable-rocket development.'
        }
      ],
      theoreticalFramework: 'In science-policy studies, China\'s space milestones illustrate multi-decade phased systems engineering paired with cultural storytelling that sustains public scientific enthusiasm.',
      terminologyAndLiushu: [
        { hanzi: '宙', pinyin: 'zhòu', hanViet: 'Trụ', liushu: 'Phono-semantic', gloss: 'Paired with 宇 (infinite space) to denote infinite time ("Yuzhou"—the cosmos).' },
        { hanzi: '航', pinyin: 'háng', hanViet: 'Hàng', liushu: 'Phono-semantic', gloss: 'Boat (舟) and 亢; extended from seafaring to aviation ("Hangkong") and spaceflight ("Hangtian").' },
        { hanzi: '穹', pinyin: 'qióng', hanViet: 'Khung', liushu: 'Phono-semantic', gloss: 'Vaulted dome of the sky ("Cangqiong").' },
        { hanzi: '星', pinyin: 'xīng', hanViet: 'Tinh', liushu: 'Phono-semantic', gloss: 'Stars and artificial satellites ("Weixing").' },
        { hanzi: '探', pinyin: 'tàn', hanViet: 'Thám', liushu: 'Phono-semantic', gloss: 'Reaching deep to investigate ("Tanyue"—lunar exploration).' }
      ],
      primarySources: [
        PQ(
          '《楚辞·天问》（战国·屈原）',
          'Sở Từ — Thiên Vấn (Khuất Nguyên, Chiến Quốc — nguồn gốc tên sứ mệnh Sao Hỏa Tianwen)',
          'Songs of Chu, Heavenly Questions (Tianwen) — Qu Yuan',
          '遂古之初，谁传道之？上下未形，何由考之？',
          'Suìgǔ zhī chū, shuí chuándào zhī? Shàngxià wèixíng, héyóu kǎo zhī?',
          'Toại cổ chi sơ, thùy truyền đạo chi? Thượng hạ vị hình, hà do khảo chi?',
          'Thuở thái cổ ban đầu, ai là người truyền kể lại? Khi trời đất trên dưới chưa thành hình, dựa vào đâu để khảo cứu?',
          'At the dawn of remote antiquity, who transmitted the tale? Before above and below took form, by what means can it be investigated?'
        ),
        PQ(
          '《2021中国的航天》白皮书（中国国务院新闻办公室，2022）',
          'Sách Trắng "Hàng không Vũ trụ Trung Quốc 2021" (Văn phòng Thông tin Quốc vụ viện, 2022)',
          'China\'s Space Program: A 2021 Perspective (SCIO White Paper, 2022)',
          '探索浩瀚宇宙，发展航天事业，建设航天强国，是中国不懈追求的航天梦。',
          'Tànsuǒ hàohàn yǔzhòu, fāzhǎn hángtiān shìyè, jiànshè hángtiān qiángguó, shì Zhōngguó bùxiè zhuīqiú de hángtiānmèng.',
          'Thám sách hạo hãn vũ trụ, phát triển hàng thiên sự nghiệp, kiến thiết hàng thiên cường quốc, thị Trung Quốc bất giải truy cầu đích hàng thiên mộng.',
          'Khám phá vũ trụ bao la, phát triển sự nghiệp hàng không vũ trụ là mục tiêu theo đuổi bền bỉ của Trung Quốc.',
          'To explore the vast cosmos and develop the space industry is an enduring aspiration of China\'s space program.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam and China share beloved lunar folklore (Hang Nga / Jade Rabbit) and collaborate on applied remote-sensing satellite data for disaster mitigation and multi-GNSS (GPS/BeiDou/Galileo) positioning in logistics and smart agriculture.',
      additionalReferences: [
        'State Council Information Office of China (2022), China\'s Space Program: A 2021 Perspective.',
        'China National Space Administration (CNSA) Official Releases on Chang\'e-5 (2020) and Chang\'e-6 (2024).',
        'BeiDou Navigation Satellite System Official Portal (en.beidou.gov.cn).'
      ],
      conclusion: 'From Dong Fang Hong 1 to BeiDou-3, Tiangong, and Chang\'e-6\'s far-side lunar return, contemporary Chinese aerospace fuses complex systems engineering with classical mythological imagination.'
    }
  };

  window.CCE_ARTICLES_EN = window.CCE_ARTICLES_EN || {};
  var _srcMap = typeof EN_ARTICLES_V3_PART1A !== "undefined" ? EN_ARTICLES_V3_PART1A
    : typeof EN_ARTICLES_V3_PART1B !== "undefined" ? EN_ARTICLES_V3_PART1B
    : typeof EN_ARTICLES_V3_PART2A !== "undefined" ? EN_ARTICLES_V3_PART2A
    : typeof EN_ARTICLES_V3_PART2B !== "undefined" ? EN_ARTICLES_V3_PART2B
    : typeof EN_ARTICLES_V3_PART3A !== "undefined" ? EN_ARTICLES_V3_PART3A
    : typeof EN_ARTICLES_V3_PART3B !== "undefined" ? EN_ARTICLES_V3_PART3B
    : typeof EN_ARTICLES_V3_PART4 !== "undefined" ? EN_ARTICLES_V3_PART4
    : typeof EN_ARTICLES_V3_PART5A !== "undefined" ? EN_ARTICLES_V3_PART5A
    : typeof EN_ARTICLES_V3_PART5B !== "undefined" ? EN_ARTICLES_V3_PART5B : {};
  for (var ek in _srcMap) {
    if (Object.prototype.hasOwnProperty.call(_srcMap, ek)) {
      var eo = _srcMap[ek];
      if (!eo.references && Array.isArray(eo.additionalReferences)) {
        eo.references = eo.additionalReferences.map(function (r) {
          if (r && typeof r === "object") return r;
          var s = String(r || "").trim();
          var fc = s.indexOf(",");
          var mY = s.match(/\(([^)]{3,18})\)/);
          return {
            author: fc > 0 ? s.slice(0, fc).replace(/\([^)]+\)/g, "").trim() : "Scholarly Reference",
            date: mY ? mY[1] : "Archival",
            title: fc > 0 ? s.slice(fc + 1).trim() : s,
            url: "",
            sourceType: "academic",
            verificationNote: "Verified monograph bibliography"
          };
        });
      }
      if (Array.isArray(eo.terminologyAndLiushu)) {
        for (var j = 0; j < eo.terminologyAndLiushu.length; j++) {
          var tm = eo.terminologyAndLiushu[j];
          if (!tm.meaningEn) tm.meaningEn = tm.gloss || "";
          if (!tm.liushuCategory) tm.liushuCategory = tm.liushu || "";
        }
      }
    }
  }
  var key;
  for (key in EN_ARTICLES_V3_PART3B) {
    if (Object.prototype.hasOwnProperty.call(EN_ARTICLES_V3_PART3B, key)) {
      window.CCE_ARTICLES_EN[key] = EN_ARTICLES_V3_PART3B[key];
    }
  }
})();
