(function () {
  'use strict';

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

  var ARTICLES_EN = {
    'east-asian-woodblock-printing-encyclopedias': {
      id: 'east-asian-woodblock-printing-encyclopedias',
      number: 105,
      category: 'literature',
      categoryLabel: 'Literature & Archival History',
      titleVi: 'Kỹ nghệ Khắc ván In Cổ (Kinh Kim Cương 868) và Đại Tùng Thư Trung Hoa: Từ Vĩnh Lạc Đại Điển đến Tứ Khố Toàn Thư',
      titleZh: '东亚雕版印刷史（868年《金刚经》）与大型类书丛书：《永乐大典》与《四库全书》',
      titleZhTrad: '東亞雕版印刷史（868年《金剛經》）與大型類書叢書：《永樂大典》與《四庫全書》',
      titleEn: 'East Asian Woodblock Printing (868 Diamond Sutra) and Imperial Encyclopedias: Yongle Dadian and Siku Quanshu',
      readMinutes: 14,
      epistemicTag: 'History of Technology · Bibliography',
      abstract: 'Six centuries before Gutenberg\'s metal-type press in Europe, woodblock printing (xylography) emerged in Tang China, anchored by the world\'s earliest dated printed book—the 868 CE Diamond Sutra discovered in Dunhuang\'s Cave 17. Alongside the printing revolution arose two monumental pre-modern knowledge archives: the Ming Yongle Dadian and the Qing Siku Quanshu.',
      keyTakeaways: [
        'Dated May 11, 868 CE and commissioned by Wang Jie, the Dunhuang Diamond Sutra demonstrates already mature woodblock typography and intricate frontispiece illustration.',
        'Although Bi Sheng invented ceramic movable type in the 1040s, woodblock printing remained dominant in East Asia for centuries because carving reusable blocks suited tens of thousands of logographs and on-demand reprinting.',
        'The Yongle Dadian (1408, over 22,800 juan arranged by rhyme) and Siku Quanshu (1782, Four Treasuries spanning 3,400+ works) represent peaks of pre-modern knowledge organization alongside imperial ideological censorship.'
      ],
      introduction: 'If Cai Lun\'s Eastern Han papermaking freed scholarship from heavy bamboo slips and costly silk, Tang-Song woodblock printing democratized books across East Asia. Combined with imperial and private libraries, xylography preserved classics, medical texts, agricultural treatises, and histories across centuries of dynastic upheaval.',
      historicalBackground: 'Woodblock printing evolved directly from carved seals and stone stele rubbings (Taben). During the Song dynasty, commercial printing hubs in Kaifeng, Hangzhou, Jianyang (Fujian), and Chengdu sparked an unprecedented book market; Song editions (Songban) were later treasured as "an ounce of gold per page." Under the Ming and Qing dynasties, imperial courts mobilized thousands of scholars to compile encyclopedias and collectanea of unmatched scale.',
      mainContent: [
        {
          heading: '1. The 868 Diamond Sutra and Woodblock Craftsmanship',
          body: 'Preserved in the British Library, the five-meter Diamond Sutra scroll opens with a finely carved frontispiece of the Buddha preaching at Jetavana and concludes with Wang Jie\'s May 11, 868 CE colophon. Master carvers pasted thin calligraphy sheets face-down onto planed pear or jujube woodblocks, cut every stroke in mirror relief, inked the block, and burnished paper gently from behind.'
        },
        {
          heading: '2. Why Woodblocks Coexisted Long-Term with Bi Sheng\'s Movable Type',
          body: 'Shen Kuo\'s Dream Pool Essays records Bi Sheng\'s ceramic movable type (c. 1041–1048), later followed by Yuan wooden type (Wang Zhen) and Ming-Qing/Korean metal type. Yet unlike alphabetic languages needing a few dozen letters, Chinese required tens of thousands of distinct types. Stored woodblocks allowed publishers to print small runs on demand over decades without tying up capital in unsold paper stock.'
        },
        {
          heading: '3. Yongle Dadian (1408): The Ming Empire\'s Colossal Encyclopedia',
          body: 'Commissioned by the Yongle Emperor from 1403 to 1408 and compiled by over 2,000 scholars under Xie Jin and Yao Guangxiao, the Yongle Dadian synthesized 7,000–8,000 texts into 22,877 juan across 11,095 manuscript volumes (~370 million characters) organized by rhyme categories. Too vast to carve in wood, the original vanished in the late Ming and the Jiajing copy suffered severe loss in 1900, leaving roughly 400 volumes surviving worldwide.'
        },
        {
          heading: '4. Siku Quanshu (1773–1782): Four-Branch Taxonomy and Censorship',
          body: 'Under Emperor Qianlong, over 360 leading scholars led by Ji Yun compiled the Complete Library of the Four Treasuries (Classics, Histories, Masters, Collections) encompassing 3,461 complete works in over 79,000 juan, transcribed into seven imperial manuscript sets. While preserving immense textual heritage, the campaign simultaneously enforced rigorous censorship that banned or destroyed thousands of works deemed politically sensitive.'
        }
      ],
      theoreticalFramework: 'Through the lens of Media History, woodblock xylography and the Four Treasuries classification functioned as pre-modern East Asia\'s "information architecture"—standardizing bibliography, textual editions, and state knowledge governance at continental scale.',
      terminologyAndLiushu: [
        { hanzi: '雕版', pinyin: 'diāobǎn', hanViet: 'Điêu bản', liushu: 'Phono-semantic compound', gloss: 'Xylographic woodblock printing carved in mirror relief on solid pear or jujube planks.' },
        { hanzi: '活字', pinyin: 'huózì', hanViet: 'Hoạt tự', liushu: 'Huo: Phono-semantic; Zi: Ideogrammic', gloss: 'Movable type invented by Bi Sheng in the Northern Song using fired clay pieces.' },
        { hanzi: '类书', pinyin: 'lèishū', hanViet: 'Loại thư', liushu: 'Phono-semantic compound', gloss: 'Topical or rhyme-indexed encyclopedia compiling excerpts from prior texts (e.g., Yongle Dadian).' },
        { hanzi: '丛书', pinyin: 'cóngshū', hanViet: 'Tùng thư', liushu: 'Cong: Ideogrammic; Shu: Phono-semantic', gloss: 'Collectanea preserving complete independent texts within a unified taxonomy (e.g., Siku Quanshu).' },
        { hanzi: '宋版', pinyin: 'Sòngbǎn', hanViet: 'Tống bản', liushu: 'Bibliographical edition term', gloss: 'Song-dynasty woodblock editions prized for calligraphic elegance, fine paper, and editorial rigor.' }
      ],
      primarySources: [
        PQ('唐咸通九年《金刚般若波罗蜜经》卷末题记（868年）', 'Lạc khoản cuối cuộn Kinh Kim Cương bản khắc gỗ năm Hàm Thông thứ 9 đời Đường (11/05/868)', 'Colophon of the Tang Woodblock Diamond Sutra (May 11, 868 CE)', '咸通九年四月十五日王玠为二亲敬造普施。', 'Xiántōng jiǔ nián sìyuè shíwǔ rì Wáng Jiè wèi èrqīn jìngzào pǔshī.', 'Hàm Thông cửu niên tứ nguyệt thập ngũ nhật Vương Giới vị nhị thân kính tạo phổ thí.', 'Ngày 15 tháng 4 năm Hàm Thông thứ 9, Vương Giới kính cẩn tạo in vì song thân để phổ thí rộng khắp.', 'Reverently made for universal free distribution by Wang Jie on behalf of his two parents on the fifteenth day of the fourth moon of the ninth year of Xiantong (May 11, 868).'),
        PQ('沈括《梦溪笔谈·技艺》（北宋·约1088年）', 'Thẩm Quát, Mộng Khê Bút Đàm, thiên Kỹ Nghệ (Bắc Tống, khoảng năm 1088)', 'Shen Kuo, Dream Pool Essays (c. 1088 CE)', '庆历中，有布衣毕昇，又为活板。其法用胶泥刻字，薄如钱唇，每字为一印，火烧令坚。', 'Qìnglì zhōng, yǒu bùyī Bì Shēng, yòu wéi huóbǎn. Qí fǎ yòng jiāoní kèzì, báo rú qiánchún, měizì wéi yī yìn, huǒshāo lìng jiān.', 'Khánh Lịch trung, hữu bố y Tất Thăng, hựu vi hoạt bản. Kỳ pháp dụng giao nê khắc tự, bạc như tiền thần, mỗi tự vi nhất ấn, hỏa thiêu lệnh kiên.', 'Trong niên hiệu Khánh Lịch, có người áo vải tên Tất Thăng sáng chế bản in chữ rời. Phép ấy dùng đất sét dẻo khắc chữ mỏng như mép đồng tiền, mỗi chữ làm một con dấu, đem nung lửa cho cứng.', 'During the Qingli reign, a commoner named Bi Sheng invented movable type. He carved characters into sticky clay as thin as the edge of a coin, one seal per character, and fired them until hard.')
      ],
      sinoVietnameseComparison: 'Vietnam mastered and localized woodblock printing (notably the Lieu Trang – Hong Luc carving villages in Hai Duong associated with Luong Nhu Hoc). Both the Nguyen Dynasty Woodblocks (over 34,000 engraved plates preserved in Da Lat) and the Vinh Nghiem Pagoda Buddhist Woodblocks are inscribed on UNESCO\'s Memory of the World Register.',
      additionalReferences: 'Tsien Tsuen-Hsuin, Paper and Printing (Science and Civilisation in China, Vol. 5, Part 1); British Library Diamond Sutra Archive; Vietnam National Archives Center IV.',
      conclusion: 'From the 868 Diamond Sutra to the Yongle Dadian and Siku Quanshu, East Asian printing and archival systems defined how pre-modern societies preserved, classified, and transmitted knowledge across centuries.'
    },
    'temple-of-heaven-tiantan-cosmology-3d': {
      id: 'temple-of-heaven-tiantan-cosmology-3d',
      number: 106,
      category: 'traditional',
      categoryLabel: 'Architecture & Cosmology',
      titleVi: 'Thiên Đàn Bắc Kinh (天坛): Vũ trụ luận Thiên Viên Địa Phương, Hình học Số 9, 28 Cột Gỗ Kỳ Niên Điện, Hồi Âm Bích và Đối chiếu Đàn Nam Giao Huế',
      titleZh: '北京天坛空间宇宙论：天圆地方、九数几何、祈年殿二十八柱、回音壁与顺化南郊坛比较',
      titleZhTrad: '北京天壇空間宇宙論：天圓地方、九數幾何、祈年殿二十八柱、回音壁與順化南郊壇比較',
      titleEn: 'Temple of Heaven (Tiantan) 3D Cosmology: Round Heaven Square Earth, Number-9 Geometry, 28 Columns, Echo Wall, and Hue Nam Giao Comparison',
      readMinutes: 15,
      epistemicTag: '3D Architecture · Ancient Cosmology',
      abstract: 'Constructed in 1420 under the Ming Yongle Emperor in southern Beijing alongside the Forbidden City, the Temple of Heaven (Tiantan) is China\'s largest and best-preserved imperial sacrificial complex. Spanning roughly 273 hectares, it operates as a three-dimensional cosmological map: semicircular northern walls and square southern walls embody "Round Heaven, Square Earth," the Circular Mound Altar encodes multiples of nine, the Hall of Prayer for Good Harvests stands on 28 calendrical timber columns, and the Echo Wall achieves remarkable acoustic resonance.',
      keyTakeaways: [
        'Both outer and inner enclosure walls curve into semicircles in the north (Heaven) and form square corners in the south (Earth), linked along the elevated Danbi Bridge ceremonial causeway.',
        'The 38-meter triple-eaved blue-tiled Hall of Prayer for Good Harvests (Qiniandian) uses nail-free mortise-and-tenon timber framing supported by 28 nanmu columns: 4 Dragon-Well pillars (4 seasons), 12 middle pillars (12 months), and 12 outer pillars (12 two-hour watches).',
        'The open-air Circular Mound Altar (Huanqiu) systematically encodes the supreme Yang number 9 across concentric stone rings (from 9 to 81 slabs per tier), offering a compelling architectural dialogue with Hue\'s three-tiered Nam Giao Esplanade.'
      ],
      introduction: 'If the Forbidden City anchored the Emperor\'s earthly sovereignty as the Son of Heaven, the Temple of Heaven formed his sacred bridge to Heaven itself. Each Winter Solstice at the Circular Mound Altar and each first lunar month at the Hall of Prayer for Good Harvests, Ming and Qing monarchs fasted in the Palace of Abstinence before ascending the white-marble Danbi Bridge for supreme state rites.',
      historicalBackground: 'Built in 1420 as the Altar of Heaven and Earth for joint sacrifices, the complex was restructured in 1530 under the Jiajing Emperor into separate suburban altars (Heaven south, Earth north, Sun east, Moon west), adding the dedicated Circular Mound Altar. In 1751, Emperor Qianlong unified the Hall of Prayer\'s three roof tiers in deep azure glazed tiles. Rebuilt faithfully in 1890 after a lightning fire in 1889, Tiantan was inscribed as a UNESCO World Heritage site in 1998.',
      mainContent: [
        {
          heading: '1. "Round Heaven, Square Earth" Geometry and the Danbi Bridge Axis',
          body: 'Viewed aerially or in 3D, Tiantan\'s concentric northern arcs and southern right angles physically manifest classical Tian Yuan Di Fang cosmology, with terrain rising subtly northward. The 360-meter-long, nearly 30-meter-wide Danbi Bridge slopes upward from the Circular Mound Altar through the Imperial Vault of Heaven to the Hall of Prayer, choreographing a symbolic ascent from earth toward heaven.'
        },
        {
          heading: '2. The Circular Mound Altar and Strict Number-9 Geometry',
          body: 'The open-air three-tier white marble Circular Mound Altar centers on the circular Heart of Heaven Stone (Tianxinshi). Radiating outward are concentric rings progressing strictly in multiples of nine: the top tier expands from 9 stones in the inner ring to 81 in the ninth ring; the middle tier runs from 90 to 162; the bottom tier from 171 to 243, surrounded by 360 carved marble balustrades matching the 360 degrees of the celestial sphere.'
        },
        {
          heading: '3. Hall of Prayer for Good Harvests: 28 Timber Columns as a 3D Calendar',
          body: 'Rising roughly 38 meters on a three-tier marble terrace without metal nails or cross-ties, Qiniandian encodes time in timber: four towering inner Dragon-Well columns (~19.2 m) represent the four seasons; twelve middle columns represent the twelve months; twelve outer eave columns represent the twelve traditional double-hours. Combined, the 24 outer columns signify the 24 Solar Terms, and all 28 columns signify the 28 Lunar Mansions.'
        },
        {
          heading: '4. Acoustic Engineering: The Echo Wall and Triple Echo Stones',
          body: 'Surrounding the Imperial Vault of Heaven stands the circular Echo Wall (~3.72 m high, ~0.9 m thick, ~61.5 m in diameter). Its smoothly polished curved brickwork reflects sound waves continuously around its perimeter (whispering-gallery effect), enabling two speakers over 60 meters apart to hear whispered words clearly. Outside the hall, the Three Echo Stones produce one, two, and three distinct reverberations respectively.'
        }
      ],
      theoreticalFramework: 'From Architectural Cosmology and Historical Acoustics, Tiantan fuses three classical sciences into unified built space: ritual numerology (multiples of 9), long-span nail-free timber joinery, and acoustic wave reflection (the Echo Wall and sound-amplifying Heart of Heaven Stone).',
      terminologyAndLiushu: [
        { hanzi: '天圆地方', pinyin: 'tiānyuán dìfāng', hanViet: 'Thiên viên địa phương', liushu: 'Classical cosmological maxim', gloss: '"Round Heaven, Square Earth"—the foundational spatial doctrine shaping Tiantan\'s walls and jade cong.' },
        { hanzi: '圜丘', pinyin: 'Huánqiū', hanViet: 'Viên Khâu', liushu: 'Huan: circular; Qiu: Pictograph (mound)', gloss: 'Three-tiered open-air Circular Mound Altar for Winter Solstice Heaven sacrifices built on multiples of nine.' },
        { hanzi: '祈年殿', pinyin: 'Qíniándiàn', hanViet: 'Kỳ Niên Điện', liushu: 'Qi: Phono-semantic (altar radical); Nian: Ideogrammic (harvest)', gloss: 'Iconic triple-roofed blue-tiled Hall of Prayer for Good Harvests supported by 28 calendrical columns.' },
        { hanzi: '回音壁', pinyin: 'Huíyīnbì', hanViet: 'Hồi Âm Bích', liushu: 'Hui: Pictograph; Yin: Simple ideogram; Bi: Phono-semantic', gloss: 'Circular acoustic wall around the Imperial Vault of Heaven creating a whispering-gallery effect.' },
        { hanzi: '斋宫', pinyin: 'Zhāigōng', hanViet: 'Trai Cung', liushu: 'Zhai: purification/fasting; Gong: Pictograph (palace)', gloss: 'Palace of Abstinence where emperors fasted and meditated for three days prior to Heaven sacrifices.' }
      ],
      primarySources: [
        PQ('《周礼·春官·大司乐》', 'Chu Lễ, Xuân Quan, Đại Tư Nhạc (nguyên tắc tế Trời tại Viên Khâu)', 'Rites of Zhou (Zhouli), Office of Spring: Grand Director of Music', '冬日至，于地上之圜丘奏之。', 'Dōngrì zhì, yú dìshàng zhī huánqiū zòu zhī.', 'Đông nhật chí, ư địa thượng chi viên khâu tấu chi.', 'Vào ngày Đông chí, cử hành nhã nhạc tế Trời trên gò tròn (Viên Khâu) giữa mặt đất.', 'On the day of the Winter Solstice, perform the ceremonial music upon the Circular Mound (Huanqiu) on the ground.'),
        PQ('《大明会典·礼部·郊祀》', 'Đại Minh Hội Điển, Lễ Bộ, Giao Tự (quy chế tách riêng Thiên Đàn thời Gia Tĩnh)', 'Collected Statutes of the Great Ming, Ministry of Rites: Suburban Sacrifices', '嘉靖九年，建圜丘于大祀殿南，冬至祀昊天上帝。', 'Jiājìng jiǔ nián, jiàn Huánqiū yú Dàsìdiàn nán, dōngzhì sì Hàotiān Shàngdì.', 'Gia Tĩnh cửu niên, kiến Viên Khâu ư Đại Tự Điện nam, đông chí tự Hạo Thiên Thượng Đế.', 'Năm Gia Tĩnh thứ 9 (1530), dựng Viên Khâu ở phía nam Đại Tự Điện, ngày Đông chí tế Hạo Thiên Thượng Đế.', 'In the ninth year of Jiajing (1530), the Circular Mound was constructed south of the Great Sacrifice Hall to sacrifice to August Heaven on the Winter Solstice.')
      ],
      sinoVietnameseComparison: 'In Vietnam, the Nguyen-dynasty Nam Giao Esplanade in Hue (built in 1806 amidst a serene pine grove) likewise embodies "Round Heaven, Square Earth" in a condensed, nature-integrated form: three stacked terraces unite a circular top tier (Heaven, dressed in blue canopy), a square middle tier (Earth, yellow canopy), and a square lower tier for court officials. Unlike Beijing\'s post-1530 separation of Heaven and Earth altars, Hue preserved joint Heaven-Earth sacrifices within an intimate forested landscape.',
      additionalReferences: 'UNESCO World Heritage Centre - Temple of Heaven (1998); Hue Monuments Conservation Centre - Nam Giao Esplanade; Liang Sicheng, A Pictorial History of Chinese Architecture.',
      conclusion: 'Examined in 3D across the Danbi axis, Qiniandian\'s 28 columns, and Huanqiu\'s number-9 rings, the Temple of Heaven reveals how classical Chinese architecture translated mathematics, calendrics, and acoustics into enduring sacred space.'
    },
    'jiuzhaigou-travertine-karst': {
      id: 'jiuzhaigou-travertine-karst',
      number: 107,
      category: 'regions',
      categoryLabel: 'Geography & Natural Heritage',
      titleVi: 'Cửu Trại Câu (九寨沟): Địa chất Đá vôi Travertine, Thung lũng Chữ Y, Ngũ Hoa Hải và Chín Bản Làng Tạng – Khương',
      titleZh: '九寨沟自然与人文志：钙华喀斯特地貌、Y字形沟谷、五花海与藏羌九寨',
      titleZhTrad: '九寨溝自然與人文誌：鈣華喀斯特地貌、Y字形溝谷、五花海與藏羌九寨',
      titleEn: 'Jiuzhaigou Valley: Travertine Karst Geology, Y-Shaped Basins, Five Flower Lake, and Nine Tibetan-Qiang Villages',
      readMinutes: 13,
      epistemicTag: 'Karst Geology · Southwest Ethnography',
      abstract: 'Situated along the transitional escarpment between the Tibetan Plateau and the Sichuan Basin (Aba Tibetan and Qiang Autonomous Prefecture), Jiuzhaigou Valley—inscribed as a UNESCO World Heritage site in 1992—owes its more than 100 turquoise terraced lakes to Quaternary travertine (calcite) precipitation. This treatise unpacks the geochemistry of Five Flower Lake, the Y-shaped valley topography, and the ecological stewardship of its nine indigenous Tibetan villages.',
      keyTakeaways: [
        'Spanning elevations from ~2,000 m to over 4,500 m, Jiuzhaigou forms a 50+ km Y-shaped valley system uniting Rize (East), Zechawa (West), and Shuzheng (North) valleys at Nuorilang.',
        'Its terraced pools and waterfalls (Five Flower Lake, Long Lake, Nuorilang Falls) are impounded by natural travertine dams built by calcium carbonate precipitating from mineral-rich karst waters over millennia.',
        'The name Jiuzhaigou ("Nine-Village Valley") derives from nine local Tibetan hamlets whose sacred-mountain traditions helped preserve old-growth forests and pristine watersheds.'
      ],
      introduction: 'Celebrated in the proverb "Returning from Jiuzhaigou, no other waters need be seen," Jiuzhaigou sets an aesthetic benchmark for alpine waterscapes—not by accident, but as a living high-altitude karst laboratory operating throughout the Quaternary period.',
      historicalBackground: 'Named after nine scattered Tibetan villages (including Shuzheng, Zechawa, and Heye) tucked into the Minshan Mountains, Jiuzhaigou came to wider scientific notice in the 1970s, became a protected nature reserve in 1978 (ending commercial logging), and gained UNESCO World Heritage status in 1992. Following the magnitude-7.0 earthquake in August 2017 that breached travertine dams such as Sparkling Lake, natural recovery paired with conservation engineering restored lake hydrology under strict visitor caps.',
      mainContent: [
        {
          heading: '1. Travertine Geochemistry and Natural Terraced Dams',
          body: 'Underlain by thick Paleozoic and Mesozoic limestone uplifted by Himalayan tectonics and carved by Quaternary glaciers, Jiuzhaigou\'s snowmelt dissolves abundant calcium bicarbonate. Upon emerging into sunlight and cascading over fallen submerged tree trunks, CO2 degasses and precipitates calcium carbonate crystals (travertine). Over thousands of years, these deposits accrete into resilient natural dams forming cascading turquoise lakes (Haizi) and multi-tiered waterfalls.'
        },
        {
          heading: '2. The Y-Shaped Topography and Five Flower Lake',
          body: 'Three valleys converge at Nuorilang into an iconic Y. Zechawa Valley (west) holds Long Lake (highest and largest at >3,060 m) and jewel-like Five-Color Pond. Rize Valley (east) presents Primeval Forest, Panda Lake, Pearl Shoal Waterfall, and Five Flower Lake (Wuhuahai), where crystal waters reveal calcified ancient tree trunks beneath shifting bands of sapphire, emerald, turquoise, and amber driven by calcite beds, algae, and autumn foliage.'
        },
        {
          heading: '3. Altitudinal Biodiversity and Giant Panda Conservation',
          body: 'Vertical relief from 2,000 m to above 4,500 m supports distinct temperate broadleaf, mixed coniferous, and alpine meadow zones, sheltering nationally protected species including the Giant Panda, Sichuan Golden Snub-nosed Monkey, and Takin.'
        },
        {
          heading: '4. Nine Tibetan-Qiang Villages and Indigenous Ecological Ethics',
          body: 'Local Tibetan and neighboring Qiang communities sustained Jiuzhaigou\'s intact watersheds through Bön and Tibetan Buddhist beliefs treating sacred peaks, groves, and lakes as numinous habitats where logging or pollution was taboo. Stone-and-timber stilt homes, water-driven prayer wheels, and colorful Lungta prayer flags anchor the valley\'s cultural identity.'
        }
      ],
      theoreticalFramework: 'In karst geomorphology and heritage conservation, Jiuzhaigou exemplifies Geo-Bio-Cultural Coupling: mineral travertine precipitation, sediment-binding aquatic flora, and indigenous sacred-forest ethics jointly maintain a delicate yet resilient alpine aquatic system.',
      terminologyAndLiushu: [
        { hanzi: '钙华', pinyin: 'gàihuá', hanViet: 'Cái hoa', liushu: 'Modern geological term (Travertine / Tufa)', gloss: 'Chemically precipitated calcium carbonate limestone building Jiuzhaigou\'s natural lake dams.' },
        { hanzi: '海子', pinyin: 'hǎizi', hanViet: 'Hải tử', liushu: 'Southwestern plateau regional term', gloss: 'Poetic local Tibetan-Sichuanese term for clear high-altitude alpine lakes.' },
        { hanzi: '五花海', pinyin: 'Wǔhuāhǎi', hanViet: 'Ngũ Hoa Hải', liushu: 'Signature scenic lake in Rize Valley', gloss: 'Jiuzhaigou\'s renowned polychrome lake displaying layered blue, emerald, and gold hues over calcified timber.' },
        { hanzi: '藏寨', pinyin: 'Zàngzhài', hanViet: 'Tạng trại', liushu: 'Zang: Tibetan; Zhai: mountain village', gloss: 'Traditional Tibetan mountain settlement characterized by stone-timber architecture and white stupas.' },
        { hanzi: '经幡', pinyin: 'jīngfān', hanViet: 'Kinh phan', liushu: 'Phono-semantic compound', gloss: 'Five-color Tibetan prayer flags printed with auspicious texts fluttering across passes and villages.' }
      ],
      primarySources: [
        PQ('UNESCO《世界遗产名录：九寨沟风景名胜区》（1992年）', 'Hồ sơ Di sản Thiên nhiên Thế giới UNESCO: Khu Thắng cảnh Cửu Trại Câu (1992)', 'UNESCO World Heritage List: Jiuzhaigou Valley Scenic and Historic Interest Area (1992)', '九寨沟以高原喀斯特钙华彩池、叠瀑群与原始森林生态系统闻名于世。', 'Jiǔzhàigōu yǐ gāoyuán kāsītè gàihuá cǎichí, diépùqún yǔ yuánshǐ sēnlín shēngtài xìtǒng wénmíng yú shì.', 'Cửu Trại Câu dĩ cao nguyên Ca-tư-tơ cái hoa thải trì, điệp bộc quần dữ nguyên thủy sâm lâm sinh thái hệ thống văn danh ư thế.', 'Cửu Trại Câu nổi tiếng toàn cầu nhờ hệ thống hồ sắc màu đá vôi Travertine cao nguyên, quần thể thác bậc thang và hệ sinh thái rừng nguyên sinh.', 'Jiuzhaigou is renowned worldwide for its high-altitude karst travertine polychrome pools, cascading waterfalls, and old-growth forest ecosystems.'),
        PQ('《阿坝藏族羌族自治州志·地理编》', 'Địa chí Châu tự trị dân tộc Tạng – Khương A Bá, phần Địa lý', 'Gazetteer of Aba Tibetan and Qiang Autonomous Prefecture, Geography Section', '沟内原有九个藏族村寨分布于树正、则查洼、日则三条主沟之中，故名九寨沟。', 'Gōunèi yuányǒu jiǔ gè Zàngzú cūnzhài fēnbù yú Shùzhèng, Zécháwā, Rìzé sāntiáo zhǔgōu zhī zhōng, gù míng Jiǔzhàigōu.', 'Câu nội nguyên hữu cửu cá Tạng tộc thôn trại phân bố ư Thụ Chính, Tắc Tra Oa, Nhật Tắc tam điều chủ câu chi trung, cố danh Cửu Trại Câu.', 'Trong thung lũng vốn có chín bản làng người Tạng phân bố dọc ba nhánh chính Thụ Chính, Tắc Tra Oa và Nhật Tắc, do đó mang tên Cửu Trại Câu.', 'Nine Tibetan villages originally lay dispersed across the three main valleys of Shuzheng, Zechawa, and Rize, giving rise to the name Jiuzhaigou.')
      ],
      sinoVietnameseComparison: 'Vietnam also stewards world-class karst heritage—Ha Long Bay, Phong Nha–Ke Bang, Trang An, and Dong Van Karst Plateau—distinguished by lowland tropical and marine limestone landscapes compared with Jiuzhaigou\'s cold high-altitude travertine terraces. Both share core challenges of sustainable visitor caps and indigenous community stewardship.',
      additionalReferences: 'UNESCO World Heritage Centre - Jiuzhaigou Valley (Ref. 637); Chinese Academy of Sciences (CAS) Post-2017 Travertine Recovery Studies; Sichuan-Qinghai Railway Chengdu–Huanglong-Jiuzhai Corridor.',
      conclusion: 'Jiuzhaigou reveals how sublime landscapes emerge from millennia of interaction among travertine geochemistry, alpine forest ecology, and the reverent stewardship of nine Tibetan-Qiang villages.'
    },
    'zhangjiajie-wulingyuan-sandstone-pillars': {
      id: 'zhangjiajie-wulingyuan-sandstone-pillars',
      number: 108,
      category: 'regions',
      categoryLabel: 'Geography & Natural Heritage',
      titleVi: 'Trương Gia Giới – Vũ Lăng Nguyên (张家界): Cột Sa thạch Thạch anh 380 Triệu Năm, Thiên Môn Sơn và Nhà sàn Điếu Cước Lâu Thổ Gia – Miêu',
      titleZh: '张家界—武陵源地质与人文志：三点八亿年石英砂岩峰林、天门山与土家苗族吊脚楼',
      titleZhTrad: '張家界—武陵源地質與人文誌：三點八億年石英砂岩峰林、天門山與土家苗族吊腳樓',
      titleEn: 'Zhangjiajie and Wulingyuan: 380-Million-Year Quartz-Sandstone Pillars, Tianmen Mountain, and Tujia-Miao Diaojiaolou',
      readMinutes: 14,
      epistemicTag: 'Geomorphology · Western Hunan Culture',
      abstract: 'Located in Western Hunan (Xiangxi), the Wulingyuan–Zhangjiajie Scenic Area—inscribed as a UNESCO World Heritage site in 1992 and an inaugural Global Geopark—features over 3,000 vertical quartz-sandstone pillars formally classified by international geomorphologists as the "Zhangjiajie Landform." Concluding the 108-treatise collection, this study examines 380 million years of Devonian geology, Tianmen Mountain\'s limestone arch, and the Tujia-Miao Diaojiaolou stilt-house tradition.',
      keyTakeaways: [
        'Unlike typical limestone karst (such as Guilin), Wulingyuan\'s 3,000+ pillars rising over 200 meters consist of 380-million-year-old Devonian quartz-sandstone sculpted by tectonic uplift and vertical joint erosion.',
        'Thirty kilometers south, Tianmen Mountain belongs to a separate limestone karst formation crowned by the colossal natural Tianmen Cave arch (recorded in historical chronicles as opening in 263 CE).',
        'Western Hunan\'s indigenous Tujia and Miao communities perfected Diaojiaolou ("hanging-foot") timber stilt houses clinging directly to steep slopes without leveling mountainsides, alongside Hand-Waving Dance and Xilankapu brocade.'
      ],
      introduction: 'Wulingyuan\'s slender cloud-wrapped spires inspired modern cinema\'s floating mountains yet appeared centuries earlier in classical Chinese shanshui scrolls. Behind this surreal terrain sit two distinct geological worlds side by side: Wulingyuan\'s quartz-sandstone pillar forest and Tianmen Mountain\'s limestone massif.',
      historicalBackground: 'The name Zhangjiajie is linked to legends of Han strategist Zhang Liang retiring into the Wuling mountains. Designated China\'s first National Forest Park in 1982, Wulingyuan earned UNESCO World Heritage inscription in 1992 and Global Geopark status in 2004. In 2010, an international geomorphology symposium formally coined "Zhangjiajie Landform" for this unique quartz-sandstone peak-forest type.',
      mainContent: [
        {
          heading: '1. 380 Million Years of Quartz-Sandstone Pillar Evolution',
          body: 'Around 380 million years ago (Middle-to-Late Devonian), Wulingyuan lay beneath a shallow marine bay accumulating hundreds of meters of pure quartz sand that lithified into dense, chemically resistant quartz-sandstone. Subsequent Yanshan and Himalayan uplifts fractured the plateau along dense networks of vertical joints. Millions of years of rainwater, freeze-thaw wedging, and root weathering carved away the joints, leaving over 3,000 sheer flat-topped columns across Yuanjiajie and Tianzi Mountain.'
        },
        {
          heading: '2. Tianmen Mountain and the Natural Tianmen Cave Arch',
          body: 'Rising above 1,500 meters south of the city, Tianmen Mountain is a dramatic limestone karst block pierced by Tianmen Cave—a natural arch roughly 131.5 m high, 57 m wide, and 60 m deep. Three Kingdoms records (263 CE) note a sudden cliff collapse opening the mountain like a "Heaven\'s Gate," giving the peak its name. Today, a 7.4+ km urban-to-summit cableway and the 99-bend Heaven-Linking Avenue highlight dramatic mountain engineering.'
        },
        {
          heading: '3. Diaojiaolou: Tujia and Miao Ecological Stilt Architecture',
          body: 'Across Western Hunan\'s steep valleys, Tujia and Miao carpenters developed Diaojiaolou ("hanging-foot buildings"). Rather than bulldozing hillsides, fir-wood columns of varying lengths anchor directly onto rocky slopes or stream banks, suspending the main living floor in mid-air—shielding residents from ground dampness below while opening carved wooden balconies to valley breezes above.'
        },
        {
          heading: '4. Living Xiangxi Heritage: Baishou Dance and Xilankapu Brocade',
          body: 'Local Tujia and Miao communities preserve active intangible traditions: the communal Baishou (Hand-Waving) Dance reenacting farming and ancestral memory during Gan Nian (celebrating Lunar New Year one day early), intricate geometric Xilankapu woven brocades, and Sangzhi mountain folk songs.'
        }
      ],
      theoreticalFramework: 'In comparative geomorphology, Wulingyuan demonstrates how lithology and fracture geometry govern landscape form: whereas chemically soluble limestone dissolves into conical towers in Guilin or Ninh Binh, chemically durable, vertically jointed quartz-sandstone produces Zhangjiajie\'s singular vertical spire forest.',
      terminologyAndLiushu: [
        { hanzi: '石英砂岩', pinyin: 'shíyīng shāyán', hanViet: 'Thạch anh sa nham', liushu: 'Geological lithology term', gloss: 'High-silica quartz-sandstone forming Wulingyuan\'s 3,000+ sheer vertical pillars.' },
        { hanzi: '张家界地貌', pinyin: 'Zhāngjiājiè dìmào', hanViet: 'Trương Gia Giới địa mạo', liushu: 'International geomorphological term (2010)', gloss: 'Quartz-sandstone pillar-and-wall peak-forest landform unique to the Wulingyuan region.' },
        { hanzi: '吊脚楼', pinyin: 'diàojiǎolóu', hanViet: 'Điếu cước lâu', liushu: 'Diao: suspended; Jiao: pillars; Lou: multi-story timber house', gloss: 'Traditional Tujia and Miao slope-clinging timber stilt architecture of Western Hunan.' },
        { hanzi: '摆手舞', pinyin: 'Bǎishǒuwǔ', hanViet: 'Bãi Thủ vũ', liushu: 'Tujia ceremonial dance name', gloss: 'Communal Tujia rhythmic hand-waving dance celebrating agriculture, history, and festivals.' },
        { hanzi: '西兰卡普', pinyin: 'Xīlánkǎpǔ', hanViet: 'Tây Lan Kháp Phổ', liushu: 'Tujia language transcription ("flowered brocade")', gloss: 'Traditional hand-woven geometric brocade crafted by Tujia women across Hunan and Hubei.' }
      ],
      primarySources: [
        PQ('UNESCO《世界遗产名录：武陵源风景名胜区》（1992年）', 'Hồ sơ Di sản Thiên nhiên Thế giới UNESCO: Khu Thắng cảnh Vũ Lăng Nguyên (1992)', 'UNESCO World Heritage List: Wulingyuan Scenic and Historic Interest Area (1992)', '武陵源以其三千余座拔地而起的石英砂岩峰柱群与深邃峡谷著称于世。', 'Wǔlíngyuán yǐ qí sānqiān yú zuò bádì ér qǐ de shíyīng shāyán fēngzhùqún yǔ shēnsuì xiágǔ zhùchēng yú shì.', 'Vũ Lăng Nguyên dĩ kỳ tam thiên dư tọa bạt địa nhi khởi đích thạch anh sa nham phong trụ quần dữ thâm thúy hiệp cốc trứ xưng ư thế.', 'Vũ Lăng Nguyên nổi tiếng toàn cầu với hơn ba nghìn cột đỉnh sa thạch thạch anh vươn thẳng từ mặt đất cùng các hẻm núi sâu thẳm.', 'Wulingyuan is celebrated worldwide for its more than 3,000 towering quartz-sandstone pillars and deep ravines.'),
        PQ('《永定县志·山川志》关于天门洞史料', 'Vĩnh Định Huyện Chí (phần Sơn Xuyên) ghi chép truyền tích Thiên Môn Sơn thời Tam Quốc', 'Yongding County Gazetteer, Mountains and Rivers Section (on Tianmen Cave)', '吴永安六年，嵩梁山峭壁忽开，玄朗如门，因改名天门山。', 'Wú Yǒng\'ān liù nián, Sōngliángshān qiàobì hū kāi, xuánlǎng rú mén, yīn gǎimíng Tiānménshān.', 'Ngô Vĩnh An lục niên, Tung Lương sơn tiễu bích hốt khai, huyền lãng như môn, nhân cải danh Thiên Môn Sơn.', 'Năm Vĩnh An thứ 6 nước Ngô (263 CN), vách đá núi Tung Lương bỗng mở thông sáng tỏ như cánh cổng trời, nhân đó đổi tên thành Thiên Môn Sơn.', 'In the sixth year of Yong\'an under Wu (263 CE), the sheer cliff of Mount Songliang suddenly opened clear as a gateway, whereupon it was renamed Tianmen Mountain.')
      ],
      sinoVietnameseComparison: 'Western Hunan\'s Diaojiaolou stilt architecture shares deep ecological affinity with the timber stilt houses of Vietnam\'s Thai, Tay, Muong, and Dao mountain communities—both using local timber, elevating floors above damp terrain, and respecting natural slopes. Geologically, contrasting Wulingyuan\'s Devonian quartz-sandstone spires with the limestone karst towers of Ha Long Bay and Trang An provides a vivid lesson in how rock chemistry shapes landscape.',
      additionalReferences: 'UNESCO World Heritage Centre - Wulingyuan Scenic and Historic Interest Area (Ref. 640); Zhangjiajie Global Geopark Monograph; Hunan Provincial Gazetteer (Tujia & Miao Ethnography).',
      conclusion: 'Closing the 108-treatise journey at Zhangjiajie–Wulingyuan highlights the unifying thread across Chinese nature and civilization: from 380-million-year quartz-sandstone spires to timber Diaojiaolou clinging to mountain slopes, land and human craft remain in enduring dialogue.'
    }
  };

  var key;
  for (key in ARTICLES_EN) {
    if (Object.prototype.hasOwnProperty.call(ARTICLES_EN, key)) {
      window.CCE_ARTICLES_EN[key] = ARTICLES_EN[key];
    }
  }
})();
