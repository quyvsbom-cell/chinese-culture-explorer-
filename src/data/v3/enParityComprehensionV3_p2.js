(function () {
  'use strict';

  window.CCE_COMPREHENSION_V3_EN = window.CCE_COMPREHENSION_V3_EN || {};

  function Q(qEn, optionsEn, correctIndex, rationaleEn) {
    return {
      qEn: qEn,
      optionsEn: optionsEn,
      correctIndex: correctIndex,
      rationaleEn: rationaleEn
    };
  }

  function F(promptEn, keyCriteriaEn) {
    return {
      promptEn: promptEn,
      keyCriteriaEn: keyCriteriaEn
    };
  }

  var BATCH_P2_EN = {
    'five-sacred-mountains-buddhist-peaks': {
      mcqs: [
        Q('Within the Five Sacred Mountains (Wuyue) aligned to Five-Element directions, which Shandong peak stood foremost as the site of imperial Fengshan sacrifices?', ['Mount Hua', 'Mount Tai (Eastern Peak)', 'Mount Song', 'Mount Heng'], 1, 'Mount Tai represents the East (Wood, renewal of life), where Qin Shi Huang, Emperor Wu of Han, and later rulers performed Fengshan rites.'),
        Q('Which four Bodhisattvas are enshrined at China\'s Four Sacred Buddhist Mountains (Wutai, Emei, Putuo, and Jiuhua)?', ['Manjusri, Samantabhadra, Avalokitesvara, and Ksitigarbha', 'Maitreya exclusively', 'The Four Heavenly Kings', 'Four Tang emperors'], 0, 'Wutai (Manjusri), Emei (Samantabhadra), Putuo (Avalokitesvara), and Jiuhua (Ksitigarbha) form China\'s canonical Buddhist pilgrimage map.')
      ],
      feynman: F('Explain how Chinese civilization transformed natural peaks into a sacred geography combining the Five Sacred Mountains (imperial/Daoist) and Four Buddhist Peaks.', ['Connect Wuyue directional symbolism with Mount Tai\'s Fengshan rites.', 'Outline the Four Buddhist Peaks and their respective Bodhisattvas.', 'Highlight the synthesis of cliff inscriptions, temple architecture, and pilgrimage culture.'])
    },
    'dunhuang-mogao-buddhist-grotto-art': {
      mcqs: [
        Q('What discovery in Cave 17 (the Library Cave) at Dunhuang\'s Mogao Grottoes in 1900 launched modern Dunhuangology?', ['Over 50,000 multilingual manuscripts, contracts, and silk paintings sealed since the early 11th century', 'Thousands of Shang bronze vessels', '19th-century railway blueprints', 'A Qing armory'], 0, 'Cave 17 preserved Chinese, Tibetan, Sogdian, and Khotanese texts alongside the 868 CE woodblock Diamond Sutra.'),
        Q('What aesthetic trajectory unfolds across Mogao\'s thousand years of murals and painted clay sculptures (4th–14th centuries)?', ['Unchanged Indian style throughout', 'Evolution from Gandharan and Western Regions influences in the Northern Wei toward sumptuous Sinicized High Tang elegance', 'Monochrome ink landscapes only', 'Carved granite reliefs exclusively'], 1, 'The gradual Sinicization of Buddhas, Bodhisattvas, and flying apsaras visually charts Silk Road cultural exchange.')
      ],
      feynman: F('Analyze why the Mogao Grottoes at Dunhuang are considered a "desert cliff museum" documenting a millennium of East-West exchange.', ['Situate the Dunhuang oasis at the Silk Road crossroads.', 'Summarize both the artistic legacy of the murals/sculptures and the textual treasure of Cave 17.', 'Connect heritage vulnerability to modern Digital Dunhuang preservation efforts.'])
    },
    'xiqu-stagecraft-face-masks-tuong': {
      mcqs: [
        Q('What are the four canonical role types in Peking Opera and many regional Xiqu traditions?', ['Sheng (male), Dan (female), Jing (painted face), and Chou (clown)', 'King, Official, Soldier, Peasant', 'Singing, Speaking, Dancing, Acrobatics', 'Musician, Director, Painter, Playwright'], 0, 'The four role types combine with four performance skills (Chang, Nian, Zuo, Da) to form classical theatrical grammar.'),
        Q('In Peking Opera facial makeup (Lianpu) and Vietnamese Tuong, what moral traits does a red face (such as Guan Yu) primarily signify?', ['Cunning treachery', 'Loyalty, courage, and righteousness', 'Timidity', 'Comic mischief'], 1, 'Color symbolism (red for loyalty, white for cunning like Cao Cao, black for uprightness like Bao Zheng) communicates character instantly.')
      ],
      feynman: F('Compare the stylized stagecraft of Chinese Peking Opera and Vietnamese Tuong (Hat Boi).', ['Explain minimalist spatial symbolism (a riding whip signifies a horse; twin flags signify a chariot).', 'Compare facial-color codes and role categories across both traditions.', 'Identify Vietnamese localization in music, language, and national-hero repertoire.'])
    },
    'five-vernacular-architecture-styles': {
      mcqs: [
        Q('What signature structural feature of Hui-style residences (Anhui and Jiangxi) prevents fire from spreading between tightly packed houses?', ['Steep thatched roofs', 'Stepped whitewashed "horse-head walls" (Matouqiang) topped with dark tiles', 'All-glass facades', 'Wall-less bamboo stilts'], 1, 'Horse-head walls act as firebreaks along narrow alleys while creating iconic black-and-white silhouettes against misty hills.'),
        Q('What natural physical property makes Yaodong cave dwellings on the Loess Plateau (Shaanxi and Shanxi) environmentally effective?', ['Thick, dry, structurally cohesive loess earth providing high thermal mass (warm in winter, cool in summer)', 'China\'s highest rainfall', 'White marble quarries', 'Marshland timber pilings'], 0, 'Yaodong exemplify low-timber vernacular climate adaptation in semi-arid Northwest China.')
      ],
      feynman: F('Explain how five major Chinese vernacular traditions (Siheyuan, Hui-style, Jiangnan water towns, Tulou, and Yaodong) reflect regional climate and social structure.', ['Link local climate and geology to building materials (rammed earth, brick-timber, loess).', 'Connect floor plans to kinship organization (extended household vs fortified clan).', 'Compare briefly with Vietnamese three-bay timber houses or central-region Nha Ruong.'])
    },
    'ming-qing-fiction-hongloumeng-anatomy': {
      mcqs: [
        Q('Why is Cao Xueqin\'s Dream of the Red Chamber (Hongloumeng) revered as the pinnacle of classical chapter-driven novels and the focus of "Redology"?', ['Purely fantastical battle tales', 'Combining deep psychological realism with multi-layered symbolism that encyclopedically captures 18th-century aristocratic life, architecture, medicine, and poetry', 'Being the shortest of the Four Great Classical Novels', 'Being written in Latin'], 1, 'Hongloumeng transcends heroic romance to deliver profound human tragedy and cultural documentation of the Qianlong era.'),
        Q('Which four works comprise China\'s "Four Great Classical Novels" of the Ming and Qing dynasties?', ['Romance of the Three Kingdoms, Water Margin, Journey to the West, and Dream of the Red Chamber', 'Shiji, Hanshu, Jinshu, Mingshi', 'Shijing, Chuci, Quan Tangshi, Quan Songci', 'Analects, Mencius, Great Learning, Doctrine of the Mean'], 0, 'Rooted in urban storytelling (Huaben), these four novels elevated vernacular Baihua prose to canonical literary stature.')
      ],
      feynman: F('Analyze the literary shift from classical Wenyan to Ming-Qing vernacular chapter novels through the architecture of Dream of the Red Chamber.', ['Explain how urban merchant readership and woodblock printing expanded vernacular fiction.', 'Describe the contrast between realist Jia-family decline and the allegorical Land of Illusion.', 'Note the influence of Ming-Qing chapter novels on pre-modern Vietnamese literature.'])
    },
    'lacquerware-silk-woodblock-new-year-prints': {
      mcqs: [
        Q('What natural material explains the multi-millennia durability of East Asian lacquerware (such as artifacts from the Han Mawangdui tombs)?', ['Petroleum-based synthetic paint', 'Natural sap from the lacquer tree (Toxicodendron vernicifluum) that polymerizes into an acid- and moisture-resistant film in humidity', 'Beeswax mixed with chalk', 'Animal hide glue'], 1, 'Natural urushiol lacquer resists water, acid, and decay, keeping Warring States and Han vessels glossy after 2,000 years.'),
        Q('Which two historic centers represent the northern and southern poles of Chinese woodblock New Year prints (Nianhua)?', ['Yangliuqing (Tianjin) and Taohuawu (Suzhou)', 'Shenzhen and Haikou', 'Harbin and Urumqi', 'Lhasa and Xining'], 0, 'Yangliuqing (blending woodblock printing with delicate hand-painting) and Taohuawu exemplify festive folk printmaking.')
      ],
      feynman: F('Compare the craft techniques and cultural roles of lacquerware, silk weaving, and woodblock New Year prints, drawing parallels with Vietnamese craft traditions.', ['Explain natural lacquer sap curing and its 20th-century evolution in Vietnamese lacquer painting.', 'Compare Yangliuqing and Taohuawu prints with Vietnam\'s Dong Ho and Hang Trong prints.', 'Discuss sustaining artisanal heritage amid mass manufacturing.'])
    },
    'pre-qin-legalism-xunzi-hanfeizi': {
      mcqs: [
        Q('Which three pillars did Han Feizi synthesize from earlier Legalist thinkers into a unified theory of centralized statecraft?', ['Fa (codified public law), Shu (administrative control techniques), and Shi (institutional authority)', 'Ren, Yi, and Zhi', 'Heaven, Earth, and Water', 'Dao, De, and Qi'], 0, 'Han Feizi fused Shang Yang\'s Fa, Shen Buhai\'s Shu, and Shen Dao\'s Shi into a systematic doctrine of state power.'),
        Q('Which Confucian philosopher—teacher of both Han Feizi and Li Si—argued that human nature tends toward self-interest ("Xing E") and requires ritual and law to cultivate order?', ['Mencius', 'Xunzi', 'Zhuangzi', 'Mozi'], 1, 'Xunzi\'s emphasis on deliberate moral shaping through Ritual (Li) and Statute (Fa) bridged Confucianism and Legalism.')
      ],
      feynman: F('Explain why Legalism enabled Qin to unify China swiftly yet failed to sustain peaceful governance over the long term.', ['Analyze how Fa, Shu, and Shi mobilized war resources and curbed aristocratic privilege.', 'Identify the blind spot of relying solely on fear and material incentives without moral legitimacy.', 'Connect this to the later imperial synthesis ("Confucian exterior, Legalist interior").'])
    },
    'song-ming-neo-confucianism-zhu-wang': {
      mcqs: [
        Q('Which four texts did Zhu Xi group and annotate as the "Four Books" (Sishu) serving as the imperial civil examination canon from the Yuan through late Qing?', ['Great Learning, Doctrine of the Mean, Analects, and Mencius', 'Shijing, Shujing, Liji, and Yijing', 'Daodejing, Zhuangzi, Mozi, and Hanfeizi', 'Shiji, Hanshu, Sanguozhi, and Houhanshu'], 0, 'Zhu Xi\'s Collected Commentaries on the Four Books guided East Asian civil examinations for over six centuries.'),
        Q('What does Wang Yangming\'s core thesis "Unity of Knowledge and Action" (Zhixing Heyi 知行合一) assert?', ['Passive book knowledge suffices', 'Genuine moral knowledge manifests immediately in practice; knowing without acting means one has not truly known', 'Blind action without reflection is ideal', 'Truth exists only in ancient scrolls'], 1, 'Wang challenged sterile exam-driven memorization by activating innate moral knowing (liangzhi) in lived action.')
      ],
      feynman: F('Contrast Zhu Xi\'s "Investigation of Things" (Gewu Zhizhi) with Wang Yangming\'s "Extending Innate Knowing and Unity of Knowledge and Action".', ['Explain Cheng-Zhu Principle-Qi dualism and external textual/empirical inquiry.', 'Present Lu-Wang\'s "Mind is Principle" turn toward moral agency.', 'Note both schools\' lasting impact on Dai Viet examinations and Meiji Japanese thought.'])
    },
    'chinese-chan-buddhism-aesthetics': {
      mcqs: [
        Q('What defining Sinicization milestone in Chan Buddhism is associated with Sixth Patriarch Huineng (7th–8th centuries) in the Platform Sutra?', ['Advocating "Sudden Enlightenment" (directly pointing to the human mind) integrated into everyday work and life', 'Restricting practice solely to Sanskrit translation', 'Banning physical labor in monasteries', 'Mandating twenty years of silent isolation'], 0, 'Southern Chan fused Indian Prajnaparamita insight with Daoist naturalness and practical monastic self-reliance.'),
        Q('Which aesthetic sensibilities reflect Chan Buddhism\'s deepest imprint on Tang-Song poetry and painting?', ['Dense gilded ornamentation', 'Negative space (Liubai), understated clarity (Dan), and "painting within poetry" (Wang Wei)', 'Colossal stone colossi', 'Ornate parallel prose'], 1, 'Chan non-attachment and immediate intuition shaped monochrome ink painting and expressive restraint across East Asia.')
      ],
      feynman: F('Explain how Chan Buddhism evolved from Indian Buddhist roots into a signature East Asian cultural and aesthetic tradition.', ['Contrast Gradual versus Sudden Enlightenment debates.', 'Highlight koans, daily monastic labor (Baizhang\'s code), and affinity with Daoist spontaneity.', 'Illustrate Chan influence in Wang Wei\'s poetry or Song-Yuan ink painting.'])
    },
    'mohism-logic-optics-ethics': {
      mcqs: [
        Q('Which two famous social doctrines did Mozi (5th century BCE) champion against wars of aggression and rigid kinship partiality?', ['Impartial Care (Jian\'ai) and Condemnation of Offensive War (Feigong)', 'Wuwei and carefree wandering', 'Harsh penal codes', 'Elaborate aristocratic funerals'], 0, 'Rooted among artisans and defensive specialists, Mohism advocated frugality, meritocracy, and defensive peace.'),
        Q('What early physical optics phenomena were documented in the Mohist Canon (Mojing) centuries before the Common Era?', ['Inverted pinhole-camera imaging (Camera Obscura) and reflection properties of plane, concave, and convex mirrors', 'General relativity', 'Nuclear fission', 'Radio waves'], 0, 'The Mojing contains some of the world\'s earliest geometric definitions, lever mechanics, and pinhole optics.')
      ],
      feynman: F('Explain why Mohism is regarded as a "lost scientific and logical branch" of pre-Qin thought and why it declined during the Han dynasty.', ['Cover its three pillars: Impartial Care/Anti-aggression, defensive engineering, and logic/optics (Three Tests).', 'Contrast Mohist impartial love with Confucian graded filial love.', 'Explain how Han imperial patronage of Confucianism sidelined Mohist empirical traditions for centuries.'])
    },
    'religious-daoism-quanzhen-zhengyi': {
      mcqs: [
        Q('What are the two major institutional orders of contemporary Chinese Religious Daoism?', ['Zhengyi (founded by Zhang Daoling, householder priests, liturgical talismans) and Quanzhen (founded by Wang Chongyang, celibate monastics, internal alchemy)', 'Southern and Eastern schools', 'White Lotus and Taiping', 'Confucian and Mohist orders'], 0, 'Zhengyi flourishes in southern China (Mount Longhu) around community liturgy, while Quanzhen anchors northern monasteries (Beijing\'s White Cloud Temple) around internal alchemy and Three Teachings synthesis.'),
        Q('What major shift in Daoist longevity practice occurred between the Tang and Song-Jin eras?', ['Moving from External Alchemy (toxic mineral elixirs like mercury and cinnabar) to Internal Alchemy (cultivating Essence, Qi, and Spirit within the body)', 'Returning from Internal to External Alchemy', 'Abandoning Qigong completely', 'Focusing solely on historical chronicles'], 0, 'Internal Alchemy (Neidan) integrated Yijing cosmology, Chinese medicine, and breathwork, shaping modern Taiji and wellness practices.')
      ],
      feynman: F('Distinguish Philosophical Daoism (Laozi and Zhuangzi) from Institutional Religious Daoism (Zhengyi and Quanzhen) to clarify a common misconception.', ['Contrast Lao-Zhuang\'s philosophy of Wuwei with Religious Daoism\'s pantheon, liturgy, and cultivation.', 'Compare daily discipline and emphasis between Zhengyi and Quanzhen.', 'Acknowledge Religious Daoism\'s historical contributions to proto-chemistry (gunpowder), pharmacology, and sacred-mountain conservation.'])
    },
    'chu-nom-liushu-script-dialogue': {
      mcqs: [
        Q('Which Liushu structural principles underpin most Vietnamese Chu Nom characters (such as 𡗶 "troi" combining 天 + 上, or 𢆥 "nam" combining 年 + 南)?', ['Ideogrammic compounding and Phono-semantic compounding (pairing a semantic element with a Han-Viet phonetic cue for native Vietnamese)', 'Freehand drawing without Han radicals', 'Borrowing the Latin alphabet', 'Mathematical symbols only'], 0, 'Vietnamese scholars mastered Hanzi construction logic to forge an indigenous script capturing native vernacular speech.'),
        Q('Which 15th-century collection of 254 vernacular poems marks the earliest surviving major monument of Chu Nom literature?', ['Quoc Am Thi Tap (Collected Poems in the National Language) by Nguyen Trai', 'The Tale of Kieu by Nguyen Du', 'Luc Van Tien by Nguyen Dinh Chieu', 'Lament of a Royal Concubine'], 0, 'Nguyen Trai\'s anthology established vernacular poetic craft, paving the way for Nguyen Du and Ho Xuan Huong.')
      ],
      feynman: F('Explain how Chu Nom exemplifies Vietnam\'s creative, sovereign adaptation of Chinese script principles.', ['Analyze 2–3 concrete examples of semantic-phonetic Chu Nom compounding.', 'Describe Chu Nom\'s role in preserving early Vietnamese phonology and national literature.', 'Explain why orthographic complexity and lack of state standardization led Quoc Ngu to supersede it in the 20th century.'])
    },
    'imperial-palace-axes-beijing-thanglong-hue': {
      mcqs: [
        Q('What foundational urban-planning grammar is shared by Beijing\'s Forbidden City, Thang Long Imperial Citadel, and Hue Imperial City?', ['Triple concentric enclosures (Capital, Imperial City, Forbidden Purple City), a central ceremonial axis, and "Outer Court front, Inner Quarters rear"', 'Construction on offshore islands', 'Identical total square footage', 'Complete absence of timber framing'], 0, 'All three capitals share East Asian ritual urbanism rooted in the Zhouli and geomantic landscape alignment.'),
        Q('What distinctive indigenous and cross-cultural synthesis characterizes Nguyen-dynasty Hue Imperial City (1805–1832) compared with Beijing\'s Forbidden City?', ['A triangular citadel layout', 'Integrating classical East Asian palaces with French Vauban star-fortress ramparts, aligning with the Perfume River and Ngu Binh Mountain, and using "twin-roof" (Trung Thiem Diep Oc) timber halls', 'Omitting the Meridian Gate', 'Eliminating water features'], 1, 'Hue fused European military engineering with Vietnamese geomancy, ecological scale, and distinctive timber craftsmanship.')
      ],
      feynman: F('Compare the imperial spatial axes of Beijing, Thang Long, and Hue to distinguish shared East Asian planning grammar from Vietnamese local identity.', ['Outline the shared triple-enclosure and ceremonial axis structure.', 'Highlight Hue\'s Vauban bastions and twin-roof architecture alongside Thang Long\'s 18 Hoang Dieu archaeological layers.', 'Explain how imperial architecture expressed sovereign "Southern Emperor" legitimacy.'])
    },
    'truc-lam-zen-song-yuan-dialogue': {
      mcqs: [
        Q('What defines the philosophical ethos of the Truc Lam Yen Tu Zen school founded by Emperor-Monk Tran Nhan Tong in the late 13th century?', ['Unifying earlier sects into an engaged Vietnamese Buddhist school ("Dwelling in the world while delighting in the Dharma") linked to national independence', 'Total withdrawal from civic society', 'Exclusive propagation inside China', 'Rejecting Confucianism and Daoism outright'], 0, 'After leading two victories against Yuan-Mongol invasions, Tran Nhan Tong retired to Yen Tu yet traveled nationwide teaching ethical living.'),
        Q('Which Chinese Buddhist context did Truc Lam Zen engage with directly during the Tran dynasty?', ['Shang-era religion', 'Song-Yuan Chan Buddhism (Linji and Caodong lineages) and Three Teachings harmony', 'Qin-era Buddhism', '20th-century modernism'], 1, 'Tran Thai Tong and Tran Nhan Tong drew deeply on Song Chan discourse while building an autonomous, socially engaged Dai Viet lineage.')
      ],
      feynman: F('Analyze the "Dwelling in the World, Delighting in the Dharma" spirit of Truc Lam Zen as an emblem of Tran-dynasty cultural sovereignty.', ['Outline the post-war historical setting and the Three Patriarchs (Tran Nhan Tong, Phap Loa, Huyen Quang).', 'Explain how enlightenment is practiced amid civic responsibility rather than escapism.', 'Compare Truc Lam\'s community engagement with Song-Yuan mountain-monastery Chan.'])
    },
    'east-asian-historiography-shiji-toanthu': {
      mcqs: [
        Q('Which historiographical format structures Dai Viet Su Ky Toan Thu (compiled by Ngo Si Lien and Le-dynasty historians)?', ['Chronological annals (year-by-year records accompanied by moral commentaries "The Historian remarks")', 'Alphabetical encyclopedia', 'Stage drama script', 'Personal memoir'], 0, 'Toan Thu blends Sima Guang\'s chronological rigor with the Spring and Autumn moral-judgment tradition.'),
        Q('What is the core political significance of Dai Viet Su Ky Toan Thu\'s dynastic lineage relative to Chinese imperial histories?', ['Accepting Han commandery narratives', 'Establishing an unbroken, co-equal Southern sovereign lineage ("Northern Court – Southern Nation") with distinct ancient origins', 'Recording only 19th-century events', 'Omitting resistance wars'], 1, 'Dai Viet historians deployed East Asia\'s classical historiographical toolkit to assert permanent national sovereignty.')
      ],
      feynman: F('Compare the structural methods and "straight-brush" (truthful recording) ethics of Sima Qian\'s Shiji and Dai Viet Su Ky Toan Thu.', ['Contrast Shiji\'s biographical-annals format with Toan Thu\'s chronological format.', 'Explain the role of historian commentaries ("Grand Historian remarks" / "The Historian remarks").', 'Highlight how Dai Viet chroniclers asserted sovereign historical parity within East Asian historiography.'])
    },
    'bac-y-nam-duoc-comparative-medicine': {
      mcqs: [
        Q('Which two pioneering physicians laid the theoretical and clinical foundations of Vietnamese Traditional Medicine (Nam Duoc)?', ['Zen Master Tue Tinh (14th century, Nam Duoc Than Hieu) and Hai Thuong Lan Ong Le Huu Trac (18th century, Hai Thuong Y Tong Tam Linh)', 'Hua Tuo and Zhang Zhongjing', 'Li Shizhen and Sun Simiao', 'Bian Que and Qin Yueren'], 0, 'Tue Tinh championed "Southern herbs for Southern people," and Hai Thuong Lan Ong synthesized a 28-volume medical encyclopedia alongside nine canons of medical ethics.'),
        Q('Why did Hai Thuong Lan Ong insist on modifying Northern Chinese prescriptions when treating Vietnamese patients?', ['Because Vietnamese patients never fell ill', 'Due to differences in tropical humid climate, local ecology, and southern human constitutions versus northern cold-dry regions', 'Because Northern formulas lacked efficacy anywhere', 'Merely to save manuscript paper'], 1, 'Adapting formulas to time, place, and individual constitution turned shared classical theory into locally optimized clinical practice.')
      ],
      feynman: F('Explain the motto "Southern herbs for Southern people" as an ecological-clinical principle rather than narrow isolationism.', ['Identify the shared Yin-Yang, Five-Element, and organ-theory foundation with Northern Medicine.', 'Explain why indigenous tropical botanicals (lemongrass, ginger, perilla, turmeric) match damp-heat pathology.', 'Highlight the enduring medical ethics in Hai Thuong Lan Ong\'s precepts.'])
    },
    'china-hsr-megaprojects-urban-network': {
      mcqs: [
        Q('What is the official planning framework of China\'s national high-speed rail (HSR) backbone?', ['A single North-South line', 'Eight Vertical and Eight Horizontal corridors (Ba Zong Ba Heng)', 'A single ring around Beijing', 'Three coastal cities only'], 1, 'The 8x8 grid connects nearly all major cities above 500,000 residents, creating 1-to-2-hour metropolitan integration rings.'),
        Q('What is the name of CRRC\'s standardized domestic next-generation high-speed train platform operating commercially at up to 350 km/h on benchmark corridors?', ['Fuxing (Rejuvenation · 复兴号)', 'Peace 1', 'Dongfang 1950', 'Shenzhou'], 0, 'Fuxing (CR400AF/BF) standardized domestic engineering and component platforms following the earlier Hexie generation.')
      ],
      feynman: F('Analyze the economic and spatial effects of China\'s high-speed rail network on supply chains and regional integration.', ['Explain time-space compression across megaregions (Yangtze Delta, Pearl River Delta, Jing-Jin-Ji).', 'Note how shifting passengers to HSR frees conventional rail capacity for bulk freight.', 'Acknowledge fiscal challenges regarding capital outlay, depreciation, and East-West utilization gaps.'])
    },
    'china-green-energy-ev-battery-ecosystem': {
      mcqs: [
        Q('Which three product groups constitute China\'s "New Three" (Xin San Yang) green-tech export pillars?', ['Apparel, toys, and wooden furniture', 'Electric vehicles (EVs), lithium-ion batteries, and solar photovoltaic modules', 'Coal, crude oil, and iron ore', 'Rice, tea, and raw silk'], 1, 'The New Three replaced legacy labor-intensive exports through deep materials supply chains and manufacturing scale.'),
        Q('What core advantage enables China\'s EV ecosystem to compress costs and accelerate model iteration?', ['Domestic vertical integration spanning battery-material refining, LFP/NCM cell manufacturing, electric drivetrains, and smart-cockpit software', 'Skipping vehicle safety standards', 'Pure hand-crafted single-unit assembly', 'Free raw minerals'], 0, 'Co-located battery leaders (CATL, BYD) and parts hubs across Jiangsu, Fujian, Guangdong, and Anhui shorten design-to-market cycles.')
      ],
      feynman: F('Explain how China built end-to-end supply-chain competitiveness across EVs, energy-storage batteries, and solar photovoltaics.', ['Analyze the combination of early industrial policy, intense domestic competition, and vertical battery integration.', 'Explain how LFP battery chemistry improved safety and lowered mass-market EV costs.', 'Identify strategic opportunities and pressures for Vietnam\'s green transition and supporting industries.'])
    },
    'china-digital-payments-platform-economy': {
      mcqs: [
        Q('Which low-cost technology enabled China to leapfrog plastic credit cards straight into a near-cashless mobile economy in the 2010s?', ['QR-code payments embedded in Alipay and WeChat Pay over ubiquitous 4G/5G networks and domestic bank rails', 'Handwritten paper checks', 'Automated coin kiosks', 'Fax bank wires'], 0, 'Near-zero merchant onboarding costs allowed street vendors and major retailers alike to adopt digital payments simultaneously.'),
        Q('How can Vietnamese travelers and business visitors now use Alipay and WeChat Pay across Mainland China?', ['Only after purchasing local real estate', 'By linking international Visa/Mastercard cards directly to passport-verified Alipay/WeChat Pay accounts (subject to prevailing transaction limits and fees)', 'Using US cash exclusively', 'Foreigners remain completely barred'], 1, 'Policy expansions in 2023–2024 streamlined international card binding for convenient QR payments nationwide.')
      ],
      feynman: F('Analyze how China\'s Super-App ecosystem integrating QR payments, delivery, and public services reshaped urban commerce.', ['Explain infrastructure leapfrogging from cash directly to mobile QR rails.', 'Illustrate seamless integration across payments, ride-hailing, rail booking, and e-commerce.', 'Weigh governance trade-offs including data privacy, platform concentration, and elderly digital inclusion.'])
    },
    'modern-chinese-archaeology-sanxingdui-liangzhu': {
      mcqs: [
        Q('How have major discoveries at Liangzhu (Zhejiang, 3300–2300 BCE) and Sanxingdui (Sichuan) reshaped traditional views of Chinese civilization\'s origins?', ['Proving civilization arose solely at a single Yellow River point', 'Supporting the "Pluralistic Unity" model showing multiple advanced centers across the Yangtze, Sichuan, and Yellow River basins converging into Huaxia civilization', 'Disproving ancient bronze casting', 'Dating writing to after the 10th century CE'], 1, 'Liangzhu\'s walled city and hydraulic dams alongside Sanxingdui\'s protruding-eye bronzes demonstrate active early regional complexity.'),
        Q('Which signature jade artifact from Liangzhu Culture (inscribed as a UNESCO World Heritage site in 2019) symbolizes the cosmological motif of "round Heaven, square Earth"?', ['Jade Cong (玉琮 — square exterior, circular interior carved with deity-beast emblems) and Jade Bi', 'Bronze coins', 'Iron armor', 'Blue-and-white porcelain'], 0, 'Liangzhu jades attest to sophisticated craft specialization and social stratification millennia before the Shang.')
      ],
      feynman: F('Explain the archaeological concept of "Pluralistic Unity" (Duoyuan Yiti) using evidence from Liangzhu and Sanxingdui.', ['Describe Liangzhu\'s urban hydraulic engineering and ritual jade culture in the lower Yangtze.', 'Highlight Sanxingdui\'s distinctive bronze-and-gold iconography in the Sichuan Basin.', 'Synthesize how distinct regional cultures merged into the broader Chinese civilizational stream.'])
    },
    'china-space-aerospace-tiangong-beidou': {
      mcqs: [
        Q('What is the name of China\'s independent global satellite navigation system completed for worldwide coverage in 2020?', ['GPS', 'BeiDou (北斗)', 'Galileo', 'GLONASS'], 1, 'BeiDou-3 delivers global positioning, navigation, timing, and a distinctive satellite short-messaging capability.'),
        Q('Which two flagship milestones highlight China\'s spaceflight program in the 2020s?', ['Permanent orbital operation of the Tiangong space station and Chang\'e lunar missions returning samples from both the near and far sides of the Moon', 'Low-altitude weather balloons only', 'Zero crewed missions to date', 'Suspending all launches since 2010'], 0, 'Tiangong completed its T-shaped assembly in 2022, and Chang\'e-6 achieved the first-ever lunar far-side sample return in 2024.')
      ],
      feynman: F('Analyze the scientific significance and commercial-logistics impact of the BeiDou navigation network and Tiangong–Chang\'e space missions.', ['Explain BeiDou\'s applications in automated ports, precision agriculture, and Asia-Pacific logistics tracking.', 'Note the cultural resonance of naming missions after classical mythology (Tiangong, Chang\'e, Zhurong, Tianwen).', 'Assess spillover benefits in advanced materials and telecommunications for civilian industry.'])
    },
    'rcep-acfta-cumulation-rules-vietnam': {
      mcqs: [
        Q('What is RCEP\'s chief Rules of Origin advantage over ACFTA (Form E) for Vietnamese manufacturers sourcing inputs from Japan or South Korea?', ['Eliminating all customs declarations', 'Permitting cumulation of originating materials from all 15 RCEP Parties (including Japan, South Korea, Australia, and New Zealand) toward origin thresholds', 'Waiving all supporting documentation', 'Covering fresh produce exclusively'], 1, 'Under ACFTA, Japanese or Korean fabrics and components count as non-originating, whereas RCEP Article 3.4 cumulates them.'),
        Q('When choosing RCEP proof of origin over C/O Form E, which technical provision in RCEP Article 2.6 must compliance teams verify carefully?', ['Tariff Differentials rules and minimum domestic value-added thresholds in the exporting Party', 'Carton exterior color', 'Office headcount', 'Loading-port weather'], 0, 'Because several RCEP members maintain partner-differentiated schedules, Article 2.6 prevents routing goods through the lowest-tariff Party without sufficient local processing.')
      ],
      feynman: F('Briefly explain WO, RVC 40%, and CTC/CTH origin criteria, and outline how a Vietnamese exporter chooses between C/O Form E and RCEP.', ['Define Wholly Obtained, Regional Value Content 40%, and Change in Tariff Classification clearly.', 'Highlight RCEP\'s 15-member cumulation advantage when using Japanese or Korean inputs.', 'Stress verifying prevailing customs tariff schedules and PSR annexes before finalizing certificates.'])
    },
    'china-trade-fairs-canton-ciie-yiwu-guide': {
      mcqs: [
        Q('What is the core commercial distinction between the Canton Fair (Guangzhou) and CIIE (Shanghai)?', ['Canton Fair primarily serves export sourcing from China across three sector phases; CIIE is dedicated exclusively to foreign exhibitors selling imports into China\'s domestic market', 'Both are retail-only tourist fairs', 'CIIE covers ceramics exclusively', 'Canton Fair meets once every five years'], 0, 'Understanding each mandate guides Vietnamese firms to Canton Fair/Yiwu for sourcing and to CIIE for exporting Vietnamese food and produce into China.'),
        Q('Which indicator on a Chinese Business License (营业执照) provides the strongest initial check distinguishing an original factory from a pure trading company?', ['Logo color on a business card', 'Business scope (经营范围) explicitly listing manufacturing or processing (生产, 加工, 制造) paired with an industrial-park address', 'Fluent English-speaking booth staff', 'A large exhibition booth'], 1, 'License verification paired with an independent on-site factory audit (active machinery, IQC/IPQC/OQC) is essential to verify real capacity.')
      ],
      feynman: F('Design a four-step sourcing workflow from screening booths at the Canton Fair or Yiwu to completing an on-site Factory Audit before paying a deposit.', ['Cover phase alignment and preparing technical specification sheets (Tech Packs).', 'Explain reading the 18-digit Business License to distinguish manufacturers from trading firms.', 'List on-site audit checkpoints (live production lines, IQC/OQC records, warehousing).'])
    },
    'gacc-decree-248-249-vietnam-agri-export': {
      mcqs: [
        Q('Under GACC Decree 248, through which channel must overseas food manufacturers in the 18 high-risk food categories register on CIFER?', ['Direct self-filing without government involvement', 'Audit and official recommendation to GACC by the exporting country\'s competent authority (e.g., MARD, MOIT, or MOH in Vietnam)', 'Verbal declaration at the land border', 'Filing via a freight forwarder'], 1, 'Decree 248 separates 18 closely supervised food categories (requiring competent-authority nomination) from self-registration categories.'),
        Q('Beyond general food-safety rules, what mandatory prerequisites govern formal Vietnamese fresh-fruit exports (such as durian, dragon fruit, or bananas) to China?', ['A signed bilateral Phytosanitary Protocol plus GACC-approved Production Unit Codes (PUC) and Packing House Codes (PHC)', 'Local retail receipts only', 'No pest or residue controls', 'Air freight exclusively'], 0, 'PUC and PHC registries enforce whole-chain traceability and guard against suspension alerts from quarantine pests or residues.')
      ],
      feynman: F('Explain the operational impact of GACC Decrees 248 and 249 and PUC/PHC codes in shifting Vietnamese agricultural exports from informal border trade to formal channels.', ['Distinguish Decree 248 (overseas facility registration on CIFER) from Decree 249 (food-safety oversight and packaging/labeling).', 'Clarify the roles of bilateral Phytosanitary Protocols, orchard codes (PUC), and packing-house codes (PHC).', 'Discuss suspension risks triggered by code-borrowing or residue/pest non-compliance.'])
    },
    'chinese-enterprises-globalization-playbook': {
      mcqs: [
        Q('Which three mechanisms in John Mathews\'s LLL framework explain the rapid global catch-up of latecomer multinationals such as Chinese firms?', ['Linkage, Leverage, and Learning', 'Low-cost, Local-only, and Luck', 'Loan, Lease, and Liquidate', 'Law, Labor, and Land'], 0, 'Latecomers link into global value chains, leverage domestic cluster scale, and learn core capabilities to climb toward OBM.'),
        Q('How is "Supply Chain Globalization" by Chinese manufacturers most visibly manifested across Southeast Asia today?', ['Opening tiny retail booths only', 'Anchor manufacturers relocating alongside tier-1 and tier-2 component, tooling, and packaging satellites near host-country assembly hubs', 'Closing all overseas facilities', 'Halting all R&D spending'], 1, 'Clustered relocation preserves rapid component replenishment while meeting destination-market rules of origin.')
      ],
      feynman: F('Analyze the OEM -> ODM -> OBM value-chain climb of Chinese enterprises and draw two actionable lessons for Vietnamese manufacturers.', ['Explain Stan Shih\'s Smiling Curve contrasting assembly margins with R&D and brand ownership.', 'Detail three localization layers (product adaptation, legal/ESG compliance, local leadership).', 'Highlight opportunities for Vietnamese supporting industries inside multi-node regional supply chains.'])
    },
    'cross-border-b2b-contracts-cietac-viac': {
      mcqs: [
        Q('Under Chinese commercial law, which authentication mark carries decisive legal weight binding a Chinese company to a B2B sales contract?', ['A salesperson\'s signature and an unregistered English oval stamp', 'The police-registered round Corporate Chop (公章) or Contract Seal (合同专用章) matching the legal entity', 'An informal chat message without a contract', 'A printed business card'], 1, 'Under China\'s Civil Code and judicial practice, a registered corporate chop or contract seal is the binding anchor of corporate commitment.'),
        Q('Why is international commercial arbitration (such as CIETAC or VIAC) generally favored over domestic civil courts in Sino-Vietnamese B2B contracts?', ['Arbitration requires no written contract', 'Both Vietnam and China are parties to the 1958 New York Convention, giving arbitral awards far stronger cross-border enforceability than foreign court judgments', 'Arbitration is entirely free of fees', 'Arbitral awards are non-binding'], 1, 'Drafting a clear arbitration clause (exact institution, seat, language) alongside independent QC and a Prevailing Language clause maximizes legal protection.')
      ],
      feynman: F('Outline four mandatory legal safeguards to verify before wiring a deposit on a B2B import contract from China.', ['Verify corporate registration on GSXT, require a valid 公章/Contract Seal, and match the beneficiary bank account name to the contracting legal entity.', 'Specify Prevailing Language, governing law (1980 CISG), and a binding Technical Specification Annex.', 'Tie balance payment to independent PSI/AQL inspection and include a clear CIETAC or VIAC arbitration clause under the 1958 New York Convention.'])
    }
  };

  var key;
  for (key in BATCH_P2_EN) {
    if (Object.prototype.hasOwnProperty.call(BATCH_P2_EN, key)) {
      window.CCE_COMPREHENSION_V3_EN[key] = BATCH_P2_EN[key];
    }
  }
})();
