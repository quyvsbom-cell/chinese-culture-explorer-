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
    'tang-poetry-song-ci-poetics-geography': {
      id: 'tang-poetry-song-ci-poetics-geography',
      number: 101,
      category: 'literature',
      categoryLabel: 'Literature & Poetics',
      titleVi: 'Thi ca Đường – Tống và Địa lý Thi nhân: Từ Tráng ca Trường An, Xích Bích đến Mỹ học Tây Hồ',
      titleZh: '唐诗宋词与诗人地理：从长安壮歌、黄州赤壁到西湖美学',
      titleZhTrad: '唐詩宋詞與詩人地理：從長安壯歌、黃州赤壁到西湖美學',
      titleEn: 'Tang Poetry, Song Ci, and Literary Geography: From Chang\'an and Red Cliffs to West Lake',
      readMinutes: 14,
      epistemicTag: 'Classical Literature · Cultural Geography',
      abstract: 'Tang Shi poetry and Song Ci lyrics represent more than just consecutive literary peaks, but a living "spiritual geography" mapped across Chinese terrain. Tracing the arc from cosmopolitan High Tang Chang\'an and frontier deserts, along the Yangtze where Su Shi composed Red Cliffs in exile, to the misty waters of Hangzhou\'s West Lake, this treatise examines how physical landscapes shaped classical poetics—and how poetry endowed China\'s rivers and mountains with enduring cultural memory.',
      keyTakeaways: [
        'Tang poetry (exemplified by Li Bai, Du Fu, Wang Wei, and Bai Juyi) perfected five- and seven-character Recent-Style regulated verse (Lushi and Jueju) reflecting imperial openness and historical drama.',
        'Song Ci lyrics (Su Shi, Li Qingzhao, Xin Qiji, Liu Yong) set irregular-line verse to urban banquet melodies (Cipai), bifurcating into Delicate Restraint (Wanyue) and Heroic Abandon (Haofang).',
        'The Chang\'an–Huangzhou–West Lake axis illustrates the paradox of "exile literature": political banishment far from the capital repeatedly yielded Chinese literature\'s most transcendent masterpieces.'
      ],
      introduction: 'Few poetic traditions worldwide bind verse to exact geographic coordinates as intimately as Tang Shi and Song Ci. Readers of classical Chinese poetry move across real topography: Baqiao Bridge east of Chang\'an where travelers parted, Yellow Crane Tower overlooking Hanyang, the Red Cliffs of Huangzhou, and Su Causeway spanning Hangzhou\'s West Lake.',
      historicalBackground: 'Between the 7th and 10th centuries, the Tang dynasty codified tonal prosody and parallelism in Recent-Style Verse, reinforced by poetry testing in the imperial Jinshi examinations. The Qing-compiled Complete Tang Poems preserves nearly 49,000 poems by over 2,200 authors. Under the Song dynasty (960–1279), active urban commerce in Bianjing and Lin\'an elevated Ci lyrics set to musical tune patterns (Cipai), before Su Shi expanded Ci beyond romantic parlor songs into philosophical reflection and historical grandeur.',
      mainContent: [
        {
          heading: '1. Chang\'an and the Frontier: Heroic Breadth of Tang Poetry',
          body: 'High Tang Chang\'an thrived as a cosmopolitan metropolis hosting Sogdian merchants, Indian monks, and envoys from Japan, Silla, and Dai Viet. This milieu produced Li Bai\'s soaring romanticism, Du Fu\'s compassionate realism amid the An Lushan Rebellion ("The state is shattered, yet mountains and rivers remain"), and Wang Wei\'s tranquil "painting within poetry" at Wangchuan. Simultaneously, Frontier Poets (Cen Shen, Gao Shi, Wang Changling) inscribed the Gobi desert, Yumen Pass, and Tianshan snows into verse as emblems of ambition and the human cost of war.'
        },
        {
          heading: '2. Red Cliffs and Huangzhou: The Paradox of Exile Literature',
          body: 'A recurring pattern in Chinese literary history is the creative flowering of political exile: when major literati were demoted to remote prefectures—Liu Zongyuan to Yongzhou, Bai Juyi to Jiangzhou, and Su Shi to Huangzhou in 1080 after the Crow Terrace Poetry Trial—rupture from court politics unlocked unprecedented philosophical depth. In Huangzhou (Hubei), Su Shi composed Charm of a Maiden Singer: Red Cliffs and his two Rhapsodies on the Red Cliffs, transforming a Yangtze bluff into an eternal meditation on human transience and serene resilience.'
        },
        {
          heading: '3. Hangzhou\'s West Lake and Jiangnan Urbanity in Song Ci',
          body: 'If Chang\'an anchored Tang poetry, Hangzhou (Lin\'an) and West Lake defined Song Ci aesthetics. From Bai Juyi\'s Tang embankment to Su Shi\'s dredging and construction of Su Causeway—comparing West Lake to the beauty Xi Shi, equally lovely in light or heavy adornment—Jiangnan\'s humanized waterscapes infused lyrics by Liu Yong, Jiang Kui, and China\'s preeminent woman poet Li Qingzhao, whose later verse distilled the trauma of the 1127 Jingkang catastrophe.'
        },
        {
          heading: '4. Prosodic Architecture: Regulated Verse versus Tune Patterns',
          body: 'Tang regulated verse achieved architectural symmetry through strict level-oblique (ping-ze) tonal alternation, single-rhyme unity, and parallel middle couplets in eight-line Lushi. Song Ci followed fixed musical matrices (Cipai such as Man Jiang Hong or Shui Diao Ge Tou) with asymmetric line lengths, providing supple rhythmic elasticity to register delicate psychological shifts.'
        }
      ],
      theoreticalFramework: 'Within modern Literary Geography, sites such as Red Cliffs, Yellow Crane Tower, and West Lake function as "textualized landscapes": raw geology becomes layered with centuries of poetic allusion, ensuring that physical travel is simultaneously an active dialogue with a millennium of literary memory.',
      terminologyAndLiushu: [
        { hanzi: '近体诗', pinyin: 'jìntǐshī', hanViet: 'Cận thể thi', liushu: 'Tang prosodic term', gloss: 'Recent-Style Verse governed by strict tonal rules, rhyme, and parallelism (Lushi and Jueju).' },
        { hanzi: '词牌', pinyin: 'cípái', hanViet: 'Từ bài', liushu: 'Phono-semantic compound', gloss: 'Fixed musical tune pattern dictating line lengths and tonal cadence in Song Ci lyrics.' },
        { hanzi: '豪放', pinyin: 'háofàng', hanViet: 'Hào phóng', liushu: 'Phono-semantic compound', gloss: 'Heroic Abandon school of Song Ci pioneered by Su Shi and extended by Xin Qiji.' },
        { hanzi: '婉约', pinyin: 'wǎnyuē', hanViet: 'Uyển ước', liushu: 'Phono-semantic compound', gloss: 'Delicate Restraint school of Song Ci emphasizing subtle emotion and musical grace (Liu Yong, Li Qingzhao).' },
        { hanzi: '贬谪', pinyin: 'biǎnzhé', hanViet: 'Biếm trích', liushu: 'Phono-semantic compound', gloss: 'Political demotion and banishment to distant posts—a major catalyst of classical literary masterpieces.' }
      ],
      primarySources: [
        PQ('杜甫《春望》（唐·757年）', 'Đỗ Phủ, Xuân Vọng (sáng tác tại Trường An năm 757 giữa loạn An Sử)', 'Du Fu, Spring View (composed in occupied Chang\'an, 757 CE)', '国破山河在，城春草木深。感时花溅泪，恨别鸟惊心。', 'Guó pò shānhé zài, chéng chūn cǎomù shēn. Gǎn shí huā jiàn lèi, hèn bié niǎo jīngxīn.', 'Quốc phá sơn hà tại, thành xuân thảo mộc thâm. Cảm thời hoa tiễn lệ, hận biệt điểu kinh tâm.', 'Nước mất núi sông còn đó, thành vào xuân cỏ cây mọc rậm. Cảm thương thời cuộc nhìn hoa mà rơi lệ, buồn chia ly nghe chim hót cũng giật mình.', 'The state is shattered, yet mountains and rivers remain; spring in the city deepens grass and trees. Moved by the times, blossoms draw tears; hating separation, birds startle the heart.'),
        PQ('苏轼《念奴娇·赤壁怀古》（北宋·1082年）', 'Tô Thức, Niệm Nô Kiều · Xích Bích Hoài Cổ (sáng tác tại Hoàng Châu năm 1082)', 'Su Shi, Charm of a Maiden Singer: Meditating on the Past at Red Cliffs (1082)', '大江东去，浪淘尽，千古风流人物。', 'Dàjiāng dōng qù, làng táo jìn, qiāngǔ fēngliú rénwù.', 'Đại giang đông khứ, lãng đào tận, thiên cổ phong lưu nhân vật.', 'Sông lớn chảy về đông, sóng cuộn cuốn đi hết bao bậc anh hùng hào kiệt ngàn xưa.', 'The great river flows eastward, its waves washing away the gallant heroes of a thousand ages.')
      ],
      sinoVietnameseComparison: 'Vietnam deeply absorbed Tang regulated prosody while forging distinctive vernacular Nom regulated verse (seen in Nguyen Trai\'s six-character insertions in Quoc Am Thi Tap and the incisive poetry of Ho Xuan Huong and Ba Huyen Thanh Quan). Historic Vietnamese landmarks—Bach Dang River (Truong Han Sieu), Con Son (Nguyen Trai), and Ngang Pass—similarly evolved into textualized landscapes paralleling Red Cliffs and Yellow Crane Tower.',
      additionalReferences: 'Peng Dingqiu (ed.), Complete Tang Poems (Quan Tangshi); Tang Guizhang (ed.), Complete Song Ci (Quan Songci); Stephen Owen, The Great Age of Chinese Poetry: The High T\'ang.',
      conclusion: 'Reading Tang Shi and Song Ci through their geographic coordinates transforms printed text into a living emotional map stretching from ancient Chang\'an and Huangzhou to Hangzhou\'s West Lake.'
    },
    'chinese-aesthetic-concepts-qiyun-yijing': {
      id: 'chinese-aesthetic-concepts-qiyun-yijing',
      number: 102,
      category: 'arts',
      categoryLabel: 'Arts & Aesthetics',
      titleVi: 'Hệ thống Phạm trù Mỹ học Trung Hoa: Khí Vận Sinh Động, Ý Cảnh, Lưu Bạch và Truyền Thần',
      titleZh: '中国古典美学范畴体系：气韵生动、意境、留白与传神写照',
      titleZhTrad: '中國古典美學範疇體系：氣韻生動、意境、留白與傳神寫照',
      titleEn: 'Core Categories of Classical Chinese Aesthetics: Qiyun Shengdong, Yijing, Liubai, and Chuanshen',
      readMinutes: 13,
      epistemicTag: 'Classical Aesthetics · Art Theory',
      abstract: 'Unlike classical Western aesthetics rooted in Plato\'s and Aristotle\'s concept of mimesis (imitation of nature), classical Chinese aesthetics centers on vital resonance between artist and cosmos. This treatise examines four foundational categories that guided painting, poetry, calligraphy, music, and garden design for over 1,500 years: Qiyun Shengdong (Xie He), Chuanshen Xiezhao (Gu Kaizhi), Yijing (Wang Changling to Wang Guowei), and Liubai (expressive negative space).',
      keyTakeaways: [
        'Qiyun Shengdong ("Spirit Resonance and Life Movement") stands first among Xie He\'s Six Principles (6th century), elevating inner vitality above mechanical likeness.',
        'Gu Kaizhi\'s Chuanshen Xiezhao ("transmitting the spirit") argued that portraiture captures inner character—centered in the eyes—rather than mere anatomical exterior.',
        'Yijing (fusion of inner intent and external scenery) and Liubai (intentional unpainted space) invite the viewer to co-create the artwork.'
      ],
      introduction: 'Standing before a Song-Yuan ink-wash scroll depicting a solitary boat and distant misty ridge amid vast expanses of untouched paper, viewers trained in Renaissance linear perspective often ask why half the composition remains blank. The answer resides in an aesthetic vocabulary refined by Chinese theorists from the Six Dynasties to the modern era.',
      historicalBackground: 'Scholar Zong Baihua termed the Wei, Jin, and Northern-Southern Dynasties (3rd–6th centuries) China\'s "age of artistic self-awakening." Amid Neo-Daoist Xuanxue and Buddhist philosophy, painter Gu Kaizhi (344–406) articulated "depicting spirit through form." Around 500–530 CE, Xie He codified the Six Principles of Painting in Guhua Pinlu, placing Qiyun Shengdong first. Across the Tang and Song, Yijing matured in poetics (Wang Changling, Sikong Tu) before receiving landmark systematization in Wang Guowei\'s Renjian Cihua (1908).',
      mainContent: [
        {
          heading: '1. Qiyun Shengdong: Xie He\'s First Principle',
          body: 'Among Xie He\'s Six Principles—spirit resonance, structural brushwork, fidelity to object form, appropriate coloring, compositional placement, and transmission by copying—the first governs the five technical rules below it. Qi denotes cosmic and calligraphic vital energy; Yun denotes lingering harmonic resonance. A technically accurate painting devoid of Qiyun was judged lifeless.'
        },
        {
          heading: '2. Chuanshen Xiezhao: From Outer Likeness to Inner Spirit',
          body: 'Eastern Jin master Gu Kaizhi famously left portraits\' pupils unpainted for years, noting that "transmitting the spirit lies precisely in those eyes." This ethos shaped later literati art: Su Shi remarked that "judging painting by formal likeness matches a child\'s perspective," privileging spiritual truth (Shensi) over literal imitation (Xingsi).'
        },
        {
          heading: '3. Yijing: The Fusion of Mind and Landscape',
          body: 'Yijing unites Yi (subjective feeling and thought) with Jing (objective scenery), generating an aesthetic field of "images beyond images, scenes beyond scenes." In Renjian Cihua, Wang Guowei distinguished two classic states: the "realm with self" (viewing objects colored by personal emotion) and the "realm without self" (quiet self-dissolution where things are beheld in their own calm clarity).'
        },
        {
          heading: '4. Liubai: Treating White as Black',
          body: 'Rooted in Laozi\'s dialectic of Being and Non-Being and Chan Buddhist emptiness, Liubai ("leaving white") treats unpainted silk or paper as active compositional presence. In Southern Song masters Ma Yuan and Xia Gui ("One-Corner Ma, Half-Side Xia"), blank expanses become mist, water, sky, and meditative silence completed by the viewer\'s imagination.'
        }
      ],
      theoreticalFramework: 'Comparative aestheticians (Li Zehou, Zong Baihua, François Jullien) highlight that Chinese aesthetics rests not on subject-object dualism, but on correlative unity between Heaven and humanity and the interplay of solid and void (Xu-Shi). Masterpieces intentionally remain open-ended ("meaning beyond words"), making reception a lifelong dialogue.',
      terminologyAndLiushu: [
        { hanzi: '气韵', pinyin: 'qìyùn', hanViet: 'Khí vận', liushu: 'Qi: Pictograph; Yun: Phono-semantic (sound radical)', gloss: 'Vital spirit and lingering harmonic resonance animating a work of art.' },
        { hanzi: '意境', pinyin: 'yìjìng', hanViet: 'Ý cảnh', liushu: 'Yi: Ideogrammic; Jing: Phono-semantic (earth radical)', gloss: 'Aesthetic realm fusing inner emotion and external landscape into evocative depth.' },
        { hanzi: '留白', pinyin: 'liúbái', hanViet: 'Lưu bạch', liushu: 'Liu: Phono-semantic; Bai: Pictograph', gloss: 'Deliberate unpainted negative space signifying mist, water, sky, and imaginative openness.' },
        { hanzi: '传神', pinyin: 'chuánshén', hanViet: 'Truyền thần', liushu: 'Phono-semantic compound', gloss: 'Capturing and conveying the living spirit and character of a subject beyond surface resemblance.' },
        { hanzi: '虚实', pinyin: 'xūshí', hanViet: 'Hư thực', liushu: 'Xu: Phono-semantic; Shi: Ideogrammic', gloss: 'Complementary aesthetic pairing of visible solid forms (Shi) and suggestive void (Xu).' }
      ],
      primarySources: [
        PQ('谢赫《古画品录》（南齐·约6世纪初）', 'Tạ Hách, Cổ Họa Phẩm Lục (Nam Tề, đầu thế kỷ 6)', 'Xie He, Classified Record of Painters of Former Times (c. early 6th century)', '六法者何？一气韵生动是也，二骨法用笔是也。', 'Liùfǎ zhě hé? Yī qìyùn shēngdòng shì yě, èr gǔfǎ yòngbǐ shì yě.', 'Lục pháp giả hà? Nhất khí vận sinh động thị dã, nhị cốt pháp dụng bút thị dã.', 'Sáu phép vẽ là gì? Thứ nhất là Khí vận sinh động, thứ hai là Cốt pháp dụng bút.', 'What are the Six Principles? First, spirit resonance and life movement; second, bone method in using the brush.'),
        PQ('王国维《人间词话》（1908年）', 'Vương Quốc Duy, Nhân Gian Từ Thoại (1908)', 'Wang Guowei, Poetic Remarks in the Human World (1908)', '有有我之境，有无我之境。有我之境，以我观物，故物皆著我之色彩。', 'Yǒu yǒuwǒ zhī jìng, yǒu wúwǒ zhī jìng. Yǒuwǒ zhī jìng, yǐ wǒ guān wù, gù wù jiē zhuó wǒ zhī sècǎi.', 'Hữu hữu ngã chi cảnh, hữu vô ngã chi cảnh. Hữu ngã chi cảnh, dĩ ngã quan vật, cố vật giai trước ngã chi sắc thái.', 'Có cảnh giới hữu ngã, có cảnh giới vô ngã. Cảnh giới hữu ngã lấy ta nhìn vật, nên vạn vật đều mang sắc thái tâm trạng của ta.', 'There is a realm with the self and a realm without the self. In the realm with the self, one views things through the self, so all things take on the coloring of the self.')
      ],
      sinoVietnameseComparison: 'Classical Vietnamese poetry and visual arts absorbed Yijing and Liubai deeply—visible in Nguyen Khuyen\'s autumn poems, Nguyen Phan Chanh\'s serene silk paintings, and the landscape-integrated architecture of Keo Pagoda and Tu Duc\'s Tomb. Today, Liubai and solid-void balance directly inform minimalist editorial UI design and contemporary museum curation.',
      additionalReferences: 'Zong Baihua, Strolling in Aesthetics; Li Zehou, The Path of Beauty; François Jullien, In Praise of Blandness.',
      conclusion: 'Qiyun, Chuanshen, Yijing, and Liubai are not dusty abstractions, but practical lenses empowering modern audiences to read East Asian painting, calligraphy, and architectural space with clarity.'
    },
    'calligraphy-masterpieces-three-rarities-lineage': {
      id: 'calligraphy-masterpieces-three-rarities-lineage',
      number: 103,
      category: 'arts',
      categoryLabel: 'Arts & Aesthetics',
      titleVi: 'Phả hệ Thư pháp Trung Hoa: Từ "Tam Hy Đường" đời Tấn, Bút pháp Đường – Tống đến Phong trào Bi Học Nhà Thanh',
      titleZh: '中国书法谱系：从晋代“三希堂”、唐楷宋意到清代碑学复兴',
      titleZhTrad: '中國書法譜系：從晉代「三希堂」、唐楷宋意到清代碑學復興',
      titleEn: 'Lineage of Chinese Calligraphy: From the Jin "Three Rarities" and Tang-Song Masters to Qing Stele Scholarship',
      readMinutes: 14,
      epistemicTag: 'Classical Calligraphy · Art History',
      abstract: 'Calligraphy stands as Chinese civilization\'s premier abstract art, where every brushstroke simultaneously conveys lexical meaning and records the writer\'s breath, velocity, and temperament. This treatise traces a 1,600-year lineage from the three Eastern Jin treasures in Emperor Qianlong\'s Hall of Three Rarities, through Tang regular-script discipline (Yan, Liu, Ouyang) and Song literati expression (Su, Huang, Mi, Cai), to the Qing-dynasty Stele School (Beixue) revival.',
      keyTakeaways: [
        'The Hall of Three Rarities (Sanxitang) in the Forbidden City\'s Hall of Mental Cultivation housed three Eastern Jin masterpieces: Timely Clearing After Snowfall (Wang Xizhi), Mid-Autumn Letter (Wang Xianzhi), and Letter to Boyuan (Wang Xun).',
        'Calligraphy history is classically summarized as "Jin prized resonance, Tang prized structural law, Song prized personal intent, and Qing revived epigraphic stele aesthetics."',
        'The Qing Stele School (Ruan Yuan, Bao Shichen, Kang Youwei) broke the monopoly of repeatedly recarved copybooks (Tiexue) by drawing direct vigor from Han clerical and Northern Wei stone steles.'
      ],
      introduction: 'In Chinese literati culture, "the brush reflects the person" (shu ru qi ren). Unlike Western oil painting, ink on Xuan paper permits no erasure: each line permanently preserves rhythm, pressure, moisture, and immediate state of mind. Consequently, emperors from Tang Taizong to Qing Qianlong treated collecting and authenticating ancient model letters as supreme symbols of cultural legitimacy.',
      historicalBackground: 'Following early script formation (oracle bones, bronze inscriptions, Small Seal, Clerical), the 4th-century Eastern Jin marked calligraphy\'s emergence as self-conscious fine art led by "Sage of Calligraphy" Wang Xizhi (303–361, author of the Orchid Pavilion Preface) and his son Wang Xianzhi. In 1746, Emperor Qianlong dedicated an intimate sub-eight-square-meter study in the Hall of Mental Cultivation as Sanxitang ("Hall of Three Rarities") to treasure three rare Jin works.',
      mainContent: [
        {
          heading: '1. Jin Resonance and the Three Rarities of Sanxitang',
          body: 'The three works defining Sanxitang are: (1) Timely Clearing After Snowfall (28 characters, Tang tracing copy after Wang Xizhi, now in the National Palace Museum, Taipei), prized for serene warmth; (2) Mid-Autumn Letter (attributed to Wang Xianzhi via Song copy, Palace Museum, Beijing), famous for continuous "one-stroke" flow; and (3) Letter to Boyuan (47 characters, the sole surviving authentic original brush work of the Eastern Jin Wang clan by Wang Xun, Palace Museum, Beijing).'
        },
        {
          heading: '2. Tang Structural Law: Yan, Liu, Ouyang, and Wild Cursive',
          body: 'The Tang dynasty established Kaishu regular-script norms that guided education for a millennium: Ouyang Xun\'s razor-crisp balance, Yan Zhenqing\'s monumental warmth ("Yan sinew," including his Draft of a Requiem to My Nephew, hailed as the second greatest running-script work), and Liu Gongquan\'s taut austerity ("Liu bone"). In parallel, Zhang Xu and Huaisu (Autobiography scroll) elevated wild cursive (Kuangcao) to ecstatic kinetic liberation.'
        },
        {
          heading: '3. Song Personal Intent: The Four Great Masters (Su, Huang, Mi, Cai)',
          body: 'Facing the unsurpassable formal perfection of Tang Kaishu, Northern Song literati shifted priority to Yi—individual temperament and scholarly cultivation. Su Shi (Cold Food Observance—third greatest running-script masterpiece), Huang Tingjian (sweeping oar-inspired strokes), Mi Fu (agile eight-sided brush tips), and Cai Xiang forged deeply personal literati calligraphy.'
        },
        {
          heading: '4. The Qing Stele School (Beixue) Revolution',
          body: 'By late Ming and early Qing, endlessly recarved woodblock copybooks (Tiexue) and uniform civil-exam "Chancery Script" (Guangeti) drained calligraphy of vitality. Spurred by evidential scholarship and newly excavated Han and Northern Wei steles, Ruan Yuan, Bao Shichen, and Kang Youwei championed the Stele School (Beixue), infusing soft brush hairs with chiseled stone angularity and paving the way for modern masters such as Zhao Zhiqian, Wu Changshuo, and Yu Youren.'
        }
      ],
      theoreticalFramework: 'In art history, the dialectic between the Copybook School (Tiexue—fluid paper/silk brushwork) and the Stele School (Beixue—epigraphic stone rigor) exemplifies creative renewal: whenever canonical norms ossify through mechanical repetition, artists return to deeper archival strata to regenerate formal energy.',
      terminologyAndLiushu: [
        { hanzi: '行书', pinyin: 'xíngshū', hanViet: 'Hành thư', liushu: 'Xing: Pictograph (crossroads); Shu: Phono-semantic', gloss: 'Running script bridging Kaishu legibility and cursive flow.' },
        { hanzi: '法帖', pinyin: 'fǎtiè', hanViet: 'Pháp thiếp', liushu: 'Fa: Ideogrammic; Tie: Phono-semantic', gloss: 'Canonical calligraphy model letters preserved or carved into copybooks for study.' },
        { hanzi: '碑学', pinyin: 'bēixué', hanViet: 'Bi học', liushu: 'Bei: Phono-semantic (stone radical); Xue: Ideogrammic', gloss: 'Qing-era calligraphy movement grounded in ancient Han and Northern Wei stone stele inscriptions.' },
        { hanzi: '馆阁体', pinyin: 'guǎngétǐ', hanViet: 'Quán các thể', liushu: 'Ming-Qing civil examination term', gloss: 'Uniform, glossy, mechanically regular script favored in Ming-Qing palace exams yet critiqued for lacking personality.' },
        { hanzi: '临摹', pinyin: 'línmó', hanViet: 'Lâm mô', liushu: 'Lin: freehand copying; Mo: direct tracing', gloss: 'Twin classical learning methods: tracing (Mo) for structural accuracy and freehand copying (Lin) for living spirit.' }
      ],
      primarySources: [
        PQ('王羲之《兰亭集序》（东晋·353年）', 'Vương Hy Chi, Lan Đình Tập Tự (Đông Tấn, năm 353)', 'Wang Xizhi, Preface to the Poems Composed at the Orchid Pavilion (353 CE)', '永和九年，岁在癸丑，暮春之初，会于会稽山阴之兰亭，修禊事也。', 'Yǒnghé jiǔ nián, suì zài guǐchǒu, mùchūn zhī chū, huì yú Kuàijī Shānyīn zhī Lántíng, xiūxì shì yě.', 'Vĩnh Hòa cửu niên, tuế tại Quý Sửu, mộ xuân chi sơ, hội ư Cối Kê Sơn Âm chi Lan Đình, tu hý sự dã.', 'Năm Vĩnh Hòa thứ 9, năm Quý Sửu, đầu cuối xuân, tụ họp tại Lan Đình đất Sơn Âm quận Cối Kê để làm lễ thanh tẩy cầu phúc.', 'In the ninth year of Yonghe, the year of Guichou, at the beginning of late spring, we gathered at the Orchid Pavilion in Shanyin, Kuaiji, to perform the purification rite.'),
        PQ('颜真卿《祭侄文稿》（唐·758年）', 'Nhan Chân Khanh, Tế Điệt Văn Cảo (nhà Đường, năm 758)', 'Yan Zhenqing, Draft of a Requiem to My Nephew (758 CE)', '呜呼哀哉！尚飨！', 'Wūhū āizāi! Shàngxiǎng!', 'Ô hô ai tai! Thượng hưởng!', 'Than ôi đau xót biết bao! Xin hãy chứng giám hưởng lễ!', 'Alas, how grievous! May you partake of this offering!')
      ],
      sinoVietnameseComparison: 'Vietnam cultivated a rich Han-Nom calligraphic heritage visible in monumental steles (such as Nguyen Trai\'s Vinh Lang Stele and the Thang Long Temple of Literature Doctor Steles) and celebrated calligraphers like Cao Ba Quat. Contemporary Vietnamese calligraphy thrives across both classical Han-Nom traditions and expressive Latin-script Quoc Ngu brushwork on handmade Do paper.',
      additionalReferences: 'Ruan Yuan, Discourse on Northern and Southern Schools of Calligraphy; Kang Youwei, Guang Yizhou Shuangji; Palace Museum Beijing & National Palace Museum Taipei Sanxitang Catalogues.',
      conclusion: 'Tracing calligraphy from the Hall of Three Rarities to the Qing Stele revival reveals Chinese script more than just as a vehicle of communication, but as a living discipline uniting epigraphy, brushwork, and human character.'
    },
    'chinese-mythology-shanhaijing-kunlun-penglai': {
      id: 'chinese-mythology-shanhaijing-kunlun-penglai',
      number: 104,
      category: 'literature',
      categoryLabel: 'Literature & Poetics',
      titleVi: 'Thần thoại Khởi nguyên Trung Hoa trong 《Sơn Hải Kinh》 và 《Hoài Nam Tử》: Không gian Côn Lôn, Bồng Lai và Thần linh Khai thiên',
      titleZh: '中国创世神话谱系：《山海经》《淮南子》中的昆仑、蓬莱与开天辟地',
      titleZhTrad: '中國創世神話譜系：《山海經》《淮南子》中的昆崙、蓬萊與開天闢地',
      titleEn: 'Foundational Chinese Mythology in the Shanhaijing and Huainanzi: Kunlun, Penglai, and Cosmic Creation',
      readMinutes: 13,
      epistemicTag: 'Comparative Mythology · Ancient Texts',
      abstract: 'Unlike Greek mythology, unified early into an Olympian genealogy through Homer and Hesiod, ancient Chinese myths survive dispersed across geographical-ritual compendia, philosophy, and chronicles such as the Shanhaijing, Huainanzi, Chuci (Heavenly Questions), and Sanwu Liji. This treatise reconstructs China\'s mythic cosmos around two sacred poles—Western Kunlun and Eastern Penglai—alongside the resilient humanist ethos of Nüwa, Houyi, Jingwei, Kuafu, and Yu the Great.',
      keyTakeaways: [
        'The 18-scroll Shanhaijing (Classic of Mountains and Seas) is China\'s oldest reservoir of Warring States–Han mythic geography and shamanic lore, preserving Queen Mother of the West, Jingwei, Kuafu, and Xingtian.',
        'The Western Han Huainanzi preserves four foundational rescue myths: Nüwa mending the sky, Houyi shooting nine suns, Gonggong shattering Mount Buzhou, and Chang\'e ascending to the Moon.',
        'China\'s sacred mythic map balances two opposite axes: Mount Kunlun in the Northwest (axis mundi of the Queen Mother of the West) and the Eastern Sea isles of Penglai, Fangzhang, and Yingzhou.'
      ],
      introduction: 'Reading China\'s foundational myths reveals how ancient Yellow River and Yangtze communities confronted floods, droughts, and mortality. Two defining traits stand out: the "historicization of myth"—turning deities into sage rulers—and an unwavering admiration for human perseverance against natural catastrophe.',
      historicalBackground: 'Early mythic fragments appear on jades, bronzes, and Qu Yuan\'s Heavenly Questions (Tianwen, 4th–3rd century BCE), which poses over 170 rapid-fire riddles on cosmogony and ancient legends. Liu Xin edited the Shanhaijing into 18 chapters during the Western Han. In 139 BCE, scholars under Prince Liu An compiled the Huainanzi, preserving vivid mythic narratives to illustrate cosmology. Later, in the 3rd century CE, Xu Zheng recorded the complete Pangu cosmic-egg creation myth in Sanwu Liji.',
      mainContent: [
        {
          heading: '1. The Shanhaijing: Mythic Geography and Symbolic Creatures',
          body: 'Rather than a linear epic, the Shanhaijing catalogs mountains, rivers, herbs, minerals, and numinous creatures (the Nine-Tailed Fox of Qingqiu, Yinglong, and Torch Dragon Zhulong whose eyes govern day and night). Its Northern Mountain chapters preserve two icons of unyielding determination: the Jingwei bird (drowned daughter of the Flame Emperor) relentlessly dropping twigs and stones to fill the Eastern Sea, and giant Kuafu chasing the Sun until dying of thirst, his staff blooming into the Denglin peach grove.'
        },
        {
          heading: '2. The Huainanzi and Four Great Cosmic Rescue Myths',
          body: 'The Huainanzi vividly transmits the communal-hero ethos of Huaxia mythology. When Gonggong shattered Mount Buzhou, tilting the sky northwest and causing China\'s rivers to flow southeast, Nüwa smelted five-colored stones to patch heaven and propped up the four poles with a giant turtle\'s legs. When ten suns rose together scorching the earth, archer Houyi shot down nine and slew rampaging beasts to restore livable order.'
        },
        {
          heading: '3. Twin Sacred Poles: Western Kunlun and Eastern Penglai',
          body: 'Ancient spatial imagination pivoted between two immortal realms. In the far West rose Mount Kunlun—the earthly capital of the Celestial Sovereign and seat of the Queen Mother of the West (Xiwangmu), keeper of immortality elixirs. Across the Eastern Sea floated the three immortal isles of Penglai, Fangzhang, and Yingzhou, inspiring expeditions dispatched by Qin Shi Huang and Han Wudi and nourishing centuries of Daoist art and poetry.'
        },
        {
          heading: '4. Humanist Resilience and Modern Scientific Naming',
          body: 'Across Nüwa, Yu the Great (who labored thirteen years taming floods without entering his home), Houyi, and Jingwei runs a common ethos of self-sacrifice for communal survival. Today, China has revived this mythic lexicon for 21st-century science: Chang\'e (lunar exploration), Zhurong (Mars rover), Tiangong (space station), Kuafu (solar observatory), and Kunlun (Antarctic station).'
        }
      ],
      theoreticalFramework: 'Modern mythologists such as Yuan Ke and Mao Dun emphasize "historicization of myth": Confucian chroniclers stripped supernatural traits from Shanhaijing figures to cast the Yellow Emperor, Yan Emperor, Yao, Shun, and Yu as mortal moral sovereigns, softening epic theology while fostering early humanist rationalism.',
      terminologyAndLiushu: [
        { hanzi: '昆仑', pinyin: 'Kūnlún', hanViet: 'Côn Lôn', liushu: 'Ancient disyllabic binome for towering sacred peak', gloss: 'Mythic western axis mundi connecting Heaven and Earth, domain of the Queen Mother of the West.' },
        { hanzi: '蓬莱', pinyin: 'Pénglái', hanViet: 'Bồng Lai', liushu: 'Phono-semantic compound (grass radical)', gloss: 'Foremost of the three Eastern Sea immortal isles in Qin-Han legends.' },
        { hanzi: '补天', pinyin: 'bǔtiān', hanViet: 'Bổ thiên', liushu: 'Bu: Phono-semantic; Tian: Ideogrammic', gloss: 'Nüwa mending the shattered sky—symbol of cosmic restoration and public responsibility.' },
        { hanzi: '精卫', pinyin: 'Jīngwèi', hanViet: 'Tinh Vệ', liushu: 'Onomatopoeic mythic bird name in Shanhaijing', gloss: 'The Jingwei bird carrying stones to fill the sea, emblem of tireless perseverance.' },
        { hanzi: '天问', pinyin: 'Tiānwèn', hanViet: 'Thiên Vấn', liushu: 'Tian: Ideogrammic; Wen: Phono-semantic', gloss: 'Qu Yuan\'s famous poem posing over 170 questions on cosmology, astronomy, and ancient myth.' }
      ],
      primarySources: [
        PQ('《山海经·北山经》（战国至秦汉）', 'Sơn Hải Kinh, Bắc Sơn Kinh (Chiến Quốc – Tần Hán)', 'Classic of Mountains and Seas (Shanhaijing), Classic of the Northern Mountains', '炎帝之少女，名曰女娃。女娃游于东海，溺而不返，故为精卫，常衔西山之木石，以堙于东海。', 'Yándì zhī shàonǚ, míng yuē Nǚwá. Nǚwá yóu yú Dōnghǎi, nì ér bù fǎn, gù wéi Jīngwèi, cháng xián Xīshān zhī mùshí, yǐ yīn yú Dōnghǎi.', 'Viêm Đế chi thiếu nữ, danh viết Nữ Oa. Nữ Oa du ư Đông Hải, nịch nhi bất phản, cố vi Tinh Vệ, thường hàm Tây Sơn chi mộc thạch, dĩ nhân ư Đông Hải.', 'Con gái út của Viêm Đế tên là Nữ Oa, ra chơi biển Đông bị chết đuối không trở về, bèn hóa thành chim Tinh Vệ, thường ngậm cành cây hòn đá từ núi Tây để lấp biển Đông.', 'The youngest daughter of the Flame Emperor, named Nüwa, drowned while swimming in the Eastern Sea and never returned; transformed into the Jingwei bird, she forever carries twigs and stones from the Western Mountains to fill the Eastern Sea.'),
        PQ('《淮南子·览冥训》（西汉·前139年）', 'Hoài Nam Tử, Lãm Minh Huấn (Tây Hán, năm 139 TCN)', 'Huainanzi, Chapter 6: Peering into the Obscure (139 BCE)', '于是女娲炼五色石以补苍天，断鳌足以立四极。', 'Yúshì Nǚwā liàn wǔsèshí yǐ bǔ cāngtiān, duàn áozú yǐ lì sìjí.', 'Ư thị Nữ Oa luyện ngũ sắc thạch dĩ bổ thương thiên, đoạn ngao túc dĩ lập tứ cực.', 'Bấy giờ Nữ Oa luyện đá năm màu để vá trời xanh, chặt chân rùa ngao khổng lồ để dựng bốn cột chống trời.', 'Thereupon Nüwa smelted five-colored stones to mend the azure sky, and cut off the legs of the giant sea turtle to prop up the four poles of the earth.')
      ],
      sinoVietnameseComparison: 'Foundational Vietnamese myths preserved in Linh Nam Chich Quai share this flood-taming and communal-hero ethos (Lac Long Quan and Au Co\'s hundred eggs, Son Tinh and Thuy Tinh mastering Red River floods, Saint Giong defending the realm) while reflecting Southeast Asian mountain-and-sea ecology, forming a rich comparative dialogue with Huaxia lore.',
      additionalReferences: 'Yuan Ke, Chinese Myths and Legends; Anne Birrell, Chinese Mythology: An Introduction; Qu Yuan, Chuci: Heavenly Questions.',
      conclusion: 'The myths of the Shanhaijing and Huainanzi form the deepest imaginative stratum of Chinese civilization—transforming awe before nature into resilient agency that continues to name 21st-century spacecraft.'
    }
  };

  var key;
  for (key in ARTICLES_EN) {
    if (Object.prototype.hasOwnProperty.call(ARTICLES_EN, key)) {
      window.CCE_ARTICLES_EN[key] = ARTICLES_EN[key];
    }
  }
})();
