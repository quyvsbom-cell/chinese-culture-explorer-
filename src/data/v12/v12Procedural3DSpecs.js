/* ============================================================================
 * CHINESE CULTURE EXPLORER (CCE v12.0) — PACKAGE 05
 * Procedural 3D Architecture & Heritage Mechanics Specifications (Three.js r128)
 * Pure ES5 IIFE — Zero ES6+ Syntax — Zero External Binary Mesh Dependencies
 * Global Export: window.CCE_V12_3D_SPECS (10 Masterpieces, 70 Exploded Layers)
 * ============================================================================ */
(function () {
  "use strict";

  var SPECS = [
    /* ========================================================================
     * 01. MOC THAP UNG HUYEN (PHAT CUNG TU THICH CA THAP, 1056)
     * ======================================================================== */
    {
      id: "yingxian-wooden-pagoda-3d",
      titleVi: "Mộc Tháp Ứng Huyện (Phật Cung Tự Thích Ca Tháp 1056)",
      titleEn: "Yingxian Wooden Pagoda (Sakyamuni Pagoda of Fogong Temple, 1056)",
      titleZh: "应县木塔（佛宫寺释迦塔·1056）",
      eraVi: "Nhà Liêu · Thanh Ninh năm thứ 2 (1056 SCN)",
      eraEn: "Liao Dynasty, 2nd Year of Qingning (1056 CE)",
      dimensionsReal: "Cao tổng 67,31 m · Đường kính đáy bát giác 30,27 m · 5 tầng nổi 4 tầng ngầm (9 lớp)",
      layers: [
        {
          partId: "yx-stone-plinth",
          nameVi: "Đài đá bát giác hai cấp (Tu Di Tọa)",
          nameEn: "Two-Tier Octagonal Stone Plinth (Sumeru Base)",
          nameZh: "二层八角石砌台基",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "CylinderGeometry(rTop: 2.85, rBot: 3.10, h: 0.48, radialSegments: 8) + pos [0, 0.24, 0] + rot [0, 0.3927, 0]",
          explodeOffset: [0, -0.8, 0],
          pbrMaterial: { colorHex: "#8A8D8B", roughness: 0.86, metalness: 0.04, clearcoat: 0.0 },
          mechanicsNoteVi: "Phân tán tải trọng gần 3.000 tấn gỗ thông Bắc phương xuống nền đất sét cứng, chống ẩm mao dẫn cho chân cột gỗ tầng trệt.",
          mechanicsNoteEn: "Distributes nearly 3,000 metric tons of North China larch timber loads onto compacted subsoil while blocking capillary moisture from ground-floor column bases."
        },
        {
          partId: "yx-double-column-ring",
          nameVi: "Hệ lồng ống hai vòng cột bát giác (32 cột tầng 1)",
          nameEn: "Double-Ring Octagonal Column Tube (32 Ground Columns)",
          nameZh: "双层套筒八角柱网（底层32柱）",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Outer 24x CylinderGeometry(rTop: 0.08, rBot: 0.09, h: 1.55, radialSegments: 12) radius 2.25 + Inner 8x CylinderGeometry(rTop: 0.10, rBot: 0.11, h: 1.55, radialSegments: 12) radius 1.15 + pos [0, 1.25, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0.4, 0],
          pbrMaterial: { colorHex: "#821C1C", roughness: 0.58, metalness: 0.05, clearcoat: 0.12 },
          mechanicsNoteVi: "Cấu trúc ống lồng trong ống tạo độ cứng chống xoắn ngang cao, cho phép khung tháp dao động đàn hồi khi xảy ra địa chấn cấp 7.",
          mechanicsNoteEn: "Tube-in-tube structural geometry maximizes lateral torsional stiffness, allowing the timber frame to flex elastically during magnitude-7 seismic events."
        },
        {
          partId: "yx-mezzanine-truss",
          nameVi: "Bốn tầng ngầm thanh giằng chéo (Bình Tọa Ám Tầng)",
          nameEn: "Four Hidden Diagonal-Braced Mezzanine Tiers (Pingzuo)",
          nameZh: "明五暗四平座暗层斜撑",
          geometryType: "BoxGeometry",
          dimensionsSpec: "4x tiers of 16x BoxGeometry(w: 0.10, h: 0.42, d: 0.62) inclined at 38 deg between inner/outer rings + pos [0, 2.20..4.80, 0] + rot [0, 0.3927, 0.663]",
          explodeOffset: [0, 1.25, 0],
          pbrMaterial: { colorHex: "#5C3D28", roughness: 0.72, metalness: 0.04, clearcoat: 0.05 },
          mechanicsNoteVi: "Bốn tầng ngầm giấu kín bên trong đóng vai trò hệ giàn tam giác cứng hóa từng nhịp, triệt tiêu chuyển vị nghiêng của 5 tầng lộ thiên.",
          mechanicsNoteEn: "Four concealed mezzanine stories operate as rigid triangular truss rings between visible floors, suppressing lateral drift across the five exterior stories."
        },
        {
          partId: "yx-dougong-brackets",
          nameVi: "Cụm mộng Đấu Củng 54 kiểu (khớp giảm chấn không đinh)",
          nameEn: "54-Type Dougong Bracket Complexes (Nail-Free Dampers)",
          nameZh: "五十四种斗拱减震节点",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "Stepped bracket profile ExtrudeGeometry(depth: 0.14, bevelEnabled: false) arrayed 48x per ring across 5 eaves + pos [0, 1.95..5.65, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 2.05, 0],
          pbrMaterial: { colorHex: "#7B563A", roughness: 0.64, metalness: 0.06, clearcoat: 0.08 },
          mechanicsNoteVi: "54 biến thể Đấu Củng xếp chồng như bộ lò xo ma sát gỗ, hấp thụ năng lượng rung chấn và vươn đỡ mái đua sâu tới 3,9 m không dùng đinh sắt.",
          mechanicsNoteEn: "Fifty-four interlocking bracket variants act as timber friction springs, dissipating seismic energy while cantilevering deep 3.9-meter eaves without iron nails."
        },
        {
          partId: "yx-five-octagonal-eaves",
          nameVi: "Năm tầng mái ngói bát giác thu nhỏ theo tỷ lệ",
          nameEn: "Five Tapered Octagonal Eave Roofs",
          nameZh: "五层八角飞檐筒瓦屋面",
          geometryType: "ConeGeometry",
          dimensionsSpec: "5x hollow ConeGeometry(r: 2.75..1.55, h: 0.42, radialSegments: 8, openEnded: true) stacked with 12% taper per tier + pos [0, 2.15..5.85, 0] + rot [0, 0.3927, 0]",
          explodeOffset: [0, 2.95, 0],
          pbrMaterial: { colorHex: "#4B4E52", roughness: 0.76, metalness: 0.08, clearcoat: 0.06 },
          mechanicsNoteVi: "Mái đua vươn rộng hắt nước mưa xa khỏi thân gỗ và tạo tải trọng nén đứng ổn định khóa chặt toàn bộ khớp mộng Đấu Củng phía dưới.",
          mechanicsNoteEn: "Broad overhanging eaves shed rainwater clear of the timber walls while providing steady vertical gravity compression that locks the bracket joints below."
        },
        {
          partId: "yx-central-statue-core",
          nameVi: "Tượng Phật Thích Ca tầng 1 & trục lõi thông tầng",
          nameEn: "Ground-Floor Sakyamuni Core & Vertical Shrine Axis",
          nameZh: "一层释迦牟尼塑像与中轴空间",
          geometryType: "LatheGeometry",
          dimensionsSpec: "LatheGeometry(points: 18-point seated lotus profile, rMax: 0.55, h: 1.28, segments: 24) + pos [0, 0.55, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0.85, 0],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.36, metalness: 0.68, clearcoat: 0.22 },
          mechanicsNoteVi: "Tượng cao 11 m định vị chính tâm hình học bát giác, cân bằng thị giác và quy chiếu trục đứng xuyên suốt 5 tầng thờ tự.",
          mechanicsNoteEn: "The 11-meter seated statue anchors the geometric center of the octagon, establishing visual balance and the vertical liturgical axis through all five halls."
        },
        {
          partId: "yx-iron-spire-chains",
          nameVi: "Tháp Sát đúc sắt & 8 dây xích neo đỉnh (cao 10 m)",
          nameEn: "Cast-Iron Finial Spire & Eight Guy Chains (10 m)",
          nameZh: "十米铸铁塔刹与八道铁链",
          geometryType: "TubeGeometry",
          dimensionsSpec: "Spire CylinderGeometry(rTop: 0.03, rBot: 0.14, h: 1.15, segments: 12) + 8x TubeGeometry(CatmullRomCurve3, tubularSegments: 16, r: 0.015) + pos [0, 6.45, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 3.85, 0],
          pbrMaterial: { colorHex: "#3D4248", roughness: 0.44, metalness: 0.82, clearcoat: 0.10 },
          mechanicsNoteVi: "Trụ sắt cao 10 m neo bằng 8 dây xích xuống 8 góc mái bát giác vừa chống gió bão ở độ cao 67 m vừa tạo mạch dẫn sét tự nhiên.",
          mechanicsNoteEn: "The 10-meter iron finial tensioned by eight radial chains to the roof ridges resists high-altitude wind shear at 67 meters while acting as a lightning conductor."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [6.8, 4.4, 7.6], target: [0, 3.2, 0] },
        { id: "mechanism", labelVi: "Cận cảnh khớp mộng Đấu Củng", labelEn: "Close-up Dougong Joinery", pos: [2.6, 2.5, 2.8], target: [0, 2.1, 0] },
        { id: "exploded", labelVi: "Tách lớp 9 tầng kết cấu", labelEn: "Exploded 9-Tier Structure", pos: [8.4, 6.2, 9.0], target: [0, 4.4, 0] }
      ],
      learningHighlightVi: "Mộc Tháp Ứng Huyện là tòa tháp gỗ thuần túy cao nhất còn tồn tại thế giới (67,31 m), đứng vững qua hơn 40 trận động đất từ năm 1056 nhờ cấu trúc ống lồng hai vòng cột, 4 tầng ngầm giằng chéo và 54 kiểu Đấu Củng.",
      learningHighlightEn: "Yingxian Wooden Pagoda is the tallest surviving all-timber pagoda in the world (67.31 m), standing through over 40 earthquakes since 1056 via its tube-in-tube column rings, four braced mezzanine tiers, and 54 Dougong bracket types."
    },

    /* ========================================================================
     * 02. CAU DA VOM MO VAI TRIEU CHAU KIEU (AN TE KIEU, ~605 SCN)
     * ======================================================================== */
    {
      id: "zhaozhou-bridge-arch-3d",
      titleVi: "Cầu Đá Vòm Mở Vai Triệu Châu Kiều (An Tế Kiều ~605 SCN)",
      titleEn: "Zhaozhou Open-Spandrel Stone Arch Bridge (Anji Bridge, c. 605 CE)",
      titleZh: "赵州桥（安济桥·敞肩石拱·约605年）",
      eraVi: "Nhà Tùy · Khai Hoàng đến Đại Nghiệp (~595–605 SCN, kỹ sư Lý Xuân)",
      eraEn: "Sui Dynasty, Kaihuang to Daye Reign (c. 595–605 CE, Engineer Li Chun)",
      dimensionsReal: "Dài 50,82 m · Nhịp vòm chính 37,02 m · Mũi tên vòm 7,23 m · Rộng mặt cầu 9,0–9,6 m",
      layers: [
        {
          partId: "zz-abutments",
          nameVi: "Hai mố cầu đá xanh chôn nông (móng tường thẳng)",
          nameEn: "Shallow Limestone Bridge Abutments",
          nameZh: "两岸浅埋青石桥台",
          geometryType: "BoxGeometry",
          dimensionsSpec: "2x BoxGeometry(w: 1.45, h: 0.95, d: 1.95) at x = -3.85 and +3.85 + pos [0, 0.48, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.75, 0],
          pbrMaterial: { colorHex: "#707573", roughness: 0.88, metalness: 0.04, clearcoat: 0.0 },
          mechanicsNoteVi: "Đặt trực tiếp trên tầng đất sét pha cát chịu lực tự nhiên ven sông Hào, tiếp nhận toàn bộ lực đẩy ngang lớn từ vòm đá dẹt tỷ lệ 1:5,12.",
          mechanicsNoteEn: "Seated directly on natural stiff clayey-sand strata along the Xiao River, resisting the intense horizontal thrust generated by the shallow 1:5.12 segmental arch."
        },
        {
          partId: "zz-main-arch-rings",
          nameVi: "Vòm chính 28 cung đá xếp song song (Bình Liệt Thế Trúc)",
          nameEn: "28 Independent Parallel Stone Arch Rings",
          nameZh: "二十八道并列砌筑主拱券",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "Segmental arc ExtrudeGeometry(span: 6.40, rise: 1.25, ringThickness: 0.22, depth: 1.80, curveSegments: 32) + pos [0, 0.82, -0.90] + rot [0, 0, 0]",
          explodeOffset: [0, 0.35, 0],
          pbrMaterial: { colorHex: "#9C9A90", roughness: 0.82, metalness: 0.05, clearcoat: 0.02 },
          mechanicsNoteVi: "28 dải cung đá độc lập ghép sát nhau cho phép tháo thay từng cung hư hại mà không phải dỡ toàn bộ thân cầu.",
          mechanicsNoteEn: "Twenty-eight independent parallel arch ribs allow any damaged stone ring to be repaired or replaced individually without dismantling the entire bridge."
        },
        {
          partId: "zz-iron-cramps",
          nameVi: "Hệ chốt sắt đuôi én (Yêu Thiết) & 9 thanh giằng ngang",
          nameEn: "Wrought-Iron Dovetail Cramps & 9 Transverse Tie Rods",
          nameZh: "腰铁拉结与九根铁拉杆",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "9x CylinderGeometry(rTop: 0.025, rBot: 0.025, h: 1.88, radialSegments: 10) spanning Z-axis along arch extrados + pos [0, 1.48..2.05, 0] + rot [1.5708, 0, 0]",
          explodeOffset: [0, 0.95, 0.95],
          pbrMaterial: { colorHex: "#3D4248", roughness: 0.42, metalness: 0.85, clearcoat: 0.12 },
          mechanicsNoteVi: "Khóa chặt 28 cung đá thành khối chịu lực thống nhất theo phương ngang, ngăn hiện tượng tách dải vòm dưới tải trọng xe ngựa lệch tâm.",
          mechanicsNoteEn: "Locks all 28 parallel stone rings into a unified lateral load-bearing vault, preventing rib separation under eccentric vehicular loads."
        },
        {
          partId: "zz-spandrel-arches",
          nameVi: "Bốn vòm phụ mở vai giảm tải lũ (2 vòm mỗi bên)",
          nameEn: "Four Open-Spandrel Flood-Relief Arches (Two per Shoulder)",
          nameZh: "两端四个敞肩泄洪小拱",
          geometryType: "TubeGeometry",
          dimensionsSpec: "4x semicircular TubeGeometry(arcRadius: 0.42 outer / 0.32 inner, r: 0.12, tubularSegments: 20) positioned over arch haunches + pos [±2.15/±1.40, 1.68/1.88, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.65, 0],
          pbrMaterial: { colorHex: "#A3A096", roughness: 0.80, metalness: 0.04, clearcoat: 0.02 },
          mechanicsNoteVi: "Giảm khoảng 15,3% trọng lượng bản thân (~700 tấn đá) và tăng thêm 16,5% tiết diện thoát nước lũ khi sông Hào dâng cao.",
          mechanicsNoteEn: "Cuts dead weight by roughly 15.3 percent (about 700 metric tons of masonry) while expanding floodwater discharge area by 16.5 percent during seasonal surges."
        },
        {
          partId: "zz-spandrel-walls",
          nameVi: "Tường cánh thuôn hẹp dần về đỉnh (thu liễm 1/20)",
          nameEn: "Inward-Battered Spandrel Retaining Walls",
          nameZh: "向顶收分侧墙护石",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "2x tapered side wall ExtrudeGeometry(length: 7.40, maxH: 1.15, depth: 0.18) with 2 cutouts per side + pos [0, 1.10, ±0.85] + rot [0, 0, 0]",
          explodeOffset: [0, 1.45, -1.10],
          pbrMaterial: { colorHex: "#8A8D8B", roughness: 0.84, metalness: 0.04, clearcoat: 0.0 },
          mechanicsNoteVi: "Thu hẹp mặt cầu từ 9,6 m ở hai đầu xuống 9,0 m ở đỉnh cầu, ép hướng ứng suất vào tâm và tăng ổn định chống phình tường.",
          mechanicsNoteEn: "Tapers the bridge width from 9.6 m at the approaches to 9.0 m at the crown, directing internal stresses inward to prevent outward wall bulging."
        },
        {
          partId: "zz-stone-deck",
          nameVi: "Mặt cầu lát phiến đá dốc thoai thoải hai chiều",
          nameEn: "Gently Cambered Flagstone Bridge Deck",
          nameZh: "缓坡青石板桥面",
          geometryType: "BoxGeometry",
          dimensionsSpec: "12x sloped BoxGeometry(w: 0.65, h: 0.14, d: 1.72) following parabolic deck camber + pos [0, 2.28, 0] + rot [0, 0, ±0.08]",
          explodeOffset: [0, 2.45, 0],
          pbrMaterial: { colorHex: "#B0ACA1", roughness: 0.78, metalness: 0.03, clearcoat: 0.04 },
          mechanicsNoteVi: "Nhờ vòm cung tròn dẹt (góc tâm ~84 độ), độ dốc mặt cầu rất thấp, thuận lợi cho xe chở nặng vượt sông liên tục suốt 1.400 năm.",
          mechanicsNoteEn: "The flat segmental arch (~84-degree central angle) yields a gentle longitudinal gradient, enabling heavy carts to cross continuously for 1,400 years."
        },
        {
          partId: "zz-dragon-balustrades",
          nameVi: "Lan can đá chạm rồng Giao Long & trụ vọng trụ",
          nameEn: "Carved Dragon Stone Balustrades & Newel Posts",
          nameZh: "蛟龙浮雕石栏板与望柱",
          geometryType: "BoxGeometry",
          dimensionsSpec: "2x lines of 14x BoxGeometry(w: 0.52, h: 0.32, d: 0.09) + 15x posts BoxGeometry(w: 0.11, h: 0.42, d: 0.11) + pos [0, 2.52, ±0.86] + rot [0, 0, 0]",
          explodeOffset: [0, 3.20, 0],
          pbrMaterial: { colorHex: "#D8D3C8", roughness: 0.70, metalness: 0.05, clearcoat: 0.06 },
          mechanicsNoteVi: "Đóng vai trò thành chắn an toàn hai bên mép cầu và giữ khối đối trọng nhẹ đều dọc theo mép ngoài tường cánh.",
          mechanicsNoteEn: "Provides continuous pedestrian and cart safety barriers along both flanks while applying a uniform light edge load over the spandrel walls."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [0.6, 2.6, 7.8], target: [0, 1.4, 0] },
        { id: "mechanism", labelVi: "Cận cảnh vòm mở vai & Yêu Thiết", labelEn: "Close-up Open Spandrel & Cramps", pos: [2.6, 1.9, 3.2], target: [1.6, 1.6, 0] },
        { id: "exploded", labelVi: "Tách lớp kết cấu vòm", labelEn: "Exploded Arch Assembly", pos: [4.2, 4.2, 8.6], target: [0, 2.1, 0] }
      ],
      learningHighlightVi: "Triệu Châu Kiều là cây cầu vòm đá mở vai sớm nhất thế giới (~605 SCN), đi trước kỹ thuật cầu vòm mở vai châu Âu hơn 700 năm nhờ giải pháp 4 vòm phụ xả lũ và 28 cung đá ghép song song.",
      learningHighlightEn: "Zhaozhou Bridge is the world's oldest surviving open-spandrel segmental stone arch bridge (c. 605 CE), preceding European counterparts by over 700 years through its four flood-relief spandrel arches and 28 parallel stone ribs."
    },

    /* ========================================================================
     * 03. THUY VAN NGHI TUONG DAI TO TUNG (1092)
     * ======================================================================== */
    {
      id: "su-song-astronomical-clock-tower-3d",
      titleVi: "Thủy Vận Nghi Tượng Đài Tô Tụng (1092)",
      titleEn: "Su Song's Hydro-Mechanical Astronomical Clock Tower (1092)",
      titleZh: "苏颂水运仪象台（1092）",
      eraVi: "Bắc Tống · Nguyên Hựu năm thứ 7 (1088–1092 SCN, Khai Phong)",
      eraEn: "Northern Song Dynasty, 7th Year of Yuanyou (1088–1092 CE, Kaifeng)",
      dimensionsReal: "Cao ~12,0 m · Mặt bằng vuông 7,0 m × 7,0 m · Bánh xe nước đường kính 3,35 m (36 gầu)",
      layers: [
        {
          partId: "ss-timber-tower-frame",
          nameVi: "Khung tháp gỗ 3 tầng & mái mở đóng di động",
          nameEn: "Three-Tier Timber Tower Frame & Retractable Roof",
          nameZh: "三层木构台体与活动屋板",
          geometryType: "BoxGeometry",
          dimensionsSpec: "12x vertical columns BoxGeometry(w: 0.12, h: 4.80, d: 0.12) + 3 floor decks BoxGeometry(w: 2.80, h: 0.12, d: 2.80) + pos [0, 2.40, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.7, 0],
          pbrMaterial: { colorHex: "#6E4B33", roughness: 0.72, metalness: 0.04, clearcoat: 0.06 },
          mechanicsNoteVi: "Chia tách rành mạch 3 tầng chức năng: tầng dưới báo giờ, tầng giữa quay cầu tinh tú, tầng trên quan sát bầu trời qua mái mở.",
          mechanicsNoteEn: "Separates three vertical engineering zones: timekeeping pavilion below, rotating celestial globe in the middle, and open-roof armillary observatory on top."
        },
        {
          partId: "ss-clepsydra-tanks",
          nameVi: "Hệ thống bình lậu khắc cấp nước lưu lượng hằng (Thiên Trì)",
          nameEn: "Constant-Head Clepsydra Reservoir System (Tian Chi)",
          nameZh: "天池平水壶恒流供水系统",
          geometryType: "BoxGeometry",
          dimensionsSpec: "3x stepped tanks BoxGeometry(w: 0.65, h: 0.42, d: 0.55) + siphon TubeGeometry(r: 0.03) + pos [-1.10, 1.35, -0.75] + rot [0, 0, 0]",
          explodeOffset: [-1.45, 0.35, -0.70],
          pbrMaterial: { colorHex: "#5B6E5C", roughness: 0.46, metalness: 0.62, clearcoat: 0.14 },
          mechanicsNoteVi: "Duy trì cột áp thủy tĩnh không đổi nhờ bình tràn trung gian (Bình Thủy Hồ), đảm bảo dòng nước chảy vào gầu bánh xe có lưu lượng chuẩn xác.",
          mechanicsNoteEn: "Maintains constant hydrostatic head via an overflow leveling tank, delivering a uniform water flow rate into each waterwheel scoop bucket."
        },
        {
          partId: "ss-waterwheel-36",
          nameVi: "Bánh xe nước 36 gầu đồng (Khu Luân đường kính 3,35 m)",
          nameEn: "36-Bucket Driving Waterwheel (Diameter 3.35 m)",
          nameZh: "三十六受水壶枢轮（直径3.35米）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "TorusGeometry(r: 1.12, tube: 0.08, radialSegments: 12, tubularSegments: 36) + 36x BoxGeometry(0.14, 0.10, 0.18) buckets + pos [0, 1.25, -0.55] + rot [0, 1.5708, 0]",
          explodeOffset: [0, 0.45, -1.35],
          pbrMaterial: { colorHex: "#5C3D28", roughness: 0.68, metalness: 0.12, clearcoat: 0.08 },
          mechanicsNoteVi: "Mỗi gầu chứa đầy nước trong đúng 24 giây theo chuẩn khắc Tống, tạo mô-men xoắn xoay gián đoạn toàn bộ hệ truyền động.",
          mechanicsNoteEn: "Each scoop fills in a calibrated 24-second interval, generating stepped driving torque that advances the entire astronomical gear train."
        },
        {
          partId: "ss-tianheng-escapement",
          nameVi: "Cơ cấu hồi thoát Thiên Hành (đòn cân, chốt khóa Thiên Tỏa)",
          nameEn: "Tianheng Steelyard Escapement (Trip Lever & Upper Lock)",
          nameZh: "天衡擒纵机构（天关·天锁·关舌）",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "Steelyard beam BoxGeometry(w: 1.05, h: 0.07, d: 0.08) + curved pawl ExtrudeGeometry(depth: 0.06) + iron chain TubeGeometry(r: 0.015) + pos [0.15, 2.45, -0.55] + rot [0, 0, -0.12]",
          explodeOffset: [1.35, 1.35, -0.45],
          pbrMaterial: { colorHex: "#8C6D3F", roughness: 0.38, metalness: 0.78, clearcoat: 0.18 },
          mechanicsNoteVi: "Khi gầu nước đủ nặng, đòn cân hạ xuống giật mở chốt Thiên Tỏa, bánh xe nhích đúng 1 bước rồi lập tức bị khóa lại để đo thời gian đẳng thời.",
          mechanicsNoteEn: "Once a bucket reaches threshold weight, the balance lever trips the upper lock, letting the wheel advance exactly one pitch before arresting it for isochronous timekeeping."
        },
        {
          partId: "ss-vertical-shaft-pagoda",
          nameVi: "Trục đứng truyền động & Tháp gỗ 5 tầng nhân tượng báo giờ",
          nameEn: "Vertical Transmission Shaft & 5-Tier Timekeeping Mannequin Pagoda",
          nameZh: "天柱立轴与五层昼夜机轮报时木阁",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Main shaft CylinderGeometry(rTop: 0.05, rBot: 0.05, h: 3.95, radialSegments: 16) + 5x geared disks CylinderGeometry(r: 0.52, h: 0.08, segments: 24) + pos [0, 2.35, 0.65] + rot [0, 0, 0]",
          explodeOffset: [0, 1.10, 1.45],
          pbrMaterial: { colorHex: "#821C1C", roughness: 0.54, metalness: 0.14, clearcoat: 0.16 },
          mechanicsNoteVi: "Truyền chuyển động quay đều từ Khu Luân lên 5 tầng bánh xe gỗ mang 144 nhân tượng gõ chuông, đánh trống và giơ thẻ báo canh giờ.",
          mechanicsNoteEn: "Transmits regulated rotation from the waterwheel to five geared carousels carrying wooden mannequins that strike bells, beat drums, and display hour plaques."
        },
        {
          partId: "ss-celestial-globe",
          nameVi: "Cầu Thiên Văn Hồn Tượng tầng 2 (1.464 ngôi sao)",
          nameEn: "Middle-Tier Rotating Celestial Globe (1,464 Stars)",
          nameZh: "中层浑象球（刻星1464颗）",
          geometryType: "LatheGeometry",
          dimensionsSpec: "Hollow sphere LatheGeometry(24-point semicircle, r: 0.62, segments: 32) + equatorial gear CylinderGeometry(r: 0.66, h: 0.05, segments: 36) + pos [0, 3.15, 0] + rot [0.605, 0, 0]",
          explodeOffset: [0, 2.25, 0],
          pbrMaterial: { colorHex: "#2B455C", roughness: 0.42, metalness: 0.48, clearcoat: 0.28 },
          mechanicsNoteVi: "Quay đồng bộ 1 vòng mỗi ngày thiên văn (23 giờ 56 phút), mô phỏng vị trí mọc và lặn thực tế của 28 chòm sao trong buồng tối.",
          mechanicsNoteEn: "Rotates once per sidereal day (23 h 56 m), reproducing the real-time rising and setting of the 28 lunar mansions inside the enclosed middle chamber."
        },
        {
          partId: "ss-top-armillary-sphere",
          nameVi: "Hồn Nghi đồng đặt trên đỉnh tháp (đường kính 1,98 m)",
          nameEn: "Rooftop Bronze Armillary Sphere (Diameter 1.98 m)",
          nameZh: "顶层铜制浑仪（直径1.98米）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "3x nested TorusGeometry(r: 0.78/0.70/0.62, tube: 0.035, radialSegments: 12, tubularSegments: 48) + sighting tube CylinderGeometry(r: 0.04, h: 1.45) + pos [0, 4.95, 0] + rot [0.605, 0, 0.410]",
          explodeOffset: [0, 3.45, 0],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.34, metalness: 0.82, clearcoat: 0.24 },
          mechanicsNoteVi: "Liên kết trực tiếp với trục truyền động bằng xích thiên thể (Thiên Thê), tự động bám theo chuyển động biểu kiến của thiên cầu khi quan trắc.",
          mechanicsNoteEn: "Coupled to the main drive via an endless chain transmission (Tian Ti), automatically tracking the apparent diurnal motion of stars during observations."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [5.8, 4.2, 6.4], target: [0, 2.6, 0] },
        { id: "mechanism", labelVi: "Cận cảnh bộ hồi thoát Thiên Hành", labelEn: "Close-up Tianheng Escapement", pos: [2.4, 2.5, 1.8], target: [0.1, 2.1, -0.5] },
        { id: "exploded", labelVi: "Tách lớp 3 tầng truyền động", labelEn: "Exploded 3-Tier Drive Train", pos: [7.4, 5.4, 8.2], target: [0, 3.2, 0] }
      ],
      learningHighlightVi: "Thủy Vận Nghi Tượng Đài do Tô Tụng và Hàn Công Liêm chế tạo năm 1092 tích hợp cơ cấu hồi thoát Thiên Hành và dây xích truyền động sớm nhất lịch sử kỹ thuật đồng hồ cơ khí thế giới.",
      learningHighlightEn: "Built in 1092 by Su Song and Han Gonglian, the Cosmic Engine combined the earliest known mechanical escapement (Tianheng) and endless power-transmitting chain drive in horological history."
    },

    /* ========================================================================
     * 04. HON THIEN NGHI TRUONG HANH (DONG HAN, 117-132 SCN)
     * ======================================================================== */
    {
      id: "zhang-heng-armillary-sphere-3d",
      titleVi: "Hồn Thiên Nghi Trương Hành (Đông Hán 117–132 SCN)",
      titleEn: "Zhang Heng's Water-Driven Armillary Sphere (Eastern Han, 117–132 CE)",
      titleZh: "张衡水运浑天仪（东汉·117–132年）",
      eraVi: "Nhà Đông Hán · Nguyên Sơ năm thứ 4 đến Dương Gia năm thứ 1 (117–132 SCN)",
      eraEn: "Eastern Han Dynasty, Yuanchu to Yangjia Era (117–132 CE)",
      dimensionsReal: "Đường kính vòng đồng ngoài ~1,46–1,98 m (tương đương 4 thước 6 tấc Hán) · Nghiêng trục cực 34,7 độ (vĩ độ Lạc Dương)",
      layers: [
        {
          partId: "zh-dragon-base-pillars",
          nameVi: "Đế chữ thập & 4 trụ rồng đồng nâng vòng Địa Bình",
          nameEn: "Cruciform Bronze Base & Four Dragon Support Pillars",
          nameZh: "十字铜座与四龙承柱",
          geometryType: "BoxGeometry",
          dimensionsSpec: "2x intersecting BoxGeometry(w: 2.60, h: 0.14, d: 0.24) + 4x CylinderGeometry(rTop: 0.06, rBot: 0.09, h: 1.15, segments: 12) + pos [0, 0.58, 0] + rot [0, 0.7854, 0]",
          explodeOffset: [0, -0.85, 0],
          pbrMaterial: { colorHex: "#4B5E50", roughness: 0.48, metalness: 0.76, clearcoat: 0.15 },
          mechanicsNoteVi: "Tạo mặt phẳng chuẩn ngang tuyệt đối bằng rãnh nước cân bằng (Thủy Bình Tào) khắc trên đế, định vị chính xác 4 phương Đông–Tây–Nam–Bắc.",
          mechanicsNoteEn: "Establishes an exact horizontal datum via water-leveling channels cast into the base, aligning the instrument to the four cardinal directions."
        },
        {
          partId: "zh-horizon-ring",
          nameVi: "Vòng Địa Bình cố định khắc 24 phương vị",
          nameEn: "Stationary Horizon Ring Graduated in 24 Azimuths",
          nameZh: "地平环（刻二十四方位）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "TorusGeometry(r: 1.32, tube: 0.065, radialSegments: 12, tubularSegments: 64) + pos [0, 1.55, 0] + rot [1.5708, 0, 0]",
          explodeOffset: [0, 0.15, 0],
          pbrMaterial: { colorHex: "#5B6E5C", roughness: 0.40, metalness: 0.78, clearcoat: 0.20 },
          mechanicsNoteVi: "Phân chia thiên cầu thành nửa bầu trời nhìn thấy phía trên và nửa khuất dưới chân trời, làm mốc xác định thời điểm sao mọc và lặn.",
          mechanicsNoteEn: "Divides the celestial sphere into visible upper and concealed lower hemispheres, serving as the reference plane for stellar rising and setting times."
        },
        {
          partId: "zh-meridian-ring",
          nameVi: "Vòng Tử Ngọ (Kinh tuyến thiên cầu) đỡ hai cực Bắc–Nam",
          nameEn: "Fixed Meridian Ring Supporting North–South Polar Pivots",
          nameZh: "子午双环",
          geometryType: "TorusGeometry",
          dimensionsSpec: "TorusGeometry(r: 1.24, tube: 0.055, radialSegments: 12, tubularSegments: 64) + pos [0, 1.55, 0] + rot [0, 1.5708, 0]",
          explodeOffset: [0, 0.95, 0],
          pbrMaterial: { colorHex: "#8C6D3F", roughness: 0.36, metalness: 0.80, clearcoat: 0.22 },
          mechanicsNoteVi: "Đặt vuông góc với vòng Địa Bình theo hướng Bắc–Nam thật, đỡ hai ổ trục cực nghiêng đúng vĩ độ 34,7 độ của kinh đô Lạc Dương.",
          mechanicsNoteEn: "Mounted perpendicular to the horizon along the true North–South meridian, carrying polar bearings inclined to Luoyang's 34.7-degree latitude."
        },
        {
          partId: "zh-equatorial-ring",
          nameVi: "Vòng Xích Đạo chia 365,25 độ cổ & 28 Tú",
          nameEn: "Equatorial Ring Graduated to 365.25 Chinese Degrees & 28 Mansions",
          nameZh: "赤道环（周天365.25度）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "TorusGeometry(r: 1.12, tube: 0.048, radialSegments: 12, tubularSegments: 64) + pos [0, 1.55, 0] + rot [0.965, 0, 0]",
          explodeOffset: [0, 1.75, 0.55],
          pbrMaterial: { colorHex: "#A68246", roughness: 0.34, metalness: 0.82, clearcoat: 0.24 },
          mechanicsNoteVi: "Vuông góc với trục cực Bắc–Nam, đo xích kinh (Nhập Tú Độ) của các thiên thể theo hệ tọa độ xích đạo đặc trưng của thiên văn học Trung Hoa.",
          mechanicsNoteEn: "Perpendicular to the polar axis, measuring right ascension (Ru Xiu Du) of celestial bodies in the equatorial coordinate system central to Chinese astronomy."
        },
        {
          partId: "zh-ecliptic-ring",
          nameVi: "Vòng Hoàng Đạo nghiêng 23,5–24 độ gắn 24 Tiết khí",
          nameEn: "Ecliptic Ring Inclined at 23.5–24 Degrees with 24 Solar Terms",
          nameZh: "黄道环（交角24度·二十四节气）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "TorusGeometry(r: 1.04, tube: 0.044, radialSegments: 12, tubularSegments: 64) + pos [0, 1.55, 0] + rot [0.555, 0, 0.410]",
          explodeOffset: [0, 2.45, -0.55],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.30, metalness: 0.86, clearcoat: 0.28 },
          mechanicsNoteVi: "Cắt vòng Xích Đạo tại điểm Xuân Phân và Thu Phân, mô tả chính xác quỹ đạo biểu kiến của Mặt Trời suốt 1 năm chí tuyến.",
          mechanicsNoteEn: "Intersects the equatorial ring at the vernal and autumnal equinoxes, tracing the Sun's apparent annual path across the 24 solar terms."
        },
        {
          partId: "zh-polar-axis-gears",
          nameVi: "Trục cực đồng trục & hệ bánh răng nối lậu khắc thủy lực",
          nameEn: "Coaxial Polar Shaft & Clepsydra Gear Train",
          nameZh: "南北极轴与漏壶传动齿轮",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Shaft CylinderGeometry(rTop: 0.03, rBot: 0.03, h: 2.55, segments: 16) + drive gear CylinderGeometry(r: 0.22, h: 0.06, segments: 24) + pos [0, 1.55, 0] + rot [0.605, 0, 0]",
          explodeOffset: [0, 1.30, -1.25],
          pbrMaterial: { colorHex: "#7A633C", roughness: 0.38, metalness: 0.80, clearcoat: 0.18 },
          mechanicsNoteVi: "Truyền lực quay ổn định từ bánh xe nước nối bình lậu khắc vào trục cực, giúp vòng Xích Đạo và quả cầu xoay ăn khớp giờ trời thực tế.",
          mechanicsNoteEn: "Transfers regulated torque from the clepsydra-fed waterwheel to the polar shaft, driving the equatorial ring and central sphere in sync with sidereal time."
        },
        {
          partId: "zh-central-celestial-sphere",
          nameVi: "Quả cầu trung tâm đồng trục (Hồn Thiên Cầu)",
          nameEn: "Coaxial Central Celestial Sphere",
          nameZh: "中心同轴浑象球",
          geometryType: "LatheGeometry",
          dimensionsSpec: "LatheGeometry(24-point semicircle profile, r: 0.42, segments: 32) + pos [0, 1.55, 0] + rot [0.605, 0, 0]",
          explodeOffset: [0, 3.15, 0],
          pbrMaterial: { colorHex: "#5B6E5C", roughness: 0.35, metalness: 0.74, clearcoat: 0.26 },
          mechanicsNoteVi: "Cụ thể hóa thuyết Hồn Thiên của Trương Hành trong Hồn Thiên Nghi Chú: bầu trời bao bọc trái đất như vỏ trứng bao lòng đỏ.",
          mechanicsNoteEn: "Embodies Zhang Heng's spherical-heaven cosmology from Hun Tian Yi Zhu, modeling the heavens enclosing Earth like an eggshell surrounding its yolk."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [4.2, 3.0, 4.6], target: [0, 1.5, 0] },
        { id: "mechanism", labelVi: "Cận cảnh giao điểm Xích Đạo – Hoàng Đạo", labelEn: "Close-up Equator–Ecliptic Intersection", pos: [1.9, 2.0, 2.1], target: [0, 1.55, 0] },
        { id: "exploded", labelVi: "Tách lớp các vòng đồng trục", labelEn: "Exploded Coaxial Rings", pos: [5.4, 4.0, 6.0], target: [0, 2.1, 0] }
      ],
      learningHighlightVi: "Hồn Thiên Nghi của Trương Hành là khí cụ thiên văn đồng trục đầu tiên kết hợp truyền động bánh răng lậu khắc thủy lực, phản ánh chính xác giao góc Hoàng Đạo – Xích Đạo và trục cực nghiêng theo vĩ độ địa phương.",
      learningHighlightEn: "Zhang Heng's armillary sphere was the first coaxial astronomical instrument driven by a clepsydra gear train, accurately reproducing the ecliptic-equatorial obliquity and local-latitude polar inclination."
    },

    /* ========================================================================
     * 05. XE CHI NAM THOI HAN-TONG (MA QUAN ~235 / YEN TUC 1027)
     * ======================================================================== */
    {
      id: "south-pointing-chariot-3d",
      titleVi: "Xe Chỉ Nam thời Hán–Tống (Cơ cấu Vi sai Bánh răng)",
      titleEn: "Han–Song South-Pointing Chariot (Differential Gear Mechanism)",
      titleZh: "指南车（马钧·燕肃差速齿轮机构）",
      eraVi: "Tam Quốc (Mã Quân ~235 SCN) & Bắc Tống (Yến Túc 1027 · Ngô Đức Nhân 1107)",
      eraEn: "Three Kingdoms (Ma Jun, c. 235 CE) & Northern Song (Yan Su 1027, Wu Deren 1107)",
      dimensionsReal: "Dài 2,40 m · Rộng 1,80 m · Cao tổng 2,60 m · Đường kính bánh xe 1,80 m (18 nan hoa)",
      layers: [
        {
          partId: "sp-chariot-chassis",
          nameVi: "Khung thùng xe gỗ lim & càng kéo hai trục",
          nameEn: "Hardwood Chariot Chassis & Twin Draft Shafts",
          nameZh: "硬木车厢底座与双辕",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Chassis BoxGeometry(w: 1.65, h: 0.16, d: 1.85) + 2x shafts BoxGeometry(w: 0.08, h: 0.08, d: 1.65) + pos [0, 0.85, 0.45] + rot [0, 0, 0]",
          explodeOffset: [0, -0.70, 0],
          pbrMaterial: { colorHex: "#5C3D28", roughness: 0.68, metalness: 0.05, clearcoat: 0.08 },
          mechanicsNoteVi: "Định vị cố định khoảng cách tâm giữa hai bánh xe (chiều rộng cơ sở B) để tỷ số truyền vi sai khớp chính xác với cung quay vòng.",
          mechanicsNoteEn: "Fixes the exact track width between the two road wheels so the differential gear ratio matches the chariot's turning arc geometry."
        },
        {
          partId: "sp-left-right-wheels",
          nameVi: "Cặp bánh xe 18 nan hoa nối liền đĩa răng chủ động",
          nameEn: "Left & Right 18-Spoke Road Wheels with Drive Gears",
          nameZh: "左右十八辐车轮与附轮大齿",
          geometryType: "TorusGeometry",
          dimensionsSpec: "2x rim TorusGeometry(r: 0.85, tube: 0.06, radialSegments: 10, tubularSegments: 36) + 18x spoke CylinderGeometry(r: 0.02, h: 1.65) + pos [±0.95, 0.85, 0] + rot [0, 1.5708, 0]",
          explodeOffset: [1.35, 0, 0],
          pbrMaterial: { colorHex: "#6E4B33", roughness: 0.66, metalness: 0.08, clearcoat: 0.06 },
          mechanicsNoteVi: "Khi xe rẽ trái hoặc phải, bánh ngoài quay nhanh hơn bánh trong; hiệu số vòng quay này là tín hiệu cơ học đầu vào cho bộ vi sai.",
          mechanicsNoteEn: "During any left or right turn, the outer wheel rotates farther than the inner wheel; this rotational difference serves as the mechanical input to the differential."
        },
        {
          partId: "sp-wheel-pinion-gears",
          nameVi: "Hai bánh răng trung gian khớp ly hợp (Tiểu Bình Luân)",
          nameEn: "Twin Intermediate Clutch Pinion Gears",
          nameZh: "左右附轮小齿轮（离合拨齿）",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "2x geared CylinderGeometry(rTop: 0.24, rBot: 0.24, h: 0.09, radialSegments: 24) mounted on sliding yoke + pos [±0.58, 0.85, 0] + rot [0, 0, 1.5708]",
          explodeOffset: [0, 0.65, 0.85],
          pbrMaterial: { colorHex: "#8C6D3F", roughness: 0.38, metalness: 0.72, clearcoat: 0.16 },
          mechanicsNoteVi: "Tự động ăn khớp hoặc tách khớp tùy theo chiều rẽ (theo thiết kế Yến Túc 1027) hoặc truyền vi sai liên tục không gián đoạn (Ngô Đức Nhân 1107).",
          mechanicsNoteEn: "Engages or disengages depending on turn direction (Yan Su 1027 design) or feeds continuous differential torque without backlash (Wu Deren 1107 design)."
        },
        {
          partId: "sp-differential-cage",
          nameVi: "Cụm bánh răng hành tinh vi sai trung tâm (Đại Bình Luân)",
          nameEn: "Central Differential Master Gear Assembly",
          nameZh: "中央差速大平轮组件",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Master horizontal gear CylinderGeometry(rTop: 0.44, rBot: 0.44, h: 0.10, radialSegments: 48) + 2x bevel pinions ConeGeometry(r: 0.14, h: 0.12, segments: 18) + pos [0, 1.18, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.35, 0],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.34, metalness: 0.80, clearcoat: 0.22 },
          mechanicsNoteVi: "Tính toán cơ học hiệu góc quay giữa bánh trái và bánh phải, xoay ngược trục đứng đúng bằng góc xe vừa đổi hướng để bù trừ sai lệch.",
          mechanicsNoteEn: "Mechanically computes the angular difference between left and right wheels, counter-rotating the vertical shaft by the exact turn angle to cancel heading drift."
        },
        {
          partId: "sp-wooden-pavilion-box",
          nameVi: "Hộp che cơ cấu sơn son thếp vàng (hai tầng mui xe)",
          nameEn: "Vermilion Lacquered Gear Housing & Upper Canopy",
          nameZh: "朱漆木箱护罩与车舆",
          geometryType: "BoxGeometry",
          dimensionsSpec: "4x side panels BoxGeometry(w: 1.50, h: 0.78, d: 0.06) + 4x corner posts CylinderGeometry(r: 0.04, h: 1.05) + pos [0, 1.32, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.75, -1.15],
          pbrMaterial: { colorHex: "#821C1C", roughness: 0.42, metalness: 0.10, clearcoat: 0.32 },
          mechanicsNoteVi: "Bảo vệ bộ truyền bánh răng gỗ và đồng khỏi bụi cát đường trường đồng thời giữ ổn định ổ trượt phía trên cho trục tượng.",
          mechanicsNoteEn: "Shields the wooden and bronze gear train from road dust while supporting the upper bearing collar that stabilizes the vertical figure shaft."
        },
        {
          partId: "sp-vertical-pointer-shaft",
          nameVi: "Trục đứng trung tâm nối bánh răng chủ với đế tượng",
          nameEn: "Central Vertical Pointer Shaft",
          nameZh: "中心立轴",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "CylinderGeometry(rTop: 0.045, rBot: 0.055, h: 1.25, radialSegments: 16) + collar TorusGeometry(r: 0.08, tube: 0.025) + pos [0, 1.75, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 2.35, 0],
          pbrMaterial: { colorHex: "#A68246", roughness: 0.32, metalness: 0.78, clearcoat: 0.20 },
          mechanicsNoteVi: "Truyền góc xoay bù trực tiếp từ Đại Bình Luân lên tượng tiên với ma sát thấp nhất nhờ ổ trục đồng lót mỡ động vật.",
          mechanicsNoteEn: "Delivers counter-rotation directly from the master gear to the figure with minimal friction via a lubricated bronze sleeve bearing."
        },
        {
          partId: "sp-immortal-pointer-figure",
          nameVi: "Tượng tiên bằng ngọc/gỗ thếp vàng giơ tay chỉ hướng Nam",
          nameEn: "Gilded Immortal Figure with Outstretched South-Pointing Arm",
          nameZh: "木雕贴金仙人指南像",
          geometryType: "LatheGeometry",
          dimensionsSpec: "Body LatheGeometry(16-point robed silhouette, rMax: 0.16, h: 0.68, segments: 20) + arm CylinderGeometry(r: 0.03, h: 0.36) + pos [0, 2.52, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 3.15, 0],
          pbrMaterial: { colorHex: "#C9A24B", roughness: 0.30, metalness: 0.74, clearcoat: 0.28 },
          mechanicsNoteVi: "Khởi chỉnh một lần duy nhất về hướng Nam lúc xuất phát; mọi khúc cua về sau đều được cơ cấu vi sai giữ nguyên phương vị mà hoàn toàn không dùng nam châm.",
          mechanicsNoteEn: "Aligned once toward due South at departure; every subsequent turn is compensated purely by differential gearing without any magnetic compass."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [3.8, 2.6, 4.2], target: [0, 1.3, 0] },
        { id: "mechanism", labelVi: "Cận cảnh bộ bánh răng vi sai", labelEn: "Close-up Differential Gears", pos: [1.6, 1.5, 1.8], target: [0, 1.15, 0] },
        { id: "exploded", labelVi: "Tách lớp cơ cấu vi sai", labelEn: "Exploded Differential Assembly", pos: [4.8, 3.8, 5.2], target: [0, 1.8, 0] }
      ],
      learningHighlightVi: "Xe Chỉ Nam vận hành hoàn toàn bằng cơ học vi sai bánh răng — phát minh sớm hơn bộ vi sai ô tô hiện đại hơn 1.600 năm, được chép đủ thông số số răng trong Tống Sử · Dư Phục Chí.",
      learningHighlightEn: "The South-Pointing Chariot operated purely through differential gear mechanics — predating modern automotive differentials by over 1,600 years, with full tooth-count tables recorded in the History of Song."
    },

    /* ========================================================================
     * 06. KHUON DUC GHEP KHOI (BINH PHAM PHAP) CHO HAU MAU MAU DINH
     * ======================================================================== */
    {
      id: "houmuwu-ding-piece-mold-3d",
      titleVi: "Khuôn Đúc Ghép Khối (Bình Phạm Pháp 陶范法) — Hậu Mẫu Mậu Đỉnh",
      titleEn: "Clay Piece-Mold Casting System (Taofanfa) — Houmuwu Ding",
      titleZh: "后母戊鼎陶范法分铸合范模型",
      eraVi: "Cuối nhà Thương · Ân Khư, An Dương (~1250–1192 TCN)",
      eraEn: "Late Shang Dynasty, Yinxu, Anyang (c. 1250–1192 BCE)",
      dimensionsReal: "Đỉnh thành phẩm cao 133 cm · Dài 110 cm · Rộng 79 cm · Thành dày 6 cm · Nặng 832,84 kg",
      layers: [
        {
          partId: "hm-rammed-casting-pit",
          nameVi: "Bệ khuôn đất nung đặt lật úp (Đế Phạm)",
          nameEn: "Inverted Terracotta Base Mold Bed (Bottom Mold)",
          nameZh: "倒置陶质底座范",
          geometryType: "BoxGeometry",
          dimensionsSpec: "BoxGeometry(w: 2.20, h: 0.32, d: 1.68) with recessed rim groove + pos [0, 0.16, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.85, 0],
          pbrMaterial: { colorHex: "#9E7F58", roughness: 0.90, metalness: 0.02, clearcoat: 0.0 },
          mechanicsNoteVi: "Đặt đỉnh ở tư thế lật úp miệng xuống dưới để rót đồng lỏng từ phía 4 chân trụ, giúp khí nóng thoát sạch và tránh bọt rỗ ở miệng đỉnh.",
          mechanicsNoteEn: "Holds the cauldron inverted mouth-down so molten bronze pours through the four legs, purging trapped gases and preventing porosity along the rim."
        },
        {
          partId: "hm-inner-clay-core",
          nameVi: "Lõi đất trong (Nê Tâm) tạo khoang rỗng thành dày 6 cm",
          nameEn: "Inner Clay Core Defining the 6 cm Wall Cavity",
          nameZh: "内部泥芯（腹芯）",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Beveled BoxGeometry(w: 1.38, h: 0.96, d: 0.92) + inscribed inner wall relief + pos [0, 0.80, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0.35, 0],
          pbrMaterial: { colorHex: "#B89B72", roughness: 0.88, metalness: 0.03, clearcoat: 0.0 },
          mechanicsNoteVi: "Chế tác từ đất hoàng thổ pha cát mịn và trấu nung xốp để co ngót đồng bộ khi đồng nguội, tránh nứt thân đỉnh nặng 832,84 kg.",
          mechanicsNoteEn: "Formulated from loess clay tempered with fine sand and organic ash so the core yields slightly during solidification, preventing thermal cracking in the 832.84 kg casting."
        },
        {
          partId: "hm-bronze-chaplets",
          nameVi: "Các miếng đệm đồng định cữ khe rót (Tâm Sanh)",
          nameEn: "Bronze Wall-Thickness Spacers (Chaplets)",
          nameZh: "铜质芯撑（壁厚定位片）",
          geometryType: "BoxGeometry",
          dimensionsSpec: "16x BoxGeometry(w: 0.07, h: 0.07, d: 0.08) arrayed around core perimeter + pos [±0.72, 0.55..1.10, ±0.49] + rot [0, 0, 0]",
          explodeOffset: [0.65, 0.55, 0.55],
          pbrMaterial: { colorHex: "#8C6D3F", roughness: 0.42, metalness: 0.78, clearcoat: 0.14 },
          mechanicsNoteVi: "Giữ cố định khe hở chính xác 6 cm giữa lõi trong và 4 mảnh vỏ ngoài trước khi rót gần 1.000 kg hợp kim đồng–thiếc–chì lỏng.",
          mechanicsNoteEn: "Maintains a uniform 6 cm gap between the inner core and outer mold sections before pouring nearly 1,000 kg of molten Cu–Sn–Pb alloy."
        },
        {
          partId: "hm-four-outer-molds",
          nameVi: "Bốn mảnh vỏ khuôn ngoài chạm âm bản Thao Thiết & Quỳ Long",
          nameEn: "Four Outer Clay Mold Sections with Recessed Taotie & Kui-Dragon Relief",
          nameZh: "四块外范（阴刻饕餮夔龙纹）",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "4x interlocking wall ExtrudeGeometry(w: 1.72/1.22, h: 1.08, depth: 0.22) with mortise registration keys + pos [0/±0.94, 0.86, ±0.68/0] + rot [0, 0..1.5708, 0]",
          explodeOffset: [1.25, 0.85, 1.25],
          pbrMaterial: { colorHex: "#C4A882", roughness: 0.86, metalness: 0.03, clearcoat: 0.0 },
          mechanicsNoteVi: "Cho phép nghệ nhân khắc hoa văn Thao Thiết trực tiếp lên mặt trong từng mảnh khuôn rời rồi ghép kín bằng ngàm mộng âm dương.",
          mechanicsNoteEn: "Allows artisans to carve sharp Taotie and Kui-dragon motifs directly onto each removable inner face before locking all four walls with mortise keys."
        },
        {
          partId: "hm-bronze-vessel-cast",
          nameVi: "Thân Hậu Mẫu Mậu Đỉnh đúc đồng (Cu 84,77% · Sn 11,64% · Pb 2,79%)",
          nameEn: "Cast Bronze Houmuwu Ding Body (84.77% Cu, 11.64% Sn, 2.79% Pb)",
          nameZh: "后母戊鼎青铜铸体",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Hollowed rectangular vessel BoxGeometry(w: 1.54, h: 1.04, d: 1.10) + 4x leg CylinderGeometry(r: 0.14, h: 0.72) + pos [0, 1.12, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.65, 0],
          pbrMaterial: { colorHex: "#5B6E5C", roughness: 0.44, metalness: 0.74, clearcoat: 0.18 },
          mechanicsNoteVi: "Thành phần chì 2,79% hạ điểm nóng chảy và tăng độ chảy loãng của đồng lỏng, giúp điền đầy hoàn toàn các chi tiết hoa văn mảnh.",
          mechanicsNoteEn: "A 2.79 percent lead addition lowers melting temperature and increases alloy fluidity, ensuring complete fill of fine geometric reliefs."
        },
        {
          partId: "hm-four-leg-molds",
          nameVi: "Bốn bộ khuôn chân trụ & ống rót đồng đa lò (Kiêu Khẩu)",
          nameEn: "Four Cylindrical Leg Molds & Multi-Crucible Pouring Gates",
          nameZh: "四足合范与多坩埚浇口",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "4x hollow CylinderGeometry(rTop: 0.22, rBot: 0.22, h: 0.82, radialSegments: 20) + 4x funnel ConeGeometry(r: 0.18, h: 0.24) + pos [±0.54, 1.88, ±0.34] + rot [0, 0, 0]",
          explodeOffset: [0, 2.55, 0],
          pbrMaterial: { colorHex: "#8C6B4A", roughness: 0.87, metalness: 0.04, clearcoat: 0.0 },
          mechanicsNoteVi: "Điều phối hơn 70 nồi nấu đồng (Tướng Quân Khôi) rót đồng thời qua các ống rót chân trụ nhằm tránh đường hàn nguội giữa các mẻ rót.",
          mechanicsNoteEn: "Channels simultaneous pouring from over 70 earthen crucibles through the leg gates, preventing cold-shut seams across the massive casting."
        },
        {
          partId: "hm-separate-ear-molds",
          nameVi: "Cặp khuôn đúc nối tai đỉnh (Phân Chú Pháp — Hổ Vồ Người)",
          nameEn: "Cast-On Ear Molds (Fen Zhu Method — Twin Tigers Motif)",
          nameZh: "双耳分铸合范（双虎食人纹）",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "2x arched handle ExtrudeGeometry(w: 0.44, h: 0.48, depth: 0.14) clamped onto upper rim + pos [±0.68, 0.22, 0] + rot [0, 1.5708, 0]",
          explodeOffset: [0, -1.55, 0],
          pbrMaterial: { colorHex: "#7D6044", roughness: 0.85, metalness: 0.05, clearcoat: 0.02 },
          mechanicsNoteVi: "Hai tai đứng dày nặng được đúc nối riêng (Phân Chú) sau khi thân đỉnh đã đông đặc, giảm rủi ro co ngót và lỗi rót trên khối đồng lớn.",
          mechanicsNoteEn: "The thick upright handles were cast separately onto the solidified vessel rim via the Fen Zhu join-casting technique, mitigating shrinkage defects."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [4.0, 2.8, 4.4], target: [0, 1.1, 0] },
        { id: "mechanism", labelVi: "Cận cảnh khe rót 6 cm & Tâm Sanh", labelEn: "Close-up 6 cm Cavity & Chaplets", pos: [2.0, 1.4, 2.2], target: [0, 0.9, 0] },
        { id: "exploded", labelVi: "Tách lớp khuôn ghép Bình Phạm", labelEn: "Exploded Piece-Mold Assembly", pos: [5.4, 3.8, 5.8], target: [0, 1.2, 0] }
      ],
      learningHighlightVi: "Hậu Mẫu Mậu Đỉnh là vật phẩm đồng thanh lớn nhất thời cổ đại còn nguyên vẹn (832,84 kg), đạt được nhờ kỹ thuật Bình Phạm Pháp ghép khối đất nung kết hợp đúc nối Phân Chú và quy mô hợp tác hàng trăm thợ luyện kim nhà Thương.",
      learningHighlightEn: "The Houmuwu Ding is the heaviest intact ancient bronze vessel ever excavated (832.84 kg), achieved through clay piece-mold assembly, Fen Zhu cast-on handles, and coordinated multi-crucible pouring by Shang foundry teams."
    },

    /* ========================================================================
     * 07. CHAU THUY TIEN MEN THIEN THANH GOM NHU DIEU (BAC TONG)
     * ======================================================================== */
    {
      id: "ru-ware-narcissus-basin-3d",
      titleVi: "Chậu Thủy Tiên Men Thiên Thanh Gốm Nhữ Diêu (Bắc Tống)",
      titleEn: "Ru Ware Sky-Blue Glazed Narcissus Basin (Northern Song)",
      titleZh: "北宋汝窑天青釉水仙盆",
      eraVi: "Bắc Tống · Triết Tông – Huy Tông (~1086–1125 SCN, lò Thanh Lương Tự, Bảo Phong)",
      eraEn: "Northern Song Dynasty, Zhezong–Huizong Reign (c. 1086–1125 CE, Qingliangsi Kiln)",
      dimensionsReal: "Dài 23,0 cm · Rộng 16,4 cm · Cao 6,7 cm · 4 chân mây & 5–6 dấu đinh Mè Xích",
      layers: [
        {
          partId: "ru-ash-grey-body",
          nameVi: "Cốt đất Hương Hôi Thai (xám tro mịn giàu nhôm)",
          nameEn: "Ash-Grey Stoneware Body (Xianghui Tai)",
          nameZh: "香灰胎椭圆器身坯体",
          geometryType: "LatheGeometry",
          dimensionsSpec: "Elliptical-scaled LatheGeometry(22-point flaring wall curve, rMax: 1.15, h: 0.67, segments: 48) with scale [1.18, 1.0, 0.84] + pos [0, 0.38, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0, 0],
          pbrMaterial: { colorHex: "#6E685F", roughness: 0.84, metalness: 0.02, clearcoat: 0.0 },
          mechanicsNoteVi: "Đất sét cao lanh pha khoảng 2,2% oxit sắt nung ở 1.220–1.250 độ C tạo cốt gốm mỏng, cứng và giữ độ co ngót đồng đều cho dáng bầu dục khó định hình.",
          mechanicsNoteEn: "Kaolin-rich stoneware containing ~2.2 percent iron oxide fired at 1,220–1,250 C forms a thin, rigid elliptical body resistant to kiln warping."
        },
        {
          partId: "ru-tianqing-glaze",
          nameVi: "Lớp men Thiên Thanh pha bột Mã Não (nhũ quang ngọc)",
          nameEn: "Sky-Blue Tianqing Opalescent Agate-Enriched Glaze",
          nameZh: "玛瑙入釉天青乳浊釉层",
          geometryType: "LatheGeometry",
          dimensionsSpec: "Outer shell LatheGeometry(22-point offset +0.025, rMax: 1.18, h: 0.69, segments: 48) scaled [1.18, 1.0, 0.84] + pos [0, 0.38, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0.95, 0],
          pbrMaterial: { colorHex: "#7FA8A1", roughness: 0.22, metalness: 0.04, clearcoat: 0.85 },
          mechanicsNoteVi: "Cấu trúc tách pha lỏng-lỏng kích thước nanomet cùng tinh thể anorthite tán xạ ánh sáng theo hiệu ứng Rayleigh, tạo sắc xanh dịu như trời sau mưa.",
          mechanicsNoteEn: "Nanoscale liquid-liquid phase separation and fine anorthite crystals scatter short-wavelength light via Rayleigh scattering, yielding a muted jade-like sky-blue sheen."
        },
        {
          partId: "ru-ice-crackle-layer",
          nameVi: "Mạng lưới vết rạn Băng Liệt (rạn vảy cá nghiêng đa tầng)",
          nameEn: "Oblique Multi-Layered Ice-Crackle Network (Binglie Wen)",
          nameZh: "斜开片冰裂纹折射层",
          geometryType: "TubeGeometry",
          dimensionsSpec: "24x branching surface TubeGeometry(curved paths, r: 0.004, tubularSegments: 16) mapped onto inner/outer walls + pos [0, 0.42, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.75, 0],
          pbrMaterial: { colorHex: "#A8C6C0", roughness: 0.16, metalness: 0.08, clearcoat: 0.92 },
          mechanicsNoteVi: "Hình thành do chênh lệch hệ số giãn nở nhiệt giữa cốt Hương Hôi và lớp men dày; khe nứt nghiêng góc 30–45 độ tạo phản xạ ánh bạc như mặt băng vỡ.",
          mechanicsNoteEn: "Generated by thermal-expansion mismatch between the ash-grey body and thick glaze; 30–45 degree oblique fissures refract light like layered fractured ice."
        },
        {
          partId: "ru-flared-rim-lip",
          nameVi: "Miệng chậu loe cong mỏng lộ ánh đồng đỏ nhạt",
          nameEn: "Thinly Glazed Flared Rim with Pale Buff Edge",
          nameZh: "微敞口沿与薄釉露胎边",
          geometryType: "TorusGeometry",
          dimensionsSpec: "Elliptical TorusGeometry(r: 1.15, tube: 0.032, radialSegments: 12, tubularSegments: 64) scaled [1.18, 0.84, 1.0] + pos [0, 0.72, 0] + rot [1.5708, 0, 0]",
          explodeOffset: [0, 2.45, 0],
          pbrMaterial: { colorHex: "#96BEB7", roughness: 0.24, metalness: 0.05, clearcoat: 0.78 },
          mechanicsNoteVi: "Men nóng chảy ở nhiệt độ cao chảy nhẹ xuống thành làm mỏng lớp men tại mép miệng, tạo đường viền sáng tự nhiên nhấn dáng bầu dục.",
          mechanicsNoteEn: "At peak firing temperature the viscous glaze thins slightly along the lip, exposing a subtle warm-tinted contour that accentuates the oval profile."
        },
        {
          partId: "ru-four-cloud-feet",
          nameVi: "Bốn chân dáng đầu mây uốn cong (Vân Đầu Túc)",
          nameEn: "Four Sculpted Cloud-Scroll Cabriole Feet",
          nameZh: "四只云头状曲足",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "4x curved cloud-scroll ExtrudeGeometry(w: 0.26, h: 0.18, depth: 0.12, bevelEnabled: true) + pos [±0.78, 0.10, ±0.46] + rot [0, ±0.52, 0]",
          explodeOffset: [0, -0.65, 0],
          pbrMaterial: { colorHex: "#7FA8A1", roughness: 0.24, metalness: 0.04, clearcoat: 0.82 },
          mechanicsNoteVi: "Phân bổ trọng lượng chậu nước và củ thủy tiên đều lên 4 điểm tiếp xúc cong, nâng đáy chậu lên khỏi mặt bàn tạo dáng thanh thoát.",
          mechanicsNoteEn: "Distributes the weight of water and narcissus bulbs evenly across four curved supports while lifting the base cleanly above the table surface."
        },
        {
          partId: "ru-sesame-spur-marks",
          nameVi: "Năm dấu đinh Mè Xích (Chi Ma Tranh Đinh) dưới đáy tráng men kín",
          nameEn: "Five Sesame-Seed Spur Marks on Fully Glazed Base",
          nameZh: "满釉支烧五枚芝麻挣钉痕",
          geometryType: "ConeGeometry",
          dimensionsSpec: "5x miniature oval-tip ConeGeometry(r: 0.022, h: 0.035, radialSegments: 10) arranged symmetrically on underside + pos [±0.52/0, 0.17, ±0.28/0] + rot [3.1416, 0, 0]",
          explodeOffset: [0, -1.35, 0],
          pbrMaterial: { colorHex: "#59534B", roughness: 0.90, metalness: 0.02, clearcoat: 0.0 },
          mechanicsNoteVi: "Kỹ thuật Mãn Dứu Chi Thiêu (tráng men kín cả đáy rồi đặt lên 5 đinh chịu lửa siêu nhỏ) để lại 5 vết trần cốt nhỏ như hạt mè — dấu giám định độc quyền của Nhữ Diêu.",
          mechanicsNoteEn: "Full-glaze spur firing suspends the entire vessel on five needle-fine refractory pins, leaving five sesame-seed clay marks that serve as Ru ware's diagnostic signature."
        },
        {
          partId: "ru-kiln-sagger-pad",
          nameVi: "Bao nung chịu lửa & tấm kê 5 đinh đất sét (Chi Đinh Điệm Bính)",
          nameEn: "Refractory Kiln Sagger & Five-Pin Firing Setter",
          nameZh: "匣钵与五钉支烧垫饼",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Setter disk CylinderGeometry(rTop: 0.92, rBot: 0.96, h: 0.09, radialSegments: 32) scaled [1.15, 1.0, 0.85] + 5x pin ConeGeometry(r: 0.02, h: 0.08) + pos [0, -0.05, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -2.10, 0],
          pbrMaterial: { colorHex: "#A88D68", roughness: 0.92, metalness: 0.02, clearcoat: 0.0 },
          mechanicsNoteVi: "Cách ly phôi gốm khỏi tro bụi và ngọn lửa trực tiếp trong lò khí quyển khử, giữ sắc men Thiên Thanh tinh khiết không bám đốm than.",
          mechanicsNoteEn: "Isolates the glazed vessel from fly ash and direct flame inside the reduction kiln, preserving a spotless sky-blue glaze surface."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [2.8, 2.0, 3.0], target: [0, 0.45, 0] },
        { id: "mechanism", labelVi: "Cận cảnh đáy 5 dấu đinh Mè Xích", labelEn: "Close-up Base Spur Marks", pos: [1.6, -1.1, 1.8], target: [0, 0.15, 0] },
        { id: "exploded", labelVi: "Tách lớp cốt – men – bao nung", labelEn: "Exploded Body, Glaze & Setter", pos: [3.8, 2.6, 4.2], target: [0, 0.35, 0] }
      ],
      learningHighlightVi: "Gốm Nhữ Diêu chỉ nung cho hoàng thất Bắc Tống trong khoảng 20 năm nên hiện toàn thế giới chỉ còn chưa tới 100 hiện vật truyền thế; kỹ thuật tráng men kín 5 đinh Mè Xích và men pha bột mã não đứng đầu Ngũ Đại Danh Diêu.",
      learningHighlightEn: "Produced for the Northern Song court for roughly 20 years, fewer than 100 heirloom Ru ware pieces survive worldwide; its agate-enriched sky-blue glaze and five sesame-seed spur marks crown China's Five Great Kilns."
    },

    /* ========================================================================
     * 08. KHUNG CUI HOA LAU DET VAN CAM NAM KINH (DAI HOA LAU MOC CHUC CO)
     * ======================================================================== */
    {
      id: "nanjing-yunjin-drawloom-3d",
      titleVi: "Khung Cửi Hoa Lâu Dệt Vân Cẩm Nam Kinh (Đại Hoa Lâu Mộc Chức Cơ)",
      titleEn: "Nanjing Yunjin Brocade Drawloom (Great Flower-Tower Wooden Loom)",
      titleZh: "南京云锦大花楼木织机（2009年UNESCO非遗）",
      eraVi: "Hoàn thiện thời Minh–Thanh · Di sản Phi vật thể UNESCO (2009)",
      eraEn: "Perfected in Ming–Qing Dynasties · UNESCO Intangible Cultural Heritage (2009)",
      dimensionsReal: "Dài 5,60 m · Rộng 1,40 m · Cao 4,00 m · Vận hành đồng bộ 2 nghệ nhân (năng suất 5–6 cm/ngày)",
      layers: [
        {
          partId: "yj-main-timber-frame",
          nameVi: "Khung chính hai tầng gỗ du (dài 5,6 m × cao 4,0 m)",
          nameEn: "Two-Story Elm Timber Loom Frame (5.6 m × 4.0 m)",
          nameZh: "双层榆木大花楼机架",
          geometryType: "BoxGeometry",
          dimensionsSpec: "4x main posts BoxGeometry(w: 0.10, h: 3.60, d: 0.10) + 6x longitudinal beams BoxGeometry(w: 0.09, h: 0.11, d: 4.80) + pos [0, 1.80, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.75, 0],
          pbrMaterial: { colorHex: "#6E4B33", roughness: 0.70, metalness: 0.04, clearcoat: 0.06 },
          mechanicsNoteVi: "Liên kết mộng xuyên gỗ du cứng chịu lực căng liên tục của hơn 14.000 sợi tơ dọc và trọng lượng nghệ nhân kéo hoa ngồi ở tầng trên.",
          mechanicsNoteEn: "Mortise-and-tenon elm joinery withstands the continuous tension of over 14,000 silk warp threads plus the weight of the drawboy seated on the upper deck."
        },
        {
          partId: "yj-warp-cloth-beams",
          nameVi: "Trục cuốn tơ dọc phía sau (Kinh Trục) & trục cuốn gấm phía trước",
          nameEn: "Rear Silk Warp Beam & Front Brocade Cloth Roller",
          nameZh: "后经轴与前卷布轴",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "2x CylinderGeometry(rTop: 0.14, rBot: 0.14, h: 1.32, radialSegments: 24) at z = -2.15 and z = +1.95 + pos [0, 0.92, 0] + rot [0, 0, 1.5708]",
          explodeOffset: [0, 0.25, -1.25],
          pbrMaterial: { colorHex: "#D9CBB3", roughness: 0.52, metalness: 0.05, clearcoat: 0.10 },
          mechanicsNoteVi: "Giữ độ căng đồng đều trên toàn khổ vải 78 cm, điều tiết từng milimet bước tiến khi dệt hoa văn rồng mây nhiều màu.",
          mechanicsNoteEn: "Maintains uniform longitudinal tension across the 78 cm fabric width, advancing the woven brocade in millimeter increments."
        },
        {
          partId: "yj-upper-drawboy-tower",
          nameVi: "Sàn Hoa Lâu tầng trên cho thợ kéo hoa (Vãn Hoa Công)",
          nameEn: "Upper Drawboy Tower Platform (Wanhua Gong)",
          nameZh: "上层花楼挽花工操作台",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Platform BoxGeometry(w: 1.24, h: 0.09, d: 1.15) + safety rails BoxGeometry(w: 0.06, h: 0.55, d: 1.15) + pos [0, 2.65, -0.35] + rot [0, 0, 0]",
          explodeOffset: [0, 2.25, 0],
          pbrMaterial: { colorHex: "#5C3D28", roughness: 0.66, metalness: 0.04, clearcoat: 0.08 },
          mechanicsNoteVi: "Bố trí ngay trên cụm dây lập trình hoa văn để thợ tầng trên kéo chọn chính xác từng nhóm sợi tơ dọc theo nhịp hô với thợ tầng dưới.",
          mechanicsNoteEn: "Positioned directly above the pattern harness so the upper drawboy pulls exact warp-thread groups in rhythmic coordination with the lower weaver."
        },
        {
          partId: "yj-jacquard-pattern-harness",
          nameVi: "Bộ dây lập trình Hoa Bản (Kết Bản Ký Hoa) & chùm dây nhĩ",
          nameEn: "Programmed Silk Pattern Harness (Huaben Binary Cords)",
          nameZh: "结本记花程序线与耳子线束",
          geometryType: "TubeGeometry",
          dimensionsSpec: "32x vertical harness TubeGeometry(straight/angled lines, r: 0.008, tubularSegments: 12) + overhead pulley CylinderGeometry(r: 0.06, h: 1.18) + pos [0, 2.15, -0.35] + rot [0, 0, 0]",
          explodeOffset: [0, 1.55, -0.65],
          pbrMaterial: { colorHex: "#C9A24B", roughness: 0.44, metalness: 0.25, clearcoat: 0.14 },
          mechanicsNoteVi: "Lưu trữ đồ án hoa văn bằng nút thắt nhị phân (nâng/hạ sợi dọc) trước khi máy dệt thẻ đục lỗ Jacquard châu Âu ra đời hàng trăm năm.",
          mechanicsNoteEn: "Encodes intricate brocade motifs as knotted binary raise-or-lower memory cords centuries before European punched-card Jacquard looms."
        },
        {
          partId: "yj-heddle-reed-beater",
          nameVi: "Khung go (Tông Khuông) & lược dập tre (Khấu) nén sợi ngang",
          nameEn: "Heddle Shafts & Swinging Bamboo Reed Beater",
          nameZh: "综框与竹筘打纬机构",
          geometryType: "BoxGeometry",
          dimensionsSpec: "6x heddle frames BoxGeometry(w: 1.26, h: 0.58, d: 0.03) + beater batten BoxGeometry(w: 1.30, h: 0.14, d: 0.09) + pos [0, 1.18, 0.72] + rot [0, 0, 0]",
          explodeOffset: [0, 0.95, 0.95],
          pbrMaterial: { colorHex: "#8C6B4A", roughness: 0.62, metalness: 0.06, clearcoat: 0.08 },
          mechanicsNoteVi: "Tách miệng sợi dọc sạch gọn sau mỗi nhịp dập và nén chặt sợi tơ vàng, lông công vào nền gấm mà không làm xước sợi tơ tằm.",
          mechanicsNoteEn: "Opens a crisp shed between raised and lowered warps and beats gold-wrapped silk and peacock-feather wefts tightly without abrading fine filaments."
        },
        {
          partId: "yj-lower-treadles-bench",
          nameVi: "Ghế thợ dệt tầng dưới & hệ bàn đạp chân (Đạp Bản)",
          nameEn: "Lower Weaver Bench & Foot Treadle Linkage",
          nameZh: "下层织手坐凳与脚踏板",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Bench BoxGeometry(w: 1.10, h: 0.08, d: 0.38) + 8x treadle levers BoxGeometry(w: 0.06, h: 0.04, d: 0.95) + pos [0, 0.32, 1.55] + rot [0.14, 0, 0]",
          explodeOffset: [0, -0.45, 1.35],
          pbrMaterial: { colorHex: "#4A3222", roughness: 0.72, metalness: 0.04, clearcoat: 0.05 },
          mechanicsNoteVi: "Cho phép thợ dệt tầng dưới điều khiển khung go nền bằng chân trong khi hai tay luồn hàng chục ống thoi màu và chỉ vàng.",
          mechanicsNoteEn: "Enables the lower weaver to cycle ground-weave heddles by foot while both hands pass dozens of polychrome silk and gold-thread bobbins."
        },
        {
          partId: "yj-gold-brocade-shuttles",
          nameVi: "Thoi gỗ & tấm gấm Vân Cẩm dệt chỉ vàng – lông công",
          nameEn: "Wooden Shuttles & Gold-and-Peacock-Feather Brocade Web",
          nameZh: "妆花木梭与捻金孔雀羽织面",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "Brocade sheet BoxGeometry(w: 1.16, h: 0.02, d: 1.25) + 4x boat shuttles ExtrudeGeometry(w: 0.24, h: 0.05, depth: 0.04) + pos [0, 1.02, 1.32] + rot [0, 0, 0]",
          explodeOffset: [1.30, 0.70, 0.85],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.34, metalness: 0.58, clearcoat: 0.30 },
          mechanicsNoteVi: "Kỹ thuật Thông Kinh Đoạn Vĩ (sợi dọc suốt khổ, sợi ngang ngắt từng mảng màu) giúp phối hàng chục sắc tơ mà máy dệt công nghiệp hiện đại không thể sao chép trọn vẹn.",
          mechanicsNoteEn: "Continuous-warp, discontinuous-weft (Tongjing Duanwei) inlay lets weavers insert localized polychrome blocks impossible to replicate fully on modern power looms."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [5.4, 3.2, 5.2], target: [0, 1.7, 0] },
        { id: "mechanism", labelVi: "Cận cảnh Hoa Bản & khung go", labelEn: "Close-up Pattern Harness & Heddles", pos: [2.4, 2.2, 1.9], target: [0, 1.8, 0.2] },
        { id: "exploded", labelVi: "Tách lớp khung cửi 2 tầng", labelEn: "Exploded Two-Story Loom", pos: [6.8, 4.4, 6.8], target: [0, 2.0, 0] }
      ],
      learningHighlightVi: "Đại Hoa Lâu Mộc Chức Cơ dài 5,6 m cao 4 m là đỉnh cao công nghệ dệt thủ công cổ đại: hai nghệ nhân phối hợp tầng trên – tầng dưới qua bộ dây lập trình Hoa Bản, mỗi ngày chỉ dệt được 5–6 cm gấm Vân Cẩm.",
      learningHighlightEn: "Standing 5.6 m long and 4.0 m high, the Nanjing drawloom represents the summit of pre-industrial textile engineering: two coordinated artisans operate its knotted Huaben memory harness to weave just 5–6 cm of Yunjin brocade per day."
    },

    /* ========================================================================
     * 09. THO LAU TRON VINH DINH — THUA KHAI LAU (1709)
     * ======================================================================== */
    {
      id: "chengqilou-fujian-tulou-3d",
      titleVi: "Thổ Lâu Tròn Vĩnh Định — Thừa Khải Lâu (1709)",
      titleEn: "Yongding Circular Tulou — Chengqilou (1709)",
      titleZh: "福建永定圆形土楼·承启楼（1709）",
      eraVi: "Nhà Thanh · Khang Hy năm thứ 48 (1709 SCN, thôn Cao Bắc, Vĩnh Định, UNESCO 2008)",
      eraEn: "Qing Dynasty, 48th Year of Kangxi (1709 CE, Gaobei Village, Yongding, UNESCO 2008)",
      dimensionsReal: "Đường kính 73,0 m · Cao 12,4 m (4 tầng) · Tường đất nện dày 1,5 m ở chân thu còn 1,0 m ở đỉnh · 4 vòng đồng tâm 400 gian",
      layers: [
        {
          partId: "tl-granite-foundation",
          nameVi: "Móng đá cuội hoa cương chống lũ & chống đào hầm (cao 1,8 m)",
          nameEn: "Granite Cobble Anti-Flood & Anti-Tunneling Plinth (1.8 m)",
          nameZh: "花岗岩卵石防洪基座",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Hollow ring ExtrudeGeometry / CylinderGeometry(rOuter: 3.65, rInner: 3.35, h: 0.24, radialSegments: 48) + pos [0, 0.12, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.80, 0],
          pbrMaterial: { colorHex: "#707573", roughness: 0.88, metalness: 0.04, clearcoat: 0.0 },
          mechanicsNoteVi: "Ngăn nước lũ vùng núi Phúc Kiến xói mòn chân tường đất nện đồng thời chống kẻ xâm nhập đào ngầm dưới tường thành.",
          mechanicsNoteEn: "Shields the rammed-earth base from mountain flash floods while preventing attackers from tunneling beneath the perimeter wall."
        },
        {
          partId: "tl-outer-rammed-earth-wall",
          nameVi: "Vòng 1: Tường đất nện gia cố tre (4 tầng, 72 gian/tầng)",
          nameEn: "Ring 1: Bamboo-Reinforced Rammed-Earth Wall (4 Stories, 72 Rooms/Floor)",
          nameZh: "第一环四层夯土外墙（每层72间）",
          geometryType: "LatheGeometry",
          dimensionsSpec: "Tapered hollow cylinder LatheGeometry(rBotOuter: 3.65, rTopOuter: 3.55, rInner: 3.40, h: 1.55, segments: 48) + pos [0, 0.24, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 0.45, 0],
          pbrMaterial: { colorHex: "#B89B72", roughness: 0.90, metalness: 0.02, clearcoat: 0.0 },
          mechanicsNoteVi: "Hỗn hợp đất sét vàng, cát, vôi, đường đỏ và dải tre ngâm vôi đầm chặt tạo tường chịu nén đồng khối, cách nhiệt mùa hè và giữ ấm mùa đông; tầng 1–2 kín không mở cửa sổ.",
          mechanicsNoteEn: "Compacted loess, sand, lime, brown sugar, and lime-cured bamboo strips create a monolithic thermal-mass wall with windowless lower two stories for defense."
        },
        {
          partId: "tl-outer-timber-corridors",
          nameVi: "Hệ hành lang gỗ thông 4 tầng & 4 cầu thang đối xứng",
          nameEn: "Four-Tier Pine Timber Galleries & Four Cardinal Staircases",
          nameZh: "四层通廊木构架与四座楼梯",
          geometryType: "TorusGeometry",
          dimensionsSpec: "4x concentric gallery rings CylinderGeometry(rOuter: 3.38, rInner: 2.82, h: 0.08, segments: 48) + 72x radial partitions BoxGeometry(0.05, 1.48, 0.52) + pos [0, 0.40..1.56, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.25, 0],
          pbrMaterial: { colorHex: "#5C3D28", roughness: 0.72, metalness: 0.04, clearcoat: 0.05 },
          mechanicsNoteVi: "Hệ khung gỗ liên kết vào tường đất nện tạo thành vòng neo kéo bên trong, phân tầng công năng: tầng 1 bếp, tầng 2 kho lương, tầng 3–4 phòng ở.",
          mechanicsNoteEn: "Timber floor framing ties inward into the earth wall as a tension collar, zoning functions vertically: kitchens on floor 1, granaries on floor 2, bedrooms on floors 3–4."
        },
        {
          partId: "tl-ring2-inner-apartments",
          nameVi: "Vòng 2: Dãy nhà hai tầng 40 gian/tầng ôm quanh sân trong",
          nameEn: "Ring 2: Two-Story Inner Residential Ring (40 Rooms/Floor)",
          nameZh: "第二环二层内环居室（每层40间）",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Hollow CylinderGeometry(rOuter: 2.38, rInner: 1.92, h: 0.86, radialSegments: 40) + tiled roof ring ConeGeometry(r: 2.48, h: 0.22, openEnded: true) + pos [0, 0.65, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 1.95, 0],
          pbrMaterial: { colorHex: "#8C6B4A", roughness: 0.78, metalness: 0.03, clearcoat: 0.04 },
          mechanicsNoteVi: "Tạo lớp đệm không gian sinh hoạt trung gian giữa khối phòng thủ ngoài cùng và khu vực học đường – tế tự phía trong.",
          mechanicsNoteEn: "Forms an intermediate residential buffer between the outer fortified perimeter and the inner educational and ceremonial core."
        },
        {
          partId: "tl-ring3-library-school",
          nameVi: "Vòng 3: Dãy nhà 1 tầng 32 gian thư viện & phòng học gia tộc",
          nameEn: "Ring 3: Single-Story 32-Room Clan Library & School Ring",
          nameZh: "第三环单层书斋学堂（32间）",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Hollow CylinderGeometry(rOuter: 1.52, rInner: 1.18, h: 0.48, radialSegments: 32) + roof ring ConeGeometry(r: 1.60, h: 0.16, openEnded: true) + pos [0, 0.46, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 2.55, 0],
          pbrMaterial: { colorHex: "#7B563A", roughness: 0.74, metalness: 0.04, clearcoat: 0.05 },
          mechanicsNoteVi: "Giảm dần chiều cao từ ngoài vào trong (4 tầng → 2 tầng → 1 tầng) giúp ánh sáng tự nhiên và gió đối lưu tràn xuống tận giếng trời trung tâm.",
          mechanicsNoteEn: "Stepped inward height reduction (4 → 2 → 1 stories) admits direct daylight and promotes stack-effect ventilation into the central courtyard."
        },
        {
          partId: "tl-ring4-ancestral-hall",
          nameVi: "Vòng 4: Từ đường tổ tiên (Tổ Đường) & Giếng trời trung tâm",
          nameEn: "Ring 4: Central Ancestral Hall & Open Skywell Courtyard",
          nameZh: "第四环中心祖堂与天井",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Ancestral hall BoxGeometry(w: 0.72, h: 0.56, d: 0.62) + curved ridge ExtrudeGeometry + skywell paving CylinderGeometry(r: 1.12, h: 0.04, segments: 32) + pos [0, 0.42, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 3.15, 0],
          pbrMaterial: { colorHex: "#821C1C", roughness: 0.56, metalness: 0.08, clearcoat: 0.12 },
          mechanicsNoteVi: "Đặt tại tâm hình học tuyệt đối của 4 vòng tròn đồng tâm, quy tụ đời sống tín ngưỡng và nghị sự của hơn 600 thành viên đại gia tộc họ Giang.",
          mechanicsNoteEn: "Anchored at the exact geometric center of all four concentric rings, uniting rituals and clan assemblies for over 600 members of the Jiang lineage."
        },
        {
          partId: "tl-yinyang-tile-roof",
          nameVi: "Mái ngói âm dương dốc hai chiều vươn rộng 2,5 m che tường đất",
          nameEn: "Double-Slope Yin-Yang Clay Tile Roof with 2.5 m Overhang",
          nameZh: "双坡阴阳筒瓦大挑檐屋面",
          geometryType: "ConeGeometry",
          dimensionsSpec: "Outer slope ConeGeometry(r: 3.92, h: 0.46, radialSegments: 48, openEnded: true) + inner slope inverted ConeGeometry(r: 3.42, h: 0.36, radialSegments: 48, openEnded: true) + pos [0, 2.02, 0] + rot [0, 0, 0]",
          explodeOffset: [0, 3.85, 0],
          pbrMaterial: { colorHex: "#4B4E52", roughness: 0.78, metalness: 0.06, clearcoat: 0.05 },
          mechanicsNoteVi: "Mái đua vươn rộng 2,5 m như chiếc ô khổng lồ bảo vệ bề mặt đất nện khỏi mưa tạt trực tiếp suốt hơn 300 năm.",
          mechanicsNoteEn: "A 2.5-meter cantilevered eave acts as a giant umbrella protecting the rammed-earth facade from driving rain for over three centuries."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh", labelEn: "Overview", pos: [6.8, 4.8, 6.8], target: [0, 1.0, 0] },
        { id: "mechanism", labelVi: "Cận cảnh mặt cắt tường đất nện & giếng trời", labelEn: "Close-up Rammed-Earth Section & Skywell", pos: [3.2, 2.8, 3.2], target: [0, 0.8, 0] },
        { id: "exploded", labelVi: "Tách lớp 4 vòng đồng tâm", labelEn: "Exploded 4 Concentric Rings", pos: [8.4, 6.2, 8.6], target: [0, 2.2, 0] }
      ],
      learningHighlightVi: "Thừa Khải Lâu được mệnh danh là Vua Thổ Lâu với cấu trúc 4 vòng đồng tâm 400 gian, từng chứa 80 hộ gia tộc sinh sống bình đẳng trong một pháo đài đất nện điều hòa vi khí hậu tự nhiên.",
      learningHighlightEn: "Known as the King of Tulou, Chengqilou houses 400 rooms across four concentric rings, once accommodating 80 egalitarian clan households within a naturally climate-buffered rammed-earth fortress."
    },

    /* ========================================================================
     * 10. DOI SANH TRUC LE NGHI: VIEN KHAU DAN (THIEN DAN) VS DAN NAM GIAO (HUE)
     * ======================================================================== */
    {
      id: "tiantan-vs-namgiao-ritual-axis-3d",
      titleVi: "Đối sánh Trục Lễ Nghi: Viên Khâu Đàn (Bắc Kinh) vs Đàn Nam Giao (Huế)",
      titleEn: "Comparative Ritual Axis: Circular Mound Altar (Beijing) vs Nam Giao Esplanade (Hue)",
      titleZh: "祭天礼仪中轴对比：北京天坛圜丘坛 vs 顺化南郊坛",
      eraVi: "Viên Khâu Đàn (Minh 1530 / Thanh 1749) đối sánh Đàn Nam Giao (Nguyễn · Gia Long 1806)",
      eraEn: "Circular Mound Altar (Ming 1530 / Qing 1749) vs Nam Giao Altar (Nguyen, Gia Long 1806)",
      dimensionsReal: "Viên Khâu Đàn: 3 tầng tròn Ø70/50/30 m (cao 5,17 m) · Đàn Nam Giao Huế: Viên Đàn Ø40 m + Phương Đàn 78 m + Tầng hạ 126 m",
      layers: [
        {
          partId: "cmp-dual-axis-ground",
          nameVi: "Mặt bằng đối chiếu trục Bắc–Nam (Tường vuông ngoài & rừng thông Huế)",
          nameEn: "Dual North–South Comparative Precinct Base (Beijing Outer Wall vs Hue Pine Terrace)",
          nameZh: "南北礼仪基址双轴对比板",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Left Beijing precinct BoxGeometry(w: 3.40, h: 0.14, d: 3.40) at x = -2.20 + Right Hue precinct BoxGeometry(w: 3.40, h: 0.14, d: 3.40) at x = +2.20 + pos [0, 0.07, 0] + rot [0, 0, 0]",
          explodeOffset: [0, -0.75, 0],
          pbrMaterial: { colorHex: "#707573", roughness: 0.86, metalness: 0.03, clearcoat: 0.0 },
          mechanicsNoteVi: "Đặt song song hai khu đàn tế cùng hướng mặt về phương Nam, trực quan hóa khác biệt giữa tổ hợp đá cẩm thạch khép kín Bắc Kinh và không gian mở hòa quyện đồi thông Huế.",
          mechanicsNoteEn: "Juxtaposes both south-facing ritual precincts at matching scale, contrasting Beijing's enclosed marble geometry with Hue's open terraced grove."
        },
        {
          partId: "cmp-beijing-three-marble-tiers",
          nameVi: "Viên Khâu Đàn: 3 tầng tròn Hán Bạch Ngọc (Ø70 m / 50 m / 30 m)",
          nameEn: "Beijing Circular Mound: 3 Hanbaiyu Marble Tiers (Ø70 / 50 / 30 m)",
          nameZh: "北京圜丘三层汉白玉圆台",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "3x stacked CylinderGeometry(r: 1.40 / 1.00 / 0.60, h: 0.22 each, radialSegments: 36) + 4x stairways BoxGeometry(0.28, 0.66, 0.45) + pos [-2.20, 0.25..0.69, 0] + rot [0, 0, 0]",
          explodeOffset: [-0.85, 0.55, 0],
          pbrMaterial: { colorHex: "#E8E4DA", roughness: 0.36, metalness: 0.05, clearcoat: 0.22 },
          mechanicsNoteVi: "Ba tầng hoàn toàn hình tròn bằng đá cẩm thạch trắng Hán Bạch Ngọc, mỗi tầng cao khoảng 1,72 m, phản ánh tuyệt đối tính Thuần Dương của Trời.",
          mechanicsNoteEn: "Three purely circular terraces in white Hanbaiyu marble (~1.72 m per tier), expressing the pure Yang geometry of Heaven."
        },
        {
          partId: "cmp-beijing-nine-multiples",
          nameVi: "Viên Khâu Đàn: Đá Thiên Tâm Thạch & 9 vòng bội số 9 (9 → 81 phiến)",
          nameEn: "Beijing Tianxinshi Center Stone & Concentric Multiples of 9 (9 to 81)",
          nameZh: "天心石与九重九倍数扇面石（9至81块）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "Center disk CylinderGeometry(r: 0.08, h: 0.03, segments: 18) + 9x concentric TorusGeometry(r: 0.14..0.56, tube: 0.014, tubularSegments: 36) + pos [-2.20, 0.82, 0] + rot [1.5708, 0, 0]",
          explodeOffset: [-0.85, 1.55, 0],
          pbrMaterial: { colorHex: "#D8D3C8", roughness: 0.32, metalness: 0.06, clearcoat: 0.28 },
          mechanicsNoteVi: "Đứng tại Thiên Tâm Thạch phát ngôn sẽ tạo hiện tượng cộng hưởng phản xạ âm thanh từ 360 lan can đá bao quanh (hiệu ứng hồi âm tự nhiên).",
          mechanicsNoteEn: "Standing on the central Tianxinshi stone produces acoustic reflection and amplification off the surrounding 360 marble balustrades."
        },
        {
          partId: "cmp-beijing-round-square-walls",
          nameVi: "Viên Khâu Đàn: Tường trong tròn – Tường ngoài vuông (Thiên Viên Địa Phương)",
          nameEn: "Beijing Inner Circular Wall & Outer Square Wall (Round Heaven, Square Earth)",
          nameZh: "内圆外方壝墙（天圆地方）",
          geometryType: "TorusGeometry",
          dimensionsSpec: "Inner wall CylinderGeometry(rOuter: 1.54, rInner: 1.48, h: 0.26, segments: 48, openEnded: true) + outer square 4x BoxGeometry(w: 3.24, h: 0.28, d: 0.08) + pos [-2.20, 0.28, 0] + rot [0, 0, 0]",
          explodeOffset: [-1.15, 2.35, 0],
          pbrMaterial: { colorHex: "#821C1C", roughness: 0.58, metalness: 0.06, clearcoat: 0.12 },
          mechanicsNoteVi: "Mã hóa trực tiếp vũ trụ quan Thiên Viên Địa Phương bằng hai vòng tường đỏ lợp ngói lưu ly xanh lam (sắc Trời).",
          mechanicsNoteEn: "Encodes the Round Heaven, Square Earth cosmology directly through concentric crimson walls capped with cobalt-blue glazed tiles."
        },
        {
          partId: "cmp-hue-lower-middle-square",
          nameVi: "Đàn Nam Giao Huế: Tầng Hạ (126 m) & Phương Đàn tầng Trung (78 m × 78 m)",
          nameEn: "Hue Nam Giao: Lower Base (126 m) & Middle Square Terrace (78 m × 78 m)",
          nameZh: "顺化南郊坛下层方台（126米）与中层方坛（78米）",
          geometryType: "BoxGeometry",
          dimensionsSpec: "Lower BoxGeometry(w: 2.80, h: 0.20, d: 2.80) + Middle BoxGeometry(w: 1.78, h: 0.22, d: 1.78) + 4x stairways BoxGeometry(0.24, 0.42, 0.36) + pos [2.20, 0.24/0.45, 0] + rot [0, 0, 0]",
          explodeOffset: [0.85, 0.55, 0],
          pbrMaterial: { colorHex: "#9B2C24", roughness: 0.72, metalness: 0.04, clearcoat: 0.06 },
          mechanicsNoteVi: "Khác với 3 tầng đều tròn ở Bắc Kinh, Đàn Nam Giao Huế gộp cả lễ tế Trời và Đất (Hợp Tế) trên cùng một kiến trúc với 2 tầng vuông dưới biểu trưng Đất và Con Người.",
          mechanicsNoteEn: "Unlike Beijing's all-circular mound, Hue's Nam Giao combines Heaven and Earth worship in a single stepped monument whose two lower square terraces symbolize Earth and Humanity."
        },
        {
          partId: "cmp-hue-top-circular-altar",
          nameVi: "Đàn Nam Giao Huế: Viên Đàn tầng Thượng (Ø40 m) & Nhà Bạt Thanh Ốc",
          nameEn: "Hue Nam Giao: Upper Circular Terrace (Ø40 m) & Blue-Canopy Thanh Oc",
          nameZh: "顺化南郊坛上层圆坛（直径40米）与青屋帷幔",
          geometryType: "CylinderGeometry",
          dimensionsSpec: "Circular terrace CylinderGeometry(rTop: 0.88, rBot: 0.90, h: 0.24, radialSegments: 36) + blue canopy ConeGeometry(r: 0.52, h: 0.32, radialSegments: 16) + pos [2.20, 0.68, 0] + rot [0, 0, 0]",
          explodeOffset: [0.85, 1.65, 0],
          pbrMaterial: { colorHex: "#2B455C", roughness: 0.46, metalness: 0.10, clearcoat: 0.18 },
          mechanicsNoteVi: "Tầng thượng hình tròn đường kính 40 m quét vôi xanh và dựng nhà Thanh Ốc (lợp vải xanh) khi hành lễ, tạo tam tài Thiên (tròn) – Địa (vuông) – Nhân (vuông dưới).",
          mechanicsNoteEn: "The 40-meter upper circular terrace is lime-washed blue and topped with a blue-draped Thanh Oc pavilion during rites, completing the Heaven–Earth–Humanity triad."
        },
        {
          partId: "cmp-hue-trai-cung-axis",
          nameVi: "Trai Cung (Huế) & Bảng trục đối sánh hình học Thiên–Địa–Nhân",
          nameEn: "Abstinence Palace (Trai Cung, Hue) & Shared Ritual Axis Markers",
          nameZh: "顺化斋宫方位与中轴礼制对照标尺",
          geometryType: "ExtrudeGeometry",
          dimensionsSpec: "Trai Cung hall BoxGeometry(w: 0.62, h: 0.30, d: 0.44) at [1.18, 0.29, 1.18] + axis beam ExtrudeGeometry linking Beijing & Hue south gates + pos [0, 0.16, 1.85] + rot [0, 0, 0]",
          explodeOffset: [0, 2.55, 0.95],
          pbrMaterial: { colorHex: "#B8862D", roughness: 0.38, metalness: 0.64, clearcoat: 0.20 },
          mechanicsNoteVi: "Cả hai hoàng triều Minh–Thanh và Nguyễn đều bố trí Trai Cung ở góc Tây Nam để hoàng đế trai giới trước lễ tế Giao, song triều Nguyễn cải biên gọn thành 1 đàn Hợp Tế thay vì tách rời Thiên Đàn – Địa Đàn.",
          mechanicsNoteEn: "Both Ming–Qing and Nguyen courts placed the Abstinence Palace to the southwest for imperial purification, yet the Nguyen adapted the layout into a unified combined-sacrifice altar rather than separate Heaven and Earth temples."
        }
      ],
      cameraPresets: [
        { id: "overview", labelVi: "Toàn cảnh đối sánh hai đàn tế", labelEn: "Side-by-Side Overview", pos: [0, 4.4, 7.6], target: [0, 0.6, 0] },
        { id: "mechanism", labelVi: "Cận cảnh bội số 9 Bắc Kinh vs Tam Tài Huế", labelEn: "Close-up Beijing Multiples of 9 vs Hue Triad", pos: [0, 2.8, 3.6], target: [0, 0.7, 0] },
        { id: "exploded", labelVi: "Tách lớp hình học lễ nghi", labelEn: "Exploded Ritual Geometry", pos: [0.8, 5.4, 9.0], target: [0, 1.6, 0] }
      ],
      learningHighlightVi: "Đặt Viên Khâu Đàn (Bắc Kinh) cạnh Đàn Nam Giao (Huế) cho thấy mạch chung của lễ chế tế Giao Đông Á (Thiên Viên Địa Phương, trục Nam, Trai Cung Tây Nam) cùng sự sáng tạo bản địa của triều Nguyễn khi hợp nhất Tam Tài trên một cấu trúc 3 tầng.",
      learningHighlightEn: "Comparing Beijing's Circular Mound Altar with Hue's Nam Giao Esplanade reveals shared East Asian state ritual geometry (Round Heaven, Square Earth, southern axis, southwestern Trai Cung) alongside the Nguyen Dynasty's local synthesis unifying Heaven, Earth, and Humanity in one three-tier altar."
    }
  ];

  window.CCE_V12_3D_SPECS = SPECS;
})();
