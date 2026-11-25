// ============================================================================
// PROMPT A — MODULE 4: EN PARITY FOR HISTORY (14 DYNASTIES / 32 TIMELINE EVENTS)
// & GEOGRAPHY / REGIONS (6 MACRO-REGIONS, 16 CITIES, 34 PROVINCES LAYER 1/2/3)
// Scholarly English translations matching every base record 1:1.
// ============================================================================
(function () {
  "use strict";

  const HISTORY_PERIODS_EN = {
    "prehistoric": {
      spanEn: "c. 1,700,000 – 2070 BCE",
      overviewEn: "Era of Paleolithic hominid sites (Yuanmou, Zhoukoudian) transitioning into settled Neolithic agriculture across Yellow River (Yangshao, Longshan) and Yangtze River (Hemudu, Liangzhu) basins — proving Sinitic civilization arose polycentrically rather than from one single linear source.",
      politicsEn: "Transitioned from egalitarian matrilineal clan villages (early Yangshao) toward stratified chiefdoms and confederated leagues remembered in legends of Three Sovereigns and Five Emperors, legitimized via ceremonial jades and scapulimancy divination.",
      economySocietyEn: "Forged dual agricultural hearths: foxtail/broomcorn millet in the dry Northern Yellow River basin and domesticated wetland rice in the Southern Yangtze basin alongside potter's wheels, jade lapidary craft, and early sericulture.",
      governanceAndTaxEn: "Shifted from egalitarian Yangshao villages toward centralized ritual chiefdoms at Liangzhu and Taosi; rather than monetary taxation, rulers mobilized collective labor for earthen ramparts, irrigation canals, and carved jade tributes.",
      vietnamRelationsEn: "Coexisted dynamically alongside Mainland Southeast Asia's Neolithic–Early Metal sequence (Hoa Binh, Bac Son, Phung Nguyen along the Red River): ancient peoples of both Yangtze and Red River basins independently pioneered wetland rice cultivation, pile dwellings, and ritual jade ornaments (four-nubbed earrings, Yazhang blades), signaling vibrant East Asian cultural exchange rather than one-way diffusion.",
      philosophyIntellectualEn: "Early cosmological order expressed in geometric painted-pottery symmetry (Yangshao), circular sky Bi discs and square-outer/round-bore Earth Cong tubes (Liangzhu), and carved ceramic proto-emblems.",
      timelineEn: [
        "~1.7 Million Years Ago: Yuanmou Man sites (Yunnan) — among East Asia's earliest erect hominid traces.",
        "~7000–5000 BCE: Hemudu Culture (Zhejiang) pioneered wet-rice paddies and mortise-and-tenon wooden pile homes.",
        "~5000–3000 BCE: Yangshao Culture (Central Plains) flourished with Banpo painted terracotta villages.",
        "~3300–2300 BCE: Liangzhu Culture (Lower Yangtze) engineered grand flood-control dams and precision Bi–Cong jades.",
        "~3000–2000 BCE: Longshan Culture crafted paper-thin black eggshell pottery and rammed-earth walled towns."
      ],
      figuresEn: [
        "Yellow Emperor (Huangdi) & Flame Emperor (Yandi) — legendary cultural heroes symbolizing early Huaxia confederation.",
        "Yao, Shun & Great Yu — archetypal sage-rulers celebrated for meritocratic abdication and heroic flood control."
      ],
      culturalAchievementsEn: [
        "Archaeological Ruins of Liangzhu City (UNESCO World Heritage proving early hydraulic statecraft along the Lower Yangtze).",
        "Mastery of ultra-hard nephrite jade carving across Hongshan and Liangzhu traditions.",
        "Early domestication of pigs, dogs, silkworms, wetland rice, and millet agriculture."
      ],
      representativeArtifactsEn: [
        "Liangzhu Jade Cong & Bi Ritual Discs (良渚玉琮)",
        "Banpo Painted Earthenware Basin (半坡彩陶)",
        "Hongshan C-Shaped Jade Dragon (红山玉龙)",
        "Longshan Eggshell-Thin Black Pottery (蛋壳黑陶)"
      ],
      mapDataEn: {
        capitalsEn: "Taosi (Shanxi), Archaeological City of Liangzhu (Zhejiang)",
        territoryEn: "Polycentric network spanning Central Plains Yellow River, Lower Yangtze, West Liao River (Hongshan), and Sichuan Baodun.",
        routesEn: "Overland salt and nephrite exchange corridors bridging North and South."
      },
      primarySourcesEn: [
        "Foundational legendary dynastic narratives compiled later by Sima Qian during Western Han; read alongside scientific excavations.",
        "UNESCO World Heritage Site dossier recognizing Lower Yangtze complex hydrological civilization."
      ]
    },
    "xia-shang-zhou": {
      spanEn: "c. 2070 – 771 BCE (End of Western Zhou)",
      overviewEn: "Formative age of hereditary kingship, monumental Bronze Age metallurgy, Shang Oracle Bone writing, and Zhou lineage-feudal ritual law. Anyang Shang supplies China's earliest contemporary written records, while Western Zhou crafted the 'Mandate of Heaven' doctrine shaping statecraft for two millennia.",
      politicsEn: "Shang operated as a theocratic confederation anchored by royal diviner-kings; Western Zhou innovated kinship-based Fengjian feudal enfeoffment married to eldest-son patrilineal succession, Ritual-and-Music hierarchy, and conditional Mandate of Heaven.",
      economySocietyEn: "Royal domain claims ('Beneath vast Heaven, every inch is the King's soil') organized communal cultivation (later idealized by Warring States scholars as the Well-Field system) worked by peasant clans and war captives.",
      governanceAndTaxEn: "Hereditary Office & Stipend system tied to lineage feudalism: Shang combined high priestly scapulimancy with royal power, while Western Zhou rested upon conditional 'Tianming' moral rule and idealized public-private field levies.",
      vietnamRelationsEn: "Contemporaneous with Three Dynasties, the Red River Delta forged luminous Bronze-Age Dong Son civilization (legendary Van Lang kingdom): both civilizations achieved supreme bronze casting, yet Dong Son crafted wholly original kettle drums and situlae rather than Shang–Zhou ritual tripods, while sharing southward circulation of ceremonial jade Yazhang blades.",
      philosophyIntellectualEn: "Shifted from Shang awe of ancestral high-spirit divination toward humanistic Zhou moral statecraft ('Revere Virtue and Protect the People'), seeding early strata of the *Yijing* and *Book of Documents*.",
      timelineEn: [
        "~2070–1600 BCE: Traditional Xia dynasty era; Erlitou site (Henan) reveals earliest Central Plains palatial bronze complexes.",
        "~1600–1046 BCE: Shang Dynasty centered at Yinxu (Anyang, Henan) perfecting Oracle Bone script and giant ritual bronzes.",
        "1046 BCE: Battle of Muye — King Wu of Zhou overthrows Shang and establishes Western Zhou capital at Haojing (Xi'an).",
        "~1040 BCE: Duke of Zhou codifies Rites & Music, consolidating lineage feudal enfeoffment.",
        "771 BCE: Quanrong raid sacks Haojing; King Ping moves east to Luoyi opening the Eastern Zhou."
      ],
      figuresEn: [
        "King Tang of Shang & Minister Yi Yin.",
        "Lady Fu Hao — royal consort and military general of King Wu Ding whose intact Anyang tomb yielded 468 bronzes.",
        "King Wen, King Wu, and Duke of Zhou (Zhou Gong Dan)."
      ],
      culturalAchievementsEn: [
        "Oracle Bone Script (Jiaguwen) — earliest complete contemporary writing system of East Asia.",
        "Complex multi-piece clay mold bronze casting exemplified by the 832.84 kg Houmuwu Ding cauldron.",
        "*Book of Odes* (*Shijing*) — oldest Chinese poetry anthology recording court hymns and commoner folk songs."
      ],
      representativeArtifactsEn: [
        "Houmuwu Ding 832.84 kg Bronze Cauldron (后母戊鼎)",
        "Anyang Yinxu Inscribed Oracle Bones (殷墟甲骨文)",
        "Sanxingdui Protruding-Eye Shu Mask (三星堆青铜面具)",
        "Maogong Ding 497-Graph Bronze Cauldron (毛公鼎)"
      ],
      mapDataEn: {
        capitalsEn: "Erlitou (Luoyang), Yinxu (Anyang), Feng–Hao (Xi'an)",
        territoryEn: "Middle–lower Yellow River extending feudal networks southward across Huai and middle Han rivers.",
        routesEn: "Bronze ore, tin, copper, and salt corridors linking Central Plains southward toward the Yangtze."
      },
      primarySourcesEn: [
        "Earliest surviving political mandates on Mandate of Heaven legitimacy (note later forged Old Text chapters excluded).",
        "Over 150,000 inscribed turtle plastrons and ox scapulae verifying Shang royal genealogy recorded by Sima Qian."
      ]
    },
    "spring-autumn-warring": {
      spanEn: "770 – 221 BCE",
      overviewEn: "China's supreme structural upheaval ('Zhou house weakened, rites and music crumbled'): collapse of hereditary feudal nobles, spread of iron plows, and rise of mobile 'Shi' scholars sparked the Axial-Age 'Hundred Schools of Thought' forging all core Sinitic philosophies.",
      politicsEn: "Shifted from chivalric chariot duels (Spring and Autumn) into centralized bureaucratic states and total mass-infantry war (Warring States), replacing noble birthright with merit-based Prefecture–County magistrates.",
      economySocietyEn: "Iron metallurgy and giant hydraulic works (Sichuan's Dujiangyan, Qin's Zhengguo Canal) sparked demographic growth, knife/spade/round coinage, powerful merchants (Lu Buwei), and classical Four Social Ranks (Scholar–Farmer–Artisan–Merchant).",
      governanceAndTaxEn: "Hereditary nobles ceded power cleanly to early Prefecture–County bureaucracy and Shang Yang's Military-Merit Ranks; private landholding surged after Lu's 594 BCE 'First Land-Acreage Tax'.",
      vietnamRelationsEn: "Vibrant cultural kinship across Lac Viet & Hundred Yue realms south of the Yangtze sharing bronze drum metallurgy, tattooing, teeth-blackening, and boat craft — culminating in Thuc Phan An Duong Vuong uniting Au Lac at Co Loa Citadel late in Warring States.",
      philosophyIntellectualEn: "Unmatched explosion of Hundred Schools: Confucianism (Ren–Li), Daoism (Dao–Wuwei), Mohism (Universal Care–Anti-War), Legalism (Fa–Shu–Shi), Logicians (Name–Reality), Strategists (Sunzi), and Yin–Yang Cosmologists.",
      timelineEn: [
        "770–476 BCE: Spring and Autumn era — Five Hegemons contending beneath nominal Zhou ritual sovereignty.",
        "551–479 BCE: Confucius teaches disciples privately and edits Six Classics.",
        "475–221 BCE: Warring States — Seven Powers waged total conquest campaigns.",
        "356 BCE: Shang Yang's reforms remake Qin via private land titles, merit nobility, and strict law.",
        "230–221 BCE: Qin Shihuang conquers all six rival kingdoms creating unified empire."
      ],
      figuresEn: [
        "Confucius, Mencius, Xunzi.",
        "Laozi, Zhuangzi.",
        "Mozi, Han Feizi, Shang Yang, Sunzi (Sun Wu)."
      ],
      culturalAchievementsEn: [
        "Composition of East Asia's bedrock classics: *Analects*, *Dao De Jing*, *Zhuangzi*, *Mozi*, *Han Feizi*, *Art of War*.",
        "Qu Yuan's lush Southern Chu lyric anthology (*Chuci / Verses of Chu*).",
        "65-bell Marquis Yi of Zeng carillon demonstrating dual-pitch 12-semitone bronze acoustic mastery."
      ],
      representativeArtifactsEn: [
        "Marquis Yi of Zeng 65-Bell Chime Set (曾侯乙编钟)",
        "Inscribed Bronze Sword of King Goujian of Yue",
        "Dam-Less Dujiangyan Irrigation Weir (256 BCE)",
        "Guodian Chu Tomb Bamboo Philosophical Slips"
      ],
      mapDataEn: {
        capitalsEn: "Luoyi (Eastern Zhou), Linzi (Qi), Xianyang (Qin), Ying (Chu)",
        territoryEn: "Expanded deep across Yangtze basins (Chu, Wu, Yue), Sichuan Ba–Shu, and northern Yan–Zhao steppes.",
        routesEn: "Interstate barge commerce tracing Yellow, Huai, and Yangtze rivers."
      },
      primarySourcesEn: [
        "Preeminent diplomatic chronicles and strategic speeches of Eastern Zhou.",
        "4th-century BCE bamboo slips yielding oldest surviving *Dao De Jing* and lost Confucian essays."
      ]
    },
    "qin-han": {
      spanEn: "221 BCE – 220 CE",
      overviewEn: "Inaugurated China's unified imperial state and crystalized ethnic–cultural 'Han' identity. Qin standardized writing, weights, axles, and commanderies; Western and Eastern Han softened rule into 'Confucian outside, Legalist inside', opened the Silk Road, and entered direct historical contact with northern Vietnam (Jiaozhi).",
      politicsEn: "Centralized autocratic Emperor system under Three Excellencies and Nine Ministers; Emperor Wu fused Confucian moral legitimation with Legalist administrative teeth plus 'Recommendation & Filial Selection' (Chaju) official recruitment.",
      economySocietyEn: "Smallholder peasant tillage anchored state taxation alongside Western Han state monopolies on salt and iron funding Xiongnu campaigns; late Eastern Han saw wealthy landed magnate estates trigger Yellow Turban rebellion (184 CE).",
      governanceAndTaxEn: "Qin fixed central imperial commanderies while Han paired Chaju talent selection with modest early land taxes (1/15 falling to 1/30 harvest), poll taxes, and Salt–Iron state monopolies.",
      vietnamRelationsEn: "Qin campaigns pushed southward into Lingnan (214 BCE); Zhao Tuo founded Nam Viet before Western Han annexed Jiaozhi (111 BCE). In 40–43 CE, the heroic Trung Sisters Uprising affirmed fierce Vietnamese sovereignty, while Luy Lau (Bac Ninh) matured into Jiaozhou's earliest crossroads of Indian Buddhism and Han learning.",
      philosophyIntellectualEn: "Han Confucian exegesis married Yin–Yang Five-Phase cosmology into Dong Zhongshu's 'Heaven–Human Resonance'; late Eastern Han witnessed organized Daoist movements and Buddhism entering via the Silk Road.",
      timelineEn: [
        "221 BCE: Ying Zheng proclaims himself First Emperor, unifying script (Small Seal), currency, measures, and axle widths.",
        "213–212 BCE: Burning of Books & Burying of Scholars (modern scholars weigh polemic exaggeration vs. state censorship).",
        "202 BCE: Liu Bang founds Western Han headquartered at Chang'an.",
        "138–126 BCE: Zhang Qian's Western Regions diplomacy pioneers trans-Eurasian Silk Road exchange.",
        "134 BCE: Emperor Wu adopts Dong Zhongshu's elevation of Confucian state orthodoxy.",
        "111 BCE: Western Han annexes Nam Viet establishing Jiaozhi, Jiuzhen, and Rinan commanderies.",
        "25–220 CE: Eastern Han (capital Luoyang) advances Cai Lun papermaking (105 CE) and Buddhist translation."
      ],
      figuresEn: [
        "Qin Shihuang & Chancellor Li Si.",
        "Emperor Wu of Han, Zhang Qian, General Huo Qubing.",
        "Sima Qian, Ban Gu, Dong Zhongshu, Cai Lun (papermaking), Zhang Heng (seismoscope)."
      ],
      culturalAchievementsEn: [
        "Sima Qian's *Records of the Grand Historian* (*Shiji*) inaugurating the Twenty-Four Standard Histories.",
        "Refined rag-pulp papermaking by Cai Lun and directional seismograph by Zhang Heng.",
        "Qin Shihuang's Terracotta Army alongside Mawangdui Han silk banners and astronomical manuscripts."
      ],
      representativeArtifactsEn: [
        "Qin Terracotta Warriors (兵马俑)",
        "Eastern Han Bronze Galloping Horse Treading a Swallow",
        "Mawangdui Funerary T-Shaped Silk Banner",
        "Western Han Liuren Rotating Diviner Astrolabe"
      ],
      mapDataEn: {
        capitalsEn: "Xianyang (Qin), Chang'an / Xi'an (Western Han), Luoyang (Eastern Han)",
        territoryEn: "Core mainland extended into Hexi Corridor, Western Regions Protectorate, Liaodong, and Lingnan–Jiaozhi.",
        routesEn: "Overland Silk Road through Gansu; early Maritime Silk Road out of Hepu and Xuwen across the Gulf of Tonkin."
      },
      primarySourcesEn: [
        "Foundational historiography authored by Sima Qian and Ban Gu.",
        "Crucial primary fiscal debate contrasting state salt–iron monopolies against market deregulation."
      ]
    },
    "three-kingdoms": {
      spanEn: "220 – 280 CE",
      overviewEn: "Tripartite division among Cao Wei (North), Shu Han (Southwest), and Eastern Wu (Southeast) following Han collapse. Amid war and severe depopulation, southern wetlands of Jiangnan and Sichuan gained vital development while Xuanxue philosophy flowered.",
      politicsEn: "Cao Wei introduced agricultural military colonies ('Tuntian') and the Nine-Rank Personnel System — inadvertently entrenching hereditary aristocratic clans ('Menzu'); Shu Han maintained Zhuge Liang's stern Legalist rule; Eastern Wu allied with Jiangnan local elites.",
      economySocietyEn: "Cao Cao's state farms stabilized devastated Northern fields while Eastern Wu spurred oceanic shipbuilding and southward coastal exchange reaching Shi Xie's peaceful Jiaozhou hub ahead of Lady Trieu's 248 CE revolt.",
      governanceAndTaxEn: "Wei's Nine-Rank evaluation swiftly fell under aristocratic clan monopoly ('No lowborn families occupy top grades'), while wartime Tuntian state colonies paired farming directly with standing frontier defense.",
      vietnamRelationsEn: "Eastern Wu partitioned Guangzhou cleanly out of Jiaozhou (264 CE); in 248 CE Lady Trieu (Trieu Thi Trinh) led Cửu Chân's ringing anti-occupation revolt proclaiming defiance to ride fierce winds and tread stormy waves.",
      philosophyIntellectualEn: "Exhaustion with rigid Han glossing cleared space for Wei–Jin Xuanxue ('Mysterious Learning') harmonizing *Yijing*, *Laozi*, and *Zhuangzi* around formless Non-Being ('Taking Wu as Root').",
      timelineEn: [
        "208 CE: Battle of Red Cliffs — Sun Quan & Liu Bei defeat Cao Cao along the Yangtze forging the tripartite stalemate.",
        "220 CE: Cao Pi deposes the last Han emperor establishing Cao Wei.",
        "221–222 CE: Liu Bei founds Shu Han at Chengdu; Sun Quan claims Wu at Jianye (Nanjing).",
        "263 CE: Wei conquers Shu Han.",
        "265–280 CE: Sima Yan establishes Western Jin and subdues Eastern Wu unifying China."
      ],
      figuresEn: [
        "Cao Cao, Zhuge Liang, Liu Bei, Sun Quan, Sima Yi.",
        "Wang Bi, Ji Kang, Ruan Ji — brilliant Xuanxue Wei thinkers."
      ],
      culturalAchievementsEn: [
        "Vigorous 'Jian'an Spirit' poetry led by Cao Zhi, Cao Pi, and Wang Can.",
        "Chen Shou's *Records of the Three Kingdoms* (rigorous history carefully distinguished from later Ming romance fiction).",
        "Mathematician Liu Hui's *Nine Chapters* commentary computing pi accurately to 3.1416."
      ],
      representativeArtifactsEn: [
        "Zoumalou Eastern Wu Bamboo & Wood Administrative Slips",
        "Jian'an Era Inscribed Three Kingdoms Bronze Mirrors",
        "Gold Royal Seals of Southwestern Vassal Kings",
        "Cao Wei & Shu Han Frontier Pass Remains"
      ],
      mapDataEn: {
        capitalsEn: "Luoyang (Wei), Chengdu (Shu), Jianye / Nanjing (Wu)",
        territoryEn: "Wei held Yellow River North; Shu held Sichuan & Hanzhong; Wu ruled Lower Yangtze & Lingnan.",
        routesEn: "Eastern Wu coastal shipping past Jiaozhou toward Southeast Asia plus Northern overland steppe corridors."
      },
      primarySourcesEn: [
        "Authoritative Three Kingdoms chronicle enriched hugely by Pei Songzhi's exhaustive fifth-century commentary."
      ]
    },
    "jin-northern-southern": {
      spanEn: "265 – 589 CE",
      overviewEn: "Three centuries of North–South division paired with historic ethnic migration and fusion ('Five Northern Peoples' north; aristocratic elite migration south to Jiankang). Buddhism blossomed into universal faith while calligraphy, figure painting, and grotto cliff sculpture soared.",
      politicsEn: "Great aristocratic 'Lineage Gatekeepers' ruled the South ('Wang and Ma jointly shared All Under Heaven'), whereas Northern Xianbei states like Northern Wei fused steppe cavalry vigor with Han bureaucracy — pioneering Equal-Field farms and Fubing militias inspiring Sui–Tang.",
      economySocietyEn: "Mass southern immigration and marsh drainage pushed Jiangnan agriculture past devastated northern plains while flourishing Buddhist monasteries pioneered temple credit and water-powered grain mills.",
      governanceAndTaxEn: "Northern Wei Emperor Xiaowen enforced radical Sinicization alongside Equal-Field land allocations (485 CE) curbing oligarchy hoarding, while Southern courts stagnated inside hereditary Nine-Rank clan gatekeeping.",
      vietnamRelationsEn: "In 544 CE Ly Bi (Emperor Ly Nam De) rallied rebels expelling Liang governors to establish independent Van Xuan State (reign era Thien Duc) and raise Khai Quoc Pagoda — restoring native Vietnamese sovereignty ahead of Sui–Tang reconquest.",
      philosophyIntellectualEn: "Rich Three-Teachings friction and fusion: Chinese Buddhism matured beyond early Daoist 'matching concepts' through Kumarajiva's Chang'an translation bureau, Huiyuan's Pure Land, and Fan Zhen's *Spirit Destructibility* debate.",
      timelineEn: [
        "265–316 CE: Western Jin unifies China briefly before War of Eight Princes and 311 Sack of Luoyang.",
        "317–420 CE: Eastern Jin flourishes at Jiankang (Nanjing) while North splinters into Sixteen Kingdoms.",
        "420–589 CE: Southern Dynasties (Song, Qi, Liang, Chen) confront Northern Dynasties (Northern Wei to Northern Zhou).",
        "493–499 CE: Emperor Xiaowen relocates Northern Wei to Luoyang and enacts thorough Sinicization."
      ],
      figuresEn: [
        "Wang Xizhi — Sage of Calligraphy (*Orchid Pavilion Preface*).",
        "Tao Yuanming — pastoral hermit poet.",
        "Monk Faxian — pilgrim traveler across Central Asia & India (399–412 CE).",
        "Zu Chongzhi — astronomer and mathematician; Emperor Xiaowen of Northern Wei."
      ],
      culturalAchievementsEn: [
        "Colossal Buddhist cave sanctuaries sculpted at Yungang (Datong), Longmen (Luoyang), and Mogao (Dunhuang).",
        "High watermark of running calligraphy (Wang Xizhi) and painting Six Principles (Xie He).",
        "Liu Xie's *Literary Mind and Carving of Dragons* and Jia Sixie's *Essential Techniques for Common Welfare* agronomy."
      ],
      representativeArtifactsEn: [
        "Wang Xizhi's *Lantingji Xu* (Orchid Pavilion Preface, 353)",
        "Gu Kaizhi's *Nymph of the Luo* & *Admonitions* Scrolls",
        "Northern Wei Sandstone Buddhas at Yungang & Longmen",
        "Six Dynasties Celadon-Glazed Yue Stoneware"
      ],
      mapDataEn: {
        capitalsEn: "Jiankang / Nanjing (South); Pingcheng, Luoyang & Chang'an (North)",
        territoryEn: "Split largely along Huai–Qinling belt while Northern Wei forged Han–Xianbei synthesis.",
        routesEn: "Bustling Silk Road oases & Indo-Eurasian maritime Buddhist pilgrimage lanes."
      },
      primarySourcesEn: [
        "Vivid anecdotal portrait of Wei–Jin aristocratic wit, aesthetics, and Pure Conversation.",
        "Invaluable 6th-century urban survey of Luoyang's gleaming Buddhist monasteries."
      ]
    },
    "sui-tang": {
      spanEn: "581 – 907 CE",
      overviewEn: "Medieval golden zenith: continental reunification, Grand Canal excavation, Three-Departments & Six-Ministries balance, and meritocratic Civil Examinations combined with unparalleled cosmopolitan tolerance whose Chang'an brilliance deeply shaped Japan, Silla Korea, and Tang-era Vietnam.",
      politicsEn: "Three Departments & Six Ministries system distributed policy drafting, critical veto review, and administrative execution systematically, while civil exams opened social mobility gradually past old clans.",
      economySocietyEn: "Early Equal-Field stability shifted after the An Lushan catastrophe toward private landholding and twice-yearly Property-Tax ('Liangshui Fa'); credit drafts ('Flying Cash'), bursting night markets, and Persian–Sogdian enclaves invigorated Chang'an and Guangzhou.",
      governanceAndTaxEn: "Sui founded and Tang perfected Three Departments–Six Ministries checks plus Imperial Examinations; after 780 Yang Yan replaced early Equal-Field Grain–Labor–Cloth taxes smoothly with Twice-Yearly Asset Tax.",
      vietnamRelationsEn: "Administered as Annan Protectorate, Vietnamese autonomy erupted in heroic rebellions led by Mai Thuc Loan (Black Emperor Mai, 713–722) and Phung Hung (766–791), alongside deep poetic and phonological exchange — notably Vietnamese scholar Khuong Cong Phu of Ai Chau placing Top Palace Laureate (780) to become Tang Chancellor.",
      philosophyIntellectualEn: "Chinese Buddhism blossomed into fully naturalized Huayan, Tiantai, Yogacara, and especially Huineng's Sudden-Awakening Chan; later Tang launched Han Yu's Classical Prose Revival preparing Song Neo-Confucianism.",
      timelineEn: [
        "581–618 CE: Sui unifies China, excavates Grand Canal linking Yellow & Yangtze basins, and begins Civil Exams.",
        "618 CE: Li Yuan establishes Tang at cosmopolitan Chang'an.",
        "627–649 CE: Emperor Taizong's golden 'Zhenguan Governance' welcomes candid ministerial remonstrance.",
        "690–705 CE: Wu Zetian reigns as China's sole official female Emperor.",
        "713–755 CE: High Tang Kaiyuan cultural boom shattered by An Lushan Rebellion (755–763).",
        "780 CE: Twice-Yearly Tax reform ends early Equal-Field system.",
        "907 CE: Zhu Wen topples Tang launching Five Dynasties fragmentation."
      ],
      figuresEn: [
        "Tang Taizong, Wu Zetian, outspoken remonstrator Wei Zheng.",
        "Monk Xuanzang — translator and traveler authoring *Records of Western Regions*.",
        "Li Bai, Du Fu, Bai Juyi, Han Yu, Liu Zongyuan.",
        "Yan Zhenqing (calligraphy) & Wu Daozi (painting)."
      ],
      culturalAchievementsEn: [
        "Complete Tang Poetry canon gathering >48,000 surviving poems in *Quan Tangshi*.",
        "Earliest dated woodblock printed book worldwide (*Diamond Sutra*, Dunhuang, 868 CE).",
        "Tang Sancai lead-glazed ceramics, standard Regular calligraphy, and grid-planned Chang'an urbanism."
      ],
      representativeArtifactsEn: [
        "Tang Sancai Three-Color Silk Road Camels (唐三彩)",
        "Dunhuang Mogao High-Tang Pure Land Wall Murals",
        "Hejiacun Chang'an Hoard Gold & Silver Plate",
        "The *Tang Code with Commentaries* (*Tanglü Shuyi*)"
      ],
      mapDataEn: {
        capitalsEn: "Chang'an (Xi'an) & Eastern Capital Luoyang",
        territoryEn: "Stretched deeply across Central Asian Western Regions, Manchuria, Mongolian steppe, and Annan.",
        routesEn: "Grand Canal north–south spine, Hexi Silk Road oases, and Guangzhou–Quanzhou ocean lanes toward Persia."
      },
      primarySourcesEn: [
        "Twin official Tang Dynastic Histories read fruitfully alongside Sima Guang's chronological synthesis.",
        "Famed political dialogues studied across medieval courts in China, Vietnam, Korea, and Japan."
      ]
    },
    "five-dynasties": {
      spanEn: "907 – 979 CE",
      overviewEn: "Critical Tang–Song bridge: five militarized dynasties rose swiftly in Northern China while ten relatively peaceful Southern kingdoms enriched silk, tea, and coastal trade — coinciding with Vietnam winning decisive independence via Ngo Quyen's 938 Bach Dang victory.",
      politicsEn: "Warlordism shattered remnants of old aristocratic nobility forever, persuading future Song founders to curtail regional generals strictly ('Elevating Civil Letters over Martial Force').",
      economySocietyEn: "Economic center of gravity swung permanently south toward prosperous Jiangnan, Fujian, and Guangdong workshops exporting celadon, silk, and tea.",
      governanceAndTaxEn: "Military Governors alternated coups across five brief northern capitals while Southern states welcomed northern refugees to dike marshes and expand maritime ports.",
      vietnamRelationsEn: "Defining Vietnamese watershed: after Khuc Thua Du secured local autonomy (905), Ngo Quyen obliterated Southern Han warships upon iron-tipped Bach Dang river stakes in 938 — closing over a millennium of northern rule to launch independent Dai Viet equality.",
      philosophyIntellectualEn: "Poetic transition from Tang Regulated Verse toward lyrical *Ci* songs, while Southern rulers patronized Chan Buddhism's 'Five Houses and Seven Schools'.",
      timelineEn: [
        "907 CE: Later Liang opens Five Dynasties North alongside flourishing Wuyue, Former Shu, Southern Han, Min South.",
        "936 CE: Shi Jingtang cedes strategic Sixteen Prefectures to Khitan Liao creating century-long northern vulnerability.",
        "938 CE: Ngo Quyen crushes Southern Han naval fleet at Bach Dang establishing permanent Vietnamese independence.",
        "954–959 CE: Later Zhou Emperor Shizong Chai Rong enacts fiscal–military reforms preparing reunification.",
        "960–979 CE: Zhao Kuangyin establishes Northern Song and steadily reintegrates the Ten Kingdoms."
      ],
      figuresEn: [
        "Li Yu — Last Ruler of Southern Tang and supreme lyric *Ci* poet.",
        "Emperor Shizong of Later Zhou (Chai Rong) — visionary state reformer.",
        "Gu Hongzhong — painter of *Night Revels of Han Xizai*."
      ],
      culturalAchievementsEn: [
        "Blossoming of sung *Ci* poetry (*Among the Flowers* anthology and Li Yu).",
        "Divergence of Northern monumentality (Jing–Guan) and misty Jiangnan ink landscape (Dong–Ju).",
        "Industrial expansion of woodblock Confucian and Buddhist canon printing."
      ],
      representativeArtifactsEn: [
        "Gu Hongzhong's *Night Revels of Han Xizai* (韩熙载夜宴图)",
        "Jing Hao's *Mount Lu* & Dong Yuan's *Xiao–Xiang Rivers*",
        "Yue Ware 'Secret-Color' Court Celadon Porcelains",
        "Archaeological Wooden Stakes of 938 Bach Dang River"
      ],
      mapDataEn: {
        capitalsEn: "Kaifeng (Northern Capitals), Hangzhou (Wuyue), Jinling / Nanjing (Southern Tang)",
        territoryEn: "Fragmented between Yellow River warlords and ten prosperous southern kingdoms.",
        routesEn: "Bustling coastal maritime ports at Mingzhou (Ningbo), Quanzhou, and Guangzhou."
      },
      primarySourcesEn: [
        "Twin Old & New Five Dynasties Histories recording turbulent 10th-century transition."
      ]
    },
    "song": {
      spanEn: "960 – 1279 CE",
      overviewEn: "Though challenged militarily by northern empires (Liao, Western Xia, Jin, Mongols), Song realized East Asia's commercial-urban revolution, scientific breakthroughs, refined literati arts, and Zhu Xi Neo-Confucianism — deemed by Naito Konan China's dawn of early modernity.",
      politicsEn: "Co-governance between Emperor and civil-exam Scholar-Officials secured anonymous coded examination grading ('Huben' & transcription copies), though swelling bureaucracy and standing army salaries strained treasuries.",
      economySocietyEn: "Curfew-free night markets thrived; Sichuan issued humanity's earliest state-backed paper currency (*Jiaozi*, 1024); commercial and ocean customs revenues via Quanzhou often surpassed rural grain levies.",
      governanceAndTaxEn: "Divided executive administration, military command, and fiscal Three Commissions under supreme civil primacy while anonymous civil-exam copying ensured egalitarian access amid soaring urban monetization.",
      vietnamRelationsEn: "Earlier Le defeated Song invasion at Chi Lang–Bach Dang (981), followed by Ly Thuong Kiet's bold preemptive campaign and Như Nguyệt victory (1077) crowned by the independence poem 'Mountains and Rivers of the Southern Nation' — alternating harmoniously with Ly's 1070 Temple of Literature, 1075 Civil Exams, Buddhist Tripitaka missions, and cordial diplomacy.",
      philosophyIntellectualEn: "Birth of Song–Ming Neo-Confucianism: Cheng–Zhu Principle Learning (Zhu Xi's *Four Books Commentary*, 'Investigating Things') debated Lu Jiuyuan's 'Mind is Principle' — setting exam orthodoxy across China and Vietnam for 700 years.",
      timelineEn: [
        "960 CE: Zhao Kuangyin founds Northern Song at Bianjing (Kaifeng) persuading generals into peaceful retirement ('Over Wine Cup').",
        "1069 CE: Wang Anshi launches ambitious New Policies targeting credit, land assessment, and trade.",
        "1075–1077 CE: Song–Dai Viet border war & Như Nguyệt peace accord under Ly Thuong Kiet.",
        "1127 CE: Jingkang Disaster — Jurchen Jin captures Kaifeng; Song re-establishes Southern capital at Lin'an (Hangzhou).",
        "1279 CE: Naval Battle of Yamen seals Southern Song demise under Mongol Yuan."
      ],
      figuresEn: [
        "Su Shi (Su Dongpo), Ouyang Xiu, reformist Wang Anshi, historian Sima Guang.",
        "Zhu Xi, Cheng Hao, Cheng Yi, Lu Jiuyuan.",
        "Polymath Shen Kuo, poetess Li Qingzhao, patriotic lyricist Xin Qiji."
      ],
      culturalAchievementsEn: [
        "Three epochal inventions matured: movable clay type (Bi Sheng), magnetic maritime compass, and military gunpowder.",
        "Zhang Zeduan's *Qingming Scroll* alongside the Five Great Song Kilns (Ru, Guan, Ge, Jun, Ding).",
        "Golden height of Song *Ci* lyrics and crisp woodblock Song editions."
      ],
      representativeArtifactsEn: [
        "Wang Ximeng's *A Thousand Li of Rivers and Mountains*",
        "Zhang Zeduan's *Along the River During Qingming*",
        "Ru Ware Sky-Blue Imperial Celadon Dish",
        "Sichuan Jiaozi Paper Note & Maritime Needle Compass"
      ],
      mapDataEn: {
        capitalsEn: "Eastern Capital Kaifeng (Northern Song); Lin'an / Hangzhou (Southern Song)",
        territoryEn: "Without Yanyun 16 Prefectures in North; Southern Song fortified Huai River–Qinling border.",
        routesEn: "Maritime Ceramic Silk Road linking Quanzhou, Mingzhou, and Guangzhou across Southeast Asia & Indian Ocean."
      },
      primarySourcesEn: [
        "Unrivaled institutional financial annals of medieval East Asia.",
        "Shen Kuo's dazzling 11th-century scientific notes on magnetism, geology, movable type, and music."
      ]
    },
    "yuan": {
      spanEn: "1271 – 1368 CE",
      overviewEn: "Mongol-founded unified dynasty (Kublai Khan) integrating China across the largest contiguous Eurasian empire in history — accelerating overland exchange, Zaju theater, Blue-and-White cobalt trade, and the Provincial (Xing-sheng) administrative blueprint used today.",
      politicsEn: "Founded Branch Secretariats ('Provinces'); governed via four administrative recruitment hierarchies (Mongols, Semu, Northern Han, Southern Nanren) reflecting legal-political privileges more than rigid modern racial biology.",
      economySocietyEn: "Circulated nationwide Baochao paper currency linked via Eurasian Yam horse-relay stations and bustling Zaytun (Quanzhou) ocean harbor, though late paper hyperinflation and Yellow River corvée ignited upheaval.",
      governanceAndTaxEn: "Inaugurated Provincial territorial boundaries; initially suspended civil exams for nearly 80 years until 1315 restoration strictly testing Zhu Xi's Four Books commentaries.",
      vietnamRelationsEn: "Tran-dynasty Dai Viet forged one of Asia's proudest defensive sagas by repelling three colossal Mongol–Yuan invasions (1258, 1285, and 1288 Bach Dang triumph led by Tran Hung Dao), before resuming cordial diplomatic poetry missions led by scholar Mac Dinh Chi ('Two-Country Top Laureate') in Beijing.",
      philosophyIntellectualEn: "Decades of civil exam suspension diverted brilliant Han literati toward urban vernacular drama (*Zaju*), astronomy, medicine, and deeply interiorized 'Mind Landscape' scholar painting.",
      timelineEn: [
        "1271 CE: Kublai Khan proclaims Great Yuan headquartered at Dadu (Beijing).",
        "1279 CE: Conquest of Southern Song completes reunification.",
        "1285 & 1287–1288 CE: Three Yuan invasions repulsed decisively by Tran Dai Viet.",
        "1313 CE: Civil examinations reinstated strictly along Zhu Xi's Four Books canon.",
        "1351–1368 CE: Red Turban rebellions propel Zhu Yuanzhang northward into Dadu."
      ],
      figuresEn: [
        "Kublai Khan (Emperor Shizu).",
        "Playwrights Guan Hanqing & Wang Shifu (Yuan Zaju theater).",
        "Guo Shoujing (astronomer & Shoushi Calendar).",
        "Zhao Mengfu, Huang Gongwang, Ni Zan — Four Yuan Painting Masters."
      ],
      culturalAchievementsEn: [
        "Yuan Zaju opera classics: *Injustice to Dou E* (Guan Hanqing) & *Romance of the Western Chamber*.",
        "Huang Gongwang's monumental ink scroll *Dwelling in the Fuchun Mountains*.",
        "Jingdezhen Qinghua Blue-and-White porcelain fired with Persian-imported cobalt pigment."
      ],
      representativeArtifactsEn: [
        "The 1351 Percival David Yuan Blue-and-White Temple Vases",
        "Huang Gongwang's *Dwelling in the Fuchun Mountains*",
        "Guo Shoujing's Simplified Armillary Sphere",
        "Imperial Phags-pa Script Square Seal Impressions"
      ],
      mapDataEn: {
        capitalsEn: "Dadu (Beijing) & Summer Capital Shangdu (Inner Mongolia)",
        territoryEn: "Included Central Plains, Jiangnan, Tibet (under Xuanzhengyuan), Yunnan, Manchuria, and Mongolia.",
        routesEn: "Overland Pax Mongolica Silk Road welcoming Marco Polo and Ibn Battuta."
      },
      primarySourcesEn: [
        "Hurriedly compiled early-Ming *History of Yuan*, corroborated smoothly alongside *New Yuan History* and Persian chronicles."
      ]
    },
    "ming": {
      spanEn: "1368 – 1644 CE",
      overviewEn: "Final ethnic-Han unified empire pairing stark autocratic centralization (abolishing Chancellors, relying on Grand Secretariat & Secret Police) with flourishing silver-monetized commerce, New World crops, and Wang Yangming's liberating Philosophy of Mind.",
      politicsEn: "Zhu Yuanzhang concentrated raw authority atop Six Ministries after 1380 Chancellor purge, leaving Grand Secretaries ('Drafting Edits') to mediate imperial business while late-Ming factionalism flared between Donglin reformers and court eunuchs.",
      economySocietyEn: "Jiangnan urbanized around specialized workshops (Suzhou silk, Jingdezhen porcelain, Songjiang cotton) fueled by Japanese and Spanish Manila silver plus New World maize and sweet potatoes lifting population past 150 million.",
      governanceAndTaxEn: "Established Eight-Legged Examination essays and Zhang Juzheng's 1581 'Single Whip Reform' consolidating land taxes and labor corvée directly into measurable silver bullion payments.",
      vietnamRelationsEn: "Early 15th-century Ming occupation fell before Le Loi and Nguyen Trai's Lam Son Liberation (1418–1427, *Binh Ngo Dai Cao*), restoring sovereign Le So diplomacy. While Ming 'Sea Bans' limited Chinese porcelain exports, Vietnamese Chu Dau & Bat Trang blue-and-white surged across Southeast Asian and Ottoman markets; envoy Phung Khac Khoan famously exchanged classical verse in Beijing.",
      philosophyIntellectualEn: "Wang Yangming unleashed populist Mind Learning ('Streets brim full of potential sages' & 'Unity of Knowledge and Action'); late Ming saw Jesuit Matteo Ricci dialogue science and astronomy alongside Xu Guangqi.",
      timelineEn: [
        "1368 CE: Zhu Yuanzhang (Hongwu) establishes Ming dynasty at Nanjing.",
        "1405–1433 CE: Zheng He commands seven monumental Indian Ocean treasure voyages to East Africa.",
        "1407–1427 CE: Ming occupation defeated by Le Loi's Lam Son resistance.",
        "1421 CE: Yongle Emperor formally moves imperial capital north to Beijing (Forbidden City).",
        "1570s–1581: Grand Secretary Zhang Juzheng enforces 'Single Whip' silver tax unification.",
        "1644 CE: Li Zicheng enters Beijing; Wu Sangui opens Shanhaiguan Pass to Qing forces."
      ],
      figuresEn: [
        "Emperors Hongwu & Yongle, Admiral Zheng He, reformer Zhang Juzheng.",
        "Wang Yangming — founder of Philosophy of Mind ('Unity of Knowledge and Action').",
        "Li Shizhen (*Materia Medica*), Xu Xiake (geographer), Song Yingxing, Wu Cheng'en, Luo Guanzhong."
      ],
      culturalAchievementsEn: [
        "Four Masterworks of vernacuar chapter fiction: *Three Kingdoms*, *Water Margin*, *Journey to the West*, *Plum in the Golden Vase*.",
        "Monumental compendia: *Yongle Dadian*, Li Shizhen's pharmacopoeia, and *Tiangong Kaiwu* crafts.",
        "Construction of brick-and-stone Forbidden City, Temple of Heaven, and Ming Great Wall."
      ],
      representativeArtifactsEn: [
        "Surviving Imperial Volumes of *Yongle Dadian* (1408)",
        "Song Yingxing's Woodcut Illustrated *Tiangong Kaiwu* (1637)",
        "Mao Kun *Zheng He Maritime Navigation Scroll*",
        "Beijing's Forbidden City Imperial Axis (1420)"
      ],
      mapDataEn: {
        capitalsEn: "Nanjing (1368–1420), Beijing (from 1421)",
        territoryEn: "Mainland interior south of Great Wall alongside Tusi native-chieftain autonomous districts in the Southwest.",
        routesEn: "Zheng He Indian Ocean lanes alongside Trans-Pacific silver galleon trade through Manila."
      },
      primarySourcesEn: [
        "Authoritative Ming annals read beside comprehensive imperial Veritable Records and private jottings."
      ]
    },
    "qing": {
      spanEn: "1644 – 1912 CE",
      overviewEn: "Last imperial dynasty, established by Manchu Aisin Gioro nobles. Under Kangxi, Yongzheng, and Qianlong Qing tripled territory, swelled beyond 400 million souls, and perfected Evidential Scholarship before mid-19th-century Opium Wars plunged China through Self-Strengthening reform toward 1912 collapse.",
      politicsEn: "Synthesized Manchu Eight Banners military rigor with Han Confucian civil exams while creating the secretive Grand Council (Junji Chu) centralizing absolute autocracy prior to 19th-century regional viceroys (Zeng Guofan, Li Hongzhang).",
      economySocietyEn: "Intensive rice agriculture hit Malthusian stress past 400M population; Canton Thirteen Hongs channeled foreign trade until Post-1842 Treaty Ports (Shanghai, Tianjin, Hankou) seeded modern textile & steam infrastructure.",
      governanceAndTaxEn: "Emperor Yongzheng enacted landmark 'Merging Poll Tax into Land Tax' permanently abolishing head taxes and removing hidden-household evasion incentives; High Qing integrated Xinjiang, Tibet, Mongolia, and Taiwan into modern borders.",
      vietnamRelationsEn: "In 1789 Tay Son Emperor Quang Trung shattered 290,000 Qing troops at Ngoc Hoi–Dong Da before swiftly restoring cordial equality. Throughout the 19th century Nguyen envoys including Nguyen Du (*Bac Hanh Tap Luc*), Phan Huy Chu, and Ly Van Phuc exchanged Qian–Jia philology and coordinated cautious regional diplomacy confronting European colonialism.",
      philosophyIntellectualEn: "17th–18th-century Qian–Jia Evidential Philology ('Seeking Truth from Facts') championed strict empirical paleography; 19th-century New Text Kang Youwei & Yan Fu translations sparked modern reform debate.",
      timelineEn: [
        "1644 CE: Qing banners enter Beijing; Southern Ming resistance endures until 1662.",
        "1661–1796 CE: High-Qing era of Kangxi, Yongzheng, and Qianlong consolidating multi-ethnic territory.",
        "1788–1789 CE: Qing intervention repulsed decisively by Quang Trung at Ngoc Hoi–Dong Da.",
        "1839–1842 CE: First Opium War & Treaty of Nanjing initiate semi-colonial Treaty Port era.",
        "1851–1864 CE: Catastrophic Taiping Rebellion ravages Jiangnan.",
        "1861–1898 CE: Self-Strengthening fails in 1894–95 Sino-Japanese War; Hundred Days Reform suppressed.",
        "1911–1912 CE: Xinhai Revolution leads Emperor Puyi to abdicate (Feb 12, 1912)."
      ],
      figuresEn: [
        "Emperors Kangxi, Yongzheng, Qianlong.",
        "Novelists Cao Xueqin & Pu Songling.",
        "Evidential scholars Dai Zhen, Huang Zongxi, Gu Yanwu, Wang Fuzhi.",
        "Officials Lin Zexu, Zeng Guofan, Li Hongzhang; reformers Kang Youwei & Liang Qichao."
      ],
      culturalAchievementsEn: [
        "Cao Xueqin's *Dream of the Red Chamber* crowning classical psychological fiction.",
        "Monumental 36,000-fascicle *Complete Library of the Four Treasuries* (*Siku Quanshu*).",
        "Synthesization of Peking Opera under Qianlong–Guangxu patronage."
      ],
      representativeArtifactsEn: [
        "Imperial Illuminated Editions of *Siku Quanshu*",
        "Wang Hui's *Kangxi Emperor's Southern Inspection Tour*",
        "Castiglione's *One Hundred Steeds* & Old Summer Palace Architecture",
        "Qing Imperial Nephrite Twenty-Five State Seals"
      ],
      mapDataEn: {
        capitalsEn: "Beijing (Forbidden City, Old Summer Palace & Chengde Mountain Resort)",
        territoryEn: "Greatest peak >13 million km² integrating 18 interior provinces, Manchuria, Mongolia, Xinjiang, Tibet, and Taiwan.",
        routesEn: "Canton System monopoly up to 1842 opening into Shanghai & Hong Kong treaty ports."
      },
      primarySourcesEn: [
        "Draft Qing History compiled early Republic; supplemented by Palace Grand Council archives in Beijing & Taipei."
      ]
    },
    "republic-of-china": {
      spanEn: "1912 – 1949 CE",
      overviewEn: "Turbulent transition from imperial monarchy toward modern republic: Beiyang warlord fragmentation, the May Fourth & New Culture Vernacular Revolution (1919), total War of Resistance against Japan (1937–1945), and Chinese Civil War.",
      politicsEn: "Fractured continuously across Beiyang northern warlord cliques (1912–1928), Kuomintang Nationalist regime at Nanjing (1927–1937, relocating to wartime Chongqing), and Chinese Communist Soviet/Yan'an base areas.",
      economySocietyEn: "WWI offered a brief 'Golden Age' (1914–1922) for Shanghai, Wuxi, and Tianjin textile–flour capitalists before war devastation, hyperinflation, and crushing rural rents.",
      governanceAndTaxEn: "The 1911 Xinhai Revolution toppled 2,132 years of imperial monarchy under the Provisional Constitution; Nanjing Nationalist governance succumbed to eight years of total Japanese invasion and post-war Civil War.",
      vietnamRelationsEn: "Profound solidarity forged by Vietnamese patriots across Guangzhou, Hong Kong, Yunnan, and Guangxi: Phan Boi Chau's Restoration League echoed Liang Qichao & Sun Yat-sen ideals, while Nguyen Ai Quoc (Ho Chi Minh) founded the Vietnamese Revolutionary Youth League in Guangzhou (1925) and penned *Prison Diary* across Guangxi jails.",
      philosophyIntellectualEn: "Passionate three-way clash among Western Liberalism (Hu Shi), Marxism (Li Dazhao, Chen Duxiu), and Modern New Confucianism (Xiong Shili, Liang Shuming, Feng Youlan) seeking China's cultural path forward.",
      timelineEn: [
        "Jan 1, 1912: Sun Yat-sen assumes office as Provisional President in Nanjing.",
        "1915–1919: New Culture (*New Youth*) and May Fourth Vernacular & Patriotic Movement (1919).",
        "1921: Founding of the Chinese Communist Party in Shanghai–Jiaxing.",
        "1926–1928: Northern Expedition unifies Nanjing Nationalist Government.",
        "1937–1945: All-out War of Resistance following Lugou Bridge Incident.",
        "1946–1949: Civil War; Nationalist government retreats to Taiwan."
      ],
      figuresEn: [
        "Sun Yat-sen — Three Principles of the People.",
        "Lu Xun, Hu Shi, Chen Duxiu, Cai Yuanpei.",
        "Architects Liang Sicheng & Lin Huiyin; painters Xu Beihong & Qi Baishi."
      ],
      culturalAchievementsEn: [
        "Vernacular *Baihua* literacy revolution replacing Classical Wenyan across schools and press.",
        "Modern realist fiction by Lu Xun (*True Story of Ah Q*, *Diary of a Madman*), Mao Dun, Ba Jin, and Lao She.",
        "1930s Shanghai cinema and wartime Southwest Associated University (Kunming)."
      ],
      representativeArtifactsEn: [
        "1912 Proclamation Establishing the Republic of China",
        "*New Youth* Magazine May Fourth Issues (1915)",
        "Kunming–Haiphong Yunnan–Vietnam Meter-Gauge Rail",
        "Guangzhou Youth League Patriotic Sites"
      ],
      mapDataEn: {
        capitalsEn: "Beijing (1912–1928), Nanjing (1928–1937 & 1946–1949), Chongqing (Wartime 1937–1945)",
        territoryEn: "Mainland fragmented repeatedly by warlords and Japanese occupation zones (1931–1945).",
        routesEn: "Early trunk railways plus the wartime Burma Road lifeline reaching Kunming."
      },
      primarySourcesEn: [
        "Core progressive periodical catalyzing May Fourth New Culture and language reform."
      ]
    },
    "modern-contemporary": {
      spanEn: "1949 – Present",
      overviewEn: "Following establishment of the People's Republic of China (1949), Deng Xiaoping's 1978 Reform and Opening sparked unprecedented economic modernization, transforming China into the globe's manufacturing powerhouse, HSR leader (>45,000 km), and major R&D–cultural force emphasizing heritage confidence.",
      politicsEn: "Led by the Communist Party of China pairing centralized long-range macro-planning (Five-Year Plans, advancing into the 15th Plan 2026–2030) with decentralized provincial/municipal economic experimentation.",
      economySocietyEn: "Shifted into a 'Socialist Market Economy', lifting urbanization from ~18% (1978) past 66% across Beijing–Tianjin–Hebei, Yangtze Delta, and Greater Bay megaregions powered by mobile payments and logistics.",
      governanceAndTaxEn: "PRC National People's Congress model followed 1978 Reform & Opening with 1994 central–local fiscal tax-sharing, total 2006 abolition of the 2,600-year Agricultural Tax, and nationwide digital administration.",
      vietnamRelationsEn: "Comprehensive Strategic Cooperative Partnership building a 'Community with a Shared Future of Strategic Significance'. China stands as Vietnam's top trade partner (bilateral trajectory $260–268B over 2026–2030 under RCEP & ACFTA 3.0), closely linked via smart Friendship Pass & Hekou border gates, international freight rail, and tens of thousands of CSC scholarship alumni.",
      philosophyIntellectualEn: "1990s onward 'National Learning' revival re-evaluates Confucian–Daoist–Buddhist ethics cleanly beside Sinicized Marxism and digital-age innovation.",
      timelineEn: [
        "Oct 1, 1949: Founding of the People's Republic of China in Beijing.",
        "1956: Official promulgation of Simplified Chinese characters boosting nationwide literacy.",
        "1966–1976: Cultural Revolution deeply disrupts education and cultural institutions.",
        "Dec 1978: Third Plenum launches Deng Xiaoping's Reform and Opening-Up.",
        "1980–2001: Special Economic Zones (Shenzhen, Zhuhai) lead toward 2001 WTO accession.",
        "2013–Present: Belt & Road Initiative, >46,000 km HSR, NEVs, open-weight AI, and digital heritage conservation."
      ],
      figuresEn: [
        "Mao Zedong, Zhou Enlai, Deng Xiaoping.",
        "Nobel laureate Tu Youyou (Medicine 2015), agronomist Yuan Longping, Mo Yan (Literature 2012), sci-fi author Liu Cixin."
      ],
      culturalAchievementsEn: [
        "World's largest High-Speed Rail grid (>45,000 km), solar-wind renewables, and ubiquitous cashless finance.",
        "Globalized web literature, cinema (Zhang Yimou, Jia Zhangke), cultural AAA games (*Black Myth: Wukong*), and *Guochao* revival.",
        "Intangible heritage digitization across Palace Museum and Dunhuang archives."
      ],
      representativeArtifactsEn: [
        "Monumental Landscape *Such Great Beauty* (1959)",
        "Fuxing CR400BF High-Speed Train & Tiangong Station",
        "Yangshan Automated Deepwater Container Terminal",
        "Bilateral Trade Policy Dossier VN-CN-TRD-2026-Q4"
      ],
      mapDataEn: {
        capitalsEn: "Beijing",
        territoryEn: "23 Provinces, 5 Autonomous Regions, 4 Municipalities, and 2 Special Administrative Regions (Hong Kong & Macau).",
        routesEn: "Eurasian China–Europe rail freight alongside 21st-century ASEAN maritime & Lang Son–Guangxi smart land corridors."
      },
      primarySourcesEn: [
        "Official State Council policy white papers and regulatory texts.",
        "Authoritative statistical yearbooks published by China's National Bureau of Statistics."
      ]
    }
  };

  const TIMELINE_EVENTS_EN = {
    "ev1": { titleEn: "Liangzhu Urban Civilization & Ritual Jades", summaryEn: "Ancient hydraulic flood-control dams and precision Bi–Cong ceremonial jades across the Lower Yangtze." },
    "ev2": { titleEn: "Yinxu Shang Oracle Bone Script", summaryEn: "Oldest intact contemporary Chinese writing recording royal Shang divinations." },
    "ev3": { titleEn: "Sanxingdui Ancient Shu Civilization", summaryEn: "Sichuan protruding-eye bronze masks and sacred bronze tree proving polycentric origins." },
    "ev4": { titleEn: "King Wu Overthrows Shang & Mandate of Heaven", summaryEn: "Established Zhou lineage feudalism and moral accountability ('Protect the People')." },
    "ev5": { titleEn: "Guan Zhong's Economic Reforms in Qi", summaryEn: "Graded land assessments and salt–iron stewardship elevating Duke Huan as first Hegemon." },
    "ev6": { titleEn: "Confucius & Founding of Confucianism", summaryEn: "Private academy teaching Ren (humaneness), Li (ritual propriety), and universal moral education." },
    "ev7": { titleEn: "Marquis Yi of Zeng 65-Bell Bronze Chimes", summaryEn: "Dual-tone bronze acoustic miracle spanning full twelve-semitone Warring States scale." },
    "ev8": { titleEn: "Shang Yang's Legalist Reforms in Qin", summaryEn: "Transformed Qin via transparent laws, merit ranks, and county administration ahead of unification." },
    "ev9": { titleEn: "Li Bing Constructs Dujiangyan Weir", summaryEn: "Dam-less self-regulating irrigation turning Chengdu Plain into 'Land of Abundance'." },
    "ev10": { titleEn: "Qin Shihuang Unifies China", summaryEn: "Standardized Small Seal script, currency, measures, axles, and Imperial Commandery rule." },
    "ev11": { titleEn: "Zhang Qian's Embassy to Western Regions", summaryEn: "Opened overland trans-Eurasian Silk Road commercial and cultural exchange." },
    "ev12": { titleEn: "Sima Qian Completes *Records of the Grand Historian*", summaryEn: "First comprehensive universal history forging the East Asian Annal–Biography genre." },
    "ev13": { titleEn: "Cai Lun Improves Rag Papermaking", summaryEn: "Material breakthrough spreading across Vietnam, Central Asia, and Europe." },
    "ev14": { titleEn: "Battle of Red Cliffs & Tripartite Stalemate", summaryEn: "Sun–Liu coalition defeats Cao Cao along the Yangtze shaping Wei–Shu–Wu." },
    "ev15": { titleEn: "Wang Xizhi Brushes *Orchid Pavilion Preface*", summaryEn: "Summit of Eastern Jin running calligraphy and Daoist-inspired natural spontaneity." },
    "ev16": { titleEn: "Northern Wei Xiaowen's Sinicization & Luoyang Move", summaryEn: "Forged Xianbei–Han cultural fusion preparing Sui–Tang continental reunification." },
    "ev17": { titleEn: "Grand Canal Opened & Imperial Exams Founded", summaryEn: "Linked North–South economies directly alongside meritocratic civil-service recruitment." },
    "ev18": { titleEn: "Xuanzang's Pilgrimage & Chang'an Translation Bureau", summaryEn: "Brought Yogacara Buddhist texts and rich Indian geographical records into China." },
    "ev19": { titleEn: "An Lushan Rebellion & Southward Economic Shift", summaryEn: "Closed Kaiyuan golden peace, spurring 780 Twice-Yearly Tax reform and Jiangnan growth." },
    "ev20": { titleEn: "938 Bach Dang Victory — Dai Viet Independence", summaryEn: "Ngo Quyen defeats Southern Han launching enduring independent Vietnamese civilization." },
    "ev21": { titleEn: "Jiaozi Paper Currency Circulates in Sichuan", summaryEn: "World's earliest state-backed paper notes mirroring Song commercial revolution." },
    "ev22": { titleEn: "Wang Anshi's Xining New Policies", summaryEn: "Sweeping Song fiscal, agricultural-credit, and market-stabilization reforms." },
    "ev23": { titleEn: "Zhu Xi's *Collected Commentaries on Four Books*", summaryEn: "Codified Neo-Confucian civil examination canon across China, Korea, and Vietnam." },
    "ev24": { titleEn: "Guo Shoujing Promulgates Shoushi Calendar", summaryEn: "Calculated 365.2425-day tropical year matching Gregorian precision 300 years earlier." },
    "ev25": { titleEn: "Zheng He's Seven Indian Ocean Expeditions", summaryEn: "Colossal Ming treasure fleets charting Southeast Asia, India, and East Africa." },
    "ev26": { titleEn: "Wang Yangming's Enlightenment at Longchang", summaryEn: "Launched Philosophy of Mind affirming 'Mind Is Principle' & 'Unity of Knowing and Doing'." },
    "ev27": { titleEn: "Single Whip Silver Tax & *Tiangong Kaiwu*", summaryEn: "Zhang Juzheng unified taxes in silver bullion while Song Yingxing illustrated Ming engineering." },
    "ev28": { titleEn: "*Siku Quanshu* Completed & *Red Chamber* Circulates", summaryEn: "High-Qing archival encyclopedism alongside Cao Xueqin's supreme psychological novel." },
    "ev29": { titleEn: "Opium Wars, Self-Strengthening & Hundred Days Reform", summaryEn: "Maritime collision with Western empires spurring difficult modern industrial–constitutional crisis." },
    "ev30": { titleEn: "May Fourth Movement & Vernacular Language Revolution", summaryEn: "Watershed modernization of Chinese literature, *Baihua* literacy, and critical thought." },
    "ev31": { titleEn: "1978 Reform & Opening / 2001 WTO Accession", summaryEn: "Special Economic Zones integrated China into global manufacturing and trade." },
    "ev32": { titleEn: "RCEP Trade Era & Green Digital Transition", summaryEn: "Reshapes East Asia–ASEAN supply corridors via smart gates and clean-energy tech." }
  };

  const MACRO_REGIONS_EN = {
    "north": {
      ethnicDiversityEn: "Han majority across Beijing–Tianjin–Hebei–Shanxi alongside long-settled Mongol, Hui, and Manchu communities in Inner Mongolia and borderlands.",
      culturalFeaturesEn: "Core cradle of Yellow River civilization (Shanxi Sanjin, Hebei Yan–Zhao) layered with multi-ethnic imperial capitals (Liao–Jin–Yuan–Ming–Qing Beijing) and Inner Mongolian steppe heritage.",
      dialectsEn: "Beijing–Jilu Mandarin (phonetic bedrock of Putonghua), archaic Shanxi Jin retaining checked tones, and Mongolian.",
      economyEn: "Political, higher-education, financial, and R&D core (Zhongguancun AI), deep-water Bohai ports (Tianjin), clean energy (Shanxi), and wind–solar-pastoral plains (Inner Mongolia)."
    },
    "east": {
      ethnicDiversityEn: "Predominantly Han with immense dialect diversity, alongside She communities in Zhejiang–Fujian and historic Muslim trading quarters in Quanzhou & Hangzhou.",
      culturalFeaturesEn: "Unites Qilu Confucian heartland (Shandong), exquisite Wu–Yue Jiangnan literati towns (Jiangsu–Zhejiang–Shanghai), Huizhou merchant architecture (Anhui), and ocean-faring Min–Yue traditions (Fujian).",
      dialectsEn: "Wu dialects (Shanghainese, Suzhou, Hangzhou), Min (Hokkien/Fuzhou), Gan (Jiangxi), Huizhou, and Jiaoliao Mandarin (Shandong).",
      economyEn: "China's supreme economic growth engine: Shanghai global finance & automated Yangshan shipping, Jiangsu–Zhejiang smart manufacturing, Hangzhou e-commerce, and coastal light–industrial hubs."
    },
    "south": {
      ethnicDiversityEn: "Vibrant multi-ethnic crossroads home to Zhuang (China's largest minority in Guangxi), Yao, Miao, Li (Hainan), Tujia, and Lingnan Cantonese & Hakka populations.",
      culturalFeaturesEn: "Spans Central Plains antiquity (Henan) and romantic Chu arts (Hubei–Hunan) southward to Lingnan's ocean-trading Cantonese, Chaoshan, and Hakka communities deeply connected across Southeast Asia.",
      dialectsEn: "Yue/Cantonese (Guangzhou–Hong Kong), Hakka, Chaoshan Min, Hunan Xiang, and Kra–Dai Zhuang.",
      economyEn: "Guangdong–Hong Kong–Macau Greater Bay Area leads globally in hardware electronics, AI, EVs (Shenzhen–Dongguan–Foshan), and direct ASEAN trade bridges via Guangxi (Nanning–Pingxiang–Dongxing)."
    },
    "southwest": {
      ethnicDiversityEn: "China's highest ethnolinguistic diversity uniting Tibetan, Yi, Bai, Dai, Naxi, Miao, Buyei, Hani, Zhuang, and Bashu Han peoples.",
      culturalFeaturesEn: "Spirited relaxed Bashu culture (Sichuan–Chongqing, Bronze Sanxingdui), Tibetan plateau Buddhism, and alpine Tea-Horse Road caravans winding through Yunnan–Guizhou peaks.",
      dialectsEn: "Southwestern Mandarin (Sichuan, Chongqing, Yunnan–Guizhou) alongside dozens of Tibeto-Burman, Hmong–Mien, and Kra–Dai languages.",
      economyEn: "Chengdu–Chongqing drives western interior automotive, semiconductor, and China–Europe rail corridors, while Yunnan bridges ASEAN Overland via Kunming–Hekou–Lao Cai."
    },
    "northwest": {
      ethnicDiversityEn: "Eurasian crossroads uniting Han, Hui, Uyghur, Kazakh, Tibetan, and Dongxiang communities.",
      culturalFeaturesEn: "Cradle of Han–Tang Chang'an imperial capitals (Xi'an) and overland Silk Road oases (Dunhuang, Turpan, Kashgar), renowned for Buddhist cave murals, karez irrigation, and Uyghur Muqam music.",
      dialectsEn: "Lan–Yin & Central Plains Mandarin (Shaanxi), Turkic Uyghur & Kazakh, and Amdo Tibetan.",
      economyEn: "Large-scale desert wind–solar grids (Gansu–Qinghai–Xinjiang), irrigated oasis melons & cotton, Silk Road tourism, and Eurasian rail hubs at Xi'an and Urumqi."
    },
    "northeast": {
      ethnicDiversityEn: "Han majority (heirs to 19th-century 'Chuang Guandong' pioneer migration) alongside Manchu, Korean (concentrated in Yanbian), Mongol, and Hezhe peoples.",
      culturalFeaturesEn: "Blends Manchu Eight-Banner heritage (Shenyang Palace), mid-20th-century industrial grit, direct humorous storytelling (*Errenzhuan*), and Sino–Russian architecture in Harbin.",
      dialectsEn: "Northeastern Mandarin — close structurally to Putonghua yet packed with colorful colloquial idioms.",
      economyEn: "National grain basket across Songliao Plain, heavy machinery & turbines, shipbuilding (Dalian), and booming Harbin ice–snow winter tourism."
    }
  };

  const CITIES_EN = {
    "beijing": {
      regionEn: "North China",
      historyEn: "Capital of ancient Yan ('Jicheng'), Liao secondary capital, Jin Zhongdu, Yuan Dadu, Ming–Qing forbidden core, and PRC national capital since 1949.",
      customsEn: "Ceremonious social etiquette, lively political–philosophical banter ('Kan dashan'), jasmine tea appreciation, and New Year temple fairs.",
      cuisineEn: "Imperial-meets-northern comfort fare: Peking Roast Duck, Copper-Pot Boiled Mutton Hotpot, Zhajiangmian soybean-paste noodles, and fermented Douzhi mung-bean milk.",
      architectureEn: "Grand symmetric North–South Central Axis (Forbidden City, Temple of Heaven, Summer Palace) threaded by grey courtyard Hutong lanes.",
      dialectEn: "Beijing Mandarin with trademark retroflex '-r' endings ('Erhua') forming Putonghua pronunciation standard.",
      heritageEn: "Highest urban UNESCO density globally: Forbidden City, Temple of Heaven, Summer Palace, Great Wall, Zhoukoudian, Grand Canal, and Beijing Central Axis (2024).",
      economyEn: "Headquarters of central SOEs, Zhongguancun AI & software hub (ByteDance, Baidu, Xiaomi), and flagship universities (Peking, Tsinghua).",
      landmarksEn: "Forbidden City, Tiananmen, Temple of Heaven, Summer Palace, Nanluoguxiang Hutongs, 798 Art District."
    },
    "shanghai": {
      regionEn: "East China",
      historyEn: "Grew from Song–Ming cotton-weaving market town into East Asia's premier international port post-1842, shaping open cosmopolitan 'Haipai' (Shanghai Style) culture.",
      customsEn: "Pragmatic contract discipline, respect for personal privacy boundaries, and global cafe culture boasting the world's highest urban coffee-shop count.",
      cuisineEn: "Benbang subtle sweet-savory harmony: Nanxiang Xiaolongbao soup dumplings, Shanghai-style Red-Braised Pork, Yangcheng Lake Hairy Crab, and pan-fried Shengjianbao.",
      architectureEn: "Historic Bund Neoclassical & Art Deco waterfront facing brick Shikumen lanehouses and futuristic Pudong Lujiazui supertalls.",
      dialectEn: "Shanghainese (Wu family retaining archaic voiced initials and intricate tone sandhi wholly distinct from Mandarin).",
      heritageEn: "Haipai East–West modernism, Ming Yu Garden, Jiangnan storytelling Pingtan, and 20th-century industrial heritage.",
      economyEn: "Financial–stock center, world's #1 automated container terminal (Yangshan), Pilot Free Trade Zone, and regional multinational headquarters.",
      landmarksEn: "The Bund, Oriental Pearl & Shanghai Tower, Yu Garden, French Concession Wukang Road, Zhangyuan Shikumen."
    },
    "guangzhou": {
      regionEn: "South China",
      historyEn: "Over 2,200 years of history (Panyu ancient Nanyue capital), Tang–Song Maritime Silk Road hub, and Qing Dynasty's sole open Western port (Thirteen Hongs).",
      customsEn: "Pragmatic, trade-minded, clan-loyal, and devoted to morning 'Yum Cha' tradition ('One Pot, Two Dimsum Plates').",
      cuisineEn: "Pinnacle of Cantonese Yue cuisine: Har Gow & Siumai dimsum, crisp-skin Roast Goose, Poached White-Cut Chicken, and slow-simmered medicinal clear soups.",
      architectureEn: "Rain-sheltered Qilou arcaded shopfronts, intricately sculpted Chen Clan Ancestral Hall, and historic Xiguan mansions.",
      dialectEn: "Cantonese (Yue) preserving 6–9 tones and final stops (-p, -t, -k) resonating closely with Sino–Vietnamese pronunciation.",
      heritageEn: "Cantonese Opera, Lingnan Lion Dance, and Cantonese medicinal herbal tea & soup heritage.",
      economyEn: "Global wholesale trade hub hosting the biannual Canton Fair alongside automotive & cross-border e-commerce supply chains.",
      landmarksEn: "Chen Clan Hall, Shamian Island, Canton Tower, Beijing Road, Yuexiu Park."
    },
    "shenzhen": {
      regionEn: "South China",
      historyEn: "Transformed from sleepy Bao'an fishing county into China's founding 1980 Special Economic Zone ('Shenzhen Speed'), iconic flagship of Reform and Opening.",
      customsEn: "Young migrant meritocracy ('Once you arrive, you're a Shenzhener'), minimal nepotism, high-velocity startup hustle, and pragmatism.",
      cuisineEn: "Melting pot uniting Sichuan, Hunan, Chaoshan beef hotpot, Cantonese roast meats, and tech-park express dining.",
      architectureEn: "Futuristic glass skyline (Ping An Tower, Shenzhen Bay) woven beside dense lively 'urban villages' and modern design museums.",
      dialectEn: "Putonghua serves as universal lingua franca across migrant communities beside native Cantonese and Hakka villages.",
      heritageEn: "Ming Dapeng Fortress, Dafen Oil Painting Village, and UNESCO City of Design innovation hubs.",
      economyEn: "'Silicon Valley of Hardware': HQ of Huawei, Tencent, BYD, DJI, and BGI supported by complete 1-hour electronics–EV–drone supply ecosystems.",
      landmarksEn: "Ping An Finance Centre, Lianhuashan Park, Huaqiangbei Electronics Market, Shekou Sea World, Nantou Ancient City."
    },
    "xian": {
      regionEn: "Northwest China",
      historyEn: "Storied imperial Chang'an capital across thirteen dynasties (Zhou, Qin, Western Han, Sui, Tang), eastern terminus of the Silk Road and Tang Buddhist heartland.",
      customsEn: "Steadfast pride in Han–Tang grandeur balanced beside vibrant centuries-old Hui Muslim Quarter street life.",
      cuisineEn: "Northwestern wheat and tender mutton classics: Roujiamo spiced pork-belly bun, Yangrou Paomo mutton-broth crumbled bread, wide belt Biangbiang noodles, and cooling Liangpi.",
      architectureEn: "Intact Ming Xi'an City Wall, Giant Wild Goose Pagoda (Xuanzang translation abbey), and Daming Palace park.",
      dialectEn: "Guanzhong Central Plains Mandarin speaking crisp, rustic historic cadence.",
      heritageEn: "Qin Terracotta Army, haunting Qinqiang opera, and Forest of Stone Steles calligraphy museum.",
      economyEn: "Aerospace engineering, semiconductors, New Energy Vehicles, and Chang'an dry-port Eurasian rail logistics.",
      landmarksEn: "Terracotta Warriors Museum, Ancient City Wall, Giant Wild Goose Pagoda, Bell & Drum Towers, Muslim Quarter."
    },
    "chengdu": {
      regionEn: "Southwest China",
      historyEn: "Heart of 3,000-year Ancient Shu (Sanxingdui, Jinsha), enduring uninterruptedly as the fertile 'Land of Abundance' without changing name or site for 2,300 years.",
      customsEn: "Celebrated 'Bashi' leisurely lifestyle — sipping jasmine tea in open-air bamboo parks all afternoon beside friendly mahjong clatter.",
      cuisineEn: "UNESCO City of Gastronomy crowning Sichuan spicy sophistication: Chengdu Hotpot, Mapo Tofu, Boiled Chili Fish, Chuan-chuan skewers, and Mouthwatering Chicken.",
      architectureEn: "Grey-tiled bamboo West-Sichuan Kuanzhai Alleys, 2,200-year dam-less Dujiangyan weir, and Wuhou Shrine.",
      dialectEn: "Melodic Southwestern Sichuanese rich in expressive humor and spicy vernacular idioms.",
      heritageEn: "Sichuan Opera face-changing agility, Shu embroidery & brocade, and living grassroots teahouse life.",
      economyEn: "Western innovation anchor in aviation, gaming, software, and biomedicine linked seamlessly via southwest rail hubs.",
      landmarksEn: "Giant Panda Research Base, Dujiangyan & Mount Qingcheng, Wuhou Shrine, Du Fu Thatched Cottage, nearby Sanxingdui."
    },
    "chongqing": {
      regionEn: "Southwest China",
      historyEn: "Ancient Ba kingdom river fortress at Yangtze–Jialing confluence, wartime Nationalist capital (1937–1945), and China's fourth Direct-Administered Municipality (1997).",
      customsEn: "Bold fiery 'Jianghu' dockworker warmth — generous, candid, and buzzing late into riverside night.",
      cuisineEn: "Fiery tallow nine-grid Chongqing hotpot ('Jiugongge'), savory Xiaomian breakfast noodles, fiery Geleshan chili chicken, and river-boat Jianghu dishes.",
      architectureEn: "'8D Gravity-Defying Mountain City' uniting stacked stilted Hongyadong cliff homes, Yangtze aerial trams, and Metro Line 2 slicing straight through Liziba residential floors.",
      dialectEn: "Punchy lively Chongqing Sichuanese even crisper and bolder than Chengdu speech.",
      heritageEn: "UNESCO Dazu Rock Carvings uniting Confucian–Buddhist–Daoist cliff reliefs alongside river-hauler chanteys.",
      economyEn: "Top automotive (Changan, Seres) & global laptop assembly base anchoring the New International Land–Sea Trade Corridor toward ASEAN.",
      landmarksEn: "Hongyadong Cliffs, Jiefangbei, Ciqikou Old Town, Dazu Rock Carvings, Chaotianmen Confluence."
    },
    "nanjing": {
      regionEn: "East China",
      historyEn: "Capital of Six Dynasties, early Ming Empire, and Republican China (1927–1949), layered deeply with scholarly majesty and modern tragedy.",
      customsEn: "Reflective intellectual poise ('Literary Hub Under Heaven', home to imperial Jiangnan Exam Hall), gentler and unhurried beside Shanghai.",
      cuisineEn: "Jinling culinary fame in tender poultry: Nanjing Salted Duck, Duck Blood Vermicelli Soup, sweet osmanthus dumplings, and temple vegetarian craft.",
      architectureEn: "World's longest Ming city walls, Ming Xiaoling Mausoleum, Sun Yat-sen Mausoleum, and Republican villas along Yihe Road.",
      dialectEn: "Jiang-Huai Mandarin blending northern plains grammar cleanly beside southern Wu tones.",
      heritageEn: "UNESCO Nanjing Yunjin imperial cloud-brocade, Qinhuai lantern fairs, and profound historical museums.",
      economyEn: "Natural-science R&D (Nanjing & Southeast Universities), smart-grid tech, software, petrochemicals, and automotive manufacturing.",
      landmarksEn: "Confucius Temple & Qinhuai River, Ming Xiaoling, Sun Yat-sen Mausoleum, Nanjing Museum, Memorial Hall."
    },
    "hangzhou": {
      regionEn: "East China",
      historyEn: "Five-millennia Liangzhu cradle, southern terminus of Sui Grand Canal, and radiant Southern Song capital Lin'an hailed 'Heaven above, Suzhou–Hangzhou below'.",
      customsEn: "Refined scholar calm steeped in West Lake Longjing tea rituals paired smoothly with restless digital-startup energy.",
      cuisineEn: "Delicate Hangzhou Bang cuisine: West Lake Vinegar Fish, Dragon-Well Tea Shrimp, braised Dongpo Pork, and ham-simmered bamboo shoots.",
      architectureEn: "Airy lakefront pavilions tucked around West Lake hills, Six Harmonies Pagoda, Lingyin Temple, and Qinghefang lane.",
      dialectEn: "Hangzhou dialect — distinct Southern Song Northern-Mandarin hybrid perched uniquely inside surrounding Wu region.",
      heritageEn: "UNESCO West Lake Cultural Landscape, West Lake Longjing green tea processing, Hangzhou silks, and Xiling Seal Society.",
      economyEn: "'E-Commerce Capital of China': HQ of Alibaba, Ant Group, NetEase, Hikvision, and Geely fueling livestream digital retail.",
      landmarksEn: "West Lake Ten Scenic Views, Lingyin Temple, National Silk Museum, Xixi Wetlands, Liangzhu Ruins Park."
    },
    "tianjin": {
      regionEn: "North China",
      historyEn: "Founded 1404 ('Ferry of the Son of Heaven') guarding Grand Canal grain transit toward Beijing before booming as post-1860 treaty industrial hub.",
      customsEn: "Renowned working-class comic wit ('Leho') birthing northern Xiangsheng stand-up comedy inside packed neighborhood teahouses.",
      cuisineEn: "Savory Bohai seafood & legendary breakfasts: Goubuli 18-pleat buns, crisp Mahua fried twists, and crunchy green-mung-crepe Jianbing Guozi.",
      architectureEn: "Five Great Avenues preserving over 2,000 European/Japanese-style 1900s villas overlooking Haihe River Ancient Culture Street.",
      dialectEn: "Tianjin dialect — instantly recognizable falling comic cadence beloved on crosstalk stages nationwide.",
      heritageEn: "Yangliuqing New Year Woodblock Prints, Clay Figurine Zhang sculptures, and traditional Xiangsheng comedy.",
      economyEn: "Largest northern artificial deep-water port serving Jing-Jin-Ji, Airbus A320 final assembly, petrochemicals, and Eurasian rail freight.",
      landmarksEn: "Five Great Avenues, Ancient Culture Street, Tianjin Eye Ferris Wheel, Porcelain House, Binhai Port."
    },
    "suzhou": {
      regionEn: "East China",
      historyEn: "Founded 514 BCE as Wu Kingdom capital Gusu, reigning for a millennium across Tang–Song–Ming–Qing as Jiangnan's paramount paragon of silk, wealth, and scholar refinement.",
      customsEn: "Gentle 'Soft Wu Speech' refined sensibility cultivating seasonal culinary harmony, Biluochun green tea, Pingtan balladry, and Kunqu opera.",
      cuisineEn: "Seasonal Subang delicate sweetness: crispy Squirrel-Shaped Mandarin Fish, Yangcheng Lake Hairy Crab, Suzhou pastries, and morning First-Broth Noodles.",
      architectureEn: "Lacy canal lanes ('Little Bridges, Flowing Water, Homes'), nine UNESCO Classical Gardens, and I.M. Pei's geometric Suzhou Museum.",
      dialectEn: "Suzhou dialect — purest classical exemplar of liquid melodic Wu speech.",
      heritageEn: "Humble Administrator's & Lingering Classical Gardens, Kunqu Opera (UNESCO), Su Double-Sided Embroidery, and Song Jin brocades.",
      economyEn: "China's highest industrial-GDP prefecture city led by Singapore-partnered Suzhou Industrial Park, biomedicine, nanotech, and precision optics.",
      landmarksEn: "Humble Administrator's Garden, Suzhou Museum, Pingjiang & Shantang Streets, Hanshan Temple, Jinji Lake."
    },
    "wuhan": {
      regionEn: "Central China",
      historyEn: "Merged historic Wuchang, commercial Hankou, and industrial Hanyang at the Yangtze–Han confluence where the 1911 Xinhai Revolution overturned imperial rule.",
      customsEn: "Spirited hot-tempered dockside candor famous for brisk morning breakfast culture ('Guozao' — eaten standing on busy sidewalks).",
      cuisineEn: "Steaming sesame-paste Hot Dry Noodles (Reganmian), lotus-root pork-rib soup, spicy Zhou Heiya braised duck, and crispy Bean-Skin Doupi.",
      architectureEn: "Yellow Crane Tower overlooking the iconic 1957 First Yangtze Rail-Road Bridge beside historic Jianghan Road banking facades.",
      dialectEn: "Crisp punchy Wuhan Southwestern Mandarin rich in lively riverport vigor.",
      heritageEn: "Ancient Chu State artifacts at Hubei Museum (Zenghouyi Bells & Sword of Goujian), Han Opera, and annual Yangtze swims.",
      economyEn: "Nation's central 'Nine-Province Crossroads' rail–water node, university giant (Wuhan & HUST), and Optics Valley memory chips & lasers.",
      landmarksEn: "Yellow Crane Tower, Hubei Provincial Museum, East Lake, Wuhan University Cherry Blossoms, First Yangtze Bridge."
    },
    "quanzhou-xiamen": {
      regionEn: "East China",
      historyEn: "Quanzhou ('Zaytun' of Marco Polo & Ibn Battuta) thrived as Song–Yuan world trade capital; Xiamen emerged as 1842 port & 1980 SEZ spearhead.",
      customsEn: "Audacious Minnan daring ('Strive hard to win'), fervent Mazu Sea-Goddess & Guan Yu devotion binding diaspora ties across ASEAN and Taiwan.",
      cuisineEn: "Light sweet Minnan coastal bounty: savory Vermicelli Paste soup, crispy Oyster Omelet, beef-ball soup, ginger duck, and Tieguanyin Gongfu tea.",
      architectureEn: "Swallow-tail red-brick Minnan houses, UNESCO Gulangyu Island colonial-hybrid villas, and Jiageng style at Xiamen University.",
      dialectEn: "Southern Min (Hokkien) preserving archaic Six-Dynasties phonology and serving as mother tongue across Singapore, Malaysia, Philippines & Taiwan.",
      heritageEn: "UNESCO Quanzhou Emporium of the World (22 Song–Yuan port relics including Kaiyuan Temple & Qingjing Mosque), Gulangyu Island, Nanyin ancient music, and Xunpu floral headdresses.",
      economyEn: "National athletic footwear capital (Anta, Xtep, 361° in Jinjiang), Xiamen deep-water port, and maritime–academic trade links.",
      landmarksEn: "Kaiyuan Temple Twin Pagodas, Gulangyu Island, Xiamen University, Song Luoyang Bridge, Xunpu Village."
    },
    "kunming": {
      regionEn: "Southwest China",
      historyEn: "Ancient Dian bronze hearth beside Dianchi Lake, Nanzhao–Dali kingdoms, wartime intellectual citadel hosting Southwest Associated University (1938–46), and Yunnan capital.",
      customsEn: "Year-round mild 'Spring City' lifestyle exploding in multi-ethnic festivals (Yi Torch Festival, Dai Water-Splashing) among 26 minority groups.",
      cuisineEn: "Highland wild-mushroom & floral feasts: Crossing-the-Bridge Rice Noodles, wild porcini hotpots, Steamed-Pot Chicken, and fresh rose pastry.",
      architectureEn: "Golden Horse & Jade Chicken Archways, Golden Temple bronze shrine, Guandu Old Town, and Bai/Yi/Naxi timber courtyards.",
      dialectEn: "Kunming Southwestern Mandarin.",
      heritageEn: "Southwest Associated University campus monument, UNESCO Stone Forest karst, and Ancient Tea-Horse Caravan headwaters.",
      economyEn: "China's overland rail–road bridge to Vietnam (Kunming–Hekou–Lao Cai–Haiphong) & Laos, Asia's top Dounan cut-flower auction, Pu'er tea, and nonferrous metals.",
      landmarksEn: "Dianchi Lake & Western Hills Dragon Gate, Stone Forest Karst, SW Associated Univ Site, Dounan Flower Market, Green Lake."
    },
    "nanning-pingxiang": {
      regionEn: "South China (Guangxi Borderland)",
      historyEn: "Ancestral Luoyue–Ouyue homeland (ancestors of modern Zhuang & Tay–Nung), Guangxi Autonomous Capital, and historic Friendship Pass (Zhennanguan) straddling Sino–Vietnamese borders.",
      customsEn: "Vibrant Zhuang heritage: 'Third Month Third' antiphonal mountain-song festivals, five-color sticky rice, and embroidered 'Xiuqiu' balls echoing northeastern Vietnam's Tay–Nung.",
      cuisineEn: "Zesty sweet-sour Viet–Guangxi frontier fare: Liuzhou Luosifen snail noodles, Nanning savory 'Old Friend' rice noodles, salted-lemon duck, and tropical fruits.",
      architectureEn: "Historic Friendship Pass tower, Nanning Three-Streets Two-Lanes Quarter, ASEAN Expo Hall, and UNESCO Zuojiang Huashan rock art cliffs.",
      dialectEn: "Zhuang (Kra–Dai family), Pinghua, Nanning Cantonese, and Southwestern Mandarin.",
      heritageEn: "UNESCO Zuojiang Huashan Rock Art, world's largest Dong Son–Luoyue Bronze Drum collection at Guangxi Ethnicities Museum, and Tianqin string ballads.",
      economyEn: "Permanent host of China–ASEAN Expo (CAEXPO) in Nanning; Pingxiang–Friendship Pass handles top overland rail–truck flows in Vietnamese fruit & electronics supply chains.",
      landmarksEn: "Friendship Pass (Pingxiang), Guangxi Ethnicities Museum, Qingxiu Mountain, Nanning Expo Hub, Detian–Ban Gioc Falls."
    },
    "harbin": {
      regionEn: "Northeast China",
      historyEn: "Historic Jurchen Jin riverside realm on the Songhua bursting at end-19th century around the Chinese Eastern Railway linking Siberia with Vladivostok amidst Russian & European émigrés.",
      customsEn: "Warm generous Northeastern spirit turning -25 °C winters into jubilant ice festivals inside UNESCO 'City of Music'.",
      cuisineEn: "Hearty Russo–Northeastern dishes: crisp Sweet-and-Sour Guobaorou pork, cast-iron farmhouse stews, smoked Harbin Red Sausages, giant Dalieba bread, and outdoor winter Madier ice bars.",
      architectureEn: "'Moscow of the East': onion-domed Saint Sophia Cathedral, cobblestone Central Avenue, and Chinese-Baroque Daowai quarters.",
      dialectEn: "Northeastern Mandarin — crystal close structurally to Putonghua news broadcasts.",
      heritageEn: "Harbin International Ice & Snow Festival, Songhua winter ice-fishing heritage, and Harbin Summer Music concerts.",
      economyEn: "Heilongjiang grain-security processor, power turbines, aerospace R&D (Harbin Institute of Technology), and far-north commerce.",
      landmarksEn: "Ice and Snow World, Saint Sophia Cathedral, Central Avenue, Sun Island, frozen Songhua River."
    }
  };

  if (window.CCE_HISTORY) {
    (window.CCE_HISTORY.periods || []).forEach((pr) => {
      const p = HISTORY_PERIODS_EN[pr.id];
      if (p) {
        Object.assign(pr, p);
        if (pr.mapData) {
          pr.mapData.capitalsEn = p.mapDataEn.capitalsEn;
          pr.mapData.territoryEn = p.mapDataEn.territoryEn;
          pr.mapData.routesEn = p.mapDataEn.routesEn;
        }
        if (Array.isArray(pr.primarySources) && Array.isArray(p.primarySourcesEn)) {
          pr.primarySources.forEach((ps, i) => {
            if (p.primarySourcesEn[i]) ps.noteEn = p.primarySourcesEn[i];
          });
        }
      }
    });
    (window.CCE_HISTORY.timelineEvents || []).forEach((ev) => {
      const e = TIMELINE_EVENTS_EN[ev.id];
      if (e) Object.assign(ev, e);
    });
  }

  if (window.CCE_REGIONS) {
    (window.CCE_REGIONS.macroRegions || []).forEach((mr) => {
      const m = MACRO_REGIONS_EN[mr.id];
      if (m) Object.assign(mr, m);
    });
    (window.CCE_REGIONS.cities || []).forEach((ct) => {
      const c = CITIES_EN[ct.id];
      if (c) Object.assign(ct, c);
    });
  }

  const PROVINCES_EN = {
    "prov-beijing": {
      typeEn: "Direct-Controlled Municipality",
      regionLabelEn: "North China",
      highlightsEn: "Forbidden City, Great Wall, Temple of Heaven, Siheyuan courtyards, Peking Opera, and 7 UNESCO World Heritage sites.",
      economyEn: "China's premier center for national governance, top research universities (Tsinghua, Peking University), Zhongguancun AI hub, and central SOE headquarters.",
      landmarkEn: "Hall of Prayer for Good Harvests — Temple of Heaven (天坛祈年殿)",
      bestSeasonEn: "September – November (crisp autumn skies, golden ginkgo foliage & Xiangshan red leaves)",
      cuisineEn: "Peking Roast Duck (北京烤鸭), Copper-Pot Mutton Hotpot (涮羊肉), Old Beijing Zhajiangmian noodles",
      travelTipEn: "Reserve Forbidden City and Mutianyu Great Wall tickets with your passport 7 days ahead at 20:00 Beijing Time; prefer Daxing or Capital airport links.",
      economyAndIndustryEn: "GDP exceeds 4.37 trillion RMB (~$610B) with services topping 84%. Beijing serves as China's financial-policy nerve center (Financial Street, PBOC, AIIB) and Asia's top R&D powerhouse centered in Zhongguancun ('China's Silicon Valley'), home to Baidu, ByteDance, Xiaomi, Kuaishou, Zhipu AI, and Moonshot AI alongside global aviation via Daxing Airport.",
      vietnamConnectivityEn: "Historically the destination of Dai Viet envoy embassies from Thang Long–Hanoi (Le Quy Don, Ngo Thi Nham, Phan Huy Chu), recorded in the famous 'Bac Hanh Tap Luc' travelogues. Today Beijing hosts the largest cohort of Vietnamese CSC scholars across Peking University, Tsinghua University, Renmin University, BLCU, and Beijing Normal University.",
      identityEn: {
        adminTypeFullEn: "Direct-Controlled Municipality (直辖市 Zhíxiáshì)",
        abbreviationOriginEn: "The character 京 (Jing) originally depicted a high sacred mound housing an imperial palace in oracle bone script. Since Ming Emperor Yongle transferred the capital north in 1421, Beijing ('Northern Capital') contrasted with Nanjing and adopted 京 exclusively for the capital.",
        capitalCityEn: "National Capital of the People's Republic of China (Dongcheng & Tongzhou Districts)"
      },
      geoEn: {
        summaryEn: "Anchored on China's third topographic step along the northwestern rim of the North China Plain, sheltered by the crescent Yanshan Mountains to the north and Taihang Mountains to the west while facing Bohai Sea southeast. Alluvial plains of the Yongding and Chaobai rivers experience a crisp four-season continental monsoon climate: dry windy springs, rainy summers, golden crystal autumns, and cold dry winters.",
        causalityEn: "Its horseshoe 'Left Green Dragon, Right White Tiger, Rear Black Tortoise' basin explains why five empires (Liao, Jin, Yuan, Ming, Qing) made it a fortress defending steppe approaches while governing fertile agrarian plains. Severe winters forged thick southbound-facing Siheyuan courtyard brick homes, heated Kang beds, calorie-rich mutton hotpot, and pickled autumn cabbages."
      },
      historicalEvolutionEn: "From Western Zhou's State of Ji and Warring States Yan capital to Qin–Han Youzhou, geopolitical transformation accelerated under Liao Southern Capital (938), Jin Central Capital (1153), and Kublai Khan's cosmic grid of Dadu (1272) modeled after 'Zhouli Kaogongji'. Ming Emperor Yongle completed the Forbidden City and 7.8 km Central Axis (1403–1421), extended through High Qing summer palaces until the 1919 May Fourth Movement and October 1, 1949 proclamation.",
      culturalIdentityEn: "Blends dignified Yan–Zhao heritage into refined Jingpai Capital Culture: Manchurian–Han Eight Banners court formality, quiet brick Hutong alleys, standard Erhua Beijing Mandarin intonation, spirited political debate ('Kan Dashan'), Liulichang scholar studios, and UNESCO Central Axis conservation.",
      intangibleHeritageEn: "Peking Opera (synthesized late 18th c. from four Hui troupes and Kunqu), Xiangsheng comic dialogues, bamboo whistle kites, dough figurines, Ming Cloisonne enamelware (景泰蓝), imperial jade carving, and Changdian Spring Temple Fairs.",
      culinaryEn: {
        styleOverviewEn: "Imperial Capital Cuisine unites Ming–Qing Palace Taiyiyuan banquets with Shandong Luchai foundations and Muslim Halal lamb crafts.",
        dishesEn: [
          "Naturally plump Beijing white duck glazed with maltose syrup and roasted over jujube fruitwood or closed ovens into shatter-crisp amber skin served in gossamer pancakes.",
          "Charcoal-fired copper-pot hotpot with clear ginger-scallion broth dipping paper-thin Inner Mongolian lamb into savory sesame-chive-fermented bean paste.",
          "Hand-pulled chewy wheat noodles tossed in slow-braised sweet fermented soybean-pork ragu accompanied by seven crisp julienned vegetable toppings.",
          "Royal-folk sweet rice flour rolls filled with red bean paste and dusted in toasted yellow soybean powder resembling a rolling donkey.",
          "Naturally fermented mung bean whey drink enjoyed piping hot by native Beijingers alongside crisp dough rings and spicy pickled turnips."
        ]
      },
      heritagesEn: [
        { nameEn: "The Palace Museum / Forbidden City (1420)", significanceEn: "Largest surviving ancient timber palace complex worldwide (72 hectares, 980 buildings) embodying Confucian axial cosmology and curating >1.86M treasures." },
        { nameEn: "Beijing Central Axis (UNESCO 2024)", significanceEn: "7.8 km ceremonial urban spine connecting Bell & Drum Towers, Jingshan, Forbidden City, and Yongdingmen Gate." },
        { nameEn: "Badaling & Mutianyu Great Wall", significanceEn: "Monumental Ming defensive stone battlements sweeping across Yanshan crests and strategic Juyongguan Pass." },
        { nameEn: "Temple of Heaven (1420)", significanceEn: "Architectural masterpiece encoding 'Round Heaven, Square Earth' in the nail-free timber Hall of Prayer for Good Harvests." },
        { nameEn: "Summer Palace (Yiheyuan)", significanceEn: "Summit of Qing imperial garden design echoing Hangzhou's West Lake across Kunming Lake and Longevity Hill." },
        { nameEn: "Ming Tombs (Thirteen Mausoleums)", significanceEn: "Geomantically sited imperial necropolis of thirteen Ming emperors nestled below Tianshou Mountain." }
      ],
      figuresEn: [
        "Brilliant 5th-century mathematician and astronomer from Fanyang who calculated pi to 7 decimals over a millennium before Europe.",
        "Author of the psychological masterpiece *Dream of the Red Chamber*, composing it in poverty across Beijing's Western Hills.",
        "Modern Manchu Beijing novelist (*Rickshaw Boy*, *Teahouse*) capturing the humor and sorrow of ordinary Hutong citizens.",
        "Supreme Peking Opera master who introduced stylized traditional theater stages across America, Europe, USSR, and Japan."
      ],
      echoEn: { workTitleEn: "Song of Ascending Youzhou Tower (登幽州台歌)", authorEn: "Chen Zi'ang (陈子昂)", dynastyEn: "Early Tang (696 CE)" },
      commercialEn: {
        historicalGuildEn: "Capital Merchant Houses & Qianmen–Liulichang antique-bookshop guilds serving the court (Tongrentang 1669, Ruifuxiang 1862).",
        modernClustersEn: "Global R&D and AI foundation-model hub (Zhongguancun), Central SOE headquarters, and sovereign cloud infrastructure.",
        hubsAndCorridorsEn: "Daxing & Capital International Airports paired with Beijing West/South HSR hubs anchoring Jing-Jin-Ji.",
        vietnamAseanLinkEn: "Premier destination for Vietnamese graduate researchers (Tsinghua, PKU) and government-to-government policy alignment."
      },
      stationsEn: [
        "Primary Fuxing HSR terminal for Shanghai (4h30), Tianjin & Jinan",
        "Southwestern HSR hub toward Xi'an, Zhengzhou, Wuhan & Chengdu",
        "Northeastern HSR terminal toward Shenyang & Harbin"
      ]
    },
    "prov-tianjin": {
      typeEn: "Direct-Controlled Municipality",
      regionLabelEn: "North China",
      highlightsEn: "Five Great Avenues villas, Xiangsheng crosstalk comedy, Goubuli buns, Yangliuqing New Year woodblock prints.",
      economyEn: "International deep-water port gateway of Jing-Jin-Ji, aerospace assembly (Airbus A320), petrochemicals, and financial leasing.",
      landmarkEn: "Tianjin Eye Ferris Wheel over Haihe River (天津之眼摩天轮)",
      bestSeasonEn: "April – May & September – October (breezy mild weather along the Haihe waterfront)",
      cuisineEn: "Goubuli Buns (狗不理包子), 18th-Street Mahua Twists (十八街麻花), Crunchy Mung-Flour Jianbing Guozi",
      travelTipEn: "30-minute HSR ride from Beijing South; take a dusk boat cruise under Haihe's illuminated historic bridges and Tianjin Eye.",
      economyAndIndustryEn: "Tianjin Port ranks among the world's largest artificial deep-water harbors, feeding Jing-Jin-Ji, Shanxi, and Inner Mongolia. Binhai hosts Airbus A320 Final Assembly Line, Long March 5 rocket manufacturing, heavy shipbuilding, EV production, and China's top aircraft/ship leasing cluster.",
      vietnamConnectivityEn: "Direct container shipping links Hai Phong Port with Tianjin Port carrying machinery, chemicals, and Northern Vietnamese farm exports into North China. Tianjin University, Nankai University, and Tianjin University of TCM educate large Vietnamese engineering and medical cohorts.",
      identityEn: {
        adminTypeFullEn: "Direct-Controlled Municipality (直辖市 Zhíxiáshì)",
        abbreviationOriginEn: "Named 'Ford of the Son of Heaven' (Tiānzǐ Jīndù) by Ming Emperor Yongle in 1404 after crossing the Haihe River at Zhigu; hence 津 ('river ferry/port') became the municipal abbreviation.",
        capitalCityEn: "Heping District & Binhai New Area (Northern Seaport Hub)"
      },
      geoEn: {
        summaryEn: "Positioned along the eastern edge of the North China Plain where five Haihe tributaries converge at Sancha Estuary before entering Bohai Bay, just 120 km southeast of Beijing. Low alluvial plains moderated by Bohai maritime breezes bring milder seasonal extremes than inland Beijing.",
        causalityEn: "Standing at the mouth of nine river routes transformed 15th-century Tianjin into the Grand Canal's vital grain port and modern Beijing's maritime gateway, producing open-hearted dockside humor, abundant Bohai seafood breakfasts, and hybrid Euro-Chinese concession architecture."
      },
      historicalEvolutionEn: "Growing from Song–Jin fishing-salt outpost Zhigu, Ming built Tianjin Garrison in 1404 to guard grain barges. Post-1860 treaty concessions catalyzed Self-Strengthening arsenals and Beiyang University (1895 — China's first modern university); post-2006 Binhai anchored Jing-Jin-Ji integration.",
      culturalIdentityEn: "Vibrant 'Jinwei' mercantile-maritime spirit renowned for candid wit, self-deprecating comedic banter powering Northern Xiangsheng stages, alongside steadfast Mazu Sea Goddess devotion dating from Tianjin's 1326 Tianhou Temple.",
      intangibleHeritageEn: "Yangliuqing New Year Woodblock Prints (first among China's Four Folk Print Schools), Clay Figurine Zhang lifelike sculptures, teahouse Xiangsheng comedy, carved brick relief, and Wei-family kites.",
      culinaryEn: {
        styleOverviewEn: "Jincai cuisine blends Haihe freshwater catch, Bohai seafood, and China's richest artisanal street breakfast heritage ('Three Tianjin Wonders').",
        dishesEn: [
          "18-pleat steamed pork buns filled with whipped bone-broth aspic that melts into rich savory soup upon steaming since 1858.",
          "Multi-stranded twisted fried dough braided with citrus peel, sesame, walnut, and osmanthus retaining crispness for weeks.",
          "Leavened golden glutinous rice doughnuts stuffed with silky osmanthus red-bean paste fried to a delicate blistered crust.",
          "Pure mung-bean crepe pan-griddled with egg, crispy fried cracker or dough stick, sweet bean paste, and fermented tofu.",
          "Scale-on Haihe carp deep-fried at roaring heat until scales fan upward crisp, finished in steaming sweet-and-sour sauce."
        ]
      },
      heritagesEn: [
        { nameEn: "Five Great Avenues Historic Area (Wudadao)", significanceEn: "Open-air museum of >2,000 early 20th-century British, French, Italian, and German villas." },
        { nameEn: "Ancient Culture Street & Tianhou Temple (1326)", significanceEn: "Northern China's oldest Mazu maritime shrine anchoring centuries of folk markets." },
        { nameEn: "Huangyaguan Great Wall (Jizhou)", significanceEn: "Mountain fortress strengthened by Ming General Qi Jiguang featuring an ingenious arched water-gate crossing." },
        { nameEn: "Dule Temple (Liao Dynasty, 984 CE)", significanceEn: "One of three intact Liao timber complexes preserving a towering 16 m Eleven-Headed Guanyin statue." },
        { nameEn: "Panshan Scenic Area (Jizhou)", significanceEn: "Mountain sanctuary praised by Qianlong ('Having Panshan, why descend to Jiangnan?') studded with Tang–Liao stupas." }
      ],
      figuresEn: [
        "Enlightenment translator of *Evolution and Ethics* and *Wealth of Nations*, formulating the translation maxim 'Faithfulness, Expressiveness, Elegance'.",
        "Visionary educator founding Nankai High School (1904) and Nankai University (1919) while pioneering China's Olympic movement.",
        "Father of modern spoken Chinese drama whose social tragedies *Thunderstorm* and *Sunrise* drew sharply on Tianjin urban life."
      ],
      echoEn: { workTitleEn: "At Zhigu Mouth (直沽口 — Haihe Estuary)", authorEn: "Ming Poetics of the Grand Canal Mouth", dynastyEn: "Ming Dynasty" },
      commercialEn: {
        historicalGuildEn: "Tianjin Garrison salt merchants (Changlu Monopoly) & Grand Canal northern grain transshipment warehouses.",
        modernClustersEn: "Deep-water automated container port, Airbus A320 assembly, Long March rockets, and offshore financial leasing.",
        hubsAndCorridorsEn: "Port of Tianjin & Binhai International Airport feeding Jing-Jin-Ji and Mongolian overland corridors.",
        vietnamAseanLinkEn: "Direct coastal container shipping to Hai Phong carrying industrial machinery, steel, and agricultural goods."
      },
      stationsEn: [
        "Downtown Haihe Hub linking Beijing South in 30 minutes",
        "Beijing–Shanghai High-Speed Line junction toward Jinan & Shanghai"
      ]
    },
    "prov-shanghai": {
      typeEn: "Direct-Controlled Municipality",
      regionLabelEn: "East China",
      highlightsEn: "The Bund, Shikumen lane architecture, Haipai culture, Yu Garden, Lujiazui financial towers.",
      economyEn: "China's financial-stock market capital, world #1 container port (Yangshan), semiconductors, EVs & commercial aviation.",
      landmarkEn: "The Bund & Lujiazui Waterfront Skyline (上海外滩与陆家嘴)",
      bestSeasonEn: "March – May (spring magnolias) & September – November (golden autumn hairy crab season)",
      cuisineEn: "Nanxiang Soup Dumplings (小笼包), Rich Caramel-Soy Braised Pork (红烧肉), Yangcheng Hairy Crab",
      travelTipEn: "Ride the 8-minute Pudong Maglev into Longyang Rd; activate Alipay/WeChat Metro QR for effortless rail connections.",
      economyAndIndustryEn: "GDP tops 4.72 trillion RMB (~$660B), Asia's largest urban economy. Port of Shanghai led global container throughput for 14 straight years; SSE STAR Market anchors finance alongside Tesla Gigafactory, NIO, SAIC, SMIC fabs, Zhangjiang biotech, COMAC C919 jets, and the annual CIIE import expo.",
      vietnamConnectivityEn: "Maritime container lanes linking Cat Lai / Cai Mep directly to Shanghai move manufacturing machinery, fabrics, and Vietnamese fruit across East China. Ho Chi Minh resided briefly in Shanghai in the 1920s–30s; Fudan, Shanghai Jiao Tong, Tongji, and ECNU educate thriving Vietnamese alumni networks.",
      identityEn: {
        adminTypeFullEn: "Direct-Controlled Municipality (直辖市 Zhíxiáshì)",
        abbreviationOriginEn: "沪 (Hu) derives from ancient woven bamboo fishing weirs ('Hudu') planted along Suzhou Creek; Shanghai's literary name 申 (Shen) honors Warring States Chu Prime Minister Chunshen Jun.",
        capitalCityEn: "East Asian Financial & Commercial Center (Huangpu & Pudong Lujiazui)"
      },
      geoEn: {
        summaryEn: "Anchored on the eastern tip of the Yangtze River Delta bordering the East China Sea where Huangpu and Suzhou Creeks merge toward the Yangtze mouth. Flat alluvial terrain (~4 m elevation) braided with Taihu canals experiences a humid four-season marine climate with June Plum Rains and crisp autumns.",
        causalityEn: "Commanding a rare global 'T-junction' uniting China's north–south coastline with the 6,300 km Yangtze inland waterway propelled Shanghai from fishing port to Pacific super-harbor. Dense urban lanes bred hybrid Shikumen townhouses and Haipai contract professionalism."
      },
      historicalEvolutionEn: "Ancient Wu–Chu territory turned Song–Yuan county (1292); opened post-1843 into International & French Concessions housing East Asia's top banks, film studios, and Commercial Press before 1990 Pudong transformation launched Lujiazui and China's first Pilot Free Trade Zone (2013).",
      culturalIdentityEn: "Epitome of cosmopolitan Haipai Culture: respecting privacy, contractual precision, punctuality, and international fashion seamlessly woven atop delicate Jiangnan Wu sensibility (Pingtan storytelling, teahouses, sweet braised cuisine).",
      intangibleHeritageEn: "Wu-dialect Huju Opera, Songjiang Gu-style watercolor embroidery, Haipai tailored Qipao, Jiading bamboo carving, and Jiangnan Silk-and-Bamboo ensembles.",
      culinaryEn: {
        styleOverviewEn: "Benbang Cuisine merges delicate Jiangnan produce with signature 'heavy oil, glossy amber soy-rock-sugar sauce' glazes.",
        dishesEn: [
          "18-to-20 pleat gossamer dumplings filled with rich pork aspic that bursts into ginger-scented broth, dipped in black Zhenjiang vinegar.",
          "Yeasted buns browned in cast-iron skillets for crackly sesame-scallion bottoms under fluffy tops housing scorching pork soup.",
          "Pork belly cubes braised exclusively in dark/light soy, Shaoxing rice wine, and rock sugar without water until mirror-glossy.",
          "Springy wheat noodles tossed cleanly in slow-charred sweet scallion-infused oil and savory caramelized soy reduction.",
          "Free-range Sanhuang chicken delicately poached to tender pink-boned succulence, chilled to tighten skin and served with scallion-ginger dip."
        ]
      },
      heritagesEn: [
        { nameEn: "The Bund International Architectural Gallery", significanceEn: "52 Gothic, Baroque, Neoclassical, and Art Deco bank palaces charting 20th-century Asian finance along Huangpu River." },
        { nameEn: "Yu Garden (1559)", significanceEn: "Refined Ming Jiangnan scholar garden framed by the porous Exquisite Jade Rock of Lake Taihu." },
        { nameEn: "First National Congress Site (Xintiandi)", significanceEn: "1920 grey-brick Shikumen residence marking modern Chinese political history in July 1921." },
        { nameEn: "Zhujiajiao Ancient Water Town", significanceEn: "1,700-year canal enclave anchored by the 5-arch Ming Fangsheng Stone Bridge (1571)." },
        { nameEn: "Shanghai Museum (People's Sq & East Branch)", significanceEn: "Curates >1M works led by premier Shang–Zhou bronzes (*Da Ke Ding*), ceramics, and Yuan–Qing paintings." }
      ],
      figuresEn: [
        "Song–Yuan textile innovator in Songjiang who modernized multi-spindle cotton weaving learned in Hainan, fueling Jiangnan prosperity.",
        "Ming scholar-statesman of Shanghai who co-translated Euclid's *Elements* with Matteo Ricci and authored the agronomic encyclopedia.",
        "Preeminent 20th-century Haipai writer whose novellas *Love in a Fallen City* and *The Golden Cangue* anatomized Shanghai–HK society."
      ],
      echoEn: { workTitleEn: "Ode to Maritime Splendor & Pudong Skies", authorEn: "Huang Zunxian / Haipai Poets", dynastyEn: "Late 19th Century" },
      commercialEn: {
        historicalGuildEn: "Ningbo Guilds & Sixteen-Dock Jiangnan shipping houses (1730–1949) pioneering Asia's modern banking institutions.",
        modernClustersEn: "Lujiazui financial exchange, Zhangjiang wafer fabs (SMIC), Tesla Gigafactory, and C919 commercial aviation.",
        hubsAndCorridorsEn: "Automated Yangshan Deep-Water Port linked by the 32.5 km Donghai Bridge plus Pudong/Hongqiao aviation-rail mega-hubs.",
        vietnamAseanLinkEn: "Primary RMB/LC clearing nexus and transshipment maritime corridor linking Sai Gon (Cat Lai) and Hai Phong."
      },
      stationsEn: [
        "Super-hub directly integrated with Hongqiao Airport & East China HSR",
        "Central urban stations served by Metro Lines 1, 3, 4"
      ]
    },
    "prov-chongqing": {
      typeEn: "Direct-Controlled Municipality",
      regionLabelEn: "Southwest China",
      highlightsEn: "3D mountain metropolis at Yangtze–Jialing confluence, UNESCO Dazu Rock Carvings, Hongyadong, fiery hotpot culture.",
      economyEn: "Global laptop assembly capital, smart NEVs (Changan/Seres), and origin of the China–Europe & New Land-Sea Rail corridors.",
      landmarkEn: "Hongyadong Stilts & Qiansimen Bridge (洪崖洞与千厮门嘉陵江大桥)",
      bestSeasonEn: "March – May & October – November (avoiding peak July–August 'Furnace City' summer heat)",
      cuisineEn: "Chongqing Nine-Grid Beef-Tallow Hotpot (九宫格火锅), Spicy Street Noodles (重庆小面), Gele Mountain Chili Chicken",
      travelTipEn: "Avoid relying solely on Google Maps in 3D multi-level terrain; navigate with Amap (Gaode) and ride Monorail Line 2 through Liziba Building.",
      economyAndIndustryEn: "Twin anchor of the Chengdu–Chongqing Economic Circle and hub of the New International Land-Sea Trade Corridor directly linking Qinzhou Port to Vietnam. Manufactures ~1/3 of global laptops (HP/Foxconn/Quanta) plus Changan/Seres NEVs and pioneering Yuxinou rail freight to Germany.",
      vietnamConnectivityEn: "Key inland terminal of cross-border container trains running Hanoi (Yen Vien) – Dong Dang – Nanning – Guiyang – Chongqing carrying electronics and ASEAN fruit into western China and onward to Europe. Ho Chi Minh operated nearby in 1940–45 (Hongyan Village Museum); Chongqing & Southwest Universities host large Vietnamese cohorts.",
      identityEn: {
        adminTypeFullEn: "Direct-Controlled Municipality (直辖市 Zhíxiáshì)",
        abbreviationOriginEn: "Derived from ancient Yushui (modern Jialing River) through Ba Kingdom; named Gongzhou before Song Emperor Guangzong celebrated his 'Double Happy Elevation' (Chóngqìng) in 1189, keeping 渝 (Yu) as official code.",
        capitalCityEn: "Yuzhong Peninsula & Liangjiang New Area (Mountain Mega-Municipality)"
      },
      geoEn: {
        summaryEn: "Perched on the eastern rim of the Sichuan Basin straddling Step 2 plateau ridges down toward Step 3 through the dramatic Three Gorges. Seventy-six percent rugged peaks and steep gorges frame the dramatic peninsula where clear green Jialing River plunges into silt-red Yangtze beneath damp 'Fog City' air and baking summers.",
        causalityEn: "Sheer cliffside terrain birthed astonishing 3D multi-level engineering — wooden Diaojiaolou stilts, stacked sky-bridges, and elevated rail passing straight through residential blocks at Liziba — while humid river docks forged communal nine-grid beef-tallow hotpot to dispel river damp."
      },
      historicalEvolutionEn: "Ancient Ba Kingdom homeland; heroic Song fortress Diaoyu City famously resisted Mongol sieges for 36 years (claiming Great Khan Mongke in 1259); served as China's wartime provisional capital (1937–1945) before becoming the 4th Direct-Controlled Municipality in 1997 (82,400 km²).",
      culturalIdentityEn: "Candid, fiery, big-hearted Ba–Yu solidarity rooted in Yangzte boatmen work songs (Haozi), wartime resilience, lively outdoor courtyard tea-drinking ('Babaya Cha'), and fearless embrace of sizzling street life from dawn till midnight.",
      intangibleHeritageEn: "Chongqing-branch Sichuan Opera face-changing, Three Gorges boat-tracker work chants, Changshou lacquerware, Banlong woodblock prints, and traditional woodcarving.",
      culinaryEn: {
        styleOverviewEn: "Chongqing Yuchai champions bold beef-tallow Mala (numbing Sichuan peppercorn + blistering chili), heavy roasted garlic, ginger, and unpretentious dockside vitality.",
        dishesEn: [
          "Boiling beef-tallow chili broth divided by an iron 3×3 grid regulating heat intensities for tripe ('Maodu'), duck intestine crisp-blanched in seconds.",
          "Springy alkaline breakfast noodles dressed over a dozen punchy condiments — toasted chili oil, peppercorn, lard, preserved Ya'cai mustard greens, crushed peanuts.",
          "Fresh river fish charcoal-grilled crisp and simmered right at the table inside blistering pickled-pepper, lotus root, and celery broth.",
          "bite-sized crispy chicken nuggets buried beneath mountains of glossy roasted dried red chilies and floral peppercorns ('treasure hunting').",
          "Chewy sweet-potato starch noodles swimming in fiery chili oil, aged black vinegar, roasted soybeans, and pickled cowpeas."
        ]
      },
      heritagesEn: [
        { nameEn: "Dazu Rock Carvings (UNESCO 1999)", significanceEn: ">50,000 Tang–Song cliff sculptures led by Baodingshan's dazzling gilded Thousand-Arm Guanyin fusing Three Teachings." },
        { nameEn: "Wulong Karst National Geology Park (UNESCO)", significanceEn: "Monumental limestone Natural Three Bridges and Asia's deepest sinkholes ('Tiankeng')." },
        { nameEn: "Hechuan Diaoyu City Fortress", significanceEn: "13th-century riverside bastion holding off Mongol armies for 36 years and shifting Eurasian history." },
        { nameEn: "Hongyadong Stilted Complex", significanceEn: "Eleven-story illuminated wooden Bayu stilt complex clinging vertically above Jialing River." },
        { nameEn: "White Emperor City & Qutang Gorge", significanceEn: "Dramatic western portal of the Three Gorges immortalized by Liu Bei's final charge and Li Bai's jubilant poem." }
      ],
      figuresEn: [
        "Warring States Ba general who gave his own head rather than yield three cities, venerated forever for fierce municipal loyalty.",
        "Sole woman commander honored with an official dedicated biography inside the *History of Ming*, leading fearless White-Staff Spear troops.",
        "Patriotic shipping magnate who directed China's 1938 industrial-museum evacuation up the perilous Three Gorges by steamboat."
      ],
      echoEn: { workTitleEn: "Written on a Rainy Night to the North (夜雨寄北)", authorEn: "Li Shangyin (李商隐)", dynastyEn: "Late Tang (9th Century)" },
      commercialEn: {
        historicalGuildEn: "Yu Merchants coordinating Yangtze–Jialing shipping docks of Sichuan salt, medicinal herbs, and tung oil.",
        modernClustersEn: "World laptop manufacturing base, Changan/Seres NEVs, and New International Land-Sea Trade Corridor anchor.",
        hubsAndCorridorsEn: "Direct rail–sea intermodal link down to Qinzhou Port (Beibu Gulf) and international China–Europe Express rail.",
        vietnamAseanLinkEn: "Direct container rail artery ferrying ASEAN tropical fruit and electronics parts up from Hanoi–Nanning."
      },
      stationsEn: [
        "Primary hub for Chengdu (1h15), Xi'an & Wuhan",
        "Southern HSR hub toward Guiyang, Kunming & Guangxi",
        "Express intercity terminal directly feeding Chengdu East"
      ]
    },
    "prov-hebei": {
      typeEn: "Province",
      regionLabelEn: "North China",
      highlightsEn: "Shanhaiguan First Pass of the Great Wall, Chengde Mountain Resort, Eastern Qing Tombs, heroic Yan–Zhao traditions.",
      economyEn: "Industrial ring surrounding Beijing–Tianjin, green hydrogen-steel transition, Xiong'an New Area, and leading pharmaceuticals.",
      landmarkEn: "Chengde Imperial Mountain Resort & Putuo Zongcheng Temple (承德避暑山庄)",
      bestSeasonEn: "June – October (cool alpine Chengde summers & golden Bashang grasslands)",
      cuisineEn: "Baoding Braised Donkey Sandwich (驴肉火烧), Qinhuangdao Seafood, Zhangjiakou Roasted Lamb",
      travelTipEn: "Easily accessible via 1–2 hour day-trip HSR trains directly from Beijing to Chengde Imperial Resort or Shanhaiguan Pass.",
      economyAndIndustryEn: "Heavy-industry backbone surrounding the capital: Tangshan/Handan top global steel output while decarbonizing via green hydrogen; Xiong'an New Area rises as Beijing's eco-smart digital relief hub alongside Great Wall Motors (Baoding) and CSPC Pharma (Shijiazhuang).",
      vietnamConnectivityEn: "Alloy structural steel, pharmaceutical APIs, fertilizers, and farm equipment flow steadily to Vietnam through Tangshan, Qinhuangdao, and Tianjin. Hebei University, Yanshan University, and Hebei University of Technology grant provincial scholarships to Vietnamese engineering majors.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named 'North of the Yellow River'; abbreviated 冀 (Ji) honoring Jizhou — paramount first province among China's legendary Nine Provinces in the *Book of Documents*.",
        capitalCityEn: "Shijiazhuang (石家庄 Shíjiāzhuāng)"
      },
      geoEn: {
        summaryEn: "The sole Chinese province encompassing all five topographic forms simultaneously: Bashang Plateau north, Yanshan and Taihang mountains, foothills, sweeping North China Plain, and Bohai seashore completely ringing Beijing–Tianjin across a four-season dry continental monsoon climate.",
        causalityEn: "Wedged directly between steppe cavalry plains and agrarian Yellow River heartlands made Hebei a 2,500-year military frontier breeding tragic-chivalrous Yan–Zhao heroes like assassin Jing Ke and leaving China's densest concentration of Great Wall passes."
      },
      historicalEvolutionEn: "Divided under Zhou into northern Yan and southern Zhao centered at 3,000-year unchanged Handan; turned Jin–Tang 'Hebei Circuit' and Ming–Qing 'Zhili' ('Directly Ruled Capital Hinterland') prior to adopting the name Hebei in 1928.",
      culturalIdentityEn: "Rectitude and chivalric Yan–Zhao ethos ('Earnest singers of tragic loyalty'), balanced against ancient Han–Tang stele scholarship in Handan–Zhengding and Xiong'an's green smart-city futurism.",
      intangibleHeritageEn: "High-pitched Hebei Bangzi opera, Pingju folk opera, Wuqiao Acrobatics ('Hometown of World Circus'), hand-dyed Yuxian paper-cuts, and Song Ding Ware ivory porcelain.",
      culinaryEn: {
        styleOverviewEn: "Jichai Cuisine synthesizes rich wheat-braised plains classics, Qinhuangdao Bohai seafood, and imperial Manchu–Mongol venison feasts around Chengde.",
        dishesEn: [
          "Crisp layered griddle-baked pastry stuffed warm with herb-braised tender donkey meat and crisp green chili — celebrated in the northern proverb.",
          "Eight ceremonial steamed pork bowls preserving Tang–Song banquet structure at historic Zhengding County.",
          "Precision-scored carp flash-fried so golden meat curls like a shaggy lion's mane, glazed in bright sweet-and-sour sauce.",
          "Whole local chicken brushed with maltose, fried golden, and tenderly simmered in aged eighteen-spice master stock.",
          "Flaky pebble-sized pastry pockets resembling Go board pieces filled with savory minced pork and spring scallions."
        ]
      },
      heritagesEn: [
        { nameEn: "Chengde Mountain Resort & Outlying Temples (UNESCO 1994)", significanceEn: "Largest Qing summer palace (564 ha) blending Southern Jiangnan gardens with Eight Outer Temples including 'Little Potala'." },
        { nameEn: "Shanhaiguan Pass & Laolongtou", significanceEn: "Eastern terminus of the Ming Great Wall plunging straight down into breaking Bohai waves." },
        { nameEn: "Zhengding Longxing Temple (Northern Song)", significanceEn: "Houses China's tallest surviving ancient cast bronze Bodhisattva — a 21.3-meter 971 CE Thousand-Arm Guanyin." },
        { nameEn: "Zhaozhou Anji Stone Bridge (605 CE)", significanceEn: "World's oldest open-spandrel segmental stone arch bridge designed by Sui engineer Li Chun over 1,400 years ago." },
        { nameEn: "Eastern & Western Qing Tombs (UNESCO 2000)", significanceEn: "Imperial fengshui mausoleums of Emperors Kangxi, Qianlong, Yongzheng, and Cixi." }
      ],
      figuresEn: [
        "Founding classical physician from Renqiu who codified TCM's fourfold diagnosis ('Look, Listen, Ask, Feel Pulse').",
        "Foremost Yuan Zaju playwright (*Injustice to Dou E*) born in Qizhou (Anguo), crowning classical Chinese tragic drama.",
        "5th-century mathematician son of Zu Chongzhi who formulated spherical volume principles 1,100 years prior to Cavalieri."
      ],
      echoEn: { workTitleEn: "Viewing the Blue Sea (观沧海 — Qinhuangdao Cliff)", authorEn: "Cao Cao (曹操)", dynastyEn: "Late Eastern Han (207 CE)" },
      commercialEn: {
        historicalGuildEn: "Ji Merchants at Zhangjiakou–Baoding servicing the Great Tea Road caravans across Mongolia into Russia.",
        modernClustersEn: "Green metallurgy (Tangshan), pharma hubs (Shijiazhuang), Xiong'an smart digital new district, and Zhangjiakou wind power.",
        hubsAndCorridorsEn: "Jing-Jin-Ji integration anchored by Huanghua/Qinhuangdao coal-bulk ports and radial HSR arteries.",
        vietnamAseanLinkEn: "Supplies alloy construction steels, transformer hardware, and bulk industrial materials to northern Vietnamese factories."
      },
      stationsEn: [
        "Major Beijing–Guangzhou trunk junction (1h10 south of Beijing West)",
        "Direct Beijing–Shenyang HSR line access to Chengde Mountain Resort (50 min)"
      ]
    },
    "prov-shanxi": {
      typeEn: "Province",
      regionLabelEn: "North China",
      highlightsEn: "Pingyao Ancient City (birthplace of China's first Draft Bank), Yungang Grottoes, Wutai Mountain, oldest timber temples.",
      economyEn: "Thermal coal & clean power pillar, specialty stainless titanium alloys (TISCO), Foxconn electronics & booming ancient-architecture tourism.",
      landmarkEn: "Hanging Temple Clinging to Hengshan Cliffside (恒山金龙峡悬空寺)",
      bestSeasonEn: "May – October (dry crisp weather ideal for Pingyao, Yungang & Ancient Wood Temples)",
      cuisineEn: "Shanxi Knife-Pared Noodles (刀削面), Aged Black Vinegar (老陈醋), Pingyao Cured Beef (平遥牛肉)",
      travelTipEn: "Ride HSR south from Beijing -> Datong -> Pingyao -> Xi'an to tour over 70% of China's surviving Song-or-earlier wooden buildings.",
      economyAndIndustryEn: "Powerhouse of grid energy transitioning toward specialty stainless steel (TISCO), Taiyuan Foxconn electronics, drought-resilient sorghum vinegar, and surging cultural tourism after *Black Myth: Wukong* showcased 27 Shanxi ancient temple sites.",
      vietnamConnectivityEn: "Collaborates in smart mining geology, renewable metallurgy, and architectural preservation via historic Shanxi University (est. 1902) and Taiyuan University of Technology welcoming Vietnamese graduate scholars.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Literally 'West of Taihang Mountain'; abbreviated 晋 (Jin) recalling Spring & Autumn hegemon State of Jin under Duke Wen of Jin.",
        capitalCityEn: "Taiyuan (太原 Tàiyuán)"
      },
      geoEn: {
        summaryEn: "Elevated cleanly atop the eastern Loess Plateau between Taihang Mountains east and Luliang Mountains west ('Two Mountains Framing One River' along the Fenhe valley basins from Datong through Taiyuan to Yuncheng), bordered west and south by the Yellow River bend with dry high-amplitude continental seasons.",
        causalityEn: "Highland aridity inside sealed loess basins created a miraculous natural preservative conserving over 70% of China's surviving Tang–Liao–Song wooden architecture (Nanchan & Foguang Temples). Scarce arable fields drove enterprising natives across Asia as Jin Merchants while alkaline sorghum birthed aged black vinegar and 280 wheat noodle arts."
      },
      historicalEvolutionEn: "Cradle of Yellow River ritual statehood at Taosi (c. 2300–1900 BCE) and legend of Yao–Shun; Tang founding base ('Longxing' Taiyuan under Li Yuan); Ming–Qing climax as Jin Bankers launched Rishengchang Draft Bank (1823, Pingyao), financing imperial trade from Canton to St. Petersburg.",
      culturalIdentityEn: "Distilled by the adage 'Underground treasures see Shaanxi; above-ground ancient buildings see Shanxi.' Upright, frugal, disciplined Sanjin spirit venerating hometown Yuncheng native Guan Yu as patron deity of commercial integrity.",
      intangibleHeritageEn: "Xiaoyi shadow-puppetry, ringing Shanxi Suona horns, multi-year summer-sun & winter-ice fermented Mature Black Vinegar, subterranean Yaodong loess courtyard engineering, and resonant Jin Opera.",
      culinaryEn: {
        styleOverviewEn: "Jincai commands world supremacy in wheat artistry (>280 noodle cuts — 'China holds world noodles; Shanxi holds Chinese noodles') deepened by cellar-aged Mature Vinegar.",
        dishesEn: [
          "Heavy dough block cradled on shoulder as artisans slice arched willow-leaf wheat strips flying directly into boiling cauldrons for rich savory meat toppings.",
          "Beef briskets salt-cured in mineral salt and slow-braised softly into rosy tender slices without tough sinew.",
          "Tender pork loin egg-velveted and flash-fried, wok-tossed crisp with wood-ear fungus, bamboo shoots, scallions, and fragrant aged vinegar.",
          "Nutritious rolled naked-oat flour dough sheets stacked upright like golden honeycombs and steamed to pair with mutton or tomato sauce.",
          "Famed Taiyuan winter morning tonic crafted by Ming physician–calligrapher Fu Shan simmering lamb, astragalus, yam, lotus root, and yellow wine."
        ]
      },
      heritagesEn: [
        { nameEn: "Yungang Grottoes at Datong (UNESCO 2001)", significanceEn: "5th-century Northern Wei sandstone cliffs holding 59,000 Buddhist sculptures fusing Gandharan, Central Asian, and Han poise." },
        { nameEn: "Ancient City of Pingyao & Rishengchang (UNESCO 1997)", significanceEn: "Intact Ming–Qing walled banking metropolis cradling China's earliest national remittance draft bank." },
        { nameEn: "Mount Wutai & Foguang Temple (UNESCO)", significanceEn: "Premier sacred peak of Chinese Buddhism; 857 CE East Hall confirmed Tang timber architecture after Liang Sicheng's historic discovery." },
        { nameEn: "Yingxian Wooden Pagoda (1056 CE)", significanceEn: "World's tallest & oldest pure-mortise wooden pagoda (67.3 m, zero iron nails) withstanding >40 earthquakes across a millennium." },
        { nameEn: "Xuankong Hanging Monastery", significanceEn: "Cliff-cantilevered timber sanctuary enshrining Buddha, Laozi, and Confucius jointly inside a canyon face." }
      ],
      figuresEn: [
        "Renowned general from Jieliang (Yuncheng), canonized across East Asian merchant halls as supreme paragon of Loyalty and Trust.",
        "Northern Song chancellor and master historian from Xiaxian who directed the monumental chronological *Zizhi Tongjian*.",
        "High Tang poet–painter from Qixian founding monochrome ink Southern Landscape ethos ('Poetry holds painting within').",
        "Late-Ming physician, patriot, and wild-script calligrapher from Taiyuan advocating authentic 'clumsy honesty over hollow polish'."
      ],
      echoEn: { workTitleEn: "Ascending Stork Tower (登鹳雀楼 — Yongji Yellow River)", authorEn: "Wang Zhihuan (王之涣)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Jin Merchant Bankers (No. 1 of China's Ten Great Guilds) uniting silver remittance drafts ('Yin-gu' & 'Shen-gu') across Asia.",
        modernClustersEn: "Clean coal power grids, aerospace stainless/titanium alloys (TISCO), electronics manufacturing, and heritage tourism.",
        hubsAndCorridorsEn: "Taiyuan South HSR hub bridging Datong–Xi'an alongside national heavy rail energy freight arteries.",
        vietnamAseanLinkEn: "Historical guild governance case study in equity-partner incentives alongside specialty steel exports."
      },
      stationsEn: [
        "Primary HSR trunk junction (2h30 from Beijing West; 35 min directly to Pingyao Ancient Town)",
        "Datong terminal serving Yungang Grottoes & Mount Heng Hanging Temple"
      ]
    },
    "prov-liaoning": {
      typeEn: "Province",
      regionLabelEn: "Northeast China",
      highlightsEn: "Shenyang Imperial Palace (early Qing capital), Neolithic Hongshan Jade Dragons, ice-free Dalian Harbor.",
      economyEn: "Sole coastal Northeast province: CNC machine tools, nuclear/LNG shipbuilding, metallurgy, and NE Asian maritime trade.",
      landmarkEn: "Shenyang Imperial Palace — Dazheng Hall (沈阳故宫大政殿)",
      bestSeasonEn: "May – June & September – October (crisp harvests, crimson Benxi maples & cool Dalian beaches)",
      cuisineEn: "Lao Bian Stuffed Dumplings (老边饺子), Dalian Cold-Water Seafood, Crisp Sweet-Sour Guobaorou",
      travelTipEn: "Visit Panjin's Crimson Suaeda Salsa Red Beach and Benxi Maple Corridor in October for vivid Northeast autumn color.",
      economyAndIndustryEn: "Heavy-manufacturing hub housing Shenyang CNC machine tools, Ansteel metallurgy, Shenyang AVIC aviation, Dalian LNG/carrier shipyards, SIASUN industrial robotics, and multilingual software BPO in coastal Dalian.",
      vietnamConnectivityEn: "Northeastern University (AI/Automation), Dalian University of Technology, Liaoning University, and Dalian Maritime University educate Vietnamese marine engineering, naval architecture, and automation graduates.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named from the Liaohe River basin paired with the 1929 blessing 'Eternal Peace of Liaohe' (replacing Mukden/Fengtian); retaining 辽 (Liao) as abbreviation.",
        capitalCityEn: "Shenyang (沈阳市 Shěnyáng Shì)"
      },
      geoEn: {
        summaryEn: "Southernmost & sole coastal Northeast province touching both land borders and Yellow/Bohai Seas via Liaodong Peninsula. 'Six parts hill, one water, three fields' slopes into fertile Lower Liao Plain with snowy continental winters (-15 °C in Shenyang) and maritime-tempered Dalian ports.",
        causalityEn: "Guarding Shanhaiguan bottleneck turned Liaoning into modern China's greatest migration funnel ('Braving the Northeast' — tens of millions from Shandong–Hebei) marrying Anshan iron/Fushun coal mining with ice-free Dalian naval ports."
      },
      historicalEvolutionEn: "Flourishing 5,500-year Hongshan Jade civilization; Warring States Yan commanderies; Liao–Jin Eastern Capital before Nurhaci proclaimed Later Jin at Mukden (1625), building Shenyang Palace until crossing Shanhaiguan in 1644; 20th-century industrial dynamo hailed 'Elder Son of the Republic'.",
      culturalIdentityEn: "Blending aristocratic Eight-Banner Manchu palace rituals with jovial straight-shooting Shandong immigrant earthiness and proud master-engineer craftsmanship across Shenyang and Dalian.",
      intangibleHeritageEn: "Twirling-handkerchief Errenzhuang duet comedy, Manchu intricate paper-cutting, Shenyang Pingju opera, and Xiuyan jade carving (one of China's Four Great Jades).",
      culinaryEn: {
        styleOverviewEn: "Liaocai leads Northeastern gastronomy by braiding Manchu–Han imperial banquets, rich Shandong stews, and icy Bohai–Yellow Sea shellfish.",
        dishesEn: [
          "Diplomatic early-1900s creation by Harbin/Liaoning chef Zheng Xingwen: whisper-thin pork tenderloin potato-batter crisp-fried in translucent ginger-vinegar caramel glaze.",
          "1829 Shenyang institution using sautéed pork mince slowly simmered in bone stock before wrapping into plump aromatic dumplings.",
          "Sweet golden cold-water Dalian sea urchin roe whipped gently and steamed into ocean-sweet custards.",
          "Shenyang's beloved nightlife snack grilling, smoking, or glazing whole chicken frames paired cold with local Snow Beer.",
          "Iconic Northeast winter comforter: free-range chicken stewed gently beside wild Changbai hazel mushrooms and springy potato vermicelli."
        ]
      },
      heritagesEn: [
        { nameEn: "Shenyang Imperial Palace (UNESCO 2004)", significanceEn: "China's sole surviving imperial palace outside Beijing marrying octagonal Manchu Eight-Banner Dazheng Hall with Mongol–Han motifs." },
        { nameEn: "Fuling & Zhaoling Qing Tombs", significanceEn: "Early Qing dynastic mausoleums of Nurhaci and Hong Taiji inaugurating Manchurian imperial geomancy." },
        { nameEn: "Marshal Zhang's Mansion Museum", significanceEn: "Eclectic Siheyuan–Romanesque compound preserving early-Republic Northeast political history of Zhang Zuolin & Zhang Xueliang." },
        { nameEn: "Niuheliang Hongshan Culture Site", significanceEn: "5,500-year Goddess Temple and jade-carving ceremonial altar predating Shang civilization." },
        { nameEn: "Jiumenkou Great Wall Water Bridge (UNESCO)", significanceEn: "Unique Great Wall bastion arching directly across nine stone river sluice gates." }
      ],
      figuresEn: [
        "Chieftain who unified Jurchen tribes, founded Later Jin, forged Eight Banners governance, and established Shenyang capital.",
        "The 'Young Marshal' who led the 1928 Northeast Flag Replacement unifying the Republic and the 1936 Xi'an Incident.",
        "Ancestral Liaoyang military lineage archives documenting *Dream of the Red Chamber* author Cao Xueqin's Banner roots."
      ],
      echoEn: { workTitleEn: "Beneath Yanshan & Mukden Palace Dawn", authorEn: "Ming–Qing Liaodong Travellers", dynastyEn: "Ming–Qing Eras" },
      commercialEn: {
        historicalGuildEn: "Shenyang–Yingkou early treaty port guilds trading Northeast soybeans, ginseng, and furs across maritime East Asia.",
        modernClustersEn: "Shenyang CNC industrial machinery, Dalian LNG/carrier shipbuilding, SIASUN robots, and Panjin petrochemicals.",
        hubsAndCorridorsEn: "Ice-free Dalian & Yingkou ports providing Northeast China's direct Pacific deep-water container outlet.",
        vietnamAseanLinkEn: "Supplies precision metalworking machines, robotics tooling, and steel machinery to Vietnamese manufacturing."
      },
      stationsEn: [
        "Northeast trunk hub connecting Beijing (2h45), Changchun & Harbin",
        "Bohai deep-water port city HSR terminal"
      ]
    },
    "prov-jilin": {
      typeEn: "Province",
      regionLabelEn: "Northeast China",
      highlightsEn: "Changbai Heaven Lake crater, Jilin River rime-frost trees, Goguryeo tombs, Yanbian Korean heritage.",
      economyEn: "Cradle of China's auto industry (FAW), CRRC high-speed rail car manufacturing & black-soil maize/ginseng hub.",
      landmarkEn: "Volcanic Heaven Lake on Mount Changbai (长白山火山天池)",
      bestSeasonEn: "July – August (cloud-free Heaven Lake vistas) & January – February (rime-frost trees & powder skiing)",
      cuisineEn: "Changbai Ginseng Steamed Chicken, Yanbian Grilled Beef (延边烤肉), Ice-Cold Buckwheat Noodles (延吉冷面)",
      travelTipEn: "Between Nov–Mar dress strictly for -25 °C thermal windchill and apply warm battery packs behind phones.",
      economyAndIndustryEn: "Built China's very first auto works (FAW Hongqi, 1953) alongside CRRC Changchun producing Fuxing HSR coaches globally, CIOMP precision optics, commercial remote-sensing satellites (*Jilin-1*), and top chernozem corn/rice grain security.",
      vietnamConnectivityEn: "Jilin University (largest comprehensive 985 university noted for automotive engineering, law, and archaeology), Northeast Normal University, and Yanbian University educate Vietnamese automotive, materials, and language specialists.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Derived from Manchu 'Jilin Ula' ('Town Beside the Great Songhua River'); shortened in 1673 to Jilin with auspicious 吉 ('Fortunate') as provincial code.",
        capitalCityEn: "Changchun (长春市 Chángchūn Shì)"
      },
      geoEn: {
        summaryEn: "Central Northeast heartland bordering Russia and DPRK along Tumen and Yalu rivers. Descending northwestward from volcanic Changbai Peaks (Baitou 2,744 m crater Heaven Lake) across the black-soil Songliao Plain to Horqin steppe with dry powdery alpine winters.",
        causalityEn: "Deep organic chernozem black soil produces prized sweet corn and rice while pristine Changbai forests yield China's 'Three Northeast Treasures' (wild ginseng, sable, antler), braided seamlessly with vibrant ethnic Korean heritage along Yanbian valleys."
      },
      historicalEvolutionEn: "Ancient cradle of Buyeo, Goguryeo capitals at Ji'an (3–427 CE), and Tang-era Bohai kingdom; Jin Dynasty Jurchen homeland sealed for two Qing centuries as sacred 'Dragon-Rise Domain' before modern Changchun hosted FAW (1953) and Changchun Film Studio.",
      culturalIdentityEn: "Warm woodland earnestness marrying Changchun's proud automotive-cinema pioneering history with colorful bilingual Korean–Chinese street culture, long-drum dances, and hospitality in Yanbian Autonomous Prefecture.",
      intangibleHeritageEn: "Chagan Lake winter ice-fishing horse-winch ritual, UNESCO Yanbian Korean Farmers' Dance (Nongak), wild Changbai mountain ginseng harvesting lore, and Songhua inkstone carving.",
      culinaryEn: {
        styleOverviewEn: "Harmonizes Manchu royal game–ginseng-mushroom steaming with sweet Songliao black-soil rice and bold fermented Korean chili-pear condiments.",
        dishesEn: [
          "Springy buckwheat noodles floating in icy clarified beef broth topped with crisp kimchi, sliced snow pear, and soft-boiled egg.",
          "Whole mountain chicken steam-distilled in ceramic air-pots alongside five-year wild Fusong ginseng preserving clear sweet elixir.",
          "Traditional Manchu sacrificial winter feast uniting paper-thin simmered pork belly, soft blood sausage, and tangy pickled napa cabbage.",
          "Lush Changbai-pastured marbled Yanbian beef cuts marinated with grated pear and grilled sizzling atop oak embers.",
          "Delicate cloud-white Jilin dessert: sweet red bean paste encased in whipped egg-white meringue puffs fried tenderly until snow-pure."
        ]
      },
      heritagesEn: [
        { nameEn: "Capital Cities & Tombs of Ancient Koguryo (UNESCO 2004)", significanceEn: "Ji'an Wandu Mountain Citadel, 414 CE Gwanggaeto Stele, and stepped granite 'Oriental Pyramid' tombs." },
        { nameEn: "Mount Changbai Heaven Lake Crater", significanceEn: "China's highest crater lake (2,189 m) feeding three mighty rivers — Songhua, Yalu, and Tumen." },
        { nameEn: "Museum of the Imperial Palace of Manchukuo", significanceEn: "Preserved Changchun complex documenting Emperor Puyi's poignant 1932–1945 years." },
        { nameEn: "Jilin Wusong Rime Island", significanceEn: "One of China's Four Meteorological Wonders where ice-free river mist crystallizes over riverbank willows at dawn." },
        { nameEn: "Chagan Lake Winter Ice Fishing", significanceEn: "Liao–Jin thousand-year Mongol net-hauling beneath meter-thick frozen lake ice." }
      ],
      figuresEn: [
        "Distinguished nuclear physicist who founded the Physics Department at Changchun's Jilin University.",
        "Legendary cultural patron who donated national treasures (*Pingfu Tie*, *Outing in Spring*) and served as Jilin Museum deputy curator.",
        "Father of Chinese continental oil-geology whose tectonic theories unlocked giant Songliao petroleum basins."
      ],
      echoEn: { workTitleEn: "Chant of Mount Changbai (长白山吟)", authorEn: "Qing Manchurian Gazetteer Verse", dynastyEn: "Qing Dynasty" },
      commercialEn: {
        historicalGuildEn: "Medicinal ginseng, sable fur, and pine-timber buying syndicates descending the Songhua river corridor.",
        modernClustersEn: "Changchun FAW Hongqi automotive capital, CRRC high-speed rolling stock, precision optics, and ginseng biotech.",
        hubsAndCorridorsEn: "Hunchun cross-border Northeast Asian port alongside the Harbin–Dalian high-speed spine.",
        vietnamAseanLinkEn: "Partners on commercial utility vehicles, farm grain exchanges, and Changbai medicinal botanical extracts."
      },
      stationsEn: [
        "Jilin capital HSR trunk connecting Harbin & Shenyang",
        "New forest HSR gateway straight into North Slope of Changbai"
      ]
    },
    "prov-heilongjiang": {
      typeEn: "Province",
      regionLabelEn: "Northeast China",
      highlightsEn: "Harbin International Ice & Snow World, Russian-styled Central Ave, Jingpo Lake & vast black-soil granaries.",
      economyEn: "China's #1 Wuchang rice granary anchoring national food security, giant hydro/nuclear turbines & Sino–Russian trade.",
      landmarkEn: "Saint Sophia Cathedral in Harbin (哈尔滨圣索菲亚教堂)",
      bestSeasonEn: "December – February (Harbin Ice Festival winter magic) & June – August (22 °C northern cool refuge)",
      cuisineEn: "Sweet-and-Sour Guobaorou Pork (锅包肉), Smoked Harbin Red Sausage, Iron-Pot Goose Stew (铁锅炖)",
      travelTipEn: "Ice & Snow World typically operates late Dec through Feb; wear insulated spike-traction winter boots.",
      economyAndIndustryEn: "Leads China in total grain output (prized Wuchang fragrant rice and non-GMO soybeans), giant hydro/nuclear power turbines (Harbin Electric), Daqing petrochemicals, Harbin Aircraft helicopters, and Sino–Russian border commerce via Suifenhe.",
      vietnamConnectivityEn: "Harbin Institute of Technology (C9 League leader in aerospace, robotics & civil structural engineering), Harbin Engineering University, and Northeast Agricultural University train outstanding Vietnamese aerospace and engineering scholars.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named after the northern border Amur / Heilongjiang ('Black Dragon River' — Manchu *Sahaliyan Ula*), darkened by rich forest humus; abbreviated exclusively 黑 (Hei).",
        capitalCityEn: "Harbin (哈尔滨市 Hā'ěrbīn Shì)"
      },
      geoEn: {
        summaryEn: "China's northernmost and easternmost province (stretching to 53°N Mohe aurora-and-Midnight-Sun Arctic Village). Framed by Greater & Lesser Khingan ranges and Changbai slopes embracing fertile Sanjiang and Songnen black-soil plains, experiencing China's crispest subarctic winter freeze (-20 to -40 °C).",
        causalityEn: "Five-month solid 1.5 m Songhua ice supplied raw quarried crystal blocks turning Harbin into Earth's grandest ice architecture capital, while deep winter freezes slowed organic decay preserving virgin black earth ('Great Northern Granary'). Russian rail history blended Orthodox domes and Dalieba bread seamlessly."
      },
      historicalEvolutionEn: "Sushen–Mohe–Jurchen homeland birthing the Jin Empire (Shangjing Huining capital near Harbin, 1115); Qing Treaty of Nerchinsk (1689); 1898 Chinese Eastern Railway transformed sleepy Songhua villages into cosmopolitan Harbin; post-1949 reclamation mechanized Sanjiang plains beside 1959 Daqing oil discovery.",
      culturalIdentityEn: "Expansive big-hearted frontier generosity matching endless plains, marrying Harbin's UNESCO 'City of Music' Russian–Art Nouveau concert heritage with indigenous Hezhen shamanic salmon-skin fishing artistry.",
      intangibleHeritageEn: "Hezhen Imakan oral epic chanting (UNESCO urgent safeguarding), salmon-skin tailored waterproof robes, fish-scale mosaic painting, and monumental Songhua ice carving.",
      culinaryEn: {
        styleOverviewEn: "Longjiang Cuisine blends generous cast-iron woodstove stews and frigid Ussuri river-fish banquets with Harbin's century-old Russian sausage–rye–borscht heritage.",
        dishesEn: [
          "Century-old Churin-Lidaosi fruitwood-smoked garlic sausages paired cleanly with wood-fired 2.5 kg sourdough rye-malt Dalieba loaves.",
          "Slow-simmered Songnen pasture goose stewed tableside inside mammoth charcoal iron pots ringed along hot rims with golden sweet corn flatbreads.",
          "Festive midwinter gathering boiling crisp fermented cabbage beside bone ribs, tender blood sausage, and velvety garlic-dipped pork belly.",
          "Live Songhua River carp gently braised in Fangzheng fermented bean sauce soaking into firm silky tofu and wide sweet-potato ribbons.",
          "1906 Hotel Modern sweet milk-egg popsicle famously munched outdoors along Central Avenue in -20 °C frost."
        ]
      },
      heritagesEn: [
        { nameEn: "Harbin Central Avenue & Saint Sophia Cathedral (1907)", significanceEn: "Cobblestone 1924 avenue lined with >70 Renaissance, Baroque, and Art Nouveau Russian–European architectural landmarks." },
        { nameEn: "Harbin Ice and Snow World", significanceEn: "Earth's grandest illuminated city sculpted strictly from harvested Songhua River crystal ice." },
        { nameEn: "Wudalianchi Global Geopark (UNESCO)", significanceEn: "Five volcanic lava-dammed lakes preserved from 18th-century eruptions as an open-air volcanic textbook." },
        { nameEn: "Jingpo Lake & Diaoshuilou Falls", significanceEn: "10,000-year lava-barrier mountain lake plunging across spectacular frozen winter cascades." },
        { nameEn: "Mohe Beijicun (Arctic Village 53°33'N)", significanceEn: "China's northernmost settlement beside the Amur showcasing White Nights and occasional aurora displays." }
      ],
      figuresEn: [
        "Dynamic founder of the Great Jin Empire (1115–1234) who united Jurchen clans along Harbin's Ashi River.",
        "Luminous 20th-century woman novelist born in Hulan whose lyrical *Tales of Hulan River* etched northern childhood memory.",
        "Heroic Penang-born Cambridge epidemiologist who halted the 1910–11 Manchurian pneumonic plague inside 4 months and invented early cotton-gauze protective masks."
      ],
      echoEn: { workTitleEn: "Songhua Winter Crossing Verse", authorEn: "Contemporary Northern Chronicles", dynastyEn: "20th Century" },
      commercialEn: {
        historicalGuildEn: "Harbin–Heihe early 20th-century Eurasian rail-border syndicates bridging Manchuria with Siberia.",
        modernClustersEn: "China's #1 Wuchang rice/grain granary, Harbin Electric turbines, helicopters, and Harbin ice tourism.",
        hubsAndCorridorsEn: "Suifenhe & Tongjiang cross-border rail bridges projecting toward Siberia and Eurasian ports.",
        vietnamAseanLinkEn: "Supplies high-capacity hydro/thermal turbine generators paired with temperate-to-tropical agricultural exchange."
      },
      stationsEn: [
        "Primary Fuxing HSR Hub (4h30 from Beijing Chaoyang)",
        "Classic historic downtown station steps from Central Ave & St. Sophia"
      ]
    },
    "prov-jiangsu": {
      typeEn: "Province",
      regionLabelEn: "East China",
      highlightsEn: "Nanjing Six Dynasties & early Ming capital, Suzhou Classical Gardens (UNESCO), Kunqu Opera, Su embroidery, Yixing clay teapots.",
      economyEn: "Top-tier per-capita GDP powerhouse famed for Sunan Model (Suzhou/Kunshan/Wuxi) semiconductors, EV batteries & industrial parks.",
      landmarkEn: "Humble Administrator's Garden, Suzhou (苏州古典园林拙政园)",
      bestSeasonEn: "March – May (spring blossoms over canal gardens) & October – November (Tianping maple reds)",
      cuisineEn: "Nanjing Salted Duck (南京盐水鸭), Suzhou Squirrel Mandarin Fish (松鼠桂鱼), Yangzhou Delicate Fried Rice",
      travelTipEn: "Reserve Nanjing Museum and I.M. Pei's Suzhou Museum free tickets 3–7 days ahead via official WeChat Mini-Programs.",
      economyAndIndustryEn: "Ranks #2 nationally (~12.82T RMB GDP) with remarkable provincial balance — all 13 prefectures sit inside China's Top 100 cities! Powered by Suzhou Industrial Park (China–Singapore), Wuxi wafer OSAT/IoT, Nanjing software/NEVs, and Changzhou global battery giants (CATL/BYD).",
      vietnamConnectivityEn: "Major direct industrial FDI origin into Bac Ninh, Hai Phong, and Binh Duong (PCB fabrication, semiconductors, solar, green textiles). Nanjing ranks #3 in top universities — Nanjing Univ., Southeast Univ. (architectural/6G C9), Nanjing Normal & Suzhou Univ. host vibrant Vietnamese student associations.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Formed in early Qing (1667) by joining the initial characters of elite prefectures Jiangning (Nanjing) and Suzhou; adopting 苏 (Su) for the abundant rice-and-fish Jiangnan waterland.",
        capitalCityEn: "Nanjing (南京市 Nánjīng Shì)"
      },
      geoEn: {
        summaryEn: "Straddling the flat coastal lower reaches of both Yangtze and Huai rivers (China's highest plain percentage >68%), laced across freshwater Lake Taihu, Lake Hongze, and the Beijing–Hangzhou Grand Canal transitioning from northern monsoon (Xuzhou) to humid subtropical Jiangnan (Suzhou).",
        causalityEn: "Cheap canal transport through Grand Canal waterways spurred dense wet-rice cultivation ('When Su–Hu ripen, all under Heaven are fed'), fine mulberry silk weaving, scholarly families producing more Jinshi Optimuses ('Zhuangyuan' — 49 of 114 in Qing!) than any province, and meditative limestone rockery gardens."
      },
      historicalEvolutionEn: "Ancient Wu Kingdom (Sunzi authored *Art of War* near Suzhou) and Xuzhou birthplace of Han founder Liu Bang; preserved central Huaxia refinement as 'Capital of Six Dynasties' (Jiankang/Nanjing post-317 CE), Southern Tang, early Ming capital (Ming Xiaoling), Taiping Heavenly Kingdom, and Republican capital (1927–49).",
      culturalIdentityEn: "Harmonizes four noble cultural streams inside one province: imperial Jinling gravity (Nanjing), poetic lakeside elegance (Suzhou–Wuxi Wu culture), polished salt-merchant opulence (Yangzhou), and robust Han–Chu northern vigor (Xuzhou) united by lifelong devotion to letters.",
      intangibleHeritageEn: "Kunqu Opera ('Mother of a Hundred Operas', UNESCO 2001), Nanjing Cloud Brocade (Yunjin) once reserved for Imperial Dragon Robes, Su double-sided silk embroidery, Yangzhou jade carving, Yixing Zisha purple clay teapots, and Suzhou Pingtan balladry.",
      culinaryEn: {
        styleOverviewEn: "Sucai (Huaiyang–Subang one of China's Eight Cuisines) dazzles with virtuoso knife geometry, light crystal sweetness, and slow-braised melt-in-mouth harmony preserving sculptural poise.",
        dishesEn: [
          "Suzhou Songhelou masterpiece: boneless mandarin fish criss-cross scored inside-out so deep-frying fans fins into a bushy squirrel tail crackling beneath steaming sweet-sour sauce.",
          "Huaiyang delicacy of hand-minced 70% lean / 30% fat pork shaped cleanly into fist-sized meatballs cocooned under cabbage leaves inside whisper-simmering clear chicken broth.",
          "Lean Taihu white duck dry-cured in roasted Sichuan pepper–osmanthus salt and gently poached below boiling to yield ivory skin and fragrant rosy meat.",
          "Single pressed tofu slab sliced horizontally into 30–40 uniform gossamer threads blanched and simmered brightly with shredded chicken, dried shrimp, and bamboo shoots.",
          "Autumnal treasure steamed fresh alongside perilla leaf and ginger revealing firm sweet claw flesh and golden-crimson roe dipped in ginger-infused black vinegar."
        ]
      },
      heritagesEn: [
        { nameEn: "Classical Gardens of Suzhou (UNESCO 1997)", significanceEn: "Humble Administrator's, Lingering, Master of Nets & Canglang Pavilion perfecting 'Borrowed Scenery' spatial illusions." },
        { nameEn: "Ming Xiaoling Mausoleum (Nanjing, UNESCO)", significanceEn: "Tomb of Ming founder Zhu Yuanzhang setting the 500-year Spirit Way precedent for Ming–Qing imperial burial." },
        { nameEn: "Grand Canal — Yangzhou & Suzhou Sections (UNESCO 2014)", significanceEn: "Earth's longest ancient engineered waterway enriching canal-side salt and silk cities." },
        { nameEn: "Sun Yat-sen Mausoleum & Fuzimiao Examination Hall", significanceEn: "Monumental Republican hillside mausoleum paired beside Ming–Qing Jiangnan's largest imperial examination complex." },
        { nameEn: "Slender West Lake & Pingjiang Historic Canal", significanceEn: "Meandering willow-lined imperial lake toured six times by Emperor Qianlong beside intact Tang–Song Suzhou streets." }
      ],
      figuresEn: [
        "Peerless military theorist who authored *The Art of War* outside ancient Suzhou guiding King Helü's Wu state hegemony.",
        "Founding master of Chinese figure painting from Wuxi (*Nymph of the Luo River*) coining 'Conveying Spirit Through Form'.",
        "Universal Song polymath who composed his scientific encyclopedia *Dream Pool Essays* in quiet retirement at Zhenjiang.",
        "Literary titans of Huai'an & Xinghua authoring *Journey to the West* and *Water Margin* among China's Four Great Novels."
      ],
      echoEn: { workTitleEn: "Night Mooring at Maple Bridge (枫桥夜泊 — Suzhou)", authorEn: "Zhang Ji (张继)", dynastyEn: "Mid-Tang (~756 CE)" },
      commercialEn: {
        historicalGuildEn: "Dongting Lake bankers (Suzhou), Yangzhou Salt Monopolists & Wuxi grain-silk fleet owners anchoring Jiangnan wealth.",
        modernClustersEn: "Advanced manufacturing giant: Suzhou Industrial Park, Wuxi semiconductors, Changzhou NEV batteries, Nanjing software.",
        hubsAndCorridorsEn: "Direct Beijing–Shanghai High-Speed corridor linking Nanjing, Wuxi, Suzhou with Yangshan global shipping.",
        vietnamAseanLinkEn: "Key industrial FDI supplier establishing precision PCBs, green textiles, and solar assembly lines across northern Vietnam."
      },
      stationsEn: [
        "East China's busiest 4-way HSR crossroads (65 min to Shanghai)",
        "Downtown ancient-city station just 1.5 km from Humble Administrator's Garden"
      ]
    },
    "prov-zhejiang": {
      typeEn: "Province",
      regionLabelEn: "East China",
      highlightsEn: "Hangzhou West Lake (UNESCO), 5,000-year Liangzhu City, Lu Xun's Shaoxing, Mount Putuo, Ningbo's 1561 Tianyi Pavilion.",
      economyEn: "Pioneer of private enterprise ('Zheshang'), Alibaba digital commerce, DeepSeek AI, Yiwu world market & Ningbo–Zhoushan Port.",
      landmarkEn: "Three Pools Mirroring the Moon, West Lake Hangzhou (杭州西湖)",
      bestSeasonEn: "March – May (Spring Longjing tea harvest) & September – November (golden sweet osmanthus blooms around West Lake)",
      cuisineEn: "West Lake Vinegar Fish (西湖醋鱼), Dongpo Braised Pork (东坡肉), Longjing Tea Shrimp, Beggar's Clay Chicken",
      travelTipEn: "Combine Hangzhou, Wuzhen/Xitang water towns, and Shaoxing seamlessly on quick 30-minute HSR hops.",
      economyAndIndustryEn: "Ranks #4 nationally (~8.25T RMB GDP) leading China's private entrepreneurial vigor: Hangzhou houses Alibaba, Ant Group, Geely, Hikvision, Unitree Robotics & DeepSeek AI; Yiwu runs the world's largest small-commodity wholesale emporium; Ningbo–Zhoushan Port ranks #1 globally in total cargo tonnage.",
      vietnamConnectivityEn: "Primary wholesale sourcing origin via Yiwu International Trade City, Keqiao textiles, Wenzhou light manufacturing, and Ningbo maritime freight into Vietnam. Zhejiang University (top C9), China Academy of Art (Hangzhou), and Ningbo University train high-caliber Vietnamese scholars.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named from 'Zhe River' (Qiantang River), where 折 (Zhe) literally means 'zig-zag bend' matching its sinuous mountain valleys toward Hangzhou Bay.",
        capitalCityEn: "Hangzhou (杭州市 Hángzhōu Shì)"
      },
      geoEn: {
        summaryEn: "Anchoring the southern Yangtze Delta wing on China's third topographic step: 'Seven parts mountain, one water, two parts fields' curving southward down thousands of coastal islands (Zhoushan Archipelago) while funnel-shaped Hangzhou Bay sparks thunderous Qiantang tidal bores inside misty subtropical hills.",
        causalityEn: "Dense populations squeezed inside 70% rocky terrain forced Wenzhou, Yiwu, and Ningbo villagers since Southern Song to scatter across oceans as shrewd merchants ('Wenzhou Swallows'). Meanwhile misty lakeside hills bred Imperial Longjing green tea and lyrical Song landscape Zen calm."
      },
      historicalEvolutionEn: "Cradled earliest Hemudu wetland rice farming (5000–3300 BCE) and urban Liangzhu jade civilization (3300–2300 BCE); Yue King Goujian's Spring & Autumn grit; Song golden zenith as Southern Song capital Lin'an (Hangzhou) hailed by Marco Polo as 'Heaven's City on Earth'; Ming Eastern Zhejiang School under Wang Yangming and Huang Zongxi.",
      culturalIdentityEn: "Marries serene 'Poetry & Painting of Jiangnan' lakeside refinement ('Heaven above; Suzhou and Hangzhou below') seamlessly with fearless grass-roots 'Four-Thousand-Spirit' Zheshang grit turning micro-workshops into global platforms.",
      intangibleHeritageEn: "Artisanal West Lake Longjing green tea panning, UNESCO Hangzhou sericulture silk weaving, UNESCO Longquan celadon porcelain, lyrical Shaoxing Yueju opera, Qingtian soapstone carving, and Dongyang wood relief.",
      culinaryEn: {
        styleOverviewEn: "Zhecai (Hangzhou–Ningbo–Shaoxing–Wenzhou branches) prizes crisp freshness, supple tenderness, delicate clean fragrances, zero heavy grease, and pure seasonal essence.",
        dishesEn: [
          "Grass carp fasted two days in clean lake water, butterflied cleanly, gently poached crisp-tender under glossy caramelized rice-vinegar ginger glaze.",
          "Su Shi's square-cut pork belly bound with straw string and slow-simmered solely inside aged Shaoxing yellow wine till trembling like ruby jade.",
          "Sweet spring freshwater river shrimp flash-tossed pale white beside newly picked misty West Lake Dragon-Well green tea buds.",
          "Whole spiced chicken stuffed with wild mushrooms and lotus wrapped gently in lotus leaves, sealed in Shaoxing-wine mud clay and baked slowly.",
          "China's benchmark golden-amber glutinous rice and鉴湖 spring-water wine buried for decades, sipped warm beside spiced anise broad beans."
        ]
      },
      heritagesEn: [
        { nameEn: "West Lake Cultural Landscape of Hangzhou (UNESCO 2011)", significanceEn: "Poetic causeways of Su Dongpo and Bai Juyi shaping landscape garden aesthetics across East Asia for 1,000 years." },
        { nameEn: "Archaeological Ruins of Liangzhu City (UNESCO 2019)", significanceEn: "5,000-year hydraulic city proving complex Bronze-less Neolithic jade-ritual urban statehood." },
        { nameEn: "Tianyi Pavilion Library (Ningbo, 1561)", significanceEn: "Asia's oldest continuously preserved private rare-book library housing Ming woodblock gazetteers for 460 years." },
        { nameEn: "Wuzhen & Xitang Water Towns", significanceEn: "1,300-year stilted Ming–Qing canal architecture hosting the modern World Internet Conference." },
        { nameEn: "Mount Putuo Sea-Sky Buddhist Kingdom", significanceEn: "One of China's Four Sacred Buddhist Peaks devoted to Bodhisattva Guanyin amid Zhoushan islands." }
      ],
      figuresEn: [
        "Supreme sage of Chinese calligraphy who composed *Lantingji Xu* — peerless Running Script pinnacle — at Shaoxing's Orchid Pavilion.",
        "Transcendent Ming philosopher born in Yuyao founding Philosophy of Mind ('Unity of Knowledge and Action').",
        "Founding father of modern Chinese literature born in Shaoxing (*The True Story of Ah Q*, *Diary of a Madman*)."
      ],
      echoEn: { workTitleEn: "Drinking by the Lake in Sunshine and Rain (饮湖上初晴后雨 — West Lake)", authorEn: "Su Shi (苏轼)", dynastyEn: "Northern Song (1073 CE)" },
      commercialEn: {
        historicalGuildEn: "Ningbo Maritime Bankers, resilient Wenzhou Entrepreneurs ('Eastern Merchants') & Longyou Traders across late imperial ports.",
        modernClustersEn: "China's #1 Private & Digital Economy capital: Alibaba, DeepSeek AI (Hangzhou), Geely EVs, and Yiwu World Emporium.",
        hubsAndCorridorsEn: "Ningbo–Zhoushan Port (Global #1 by cargo tonnage) paired with Yiwu–Madrid Yixin'ou rail freight.",
        vietnamAseanLinkEn: "Primary cross-border e-commerce supply market (Yiwu wholesale & Hangzhou platforms) plus Wenzhou textile–machinery investment."
      },
      stationsEn: [
        "Mega HSR gateway reaching Shanghai (45m), Ningbo (45m) & Yiwu (32m)",
        "Direct HSR portal to Yiwu International Trade City"
      ]
    },
    "prov-anhui": {
      typeEn: "Province",
      regionLabelEn: "East China",
      highlightsEn: "Mount Huangshan, Hongcun & Xidi Huizhou black-tile white-wall villages, Huishang guilds, Four Treasures (Xuan paper & Hui ink).",
      economyEn: "Hefei rising as national powerhouse in quantum computing, OLED displays (BOE), DRAM memory & NEVs (NIO, BYD, Chery).",
      landmarkEn: "Yellow Mountain Sea of Clouds & Guest-Greeting Pine (黄山云海与迎客松)",
      bestSeasonEn: "April – May & September – November (sunrise sea of clouds over Huangshan & crimson autumn foliage at Tachuan)",
      cuisineEn: "Huizhou Stinky Mandarin Fish (臭鳜鱼), Fuzzy Fermented Mao Tofu (毛豆腐), Luzhou Roast Duck",
      travelTipEn: "Sleep one night atop Huangshan near Bright Summit for cloud-sea sunrise before descending cleanly down to Hongcun Village.",
      economyAndIndustryEn: "Celebrated for the 'Hefei Model' of venture-backed state manufacturing: national leader in OLED panels (BOE), memory DRAM (CXMT), NEVs (NIO, BYD, VW Anhui, Wuhu Chery), USTC quantum computing, and EAST nuclear fusion research.",
      vietnamConnectivityEn: "University of Science and Technology of China (USTC — C9 elite in physics/quantum/AI), Hefei University of Technology, and Anhui University host Vietnamese STEM scholars while Wuhu automaker Chery/Omoda expands assembly partnerships in Vietnam.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Combined in 1667 from major prefectures Anqing and Huizhou; abbreviated 皖 (Wan) honoring ancient Spring–Autumn State of Wan and Mount Tianzhu ('Wan Mountain').",
        capitalCityEn: "Hefei (合肥市 Héféi Shì)"
      },
      geoEn: {
        summaryEn: "Inland East China sliced across by Huai and Yangtze rivers into three distinct landscapes: flat Huaibei wheat plains, central Chaohu basin (one of China's Five Great Freshwater Lakes), and misty southern granite massifs of Mount Huangshan and Mount Jiuhua spanning northern monsoon and southern subtropical zones.",
        causalityEn: "Because the Qinling–Huaihe climate line cuts directly across Anhui, northern plains carry candid wheat-eating directness whereas cramped 70%-mountain southern Huizhou drove teens outward at age thirteen ('Huishang Merchants') while cool mountain mists nurtured Mao Feng tea and Wingceltis bark Xuan paper."
      },
      historicalEvolutionEn: "North Anhui birthed Daoist masters Laozi & Zhuangzi; final Chu capital Shouchun (241–223 BCE); Three Kingdoms battleground at Hefei–Xiaoyao Ford; 400-year Ming–Qing commercial dominance by Huishang guilds building horse-head gable towns; and 1978 Xiaogang Village secret farm-contract pact igniting Reform & Opening.",
      culturalIdentityEn: "Three distinct rivers of soul — Huai River Daoism & Jian'an prose, Wanjiang Tongcheng classical prose lineage, and Huizhou Studies (preserved beside Dunhuang and Tibetology as China's 'Three Great Regional Archives') upholding 'Confucian morals inside merchant ledgers'.",
      intangibleHeritageEn: "Artisanal Studio Four Treasures (108-step Jingxian 'Thousand-Year' Xuan Paper, pine-soot Hui Ink, She Inkstones), sweet crisp Huangmei Opera, and Huizhou Three Carvings (wood, brick, stone).",
      culinaryEn: {
        styleOverviewEn: "Huicai ranks among China's Eight Cuisines uniting wild mountain shoots, stone-ear mushrooms, and cured hams via skillful high-heat oil-searing and heavy covered braising.",
        dishesEn: [
          "Huizhou signature: mild-salted mandarin fish lightly barrel-fermented beneath pine blocks creating crisp garlic-clove white flakes braised richly fragrant.",
          "Tofu blocks cultured to grow silky harmless white mycelia and pan-fried golden crisp in fragrant rapeseed oil with fiery chili paste.",
          "Opulent Hefei banquet medley named after Viceroy Li Hongzhang simmering sea cucumber, abalone, Jinhua ham, bamboo, and quail eggs.",
          "Wild mountain squab gently clay-steamed whole alongside wild Huangshan yam and goji berries yielding crystalline mountain nectar.",
          "Springy narrow noodles served inside rich bone broth scattered abundantly with fragrant toasted Yangtze river shrimp roe."
        ]
      },
      heritagesEn: [
        { nameEn: "Mount Huangshan (UNESCO Mixed Heritage 1990)", significanceEn: "Crowning Chinese landscape ideal ('Returning from Huangshan, no other peak seems worthwhile') famed for sculpted pines, granite needles, cloud seas, and hot springs." },
        { nameEn: "Ancient Villages in Southern Anhui — Xidi & Hongcun (UNESCO 2000)", significanceEn: "Iconic black-and-white Huizhou horse-head walls wrapped around Hongcun's ingenious 800-year ox-shaped gravity waterway." },
        { nameEn: "Mount Jiuhua", significanceEn: "One of China's Four Sacred Buddhist Peaks honoring Bodhisattva Ksitigarbha and Silla monk Kim Qiaojue." },
        { nameEn: "Ming Middle Capital Ruins (Fengyang)", significanceEn: "Zhu Yuanzhang's inaugural palatial blueprint directly inspiring Nanjing and Beijing Forbidden Cities." },
        { nameEn: "Anhui Museum & Sanhe Ancient Town", significanceEn: "Preserves the colossal Warring States Chu Great Cauldron alongside classic waterfront Hui architecture." }
      ],
      figuresEn: [
        "Founding sages of Philosophical Daoism (*Dao De Jing* and *Nanhua Classic*) rooted across northern Anhui's Bozhou–Mengcheng.",
        "Three Kingdoms strategist-poet Cao Cao and pioneering surgical anesthetic physician Hua Tuo both natives of Qiao (Bozhou).",
        "Incorruptible Northern Song Prefect Justice Bao from Luzhou (Hefei), immortalized across East Asia as fairness incarnate.",
        "Great Song–Ming Neo-Confucian synthesizer Zhu Xi tracing deep ancestral and intellectual lineage to Huizhou."
      ],
      echoEn: { workTitleEn: "Gazing at Heaven's Gate Mountain (望天门山 — Wuhu)", authorEn: "Li Bai (李白)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Huishang (Huizhou Merchants of Shexian) controlling Lianghuai salt licenses, Qimen black tea, Hui ink & Xuan paper.",
        modernClustersEn: "Hefei EV & Display Capital (NIO, BYD, Chery Wuhu, BOE OLEDs, iFLYTEK AI, CXMT chips) via public venture partnerships.",
        hubsAndCorridorsEn: "Huai–Yangtze inland waterways linked with rapid Hefei–Nanjing–Shanghai high-speed rail corridors.",
        vietnamAseanLinkEn: "Chery/Omoda passenger vehicles, flat display components, and classic calligraphy Four Treasures exports."
      },
      stationsEn: [
        "High-speed hub bridging Shanghai (1h50) down to Huangshan North (1h25)",
        "Mountain gateway with shuttle buses directly reaching Huangshan trailheads & Hongcun"
      ]
    },
    "prov-fujian": {
      typeEn: "Province",
      regionLabelEn: "South / Southeast China",
      highlightsEn: "Fujian Hakka Tulou earthen castles (UNESCO), Wuyi Mountain Dahongpao oolong, ancient Quanzhou maritime emporium, Gulangyu Island, Mazu Sea Goddess faith.",
      economyEn: "World #1 EV battery powerhouse CATL (Ningde), national athletic footwear hub (Anta, Xtep, 361°), Fuyao auto glass & cross-strait shipping.",
      landmarkEn: "Chengqi Tulou Earthen Compound, Fujian (福建客家土楼承启楼)",
      bestSeasonEn: "April – June & October – December (mild Minnan coastline & spring Wuyi tea picks)",
      cuisineEn: "Buddha Jumps Over the Wall (佛跳墙), Oyster Omelet (海蛎煎), Quanzhou Vermicelli & Wuyi Oolong",
      travelTipEn: "Pre-book Xiamen Gulangyu Island ferry tickets via the Xiamen Port Alipay Mini-Program; keep your outbound pass for return sailing.",
      economyAndIndustryEn: "Global #1 in EV power batteries through Ningde-based CATL; China's sports footwear capital across Jinjiang–Quanzhou (Anta, Xtep, Peak); Fuyao automotive glass; deepwater Xiamen–Fuzhou ports; and Dehua Blanc-de-Chine ceramics.",
      vietnamConnectivityEn: "Centuries of deep maritime bonds between Minnan–Hakka families and Hoi An, Pho Hien, and Saigon–Cholon (Thien Hau pagodas & Fujian Assembly Halls). Direct Xiamen–Hanoi/HCMC flights & container feeders pair alongside Xiamen University (top marine sciences/economics C985) and Fuzhou University.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Combined in 733 CE from Tang prefectures Fuzhou and Jianzhou; abbreviated 闽 (Min — gate 门 enclosing serpent 虫) echoing indigenous Minyue Baiyue totemic heritage.",
        capitalCityEn: "Fuzhou (福州市 Fúzhōu Shì)"
      },
      geoEn: {
        summaryEn: "Southeast coast facing Taiwan Strait across China's third topographic step: 'Eight parts mountain, one water, one farm' dominated by misty Wuyi ridges feeding deep-water bays at Quanzhou, Xiamen, and Sandu'ao with warm damp subtropical breezes and autumn typhoons.",
        causalityEn: "Steep mountain barriers isolated adjacent valleys into mutually unintelligible tongues (Hokkien/Minnan, Mindong, Hakka) while scarce farmland pushed 'Eight-Min Seafarers' outward to Nanyang oceans. Defensive valleys also birthed multi-story communal Hakka earth forts ('Tulou') and misty Wuyi/Anxi oolongs."
      },
      historicalEvolutionEn: "Warring States–Han Minyue Kingdom; two major Jin–Tang northern Clan Migrations ('Eight Surnames Enter Min') preserving archaic northern phonology in Hokkien; Song–Yuan global trade capital Quanzhou ('Zaytun'); early-Qing Koxinga expedition; and vast 19th–20th c. Southeast Asian Chinese diaspora.",
      culturalIdentityEn: "Maritime 'Bamin' bold enterprise marrying tight ancestral lineage halls and Tulou clan solidarity with oceanic risk-taking ('Love striving to win' 爱拼才会赢) safeguarded everywhere by sea protector Tianhou Mazu of Meizhou Island.",
      intangibleHeritageEn: "UNESCO Meizhou Mazu Rituals, Wuyi Rock Oolong & Anxi Tieguanyin crafting alongside Fuding White Tea, Dehua 'Blanc de Chine' porcelain, Quanzhou string marionettes, and Fuzhou timber relief carving.",
      culinaryEn: {
        styleOverviewEn: "Mincai ranks among China's Eight Cuisines celebrated for refined clear broths, fresh ocean shellfish, gentle red-yeast-rice sweetness ('Hongzao'), and ancient fermented fish sauce.",
        dishesEn: [
          "Summit Qing court-lineage stew slowly simmering >20 land-and-sea delicacies (abalone, sea cucumber, dry scallops, ham, matsutake) inside Shaoxing-sealed earthen jars.",
          "Beloved Xiamen/Minnan noodle bowl steeped in aromatic toasted-peanut, dried shrimp, and flounder-enriched satay broth alongside shrimp, squid, and tofu.",
          "Scored pork tenderloin marinated in red rice lees and crisped into rosy 'lychee' spheres flash-glazed in sweet-sour aged vinegar.",
          "Bouncy snowy eel–shark fishballs housing juicy ginger-scallion minced pork centers burst upon first bite.",
          "Plump fresh Minnan sea oysters fold-seared in springy sweet-potato starch batter, whisked eggs, and crisp garlic chives."
        ]
      },
      heritagesEn: [
        { nameEn: "Quanzhou: Emporium of the World in Song–Yuan China (UNESCO 2021)", significanceEn: "22 linked Song–Yuan port ruins spanning Kaiyuan Twin Pagodas, 1009 Qingjing Mosque, Houzhu shipwreck berth, and Luoyang Bridge." },
        { nameEn: "Fujian Tulou Earthen Complexes (UNESCO 2008)", significanceEn: "46 fortress-like circular and square rammed-earth clan communes sheltering hundreds sustainably against wind, bandits, and quakes." },
        { nameEn: "Mount Wuyi Scenic District (UNESCO Mixed)", significanceEn: "Danxia Nine-Bend Gorge cliffs where Zhu Xi taught for 50 years and cradle of Lapsang Souchong & Da Hong Pao teas." },
        { nameEn: "Gulangyu Historic International Settlement (UNESCO 2017)", significanceEn: "Pedestrian island off Xiamen preserving ~1,000 Sino–European villas and China's richest antique piano collections." },
        { nameEn: "Sanfang Qixiang Historic Quarter (Fuzhou)", significanceEn: "Tang–Song grid preserving >200 saddle-wall courtyard mansions of Lin Zexu and Yan Fu." }
      ],
      figuresEn: [
        "Innovative Northern Song *Ci* poet from Wuyishan whose tender vernacular songs resonated 'wherever well-water was drawn'.",
        "Integrity-driven Qing official from Houguan (Fuzhou) who destroyed confiscated opium at Humen (1839) and translated Western gazetteers.",
        "Brilliant modern number theorist from Fuzhou (Xiamen Univ. alum) shaking global mathematics with his '1+2' theorem toward Goldbach's Conjecture.",
        "Philanthropic Southeast Asian diaspora patriot from Jimei (Xiamen) founding Xiamen University with his commercial fortune."
      ],
      echoEn: { workTitleEn: "Quanzhou Coral Blossoms & Wuyi Mountain Pond Reflection", authorEn: "Zhu Xi (朱熹) at Wuyishan", dynastyEn: "Southern Song" },
      commercialEn: {
        historicalGuildEn: "Min Merchants dominating Quanzhou Zaytun & Moon Port Maritime Super-Emporia across Southeast Asia and Japan.",
        modernClustersEn: "Global EV battery leader CATL (Ningde), Jinjiang athletic sportswear cluster (Anta, Xtep), and Dehua white porcelain.",
        hubsAndCorridorsEn: "Deepwater Xiamen, Quanzhou & Sandu'ao container ports bordering direct Taiwan Strait sea lanes.",
        vietnamAseanLinkEn: "Historical sisterhood with Hoi An & Saigon Fujian Guilds beside modern garment, footwear, and EV battery materials trade."
      },
      stationsEn: [
        "Provincial capital terminal near historic Three Lanes & Seven Alleys",
        "Coastal HSR spine linking Xiamen, Quanzhou & Wuyi Mountains"
      ]
    },
    "prov-jiangxi": {
      typeEn: "Province",
      regionLabelEn: "East / Central China",
      highlightsEn: "Thousand-year Porcelain Capital Jingdezhen, Tengwang Pavilion, Mount Lu, White Deer Grotto Academy (Zhu Xi).",
      economyEn: "Top copper smelting & rare-earth reserves (Ganzhou), Yichun lithium battery materials hub, aviation & high art ceramics.",
      landmarkEn: "Wuyuan Jiangling Rape-Blossom Terraces & Huizhou Hamlets (婺源江岭梯田)",
      bestSeasonEn: "March – April (golden rapeseed blooms) & October – November (autumn crop sun-drying at Huangling)",
      cuisineEn: "Nanchang Stirred Rice Noodles (拌粉), Clay-Pot Medicinal Broth (瓦罐汤), Mount Lu Stewed Chicken",
      travelTipEn: "Visit Jingdezhen's weekend artisan pottery markets inside the Sculpture Factory & Sanbao Ceramic Village.",
      economyAndIndustryEn: "National powerhouse in copper refining (Yingtan–Shangrao) paired with Yichun ('Lithium Capital of Asia' feeding CATL/BYD/Gotion), Ganzhou rare earths, Nanchang helicopters/aviation, and Jingdezhen's multi-billion creative porcelain ecosystem.",
      vietnamConnectivityEn: "Cobalt-blue porcelain masters at Jingdezhen mirror deep 15th-century technical exchanges with Chu Dau and Bat Trang kilns in Vietnam. Lithium/rare-earth solar inputs support renewables while Jingdezhen Ceramic University (China's sole dedicated ceramics university) and Nanchang Univ. welcome international artists.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Abbreviated from Tang Xuanzong's 'Jiangnan West Circuit' (733 CE); taking single character 赣 (Gan) from the maternal Gan River surging north into Lake Poyang.",
        capitalCityEn: "Nanchang (南昌市 Nánchāng Shì)"
      },
      geoEn: {
        summaryEn: "Ringed on three sides by Mount Lu–Mufu north, Wuyi east, and Luoxiao–Jinggang–Nanling ridges opening northward like a shallow bowl into Poyang Lake — China's largest natural freshwater basin — soaking under spring–summer subtropical rains.",
        causalityEn: "A natural river basin funneling the Meiguan Pass corridor straight up Gan River and Poyang Lake into the Yangtze turned Jiangxi for a millennium into China's paramount north–south highway, while white Kaolin clay paired with boundless pine fuel birthed Jingdezhen and secluded cliffs sheltered Chan monasteries and neo-Confucian academies."
      },
      historicalEvolutionEn: "Border of Wu and Chu ('Wu's Head, Chu's Tail'); Han fortress Nanchang (202 BCE); Tang–Song literary renaissance contributing 3 of 8 Great Tang–Song Masters (Ouyang Xiu, Zeng Gong, Wang Anshi) plus Tao Yuanming & Huang Tingjian; 300-year Ming–Qing Jiangyou guild dominance; and early 20th-c. revolutionary cradle (Nanchang/Jinggangshan).",
      culturalIdentityEn: "Gan–Po identity prized as 'Land of Literature and Moral Integrity' uniting White Deer Grotto scholarly rigor, principled poetic independence, quiet precision across 72 kiln steps in Jingdezhen, and Zhengyi Daoist–Pure Land Chan spirituality.",
      intangibleHeritageEn: "Manual 72-step Jingdezhen imperial porcelain artistry, Yanshan hand-dipped bamboo paper, ancient Han-lineage Nanfeng Nuo mask exorcism dances, and Mount Lu Cloud-Mist tea.",
      culinaryEn: {
        styleOverviewEn: "Gancai abides by 'Without chili crisp, Jiangxi finds no joy', rivaling Sichuan–Hunan spice heat yet mellowed distinctly by fragrant slow earthen-crock soups around Poyang Lake.",
        dishesEn: [
          "Classic Nanchang morning pairing: springy soaked rice noodles dressed in lard, crisp salted radish, and dark chili oil beside 4-hour charcoal earthenware medicinal rib-herb broth.",
          "Authentic Ningdu original Three-Cup Chicken braised completely waterless using purely equal cups of camellia oil, sweet soy sauce, and rice wine.",
          "Pingxiang specialty flash-frying tender farm duck over blazing ginger-chili heat before glazing fresh blood-wine emulsion off the stove.",
          "Delicate crystal-clear toothless Poyang silverfish gently steamed atop beaten eggs or crisp-fried golden.",
          "Wild Jinggang mountain bamboo shoots wood-smoked over alpine branches and wok-tossed savory with crisp pork belly and green peppers."
        ]
      },
      heritagesEn: [
        { nameEn: "Lushan National Park & White Deer Grotto (UNESCO 1996)", significanceEn: "Mystic cloud peaks immortalized by Su Shi plus China's foremost ancient Confucian academy shaped by Zhu Xi's rules." },
        { nameEn: "Jingdezhen Imperial Kiln & Living Porcelain Heritage", significanceEn: "Millennial World Porcelain Capital refining Blue-and-White, Doucai, and Pastel enamels for courts and maritime empires." },
        { nameEn: "Tengwang Pavilion Above the Gan River", significanceEn: "One of Three Great Jiangnan Towers crowned eternally by boy-prodigy Wang Bo's 675 CE Preface." },
        { nameEn: "Mount Sanqing & Mount Longhu (UNESCO)", significanceEn: "Sculpted granite spires paired with Celestial Master Zhang's Orthodox Unity Daoist ancestral seat." },
        { nameEn: "Wuyuan Huangling Courtyard Rooftops", significanceEn: "Picturesque Hui-styled hamlets drying glowing crimson chilies and golden maize across bamboo trays in autumn." }
      ],
      figuresEn: [
        "Immortal Jin-era pastoral poet from Jiujiang refusing to 'bend his waist for five pecks of grain' (*Peach Blossom Spring*).",
        "Literary reform titans Ouyang Xiu & Wang Anshi ascending straight from Ji'an and Fuzhou among the Eight Tang–Song Masters.",
        "Brilliant Ming dramatist of Linchuan (passing away in 1616 like Shakespeare) authoring *The Peony Pavilion*.",
        "Late-Ming scientist-encyclopedist of Fengxin compiling China's premier premodern engineering compendium *Tiangong Kaiwu* (1637)."
      ],
      echoEn: { workTitleEn: "Preface to Pavilion of Prince Teng (滕王阁序 — Nanchang)", authorEn: "Wang Bo (王勃)", dynastyEn: "Early Tang (675 CE)" },
      commercialEn: {
        historicalGuildEn: "Jiangyou Guild (Ming–Qing 'No town succeeds without Jiangyou') trading Jingdezhen porcelain, tea, timber, and rare books nationwide.",
        modernClustersEn: "Jingdezhen high-end ceramic design, Yichun Asia Lithium Capital (CATL/BYD supplies), Ganzhou rare earths, and helicopters.",
        hubsAndCorridorsEn: "Beijing–Kowloon HSR spine intersecting Yangtze Jiujiang port linking Central and coastal provinces cleanly.",
        vietnamAseanLinkEn: "Historical ceramic dialogue with Chu Dau–Bat Trang blue-and-white beside clean-energy rare-earth materials."
      },
      stationsEn: [
        "Capital terminal near Haihunhou Marquis Museum & Tengwang Pavilion",
        "15-minute gateway straight into Imperial Kiln Museum & Taoxichuan Art Quarter"
      ]
    },
    "prov-shandong": {
      typeEn: "Province",
      regionLabelEn: "East / North China",
      highlightsEn: "Home of Confucius & Mencius (Qufu), Mount Tai Supreme Peak, Qilu culture, Jinan's springs, coastal Qingdao.",
      economyEn: "China's #3 province by industrial–farm strength: Haier, Hisense, Tsingtao Brewery, Port of Qingdao & Shouguang greenhouse exports.",
      landmarkEn: "Jade Emperor Summit of Eastern Sacred Mount Tai (东岳泰山玉皇顶)",
      bestSeasonEn: "April – May & September – October (clear dawn climbs up Mount Tai & breezy Qingdao beer coastline)",
      cuisineEn: "Braised Sea Cucumber with Scallions (葱烧海参), Yellow River Sweet-Sour Carp, Qingdao Draft Beer & Grilled Squid",
      travelTipEn: "To greet Mount Tai sunrise cleanly, pair Zhongtianmen cableway with South Heaven Gate stairs or attempt crisp night climbs.",
      economyAndIndustryEn: "Third-largest provincial GDP (~9.21T RMB) dominating northern agribusiness (Shouguang greenhouses, Yantai apples), smart appliances (Haier/Hisense at Qingdao), heavy diesel/trucks (Weichai/Sinotruk Jinan), marine engineering, and deep-water Qingdao Port.",
      vietnamConnectivityEn: "Haier/Hisense electronics, Sinotruk/Weichai commercial trucks, and temperate apples move steadily into Vietnam via Qingdao–Hai Phong lines. Shandong University (top C985 in classical Chinese philosophy), Ocean Univ. (OUC), and China Univ. of Petroleum recruit strong Vietnamese cohorts.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Literally 'East of Taihang Mountain' coined under Jin–Yuan; abbreviated 鲁 (Lu) honoring ancient Duke of Zhou's State of Lu at Qufu — birthplace of Confucius.",
        capitalCityEn: "Jinan (济南市 Jǐnán Shì — 'City of 72 Artesian Springs')"
      },
      geoEn: {
        summaryEn: "Dual balanced terrain anchoring eastern North China Plain: ancient granite Mount Tai (1,545 m) plus Shandong Peninsula jutting neatly between Bohai and Yellow Seas, embraced west-north by fertile Yellow River delta alluvial flats cooling softly under clean marine Qingdao breezes.",
        causalityEn: "Wedging fertile wheat plains alongside a vibrant ocean peninsula forged twin Shandong souls: ritual family propriety of Lu (honoring elders, seating order, wheat nourishment raising China's tallest stature averages) joined harmoniously with mercantile-scientific pragmatism of Coastal Qi (Linzi)."
      },
      historicalEvolutionEn: "Neolithic Dawenkou & paper-thin Longshan Black Pottery (~2500 BCE); Duke of Zhou's State of Lu at Qufu and Jiang Ziya's State of Qi fostering the Jixia Academy of Hundred Schools; Song *Water Margin* Mount Liang; and late 19th-century Qingdao–Yantai port modernization.",
      culturalIdentityEn: "Dual-pillar Qilu Culture fusing noble Confucian moral gravity ('Home of Confucius and Mencius; Land of Ritual Propriety') across southwestern hills with candid maritime entrepreneurship, hearty multi-round banquet etiquette, and Outlaws-of-the-Marsh chivalry.",
      intangibleHeritageEn: "Solemn Qufu Confucian rites, Yangjiabu New Year Woodblock Prints (Weifang), Weifang World Kite Capital artistry, Luju Opera, ancient Linzi Cuju (FIFA-recognized football ancestor), and Longshan eggshell black ceramics.",
      culinaryEn: {
        styleOverviewEn: "Lucai reigns as China's sole northern-born member of the Eight Cuisines — foundational parent to Beijing Ming–Qing palace cooking — celebrated for charred scallion infusions ('Congshao'), clear crystal/milky broths, and cold Jiaodong shellfish.",
        dishesEn: [
          "Lucai's supreme banquet crown: plump Bohai sea cucumber slow-braised inside glossy dark Zhangqiu sweet-scallion caramel stock.",
          "Golden Yellow River carp curved acrobatically into leap-over-Dragon-Gate shape, flash-fried shattering crisp and draped warm in bright vinegar glaze.",
          "Artisanal nine-step pork intestines cleaned meticulously, braised, deep-fried, and simmered blending all five tastes (sour, sweet, bitter, spicy, salty) cleanly.",
          "300-year Dezhou traveler staple: honey-glazed free-range chicken slow-braised amid sixteen healing spices until bones drop clean from tender flesh.",
          "Viral grassroots Zibo ritual: tabletop charcoal skewers sizzling over crisp scallion flatbread wraps folded alongside crunchy scallions and sweet bean paste."
        ]
      },
      heritagesEn: [
        { nameEn: "Temple, Cemetery & Mansion of Confucius in Qufu (UNESCO 1994)", significanceEn: "Sanctuary of East Asian Confucianism preserving Dacheng Hall and 100,000 ancient cypresses across the Kong lineage." },
        { nameEn: "Mount Tai (UNESCO Mixed Heritage 1987)", significanceEn: "Paramount Imperial Peak of China's Five Sacred Mountains where 12 emperors performed Heaven-and-Earth Fengshan sacrifices." },
        { nameEn: "Qingdao Badaguan Villas & Tsingtao Brewery (1903)", significanceEn: "'Red tiles, green trees, blue sea and clear sky' architectural bay beside historic brewing cellars." },
        { nameEn: "Jinan Baotu Spring & Daming Lake", significanceEn: "'First Spring Under Heaven' bubbling fresh limestone artesian water straight through Old Jinan." },
        { nameEn: "Penglai Pavilion & Qi Great Wall", significanceEn: "Cliffside Taoist mirage observatory associated forever with the Eight Immortals Crossing the Sea." }
      ],
      figuresEn: [
        "Supreme teacher & philosopher of Qufu shaping East Asian ethics, humane governance, and education across 2,500 years.",
        "Second Sage from adjacent Zoucheng elevating original human goodness and 'The People stand foremost; rulers hold lightest weight'.",
        "Pioneer of impartial logic/optics Mozi alongside ancient patron architect-carpenter Lu Ban both forged across Qilu realms.",
        "Northern–Southern Song *Ci* lyrics twins ('Two Ans of Jinan') Li Qingzhao and patriotic warrior-poet Xin Qiji."
      ],
      echoEn: { workTitleEn: "Gazing at the Sacred Peak (望岳 — Mount Tai)", authorEn: "Du Fu (杜甫)", dynastyEn: "High Tang (736 CE)" },
      commercialEn: {
        historicalGuildEn: "Lu Guild of Zhoucun (starting point of Beijing's Ruifuxiang) trading silky Qilu brocades under staunch Confucian righteousness.",
        modernClustersEn: "Qingdao Ocean Economy & Smart Appliances (Haier, Hisense, Tsingtao), Weichai powertrains, and Shouguang horticulture.",
        hubsAndCorridorsEn: "Deepwater Qingdao & Rizhao ports wired efficiently via Jinan–Qingdao rail straight into Central Plains basins.",
        vietnamAseanLinkEn: "Major consumer electronics supply, commercial Sinotruk trucks, and bustling Qingdao–Hai Phong container traffic."
      },
      stationsEn: [
        "Core trunk hub (1h30 south of Beijing South) serving Spring City & Qufu",
        "Historic seaside Qingdao terminal pairing cleanly with Qufu East Confucius HSR station"
      ]
    },
    "prov-henan": {
      typeEn: "Province",
      regionLabelEn: "Central China (Central Plains)",
      highlightsEn: "Sinitic cradle: Yinxu Oracle Bones (Anyang), Luoyang & Kaifeng capitals, Longmen Grottoes, Songshan Shaolin Temple.",
      economyEn: "China's #1 rail crossroads ('Mi-shaped Grid'), world's largest smartphone assembly base (Zhengzhou), EV buses & agricultural processing.",
      landmarkEn: "Vairocana Grand Buddha — Longmen Grottoes, Luoyang (洛阳龙门石窟)",
      bestSeasonEn: "April (Luoyang Peony Festival in full bloom) & September – October (crisp Central Plains autumn)",
      cuisineEn: "Henan Lamb Hui Noodles (河南烩面), Luoyang 24-Course Water Banquet (洛阳水席), Peppery Spicy Morning Hu La Tang",
      travelTipEn: "The Three Ancient Capitals corridor (Luoyang – Dengfeng Shaolin – Kaifeng) connects effortlessly from Zhengzhou within 40 minutes.",
      economyAndIndustryEn: "Nation's unrivaled rail-air crossroad housing Zhengzhou Airport Zone (world's single largest iPhone assembly hub), BYD Zhengzhou & global #1 electric bus maker Yutong, world-leading tunnel-boring machines (CREG), lab-grown diamonds, and top wheat output.",
      vietnamConnectivityEn: "Yutong clean-energy buses, YTO Luoyang agricultural tractors, and Shaolin–Chenjiagou Taiji schools link steadily alongside Zhengzhou University (211/Double First-Class) and Henan University training Vietnamese philologists and civil engineers.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Meaning 'South of the Yellow River'; abbreviated 豫 (Yu) from ancient Nine Provinces' Yuzhou — pictogram showing a gentle elephant signifying subtropical Shang-era Central Plains elephants.",
        capitalCityEn: "Zhengzhou (郑州市 Zhèngzhōu Shì)"
      },
      geoEn: {
        summaryEn: "Central hearth straddling the middle–lower Yellow River from Step 2 Taihang/Songshan uplands eastward across flat fertile North China Plains, where silt accretion elevated riverbeds literally above Kaifeng fields ('Above-Ground Hanging River') beneath four balanced seasons.",
        causalityEn: "Soft friable Yiluo river loess allowed early flint-and-bronze farmers to plant China's foundational cities, spawning >20 dynastic capitals. Recurring Yellow River floods conversely tempered stoic resilience, hearty warming soups/noodles (Hui Mian, Hulatang), and Kaifeng's buried 'City Beneath a City' strata."
      },
      historicalEvolutionEn: "Unbroken urban sequence spanning Peiligang (7000 BCE), painted pottery Yangshao, Bronze Age Erlitou palace complexes, Anyang Yinxu's >150,000 Oracle Bones (earliest corroborated history), Luoyang's 13-dynasty glory, and Northern Song Kaifeng (*Qingming Scroll*) inspiring: 'Half of Chinese history sits in Henan.'",
      culturalIdentityEn: "Heartbeat of Zhongyuan Culture: bedrock of Chinese writing (legendary Cangjie, Xu Shen compiling *Shuowen Jiezi* in Luoyang), Shaolin & Chenjiagou Taiji martial synthesis, earnest peasant straightforwardness, and classic historical consciousness.",
      intangibleHeritageEn: "UNESCO Chenjiagou Taijiquan, Songshan Shaolin Kung Fu, beloved nationwide Yu Opera (Mulan legends), Luoyang Tang Tri-Color glazed pottery (Sancai), and Yuzhou Jun Ware imperial kilns.",
      culinaryEn: {
        styleOverviewEn: "Yucai earns tribute as 'Mother of Chinese Cuisines' due to central equilibrium — tuning the five flavors smoothly without extreme heat or sweetness, anchored by milky mutton bone stocks and hand-pulled wheat.",
        dishesEn: [
          "Hand-stretched broad wheat ribbons simmered smoothly inside ivory mutton bone broth loaded with cloud-ear fungus, kelp, tofu skins, and tender lamb.",
          "Bold waking Central Plains ritual: silky velvet beef gravy thickened fiery with cracked black pepper, dried chili, daylilies, and wheat gluten.",
          "Millennial Tang-era court sequence delivering 24 continuous sour-pepper soup courses opened by delicate shredded white-radish 'Mock Swallow's Nest'.",
          "Direct Northern Song Kaifeng lineage thin-skinned pork broth dumplings famed to 'hang gently like lanterns yet open neatly like chrysanthemums'.",
          "Three-century Huaxian roast heirloom chicken simmered fork-tender amid eighteen aromatic healing botanicals including amomum and cloves."
        ]
      },
      heritagesEn: [
        { nameEn: "Yinxu Ruins of Anyang (UNESCO 2006)", significanceEn: "Late Shang capital authenticated continuously via 150,000 Oracle Bones and the 832.84 kg Houmuwu Bronze Cauldron." },
        { nameEn: "Longmen Grottoes, Luoyang (UNESCO 2000)", significanceEn: ">2,300 cliffs holding 100,000 Northern Wei–Tang statues crowned by High Tang's 17.14 m Vairocana Buddha." },
        { nameEn: "Center of Heaven & Earth — Dengfeng & Shaolin (UNESCO 2010)", significanceEn: "Ancestral Zen Martial Monastery (495 CE), Zhougong Ancient Sundial Observatory & Songyang Academy." },
        { nameEn: "Kaifeng Northern Song Capital Sites & Iron Pagoda", significanceEn: "Reimagined *Qingming Scroll* waterways alongside Justice Bao's Tribunal and the 1049 glazed brick Iron Pagoda." },
        { nameEn: "Erlitou Xia–Bronze Capital & Henan Museum", significanceEn: "Early Yellow River palace remains paired beside the iconic Spring & Autumn Lotus-and-Crane Bronze Hu." }
      ],
      figuresEn: [
        "Immortal 'Sage of Poetry' Du Fu born in Gongyi, chronicling human conscience across An Lushan's devastation.",
        "Vernacular clarity poet Bai Juyi born in Xinzheng, retiring peacefully beside Luoyang's Xiangshan hills.",
        "Eastern Han Medical Sage Zhang Zhongjing of Nanyang authoring *Treatise on Cold Damage*, bedrock of TCM clinical formulas.",
        "Foremost Legalist synthesizer Han Feizi (State of Han, Xinzheng) alongside evocative Late Tang lyricist Li Shangyin."
      ],
      echoEn: { workTitleEn: "Spring Thoughts in Eastern Capital Luoyang (洛阳春思)", authorEn: "Liu Xiyi / Bai Juyi Tradition", dynastyEn: "Tang Dynasty" },
      commercialEn: {
        historicalGuildEn: "Yu Guilds orchestrating vibrant non-curfew Northern Song commercial streets along Bianhe canals as painted inside *Qingming Scroll*.",
        modernClustersEn: "Zhengzhou Smartphone Manufacturing Capital (Foxconn), BYD NEVs, Yutong Electric Buses, and tunnel-boring machines.",
        hubsAndCorridorsEn: "China's sole 'Mi-shaped' 8-way high-speed rail crossroads fusing east–west & north–south arteries smoothly.",
        vietnamAseanLinkEn: "High-speed air cargo smartphone supply links joining Hanoi/Bac Ninh–Zhengzhou alongside electric transit buses."
      },
      stationsEn: [
        "China's largest 8-directional 'Mi-grid' HSR mega-station (2h15 from Beijing)",
        "Only 15 minutes by cab directly into Longmen Grottoes scenic gates"
      ]
    },
    "prov-hubei": {
      typeEn: "Province",
      regionLabelEn: "Central China",
      highlightsEn: "Yellow Crane Tower, Chu State treasures (Zenghouyi Bells), Taoist Wudang Mountain, Yangtze Three Gorges Dam.",
      economyEn: "China's 'Nine-Province Crossroads' transport hub, Wuhan Optics Valley fiber/lasers/YMTC chips, Dongfeng EVs & giant bridges.",
      landmarkEn: "Yellow Crane Tower Overlooking the Yangtze, Wuhan (武汉黄鹤楼)",
      bestSeasonEn: "March (Wuhan University cherry blossoms) & October – November (autumn mists over East Lake)",
      cuisineEn: "Hot Dry Sesame Noodles (热干面), Three-Delicacy Bean-Skin Pie (三鲜豆皮), Honghu Lotus-Rib Broth, Wuchang Bream",
      travelTipEn: "Admission to Hubei Provincial Museum (housing Zenghouyi Bells & Sword of Goujian) is free yet requires booking 5 days ahead.",
      economyAndIndustryEn: "Wuhan Optics Valley leads China in fiber-optic cables (FiberHome), industrial lasers, and 3D NAND memory (YMTC); paired with Dongfeng/Voyah automobiles, civil bridge engineering designing >60% of world mega-cable-stayed spans, and central river logistics.",
      vietnamConnectivityEn: "One of the oldest & largest Vietnamese student communities across China: centered at Wuhan Univ., HUST (top engineering/mechanical 985), Central China Normal Univ., and China Univ. of Geosciences (CUG), alongside major Vietnamese bridge/fiber telecom engineering ventures.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Literally 'North of Lake Dongting'; abbreviated 鄂 (E) preserving ancient Shang–Zhou State of E located southeast of modern Wuhan.",
        capitalCityEn: "Wuhan (武汉市 Wǔhàn Shì — 'Crossroads of Nine Provinces')"
      },
      geoEn: {
        summaryEn: "Central Yangtze Basin descending from western Three Gorges frontiers (Wudang Peaks, Shennongjia reaching 3,106 m) into the watery Jianghan Plain dotted by >1,000 lakes ('Province of a Thousand Lakes'), cleaved in three at Wuhan (Wuchang–Hankou–Hanyang) by the Han River meeting the Yangtze.",
        causalityEn: "Occupying China's supreme water-crossroads drew traders nationwide to Hankou docks, breeding brisk candid riverport banter ('Unbeaten spirit of Chu' 不服周) and iconic dawn 'Guozao' street breakfasts (energy-dense Hot Dry Sesame Noodles eaten quickly before unloading cargo ships)."
      },
      historicalEvolutionEn: "Heartland of brilliant Chu civilization (Jingzhou Ying Capital matching Central Plains metallurgy & Chuci poetics); Three Kingdoms epic stages (Red Cliffs 208 CE, Jingzhou, Xiangyang); Zhang Zhidong's 1890 Hanyang Ironworks; and October 10, 1911 Wuchang Uprising overturning Qing rule.",
      culturalIdentityEn: "Poetic Chu romanticism (soaring phoenix spirit of Qu Yuan & Daoist harmony) joined cleanly beside Taoist Wudang inner martial elegance, courageous 'Hanjiang Hero' resilience, and China's largest global university population (>1.3 million college students inside one metropolis!).",
      intangibleHeritageEn: "Taoist Wudang Martial Arts & Health Cultivation, Hankou Han Opera (parent donor to Peking Opera), Chu Silk Embroidery, Guqin 'Flowing Water' confidant lore at Hanyang Qintai, and Chibi Qingzhuan Brick Tea.",
      culinaryEn: {
        styleOverviewEn: "Ecai excels in three-way freshwater fish finesse, lotus-root clay-pot simmering, and Asia's most astonishing street breakfast variety ('A full month of Guozao without repeating one dish').",
        dishesEn: [
          "Top 10 Chinese street noodle: bouncy alkaline strands swirled rich in thick roasted black-sesame paste, pickled radish bites, garlic water, and chili oil.",
          "Iconic Wuhan warmth: floury pink Honghu lake lotus roots simmered 4 hours alongside meaty pork ribs inside sealed clay casseroles till velvety sweet.",
          "Flat-bodied Liangzi Lake blunt-snout bream delicately steamed inside ginger, scallions, and shiitake caps keeping tender silky sweetness.",
          "Crisp pan-griddled mung-egg crust folded squarely over fragrant glutinous rice, diced mushroom, tender pork, and bamboo shoots.",
          "Qianjiang's beer-braised swamp crayfish roaring across spicy crushed garlic and fiery chili aromatics as the world's crayfish capital."
        ]
      },
      heritagesEn: [
        { nameEn: "Ancient Building Complex in the Wudang Mountains (UNESCO 1994)", significanceEn: "Ming imperial Daoist Golden Summit sanctuaries cradling inner-strength Taiji martial lineage." },
        { nameEn: "Hubei Shennongjia (UNESCO Natural Heritage 2016)", significanceEn: "Roof of Central China conserving Tertiary relic forests, golden snub-nosed monkeys & Herbal Sovereign lore." },
        { nameEn: "Yellow Crane Tower & Hubei Provincial Museum", significanceEn: "Towering Yangtze pavilion famed in Cui Hao's verse paired beside Zenghouyi Chime Bells & Sword of Goujian." },
        { nameEn: "Ming Xianling Mausoleum & Jingzhou Ancient Wall", significanceEn: "2,000-year brick-and-earth fortified Chu-Han garrison linked forever to General Guan Yu." },
        { nameEn: "Three Gorges Dam Project", significanceEn: "World's single largest installed hydroelectric power station (22,500 MW) taming Xiling Gorge floods." }
      ],
      figuresEn: [
        "Immortal Chu poet fathering individual lyrical verse (*Li Sao*) whose loyal tragedy seeded East Asia's Dragon Boat rituals.",
        "Ingenious Northern Song inventor of ceramic movable-type printing (c. 1040s) four centuries ahead of Gutenberg.",
        "Peerless Ming pharmacologist of Qichun compiling the monumental 1,892-remedy *Compendium of Materia Medica*.",
        "Han dynasty 'Wild-Geese Falling' Beauty Wang Zhaojun alongside Song calligraphic painter Mi Fu who flourished at Xiangyang."
      ],
      echoEn: { workTitleEn: "Yellow Crane Tower (黄鹤楼 — Overlooking the Yangtze, Wuhan)", authorEn: "Cui Hao (崔颢)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Hankou 'Nine-Province Thoroughfare' warehouses bidding Wanli Tea Caravans' compressed brick tea northward to Mongolia & Russia.",
        modernClustersEn: "Wuhan Optics Valley (optical fiber, industrial lasers, YMTC NAND chips) paired with Dongfeng NEVs and bridge design.",
        hubsAndCorridorsEn: "Ten-thousand-ton Yangtze river ships sailing past Three Gorges locks to coastal East China oceans.",
        vietnamAseanLinkEn: "Direct academic engineering collaboration (Wuhan Univ., HUST) paired with telecom fiber and mega-bridge infrastructure."
      },
      stationsEn: [
        "Central north–south HSR mega-junction (4h to Beijing West / 4h to Guangzhou South)",
        "Classic historic concession station feeding Yichang (Three Gorges) & Xiangyang"
      ]
    },
    "prov-hunan": {
      typeEn: "Province",
      regionLabelEn: "Central China",
      highlightsEn: "1,000-year Yuelu Academy, Zhangjiajie Wulingyuan sandstone pillars, Fenghuang Ancient Town, Yueyang Tower.",
      economyEn: "Heavy engineering machinery capital (Sany, Zoomlion), electric rail locomotives (Zhuzhou CRRC) & vibrant Changsha media/consumption.",
      landmarkEn: "Sandstone Pillars of Tianzi Mountain, Zhangjiajie (张家界武陵源)",
      bestSeasonEn: "April – June & September – November (clear mist-parted Zhangjiajie sandstone needles)",
      cuisineEn: "Steamed Fish Head with Chopped Chili (剁椒鱼头), Changsha Stinky Black Tofu (长沙臭豆腐), Stir-Fried Belly with Chilis",
      travelTipEn: "Zhangjiajie National Park admission remains valid four consecutive days; avoid peak October 1 National Holiday crowds.",
      economyAndIndustryEn: "World Top-3 construction machinery capital anchored by Sany Heavy, Zoomlion, and CRCHI tunnel shields alongside Zhuzhou ('Electric Rail City' CRRC locomotives) and booming Malanshan Mango TV digital entertainment & consumer F&B culture.",
      vietnamConnectivityEn: "Historic Yuelu–Changsha–Guilin revolutionary educational bonds (1950s–60s) pair today with steady imports of Sany/Zoomlion cranes into Vietnamese expressway builds. Central South Univ. (c985 leader in Metallurgy/Xiangya Medicine), Hunan Univ. (at Yuelu foot), and Hunan Normal host bright Vietnamese fellows.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Literally 'South of Lake Dongting'; abbreviated 湘 (Xiang) tracking the maternal Xiangjiang River flowing full length northward into Dongting Lake.",
        capitalCityEn: "Changsha (长沙市 Chángshā Shì)"
      },
      geoEn: {
        summaryEn: "Horseshoe central Yangtze basin ringed completely by rugged Wuling–Xuefeng peaks west, Nanling south, and Mufu–Luoxiao ridges east opening northward toward Dongting Lake across four rivers (Xiang–Zi–Yuan–Li) inside humid misty subtropical seasons.",
        causalityEn: "Fortress isolation encircled by steep ranges forged famed fiery Huxiang grit ('Enduring extreme bitterness; refusing compromise'), while damp misty basin air elevated pickled red Duo Jiao chili heat and smoked Lapi winter curing from cuisine into regional health survival."
      },
      historicalEvolutionEn: "Southern Chu realm witnessing exiled Qu Yuan and Jia Yi along Miluo River; stunning 168 BCE Mawangdui Han tomb; 976 Song Yuelu Academy dialogues of Zhu Xi & Zhang Shi; and decisive 19th–20th-c. statecraft/revolution led by Zeng Guofan, Zuo Zongtang, Tan Sitong & modern changemakers.",
      culturalIdentityEn: "Bold pragmatic 'Huxiang Culture' blending Yuelu Academy practical civic responsibility ('Learning to Serve the Realm') with volcanic candor, uncanny shamanic Chu antiquity (Mawangdui), and China's liveliest youth nightlife & beverage creativity in Changsha.",
      intangibleHeritageEn: "Xiang double-sided embroidery (rendering two-sided different lions!), Anhua dark brick tea fermentation, lively Flower-Drum Opera, UNESCO Miluo Dragon-Boat Races, and Jiangyong Nüshu — Earth's sole indigenous women's script!",
      culinaryEn: {
        styleOverviewEn: "Xiangcai shines among China's Eight Cuisines through bold 'fragrant heat & crisp fermented sour-chili spice' driven by chopped brined Duo Jiao peppers, smoky country bacon, and sizzling wok sear.",
        dishesEn: [
          "Meatier black carp head blanketed generously in crisp lacto-fermented red Duo Jiao chilies, garlic, and ginger — steamed tender in aromatic scarlet broth.",
          "No. 1 Hunan household comfort: marbled Ningxiang pork belly flash-seared over howling wok flame alongside sharp crisp green Zouleng chilies & fermented black beans.",
          "Square-cut pork belly caramelized delicately over rock sugar (skipping dark soy) stewed rich with dried star anise, cinnamon & chilies.",
          "Changsha's velvet-black fermented tofu cubes fried hollow puffed crisp outside and punctured warm for garlicky pickled chili soup.",
          "Savory blood-cooked Yongzhou ginger duckling paired beside Changsha's globally imitated modern 'Chayan Yuese' tea-arts scene."
        ]
      },
      heritagesEn: [
        { nameEn: "Wulingyuan Scenic Area — Zhangjiajie (UNESCO 1992)", significanceEn: ">3,000 sheer quartz-sandstone pillars piercing swirling clouds (visual inspiration for Avatar) beside Tianmen Sky Bridge." },
        { nameEn: "Yuelu Academy & Yuelu Mountain", significanceEn: "1,000+ years of uninterrupted Confucian lectures bearing the gateway motto: 'Only Chu breeds talents; here they flourish most'." },
        { nameEn: "Hunan Museum (Mawangdui Han Tombs 168 BCE)", significanceEn: "Houses Lady Xin Zhui's miraculously preserved 2,100-year body, 49-gram gauze silk robe, T-banner, and oldest silk *Yijing*/*Laozi* scripts." },
        { nameEn: "Yueyang Tower Beside Dongting Lake", significanceEn: "Leading Jiangnan river tower immortalized by Fan Zhongyan's civic credo: 'First to bear the realm's sorrows; last to savor its joys'." },
        { nameEn: "Fenghuang Ancient Town (Xiangxi Tujia–Miao)", significanceEn: "Lantern-lit riverside stilted timber houses curving gracefully beside jade Tuojiang River preserving Miao silver craft." }
      ],
      figuresEn: [
        "Southern Song Neo-Confucian founder from Daoxian authoring *On Loving the Lotus* ('Unstained rising out of silt').",
        "Independent early-Qing materialist historian-philosopher Wang Fuzhi of Hengyang deeply read by modern reformers.",
        "19th-century Self-Strengthening Viceroys Zeng Guofan & Zuo Zongtang launching modern arsenals and shipyards.",
        "20th-century Ink Freehand Giant Qi Baishi transitioning seamlessly from Xiangtan carpenter into poetic shrimp & flora paintings."
      ],
      echoEn: { workTitleEn: "Inscription for Yueyang Tower (岳阳楼记 — Dongting Lake)", authorEn: "Fan Zhongyan (范仲淹)", dynastyEn: "Northern Song (1046 CE)" },
      commercialEn: {
        historicalGuildEn: "Xiang Merchants coordinating Changsha & Changde riverboats carrying Hunan rice, Anhua dark tea & tung oil down Lake Dongting.",
        modernClustersEn: "Changsha 'Global Construction Machinery Capital' (SANY, Zoomlion), CRRC electric locomotives & Mango TV media.",
        hubsAndCorridorsEn: "High-speed trunk racing cleanly through Changsha from Wuhan directly toward Guangzhou–Shenzhen–Hong Kong.",
        vietnamAseanLinkEn: "Major heavy equipment supplier (cranes, concrete pumps, excavators) powering Vietnamese road and port construction."
      },
      stationsEn: [
        "Major HSR junction racing directly into Zhangjiajie West in 2h05",
        "Mountain portal minutes from Wulingyuan & Tianmen Gateways"
      ]
    },
    "prov-guangdong": {
      typeEn: "Province",
      regionLabelEn: "South China (Lingnan)",
      highlightsEn: "Cantonese, Chaoshan & Hakka triple heritage, Kaiping Diaolou watchtowers, Dimsum Yum Cha, Lion Dance & modern revolutionary sites.",
      economyEn: "China's #1 GDP & trade powerhouse for 35 straight years anchoring the Greater Bay Area (Guangzhou, Shenzhen, Dongguan, Foshan).",
      landmarkEn: "Canton Tower Along the Pearl River Skyline (广州塔与珠江新城)",
      bestSeasonEn: "October – March (crisp dry 18–25 °C sunny days ideal for Dimsum walks & Canton Fair trade)",
      cuisineEn: "Guangzhou Morning Yum Cha Dimsum (早茶点心), Crisp Roast Goose (烧鹅), Rice-Roll Changfen, Chaoshan Beef Hotpot",
      travelTipEn: "Frequent XRL High-Speed trains glide smoothly between Guangzhou/Shenzhen and Hong Kong West Kowloon inside 14–48 minutes.",
      economyAndIndustryEn: "GDP surpasses $1.92 trillion — larger than most G20 nations and leading China for 35 straight years! Greater Bay Area powerhouse: Shenzhen AI/hardware/EVs (Huawei, Tencent, BYD, DJI); Guangzhou autos & Canton Fair/Shein; Dongguan precision tooling; Foshan home appliances (Midea).",
      vietnamConnectivityEn: "Vietnam's #1 provincial hardware & electronics supplier (7-day PCB prototypes from Huaqiangbei, textiles from Zhongda, Foshan furniture). Historically in 1925 Ho Chi Minh founded Vietnam Revolutionary Youth League in Guangzhou (#13 Wenming Rd); Sun Yat-sen Univ., SCUT, Jinan & Shenzhen Univ. educate thousands of Vietnamese.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Derived from Song 'Guangnan East Circuit'; abbreviated 粤 (Yue) tracing ancient Baiyue & Nanyue kingdoms uniting Lingnan south of Five Ridges.",
        capitalCityEn: "Guangzhou (广州市 Guǎngzhōu Shì)"
      },
      geoEn: {
        summaryEn: "Southernmost mainland province on Step 3 cushioned safely behind the Nanling Five Ridges blocking icy northern blasts while opening outward across China's longest 4,100 km South China Sea shore centered on the fertile alluvial Pearl River Delta estuary.",
        causalityEn: "Being shielded north by Five Ridges let Lingnan nurture ocean-facing autonomy starting with Tang–Song Maritime Silk ports. Subtropical year-round muggy heat shaped Yin-cooling culinary philosophy — prioritizing pure natural sweetness ('Qingshuang') paired beside slow 4-hour herbal 'Old-Fire Soups' ('Lao Huo Liang Tang')."
      },
      historicalEvolutionEn: "214 BCE Qin commanderies & 203 BCE Zhao Tuo's Nanyue Kingdom; Tang–Song Maritime Customs at Guangzhou; 1757–1842 Canton Thirteen Hongs global trade monopoly accumulating overseas Chinese remittance networks ('Qiaopi'); and 1978 Deng Xiaoping's Shenzhen–Zhuhai–Shantou SEZ economic miracle.",
      culturalIdentityEn: "Pragmatic, unpretentious Lingnan spirit standing atop three pillars: commercial Pearl Delta Guangfu Yum Cha urbanity, famously loyal Chaozhou–Shantou diaspora tea clans, and studious ancestral Hakka enclaves — united by 'Dare to lead the realm ahead'.",
      intangibleHeritageEn: "UNESCO Cantonese Opera, explosive Southern Awakening Lion Dance for shop openings, Chaoshan Gongfu Oolong ceremony, Foshan Shiwan relief ceramics, and sun-cured natural Gambiered Canton Gauze Silk ('Xiangyunsha').",
      culinaryEn: {
        styleOverviewEn: "Yuecai reigns globally among China's Eight Cuisines spanning Guangzhou, Chaoshan, and Hakka tables rooted strictly in 'Clean, Umami-Fresh, Tender, Smooth, Crisp & Fragrant' refusing heavy spices that mask ingredient soul.",
        dishesEn: [
          "Beloved morning 'Yum Cha' ritual: translucent 12-pleat shrimp Har Gow dumplings, crab-roe Siu Mai, fluffy split-top Char Siu pork buns, and silky rice-milk Cheung Fun.",
          "Chef's ultimate barometer: free-range Zhanjiang chicken poached carefully at 88 °C till marrow-pink juice glows gently under snapping golden skin, dipped in crushed scallion-ginger oil.",
          "Cantonese household love simmering whole-bone, duck, yam, goji, astragalus, and aged Xinhui tangerine peel quietly for 4–6 hours.",
          "Tender Gujing goose inflated, glazed amber, sewn shut with five spices and roasted crisp over lychee fruitwood served alongside sweet plum dip.",
          "Fresh Chaoshan pasture beef hand-carved within four hours of slaughter by exact anatomical cuts (Diaolong, Spoon-Handle) blanched 8 seconds cleanly inside clear bone soup."
        ]
      },
      heritagesEn: [
        { nameEn: "Kaiping Diaolou & Villages (UNESCO 2007)", significanceEn: ">1,800 multi-story fortified reinforced-concrete mansions built by returning overseas diaspora fusing Lingnan guard towers with Baroque arcades." },
        { nameEn: "Mount Danxia (Shaoguan, UNESCO 2010)", significanceEn: "Crimson Cretaceous sandstone formations giving international geology the global 'Danxia landform' term." },
        { nameEn: "Chen Clan Ancestral Hall (1894)", significanceEn: "Peerless Lingnan Folk Craft Museum exploding in Three Carvings & Two Moldings (timber, brick, stone, ceramic, painted lime relief)." },
        { nameEn: "Nanyue King Museum", significanceEn: "Unplundered 2nd-century BCE tomb preserving the Emperor's silk-threaded jade burial suit and solid gold 'Seal of Emperor Wen'." },
        { nameEn: "Guangji Bridge & Ancient Chaozhou City (1171)", significanceEn: "World's unique open-span stone pontoon bridge disconnecting center wooden barges daily for passing river vessels." }
      ],
      figuresEn: [
        "Sixth Chan Patriarch Huineng of Xinxing founding Sudden Awakening Zen (*Platform Sutra*), deeply shaping Vietnamese Truc Lam Buddhism.",
        "1898 Hundred Days thinkers Kang Youwei & Liang Qichao whose writings inspired Phan Boi Chau and Phan Chau Trinh directly.",
        "Father of modern Republican China Dr. Sun Yat-sen from Xiangshan (modern Zhongshan).",
        "Ming defensive hero Yuan Chonghuan (Dongguan) alongside pioneer railway engineer Zhan Tianyou (Nanhai)."
      ],
      echoEn: { workTitleEn: "Enjoying Lychees at Huizhou (食荔枝 — Lingnan Exile)", authorEn: "Su Shi (苏轼)", dynastyEn: "Northern Song (1096 CE)" },
      commercialEn: {
        historicalGuildEn: "Canton Thirteen Hongs (1757–1842 Yue Merchants) & global Chaoshan Qiaopi trust syndicates financing Pacific trade.",
        modernClustersEn: "China's #1 Provincial Economy: Shenzhen AI/Hardware (Huawei, Tencent, BYD, DJI), Foshan appliances, Guangzhou apparel.",
        hubsAndCorridorsEn: "Guangdong–HK–Macau Greater Bay Area anchored around Shenzhen, Nansha, and Guangzhou ocean mega-ports.",
        vietnamAseanLinkEn: "Vietnam's #1 provincial commercial trade partner supplying electronics PCBs, machinery, plastics & textiles daily."
      },
      stationsEn: [
        "Earth's busiest high-speed rail station branching outward across all South China",
        "Major gateway linking Shenzhen directly to Hong Kong West Kowloon in 18 minutes"
      ]
    },
    "prov-hainan": {
      typeEn: "Province",
      regionLabelEn: "South China",
      highlightsEn: "China's southernmost tropical island, Li-ethnic brocade weaving, Su Dongpo's exile academy, sunny Sanya Bays.",
      economyEn: "Hainan Free Trade Port (island-wide duty-free 2025–26), Wenchang Orbital Spaceport, tropical seed breeding & leisure.",
      landmarkEn: "108m Nanshan Sea Goddess of Mercy Statue, Sanya (三亚南山海上观音)",
      bestSeasonEn: "November – April (warm breezy 24–28 °C dry sunshine avoiding Aug–Sep typhoons)",
      cuisineEn: "Wenchang Poached Chicken (文昌鸡), Fresh Coconut-Water Chicken Hotpot (椰子鸡), Tropical Qingbuliang Dessert",
      travelTipEn: "59 countries enjoy 30-day visa-free entry; keep your physical passport handy whenever shopping CDF Duty-Free malls.",
      economyAndIndustryEn: "National strategic centerpiece: Hainan Free Trade Port (capped 15% corporate/personal taxes + duty-free islands starting end-2025), Wenchang coastal spaceport launching Tianzhou/Chang'e rockets, Nanfan Seed Silicon Valley, and Boao Forum for Asia.",
      vietnamConnectivityEn: "Hainan sits closest across Beibu Gulf to northern Vietnam sharing tropical crops (coffee, rubber, coconuts, tropical fisheries) and centuries of Gulf of Tonkin junk trade. Visa-free policies & Hainan University connect growing hospitality and marine-fishery ties.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named 'South of the Qiongzhou Strait'; abbreviated 琼 (Qiong — fine green jade / Tang–Song Qiongzhou Prefecture) referencing White Stone Jade Mountain outside Haikou.",
        capitalCityEn: "Haikou (海口市 Hǎikǒu Shì)"
      },
      geoEn: {
        summaryEn: "China's sole purely tropical maritime island province radiating cleanly downward in concentric plains from central Five-Finger Mountain rainforests (1,867 m) onto pearly white Sanya sands, maintaining lush evergreen zero-winter warmth year-round.",
        causalityEn: "Separation across stormy Qiongzhou Straits made Hainan imperial China's remote 'End of Heaven & Corner of Earth' exile shore (housing Su Dongpo and Hai Rui). Yet that warm oceanic isolation now fuels tropical coconut–rubber ecosystems, winter sun retreats, and duty-free port trade."
      },
      historicalEvolutionEn: "Millennial home of indigenous Li weavers; 110 BCE Han Commanderies; 1097–1100 Su Dongpo's exiled Danzhou academy sparking classical island literacy; 14th-c. Huang Daopo learning Li three-spindle cotton spinning; and 1988 separation from Guangdong to form China's largest SEZ and modern Free Trade Port.",
      culturalIdentityEn: "Relaxed gentle tropical fusion pairing coastal Hokkien–Qiong Mazu fishing warmth alongside colorful indigenous Li–Miao mountainous brocade crafts and proud literary reverence for Song exile teacher Su Dongpo ('You too are native children of Danzhou').",
      intangibleHeritageEn: "UNESCO Urgent-Safeguarded Li Traditional Spinning, Dyeing, Weaving & Embroidering (root ancestor of Chinese cotton technology!), wooden fishing-junk craft, coconut carving, and melodious Qiong Opera.",
      culinaryEn: {
        styleOverviewEn: "Qiongcai celebrates fresh zero-oil island bounty: 'Four Great Hainan Dishes' (Wenchang Chicken, Jiaji Duck, Dongshan Goat, Hele Crab) poached, steamed, or gently simmered in fresh green coconut juice.",
        dishesEn: [
          "Original forebear behind Southeast Asia's famed Chicken Rice: coconut-and-banyan-fed farm hens tenderly poached silky pink-bone under sunny golden skin, dipped in calamansi-garlic-chili soy.",
          "Boiling pure green Wenchang coconut water (zero tap water!) flash-poaching crisp tender chicken pieces inside three minutes alongside sweet jelly strips.",
          "Island's remaining gilded trio: plump fat Jiaji duck, herb-grazed non-gamey Wanning mountain mutton, and burst-with-roe coastal crabs.",
          "Refreshing tropical cooling bowl layering chilled thick coconut milk over mung beans, lotus seeds, barley, tapioca pearls, taro, and crisp fruit.",
          "Bright tangy fermented-rice vinegar lees bubbling gently alongside garlic-chili oil to flash-blanch fresh South China Sea seafood."
        ]
      },
      heritagesEn: [
        { nameEn: "Hainan Tropical Rainforest National Park", significanceEn: "Sanctuary safeguarding Earth's rarest primate — the critically endangered Hainan Gibbon." },
        { nameEn: "Tianya Haijiao & Nanshan Cultural Park, Sanya", significanceEn: "Poetic 'End of the Earth' coastal rocks & towering 108-meter coastal Tri-Aspect Guanyin." },
        { nameEn: "Dongpo Academy, Danzhou (1098)", significanceEn: "Pavilion where Su Shi taught islanders Confucian scholarship, ending centuries of southern isolation." },
        { nameEn: "Qilou Old Streets of Haikou", significanceEn: ">600 pastel early-20th-century covered arcaded shophouses erected by returning Southeast Asian Chinese merchants." },
        { nameEn: "Binglanggu Li & Miao Ethnic Park", significanceEn: "Preserves ancient inverted boat-shaped thatch dwellings unique to indigenous Li builders." }
      ],
      figuresEn: [
        "Distinguished Ming Grand Secretary of Haikou authoring political-economy treatise *Supplement to Extended Meaning of Great Learning*.",
        "Legendary incorruptible Ming censor Hai Rui ('Blue-Sky Hai') from Qiongshan fearlessly rebuking Emperor Jiajing.",
        "Ancestral Song clan roots in Wenchang shaping pivotal events across 20th-century Republican history."
      ],
      echoEn: { workTitleEn: "Crossing the Strait by Night (六月二十日夜渡海 — Leaving Danzhou)", authorEn: "Su Shi (苏轼)", dynastyEn: "Northern Song (1100 CE)" },
      commercialEn: {
        historicalGuildEn: "South China Sea junk stations provisioning fresh water, agarwood, black pepper, and coconuts along coastal routes.",
        modernClustersEn: "All-Island Hainan Free Trade Port (duty-free retail 2025–26), Wenchang Orbital Launch Center & tropical seed R&D.",
        hubsAndCorridorsEn: "Yangpu Container Transshipment Port connecting Gulf of Tonkin & Beibu corridors across ASEAN.",
        vietnamAseanLinkEn: "Cross-Gulf proximity pairing tropical farm ecology (coffee, rubber, seafood) with zero-tariff free port transit."
      },
      stationsEn: [
        "Gateway onto the world's sole coastal loop HSR circling Hainan Island",
        "Southernmost tropical terminus minutes from Yalong & Dadonghai beaches"
      ]
    },
    "prov-sichuan": {
      typeEn: "Province",
      regionLabelEn: "Southwest China",
      highlightsEn: "Bronze-Age Sanxingdui & Jinsha wonders, 2,280-year Dujiangyan irrigation, Leshan Giant Buddha, Jiuzhaigou valleys, Giant Pandas & Three Kingdoms lore.",
      economyEn: "Largest western regional economy centered in Chengdu: iPad/Intel electronics, aviation, clean hydro power & China–Europe Rail.",
      landmarkEn: "Five-Flower Lake, Jiuzhaigou Valley (九寨沟五花海奇观)",
      bestSeasonEn: "September – November (blazing golden alpine autumn across Jiuzhaigou) & March – May",
      cuisineEn: "Mapo Tofu (麻婆豆腐), Tea-Smoked Duck, Twice-Cooked Pork, Red-Oil Boboji Skewers",
      travelTipEn: "New high-speed mountain rail whisks travelers straight from Chengdu to Zhenjiangguan / Huanglong-Jiuzhai in under 2 hours!",
      economyAndIndustryEn: "Western economic titan (~6T RMB GDP) manufacturing global Apple iPads (Foxconn Chengdu), Intel/TI chips, stealth fighter jets & COMAC nose sections while generating China's #1 clean hydropower output exported eastward alongside high-frequency Europe rail freight.",
      vietnamConnectivityEn: "Direct flights bind Chengdu cleanly with Hanoi & HCMC carrying booming tourist flows to Jiuzhaigou & Mount Emei alongside hydropower gear and fertilizer exports. Sichuan Univ. (medical/Tang-Song studies C985), UESTC (wireless/EE 985), and SWJTU (rail) host active Vietnamese researchers.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named from Northern Song 'Four Chuan River Circuits'; second character 蜀 (Shu) immortalizes mysterious Bronze-Age Ancient Shu Kingdom atop Chengdu Plain.",
        capitalCityEn: "Chengdu (成都市 Chéngdū Shì)"
      },
      geoEn: {
        summaryEn: "Straddles Step 1 and Step 2 divide cleanly: towering eastern Tibetan Alps west (Minya Konka 7,509 m) stepping down abruptly into the lush fertile 'Red Basin' ringed completely by Qinling–Daba mountains where Li Bing's Dujiangyan irrigates misty mild Chengdu clouds ('Sichuan dogs bark whenever seeing rare sun').",
        causalityEn: "Protected fortress topography ('Shu roads harder than scaling blue Heaven') guaranteed lush famine-free refuge ('Land of Abundance' 天府之国) cradling China's very first paper money *Jiaozi* (1024 CE) and effortless 'Bashu Slow Life' outdoor teahouses alongside spicy-numbing Mala dishes dispelling pervasive valley dampness."
      },
      historicalEvolutionEn: "Enigmatic 1700–1150 BCE Sanxingdui bronze masks & Jinsha Sunbird; 256 BCE Li Bing's dam-free Dujiangyan fueling Qin unification; Liu Bei & Zhuge Liang's Shu Han Dynasty; Tang–Song poetic summit (Du Fu Thatched Cottage, Three Su Masters) & birthplace of humanity's inaugural state paper note *Jiaozi* (1024 CE)!",
      culturalIdentityEn: "Joyful Bashu Culture reconciling refined literary genius (Li Bai, Sima Xiangru, Su Shi) beside relaxed teahouse contentment ('Too comfortable for ambitious youth to ever depart!'), Liu–Guan–Zhang loyalty at Wuhou Shrine, and alpine Khampa Tibetan–Yi–Qiang traditions.",
      intangibleHeritageEn: "Lightning-fast Sichuan Opera Silk Face-Changing & Fire-Spitting, Shu delicate embroidery (one of Four Great Styles since Han), Shu imperial brocade, bamboo-cane lacquer weaving, and covered-bowl *Gaiwan* riverside tea culture.",
      culinaryEn: {
        styleOverviewEn: "Chuancai conquers kitchens globally not through blunt chili heat, rather 'One Hundred Dishes, One Hundred Flavors' orchestrating 24 nuanced taste profiles (Fish-Fragrant, Mala, Weird-Flavor, Red-Oil) grounded in Pixian broad-bean paste and aromatic Hanyuan floral peppercorns.",
        dishesEn: [
          "1862 Chen Mapo benchmark fusing 8 strict criteria: trembling silken tofu cubes enveloped cleanly inside savory Pixian bean-chili minced beef dotted in sizzling aromatic ground Hanyuan Sichuan pepper.",
          "Undisputed queen of Sichuan family cooking: simmered pork belly chilled crisp-sliced thin and flash-fried ('lamp-cup' curl) with pungent black beans, Pixian paste, and sweet green garlic leeks.",
          "Tender diced chicken breast flash-coated in glossy 'lychee' tart-sweet smoky chili glaze studded with crunchy toasted peanuts (credited to Governor Ding Baozhen).",
          "Velvety cornstarch-marinated beef or fish slices gently poached atop crunchy bean sprouts, drowned tableside under roaring-hot chili-peppercorn fragrant oil.",
          "Beloved 19th-century Chengdu street trinity: creamy spicy Dandan noodles, delicate wontons *Long Chaoshou*, and sweet chili garlic *Zhong* dumplings."
        ]
      },
      heritagesEn: [
        { nameEn: "Mount Qingcheng & Dujiangyan Irrigation (UNESCO 2000)", significanceEn: "Earth's sole dam-less ancient river engineering still watering 700,000 hectares uninterrupted since 256 BCE beside Daoist origin peaks." },
        { nameEn: "Jiuzhaigou & Huanglong Mineral Valleys (UNESCO)", significanceEn: "Fairyland turquoise travertine lakes and frozen glacier terraces climbing snowy Minshan pine forests." },
        { nameEn: "Mount Emei & 71m Leshan Giant Buddha (UNESCO Mixed 1996)", significanceEn: "Samantabhadra sacred peak facing the world's tallest cliff-carved Tang Maitreya taming three converging rivers." },
        { nameEn: "Sanxingdui Bronzes, Jinsha & Wuhou Shrine", significanceEn: "Staggering 3.96m Bronze Sacred Tree & protruding-eye masks alongside China's sole ruler–minister Shu Han shrine." },
        { nameEn: "Sichuan Giant Panda Sanctuaries (Chengdu–Wolong)", significanceEn: "Bamboo wilderness nurturing >80% of all wild Giant Pandas on Earth." }
      ],
      figuresEn: [
        "Immortal 'Poet Saintly Genie' Li Bai nurtured in Jiangyou writing *Hard Is the Road to Shu*.",
        "Father-and-sons literary trinity — Su Xun, universal genius Su Shi (Dongpo), and Su Zhe — of Meishan filling Three of Eight Tang–Song Masters.",
        "Western Han rhapsody laureate Sima Xiangru of Chengdu celebrated with Zhuo Wenjun's spirited *Qinxin* courtship.",
        "Architect of China's modern Reform and Opening era Deng Xiaoping born in Guang'an."
      ],
      echoEn: { workTitleEn: "Happy Rain on a Spring Night (春夜喜雨 — Du Fu Thatched Cottage)", authorEn: "Du Fu (杜甫)", dynastyEn: "Tang Dynasty (761 CE)" },
      commercialEn: {
        historicalGuildEn: "Sichuan Bankers innovating humanity's earliest paper currency *Jiaozi* (1024 CE) along Tea-Horse highland routes.",
        modernClustersEn: "Chengdu–Mianyang aviation jets, Intel wafer packaging, clean hydro exports, and celebrated Baijiu liquor (Wuliangye).",
        hubsAndCorridorsEn: "Tianfu International Aviation Hub paired seamlessly with Chengdu–Chongqing corridor railways reaching Beibu Gulf.",
        vietnamAseanLinkEn: "Rising market for tropical ASEAN agricultural produce alongside robust Vietnamese heritage tourism to Jiuzhaigou."
      },
      stationsEn: [
        "Mega Southwest terminal linking Chongqing (1h15), Xi'an (3h20) & Jiuzhaigou corridors",
        "Seamless cross-platform Metro Lines 2/6 connection straight to Dujiangyan"
      ]
    },
    "prov-guizhou": {
      typeEn: "Province",
      regionLabelEn: "Southwest China",
      highlightsEn: "Huangguoshu Waterfall, Qianhu Miao village stilts, Longchang (where Wang Yangming achieved enlightenment), Moutai distillery.",
      economyEn: "China's National Big Data Hub (Apple, Huawei, Tencent cool data centers) alongside Earth's highest canyon mega-bridges.",
      landmarkEn: "Huangguoshu Grand Waterfall, Anshun (安顺黄果树大瀑布)",
      bestSeasonEn: "May – October (thundering cascade flows & cool 22 °C plateau refuge from lowland summer heat)",
      cuisineEn: "Miao Crimson Fermented-Tomato Sour Fish Hotpot (凯里酸汤鱼), Guiyang Crispy Duck, Rice Rolls Siwawa",
      travelTipEn: "Minority Miao & Dong counties connect 100% smoothly today via engineering-marvel mountain canyon HSR lines.",
      economyAndIndustryEn: "Transformed into 'China's Big Data Valley' around Gui'an using cool misty temperatures and cheap hydro to power Apple iCloud China, Huawei Cloud, and Tencent Vaults alongside the 500 m Pingtang FAST Radio Telescope, top-valued Kweichow Moutai, and 45+ of Earth's 100 tallest bridges!",
      vietnamConnectivityEn: "Sitting straight along the Guiyang–Guangxi New Land-Sea rail corridor moving Vietnamese phosphates, minerals, and fruit northward. Guizhou University and Guizhou Normal University exchange vibrant ethnic-craft research and big-data scholars.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named from Gui Mountain outside Guiyang when founded officially by Ming Yongle (1413); abbreviated 黔 (Qian) reviving Qin Qianzhong Commandery ('deep black' misty primeval woods).",
        capitalCityEn: "Guiyang (贵阳市 Guìyáng Shì — 'Cool Forest City')"
      },
      geoEn: {
        summaryEn: "Eastern Yunnan–Guizhou Karst Plateau on Step 2 — China's SOLE province entirely devoid of genuine flat plains (>92.5% sculpted limestone peaks and abyssal canyons!), yet standing ~1,100 m high blesses misty cloudy Guiyang with refreshing 23 °C summer comfort.",
        causalityEn: "Inaccessible karst clefts preserved >18 distinct minority languages and gleaming Miao silver customs across centuries ('Every 10 li brings distinct dialect'). Ancient salt scarcity ('Salt precious as gold in Qian') forced villagers to ferment chilies with sticky rice & wild forest tomatoes — inventing sour-spicy cuisine."
      },
      historicalEvolutionEn: "Ancient Yelang Kingdom; 1413 Ming abolishment of chieftain rule planting Tunpu garrisons from Jiangnan; 1508 philosophical watershed when exiled Wang Yangming achieved 'Longchang Enlightenment' (Unity of Knowledge and Action!); 1935 Zunyi Conference; and 21st-century 'World Museum of Mountain Bridges'.",
      culturalIdentityEn: "Dazzling silver-and-indigo multi-ethnic hospitality — Miao antiphonal Sister Festivals, Dong Drum Towers without a single nail — interwoven cleanly with 600-year Anshun Ming military dialect islands and Wang Yangming Mind-Learning reverence.",
      intangibleHeritageEn: "UNESCO Polyphonic Dong Grand Choirs (performed without instruments!), intricate Southeast Miao filigree silvercraft & relief embroidery, wax-resist indigo Batik, ancient Maotai sorghum fermentation, and Anshun Di Opera masks.",
      culinaryEn: {
        styleOverviewEn: "Qiancai swears 'Three days lacking sour makes legs stumble' — turning natural fermented wild red-tomato broths, rice-water sourness, and earthen chili 'Zaola' into bright, uplifting, appetite-waking comfort.",
        dishesEn: [
          "Provincial emblem simmering living river fish inside bubbling lacto-fermented scarlet forest-tomato & sticky-rice soup spiced warmly with citrusy mountain Litsea herb.",
          "Guiyang delicacy wrapping wafer-thin palm wheat crepes around shredded radish, bean sprouts & kelp finished by a ladle of sour fermented tomato-chili oil.",
          "Auspicious Guiyang morning ritual ('Long-life & Prosperity Noodles'): springy golden egg noodles piled crisp with spiced intestines, tender blood pudding, and crunchy chili oil crackers.",
          "Unlike dry spicy Chongqing versions, tender chicken braised sticky inside hand-pounded Ciba sticky-chili garlic paste bursting warm aroma.",
          "Whole spiced crisp Qingyan braised trotters dipped alongside pungent aromatic Houttuynia (Zhe'ergen — fish mint) chili sauce."
        ]
      },
      heritagesEn: [
        { nameEn: "Libo South China Karst (UNESCO 2007)", significanceEn: "Lush karst forest cradling emerald Little Seven-Arch pools and 68-step limestone waterfalls." },
        { nameEn: "Chishui Danxia & Mount Fanjing (UNESCO 2018)", significanceEn: "Iconic narrow stone pillar 'Mushroom Rock' & Twin Red Cloud Golden Temples spanning abysses via stone arch." },
        { nameEn: "Huangguoshu Grand Waterfall", significanceEn: "Asia's grandest 77.8 m-tall, 101 m-wide cascade allowing hikers directly inside Water Curtain Cave behind crashing spray." },
        { nameEn: "Xijiang Thousand-Household Miao & Zhaoxing Dong", significanceEn: ">1,400 terraced wooden Miao stilt cottages aglow at dusk amid crisp lusheng reed pipes." },
        { nameEn: "Guiyang Jiaxiu Tower, Yangming Shrine & Zunyi Site", significanceEn: "1598 river pavilion crowning Nanming rapids beside historic Zunyi courtyard." }
      ],
      figuresEn: [
        "Transcendent Ming philosopher achieving 1508 Longchang Awakening right here, unlocking 'Unity of Knowledge & Action'.",
        "Incorruptible late-Qing Sichuan Viceroy from Zhijin famed equally for clean reform and coining 'Kung Pao Chicken'.",
        "19th-century Zunyi/Dushan classical bibliophiles rescuing precious lost Chinese texts from Japanese monastery archives."
      ],
      echoEn: { workTitleEn: "To Wang Changling Demoted to Longbiao (闻王昌龄左迁龙标)", authorEn: "Li Bai (李白)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Qian Salt–Mercury–Cinnabar Trail Packers hauling rock salt up perilous canyon stairs from Sichuan–Guangdong.",
        modernClustersEn: "'National Big Data Valley' (Apple, Huawei, Tencent vaults), Pingtang FAST radio telescope, and Kweichow Moutai.",
        hubsAndCorridorsEn: "Engineering-marvel cable-stayed skyway bridges stitching Chengdu–Guiyang–Guilin–Guangzhou lines seamlessly.",
        vietnamAseanLinkEn: "Direct high-speed rail line funneling southward cleanly into Guangxi export ports & Lang Son border gates."
      },
      stationsEn: [
        "Mountain mega-hub connecting Kunming (2h15), Guangzhou (4h30) & Guilin",
        "Direct HSR portal just 40 minutes from Xijiang Miao Village"
      ]
    },
    "prov-yunnan": {
      typeEn: "Province",
      regionLabelEn: "Southwest China",
      highlightsEn: "Lijiang & Dali Ancient Towns, Stone Forest, Honghe Hani Terraces, Tea-Horse Road & 25 diverse ethnic nationalities.",
      economyEn: "Borders Lao Cai–Ha Giang–Lai Chau–Dien Bien (Vietnam); China–Laos rail gate, Asia's #1 fresh flower market & Pu'er tea.",
      landmarkEn: "Lijiang Old Town Beneath Jade Dragon Snow Mountain (丽江古城与玉龙雪山)",
      bestSeasonEn: "Year-round 'Spring City'; peak beauty November – March (water-mirror Hani terraces & Siberian gulls on Dianchi)",
      cuisineEn: "Crossing-the-Bridge Rice Noodles (过桥米线), Wild Mushroom Hotpot, Steam-Pot Chicken, Fresh Rose Pastries",
      travelTipEn: "Enter effortlessly overland or rail via Hanoi – Lao Cai – Hekou North station to Kunming, continuing cleanly by HSR to Dali–Lijiang–Shangri-La.",
      economyAndIndustryEn: "Asia's #1 cut-flower auction at Dounan Kunming (supplying >70% of China's flowers and exporting across SE Asia), Global #1 Pu'er fermented tea & Yunnan Baiyao panax notoginseng pharma, 90% hydro-powered green aluminum, plus rail hubs opening onto Vietnam and Laos.",
      vietnamConnectivityEn: "Unmatched ecological & historical kinship with Northern Vietnam: sharing Red River water & the historic 1910 Yunnan–Vietnam Metre-Gauge Railway (Haiphong–Lao Cai–Hekou–Kunming), now upgrading with the 1,435 mm standard-gauge Lao Cai–Hanoi–Hai Phong alignment! Ho Chi Minh networked in Kunming/Kaiyuan in 1940; Yunnan Univ., Yunnan Normal, and Kunming Medical award generous provincial scholarships.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Coined by Emperor Wu of Han meaning 'South of Cloudy Peaks'; alternate character 滇 (Dian) honors the sophisticated Bronze-Age Dian Kingdom circling Lake Dianchi.",
        capitalCityEn: "Kunming (昆明市 Kūnmíng Shì — 'Spring City')"
      },
      geoEn: {
        summaryEn: "Southwest frontier plunging dramatically from 6,740 m Tibetan–Yunnan Three Parallel Rivers glaciated peaks down across Kunming's 1,900 m eternal-spring plateau into steamy tropical Mekong and Red River valleys harboring seven climatic belts inside one province.",
        causalityEn: "Deep north–south Hengduan river canyons isolated valleys preserving China's peak cultural mosaic (25 resident minorities — Yi, Bai, Hani, Dai, Naxi, Tibetan, Miao). Caravan passes climbing toward Tibet birthed Tea-Horse compressed Pu'er bricks while damp misty peaks breed over 250 gourmet wild mushroom species."
      },
      historicalEvolutionEn: "1.7-million-year Yuanmou hominids; Bronze Dian kettle-drum artisans paralleling Vietnamese Dong Son culture; Tang–Song Kingdoms Nanzhao & Dali; Yuan provincial integration; Ming maritime explorer Zheng He & geographer Xu Xiake; and 1938–46 Wartime National Southwest Associated University citadel in Kunming.",
      culturalIdentityEn: "Unbounded multi-ethnic kaleidoscope slowing time harmoniously — Naxi Dongba living pictographs in Lijiang, poetic Dali Bai 'Wind–Flower–Snow–Moon', joyous Xishuangbanna Dai Water-Splashing, and millennial Pu'er mountain tea reverence.",
      intangibleHeritageEn: "UNESCO Memory-of-the-World Naxi Dongba living hieroglyphics, Dali Bai indigo tie-dye Batik, Nixi black-clay Tibetan pottery, aged compressed Pu'er tea ('History you can drink'), and Dai Water-Splashing New Year.",
      culinaryEn: {
        styleOverviewEn: "Diancai showcases extraordinary botanical alchemy: >250 wild seasonal highland mushrooms (Matsutake, Termitomyces, Porcini), edible fresh flowers ('Consuming blooms in spring; hunting mushrooms in rain'), paired alongside dry-cured Xuanwei mountain hams.",
        dishesEn: [
          "Ingenious Mengzi ritual: scalding golden-fat layer sealing boiling chicken broth without rising steam into which diners dip wafer-thin raw meat, quail egg & fresh slippery rice noodles tableside.",
          "Hollow-spired unglazed Jianshui purple-clay steamer condensing crisp pure chicken-ginger-Sanqi root nectar exclusively from swirling steam — never touching tap water.",
          "Monsoon gourmet June–September climax simmering dozens of pristine wild mountain mushrooms cleanly inside old hen stock for intense forest umami.",
          "Three-year highland dry-cured Xuanwei ham legs matched cleanly alongside flaky warm bakery pastries oozing crushed honey-marinated red rose petals.",
          "Zesty Xishuangbanna banana-leaf banquet sharing tangy lemongrass grilled fish, chili lime dips & toasted purple pineapple rice echoing Tai–Northwest Vietnam."
        ]
      },
      heritagesEn: [
        { nameEn: "Old Town of Lijiang (UNESCO 1997)", significanceEn: "800-year wall-free Naxi timber town threaded by triple crystal-clear canal sluices beneath Jade Dragon Glacier." },
        { nameEn: "Cultural Landscape of Honghe Hani Rice Terraces (UNESCO 2013)", significanceEn: "1,300-year ecological 'Forest–Village–Terrace–River' gravity system climbing >3,000 steps above the Red River." },
        { nameEn: "Stone Forest Karst & Three Parallel Rivers (UNESCO)", significanceEn: "Jagged gray limestone spires plus three mighty Eurasian rivers racing side-by-side down 3,000 m gorges." },
        { nameEn: "Cultural Landscape of Old Tea Forests of Jingmai Mountain (UNESCO 2023)", significanceEn: "Earth's first UNESCO Tea Heritage: millennial wild old-growth tea trees cultivated organically beneath forest canopies." },
        { nameEn: "Three Pagodas of Dali & Songzanlin Lamasery", significanceEn: "9th-century Nanzhao Qianxun Pagoda mirroring Erhai Lake paired with Yunnan's grandest 'Little Potala' monastery." }
      ],
      figuresEn: [
        "Great Ming Navigator from Kunyang commanding seven monumental ocean treasure fleets across the Indian Ocean (1405–1433).",
        "Gifted Kunming composer who scored the stirring *March of the Volunteers*.",
        "Exiled Ming top palace laureate Yang Shen penning the eternal opening lyric to *Romance of the Three Kingdoms* ('Rolling Yangtze flows ever east...')."
      ],
      echoEn: { workTitleEn: "180-Character Grand View Pavilion Couplet (大观楼长联)", authorEn: "Sun Ranweng (孙髯翁)", dynastyEn: "Qing Qianlong Era" },
      commercialEn: {
        historicalGuildEn: "Dian Merchants marching mule caravans up Tea-Horse passes alongside the historic 1910 Haiphong–Kunming railway.",
        modernClustersEn: "Asia's #1 Fresh Cut-Flower Auction (Dounan Kunming), Pu'er ancient tea, Yunnan Baiyao pharma & green hydro aluminum.",
        hubsAndCorridorsEn: "Hekou–Lao Cai overland border gateway connecting Kunming directly with Hanoi, Hai Phong, and Vientiane.",
        vietnamAseanLinkEn: "Border neighbor sharing the Red River Basin, new 1,435mm rail alignment plans & year-round cross-border agriculture."
      },
      stationsEn: [
        "Border terminal opposite Lao Cai — fast connections to Mengzi & Kunming",
        "Southwest trunk hub opening Dali (2h) & Lijiang (3h30)",
        "Gateway straight onto Lijiang Ancient Town & Shangri-La plateau rail"
      ]
    },
    "prov-shaanxi": {
      typeEn: "Province",
      regionLabelEn: "Northwest China",
      highlightsEn: "13-dynasty imperial Chang'an (Xi'an), Terracotta Army, Giant Wild Goose Pagoda, Mausoleum of Yellow Emperor, Qinqiang Opera.",
      economyEn: "Premier national aerospace–defense hub (Yanliang aircraft/rockets), Samsung NAND flash chips, BYD EVs & Chang'an Europe Rail.",
      landmarkEn: "Qin Terracotta Army Vault No. 1, Xi'an (西安秦始皇帝陵兵马俑)",
      bestSeasonEn: "March – May & September – November (breezy clear weather cycling Xi'an Ancient City Walls)",
      cuisineEn: "Stewed-Pork Flatbread Roujiamo (肉夹馍), Belt-Wide Oil-Seared Biangbiang Noodles, Mutton Bread-Crumb Soup",
      travelTipEn: "Hire vetted guides or official audio headsets at Terracotta Warriors and Shaanxi History Museum to decode every layer.",
      economyAndIndustryEn: "Nation's primary aerospace R&D citadel (Yanliang building Y-20 heavy airlifters, C919 wings & Long March engines) plus Samsung's giant NAND wafer fab, BYD's premier EV complex, solar leader LONGi Green Energy, and the busiest inland port launching Chang'an Eurasia cargo trains.",
      vietnamConnectivityEn: "Ancient Tang Chang'an welcomed gifted Dai Viet laureates — famously Khuong Cong Phu placing Top Imperial Exam Scholar (780 CE) and serving as Tang Chancellor! Today Xi'an Jiaotong Univ. (C9), NWPU (Aerospace 985), Northwest Univ., and Xidian train many Vietnamese engineers beside direct Xi'an–Vietnam flights.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Meaning 'Land West of Shan Plateau' (modern Sanmenxia, where Dukes of Zhou & Shao partitioned governance); alternate symbol 秦 (Qin) recalls the Warring States Guanzhong empire unifying China (221 BCE).",
        capitalCityEn: "Xi'an (西安市 Xī'ān Shì — Ancient Imperial Chang'an 长安)"
      },
      geoEn: {
        summaryEn: "Three crisp climatic belts bisect north-to-south down Step 2: gullied dry Northern Shaanbei Loess Plateau (Yan'an), rich alluvial 800-li Guanzhong Plain around the Weihe River, and towering Mount Qinling spine (3,771 m — China's natural North–South divide!) plunging toward humid subtropical Hanzhong.",
        causalityEn: "Four strategic mountain passes ringed fertile Guanzhong as an impregnable natural citadel nurturing 1,100 uninterrupted imperial capital years across Zhou, Qin, Han & Tang. Fierce desert winds inspired deep loess cave dwellings (Yaodong), echoing Xintianyou songs, and mammoth basin noodle bowls ('Eight Weird Wonders')."
      },
      historicalEvolutionEn: "6,000-year Banpo Neolithic matriarchal village; Western Zhou Feng–Hao; 221 BCE First Emperor's Xianyang & Lingtong tomb; Zhang Qian opening Han Chang'an Silk Road (138 BCE); cosmopolitan Tang Chang'an (1M population welcoming Persians & Dai Viet scholars); and Yan'an revolutionary base (1935–47).",
      culturalIdentityEn: "Dignified heroic Guanzhong spirit breathing grand Han–Tang classicism — roaring Qinqiang opera percussion, unmatched historical consciousness matching Sima Qian's *Shiji* hometown at Hancheng, stone Forest-of-Steles calligraphy, and proud simple rustic warmth.",
      intangibleHeritageEn: "High-soaring intense Qinqiang Opera with bold painted masks, delicate Huaxian shadow puppets, UNESCO Chang'an Ancient Ensemble winds & chimes, vivid Huxian peasant paintings, and stone seal-rubbing artistry.",
      culinaryEn: {
        styleOverviewEn: "Shancai descends directly from Zhou–Qin–Tang royal Guanzhong wheat banquets woven tightly together with fragrant cumin-mutton Muslim Quarter ('Huiminjie') Halal grilling & slow meat stewing.",
        dishesEn: [
          "Humanity's earliest hamburger: crisp tiger-stripe wood-baked Baijimo flatbread stuffed dripping warm with minced thirty-year master-stock braised fatty pork belly.",
          "Participatory Xi'an banquet: diners tear firm unleavened pancakes into bean-sized bits cooked rapidly inside steaming aromatic lamb-marrow broth with glass noodles & pickled garlic.",
          "Broad belt-wide hand-pulled wheat ribbons crowned warm in heaps of crushed garlic, scallions & fiery Qin chili flakes flash-seared with boiling rapeseed oil.",
          "Silky cool hand-steamed rice/wheat noodles drenched cleanly in fragrant bright Qin chili oil, black vinegar, crunchy bean sprouts & chewy gluten blocks.",
          "'Top Chang'an Banquet Dish': whole yellow hen simmered, steamed tender, then flash-fried golden brown intact resembling a crisp gourd dusted cleanly in Sichuan pepper-salt."
        ]
      },
      heritagesEn: [
        { nameEn: "Mausoleum of the First Qin Emperor & Terracotta Warriors (UNESCO 1987)", significanceEn: "'Eighth Wonder of the World' — >8,000 life-sized 3rd-century BCE warriors modeled down to distinct hair-buns and shoe treads." },
        { nameEn: "Xi'an Ancient City Wall & Giant/Small Wild Goose Pagodas (UNESCO)", significanceEn: "Intact 13.7 km Ming rampart encircling the 652 CE brick tower where pilgrim Xuanzang translated 1,335 Sanskrit scrolls." },
        { nameEn: "Huaqing Imperial Hot Springs & Mount Hua (Western Peak)", significanceEn: "Tang Xuanzong–Yang Guifei palace hot springs beside China's sheerest granite knife-ridge mountain climb." },
        { nameEn: "Shaanxi History Museum & Forest of Steles (Beilin)", significanceEn: "'Pearl Treasury of Ancient Capitals' protecting Hejiacun Tang gold-silver hoards alongside ~4,000 Han–Song stone steles." },
        { nameEn: "Yellow Emperor's Mausoleum, Yan'an Baota & Hukou Falls", significanceEn: "Ancestral Huaxia pilgrimage site paired with the world's sole churning golden-silt Yellow River waterfall." }
      ],
      figuresEn: [
        "Grand Historian of Hancheng who created China's supreme biographical standard history *Records of the Grand Historian* (*Shiji*).",
        "Intrepid Han envoy whose thirteen-year Western Regions mission forged the Eurasian Silk Road in 138 BCE.",
        "Legendary Tang monk pilgrim returning from India to direct Asia's grandest Buddhist translation academy in Chang'an.",
        "Twin Tang Regular Script titans ('Yan's Sinews, Liu's Bones') Yan Zhenqing and Liu Gongquan shaping classical penmanship."
      ],
      echoEn: { workTitleEn: "Ascending Leyou Heights at Sunset (乐游原 — Chang'an)", authorEn: "Li Shangyin (李商隐)", dynastyEn: "Late Tang" },
      commercialEn: {
        historicalGuildEn: "Shaanxi Guilds (North China's oldest commercial syndicate) pioneering salt, tea & horse logistics from Chang'an toward Central Asia.",
        modernClustersEn: "Aerospace center (Y-20, Long March rocket engines, C919 wings), Samsung NAND memory & LONGi Solar World #1.",
        hubsAndCorridorsEn: "Xi'an International Inland Port launching China–Europe Express 'Chang'an' rail corridors.",
        vietnamAseanLinkEn: "Historical imperial Tang–Dai Viet scholarship (Khuong Cong Phu) beside modern solar technology trade."
      },
      stationsEn: [
        "Massive northern terminal reaching Luoyang (1h20), Chengdu (3h20) & Lanzhou (3h)",
        "Classic historic city-wall station ideal for Terracotta Army tourist shuttles"
      ]
    },
    "prov-gansu": {
      typeEn: "Province",
      regionLabelEn: "Northwest China",
      highlightsEn: "Silk Road Hexi Corridor, Dunhuang Mogao Caves, Jiayuguan Pass, Zhangye Rainbow Danxia & Lanzhou noodles.",
      economyEn: "Jiuquan manned spaceport, gigawatt Hexi wind-solar farms, Jinchang nickel-cobalt for EVs & Chinese medicinal herbs.",
      landmarkEn: "Dunhuang Mogao Caves Nine-Story Pavilion (敦煌莫高窟九层楼)",
      bestSeasonEn: "May – October (clear blue skies along the Hexi Corridor: Zhangye – Jiayuguan – Dunhuang)",
      cuisineEn: "Hand-Pulled Lanzhou Beef Noodles (兰州牛肉面), Hand-Grabbed Gansu Mutton, Apricot Skin Tea",
      travelTipEn: "Dunhuang Mogao Caves Type-A tickets (8 prime caves + dome theater) sell out weeks early in summer — reserve 1 month ahead.",
      economyAndIndustryEn: "National aerospace milestone (Jiuquan Satellite Launch Center lofting all crewed Shenzhou spacecraft), colossal Jiuquan wind-solar bases ('Land-Based Three Gorges'), Jinchang EV nickel refining, Lanzhou petrochemicals, and China's top Danggui/ginseng herbal harvests.",
      vietnamConnectivityEn: "Major inland Eurasia freight corridor supplying authentic traditional herbal remedies (Astragalus, Danggui, Licorice) to Vietnamese pharmacies alongside Lanzhou University (985 chemistry/archaeology) & Northwest Normal Silk Road academic exchanges.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Combined from Tang–Yuan Hexi oasis cities Ganzhou (Zhangye) and Suzhou (Jiuquan); alternate code 陇 (Long) marks the Longshan / Liupan divide.",
        capitalCityEn: "Lanzhou (兰州市 Lánzhōu Shì — Sole City Bisected Entirely by the Yellow River)"
      },
      geoEn: {
        summaryEn: "Narrow 1,600 km Northwest 'Ruyi scepter' — China's SOLE meeting crossroads of three massive plateaus (Loess, Mongolian & Qinghai–Tibet)! Its 1,000 km Hexi Corridor threads snow-melt Qilian Mountain oases squeezed south of Badain Jaran deserts inside arid sun-baked steppe air.",
        causalityEn: "Wedged like a windpipe between sheer glacier crags and lethal sand dunes forced every Eurasia merchant, Persian pilgrim, and monk through Hexi Corridor for 2,000 years — leaving stupendous Buddhist caves (Mogao, Maijishan) while dry Gobi sands naturally safeguarded tens of thousands of Dunhuang scrolls."
      },
      historicalEvolutionEn: "8,000-year Dadiwan settlements & legendary Fuxi hexagrams; 121 BCE General Huo Qubing opening Hexi Four Commanderies & Jade Gate Pass; Wei–Tang zenith transforming Dunhuang into Asia's cave-art crossroads; Western Xia era; and Wang Yuanlu's 1900 discovery of Cave 17 Library.",
      culturalIdentityEn: "Heroic Silk Road frontier grandeur ('Straight rises lonely desert smoke; round sinks setting sun across Long River'), rare civilizational tolerance enshrining Buddhism, Nestorian Christianity & Manichaeism side-by-side inside Dunhuang caves, greeted daily over steaming Lanzhou morning noodles.",
      intangibleHeritageEn: "Dunhuang mineral fresco restoration & Flying Apsaras classical choreography, UNESCO Hua'er mountain antiphonal folk singing, Dunhuang shadow puppets, and emerald Taohe river Taoyan Inkstones (top Four Classical Inkstones).",
      culinaryEn: {
        styleOverviewEn: "Longcai pairs clean alkali-herb-pastured desert mutton and beef free of gamey odor alongside unmatched Northwest noodle-pulling skill and high-UV honey-sweet oasis melons.",
        dishesEn: [
          "Top Chinese regional noodle following five strict color pillars: crystal beef broth, crisp clear white radish slices, glowing aromatic red chili oil, fresh green garlic chives & golden alkali-spring wheat strands pulled in nine bespoke widths.",
          "Grass-herb pastured Jingyuan mutton slow-boiled whole in crystal salted water retaining zero gaminess beside crushed cumin-garlic dips.",
          "Satin-smooth golden noodles glazed richly under braised donkey meat & fragrant shiitake mushroom ragu along old Dunhuang streets.",
          "Tianshui national sensation showcasing velvety spicy-sweet Gangu aromatic-chili skewers and starchy Dingxi highland potatoes.",
          "Sanpaotai covered-cup Eight-Treasure health infusion blending Chunjiang green tea, goji, red date, dried longan, rosebuds & rock sugar beside sweet fermented oats."
        ]
      },
      heritagesEn: [
        { nameEn: "Mogao Caves of Dunhuang (UNESCO 1987)", significanceEn: "735 Buddhist grottoes guarding 45,000 m² of frescoes and >2,400 statues from 4th–14th centuries — humanity's greatest Silk Road gallery." },
        { nameEn: "Jiayuguan Pass of the Great Wall", significanceEn: "'First and Greatest Pass Under Heaven' anchoring the western Ming fortress gate built in 1372." },
        { nameEn: "Maijishan Grottoes (Tianshui)", significanceEn: "194 honeycombed sandstone cliffs clinging precipitously above misty valleys hosting serene clay 'Oriental Venuses'." },
        { nameEn: "Zhangye Rainbow Danxia Global Geopark", significanceEn: "Layered stratified mineral siltstones rippling across scarlet, saffron, emerald, and cream waves." },
        { nameEn: "Gansu Provincial Museum & Crescent Moon Spring", significanceEn: "Perpetual spring cradled calmly amidst singing Echoing Dunes alongside the Han bronze 'Flying Horse of Wuwei'." }
      ],
      figuresEn: [
        "Valiant Han 'Flying General' Li Guang guarding Hexi borders immortalized timelessly inside Tang frontier poems.",
        "Eastern Han 'Sage of Cursive Script' Zhang Zhi of Dunhuang laying revolutionary calligraphic brushstrokes ahead of Wang Xizhi.",
        "Jin acupuncture compiler Huangfu Mi paired alongside lifelong 'Guardian Spirit of Dunhuang' Chang Shuhong protecting Mogao 50 years."
      ],
      echoEn: { workTitleEn: "Song of Liangzhou (凉州词 — Hexi Frontier)", authorEn: "Wang Han (王翰)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Two millennia of Silk Road camel caravans traversing Lanzhou, Zhangye & Dunhuang oases.",
        modernClustersEn: "Gigawatt Jiuquan wind-solar 'Land Three Gorges', Jinchang EV nickel/cobalt & Lanzhou petrochemicals.",
        hubsAndCorridorsEn: "Hexi Corridor — historic land bridge funneling from Central China straight toward Xinjiang & Central Asia.",
        vietnamAseanLinkEn: "Buddhist cave conservation dialogue alongside authentic bulk TCM medicinal roots imports (Danggui, Astragalus)."
      },
      stationsEn: [
        "Northwest rail gateway dispatching daily trains to Dunhuang, Zhangye & Xining",
        "15 minutes by shuttle straight into Mogao Caves Digital Visitor Center & Crescent Dunes"
      ]
    },
    "prov-qinghai": {
      typeEn: "Province",
      regionLabelEn: "Northwest / Qinghai–Tibet Plateau",
      highlightsEn: "Sanjiangyuan National Park (headwaters of Yangtze, Yellow & Mekong), Qinghai Lake, Kumbum Monastery.",
      economyEn: "China's #1 renewable-grid ratio, world-scale lithium/potash salt lakes (Qaidam Chaerhan) powering EV batteries & Cordyceps.",
      landmarkEn: "Sacred Turquoise Qinghai Lake & Golden Rapeseed Shores (青海湖油菜花)",
      bestSeasonEn: "June – August (vivid yellow canola blooms framing turquoise Qinghai Lake at 3,200 m altitude)",
      cuisineEn: "Thick Creamy Xining Yak Yogurt (老酸奶), Plateau Kang-Pot Roasted Mutton, Barley Lamb Noodles",
      travelTipEn: "Elevation averages 3,200–3,800 m: pace yourself slowly on Day 1 in Xining (~2,275 m) before climbing onward to Chaka Salt Lake.",
      economyAndIndustryEn: "Over 85% clean electric grid capacity led by gigantic Talatan solar deserts and upper Yellow River hydropower (Longyangxia), paired beside Qaidam Chaerhan Salt Lake's top-national EV Lithium/Potassium reserves and global #1 Yushu Cordyceps harvests.",
      vietnamConnectivityEn: "Supplies essential battery-grade lithium salts, potash fertilizers, and prized plateau Cordyceps beside serving as the prime altitude-acclimatization rail portal on the Qinghai–Tibet train toward Lhasa for Vietnamese travelers; Qinghai University exchanges alpine ecology scholars.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Named from Qinghai Lake ('Blue Sea' / Kokonor — China's largest inland saline basin); single symbol 青 ('Azure Green') denotes provincial identity.",
        capitalCityEn: "Xining (西宁市 Xīníng Shì — 'Cool Summer Sanctuary of the Plateau')"
      },
      geoEn: {
        summaryEn: "Northeastern bastion atop Step 1 Qinghai–Tibet Plateau (mean >3,000 m, peaks topping 6,860 m) — reverently called China's 'Water Tower' and Sanjiangyuan cradling Earth's simultaneous headwaters of Yangtze, Yellow, and Mekong Rivers beside saline Qaidam Basin gems.",
        causalityEn: "Protecting downstream freshwater security for hundreds of millions dictates strict eco-park preservation over smokestack factories. Thin crisp air and long winters bred resilient Yak herding, salty butter tea, Tibetan carpet weaving, and gleaming crystal Salt-Mirror reflections at Chaka."
      },
      historicalEvolutionEn: "Ancient Western Qiang tribes and Tuyuhun Kingdom (313–663 CE) guiding southern Silk caravans; 641 CE Princess Wencheng passing Sun-and-Moon Pass en route to Lhasa; birthplace of Gelug reformer Je Tsongkhapa (1357 at Kumbum); official 1929 provincehood; and 1950s Jinyintan atomic science base.",
      culturalIdentityEn: "Deeply serene plateau crossroads harmoniously embracing Amdo Tibetan Buddhism (Regong Thangkas, Kumbum Monastery), Hui–Salar–Tu farming towns along Huangshui valleys, and pure reverent guardianship toward sacred snowy sources.",
      intangibleHeritageEn: "UNESCO Regong Thangka gold-mineral painting & clay sculpture, intricate Kumbum Monastery Yak-butter flower reliefs, fine Jiayang Tibetan carpets, oral *Epic of King Gesar*, and Hehuang Hua'er singing.",
      culinaryEn: {
        styleOverviewEn: "Harmonizes pure high-altitude grass-fed Yak beef and plateau mutton (cooked modestly to safeguard natural mountain sweetness) beside thick cream-topped fermented Yak yogurt and spicy Halal Xining street plates.",
        dishesEn: [
          "Crisp-seared bone-in plateau lamb ribs baked tableside inside flat iron pans with sliced potatoes, peppers, and flaky dough flatbread.",
          "Iconic winter chimney-pot brass banquet stacking tender braised beef brisket, mutton, pork knuckles, pickled cabbage, and fried tofu.",
          "Dense nourishing fermented Yak milk crowned by thick golden buttercream glaze drizzled lightly with honey or raw sugar.",
          "Springy thick hand-steamed Xining wheat strips bathed brightly under aged sour vinegar, garlic soup, sesame paste, and scorching chili oil.",
          "Highland butter tea whipped creamy beside crisp golden rapeseed-oil griddle crepes fighting crisp windchill cleanly."
        ]
      },
      heritagesEn: [
        { nameEn: "Qinghai Lake & Chaka Salt Mirror Lake", significanceEn: "China's widest azure alpine lake (bright yellow canola shores in July) beside crystalline Chaka Salt Sky-Mirror flats." },
        { nameEn: "Ta'er (Kumbum) Monastery (Huangzhong, 1577)", significanceEn: "One of Tibetan Buddhism's Six Great Gelug Monasteries built atop Tsongkhapa's birthplace, famed for 'Three Wonders' butter sculpture, applique embroidery & frescoes." },
        { nameEn: "Hoh Xil (Sanjiangyuan National Reserve)", significanceEn: "4,600 m untouched wilderness safeguarding migrating Tibetan antelopes and cradle of Asia's three great rivers." },
        { nameEn: "Dachaidan Emerald Lakes & Chaerhan", significanceEn: "Miraculous mineral brine ponds shimmering jade, amber, and sapphire across Qaidam Salt Basin." },
        { nameEn: "Home of Regong Arts (Tongren, UNESCO)", significanceEn: "World summit of devotional gold-mineral Tibetan Buddhist Thangka ateliers." }
      ],
      figuresEn: [
        "Great Tibetan Buddhist Reformer Je Tsongkhapa born in Huangzhong founding the Yellow Hat Gelug tradition.",
        "Tang Princess Wencheng pausing atop Sun-and-Moon Pass in 641 before cementing enduring Han–Tibetan cultural exchange.",
        "'Song King of Western Regions' Wang Luobin composing *In That Faraway Place* amid Jinyintan grasslands."
      ],
      echoEn: { workTitleEn: "Army Ballad Across Qinghai Horizons (从军行)", authorEn: "Wang Changling (王昌龄)", dynastyEn: "High Tang" },
      commercialEn: {
        historicalGuildEn: "Plateau Tea-Horse trading bazaars linking Han, Tibetan & Hui merchants along Kokonor grass trails.",
        modernClustersEn: "Battery-grade EV Lithium & Potash salt extraction (Chaerhan) paired with massive clean solar-hydro energy bases.",
        hubsAndCorridorsEn: "Qinghai–Tibet Plateau Railway departing westward directly from Xining up toward Lhasa.",
        vietnamAseanLinkEn: "Key raw lithium salt origin supporting East Asian EV batteries alongside precious high-altitude botanicals."
      },
      stationsEn: [
        "2,275m acclimatization hub dispatching plateau trains directly onward to Lhasa"
      ]
    },
    "prov-taiwan": {
      typeEn: "Province",
      regionLabelEn: "Southeast / Island",
      highlightsEn: "Taipei National Palace Museum, Sun Moon Lake, Alishan misty forest rails, Jiufen mountain lanes, Minnan–Hakka–Austronesian fabric.",
      economyEn: "Core node of global semiconductor foundry ecosystems (>60% world chips, >90% sub-5nm advanced nodes led by TSMC), electronics & optoelectronics.",
      landmarkEn: "Sun Moon Lake Lalu Isle & Ci'en Pagoda (日月潭拉鲁岛与慈恩塔)",
      bestSeasonEn: "October – December & March – May (crisp Alishan autumn maples & spring sakura mountain rails)",
      cuisineEn: "Taipei Braised Beef Noodle Soup (牛肉面), Savory Pork Belly Luroufan (卤肉饭), Original Pearl Boba Tea & Pineapple Cake",
      travelTipEn: "Load EasyCard or iPASS to breeze seamlessly across Taipei/Kaohsiung MRT subways, mountain buses & 7-Eleven shops.",
      economyAndIndustryEn: "Linchpin 'Silicon Shield' of modern electronics manufacturing >60% of global chips and >90% sub-5nm logic nodes centered around TSMC (Hsinchu–Taichung–Tainan Science Parks), MediaTek, Foxconn, ASUS, ASE OSAT & Giant Bicycles.",
      vietnamConnectivityEn: "Among top cumulative FDI investors into Vietnam's industrial belts (Foxconn/Pegatron electronics in Bac Giang–Hai Phong, footwear, Formosa steel/textiles) with >400,000 vibrant Vietnamese students, professionals, and families at NTU, NTHU, NYCU, and NCKU.",
      identityEn: {
        adminTypeFullEn: "Province (省 Shěng)",
        abbreviationOriginEn: "Early Tainan Siraya indigenous harbor names Tayouan / Dayuan unified under Qing Taiwan Prefecture (1684); abbreviated uniformly 台 (Simplified) / 臺 (Traditional).",
        capitalCityEn: "Taipei (台北市 Táiběi Shì — Cultural, Financial & High-Tech Center)"
      },
      geoEn: {
        summaryEn: "Largest East–South China Sea tectonic island cradling the towering Central Mountain Range (Yushan/Jade Mt. 3,952 m — tallest peak across East Asia!) covering 2/3 area, separating lush western alluvial plains (Taipei–Tainan) from sheer Pacific marble cliffs under humid subtropical–tropical marine rains.",
        causalityEn: "Oceanic volcanic ridges soaring near 4,000 m nurture misty alpine Oolong tea belts (Alishan, Lishan) and relaxing geothermal hot springs (Beitou). Layered waves of Minnan, Hakka & 16 Austronesian indigenous peoples wedded Traditional Hanzi script preservation with vibrant bookstore–night-market life."
      },
      historicalEvolutionEn: "Millennial home of Austronesian seafarers; Three Kingdoms East Wu expedition (230 CE); Yuan Penghu patrol; 1624 Dutch Fort Zeelandia; 1661–62 Koxinga expelling Dutch; 1684 Qing Prefecture elevated to Province in 1885 under reformer Liu Mingchuan; post-1949 Tiger economy & TSMC semiconductor pinnacle.",
      culturalIdentityEn: "Warm neighborhood hospitality weaving vibrant Confucian–Daoist Mazu Dajia pilgrimages, living Traditional Chinese literature preservation and Taipei National Palace Museum curation smoothly beside night-market creativity, mountain cycling, and indie teahouses.",
      intangibleHeritageEn: "Epic Dajia Mazu Pilgrimage, hand-operated Budaixi Glove Puppetry, Gezaixi Taiwanese Opera, high-mountain Oolong roasting craft (Dongding, Oriental Beauty), and folk guardian deity festivals.",
      culinaryEn: {
        styleOverviewEn: "Taicai builds joyfully atop coastal Minnan–Chaoshan lightness enriched in 1949 with classic Sichuan–Jiangnan–Shandong palace skills resulting in clean aromatic snacks and world-famous Night Market creativity.",
        dishesEn: [
          "1950s Taipei immigrant invention simmering beef shank & tendon rich inside star-anise fermented bean broth atop bouncy wheat noodles and pickled mustard.",
          "Iconic soulful comfort: hand-chopped pork belly braised lustrously with crispy fried red shallots and five-spice ladled over steaming Penglai rice.",
          "Jiangnan soup dumplings refined with clockwork artisan rigor into 5g wrappers enclosing 16g juicy stock folded cleanly across 18 uniform pleats.",
          "Plump sweet-potato-starch oyster omelets topped with coral sweet sauce alongside world-conquering 1986 Taichung Spring-Water Hall black-tapioca Milk Tea.",
          "Golden flaky butter crust pastries cradling naturally tart fiber-rich native winter melon & pineapple jam — quintessential island gift."
        ]
      },
      heritagesEn: [
        { nameEn: "National Palace Museum, Taipei (Shilin)", significanceEn: "Stewarding ~700,000 imperial palace masterpieces transferred 1948–49: Jadeite Cabbage, Mao Gong Ding, *Fuchun Mountains* & *Early Spring*." },
        { nameEn: "Sun Moon Lake & Alishan Forest Mountain Railway", significanceEn: "Alpine emerald basin connected to misty narrow-gauge steam tracks climbing millennial red cypress groves." },
        { nameEn: "Taroko Marble Gorge (Hualien)", significanceEn: "Sheer river canyon carved dramatically by the Liwu River straight down solid coastal marble." },
        { nameEn: "Tainan Chihkan Tower, Anping Fort & 1665 Confucius Temple", significanceEn: "Taiwan's inaugural Academy ('First School of Taiwan') & 17th-century Koxinga historical bastions." },
        { nameEn: "Jiufen Gold-Mine Hillside Streets", significanceEn: "Lantern-lit stepped mountain slope alleys perched wistfully above northern Keelung ocean mists." }
      ],
      figuresEn: [
        "Resolute Ming loyalist from Nan'an who evicted Dutch forts at Tainan in 1662 securing coastal Chinese institutions.",
        "Tainan historian compiling comprehensive *General History of Taiwan* (1920) guarding cultural continuity across colonial transitions.",
        "Semiconductor foundry pioneer Morris Chang restructuring global tech alongside master New-Wave auteur Hou Hsiao-hsien (*A City of Sadness*)."
      ],
      echoEn: { workTitleEn: "Gazing at Jade Mountain Across Pacific Waters (裨海纪游)", authorEn: "Yu Yonghe (郁永河)", dynastyEn: "Qing Kangxi Era (1697)" },
      commercialEn: {
        historicalGuildEn: "Lukang & Tainan Three Merchant Guilds connecting coastal Minnan junk shipping routes across centuries.",
        modernClustersEn: "Undisputed core of global silicon foundry manufacturing (TSMC Hsinchu–Tainan), machine tooling & alpine Oolong.",
        hubsAndCorridorsEn: "Kaohsiung Deep Harbor & Taoyuan Semiconductor Air-Cargo Terminal routing global electronics smoothly.",
        vietnamAseanLinkEn: "Major direct investor in Vietnam electronics assembly (Foxconn, Wistron), footwear & technical higher education."
      },
      stationsEn: [
        "Unified HSR & conventional spine reaching Taichung (50m) & Kaohsiung (90m)"
      ]
    },
    "prov-inner-mongolia": {
      typeEn: "Autonomous Region",
      regionLabelEn: "North China / Steppe",
      highlightsEn: "Endless Hulunbuir prairies, Genghis Khan Mausoleum, Naadam wrestling/horse festival, echoing Morin Khuur horsehead fiddle.",
      economyEn: "World's #1 Rare Earths Hub (Baotou >50% global refining), Asia's dairy giants (Yili & Mengniu), wind-solar energy & coal.",
      landmarkEn: "Hulunbuir Grasslands & Winding Morigele River (呼伦贝尔大草原)",
      bestSeasonEn: "June – September (lush emerald grasslands across Hulunbuir & summer Naadam festivals)",
      cuisineEn: "Roasted Whole Lamb (烤全羊), Salted Brick Milk Tea (咸奶茶), Hand-Grabbed Lamb & Clotted Milk Curd",
      travelTipEn: "Prairie landmarks span vast distances — hire licensed local drivers along the classic Hailar – Manzhouli steppe loop.",
      economyAndIndustryEn: "Global #1 in Rare Earths from Bayan Obo (Baotou refining over half world EV magnet rare earths!); anchors China's dairy crown via HQ titans Yili & Mengniu in Hohhot alongside mammoth Kubuqi desert wind-solar farms, Ordos coal chemistry, and cashmere.",
      vietnamConnectivityEn: "Channeling rail trade through Manzhouli & Erenhot corridors while exporting dairy nutrition lines and EV permanent-magnet materials alongside Inner Mongolia Univ. (211 ecology/Mongolian studies) academic exchange.",
      identityEn: {
        adminTypeFullEn: "Autonomous Region (自治区 Zìzhìqū)",
        abbreviationOriginEn: "Unique three-character abbreviation 内蒙古 (usually short-coded 蒙 Meng in transport), denoting 'Inner Mongolian Leagues' situated interior to the Gobi Desert relative to Central China.",
        capitalCityEn: "Hohhot (呼和浩特市 Hūhéhàotè Shì — Mongolian: 'Blue City')"
      },
      geoEn: {
        summaryEn: "Expansive 2,400 km steppe crescent hugging eight northern provinces (China's #3 largest unit at 1.18M km²) spanning Greater Khingan forests, lush Hulunbuir prairies east across Ordos Yellow River 'Horse-Shoe' Bend to sweeping Badain Jaran & Tengger deserts west in brisk sunny continental winds.",
        causalityEn: "Oceanic pasture horizons unsuitable for fragile rice paddies nurtured three millennia of equestrian nomadic brilliance (Xiongnu, Xianbei, Khitan, Mongols) — birthing portable felted Gers ('Yurts'), high-protein lamb/horsemeat nutrition, and salty clotted dairy teas battling bitter gales cleanly."
      },
      historicalEvolutionEn: "Stage of Warring States King Wuling of Zhao's cavalry tunic reform; Han Zhaojun Tomb cementing 60-year steppe peace; Tuoba Xianbei founding Northern Wei; Khitan Liao & Kublai Khan's UNESCO Yuan Xanadu ('Shangdu') summer capital; and May 1947 founding of China's FIRST provincial-level Autonomous Region.",
      culturalIdentityEn: "Expansive steppe chivalry honoring guests first with a bowl of airag mare's milk and sky-blue silk Khata scarf, soaring throat-singing over horsehead Morin Khuur strings under traditional vertical Mongolian script signage beside Hanzi.",
      intangibleHeritageEn: "UNESCO Urtiin Duu 'Long Song' pastoral lyrics & supernatural dual-pitch Khoomei throat singing, UNESCO Morin Khuur horsehead fiddle crafting, and joyous Summer Naadam Triad (Mongol wrestling, saddle-less horse racing, archery).",
      culinaryEn: {
        styleOverviewEn: "Mengcan celebrates China's highest-acclaimed sweet pasture mutton raised organically atop alkali wild herbs (zero synthetic feed), paired alongside rich salted brick tea & thick milk crust dairy delicacies framed around wood-ember roasting.",
        dishesEn: [
          "Boiling water + pinch pure rock salt turning grass-fed Xilingol lamb ribs silk-tender without a speck of masking spice — or festive golden flame-crisped whole roast sheep.",
          "Copper-kettle boiled dark brick tea enriched seamlessly with foaming fresh whole cow's milk, sea salt, dried beef jerky strips, millet puffs & cream skin.",
          "Inventive Hulunbuir sensation piling raw tender lamb atop pure crushed crystal ice, onions & wine so melting vapor locks unmatched sweet juiciness.",
          "Iconic Hohhot halal morning treat crowding juicy minced garlic-ginger lamb snugly inside open floral wheat-dough purses dipped gently alongside strong brick tea.",
          "Slow-skimmed rich ivory milk-cream crusts ('Naipizi') and pressed lightly salted prairie cottage cheeses ('Milk Tofu')."
        ]
      },
      heritagesEn: [
        { nameEn: "Site of Xanadu — Yuan Shangdu (UNESCO 2012)", significanceEn: "Kublai Khan's 1256 palatial summer city whose gilded splendor amazed Marco Polo and ignited European imagination." },
        { nameEn: "Hulunbuir Grasslands & Erguna Birch Wetlands", significanceEn: "One of Earth's four grandest undisturbed prairie-wetland horizons stretching horizon-to-horizon." },
        { nameEn: "Resonant Sand Bay (Whistling Dunes) & Genghis Khan Mausoleum", significanceEn: "Singing Ordos dunes paired with centuries-old Mongolian Eight-White-Yurt ancestral flame rites." },
        { nameEn: "Arxan Volcanic Geopark", significanceEn: "Crater sky lakes beside mist-wreathed unfrozen winter rapids deep inside Greater Khingan spruce woods." },
        { nameEn: "Dazhao Silver Buddha Temple & Zhaojun Museum", significanceEn: "1579 Tibetan–Mongol Hohhot shrine safeguarding a solid silver Sakyamuni alongside Zhaojun's 2,000-year memorial mound." }
      ],
      figuresEn: [
        "Reformist Warring States ruler of Zhao inaugurating practical nomadic riding pants and mounted archery at Baotou–Hohhot.",
        "Architects of the vast Eurasian Mongol Empire anchored northward across Hulunbuir & Summer Capital Xanadu.",
        "Beloved contemporary bilingual lyricist Xi Murong whose poignant Chinese poems (*Seven-Mile Fragrance*) mourn ancestral steppe streams."
      ],
      echoEn: { workTitleEn: "Song of the Chile Prairie (敕勒歌 — Northern Dynasties)", authorEn: "Hulü Jin / Anonymous Nomad Bard", dynastyEn: "Northern Qi (6th Century CE)" },
      commercialEn: {
        historicalGuildEn: "Dashengkui Syndicates (Largest Shanxi–Hui trading firm) supplying brick tea across Outer Mongolia and Siberia.",
        modernClustersEn: "Global Rare-Earth Refining Capital (Baotou), Asian Dairy Titans (Yili/Mengniu), Wind Power & Ordos Cashmere.",
        hubsAndCorridorsEn: "Manzhouli & Erenhot dry rail border gateways linking Beijing onward through Siberia toward Europe.",
        vietnamAseanLinkEn: "Major nutritional dairy exporter paired with clean EV motor rare-earth magnet element trade."
      },
      stationsEn: [
        "High-speed line running just 2h15 north from Beijing North",
        "Rare-earth center & convenient gateway onto the Kubuqi sand dunes"
      ]
    },
    "prov-guangxi": {
      typeEn: "Autonomous Region",
      regionLabelEn: "South China (Lingnan)",
      highlightsEn: "Guilin–Yangshuo Li River karst, Zuojiang Huashan rock art (UNESCO), Ancient Lingqu Canal, Detian–Ban Gioc Falls, Zhuang heritage.",
      economyEn: "Direct border neighbor to Lang Son–Cao Bang–Quang Ninh (Vietnam); hosts annual China–ASEAN Expo (CAEXPO) & Pinglu Canal Corridor.",
      landmarkEn: "Karst Towers Along Li River, Guilin–Yangshuo (桂林阳朔漓江山水)",
      bestSeasonEn: "April – October (full jade Li River flows & Longji Terraces flooded/golden in September–October)",
      cuisineEn: "Liuzhou Tangy Snail Noodles (螺蛳粉), Guilin Spiced Rice Noodles, Nanning Old-Friend Rice Noodles, Beer-Stewed Li Fish",
      travelTipEn: "Seamless rail/cross-border bus access straight from Hanoi–Lang Son through Friendship Pass (Huu Nghi) onward to Nanning & Guilin.",
      economyAndIndustryEn: "China's #1 land-sea ASEAN Gateway hosting yearly CAEXPO in Nanning! Carving the monumental 134 km Pinglu Canal straight out to Beibu Gulf ports (trimming 560 km for western ocean cargo), paired beside Liuzhou Wuling Mini EV factories (seen across Vietnam!) and LiuGong heavy excavators.",
      vietnamConnectivityEn: "Unparalleled border intimacy: **Friendship Pass (Lang Son)** and **Dongxing (Mong Cai)** carry >70% of Vietnam–China overland agricultural & electronics trade (durian, dragon fruit, jackfruit) paired with direct Gia Lam–Pingxiang–Nanning rail. Hosts enormous Vietnamese student bodies at Guangxi Univ., Guangxi Minzu, Medical & Normal Universities (remembering Ho Chi Minh's historic 1940s Liuzhou–Jingxi trail!).",
      identityEn: {
        adminTypeFullEn: "Autonomous Region (自治区 Zìzhìqū)",
        abbreviationOriginEn: "Abbreviated from Song 'Guangnan West Circuit' seated at Guizhou; symbol 桂 (Gui) honors Guilin ('Osmanthus Forest') fragrant since Qin Ling Canal times.",
        capitalCityEn: "Nanning (南宁市 Nánníng Shì — 'Green City of China–ASEAN')"
      },
      geoEn: {
        summaryEn: "Southwest borderland sharing mountains and Beibu Gulf seas directly with Northern Vietnam descending gracefully off Guizhou limestone rims onto Earth's supreme Tower Karst peaks across Guilin, Yangshuo & Chongzuo under lush warm monsoon rains nearly identical to Hanoi.",
        causalityEn: "Millions of years of rainwater carving soluble limestone sculpted iconic peak forests mirrored in Li River pools, prompting 214 BCE Qin Ling Canal uniting Yangtze and Pearl deltas. Identical monsoon ecology binds Zhuang antiphonal singing, bronzes, rice cultivation & tangy rice-noodle culture directly alongside Vietnam."
      },
      historicalEvolutionEn: "Ancient Luoyue–Ouyue bronze-drum builders painting Zuojiang Huashan cliff murals (>2,000 years ago!); 214 BCE Qin Engineer Shi Lu cutting Lingqu Canal; 1958 Guangxi Zhuang Autonomous Region (nurturing China's top 17M minority sharing Kra–Dai ancestry with Vietnamese Tay–Nung); and 1940s Ho Chi Minh–Vietnamese liberation footprints.",
      culturalIdentityEn: "Vibrant 'Eight-Gui' harmony blending joyous Zhuang March-3rd moonlit mountain-song duets ('Sister Liu Sanjie'), sacred frog/bronze-drum totems, Yao–Miao–Dong Wind-and-Rain bridges, Tang–Song Guilin landscape calm, and dynamic Nanning ASEAN hospitality.",
      intangibleHeritageEn: "Zhuang 'Third-Day Third-Month' song carnivals, luminous Zhuang Brocade (cranes & bronze drum geometry), Jingxi auspicious embroidered Xiuqiu balls, bronze-drum casting, and Gongcheng savory oil-tea beating.",
      culinaryEn: {
        styleOverviewEn: "Guicai dazzles nationwide less through palace pomp than an unrivaled **Empire of Silky Rice Noodles** ('All Fine Fen Resides in Guangxi') anchored in identical aromatic sweet-sour fermented bamboo shoots, pickled greens & green mango flavors dearly familiar across Northern Vietnam!",
        dishesEn: [
          "Billion-dollar global craze: bouncy rice vermicelli soaked deep inside fragrant bone-and-river-snail herbal broth electrified by punchy fermented sour bamboo ('Suan Sun'), crisped yuba skin & chili oil.",
          "Authentic Guilin local breakfast (eaten dry first, broth sipped beside): snowy steamed noodles slicked tenderly in 20-herb master braised meat oil beneath crisp roasted pork & pickled cowpeas.",
          "Nanning warm comfort invented for an ailing neighbor: wide flat rice ribbons blister-fried crisp inside wok-scorched fermented black beans, fresh garlic, sour chilies & tender shredded pork.",
          "Fresh caught Li River yellow-cheek or carp seared whole scale-on crisp then simmered bubbling right inside pale local draft beer, ripe red tomatoes & crisp peppers.",
          "Fluffy lavender-veined Lipu royal taro alternated seamlessly beside melt-in-mouth caramelized five-spice braised pork belly — Qing imperial tribute dish."
        ]
      },
      heritagesEn: [
        { nameEn: "Guilin–Yangshuo South China Karst & Li River (UNESCO 2014)", significanceEn: "83 km jade waterway framed by towering limestone cones pictured directly on China's 20-RMB banknote." },
        { nameEn: "Zuojiang Huashan Rock Art (UNESCO 2016)", significanceEn: ">1,900 ochre hematite cliff figures (5th c. BCE–2nd c. CE) picturing ancient Luoyue–Zhuang ritual bronze drummers." },
        { nameEn: "Detian – Ban Gioc Transboundary Waterfall", significanceEn: "Asia's largest cross-border terraced cascade uniting Daxin (Guangxi) smoothly across Trung Khanh (Cao Bang, Vietnam)." },
        { nameEn: "Longji 'Dragon's Backbone' Rice Terraces & Chengyang", significanceEn: "650-year emerald-gold Zhuang–Yao terraced mountains climbing 1,100m paired beside nail-free Dong timber Wind-and-Rain bridges." },
        { nameEn: "Ancient Lingqu Canal (214 BCE) & Friendship Pass", significanceEn: "2,200-year contour canal linking two great water empires alongside the millennial gate joining Lang Son directly." }
      ],
      figuresEn: [
        "Beloved Zhuang Tang-legend 'Song Fairy' Liu Sanjie immortalizing folk wit over tyranny by Li River boat echoes.",
        "Exemplary Qing governor-educator Chen Hongmou of Lingui beside victorious Battle of Taierzhuang commander Li Zongren.",
        "Enduring Vietnam–China historic footprints across Longzhou, Jingxi & Liuzhou where President Ho Chi Minh composed *Prison Diary* poems."
      ],
      echoEn: { workTitleEn: "Inscribed Upon Solitary Beauty Peak, Guilin", authorEn: "Han Yu / Wang Zhenggong", dynastyEn: "Tang – Southern Song" },
      commercialEn: {
        historicalGuildEn: "214 BCE Lingqu Canal Yangtze–Pearl connector plus historic Sino–Vietnamese frontier merchant halls along Lang Son–Longzhou.",
        modernClustersEn: "Annual CAEXPO Nanning Hub, Liuzhou Wuling Urban Mini-EVs (SGMW), LiuGong machinery & 134km Pinglu Beibu Canal.",
        hubsAndCorridorsEn: "Friendship Pass (Pingxiang–Lang Son) & Dongxing–Mong Cai Smart Gates anchoring direct Vietnam–China land trade.",
        vietnamAseanLinkEn: "China's #1 overland border trading gate handling prime shares of Vietnamese tropical fruit, timber, and industrial parts."
      },
      stationsEn: [
        "Direct HSR portal framing misty Li River Karst & Yangshuo ferries",
        "International frontier rail station bridging directly onto Dong Dang (Lang Son)",
        "Coastal Gulf HSR link serving Dongxing – Mong Cai maritime gates"
      ]
    },
    "prov-tibet": {
      typeEn: "Autonomous Region",
      regionLabelEn: "Southwest China (Qinghai–Tibet Plateau)",
      highlightsEn: "Potala Palace, Jokhang Temple, Mount Everest, Sacred Mount Kailash, Thangka mineral scroll painting & Tibetan medicine.",
      economyEn: "Eco-cultural highland tourism, zero-emission upstream hydro-solar power, pure glacier water, plateau copper/lithium & Tibetan herbs.",
      landmarkEn: "Potala Palace Rising Atop Red Hill, Lhasa (拉萨红山布达拉宫)",
      bestSeasonEn: "May – October (richer warm oxygen, sunlit Namtso turquoise waters & open Everest Base roads)",
      cuisineEn: "Salty Yak Butter Tea (酥油茶), Roasted Highland Barley Tsampa (糌粑), Stone-Pot Nyingchi Chicken & Tibetan Thukpa",
      travelTipEn: "Foreign passport visitors MUST obtain an authorized Tibet Travel Permit through certified agencies ahead of boarding planes/trains to Lhasa.",
      economyAndIndustryEn: "Leads regional green ecological transition via high-end heritage tourism, pure solar-hydro grids, high-altitude salt-lake minerals, glacial spring bottling (*Tibet 5100*), certified Tibetan Medicine pharmaceuticals, and organic Yak/Cordyceps husbandry.",
      vietnamConnectivityEn: "Deep spiritual aspiration for Vietnamese Buddhist pilgrims traveling via Chengdu/Chongqing/Kunming straight onto Lhasa–Shigatse–Everest circuits alongside cross-monastic & academic Tibetan medicine exchanges hosted at Tibet University.",
      identityEn: {
        adminTypeFullEn: "Autonomous Region (自治区 Zìzhìqū)",
        abbreviationOriginEn: "Composed from traditional provinces 'Ü' (Lhasa/Front Tibet) and 'Tsang' (Shigatse/Rear Tibet), west of Central China — hence Xizang ('Western Treasury') coded cleanly 藏.",
        capitalCityEn: "Lhasa (拉萨市 Lāsà Shì — Tibetan: 'Sacred Place of Gods')"
      },
      geoEn: {
        summaryEn: "Crowning core of Earth's Step 1 'Roof of the World' plateau (>4,000 m average!) buttressed dramatically between towering snowy Himalaya (Mount Qomolangma/Everest 8,848.86 m) south and Kunlun–Tanggula mountains north alongside lush Nyingchi Yarlung Tsangpo deep canyon receiving >3,000 dazzling sunny hours ('City of Sunshine').",
        causalityEn: "Roughly 60% sea-level oxygen & subzero glaciers ruled out lowland wheat/rice farming, spurring hardy cold-adapted Highland Barley ('Qingke' stone-roasted into portable pilgrim *Tsampa* kneaded with butter tea) and multi-tasking Yak herds alongside asymmetric wide-sleeved Tibetan Chuba cloaks shed smoothly by sunny midday."
      },
      historicalEvolutionEn: "7th-c. visionary Tsenpo Songtsen Gampo unifying Tubo Empire, commissioning Sanskrit-derived Tibetan script (Thonmi Sambhota), and wedding Tang Princess Wencheng & Nepali Princess Bhrikuti (Jokhang/early Potala); 11th-c. Four Tibetan Buddhist Schools; Yuan Xuanzhengyuan integration; Qing Golden Urn & 1965 TAR establishment.",
      culturalIdentityEn: "Profound sacred cosmology placing Vajrayana Buddhism at the living heart of daily rhythm — fluttering five-color Lungta wind-horse flags, spinning gilded prayer wheels, full-body prostrations around Lhasa Barkhor, meticulous *Four Medical Tantras*, and cosmic reverence for holy lakes and peaks.",
      intangibleHeritageEn: "UNESCO Ache Lhamo outdoor mask theater (600+ years), *Epic of King Gesar*, UNESCO Lum Medicinal Herbal Bathing (Sowa Rigpa), mineral-gold Thangka scroll illumination, impermanent sand Mandalas & deep bronze Dungchen monastery horns.",
      culinaryEn: {
        styleOverviewEn: "Zangcan distills high-calorie highland resilience cleanly around roasted barley *Tsampa*, air-dried wind-cured Yak jerky, and hot whipped Yak-butter tea complemented vibrantly in Lhasa by mellow Sichuan–Nepali curries.",
        dishesEn: [
          "Life-sustaining highland pair: hot wood-churned salty brick-tea & Yak butter emulsified foamy and kneaded hand-warm alongside nutty roasted Qingke barley meal.",
          "Free-grazing 4,500m grassland Yak steak marbled crisp into wild Nyingchi Matsutake mushroom bubbling pot or wind-cured jerky strips.",
          "Mild golden amber slightly tangy rustic Qingke barley ale poured warm in welcome across every festival.",
          "Lhasa's joyful daily Guangming Teahouse scene: chewy broth noodles paired crisp with juicy steamed Momo buns beside sweet creamy dark milk-tea glasses.",
          "Specialty from humid forest Nyingchi: free-range black highland hen gently bubbled inside solid hand-chiseled Motuo soapstone cauldrons packed wild ginseng & gastrodia."
        ]
      },
      heritagesEn: [
        { nameEn: "Historic Ensemble of Potala Palace, Jokhang & Norbulingka (UNESCO 1994)", significanceEn: "13-story crimson-and-white fortress-monastery perched above Lhasa at 3,700 m beside the holiest temple guarding Princess Wencheng's 12-year-old Sakyamuni." },
        { nameEn: "Mount Qomolangma (Everest) & Three Holy Lakes", significanceEn: "Earth's apex summit (8,848.86 m) flanked by turquoise sacred Namtso (4,718 m), Yamdrok & Manasarovar." },
        { nameEn: "Tashilhunpo (Shigatse), Sera & Drepung Monasteries", significanceEn: "Monumental Gelug monastic universities celebrated worldwide for afternoon courtyard dialectical logic debates at Sera." },
        { nameEn: "Yarlung Tsangpo Grand Canyon & Nyingchi Peach Valley", significanceEn: "World's deepest canyon sweeping tightly around 7,782 m Namcha Barwa forming lush 'Tibetan Jiangnan' peach blossoms." },
        { nameEn: "Guge Kingdom Ruins (Ngari) & Sacred Mount Kailash", significanceEn: "Deserted 10th-c. clay cliff palace overlooking symmetric Mount Kailash — revered axis of Earth across four faiths." }
      ],
      figuresEn: [
        "Great 7th-century Tubo Emperor establishing Tibetan script, codified law, and Lhasa palace temples.",
        "Brilliant Sakya patriarch Chogyal Phagpa devising square Phags-pa Imperial Script under Kublai Khan.",
        "Poignant early-18th-century Sixth Dalai Lama Tsangyang Gyatso whose lyrical love–enlightenment poems echo worldwide."
      ],
      echoEn: { workTitleEn: "Lhasa Verses of Potala & Barkhor Lanes", authorEn: "Sixth Dalai Lama Tsangyang Gyatso", dynastyEn: "Early 18th Century" },
      commercialEn: {
        historicalGuildEn: "Ancient Tea-Horse Mountain Roads passing Ya'an & Lijiang across 1,300 years swapping compressed tea bricks for Himalayan steeds.",
        modernClustersEn: "Sustainable eco-pilgrimage tourism, Sowa Rigpa Tibetan pharma (Cheezheng), solar-hydro grids & glacial mineral water.",
        hubsAndCorridorsEn: "Qinghai–Tibet Railway ('Roof of the World Track'), Gonggar Aviation Hub & Nyingchi electrified Fuxing lines.",
        vietnamAseanLinkEn: "Vajrayana Buddhist pilgrimage itineraries alongside high-plateau traditional herbal medicine exchange."
      },
      stationsEn: [
        "World's highest trunk plateau station connecting Qinghai–Tibet & Nyingchi Fuxing lines"
      ]
    },
    "prov-ningxia": {
      typeEn: "Autonomous Region",
      regionLabelEn: "Northwest China",
      highlightsEn: "Imperial Western Xia Tombs beneath Helan Mountains, Shapotou Yellow River Desert Oasis & Sino–Islamic Hui heritage.",
      economyEn: "World #1 Goji berry & Helan Eastern-Foothill Decanter gold wines paired cleanly with Ningdong clean coal-to-chemicals & cloud hubs.",
      landmarkEn: "Royal Pyramid Tombs of Western Xia Beneath Helan Range (西夏王陵)",
      bestSeasonEn: "May – October (sunny dry desert vistas along Shapotou & autumn Helan wine harvests)",
      cuisineEn: "Yanchi Hand-Grabbed Lamb (手抓羊肉), Savory Offal Soup Zashui, Red-Goji Eight-Treasure Tea & Helan Bordeaux Wines",
      travelTipEn: "Explore Western Xia Tombs in late afternoon when slanting golden sun ignites the octagonal clay mounds against Helan crags.",
      economyAndIndustryEn: "World #1 Goji berry harvests centered at Zhongning; internationally awarded Cabernet wine estates along Helan Mountains' Eastern Foothills; Ningdong coal-to-liquids technology; and major Zhongwei 'East Data West Computing' green cloud vaults.",
      vietnamConnectivityEn: "Leading supplier of authentic medicinal Goji berries, licorice roots, and fertilizers alongside UN-recognized Shapotou straw-checkerboard anti-desertification science applicable across coastal Vietnam dunes; Ningxia Univ. hosts active chemistry/arid-farming scholars.",
      identityEn: {
        adminTypeFullEn: "Autonomous Region (自治区 Zìzhìqū)",
        abbreviationOriginEn: "Established after Mongol conquest of Tangut Western Xia (1227) wishing 'Peace & Tranquility over Xia Lands' (Xiàdì Ānníng); abbreviated cleanly 宁 (Ning).",
        capitalCityEn: "Yinchuan (银川市 Yínchuān Shì — 'Jiangnan Above the Frontier Pass')"
      },
      geoEn: {
        summaryEn: "China's smallest Autonomous Region wedged cleanly between Loess & Mongolian Plateaus where towering Mount Helan (3,556 m) shields fertile Yellow River alluvial Yinchuan valleys against creeping Gobi dunes — earning the nickname 'All Yellow River Enriches Ningxia' inside dry brilliant sunshine.",
        causalityEn: "Blistering sunny days matched with freezing desert nights concentrate sugar intensely inside sweet Zhongning Goji berries, Helan wine grapes & salt-herb grazed Yanchi sheep ('zero gaminess even boiled in plain water'). Multi-ethnic Silk crossroads wedded Tangut clay pyramids cleanly beside mosque arches."
      },
      historicalEvolutionEn: "30,000-year Shuidonggou Paleolithic site & Helan petroglyphs; Qin–Han Yellow River irrigation channels; splendid 1038–1227 Tangut Western Xia Empire (inventing independent Tangut script & earliest extant wood movable-type sutras!); Ming–Qing Hui settlement; and 1958 Hui Autonomous Region.",
      culturalIdentityEn: "Harmonious desert mosaic intertwining haunting Tangut imperial mysteries beside spotless Halal Hui courtyard aesthetics (eight-treasure covered bowls, arched brick mosques merging pagoda eaves), twanging bronze Kouxiang mouth-harps & heroic Helan Mountain frontier spirit.",
      intangibleHeritageEn: "Hand-knotted Yinchuan wool carpets, fine emerald-green Helan stone inkstone carving, Liupanshan Hua'er mountain ballads, silvery Hui brass *Kouxian* jew's harps & traditional Zhongning Goji processing.",
      culinaryEn: {
        styleOverviewEn: "Yinchuan reigns as China's Halal Culinary Capital — spotlighting peerless Yanchi alkali-herb-pastured Tan-Sheep mutton delicate enough to skip spices entirely alongside sweet oasis rice, crisp noodles & aromatic eight-treasure tea.",
        dishesEn: [
          "Six-month-old Yanchi Tan-Sheep ribs tenderly poached solely inside faintly salted water with zero heavy spices proving unbelievable buttery grass sweetness.",
          "Addictive Yinchuan street obsession dunking potato slices, cow-tripe & beef cleanly into thick creamy sesame-peanut sweet-chili roux ('Lahuhu') without oil sheen.",
          "Ever-present hospitality bowl steeping green tea beside bright Zhongning Goji, jujubes, longan fruit, sesame seeds, raisins, walnuts & crystal rock sugar.",
          "Hearty snowy-morning desert warmer simmering finely sliced tripe & lung inside red-chili mutton gravy alongside brisk hand-rolled springy noodle cigars.",
          "Plump fresh sweet Zhongning goji berries simmered delicately beside tremella pudding paired calmly with estate-bottled Helan Cabernet."
        ]
      },
      heritagesEn: [
        { nameEn: "Western Xia Imperial Tombs Archaeological Park", significanceEn: "Nine monumental imperial rammed-earth octagonal pyramids ('Oriental Pyramids') rising dramatically against rugged Helan walls." },
        { nameEn: "Shapotou Desert Oasis on Yellow River (Zhongwei)", significanceEn: "Where towering golden Tengger dunes slide directly to surging Yellow River bends fenced famously by UN straw-grid barriers." },
        { nameEn: "Helan Mountain Rock Art (10,000–3,000 BCE)", significanceEn: ">20,000 ancient northern nomad petroglyphs crowned by the iconic Sun God mask." },
        { nameEn: "Shuidonggou Prehistoric Site & Ming Trench", significanceEn: "Premier Paleolithic excavation joined underground beside intact kilometer-long Ming defensive tunnels." },
        { nameEn: "Mount Xumi Grottoes & Zhenbeibu West Film Studio", significanceEn: "Northern Wei–Tang Buddhist cliff carvings near famous frontier fortresses filming cinema classics (*Red Sorghum*, *A Chinese Odyssey*)." }
      ],
      figuresEn: [
        "Audacious Tangut Emperor Jingzong Li Yuanhao founding Great Xia at Yinchuan and commissioning unique Tangut script.",
        "Yuan astronomer-hydrologist Guo Shoujing rehabilitating ancient Qin–Han Yellow River irrigation sluices in 1264.",
        "Acclaimed contemporary author Zhang Xianliang turning deserted Ming garrisons into celebrated cinema heritage sets."
      ],
      echoEn: { workTitleEn: "Mission to the Frontier (使至塞上 — Above Yellow River)", authorEn: "Wang Wei (王维)", dynastyEn: "High Tang (~737 CE)" },
      commercialEn: {
        historicalGuildEn: "Tangut caravan fairs & ancient Qin–Han Canal oasis granaries feeding desert trails.",
        modernClustersEn: "Global #1 Goji harvest center, Decanter gold-winning Helan Mountain Wines, Ningdong coal-chemicals & green Cloud Computing.",
        hubsAndCorridorsEn: "Lanzhou–Yinchuan–Baotou rail trunk linking Eurasian dry logistics with green digital grids.",
        vietnamAseanLinkEn: "Dependable supplier of genuine TCM herbs (Goji, licorice) alongside coastal desert-farming techniques & Halal craft."
      },
      stationsEn: [
        "Regional trunk hub opening direct paths onto Western Xia Tombs, Lanzhou & Xi'an"
      ]
    },
    "prov-xinjiang": {
      typeEn: "Autonomous Region",
      regionLabelEn: "Northwest China",
      highlightsEn: "Heavenly Tianshan Peaks, 2,000-year Kashgar Old Town, Alpine Lake Kanas, Turpan Karez tunnels & UNESCO Twelve Muqam suites.",
      economyEn: "Main gateway for >50% of China–Europe freight rail (Alashankou/Khorgos), >90% China cotton, oil/gas, polysilicon solar & tourism.",
      landmarkEn: "Moon Bay of Turquoise Lake Kanas, Altai (阿勒泰喀纳斯湖月亮湾)",
      bestSeasonEn: "June (Yili purple lavender seas) & September – October (blazing gold birch/poplar forests around Kanas & Tarim)",
      cuisineEn: "Fragrant Mutton Polo Rice (手抓饭), Giant Chili-Potato Chicken Platter (大盘鸡), Red-Willow Kebabs & Tandoor Naan",
      travelTipEn: "Xinjiang spans ~5x Vietnam's area: split itineraries cleanly into Northern Scenic Alps (Altai/Kanas/Yili) vs. Southern Silk Oases (Kashgar/Turpan).",
      economyAndIndustryEn: "Produces >90% of China's long-staple cotton & processing tomatoes, topped nationwide in Tarim oil/gas & solar polysilicon while channeling >50% of all China–Europe Express freight trains across Alashankou and Khorgos land ports.",
      vietnamConnectivityEn: "Supplies clean combed long-staple cotton yarn to Vietnam's booming textile clusters alongside Turpan raisins, Aksu walnuts & jujubes while importing tropical Vietnamese fruit eastward through Urumqi–Kashgar–Kunming/Chengdu rail.",
      identityEn: {
        adminTypeFullEn: "Autonomous Region (自治区 Zìzhìqū)",
        abbreviationOriginEn: "Coinage 'New Returned Frontier Territory' settled by Qing armies (1759) & championed officially as Xinjiang Province by Zuo Zongtang in 1884; retains crisp single character 新 (Xin).",
        capitalCityEn: "Urumqi (乌鲁木齐市 Wūlǔmùqí Shì — 'Fair Grazing Pasture', Earth's farthest city from any ocean)"
      },
      geoEn: {
        summaryEn: "China's largest provincial division (1.66M km² — 1/6 of national landmass, touching 8 countries!) famously symmetric: Three Mountains Clasping Two Basins — Altai north -> Dzungarian (lush Yili meadows) -> Tianshan snow spine -> vast Tarim Basin housing Taklamakan Sands & -154 m Turpan Depression -> Kunlun peaks.",
        causalityEn: "Snow-melt cascades diving underground past blistered gravel fans straight into engineered Karez shaded stone tunnels prevent 45 °C desert evaporation — turning Taklamakan rim towns into Earth's sweetest melon, grape & long-staple cotton orchards uniting Persian–Turkic–Sinitic bazaars."
      },
      historicalEvolutionEn: "Silk Oasis kingdoms (Loulan, Kucha, Gaochang, Khotan); 60 BCE Han Western Regions Protectorate; Tang Anxi Four Garrisons inspiring frontier verse by Cen Shen; Karakhanid Islam & Gaochang Uyghur syncretism; 1759 Qing consolidation; 1955 Uyghur Autonomous Region.",
      culturalIdentityEn: "Kaleidoscopic chorus of 47 ethnic groups dancing vividly around rawap lutes, Uyghur embroidered *Doppa* caps, nomadic Kazakh Altai eagle-hunters, soaring Pamir mountain Tajiks & vibrant midnight grand-bazaars brimming in fresh melons and sizzling mutton skewers.",
      intangibleHeritageEn: "UNESCO Masterpiece Uyghur *Twelve Muqam* suite synthesizing folk songs, classical dance & oral poetry; Kazakh Dombra & Eagle Hunting; Kyrgyz *Manas* heroic epic; and radiant Hotan tie-dyed iridescent *Atlas* silk.",
      culinaryEn: {
        styleOverviewEn: "Xinjiang Halal Silk-Road feasting centers cleanly on sweet pasture-clean desert lamb salted delicately over smoky crushed cumin ('Ziran'), golden clay-oven Naan wheels & high-UV sugar-bursting Turpan grapes and Hami melons.",
        dishesEn: [
          "Heaped celebratory platter stewing tender farm chicken alongside mealy potatoes, star anise, and glossy belt chilies resting atop wide bouncy hand-stretched Laghman belt ribbons.",
          "Succulent cubes of sweet lamb threaded cleanly atop peeled fragrant desert red-willow twigs grilled bright over wood embers beside crispy oven-wall baked lamb Samsa pockets.",
          "Iconic golden Uyghur Polo sautéing juicy bone-in lamb tallow slowly beside sweet yellow-and-orange heirloom carrots, sweet dried raisins & tender spiced long grain rice.",
          "Springy round dough tubes hand-rolled gently into endless uninterrupted strands tossed bubbling beneath stir-fried cumin lamb chunks, crisp peppers & fresh tomato.",
          "Crisp hearth-baked sesame Naan wheels soaking up bubbling peppered lamb ragout chased cool beside crisp Turpan seedless emerald raisins & yogurt Zongzi."
        ]
      },
      heritagesEn: [
        { nameEn: "Xinjiang Tianshan (UNESCO) & Kanas Glacial Lakes", significanceEn: "2,500 km snow-mantled backbone embracing Nalati flower valleys & autumn golden birch forests mirroring Lake Kanas." },
        { nameEn: "Ancient Earth-Brick City of Kashgar (2,000 Years)", significanceEn: "World's largest still-living earthen-clay labyrinth town vibrant with coppersmiths, teahouses & Silk Road bazaars." },
        { nameEn: "Jiaohe Ancient Ruins & Karez Irrigation (UNESCO)", significanceEn: "2,300-year city sculpted downwards from natural loess island plateaus fed ingeniously by 5,000 km shaded water canals." },
        { nameEn: "Kizil Thousand-Buddha Caves (Baicheng, UNESCO)", significanceEn: "China's earliest surviving Buddhist cave sanctuary (3rd–8th c.) directly preceding Dunhuang fresco iconography." },
        { nameEn: "Duku Highway & Karakul Lake Under Muztagh Ata", significanceEn: "Breathtaking seasonal pass leaping 'Four Seasons in One Day' across Tianshan ridges toward 7,509 m Pamir ice." }
      ],
      figuresEn: [
        "Heroic Eastern Han Protector General Ban Chao ('Casting down the brush to guard the frontier') securing Silk Routes 30 years.",
        "Genius Kuchan translator monk Kumarajiva standardizing classical Chinese Buddhist sutras (*Diamond*, *Lotus*, *Vimalakirti*) shaping East Asia.",
        "11th-century Kashgari linguist Mahmud al-Kashgari authoring the monumental comparative Turkic Lexicon."
      ],
      echoEn: { workTitleEn: "Song of White Snow Seeing Off Secretary Wu (白雪歌送武判官归京)", authorEn: "Cen Shen (岑参)", dynastyEn: "High Tang (754 CE)" },
      commercialEn: {
        historicalGuildEn: "Sogdian & Uyghur merchant caravans threading Northern–Southern Silk oases trading Hotan nephrite & Tang silks.",
        modernClustersEn: "Eurasian Land Bridge Core (>50% Europe rail through Khorgos/Alashankou), >90% national cotton, solar polysilicon & tarim petroleum.",
        hubsAndCorridorsEn: "Xinjiang Free Trade Zone (Urumqi, Kashgar, Khorgos) connecting straight outward onto Kazakhstan and European networks.",
        vietnamAseanLinkEn: "Key supplier of raw long-staple cotton fibers for Vietnamese textile clusters paired beside cross-border dried nuts/fruit."
      },
      stationsEn: [
        "Western HSR origin dispatching crisp runs straight to Turpan (50m) & regional hubs",
        "Far-western ancient Silk oasis rail terminal at the foot of the Pamirs"
      ]
    },
    "prov-hongkong": {
      typeEn: "Special Administrative Region (SAR)",
      regionLabelEn: "South China (Greater Bay Area)",
      highlightsEn: "Victoria Harbour skyline, East–West Common Law fusion, golden cinema legacy, Cha Chaan Teng & Top-100 global research universities.",
      economyEn: "Asia–Pacific's premier global financial hub (HKEX IPOs, world's #1 offshore RMB center, zero-tariff free port, Top air-cargo).",
      landmarkEn: "Victoria Harbour Viewed Atop The Peak (维多利亚港与太平山顶)",
      bestSeasonEn: "October – December (crystal blue skies & cool sunny hikes atop Victoria Peak & Dragon's Back)",
      cuisineEn: "Yung Kee Roast Goose, Classic Cart-Pushed Yum Cha Dimsum, Crisp Pineapple Butter Bun & Cha Chaan Teng Silk Milk Tea",
      travelTipEn: "Add digital Octopus directly into Apple Wallet / Android to breeze cleanly across Star Ferry, double-decker Trams & MTR lines.",
      economyAndIndustryEn: "Powerhouse Asia financial market: HKEX international capital listings, world's #1 Offshore RMB (CNH) settlement clearing, zero-tariff free trade gateway, world #1 air-cargo airport (HKG), HKIAC international arbitration, and dynamic eastern pillar of GBA.",
      vietnamConnectivityEn: "Historical sanctuary where leader Nguyen Ai Quoc (Ho Chi Minh) chaired the historic Founding Conference of the Communist Party of Vietnam in Kowloon (Feb 3, 1930)! Today HK stands among Vietnam's top 5 direct investors and top 'Rotterdam/HK re-export' financial gateway, educating brilliant Vietnamese PhDs across five World Top-100 campuses (HKU, HKUST, CUHK, CityU, PolyU).",
      identityEn: {
        adminTypeFullEn: "Special Administrative Region (特别行政区 Tèbié Xíngzhèngqū)",
        abbreviationOriginEn: "'Fragrant Harbor' named from historical Aberdeen incense-wood wharves bundling mainland agarwood for ocean junks; coded uniformly 港 (Gang — standardized strictly on Pinyin Gǎng).",
        capitalCityEn: "Hong Kong (Central Financial District & Mong Kok — Victoria Harbour)"
      },
      geoEn: {
        summaryEn: "Anchoring the eastern mouth of the Pearl River Estuary along Step 3 maritime cliffs: Hong Kong Island, Kowloon Peninsula, New Territories & >260 outlying islands where steep volcanic crags (Victoria Peak 552 m) shelter a rare ice-free, silt-free, deepwater harbor welcoming super-freighters right downtown.",
        causalityEn: "Scarce <25% flat buildable land encircling one flawless natural harbor forced soaring vertical skyscrapers, clockwork stacked rail/Peak Tram/hillside escalators, and crisp fast-paced Cha Chaan Teng East–West tea café culture uniting Cantonese craft with brisk maritime efficiency."
      },
      historicalEvolutionEn: "Ancient Qin–Han maritime villages (Lei Cheng Uk Eastern Han brick tomb); Southern Song Emperor retreats at Sung Wong Toi (1277); post-1842/1898 British free-port entrepôt surging 1960s–90s as Asian Tiger financier & 'Hollywood of the East'; July 1, 1997 peaceful return under 'One Country, Two Systems' powering GBA.",
      culturalIdentityEn: "Unique blend pairing steadfast Confucian kinship & Wong Tai Sin/Tin Hau incense faith beside Common Law rule professionalism, resilient 'Below the Lion Rock' self-made work ethic, iconic Jin Yong wuxia / Wong Kar-wai cinema aesthetics & brisk cosmopolitan Cantonese pragmatism.",
      intangibleHeritageEn: "Flamboyant 14 m Cheung Chau Bun Festival towers & Piu Sik flying floats, Mid-Autumn Tai Hang blazing Fire Dragon dance, bespoke HK Cheongsam tailoring, silky sock-pulled tea brewing & daring artisanal skyscraper bamboo scaffolding.",
      culinaryEn: {
        styleOverviewEn: "Crowned 'Asia's Culinary Paradise' bursting in global highest-per-capita Michelin stars — balancing razor-sharp classical Cantonese Dimsum artistry, Sai Kung live seafood docks & bustling Cha Chaan Teng colonial–Chinese fusion comfort.",
        dishesEn: [
          "Rich Ceylon black tea steeped repeatedly cleanly through fine cotton 'silk stockings' poured creamy alongside condensed milk next to hot crusty buns melting chilled salted butter slabs inside.",
          "Iconic window-hung Cantonese roasts elevated to high cuisine: crisp lacquer-skinned Sham Tseng roast goose & glistening burnt-tip honey-glazed Iberian Char Siu.",
          "Bouncy alkaline duck-egg noodles resting atop crystal-clear roasted dried-flounder stock hiding crisp-snapping whole fresh tiger prawn wontons.",
          "Typhoon-shelter Causeway Bay fisher-boat fire-wok crab smothered lavishly in crunchy crispy mountains of golden deep-fried garlic, black beans & dried chili.",
          "Flaky puff/shortcrust oven-warm egg custard tarts chased cleanly with refreshing chilled mango, pink pomelo & tapioca pearl 'Ambrosia' dessert."
        ]
      },
      heritagesEn: [
        { nameEn: "Victoria Harbour Skyline & 1888 Peak Tram", significanceEn: "One of Earth's three brightest coastal city horizons scaled smoothly aboard Asia's oldest funicular cliff railway." },
        { nameEn: "Tian Tan Big Buddha & Tai O Stilt Village", significanceEn: "34-meter mountain bronze seated Buddha at Po Lin Monastery above serene Lantau tidal stilt alleys." },
        { nameEn: "West Kowloon Cultural District (HK Palace Museum & M+)", significanceEn: "Global museum cluster displaying >900 rotated Forbidden City imperial treasures beside contemporary Asian visual culture." },
        { nameEn: "Sik Sik Yuen Wong Tai Sin & Man Mo Temple", significanceEn: "Beloved folk incense temples blending Taoist divination bamboo sticks and scholar-warrior prayers amid glass towers." },
        { nameEn: "Tai Kwun Historic Compound & 1888 Star Ferry", significanceEn: "Restored Victorian magistrate quarters paired peacefully with green timber harbor ferries." }
      ],
      figuresEn: [
        "Universal Chinese erudite polymath Jao Tsung-i guiding half a century of classical scholarship out of HKU & CUHK.",
        "20th-century wuxia literary titan Louis Cha (Jin Yong) co-founding *Ming Pao* & composing *Condor Heroes* epics in Hong Kong.",
        "Transformational icon Bruce Lee spreading martial philosophy globally alongside optical-fiber Nobel laureate Charles Kao."
      ],
      echoEn: { workTitleEn: "Beneath the Lion Rock & Victoria Harbor Verse", authorEn: "Lingnan Patriots / Contemporary Chronicles", dynastyEn: "19th–20th Century" },
      commercialEn: {
        historicalGuildEn: "Nam Pak Hong (North–South Trading Houses) & Kam Shan Chong dispatching coastal trade & diaspora remittances since 1842.",
        modernClustersEn: "Premier Asia financial/IPO center, world's top offshore RMB settlement clearers, international maritime arbitration & 0% duty port.",
        hubsAndCorridorsEn: "Global #1 International Air Cargo hub (HKG) seamlessly bound via the 55 km HK–Zhuhai–Macau Bridge.",
        vietnamAseanLinkEn: "Historical CPV 1930 birthplace alongside modern #5 FDI capital origin, bond listings & GBA–Vietnam trade gateway."
      },
      stationsEn: [
        "Sleek subterranean XRL rail port zipping to Guangzhou South (48m), Shenzhen (18m) & Beijing"
      ]
    },
    "prov-macau": {
      typeEn: "Special Administrative Region (SAR)",
      regionLabelEn: "South China (Greater Bay Area)",
      highlightsEn: "UNESCO Historic Centre (Ruins of St. Paul's, A-Ma Temple), Baroque squares & oldest East Asian Chinese–Portuguese gastronomy.",
      economyEn: "Top Asia per-capita GDP led by Cotai MICE/integrated resorts shifting via '1+4' toward Hengqin biotech, TCM & Lusophone trade bridges.",
      landmarkEn: "Granite Facade of the Ruins of St. Paul's (大三巴牌坊)",
      bestSeasonEn: "October – December (breezy sunny weather strolling lazily between all 22 walkable UNESCO monuments)",
      cuisineEn: "Caramelized Portuguese Egg Tarts (葡式蛋挞), Crisp Pork-Chop Buns, Macanese African Chicken & Fresh Crab Congee",
      travelTipEn: "All historic gems from Ruins of St. Paul's down through cobbled Senado Square cluster compactly inside half a day on foot.",
      economyAndIndustryEn: "Among Asia's highest per-capita GDPs anchored cleanly in world-class Cotai MICE hospitality while diversifying briskly under '1+4' into Hengqin–Guangdong Traditional Medicine biotech, green finance bonds & China–Lusophone trade cooperation.",
      vietnamConnectivityEn: "Early-modern maritime link pairing Dang Trong (Hoi An) & Dang Ngoai (Kecho) junks where lexicographer Alexandre de Rhodes printed and refined Latinized *Quoc Ngu* grammar notes in Macau! Today hosts hospitable Vietnamese hospitality workers alongside world-class Analog/RF chip IC engineering labs at University of Macau.",
      identityEn: {
        adminTypeFullEn: "Special Administrative Region (特别行政区 Tèbié Xíngzhèngqū)",
        abbreviationOriginEn: "Historically 'Oyster-Mirror Cove' ('Ao' marking calm sheltered cove); Portuguese mariners landing 1553–57 heard fishermen invoke 'A-Ma-Gau' ('Bay of Goddess Mazu'); coded strictly 澳 on Pinyin Ào.",
        capitalCityEn: "Macau (Macau Peninsula, Taipa & Cotai Strip)"
      },
      geoEn: {
        summaryEn: "Sitting across quiet Pearl River estuary waters just opposite Hong Kong next to Zhuhai SEZ — covering merely 33.3 km² (China's smallest, most densely populated province-level unit!) linking old Peninsula granite hillocks to Taipa–Coloane joined cleanly across Cotai reclamation beneath breezy mild subtropical sea air.",
        causalityEn: "Perched comfortably on western Pearl Estuary banks forged Macau as East Asia's CONTINUOUS FIRST Euro–Asian port for 450 years since 1557 (nearly 3 centuries prior to Shanghai & HK!). Peaceful symbiosis wove Cantonese Mazu shrines serenely amidst Portuguese Calçada mosaics and birthed global earliest Macanese fusion cuisine."
      },
      historicalEvolutionEn: "Qin Nanhai county territory; 1277 Song refuge; 1553–57 Ming lease welcoming Portuguese Macao–Goa–Nagasaki silver fleets and Jesuit scholars Matteo Ricci & Alexandre de Rhodes stepping toward East Asia beside St. Paul's (Asia's first Western-style college, 1594!); December 20, 1999 return under 'One Country, Two Systems'.",
      culturalIdentityEn: "Slow mellow Mediterranean-meets-Cantonese unhurried grace — bilingual Hanzi–Portuguese tiled street signs crisscrossing undulating wave flagstones where 16th-century St. Paul's facade looks calmly over neighboring A-Ma Goddess incense temples and tiny Na Tcha shrines.",
      intangibleHeritageEn: "UNESCO Creative City of Gastronomy (450-year Macanese heritage), wave-mosaic Calçada street paving, exuberant 'Drunken Dragon' fisher-guild street festival, Na Tcha worship & A-Ma ritual music.",
      culinaryEn: {
        styleOverviewEn: "UNESCO-crowned China's second Creative City of Gastronomy uniting clean southern Cantonese technique with Iberian oven-roasting rich in olive oil, turmeric, coconut cream, cloves, cured meats & vintage Port into original Macanese fusion.",
        dishesEn: [
          "Crisp-layered flaky pastry shells cradling trembling rich vanilla-egg custard blistered deliciously caramel brown atop glowing ovens (Margaret's / Lord Stow's).",
          "Piping crust-crisp oven rolls gripping thick juicy five-spice marinated bone-in fried pork chops requiring zero condiment sauces.",
          "Authentic Macanese domestic classics roasting tender chicken with olive potatoes, black olives & chouriço drowned inside golden turmeric-coconut curry.",
          "Velvety jasmine rice slow-simmered completely creamy around whole sweet Pearl Estuary blue crabs kissed lightly with aged tangerine peel.",
          "Airy whipped cream chilled amidst crisp crushed Maria biscuit sawdust layers ('Serradura') alongside charcoal-baked almond cookies along Rua do Cunha."
        ]
      },
      heritagesEn: [
        { nameEn: "Historic Centre of Macau (UNESCO 2005)", significanceEn: "22 interwoven squares & churches culminating in the soaring Sino–European baroque stone facade of Ruins of St. Paul's (1602–40)." },
        { nameEn: "A-Ma Temple (Barra)", significanceEn: "Macau's pre-Portuguese maritime stone sanctuary lending the territory its international name." },
        { nameEn: "Senado Square & St. Dominic's Baroque Church", significanceEn: "Wavy Portuguese cobblestone civic heart glowing in pastel yellow Neoclassical arcades." },
        { nameEn: "Monte Fortress & Guia Hill Lighthouse", significanceEn: "Oldest Western-built modern lighthouse standing continuously over the China coast for 150+ years." },
        { nameEn: "Taipa Rua do Cunha & Coloane Chapel of St. Francis", significanceEn: "Serene seaside pastel fisherman village cradling original crusted Portuguese pastry bakeries." }
      ],
      figuresEn: [
        "Jesuit polymath Matteo Ricci arriving in 1582 to master Classical Chinese & Confucian rites before opening East–West scientific exchange.",
        "Late-Qing reform economist Zheng Guanying composing his landmark *Warnings to a Prosperous Age* at Macau's Mandarin's House (UNESCO).",
        "Resonant modern composer Xian Xinghai born to Macau boatmen crafting the monumental *Yellow River Cantata*."
      ],
      echoEn: { workTitleEn: "Macau Impressions — Listening to Lotus Fragrant Waters", authorEn: "Tang Xianzu (汤显祖 — *Peony Pavilion* playwright visiting Macau 1591!)", dynastyEn: "Ming Wanli Era (1591)" },
      commercialEn: {
        historicalGuildEn: "Portuguese–Canton Silver Fleets (1557) bridging Manila–Macau–Nagasaki–Dai Viet maritime commerce.",
        modernClustersEn: "Global MICE Hospitality Corridor (Cotai), China–Lusophone trade service platform & Hengqin TCM biotech parks.",
        hubsAndCorridorsEn: "Direct connection over Hong Kong–Zhuhai–Macau Bridge & Gongbei/Zhuhai high-speed corridors.",
        vietnamAseanLinkEn: "Historical early-modern printing/Quoc Ngu lexicography gateway alongside University of Macau IC research."
      },
      stationsEn: [
        "Located steps across Gongbei Pedestrian Border Gate walking straight into Macau within 5 minutes"
      ]
    }
  };

  if (window.CCE_REGIONS) {
    (window.CCE_REGIONS.macroRegions || []).forEach((mr) => {
      const m = MACRO_REGIONS_EN[mr.id];
      if (m) Object.assign(mr, m);
    });
    (window.CCE_REGIONS.cities || []).forEach((ct) => {
      const c = CITIES_EN[ct.id];
      if (c) Object.assign(ct, c);
    });
    (window.CCE_REGIONS.provincesDirectory || []).forEach((pr) => {
      const p = PROVINCES_EN[pr.id];
      if (!p) return;
      pr.typeEn = p.typeEn;
      pr.regionLabelEn = p.regionLabelEn;
      pr.highlightsEn = p.highlightsEn;
      pr.economyEn = p.economyEn;
      pr.landmarkEn = p.landmarkEn;
      pr.bestSeasonEn = p.bestSeasonEn;
      pr.cuisineEn = p.cuisineEn;
      pr.travelTipEn = p.travelTipEn;
      pr.economyAndIndustryEn = p.economyAndIndustryEn;
      pr.vietnamConnectivityEn = p.vietnamConnectivityEn;
      pr.historicalEvolutionEn = p.historicalEvolutionEn;
      pr.culturalIdentityEn = p.culturalIdentityEn;
      pr.intangibleHeritageEn = p.intangibleHeritageEn;
      if (pr.identity && p.identityEn) Object.assign(pr.identity, p.identityEn);
      if (pr.geographyAndClimate && p.geoEn) Object.assign(pr.geographyAndClimate, p.geoEn);
      if (pr.culinaryCulture && p.culinaryEn) {
        pr.culinaryCulture.styleOverviewEn = p.culinaryEn.styleOverviewEn;
        if (Array.isArray(pr.culinaryCulture.signatureDishes) && Array.isArray(p.culinaryEn.dishesEn)) {
          pr.culinaryCulture.signatureDishes.forEach((d, i) => {
            if (p.culinaryEn.dishesEn[i]) d.descriptionEn = p.culinaryEn.dishesEn[i];
          });
        }
      }
      if (Array.isArray(pr.heritageAndLandmarks) && Array.isArray(p.heritagesEn)) {
        pr.heritageAndLandmarks.forEach((h, i) => {
          if (p.heritagesEn[i]) Object.assign(h, p.heritagesEn[i]);
        });
      }
      if (Array.isArray(pr.notableFigures) && Array.isArray(p.figuresEn)) {
        pr.notableFigures.forEach((f, i) => {
          if (p.figuresEn[i]) f.contributionEn = p.figuresEn[i];
        });
      }
      if (pr.literaryAndHistoricalEchoes && p.echoEn) {
        Object.assign(pr.literaryAndHistoricalEchoes, p.echoEn);
      }
      if (pr.commercialAndSupplyChain && p.commercialEn) {
        Object.assign(pr.commercialAndSupplyChain, p.commercialEn);
      }
      if (pr.layer3 && Array.isArray(pr.layer3.stations) && Array.isArray(p.stationsEn)) {
        pr.layer3.stations.forEach((st, i) => {
          if (p.stationsEn[i]) st.noteEn = p.stationsEn[i];
        });
      }
      if (pr.layer3TravelVietnam && Array.isArray(pr.layer3TravelVietnam.hsrStations12306) && Array.isArray(p.stationsEn)) {
        pr.layer3TravelVietnam.hsrStations12306.forEach((st, i) => {
          if (p.stationsEn[i]) st.noteEn = p.stationsEn[i];
        });
      }
    });
  }
})();
