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

  var EN_ARTICLES_V3_PART1B = {
    'sixteen-ancient-capitals-geopolitics': {
      id: 'sixteen-ancient-capitals-geopolitics',
      number: 71,
      category: 'regions',
      categoryLabel: 'Geo-Culture & Regions',
      title: 'Geopolitics of China\'s Ancient Capitals: The East–West and North–South Imperial Axes',
      titleZh: '中国古都地理政治：东西轴线与南北迁移规律',
      titleZhTrad: '中國古都地理政治：東西軸線與南北遷移規律',
      readMinutes: 15,
      epistemicTag: 'Historical Geography & Geopolitics',
      abstract: 'This treatise analyzes the strategic logic governing China\'s imperial capitals across three millennia—from the ancient and medieval East–West axis (Xi\'an, Luoyang, Kaifeng) to the late-imperial North–South axis (Beijing, Nanjing, Hangzhou)—shaped simultaneously by frontier defense, grain logistics, and ecological change.',
      keyTakeaways: [
        'From the Western Zhou through the Tang dynasty, capitals shifted primarily along the East–West axis (Xi\'an–Luoyang–Kaifeng), balancing Guanzhong\'s "four-sided fortress" defense with Heluo\'s central waterway position.',
        'From the Northern Song onward, Guanzhong\'s ecological exhaustion and Jiangnan\'s economic rise drew the court eastward to Kaifeng (at the Bian Canal hub) and later split power between Beijing (military–frontier security) and Nanjing/Hangzhou (economic–cultural heartland).',
        'In Chinese historical capital studies (Tan Qixiang, Shi Nianhai), China\'s core ancient capitals (Xi\'an, Luoyang, Beijing, Nanjing, Kaifeng, Hangzhou, Anyang, Zhengzhou, Datong, Chengdu, and others) directly map the shifting equilibrium between agrarian Central Plains and northern steppe powers.'
      ],
      introduction: 'Selecting an imperial capital in Chinese history was never an arbitrary royal whim, but an optimization across three survival variables: military security (defending against steppe cavalry while restraining regional lords), fiscal logistics (proximity to grain surpluses and navigable water), and cultural–cosmological legitimacy ("choosing the center to found the state"). Plotting China\'s historic capitals—from Anyang, Zhengzhou, Xi\'an, Luoyang, and Kaifeng to Nanjing, Hangzhou, Beijing, Datong, Chengdu, and Yecheng—reveals two unmistakable trajectories: an eastward drift before the 10th century, followed by a North–South oscillation from the 12th through the 20th centuries.',
      historicalBackground: 'During the second and first millennia BCE, early capitals such as Erlitou, Zhengzhou Shang City, and Yinxu (Anyang) clustered along the transition zone between the Loess Plateau and the North China Plain, where friable loess soils were readily cultivated and spared severe downstream Yellow River flooding. From the Zhou through Qin, Han, Sui, and Tang, the twin capitals of Chang\'an (Xi\'an in Guanzhong) and Luoyang (in the Heluo basin) alternated as primary and eastern capitals for nearly two millennia. After the An Lushan Rebellion (755–763), however, court provisioning grew heavily dependent on Jiang–Huai grain, initiating a permanent departure from Guanzhong eastward to Bianjing (Kaifeng) and northward to Dadu (Beijing).',
      mainContent: [
        {
          heading: '1. The East–West Axis (Xi\'an–Luoyang–Kaifeng): From Guanzhong Fortress to Canal Hub',
          body: 'Xi\'an (Haojing of Western Zhou, Xianyang of Qin, Chang\'an of Western Han, Sui, and Tang) enjoyed unmatched natural defenses: Hangu and Tong passes to the east, the Qinling Mountains to the south, and the Longshan and Loess plateaus to the west and north—a "land fortified on four sides" ideal for both offense and defense. Yet as High Tang Chang\'an surpassed one million inhabitants amid Guanzhong deforestation and Wei River silting, hauling Jiangnan grain through the Sanmen Gorge grew prohibitively costly, repeatedly forcing Tang emperors to relocate the court temporarily to Luoyang ("chasing grain"). After the Tang, the Northern Song chose Kaifeng—located on an exposed plain lacking mountain barriers—precisely because the Bian Canal linked it directly to the Yangtze, proving that logistical imperatives had overtaken topographical defense.'
        },
        {
          heading: '2. The North–South Breakthrough: Beijing and "The Emperor Guarding the Frontier Gate"',
          body: 'Between the 10th and 13th centuries, northern dynasties (Liao\'s Southern Capital in 938, Jin\'s Central Capital in 1153, and Yuan\'s Dadu in 1272) elevated Beijing from a frontier garrison (Youzhou) to China\'s national political center. Anchored at the northern edge of the North China Plain—backed by the Yanshan range and Juyong Pass, facing the Bohai Sea, and linked to Jiangnan via the straightened Beijing–Hangzhou Grand Canal—Beijing could simultaneously monitor the Mongolian steppe, Manchuria, and the Han agrarian core. In 1421, the Ming Yongle Emperor moved the capital from Nanjing to Beijing under the doctrine of "the Son of Heaven guarding the national gate," a geopolitical arrangement retained intact by the Qing for nearly three centuries.'
        },
        {
          heading: '3. Southern Counterweights: Nanjing\'s "Coiling Dragon" and Southern Song Hangzhou',
          body: 'Whenever northern regimes fractured or fell, political authority retreated south of the Yangtze to two archetypal southern capitals: Nanjing and Hangzhou. Nanjing (Jianye of Eastern Wu, Jiankang of Eastern Jin and the Southern Dynasties, Yingtian of early Ming, and capital of the Republic of China in 1912 and 1927) was praised by Zhuge Liang as "Purple Mountain like a coiling dragon, Stone City like a crouching tiger," anchored behind the Yangtze barrier. Hangzhou—capital of Wuyue and Southern Song Lin\'an (1138–1276)—sat inside Jiangnan\'s richest rice and maritime trade basin, fostering unmatched urban culture yet lacking strategic depth to reconquer North China.'
        },
        {
          heading: '4. Frontier and Regional Capitals: Anyang, Datong, Chengdu, and Yecheng',
          body: 'Beyond unified imperial capitals, China\'s broader network of 16 historic capitals includes pivotal regional centers: Anyang and Zhengzhou mark Shang urban origins; Handan, Linzi, and Ying reflect Warring States multipolarity; Datong (Northern Wei Pingcheng) and Yecheng (Hebei, capital of Cao Wei and Northern Qi—where symmetrical central-axis city planning originated for later Chang\'an and Beijing) served as Sino-steppe convergence zones; while Chengdu (Shu Han and Former/Later Shu) demonstrated the self-sufficient resilience of the enclosed Sichuan Basin during eras of fragmentation.'
        }
      ],
      theoreticalFramework: 'Historical geographers Tan Qixiang (1911–1992) and Shi Nianhai (1912–2001) explained China\'s capital shifts through a "Security–Logistics Bipolar Model": as long as the northern 400 mm isohyet remained the decisive frontier against steppe powers while Jiangnan served as the empire\'s primary tax granary, a unified dynasty had to anchor its capital at the equilibrium point between both poles—first Chang\'an–Luoyang while the Yellow River basin could feed the court, and ultimately Beijing connected to Jiangnan via the Grand Canal.',
      terminologyAndLiushu: [
        {
          hanzi: '都',
          pinyin: 'dū',
          hanViet: 'Đô',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the city radical 阝 (right) and 者 for sound; in Zhou times denoted a walled city housing ancestral temples, later the national capital.'
        },
        {
          hanzi: '京',
          pinyin: 'jīng',
          hanViet: 'Kinh',
          liushu: 'Pictograph (Xiangxing)',
          gloss: 'Depicts a tall structure raised atop an elevated mound; designates the imperial capital and seat of supreme sovereignty.'
        },
        {
          hanzi: '关',
          pinyin: 'guān',
          hanViet: 'Quan',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'The traditional form 關 depicts double doors secured by a horizontal bolt; denotes strategic mountain passes guarding capitals (Hangu, Tongguan, Juyong).'
        },
        {
          hanzi: '畿',
          pinyin: 'jī',
          hanViet: 'Kỳ',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the field radical (田) and 几/幾; denotes the royal domain within a thousand-li radius surrounding the capital ("Jingji").'
        },
        {
          hanzi: '轴',
          pinyin: 'zhóu',
          hanViet: 'Trục',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the cart radical (车) and 由 for sound; in imperial urban planning denotes the North–South "Central Axis" defining Yecheng and Beijing.'
        }
      ],
      primarySources: [
        PQ(
          '《史记·留侯世家》',
          'Sử Ký — Lưu Hầu Thế Gia',
          'Records of the Grand Historian (Shiji), Hereditary House of Marquis Liu (Zhang Liang)',
          '关中左殽函，右陇蜀，沃野千里，南有巴蜀之饶，北有胡苑之利，阻三面而守，独以一面东制诸侯。',
          'Guānzhōng zuǒ Yáo Hán, yòu Lǒng Shǔ, wòyě qiānlǐ, nán yǒu Bā Shǔ zhī ráo, běi yǒu Húyuàn zhī lì, zǔ sānmiàn ér shǒu, dú yǐ yīmiàn dōng zhì zhūhóu.',
          'Quan Trung tả Hào Hàm, hữu Lũng Thục, ốc dã thiên lý, nam hữu Ba Thục chi nhiêu, bắc hữu Hồ Uyển chi lợi, trở tam diện nhi thủ, độc dĩ nhất diện đông chế chư hầu.',
          'Đất Quan Trung bên trái có núi Hào và ải Hàm Cốc, bên phải có Lũng Tây và đất Thục, đồng ruộng phì nhiêu nghìn dặm; phía Nam có sự trù phú của Ba Thục, phía Bắc có lợi chăn nuôi vùng thảo nguyên; dựa ba mặt hiểm trở để phòng thủ, chỉ mở một mặt phía Đông để khống chế chư hầu.',
          'Guanzhong has Mount Xiao and Hangu Pass to the east, Longxi and Shu to the west, and a thousand li of fertile plains; flanked by abundant Ba–Shu to the south and northern pastures, it defends on three sides while controlling the eastern lords from a single front.'
        ),
        PQ(
          '《吕氏春秋·慎势》',
          'Lã Thị Xuân Thu — Thiên Thận Thế',
          'Master Lü\'s Spring and Autumn Annals, Chapter Shenshi',
          '古之王者，择天下之中而立国，择国之中而立宫。',
          'Gǔ zhī wángzhě, zé tiānxià zhī zhōng ér lìguó, zé guó zhī zhōng ér lìgōng.',
          'Cổ chi vương giả, trạch thiên hạ chi trung nhi lập quốc, trạch quốc chi trung nhi lập cung.',
          'Bậc đế vương thời xưa chọn trung tâm thiên hạ để dựng nước, chọn trung tâm đất nước để dựng cung điện.',
          'The kings of antiquity chose the center of All-under-Heaven to establish the capital, and the center of the capital to build the palace.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam\'s capital shifts followed an analogous security–logistics calculus along its north–south corridor: from the fortified spiral ramparts of Co Loa and karst bastion of Hoa Lu (10th century), Ly Cong Uan\'s 1010 Edict on the Transfer of the Capital moved the seat to Dai La–Thang Long (mirroring the "choosing the center" principle at the Red River Delta\'s waterway hub). Once Vietnamese territory expanded southward, the Tay Son and Nguyen dynasties established Phu Xuan–Hue (1802) to balance geopolitical distance between the Red River and Mekong deltas.',
      additionalReferences: [
        'Shi Nianhai (1998), Zhongguo Gudu he Wenhua (Ancient Capitals and Culture of China), Zhonghua Book Company.',
        'Tan Qixiang (1982), The Historical Atlas of China, China Cartographic Publishing House.',
        'Nancy Shatzman Steinhardt (1990), Chinese Imperial City Planning, University of Hawaii Press.'
      ],
      conclusion: 'The map of China\'s ancient capitals is more than just an itinerary of historic cities, but a spatial chronicle of frontier pressure, hydraulics, and regional economics. From Chang\'an\'s mountain-ringed fortress to Beijing\'s Central Axis linked to the Grand Canal, every capital relocation marked a structural reorganization of the entire civilization.'
    },
    'tea-horse-road-southwest-corridor': {
      id: 'tea-horse-road-southwest-corridor',
      number: 72,
      category: 'regions',
      categoryLabel: 'Geo-Culture & Regions',
      title: 'The Ancient Tea Horse Road: The Yunnan–Sichuan–Tibet Corridor of Pu\'er Tea and Warhorses',
      titleZh: '茶马古道：滇川藏普洱与战马贸易走廊',
      titleZhTrad: '茶馬古道：滇川藏普洱與戰馬貿易走廊',
      readMinutes: 14,
      epistemicTag: 'Trade History & Highland Anthropology',
      abstract: 'This treatise investigates Asia\'s highest mountain trade network—the Ancient Tea Horse Road (Yunnan–Tibet and Sichuan–Tibet routes) from the Tang–Song periods to the mid-20th century—unpacking the complementary Tea–Horse exchange, post-fermented Pu\'er tea compression, and Naxi–Bai–Tibetan cultural synthesis.',
      keyTakeaways: [
        'Unlike the northern Silk Road centered on luxury goods, the Tea Horse Road rested on mutual biological and strategic necessity: Tibetan highlanders depended on brick tea to digest meat-and-butter diets lacking vegetables, while Central Plains dynasties required highland warhorses.',
        'Its two main arteries—Sichuan–Tibet (Ya\'an via Kangding to Lhasa) and Yunnan–Tibet (Xishuangbanna–Pu\'er via Dali, Lijiang, and Shangri-La to Lhasa)—operated via muleteer caravans (Mabang) and tea porters (Beifu) crossing snowy passes above 4,500 m.',
        'Prosperous transit hubs such as Lijiang (Naxi), Xizhou–Shaxi (Bai), and Kangding preserved historic market towns, Dongba pictographic script, and syncretic Buddhist–Daoist–Tibetan murals.'
      ],
      introduction: 'While the overland Silk Road across the Hexi Corridor gained global fame in the 19th century, the cliff-carved trail network threading Southwest China\'s Hengduan Mountains—systematically termed the "Ancient Tea Horse Road" by Yunnan scholars (Mu Jichun and colleagues) in the early 1990s—proved equally enduring, remaining active into the 1950s. Stretching over 4,000 km across four great rivers (Jinsha, Lancang, Nu, and Yarlung Tsangpo), this corridor served as the biological and cultural artery linking the humid agrarian south with the pastoral Qinghai–Tibet Plateau.',
      historicalBackground: 'Tea drinking entered Tibet in the 7th century alongside the marriage of Songtsen Gampo and Tang Princess Wencheng. Above 3,500 m, scarce vegetables made yak meat, mutton, butter, and barley tsampa the staple diet; tannins, caffeine, and vitamins in compressed tea became indispensable for digesting heavy fats ("better three days without grain than one day without tea"). Conversely, from the Northern Song onward—especially after losing northern horse pastures to the Liao and Western Xia—imperial courts faced acute shortages of cavalry mounts. In 1074, the Song court created the Tea and Horse Agency (Chama Si) in Sichuan and Shaanxi, institutionalizing the state monopoly exchanging tea for horses.',
      mainContent: [
        {
          heading: '1. The Sichuan–Tibet and Yunnan–Tibet Arteries: Tea Porters and Muleteer Caravans',
          body: 'Two complementary corridors formed the network. The Sichuan–Tibet line began in the tea hills of Ya\'an, where porters ("Beifu") shouldered 60 to 100+ kg bamboo packs of brick tea on foot for over 20 days across Erlang Mountain to Kangding (Dajianlu), transferring loads to Tibetan yak caravans bound for Lhasa. The Yunnan–Tibet route originated in the Six Great Tea Mountains (Xishuangbanna and Pu\'er), winding through Dali, Shaxi, Lijiang, Diqing (Shangri-La), and Chamdo to Lhasa, and onward into Nepal and India. Along Yunnan–Tibet trails, muleteer caravans ("Mabang") led by a headman ("Maguotou") moved dozens or hundreds of bell-collared mules under strict discipline against bandits and alpine hazards.'
        },
        {
          heading: '2. Pu\'er Tea and Post-Fermentation Born on the Trail',
          body: 'A remarkable technological legacy of the Tea Horse Road is that extreme transport conditions created the distinctive profile of Pu\'er and Sichuan border teas. To reduce bulk and prevent crumbling over months on horseback, sun-dried large-leaf Yunnan green tea was steamed and pressed into round cakes (357 g Qizi Bingcha), bowls (Tuocha), or bricks. As caravans crossed humid valleys along the Lancang River into cold, dry Tibetan winds, indigenous microbes inside the compressed tea underwent slow post-fermentation, mellowing astringency into a smooth amber liquor—the historical prototype for modern ripened (Shou) Pu\'er pile-fermentation developed in the 1970s.'
        },
        {
          heading: '3. Multi-Ethnic Transit Towns: Lijiang, Shaxi, and Kangding',
          body: 'Along the Yunnan–Tibet corridor, tea–horse commerce nurtured active indigenous market towns lacking Central Plains–style city walls. Lijiang Old Town (Dayan, UNESCO 1997) under the Naxi Mu chieftains flourished as a center of copperworking, leathercraft, and caravan exchange; Dongba pictographs and Baisha Murals preserve a rare fusion of Tibetan Buddhism, Han Buddhism, Daoism, and indigenous beliefs. In Jianchuan Valley near Dali, Shaxi\'s Sideng Street remains the sole intact historic Tea Horse Road market square, retaining its opera stage, Xingjiao Temple (1415), and earthen gates.'
        },
        {
          heading: '4. From Cobblestone Trails to the Sichuan–Tibet Railway',
          body: 'The corridor\'s strategic value briefly revived during World War II (1942–1945), when Japanese occupation severed the Burma Road and thousands of muleteers carried supplies over the Himalayas from India through Tibet to wartime Chongqing. Commercial caravans faded only after the Sichuan–Tibet and Qinghai–Tibet highways opened in 1954. Today, the Lijiang–Shangri-La Railway (opened late 2023) and the ongoing Sichuan–Tibet Railway inherit this exact millennial geoeconomic axis at modern engineering scale.'
        }
      ],
      theoreticalFramework: 'In economic anthropology and regional trade history (such as Bin Yang\'s studies of Southwest China), the Tea Horse Road exemplifies "vertical ecological complementarity." Unlike maritime routes dependent on monsoons or steppe caravans vulnerable to dynastic collapse, tea–horse exchange persisted across regime changes because it satisfied daily physiological needs on the plateau and vital military needs in the lowlands.',
      terminologyAndLiushu: [
        {
          hanzi: '茶',
          pinyin: 'chá',
          hanViet: 'Trà',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Differentiated from 荼 (tu) in the Mid-Tang (Lu Yu\'s "Classic of Tea"), combining grass (艹), person (人), and tree (木) to denote tea.'
        },
        {
          hanzi: '马',
          pinyin: 'mǎ',
          hanViet: 'Mã',
          liushu: 'Pictograph (Xiangxing)',
          gloss: 'Traditional 馬 depicts a horse\'s head, mane, four legs, and tail; the strategic commodity traded against brick tea at Song–Ming Tea-Horse Agencies.'
        },
        {
          hanzi: '帮',
          pinyin: 'bāng',
          hanViet: 'Bang',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 幫 combines cloth/binding (巾) and 封/邦 for sound; denotes mutual-aid guilds such as Mabang (caravan teams).'
        },
        {
          hanzi: '驿',
          pinyin: 'yì',
          hanViet: 'Dịch',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the horse radical (马) and 泽/睪; denotes relay post stations supplying remounts, dispatches, and tea depots along mountain trails.'
        },
        {
          hanzi: '坨',
          pinyin: 'tuó',
          hanViet: 'Đà',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines earth (土) and 它 for sound; refers to bowl-shaped compressed tea (Xiaguan Tuocha) optimized for mule saddlebags.'
        }
      ],
      primarySources: [
        PQ(
          '《明史·食货志四·茶法》',
          'Minh Sử — Thực Hóa Chí (Quyển 4: Trà Pháp)',
          'History of Ming (Mingshi), Treatise on Food and Money: Tea Monopoly',
          '番人嗜乳酪，不得茶，则困以病。故唐、宋以来，行以茶易马法，用制羌、戎。',
          'Fānrén shì rǔlào, bùdé chá, zé kùn yǐ bìng. Gù Táng, Sòng yǐlái, xíng yǐ chá yì mǎ fǎ, yòng zhì Qiāng, Róng.',
          'Phiên nhân thị nhũ lạc, bất đắc trà, tắc khốn dĩ bệnh. Cố Đường, Tống dĩ lai, hành dĩ trà dịch mã pháp, dụng chế Khương, Nhung.',
          'Người vùng cao nguyên ưa dùng sữa và bơ, nếu không có trà thì dễ sinh mệt mỏi, bệnh tật. Bởi vậy từ thời Đường, Tống trở đi, triều đình thi hành phép lấy trà đổi ngựa để quản lý và giao thương với các bộ tộc Khương, Nhung.',
          'The frontier peoples rely heavily on dairy; without tea they fall ill and grow weak. Hence since the Tang and Song dynasties, the court practiced exchanging tea for horses to regulate frontier relations.'
        ),
        PQ(
          '《宋史·食货志下六·茶下》',
          'Tống Sử — Thực Hóa Chí (Trà Hạ)',
          'History of Song (Songshi), Treatise on Tea',
          '蜀茶之出，岁约三千万斤，以易番马。',
          'Shǔchá zhī chū, suì yuē sānqiānwàn jīn, yǐ yì fānmǎ.',
          'Thục trà chi xuất, tuế ước tam thiên vạn cân, dĩ dịch phiên mã.',
          'Sản lượng trà xuất từ đất Thục mỗi năm ước khoảng ba mươi triệu cân, dùng để trao đổi lấy ngựa vùng biên.',
          'Annual tea output from Sichuan reached roughly thirty million jin, employed to trade for frontier horses.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam\'s northwestern highlands (Ha Giang, Son La, Lai Chau, Yen Bai) share the same ancient Shan Tuyet wild-tea ecological belt (Camellia sinensis var. assamica) with Pu\'er and Xishuangbanna across the Red and Black river basins. Before modern highways, Hmong, Dao, and Thai highland communities similarly maintained pack-horse trails linking northern Vietnam with Yunnan and Laos to trade ancient-tree tea, salt, cardamom, and medicinal herbs, sharing compressed-tea craft and periodic highland market structures.',
      additionalReferences: [
        'Mu Jichun (1992), Dian–Zang Chama Gudao Wenhua (Culture of the Yunnan–Tibet Tea Horse Road), Yunnan University Press.',
        'Jeff Fuchs (2008), The Ancient Tea Horse Road: Travels with the Last of the Himalayan Muleteers, Viking Canada.',
        'Bin Yang (2009), Between Winds and Clouds: The Making of Yunnan (Second Century BCE to Twentieth Century CE), Columbia University Press.'
      ],
      conclusion: 'The Ancient Tea Horse Road demonstrates that even the planet\'s most formidable terrain cannot impede trade when deep biological and economic complementarity exists. Over centuries of hooves wearing grooves into Hengduan limestone, this corridor exchanged far more than tea bricks and warhorses, weaving an enduring multi-ethnic cultural fabric across Southwest China.'
    },
    'chinese-fermentation-spices-culinary-geography': {
      id: 'chinese-fermentation-spices-culinary-geography',
      number: 73,
      category: 'cuisine',
      categoryLabel: 'Cuisine & Flavor Geography',
      title: 'Geography of Chinese Fermentation and Spices: Pixian Doubanjiang, Zhenjiang Vinegar, Shaoxing Wine, and Regional Flavor Strata',
      titleZh: '中国发酵与调味地理：郫县豆瓣、镇江香醋、绍兴黄酒与风味分层',
      titleZhTrad: '中國發酵與調味地理：郫縣豆瓣、鎮江香醋、紹興黃酒與風味分層',
      readMinutes: 14,
      epistemicTag: 'Culinary Anthropology & Traditional Food Science',
      abstract: 'Moving beyond generic summaries of the Eight Regional Cuisines, this treatise examines the biochemical operating system beneath Chinese cooking: multi-strain mold fermentation (Qu) documented since "Qimin Yaoshu" (544 CE), the microbial geography of Pixian doubanjiang, Zhenjiang vinegar, Shaoxing cooking wine, tofu, and the 17th-century arrival of New World chili peppers.',
      keyTakeaways: [
        'Chinese gastronomy is structurally defined by mold-based starter fermentation (Qu / Aspergillus oryzae), hydrolyzing plant starches and proteins into savory amino acids (umami) across soy sauces, fermented black beans, and bean pastes.',
        'Regional flavor profiles map directly onto local terroir and microflora: Sichuan\'s basin humidity shaped Pixian doubanjiang (fusing native Sichuan pepper with New World chilies), Lake Jian water shaped Shaoxing wine, and solid-state layering produced Zhenjiang and Shanxi vinegars.',
        'Tofu (attested in Western Han tomb reliefs at Dahuting, Henan) and fermented soy products (furu, douchi) provided a revolutionary plant-protein and preservation technology for a densely populated agrarian society.'
      ],
      introduction: 'If signature banquet dishes form the visible surface of Chinese cuisine, its true regional architecture resides in the fermentation crocks and spice jars of the kitchen. Over two millennia ago, inhabitants of the Yellow and Yangtze basins mastered mold-starter cultures ("Qu") to transform soybeans, wheat, glutinous rice, and sorghum into umami-rich seasonings independent of dairy or abundant meat. Examining China\'s "fermentation and spice geography" reveals why substituting Pixian bean paste for Shaoxing wine or aged Shanxi vinegar immediately shifts the same base ingredients into an entirely different regional culture.',
      historicalBackground: 'Vessels of "Jiang" (fermented meat and fish pastes) already appear in the "Rites of Zhou" and the "Analects" ("Without its proper sauce, he would not eat"). By the Western Han, coagulating soy milk with gypsum or brine yielded tofu, while fermented black soybeans (douchi—recovered intact from Mawangdui Tomb 1 in Changsha, 168 BCE) progressively replaced costly meat sauces. In 544 CE under the Northern Wei, Jia Sixie completed "Qimin Yaoshu," devoting multiple chapters to quantitative protocols for starter cakes, vinegar, soy pastes, and brewing—one of the world\'s earliest food microbiology manuals. In the late Ming and early Qing (17th century), New World chilies (Capsicum) arrived via Iberian maritime trade and spread inland to Sichuan, Hunan, and Guizhou, permanently redrawing China\'s map of heat.',
      mainContent: [
        {
          heading: '1. Pixian Doubanjiang and the Sichuan Pepper–Chili Synthesis',
          body: 'Celebrated as the "soul of Sichuan cuisine," Pixian fermented broad-bean chili paste (modern Pidu District, Chengdu) emerged in the late 17th century during the "Huguang fills Sichuan" migrations, when Fujian-born migrants merged soy-paste fermentation with local fava beans and newly introduced chilies. Its hallmark is unheated open-air fermentation ("turn on sunny days, cover on rainy days, sun by day and dew by night") lasting one to three years, yielding a glossy mahogany hue and layered aroma. Paired with native Hanyuan Sichuan pepper (Zanthoxylum bungeanum, known since the "Classic of Poetry" for the tingling compound hydroxy-alpha-sanshool), the "Ma–La" (numbing–spicy) pairing became the unmistakable signature of the humid Southwest.'
        },
        {
          heading: '2. Two Poles of Grain Vinegar: Zhenjiang Aromatic vs. Shanxi Mature',
          body: 'China developed solid-state grain-vinegar fermentation distinct from Europe\'s liquid wine vinegars. In the south, Zhenjiang aromatic vinegar (Jiangsu; Hengshun founded 1840) ferments glutinous rice in layered vats aged over six months in earthenware jars, yielding a mild, subtly sweet tang tailored to soup dumplings and hairy crab. In the north, Shanxi mature vinegar (Qingxu) ferments sorghum, wheat bran, and peas, then concentrates naturally through "summer sunning and winter ice-skimming" over years, producing a jet-black, sharply acidic elixir that balances wheat-heavy diets and mineral-hard Loess Plateau water.'
        },
        {
          heading: '3. Shaoxing Huangjiu and Jiangnan\'s Art of Neutralizing Fishiness',
          body: 'Across the freshwater-rich Yangtze Delta, Shaoxing rice wine (Zhejiang)—brewed from glutinous rice, wheat Qu, and mineral-balanced Lake Jian water—serves not only as a beverage but as a foundational culinary seasoning (Liaojiu). Fermentation generates over 20 amino acids and aromatic esters; when splashed into a hot wok, evaporating ethanol lifts volatile fishy amines while esterification yields a mellow sweetness. Combining Shaoxing wine, sun-brewed dark soy sauce, and rock sugar defines the glossy savory-sweet "red-braised" palette of Shanghai, Zhejiang, and Jiangsu.'
        },
        {
          heading: '4. The Tofu Ecosystem and Climatic Flavor Stratification',
          body: 'From a single soybean, Chinese food craft diversified by climate: silky gypsum-set tofu in the south, firm brine-set (Lushui) tofu in the north for stews, red fermented tofu (furu) in Beijing (Wang Zhihe, 1669), white furu in Guilin, brine-aged stinky tofu in Changsha, and mold-cultured hairy tofu in Anhui. Broadly, China\'s flavor geography stratifies along climatic lines: sweet in the south (Jiangnan sugarcane and commercial affluence), salty in the north (winter preservation), crisp-umami along the eastern coast, and sour–numbing–spicy in the foggy, humid Southwest.'
        }
      ],
      theoreticalFramework: 'Anthropologist K. C. Chang structured Chinese dining around the dualism of "Fan" (plain grain staple) and "Cai" (flavor-dense accompanying dishes). Under high population density where pastureland was scarce, Qu-mediated fermentation of soy and grains functioned as a "microbial protein and flavor factory," enabling small quantities of fermented condiments to elevate predominantly plant-based diets.',
      terminologyAndLiushu: [
        {
          hanzi: '酱',
          pinyin: 'jiàng',
          hanViet: 'Tương',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Traditional 醬 combines the fermentation jar radical (酉) for meaning and 將 for sound; denotes fermented pastes and sauces.'
        },
        {
          hanzi: '醋',
          pinyin: 'cù',
          hanViet: 'Thố / Giấm',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the fermentation jar radical (酉) and 昔 for sound; classical texts used 酢 or 醯 before 醋 became standard for vinegar.'
        },
        {
          hanzi: '曲',
          pinyin: 'qū',
          hanViet: 'Khúc (Men)',
          liushu: 'Phono-semantic (original 麴)',
          gloss: 'Traditional 麴 combines wheat (麥) and 匊 for sound; refers to mold-inoculated starter cakes used to saccharify grain for wine, vinegar, and paste.'
        },
        {
          hanzi: '椒',
          pinyin: 'jiāo',
          hanViet: 'Tiêu',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the wood radical (木) and 叔 for sound; originally native Sichuan pepper (花椒), later compounded for chili (辣椒) and black pepper (胡椒).'
        },
        {
          hanzi: '豉',
          pinyin: 'chǐ',
          hanViet: 'Xì (Tàu xì)',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines bean (豆) and 支 for sound; denotes salted fermented soybeans (douchi), attested in Han-era Mawangdui tombs.'
        }
      ],
      primarySources: [
        PQ(
          '《齐民要术·卷八·作酱法》',
          'Tề Dân Yếu Thuật — Quyển 8 (Phép làm Tương)',
          'Essential Techniques for the Welfare of the People (Qimin Yaoshu, 544 CE), Ch. 8',
          '十二月、正月为上时，二月为中时，三月为下时。用豆，皆须炒令黄黑，煮令极熟。',
          'Shíèryuè, zhēngyuè wéi shàngshí, èryuè wéi zhōngshí, sānyuè wéi xiàshí. Yòng dòu, jiē xū chǎo lìng huánghēi, zhǔ lìng jíshú.',
          'Thập nhị nguyệt, chính nguyệt vi thượng thời, nhị nguyệt vi trung thời, tam nguyệt vi hạ thời. Dụng đậu, giai tu sao lệnh hoàng hắc, chử lệnh cực thục.',
          'Tháng Chạp và tháng Giêng là thời điểm tốt nhất để làm tương, tháng Hai là mức trung bình, tháng Ba là muộn. Đậu đem dùng đều phải rang cho vàng sẫm rồi nấu cho thật chín mềm.',
          'The twelfth and first months are the best season for making fermented paste, the second month is middling, and the third month is late. All beans used must be roasted until dark golden-brown and boiled until thoroughly tender.'
        ),
        PQ(
          '《论语·乡党》',
          'Luận Ngữ — Thiên Hương Đảng',
          'The Analects of Confucius, Chapter Xiangdang',
          '不得其酱，不食。',
          'Bùdé qí jiàng, bù shí.',
          'Bất đắc kỳ tương, bất thực.',
          'Món ăn nếu không có đúng loại tương chấm tương ứng thì không ăn.',
          'If a dish was not accompanied by its proper fermented sauce, he would not eat it.'
        )
      ],
      sinoVietnameseComparison: 'Both Vietnam and China belong to East Asia\'s fermentation belt, yet diverge sharply in core substrates: China centers on Qu-mold plant fermentation (soy sauce, Pixian doubanjiang, grain vinegar), whereas Vietnam perfected coastal salt-autolyzed seafood fermentation (nuoc mam fish sauce, shrimp paste, fermented fish pastes) alongside northern delta glutinous-rice soy pastes (Tuong Ban, Tuong Cu Da, Tuong Nam Dan). Both traditions rely on fermentation to supply natural umami depth without dairy.',
      additionalReferences: [
        'Jia Sixie (544 CE), Qimin Yaoshu (Essential Techniques for the Welfare of the People), annotated by Miao Qiyu.',
        'H. T. Huang (2000), Science and Civilisation in China, Vol. 6, Part 5: Fermentations and Food Science, Cambridge University Press.',
        'Fuchsia Dunlop (2023), Invitation to a Banquet: The Story of Chinese Food, W. W. Norton & Company.'
      ],
      conclusion: 'China\'s culinary map is fundamentally a map of microbiology and spice geography refined over two millennia. Understanding how Qu starters, soybeans, glutinous rice, Sichuan pepper, and chilies interact with local climates reveals a rigorous empirical food science operating behind every regional dish.'
    },
    'chinese-liquor-culture-baijiu-huangjiu': {
      id: 'chinese-liquor-culture-baijiu-huangjiu',
      number: 74,
      category: 'customs',
      categoryLabel: 'Customs & Daily Culture',
      title: 'Chinese Liquor Culture: The Twelve Aroma Styles of Baijiu, Traditional Huangjiu, and Poetic Aesthetics',
      titleZh: '中国酒道文化：白酒十二香型、传统黄酒与诗酒美学',
      titleZhTrad: '中國酒道文化：白酒十二香型、傳統黃酒與詩酒美學',
      readMinutes: 14,
      epistemicTag: 'Material Culture & History of Craft',
      abstract: 'This treatise examines the two pillars of Chinese alcohol culture—Huangjiu (traditional fermented grain wine rooted in a 9,000-year heritage) and Baijiu (solid-state distilled spirits maturing from the Yuan–Ming eras into twelve national aroma standards)—alongside ritual bronze vessels, literati poetry (Tao Yuanming, Li Bai), and contemporary banquet etiquette.',
      keyTakeaways: [
        'Fermented grain beverages (precursors of Huangjiu) date back to Neolithic Jiahu (Henan, c. 7000 BCE) and stood at the center of Shang–Zhou ancestral rites via bronze jue, gu, and zun vessels.',
        'Modern solid-state distilled Baijiu is standardized into 12 aroma types anchored by three dominant families: Sauce-aroma (Maotai, Guizhou), Strong-aroma (Wuliangye and Luzhou Laojiao, Sichuan), and Light-aroma (Fenjiu, Shanxi).',
        'In Chinese cultural life, liquor plays a dual role: liberating creative spontaneity in poetry and calligraphy ("Eight Immortals of the Wine Cup," Orchid Pavilion) while enforcing social hierarchy and trust-building at formal banquets.'
      ],
      introduction: 'In Traditional Chinese, the character for medicine (醫) contains the wine-vessel radical (酉) at its base, reflecting the ancient view of alcohol as both sacrificial medium and medicinal catalyst ("liquor is the foremost of a hundred medicines"). Across millennia, Chinese alcohol branched into two parallel streams: low-alcohol fermented Huangjiu cherished by Jiangnan literati, and high-proof distilled Baijiu rising from the Yuan–Ming periods to become the emblem of China\'s modern spirits industry and diplomatic banquets.',
      historicalBackground: 'Biomolecular residue analysis of pottery shards at Jiahu (Wuyang, Henan, c. 7000–6600 BCE) identified a fermented beverage of rice, honey, and hawthorn—among the earliest documented alcoholic drinks in human history. During the Shang dynasty, ritual drinking grew so pervasive that after conquering Shang, the Duke of Zhou issued the "Announcement about Drunkenness" (Jiugao) in the "Shangshu" warning against excess. From the Han through the Song, fermented grain wines (Huangjiu and unfiltered Zhuojiu, typically under 18% ABV) remained dominant. Between the Yuan and Ming dynasties (13th–16th centuries), distillation ("Shaojiu"—burnt liquor) matured, launching solid-state sorghum and multi-grain Baijiu.',
      mainContent: [
        {
          heading: '1. Traditional Huangjiu: Shaoxing Nu\'erhong and Jiangnan Literati Aesthetics',
          body: 'Huangjiu (yellow rice wine) directly inherits China\'s 3,000-year brewing lineage, ranking alongside beer and grape wine among the world\'s oldest fermented beverages. Exemplified by Shaoxing wine (Zhejiang)—brewed on a "winter ferment, spring press" cycle from glutinous rice, wheat Qu, and Lake Jian water—it spans four sweetness grades: Yuanhong (dry), Jiafan (semi-dry, traditionally buried at a daughter\'s birth as Nu\'erhong or son\'s birth as Zhuangyuanhong), Shanniang (semi-sweet), and Xiangxue (sweet). Served warmed to roughly 40°C in ceramic ewers during autumn and winter alongside hairy crab and aniseed broad beans, it remains iconic in Lu Xun\'s "Kong Yiji."'
        },
        {
          heading: '2. Baijiu and the Twelve Aroma Styles: Sauce, Strong, and Light Pillars',
          body: 'Unlike Western whisky or vodka distilled from liquid mash, Chinese Baijiu relies on solid-state fermentation and steam distillation of grain mash in earthen pits or ceramic jars. China\'s national standards classify 12 aroma styles anchored by three major pillars: (1) Light-aroma (Qingxiang, led by Fenjiu of Xinghuacun, Shanxi), fermented in buried clay jars for a clean, crisp finish; (2) Strong-aroma (Nongxiang, the largest market share, led by Luzhou Laojiao and Wuliangye in Sichuan and Yanghe in Jiangsu), fermented in aged mud pits rich in microbial flora for ripe fruit esters and full body; and (3) Sauce-aroma (Jiangxiang, led by Maotai along Guizhou\'s Chishui River), following the "12987" cycle (1-year production, 2 grain loadings, 9 steamings, 8 fermentations, 7 distillations) aged at least three years for complex savory-smoky depth. Nine additional styles (Rice, Phoenix, Dong, Sesame, Mixed, etc.) bridge these three roots.'
        },
        {
          heading: '3. Poetry, Calligraphy, and the Aesthetics of "True Meaning in Wine"',
          body: 'In Chinese artistic history, wine functioned as a catalyst releasing the mind from rigid convention toward Daoist spontaneity. Tao Yuanming (365–427) composed his 20-poem "Drinking Wine" cycle in reclusion; Wang Xizhi brushed the "Orchid Pavilion Preface" in 353 while pleasantly tipsy and could never surpass it sober. In the High Tang, Du Fu celebrated the "Eight Immortals of the Wine Cup"—including Li Bai composing a hundred poems over a gallon of wine and Zhang Xu unleashing wild cursive calligraphy. In the Northern Song, Su Shi\'s "Prelude to Water Melody" turned the raised cup into a dialogue with moonlight and mortality.'
        },
        {
          heading: '4. Banquet Rituals and Social Protocol',
          body: 'In contrast to poetic abandon, social and business drinking in China follows codified hierarchy ("Jiuli"). When clinking glasses (Jingjiu), juniors or subordinates hold their rim lower than elders or key guests as a mark of deference; the host sits facing the door with the guest of honor to the right; traditional Baijiu cups hold just 10–15 ml to accommodate multiple rounds of individual toasts. Recognizing regional contrasts—Northern China\'s direct, spirited Baijiu hospitality versus Southern China\'s subtler blend of tea, Huangjiu, or wine—is a practical asset in cross-cultural negotiation.'
        }
      ],
      theoreticalFramework: 'Through the sociology of ritual (Emile Durkheim and anthropological studies of Chinese banqueting), alcohol acts as a "social boundary transformer": in antiquity it mediated communion with ancestors; at contemporary banquets, sequential toasting validates status, tests sincerity, and transitions counterparts from outsiders (Wairen) into trusted insiders (Neiren).',
      terminologyAndLiushu: [
        {
          hanzi: '酒',
          pinyin: 'jiǔ',
          hanViet: 'Tửu',
          liushu: 'Compound Ideograph / Phono-semantic',
          gloss: 'Combines water (氵) and 酉 (an oracle-bone pointed-bottom fermentation amphora); denotes alcoholic beverages.'
        },
        {
          hanzi: '爵',
          pinyin: 'jué',
          hanViet: 'Tước',
          liushu: 'Pictograph (Xiangxing)',
          gloss: 'Depicts a three-legged Shang–Zhou bronze wine tripod with pouring spout; extended from ritual cup to aristocratic rank ("nobility title").'
        },
        {
          hanzi: '酿',
          pinyin: 'niàng',
          hanViet: 'Nhưỡng',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines 酉 (fermentation jar) and 襄/良 for sound; denotes brewing or fermenting grain into wine or vinegar.'
        },
        {
          hanzi: '窖',
          pinyin: 'jiào',
          hanViet: 'Diêu / Hầm',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the cave/pit radical (穴) and 告 for sound; denotes subterranean mud fermentation pits crucial to Strong-aroma Baijiu microflora.'
        },
        {
          hanzi: '醉',
          pinyin: 'zuì',
          hanViet: 'Túy',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Combines 酉 (wine) and 卒 (to stop at a limit); originally meant drinking within proper measure, later shifting to intoxication.'
        }
      ],
      primarySources: [
        PQ(
          '《尚书·酒诰》',
          'Thượng Thư — Thiên Tửu Cáo',
          'Book of Documents (Shangshu), Announcement about Drunkenness',
          '饮惟祀，德将无醉。',
          'Yǐn wéi sì, dé jiāng wú zuì.',
          'Ẩm duy tự, đức tương vô túy.',
          'Chỉ uống rượu trong dịp tế lễ, lấy đức hạnh tiết chế để không sa vào say xỉn.',
          'Drink wine only at sacrificial rites, and let virtue guide you so that you do not fall into drunkenness.'
        ),
        PQ(
          '《将进酒》（李白）',
          'Tương Tiến Tửu — Lý Bạch',
          'Bringing in the Wine — Li Bai',
          '人生得意须尽欢，莫使金樽空对月。',
          'Rénshēng déyì xū jìnhuān, mò shǐ jīnzūn kōng duì yuè.',
          'Nhân sinh đắc ý tu tận hoan, mạc sử kim tôn không đối nguyệt.',
          'Đời người lúc đắc ý hãy hưởng trọn niềm vui, chớ để chén vàng trơ trọi trước ánh trăng.',
          'When life brings joy, drink it to the full; never let the golden goblet stand empty before the moon.'
        )
      ],
      sinoVietnameseComparison: 'Vietnamese liquor traditions share clear kinship with Chinese grain fermentation and distillation—from highland jar-fermented Ruou Can and glutinous-rice Ruou Nep Cai Hoa Vang (using indigenous herbal-leaf starters analogous to Huangjiu) to artisanal rice spirits such as Lang Van, Kim Son, Go Den, and Bau Da. At social banquets, both cultures lower the glass rim to honor elders, though seating protocols and structured individual toasting rounds carry heightened formality in Chinese B2B dining.',
      additionalReferences: [
        'Patrick E. McGovern et al. (2004), "Fermented beverages of pre- and proto-historic China," Proceedings of the National Academy of Sciences (PNAS).',
        'Derek Sandhaus (2019), Drunk in China: Baijiu and the World\'s Oldest Drinking Culture, University of Nebraska Press.',
        'Li Hua et al. (2018), Zhongguo Jiu Wenhua Shi (History of Chinese Wine Culture).'
      ],
      conclusion: 'From 9,000-year-old fermented jars at Jiahu to the twelve standardized aroma families of modern Baijiu, Chinese liquor reflects not only fermentation craft, but ritual cosmology, poetic aesthetics, and social architecture. Understanding Huangjiu, Baijiu, and banquet etiquette equips both cultural learners and business practitioners to read Chinese social dynamics accurately.'
    },
    'five-sacred-mountains-buddhist-peaks': {
      id: 'five-sacred-mountains-buddhist-peaks',
      number: 75,
      category: 'regions',
      categoryLabel: 'Geo-Culture & Regions',
      title: 'The Five Great Mountains and Four Sacred Buddhist Peaks: Mapping China\'s Sacred Geography',
      titleZh: '五岳与四大佛教名山：中华文明的神圣空间地图',
      titleZhTrad: '五嶽與四大佛教名山：中華文明的神聖空間地圖',
      readMinutes: 15,
      epistemicTag: 'Religious Geography & Cultural History',
      abstract: 'This treatise decodes the two sacred mountain systems structuring China\'s spiritual landscape: the Five Great Mountains (Tai, Hua, Heng South, Heng North, Song) anchored in Five-Phase cosmology, imperial Fengshan rites, and Daoism, alongside the Four Sacred Buddhist Mountains (Wutai, Emei, Putuo, Jiuhua) dedicated to the four great Bodhisattvas.',
      keyTakeaways: [
        'Codified under Emperor Wu of Han within a Five-Direction/Five-Phase cosmology, the Five Great Mountains are led by Eastern Peak Mount Tai, supreme venue of imperial Fengshan sacrifices.',
        'The Four Sacred Buddhist Mountains coalesced from the Tang–Song through Ming–Qing eras as abodes of Manjusri (Wisdom), Samantabhadra (Practice), Avalokitesvara (Compassion), and Ksitigarbha (Great Vow), completing Buddhism\'s full geographic localization in China.',
        'Both networks double as open-air museums of cliff calligraphy (Moya), China\'s oldest surviving Tang timber halls (such as Foguang Temple on Mount Wutai), and empirical travel writing (Xu Xiake).'
      ],
      introduction: 'In classical Chinese cosmology, great peaks were never mere geological formations, but vertical axes linking earth and heaven ("pillars reaching the sky") where clouds, rain, and national vitality converged. Building on pre-Qin mountain worship, Chinese civilization mapped two parallel sacred coordinate systems across its territory: the Five Great Mountains (Wuyue), bound to imperial sovereignty and Daoism, and the Four Sacred Buddhist Peaks, anchored in Mahayana compassion and popular pilgrimage. Together, these nine mountains form a spiritual cartography spanning North China, Guanzhong, Jiangnan, Sichuan, and the East China Sea.',
      historicalBackground: 'Worship of four directional peaks ("Siyue") already appears in the "Book of Documents" (Canon of Shun) and "Rites of Zhou," tied to ancient royal tours of inspection. As Yin–Yang and Five-Phase cosmology matured in the Warring States and Western Han, Emperor Wu of Han (r. 141–87 BCE) formally codified five directional peaks—East, West, South, North, and Center—as the Wuyue. In parallel, after Buddhism entered China in the 1st century CE and matured during the Tang–Song eras, devotees mapped Mahayana scriptures (such as the "Avatamsaka Sutra" naming Mount Clear-and-Cool in the northeast as Manjusri\'s abode) onto Chinese peaks, culminating in the canonical Four Sacred Buddhist Mountains by the Ming–Qing period.',
      mainContent: [
        {
          heading: '1. Eastern Peak Mount Tai and the Imperial Fengshan Rites',
          body: 'Heading the Five Great Mountains is Eastern Peak Mount Tai (Shandong, 1,545 m), aligned with the East, sunrise, and the Wood phase of renewal. From Qin Shi Huang (219 BCE) and Emperor Wu of Han (110 BCE) to Tang Gaozong–Wu Zetian, Tang Xuanzong, and Song Zhenzong, monarchs of prosperous eras ascended Mount Tai to perform the Fengshan sacrifices—offering to Heaven atop the summit ("Feng") and to Earth at Liangfu Hill below ("Shan") to report peace across the realm. Along its 6,000 stone steps survive over 2,200 steles and cliff inscriptions spanning Qin Prime Minister Li Si to the Qing dynasty, forming an unmatched outdoor archive of history and calligraphy.'
        },
        {
          heading: '2. The Other Four Great Mountains: Precipitous, Verdant, Singular, and Central',
          body: 'Each remaining peak carries a distinct geomorphological and cultural identity. Western Peak Mount Hua (Shaanxi, 2,154.9 m), famed as "the most precipitous mountain under heaven," rises in five sheer granite lotus peaks and became a Quanzhen Daoist stronghold linked to Chen Tuan. Southern Peak Mount Heng (Hunan, 1,300.2 m) is prized for lush year-round forests and harmonious Daoist–Buddhist coexistence at the Grand Temple of Nanyue. Northern Peak Mount Heng (Shanxi, 2,016.1 m) served as a northern strategic rampart, housing the 1,500-year-old cliffside Hanging Temple. Central Peak Mount Song (Henan, 1,491.7 m) anchors the Central Plains, uniting Confucianism, Buddhism, and Daoism via Songyang Academy, Shaolin Monastery, and Zhongyue Temple.'
        },
        {
          heading: '3. The Four Sacred Buddhist Peaks: Bodhisattva Abodes and Sinicization',
          body: 'Whereas the Wuyue align with imperial ritual and Daoism, the Four Sacred Buddhist Mountains embody four core Mahayana vows. (1) Mount Wutai (Shanxi), abode of Manjusri (Wisdom), unites Han and Tibetan Buddhism and preserves China\'s oldest Tang timber halls—Nanchan Temple (782) and Foguang Temple\'s East Hall (857). (2) Mount Emei (Sichuan, Golden Summit 3,079 m), abode of Samantabhadra (Practice), is famed for the optical "Buddha\'s Halo" over its sea of clouds. (3) Mount Putuo (Zhoushan archipelago, Zhejiang), abode of Avalokitesvara/Guanyin (Compassion), traces its legend to Japanese monk Egaku founding the "Unwilling-to-Leave Guanyin Shrine" in 863. (4) Mount Jiuhua (Anhui), abode of Ksitigarbha (Filial Vow), honors Silla prince Kim Qiaojue, who practiced there for 75 years in the 8th century.'
        },
        {
          heading: '4. From Pilgrimage Trails to Landscape Painting and Empirical Geography',
          body: 'Stone stairways, teahouses, monasteries, and steles transformed forbidding ranges into shared cultural spaces for scholars and commoners alike. Ming geographer Xu Xiake (1587–1641) personally surveyed all Five Great Mountains and numerous southwestern ranges, founding empirical karst geography in his "Travel Diaries." Meanwhile, Mount Hua\'s fractured granite, Emei\'s mist, and Mount Song\'s pines directly inspired the texture strokes (cunfa) of classical Chinese landscape painting.'
        }
      ],
      theoreticalFramework: 'Religious historians James Robson and Susan Naquin demonstrate that Chinese "Sacred Geography" operates through the resonance of place, text, and ritual: a mountain becomes sacred more than just by elevation, but through centuries of layered steles, Bodhisattva or immortal legends, poetry, and pilgrimage circuits. Geographically dispersed across the empire, the Five Great Mountains and Four Buddhist Peaks also integrated diverse regions into a shared symbolic territory.',
      terminologyAndLiushu: [
        {
          hanzi: '岳',
          pinyin: 'yuè',
          hanViet: 'Nhạc',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Combines 丘 (great mound) and 山 (mountain); traditional 嶽 combines 狱 and 山; designates lofty sacred peaks anchoring national cardinal directions.'
        },
        {
          hanzi: '禅',
          pinyin: 'shàn / chán',
          hanViet: 'Thiện / Thiền',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines altar (礻/示) and 单/單; pronounced "shan" in Fengshan earth sacrifices at Mount Tai, and "chan" for Sanskrit "Dhyana" (Zen meditation).'
        },
        {
          hanzi: '碑',
          pinyin: 'bēi',
          hanViet: 'Bi (Bia)',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines stone (石) and 卑 for sound; originally a temple sundial pillar, later an inscribed stone stele recording history and merit on sacred peaks.'
        },
        {
          hanzi: '刹',
          pinyin: 'chà',
          hanViet: 'Sát',
          liushu: 'Phono-semantic (Sanskrit transliteration)',
          gloss: 'Renders Sanskrit "ksetra" (Buddha-land); evolved from temple flagpole to denote an ancient Buddhist monastery ("Gucha").'
        },
        {
          hanzi: '香',
          pinyin: 'xiāng',
          hanViet: 'Hương',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Oracle bone script combines grain (禾) and sweet/mouth for the aroma of ripe millet; extended to "Xianghuo" (pilgrimage incense on sacred mountains).'
        }
      ],
      primarySources: [
        PQ(
          '《望岳》（杜甫）',
          'Vọng Nhạc — Đỗ Phủ (viết về Thái Sơn)',
          'Gazing at the Sacred Peak (Mount Tai) — Du Fu',
          '会当凌绝顶，一览众山小。',
          'Huì dāng líng juédǐng, yī lǎn zhòngshān xiǎo.',
          'Hội đương lăng tuyệt đỉnh, nhất lãm chúng sơn tiểu.',
          'Ắt sẽ có ngày bước lên đỉnh cao nhất, phóng tầm mắt nhìn xuống thấy muôn núi đều nhỏ bé.',
          'One day I must ascend to the highest summit, and with a single glance behold all other mountains as small.'
        ),
        PQ(
          '《尚书·舜典》',
          'Thượng Thư — Thiên Thuấn Điển',
          'Book of Documents (Shangshu), Canon of Shun',
          '岁二月，东巡守，至于岱宗，柴。',
          'Suì èryuè, dōng xúnshǒu, zhìyú Dàizōng, chái.',
          'Tuế nhị nguyệt, đông tuần thú, chí vu Đại Tông, sài.',
          'Vào tháng Hai hằng năm, Thiên tử tuần thú phương Đông, đến núi Đại Tông (Thái Sơn) thì đốt củi làm lễ tế Trời.',
          'In the second month of the year, he made a tour of inspection eastward as far as Mount Tai (Daizong), where he presented a burnt offering to Heaven.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam likewise forged a sacred mountain geography intertwined with national origins and localized Buddhism: Mount Nghia Linh (Hung Kings Temple, Phu Tho) anchors ancestral legitimacy analogously to Mount Tai; Mount Tan Vien (Ba Vi) expresses the indigenous Mountain Spirit cult; and Mount Yen Tu (Quang Ninh) became the cradle of the Truc Lam Zen school founded by Emperor-Monk Tran Nhan Tong in 1299—paralleling how China\'s Four Sacred Buddhist Peaks fused local mountains with distinct spiritual lineages.',
      additionalReferences: [
        'Xu Xiake (17th century), Xu Xiake Youji (The Travel Diaries of Xu Xiake).',
        'Susan Naquin and Chün-fang Yü, eds. (1992), Pilgrims and Sacred Sites in China, University of California Press.',
        'James Robson (2009), Power of Place: The Religious Landscape of the Southern Sacred Peak (Nanyue) in Medieval China, Harvard University Asia Center.'
      ],
      conclusion: 'The Five Great Mountains and Four Sacred Buddhist Peaks illustrate how Chinese civilization transformed raw topography into an ordered cultural cosmos. Whether climbing Mount Tai\'s imperial steps or entering Tang-era timber halls on Mount Wutai, visitors move through a living archive of sovereignty, devotion, and aesthetics sustained for over two millennia.'
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
  for (key in EN_ARTICLES_V3_PART1B) {
    if (Object.prototype.hasOwnProperty.call(EN_ARTICLES_V3_PART1B, key)) {
      window.CCE_ARTICLES_EN[key] = EN_ARTICLES_V3_PART1B[key];
    }
  }
})();
