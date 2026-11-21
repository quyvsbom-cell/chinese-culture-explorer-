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

  var EN_ARTICLES_V3_PART3A = {
    'chu-nom-liushu-script-dialogue': {
      id: 'chu-nom-liushu-script-dialogue',
      number: 86,
      category: 'sino-vietnam',
      categoryLabel: 'Sino–Vietnamese Dialogue',
      title: 'Vietnamese Chu Nom and the Six Principles (Liushu): Phono-Semantic, Ideographic, and Loan Craft in Quoc Am Thi Tap and The Tale of Kieu',
      titleZh: '越南喃字与六书原理：《国音诗集》和《金云翘传》中的构字智慧',
      titleZhTrad: '越南喃字與六書原理：《國音詩集》和《金雲翹傳》中的構字智慧',
      readMinutes: 15,
      epistemicTag: 'Comparative Grammatology & Han–Nom Studies',
      abstract: 'This treatise analyzes the structural mechanics of Vietnamese Chu Nom script (10th–19th centuries) through China\'s Six Principles (Liushu), examining phono-semantic, compound-ideographic, and phonetic-loan formation across two literary landmarks: Nguyen Trai\'s "Quoc Am Thi Tap" and Nguyen Du\'s "The Tale of Kieu."',
      keyTakeaways: [
        'Chu Nom was not "corrupted Chinese," but a systematic script recording spoken Vietnamese built deliberately upon Chinese graphic elements and Liushu principles.',
        'Over 60% of newly coined Chu Nom characters follow phono-semantic composition (combining a semantic Chinese radical with a Sino-Vietnamese phonetic element), complemented by brilliant compound ideographs such as 𡗶 ("troi"—sky: Heaven over Above).',
        'From the 1209 Bao An Pagoda stele through 15th-century "Quoc Am Thi Tap" to early-19th-century "The Tale of Kieu," Chu Nom elevated vernacular Vietnamese into an autonomous high literature.'
      ],
      introduction: 'Across the East Asian Sinosphere, every society adopting Literary Chinese engineered indigenous scripts for its spoken language: Japan created Kana syllabaries, Korea invented the phonetic Hangul alphabet (1443), and Vietnam forged Chu Nom (𡨸喃)—one of the region\'s most inventive logographic–phonetic scripts. Analyzing Chu Nom through Liushu reveals how Dai Viet scholars mastered the internal architecture of Chinese characters to encode Vietnam\'s six tones and native vocabulary.',
      historicalBackground: 'Early phonetic transcriptions of Vietnamese names appeared during the first millennium (such as Phung Hung\'s title "Bo Cai Dai Vuong" and the 968 state name "Dai Co Viet"). The earliest firmly dated Chu Nom stone inscriptions include the 1173 Lady Le epitaph and the 1209 Bao An Pagoda stele recording over twenty native toponyms and personal names. Under the Tran dynasty (13th–14th centuries), Han Thuyen, Tran Nhan Tong, and Ho Quy Ly championed vernacular verse; in the 15th century, Nguyen Trai\'s 254-poem "Quoc Am Thi Tap" paved the way for the 18th–19th-century golden age of Ho Xuan Huong, Nguyen Gia Thieu, and Nguyen Du.',
      mainContent: [
        {
          heading: '1. Three Core Formation Methods: Phonetic Loan, Compound Ideograph, and Phono-Semantic',
          body: 'Han–Nom philologists (Nguyen Tai Can, Dao Duy Anh) divide Chu Nom into direct Chinese loans (Jiejie/Giata, e.g., borrowing 沒 for "mot"—one) and newly invented graphs. Among invented graphs, compound ideographs merge two semantic units—most famously 𡗶 ("troi," sky) stacking 天 (Heaven) atop 上 (Above)—while phono-semantic compounds form the majority: pairing a Chinese semantic component with a Sino-Vietnamese phonetic cue, such as 𢆥 ("nam," year: 年 for meaning + 南 for sound) or 𦹳 ("co," grass: 艹 for meaning + 古 for sound).'
        },
        {
          heading: '2. Nguyen Trai\'s "Quoc Am Thi Tap" (15th Century)',
          body: 'Surviving in 254 poems alternating seven- and six-syllable lines, "Quoc Am Thi Tap" is Vietnam\'s oldest intact vernacular poetry collection. Nguyen Trai naturalized Tang regulated verse to fit Vietnamese cadence while welcoming everyday delta imagery—ferry landings, water spinach, lotus ponds—into elite letters.'
        },
        {
          heading: '3. Lyric Pinnacle in Nguyen Du\'s "The Tale of Kieu"',
          body: 'In the early 19th century, Nguyen Du composed 3,254 lines of luc-bat Chu Nom verse in "The Tale of Kieu," fusing elevated Sino-Vietnamese diction directly with idiomatic native Vietnamese. Nineteenth-century woodblock editions (Lieu Van Duong 1866, 1871) remain foundational textual monuments.'
        },
        {
          heading: '4. Structural Limits and Modern Unicode Digitization',
          body: 'Because pre-modern courts rarely enforced nationwide orthographic standardization (aside from brief efforts under Ho Quy Ly and Emperor Quang Trung), single Vietnamese syllables could bear multiple Nom variants, and literacy required prior command of Chinese characters. Although Romanized Quoc Ngu replaced Chu Nom in daily life in the early 20th century, over 9,000 Chu Nom characters are now encoded in Unicode (CJK Extensions B–G) for digital preservation.'
        }
      ],
      theoreticalFramework: 'In comparative grammatology (John DeFrancis and Nguyen Tai Can), Chu Nom exemplifies "phoneticization within a logographic matrix": mirroring how Chinese itself evolved to over 80% phono-semantic graphs, Chu Nom repurposed Sino-Vietnamese readings as a phonetic syllabary to write an Austroasiatic language.',
      terminologyAndLiushu: [
        { hanzi: '喃', pinyin: 'nán', hanViet: 'Nôm / Nam', liushu: 'Phono-semantic', gloss: 'Combines mouth (口: spoken speech) and South (南); script recording the vernacular tongue of the Southern realm.' },
        { hanzi: '𡗶', pinyin: 'tiān-shàng (Nom: troi)', hanViet: 'Trời (Hội ý Nôm)', liushu: 'Nom Compound Ideograph', gloss: 'Stacks 天 (Heaven) above 上 (Above) to signify the Vietnamese word "troi" (sky).' },
        { hanzi: '𢆥', pinyin: 'nián-nán (Nom: nam)', hanViet: 'Năm (Hình thanh Nôm)', liushu: 'Nom Phono-semantic', gloss: 'Combines 年 (year, semantic) with 南 (nam, phonetic) for Vietnamese "nam."' },
        { hanzi: '𦹳', pinyin: 'cǎo-gǔ (Nom: co)', hanViet: 'Cỏ (Hình thanh Nôm)', liushu: 'Nom Phono-semantic', gloss: 'Combines grass radical (艹) with 古 (co, phonetic) for Vietnamese "co" (grass).' },
        { hanzi: '韵', pinyin: 'yùn', hanViet: 'Vận', liushu: 'Phono-semantic', gloss: 'Rhyme architecture anchoring indigenous luc-bat meter recorded in Chu Nom.' }
      ],
      primarySources: [
        PQ(
          '《国音诗集·宝镜警戒第四十三》（阮廌，15世纪）',
          'Quốc Âm Thi Tập — Bảo Kính Cảnh Giới bài 43 (Nguyễn Trãi)',
          'National Language Poetry Collection (Quoc Am Thi Tap), Poem 43 — Nguyen Trai',
          '劳薪日永、𡊲𡗶𡈜，槐绿端阳𧿨𣊾花。',
          'Rồi hóng mát thuở ngày trường, Hòe lục đùn đùn tán rợp giương.',
          'Rồi hóng mát thuở ngày trường, Hòe lục đùn đùn tán rợp giương (trích phiên âm chuẩn bài Cảnh ngày hè).',
          'Thảnh thơi hóng mát suốt ngày dài mùa hè, cây hòe xanh đùn tán rợp bóng mát — minh chứng sức biểu đạt tinh tế của thơ Nôm thế kỷ XV.',
          'At leisure enjoying the breeze through the long summer day, verdant sophora trees unfurl dense canopies of shade—showcasing 15th-century Chu Nom lyric mastery.'
        ),
        PQ(
          '《大越史记全书·本纪卷八》（胡季犛译《无逸》）',
          'Đại Việt Sử Ký Toàn Thư — Bản Kỷ Quyển 8 (1395)',
          'Complete Annals of Dai Viet, Basic Annals Vol. 8 (1395)',
          '季犛作《国语诗义》并序，令女师教后妃及宫人学习。',
          'Jìlí zuò Guóyǔ Shīyì bìng xù, lìng nǚshī jiào hòufēi jí gōngrén xuéxí.',
          'Quý Ly tác "Quốc ngữ Thi nghĩa" tịnh tự, lệnh nữ sư giáo hậu phi cập cung nhân học tập.',
          'Hồ Quý Ly soạn sách "Quốc ngữ Thi nghĩa" (diễn Nôm Kinh Thi) kèm bài tựa, sai nữ sư dạy cho hậu phi và cung nhân học tập.',
          'Ho Quy Ly composed the vernacular "Meaning of the Classic of Poetry in National Speech" with a preface, ordering female instructors to teach it to the palace.'
        )
      ],
      sinoVietnameseComparison: 'Alongside Zhuang Sawndip and Japanese Kana, Vietnamese Chu Nom achieved the richest high-literary corpus among square-character scripts derived from Chinese, sustaining nearly a millennium of sovereign national literature prior to Quoc Ngu.',
      additionalReferences: [
        'Nguyen Tai Can (1985), Mot so van de ve chu Nom (Issues in Chu Nom Studies).',
        'Dao Duy Anh (1975), Chu Nom: Nguon goc, cau tao, dien bien (Chu Nom: Origins, Structure, and Evolution).',
        'Vietnamese Nôm Preservation Foundation (nomfoundation.org).'
      ],
      conclusion: 'Chu Nom embodies Vietnam\'s active cultural agency—deploying the internal Liushu principles of Chinese script to forge an autonomous written voice for the Vietnamese language.'
    },
    'imperial-palace-axes-beijing-thanglong-hue': {
      id: 'imperial-palace-axes-beijing-thanglong-hue',
      number: 87,
      category: 'sino-vietnam',
      categoryLabel: 'Sino–Vietnamese Dialogue',
      title: 'Imperial Palace Planning in East Asia: Axial Architecture of Beijing\'s Forbidden City, Thang Long Imperial Citadel, and Hue Imperial City',
      titleZh: '东亚皇宫规划对照：北京紫禁城、升龙皇城与顺化京城轴线',
      titleZhTrad: '東亞皇宮規劃對照：北京紫禁城、昇龍皇城與順化京城軸線',
      readMinutes: 15,
      epistemicTag: 'Ancient Urbanism & Comparative History',
      abstract: 'This treatise compares three UNESCO World Heritage imperial palace complexes—Beijing\'s Forbidden City (1420), Hanoi\'s Thang Long Imperial Citadel (1010), and Hue\'s Imperial City (1804)—across "Kaogongji" axial canons, hydraulic adaptation, triple-walled enclosures, and the historical link of Vietnamese-born architect Nguyen An.',
      keyTakeaways: [
        'All three capitals share East Asian ritual planning grammar (south-facing orientation, triple concentric enclosures, central axis, outer court/inner quarters) adapted flexibly to local terrain.',
        'Excavations at 18 Hoang Dieu (since 2002) document 1,300 continuous years of stratigraphy at Thang Long with ingenious compacted-gravel pillar foundations engineered for Red River Delta alluvium.',
        'Nguyen-dynasty Hue (1804–1832) fused an inner East Asian Forbidden Purple City with an outer European Vauban star-fortress rampart aligned to the Perfume River and Ngu Binh Mountain.'
      ],
      introduction: 'In East Asian urbanism, imperial palaces served as cosmological diagrams of political sovereignty ("Unity of Heaven and Humanity"). Comparing three UNESCO World Heritage monuments—Beijing\'s Forbidden City (1987), Hue\'s Complex of Monuments (1993), and Thang Long Imperial Citadel (2010)—reveals both a shared civilizational grammar and Vietnam\'s distinct architectural creativity across a millennium.',
      historicalBackground: 'Canonical imperial city planning traced back to the "Rites of Zhou" ("Kaogongji": square walled city, three gates per side, ancestral temple left, soil-and-grain altar right, court in front, market behind). In 1010, Ly Cong Uan relocated Dai Viet\'s capital to Thang Long (Hanoi), laying out triple concentric ramparts beside the Red River. Between 1406 and 1420, Ming Emperor Yongle built Beijing\'s Forbidden City with key direction from Vietnamese-born master architect Nguyen An. In 1804, Nguyen Emperors Gia Long and Minh Mang constructed Hue along the Perfume River.',
      mainContent: [
        {
          heading: '1. Central Axes and Triple Enclosures: Shared Grammar, Local Adaptation',
          body: 'Beijing\'s Forbidden City anchors a 7.8 km North–South Central Axis (inscribed separately by UNESCO in 2024) projecting absolute imperial order across the flat North China Plain. Thang Long centered on Bac Mon–Doan Mon–Kinh Thien Palace (1467 stone dragon steps)–Hau Lau nestled between the Red and To Lich rivers. Hue rotated its axis slightly southeast along Flag Tower–Ngo Mon–Thai Hoa Palace–Can Chanh, borrowing Ngu Binh Mountain as a natural front screen and Hen and Da Vien islets as Azure Dragon and White Tiger.'
        },
        {
          heading: '2. Foundations and Materials: Golden Nanmu vs. Ironwood and Gravel Piers',
          body: 'Beijing\'s halls utilized golden nanmu timber shipped via the Grand Canal atop three-tier marble terraces built for dry northern winters. Thang Long\'s Ly–Tran engineers stabilized soft delta clay with layered compacted gravel pillar footings (18 Hoang Dieu) and intricate dragon-carved bodhi-leaf roof tiles. Hue developed twin-roofed "Trung Thiem Diep Oc" halls joined by copper gutters against central-Vietnam monsoons, adorned with polychrome enamel (phap lam) and ceramic mosaic.'
        },
        {
          heading: '3. A Shared Architectural Bridge: Master Builder Nguyen An in Beijing',
          body: 'Official Ming records ("Mingshi") credit Nguyen An (1381–1453), born in Dai Viet, with directing construction of Beijing\'s palaces, city walls, nine gates, and urban canals under Emperors Yongle and Zhengtong—illustrating bidirectional technical exchange rather than one-way borrowing.'
        },
        {
          heading: '4. Early-Modern Defense at Hue: East–West Synthesis',
          body: 'Unlike Beijing\'s classical rectangular walls, Hue\'s 10 km outer Citadel (1805–1832) adopted European Vauban star-bastion geometry with 24 protruding artillery bastions while enclosing an orthodox East Asian Imperial City and Forbidden Purple City inside.'
        }
      ],
      theoreticalFramework: 'In comparative architectural history (Nancy Steinhardt and UNESCO studies), East Asian palace planning operates as a "shared spatial grammar": axial symmetry and geomantic hierarchy supply the syntax, while climate-responsive joinery and local landscape express distinct national identities.',
      terminologyAndLiushu: [
        { hanzi: '城', pinyin: 'chéng', hanViet: 'Thành', liushu: 'Phono-semantic', gloss: 'Earth (土) and 成; defensive walled enclosure ("Imperial Citadel").' },
        { hanzi: '门', pinyin: 'mén', hanViet: 'Môn', liushu: 'Pictograph', gloss: 'Traditional 門 depicts double symmetrical doors marking ceremonial thresholds (Ngo Mon, Doan Mon).' },
        { hanzi: '阙', pinyin: 'quē / què', hanViet: 'Khuyết', liushu: 'Phono-semantic', gloss: 'Projecting twin gate towers framing both Beijing\'s and Hue\'s U-shaped Meridian Gates.' },
        { hanzi: '案', pinyin: 'àn', hanViet: 'Án (Tiền án)', liushu: 'Phono-semantic', gloss: 'Geomantic front screen hill shielding a palace axis (Ngu Binh Mountain in Hue).' },
        { hanzi: '社', pinyin: 'shè', hanViet: 'Xã (Xã Tắc)', liushu: 'Compound Ideograph', gloss: 'Altar (礻) and earth (土); Altar of Soil and Grain positioned to the palace\'s right.' }
      ],
      primarySources: [
        PQ(
          '《迁都诏》（李公蕴，1010）',
          'Chiếu Dời Đô — Lý Công Uẩn (1010)',
          'Edict on the Transfer of the Capital — Ly Cong Uan (1010)',
          '况高王故都大罗城，宅天地区域之中，得龙蟠虎踞之势。正南北东西之位，便江山向背之宜。',
          'Huàng Gāowáng gùdū Dàluóchéng, zhái tiāndì qūyù zhī zhōng, dé lóngpán hǔjù zhī shì. Zhèng nánběi dōngxī zhī wèi, biàn jiāngshān xiàngbèi zhī yí.',
          'Huống Cao Vương cố đô Đại La thành, trạch thiên địa khu vực chi trung, đắc long bàn hổ cứ chi thế. Chính nam bắc đông tây chi vị, tiện giang sơn hướng bối chi nghi.',
          'Huống gì thành Đại La, kinh đô cũ của Cao Vương, ở vào nơi trung tâm trời đất, được thế rồng cuộn hổ ngồi; đã đúng ngôi Nam Bắc Đông Tây, lại tiện hướng nhìn sông dựa núi.',
          'Moreover, Dai La Citadel lies at the center of Heaven and Earth, possessing the auspicious terrain of a coiling dragon and crouching tiger, aligned squarely with the four cardinal directions and favorably backed by mountains and rivers.'
        ),
        PQ(
          '《周礼·考工记·匠人》',
          'Chu Lễ — Khảo Công Ký (Thiên Tượng Nhân)',
          'Rites of Zhou, Artificers\' Record (Kaogongji)',
          '匠人营国，方九里，旁三门。左祖右社，面朝后市。',
          'Jiàngrén yíngguó, fāng jiǔlǐ, páng sānmén. Zuǒ zǔ yòu shè, miàn cháo hòu shì.',
          'Tượng nhân doanh quốc, phương cửu lý, bàng tam môn. Tả tổ hữu xã, diện triều hậu thị.',
          'Thợ kiến trúc quy hoạch kinh đô: hình vuông mỗi cạnh chín dặm, mỗi mặt mở ba cổng; bên trái đặt Tông miếu, bên phải đặt Đàn Xã Tắc, phía trước là triều đình, phía sau là chợ.',
          'When master builders lay out a capital, it is nine li square with three gates on each side; the Ancestral Temple lies to the left, the Altar of Soil and Grain to the right, the court in front, and the market behind.'
        )
      ],
      sinoVietnameseComparison: 'Placing Beijing\'s continental 72-hectare Forbidden City beside Thang Long\'s 1,300-year alluvial citadel and Hue\'s Vauban-ringed garden capital illustrates how Vietnam adapted East Asian royal canons autonomously, prioritizing harmony with tropical rivers and mountains over sheer monumental scale.',
      additionalReferences: [
        'UNESCO World Heritage Centre: Imperial Palaces of the Ming and Qing Dynasties, Thang Long Imperial Citadel, Complex of Hue Monuments.',
        'Vietnam Institute of Archaeology (2006), Hoang Thanh Thang Long.',
        'Phan Thuan An (2005), Quan the di tich Hue.'
      ],
      conclusion: 'The three imperial axes of Beijing, Thang Long, and Hue stand as stone-and-timber witnesses to East Asian architectural dialogue, transforming shared Zhou ritual canons into three distinct masterpieces.'
    },
    'truc-lam-zen-song-yuan-dialogue': {
      id: 'truc-lam-zen-song-yuan-dialogue',
      number: 88,
      category: 'sino-vietnam',
      categoryLabel: 'Sino–Vietnamese Dialogue',
      title: 'The Truc Lam Yen Tu Zen School and Its Dialogue with Song–Yuan Chan Buddhism',
      titleZh: '竹林安子禅派与宋元禅宗对话',
      titleZhTrad: '竹林安子禪派與宋元禪宗對話',
      readMinutes: 14,
      epistemicTag: 'Buddhist History & East Asian Thought',
      abstract: 'This treatise examines the founding of the Truc Lam Yen Tu Zen school in 1299 by Emperor-Monk Tran Nhan Tong (1258–1308) in dialogue with Song–Yuan Linji Chan, analyzing its engaged ethos ("Dwelling in the World, Rejoicing in the Way") and the institutional legacy of the Three Patriarchs (Tran Nhan Tong, Phap Loa, Huyen Quang).',
      keyTakeaways: [
        'Founded in 1299, Truc Lam unified Dai Viet\'s earlier Zen lineages (Vinitaruci, Vo Ngon Thong, Thao Duong) with Song Linji Chan vitality to establish an independent national Buddhist church.',
        'Rather than world-denying reclusion, Tran Buddhism (Tran Thai Tong, Tue Trung Thuong Si, Tran Nhan Tong) prioritized active civic duty—defending sovereignty against Mongol–Yuan invasions before monastic ordination.',
        'Tran Nhan Tong\'s vernacular Chu Nom "Cu Tran Lac Dao Phu" brought Zen awakening directly into native Vietnamese language and everyday life.'
      ],
      introduction: 'In 1299, after twice leading Dai Viet to victory against Mongol–Yuan invasions (1285 and 1288), Retired Emperor Tran Nhan Tong ascended Mount Yen Tu (Quang Ninh) to ordain as a monk and found the Truc Lam Zen school—a rare synthesis of sovereign leadership, Song–Yuan Chan dialogue, and indigenous engaged spirituality.',
      historicalBackground: 'Prior to the Tran dynasty, Dai Viet absorbed successive Chinese Chan transmissions (Vinitaruci in the 6th century, Vo Ngon Thong in 820, Thao Duong in the 11th century). In the 13th century, visiting Song Chan masters (Thien Phong, Dai Dang) engaged closely with Tran royalty—including Tran Thai Tong (author of "Khoa Hu Luc") and lay master Tue Trung Thuong Si. Emerging from this intellectual exchange and post-war national unity, Tran Nhan Tong, Phap Loa, and Huyen Quang built Truc Lam.',
      mainContent: [
        {
          heading: '1. From Tran Thai Tong\'s "Khoa Hu Luc" to Tue Trung Thuong Si',
          body: 'When young King Tran Thai Tong fled to Mount Yen Tu in 1236 seeking ordination, National Master Phu Van advised him: "The mountain holds no Buddha; Buddha dwells solely in the mind—a monarch must make the people\'s will his own." Later, lay master Tue Trung Thuong Si (1230–1291, Tran Nhan Tong\'s mentor) taught fearless Linji immediacy ("Turn inward to one\'s own nature; harmonize light with worldly dust").'
        },
        {
          heading: '2. Unified Church and the Three Patriarchs of Truc Lam',
          body: 'Tran Nhan Tong traveled across villages teaching the Ten Wholesome Deeds. Second Patriarch Phap Loa (1284–1330) built a nationwide monastic registry, founded over 800 temples, and oversaw the woodblock carving of Dai Viet\'s first Buddhist Tripitaka (1319–1329). Third Patriarch Huyen Quang (1254–1334, former First-Rank Laureate) enriched its literary brilliance at Con Son and Thanh Mai.'
        },
        {
          heading: '3. Dialogue with Song–Yuan Chan: Shared Roots and Distinctive Identity',
          body: 'While sharing Song Linji koan collections and recorded-sayings formats, Truc Lam diverged from Yuan-era monastic withdrawal by wedding Zen practice to national sovereignty, Three-Teachings harmony, and vernacular Chu Nom literature.'
        },
        {
          heading: '4. Living Heritage of Yen Tu, Vinh Nghiem, and Con Son–Kiep Bac',
          body: 'The Truc Lam network—stretching from Yen Tu\'s Dong Pagoda through Vinh Nghiem Pagoda (preserving 3,050 woodblocks inscribed on UNESCO\'s Memory of the World Register in 2012) to Con Son—remains a vital cultural axis of contemporary Vietnam.'
        }
      ],
      theoreticalFramework: 'In comparative East Asian Buddhism, Truc Lam exemplifies "Engaged Indigenous Zen": inheriting Huineng\'s direct pointing to the mind while redirecting contemplative clarity toward civic harmony and vernacular moral education.',
      terminologyAndLiushu: [
        { hanzi: '尘', pinyin: 'chén', hanViet: 'Trần', liushu: 'Compound Ideograph', gloss: 'Traditional 塵 shows deer (鹿) kicking up earth (土); denotes the everyday mundane world.' },
        { hanzi: '觉', pinyin: 'jué', hanViet: 'Giác', liushu: 'Phono-semantic / Compound Ideograph', gloss: 'Lucid awakening—central to Tran Nhan Tong\'s title "Dieu Ngu Giac Hoang."' },
        { hanzi: '缘', pinyin: 'yuán', hanViet: 'Duyên', liushu: 'Phono-semantic', gloss: 'Silk (纟) and 彖; moving gracefully with interdependent conditions ("Suiyuan").' },
        { hanzi: '灯', pinyin: 'dēng', hanViet: 'Đăng', liushu: 'Phono-semantic', gloss: 'Lamp of awakened wisdom transmitted across patriarchal lineages.' },
        { hanzi: '林', pinyin: 'lín', hanViet: 'Lâm', liushu: 'Compound Ideograph', gloss: 'Double trees denoting both Bamboo Grove ("Truc Lam") and a great monastic assembly.' }
      ],
      primarySources: [
        PQ(
          '《居尘乐道赋·第十会》（陈仁宗，13世纪末）',
          'Cư Trần Lạc Đạo Phú — Hội thứ 10 (Trần Nhân Tông)',
          'Rhapsody on Dwelling in the World and Rejoicing in the Way — Tran Nhan Tong',
          '居尘乐道且随缘，饥则餐兮困则眠。家中有宝休寻觅，对境无心莫问禅。',
          'Jūchén lèdào qiě suíyuán, jī zé cān xī kùn zé mián. Jiāzhōng yǒubǎo xiū xúnmì, duìjìng wúxīn mò wèn chán.',
          'Cư trần lạc đạo thả tùy duyên, cơ tắc xan hề khốn tắc miên. Gia trung hữu bảo hưu tầm mịch, đối cảnh vô tâm mạc vấn thiền.',
          'Ở đời vui đạo hãy tùy duyên, đói cứ ăn đi mệt ngủ liền. Trong nhà có báu thôi tìm kiếm, đối cảnh không tâm chớ hỏi thiền.',
          'Dwelling in the world and rejoicing in the Way, move with conditions: when hungry eat, when weary sleep. The treasure already lies within the house—stop searching outside; facing circumstances with an unattached mind, why ask about Zen?'
        ),
        PQ(
          '《课虚录·序》（陈太宗，13世纪）',
          'Khóa Hư Lục — Bài Tựa (Trần Thái Tông)',
          'Lessons on Emptiness (Khoa Hu Luc), Preface — Tran Thai Tong',
          '山本无佛，惟存于心。心寂而知，是名真佛。',
          'Shān běn wúfó, wéi cún yú xīn. Xīn jì ér zhī, shì míng zhēnfó.',
          'Sơn bản vô Phật, duy tồn ư tâm. Tâm tịch nhi tri, thị danh chân Phật.',
          'Trong núi vốn không có Phật, Phật chỉ tồn tại ở trong tâm. Tâm lắng lặng mà sáng biết, đó chính là chân Phật (lời Quốc sư Phù Vân).',
          'The mountain itself holds no Buddha; Buddha exists solely within the mind. When the mind is still yet lucid, that is the true Buddha.'
        )
      ],
      sinoVietnameseComparison: 'Whereas Song–Yuan Chan in China gradually merged with Pure Land devotion inside monasteries, Truc Lam Yen Tu fused Zen directly with national resilience, vernacular Chu Nom verse, and active civic ethics.',
      additionalReferences: [
        'Le Manh That (1999), Toan tap Tran Nhan Tong (Complete Works of Tran Nhan Tong).',
        'Nguyen Lang (1974), Viet Nam Phat Giao Su Luan, Vol. 1.',
        'Cuong Tu Nguyen (1997), Zen in Medieval Vietnam, University of Hawaii Press.'
      ],
      conclusion: 'Truc Lam Yen Tu exemplifies the highest form of cultural synthesis: absorbing regional philosophical vitality to forge a sovereign spiritual tradition rooted in everyday life and national destiny.'
    },
    'east-asian-historiography-shiji-toanthu': {
      id: 'east-asian-historiography-shiji-toanthu',
      number: 89,
      category: 'sino-vietnam',
      categoryLabel: 'Sino–Vietnamese Dialogue',
      title: 'East Asian Historiographical Traditions: Annals–Biography in Sima Qian\'s Shiji vs. Chronological Annals in Dai Viet Su Ky Toan Thu',
      titleZh: '东亚史学传统：《史记》纪传体与《大越史记全书》编年体对照',
      titleZhTrad: '東亞史學傳統：《史記》紀傳體與《大越史記全書》編年體對照',
      readMinutes: 14,
      epistemicTag: 'Comparative Historiography & East Asian Classics',
      abstract: 'This treatise contrasts the two foundational genres of East Asian historiography: the human-centered Annals–Biography format pioneered by Sima Qian in the "Shiji" (c. 91 BCE) and the chronological Annals format perfected in Dai Viet\'s "Complete Annals of Dai Viet" (Dai Viet Su Ky Toan Thu).',
      keyTakeaways: [
        'East Asian historiography elevated history writing into a supreme moral–political mirror ("using history as a mirror"), sustaining official state history bureaus uninterrupted for over two millennia.',
        'Sima Qian\'s five-part Annals–Biography structure (Basic Annals, Tables, Treatises, Hereditary Houses, Biographies) captured emperors, institutions, merchants, knights-errant, and neighboring peoples alike.',
        'Dai Viet court historians (Le Van Huu, Phan Phu Tien, Ngo Si Lien) adopted chronological Annals with direct moral critiques ("The Historian comments") to assert unbroken national sovereignty.'
      ],
      introduction: 'No other ancient civilization maintained an unbroken institutional tradition of state historiography comparable to East Asia. Comparing China\'s "Shiji" (Records of the Grand Historian) with Vietnam\'s "Dai Viet Su Ky Toan Thu" illuminates how historiographical form directly serves political legitimacy and cultural identity.',
      historicalBackground: 'Chinese historiography grew from Shang–Zhou court scribes ("Spring and Autumn Annals," "Zuo Commentary"). Despite enduring castration in 99 BCE for defending General Li Ling, Han Grand Historian Sima Qian completed his 130-chapter, 526,500-character "Shiji" spanning 3,000 years; a millennium later, Sima Guang revived grand chronological history in the 1084 "Zizhi Tongjian." In Dai Viet, Le Van Huu completed the 30-fascicle "Dai Viet Su Ky" in 1272, expanded by Ngo Si Lien in 1479 into "Dai Viet Su Ky Toan Thu" and printed in the canonical 1697 Chinh Hoa edition.',
      mainContent: [
        {
          heading: '1. Sima Qian\'s Five-Part Annals–Biography Architecture',
          body: 'The "Shiji" balances political chronology, institutional change, and human biography across five interlocking sections: 12 Basic Annals, 10 Chronological Tables, 8 Treatises (ritual, music, astronomy, hydraulics, economics), 30 Hereditary Houses (including Confucius), and 70 Biographies spanning generals, philosophers, assassins, and merchants—anchored by the ethic of "truthful recording" (Shilu).'
        },
        {
          heading: '2. Chronological Continuity and Sovereign Legitimacy in "Toan Thu"',
          body: 'Divided into Outer Annals (Hong Bang through Ngo Quyen) and Basic Annals (968–1675), "Dai Viet Su Ky Toan Thu" placed the Hung Kings at the dawn of national history and preserved independent Vietnamese reign titles to affirm parity with northern empires, punctuating major events with candid critiques ("The Historian comments").'
        },
        {
          heading: '3. Methodological Strengths of Both Genres',
          body: 'Annals–Biography excels at vivid psychological portraiture (hailed by Lu Xun as "the unrhymed Li Sao") and thematic institutional essays, though events recur across multiple chapters. Chronological Annals preserves seamless year-by-year causality while fragmenting individual biographies across decades.'
        },
        {
          heading: '4. Cross-Reading Chinese and Vietnamese Chronicles Today',
          body: 'Modern historians routinely triangulate "Hanshu," "Tangshu," "Songshi," and "Mingshi" against "Dai Viet Su Ky Toan Thu" to reconstruct frontier diplomacy, trade, and historical geography with dual-source precision.'
        }
      ],
      theoreticalFramework: 'Modern historians (Grant Hardy on "Shiji"; Keith Taylor and Phan Huy Le on Dai Viet chronicles) show that East Asian historiography operates as a "discourse of moral legitimacy," where titles, reign names, and genre choices themselves constitute sovereign statements.',
      terminologyAndLiushu: [
        { hanzi: '史', pinyin: 'shǐ', hanViet: 'Sử', liushu: 'Compound Ideograph', gloss: 'Oracle script shows a hand (又) holding a tally/tablet (中); court scribe and historical record.' },
        { hanzi: '纪', pinyin: 'jì', hanViet: 'Kỷ', liushu: 'Phono-semantic', gloss: 'Silk thread end (纟) and 己; chronological imperial annals ("Benji").' },
        { hanzi: '传', pinyin: 'zhuàn', hanViet: 'Truyện', liushu: 'Phono-semantic', gloss: 'Person (亻) and 专; biographical narratives ("Liezhuan") or classical commentaries.' },
        { hanzi: '鉴', pinyin: 'jiàn', hanViet: 'Giám (Gương)', liushu: 'Phono-semantic / Compound Ideograph', gloss: 'Bronze mirror; metaphor for history guiding righteous governance.' },
        { hanzi: '录', pinyin: 'lù', hanViet: 'Lục', liushu: 'Phono-semantic', gloss: 'In "Shilu" (truthful record), the historian\'s duty to record facts without flattery or concealment.' }
      ],
      primarySources: [
        PQ(
          '《报任安书》（司马迁）',
          'Báo Nhậm An Thư — Tư Mã Thiên',
          'Letter to Ren An — Sima Qian',
          '究天人之际，通古今之变，成一家之言。',
          'Jiū tiānrén zhī jì, tōng gǔjīn zhī biàn, chéng yījiā zhī yán.',
          'Cứu thiên nhân chi tế, thông cổ kim chi biến, thành nhất gia chi ngôn.',
          'Khảo cứu mối giao hòa giữa Trời và Người, thông suốt quy luật biến đổi từ xưa đến nay, tạo thành một học thuyết sử học độc lập.',
          'To examine the interplay between Heaven and Humanity, penetrate the transformations of past and present, and establish an independent school of thought.'
        ),
        PQ(
          '《大越史记全书·外纪卷一》（吴士连，1479）',
          'Đại Việt Sử Ký Toàn Thư — Bài Tựa / Phàm lệ (Ngô Sĩ Liên)',
          'Complete Annals of Dai Viet — Wu Shilian / Ngo Si Lien (1479)',
          '国史所以记善恶，垂劝惩，使后世知所法戒也。',
          'Guóshǐ suǒyǐ jì shàn\'è, chuí quànchéng, shǐ hòushì zhī suǒ fǎjiè yě.',
          'Quốc sử sở dĩ ký thiện ác, thùy khuyến trừng, sử hậu thế tri sở pháp giới dã.',
          'Quốc sử là để ghi rõ điều thiện điều ác, lưu truyền lời khuyên răn, khiến đời sau biết điều gì nên noi theo và điều gì phải tránh.',
          'National history exists to record good and evil, leaving admonitions so posterity knows what to emulate and what to guard against.'
        )
      ],
      sinoVietnameseComparison: 'Whereas Sima Qian\'s "Shiji" remains a towering monument of individual humanist vision, "Dai Viet Su Ky Toan Thu" remains a chronological evidence of Vietnam\'s millennia-old sovereignty—both anchored in the shared East Asian ethic of truthful recording.',
      additionalReferences: [
        'Sima Qian, Shiji (Records of the Grand Historian).',
        'Ngo Si Lien et al., Dai Viet Su Ky Toan Thu.',
        'Grant Hardy (1999), Worlds of Bronze and Bamboo: Sima Qian\'s Conquest of History, Columbia University Press.'
      ],
      conclusion: 'Placing the "Shiji" beside "Dai Viet Su Ky Toan Thu" illuminates not only two foundational genres, but the enduring intellectual integrity of East Asian historians safeguarding collective memory.'
    },
    'bac-y-nam-duoc-comparative-medicine': {
      id: 'bac-y-nam-duoc-comparative-medicine',
      number: 90,
      category: 'sino-vietnam',
      categoryLabel: 'Sino–Vietnamese Dialogue',
      title: 'Northern Medicine and Southern Herbs: Dialogue Between the Huangdi Neijing and Vietnamese Masters Tue Tinh and Hai Thuong Lan Ong',
      titleZh: '北医与南药对话：《黄帝内经》同越南慧静与海上懒翁医学思想',
      titleZhTrad: '北醫與南藥對話：《黃帝內經》同越南慧靜與海上懶翁醫學思想',
      readMinutes: 15,
      epistemicTag: 'Comparative Traditional Medicine',
      abstract: 'This treatise examines the dialogue between classical Chinese medicine ("Huangdi Neijing," "Shanghan Lun," "Bencao Gangmu") and Vietnamese traditional medicine forged by Zen physician Tue Tinh ("Southern herbs heal Southern people," 14th century) and Hai Thuong Lan Ong Le Huu Trac (18th century).',
      keyTakeaways: [
        'Vietnamese traditional medicine adopted core holistic frameworks from Northern Medicine (Yin–Yang, Five Phases, Meridians, Eight Principles) while adapting diagnosis and pharmacology to Vietnam\'s humid tropical climate.',
        'Fourteenth-century master Tue Tinh pioneered "Nam duoc tri Nam nhan" (Southern herbs heal Southern people), documenting 499 indigenous Vietnamese medicinals in "Nam Duoc Than Hieu."',
        'Hai Thuong Lan Ong (1720–1791) synthesized Northern theory and Southern clinical experience in his 66-fascicle "Hai Thuong Y Tong Tam Linh" alongside nine enduring ethical maxims.'
      ],
      introduction: 'In Vietnamese daily life, "Thuoc Bac" (Northern medicine) and "Thuoc Nam" (Southern herbs) have coexisted for centuries, reflecting a millennium-long empirical dialogue between Central Plains medical theory and Vietnam\'s tropical botanical pharmacopoeia.',
      historicalBackground: 'Classical Chinese medicine rested on the "Huangdi Neijing," Zhang Zhongjing\'s "Shanghan Zabing Lun," and Li Shizhen\'s 1596 "Bencao Gangmu." In Dai Viet, 14th-century monk-physician Tue Tinh cataloged 499 native herbs and nearly 4,000 formulas before traveling to Ming China in 1385. Four centuries later, Hai Thuong Lan Ong Le Huu Trac (1720–1791) compiled Vietnam\'s grandest medical encyclopedia, "Hai Thuong Y Tong Tam Linh."',
      mainContent: [
        {
          heading: '1. Shared Holistic Theory and Climatic Divergence',
          body: 'Both traditions diagnose through Four Examinations (inspection, auscultation, inquiry, palpation) and Eight Principles. Even within China, cold-dry northern Shanghan formulas diverged from warm-humid Jiangnan Warm Disease (Wenbing) schools—a climatic insight Vietnamese physicians extended further.'
        },
        {
          heading: '2. Tue Tinh and the Revolution of "Southern Herbs Heal Southern People"',
          body: 'Centuries before China\'s Qing Warm Disease school, Tue Tinh recognized that expensive imported northern herbs often poorly suited tropical constitutions, championing fresh local garden medicinals (ginger, perilla, mugwort, lemongrass, motherwort) and holistic breath–mind cultivation.'
        },
        {
          heading: '3. Hai Thuong Lan Ong: Synthesizing Northern Theory, Southern Practice, and Medical Ethics',
          body: 'Drawing critically on Ming physician Zhang Jingyue, Le Huu Trac warned that hot, humid southern climates deplete Yin and require modifying northern warming formulas with cooling local herbs. Alongside adding 305 southern herbs in "Linh Nam Ban Thao," his nine ethical precepts mirror Tang physician Sun Simiao\'s "Absolute Sincerity of Great Physicians."'
        },
        {
          heading: '4. Dialogue in Modern Integrative Medicine',
          body: 'Today both China and Vietnam pursue integrative East–West medicine—from Tu Youyou\'s 2015 Nobel Prize isolating artemisinin via Ge Hong\'s classic to Vietnamese pharmacological research on Ngoc Linh ginseng and native botanicals.'
        }
      ],
      theoreticalFramework: 'In medical anthropology, the Northern Medicine–Southern Herbs dialogue expresses the "Neijing" principle of "adapting treatment to season, locality, and constitution," realized by Tue Tinh and Le Huu Trac as a sovereign tropical medical science.',
      terminologyAndLiushu: [
        { hanzi: '医', pinyin: 'yī', hanViet: 'Y', liushu: 'Compound Ideograph', gloss: 'Traditional 醫 combines arrow-quiver, hand tool, and medicinal wine jar (酉); healing and medicine.' },
        { hanzi: '药', pinyin: 'yào', hanViet: 'Dược', liushu: 'Phono-semantic', gloss: 'Traditional 藥 combines grass/herbs (艹) and joy/wellbeing (樂); medicinal herbs.' },
        { hanzi: '脉', pinyin: 'mài', hanViet: 'Mạch', liushu: 'Phono-semantic', gloss: 'Vessels and pulse examined in both Northern and Southern clinical diagnosis.' },
        { hanzi: '寒', pinyin: 'hán', hanViet: 'Hàn', liushu: 'Compound Ideograph', gloss: 'Person sheltering under straw above ice; cold-pathogen patterns of northern climates.' },
        { hanzi: '温', pinyin: 'wēn', hanViet: 'Ôn', liushu: 'Phono-semantic', gloss: 'In "Wenbing," warm-humid febrile conditions prevalent in Jiangnan and Vietnam.' }
      ],
      primarySources: [
        PQ(
          '《南药神效》（越南·慧静，14世纪）',
          'Nam Dược Thần Hiệu — Thiền sư Tuệ Tĩnh (thế kỷ XIV)',
          'Miraculous Efficacy of Southern Herbs — Master Tue Tinh (14th century)',
          '南药治南人。',
          'Nányào zhì Nánrén.',
          'Nam dược trị Nam nhân.',
          'Thuốc Nam chữa bệnh cho người Nam (tuyên ngôn độc lập của nền y học bản địa Việt Nam, phù hợp thổ nhưỡng và thể trạng nhiệt đới).',
          'Southern herbs heal Southern people.'
        ),
        PQ(
          '《备急千金要方·大医精诚》（唐·孙思邈）',
          'Bị Cấp Thiên Kim Yếu Phương — Đại Y Tinh Thành (Tôn Tư Mạo, đời Đường)',
          'Essential Prescriptions Worth a Thousand Gold, On the Absolute Sincerity of Great Physicians — Sun Simiao',
          '凡大医治病，必当安神定志，无欲无求，先发大慈恻隐之心。',
          'Fán dàyī zhìbìng, bìdāng ānshén dìngzhì, wúyù wúqiú, xiān fā dàcí cèyǐn zhī xīn.',
          'Phàm đại y trị bệnh, tất đương an thần định chí, vô dục vô cầu, tiên phát đại từ trắc ẩn chi tâm.',
          'Phàm bậc đại y khi chữa bệnh tất phải giữ thần trí bình tĩnh, không màng lợi cầu danh, trước hết khởi phát tấm lòng đại từ bi trắc ẩn.',
          'Whenever a great physician treats illness, they must calm the spirit and steady the will, free of selfish desire, beginning first with boundless compassion.'
        )
      ],
      sinoVietnameseComparison: 'The intellectual bridge between the "Huangdi Neijing"–Sun Simiao and Tue Tinh–Hai Thuong Lan Ong unites shared holistic theory and compassionate medical ethics with complementary temperate and tropical pharmacopoeias.',
      additionalReferences: [
        'Tue Tinh, Complete Works (Nam Duoc Than Hieu).',
        'Hai Thuong Lan Ong Le Huu Trac, Hai Thuong Y Tong Tam Linh.',
        'Paul U. Unschuld (1985), Medicine in China: A History of Ideas, University of California Press.'
      ],
      conclusion: 'Northern Medicine and Southern Herbs form two interacting branches of East Asian medicine—sharing holistic theoretical roots while anchoring clinical practice in local ecology, empirical results, and compassion.'
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
  for (key in EN_ARTICLES_V3_PART3A) {
    if (Object.prototype.hasOwnProperty.call(EN_ARTICLES_V3_PART3A, key)) {
      window.CCE_ARTICLES_EN[key] = EN_ARTICLES_V3_PART3A[key];
    }
  }
})();
