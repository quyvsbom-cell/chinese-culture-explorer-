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

  var BATCH_P1_EN = {
    'comparative-timber-architecture-dougong': {
      mcqs: [
        Q('What is the primary structural function of Dougong (斗拱) interlocking brackets in Chinese imperial timber architecture?', ['Purely ornamental with zero load-bearing role', 'Transferring wide overhanging roof loads onto columns while dissipating seismic energy through flexible mortise-and-tenon joints', 'Replacing stone foundations beneath the hall', 'Waterproofing timber via oil lacquer'], 1, 'Codified in the Yingzao Fashi (1103), Dougong both support deep eaves and act as elastic shock absorbers during earthquakes.'),
        Q('What did the modular Caifen (材分) unit in Li Jie\'s Yingzao Fashi standardize?', ['Proportional dimensions of the entire timber frame derived from the cross-section of a standard bracket arm', 'Song dynasty land-tax quotas', 'Canal flow velocity', 'Courtyard paving tile sizes'], 0, 'Caifen established eight hierarchical grades scaling every structural component systematically.')
      ],
      feynman: F('Explain in plain terms how a classical Chinese timber palace built without metal nails can withstand severe earthquakes.', ['Highlight flexible mortise-and-tenon joinery and Dougong seismic damping.', 'Explain how load-bearing columns carry heavy roof weight independently of curtain walls.', 'Briefly compare this with Vietnamese communal-hall Ke Chuyen / Chong Ruong framing.'])
    },
    'suzhou-classical-gardens-aesthetics': {
      mcqs: [
        Q('What design principle does "Borrowed Scenery" (Jiejing 借景) in Ji Cheng\'s Yuanye describe?', ['Framing distant exterior landmarks (such as pagodas or hills) into the garden\'s interior sightlines', 'Building artificial hills solely from fired brick', 'Planting only a single bamboo cultivar', 'Blocking all views outside the perimeter wall'], 0, 'Jiejing expands the perceived spatial scale of a compact urban garden by visually annexing external scenery.'),
        Q('Which stone is prized above all others for Suzhou scholar rockeries due to the four aesthetic qualities of slenderness, wrinkling, perforations, and translucency?', ['Gray granite', 'Taihu limestone (Taihu shi)', 'Volcanic basalt', 'Red sandstone'], 1, 'Naturally water-eroded Taihu limestone expresses the classical Jiangnan literati aesthetic ideal.')
      ],
      feynman: F('Explain how a compact Suzhou garden generates the sensation of shifting vistas ("scenery changes with every step") like wandering through vast mountains.', ['Describe winding corridors, lattice windows (louchuang), and framed portals.', 'Analyze Jiejing (borrowed scenery) and spatial compression-then-release.', 'Connect garden composition to classical Chinese landscape painting principles.'])
    },
    'four-treasures-of-the-scholar-study': {
      mcqs: [
        Q('Which four implements constitute the classical "Four Treasures of the Study" (Wenfang Sibao)?', ['Brush, Inkstick, Paper, and Inkstone', 'Zither, Go, Poetry, and Painting', 'Tea, Incense, Flowers, and Lute', 'Seal, Ruler, Oil Lamp, and Censer'], 0, 'Hu brushes, Hui inksticks, Xuan paper, and Duan inkstones represent the canonical regional benchmarks.'),
        Q('What physical quality allows Xuan paper from Jingxian (Anhui) to preserve calligraphy and paintings for centuries?', ['Synthetic optical brighteners', 'Blended Pteroceltis bark fibers and rice straw offering high tensile durability, multi-tonal ink absorption, and insect resistance', 'A waterproof plastic sheen', 'Pure pine wood pulp'], 1, 'Known as "thousand-year paper," Xuan paper supports subtle five-tone ink gradations while resisting aging.')
      ],
      feynman: F('Explain the physical interaction among brush, inkstick, Xuan paper, and inkstone in producing expressive calligraphy.', ['Describe how the inkstone\'s fine grain grinds and retains moisture.', 'Explain how Xuan paper absorbency responds instantaneously to brush speed and pressure.', 'Note the meditative discipline of grinding ink before writing.'])
    },
    'solar-terms-huangdi-neijing': {
      mcqs: [
        Q('What astronomical basis defines the 24 Solar Terms (Ershisi Jieqi)?', ['Monthly lunar phases', 'The Sun\'s ecliptic longitude advancing in 15-degree increments across the solar year', 'East China Sea tidal cycles', 'Comet appearances'], 1, 'The 24 Solar Terms form the solar component of China\'s lunisolar calendar, dividing the 360-degree ecliptic into 24 segments.'),
        Q('What is the core seasonal health principle of the Huangdi Neijing?', ['Isolating human routines from weather cycles', 'Aligning sleep, diet, and emotion with seasonal rhythms of Birth, Growth, Harvest, and Storage', 'Taking tonics exclusively in summer', 'Fasting on every solar term'], 1, 'The classic teaches harmonizing bodily rhythms with Spring sprouting, Summer flourishing, Autumn gathering, and Winter conserving.')
      ],
      feynman: F('Explain why the 24 Solar Terms are solar rather than lunar markers, and how they guided both agriculture and preventive health.', ['Explain the 15-degree ecliptic divisions and key equinox/solstice anchors.', 'Give concrete farming examples such as Grain Rain (Guyu) or Grain in Ear (Mangzhong).', 'Connect seasonal alignment to Huangdi Neijing preventive philosophy.'])
    },
    'imperial-academies-temple-of-literature': {
      mcqs: [
        Q('In which years were the Temple of Literature (Van Mieu) and the Imperial Academy (Quoc Tu Giam) founded in Thang Long under the Ly dynasty?', ['1010 and 1015', '1070 (Van Mieu) and 1076 (Quoc Tu Giam)', '1225 and 1253', '1428 and 1484'], 1, 'Emperor Ly Thanh Tong established Van Mieu in 1070 and Ly Nhan Tong opened Quoc Tu Giam in 1076 as Dai Viet\'s first national university.'),
        Q('What institutional role did the Four Great Academies (Shuyuan) of the Song dynasty play alongside state schools?', ['Collecting local land taxes', 'Serving as centers of independent scholarly lecturing, philosophical debate, and woodblock publishing led by masters like Zhu Xi', 'Training imperial cavalry', 'Minting bronze coinage'], 1, 'White Deer Grotto, Yuelu, Yingtian, and Songyang academies anchored Neo-Confucian intellectual life.')
      ],
      feynman: F('Compare the educational mission of Song-dynasty Shuyuan and imperial academies in China with Van Mieu – Quoc Tu Giam in Thang Long.', ['Identify shared Confucian canon, civil examinations, and official training.', 'Highlight the independent lecture-and-debate ethos of Song private academies.', 'Note the unique Doctor Steles tradition honoring laureates in Thang Long from Emperor Le Thanh Tong onward.'])
    },
    'ganzhi-calendar-bazi-system': {
      mcqs: [
        Q('How is the 60-unit Sexagenary Cycle (Jiazi) mathematically constructed?', ['Pairing 10 Heavenly Stems with 12 Earthly Branches (Yang with Yang, Yin with Yin)', 'Combining 8 Trigrams with 5 Elements', 'Pairing 24 Solar Terms with 12 months', 'Multiplying 28 Lunar Mansions by 7 planets'], 0, 'The least common multiple of 10 and 12 is 60, cycling continuously from Jia-Zi to Gui-Hai.'),
        Q('In the Four Pillars (BaZi) framework, which element serves as the central reference point (Day Master / Rizhu)?', ['The Earthly Branch of the birth year', 'The Heavenly Stem of the birth day', 'The Heavenly Stem of the birth hour', 'The Earthly Branch of the birth month'], 1, 'Since Xu Ziping in the Song dynasty, the Day Stem has anchored Five-Element balance analysis.')
      ],
      feynman: F('Explain the mathematical logic of the 60-term Sexagenary Cycle and distinguish its historical calendrical role from its symbolic use in BaZi.', ['Explain why only 60 of 120 stem-branch combinations occur due to Yin-Yang parity.', 'Cite its use in dating chronicles, inscriptions, and timekeeping.', 'Clearly differentiate objective calendrical notation from symbolic destiny interpretation.'])
    },
    'ziwei-doushu-star-architecture': {
      mcqs: [
        Q('How many functional palaces rotate across the 12 Earthly Branches in a Zi Wei Dou Shu natal chart?', ['8 palaces', '10 palaces', '12 palaces (from Life and Siblings through Parents)', '24 palaces'], 2, 'Twelve fixed palaces map life domains interconnected through trines and oppositions (Sanfang Sizheng).'),
        Q('What are the two major technical schools in classical Zi Wei Dou Shu research?', ['Southern San He school (star configurations and patterns) and Northern Four Transformations / Flying Stars school (Hua Lu, Quan, Ke, Ji)', 'Eastern and Western schools', 'Astronomical and Geological schools', 'Old Text and New Text schools'], 0, 'Synthesizing static star-pattern geometry with dynamic Flying Transformations provides dual analytical cross-checks.')
      ],
      feynman: F('Describe the 12-palace layout of Zi Wei Dou Shu as a structured symbolic matrix of star groups and relational domains.', ['Explain the Life-Body anchor and trine-opposition relationships.', 'Contrast the analytical focus of San He configurations versus Flying Four Transformations.', 'Frame the discipline accurately as a traditional cultural-symbolic system rather than empirical science.'])
    },
    'yijing-hexagrams-strategy-timing': {
      mcqs: [
        Q('How are the 64 hexagrams of the Yijing (Book of Changes) generated?', ['Stacking two of the 8 trigrams as inner and outer trigrams (8 x 8 = 64)', 'Compiling 64 unrelated folk ballads', 'Dividing 365 days by 6', 'Combining 12 Branches with 5 Elements'], 0, 'Each six-line hexagram of Yin and Yang lines models a dynamic situational state across time and position.'),
        Q('What are the three classical meanings of "Yi" (Change) in traditional Yijing exegesis?', ['Constancy (Buyi), Transformation (Bianyi), and Simplicity (Jianyi)', 'Humaneness, Righteousness, and Ritual', 'Heaven, Earth, and Humanity', 'Stillness, Motion, and Emptiness'], 0, 'The classic unites constant underlying patterns with ceaseless change expressed through concise symbols.')
      ],
      feynman: F('Explain the strategic concepts of "Timing" (Shi) and "Position" (Wei) in the Yijing using a concrete progression such as the Qian hexagram or Peace/Standstill.', ['Trace the arc from hidden potential ("submerged dragon") to overextension ("arrogant dragon has cause for regret").', 'Explain the reversal principle when any extreme peaks.', 'Connect these dynamics to modern cycle awareness and risk management.'])
    },
    'maritime-merchants-fujian-guangdong': {
      mcqs: [
        Q('Which Fujian port city during the Song and Yuan dynasties was celebrated by Marco Polo and Ibn Battuta as one of the world\'s busiest maritime hubs?', ['Tianjin', 'Quanzhou (Zaytun)', 'Qingdao', 'Dalian'], 1, 'Quanzhou anchored the Maritime Silk Road, preserving Islamic, Hindu, and Buddhist heritage side by side.'),
        Q('Which 17th–18th-century Vietnamese trading ports were closely integrated into Fujian and Guangdong merchant networks?', ['Hoi An (Faifo) and Pho Hien', 'Sa Pa', 'Da Lat', 'Buon Ma Thuot'], 0, 'The Fujian, Cantonese, and Chaozhou assembly halls in Hoi An stand as direct architectural testimony to East Sea trade.')
      ],
      feynman: F('Analyze how Fujian and Guangdong maritime merchants built cross-border commercial trust through Assembly Halls (Huiguan) and Mazu devotion.', ['Explain Mazu\'s unifying cultural role among seafarers and merchants.', 'Describe the economic and mutual-aid functions of dialect assembly halls in Hoi An and Southeast Asia.', 'Connect this historical network to modern South China trade ecosystems.'])
    },
    'guqin-zither-silent-sound-aesthetics': {
      mcqs: [
        Q('How many strings and hui (inlaid pitch markers) does a standard classical Guqin possess?', ['5 strings and 10 hui', '7 strings and 13 hui', '21 strings and 21 bridges', '4 strings and 12 frets'], 1, 'The seven-string Guqin with 13 hui (symbolizing 12 months plus intercalary month) is distinct from the 21-string Guzheng.'),
        Q('What does the Guqin\'s distinctive Jianzipu (abbreviated-character tablature) record?', ['Absolute Western staff pitches', 'Compact composite symbols specifying exact left-hand stopping positions, right-hand plucking strokes, and string numbers', 'Vernacular song lyrics', 'Percussion accompaniment'], 1, 'Jianzipu intentionally leaves rhythm open for artistic interpretation (dapu), emphasizing the player\'s inner cultivation.')
      ],
      feynman: F('Explain the aesthetic of "subtle sound and resonant silence" in Guqin music and why it stood first among the literati\'s Four Arts.', ['Distinguish the 7-string Guqin structurally from the 21-string Guzheng.', 'Analyze the value of lingering overtones (yun) and deliberate pauses.', 'Reference the ideal of deep empathetic listening in the Bo Ya and Zhong Ziqi story.'])
    },
    'artisan-kilns-to-industrial-clusters': {
      mcqs: [
        Q('Which Jiangxi city earned the title "Porcelain Capital" for over a millennium through kaolin clay resources and a fine division of labor across dozens of steps?', ['Jingdezhen', 'Changsha', 'Luoyang', 'Hefei'], 0, 'Jingdezhen perfected specialized multi-stage workshop division (traditionally 72 steps) centuries before modern assembly lines.'),
        Q('What structural continuity links historic Chinese craft towns to modern "One Town, One Product" industrial clusters?', ['No continuity whatsoever', 'Deep local specialization, dense satellite workshop networks, and accumulated tacit craft knowledge', 'Pure replication of Western plantations', 'Reliance on a single isolated state factory'], 1, 'Modern hubs like Foshan, Suzhou, and Yiwu inherit centuries of inter-workshop coordination and specialized supply density.')
      ],
      feynman: F('Trace the institutional evolution from Jingdezhen\'s specialized porcelain workshops to China\'s contemporary county-level manufacturing clusters.', ['Describe how workshop division of labor lowered costs and raised quality in imperial kilns.', 'Explain agglomeration economies in modern specialized towns.', 'Draw parallels for upgrading craft villages and supporting-industry clusters in Vietnam.'])
    },
    'lu-yu-tea-classic-evolution': {
      mcqs: [
        Q('Who authored the Cha Jing (The Classic of Tea), the world\'s first systematic treatise on tea cultivation and preparation, during the Tang dynasty?', ['Lu Yu', 'Su Shi', 'Li Bai', 'Shen Kuo'], 0, 'Completed around 760–780 CE, Lu Yu\'s Cha Jing codified tea botany, utensils, water quality, and aesthetic ritual.'),
        Q('In what historical sequence did China\'s dominant tea-brewing methods evolve across the Tang, Song, and Ming dynasties?', ['Loose-leaf steeping -> Whisking -> Boiling', 'Boiling compressed tea cakes (Tang) -> Whisking powdered tea (Song) -> Steeping loose leaves in teapots (Ming)', 'Iced tea across all three eras', 'Tea bags since the Tang'], 1, 'Emperor Hongwu\'s 1391 edict abolishing compressed tribute cakes accelerated loose-leaf steeping and Yixing clay teapots.')
      ],
      feynman: F('Summarize the three technical revolutions in Chinese tea preparation across the Tang, Song, and Ming eras and their lasting East Asian legacies.', ['Distinguish Tang boiled tea, Song whisked tea, and Ming steeped loose-leaf tea.', 'Explain Lu Yu\'s role in elevating tea into an aesthetic discipline.', 'Connect Song whisking to Japanese Chanoyu and Ming steeping to Vietnamese tea culture.'])
    },
    'envoy-poetry-bac-hanh-tap-luc': {
      mcqs: [
        Q('Which great Vietnamese poet authored Bac Hanh Tap Luc (Miscellaneous Records of a Northern Journey), over 130 Literary Sinitic poems composed during his 1813–1814 embassy to Qing China?', ['Nguyen Trai', 'Nguyen Du', 'Cao Ba Quat', 'Le Quy Don'], 1, 'Nguyen Du\'s embassy poems combine keen historical observation with profound humanist empathy across borders.'),
        Q('How did Dai Viet envoys conduct sophisticated scholarly exchanges with Chinese and Korean literati despite mutually unintelligible spoken languages?', ['Mechanical translators', 'Brush-talk (Bitam / Bitan) written directly in shared Classical Literary Chinese', 'Latin', 'Sign language'], 1, 'Literary Sinitic functioned as East Asia\'s shared scripta franca for diplomacy, poetry, and philosophy.')
      ],
      feynman: F('Analyze the diplomatic and cultural significance of Vietnamese envoy poetry through Nguyen Du\'s Bac Hanh Tap Luc.', ['Contextualize official Dai Viet embassies traveling across Chinese cultural landmarks.', 'Explain the mechanism of Literary Sinitic brush-talk in East Asian scholarly diplomacy.', 'Highlight the balance between sovereign cultural pride and universal human empathy.'])
    },
    'merchant-ethics-xin-yi-li': {
      mcqs: [
        Q('Within traditional Confucian-merchant (Rushang) ethics, what principle governed sustainable profit-making?', ['Maximizing short-term gain at all costs', '"Seeing profit, think of righteousness" (Jian li si yi) and anchoring long-term trade on trustworthiness (Xin)', 'Banning commerce entirely', 'Conducting only single-day spot trades'], 1, 'Confucian merchants treated reputation and fairness as an enterprise\'s most durable intangible capital.'),
        Q('Before modern digital credit bureaus, how did historic Chinese merchant guilds enforce trust across distant provinces?', ['Guild halls, transparent ledgers, native-place guarantees, and collective reputational ostracism', 'Television advertising', 'Blockchain smart contracts', 'Cash-only unrecorded deals'], 0, 'Regional networks like Huishang and Jinshang turned clan and native-place honor into enforceable social collateral.')
      ],
      feynman: F('Explain why the traditional triad of Trust (Xin), Righteousness (Yi), and Profit (Li) remains operationally relevant in modern supply chains and B2B negotiation.', ['Define the balance among ethical boundaries (Yi), commitment (Xin), and commercial return (Li).', 'Describe how historic guilds lowered transaction costs via reputational governance.', 'Connect these principles to modern contract compliance and ESG stewardship.'])
    },
    'han-viet-phonology-middle-chinese': {
      mcqs: [
        Q('Which historical stage of Chinese phonology forms the primary foundation of standard Sino-Vietnamese (Han-Viet) readings?', ['20th-century Beijing Mandarin', 'Late Tang to early Song Middle Chinese (roughly 8th–10th centuries)', 'Shang-dynasty Old Chinese', '19th-century Cantonese'], 1, 'Sino-Vietnamese preserves Middle Chinese entering-tone codas (-p, -t, -k) that disappeared in modern Standard Mandarin.'),
        Q('Why are entering-tone endings (-p, -t, -c, -ch, as in hoc 学, quoc 国, phap 法) in Sino-Vietnamese invaluable to historical linguistics?', ['Because they mirror English spelling', 'Because Mandarin lost these final stop consonants, making Sino-Vietnamese vital evidence for reconstructing Middle Chinese', 'Because they appeared after 1950', 'Because they carry no lexical meaning'], 1, 'Alongside Cantonese, Minnan, Sino-Korean, and Sino-Japanese, Sino-Vietnamese functions as a living phonetic fossil.')
      ],
      feynman: F('Explain why Vietnamese learners with strong Han-Viet vocabulary have a natural advantage in academic Chinese, alongside the phonetic shifts they must watch for.', ['Link Han-Viet pronunciation historically to Tang-Song Middle Chinese.', 'Show regular coda correspondences (preserved -p/-t/-k in Vietnamese vs lost stops in Mandarin).', 'Give concrete cognate examples illustrating fast vocabulary transfer.'])
    },
    'ten-merchant-guilds-huizhou-shanxi': {
      mcqs: [
        Q('What financial innovation made the Rishengchang draft bank (Piaohao), founded in Pingyao by Shanxi merchants in 1823, famous?', ['Digital cryptocurrency', 'Interregional remittance via coded anti-counterfeit silver drafts replacing risky physical bullion transport', 'Local village grain loans only', 'Minting European gold coins'], 1, 'Rishengchang pioneered China\'s first nationwide remittance banking network.'),
        Q('What modern corporate-governance mechanism did Shanxi merchants\' "Labor Share" (Ding Shengu 顶身股) anticipate?', ['Granting profit-sharing equity stakes to non-owner managers based on performance—comparable to modern ESOPs', 'Forcing unpaid labor', 'Reserving all shares for imperial officials', 'Taxing freight shipments'], 0, 'Separating capital shares (Yingu) from managerial shares (Shengu) aligned branch managers\' incentives across vast distances.')
      ],
      feynman: F('Compare the organizational models of the Ming-Qing Shanxi (Jinshang) and Huizhou (Huishang) merchant guilds.', ['Detail Jinshang\'s draft banking, coded security, and managerial profit-sharing shares.', 'Highlight Huishang\'s Confucian-merchant ethos, salt-tea-stationery trade, and cultural patronage.', 'Draw lessons for talent retention and branch control before modern telecommunications.'])
    },
    'forbidden-city-3d-dissection': {
      mcqs: [
        Q('Which classical spatial doctrine from the Zhouli Kaogongji governs the layout of Beijing\'s Forbidden City (begun in 1406 under the Yongle Emperor)?', ['"Outer Court in front, Inner Quarters behind" aligned along a strict North-South ceremonial axis', 'A circular axis-free layout', 'Placing residential palaces south of Meridian Gate', 'Omitting perimeter walls and moats'], 0, 'The Outer Court (Three Great Halls) faces south for state rituals, while the Inner Court sits north for imperial residence.'),
        Q('Which number is systematically encoded across the Forbidden City (9x9 door studs, multiples of 9 in stairs, the legendary 9,999.5 rooms) to signify supreme imperial authority?', ['Four', 'Six', 'Nine (Supreme Yang / Jiuwu Zhi Zun)', 'Ten'], 2, 'In Yijing numerology, nine is the highest Yang integer, symbolizing imperial sovereignty.')
      ],
      feynman: F('Analyze the Forbidden City as a physical diagram of cosmology and political hierarchy built in timber, marble, and axial space.', ['Trace the North-South axis from Meridian Gate through the Three Great Halls to the Palace of Heavenly Purity.', 'Explain the symbolism of yellow glazed roof tiles, vermilion walls, and the number nine.', 'Connect this imperial grammar to creative adaptations in Thang Long and Hue.'])
    },
    'traditional-architecture-gardens': {
      mcqs: [
        Q('The complementary contrast between northern imperial palaces (e.g., Forbidden City) and southern literati gardens (e.g., Humble Administrator\'s Garden) reflects which pair of philosophies?', ['Confucianism (symmetry, hierarchy, ritual order) and Daoism/Chan (naturalness, asymmetry, quietude)', 'Legalism alone', 'Gothic and Baroque styles', 'A complete separation from philosophy'], 0, 'Axial palace symmetry manifests Confucian order, while winding garden paths embody Daoist and Chan spontaneity.'),
        Q('Which two natural elements form the unifying soul of both classical gardens and landscape architecture?', ['Water (shui) and Mountain/Stone (shan)', 'Tempered glass', 'Reinforced concrete', 'Industrial floodlights'], 0, 'The classical ideal of harmonizing mountain and water structures East Asian spatial aesthetics.')
      ],
      feynman: F('Contrast the spatial language of a symmetrical Confucian palace with an asymmetrical literati garden to illustrate how scholars balanced public duty and inner retreat.', ['Compare straight axial symmetry with winding, concealed-then-revealed paths.', 'Note material and color contrasts between imperial splendor and scholar restraint.', 'Explain how both ideals coexisted within traditional East Asian intellectual life.'])
    },
    'xia-shang-zhou-oracle-bones-rituals': {
      mcqs: [
        Q('Which dynasty is the earliest confirmed by archaeology to possess a mature writing system (Oracle Bone Script) excavated at Yinxu (Anyang, Henan)?', ['Xia dynasty', 'Shang dynasty (Late Shang / Yin)', 'Qin dynasty', 'Han dynasty'], 1, 'Over 150,000 oracle bone fragments from Yinxu corroborate the late Shang royal genealogy from King Wu Ding onward.'),
        Q('What was the decisive ideological shift from the Shang dynasty to the Western Zhou?', ['Transitioning from absolute theocratic divination to the moral Mandate of Heaven (Tianming) and codified Ritual-Music (Liyue) lineage order', 'Abolishing writing completely', 'Replacing bronze immediately with iron', 'Enforcing nationwide commanderies'], 0, 'The Duke of Zhou grounded political legitimacy in moral virtue rather than unconditional ancestral favor.')
      ],
      feynman: F('Explain the dual evidentiary value of Shang oracle bones and Western Zhou bronze inscriptions in anchoring early Chinese history.', ['Show how oracle bones verified the Shang king list recorded a millennium later in Sima Qian\'s Shiji.', 'Describe Zhou bronze inscriptions as enduring legal charters and lineage records.', 'Trace the ideological shift from Shang divination to Zhou moral accountability and Ritual-Music.'])
    },
    'qin-institutional-standardization': {
      mcqs: [
        Q('Following unification in 221 BCE, what administrative system did the Qin dynasty implement nationwide to replace Western Zhou enfeoffment?', ['The Commandery-County (Junxian) bureaucracy with centrally appointed, removable officials', 'A loose confederation of autonomous states', 'Tribal communes', 'Independent city-states'], 0, 'Advised by Li Si, Qin Shi Huang abolished hereditary fiefs and established centralized territorial governance.'),
        Q('Which standardized script did the Qin policy of "Unified Writing" (Shu Tong Wen) promulgate across the empire?', ['Oracle Bone Script', 'Small Seal Script (Xiaozhuan, codified by Li Si)', 'Wild Cursive Script', 'Modern Simplified Script'], 1, 'Standardizing Small Seal Script—alongside emerging Clerical Script for bureaucracy—unified imperial administration across divergent spoken dialects.')
      ],
      feynman: F('Analyze why the Qin dynasty collapsed after just 15 years while its institutional architecture ("Qin System") endured for over two millennia.', ['List core infrastructural standardizations: Junxian, unified script, axle gauges, weights/measures, and Banliang coinage.', 'Explain collapse via harsh Legalist penal excess and exhausting corvee mobilization.', 'Show how the Han retained Qin administrative machinery while moderating it with Confucian governance.'])
    },
    'song-dynasty-urban-science-renaissance': {
      mcqs: [
        Q('What urban revolution of the Northern Song is vividly documented in Zhang Zeduan\'s scroll Along the River During the Qingming Festival?', ['The breakdown of walled ward-and-market curfews, giving rise to bustling open-street commerce and night markets in Bianjing', 'Cities restricted exclusively to military garrisons', 'Total closure of commercial shops', 'Abandonment of lowland cities'], 0, 'Unlike Tang Chang\'an\'s segregated wards, Song Bianjing integrated street-facing shops, teahouses, and active night markets.'),
        Q('Which technological and financial breakthroughs matured or saw wide application during the Song era?', ['Steam engines, telegraphs, aircraft, and internet', 'Movable-type printing (Bi Sheng), mariner\'s compass, military gunpowder, and Jiaozi paper currency', 'Basket weaving alone', 'Reinforced concrete and stainless steel'], 1, 'Bi Sheng invented ceramic movable type in the 1040s, Shen Kuo documented magnetic declination, and Sichuan pioneered Jiaozi banknotes.')
      ],
      feynman: F('Evaluate why historians often describe the Song dynasty as an "early modern" turning point in markets, urban life, and science.', ['Highlight the end of ward curfews and the emergence of Jiaozi paper money.', 'Cite landmark scientific works by Shen Kuo, Su Song, and Bi Sheng.', 'Connect expanded civil examinations and woodblock printing to Song literati culture.'])
    },
    'grand-canal-dujiangyan-hydraulic-empire': {
      mcqs: [
        Q('What is the defining engineering genius of Li Bing\'s Dujiangyan irrigation system built in 256 BCE in Sichuan?', ['Blocking the Min River completely with a massive concrete dam', 'Diverting water and flushing silt naturally without damming the main channel via the Fish Mouth levee, Flying Sand Weir, and Bottle-Neck Channel', 'Using steam-powered pumps', 'Collecting winter rainwater only'], 1, 'By working with river hydrodynamics rather than obstructing them, Dujiangyan has irrigated the Chengdu Plain for over 2,200 years.'),
        Q('What strategic imperial function did the Grand Canal (expanded under Emperor Yang of Sui and straightened to link Beijing and Hangzhou under the Yuan) fulfill?', ['Royal pleasure cruises only', 'Transporting grain tax (Caoyun) from the fertile Jiangnan rice basket north to sustain the political and military capital', 'Blocking maritime ships', 'Replacing the Silk Road entirely'], 1, 'Connecting five major river basins, the Grand Canal stitched together China\'s southern economic core and northern political center.')
      ],
      feynman: F('Compare the ecological engineering philosophy of Dujiangyan with the geopolitical-economic role of the Grand Canal.', ['Explain how Dujiangyan\'s three components self-regulate flood diversion and silt discharge.', 'Analyze the North-South fiscal imbalance solved by Grand Canal grain transport.', 'Reflect on how large-scale water governance shaped imperial state capacity.'])
    },
    'modern-china-transformation-1840-1949': {
      mcqs: [
        Q('How do historians commonly summarize the three-stage deepening of Chinese modernization efforts between 1840 and 1919?', ['Culture -> Institutions -> Technology', 'Technology/hardware (Self-Strengthening) -> Political institutions (1898 Reform / 1911 Revolution) -> Culture and thought (New Culture & May Fourth 1919)', 'Military drills without intellectual change', 'Total isolation for a century'], 1, 'Reformers progressed from "Chinese essence, Western utility" to constitutional and republican restructuring, culminating in cultural and vernacular renewal.'),
        Q('What constitutional watershed did the 1911 Xinhai Revolution (sparked by the Wuchang Uprising) bring about?', ['Restoring Western Zhou enfeoffment', 'Ending over two millennia of imperial monarchy and establishing the Republic of China', 'Restoring the Ming throne', 'Abolishing Chinese characters'], 1, 'The 1911 Revolution ended Qing rule and the imperial system dating back to 221 BCE.')
      ],
      feynman: F('Analyze China\'s three-stage transformation (Technology, Institutions, Culture) from the 1840 Opium War through the 1919 May Fourth Movement.', ['Explain why the Self-Strengthening Movement\'s hardware-only focus fell short.', 'Summarize the institutional break of 1911 and the vernacular/intellectual shift of 1919.', 'Draw parallels with early 20th-century Vietnamese reform movements such as Duy Tan and Dong Du.'])
    },
    'sixteen-ancient-capitals-geopolitics': {
      mcqs: [
        Q('What long-term geopolitical trend explains the eastward and northeastward shift of Chinese capitals (Chang\'an -> Luoyang -> Kaifeng -> Beijing)?', ['Random imperial preference', 'Economic gravity shifting south to Jiangnan, dependence on Grand Canal grain logistics, and northern steppe frontier defense', 'Total drying of the Yellow River', 'East China Sea tidal pressure'], 1, 'As Guanzhong\'s ecological capacity declined and canal logistics grew vital, capitals moved east and later north to Beijing under the Yuan, Ming, and Qing.'),
        Q('Which four cities are traditionally grouped as China\'s "Four Great Ancient Capitals"?', ['Shanghai, Shenzhen, Chongqing, Chengdu', 'Xi\'an (Chang\'an), Luoyang, Nanjing, and Beijing', 'Qingdao, Harbin, Kunming, Lhasa', 'Guangzhou, Xiamen, Ningbo, Hefei'], 1, 'Xi\'an, Luoyang, Nanjing, and Beijing preserve the densest layers of imperial urban heritage.')
      ],
      feynman: F('Explain the geographic, military, and logistical logic behind shifting imperial capitals among Chang\'an, Luoyang, Kaifeng, Nanjing, and Beijing.', ['Assess Chang\'an\'s defensible Guanzhong basin versus its later grain-supply bottleneck.', 'Show how Grand Canal connectivity elevated Kaifeng and Beijing.', 'Note Nanjing\'s natural river-and-mountain defense during periods of North-South division.'])
    },
    'tea-horse-road-southwest-corridor': {
      mcqs: [
        Q('What ecological-economic complementarity sustained the Ancient Tea-Horse Road (Chama Gudao) linking Yunnan and Sichuan with the Tibetan Plateau?', ['Tibetan communities needed compressed tea to digest high-fat meat and dairy diets, while central dynasties needed hardy plateau warhorses', 'Exporting silk to Europe only', 'Shipping sea salt to Tibet', 'Purely non-commercial pilgrimage'], 0, 'The Tea-Horse exchange operated from the Tang-Song eras into the 20th century as Southwest China\'s economic artery.'),
        Q('Which Yunnan tea developed its signature post-fermented profile directly from months-long mule-caravan transit across shifting climates along the Tea-Horse Road?', ['Longjing green tea', 'Pu-erh tea', 'Biluochun', 'Tieguanyin'], 1, 'Humidity and temperature swings during overland transport naturally triggered microbial aging, defining Pu-erh\'s identity.')
      ],
      feynman: F('Describe the Tea-Horse Road as a multi-ethnic ecological and cultural corridor rather than a simple trade track.', ['Explain the mutual necessity linking humid-zone tea and plateau horses.', 'Mention key relay towns such as Lijiang, Dali, and Diqing.', 'Highlight the cultural coexistence of Tibetan, Naxi, Bai, Yi, and Han communities along the routes.'])
    },
    'chinese-fermentation-spices-culinary-geography': {
      mcqs: [
        Q('Within China\'s Eight Great Culinary Traditions, which regional cuisine is defined by the "Mala" pairing of numbing Sichuan peppercorn and chili heat?', ['Cantonese (Yue)', 'Sichuan (Chuan)', 'Jiangsu (Su)', 'Shandong (Lu)'], 1, 'Sichuan\'s humid basin combined indigenous Sichuan peppercorn with New World chilies introduced in the 16th–17th centuries.'),
        Q('Which microbial starter distinguishes East Asian soy and grain fermentation (soy sauce, bean paste, black vinegar, rice wine) from European malted beer brewing?', ['Qu (koji / 曲) harboring Aspergillus molds that simultaneously saccharify starch and drive fermentation', 'Sea salt without microbes', 'Synthetic industrial acid', 'Sun-drying without fermentation'], 0, 'Qu fermentation converts whole grains and soybeans directly into complex umami-rich seasonings.')
      ],
      feynman: F('Explain how climate and geography shaped China\'s regional flavor map alongside the foundational science of Qu fermentation.', ['Connect local climate and produce to the four major poles (Lu, Chuan, Yue, Huaiyang).', 'Explain how Qu-based soy, vinegar, and bean-paste fermentation solved preservation and flavor challenges.', 'Compare this with Vietnam\'s fish-sauce (nuoc mam) and soy-paste (tuong) fermentation traditions.'])
    },
    'chinese-liquor-culture-baijiu-huangjiu': {
      mcqs: [
        Q('What is the fundamental production difference between Huangjiu (e.g., Shaoxing rice wine) and Baijiu (e.g., Moutai, Wuliangye)?', ['Huangjiu is a fermented, undistilled glutinous-rice wine of moderate ABV; Baijiu is a high-proof distilled spirit produced via solid-state grain fermentation', 'Huangjiu is made from grapes while Baijiu uses apples', 'Both are distilled above 60% ABV', 'Huangjiu originated in the 20th century'], 0, 'Huangjiu traces back over 3,000 years in Jiangnan, whereas distilled Baijiu proliferated from the Yuan and Ming dynasties onward.'),
        Q('What are the three foundational aroma categories of Chinese Baijiu?', ['Sweet, Sour, and Bitter', 'Sauce-aroma (Jiangxiang / Moutai), Strong-aroma (Nongxiang / Wuliangye), and Light-aroma (Qingxiang / Fenjiu)', 'Coffee, cocoa, and honey', 'Only a single uniform aroma'], 1, 'Starter type (qu), fermentation vessel (mud pit vs ceramic jar), and local microbial ecology generate these three canonical profiles.')
      ],
      feynman: F('Distinguish Huangjiu and Baijiu across history, fermentation/distillation mechanics, and banquet etiquette.', ['Contrast undistilled rice-wine fermentation with solid-state distillation.', 'Explain microbial terroir along river basins such as Guizhou\'s Chishui River.', 'Outline key toasting etiquette and seniority cues at formal Chinese banquets.'])
    }
  };

  var key;
  for (key in BATCH_P1_EN) {
    if (Object.prototype.hasOwnProperty.call(BATCH_P1_EN, key)) {
      window.CCE_COMPREHENSION_V3_EN[key] = BATCH_P1_EN[key];
    }
  }
})();
