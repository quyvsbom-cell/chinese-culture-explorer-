// ============================================================================
// PROMPT A — MODULE 2: EN PARITY FOR MUSEUM GALLERY (ALL 37 ARTIFACTS + HOTSPOTS
// & ALL 6 CULTURAL SHOWCASE PILLARS)
// Pure scholarly English museum wall labels, metadata, and pin annotations.
// ============================================================================
(function () {
  "use strict";

  const SHOWCASE_EN = {
    "showcase-arch": {
      subtitleEn: "Dou-gong Bracketry, Courtyard Houses & the Great Wall",
      badgeEn: "Architecture",
      descriptionEn: "Spatial grammar anchored in axial symmetry, light-welcoming inner courtyards, and nail-free interlocking timber joinery reflecting civic cosmology."
    },
    "showcase-paint": {
      subtitleEn: "Five Ink Tones, Three Distances & Eloquent Blank Space",
      badgeEn: "Painting",
      descriptionEn: "Distills landscape vitality through resonant brush ink and open voids rather than static optical copying."
    },
    "showcase-calligraphy": {
      subtitleEn: "Seal, Clerical, Regular, Running & Cursive Across Epochs",
      badgeEn: "Calligraphy",
      descriptionEn: "Elevates script into moral-plastic art mirroring scholar cultivation from Shang oracle bones to Jin–Song running masters."
    },
    "showcase-lit": {
      subtitleEn: "From *Shijing* and *Shiji* to Tang Verse & Four Great Novels",
      badgeEn: "Literature",
      descriptionEn: "Literary continuity crystallizing historical memory, civic ethics, and classical East Asian letters."
    },
    "showcase-tea": {
      subtitleEn: "Green, Oolong, Pu'er & the Ancient Tea-Horse Road",
      badgeEn: "Tea Culture",
      descriptionEn: "From Lu Yu's Tang *Classic of Tea* to Min–Yue Gongfu tea ceremony and ocean-spanning maritime porcelain-tea exchange."
    },
    "showcase-festivals": {
      subtitleEn: "Spring Festival, Qingming, Dragon Boat & Mid-Autumn on 24 Solar Terms",
      badgeEn: "Festivals",
      descriptionEn: "Agrarian calendar rhythms harmonizing ancestral piety, neighborhood solidarity, and ecological seasonal wisdom."
    }
  };

  const ARTIFACTS_EN = {
    "jiangshan-ruci-duojiao": {
      categoryLabelEn: "Historical & Modern Painting",
      periodLabelEn: "Modern Era (1959 CE)",
      dateEstimateEn: "Completed September 1959",
      materialEn: "Monumental ink-and-color landscape on joined sheets of specially crafted Xuan paper",
      dimensionsEn: "H 650 cm × W 900 cm (Original at Great Hall of the People, Beijing)",
      originEn: "Jointly painted by masters Fu Baoshi (1904–1965, Jinling School) and Guan Shanyue (1912–2000, Lingnan School)",
      collectionEn: "Great Hall of the People, Beijing (人民大会堂) • CCE Visual Archive",
      attributionEn: "Great Hall of the People, Beijing (1959) • Joint Masterwork by Fu Baoshi & Guan Shanyue; Calligraphy Colophon by Mao Zedong",
      culturalSignificanceEn: "Twentieth-century landscape synthesis fusing North–South Chinese brushwork: Guan Shanyue painted the resolute foreground green pines in Lingnan style, while Fu Baoshi swept bold 'broken-brush textures' across rolling seas of cloud, western snow peaks, the Great Wall, and an eastern crimson sun beneath the grass-script title 'So Rich in Beauty Are Our Rivers and Mountains'.",
      historicalContextEn: "Encompasses all four seasons and four cardinal geographies of China simultaneously within an expansive high-and-level vista.",
      hotspotsEn: [
        { categoryEn: "Calligraphy & Colophon", titleEn: "Title Colophon: 'So Rich in Beauty Is This Land'", detailEn: "Five sweeping cursive characters inscribed top-left by Mao Zedong in September 1959 from his 1936 lyric 'Qin Yuan Chun · Snow', anchoring poetic vision to monumental composition." },
        { categoryEn: "Symbolism & Light", titleEn: "Eastern Rising Sun & Snow-Capped Kunlun Peaks", detailEn: "The crimson orb rising in the east illuminates snow slopes across Northern and Tibetan ridges, creating commanding warm-cool chromatic balance over mineral blue-green ink." },
        { categoryEn: "Dual-School Brushwork", titleEn: "Southern Evergreen Pines & Yangtze Torrents", detailEn: "Guan Shanyue (Lingnan) articulated resolute pines and warm southern waters, while Fu Baoshi deployed scattered 'Baoshi wrinkle strokes' across misty cataracts and northern crags." }
      ]
    },
    "qianli-jiangshan": {
      categoryLabelEn: "Historical Painting",
      periodLabelEn: "Northern Song (北宋)",
      dateEstimateEn: "c. 1113 CE (Zhenghe Reign)",
      materialEn: "Handscroll in Azurite and Malachite mineral pigments on silk",
      dimensionsEn: "H 51.5 cm × L 1,191.5 cm",
      originEn: "Capital Bianjing (Kaifeng, Henan); painted by prodigy Wang Ximeng at age 18 under Emperor Huizong's tutelage",
      collectionEn: "The Palace Museum, Beijing (故宫博物院)",
      attributionEn: "The Palace Museum, Beijing • Sole Surviving Blue-Green Landscape Masterpiece by Wang Ximeng (1113)",
      culturalSignificanceEn: "Absolute summit of Northern Song Blue-and-Green landscape painting. Unites all Three Distances (High, Deep, Level) across nearly 12 meters of glowing malachite-azurite pigments laid over warm ochre ground, retaining luminous brilliance after nine centuries.",
      historicalContextEn: "Created at the peak of Emperor Huizong's Imperial Painting Academy shortly before the 1127 Jingkang crisis, projecting an idealized vision of prosperous dynastic order.",
      hotspotsEn: [
        { categoryEn: "Mineral Pigment Tech", titleEn: "Five-Layer Azurite & Malachite Glazing", detailEn: "Coarse and fine crushed azurite and malachite bound in animal hide glue, layered repeatedly over warm mineral base silk to preserve jewel-like radiance across 900 years." },
        { categoryEn: "Detailed Genre Architecture", titleEn: "Timber Waterside Pavilions, Mills & Fishing Nets", detailEn: "Amid sweeping mountain ranges stand hundreds of grain-sized bridges, waterwheels, sails, and stilt cottages binding twin mountain massifs seamlessly across tranquil lakes." },
        { categoryEn: "Colophons & Seals", titleEn: "Cai Jing's 1113 Postscript & Qianlong Collection Seals", detailEn: "Grand Preceptor Cai Jing's Zhenghe-era colophon verifies Wang Ximeng's teenaged authorship alongside imperial seals of Huizong and Qianlong." }
      ]
    },
    "qingming-scroll": {
      categoryLabelEn: "Historical Painting",
      periodLabelEn: "Northern Song (北宋)",
      dateEstimateEn: "Early 12th Century CE",
      materialEn: "Ink and light color washes on woven silk",
      dimensionsEn: "H 24.8 cm × L 528.7 cm",
      originEn: "Zhang Zeduan (张择端), Northern Song Hanlin Academy Court Painter; depicting Bianjing (Kaifeng) along the Bian River",
      collectionEn: "The Palace Museum, Beijing (故宫博物院)",
      attributionEn: "The Palace Museum, Beijing • Original Northern Song National Treasure by Zhang Zeduan",
      culturalSignificanceEn: "An unmatched visual encyclopedia of Song urban commerce, timber shipbuilding, tax offices, pharmacies, and river-road transit — animating hundreds of vividly individualized townspeople around the strutless wooden Rainbow Bridge.",
      historicalContextEn: "Captures the Song Commercial Revolution as rigid Tang walled markets dissolved into vibrant day-and-night commercial streets bordering the Grand Canal.",
      hotspotsEn: [
        { categoryEn: "Suburban Transit", titleEn: "Morning Caravan Entering Bianjing Suburbs", detailEn: "The right-hand opening unfolds in misty suburban quiet as coal-laden mules and camels file toward the bustling metropolis." },
        { categoryEn: "Arch Timber Engineering", titleEn: "Wooden Rainbow Bridge (Hongqiao) Over the Bian", detailEn: "Climax of the scroll: an interlocking arch-timber bridge without river piers spans rushing boats whose crews scramble to lower masts before impact amid shouting crowds." },
        { categoryEn: "Northern Song Urbanism", titleEn: "City Gate Tower & Sun Yang's Grand Tavern", detailEn: "Inside the fortified gate stand Apothecary Zhao's clinic, wine pavilions, tea stalls, and dozens of recognizable guilds, monks, officials, and porters." }
      ]
    },
    "great-wall-scroll": {
      categoryLabelEn: "Painting & Architecture",
      periodLabelEn: "Great Wall Lineage (Zhou – Qin–Han – Ming)",
      dateEstimateEn: "Modern Ink Study rooted in Classical Shanshui Technique",
      materialEn: "Pine-soot ink and wolf-hair brush on Xuan paper (curatorial digital plate)",
      dimensionsEn: "16:9 Panoramic Study Ratio",
      originEn: "CCE Academic Visual Archive Synthesis",
      collectionEn: "CCE Digital Museum Study Collection",
      attributionEn: "CCE Visual Archive • Architectural Synthesis of Ming Great Wall Defense Line (Shanhaiguan – Badaling – Jiayuguan)",
      culturalSignificanceEn: "Unites twin pillars of Chinese aesthetics and engineering: five-tone monochrome ink wash ('Liubai' mountain mist) alongside serpentine ridge fortifications tracing northern mountain crests.",
      historicalContextEn: "Evolved cumulatively from fragmented Warring States walls unified under Qin Shihuang (214 BCE), extended across Han Hexi frontier, and fortified in fired brick watchtowers under the Ming.",
      hotspotsEn: [
        { categoryEn: "Military Signal Architecture", titleEn: "Two-Story Watchtowers & Beacon Fire Relays", detailEn: "Alternating daytime wolf-dung smoke pillars and nighttime bonfire codes paired with signal cannons relayed frontier alerts across thousands of li in mere hours." },
        { categoryEn: "Landscape Integration", titleEn: "Yanshan Crestline Masonry & Flying-White Dry Brush", detailEn: "Ramparts hug steep natural crags ('borrowing cliffs as ramparts'), rendered with dry split-bristle brushstrokes floating atop blank white mist." },
        { categoryEn: "Frontier Commerce", titleEn: "Customs Gates Regulating Tea–Horse Exchange", detailEn: "Simultaneously served as steppe cavalry barrier and customs corridor taxing regulated tea-for-horses commerce between agrarian interior and grasslands." }
      ]
    },
    "lantingji-xu": {
      categoryLabelEn: "Masterwork Calligraphy",
      periodLabelEn: "Eastern Jin (353 CE) / Tang Copy",
      dateEstimateEn: "Composed 353 CE; Tang 'Shenlong' Tracing Copy 7th Century CE",
      materialEn: "Ink on hemp paper executed via Double-Hook Tracing Outline ('Shuanggou Kuotian')",
      dimensionsEn: "24.5 cm × 69.9 cm",
      originEn: "Original by Sage of Calligraphy Wang Xizhi (王羲之) at Kuaiji (Shaoxing); copied at Tang Taizong's command by Feng Chengsu",
      collectionEn: "The Palace Museum, Beijing (故宫博物院)",
      attributionEn: "The Palace Museum, Beijing • Tang-Dynasty 'Shenlong' Copy by Feng Chengsu after Wang Xizhi (353)",
      culturalSignificanceEn: "Revered as 'Supreme Running Script Under Heaven'. Across 324 graphs, all twenty occurrences of 'zhi' (之) display distinct brush vitality — pairing Xuanxue meditation on fleeting human life with peerless calligraphic flow.",
      historicalContextEn: "Historical chronicles record Tang Taizong cherishing the original so deeply he had it interred inside his Zhaoling mausoleum; Feng Chengsu's ultra-faithful Shenlong copy remains closest to Wang's living breath.",
      hotspotsEn: [
        { categoryEn: "Running-Script Mastery", titleEn: "Twenty Distinct Variations of the Character 'Zhi' (之)", detailEn: "Every single appearance of 之 shifts entry angle, pressure, and sweeping tail so no two forms ever repeat mechanically." },
        { categoryEn: "Spontaneous Mind", titleEn: "Natural Corrections Made During Wine-Warmed Gathering", detailEn: "Uncensored ink edits on graphs such as 夫 and 斯 testify to spontaneous improvisation during the 353 Spring Purification cup-floating feast — unattainable even when Wang later tried recopying." },
        { categoryEn: "Imperial Authentication", titleEn: "Half-Impression 'Shenlong' Seal & Song–Yuan Colophons", detailEn: "Tang Emperor Zhongzong's 'Shenlong' seal alongside appraisals by Zhu Xi and Zhao Mengfu verify this tracing as the gold standard." }
      ]
    },
    "hanshi-tie": {
      categoryLabelEn: "Masterwork Calligraphy",
      periodLabelEn: "Northern Song (北宋)",
      dateEstimateEn: "1082 CE (5th Year of Yuanfeng)",
      materialEn: "Running-script ink manuscript on paper",
      dimensionsEn: "34.2 cm × 19.9 cm (Su Shi poem section)",
      originEn: "Su Shi (Su Dongpo 苏轼), penned in his third year of political exile at Huangzhou (Hubei)",
      collectionEn: "National Palace Museum, Taipei (国立故宫博物院)",
      attributionEn: "National Palace Museum, Taipei • Su Shi's Sovereign Running-Script Masterpiece (Huangzhou, 1082)",
      culturalSignificanceEn: "Ranked 'Third Best Running Script Under Heaven'. Exemplifies Song 'Shangyi' aesthetics prioritizing authentic emotional rhythm over stiff Tang regularity: tight opening graphs swell into surging, leftward-tilted strokes echoing Cold Food Festival rain and solitude.",
      historicalContextEn: "Embodies the Song literati revolution uniting Poetry, Calligraphy, and Painting into an intimate chronicle of personal moral resilience.",
      hotspotsEn: [
        { categoryEn: "Compositional Crescendo", titleEn: "Dense Left-Tilted Surge ('Stone Weighing a Toad')", detailEn: "Opening timidly with small brushstrokes, the two Cold Food exile poems steadily inflate in scale, diagonal tension, and wind-whipped momentum." },
        { categoryEn: "Expressive Vertical Drop", titleEn: "Sword-Sharp Downstrokes on 'Nian' and 'Ri'", detailEn: "Elongated vertical strokes slice straight down through Cold Food rain ('no hearth fire, no hot meal'), physically channeling political isolation onto paper." },
        { categoryEn: "Song Four Masters Dialogue", titleEn: "Huang Tingjian's Peer-Equal Flanking Colophon", detailEn: "Disciple-friend Huang Tingjian's bold sharp-tipped postscript hails Su's scroll as surpassing Yan Zhenqing reborn." }
      ]
    },
    "david-vases": {
      categoryLabelEn: "Classical Ceramics",
      periodLabelEn: "Yuan Dynasty (元朝)",
      dateEstimateEn: "1351 CE (Dated Zhizheng Year 11 Dedication)",
      materialEn: "White porcelain painted in imported 'Sumali' cobalt under clear glaze, Jingdezhen",
      dimensionsEn: "H 63.8 cm (Percival David B613 / B614)",
      originEn: "Jingdezhen kilns (Jiangxi), commissioned for a Daoist temple in Yushan",
      collectionEn: "The British Museum — Sir Percival David Collection (PDF B613 & B614)",
      attributionEn: "The British Museum (PDF B613 & B614) • Dated 1351 Jingdezhen Cobalt Blue-and-White Temple Vases",
      culturalSignificanceEn: "Global chronological cornerstone ('Rosetta Stone') for dating Yuan Blue-and-White porcelain, revealing how Eurasian Mongol–Yuan trade carried Persian cobalt across Central Asia into Jingdezhen kilns, forever transforming global ceramics.",
      historicalContextEn: "Directly illuminates maritime Southeast Asian ceramic exchange — prefiguring 15th-century Vietnamese Chu Dau blue-and-white export ware sharing cobalt underglaze craft.",
      hotspotsEn: [
        { categoryEn: "Chronological Epigraphy", titleEn: "62-Character Cobalt Dedicatory Inscription (1351)", detailEn: "Collar calligraphy names patron Zhang Wenjin presenting the altar pair to Xingshan Hall in the 4th month of Zhizheng 11 (1351)." },
        { categoryEn: "Glaze Chemistry", titleEn: "Imported Persian 'Smalts' Cobalt Iron Spotting", detailEn: "Iron-rich Kashan cobalt fired at 1,300 °C produced deep sapphire tones flecked with metallic crystalline dark 'heaped and piled' halos across coiling four-clawed dragons." },
        { categoryEn: "Altar Iconography", titleEn: "Sculpted Elephant-Head Ring Handles", detailEn: "Trumpeting mouths and rounded shoulders paired with curled-trunk elephant ears typify three-piece Yuan Daoist–Buddhist altar garnitures." }
      ]
    },
    "chenghua-cup": {
      categoryLabelEn: "Classical Ceramics",
      periodLabelEn: "Ming Dynasty (明朝)",
      dateEstimateEn: "Chenghua Reign (1465–1487 CE)",
      materialEn: "Jingdezhen imperial Doucai porcelain (underglaze blue outlines filled with overglaze enamels)",
      dimensionsEn: "H ~3.4 cm × Mouth Diameter ~8.3 cm",
      originEn: "Jingdezhen Imperial Kiln Factory for Emperor Xianzong",
      collectionEn: "The Palace Museum, Beijing & The Metropolitan Museum of Art",
      attributionEn: "Palace Museum Beijing & The Met • Imperial Chenghua Doucai 'Chicken Cup' (1465–1487)",
      culturalSignificanceEn: "Pinnacle of intimate mid-Ming imperial refinement: double firing locks delicate cobalt outlines beneath luminous jade-smooth overglaze red, yellow, and green portraying rooster, hen, and chicks beside gardenias and peonies.",
      historicalContextEn: "Revered obsessively by later Wanli and Kangxi–Qianlong emperors as the unreachable benchmark of imperial kiln tenderness.",
      hotspotsEn: [
        { categoryEn: "Household Symbolism", titleEn: "Tender Hen, Rooster & Chicks Motif ('Zimuji')", detailEn: "Unlike austere imperial dragon wares, domestic fowl foraging beside peonies celebrate family harmony and 'sending sons' puns." },
        { categoryEn: "Dual-Firing Chemistry", titleEn: "'Contending Colors' (Doucai) Overglaze Technique", detailEn: "Cobalt outlines fired at ~1,300 °C beneath transparent glaze, then filled with yellow, iron-red, and emerald enamels and low-fired at ~800 °C for silky warmth." },
        { categoryEn: "Imperial Reign Mark", titleEn: "Translucently Thin Walls & Six-Character Square Base", detailEn: "Millimeter-thin porcelain allows warm light transmission above a neatly framed double-square 'Made in Chenghua Reign' mark." }
      ]
    },
    "yongle-dadian": {
      categoryLabelEn: "Rare Manuscripts & Editions",
      periodLabelEn: "Ming Dynasty (明朝)",
      dateEstimateEn: "Compiled 1403–1408 CE; Jiajing Imperial Duplicate 1562–1567 CE",
      materialEn: "Oversized Xuan paper bound in yellow-silk wrapped-back imperial format, black regular script inside cinnabar rulings",
      dimensionsEn: "~50.3 cm × 30.0 cm per double-folded leaf",
      originEn: "Compiled under Emperor Yongle by over 2,100 scholars directed by Xie Jin & Yao Guangxiao",
      collectionEn: "National Library of China (Beijing) & Chester Beatty Library",
      attributionEn: "National Library of China • Largest Pre-Modern Manuscript Encyclopedia in World History (1408)",
      culturalSignificanceEn: "Colossal medieval encyclopedia spanning 22,877 chapters across 11,095 manuscript volumes. Its strictly verbatim rhyme-indexed copying preserved entire Tang–Song classics and medical manuals otherwise lost forever.",
      historicalContextEn: "Devastated by late-Ming turmoil and the 1900 Beijing conflicts, roughly 400+ volumes (<4% of total) survive scattered across global research libraries.",
      hotspotsEn: [
        { categoryEn: "Imperial Calligraphy & Layout", titleEn: "Cinnabar 'Vermilion Silk' Ruled Columns", detailEn: "Two thousand scribes standardized 8-column, 28-character frames drawn in bright cinnabar ink around crisp pine-soot regular script." },
        { categoryEn: "Archival Bookbinding", titleEn: "Yellow Silk Wrapped-Back Format ('Baobeizhuang')", detailEn: "Folded Xuan leaves oriented spine-outward inside heavyweight golden silk stiff boards resisted silverfish across centuries." },
        { categoryEn: "Textual Preservation", titleEn: "Verbatim Archiving of Lost Song–Yuan Treatises", detailEn: "Copying books strictly word-for-word rescued priceless passages from the *Old History of the Five Dynasties* and rare Song medical manuscripts." }
      ]
    },
    "daming-hunyitu": {
      categoryLabelEn: "Historical Cartography",
      periodLabelEn: "Early Ming Dynasty (明初)",
      dateEstimateEn: "c. 1389 CE (Hongwu Year 22)",
      materialEn: "Mineral colors painted on vast joined silk panels; original Chinese toponyms overlaid with Qing Manchu slips",
      dimensionsEn: "386 cm × 456 cm",
      originEn: "Drafted at early-Ming Nanjing capital synthesizing Eurasian–African geographic knowledge before Zheng He's fleets",
      collectionEn: "First Historical Archives of China, Beijing (中国第一历史档案馆)",
      attributionEn: "First Historical Archives of China, Beijing • Great Ming Amalgamated World Map (c. 1389)",
      culturalSignificanceEn: "One of East Asia's oldest surviving world maps: magnifying China, Korea, and Dai Viet at center while clearly delineating the Indian subcontinent, Arabian peninsula, Europe, and Africa's southern cape and inland lakes predating Vasco da Gama.",
      historicalContextEn: "Historiographic note: Pre-modern Sino-centric maps scaled regions by political–cultural prominence rather than uniform trigonometric projection or modern borders.",
      hotspotsEn: [
        { categoryEn: "Historical Cosmography", titleEn: "Magnified Core From Korea to Jiaozhi (Dai Viet)", detailEn: "Across 18 square meters of silk, the Central Plains, Yangtze, Yellow River, Korea, and Vietnam occupy commanding central scale." },
        { categoryEn: "Global Maritime Cartography", titleEn: "African Peninsula Drawn 90 Years Before Da Gama", detailEn: "Remarkably depicts Africa's southward taper and interior rift-valley waters decades ahead of Portuguese sea rounding of the Cape." },
        { categoryEn: "Archival Provenance", titleEn: "17th-Century Qing Manchu Paper Label Overlays", detailEn: "Upon entering the Qing palace archives, scribes pasted bilingual Manchu paper slips directly atop Hongwu-era Chinese place names." }
      ]
    },
    "taihe-dian": {
      categoryLabelEn: "Classical Architecture",
      periodLabelEn: "Ming – Qing (明清)",
      dateEstimateEn: "Founded 1420 CE (Yongle); surviving timber hall rebuilt 1695 CE (Kangxi)",
      materialEn: "Phoebe zhennan 'Nanmu' columns, interlocking Dou-gong bracketry, three-tiered white marble podium, glazed yellow tiles",
      dimensionsEn: "L 63.96 m × W 37.20 m; Total H 35.05 m (including Sumeru podium)",
      originEn: "Central Imperial Axis of Forbidden City, Beijing",
      collectionEn: "The Palace Museum, Beijing (UNESCO World Heritage)",
      attributionEn: "The Palace Museum, Beijing • Heart of the Forbidden City's Ceremonial Axis (UNESCO 1987)",
      culturalSignificanceEn: "China's grandest surviving ancient timber edifice: eleven-bay frontage, double-eaved hip roof, coiled dragons, and an unprecedented ten roof-ridge guardians all encode cosmic 'Son of Heaven' ritual order.",
      historicalContextEn: "Successively named Fengtian Hall (Yongle), Huangji Hall (Jiajing), and Taihe Hall (1645); repeated lightning fires left the extant 1695 Kangxi reconstruction.",
      hotspotsEn: [
        { categoryEn: "Imperial Roof Hierarchy", titleEn: "Double-Eaved Hip Roof & Unique Ten Ridge Beasts", detailEn: "Features China's sole complete procession of 10 glazed guardian beasts marching behind the phoenix-mounted immortal — highest imperial rank." },
        { categoryEn: "Seismic Timber Craft", titleEn: "Nail-Free Interlocking Dou-gong Clusters", detailEn: "Layered Nanmu cap-blocks and curved bracket arms distribute tons of roof tile across elastic joints surviving 600 years of earthquakes." },
        { categoryEn: "Cosmic Geometry", titleEn: "Three-Tiered White Marble 'Tu'-Shaped Terrace", detailEn: "Sculpted marble balustrades channel rainwater through 1,142 carved dragon spouts, visually enthroning the sovereign atop cosmic Mount Sumeru." }
      ]
    },
    "forbidden-city-axis-gate": {
      categoryLabelEn: "Classical Architecture",
      periodLabelEn: "Ming – Qing (明清)",
      dateEstimateEn: "1406–1420 CE (Ming Yongle Construction)",
      materialEn: "Vermilion-lacquered Nanmu timber doors with 9×9 (81) gilded bronze studs, granite & white marble imperial paving",
      dimensionsEn: "North–South Axis L 961 m × W 753 m (Complex 724,250 m²)",
      originEn: "Central Imperial Axis Portal framing the Supreme Harmony Courtyard, Beijing",
      collectionEn: "The Palace Museum, Beijing (UNESCO World Heritage)",
      attributionEn: "CCE Archival Visual Study • Forbidden City Central Gate Axial Perspective",
      culturalSignificanceEn: "Every central royal gate leaf bears 81 gilded bronze studs in nine horizontal by nine vertical rows ('Nine-Across Nine-Down' — pure Yang numerical symbolism of the Son of Heaven), doubly securing timber joinery while framing the marble throne terrace beyond.",
      historicalContextEn: "From the Meridian Gate across Golden Water Bridges to Supreme Harmony Hall, single-point perspective pulls visitors instantaneously toward the glowing marble triple terrace.",
      hotspotsEn: [
        { categoryEn: "Imperial Symbolism", titleEn: "9×9 = 81 Gilded Bronze Gate Studs & Lion Ring", detailEn: "Vermilion timber doors carry nine rows of nine gilded hemispherical studs — encoding the supreme Yang numeral of the emperor alongside a sculpted gilded lion-head knocker." },
        { categoryEn: "Axial Framing", titleEn: "Framed Vista of the Hall of Supreme Harmony", detailEn: "Opening the massive portal leaves aligns one's gaze effortlessly across the sunlit plaza toward the triple-tiered white marble terrace and golden double-hipped roof." },
        { categoryEn: "Processional Stonework", titleEn: "Central Imperial Stone Way (Yudao)", detailEn: "Flanked by blue-gray flagstones, the elevated pale marble spine reserved exclusively for the emperor's palanquin establishes unbroken axial geometry." }
      ]
    },
    "houmuwu-ding": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Late Shang Dynasty (商代晚期)",
      dateEstimateEn: "c. 13th–11th Century BCE (Yinxu, Anyang)",
      materialEn: "Bronze (copper–tin–lead alloy) cast via sectional clay piece-molds",
      dimensionsEn: "H 133 cm × Rim 110 cm × 79 cm; Weight 832.84 kg",
      originEn: "Excavated 1939 at Wuguan Village, Anyang, Henan (Late Shang capital Yinxu)",
      collectionEn: "National Museum of China, Beijing (中国国家博物馆)",
      attributionEn: "National Museum of China, Beijing • World's Heaviest Surviving Ancient Bronze Vessel (832.84 kg)",
      culturalSignificanceEn: "Heaviest intact ritual bronze from antiquity worldwide. Relief Taotie beast masks and Kui dragons guard the exterior while an interior oracle-script cast inscription names Royal Consort Mother Wu ('Houmuwu' / 'Simuwu') of King Wu Ding.",
      historicalContextEn: "Simultaneous pouring of 832 kg of molten bronze demanded synchronized coordination of dozens of crucibles and hundreds of foundry specialists — stark proof of Shang state organizational capacity.",
      hotspotsEn: [
        { categoryEn: "Archaic Epigraphy", titleEn: "Interior Cast Inscription 'Hou Mu Wu'", detailEn: "Three sunken graphs inside the inner wall dedicate the cauldron to King Wu Ding's royal queen Mother Wu (~1200 BCE), affirming ancestral sacra legitimacy." },
        { categoryEn: "Bronze Relief Iconography", titleEn: "Taotie Mask & Spiral Leiwen Cloud Scrolls", detailEn: "Gazing beast masks ringed by dense thunder-scroll fretwork project solemn intermediary power between ancestors and Heaven." },
        { categoryEn: "Shang Foundry Craft", titleEn: "Monumental Sectional Piece-Mold Casting", detailEn: "Required hundreds of artisans pouring molten alloy in unison from over twenty furnaces into complex multi-part fired clay molds." }
      ]
    },
    "liangzhu-yucong": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Late Neolithic – Liangzhu Culture (良渚文化)",
      dateEstimateEn: "c. 3300–2300 BCE (Fanshan Mound M12, excavated 1986)",
      materialEn: "Tremolite nephrite jade with micro-relief and incised carving",
      dimensionsEn: "H 8.8 cm × Outer Diameter 17.1–17.6 cm; Weight 6.5 kg",
      originEn: "Archaeological Ruins of Liangzhu City (Hangzhou, Zhejiang)",
      collectionEn: "Zhejiang Provincial Museum, Hangzhou (浙江省博物馆)",
      attributionEn: "Zhejiang Provincial Museum, Hangzhou • 'King of Cong Jades', Liangzhu Culture (~3300–2300 BCE)",
      culturalSignificanceEn: "Embodies the square-exterior, circular-bore geometry anticipating later 'Round Heaven, Square Earth' cosmology. Four corner faces bear eight microscopic 'Deity-and-Beast' emblems engraved at ~5 parallel lines per millimeter into stone harder than bronze.",
      historicalContextEn: "Proves sophisticated hydraulic urban statecraft thrived along the Lower Yangtze over 5,000 years ago independently of Yellow River Neolithic centers.",
      hotspotsEn: [
        { categoryEn: "Neolithic Micro-Carving", titleEn: "Deity-Beast Emblems Incised at 5 Lines per Millimeter", detailEn: "Across Mohs 6.5 nephrite harder than steel, Neolithic artisans drew quartz-sand cords or shark-tooth points producing 0.2 mm non-intersecting parallel lines." },
        { categoryEn: "Proto-Cosmology", titleEn: "Square Body & Round Bore ('Round Heaven, Square Earth')", detailEn: "The central cylinder symbolizes vertical communication toward Heaven while four cornered sides anchor Earth — 1,000 years before oracle bone writing." },
        { categoryEn: "Archaeological Provenance", titleEn: "Record 6.5 kg Jade from Fanshan Tomb M12", detailEn: "Excavated from the UNESCO-listed Fanshan royal cemetery, evidencing Lower Yangtze theocratic–royal stratification." }
      ]
    },
    "zheng-he-navigation-chart": {
      categoryLabelEn: "Historical Cartography",
      periodLabelEn: "Ming Dynasty (明朝)",
      dateEstimateEn: "1405–1433 CE Voyages; printed in *Wubei Zhi* 1621",
      materialEn: "Woodblock-printed accordion coastal strip scroll across 20 folding plates",
      dimensionsEn: "H 20.5 cm × Total Length ~560 cm",
      originEn: "Derived directly from Zheng He's treasure-fleet logs, compiled by Mao Yuanyi in Nanjing",
      collectionEn: "Library of Congress (Washington, D.C.) & National Library of China",
      attributionEn: "Library of Congress & National Library of China • Mao Kun Maritime Scroll (15th–17th Century)",
      culturalSignificanceEn: "Asia's longest pre-modern nautical rutter, mapping over 500 coastal landmarks from Nanjing through the Eastern Sea (Champa, Dai Viet), Malacca, and the Indian Ocean to Malindi in East Africa — accompanied by four stellar-altitude latitude charts.",
      historicalContextEn: "Cartographic note: Drawn as a continuous directional strip chart paired with 24-azimuth magnetic compass bearings ('Geng' watches) and lead sounding depths rather than modern Mercator projection.",
      hotspotsEn: [
        { categoryEn: "South China Sea History", titleEn: "Coastal Route Past Champa, Cu Lao Cham & Malacca", detailEn: "Pinpoints passages from the Yangtze mouth past Outer Luoshan (Cu Lao Re) and Xinzhou Port (Quy Nhon) onward to Malacca with depth warnings." },
        { categoryEn: "Nautical Instrumentation", titleEn: "24-Point Magnetic Compass Bearings & 'Geng' Timing", detailEn: "Every sea leg specifies watch intervals (~2.4 hrs each) and exact magnetic needle azimuths — 15th-century Asia's sharpest navigational science." },
        { categoryEn: "Astronomical Navigation", titleEn: "'Guoyang Qianxing' Cross-Staff Star Sighting Plates", detailEn: "Four final plates diagram 12 graduated wooden finger-boards measuring Polaris and Southern Cross altitudes across open Indian Ocean crossings." }
      ]
    },
    "acupuncture-bronze-figure": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Northern Song (北宋)",
      dateEstimateEn: "Designed 1027 CE (Tiansheng Year 5)",
      materialEn: "Hollow-cast bronze incised with 354 acupoints and 12 primary meridians",
      dimensionsEn: "Life-sized Adult Proportions (~172 cm)",
      originEn: "Designed by Imperial Physician Wang Weiyi for Song Renzong's Imperial Medical Academy",
      collectionEn: "National Museum of China (showing 1443 Ming Zhengtong replica)",
      attributionEn: "National Museum of China • Northern Song Acupuncture Bronze Model (Wang Weiyi 1026; 1443 Replica)",
      culturalSignificanceEn: "Ancient medical engineering marvel: fitted internally with wooden organs, coated cleanly in beeswax, and filled with water for Imperial Medical examinations — piercing an exact point released water immediately, whereas missing snapped the needle against solid bronze.",
      historicalContextEn: "Standardized acupoint anatomy alongside the stone-inscribed *Illustrated Canon of Acupoints*, shaping Tran–Le Thai Y Vien medicine in Dai Viet and Edo Japan.",
      hotspotsEn: [
        { categoryEn: "Medical Examination Device", titleEn: "Beeswax Seal & Internal Water-Spout Licensing Exam", detailEn: "Coated invisibly in wax and filled with water: pinpoint needle accuracy triggered water jets while off-target thrusts met impenetrable bronze." },
        { categoryEn: "Anatomical Standardization", titleEn: "354 Standardized Points & 12 Primary Meridians", detailEn: "First unified 1:1 anatomical reference eliminating confusing conflicting textual localizations across regional medical lineages." },
        { categoryEn: "Sino–Vietnamese Medicine", titleEn: "Foundational Bridge to Tue Tinh & Hai Thuong Lan Ong", detailEn: "Song–Ming standardized meridian taxonomy passed into Vietnam's Imperial Medical Institutes and foundational classical compendia." }
      ]
    },
    "han-shipan-astrolabe": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Western Han (西汉)",
      dateEstimateEn: "2nd–1st Century BCE (Marquis of Ruyin Tomb, 165 BCE)",
      materialEn: "Cast bronze and lacquered wood combining rotating Heaven Plate atop Square Earth Base",
      dimensionsEn: "Square Earth Plate 13.5 × 13.5 cm; Heaven Disc Diameter 9.5 cm",
      originEn: "Excavated at Shuanggudui (Fuyang, Anhui) & British Museum comparative mirrors",
      collectionEn: "Anhui Museum & The British Museum",
      attributionEn: "Anhui Museum & British Museum • Western Han Liuren–Taiyi Diviner's Astrolabe (165 BCE)",
      culturalSignificanceEn: "Earliest material cosmic calculator: its rotating central Heaven Plate depicts the Seven Stars of the Big Dipper amidst 28 Lunar Mansions, turning above a square Earth Base calibrated in Stems, Branches, and Eight Trigrams — direct ancestor of geomantic compasses.",
      historicalContextEn: "Buried alongside shadow gnomons and early *Yijing* manuscripts, proving tight synergy between Han observational astronomy and cosmological correlative thought.",
      hotspotsEn: [
        { categoryEn: "Ancient Astronomy", titleEn: "Rotating Big Dipper Heaven Dial", detailEn: "Central Big Dipper ladle rotates across seasons to mark lunar mansions and monthly solar nodes." },
        { categoryEn: "Correlative Cosmology", titleEn: "Square Earth Board: Stems, Branches & Trigrams", detailEn: "Stationary square perimeter encodes 10 Heavenly Stems, 12 Earthly Branches, 28 Mansions, and Eight Trigrams in mechanical 'Moving Heaven, Still Earth' harmony." },
        { categoryEn: "History of Science", titleEn: "Mechanical Ancestor of the Magnetic Geomancer Compass", detailEn: "Mounting a lodestone spoon ('Sinan') onto this Han cosmic dial directly birthed the magnetic Fengshui Luopan compass." }
      ]
    },
    "chu-dau-blue-white-ceramic": {
      categoryLabelEn: "Classical Ceramics",
      periodLabelEn: "15th Century (Ming – Early Le)",
      dateEstimateEn: "c. 1450–1500 CE (parallel to dated 1450 Topkapi vase)",
      materialEn: "White stoneware painted in underglaze cobalt blue beneath warm rice-husk ash glaze",
      dimensionsEn: "H 54 cm (referencing 15th-century export bottle & altar candlestands)",
      originEn: "Technical–trade dialogue between Jingdezhen (Jiangxi) and Chu Dau kilns (Hai Duong, Dai Viet)",
      collectionEn: "Vietnam National Museum of History (Hanoi) & Topkapi Saray (Istanbul)",
      attributionEn: "Vietnam National Museum of History & Topkapi Palace • Dai Viet Blue-and-White Export Ceramic (15th Century)",
      culturalSignificanceEn: "Highlights a remarkable 15th-century maritime trade shift: when Ming 'Sea Bans' curtailed private Chinese porcelain exports, Vietnamese Chu Dau kilns captured global orders from Hoi An shipwrecks to Southeast Asia, Japan, and the Ottoman court in Istanbul.",
      historicalContextEn: "Chu Dau lotus, peony, and river-bird motifs blend shared East Asian cobalt brushwork with unmistakably warm Red River Delta poetic sensibility.",
      hotspotsEn: [
        { categoryEn: "Vietnamese Ceramic Epigraphy", titleEn: "Signed 1450 Bui Thi Hy Brush Inscription at Topkapi", detailEn: "The 54 cm Topkapi Chu Dau bottle bears an authentic 1450 inscription naming female artisan Bui Thi Hy of Nam Sach Prefecture." },
        { categoryEn: "Indigenous Glaze Craft", titleEn: "Warm Ivory Rice-Husk Ash Glaze & Pastoral Foliage", detailEn: "Distinct from cool bluish Jingdezhen porcelain, Chu Dau uses luminous rice-husk ash glazes framing lotus, chrysanthemum, and kingfisher vignettes." },
        { categoryEn: "15th-Century Maritime Trade", titleEn: "Cu Lao Cham Shipwreck Amid Ming Sea Bans", detailEn: "During Ming maritime restrictions, thousands of Chu Dau export pieces sailed across the Eastern Sea toward Islamic and European markets." }
      ]
    },
    "sanxingdui-bronze-mask": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Ancient Shu — Late Shang Contemporary",
      dateEstimateEn: "c. 13th–12th Century BCE (Sacrificial Pit K2, excavated 1986)",
      materialEn: "Piece-mold cast bronze (copper–tin–lead alloy)",
      dimensionsEn: "H 65 cm × W 138 cm; projecting eye cylinders 16 cm",
      originEn: "Sanxingdui Ruins (Guanghan, Sichuan — Upper Yangtze Ancient Shu civilization)",
      collectionEn: "Sanxingdui Museum, Guanghan, Sichuan (三星堆博物馆)",
      attributionEn: "Sanxingdui Museum, Sichuan • Monumental Protruding-Eye Shu Deity Mask (~1200–1050 BCE)",
      culturalSignificanceEn: "Transformed understanding of Chinese civilizational origins — overturning single-cradle Yellow River assumptions to reveal a 'pluralistic unity' (多元一体) featuring cylindrical 16-cm protruding eyes matching Shu chronicles of ancestral King Cancong.",
      historicalContextEn: "Unearthed alongside a 3.96 m bronze Sacred Tree, hammered gold masks, elephant tusks, and Indian Ocean cowrie shells proving far-flung Sichuan–South Asia networks.",
      hotspotsEn: [
        { categoryEn: "Myth & Archaeology", titleEn: "16 cm Cylindrical Protruding Eyes (King Cancong)", detailEn: "Telescopic pupils corroborate *Huayang Guozhi* chronicles describing legendary Shu founder Cancong as having 'vertically projecting eyes'." },
        { categoryEn: "Ritual Power Emblem", titleEn: "Flared Listening Ears & Forehead Socket for Kui Dragon", detailEn: "Sweeping wing-like ears attuned to the four quarters flank a square brow mortise once holding a towering bronze Kui-dragon crest." },
        { categoryEn: "Plural Civilizational Roots", titleEn: "Independent Upper-Yangtze Bronze Metallurgy", detailEn: "Unique Pit K2 alloy signatures establish the Chengdu Plain as an autonomous Bronze Age center alongside Central Plains Shang." }
      ]
    },
    "zeng-hou-yi-bianzhong": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Early Warring States (战国早期)",
      dateEstimateEn: "433 BCE (excavated 1978, Suizhou, Hubei)",
      materialEn: "65 graduated bronze bells suspended on a three-tier lacquered wood & cast-bronze rack",
      dimensionsEn: "Frame L 748 cm × H 265 cm; Total Bronze Weight >2,567 kg",
      originEn: "Tomb of Marquis Yi of Zeng, Leigudun (Suizhou, Hubei — Chu Cultural Sphere)",
      collectionEn: "Hubei Provincial Museum, Wuhan (湖北省博物馆)",
      attributionEn: "Hubei Provincial Museum, Wuhan • 65-Bell Marquis Yi of Zeng Chime Carillon (c. 433 BCE)",
      culturalSignificanceEn: "Masterpiece of ancient acoustic physics and bronze metallurgy: almond-shaped cross-sections enable every single bell to ring two distinct clear pitches separated by a major or minor third when struck center vs. shoulder — spanning 5 octaves with full 12 chromatic semitones.",
      historicalContextEn: "Inlaid with 3,755 gold-filled seal-script graphs cross-indexing musical tuning standards across Zeng, Chu, Jin, Qi, and Zhou courts.",
      hotspotsEn: [
        { categoryEn: "Acoustic Physics", titleEn: "Dual-Tone Almond Section ('Two Pitches Per Bell')", detailEn: "Lens-shaped oval profiles decouple vibrational modes cleanly between center *sui* strike and side *gu* strike without mutual interference." },
        { categoryEn: "Musical Historiography", titleEn: "Gold-Inlaid Chromatic Tuning Inscriptions", detailEn: "Over 2,800 inlaid seal characters compare regional twelve-tone pitch systems across rival states, enabling full key modulation." },
        { categoryEn: "Chu Court Sculpture", titleEn: "Armored Bronze Bearers Supporting 2.5 Tons", detailEn: "Six cast-bronze warrior caryatids steady 7.5 meters of lacquered beams, embodying Zhou–Chu 'Bells and Cauldrons' state ritual." }
      ]
    },
    "tiangong-kaiwu-woodblock": {
      categoryLabelEn: "Rare Manuscripts & Editions",
      periodLabelEn: "Late Ming Dynasty (明末)",
      dateEstimateEn: "1637 CE (10th Year of Chongzhen)",
      materialEn: "Woodblock-printed technical encyclopedia on Jiangxi bamboo paper",
      dimensionsEn: "18 Fascicles in 3 Volumes with 123 Technical Woodcuts",
      originEn: "Compiled by Song Yingxing (1587–1666) while serving in Fenyi, Jiangxi",
      collectionEn: "National Library of China & Bibliothèque nationale de France (Paris)",
      attributionEn: "National Library of China & BnF Paris • Song Yingxing's 1637 Illustrated Compendium of Crafts & Engineering",
      culturalSignificanceEn: "Hailed by Joseph Needham as 'China's 17th-century encyclopedia of technology'. Crisp woodcuts document draw-loom weaving patterns, bronze casting, Jingdezhen porcelain kilns, zinc distillation, and deep Sichuan salt drilling.",
      historicalContextEn: "In his candid preface, Song declared the work wholly divorced from civil-service exam ambition — reflecting late-Ming Empirical Practical Learning ('Shixue').",
      hotspotsEn: [
        { categoryEn: "Engineering Graphics", titleEn: "123 Proportioned Technical Woodblock Diagrams", detailEn: "Depicts mechanical draw-looms ('Hualouji'), piston blast-furnace bellows, and multi-hundred-meter bamboo salt rigs in field detail." },
        { categoryEn: "Pre-Industrial Metallurgy", titleEn: "First Quantitative Account of Metallic Zinc Smelting", detailEn: "Documents retort zinc distillation and brass alloying a full century ahead of European industrial patents." },
        { categoryEn: "Philosophy of Technology", titleEn: "Harmony of Heaven's Creation and Human Craft", detailEn: "The title *Tiangong Kaiwu* affirms intelligent cooperation between natural ecological force and empirical human ingenuity." }
      ]
    },
    "jinshi-doctoral-stele": {
      categoryLabelEn: "Classical Texts & Steles",
      periodLabelEn: "Le–Mac (1442–1779) & Yuan–Ming–Qing",
      dateEstimateEn: "Erected from 1484 (Thang Long) & 1306–1904 (Beijing)",
      materialEn: "Carved bluestone steles in crisp Regular script seated atop stone tortoises (Bixi)",
      dimensionsEn: "82 Steles at Hanoi Temple of Literature; 198 Steles at Beijing Guozijian",
      originEn: "Temple of Literature (Hanoi, Dai Viet) & Imperial Academy (Beijing, China)",
      collectionEn: "Hanoi Temple of Literature Heritage Site & Beijing Guozijian Museum",
      attributionEn: "Hanoi & Beijing Imperial Academies • UNESCO Memory of the World Doctoral Steles",
      culturalSignificanceEn: "Enduring twin monuments to East Asian meritocratic scholarship. On Hanoi's 1484 stele, scholar Than Nhan Trung carved the immortal line: 'Virtuous talent is the lifeblood of the nation.' Inscribed by UNESCO Memory of the World (2010–2011).",
      historicalContextEn: "While Beijing's 198 imperial steles enforce uniform dynastic sobriety, Thang Long's 82 steles burst with evolving reliefs of twin dragons greeting the sun, lotus petals, and village vitality.",
      hotspotsEn: [
        { categoryEn: "Stele Relief Motifs", titleEn: "Twin Dragons Facing Sun & Cloud-Lotus Tympanums", detailEn: "Pediment reliefs gracefully contrast Beijing's formal five-clawed imperial dragons against fluid Early Le–Mac dragon spirals." },
        { categoryEn: "Shared Civic Ethos", titleEn: "Than Nhan Trung's 1484 Maxim on National Talent", detailEn: "Recording laureates from 1442–1779, the 1484 inscription rivals any of Beijing's 198 steles in eloquent civic philosophy." },
        { categoryEn: "Symbolic Tortoise Base", titleEn: "Mythic Stone Tortoise Bixi Upholding Immortality", detailEn: "Beloved son of the Dragon King known for bearing crushing weight, ensuring scholars' names endure alongside heaven and earth." }
      ]
    },
    "ma-dap-phi-yen": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Eastern Han (东汉, 2nd Century CE)",
      dateEstimateEn: "2nd Century CE (excavated October 1969)",
      materialEn: "Hollow-cast bronze",
      dimensionsEn: "H 34.5 cm × L 45 cm × W 13 cm (Weight 7.15 kg)",
      originEn: "Leitai Han Tomb, Wuwei (Hexi Corridor, Gansu)",
      collectionEn: "Gansu Provincial Museum, Lanzhou (甘肃省博物馆)",
      attributionEn: "Gansu Provincial Museum • Eastern Han National Emblem Bronze Galloping Horse Treading a Swallow (1969)",
      culturalSignificanceEn: "Chosen as China's official Tourism Emblem for its astonishing aerodynamic balance: the entire 7.15 kg galloping warhorse rests its center of gravity effortlessly upon a single right hind hoof grazing the back of a soaring swallow.",
      historicalContextEn: "Mirrors Han cavalry prowess powered by swift Fergana 'Heavenly Horses' guarding the Silk Road's Hexi Corridor after Zhang Qian's missions.",
      hotspotsEn: [
        { categoryEn: "Dynamic Equilibrium", titleEn: "Entire 7.15 kg Mass Balanced on One Swallow-Tip Hoof", detailEn: "Cast center of mass converges precisely through a single right hind fetlock skimming over the startled swallow's back." },
        { categoryEn: "Han Naturalism", titleEn: "Unilateral 'Flying Pace' Gait", detailEn: "Synchronized extension of same-side fore and hind hooves evokes weightless velocity surging above Hexi steppe clouds." },
        { categoryEn: "Silk Road Cavalry", titleEn: "Western Regions 'Heavenly Steed' Breeding Legacy", detailEn: "Celebrates prize Dayuan steeds vital to Han frontier cavalry securing western oasis trade." }
      ]
    },
    "mao-gong-ding": {
      categoryLabelEn: "Bronze & Jade",
      periodLabelEn: "Late Western Zhou (King Xuan, c. 827–782 BCE)",
      dateEstimateEn: "9th Century BCE (unearthed c. 1843 in Qishan, Shaanxi)",
      materialEn: "Bronze tripod cauldron with vertical handles and overlapping scale bands",
      dimensionsEn: "H 53.8 cm × Rim Diameter 47.9 cm (Weight 34.7 kg)",
      originEn: "Qishan, Baoji, Shaanxi (Zhou heartland)",
      collectionEn: "National Palace Museum, Taipei (台北故宫博物院)",
      attributionEn: "National Palace Museum, Taipei • Late Western Zhou Mao Gong Ding (Longest Surviving Bronze Inscription)",
      culturalSignificanceEn: "Interior basin preserves **497 cast bronze characters** across 32 vertical columns — the longest surviving Western Zhou bronze inscription, rivaling a chapter of the 《Book of Documents》 in recording King Xuan's royal investiture mandate to his uncle Duke Mao.",
      historicalContextEn: "Primary epigraphic cornerstone verifying Zhou 'Mandate of Heaven and Revering Virtue' political vocabulary prior to entering famous private and palace collections.",
      hotspotsEn: [
        { categoryEn: "Primary Epigraphy", titleEn: "497-Graph Royal Investiture Inscription Inside Bowl", detailEn: "Records verbatim King Xuan's admonitions and ceremonial bestowals to Duke Mao Yin — unmatched primary historical proof." },
        { categoryEn: "Late Zhou Bronze Style", titleEn: "Erect Rim Handles & Geometric Overlapping Scales", detailEn: "Sober profile shifts away from Shang predatory beasts toward measured geometric rhythm reflecting Zhou ritual decorum." },
        { categoryEn: "Three-Legged Foundry", titleEn: "Monumental Cabriole Legs After 2,900 Years", detailEn: "Balanced tripod geometry retains clean temple-vessel resonance across nearly three millennia." }
      ]
    },
    "ru-yao-tianqing": {
      categoryLabelEn: "Classical Ceramics",
      periodLabelEn: "Northern Song (Emperor Huizong, c. 1086–1125 CE)",
      dateEstimateEn: "Late Northern Song (Qingliangsi kiln operated <20 years)",
      materialEn: "Thin ash-gray stoneware beneath luminous agate-infused sky-celadon glaze",
      dimensionsEn: "H 3.4 cm × Rim Diameter 18.5 cm (3–5 sesame-seed spur marks underneath)",
      originEn: "Ruzhou / Baofeng, Henan — Foremost of Song's Five Great Kilns",
      collectionEn: "Palace Museum, Beijing & National Palace Museum, Taipei",
      attributionEn: "Palace Museum Beijing / Taipei • Foremost Song Five Great Kiln: Ru Ware Sky-Clear Celadon",
      culturalSignificanceEn: "Embodies Emperor Huizong's Daoist minimalist ideal: glaze capturing 'the hue of sky clearing through parting clouds after rain', veined microscopically with translucent cicada-wing crackle.",
      historicalContextEn: "Halted abruptly by the 1127 Jin conquest; fewer than 100 authenticated Ru wares survive across museums worldwide today.",
      hotspotsEn: [
        { categoryEn: "Song Glaze Zenith", titleEn: "Powdered-Agate 'Sky Blue After Rain' Glaze", detailEn: "Crushed carnelian suspended inside reduced glaze softly scatters light into serene blue-green translucency." },
        { categoryEn: "Kiln Crazing Aesthetics", titleEn: "Translucent 'Cicada-Wing' Ice Crackle", detailEn: "Micro-layered firing fractures catch slanted light softly without harsh contrast, mirroring Song inner restraint." },
        { categoryEn: "Connoisseurship Mark", titleEn: "Full-Glaze Foot with Microscopic 'Sesame Spur' Scars", detailEn: "Dish bottom was fired glazed overall while poised delicately atop three to five sesame-seed clay stilts." }
      ]
    },
    "quan-yao-vase": {
      categoryLabelEn: "Song Five Great Kilns",
      periodLabelEn: "Southern Song (1127–1279 CE)",
      dateEstimateEn: "12th–13th Century CE (Xiuneisi & Jiaotanxia Imperial Kilns, Hangzhou)",
      materialEn: "Iron-rich dark clay ('Black Body') coated in thick multi-layered celadon glaze ('Purple Mouth, Iron Foot')",
      dimensionsEn: "H 23.5 cm × Base Diameter 9.8 cm",
      originEn: "Hangzhou (Lin'an), Zhejiang — Exclusive Southern Song Imperial Court Kilns",
      collectionEn: "National Palace Museum, Taipei & Palace Museum, Beijing",
      attributionEn: "National Palace Museum Taipei & Palace Museum Beijing • Southern Song Guan Ware Arrow-Tube Vase",
      culturalSignificanceEn: "Quintessence of Southern Song Confucian–Daoist serenity: unadorned by dragons or bright enamel, gaining jade-like depth through multiple thick glaze layers and irregular 'ice-crackle' fractures exposing purple-brown thinned rims and charcoal feet.",
      historicalContextEn: "Silhouettes recreate archaic Zhou–Han bronze arrow-tossing ceremony vessels in austere court ceramics after northern kiln loss.",
      hotspotsEn: [
        { categoryEn: "Archaic Form", titleEn: "Symmetrical Tubular Lug Handles from Zhou Ritual Bronzes", detailEn: "Twin vertical collar tubes echo ancient bronze arrow-tossing pitch-pots prized by Song antiquarians." },
        { categoryEn: "Thick-Layer Glazing", titleEn: "Multi-Dip Jade Glaze & Golden-Thread Ice Crackle", detailEn: "Contraction mismatch between high-iron dark body and thick glassy glaze creates unrepeatable natural crazing webs." },
        { categoryEn: "Imperial Hallmark", titleEn: "Classic 'Purple Mouth & Iron Foot' Provenance", detailEn: "Gravity thins glaze along the rim to purple-gray tint while the unglazed foot burns metallic iron-black." }
      ]
    },
    "ge-yao-incense-burner": {
      categoryLabelEn: "Song Five Great Kilns",
      periodLabelEn: "Song – Early Yuan (12th–14th Century CE)",
      dateEstimateEn: "12th–14th Century CE (Elder-Brother Kiln Lineage)",
      materialEn: "Warm rice-ash glaze featuring dual-level ink-and-tea dyed crackle",
      dimensionsEn: "H 16.8 cm × Shoulder Width 13.2 cm",
      originEn: "Longquan tradition (Zhejiang) / Palace-Transmitted Heirloom Kilns",
      collectionEn: "The Palace Museum, Beijing (故宫博物院)",
      attributionEn: "The Palace Museum, Beijing • Ge Ware Twin-Crackled Imperial Censer",
      culturalSignificanceEn: "Turned kiln crazing defects into iconic aesthetic alchemy: potters orchestrated two cooling contractions and dyed major fractures in black sumi ink ('Iron Wire') alongside finer subsidiary meshes stained golden-amber with tea ('Gold Thread').",
      historicalContextEn: "Celebrated across Ming–Qing connoisseur manuals as supreme expression of scholar quietude and tactile warmth.",
      hotspotsEn: [
        { categoryEn: "Dual Dye Crackle", titleEn: "Signature 'Gold Thread and Iron Wire' Interlace", detailEn: "Wide ink-stained primary fissures weave seamlessly with delicate amber tea-tinted micro-crackle beneath translucent glaze." },
        { categoryEn: "Tactile Aesthetics", titleEn: "Soft Mutton-Fat Matte Luster ('Ningzhi')", detailEn: "Microscopic bubbles diffuse harsh glare into gentle beeswax warmth inviting contemplative touch." },
        { categoryEn: "Vessel Anatomy", titleEn: "Iron-Black Base & Archaistic Bronze Censer Ears", detailEn: "Dark iron clay emerges along unglazed foot rings anchoring arched side handles derived from Shang bronze censers." }
      ]
    },
    "ding-yao-bowl": {
      categoryLabelEn: "Song Five Great Kilns",
      periodLabelEn: "Northern Song (960–1127 CE)",
      dateEstimateEn: "11th–12th Century CE",
      materialEn: "Ivory-white translucent porcelain fired upside-down ('Fushao') with copper rim band ('Mangkou')",
      dimensionsEn: "H 7.2 cm × Mouth Diameter 21.6 cm",
      originEn: "Quyang (Dingzhou prefecture), Hebei",
      collectionEn: "Palace Museum, Beijing & Victoria and Albert Museum",
      attributionEn: "Palace Museum Beijing & V&A Museum • Northern Song Ding Ware Carved White Basin",
      culturalSignificanceEn: "Sole white-porcelain member of the Five Great Kilns: eggshell-light walls beneath warm ivory-white glaze incised freehand with bamboo blades showing frolicking boys among blooming peonies without pigment.",
      historicalContextEn: "Upside-down stacked saggar firing doubled kiln output for Northern Song courts while necessitating silver or copper collar binding over bare unglazed rims.",
      hotspotsEn: [
        { categoryEn: "Kiln Production Innovation", titleEn: "Burnished Red Copper Binding Over Inverted Firing Rim", detailEn: "Firing upside down maximized kiln capacity yet left raw unglazed rims later handsomely bound in hammered copper or silver." },
        { categoryEn: "Intaglio Bamboo Carving", titleEn: "Slanted 'Half-Blade Clay' Fluid Relief", detailEn: "Angled blade cuts pool slightly deeper glaze along one groove edge, sculpting crisp floral relief under raking light." },
        { categoryEn: "Authentication Clue", titleEn: "Warm Ivory 'Tear-Drop' Glaze Runs Outside", detailEn: "Pooling glaze collects vertically down exterior walls into glowing wax-candle tear-marks prized by connoisseurs." }
      ]
    },
    "jun-yao-bowl": {
      categoryLabelEn: "Song Five Great Kilns",
      periodLabelEn: "Late Northern Song – Jin Dynasty (12th Century CE)",
      dateEstimateEn: "12th Century CE",
      materialEn: "Opalescent sky-blue & copper-crimson kiln-transmuted ('Yaobian') stoneware",
      dimensionsEn: "H 14.5 cm × Lobed Foliate Rim Width 25.8 cm",
      originEn: "Yuzhou (Juntai), Henan",
      collectionEn: "National Palace Museum, Taipei & Percival David Foundation (SOAS/BM)",
      attributionEn: "National Palace Museum Taipei & British Museum • Song–Jin Imperial Jun Ware Foliate Flower Basin",
      culturalSignificanceEn: "Revolutionary leap from monochrome restraint to unpredictable flame-born polychromy ('Kiln Transmutation'): copper-oxide splashes reduce at 1,300 °C into unrepeatable rosy purple clouds across sky-blue opalescence.",
      historicalContextEn: "Imperial flower-pot planters ordered for Song–Ming garden courts carry incised bottom numerals 1–10 grading vessel size.",
      hotspotsEn: [
        { categoryEn: "Ancient Ceramic Chemistry", titleEn: "Flame-Driven 'Yaobian' Copper-Oxide Transmutation", detailEn: "Colloidal copper particles pair with liquid-phase Rayleigh scattering to bloom crimson-violet streaks across azure blue." },
        { categoryEn: "Connoisseur Signature", titleEn: "Meandering 'Earthworm Mud-Track' Glaze Heals", detailEn: "Thick viscous glaze cracked during initial heat then slowly flowed back to seal into wavy worm-like trails." },
        { categoryEn: "Palace Grading System", titleEn: "Foliate Lotus Rim & Incised Imperial Size Numeral", detailEn: "Undersides bear engraved numerals from 1 to 10 sizing matching matching bulbs-dish stands across palace gardens." }
      ]
    },
    "siyang-fangzun": {
      categoryLabelEn: "Archaic Ritual Bronzes",
      periodLabelEn: "Late Shang Dynasty (12th–11th Century BCE)",
      dateEstimateEn: "c. 1200–1046 BCE (excavated 1938 in Ningxiang, Hunan)",
      materialEn: "High-precision sectional-mold copper–tin–lead alloy bronze",
      dimensionsEn: "H 58.3 cm × Rim Width 52.4 cm × Weight 34.5 kg",
      originEn: "Huangcai, Ningxiang (Hunan) — Southern Yangtze–Shang cultural synthesis",
      collectionEn: "National Museum of China, Beijing",
      attributionEn: "National Museum of China, Beijing • Late Shang 'Four-Ram Square Zun' Vessel",
      culturalSignificanceEn: "Acclaimed 'King of Square Four-Ram Bronzes': four full-bodied coiled-horn rams burst dynamically out of the vessel corners amid dense high-relief *Taotie* and *Kui* dragon bands uniting animal vitality with geometric rigor.",
      historicalContextEn: "Demonstrates how southern Hunan foundries mastered and ingeniously transformed Central Plains Shang casting geometry.",
      hotspotsEn: [
        { categoryEn: "Corner Animal Sculpture", titleEn: "Four High-Relief Coiled-Horn Auspicious Rams", detailEn: "Because 'Ram' (Yang 羊) echoes 'Auspicious' (Xiang 祥) in archaic graphs, four emerging rams bridge square shoulder and cylindrical trunk seamlessly." },
        { categoryEn: "Surface Ornamentation", titleEn: "Flanged 'Feiling' Seams & Zero-Void Surface Relief", detailEn: "Scored vertical flanges cleverly disguise mold joins across dense layers of double-bodied dragons and bird crests." },
        { categoryEn: "Complex Mold Assembly", titleEn: "Flared Trumpet Neck With Twin-Headed Kui Dragons", detailEn: "Broad plantain-leaf triangles frame flared shoulders counterbalancing sculptural weight of the corner rams below." }
      ]
    },
    "jinlv-yuyi": {
      categoryLabelEn: "Han Imperial Jades",
      periodLabelEn: "Western Han (c. 113 BCE)",
      dateEstimateEn: "113 BCE (Mancheng Cliff Tomb, Hebei, excavated 1968)",
      materialEn: "2,498 polished Hetian nephrite plaques pierced at four corners and sewn with ~1,100 g solid gold wire",
      dimensionsEn: "Total L 188 cm — Five modular armor sections (head to boots)",
      originEn: "Mancheng (Hebei) — Rock-cut tomb of Prince Liu Sheng of Zhongshan",
      collectionEn: "Hebei Museum, Shijiazhuang",
      attributionEn: "Hebei Museum • Western Han Prince Liu Sheng Jade Burial Suit Sewn with Gold Thread (113 BCE)",
      culturalSignificanceEn: "Ultimate monument to Han immortality belief ('Jade preserves flesh from decay'): fitting a single royal shroud demanded over ten years of continuous palace lapidary labor drilling millimeter-accurate corner eyes across 2,498 nephrite tiles.",
      historicalContextEn: "Confirms strict Han sumptuary law restricting solid-gold wire suits exclusively to emperors and privileged imperial princes.",
      hotspotsEn: [
        { categoryEn: "Imperial Lapidary", titleEn: "Tailored Jade Facial Mask & Cranial Plates", detailEn: "Hundreds of triangular and trapezoidal Xinjiang nephrite tiles conform tightly over brow, nose bridge, and cheeks." },
        { categoryEn: "Han Sumptuary Rite", titleEn: "2,498 Jade Plaques Bound by 1.1 kg Pure Gold Wire", detailEn: "Twisted gold-thread knots preserve calibrated tension preventing breakage inside humid wooden coffins." },
        { categoryEn: "Immortality Cosmology", titleEn: "Jade Boots & Nine Orifice Plugs Retaining Vital Essence", detailEn: "Sealed heel-to-toe casing accompanied nine Bi-jade plugs believed to lock vital Qi eternally within the body." }
      ]
    },
    "pingfu-tie": {
      categoryLabelEn: "Three Rarities Hall Calligraphy",
      periodLabelEn: "Western Jin (c. 300 CE)",
      dateEstimateEn: "Late 3rd – Early 4th Century CE (>1,700 Years Old)",
      materialEn: "Pine ink on coarse Western Jin hemp paper ('Mazhi'), 9 lines totaling 84 Zhangcao draft-cursive characters",
      dimensionsEn: "H 23.7 cm × L 20.6 cm",
      originEn: "Personal health inquiry letter penned with blunt hair/bamboo brush by scholar-poet Lu Ji",
      collectionEn: "The Palace Museum, Beijing (Rare Conservation Treasury)",
      attributionEn: "Palace Museum, Beijing • Lu Ji's 'Letter on Recovering Health' (~300 CE — Oldest Surviving Paper Masterwork)",
      culturalSignificanceEn: "Saluted as 'Progenitor of All Model Calligraphy Scrolls' — predating Wang Xizhi's *Lantingji Xu* by half a century. Its blunt, unadorned **Zhangcao** ('draft cursive') preserves individual character separation transitioning cleanly out of Han clerical script.",
      historicalContextEn: "Preserved miraculously via Emperor Huizong's gold title strip and 20th-century collector Zhang Boju donating it permanently to the Palace Museum.",
      hotspotsEn: [
        { categoryEn: "Script Transition", titleEn: "Archaic 'Zhangcao' Broken Clerical-to-Cursive Strokes", detailEn: "Unlike later Tang continuous grass script, individual graphs retain separate crisp clerical stops with gnarled archaic dignity." },
        { categoryEn: "Imperial & Private Provenance", titleEn: "Song Huizong Gold Title & Zhang Boju Seals", detailEn: "Twin-dragon Song imperial seals and Huizong's slender-gold inscription verify 900+ years of recorded connoisseur transmission." },
        { categoryEn: "Ancient Paper Craft", titleEn: "1,700-Year-Old Coarse Western Jin Hemp Fibers", detailEn: "Textured natural hemp fibers catch coarse short-tuft brush strokes into dry moss-like patina unmatched on smooth Xuan paper." }
      ]
    },
    "zhongqiu-tie": {
      categoryLabelEn: "Three Rarities Hall Calligraphy",
      periodLabelEn: "Eastern Jin Style (Mi Fu Song Bamboo-Paper Copy)",
      dateEstimateEn: "Original 4th Century CE / Surviving 11th Century Tracing Copy",
      materialEn: "Dense ink on soft Jiangnan bamboo paper, 3 columns totaling 22 flowing 'One-Brush' graphs",
      dimensionsEn: "H 27 cm × L 11.9 cm (plus >3 m mounted colophon scroll)",
      originEn: "Attributed to Wang Xianzhi (Wang Xizhi's son), enshrined in Qianlong's Room of Three Rarities (1746)",
      collectionEn: "The Palace Museum, Beijing",
      attributionEn: "Palace Museum, Beijing • Wang Xianzhi / Song Mi Fu Tracing Copy: 'Mid-Autumn Letter' (Sanxitang Trio)",
      culturalSignificanceEn: "Heralds the bold **One-Brush Writing** (一笔书) revolution: three breathless columns link two or three characters effortlessly in unbroken kinetic sweep, contrasting sharply with father Wang Xizhi's poised restraint.",
      historicalContextEn: "Rescued from Hong Kong in 1951 alongside *Boyuan Tie* to reunite two of Qianlong's Three Rarities inside the Forbidden City.",
      hotspotsEn: [
        { categoryEn: "Cursive Revolution", titleEn: "Breathless Linked 'One-Brush' Ribbon Flow", detailEn: "Twenty-two swift characters ('No meeting again this Mid-Autumn...') cascade down soft fibers like windblown silk." },
        { categoryEn: "Collection Chronicle", titleEn: "Mi Fu & Emperor Qianlong Sanxitang Colophons", detailEn: "Long appended postscripts document dramatic dispersal and joyous 18th- and 20th-century palace reunifications." },
        { categoryEn: "Forensic Paper Evidence", titleEn: "Luminous Black Ink on Song Jiangnan Bamboo Paper", detailEn: "Soft bamboo fibers confirm this exquisite treasure as a Song masterwork freehand-traced by calligrapher-collector Mi Fu." }
      ]
    },
    "boyuan-tie": {
      categoryLabelEn: "Three Rarities Hall Calligraphy",
      periodLabelEn: "Eastern Jin (c. 380–400 CE)",
      dateEstimateEn: "Late 4th Century CE",
      materialEn: "Ink on antique Jin Xuan-type fibrous paper, 5 lines totaling 47 Running-script graphs",
      dimensionsEn: "H 25.1 cm × L 17.2 cm",
      originEn: "Genuine autograph letter by Wang Xun (Wang Xizhi's cousin) inquiring after relative Boyuan",
      collectionEn: "The Palace Museum, Beijing",
      attributionEn: "Palace Museum, Beijing • Wang Xun's Genuine Eastern Jin Autograph Letter to Boyuan (4th Century CE)",
      culturalSignificanceEn: "The **sole genuine living paper autograph directly brushed by an Eastern Jin aristocrat** inside Qianlong's famed Trio of Three Rarities (its two companions being Tang/Song copies!) — vibrant flicks and wet-to-dry hair-brush turns preserve direct 4th-century breath.",
      historicalContextEn: "Authenticated across Ming connoisseur Dong Qichang's colophon and Qianlong's personal header praising 'Jiangzuo Elegance'.",
      hotspotsEn: [
        { categoryEn: "Authentic Jin Hand", titleEn: "Genuine 4th-Century Running-Script Autograph", detailEn: "Natural shifts from saturated ink pools to brisk dry-brush streaks prove direct uncopied execution by Wang Xun's own hand." },
        { categoryEn: "Connoisseur Lineage", titleEn: "Dong Qichang & Shen Zhou Authoritative Colophons", detailEn: "Dense fine marginalia left by Ming master Dong Qichang celebrate the Wang clan's luminous southern Jin refinement." },
        { categoryEn: "Three Rarities Archive", titleEn: "Qianlong Imperial Header: 'Grace of South of the River'", detailEn: "Opening inscription brushed personally by Qianlong upon enshrining all three Jin calligraphy icons in 1746." }
      ]
    },
    "daxiguan-ding": {
      categoryLabelEn: "Archaic Ritual Bronzes",
      periodLabelEn: "Mid-to-Late Western Zhou (c. 10th–9th Century BCE)",
      dateEstimateEn: "Reign of King Xiao (~890 BCE, unearthed 1890 in Fufeng, Shaanxi)",
      materialEn: "Cast bronze featuring ordered wave-scroll and ring-link relief bands",
      dimensionsEn: "H 93.1 cm × Rim Diameter 75.6 cm × Weight 201.5 kg",
      originEn: "Baoji / Fufeng, Shaanxi — dedicated by high steward Shanfu Ke to grandfather Shi Huafu",
      collectionEn: "Shanghai Museum (One of the 'Three Great Cauldrons' alongside Maogong Ding)",
      attributionEn: "Shanghai Museum • Mid-Western Zhou Da Ke Ding Ritual Cauldron (201.5 kg, 290 Cast Graphs)",
      culturalSignificanceEn: "Keystone monument of Zhou aesthetic transition: abandoning terrifying Shang beast motifs for rhythmic geometric waves embodying Confucian *Zhou Rites* harmony — framing **290 neatly grid-aligned seal graphs** inside the bowl.",
      historicalContextEn: "Exemplifies ordered court estate land-grants and ancestral bronze typography pioneering classical Xiaozhuan grid regularity.",
      hotspotsEn: [
        { categoryEn: "Epigraphic Layout", titleEn: "290 Bronze Graphs Ordered Inside Scored Grid Boxes", detailEn: "Unlike uneven earlier inscriptions, pristine grid alignments inside Da Ke Ding anticipate formal Qin Small Seal symmetry." },
        { categoryEn: "Zhou Ritual Aesthetics", titleEn: "Rolling Geometric 'Wave Bands' Reflecting Musical Order", detailEn: "Sinuous continuous waves replace Shang monster masks to evoke serene Zhou ritual-and-music equilibrium." },
        { categoryEn: "Monumental Foundry", titleEn: "Three Taotie-Carved Hoof Legs Bearing 201.5 kg", detailEn: "Muscular animal-hoof legs sustain over two hundred kilograms of ceremonial bronze through twenty-nine centuries." }
      ]
    },
    "zhaoqing-duanyan-inkstone": {
      categoryLabelEn: "Imperial Four Treasures of the Study",
      periodLabelEn: "18th Century (Qing Qianlong Reign)",
      dateEstimateEn: "Qianlong Period (~1750–1780 CE)",
      materialEn: "Fine-grained purplish-blue Duan Creek Old Pit slate bearing natural green 'Stone Eyes'",
      dimensionsEn: "L 24.2 cm × W 16.4 cm × D 3.2 cm",
      originEn: "Submerged Lao Keng Old Pit quarry under the West River (Zhaoqing, Guangdong)",
      collectionEn: "Palace Museum, Beijing & Guangdong Museum",
      attributionEn: "Palace Museum & Guangdong Museum • Qing Imperial Lao Keng Duan Inkstone with Peacock Eyes",
      culturalSignificanceEn: "Crowned foremost of China's 'Four Famous Inkstones' for microscopic clay-silicate grain: grinds dense velvety ink without fraying delicate goat-hair brush tips while displaying natural emerald 'ice patterns' and peacock-eye nodules.",
      historicalContextEn: "Housed inside fitted carved red sandalwood boxes preserving moisture and commemorating southern Lingnan geological rarity at court.",
      hotspotsEn: [
        { categoryEn: "Rare Mineralogy", titleEn: "Silky Grinding Surface with Emerald 'Stone Eyes'", detailEn: "Hundreds-of-millions-years-old clay crystallization reveals glowing green mineral spheres across luminous purplish slate." },
        { categoryEn: "Lingnan Carving", titleEn: "Inkwell Pool Carved in Swirling Cloud-Dragon Relief", detailEn: "Fluid chisel work borders the ink reservoir without intruding upon the ultra-smooth central grinding bed." },
        { categoryEn: "Palace Conservation", titleEn: "Inscribed Zitan Rosewood Storage Case", detailEn: "Custom-fitted sandalwood casing guards the Old Pit stone against cracking or rapid ink evaporation across dry northern winters." }
      ]
    },
    "guqin-jiuxiao-huanpei": {
      categoryLabelEn: "Ancient Music & Four Scholar Arts",
      periodLabelEn: "High Tang (Zhide Year 1, 756 CE)",
      dateEstimateEn: "756 CE (crafted in Chengdu by master luthier Lei Wei)",
      materialEn: "Wind-weathered paulownia top coated in black raw lacquer mixed with deer-horn powder & gold dust ('Snake-Belly' crackle)",
      dimensionsEn: "L 124 cm × Shoulder W 21.8 cm — 7 silk/metal strings, 13 mother-of-pearl inlay Hui markers",
      originEn: "Master Lei family workshop in Shu (Chengdu, Sichuan)",
      collectionEn: "The Palace Museum, Beijing (Foremost of China's Four Great Historic Guqins)",
      attributionEn: "The Palace Museum, Beijing • High Tang 'Chime of the Ninth Heaven' Guqin (756 CE, Master Lei Wei)",
      culturalSignificanceEn: "One of the oldest playable stringed instruments on Earth (~1,270 years old): open strings resound like ancient bronze temple bells while stopped harmonics ring crystalline as jade chimes — testimony to Lei Wei's legendary intuition picking pine-wind-seasoned timber.",
      historicalContextEn: "Underside carries poetic Tang–Song colophons carved personally by Su Shi and later Ming–Qing connoisseurs prior to entering imperial collection.",
      hotspotsEn: [
        { categoryEn: "Antique Instrument Forensics", titleEn: "'Fuxi' Rounded Head & Thousand-Year Lacquer Crackle", detailEn: "Transverse hairline 'snake-belly' fractures across deer-horn lacquer verify over one millennium of natural wood aging." },
        { categoryEn: "Scholarly Provenance", titleEn: "Carved 'Jiuxiao Huanpei' Title & Su Shi Colophon", detailEn: "Deeply incised back-board inscriptions chronicle ownership from High Tang Chengdu through Song poet Su Dongpo." },
        { categoryEn: "Acoustic Fretlessness", titleEn: "13 Mother-of-Pearl Hui Studs & Rosewood Bridge", detailEn: "Inlaid solely along geometric overtone nodes without frets, enabling subtle expressive microtonal sliding vibrato." }
      ]
    }
  };

  if (window.CCE_MUSEUM) {
    if (Array.isArray(window.CCE_MUSEUM.culturalShowcase)) {
      window.CCE_MUSEUM.culturalShowcase.forEach((item) => {
        const patch = SHOWCASE_EN[item.id];
        if (patch) Object.assign(item, patch);
      });
    }
    if (Array.isArray(window.CCE_MUSEUM.artifacts)) {
      window.CCE_MUSEUM.artifacts.forEach((art) => {
        const patch = ARTIFACTS_EN[art.id];
        if (!patch) return;
        art.categoryLabelEn = patch.categoryLabelEn;
        art.periodLabelEn = patch.periodLabelEn;
        art.dateEstimateEn = patch.dateEstimateEn;
        art.materialEn = patch.materialEn;
        art.dimensionsEn = patch.dimensionsEn;
        art.originEn = patch.originEn;
        art.collectionEn = patch.collectionEn;
        if (patch.attributionEn) art.attributionEn = patch.attributionEn;
        art.culturalSignificanceEn = patch.culturalSignificanceEn;
        if (patch.historicalContextEn) art.historicalContextEn = patch.historicalContextEn;

        // Add missing hotspots for forbidden-city-axis-gate or match all existing hotspots
        if (art.id === "forbidden-city-axis-gate" && (!art.hotspotAnnotations || !art.hotspotAnnotations.length)) {
          art.hotspotAnnotations = [
            {
              id: "fcg-1",
              x: 10,
              y: 34,
              titleVi: "Cửu Hoành Cửu Tung (81 Đinh Đồng Mạ Vàng) & Khuyên Sư Tử",
              titleEn: patch.hotspotsEn[0].titleEn,
              titleZh: "九横九纵门钉",
              pinyin: "Jiǔ héng jiǔ zòng méndīng",
              category: "Biểu tượng Đế vương",
              categoryEn: patch.hotspotsEn[0].categoryEn,
              detail: "Hai cánh cửa son khép mở đóng đúng 9 hàng ngang × 9 hàng dọc gồm 81 chiếc đinh đồng mạ vàng (biểu trưng số Cửu Ngũ cực dương của Thiên tử) kết hợp vòng khuyên đầu sư tử mạ vàng.",
              detailEn: patch.hotspotsEn[0].detailEn
            },
            {
              id: "fcg-2",
              x: 50,
              y: 58,
              titleVi: "Khung nhìn Tụ điểm Điện Thái Hòa & Tam đài Hán Bạch Ngọc",
              titleEn: patch.hotspotsEn[1].titleEn,
              titleZh: "太和殿三台汉白玉底座",
              pinyin: "Tàihédiàn Sāntái",
              category: "Quy hoạch Trục Thần Đạo",
              categoryEn: patch.hotspotsEn[1].categoryEn,
              detail: "Ngay khi mở cửa cổng trục trung tâm, tầm mắt hướng thẳng qua quảng trường vào toàn khối tam đài đá trắng Tu Di sơn đỡ mái ngói lưu ly hoàng gia Điện Thái Hòa.",
              detailEn: patch.hotspotsEn[1].detailEn
            },
            {
              id: "fcg-3",
              x: 50,
              y: 84,
              titleVi: "Ngự Đạo Đá Trắng Giữa Quảng Trường Hoàng Gia",
              titleEn: patch.hotspotsEn[2].titleEn,
              titleZh: "中央御道",
              pinyin: "Zhōngyāng Yùdào",
              category: "Đá lát Nghi lễ",
              categoryEn: patch.hotspotsEn[2].categoryEn,
              detail: "Dải đá trắng trung tâm kẹp giữa gạch đá xám lớn dẫn thẳng tới bậc thềm rồng chầu của Điện Thái Hòa — trục hành lễ dành riêng cho kiệu Hoàng đế đi qua.",
              detailEn: patch.hotspotsEn[2].detailEn
            }
          ];
        } else if (Array.isArray(art.hotspotAnnotations) && Array.isArray(patch.hotspotsEn)) {
          art.hotspotAnnotations.forEach((hs, idx) => {
            const hsp = patch.hotspotsEn[idx];
            if (hsp) {
              hs.categoryEn = hsp.categoryEn;
              hs.titleEn = hsp.titleEn;
              hs.detailEn = hsp.detailEn;
            }
          });
        }
      });
    }
  }
})();
