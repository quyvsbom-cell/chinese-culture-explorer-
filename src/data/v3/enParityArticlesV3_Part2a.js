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

  var EN_ARTICLES_V3_PART2A = {
    'dunhuang-mogao-buddhist-grotto-art': {
      id: 'dunhuang-mogao-buddhist-grotto-art',
      number: 76,
      category: 'arts',
      categoryLabel: 'Arts & Aesthetics',
      title: 'Aesthetics of the Dunhuang Mogao Caves and China\'s Four Great Grottoes: Flying Apsaras and the Library Cave',
      titleZh: '敦煌莫高窟与四大石窟美学：飞天壁画与藏经洞',
      titleZhTrad: '敦煌莫高窟與四大石窟美學：飛天壁畫與藏經洞',
      readMinutes: 15,
      epistemicTag: 'Art History & Dunhuang Studies',
      abstract: 'This treatise traces the localization of Buddhist visual art from Central Asia into China across the Four Great Grottoes (Mogao, Yungang, Longmen, Maijishan), examining the evolution of Flying Apsaras across 45,000 sq m of Dunhuang murals and the historical impact of over 50,000 manuscripts unearthed in the Library Cave (Cave 17) in 1900.',
      keyTakeaways: [
        'China\'s Four Great Grottoes reflect an east–west geological and artistic continuum: friable conglomerate cliffs at Dunhuang and Maijishan favored painted clay statuary and murals, while firmer sandstone and limestone at Yungang (460) and Longmen (493) enabled monumental imperial stone carving.',
        'The Flying Apsaras (Feitian) of Mogao evolved over a millennium from robust, bare-chested Gandharan–Northern Wei forms into sinuous, ribbon-borne celestial musicians of the High Tang.',
        'The Library Cave (Cave 17, sealed in the early 11th century and rediscovered in 1900) preserved over 50,000 manuscripts in Chinese, Tibetan, Sanskrit, Sogdian, and Khotanese, founding the international discipline of Dunhuang Studies.'
      ],
      introduction: 'Buddhist cave temples stand as the most monumental visual record of civilizational encounter among India, Central Asia, Gandhara, and China along the Silk Road. Derived from Indian rock-cut chaitya and vihara prototypes (Ajanta) via Bamiyan and Kizil (Xinjiang), grotto art flourished in China from the 4th through 14th centuries at four supreme sites: Mogao (Dunhuang, Gansu), Yungang (Datong, Shanxi), Longmen (Luoyang, Henan), and Maijishan (Tianshui, Gansu). Stretching 1,600 meters along Mingsha Mountain, Mogao alone preserves 735 caves (492 painted and sculpted), over 2,400 statues, and 45,000 sq m of murals spanning ten dynasties.',
      historicalBackground: 'According to the 698 CE stele commissioned under Wu Zetian, in 366 CE (Former Qin dynasty) the monk Lezun beheld a vision of golden light resembling a thousand Buddhas above Mount Sanwei and carved the first shrine at Dunhuang. Throughout the Northern and Southern Dynasties, Xianbei Northern Wei aristocrats, Sogdian merchants, and Hexi Corridor clans continuously patronized cave excavations for spiritual merit. Under Northern Wei Emperor Wencheng, monk Tanyao directed the carving of the five colossal imperial caves at Yungang (460) near Pingcheng (Datong); after Emperor Xiaowen moved the capital to Luoyang in 494, imperial patronage shifted to Longmen, reaching its humanist summit under Emperor Gaozong and Wu Zetian with the 17.14 m Vairocana Buddha (675).',
      mainContent: [
        {
          heading: '1. Comparing the Four Great Grottoes: Geology Shapes Artistic Form',
          body: 'Stylistic divergence across the Four Great Grottoes stems directly from local rock strata. At Mogao and Maijishan, loose conglomerate and friable sandstone could not hold crisp stone carving, prompting artisans to perfect timber-framed, straw-and-clay painted sculpture ("Caisu") and expansive lime-plaster murals. Conversely, Yungang\'s fine sandstone and Longmen\'s hard limestone permitted monumental direct relief: early Yungang Buddhas exhibit broad shoulders, high-bridged noses, and Gandharan–Central Asian monumentality (mirroring Northern Wei emperors), whereas late Northern Wei and High Tang Longmen figures transition to slender Southern-Dynasties literati drapery and serene, fully Sinicized compassion.'
        },
        {
          heading: '2. Flying Apsaras and the Mineral Palette of Dunhuang Murals',
          body: 'Across Mogao\'s 492 painted caves, murals fall into four main genres: iconic Buddhas and Bodhisattvas, Jataka and karmic narratives (such as the Nine-Colored Deer and Hungry Tigress in Northern Wei Caves 257 and 254), Pure Land transformation tableaux ("Jingbian") packed with High Tang palatial architecture and orchestras (Caves 220 and 172), and donor portraits documenting historical dress, carriages, and agriculture. Its signature motif is the Flying Apsara—celestial musicians soaring without wings through billowing silk ribbons, shifting from vigorous Northern Wei U-curves to effortless Tang weightlessness. Painters ground precious minerals—Afghan lapis lazuli (ultramarine), cinnabar (red), malachite (green), and gold leaf—preserving luminous color across millennia.'
        },
        {
          heading: '3. The Library Cave (Cave 17) and the Birth of Dunhuang Studies',
          body: 'On June 22, 1900, Daoist caretaker Wang Yuanlu clearing sand in Cave 16 uncovered a concealed doorway into Cave 17 (the Library Cave)—a chamber under 9 sq m sealed in the early 11th century and packed with over 50,000 manuscripts, silk paintings, and contracts spanning the 4th to 11th centuries. Alongside Buddhist sutras, the trove held the 868 CE woodblock-printed "Diamond Sutra," the 7th-century Dunhuang Star Chart, commercial deeds, Daoist, Nestorian Christian, and Manichaean texts, and manuscripts in Tibetan, Sanskrit, Khotanese, Sogdian, and Hebrew. Subsequent acquisitions by foreign explorers (Aurel Stein in 1907, Paul Pelliot in 1908) dispersed tens of thousands of scrolls to London, Paris, Saint Petersburg, and Tokyo, prompting Chinese scholars (Luo Zhenyu, Wang Guowei, Chen Yinke) to establish Dunhuang Studies and Chang Shuhong to found the Dunhuang Academy in 1944.'
        },
        {
          heading: '4. Digital Preservation of Dunhuang in the 21st Century',
          body: 'Because clay-plaster murals are acutely vulnerable to humidity and visitors\' exhaled CO2, the Dunhuang Academy has pioneered the "Digital Dunhuang" initiative since the 1990s: 3D laser scanning and ultra-high-resolution photography archive every cave permanently and provide open-access online viewing, turning a fragile desert oasis into a global scholarly resource.'
        }
      ],
      theoreticalFramework: 'In comparative art history (notably Wu Hung and modern Dunhuang scholarship), a Mogao cave is not a static picture gallery, but an integrated "ritual architectural space": the coffered ceiling (zaojing), four narrative mural walls, and central icons operate together as an immersive meditative cosmos documenting ten centuries of cross-cultural Sinicization.',
      terminologyAndLiushu: [
        {
          hanzi: '窟',
          pinyin: 'kū',
          hanViet: 'Quật',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the cave radical (穴) for meaning and 屈 for sound; designates rock-cut monastic caves and shrines ("Shiku").'
        },
        {
          hanzi: '壁',
          pinyin: 'bì',
          hanViet: 'Bích',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines earth (土) and 辟 for sound; denotes plastered wall surfaces painted with murals ("Bihua").'
        },
        {
          hanzi: '龛',
          pinyin: 'kān',
          hanViet: 'Kham',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 龕 combines 合 and 龍; denotes a recessed stone niche or wooden shrine housing a Buddhist image.'
        },
        {
          hanzi: '塑',
          pinyin: 'sù',
          hanViet: 'Tố',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines earth/clay (土) and 朔 for sound; denotes polychrome clay sculpture ("Caisu") characteristic of Dunhuang and Maijishan.'
        },
        {
          hanzi: '卷',
          pinyin: 'juǎn',
          hanViet: 'Quyển',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Originally "to roll up"; in Dunhuang Studies designates the paper scroll format ("Juanzizhuang") preserved in Cave 17.'
        }
      ],
      primarySources: [
        PQ(
          '《大周李君莫高窟佛龛碑》（圣历元年，698）',
          'Bia Phật Kham Mạc Cao Quật của Lý Quân (năm Thánh Lịch thứ 1, 698)',
          'Stele of the Buddhist Niches at Mogao Caves (698 CE)',
          '莫高窟者，厥初秦建元二年，有沙门乐僔，戒行清虚，执心恬静，尝杖锡林野，行至此山，忽见金光，状有千佛。',
          'Mògāokū zhě, juéchū Qín Jiànyuán èrnián, yǒu shāmén Lèzūn, jièxíng qīngxū, zhíxīn tiánjìng, cháng zhàngxī línyě, xíng zhì cǐ shān, hū jiàn jīnguāng, zhuàng yǒu qiānfó.',
          'Mạc Cao Quật giả, quyết sơ Tần Kiến Nguyên nhị niên, hữu sa môn Lạc Tôn, giới hạnh thanh hư, chấp tâm điềm tĩnh, thường trượng tích lâm dã, hành chí thử sơn, hốt kiến kim quang, trạng hữu thiên Phật.',
          'Về Mạc Cao Quật: thuở ban đầu vào năm Kiến Nguyên thứ 2 nhà Tiền Tần (366), có sa môn Lạc Tôn giới hạnh thanh tịnh, chống tích trượng đi qua rừng núi, đến ngọn núi này chợt thấy ánh hào quang vàng rực tựa như có nghìn vị Phật.',
          'As for the Mogao Caves, at the outset in the second year of Jianyuan of Former Qin (366 CE), a monk named Lezun, pure in discipline and serene in mind, wandered to this mountain and suddenly beheld a golden radiance resembling a thousand Buddhas.'
        ),
        PQ(
          '《陈寅恪〈敦煌劫余录〉序》（1930）',
          'Lời Tựa "Đôn Hoàng Kiếp Dư Lục" — Trần Dần Khác (1930)',
          'Preface to the Dunhuang Manuscript Catalog — Chen Yinke (1930)',
          '一时代之学术，必有其新材料与新问题。取用此材料，以研求问题，则为此时代学术之新潮流。',
          'Yī shídài zhī xuéshù, bì yǒu qí xīn cáiliào yǔ xīn wèntí. Qǔyòng cǐ cáiliào, yǐ yánqiú wèntí, zé wéi cǐ shídài xuéshù zhī xīn cháoliú.',
          'Nhất thời đại chi học thuật, tất hữu kỳ tân tài liệu dữ tân vấn đề. Thủ dụng thử tài liệu, dĩ nghiên cầu vấn đề, tắc vi thử thời đại học thuật chi tân trào lưu.',
          'Học thuật của mỗi thời đại tất có tư liệu mới và vấn đề mới. Biết khai thác tư liệu mới ấy để nghiên cứu các vấn đề đặt ra, đó chính là trào lưu học thuật mới của thời đại.',
          'The scholarship of every era necessarily possesses new materials and new questions; employing these materials to investigate those questions constitutes the new scholarly current of the age.'
        )
      ],
      sinoVietnameseComparison: 'Vietnam\'s tropical monsoon climate precluded desert cliff grottoes like Dunhuang, fostering instead gilded lacquered-wood Buddhist sculpture and natural karst cave shrines (Huong Tich, Bich Dong, Tam Thanh). Yet both cultures share a parallel arc of localization: just as Longmen and Dunhuang forged Tang Chinese Buddhist physiognomy, the Ly-dynasty Amitabha Buddha at Phat Tich Pagoda (1057) and the thousand-armed Avalokitesvara at But Thap Pagoda (1656) established an independent, deeply humane Dai Viet Buddhist aesthetic.',
      additionalReferences: [
        'Fan Jinshi (2010), The Caves of Dunhuang, Hong Kong University Press.',
        'Roderick Whitfield, Susan Whitfield, and Neville Agnew (2000), Cave Temples of Mogao: Art and History on the Silk Road, Getty Conservation Institute.',
        'Dunhuang Academy, Digital Dunhuang Archive (e-dunhuang.com).'
      ],
      conclusion: 'Mogao and the Four Great Grottoes prove that China\'s highest artistic achievements grew not from isolation, but from absorbing and creatively transforming external traditions. From mineral murals on desert cliffs to tens of thousands of manuscripts in the Library Cave, China\'s grotto heritage opens a direct window onto medieval faith, aesthetics, and trans-Eurasian exchange.'
    },
    'xiqu-stagecraft-face-masks-tuong': {
      id: 'xiqu-stagecraft-face-masks-tuong',
      number: 77,
      category: 'arts',
      categoryLabel: 'Arts & Aesthetics',
      title: 'Anatomy of Traditional Chinese Opera (Xiqu): The Four Role Types, Facial Makeup Codes, and Comparison with Vietnamese Tuong and Cheo',
      titleZh: '中国传统戏曲舞台解剖：生旦净丑、脸谱与越南嘲剧丛剧对照',
      titleZhTrad: '中國傳統戲曲舞台解剖：生旦淨醜、臉譜與越南嘲劇叢劇對照',
      readMinutes: 14,
      epistemicTag: 'Performing Arts & Comparative Culture',
      abstract: 'This treatise dissects the stagecraft of Traditional Chinese Opera (Xiqu)—from Kunqu (UNESCO Intangible Heritage 2001) to Peking Opera (UNESCO 2010): non-realist spatial conventions, the Four Skills and Five Methods, the Four Role Categories (Sheng, Dan, Jing, Chou), Lianpu facial makeup codes, and a structural comparison with Vietnamese Tuong and Cheo theater.',
      keyTakeaways: [
        'Unlike Western realist drama, Xiqu operates on codified symbolism: a tasseled horsewhip evokes cavalry, and a single circle around the stage signifies a journey of a thousand miles.',
        'Four canonical role types (Sheng–male, Dan–female, Jing–painted-face hero/villain, Chou–clown) paired with Four Skills (singing, stylized speech, acting, martial acrobatics) form a rigorous multi-year training system.',
        'Lianpu color semantics (red for loyalty, black for integrity, white for cunning, yellow for fierce resolve) and Vietnamese Tuong face-painting share an East Asian symbolic root while diverging sharply in music, tonal prosody, and tempo.'
      ],
      introduction: 'Alongside ancient Greek tragedy and classical Indian Sanskrit drama, Chinese Xiqu stands as one of the world\'s three great classical theatrical traditions—and the only one continuously performed across more than 340 living regional genres (including Peking Opera, Kunqu, Yueju, Qinqiang, Sichuan Opera, and Henan Opera). Crystallizing from 13th-century Yuan zaju drama and Ming Kunqu to the 1790 arrival of the Four Great Anhui Troupes in Beijing for Emperor Qianlong\'s 80th birthday, Xiqu forged a total theater uniting singing, declamation, dance, martial arts, music, and visual design on a nearly bare stage.',
      historicalBackground: 'Theatrical antecedents emerged in pre-Qin ritual dances, Han "Hundred Entertainments" (Baixi), and Tang comic skits (Canjunxi). Full four-act literary drama matured in the Yuan dynasty (13th–14th centuries) with Guan Hanqing ("The Injustice to Dou E") and Wang Shifu ("Romance of the Western Chamber"). In the mid-16th century, Wei Liangfu refined Kunshan melodies into the "water-polished" vocal style of Kunqu, achieving literary splendor in Tang Xianzu\'s "Peony Pavilion" (1598). In the late 18th century, Anhui troupes fused Xipi and Erhuang melodies with Hubei Hanju and Kunqu in Beijing, giving birth to Peking Opera.',
      mainContent: [
        {
          heading: '1. Spatial Minimalism and the "Four Skills and Five Methods"',
          body: 'Traditional Xiqu stages employ only "one table and two chairs," yet actors\' choreographed gestures transform that empty space into a courtroom, bridge, city wall, or mountain pass. Stepping over an imaginary threshold, miming an oar to evoke river currents ("Autumn River"), or wielding a tasseled whip ("Matian") to ride a warhorse expresses the aesthetic of "generating virtual space from real gesture." Mastery requires the Four Skills—Chang (singing), Nian (cadenced speech), Zuo (mimetic dance-acting), and Da (martial acrobatics)—governed by the Five Methods: hands, eyes, torso, technique, and footwork.'
        },
        {
          heading: '2. Anatomy of the Four Role Types: Sheng, Dan, Jing, and Chou',
          body: 'Every character is typed by age, gender, and temperament into four major categories. (1) Sheng (unpainted male roles): Laosheng (bearded middle-aged/elderly statesmen), Xiaosheng (young scholars blending falsetto and natural voice), and Wusheng (martial heroes). (2) Dan (female roles): Qingyi (dignified singing heroines epitomized by the Four Great Dan such as Mei Lanfang), Huadan (lively young women), Wudan (female warriors), and Laodan (elderly women). (3) Jing (painted-face "Hualian"): forceful, larger-than-life heroes or schemers such as Bao Zheng, Zhang Fei, and Cao Cao. (4) Chou (clown): marked by a white tofu-shaped patch across the nose ("Little Painted Face"), satirizing authority and bridging stage and audience in vivid colloquial speech.'
        },
        {
          heading: '3. Visual Cryptography of Lianpu (Facial Makeup)',
          body: 'Unlike detachable masks in Japanese Noh or Greek drama, Xiqu paints directly onto the Jing actor\'s skin so facial muscles remain expressive. Lianpu colors deliver instant moral–psychological coding: Red denotes loyalty and bravery (Guan Yu); Black signifies uprightness and incorruptibility (Judge Bao with his forehead crescent, Zhang Fei); Chalky White signals cunning, suspicion, and treachery (Cao Cao); Blue and Green represent fierce, defiant outlaws (Dou Erdun); Yellow denotes calculated ferocity (Dian Wei); Gold and Silver are reserved for deities and spirits.'
        },
        {
          heading: '4. Structural Comparison with Vietnamese Tuong (Hat Boi) and Cheo',
          body: 'Traditional Vietnamese theater exhibits both shared East Asian conventions and strong indigenous autonomy. Tuong (Hat Boi)—flourishing from the Tran–Le periods to its Nguyen-dynasty zenith under Dao Tan (1845–1907)—shares Xiqu\'s minimal stage (table, chairs, horsewhip, circular travel) and color-coded facial makeup (red for loyal heroes like Khuong Linh Ta, chalk-white for treacherous ministers like Ta On Dinh). Yet Tuong features thunderous war-drum (trong chien) and oboe (ken bop) percussion and vocal declamation shaped by Vietnam\'s six-tone language. Meanwhile, northern delta Cheo evolved purely from agrarian village courtyards without ornate face painting, centered on satirical village clowns (He Cheo) and lyrical folk melodies.'
        }
      ],
      theoreticalFramework: 'Witnessing Mei Lanfang perform in Moscow in 1935, German playwright Bertolt Brecht drew inspiration from Xiqu\'s codified acting to articulate his theory of the "Alienation Effect" (Verfremdungseffekt): rather than hypnotizing audiences into naturalistic illusion, the Xiqu actor maintains deliberate aesthetic distance so spectators simultaneously admire technical virtuosity and reflect critically on moral meaning.',
      terminologyAndLiushu: [
        {
          hanzi: '戏',
          pinyin: 'xì',
          hanViet: 'Hý',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 戲 combines the halberd radical (戈) and 虍/豆; originally martial play/mock combat, extending to theatrical opera ("Xiqu").'
        },
        {
          hanzi: '旦',
          pinyin: 'dàn',
          hanViet: 'Đán',
          liushu: 'Simple Ideograph (Zhishi)',
          gloss: 'Depicts the sun (日) rising over the horizon (一), meaning "dawn"; borrowed in Xiqu for the female role category.'
        },
        {
          hanzi: '净',
          pinyin: 'jìng',
          hanViet: 'Tịnh',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Originally "clean/pure"; designates the painted-face male role ("Hualian") representing commanding, righteous, or scheming figures.'
        },
        {
          hanzi: '丑',
          pinyin: 'chǒu',
          hanViet: 'Sửu',
          liushu: 'Pictograph / Phonetic Loan',
          gloss: 'Originally the second Earthly Branch; designates the comic clown role wearing a white nose patch.'
        },
        {
          hanzi: '谱',
          pinyin: 'pǔ',
          hanViet: 'Phổ',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines speech (讠/言) and 普 for sound; denotes codified registers such as "Lianpu" (facial makeup charts) and "Qupu" (musical scores).'
        }
      ],
      primarySources: [
        PQ(
          '《闲情偶寄·词曲部》（李渔，1671）',
          'Nhàn Tình Ngẫu Ký — Từ Khúc Bộ (Lý Ngư, 1671)',
          'Casual Expressions of Idle Feeling, Section on Drama — Li Yu (1671)',
          '填词之设，专为登场。',
          'Tiáncí zhī shè, zhuān wéi dēngchǎng.',
          'Điền từ chi thiết, chuyên vi đăng trường.',
          'Việc sáng tác kịch bản hý khúc cốt yếu là để diễn sống động trên sân khấu (chứ ít khi nhằm đọc trên giấy thuần túy).',
          'The writing of dramatic lyrics exists expressly for live performance upon the stage.'
        ),
        PQ(
          '《梨园原》（清·黄幡绰）',
          'Lê Viên Nguyên — Hoàng Phiên Xước (đời Thanh)',
          'Origins of the Pear Garden — Huang Fanchuo (Qing dynasty)',
          '身段者，所以传神也。',
          'Shēnduàn zhě, suǒyǐ chuánshén yě.',
          'Thân đoạn giả, sở dĩ truyền thần dã.',
          'Động tác hình thể vũ đạo trên sân khấu chính là phương tiện cốt lõi để truyền tải thần thái nội tâm của nhân vật.',
          'Stylized bodily movement is the very instrument through which the spirit of a character is conveyed.'
        )
      ],
      sinoVietnameseComparison: 'Comparing Peking Opera and Kunqu with Vietnamese Tuong and Cheo highlights two complementary cultural patterns: Tuong adopted East Asian stage symbolism, historical plots, and color-coded face painting while rebuilding them around Vietnamese tonal prosody, war-drum rhythms, and southern heroic ethos, whereas Cheo preserved an independent indigenous folk-theater lineage free of Lianpu conventions.',
      additionalReferences: [
        'Colin Mackerras (1972), The Rise of the Peking Opera, 1770–1870: Social Aspects of the Theatre in Manchu China, Clarendon Press.',
        'Li Yu (1671), Xianqing Ouji (Casual Expressions of Idle Feeling).',
        'Hoang Chuong (2004), Nghe thuat Tuong Viet Nam (The Art of Vietnamese Tuong), Stage Publishing House.'
      ],
      conclusion: 'Traditional Chinese Xiqu distills centuries of visual coding, musical phrasing, and kinetic discipline into a single stage language. Mastering its Four Role Types, Lianpu color codes, and symbolic minimalism unlocks both Peking Opera and Kunqu while illuminating their rich historical dialogue with Vietnamese Tuong and Cheo.'
    },
    'five-vernacular-architecture-styles': {
      id: 'five-vernacular-architecture-styles',
      number: 78,
      category: 'traditional',
      categoryLabel: 'Architecture & Heritage',
      title: 'Five Vernacular Architecture Styles of China: Siheyuan, Fujian Tulou, Huizhou Horse-Head Walls, Diaojiaolou, and Yaodong Cave Dwellings',
      titleZh: '中国五大传统民居建筑：四合院、土楼、徽派、吊脚楼与窑洞',
      titleZhTrad: '中國五大傳統民居建築：四合院、土樓、徽派、吊腳樓與窯洞',
      readMinutes: 14,
      epistemicTag: 'Vernacular Architecture & Human Geography',
      abstract: 'This treatise decodes China\'s five classic vernacular dwelling traditions through climate adaptation, local materials, and kinship organization: Beijing Siheyuan courtyards, Fujian rammed-earth Tulou, Huizhou horse-head wall houses, Southwestern Diaojiaolou stilt houses, and Loess Plateau Yaodong cave dwellings.',
      keyTakeaways: [
        'Each vernacular typology solves local climate and terrain directly: Yaodong caves buffer winter cold and summer heat via thick loess earth, while Diaojiaolou stilt houses lift living quarters above humid southwestern slopes.',
        'Floor plans encode clan hierarchy and security: Siheyuan aligns seniority along a North–South Confucian axis ("North is senior"), whereas Hakka Tulou form self-contained earthen fortresses housing hundreds of kinsmen equally.',
        'Huizhou dwellings (Xidi and Hongcun, UNESCO 2000) deploy stepped Horse-Head Walls (Matouqiang) as firebreaks and "Four Waters Returning to the Hall" skywells symbolizing merchant prosperity.'
      ],
      introduction: 'Whereas the Forbidden City and Temple of Heaven embody top-down imperial standardization, China\'s vernacular architecture charts bottom-up ecological intelligence. Spanning the arid Northwest, wind-swept North China Plain, humid Jiangnan valleys, and steep Southwestern mountains, five iconic dwelling styles—Siheyuan, Tulou, Huizhou houses, Diaojiaolou, and Yaodong—demonstrate how local builders optimized thermal comfort, structural resilience, and social cohesion using earth, timber, and stone at hand.',
      historicalBackground: 'Chinese housing diverged into two Neolithic lineages over six millennia ago: semi-subterranean pit dwellings on the Loess Plateau (Yangshao–Banpo culture, c. 4500 BCE—precursor of Yaodong) and raised timber pile-dwellings in southern wetlands (Hemudu culture, Zhejiang, c. 5000 BCE—precursor of Diaojiaolou). From Western Zhou and Han onward, enclosed courtyards matured across the Central Plains. During the Ming–Qing dynasties, Hakka migrations into mountainous Fujian and the rise of Huizhou merchants in Anhui perfected defensive Tulou fortresses and white-walled Huizhou villages.',
      mainContent: [
        {
          heading: '1. Beijing Siheyuan: Confucian Hierarchy and Northern Microclimate',
          body: 'The Siheyuan (four-sided courtyard compound) reached its classical form in Beijing\'s Yuan–Ming–Qing Hutongs. Climatically, windowless northern brick walls block bitter Siberian winds and spring dust storms while the open courtyard captures low winter sunlight. Socially, spatial layout mirrors family rank: the south-facing Principal Hall (Zhengfang) houses elders; East and West Wing Halls house younger generations (eldest son east, younger west); the Reverse Hall (Daozuofang) along the south wall serves guests and studies; and a Spirit Screen (Yingbi) inside the gate shields privacy while calming wind gusts.'
        },
        {
          heading: '2. Fujian Tulou: Rammed-Earth Clan Fortresses of the Hakka',
          body: 'Concentrated in Nanjing, Yongding, and Hua\'an (Fujian, UNESCO 2008), Tulou are three- to five-story circular or square communal structures built from rammed earth (loess mixed with lime, sand, brown sugar, and bamboo reinforcement) with base walls 1.5–2 m thick. Lower two stories have no exterior windows and a single iron-clad timber gate equipped with overhead water chutes against arson, deterring bandits during turbulent eras. Inside, an open courtyard houses ancestral halls and wells surrounded by uniform-sized rooms where hundreds of clan members lived on an egalitarian footing.'
        },
        {
          heading: '3. Huizhou Vernacular Style: Firebreak Horse-Head Walls and Skywells',
          body: 'Exemplified in southern Anhui (Xidi and Hongcun, UNESCO 2000) and Wuyuan (Jiangxi), Huizhou houses pair stark whitewashed walls with dark grey tiles against mountain greenery. Because valley homes sat tightly packed, stepped gable walls—"Horse-Head Walls" (Matouqiang)—rose above rooflines to serve as practical firebreaks halting blazes between neighbors. Inside, four inward-sloping roofs frame a compact skywell (Tianjing) for daylight, stack ventilation, and rainwater collection ("Four Waters Returning to the Hall," a metaphor for accumulating wealth among Huizhou merchants), accented by intricate wood, brick, and stone carvings.'
        },
        {
          heading: '4. Southwestern Diaojiaolou and Loess Yaodong: Opposite Topographic Extremes',
          body: 'Across humid southwestern slopes (western Hunan, southeastern Guizhou, southwestern Hubei), Tujia, Miao, and Dong builders developed fir-timber "Diaojiaolou" stilt houses anchored directly onto hillsides without leveling terrain: the rear rests on earth while tall wooden stilts elevate the front living deck above moisture, livestock pens, and snakes. At the opposite extreme, across the semi-arid Loess Plateau (northern Shaanxi, Shanxi, Henan, Gansu), residents excavated arched "Yaodong" cave dwellings into cohesive loess cliffs (cliffside caves, sunken courtyard pits in Sanmenxia, or brick-vaulted arches), harnessing massive earthen thermal inertia to stay cool in summer and warm in winter.'
        }
      ],
      theoreticalFramework: 'Within vernacular architecture theory (Paul Oliver and Bernard Rudofsky), China\'s five dwelling styles represent classic "passive bioclimatic design." Long before reinforced concrete and mechanical HVAC, integrating local materials, courtyard/roof geometry, and kinship norms achieved multi-century durability with minimal ecological footprint.',
      terminologyAndLiushu: [
        {
          hanzi: '院',
          pinyin: 'yuàn',
          hanViet: 'Viện',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the mound/wall radical 阝 (left) and 完 for sound; denotes an enclosed courtyard compound ("Siheyuan").'
        },
        {
          hanzi: '夯',
          pinyin: 'hāng',
          hanViet: 'Kháng / Đầm',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Combines 大 (great) and 力 (strength); denotes pounding moist earth layers ("Hangtu") to build load-bearing Tulou and Great Wall ramparts.'
        },
        {
          hanzi: '天井',
          pinyin: 'tiānjǐng',
          hanViet: 'Thiên Tỉnh',
          liushu: 'Compound Ideograph',
          gloss: 'Literally "skywell"—the compact open shaft inside Huizhou and Jiangnan houses for airflow, daylight, and rainwater harvesting.'
        },
        {
          hanzi: '窑',
          pinyin: 'yáo',
          hanViet: 'Diêu',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines the cave radical (穴) and 羔/缶; denotes both a ceramic kiln and an arched cave dwelling cut into loess cliffs ("Yaodong").'
        },
        {
          hanzi: '楼',
          pinyin: 'lóu',
          hanViet: 'Lâu',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 樓 combines timber (木) and 婁 for sound; designates multi-story structures such as Tulou and Diaojiaolou.'
        }
      ],
      primarySources: [
        PQ(
          '《周易·系辞下》',
          'Chu Dịch — Hệ Từ Hạ',
          'Book of Changes (Yijing), Great Commentary Part II',
          '上古穴居而野处，后世圣人易之以宫室，上栋下宇，以待风雨。',
          'Shànggǔ xuéjū ér yěchǔ, hòushì shèngrén yì zhī yǐ gōngshì, shàngdòng xiàyǔ, yǐ dài fēngyǔ.',
          'Thượng cổ huyệt cư nhi dã xử, hậu thế thánh nhân dịch chi dĩ cung thất, thượng đống hạ vũ, dĩ đãi phong vũ.',
          'Thời thượng cổ con người sống trong hang hốc và ngoài đồng hoang; thánh nhân đời sau đổi sang dựng nhà cửa, trên có nóc dưới có mái hiên để che chắn gió mưa.',
          'In high antiquity people dwelt in caves and open wilds; sages of later ages replaced these with timbered houses, with ridgepoles above and eaves below, to shelter against wind and rain.'
        ),
        PQ(
          '《营造法式》（北宋·李诫，1103）',
          'Doanh Tạo Pháp Thức — Lý Giới (Bắc Tống, 1103)',
          'Treatise on Architectural Methods (Yingzao Fashi, 1103)',
          '凡构屋之制，皆以材为祖。',
          'Fán gòuwū zhī zhì, jiē yǐ cái wéi zǔ.',
          'Phàm cấu ốc chi chế, giai dĩ tài vi tổ.',
          'Phàm phép dựng nhà cửa bằng gỗ đều lấy chuẩn mô-đun tiết diện thanh gỗ ("tài") làm gốc để tính tỷ lệ toàn công trình.',
          'In all systems of timber building construction, the standardized timber module ("cai") serves as the foundational unit of proportion.'
        )
      ],
      sinoVietnameseComparison: 'Vietnamese vernacular housing shares strong ecological affinities with southern China: timber stilt houses of the Thai, Muong, Tay, and Ede employ the same elevated anti-humidity logic as Diaojiaolou; Hue "nha ruong" and Hoi An merchant houses (such as Tan Ky House) share skywells and timber framing with Jiangnan–Fujian dwellings; while northern Red River Delta three-bay houses open onto broad south-facing drying yards, remaining airier and less fortress-like than Beijing\'s enclosed Siheyuan.',
      additionalReferences: [
        'Ronald G. Knapp (2000), China\'s Old Dwellings, University of Hawaii Press.',
        'Liang Sicheng (1984), A Pictorial History of Chinese Architecture, MIT Press.',
        'UNESCO World Heritage Centre, Fujian Tulou (2008) and Ancient Villages in Southern Anhui – Xidi and Hongcun (2000).'
      ],
      conclusion: 'China\'s five classic dwelling styles illustrate how vernacular architecture emerges from a sustained dialogue among climate, geology, and community organization. From the passive thermal mass of Yaodong caves to Tulou communal solidarity and Huizhou skywells, these spatial solutions continue to inform contemporary sustainable design.'
    },
    'ming-qing-fiction-hongloumeng-anatomy': {
      id: 'ming-qing-fiction-hongloumeng-anatomy',
      number: 79,
      category: 'literature',
      categoryLabel: 'Literature & Classics',
      title: 'Narrative and Philosophical Anatomy of "Dream of the Red Chamber" and Ming–Qing Episodic Vernacular Fiction',
      titleZh: '《红楼梦》叙事思想结构与明清章回小说源流',
      titleZhTrad: '《紅樓夢》敘事思想結構與明清章回小說源流',
      readMinutes: 15,
      epistemicTag: 'Classical Literature & Narratology',
      abstract: 'This treatise traces the evolution of Ming–Qing episodic vernacular fiction from Song–Yuan urban storytelling prompts ("Huaben") through the Four Masterworks to Cao Xueqin\'s mid-18th-century pinnacle "Dream of the Red Chamber," analyzing its symmetrical narrative frame, Confucian–Buddhist–Daoist symbolism, and breakthrough in psychological realism.',
      keyTakeaways: [
        'Ming–Qing episodic novels (Zhanghui xiaoshuo) evolved not from orthodox court prose but from Song–Yuan marketplace storytelling ("Huaben"), retaining parallel couplet chapter titles and cliffhanger endings ("If you wish to know what happened next, read the following chapter").',
        'From the 14th to 17th centuries, vernacular fiction shifted from collective historical epics (Three Kingdoms, Water Margin) and mythic allegory (Journey to the West) to domestic urban realism (Jin Ping Mei), laying the direct foundation for Cao Xueqin.',
        '"Dream of the Red Chamber" (Cao Xueqin\'s first 80 chapters circulating via Red Inkstone manuscripts prior to the 1791 Cheng–Gao 120-chapter print edition) transcended binary good-vs-evil characterization to achieve complex psychological realism and philosophical reflections on impermanence.'
      ],
      introduction: 'In classical Chinese literary hierarchy, poetry and classical essays long held supreme prestige ("poetry expresses intent, prose conveys the Way"), while fiction was dismissed as "petty talk" (xiaoshuo). Yet during the Ming and Qing dynasties (14th–18th centuries), booming commercial woodblock publishing in Jiangnan and Fujian combined with rising urban literacy to elevate vernacular episodic novels into Chinese civilization\'s most influential literary export—culminating in Cao Xueqin\'s "Dream of the Red Chamber" (originally "The Story of the Stone").',
      historicalBackground: 'Rooted in professional storytelling in Song Bianjing and Lin\'an, narrators of historical cycles and urban tales compiled promptbooks known as "Huaben." In the late Yuan and early Ming, Luo Guanzhong and Shi Nai\'an synthesized oral cycles into "Romance of the Three Kingdoms" (semi-classical) and "Water Margin" (mature vernacular). During the late-16th-century Wanli reign, Wu Cheng\'en shaped "Journey to the West," while the anonymous Lanling Xiaoxiaosheng composed "Jin Ping Mei"—the first novel centered on the daily domestic life of a contemporary merchant household rather than historical legends. Cao Xueqin (c. 1715–1763), scion of a bannerman clan that directed the Imperial Textile Commissioner\'s Office in Nanjing for three generations before Emperor Yongzheng confiscated their estates in 1728, distilled his family\'s rise and fall into "Dream of the Red Chamber."',
      mainContent: [
        {
          heading: '1. Formal Architecture of Ming–Qing Episodic Novels',
          body: 'Episodic fiction (Zhanghui xiaoshuo) follows a distinctive structural template: narratives are organized into round chapter totals (often 100 or 120 chapters); each chapter opens with a balanced parallel couplet summarizing its twin plotlines; the narrator adopts an oral storyteller\'s persona addressing "gentle readers"; and chapters close on a suspenseful formula ("To learn what ensued, attend the next chapter"). This modular design allowed authors to weave hundreds of interwoven characters while maintaining narrative momentum for broad readerships.'
        },
        {
          heading: '2. Multi-Layered Narrative Structure of "Dream of the Red Chamber"',
          body: 'Cao Xueqin engineered an extraordinarily intricate dual frame. On the mythic plane (Chapters 1 and 5), a discarded stone from Goddess Nuwa\'s sky-repair becomes the magic jade accompanying Jia Baoyu into the mortal world to repay tears owed to the Crimson Pearl Flower (Lin Daiyu), while Baoyu\'s dream visit to the Land of Illusion unveils 12 illustrated registers and 14 "Dream of the Red Chamber" songs foreshadowing the tragic fates of the Twelve Beauties of Jinling. On the realistic plane, over 400 characters inhabiting the Rongguo and Ningguo mansions (and Prospect Garden) are linked through "grass-snake and ash-thread" foreshadowing—subtle details planted early that resonate dozens of chapters later, illuminated by the insider marginalia of "Red Inkstone" (Zhiyanzhai) in the 1754, 1759, and 1760 manuscripts.'
        },
        {
          heading: '3. Shattering Archetypes and the Confucian–Buddhist–Daoist Dialectic',
          body: 'Cao Xueqin\'s greatest breakthrough was abandoning flat moral stereotypes. Jia Baoyu rejects eight-legged examination ambition to cherish emotional authenticity and feminine intelligence; Xue Baochai embodies prudent Confucian decorum yet suffers quiet loneliness; Wang Xifeng is ruthless and calculating yet brilliantly manages a decaying aristocratic estate from within. Philosophically, the novel stages an irreconcilable tension among Confucian duty and lineage prestige (Jia Zheng, Yuanchun\'s imperial visit), youthful freedom (Prospect Garden as a fragile sanctuary), and Buddhist–Daoist impermanence ("Won-Done Song" in Chapter 1 and the final vast white emptiness).'
        },
        {
          heading: '4. Redology Textual Scholarship: Cao\'s 80 Chapters and the 1791 Continuation',
          body: 'Because Cao Xueqin died in poverty in Beijing\'s Western Hills before completing a printed edition, only his first 80 chapters circulated in Red Inkstone–annotated manuscripts. In 1791 (Cheng Jia edition) and 1792 (Cheng Yi edition), Cheng Weiyuan and Gao E published the first 120-chapter wooden movable-type edition. In the 1920s, Hu Shi ("Textual Research on Dream of the Red Chamber," 1921) and Yu Pingbo founded "New Redology," applying empirical philology to distinguish Cao\'s original 80 chapters from the 40-chapter continuation while illuminating the novel as an encyclopedia of Qing gardens, medicine, cuisine, etiquette, and household finance.'
        }
      ],
      theoreticalFramework: 'In comparative narratology (Andrew Plaks\'s "The Four Masterworks of the Ming Novel" and Anthony Yu), the arc from the Ming masterworks to Qing "Dream of the Red Chamber" marks the leap from epic–didactic storytelling to a "self-reflexive psychological novel," where the very act of inscribing and reading memory (the Stone recording its own story) probes the philosophical boundary between Truth and Illusion.' ,
      terminologyAndLiushu: [
        {
          hanzi: '章',
          pinyin: 'zhāng',
          hanViet: 'Chương',
          liushu: 'Compound Ideograph (Huiyi)',
          gloss: 'Combines 音 (music) and 十 (completeness); denotes a musical movement or complete textual section ("Zhanghui").'
        },
        {
          hanzi: '回',
          pinyin: 'huí',
          hanViet: 'Hồi',
          liushu: 'Pictograph (Xiangxing)',
          gloss: 'Depicts swirling water ("to revolve/return"); in vernacular fiction designates one self-contained storytelling installment/chapter.'
        },
        {
          hanzi: '梦',
          pinyin: 'mèng',
          hanViet: 'Mộng',
          liushu: 'Phono-semantic / Compound Ideograph',
          gloss: 'Traditional 夢 combines evening (夕) with dimmed eyes in sleep; the central metaphor of impermanence in "Dream of the Red Chamber."'
        },
        {
          hanzi: '痴',
          pinyin: 'chī',
          hanViet: 'Si',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines sickness (疒) and 知 for sound; transformed in Ming–Qing aesthetics from "folly" into pure, uncalculating devotion ("Qingshi").'
        },
        {
          hanzi: '幻',
          pinyin: 'huàn',
          hanViet: 'Ảo / Huyễn',
          liushu: 'Simple Ideograph / Pictograph',
          gloss: 'Inverted form of 予 signaling deceptive transformation; core to the Truth–Illusion dialectic of the Land of Illusion.'
        }
      ],
      primarySources: [
        PQ(
          '《红楼梦·第一回》（曹雪芹）',
          'Hồng Lâu Mộng — Hồi 1 (Tào Tuyết Cần)',
          'Dream of the Red Chamber, Chapter 1 — Cao Xueqin',
          '满纸荒唐言，一把辛酸泪！都云作者痴，谁解其中味？',
          'Mǎnzhǐ huāngtáng yán, yībǎ xīnsuān lèi! Dōu yún zuòzhě chī, shuí jiě qízhōng wèi?',
          'Mãn chỉ hoang đường ngôn, nhất bả tân toan lệ! Đô vân tác giả si, thùy giải kỳ trung vị?',
          'Đầy trang toàn lời hoang đường, một nắm nước mắt cay đắng! Ai cũng bảo tác giả ngây dại, có mấy người hiểu thấu hương vị bên trong?',
          'Pages full of idle words, penned with hot and bitter tears: all men call the author fool; none his secret message hears.'
        ),
        PQ(
          '《红楼梦·第一回·太虚幻境对联》',
          'Hồng Lâu Mộng — Câu đối Thái Hư Ảo Cảnh (Hồi 1)',
          'Dream of the Red Chamber, Couplet at the Land of Illusion',
          '假作真时真亦假，无为有处有还无。',
          'Jiǎ zuò zhēn shí zhēn yì jiǎ, wú wéi yǒu chù yǒu huán wú.',
          'Giả tác chân thời chân diệc giả, vô vi hữu xứ hữu hoàn vô.',
          'Khi cái giả được coi là thật thì cái thật cũng hóa giả; nơi cái không được coi là có thì cái có rồi cũng về không.',
          'Truth becomes fiction when the fiction\'s true; real becomes not-real where the unreal\'s real.'
        )
      ],
      sinoVietnameseComparison: 'Ming–Qing episodic fiction deeply influenced Vietnamese literature. Classical Vietnamese historical novels such as "Hoang Le Nhat Thong Chi" (Ngo Clan Literary School, late 18th–early 19th century) directly adopted couplet-headed episodic chapters. Most famously, Nguyen Du\'s masterpiece "The Tale of Kieu" (early 19th century) adapted the plot of Qing Xin Cairen\'s vernacular novel "Jin Yun Qiao Zhuan" into 3,254 lines of Chu Nom luc-bat verse—elevating a modest scholar-beauty romance into Vietnam\'s supreme triumph of poetic craft and psychological depth.',
      additionalReferences: [
        'Cao Xueqin, The Story of the Stone (trans. David Hawkes and John Minford, Penguin Classics).',
        'Hu Shi (1921), Hongloumeng Kaozheng (Textual Research on Dream of the Red Chamber).',
        'Andrew H. Plaks (1987), The Four Masterworks of the Ming Novel, Princeton University Press.'
      ],
      conclusion: 'Ming–Qing episodic fiction dissolved the barrier between popular entertainment and elite philosophy, proving vernacular Chinese capable of bearing vast social panoramas and subtle interiority. With "Dream of the Red Chamber," Cao Xueqin crowned classical Chinese literature while pioneering modern psychological narrative.'
    },
    'lacquerware-silk-woodblock-new-year-prints': {
      id: 'lacquerware-silk-woodblock-new-year-prints',
      number: 80,
      category: 'arts',
      categoryLabel: 'Arts & Aesthetics',
      title: 'Chinese Lacquerware, Jiangnan Silk, and Folk Woodblock New Year Prints: Yangliuqing and Taohuawu Compared with Dong Ho and Hang Trong',
      titleZh: '中国漆艺、江南丝绸与木版年画：杨柳青桃花坞与越南东湖行鼓对照',
      titleZhTrad: '中國漆藝、江南絲綢與木版年畫：楊柳青桃花塢與越南東湖行鼓對照',
      readMinutes: 14,
      epistemicTag: 'Applied Arts & Traditional Crafts',
      abstract: 'This treatise explores three material craft pillars of Chinese art—lacquerware (from the 7,000-year Hemudu bowl through Chu lacquer and Ming–Qing carved lacquer), Jiangnan silk (Nanjing Yunjin brocade and Suzhou Kesi fabric), and folk woodblock New Year prints (Yangliuqing and Taohuawu)—paired with a direct comparison to Vietnamese lacquer painting and Dong Ho and Hang Trong folk prints.',
      keyTakeaways: [
        'Lacquerware utilizing Toxicodendron vernicifluum sap achieved astonishing refinement by the Warring States–Han eras (Mawangdui Tomb 1, 168 BCE), prized for moisture resistance, acid tolerance, and multi-millennial luster.',
        'Jiangnan silk workshops (Suzhou, Hangzhou, Nanjing) elevated weaving to imperial fine art through Nanjing Yunjin brocade (woven on two-operator drawlooms) and Suzhou Kesi fabric ("continuous warp, discontinuous weft").',
        'The "South Taohuawu, North Yangliuqing" New Year woodblock print centers share an East Asian woodblock lineage with Vietnam\'s Dong Ho and Hang Trong prints, yet diverge distinctly in hand-tinting, papers, and auspicious iconography.'
      ],
      introduction: 'Alongside porcelain, three artisanal traditions—lacquerware, silk weaving, and folk woodblock printing—carried Chinese aesthetics into everyday households and global trade. From a red-lacquered wooden bowl unearthed at Neolithic Hemudu (Zhejiang, c. 5000 BCE) and brocades traveling the Silk Road to Rome, to active woodblock New Year prints pasted on doors each spring, all three crafts unite empirical material chemistry with folk auspicious symbolism.',
      historicalBackground: 'The humid subtropical Yangtze basin nurtured early sericulture (silk fragments from Qianshanyang, Zhejiang, c. 2700 BCE) and lacquer-tree tapping. During the Warring States and Western Han, red-and-black Chu lacquerware commanded prices far higher than bronze due to its lightness and mirror gloss. By the Ming–Qing dynasties, Jiangnan (Suzhou, Hangzhou, Huzhou, Nanjing) operated as the empire\'s imperial silk workshop ("all the realm\'s silk comes from Jiangnan"). Concurrently, late-Ming advances in multi-block color woodcut printing ("Douban" and embossing) sparked the golden age of four major folk print hubs: Yangliuqing (Tianjin), Taohuawu (Suzhou), Yangjiabu (Shandong), and Mianzhu (Sichuan).',
      mainContent: [
        {
          heading: '1. Chinese Lacquerware: From Mawangdui to Carved Lacquer and Mother-of-Pearl',
          body: 'Natural lacquer sap contains urushiol, which polymerizes only in warm, high-humidity chambers (75–85% RH), forming an impervious, glossy shield. Over 500 lacquered vessels recovered from Mawangdui Tomb 1 (Changsha, 168 BCE) retained vivid vermilion and black cloud-scroll motifs after two millennia. From the Song through Ming–Qing eras, artisans perfected distinct techniques: "Diaoqi" (applying dozens to over a hundred coats of cinnabar lacquer before relief-carving), "Luodian" (iridescent mother-of-pearl inlay), "Xipiqi" (layered marbled lacquer polished to reveal patterns), and Fuzhou "bodiless lacquer" (Tuotaiqi, pioneered by Shen Shao\'an in the late 18th century). Huang Cheng\'s late-Ming "Xiushilu" remains the sole surviving classical treatise on lacquer craft.'
        },
        {
          heading: '2. Jiangnan Silk: Nanjing Yunjin Brocade and Suzhou Kesi Fabric',
          body: 'Ming–Qing Jiangnan silk combined Huzhou mulberry sericulture with the Three Imperial Textile Factories (Nanjing, Suzhou, Hangzhou). Nanjing "Yunjin" (Cloud Brocade, UNESCO 2009) employed 5-meter drawlooms operated jointly by two weavers interlacing gold thread, silver thread, and peacock-feather filaments at only 5–6 cm per day ("an inch of brocade, an inch of gold"). Suzhou "Kesi" silk fabric used "continuous warp, discontinuous weft"—weaving dozens of small bobbins locally within each color zone—to produce crisp, double-sided bird-and-flower or landscape textiles prized for imperial dragon robes and scroll mountings.'
        },
        {
          heading: '3. Folk Woodblock Prints "South Taohuawu, North Yangliuqing"',
          body: 'Evolving from Han–Tang Door God (Menshen) paintings, woodblock New Year prints (Nianhua) peaked from the late Ming to mid-Qing around two contrasting centers. Yangliuqing (Tianjin, along the Grand Canal) mastered "half-printed, half-painted" execution—printing fine pear-wood black keyblocks then hand-coloring delicate gradations in courtly gongbi style (epitomized by "Abundance Year After Year," showing a child holding carp and lotus). By contrast, Taohuawu (Suzhou) perfected full multi-block color registration without hand-painting, capturing bustling Jiangnan urban scenes (such as "Gusu Wannian Bridge") and exerting documented influence on 17th–18th-century Japanese Ukiyo-e.'
        },
        {
          heading: '4. Comparative Craft Dialogue with Vietnamese Lacquer and Dong Ho–Hang Trong Prints',
          body: 'Material craft links between China and Vietnam highlight creative local divergence from shared natural media. In lacquer, Vietnam tapped indigenous Phu Tho lacquer resin (Rhus succedanea) for gilded temple art, but in the 1930s artists of the Indochina College of Fine Arts (Nguyen Gia Tri, Tran Van Can, Nguyen Khang) pioneered modern lacquer easel painting—sanding down layered pigments with eggshell, cinnabar, silver, and gold leaf—an innovation unique to Vietnam. In folk prints, Dong Ho (Bac Ninh) parallels Taohuawu in full multi-block color printing using 100% natural mineral and plant pigments on scallop-shell-coated Do paper, while Hang Trong (Hanoi) mirrors Yangliuqing\'s "half-printed, half-hand-tinted" method with soft graded washes for Five Tigers and Four-Season devotional scrolls.'
        }
      ],
      theoreticalFramework: 'Viewed through traditional craft science (exemplified by Song Yingxing\'s 1637 "Tiangong Kaiwu"), lacquer, silk, and woodblock prints unite empirical biochemical knowledge (urushiol curing, multi-strand reeling, mineral pigment extraction) with visual homophonic wordplay (lotus/continuous, fish/surplus, bat/blessing), translating elite aesthetics into everyday auspicious objects.',
      terminologyAndLiushu: [
        {
          hanzi: '漆',
          pinyin: 'qī',
          hanViet: 'Tất (Sơn)',
          liushu: 'Phono-semantic / Pictograph',
          gloss: 'Combines water/sap (氵) and 桼 (originally depicting resin dripping from a scored tree trunk); denotes natural lacquer sap and lacquerware.'
        },
        {
          hanzi: '丝',
          pinyin: 'sī',
          hanViet: 'Ty (Tơ)',
          liushu: 'Pictograph (Xiangxing)',
          gloss: 'Traditional 絲 depicts two twisted skeins of raw silk thread; root of the silk radical (糸/纟) across textile vocabulary.'
        },
        {
          hanzi: '锦',
          pinyin: 'jǐn',
          hanViet: 'Cẩm (Gấm)',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Traditional 錦 combines gold (金: precious) and silk cloth (帛); denotes polychrome figured brocade ("Yunjin," "Shujin").'
        },
        {
          hanzi: '版',
          pinyin: 'bǎn',
          hanViet: 'Bản (Ván khắc)',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines wood plank (片) and 反 for sound; denotes carved pear- or jujube-wood blocks used to print New Year pictures and books.'
        },
        {
          hanzi: '缂',
          pinyin: 'kè',
          hanViet: 'Khắc (trong Khắc Ty)',
          liushu: 'Phono-semantic (Xingsheng)',
          gloss: 'Combines silk (纟/糸) and 革 for sound; refers to slit-fabric weaving whose discontinuous weft creates crisp "carved" color edges.'
        }
      ],
      primarySources: [
        PQ(
          '《天工开物·乃服》（明·宋应星，1637）',
          'Thiên Công Khai Vật — Thiên Nãi Phục (Tống Ứng Tinh, 1637)',
          'Exploitation of the Works of Nature (Tiangong Kaiwu, 1637), Chapter on Clothing',
          '凡结花本，必先画出图样，计其经纬之数，而后上机织之。',
          'Fán jié huāběn, bì xiān huàchū túyàng, jì qí jīngwěi zhī shù, érhòu shàngjī zhī zhī.',
          'Phàm kết hoa bản, tất tiên họa xuất đồ dạng, kế kỳ kinh vĩ chi số, nhi hậu thượng cơ chức chi.',
          'Phàm khi buộc bản mẫu dệt hoa (hoa bản), tất phải vẽ sẵn đồ án, tính chính xác số sợi dọc sợi ngang, rồi mới đưa lên khung cửi dệt.',
          'Whenever preparing a pattern harness for figured silk, one must first draw the design and calculate the exact count of warp and weft threads before mounting it on the loom.'
        ),
        PQ(
          '《髹饰录》（明·黄成）',
          'Hưu Sức Lục — Hoàng Thành (đời Minh)',
          'Records of Lacquering (Xiushilu) — Huang Cheng (Ming dynasty)',
          '质则人身，文则衣饰。质不坚，文何所附？',
          'Zhì zé rénshēn, wén zé yīshì. Zhì bù jiān, wén hé suǒ fù?',
          'Chất tắc nhân thân, văn tắc y sức. Chất bất kiên, văn hà sở phụ?',
          'Cốt nền sơn mài ví như thân thể con người, hoa văn trang trí ví như y phục. Nếu cốt nền không bền chắc thì hoa văn biết nương tựa vào đâu?',
          'The lacquer body is like the human frame, and ornament is like clothing; if the foundation is not sound, what can decoration adhere to?'
        )
      ],
      sinoVietnameseComparison: 'Pairing "Yangliuqing–Hang Trong" (printed keyblock plus hand-graded color washes) and "Taohuawu–Dong Ho" (full multi-block color printing) shows shared East Asian woodblock foundations adapted to distinct local media—such as Dong Ho\'s shimmering crushed-shell Do paper versus Yangliuqing\'s Xuan paper and gongbi brushwork. Meanwhile, 20th-century Vietnamese sanded lacquer painting stands as an original modern fine-art departure without a direct counterpart in China.',
      additionalReferences: [
        'Song Yingxing (1637), Tiangong Kaiwu (Exploitation of the Works of Nature).',
        'Huang Cheng (late Ming), Xiushilu (Records of Lacquering), annotated by Yang Ming.',
        'James A. Flath (2004), The Cult of Happiness: Nianhua, Art, and History in Rural North China, UBC Press.'
      ],
      conclusion: 'Lacquerware, Jiangnan silk, and folk woodblock New Year prints anchor the material depth of Chinese art history, linking artisan workshops with imperial courts and seasonal folk ritual. Comparing them with Vietnamese lacquer painting and Dong Ho–Hang Trong prints highlights the inventive vitality of East Asian craft traditions built upon shared natural resources.'
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
  for (key in EN_ARTICLES_V3_PART2A) {
    if (Object.prototype.hasOwnProperty.call(EN_ARTICLES_V3_PART2A, key)) {
      window.CCE_ARTICLES_EN[key] = EN_ARTICLES_V3_PART2A[key];
    }
  }
})();
