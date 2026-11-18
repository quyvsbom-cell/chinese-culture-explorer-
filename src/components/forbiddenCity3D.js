// ============================================================================
// HIGH-DETAIL PROCEDURAL 3D FORBIDDEN CITY (紫禁城) ARCHITECTURAL EMBLEM & DISSECTION ENGINE
// Pure East Asian & Sino-Vietnamese Heritage Comparison (Forbidden City × Hue Imperial Citadel).
// Uses local Three.js r128 (src/vendor/three.min.js) with zero CDN dependency.
// ============================================================================

window.CCE_FORBIDDEN_CITY_3D = (function () {
  const ui3d = {
    dissectionState: "plan", // "plan" | "actual" | "xray"
    explodePercent: 0,
    autoOrbit: true,
    showPins: true,
    lightingPreset: 0, // 0: Day, 1: Sunset, 2: Blueprint Night
    activeChapterIdx: 0,
    activeZoneId: "001",
    activeTableKey: "fc", // "fc" | "hue" | "timber"
    activeTimelinePhase: "all" // "all" | "P1" | "P2" | "P3"
  };

  let rt = null; // Active Three.js runtime for safe SPA unmount/remount

  // --------------------------------------------------------------------------
  // GROUNDED BILINGUAL (VI / EN / ZH) ARCHITECTURAL DATASETS
  // --------------------------------------------------------------------------
  const FORBIDDEN_CITY_ZONES = [
    {
      id: "001",
      code: "ZONE 001",
      nameVi: "Ngọ Môn (Cổng Chính Phía Nam)",
      nameEn: "Meridian Gate (South Portal)",
      hanzi: "午门 · Wumen (Meridian Gate)",
      areaOrScaleVi: "Cao 38 m · Lầu chính 60,05 m × 25 m",
      areaOrScaleEn: "Height 38 m · Main Pavilion 60.05 m × 25 m",
      hueEquivalentVi: "Ngọ Môn Huế (Lầu Ngũ Phượng, cửa chính Hoàng thành Huế)",
      hueEquivalentEn: "Hue Meridian Gate (Five Phoenix Pavilion, Nguyen Citadel)",
      planMetricVi: "3 cửa trung tâm + 2 cửa dịch (Hoàng đế đi cửa giữa)",
      planMetricEn: "3 Central Portals + 2 Side Wings (Emperor's Center Arch)",
      actualMetricVi: "Tường đài đỏ cao 12 m · Ngũ Phượng Lâu chữ U",
      actualMetricEn: "12 m Crimson Bastion Wall · U-Shaped Five Phoenix Towers",
      summaryVi: "Cổng lớn nhất phía Nam Tử Cấm Thành (xây năm 1420), gồm 5 lầu phượng hoàng (Ngũ Phượng Lâu) nối bằng hành lang trắng trên đài tường đỏ cao 12 m.",
      summaryEn: "Southern ceremonial entrance built in 1420: a 12 m crimson U-shaped bastion topped by five connected white-corridor pavilions reaching 38 m high.",
      detailVi: "Lầu chính Ngọ Môn dài 60,05 m, rộng 25 m (9 gian × 5 gian), tổng chiều cao 38 m, hai bên có lầu chuông và lầu trống cùng tứ phương đình. Cửa giữa chỉ dành cho Hoàng đế (Hoàng hậu chỉ đi qua 1 lần vào ngày đại hôn, cùng Tam Khôi sau kỳ thi Đình). Quan văn võ đi cửa Đông, hoàng thân quốc thích đi cửa Tây.",
      detailEn: "According to Palace Museum surveys, the central hall spans 60.05 m × 25 m (9 × 5 bays), flanked by twin projecting arms crowned with bell/drum square pavilions and wing halls. Only the Emperor—and on rare exceptions the Empress on her wedding day plus the top three Jinshi laureates—used the central arch.",
      vocab: { term: "午门 · Ngọ Môn", pinyin: "Wǔmén", hanViet: "Ngọ Môn", meaning: "U-shaped Five-Phoenix Meridian Gate guarding the southern approach" },
      sourceUrl: "https://artsandculture.google.com/story/meridian-gate-the-entrance-to-the-forbidden-city-the-palace-museum/NQUxZvrUFVtvAg?hl=en",
      camPos: [0, 29, 108],
      lookAt: [0, 8, 66],
      pinPos: [0, 18, 70]
    },
    {
      id: "002",
      code: "ZONE 002",
      nameVi: "Sân Ngọ Môn & 5 Cầu Kim Thủy",
      nameEn: "Meridian Plaza & Five Golden Water Bridges",
      hanzi: "内金水桥 · Thái Hòa Môn & Nội Kim Thủy Hà",
      areaOrScaleVi: "Sân 140 m × 210 m · 5 cầu cẩm thạch",
      areaOrScaleEn: "Plaza 140 m × 210 m · 5 White Marble Bridges",
      hueEquivalentVi: "Cầu Trung Đạo bắc qua hồ Thái Dịch (Đại Nội Huế)",
      hueEquivalentEn: "Trung Dao Bridge over Thai Dich Lake (Hue Citadel)",
      planMetricVi: "Sông nhân tạo uốn hình cánh cung + Sư tử đồng",
      planMetricEn: "Bow-Shaped Courtyard Canal + Guarding Bronze Lions",
      actualMetricVi: "Quảng trường Thái Hòa phía sau rộng 30.000 m²",
      actualMetricEn: "Treeless 30,000 m² Taihedian Square Behind Gate",
      summaryVi: "Khoảng sân rộng 140 m × 210 m ngay sau Ngọ Môn với dòng Nội Kim Thủy Hà uốn cong bắc qua 5 cây cầu đá Hán Bạch Ngọc dẫn tới Thái Hòa Môn.",
      summaryEn: "A vast 140 × 210 m forecourt traversed by the bow-shaped Inner Golden Water River and five white marble bridges leading to the Gate of Supreme Harmony.",
      detailVi: "Dòng sông nhân tạo Nội Kim Thủy mang ý nghĩa phong thủy tụ khí trước Thái Hòa Môn (có đôi sư tử đồng lớn nhất Cố Cung trấn giữ), hai bên là Hiệp Hòa Môn (Đông) và Hy Hòa Môn (Tây). Bước qua Thái Hòa Môn là đại quảng trường lát gạch rộng 30.000 m² cùng Văn Hoa Điện và Võ Anh Điện.",
      detailEn: "Flanked by the Hall of Literary Glory (East) and Martial Valor (West), the canal links Fengshui harmony with storm drainage and firefighting water supply before opening onto the 30,000 m² treeless ceremony plaza.",
      vocab: { term: "内金水桥 · Ngũ Long Kiều", pinyin: "Nèi Jīnshuǐ Qiáo", hanViet: "Nội Kim Thủy Kiều", meaning: "Five carved white marble bridges spanning the bow-shaped Inner Golden Water Canal" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [26, 25, 76],
      lookAt: [0, 4, 46],
      pinPos: [0, 12, 42]
    },
    {
      id: "003",
      code: "ZONE 003",
      nameVi: "Điện Thái Hòa (Trung Tâm Ngoại Triều)",
      nameEn: "Hall of Supreme Harmony (Outer Court Core)",
      hanzi: "太和殿 · Taihedian (Hall of Supreme Harmony)",
      areaOrScaleVi: "Cao 30 m · 9 gian ngang × 5 gian sâu · 10 thú nóc",
      areaOrScaleEn: "Height 30 m · 9 × 5 Bays · 10 Unique Roof Ridge Beasts",
      hueEquivalentVi: "Điện Thái Hòa Huế (Nơi thiết đại triều và đặt ngai vàng)",
      hueEquivalentEn: "Thai Hoa Hall in Hue (Nguyen Coronation & Court Audience)",
      planMetricVi: "9 gian × 5 gian · Mái Trọng diêm Vũ điện + 10 thú nóc",
      planMetricEn: "9 × 5 Nine-Five Imperial Bay · Double Hipped + 10 Beasts",
      actualMetricVi: "Minh thiết triều thường kỳ → Thanh chỉ dùng đại lễ",
      actualMetricEn: "Ming Daily Audiences -> Qing Restricted to Grand State Rituals",
      summaryVi: "Công trình gỗ cổ lớn nhất Trung Quốc còn tồn tại trên đài Tam Đài Hán Bạch Ngọc 3 tầng (1.142 đầu rồng thoát nước), sân trước đặt 18 đỉnh đồng, hạc–quy đồng, Nhật khuê và Gia lượng.",
      summaryEn: "Imperial China's largest surviving timber structure perched atop a three-tier white marble terrace with 1,142 dragon drainage spouts, gilt-bronze fire vats, sundial, and grain measure.",
      detailVi: "Điện Thái Hòa là tâm điểm tối cao của toàn bộ Tử Cấm Thành theo chuẩn số 'Cửu Ngũ chí tôn' (9 gian × 5 gian), nổi bật với mái Trọng diêm Vũ điện, 72 cột Kim ti Nam mộc (6 cột chính thếp vàng cuốn rồng), ngai vàng 9 rồng và quả cầu Gương Hiên Viên trên trần Tảo tỉnh. Bật X-Ray để nhìn xuyên vào bên trong!",
      detailEn: "Taihedian stands as the ceremonial apex of the Forbidden City over a 9 × 5 bay ('Nine-Five Sovereignty') footprint supported by interlocking Dougong brackets, 72 Nanmu pillars, a recessed dragon caisson ceiling, and the Xuanyuan Mirror suspended above the Nine-Dragon Throne.",
      vocab: { term: "太和殿 · Thái Hòa Điện", pinyin: "Tàihédiàn", hanViet: "Thái Hòa Điện", meaning: "Flagship double-eave hipped timber hall atop three-tier Xumizuo terrace" },
      sourceUrl: "https://en.wikipedia.org/wiki/Forbidden_City",
      camPos: [28, 22, 34],
      lookAt: [0, 10, 14],
      pinPos: [0, 21, 16]
    },
    {
      id: "004",
      code: "ZONE 004",
      nameVi: "Điện Trung Hòa (Không Gian Chuẩn Bị Nghi Lễ)",
      nameEn: "Hall of Central Harmony (Square Pavilion)",
      hanzi: "中和殿 · Zhonghedian (Hall of Central Harmony)",
      areaOrScaleVi: "Mặt bằng vuông · Xây năm 1420 (Trùng tu 1627, 1765)",
      areaOrScaleEn: "Square Plan · Built 1420 (Restored 1627 & 1765)",
      hueEquivalentVi: "Điện Cần Chánh (Nơi vua Nguyễn chuẩn bị trước lễ Đại triều)",
      hueEquivalentEn: "Can Chanh Hall (Pre-Audience Assembly in Hue)",
      planMetricVi: "Điểm dừng nghỉ của Hoàng đế giữa Tam Đại Điện",
      planMetricEn: "Imperial Staging Pavilion Between the Two Grand Halls",
      actualMetricVi: "Mái ngói lưu ly vàng chóp vuông 攒尖顶 + Bảo đính vàng",
      actualMetricEn: "Square Glazed Pyramidal Roof with Golden Baoding Finial",
      summaryVi: "Nằm tại phần eo thu hẹp của đài đá 3 tầng hình chữ Thổ (土) giữa Điện Thái Hòa và Điện Bảo Hòa; xây dựng năm 1420 và trùng tu năm 1627, 1765.",
      summaryEn: "Standing along the narrow central waist of the Earth-shaped three-tier terrace, crowned by a sweeping square pyramidal tent roof and gilded lotus finial.",
      detailVi: "Trước khi bước ra Điện Thái Hòa cử hành đại lễ, Hoàng đế ngự tại Điện Trung Hòa để nghỉ ngơi, nhận lễ bái của quan phụ trách nghi lễ và kiểm tra văn bản tế lễ hoặc nông cụ trước lễ Tịch Điền.",
      detailEn: "Emperors paused inside this tranquil single-eave square hall to receive ceremonial briefings, inspect agricultural seed boxes for seasonal rites, and compose themselves before entering Taihedian.",
      vocab: { term: "中和殿 · Trung Hòa Điện", pinyin: "Zhōnghédiàn", hanViet: "Trung Hòa Điện", meaning: "Square pyramidal hall connecting Supreme and Preserving Harmony" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-26, 22, 8],
      lookAt: [0, 9, 0],
      pinPos: [0, 16, 0]
    },
    {
      id: "005",
      code: "ZONE 005",
      nameVi: "Điện Bảo Hòa & Tảng Đá Điêu Khắc 250 Tấn",
      nameEn: "Hall of Preserving Harmony & 250-Ton Dragon Slab",
      hanzi: "保和殿 · Baohedian & 丹陛大石雕",
      areaOrScaleVi: "Mái Trọng diêm Yết sơn · Đá Vân Long nặng 250 tấn",
      areaOrScaleEn: "Double Xieshan Roof · Monolithic 250-Ton Dragon Ramp",
      hueEquivalentVi: "Sân Đại Triều Nghi & Hệ thống bậc thềm rồng đá Huế",
      hueEquivalentEn: "Hue Grand Courtyard & Carved Dragon Stone Stairways",
      planMetricVi: "Nơi tổ chức quốc yến & kỳ thi Đình (Điện thí)",
      planMetricEn: "Qing Imperial Palace Examination & State Banquet Hall",
      actualMetricVi: "Tảng đá chạm rồng phía Bắc nặng 250 tấn (= 4.000 người)",
      actualMetricEn: "Monolithic North Marble Ramp Weighing 250 Metric Tons",
      summaryVi: "Nằm ở cực Bắc đài đá 3 tầng Ngoại Triều với kiểu mái Trọng diêm Yết sơn (9 gian); phía Bắc điện là bức phù điêu đá nguyên khối nặng nhất Tử Cấm Thành (250 tấn).",
      summaryEn: "Crowning the northern edge of the three-tier terrace with a double-eave Xieshan roof, backed by the Forbidden City's heaviest stone relief: a 250-ton Fangshan marble dragon slab.",
      detailVi: "Dưới thời Càn Long nhà Thanh, kỳ thi Đình (Điện thí) chọn Tiến sĩ được chuyển vào tổ chức tại Điện Bảo Hòa. Ngay bậc thềm phía Bắc là tấm đá Vân Long nguyên khối nặng 250 tấn chạm 9 con rồng bay trong mây và sóng biển, được kéo về Bắc Kinh trên đường băng tưới nước đóng đá mùa đông.",
      detailEn: "Emperor Qianlong relocated the highest-tier Palace Examination (Jinshi) here. Behind its northern staircase lies the 16.57m monolithic marble ramp hauled from Fangshan over artificial winter ice roads.",
      vocab: { term: "保和殿 · Bảo Hòa Điện", pinyin: "Bǎohédiàn", hanViet: "Bảo Hòa Điện", meaning: "Northernmost Outer Court hall famous for Palace Exams and the 250-ton dragon carving" },
      sourceUrl: "https://campus-cdhk.oss-cn-hongkong.aliyuncs.com/store_manager/epaper/0/85/25/595790/page.pdf",
      camPos: [24, 21, -28],
      lookAt: [0, 8, -16],
      pinPos: [0, 18, -15]
    },
    {
      id: "006",
      code: "ZONE 006",
      nameVi: "Hậu Tam Cung Nội Đình (Càn Thanh · Giao Thái · Khôn Ninh)",
      nameEn: "Inner Three Palaces (Qianqinggong · Jiaotaidian · Kunninggong)",
      hanzi: "乾清宫 · 交泰殿 · 坤宁宫 (Inner Court Core)",
      areaOrScaleVi: "Qua Càn Thanh Môn · Trục cư trú Hoàng đế & Hoàng hậu",
      areaOrScaleEn: "Beyond Qianqingmen · Inner Court Axial Sanctuaries",
      hueEquivalentVi: "Điện Càn Thành & Cung Khôn Thái (Tử Cấm Thành Huế)",
      hueEquivalentEn: "Can Thanh & Khon Thai Palaces (Hue Purple Citadel)",
      planMetricVi: "Tẩm cung chính thức của Hoàng đế & Hoàng hậu",
      planMetricEn: "Formal Inner Residences of Emperor & Empress",
      actualMetricVi: "Từ năm 1722 (Ung Chính), vua chuyển sang ở Dưỡng Tâm Điện",
      actualMetricEn: "From 1722 (Yongzheng), Monarch Shifted Daily Living to Yangxindian",
      summaryVi: "Cụm 3 cung điện trung tâm của Nội Đình đặt trên đài đá Bạch Ngọc liên hoàn phía sau Càn Thanh Môn, phản chiếu cấu trúc Tam Đại Điện của Ngoại Triều.",
      summaryEn: "Three monumental Inner Court halls mirroring the Outer Court triad: Qianqinggong (Heavenly Purity), Jiaotaidian (Union), and Kunninggong (Earthly Tranquility).",
      detailVi: "Theo quy chế ban đầu, Càn Thanh Cung (9 gian, mái Trọng diêm Vũ điện) là nơi ở và làm việc của Hoàng đế (treo hoành phi 'Chính Đại Quang Minh'), Giao Thái Điện giữ 25 bảo ấn ngọc tỷ, Khôn Ninh Cung là tẩm cung Hoàng hậu. Từ thời Ung Chính, Càn Thanh Cung chuyên dùng cho nghi lễ nội đình còn sinh hoạt chuyển sang Dưỡng Tâm Điện.",
      detailEn: "Though designed as the Emperor's grand sleeping palace, Qianqinggong grew too vast and exposed; Yongzheng moved daily rule to Yangxindian while hiding the sealed succession edict behind Qianqinggong's 'Zhengda Guangming' plaque.",
      vocab: { term: "乾清宫 · Càn Thanh Cung", pinyin: "Qiánqīnggōng", hanViet: "Càn Thanh Cung", meaning: "Principal Inner Court sanctuary housing the secret succession edict plaque" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-30, 24, -36],
      lookAt: [0, 7, -46],
      pinPos: [0, 15, -42]
    },
    {
      id: "007",
      code: "ZONE 007",
      nameVi: "Dưỡng Tâm Điện (Tâm Điểm Dịch Chuyển Quyền Lực Thực Tế)",
      nameEn: "Hall of Mental Cultivation (Functional Shift Epicenter)",
      hanzi: "养心殿 · Yangxindian (Hall of Mental Cultivation)",
      areaOrScaleVi: "Phía Tây Nội Đình · Chữ Công (工) · Chiếu ngà 216×139 cm",
      areaOrScaleEn: "West Inner Court · I-Shaped Plan · 250-Yr Ivory Mat",
      hueEquivalentVi: "Điện Kiến Trung & Viện Cơ Mật (Trung tâm điều hành thực tế)",
      hueEquivalentEn: "Kien Trung Hall & Privy Council (Executive Nerve Center)",
      planMetricVi: "Cung phụ trợ hình chữ Công (工) phía Tây Càn Thanh Môn",
      planMetricEn: "Secondary West Service Compound Adjacent to Qianqingmen",
      actualMetricVi: "8 đời vua Thanh ăn ở, phê duyệt tấu chương mật tại đây",
      actualMetricEn: "Residence & Decision Room of Eight Qing Emperors (1722–1911)",
      summaryVi: "Điểm nhấn chuyển dịch công năng lịch sử: từ năm 1722, Dưỡng Tâm Điện (sát Quân Cơ Xứ) thay Càn Thanh Cung thành trung tâm quyền lực thực tế suốt 8 triều Thanh.",
      summaryEn: "The historic functional-shift epicenter: beginning in 1722, eight Qing emperors governed the empire from this compact I-shaped compound beside the Grand Council.",
      detailVi: "Vì Càn Thanh Cung quá rộng và lộ thiên, vua Ung Chính chuyển về Dưỡng Tâm Điện sát dãy nhà Quân Cơ Xứ để phê duyệt mật chiết suốt đêm. Tại đây còn phòng Tam Hy Đường của Càn Long và từng diễn ra chế độ Thùy liêm thính chính.",
      detailEn: "Compact, easily heated, and steps from Grand Council scribes, Yangxindian also holds Emperor Qianlong's Three Rarities Study (Sanxitang) and witnessed late-Qing regency behind the yellow curtain.",
      vocab: { term: "养心殿 · Dưỡng Tâm Điện", pinyin: "Yǎngxīndiàn", hanViet: "Dưỡng Tâm Điện", meaning: "Compact western palace that became the true executive heart of Qing rule" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-42, 20, -26],
      lookAt: [-20, 5, -36],
      pinPos: [-20, 12, -36]
    },
    {
      id: "008",
      code: "ZONE 008",
      nameVi: "Ninh Thọ Cung, Cửu Long Bích & Đại Ngọc Điêu 1,07 Tấn",
      nameEn: "Palace of Tranquil Longevity, Nine-Dragon Screen & 1.07-Ton Jade",
      hanzi: "宁寿宫 · 九龙壁 (Palace of Peaceful Longevity)",
      areaOrScaleVi: "Xây 1689, trùng tu 1772 · Cửu Long Bích 270 viên gạch men",
      areaOrScaleEn: "Built 1689 / Expanded 1772 · 270 Polychrome Glazed Tiles",
      hueEquivalentVi: "Cung Trường Sanh & Cung Diên Thọ (Đại Nội Huế)",
      hueEquivalentEn: "Truong Sanh & Dien Tho Retirement Palaces (Hue)",
      planMetricVi: "\"Tử Cấm Thành thu nhỏ\" cho Càn Long làm Thái Thượng Hoàng",
      planMetricEn: "Qianlong's Autonomous 'Mini Forbidden City' Retirement Wing",
      actualMetricVi: "Bụng rồng trắng thứ 3 trên Cửu Long Bích vá bằng gỗ sơn!",
      actualMetricEn: "Historic Wooden Patch in the 3rd White Dragon's Belly",
      summaryVi: "Quần thể phía Đông được vua Càn Long cải tạo năm 1772 thành Hoàng Cực Điện – Ninh Thọ Cung – Nhạc Thọ Đường, nổi bật với Cửu Long Bích 270 mảnh lưu ly và khối ngọc bích nặng 1,07 tấn.",
      summaryEn: "Eastern complex reshaped in 1772 for Qianlong's retirement, featuring the 270-tile glazed Nine-Dragon Screen (famed for a craftsman's painted wooden repair on the 3rd white dragon) and the 1.07-ton jade mountain.",
      detailVi: "Cửu Long Bích ghép từ 270 mảnh gốm tráng men (9 rồng mặt chính, 5 rồng viền). Khi nung bị vỡ một mảnh ở bụng con rồng trắng thứ 3, thợ mộc đã điêu khắc một miếng gỗ sơn trắng ghép khít vào để kịp ngày khánh thành. Phía Bắc là tượng ngọc Đại Vũ trị thủy 1,07 tấn.",
      detailEn: "When a white glazed tile cracked inside the kiln right before Qianlong's inspection, a master carpenter carved an interlocking Nanmu wood piece lacquered glossy white to match the porcelain glaze seamless to the naked eye.",
      vocab: { term: "九龙壁 · Cửu Long Bích", pinyin: "Jiǔlóngbì", hanViet: "Cửu Long Bích", meaning: "29.4m glazed nine-dragon relief screen built in 1771 at Ningshougong" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [54, 22, -24],
      lookAt: [36, 5, -34],
      pinPos: [36, 13, -32]
    },
    {
      id: "009",
      code: "ZONE 009",
      nameVi: "Đông – Tây Lục Cung & Kết Cấu Đấu Củng – 80 Triệu Viên Gạch",
      nameEn: "Six Eastern & Western Palaces · Dougong & 80M Bricks",
      hanzi: "东西六宫 · 斗拱 (Twelve Courtyard Palaces)",
      areaOrScaleVi: "12 viện tứ hợp đối xứng · 80 triệu viên gạch (1,93 triệu tấn)",
      areaOrScaleEn: "12 Symmetrical Quadrangles · 80M Bricks (1.93M Tons)",
      hueEquivalentVi: "Hệ thống Lục Viện trong Tử Cấm Thành Huế",
      hueEquivalentEn: "Inner Six Courtyards System in Hue Imperial Citadel",
      planMetricVi: "12 tiểu quần thể tam hợp / tứ hợp viện có tường vây riêng",
      planMetricEn: "Twelve Walled Siheyuan Courtyard Compounds",
      actualMetricVi: "Khung gỗ Đấu Củng không đinh · 27 công thức vữa vôi",
      actualMetricEn: "Zero-Nail Interlocking Dougong Joinery · 27 Mortar Mixes",
      summaryVi: "Hệ thống 12 cung viện đối xứng Đông – Tây (mỗi cung gồm cổng, chính điện, hậu điện và hai phối điện), xây dựng đồng bộ bằng khung gỗ mộng Đấu Củng chịu chấn động không đinh sắt.",
      summaryEn: "Twelve self-contained red-walled quadrangles lining East and West avenues, constructed on pre-fitted wooden frames bound strictly by seismic-absorbing Dougong brackets without iron nails.",
      detailVi: "Toàn bộ khung gỗ gồm cột, xà, hoành được dựng trước khi xây viên gạch đầu tiên, liên kết bằng mộng Đấu Củng (斗拱) giúp tán lực động đất cực tốt. Kiến trúc sư triều Thanh còn làm mô hình tỷ lệ 'Thang dạng' (样式雷烫样) bằng giấy gỗ dâng vua duyệt.",
      detailEn: "Yangshi Lei court architects built intricate layered paper-and-wood scale models ('Tangyang') to verify every beam and eave profile before prefabricating Dougong brackets off-site.",
      vocab: { term: "斗拱 · Đấu Củng", pinyin: "Dǒugǒng", hanViet: "Đấu Củng", meaning: "Interlocking wooden bracket system absorbing roof weight and seismic shock without nails" },
      sourceUrl: "https://campus-cdhk.oss-cn-hongkong.aliyuncs.com/store_manager/epaper/0/85/25/595790/page.pdf",
      camPos: [52, 34, -46],
      lookAt: [12, 5, -50],
      pinPos: [-32, 11, -50]
    },
    {
      id: "010",
      code: "ZONE 010",
      nameVi: "Ngự Hoa Viên, Thần Vũ Môn & 4 Giác Lâu 72 Bờ Nóc",
      nameEn: "Imperial Garden, Shenwumen & 72-Ridge Corner Towers",
      hanzi: "御花园 · 神武门 · 角楼 (Garden, North Portal & Towers)",
      areaOrScaleVi: "Ngự Hoa Viên 12.000 m² · Tường 10m, Hào 6m · 4 Giác Lâu",
      areaOrScaleEn: "12,000 m² Garden · 10m Curtain Wall · 4 Corner Towers",
      hueEquivalentVi: "Vườn Cơ Hạ, Cửa Hòa Bình & Các Khuyết Đài (Đại Nội Huế)",
      hueEquivalentEn: "Co Ha Garden, Hoa Binh Gate & Corner Bastions (Hue)",
      planMetricVi: "Khâm An Điện, Đôi Tú Sơn, Vạn Xuân Đình & Thiên Thu Đình",
      planMetricEn: "Kham An Hall, Dui Xiu Shan Rockery & Twin Season Pavilions",
      actualMetricVi: "Lối ra hiện nay (Vào Nam Ngọ Môn – Ra Bắc Thần Vũ Môn)",
      actualMetricEn: "Modern One-Way Museum Route (Enter South, Exit North Gate)",
      summaryVi: "Xây năm 1417, Ngự Hoa Viên rộng 12.000 m² quy tụ Khâm An Điện, núi đá Đôi Tú Sơn, Vạn Xuân Đình, cổ thụ bách tùng trước Thần Vũ Môn và 4 Giác Lâu '9 dầm 18 cột 72 bờ nóc'.",
      summaryEn: "Built in 1417, the 12,000 m² Imperial Garden softens the strict Confucian axial grid with Taihu rockeries and centuries-old cypresses before reaching Shenwumen and the 72-ridge cruciform corner watchtowers.",
      detailVi: "Trái với sự trang nghiêm vuông vức phía Nam, Ngự Hoa Viên kiến tạo cảnh quan Đạo gia phóng khoáng trước khi khép lại trục 960 m tại Cổng Bắc Thần Vũ Môn (bên ngoài là công viên đồi Cảnh Sơn — điểm ngắm toàn cảnh tương ứng góc camera Isometric).",
      detailEn: "Exiting Shenwumen brings visitors straight to Jingshan Hill's Wanchun Pavilion directly across the 52m moat — offering the real-life panoramic vantage point matching this 3D isometric camera.",
      vocab: { term: "角楼 · Giác Lâu", pinyin: "Jiǎolóu", hanViet: "Giác Lâu", meaning: "9-beam, 18-pillar, 72-ridge cruciform corner watchtowers over the 52m moat" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [26, 28, -98],
      lookAt: [0, 6, -70],
      pinPos: [0, 15, -75]
    }
  ];

  const SCROLLY_CHAPTERS = [
    {
      step: "01",
      tagVi: "TỔNG THỂ QUY HOẠCH · 960M × 750M",
      tagEn: "MASTER AXIAL GRID · 960M × 750M",
      titleVi: "9.999 Gian Truyền Thuyết vs. 8.886 Gian Thực Tế Khảo Cổ",
      titleEn: "Mythical 9,999.5 Rooms vs. Surveyed 8,886 Bays",
      stateMode: "plan",
      zoneId: "001",
      camPos: [58, 68, 122],
      lookAt: [0, 2, -6],
      bodyVi: "Đối chiếu quy chế biểu trưng và hiện trạng khảo sát cho thấy Tử Cấm Thành (1406–1420) thường được truyền tụng có 9.999,5 gian phòng (kém Thiên Đình nửa gian). Tuy nhiên, khảo sát đo đạc thực tế của Bảo tàng Cố Cung xác định quần thể rộng 724.250 m² này hiện có chính xác 8.886 gian trong 980 tòa nhà, bao bọc bởi tường thành cao 10 m, 4 Giác Lâu 72 bờ nóc và hào sâu 6 m.",
      bodyEn: "Comparing symbolic cosmology with modern surveying reveals how folklore credits the Forbidden City (1406–1420) with 9,999.5 bays—half a room shy of Heaven—whereas archival Palace Museum surveys inside the 724,250 m² walled precinct measure exactly 8,886 surviving bays across 980 structures.",
      vnLensVi: "ĐỐI CHIẾU HOÀNG THÀNH THĂNG LONG & ĐẠI NỘI HUẾ: Quy thức trục chính tâm Nam–Bắc ('Tả Tổ Hữu Xã, Tiền Triều Hậu Thị') của Bắc Kinh cũng là nguyên lý quy hoạch cốt lõi tại Hoàng thành Thăng Long và Kinh thành Huế. Khi đi thực địa Bắc Kinh, nhớ đặt vé hộ chiếu trước 7 ngày lúc 20:00 và đi một chiều Nam (Ngọ Môn) → Bắc (Thần Vũ Môn).",
      vnLensEn: "SINO-VIETNAMESE AXIAL HERITAGE: Beijing's sacred North–South royal axis ('Ancestral Temple Left, Altar Right, Court Front, Market Rear') parallels the planning of Thang Long Imperial Citadel and Hue Imperial City. Book passport-linked tickets 7 days prior and walk South (Meridian Gate) to North (Shenwumen)."
    },
    {
      step: "02",
      tagVi: "GIẢI PHẪU CỬA NGÕ · NGỌ MÔN (38M)",
      tagEn: "SOUTHERN PORTAL · MERIDIAN GATE (38M)",
      titleVi: "Ngọ Môn (午门): Tường Đài 12m, Lầu Ngũ Phượng & Quy Chế 3 Cửa",
      titleEn: "U-Shaped Fortress Bastion & Strict Three-Gate Protocol",
      stateMode: "plan",
      zoneId: "001",
      camPos: [0, 26, 106],
      lookAt: [0, 8, 66],
      bodyVi: "Ngọ Môn vươn cao 38 m với tường đài đỏ 12 m và lầu chính dài 60,05 m × rộng 25 m nối với 2 lầu chuông trống và 4 đình góc (Ngũ Phượng Lâu). Ba lối đi phân cấp tuyệt đối: cửa giữa chỉ dành cho Hoàng đế (ngoại lệ Hoàng hậu ngày đại hôn và Tam Khôi xuất cung sau thi Đình); quan lại đi cửa Đông; tôn thất đi cửa Tây.",
      bodyEn: "Rising 38 meters on a 12-meter crimson brick bastion, the U-shaped gate links five pavilions (Five Phoenix Towers) over three strict axial tunnels separating Emperor, civil/military officials, and imperial clan.",
      vnLensVi: "ĐỐI CHIẾU ĐẠI NỘI HUẾ: Ngọ Môn Huế (xây 1833 thời Minh Mạng) kế thừa cấu trúc chữ U và Lầu Ngũ Phượng trên cao, nhưng kết hợp thanh thoát với mái ngói lưu ly và nghệ thuật pháp lam Huế.",
      vnLensEn: "HUE PARALLEL: Hue's Ngo Mon (1833, Minh Mang reign) adapts the identical U-shaped bastion and Five Phoenix upper gallery, scaled harmoniously to the Perfume River axis."
    },
    {
      step: "03",
      tagVi: "KHÔNG GIAN ĐỆM · SÂN 140M × 210M",
      tagEn: "BUFFER FORECOURT · 5 MARBLE BRIDGES",
      titleVi: "Sông Nội Kim Thủy, 5 Cầu Đá Cẩm Thạch & Quảng Trường 30.000 m²",
      titleEn: "Inner Golden Water Canal & Treeless 30,000 m² Ceremony Plaza",
      stateMode: "plan",
      zoneId: "002",
      camPos: [28, 24, 76],
      lookAt: [0, 4, 46],
      bodyVi: "Sau Ngọ Môn là sân rộng 140 × 210 m, nơi dòng Nội Kim Thủy Hà uốn hình cánh cung được bắc qua bởi 5 cầu cẩm thạch Hán Bạch Ngọc. Qua Thái Hòa Môn mở ra quảng trường rộng 30.000 m² không trồng một bóng cây nhằm tạo uy thế tuyệt đối và ngăn thích khách ẩn nấp.",
      bodyEn: "Past Meridian Gate flows the bow-shaped Inner Golden Water Canal spanned by five white marble bridges. Beyond Taihemen opens the vast 30,000 m² plaza kept deliberately treeless for unobstructed imperial sightlines and security.",
      vnLensVi: "ĐỐI CHIẾU ĐẠI NỘI HUẾ: Khác với sân gạch trơ trụi ở Bắc Kinh, Đại Nội Huế đặt hồ Thái Dịch và thảm cây xanh ngay sau Ngọ Môn (cầu Trung Đạo), phản ánh mỹ học hòa điệu khí hậu nhiệt đới Việt Nam.",
      vnLensEn: "ECOLOGICAL CONTRAST: Unlike Beijing's stark stone forecourt, Hue Citadel embeds lotus ponds and lush canopy gardens behind Ngo Mon along Trung Dao Bridge."
    },
    {
      step: "04",
      tagVi: "TRUNG TÂM NGOẠI TRIỀU · CAO 30M",
      tagEn: "OUTER COURT APEX · TAIHEDIAN (30M)",
      titleVi: "Tam Đại Điện, Đài Tam Đài Chữ Thổ & Nghịch Lý Điện Thái Hòa",
      titleEn: "Three Great Halls on Xumizuo Terrace & Ceremonial Reality",
      stateMode: "actual",
      zoneId: "003",
      camPos: [28, 21, 34],
      lookAt: [0, 10, 14],
      bodyVi: "Đặt trên đài Tam Đài chữ 'Thổ' (土) 3 tầng (1.142 đầu rồng Ly Thủ thoát nước), sân trước đặt 18 đỉnh đồng, hạc–quy đồng, Nhật khuê và Gia lượng; Điện Thái Hòa cao 30 m với mái Trọng diêm Vũ điện và 10 linh thú góc mái. Giải phẫu lịch sử cho thấy từ nhà Thanh, do điện quá rộng và lạnh, thiết triều thường nhật chuyển về Càn Thanh Môn và Dưỡng Tâm Điện.",
      bodyEn: "Elevated atop an H-shaped three-tier marble terrace ringed by 1,142 dragon drainage heads, bronze sundial, and 10 unmatched roof beasts, Taihedian stands 30m high—yet its cavernous draftiness pushed daily Qing administration elsewhere.",
      vnLensVi: "ĐỐI CHIẾU HUẾ: Điện Thái Hòa ở Huế giữ truyền thống lễ Đại triều mồng 1 và Rằm dưới bửu tán cửu long thếp vàng và 25 ô pháp lam 'nhất thi nhất họa'.",
      vnLensEn: "HUE PARALLEL: Hue's Thai Hoa Hall preserved active lunar court audiences beneath its gilded nine-dragon canopy and 'one poem, one painting' enamel friezes."
    },
    {
      step: "05",
      tagVi: "DỊCH CHUYỂN CÔNG NĂNG · NỘI ĐÌNH",
      tagEn: "FUNCTIONAL SHIFT · INNER COURT POWER",
      titleVi: "Từ Càn Thanh Cung Sang Dưỡng Tâm Điện: 'Thay Đổi Công Năng' Thực Tế",
      titleEn: "From Qianqinggong to Yangxindian: Real-World Spatial Shift",
      stateMode: "actual",
      zoneId: "007",
      camPos: [-42, 20, -24],
      lookAt: [-18, 5, -36],
      bodyVi: "Năm 1722, Hoàng đế Ung Chính rời bỏ tẩm cung chính thức Càn Thanh Cung sang làm việc và nghỉ ngơi tại Dưỡng Tâm Điện sát Quân Cơ Xứ. Suốt gần 200 năm sau, 8 đời hoàng đế nhà Thanh điều hành đế chế từ khu chữ Công (工) nhỏ gọn phía Tây này — một chuyển dịch công năng thực tế đáng kinh ngạc so với quy hoạch gốc.",
      bodyEn: "In 1722, Emperor Yongzheng left grand Qianqinggong to live and govern from compact Yangxindian next to Grand Council clerks—transforming an auxiliary western compound into the de facto political center of the Qing dynasty for nearly two centuries.",
      vnLensVi: "MẸO THỰC ĐỊA: Đừng chỉ đi thẳng trục giữa! Hãy rẽ Tây thăm Dưỡng Tâm Điện (Tam Hy Đường) và rẽ Đông vào Ninh Thọ Cung xem Cửu Long Bích 270 mảnh gốm (vá gỗ ở con rồng trắng thứ 3) & ngọc điêu 1,07 tấn.",
      vnLensEn: "FIELD TIP: Most rushed tours miss East/West flanks—detour West to Yangxindian (Sanxitang study) and East to Ningshougong's glazed Nine-Dragon Screen and 1.07-ton jade boulder."
    },
    {
      step: "06",
      tagVi: "GIẢI PHẪU KẾT CẤU X-RAY · ĐẤU CỦNG & ĐÁ 250 TẤN",
      tagEn: "X-RAY DOUGONG JOINERY & 250T MONOLITH",
      titleVi: "Bóc Tách Mái Trọng Diêm, Đấu Củng Không Đinh, Cột Nam Mộc & Ngai Vàng",
      titleEn: "Exploding Double-Eave Roofs to Expose Dougong Brackets & Nanmu Pillars",
      stateMode: "xray",
      zoneId: "003",
      camPos: [25, 22, 28],
      lookAt: [0, 12, 12],
      bodyVi: "Khi bật Bóc tách X-Ray và kéo thanh nâng mái, mô hình tách rời tầng mái thượng diêm, hạ diêm và cụm mộng Đấu Củng (斗拱) nhiều tầng để lộ rõ hàng cột Kim ti Nam mộc vàng rực, bệ ngai vàng Cửu Long và quả cầu Gương Hiên Viên bên trong Điện Thái Hòa — minh chứng kỹ nghệ chống động đất không đinh sắt.",
      bodyEn: "In Exploded X-Ray view, upper/lower golden glazed eaves and stepped Dougong cantilevers rise upward while crimson outer walls turn translucent—exposing golden Nanmu pillars, the Nine-Dragon Throne dais, and the suspended Xuanyuan Mirror.",
      vnLensVi: "KỸ NGHỆ VẬT LIỆU: 80 triệu viên gạch (1,93 triệu tấn) + 27 công thức vữa vôi + tảng đá Vân Long 250 tấn sau Bảo Hòa Điện là minh chứng đỉnh cao của kỹ nghệ vật liệu và mộc công cổ truyền Đông Á.",
      vnLensEn: "MATERIAL SCALE: 80 million kiln bricks (1.93M tons), 27 lime mortar formulas, and a 250-ton carved dragon stone slab showcase the zenith of pre-modern East Asian structural and material craft."
    },
    {
      step: "07",
      tagVi: "KẾT THÚC TRỤC BẮC · NGỰ HOA VIÊN (12.000 M²)",
      tagEn: "NORTHERN CULMINATION · IMPERIAL GARDEN",
      titleVi: "Ngự Hoa Viên, Núi Đôi Tú Sơn, 4 Giác Lâu & Tầm Nhìn Đồi Cảnh Sơn",
      titleEn: "Taihu Rockery, 72-Ridge Corner Towers & Jingshan Overlook",
      stateMode: "plan",
      zoneId: "010",
      camPos: [26, 26, -96],
      lookAt: [0, 6, -70],
      bodyVi: "Cực Bắc của trục 960 m mở vào Ngự Hoa Viên (12.000 m², xây năm 1417) với Khâm An Điện, Đôi Tú Sơn (Ngự Cảnh Đình), Vạn Xuân Đình – Thiên Thu Đình và bách tùng 500 tuổi trước cổng Thần Vũ Môn cùng 4 Giác Lâu 72 bờ nóc.",
      bodyEn: "Closing the 960m axis, the 12,000 m² Imperial Garden weaves jagged Taihu rockeries, twin seasonal pavilions, and 500-year cypresses inside the protective reach of the four 72-ridge Corner Towers.",
      vnLensVi: "HÀNH TRANG NGỌA DU: Sau khi bước qua Thần Vũ Môn, đi qua đường lên đỉnh đồi Cảnh Sơn để chiêm ngưỡng toàn bộ trục mái vàng — góc nhìn thực tế trùng khít góc Isometric trên mô hình 3D này.",
      vnLensEn: "PANORAMIC FINALE: After exiting North Gate Shenwumen, climb Jingshan Hill directly opposite to view all golden rooftops aligned toward Meridian Gate—matching this 3D isometric angle."
    }
  ];

  const MULTISCALE_TABLES = {
    fc: {
      col1Vi: "Quy Chế Biểu Trưng / Truyền Thuyết Minh–Thanh",
      col2Vi: "Thực Tế Khảo Cổ & Vận Hành (Bảo Tàng Cố Cung)",
      col1En: "Symbolic Statute / Imperial Folklore",
      col2En: "Archaeological Survey & Actual Operation",
      rows: [
        { metricVi: "Tổng số gian phòng (Rooms / Bays)", metricEn: "Total Palace Bays", val1: 9999, label1Vi: "9.999,5 gian (Truyền thuyết Thiên tử)", label1En: "9,999.5 bays (Heavenly Myth)", val2: 8886, label2Vi: "8.886 gian (Khảo sát thực tế)", label2En: "8,886 bays (Surveyed Fact)", noteVi: "Chênh 1.113,5 gian giữa con số biểu trưng Cửu Ngũ và số gian đếm thực", noteEn: "Difference of 1,113.5 bays between mythic symbolism and physical count" },
        { metricVi: "Chiều dài Nam–Bắc × Đông–Tây", metricEn: "Axis Length × Courtyard Width", val1: 960, label1Vi: "Dài 960 m (Trục Nam – Bắc)", label1En: "960 m North–South Axis", val2: 750, label2Vi: "Rộng 750 m (Trục Đông – Tây)", label2En: "750 m East–West Span", noteVi: "Tổng diện tích quần thể 724.250 m² (~72,4 ha)", noteEn: "Enclosing 724,250 m² within the 52m perimeter moat" },
        { metricVi: "Chiều cao Ngọ Môn vs Tường đài đỏ", metricEn: "Meridian Gate Height vs Crimson Wall", val1: 38, label1Vi: "38 m (Đỉnh mái Ngũ Phượng Lâu)", label1En: "38 m Five-Phoenix Apex", val2: 12, label2Vi: "12 m (Tường đài gạch đỏ)", label2En: "12 m Brick Fortress Base", noteVi: "Lầu chính dài 60,05 m × rộng 25 m (9×5 gian)", noteEn: "Main tower spans 60.05 m × 25 m" },
        { metricVi: "Chiều cao Điện Thái Hòa vs Tường thành", metricEn: "Supreme Harmony Apex vs Perimeter Wall", val1: 30, label1Vi: "30 m (Đặt trên đài Tam Đài 3 tầng)", label1En: "30 m Above Triple Marble Platform", val2: 10, label2Vi: "10 m (Tường thành + Hào sâu 6 m)", label2En: "10 m Curtain Wall + 6 m Moat", noteVi: "Điện Thái Hòa rộng 9 gian × 5 gian trên sân 30.000 m²", noteEn: "Faces the 30,000 m² treeless ceremony plaza" },
        { metricVi: "Số hoàng đế trị vì: Triều Minh vs Thanh", metricEn: "Reigning Monarchs: Ming vs Qing", val1: 14, label1Vi: "14 Hoàng đế nhà Minh (1420–1644)", label1En: "14 Ming Emperors", val2: 10, label2Vi: "10 Hoàng đế nhà Thanh (1644–1924)", label2En: "10 Qing Emperors", noteVi: "8 hoàng đế cuối nhà Thanh chuyển ở Dưỡng Tâm Điện", noteEn: "8 late Qing emperors resided inside Yangxindian" },
        { metricVi: "Khối lượng Tảng đá Vân Long vs Ngọc điêu", metricEn: "Dragon Ramp Monolith vs Jade Mountain", val1: 250, label1Vi: "250 tấn (Tảng đá sau Bảo Hòa Điện)", label1En: "250 Metric Tons (Dragon Slab)", val2: 1.07, label2Vi: "1,07 tấn (Đại Vũ trị thủy ngọc bích)", label2En: "1.07 Tons (Duyu Jade Carving)", noteVi: "Toàn thành dùng 80 triệu viên gạch nặng 1,93 triệu tấn", noteEn: "Backed by 80M fired bricks across 27 lime mortar recipes" },
        { metricVi: "Cửu Long Bích: Mảnh gốm vs Mảnh gỗ vá", metricEn: "Nine-Dragon Screen: Tiles vs Timber Patch", val1: 270, label1Vi: "270 phiến lưu ly 7 màu", label1En: "270 Glazed Relief Tiles", val2: 1, label2Vi: "1 miếng gỗ vá bụng rồng trắng thứ 3", label2En: "1 Carved Wood Repair Piece", noteVi: "Chi tiết bảo tồn sai lệch lò nung nổi tiếng năm 1772", noteEn: "Ingenious kiln-crack wooden replacement from 1772" }
      ]
    },
    hue: {
      col1Vi: "Tử Cấm Thành Bắc Kinh (1420)",
      col2Vi: "Hoàng Thành & Đại Nội Huế (1804–1833)",
      col1En: "Beijing Forbidden City (1420)",
      col2En: "Hue Imperial Citadel (1804–1833)",
      rows: [
        { metricVi: "Diện tích quần thể lõi", metricEn: "Core Complex Footprint", val1: 724250, label1Vi: "724.250 m² (72,4 ha Tử Cấm Thành)", label1En: "724,250 m² Forbidden City", val2: 360000, label2Vi: "360.000 m² Hoàng Thành Huế (chu vi 2.400 m)", label2En: "360,000 m² Hue Citadel Core", noteVi: "Cùng quy hoạch trục Nam–Bắc nhưng Huế điều chỉnh theo khí hậu nhiệt đới & sông Hương", noteEn: "Shared North–South axis tailored harmonically to Perfume River wind corridors" },
        { metricVi: "Chiều cao Ngọ Môn", metricEn: "Meridian Gate Height", val1: 38, label1Vi: "38 m Ngọ Môn Bắc Kinh (5 cửa chính–phụ)", label1En: "38 m Beijing Meridian Gate", val2: 17.5, label2Vi: "17,5 m Ngọ Môn Huế (Lầu Ngũ Phượng)", label2En: "17.5 m Hue Meridian Gate", noteVi: "Đều dùng cấu trúc đài chữ U làm lễ đăng cơ và ban lịch", noteEn: "Both adopt the U-shaped Five-Phoenix masonry bastion for court proclamations" },
        { metricVi: "Sân Đại Triều & Điện Thái Hòa", metricEn: "Supreme Harmony & Ceremony Plaza", val1: 2377, label1Vi: "2.377 m² sàn Điện Thái Hòa Bắc Kinh", label1En: "2,377 m² Beijing Taihedian", val2: 1200, label2Vi: "1.200 m² Điện Thái Hòa Huế (Trùng thiềm Điệp ốc)", label2En: "1,200 m² Hue Thai Hoa Hall", noteVi: "Bắc Kinh hướng uy nghiêm choáng ngợp; Huế thêm hồ Thái Dịch xanh mát", noteEn: "Beijing maximizes stark majesty; Hue pairs lotus lakes and polychrome enamels" },
        { metricVi: "Phân khu chức năng trục chính", metricEn: "Indexed Axial Precincts", val1: 10, label1Vi: "10 Cụm cung điện trục chính (001–010)", label1En: "10 Axial Zones (001–010)", val2: 10, label2Vi: "10 Cụm Ngọ Môn – Thái Hòa – Cần Chánh – Càn Thành – Vườn", label2En: "10 Paired Gate, Court, Palace & Garden Zones", noteVi: "Phản ánh tương đồng 'Tả Tổ Hữu Xã, Tiền Triều Hậu Tẩm' trong văn hiến Đông Á", noteEn: "Mirrors shared Confucian administrative zoning across East Asian palaces" }
      ]
    },
    timber: {
      col1Vi: "Thông Số Quy Phạm Hoàng Gia",
      col2Vi: "Kỹ Nghệ Vật Liệu & Kết Cấu Thích Ứng",
      col1En: "Imperial Architectural Canon",
      col2En: "Material Craft & Seismic Structural Reality",
      rows: [
        { metricVi: "Cột chống Điện Thái Hòa", metricEn: "Taihedian Nanmu Pillars", val1: 72, label1Vi: "72 cột gỗ Kim ti Nam mộc nguyên thân", label1En: "72 Full-Trunk Golden Nanmu Pillars", val2: 6, label2Vi: "6 cột chính thếp vàng quấn rồng quanh ngai", label2En: "6 Coiled-Dragon Gold-Leaf Throne Pillars", noteVi: "Cột không chôn xuống đất mà đặt trên đá tảng tránh ẩm mục", noteEn: "Pillars rest unanchored on polished stone plinths to slip safely in earthquakes" },
        { metricVi: "Linh thú góc mái (Thái Hòa vs Càn Thanh)", metricEn: "Roof Ridge Beasts", val1: 10, label1Vi: "10 linh thú trên mái Điện Thái Hòa (độc nhất)", label1En: "10 Ridge Beasts (Taihedian — Unique Apex)", val2: 9, label2Vi: "9 linh thú trên mái Càn Thanh Cung", label2En: "9 Ridge Beasts (Qianqinggong)", noteVi: "Số lượng linh thú phân định cấp bậc lễ nghi nghiêm ngặt của tòa điện", noteEn: "Increasing beast count visibly encodes imperial ritual hierarchy" },
        { metricVi: "Hệ thống thoát nước Tam Đài", metricEn: "Marble Terrace Drainage", val1: 1142, label1Vi: "1.142 đầu rồng đá Ly Thủ phun nước mưa", label1En: "1,142 Carved Dragon Waterspouts", val2: 8.13, label2Vi: "3 tầng đài cẩm thạch Tu Di Tọa cao 8,13 m", label2En: "8.13 m Triple White Marble Platform", noteVi: "Biến hệ thống kỹ thuật thoát nước thành kỳ quan 'Thiên Long thổ thủy' khi mưa lớn", noteEn: "Turns utilitarian storm drainage into cascading architectural spectacle" }
      ]
    }
  };

  const TIMELINE_EVENTS = [
    { year: "1406–1407", phase: "P1", badgeVi: "GĐ1 · KHỞI CÔNG", badgeEn: "PHASE 1 · START", titleVi: "Minh Vĩnh Lạc ban chiếu kiến tạo Tử Cấm Thành", titleEn: "Yongle Decree Launches Construction", descVi: "Huy động 100.000 nghệ nhân và 1 triệu dân công chế tác gỗ Nam Mộc, gạch Kim Chuyên và 80 triệu viên gạch.", descEn: "Mobilized 100,000 master artisans using Sichuan Nanmu timber, Suzhou golden bricks, and 80M masonry blocks." },
    { year: "1417", phase: "P1", badgeVi: "GĐ1 · CẢNH QUAN", badgeEn: "PHASE 1 · GARDEN", titleVi: "Hoàn thiện Ngự Hoa Viên rộng 12.000 m²", titleEn: "12,000 m² Imperial Garden Completed", descVi: "Kiến tạo không gian thượng uyển Đôi Tú Sơn – Khâm An Điện hài hòa cổ thụ và đá Thái Hồ.", descEn: "Balanced rigid axial symmetry with Taihu rockeries and ancient cypress groves in the north." },
    { year: "1420", phase: "P1", badgeVi: "GĐ1 · HOÀN THÀNH", badgeEn: "PHASE 1 · DEDICATED", titleVi: "Khánh thành quần thể 960m × 750m sau 14 năm", titleEn: "960m × 750m Complex Dedicated", descVi: "Hoàn tất trục lễ nghi Ngọ Môn – Tam Đại Điện – Nội Đình, khởi đầu triều đại 14 hoàng đế Minh.", descEn: "Inaugurated the Ming Imperial Axis hosting 14 Ming emperors through 1644." },
    { year: "1627 & 1644", phase: "P1", badgeVi: "GĐ1 · CHUYỂN GIAO", badgeEn: "PHASE 1 · TRANSITION", titleVi: "Trùng tu Trung Hòa Điện & Chuyển giao Minh – Thanh", titleEn: "Zhonghedian Rebuild & Qing Transition", descVi: "Phục dựng Trung Hòa Điện (1627); năm 1644 triều Thanh tiếp quản Tử Cấm Thành.", descEn: "Hall of Central Harmony restored (1627); Qing Dynasty assumed palace stewardship in 1644." },
    { year: "1689", phase: "P2", badgeVi: "GĐ2 · MỞ RỘNG", badgeEn: "PHASE 2 · EXPANSION", titleVi: "Xây dựng Ninh Thọ Cung ở khu vực phía Đông", titleEn: "Ningshougong Erected in Eastern Precinct", descVi: "Khởi dựng tiền thân khu 'Tử Cấm Thành thu nhỏ' dưới thời Hoàng đế Khang Hy.", descEn: "Constructed the eastern wing destined to become Qianlong's autonomous retirement complex." },
    { year: "1722", phase: "P2", badgeVi: "GĐ2 · DỊCH CHUYỂN", badgeEn: "PHASE 2 · SHIFT", titleVi: "Ung Chính chuyển tâm quyền lực sang Dưỡng Tâm Điện", titleEn: "Power Shifts from Qianqinggong to Yangxindian", descVi: "Dịch chuyển công năng thực tế: 8 đời vua Thanh điều hành đế chế từ Dưỡng Tâm Điện sát Quân Cơ Xứ.", descEn: "Real-world functional shift: eight Qing rulers governed daily from compact Yangxindian." },
    { year: "1765 & 1772", phase: "P2", badgeVi: "GĐ2 · ĐỈNH CAO", badgeEn: "PHASE 2 · PINNACLE", titleVi: "Hoàng Cực Điện, Cửu Long Bích & Ngọc 1,07 tấn", titleEn: "Nine-Dragon Screen & 1.07-Ton Jade", descVi: "Hoàn thiện Cửu Long Bích 270 viên gốm (vá gỗ rồng thứ 3) và ngọc điêu Đại Vũ trị thủy.", descEn: "Qianlong expanded Ningshougong with the 270-tile dragon screen and 1.07-ton jade boulder." },
    { year: "1924–1925", phase: "P3", badgeVi: "GĐ3 · BẢO TÀNG", badgeEn: "PHASE 3 · MUSEUM", titleVi: "Thành lập Bảo tàng Cố Cung (Song Thập 1925)", titleEn: "Palace Museum Opened to Public (1925)", descVi: "Khép lại hơn 500 năm hoàng quyền 24 hoàng đế, mở cửa cấm địa thành bảo tàng văn hóa công lập.", descEn: "Transformed the forbidden sanctuary of 24 emperors into a public national museum." },
    { year: "1961 & 1987", phase: "P3", badgeVi: "GĐ3 · DI SẢN UNESCO", badgeEn: "PHASE 3 · UNESCO", titleVi: "Di sản Thế giới UNESCO Kiến trúc Gỗ Lớn Nhất", titleEn: "UNESCO World Heritage Listing (1987)", descVi: "Ghi danh quần thể kiến trúc gỗ cổ đại bảo tồn nguyên vẹn quy mô lớn nhất toàn cầu.", descEn: "Inscribed as the largest preserved complex of ancient palatial timber structures worldwide." },
    { year: "2020–2026", phase: "P3", badgeVi: "GĐ3 · SỐ HÓA 3D", badgeEn: "PHASE 3 · DIGITAL TWIN", titleVi: "Kỷ niệm 600 năm Cố Cung & Giải phẫu 3D trên CCE", titleEn: "600th Anniversary & Interactive 3D Dissection on CCE", descVi: "Tái hiện trực quan 10 phân khu cung điện, mái cong Phi Diềm, Đấu Củng X-Ray và đối sánh kiến trúc Đại Nội Huế.", descEn: "Interactive WebGL reconstruction of 10 palatial zones, curved eaves, and X-Ray Dougong joinery compared alongside Hue Citadel." }
  ];

  // --------------------------------------------------------------------------
  // PROCEDURAL HIGH-DETAIL CANVAS TEXTURE & THREE.JS GEOMETRY BUILDERS
  // --------------------------------------------------------------------------
  function makePlaqueTexture(text) {
    const c = document.createElement("canvas");
    c.width = 256;
    c.height = 96;
    const ctx = c.getContext("2d");
    ctx.fillStyle = "#162B5C";
    ctx.fillRect(0, 0, 256, 96);
    ctx.strokeStyle = "#E6B84D";
    ctx.lineWidth = 8;
    ctx.strokeRect(5, 5, 246, 86);
    ctx.fillStyle = "#F7D36B";
    ctx.font = "bold 44px 'Noto Serif SC', 'Songti SC', serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 128, 50);
    return new THREE.CanvasTexture(c);
  }

  function buildProceduralTextures() {
    // 1. Imperial Yellow Glazed Roof Tile Texture (Corrugated Tongwa Ribs)
    const roofCanvas = document.createElement("canvas");
    roofCanvas.width = 256;
    roofCanvas.height = 256;
    const rCtx = roofCanvas.getContext("2d");
    rCtx.fillStyle = "#D99B16";
    rCtx.fillRect(0, 0, 256, 256);
    for (let x = 0; x < 256; x += 8) {
      rCtx.fillStyle = x % 16 === 0 ? "#F3B82B" : "#B67B09";
      rCtx.fillRect(x, 0, 4, 256);
      rCtx.fillStyle = "#FFF099";
      rCtx.fillRect(x + 1, 0, 1, 256);
    }
    for (let y = 0; y < 256; y += 16) {
      rCtx.fillStyle = "rgba(110, 65, 0, 0.32)";
      rCtx.fillRect(0, y, 256, 2);
    }
    const roofTex = new THREE.CanvasTexture(roofCanvas);
    roofTex.wrapS = THREE.RepeatWrapping;
    roofTex.wrapT = THREE.RepeatWrapping;
    roofTex.repeat.set(6, 3);

    // 2. Vermilion Palace Wall with Golden Lattice Doors & Hexi Caihua Painted Frieze
    const wallCanvas = document.createElement("canvas");
    wallCanvas.width = 512;
    wallCanvas.height = 256;
    const wCtx = wallCanvas.getContext("2d");
    wCtx.fillStyle = "#8F1919";
    wCtx.fillRect(0, 0, 512, 256);
    wCtx.fillStyle = "#10384F";
    wCtx.fillRect(0, 0, 512, 38);
    wCtx.fillStyle = "#1B5E45";
    wCtx.fillRect(0, 10, 512, 16);
    wCtx.strokeStyle = "#E5B842";
    wCtx.lineWidth = 2;
    wCtx.strokeRect(0, 2, 512, 34);
    for (let bx = 0; bx < 512; bx += 32) {
      wCtx.fillStyle = "#E5B842";
      wCtx.fillRect(bx + 12, 8, 8, 20);
    }
    for (let px = 16; px < 512; px += 64) {
      wCtx.strokeStyle = "#D4AF37";
      wCtx.lineWidth = 2;
      wCtx.strokeRect(px, 48, 44, 196);
      wCtx.fillStyle = "#5C0E0E";
      wCtx.fillRect(px + 2, 50, 40, 130);
      wCtx.strokeStyle = "rgba(229, 184, 66, 0.55)";
      wCtx.lineWidth = 1;
      for (let lx = px + 10; lx < px + 42; lx += 8) {
        wCtx.beginPath(); wCtx.moveTo(lx, 50); wCtx.lineTo(lx, 180); wCtx.stroke();
      }
      for (let ly = 64; ly < 180; ly += 14) {
        wCtx.beginPath(); wCtx.moveTo(px + 2, ly); wCtx.lineTo(px + 42, ly); wCtx.stroke();
      }
      wCtx.fillStyle = "#7A1414";
      wCtx.fillRect(px + 2, 184, 40, 58);
      wCtx.fillStyle = "#D4AF37";
      wCtx.fillRect(px + 16, 206, 12, 12);
    }
    const wallTex = new THREE.CanvasTexture(wallCanvas);
    wallTex.wrapS = THREE.RepeatWrapping;
    wallTex.wrapT = THREE.ClampToEdgeWrapping;

    // 3. Fortress Masonry Brick Wall Texture
    const fortCanvas = document.createElement("canvas");
    fortCanvas.width = 256;
    fortCanvas.height = 256;
    const fCtx = fortCanvas.getContext("2d");
    fCtx.fillStyle = "#841B1B";
    fCtx.fillRect(0, 0, 256, 256);
    fCtx.strokeStyle = "rgba(40, 8, 8, 0.35)";
    fCtx.lineWidth = 1;
    for (let y = 0; y < 256; y += 12) {
      fCtx.beginPath(); fCtx.moveTo(0, y); fCtx.lineTo(256, y); fCtx.stroke();
      const offset = (y / 12) % 2 === 0 ? 0 : 12;
      for (let x = offset; x < 256; x += 24) {
        fCtx.beginPath(); fCtx.moveTo(x, y); fCtx.lineTo(x, y + 12); fCtx.stroke();
      }
    }
    const fortTex = new THREE.CanvasTexture(fortCanvas);
    fortTex.wrapS = THREE.RepeatWrapping;
    fortTex.wrapT = THREE.RepeatWrapping;
    fortTex.repeat.set(4, 2);

    // 4. White Fangshan Marble Terrace Relief Texture
    const marbleCanvas = document.createElement("canvas");
    marbleCanvas.width = 256;
    marbleCanvas.height = 128;
    const mCtx = marbleCanvas.getContext("2d");
    mCtx.fillStyle = "#F2EFE9";
    mCtx.fillRect(0, 0, 256, 128);
    mCtx.strokeStyle = "#C7C1B4";
    mCtx.lineWidth = 2;
    for (let x = 4; x < 256; x += 32) {
      mCtx.strokeRect(x, 12, 24, 100);
      mCtx.fillStyle = "#E5E0D5";
      mCtx.fillRect(x + 4, 20, 16, 84);
    }
    const marbleTex = new THREE.CanvasTexture(marbleCanvas);
    marbleTex.wrapS = THREE.RepeatWrapping;
    marbleTex.wrapT = THREE.RepeatWrapping;
    marbleTex.repeat.set(6, 1);

    // 5. Cloud-Dragon Carved Imperial Ramp Texture (Yulu 250-ton Monolith)
    const dragonCanvas = document.createElement("canvas");
    dragonCanvas.width = 128;
    dragonCanvas.height = 256;
    const dCtx = dragonCanvas.getContext("2d");
    dCtx.fillStyle = "#EAE6DC";
    dCtx.fillRect(0, 0, 128, 256);
    dCtx.strokeStyle = "#9E9689";
    dCtx.lineWidth = 3;
    dCtx.strokeRect(6, 6, 116, 244);
    for (let y = 20; y < 240; y += 28) {
      dCtx.beginPath(); dCtx.arc(64, y, 22, 0, Math.PI * 1.5); dCtx.stroke();
      dCtx.fillStyle = "#C8C2B4";
      dCtx.beginPath(); dCtx.arc(44, y + 8, 8, 0, Math.PI * 2); dCtx.fill();
    }
    const dragonSlab = new THREE.CanvasTexture(dragonCanvas);

    // 6. Nine-Dragon Glazed Screen Texture (270 Tiles + 3rd White Dragon Wood Repair Highlight)
    const ndCanvas = document.createElement("canvas");
    ndCanvas.width = 512;
    ndCanvas.height = 128;
    const ndCtx = ndCanvas.getContext("2d");
    ndCtx.fillStyle = "#134E5E";
    ndCtx.fillRect(0, 0, 512, 128);
    ndCtx.fillStyle = "#1E7E6B";
    ndCtx.fillRect(0, 96, 512, 32);
    const dCols = ["#E5A918", "#4FD1C5", "#F7FAFC", "#9F7AEA", "#F6AD55", "#63B3ED", "#F56565", "#F7FAFC", "#E5A918"];
    for (let i = 0; i < 9; i++) {
      const cx = 28 + i * 56;
      ndCtx.fillStyle = dCols[i];
      ndCtx.beginPath(); ndCtx.arc(cx, 56, 18, 0, Math.PI * 2); ndCtx.fill();
      if (i === 2) {
        ndCtx.strokeStyle = "#D97706";
        ndCtx.lineWidth = 3;
        ndCtx.strokeRect(cx - 10, 52, 20, 14);
      }
    }
    const nineDragonWall = new THREE.CanvasTexture(ndCanvas);

    return {
      imperialRoof: roofTex,
      palaceWall: wallTex,
      fortressWall: fortTex,
      whiteMarble: marbleTex,
      dragonSlab,
      nineDragonWall
    };
  }

  function registerZoneMesh(zoneMeshMap, explodableMeshes, stats, zoneId, mesh, layer, isShiftTarget, explodeMult) {
    mesh.userData = {
      zoneId,
      layer: layer || "body",
      isShiftTarget: Boolean(isShiftTarget),
      baseY: mesh.position.y,
      explodeMult: explodeMult || 0
    };
    if (!zoneMeshMap[zoneId]) zoneMeshMap[zoneId] = [];
    zoneMeshMap[zoneId].push(mesh);
    if ((explodeMult || 0) > 0) explodableMeshes.push(mesh);
    stats.count += 1;
  }

  function createTraditionalRoofTier(opts, texLib, regFn) {
    const {
      w, d, h, yBase, zoneId,
      isShiftTarget = false,
      roofType = "hip", // "hip" | "gable" | "pyramid"
      tileColor = 0xe5a918,
      explodeMult = 1.0,
      beastCount = 5
    } = opts;

    const roofGroup = new THREE.Group();
    roofGroup.position.y = yBase;

    const roofMat = new THREE.MeshStandardMaterial({
      map: texLib.imperialRoof,
      color: tileColor,
      roughness: 0.35,
      metalness: 0.25,
      transparent: true,
      opacity: 1.0
    });
    const ridgeMat = new THREE.MeshStandardMaterial({
      color: 0xb8860b,
      roughness: 0.3,
      metalness: 0.45,
      transparent: true,
      opacity: 1.0
    });

    // Flared concave eave skirt (authentic Phi Diem curve profile)
    const skirtGeo = new THREE.CylinderGeometry(w * 0.56, w * 0.74, h * 0.42, 4);
    skirtGeo.rotateY(Math.PI / 4);
    const skirtMesh = new THREE.Mesh(skirtGeo, roofMat);
    skirtMesh.scale.set(1, 1, d / w);
    skirtMesh.position.y = h * 0.21;
    roofGroup.add(skirtMesh);

    if (roofType === "pyramid") {
      const upperCone = new THREE.Mesh(new THREE.ConeGeometry(w * 0.56, h * 0.68, 4).rotateY(Math.PI / 4), roofMat);
      upperCone.scale.set(1, 1, d / w);
      upperCone.position.y = h * 0.42 + h * 0.34;
      roofGroup.add(upperCone);

      const finial = new THREE.Mesh(
        new THREE.SphereGeometry(Math.max(0.45, w * 0.06), 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.15, metalness: 0.85 })
      );
      finial.position.y = h + 0.35;
      roofGroup.add(finial);
    } else {
      const topRatio = roofType === "gable" ? 0.48 : 0.4;
      const upperGeo = new THREE.CylinderGeometry(w * topRatio, w * 0.56, h * 0.58, 4);
      upperGeo.rotateY(Math.PI / 4);
      const upperMesh = new THREE.Mesh(upperGeo, roofMat);
      upperMesh.scale.set(1, 1, (d / w) * 0.65);
      upperMesh.position.y = h * 0.42 + h * 0.29;
      roofGroup.add(upperMesh);

      if (roofType === "gable") {
        const gableMat = new THREE.MeshStandardMaterial({ color: 0x8f1919, roughness: 0.6 });
        [-1, 1].forEach((dir) => {
          const gable = new THREE.Mesh(new THREE.BoxGeometry(0.4, h * 0.48, d * 0.42), gableMat);
          gable.position.set(dir * w * 0.36, h * 0.56, 0);
          roofGroup.add(gable);
        });
      }

      const ridgeLen = w * (roofType === "gable" ? 0.68 : 0.58);
      const mainRidge = new THREE.Mesh(new THREE.BoxGeometry(ridgeLen, h * 0.16, 0.55), ridgeMat);
      mainRidge.position.y = h * 0.98;
      roofGroup.add(mainRidge);

      [-1, 1].forEach((side) => {
        const chiwen = new THREE.Mesh(
          new THREE.BoxGeometry(0.65, h * 0.34, 0.75),
          new THREE.MeshStandardMaterial({ color: 0xffd700, roughness: 0.2, metalness: 0.7 })
        );
        chiwen.position.set(side * (ridgeLen / 2 + 0.15), h * 1.08, 0);
        roofGroup.add(chiwen);
      });
    }

    // 4 Upturned Flying Eave Corners (Feiyan) + Row of Zoushou Roof Beasts
    const cornerX = w * 0.51;
    const cornerZ = d * 0.51;
    [[-1, -1], [1, -1], [-1, 1], [1, 1]].forEach(([sx, sz]) => {
      const horn = new THREE.Mesh(new THREE.ConeGeometry(0.38, 1.2, 4), ridgeMat);
      horn.position.set(sx * cornerX, h * 0.16, sz * cornerZ);
      horn.rotation.z = -sx * 0.45;
      horn.rotation.x = sz * 0.45;
      roofGroup.add(horn);

      const numBeasts = Math.min(5, Math.max(2, Math.floor(beastCount / 2)));
      for (let b = 0; b < numBeasts; b++) {
        const t = (b + 1) / (numBeasts + 2);
        const beast = new THREE.Mesh(
          new THREE.BoxGeometry(0.24, 0.36, 0.24),
          new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.6, roughness: 0.25 })
        );
        beast.position.set(sx * cornerX * (1 - t * 0.35), h * (0.14 + t * 0.32), sz * cornerZ * (1 - t * 0.35));
        roofGroup.add(beast);
      }
    });

    regFn(zoneId, roofGroup, "roof", isShiftTarget, explodeMult);
    return roofGroup;
  }

  function createDetailedPalaceHall(opts, texLib, regFn) {
    const {
      w, d, baseH = 2.0, bodyH = 5.0, roofH = 4.5,
      x = 0, y = 0, z = 0,
      zoneId,
      roofType = "hip",
      doubleEave = false,
      isMarbleBase = false,
      isShiftTarget = false,
      hasInteriorThrone = false,
      baysX = 7,
      baysZ = 4,
      plaqueText = "",
      roofColor = 0xe5a918
    } = opts;

    const hallGroup = new THREE.Group();
    hallGroup.position.set(x, y, z);

    // 1. Stone / Marble Base Plinth + Front Dragon Slab Staircase
    if (baseH > 0.2) {
      const baseMat = new THREE.MeshStandardMaterial({
        map: isMarbleBase ? texLib.whiteMarble : null,
        color: isMarbleBase ? 0xf5f2eb : 0x7a756c,
        roughness: 0.65,
        transparent: true,
        opacity: 1.0
      });
      const plinth = new THREE.Mesh(new THREE.BoxGeometry(w * 1.16, baseH, d * 1.16), baseMat);
      plinth.position.y = baseH / 2;
      hallGroup.add(plinth);
      regFn(zoneId, plinth, "foundation", isShiftTarget, 0);

      const stairW = Math.min(w * 0.42, 9.0);
      const stairD = Math.min(baseH * 1.35, 4.5);
      const stairMesh = new THREE.Mesh(
        new THREE.BoxGeometry(stairW, baseH * 0.85, stairD),
        new THREE.MeshStandardMaterial({ map: texLib.dragonSlab, color: 0xf0ede6, roughness: 0.5 })
      );
      stairMesh.position.set(0, baseH * 0.42, (d * 1.16) / 2 + stairD * 0.4);
      stairMesh.rotation.x = 0.35;
      hallGroup.add(stairMesh);
      regFn(zoneId, stairMesh, "foundation", isShiftTarget, 0);
    }

    // 2. Interior Structural Core (Golden Nanmu Columns + Throne + Xuanyuan Mirror Orb)
    const colRadius = Math.max(0.18, Math.min(0.34, w * 0.012));
    const colMat = new THREE.MeshStandardMaterial({
      color: hasInteriorThrone ? 0xd4af37 : 0x9e1b1b,
      roughness: 0.35,
      metalness: hasInteriorThrone ? 0.5 : 0.1
    });

    const pillarGroup = new THREE.Group();
    pillarGroup.position.y = baseH;
    const numColsX = Math.max(4, Math.min(10, baysX + 1));
    const numColsZ = Math.max(3, Math.min(6, baysZ + 1));
    for (let ix = 0; ix < numColsX; ix++) {
      const px = -w * 0.48 + (ix / (numColsX - 1)) * (w * 0.96);
      [-d * 0.48, d * 0.48].forEach((pz) => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(colRadius, colRadius * 1.08, bodyH, 8), colMat);
        col.position.set(px, bodyH / 2, pz);
        pillarGroup.add(col);
      });
    }
    for (let iz = 1; iz < numColsZ - 1; iz++) {
      const pz = -d * 0.48 + (iz / (numColsZ - 1)) * (d * 0.96);
      [-w * 0.48, w * 0.48].forEach((px) => {
        const col = new THREE.Mesh(new THREE.CylinderGeometry(colRadius, colRadius * 1.08, bodyH, 8), colMat);
        col.position.set(px, bodyH / 2, pz);
        pillarGroup.add(col);
      });
    }

    if (hasInteriorThrone) {
      const throneDais = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.28, bodyH * 0.32, d * 0.28),
        new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.75, roughness: 0.2 })
      );
      throneDais.position.set(0, bodyH * 0.16, -d * 0.08);
      pillarGroup.add(throneDais);

      const screenBack = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.24, bodyH * 0.45, 0.35),
        new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.8, roughness: 0.2 })
      );
      screenBack.position.set(0, bodyH * 0.42, -d * 0.2);
      pillarGroup.add(screenBack);

      const mirrorOrb = new THREE.Mesh(
        new THREE.SphereGeometry(0.65, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffe066, emissive: 0x553300, metalness: 0.9, roughness: 0.1 })
      );
      mirrorOrb.position.set(0, bodyH * 0.88, 0);
      pillarGroup.add(mirrorOrb);
    }

    hallGroup.add(pillarGroup);
    regFn(zoneId, pillarGroup, "interior_columns", isShiftTarget, 0);

    // 3. Outer Vermilion Wall Shell (translucent in X-Ray mode) + Optional Imperial Plaque
    const wallTexClone = texLib.palaceWall.clone();
    wallTexClone.needsUpdate = true;
    wallTexClone.repeat.set(Math.max(1, Math.round(w / 5)), 1);
    const wallMat = new THREE.MeshStandardMaterial({
      map: wallTexClone,
      roughness: 0.55,
      transparent: true,
      opacity: 1.0
    });
    const wallShell = new THREE.Mesh(new THREE.BoxGeometry(w * 0.92, bodyH, d * 0.92), wallMat);
    wallShell.position.y = baseH + bodyH / 2;
    hallGroup.add(wallShell);
    regFn(zoneId, wallShell, "wall_shell", isShiftTarget, 0);

    if (plaqueText) {
      const pMat = new THREE.MeshBasicMaterial({ map: makePlaqueTexture(plaqueText) });
      const plaque = new THREE.Mesh(new THREE.PlaneGeometry(Math.min(4.2, w * 0.35), 1.35), pMat);
      plaque.position.set(0, baseH + bodyH - 0.75, d * 0.47);
      hallGroup.add(plaque);
    }

    // 4. Stepped Interlocking 3-Tier Dougong Bracket Cantilever
    const dougongGroup = new THREE.Group();
    dougongGroup.position.y = baseH + bodyH;
    const dgMat1 = new THREE.MeshStandardMaterial({ color: 0x1b5e45, roughness: 0.5 });
    const dgMat2 = new THREE.MeshStandardMaterial({ color: 0xc05621, roughness: 0.45 });
    const dgMat3 = new THREE.MeshStandardMaterial({ color: 0xd4af37, roughness: 0.35, metalness: 0.4 });

    const dgStep1 = new THREE.Mesh(new THREE.BoxGeometry(w * 1.0, 0.45, d * 1.0), dgMat1);
    dgStep1.position.y = 0.22;
    const dgStep2 = new THREE.Mesh(new THREE.BoxGeometry(w * 1.06, 0.5, d * 1.06), dgMat2);
    dgStep2.position.y = 0.7;
    const dgStep3 = new THREE.Mesh(new THREE.BoxGeometry(w * 1.12, 0.45, d * 1.12), dgMat3);
    dgStep3.position.y = 1.18;
    dougongGroup.add(dgStep1, dgStep2, dgStep3);
    hallGroup.add(dougongGroup);
    regFn(zoneId, dougongGroup, "dougong", isShiftTarget, 0.55);

    // 5. Roof Assembly (Double-Eave or Single-Eave Curved Imperial Roof)
    const roofStart = baseH + bodyH + 1.4;
    if (doubleEave) {
      const lowerSkirtGroup = new THREE.Group();
      lowerSkirtGroup.position.y = roofStart;
      const lowerRoofMat = new THREE.MeshStandardMaterial({
        map: texLib.imperialRoof,
        color: roofColor,
        roughness: 0.35,
        metalness: 0.25,
        transparent: true,
        opacity: 1.0
      });
      const eaveFlange = new THREE.Mesh(
        new THREE.CylinderGeometry(w * 0.58, w * 0.8, roofH * 0.38, 4).rotateY(Math.PI / 4),
        lowerRoofMat
      );
      eaveFlange.scale.set(1, 1, d / w);
      eaveFlange.position.y = roofH * 0.19;
      lowerSkirtGroup.add(eaveFlange);

      const clerestory = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.78, roofH * 0.28, d * 0.78),
        new THREE.MeshStandardMaterial({ color: 0x8f1919, roughness: 0.5 })
      );
      clerestory.position.y = roofH * 0.42;
      lowerSkirtGroup.add(clerestory);

      const upperDg = new THREE.Mesh(new THREE.BoxGeometry(w * 0.84, 0.45, d * 0.84), dgMat2);
      upperDg.position.y = roofH * 0.58;
      lowerSkirtGroup.add(upperDg);

      hallGroup.add(lowerSkirtGroup);
      regFn(zoneId, lowerSkirtGroup, "lower_roof", isShiftTarget, 1.05);

      hallGroup.add(createTraditionalRoofTier({
        w: w * 0.86, d: d * 0.86, h: roofH * 0.78, yBase: roofStart + roofH * 0.58,
        zoneId, isShiftTarget, roofType, tileColor: roofColor, explodeMult: 1.65, beastCount: 10
      }, texLib, regFn));
    } else {
      hallGroup.add(createTraditionalRoofTier({
        w: w * 1.04, d: d * 1.04, h: roofH, yBase: roofStart,
        zoneId, isShiftTarget, roofType, tileColor: roofColor, explodeMult: 1.25, beastCount: 6
      }, texLib, regFn));
    }

    return hallGroup;
  }

  function addMarbleBalustradeRing(parentGroup, w, d, topY, zoneId, texLib, regFn, addDragonSpouts) {
    const postMat = new THREE.MeshStandardMaterial({ color: 0xfaf8f5, roughness: 0.45 });
    const railMat = new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf2efe9, roughness: 0.5 });
    const spoutMat = new THREE.MeshStandardMaterial({ color: 0xe6e2d8, roughness: 0.5 });
    const railH = 0.85;
    const halfW = w / 2 - 0.25;
    const halfD = d / 2 - 0.25;

    const sideSegW = (w - 8) / 2;
    if (sideSegW > 2) {
      [-1, 1].forEach((sx) => {
        [-halfD, halfD].forEach((rz) => {
          const seg = new THREE.Mesh(new THREE.BoxGeometry(sideSegW, railH, 0.32), railMat);
          seg.position.set(sx * (w / 4 + 2), topY + railH / 2, rz);
          parentGroup.add(seg);
          regFn(zoneId, seg, "foundation", false, 0);
        });
      });
    }
    [-halfW, halfW].forEach((rx) => {
      const seg = new THREE.Mesh(new THREE.BoxGeometry(0.32, railH, d - 0.5), railMat);
      seg.position.set(rx, topY + railH / 2, 0);
      parentGroup.add(seg);
      regFn(zoneId, seg, "foundation", false, 0);
    });

    const stepX = Math.max(4, Math.floor(w / 7));
    for (let x = -halfW; x <= halfW; x += stepX) {
      if (Math.abs(x) < 3.8) continue;
      [-halfD, halfD].forEach((z, idx) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.45, railH + 0.45, 0.45), postMat);
        post.position.set(x, topY + (railH + 0.45) / 2, z);
        parentGroup.add(post);
        if (addDragonSpouts) {
          const spout = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.28, 1.1), spoutMat);
          spout.position.set(x, topY - 0.2, z + (idx === 0 ? -0.55 : 0.55));
          parentGroup.add(spout);
        }
      });
    }

    const stepZ = Math.max(4, Math.floor(d / 7));
    for (let z = -halfD; z <= halfD; z += stepZ) {
      [-halfW, halfW].forEach((x, idx) => {
        const post = new THREE.Mesh(new THREE.BoxGeometry(0.45, railH + 0.45, 0.45), postMat);
        post.position.set(x, topY + (railH + 0.45) / 2, z);
        parentGroup.add(post);
        if (addDragonSpouts) {
          const spout = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.28, 0.28), spoutMat);
          spout.position.set(x + (idx === 0 ? -0.55 : 0.55), topY - 0.2, z);
          parentGroup.add(spout);
        }
      });
    }
  }

  function create72RidgeCornerTower(cx, cz, zoneId, texLib, regFn) {
    const towerGroup = new THREE.Group();
    towerGroup.position.set(cx, 5.2, cz);
    const base = new THREE.Mesh(new THREE.BoxGeometry(9.2, 1.2, 9.2), new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf5f2eb }));
    base.position.y = 0.6;
    towerGroup.add(base);

    const wallMat = new THREE.MeshStandardMaterial({ map: texLib.palaceWall, roughness: 0.5 });
    const armA = new THREE.Mesh(new THREE.BoxGeometry(7.6, 4.2, 4.4), wallMat);
    armA.position.y = 3.3;
    const armB = new THREE.Mesh(new THREE.BoxGeometry(4.4, 4.2, 7.6), wallMat);
    armB.position.y = 3.3;
    towerGroup.add(armA, armB);

    const roofMat = new THREE.MeshStandardMaterial({ map: texLib.imperialRoof, color: 0xe5a918, roughness: 0.3, metalness: 0.3 });
    [0, 1, 2].forEach((tier) => {
      const sc = 1 - tier * 0.22;
      const ty = 5.4 + tier * 2.1;
      const rA = new THREE.Mesh(new THREE.CylinderGeometry(3.2 * sc, 5.2 * sc, 1.8, 4).rotateY(Math.PI / 4), roofMat);
      rA.scale.set(1.25, 1, 0.72);
      rA.position.y = ty;
      const rB = new THREE.Mesh(new THREE.CylinderGeometry(3.2 * sc, 5.2 * sc, 1.8, 4).rotateY(Math.PI / 4), roofMat);
      rB.scale.set(0.72, 1, 1.25);
      rB.position.y = ty;
      towerGroup.add(rA, rB);
    });

    const finial = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 10), new THREE.MeshStandardMaterial({ color: 0xffd700, metalness: 0.9, roughness: 0.1 }));
    finial.position.y = 10.8;
    towerGroup.add(finial);
    regFn(zoneId, towerGroup, "roof", false, 0.8);
    return towerGroup;
  }

  function createCourtyardArtifact(type, x, y, z, zoneId, regFn) {
    const group = new THREE.Group();
    group.position.set(x, y, z);
    const bronzeMat = new THREE.MeshStandardMaterial({ color: 0xb8860b, metalness: 0.75, roughness: 0.28 });
    const marbleMat = new THREE.MeshStandardMaterial({ color: 0xf2efe9, roughness: 0.5 });

    if (type === "censer") {
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.55, 0.65, 0.7, 8), marbleMat);
      ped.position.y = 0.35;
      const bowl = new THREE.Mesh(new THREE.SphereGeometry(0.55, 10, 10), bronzeMat);
      bowl.position.y = 0.95;
      const lid = new THREE.Mesh(new THREE.ConeGeometry(0.45, 0.6, 8), bronzeMat);
      lid.position.y = 1.5;
      group.add(ped, bowl, lid);
    } else if (type === "vat") {
      const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.65, 0.7, 0.35, 10), marbleMat);
      ped.position.y = 0.18;
      const vat = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.55, 0.95, 12), bronzeMat);
      vat.position.y = 0.82;
      group.add(ped, vat);
    } else if (type === "lion") {
      const ped = new THREE.Mesh(new THREE.BoxGeometry(1.4, 1.4, 1.8), marbleMat);
      ped.position.y = 0.7;
      const body = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.3, 1.2), bronzeMat);
      body.position.y = 2.0;
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.65, 10, 10), bronzeMat);
      head.position.set(0, 2.75, 0.25);
      group.add(ped, body, head);
    } else if (type === "sundial") {
      const ped = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.4, 1.1), marbleMat);
      ped.position.y = 0.7;
      const disk = new THREE.Mesh(new THREE.CylinderGeometry(0.85, 0.85, 0.2, 16), marbleMat);
      disk.position.y = 1.65;
      disk.rotation.x = 0.72;
      group.add(ped, disk);
    }
    regFn(zoneId, group, "foundation", false, 0);
    return group;
  }

  function buildForbiddenCity3D(root, texLib, regFn) {
    // 1. Moat & Courtyard Floor
    const moatOuter = new THREE.Mesh(new THREE.BoxGeometry(156, 1.0, 192), new THREE.MeshStandardMaterial({ color: 0xd8d4ca, roughness: 0.7 }));
    moatOuter.position.set(0, -0.6, 0);
    root.add(moatOuter);

    const moatWater = new THREE.Mesh(new THREE.BoxGeometry(148, 0.9, 184), new THREE.MeshStandardMaterial({ color: 0x164e63, roughness: 0.15, metalness: 0.35 }));
    moatWater.position.set(0, -0.35, 0);
    root.add(moatWater);

    const citadelBase = new THREE.Mesh(new THREE.BoxGeometry(126, 1.4, 162), new THREE.MeshStandardMaterial({ color: 0x383632, roughness: 0.85 }));
    citadelBase.position.set(0, 0.2, 0);
    root.add(citadelBase);

    const imperialWay = new THREE.Mesh(new THREE.BoxGeometry(12, 0.18, 154), new THREE.MeshStandardMaterial({ color: 0xcfcbc2, roughness: 0.6 }));
    imperialWay.position.set(0, 0.92, 0);
    root.add(imperialWay);

    // 2. Curtain Walls + East/West Gates + 4 Corner Towers
    const wallMat = new THREE.MeshStandardMaterial({ map: texLib.fortressWall, roughness: 0.65 });
    const wallCapMat = new THREE.MeshStandardMaterial({ color: 0xd99b16, roughness: 0.4 });
    [
      { w: 124, d: 3.4, x: 0, z: -79 },
      { w: 124, d: 3.4, x: 0, z: 79 },
      { w: 3.4, d: 158, x: 61, z: 0 },
      { w: 3.4, d: 158, x: -61, z: 0 }
    ].forEach((ws) => {
      const wMesh = new THREE.Mesh(new THREE.BoxGeometry(ws.w, 5.2, ws.d), wallMat);
      wMesh.position.set(ws.x, 2.6, ws.z);
      const capMesh = new THREE.Mesh(new THREE.BoxGeometry(ws.w + 0.3, 0.45, ws.d + 0.3), wallCapMat);
      capMesh.position.set(ws.x, 5.3, ws.z);
      root.add(wMesh, capMesh);
    });

    root.add(createDetailedPalaceHall({ w: 9, d: 14, baseH: 5.2, bodyH: 3.8, roofH: 3.8, x: 61, z: 48, zoneId: "002", roofType: "hip", doubleEave: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 9, d: 14, baseH: 5.2, bodyH: 3.8, roofH: 3.8, x: -61, z: 48, zoneId: "002", roofType: "hip", doubleEave: true }, texLib, regFn));
    [[-61, -79], [61, -79], [-61, 79], [61, 79]].forEach(([cx, cz]) => {
      root.add(create72RidgeCornerTower(cx, cz, "010", texLib, regFn));
    });

    // ZONE 001: Ngọ Môn (U-Shaped Five Phoenix Tower)
    const wumenGroup = new THREE.Group();
    const fortMat = new THREE.MeshStandardMaterial({ map: texLib.fortressWall, roughness: 0.6 });
    const wumenBase = new THREE.Mesh(new THREE.BoxGeometry(36, 6.8, 11), fortMat);
    wumenBase.position.set(0, 3.4, 71);
    wumenGroup.add(wumenBase);

    const portalMat = new THREE.MeshStandardMaterial({ color: 0x1a0808, roughness: 0.9 });
    [-7.5, 0, 7.5].forEach((px, pIdx) => {
      const portal = new THREE.Mesh(new THREE.BoxGeometry(pIdx === 1 ? 3.2 : 2.5, pIdx === 1 ? 4.4 : 3.8, 11.4), portalMat);
      portal.position.set(px, (pIdx === 1 ? 4.4 : 3.8) / 2 + 0.5, 71);
      wumenGroup.add(portal);
    });

    [-16.5, 16.5].forEach((wx) => {
      const wingWall = new THREE.Mesh(new THREE.BoxGeometry(7.2, 6.6, 18), fortMat);
      wingWall.position.set(wx, 3.3, 77);
      const gal = new THREE.Mesh(new THREE.BoxGeometry(3.2, 2.2, 14), new THREE.MeshStandardMaterial({ color: 0xf5f2eb, roughness: 0.5 }));
      gal.position.set(wx, 7.7, 76);
      wumenGroup.add(wingWall, gal);
    });
    addMarbleBalustradeRing(wumenGroup, 35, 10.5, 6.8, "001", texLib, regFn, true);
    wumenGroup.add(createDetailedPalaceHall({ w: 24, d: 8.5, baseH: 0.4, bodyH: 4.8, roofH: 5.2, x: 0, y: 6.8, z: 71, zoneId: "001", roofType: "hip", doubleEave: true, isMarbleBase: true, baysX: 9, baysZ: 5, plaqueText: "午门" }, texLib, regFn));
    [-16.5, 16.5].forEach((bx) => {
      wumenGroup.add(createDetailedPalaceHall({ w: 5.2, d: 5.2, baseH: 0.4, bodyH: 3.4, roofH: 3.6, x: bx, y: 6.6, z: 70, zoneId: "001", roofType: "pyramid", doubleEave: false, isMarbleBase: true }, texLib, regFn));
      wumenGroup.add(createDetailedPalaceHall({ w: 5.8, d: 11.5, baseH: 0.4, bodyH: 3.6, roofH: 3.8, x: bx, y: 6.6, z: 80.5, zoneId: "001", roofType: "gable", doubleEave: false, isMarbleBase: true }, texLib, regFn));
    });
    regFn("001", wumenBase, "foundation", false, 0);
    root.add(wumenGroup);

    // ZONE 002: Bow-shaped Inner Golden Water Canal + 5 Marble Bridges + Thái Hòa Môn
    const riverSegments = [
      { w: 28, d: 4.8, x: 0, z: 56.5, rotY: 0 },
      { w: 22, d: 4.6, x: -23, z: 58.8, rotY: 0.22 },
      { w: 22, d: 4.6, x: 23, z: 58.8, rotY: -0.22 }
    ];
    riverSegments.forEach((rs) => {
      const bank = new THREE.Mesh(new THREE.BoxGeometry(rs.w + 1.2, 1.1, rs.d + 1.4), new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf5f2eb }));
      bank.position.set(rs.x, 0.55, rs.z);
      bank.rotation.y = rs.rotY;
      const water = new THREE.Mesh(new THREE.BoxGeometry(rs.w, 0.9, rs.d), new THREE.MeshStandardMaterial({ color: 0x1e6091, roughness: 0.15, metalness: 0.35 }));
      water.position.set(rs.x, 0.68, rs.z);
      water.rotation.y = rs.rotY;
      root.add(bank, water);
      regFn("002", water, "foundation", false, 0);
    });

    const bridgeMat = new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xfaf8f5, roughness: 0.4 });
    [-11, -5.5, 0, 5.5, 11].forEach((bx, bIdx) => {
      const bW = bIdx === 2 ? 2.8 : 2.1;
      const bg = new THREE.Group();
      bg.position.set(bx, 1.0, 56.5);
      const deck = new THREE.Mesh(new THREE.BoxGeometry(bW, 0.65, 6.8), bridgeMat);
      deck.position.y = 0.35;
      const lRail = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.75, 6.8), bridgeMat);
      lRail.position.set(-bW / 2 + 0.14, 0.85, 0);
      const rRail = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.75, 6.8), bridgeMat);
      rRail.position.set(bW / 2 - 0.14, 0.85, 0);
      bg.add(deck, lRail, rRail);
      regFn("002", bg, "foundation", false, 0);
      root.add(bg);
    });

    root.add(createDetailedPalaceHall({ w: 22, d: 9.2, baseH: 2.6, bodyH: 4.5, roofH: 4.6, x: 0, y: 0.8, z: 42, zoneId: "002", roofType: "gable", doubleEave: true, isMarbleBase: true, baysX: 9, baysZ: 4, plaqueText: "太和门" }, texLib, regFn));
    root.add(createCourtyardArtifact("lion", -5.2, 0.8, 48.5, "002", regFn));
    root.add(createCourtyardArtifact("lion", 5.2, 0.8, 48.5, "002", regFn));
    [-20, 20].forEach((gx) => {
      const sw = new THREE.Mesh(new THREE.BoxGeometry(22, 3.6, 1.6), wallMat);
      sw.position.set(gx * 1.15, 2.2, 42);
      root.add(sw);
      root.add(createDetailedPalaceHall({ w: 8.5, d: 5.5, baseH: 1.2, bodyH: 3.4, roofH: 3.2, x: gx, y: 0.8, z: 42, zoneId: "002", roofType: "gable", doubleEave: false }, texLib, regFn));
    });
    root.add(createDetailedPalaceHall({ w: 14, d: 9, baseH: 1.6, bodyH: 4.0, roofH: 3.8, x: 42, y: 0.8, z: 50, zoneId: "002", roofType: "gable", doubleEave: false, isMarbleBase: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 14, d: 9, baseH: 1.6, bodyH: 4.0, roofH: 3.8, x: -42, y: 0.8, z: 50, zoneId: "002", roofType: "gable", doubleEave: false, isMarbleBase: true }, texLib, regFn));

    // ZONE 003-005: H-Shaped (土) Three-Tier Marble Terrace (Tam Đài / Santai)
    const santaiGroup = new THREE.Group();
    santaiGroup.position.set(0, 0.8, 0);
    const santaiMat = new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf7f5f0, roughness: 0.45 });
    [
      { z: 16, w1: 48, d1: 26, w2: 43, d2: 22, w3: 38, d3: 18, zoneId: "003" },
      { z: 0, w1: 36, d1: 14, w2: 32, d2: 12, w3: 28, d3: 10, zoneId: "004" },
      { z: -15, w1: 44, d1: 22, w2: 39, d2: 18, w3: 34, d3: 15, zoneId: "005" }
    ].forEach((sec) => {
      const t1 = new THREE.Mesh(new THREE.BoxGeometry(sec.w1, 2.0, sec.d1), santaiMat);
      t1.position.set(0, 1.0, sec.z);
      const t2 = new THREE.Mesh(new THREE.BoxGeometry(sec.w2, 1.8, sec.d2), santaiMat);
      t2.position.set(0, 2.9, sec.z);
      const t3 = new THREE.Mesh(new THREE.BoxGeometry(sec.w3, 1.8, sec.d3), santaiMat);
      t3.position.set(0, 4.7, sec.z);
      santaiGroup.add(t1, t2, t3);
      addMarbleBalustradeRing(santaiGroup, sec.w1, sec.d1, 2.0, sec.zoneId, texLib, regFn, true);
      addMarbleBalustradeRing(santaiGroup, sec.w2, sec.d2, 3.8, sec.zoneId, texLib, regFn, true);
      addMarbleBalustradeRing(santaiGroup, sec.w3, sec.d3, 5.6, sec.zoneId, texLib, regFn, true);
      regFn(sec.zoneId, t1, "foundation", false, 0);
      regFn(sec.zoneId, t2, "foundation", false, 0);
      regFn(sec.zoneId, t3, "foundation", false, 0);
    });

    const grandRamp = new THREE.Mesh(
      new THREE.BoxGeometry(9.5, 5.6, 11),
      new THREE.MeshStandardMaterial({ map: texLib.dragonSlab, color: 0xefece6, roughness: 0.45 })
    );
    grandRamp.position.set(0, 2.6, 30.5);
    grandRamp.rotation.x = 0.42;
    santaiGroup.add(grandRamp);
    regFn("003", grandRamp, "foundation", false, 0);
    root.add(santaiGroup);

    // ZONE 003: Điện Thái Hòa + Sundials + Censers + Fire Vats + Side Galleries
    root.add(createDetailedPalaceHall({ w: 31, d: 15.5, baseH: 0.4, bodyH: 7.4, roofH: 7.8, x: 0, y: 6.4, z: 16, zoneId: "003", roofType: "hip", doubleEave: true, isMarbleBase: true, isShiftTarget: true, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "太和殿" }, texLib, regFn));
    root.add(createCourtyardArtifact("sundial", 11.5, 6.4, 23.2, "003", regFn));
    root.add(createCourtyardArtifact("sundial", -11.5, 6.4, 23.2, "003", regFn));
    [-8.5, -5.5, 5.5, 8.5].forEach((cx) => root.add(createCourtyardArtifact("censer", cx, 6.4, 23.0, "003", regFn)));
    [-18, -12, 12, 18].forEach((vx) => root.add(createCourtyardArtifact("vat", vx, 0.8, 34, "003", regFn)));
    root.add(createDetailedPalaceHall({ w: 7.5, d: 34, baseH: 1.5, bodyH: 4.5, roofH: 4.2, x: 34, y: 0.8, z: 16, zoneId: "003", roofType: "gable", doubleEave: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 7.5, d: 34, baseH: 1.5, bodyH: 4.5, roofH: 4.2, x: -34, y: 0.8, z: 16, zoneId: "003", roofType: "gable", doubleEave: true }, texLib, regFn));

    // ZONE 004: Điện Trung Hòa (Square Pyramidal Roof)
    root.add(createDetailedPalaceHall({ w: 11.5, d: 11.5, baseH: 0.4, bodyH: 5.2, roofH: 5.6, x: 0, y: 6.4, z: 0, zoneId: "004", roofType: "pyramid", doubleEave: false, isMarbleBase: true, hasInteriorThrone: true, baysX: 3, baysZ: 3, plaqueText: "中和殿" }, texLib, regFn));

    // ZONE 005: Điện Bảo Hòa + 250-ton Dragon Monolith
    root.add(createDetailedPalaceHall({ w: 25.5, d: 13.0, baseH: 0.4, bodyH: 6.2, roofH: 6.4, x: 0, y: 6.4, z: -15, zoneId: "005", roofType: "gable", doubleEave: true, isMarbleBase: true, isShiftTarget: true, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "保和殿" }, texLib, regFn));
    const dragonMonolith = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 5.8, 10.5),
      new THREE.MeshStandardMaterial({ map: texLib.dragonSlab, color: 0xf5f3ee, roughness: 0.35 })
    );
    dragonMonolith.position.set(0, 3.2, -26.2);
    dragonMonolith.rotation.x = -0.45;
    regFn("005", dragonMonolith, "foundation", true, 0);
    root.add(dragonMonolith);

    // ZONE 006: Càn Thanh Môn & Hậu Tam Cung
    const innerDivideWall = new THREE.Mesh(new THREE.BoxGeometry(118, 3.8, 1.6), wallMat);
    innerDivideWall.position.set(0, 2.4, -32);
    root.add(innerDivideWall);
    root.add(createDetailedPalaceHall({ w: 14, d: 6.5, baseH: 1.6, bodyH: 3.8, roofH: 3.8, x: 0, y: 0.8, z: -32, zoneId: "006", roofType: "gable", doubleEave: false, isMarbleBase: true }, texLib, regFn));
    const innerTerrace = new THREE.Mesh(new THREE.BoxGeometry(28, 2.4, 30), santaiMat);
    innerTerrace.position.set(0, 2.0, -49);
    root.add(innerTerrace);
    addMarbleBalustradeRing(root, 28, 30, 3.2, "006", texLib, regFn, true);
    regFn("006", innerTerrace, "foundation", false, 0);
    root.add(createDetailedPalaceHall({ w: 22, d: 10.5, baseH: 0.3, bodyH: 5.2, roofH: 5.4, x: 0, y: 3.2, z: -40, zoneId: "006", roofType: "hip", doubleEave: true, isMarbleBase: true, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "乾清宫" }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 8.8, d: 8.8, baseH: 0.3, bodyH: 4.0, roofH: 4.4, x: 0, y: 3.2, z: -49.5, zoneId: "006", roofType: "pyramid", doubleEave: false, isMarbleBase: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 19.5, d: 9.8, baseH: 0.3, bodyH: 4.8, roofH: 4.8, x: 0, y: 3.2, z: -58.5, zoneId: "006", roofType: "hip", doubleEave: true, isMarbleBase: true, baysX: 9, baysZ: 4 }, texLib, regFn));

    // ZONE 007: Dưỡng Tâm Điện (I-plan + Grand Council)
    const yxWall = new THREE.Mesh(new THREE.BoxGeometry(19, 3.2, 16), wallMat);
    yxWall.position.set(-23, 2.1, -36);
    const yxFloor = new THREE.Mesh(new THREE.BoxGeometry(17.6, 2.2, 14.6), new THREE.MeshStandardMaterial({ color: 0x3d3a35 }));
    yxFloor.position.set(-23, 1.8, -36);
    root.add(yxWall, yxFloor);
    root.add(createDetailedPalaceHall({ w: 14.5, d: 6.5, baseH: 1.2, bodyH: 4.4, roofH: 4.2, x: -23, y: 2.2, z: -33, zoneId: "007", roofType: "gable", doubleEave: false, isShiftTarget: true, hasInteriorThrone: true, plaqueText: "养心殿" }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 5.2, d: 4.5, baseH: 1.0, bodyH: 3.6, roofH: 3.2, x: -23, y: 2.2, z: -36.5, zoneId: "007", roofType: "gable", doubleEave: false, isShiftTarget: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 13.5, d: 5.5, baseH: 1.2, bodyH: 4.0, roofH: 3.8, x: -23, y: 2.2, z: -40, zoneId: "007", roofType: "hip", doubleEave: false, isShiftTarget: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 9.5, d: 4.2, baseH: 0.8, bodyH: 2.8, roofH: 2.6, x: -20, y: 1.2, z: -26.5, zoneId: "007", roofType: "gable", doubleEave: false, isShiftTarget: true }, texLib, regFn));

    // ZONE 008: Ninh Thọ Cung, Cửu Long Bích & Ngọc 1,07 tấn
    const ndGroup = new THREE.Group();
    ndGroup.position.set(37, 0.8, -19);
    const ndBase = new THREE.Mesh(new THREE.BoxGeometry(13.5, 1.4, 2.2), new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf5f2eb }));
    ndBase.position.y = 0.7;
    const ndBody = new THREE.Mesh(new THREE.BoxGeometry(12.8, 3.4, 1.5), new THREE.MeshStandardMaterial({ map: texLib.nineDragonWall, roughness: 0.2, metalness: 0.3 }));
    ndBody.position.y = 3.1;
    ndGroup.add(ndBase, ndBody, createTraditionalRoofTier({ w: 13.6, d: 2.6, h: 1.8, yBase: 4.8, zoneId: "008", isShiftTarget: true, roofType: "hip", explodeMult: 0.6 }, texLib, regFn));
    regFn("008", ndBody, "body", true, 0);
    root.add(ndGroup);
    root.add(createDetailedPalaceHall({ w: 16.5, d: 9.5, baseH: 2.2, bodyH: 4.8, roofH: 4.8, x: 37, y: 0.8, z: -31, zoneId: "008", roofType: "gable", doubleEave: true, isMarbleBase: true, isShiftTarget: true, hasInteriorThrone: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 15.0, d: 8.5, baseH: 1.8, bodyH: 4.4, roofH: 4.2, x: 37, y: 0.8, z: -43, zoneId: "008", roofType: "hip", doubleEave: false, isMarbleBase: true, isShiftTarget: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 13.5, d: 8.5, baseH: 1.6, bodyH: 4.2, roofH: 4.0, x: 37, y: 0.8, z: -55, zoneId: "008", roofType: "gable", doubleEave: false, isMarbleBase: true, isShiftTarget: true }, texLib, regFn));
    const jadeSculpture = new THREE.Mesh(new THREE.DodecahedronGeometry(1.45, 1), new THREE.MeshStandardMaterial({ color: 0x38a169, roughness: 0.2, metalness: 0.3 }));
    jadeSculpture.position.set(37, 3.8, -50.5);
    regFn("008", jadeSculpture, "interior_columns", true, 0);
    root.add(jadeSculpture);

    // ZONE 009: Đông – Tây Lục Cung (12 Courtyard Compounds)
    const buildCompound = (cx, cz) => {
      const cWall = new THREE.Mesh(new THREE.BoxGeometry(10.8, 2.8, 9.2), wallMat);
      cWall.position.set(cx, 1.9, cz);
      regFn("009", cWall, "foundation", false, 0);
      root.add(cWall);
      root.add(createDetailedPalaceHall({ w: 7.4, d: 4.2, baseH: 1.2, bodyH: 3.0, roofH: 2.8, x: cx, y: 1.6, z: cz + 1.2, zoneId: "009", roofType: "gable" }, texLib, regFn));
      root.add(createDetailedPalaceHall({ w: 7.0, d: 3.6, baseH: 1.0, bodyH: 2.6, roofH: 2.4, x: cx, y: 1.6, z: cz - 2.4, zoneId: "009", roofType: "hip" }, texLib, regFn));
      [-3.8, 3.8].forEach((sx) => {
        root.add(createDetailedPalaceHall({ w: 2.4, d: 4.2, baseH: 0.8, bodyH: 2.3, roofH: 2.0, x: cx + sx, y: 1.6, z: cz - 0.5, zoneId: "009", roofType: "hip" }, texLib, regFn));
      });
    };
    [-45, -31].forEach((wx) => [-45, -55, -65].forEach((wz) => buildCompound(wx, wz)));
    [21, 51].forEach((ex) => [-45, -55, -65].forEach((ez) => buildCompound(ex, ez)));

    // ZONE 010: Ngự Hoa Viên + Đôi Tú Sơn + Thần Vũ Môn
    const gardenLawn = new THREE.Mesh(new THREE.BoxGeometry(34, 1.2, 12.5), new THREE.MeshStandardMaterial({ color: 0x1e4d3b, roughness: 0.85 }));
    gardenLawn.position.set(0, 1.1, -70.5);
    regFn("010", gardenLawn, "foundation", false, 0);
    root.add(gardenLawn);
    root.add(createDetailedPalaceHall({ w: 10.5, d: 6.8, baseH: 1.6, bodyH: 3.8, roofH: 3.8, x: 0, y: 1.4, z: -70.5, zoneId: "010", roofType: "gable", isMarbleBase: true }, texLib, regFn));
    [-10.5, 10.5].forEach((px) => {
      root.add(createDetailedPalaceHall({ w: 4.8, d: 4.8, baseH: 1.2, bodyH: 3.2, roofH: 3.8, x: px, y: 1.4, z: -69.5, zoneId: "010", roofType: "pyramid", doubleEave: true, isMarbleBase: true }, texLib, regFn));
    });
    const rockeryMat = new THREE.MeshStandardMaterial({ color: 0x6b7280, roughness: 0.9 });
    for (let r = 0; r < 6; r++) {
      const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(1.8 - r * 0.15, 0), rockeryMat);
      rock.position.set(7.5 + ((r % 3) - 1) * 1.4, 2.2 + Math.floor(r / 3) * 1.6, -74.5);
      root.add(rock);
    }
    root.add(createDetailedPalaceHall({ w: 3.4, d: 3.4, baseH: 0.4, bodyH: 2.4, roofH: 2.6, x: 7.5, y: 4.8, z: -74.5, zoneId: "010", roofType: "pyramid" }, texLib, regFn));
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x4a3525, roughness: 0.9 });
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x1b4332, roughness: 0.75 });
    [[-14, -67], [-14, -73], [-6, -66.5], [6, -66.5], [14, -67], [14, -73], [-7.5, -74.5]].forEach(([tx, tz]) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.42, 2.6, 6), trunkMat);
      trunk.position.set(tx, 2.4, tz);
      const crown = new THREE.Mesh(new THREE.DodecahedronGeometry(1.65, 1), foliageMat);
      crown.position.set(tx, 4.2, tz);
      root.add(trunk, crown);
    });
    root.add(createDetailedPalaceHall({ w: 18, d: 8.2, baseH: 5.4, bodyH: 4.6, roofH: 4.8, x: 0, y: 0.4, z: -79, zoneId: "010", roofType: "hip", doubleEave: true, isMarbleBase: true, plaqueText: "神武门" }, texLib, regFn));
  }

  // --------------------------------------------------------------------------
  // WEBGL MOUNTING, DISSECTION SYNC, 3D PROJECTED PINS & LIGHTING PRESETS
  // --------------------------------------------------------------------------
  function updateDissectionVisuals() {
    if (!rt) return;
    const targetExplode = Number(ui3d.explodePercent || 0) / 100;
    rt.explodableMeshes.forEach((mesh) => {
      if (mesh.userData && typeof mesh.userData.baseY === "number") {
        const mult = mesh.userData.explodeMult || 1.0;
        mesh.position.y = mesh.userData.baseY + targetExplode * 14 * mult;
      }
    });

    Object.keys(rt.zoneMeshMap).forEach((zId) => {
      const isSelected = zId === ui3d.activeZoneId;
      rt.zoneMeshMap[zId].forEach((obj) => {
        obj.traverse((child) => {
          if (!child.isMesh || !child.material) return;
          const layer = obj.userData.layer || child.userData.layer || "body";
          const isShift = obj.userData.isShiftTarget || child.userData.isShiftTarget;
          child.material.transparent = true;
          if (ui3d.dissectionState === "actual") {
            child.material.opacity = isShift || isSelected ? 1.0 : 0.28;
            if (child.material.emissive) {
              child.material.emissive.setHex(isShift ? 0x4a0e0e : isSelected ? 0x2e2005 : 0x000000);
            }
          } else if (ui3d.dissectionState === "xray") {
            child.material.opacity = layer === "wall_shell" ? 0.22 : 0.98;
            if (child.material.emissive) {
              child.material.emissive.setHex(layer === "dougong" || layer === "interior_columns" ? 0x3d2206 : 0x000000);
            }
          } else {
            child.material.opacity = 1.0;
            if (child.material.emissive) {
              child.material.emissive.setHex(isSelected ? 0x2c1d04 : 0x000000);
            }
          }
        });
      });
    });
  }

  function applyLightingPreset() {
    if (!rt) return;
    const { scene, ambientLight, sunLight } = rt;
    if (ui3d.lightingPreset === 0) {
      scene.background.setHex(0x101216);
      scene.fog.color.setHex(0x101216);
      ambientLight.color.setHex(0xfff8eb);
      ambientLight.intensity = 0.72;
      sunLight.color.setHex(0xfff0d4);
      sunLight.intensity = 1.15;
      sunLight.position.set(95, 145, 110);
    } else if (ui3d.lightingPreset === 1) {
      scene.background.setHex(0x1a1114);
      scene.fog.color.setHex(0x1a1114);
      ambientLight.color.setHex(0xffd1a6);
      ambientLight.intensity = 0.62;
      sunLight.color.setHex(0xff8c42);
      sunLight.intensity = 1.45;
      sunLight.position.set(-130, 65, 85);
    } else {
      scene.background.setHex(0x090c12);
      scene.fog.color.setHex(0x090c12);
      ambientLight.color.setHex(0x90cdf4);
      ambientLight.intensity = 0.58;
      sunLight.color.setHex(0xe2e8f0);
      sunLight.intensity = 0.95;
      sunLight.position.set(60, 160, 40);
    }
  }

  function flyCamera(camArr, lookArr) {
    if (!rt) return;
    ui3d.autoOrbit = false;
    rt.camTargetPos.set(camArr[0], camArr[1], camArr[2]);
    rt.lookTargetPos.set(lookArr[0], lookArr[1], lookArr[2]);
    const offset = new THREE.Vector3().subVectors(rt.camTargetPos, rt.lookTargetPos);
    rt.orbitRadius = Math.max(22, offset.length());
    rt.sphericalPhi = Math.acos(Math.max(-1, Math.min(1, offset.y / rt.orbitRadius)));
    rt.sphericalTheta = Math.atan2(offset.x, offset.z);
  }

  function updatePinPositions(container) {
    if (!rt || !container) return;
    const w = container.clientWidth;
    const h = container.clientHeight;
    const show = ui3d.showPins;
    rt.pinElements.forEach((item) => {
      if (!show) {
        item.el.style.display = "none";
        return;
      }
      const v = item.worldVec.clone();
      v.project(rt.camera);
      if (v.z > 1 || v.z < -1) {
        item.el.style.display = "none";
        return;
      }
      const sx = (v.x * 0.5 + 0.5) * w;
      const sy = (-(v.y * 0.5) + 0.5) * h;
      if (sx < 24 || sx > w - 24 || sy < 30 || sy > h - 60) {
        item.el.style.display = "none";
        return;
      }
      item.el.style.display = "block";
      item.el.style.left = `${sx}px`;
      item.el.style.top = `${sy}px`;
      const box = item.el.querySelector(".pin-box");
      if (box) {
        if (item.zoneId === ui3d.activeZoneId) {
          box.style.backgroundColor = "#9E1B1B";
          box.style.borderColor = "#FFD700";
        } else {
          box.style.backgroundColor = "rgba(20,20,19,0.88)";
          box.style.borderColor = "rgba(212,175,55,0.75)";
        }
      }
    });
  }

  function mountCanvas(containerId, pinsId) {
    const container = document.getElementById(containerId);
    if (!container || typeof THREE === "undefined") return;

    if (rt) {
      try {
        if (rt.rafId) cancelAnimationFrame(rt.rafId);
        if (rt.ro) rt.ro.disconnect();
        if (rt.renderer) {
          if (rt.renderer.forceContextLoss) rt.renderer.forceContextLoss();
          rt.renderer.dispose();
        }
      } catch {}
      rt = null;
    }

    container.innerHTML = "";
    const curLang = (window.CCE_STORE && window.CCE_STORE.getState().uiLang) || "vi";
    const isEnPin = curLang === "en";
    const w = Math.max(320, container.clientWidth || 860);
    const h = Math.max(340, container.clientHeight || 480);

    const texLib = buildProceduralTextures();
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x101216);
    scene.fog = new THREE.FogExp2(0x101216, 0.0018);

    const camCurrentPos = new THREE.Vector3(58, 68, 122);
    const camTargetPos = new THREE.Vector3(58, 68, 122);
    const lookCurrentPos = new THREE.Vector3(0, 2, -6);
    const lookTargetPos = new THREE.Vector3(0, 2, -6);

    const camera = new THREE.PerspectiveCamera(40, w / h, 1, 1000);
    camera.position.copy(camCurrentPos);
    camera.lookAt(lookCurrentPos);

    const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xfff8eb, 0.72);
    const hemiLight = new THREE.HemisphereLight(0xffebc8, 0x1f242d, 0.45);
    const sunLight = new THREE.DirectionalLight(0xfff0d4, 1.15);
    sunLight.position.set(95, 145, 110);
    const rimLight = new THREE.DirectionalLight(0x7fb3d5, 0.42);
    rimLight.position.set(-95, 75, -110);
    scene.add(ambientLight, hemiLight, sunLight, rimLight);

    const gridHelper = new THREE.GridHelper(340, 34, 0x3a3935, 0x1d1f24);
    gridHelper.position.y = -0.9;
    scene.add(gridHelper);

    const fcRootGroup = new THREE.Group();
    const zoneMeshMap = {};
    const explodableMeshes = [];
    const stats = { count: 0 };
    const regFn = (zId, m, l, s, e) => registerZoneMesh(zoneMeshMap, explodableMeshes, stats, zId, m, l, s, e);

    buildForbiddenCity3D(fcRootGroup, texLib, regFn);
    scene.add(fcRootGroup);

    // 3D Floating Callout Pins inside dedicated overlay container
    const pinElements = [];
    const pinOverlay = pinsId ? document.getElementById(pinsId) : null;
    if (pinOverlay) {
      pinOverlay.innerHTML = "";
      FORBIDDEN_CITY_ZONES.forEach((z) => {
        const el = document.createElement("div");
        el.className = "pin-3d-label";
        el.setAttribute("data-action", "fc3d-focus-zone");
        el.setAttribute("data-zone", z.id);
        const pinLabel = (isEnPin ? z.nameEn : z.nameVi).split("(")[0].trim();
        el.innerHTML = `
          <div class="pin-box">
            <span style="color:#D4AF37;font-weight:700;">${z.id}</span>
            <span>${pinLabel}</span>
          </div>
          <div class="pin-stem"></div>
        `;
        pinOverlay.appendChild(el);
        pinElements.push({
          zoneId: z.id,
          el,
          worldVec: new THREE.Vector3(z.pinPos[0], z.pinPos[1], z.pinPos[2])
        });
      });
    }

    let isDragging = false;
    let prevPointer = { x: 0, y: 0 };
    const rtState = {
      container,
      containerId,
      lang: curLang,
      scene,
      camera,
      renderer,
      ambientLight,
      sunLight,
      fcRootGroup,
      zoneMeshMap,
      explodableMeshes,
      pinElements,
      meshCount: stats.count,
      camCurrentPos,
      camTargetPos,
      lookCurrentPos,
      lookTargetPos,
      orbitRadius: 148,
      sphericalTheta: 0.45,
      sphericalPhi: 1.02,
      ro: null,
      rafId: null
    };
    rt = rtState;

    const raycaster = new THREE.Raycaster();
    const mouseVec = new THREE.Vector2();
    const dom = renderer.domElement;

    dom.addEventListener("pointerdown", (e) => {
      isDragging = true;
      prevPointer = { x: e.clientX, y: e.clientY };
    });
    window.addEventListener("pointermove", (e) => {
      if (!isDragging || !rt) return;
      const dx = e.clientX - prevPointer.x;
      const dy = e.clientY - prevPointer.y;
      prevPointer = { x: e.clientX, y: e.clientY };
      ui3d.autoOrbit = false;
      rt.sphericalTheta -= dx * 0.0075;
      rt.sphericalPhi = Math.max(0.18, Math.min(1.45, rt.sphericalPhi - dy * 0.0065));
      rt.camTargetPos.x = rt.lookTargetPos.x + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.sin(rt.sphericalTheta);
      rt.camTargetPos.y = rt.lookTargetPos.y + rt.orbitRadius * Math.cos(rt.sphericalPhi);
      rt.camTargetPos.z = rt.lookTargetPos.z + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.cos(rt.sphericalTheta);
    });
    window.addEventListener("pointerup", () => { isDragging = false; });

    dom.addEventListener("wheel", (e) => {
      e.preventDefault();
      if (!rt) return;
      const factor = e.deltaY > 0 ? 1.1 : 0.9;
      rt.orbitRadius = Math.max(22, Math.min(250, rt.orbitRadius * factor));
      rt.camTargetPos.x = rt.lookTargetPos.x + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.sin(rt.sphericalTheta);
      rt.camTargetPos.y = rt.lookTargetPos.y + rt.orbitRadius * Math.cos(rt.sphericalPhi);
      rt.camTargetPos.z = rt.lookTargetPos.z + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.cos(rt.sphericalTheta);
    }, { passive: false });

    dom.addEventListener("click", (e) => {
      if (!rt) return;
      const rect = dom.getBoundingClientRect();
      mouseVec.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseVec.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouseVec, rt.camera);
      const hits = raycaster.intersectObjects(rt.fcRootGroup.children, true);
      if (hits.length > 0) {
        let hit = hits[0].object;
        while (hit && (!hit.userData || !hit.userData.zoneId) && hit.parent) hit = hit.parent;
        if (hit && hit.userData && hit.userData.zoneId) {
          const btn = document.querySelector(`[data-action="fc3d-focus-zone"][data-zone="${hit.userData.zoneId}"]`);
          if (btn) btn.click();
        }
      }
    });

    const ro = new ResizeObserver(() => {
      if (!container.isConnected || !rt) return;
      const nw = Math.max(300, container.clientWidth);
      const nh = Math.max(300, container.clientHeight);
      rt.camera.aspect = nw / nh;
      rt.camera.updateProjectionMatrix();
      rt.renderer.setSize(nw, nh);
    });
    ro.observe(container);
    rt.ro = ro;

    applyLightingPreset();
    updateDissectionVisuals();

    // Respect current zone camera target on re-mount
    const zCur = FORBIDDEN_CITY_ZONES.find((z) => z.id === ui3d.activeZoneId);
    if (zCur && !ui3d.autoOrbit) {
      rt.camCurrentPos.set(zCur.camPos[0], zCur.camPos[1], zCur.camPos[2]);
      rt.camTargetPos.copy(rt.camCurrentPos);
      rt.lookCurrentPos.set(zCur.lookAt[0], zCur.lookAt[1], zCur.lookAt[2]);
      rt.lookTargetPos.copy(rt.lookCurrentPos);
    }

    function animate() {
      if (!rt || !container.isConnected) return;
      rt.rafId = requestAnimationFrame(animate);
      if (ui3d.autoOrbit && !isDragging) {
        rt.sphericalTheta += 0.002;
        rt.camTargetPos.x = rt.lookTargetPos.x + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.sin(rt.sphericalTheta);
        rt.camTargetPos.y = rt.lookTargetPos.y + rt.orbitRadius * Math.cos(rt.sphericalPhi);
        rt.camTargetPos.z = rt.lookTargetPos.z + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.cos(rt.sphericalTheta);
      }
      rt.camCurrentPos.lerp(rt.camTargetPos, 0.08);
      rt.lookCurrentPos.lerp(rt.lookTargetPos, 0.08);
      rt.camera.position.copy(rt.camCurrentPos);
      rt.camera.lookAt(rt.lookCurrentPos);
      updatePinPositions(container);
      rt.renderer.render(rt.scene, rt.camera);
    }
    animate();
  }

  // --------------------------------------------------------------------------
  // BILINGUAL (VI / EN) COMPONENT MARKUP RENDERERS
  // --------------------------------------------------------------------------
  function renderStageHudHtml(en) {
    const zone = FORBIDDEN_CITY_ZONES.find((z) => z.id === ui3d.activeZoneId) || FORBIDDEN_CITY_ZONES[0];
    return `
      <div style="font-size:0.68rem;font-weight:800;letter-spacing:0.08em;color:#D7BA81;text-transform:uppercase;">
        ${zone.code} · <span class="hanzi">${zone.hanzi}</span>
      </div>
      <div style="font-family:var(--font-editorial);font-size:1.05rem;font-weight:700;margin:0.15rem 0 0.25rem;color:#FFFFFF;">
        ${en ? zone.nameEn : zone.nameVi}
      </div>
      <div style="font-size:0.75rem;color:#D7BA81;margin-bottom:0.35rem;">
        ${en ? zone.areaOrScaleEn : zone.areaOrScaleVi}
      </div>
      <p style="margin:0 0 0.45rem;font-size:0.8rem;line-height:1.48;color:#E5E0D7;">
        ${en ? zone.detailEn : zone.detailVi}
      </p>
      <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
        ${zone.vocab ? `
          <button type="button" class="fc3d-pill" style="background:#9E2A2B;border-color:#D7BA81;" data-action="fc3d-save-vocab" data-zone="${zone.id}">
            + ${en ? "Save Term to Notebook" : "Lưu Thuật ngữ vào Sổ tay"}
          </button>
        ` : ""}
        <a href="${zone.sourceUrl}" target="_blank" rel="noopener noreferrer" class="fc3d-pill" style="text-decoration:none;">
          ${en ? "Palace Source ↗" : "Tư liệu Gốc ↗"}
        </a>
      </div>
    `;
  }

  function renderStageMarkup(lang, tall) {
    const en = lang === "en";
    const canvasId = tall ? "fc3d-canvas-monograph" : "fc3d-canvas-home";
    const pinsId = tall ? "fc3d-pins-monograph" : "fc3d-pins-home";
    const lightLabel = ui3d.lightingPreset === 0
      ? (en ? "☀️ Day Daylight" : "☀️ Ban Ngày")
      : ui3d.lightingPreset === 1
      ? (en ? "🌇 Golden Hour" : "🌇 Hoàng Hôn")
      : (en ? "🌙 Night Blueprint" : "🌙 Sa bàn Đêm");

    return `
      <div class="fc3d-stage-shell" data-fc3d-mount="${canvasId}" data-fc3d-pins="${pinsId}">
        <div class="fc3d-topbar">
          <div class="fc3d-pill-group">
            <span class="fc3d-pill active" style="cursor:default;">
              ${en ? "Forbidden City · 紫禁城 (960×750m · High Detail)" : "Tử Cấm Thành · 紫禁城 (960×750m · Chi tiết cao)"}
            </span>
          </div>
          <div class="fc3d-pill-group">
            <button type="button" class="fc3d-pill ${ui3d.dissectionState === "plan" ? "active" : ""}" data-action="fc3d-set-state" data-state="plan">
              ${en ? "● Statute (9,999 Bays)" : "● Quy chế (9.999 Gian)"}
            </button>
            <button type="button" class="fc3d-pill ${ui3d.dissectionState === "actual" ? "active" : ""}" data-action="fc3d-set-state" data-state="actual">
              ${en ? "▲ Reality (8,886 & Shift)" : "▲ Thực tế (8.886 & Dịch chuyển)"}
            </button>
            <button type="button" class="fc3d-pill ${ui3d.dissectionState === "xray" ? "active" : ""}" data-action="fc3d-set-state" data-state="xray">
              ${en ? "❖ X-Ray Dougong" : "❖ Bóc tách X-Ray Đấu Củng"}
            </button>
          </div>
        </div>

        <div class="fc3d-topbar" style="background:#141210;padding:0.45rem 1rem;border-bottom:1px solid rgba(242,239,233,0.12);">
          <div class="fc3d-pill-group">
            <button type="button" class="fc3d-pill ${ui3d.autoOrbit ? "active" : ""}" data-action="fc3d-toggle-orbit">
              ${ui3d.autoOrbit ? (en ? "⟳ Orbit: ON" : "⟳ Tự Xoay: BẬT") : (en ? "⟳ Orbit: OFF" : "⟳ Tự Xoay: TẮT")}
            </button>
            <button type="button" class="fc3d-pill ${ui3d.showPins ? "active" : ""}" data-action="fc3d-toggle-pins">
              ${ui3d.showPins ? (en ? "📍 3D Pins: ON" : "📍 Nhãn 3D: BẬT") : (en ? "📍 3D Pins: OFF" : "📍 Nhãn 3D: TẮT")}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cycle-light">${lightLabel}</button>
          </div>
          <div class="fc3d-pill-group">
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="closeup">
              ${en ? "Taihedian & Dougong" : "Cận cảnh Thái Hòa & Đấu Củng"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="south">
              ${en ? "Meridian Gate" : "Cổng Ngọ Môn"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="iso">
              ${en ? "Isometric" : "Phối cảnh"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="top">
              ${en ? "Top Plan" : "Trục đứng"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-zoom" data-dir="in" title="Zoom In">+</button>
            <button type="button" class="fc3d-pill" data-action="fc3d-zoom" data-dir="out" title="Zoom Out">−</button>
          </div>
        </div>

        <div class="fc3d-canvas-wrap ${tall ? "fc3d-canvas-tall" : ""}">
          <div id="${canvasId}" style="width:100%;height:100%;"></div>
          <div id="${pinsId}" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5;"></div>
          <div class="fc3d-overlay-hud">
            ${renderStageHudHtml(en)}
          </div>
        </div>

        <div class="fc3d-xray-bar">
          <label for="fc3d-explode-${tall ? "m" : "h"}" style="font-weight:700;color:#D7BA81;">
            ${en ? `Exploded Roof Reveal (${ui3d.explodePercent}%)` : `Thanh Bóc tách Mái Lưu Ly & Đấu Củng (${ui3d.explodePercent}%)`}
          </label>
          <input id="fc3d-explode-${tall ? "m" : "h"}" type="range" min="0" max="100" value="${ui3d.explodePercent}" data-action="fc3d-explode" style="flex:1;min-width:150px;accent-color:#9E2A2B;" />
          <span style="font-size:0.75rem;color:#B9B2A8;">
            ${en ? "Drag to rotate 360° · Wheel zoom · Click 3D pins" : "Kéo xoay 360° · Cuộn để Zoom · Click nhãn 3D hoặc mesh"}
          </span>
        </div>

        <div class="fc3d-hotspots-strip" role="tablist" aria-label="${en ? "10 Forbidden City Zones" : "10 Phân khu Tử Cấm Thành"}">
          ${FORBIDDEN_CITY_ZONES.map((z) => `
            <button type="button" class="fc3d-pill ${ui3d.activeZoneId === z.id ? "active" : ""}" data-action="fc3d-focus-zone" data-zone="${z.id}">
              ${z.id} · ${(en ? z.nameEn : z.nameVi).split("(")[0].trim()}
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function syncStageUiInPlace() {
    const shell = document.querySelector(".fc3d-stage-shell");
    if (!shell) return false;
    const en = ((window.CCE_STORE && window.CCE_STORE.getState().uiLang) || "vi") === "en";
    shell.querySelectorAll('[data-action="fc3d-set-state"]').forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-state") === ui3d.dissectionState);
    });
    document.querySelectorAll('[data-action="fc3d-focus-zone"]').forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-zone") === ui3d.activeZoneId);
    });
    document.querySelectorAll('[data-action="fc3d-select-chapter"]').forEach((btn) => {
      btn.classList.toggle("active", Number(btn.getAttribute("data-idx")) === ui3d.activeChapterIdx);
    });
    const orbitBtn = shell.querySelector('[data-action="fc3d-toggle-orbit"]');
    if (orbitBtn) {
      orbitBtn.classList.toggle("active", ui3d.autoOrbit);
      orbitBtn.textContent = ui3d.autoOrbit ? (en ? "⟳ Orbit: ON" : "⟳ Tự Xoay: BẬT") : (en ? "⟳ Orbit: OFF" : "⟳ Tự Xoay: TẮT");
    }
    const pinsBtn = shell.querySelector('[data-action="fc3d-toggle-pins"]');
    if (pinsBtn) {
      pinsBtn.classList.toggle("active", ui3d.showPins);
      pinsBtn.textContent = ui3d.showPins ? (en ? "📍 3D Pins: ON" : "📍 Nhãn 3D: BẬT") : (en ? "📍 3D Pins: OFF" : "📍 Nhãn 3D: TẮT");
    }
    const lightBtn = shell.querySelector('[data-action="fc3d-cycle-light"]');
    if (lightBtn) {
      lightBtn.textContent = ui3d.lightingPreset === 0
        ? (en ? "☀️ Day Daylight" : "☀️ Ban Ngày")
        : ui3d.lightingPreset === 1
        ? (en ? "🌇 Golden Hour" : "🌇 Hoàng Hôn")
        : (en ? "🌙 Night Blueprint" : "🌙 Sa bàn Đêm");
    }
    const slider = shell.querySelector('[data-action="fc3d-explode"]');
    if (slider) slider.value = String(ui3d.explodePercent);
    const sliderLbl = shell.querySelector('.fc3d-xray-bar label');
    if (sliderLbl) {
      sliderLbl.textContent = en ? `Exploded Roof Reveal (${ui3d.explodePercent}%)` : `Thanh Bóc tách Mái Lưu Ly & Đấu Củng (${ui3d.explodePercent}%)`;
    }
    const hud = shell.querySelector(".fc3d-overlay-hud");
    if (hud) hud.innerHTML = renderStageHudHtml(en);
    return true;
  }

  function renderHomeSection(lang) {
    const en = lang === "en";
    return `
      <section class="fc3d-section" id="home-3d-emblem" aria-label="${en ? "Forbidden City 3D Emblem Showcase" : "Biểu tượng Kiến trúc 3D Tử Cấm Thành"}">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <div class="ed-meta-line" style="color:var(--accent-cinnabar);margin-bottom:0.25rem;">
                ${en ? "CENTRAL ARCHITECTURAL EMBLEM · ZIJINCHENG (960M × 750M)" : "BIỂU TƯỢNG KIẾN TRÚC TRUNG TÂM · TỬ CẤM THÀNH (紫禁城) 960M × 750M"}
              </div>
              <h2 class="ed-h2">${en ? "Interactive 3D Forbidden City Dissection & East Asian Axis" : "Giải phẫu 3D Tử Cấm Thành (500+ Chi tiết): Đấu Củng, Trục Đế Vương & Đối Sánh Cố Đô Huế"}</h2>
              <p style="margin:0.35rem 0 0;color:var(--text-secondary);max-width:74ch;font-size:0.93rem;">
                ${en
                  ? "Inspect curved double-eave roofs, 10 ridge beasts, 3-step Dougong brackets, Nanmu pillars, triple white marble Xumizuo terraces, and X-Ray interior revelations compared alongside Hue Imperial Citadel."
                  : "Mô hình Three.js dựng chi tiết mái Trọng Diêm Vũ Điện cong vút, Li Vẫn, 10 thú nóc, Đấu Củng 3 tầng, cột Kim ti Nam mộc, tam đài Hán Bạch Ngọc 1.142 đầu rồng thoát nước, tảng đá 250 tấn, 12 Đông–Tây Lục Cung và Giác Lâu 72 bờ nóc."}
              </p>
            </div>
            <button type="button" class="ed-btn-primary" data-action="open-article" data-id="forbidden-city-3d-dissection">
              ${en ? "Open Full 7-Chapter 3D Treatise →" : "Mở Chuyên luận Giải phẫu 3D Đầy đủ →"}
            </button>
          </div>
          ${renderStageMarkup(lang, false)}
        </div>
      </section>
    `;
  }

  function renderMonographPage(lang) {
    const en = lang === "en";
    const scaleSet = MULTISCALE_TABLES[ui3d.activeTableKey] || MULTISCALE_TABLES.fc;
    const filteredTimeline = ui3d.activeTimelinePhase === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.phase === ui3d.activeTimelinePhase);

    return `
      <div style="margin:1.25rem 0 1.75rem;">
        ${renderStageMarkup(lang, true)}
      </div>

      <!-- 7-Chapter Camera Scrollytelling Tour -->
      <h3 style="font-family:var(--font-editorial);margin:1.75rem 0 0.75rem;">
        ${en ? "Seven-Chapter Camera Scrollytelling Dissection" : "Chuyên luận Giải phẫu 7 Chương Dẫn hướng Camera 3D"}
      </h3>
      <div class="fc3d-monograph-grid">
        <div>
          ${SCROLLY_CHAPTERS.map((ch, idx) => `
            <button type="button" class="fc3d-chapter-card ${ui3d.activeChapterIdx === idx ? "active" : ""}" data-action="fc3d-select-chapter" data-idx="${idx}">
              <div style="display:flex;justify-content:space-between;font-size:0.7rem;font-weight:800;letter-spacing:0.08em;color:var(--accent-cinnabar);text-transform:uppercase;">
                <span>${en ? `CHAPTER ${ch.step}` : `CHƯƠNG ${ch.step}`}</span>
                <span>${en ? ch.tagEn : ch.tagVi}</span>
              </div>
              <div style="font-family:var(--font-editorial);font-size:1.12rem;font-weight:700;margin:0.25rem 0 0.35rem;color:var(--ink-primary);">
                ${en ? ch.titleEn : ch.titleVi}
              </div>
              <div style="font-size:0.86rem;line-height:1.58;color:var(--text-secondary);">
                ${en ? ch.bodyEn : ch.bodyVi}
              </div>
              <div style="margin-top:0.55rem;padding-top:0.45rem;border-top:1px solid var(--hairline);font-size:0.8rem;color:var(--accent-jade);">
                ${en ? ch.vnLensEn : ch.vnLensVi}
              </div>
            </button>
          `).join("")}
        </div>

        <aside style="display:flex;flex-direction:column;gap:1.15rem;">
          <div style="padding:1.15rem;border:1px solid var(--hairline);background:var(--bg-surface);">
            <div style="font-size:0.7rem;font-weight:800;letter-spacing:0.08em;color:var(--accent-cinnabar);margin-bottom:0.45rem;">
              ${en ? "MULTI-SCALE QUANTITATIVE DISSECTION" : "BẢNG ĐỐI SÁNH ĐA THANG ĐO"}
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:0.35rem;margin-bottom:0.85rem;">
              <button type="button" class="filter-pill ${ui3d.activeTableKey === "fc" ? "active" : ""}" data-action="fc3d-set-dataset" data-dataset="fc">
                ${en ? "A. Forbidden City" : "A. Tử Cấm Thành"}
              </button>
              <button type="button" class="filter-pill ${ui3d.activeTableKey === "hue" ? "active" : ""}" data-action="fc3d-set-dataset" data-dataset="hue">
                ${en ? "B. vs Hue Citadel" : "B. vs Đại Nội Huế"}
              </button>
              <button type="button" class="filter-pill ${ui3d.activeTableKey === "timber" ? "active" : ""}" data-action="fc3d-set-dataset" data-dataset="timber">
                ${en ? "C. Timber & Stone" : "C. Kết cấu Gỗ & Đá"}
              </button>
            </div>
            ${scaleSet.rows.map((r) => {
              const maxV = Math.max(r.val1, r.val2, 0.001);
              const pct1 = Math.max(5, Math.round((r.val1 / maxV) * 100));
              const pct2 = r.val2 === 0 ? 0 : Math.max(5, Math.round((r.val2 / maxV) * 100));
              return `
                <div class="fc3d-bar-row" style="padding-bottom:0.65rem;border-bottom:1px solid var(--hairline);">
                  <div style="font-weight:700;font-size:0.84rem;margin-bottom:0.2rem;">${en ? r.metricEn : r.metricVi}</div>
                  <div style="font-size:0.75rem;color:var(--accent-jade);font-weight:600;">● ${en ? r.label1En : r.label1Vi}</div>
                  <div class="fc3d-bar-track" style="margin:0.15rem 0 0.35rem;"><div class="fc3d-bar-fill" style="width:${pct1}%;background:var(--accent-jade);"></div></div>
                  <div style="font-size:0.75rem;color:var(--accent-cinnabar);font-weight:600;">▲ ${en ? r.label2En : r.label2Vi}</div>
                  <div class="fc3d-bar-track" style="margin:0.15rem 0 0.25rem;"><div class="fc3d-bar-fill" style="width:${pct2}%;background:var(--accent-cinnabar);"></div></div>
                  <div style="font-size:0.73rem;color:var(--text-muted);">${en ? r.noteEn : r.noteVi}</div>
                </div>
              `;
            }).join("")}
          </div>
        </aside>
      </div>

      <!-- 10-Zone Spatial Grid & Sino-Vietnamese Comparison -->
      <div style="margin-top:2rem;padding:1.25rem;border:1px solid var(--hairline);background:var(--bg-surface);">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:1rem;">
          <div>
            <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:var(--accent-cinnabar);">
              ${en ? "AXIAL SPATIAL ARCHITECTURE · 10 CORE INDEXED ZONES (001–010)" : "CẤU TRÚC KHÔNG GIAN TRỤC CHÍNH · 10 PHÂN KHU HẠT NHÂN (001–010)"}
            </div>
            <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);">
              ${en ? "Forbidden City 10 Palatial Zones ⇄ Hue Imperial Citadel Equivalents" : "Đối chiếu 10 Phân khu Tử Cấm Thành ⇄ Đại Nội Kinh Thành Huế"}
            </h3>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:0.65rem;">
          ${FORBIDDEN_CITY_ZONES.map((z) => `
            <button type="button" class="fc3d-chapter-card ${ui3d.activeZoneId === z.id ? "active" : ""}" style="margin:0;" data-action="fc3d-focus-zone" data-zone="${z.id}">
              <div style="font-size:0.7rem;font-weight:800;color:var(--accent-cinnabar);">${z.code}</div>
              <div style="font-weight:700;font-size:0.9rem;margin:0.15rem 0;">${en ? z.nameEn : z.nameVi}</div>
              <div class="hanzi" style="font-size:0.78rem;color:var(--text-muted);">${z.hanzi}</div>
              <div style="font-size:0.75rem;margin-top:0.35rem;color:var(--text-secondary);">⇄ ${en ? z.hueEquivalentEn : z.hueEquivalentVi}</div>
            </button>`).join("")}
        </div>
      </div>

      <!-- 3-Phase Historical Chronology (1406-2026) -->
      <div style="margin-top:2rem;">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
          <h3 style="margin:0;font-family:var(--font-editorial);">
            ${en ? "620-Year Historical Chronology (1406–2026)" : "Dòng Thời Gian Ba Giai Đoạn Kiến Tạo & Số Hóa (1406–2026)"}
          </h3>
          <div style="display:flex;gap:0.35rem;flex-wrap:wrap;">
            <button type="button" class="filter-pill ${ui3d.activeTimelinePhase === "all" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="all">${en ? "All (10)" : "Tất cả (10 mốc)"}</button>
            <button type="button" class="filter-pill ${ui3d.activeTimelinePhase === "P1" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P1">${en ? "Phase 1 · Ming" : "GĐ1 · Minh"}</button>
            <button type="button" class="filter-pill ${ui3d.activeTimelinePhase === "P2" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P2">${en ? "Phase 2 · Qing" : "GĐ2 · Thanh"}</button>
            <button type="button" class="filter-pill ${ui3d.activeTimelinePhase === "P3" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P3">${en ? "Phase 3 · 1925–2026" : "GĐ3 · Bảo tàng & 3D"}</button>
          </div>
        </div>
        <div class="grid grid-2">
          ${filteredTimeline.map((ev) => `
            <div style="padding:1rem;border:1px solid var(--hairline);border-top:2.5px solid var(--accent-cinnabar);background:var(--bg-paper);">
              <div style="display:flex;justify-content:space-between;font-size:0.72rem;font-weight:800;margin-bottom:0.25rem;">
                <span>${ev.year}</span>
                <span style="color:var(--accent-cinnabar);">${en ? ev.badgeEn : ev.badgeVi}</span>
              </div>
              <h4 style="margin:0 0 0.35rem;font-size:1rem;">${en ? ev.titleEn : ev.titleVi}</h4>
              <p style="margin:0;font-size:0.84rem;line-height:1.56;color:var(--text-secondary);">${en ? ev.descEn : ev.descVi}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }

  function handleAction(action, target, Store, showToast, rerender) {
    if (action === "fc3d-set-state") {
      ui3d.dissectionState = target.getAttribute("data-state") || "plan";
      ui3d.explodePercent = ui3d.dissectionState === "xray" ? 82 : 0;
      updateDissectionVisuals();
      if (!syncStageUiInPlace()) rerender();
      return true;
    }
    if (action === "fc3d-toggle-orbit") {
      ui3d.autoOrbit = !ui3d.autoOrbit;
      if (!syncStageUiInPlace()) rerender();
      return true;
    }
    if (action === "fc3d-toggle-pins") {
      ui3d.showPins = !ui3d.showPins;
      if (!syncStageUiInPlace()) rerender();
      return true;
    }
    if (action === "fc3d-cycle-light") {
      ui3d.lightingPreset = (ui3d.lightingPreset + 1) % 3;
      applyLightingPreset();
      if (!syncStageUiInPlace()) rerender();
      return true;
    }
    if (action === "fc3d-cam-preset") {
      const p = target.getAttribute("data-preset");
      if (p === "closeup") {
        ui3d.activeZoneId = "003";
        flyCamera([22, 18, 28], [0, 11, 15]);
      } else if (p === "south") {
        ui3d.activeZoneId = "001";
        flyCamera([18, 22, 92], [0, 6, 58]);
      } else if (p === "iso") {
        flyCamera([68, 72, 112], [0, 4, -8]);
      } else if (p === "top") {
        flyCamera([0, 165, 8], [0, 0, 0]);
      }
      updateDissectionVisuals();
      if (!syncStageUiInPlace()) rerender();
      return true;
    }
    if (action === "fc3d-zoom" && rt) {
      const dir = target.getAttribute("data-dir");
      const factor = dir === "in" ? 0.82 : 1.2;
      rt.orbitRadius = Math.max(22, Math.min(240, rt.orbitRadius * factor));
      rt.camTargetPos.x = rt.lookTargetPos.x + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.sin(rt.sphericalTheta);
      rt.camTargetPos.y = rt.lookTargetPos.y + rt.orbitRadius * Math.cos(rt.sphericalPhi);
      rt.camTargetPos.z = rt.lookTargetPos.z + rt.orbitRadius * Math.sin(rt.sphericalPhi) * Math.cos(rt.sphericalTheta);
      return true;
    }
    if (action === "fc3d-explode") {
      ui3d.explodePercent = Number(target.value || 0);
      if (ui3d.explodePercent > 15 && ui3d.dissectionState !== "xray") ui3d.dissectionState = "xray";
      updateDissectionVisuals();
      syncStageUiInPlace();
      return true;
    }
    if (action === "fc3d-focus-zone") {
      const zid = target.getAttribute("data-zone");
      const z = FORBIDDEN_CITY_ZONES.find((item) => item.id === zid);
      if (z) {
        ui3d.activeZoneId = z.id;
        ui3d.autoOrbit = false;
        flyCamera(z.camPos, z.lookAt);
        updateDissectionVisuals();
        if (!syncStageUiInPlace()) rerender();
      }
      return true;
    }
    if (action === "fc3d-select-chapter") {
      const idx = Number(target.getAttribute("data-idx") || 0);
      const ch = SCROLLY_CHAPTERS[idx];
      if (ch) {
        ui3d.activeChapterIdx = idx;
        ui3d.dissectionState = ch.stateMode;
        ui3d.explodePercent = ch.stateMode === "xray" ? 82 : 0;
        ui3d.activeZoneId = ch.zoneId;
        ui3d.autoOrbit = false;
        flyCamera(ch.camPos, ch.lookAt);
        updateDissectionVisuals();
        if (!syncStageUiInPlace()) rerender();
      }
      return true;
    }
    if (action === "fc3d-set-dataset") {
      ui3d.activeTableKey = target.getAttribute("data-dataset") || "fc";
      rerender();
      return true;
    }
    if (action === "fc3d-set-phase") {
      ui3d.activeTimelinePhase = target.getAttribute("data-phase") || "all";
      rerender();
      return true;
    }
    if (action === "fc3d-save-vocab") {
      const zid = target.getAttribute("data-zone");
      const z = FORBIDDEN_CITY_ZONES.find((item) => item.id === zid);
      if (z && z.vocab && Store && Store.addVocabNotebookEntry) {
        Store.addVocabNotebookEntry({
          term: z.vocab.term,
          pinyin: z.vocab.pinyin,
          hanViet: z.vocab.hanViet,
          meaning: z.vocab.meaning,
          sourceSentence: z.detailVi,
          articleId: "forbidden-city-3d-dissection",
          articleTitle: "Giải phẫu 3D Tử Cấm Thành (紫禁城): Đấu Củng & Trục Đế Vương",
          note: "Lưu từ mô hình 3D kiến trúc"
        });
        if (showToast) showToast(`Đã lưu "${z.vocab.term}" vào Sổ tay Từ vựng & Ghi chú!`);
      }
      return true;
    }
    return false;
  }

  function initMountedCanvasIfAny() {
    const host = document.querySelector("[data-fc3d-mount]");
    if (host) {
      const id = host.getAttribute("data-fc3d-mount");
      const pinsId = host.getAttribute("data-fc3d-pins");
      const curLang = (window.CCE_STORE && window.CCE_STORE.getState().uiLang) || "vi";
      const targetEl = id ? document.getElementById(id) : null;
      if (targetEl) {
        if (rt && rt.container === targetEl && targetEl.querySelector("canvas") && rt.lang === curLang) {
          return;
        }
        mountCanvas(id, pinsId);
      }
    }
  }

  return {
    FORBIDDEN_CITY_ZONES,
    SCROLLY_CHAPTERS,
    renderHomeSection,
    renderMonographPage,
    handleAction,
    initMountedCanvasIfAny
  };
})();
