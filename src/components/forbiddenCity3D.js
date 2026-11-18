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
    lightingPreset: 0, // 0: Day Studio, 1: Sunset, 2: Blueprint Night
    activeChapterIdx: 0,
    activeZoneId: "001",
    activeJumpSec: "fc3d-sec-01",
    activeTableKey: "fc",
    activeTimelinePhase: "all" // "all" | "P1" | "P2" | "P3"
  };

  let rt = null; // Active Three.js runtime for safe SPA unmount/remount
  let scrollPauseUntil = 0;

  // --------------------------------------------------------------------------
  // GROUNDED BILINGUAL (VI / EN / ZH) ARCHITECTURAL DATASETS
  // --------------------------------------------------------------------------
  const FORBIDDEN_CITY_ZONES = [
    {
      id: "001",
      code: "ZONE 001",
      nameVi: "Ngọ Môn (Cổng Chính Phía Nam)",
      nameEn: "Meridian Gate (South Portal)",
      hanzi: "午门 · Wǔmén",
      areaOrScaleVi: "Cao 37,95 m · Ngũ Phượng Lâu chữ U",
      areaOrScaleEn: "Height 37.95 m · U-Shaped Five Phoenix Towers",
      hueEquivalentVi: "Ngọ Môn Huế (1833, 5 lối đi & Lầu Ngũ Phượng 100 cột lim)",
      hueEquivalentEn: "Hue Meridian Gate (1833, 5 Portals & Five-Phoenix Pavilion)",
      planMetricVi: "3 cửa chính + 2 cửa dịch phân cấp Nghi lễ tuyệt đối",
      planMetricEn: "3 Axial Portals + 2 Side Corridors by Court Rank",
      actualMetricVi: "Tường đài gạch đỏ cao 12 m tạo hiệu ứng vây hãm thị giác",
      actualMetricEn: "12 m Brick Bastion Creating Visual Compressive Authority",
      summaryVi: "Cổng lớn nhất phía Nam Tử Cấm Thành (1420), gồm tổ hợp Ngũ Phượng Lâu 5 mái chữ U cao 37,95 m trên đài tường đỏ cao 12 m.",
      summaryEn: "Southern ceremonial entrance built in 1420: a 12 m crimson U-shaped bastion topped by five connected pavilions rising 37.95 m.",
      detailVi: "Lầu chính Ngọ Môn dài 60,05 m, rộng 25 m (9×5 gian), hai cánh nhô về Nam tạo quảng trường uy áp. Cửa giữa chỉ dành cho Hoàng đế (ngoại lệ Hoàng hậu ngày đại hôn và Tam Khôi sau thi Đình). Đối sánh trực tiếp với Ngọ Môn Đại Nội Huế xây dựng năm 1833 thời Minh Mạng.",
      detailEn: "Spanning 60.05 m × 25 m (9×5 bays), two projecting flanking wings embrace arriving envoys. Its Vietnam parallel, Hue's Ngo Mon (1833), adapts the U-shaped five-portal base with lighter ironwood timber frames and polychrome enamel roofs.",
      vocab: { term: "午门 · Ngọ Môn", pinyin: "Wǔmén", hanViet: "Ngọ Môn", meaning: "U-shaped Five-Phoenix Meridian Gate guarding the southern approach" },
      sourceUrl: "https://artsandculture.google.com/story/meridian-gate-the-entrance-to-the-forbidden-city-the-palace-museum/NQUxZvrUFVtvAg?hl=en",
      camPos: [0, 29, 108],
      lookAt: [0, 8, 66],
      pinPos: [0, 18, 70]
    },
    {
      id: "002",
      code: "ZONE 002",
      nameVi: "Nội Kim Thủy Hà, Quảng Trường Thái Hòa & Móng Ngầm 15 Lớp",
      nameEn: "Inner Golden Water Canal & 15-Layer Cutaway Courtyard",
      hanzi: "内金水桥 · 广场 · 十五层地基",
      areaOrScaleVi: "Sân 30.000 m² không bóng cây · Nền 15 lớp gạch Kim chuyên",
      areaOrScaleEn: "Treeless 30,000 m² Plaza · 15-Stratum Brick Foundation",
      hueEquivalentVi: "Cầu Trung Đạo bắc qua Hồ Thái Dịch xanh mát (Đại Nội Huế)",
      hueEquivalentEn: "Trung Dao Bridge & Landscaped Thai Dich Lake (Hue)",
      planMetricVi: "5 cầu Hán Bạch Ngọc bắc qua Nội Kim Thủy Hà hình cánh cung",
      planMetricEn: "Five White Marble Bridges Over Bow-Shaped Canal",
      actualMetricVi: "Đào sâu 15 lớp gạch Kim chuyên + đất nện (~3,5–5 m), 0 cây xanh",
      actualMetricEn: "15 Alternating Golden-Brick & Rammed-Earth Strata (~3.5–5 m Depth)",
      summaryVi: "Từ 5 cầu Nội Kim Thủy qua Thái Hòa Môn mở ra sân 30.000 m² lát 15 lớp gạch Kim chuyên xen đất nện hoàn toàn không trồng cây để chống thích khách đào hầm.",
      summaryEn: "Past the five marble bridges opens the stark 30,000 m² plaza engineered atop 15 interlocking courses of Suzhou bricks and rammed earth—kept deliberately treeless for security.",
      detailVi: "Bên góc sân mô hình đã cắt lớp lộ rõ 15 tầng gạch Kim chuyên và đất nện xếp ngang–dọc xen kẽ vừa chịu lún vừa ngăn tuyệt đối thích khách đào hầm hay rễ cây phá móng; khác hẳn cảnh quan Hồ Thái Dịch rợp bóng cây tại Đại Nội Huế.",
      detailEn: "A subsurface corner cutaway in this 3D model reveals all 15 stratified brick and tamped-loam courses engineered to repel tunneling and distribute axial drainage, contrasting sharply with Hue's shaded lakeside gardens.",
      vocab: { term: "内金水桥 · Nội Kim Thủy Kiều", pinyin: "Nèi Jīnshuǐ Qiáo", hanViet: "Nội Kim Thủy Kiều", meaning: "Five white marble bridges over the bow-shaped canal before Taihemen" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-34, 19, 54],
      lookAt: [-16, 2, 34],
      pinPos: [-18, 8, 34]
    },
    {
      id: "003",
      code: "ZONE 003",
      nameVi: "Điện Thái Hòa (Đỉnh Cao Quy Chế & Mộng Đấu Củng)",
      nameEn: "Hall of Supreme Harmony (Canonical Apex & Dougong)",
      hanzi: "太和殿 · 斗拱 (Thái Hòa Điện & Đấu Củng)",
      areaOrScaleVi: "2.377 m² (nhỏ hơn ~50% bản 1420) · Cao 35,05 m gồm Tam Đài 8,13 m",
      areaOrScaleEn: "2,377 m² (~50% Smaller than 1420 Hall) · Total Apex 35.05 m",
      hueEquivalentVi: "Điện Thái Hòa Huế (Trùng thiềm điệp ốc 1.440 m², nền 2,3 m)",
      hueEquivalentEn: "Hue Thai Hoa Hall (Twin-Roof Joinery, 1,440 m²)",
      planMetricVi: "11×5 gian trên trục chính · Mái Trọng diêm Vũ điện & 10 thú nóc",
      planMetricEn: "11×5 Axial Bays · Double-Hipped Glazed Roof & 10 Ridge Beasts",
      actualMetricVi: "72 cột đặt nổi trên đá tảng (0 đinh) · Rỗng quyền lực thường nhật",
      actualMetricEn: "72 Unanchored Nanmu Pillars · Restricted to Grand State Rituals",
      summaryVi: "Tái thiết lần cuối năm 1695 (rộng 64 m × sâu 37 m, nhỏ hơn gần nửa so với bản năm 1420 do cạn gỗ đại thụ); đứng vững qua 300+ trận động đất nhờ Đấu Củng và cột đặt nổi.",
      summaryEn: "Rebuilt in 1695 at 64 × 37 m (nearly half its original 1420 span due to giant Nanmu depletion), surviving 300+ earthquakes thanks to interlocking Dougong brackets and surface plinth columns.",
      detailVi: "Dù ngự trên đài Tam Đài 3 tầng có 1.142 đầu rồng Ly Thủ thoát nước trong 20 phút và chứa 10 linh thú nóc độc nhất, Điện Thái Hòa từ thời Thanh quá rộng và vang lạnh nên chỉ dùng cho lễ Đăng cơ/Vạn thọ; toàn bộ thiết triều chuyển ra Càn Thanh Môn rồi Dưỡng Tâm Điện.",
      detailEn: "Perched atop the triple marble terrace ringed by 1,142 dragon spouts, Taihedian remained an intimidating ritual stage during the Qing—while real administrative power migrated into smaller heated chambers.",
      vocab: { term: "太和殿 · Thái Hòa Điện", pinyin: "Tàihédiàn", hanViet: "Thái Hòa Điện", meaning: "Flagship double-eave hall rebuilt in 1695 atop the triple Xumizuo terrace" },
      sourceUrl: "https://en.wikipedia.org/wiki/Forbidden_City",
      camPos: [28, 22, 34],
      lookAt: [0, 10, 14],
      pinPos: [0, 21, 16]
    },
    {
      id: "004",
      code: "ZONE 004",
      nameVi: "Điện Trung Hòa, Điện Bảo Hòa & Tảng Đá 250 Tấn",
      nameEn: "Central & Preserving Harmony + 250-Ton Dragon Stone",
      hanzi: "中和殿 · 保和殿 · 丹陛大石雕",
      areaOrScaleVi: "Bảo Hòa Điện 9 gian + Tảng đá Vân Long 16,57 m × 3,07 m (250 tấn)",
      areaOrScaleEn: "Baohedian + 16.57 m Carved Dragon Monolith (250 Metric Tons)",
      hueEquivalentVi: "Điện Cần Chánh & Thềm Rồng Đá Thanh Đại Nội Huế",
      hueEquivalentEn: "Can Chanh Hall & Carved Stone Dragon Stairways (Hue)",
      planMetricVi: "Eo đài chữ Thổ · Nơi nghỉ trước Đại triều & tổ chức thi Đình",
      planMetricEn: "Waist of H-Shaped Terrace · Pre-Audience & Palace Exams",
      actualMetricVi: "Kéo đá 250 tấn qua 70 km đường trượt băng nhân tạo (20.000 dân phu)",
      actualMetricEn: "250t Slab Hauled 70 km Across Winter Artificial Ice Road",
      summaryVi: "Từ chóp vuông Điện Trung Hòa tới Điện Bảo Hòa (nơi thi Đình triều Thanh), phía Bắc đặt tảng Vân Long Đại Thạch Điêu nặng 250 tấn kéo từ Phòng Sơn bằng kỹ nghệ đóng băng mặt đường.",
      summaryEn: "Connecting square Zhonghedian to Baohedian (venue for top Jinshi Palace Examinations), backed by the 250-ton Fangshan marble monolith slid across 70 km of frozen well-water.",
      detailVi: "Bài toán logistics thế kỷ XV: không xe bánh gỗ nào chịu nổi khối đá >250 tấn. Minh triều huy động 20.000 dân phu đào giếng cách mỗi 500 m suốt 70 km, dội nước giữa mùa đông âm độ tạo đường trượt băng hoàn thành trong 28 ngày.",
      detailEn: "Faced with transporting a >250-ton slab beyond wheeled-cart limits, Ming engineers dug water wells every 500 m along 70 km to freeze an artificial winter ice track hauled in 28 days.",
      vocab: { term: "云龙大石雕 · Vân Long Thạch Điêu", pinyin: "Yúnlóng Dà Shídiāo", hanViet: "Vân Long Đại Thạch Điêu", meaning: "16.57 m monolithic marble dragon carving behind Hall of Preserving Harmony" },
      sourceUrl: "https://campus-cdhk.oss-cn-hongkong.aliyuncs.com/store_manager/epaper/0/85/25/595790/page.pdf",
      camPos: [24, 21, -28],
      lookAt: [0, 8, -15],
      pinPos: [0, 18, -15]
    },
    {
      id: "005",
      code: "ZONE 005",
      nameVi: "Càn Thanh Môn (Ranh Giới Tiền Triều – Hậu Tẩm)",
      nameEn: "Gate of Heavenly Purity (Outer–Inner Court Boundary)",
      hanzi: "乾清门 · Ranh giới Tiền Triều – Hậu Tẩm",
      areaOrScaleVi: "Tường ngăn Đông–Tây · Nơi Khang Hy thiết triều mỗi sáng",
      areaOrScaleEn: "Dividing Transverse Wall · Kangxi's Early Morning Audience Gate",
      hueEquivalentVi: "Đại Cung Môn (Ranh giới Hoàng thành – Tử Cấm Thành Huế)",
      hueEquivalentEn: "Dai Cung Mon (Border to Hue Forbidden Purple City)",
      planMetricVi: "Vượt qua cửa này là khu Nội Đình cấm nam quan bước vào",
      planMetricEn: "Threshold Separating State Halls from Imperial Private Residences",
      actualMetricVi: "Quân Cơ Xứ ẩn mình ngay cạnh góc Tây Càn Thanh Môn từ 1729",
      actualMetricEn: "Grand Council Clerical Shed Seated Right Outside West Flank (1729)",
      summaryVi: "Tuyến phân định nghiêm ngặt giữa Tiền Triều (công vụ ngoại đình) và Hậu Tẩm (nội đình hoàng tộc); từng là nơi Khang Hy nghe tấu sớ lúc 5 giờ sáng gọi là 'Ngự Môn Thính Chính'.",
      summaryEn: "The fortified architectural divider separating Outer Court bureaucracy from Inner Court family life, famous as Emperor Kangxi's dawn audience gallery.",
      detailVi: "Khi bước qua Càn Thanh Môn, ngay bên phải phía Tây là dãy phòng ngói giản dị của Quân Cơ Xứ được lập năm 1729 để bảo mật tuyệt đối mệnh lệnh quân sự – minh chứng cho tính thực dụng vượt trên hình thức cung đình.",
      detailEn: "Steps west of Qianqingmen sat the humble single-story Grand Council watchhouse created in 1729 for rapid wartime secrecy.",
      vocab: { term: "乾清门 · Càn Thanh Môn", pinyin: "Qiánqīngmén", hanViet: "Càn Thanh Môn", meaning: "Architectural threshold demarcating Outer Court state ritual from Inner Court rule" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-22, 19, -22],
      lookAt: [0, 6, -32],
      pinPos: [0, 12, -32]
    },
    {
      id: "006",
      code: "ZONE 006",
      nameVi: "Càn Thanh Cung & Giao Thái Điện (Trục Nội Đình)",
      nameEn: "Palace of Heavenly Purity & Hall of Union",
      hanzi: "乾清宫 · 交泰殿 (Nội Đình Trung Trục)",
      areaOrScaleVi: "Càn Thanh Cung 1.400 m² · Giao Thái Điện giữ 25 Ngọc Tỷ",
      areaOrScaleEn: "Qianqinggong 1,400 m² · Jiaotaidian 25 Imperial Seals",
      hueEquivalentVi: "Điện Càn Thành (Tẩm cung Vua triều Nguyễn, Đại Nội Huế)",
      hueEquivalentEn: "Can Thanh Palace (Royal Living Sanctuary in Hue Citadel)",
      planMetricVi: "Quy chế là Tẩm cung chính thức của Hoàng đế trên trục giữa",
      planMetricEn: "Designated Primary Imperial Residence on Central Axis",
      actualMetricVi: "Bị bỏ trống cư trú từ 1723; hoành phi 'Chính Đại Quang Minh' giấu mật chiếu",
      actualMetricEn: "Vacated for Daily Living in 1723; Plaque Concealed Secret Will",
      summaryVi: "Càn Thanh Cung cao 20 m, rộng 1.400 m² vốn thiết kế cho Hoàng đế ngự ngủ triều Minh nhưng bị đánh giá quá trống trải, lạnh lẽo và dễ tổn thương.",
      summaryEn: "Built as the Ming monarch's official inner sanctuary, 1,400 m² Qianqinggong felt cavernous and draughty, prompting Yongzheng to relocate daily life west in 1723.",
      detailVi: "Sau hoành phi 'Chính Đại Quang Minh' của Càn Thanh Cung, Ung Chính đặt Hộp Mật Kiến Trữ (giấu tên người kế vị); bên cạnh là Giao Thái Điện hình vuông lưu giữ 25 bảo ấn triều Thanh.",
      detailEn: "Behind Qianqinggong's 'Zhengda Guangming' plaque lay the locked succession box, while adjacent square Jiaotaidian safeguarded 25 Qing dynastic state seals.",
      vocab: { term: "乾清宫 · Càn Thanh Cung", pinyin: "Qiánqīnggōng", hanViet: "Càn Thanh Cung", meaning: "Principal Inner Court sanctuary housing the secret succession edict" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [26, 22, -38],
      lookAt: [0, 7, -45],
      pinPos: [0, 15, -43]
    },
    {
      id: "007",
      code: "ZONE 007",
      nameVi: "Khôn Ninh Cung & Khu Dưỡng Lão Ninh Thọ Cung (Ngọc 1,07 Tấn)",
      nameEn: "Palace of Earthly Tranquility & Ningshougong (1.07t Jade)",
      hanzi: "坤宁宫 · 宁寿宫 · 大禹治水玉山",
      areaOrScaleVi: "Khôn Ninh Cung phòng tân hôn · Ninh Thọ Cung rộng phía Đông",
      areaOrScaleEn: "Kunninggong Nuptial Suite · Eastern Ningshougong Wing",
      hueEquivalentVi: "Cung Khôn Thái & Cung Trường Sanh – Diên Thọ (Huế)",
      hueEquivalentEn: "Khon Thai Palace & Truong Sanh–Dien Tho Retirement Wing",
      planMetricVi: "Tẩm cung Hoàng hậu + 'Tử Cấm Thành thu nhỏ' của Càn Long",
      planMetricEn: "Empress's Residence + Qianlong's Mini Retirement Complex",
      actualMetricVi: "Khôn Ninh Cung thành tế đường Mãn Châu; lưu giữ ngọc điêu 1,07 tấn",
      actualMetricEn: "Adapted for Manchu Shaman Rituals; Houses 1.07-Ton Jade Carving",
      summaryVi: "Khôn Ninh Cung ở cực Bắc Hậu Tam Cung kết hợp khu Ninh Thọ Cung phía Đông (cải tạo 1772 cho Càn Long nghỉ hưu) cùng khối ngọc bích Hòa Điền nặng 1,07 tấn.",
      summaryEn: "Unites Kunninggong (northernmost axial hall converted to shaman rituals with a crimson nuptial chamber) and eastern Ningshougong guarding the 1.07-ton jade boulder.",
      detailVi: "Chính tại Nhạc Thọ Đường cuối dãy Ninh Thọ Cung lưu giữ bức điêu khắc 'Đại Vũ trị thủy đồ' bằng ngọc Hòa Điền nặng hơn 1 tấn chế tác suốt 7 năm.",
      detailEn: "Carved over seven years under Qianlong, the 1.07-ton Hetian jade mountain ('Yu the Great Taming the Floods') remains anchored deep inside Leshou Hall.",
      vocab: { term: "坤宁宫 · Khôn Ninh Cung", pinyin: "Kūnnínggōng", hanViet: "Khôn Ninh Cung", meaning: "Northern axial Empress hall transformed for Manchu rites and royal weddings" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [48, 22, -32],
      lookAt: [32, 6, -42],
      pinPos: [36, 13, -38]
    },
    {
      id: "008",
      code: "ZONE 008",
      nameVi: "Dưỡng Tâm Điện & Quân Cơ Xứ (Tâm Điểm Quyền Lực Thực ~5.000 m²)",
      nameEn: "Yangxindian & Grand Council (True Executive Core ~5,000 m²)",
      hanzi: "养心殿 · 军机处 (Dịch chuyển công năng từ 1723)",
      areaOrScaleVi: "~5.000 m² (14,2% Tam Đại Điện / 0,7% Cố Cung) · Chữ Công (工)",
      areaOrScaleEn: "~5,000 m² (0.7% of Palace Area) · Compact I-Shaped Plan",
      hueEquivalentVi: "Điện Cần Chánh & Viện Cơ Mật (Trung tâm điều hành thực tế triều Nguyễn)",
      hueEquivalentEn: "Kien Trung Hall & Privy Council (Executive Nerve Center in Hue)",
      planMetricVi: "Quy chế gốc chỉ là cung phụ chế tạo đồ dùng phía Tây Nội Đình",
      planMetricEn: "Originally Designed as Auxiliary Service Courtyard West of Axis",
      actualMetricVi: "Từ 1723: 8 đời Hoàng đế Thanh phê tấu chương, điều hành đế chế tại đây",
      actualMetricEn: "Since 1723: Residence & War Room of Eight Late Qing Emperors",
      summaryVi: "ĐIỂM NÓNG CHUYỂN ĐỔI CÔNG NĂNG: Từ 1723 (Ung Chính), quyền lực thực tế rời khỏi trục lễ nghi khổng lồ về cụm ~5.000 m² hình chữ Công (工) sát dãy trực Quân Cơ Xứ.",
      summaryEn: "ARCHITECTURAL FUNCTIONAL SHIFT: Beginning 1723, Qing emperors governed an empire of 400M subjects not from 35,000 m² Outer Halls, but inside this compact ~5,000 m² heated compound.",
      detailVi: "Chuyển sang chế độ '[2] Thực Tế Vận Hành & Khảo Cổ' để thấy toàn bộ Tam Đại Điện & Hậu Tam Cung hóa khung dây mờ trong khi Dưỡng Tâm Điện + Quân Cơ Xứ rực sáng Đỏ Chu Sa (#B8292F) — giống mô hình giải phẫu giữa quy hoạch tượng trưng và thực chất sử dụng.",
      detailEn: "Toggle State [2] Reality View: ceremonial axial halls fade into golden wireframe outlines while Yangxindian and the Grand Council glow solid Cinnabar Red—highlighting spatial functional divergence.",
      vocab: { term: "养心殿 · Dưỡng Tâm Điện", pinyin: "Yǎngxīndiàn", hanViet: "Dưỡng Tâm Điện", meaning: "Compact western palace where 8 Qing emperors ruled after 1723" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [-44, 21, -24],
      lookAt: [-21, 5, -35],
      pinPos: [-22, 12, -35]
    },
    {
      id: "009",
      code: "ZONE 009",
      nameVi: "Đông – Tây Lục Cung, Cửu Long Bích & Mộng Đấu Củng",
      nameEn: "Six East–West Courtyards, Nine-Dragon Screen & Dougong",
      hanzi: "东西六宫 · 九龙壁 · 80M 砖瓦",
      areaOrScaleVi: "12 viện tứ hợp · Cửu Long Bích 270 viên · 80 triệu viên gạch",
      areaOrScaleEn: "12 Walled Quadrangles · 270 Glazed Tiles · 80M Fired Bricks",
      hueEquivalentVi: "Hệ thống Lục Viện Nội Đình Tử Cấm Thành Huế",
      hueEquivalentEn: "Six Inner Courtyard Compounds (Hue Imperial Citadel)",
      planMetricVi: "12 cung viện cân xứng Đông–Tây dùng mộng gỗ không đinh sắt",
      planMetricEn: "Twelve Symmetrical Nail-Free Timber Quadrangles",
      actualMetricVi: "Mảnh gỗ sơn trắng vá bụng rồng thứ 3 trên Cửu Long Bích (1772)",
      actualMetricEn: "Craftsman's Wooden Glaze Replacement on 3rd White Dragon (1772)",
      summaryVi: "12 cung viện đối xứng Đông–Tây sử dụng 80 triệu viên gạch cùng kết cấu mộng gỗ chịu chấn động, kết nối bức Cửu Long Bích 270 phiến gốm lưu ly bên Ninh Thọ Cung.",
      summaryEn: "Twelve enclosed courtyard sanctuaries framed in interlocking earthquake-resistant timber paired with 27 formulas of lime mortar and the 270-tile glazed Nine-Dragon Screen.",
      detailVi: "Chứng minh tư duy tiêu chuẩn hóa module: cột, xà, đấu củng được gia công hàng loạt ngoài công trường dựa trên mô hình giấy gỗ Tạng dạng (样式雷烫样) trước khi lắp dựng.",
      detailEn: "Court architects built intricate layered paper-wood scale mockups ('Yangshi Lei Tangyang') to standardize beam joinery and fire-wall separation across all twelve compounds.",
      vocab: { term: "斗拱 · Đấu Củng", pinyin: "Dǒugǒng", hanViet: "Đấu Củng", meaning: "Interlocking wooden bracket system absorbing roof load and seismic shock without nails" },
      sourceUrl: "https://campus-cdhk.oss-cn-hongkong.aliyuncs.com/store_manager/epaper/0/85/25/595790/page.pdf",
      camPos: [54, 34, -46],
      lookAt: [14, 5, -48],
      pinPos: [-34, 11, -50]
    },
    {
      id: "010",
      code: "ZONE 010",
      nameVi: "Ngự Hoa Viên, Thần Vũ Môn, 4 Giác Lâu 72 Bờ Nóc & Hộ Thành Hà",
      nameEn: "Imperial Garden, Shenwumen, 72-Ridge Towers & 52m Moat",
      hanzi: "御花园 · 神武门 · 角楼 · 护城河",
      areaOrScaleVi: "Vườn 12.000 m² · Tường 10 m · Hào rộng 52 m × sâu 6 m · 308 Vạc đồng",
      areaOrScaleEn: "12,000 m² Garden · 10 m Wall · 52 m Wide Moat · 308 Bronze Vats",
      hueEquivalentVi: "Vườn Cơ Hạ, Cửa Hòa Bình & Hộ Thành Hà 30–50m (Đại Nội Huế)",
      hueEquivalentEn: "Co Ha Garden, Hoa Binh Gate & Perfume River Moat System",
      planMetricVi: "Khâm An Điện, Đôi Tú Sơn, Vạn Xuân Đình & 4 Giác Lâu góc thành",
      planMetricEn: "Kham An Hall, Dui Xiu Shan Rockery & Cruciform Corner Watchtowers",
      actualMetricVi: "308 vạc đồng Môn hải (chữa cháy) + 9 lương 18 trụ 72 bờ nóc Giác Lâu",
      actualMetricEn: "308 Heated Fire Vats + 9-Beam 18-Pillar 72-Ridge Corner Joinery",
      summaryVi: "Khép lại trục 960 m phía Bắc qua khu vườn Đạo gia 12.000 m² tới Thần Vũ Môn, nổi bật với 4 Giác Lâu thập tự '9 lương 18 trụ 72 bờ nóc' soi bóng xuống Hộ Thành Hà rộng 52 m.",
      summaryEn: "Completing the 960m axis via a serene 12,000 m² cypress-shaded retreat flanked by four cruciform corner towers rising above the 52m-wide defensive moat.",
      detailVi: "Đi qua cổng Thần Vũ Môn là lối lên đỉnh Vạn Xuân Đình (đồi Cảnh Sơn) — góc nhìn thực tế toàn cảnh mái lưu ly trùng khít hoàn toàn với phối cảnh Isometric của mô hình WebGL này.",
      detailEn: "Exiting North Gate Shenwumen brings visitors onto Jingshan Hill's Wanchun Pavilion, reproducing this exact 3D isometric sweep back toward Meridian Gate.",
      vocab: { term: "角楼 · Giác Lâu", pinyin: "Jiǎolóu", hanViet: "Giác Lâu", meaning: "9-beam, 18-pillar, 72-ridge cruciform corner watchtowers guarding the 52m moat" },
      sourceUrl: "https://www.idcpc.org.cn/english2023/chinadelights/arts/architecture/202307/t20230727_157790.html",
      camPos: [26, 28, -98],
      lookAt: [0, 6, -70],
      pinPos: [0, 15, -75]
    }
  ];

  const SCROLLY_CHAPTERS = [
    {
      step: "01",
      tagVi: "TOÀN CẢNH · 724.250 M²",
      tagEn: "OVERVIEW · 724,250 M²",
      titleVi: "724.250 m² & Ảo Ảnh 9.999,5 Gian vs. 8.707 Gian Thực Tế",
      titleEn: "724,250 m² Precinct: 9,999.5 Myth vs. 8,707 Surveyed Bays",
      statuteLabelVi: "TRUYỀN THUYẾT & QUY CHẾ",
      statuteLabelEn: "IMPERIAL MYTH / STATUTE",
      statuteValVi: "9.999,5 gian phòng (kém Thiên Đình nửa gian; quy hoạch Tiền Triều Hậu Thị)",
      statuteValEn: "9,999.5 bays (symbolic half-room deferring to Heaven's 10,000)",
      realityLabelVi: "KHẢO SÁT CỐ CUNG (1973)",
      realityLabelEn: "1973 ARCHAEOLOGICAL SURVEY",
      realityValVi: "8.707 gian thực tế (8.886 gian tính cả lầu góc) trong 980 tòa kiến trúc",
      realityValEn: "8,707 verified bays (8,886 incl. corner towers) across 980 structures",
      stateMode: "plan",
      zoneId: "001",
      camPos: [58, 68, 122],
      lookAt: [0, 2, -6],
      bodyVi: "Cuộc tổng kiểm kê thực địa từng gian của học giả Vu Trác Vân và Bảo tàng Cố Cung năm 1973 đã chính thức giải mã con số truyền thuyết 9.999,5 gian: quần thể tường thành 960 m × 750 m bọc hào 52 m thực chất sở hữu 8.707 gian hoàn chỉnh (8.886 gian tính thêm 4 Giác Lâu).",
      bodyEn: "Architect Yu Zhuoyun's meticulous 1973 Palace Museum field survey demystified the 9,999.5-room legend—confirming exactly 8,707 structural bays (8,886 with corner towers) inside the 960 × 750 m moat-ringed rectangle.",
      vnLensVi: "CẢNH BÁO HỒ SƠ HUẾ: Cả Bắc Kinh (72,4 ha) và Hoàng thành Huế (36 ha trong Kinh thành 520 ha) đều tổ chức theo nguyên lý 'Tiền Triều Hậu Tẩm – Tả Tổ Hữu Xã'.",
      vnLensEn: "SINO-VIET HERITAGE: Both Beijing (72.4 ha) and Hue's Imperial Citadel (36 ha) anchor governance on Confucian Front-Court, Rear-Sanctuary axial zoning."
    },
    {
      step: "02",
      tagVi: "CỬA NGÕ · NGỌ MÔN 37,95\u00A0M",
      tagEn: "PORTAL · MERIDIAN GATE 37.95\u00A0M",
      titleVi: "Ngọ Môn (午门) & Nghệ Thuật Uy Áp Thị Giác Hai Cánh Chữ U",
      titleEn: "Meridian Gate: Visual Containment Wings & Five Phoenix Roofs",
      statuteLabelVi: "NHÌN TỪ NGOÀI CỔNG",
      statuteLabelEn: "EXTERIOR IMPRESSION",
      statuteValVi: "Tưởng như cổng thành 1 tầng lầu đơn tuyến đón quan lại vào chầu",
      statuteValEn: "Appears as a singular southern gateway facade from Tiananmen approach",
      realityLabelVi: "CẤU TRÚC THỰC & HUẾ",
      realityLabelEn: "ACTUAL FORM & HUE PARALLEL",
      realityValVi: "Tổ hợp Ngũ Phượng Lâu cao 37,95 m vươn 2 cánh tạo vây hãm · Đối sánh Ngọ Môn Huế (1833)",
      realityValEn: "37.95 m U-shaped U-wing compression · Comparable to Hue Ngọ Môn (1833)",
      stateMode: "plan",
      zoneId: "001",
      camPos: [0, 26, 106],
      lookAt: [0, 8, 66],
      bodyVi: "Ngay khi bước vào vòng ôm của hai cánh cổng Ngọ Môn cao 37,95 m trên nền đài gạch đỏ 12 m, tầm nhìn ngang bị khóa chặt để tạo áp lực tâm lý tuyệt đối trước khi phân luồng 3 cửa (giữa cho Hoàng đế, Đông cho quan văn võ, Tây cho tôn thất).",
      bodyEn: "Stepping inside the 37.95 m U-shaped flanks compresses peripheral vision, enforcing strict axial hierarchy across three arched passages reserved for Monarch, mandarins, and imperial kin.",
      vnLensVi: "ĐỐI SÁNH CỐ ĐÔ HUẾ: Ngọ Môn Huế (1833) kế thừa đài chữ U 5 cửa nhưng dựng Lầu Ngũ Phượng bằng 100 cột lim và ngói lưu ly vàng – xanh thanh thoát giữa thiên nhiên.",
      vnLensEn: "HUE PARALLEL: Built under Emperor Minh Mạng (1833), Hue's Meridian Gate adapts the five-passage U-platform with lighter 100-column ironwood upper galleries."
    },
    {
      step: "03",
      tagVi: "NGẦM 15 LỚP · 0 BÓNG CÂY",
      tagEn: "SUBSURFACE · 15 STRATA & TREELESS",
      titleVi: "Quảng Trường Thái Hòa & Mặt Cắt Ngầm 15 Lớp Không Một Bóng Cây",
      titleEn: "Taihedian Forecourt: 15 Subsurface Courses & Zero-Tree Security",
      statuteLabelVi: "BỀ MẶT SÂN ĐÁ BÌNH THƯỜNG",
      statuteLabelEn: "SURFACE IMPRESSION",
      statuteValVi: "Tưởng chỉ lát 1–2 lớp gạch đá vôi trên mặt sân 30.000 m²",
      statuteValEn: "Appears as simple flat flagstones across a 30,000 m² open plaza",
      realityLabelVi: "CẮT LỚP MÓNG THỰC ĐỊA",
      realityLabelEn: "EXCAVATED REALITY",
      realityValVi: "15 lớp gạch Kim chuyên xếp ngang–dọc + đất nện (~4–5 m) ngăn đào hầm, cấm trồng cây",
      realityValEn: "15 cross-laid Golden Brick & rammed-earth layers (~4–5 m) blocking tunnels",
      stateMode: "actual",
      zoneId: "002",
      camPos: [-32, 18, 52],
      lookAt: [-16, 1.5, 34],
      bodyVi: "Camera đang hạ thấp chiếu thẳng vào khối cắt ngầm tại góc sân Thái Hòa: bên dưới lớp gạch lộ thiên là 15 tầng gạch Kim chuyên và đất nện xếp vuông góc xen kẽ. Khu Tiền Triều tuyệt đối không trồng cây để triệt tiêu điểm ẩn nấp của thích khách và không làm gãy thế uy nghi.",
      bodyEn: "Our camera dips directly into the exposed 15-stratum pit cutout: alternating courses of fired Suzhou clay bricks and tamped earth defeat tunneling, frost heave, and root damage across the treeless court.",
      vnLensVi: "ĐỐI SÁNH HUẾ: Ngược lại hoàn toàn, Đại Nội Huế bố trí Hồ Thái Dịch, cầu Trung Đạo và cây xanh rợp bóng ngay trước Điện Thái Hòa theo triết lý hòa điệu sơn thủy.",
      vnLensEn: "ECOLOGICAL CONTRAST: Hue Citadel conversely integrates lotus ponds and cooling shade foliage directly ahead of its coronation plaza."
    },
    {
      step: "04",
      tagVi: "NGHỊCH LÝ TAM ĐẠI ĐIỆN",
      tagEn: "CEREMONIAL PARADOX · TAIHEDIAN",
      titleVi: "Điện Thái Hòa (太和殿): Đỉnh Cao Quy Chế Nhưng Rỗng Quyền Lực Thường Nhật",
      titleEn: "Taihedian: Supreme Architectural Status vs. Cavernous Utility",
      statuteLabelVi: "QUY CHẾ NGOẠI TRIỀU",
      statuteLabelEn: "CANONICAL EXPECTATION",
      statuteValVi: "Nơi Hoàng đế thiết triều xử lý quốc sự hàng ngày (Phụng Thiên Điện 1420 rộng ~95m)",
      statuteValEn: "Assumed daily imperial seat (original 1420 hall spanned ~95 m wide)",
      realityLabelVi: "HIỆN TRẠNG TÁI THIẾT 1695",
      realityLabelEn: "1695 REBUILD REALITY",
      realityValVi: "Thu nhỏ gần một nửa còn 64 × 37 m (2.377 m²); lạnh & vang nên chỉ dùng đại lễ",
      realityValEn: "Shrunk ~50% to 64 × 37 m (2,377 m²); unheated & drafty, used only for grand rites",
      stateMode: "plan",
      zoneId: "003",
      camPos: [28, 21, 34],
      lookAt: [0, 10, 14],
      bodyVi: "Do cháy sét liên tiếp các năm 1421, 1557, 1597 và cạn kiệt gỗ Kim ti Nam mộc nguyên khối, bản tái thiết năm 1695 thu hẹp gần nửa diện tích so với năm 1420. Căn điện cao 35,05 m (gồm Tam Đài 8,13 m) quá rộng và lạnh để họp thường nhật nên chỉ dùng cho lễ Đăng cơ và Vạn thọ.",
      bodyEn: "Following catastrophic lightning fires (1421, 1557, 1597) and timber scarcity, the 1695 Taihedian rebuild shrank nearly half its 1420 width (~95m to 64m)—serving strictly as a glacial, dramatic ritual cathedral.",
      vnLensVi: "HUẾ: Điện Thái Hòa (Huế) vẫn duy trì thiết đại triều vào mồng 1 & Rằm hàng tháng với kết cấu kép Trùng thiềm điệp ốc chống nóng–bão hiệu quả.",
      vnLensEn: "HUE: Hue's Thai Hoa Hall stayed in active lunar court service thanks to lower-profile double-connected roofs suited to central coastal monsoons."
    },
    {
      step: "05",
      tagVi: "X-RAY · KHÁNG CHẤN ĐẤU CỦNG",
      tagEn: "X-RAY · SEISMIC DOUGONG",
      titleVi: "Giải Phẫu Cơ Học Đấu Củng (斗拱) & Cột Gỗ Đặt Nổi Không Chôn Móng",
      titleEn: "Exploded Dougong Joinery & Zero-Nail Unanchored Columns",
      statuteLabelVi: "GIẢ ĐỊNH XÂY DỰNG HIỆN ĐẠI",
      statuteLabelEn: "MODERN INTUITION",
      statuteValVi: "Cột phải chôn sâu móng bê tông và đóng đinh thép mới đỡ nổi mái ngói khổng lồ",
      statuteValEn: "Massive roofs require deep concrete footings and steel anchor bolts",
      realityLabelVi: "CƠ HỌC GỖ KHÔNG ĐINH",
      realityLabelEn: "ZERO-NAIL ENGINEERING",
      realityValVi: "72 cột Kim ti Nam mộc đặt phẳng trên đá 'Bình thân tọa' + mộng Đấu Củng chịu 300+ động đất",
      realityValEn: "Columns rest flat on stone plinths (slipping safely under shock) + Dougong damping",
      stateMode: "xray",
      zoneId: "003",
      camPos: [25, 22, 28],
      lookAt: [0, 12, 12],
      bodyVi: "Chế độ Bóc tách X-Ray nâng mái Trọng diêm Vũ điện và làm mờ tường gạch bao che: 100% tải trọng dồn xuống hàng cột Kim ti Nam mộc đặt tự do trên đá chân tảng (không chôn ngầm). Khi xảy ra trận động đất Tam Hà 7,8 độ Richter năm 1679, hệ cột trượt nhẹ còn Đấu Củng đàn hồi triệt tiêu chấn động theo nguyên lý 'Tường đổ nhà không đổ'.",
      bodyEn: "X-Ray explosion lifts the heavy double-eave roof off translucent masonry infill: timber walls carry zero load while free-standing Nanmu pillars and layered Dougong brackets absorb lateral seismic shear during quakes up to M7.8 (1679).",
      vnLensVi: "ĐỐI SÁNH ĐẠI NỘI HUẾ: Mộc công Huế thay hệ Đấu Củng tầng cao bằng vì kèo Kẻ Chuyền, Bẩy Hiên nối mộng gỗ lim vững chắc thấp trọng tâm.",
      vnLensEn: "HUE PARALLEL: Hue carpenters swapped tall stacked Dougong for lower-center-of-gravity ironwood Ke Chuyen rafters tied by Trùng thiềm điệp ốc mortises."
    },
    {
      step: "06",
      tagVi: "LOGISTICS THẾ KỶ XV · ĐÁ 250 TẤN",
      tagEn: "15TH-CENTURY LOGISTICS · 250T",
      titleVi: "Tảng Đá 250 Tấn (Vân Long Đại Thạch Điêu) & Đường Trượt Băng 70 km",
      titleEn: "250-Ton Dragon Monolith & The 70 km Winter Ice Road",
      statuteLabelVi: "THÁCH THỨC VẬN CHUYỂN",
      statuteLabelEn: "TRANSPORT CONSTRAINT",
      statuteValVi: "Đá nguyên khối 16,57 × 3,07 × 1,7 m nặng 250 tấn (ban đầu >300 tấn) từ Phòng Sơn",
      statuteValEn: "16.57 m Fangshan stone (>300 t rough) snapped any wooden cart axle",
      realityLabelVi: "GIẢI PHÁP LOGISTICS MÙA ĐÔNG",
      realityLabelEn: "ENGINEERING BREAKTHROUGH",
      realityValVi: "20.000 dân phu đào giếng cách mỗi 500 m, dội nước đóng băng kéo đi trong 28 ngày",
      realityValEn: "20,000 workers dug wells every 500 m to spray an ice slide completed in 28 days",
      stateMode: "plan",
      zoneId: "004",
      camPos: [24, 21, -28],
      lookAt: [0, 8, -16],
      bodyVi: "Nằm sau lưng Điện Bảo Hòa là phiến đá chạm 9 rồng lớn nhất quần thể. Để đưa tảng đá nặng bằng 4.000 người trưởng thành vượt 70 km từ mỏ Phòng Sơn vào năm 1420 (và thay mới thời Càn Long), triều đình tận dụng nhiệt độ đóng băng tháng Chạp tưới nước mặt đường làm giảm ma sát trượt bằng gỗ trượt.",
      bodyEn: "Positioned along the northern stairway of Baohedian, this 250-ton nine-dragon ramp could never roll on wheels—Ming logisticians engineered a 70 km artificial mid-winter ice highway lubricated by spaced well water.",
      vnLensVi: "SO SÁNH: Tại Đại Nội Huế, các bậc thềm rồng đá Thanh kích thước gọn hơn nhưng chạm trổ tinh xảo rồng chầu hồi đầu mang dấu ấn mỹ thuật Việt.",
      vnLensEn: "HUE: Hue's bluestone dragon balustrades scale gracefully to fit court terraces with distinctive Vietnamese curled-mane reliefs."
    },
    {
      step: "07",
      tagVi: "CHUYỂN ĐỔI CÔNG NĂNG · 1723",
      tagEn: "FUNCTIONAL SHIFT · 1723",
      titleVi: "Cú Dịch Chuyển Quyền Lực Năm 1723: Dưỡng Tâm Điện & Quân Cơ Xứ",
      titleEn: "The 1723 Power Shift: Compact Yangxindian & Grand Council",
      statuteLabelVi: "QUY HOẠCH TRỤC CHÍNH (TIỀN–HẬU)",
      statuteLabelEn: "FORMAL IMPERIAL AXIS",
      statuteValVi: "Tam Đại Điện (~35.000 m²) & Càn Thanh Cung (1.400 m²) là trung tâm trị quốc",
      statuteValEn: "Outer Triad (~35,000 m²) & Qianqinggong (1,400 m²) designated as ruler's hub",
      realityLabelVi: "THỰC TẾ TỪ 1723 (ĐỎ CHU SA)",
      realityLabelEn: "DE FACTO CENTER SINCE 1723",
      realityValVi: "Dưỡng Tâm Điện + Quân Cơ Xứ chỉ ~5.000 m² (14,2% Tam Đại Điện / 0,7% Cố Cung)",
      realityValEn: "Yangxindian + Grand Council (~5,000 m²; 0.7% of area) ruled 8 reigns / 200 yrs",
      stateMode: "actual",
      zoneId: "008",
      camPos: [-44, 21, -24],
      lookAt: [-21, 5, -35],
      bodyVi: "Mô hình vừa chuyển sang chế độ '[2] Thực Tế Vận Hành & Khảo Cổ': toàn bộ Tam Đại Điện và Hậu Tam Cung chuyển thành khung dây mờ, chỉ còn cụm Dưỡng Tâm Điện & dãy trực Quân Cơ Xứ phía Tây bừng sáng Đỏ Chu Sa (#B8292F). Suốt gần 200 năm cuối triều Thanh, 8 hoàng đế xử lý toàn bộ mật tấu đế chế ngay trong khuôn viên ấm áp nhỏ hẹp chỉ chiếm 0,7% diện tích Cố Cung này.",
      bodyEn: "Notice our 3D scene now switches ceremonial palaces to ghosted golden wireframes while isolating Yangxindian and the Grand Council in solid Cinnabar Red: for two centuries after Yongzheng (1723), empire-wide command operated inside 0.7% of the palace footprint.",
      vnLensVi: "THỰC ĐỊA QUAN TRỌNG: Hầu hết tour du lịch đi thẳng trục giữa và bỏ qua góc Tây này — hãy rẽ trái ngay khi qua Càn Thanh Môn để xem Dưỡng Tâm Điện & Tam Hy Đường.",
      vnLensEn: "FIELD ROUTE: Tour groups marching down the main axis miss this spot—turn West at Qianqingmen to inspect the true Qing nerve center."
    },
    {
      step: "08",
      tagVi: "72 BỜ NÓC · 308 VẠC ĐỒNG",
      tagEn: "72 RIDGES · 308 FIRE VATS",
      titleVi: "Giác Lâu (角楼) 72 Bờ Nóc, 1.142 Đầu Rồng & 308 Vạc Đồng Phòng Hỏa",
      titleEn: "Corner Towers (72 Roof Ridges), 1,142 Waterspouts & Fire Safety",
      statuteLabelVi: "VỌNG GÁC QUÂN SỰ & TRANG TRÍ",
      statuteLabelEn: "APPEARANCE AT A GLANCE",
      statuteValVi: "Tưởng Giác Lâu chỉ là tháp canh góc tường và vạc đồng để bày trang trí sân",
      statuteValEn: "Looks like decorative corner watchtowers and bronze courtyard urns",
      realityLabelVi: "HẠ TẦNG PHÒNG HỎA & THOÁT NƯỚC",
      realityLabelEn: "UTILITY INFRASTRUCTURE",
      realityValVi: "9 lương 18 trụ 72 bờ nóc + 308 vạc Môn hải đốt than chống đóng băng + 1.142 rồng tiêu úng",
      realityValEn: "Heated 308 fire cauldrons + 1,142 dragon storm drains flushing Tam Đài in 20m",
      stateMode: "plan",
      zoneId: "010",
      camPos: [56, 26, -86],
      lookAt: [42, 7, -64],
      bodyVi: "Để bảo vệ quần thể gỗ lớn nhất thế giới trước giặc lửa, Cố Cung bố trí 308 vạc đồng/sắt ('Môn hải') chứa nước chữa cháy bọc nỉ giữ nhiệt và đốt than từ bệ đá bên dưới vào mùa đông để không đóng băng; kết hợp 1.142 đầu rồng đá Ly Đầu tháo sạch nước mưa trên đài đá 3 tầng chỉ trong 20 phút.",
      bodyEn: "Defending 980 timber buildings demanded 308 insulated bronze/iron 'Gate-Sea' vats warmed with charcoal beneath winter stone plinths, alongside 1,142 stone dragon scuppers discharging heavy summer rain off the marble terrace in 20 minutes.",
      vnLensVi: "TỔNG KẾT ĐỐI SÁNH: Khi rời Thần Vũ Môn hãy đi đối diện sang đồi Cảnh Sơn để nhìn trọn đường chân trời mái vàng nối từ Giác Lâu về Ngọ Môn.",
      vnLensEn: "PANORAMA FINISH: Exit Shenwumen north toward Jingshan Hill's Wanchun Pavilion to match this exact isometric vista in person."
    }
  ];

  const MULTISCALE_COMPARISON_ROWS = [
    {
      metricVi: "1. Tổng số gian phòng (Bays / Rooms)",
      metricEn: "1. Total Palace Bays / Rooms",
      statuteValVi: "9.999,5 gian (Truyền thuyết Thiên tử)",
      statuteValEn: "9,999.5 bays (Heavenly Myth)",
      statutePct: 100,
      realityValVi: "8.707 gian thực tế / 8.886 gian tính cả Giác Lâu (Khảo sát Vu Trác Vân 1973)",
      realityValEn: "8,707 verified bays / 8,886 incl. corner towers (1973 Survey)",
      realityPct: 89,
      hueValVi: "~147 công trình lớn nhỏ quy hoạch hài hòa sông Hương – núi Ngự",
      hueValEn: "~147 coordinated structures scaled to Perfume River geomancy",
      huePct: 28
    },
    {
      metricVi: "2. Diện tích Khuôn viên Cốt lõi",
      metricEn: "2. Core Walled Citadel Footprint",
      statuteValVi: "724.250 m² (Trục chuẩn 960 m × 750 m)",
      statuteValEn: "724,250 m² (960 m × 750 m Canonical Grid)",
      statutePct: 100,
      realityValVi: "72,4 ha kín tường 10 m, hào 52 m; thực tế 980 tòa kiến trúc gỗ–gạch",
      realityValEn: "72.4 ha enclosed by 10m wall & 52m moat; 980 timber-brick halls",
      realityPct: 100,
      hueValVi: "Hoàng thành Huế 360.000 m² (36 ha) nằm trong Kinh thành rộng 520 ha",
      hueValEn: "Hue Imperial City 360,000 m² (inside 520 ha outer Citadel)",
      huePct: 50
    },
    {
      metricVi: "3. Quy mô Điện Thái Hòa (Minh 1420 vs Thanh 1695 vs Huế)",
      metricEn: "3. Hall of Supreme Harmony Footprint",
      statuteValVi: "Phụng Thiên Điện gốc 1420 (~4.700 m², ngang ~95 m)",
      statuteValEn: "Original 1420 Hall (~4,700 m², ~95 m wide)",
      statutePct: 100,
      realityValVi: "Tái thiết 1695: 11×5 gian (2.377 m², 64×37 m, cao 35,05 m — nhỏ hơn gần nửa!)",
      realityValEn: "1695 Rebuild: 11×5 bays (2,377 m², 64×37 m, 35.05 m — nearly 50% smaller)",
      realityPct: 51,
      hueValVi: "Thái Hòa Huế (1805 / 1833 / 2024): Trùng thiềm điệp ốc 1.440 m² (nền ~2,3 m)",
      hueValEn: "Hue Thai Hoa Hall: Twin-roof 1,440 m² on 2.3 m stone terrace",
      huePct: 31
    },
    {
      metricVi: "4. Diện tích Trung tâm Điều hành Thực tế",
      metricEn: "4. Functional Shift: Ritual vs Executive Core",
      statuteValVi: "~35.000 m² Khu Tiền Triều Tam Đại Điện (theo điển chế)",
      statuteValEn: "~35,000 m² Outer Ceremonial Triad (Canonical Rule)",
      statutePct: 100,
      realityValVi: "~5.000 m² Dưỡng Tâm Điện & Quân Cơ Xứ từ 1723 (chỉ bằng 14,2% Tiền Triều / 0,7% Cố Cung)",
      realityValEn: "~5,000 m² Yangxindian & Grand Council since 1723 (14.2% of Outer / 0.7% total)",
      realityPct: 14,
      hueValVi: "Viện Cơ Mật & Khu Cần Chánh – Kiến Trung điều hành linh hoạt nội triều",
      hueValEn: "Hue Privy Council & Can Chanh–Kien Trung administrative cluster",
      huePct: 18
    },
    {
      metricVi: "5. Chiều rộng Hộ Thành Hà (Moat Barrier)",
      metricEn: "5. Protective Moat System Width",
      statuteValVi: "Chuẩn thành quách 4 mặt bảo vệ Bắc–Nam–Đông–Tây",
      statuteValEn: "Four-sided Imperial Defensive Canal Blueprint",
      statutePct: 100,
      realityValVi: "52 m rộng × 6 m sâu quanh tường thành dài 3,4 km Bắc Kinh",
      realityValEn: "52 m wide × 6 m deep encircling the 3.4 km Beijing curtain wall",
      realityPct: 100,
      hueValVi: "Hộ Thành Hà Huế rộng 30–50 m nối thủy đạo trực tiếp với Sông Hương",
      hueValEn: "Hue Citadel Moat 30–50 m wide feeding naturally into Perfume River",
      huePct: 77
    },
    {
      metricVi: "6. Chiều sâu Gia cố Nền Móng Quảng Trường",
      metricEn: "6. Subsurface Foundation Courses",
      statuteValVi: "Cung điện thông thường: 3–5 lớp đất nện",
      statuteValEn: "Standard Palace Courtyard: 3–5 Rammed Earth Layers",
      statutePct: 33,
      realityValVi: "15 lớp gạch Kim chuyên & đất nện (~3,5–5 m sâu) tại sân Thái Hòa Bắc Kinh",
      realityValEn: "15 courses of Suzhou bricks & tamped soil (~3.5–5 m deep) at Taihedian",
      realityPct: 100,
      hueValVi: "Hệ nền đá Thanh cao thoát lũ miền Trung + móng cột đặt trên đá tảng chạm sen",
      hueValEn: "Elevated flood-resilient bluestone terraces & lotus stone plinths in Hue",
      huePct: 55
    }
  ];

  const MULTISCALE_TABLES = {
    fc: {
      col1Vi: "Quy Chế Biểu Trưng / Truyền Thuyết",
      col2Vi: "Thực Tế Khảo Cổ & Vận Hành (Cố Cung)",
      col1En: "Symbolic Statute / Myth",
      col2En: "Archaeological & Operational Reality",
      rows: MULTISCALE_COMPARISON_ROWS.map((r) => ({
        metricVi: r.metricVi,
        metricEn: r.metricEn,
        val1: r.statutePct,
        label1Vi: r.statuteValVi,
        label1En: r.statuteValEn,
        val2: r.realityPct,
        label2Vi: r.realityValVi,
        label2En: r.realityValEn,
        noteVi: r.hueValVi,
        noteEn: r.hueValEn
      }))
    }
  };

  const TIMELINE_EVENTS = [
    { year: "1406–1416", phase: "P1", badgeVi: "GĐ1 · KHAI THÁC & CHUẨN BỊ", badgeEn: "PHASE 1 · TIMBER & STONE", titleVi: "Chiếu Vĩnh Lạc khởi dựng Tử Cấm Thành — Khai thác gỗ Kim ti Nam mộc", titleEn: "Yongle Decree Launches Construction & Remote Nanmu Logging", descVi: "Minh Thành Tổ Chu Đệ hạ chiếu xây kinh đô Bắc Kinh (1406); quan viên đi Tứ Xuyên, Vân Nam, Quý Châu mất 3–5 năm vận chuyển từng thân Kim ti Nam mộc và đá Phòng Sơn 250 tấn.", descEn: "Emperor Yongle ordered the Beijing palace transfer in 1406; giant Phoebe zhennan logs from Sichuan/Yunnan required 3–5 years per beam to float and haul north." },
    { year: "1417–1420", phase: "P1", badgeVi: "GĐ1 · NGUYỄN AN & HOÀN THÀNH", badgeEn: "PHASE 1 · MASTERWORK 1420", titleVi: "100.000 nghệ nhân (công trình sư Nguyễn An) dựng xong năm 1420", titleEn: "100,000 Artisans & Chief Designer Nguyễn An Complete Core Complex", descVi: "Đội ngũ thợ thủ công (với tổng công trình sư Nguyễn An — nhân tài kiến trúc gốc Việt giữ vai trò chủ chốt quy hoạch Đại Minh cung thành) cùng 1 triệu dân phu hoàn tất quần thể tháng 12/1420.", descEn: "Over 100,000 master artisans—crucially directed by Vietnamese-born chief court architect Ruan An (Nguyễn An)—and 1M laborers completed the axial palace in Dec 1420." },
    { year: "9/5/1421", phase: "P2", badgeVi: "GĐ2 · ĐẠI HỎA SÉT ĐÁNH", badgeEn: "PHASE 2 · 1421 LIGHTNING FIRE", titleVi: "Sét đánh cháy trụi Tam Đại Điện chỉ 4 tháng sau khánh thành", titleEn: "Three Great Halls Destroyed by Lightning Four Months After Dedication", descVi: "Ngày 9/5/1421, sét đánh thẳng Phụng Thiên Điện (tiền thân Điện Thái Hòa) tạo thành trận đại hỏa hoạn đầu tiên thiêu rụi cụm Ngoại Triều.", descEn: "Lightning struck Fengtian Hall on 9 May 1421—just 4 months after opening ceremonies—starting an era of cyclical timber conflagrations." },
    { year: "1557 & 1597", phase: "P2", badgeVi: "GĐ2 · HỎA HOẠN GIA TĨNH – VẠN LỊCH", badgeEn: "PHASE 2 · RECURRING FIRES", titleVi: "Hai vụ cháy lớn liên tiếp phá hủy lại toàn bộ Tam Đại Điện", titleEn: "Ming Fires of 1557 & 1597 Force Repeated Structural Rebuilds", descVi: "Hai vụ hỏa hoạn thời Minh Gia Tĩnh và Vạn Lịch làm nguồn gỗ cổ thụ Nam mộc Tây Nam cạn kiệt nghiêm trọng, buộc triều đình điều chỉnh kết cấu cột ghép.", descEn: "Repeated conflagrations in 1557 and 1597 exhausted old-growth Nanmu forests, reshaping imperial structural engineering." },
    { year: "1695", phase: "P2", badgeVi: "GĐ2 · THU HẸP QUY MÔ", badgeEn: "PHASE 2 · 1695 DOWNSCALED REBUILD", titleVi: "Khang Hy tái thiết Điện Thái Hòa thu nhỏ gần một nửa bản 1420", titleEn: "Kangxi Finalizes Present Taihedian at Half Original 1420 Scale", descVi: "Khang Hy năm thứ 34 tái thiết Điện Thái Hòa hiện nay: chiều ngang thu hẹp từ ~95 m xuống 64 m, dùng lõi gỗ thông ghép bọc ngoài và giảm tỷ lệ Đấu Củng từ chịu lực thuần túy sang trang trí phối hợp.", descEn: "Reconstructed for the last time in 1695 (width reduced from ~95m to 64m) using bundled-timber core pillars and more compact late-imperial Dougong brackets." },
    { year: "1723–1729", phase: "P3", badgeVi: "GĐ3 · DỊCH CHUYỂN QUYỀN LỰC", badgeEn: "PHASE 3 · 1723 POWER SHIFT", titleVi: "Ung Chính rời Càn Thanh Cung sang Dưỡng Tâm Điện & Lập Quân Cơ Xứ", titleEn: "Yongzheng Relocates to Yangxindian & Forms Grand Council (1723–1729)", descVi: "Từ năm 1723, tâm điểm trị quốc thực sự rời trục chính về khu chữ Công (~5.000 m²) sát dãy trực Quân Cơ Xứ, điều hành đế chế suốt 8 triều Hoàng đế Thanh.", descEn: "Rejecting cavernous Qianqinggong, Yongzheng established the de facto Qing nerve center inside heated western chambers beside Grand Council clerks." },
    { year: "1805–1833", phase: "P3", badgeVi: "GĐ3 · TƯƠNG CHIẾU ĐẠI VIỆT / HUẾ", badgeEn: "PHASE 3 · HUE CITADEL PARALLEL", titleVi: "Vua Gia Long & Minh Mạng quy hoạch Đại Nội Huế theo Trùng thiềm điệp ốc", titleEn: "Emperors Gia Long & Minh Mạng Plan Hue Citadel (1805–1833)", descVi: "Xây Điện Thái Hòa (1805) và Ngọ Môn (1833) tại Huế: tiếp thu điển chế Ngũ hành – trục Nam–Bắc nhưng sáng tạo hệ mái đôi Trùng thiềm điệp ốc & Nhất Thi Nhất Họa thích ứng khí hậu miền Trung.", descEn: "Built Hue Thai Hoa Hall (1805) and Meridian Gate (1833), pairing North–South Confucian zoning with Vietnam's flood-and-cyclone-resilient twin-roof joinery." },
    { year: "1973–2026", phase: "P3", badgeVi: "GĐ3 · GIẢI MÃ 8.707 GIAN & 3D", badgeEn: "PHASE 3 · 1973 SURVEY & 3D TWIN", titleVi: "Vu Trác Vân kiểm kê 8.707 gian (1973) & Số hóa WebGL 3D trên CCE", titleEn: "1973 Inventory Confirms 8,707 Bays; Interactive 3D Dissection", descVi: "Nhóm chuyên gia Vu Trác Vân hoàn tất đo đạc từng gian năm 1973, kết thúc huyền thoại 9.999,5 gian; ngày nay được tái dựng thành mô hình giải phẫu 3D WebGL đối sánh Trung – Việt.", descEn: "Architect Yu Zhuoyun's 1973 archaeological count settled the 9,999.5 myth at 8,707 verified bays (8,886 w/ towers)—now reconstructed live in Three.js." }
  ];

  const HUE_COMPARATOR_VECTORS = [
    {
      code: "01",
      titleVi: "Triết lý Không gian & Cảnh quan",
      titleEn: "Spatial Philosophy & Ecology",
      beijingVi: "<strong>Uy quyền Tuyệt đối & Chế ngự:</strong> Sân đá khổng lồ 30.000 m² hoàn toàn không bóng cây, đài đá Hán Bạch Ngọc 3 tầng cao 8,13 m đẩy ngai vàng lên tách biệt trần thế.",
      beijingEn: "<strong>Awe & Spatial Dominance:</strong> Treeless 30,000 m² flagstone courts and 8.13 m three-tier marble platforms assert intimidating celestial detachment.",
      hueVi: "<strong>Hài hòa Sơn Thủy & Sinh thái:</strong> Đặt Hồ Thái Dịch xanh mát, cây xanh và lấy Núi Ngự Bình làm Tiền án, Sông Hương làm Minh đường tự nhiên.",
      hueEn: "<strong>Natural Harmonics & Fengshui:</strong> Integrates lotus-filled Thai Dich Lake, shaded foliage, Ngu Binh Mountain screen, and Perfume River flow."
    },
    {
      code: "02",
      titleVi: "Giải pháp Mở rộng Nội thất & Mái",
      titleEn: "Interior Volume & Roof Architecture",
      beijingVi: "<strong>Tăng chiều cao & Mái Trọng diêm:</strong> Dùng cột Kim ti Nam mộc khổng lồ đẩy mái Trọng diêm Vũ điện cao tới 26,92 m trên bệ đài.",
      beijingEn: "<strong>Vertical Scale & Heavy Hips:</strong> Relies on giant Nanmu columns hoisting massive glazed double-eave hipped roofs 26.92 m above terrace stones.",
      hueVi: "<strong>Trùng thiềm điệp ốc (Nhà kép 2 mái):</strong> Nối Tiền doanh (7 gian 2 chái) và Chính doanh (5 gian 2 chái) bằng trần vòm <em>Thừa lưu</em> — vừa rộng lòng nhà không cần gỗ quá khổ vừa hạ thấp trọng tâm chống bão.",
      hueEn: "<strong>Twin-Roof Joinery (Trùng thiềm điệp ốc):</strong> Bridges Front & Main timber bays beneath a concave <em>Thừa lưu</em> soffit—expanding depth without oversized beams while resisting coastal typhoons."
    },
    {
      code: "03",
      titleVi: "Hệ Liên kết Chịu lực & Trang trí",
      titleEn: "Load-Bearing Joinery & Carvings",
      beijingVi: "<strong>Hệ Đấu Củng (斗拱) nhiều tầng:</strong> Hàng nghìn mẩu gỗ đan cài chìa đỡ mái vươn xa không đinh sắt, kèm 10 linh thú nóc mái phân cấp.",
      beijingEn: "<strong>Stacked Dougong Brackets:</strong> Deep multi-tier interlocking timber cantilevers without iron nails paired with hierarchical ceramic ridge beasts.",
      hueVi: "<strong>Kẻ Chuyền, Bẩy Hiên & Nhất Thi Nhất Họa:</strong> Mộng gỗ lim chắc khỏe kết hợp hệ ô hộc <em>Nhất Thi Nhất Họa</em> (một bài thơ chữ Hán + một tranh thếp vàng độc bản).",
      hueEn: "<strong>Ke Chuyen Rafters & Carved Poetry:</strong> Resilient ironwood frames decorated across ceiling panels with 'One Poem, One Painting' gilded wood reliefs."
    },
    {
      code: "04",
      titleVi: "Vật liệu & Màu sắc Hoàng gia",
      titleEn: "Materials & Chromatic Heritage",
      beijingVi: "<strong>Ngói Lưu Ly Vàng & Tường Đất Hoàng Thổ:</strong> Phối hai sắc Đỏ Chu Sa – Vàng Hoàng Lưu Ly rực rỡ trên nền băng giá Hoa Bắc.",
      beijingEn: "<strong>Northern Chromatics:</strong> Expansive yellow glazed tiles juxtaposed against deep loess red walls.",
      hueVi: "<strong>Hoàng/Thanh Lưu Ly & Pháp Lam – Khảm Sành Sứ:</strong> Gốm tráng men Pháp lam (Pháp lang Huế) kháng ẩm mặn nhiệt đới và khảm sành sứ tinh xảo trên nóc mái.",
      hueEn: "<strong>Hue Enamel & Ceramic Mosaics:</strong> Typhoon-durable polychrome <em>Pháp lam</em> copper enameling and shimmering shattered-porcelain roof mosaics."
    }
  ];

  const SYNTHESIS_GROUPS_4 = [
    {
      group: "NHÓM 01",
      accent: "#1F6E5C",
      titleVi: "Cơ chế Kháng chấn 600 Năm ('Tường đổ nhà không đổ')",
      titleEn: "600-Year Seismic Resilience ('Walls Collapse, Frame Stands')",
      bodyVi: "Tường gạch chỉ là vách ngăn giữ nhiệt. 100% trọng lượng mái dồn qua mộng <strong>Đấu Củng</strong> xuống cột gỗ Kim ti Nam mộc đặt phẳng trên đá tảng <em>Bình thân tọa</em> (không chôn móng), cho phép công trình trượt nhẹ ma sát giảm chấn qua 300+ trận động đất (đỉnh điểm 7,8 độ Richter năm 1679).",
      bodyEn: "Brick walls carry zero roof load. Interlocking Dougong brackets channel weight down unanchored Nanmu pillars resting flat on stone plinths—gliding harmlessly across M7.8 seismic waves."
    },
    {
      group: "NHÓM 02",
      accent: "#B8292F",
      titleVi: "Hệ thống Trị thủy 1.142 Đầu Rồng & 308 Vạc Chữa cháy",
      titleEn: "1,142 Dragon Storm Drains & 308 Heated Fire Cauldrons",
      bodyVi: "1.142 đầu rồng đá <em>Ly Đầu</em> quanh Tam Đài thoát toàn bộ nước mưa thành kỳ quan 'Thiên long phún thủy' xuống Nội Kim Thủy Hà trong 20 phút. Song song, 308 vạc đồng <em>Môn hải</em> được đun than từ hốc đá đáy vào mùa đông để đảm bảo luôn có nước lỏng chữa cháy.",
      bodyEn: "1,142 sculpted stone spouts evacuate heavy monsoon rains in 20 minutes into the Inner Canal, while 308 winter-heated bronze/iron vats guarantee unfrozen fire-suppression reserves."
    },
    {
      group: "NHÓM 03",
      accent: "#3B4D7A",
      titleVi: "Nhãn quan Đối sánh Bản sắc Kiến trúc Trung – Việt",
      titleEn: "Comparing Northern Chinese Canon vs. Vietnamese Hue Adaptation",
      bodyVi: "Tại thực địa hãy phân biệt: Bắc Kinh dùng mái cong đầu đao nhiều tầng Đấu Củng thu nhỏ thời Thanh để tạo áp lực thị giác dọc sân trống; còn Huế tối ưu khí hậu miền Trung bằng bộ khung gỗ lim hạ trọng tâm <em>Trùng thiềm điệp ốc</em>, nghệ thuật <em>Pháp lam</em> và <em>Nhất Thi Nhất Họa</em>.",
      bodyEn: "Distinguish Beijing's stark stone plazas and lofty stacked Dougong from Hue's storm-tuned twin-roof ironwood joinery, lush lakes, and enameled Poetry-and-Painting bays."
    },
    {
      group: "NHÓM 04",
      accent: "#D99B26",
      titleVi: "Cẩm nang Thực địa cho Độc giả Việt (Field Checklist)",
      titleEn: "On-Site Field Checklist & Essential Lexicon",
      bodyVi: "<strong>(1) Ngắm Đấu Củng & Đá 250 tấn:</strong> Đi ra ngay phía sau Điện Bảo Hòa. <strong>(2) Không bỏ sót quyền lực thực:</strong> Sau khi qua Càn Thanh Môn, rẽ trái sang <strong>Dưỡng Tâm Điện & Quân Cơ Xứ</strong> thay vì chỉ đi thẳng trục giữa. <strong>Từ vựng thực địa:</strong> <code>斗拱</code> Đấu Củng · <code>太和殿</code> Thái Hòa Điện · <code>养心殿</code> Dưỡng Tâm Điện · <code>军机处</code> Quân Cơ Xứ · <code>汉白玉</code> Hán Bạch Ngọc · <code>鎏金铜缸</code> Lưu Kim Đồng Cang.",
      bodyEn: "<strong>(1) Dragon Stone & Brackets:</strong> Check behind Baohedian. <strong>(2) True Power Wing:</strong> Turn West past Qianqingmen to Yangxindian & Grand Council. <strong>Key Terms:</strong> <code>斗拱</code> Dougong · <code>太和殿</code> Taihedian · <code>养心殿</code> Yangxindian · <code>军机处</code> Grand Council · <code>汉白玉</code> Hanbaiyu Marble · <code>鎏金铜缸</code> Gilt Bronze Vats."
    }
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
      baseX: mesh.position.x,
      baseY: mesh.position.y,
      baseZ: mesh.position.z,
      explodeMult: explodeMult || 0
    };
    mesh.traverse((child) => {
      if (child.isMesh && child.material && !child.material._fc3dUnique) {
        child.material = child.material.clone();
        child.material._fc3dUnique = true;
        child.material.userData = child.material.userData || {};
        child.material.userData.origColorHex = child.material.color ? child.material.color.getHex() : 0xffffff;
        child.material.userData.origEmissiveHex = child.material.emissive ? child.material.emissive.getHex() : 0x000000;
      }
    });
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
    regFn("002", citadelBase, "ground", false, 0);
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
      regFn("001", wMesh, "wall_shell", false, 0);
      regFn("001", capMesh, "wall_shell", false, 0);
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

    // ZONE 002 Subsurface Cutaway: 15 Alternating Kim Chuyên Brick & Rammed-Earth Courses (No Trees Security)
    const cutawayGroup = new THREE.Group();
    cutawayGroup.position.set(-18, 0.96, 34);
    for (let st = 0; st < 15; st++) {
      const shrink = st * 0.24;
      const isBrick = st % 2 === 0;
      const layerMat = new THREE.MeshStandardMaterial({
        color: isBrick ? 0xb8862d : 0x1f6e5c,
        roughness: 0.65
      });
      const strataMesh = new THREE.Mesh(new THREE.BoxGeometry(10.8 - shrink, 0.22, 7.8 - shrink * 0.65), layerMat);
      strataMesh.position.y = 0.22 - st * 0.23;
      cutawayGroup.add(strataMesh);
    }
    const cutawayRim = new THREE.Mesh(
      new THREE.BoxGeometry(11.6, 0.26, 8.6),
      new THREE.MeshStandardMaterial({ color: 0xd99b26, roughness: 0.38 })
    );
    cutawayRim.position.y = 0.08;
    cutawayGroup.add(cutawayRim);
    regFn("002", cutawayGroup, "subsurface", false, 0);
    root.add(cutawayGroup);

    // ZONE 003-004: H-Shaped (土) Three-Tier Marble Terrace (Tam Đài / Santai)
    const santaiGroup = new THREE.Group();
    santaiGroup.position.set(0, 0.8, 0);
    const santaiMat = new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf7f5f0, roughness: 0.45 });
    [
      { z: 16, w1: 48, d1: 26, w2: 43, d2: 22, w3: 38, d3: 18, zoneId: "003" },
      { z: 0, w1: 36, d1: 14, w2: 32, d2: 12, w3: 28, d3: 10, zoneId: "004" },
      { z: -15, w1: 44, d1: 22, w2: 39, d2: 18, w3: 34, d3: 15, zoneId: "004" }
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
    root.add(createDetailedPalaceHall({ w: 31, d: 15.5, baseH: 0.4, bodyH: 7.4, roofH: 7.8, x: 0, y: 6.4, z: 16, zoneId: "003", roofType: "hip", doubleEave: true, isMarbleBase: true, isShiftTarget: false, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "太和殿" }, texLib, regFn));
    root.add(createCourtyardArtifact("sundial", 11.5, 6.4, 23.2, "003", regFn));
    root.add(createCourtyardArtifact("sundial", -11.5, 6.4, 23.2, "003", regFn));
    [-8.5, -5.5, 5.5, 8.5].forEach((cx) => root.add(createCourtyardArtifact("censer", cx, 6.4, 23.0, "003", regFn)));
    [-18, -12, 12, 18].forEach((vx) => root.add(createCourtyardArtifact("vat", vx, 0.8, 34, "003", regFn)));
    root.add(createDetailedPalaceHall({ w: 7.5, d: 34, baseH: 1.5, bodyH: 4.5, roofH: 4.2, x: 34, y: 0.8, z: 16, zoneId: "003", roofType: "gable", doubleEave: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 7.5, d: 34, baseH: 1.5, bodyH: 4.5, roofH: 4.2, x: -34, y: 0.8, z: 16, zoneId: "003", roofType: "gable", doubleEave: true }, texLib, regFn));

    // ZONE 004: Điện Trung Hòa + Điện Bảo Hòa + 250-ton Dragon Monolith
    root.add(createDetailedPalaceHall({ w: 11.5, d: 11.5, baseH: 0.4, bodyH: 5.2, roofH: 5.6, x: 0, y: 6.4, z: 0, zoneId: "004", roofType: "pyramid", doubleEave: false, isMarbleBase: true, hasInteriorThrone: true, baysX: 3, baysZ: 3, plaqueText: "中和殿" }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 25.5, d: 13.0, baseH: 0.4, bodyH: 6.2, roofH: 6.4, x: 0, y: 6.4, z: -15, zoneId: "004", roofType: "gable", doubleEave: true, isMarbleBase: true, isShiftTarget: false, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "保和殿" }, texLib, regFn));
    const dragonMonolith = new THREE.Mesh(
      new THREE.BoxGeometry(6.2, 5.8, 10.5),
      new THREE.MeshStandardMaterial({ map: texLib.dragonSlab, color: 0xf5f3ee, roughness: 0.35 })
    );
    dragonMonolith.position.set(0, 3.2, -26.2);
    dragonMonolith.rotation.x = -0.45;
    regFn("004", dragonMonolith, "foundation", false, 0);
    root.add(dragonMonolith);

    // ZONE 005: Càn Thanh Môn (Boundary Separating Outer & Inner Courts)
    const innerDivideWall = new THREE.Mesh(new THREE.BoxGeometry(118, 3.8, 1.6), wallMat);
    innerDivideWall.position.set(0, 2.4, -32);
    regFn("005", innerDivideWall, "foundation", false, 0);
    root.add(innerDivideWall);
    root.add(createDetailedPalaceHall({ w: 14, d: 6.5, baseH: 1.6, bodyH: 3.8, roofH: 3.8, x: 0, y: 0.8, z: -32, zoneId: "005", roofType: "gable", doubleEave: false, isMarbleBase: true }, texLib, regFn));

    // ZONE 006: Càn Thanh Cung & Giao Thái Điện
    const innerTerrace = new THREE.Mesh(new THREE.BoxGeometry(28, 2.4, 30), santaiMat);
    innerTerrace.position.set(0, 2.0, -49);
    root.add(innerTerrace);
    addMarbleBalustradeRing(root, 28, 30, 3.2, "006", texLib, regFn, true);
    regFn("006", innerTerrace, "foundation", false, 0);
    root.add(createDetailedPalaceHall({ w: 22, d: 10.5, baseH: 0.3, bodyH: 5.2, roofH: 5.4, x: 0, y: 3.2, z: -40, zoneId: "006", roofType: "hip", doubleEave: true, isMarbleBase: true, hasInteriorThrone: true, baysX: 9, baysZ: 5, plaqueText: "乾清宫" }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 8.8, d: 8.8, baseH: 0.3, bodyH: 4.0, roofH: 4.4, x: 0, y: 3.2, z: -49.5, zoneId: "006", roofType: "pyramid", doubleEave: false, isMarbleBase: true }, texLib, regFn));

    // ZONE 007: Khôn Ninh Cung & Khu Dưỡng Lão Ninh Thọ Cung (Ngọc 1,07 tấn)
    root.add(createDetailedPalaceHall({ w: 19.5, d: 9.8, baseH: 0.3, bodyH: 4.8, roofH: 4.8, x: 0, y: 3.2, z: -58.5, zoneId: "007", roofType: "hip", doubleEave: true, isMarbleBase: true, baysX: 9, baysZ: 4 }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 16.5, d: 9.5, baseH: 2.2, bodyH: 4.8, roofH: 4.8, x: 37, y: 0.8, z: -31, zoneId: "007", roofType: "gable", doubleEave: true, isMarbleBase: true, isShiftTarget: false, hasInteriorThrone: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 15.0, d: 8.5, baseH: 1.8, bodyH: 4.4, roofH: 4.2, x: 37, y: 0.8, z: -43, zoneId: "007", roofType: "hip", doubleEave: false, isMarbleBase: true, isShiftTarget: false }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 13.5, d: 8.5, baseH: 1.6, bodyH: 4.2, roofH: 4.0, x: 37, y: 0.8, z: -55, zoneId: "007", roofType: "gable", doubleEave: false, isMarbleBase: true, isShiftTarget: false }, texLib, regFn));
    const jadeSculpture = new THREE.Mesh(new THREE.DodecahedronGeometry(1.45, 1), new THREE.MeshStandardMaterial({ color: 0x38a169, roughness: 0.2, metalness: 0.3 }));
    jadeSculpture.position.set(37, 3.8, -50.5);
    regFn("007", jadeSculpture, "interior_columns", false, 0);
    root.add(jadeSculpture);

    // ZONE 008: Dưỡng Tâm Điện & Quân Cơ Xứ (Tâm điểm Quyền lực Thực ~5.000 m²)
    const yxWall = new THREE.Mesh(new THREE.BoxGeometry(19, 3.2, 16), wallMat);
    yxWall.position.set(-23, 2.1, -36);
    regFn("008", yxWall, "body", true, 0);
    const yxFloor = new THREE.Mesh(new THREE.BoxGeometry(17.6, 2.2, 14.6), new THREE.MeshStandardMaterial({ color: 0x5c181b }));
    yxFloor.position.set(-23, 1.8, -36);
    regFn("008", yxFloor, "foundation", true, 0);
    root.add(yxWall, yxFloor);
    root.add(createDetailedPalaceHall({ w: 14.5, d: 6.5, baseH: 1.2, bodyH: 4.4, roofH: 4.2, x: -23, y: 2.2, z: -33, zoneId: "008", roofType: "gable", doubleEave: false, isShiftTarget: true, hasInteriorThrone: true, plaqueText: "养心殿" }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 5.2, d: 4.5, baseH: 1.0, bodyH: 3.6, roofH: 3.2, x: -23, y: 2.2, z: -36.5, zoneId: "008", roofType: "gable", doubleEave: false, isShiftTarget: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 13.5, d: 5.5, baseH: 1.2, bodyH: 4.0, roofH: 3.8, x: -23, y: 2.2, z: -40, zoneId: "008", roofType: "hip", doubleEave: false, isShiftTarget: true }, texLib, regFn));
    root.add(createDetailedPalaceHall({ w: 9.5, d: 4.2, baseH: 0.8, bodyH: 2.8, roofH: 2.6, x: -20, y: 1.2, z: -26.5, zoneId: "008", roofType: "gable", doubleEave: false, isShiftTarget: true, plaqueText: "军机处" }, texLib, regFn));

    // ZONE 009: Đông – Tây Lục Cung (12 Courtyard Compounds) & Cửu Long Bích
    const ndGroup = new THREE.Group();
    ndGroup.position.set(37, 0.8, -19);
    const ndBase = new THREE.Mesh(new THREE.BoxGeometry(13.5, 1.4, 2.2), new THREE.MeshStandardMaterial({ map: texLib.whiteMarble, color: 0xf5f2eb }));
    ndBase.position.y = 0.7;
    const ndBody = new THREE.Mesh(new THREE.BoxGeometry(12.8, 3.4, 1.5), new THREE.MeshStandardMaterial({ map: texLib.nineDragonWall, roughness: 0.2, metalness: 0.3 }));
    ndBody.position.y = 3.1;
    ndGroup.add(ndBase, ndBody, createTraditionalRoofTier({ w: 13.6, d: 2.6, h: 1.8, yBase: 4.8, zoneId: "009", isShiftTarget: false, roofType: "hip", explodeMult: 0.6 }, texLib, regFn));
    regFn("009", ndBody, "body", false, 0);
    root.add(ndGroup);
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
    const isLightStudio = ui3d.lightingPreset === 0 && document.documentElement.getAttribute("data-theme") !== "dark";
    const highlightZoneFocus = ui3d.dissectionState === "actual";

    Object.keys(rt.zoneMeshMap).forEach((zId) => {
      const isSelected = zId === ui3d.activeZoneId;
      rt.zoneMeshMap[zId].forEach((obj) => {
        obj.traverse((child) => {
          if (!child.isMesh || !child.material) return;
          const layer = obj.userData.layer || child.userData.layer || "body";
          const isShift = obj.userData.isShiftTarget || child.userData.isShiftTarget;
          const origColor = child.material.userData && typeof child.material.userData.origColorHex === "number"
            ? child.material.userData.origColorHex
            : null;
          child.material.transparent = true;
          child.material.depthWrite = true;

          if (highlightZoneFocus) {
            const isSub = layer === "subsurface";
            const isGround = layer === "ground";
            if (isGround) {
              child.material.wireframe = false;
              if (origColor !== null && child.material.color) child.material.color.setHex(isLightStudio ? 0xE2DDD3 : origColor);
              if (child.material.emissive) child.material.emissive.setHex(0x000000);
              const showPitThrough = ui3d.activeZoneId === "002";
              child.material.opacity = showPitThrough ? 0.24 : 0.92;
              child.material.depthWrite = !showPitThrough;
            } else {
              const useWire = Boolean(!isShift && !isSelected && !isSub);
              child.material.wireframe = useWire;
              if (useWire) {
                child.material.opacity = isLightStudio ? 0.24 : 0.34;
                if (child.material.color) child.material.color.setHex(isLightStudio ? 0x8F877A : 0xd99b26);
                if (child.material.emissive) child.material.emissive.setHex(isLightStudio ? 0x000000 : 0x221704);
              } else {
                child.material.opacity = 1.0;
                if (isSub) {
                  if (origColor !== null && child.material.color) child.material.color.setHex(origColor);
                  if (child.material.emissive) child.material.emissive.setHex(0x0f3d32);
                } else if (isShift || (isSelected && ui3d.activeZoneId !== "002")) {
                  if (child.material.color) child.material.color.setHex(0xc83228);
                  if (child.material.emissive) child.material.emissive.setHex(0x4a0e0b);
                } else {
                  if (origColor !== null && child.material.color) child.material.color.setHex(origColor);
                  if (child.material.emissive) child.material.emissive.setHex(isSelected ? 0x2e2005 : 0x000000);
                }
              }
            }
          } else if (ui3d.dissectionState === "xray") {
            child.material.wireframe = false;
            if (origColor !== null && child.material.color) child.material.color.setHex(origColor);
            const fadeGround = layer === "ground" && ui3d.activeZoneId === "002";
            child.material.opacity = layer === "wall_shell" || fadeGround ? 0.20 : 0.98;
            child.material.depthWrite = !(layer === "wall_shell" || fadeGround);
            if (child.material.emissive) {
              const isSeismic = layer === "dougong" || layer === "interior_columns" || layer === "subsurface";
              child.material.emissive.setHex(isSeismic ? 0x154d3f : 0x000000);
            }
          } else {
            child.material.wireframe = false;
            if (origColor !== null && child.material.color) child.material.color.setHex(origColor);
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
    const { scene, ambientLight, hemiLight, sunLight, gridHelper } = rt;
    const isDarkSite = document.documentElement.getAttribute("data-theme") === "dark";
    if (ui3d.lightingPreset === 0) {
      const studioBg = isDarkSite ? 0x111317 : 0xF6F3EC;
      scene.background.setHex(studioBg);
      scene.fog.color.setHex(studioBg);
      ambientLight.color.setHex(isDarkSite ? 0xfff8eb : 0xffffff);
      ambientLight.intensity = isDarkSite ? 0.72 : 0.86;
      if (hemiLight) {
        hemiLight.color.setHex(isDarkSite ? 0xffebc8 : 0xfffcf5);
        hemiLight.groundColor.setHex(isDarkSite ? 0x1f242d : 0xd9d2c5);
        hemiLight.intensity = isDarkSite ? 0.45 : 0.56;
      }
      sunLight.color.setHex(isDarkSite ? 0xfff0d4 : 0xfff5df);
      sunLight.intensity = isDarkSite ? 1.15 : 1.06;
      sunLight.position.set(95, 145, 110);
      if (gridHelper && gridHelper.material) {
        gridHelper.material.transparent = true;
        gridHelper.material.opacity = isDarkSite ? 0.45 : 0.22;
      }
    } else if (ui3d.lightingPreset === 1) {
      scene.background.setHex(0x1f1414);
      scene.fog.color.setHex(0x1f1414);
      ambientLight.color.setHex(0xffd1a6);
      ambientLight.intensity = 0.64;
      if (hemiLight) hemiLight.intensity = 0.42;
      sunLight.color.setHex(0xff8c42);
      sunLight.intensity = 1.45;
      sunLight.position.set(-130, 65, 85);
      if (gridHelper && gridHelper.material) gridHelper.material.opacity = 0.35;
    } else {
      scene.background.setHex(0x090c12);
      scene.fog.color.setHex(0x090c12);
      ambientLight.color.setHex(0x90cdf4);
      ambientLight.intensity = 0.60;
      if (hemiLight) hemiLight.intensity = 0.40;
      sunLight.color.setHex(0xe2e8f0);
      sunLight.intensity = 0.95;
      sunLight.position.set(60, 160, 40);
      if (gridHelper && gridHelper.material) gridHelper.material.opacity = 0.35;
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
      const halfPin = w < 540 ? 60 : 82;
      const topSafe = w < 540 ? 64 : 74;
      const bottomSafe = w < 540 ? 44 : 58;
      if (sx < halfPin || sx > w - halfPin || sy < topSafe || sy > h - bottomSafe) {
        item.el.style.display = "none";
        return;
      }
      item.el.style.display = "block";
      item.el.style.left = `${sx}px`;
      item.el.style.top = `${sy}px`;
      const box = item.el.querySelector(".pin-box");
      if (box) {
        if (item.zoneId === ui3d.activeZoneId) {
          box.style.backgroundColor = "#B8292F";
          box.style.borderColor = "#FFD700";
        } else {
          box.style.backgroundColor = "rgba(20,20,19,0.88)";
          box.style.borderColor = "rgba(212,175,55,0.75)";
        }
      }
    });
  }

  function bindScrollyObserver(rtState) {
    if (rtState.io) {
      rtState.io.disconnect();
      rtState.io = null;
    }
    if (rtState.jumpIo) {
      rtState.jumpIo.disconnect();
      rtState.jumpIo = null;
    }
    if (typeof IntersectionObserver === "undefined") return;
    const cards = Array.from(document.querySelectorAll(".fc3d-scrolly-card[data-fc3d-card-idx]"));
    if (cards.length) {
      const io = new IntersectionObserver(
        (entries) => {
          if (Date.now() < scrollPauseUntil) return;
          const visible = entries.filter((en) => en.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
          if (!visible.length) return;
          const idx = Number(visible[0].target.getAttribute("data-fc3d-card-idx"));
          if (!Number.isFinite(idx) || idx === ui3d.activeChapterIdx) return;
          const ch = SCROLLY_CHAPTERS[idx];
          if (!ch) return;
          ui3d.activeChapterIdx = idx;
          ui3d.dissectionState = ch.stateMode;
          ui3d.explodePercent = ch.stateMode === "xray" ? 78 : 0;
          ui3d.activeZoneId = ch.zoneId;
          ui3d.autoOrbit = false;
          flyCamera(ch.camPos, ch.lookAt);
          updateDissectionVisuals();
          syncStageUiInPlace();
        },
        { threshold: [0.52, 0.72] }
      );
      cards.forEach((c) => io.observe(c));
      rtState.io = io;
    }

    const secEls = ["fc3d-sec-01", "fc3d-sec-02", "fc3d-sec-03", "fc3d-sec-04", "fc3d-sec-05", "fc3d-sec-06"]
      .map((sid) => document.getElementById(sid))
      .filter(Boolean);
    if (secEls.length) {
      const jumpIo = new IntersectionObserver(
        (entries) => {
          const hit = entries
            .filter((en) => en.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!hit || !hit.target || !hit.target.id) return;
          const sid = hit.target.id;
          if (sid === ui3d.activeJumpSec) return;
          ui3d.activeJumpSec = sid;
          document.querySelectorAll('.fc3d-jump-btn[data-action="fc3d-jump-sec"]').forEach((btn) => {
            btn.classList.toggle("active", btn.getAttribute("data-target") === sid);
          });
        },
        { rootMargin: "-135px 0px -55% 0px", threshold: [0.05, 0.25] }
      );
      secEls.forEach((el) => jumpIo.observe(el));
      rtState.jumpIo = jumpIo;
    }
  }

  function renderSvgIsometricFallback(container, en) {
    if (!container) return;
    const zCur = FORBIDDEN_CITY_ZONES.find((z) => z.id === ui3d.activeZoneId) || FORBIDDEN_CITY_ZONES[0];
    const zoneName = en ? (zCur.nameEn || zCur.titleEn || "Meridian Gate") : (zCur.nameVi || zCur.titleVi || "Ngọ Môn");
    const explodeShift = Math.round((ui3d.explodePercent || 0) * 0.24);
    container.innerHTML = `
      <div style="width:100%;height:100%;min-height:380px;display:flex;flex-direction:column;justify-content:center;align-items:center;gap:0.85rem;padding:1.25rem;background:#101216;color:#F7F4ED;">
        <svg viewBox="0 0 760 360" width="100%" style="max-height:310px;border:1px solid rgba(217,155,38,0.35);background:#15181F;display:block;" role="img" aria-label="Isometric Architectural Cutaway of the Forbidden City">
          <line x1="60" y1="190" x2="700" y2="190" stroke="#D99B26" stroke-width="1.5" stroke-dasharray="5 4" opacity="0.65" />
          <rect x="82" y="160" width="44" height="60" fill="#2A1B18" stroke="#D99B26" stroke-width="1.5" />
          <text x="104" y="238" fill="#E8D2A0" font-size="10" text-anchor="middle">001</text>
          <rect x="148" y="168" width="42" height="44" fill="#182B27" stroke="#1F6E5C" stroke-width="1.5" />
          <text x="169" y="238" fill="#9EE6D3" font-size="10" text-anchor="middle">002</text>
          <polygon points="215,180 335,180 325,212 225,212" fill="#E6DFD3" stroke="#D99B26" stroke-width="1.2" />
          <rect x="232" y="${132 - explodeShift}" width="86" height="46" fill="#9E2A2B" stroke="#D99B26" stroke-width="2" />
          <polygon points="222,${132 - explodeShift} 275,${102 - explodeShift} 328,${132 - explodeShift}" fill="#D99B26" />
          <text x="275" y="238" fill="#FDE68A" font-size="11" font-weight="700" text-anchor="middle">003 · THÁI HÒA</text>
          <rect x="352" y="156" width="54" height="54" fill="#2A1B18" stroke="#D99B26" stroke-width="1.4" />
          <text x="379" y="238" fill="#E8D2A0" font-size="10" text-anchor="middle">004–005</text>
          <rect x="425" y="162" width="56" height="48" fill="#2A1B18" stroke="#D99B26" stroke-width="1.4" />
          <text x="453" y="238" fill="#E8D2A0" font-size="10" text-anchor="middle">006</text>
          <rect x="502" y="152" width="60" height="58" fill="#5E1518" stroke="#FF6B5B" stroke-width="2" />
          <text x="532" y="238" fill="#FCA5A5" font-size="10" font-weight="700" text-anchor="middle">008 · DƯỠNG TÂM</text>
          <rect x="220" y="252" width="340" height="16" fill="#1F6E5C" opacity="0.82" stroke="#9EE6D3" />
          <text x="390" y="264" fill="#F7F4ED" font-size="9.5" font-weight="700" text-anchor="middle">15-LAYER INTERLOCKING BRICK FOUNDATION (横七竖八)</text>
          <rect x="585" y="160" width="90" height="50" fill="#1F242D" stroke="#3B4D7A" stroke-width="1.5" />
          <text x="630" y="238" fill="#CBD5E1" font-size="10" text-anchor="middle">009–010 · BẮC MÔN</text>
        </svg>
        <div style="font-size:0.8rem;color:#E5E0D7;text-align:center;line-height:1.45;padding:0.35rem 0.65rem;border:1px solid rgba(215,186,129,0.28);background:rgba(20,18,16,0.9);">
          ${en ? `SVG Architectural Isometric Mode · Active Zone ${zCur.code}: ${zoneName}` : `Chế độ Mặt cắt Kiến trúc SVG · Phân khu ${zCur.code}: ${zoneName}`}
        </div>
      </div>
    `;
  }

  function mountCanvas(containerId, pinsId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const curLang = (window.CCE_STORE && window.CCE_STORE.getState().uiLang) || "vi";
    const isEnPin = curLang === "en";
    if (typeof THREE === "undefined") {
      renderSvgIsometricFallback(container, isEnPin);
      return;
    }

    if (rt) {
      try {
        if (rt.rafId) cancelAnimationFrame(rt.rafId);
        if (rt.ro) rt.ro.disconnect();
        if (rt.io) rt.io.disconnect();
        if (rt.jumpIo) rt.jumpIo.disconnect();
        if (rt.renderer) {
          if (rt.renderer.forceContextLoss) rt.renderer.forceContextLoss();
          rt.renderer.dispose();
        }
      } catch {}
      rt = null;
    }

    container.innerHTML = "";
    const w = Math.max(240, container.clientWidth || 340);
    const h = Math.max(280, container.clientHeight || 420);

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

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
    } catch (_webglErr) {
      renderSvgIsometricFallback(container, isEnPin);
      return;
    }
    renderer.setSize(w, h, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.domElement.addEventListener("webglcontextlost", (ev) => {
      ev.preventDefault();
      renderSvgIsometricFallback(container, isEnPin);
    });
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
        const pinLabel = (isEnPin ? z.nameEn : z.nameVi).split("(")[0].split("·")[0].split("&")[0].trim();
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
      hemiLight,
      sunLight,
      rimLight,
      gridHelper,
      fcRootGroup,
      zoneMeshMap,
      explodableMeshes,
      explodeCurrent: Number(ui3d.explodePercent || 0) / 100,
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
      io: null,
      jumpIo: null,
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

    let roRaf = null;
    const ro = new ResizeObserver(() => {
      if (roRaf) cancelAnimationFrame(roRaf);
      roRaf = requestAnimationFrame(() => {
        if (!container.isConnected || !rt) return;
        const nw = Math.max(240, container.clientWidth);
        const nh = Math.max(260, container.clientHeight);
        rt.camera.aspect = nw / nh;
        rt.camera.updateProjectionMatrix();
        rt.renderer.setSize(nw, nh, false);
        updatePinPositions(container);
      });
    });
    ro.observe(container);
    rt.ro = ro;
    bindScrollyObserver(rtState);

    applyLightingPreset();
    updateDissectionVisuals();

    // Sync initial roof elevation at mount
    rtState.explodableMeshes.forEach((mesh) => {
      if (mesh.userData && typeof mesh.userData.baseY === "number") {
        const mult = mesh.userData.explodeMult || 1.0;
        mesh.position.y = mesh.userData.baseY + rtState.explodeCurrent * 14 * mult;
      }
    });

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
      const targetExplode = Number(ui3d.explodePercent || 0) / 100;
      if (Math.abs(rt.explodeCurrent - targetExplode) > 0.001) {
        rt.explodeCurrent += (targetExplode - rt.explodeCurrent) * 0.14;
        rt.explodableMeshes.forEach((mesh) => {
          if (mesh.userData && typeof mesh.userData.baseY === "number") {
            const mult = mesh.userData.explodeMult || 1.0;
            mesh.position.y = mesh.userData.baseY + rt.explodeCurrent * 14 * mult;
          }
        });
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
      <div style="font-size:0.64rem;font-weight:800;letter-spacing:0.07em;color:#D7BA81;text-transform:uppercase;">
        ${zone.code} · <span class="hanzi">${zone.hanzi}</span>
      </div>
      <div style="font-family:var(--font-editorial);font-size:0.96rem;font-weight:700;margin:0.12rem 0 0.18rem;color:#FFFFFF;line-height:1.25;">
        ${en ? zone.nameEn : zone.nameVi}
      </div>
      <div style="font-size:0.72rem;color:#F3D999;margin-bottom:0.35rem;line-height:1.35;">
        ${en ? zone.areaOrScaleEn : zone.areaOrScaleVi}
      </div>
      <div style="display:flex;gap:0.32rem;flex-wrap:wrap;">
        ${zone.vocab ? `
          <button type="button" class="fc3d-pill" style="background:#9E2A2B;border-color:#D7BA81;padding:0.24rem 0.52rem;font-size:0.7rem;" data-action="fc3d-save-vocab" data-zone="${zone.id}">
            + ${en ? "Save Term" : "Lưu Thuật ngữ"}
          </button>
        ` : ""}
        <a href="${zone.sourceUrl}" target="_blank" rel="noopener noreferrer" class="fc3d-pill" style="text-decoration:none;padding:0.24rem 0.52rem;font-size:0.7rem;">
          ${en ? "Source ↗" : "Tư liệu ↗"}
        </a>
      </div>
    `;
  }

  function renderStageMarkup(lang, tall, isScrolly) {
    const en = lang === "en";
    const canvasId = tall ? "fc3d-canvas-monograph" : "fc3d-canvas-home";
    const pinsId = tall ? "fc3d-pins-monograph" : "fc3d-pins-home";
    const lightLabel = ui3d.lightingPreset === 0
      ? (en ? "Day Studio" : "Ban Ngày")
      : ui3d.lightingPreset === 1
      ? (en ? "Dusk" : "Hoàng Hôn")
      : (en ? "Night CAD" : "Sa bàn Đêm");
    const wrapClass = isScrolly ? "fc3d-canvas-wrap fc3d-canvas-scrolly" : (tall ? "fc3d-canvas-wrap fc3d-canvas-tall" : "fc3d-canvas-wrap");

    return `
      <div class="fc3d-stage-shell" data-fc3d-mount="${canvasId}" data-fc3d-pins="${pinsId}">
        <div class="fc3d-mode-bar" role="group" aria-label="${en ? "3D Dissection Modes" : "3 Chế độ Giải phẫu 3D"}">
          <button type="button" class="fc3d-pill ${ui3d.dissectionState === "plan" ? "active" : ""}" data-action="fc3d-set-state" data-state="plan">
            ${en ? "[1] Canonical (9,999)" : "[1] Quy Chế Điển Lễ (9.999)"}
          </button>
          <button type="button" class="fc3d-pill ${ui3d.dissectionState === "actual" ? "active" : ""}" data-action="fc3d-set-state" data-state="actual">
            ${en ? "[2] Reality & Wireframe (8,707)" : "[2] Thực Tế & Khung Dây (8.707)"}
          </button>
          <button type="button" class="fc3d-pill ${ui3d.dissectionState === "xray" ? "active" : ""}" data-action="fc3d-set-state" data-state="xray">
            ${en ? "[3] X-Ray Dougong" : "[3] Bóc Tách X-Ray Đấu Củng"}
          </button>
        </div>

        <div class="${wrapClass}">
          <div id="${canvasId}" style="width:100%;height:100%;"></div>
          <div id="${pinsId}" style="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:5;"></div>

          <div class="fc3d-hud-top-left" aria-label="${en ? "3D Viewport Utilities" : "Công cụ Khung nhìn 3D"}">
            <span class="fc3d-hud-badge">紫禁城 · WebGL</span>
            <button type="button" class="fc3d-pill ${ui3d.autoOrbit ? "active" : ""}" data-action="fc3d-toggle-orbit">
              ${ui3d.autoOrbit ? (en ? "Orbit: ON" : "Tự Xoay: BẬT") : (en ? "Orbit: OFF" : "Tự Xoay: TẮT")}
            </button>
            <button type="button" class="fc3d-pill ${ui3d.showPins ? "active" : ""}" data-action="fc3d-toggle-pins">
              ${ui3d.showPins ? (en ? "Pins: ON" : "Nhãn 3D: BẬT") : (en ? "Pins: OFF" : "Nhãn 3D: TẮT")}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cycle-light">${lightLabel}</button>
          </div>

          <div class="fc3d-hud-bottom-right" aria-label="${en ? "Camera Angles & Zoom" : "Góc máy Camera & Thu phóng"}">
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="closeup">
              ${en ? "Taihedian" : "Thái Hòa"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="subsurface">
              ${en ? "15-Layer" : "Móng 15 lớp"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="south">
              ${en ? "Meridian Gate" : "Ngọ Môn"}
            </button>
            <button type="button" class="fc3d-pill" data-action="fc3d-cam-preset" data-preset="iso">
              ${en ? "Isometric" : "Phối cảnh"}
            </button>
            <button type="button" class="fc3d-pill fc3d-zoom-btn" data-action="fc3d-zoom" data-dir="in" title="Zoom In">+</button>
            <button type="button" class="fc3d-pill fc3d-zoom-btn" data-action="fc3d-zoom" data-dir="out" title="Zoom Out">−</button>
          </div>

          <div class="fc3d-overlay-hud">
            ${renderStageHudHtml(en)}
          </div>
        </div>

        <div class="fc3d-legend-bar" aria-label="${en ? "4-Color Semantic Legend" : "Chú giải 4 Mã màu Học thuật"}">
          <span class="fc3d-legend-item">
            <span class="fc3d-legend-swatch" style="background:#D99B26;"></span>
            <span>${en ? "Gold: Canonical Axis" : "Vàng Lưu Ly: Trục Quy chế"}</span>
          </span>
          <span class="fc3d-legend-item">
            <span class="fc3d-legend-swatch" style="background:#C83228;"></span>
            <span>${en ? "Cinnabar: 1723 Shift / Focus" : "Đỏ Chu Sa: Dịch chuyển 1723 & Tâm điểm"}</span>
          </span>
          <span class="fc3d-legend-item">
            <span class="fc3d-legend-swatch" style="background:#1F6E5C;"></span>
            <span>${en ? "Jade: Dougong & 15-Layer Base" : "Xanh Ngọc Bích: Kháng chấn & Móng 15 lớp"}</span>
          </span>
          <span class="fc3d-legend-item">
            <span class="fc3d-legend-swatch" style="background:#3B4D7A;"></span>
            <span>${en ? "Hue Indigo: Hue Citadel" : "Lam Pháp Lam: Đại Nội Huế"}</span>
          </span>
        </div>

        <div class="fc3d-xray-bar">
          <label for="fc3d-explode-${tall ? "m" : "h"}" style="font-weight:700;color:#D7BA81;white-space:nowrap;">
            ${en ? `Roof & Dougong Lift (${ui3d.explodePercent}%)` : `Thanh Bóc tách Mái & Đấu Củng (${ui3d.explodePercent}%)`}
          </label>
          <input id="fc3d-explode-${tall ? "m" : "h"}" type="range" min="0" max="100" value="${ui3d.explodePercent}" data-action="fc3d-explode" style="flex:1;min-width:120px;accent-color:#B8292F;" />
          <span style="font-size:0.72rem;color:#B9B2A8;white-space:nowrap;">
            ${en ? "Drag 360° · Wheel zoom · Click pins" : "Kéo xoay 360° · Cuộn Zoom · Bấm nhãn 3D"}
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
    document.querySelectorAll('.fc3d-scrolly-card[data-fc3d-card-idx]').forEach((card) => {
      card.classList.toggle("active", Number(card.getAttribute("data-fc3d-card-idx")) === ui3d.activeChapterIdx);
    });
    const orbitBtn = shell.querySelector('[data-action="fc3d-toggle-orbit"]');
    if (orbitBtn) {
      orbitBtn.classList.toggle("active", ui3d.autoOrbit);
      orbitBtn.textContent = ui3d.autoOrbit ? (en ? "Orbit: ON" : "Tự Xoay: BẬT") : (en ? "Orbit: OFF" : "Tự Xoay: TẮT");
    }
    const pinsBtn = shell.querySelector('[data-action="fc3d-toggle-pins"]');
    if (pinsBtn) {
      pinsBtn.classList.toggle("active", ui3d.showPins);
      pinsBtn.textContent = ui3d.showPins ? (en ? "Pins: ON" : "Nhãn 3D: BẬT") : (en ? "Pins: OFF" : "Nhãn 3D: TẮT");
    }
    const lightBtn = shell.querySelector('[data-action="fc3d-cycle-light"]');
    if (lightBtn) {
      lightBtn.textContent = ui3d.lightingPreset === 0
        ? (en ? "Day Studio" : "Ban Ngày")
        : ui3d.lightingPreset === 1
        ? (en ? "Dusk" : "Hoàng Hôn")
        : (en ? "Night CAD" : "Sa bàn Đêm");
    }
    const slider = shell.querySelector('[data-action="fc3d-explode"]');
    if (slider) slider.value = String(ui3d.explodePercent);
    const sliderLbl = shell.querySelector(".fc3d-xray-bar label");
    if (sliderLbl) {
      sliderLbl.textContent = en ? `Roof & Dougong Lift (${ui3d.explodePercent}%)` : `Thanh Bóc tách Mái & Đấu Củng (${ui3d.explodePercent}%)`;
    }
    const hud = shell.querySelector(".fc3d-overlay-hud");
    if (hud) hud.innerHTML = renderStageHudHtml(en);
    return true;
  }

  function renderForbiddenCityPhotoStrip(en) {
    const photos = [
      {
        src: "assets/images/museum/forbidden-city-imperial-axis-gate.jpg",
        titleVi: "Cổng Son 81 Đinh Đồng & Trục Thái Hòa",
        titleEn: "81-Stud Crimson Gate & Axis",
        credit: "Forbidden City Archival Collection"
      },
      {
        src: "assets/images/museum/forbidden-city-jingshan-panorama.webp",
        titleVi: "Toàn cảnh Trục Nam–Bắc từ Cảnh Sơn",
        titleEn: "Jingshan Panorama Over Rooftops",
        credit: "Forbidden City Architectural View"
      },
      {
        src: "assets/images/museum/forbidden-city-crimson-gate-terrace.jpg",
        titleVi: "Cửa Son, Đường Ngự Đạo & Tam Đài Bạch Ngọc",
        titleEn: "Sacred Approach & White Marble Terrace",
        credit: "Forbidden City Archival View"
      },
      {
        src: "assets/images/museum/forbidden-city-autumn-ginkgo-moat.jpg",
        titleVi: "Hào Nước Hộ Thành & Ngân Hạnh Mùa Thu",
        titleEn: "Palace Moat & Autumn Ginkgo Framing",
        credit: "Forbidden City Seasonal View"
      }
    ];
    return `
      <div style="margin-top:0.85rem;">
        <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;color:#B8292F;margin-bottom:0.45rem;">
          ${en ? "ARCHIVAL PHOTOGRAPHIC REFERENCE GALLERY · CLICK ANY PLATE TO INSPECT" : "BỘ ẢNH THỰC TẾ TỬ CẤM THÀNH ĐỐI CHIẾU · NHẤN ĐỂ PHÓNG TO CHI TIẾT"}
        </div>
        <div class="grid grid-4" style="gap:0.65rem;">
          ${photos.map((ph) => `
            <button
              type="button"
              class="card interactive"
              style="padding:0;overflow:hidden;text-align:left;cursor:pointer;border:1px solid var(--hairline);background:var(--bg-surface);"
              data-action="open-custom-image"
              data-src="${ph.src}"
              data-caption="${en ? ph.titleEn : ph.titleVi}"
              data-credit="${ph.credit}"
            >
              <div style="aspect-ratio:16/10;width:100%;overflow:hidden;background:#141210;">
                <img src="${ph.src}" alt="${en ? ph.titleEn : ph.titleVi}" loading="lazy" style="width:100%;height:100%;object-fit:cover;display:block;" />
              </div>
              <div style="padding:0.45rem 0.6rem;font-size:0.76rem;font-weight:700;color:var(--ink-primary);line-height:1.3;">
                ${en ? ph.titleEn : ph.titleVi}
              </div>
            </button>
          `).join("")}
        </div>
      </div>
    `;
  }

  function renderHomeSection(lang) {
    const en = lang === "en";
    return `
      <section class="fc3d-section" id="home-3d-emblem" aria-label="${en ? "Forbidden City 3D Emblem Showcase" : "Biểu tượng Kiến trúc 3D Tử Cấm Thành"}">
        <div class="container">
          <div class="ed-section-head">
            <div>
              <div class="ed-meta-line" style="color:#B8292F;margin-bottom:0.25rem;">
                ${en ? "CENTRAL ARCHITECTURAL EMBLEM · ZIJINCHENG (960M × 750M)" : "BIỂU TƯỢNG KIẾN TRÚC TRUNG TÂM · TỬ CẤM THÀNH (紫禁城) 960M × 750M"}
              </div>
              <h2 class="ed-h2">${en ? "Interactive 3D Forbidden City Dissection & Hue Citadel Comparison" : "Giải phẫu 3D Tử Cấm Thành (8 Chương Tương tác): Quy chế, Đấu Củng & Đối Sánh Cố Đô Huế"}</h2>
              <p style="margin:0.35rem 0 0;color:var(--text-secondary);max-width:74ch;font-size:0.93rem;">
                ${en
                  ? "Toggle Canonical Blueprint vs. Archaeological Reality Wireframe (showing the 1723 power shift to Yangxindian), lift roofs into X-Ray Dougong view, and explore 15 subsurface plaza layers alongside Hue Imperial Citadel."
                  : "Chuyển đổi tức thì giữa Quy chế Điển lễ (9.999,5 gian), Thực tế Khảo cổ Khung dây (8.707 gian nền & cú dịch chuyển năm 1723 sang Dưỡng Tâm Điện), bóc tách X-Ray Đấu Củng và xem mặt cắt móng 15 lớp gạch Kim chuyên."}
              </p>
            </div>
            <button type="button" class="ed-btn-primary" data-action="open-article" data-id="forbidden-city-3d-dissection">
              ${en ? "Open Full 6-Section 3D Treatise →" : "Mở Chuyên luận Giải phẫu 6 Phần Đầy đủ →"}
            </button>
          </div>
          ${renderStageMarkup(lang, false, false)}
          ${renderForbiddenCityPhotoStrip(en)}
        </div>
      </section>
    `;
  }

  function renderMonographPage(lang) {
    const en = lang === "en";
    const filteredTimeline = ui3d.activeTimelinePhase === "all"
      ? TIMELINE_EVENTS
      : TIMELINE_EVENTS.filter((e) => e.phase === ui3d.activeTimelinePhase);

    const jumpTabs = [
      { id: "fc3d-sec-01", vi: "01. ĐẶT VẤN ĐỀ", en: "01. HYPOTHESIS & KPI" },
      { id: "fc3d-sec-02", vi: "02. GIẢI PHẪU 3D (01–08)", en: "02. 3D SCROLLYTELLING (8)" },
      { id: "fc3d-sec-03", vi: "03. BẢNG ĐỐI CHIẾU ĐA THANG", en: "03. MULTI-SCALE BARS" },
      { id: "fc3d-sec-04", vi: "04. BIÊN NIÊN SỬ 3 GIAI ĐOẠN", en: "04. 3-STAGE TIMELINE" },
      { id: "fc3d-sec-05", vi: "05. ĐỐI SÁNH CỐ ĐÔ HUẾ", en: "05. HUE CITADEL MATCH" },
      { id: "fc3d-sec-06", vi: "06. MA TRẬN CƠ CHẾ & THỰC ĐỊA", en: "06. SYNTHESIS & FIELD" }
    ];

    return `
      <div class="fc3d-monograph-wrap" id="fc3d-monograph-root">
        <!-- Sticky 1px Section Jump Bar -->
        <nav class="fc3d-jump-bar" id="fc3d-jump-bar" aria-label="${en ? "Monograph Sections" : "Điều hướng 6 Phần Giải phẫu"}">
          ${jumpTabs.map((jt) => `
            <button type="button" class="fc3d-jump-btn ${ui3d.activeJumpSec === jt.id ? "active" : ""}" data-action="fc3d-jump-sec" data-target="${jt.id}">
              ${en ? jt.en : jt.vi}
            </button>
          `).join("")}
        </nav>

        <!-- SECTION 1: INVESTIGATIVE MASTHEAD, SAPO & 4-COLUMN KPI CONTRAST STRIP -->
        <section id="fc3d-sec-01" class="fc3d-masthead-box">
          <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;">
            <span class="fc3d-tag-red">${en ? "SPECIAL 3D ARCHITECTURAL DISSECTION" : "CHUYÊN LUẬN GIẢI PHẪU 3D ĐẶC BIỆT"}</span>
            <span class="hanzi" style="font-size:0.84rem;color:var(--text-muted);font-weight:600;">紫禁城三维解剖与顺化皇城对比研究</span>
          </div>
          <p class="fc3d-sapo-lead">
            ${en
              ? "Planned in 1406 under Emperor Yongle as an inviolable spatial symbol of Heavenly Mandate—immortalized in folklore with <strong>9,999.5 bays</strong> and strict Front-Court / Rear-Residence rules—field measurements by the Palace Museum in 1973 proved the Forbidden City actually holds <strong>8,707 base floor bays (8,886 total bays including upper gallery pavilions &amp; corner towers)</strong>. More strikingly, for the last 200 years of the Qing Dynasty (1723–1911), real imperial rule shifted off the 2,377 m² Hall of Supreme Harmony onto the compact <strong>~5,000 m² Yangxindian &amp; Grand Council wing</strong> on the western flank."
              : "Được quy hoạch từ năm 1406 dưới thời Minh Thành Tổ Chu Đệ như biểu tượng bất khả xâm phạm của thiên mệnh với truyền thuyết <strong>9.999,5 gian phòng</strong> và nguyên tắc <em>Tiền Triều Hậu Thị</em>, nhưng đợt khảo sát thực địa từng gian năm 1973 của Bảo tàng Cố Cung (Vu Trác Vân chủ trì) xác định Tử Cấm Thành thực tế có <strong>8.707 gian nền thực địa (8.886 tổng số gian tính cả lầu gác và Giác Lâu)</strong>. Đáng chú ý hơn, suốt gần 200 năm cuối triều Thanh từ năm 1723, trung tâm quyền lực thực sự không còn nằm ở Điện Thái Hòa rộng 2.377 m² trên trục chính, mà dịch chuyển hoàn toàn sang cụm <strong>Dưỡng Tâm Điện và Quân Cơ Xứ (~5.000 m²)</strong> ở góc Tây."}
          </p>
          <div class="fc3d-kpi-strip">
            <div class="fc3d-kpi-cell">
              <div style="font-size:0.7rem;font-weight:800;letter-spacing:0.06em;color:var(--text-muted);">${en ? "01. PALACE BAYS REALITY" : "01. QUY MÔ GIAN PHÒNG"}</div>
              <div class="fc3d-kpi-num">9.999,5 → 8.707 / 8.886</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);">${en ? "8,707 ground bays (8,886 total with upper corner towers)" : "8.707 gian nền thực địa (8.886 tổng gian tính cả lầu gác)"}</div>
            </div>
            <div class="fc3d-kpi-cell">
              <div style="font-size:0.7rem;font-weight:800;letter-spacing:0.06em;color:var(--text-muted);">${en ? "02. DE FACTO POWER SHIFT" : "02. TRỌNG TÂM QUYỀN LỰC"}</div>
              <div class="fc3d-kpi-num" style="color:#B8292F;">35.000 m² → ~5.000 m²</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);">${en ? "From 1723: 0.7% of area (Yangxindian) ruled empire" : "Từ 1723: Dưỡng Tâm Điện & Quân Cơ Xứ (0,7% Cố Cung)"}</div>
            </div>
            <div class="fc3d-kpi-cell">
              <div style="font-size:0.7rem;font-weight:800;letter-spacing:0.06em;color:var(--text-muted);">${en ? "03. SEISMIC ENDURANCE" : "03. KỶ LỤC KHÁNG CHẤN"}</div>
              <div class="fc3d-kpi-num" style="color:#1F6E5C;">${en ? "0 Nails · 300+ Quakes" : "0 Đinh sắt · 300+ Động đất"}</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);">${en ? "Dougong + plinths survived 1679 M7.8 earthquake" : "Đấu Củng & cột đặt nổi vượt qua trận 7,8 Richter (1679)"}</div>
            </div>
            <div class="fc3d-kpi-cell">
              <div style="font-size:0.7rem;font-weight:800;letter-spacing:0.06em;color:var(--text-muted);">${en ? "04. BEIJING vs HUE SCALE" : "04. ĐỐI SÁNH TRUNG – VIỆT"}</div>
              <div class="fc3d-kpi-num" style="color:#3B4D7A;">72,4 ha ⇄ 36 ha (Huế)</div>
              <div style="font-size:0.78rem;color:var(--text-secondary);">${en ? "Core Forbidden City vs 1805 Hue Citadel (520 ha outer)" : "Cố Cung Bắc Kinh vs Hoàng Thành Huế 1805 (Kinh thành 520 ha)"}</div>
            </div>
          </div>
        </section>

        <!-- SECTION 2: WIDE 12-COLUMN SPLIT-SCREEN STICKY 3D ENGINE (66%) + 8 SCROLLYTELLING CHAPTERS (34%) -->
        <section id="fc3d-sec-02" class="fc3d-sec02-wide">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.5rem;margin-bottom:0.85rem;">
            <div>
              <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:#B8292F;">${en ? "SECTION 02 · INTERACTIVE 3D SCROLLYTELLING ENGINE" : "PHẦN 02 · MÔ HÌNH 3D TƯƠNG TÁC & 8 CHƯƠNG GIẢI PHẪU"}</div>
              <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">
                ${en ? "Scroll Story Cards or Click Zone Pins to Trigger Ghost Wireframe & X-Ray Modes" : "Cuộn Thẻ Câu Chuyện hoặc Chọn Chế Độ Khung Dây [2] / X-Ray [3] để Đối Chiếu Trực Tiếp"}
              </h3>
            </div>
          </div>

          <div class="fc3d-split-scrolly">
            <div class="fc3d-sticky-stage">
              ${renderStageMarkup(lang, true, true)}
            </div>
            <div class="fc3d-scrolly-column">
              ${SCROLLY_CHAPTERS.map((ch, idx) => `
                <article class="fc3d-scrolly-card ${ui3d.activeChapterIdx === idx ? "active" : ""}" data-fc3d-card-idx="${idx}">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:0.5rem;font-size:0.7rem;font-weight:800;letter-spacing:0.08em;color:#B8292F;" class="fc3d-mono">
                    <span style="white-space:nowrap;">${en ? `CHAPTER ${ch.step}/08` : `CHƯƠNG ${ch.step}/08`}</span>
                    <span class="fc3d-chapter-tag">${en ? ch.tagEn : ch.tagVi}</span>
                  </div>
                  <h4 style="font-family:var(--font-editorial);font-size:1.08rem;margin:0.35rem 0 0.45rem;color:var(--ink-primary);">
                    ${en ? ch.titleEn : ch.titleVi}
                  </h4>
                  <div class="fc3d-pill-compare">
                    <div class="fc3d-pill-col statute">
                      <div style="font-size:0.65rem;font-weight:800;color:#9A6700;letter-spacing:0.05em;">${en ? ch.statuteLabelEn : ch.statuteLabelVi}</div>
                      <div style="margin-top:0.2rem;color:var(--ink-primary);">${en ? ch.statuteValEn : ch.statuteValVi}</div>
                    </div>
                    <div class="fc3d-pill-col reality">
                      <div style="font-size:0.65rem;font-weight:800;color:#B8292F;letter-spacing:0.05em;">${en ? ch.realityLabelEn : ch.realityLabelVi}</div>
                      <div style="margin-top:0.2rem;color:var(--ink-primary);font-weight:600;">${en ? ch.realityValEn : ch.realityValVi}</div>
                    </div>
                  </div>
                  <p style="font-size:0.84rem;line-height:1.58;color:var(--text-secondary);margin:0 0 0.5rem;">
                    ${en ? ch.bodyEn : ch.bodyVi}
                  </p>
                  <div style="font-size:0.78rem;line-height:1.48;color:#1F6E5C;padding:0.45rem 0.55rem;background:var(--bg-surface);border-left:2px solid #3B4D7A;margin-bottom:0.6rem;">
                    ${en ? ch.vnLensEn : ch.vnLensVi}
                  </div>
                  <div style="display:flex;gap:0.4rem;flex-wrap:wrap;">
                    <button type="button" class="fc3d-pill" style="background:#171512;border-color:#D7BA81;" data-action="fc3d-select-chapter" data-idx="${idx}">
                      ${en ? "Focus Camera" : "Xoay tới vị trí"}
                    </button>
                    <button type="button" class="fc3d-pill" style="background:#1F6E5C;border-color:#1F6E5C;" data-action="fc3d-chapter-xray" data-idx="${idx}">
                      ${en ? "Peel X-Ray Layer" : "Bóc lớp X-Ray"}
                    </button>
                  </div>
                </article>
              `).join("")}
            </div>
          </div>

          ${renderForbiddenCityPhotoStrip(en)}
        </section>

        <!-- SECTION 3: MULTI-SCALE HORIZONTAL BAR COMPARISON TABLE -->
        <section id="fc3d-sec-03">
          <div style="margin-bottom:0.75rem;">
            <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:#B8292F;">${en ? "SECTION 03 · MULTI-SCALE QUANTITATIVE CONTRAST TABLE" : "PHẦN 03 · BẢNG GIẢI PHẪU ĐỊNH LƯỢNG ĐA THANG (3 CHIỀU ĐỐI SÁNH)"}</div>
            <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">
              ${en ? "Imperial Statute vs. Beijing Archaeological Survey vs. Hue Imperial Citadel" : "So sánh Quy chế / Truyền thuyết — Thực tế Cố Cung Bắc Kinh — Đại Nội Huế"}
            </h3>
          </div>
          <div class="fc3d-table-wrap">
            <table class="fc3d-multiscale-table">
              <thead>
                <tr>
                  <th style="width:20%;">${en ? "METRIC" : "CHỈ SỐ GIẢI PHẪU"}</th>
                  <th style="width:24%;">${en ? "CANON / MYTH (#D99B26)" : "QUY CHẾ / TRUYỀN THUYẾT"}</th>
                  <th style="width:28%;">${en ? "ARCHAEOLOGICAL REALITY (#B8292F)" : "THỰC TẾ KHẢO CỔ BẮC KINH"}</th>
                  <th style="width:28%;">${en ? "HUE CITADEL PARALLEL (#3B4D7A)" : "ĐỐI SÁNH ĐẠI NỘI HUẾ"}</th>
                </tr>
              </thead>
              <tbody>
                ${MULTISCALE_COMPARISON_ROWS.map((row) => `
                  <tr>
                    <td><strong>${en ? row.metricEn : row.metricVi}</strong></td>
                    <td>
                      <div style="margin-bottom:0.3rem;">${en ? row.statuteValEn : row.statuteValVi}</div>
                      <div class="fc3d-bar-track"><div class="fc3d-bar-fill" style="width:${row.statutePct}%;background:#D99B26;"></div></div>
                    </td>
                    <td>
                      <div style="margin-bottom:0.3rem;font-weight:600;color:var(--ink-primary);">${en ? row.realityValEn : row.realityValVi}</div>
                      <div class="fc3d-bar-track"><div class="fc3d-bar-fill" style="width:${row.realityPct}%;background:#B8292F;"></div></div>
                    </td>
                    <td>
                      <div style="margin-bottom:0.3rem;color:var(--text-secondary);">${en ? row.hueValEn : row.hueValVi}</div>
                      <div class="fc3d-bar-track"><div class="fc3d-bar-fill" style="width:${row.huePct}%;background:#3B4D7A;"></div></div>
                    </td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          </div>
        </section>

        <!-- SECTION 4: 3-STAGE HISTORICAL CHRONOLOGY TIMELINE -->
        <section id="fc3d-sec-04">
          <div style="display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:0.75rem;margin-bottom:0.85rem;">
            <div>
              <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:#B8292F;">${en ? "SECTION 04 · 3-STAGE TIMELINE (1406–1973–2026)" : "PHẦN 04 · DÒNG THỜI GIAN 600 NĂM KIẾN TẠO & BIẾN ĐỔI (GĐ1 – GĐ2 – GĐ3)"}</div>
              <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">
                ${en ? "Why the Surviving Palace Differs from the 1420 Blueprint" : "Giải mã Vì sao Tử Cấm Thành Hiện tại Khác Bản Vẽ Gốc Năm 1420"}
              </h3>
            </div>
            <div style="display:flex;gap:0.3rem;flex-wrap:wrap;">
              <button type="button" class="fc3d-jump-btn ${ui3d.activeTimelinePhase === "all" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="all">${en ? "All (8 Milestones)" : "Tất cả (8 mốc)"}</button>
              <button type="button" class="fc3d-jump-btn ${ui3d.activeTimelinePhase === "P1" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P1">${en ? "GĐ1 · 1406–1420 Ming" : "GĐ1 · Kiến tạo Vĩnh Lạc"}</button>
              <button type="button" class="fc3d-jump-btn ${ui3d.activeTimelinePhase === "P2" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P2">${en ? "GĐ2 · 1421–1695 Fires" : "GĐ2 · Hỏa hoạn & Thu nhỏ"}</button>
              <button type="button" class="fc3d-jump-btn ${ui3d.activeTimelinePhase === "P3" ? "active" : ""}" data-action="fc3d-set-phase" data-phase="P3">${en ? "GĐ3 · 1723–2026 Shift" : "GĐ3 · Dịch chuyển & 1973"}</button>
            </div>
          </div>
          <div class="grid grid-2" style="gap:0.85rem;">
            ${filteredTimeline.map((ev) => `
              <div style="padding:1rem;border:1px solid var(--hairline-strong,var(--hairline));border-top:2.5px solid #B8292F;background:var(--bg-paper);">
                <div style="display:flex;justify-content:space-between;font-size:0.72rem;font-weight:800;margin-bottom:0.25rem;" class="fc3d-mono">
                  <span>${ev.year}</span>
                  <span style="color:#B8292F;">${en ? ev.badgeEn : ev.badgeVi}</span>
                </div>
                <h4 style="margin:0 0 0.35rem;font-size:1rem;font-family:var(--font-editorial);">${en ? ev.titleEn : ev.titleVi}</h4>
                <p style="margin:0;font-size:0.84rem;line-height:1.58;color:var(--text-secondary);">${en ? ev.descEn : ev.descVi}</p>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- SECTION 5: ARCHITECTURAL CROSS-SECTION COMPARATOR (BEIJING vs HUE) -->
        <section id="fc3d-sec-05">
          <div style="margin-bottom:0.85rem;">
            <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:#3B4D7A;">${en ? "SECTION 05 · SIDE-BY-SIDE CROSS-SECTION COMPARATOR" : "PHẦN 05 · SO SÁNH MẶT CẮT KIẾN TRÚC ĐIỆN THÁI HÒA (BẮC KINH vs ĐẠI NỘI HUẾ)"}</div>
            <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">
              ${en ? "Northern Glazed Monumentality vs. Huế Tropical Ironwood Mastery" : "Bốn Trục Kỹ Thuật Phân Định Kiến Trúc Cung Đình Phương Bắc & Bản Sắc Cố Đô Huế"}
            </h3>
          </div>
          <div style="display:flex;flex-direction:column;gap:0.85rem;">
            ${HUE_COMPARATOR_VECTORS.map((cmp) => `
              <div class="fc3d-blueprint-grid">
                <div class="fc3d-blueprint-card" style="border-top:2.5px solid #D99B26;">
                  <div style="font-size:0.7rem;font-weight:800;color:#9A6700;" class="fc3d-mono">${cmp.code}. ${en ? "BEIJING FORBIDDEN CITY · " + cmp.titleEn : "ĐIỆN THÁI HÒA (BẮC KINH) · " + cmp.titleVi}</div>
                  <p style="margin:0.45rem 0 0;font-size:0.86rem;line-height:1.6;color:var(--text-secondary);">${en ? cmp.beijingEn : cmp.beijingVi}</p>
                </div>
                <div class="fc3d-blueprint-card" style="border-top:2.5px solid #3B4D7A;">
                  <div style="font-size:0.7rem;font-weight:800;color:#3B4D7A;" class="fc3d-mono">${cmp.code}. ${en ? "HUE IMPERIAL CITADEL · " + cmp.titleEn : "ĐIỆN THÁI HÒA (ĐẠI NỘI HUẾ) · " + cmp.titleVi}</div>
                  <p style="margin:0.45rem 0 0;font-size:0.86rem;line-height:1.6;color:var(--text-secondary);">${en ? cmp.hueEn : cmp.hueVi}</p>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- SECTION 6: 4-GROUP SYNTHESIS MATRIX & PRE-DEPARTURE FIELD CHECKLIST -->
        <section id="fc3d-sec-06">
          <div style="margin-bottom:0.85rem;">
            <div style="font-size:0.72rem;font-weight:800;letter-spacing:0.08em;color:#1F6E5C;">${en ? "SECTION 06 · 4-GROUP STRUCTURAL MATRIX & FIELD CHECKLIST" : "PHẦN 06 · MA TRẬN 4 CƠ CHẾ KỸ THUẬT & CẨM NANG THỰC ĐỊA CHO ĐỘC GIẢ VIỆT"}</div>
            <h3 style="margin:0.15rem 0 0;font-family:var(--font-editorial);font-size:1.38rem;">
              ${en ? "Seismic Damping, Drainage, Cross-Cultural Aesthetics & On-Site Vocabulary" : "Tổng Hợp 4 Lớp Giải Mã Kỹ Nghệ Xây Dựng Cố Cung & Lộ Trình Khảo Sát Thực Địa"}
            </h3>
          </div>
          <div class="fc3d-matrix-grid">
            ${SYNTHESIS_GROUPS_4.map((g) => `
              <div class="fc3d-matrix-card" style="border-top:3px solid ${g.accent};">
                <div style="font-size:0.7rem;font-weight:800;color:${g.accent};letter-spacing:0.06em;" class="fc3d-mono">${g.group}</div>
                <h4 style="margin:0.25rem 0 0.45rem;font-family:var(--font-editorial);font-size:1.05rem;">${en ? g.titleEn : g.titleVi}</h4>
                <p style="margin:0;font-size:0.85rem;line-height:1.6;color:var(--text-secondary);">${en ? g.bodyEn : g.bodyVi}</p>
              </div>
            `).join("")}
          </div>
        </section>
      </div>
    `;
  }

  function handleAction(action, target, Store, showToast, rerender) {
    if (action === "fc3d-set-state") {
      ui3d.dissectionState = target.getAttribute("data-state") || "plan";
      ui3d.explodePercent = ui3d.dissectionState === "xray" ? 78 : 0;
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
      } else if (p === "subsurface") {
        ui3d.activeZoneId = "002";
        ui3d.dissectionState = "actual";
        flyCamera([-34, 19, 54], [-16, 2, 34]);
      } else if (p === "south") {
        ui3d.activeZoneId = "001";
        flyCamera([18, 22, 92], [0, 6, 58]);
      } else if (p === "iso") {
        flyCamera([68, 72, 112], [0, 4, -8]);
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
    if (action === "fc3d-select-chapter" || action === "fc3d-chapter-xray") {
      scrollPauseUntil = Date.now() + 900;
      const idx = Number(target.getAttribute("data-idx") || 0);
      const ch = SCROLLY_CHAPTERS[idx];
      if (ch) {
        ui3d.activeChapterIdx = idx;
        ui3d.dissectionState = action === "fc3d-chapter-xray" ? "xray" : ch.stateMode;
        ui3d.explodePercent = ui3d.dissectionState === "xray" ? 78 : 0;
        ui3d.activeZoneId = ch.zoneId;
        ui3d.autoOrbit = false;
        flyCamera(ch.camPos, ch.lookAt);
        updateDissectionVisuals();
        if (!syncStageUiInPlace()) rerender();
      }
      return true;
    }
    if (action === "fc3d-jump-sec") {
      const tid = target.getAttribute("data-target");
      if (tid) {
        ui3d.activeJumpSec = tid;
        document.querySelectorAll('.fc3d-jump-btn[data-action="fc3d-jump-sec"]').forEach((b) => {
          b.classList.toggle("active", b.getAttribute("data-target") === tid);
        });
        const el = document.getElementById(tid);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
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
          applyLightingPreset();
          updateDissectionVisuals();
          if ((!rt.io && document.querySelector(".fc3d-scrolly-card[data-fc3d-card-idx]")) || (!rt.jumpIo && document.getElementById("fc3d-sec-01"))) {
            bindScrollyObserver(rt);
          }
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
