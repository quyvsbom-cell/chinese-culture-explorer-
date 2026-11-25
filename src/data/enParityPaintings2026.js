// ============================================================================
// PROMPT A — MODULE 3: EN PARITY FOR NATIONAL PAINTINGS ATLAS
// Covers 7 Eras, 9 Genres, 5 Curatorial Comparisons, 10 Museums, 5 Attribution Rules,
// and ALL 54/54 Masterpieces (Artist, Dynasty, Material, Museum, Attribution,
// FeaturedQuote, 9 Analysis Dimensions, 4 Scholarly Research Dimensions, 162 Hotspots).
// ============================================================================
(function () {
  "use strict";

  const ERAS_EN = {
    "weijin": { nameEn: "Wei–Jin & Northern–Southern Dynasties", overviewEn: "Birthplace of classical art theory: Gu Kaizhi's 'Conveying Spirit Through Form' and Xie He's Six Principles." },
    "suitang": { nameEn: "Sui & Tang Dynasties", overviewEn: "Golden age of court figure painting and birth of autonomous landscape painting (*Strolling About in Spring*), 'Wu's sashes billowing in the wind', and opulent Tang court ladies." },
    "song": { nameEn: "Five Dynasties & Song Dynasty", overviewEn: "Absolute zenith of Chinese painting: monumental Northern mountains, misty Southern rivers, civic urban scrolls, Academy bird-and-flower realism, and early literati ink play." },
    "yuan": { nameEn: "Yuan Dynasty", overviewEn: "Triumph of reclusive scholar painting: Zhao Mengfu's 'Spirit of Antiquity' and the Four Yuan Masters fusing poetry, calligraphy, and personal interiority." },
    "ming": { nameEn: "Ming Dynasty", overviewEn: "Rise of Suzhou's Wu School (Four Ming Masters), courtly Zhe School, and Dong Qichang's landmark North–South Lineage Theory." },
    "qing": { nameEn: "Qing Dynasty", overviewEn: "Productive polarity between orthodox court Four Wangs and daring Individualist Monks (Shitao, Bada Shanren) plus the Yangzhou Eight Eccentrics." },
    "modern": { nameEn: "Modern & Contemporary", overviewEn: "Synthesizing traditional brushwork with global modernity: Qi Baishi, Xu Beihong, Zhang Daqian, Fu Baoshi, Huang Binhong, and Li Keran." }
  };

  const GENRES_EN = {
    "landscape": { descEn: "Evokes cosmic vitality across mountains, streams, pines, and mists through the Three Distances (High, Deep, Level)." },
    "flower-bird": { descEn: "Botanical, avian, and aquatic studies expressing natural Way harmony and Confucian gentlemanly virtue." },
    "figure": { descEn: "Portrays emperors, court ladies, Chan patriarchs, and hermits by prioritizing inner spirit above superficial likeness." },
    "fine-brush": { descEn: "Meticulous ink outlines filled with mineral pigment washes layered evenly across silk or sized paper." },
    "freehand": { descEn: "Spontaneous, abbreviated brushwork distilling living essence through expressive calligraphic strokes." },
    "ink-wash": { descEn: "Commands monochrome 'Five Colors of Ink' (scorched, dark, heavy, light, clear) across absorbent Xuan paper and blank voids." },
    "architectural": { descEn: "Employs ruled straightedge brush guides ('Jiehua') to render palaces, ships, and arched bridges with geometric precision." },
    "court": { descEn: "Imperial Painting Academy commissions celebrating dynastic harmony, dignity, and virtuoso craft." },
    "literati": { descEn: "Scholar-official art uniting Poetry, Calligraphy, Painting, and Seal Carving ('Four Perfections') into personal self-expression." }
  };

  const COMPARISONS_EN = {
    "cmp-north-south-song": {
      titleEn: "Northern Monumental Majesty vs. Southern Misty Calm",
      perspectiveEn: "Contrasts early Song landscape polarity: Fan Kuan's towering Shaanxi sandstone cliffs ('raindrop strokes', monumental screen) vs. Dong Yuan's soft alluvial Jiangnan hills shrouded in Xiao–Xiang vapor ('hemp-fiber strokes', level distance)."
    },
    "cmp-court-literati": {
      titleEn: "Courtly Blue-Green Mineral vs. Literati Monochrome Ink",
      perspectiveEn: "Summit of polar styles: eighteen-year-old Wang Ximeng's radiant azurite-malachite imperial court panorama vs. octogenarian Quanzhen Daoist hermit Huang Gongwang's meditative dry-ink *Fuchun Mountains*."
    },
    "cmp-spring-landscapes": {
      titleEn: "Early Spring Three-Distance Panorama vs. Ma Yuan's 'One-Corner' Reduction",
      perspectiveEn: "Documents the Song paradigm shift: Guo Xi unleashes rolling 'cloud-scroll' mountains spanning all Three Distances, whereas Southern Song master Ma Yuan anchors weight in one poetic corner facing luminous voids."
    },
    "cmp-figure-psychology": {
      titleEn: "Tang Court Poise vs. Southern Tang Psychological Drama",
      perspectiveEn: "Follows interior characterization: Zhou Fang captures quiet melancholy beneath opulent Tang court robes, while Gu Hongzhong uses five cinematic screen-divided acts to dissect minister Han Xizai's political anguish."
    },
    "cmp-orthodox-innovative": {
      titleEn: "Orthodox Lineage Rules vs. Shitao's 'One-Stroke' Revolution",
      perspectiveEn: "Stages the classic Qing debate: Four-Wangs patriarch Wang Shimin upholds strict Dong–Ju & Huang Gongwang lineage discipline, while Ming prince-monk Shitao declares 'Brush and ink must follow the contemporary age!'."
    }
  };

  const MUSEUMS_EN = {
    "故宫博物院": { nameEn: "The Palace Museum, Beijing (Forbidden City)", cityEn: "Beijing, China", descriptionEn: "World's premier treasury of imperial Chinese art preserving *Qingming Scroll*, *A Thousand Li of Rivers and Mountains*, *Nymph of the Luo*, and *Grapes in Ink*.", institutionTypeEn: "National Heritage & Art Museum" },
    "台北故宫博物院": { nameEn: "National Palace Museum, Taipei", cityEn: "Taipei, Taiwan", descriptionEn: "Steward of unmatched Song–Yuan court panoramas: *Travelers Among Mountains and Streams*, *Early Spring*, *Wind in Pines Among a Myriad Valleys*, and *Fuchun Mountains* (Master Wuyong scroll).", institutionTypeEn: "National Heritage & Art Museum" },
    "上海博物馆": { nameEn: "Shanghai Museum", cityEn: "Shanghai, China", descriptionEn: "Renowned holder of Yuan–Ming–Qing literati summits including Wang Meng's *Mount Qingbian*, Ni Zan's *Six Gentlemen*, and Dong Qichang's *Autumn Moods*.", institutionTypeEn: "National Art & Cultural Museum" },
    "辽宁省博物馆": { nameEn: "Liaoning Provincial Museum", cityEn: "Shenyang, Liaoning, China", descriptionEn: "Guardian of priceless Sui–Tang and Northern Song imperial paintings including Huizong's *Auspicious Cranes*, *Lady Guoguo*, and *Court Ladies Adorning Their Hair*.", institutionTypeEn: "Provincial Heritage & Art Museum" },
    "南京博物院": { nameEn: "Nanjing Museum", cityEn: "Nanjing, Jiangsu, China", descriptionEn: "Core repository of Jiangnan aesthetics and Ming–Qing innovations, especially premier works by Shitao and the Wu School.", institutionTypeEn: "National Art & Heritage Museum" },
    "中国美术馆": { nameEn: "National Art Museum of China (NAMOC)", cityEn: "Beijing, China", descriptionEn: "Highest national museum of modern Chinese painting celebrating masterpieces by Qi Baishi, Huang Binhong, and Li Keran.", institutionTypeEn: "National Modern Art Museum" },
    "大都会艺术博物馆": { nameEn: "The Metropolitan Museum of Art (The Met)", cityEn: "New York, United States", descriptionEn: "Home to the Western Hemisphere's most comprehensive archive of classical Chinese scrolls and calligraphy.", institutionTypeEn: "International Encyclopedic Museum" },
    "波士顿美术博物馆": { nameEn: "Museum of Fine Arts, Boston (MFA)", cityEn: "Boston, United States", descriptionEn: "Steward of celebrated Tang–Song treasures including Yan Liben's *Thirteen Emperors* and Huizong's *Court Ladies Preparing Silk*.", institutionTypeEn: "International Art Museum" },
    "东京国立博物馆": { nameEn: "Tokyo National Museum", cityEn: "Tokyo, Japan", descriptionEn: "Preserves rare Song Chan ink works and Northern Song milestones including Li Gonglin's *Five Tribute Horses* and Liang Kai's *Li Bai Chanting*.", institutionTypeEn: "National Art & Heritage Museum" },
    "北京人民大会堂": { nameEn: "Great Hall of the People, Beijing", cityEn: "Beijing, China", descriptionEn: "Major state ceremonial edifice housing the permanent 1:1 display of *Such Great Beauty in Our Land* in its Main State Hall (1959 original safely archived).", institutionTypeEn: "State Ceremonial Edifice (Non-Public Museum)" }
  };

  const ATTRIBUTION_GUIDE_EN = [
    { typeEn: "Museum-Authenticated Work (馆藏定本)", descEn: "Authenticated through inscriptions, seals, historical colophons, and catalog provenance — avoiding simplistic equation of every pre-modern classic with an untouched single autograph." },
    { typeEn: "Song Imperial Tracing/Copy (宋摹本)", descEn: "Court Academy copies produced during the Song after Six Dynasties or Tang originals, safeguarding crucial compositional and linear evidence." },
    { typeEn: "Tang Imperial Tracing Copy (唐摹本)", descEn: "Early Tang Double-Hook Ink-Fill copies preserving the closest surviving visual witness to Wei–Jin court painting." },
    { typeEn: "Traditionally Attributed Scroll (传世本)", descEn: "Transmitted across historic collections under a master's name while remaining open to scholarly dating and workshop reassessment." },
    { typeEn: "Ongoing Scholarly Debate (学术存疑)", descEn: "Works over which museum specialists currently debate authorship, copying century, or historical remounting." }
  ];

  const PAINTINGS_EN = {
    "luoshenfu-tu": {
      dynastyEn: "Eastern Jin (317–420 CE)",
      creationDateEn: "c. 4th Century Original (Surviving Southern Song Copy, 12th Century)",
      genreLabelEn: "Figure Painting • Fine Brush (人物画 • 工笔)",
      materialEn: "Silk handscroll, natural mineral pigments (绢本设色)",
      museumEn: "The Palace Museum, Beijing & Liaoning Provincial Museum",
      attributionEn: "Song Court Copy preserving Eastern Jin 'spring-silkworm spinning silk' lines and archaic spatial narrative.",
      artistSchoolEn: "Six Dynasties Archaic Lineage",
      artistEraEn: "Eastern Jin (东晋)",
      artistBioEn: "Sage of Eastern Jin painting born into a Wuxi noble clan; theorist of 'Conveying Spirit Through Form', 'Transposing Thought', and capturing soul in the eyes.",
      quoteEn: "Beauty or homeliness of the four limbs decides nothing subtle; conveying true spirit rests squarely inside those little pupils of the eye.",
      quoteAuthorEn: "Gu Kaizhi (顾恺之)",
      quoteSourceEn: "*Record of Famous Painters of All Dynasties*",
      analysisEn: {
        historicalBackground: "Inspired by Cao Zhi's celebrated Three Kingdoms rhapsody *Ode to the Goddess of the Luo*, turning his ethereal doomed longing for Lady Zhen into an unbroken horizontal poetic narrative.",
        artistBiography: "As Cavalier Attendant-in-Ordinary, Gu Kaizhi earned acclaim for 'Three Perfections' — Wit, Painting, and Eccentricity — and wrote China's earliest systematic figure-painting theory.",
        artisticComposition: "Deploys continuous narrative structure: Cao Zhi and the Luo Goddess recur across sequential riverbank encounters, pledge exchanges, and sorrowful dragon-chariot ascent.",
        brushwork: "Models gossamer-fine 'spring-silkworm spinning silk' and 'iron-wire' contours curving smoothly like drifting cloud or water without abrupt breaks.",
        inkAndColor: "Combines muted cinnabar, azurite, and malachite with ink contours, lifting the serene supernatural glow of phoenixes and divine steeds.",
        spatialPerspective: "Reflects early Six Dynasties convention where 'people loom taller than hills and rivers cannot bear a boat', using willow screens purely as episodic dividers.",
        symbolism: "The hovering Goddess ('graceful as startled swan, sinuous as swimming dragon') embodies unattainable ideal beauty parted forever from mortal touch by the Luo waters.",
        philosophicalMeaning: "Synthesizes Wei–Jin Xuanxue transcendental longing with Confucian elegiac melancholy over the political turbulence following southern migration.",
        artisticLegacy: "First surviving monumental poetic narrative scroll in East Asian art, grounding Sui, Tang, and Song figure conventions."
      },
      srEn: {
        scholarlyConsensus: "Specialists agree surviving editions in Beijing, Taipei, Liaoning, and the Freer Gallery are Song copies Faithfully transmitting 4th-century composition.",
        debatedIssues: "Scholars Xu Bangda, Zhang Hengzi, and James Cahill have closely compared relative dating among the Palace Museum, Liaoning, and Freer versions.",
        comparativeContext: "Rivals late-antique Roman and Persian reliefs in psychological nuance and melodic linear continuity.",
        academicCitations: ["Palace Museum Studies on Song Copies of Gu Kaizhi's *Nymph of the Luo*.", "Chen Shih-hsiang & Shane McCausland, studies on Early Chinese Narrative Painting."]
      },
      hotspotsEn: [
        { categoryEn: "Archaic Handscroll Rhythm", titleEn: "First Encounter Across Misty Luo Waters", detailEn: "Cao Zhi's retinue halts reverently at shoreline willow screens as the River Goddess glides shimmering atop rippling waves." },
        { categoryEn: "Spring-Silkworm Contour", titleEn: "Weightless 'Spring-Silkworm' Flowing Drapery", detailEn: "Unbroken fine ink ribbons curl and lift hems without thick-thin modulation, levitating the immortal figure in mid-air." },
        { categoryEn: "Continuous Narrative", titleEn: "Six-Dragon Celestial Chariot Ascent", detailEn: "Recurrent episodic transitions culminate in the departing dragon barge ascending into swirling clouds as Cao Zhi gazes wistfully behind." }
      ]
    },
    "nvshi-zhentu": {
      dynastyEn: "Eastern Jin (317–420 CE)",
      creationDateEn: "4th Century Original (Surviving 7th Century Tang Court Copy)",
      genreLabelEn: "Figure Painting • Court Didactic (人物画 • 宫廷)",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "The British Museum, London",
      attributionEn: "Tang Court Copy — Oldest and closest extant witness to Gu Kaizhi's brushwork.",
      artistSchoolEn: "Six Dynasties Archaic Lineage",
      artistEraEn: "Eastern Jin (东晋)",
      artistBioEn: "Foremost Eastern Jin master capturing aristocratic inner poise through gossamer contours and austere court dignity.",
      quoteEn: "Everyone knows how to adorn outward countenance, yet none attend to cultivating inner temperament; if character goes untended, ritual propriety fractures.",
      quoteAuthorEn: "Zhang Hua (张华)",
      quoteSourceEn: "*Admonitions of the Court Instructress* inscribed on the scroll",
      analysisEn: {
        historicalBackground: "Illustrates poet-minister Zhang Hua's moral ode warning tyrannical Empress Jia against vanity and court excess through exemplary Confucian courtly conduct.",
        artistBiography: "Gu Kaizhi transformed dry moralizing verses into vivid theatrical vignettes inside Six Dynasties aristocratic apartments.",
        artisticComposition: "Nine surviving narrative vignettes illustrate civic courage (Consort Feng blocking an escaped bear), self-restraint before the imperial palanquin, dressing-mirror introspection, and family harmony.",
        brushwork: "Pinnacle of 'lofty antique gossamer threads' (Gaogu Yousimiao): fine elastic ink ribbons floating with crisp momentum around billowing hems.",
        inkAndColor: "Restrained palette of warm red earth ochre, pine black, and chalk white accentuates serene aristocratic features and midnight tresses.",
        spatialPerspective: "Constructs implied interior depth solely via lacquered beds, circular bronze mirrors, and angled screens without rigid linear vanishing points.",
        symbolism: "The famous toilet-mirror vignette pairs physical grooming directly with daily moral self-examination of inner heart-mind.",
        philosophicalMeaning: "Harmonizes Confucian civic propriety with Southern aristocratic 'Pure Conversation' grace after the Yongjia upheaval.",
        artisticLegacy: "Among the earliest surviving portable silk masterworks globally; looted from Beijing's Summer Palace in 1900 and housed at the British Museum."
      },
      srEn: {
        scholarlyConsensus: "British Museum and Palace Museum authorities concur the London silk dates to Tang Taizong's Zhenguan reign, bearing imperial seals of Song Huizong and Qianlong.",
        debatedIssues: "Western museum remounting onto flat boards during the 1910s sparked ongoing conservation debate over traditional scroll format integrity.",
        comparativeContext: "Surpasses contemporary Eurasian painting in psychological restraint and fluid rhythmic silk contour.",
        academicCitations: ["Shane McCausland, *First Masterpiece of Chinese Painting: The Admonitions Scroll*, British Museum Press, 2003.", "Yang Xin, *Gu Kaizhi and the Admonitions Scroll*, Palace Museum Journal."]
      },
      hotspotsEn: [
        { categoryEn: "Didactic Court Drama", titleEn: "Lady Feng Courageously Shielding Emperor Yuan from a Wild Bear", detailEn: "Imperial guards recoil while Consort Feng steps fearlessly toward a charging bear, embodying loyal self-sacrifice." },
        { categoryEn: "Inner Reflection Motif", titleEn: "Circular Bronze Mirror & Dressing Toilette", detailEn: "Court ladies comb long tresses beside a lacquered cosmetic box — an iconic visual pun linking outward grace to inner self-scrutiny." },
        { categoryEn: "Imperial Connoisseurship", titleEn: "Emperor Qianlong Orchid Ink & Seals", detailEn: "Blank silk intervals bear dense imperial connoisseurship colophons and Qianlong's painted orchid tribute." }
      ]
    },
    "ershiba-xiu": {
      dynastyEn: "Southern Liang Dynasty (502–557 CE)",
      creationDateEn: "6th Century Original (Surviving Tang/Song Transmission Copy)",
      genreLabelEn: "Daoist Celestial Figures • Figure Painting",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Osaka City Museum of Fine Arts, Japan",
      attributionEn: "Transmitted Scroll attributed to Zhang Sengyou — exemplifying 'Zhang Family Style'.",
      artistSchoolEn: "Liang Imperial Court Lineage",
      artistEraEn: "Southern Liang (南朝梁)",
      artistBioEn: "Celebrated Liang Wu court master famed for 'boneless' color washes and the legend of 'dotting the dragon's eyes' bringing painted dragons to life.",
      quoteEn: "Zhang Sengyou painted four white dragons upon Anle Temple wall in Jinling without dotting their pupils; once dotted, thunder shattered the wall and two dragons soared skyward.",
      quoteAuthorEn: "Zhang Yanyuan (张彦远)",
      quoteSourceEn: "*Record of Famous Painters of All Dynasties*",
      analysisEn: {
        historicalBackground: "Personifies China's ancient astronomical Twenty-Eight Lunar Mansions through Daoist-cosmological guardian spirits combining human, zoomorphic, and astrological forms.",
        artistBiography: "Zhang Sengyou absorbed Indo-Central Asian sculptural chiaroscuro entering southern Buddhist temples, pioneering 'concave-convex modeling' ('Aotu huafa').",
        artisticComposition: "Surviving twelve deity processional figures parade successively: dignified sovereign judges beside bird-crowned, horned, and serpent-bearing astral deities.",
        brushwork: "'Zhang Family Style' pairs taut rounded iron-wire lines with supple anatomical volume clearly distinct from Gu Kaizhi's weightless flatness.",
        inkAndColor: "Opaque indigo, dark cinnabar, and earthen yellow mineral washes summon nocturnal celestial mystery across aged silk.",
        spatialPerspective: "Astral guardians stride or mount scarlet oxen against unbroken blank cosmic space evocative of boundlessly sweeping heavens.",
        symbolism: "Each star lord governs quadrants of the Azure Dragon, White Tiger, Vermilion Bird, and Black Tortoise anchoring dynastic alignment.",
        philosophicalMeaning: "Embodies Daoist Heaven–Human resonance wherein cosmic constellations and terrestrial qi breathe through shared vitality.",
        artisticLegacy: "Established iconographic archetypes for astral Daoist pantheons and Sui–Tang Dunhuang mural volume.",
      },
      srEn: {
        scholarlyConsensus: "Keystone monument demonstrating Chinese brushwork successfully assimilating foreign three-dimensional modeling while keeping linear discipline.",
        debatedIssues: "Scholars weigh whether the extant Osaka silk was carefully copied by Tang astrological painter Liang Lingzan directly after Zhang Sengyou.",
        comparativeContext: "Resonates powerfully in sculptural energy with Nanjing Xiao Liang royal stone tomb chimeras.",
        academicCitations: ["Wang Bomin, *Comprehensive History of Chinese Painting*.", "Pan Yungao, *Six Dynasties Painting Treatises*."]
      },
      hotspotsEn: [
        { categoryEn: "Daoist Astronomy", titleEn: "Horned & Avian Astral Guardians of 28 Mansions", detailEn: "Fuses classical Chinese lunar constellations with Indo-Persian ox-riding and feathered animal-headed iconography." },
        { categoryEn: "Western Regions Modeling", titleEn: "'Concave-Convex' Shading Volumes", detailEn: "Absorbs Kizil sculptural shading along muscles and crimson drapery to lend palpable three-dimensional roundness." },
        { categoryEn: "Epigraphic Provenance", titleEn: "Small-Regular Seal Captions & Southern Song Seals", detailEn: "Calligraphic mansion labels above each astral figure match early Song imperial archival catalogs." }
      ]
    },
    "you-chun-tu": {
      dynastyEn: "Sui Dynasty (581–618 CE)",
      creationDateEn: "c. 600 CE (Emperor Wen of Sui Reign)",
      genreLabelEn: "Gold-and-Blue-Green Landscape • Fine Brush",
      materialEn: "Silk scroll, azurite, malachite & powdered gold (绢本青绿设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Transmitted Sui/Early-Tang Masterwork traditionally inscribed by Emperor Huizong as Zhan Ziqian.",
      artistSchoolEn: "Founder of Gold–Green Landscape",
      artistEraEn: "Sui Dynasty (隋朝)",
      artistBioEn: "High Sui court official revered as 'Ancestor of Tang Painting', credited with liberating landscape from minor figure backdrop into independent panorama.",
      quoteEn: "Touching every thing with boundless feeling and peerless brush; above all in landscape, rolling hills and rivers stretch a thousand miles within inches.",
      quoteAuthorEn: "Li Sizhen (李嗣真)",
      quoteSourceEn: "*Sequel to Classification of Painters*",
      analysisEn: {
        historicalBackground: "Created following Sui reunification after three centuries of North–South division, mirroring imperial aristocratic spring river excursions in peaceful confidence.",
        artistBiography: "Having served Northern Qi, Northern Zhou, and Sui, Zhan Ziqian united northern cliff grandeur with southern rhythmic gentleness.",
        artisticComposition: "Deploys 'a thousand miles on a square foot': wide diagonally receding spring lake separates flowering foreground terraces from soaring azure-crested distant peaks.",
        brushwork: "Fine hairline dark contours define undulating ridges before flat mineral washes — predating later Song ink texture strokes ('Cun').",
        inkAndColor: "Pioneers 'Blue-Green Gold-Outline' landscape: radiant azurite mountains, malachite pines, white-lead blossoms, and delicate gold contour highlights.",
        spatialPerspective: "Resolves Six Dynasties disproportionate scale ('human taller than hill') forever, establishing natural proportion: 'fathom mountains, foot trees, inch horses, bean travelers'.",
        symbolism: "Blooming peach ridges and drifting pleasure boats radiate unified empire renewal and serene spring contentment.",
        philosophicalMeaning: "Channels Daoist joy in dwelling amidst mountains and waters in harmony with seasonal renewal.",
        artisticLegacy: "Direct ancestor to Tang 'Great & Little General Li' gold-green landscapes and Wang Ximeng's Song masterwork."
      },
      srEn: {
        scholarlyConsensus: "Rescued by collector Zhang Boju selling his mansion in 1946 to keep it in China; recognized as China's earliest surviving autonomous landscape scroll.",
        debatedIssues: "Architectural historian Fu Xinian examined saddle and costume details suggesting possible early-to-mid Tang faithful palace recopying.",
        comparativeContext: "Marks a decisive leap in aristocratic lightness beyond contemporary Dunhuang cave landscape borders.",
        academicCitations: ["Fu Xinian, 'On the Dating and Authorship of Strolling About in Spring', *Wenwu*.", "Zheng Zhenduo, *Collected Catalogs*."]
      },
      hotspotsEn: [
        { categoryEn: "Scale Revolution", titleEn: "True Natural Scale: Bean-Sized Travelers Beneath Mountains", detailEn: "First surviving scroll mastering natural distance diminution ('fathom mountain, inch horse, bean human') across sweeping water." },
        { categoryEn: "Sui Mineral Palette", titleEn: "Diagonal Lake Recession & Azurite-Malachite Ridges", detailEn: "Luminous mineral blues and greens model undulating ridges reflecting clear sunlit spring waters." },
        { categoryEn: "Qingming Spring Air", titleEn: "Pleasure Boat & White-Lead Peach Blossoms", detailEn: "Delicate white-powder cherry dots shimmer across gentle ripples gliding smoothly past distant pavilions." }
      ]
    },
    "bu-nian-tu": {
      dynastyEn: "Early Tang (Zhenguan Reign)",
      creationDateEn: "c. 641–650 CE (Surviving Northern Song Copy)",
      genreLabelEn: "Imperial Court Figure • Diplomatic History",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Northern Song Imperial Copy directly preserving Yan Liben's solemn Early Tang grandeur.",
      artistSchoolEn: "Tang Imperial Court Standard",
      artistEraEn: "Early Tang (唐朝)",
      artistBioEn: "Premiere early-Tang minister-painter whose stately portraits enshrined the 24 Meritorious Officials of Lingyan Pavilion.",
      quoteEn: "Taizong's solemn poise radiates heroic foresight; the Tibetan envoy bows with sincere dignity before the Celestial Court.",
      quoteAuthorEn: "Mi Fu (米芾)",
      quoteSourceEn: "*History of Painting (Huashi)*",
      analysisEn: {
        historicalBackground: "Chronicles the historic 640–641 CE diplomatic audience when Emperor Taizong received Tibetan chief minister Gar Tongtsen requesting Princess Wencheng's hand for Songtsen Gampo.",
        artistBiography: "Inheriting a family of imperial architects, Yan Liben embodied High Tang geopolitical majesty in visual portraiture.",
        artisticComposition: "Balances stationary poise vs. humble motion: nine court attendants bear Taizong's sedan palanquin on the right beneath canopy fans while red-robed master of ceremonies introduces Tibetan envoy and interpreter on the left.",
        brushwork: "Disciplined iron-wire contours lock crisp silhouettes; intricate textile motifs along Gar Tongtsen's bird-medallion cloak prove acute diplomatic ethnography.",
        inkAndColor: "Controlled vermilion, lead white, lacquered ink black, and warm gold evoke dignified imperial majesty without gaudiness.",
        spatialPerspective: "Hierarchical scale enlarges Emperor Taizong subtly above bearers and envoys, reinforcing Great Tang's cosmic sovereignty.",
        symbolism: "Outspread pheasant-feather fans shelter peaceful diplomacy contrasting Taizong's calm authority with Gar Tongtsen's respectful awe.",
        philosophicalMeaning: "Enacts Confucian statecraft of 'cherishing distant guests through benevolent virtue' during Zhenguan golden governance.",
        artisticLegacy: "Benchmark of early-Tang political portraiture and priceless ethnographic witness to Tang–Tibetan textiles."
      },
      srEn: {
        scholarlyConsensus: "Authenticated Northern Song copy prized with palace seals by Huizong, Jin Zhangzong, and Qing Qianlong.",
        debatedIssues: "Scholars analyze whether the scroll stood alone or formed part of a larger gallery of foreign tributary embassies.",
        comparativeContext: "Reveals warmer psychological intimacy than Yan's formal emperors in Boston's *Thirteen Emperors Scroll*.",
        academicCitations: ["Palace Museum, *Studies on Tang Yan Liben's Emperor Taizong Receiving Tibetan Envoy*.", "Chen Gaohua, *Historical Sources on Sui–Tang Painters*."]
      },
      hotspotsEn: [
        { categoryEn: "Imperial Portrait", titleEn: "Emperor Taizong Calmly Seated Upon Bearer Palanquin", detailEn: "Clad in plain round-collared robe yet scaled commanding larger than attendants, projecting effortless Tang sovereignty." },
        { categoryEn: "Tang–Tibet Diplomacy (641)", titleEn: "Envoy Gar Tongtsen in Sogdian-Style Bird-Medallion Cloak", detailEn: "Tibetan minister bows with clasped hands in a finely patterned silk chuba woven with highland pearl-roundel fowl." },
        { categoryEn: "Early Tang Figure Line", titleEn: "Nine Graceful Palanquin Bearers in Iron-Wire Contours", detailEn: "Taut steel-wire brushwork captures subtle weight shifts and varied girlish poses avoiding mechanical repetition." }
      ]
    },
    "lidai-diwang-tu": {
      dynastyEn: "Tang Dynasty (618–907 CE)",
      creationDateEn: "c. 650–670 CE (Tang & Early Northern Song Hybrid Scroll)",
      genreLabelEn: "Imperial Portraiture • Figure Painting",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Museum of Fine Arts, Boston",
      attributionEn: "Tang–Song Composite Transmission — First six emperors Tang/earlier; later seven Northern Song restoration.",
      artistSchoolEn: "Tang Imperial Court Standard",
      artistEraEn: "Tang Dynasty (唐朝)",
      artistBioEn: "Early Tang master of historical psychology revealing dynastic rise and ruin cleanly inside royal faces.",
      quoteEn: "Look upon the portrayed bearing and know the ruler at once; dynastic order or ruin flashes clearly in a single gaze.",
      quoteAuthorEn: "Zhu Jingxuan (朱景玄)",
      quoteSourceEn: "*Record of Famous Painters of the Tang*",
      analysisEn: {
        historicalBackground: "Portrays thirteen rulers spanning Former Han Emperor Zhao through Sui Yangdi, serving as a visual moral mirror educating Tang princes.",
        artistBiography: "Yan Liben harnessed acute physiognomic insight to contrast virtuous founders against decadent fallen sovereigns.",
        artisticComposition: "Thirteen distinct triadic groupings arrange each sovereign flanked by two fan-bearers or supporters pacing solemnly across historical chronology.",
        brushwork: "Robust 'broken reed leaf' drapery folds drop naturally with authoritative gravity.",
        inkAndColor: "Solemn obsidian, cinnabar red, and antique ochre recreate authentic ceremonial dragon robes and nine-tassel mortarboard crowns.",
        spatialPerspective: "Strips architectural distractions cleanly onto blank silk so psychological focus rests completely on posture and eyes.",
        symbolism: "Founders like Han Wendi and Guangwudi radiate calm benevolence while fallen Chen Shubao and Sui Yangdi betray nervous arrogance.",
        philosophicalMeaning: "Embodies core Confucian historiography — 'Taking History as a Moral Mirror' honoring benevolent rule and warning against tyranny.",
        artisticLegacy: "Largest and earliest intact suite of imperial Chinese portraits outside palace tomb murals."
      },
      srEn: {
        scholarlyConsensus: "Held at MFA Boston since 1931; universally revered as priceless witness to Early Tang and Northern Song court portraiture.",
        debatedIssues: "Forensic conservation confirms six early rulers show Tang/older weave while seven later groups reflect Northern Song master restoration.",
        comparativeContext: "Demonstrates sharper individual moral expression than contemporary Tang prince tomb procession murals in Xi'an.",
        academicCitations: ["Kojiro Tomita, 'Portraits of the Emperors: Yen Li-pen', *MFA Bulletin*, 1932.", "Chen Yinke, studies on Sui–Tang Institutional Art."]
      },
      hotspotsEn: [
        { categoryEn: "Historical Mirror", titleEn: "Thirteen Rulers From Western Han to Fallen Sui", detailEn: "Contrasts wise founders directly with extravagant closing emperors in a didactic lineage scroll." },
        { categoryEn: "Virtuous Physiognomy", titleEn: "Calm Majesty of Founding Emperor Guangwu of Han", detailEn: "Warm deep reds and steady steady eyes embody Confucian royal restraint and fortitude." },
        { categoryEn: "Cautionary Finale", titleEn: "Restless Vanity of Fallen Emperor Yang of Sui", detailEn: "Sideways glances and ostentatious retinue serve as stark moral admonition for Tang heirs." }
      ]
    },
    "tianwang-songzi-tu": {
      dynastyEn: "High Tang (8th Century CE)",
      creationDateEn: "8th Century Original (Surviving Northern Song Ink Copy)",
      genreLabelEn: "Buddhist Narrative • Baimiao Plain Ink Line",
      materialEn: "Paper handscroll, pure monochrome ink (纸本水墨)",
      museumEn: "Osaka City Museum of Fine Arts, Japan",
      attributionEn: "Northern Song Master Copy faithfully preserving Wu Daozi's 'Wu Family Style'.",
      artistSchoolEn: "Wu's Billowing Sashes Lineage",
      artistEraEn: "High Tang (盛唐)",
      artistBioEn: "Revered 'Sage of Painting' lionized across Confucian, Buddhist, and Daoist canons whose wind-whipped lines shook Tang Chang'an.",
      quoteEn: "Daozi paints figures like storm-winds and torrential rain sweeping across at a stroke — 'Wu's sashes catch the wind, Cao's robes cling wet from water'.",
      quoteAuthorEn: "Guo Ruoxu (郭若虚)",
      quoteSourceEn: "*Experiences in Painting*",
      analysisEn: {
        historicalBackground: "Dramatizes infant Prince Siddhartha being presented by King Suddhodana to shrine deities whose proud Heavenly Kings tremble and bow down.",
        artistBiography: "Summoned by Emperor Xuanzong from Luoyang to the Hanlin Academy, Wu Daozi painted over 300 sweeping Buddhist-Daoist temple murals in Chang'an.",
        artisticComposition: "Divides cleanly across turbulent demonic/celestial shrine guards vs. serene King Suddhodana tenderly cradling the newborn future Buddha.",
        brushwork: "Iconic 'water-shield vine strokes' alternate explosive thick swells with razor-sharp flicks bursting with calligraphic storm energy.",
        inkAndColor: "Abandons heavy Tang pigments for pure monochrome ink shading ('Wuzhuang'), modeling taut musculature without flat color.",
        spatialPerspective: "Dynamic leaping postures and swirling ribbons surge virtually forward off flat paper.",
        symbolism: "Fierce deity submission before an infant affirms awakened Buddha-wisdom prevailing above brute worldly authority.",
        philosophicalMeaning: "Synthesizes Mahayana compassion with bold High Tang cosmopolitan confidence.",
        artisticLegacy: "Laid foundation for pure monochrome Baimiao outline painting later mastered by Li Gonglin and Japanese ink lineages."
      },
      srEn: {
        scholarlyConsensus: "Osaka copy represents humanity's closest surviving echo of Wu Daozi's vanished monumental Tang temple murals.",
        debatedIssues: "Specialists analyze subtle Northern Song literati line-work blended atop Tang dramatic figure prototypes.",
        comparativeContext: "Rivals High Tang Dunhuang Cave murals with unmatched linear turbulence and calligraphic momentum.",
        academicCitations: ["Zhang Yanyuan, *Record of Famous Painters*, Vol. 9: Wu Daozi.", "Luo Xingang, *Studies on Wu Daozi's Divine Works*."]
      },
      hotspotsEn: [
        { categoryEn: "Sinicized Buddhism", titleEn: "King Suddhodana Gently Cradling Infant Buddha", detailEn: "Translates Indian sutra miracle into dignified Chinese royal domestic tenderness." },
        { categoryEn: "Brushwork Tempest", titleEn: "'Billowing Sash' Drapery & Fierce Celestial Deities", detailEn: "Ribbons whip upward in kinetic 'water-shield' ink lines charging fierce guardian figures with living velocity." },
        { categoryEn: "Baimiao Prototype", titleEn: "Sculpted Pure-Ink Relief Without Opaque Color", detailEn: "Monochrome brush thickening creates startling plastic muscle volume predicting Song pure-ink masters." }
      ]
    },
    "guoguo-furen-youchun": {
      dynastyEn: "High Tang (8th Century CE)",
      creationDateEn: "c. 750 CE Original (Surviving 11th Century Northern Song Court Copy)",
      genreLabelEn: "Aristocratic Genre • Tang Court Figures",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Liaoning Provincial Museum, Shenyang",
      attributionEn: "Northern Song Imperial Academy Copy (traditionally attributed directly to Emperor Huizong's own brush).",
      artistSchoolEn: "High Tang Aristocratic Figure School",
      artistEraEn: "High Tang (盛唐)",
      artistBioEn: "Kaiyuan–Tianbao court specialist famed for opulent Chang'an ladies embodying 'plump grace and radiant bones'.",
      quoteEn: "Lady Guoguo basks in royal favor, riding straight into the palace gate at dawn — disdaining rouge as defiling natural hue, she faces the Emperor with lightly penciled brows.",
      quoteAuthorEn: "Zhang Hu (张祜)",
      quoteSourceEn: "*Jiling Terrace* (quoted on silk colophon)",
      analysisEn: {
        historicalBackground: "Depicts Yang Guifei's third sister Lady Guoguo riding with eight companions on a radiant Third-Month dawn promenade during Tang Xuanzong's heyday.",
        artistBiography: "Zhang Xuan pioneered High Tang feminine canons celebrating healthy poise and self-possessed noble leisure.",
        artisticComposition: "Eight steeds and nine riders amble smoothly right-to-left amid generous open silk suggesting breezy morning air.",
        brushwork: "Fine silk-taut outlines carve flowing sleeves alongside hair-fine 'three-tipped horse mane' detailing.",
        inkAndColor: "Luminous peach pink, malachite, lacquer black saddles, and dappled white steeds ignite festive court radiance.",
        spatialPerspective: "Not a single willow twig appears, yet crisp spring light fills empty silk effortlessly through relaxed hooves and airy gauzes.",
        symbolism: "Well-fed chargers and bare-faced confidence radiate Kaiyuan-era imperial prosperity and effortless aristocracy.",
        philosophicalMeaning: "Celebrates Tang secular joie de vivre delighting in living beauty beneath open morning skies.",
        artisticLegacy: "Crowns classical Tang court genre portraiture and documents authentic 8th-century equestrian fashion."
      },
      srEn: {
        scholarlyConsensus: "Liaoning holds the gold-standard Northern Song Academy copy faithfully preserving Zhang Xuan's composition and Slender-Gold title.",
        debatedIssues: "Long debate continues over whether Lady Guoguo is the central pink-clad rider cradling a child or the proud figure leading far left.",
        comparativeContext: "More mobile and breezy outdoors than Zhang Xuan's interior *Court Ladies Preparing Silk*.",
        academicCitations: ["Yang Renkai, *Records of National Treasures: Authentication of Lady Guoguo*.", "Feng Qiwu, *History of Chinese Court Ladies Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Masterful Negative Space", titleEn: "No Trees or Streams — Yet Spring Breezes Fill the Silk", detailEn: "Transparent silk scarves and unhurried equine strides conjure bright dawn warmth purely across bare silk." },
        { categoryEn: "Identity Debate", titleEn: "Which Rider Is Lady Guoguo Herself?", detailEn: "Scholars weigh the serene mother-and-child central pair against the poised blue-and-red noblewomen pacing left." },
        { categoryEn: "Tang Equestrian Rank", titleEn: "Imperial 'Three-Tuft' Mane & Huizong Slender-Gold Title", detailEn: "Tri-clipped horse manes mark royal stables alongside Song Huizong's razor-crisp Slender-Gold inscription at top right." }
      ]
    },
    "daolian-tu": {
      dynastyEn: "High Tang (8th Century CE)",
      creationDateEn: "8th Century Original (Copied by Emperor Huizong c. 1112 CE)",
      genreLabelEn: "Court Genre Craft • Fine Brush",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Museum of Fine Arts, Boston",
      attributionEn: "Imperial Autograph Copy directly executed and titled by Song Huizong after Zhang Xuan.",
      artistSchoolEn: "High Tang Aristocratic Figure School",
      artistEraEn: "High Tang (盛唐)",
      artistBioEn: "Premier Kaiyuan chronicler of palace women's seasonal weaving crafts elevated into poetic ballet.",
      quoteEn: "Song of fulling silk, pure bolts of Wu gauze, autumn moonlight glinting bright as snow blooms; chilled mallets beating woven silk ring cool as struck jade.",
      quoteAuthorEn: "Li Bai (李白)",
      quoteSourceEn: "*Ballad of Pounding Silk*",
      analysisEn: {
        historicalBackground: "Shows three rhythmic stages of softening raw autumn silk bolts inside inner palace quarters ahead of winter tailoring.",
        artistBiography: "Transmitted through Huizong's exquisite brush, mundane textile labor transforms into musical choreography.",
        artisticComposition: "Sequential groups rhythmically link: four mallet-pounding ladies beside wooden trough, two seated seamstresses, and four stretching white silk while a child peeks mischievously underneath.",
        brushwork: "Faultless precision captures natural lean-back weight tension as ladies pull stretched translucent silk bolts taut.",
        inkAndColor: "Bright cinnabar skirts, malachite patterns, and shimmering white pigments glow against luminous sized silk.",
        spatialPerspective: "Eliminates walls entirely while establishing intimate sunlit hall depth solely via aligned figure angles.",
        symbolism: "Snow-white silk and measured teamwork affirm Confucian cosmic harmony of 'Men Plowing, Women Weaving'.",
        philosophicalMeaning: "Honors dignified artisan craft as vital moral foundation of civilized statehood.",
        artisticLegacy: "Among America's foremost Chinese silk treasures, deeply informing modern textile costume scholarship."
      },
      srEn: {
        scholarlyConsensus: "Colophon confirms Emperor Zhao Ji (Huizong) personally traced Zhang Xuan's work in Daguan Year 1, preserving dual Tang–Song zenith craft.",
        debatedIssues: "Left Beijing palace collections during post-1900 upheaval and entered MFA Boston via 1912 acquisition.",
        comparativeContext: "Sancai pottery court ladies from Xi'an tombs corroborate exact Tang hairpins, capes, and rounded faces.",
        academicCitations: ["Wu Hung, *The Double Screen*, Reaktion Books.", "Zheng Qian, *Tang Court Costume in Daolian Tu*."]
      },
      hotspotsEn: [
        { categoryEn: "Choreographed Craft", titleEn: "Four Ladies Rhythmically Pounding Raw Silk with Mallets", detailEn: "Alternating gazes and raised timber pestles animate collective feminine palace labor into stately dance." },
        { categoryEn: "Humanizing Detail", titleEn: "Child Peeking Playfully Beneath the Stretched Bolt", detailEn: "A young girl ducking beneath gleaming white silk as ladies pass a glowing brass brazier iron adds unmistakable charm." },
        { categoryEn: "Tang Fashion Archive", titleEn: "Roundel Brocade Patterns & Coal-Brazier Pressing Iron", detailEn: "Crisp textile rosettes and shoulder shawls provide unmatched 8th-century Chang'an garment evidence." }
      ]
    },
    "zhanhua-shinv-tu": {
      dynastyEn: "Mid-Tang (8th–9th Century CE)",
      creationDateEn: "Late 8th Century CE",
      genreLabelEn: "Court Ladies • Fine Brush",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Liaoning Provincial Museum, Shenyang",
      attributionEn: "Traditionally Attributed Masterwork (Liaoning Museum Permanent Tier-1 Restricted Exhibit).",
      artistSchoolEn: "Zhou Family Style (Zhou Jia Yang)",
      artistEraEn: "Mid-Tang (中唐)",
      artistBioEn: "Chang'an aristocrat painter evolving beyond Zhang Xuan's cheerful exterior toward brooding psychological stillness inside palace boudoirs.",
      quoteEn: "Both Zhou Fang's Buddhas and his palace ladies reach complete perfection — crisp draped robes, lustrous nuanced tones, hailed across generations as Zhou Style.",
      quoteAuthorEn: "Zhang Yanyuan (张彦远)",
      quoteSourceEn: "*Record of Famous Painters of All Dynasties*",
      analysisEn: {
        historicalBackground: "Following An Lushan's catastrophic rebellion, Mid-Tang court prosperity dimmed into opulent confinement and quiet existential wistfulness.",
        artistBiography: "As Vice-Governor of Yuezhou born of Chang'an nobility, Zhou Fang knew firsthand the quiet melancholy behind gilded palace curtains.",
        artisticComposition: "Five grand palace ladies and a fan-holding attendant linger spaced apart across a garden courtyard alongside a fluffy lapdog and white crane.",
        brushwork: "Subtle supple contours trade early steel tension for soft aristocratic fullness, climaxing in sheer gossamer gauze over bare skin.",
        inkAndColor: "Deep scarlet skirts, cobalt lotus hairpieces, and ivory skin shine softly behind smoky translucent silk veils.",
        spatialPerspective: "Detached lateral spacing prevents figures from locking eyes, evoking invisible emotional isolation inside shared splendor.",
        symbolism: "Giant floral hair ornaments and idly watched cranes mirror gilded beauty passing silently unappreciated.",
        philosophicalMeaning: "Meditation on gilded solitude and fleeting splendor fading undisturbed in palace courtyards.",
        artisticLegacy: "Gold standard of Mid-Tang feminine dignity strictly guarded under China's overseas-loan ban list."
      },
      srEn: {
        scholarlyConsensus: "Preserved at Liaoning Museum as Tier-1 National Treasure prohibited from international touring.",
        debatedIssues: "Scholar Xie Zhiliu debated Southern Tang 10th-century costumes, though consensus largely retains Mid-Tang dating.",
        comparativeContext: "Trades Zhang Xuan's sunny energy for quiet lyric introspection akin to Bai Juyi palace laments.",
        academicCitations: ["Xie Zhiliu, *Connoisseurship Recollections*.", "Yang Renkai, *Authentication of Court Ladies Adorning Flowers*."]
      },
      hotspotsEn: [
        { categoryEn: "Zhou Style Beauty", titleEn: "High Coiffures Crowned With Giant Peonies & Lotuses", detailEn: "Voluminous 'plump beauty' ovals paired with arched willow eyebrows crown Mid-Tang court portraiture." },
        { categoryEn: "Optical Silk Illusion", titleEn: "Sheer Translucent Silk Gauze Over Warm Skin", detailEn: "Thin white mineral over-washes veil crimson underskirts and shoulders with uncanny optical delicacy." },
        { categoryEn: "Palace Stillness", titleEn: "Unseeing Gazes Toward Fluffy Lapdog & White Crane", detailEn: "Absent-minded gestures capture opulent boredom hovering over quiet courtyard gardens." }
      ]
    },
    "huishan-shinv-tu": {
      dynastyEn: "Mid-Tang (8th Century CE)",
      creationDateEn: "Late 8th Century CE (Surviving Northern Song Copy)",
      genreLabelEn: "Court Ladies • Fine Brush",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Northern Song Imperial Copy faithfully preserving Zhou Fang's cloistered boudoir melancholy.",
      artistSchoolEn: "Zhou Jia Yang",
      artistEraEn: "Mid-Tang (中唐)",
      artistBioEn: "Master of Mid-Tang inner-court solitude captured through languid gazes and slow summer gestures.",
      quoteEn: "Fresh-cut white silk from Qi, pure as frost and snow, sewn into a rounded fan of harmony glowing like full moon — yet doomed to cold autumn storage when summer passion cools.",
      quoteAuthorEn: "Ban Jieyu (班婕妤)",
      quoteSourceEn: "*Song of Resentment* (Han Imperial Concubine)",
      analysisEn: {
        historicalBackground: "Conjures sweltering summer tedium as secluded imperial consorts wield round fans waiting fruitlessly for royal favor — echoing Han Consort Ban's autumn-fan elegy.",
        artistBiography: "Thirteen female figures engage in grooming, quiet Guqin music, embroidery, and idle fanning laced with muffled yearning.",
        artisticComposition: "Five episodic groupings move rightward across a woven reed mat, dressing mirror, drooping fan posture, cased Guqin strings, and breeze-waving maids.",
        brushwork: "Supple languid lines drip gracefully downward mirroring drained physical vitality inside motionless summer heat.",
        inkAndColor: "Muted pale celadon, pearl white, and restrained brick-crimson soothe without flamboyance.",
        spatialPerspective: "Frozen timelessness hangs silently over spaced islands of figures upon blank silk.",
        symbolism: "The round summer fan personifies discarded palace youth treasured solely in warm season then abandoned in autumn chests.",
        philosophicalMeaning: "Contemplates transience of outward youth, royal favor, and human liberty confined inside gilded walls.",
        artisticLegacy: "Among world art's most haunting psychological costume scrolls documenting Tang musical bags and furniture."
      },
      srEn: {
        scholarlyConsensus: "Core Tang-tradition figure holding at Beijing's Palace Museum.",
        debatedIssues: "Furniture details place its prototypes even earlier in Zhou Fang's corpus than *Adorning Hair with Flowers*.",
        comparativeContext: "Visual counterpart to Bai Juyi and Li Shangyin's poignant Mid-Tang 'Palace Plaint' poetry.",
        academicCitations: ["Palace Museum Studies on Zhou Fang's *Court Ladies Holding Fans*.", "Chen Shuxiang, *Tang Palace Murals & Genre Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Psychological Pose", titleEn: "Enthroned Consort Holding Round Silk Fan Listlessly", detailEn: "Slumped against a carved bamboo throne, heavy eyelids betray weary resignation beneath stiff luxury." },
        { categoryEn: "Chamber Music & Toilette", titleEn: "Cased Brocade Guqin & Lacquer Mirror Stand", detailEn: "Silk-wrapped zithers and embroidered vanity chests evoke silent artistic pastimes inside women's quarters." },
        { categoryEn: "Mid-Tang Cosmetics", titleEn: "Short Arch Eyebrows & Pomegranate-Dyed Skirts", detailEn: "Cherry-dot lips and deep crimson-pomegranate dyed silks anchor Tang cosmetic history." }
      ]
    },
    "kuanglu-tu": {
      dynastyEn: "Five Dynasties Later Liang (907–923 CE)",
      creationDateEn: "Early 10th Century CE",
      genreLabelEn: "Monumental Monochrome Landscape",
      materialEn: "Vertical silk hanging scroll, monochrome ink (绢本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Transmitted Scroll attributed to Jing Hao — vital bridge between Tang contours and Northern Song texture.",
      artistSchoolEn: "Founder of Monumental Northern Landscape",
      artistEraEn: "Five Dynasties (五代后梁)",
      artistBioEn: "Taihang Mountain recluse and theorist of *Notes on Brush Method* formulating Six Essentials: Qi, Resonance, Thought, Scenery, Brush, and Ink.",
      quoteEn: "Painting encompasses Six Essentials: first Qi (spirit), second Resonance, third Thought, fourth Scenery, fifth Brushwork, and sixth Ink.",
      quoteAuthorEn: "Jing Hao (荆浩)",
      quoteSourceEn: "*Notes on Brush Method (Bifa Ji)*",
      analysisEn: {
        historicalBackground: "Born amid Five Dynasties wars as refugee scholars retreated into jagged Taihang crags, elevating pure landscape into supreme spiritual sanctuary.",
        artistBiography: "Secluded in Honggu Valley, Jing Hao sketched ten thousand gnarled cliffs and pines daily until stone structure gained monumental weight.",
        artisticComposition: "Towering vertical screen composition: traveler path and ferry village rest quietly beneath towering middle temples and sheer crowning crags.",
        brushwork: "Pioneered carved rocky chisel-strokes balancing strong linear bone ('Brush') with sculpted tonal shading ('Ink').",
        inkAndColor: "Abandons Tang mineral color cleanly for subtle monochrome gradations between foreground solidity and misty distance.",
        spatialPerspective: "Joins soaring High Distance cliff walls with receding Deep Distance valley gorges filling viewers with awe.",
        symbolism: "Unshakeable granite crags anchor scholar integrity amid dynastic ruin while plunging cascades renew ceaseless vitality.",
        philosophicalMeaning: "Daoist 'Returning to the Root': shedding worldly ambition to reunite cleanly with primal cosmic bedrock.",
        artisticLegacy: "Grand patriarch of Northern monumental peaks directly inspiring Guan Tong, Li Cheng, and Fan Kuan."
      },
      srEn: {
        scholarlyConsensus: "Indispensable evolutionary link bridging simple Tang outline peaks to full Northern Song textured granite cliffs.",
        debatedIssues: "Western art historians debate whether the Taipei scroll is 10th-century autograph or a faithful 11th-century Shenzong court recreation.",
        comparativeContext: "Replaces Zhan Ziqian's mineral jewel tones with pure monochrome structural grandeur.",
        academicCitations: ["Li Zehou, *The Path of Beauty*.", "Chen Chuanxi, *History of Chinese Landscape Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Northern Arch-Composition", titleEn: "Sheer Taihang Main Peak Crowned at Top Half", detailEn: "Anchoring the monumental peak directly center-high forged the Northern Song heroic landscape blueprint." },
        { categoryEn: "Bifa Ji Practice", titleEn: "Chiseled Stone Shading Uniting Brush & Ink", detailEn: "Enacts Jing Hao's treatise fusing skeletal contour strokes with damp ink washes into rugged sandstone volume." },
        { categoryEn: "Human Scale", titleEn: "Wayside Ferry & Travelers Beneath Silver Cataract", detailEn: "Minute boats and thatched huts along lower waters establish vast scale against soaring stone above." }
      ]
    },
    "xiaoxiang-tu": {
      dynastyEn: "Five Dynasties Southern Tang (937–975 CE)",
      creationDateEn: "c. 950–960 CE",
      genreLabelEn: "Jiangnan Landscape • Bland Naturalness",
      materialEn: "Horizontal silk handscroll, ink & light washes (绢本水墨设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Transmitted Scroll attributed to Dong Yuan — Dong Qichang's Southern Lineage touchstone (Five Dynasties vs. early Song debated).",
      artistSchoolEn: "Patriarch of Jiangnan Ink Landscape",
      artistEraEn: "Five Dynasties Southern Tang",
      artistBioEn: "Nanjing court Assistant Commissioner of Northern Parks who co-founded gentle mist-wrapped Southern landscape and 'hemp-fiber' texture strokes.",
      quoteEn: "Dong Yuan paints with tranquil unforced naturalness, opening vast Jiangnan mist and haze: up close strokes look almost random, yet from afar luminous scenery comes alive.",
      quoteAuthorEn: "Shen Kuo (沈括)",
      quoteSourceEn: "*Dream Pool Essays*",
      analysisEn: {
        historicalBackground: "Painted amid Southern Tang peace prior to Song annexation, reflecting lush soft alluvial riverbanks completely opposite stark northern cliffs.",
        artistBiography: "Steeped in misty Xiang–Jiangnan wetlands, Dong Yuan distilled damp earth dunes and rolling river fogs onto soft silk.",
        artisticComposition: "Tranquil Level-Distance river scroll unfolds fishermen casting nets beside rounded grass hills dissolving gently into moist haze.",
        brushwork: "Inaugurated sinuous wavy 'hemp-fiber strokes' ('Pima cun') modeling soft rounded earth slopes capped with rhythmic dot foliage ('Mi/moss dots').",
        inkAndColor: "'Broken ink' washes bleed softly across damp ground, conjuring warm summer humidity rising gently off riverbanks.",
        spatialPerspective: "Pure Level Distance recedes quietly over endless horizontal water rather than jarring vertical drama.",
        symbolism: "Drifting net-boats mirror uncluttered scholar freedom untouched by court strife.",
        philosophicalMeaning: "Attains supreme Daoist ideal: 'Supreme craft appears effortless', resting contentedly in bland unpretentious truth.",
        artisticLegacy: "Fountainhead of Dong Qichang's entire Southern Lineage revered by Huang Gongwang, Ni Zan, and Ming masters."
      },
      srEn: {
        scholarlyConsensus: "Preeminent surviving exemplar of Southern Jiangnan mist-and-earth aesthetics.",
        debatedIssues: "Scholars weigh whether it originally joined *Waiting for the Ferry* and *Summer Mountains* inside one epic handscroll.",
        comparativeContext: "Opposite aesthetic pole to Fan Kuan's severe northern granite walls.",
        academicCitations: ["Dong Qichang, *Notes from the Painting-Meditation Studio*.", "Chen Chuanxi, *Dong Yuan and Jiangnan Landscape*."]
      },
      hotspotsEn: [
        { categoryEn: "Southern Brush Genesis", titleEn: "Sinuous Unraveling 'Hemp-Fiber' Slopes", detailEn: "Trades harsh northern axe-cuts for rhythmic rippling ink filaments hugging rolling damp clay hills." },
        { categoryEn: "Moist Vapor Dots", titleEn: "Rhythmic Bush Dots & Misty Blank Valleys", detailEn: "Clusters of wet horizontal dots skim misty hillsides uniting Xiao–Xiang vapor with later literati ink clouds." },
        { categoryEn: "Southern Folk Life", titleEn: "River Fisherman Nets & Festive Bridal Procession Boats", detailEn: "Warm red-and-blue figures along sandy banks anchor quiet human warmth amidst mist." }
      ]
    },
    "hanlin-chongting": {
      dynastyEn: "Five Dynasties Southern Tang (10th Century CE)",
      creationDateEn: "10th Century CE",
      genreLabelEn: "Wintry Landscape • Vertical Scroll",
      materialEn: "Vertical silk hanging scroll, monochrome ink (绢本水墨)",
      museumEn: "Heilongjiang Provincial Museum / Liaoning Transmission",
      attributionEn: "Transmitted Scroll attributed to Dong Yuan — rare winter-grove Five Dynasties/early-Song hanging masterpiece.",
      artistSchoolEn: "Jiangnan Monochrome Revival",
      artistEraEn: "Five Dynasties Southern Tang",
      artistBioEn: "Master not only of long damp handscrolls but monumental stark winter river-groves.",
      quoteEn: "Layered shoals stretching row on row into hazy mist; wintry groves desolate yet brimming with endless quiet resonance.",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Dong Family Catalog*",
      analysisEn: {
        historicalBackground: "Captures barren riverfront groves in still Jiangnan winter freeze when foliage falls away leaving bones of branches bare.",
        artistBiography: "Demonstrates Dong Yuan marrying soaring vertical format to tranquil level Southern mudflats.",
        artisticComposition: "Receding spits weave layered shoals skyward past bare winter-stripped foreground groves toward distant low hills.",
        brushwork: "Crab-claw interlocking twigs meet gentle hemp-fiber hill slopes topped in soft spongy dry moss.",
        inkAndColor: "Diluted cool slate-ash greys evoke chill stillness warmed subtly by moist alluvial atmosphere.",
        spatialPerspective: "Tilts elevated ground-plane seamlessly to stretch endless desolate sandbars far back toward horizon.",
        symbolism: "Bare winter trunks standing calm gather quiet inner resolve awaiting spring return.",
        philosophicalMeaning: "Early Chan beauty discovering luminous dignity directly inside stripped wintry bareness.",
        artisticLegacy: "Direct prototype for Northern Song 'Wintry Grove' tradition of Li Cheng and later Yuan masters."
      },
      srEn: {
        scholarlyConsensus: "Exemplifies unforced 'natural wildness' deeply extolled by Su Shi and Mi Fu.",
        debatedIssues: "Remarkable wartime migration traced surviving scrolls from Changchun imperial shelves into Northeast collections.",
        comparativeContext: "Warmer and damper in river soil than Li Cheng's crackling northern frost.",
        academicCitations: ["Palace Museum Studies on *Wintry Groves and Layered Banks*.", "James Cahill, *Compelling Images*."]
      },
      hotspotsEn: [
        { categoryEn: "Level-Distance Geometry", titleEn: "Three Zigzagging River Shoals Fading Into Mist", detailEn: "Sequential sandbars alternate calmly toward far horizon drawing viewers across icy solitude." },
        { categoryEn: "Wintry Grove Rhythm", titleEn: "Interlaced Crab-Claw Foreground Trunks", detailEn: "Bare winter branches cross rhythmically like quiet musical notes above frostbanks." },
        { categoryEn: "Provenance Colophons", titleEn: "Solitary River Skiff & Qing Appreciation Script", detailEn: "Tiny anchored skiff amidst bright negative water embodies Southern reclusion." }
      ]
    },
    "qiushan-wendao": {
      dynastyEn: "Early Northern Song (Late 10th Century CE)",
      creationDateEn: "c. 970–980 CE",
      genreLabelEn: "Hermit Landscape • Chan Ink",
      materialEn: "Vertical silk hanging scroll, ink wash (绢本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Transmitted Scroll attributed to Monk Juran — quintessential Dong–Ju Southern mountain lineage.",
      artistSchoolEn: "Dong–Ju Jiangnan Lineage",
      artistEraEn: "Five Dynasties – Early Song",
      artistBioEn: "Buddhist monk of Nanjing's Kaiyuan Monastery and Dong Yuan's foremost disciple who carried Southern landscape north to Kaifeng.",
      quoteEn: "Juran inherited Dong Yuan's true marrow — lush hazy woodlands, soaring slender peaks brimming with serene spirit.",
      quoteAuthorEn: "Mi Fu (米芾)",
      quoteSourceEn: "*History of Painting*",
      analysisEn: {
        historicalBackground: "Created as Southern Tang merged peacefully into Northern Song, blending nostalgic Jiangnan hills with quiet monastic quest for the Dao.",
        artistBiography: "Monk Juran married master Dong Yuan's rounded soil rhythms onto disciplined towering Song axial structure.",
        artisticComposition: "An S-curved spine winds up toward rounded pinnacle boulders above thatched autumn pavilions sheltering conversing sages beside gentle streams.",
        brushwork: "Celebrated for endless silky hemp strokes crowned by grouped crystalline round 'alum-head boulders' ('Fantou').",
        inkAndColor: "Controlled warm ink washes permeate misty crevices without harsh contrast.",
        spatialPerspective: "Inviting Deep-Distance footpath draws viewers step-by-step past pine bridge right up toward misted hermitage.",
        symbolism: "Humble thatch hall tucked safely inside eternal stone embodies serene mind unshaken by ambition.",
        philosophicalMeaning: "Fuses Daoist mountain retreat with Chan direct awakening: the Way resides clearly inside autumn silence.",
        artisticLegacy: "Together with Dong Yuan established the monumental 'Dong–Ju School' nourishing all subsequent literati landscapes."
      },
      srEn: {
        scholarlyConsensus: "Historic keystone tracking Southern landscape triumph entering Northern Song Bianjing court academies.",
        debatedIssues: "Direct comparisons between Taipei silk and Japanese transmissions verify Taipei scroll's supple mature authority.",
        comparativeContext: "Tighter structural vertical spine and deeper monastic serenity than teacher Dong Yuan.",
        academicCitations: ["Liu Daochun, *Critique of Famous Painters of Our August Dynasty*.", "Xu Fuguan, *The Spirit of Chinese Art*."]
      },
      hotspotsEn: [
        { categoryEn: "Juran Hallmarks", titleEn: "Rounded 'Alum-Head' (Fantou) Pinnacle Boulders", detailEn: "Stacked soft pebble-crowned summits wrapped in fluid hemp strokes announce Monk Juran's signature geology." },
        { categoryEn: "Chan & Confucian Dialogue", titleEn: "Two Sages Conversing Inside Autumn Creek Thatch Pavilion", detailEn: "Open thatched pavilion framed by dark pines stages quiet search for spiritual truth beside mountain streams." },
        { categoryEn: "Visual Guidepath", titleEn: "Winding Creek Trail Ascending Deep Valley", detailEn: "Sinuous footpaths carry viewers patiently upward from timber bridge toward misty mountain sanctuary." }
      ]
    },
    "hanxizai-yeyan": {
      dynastyEn: "Five Dynasties Southern Tang (10th Century CE)",
      creationDateEn: "c. 965–975 Original (Surviving Southern Song Copy)",
      genreLabelEn: "Court Narrative • Dramatic Realism",
      materialEn: "Silk handscroll, mineral colors (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Song Court Copy — Pinnacle of dramatic narrative interior realism after Gu Hongzhong.",
      artistSchoolEn: "Southern Tang Academy Realism",
      artistEraEn: "Five Dynasties Southern Tang",
      artistBioEn: "Court painter possessed of uncanny photographic memory, dispatched covertly by Li Yu to paint Han Xizai's nocturnal banquet from sight alone.",
      quoteEn: "Han Xizai gathered musicians night after night in wild banquets; suspicious Li Yu sent Gu Hongzhong covertly by night to memorize every face and brush this scroll.",
      quoteAuthorEn: "Xuanhe Painting Catalog (宣和画谱)",
      quoteSourceEn: "Imperial Song Court Catalog, Vol. 7",
      analysisEn: {
        historicalBackground: "Northern-born Southern Tang minister Han Xizai staged reckless night banquets intentionally to appear politically harmless before distrustful King Li Yu.",
        artistBiography: "From one nocturnal glimpse Gu Hongzhong rendered over forty guests across five acts with devastating psychological precision.",
        artisticComposition: "Standing folding screens divide five unbroken chronological acts cleanly: Listening to Pipa, Watching Dancer Wang Wushan, Resting & Washing Hands, Flute Ensemble, and Parting.",
        brushwork: "Razor-fine iron-wire lines animate swirling dancers against Han Xizai's heavy motionless upright gaze.",
        inkAndColor: "Warm crimson, lacquered black caps, glowing tallow light, and jewel blues stage nocturnal theatrical splendor.",
        spatialPerspective: "Uses vertical painted screens ('paintings within paintings') ingeniously as architectural cinema cuts advancing time rightward-to-left.",
        symbolism: "Amid joyous pipa music and swaying skirts, Han's hollow brooding eyes expose lonely despair beneath staged debauchery.",
        philosophicalMeaning: "Pierces tragic tension between outward revelry and helpless intellectual lucidity facing inevitable dynastic doom.",
        artisticLegacy: "Preeminent world masterpiece of narrative staging, Five-Dynasties wooden bed-frames, music, and court attire."
      },
      srEn: {
        scholarlyConsensus: "Tier-1 National Treasure at the Palace Museum preserving priceless 10th-century furniture, instruments, and costume evidence.",
        debatedIssues: "Scholars Shen Congwen and Wu Hung debated Song interior bed architecture details preserved inside the scroll.",
        comparativeContext: "Pushes interior psychology far beyond later Renaissance banquet spectacles.",
        academicCitations: ["Wu Hung, *The Double Screen*, 1996.", "Shen Congwen, *Studies in Ancient Chinese Costume*."]
      },
      hotspotsEn: [
        { categoryEn: "Psychological Characterization", titleEn: "Act I: Melancholy Minister Beneath Festive Pipa Music", detailEn: "Enthroned in black tall hat, Han Xizai sits motionless and heavy-eyed amidst cheerful courtiers feasting eyes on pipa playing." },
        { categoryEn: "Cinematic Screen Cuts", titleEn: "Acts II–III: Standing Screens Dividing Dance & Hand-Washing", detailEn: "Free-standing painted screens slice nighttime hours smoothly into five theatrical stages without awkward borders." },
        { categoryEn: "Covert Eyewitness Report", titleEn: "Acts IV–V: Flute Concert & Bittersweet Dawn Farewell", detailEn: "As painted intelligence report to King Li Yu, closing acts capture faithful instruments and solitary stoic sadness." }
      ]
    },
    "xiesheng-zhenqin": {
      dynastyEn: "Five Dynasties Later Shu (10th Century CE)",
      creationDateEn: "c. 960 CE",
      genreLabelEn: "Academy Bird-and-Flower • Fine Brush",
      materialEn: "Silk handscroll, mineral colors (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Museum-Authenticated Sketch Sheet inscribed directly by Huang Quan for his son Jubao.",
      artistSchoolEn: "Huang Family Palatial Splendor",
      artistEraEn: "Five Dynasties Later Shu",
      artistBioEn: "Court painter serving forty years in Chengdu who established 'Huang Style Luxury' governing Northern Song Academy standards.",
      quoteEn: "Huang Family displays aristocratic wealth; Xu Xi radiates wild freedom. Huang paints full-bodied marrow hiding outline completely beneath seamless color glazes.",
      quoteAuthorEn: "Shen Kuo (沈括)",
      quoteSourceEn: "*Dream Pool Essays*",
      analysisEn: {
        historicalBackground: "Composed originally as a master workshop reference sheet instructing son Huang Jubao in scientific anatomical court rendering.",
        artistBiography: "Decades studying royal aviaries honed millimeter precision across feathers, carapace joints, and glassy eyes.",
        artisticComposition: "Isolates 24 distinct sparrows, wagtails, cicadas, hornets, beetles, and freshwater turtles floating independently atop raw silk like museum specimen plates.",
        brushwork: "Fine hairline double outlines lock contours invisibly beneath smooth mineral color washes.",
        inkAndColor: "Builds jewel-like iridescent kingfisher wings, glossy turtle shells, and luminous glass eye beads.",
        spatialPerspective: "Studies specimens cleanly from dorsal, lateral, perched, and hovering angles showcasing anatomical command.",
        symbolism: "Celebrates lush ordered abundance of serene imperial creation.",
        philosophicalMeaning: "Enacts empirical Confucian 'Investigating Things' — discovering natural truth via patient zero-fantasy observation.",
        artisticLegacy: "Anchored Song Imperial Academy bird-and-flower orthodoxy for over a century."
      },
      srEn: {
        scholarlyConsensus: "Ranked among humanity's earliest scientifically precise zoological life-study scrolls.",
        debatedIssues: "Microscopic inscription lower-left ('Handed down to son Jubao for practice') authenticates direct 10th-century workshop lineage.",
        comparativeContext: "Contrasts sharply with Jiangnan master Xu Xi's free-wash wild-pond lotus sketches.",
        academicCitations: ["Guo Ruoxu, *On Huang Quan vs. Xu Xi Styles*.", "Chen Gaohua, *Song Imperial Academy Documents*."]
      },
      hotspotsEn: [
        { categoryEn: "Ancient Zoological Realism", titleEn: "24 Life-Size Sparrows, Turtles & Insects Studied Directly", detailEn: "Every cicada wing vein, beetle leg, and wagtail feather matches modern entomological and ornithological fidelity." },
        { categoryEn: "Father-to-Son Workshop", titleEn: "Tiny Inscription: 'Given to Son Jubao for Practice'", detailEn: "Humble workshop margin text authenticates this living 10th-century Chengdu teaching model." },
        { categoryEn: "Fine-Brush Glazing", titleEn: "Fine Contour Lines Sealed Beneath Velvet Color Layers", detailEn: "Ultra-fine outline marks vanish cleanly inside luminous layered mineral washes." }
      ]
    },
    "xishan-xinglv": {
      dynastyEn: "Northern Song (11th Century CE)",
      creationDateEn: "c. 1000 CE",
      genreLabelEn: "Monumental Screen Landscape",
      materialEn: "Giant vertical silk scroll, monochrome ink (绢本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Museum-Authenticated Autograph by Fan Kuan — bearing concealed signature found inside foliage (1958).",
      artistSchoolEn: "Northern Monumental Cliff School",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Generous Shaanxi hermit living amidst Mount Zhongnan & Mount Hua, hailed as 'Master of Landscape Across a Thousand Ages'.",
      quoteEn: "Fan Kuan's peaks rise round and unyielding, soaring straight toward high heaven — grasping true bone of mountains beyond peer for a millennium.",
      quoteAuthorEn: "Mi Fu (米芾)",
      quoteSourceEn: "*History of Painting*",
      analysisEn: {
        historicalBackground: "Created as unified Northern Song consolidated order, voicing majestic confidence in cosmic stability and eternal mountain permanence.",
        artistBiography: "Fan Kuan renounced bookish copying early, resolving: 'Better learn from living things than old masters; better still, learn from one's own heart'.",
        artisticComposition: "Three-tiered colossal tablet structure: foreground boulders cross a stream past an obscured mid-ground temple and tiny mule train eclipsed beneath a wall of sandstone occupying two-thirds of the entire silk.",
        brushwork: "Inaugurated dense 'raindrop' and 'sesame-seed' texture dots hammered into stone across tens of thousands of strokes lending granite weight.",
        inkAndColor: "Pure monochrome ink slashes one razor-thin white cataract straight down from heights through mist separating foreground and peak.",
        spatialPerspective: "Definitive High Distance mastery: shrinking travelers to ants exalts towering cliff sublimity directly before the viewer's face.",
        symbolism: "Eternal mountain mass mirrors unmoved Heavenly Order anchoring tiny pilgrims sheltered along forest paths below.",
        philosophicalMeaning: "Embodies Neo-Confucian and Daoist Unity of Heaven and Humanity: humbling small ego before awe-inspiring cosmic truth.",
        artisticLegacy: "Revered by historians Michael Sullivan and James Cahill as supreme summit of East Asian landscape art."
      },
      srEn: {
        scholarlyConsensus: "In 1958 scholar Li Lin-ts'an spotted Fan Kuan's minute two-character signature ('范宽') hidden inside lower-right pilgrim woods under magnification.",
        debatedIssues: "Scholars note possible minor outer silk trimmings during Song Huizong imperial remounting.",
        comparativeContext: "Stands in eternal granite stillness opposite Guo Xi's dynamic undulating *Early Spring*.",
        academicCitations: ["Li Lin-ts'an, *Discovery of Fan Kuan's Concealed Signature*.", "James Cahill, *The Compelling Image*."]
      },
      hotspotsEn: [
        { categoryEn: "Northern Monumental Summit", titleEn: "Two-Thirds Granite Cliff Wall in Dense 'Raindrop Strokes'", detailEn: "Hammered staccato texture dots build crushing geologic presence dominating the upper silk field." },
        { categoryEn: "1958 Signature Discovery", titleEn: "Mule Caravan & Concealed Signature Inside Leafy Woods", detailEn: "Tiny tinkling pack-donkeys anchor human scale right beside Fan Kuan's century-hidden two-character autograph." },
        { categoryEn: "Silk Thread Cataract", titleEn: "White Waterfall Dropping Through Vapor Mist", detailEn: "Bare silk cataract slices dark cliffs cleanly while white valley mist detaches mid-ground shrine from sheer cliff above." }
      ]
    }
    ,"zao-chun-tu": {
      dynastyEn: "Northern Song (1072 CE)",
      creationDateEn: "Renyin Year, 1072 CE (Xining Year 5)",
      genreLabelEn: "Spring Landscape • Three Distances Canon",
      materialEn: "Monumental silk hanging scroll, monochrome ink (绢本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Signed & Dated Imperial Masterpiece inscribed 'Early Spring painted by Guo Xi in Renzi (1072)'.",
      artistSchoolEn: "Northern Song Academy (Li–Guo Landscape)",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Chief court painter under Emperor Shenzong and co-author of *Lofty Ambition of Forests and Streams*, defining East Asia's Three Distances perspective.",
      quoteEn: "A mountain has Three Distances: looking up from foot to summit is High Distance; peering from front across ridges behind is Deep Distance; gazing from near hills to far horizons is Level Distance.",
      quoteAuthorEn: "Guo Xi (郭熙)",
      quoteSourceEn: "*Lofty Ambition of Forests and Streams (Linquan Gaozhi)*",
      analysisEn: {
        historicalBackground: "Painted under Emperor Shenzong during Wang Anshi's bold New Policies reforms, filling melting winter mountains with irrepressible spring vigor.",
        artistBiography: "Guo Xi held Hanlin Scholar-In-Waiting rank, prized by Shenzong above all court landscape masters for recording seasonal atmospheric changes.",
        artisticComposition: "Synthesizes High, Deep, and Level Distances simultaneously across a living serpent-like spine, thawing mountain cascades, returning boatmen, and hikers crossing bridges toward lofty temple spires.",
        brushwork: "Originated swirling 'cloud-scroll texture strokes' for writhing cliffs paired with gnarled spring-budded 'crab-claw' pines.",
        inkAndColor: "Subtle layered damp ink washes conjure warming spring vapor loosening stiff winter frost.",
        spatialPerspective: "Multi-vantage eye travel glides naturally from level ferry bay into misty mountain recesses and towering central spire.",
        symbolism: "Sovereign central peak sheltered by burgeoning spring saplings figures benevolent imperial renewal nourishing peaceful society.",
        philosophicalMeaning: "Embodies *Linquan Gaozhi*'s ideal of landscapes fit for 'gazing, wandering, dwelling, and roaming' — restoring weary officials' inner clarity.",
        artisticLegacy: "Supreme Northern Song Court Academy benchmark anchoring the Li–Guo tradition through Song, Liao, Jin, and Yuan."
      },
      srEn: {
        scholarlyConsensus: "Preeminent surviving unity of Northern Song painting treatise theory and signed court practice.",
        debatedIssues: "Scholars trace intimate affinity between Wang Anshi's civic reform energy and Guo Xi's surging spring morphology.",
        comparativeContext: "Transforms Fan Kuan's granite immobility into living breathing symphony of circulating Qi.",
        academicCitations: ["Guo Si, *Collected Treatise of Forests and Streams*.", "National Palace Museum Taipei, *Guo Xi Early Spring Exhibition Catalog*."]
      },
      hotspotsEn: [
        { categoryEn: "Guo Xi Brush Hallmarks", titleEn: "Boiling 'Cloud-Scroll' Mountain Crags", detailEn: "Writhing organic crags heave upward through thawing morning vapor in billowing dragon-coil rhythm." },
        { categoryEn: "Linquan Gaozhi Applied", titleEn: "'Crab-Claw' Pine Twigs Awakening With Spring", detailEn: "Angular gripping branches sprout fresh misted pine needles over cliffside thaw." },
        { categoryEn: "Three Distances Synthesis", titleEn: "High, Deep & Level Distances Coexisting Seamlessly", detailEn: "Level left riverbanks, deep misty central gorges, and towering axial spire fuse effortlessly on one silk vertical." }
      ]
    },
    "wanhe-songfeng-litang": {
      dynastyEn: "Late Northern Song (1124 CE)",
      creationDateEn: "Jiachen Year, 1124 CE (Xuanhe Year 6)",
      genreLabelEn: "Academy Landscape • Axe-Cut Strokes Canon",
      materialEn: "Vertical silk hanging scroll, ink & light pigment (绢本水墨设色)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Signed & Dated Masterpiece inscribed along upper peak: 'Spring of Jiachen Xuanhe (1124) by Li Tang of Heyang'.",
      artistSchoolEn: "Foremost of Four Southern Song Masters",
      artistEraEn: "Northern–Southern Song Bridge",
      artistBioEn: "Visionary bridge master who escaped the 1127 Bianjing fall near age eighty to re-establish Hangzhou's Southern Song Painting Academy.",
      quoteEn: "Li Tang's landscape radiates antique truth lighting human hearts; sweeping wet axe-cut strokes inaugurated the great Song transformation.",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Notes from the Painting-Meditation Studio*",
      analysisEn: {
        historicalBackground: "Finished in Northern Song's ominous twilight just three years before Jin forces captured Bianjing in 1127, brimming with tense defiance.",
        artistBiography: "As Xuanhe Academy painter-in-attendance, Li Tang shattered soft mist nostalgia using bold slanted flat-brush granite chops.",
        artisticComposition: "Drives cliffs terrifyingly close-up: foreground wind-whipped ancient pines grip rock below thundering gorge cascades while jagged granite ridges tower straight forward.",
        brushwork: "Pioneered 'Big Axe-Cut Texture Strokes' (Da Fupi Cun) slashing flat wet brushes diagonally to chisel razor-sharp crystalline granite facets.",
        inkAndColor: "Deep black saturated washes merge with cool blue-green pine glazes echoing wind howling across countless valleys.",
        spatialPerspective: "Close-up claustrophobic grandeur thrusts chill rock spray straight into the viewer's face.",
        symbolism: "Tenacious mountain pines rooting directly inside cracked stone symbolize unyielding moral resilience amid looming crisis.",
        philosophicalMeaning: "Celebrates defiant endurance and tragic vitality confronting turbulent historical destiny.",
        artisticLegacy: "Greatest brushwork watershed of mid-Song painting, launching Ma Yuan and Xia Gui's Southern Song court idiom."
      },
      srEn: {
        scholarlyConsensus: "Forms together with *Travelers* and *Early Spring* Taipei's priceless 'Northern Song Landscape Triad'.",
        debatedIssues: "Hidden left-peak rock inscription authenticates exact 1124 date just ahead of dynastic upheaval.",
        comparativeContext: "Replaces Fan Kuan's stippled sandstone texture with crisp chiseled axe-cut granite planes.",
        academicCitations: ["National Palace Museum, *Studies on Li Tang's Wind in Pines*.", "Chen Zhenlian, *Song Academy Aesthetics*."]
      },
      hotspotsEn: [
        { categoryEn: "Southern Song Turn", titleEn: "'Big Axe-Cut' Flat Brush Strokes Cleaving Granite", detailEn: "Slanted loaded brushstrokes hack sharp faceted rock planes breaking cleanly with round Northern Song mounds." },
        { categoryEn: "Visual Acoustics", titleEn: "Dark Screaming Pines & Frothing White Gorge Stream", detailEn: "Layered blue-green pines echo roaring valley wind cascading over sharp boulders." },
        { categoryEn: "1124 Rock Signature", titleEn: "Hidden Cliffside Signature Dated 1124 CE", detailEn: "Left crag inscription verifies pre-1127 Northern Song date prior to Hangzhou relocation." }
      ]
    },
    "qingming-shanghe": {
      dynastyEn: "Northern Song Xuanhe Era (Early 12th Century CE)",
      creationDateEn: "c. 1101–1110 CE (Emperor Huizong Reign)",
      genreLabelEn: "Ruled Architectural Painting • Urban Genre",
      materialEn: "Long silk handscroll, ink & light washes (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Museum-Authenticated Masterpiece by Zhang Zeduan bearing Jin Zhang Zhu's 1186 colophon.",
      artistSchoolEn: "Northern Song Academy Urban Ruled School",
      artistEraEn: "Northern Song – Jin",
      artistBioEn: "Shandong-born Hanlin Painting Academy master unequaled at precision straightedge ships, bridges, and vivid civic crowds.",
      quoteEn: "Lavish customs and sweeping urban expanse brim truly with living spirit; disciplined geometry misses not a hair's breadth — an eternal marvel.",
      quoteAuthorEn: "Zhang Zhu / Zhang Gongyao",
      quoteSourceEn: "*1186 Handscroll Colophon*",
      analysisEn: {
        historicalBackground: "Documents Bianjing (Kaifeng) at its height as the globe's largest commercial metropolis during spring Qingming vitality.",
        artistBiography: "Zhang Zeduan spent years surveying country lanes, grain docks, wine shops, and city towers to offer Emperor Huizong a panoramic urban mirror.",
        artisticComposition: "Over 5 meters unroll three continuous acts: peaceful eastern willow countryside, frantic Bian River timber Rainbow Bridge crisis, and thriving Gate Tower commercial quarter anchored by Sun Yang Grand Tavern.",
        brushwork: "Virtuoso ruled 'Jiehua' precision drafts boat planking, truss beams, and tile eaves amidst 814 figures, 28 boats, 60 animals, and 30 structures.",
        inkAndColor: "Warm restrained light-color washes over ink skeletons bathe the capital in airy spring brightness.",
        spatialPerspective: "Moving scatter-point aerial scroll perspective glides spectators smoothly like low-flying birds along river and avenues.",
        symbolism: "Below glittering prosperity, a runaway grain barge veers perilously toward the Rainbow Bridge underside — hinting subtly at civic fragility.",
        philosophicalMeaning: "Secular civic epic placing porters, sailors, apothecaries, and street vendors squarely at center of court art.",
        artisticLegacy: "World's most famous urban panorama, spawning hundreds of Ming–Qing reinventions across East Asia."
      },
      srEn: {
        scholarlyConsensus: "Preeminent visual source for Song engineering, shipbuilding, urban commerce, and daily social history.",
        debatedIssues: "Scholars debate whether 'Qingming' refers exclusively to Qingming solar term, 'Clear Peaceful Reign', or an outer Kaifeng ward.",
        comparativeContext: "Predates European civic panoramas like Lorenzetti's Siena frescoes by over two centuries in microscopic animation.",
        academicCitations: ["Zheng Zhenduo, *Studies on Along the River*, Wenwu Press.", "Valerie Hansen, *The Beijing Qingming Scroll*, 1996."]
      },
      hotspotsEn: [
        { categoryEn: "Structural Engineering", titleEn: "Climax at Strutless Arch Rainbow Bridge", detailEn: "Crowds shout above interlocking timber trusses as crews desperately lower masts to clear the rushing grain barge." },
        { categoryEn: "Song Urban Economy", titleEn: "Grand Gate Tower & Sun Yang Tavern Quarter", detailEn: "Captures apothecaries, silk stalls, wine flags, and over 800 vivid citizens thriving inside open market wards." },
        { categoryEn: "Handscroll Overturn", titleEn: "Quiet Countryside Willow Opening on Bian's Eastern Bank", detailEn: "Calm charcoal-donkey caravans ease the viewer softly into bustling urban crescendo." }
      ]
    },
    "qianli-jiangshan": {
      dynastyEn: "Northern Song Zhenghe Reign (1113 CE)",
      creationDateEn: "Zhenghe Year 3 (1113 CE)",
      genreLabelEn: "Grand Blue-Green Mineral Landscape • Court",
      materialEn: "Twelve-meter silk scroll, azurite & malachite minerals",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Museum-Authenticated scroll ascribed to teenage prodigy Wang Ximeng with Cai Jing's 1113 colophon.",
      artistSchoolEn: "Crown of Grand Blue-Green Mineral Painting",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Short-lived prodigy tutored personally inside Emperor Huizong's Palace Academy, completing his sole surviving twelve-meter marvel at age eighteen.",
      quoteEn: "At eighteen Wang Ximeng served in the imperial archives; personally guided by His Majesty, within six months he presented this unmatched masterpiece.",
      quoteAuthorEn: "Cai Jing (蔡京)",
      quoteSourceEn: "*1113 Imperial Colophon*",
      analysisEn: {
        historicalBackground: "Painted under Emperor Huizong expressing dynastic confidence in serene endless imperial mountains and abundant waterways.",
        artistBiography: "Exhausting his short life into nearly twelve meters of luminous stone pigment, Wang Ximeng attained immortal legend.",
        artisticComposition: "Unbroken rolling mountains, serene wide lakes, fishing villages, timber bridges, and arched stone causeways sweep endlessly across 12 meters.",
        brushwork: "Fuses intricate fine-brush pavilions with sinuous hemp-textured mineral peaks and microscopic river waves.",
        inkAndColor: "Crown jewel of Grand Blue-Green craft: pure azurite and malachite layered thick over warm ochre base radiance intact after 900 years.",
        spatialPerspective: "Seamless orchestration of all Three Distances carries viewers effortlessly soaring across continent-wide vistas.",
        symbolism: "Eternal mineral greens and azure peaks embody imperial longevity and boundless abundance.",
        philosophicalMeaning: "Harmonizes human rustic villages seamlessly inside Daoist paradise realms cherished by Emperor Huizong.",
        artisticLegacy: "Supreme sovereign triumph of mineral blue-green landscape across Chinese civilization."
      },
      srEn: {
        scholarlyConsensus: "Among the Palace Museum's most fragile treasures due to thick flaking mineral layers — exhibited only rarely once per decade.",
        debatedIssues: "Historians attribute Wang Ximeng's premature death near age twenty more to exhaustion/illness than legend of court execution.",
        comparativeContext: "Flaming mineral jewel counterpoint to Huang Gongwang's monochrome dried-ink *Fuchun Mountains*.",
        academicCitations: ["Yang Xin, *Wang Ximeng and A Thousand Li Studies*.", "Palace Museum, *Millennium Exhibition of Blue-Green Landscapes*."]
      },
      hotspotsEn: [
        { categoryEn: "Royal Mineral Craft", titleEn: "Layered Azurite & Malachite Over Ochre Silk", detailEn: "Multiple coarse-and-fine stone mineral glazes preserve unearthly jewel luminosity across nine centuries." },
        { categoryEn: "Waterfront Villages", titleEn: "Long Timber Bridges Linking Lake Villages", detailEn: "Tiny reed-mat stalls, watermills, and fishing boats punctuate serene waterways uniting distant peaks." },
        { categoryEn: "Historical Provenance", titleEn: "Cai Jing's 1113 Postscript & Qianlong Imperial Ode", detailEn: "Signed colophons document Wang Ximeng's eighteen-year-old creation inside Huizong's academy." }
      ]
    },
    "rui-he-tu": {
      dynastyEn: "Northern Song Zhenghe Reign (1112 CE)",
      creationDateEn: "Zhenghe Year 2 (1112 CE)",
      genreLabelEn: "Imperial Auspicious Bird-and-Flower • Fine Brush",
      materialEn: "Silk handscroll, mineral pigments (绢本设色)",
      museumEn: "Liaoning Provincial Museum, Shenyang",
      attributionEn: "Imperial Autograph & Slender-Gold Poem signed directly by Emperor Huizong.",
      artistSchoolEn: "Northern Song Academy Summit & Slender-Gold",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Eighth Northern Song Emperor — tragic statesman yet supreme artist-connoisseur who invented razor-sharp Slender-Gold calligraphy.",
      quoteEn: "Dawn tints palace eaves with auspicious five-color clouds as celestial cranes flock home circling with resonant song.",
      quoteAuthorEn: "Emperor Huizong Zhao Ji",
      quoteSourceEn: "*Imperial Autograph Poem on Scroll*",
      analysisEn: {
        historicalBackground: "Records a wondrous Lantern Festival dusk prodigy (1112) when twenty snow-white cranes wheeled serenely atop Bianjing's Xuande Gate roof.",
        artistBiography: "Huizong demanded scientific observational rigor across Academy ranks alongside refined poetic allusion.",
        artisticComposition: "Radical framing crops palaces away completely save the vermilion Xuande Gate ridge poking through drifting clouds beneath eighteen flying and two perched cranes.",
        brushwork: "Fine hairline feather outlining accented with gleaming lacquer droplets giving living sheen to crisp crane pupils.",
        inkAndColor: "Vast seamless mineral azurite azure sky throws glowing ivory feathers and golden roof tiles into surreal sacred clarity.",
        spatialPerspective: "Vertiginous skyward crop breaks traditional groundlines centuries before modern compositional framing.",
        symbolism: "Daoist cranes signify cosmic blessing and timeless dynastic stability.",
        philosophicalMeaning: "Supreme synthesis of Poetry, Calligraphy, and Painting voicing Huizong's Daoist aesthetic idealism.",
        artisticLegacy: "Unsurpassed benchmark uniting exquisite court bird painting and metallic Slender-Gold calligraphy."
      },
      srEn: {
        scholarlyConsensus: "Crown jewel at Liaoning confirming unified imperial poem, painting, and autograph signature.",
        debatedIssues: "Poignant historical irony: celebrating 'eternal peace' just fifteen years before Bianjing's 1127 fall.",
        comparativeContext: "Flat ungraded azure sky field predates modern formal abstraction by centuries.",
        academicCitations: ["Liaoning Museum, *Huizong's Auspicious Cranes Monograph*.", "Maggie Bickford, *Emperor Huizong and Poetic Space*."]
      },
      hotspotsEn: [
        { categoryEn: "Imperial Symmetrical Halo", titleEn: "Twenty Snow-White Cranes Wheeling in Blue Heaven", detailEn: "Eighteen gliding cranes circle two standing peacefully atop imperial roof dragons." },
        { categoryEn: "Audacious Cropping", titleEn: "Xuande Gate Roof Cutting Through Five-Color Clouds", detailEn: "Omitting street and walls entirely thrusts attention vertically into pure serene sky." },
        { categoryEn: "Slender-Gold Autograph", titleEn: "Emperor Huizong's Signature Poem in Slender-Gold", detailEn: "Knife-crisp hooked strokes recount the 1112 Lantern Festival omen on attached silk." }
      ]
    },
    "furong-jinji": {
      dynastyEn: "Northern Song (Early 12th Century CE)",
      creationDateEn: "c. 1105–1115 CE",
      genreLabelEn: "Academy Bird-and-Flower • Five Confucian Virtues",
      materialEn: "Silk hanging scroll, mineral pigments (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Imperial Painting bearing Emperor Huizong's distinctive cypher signature 'Sole Person Under Heaven' (天下一人).",
      artistSchoolEn: "Northern Song Academy Summit",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Royal connoisseur who elevated poetic examination prompts into lyrical ornithological fine-brush mastery.",
      quoteEn: "In autumn frost resolute against chill wind, high-crowned and brocade-plumed; displaying complete Five Virtues cleanly, outshining ordinary talent.",
      quoteAuthorEn: "Emperor Huizong Zhao Ji",
      quoteSourceEn: "*Imperial Poem on Hibiscus & Pheasant*",
      analysisEn: {
        historicalBackground: "Uses Confucian Five-Virtue animal symbolism — Martial Crest, Courage, Humanness, Faithfulness — packaged as serene autumn court poetry.",
        artistBiography: "Obsessed with botanical precision down to leaf veins bowed gently beneath physical bird weight.",
        artisticComposition: "Sweeping S-curve arches an autumn hibiscus bough downward as a golden pheasant pivots upward watching fluttering pair of butterflies above chrysanthemums.",
        brushwork: "Fine hairline contours trace scales along pheasant talons and soft drooping petals.",
        inkAndColor: "Jewel crimson breast, golden ruff, emerald back, and translucent blush hibiscus shimmer against open pale silk.",
        spatialPerspective: "Intimate poetic negative space reserves calm breathing room top-right for Slender-Gold verse.",
        symbolism: "Hibiscus (glory/beauty) paired with golden pheasant (virtue) and chrysanthemum (longevity) wishes 'Everlasting Noble Prosperity'.",
        philosophicalMeaning: "Fuses moral Confucian virtue seamlessly into effortless natural beauty.",
        artisticLegacy: "Eternal archetype for East Asian auspicious palace bird-and-flower compositions."
      },
      srEn: {
        scholarlyConsensus: "Imperial cypher seal and Slender-Gold verse certify flagship court workshop standing.",
        debatedIssues: "Scholars discuss collaborative balance between Huizong's personal touch and Academy assistants finishing washes.",
        comparativeContext: "More poetic and Confucian-emblematic than Huang Quan's zoological sketches.",
        academicCitations: ["Palace Museum, *Studies on Huizong Signed Scrolls*.", "Chen Shuxiang, *Essays on Song Bird-and-Flower Art*."]
      },
      hotspotsEn: [
        { categoryEn: "Physical Realism", titleEn: "Heavy Golden Pheasant Bending Blossoming Hibiscus", detailEn: "Depicts gentle springy branch flex as heavy pheasant claws balance turning toward hovering butterflies." },
        { categoryEn: "Auspicious Pun Coding", titleEn: "Five Virtues Encoded Alongside Hibiscus & Chrysanthemum", detailEn: "Combines scholarly 'Five Virtues' bird lore with botanical visual puns wishing enduring brilliance." },
        { categoryEn: "Academy Polish", titleEn: "Slender-Gold Verse & Raw-Lacquer Raised Eye", detailEn: "Imperial workshops reportedly raised glossy black eye pupils using viscous lacquer beads catching natural light." }
      ]
    },
    "wuma-tu": {
      dynastyEn: "Northern Song Yuanyou Era (Late 11th Century CE)",
      creationDateEn: "c. 1090 CE (Emperor Zhezong Reign)",
      genreLabelEn: "Baimiao Tribute Horses & Grooms",
      materialEn: "Paper handscroll, pure ink & whisper light wash (纸本水墨)",
      museumEn: "Tokyo National Museum, Japan",
      attributionEn: "Authenticated Song Autograph rediscovered in 2019 after seven decades hidden after WWII.",
      artistSchoolEn: "Northern Song Master of Plain Ink Line (Baimiao)",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Erudite Jinshi official and intimate friend of Su Shi and Huang Tingjian celebrated as 'First Master of Plain Ink Line'.",
      quoteEn: "Gonglin draws steeds in pure Baimiao outline — gaining bone and sinew of Han Gan while casting aside flashy pigments, unmatched across history.",
      quoteAuthorEn: "Huang Tingjian (黄庭坚)",
      quoteSourceEn: "*Shangu Colophons on Scroll*",
      analysisEn: {
        historicalBackground: "Documents five prized Khotanese and Tangut tributary stallions led before Song courts, each meticulously labeled with name and origin by poet Huang Tingjian.",
        artistBiography: "Li Gonglin spent hours quietly observing imperial stables until memorizing each charger's breath and gait.",
        artisticComposition: "Five serene independent pairings show prized named stallions led calmly by distinctly attired Central Asian and Chinese grooms.",
        brushwork: "Summit of monochrome Baimiao: hairline fluctuating ink strokes trace supple flank muscles, glossy ribs, and leather bridles cleanly without shading fill.",
        inkAndColor: "Micro-nuanced dry-to-saturated greys with the subtlest hint of warm ochre/wash on the fourth charger.",
        spatialPerspective: "Eliminates landscape scenery completely so psychological nobility of horses and dignified grooms commands blank paper.",
        symbolism: "Noble thousand-li chargers figure virtuous scholars awaiting wise sovereign recognition.",
        philosophicalMeaning: "Enacts literati ideals stripping ostentatious court paint down to skeletal moral clarity.",
        artisticLegacy: "Supreme Baimiao benchmark inspiring Zhao Mengfu, Ren Renfa, and Xu Beihong's equestrian masters."
      },
      srEn: {
        scholarlyConsensus: "Unveiled dramatically at Tokyo National Museum in 2019 — heralded as the 21st century's most sensational Song rediscovery.",
        debatedIssues: "Conservation photography in 2019 revealed delicate transparent washes overturning strict pure-monochrome assumptions.",
        comparativeContext: "Trades Tang plumper fleshy steeds of Han Gan for cool aristocratic bone elegance.",
        academicCitations: ["Tokyo National Museum, *Li Gonglin Five Horses Exhibition Catalog*, 2019.", "Huang Tingjian, *Colophons on Five Horses*."]
      },
      hotspotsEn: [
        { categoryEn: "Literati Baimiao", titleEn: "Pure Ink Line Muscularity Stripping Heavy Pigment", detailEn: "Thin-thick modulated contours sculpt equine shoulder tendons cleanly without opaque color clutter." },
        { categoryEn: "Silk Road Ethnography", titleEn: "Central Asian, Tibetan & Han Imperial Grooms", detailEn: "Deep-set beards, boots, and court robes capture varied personalities calmly with zero caricature." },
        { categoryEn: "2019 Archival Miracle", titleEn: "Huang Tingjian Autograph Labels Naming Each Charger", detailEn: "Original pedigree inscriptions confirm each stallion's name ahead of post-1945 private disappearance and 2019 rediscovery." }
      ]
    },
    "chushan-ruiai": {
      dynastyEn: "Northern–Southern Song Transition (12th Century CE)",
      creationDateEn: "12th Century CE",
      genreLabelEn: "Mi-Family Cloudy Mountains • Literati Ink",
      materialEn: "Paper scroll, monochrome ink & light mist tones",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Mi-Family Cloudy Mountains Masterwork at Taipei Palace Museum.",
      artistSchoolEn: "Mi Cloudy Mountains / 'Mi Dot' School",
      artistEraEn: "Northern–Southern Song",
      artistBioEn: "Father-and-son poets/calligraphers Mi Fu & Mi Youren who replaced outlines with wet horizontal blobs capturing dripping Jiangnan fog.",
      quoteEn: "The Mi dots despise pettiness, gathering ink drops effortlessly into form — drifting fogs sketched in joyful uncalculated spontaneity.",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Notes from Painting-Meditation Studio*",
      analysisEn: {
        historicalBackground: "Born amid rising Song literati rebellion against Academy precision in favor of spontaneous emotional brushwork.",
        artistBiography: "Irreverent polymath Mi Fu (who famously bowed to a whimsical rock calling it 'Elder Brother') and son Youren turned soggy river weather into visual poetry.",
        artisticComposition: "Soft vaporous ridges float lazily behind white cloud bands above rain-soaked foreground trees and quiet riverside reeds.",
        brushwork: "Discards mountain contours and rocky texture lines completely, stamping broad wet horizontal ink ovals ('eggplant/Mi dots') edge-to-edge.",
        inkAndColor: "Mastery of dripping wet-on-wet saturation on damp paper summons humid Jiangnan spring drizzle tangibly.",
        spatialPerspective: "Dissolves solid boundary between hill and vapor inside boundless atmospheric drift.",
        symbolism: "Shifting ink clouds mirror worldly transience and unattached scholar spirit.",
        philosophicalMeaning: "Bridges Daoist primal chaos and Chan Emptiness: beauty resides inside shifting vital flux, never rigid geometry.",
        artisticLegacy: "Anticipated Western Impressionism and Pointillism by seven centuries while shaping Yuan literati revolution."
      },
      srEn: {
        scholarlyConsensus: "Landmark technical breakthrough abandoning contour outlines permanently.",
        debatedIssues: "Museum scholars examine subtle contrast between Mi Fu's bold looseness and Mi Youren's refined studio polish.",
        comparativeContext: "Pioneered perceptual dot optics centuries prior to European Seurat or Monet.",
        academicCitations: ["James Cahill, *Mi Cloudy Mountains & Southern Song Ink*.", "Pan Yungao, *Song Painting Treatises*."]
      },
      hotspotsEn: [
        { categoryEn: "Mi Family Innovation", titleEn: "Rainy Mountains Sculpted Purely Without Outlines", detailEn: "Stacked wet horizontal ovoid 'Mi dots' absorb water organically to birth rolling humid crests." },
        { categoryEn: "Eloquently Blank Mist", titleEn: "Blank White Horizontal Vapor Bands Parting Slopes", detailEn: "Preserved bare paper cuts drifting white clouds neatly across saturated slopes." },
        { categoryEn: "Literati Freedom", titleEn: "Amateurs Playing With Saturated Ink Moisture", detailEn: "Prioritizes poetic atmospheric sensation squarely over stiff drafting precision." }
      ]
    },
    "kumu-guaishi": {
      dynastyEn: "Northern Song (11th Century CE)",
      creationDateEn: "c. 1094–1097 CE (During Huizhou Exile)",
      genreLabelEn: "Literati Sketch • Expressive Ink Play",
      materialEn: "Paper handscroll, pure monochrome ink (纸本水墨)",
      museumEn: "International Private Collection (Christie's HK Exhibition, 2018)",
      attributionEn: "Authenticated to Su Shi (Su Dongpo) backed directly by Mi Fu and Liu Liangzuo attached colophons.",
      artistSchoolEn: "Founder of East Asian Literati Painting",
      artistEraEn: "Northern Song (北宋)",
      artistBioEn: "Foremost Song poet-statesman and theorist uniting poetry, calligraphy, and unpretentious personal brushwork as scholar self-expression.",
      quoteEn: "Anyone who judges painting merely by outward likeness shares the understanding of a child; poetry and painting share one heavenly rule of spontaneous nature.",
      quoteAuthorEn: "Su Shi (苏轼)",
      quoteSourceEn: "*Two Poems on Branch Paintings by Prefect Wang*",
      analysisEn: {
        historicalBackground: "Composed after Su Shi's devastating Crow Terrace Poetry Trial and southern banishment — venting defiance rather than peddling craft.",
        artistBiography: "Su Dongpo wrested painting decisively away from hired court artisans into the free realm of scholar poets.",
        artisticComposition: "Bare minimalist triad: one twisted broken dead trunk writhing skyward beside a coiled whirlpool boulder and sharp grass blades.",
        brushwork: "Applies wild dry cursive calligraphy directly to gnarled bark alongside swirling circular dry-ink stone whorls.",
        inkAndColor: "Forbids decorative colors completely, using seared bitter dry ink radiating austere inner fortitude.",
        spatialPerspective: "Discards spatial illusion cleanly for raw abstract emblem of moral character.",
        symbolism: "Storm-broken yet unbroken trunk plus jagged granite snail-boulder embody the exiled scholar's unbreakable spine.",
        philosophicalMeaning: "Embodies Zhuangzi's 'Withered Wood & Dead Ashes': absolute inner freedom once worldly honors fall away.",
        artisticLegacy: "East Asian Literati Painting's Declaration of Independence (fetching 463M HKD in 2018).",
      },
      srEn: {
        scholarlyConsensus: "Sole surviving painting attributed directly to Su Dongpo verified by attached autograph Mi Fu colophon.",
        debatedIssues: "Emergence from wartime Japanese privacy in 2018 sparked global forensic paper and seal examination.",
        comparativeContext: "Opposite pole to Xuanhe palace opulence — raw unadorned integrity above decorative polish.",
        academicCitations: ["Christie's Hong Kong Monograph, *Wood and Rock: Story of a Masterpiece*, 2018.", "Chen Chuanxi, *Su Dongpo and Literati Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Calligraphy-Painting Unity", titleEn: "Wild Cursive 'Broken Timber' Writhing Upward", detailEn: "Bone-dry cursive sweeps channel exiled anguish directly into twisted antler-like boughs." },
        { categoryEn: "Unbowed Moral Emblem", titleEn: "Vortex-Coiled Strange Rock & Frost-Resistant Bamboo", detailEn: "Spiraling ink boulder and sharp grass shoots stand unbroken against political tempest." },
        { categoryEn: "Literati Manifesto", titleEn: "Attached Mi Fu Verse Canonizing Non-Likeness", detailEn: "Adjacent Northern Song inscriptions formulate China's classic creed prioritizing inner resonance above photographic likeness." }
      ]
    },
    "libai-hangyin": {
      dynastyEn: "Southern Song (Early 13th Century CE)",
      creationDateEn: "c. 1200 CE",
      genreLabelEn: "Reduced-Brush Chan Figure Ink Painting",
      materialEn: "Vertical paper scroll, monochrome ink (纸本水墨)",
      museumEn: "Tokyo National Museum, Japan (Important Cultural Property TA-164)",
      attributionEn: "Authenticated Masterwork preserving genuine 'Liang Kai' lower-edge autograph signature.",
      artistSchoolEn: "Master of Abbreviated Brush & Chan Ink",
      artistEraEn: "Southern Song (南宋)",
      artistBioEn: "Court painter under Ningzong who hung his imperial Gold Belt on the academy wall and wandered off drinking wine to pioneer rapid Zen brushwork.",
      quoteEn: "Liang Kai loved wine and called himself Madman Liang; academy fellows mocked his wild simplification — unaware that divine spirit awakens precisely where superficial skin vanishes.",
      quoteAuthorEn: "Xia Wenyan (夏文彦)",
      quoteSourceEn: "*Precious Mirror of Painting*",
      analysisEn: {
        historicalBackground: "Sprang from Hangzhou Southern Song Chan enlightenment fever celebrating sudden spontaneous intuition above rigid academic rules.",
        artistBiography: "Madman Liang slashed brush strokes down to bare vital lightning flashes conveying timeless spirit instantly.",
        artisticComposition: "Strolling bare-chested into boundless white blank paper, Li Bai tilts skyward chanting lines with fluttering sleeves.",
        brushwork: "Four or five sweeping pale wide-knife robe slashes anchor a razor-sharp face and wind-tossed beard.",
        inkAndColor: "Pitting wet diluted ink sleeves cleanly against needle-sharp black hair-dots on absorbent paper.",
        spatialPerspective: "Empty cream paper expands instantaneously into infinite poetic skies around the wandering Immortal Poet.",
        symbolism: "Haughty uplifted chin incarnates Li Bai's refusal to 'stoop low bowing waist before bloated power'.",
        philosophicalMeaning: "Purest Chan visual koan: sudden awakening beyond sacred script, shedding outward ornament for untamed freedom.",
        artisticLegacy: "Direct fountainhead for Muromachi Japanese Zen ink legends Sesshū and Hakuin.",
      },
      srEn: {
        scholarlyConsensus: "Designated Japanese Important Cultural Property (TA-164); pivotal milestone of Song Zen transmission overseas.",
        debatedIssues: "Slender corner signature confirms pre-departure autograph provenance around 1200.",
        comparativeContext: "Predates Western modernist ink gestures (Matisse/Picasso line economy) by seven centuries.",
        academicCitations: ["Tokyo National Museum, *Liang Kai & Song–Yuan Zen Painting Catalog*.", "Suzuki Kei, *Southern Song Zen Art*."]
      },
      hotspotsEn: [
        { categoryEn: "Abbreviated Zen Economy", titleEn: "Head Tilted Skyward in Half-Closed Rapture", detailEn: "Miraculously captures Li Bai's proud unearthly detachment using scarcely ten minimal strokes." },
        { categoryEn: "Explosive Robe Sweep", titleEn: "Four Pale Broad-Brush Robe Strokes", detailEn: "Slashed wide wet washes suggest billowing hemp cloth catching quiet night mountain breezes." },
        { categoryEn: "Infinite Void", titleEn: "Pure Blank Paper as Moonlit Cosmos", detailEn: "Total emptiness isolates poet-vagrant seamlessly inside boundless freedom." }
      ]
    },
    "dage-tu": {
      dynastyEn: "Southern Song (Early 13th Century CE)",
      creationDateEn: "c. 1200–1210 CE (Emperor Ningzong Reign)",
      genreLabelEn: "Folk–Court Landscape • One-Corner Ma Style",
      materialEn: "Monumental silk hanging scroll, ink & subtle color (绢本水墨设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Masterpiece bearing Emperor Ningzong's imperial poem celebrating rustic harvest joy.",
      artistSchoolEn: "Ma–Xia Southern Song Academy School",
      artistEraEn: "Southern Song (南宋)",
      artistBioEn: "Fifth-generation court painter in Hangzhou famed as 'One-Corner Ma' for anchoring heavy cliffs diagonally beside sweeping poetic voids.",
      quoteEn: "Night rain washes capital gardens clean; morning sun gilds tranquil walls. Harvest peace rejoices field and manor alike; folk stomp and sing along green ridges.",
      quoteAuthorEn: "Emperor Ningzong Zhao Kuo",
      quoteSourceEn: "*Imperial Poem Inscribed on Scroll*",
      analysisEn: {
        historicalBackground: "Celebrates bountiful rice harvests across Hangzhou outskirts under Emperor Ningzong.",
        artistBiography: "Ma Yuan refined sharp axe-cut clarity paired with vast dreamy Southern lakes and atmospheric silence.",
        artisticComposition: "Splits starkly across three poetic registers: tipsy barefoot elders stomping village mud tracks lower-left, luminous mist band cutting mid-ground, and lofty palace eaves atop distant crags above.",
        brushwork: "Razor-sharp axe-cut rocks meet jagged bent-arm pine limbs stabbing forcefully across empty fog.",
        inkAndColor: "Deep foreground ink washes anchor distant pale blue-green peaks floating ethereally.",
        spatialPerspective: "Canonical 'Ma One-Corner' balance concentrates diagonal solid mass lower-left to liberate radiant upper-right void.",
        symbolism: "Tipsy rustic villagers mirrored beneath distant palace pavilions celebrate social peace uniting ruler and peasant.",
        philosophicalMeaning: "Embodies poignant Southern Song aesthetic of 'Leftover Hills and Waters' finding intimate wholeness amidst truncated borders.",
        artisticLegacy: "Canonical Southern Song spatial blueprint echoed deeply across Joseon and Muromachi traditions."
      },
      srEn: {
        scholarlyConsensus: "Preeminent surviving unity pairing Ma Yuan's intact brush with Ningzong's imperial poem.",
        debatedIssues: "Critics weigh idealized royal propaganda against unmistakable genuine warmth in the stumbling singing elders.",
        comparativeContext: "Dramatic leap in empty-space economy away from packed Northern Song panoramas.",
        academicCitations: ["Palace Museum, *Studies on Ma Yuan's Stepping and Singing*.", "James Cahill, *The Lyric Journey*."]
      },
      hotspotsEn: [
        { categoryEn: "Ma One-Corner Law", titleEn: "Diagonal Cliff & Void Mist Band Geometry", detailEn: "Anchors crisp axe-cut spires low-left so blank river mist breathes effortlessly upward right." },
        { categoryEn: "Harvest Folk Humor", titleEn: "Four Tipsy Elders Clapping & Stomping Mud Paths", detailEn: "Barefoot peasants clutching bamboo canes animate genuine rustic mirth rarely graced at court." },
        { categoryEn: "Imperial Quatrain", titleEn: "Emperor Ningzong's Autograph Harvest Quatrain Top-Right", detailEn: "Royal seal and calligraphy elevate countryside harvest rejoicing into dynastic state harmony." }
      ]
    },
    "quehua-qiuse": {
      dynastyEn: "Yuan Dynasty (1295 CE)",
      creationDateEn: "Yiwei Year, 1295 CE (Yuan Chengzong Reign)",
      genreLabelEn: "Literati Archaic Nostalgia Landscape",
      materialEn: "Horizontal paper handscroll, ink & soft minerals (纸本设色)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Signed & Dedicated Masterpiece dated 1295 painted by Zhao Mengfu for exiled friend Zhou Mi.",
      artistSchoolEn: "Great Patriarch of Yuan Literati Painting",
      artistEraEn: "Yuan Dynasty (元朝)",
      artistBioEn: "Song imperial scion who served reluctant Yuan office yet transformed East Asian art forever by uniting 'Antiquarian Spirit' with calligraphic brushwork.",
      quoteEn: "In painting, value above all the 'Spirit of Antiquity' (Guyi); without ancient resonance, clever likeness is useless. Calligraphy and painting share one common root.",
      quoteAuthorEn: "Zhao Mengfu (赵孟頫)",
      quoteSourceEn: "*Collected Works of Songxue Studio*",
      analysisEn: {
        historicalBackground: "Painted in Khanbaliq (Beijing) from pure memory to comfort Jinan-descended southerner friend Zhou Mi who had never beheld his ancestral Shandong hills.",
        artistBiography: "Zhao Mengfu steered Chinese art permanently from professional optical polish toward unforced archaic calligraphic sincerity.",
        artisticComposition: "Two contrasting peaks — roundedloaf-shaped Mount Qiao left and spear-sharp Huabuzhu right — flank marsh reeds, thatched cottages, grazing goats, and vermilion autumn trees.",
        brushwork: "Round unhurried Seal-style brushstrokes outline awkward archaic trunks and dry reeds intentionally shedding slick Academy gloss.",
        inkAndColor: "Warm brick-red autumn foliage gleams quietly alongside earthy ochre reefs and pale watery cyan marshes.",
        spatialPerspective: "Deliberately flat Archaic-Tang tilted ground-plane abandons linear depth to honor nostalgic mind's-eye memory.",
        symbolism: "Paired twin homeland peaks immortalize steadfast friendship and cultural identity through foreign conquest.",
        philosophicalMeaning: "'Antiquarian Spirit' ('Guyi') reclaims uncorrupted Jin–Tang simplicity to heal scholar dignity under Mongol rule.",
        artisticLegacy: "Opening manifesto of Yuan Literati triumph revered across Huang Gongwang and Ming–Qing canons."
      },
      srEn: {
        scholarlyConsensus: "Supreme Yuan foundation scroll bearing forty-plus imperial Qianlong collection seals.",
        debatedIssues: "Topographic checks around Jinan show Mount Qiao and Huabuzhu stand miles apart — proving inner 'mind-image' synthesis.",
        comparativeContext: "Deliberate rustic humility opposite Wang Ximeng's opulent Song court minerals.",
        academicCitations: ["National Palace Museum, *Zhao Mengfu Comprehensive Catalog*.", "Chen Gaohua, *Zhao Mengfu & Yuan Literati Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Tang Revivalism", titleEn: "Sharp Spear-Cone Mount Huabuzhu of Memory", detailEn: "Blue-green mineral cap echoes Archaic-Tang innocence while gifting exile Zhou Mi an imagined homeland." },
        { categoryEn: "Intentionally Unslick Craft", titleEn: "Rustic Archaic Fishing Weirs & Grazing Goats", detailEn: "Deliberately childlike linear goats and huts reject smooth Song Academy virtuosity." },
        { categoryEn: "Chromatic Restraint", titleEn: "Crimson Autumn Needles Among Quiet Blue Reeds", detailEn: "Interwoven cinnabar maple clusters calm melancholy marshland across intimate paper." }
      ]
    },
    "xiushi-shulin": {
      dynastyEn: "Yuan Dynasty (Early 14th Century CE)",
      creationDateEn: "c. 1300–1310 CE",
      genreLabelEn: "Calligraphy-In-Painting Manifesto • Monochrome Ink",
      materialEn: "Paper handscroll, pure monochrome ink (纸本水墨)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Masterpiece bearing Zhao Mengfu's iconic rhymed manifesto colophon.",
      artistSchoolEn: "School of Unified Calligraphy & Painting",
      artistEraEn: "Yuan Dynasty (元朝)",
      artistBioEn: "Master of all five script styles who turned bamboo leaves and bare trunks directly into rhythmic brush exercises.",
      quoteEn: "Rocks drawn like Flying-White script, ancient wood like Great Seal! In sketching bamboo you must master the Eight Strokes of Regular Script — whoever grasps this knows Painting and Calligraphy share one root.",
      quoteAuthorEn: "Zhao Mengfu (赵孟頫)",
      quoteSourceEn: "*Poem Inscribed on Scroll*",
      analysisEn: {
        historicalBackground: "Painted explicitly as an academic theoretical manifesto proving how brush-tip calligraphy mechanics drive living landscape marks.",
        artistBiography: "Commanded Seal, Clerical, Regular, Running, and Cursive scripts to infuse rock surfaces with epigraphic character.",
        artisticComposition: "Deceptively terse cluster pairs one angular boulder beside resilient wind-bent bamboo shoots and bare autumn twigs.",
        brushwork: "Literal proof of his inscribed quatrain: rock surfaces streaked with dry split 'Flying-White', trunks coiled like Seal bronze inscriptions, and bamboo blades cut via crisp Clerical stops.",
        inkAndColor: "Single loaded brush on plain paper extracts granite sharpness and elastic leaf vitality purely from ink tone.",
        spatialPerspective: "Eliminates landscape depth completely so attention locks onto calligraphic wrist rhythm.",
        symbolism: "Unyielding rock, hollow humble bamboo, and winter-stripped trunk mirror steadfast scholar rectitude.",
        philosophicalMeaning: "Synthesizes outer Form and inner Idea completely: brushwork becomes direct ethical self-cultivation.",
        artisticLegacy: "Inscribed verse remains China and Vietnam's most frequently cited maxim uniting calligraphy and painting for 700 years."
      },
      srEn: {
        scholarlyConsensus: "Preeminent visual-theoretical manifesto of Yuan literati art theory.",
        debatedIssues: "Microscopic stroke audits verify tight structural kinship between Zhao's dry rocks and archaic Han–Qin stele engravings.",
        comparativeContext: "Elevates Song bamboo sketches of Wen Tong into explicit self-conscious brush theory.",
        academicCitations: ["Palace Museum, *Studies on Elegant Rocks & Sparse Trees*.", "Chen Zhenlian, *Unity of Calligraphy & Painting*."]
      },
      hotspotsEn: [
        { categoryEn: "Epigraphic Dry Brush", titleEn: "Split-Bristle 'Flying-White' Streaked Boulder", detailEn: "Semi-dry dragged brush tips reveal gleaming bare paper slivers channeling Han Imperial Flying-White calligraphy." },
        { categoryEn: "Eight-Stroke Bamboo", titleEn: "Seal-Twist Trunks & Clerical-Blade Leaves", detailEn: "Turning wrists spiral flexible twigs directly alongside crisp sideways Clerical-stop bamboo leaves." },
        { categoryEn: "Immortal Art Axiom", titleEn: "Autograph Manifesto: 'Calligraphy & Painting One Root'", detailEn: "Handwritten colophon right states East Asian brush theory's single foundational law." }
      ]
    },
    "fuchun-shanju": {
      dynastyEn: "Yuan Zhizheng Era (1350 CE)",
      creationDateEn: "1347–1350 CE (Painted in Fuchun River Seclusion)",
      genreLabelEn: "Summit of Literati Ink Landscape",
      materialEn: "Split two-part paper handscroll, ink & dry wash (纸本水墨)",
      museumEn: "National Palace Museum, Taipei (Master Wuyong Scroll) & Zhejiang Museum (Remaining Mountain)",
      attributionEn: "Authenticated Autograph of Huang Gongwang — burned in 1650 funerary fire and preserved famously in twin museums.",
      artistSchoolEn: "Foremost of Four Yuan Masters",
      artistEraEn: "Yuan Dynasty (元朝)",
      artistBioEn: "Eldest of Four Yuan Masters who survived wrongful prison and wandered as a Quanzhen Daoist before launching an unmatched artistic revolution past age fifty.",
      quoteEn: "Old Master Dachi's brush stands wholly beyond dusty worldly conventions — sweeping mountains brimming with boundless expanse where Dong–Ju reaches full maturity.",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Notes from Painting-Meditation Studio*",
      analysisEn: {
        historicalBackground: "Sketched over three serene years meandering Fuchun River banks in retirement for fellow Quanzhen Daoist Master Wuyong past age eighty.",
        artistBiography: "Roamer, musician, diviner, and Daoist philosopher Huang Gongwang distilled effortless lifelong peace across bare paper.",
        artisticComposition: "Over 6.5 meters trace shifting Fuchun hills rightward-to-left: serene opening river bends swell into towering ridges before subsiding quietly onto wide marshlands.",
        brushwork: "Unites supple flowing hemp slopes with layered dry 'parched ink carrying moisture', building transparent luminous rocky ribs.",
        inkAndColor: "Built-up 'accumulated ink' layers stay magically airy and jade-clear despite dense crossing strokes.",
        spatialPerspective: "Unhurried riverboat eye meanders along seasonal peaks at contemplative Daoist drift speed.",
        symbolism: "Lone drifting angler gliding quietly beneath sweeping autumn ranges incarnates unburdened liberation.",
        philosophicalMeaning: "Ultimate realization of Heaven–Human non-duality where humble ego dissolves cleanly inside eternal river hills.",
        artisticLegacy: "Revered as the '*Lantingji Xu* of Chinese Landscape Painting' — reunited dramatically between Taipei and Zhejiang in 2011 after 361 years parted."
      },
      srEn: {
        scholarlyConsensus: "2011 Taipei historic reunion of both burnt segments drew millions globally after 360 years separated.",
        debatedIssues: "Emperor Qianlong famously misauthenticated the Zeming copy as genuine and peppered it with verses while sparing this true Master Wuyong autograph clean open sky.",
        comparativeContext: "Swings total freedom beyond meticulous Song Court craftsmanship.",
        academicCitations: ["National Palace Museum Taipei, *2011 Reunion of Fuchun Mountains Catalog*.", "James Cahill, *Hills Beyond a River*."]
      },
      hotspotsEn: [
        { categoryEn: "Burnt Phoenix History", titleEn: "Split 'Remaining Mountain' & 'Master Wuyong' Halves", detailEn: "Saved from collector Wu Hongyu's deathbed flames in 1650 leaving charred edges bridging Hangzhou and Taipei." },
        { categoryEn: "Masterful Ink Rhythm", titleEn: "Dry 'Accumulated Ink' Sculpting Open Fuchun Hills", detailEn: "Patient pale structural skeletons receive rhythmic dark moss accents only when composition dries clear." },
        { categoryEn: "Fortunate Irony", titleEn: "Empty Open Sky Spared From Imperial Inscriptions", detailEn: "Because Qianlong mistook this genuine scroll for a forgery, bare sky stayed marvelously intact." }
      ]
    },
    "dongting-yuyin": {
      dynastyEn: "Yuan Zhizheng Era (1341 CE)",
      creationDateEn: "Xinsi Year, 1341 CE",
      genreLabelEn: "Literati Hermit Angler Landscape",
      materialEn: "Vertical paper hanging scroll, wet monochrome ink (纸本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Signed & Inscribed Masterwork dated 1341 by Hermit Poet Wu Zhen.",
      artistSchoolEn: "Four Yuan Masters",
      artistEraEn: "Yuan Dynasty (元朝)",
      artistBioEn: "Solitary Jiaxing plum-lover and fortune-teller refusing court patronage, nicknamed 'Plum Blossom Daoist' who signed as hermit fisherman.",
      quoteEn: "Cool evening breezes sweep over Lake Dongting; emerald waves rock a lone skiff gently. One bamboo rod upon drifting timber — across howling storms, peaceful all life long.",
      quoteAuthorEn: "Wu Zhen (吴镇)",
      quoteSourceEn: "*Poem Inscribed on Scroll*",
      analysisEn: {
        historicalBackground: "Expressed southern Han literati withdrawal from Yuan caste hierarchies into pure lakeside fisherman obscurity.",
        artistBiography: "Solitary integrity turned cold disdain of patronage into velvety dark plum-ink and calm lake horizons.",
        artisticComposition: "Vertical split-screen simplicity anchors gnarled foreground twin pines above tranquil open Lake Dongting holding one small fishing skiff below distant mist mountains.",
        brushwork: "Rich rounded blunt-tip ink strokes absorb directly from Dong–Ju, soaking shaggy bark and blunt hills.",
        inkAndColor: "Famed 'deep mellow wet ink': saturated black washes pulse crisp and hydrated without murky heaviness.",
        spatialPerspective: "Broad shimmering blank lake occupies central silence echoing Dongting's vast expanse.",
        symbolism: "Barbless lone fisherman untroubled by catch figures clean conscience beyond bureaucratic traps.",
        philosophicalMeaning: "Channels Zhuangzi's 'Old Fisherman' sage gliding calmly outside human ambition.",
        artisticLegacy: "Consecrated 'Hermit Fisherman' imagery across centuries of East Asian poetry and painting."
      },
      srEn: {
        scholarlyConsensus: "Preeminent surviving vertical masterpiece of Wu Zhen's lush ink style.",
        debatedIssues: "Studies trace tight balance tying Wu Zhen's bold cursive fisherman song seamlessly into hillside silhouette.",
        comparativeContext: "Saturated, warm, and generous compared to Ni Zan's bone-dry frosty emptiness.",
        academicCitations: ["National Palace Museum, *Four Yuan Masters: Wu Zhen Volume*.", "Pan Yungao, *Yuan Painting Theory*."]
      },
      hotspotsEn: [
        { categoryEn: "Wu Zhen Wet-Brush", titleEn: "Blunt Saturated Ink Modeling Misty Lakeside Hills", detailEn: "Plump central-tip black strokes soak thick wet ink directly into soft absorbent Xuan fibers." },
        { categoryEn: "Zhuangzi Emblem", titleEn: "Barbless Solitary Angler Floating in Open Void", detailEn: "Tiny reed boat drifting silently amidst calm lake expanse proclaims spiritual self-sufficiency." },
        { categoryEn: "Tri-Art Balance", titleEn: "Cursive Fisherman Song Balancing Leftward Cliff Mass", detailEn: "Upper cursive verse participates actively as compositional counterweight to heavy left shores." }
      ]
    },
    "liujunzi-tu": {
      dynastyEn: "Yuan Zhizheng Era (1345 CE)",
      creationDateEn: "Yiyou Year, 1345 CE",
      genreLabelEn: "Dry Monochrome Literati Landscape • Minimalist",
      materialEn: "Vertical paper scroll, dry monochrome ink (纸本水墨)",
      museumEn: "Shanghai Museum",
      attributionEn: "Signed Autograph of Ni Zan bearing Huang Gongwang's authenticating title poem.",
      artistSchoolEn: "Four Yuan Masters • Sparse Tranquil Style",
      artistEraEn: "Yuan Dynasty (元朝)",
      artistBioEn: "Wealthy Wuxi scion famed for obsessive cleanliness who gave away entire estates before peasant wars to drift silently by houseboat across Taihu Lakes.",
      quoteEn: "What this humble man calls painting is merely carefree playful brushwork: never seeking outward likeness, solely airing untamed ease in one's breast.",
      quoteAuthorEn: "Ni Zan (倪瓒)",
      quoteSourceEn: "*Qingbi Pavilion Collected Works*",
      analysisEn: {
        historicalBackground: "Completed amidst late-Yuan agrarian uprisings after Ni Zan abandoned estates completely to preserve inner stillness drifting on water.",
        artistBiography: "Refused utterly to paint mortal figures inside pure landscapes ('Where in this dusty world dwells a clean soul?').",
        artisticComposition: "Forged classic 'One River, Twin Banks' geometry: low earthy bank bearing six distinct straight-trunked trees, endless empty white central lake void, and barren distant hill.",
        brushwork: "Slanted 'Folded-Belt Texture Strokes' (Zhedai Cun) drag dry pale ink horizontally then bend abruptly downward cleanly avoiding damp puddles.",
        inkAndColor: "Bone-dry silvery grays cherish ink sparingly 'like gold', radiating crystal chill.",
        spatialPerspective: "Deafening pure stillness empties central lake so no worldly clamor disturbs solitary poise.",
        symbolism: "Six noble timber trees (Pine, Cypress, Camphor, Nanmu, Sophora, Elm) stand steadfast shoulder-to-shoulder against moral storm.",
        philosophicalMeaning: "Peak expression of 'Untrammeled Spirit' ('Yiqi'): safeguarding spotless inner cleanliness amid troubled decline.",
        artisticLegacy: "Revered above all peers by Ming–Qing connoisseurs and canonized by Dong Qichang as supreme aesthetic rank."
      },
      srEn: {
        scholarlyConsensus: "Crown spiritual heirloom of Yuan literati abstraction at Shanghai Museum.",
        debatedIssues: "Huang Gongwang's affixed poem coined the eternal title 'Six Gentlemen' celebrating lifelong master brotherhood.",
        comparativeContext: "Stark austere reduction 180 degrees opposite Wang Meng's swarming mountain labyrinths.",
        academicCitations: ["Shanghai Museum, *Studies on Ni Zan's Six Gentlemen*.", "Chen Chuanxi, *Ni Yunlin's Cleanliness Aesthetics*."]
      },
      hotspotsEn: [
        { categoryEn: "Tree Allegory", titleEn: "Six Straight-Spine Noble Trees Side by Side", detailEn: "Pine, cypress, and elm stand erect on bare mound honoring gentlemanly solidarity in crisis." },
        { categoryEn: "Minimalist Canon", titleEn: "'One Water, Twin Banks' & Dry Folded-Belt Hills", detailEn: "Untouched white central river leaves total silence dividing crystalline bank from pale far hills." },
        { categoryEn: "Master Endorsement", titleEn: "Huang Gongwang Verse Naming 'Six Gentlemen'", detailEn: "Attached colophon cements friendship and immortal symbolic title across six centuries." }
      ]
    },
    "qingbian-yinju": {
      dynastyEn: "Late Yuan (1366 CE)",
      creationDateEn: "Bingwu Year, 1366 CE",
      genreLabelEn: "Dense Maze Literati Landscape",
      materialEn: "Tall narrow paper scroll, monochrome ink (纸本水墨)",
      museumEn: "Shanghai Museum",
      attributionEn: "Authenticated Masterwork crowned by Dong Qichang as 'Supreme Wang Shuming Scroll Under Heaven'.",
      artistSchoolEn: "Four Yuan Masters • Dense Writhing Style",
      artistEraEn: "Late Yuan (元末)",
      artistBioEn: "Grandson of Zhao Mengfu commanding staggering calligraphic energy to weave thousands of turbulent twisting mountain ribbons without choking Qi flow.",
      quoteEn: "Wang Shuming springs from Dong Yuan and Juran — dense intertwined lines pulsing dark and brooding into his own world. This ranks foremost under heaven!",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Notes from Painting-Meditation Studio*",
      analysisEn: {
        historicalBackground: "Painted during fierce 1366 Taihu battlefronts between Zhu Yuanzhang and Zhang Shicheng for an exiled cousin sheltering near Huzhou hills.",
        artistBiography: "Inherited grandfather Zhao Mengfu's brush pedigree yet bent it toward volcanic compressed interior angst.",
        artisticComposition: "Tall cramped vertical chasm stacks writhing rocky crests edge-to-edge squeezing tiny pine-shaded study huts inside dark deep valleys.",
        brushwork: "Unleashed dense 'Unraveled Rope' and swirling 'Ox-Hair Texture Strokes' overlaid with saturated moss stippling vibrating like tectonic pressure.",
        inkAndColor: "Alternates dry rough sweeps and dark rich washes modeling volcanic stratified sandstone folds.",
        spatialPerspective: "Denies spacious sky release almost wholly, sealing viewers inside thrilling winding rocky passages.",
        symbolism: "Looming Mount Bian crags shelter a lone reading scholar amidst civil war inferno beyond.",
        philosophicalMeaning: "Channels late-Yuan existential dread alongside fiercely churning life force.",
        artisticLegacy: "Inspiring Ming–Modern expressionists Shen Zhou, Shitao, and Huang Binhong centuries ahead."
      },
      srEn: {
        scholarlyConsensus: "Core witness to explosive late-Yuan stylistic transition.",
        debatedIssues: "Tragic irony: Wang Meng later served Ming prefectures, became ensnared in Hu Weiyong's purge, and died inside Nanjing prison (1385).",
        comparativeContext: "Seething volcanic density opposing Ni Zan's serene frozen minimalism.",
        academicCitations: ["Shanghai Museum, *Wang Meng's Dwelling in Mt. Qingbian Study*.", "James Cahill, *Hills Beyond a River*."]
      },
      hotspotsEn: [
        { categoryEn: "Dense Expressionism", titleEn: "Writhing 'Ox-Hair' & 'Unraveled-Rope' Crags", detailEn: "Ten thousand tangled hair-fine undulating ink tremors lock mountains inside spiraling tectonic motion." },
        { categoryEn: "Civil War Refuge", titleEn: "Tiny Seated Hermit Reading Amidst Cramped Gorge", detailEn: "Painted in tumultuous 1366 Jiangnan warfare, the fragile figure clings cleanly to inner book-study calm." },
        { categoryEn: "Luminous Sliver", titleEn: "Bright Diagonal Misty Waterfall Slicing Darkness", detailEn: "Thread of empty paper stream releases blinding inner breath through choking obsidian ridges." }
      ]
    },
    "lushan-gao": {
      dynastyEn: "Ming Chenghua Era (1467 CE)",
      creationDateEn: "Dinghai Year, 1467 CE",
      genreLabelEn: "Wu School Monumental Tribute Landscape",
      materialEn: "Large paper hanging scroll, ink & subtle color (纸本水墨设色)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Masterpiece bearing Shen Zhou's long affectionate birthday hymn to teacher Chen Kuan.",
      artistSchoolEn: "Founder of Suzhou Wu School (Four Ming Masters)",
      artistEraEn: "Ming Dynasty (明朝)",
      artistBioEn: "Leader of Four Ming Masters in prosperous Suzhou who declined official rank all life for filial duty and generous community patronage.",
      quoteEn: "Lofty Mount Lu soars towering sternly up into azure vault — abyssal cliffs split by roaring thunder cataracts.",
      quoteAuthorEn: "Shen Zhou (沈周)",
      quoteSourceEn: "*Long Ode Inscribed on Lofty Mount Lu*",
      analysisEn: {
        historicalBackground: "Painted at age forty-one honoring revered teacher Chen Kuan's seventieth birthday — conjuring Chen's ancestral Mount Lu wholly via reverence and imagination without visiting.",
        artistBiography: "Shen Zhou united Wang Meng's swirling richness with Wu Zhen's stout blunt composure into confident Ming optimism.",
        artisticComposition: "Vertical axial hymn elevates the tiny standing teacher admiring thunderous white waterfalls cascading straight past stacked wooded cliffs into clear pools.",
        brushwork: "Adapts Yuan twisted mountain strokes into blunt crisp Ming strokes anchored with sturdy moist ink moss.",
        inkAndColor: "Warm ochre washes paired with cool slate-blue peaks brighten austere Yuan anxiety cleanly into festive sunshine.",
        spatialPerspective: "Heroic High Distance perspective lifts Lu peaks skyward as silent emblem honoring mentorship.",
        symbolism: "Lofty unchanging peak mirrors Confucius's ideal 'Gazing up toward High Mountain Virtue'.",
        philosophicalMeaning: "Marries Confucian filial gratitude to teacher-elders squarely into cosmic natural grandeur.",
        artisticLegacy: "Proclaimed official leadership of Suzhou's Wu School shaping Wen Zhengming and Tang Yin."
      },
      srEn: {
        scholarlyConsensus: "Monumental technical peak and largest intact hanging axis of Shen Zhou's lifetime.",
        debatedIssues: "Proves Ming masters internalized Yuan brush craft wholly to voice clear civic humanity rather than alien exile.",
        comparativeContext: "Sunnier, structurally steady, and socially warmer than Wang Meng's agonized *Qingbian* cliffs.",
        academicCitations: ["National Palace Museum, *Four Ming Masters: Shen Zhou*.", "Chen Chuanxi, *Lofty Mount Lu & Ming Literati Mentality*."]
      },
      hotspotsEn: [
        { categoryEn: "Confucian Teacher Tribute", titleEn: "Thundering Central Spire Honoring Teacher Chen's 70th", detailEn: "Never visiting Lu physically, Shen Zhou transformed imagination into towering emblem honoring educator grace." },
        { categoryEn: "Wu School Synthesis", titleEn: "Plunging Silver Cataract & Sturdy 'Shen' Moss Accents", detailEn: "Blends Yuan twisted hill strata with solid thick blunt strokes founding Suzhou literati confidence." },
        { categoryEn: "Scale & Humility", titleEn: "Tiny Elder Leaning on Staff Below Roaring Falls", detailEn: "White-robed figure beside lower rocks anchors monumental scale across two vertical meters." }
      ]
    }
    ,"gumu-youquan": {
      dynastyEn: "Ming Jiajing Era (1549 CE)",
      creationDateEn: "Jiyou Year, 1549 CE (Age 80)",
      genreLabelEn: "Literati Landscape • Refined 'Xi Wen' Style",
      materialEn: "Narrow tall paper scroll, ink & faint color (纸本水墨)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Late-Life Masterpiece dated age 80 by Wen Zhengming.",
      artistSchoolEn: "Suzhou Wu School (Four Ming Masters)",
      artistEraEn: "Ming Dynasty (明朝)",
      artistBioEn: "Shen Zhou's premier heir who reached age ninety dominating Suzhou letters with gossamer crisp 'Refined Wen' integrity.",
      quoteEn: "Attendant Wen paints warmly and moistly — luminous, refined, expansive yet serene; because human integrity stands high, his art soars loftily.",
      quoteAuthorEn: "Wang Shizhen (王世贞)",
      quoteSourceEn: "*Words from Garden of Arts*",
      analysisEn: {
        historicalBackground: "Composed tranquilly at eighty after renouncing Beijing court intrigue decades prior for tranquil Suzhou gardens.",
        artistBiography: "Overcoming slow youth through patient daily discipline, Wen Zhengming perfected tireless mastery ripening late in age.",
        artisticComposition: "Narrow ascending canyon weaves twin gnarled cypress trunks across clear cold cascades rising toward misty peaks.",
        brushwork: "Pinnacle of 'Fine Wen' delicacy: springy needle-like strokes weave steel toughness seamlessly through feathery cypress needles.",
        inkAndColor: "Autumn-spring water ink fades smoothly from crisp jet accents into cool silver mist untouched by grit.",
        spatialPerspective: "Intimate secluded verticality isolates quiet brook murmur far away from market din.",
        symbolism: "Centuries-old evergreen cypress anchored beside clear springs embodies unwavering scholarly fidelity.",
        philosophicalMeaning: "Synthesizes Daoist serene non-forcing with upright Confucian self-poise inside serene privacy.",
        artisticLegacy: "Defined Suzhou scholar elegance, educating an entire generation of Jiangnan painters and garden designers."
      },
      srEn: {
        scholarlyConsensus: "Preeminent exemplar of 'Human and Brush Growing Mature Together' in late Wen Zhengming.",
        debatedIssues: "Hand-inscribed Hengshan running script shows startling unbroken muscular steadiness at age eighty.",
        comparativeContext: "Prizes quiet lyric filigree over teacher Shen Zhou's blunt broad strokes.",
        academicCitations: ["National Palace Museum, *Wen Zhengming Special Exhibition Catalog*.", "Chen Gaohua, *Studies in Ming Wu School*."]
      },
      hotspotsEn: [
        { categoryEn: "Wu School Filigree", titleEn: "Twisted Cypress Bark Combed in Fine Regular-Script Poise", detailEn: "Every whorled bark knot mirrors disciplined miniature Regular script clarity." },
        { categoryEn: "Transparent Tone", titleEn: "Silver-Ash Brook Mist Flowing Over Cool Pebbles", detailEn: "Refrained pale ash-wash channels incorruptible moral detachment." },
        { categoryEn: "Word–Image Harmony", titleEn: "Slender Vertical Poem Anchoring Tall Narrow Axis", detailEn: "Top corner Running–Regular colophon prolongs upward cypress poise seamlessly." }
      ]
    },
    "shanlu-songsheng": {
      dynastyEn: "Ming Dynasty (Early 16th Century CE)",
      creationDateEn: "c. 1516 CE (Ming Wuzong Reign)",
      genreLabelEn: "Synthesizing Northern–Southern Literati Landscape",
      materialEn: "Large silk hanging scroll, ink & light pigment (绢本水墨设色)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Masterwork stamped 'Master of Peach Blossom Retreat' with self-inscribed poem.",
      artistSchoolEn: "Four Ming Masters • North–South Fusion",
      artistEraEn: "Ming Dynasty (明朝)",
      artistBioEn: "Brilliant Suzhou prodigy Top Provincial Laureate framed in civil exam scandal who lived flamboyantly selling scrolls for wine.",
      quoteEn: "Below hills springs babble past rare visitors; opening doors reveals flying mist alone. Pine winds fill ears washing worldly bone clean.",
      quoteAuthorEn: "Tang Yin (唐寅 / Tang Bohu)",
      quoteSourceEn: "*Poem Inscribed on Whispering Pines*",
      analysisEn: {
        historicalBackground: "Painted mid-career after exam-fraud disgrace forced Tang Yin into defiant wine-fueled freedom at Peach Blossom Pavilion.",
        artistBiography: "Rarely united Song Academy sharpness from teacher Zhou Chen effortlessly with Wu School lyric poetry.",
        artisticComposition: "Grand hanging crag frames scholar pausing upon wooden plank bridge turning slowly with zither boy toward roaring cataracts under gnarled cliffs.",
        brushwork: "Marries diagonal Song axe-cut cliff slashes effortlessly beside soft wet Suzhou pine tufts on lustrous silk.",
        inkAndColor: "Clean silvery ink punctuated sparingly with warm ochre dust and pale malachite breeze.",
        spatialPerspective: "Deep stacked terraces amplify rushing cascade acoustic reverb across gorge depths.",
        symbolism: "Wind roaring through pines tunes nature's purifying symphony cleansing worldly humiliation.",
        philosophicalMeaning: "Embraces Chan 'Six Likes' impermanence (dream, bubble, shadow) converting ambition betrayal into radiant artistic independence.",
        artisticLegacy: "Supreme bridge healing Dong Qichang's sharp divide between Song Academy rigor and Southern Literati lyricism."
      },
      srEn: {
        scholarlyConsensus: "Preeminent surviving philosophical landscape masterpiece by Tang Bohu at Taipei Palace Museum.",
        debatedIssues: "Examines Zhou Chen's direct technical stamp behind Tang's granite cliff faceting.",
        comparativeContext: "Reaches deeper tragic grandeur than Tang's popular market court-lady scrolls.",
        academicCitations: ["National Palace Museum, *Tang Yin Exhibition*, 2014.", "Chiang Chao-shen, *Wen Zhengming & Tang Yin Studies*."]
      },
      hotspotsEn: [
        { categoryEn: "Dual-Lineage Mastery", titleEn: "Melted Large–Small Axe Cuts Across Glossy Silk", detailEn: "Fuses crisp Southern Song Li Tang bevels cleanly inside liquid Suzhou lyrical sensibility." },
        { categoryEn: "Auditory Stillness", titleEn: "Bridge Scholar & Zither Boy Listening to Pine Wind", detailEn: "Poised scholar turning ear toward mountain wind incarnates Tang Bohu's wounded proud spirit." },
        { categoryEn: "Poetic Signature", titleEn: "Autograph Quatrain & 'Peach Blossom' Seal", detailEn: "Bold confident poem balances dark falling waters and pine crowns cleanly." }
      ]
    },
    "hangong-chunxiao": {
      dynastyEn: "Ming Jiajing Era (Mid-16th Century CE)",
      creationDateEn: "c. 1530–1540 CE",
      genreLabelEn: "Courtly Ruled Architecture • Heavy Mineral Color",
      materialEn: "Long silk handscroll, vibrant mineral pigments (绢本重彩设色)",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Masterwork — Longest and grandest Ming Fine-Brush imperial figure scroll.",
      artistSchoolEn: "Four Ming Masters • Heavy Mineral Fine-Brush",
      artistEraEn: "Ming Dynasty (明朝)",
      artistBioEn: "Former Taicang lacquer-artisan trained by Zhou Chen and patronized by giant Suzhou collectors to equal Tang–Song court splendors.",
      quoteEn: "Qiu Ying, Shifu, studied beneath Zhou Chen yet burst out gleaming emerald jade and gold — silk crimsons refined past comparison with ancients.",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Eye of Painting (Huayan)*",
      analysisEn: {
        historicalBackground: "Resurrects Han palace tranquility as luxurious Ming court mirror, incorporating painter Mao Yanshou portraying tragic beauty Wang Zhaojun.",
        artistBiography: "Studying decades inside Xiang Yuanbian's mansion gave Qiu Ying flawless optical mastery of archaic Tang–Song scroll formats.",
        artisticComposition: "Nearly 6 meters animate 115 imperial consorts, eunuchs, peacocks, and court painters plucking zithers, playing Go, dancing, pruning flowers, and posing for portraits through sunlit palatial courtyards.",
        brushwork: "Perfection of geometric straightedge railings and silk hems crisp as single filaments without stiffness.",
        inkAndColor: "'Thick layered mineral colors' blaze in lapis azurite, malachite, vermilion, white lead, and gold leaf tempered in aristocratic refinement.",
        spatialPerspective: "Floating isometric bird's-eye gaze weaves seamlessly across open pavilions, marble terraces, and blooming gardens.",
        symbolism: "Radiant spring palace courts celebrate worldly peace while Zhaojun's portrait alludes subtly to fragile destiny inside beauty.",
        philosophicalMeaning: "Exalts disciplined artisan devotion elevating earthly elegance into luminous visual music.",
        artisticLegacy: "Revered among China's Top Ten Classic Paintings as absolute Ming Gongbi zenith."
      },
      srEn: {
        scholarlyConsensus: "Preeminent intact masterpiece showcasing opulent Ming technical brilliance.",
        debatedIssues: "Illuminates booming Ming art commerce where rich Jiangnan collectors commissioned luxury scrolls matching emperors.",
        comparativeContext: "Expands architectural scale and crowd richness dramatically beyond Tang *Preparing Silk*.",
        academicCitations: ["National Palace Museum, *Qiu Ying Exhibition Monograph*.", "Yang Xin, *Ming Court Style & Qiu Ying*."]
      },
      hotspotsEn: [
        { categoryEn: "Han Tragedy Motif", titleEn: "Mao Yanshou Painting Beauty Wang Zhaojun Under Canopy", detailEn: "Left climax frames portraitist sketching doomed court maiden beneath crimson curtain prior to steppe marriage." },
        { categoryEn: "Ming Elite Leisure", titleEn: "115 Court Ladies at Guqin, Go, Cuju & Embroidery", detailEn: "Detailed garden activities faithfully mirror 16th-century Jiangnan aristocratic estate luxury." },
        { categoryEn: "Mineral Opulence", titleEn: "Layered Vermilion, Lapis, Malachite & Gold Leaf", detailEn: "Self-taught craftsman Qiu Ying rivaled elite literati purely through luminous jewel surface discipline." }
      ]
    },
    "qiuxing-bajing": {
      dynastyEn: "Late Ming Wanli Era (1620 CE)",
      creationDateEn: "Gengshen Year, 1620 CE (Taichang–Tianqi Reign)",
      genreLabelEn: "Album Leaves • Canonical Southern Lineage",
      materialEn: "Eight-leaf ink & color album on paper (纸本设色)",
      museumEn: "Shanghai Museum",
      attributionEn: "Authenticated Album realizing Dong Qichang's own theoretical Southern Lineage revolution.",
      artistSchoolEn: "Huating School • North–South Lineage Theorist",
      artistEraEn: "Late Ming (明末)",
      artistBioEn: "Nanjing Minister of Rites and towering connoisseur whose North–South Buddhist Chan metaphor reorganized four centuries of art history.",
      quoteEn: "Just as Chan Buddhism split into Northern and Southern schools under Tang, so Painting branched between Li Sixun's Northern craft and Wang Wei's sudden Southern ink liberation!",
      quoteAuthorEn: "Dong Qichang (董其昌)",
      quoteSourceEn: "*Notes from the Painting-Meditation Studio*",
      analysisEn: {
        historicalBackground: "Painted during a 1620 autumn canal boat journey between Jingkou and West Lake directly enacting his Southern Lineage principles.",
        artistBiography: "Wielding unrivaled institutional taste, Dong Qichang canonized Dong Yuan, Juran, and the Four Yuan Masters above descriptive skill.",
        artisticComposition: "Eight intimate album plates strip landscape down into startling rhythmic balancing planes tilting geometric blocks across blank white water.",
        brushwork: "Round poised center-tip ink lines treat ridges purely as abstract calligraphic rhythms rather than geological texture mimicry.",
        inkAndColor: "Sublime unexpected accents blend velvet pine-soot with cinnabar-peach mist, lemon ochre, and whisper cyan washes.",
        spatialPerspective: "Defiantly rejects Jesuit Western vanishing-point optics entering late-Ming China to restore flat calligraphic rhythm.",
        symbolism: "Tranquil clear autumn stands free of decay sorrow as ripened enlightened clarity.",
        philosophicalMeaning: "Synthesizes Southern Chan sudden intuition directly into abstract visual music beyond optical imitation.",
        artisticLegacy: "Direct conceptual parent to Qing's orthodox Four Wangs and astonishingly modern structural abstractions."
      },
      srEn: {
        scholarlyConsensus: "Shanghai's definitive material realization of Dong Qichang's conceptual painting revolution.",
        debatedIssues: "Art historians long critique Dong's partisan downplaying of professional artisans in favor of elite scholar amateurs.",
        comparativeContext: "Startling structural affinity with Paul Cézanne's tilted tectonic plane abstractions three centuries later.",
        academicCitations: ["Celia Carrington Riely, *Tung Ch'i-ch'ang's Autumn Landscapes*, 1992.", "Chen Chuanxi, *Critique of Dong Qichang*."]
      },
      hotspotsEn: [
        { categoryEn: "Proto-Abstraction", titleEn: "Tilted Tectonic Rock Planes Breaking Gravity", detailEn: "Defying natural proportion, compressed angular rock planes interlock centuries before Western Cubism." },
        { categoryEn: "Five-Ink Palette", titleEn: "Translucent Cinnabar-Yellow Washes Over Dry Ink", detailEn: "Pure calligraphic 'momentum lines' organize autumn groves around rhythmic open breath." },
        { categoryEn: "Southern Lineage Charter", titleEn: "Autograph Leaves Defining 400 Years of Taste", detailEn: "Self-inscribed notes codify Ming–Qing literati devotion to inner brush structure." }
      ]
    },
    "mo-putao": {
      dynastyEn: "Late Ming Wanli Era (Late 16th Century CE)",
      creationDateEn: "c. 1580–1590 CE",
      genreLabelEn: "Grand Freehand Splashed-Ink Expressionism",
      materialEn: "Tall vertical paper scroll, pure monochrome ink (纸本水墨)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Masterwork bearing Xu Wei's heartbreaking self-elegiac quatrain.",
      artistSchoolEn: "Founder of Grand Freehand Bird-and-Flower",
      artistEraEn: "Late Ming (明代万历)",
      artistBioEn: "Tragic polymath playwright and poet who failed eight exams, survived nine suicide attempts and seven prison years to unleash unleashed ink fury.",
      quoteEn: "Half a lifetime destitute, now old beside empty study beams; bright pearls beneath my brush find nowhere to sell — better fling them out among wild bramble vines!",
      quoteAuthorEn: "Xu Wei (徐渭)",
      quoteSourceEn: "*Poem Inscribed on Grapes in Ink*",
      analysisEn: {
        historicalBackground: "Brushed in bitter poverty after prison release — roaring solitary grief against indifferent Ming corruption.",
        artistBiography: "Flinging convention aside, Xu Wei paved wild freedom later trodden by Bada Shanren and Qi Baishi.",
        artisticComposition: "Avalanching thorny vine plunges diagonally from upper corner scattering drenched glistening obsidian grape pearls downward through chaos.",
        brushwork: "Unleashed wet splashed washes and dry splintered cursive sword-slashes sweeping effortlessly past rigid contour edges.",
        inkAndColor: "Water pools saturate raw absorbent Xuan paper making dark grape spheres gleam moistly like ebony pearls among tattered shadows.",
        spatialPerspective: "Dizzied off-balance top-heavy waterfall drops emotion raw straight across naked sheet.",
        symbolism: "Neglected bursting pearl-grapes symbolize unrecognized genius cast scornfully amid brambles.",
        philosophicalMeaning: "Fierce cry of untamed individual authenticity smashing stiff feudal etiquette.",
        artisticLegacy: "Inaugurated Grand Freehand painting — inspiring Qi Baishi to sigh: 'Gladly would I serve as gate-dog at Qingteng's door!'."
      },
      srEn: {
        scholarlyConsensus: "Preeminent classical East Asian expressionist masterpiece held at Palace Museum Beijing.",
        debatedIssues: "Modern psychological studies link manic-depressive episodes directly to explosive graphic urgency.",
        comparativeContext: "Searing psychic intensity kin to Vincent van Gogh centuries ahead.",
        academicCitations: ["Palace Museum, *Xu Wei Grapes in Ink & Grand Freehand Aesthetics*.", "Yuan Hongdao, *Biography of Xu Wenchang*."]
      },
      hotspotsEn: [
        { categoryEn: "Grand Freehand Birth", titleEn: "Wild Ink Blotch Leaves & Dripping Obsidian Pearls", detailEn: "Loaded water-soaked washes burst cleanly across raw paper while dry finger/tip twists trace ragged thorns." },
        { categoryEn: "Psychic Portrait", titleEn: "Vertiginous Downward Cascade of Tattered Foliage", detailEn: "Still life mutates into tempestuous autobiographical cry of imprisoned brilliance." },
        { categoryEn: "Defiant Inscription", titleEn: "Upper-Left Poem: 'Pearls Beneath Brush Nowhere Sold'", detailEn: "Bitter heroic verse fuses directly with vine swirls tearing polite literati silence apart." }
      ]
    },
    "huishan-chahui": {
      dynastyEn: "Ming Zhengde Era (1518 CE)",
      creationDateEn: "Wuyin Year, 1518 CE",
      genreLabelEn: "Literati Gathering • Tea Ceremony Landscape",
      materialEn: "Horizontal silk handscroll, ink & soft color (绢本设色)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Museum Holding documenting Wuxi Second Spring tea fellowship.",
      artistSchoolEn: "Wu School Tea Culture Masterwork",
      artistEraEn: "Ming Zhengde Reign",
      artistBioEn: "Supreme connoisseur of Jiangnan tea rituals, garden aesthetics, and serene scholarly fellowship.",
      quoteEn: "Ladling crystal water from Mount Hui spring to steep crisp mountain tea; kindred elders converse quietly beneath ancient pines — foremost joy of scholar life!",
      quoteAuthorEn: "Wen Zhengming (文徵明)",
      quoteSourceEn: "*Colophon on Tea Gathering at Mount Hui*",
      analysisEn: {
        historicalBackground: "Commemorates a tranquil 1518 Qingming outing beside Wuxi's renowned 'Second Best Spring Under Heaven' with poetic friends.",
        artistBiography: "Intimate master of Jiangnan literati etiquette rendering Ming kettles, charcoal braziers, and tea bowls accurately.",
        artisticComposition: "Steps through ancient pine groves beside octagonal Mount Hui spring well toward thatched pavilion where servants fan charcoal stoves for conversing robes scholars.",
        brushwork: "Balanced fine-brush poise and delicate pine-needle texture convey gentle calm without tension.",
        inkAndColor: "Warm jade moss, terracotta robes, and misty turquoise leaves exude fragrance of fresh leaf steam.",
        spatialPerspective: "Warm intimate framing draws viewers straight onto stone tea benches beneath sheltered pines.",
        symbolism: "Pure mountain spring water mirrors clean incorruptible scholar friendship unbound by ambition.",
        philosophicalMeaning: "Realizes unity of Tea Way and Chan mindfulness inside an ordinary steaming cup.",
        artisticLegacy: "Preeminent visual monument of Chinese Ming Tea Culture and period tea utensils."
      },
      srEn: {
        scholarlyConsensus: "Preeminent documentary tea-gathering scroll preserved at Beijing Palace Museum.",
        debatedIssues: "Corroborates named Zhengde-era Suzhou companions across appended calligraphic verse.",
        comparativeContext: "Sober spiritual minimalism contrasted sharply against boisterous Tang court banquets.",
        academicCitations: ["Palace Museum, *Wen Zhengming & Ming Tea Culture*.", "Zheng Qian, *Chinese Tea Painting & Texts*."]
      },
      hotspotsEn: [
        { categoryEn: "Ming Tea Heritage", titleEn: "Servant Tending Bamboo Hearth Kettle Beside Spring", detailEn: "Boils prized spring water as Wen Zhengming and guests Tang Zhen & Cai Yu exchange tranquil lines." },
        { categoryEn: "Garden Seclusion", titleEn: "Framing Pines Sheltering Octagonal Stone Spring Well", detailEn: "Balanced cypress and pine boughs wall off dusty city roads around serene dialogue." },
        { categoryEn: "Collaborative Literary Roll", titleEn: "Regular-Script Chronicle & Guest Matching Odes", detailEn: "Long appended poetry scroll documents authentic early 16th-century Suzhou fellowship." }
      ]
    },
    "luomu-qiuse": {
      dynastyEn: "Qing Kangxi Era (1666 CE)",
      creationDateEn: "Bingwu Year, 1666 CE (Age 75)",
      genreLabelEn: "Orthodox Landscape • Four Wangs Canon",
      materialEn: "Vertical paper scroll, ink & subtle color (纸本水墨设色)",
      museumEn: "Shanghai Museum",
      attributionEn: "Signed & Dated Masterpiece painted by Wang Shimin at age 75.",
      artistSchoolEn: "Loudong School • Head of Four Wangs",
      artistEraEn: "Ming–Qing Transition",
      artistBioEn: "Dong Qichang's prize disciple who led Qing court orthodoxy preserving pure Yuan Structural Discipline.",
      quoteEn: "True orthodox lineage runs from Dong–Ju and Two Mis through Four Yuan Masters to Dong Qichang; Master Fengchang received the mantle cleanly.",
      quoteAuthorEn: "Wang Hui (王翚)",
      quoteSourceEn: "*Qingxi Colophons*",
      analysisEn: {
        historicalBackground: "Painted as early Kangxi rule stabilized, reflecting elite yearning for calm canonical classical order.",
        artistBiography: "Taicang aristocrat Wang Shimin inherited Dong Qichang's unmatched private scroll library.",
        artisticComposition: "Stately vertical tiers assemble shedding autumn foreground trees mirroring rivers beneath stepped Huang Gongwang mountain plateaus.",
        brushwork: "Round blunt methodical lines stack steady dry-wet hemp folds wholly avoiding rash drama.",
        inkAndColor: "Warm muted ochre and crisp pine-ash wash breathe poised golden calm.",
        spatialPerspective: "Strict Three-Distance tectonic equilibrium stabilizes every plateau.",
        symbolism: "Bare solid winter boughs uphold enduring civilizational transmission through dynastic turnover.",
        philosophicalMeaning: "Honors Confucian 'Gentle Moderation' inventing quietly inside canonical master grammar.",
        artisticLegacy: "Anchored Loudong School dominance across two centuries of Qing court taste."
      },
      srEn: {
        scholarlyConsensus: "Preeminent exemplar of Wang Shimin's Huang Gongwang structural synthesis.",
        debatedIssues: "Modern criticism sparked by May Fourth dismissal of Orthodox School has shifted toward recognizing their sophisticated structural formalism.",
        comparativeContext: "Classical structural discipline directly opposite Individualist rebel Shitao.",
        academicCitations: ["Shanghai Museum, *Four Wangs Special Catalog*.", "Chen Chuanxi, *Critique of Loudong School*."]
      },
      hotspotsEn: [
        { categoryEn: "Orthodox Four Wangs", titleEn: "Disciplined Huang Gongwang Hemp-Fold Terraces", detailEn: "Methodically layers crisp dry-ink mountain terraces channeling revered Yuan grammar cleanly." },
        { categoryEn: "Autumn Tranquility", titleEn: "Shedding Maple Groves & Lakeside Thatch Retreat", detailEn: "Crisp bare twigs preserve contemplative poise across Ming–Qing dynastic shift." },
        { categoryEn: "Lineage Seals", titleEn: "Age-75 Inscription & Loudong Dynasty Lineage", detailEn: "Marks historical handoff bridging Late Ming Suzhou masters into Qing Academy canon." }
      ]
    },
    "kangxi-nanxun": {
      dynastyEn: "Qing Kangxi Era (1691–1698 CE)",
      creationDateEn: "1691–1698 CE (7-Year Court Production)",
      genreLabelEn: "Grand Court Documentary History Panorama",
      materialEn: "Twelve monumental silk scrolls, mineral pigments (绢本设色)",
      museumEn: "Palace Museum Beijing, Musée Guimet Paris & The Met New York",
      attributionEn: "Grand Court Masterwork overseen by Wang Hui, honored with Emperor Kangxi's four-character gift 'Splendor of Mountains & Waters'.",
      artistSchoolEn: "Yushan School (Four Wangs Orthodox)",
      artistEraEn: "Qing Kangxi Reign",
      artistBioEn: "Chief Qing 'Saint of Painting' famed for synthesizing Tang–Song–Yuan styles across monumental narrative.",
      quoteEn: "Wield Yuan brush-and-ink atop Song hills and valleys soaked in Tang breath — that alone is complete synthesis.",
      quoteAuthorEn: "Wang Hui (王翚)",
      quoteSourceEn: "*Qingxi Colophons*",
      analysisEn: {
        historicalBackground: "Documents Kangxi's decisive 1689 Second Southern Tour inspecting Yellow River dikes and winning Jiangnan literati loyalty.",
        artistBiography: "Chosen Chief Architect directing teams over seven years coordinating architecture, costume, and Song landscape scales.",
        artisticComposition: "Twelve huge scrolls totaling >200 meters trace Beijing across Shandong Yellow River levees, Suzhou canals, and Hangzhou down to Shaoxing.",
        brushwork: "Fuses micrometer architectural engineering across thousands of timber eaves beside tens of thousands of lively citizens and Song blue-green peaks.",
        inkAndColor: "Resplendent azurite, malachite, vermilion banners, and azure Grand Canal waters sparkle with dynastic prestige.",
        spatialPerspective: "East Asia's grandest continuous multi-point panorama connecting empire geography along unbroken silk.",
        symbolism: "Warm cheers greeting dragon barges dramatize cosmic High-Qing peace.",
        philosophicalMeaning: "Visualizes multi-ethnic imperial unity linking northern court to Jiangnan prosperity.",
        artisticLegacy: "Established towering blueprint copied directly by Qianlong Southern Tour panoramas decades later."
      },
      srEn: {
        scholarlyConsensus: "Preeminent visual historical atlas of 17th-century urban geography, canal engineering, and commerce.",
        debatedIssues: "Twelve-scroll suite tragically fragmented in 1900 between Beijing, Paris, and New York.",
        comparativeContext: "Multiplies Song *Qingming Scroll* geographic span more than twentyfold.",
        academicCitations: ["Maxwell K. Hearn, *The Kangxi Emperor's Southern Inspection Tour*, Met Museum.", "Palace Museum Studies on High-Qing Court Scrolls."]
      },
      hotspotsEn: [
        { categoryEn: "Royal Chronicle", titleEn: "1689 Tour Tracing Grand Canal to Suzhou Markets", detailEn: "Crowds line glowing canal embankments amidst silk shops, arch bridges, and royal barges." },
        { categoryEn: "Grand Synthesis", titleEn: "Uniting Southern Song Minerals & Early Jesuit Depth", detailEn: "Combines traditional Chinese scroll vistas effortlessly with subtle atmospheric depth cues." },
        { categoryEn: "Museum Highlights", titleEn: "Volume III Mount Tai & Volume VII Suzhou Streetscapes", detailEn: "Scattered globally across Met, Musée Guimet, and Palace Museum archives." }
      ]
    },
    "wanhe-songfeng-qing": {
      dynastyEn: "Qing Kangxi Era (Early 18th Century CE)",
      creationDateEn: "c. 1705–1710 CE",
      genreLabelEn: "Tectonic Structural Landscape • Loudong",
      materialEn: "Vertical paper scroll, layered dry ink & warm color",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Imperial Palace Holding bearing Emperor Kangxi's approving inscribed endorsement.",
      artistSchoolEn: "Loudong Structural Pillar (Four Wangs)",
      artistEraEn: "Qing Kangxi Reign",
      artistBioEn: "Grandson of Wang Shimin and High-Minister Academy Director refining pure tectonic 'Dragon Vein' energy theory.",
      quoteEn: "Inside painting the Dragon Vein surges, opens, closes, and climbs through brushwork alone — neither sugary-smooth nor crude stiffness, a mystery Shitao cannot reach.",
      quoteAuthorEn: "Wang Yuanqi (王原祁)",
      quoteSourceEn: "*Random Jottings on a Rainy Window*",
      analysisEn: {
        historicalBackground: "Created during Kangxi Golden Age intimacy while editing imperial calligraphy encyclopedias.",
        artistBiography: "As supreme structural formalist, Wang Yuanqi treated mountain boulders almost like geometric rhythmic architecture.",
        artisticComposition: "Reinvents Li Tang's title completely: shattering solid cliffs into faceted stacked cubes pulsing sequentially via Opening–Closing geomagnetic rhythm.",
        brushwork: "Slow dry patient brushing scores 'broken stroke, unbroken spirit', piling seven dry passes into metallic granite glow.",
        inkAndColor: "'Color inside Ink, Ink inside Color' grounds warm ochre shadows invisibly amidst dark black stone.",
        spatialPerspective: "Abstract inward tectonic architecture discarding optical landscape window views cleanly.",
        symbolism: "Winding unbroken geomantic veins signify dynastic cosmic stability.",
        philosophicalMeaning: "Enacts *Yijing* Yin–Yang equilibrium unifying kaleidoscopic stone facets around quiet central order.",
        artisticLegacy: "Frequently compared by modern historians directly to Paul Cézanne's faceted constructivism."
      },
      srEn: {
        scholarlyConsensus: "Supreme expression of Wang Yuanqi's abstract compositional theory at Palace Museum Beijing.",
        debatedIssues: "Striking parallel between Qing geomantic Dragon-Vein rhythm and 20th-century Cubist spatial geometry.",
        comparativeContext: "Pure architectural intellect contrasted against Song Li Tang's explosive stormy passion.",
        academicCitations: ["Palace Museum, *Studies on Wang Yuanqi's Loudong School*.", "James Cahill, *The Painter's Practice*."]
      },
      hotspotsEn: [
        { categoryEn: "Dragon-Vein Energy", titleEn: "Tilted Tectonic Mountain Blocks Writhing in Rhythm", detailEn: "Interlocking faceted crests coil rhythmically like geological dragon spine." },
        { categoryEn: "Seven-Layer Accumulation", titleEn: "Dry 'Bone-Gathering' Brushing Crowned with Dark Dots", detailEn: "Repeated dry stippling builds glowing dense mineral solidity across facets." },
        { categoryEn: "Pure Theory Scroll", titleEn: "Autograph Discourse Refashioning Yuan Traditions", detailEn: "Bridges ancient masters straight toward 20th-century pure structural abstraction." }
      ]
    },
    "huaiyang-jieqiu": {
      dynastyEn: "Qing Kangxi Era (1705 CE)",
      creationDateEn: "Yiyou Year, 1705 CE (Late Yangzhou Years)",
      genreLabelEn: "Individualist Rebellion • One-Stroke Theory",
      materialEn: "Vertical paper scroll, brisk ink & radiant washes (纸本水墨设色)",
      museumEn: "Nanjing Museum",
      attributionEn: "Authenticated Nanjing Museum Holding directly enacting Shitao's *Quotations on Painting*.",
      artistSchoolEn: "Foremost of Four Individualist Monks",
      artistEraEn: "Early Qing (清初)",
      artistBioEn: "Ming imperial prince turned wandering Chan monk who smashed copyist convention declaring: 'I establish my own rules!'",
      quoteEn: "One Stroke (Yihua) is origin of myriad existences! Before ancients invented rules, whose rules did they follow? I wield rules of my own making!",
      quoteAuthorEn: "Shitao / Monk Bitter Gourd",
      quoteSourceEn: "*Philosophy of Painting (Huayulu)*",
      analysisEn: {
        historicalBackground: "Painted late in serene Yangzhou independence after transmuting Ming fallen-house grief into total creative liberation.",
        artistBiography: "Proclaimed rebel maxim 'Brush and ink must belong to one's own age', liberating generations after him.",
        artisticComposition: "Sweeping leaning green crag slices across winding crystal autumn stream linking lonely hut, bridge, and boundless sky.",
        brushwork: "Unpredictable fluid explosions alternate dry jagged contours, wet ink splashes, and vivid autumn showers.",
        inkAndColor: "Fresh emerald malachite mixed boldly alongside vermilion accents transforms black scroll gloom into crisp clear rainlight.",
        spatialPerspective: "Kinetic slanted energy tilts eye swiftly down sparkling waters into breezy open horizon.",
        symbolism: "Fresh rain-washed Huai–Yang autumn celebrates spiritual freedom scrubbed clean of sorrow.",
        philosophicalMeaning: "Chan and Daoist radical immediacy: entire cosmos births afresh inside every fearless ink touch.",
        artisticLegacy: "Ignited modern Chinese innovation nourishing Qi Baishi, Huang Binhong, and Zhang Daqian."
      },
      srEn: {
        scholarlyConsensus: "Preeminent realization uniting Shitao's fearless *Philosophy of Painting* prose directly with wet living brushwork.",
        debatedIssues: "Biographers inspect complex double audiences with Emperor Kangxi juxtaposed against fiercely loyal hermit poems.",
        comparativeContext: "Warm life-affirming vitality contrasting Bada Shanren's stark bitter satire.",
        academicCitations: ["Nanjing Museum, *Shitao Exhibition Catalog*.", "Zhu Liangzhi, *Studies on Shitao*, Peking University Press."]
      },
      hotspotsEn: [
        { categoryEn: "Anti-Orthodox Rebellion", titleEn: "Fresh Immediate Observation Defying Old Masters", detailEn: "Slanted dynamic rock face channels living Huaiyang rain-breeze cleanly past rigid lineage recipes." },
        { categoryEn: "One-Stroke Variety", titleEn: "Wet Slashed Mineral Accents Over Brisk Ink", detailEn: "Simultaneous dry-to-dripping flicks turn monochrome traditions crystalline and crisp." },
        { categoryEn: "Artist Manifesto", titleEn: "Self-Inscribed Verse Rejecting Copybook Rules", detailEn: "Assertive colophon cements Shitao as father of modern Chinese painterly individuality." }
      ]
    },
    "kongque-zhushi": {
      dynastyEn: "Qing Kangxi Era (1690 CE)",
      creationDateEn: "Gengwu Year, 1690 CE",
      genreLabelEn: "Individualist Satirical Freehand Expressionism",
      materialEn: "Tall vertical paper scroll, stark ink (纸本水墨)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Autograph of Zhu Da bearing signature cypher 'Bada Shanren' resembling 'Weep/Laugh'.",
      artistSchoolEn: "Four Individualist Monks • Summit of Bitter Satire",
      artistEraEn: "Early Qing (清初)",
      artistBioEn: "Deposed Ming Ning-Prince scion feigning madness and silence as Buddhist monk whose birds roll defiant white eyeballs skyward.",
      quoteEn: "Drops of ink are few, teardrops many; mountains remain, shadow bleak. Wild upheaval fills heavens clearly — why bother laughing or singing falsely?",
      quoteAuthorEn: "Bada Shanren (Zhu Da)",
      quoteSourceEn: "*Inscribed Verse on Scroll*",
      analysisEn: {
        historicalBackground: "Painted as Ming turncoats scrambled slavishly for Qing peacock-feathered official hats, unleashing ice-cold political satire.",
        artistBiography: "Turned lifelong suppressed grief into razor-minimalist fish, rocks, and sneering sidelong glare birds.",
        artisticComposition: "Dangerously top-heavy inverted stone balances nervously upon narrow edge supporting two ragged tail-drooping peacocks beneath bare bamboo twigs.",
        brushwork: "Ice-cold blunt-round lines chop starkly without wasted drops — razor sharpness wrapped in deceptive stillness.",
        inkAndColor: "Bone-dry grayed washes weep quietly like dried ink tears across pale paper.",
        spatialPerspective: "Precarious top-heavy rock equilibrium instills palpable dread of impending collapse.",
        symbolism: "Ungraceful three-plumed peacocks mock court sycophants flaunting Qing three-eyed hat plumes atop trembling power.",
        philosophicalMeaning: "Haughty tragic integrity refusing to kneel or trade dignity for corrupt office.",
        artisticLegacy: "Piercing monument of East Asian expressionism venerated by Qi Baishi and Pan Tianshou."
      },
      srEn: {
        scholarlyConsensus: "Preeminent political-satirical bird masterpiece in classical Chinese painting.",
        debatedIssues: "Scholars continually unpack coded Ming loyalist wordplay inside top-right enigmatic script.",
        comparativeContext: "Shatters Song Court jeweled peacock flattery cleanly inside bitter bare parody.",
        academicCitations: ["Palace Museum, *Bada Shanren Studies*, 2006.", "Wang Fangyu, *Master of the Lotus Garden*."]
      },
      hotspotsEn: [
        { categoryEn: "Defiant Glare", titleEn: "Two Huddled Peacocks Rolling White Eyeballs", detailEn: "Deposed Ming prince paints awkward one-legged fowl staring sideways in icy aristocratic contempt." },
        { categoryEn: "Political Caricature", titleEn: "Three Ragged Tail Feathers Mocking Qing Official Hats", detailEn: "Poking bitter fun at three-eyed peacock hat plumes coveted by Ming defectors." },
        { categoryEn: "Cryptic Signature", titleEn: "Connected 'Bada Shanren' Cypher ('Weep/Laugh')", detailEn: "Connected brush glyph visually puns 'cry thus' (哭之) and 'laugh thus' (笑之)." }
      ]
    },
    "zhushi-tu": {
      dynastyEn: "Qing Qianlong Era (Mid-18th Century CE)",
      creationDateEn: "c. 1750–1760 CE",
      genreLabelEn: "Literati Ink Bamboo • Moral Uprightness",
      materialEn: "Tall paper scroll, monochrome ink (纸本水墨)",
      museumEn: "The Palace Museum, Beijing",
      attributionEn: "Authenticated Masterwork carrying Zheng Banqiao's globally immortal poem 'Bamboo & Rock'.",
      artistSchoolEn: "Chief of Eight Eccentrics of Yangzhou",
      artistEraEn: "Qing Qianlong Reign",
      artistBioEn: "Dismissed righteous county magistrate who sold ink orchids, bamboo, and rocks in Yangzhou markets with hybrid 'Six-and-a-Half Script'.",
      quoteEn: "Clamping fast onto green mountains never letting go, striking deep roots inside cracked lean stone; bruised a thousand blows yet staying firm — blow on, winds from east, west, south, north!",
      quoteAuthorEn: "Zheng Banqiao (郑板桥 / Zheng Xie)",
      quoteSourceEn: "*Poem Inscribed on Bamboo & Rocks*",
      analysisEn: {
        historicalBackground: "Brushed after dismissal for opening state granaries to starving peasants — embodying incorruptible civic backbone.",
        artistBiography: "Devoted himself solely to Bamboo, Rock, and Orchid using idiosyncratic 'Six-and-a-Half Script' uniting Seal, Clerical, Regular, and Running strokes.",
        artisticComposition: "Angular sheer vertical cliff stands shoulder-to-shoulder beside lean upward-jabbing bamboo stalks exploding from naked rock fissures.",
        brushwork: "Knife-sharp strokes align crisp dark front blades against pale receding sprays rustling cleanly.",
        inkAndColor: "Five monochrome tonal registers sculpt crisp three-dimensional wind without pigment.",
        spatialPerspective: "Unyielding vertical defiance confronts storm winds directly.",
        symbolism: "Rooting deep inside barren cracks images honest officials unshaken by famine slander.",
        philosophicalMeaning: "Populist Confucian conscience listening tenderly for sorrow beneath rustling leaves.",
        artisticLegacy: "Among East Asia's most beloved poems and visual resistance banners."
      },
      srEn: {
        scholarlyConsensus: "Preeminent intact Trinity of Poetry, Calligraphy, and Painting in Yangzhou Eccentric canon.",
        debatedIssues: "Studies trace deliberate 'Six-and-a-Half Script' rhythms weaving across blank sky between bamboo tips.",
        comparativeContext: "Gains gritty social defiance absent from serene Song aristocrat bamboo.",
        academicCitations: ["Palace Museum, *Studies on Zheng Banqiao Calligraphy & Painting*.", "Chen Chuanxi, *Eight Eccentrics of Yangzhou*."]
      },
      hotspotsEn: [
        { categoryEn: "Yangzhou Uprightness", titleEn: "Lean Bamboo Rooted Firmly Inside Cliff Fissure", detailEn: "Blade-sharp dark leaves shoot steadily past vertical cracks expressing immortal stanza strength." },
        { categoryEn: "Geometric Facet", titleEn: "Flat Angular Chiseled Sandstone Boulder", detailEn: "Abandons wet curves for dry squared planes launching bold upward ink silhouettes." },
        { categoryEn: "Immortal Quatrain", titleEn: "'Clamping Green Mountain' Verse in Six-Half Script", detailEn: "Iconic asymmetrical brushwork weaves text cleanly into living bamboo rhythm." }
      ]
    },
    "moxia-tu": {
      dynastyEn: "Modern 20th Century (1948 CE)",
      creationDateEn: "1948 CE (Age 88 Peak Synthesis)",
      genreLabelEn: "Modern Freehand Aquatic Ink • Masterpiece",
      materialEn: "Vertical raw Xuan paper, ink & clear water (纸本水墨)",
      museumEn: "National Art Museum of China (NAMOC), Beijing",
      attributionEn: "Museum-Authenticated Work capturing Old Master Baishi's pinnacle late-eighties translucent shrimp craft.",
      artistSchoolEn: "Red Flowers, Ink Leaves • Modern Freehand",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "Former Hunan carpenter who moved to Beijing past fifty for 'Later-Year Reform', elevating humble creatures to global heights.",
      quoteEn: "The marvel of painting lies exactly midway between likeness and unlikeness: total likeness flatters vulgar taste, total unlikeness deceives — I studied shrimp decades to seize their true soul!",
      quoteAuthorEn: "Qi Baishi (齐白石)",
      quoteSourceEn: "*Autobiography of Old Man Baishi*",
      analysisEn: {
        historicalBackground: "Culminated sixty years observing Xiangtan brook crayfish and studio tabletop shrimp bowls in Beijing.",
        artistBiography: "Joined Xu Wei & Bada Shanren raw ink power smoothly with warm peasant reverence for ordinary creatures.",
        artisticComposition: "Swimming translucent crustacean group darts briskly across untouched blank sheet without single painted wave line.",
        brushwork: "Five crisp flat damp grey strokes bend chitin shells; one jet-black skull blot glints behind sweeping springy whisker lines.",
        inkAndColor: "Water control conjures wet refractive translucency almost dripping directly out of raw Xuan fiber.",
        spatialPerspective: "Untouched white paper turns instantaneously into crystal mountain stream water.",
        symbolism: "Tiny nimble river swimmers radiate joyful working-class vitality.",
        philosophicalMeaning: "Canonical law 'Midway Between Likeness and Non-Likeness' distilling essence past camera imitation.",
        artisticLegacy: "Global emblem of modern Chinese wash painting earning Qi Baishi 1955 International Peace Prize."
      },
      srEn: {
        scholarlyConsensus: "Ages 80–88 recognized across NAMOC and Palace Museum as supreme peak of Qi's crustacean alchemy.",
        debatedIssues: "Tracks four decisive simplifications paring cumbersome anatomy cleanly down to six elastic antennae.",
        comparativeContext: "Achieves X-ray glass-shell translucency through water-ink moisture unmatched worldwide.",
        academicCitations: ["Wang Chaowen, *Aesthetics of Qi Baishi*.", "Lang Shaojun, *Qi Baishi Life & Art*."]
      },
      hotspotsEn: [
        { categoryEn: "Water-Ink Alchemy", titleEn: "Glass-Translucent Shells Via Wet-Dark Fusion", detailEn: "Water-saturated gray bands fuse around a single jet-black brain dot capturing gleaming wet carapace." },
        { categoryEn: "Springy Brush Velocity", titleEn: "Whip-Thin Elastic Antennae Slicing Blank Stream", detailEn: "Crisp arched feelers generate currents instantaneously across pure empty white sheet." },
        { categoryEn: "Four-Art Unity", titleEn: "Archaic Carve-Script & Self-Carved Cinnabar Seals", detailEn: "Sturdy northern-stele inscription and crisp direct-cut vermilion seal warm minimalist ink." }
      ]
    },
    "benma-tu": {
      dynastyEn: "Modern 20th Century (1941 CE)",
      creationDateEn: "Autumn 1941 CE (Second Changsha Battle Victory)",
      genreLabelEn: "East–West Synthesis • Heroic National Expression",
      materialEn: "Vertical Xuan paper, ink & subtle water shadows (纸本水墨)",
      museumEn: "Xu Beihong Memorial Museum, Beijing",
      attributionEn: "Authenticated Wartime Donation Work painted in Changsha solidarity.",
      artistSchoolEn: "East–West Fusion Pioneer",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "Paris École des Beaux-Arts alumnus and founding CAFA President fusing anatomical volume lighting seamlessly onto traditional ink brush.",
      quoteEn: "Preserve what excels in ancient law, continue what nears fading, mend flaws, enrich omissions — and weave Western visual truth cleanly where apt!",
      quoteAuthorEn: "Xu Beihong (徐悲鸿)",
      quoteSourceEn: "*On Reforming Chinese Painting*",
      analysisEn: {
        historicalBackground: "Brushed Autumn 1941 celebrating Changsha front-line resistance victories against invasion to ignite public morale.",
        artistBiography: "Mastered European volumetric muscular anatomy in Paris before revolutionizing modern Asian academic training.",
        artisticComposition: "Audacious three-quarter frontal rush charges headlong forward right out of vertical sheet as mane and tail lash stormy winds.",
        brushwork: "Sweeping wide blade ink blocks chest muscles contrasted with flying dry-brush gale hair strands and steel hooves.",
        inkAndColor: "Applies Western sunlit nose-ridge chiaroscuro highlight cleanly over pure ink shadows on blank white ground.",
        spatialPerspective: "Dramatic foreground plunge echoes rushing hoof thunder straight off frame.",
        symbolism: "Unbridled thundering warhorse incarnates fearless national awakening smashing chains.",
        philosophicalMeaning: "Synthesizes Confucian 'Ceaseless Heavenly Vigor' with modern patriotic fortitude.",
        artisticLegacy: "Defining East–West fusion emblem shaping 20th-century Asian art academies."
      },
      srEn: {
        scholarlyConsensus: "Core spiritual treasure held at Beijing Xu Beihong Memorial Museum.",
        debatedIssues: "Central axis of modern debate contrasting pure traditional ink conservation against Western anatomical reform.",
        comparativeContext: "Surging physical power opposite Li Gonglin's poised restrained aristocratic horses.",
        academicCitations: ["Liao Jingwen, *Life of Xu Beihong*.", "Wang Zhenduo, *Xu Beihong East–West Aesthetics*."]
      },
      hotspotsEn: [
        { categoryEn: "East–West Synthesis", titleEn: "Anatomical Chest Relief Highlighted by Unpainted Light", detailEn: "Paris-trained muscular shading marries swift Chinese ink planes bursting forward toward viewer." },
        { categoryEn: "Dry-Brush Speed", titleEn: "Gale-Whipped Scorched Dry-Ink Tail & Mane", detailEn: "Flying split whiskers explode across paper radiating thunderous hoof-beat momentum." },
        { categoryEn: "1941 Morale Beacon", titleEn: "Changsha Resistance Colophon Dated Autumn 1941", detailEn: "Donated proceeds supported wartime displaced citizens and frontline relief." }
      ]
    },
    "lushan-tu-daqian": {
      dynastyEn: "Modern Era (1981–1983 CE)",
      creationDateEn: "1981–1983 CE (Final Monumental Scroll at Age 84)",
      genreLabelEn: "Monumental Splashed-Ink & Mineral Color",
      materialEn: "Ten-meter silk scroll, azurite, malachite & ink",
      museumEn: "National Palace Museum, Taipei",
      attributionEn: "Authenticated Final Masterwork left unsigned upon Zhang Daqian's death.",
      artistSchoolEn: "Master of Splashed Ink & Splashed Color",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "20th-century colossus hailed by Picasso who copied Dunhuang murals years before inventing splashed mineral color past fading sight.",
      quoteEn: "Old eyes dim yet brush blooms flowers; pouring ink and sloshing color through mists — never in life did I climb Mount Lu's perils, now I pour it whole onto silk!",
      quoteAuthorEn: "Zhang Daqian (张大千)",
      quoteSourceEn: "*Poem Draft for Mount Lu Scroll (1983)*",
      analysisEn: {
        historicalBackground: "Created in final declining eyesight years at Taipei residence (1981–83) fulfilling a Japanese friend's monumental request.",
        artistBiography: "Deep mastery from Tang murals through Individualist Monks converged inside bold Post-War gestural pouring.",
        artisticComposition: "Nearly ten sweeping meters dissolve Mount Lu cliffs inside luminous rolling malachite clouds revealing hidden monastery eaves.",
        brushwork: "Directly pours pools of liquid black ink and thick mineral blues guided dynamically across damp silk prior to delicate temple brushwork.",
        inkAndColor: "Volcanic jewel azurite and vivid peacock malachite float glowing over unfathomable ink darkness.",
        spatialPerspective: "Cosmic visionary sweep dissolves abstract field painting seamlessly into Chinese landscape soul.",
        symbolism: "Mainland Mount Lu unseen throughout decades of exile becomes radiant spiritual homeland.",
        philosophicalMeaning: "When physical retinas dim, liberated inner eye beholds timeless cosmic creation.",
        artisticLegacy: "Supreme 20th-century landscape panorama closing China's classical silk tradition magnificently."
      },
      srEn: {
        scholarlyConsensus: "Precious modern centerpiece held at Taipei National Palace Museum.",
        debatedIssues: "Stroke felled master Zhang Daqian abruptly leaving planned final inscribed verses unwritten.",
        comparativeContext: "Achieves Abstract-Expressionist scale alongside Pollock while anchoring authentic Song–Yuan spirit.",
        academicCitations: ["National Palace Museum, *Zhang Daqian Mount Lu Scroll Catalog*, 1983.", "Shi Shou-chien, *Modern Ink Studies*."]
      },
      hotspotsEn: [
        { categoryEn: "Late-Life Revolution", titleEn: "Poured Azurite & Malachite Splashed-Color Tectonics", detailEn: "At age 84 with dimming eyes, liquid mineral pools merge into glowing emerald ridge storms." },
        { categoryEn: "Imagined Homeland", titleEn: "Luminous Cloud Bands Across Never-Visited Mount Lu", detailEn: "Synthesizes thousands of ancient mental landscapes with bold abstract flow." },
        { categoryEn: "Classical Anchor", titleEn: "Minute Traditional Ink Temple Inside Swirling Mineral Vortex", detailEn: "Fine classic ink eaves tucked beneath waterfalls anchor modern splash inside ancient tradition." }
      ]
    },
    "shujiang-bishitu": {
      dynastyEn: "Modern Era (1953 CE)",
      creationDateEn: "Guiyi Year, 1953 CE (Age 89)",
      genreLabelEn: "Dense Dark Accumulated Ink • Modern Literati",
      materialEn: "Vertical paper scroll, layered dark ink & mineral glow",
      museumEn: "National Art Museum of China (NAMOC), Beijing",
      attributionEn: "Museum-Authenticated Work crowned at pinnacle of late 'Dark Huang Binhong' period.",
      artistSchoolEn: "Dense Black & Heavy • Five Brushes & Seven Inks",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "Erudite epigrapher and nonagenarian theorist famous for saying: 'Fifty years after my death people will finally grasp my paintings!'",
      quoteEn: "Five Brushes: Level, Staying, Round, Heavy, Varying; Seven Inks: Concentrated, Pale, Broken, Accumulated, Splashed, Scorched, Overnight.",
      quoteAuthorEn: "Huang Binhong (黄宾虹)",
      quoteSourceEn: "*Concise Sayings on Painting Method*",
      analysisEn: {
        historicalBackground: "Synthesized in twilight Hangzhou calm from decades of Sichuan Shu-River sketch notebooks.",
        artistBiography: "Epigraphic seal expertise tempered brittle lines into glowing bronze cauldron solemnity ('White Becoming Black').",
        artisticComposition: "Packed interlocking cliffs crowd sheer Shu canyon edges beside emerald river bends and hidden woodland huts.",
        brushwork: "Exercises iron-cast 'Heavy' and resisting 'Staying' lines reminiscent of archaic Zhou–Qin vessel engravings.",
        inkAndColor: "'Seven Inks' — piling 7–10 overnight stale-ink passes yet piercing internal black gloom with shimmering azure-malachite jade light.",
        spatialPerspective: "Suffocating black fullness paradoxically radiates clear luminescence strictly 'from inside pitch-black mass'.",
        symbolism: "Deep dense black peaks embody millennia of cultural bedrock enduring ceaselessly.",
        philosophicalMeaning: "'Enlightenment Out of Chaos': excavating lucid cosmic radiance deep through layered ink darkness.",
        artisticLegacy: "Stands unchallenged at summit of pure 20th-century indigenous Chinese abstract ink language."
      },
      srEn: {
        scholarlyConsensus: "Preeminent NAMOC holding illuminating the radical late 'Dark Period' triumph.",
        debatedIssues: "Cataract haze freed octogenarian Huang cleanly from superficial surface prettiness into raw seismic force.",
        comparativeContext: "Heavy ancient-bronze resonance opposing Wen Zhengming's cool gossamer airiness.",
        academicCitations: ["NAMOC, *Huang Binhong Centenary Exhibition*.", "Wang Bomin, *Huang Binhong Quotations Explicated*."]
      },
      hotspotsEn: [
        { categoryEn: "Seven-Ink Alchemy", titleEn: "'Light Glowing From Within Pitch Blackness'", detailEn: "Up to ten layered saturated and overnight ink washes let reserved bright specks shimmer magically through dark cliffs." },
        { categoryEn: "Emerald River Spark", titleEn: "Shu River Emerald Mineral Glimmers & Wood Stilts", detailEn: "Brief clear malachite hints cool overwhelming ink gravity across river gorge." },
        { categoryEn: "Epigraphic Bone", titleEn: "Blunt Bronze-Chiseled 'Round Heavy' Strokes", detailEn: "Archaic Jinwen bronze calligraphy power steadies every entangled ridge." }
      ]
    },
    "jiangshan-duojiao-1959": {
      dynastyEn: "Modern 20th Century (1959 CE)",
      creationDateEn: "September 1959 CE (10th National Anniversary)",
      genreLabelEn: "State Hall Monumental National Panorama",
      materialEn: "Nine-meter silk-mounted paper mural, minerals & ink",
      museumEn: "Great Hall of the People, Beijing (1:1 Display Reproduction; 1959 Original Conserved)",
      attributionEn: "State Ceremonial Commission co-painted by Fu Baoshi & Guan Shanyue inside four intensive months.",
      artistSchoolEn: "New Jinling & Lingnan Grand Synthesis",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "Dual giants uniting stormy 'Baoshi' mountain sweeps cleanly beside Guan Shanyue's buoyant Lingnan evergreen craftsmanship.",
      quoteEn: "So rich in beauty are our rivers and mountains that countless heroes bow in homage...",
      quoteAuthorEn: "Mao Zedong (毛泽东)",
      quoteSourceEn: "*Qin Yuan Chun · Snow (1936)*",
      analysisEn: {
        historicalBackground: "Commissioned under Zhou Enlai in September 1959 crowning Beijing's Great Hall of the People.",
        artistBiography: "Fu Baoshi commanded roaring mountain ranges & Yellow–Yangtze currents while Guan Shanyue anchored foreground pines, snow plateaus, and dawn sun.",
        artisticComposition: "Unites four Chinese seasons & cardinal directions in one 50 m² vision: snowy Great Wall plateaus, blooming southern vales, twin roaring rivers, and soaring rising crimson sun.",
        brushwork: "Fuses tumultuous dry-split 'Baoshi wrinkle' cascades directly with bold Lingnan green brushwork.",
        inkAndColor: "Radiant sun vermilion warms snow white ridges and lush malachite–azurite green plains.",
        spatialPerspective: "High-altitude atmospheric perspective gathers continent-spanning terrain cleanly across one horizon.",
        symbolism: "Eastern sunrise, evergreens, and ridges hail vibrant renewal and territorial harmony.",
        philosophicalMeaning: "Blends ancient Song court panoramas smoothly into 20th-century modern national epic.",
        artisticLegacy: "Highest-profile modern Chinese state-hall mural framing diplomatic summits continuously since 1959."
      },
      srEn: {
        scholarlyConsensus: "Anchored permanently inside Beijing's Great Hall welcoming world leaders (1:1 faithful exhibition canvas protects 1959 original).",
        debatedIssues: "Four-month Dongjiao hotel diary preserves Zhou Enlai advising brighter, larger sunrise scale.",
        comparativeContext: "Direct modern state-mural heir to Wang Ximeng's Song grand blue-green vista.",
        academicCitations: ["Guan Shanyue, *Reminiscences on Painting Such Great Beauty*.", "Fu Ershi, *Studies on Fu Baoshi*."]
      },
      hotspotsEn: [
        { categoryEn: "1959 State Vision", titleEn: "Dawn Sun Illuminating Four Simultaneous Chinese Seasons", detailEn: "Fuses wintry snowy plains right cleanly beside verdant sunlit southern mountains." },
        { categoryEn: "School Collaboration", titleEn: "Fu Baoshi Roaring Falls & Guan Shanyue Upright Pines", detailEn: "Seamlessly welds Northern waterfall storms onto serene Lingnan foreground strength." },
        { categoryEn: "Historic Colophon", titleEn: "Gold Cursive Title 'Jiangshan Ruci Duojiao'", detailEn: "Quoting Mao Zedong's 1936 poem across Beijing's premier diplomatic stage." }
      ]
    },
    "wanshan-hongbian": {
      dynastyEn: "Modern 20th Century (1964 CE)",
      creationDateEn: "1964 CE (At Xishan Studio, Beijing)",
      genreLabelEn: "Backlit Crimson Cinnabar Revolution",
      materialEn: "Vertical paper scroll, priceless mineral cinnabar & dense ink",
      museumEn: "National Art Museum of China / Beijing Collections",
      attributionEn: "Authenticated Peak Masterwork of Li Keran's seven-work *Ten Thousand Crimson Hills* suite.",
      artistSchoolEn: "Li Family Ink & Backlit Cinnabar",
      artistEraEn: "Modern & Contemporary",
      artistBioEn: "Pupil of both Qi Baishi and Huang Binhong who transformed classic ink scenery through fearless Western backlighting ('Niguang').",
      quoteEn: "See myriad hills glowing completely red, layered forests dyed throughout; emerald streams glide pure while hundreds of barges race...",
      quoteAuthorEn: "Mao Zedong (毛泽东)",
      quoteSourceEn: "*Qin Yuan Chun · Changsha (1925)*",
      analysisEn: {
        historicalBackground: "Translates evocative Changsha autumn verse visually by dabbing rare Qianlong-grade mineral cinnabar patiently atop towering black ink bones.",
        artistBiography: "Guided by motto 'Treasure the calm tone; demand majestic bone', Li Keran sketched field studies across thousands of mountain miles.",
        artisticComposition: "Compresses Fan Kuan-style dark monumental peaks across 90% frame height glowing blazing red above white cataracts and crisp black-tiled village walls.",
        brushwork: "Builds steel-dark Northern Song foundation under rhythmic overlapping cinnabar dabs.",
        inkAndColor: "Revolutionary backlighting sets bright white plastered houses and waterfalls blazing dramatically out from brooding velvet darkness.",
        spatialPerspective: "Overpowering close wall lifts autumn forest embers skyward like sacred temple flame.",
        symbolism: "Deep glowing cinnabar channels passionate hope and collective heroic spirit.",
        philosophicalMeaning: "Transforms passive scholar mountain retreat into incandescent modern vitality.",
        artisticLegacy: "Among highest-valued 20th-century Asian paintings (one version fetched 184M RMB in 2015).",
      },
      srEn: {
        scholarlyConsensus: "Preeminent suite of Li Keran's career defining 1960s modern Chinese landscape brilliance.",
        debatedIssues: "Appraisers celebrate irreplaceable antique mineral cinnabar pigment producing luminosity impossible with synthetic reds.",
        comparativeContext: "Shatters calm cool blue-green tradition cleanly with daring red–black–white dramatic lighting.",
        academicCitations: ["NAMOC, *Complete Works of Li Keran*.", "Lang Shaojun, *Li Keran & Crimson Hills Studies*."]
      },
      hotspotsEn: [
        { categoryEn: "Backlit Alchemy", titleEn: "Mineral Cinnabar Glowing Over Black Ink Peaks", detailEn: "Reversed backlighting charges dark Northern cliffs cleanly in sacred warm autumn embers." },
        { categoryEn: "Breathing Contrast", titleEn: "Glowing White Cataracts Slicing Red–Black Density", detailEn: "Twin unpainted white stream ribbons prevent suffocation across towering wall mass." },
        { categoryEn: "Li Family Architecture", titleEn: "Crisp White-Wall & Black-Roof Mountain Hamlet", detailEn: "Grounded Southern Jiangnan homes anchor lyric Changsha autumn warmth cleanly." }
      ]
    }
  };

  // Runtime patching onto window.CCE_PAINTINGS
  if (window.CCE_PAINTINGS) {
    (window.CCE_PAINTINGS.eras || []).forEach((e) => {
      const p = ERAS_EN[e.id];
      if (p) Object.assign(e, p);
    });
    (window.CCE_PAINTINGS.genres || []).forEach((g) => {
      const p = GENRES_EN[g.id];
      if (p) Object.assign(g, p);
    });
    (window.CCE_PAINTINGS.comparisons || []).forEach((c) => {
      const p = COMPARISONS_EN[c.id];
      if (p) Object.assign(c, p);
    });
    (window.CCE_PAINTINGS.museums || []).forEach((m) => {
      const p = MUSEUMS_EN[m.nameZh];
      if (p) Object.assign(m, p);
    });
    (window.CCE_PAINTINGS.attributionGuide || []).forEach((ag, i) => {
      const p = ATTRIBUTION_GUIDE_EN[i];
      if (p) Object.assign(ag, p);
    });
    (window.CCE_PAINTINGS.masterpieces || []).forEach((mp) => {
      const p = PAINTINGS_EN[mp.id];
      if (!p) return;
      if (mp.dynasty) mp.dynasty.nameEn = p.dynastyEn;
      mp.creationDateEn = p.creationDateEn;
      mp.genreLabelEn = p.genreLabelEn;
      mp.materialEn = p.materialEn;
      mp.museumEn = p.museumEn;
      mp.attributionEn = p.attributionEn;
      if (mp.artist) {
        if (!mp.artist.nameEn && mp.artist.pinyin) {
          mp.artist.nameEn = mp.artist.pinyin
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/ü/g, "u")
            .replace(/Ü/g, "U");
        }
        mp.artist.schoolEn = p.artistSchoolEn;
        mp.artist.eraEn = p.artistEraEn;
        mp.artist.bioEn = p.artistBioEn;
      }
      if (mp.featuredQuote) {
        mp.featuredQuote.en = p.quoteEn;
        mp.featuredQuote.authorEn = p.quoteAuthorEn;
        mp.featuredQuote.sourceEn = p.quoteSourceEn;
      }
      mp.analysisEn = p.analysisEn;
      mp.scholarlyResearchEn = p.srEn;
      if (Array.isArray(mp.hotspotAnnotations) && Array.isArray(p.hotspotsEn)) {
        mp.hotspotAnnotations.forEach((hs, idx) => {
          const hsp = p.hotspotsEn[idx];
          if (hsp) {
            hs.categoryEn = hsp.categoryEn;
            hs.titleEn = hsp.titleEn;
            hs.detailEn = hsp.detailEn;
          }
        });
      }
    });
  }
})();
